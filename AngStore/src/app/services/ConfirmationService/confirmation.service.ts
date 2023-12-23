import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  fullname: string = ''; 
  address: string = '';
  cardInfo: number = 0; 
  total: number = 0;

  constructor() { }

  setInfo(fName: string, address: string, cardNum: number, total: number) {
    this.fullname = fName;
    this.address = address;
    this.cardInfo = cardNum; 
    this.total = total;
  }

  getName(): string {
    return this.fullname;
  }

  getCardInfo(): number {
    return this.cardInfo;
  }

  getTotal(): number {
    return this.total;
  }
}
