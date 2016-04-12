System.register(['angular2/core', 'angular2/common', '../dynamicForm/bookmark-option-base'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, bookmark_option_base_1;
    var BookmarkOptionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (bookmark_option_base_1_1) {
                bookmark_option_base_1 = bookmark_option_base_1_1;
            }],
        execute: function() {
            BookmarkOptionComponent = (function () {
                function BookmarkOptionComponent() {
                }
                Object.defineProperty(BookmarkOptionComponent.prototype, "isMissing", {
                    // method to check if control has 'required' error
                    get: function () {
                        var control = this.form.controls[this.bookmarkOption.key];
                        return !control.pristine && control.hasError('required');
                    },
                    enumerable: true,
                    configurable: true
                });
                // method to reset value of control
                BookmarkOptionComponent.prototype.resetValue = function () {
                    // note the cast to type Control which has the method updateValue
                    // the base is AbstractControl which has no such method
                    var control = this.form.controls[this.bookmarkOption.key];
                    if (control.value)
                        control.updateValue(null, { onlySelf: false, emitEvent: true });
                };
                Object.defineProperty(BookmarkOptionComponent.prototype, "showReset", {
                    // method to show/hide reset botton
                    get: function () {
                        var control = this.form.controls[this.bookmarkOption.key];
                        return control.value ? true : false;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', bookmark_option_base_1.BookmarkOptionBase)
                ], BookmarkOptionComponent.prototype, "bookmarkOption", void 0);
                __decorate([
                    // the object containing the meta data of the control
                    core_1.Input(), 
                    __metadata('design:type', common_1.ControlGroup)
                ], BookmarkOptionComponent.prototype, "form", void 0);
                BookmarkOptionComponent = __decorate([
                    core_1.Component({
                        selector: '<bm-option></bm-option>',
                        templateUrl: 'app/bookmark/bookmark-option.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookmarkOptionComponent);
                return BookmarkOptionComponent;
            })();
            exports_1("BookmarkOptionComponent", BookmarkOptionComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/bookmark/bookmark-option.component.js.map