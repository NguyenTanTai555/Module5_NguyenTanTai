import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Test} from "../model/test";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Test>{
    return this.httpClient.get<Test>('http://localhost:3000/test');
  }
  getCategory(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/category')
  }

}
