import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { Router } from '@angular/router'
import { NgFor } from '@angular/common';
import { CartItem } from '../../models/CartItem';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/CartService/cart.service';
import { GetProductsService } from '../../services/getProductsService/get-products.service';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [
    NgFor, FormsModule, 
    RouterModule
  ],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent {
  prod: Product;
  products: Product[] = [];
  quantity: number;
  @Output() addToCart: EventEmitter<CartItem> = new EventEmitter; 
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  constructor(private cService: CartService, private router: Router, private getProductsService: GetProductsService) {
    this.prod  = {
      id: 0, 
      name: '', 
      price: 0.00, 
      url: '', 
      description: ''
    }
    this.quantity = 0;
    this.products = [];
  }

  ngOnInit(): void {
    const id = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1));
    this.getProductsService.getProducts().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id === id) {
          this.prod = res[i];
        }
      }
    });
  }

  submitForm(): void {
    const cI: CartItem = {
      product: this.prod,
      quantity: this.quantity
    }
    this.cService.addToCart(cI);
  }
}
