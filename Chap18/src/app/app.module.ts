import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { ProductComponent } from './component';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaIfStructuralDirective } from './structural.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { ProductFormComponent } from './productForm.component';
import { ProductTableComponent } from './productTable.component';
import { ToggleViewComponent } from './toggleView.component';
import { MyAddTaxPipe } from './addTax.pipe';
import { CategoryFilterPipe } from './categoryFilter.pipe';
import { LOCALE_ID }from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    PaModel,
    PaIfStructuralDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductFormComponent,
    ProductTableComponent,
    ToggleViewComponent,
    MyAddTaxPipe,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //providers: [ {provide: LOCALE_ID, useValue: "fr-FR"} ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
