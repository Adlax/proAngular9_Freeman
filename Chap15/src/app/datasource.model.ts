import { Product } from './product.model';

export class SimpleDataSource {

  private data: Product[];

  constructor(){
    this.data = new Array<Product>(
      new Product(1,'Kayak','Watersports',275.5),
      new Product(2,'Lifejacket','Watersports',49.5),
      new Product(3,'Soccer Ball','Soccer',20),
      new Product(4,'Corner Flags','Soccer',35),
      new Product(5,'Thinking Cap','Chess',16),
    );
  }

  getData(): Product[]{
    return this.data;
  }

}
