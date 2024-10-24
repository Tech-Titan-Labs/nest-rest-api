/* eslint-disable prettier/prettier */
import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString, } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateSongDTO{


    @IsString()
    @IsNotEmpty()
    readonly title:string;

    @IsNotEmpty()
    @IsArray()
    @IsString()
    readonly artists : string[]

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate:Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration:Date;
}