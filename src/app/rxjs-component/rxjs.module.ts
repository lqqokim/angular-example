import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxjsComponent } from '../rxjs-component/rxjs-example-component';
import { ScoreComponent } from '../rxjs-component/rxjs-example-communication';
import { RxjsLoginComponent } from '../rxjs-component/rxjs-example-form-login'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [
    RxjsComponent,
    ScoreComponent,
    RxjsLoginComponent
  ],
  providers: [ ],
  exports:[
    RxjsComponent,
    ScoreComponent,
    RxjsLoginComponent
  ]
})
export class RxjsModule { }
