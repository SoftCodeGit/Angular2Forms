System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var CheckboxFormsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CheckboxFormsComponent = (function () {
                function CheckboxFormsComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                }
                CheckboxFormsComponent.prototype.buildControlGroup = function () {
                    this.checkboxForm = this._formBuilder.group({
                        one: [false],
                        two: [true]
                    });
                };
                CheckboxFormsComponent.prototype.onSubmitClicked = function (value) {
                    console.log(JSON.stringify(value));
                    console.log(JSON.parse(JSON.stringify(value)));
                };
                CheckboxFormsComponent.prototype.ngOnInit = function () {
                    this.buildControlGroup();
                };
                CheckboxFormsComponent = __decorate([
                    core_1.Component({
                        selector: 'checkbox-forms',
                        templateUrl: 'app/checkboxes/checkbox-forms.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], CheckboxFormsComponent);
                return CheckboxFormsComponent;
            })();
            exports_1("CheckboxFormsComponent", CheckboxFormsComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/checkboxes/checkbox-forms.component.js.map