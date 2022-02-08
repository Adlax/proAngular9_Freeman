import { Component } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'myMessage',
  templateUrl: 'message.component.html'
})
export class MessageComponent {

  lastMessage: Message;

  constructor(messageService: MessageService){
    messageService.messages.subscribe( msg => this.lastMessage = msg);
  }

}
