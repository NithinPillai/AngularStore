import { Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/Product';
import { GetProductsService } from '../../services/getProductsService/get-products.service';
import { CartService } from '../../services/CartService/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { CartItem } from '../../models/CartItem';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductItemComponent, NgFor, 
    HttpClientModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  constructor(private getProductsService: GetProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getProductsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  addToCart(cItem: CartItem): void {
    this.cartService.addToCart(cItem);
  }
}
