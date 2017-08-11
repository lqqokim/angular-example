import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoutingEx } from './routing-ex';
// import { RoutingExRoutingModule } from './routing-ex-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule // ,
    // RoutingExRoutingModule
  ],
  declarations: [
    RoutingEx
  ],
  providers: [],
  exports: [
    RoutingEx
  ]
})
export class RoutingExModule { }
