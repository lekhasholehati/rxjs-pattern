import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class ChatService {
  private chatData: Map<string, BehaviorSubject<string[]>> = new Map();

  getMessages(roomId: string): Observable<string[]> {
    if (!this.chatData.has(roomId)) {
      this.chatData.set(roomId, new BehaviorSubject<string[]>([]));
    }

    const chatDataEntry = this.chatData.get(roomId);

    if (!chatDataEntry) {
      return of([]);
    }

    return chatDataEntry.asObservable();
  }

  sendMessage(roomId: string, message: string): void {
    if (!this.chatData.has(roomId)) {
      this.chatData.set(roomId, new BehaviorSubject<string[]>([]));
    }

    const chatDataEntry = this.chatData.get(roomId);

    if (!chatDataEntry) return;

    const currentMessages = chatDataEntry.getValue();
    const updatedMessages = [...currentMessages, message];
    chatDataEntry.next(updatedMessages);
  }
}
