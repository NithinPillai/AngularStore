import { Component, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { CartItem } from '../../models/CartItem';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product';
import { CartService } from '../../services/CartService/cart.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Router } from '@angular/router';
import { ConfirmationService } from '../../services/ConfirmationService/confirmation.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgModule } from '@angular/core';
import { QuantSelectionComponent } from '../quant-selection/quant-selection.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, CommonModule, 
    FormsModule, RouterModule, 
    ConfirmationComponent, ProductItemComponent, 
    QuantSelectionComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: CartItem[] = []; 
  fullName: string = '';
  address: string = '';
  cardNumber: string = '';
  total: number = 0;
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // changedQuantity: number = 0;

  currentProduct: Product = {
    id: -1, 
    name: '', 
    price: -1, 
    url: '', 
    description: ''
  };

  constructor(private cartS: CartService, private router: Router, private confService: ConfirmationService) {}

  ngOnInit() {
    this.cart = this.cartS.getCart();
    this.total = this.cartS.getTotal();
  }


  submitOrderForm(): void {
    this.confService.setInfo(this.fullName, this.address, parseInt(this.cardNumber), this.cartS.getTotal())
    this.router.navigate(['/confirmationPage'])
    this.total = this.confService.getTotal();

  }

  changeQuantity(item: { prodId: number, cQ: number }): void {
    alert(item.prodId + " " + item.cQ)
    if (item.cQ > 0) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].product.id === item.prodId) {
          this.cart[i].quantity = item.cQ;
          
          break;
        }
      }
    } else {
      this.cart = this.cartS.removeProduct(item.prodId);
    }

    this.total = this.cartS.getTotal();
  }

  removeProd(prodId: number): void {
    alert('Item Removed Successfully')
    this.cart = this.cartS.removeProduct(prodId);
    this.total = this.cartS.getTotal();
  }

  
}
