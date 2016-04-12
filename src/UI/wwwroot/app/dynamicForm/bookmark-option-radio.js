System.register(['../dynamicForm/bookmark-option-base'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var bookmark_option_base_1;
    var RadioBookmarkOption;
    return {
        setters:[
            function (bookmark_option_base_1_1) {
                bookmark_option_base_1 = bookmark_option_base_1_1;
            }],
        execute: function() {
            RadioBookmarkOption = (function (_super) {
                __extends(RadioBookmarkOption, _super);
                function RadioBookmarkOption(options) {
                    if (options === void 0) { options = {}; }
                    _super.call(this, options);
                    this.controlType = 'radio';
                    this.radioOptions = [];
                    this.radioOptions = options['radioOptions'] || [];
                }
                return RadioBookmarkOption;
            })(bookmark_option_base_1.BookmarkOptionBase);
            exports_1("RadioBookmarkOption", RadioBookmarkOption);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/dynamicForm/bookmark-option-radio.js.map