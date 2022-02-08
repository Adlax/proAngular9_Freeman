import { Directive, Inject, InjectionToken, HostBinding, Host, Optional } from '@angular/core';

export const VALUE_SERVICE = new InjectionToken("value_service");

@Directive({
  selector: '[display-value-directive]'
})
export class myDisplayValueDirective {

  constructor(@Inject(VALUE_SERVICE) @Host() @Optional() serviceValue: string ){
    this.elementContent = serviceValue || 'No value';
  }

  @HostBinding('textContent') elementContent: string;

}
