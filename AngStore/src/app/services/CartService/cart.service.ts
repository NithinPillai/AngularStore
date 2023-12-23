import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';
import { ProductItemComponent } from '../../components/product-item/product-item.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];

  constructor() { }

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(cItem: CartItem): void {
    if (cItem.quantity > 0) {
      alert(`Added ${cItem.quantity} ${cItem.product.name}s to Cart`)
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].product.id === cItem.product.id) {
          this.cart[index].quantity = cItem.quantity
          return
        }
      }
  
      this.cart.push(cItem);
    } else {
      alert("Quantity has to greater than 0")
    }
    
  }

  getTotal(): number {
    let tots = 0;

    for (let index = 0; index < this.cart.length; index++) {
      tots += (this.cart[index].product.price) * (this.cart[index].quantity);
    }

    return tots; 
  }

  clearCart(): void {
    this.cart = [];
  }

  removeProduct(id: number): CartItem[] {
    let duplicate: CartItem[] = [];

    for (let index = 0; index < this.cart.length; index++) {
      if (this.cart[index].product.id !==id) {
        duplicate.push(this.cart[index]);
      }
    }

    this.cart = duplicate;
    return this.cart;
  }
}
