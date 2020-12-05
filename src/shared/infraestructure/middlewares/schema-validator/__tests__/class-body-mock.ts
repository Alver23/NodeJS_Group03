import {IsNotEmpty, IsDefined, ValidateNested} from 'class-validator';
import { Type } from "class-transformer";

export class ChildrenModel {
  @IsNotEmpty()
  @IsDefined()
  name: string;
}

export class ClassBodyMock {

  @IsNotEmpty()
  @IsDefined()
  name: string;

  @IsDefined({ each: true})
  @ValidateNested()
  @Type(() => ChildrenModel)
  childrens: ChildrenModel[];
}
