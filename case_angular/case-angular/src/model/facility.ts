import {FacilityType} from "./facilityType";
import {RentType} from "./rentType";

export interface Facility {
  facilityType: FacilityType ;
  facilityName?: string;
  area?: number;
  cost?: number;
  maxPeople?:number;
  rentType: RentType;
  standardRoom?: string;
  description?: string;
  poolArea?: number;
  numberFloor?: number;
  facilityFree?: string;

}
