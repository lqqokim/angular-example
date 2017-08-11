import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { RoutingEx } from './routing-example/routing-ex';
import { ViewChildComponent } from './view-child/viewchild.component';
import { ViewChildrenComponent } from './view-child/viewchildren.component';
import { FriendListComponent } from './component-example/parent-friend.component';
import { ParentFriendComponent } from './component-example-tony/parent-friend.component';
import { RxjsComponent } from './rxjs-component/rxjs-example-component';
import { RxjsLoginComponent } from './rxjs-component/rxjs-example-form-login';
import { ContentChildComponent } from './content-child-example/content-child.component';
import { FileReadComponent } from './file-read-example/file-read.component';
import { DynamicComponent } from './dynamic-component-example/dynamic-component.component';
import { PipeComponent } from './pipe-example/pipe.component';
import { BookListComponent } from './mongodb-example/book/book-list.component';
import { TypescriptComponent } from './typescript-example/typescript-example.component';
import { CdDemosAppComponent } from './change-detection-example/cd-demos.component';

import {DefaultChangeDetectionComponent} from './change-detection-example/default-change-detection';
import {ManualChangeDetectionComponent} from './change-detection-example/manual-change-detection';
import {OnPushChangeDetectionComponent} from './change-detection-example/on-push-change-detection';
import {OnPushChangeDetectionObservablesComponent} from './change-detection-example/on-push-change-detection-observables';

import { ConfigurationService } from './file-read-example/file-read.service';


const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' }
    , { path: 'main',  component: FileReadComponent }
    , { path: 'routingEx', component: RoutingEx }
    , { path: 'ViewChild', component: ViewChildComponent }
    , { path: 'viewchildren', component: ViewChildrenComponent }
    , { path: 'FriendList', component: FriendListComponent }
    , { path: 'ParentFriend', component: ParentFriendComponent }
    , { path: 'RxjsComponent', component: RxjsComponent }
    , { path: 'RxjsLoginComponent', component: RxjsLoginComponent }
    , { path: 'ContentChildComponent', component: ContentChildComponent }
    , { path: 'FileRead', component: FileReadComponent, canActivate: [ConfigurationService] }
    , { path: 'DynamicComponent', component: DynamicComponent }
    , { path: 'PipeComponent', component: PipeComponent }
    , { path: 'BookListComponent', component: BookListComponent }
    , { path: 'TypescriptComponent', component: TypescriptComponent }
    , { path: 'ChangeDetection', component: CdDemosAppComponent,
        children: [
            {
                path: 'default-change-detection',
                component: DefaultChangeDetectionComponent,
                outlet: 'cd-routes'
            },
            {
                path: 'on-push-change-detection',
                component: OnPushChangeDetectionComponent,
                outlet: 'cd-routes'
            },
            {
                path: 'on-push-change-detection-observables',
                component: OnPushChangeDetectionObservablesComponent,
                outlet: 'cd-routes'
            },
            {
                path: 'manual-change-detection',
                component: ManualChangeDetectionComponent,
                outlet: 'cd-routes'
            }
        ] }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [ ConfigurationService, {provide: LocationStrategy, useClass: HashLocationStrategy} ]
})
export class AppRoutingModule { }

