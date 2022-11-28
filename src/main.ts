import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule, {
        cors: true
    });
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('Simple cloud storage')
        .setDescription('The cloud API description')
        .setVersion('1.0')
        .addTag('cloud')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const configService = app.get(ConfigService);
    const port = configService.get('SERVER_PORT');
    app.enableCors({allowedHeaders: '*', origin: '*', credentials: true})
    await app.listen(port);
    console.log(`server started at port ${port}`);
}

bootstrap();
