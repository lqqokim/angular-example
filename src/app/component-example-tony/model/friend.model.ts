export class Friend {
    name: string;
    age: number;
    constructor( name: string = 'kenneth', age: number = 20 ) { // 생성자에 default parameter적용
        this.name = name;
        this.age = age;
    }
}