import { Component } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'myMessage',
  templateUrl: 'message.component.html'
})
export class MessageComponent {

  lastMessage: Message;

  constructor(messageService: MessageService){
    messageService.registerMessageHandler( m => this.lastMessage = m );
  }

}
