import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString({ message: 'password must be string' })
    @MinLength(5, { message: 'password must be longer than 5 chars' })
    password: string;

    @MaxLength(40, { message: 'username must be shorter than 40 chars' })
    @IsString({ message: 'username must be string' })
    @IsNotEmpty({ message: 'username must be not empty' })
    username: string;
}
