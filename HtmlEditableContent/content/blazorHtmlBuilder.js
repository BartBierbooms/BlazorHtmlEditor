/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./interop/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./interop/src/index.ts":
/*!******************************!*\
  !*** ./interop/src/index.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markuptextarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markuptextarea */ "./interop/src/markuptextarea.ts");

_markuptextarea__WEBPACK_IMPORTED_MODULE_0__["MarkUpTextArea"].Load();


/***/ }),

/***/ "./interop/src/markupelement.ts":
/*!**************************************!*\
  !*** ./interop/src/markupelement.ts ***!
  \**************************************/
/*! exports provided: MarkUpElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUpElement", function() { return MarkUpElement; });
/* harmony import */ var _markupelementrange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markupelementrange */ "./interop/src/markupelementrange.ts");
/* harmony import */ var _markuprange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markuprange */ "./interop/src/markuprange.ts");
/* harmony import */ var _markupelementchange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markupelementchange */ "./interop/src/markupelementchange.ts");
/* harmony import */ var _markupvalue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markupvalue */ "./interop/src/markupvalue.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var MarkUpElement = /** @class */ (function () {
    function MarkUpElement() {
        this.unkownPos = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](-1, -1, "");
        this.elementRange = new _markupelementrange__WEBPACK_IMPORTED_MODULE_0__["MarkUpElementRange"];
        this.activeSelection = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](-1, -1, "");
    }
    MarkUpElement.prototype.getElement = function (id) {
        return document.getElementById(id);
    };
    MarkUpElement.prototype.GetPosition = function (id) {
        var pos = this.elementRange.getCaretPosition(this.getElement(id));
        if (pos) {
            return new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](pos[0], pos[1], id);
        }
        return this.unkownPos;
    };
    MarkUpElement.prototype.SetContent = function (id, html, startPos, endPos) {
        return __awaiter(this, void 0, void 0, function () {
            var elem, editableElem, range;
            return __generator(this, function (_a) {
                elem = document.getElementById(id);
                editableElem = this.editableDivNode(elem);
                if (editableElem) {
                    this.DetachMutationListener();
                    if (this.observer) {
                        this.observer.disconnect();
                    }
                    elem.innerHTML = html;
                    elem.focus();
                    range = this.elementRange.createRange(editableElem, startPos, endPos);
                    this.setSelection(range);
                    this.AttachMutationListener(id);
                }
                return [2 /*return*/];
            });
        });
    };
    MarkUpElement.prototype.InsertNewLine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var elem, editableElem, tag, inTheMiddle, rangeNode, activeNode, newTag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elem = document.getElementById(id);
                        editableElem = this.editableDivNode(elem);
                        tag = 'div';
                        if (!editableElem) return [3 /*break*/, 2];
                        rangeNode = this.elementRange.createCursorRange(editableElem, this.activeSelection.positionStart);
                        if (!rangeNode) return [3 /*break*/, 2];
                        activeNode = rangeNode[1];
                        inTheMiddle = true;
                        if (rangeNode[0].startOffset === activeNode.textContent.length) {
                            inTheMiddle = false;
                        }
                        else if (rangeNode[0].startOffset === activeNode.textContent.length - 1 && activeNode.textContent.substring(activeNode.textContent.length - 1) === "\u200B") {
                            inTheMiddle = false;
                        }
                        newTag = document.createElement(tag);
                        newTag.innerHTML = "\u200B";
                        if (!inTheMiddle) {
                            activeNode.parentElement.insertAdjacentElement('afterend', newTag);
                        }
                        else {
                            rangeNode[0].insertNode(newTag);
                        }
                        rangeNode[0].collapse(true);
                        rangeNode[0].setStart(newTag, 1);
                        rangeNode[0].setEnd(newTag, 1);
                        this.setSelection(rangeNode[0]);
                        elem.focus();
                        return [4 /*yield*/, this.elemContentChanged(id, elem)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MarkUpElement.prototype.editableDivNode = function (elem) {
        if (elem) {
            if (elem.isContentEditable) {
                return elem;
            }
            for (var i = 0; i < elem.childNodes.length; i++) {
                var node = elem.childNodes[i];
                var divNode = node;
                if (divNode) {
                    if (divNode.isContentEditable) {
                        return divNode;
                    }
                }
            }
        }
    };
    MarkUpElement.prototype.GetMarkUp = function (id) {
        var markUpValue = new _markupvalue__WEBPACK_IMPORTED_MODULE_3__["MarkUpValue"]();
        var elem = this.getElement(id);
        if (elem) {
            //console.log('GetMarkUp start/end: ' + this.activeSelection.positionStart + '/' + this.activeSelection.positionEnd);
            //console.log('elem.innerHTML' + elem.innerHTML);
            if (this.activeSelection.positionStart > -1) {
                markUpValue.Init(id, elem.textContent, elem.innerHTML, this.activeSelection);
            }
            else {
                markUpValue.Init(id, elem.textContent, elem.innerHTML, this.unkownPos);
            }
        }
        return markUpValue;
    };
    MarkUpElement.prototype.SetPosition = function (id, position) {
        var elem = this.getElement(id);
        var editableElem = this.editableDivNode(elem);
        if (editableElem) {
            var range = this.elementRange.createRange(editableElem, position, position);
            if (range) {
                this.setSelection(range);
            }
        }
    };
    MarkUpElement.prototype.setSelection = function (range) {
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    };
    MarkUpElement.prototype.DetachMutationListener = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    MarkUpElement.prototype.AttachMutationListener = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var elem, config;
            var _this = this;
            return __generator(this, function (_a) {
                elem = this.getElement(id);
                if (elem) {
                    if (this.observer) {
                        this.observer.disconnect();
                    }
                    this.observer = new MutationObserver(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.elemContentChanged(id, elem)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    config = {
                        childList: true,
                        attributes: true,
                        characterData: true,
                        subtree: true,
                    };
                    this.observer.observe(elem, config);
                }
                return [2 /*return*/];
            });
        });
    };
    MarkUpElement.prototype.RemoveEventListener = function (id) {
        var elem = this.getElement(id);
        if (elem) {
            if (this.observer) {
                console.log("RemoveEventListener: this.observer.disconnect ");
                this.observer.disconnect();
            }
            elem.removeEventListener('keyup', function () { });
            elem.removeEventListener('keydown', function () { });
            elem.removeEventListener('mouseup', function () { });
        }
    };
    MarkUpElement.prototype.elemContentChanged = function (id, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var posOnChange, changed;
            return __generator(this, function (_a) {
                posOnChange = this.elementRange.getCaretPosition(elem);
                if (posOnChange && posOnChange.length === 2) {
                    changed = new _markupelementchange__WEBPACK_IMPORTED_MODULE_2__["MarkUpValueChange"]();
                    this.activeSelection = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](posOnChange[0], posOnChange[1], id);
                    changed.Init(id, elem.textContent, elem.innerHTML, this.activeSelection);
                }
                return [2 /*return*/];
            });
        });
    };
    MarkUpElement.prototype.selectionChanged = function (elem, id) {
        return __awaiter(this, void 0, void 0, function () {
            var posOnChange, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (elem.textContent.length === 0)
                            return [2 /*return*/];
                        posOnChange = this.elementRange.getCaretPosition(elem);
                        if (!(posOnChange.length === 2)) return [3 /*break*/, 4];
                        this.activeSelection = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](posOnChange[0], posOnChange[1], id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, DotNet.invokeMethodAsync('HtmlEditableContent', 'SelectionChanged', this.activeSelection)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log('there was an error');
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MarkUpElement.prototype.AddEventListener = function (id) {
        var _this = this;
        var elem = document.getElementById(id);
        if (elem) {
            elem.addEventListener('keyup', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.selectionChanged(elem, id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            elem.addEventListener('keydown', function (event) {
                if (event.key === "Enter") {
                    event.cancelBubble = true;
                    event.preventDefault();
                    {
                        _this.InsertNewLine(id);
                    }
                }
            });
            elem.addEventListener('mouseup', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.selectionChanged(elem, id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    return MarkUpElement;
}());



/***/ }),

/***/ "./interop/src/markupelementchange.ts":
/*!********************************************!*\
  !*** ./interop/src/markupelementchange.ts ***!
  \********************************************/
/*! exports provided: MarkUpValueChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUpValueChange", function() { return MarkUpValueChange; });
var MarkUpValueChange = /** @class */ (function () {
    function MarkUpValueChange() {
    }
    MarkUpValueChange.prototype.Init = function (id, changed, html, changeRange) {
        this.id = id;
        this.changed = changed;
        this.changedHtml = html;
        this.changeRange = changeRange;
    };
    return MarkUpValueChange;
}());



/***/ }),

/***/ "./interop/src/markupelementrange.ts":
/*!*******************************************!*\
  !*** ./interop/src/markupelementrange.ts ***!
  \*******************************************/
/*! exports provided: MarkUpElementRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUpElementRange", function() { return MarkUpElementRange; });
var MarkUpElementRange = /** @class */ (function () {
    function MarkUpElementRange() {
    }
    MarkUpElementRange.prototype.nodewalk = function (node, func) {
        var result = func(node);
        for (node = node.firstChild; result !== false && node; node = node.nextSibling)
            result = this.nodewalk(node, func);
        return result;
    };
    MarkUpElementRange.prototype.createCursorRange = function (elem, nrOfChars) {
        var result = [elem, 0];
        this.nodewalk(elem, function (node) {
            if (nrOfChars === 0) {
                result = [node, 0];
                return false;
            }
            if (node.textContent && !node.firstChild && node.nodeType !== node.COMMENT_NODE && node.nodeType === node.TEXT_NODE) {
                if (node.textContent.length < nrOfChars) {
                    nrOfChars -= node.textContent.length;
                }
                else {
                    result = [node, nrOfChars];
                    return false;
                }
            }
            ;
            result = [node, nrOfChars];
        });
        var range = document.createRange();
        range.setStart(result[0], result[1]);
        return [range, result[0]];
    };
    MarkUpElementRange.prototype.createRange = function (elem, start, end) {
        var nodesToFind = [null, null];
        var selPoints = [0, 0];
        var nrOfChars = start;
        var nrOfCharsEnd = end;
        this.nodewalk(elem, function (node) {
            if (nodesToFind.every(function (v) { return v; })) {
                return false;
            }
            if (start <= 0) {
                nodesToFind[0] = node;
                selPoints[0] = 0;
            }
            else if (node.textContent && !node.firstChild && node.nodeType !== node.COMMENT_NODE && node.nodeType === node.TEXT_NODE) {
                var nodeLength = node.textContent.length;
                var nrToCompare = (nodesToFind[0] === null) ? nrOfChars : nrOfCharsEnd;
                if (nrToCompare > nodeLength) {
                    nrOfChars -= nodeLength;
                    nrOfCharsEnd -= nodeLength;
                }
                else {
                    if (nodesToFind[0] !== null) {
                        nodesToFind[1] = node;
                        selPoints[1] = nrOfCharsEnd;
                    }
                    else {
                        nodesToFind[0] = node;
                        selPoints[0] = nrOfChars;
                        if (nrOfCharsEnd <= nodeLength) {
                            nodesToFind[1] = node;
                            selPoints[1] = nrOfCharsEnd;
                        }
                        else {
                            nrOfCharsEnd -= nodeLength;
                        }
                    }
                }
            }
            ;
        });
        if (!nodesToFind[0]) {
            nodesToFind[0] = elem;
        }
        if (!nodesToFind[1]) {
            nodesToFind[1] = nodesToFind[0];
        }
        var range = document.createRange();
        range.setStart(nodesToFind[0], selPoints[0]);
        range.setEnd(nodesToFind[1], selPoints[1]);
        return range;
    };
    // getCaretPosition: return [start, end] as offsets to elem.textContent that
    //   correspond to the selected portion of text
    //   (if start === end, caret is at given position and no text is selected)
    MarkUpElementRange.prototype.getCaretPosition = function (elem) {
        var sel = window.getSelection();
        var cumLength = [0, 0];
        if (sel.anchorNode === elem) {
            cumLength = [sel.anchorOffset, sel.focusOffset];
        }
        else {
            var nodesToFind_1 = [sel.anchorNode, sel.focusNode];
            if (!elem.contains(sel.anchorNode) || !elem.contains(sel.focusNode))
                return undefined;
            else {
                var found_1 = [false, false];
                var i_1;
                this.nodewalk(elem, function (node) {
                    for (i_1 = 0; i_1 < 2; i_1++) {
                        if (node === nodesToFind_1[i_1]) {
                            found_1[i_1] = true;
                            if (found_1[i_1 === 0 ? 1 : 0])
                                return false; // all done
                        }
                    }
                    if (node.textContent && !node.firstChild && node.nodeType !== node.COMMENT_NODE) {
                        for (i_1 = 0; i_1 < 2; i_1++) {
                            if (!found_1[i_1]) {
                                cumLength[i_1] += node.textContent.length;
                            }
                        }
                    }
                });
                cumLength[0] += sel.anchorOffset;
                cumLength[1] += sel.focusOffset;
            }
        }
        if (cumLength[0] <= cumLength[1])
            return cumLength;
        return [cumLength[1], cumLength[0]];
    };
    return MarkUpElementRange;
}());



/***/ }),

/***/ "./interop/src/markuprange.ts":
/*!************************************!*\
  !*** ./interop/src/markuprange.ts ***!
  \************************************/
/*! exports provided: MarkUpRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUpRange", function() { return MarkUpRange; });
var MarkUpRange = /** @class */ (function () {
    function MarkUpRange(positionStart, positionEnd, id) {
        this.positionEnd = positionEnd;
        this.positionStart = positionStart;
        this.id = id;
    }
    MarkUpRange.prototype.IsSelection = function () {
        return this.positionEnd !== this.positionStart;
    };
    MarkUpRange.prototype.GetPosition = function (elem) {
        if (elem) {
            var textArea = elem;
            if (textArea) {
                return textArea.selectionStart;
            }
            var input = elem;
            if (input) {
                return input.selectionStart;
            }
            return -1;
        }
        else {
            return -1;
        }
    };
    MarkUpRange.prototype.SetPosition = function (elem, pos) {
        if (elem) {
            var textArea = elem;
            if (textArea) {
                textArea.selectionStart = pos;
                textArea.selectionEnd = pos;
                return;
            }
            var input = elem;
            if (input) {
                input.selectionStart = pos;
                input.selectionEnd = pos + 1;
            }
        }
    };
    return MarkUpRange;
}());



/***/ }),

/***/ "./interop/src/markuptextarea.ts":
/*!***************************************!*\
  !*** ./interop/src/markuptextarea.ts ***!
  \***************************************/
/*! exports provided: MarkUpTextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUpTextArea", function() { return MarkUpTextArea; });
/* harmony import */ var _markupelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markupelement */ "./interop/src/markupelement.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var MarkUpTextArea = /** @class */ (function () {
    function MarkUpTextArea() {
    }
    MarkUpTextArea.Load = function () {
        console.log('MarkUpTextArea function load');
        var Element = {
            MarkUpElement: new _markupelement__WEBPACK_IMPORTED_MODULE_0__["MarkUpElement"]()
        };
        if (window['blazorHtmlBuilder']) {
            window['blazorHtmlBuilder'] = __assign(__assign({}, window['blazorHtmlBuilder']), Element);
        }
        else {
            window['blazorHtmlBuilder'] = __assign({}, Element);
        }
    };
    return MarkUpTextArea;
}());



/***/ }),

/***/ "./interop/src/markupvalue.ts":
/*!************************************!*\
  !*** ./interop/src/markupvalue.ts ***!
  \************************************/
/*! exports provided: MarkUpValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUpValue", function() { return MarkUpValue; });
var MarkUpValue = /** @class */ (function () {
    function MarkUpValue() {
    }
    MarkUpValue.prototype.Init = function (id, content, html, range) {
        this.id = id;
        this.value = content;
        this.innerHtml = html;
        this.range = range;
    };
    return MarkUpValue;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXBlbGVtZW50Y2hhbmdlLnRzIiwid2VicGFjazovLy8uL2ludGVyb3Avc3JjL21hcmt1cGVsZW1lbnRyYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXByYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXB0ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXB2YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBa0Q7QUFDbEQs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RUFBRSxLQUFrQjtRQUM5RCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFLTCxrQkFBQztBQUFELENBQUMiLCJmaWxlIjoiYmxhem9ySHRtbEJ1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2ludGVyb3Avc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgTWFya1VwVGV4dEFyZWEgfSBmcm9tICcuL21hcmt1cHRleHRhcmVhJztcclxuTWFya1VwVGV4dEFyZWEuTG9hZCgpO1xyXG5cclxuIiwiaW1wb3J0IHsgTWFya1VwRWxlbWVudFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwZWxlbWVudHJhbmdlXCI7XHJcbmltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuaW1wb3J0IHsgTWFya1VwVmFsdWVDaGFuZ2UgfSBmcm9tIFwiLi9tYXJrdXBlbGVtZW50Y2hhbmdlXCI7XHJcbmltcG9ydCB7IE1hcmtVcFZhbHVlIH0gZnJvbSBcIi4vbWFya3VwdmFsdWVcIjtcclxuXHJcbmRlY2xhcmUgY29uc3QgRG90TmV0OiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya1VwRWxlbWVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVTZWxlY3Rpb246IE1hcmtVcFJhbmdlO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmFuZ2U6IE1hcmtVcEVsZW1lbnRSYW5nZTtcclxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIHVua293blBvczogTWFya1VwUmFuZ2UgPSBuZXcgTWFya1VwUmFuZ2UoLTEsIC0xLCBcIlwiKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSYW5nZSA9IG5ldyBNYXJrVXBFbGVtZW50UmFuZ2VcclxuICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbiA9IG5ldyBNYXJrVXBSYW5nZSgtMSwgLTEsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWxlbWVudChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFBvc2l0aW9uKGlkOiBzdHJpbmcpOiBNYXJrVXBSYW5nZSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5lbGVtZW50UmFuZ2UuZ2V0Q2FyZXRQb3NpdGlvbih0aGlzLmdldEVsZW1lbnQoaWQpKTtcclxuICAgICAgICBpZiAocG9zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFya1VwUmFuZ2UocG9zWzBdLCBwb3NbMV0sIGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5rb3duUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBTZXRDb250ZW50KGlkOiBzdHJpbmcsIGh0bWw6IHN0cmluZywgc3RhcnRQb3M6IG51bWJlciwgZW5kUG9zOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRWxlbSA9IHRoaXMuZWRpdGFibGVEaXZOb2RlKGVsZW0pO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUVsZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5EZXRhY2hNdXRhdGlvbkxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgICAgIGVsZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5jcmVhdGVSYW5nZShlZGl0YWJsZUVsZW0sIHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihyYW5nZSk7XHJcbiAgICAgICAgICAgIHRoaXMuQXR0YWNoTXV0YXRpb25MaXN0ZW5lcihpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgSW5zZXJ0TmV3TGluZShpZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVFbGVtID0gdGhpcy5lZGl0YWJsZURpdk5vZGUoZWxlbSk7XHJcbiAgICAgICAgY29uc3QgdGFnID0gJ2Rpdic7XHJcbiAgICAgICAgbGV0IGluVGhlTWlkZGxlOiBib29sZWFuO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUVsZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlTm9kZSA9IHRoaXMuZWxlbWVudFJhbmdlLmNyZWF0ZUN1cnNvclJhbmdlKGVkaXRhYmxlRWxlbSwgdGhpcy5hY3RpdmVTZWxlY3Rpb24ucG9zaXRpb25TdGFydCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmFuZ2VOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVOb2RlID0gcmFuZ2VOb2RlWzFdXHJcbiAgICAgICAgICAgICAgICBpblRoZU1pZGRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VOb2RlWzBdLnN0YXJ0T2Zmc2V0ID09PSBhY3RpdmVOb2RlLnRleHRDb250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluVGhlTWlkZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyYW5nZU5vZGVbMF0uc3RhcnRPZmZzZXQgPT09IGFjdGl2ZU5vZGUudGV4dENvbnRlbnQubGVuZ3RoIC0gMSAmJiBhY3RpdmVOb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhhY3RpdmVOb2RlLnRleHRDb250ZW50Lmxlbmd0aCAtIDEpID09PSBcIlxcdTIwMEJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGluVGhlTWlkZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgICAgICAgICBuZXdUYWcuaW5uZXJIVE1MID0gXCJcXHUyMDBCXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluVGhlTWlkZGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBuZXdUYWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlTm9kZVswXS5pbnNlcnROb2RlKG5ld1RhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uc2V0U3RhcnQobmV3VGFnLCAxKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlTm9kZVswXS5zZXRFbmQobmV3VGFnLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKHJhbmdlTm9kZVswXSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVsZW1Db250ZW50Q2hhbmdlZChpZCwgZWxlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlZGl0YWJsZURpdk5vZGUoZWxlbTogSFRNTEVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgaWYgKGVsZW0uaXNDb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gZWxlbS5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2Tm9kZSA9IG5vZGUgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGl2Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXZOb2RlLmlzQ29udGVudEVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXZOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0TWFya1VwKGlkOiBzdHJpbmcpOiBNYXJrVXBWYWx1ZSB7XHJcbiAgICAgICAgY29uc3QgbWFya1VwVmFsdWUgPSBuZXcgTWFya1VwVmFsdWUoKTtcclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5nZXRFbGVtZW50KGlkKTtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdHZXRNYXJrVXAgc3RhcnQvZW5kOiAnICsgdGhpcy5hY3RpdmVTZWxlY3Rpb24ucG9zaXRpb25TdGFydCArICcvJyArIHRoaXMuYWN0aXZlU2VsZWN0aW9uLnBvc2l0aW9uRW5kKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZWxlbS5pbm5lckhUTUwnICsgZWxlbS5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVTZWxlY3Rpb24ucG9zaXRpb25TdGFydCA+IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbWFya1VwVmFsdWUuSW5pdChpZCwgZWxlbS50ZXh0Q29udGVudCwgZWxlbS5pbm5lckhUTUwsIHRoaXMuYWN0aXZlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hcmtVcFZhbHVlLkluaXQoaWQsIGVsZW0udGV4dENvbnRlbnQsIGVsZW0uaW5uZXJIVE1MLCB0aGlzLnVua293blBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcmtVcFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRQb3NpdGlvbihpZDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVFbGVtID0gdGhpcy5lZGl0YWJsZURpdk5vZGUoZWxlbSk7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlRWxlbSkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmNyZWF0ZVJhbmdlKGVkaXRhYmxlRWxlbSwgcG9zaXRpb24sIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihyYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldFNlbGVjdGlvbihyYW5nZTogUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBEZXRhY2hNdXRhdGlvbkxpc3RlbmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgQXR0YWNoTXV0YXRpb25MaXN0ZW5lcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbGVtQ29udGVudENoYW5nZWQoaWQsIGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWxlbSwgY29uZmlnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVtb3ZlRXZlbnRMaXN0ZW5lcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlRXZlbnRMaXN0ZW5lcjogdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0IFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBlbGVtQ29udGVudENoYW5nZWQoaWQ6IHN0cmluZywgZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwb3NPbkNoYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmdldENhcmV0UG9zaXRpb24oZWxlbSk7XHJcbiAgICAgICAgaWYgKHBvc09uQ2hhbmdlICYmIHBvc09uQ2hhbmdlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkID0gbmV3IE1hcmtVcFZhbHVlQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uID0gbmV3IE1hcmtVcFJhbmdlKHBvc09uQ2hhbmdlWzBdLCBwb3NPbkNoYW5nZVsxXSwgaWQpO1xyXG4gICAgICAgICAgICBjaGFuZ2VkLkluaXQoaWQsIGVsZW0udGV4dENvbnRlbnQsIGVsZW0uaW5uZXJIVE1MLCB0aGlzLmFjdGl2ZVNlbGVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VsZWN0aW9uQ2hhbmdlZChlbGVtOiBIVE1MRWxlbWVudCwgaWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zT25DaGFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5nZXRDYXJldFBvc2l0aW9uKGVsZW0pO1xyXG4gICAgICAgIGlmIChwb3NPbkNoYW5nZS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb24gPSBuZXcgTWFya1VwUmFuZ2UocG9zT25DaGFuZ2VbMF0sIHBvc09uQ2hhbmdlWzFdLCBpZCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBEb3ROZXQuaW52b2tlTWV0aG9kQXN5bmMoJ0h0bWxFZGl0YWJsZUNvbnRlbnQnLCAnU2VsZWN0aW9uQ2hhbmdlZCcsIHRoaXMuYWN0aXZlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIHdhcyBhbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIHB1YmxpYyBBZGRFdmVudExpc3RlbmVyKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkKGVsZW0sIGlkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5zZXJ0TmV3TGluZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VsZWN0aW9uQ2hhbmdlZChlbGVtLCBpZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTWFya1VwUmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXByYW5nZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtVcFZhbHVlQ2hhbmdlIHtcclxuICAgIEluaXQoaWQ6IHN0cmluZywgY2hhbmdlZDogc3RyaW5nLCBodG1sOiBzdHJpbmcsIGNoYW5nZVJhbmdlOiBNYXJrVXBSYW5nZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBjaGFuZ2VkO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZEh0bWwgPSBodG1sO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUmFuZ2UgPSBjaGFuZ2VSYW5nZTtcclxuICAgIH1cclxuICAgIGNoYW5nZVJhbmdlOiBNYXJrVXBSYW5nZTtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjaGFuZ2VkOiBzdHJpbmc7XHJcbiAgICBjaGFuZ2VkSHRtbDogc3RyaW5nXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hcmtVcEVsZW1lbnRSYW5nZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIG5vZGV3YWxrKG5vZGU6IE5vZGUsIGZ1bmM6IChub2RlOiBOb2RlKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZ1bmMobm9kZSk7XHJcbiAgICAgICAgZm9yIChub2RlID0gbm9kZS5maXJzdENoaWxkOyByZXN1bHQgIT09IGZhbHNlICYmIG5vZGU7IG5vZGUgPSBub2RlLm5leHRTaWJsaW5nKVxyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLm5vZGV3YWxrKG5vZGUsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUN1cnNvclJhbmdlKGVsZW06IEhUTUxFbGVtZW50LCBuck9mQ2hhcnM6IG51bWJlcik6IFtSYW5nZSwgTm9kZV1cclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBbTm9kZSwgbnVtYmVyXSA9IFtlbGVtLCAwXTtcclxuICAgICAgICB0aGlzLm5vZGV3YWxrKGVsZW0sIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuck9mQ2hhcnMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtub2RlLCAwXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLnRleHRDb250ZW50ICYmICFub2RlLmZpcnN0Q2hpbGQgJiYgbm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5DT01NRU5UX05PREUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnRleHRDb250ZW50Lmxlbmd0aCA8IG5yT2ZDaGFycykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5yT2ZDaGFycyAtPSBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtub2RlLCBuck9mQ2hhcnNdXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gW25vZGUsIG5yT2ZDaGFyc11cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICAgICAgICByYW5nZS5zZXRTdGFydChyZXN1bHRbMF0sIHJlc3VsdFsxXSk7XHJcbiAgICAgICAgcmV0dXJuIFtyYW5nZSwgcmVzdWx0WzBdXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlUmFuZ2UoZWxlbTogSFRNTEVsZW1lbnQsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogUmFuZ2Uge1xyXG5cclxuICAgICAgICBjb25zdCBub2Rlc1RvRmluZDogQXJyYXk8Tm9kZT4gPSBbbnVsbCwgbnVsbF07XHJcbiAgICAgICAgY29uc3Qgc2VsUG9pbnRzOiBBcnJheTxudW1iZXI+ID0gWzAsIDBdO1xyXG4gICAgICAgIGxldCBuck9mQ2hhcnMgPSBzdGFydDtcclxuICAgICAgICBsZXQgbnJPZkNoYXJzRW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMubm9kZXdhbGsoZWxlbSwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGVzVG9GaW5kLmV2ZXJ5KHYgPT4gdikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMF0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgc2VsUG9pbnRzWzBdID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLnRleHRDb250ZW50ICYmICFub2RlLmZpcnN0Q2hpbGQgJiYgbm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5DT01NRU5UX05PREUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVMZW5ndGggPSBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5yVG9Db21wYXJlID0gKG5vZGVzVG9GaW5kWzBdID09PSBudWxsKSA/IG5yT2ZDaGFycyA6IG5yT2ZDaGFyc0VuZDtcclxuICAgICAgICAgICAgICAgIGlmIChuclRvQ29tcGFyZSA+IG5vZGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuck9mQ2hhcnMgLT0gbm9kZUxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBuck9mQ2hhcnNFbmQgLT0gbm9kZUxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzVG9GaW5kWzBdICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvRmluZFsxXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbFBvaW50c1sxXSA9IG5yT2ZDaGFyc0VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9GaW5kWzBdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsUG9pbnRzWzBdID0gbnJPZkNoYXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnJPZkNoYXJzRW5kIDw9IG5vZGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9GaW5kWzFdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbFBvaW50c1sxXSA9IG5yT2ZDaGFyc0VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnJPZkNoYXJzRW5kIC09IG5vZGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFub2Rlc1RvRmluZFswXSkge1xyXG4gICAgICAgICAgICBub2Rlc1RvRmluZFswXSA9IGVsZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbm9kZXNUb0ZpbmRbMV0pIHtcclxuICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMV0gPSBub2Rlc1RvRmluZFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnQobm9kZXNUb0ZpbmRbMF0sIHNlbFBvaW50c1swXSk7XHJcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGVzVG9GaW5kWzFdLCBzZWxQb2ludHNbMV0pO1xyXG4gICAgICAgIHJldHVybiByYW5nZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRDYXJldFBvc2l0aW9uOiByZXR1cm4gW3N0YXJ0LCBlbmRdIGFzIG9mZnNldHMgdG8gZWxlbS50ZXh0Q29udGVudCB0aGF0XHJcbiAgICAvLyAgIGNvcnJlc3BvbmQgdG8gdGhlIHNlbGVjdGVkIHBvcnRpb24gb2YgdGV4dFxyXG4gICAgLy8gICAoaWYgc3RhcnQgPT09IGVuZCwgY2FyZXQgaXMgYXQgZ2l2ZW4gcG9zaXRpb24gYW5kIG5vIHRleHQgaXMgc2VsZWN0ZWQpXHJcbiAgICBwdWJsaWMgZ2V0Q2FyZXRQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCk6IG51bWJlcltdIHtcclxuICAgICAgICBjb25zdCBzZWw6IFNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBsZXQgY3VtTGVuZ3RoID0gWzAsIDBdO1xyXG5cclxuICAgICAgICBpZiAoc2VsLmFuY2hvck5vZGUgPT09IGVsZW0pIHtcclxuICAgICAgICAgICAgY3VtTGVuZ3RoID0gW3NlbC5hbmNob3JPZmZzZXQsIHNlbC5mb2N1c09mZnNldF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBub2Rlc1RvRmluZCA9IFtzZWwuYW5jaG9yTm9kZSwgc2VsLmZvY3VzTm9kZV07XHJcbiAgICAgICAgICAgIGlmICghZWxlbS5jb250YWlucyhzZWwuYW5jaG9yTm9kZSkgfHwgIWVsZW0uY29udGFpbnMoc2VsLmZvY3VzTm9kZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kOiBBcnJheTxib29sZWFuPiA9IFtmYWxzZSwgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGV3YWxrKGVsZW0sIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gbm9kZXNUb0ZpbmRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFtpID09PSAwID8gMSA6IDBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gYWxsIGRvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQgJiYgIW5vZGUuZmlyc3RDaGlsZCAmJiBub2RlLm5vZGVUeXBlICE9PSBub2RlLkNPTU1FTlRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VtTGVuZ3RoW2ldICs9IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjdW1MZW5ndGhbMF0gKz0gc2VsLmFuY2hvck9mZnNldDtcclxuICAgICAgICAgICAgICAgIGN1bUxlbmd0aFsxXSArPSBzZWwuZm9jdXNPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1bUxlbmd0aFswXSA8PSBjdW1MZW5ndGhbMV0pXHJcbiAgICAgICAgICAgIHJldHVybiBjdW1MZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBbY3VtTGVuZ3RoWzFdLCBjdW1MZW5ndGhbMF1dO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTWFya1VwUmFuZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb25TdGFydDogbnVtYmVyLCBwb3NpdGlvbkVuZDogbnVtYmVyLCBpZDogc3RyaW5nKSB7ICAgICAgXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkVuZCA9IHBvc2l0aW9uRW5kO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25TdGFydCA9IHBvc2l0aW9uU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgIHB1YmxpYyBwb3NpdGlvblN0YXJ0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcG9zaXRpb25FbmQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgSXNTZWxlY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25FbmQgIT09IHRoaXMucG9zaXRpb25TdGFydFxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGVsZW0gYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRleHRBcmVhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBlbGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQsIHBvczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBlbGVtIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0QXJlYSkge1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3Rpb25FbmQgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBlbGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBwb3MgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBNYXJrVXBFbGVtZW50IH0gZnJvbSBcIi4vbWFya3VwZWxlbWVudFwiO1xyXG5leHBvcnQgY2xhc3MgTWFya1VwVGV4dEFyZWEge1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXJrVXBUZXh0QXJlYSBmdW5jdGlvbiBsb2FkJyk7XHJcbiAgICAgICAgY29uc3QgRWxlbWVudCA9IHtcclxuICAgICAgICAgICAgTWFya1VwRWxlbWVudDogbmV3IE1hcmtVcEVsZW1lbnQoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3dbJ2JsYXpvckh0bWxCdWlsZGVyJ10pIHtcclxuICAgICAgICAgICAgd2luZG93WydibGF6b3JIdG1sQnVpbGRlciddID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ud2luZG93WydibGF6b3JIdG1sQnVpbGRlciddLFxyXG4gICAgICAgICAgICAgICAgLi4uRWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93WydibGF6b3JIdG1sQnVpbGRlciddID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uRWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWFya1VwUmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXByYW5nZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtVcFZhbHVlIHtcclxuICAgIEluaXQoaWQ6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBodG1sOiBzdHJpbmcsIHJhbmdlOiBNYXJrVXBSYW5nZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gY29udGVudDtcclxuICAgICAgICB0aGlzLmlubmVySHRtbCA9IGh0bWw7XHJcbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xyXG4gICAgfVxyXG4gICAgaW5uZXJIdG1sOiBzdHJpbmdcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICByYW5nZTogTWFya1VwUmFuZ2U7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=