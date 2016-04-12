System.register([], function(exports_1) {
    var BookmarkOptionBase;
    return {
        setters:[],
        execute: function() {
            BookmarkOptionBase = (function () {
                function BookmarkOptionBase(options) {
                    if (options === void 0) { options = {}; }
                    this.value = options.value;
                    this.key = options.key || '';
                    this.label = options.label || '';
                    this.required = !!options.required;
                    this.order = options.order === undefined ? 1 : options.order;
                    this.controlType = options.controlType || '';
                }
                return BookmarkOptionBase;
            })();
            exports_1("BookmarkOptionBase", BookmarkOptionBase);
        }
    }
});
//# sourceMappingURL=C:/Users/arthur.lee/Documents/Visual Studio 2015/Projects/Angular2Forms/src/UI/wwwroot/app/dynamicForm/bookmark-option-base.js.map