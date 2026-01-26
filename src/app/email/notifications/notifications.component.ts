import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  @Input()
  notification:any

  @Output()
  readMessage = new EventEmitter

  onButtonClick() {
  this.readMessage.emit(this.notification.id)
  }

}
