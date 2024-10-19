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
  findAll(@Query('role') role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
    return {role };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

//   @Post()
//   create(@Body() user: object) {
//     return user;
//   }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
