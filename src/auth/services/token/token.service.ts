import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Token, TokenDocument } from '../../../../schemas/Token';
import { Model } from 'mongoose';

export interface GenerateTokenProps {
    accessToken: string;
    refreshToken: string;
}

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectModel(Token.name) private TokenModel: Model<TokenDocument>,
    ) {}

    generateTokens(payload): GenerateTokenProps {
        const accessToken = this.jwtService.sign(payload, {
            secret: `${process.env.JWT_ACCESS_KEY}`,
            expiresIn: '30s',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: `${process.env.JWT_REFRESH_KEY}`,
            expiresIn: '30d',
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    validateAccessToken(token: string) {
        try {
            const userData = this.jwtService.verify(token, {
                secret: process.env.JWY_ACCESS_KEY,
            });
            return userData;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            const userData = this.jwtService.verify(token, {
                secret: process.env.JWT_REFRESH_KEY,
            });
            return userData;
        } catch (e) {
            return null
        }
    }

    async findToken(refreshToken: string) {
        const tokenData = this.TokenModel.findOne({ refreshToken });
        return tokenData;
    }

    async saveToken(userId, refreshToken): Promise<TokenDocument> {
        const tokenData = await this.TokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await this.TokenModel.create({ user: userId, refreshToken });
    }

    async removeToken(refreshToken: string) {
        const tokenData = this.TokenModel.deleteOne({ refreshToken });
        return tokenData;
    }
}
