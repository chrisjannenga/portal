import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( private notify: NzNotificationService) { }

  success(title: string, message: string) {
    this.notify.success(title, message);
  }
}
