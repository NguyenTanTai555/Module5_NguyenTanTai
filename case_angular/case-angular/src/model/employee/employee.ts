import {Division} from "./division";
import {Position} from "./position";

export interface Employee {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  email?: string;
  idCard?: string;
  phoneNumber?: string;
  position?: Position;
  division: Division;
  salary?: number;
}
