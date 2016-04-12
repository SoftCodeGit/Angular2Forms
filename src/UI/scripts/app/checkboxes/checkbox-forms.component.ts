import { Component, OnInit  } from 'angular2/core';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Control,
    Validators
} from 'angular2/common';

@Component({
    selector: 'checkbox-forms',
    templateUrl: 'app/checkboxes/checkbox-forms.component.html',
    directives: [FORM_DIRECTIVES]    
})
export class CheckboxFormsComponent implements OnInit {
    checkboxForm: ControlGroup;

    constructor(private _formBuilder: FormBuilder) {

    }

    private buildControlGroup() {
        this.checkboxForm = this._formBuilder.group({
            one: [false],
            two: [true]
        });
    }

    onSubmitClicked(value: string): void {
        console.log(JSON.stringify(value));
        console.log(JSON.parse(JSON.stringify(value)));
    }

    ngOnInit(): void {
        this.buildControlGroup();
    }
}

