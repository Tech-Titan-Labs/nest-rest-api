import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';

@Module({
  controllers: [AppController, SongsController],
  providers: [AppService],
  imports: [SongModule, SongsModule],
})
export class AppModule {}
