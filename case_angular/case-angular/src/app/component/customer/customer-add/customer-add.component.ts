import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../service/customer/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  typeCustomers: any[];
  customer: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    typeCustomer: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })
  id: number;

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerService.getAllTypeCustomer().subscribe(next => {
      this.typeCustomers = next;
    })
  }

  addNewCustomer() {
    this.customerService.saveCustomer(this.customer.value).subscribe(next => {
      console.log(this.typeCustomers);
      this.router.navigateByUrl('/customer')
    })
  }

  // getCustomer(id:number){
  //   return this.customerService.findById(id).subscribe(customer =>{
  //     this.customerForm = new FormGroup({
  //       id: new FormControl(customer.id),
  //       name: new FormControl(customer.name),
  //       dateOfBirth: new FormControl(customer.dateOfBirth),
  //       idCard: new FormControl(customer.idCard),
  //       phoneNumber: new FormControl(customer.phoneNumber),
  //       typeCustomer: new FormControl()
  //     })
  //   })
  // }

  ngOnInit(): void {
  }

}
