import { Component, Inject } from '@angular/core';
import { Model } from '../model/repository.model';
import { MODES, SharedState, SHARED_STATE } from './sharedState.model';
import { Product } from '../model/product.model';
import { Observer } from 'rxjs';

@Component({
  selector: 'myTable',
  templateUrl: 'table.component.html'
})
export class TableComponent {

  constructor(private model: Model, @Inject(SHARED_STATE) public sharedState: Observer<SharedState>){
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProduct(id: number): Product | undefined {
    return this.model.getProduct(id);
  }

  saveProduct(prod: Product) {
    this.model.saveProduct(prod);
  }

  deleteProduct(id: number | undefined) {
    this.model.deleteProduct(id);
  }

  editProduct(id: number | undefined) {
    // this.sharedState.mode = MODES.EDIT;
    // this.sharedState.id = id;
    this.sharedState.next(new SharedState(MODES.EDIT, id));
  }

  createProduct() {
    // this.sharedState.mode = MODES.CREATE;
    // this.sharedState.id = undefined;
    this.sharedState.next(new SharedState(MODES.CREATE));
  }

}
