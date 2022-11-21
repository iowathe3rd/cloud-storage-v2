import {UserDto} from "../auth/dto/user.dto";

export interface User{
    tokens: {
        accessToken: string,
        refreshToken: string,
    };
    user: UserDto;
}