import {
    Controller,
    Get,
    Post,
    Body,
    HttpStatus,
    Res,
    HttpException, Param,
} from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('registration')
    async registration(
        @Body() createUserDto: CreateUserDto,
        @Res() res: Response,
    ) {
        try {
            const userData = await this.userService.registration(createUserDto);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            return res
                .status(HttpStatus.CREATED)
                .json(userData);
        } catch (e) {
            console.log(e);
            throw new HttpException(
                'При регистрации что то пошло не так',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Post('login')
    login() {
        try {
        } catch (e) {}
    }
    @Post('logout')
    logout() {
        try {
        } catch (e) {}
    }
    @Get('/activate/:link')
    activate(@Param() params, @Res() res: Response) {
        try {
            this.userService.activate(params.link);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            console.log(e);
            throw new HttpException("При активации почты пользователя возникла ошибка", HttpStatus.BAD_REQUEST);
        }
    }
    @Get('refresh')
    refresh() {
        try {
        } catch (e) {}
    }
}
