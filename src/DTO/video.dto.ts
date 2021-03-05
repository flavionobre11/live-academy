import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString, Matches, MaxLength, MinLength } from 'class-validator'
export class VideoDTO {

    readonly generateId: String = `${Date.now()%((Math.random()*1000000000))}`

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly title: string;

    @IsString()
    @MinLength(20)
    @MaxLength(400)
    readonly description: string;

    @IsString()
    @Matches(/^((https:\/\/)?(www.)?(youtube)?(youtu.be)?(.com)?)\/(\S*)$/, {
        message: "Digite uma url válida."
    })
    readonly url: string

    @IsOptional()
    @IsNumber()
    @IsPositive()
    readonly duration: number;

    @IsOptional()
    @IsBoolean()
    readonly done: boolean;
}