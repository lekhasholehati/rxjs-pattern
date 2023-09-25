import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-pattern';
  selectedRoomId: string = 'room1';

  selectRoom(roomId: string) {
    this.selectedRoomId = roomId;
  }
}
