System.register(['angular2/core', './bookmark-option-data.service', '../dynamicForm/bookmark-option-control.service', './bookmark-option.component', './bookmark-option-value-change.service', '../display/display.Component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_option_data_service_1, bookmark_option_control_service_1, bookmark_option_component_1, bookmark_option_value_change_service_1, display_Component_1;
    var BookmarkOptionListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_option_data_service_1_1) {
                bookmark_option_data_service_1 = bookmark_option_data_service_1_1;
            },
            function (bookmark_option_control_service_1_1) {
                bookmark_option_control_service_1 = bookmark_option_control_service_1_1;
            },
            function (bookmark_option_component_1_1) {
                bookmark_option_component_1 = bookmark_option_component_1_1;
            },
            function (bookmark_option_value_change_service_1_1) {
                bookmark_option_value_change_service_1 = bookmark_option_value_change_service_1_1;
            },
            function (display_Component_1_1) {
                display_Component_1 = display_Component_1_1;
            }],
        execute: function() {
            BookmarkOptionListComponent = (function () {
                function BookmarkOptionListComponent(_bookmarkOptionDataService, _bookmarkOptionControlService, _bookmarkOptionValueChangeService) {
                    this._bookmarkOptionDataService = _bookmarkOptionDataService;
                    this._bookmarkOptionControlService = _bookmarkOptionControlService;
                    this._bookmarkOptionValueChangeService = _bookmarkOptionValueChangeService;
                }
                BookmarkOptionListComponent.prototype.onSubmit = function (value) {
                    console.log(JSON.stringify(value));
                };
                BookmarkOptionListComponent.prototype.onFormValueChanged = function (value) {
                    var formValues = JSON.parse(JSON.stringify(value));
                    var bookmarkValue = {
                        bookmarkCode: this.bookmarkCode,
                        formValues: formValues
                    };
                    this._bookmarkOptionValueChangeService.bookmarkOptionValueChangeBroadcast(bookmarkValue);
                };
                BookmarkOptionListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get list of bookmarkOptions
                    this.bookmarkOptions = this._bookmarkOptionDataService.getBookmarkOptions(this.bookmarkCode);
                    // get the control group based on the list of bookmark options
                    this.form = this._bookmarkOptionControlService.toControlGroup(this.bookmarkOptions);
                    // delay 1 second before calling the form's on change handler
                    this.form.valueChanges.debounceTime(1000).subscribe(function (form) { return _this.onFormValueChanged(form); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], BookmarkOptionListComponent.prototype, "bookmarkCode", void 0);
                BookmarkOptionListComponent = __decorate([
                    core_1.Component({
                        selector: 'bm-form',
                        templateUrl: 'app/bookmark/bookmark-option-list.component.html',
                        directives: [bookmark_option_component_1.BookmarkOptionComponent, display_Component_1.DisplayComponent]
                    }), 
                    __metadata('design:paramtypes', [bookmark_option_data_service_1.BookmarkOptionDataService, bookmark_option_control_service_1.BookmarkOptionControlService, bookmark_option_value_change_service_1.BookmarkOptionValueChangeService])
                ], BookmarkOptionListComponent);
                return BookmarkOptionListComponent;
            })();
            exports_1("BookmarkOptionListComponent", BookmarkOptionListComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/bookmark/bookmark-option-list.component.js.map