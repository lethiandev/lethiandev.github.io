define("hello", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.sayHello = void 0;
    function sayHello() {
        alert('Hello, world!');
    }
    exports.sayHello = sayHello;
});
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    window.addEventListener('popstate', function (ev) {
        console.log('onpopstate', document.location, JSON.stringify(ev.state));
        ev.preventDefault();
    });
    var hrefs = document.getElementsByTagName('a');
    var _loop_1 = function (i) {
        var href = hrefs.item(i);
        href.addEventListener('click', function (ev) {
            console.log('push state', href.href);
            history.pushState({}, 'Project', href.href);
            ev.preventDefault();
        });
    };
    for (var i = 0; i < hrefs.length; i++) {
        _loop_1(i);
    }
});
