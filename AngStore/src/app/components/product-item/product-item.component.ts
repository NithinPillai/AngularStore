import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { NgFor } from '@angular/common';
import { CartItem } from '../../models/CartItem';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductItemDetailComponent } from '../product-item-detail/product-item-detail.component';
import { QuantSelectionComponent } from '../quant-selection/quant-selection.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgFor, FormsModule, 
    RouterModule, CommonModule, 
    ProductItemDetailComponent, QuantSelectionComponent
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product;
  quantity: number;
  @Output() addToCart: EventEmitter<CartItem> = new EventEmitter; 
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  constructor() {
    this.product  = {
      id: 0, 
      name: '', 
      price: 0.00, 
      url: '', 
      description: ''
    }
    this.quantity = 0;
  }

  submitForm(): void {
    const cI: CartItem = {
      product: this.product,
      quantity: this.quantity
    }
    this.addToCart.emit(cI);
  }

  
}
