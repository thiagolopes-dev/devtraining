import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CourseService } from './courses.service';


@Controller('courses')
export class CoursesController {

    constructor(private readonly coourserService: CourseService) {}


    // @Get()
    // findAll(){
    //     return 'Listagem de cursos';
    // }

    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Listagem de Cursos');
    }

    @Get(':id')
    getByID(@Param('id') id: string) {
        return `Curso ADS ${id}`;
    }
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Atualização do Curso ${id}`;
    }
    @Delete(':id')
    remove(@Param('id') id : string, @Body() body){
        return `Curso deletado${id}`;
    }

}