import { Directive, ElementRef, Attribute, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Directive({
  selector: '[pa-attr]'
})
export class PaAttrDirective {

  @Input("pa-attr") bgClass: string;
  @Input("pa-product") product: Product;
  @Output("pa-category") clickEvt = new EventEmitter<string>();

  constructor(private elt: ElementRef) {
    this.elt.nativeElement.addEventListener('click', evt => {
      if(this.product != null){
        this.clickEvt.emit(this.product.category);
      }
    } );
  }

  ngOnChanges(changes: {[property: string]: SimpleChange}) {
    let change = changes['bgClass'];
    let classList = this.elt.nativeElement.classList;
    if(!change.isFirstChange() && classList.contains(change.previousValue)){
      classList.remove(change.previousValue);
    }
    if(!classList.contains(change.currentValue)){
      classList.add(change.currentValue);
    }
  }

}
