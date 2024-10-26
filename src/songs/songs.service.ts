/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local databse
    private readonly songs=[];

    create(song){

        // save song to database
        this.songs.push(song)

        return this.songs;
    }

    findAll(){
        // fetch song from db
        // error come when fetching
        // throw new Error("Errror in Db while fetching")
        return this.songs
    }
}
