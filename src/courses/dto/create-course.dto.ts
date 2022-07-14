import { IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    readonly name: string;
    
    @IsString()
    readonly description: string;

    // @IsString(validationOptions: {each: true})
    @IsString({ each: true })
    readonly tags: string[];
}
