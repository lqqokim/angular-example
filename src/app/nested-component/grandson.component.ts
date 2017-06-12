import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'nested-grandson',
    template: `
        <div>자식2
            <hr>
            색상코드:{{codeColor}}<br>
        </div>
    `,
    styles: [`
        div{
        border: 2px solid #666;
        padding:10px;
        width:35%;
        height:38%;
        position: absolute;
        left: 57.5%;
        top: 26.5%;
        }
    `],
})
export class NestedGrandsonComponent{
    @Input() codeColor:string;
}
