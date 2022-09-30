import {Component, OnInit} from '@angular/core';
import {TypeCustomer} from "../../../../model/customer/TypeCustomer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  typeCustomer: TypeCustomer[] = [
    {id: 1, name: 'Platinum'},
    {id: 2, name: 'Diamond'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
