import {Controller, Get, Post, Body, Patch, Param, Delete, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {Response} from "express";
import {UserService} from "./services/user/user.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post('registration')
  create(@Body() createAuthDto: CreateAuthDto, @Res() res: Response) {
    // return this.mailService.sendActivationMail('beglerov04@mail.ru', "google.com")
    return this.authService.registration(createAuthDto, res);
  }

  @Post('login')
  login(): string{
    return 'login end-point'
  }

  @Post('logout')
  logout(): string{
    return 'logout end-point'
  }

  @Get('activate/:link')
  activate(@Param() params, @Res() res: Response): void {
    try {
      const activationLink = params.link;
      this.userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_API);
    }catch (e) {
      console.log(e);
    }
  }

  @Get('refresh')
  refresh(): string {
    return 'refresh token route';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'get user by id route';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return 'patch route';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'delete route';
  }
}
