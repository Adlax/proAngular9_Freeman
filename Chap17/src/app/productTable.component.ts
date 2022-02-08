import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { Product } from './product.model';
import { Model } from './repository.model';
import { PaCellColor } from './cellColor.directive';

@Component({
  selector: 'myProductTable',
  templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {

  @Input('model') dataModel: Model;
  showTable: boolean = true;
  @ViewChildren(PaCellColor) viewChildren: QueryList<PaCellColor>;

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  ngAfterViewInit() {
    this.viewChildren.changes.subscribe( () => this.updateViewChildren() );
    this.updateViewChildren();
  }

  updateViewChildren() {
    setTimeout( () =>
      this.viewChildren.forEach( (child,index) => child.setColor(index%2 ? true: false) )
    ,0);
  }

}
