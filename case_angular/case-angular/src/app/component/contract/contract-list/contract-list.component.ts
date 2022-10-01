import {Component, OnInit} from '@angular/core';
import {Contact} from "../../../../model/contact/contact";
import {ContactService} from "../../../../service/contact/contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contactList: Contact[];

  constructor(private contactService: ContactService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
   this.contactList = this.contactService.getAll();
  }

}
