import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  word: string;

  @Column()
  present: string;

  @Column()
  past: string;

  @Column()
  phrase: string;

  @Column({ name: 'user_id' })
  userId: string;
}
