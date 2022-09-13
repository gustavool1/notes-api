import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DataSource, DataSourceOptions } from 'typeorm';

export class Database {
  static buildSettings(): DataSourceOptions {
    return {
      name: 'notes',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'english_notes',
      entities: ['src/entities/*{.ts,.js}'],
      migrations: ['src/migrations/*.js'],
      migrationsTableName: 'migrations',
      synchronize: false,
      timezone: 'Z',
    };
  }

  static async build() {
    return TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'password',
          database: 'english_notes',
          entities: [__dirname + '/../**/*.entity.{js,ts}'],
          migrations: ['src/migrations/*.js'],
          migrationsTableName: 'migrations',
          autoLoadEntities: true,
          synchronize: true,
          timezone: 'Z',
          cli: {
            migrationsDir: './migration',
          },
        }),
    });
  }

  static registerEntities(entities: EntityClassOrSchema[]) {
    return TypeOrmModule.forFeature(entities);
  }
}

export const dataSource: DataSource = new DataSource(Database.buildSettings());
