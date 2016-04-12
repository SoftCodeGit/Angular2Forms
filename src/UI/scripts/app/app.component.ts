import { Component, provide} from 'angular2/core';
import {HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { DbLocationService } from './shared/db-location.service';
import { DbLocationModelComponent } from './dbLocation/db-location-model.component';
import { DbLocationFormsComponent } from './dbLocation/db-location-forms.component';
import { IDbLocation } from './shared/db-location';
import { DisplayComponent } from './display/display.component';
import { BookmarkListComponent } from './bookmark/bookmark-list.component';
import { BookmarkOptionDataService } from './bookmark/bookmark-option-data.service';
import { BookmarkOptionControlService } from './dynamicForm/bookmark-option-control.service';
import { RadioFormsComponent } from './radios/radio-forms.component';
import { CheckboxFormsComponent } from './checkboxes/checkbox-forms.component';
import { BookmarkOptionValueChangeService} from './bookmark/bookmark-option-value-change.service';

@Component({
    selector: 'bm-app',
    templateUrl: 'app/app.component.html',
    directives: [DbLocationModelComponent, DisplayComponent, ROUTER_DIRECTIVES],
    providers: [DbLocationService, HTTP_PROVIDERS, BookmarkOptionDataService, BookmarkOptionControlService, BookmarkOptionValueChangeService]
})
    @RouteConfig([
        { path: '/', name: 'Model', component: DbLocationModelComponent, useAsDefault: true },
        { path: '/forms', name: 'Forms', component: DbLocationFormsComponent },
        { path: '/dynamic', name: 'Dynamic', component: BookmarkListComponent },
        { path: '/checkboxes', name: 'Checkboxes', component: CheckboxFormsComponent }
    ])
export class AppComponent {
    pageTitle: string = 'Bookmark Generator';

    public tabItems = [
        { caption: 'Model', link: ['Model'] },
        { caption: 'Forms', link: ['Forms'] },
        { caption: 'Dynamic Demo', link: ['Dynamic'] },
        { caption: 'Checkbox Demo', link: ['Checkboxes'] }
    ];

    constructor(private _dbLocationService: DbLocationService) {
        this._dbLocationService.dbLocationChanged$.subscribe(dbLocation => this.onDbLocationChanged(dbLocation));
    }

    private onDbLocationChanged(dbLocation: IDbLocation): void {
        console.log("From app.Component: " + JSON.stringify(dbLocation));
    }


}