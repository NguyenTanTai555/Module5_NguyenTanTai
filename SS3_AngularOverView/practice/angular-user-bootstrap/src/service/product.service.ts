import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAll(): Observable<Product> {
    return this.httpClient.get('http://localhost:3000/product');
  }

  findById(id: number):Observable<Product> {
    return this.httpClient.get('http://localhost:3000/product/' + id);
  }

  // @ts-ignore
  updateProduct(product: Product){
    return this.httpClient.patch('http://localhost:3000/product/' +product.id, product);
  }

  saveProduct(product): Observable<Product> {
    console.log(product);
    return this.httpClient.post<Product>('http://localhost:3000/product/', product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:3000/product/' + id);
  }

  constructor(private httpClient: HttpClient) {
  }
}
