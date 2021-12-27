import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';

@Injectable()
export class ProductRepository {

  private products: Product[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private dataSource: StaticDataSource){
    this.dataSource.getProducts().subscribe( data => {
      this.products = data;
      //console.log(this.products.length);
      this.categories = data.map( prod => prod.category ).filter( (cat,index,array) => array.indexOf(cat)==index ).sort();
    } );
  }

  getProducts(category?: any): Product[] {
    return this.products.filter( prod => category==null || prod.category==category )
  }

  getProduct(id: number): Product | undefined {
    return this.products.find( prod => prod.id==id );
  }

  getCategories(): (string | undefined)[] {
    return this.categories;
  }
}
