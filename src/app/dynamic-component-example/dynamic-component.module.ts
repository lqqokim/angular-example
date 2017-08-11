import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import HelloWorldComponent from './hello-world-component';
import WorldHelloComponent from './world-hello-component';
import DynamicComponentContainer from './dynamic-component-container.component';
import { DynamicComponent } from './dynamic-component.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HelloWorldComponent,
        WorldHelloComponent,
        DynamicComponentContainer,
        DynamicComponent
    ],
    providers: [ ],
    exports: [
        HelloWorldComponent,
        WorldHelloComponent,
        DynamicComponentContainer,
        DynamicComponent
    ]
})
export class DynamicComponentModule { }
