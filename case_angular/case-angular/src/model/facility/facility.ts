import {RentType} from "./rentType";
import {FacilityType} from "./facilityType";

export interface Facility {
  facilityType?: FacilityType;
  id?: number;
  name?: string;
  area?: number;
  numberOfFloor?: number;
  maxPeople?: number;
  cost?: number;
  rentType: RentType;
  image?: string;
}
