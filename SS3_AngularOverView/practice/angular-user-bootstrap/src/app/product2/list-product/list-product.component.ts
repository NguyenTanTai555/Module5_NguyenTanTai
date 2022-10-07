import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../model/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  // @ts-ignore
  productDelete: Product;


  constructor(private productService: ProductService,
              private router: Router) {
    this.productService.getAllCategory().subscribe(next => {
      // @ts-ignore
      this.categories = next;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      // @ts-ignore
      this.products = products;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      Swal.fire('Tiêu đề', 'Xóa Thành Công', 'success');
      this.getAll();
    }, error => {
      console.log(error);
    });
  }

  getInFoProduct(product: Product) {
    this.productDelete = product;
  }

  onSearch(name: string) {
    console.log(name);
    this.productService.search(name).subscribe(next => {
      this.products = next;
    });
  }
}
