import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerAddComponent} from "./component/customer/customer-add/customer-add.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {FacilityAddComponent} from "./component/facility/facility-add/facility-add.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";
import {ContractAddComponent} from "./component/contract/contract-add/contract-add.component";
import {ContractEditComponent} from "./component/contract/contract-edit/contract-edit.component";


const routes: Routes = [
  {path:'customer',component:CustomerListComponent},
  {path:'customer-create',component:CustomerAddComponent},
  {path:'customer-edit/:id',component:CustomerEditComponent},
  {path:'facility',component:FacilityListComponent},
  {path:'facility-edit/:id',component:FacilityEditComponent},
  {path:'facility-add',component:FacilityAddComponent},
  {path:'contract',component:ContractListComponent},
  {path:'contract-add',component:ContractAddComponent},
  {path:'contract-edit',component:ContractEditComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
