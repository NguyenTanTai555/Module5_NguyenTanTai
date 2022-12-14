import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from "../../../../model/customer/Customer";
import {TypeCustomer} from "../../../../model/customer/TypeCustomer";

// @ts-ignore
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  //@ts-ignore
  customer: Customer = {};
  customers: Customer[];
  typeCustomer: TypeCustomer[] = [
    {id: 1, name: 'Platinum'},
    {id: 2, name: 'Diamond'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
