import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { Repo } from './model/rxjs-example.model';

@Injectable()
export class RepoService {
    constructor(private _http: Http) {}

    getReposForUser(user: string): Observable<any> {
        return this._http
        .get(`https://api.github.com/users/${user}/repos`)
        .map((res: any) => {
            const resObj = res.json();
            return [new Repo(user, resObj[0].url)];
        }).share();
    }
}
