// Dependencies
import { IsArray, IsString, IsNotEmpty, IsDefined } from "class-validator";
import { Expose } from 'class-transformer';

export class DriverDto {

    @IsDefined()
    @IsNotEmpty()
    @Expose()
    name: string;

    @Expose()
    @IsNotEmpty()
    surname: string;

    @Expose()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @Expose()
    photo: string;

    @IsString({ each: true })
    @IsArray()
    @Expose()
    locations: string[];
}
