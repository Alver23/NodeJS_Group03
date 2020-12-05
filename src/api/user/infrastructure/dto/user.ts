// Dependencies
import { Expose } from 'class-transformer';
import {IsNotEmpty, IsDefined, IsEmail, IsString, IsArray } from "class-validator";

export class User {

    @IsNotEmpty()
    @IsDefined()
    @Expose()
    name: string;

    @IsEmail()
    @Expose()
    email: string;

    @IsNotEmpty()
    @IsDefined()
    @Expose()
    password: string;

    @IsString({ each: true })
    @IsArray()
    @Expose()
    roles: string[];
}
