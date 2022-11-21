import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../../../schemas/User';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../../dto/create-user.dto';
import { MailService } from '../mail/mail.service';
import { TokenService } from '../token/token.service';
import { UserDto } from '../../dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<UserDocument>,
        private readonly mailService: MailService,
        private readonly tokenService: TokenService,
    ) {}

    async registration(createUserDto: CreateUserDto) {
        const { email, password, username } = createUserDto;
        const candidate = await this.UserModel.findOne({ email });
        //проверка существует ли пользователь с таким email в бд
        if (candidate) {
            throw new HttpException(
                `Пользователь с почтовым адресом ${email} уже существует`,
                HttpStatus.BAD_REQUEST,
            );
        }
        //хеширование пароля/создание ссылки активации/модели пользователя
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();
        const user = await this.UserModel.create({
            email,
            password: hashPassword,
            emailActivationLink: activationLink,
            username,
        });
        //отправка письма с подтверждением почты на email
        await this.mailService.sendActivationMail(username, email, `${process.env.API_URL}/user/activate/${activationLink}`);
        const userDto = new UserDto(user);
        //создание пары access/refresh токенов
        const tokens = this.tokenService.generateTokens({ ...userDto });
        //сохранение refresh токена в базе данных
        await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async activate(link){
        console.log(link)
        const user = await this.UserModel.findOne({emailActivationLink: link});
        if(!user){
            throw new HttpException("Некоректная ссылка активации", HttpStatus.BAD_REQUEST);
        }
        user.isEmailActivated = true;
        await user.save();
    }
}
