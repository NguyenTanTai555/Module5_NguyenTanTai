import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = +paramMap.get('id');
      this.productService.findById(id).subscribe(next => {
        this.product = next;
      });
    });
  }

  ngOnInit(): void {
  }

}
