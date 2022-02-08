import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from './product.model';
import { Model } from './repository.model';

@Component({
  selector: 'myProductForm',
  templateUrl: 'productForm.component.html',
  // styleUrls: ['productForm.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductFormComponent {

  // @Output('newProductEvent') newProductEvent = new EventEmitter<Product>();

  constructor(private model: Model){

  }

  newProduct: Product = new Product();

  submitForm(form: any) {
    // this.newProductEvent.emit(this.newProduct);
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }

}
