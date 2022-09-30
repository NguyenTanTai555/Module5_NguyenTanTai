import {RentType} from "./rentType";
import {Status} from "./status";

export interface Facility {
 id?:number;
 name?:string;
 area?:number;
 numberOfFloor?:number;
 maxPeople?:number;
 cost?:number;
 rentType: RentType;
 status: Status;
}
