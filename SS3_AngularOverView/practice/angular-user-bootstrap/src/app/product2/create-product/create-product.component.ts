import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../../model/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  });
  category: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router) {
    this.productService.getAllCategory().subscribe(next => {
      this.category = next;
    });
  }

  submit() {
    var product = this.productForm.value;
    this.productService.findCategoryById(product.category).subscribe(next => {
      product.category = next;
      this.productService.saveProduct(product).subscribe(() => {
        Swal.fire('Tiêu đề', 'Tạo mới thành công', 'success');
        this.router.navigateByUrl('');
      });
    });
  }

  ngOnInit() {
  };
  get name(){
    return this.productForm.get('name')
  }
}
