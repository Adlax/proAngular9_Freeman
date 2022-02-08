import { Component } from '@angular/core';
import { DiscountService } from '../common/discount.service';

@Component({
  selector: "discount-editor",
  template: `
    <div class="form-group">
      <label>Discount rate : </label>
      <input type="number" class="form-control" [(ngModel)]="discountService.discount"/>
    </div>
  `
})
export class DiscountEditorComponent {

  constructor(public discountService: DiscountService) {

  }

}
