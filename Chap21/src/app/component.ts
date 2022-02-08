import { Model } from './model/repository.model';
import { Component, ApplicationRef } from '@angular/core';
import { Product } from './model/product.model';
import { ProductFormControl, ProductFormGroup } from './model/form.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html',
  // styles:['/deep/ div { border: 2px black solid; font-style: italic;}']
})
export class ProductComponent {

  //model: Model = new Model();

  constructor(public model: Model){

  }

  addProduct(prod: Product) {
    this.model.saveProduct(prod);
  }

}
