System.register(['angular2/core', 'rxjs/Rx', '../shared/db-location.service', '../bookmark/bookmark-option-value-change.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, db_location_service_1, bookmark_option_value_change_service_1;
    var DisplayComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (db_location_service_1_1) {
                db_location_service_1 = db_location_service_1_1;
            },
            function (bookmark_option_value_change_service_1_1) {
                bookmark_option_value_change_service_1 = bookmark_option_value_change_service_1_1;
            }],
        execute: function() {
            DisplayComponent = (function () {
                function DisplayComponent(_dbLocationService, _bookmarkOptionValueChangeService) {
                    this._dbLocationService = _dbLocationService;
                    this._bookmarkOptionValueChangeService = _bookmarkOptionValueChangeService;
                }
                DisplayComponent.prototype.onDbLocationChanged = function (dbLocation) {
                    console.log("From display.Component: " + JSON.stringify(dbLocation));
                    this.dbString = JSON.stringify(dbLocation);
                };
                DisplayComponent.prototype.onDbLocationLoaded = function (dbLocation) {
                    console.log("From display.Component, dbLocation loaded: " + JSON.stringify(dbLocation));
                };
                DisplayComponent.prototype.onFormValueChanged = function (optionValue) {
                    this.dbString = JSON.stringify(optionValue);
                };
                DisplayComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dbLocationService.dbLocationChanged$.subscribe(function (dbLocation) { return _this.onDbLocationChanged(dbLocation); });
                    this._bookmarkOptionValueChangeService.bookmarkOptionValueChanged$.subscribe(function (optionValue) { return _this.onFormValueChanged(optionValue); });
                };
                DisplayComponent = __decorate([
                    core_1.Component({
                        selector: 'bm-display',
                        template: "\n        <div class=\"top-buffer-std buttom-buffer-std\">{{dbString}}</div>\n"
                    }), 
                    __metadata('design:paramtypes', [db_location_service_1.DbLocationService, bookmark_option_value_change_service_1.BookmarkOptionValueChangeService])
                ], DisplayComponent);
                return DisplayComponent;
            })();
            exports_1("DisplayComponent", DisplayComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/display/display.component.js.map