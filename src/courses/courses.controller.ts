import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CourseService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';


@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CourseService) {}

    @Get()
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    getByID(@Param('id') id: number) {
        return  this.coursesService.findOne(id);
    }
    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.create(createCourseDto);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.coursesService.update(id, updateCourseDto);
    }
    @Delete(':id')
    remove(@Param('id') id: number, @Body() body){
        return this.coursesService.remove(id);
    }

}