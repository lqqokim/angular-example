import { Component, Input, ViewChildren, QueryList } from '@angular/core';
//예제
@Component({
    selector: 'child-cmp',
    template: '{{getName}}'
})
export class ChildCmp {
    @Input() childname: string;
    get getName():string{
        return this.childname;
    }

    public printName(){
        console.log(this.childname);
    }
}

//실습
@Component({
    selector: 'child-cmpTest',
    template: '{{getNameTest}}'
})
export class ChildCmpTest {
    @Input() ChildnameTest: string;
    get getName():string{
        return this.ChildnameTest;
    }
}

@Component({
    selector: 'some-cmp',
    template: `
        <child-cmp #child1 [childname]="'자식1'"></child-cmp>, {{child1.childname}}, {{child1.getName}}<br>
        <child-cmp #child2 [childname]="'자식2'"></child-cmp>, {{child2.childname}}, {{child2.getName}}<br>
        <child-cmp #child3 [childname]="'자식3'"></child-cmp>, {{child3.childname}}, {{child3.getName}}<br><br>
        <child-cmp #chd4 [childname]="'자식24'"></child-cmp>, {{chd4.childname}}, {{chd4.getName}}<br>
        <div *ngFor="let i of children">{{i.childname}}</div><br>

        <child-cmpTest #cd1 [ChildnameTest]="'테스트1'"></child-cmpTest>{{cd1.ChildnameTest}}<br>
        <child-cmpTest #cd2 [ChildnameTest]="'테스트2'"></child-cmpTest>{{cd2.ChildnameTest}}<br>
        <child-cmpTest #cd3 [ChildnameTest]="'테스트3'"></child-cmpTest>{{cd3.ChildnameTest}}<br><br>
        <div *ngFor="let i of chidrens">{{i.ChildnameTest}}</div><br>
    `
    })

    export class ViewchildrenComponent {
        //예제
        @ViewChildren('child1,child2,child3,chd4') children:QueryList<ChildCmp>;
        ngAfterViewInit() {
            this.children.toArray().forEach((child)=>child.printName());
        }
        //실습
        @ViewChildren('cd1,cd2,cd3,cd4') chidrens:QueryList<ChildCmpTest>;
}
