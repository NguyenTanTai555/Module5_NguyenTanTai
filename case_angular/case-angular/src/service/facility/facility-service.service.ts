import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility/facility";
import {RentType} from "../../model/facility/rentType";
import {FacilityType} from "../../model/facility/facilityType";

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Facility>{
   return  this.httpClient.get<Facility>('http://localhost:3000/facility')
  }
  findById(id:number):Observable<Facility>{
    return this.httpClient.get<Facility>('http://localhost:3000/facility'+id)
  }
  saveFacility(facility){
    return this.httpClient.post('http://localhost:3000/facility',facility);
  }
  updateFacility(facility: Facility):Observable<Facility>{
    return this.httpClient.patch<Facility>('http://localhost:3000/facility/'+facility.id,facility);
  }
  deleteFacility(id:number){
   return this.httpClient.delete('http://localhost:3000/facility/'+id)
  }
  getAllrentType(): Observable<RentType>{
    return this.httpClient.get<RentType>('http://localhost:3000/rentType')
  }
  findRentTypeById(id:number):Observable<RentType>{
    return this.httpClient.get<RentType>('http://localhost:3000/rentType/'+id);
  }
  getAllFacilityType():Observable<FacilityType>{
    return this.httpClient.get<FacilityType>('http://localhost:3000/facilityType/')
  }
}
