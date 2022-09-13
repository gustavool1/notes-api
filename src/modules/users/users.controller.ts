import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './users.service';

export class IUser {
  email: string;
  password: string;
  name: string;
}
export class IAuthUser {
  email: string;
  password?: string;
  token?: string;
}
@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post()
  async create(@Body() data: IUser) {
    return this.usersService.create(data);
  }
  @Post('/auth')
  async auth(@Body() data: IAuthUser) {
    return await this.usersService.auth(data);
  }
}
