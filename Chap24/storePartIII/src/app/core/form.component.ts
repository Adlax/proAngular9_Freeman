import { Component, Inject } from '@angular/core';
import { Product } from '../model/product.model';
import { MODES, SharedState, SHARED_STATE } from './sharedState.model';
import { NgForm } from '@angular/forms';
import { Model } from '../model/repository.model';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, skipWhile } from 'rxjs/operators';

@Component({
  selector: "myForm",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"],
})
export class FormComponent {

  // form: NgForm;
  // lastId: number;
  editing: boolean = false;
  product: Product = new Product();

  constructor(private model: Model, @Inject(SHARED_STATE) public sharedState: Observable<SharedState>){
    sharedState
    // .pipe(skipWhile(state => state.mode==MODES.EDIT))
    // .pipe(distinctUntilChanged( (firstState,secondState) =>
    //   firstState.mode==secondState.mode && firstState.id==secondState.id
    // ))
    .subscribe ( (update) => {
      this.product = new Product();
      if(update.id!=undefined){
        Object.assign(this.product,this.model.getProduct(update.id));
      }
      this.editing = update.mode==MODES.EDIT;
    });
  }

  // get editing(): boolean {
  //   return this.sharedState.mode == MODES.EDIT;
  // }

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

  // ngDoCheck() {
  //   if(this.lastId != this.sharedState.id){
  //     this.product = new Product();
  //     if(this.sharedState.mode == MODES.EDIT){
  //       Object.assign(this.product,this.model.getProduct(this.sharedState.id));
  //     }
  //     this.lastId = this.sharedState.id;
  //   }
  // }

}
