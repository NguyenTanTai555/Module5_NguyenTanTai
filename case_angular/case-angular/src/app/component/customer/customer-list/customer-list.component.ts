import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../model/customer/Customer';
import {CustomerService} from "../../../../service/customer/customer.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  // @ts-ignore c
  customerDelete: Customer = {};
  id: number;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      // @ts-ignore
      this.customers = customers;
    })
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      alert('Xóa thành công !!')
      this.getAll();
    },error => {
      console.log(error);
    })
  }

  getInfoToModal(customer: Customer) {
    this.customerDelete = customer;
  }
}
