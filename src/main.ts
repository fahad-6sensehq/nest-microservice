import { appConfig } from '@configuration/app.config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice({
        transport: Transport.RMQ,
        options: {
            urls: [appConfig.rmqURL],
            queue: `${appConfig.serverType}_skyhaus_email_queue`,
            queueOptions: {
                durable: false,
            },
        },
    });

    const port = appConfig.port;
    await app.listen(port);

    console.log(`
    ================================
    🚀 Application Configuration 🚀
    ================================
    PORT         : ${port}
    Server Type  : ${appConfig.serverType}
    ================================
  `);
}
bootstrap();
