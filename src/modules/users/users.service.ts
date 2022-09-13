import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { hash, compare } from 'bcryptjs';
import { IAuthUser, IUser } from './users.controller';
import { sign } from 'jsonwebtoken';
import { AppError } from 'src/helpers/errors';
import { env } from 'src/helpers/enviroment';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(data: IUser) {
    data.password = await hash(data.password, 8);
    const user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    return user;
  }
  async auth(data: IAuthUser) {
    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });
    const hashesMatch = await compare(data.password, user.password);
    if (!hashesMatch) {
      throw new AppError('Invalid password', 404);
    }
    user['token'] = sign({ user }, env.jwtSecret);
    return user;
  }
}
