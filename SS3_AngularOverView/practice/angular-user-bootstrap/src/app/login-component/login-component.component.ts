import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }
  get email() {
   return  this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login() {
    console.log(this.loginForm);
  }
}
