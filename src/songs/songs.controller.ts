/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsServices :SongsService){}
    @Post()
    create(){
        return this.songsServices.create('animals by martin')
        // return 'create a new songs endpoint';
    }
    @Get()
    findAll(){
        return this.songsServices.findAll()
        return 'find all songs endpoint';
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
 