define("hello", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.sayHello = void 0;
    function sayHello() {
        alert('Hello, world!');
    }
    exports.sayHello = sayHello;
});
define("index", ["require", "exports", "hello"], function (require, exports, hello_1) {
    "use strict";
    exports.__esModule = true;
    hello_1.sayHello();
});
