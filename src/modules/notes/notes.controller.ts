import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { NotesService } from './notes.service';

class INote {
  noteId: string;
}
class INoteUserId {
  userId: string;
}
@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  async create(@Body() data) {
    return await this.notesService.create(data);
  }

  @Get()
  async getNotesById(@Query() data: INote) {
    return await this.notesService.getNoteById(data.noteId);
  }
  @Get('user')
  async getbyUserId(@Query() data: INoteUserId) {
    return await this.notesService.getUserNotes(data.userId);
  }
}
