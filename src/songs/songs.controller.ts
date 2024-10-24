/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

    @Post()
    create(){
        return 'create a new songs endpoint';
    }
    @Get()
    findAll(){
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
 