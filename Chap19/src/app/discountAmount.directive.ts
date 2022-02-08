import { Directive, HostBinding, Input, SimpleChange, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import { DiscountService } from './discount.service';

@Directive({
  selector: 'td[myPrice]',
  exportAs: 'discount',
})
export class DicountAmountDirective {

  private differ: KeyValueDiffer<any,any>;
  @Input('myPrice') originalPrice: number;
  discountAmount: number;

  constructor(public discountService: DiscountService, private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef){

  }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.discountService).create();
  }

  ngOnChanges(changes: {[property: string]: SimpleChange}) {
    if(changes['originalPrice'] != null) {
      this.updateValue();
    }
  }

  ngDoCheck() {
    if(this.differ.diff(this.discountService) != null){
      this.updateValue();
    }
  }

  private updateValue() {
    this.discountAmount = (this.originalPrice - this.discountService.applyDiscount(this.originalPrice));
  }

}
