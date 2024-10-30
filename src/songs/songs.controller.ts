/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsServices :SongsService){}
    @Post()
   
    create(@Body() createSongDTO: CreateSongDTO){
        return this.songsServices.create(createSongDTO)

    }

    @Get()
    findAll(){
      
        try{
            return this.songsServices.findAll()
           }
        catch(err){
            throw new HttpException('server error',HttpStatus.INTERNAL_SERVER_ERROR,{cause:err})
            return "am in the catch block "
        }

    }

    @Get(":id")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars 
    findOne(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))id:number){
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
 