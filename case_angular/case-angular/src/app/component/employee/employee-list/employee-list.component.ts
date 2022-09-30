import {Component, OnInit} from '@angular/core';
import {RentType} from "../../../../model/facility/rentType";
import {Employee} from "../../../../model/employee/employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeis: Employee[] = [
    {
      id: 1, name: 'ĐàO Minh Trĩ',
      dateOfBirth: '1997-12-12',
      idCard: '19037389848028',
      email: 'minhtri@gmail.com',
      phoneNumber: '0905770378',
      division: {
        id: 1,
        name: 'College'
      },
      position: {
        id: 1,
        name: 'Receptionist'
      },
      salary: 200000
    }, {
      id: 2, name: 'ĐàO Minh Trĩ',
      dateOfBirth: '1997-12-12',
      idCard: '19037389848028',
      email: 'minhtri@gmail.com',
      phoneNumber: '0905770378',
      division: {
        id: 2,
        name: 'Intermediate'
      },
      position: {
        id: 2,
        name: 'Expert'
      },
      salary: 200000
    }, {
      id: 3, name: 'ĐàO Minh Trĩ',
      dateOfBirth: '1997-12-12',
      idCard: '19037389848028',
      email: 'minhtri@gmail.com',
      phoneNumber: '0905770378',
      division: {
        id: 3,
        name: 'University'
      },
      position: {
        id: 3,
        name: 'Manage'
      },
      salary: 200000
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
