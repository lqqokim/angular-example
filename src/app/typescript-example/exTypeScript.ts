import { Component } from '@angular/core';

@Component({
    selector: 'ex-typeScript',
    template: `<div>typeScript</div>`,
    styles: [`
        border: 2px solid #666;
        padding:10px;
        width:95%;
        height:100%;
        margin-top:2%
    `],
})
export class ExTypeScript {
    typeScript = 'do';
}

//<--------------------------------타입스크립트 Start--------------------------->
//----------------배열Start------------------
    //일반배열선언
    let boom:string[] =["b1","b2","b3"];
    console.log(boom[0],boom[1],boom[2]);

    //Push선언할당
    let boom2:string[] = [];
    boom.push("bb1");

    //제네릭배열선언
    let boom3:Array<number>=[1,2,3];
    console.log(boom3[0],boom3[1],boom3[2]);

    //제네릭Push할당
    let boom4:Array<number> = new Array<number>();
    boom4.push(1);
    console.log(boom4[0]);
//----------------배열End------------------

    //padLeft any Ver
    function padLeft(value: string, padding: any) {
        if (typeof padding == 'number') {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding == "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
    console.log(padLeft("Hello world", 4)); // returns "Hello world"
    //console.log(padLeft("Hello world", true)); // returns error


    //padLeft string | number
    function padLeft1(value: string, padding: string | number) {
        if (typeof padding == "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding == "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
    //console.log(padLeft1("Hello world", true));//errors during compilation

//--------------Basic Type Start-----------------
    //변수
    var bb:string = "비비탄";

    //함수
    function go(e:string):string{
        return "my name is "+e;
    }
    let s:string = go('yoon');
    console.log(s);

    //Boolean, Numer
    let isDone: boolean = false;

    // number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

    // string
    let color: string = 'blue';
    color = 'red';

    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${ fullName }.
    my love color is ${color}
    I'll be ${ age + 1 } years old next month.`;
    console.log(sentence);

    //Tuple 복수의 값을 하나의 혼합치로 취급할 수 있다.
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    console.log(x[0].substr(1)); // OK
    //console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
    x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
    console.log(x[3]);


    //any 변수를 문자열이나 숫자등 자유롭게 사용할 수 있다(컴파일러 체크안됨).
    let notSure: any = 4;
    notSure = "maybe a string instead";
    console.log(notSure);
    notSure = false; // okay, definitely a boolean
    console.log(notSure);

    let notSure1: any = 4;
    //notSure1.ifItExists(); // okay, ifItExists might exist at runtime ??
    notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
    console.log(notSure1.toFixed());

    //Void
    function warnUser() {
    console.log("This is my warning message");
    }
    warnUser();

    let unusable: void = undefined;
    console.log(unusable);

    //Type assertions (호환성이 있는 타입이 있다면 자유롭게 타입을 바꿀수 있다)
    let someValue: any = "this is a string";
    console.log(someValue);
    let strLength: number = (<string>someValue).length;
    console.log(strLength);

    let someValue1: any = "this is a string1";
    console.log(someValue1);
    let strLength1: number = (someValue as string).length;
    console.log(strLength1);
//--------------Basic Type End-----------------

//--------------Classes Start------------------

    class Animal{
        name:string;
        constructor(theName: string){ //명시적 생성자
            this.name = theName;
        }
        move(meters: number = 0){
            document.write(this.name + " moved " + meters + "m.</br>");
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(meters = 5) {
            document.write("Snake...");
            super.move(meters);
        }
    }
    class Horse extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(meters = 45) {
            document.write("Horse...");
            super.move(meters);
        }
    }
    var sam = new Snake("Sammy the Python");
    var tom: Animal = new Horse("Tommy the Palomino");
    console.log(sam.move());//output Slithering..., Sammy the Python moved 5m.
    console.log(tom.move(34));//output Galloping..., Tommy the Palomino 34m.

    //상속 접근제어자
    class Person {
        protected name: string;//자신을 참조 하는 클래스에서 접근 가능.
        private auth: string;//자신의 클래스 에서만 접근 가능.
        constructor(name: string) {
            this.name = name;
        }
    }
    class Employee extends Person {
        private department: string;
        constructor(name: string, department: string) {
            super(name);
            this.name = 'Mr. '+name;//protected 이기에 부모의 정보 접근 가능.
            this.department = department;
        }
        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let Kenneth = new Employee("Kenneth", "developer");
        document.write(Kenneth.getElevatorPitch());//output -> Hello, my name is Mr. Kenneth and I work in developer.
        //document.write("Kenneth name : " + Kenneth.name);// error

    abstract class Department {
        constructor(public name: string) {
    }
    printName(): void {
        document.write("</br> Department name: " + this.name+"</br>");
    }
    abstract printMeeting(): void;
    }
    class AccountingDepartment extends Department {
        constructor() {
            super("Accounting and Auditing");
        }
        printMeeting(): void {
            document.write("The Accounting Department meets each Monday at 10am.</br>");
        }
        generateReports(): void {
            document.write("Generating accounting reports...</br>");
        }
    }
    let department: Department; // 추상 class type으로 객체를 선언
    //department = new Department(); //error 추상클래스는 일반클래스와 달리 그 자신을 new 명령어를 통해 객체를 생성할 수 없음.
    department = new AccountingDepartment(); // 추상 클래스 타입이 아닌 서브 클래스로 생성.
    department.printName();
    department.printMeeting();
    let accountingDepartment: AccountingDepartment = new AccountingDepartment();
    accountingDepartment.printName();
    accountingDepartment.generateReports(); // not error

    //유니온 타입 (하나이상의 타입할당)
    var unionX: string | number = 1;
    var unionY: boolean | string = true;

    console.log(typeof unionX, unionX);
    console.log(typeof unionY,unionY);

    function typecheck(p:string|number):string|number{
        return p;
    }

    let type = typecheck(1);
    console.log(typeof type);

    //<--1
    class Mycar{
    _numTimer: number;
    _carName: string;

    constructor(carName: string, numTimer: number){
        this._carName = carName;
        this._numTimer = numTimer;
    }

    getCarName(): string{
        return this._carName;
    }

    get numTimer(){
        return this._numTimer;
    }

    }

    let my:Mycar = new Mycar("Happy",4);

    console.log(my.getCarName()+" 자동차의 타이어 개수 : "+my.numTimer);
    //1-->

    //전역변수 public
    class MyCar1{
        constructor(public carName1:string, public _numTimer1: number){}

        getCarName1(): string{
          return this.carName1;
    }

    get numTimer1(){
        return this._numTimer1;
    }

}

    let my1:MyCar1 = new MyCar1("haha",5);
    console.log(my1.getCarName1()+" 자동차의 타이어 개수: "+my1.numTimer1);

    //--------------Classes End--------------------
    //----------Declaration Merging Start----------
    //인터페이스 이름 같을 때 프로퍼티 멤버 합치기
    interface Box{
        height: number;
        width: number;
    }

    interface Box {
        scale: number;
    }

    let box: Box = {
        height: 5
        ,width: 6
        ,scale: 10
    };

    //인터페이스 이름 같을 때 펑션 멤버 합치기
    interface Document {
        createElement(tagName: any): Element;
    }
    interface Document {
        createElement(tagName: "div"): HTMLDivElement;
        createElement(tagName: "span"): HTMLSpanElement;
    }
    interface Document {
        createElement(tagName: string): HTMLElement;
        createElement(tagName: "canvas"): HTMLCanvasElement;
    }

    // 합치기
    interface Document {
        createElement(tagName: "canvas"): HTMLCanvasElement;
        createElement(tagName: "div"): HTMLDivElement;
        createElement(tagName: "span"): HTMLSpanElement;
        createElement(tagName: string): HTMLElement;
        createElement(tagName: any): Element;
    }

    //----------Declaration Merging End------------

    //----------Decorators Start-------------------
    // decorator factory로써 @color 를 사용할 수 있다.
    // value는 메타 정보이다.
    function color12(value: string) {
        // 메타정보를 가지고 어떤 작업을 수행한다.
        // target은 적용한 대상 - class, property, parameter, etc...
        return function (target) {
          // do something with 'target' and 'value'...
          // target.nattiveElement.style.color = value;
        }
    }

    // Usage
    //@color12('blue') domSample: ElementRef;
    //----------Decorators End---------------------
    //----------Enums Start------------------------
    //enumerate 의 약어. 열거형을 의미한다. 디폴트는 0으로 시작한다. UpperCamelCase사용
    enum Color{
    Red,
    Blue,
    Yellow
    }

    var rN: number = Color.Blue;
    var rS: string = Color[rN];

    console.log(rN+ "," +rS);


    enum Style12 {
    None = 0,
    Bold = 1,
    Italic = 2,
    Underline = 4,
    Hyperlink = Style12.Bold | Style12.Underline
    }
    console.log(Style12.Hyperlink);
    console.log(Style12[1]);


    enum Style {
    None = 0,
    Bold = 1,
    Italic = 2
    }
    enum Style {
    Underline = 4,
    Hyperlink = Style.Bold | Style.Underline
    }
    const enum Permission {
    Read = 4,
    Write = 2,
    Execute = 1,
    }

    var filePermission = Permission.Read + Permission.Write + Permission.Execute;
    console.log(filePermission);

    //----------Enums End--------------------------
    //----------functions Start--------------------
    function add(x: number, y: number): number {
        return x + y;
    }
    console.log(add(3,4));
    let myAdd: (baseValue:number, increment:number) => number =
    function(x, y) { return x + y; };
    console.log(myAdd(3,4));

    function buildName(firstName: string, lastName: string) {
        return firstName + " " + lastName;
    }
    //let buildNameResult1 = buildName("Bob");                  // error, 파라미터가 모자름.
    //let buildNameResult2 = buildName("Bob", "Adams", "Sr.");  // error, 파라미터가 많음.
    let buildNameResult3 = buildName("Bob", "Adams");           // not error
    document.write(buildNameResult3+"</br>");                 // output -> Bob Adams

    //default parameter
    function buildNameDefault(firstName: string, lastName: string = "Kenneth") {
        return firstName + " " + lastName;
    }
    let buildNameDefaultResult1 = buildNameDefault("Bob");                  // works correctly now, returns "Bob Kenneth"
    let buildNameDefaultResult2 = buildNameDefault("Bob", undefined);       // still works, also returns "Bob Kenneth"
    //let buildNameDefaultResult3 = buildNameDefault("Bob", "Adams", "Sr.");  // error, 파라미터가 많음.
    let buildNameDefaultResult4 = buildNameDefault("Bob", "Adams");         // not error         //Joseph Samuel Lucas MacKinzie
    console.log(buildNameDefaultResult1,buildNameDefaultResult2,buildNameDefaultResult4);

    //overLoad
    let suits = ["hearts", "spades", "clubs", "diamonds"];

    //type script overload
    //paramter의 type에 따라 overload가 가능
    //추상화 클래스로 되어있어도 쉽게 알 수 있음.
    function pickCardOverload(x: {suit: string; card: number; }[]): number;
    function pickCardOverload(x: number): {suit: string; card: number; };
    function pickCardOverload(x): any {
    //해당 function의 체크 로직을 보지 않아도 구현 가능.
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        } else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    let overload_myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    let overload_pickedCard1 = overload_myDeck[pickCardOverload(overload_myDeck)];
    document.write("card: " + overload_pickedCard1.card + " of " + overload_pickedCard1.suit+"</br>");
    let overload_pickedCard2 = pickCardOverload(15);
    document.write("card: " + overload_pickedCard2.card + " of " + overload_pickedCard2.suit+"</br>");

 //----------functions End----------------------
 //<--------------------------------타입스크립트 END--------------------------->
