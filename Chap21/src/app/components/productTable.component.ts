import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { LogService } from '../common/log.service';
// import { PaCellColor } from './cellColor.directive';

@Component({
  selector: 'myProductTable',
  templateUrl: 'productTable.component.html',
  providers: [LogService],
})
export class ProductTableComponent {

  @Input('model') dataModel: Model;
  taxRate: number = 0;
  categoryFilter: string;
  itemCount: number = 3;
  dateObject: Date = new Date(2020,1,20);
  dateString: string = "2020-02-20T00:00:00.000Z";
  dateNumber: number = 1582156800000;
  selectMap = {
    "Watersports": "stay dry",
    "Soccer": "score goals",
    "other": "have fun",
  };
  numberMap = {
    "=1": "one product",
    "=2": "two products",
    "other": "# products",
  };
  // showTable: boolean = true;
  // @ViewChildren(PaCellColor) viewChildren: QueryList<PaCellColor>;

  constructor(private model: Model){

  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  // ngAfterViewInit() {
  //   this.viewChildren.changes.subscribe( () => this.updateViewChildren() );
  //   this.updateViewChildren();
  // }
  //
  // updateViewChildren() {
  //   setTimeout( () =>
  //     this.viewChildren.forEach( (child,index) => child.setColor(index%2 ? true: false) )
  //   ,0);
  // }

}
