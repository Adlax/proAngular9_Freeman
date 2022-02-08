import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'td[caca]'
})
export class PaCellColor {

  @HostBinding("class") bgClass: string = "";

  setColor(dark: boolean){
    this.bgClass = dark ? 'bg-dark' : '';
  }

}
