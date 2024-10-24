/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local databse
    private readonly songs=[];

    create(song){

        // save song to database
        this.songs.push(song)
    }

    findAll(){
        // fetch song from db
        return this.songs
    }
}
