import { Component, Output, EventEmitter, Input} from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quant-selection',
  standalone: true,
  imports: [ NgFor, CommonModule, 
  FormsModule],
  templateUrl: './quant-selection.component.html',
  styleUrl: './quant-selection.component.css'
})
export class QuantSelectionComponent {
  changedQuantity: number = 0;
  @Input() productId: number = -1;
  @Output() changeQuantity: EventEmitter<{prodId: number, cQ: number}> = new EventEmitter;
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor() {}

  quantWasSelected(): void {
    alert("Changed quantity to " + this.changedQuantity)
    const item = {
      prodId: this.productId, 
      cQ: this.changedQuantity
    }
    this.changeQuantity.emit(item);
  }
}
