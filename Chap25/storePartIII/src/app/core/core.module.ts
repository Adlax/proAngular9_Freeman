import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { FormComponent } from './form.component';
import { TableComponent } from './table.component';
import { Subject } from 'rxjs';
import { FormatStatePipe } from './state.pipe';
import { MessageModule } from '../message/message.module';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { Model } from '../model/repository.model';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule],
    declarations: [TableComponent, FormComponent, FormatStatePipe],
    exports: [ModelModule, TableComponent, FormComponent],
})
export class CoreModule {

}
