import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import {ServiceRoutingModule} from './service-routing.module';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  exports: [
    ServiceComponent
  ]
})
export class ServicesModule { }
