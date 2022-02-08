import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { REST_URL, RestDataSourceService } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class Model {

  private products: Product[] = new Array<Product>();
  private locator = (prod: Product, id: number) => prod.id==id;

  constructor(private restDataSourceService: RestDataSourceService){
    this.restDataSourceService.getData().subscribe( data => this.products = data);
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
      //prod.id = this.generateID();
      //this.products.push(prod);
      this.restDataSourceService.saveProduct(prod).subscribe( p => this.products.push(p));
    } else {
      this.restDataSourceService.updateProduct(prod)
        .subscribe( p => {
          let index = this.products.findIndex( item => this.locator(item,p.id) );
        this.products.splice(index,1,p);
      } );
    }
  }

  deleteProduct(id: number) {
    this.restDataSourceService.deleteProduct(id).subscribe( p => {
      let index: number | undefined = this.products.findIndex( item => this.locator(item,id) );
      if(index > -1){
        this.products.splice(index,1);
      }
    } );
  }

}
