import {Customer} from "../customer/Customer";
import {Employee} from "../employee/employee";
import {Facility} from "../facility/facility";

export interface Contact {
  contactId?:number;
  starDay?:string;
  endDay?:string;
  deposit?:number;
  customer:Customer;
  employee:Employee;
  facility:Facility;
  total?:number;
}
