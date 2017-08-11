import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoutingEx } from './routing-ex';

@NgModule({
    imports: [RouterModule.forChild([
      { path: 'routing-ex', component: RoutingEx  }
  ])],
  exports: [RouterModule]
})

export class RoutingExRoutingModule{}
