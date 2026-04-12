import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationsInterface } from "./notifications.interface";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

  @Input()
  notification!: NotificationsInterface

  @Output()
  readMessage: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  deleteMessage: EventEmitter<number> = new EventEmitter<number>();

  onButtonClickRead() {
  this.readMessage.emit(this.notification.id)
  }

  onButtonClickDelete() {
  this.deleteMessage.emit(this.notification.id)
  }

}
