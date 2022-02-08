import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './component';
import { ProductFormComponent } from './components/productForm.component';
import { ProductTableComponent } from './components/productTable.component';
import { LOCALE_ID }from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ModelModule } from './model/model.module';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule,
  ],
  bootstrap: [ProductFormComponent,ProductTableComponent]
})
export class AppModule { }
