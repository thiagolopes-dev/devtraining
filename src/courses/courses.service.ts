import { CreateCourseDto } from './dto/create-course.dto';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ) { }

    findAll() {
        return this.courseRepository.find();
    }

    findOne(id: any) {
        const course = this.courseRepository.findOne(id);
        if (!course) {
            throw new NotFoundException(`Curso ${id} não encontrado`);
        }
        return course;
    }

    create(createCourseDto: CreateCourseDto) {
        const course = this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto,
        });
        if (!course) {
            throw new NotFoundException(`Curso ${id} não encontrado`);
        }
        return this.courseRepository.save(course);
    }

    async remove(id: any) {
        const course = await this.courseRepository.findOne(id);
        if (!course) {
            throw new NotFoundException(`Curso ${id} não encontrado`);
        }
        return this.courseRepository.remove(course);
    }
}