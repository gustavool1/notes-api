import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  async create(data) {
    const note = await this.notesRepository.create(data);
    return await this.notesRepository.save(note);
  }

  async getNoteById(noteId: string) {
    console.log(noteId);
    const note = await this.notesRepository.findOne({
      where: { id: noteId },
    });
    return note;
  }

  async getUserNotes(userId: string) {
    const notes = await this.notesRepository.find({
      where: { userId: userId },
    });
    return notes;
  }
}
