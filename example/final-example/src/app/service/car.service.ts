import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";
import {CarCenter} from "../model/carCenter";
import {Travel} from "../model/travel";
import {environment} from "../../environments/environment";
const API_URL= `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${API_URL}/car`)
  }

  saveCar(car){
    return this.httpClient.post(`${API_URL}/car/create`,car);
  }

  updateCar(car: Car):Observable<Car> {
    return this.httpClient.patch<Car>(`${API_URL}/car/update`, car);
  }

  findById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${API_URL}/car/${id}`);
  }

  getAllCarCenter(): Observable<CarCenter[]> {
    return this.httpClient.get<CarCenter[]>(`${API_URL}/carCenter`);
  }
  //
  getAllTravel(): Observable<Travel[]> {
    return this.httpClient.get<Travel[]>(`${API_URL}/travel`);
  }
  findByCarCenter(id: number): Observable<CarCenter> {
    return this.httpClient.get(`${API_URL}/carCenter` + id);
  }


  findByTravel(id: number): Observable<Travel> {
    return this.httpClient.get(`${API_URL}/travel` + id);
  }

  deleteCar(id: number) {
    return this.httpClient.delete(`${API_URL}/car/delete/` + id);
  }
}
