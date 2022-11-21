import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserController } from './user.controller';
import {MailService} from "./services/mail/mail.service";
import {TokenService} from "./services/token/token.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../schemas/User";
import {Token, TokenSchema} from "../../schemas/Token";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: User.name, schema: UserSchema},
            {name: Token.name, schema: TokenSchema}
        ]),
        JwtModule.register({}),
    ],
    controllers: [UserController],
    providers: [UserService, MailService, TokenService],
})
export class UserModule {}
