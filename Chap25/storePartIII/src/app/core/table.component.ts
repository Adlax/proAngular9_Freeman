import { Component, Inject } from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'myTable',
  templateUrl: 'table.component.html'
})
export class TableComponent {

  constructor(private model: Model){
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProduct(id: number): Product | undefined {
    return this.model.getProduct(id);
  }

  deleteProduct(id: number | undefined) {
    this.model.deleteProduct(id);
  }

}
