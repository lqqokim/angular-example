import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nested-parent',
    template: `
        <div class="row" [style.background-color]="getStyle()">부모<br>
            클릭수:{{cntClick}}<br>
            자식상태:{{active}}<br>
            <nested-child (outputproperty)="outputEvent($event)" 
                          (outputEventColor)="outputColor($event)" 
                          [name1]="fruit1" [name2]="fluit2()" [name3]="fluit3" [BColors]="backColors" [BCCodes]="backColorCodes">
            </nested-child>
            <nested-grandson  [codeColor]="this.colorCode"></nested-grandson>
        </div>
    `,
    styles: [`
        div {
        border: 2px solid #666;
        padding:10px;
        width:95%;
        height:100%;
        margin-top:2%;
    `],
    })
export class NestedParentComponent {
    // input(예제)
    fruit1 = '사과';
    fluit3 = '바나나';
    fruit4 = ['딸기', '포도', '참외'];
    // input실습
    backColors = ['하양', '그레이', '초록', '노랑', '핑크'];   // 배경색
    backColorCodes = ['#FFFFFF', '#BDBDBD', '#ABF200', '#FAED7D', '#FFD9EC']; // 배경색Code
    // output(예제)
    cntClick = 0;
    active = false;
    // output 실습
    colorCode = '#FFFFFF';
    // tslint:disable-next-line:member-ordering
    static fruit5 = '수박';

    fluit2() { return '배'; }

    get fruit6(){
        return NestedParentComponent.fruit5;
    }

    outputEvent(active: boolean) {
        this.cntClick++;
        this.active = active;
    }

    // 배경받아오기
    outputColor(colorNum:number) {
        // let colorCode:string;
        this.colorCode = this.backColorCodes[colorNum];
        // console.log(this.colorCode+"입니다.")
    }

    getStyle(): string { // 배경변경
        return this.colorCode;
    }

}
