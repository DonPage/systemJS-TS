System.register("actions", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function adding() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        var result = 0;
        return new Promise(function (resolve) {
            numbers.forEach(function (number) { return result += number; });
            resolve(result);
        });
        // addNums.then((res => {
        //   console.log('res ', res)
        // }));
    }
    exports_1("adding", adding);
    return {
        setters:[],
        execute: function() {
        }
    }
});
var System;
System.import('actions').then(function (actions) {
    console.log("actions imported.");
    var someMath = actions.adding(1, 2, 3)
        .then(function (res) { return console.log('res ', res); });
});
//# sourceMappingURL=out.js.map