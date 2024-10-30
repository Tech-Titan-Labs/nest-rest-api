/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
    // local databse
    private readonly songs=[];

    create(song: CreateSongDTO){

        // save song to database
        this.songs.push(song)

        return this.songs;
    }

    findAll(){
        // fetch song from db
        // error come when fetching
        throw new Error("Errror in Db while fetching")
        return this.songs
    }
}
