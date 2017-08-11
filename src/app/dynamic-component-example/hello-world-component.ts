import {Component, Injector} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hello-world',
  template: `
    <div>Hello World {{showNum}}</div>
  `,
})
export default class HelloWorldComponent {
    showNum = 0;

    constructor(private injector: Injector) {
        this.showNum = this.injector.get('showNum');
    }
}
