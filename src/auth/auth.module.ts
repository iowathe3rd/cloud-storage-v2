import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schemas/User";
import {JwtModule} from "@nestjs/jwt";
import {UserService} from "./services/user/user.service";
import {MailService} from "./services/mail/mail.service";
import {TokenService} from "./services/token/token.service";
import {Token, TokenSchema} from "../../schemas/Token";

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema},{name: Token.name, schema: TokenSchema}]),  JwtModule.register({ secret: process.env.JWT_ACCES_KEY })],
  controllers: [AuthController],
  providers: [AuthService, UserService, MailService, TokenService]
})
export class AuthModule {}
