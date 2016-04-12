/// <reference path="../../../node_modules/angular2/src/common/forms/directives/radio_control_value_accessor.d.ts" />


import { Component, OnInit  } from 'angular2/core';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Control,
    Validators,
    RadioButtonState
} from 'angular2/common';
//import { RADIO_GROUP_DIRECTIVES } from 'ng2-radio-group/ng2-radio-group';


@Component({
    selector: 'radio-forms',
    templateUrl: 'app/radios/radio-forms.component.html',
    directives: [FORM_DIRECTIVES]
})
export class RadioFormsComponent implements OnInit {
    radioForm: ControlGroup;

    constructor(private _formBuilder: FormBuilder) {
        
    }
       
    private buildControlGroup(): void {     
        let contrl1 = new Control(new RadioButtonState(true, 'dis'), Validators.nullValidator);
        let contrl2 = new Control(new RadioButtonState(false, 'dat'), Validators.nullValidator);
        
        this.radioForm = new ControlGroup({
            disOrDat: new ControlGroup({
                dis: contrl1,
                dat: contrl2
            })
        })
        
    }

    disOrDatValidator(group: ControlGroup) {
        
        if (group.controls['dis'].value !== group.controls['dat'].value) {
            return false;
        } // return null means validation passed 
        return null;
    } 

    onSubmitClicked(value: string): void {
        console.log(JSON.parse(JSON.stringify(value)));
        //console.log(this.radioForm.controls['disOrDat'].value);
    }

    ngOnInit(): void {
        this.buildControlGroup();
    }
}

