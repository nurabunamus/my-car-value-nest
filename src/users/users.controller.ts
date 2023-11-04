import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: createUserDto) {
    console.log(body);
  }

  //   @Get('/:id')
  //   findUser() {}

  //   @Get()
  //   findAllUsers() {}

  //   @Patch('/:id')
  //   updateUser() {}

  //   @Delete('/:id')
  //   removeUser() {}
}
