/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: object) {
    // eslint-disable-next-line prettier/prettier
    return { id, ...userUpdate }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
