import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      // @ts-ignore
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.price)
      });
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() =>{
      this.router.navigateByUrl("")
    }, e =>{
      console.log(e);
    });
  }

}
