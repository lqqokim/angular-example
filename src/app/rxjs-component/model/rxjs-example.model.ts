export class Repo {
    id: string;
    url: string;
    constructor( id: string = 'kenneth', url: string = '' ) { // 생성자에 default parameter적용
        this.id = id;
        this.url = url;
    }
}
