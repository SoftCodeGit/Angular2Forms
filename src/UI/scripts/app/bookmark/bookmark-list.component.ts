import { Component, OnInit  } from 'angular2/core';
import { IDbLocation } from '../shared/db-location';
import { DbLocationService } from '../shared/db-location.service';
import { BookmarkOptionListComponent } from './bookmark-option-list.component';

@Component({
    selector: '<bm-bmlist></bm-bmlist>',
    templateUrl: 'app/bookmark/bookmark-list.component.html',
    directives: [BookmarkOptionListComponent]
})
export class BookmarkListComponent implements OnInit {
    bookmarkCode: string;

    ngOnInit(): void {
        this.bookmarkCode = 'ActionFeeAmount';
    }
}