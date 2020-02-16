import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {User} from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  profile: User;


  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.auth.userProfile$.subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
  }

  getUsername() {
    return this.auth.userProfile$;
  }
}
