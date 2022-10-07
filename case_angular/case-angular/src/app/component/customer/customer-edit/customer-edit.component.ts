import {Component, OnInit} from '@angular/core';
import {TypeCustomer} from "../../../../model/customer/TypeCustomer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../service/customer/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../../../../model/customer/Customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customers: Customer[];

  id: number;
  // @ts-ignore
  customer: Customer = {};
  typeCustomer: any[];
  // @ts-ignore
  typeCustomer:TypeCustomer={};
  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id')
    })
    this.customerService.getAllTypeCustomer().subscribe(next => {
      this.typeCustomer = next;
    })
  }

  ngOnInit(): void {
    this.getCustomer()
  }

  private getCustomer() {
    this.customerService.findById(this.id).subscribe(next => {
      this.customer = next;
    }, error => {
      console.log(error)
    }, () => {
      this.getForm();
    })
  }

  private getForm() {
    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      name: new FormControl(this.customer.name, [Validators.required]),
      dateOfBirth: new FormControl(this.customer.dateOfBirth,[Validators.required]),
      idCard: new FormControl(this.customer.idCard),
      phoneNumber: new FormControl(this.customer.phoneNumber),
      typeCustomer: new FormControl(this.customer.typeCustomer.name),
      address: new FormControl(this.customer.address),
    })
  }

  editCustomer() {
    const customer = this.customerForm.value;
    console.log(customer);
    this.customerService.findTypeCustomerById(customer.typeCustomers).subscribe(next => {
      customer.typeCustomer = next;
      this.customerService.editCustomer(customer).subscribe(next => {
        this.router.navigateByUrl('customer')
      })
    })
  }

  onSubmit() {
    this.customer = this.customerForm.value;
    this.customers.push(this.customer);
    for (let i = 0; i <= this.customers.length; i++) {
      console.log(this.customers[i])
    }
  }

  get name() {
    return this.customerForm.get('name');
  }

  get dateOfBirth() {
    return this.customerForm.get('dateOfBirth');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phoneNumber() {
    return this.customerForm.get('phoneNumber');
  }

  get address() {
    return this.customerForm.get('address');
  }
}
