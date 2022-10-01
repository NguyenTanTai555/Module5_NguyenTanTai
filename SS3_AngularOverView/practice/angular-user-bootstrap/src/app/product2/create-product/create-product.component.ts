import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  constructor(private productService: ProductService,
              private router:Router){
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
      // this.productForm.reset();
      alert("Tạo mới thành công")
    this.router.navigateByUrl("")
    }, e=> {
      console.log(e);
    })
  }

  ngOnInit(): void {
  }

}
