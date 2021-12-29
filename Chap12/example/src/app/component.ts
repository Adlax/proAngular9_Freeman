import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {

  model: Model = new Model();
  fontSizeWithUnits = "30px";
  fontSizeWithoutUnits = "30";

  getClasses(): string {
    return this.model.getProducts().length==5 ? "bg-success" : "bg-warning";
  }

  displayConsole() {
    console.log(JSON.stringify(this.model.getProducts));
  }

  getClasses2(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    };
  }

  getStyles(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      fontSize: "30px",
      "margin.px": 100,
      color: product.price >50 ? "red" : "green"
    };
  }



}
