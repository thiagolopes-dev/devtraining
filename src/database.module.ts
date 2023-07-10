import { Module } from '@nestjs/common';
import { databaseProviders } from './dabatase.providers';


@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}