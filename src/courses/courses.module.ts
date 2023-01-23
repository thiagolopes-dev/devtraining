import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CourseService } from './courses.service';
import { Course } from './entities/course.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Course])],

    controllers: [
        CoursesController
    ],
    providers: [
        CourseService
    ]
})
export class CoursesModule {}
