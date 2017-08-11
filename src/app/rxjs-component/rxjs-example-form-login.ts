import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';

// component 실행하는 module에 ReactiveFormsModule import
// 예시 ) import { ReactiveFormsModule } from '@angular/forms';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'rxjs-component-login',
    template: `
        <div class="list">
            <h2>Rxjs Login Example</h2>
            <form [formGroup]="loginForm"
                (submit)="submit$.next()">
                <label>Login:</label>
                <input formControlName="login" type="text">
                <label>Password:</label>
                <input formControlName="password" type="password">
                <button type="submit">Submit</button>
            </form>
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
export class RxjsLoginComponent implements OnInit {
    loginForm: FormGroup;
    private submit$: Observable<any> = new Subject();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            login: '',
            password: '',
        });

        this.submit$
            .withLatestFrom(this.loginForm.valueChanges, (_, values) => values)
            .subscribe(values => {
                console.log('submitted values', values);
            });
    }
}
