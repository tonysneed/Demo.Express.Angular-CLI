import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  title: string = 'Products';
  products: Product[];
  error: any;

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    // this.products = [
    //         new Product(1, 'Product 1', 10),
    //         new Product(2, 'Product 2', 20),
    //     ];

    // Replaced with async call
    // this.products = this._productService.getProducts();

    this._productService.getProducts()
      .then(products => this.products = products)
      .catch(error => this.error = error);
  }
}
