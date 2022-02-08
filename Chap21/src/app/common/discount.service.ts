import { Injectable, Inject } from '@angular/core';
import { LogService, LogLevel, LOG_SERVICE } from './log.service';

@Injectable()
export class DiscountService {

  private discountValue: number = 10;
  //private logService: LogService;

  constructor(private logService: LogService){
  }

  public get discount(): number {
    return this.discountValue;
  }

  public set discount(val: number) {
    this.discountValue = val || 0;
  }

  public applyDiscount(price: number): number {
    this.logService.logInfoMessage(`Discount ${this.discountValue} applied to the price of ${price}`);
    return Math.max(price-this.discountValue,5);
  }

}
