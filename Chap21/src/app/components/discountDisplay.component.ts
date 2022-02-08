import { Component } from '@angular/core';
import { DiscountService } from '../common/discount.service';

@Component({
  selector: "discount-display",
  template: `
    <div class="bg-info text-white p-2">
      The discount is {{discountService.discount}}
    </div>
  `
})
export class DiscountDisplayComponent {

  constructor(public discountService: DiscountService) {

  }

}
