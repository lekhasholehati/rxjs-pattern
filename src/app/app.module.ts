import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInputComponent } from './chat-room/chat-input.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [AppComponent, ChatRoomComponent, ChatInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  exports: [ChatRoomComponent, ChatInputComponent],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
