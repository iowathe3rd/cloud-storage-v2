import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';
import {ErrorMiddleware} from "./middlewares/error.middleware";
import {AuthController} from "./auth/auth.controller";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
      MongooseModule.forRoot(process.env.DB_URl),
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(ErrorMiddleware)
            .forRoutes(AuthController)
    }
}
