import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from '../../services/ConfirmationService/confirmation.service';
import { CartService } from '../../services/CartService/cart.service';


@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  fullName: string = '';
  total: number = 0;
  

  constructor(private router: Router, 
    private cService: CartService, 
    private confService: ConfirmationService) {}

    ngOnInit(): void {
      this.fullName = this.confService.fullname;
      
      this.total = this.cService.getTotal();
      this.cService.clearCart();
    }

  returnToHome(): void {
    this.router.navigate(['/']);
  }
}
