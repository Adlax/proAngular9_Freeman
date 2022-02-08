import { Injectable } from '@angular/core';

@Injectable()
export class DiscountService {

  private discountValue: number = 10;

  public get discount(): number {
    return this.discountValue;
  }

  public set discount(val: number) {
    this.discountValue = val || 0;
  }

  public applyDiscount(price: number): number {
    return Math.max(price-this.discountValue,5);
  }

}
