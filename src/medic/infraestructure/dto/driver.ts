// Dependencies
import { IsArray, IsString, IsNotEmpty, IsDefined, IsEmail } from "class-validator";
import { Expose } from 'class-transformer';

export class MedicDto {

    @IsDefined()
    @IsNotEmpty()
    @Expose()
    name: string;

    @IsNotEmpty()
    @Expose()
    surname: string;

    @IsNotEmpty()
    @Expose()
    lastname: string;

    @IsDefined()
    @IsNotEmpty()
    @Expose()
    cmp: string;

    @IsDefined()
    @IsNotEmpty()
    @Expose()
    dni: string;

    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    @Expose()
    email: string;

    @IsString()
    @Expose()
    photo: string;

    @IsString({ each: true })
    @IsArray()
    @Expose()
    locations: string[];
}
