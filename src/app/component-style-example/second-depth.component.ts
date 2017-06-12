import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'second-depth',
    template: `<div class="second">2번째 깊이</div>`,
    encapsulation: ViewEncapsulation.Native
})
export class SecondDepthComponent {}
