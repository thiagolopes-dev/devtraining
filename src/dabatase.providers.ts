import { DataSource } from 'typeorm';
import { CreateCoursesTable1685464446275 } from './migrations/1685464446275-CreateCoursesTable';
import { CreateTagsTable1685465130571 } from './migrations/1685465130571-CreateTagsTable';
import { CreateCoursesTagsTable1629405679806 } from './migrations/1685553867438-CreateCourseTagsTable';
import { AddCoursesIdToCoursesTagsTable1629406086494 } from './migrations/1685554705629-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1629406641111 } from './migrations/1685556004111-AddTagsIdToCoursesTagsTable';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [
          __dirname + '/../**/*.entity.js',
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1685464446275,
    CreateTagsTable1685465130571,
    CreateCoursesTagsTable1629405679806,
    AddCoursesIdToCoursesTagsTable1629406086494,
    AddTagsIdToCoursesTagsTable1629406641111
  ],
});