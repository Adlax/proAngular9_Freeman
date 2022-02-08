import { Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { MODES, SharedState } from './sharedState.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'myTable',
  templateUrl: 'table.component.html'
})
export class TableComponent {

  constructor(private model: Model, private sharedState: SharedState){
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
    this.sharedState.mode = MODES.EDIT;
    this.sharedState.id = id;
  }

  createProduct() {
    this.sharedState.mode = MODES.CREATE;
    this.sharedState.id = undefined;
  }

}
