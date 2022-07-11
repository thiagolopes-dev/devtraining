import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CourseService } from './courses.service';


@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CourseService) {}

    @Get()
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id')
    getByID(@Param('id') id: string) {
        return  this.coursesService.findOne(id);
    }
    @Post()
    create(@Body() body) {
        return this.coursesService.create(body);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coursesService.update(id, body);
    }
    @Delete(':id')
    remove(@Param('id') id : string, @Body() body){
        return this.coursesService.remove(id);
    }

}