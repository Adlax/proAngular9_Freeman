import { NgModule } from '@angular/core';
import { DiscountDisplayComponent } from './discountDisplay.component';
import { DiscountEditorComponent } from './discountEditor.component';
import { ProductFormComponent } from './productForm.component';
import { ProductTableComponent } from './productTable.component';
import { CommonModule } from '../common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { ToggleViewComponent } from './toggleView.component';

@NgModule({
  imports:[BrowserModule,FormsModule,ReactiveFormsModule,CommonModule],
  declarations:[DiscountEditorComponent,DiscountDisplayComponent,ProductFormComponent,ProductTableComponent],
  exports:[ProductFormComponent,ProductTableComponent],
})
export class ComponentsModule {

}
