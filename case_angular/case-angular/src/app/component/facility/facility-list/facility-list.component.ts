import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../../model/facility/facility";
import {FacilityServiceService} from "../../../../service/facility/facility-service.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] =[];
  // @ts-ignore
  facilityDelete: Facility={};
  id:number;
  constructor(private facilityServiceService:FacilityServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }
  getAll(){
    return this.facilityServiceService.getAll().subscribe(facilities=>{
      // @ts-ignore
      this.facilities = facilities;
    })
  }

  ngOnInit(): void {
    this.getAll();
  }
  deleteFacility(id:number){
    return this.facilityServiceService.deleteFacility(id).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getAll();
    },error => {
      console.log(error)
    })
  }

  getInFoToModal(facility: Facility) {
    this.facilityDelete = facility;
  }
}
