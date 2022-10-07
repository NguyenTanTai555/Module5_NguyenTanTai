import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityServiceService} from "../../../../service/facility/facility-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-facility-add',
  templateUrl: './facility-add.component.html',
  styleUrls: ['./facility-add.component.css']
})
export class FacilityAddComponent implements OnInit {
  private villa
  rentType:any[];
  facilityType:any[];
  facility:FormGroup = new FormGroup({
    facilityType:new FormControl('',[Validators.required]),
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    area:new FormControl('',[Validators.required]),
    numberOfFloor:new FormControl('',[Validators.required]),
    maxPeople:new FormControl('',[Validators.required]),
    cost:new FormControl('',[Validators.required]),
    rentType:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),
  })
  id:number;
  constructor(private facilityServiceService: FacilityServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.facilityServiceService.getAllrentType().subscribe(next=>{
      // @ts-ignore
      this.rentType = next;
    this.facilityServiceService.getAllFacilityType().subscribe(next=>{
      // @ts-ignore
      this.facilityType = next;
    })
    })
  }
  addNewFacility(){
    this.facilityServiceService.saveFacility(this.facility.value).subscribe(next=>{
      console.log(this.rentType);
      this.router.navigateByUrl('/facility')
    })
  }

  ngOnInit(): void {
  }

}
