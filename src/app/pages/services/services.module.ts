import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import {ServiceRoutingModule} from './service-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [ServiceComponent],
    imports: [
        CommonModule,
        ServiceRoutingModule,
        NgZorroAntdModule
    ],
  exports: [
    ServiceComponent
  ]
})
export class ServicesModule { }
