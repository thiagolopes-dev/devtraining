import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';


describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '45cbfac6-8997-46c7-a26c-f5c4d07a8ee5';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date
      }
    ]
    const expectOutputCourses = {
      id,
      name: 'Test',
      description: 'Test description',
      created_at: date,
      tags: expectOutputTags,
    };
    const mockTagRepository = {
      create: jest.fn().mockReturnValue(
        Promise.resolve(expectOutputTags)
      ),
      findOne: jest.fn().mockReturnValue(
        Promise.resolve(expectOutputTags)
      )
    };
    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(
        Promise.resolve(expectOutputCourses)
      ),
      save: jest.fn().mockReturnValue(
        Promise.resolve(expectOutputCourses)
      )
    };
    //@ts-expect-error defined part od methods
    service['courseRepository'] = mockCourseRepository
    //@ts-expect-error defined part od methods
    service['tagRepository'] = mockTagRepository

    const createCourseDto: CreateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };
    const newCourse = await service.create(createCourseDto);
    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(newCourse);
  });

  // describe('findOne', () => {
  //   describe('buscar curso pelo ID', () => {
  //     it('deve retornar o objeto Course', async () => {
  //       const courseId = '1';
  //       const expectedCourse = {};

  //       courseRepository.findOne.mockReturnValue(expectedCourse);
  //       const course = await service.findOne(courseId);
  //       expect(course).toEqual(expectedCourse);
  //     });

  //     it('deve retornar um NotFoundException', async () => {
  //       const courseId = '1';
  //       courseRepository.findOne.mockReturnValue(undefined);

  //       try {
  //         await service.findOne(courseId);
  //       } catch (error) {
  //         expect(error).toBeInstanceOf(NotFoundException);
  //         expect(error.message).toEqual(`Course ID ${courseId} not found`);
  //       }
  //     });
  //   });
  // });
});