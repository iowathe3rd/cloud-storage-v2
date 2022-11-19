import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User, UserDocument } from '../../schemas/User';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'express';
import {UserService} from "./services/user/user.service";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>, private readonly userService: UserService) {}

  async registration(createAuthDto: CreateAuthDto, res: Response) {
    try {
      const userData = await this.userService.registration(createAuthDto);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    return `findAll`;
  }

  findOne(id: number) {
    return `findone ${id}`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `update ${id} ${updateAuthDto}`;
  }

  remove(id: number) {
    return `remove ${id}`;
  }
}
