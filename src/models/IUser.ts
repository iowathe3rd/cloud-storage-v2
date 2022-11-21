import {UserDto} from "../auth/dto/user.dto";

export interface IUser{
    accessToken: string;
    refreshToken: string;
    user: UserDto;
}