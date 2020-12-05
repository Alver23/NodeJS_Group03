// Dependencies
import { IsNotEmpty, IsDefined } from "class-validator";
import { Expose } from 'class-transformer';

export class Role {
    @IsDefined()
    @IsNotEmpty()
    @Expose()
    name: string;
}
