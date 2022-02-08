import { Model } from './repository.model';
import { Component, ApplicationRef } from '@angular/core';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';
import { ProductFormControl, ProductFormGroup } from './form.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {

  model: Model = new Model();
  //selectedProduct: string;
  newProduct: Product = new Product();
  formSubmited: boolean = false;
  formGroup: ProductFormGroup = new ProductFormGroup();

  addProduct(prod: Product) {
    this.model.saveProduct(prod);
  }

  submitForm() {
    this.addProduct(this.newProduct);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

}
