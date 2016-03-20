System.register("actions", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function adding() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        var result = 0;
        var addNums = new Promise.resolve(numbers.forEach(function (number) { result += number; }));
    }
    exports_1("adding", adding);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=out.js.map