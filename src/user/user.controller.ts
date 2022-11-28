import {
    Controller,
    Get,
    Post,
    Body,
    HttpStatus,
    Res,
    HttpException, Param, Req,
} from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {Request, Response} from 'express';
import {LoginUserDto} from "./dto/login-user.dto";

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
            res.cookie('accessToken', userData.accessToken, {
                maxAge: 30 * 60 * 1000,
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
    async login(@Body() loginDto: LoginUserDto, @Res() res: Response) {
        try {
            const userData = await this.userService.login(loginDto);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            res.cookie('accessToken', userData.accessToken, {
                maxAge: 30 * 60 * 1000,
                httpOnly: true,
            });
            return res.json(userData);
        } catch (e) {
            throw new HttpException("Данные были введены некорректно", HttpStatus.BAD_REQUEST);
        }
    }
    @Post('logout')
    async logout(@Req() req: Request, @Res() res: Response) {
        try {
            const {refreshToken} = req.cookies;
            await this.userService.logout(refreshToken);
            res.clearCookie("refreshToken");
            return res.status(HttpStatus.OK).json({message: "logout"});
        } catch (e) {
            throw new HttpException("Возникла непридвиденная ошибка", HttpStatus.BAD_REQUEST);
        }
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
    async refresh(@Req() req: Request, @Res() res: Response) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await this.userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            return res.status(HttpStatus.CREATED).json(userData);
        } catch (e) {
            throw new HttpException("Вы не авторизованы", HttpStatus.UNAUTHORIZED);
        }
    }
    //mock route,  for auth testing
    @Get('users')
    async getUsers(@Res() res: Response){
        try {
            const users = await this.userService.getAllUsers();
            return res.status(HttpStatus.OK).json(users)
        }catch (e) {
            throw new HttpException("bad request", HttpStatus.BAD_REQUEST);
        }
    }
}
