import { Injectable } from '@angular/core';
import {Contact} from "../../model/contact/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: Contact[]=[
    {
      contactId: 1,
      starDay: '2022-01-15',
      endDay: '2022-01-17',
      deposit:200000,
      // @ts-ignore
      customer: {
        id: 1,
        name:'Nguyễn Tấn Tài',
      },
      // @ts-ignore
      facility: {
        id:1,
        name:'Villa Ocean View',
      },
      // @ts-ignore
      employee: {
        id:1,
        name:'ĐàO Minh Trĩ',
      },
      total: 20000000
    }
  ]
  getAll(){
   return  this.contactList;
  }
  saveContact(contact){
    this.contactList.push(contact)
  }
  findContactById(id:number){
    return this.contactList.find(item=> item.contactId == id);
  }
  constructor() { }
}
