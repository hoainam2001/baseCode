import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    KafkaModule,
    ClientsModule.registerAsync([
      {
        name: 'ORDER_SERVICE',
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'order',
            queueOptions: {
              durable: false,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
