/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // eslint-disable-next-line prettier/prettier

  constructor(private readonly usersService: UsersService) {}
  @Get() //get /users
  // eslint-disable-next-line prettier/prettier
  findAll(@Query('role') role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() user: {name:string,email:string,role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
    return user
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {name:string,email:string,role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
    // eslint-disable-next-line prettier/prettier
    return this.usersService.update(+id,userUpdate)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
