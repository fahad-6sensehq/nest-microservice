import { appConfig } from '@configuration/app.config';
import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Global()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MAIN_SERVICE_RMQ',
                transport: Transport.RMQ,
                options: {
                    urls: [appConfig.rmqURL],
                    queue: `${appConfig.serverType}_skyhaus_main_queue`,
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class MainServiceRabbitMQClientModule {}
