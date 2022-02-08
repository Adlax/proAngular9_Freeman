import { Pipe } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class CategoryFilterPipe {

  transform(products: Product[], category: string): Product[] {
    return category==undefined ? products : products.filter( prod => prod.category==category);
  }

}
