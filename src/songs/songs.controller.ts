/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song0dto';

@Controller('songs')
export class SongsController {
    constructor(private songsServices :SongsService){}
    @Post()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create(@Body() createSongDTO: CreateSongDTO){
        return this.songsServices.create('animals by martin')
        // return 'create a new songs endpoint';
    }
    @Get()
    findAll(){
        return this.songsServices.findAll()
        // return 'find all songs endpoint';
    }

    @Get(":id")
    findOne(){
        return "fetch song based on Id";
    }

    @Put(':id')
    update(){
        return 'update based on id'
    }

    @Delete(':id')
    delete(){
        return 'delete based on id'
    }
}
 