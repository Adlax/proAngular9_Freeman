import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class Model {

  private products: Product[];
  private locator = (prod: Product, id: number) => prod.id==id;

  constructor(private staticDataSource: StaticDataSource){
    this.products = new Array<Product>();
    this.staticDataSource.getData().forEach( prod => this.products.push(prod) );
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find( prod => prod.id==id);
  }

  private generateID(): number {
    let candidate = 100;
    while(this.getProduct(candidate) != null){candidate++;}
    return candidate;
  }

  saveProduct(prod: Product) {
    if(prod.id==0 || prod.id==null){
      prod.id = this.generateID();
      this.products.push(prod);
    } else {
      let index: number | undefined = this.products.findIndex( p => this.locator(p,prod.id) );
      this.products.splice(index,1,prod);
    }
  }

  deleteProduct(id: number | undefined) {
    let index: number | undefined = this.products.findIndex( p => this.locator(p,id) );
    if(index > -1){
      this.products.splice(index,1);
    }
  }

}
