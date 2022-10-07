import {CarCenter} from "./carCenter";
import {Travel} from "./travel";

export interface Car {
  id?:number;
  typeCar?:string;
  carCenter:CarCenter;
  startDestination:Travel;
  endDestination:Travel;
  phoneNumber?:string;
  email?:string;
  startHouse?:string;
  endHouse?:string;
}
