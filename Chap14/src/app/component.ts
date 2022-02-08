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

  submitForm() {
    Object.keys(this.formGroup.controls).forEach( key => this.newProduct[key]=this.formGroup.controls[key].value );
    this.formSubmited = true;
    if(this.formGroup.valid){
      this.addProduct();
      this.newProduct = new Product();
      this.formGroup.reset();
      this.formSubmited = false;
    }
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  get jsonProduct(){
    return JSON.stringify(this.newProduct);
  }

  addProduct() {
    console.log('New product : ' + this.jsonProduct);
  }

  // getSelected(product: Product): boolean {
  //   return product.name==this.selectedProduct;
  // }

  // assignElement(event: Event): any {
  //   console.log(event);
  //   var element = event.target as HTMLElement;
  //   return element.value;
  // }

  // constructor(ref: ApplicationRef){
  //   (<any>window).appRef = ref;
  //   (<any>window).model = this.model;
  // }

}
