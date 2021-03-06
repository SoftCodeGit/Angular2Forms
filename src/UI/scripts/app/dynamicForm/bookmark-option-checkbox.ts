﻿import { BookmarkOptionBase } from '../dynamicForm/bookmark-option-base';

export class CheckboxBookmarkOption extends BookmarkOptionBase<string> {
    controlType = 'checkbox';

    constructor(options: {} = {}) {
        super(options);
    }
}