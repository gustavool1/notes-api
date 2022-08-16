import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entitiesNotes from './entities';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  controllers: [NotesController],
  imports: [TypeOrmModule.forFeature([...entitiesNotes])],
  providers: [NotesService],
})
export class NotesModule {}
