/// <reference path="../../../node_modules/angular2/src/common/forms/directives/radio_control_value_accessor.d.ts" />
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
    var RadioFormsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //import { RADIO_GROUP_DIRECTIVES } from 'ng2-radio-group/ng2-radio-group';
            RadioFormsComponent = (function () {
                function RadioFormsComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                }
                RadioFormsComponent.prototype.buildControlGroup = function () {
                    var contrl1 = new common_1.Control(new common_1.RadioButtonState(true, 'dis'), common_1.Validators.nullValidator);
                    var contrl2 = new common_1.Control(new common_1.RadioButtonState(false, 'dat'), common_1.Validators.nullValidator);
                    this.radioForm = new common_1.ControlGroup({
                        disOrDat: new common_1.ControlGroup({
                            dis: contrl1,
                            dat: contrl2
                        })
                    });
                };
                RadioFormsComponent.prototype.disOrDatValidator = function (group) {
                    if (group.controls['dis'].value !== group.controls['dat'].value) {
                        return false;
                    } // return null means validation passed 
                    return null;
                };
                RadioFormsComponent.prototype.onSubmitClicked = function (value) {
                    console.log(JSON.parse(JSON.stringify(value)));
                    //console.log(this.radioForm.controls['disOrDat'].value);
                };
                RadioFormsComponent.prototype.ngOnInit = function () {
                    this.buildControlGroup();
                };
                RadioFormsComponent = __decorate([
                    core_1.Component({
                        selector: 'radio-forms',
                        templateUrl: 'app/radios/radio-forms.component.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], RadioFormsComponent);
                return RadioFormsComponent;
            })();
            exports_1("RadioFormsComponent", RadioFormsComponent);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/radios/radio-forms.component.js.map