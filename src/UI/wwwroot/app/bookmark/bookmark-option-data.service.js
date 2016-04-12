System.register(['angular2/core', '../dynamicForm/bookmark-option-dropdown', '../dynamicForm/bookmark-option-textbox', '../dynamicForm/bookmark-option-checkbox'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_option_dropdown_1, bookmark_option_textbox_1, bookmark_option_checkbox_1;
    var BookmarkOptionDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_option_dropdown_1_1) {
                bookmark_option_dropdown_1 = bookmark_option_dropdown_1_1;
            },
            function (bookmark_option_textbox_1_1) {
                bookmark_option_textbox_1 = bookmark_option_textbox_1_1;
            },
            function (bookmark_option_checkbox_1_1) {
                bookmark_option_checkbox_1 = bookmark_option_checkbox_1_1;
            }],
        execute: function() {
            BookmarkOptionDataService = (function () {
                function BookmarkOptionDataService() {
                }
                // Todo: get it from api, and make it asynch    
                BookmarkOptionDataService.prototype.getBookmarkOptions = function (bookMarkCode) {
                    var bookmarkOptions = [
                        new bookmark_option_dropdown_1.DropdownBookmarkOption({
                            key: 'TYPE',
                            label: 'TYPE',
                            dropdownOptions: [
                                { key: 'TOTAL', value: 'TOTAL' },
                                { key: 'BILLINGBALANCE', value: 'BILLINGBALANCE' },
                                { key: 'DEBTORBALANCE', value: 'DEBTORBALANCE' },
                                { key: 'BILLINGRECEIPTS', value: 'BILLINGRECEIPTS' },
                                { key: 'DEBTORRECEIPTS', value: 'DEBTORRECEIPTS' },
                                { key: 'BILLINGTOTAL', value: 'BILLINGTOTAL' },
                                { key: 'BILLINGTOTALPLUSADJ', value: 'BILLINGTOTALPLUSADJ' },
                                { key: 'DEBTORTOTAL', value: 'DEBTORTOTAL' },
                                { key: 'DEBTORTOTALPLUSADJ', value: 'DEBTORTOTALPLUSADJ' }
                            ],
                            order: 3
                        }),
                        new bookmark_option_dropdown_1.DropdownBookmarkOption({
                            key: 'OUTPUT',
                            label: 'OUTPUT',
                            dropdownOptions: [
                                { key: 'TOTAL', value: 'TOTAL' },
                                { key: 'TEXTCR', value: 'TEXTCR' },
                                { key: 'TEXT', value: 'TEXT' },
                                { key: 'TABLE', value: 'TABLE' },
                                { key: 'TABLENOTOTAL', value: 'TABLENOTOTAL' }
                            ],
                            order: 6
                        }),
                        new bookmark_option_textbox_1.TextboxBookmarkOption({
                            key: 'FEE',
                            label: 'FEE',
                            order: 7,
                            required: false
                        }),
                        new bookmark_option_checkbox_1.CheckboxBookmarkOption({
                            key: 'STATISTICAL',
                            label: 'STATISTICAL',
                            order: 2
                        }),
                        new bookmark_option_checkbox_1.CheckboxBookmarkOption({
                            key: 'SHOWTOTAL',
                            label: 'SHOWTOTAL',
                            order: 4
                        }),
                        new bookmark_option_checkbox_1.CheckboxBookmarkOption({
                            key: 'JUDGMENTFEE',
                            label: 'JUDGMENTFEE',
                            order: 5
                        }),
                        new bookmark_option_dropdown_1.DropdownBookmarkOption({
                            key: 'IB',
                            label: 'IB',
                            dropdownOptions: [
                                { key: 'P', value: 'P' },
                                { key: 'I', value: 'I' }
                            ],
                            order: 1
                        }),
                    ];
                    return bookmarkOptions.sort(function (a, b) { return a.order - b.order; });
                };
                BookmarkOptionDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BookmarkOptionDataService);
                return BookmarkOptionDataService;
            })();
            exports_1("BookmarkOptionDataService", BookmarkOptionDataService);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/bookmark/bookmark-option-data.service.js.map