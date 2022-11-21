import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class LoginDto {
    @IsEmail({ message: 'incorrect email' })
    email: string;

    @IsString({ message: 'password must be string' })
    @MinLength(5, { message: 'password must be longer than 5 chars' })
    password: string;
}
