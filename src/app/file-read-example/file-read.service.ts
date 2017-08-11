import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { CanActivate, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


///Service class to call REST API
@Injectable()
export class ConfigurationService implements CanActivate {

    constructor(private http: Http) {
    }

    canActivate() {
        console.log('canActivate');
        return false;
    }

    // canDeactivate() {
    //     return true;
    // }

    // run success of not routing app
    getConfiguration = (src): Observable<Response> => {
        console.log('In getConfiguration of ConfigurationService');
        // 'app/component/chart/configurations/column-group.json'
        return this.http.get(src).map( (res) => {
            console.log('result : ', res.json());
            return res.json();
        });
    }
}
