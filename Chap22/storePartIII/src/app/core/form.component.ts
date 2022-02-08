import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { MODES, SharedState } from './sharedState.model';
import { NgForm } from '@angular/forms';
import { Model } from '../model/repository.model';

@Component({
  selector: "myForm",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"],
})
export class FormComponent {

  // form: NgForm;
  // lastId: number;
  product: Product = new Product();

  constructor(private model: Model, private sharedState: SharedState){

  }

  get editing(): boolean {
    return this.sharedState.mode == MODES.EDIT;
  }

  submitForm(form: NgForm){
    if(form.valid){
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }

}
