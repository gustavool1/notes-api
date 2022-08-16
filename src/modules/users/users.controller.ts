import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserDto from './dtos';
import { User } from './entities/users.entitie';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userService: UserService,
  ) {}

  @Post()
  async create(@Body() data: UserDto) {
    return this.userService.create(data);
  }
}
