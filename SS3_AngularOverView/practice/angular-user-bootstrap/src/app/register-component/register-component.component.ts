import {Component, NgModule, OnInit} from '@angular/core';
import {Country} from '../../model/country';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  users: User[] = [];
  // @ts-ignore
  user: User = {};

  countryList: Country[] = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Mỹ'},
    {id: 3, name: 'Trung Quốc'},
    {id: 4, name: 'Nga'},
    {id: 5, name: 'Nhật Bản'},
    {id: 6, name: 'Hàn Quốc'}
  ];
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(\\+84|0)\\d{9,10}$')]),
  }, [this.validatePassword]);

  validatePassword(contactForm: AbstractControl) {
    let tempPassword = contactForm.value.password;
    let tempConfirmPassword = contactForm.value.confirmPassword;
    if (tempPassword !== tempConfirmPassword) {
      return {'invalidPassword': true};
    }
    return null;
  }

  constructor() {
  };

  ngOnInit(): void {
  }

  onSubmit() {
    this.user = this.contactForm.value;
    this.users.push(this.user);
    for (let i = 0; i <= this.users.length; i++) {
      console.log(this.users[i]);
    }
  }

  get email() {
    return this.contactForm.get('email');
  }

  get password() {
    return this.contactForm.get('password');
  }

  get confirmPassword() {
    return this.contactForm.get('confirmPassword');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get age() {
    return this.contactForm.get('age');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get phone() {
    return this.contactForm.get('phone');
  }
}
