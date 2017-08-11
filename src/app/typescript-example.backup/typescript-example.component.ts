import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'ts-ex',
    templateUrl: 'typescript-example.html',
    styleUrls: ['typescript-example.css']
})
export class TypescriptComponent implements OnInit {
    @ViewChild("array") array;

    title = 'Typescript Example';
    result;

    constructor(private el: ElementRef) { }

    ngOnInit(): void { }

    displayFunction(method: any): string {
        let str = method.toString().replace(/\n/g, "<br />");
        return str;
    }

    setArrayEx() : void {

        //일반배열선언
        let boom: string[] = ["b1", "b2", "b3"];
        console.log(boom[0], boom[1], boom[2]);
        //Push선언할당
        let boom2: string[] = [];
        boom.push("bb1");
        //제네릭배열선언
        let boom3: Array<number> = [1, 2, 3];
        console.log(boom3[0], boom3[1], boom3[2]);
        //제네릭Push할당
        let boom4: Array<number> = new Array<number>();
        boom4.push(1);
        console.log(boom4[0])

    }

    setLeftPadEx(): void {
        //any Ver.
        function padLeft_any(value: string, padding: any) {
            if (typeof padding == 'number') {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding == "string") {
                return padding + value;
            }
            throw new Error(`Expected string or number, got '${padding}.'`);
        }
        console.log(padLeft_any("Hello world", 4)); // "Hello world"
        //console.log(padLeft("Hello world", true)); // error  

        //union Ver.
        function padLeft_union(value: string, padding: string | number) {
            if (typeof padding == "number") {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding == "string") {
                return padding + value;
            }
            throw new Error(`Expected string or number, got '$ {padding }'.`);
        }
        console.log(padLeft_union("Hello world", 10));//errors during compilation

    }

    setBasicTypeEx(): void {

        //변수    
        var bb: string = "비비탄";

        //함수
        function go(e: string): string {
            return "my name is " + e;
        }
        let s: string = go('yoon');
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

        let fullName: string = 'Bob Bobbington';
        let age: number = 37;
        let sentence: string = `Hello, my name is ${fullName}. my love color is ${color} I'll be ${age + 1} years old next month.`;
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
    }

    setClassEx(): void {

        class Animal {
            name: string;
            constructor(theName: string) { //명시적 생성자
                this.name = theName;
            }
            move(meters: number = 0) {
                // document.write(this.name + " moved " + meters + "m.</br>");
            }
        }

        class Snake extends Animal {
            constructor(name: string) {
                super(name);
            }
            move(meters = 5) {
                // document.write("Snake...");
                super.move(meters);
            }
        }

        class Horse extends Animal {
            constructor(name: string) {
                super(name);
            }
            move(meters = 45) {
                // document.write("Horse...");
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
                this.name = 'Mr. ' + name;//protected 이기에 부모의 정보 접근 가능.
                this.department = department;
            }
            getElevatorPitch() {
                return `Hello, my name is ${this.name} and I work in ${this.department}.`;
            }
        }

        let Kenneth = new Employee("Kenneth", "developer");
        //document.write(Kenneth.getElevatorPitch());//output -> Hello, my name is Mr. Kenneth and I work in developer.
        //document.write("Kenneth name : " + Kenneth.name);// error

        abstract class Department {
            constructor(public name: string) {
            }
            printName(): void {
                // document.write("</br> Department name: " + this.name + "</br>");
            }
            abstract printMeeting(): void;
        }

        class AccountingDepartment extends Department {
            constructor() {
                super("Accounting and Auditing");
            }
            printMeeting(): void {
                // document.write("The Accounting Department meets each Monday at 10am.</br>");
            }
            generateReports(): void {
                // document.write("Generating accounting reports...</br>");
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
        console.log(typeof unionY, unionY);

        function typecheck(p: string | number): string | number {
            return p;
        }

        let type = typecheck(1);
        console.log(typeof type);

        //<--1
        class Mycar {
            _numTimer: number;
            _carName: string;

            constructor(carName: string, numTimer: number) {
                this._carName = carName;
                this._numTimer = numTimer;
            }

            getCarName(): string {
                return this._carName;
            }

            get numTimer() {
                return this._numTimer;
            }

        }

        let my: Mycar = new Mycar("Happy", 4);

        console.log(my.getCarName() + " 자동차의 타이어 개수 : " + my.numTimer);
        //1-->

        //전역변수 public
        class MyCar1 {
            constructor(public carName1: string, public _numTimer1: number) { }

            getCarName1(): string {
                return this.carName1;
            }

            get numTimer1() {
                return this._numTimer1;
            }

        }

        let my1: MyCar1 = new MyCar1("haha", 5);
        console.log(my1.getCarName1() + " 자동차의 타이어 개수: " + my1.numTimer1);
    }

    setDeclarationsMergingEx(): void {

        //인터페이스 이름 같을 때 프로퍼티 멤버 합치기
        interface Box {
            height: number;
            width: number;
        }

        interface Box {
            scale: number;
        }

        let box: Box = {
            height: 5
            , width: 6
            , scale: 10
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
    }

    setDecoratorEx() {
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
    }

    setEnumEx(): void {

        //enumerate 의 약어. 열거형을 의미한다. 디폴트는 0으로 시작한다. UpperCamelCase사용
        enum Color {
            Red,
            Blue,
            Yellow
        }

        var rN: number = Color.Blue;
        var rS: string = Color[rN];

        console.log(rN + "," + rS);

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
    }

    setFunctionEx(): void {

        function add(x: number, y: number): number {
            return x + y;
        }
        console.log(add(3, 4));
        let myAdd: (baseValue: number, increment: number) => number =
            function (x, y) { return x + y; };
        console.log(myAdd(3, 4));

        function buildName(firstName: string, lastName: string) {
            return firstName + " " + lastName;
        }
        //let buildNameResult1 = buildName("Bob");                  // error, 파라미터가 모자름.
        //let buildNameResult2 = buildName("Bob", "Adams", "Sr.");  // error, 파라미터가 많음.
        let buildNameResult3 = buildName("Bob", "Adams");           // not error
        // document.write(buildNameResult3 + "</br>");                 // output -> Bob Adams

        //default parameter
        function buildNameDefault(firstName: string, lastName: string = "Kenneth") {
            return firstName + " " + lastName;
        }
        let buildNameDefaultResult1 = buildNameDefault("Bob");                  // works correctly now, returns "Bob Kenneth"
        let buildNameDefaultResult2 = buildNameDefault("Bob", undefined);       // still works, also returns "Bob Kenneth"
        //let buildNameDefaultResult3 = buildNameDefault("Bob", "Adams", "Sr.");  // error, 파라미터가 많음.
        let buildNameDefaultResult4 = buildNameDefault("Bob", "Adams");         // not error         //Joseph Samuel Lucas MacKinzie
        console.log(buildNameDefaultResult1, buildNameDefaultResult2, buildNameDefaultResult4);

        //overLoad
        let suits = ["hearts", "spades", "clubs", "diamonds"];

        //type script overload
        //paramter의 type에 따라 overload가 가능
        //추상화 클래스로 되어있어도 쉽게 알 수 있음.
        function pickCardOverload(x: { suit: string; card: number; }[]): number;
        function pickCardOverload(x: number): { suit: string; card: number; };
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
        // document.write("card: " + overload_pickedCard1.card + " of " + overload_pickedCard1.suit + "</br>");
        let overload_pickedCard2 = pickCardOverload(15);
        // document.write("card: " + overload_pickedCard2.card + " of " + overload_pickedCard2.suit + "</br>");
    }

    setDestructuringEx(): void {

        arrayDestructuring();
        objectDestructuring();
        parameterDestructuring();

        // Array Destructuring
        function arrayDestructuring() {

            let one, two, three, four, other;
            const values = [1, 2, 3];

            [one, two, three] = values;
            console.log("A:", one, two, three);

            [one, two] = values;
            console.log("B:", one, two);

            [one, two, three, four] = values;
            console.log("C:", one, two, three, four);

            [one, two, [three, four]] = [1, 2, [73, 74]];
            console.log("D:", one, two, three, four);

            [one, , , four] = [1, 2, 3, 4];
            console.log(one, four);

            [one, ...other] = [1, 2, 3, 4];
            console.log(other);
        }

        // Object Destructuring
        function objectDestructuring() {

            let three, four;
            ({ three, four } = { three: 3, four: 4 });
            console.log(three, four);

            let five, six;
            ({ one: five, two: six } = { one: 10, two: 20 });
            console.log(five, six);

            let { nine, plus: { ten } } = { nine: 9, plus: { ten: 10 } }
            console.log(nine, ten);
        }

        function parameterDestructuring() {
            function total({ one, plus: { two, five } }) {
                console.log(one + two + five);
            }

            total({ one: 1, plus: { two: 2, five: 5 } });
        }
    }

    setObjectInObjectEx(): void {

        function operation() {
            // let sameKey = { one: 1, one: 2};
            // console.log(sameKey); // Object { one: 2}

            let one = 1, two = 2;
            let values = { one, two };
            console.log(values); // Object { one: 1, two: 2 }

            let obj = {
                getTotal(param) {
                    return param + 123;
                }
            };
            console.log(obj.getTotal(400)); // 523

        }

        // function getProperty() {
        //     //ES5 get속성 = ES6 getter
        //     var obj = {};
        //     Object.defineProperty(obj, "book", {
        //         get: function () {
        //             return "책";
        //         }
        //     });
        //     console.log(obj.book);
        // }

        // function setProperty() {
        //     //ES5 set속성 = ES6 setter
        //     var obj = {};
        //     Object.defineProperty(obj, "item", {
        //         set: function (param) {
        //             this.sports = param;
        //         }
        //     });
        //     obj.item = "야구";
        //     console.log(obj.sports);// defalut getter call
        // }

        function getter() {
            //ES6 getter
            let obj = {
                value: 123,
                get getValue() {
                    return this.value;
                }
            };
            console.log(obj.getValue);
        }

        // function setter() {
        //     let obj = {
        //         set setValue(value) {
        //             this.value = value;
        //         }
        //     };
        //     obj.setValue = 123;
        //     console.log(obj.value);
        // }

        function isEx() {

            // Object.is() VS '==='
            console.log("1:", Object.is(1, "1")); // false
            console.log("2:", Object.is(NaN, NaN), NaN === NaN); // true false
            console.log("3:", Object.is(0, -0), 0 === -0); // false true
            console.log("4:", Object.is(-0, 0), -0 === 0); // false true
            console.log("5:", Object.is(-0, -0), -0 === 0); // true true
            console.log("6:", Object.is(NaN, 0 / 0), NaN === 0); // true false
            console.log("7:", Object.is(null, null), null === null); // true true
            console.log("8:", Object.is(undefined, null), undefined === null); // false false
        }

        function assignEx() {

            // Object.assign() Concept
            try {
                let obj = Object.assign(null, { x: 1 });
            } catch (e) {
                console.log("null 지정 불가"); // in
            }

            try {
                let obj = Object.assign("ABC", "ONE");
            } catch (e) {
                console.log("파라미터 모두 문자열 사용 불가"); // in
            }

            // console.log(Object.assign(123)); // Number {[[PrimitiveValue]]}: 123
            console.log(Object.assign(456, 70)); // Number {[[PrimitiveValue]]}: 456
            console.log(Object.assign("ABC", { one: 1 })); // String {0: "A", 1: "B", 2: "C", one: 1, length: 3, [[PrimitiveValue]]: "ABC"}
            console.log(Object.assign(Symbol("ABC"), { one: 1 })); // Symbol {one: 1, [[PrimitiveValue]]: Symbol(ABC)}

            let oneObj = {};
            Object.assign(oneObj, "ABC", undefined, null);
            console.log(oneObj); // Object { 0: "A", 1: "B", 2: "C" }

            let twoObj = {};
            Object.assign(twoObj, { key1: undefined, key2: null });
            console.log(twoObj); // { key1: undefined, key2: null }

            // //Object.assign() necessity
            // let sports_1 = {
            //     event: "축구",
            //     palyer: 11
            // };

            // let dup1 = sports_1;

            // sports_1.palyer = 55;
            // console.log(dup1.player); // 55

            // dup1.event = "농구";
            // console.log(sports_1.event); // 농구

            // //ES5 Object copy
            // let sports_2 = {
            //     event: "축구",
            //     palyer: 11
            // };

            // let dup_2 = {};

            // for (var key in sports_2) {
            //     dup_2[key] = sports_2[key];
            // }

            // sports_2.player = 33;
            // console.log(dup_2.player); // 11

            //ES6 Object copy
            let sports_3 = {
                event: "축구",
                player: 11
            };

            let dup_3 = Object.assign({}, sports_3);
            console.log(dup_3.player); // 11

            dup_3.player = 33;
            console.log(sports_3.player); // 11

            sports_3.event = '수영';
            console.log(dup_3.event); // 축구
        }
    }

    setArrayObjectEx(): void {

        // Array.from()
        function arrayFrom() {
            let arrayObj = Array.from({ 0: "zero", 1: "one", length: 2 });
            console.log(Array.isArray(arrayObj)); // true
            console.log(arrayObj); // ["zero", "one"]

            let stringObj = Array.from("ABC");
            console.log(stringObj); // ["A", "B", "C"]

            let arrayLike = { 0: 10, 1: 30, length: 2 };
            let values = Array.from(arrayLike, function (value) {
                return value = this.bonus;
            }, { bonus: 100 });
            console.log(values); // [110, 130] 
        }

        // Array.of()
        function arrayOf() {
            let arrayObj = Array.of(1, 2, 3);
            console.log(arrayObj); // [1, 2, 3]
        }

        // copyWithin()
        function copyWithin() {
            let one = [1, 2, 3, 4, 5];
            console.log(one.copyWithin(0, 3)); // [4, 5, 3, 4, 5]

            let two = [1, 2, 3, 4, 5];
            console.log(two.copyWithin(0, 2, 4)); // [3, 4, 3, 4, 5]

            let three = [1, 2, 3, 4, 5];
            // console.log(three.copyWithin(3));// [1, 2, 3, 1, 2]

            let arrayLike = { 0: "ABC", 1: "DEF", 2: "가나다", length: 3 };
            let four = Array.prototype.copyWithin.call(arrayLike, 0, 1);
            console.log(four);

            function five(...array) {
                return Array.prototype.copyWithin.call(arguments, 3, 0, 2);
            }
            console.log(five(1, 2, 3, 4, 5));
        }

        // fill()
        function fill() {
            let one = [1, 2, 3];
            console.log(one.fill(7)); // [7, 7, 7]

            let two = [1, 2, 3, 4, 5];
            console.log(two.fill(7, 1)); // [1, 7, 7, 7, 7]

            let three = [1, 2, 3, 4, 5];
            console.log(three.fill(7, 1, 3)); // [1, 7, 7, 4, 5]
        }

        // entries()
        function entries() {
            let values = [10, 20, 30];
            let iterator: IterableIterator<[number, number]> = values.entries();
            console.log(iterator.next()); // Object { value: Array[2], done: false }

            for (var [key, value] of iterator) {
                console.log(key, ":", value); // 1 : 20, 2 : 30
            }
        }

        // keys()
        function keys() {
            let iterator = [10, 20, 30].keys();

            for (var key of iterator) {
                console.log(key, ":", iterator[key]); // 0: undefined, 1: undefined, 2: undefined
            }
        }

        // values()
        function values() {
            let iterator = [10, 20, 30].values();
            console.log(iterator.next());
        }

        function find() {
            let result = [1, 2, 3].find(function (value, index, allData) {
                return value === 2;
            });
            console.log(result); // 2

            result = [1, 2, 1].find(function (value, index, addData) {
                return value === 1 && value === this.key;
            }, { key: 1 });

            console.log(result); // 1
        }

        function findIndex() {
            let result = [10, 20, 30].findIndex(function (value, index, allData) {
                return value === 20;
            });
            console.log(result); // 1

            result = [10, 20, 30].findIndex(function (value, index, allData) {
                return value === 77;
            });
            console.log(result); // -1

            result = [10, 20, 30].findIndex(function (value, index, allData) {
                return value === 30 && value === this.check;
            }, { check: 30 });
            console.log(result); // 2
        }
        console.log(this.setArrayEx());
    }

    setClassInObjectEx(): void {

        let member = class {
            getName() {
                return "이름";
            }
        };

        class Member {
            name: string;
            age: number;

            constructor(age) {
                this.age = age;
            }

            set setName(name) {
                this.name = name;
            }

            get getName() {
                return this.name;
            }
        };

        let memberObj = new Member(10);
        console.log(memberObj.getName);
    }

}


// Class Expression : Class 표현식
let member = class {
    getName() {
        return "이름";
    }
};

// Class Statement OR Declaration: Class 선언문
class Member {
    name: string;
    age: number;

    constructor(age: number) {
        this.age = age;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }
};
// 클래스 메서드 호출 방법
let memberObj = new Member(10);
console.log(memberObj.getName);

// 클래스 외부에서 메소드 추가
// Member.prototype.getTitle = function () { };

/*
    Consctuctor return

    constructor에서의 리턴 타입이 String 또는 Number이면
    무시하고 인스턴스를 반환한다. 그외에 타입에 대해서는 constructor
    리턴 값이 반환된다.
 */
class constructor {
    constructor() {
        // return { name: "홍길동" };
    }

    getName() {
        return "이름";
    }
}

let constructorObj = new constructor();
// console.log(constructorObj.name); // 홍길동
console.log(constructorObj.getName); // undefined

// Class 상속
class Sports {
    member: number;
    ground: string;

    constructor(member: number) {
        this.member = member;
    }

    set setGround(ground: string) {
        this.ground = ground;
    }

    get getMember() {
        return this.member;
    }
};

class Soccer extends Sports {

    set setGround(ground: string) {
        super.setGround;
        this.ground = ground;
    }
};

let soccer = new Soccer(11);
soccer.setGround = "상암구장";
console.log(soccer.getMember); // 11
console.log(soccer.ground); // 상암구장

// Builtin 오브젝트 상속
class ExtendArray extends Array {

    constructor() {
        super();
    }

    get getTotal() {
        let total = 0;
        for (var value of this) {
            total += value;
        };
        return total;
    }
};

let extendArray = new ExtendArray();
extendArray.push(10, 20);
console.log(extendArray.getTotal);

// Object.setPrototypeOf()
let Game = {
    getTitle() {
        console.log("Game");
    }
};

let Stacraft = {
    getTitle() {
        super.getTitle();
        console.log("Starcraft");
    }
}

Object.setPrototypeOf(Stacraft, Game);
Game.getTitle(); // Game, Starcraft

// Static method
class Book {
    static get getTitle() {
        return "해리포터";
    }
};

console.log(Book.getTitle); // 해리포터

//Class Hoisting
try {
    let result = Member;
} catch (e) {
    console.log("호이스팅 불가"); // in
}

class HoistingTest {
    static get getTest() {
        return "test";
    }
}

// Computed name
let type = "Type";

class Computed {
    static ["get" + type](kind) {
        return kind ? "스포츠" : "음악";
    }
}

console.log(Computed["get" + type](1)); // 스포츠

// // This
// class Music {    
//     static set setSound(sound) {
//         this.sound = sound;
//     }

//     static get getSound() {
//         return this.sound;
//     }
// };
// Music.setSound = "크게";
// console.log(Music.getSound); // 크게

class Speaker {
    constructor() {
        // console.log(Speaker.getSound());
        // console.log(this.constructor.getSound());
    }

    static get getSound() {
        return "작게";
    }
}

let SpeakerObj = new Speaker(); // 작게, 작게

// Generator
class Student {
    *gen() {
        yield 10;
        yield 20;
    }
};
let studentObj = new Student();
let genObj = studentObj.gen();

console.log(genObj.next()); // Object { value : 10, done: false } -> Generator object
console.log(genObj.next()); // object { value : 20, done: false }

// new.target
let target = function () {
    console.log(new.target); // undefined, function() { ... }
};

target();
new target();

// new.target.name
class SuperTarget {
    constructor() {
        console.log("Super: ", new.target.name);
    }
};

class SubTarget extends SuperTarget {
    constructor() {
        super();
        console.log("Sub:", new.target.name);
    }
};

let superObj = new SuperTarget(); // Super: SuperTarget, Super: SubTarget, Super: SubTarget
let subobj = new SubTarget();

// // Image object 상속
// // <script src="extends-image.js" defer></script>

// class ExtendsImage extends Image{
//     constructor() {
//         super();
//     }

//     set setProperty(image) {
//         this.src = image.src;
//         this.alt = image.alt;
//         this.title = image.title;
//     }
// };

// let imageObj = new ExtendsImage();
// let properties = {
//     src: "file/rainbow.png",
//     alt: "나무와 집이 있고 그 위에 무지개가 있는 모습",
//     title: "무지개"
// };

// imageObj.setProperty(properties);
// document.querySelector("body").appendChild(imageObj);

// /*
//   <img src = "file/rainbow.jpg"
//        alt = "나무와 집이 있고 그 위에 무지개가 있는 모습"
//        title = "무지개">
//  */