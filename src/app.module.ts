/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [SongsModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    // consumer.apply(LoggerMiddleware).forRoutes('songs');
    consumer.apply(LoggerMiddleware).forRoutes({path:'songs',method:RequestMethod.POST})
  }
}
