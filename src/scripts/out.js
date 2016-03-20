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
    }
    exports_1("adding", adding);
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("app", ["actions"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var actions_1;
    return {
        setters:[
            function (actions_1_1) {
                actions_1 = actions_1_1;
            }],
        execute: function() {
            actions_1.adding(1, 2, 3, 4, 5).then(function (res) {
                var h1El = document.querySelector('.magicNumber');
                h1El.innerHTML = res;
            });
        }
    }
});
//# sourceMappingURL=out.js.map