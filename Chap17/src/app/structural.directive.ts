import { Directive, ViewContainerRef, TemplateRef, SimpleChange, Input } from '@angular/core';

@Directive({
  selector: "[paIf]"
})
export class PaIfStructuralDirective {

  @Input('paIf') expressionResult: boolean;

  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange } ) {
    let change = changes['expressionResult'];
    if(!change.isFirstChange() && !change.currentValue){
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }

}
