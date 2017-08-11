import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import HelloWorldComponent from './hello-world-component';
import WorldHelloComponent from './world-hello-component';
import DynamicComponentContainer from './dynamic-component-container.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dynamic-app',
    template: `
        <div>
            <h2>Lets dynamically create some components!</h2>
            <button (click)="createHelloWorldComponent()">Create Hello World</button>
            <button (click)="createWorldHelloComponent()">Create World Hello</button>
            <dynamic-component-container [componentData]="componentData"></dynamic-component-container>
        </div>
    `,
})
export class DynamicComponent {
    componentData = null;

    createHelloWorldComponent() {
        this.componentData = {
            component: HelloWorldComponent,
            inputs: {
                showNum: 9
            }
        };
    }

    createWorldHelloComponent() {
        this.componentData = {
            component: WorldHelloComponent,
            inputs: {
                showNum: 2
            }
        };
    }
}
