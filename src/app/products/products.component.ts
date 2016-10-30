import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  title: string = 'Products';
  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
            new Product(1, 'Product 1', 10),
            new Product(2, 'Product 2', 20),
        ];
  }
}
