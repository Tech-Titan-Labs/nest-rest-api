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

@Controller('users')
export class UsersController {
  @Get() //get /users
  // eslint-disable-next-line prettier/prettier
  findAll(@Query('role') role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: object) {
    // eslint-disable-next-line prettier/prettier
    return { id, ...userUpdate }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
