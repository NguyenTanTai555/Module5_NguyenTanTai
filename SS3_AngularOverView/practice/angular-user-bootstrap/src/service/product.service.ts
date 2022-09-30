import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  },
    {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new'
    }, {
      id: 3,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new'
    }];

  getAll() {
    return this.products;
  }
  findById(id: number){
    return this.products.find(item => item.id == id);
  }
  updateProduct(id: number , product: Product) {
    for (let i = 0 ; i<= this.products.length; i++){
      if (this.products[i].id == id){
        this.products[i] = product;
      }
    }
  }
  saveProduct(product){
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
  constructor() {
  }
}
