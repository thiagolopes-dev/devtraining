import { Tag } from './entities/tag.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,

        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>
    ) { }

    findAll() {
        return this.courseRepository.find();
    }


    findOne(id: string) {
        const course = this.courseRepository.findOne({where:{"id": +id}});
        if (!course) {
            throw new NotFoundException(`Curso ${id} não encontrado`);
        }
        return course;
    }

    async create(createCourseDto: CreateCourseDto) {
        const tags = await Promise.all(
            createCourseDto.tags.map((name: string) => this.preloadTagByName(name)),
        );
        const course = this.courseRepository.create({
            ...createCourseDto,
            tags,
        });
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        const tags = updateCourseDto.tags && 
        (await Promise.all(
            updateCourseDto.tags.map((name)=> this.preloadTagByName(name)),
        ));
   
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCourseDto,
            tags
        });
        if (!course) {
            throw new NotFoundException(`Curso ${id} não encontrado`);
        }
        return this.courseRepository.save(course);
    }

    async remove(id: string) {
        const course = await this.courseRepository.findOne({where:{"id": +id}});
        if (!course) {
            throw new NotFoundException(`Curso ${id} não encontrado`);
        }
        return this.courseRepository.remove(course);
    }

    private async preloadTagByName(name: string): Promise<any> {
        const tag = await this.tagRepository.findOne({where:{"name": name}});
        if (tag) {
            return tag;
        }
        return this.tagRepository.create({ name });
    }
}