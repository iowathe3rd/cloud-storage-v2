import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateAuthDto} from './dto/create-auth.dto';
import {User, UserDocument} from '../../schemas/User';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Request, Response} from 'express';
import {ApiError} from '../exceptions/api-error';
import * as bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import {UserDto} from './dto/user.dto';
import {MailService} from './services/mail/mail.service';
import {TokenService} from './services/token/token.service';
import {LoginDto} from './dto/login.dto';
import {IUser} from "../models/IUser";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<UserDocument>,
        private readonly mailService: MailService,
        private readonly tokenService: TokenService,
    ) {}

    //user registration
    async registration(createAuthDto: CreateAuthDto, res: Response): Promise<IUser> {
        //getting data from dto
        const { email, password, username } = createAuthDto;
        //searching for existing candidate in database
        const candidate = await this.UserModel.findOne({ email });
        if (candidate) {
            throw ApiError.BadRequest(
                `Пользователь с почтовым адресом ${email} уже существует`,
            );
        }
        //encrypting password/creating link/ creating user data
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();
        const user = await this.UserModel.create({
            email,
            username,
            password: hashPassword,
            emailActivationLink: activationLink,
        });
        //sending activation mail
        await this.mailService.sendActivationMail(
            email,
            `${process.env.API_URL}/auth/activate/${activationLink}`,
        );
        //returning response<user data>
        return await this.getUserData(user, res);
    }

    //login user
    async login(dto: LoginDto, res: Response): Promise<object> {
        const { email, password } = dto;
        const user = await this.UserModel.findOne({ email });
        const isPassEquals = await bcrypt.compare(password, user.password);

        if (!user || !isPassEquals) {
            throw new HttpException("Логин или пароль неправильны", HttpStatus.UNAUTHORIZED);
        }

        return this.getUserData(user, res);
    }

    async logout(req: Request, res: Response) {
        const { refreshToken } = req.cookies;
        const token = await this.tokenService.removeToken(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token);
    }

    async refresh(req: Request, res: Response) {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            throw new HttpException("Вы не авторизованы", HttpStatus.UNAUTHORIZED);
        }
        const userData = this.tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await this.tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw new HttpException("Вы не авторизованы", HttpStatus.UNAUTHORIZED);
        }
        const user = await this.UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = this.tokenService.generateTokens({ ...user });

        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, userDto };
    }

    async getUserData(user, res): Promise<IUser> {
        const userDto = new UserDto(user);
        const tokens = this.tokenService.generateTokens({ ...userDto });

        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    }

    //activating user email
    async activate(activationLink: string, res: Response) {
        const user = await this.UserModel.findOne({
            emailActivationLink: activationLink,
        });
        if (!user) {
            throw new HttpException('Некоректная ссылка активации', HttpStatus.BAD_REQUEST);
        }
        user.isEmailActivated = true;
        await user.save();
        return res.redirect(process.env.CLIENT_URL);
    }
}
