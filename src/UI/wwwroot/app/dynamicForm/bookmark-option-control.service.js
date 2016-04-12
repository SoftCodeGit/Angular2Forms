System.register(['angular2/common', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1;
    var BookmarkOptionControlService;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BookmarkOptionControlService = (function () {
                function BookmarkOptionControlService(_formBuilder) {
                    this._formBuilder = _formBuilder;
                }
                BookmarkOptionControlService.prototype.toControlGroup = function (bookmarkOptions) {
                    var group = {};
                    bookmarkOptions.forEach(function (bookmarkOption) {
                        // builds a property based on the key passed in
                        // e.g., email: ['', Validators.required], where email is the key(id on the form) of the widget
                        group[bookmarkOption.key] = bookmarkOption.required ? [bookmarkOption.value || '', common_1.Validators.required] : [];
                    });
                    // builds the control group
                    // controls are grouped so we can check, for example, the validity of the form easily
                    // we can also get the values of the entire form easily as a group
                    return this._formBuilder.group(group);
                };
                BookmarkOptionControlService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], BookmarkOptionControlService);
                return BookmarkOptionControlService;
            })();
            exports_1("BookmarkOptionControlService", BookmarkOptionControlService);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/dynamicForm/bookmark-option-control.service.js.map