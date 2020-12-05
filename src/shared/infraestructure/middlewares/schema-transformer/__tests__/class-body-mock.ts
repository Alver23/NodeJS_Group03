// Dependencies
import { Expose } from "class-transformer";


export class ClassBodyMock {

  @Expose()
  name: string;

  @Expose()
  email: string;

}
