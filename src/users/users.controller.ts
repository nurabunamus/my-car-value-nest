import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: createUserDto) {
    this.usersService.create(body.email, body.password);
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
