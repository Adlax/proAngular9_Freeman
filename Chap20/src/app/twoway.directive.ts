import { Input, Output, EventEmitter, Directive, HostBinding, HostListener, SimpleChange } from '@angular/core';

@Directive({
  selector: 'input[paModel]',
  exportAs: 'paModel'
})
export class PaModel {

  @Input('paModel') modelProperty: string;
  @HostBinding('value') fieldValue: string;
  @Output('paModelChange') update = new EventEmitter<string>();
  direction: string = 'None';

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["modelProperty"];
    if(change.currentValue != this.fieldValue){
      this.fieldValue = changes["modelProperty"].currentValue || 'None';
      this.direction = 'To the directive';
    }
  }

  @HostListener('input',['$event.target.value']) updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
    this.direction = 'From the directive';
  }
}
