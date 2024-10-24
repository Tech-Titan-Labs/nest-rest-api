/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
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
