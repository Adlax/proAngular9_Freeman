import { Product } from './product.model';
import { SimpleDataSource } from './datasource.model';

export class Model {

  private dataSource: SimpleDataSource;
  private products: Product[];
  private locator = (p: Product, id: number) => p.id==id;

  constructor(){
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getData().forEach( prod => this.products.push(prod) );
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find( prod => this.locator(prod,id) );
  }

  private generateID(): number {
    let candidate = 100;
    while(this.getProduct(candidate)!=null){
      candidate++;
    }
    return candidate;
  }

  saveProduct(prod: Product) {
    if(prod.id==null || prod.id==0){
      prod.id=this.generateID();
      this.products.push(prod);
    } else {
      let specIndex = this.products.findIndex( p => p.id==prod.id);
      this.products.splice(specIndex,1,prod);
    }
  }

  deleteProduct(id: number) {
    let specIndex = this.products.findIndex( p => p.id==id );
    if(specIndex > -1){
      this.products.splice(specIndex,1);
    }
  }

}
