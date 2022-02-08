import { Component, Inject } from '@angular/core';
import { Product } from '../model/product.model';
import { MODES, SharedState, SHARED_STATE } from './sharedState.model';
import { NgForm } from '@angular/forms';
import { Model } from '../model/repository.model';
import { Observable } from 'rxjs';
// import { filter, map, distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "myForm",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"],
})
export class FormComponent {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private model: Model, activatedRoute: ActivatedRoute, private router: Router){
    this.editing = activatedRoute.snapshot.params['mode']=="edit";
    let id = activatedRoute.snapshot.params['id'];
    if(id != null){
      let name = activatedRoute.snapshot.params['name'];
      let category = activatedRoute.snapshot.params['category'];
      let price = activatedRoute.snapshot.params['price'];
      if(name!=null && category!=null && price!=null){
        this.product.id = id;
        this.product.name = name;
        this.product.category = category;
        this.product.price = Number.parseFloat(price);
      } else {
        Object.assign(this.product,this.model.getProduct(id) || new Product());
      }
    }
  }

  submitForm(form: NgForm){
    if(form.valid){
      this.model.saveProduct(this.product);
      // this.product = new Product();
      // form.reset();
      this.router.navigateByUrl('/');
    }
  }

  resetForm() {
    this.product = new Product();
  }

}
