import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private notify: NotificationService) { }

  ngOnInit() {
  }

  onBack() {
    this.notify.success('Button Pressed', 'You successfully hit the back button');
  }

}
