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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
define("terminal", ["require", "exports", "utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTerminal = void 0;
    function createTerminal(el) {
        return __awaiter(this, void 0, void 0, function () {
            var sections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sections = buildTerminalSections(el.children);
                        return [4 /*yield*/, executeTerminalSections(el, sections)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.createTerminal = createTerminal;
    function executeTerminalSections(el, sections) {
        return __awaiter(this, void 0, void 0, function () {
            var spanElement, section;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        el.innerHTML = '';
                        spanElement = null;
                        _a.label = 1;
                    case 1:
                        if (!(sections.length > 0)) return [3 /*break*/, 8];
                        section = sections.shift();
                        if (!(typeof section === 'undefined')) return [3 /*break*/, 2];
                        return [3 /*break*/, 1];
                    case 2:
                        if (!(typeof section === 'number')) return [3 /*break*/, 4];
                        el.classList.remove('typing');
                        return [4 /*yield*/, utils_1.delay(section)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(section === '\n')) return [3 /*break*/, 5];
                        if (spanElement) {
                            el.append(document.createElement('br'));
                        }
                        spanElement = document.createElement('span');
                        el.classList.remove('typing');
                        el.append(spanElement);
                        return [3 /*break*/, 7];
                    case 5:
                        if (!spanElement) return [3 /*break*/, 7];
                        spanElement.textContent += section;
                        el.classList.add('typing');
                        return [4 /*yield*/, utils_1.delay(80)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 1];
                    case 8:
                        el.classList.remove('typing');
                        return [2 /*return*/];
                }
            });
        });
    }
    function buildTerminalSections(elements) {
        var transform = function (acc, el) { return __spreadArrays(acc, prepareSection(el)); };
        return Array.from(elements).reduce(transform, []);
    }
    function prepareSection(element) {
        if (element instanceof HTMLSpanElement) {
            return prepareComplexSection(element);
        }
        return [];
    }
    function prepareComplexSection(element) {
        var text = (element.textContent || '').trim().split('');
        var sections = __spreadArrays(['\n'], text);
        if (element.dataset['delay']) {
            var delay_1 = Number(element.dataset['delay']);
            sections.splice(1, 0, delay_1);
        }
        return sections;
    }
});
define("index", ["require", "exports", "terminal", "utils"], function (require, exports, terminal_1, utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var terminalElements = document.getElementsByClassName('terminal');
    utils_2.forEachElement(terminalElements, startTerminal);
    function startTerminal(el) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, terminal_1.createTerminal(el)];
                    case 1:
                        _a.sent();
                        console.log("Terminal done!");
                        return [2 /*return*/];
                }
            });
        });
    }
});
//# sourceMappingURL=bundle.js.map