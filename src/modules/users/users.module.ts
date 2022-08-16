import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import userEntities from './entities';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([...userEntities])],
  providers: [UserService],
})
export class UserModule {}
