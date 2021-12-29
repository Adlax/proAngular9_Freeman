import { Product } from './product.model';
import { SimpleDataSource } from './datasource.model';

export class Model {

  private dataSource: SimpleDataSource;
  private products: Product[];
  private locator = (p: Product, id: number ) =>  p.id == id; //pas metttre d accolade autour de la ligne de logiaue ici

  constructor(){
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getData().forEach( p => this.products.push(p) );
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find( p => this.locator(p,id) );
    //console.log(this.products.find( p => this.locator(p,id) ));
  }

  private generateID() {
    let candidate = 100;
    while(this.getProduct(candidate) != null){
      candidate++;
    }
    return candidate;
  }

  saveProduct(prod: Product){
    if(prod.id==0 || prod.id==null){
      prod.id = this.generateID();
      this.products.push(prod);
    } else {
      let specIndex: number | undefined = this.products.findIndex( p => this.locator(p,prod.id) );
      this.products.splice(specIndex,1,prod);
    }
  }

  deleteProduct(id: number) {
    let specIndex = this.products.findIndex( p => this.locator(p,id) );
    if(specIndex>-1){
      this.products.splice(specIndex,1);
    }
  }

}
