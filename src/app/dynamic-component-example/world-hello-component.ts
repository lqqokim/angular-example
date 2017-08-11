import {Component, Injector} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'world-hello',
    template: `
        <div>World Hello {{showNum}}</div>
    `,
})
export default class WorldHelloComponent {
    showNum = 0;

    constructor(private injector: Injector) {
        this.showNum = this.injector.get('showNum');
    }
}
