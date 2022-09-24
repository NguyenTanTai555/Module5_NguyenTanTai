import {TypeCustomer} from "./TypeCustomer";

export interface Customer {
  id : number;
  name:string;
  dateOfBirth:string;
  idCard:string;
  phoneNumber:string;
  typeCustomer : TypeCustomer;
  address:string;
}
