import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
})
export class ChatInputComponent implements OnChanges {
  @Input() roomId: string = 'room1';
  message: string = '';

  constructor(private chatService: ChatService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['roomId']) {
      this.roomId = changes['roomId'].currentValue;
    }
  }

  sendMessage() {
    this.chatService.sendMessage(this.roomId, this.message);
    this.message = '';
  }
}
