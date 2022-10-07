import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAll(): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:3000/product');
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:3000/product/' + id);
  }

  updateProduct(product: Product) {
    return this.httpClient.patch('http://localhost:3000/product/' + product.id, product);
  }

  saveProduct(product) {
    return this.httpClient.post('http://localhost:3000/product/', product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:3000/product/' + id);
  }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000/category');
  }

  findCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>('http://localhost:3000/category/' + id);
  }

  search(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/product?name_like=' + name );
  }

  constructor(private httpClient: HttpClient) {
  }
}
