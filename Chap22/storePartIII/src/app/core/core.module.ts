import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { FormComponent } from './form.component';
import { TableComponent } from './table.component';
import { SharedState } from './sharedState.model';

@NgModule({
  imports: [FormsModule, BrowserModule, ModelModule],
  declarations: [FormComponent, TableComponent],
  providers: [SharedState],
  exports: [ModelModule, FormComponent, TableComponent]
})
export class CoreModule {

}
