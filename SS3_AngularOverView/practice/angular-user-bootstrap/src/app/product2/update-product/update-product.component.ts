import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../../model/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] =[];
  category: Category={};
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
    this.productService.getAllCategory().subscribe(next=>{
      this.categories = next;
    })
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name,[Validators.required]),
        price: new FormControl(product.price,[Validators.required]),
        category: new FormControl(product.category.id,[Validators.required]),
        description:new FormControl(product.description,[Validators.required])
      });
    });
  }
  updateProduct() {
    let product = this.productForm.value;
    // console.log(product);
    this.productService.findCategoryById(product.category).subscribe(next=>{
      product.category = next;
      this.productService.updateProduct(product).subscribe(() => {
        Swal.fire('Tiêu đề', 'Cập nhật thành công', 'success');
          this.router.navigateByUrl('');

        }, e =>{
          console.log(e);
        }
      );
    })

  }


  ngOnInit(): void {
  }

}
