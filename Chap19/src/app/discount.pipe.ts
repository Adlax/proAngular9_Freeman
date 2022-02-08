import { Pipe } from '@angular/core';
import { DiscountService } from './discount.service';

@Pipe({
  name: 'discount',
  pure: false,
})
export class DiscountPipe {

  constructor(public discountService: DiscountService) {

  }

  transform(price: number): number {
    return this.discountService.applyDiscount(price);
  }

}
