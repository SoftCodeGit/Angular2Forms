import { Component, OnInit  } from 'angular2/core';
import { IDbLocation } from '../shared/db-location';
import { DbLocationService } from '../shared/db-location.service'
import { DbLocationBaseComponent } from '../dbLocation/db-location-base.component';

@Component({
    selector: 'bm-dbLocation',
    templateUrl: 'app/dbLocation/db-location-model.component.html'
})
export class DbLocationModelComponent extends DbLocationBaseComponent implements OnInit {

    constructor(protected _dbLocationService: DbLocationService) {
        super(_dbLocationService);
    }
   
    ngOnInit(): void {      
        super.ngOnInit();      
    };
}