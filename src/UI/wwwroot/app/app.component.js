System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './shared/db-location.service', './dbLocation/db-location-model.component', './dbLocation/db-location-forms.component', './display/display.component', './bookmark/bookmark-list.component', './bookmark/bookmark-option-data.service', './dynamicForm/bookmark-option-control.service', './checkboxes/checkbox-forms.component', './bookmark/bookmark-option-value-change.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, db_location_service_1, db_location_model_component_1, db_location_forms_component_1, display_component_1, bookmark_list_component_1, bookmark_option_data_service_1, bookmark_option_control_service_1, checkbox_forms_component_1, bookmark_option_value_change_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (db_location_service_1_1) {
                db_location_service_1 = db_location_service_1_1;
            },
            function (db_location_model_component_1_1) {
                db_location_model_component_1 = db_location_model_component_1_1;
            },
            function (db_location_forms_component_1_1) {
                db_location_forms_component_1 = db_location_forms_component_1_1;
            },
            function (display_component_1_1) {
                display_component_1 = display_component_1_1;
            },
            function (bookmark_list_component_1_1) {
                bookmark_list_component_1 = bookmark_list_component_1_1;
            },
            function (bookmark_option_data_service_1_1) {
                bookmark_option_data_service_1 = bookmark_option_data_service_1_1;
            },
            function (bookmark_option_control_service_1_1) {
                bookmark_option_control_service_1 = bookmark_option_control_service_1_1;
            },
            function (checkbox_forms_component_1_1) {
                checkbox_forms_component_1 = checkbox_forms_component_1_1;
            },
            function (bookmark_option_value_change_service_1_1) {
                bookmark_option_value_change_service_1 = bookmark_option_value_change_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dbLocationService) {
                    var _this = this;
                    this._dbLocationService = _dbLocationService;
                    this.pageTitle = 'Bookmark Generator';
                    this.tabItems = [
                        { caption: 'Model', link: ['Model'] },
                        { caption: 'Forms', link: ['Forms'] },
                        { caption: 'Dynamic Demo', link: ['Dynamic'] },
                        { caption: 'Checkbox Demo', link: ['Checkboxes'] }
                    ];
                    this._dbLocationService.dbLocationChanged$.subscribe(function (dbLocation) { return _this.onDbLocationChanged(dbLocation); });
                }
                AppComponent.prototype.onDbLocationChanged = function (dbLocation) {
                    console.log("From app.Component: " + JSON.stringify(dbLocation));
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'bm-app',
                        templateUrl: 'app/app.component.html',
                        directives: [db_location_model_component_1.DbLocationModelComponent, display_component_1.DisplayComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [db_location_service_1.DbLocationService, http_1.HTTP_PROVIDERS, bookmark_option_data_service_1.BookmarkOptionDataService, bookmark_option_control_service_1.BookmarkOptionControlService, bookmark_option_value_change_service_1.BookmarkOptionValueChangeService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Model', component: db_location_model_component_1.DbLocationModelComponent, useAsDefault: true },
                        { path: '/forms', name: 'Forms', component: db_location_forms_component_1.DbLocationFormsComponent },
                        { path: '/dynamic', name: 'Dynamic', component: bookmark_list_component_1.BookmarkListComponent },
                        { path: '/checkboxes', name: 'Checkboxes', component: checkbox_forms_component_1.CheckboxFormsComponent }
                    ]), 
                    __metadata('design:paramtypes', [db_location_service_1.DbLocationService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/app.component.js.map