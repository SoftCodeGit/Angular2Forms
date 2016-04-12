System.register(['angular2/core', './bookmark-option-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_option_list_component_1;
    var BookmarkListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_option_list_component_1_1) {
                bookmark_option_list_component_1 = bookmark_option_list_component_1_1;
            }],
        execute: function() {
            BookmarkListComponent = (function () {
                function BookmarkListComponent() {
                }
                BookmarkListComponent.prototype.ngOnInit = function () {
                    this.bookmarkCode = 'ActionFeeAmount';
                };
                BookmarkListComponent = __decorate([
                    core_1.Component({
                        selector: '<bm-bmlist></bm-bmlist>',
                        templateUrl: 'app/bookmark/bookmark-list.component.html',
                        directives: [bookmark_option_list_component_1.BookmarkOptionListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookmarkListComponent);
                return BookmarkListComponent;
            })();
            exports_1("BookmarkListComponent", BookmarkListComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/bookmark/bookmark-list.component.js.map