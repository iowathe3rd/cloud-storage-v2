import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Res,
    Next,
    HttpStatus,
    Req, HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { NextFunction, Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import {IUser} from "../models/IUser";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    //registration route
    @Post('registration')
    create(
        @Body() createAuthDto: CreateAuthDto,
        @Res() res: Response,
    ){
        try {
            const userData = this.authService.registration(createAuthDto, res);

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });

            return res.json(userData);
        } catch (e) {
            console.log(e);
            throw new HttpException("При регистрации что то пошло не так", HttpStatus.BAD_REQUEST);
        }
    }

    //login route
    @Post('login')
    login(
        @Body() loginDto: LoginDto,
        @Res() res: Response,
    ): Promise<Response> | Response {
        try {
            const userData = this.authService.login(loginDto, res);
            return res.status(HttpStatus.OK).json(userData);
        } catch (e) {
            throw new HttpException("Логин или пароль неправильные", HttpStatus.BAD_REQUEST);
        }
    }

    //logout route
    @Post('logout')
    logout(
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> | Response {
        try {
            return this.authService.logout(req, res);
        } catch (e) {
            console.log(e);
            throw new HttpException("Что то пошло не так", HttpStatus.BAD_REQUEST);
        }
    }

    //activate account route
    @Get('activate/:link')
    activate(
        @Param('link') activationLink,
        @Res() res: Response,
        @Next() next: NextFunction,
    ): Promise<void | Response> {
        try {
            return this.authService.activate(activationLink, res);
        } catch (e) {
            console.log(e);
            throw new HttpException("Не удалось подтвердить почту", HttpStatus.BAD_REQUEST);
        }
    }

    //refresh access token route
    @Get('refresh')
    refresh(@Req() req: Request, @Res() res: Response) {
        try {
            return this.authService.refresh(req, res);
        } catch (e) {
            console.log(e);
            throw new HttpException("Не удалось обновить токен", HttpStatus.UNAUTHORIZED);
        }
    }
}
