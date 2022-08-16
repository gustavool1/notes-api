import { Body, Controller, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  async create(@Body() data) {
    return await this.notesService.create(data);
  }
}
