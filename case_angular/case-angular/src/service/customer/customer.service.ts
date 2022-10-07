import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer/Customer";

const CUSTOMER_URL = `${environment.URL_API}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer>{
    return this.httpClient.get<Customer>('http://localhost:3000/customer');
  }
  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customer/' + id);
  }

  editCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>('http://localhost:3000/' + customer.id, customer);
  }

  saveCustomer(customer) {
    return this.httpClient.post('http://localhost:3000/customer', customer);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/customer/' + id);
  }

  getAllTypeCustomer(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/typeCustomer")
  }
  findTypeCustomerById(id:number){
    return this.httpClient.get("http://localhot:3000/typeCustomer/"+id)
  }


}

