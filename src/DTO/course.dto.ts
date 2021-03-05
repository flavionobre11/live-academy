import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator'
import { VideoDTO } from './video.dto';

export class CourseDTO {

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly title: string;

    @IsString()
    @MinLength(20)
    @MaxLength(400)
    readonly description: string;

    @IsArray()
    @ArrayMinSize(1)
    @Type(() => VideoDTO)
    @ValidateNested({ each: true })
    readonly videos: VideoDTO[];

}