import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {NotificationsComponent} from "./notifications/notifications.component";

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    NgForOf,
    NotificationsComponent
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {

  notifications = [
    { id: 1, text: 'Новое сообщение', unread: true },
    { id: 2, text: 'Задача просрочена', unread: true },
    { id: 3, text: 'Оплата прошла', unread: true }
  ];

  readMessage(notificationId: number) {
    this.notifications = this.notifications.map( notification => {
      if (notification.id === notificationId) {
        return { ...notification, unread: false}
      }
      return notification
    }
    )
  }
}
