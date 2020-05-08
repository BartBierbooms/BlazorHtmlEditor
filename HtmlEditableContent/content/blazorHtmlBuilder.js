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
                        if (activeNode.parentElement.nodeName === 'LI') {
                            tag = 'li';
                        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXBlbGVtZW50Y2hhbmdlLnRzIiwid2VicGFjazovLy8uL2ludGVyb3Avc3JjL21hcmt1cGVsZW1lbnRyYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXByYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXB0ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXB2YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBa0Q7QUFDbEQs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OztBQ2pCRDtBQUFBO0FBQUE7SUFBQTtJQVdBLENBQUM7SUFWRywwQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLE9BQWUsRUFBRSxJQUFZLEVBQUUsS0FBa0I7UUFDOUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBS0wsa0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJsYXpvckh0bWxCdWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbnRlcm9wL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IE1hcmtVcFRleHRBcmVhIH0gZnJvbSAnLi9tYXJrdXB0ZXh0YXJlYSc7XHJcbk1hcmtVcFRleHRBcmVhLkxvYWQoKTtcclxuXHJcbiIsImltcG9ydCB7IE1hcmtVcEVsZW1lbnRSYW5nZSB9IGZyb20gXCIuL21hcmt1cGVsZW1lbnRyYW5nZVwiO1xyXG5pbXBvcnQgeyBNYXJrVXBSYW5nZSB9IGZyb20gXCIuL21hcmt1cHJhbmdlXCI7XHJcbmltcG9ydCB7IE1hcmtVcFZhbHVlQ2hhbmdlIH0gZnJvbSBcIi4vbWFya3VwZWxlbWVudGNoYW5nZVwiO1xyXG5pbXBvcnQgeyBNYXJrVXBWYWx1ZSB9IGZyb20gXCIuL21hcmt1cHZhbHVlXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0IERvdE5ldDogYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtVcEVsZW1lbnQge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlU2VsZWN0aW9uOiBNYXJrVXBSYW5nZTtcclxuICAgIHByaXZhdGUgZWxlbWVudFJhbmdlOiBNYXJrVXBFbGVtZW50UmFuZ2U7XHJcbiAgICBwcml2YXRlIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG4gICAgcHJpdmF0ZSB1bmtvd25Qb3M6IE1hcmtVcFJhbmdlID0gbmV3IE1hcmtVcFJhbmdlKC0xLCAtMSwgXCJcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmFuZ2UgPSBuZXcgTWFya1VwRWxlbWVudFJhbmdlXHJcbiAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb24gPSBuZXcgTWFya1VwUmFuZ2UoLTEsIC0xLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVsZW1lbnQoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvbihpZDogc3RyaW5nKTogTWFya1VwUmFuZ2Uge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZWxlbWVudFJhbmdlLmdldENhcmV0UG9zaXRpb24odGhpcy5nZXRFbGVtZW50KGlkKSk7XHJcbiAgICAgICAgaWYgKHBvcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcmtVcFJhbmdlKHBvc1swXSwgcG9zWzFdLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVua293blBvcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgU2V0Q29udGVudChpZDogc3RyaW5nLCBodG1sOiBzdHJpbmcsIHN0YXJ0UG9zOiBudW1iZXIsIGVuZFBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBjb25zdCBlZGl0YWJsZUVsZW0gPSB0aGlzLmVkaXRhYmxlRGl2Tm9kZShlbGVtKTtcclxuICAgICAgICBpZiAoZWRpdGFibGVFbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRGV0YWNoTXV0YXRpb25MaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICBlbGVtLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5lbGVtZW50UmFuZ2UuY3JlYXRlUmFuZ2UoZWRpdGFibGVFbGVtLCBzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24ocmFuZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLkF0dGFjaE11dGF0aW9uTGlzdGVuZXIoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIEluc2VydE5ld0xpbmUoaWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRWxlbSA9IHRoaXMuZWRpdGFibGVEaXZOb2RlKGVsZW0pO1xyXG4gICAgICAgIGxldCB0YWcgPSAnZGl2JztcclxuICAgICAgICBsZXQgaW5UaGVNaWRkbGU6IGJvb2xlYW47XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlRWxlbSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFuZ2VOb2RlID0gdGhpcy5lbGVtZW50UmFuZ2UuY3JlYXRlQ3Vyc29yUmFuZ2UoZWRpdGFibGVFbGVtLCB0aGlzLmFjdGl2ZVNlbGVjdGlvbi5wb3NpdGlvblN0YXJ0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyYW5nZU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZU5vZGUgPSByYW5nZU5vZGVbMV1cclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVOb2RlLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgPT09ICdMSScpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gJ2xpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5UaGVNaWRkbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlTm9kZVswXS5zdGFydE9mZnNldCA9PT0gYWN0aXZlTm9kZS50ZXh0Q29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblRoZU1pZGRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmFuZ2VOb2RlWzBdLnN0YXJ0T2Zmc2V0ID09PSBhY3RpdmVOb2RlLnRleHRDb250ZW50Lmxlbmd0aCAtIDEgJiYgYWN0aXZlTm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoYWN0aXZlTm9kZS50ZXh0Q29udGVudC5sZW5ndGggLSAxKSA9PT0gXCJcXHUyMDBCXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblRoZU1pZGRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgbmV3VGFnLmlubmVySFRNTCA9IFwiXFx1MjAwQlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpblRoZU1pZGRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZU5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgbmV3VGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uaW5zZXJ0Tm9kZShuZXdUYWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmFuZ2VOb2RlWzBdLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VOb2RlWzBdLnNldFN0YXJ0KG5ld1RhZywgMSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uc2V0RW5kKG5ld1RhZywgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihyYW5nZU5vZGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgZWxlbS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbGVtQ29udGVudENoYW5nZWQoaWQsIGVsZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZWRpdGFibGVEaXZOb2RlKGVsZW06IEhUTUxFbGVtZW50KTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLmlzQ29udGVudEVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGVsZW0uY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdk5vZGUgPSBub2RlIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpdk5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2Tm9kZS5pc0NvbnRlbnRFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGl2Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE1hcmtVcChpZDogc3RyaW5nKTogTWFya1VwVmFsdWUge1xyXG4gICAgICAgIGNvbnN0IG1hcmtVcFZhbHVlID0gbmV3IE1hcmtVcFZhbHVlKCk7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnR2V0TWFya1VwIHN0YXJ0L2VuZDogJyArIHRoaXMuYWN0aXZlU2VsZWN0aW9uLnBvc2l0aW9uU3RhcnQgKyAnLycgKyB0aGlzLmFjdGl2ZVNlbGVjdGlvbi5wb3NpdGlvbkVuZCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2VsZW0uaW5uZXJIVE1MJyArIGVsZW0uaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2VsZWN0aW9uLnBvc2l0aW9uU3RhcnQgPiAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG1hcmtVcFZhbHVlLkluaXQoaWQsIGVsZW0udGV4dENvbnRlbnQsIGVsZW0uaW5uZXJIVE1MLCB0aGlzLmFjdGl2ZVNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrVXBWYWx1ZS5Jbml0KGlkLCBlbGVtLnRleHRDb250ZW50LCBlbGVtLmlubmVySFRNTCwgdGhpcy51bmtvd25Qb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXJrVXBWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0UG9zaXRpb24oaWQ6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRWxlbSA9IHRoaXMuZWRpdGFibGVEaXZOb2RlKGVsZW0pO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5jcmVhdGVSYW5nZShlZGl0YWJsZUVsZW0sIHBvc2l0aW9uLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24ocmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRTZWxlY3Rpb24ocmFuZ2U6IFJhbmdlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgRGV0YWNoTXV0YXRpb25MaXN0ZW5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIEF0dGFjaE11dGF0aW9uTGlzdGVuZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZWxlbUNvbnRlbnRDaGFuZ2VkKGlkLCBlbGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGVsZW0sIGNvbmZpZyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlbW92ZUV2ZW50TGlzdGVuZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92ZUV2ZW50TGlzdGVuZXI6IHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4geyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZWxlbUNvbnRlbnRDaGFuZ2VkKGlkOiBzdHJpbmcsIGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgcG9zT25DaGFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5nZXRDYXJldFBvc2l0aW9uKGVsZW0pO1xyXG4gICAgICAgIGlmIChwb3NPbkNoYW5nZSAmJiBwb3NPbkNoYW5nZS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hhbmdlZCA9IG5ldyBNYXJrVXBWYWx1ZUNoYW5nZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbiA9IG5ldyBNYXJrVXBSYW5nZShwb3NPbkNoYW5nZVswXSwgcG9zT25DaGFuZ2VbMV0sIGlkKTtcclxuICAgICAgICAgICAgY2hhbmdlZC5Jbml0KGlkLCBlbGVtLnRleHRDb250ZW50LCBlbGVtLmlubmVySFRNTCwgdGhpcy5hY3RpdmVTZWxlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNlbGVjdGlvbkNoYW5nZWQoZWxlbTogSFRNTEVsZW1lbnQsIGlkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGVsZW0udGV4dENvbnRlbnQubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc09uQ2hhbmdlID0gdGhpcy5lbGVtZW50UmFuZ2UuZ2V0Q2FyZXRQb3NpdGlvbihlbGVtKTtcclxuICAgICAgICBpZiAocG9zT25DaGFuZ2UubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uID0gbmV3IE1hcmtVcFJhbmdlKHBvc09uQ2hhbmdlWzBdLCBwb3NPbkNoYW5nZVsxXSwgaWQpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgRG90TmV0Lmludm9rZU1ldGhvZEFzeW5jKCdIdG1sRWRpdGFibGVDb250ZW50JywgJ1NlbGVjdGlvbkNoYW5nZWQnLCB0aGlzLmFjdGl2ZVNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSB3YXMgYW4gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBwdWJsaWMgQWRkRXZlbnRMaXN0ZW5lcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG5cclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VsZWN0aW9uQ2hhbmdlZChlbGVtLCBpZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluc2VydE5ld0xpbmUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNlbGVjdGlvbkNoYW5nZWQoZWxlbSwgaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBWYWx1ZUNoYW5nZSB7XHJcbiAgICBJbml0KGlkOiBzdHJpbmcsIGNoYW5nZWQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCBjaGFuZ2VSYW5nZTogTWFya1VwUmFuZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gY2hhbmdlZDtcclxuICAgICAgICB0aGlzLmNoYW5nZWRIdG1sID0gaHRtbDtcclxuICAgICAgICB0aGlzLmNoYW5nZVJhbmdlID0gY2hhbmdlUmFuZ2U7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VSYW5nZTogTWFya1VwUmFuZ2U7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY2hhbmdlZDogc3RyaW5nO1xyXG4gICAgY2hhbmdlZEh0bWw6IHN0cmluZ1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNYXJrVXBFbGVtZW50UmFuZ2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBub2Rld2Fsayhub2RlOiBOb2RlLCBmdW5jOiAobm9kZTogTm9kZSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmdW5jKG5vZGUpO1xyXG4gICAgICAgIGZvciAobm9kZSA9IG5vZGUuZmlyc3RDaGlsZDsgcmVzdWx0ICE9PSBmYWxzZSAmJiBub2RlOyBub2RlID0gbm9kZS5uZXh0U2libGluZylcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ub2Rld2Fsayhub2RlLCBmdW5jKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDdXJzb3JSYW5nZShlbGVtOiBIVE1MRWxlbWVudCwgbnJPZkNoYXJzOiBudW1iZXIpOiBbUmFuZ2UsIE5vZGVdXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogW05vZGUsIG51bWJlcl0gPSBbZWxlbSwgMF07XHJcbiAgICAgICAgdGhpcy5ub2Rld2FsayhlbGVtLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobnJPZkNoYXJzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbbm9kZSwgMF1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudCAmJiAhbm9kZS5maXJzdENoaWxkICYmIG5vZGUubm9kZVR5cGUgIT09IG5vZGUuQ09NTUVOVF9OT0RFICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudC5sZW5ndGggPCBuck9mQ2hhcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuck9mQ2hhcnMgLT0gbm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbbm9kZSwgbnJPZkNoYXJzXVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtub2RlLCBuck9mQ2hhcnNdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnQocmVzdWx0WzBdLCByZXN1bHRbMV0pO1xyXG4gICAgICAgIHJldHVybiBbcmFuZ2UsIHJlc3VsdFswXV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVJhbmdlKGVsZW06IEhUTUxFbGVtZW50LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFJhbmdlIHtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXNUb0ZpbmQ6IEFycmF5PE5vZGU+ID0gW251bGwsIG51bGxdO1xyXG4gICAgICAgIGNvbnN0IHNlbFBvaW50czogQXJyYXk8bnVtYmVyPiA9IFswLCAwXTtcclxuICAgICAgICBsZXQgbnJPZkNoYXJzID0gc3RhcnQ7XHJcbiAgICAgICAgbGV0IG5yT2ZDaGFyc0VuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLm5vZGV3YWxrKGVsZW0sIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2Rlc1RvRmluZC5ldmVyeSh2ID0+IHYpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXJ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGVzVG9GaW5kWzBdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHNlbFBvaW50c1swXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS50ZXh0Q29udGVudCAmJiAhbm9kZS5maXJzdENoaWxkICYmIG5vZGUubm9kZVR5cGUgIT09IG5vZGUuQ09NTUVOVF9OT0RFICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTGVuZ3RoID0gbm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuclRvQ29tcGFyZSA9IChub2Rlc1RvRmluZFswXSA9PT0gbnVsbCkgPyBuck9mQ2hhcnMgOiBuck9mQ2hhcnNFbmQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobnJUb0NvbXBhcmUgPiBub2RlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnJPZkNoYXJzIC09IG5vZGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbnJPZkNoYXJzRW5kIC09IG5vZGVMZW5ndGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1RvRmluZFswXSAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMV0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxQb2ludHNbMV0gPSBuck9mQ2hhcnNFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvRmluZFswXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbFBvaW50c1swXSA9IG5yT2ZDaGFycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5yT2ZDaGFyc0VuZCA8PSBub2RlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvRmluZFsxXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxQb2ludHNbMV0gPSBuck9mQ2hhcnNFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5yT2ZDaGFyc0VuZCAtPSBub2RlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbm9kZXNUb0ZpbmRbMF0pIHtcclxuICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMF0gPSBlbGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW5vZGVzVG9GaW5kWzFdKSB7XHJcbiAgICAgICAgICAgIG5vZGVzVG9GaW5kWzFdID0gbm9kZXNUb0ZpbmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0KG5vZGVzVG9GaW5kWzBdLCBzZWxQb2ludHNbMF0pO1xyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2Rlc1RvRmluZFsxXSwgc2VsUG9pbnRzWzFdKTtcclxuICAgICAgICByZXR1cm4gcmFuZ2U7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0Q2FyZXRQb3NpdGlvbjogcmV0dXJuIFtzdGFydCwgZW5kXSBhcyBvZmZzZXRzIHRvIGVsZW0udGV4dENvbnRlbnQgdGhhdFxyXG4gICAgLy8gICBjb3JyZXNwb25kIHRvIHRoZSBzZWxlY3RlZCBwb3J0aW9uIG9mIHRleHRcclxuICAgIC8vICAgKGlmIHN0YXJ0ID09PSBlbmQsIGNhcmV0IGlzIGF0IGdpdmVuIHBvc2l0aW9uIGFuZCBubyB0ZXh0IGlzIHNlbGVjdGVkKVxyXG4gICAgcHVibGljIGdldENhcmV0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgY29uc3Qgc2VsOiBTZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IGN1bUxlbmd0aCA9IFswLCAwXTtcclxuXHJcbiAgICAgICAgaWYgKHNlbC5hbmNob3JOb2RlID09PSBlbGVtKSB7XHJcbiAgICAgICAgICAgIGN1bUxlbmd0aCA9IFtzZWwuYW5jaG9yT2Zmc2V0LCBzZWwuZm9jdXNPZmZzZXRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZXNUb0ZpbmQgPSBbc2VsLmFuY2hvck5vZGUsIHNlbC5mb2N1c05vZGVdO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW0uY29udGFpbnMoc2VsLmFuY2hvck5vZGUpIHx8ICFlbGVtLmNvbnRhaW5zKHNlbC5mb2N1c05vZGUpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZDogQXJyYXk8Ym9vbGVhbj4gPSBbZmFsc2UsIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rld2FsayhlbGVtLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IG5vZGVzVG9GaW5kW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRbaSA9PT0gMCA/IDEgOiAwXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGFsbCBkb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnRleHRDb250ZW50ICYmICFub2RlLmZpcnN0Q2hpbGQgJiYgbm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5DT01NRU5UX05PREUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1bUxlbmd0aFtpXSArPSBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY3VtTGVuZ3RoWzBdICs9IHNlbC5hbmNob3JPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBjdW1MZW5ndGhbMV0gKz0gc2VsLmZvY3VzT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdW1MZW5ndGhbMF0gPD0gY3VtTGVuZ3RoWzFdKVxyXG4gICAgICAgICAgICByZXR1cm4gY3VtTGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gW2N1bUxlbmd0aFsxXSwgY3VtTGVuZ3RoWzBdXTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hcmtVcFJhbmdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uU3RhcnQ6IG51bWJlciwgcG9zaXRpb25FbmQ6IG51bWJlciwgaWQ6IHN0cmluZykgeyAgICAgIFxyXG4gICAgICAgIHRoaXMucG9zaXRpb25FbmQgPSBwb3NpdGlvbkVuZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSBwb3NpdGlvblN0YXJ0O1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICBwdWJsaWMgcG9zaXRpb25TdGFydDogbnVtYmVyO1xyXG4gICAgcHVibGljIHBvc2l0aW9uRW5kOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIElzU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uRW5kICE9PSB0aGlzLnBvc2l0aW9uU3RhcnRcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBlbGVtIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0QXJlYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFNldFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50LCBwb3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gZWxlbSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgICAgIHRleHRBcmVhLnNlbGVjdGlvblN0YXJ0ID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0aW9uRW5kID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uRW5kID0gcG9zICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTWFya1VwRWxlbWVudCB9IGZyb20gXCIuL21hcmt1cGVsZW1lbnRcIjtcclxuZXhwb3J0IGNsYXNzIE1hcmtVcFRleHRBcmVhIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFya1VwVGV4dEFyZWEgZnVuY3Rpb24gbG9hZCcpO1xyXG4gICAgICAgIGNvbnN0IEVsZW1lbnQgPSB7XHJcbiAgICAgICAgICAgIE1hcmtVcEVsZW1lbnQ6IG5ldyBNYXJrVXBFbGVtZW50KClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAod2luZG93WydibGF6b3JIdG1sQnVpbGRlciddKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLndpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSxcclxuICAgICAgICAgICAgICAgIC4uLkVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLkVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBWYWx1ZSB7XHJcbiAgICBJbml0KGlkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCByYW5nZTogTWFya1VwUmFuZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5pbm5lckh0bWwgPSBodG1sO1xyXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcclxuICAgIH1cclxuICAgIGlubmVySHRtbDogc3RyaW5nXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcmFuZ2U6IE1hcmtVcFJhbmdlO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9