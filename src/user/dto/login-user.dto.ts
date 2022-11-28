import {
    IsEmail,
    IsString,
} from 'class-validator';

export class LoginUserDto {
    @IsEmail()
    email: string;

    @IsString({ message: 'password must be string' })
    password: string;
}
