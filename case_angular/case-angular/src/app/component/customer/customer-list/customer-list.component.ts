import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../model/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer = {
    id: 1,
    name: 'Nguyễn Tấn Tài',
    dateOfBirth: '1995/02/16',
    idCard: '201710892',
    phoneNumber: '0905774661',
    typeCustomer: {
      id: 1,
      name: 'Platinum'
    },
    address: '25 Nguyễn Thông'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
