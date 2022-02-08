import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LimitValidator } from './limit.formvalidator';

export class ProductFormControl extends FormControl {

  label: string;
  propertyName: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.propertyName = property;
  }

  getControlErrorMessages() {
    let messages: string[] = [];
    if(this.errors) {
      for(let errorName in this.errors) {
        switch(errorName) {
          case 'required':
            messages.push(`you must enter a ${this.label}`);
            break;
          case 'minlength':
            messages.push(`The ${this.label} should be at least ${this.errors['minlength'].requiredLength} characters` );
            break;
          case 'maxlength':
            messages.push(`The ${this.label} should be at max ${this.errors['maxlength'].requiredLength} characters` );
            break;
          case 'pattern':
            messages.push(`The ${this.label} doesn't contain the right pattern`);
            break;
          case 'limit':
            messages.push(`A ${this.label} cannot be more ${this.errors['limit'].limit}`);
            break;
        }
      }
    }
    return messages;
  }

}

export class ProductFormGroup extends FormGroup {

  constructor(){
    super({
      name: new ProductFormControl("Name","name","",Validators.required),
      category: new ProductFormControl("Category","category","",Validators.compose([
        Validators.required,
        Validators.pattern("^[A-Za-z ]+$"),
        Validators.minLength(3),
        Validators.maxLength(10)
      ])),
      price: new ProductFormControl("Price","price","",Validators.compose([
        Validators.required,
        LimitValidator.Limit(100),
        Validators.pattern("^[0-9\.]+$")
      ]))
    });
  }

  get productControls(): ProductFormControl[] {
    return Object.keys(this.controls).map( key => this.controls[key] as ProductFormControl);
  }

  getValidationMessages(name: string): string[] {
    return (this.controls['name'] as ProductFormControl).getControlErrorMessages();
  }

  getFormErrorMessages(): string[] {
    let messages: string[] = [];
    Object.values(this.controls).forEach( val => messages.push(...(val as ProductFormControl).getControlErrorMessages()) );
    return messages;
  }

}
