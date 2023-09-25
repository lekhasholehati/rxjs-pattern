import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
})
export class ChatRoomComponent implements OnChanges {
  @Input() roomId: string = 'room1';
  messages$!: Observable<string[]>;

  constructor(private chatService: ChatService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['roomId']) {
      this.roomId = changes['roomId'].currentValue;
      this.messages$ = this.chatService.getMessages(this.roomId);
    }
  }
}
