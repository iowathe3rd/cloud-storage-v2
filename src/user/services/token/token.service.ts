import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Token, TokenDocument } from '../../../../schemas/Token';
import { Model } from 'mongoose';

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectModel(Token.name) private TokenModel: Model<TokenDocument>,
    ) {}

    generateTokens(payload) {
        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_ACCESS_KEY,
            expiresIn: '20m',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_REFRESH_KEY,
            expiresIn: '30d',
        });
        return {
            accessToken,
            refreshToken,
        };
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await this.TokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = this.TokenModel.create({ user: userId, refreshToken });
        return token;
    }
}
