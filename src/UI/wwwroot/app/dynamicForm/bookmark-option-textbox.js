System.register(['../dynamicForm/bookmark-option-base'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var bookmark_option_base_1;
    var TextboxBookmarkOption;
    return {
        setters:[
            function (bookmark_option_base_1_1) {
                bookmark_option_base_1 = bookmark_option_base_1_1;
            }],
        execute: function() {
            TextboxBookmarkOption = (function (_super) {
                __extends(TextboxBookmarkOption, _super);
                function TextboxBookmarkOption(options) {
                    if (options === void 0) { options = {}; }
                    _super.call(this, options);
                    this.controlType = 'textbox';
                    this.type = options['type'];
                }
                return TextboxBookmarkOption;
            })(bookmark_option_base_1.BookmarkOptionBase);
            exports_1("TextboxBookmarkOption", TextboxBookmarkOption);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/dynamicForm/bookmark-option-textbox.js.map