import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponentComponent } from './rating-bar-component/rating-bar-component.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TodoComponent } from './todo/todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponentComponent,
    CountdownTimerComponent,
    TodoComponent,
    RegisterComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
