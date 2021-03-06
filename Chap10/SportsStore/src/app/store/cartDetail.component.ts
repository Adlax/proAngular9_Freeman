import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { ConnectionService } from '../model/connection.service';

@Component({
  selector: "cart-detail",
  templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {

  public connected: boolean = true;

  constructor(public cart: Cart, private connectionService: ConnectionService){
    this.connected = this.connectionService.connected;
    this.connectionService.Changes.subscribe( state => this.connected=state);
  }

    // display(input: any){
    //   console.log(input);
    // }

}
