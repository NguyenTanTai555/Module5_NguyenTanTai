import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCarComponent} from "./component/list-car/list-car.component";
import {UpdateComponent} from "./component/update/update.component";
import {CreateComponent} from "./component/create/create.component";


const routes: Routes = [
  {path:'', component: ListCarComponent},
  {path:'car/create',component:CreateComponent},
  {path:'car/update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
