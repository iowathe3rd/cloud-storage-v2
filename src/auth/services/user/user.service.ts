import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../../../schemas/User';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from '../mail/mail.service';
import {TokenService} from "../token/token.service";
import {UserDto} from "../../dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private readonly mailService: MailService,
    private readonly tokenService: TokenService,
  ) {}

  //registration
  async registration({ email, password, username }) {
    const candidate = await this.UserModel.findOne({ email });
    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует`,
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();
    const user = await this.UserModel.create({
      email,
      username,
      password: hashPassword,
      emailActivationLink: activationLink
    });
    await this.mailService.sendActivationMail(email, `${process.env.API_URL}/auth/activate/${activationLink}`);

    const userDto = new UserDto(user);
    const tokens = this.tokenService.generateTokens({...user})
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }
  }

  //activate account
  async activate(activationLink: string){
    const user = await this.UserModel.findOne({emailActivationLink: activationLink});
    if(!user){
      throw new Error('Некоректная ссылка активации');
    }
    user.isEmailActivated = true;
    await user.save();
  }
}
