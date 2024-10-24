/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local databse
    private readonly songs=[];

    create(song){
        this.songs.push(song)
    }

    findAll(){
        return this.songs
    }
}
