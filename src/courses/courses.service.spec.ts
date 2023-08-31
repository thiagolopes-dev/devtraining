import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

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
        created_at: date,
      },
    ];
    const expectOutputCourses = {
      id,
      name: 'Test',
      description: 'Test description',
      created_at: date,
      tags: expectOutputTags,
    };
    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
    };
    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };
    //@ts-expect-error defined part od methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part od methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDto: CreateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };
    const newCourse = await service.create(createCourseDto);
    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(newCourse);
  });

  it('should gets a courses', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];
    const expectOutputCourses = [
      {
        id,
        name: 'Test',
        description: 'Test description',
        created_at: date,
        tags: expectOutputTags,
      },
    ];

    const mockCourseRepository = {
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };
    //@ts-expect-error defined part od methods
    service['courseRepository'] = mockCourseRepository;
    const courses = await service.findAll();
    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(courses);
  });

  it('should list courses', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];
    const expectOutputCourses = [
      {
        id,
        name: 'Test',
        description: 'Test description',
        created_at: date,
        tags: expectOutputTags,
      },
    ];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };
    //@ts-expect-error defined part od methods
    service['courseRepository'] = mockCourseRepository;
    const course = await service.findOne(id);
    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should update a course', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];
    const expectOutputCourses = {
      id,
      name: 'Test',
      description: 'Test description',
      created_at: date,
      tags: expectOutputTags,
    };
    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
    };
    const mockCourseRepository = {
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };
    //@ts-expect-error defined part od methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part od methods
    service['tagRepository'] = mockTagRepository;

    const  updateCourseDto: UpdateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };
    const course = await service.update(id, updateCourseDto);
    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('should deletes a course', async () => {
    const expectOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];
    const expectOutputCourses = [
      {
        id,
        name: 'Test',
        description: 'Test description',
        created_at: date,
        tags: expectOutputTags,
      },
    ];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };
    //@ts-expect-error defined part od methods
    service['courseRepository'] = mockCourseRepository;
    const courses = await service.remove(id);
    expect(mockCourseRepository.remove).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(courses);
  });
});
