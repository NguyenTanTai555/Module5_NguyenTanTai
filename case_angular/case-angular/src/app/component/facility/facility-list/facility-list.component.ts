import {Component, OnInit} from '@angular/core';
import {Facility} from "../../../../model/facility/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [
    {
      id: 1, name: 'Villa Ocean View',
      area: 200,
      maxPeople: 10,
      numberOfFloor: 3,
      rentType: {
        id:1,
        name:'Month'
      },
      cost:3000000,
      status:{
        id:1,
        name:'Full'
      }
    },
    {
      id: 2, name: 'Room Ocean View',
      area: 200,
      maxPeople: 10,
      numberOfFloor: 3,
      rentType: {
        id:1,
        name:'Month'
      },
      cost:3000000,
      status:{
        id:1,
        name:'Full'
      }
    },
    {
      id: 3, name: 'House Ocean View',
      area: 200,
      maxPeople: 10,
      numberOfFloor: 3,
      rentType: {
        id:1,
        name:'Month'
      },
      cost:3000000,
      status:{
        id:1,
        name:'Full'
      }
    },{
      id: 4, name: 'Room Mountain View',
      area: 200,
      maxPeople: 10,
      numberOfFloor: 3,
      rentType: {
        id:1,
        name:'Month'
      },
      cost:3000000,
      status:{
        id:1,
        name:'Full'
      }
    },{
      id: 5, name: 'House Mountain View',
      area: 200,
      maxPeople: 10,
      numberOfFloor: 3,
      rentType: {
        id:1,
        name:'Month'
      },
      cost:3000000,
      status:{
        id:1,
        name:'Full'
      }
    },{
      id: 6, name: 'Villa Mountain View',
      area: 200,
      maxPeople: 10,
      numberOfFloor: 3,
      rentType: {
        id:1,
        name:'Month'
      },
      cost:3000000,
      status:{
        id:1,
        name:'Full'
      }
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
