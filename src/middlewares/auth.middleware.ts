import {
    HttpException,
    HttpStatus,
    Injectable,
    NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {TokenService} from "../user/services/token/token.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly tokenService: TokenService) {}

    use(req: Request, res: Response, next: NextFunction) {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader){
                throw new HttpException(
                    'Пользователь не авторизован',
                    HttpStatus.UNAUTHORIZED,
                );
            }

            const accessToken = authHeader.split(' ')[1];
            if(!accessToken){
                throw new HttpException(
                    'Пользователь не авторизован',
                    HttpStatus.UNAUTHORIZED,
                );
            }

            const userData = this.tokenService.validateAccessToken(accessToken);
            if (!userData){
                throw new HttpException(
                    'Пользователь не авторизован',
                    HttpStatus.UNAUTHORIZED,
                );
            }
            req.user = userData;
            next();
        } catch (e) {
            throw new HttpException(
                'Пользователь не авторизован',
                HttpStatus.UNAUTHORIZED,
            );
        }
    }
}
