import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { FormComponent } from './form.component';
import { TableComponent } from './table.component';
import { SharedState, SHARED_STATE, MODES } from './sharedState.model';
import { Subject } from 'rxjs';
import { FormatStatePipe } from './state.pipe';
import { MessageModule } from '../message/message.module';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { Model } from '../model/repository.model';

// @NgModule({
//   imports: [FormsModule, BrowserModule, ModelModule, MessageModule],
//   declarations: [FormComponent, TableComponent, FormatStatePipe],
//   providers: [{
//     provide: SHARED_STATE,
//     deps: [MessageService,Model],
//     useFactory: (messageService,model) => {
//       let subject = new Subject<SharedState>();
//       subject.subscribe( s => {
//         console.log('been here');
//         messageService.reportMessage(
//           new Message(MODES[s.mode]+(s.id!=undefined ? `${model.getProduct(s.id).name}`:``))
//         );
//       });
//       return subject;
//     }
//   }],
//   exports: [ModelModule, FormComponent, TableComponent]
// })
@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, MessageModule],
    declarations: [TableComponent, FormComponent, FormatStatePipe],
    exports: [ModelModule, TableComponent, FormComponent],
    providers: [{
        provide: SHARED_STATE,
        deps: [MessageService, Model],
        useFactory: (messageService, model) => {
            let subject = new Subject<SharedState>();
            subject.subscribe(m => messageService.reportMessage(
                    new Message(MODES[m.mode] + (m.id != undefined
                        ? ` ${model.getProduct(m.id).name}` : "")))
                );
            return subject;
        }
    }]
})
export class CoreModule {

}
