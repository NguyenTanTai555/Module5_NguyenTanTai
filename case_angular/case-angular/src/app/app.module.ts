import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { CustomerAddComponent } from './component/customer/customer-add/customer-add.component';
import { CustomerDeleteComponent } from './component/customer/customer-delete/customer-delete.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './component/employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './component/employee/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './component/employee/employee-delete/employee-delete.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { FacilityAddComponent } from './component/facility/facility-add/facility-add.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { FacilityDeleteComponent } from './component/facility/facility-delete/facility-delete.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import { ContractAddComponent } from './component/contract/contract-add/contract-add.component';
import { ContractEditComponent } from './component/contract/contract-edit/contract-edit.component';
import { ContractDeleteComponent } from './component/contract/contract-delete/contract-delete.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerAddComponent,
    CustomerDeleteComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    FacilityListComponent,
    FacilityAddComponent,
    FacilityEditComponent,
    FacilityDeleteComponent,
    ContractListComponent,
    ContractAddComponent,
    ContractEditComponent,
    ContractDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
