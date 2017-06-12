import { Component,ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'comp-StyleEx',
    template: `
        <P>typeScript</P>
        <div>1</div>
        <span *ngFor="let i of eName let ii = index">
            <div (click)="chnageBG(ii)">{{i}}</div>
        </span>
    `,
    styles: [`
        :host {
        display: block;
        border: 5px dotted black;
        width:300px;
        padding:10px;
        }
        :host(:hover){
        font-style:italic;
        }
        :host /deep/ div.first{
        color:red;
        font-size:30px;
        }
        :host /deep/ div.second{
        text-decoration: line-through;
        font-size:20px;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class CompStyle {
    eName = ['가','나','다','라'];
 }
