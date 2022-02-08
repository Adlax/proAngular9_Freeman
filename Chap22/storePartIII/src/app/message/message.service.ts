import { Injectable } from '@angular/core';
import { Message } from './message.model';

@Injectable()
export class MessageService {

  private handler: (m: Message) => void;

  reportHandler(msg: Message) {
    if(this.handler != null){
      this.handler(msg);
    }
  }

  registerMessageHandler(handler: (m: Message) => void) {
    this.handler = handler;
  }

}
