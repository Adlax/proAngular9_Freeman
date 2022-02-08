import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './model/model.module';
import { MessageModule } from './message/message.module';
import { CoreModule } from './core/core.module';
import { FormComponent } from './core/form.component';
import { TableComponent } from './core/table.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [BrowserModule,ModelModule,MessageModule,CoreModule],
  bootstrap: [FormComponent,TableComponent,MessageComponent]
})
export class AppModule { }
