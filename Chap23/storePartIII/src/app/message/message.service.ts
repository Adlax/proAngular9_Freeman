import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {

  private subject = new Subject<Message>();

  reportMessage(msg: Message) {
    this.subject.next(msg);
  }

  get messages(): Observable<Message> {
    return this.subject;
  }

  // private handler: (m: Message) => void;
  //
  // reportHandler(msg: Message) {
  //   if(this.handler != null){
  //     this.handler(msg);
  //   }
  // }
  //
  // registerMessageHandler(handler: (m: Message) => void) {
  //   this.handler = handler;
  // }

}
