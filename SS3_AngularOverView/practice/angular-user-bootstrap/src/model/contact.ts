import {Country} from './country';

export interface Contact {
  email?: string;
  password?: string;
  confirmPassword?: string;
  country: Country;
  age?: number;
  gender?: string;
  phone?: string;

}
