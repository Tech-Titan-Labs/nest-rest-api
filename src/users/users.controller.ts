import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //get /users
  findAll() {
    return [];
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
