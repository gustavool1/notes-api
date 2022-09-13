import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import entities from './modules/entitities';
import { NotesModule } from './modules/notes/notes.module';
import { UserModule } from './modules/users/users.module';
import { Database } from './helpers/database';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'english_notes',
      entities: entities,
      synchronize: true,
      autoLoadEntities: true,
    }),
    NotesModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
