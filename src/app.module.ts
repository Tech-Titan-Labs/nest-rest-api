import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [SongsModule],
})
export class AppModule {}
