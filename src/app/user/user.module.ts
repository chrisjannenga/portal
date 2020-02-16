import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {UserRoutingModule} from './user-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgZorroAntdModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
