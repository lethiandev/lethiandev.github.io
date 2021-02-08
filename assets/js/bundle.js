var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define("hello", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sayHello = void 0;
    function sayHello() {
        alert('Hello, world!');
    }
    exports.sayHello = sayHello;
});
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = exports.forEachNode = exports.forEachElement = void 0;
    function forEachElement(elements, fn) {
        for (var i = 0, len = elements.length; i < len; i++) {
            var element = elements.item(i);
            if (element != null) {
                fn.call(null, element);
            }
        }
    }
    exports.forEachElement = forEachElement;
    function forEachNode(nodes, fn) {
        nodes.forEach(function (value) { return value && fn.call(null, value); });
    }
    exports.forEachNode = forEachNode;
    function delay(ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    }
    exports.delay = delay;
});
define("parallax", ["require", "exports", "utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createParallax = void 0;
    function createParallax(target) {
        var layers = target.children;
        window.addEventListener('scroll', function (ev) {
            utils_1.forEachElement(layers, updateLayer);
        }, { passive: true });
    }
    exports.createParallax = createParallax;
    function updateLayer(layer) {
        var scale = Number(layer.dataset['scrollScale']);
        var travel = window.scrollY / scale;
        layer.style.transform = "translateY(-" + travel + "px)";
    }
});
define("terminal", ["require", "exports", "utils"], function (require, exports, utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTerminal = void 0;
    function createTerminal(root) {
        return __awaiter(this, void 0, void 0, function () {
            var body, terminal, lines, link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = root.querySelector('.terminal-body');
                        if (!(body instanceof HTMLElement)) return [3 /*break*/, 2];
                        terminal = { root: root, body: body };
                        lines = fetchTerminalLines(terminal);
                        return [4 /*yield*/, executeTerminal(terminal, lines)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        link = root.querySelector('.terminal-continue');
                        if (link instanceof HTMLAnchorElement) {
                            link.addEventListener('click', function (ev) {
                                var href = link.getAttribute('href') || '';
                                var target = document.querySelector(href);
                                if (target instanceof HTMLElement) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                    ev.preventDefault();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.createTerminal = createTerminal;
    function executeTerminal(terminal, lines) {
        return __awaiter(this, void 0, void 0, function () {
            var root, line;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        root = terminal.root;
                        root.classList.add('terminal--animating');
                        _a.label = 1;
                    case 1:
                        if (!(lines.length > 0)) return [3 /*break*/, 3];
                        line = lines.shift();
                        return [4 /*yield*/, executeTerminalLine(terminal, line)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [4 /*yield*/, utils_2.delay(600)];
                    case 4:
                        _a.sent();
                        root.classList.remove('terminal--animating');
                        return [2 /*return*/];
                }
            });
        });
    }
    function executeTerminalLine(terminal, line) {
        return __awaiter(this, void 0, void 0, function () {
            var root, body, delayTime, sequence, seq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        root = terminal.root, body = terminal.body;
                        body.append(line.element);
                        if (!line.element.dataset['delay']) return [3 /*break*/, 2];
                        delayTime = Number(line.element.dataset['delay']);
                        return [4 /*yield*/, utils_2.delay(delayTime)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        root.classList.add('terminal--typing');
                        sequence = line.value.split('');
                        _a.label = 3;
                    case 3:
                        if (!(sequence.length > 0)) return [3 /*break*/, 5];
                        seq = sequence.shift() || '';
                        line.element.textContent += seq;
                        return [4 /*yield*/, utils_2.delay(60)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 5: return [4 /*yield*/, utils_2.delay(200)];
                    case 6:
                        _a.sent();
                        root.classList.remove('terminal--typing');
                        return [2 /*return*/];
                }
            });
        });
    }
    function fetchTerminalLines(terminal) {
        return terminal.body ? parseTerminalBody(terminal.body) : [];
    }
    function parseTerminalBody(body) {
        return Array.from(body.children)
            .filter(function (el) { return el instanceof HTMLParagraphElement; })
            .map(function (el) { return transformTerminalElement(el); });
    }
    function transformTerminalElement(element) {
        var value = element.textContent || '';
        element.innerHTML = '';
        element.remove();
        return { element: element, value: value };
    }
});
define("index", ["require", "exports", "parallax", "terminal", "utils"], function (require, exports, parallax_1, terminal_1, utils_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    setupElements('terminal', terminal_1.createTerminal);
    setupElements('parallax', parallax_1.createParallax);
    function setupElements(className, callback) {
        var elements = document.getElementsByClassName(className);
        utils_3.forEachElement(elements, callback);
    }
});
//# sourceMappingURL=bundle.js.map