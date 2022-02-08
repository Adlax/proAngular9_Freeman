import { Model } from './repository.model';
import { Component, ApplicationRef } from '@angular/core';
import { Product } from './product.model';
import { ProductFormControl, ProductFormGroup } from './form.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html',
  // styles:['/deep/ div { border: 2px black solid; font-style: italic;}']
})
export class ProductComponent {

  model: Model = new Model();

  addProduct(prod: Product) {
    this.model.saveProduct(prod);
  }

}
