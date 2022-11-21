import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/User';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from './services/mail/mail.service';
import { TokenService } from './services/token/token.service';
import { Token, TokenSchema } from '../../schemas/Token';
import {AuthMiddleware} from "../middlewares/auth.middleware";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Token.name, schema: TokenSchema },
        ]),
        JwtModule.register({ secret: process.env.JWT_ACCES_KEY }),
    ],
    controllers: [AuthController],
    providers: [AuthService, MailService, TokenService],
})
export class AuthModule
    // implements  NestModule
{
    // configure(consumer: MiddlewareConsumer) {
    //     consumer.apply(AuthMiddleware).forRoutes('auth');
    // }
}
