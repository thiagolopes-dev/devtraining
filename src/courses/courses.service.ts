import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { response } from 'express';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
    private courses: Course[] = [
        {
            id: 1,
            name: "ADS",
            description: "Análise e Desenvolvimento de Sistemas",
            tags: ["nodejs", "nestjs", "TS"]
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find((course: Course) => course.id === Number(id));

        if (!course) {
            throw new HttpException(`Curso não encontrado`, HttpStatus.NOT_FOUND);
        }

        return course;
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));
        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        }
    }

}
