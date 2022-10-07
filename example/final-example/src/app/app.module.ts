import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { ListTestComponent } from './component/list-test/list-test.component';
import { ListCarComponent } from './component/list-car/list-car.component';
import { UpdateComponent } from './component/update/update.component';
import { CreateComponent } from './component/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListTestComponent,
    ListCarComponent,
    UpdateComponent,
    CreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
