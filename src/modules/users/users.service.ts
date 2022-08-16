import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserDto from './dtos';
import { User } from './entities/users.entitie';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: UserDto) {
    const user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    return user;
  }
}
