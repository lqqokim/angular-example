import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ViewChildComponent, Good, Item, Items, ItemComponent } from '../view-child/viewchild.component';
import { ViewChildrenComponent, ChildComponent, ChildNameComponent } from '../view-child/viewchildren.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ViewChildComponent,
    Good,
    Item,
    Items,
    ItemComponent,
    ViewChildrenComponent,
    ChildComponent,
    ChildNameComponent
  ],
  providers: [ ],
  exports:[
    ViewChildComponent,
    Good,
    Item,
    Items,
    ItemComponent,
    ViewChildrenComponent,
    ChildComponent,
    ChildNameComponent
  ]
})
export class ViewChildModule { }
