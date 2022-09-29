import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../model/customer/Customer';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  //@ts-ignore
  customer: Customer = {};
  customers: Customer[] = [{
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
  },{
    id: 2,
    name: 'Lê Hồng Sơn',
    dateOfBirth: '1997/11/11',
    idCard: '201710892',
    phoneNumber: '0905774661',
    typeCustomer: {
      id: 2,
      name: 'Diamond'
    },
    address: '25 Nguyễn Thông'
  },{
    id: 3,
    name: 'Đào Minh Trí',
    dateOfBirth: '1999/02/11',
    idCard: '201710892',
    phoneNumber: '0905774661',
    typeCustomer: {
      id: 3,
      name: 'Gold'
    },
    address: '25 Nguyễn Thông'
  },{
    id: 4,
    name: 'Trần Hoàng Long',
    dateOfBirth: '1995/02/16',
    idCard: '201710892',
    phoneNumber: '0905774661',
    typeCustomer: {
      id: 4,
      name: 'Silver'
    },
    address: '25 Nguyễn Thông'
  },{
    id: 5,
    name: 'Nguyễn Hoàng Đa Phúc',
    dateOfBirth: '1995/02/16',
    idCard: '201710892',
    phoneNumber: '0905774661',
    typeCustomer: {
      id: 3,
      name: 'Member'
    },
    address: '25 Nguyễn Thông'
  }
  ];
  createCustomer(event: any) {
    this.customers.push(event);
    console.log("địt mẹ")
  }
  constructor() {
  }

  ngOnInit(): void {
  }
  setCustomer(customer: Customer) {
    this.customer = customer;
  }

}
