import { Component, Input, ViewChildren, QueryList, AfterViewInit, ViewEncapsulation } from '@angular/core';
// 예제
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'view-children-child',
    template: '{{getName}}'
})
export class ChildComponent {
    @Input() childname: string;
    get getName(): string{
        return this.childname;
    }

    public printName() {
        console.log(this.childname);
    }
}

// 실습
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'child-name-component',
    template: '{{getName}}'
})
export class ChildNameComponent {
    @Input() name: string;
    get getName(): string{
        return this.name;
    }
}

@Component({
    selector: 'app-view-children',
    template: `
        <div class="list">
            <h2>ViewChildren Example</h2>
            <view-children-child #child1 [childname]="'자식1'"></view-children-child>, {{child1.childname}}, {{child1.getName}}<br>
            <view-children-child #child2 [childname]="'자식2'"></view-children-child>, {{child2.childname}}, {{child2.getName}}<br>
            <view-children-child #child3 [childname]="'자식3'"></view-children-child>, {{child3.childname}}, {{child3.getName}}<br><br>
            <view-children-child #chd4 [childname]="'자식24'"></view-children-child>, {{chd4.childname}}, {{chd4.getName}}<br>

            <child-name-component #cd1 [name]="'테스트1'"></child-name-component>{{cd1.getName}}<br>
            <child-name-component #cd2 [name]="'테스트2'"></child-name-component>{{cd2.getName}}<br>
            <child-name-component #cd3 [name]="'테스트3'"></child-name-component>{{cd3.getName}}<br><br>
            
        </div>
    `,
    styles: [`
        .list {
            background-color:#EFEFEF;
            border:1px solid #DDD;
            box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
            border-radius:3px;
        }
    `],
    encapsulation: ViewEncapsulation.Native
    })

    export class ViewChildrenComponent implements AfterViewInit {
        // 예제
        @ViewChildren('child1,child2,child3,chd4') children: QueryList<ChildComponent>;
        // 실습
        @ViewChildren('cd1,cd2,cd3,cd4') chidrens: QueryList<ChildNameComponent>;

        ngAfterViewInit() {
            this.children.toArray().forEach((child) => child.printName());
        }

}
