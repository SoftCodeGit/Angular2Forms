import { Component, OnInit} from 'angular2/core';
import 'rxjs/Rx';

import { DbLocationService } from '../shared/db-location.service';
import { IDbLocation } from '../shared/db-location';
import { IBookmarkOptionValue } from '../shared/bookmark-option-value';
import { BookmarkOptionValueChangeService } from '../bookmark/bookmark-option-value-change.service';

@Component({
    selector: 'bm-display',
    template: `
        <div class="top-buffer-std buttom-buffer-std">{{dbString}}</div>
`
})
export class DisplayComponent implements OnInit {
    dbString: string;

    constructor(private _dbLocationService: DbLocationService,
                private _bookmarkOptionValueChangeService: BookmarkOptionValueChangeService    ) {

    }

    private onDbLocationChanged(dbLocation: IDbLocation): void {
        console.log("From display.Component: " + JSON.stringify(dbLocation));
        this.dbString = JSON.stringify(dbLocation);
    }

    private onDbLocationLoaded(dbLocation: IDbLocation) {
        console.log("From display.Component, dbLocation loaded: " + JSON.stringify(dbLocation))
    }

    private onFormValueChanged(optionValue: IBookmarkOptionValue): void {        
        this.dbString = JSON.stringify(optionValue);
    }

    ngOnInit(): void {
        this._dbLocationService.dbLocationChanged$.subscribe(dbLocation => this.onDbLocationChanged(dbLocation));
        this._bookmarkOptionValueChangeService.bookmarkOptionValueChanged$.subscribe(optionValue => this.onFormValueChanged(optionValue));
    }
}