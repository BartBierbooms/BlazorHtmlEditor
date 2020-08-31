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
/* harmony import */ var _markuprangeelement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markuprangeelement */ "./interop/src/markuprangeelement.ts");
/* harmony import */ var _markupelementchange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markupelementchange */ "./interop/src/markupelementchange.ts");
/* harmony import */ var _markupvalue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markupvalue */ "./interop/src/markupvalue.ts");
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
        this.unkownPos = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](-1, -1, -1, -1, "");
        this.elementRange = new _markupelementrange__WEBPACK_IMPORTED_MODULE_0__["MarkUpElementRange"];
        this.activeSelection = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](-1, -1, -1, -1, "");
    }
    MarkUpElement.prototype.getElement = function (id) {
        return document.getElementById(id);
    };
    MarkUpElement.prototype.GetPosition = function (id) {
        var pos = this.elementRange.getCaretPosition(this.getElement(id));
        if (pos) {
            return new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](pos[0], pos[1], pos[2], pos[3], id);
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
    MarkUpElement.prototype.IsLastElementChild = function (elem) {
        return document.lastElementChild === elem;
    };
    MarkUpElement.prototype.InsertNewLine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var elem, editableElem, tag, inTheMiddle, endOfDocumentInLi, rangeNode, activeNode, newTag, parentli, newExtraTag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elem = document.getElementById(id);
                        editableElem = this.editableDivNode(elem);
                        tag = 'div';
                        endOfDocumentInLi = false;
                        if (!editableElem) return [3 /*break*/, 2];
                        rangeNode = this.elementRange.createCursorRange(editableElem, this.activeSelection.positionStart);
                        if (!rangeNode) return [3 /*break*/, 2];
                        activeNode = rangeNode[1];
                        if (activeNode.parentElement.nodeName === 'LI') {
                            endOfDocumentInLi = (rangeNode[0].startOffset === activeNode.textContent.length) && (this.elementRange.IsLastChild(elem, rangeNode[1]));
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
                            if (endOfDocumentInLi) {
                                parentli = activeNode.parentElement;
                                while (parentli && parentli.nodeName !== 'OL') {
                                    parentli = parentli.parentElement;
                                }
                                ;
                                if (parentli) {
                                    newExtraTag = document.createElement('div');
                                    newExtraTag.innerHTML = "\u200B";
                                    parentli.insertAdjacentElement('afterend', newExtraTag);
                                }
                            }
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
        var markUpValue = new _markupvalue__WEBPACK_IMPORTED_MODULE_4__["MarkUpValue"]();
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
            elem.removeEventListener('dblclick', function () { });
        }
    };
    MarkUpElement.prototype.elemContentChanged = function (id, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var posOnChange, changed;
            return __generator(this, function (_a) {
                posOnChange = this.elementRange.getCaretPosition(elem);
                if (posOnChange && posOnChange.length === 4) {
                    changed = new _markupelementchange__WEBPACK_IMPORTED_MODULE_3__["MarkUpValueChange"]();
                    this.activeSelection = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](posOnChange[0], posOnChange[1], posOnChange[2], posOnChange[3], id);
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
                        if (!(posOnChange.length === 4)) return [3 /*break*/, 4];
                        this.activeSelection = new _markuprange__WEBPACK_IMPORTED_MODULE_1__["MarkUpRange"](posOnChange[0], posOnChange[1], posOnChange[2], posOnChange[3], id);
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
            elem.addEventListener('dblclick', function (e) { return __awaiter(_this, void 0, void 0, function () {
                var clickedNode, elementClicked, posOnChange, mrkUpRangeElement, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(e.target !== e.currentTarget)) return [3 /*break*/, 4];
                            clickedNode = e.target;
                            if (!clickedNode) return [3 /*break*/, 4];
                            elementClicked = null;
                            if (clickedNode.nodeType === clickedNode.TEXT_NODE) {
                                elementClicked = clickedNode.parentElement;
                            }
                            else if (clickedNode.nodeType === clickedNode.ELEMENT_NODE) {
                                elementClicked = clickedNode;
                            }
                            if (!elementClicked) return [3 /*break*/, 4];
                            posOnChange = this.elementRange.getCaretPosition(elem);
                            if (!(posOnChange.length === 4)) return [3 /*break*/, 4];
                            mrkUpRangeElement = new _markuprangeelement__WEBPACK_IMPORTED_MODULE_2__["MarkUpRangeElement"](posOnChange[0], posOnChange[1], posOnChange[2], posOnChange[3], id, elementClicked.tagName, elementClicked.textContent);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, DotNet.invokeMethodAsync('HtmlEditableContent', 'OnDoubleClickElement', mrkUpRangeElement)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            console.log('there was an error');
                            console.log(e_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
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
    MarkUpElementRange.prototype.getLastChildNode = function (root) {
        var lc = root.lastChild;
        while (lc && lc.nodeType !== lc.ELEMENT_NODE) {
            if (lc.previousSibling)
                lc = lc.previousSibling;
            else
                break;
        }
        return lc;
    };
    MarkUpElementRange.prototype.canContainText = function (node) {
        if (node.nodeType === node.ELEMENT_NODE) { //is an element node
            return !(MarkUpElementRange.voidNodeTags.indexOf(node.nodeName) > 0);
        }
        return false;
    };
    MarkUpElementRange.prototype.IsLastChild = function (root, node) {
        var contentEditableElement;
        contentEditableElement = root;
        while (this.getLastChildNode(contentEditableElement) &&
            this.canContainText(this.getLastChildNode(contentEditableElement))) {
            contentEditableElement = this.getLastChildNode(contentEditableElement);
        }
        if (node.nodeType === node.TEXT_NODE) {
            return contentEditableElement === node.parentElement;
        }
        else {
            return contentEditableElement === node;
        }
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
        var cumLength = [0, 0, sel.anchorOffset, sel.focusOffset];
        if (sel.anchorNode === elem) {
            cumLength = [sel.anchorOffset, sel.focusOffset, sel.anchorOffset, sel.focusOffset];
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
        return [cumLength[1], cumLength[0], sel.anchorOffset, sel.focusOffset];
    };
    MarkUpElementRange.voidNodeTags = ['AREA', 'BASE', 'BR', 'COL', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'MENUITEM', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR', 'BASEFONT', 'BGSOUND', 'FRAME', 'ISINDEX'];
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
    function MarkUpRange(positionStart, positionEnd, anchorStart, focusStart, id) {
        this.positionEnd = positionEnd;
        this.positionStart = positionStart;
        this.anchorStart = anchorStart;
        this.focusStart = focusStart;
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

/***/ "./interop/src/markuprangeelement.ts":
/*!*******************************************!*\
  !*** ./interop/src/markuprangeelement.ts ***!
  \*******************************************/
/*! exports provided: MarkUpRangeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUpRangeElement", function() { return MarkUpRangeElement; });
/* harmony import */ var _markuprange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markuprange */ "./interop/src/markuprange.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MarkUpRangeElement = /** @class */ (function (_super) {
    __extends(MarkUpRangeElement, _super);
    function MarkUpRangeElement(positionStart, positionEnd, anchorStart, focusStart, id, tagName, textContent) {
        var _this = _super.call(this, positionStart, positionEnd, anchorStart, focusStart, id) || this;
        _this.tagName = tagName;
        _this.textContent = textContent;
        return _this;
    }
    return MarkUpRangeElement;
}(_markuprange__WEBPACK_IMPORTED_MODULE_0__["MarkUpRange"]));



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXBlbGVtZW50Y2hhbmdlLnRzIiwid2VicGFjazovLy8uL2ludGVyb3Avc3JjL21hcmt1cGVsZW1lbnRyYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXByYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXByYW5nZWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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Q0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUtMLGtCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJibGF6b3JIdG1sQnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW50ZXJvcC9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBNYXJrVXBUZXh0QXJlYSB9IGZyb20gJy4vbWFya3VwdGV4dGFyZWEnO1xyXG5NYXJrVXBUZXh0QXJlYS5Mb2FkKCk7XHJcblxyXG4iLCJpbXBvcnQgeyBNYXJrVXBFbGVtZW50UmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXBlbGVtZW50cmFuZ2VcIjtcclxuaW1wb3J0IHsgTWFya1VwUmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXByYW5nZVwiO1xyXG5pbXBvcnQgeyBNYXJrVXBSYW5nZUVsZW1lbnQgfSBmcm9tIFwiLi9tYXJrdXByYW5nZWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTWFya1VwVmFsdWVDaGFuZ2UgfSBmcm9tIFwiLi9tYXJrdXBlbGVtZW50Y2hhbmdlXCI7XHJcbmltcG9ydCB7IE1hcmtVcFZhbHVlIH0gZnJvbSBcIi4vbWFya3VwdmFsdWVcIjtcclxuXHJcbmRlY2xhcmUgY29uc3QgRG90TmV0OiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya1VwRWxlbWVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVTZWxlY3Rpb246IE1hcmtVcFJhbmdlO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmFuZ2U6IE1hcmtVcEVsZW1lbnRSYW5nZTtcclxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIHVua293blBvczogTWFya1VwUmFuZ2UgPSBuZXcgTWFya1VwUmFuZ2UoLTEsIC0xLCAtMSwgLTEsIFwiXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJhbmdlID0gbmV3IE1hcmtVcEVsZW1lbnRSYW5nZVxyXG4gICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uID0gbmV3IE1hcmtVcFJhbmdlKC0xLCAtMSwgLTEsIC0xLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVsZW1lbnQoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvbihpZDogc3RyaW5nKTogTWFya1VwUmFuZ2Uge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZWxlbWVudFJhbmdlLmdldENhcmV0UG9zaXRpb24odGhpcy5nZXRFbGVtZW50KGlkKSk7XHJcbiAgICAgICAgaWYgKHBvcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcmtVcFJhbmdlKHBvc1swXSwgcG9zWzFdLCBwb3NbMl0sIHBvc1szXSwgaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51bmtvd25Qb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIFNldENvbnRlbnQoaWQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCBzdGFydFBvczogbnVtYmVyLCBlbmRQb3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVFbGVtID0gdGhpcy5lZGl0YWJsZURpdk5vZGUoZWxlbSk7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlRWxlbSkge1xyXG4gICAgICAgICAgICB0aGlzLkRldGFjaE11dGF0aW9uTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgZWxlbS5mb2N1cygpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmNyZWF0ZVJhbmdlKGVkaXRhYmxlRWxlbSwgc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKHJhbmdlKTtcclxuICAgICAgICAgICAgdGhpcy5BdHRhY2hNdXRhdGlvbkxpc3RlbmVyKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJc0xhc3RFbGVtZW50Q2hpbGQoZWxlbTpIVE1MRWxlbWVudCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubGFzdEVsZW1lbnRDaGlsZCA9PT0gZWxlbTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYXN5bmMgSW5zZXJ0TmV3TGluZShpZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVFbGVtID0gdGhpcy5lZGl0YWJsZURpdk5vZGUoZWxlbSk7XHJcbiAgICAgICAgbGV0IHRhZyA9ICdkaXYnO1xyXG4gICAgICAgIGxldCBpblRoZU1pZGRsZTogYm9vbGVhbjtcclxuICAgICAgICBsZXQgZW5kT2ZEb2N1bWVudEluTGk6IGJvb2xlYW47XHJcbiAgICAgICAgZW5kT2ZEb2N1bWVudEluTGkgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZWRpdGFibGVFbGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlTm9kZSA9IHRoaXMuZWxlbWVudFJhbmdlLmNyZWF0ZUN1cnNvclJhbmdlKGVkaXRhYmxlRWxlbSwgdGhpcy5hY3RpdmVTZWxlY3Rpb24ucG9zaXRpb25TdGFydCk7XHJcbiAgICAgICAgICAgIGlmIChyYW5nZU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZU5vZGUgPSByYW5nZU5vZGVbMV1cclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVOb2RlLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgPT09ICdMSScpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kT2ZEb2N1bWVudEluTGkgPSAocmFuZ2VOb2RlWzBdLnN0YXJ0T2Zmc2V0ID09PSBhY3RpdmVOb2RlLnRleHRDb250ZW50Lmxlbmd0aCkgJiYgKHRoaXMuZWxlbWVudFJhbmdlLklzTGFzdENoaWxkKGVsZW0sIHJhbmdlTm9kZVsxXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gJ2xpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5UaGVNaWRkbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlTm9kZVswXS5zdGFydE9mZnNldCA9PT0gYWN0aXZlTm9kZS50ZXh0Q29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblRoZU1pZGRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmFuZ2VOb2RlWzBdLnN0YXJ0T2Zmc2V0ID09PSBhY3RpdmVOb2RlLnRleHRDb250ZW50Lmxlbmd0aCAtIDEgJiYgYWN0aXZlTm9kZS50ZXh0Q29udGVudC5zdWJzdHJpbmcoYWN0aXZlTm9kZS50ZXh0Q29udGVudC5sZW5ndGggLSAxKSA9PT0gXCJcXHUyMDBCXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblRoZU1pZGRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgbmV3VGFnLmlubmVySFRNTCA9IFwiXFx1MjAwQlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpblRoZU1pZGRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZU5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgbmV3VGFnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kT2ZEb2N1bWVudEluTGkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50bGkgPSBhY3RpdmVOb2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnRsaSAmJiBwYXJlbnRsaS5ub2RlTmFtZSAhPT0gJ09MJylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50bGkgPSBwYXJlbnRsaS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50bGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0V4dHJhVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdFeHRyYVRhZy5pbm5lckhUTUwgPSBcIlxcdTIwMEJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudGxpLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBuZXdFeHRyYVRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VOb2RlWzBdLmluc2VydE5vZGUobmV3VGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJhbmdlTm9kZVswXS5jb2xsYXBzZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlTm9kZVswXS5zZXRTdGFydChuZXdUYWcsIDEpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VOb2RlWzBdLnNldEVuZChuZXdUYWcsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24ocmFuZ2VOb2RlWzBdKTtcclxuICAgICAgICAgICAgICAgIGVsZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZWxlbUNvbnRlbnRDaGFuZ2VkKGlkLCBlbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVkaXRhYmxlRGl2Tm9kZShlbGVtOiBIVE1MRWxlbWVudCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbS5pc0NvbnRlbnRFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0gYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBlbGVtLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZOb2RlID0gbm9kZSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChkaXZOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpdk5vZGUuaXNDb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpdk5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRNYXJrVXAoaWQ6IHN0cmluZyk6IE1hcmtVcFZhbHVlIHtcclxuICAgICAgICBjb25zdCBtYXJrVXBWYWx1ZSA9IG5ldyBNYXJrVXBWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0dldE1hcmtVcCBzdGFydC9lbmQ6ICcgKyB0aGlzLmFjdGl2ZVNlbGVjdGlvbi5wb3NpdGlvblN0YXJ0ICsgJy8nICsgdGhpcy5hY3RpdmVTZWxlY3Rpb24ucG9zaXRpb25FbmQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdlbGVtLmlubmVySFRNTCcgKyBlbGVtLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVNlbGVjdGlvbi5wb3NpdGlvblN0YXJ0ID4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrVXBWYWx1ZS5Jbml0KGlkLCBlbGVtLnRleHRDb250ZW50LCBlbGVtLmlubmVySFRNTCwgdGhpcy5hY3RpdmVTZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWFya1VwVmFsdWUuSW5pdChpZCwgZWxlbS50ZXh0Q29udGVudCwgZWxlbS5pbm5lckhUTUwsIHRoaXMudW5rb3duUG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFya1VwVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFBvc2l0aW9uKGlkOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5nZXRFbGVtZW50KGlkKTtcclxuICAgICAgICBjb25zdCBlZGl0YWJsZUVsZW0gPSB0aGlzLmVkaXRhYmxlRGl2Tm9kZShlbGVtKTtcclxuICAgICAgICBpZiAoZWRpdGFibGVFbGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5lbGVtZW50UmFuZ2UuY3JlYXRlUmFuZ2UoZWRpdGFibGVFbGVtLCBwb3NpdGlvbiwgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKHJhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0U2VsZWN0aW9uKHJhbmdlOiBSYW5nZSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIERldGFjaE11dGF0aW9uTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBBdHRhY2hNdXRhdGlvbkxpc3RlbmVyKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5nZXRFbGVtZW50KGlkKTtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVsZW1Db250ZW50Q2hhbmdlZChpZCwgZWxlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShlbGVtLCBjb25maWcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZW1vdmVFdmVudExpc3RlbmVyKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5nZXRFbGVtZW50KGlkKTtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVFdmVudExpc3RlbmVyOiB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QgXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBlbGVtQ29udGVudENoYW5nZWQoaWQ6IHN0cmluZywgZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwb3NPbkNoYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmdldENhcmV0UG9zaXRpb24oZWxlbSk7XHJcbiAgICAgICAgaWYgKHBvc09uQ2hhbmdlICYmIHBvc09uQ2hhbmdlLmxlbmd0aCA9PT0gNCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZWQgPSBuZXcgTWFya1VwVmFsdWVDaGFuZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb24gPSBuZXcgTWFya1VwUmFuZ2UocG9zT25DaGFuZ2VbMF0sIHBvc09uQ2hhbmdlWzFdLCBwb3NPbkNoYW5nZVsyXSwgcG9zT25DaGFuZ2VbM10sIGlkKTtcclxuICAgICAgICAgICAgY2hhbmdlZC5Jbml0KGlkLCBlbGVtLnRleHRDb250ZW50LCBlbGVtLmlubmVySFRNTCwgdGhpcy5hY3RpdmVTZWxlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHNlbGVjdGlvbkNoYW5nZWQoZWxlbTogSFRNTEVsZW1lbnQsIGlkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGVsZW0udGV4dENvbnRlbnQubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc09uQ2hhbmdlID0gdGhpcy5lbGVtZW50UmFuZ2UuZ2V0Q2FyZXRQb3NpdGlvbihlbGVtKTtcclxuICAgICAgICBpZiAocG9zT25DaGFuZ2UubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uID0gbmV3IE1hcmtVcFJhbmdlKHBvc09uQ2hhbmdlWzBdLCBwb3NPbkNoYW5nZVsxXSwgcG9zT25DaGFuZ2VbMl0sIHBvc09uQ2hhbmdlWzNdLCBpZCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBEb3ROZXQuaW52b2tlTWV0aG9kQXN5bmMoJ0h0bWxFZGl0YWJsZUNvbnRlbnQnLCAnU2VsZWN0aW9uQ2hhbmdlZCcsIHRoaXMuYWN0aXZlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIHdhcyBhbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIHB1YmxpYyBBZGRFdmVudExpc3RlbmVyKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkKGVsZW0sIGlkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSAjaWQgb2YgY2xpY2tlZCBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZE5vZGUgPSAoZS50YXJnZXQgYXMgTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tlZE5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudENsaWNrZWQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrZWROb2RlLm5vZGVUeXBlID09PSBjbGlja2VkTm9kZS5URVhUX05PREUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGlja2VkID0gY2xpY2tlZE5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjbGlja2VkTm9kZS5ub2RlVHlwZSA9PT0gY2xpY2tlZE5vZGUuRUxFTUVOVF9OT0RFKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2xpY2tlZCA9IGNsaWNrZWROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Q2xpY2tlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zT25DaGFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5nZXRDYXJldFBvc2l0aW9uKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc09uQ2hhbmdlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ya1VwUmFuZ2VFbGVtZW50ID0gbmV3IE1hcmtVcFJhbmdlRWxlbWVudChwb3NPbkNoYW5nZVswXSwgcG9zT25DaGFuZ2VbMV0sIHBvc09uQ2hhbmdlWzJdLCBwb3NPbkNoYW5nZVszXSwgaWQsIGVsZW1lbnRDbGlja2VkLnRhZ05hbWUsIGVsZW1lbnRDbGlja2VkLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBEb3ROZXQuaW52b2tlTWV0aG9kQXN5bmMoJ0h0bWxFZGl0YWJsZUNvbnRlbnQnLCAnT25Eb3VibGVDbGlja0VsZW1lbnQnLCBtcmtVcFJhbmdlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgd2FzIGFuIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluc2VydE5ld0xpbmUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNlbGVjdGlvbkNoYW5nZWQoZWxlbSwgaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBWYWx1ZUNoYW5nZSB7XHJcbiAgICBJbml0KGlkOiBzdHJpbmcsIGNoYW5nZWQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCBjaGFuZ2VSYW5nZTogTWFya1VwUmFuZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gY2hhbmdlZDtcclxuICAgICAgICB0aGlzLmNoYW5nZWRIdG1sID0gaHRtbDtcclxuICAgICAgICB0aGlzLmNoYW5nZVJhbmdlID0gY2hhbmdlUmFuZ2U7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VSYW5nZTogTWFya1VwUmFuZ2U7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY2hhbmdlZDogc3RyaW5nO1xyXG4gICAgY2hhbmdlZEh0bWw6IHN0cmluZ1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNYXJrVXBFbGVtZW50UmFuZ2Uge1xyXG5cclxuICAgIHN0YXRpYyB2b2lkTm9kZVRhZ3MgPSBbJ0FSRUEnLCAnQkFTRScsICdCUicsICdDT0wnLCAnRU1CRUQnLCAnSFInLCAnSU1HJywgJ0lOUFVUJywgJ0tFWUdFTicsICdMSU5LJywgJ01FTlVJVEVNJywgJ01FVEEnLCAnUEFSQU0nLCAnU09VUkNFJywgJ1RSQUNLJywgJ1dCUicsICdCQVNFRk9OVCcsICdCR1NPVU5EJywgJ0ZSQU1FJywgJ0lTSU5ERVgnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgbm9kZXdhbGsobm9kZTogTm9kZSwgZnVuYzogKG5vZGU6IE5vZGUpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZnVuYyhub2RlKTtcclxuICAgICAgICBmb3IgKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7IHJlc3VsdCAhPT0gZmFsc2UgJiYgbm9kZTsgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmcpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubm9kZXdhbGsobm9kZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExhc3RDaGlsZE5vZGUocm9vdDogTm9kZSk6IE5vZGVcclxuICAgIHtcclxuICAgICAgICBsZXQgbGMgPSByb290Lmxhc3RDaGlsZDtcclxuICAgICAgICB3aGlsZSAobGMgJiYgbGMubm9kZVR5cGUgIT09IGxjLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgICAgICBpZiAobGMucHJldmlvdXNTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgbGMgPSBsYy5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5Db250YWluVGV4dChub2RlKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkgeyAvL2lzIGFuIGVsZW1lbnQgbm9kZVxyXG4gICAgICAgICAgICByZXR1cm4gIShNYXJrVXBFbGVtZW50UmFuZ2Uudm9pZE5vZGVUYWdzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgPiAwKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNMYXN0Q2hpbGQocm9vdDogTm9kZSwgbm9kZTogTm9kZSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgY29udGVudEVkaXRhYmxlRWxlbWVudDogTm9kZTtcclxuICAgICAgICBjb250ZW50RWRpdGFibGVFbGVtZW50ID0gcm9vdDtcclxuICAgICAgICB3aGlsZSAodGhpcy5nZXRMYXN0Q2hpbGROb2RlKGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQpICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2FuQ29udGFpblRleHQodGhpcy5nZXRMYXN0Q2hpbGROb2RlKGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQpKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQgPSB0aGlzLmdldExhc3RDaGlsZE5vZGUoY29udGVudEVkaXRhYmxlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50RWRpdGFibGVFbGVtZW50ID09PSBub2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50RWRpdGFibGVFbGVtZW50ID09PSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQ3Vyc29yUmFuZ2UoZWxlbTogSFRNTEVsZW1lbnQsIG5yT2ZDaGFyczogbnVtYmVyKTogW1JhbmdlLCBOb2RlXVxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IFtOb2RlLCBudW1iZXJdID0gW2VsZW0sIDBdO1xyXG4gICAgICAgIHRoaXMubm9kZXdhbGsoZWxlbSwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5yT2ZDaGFycyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW25vZGUsIDBdXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQgJiYgIW5vZGUuZmlyc3RDaGlsZCAmJiBub2RlLm5vZGVUeXBlICE9PSBub2RlLkNPTU1FTlRfTk9ERSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQubGVuZ3RoIDwgbnJPZkNoYXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnJPZkNoYXJzIC09IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW25vZGUsIG5yT2ZDaGFyc11cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbbm9kZSwgbnJPZkNoYXJzXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0KHJlc3VsdFswXSwgcmVzdWx0WzFdKTtcclxuICAgICAgICByZXR1cm4gW3JhbmdlLCByZXN1bHRbMF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVSYW5nZShlbGVtOiBIVE1MRWxlbWVudCwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBSYW5nZSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGVzVG9GaW5kOiBBcnJheTxOb2RlPiA9IFtudWxsLCBudWxsXTtcclxuICAgICAgICBjb25zdCBzZWxQb2ludHM6IEFycmF5PG51bWJlcj4gPSBbMCwgMF07XHJcbiAgICAgICAgbGV0IG5yT2ZDaGFycyA9IHN0YXJ0O1xyXG4gICAgICAgIGxldCBuck9mQ2hhcnNFbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5ub2Rld2FsayhlbGVtLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZXNUb0ZpbmQuZXZlcnkodiA9PiB2KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBub2Rlc1RvRmluZFswXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBzZWxQb2ludHNbMF0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUudGV4dENvbnRlbnQgJiYgIW5vZGUuZmlyc3RDaGlsZCAmJiBub2RlLm5vZGVUeXBlICE9PSBub2RlLkNPTU1FTlRfTk9ERSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxlbmd0aCA9IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbnJUb0NvbXBhcmUgPSAobm9kZXNUb0ZpbmRbMF0gPT09IG51bGwpID8gbnJPZkNoYXJzIDogbnJPZkNoYXJzRW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5yVG9Db21wYXJlID4gbm9kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5yT2ZDaGFycyAtPSBub2RlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIG5yT2ZDaGFyc0VuZCAtPSBub2RlTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNUb0ZpbmRbMF0gIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9GaW5kWzFdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsUG9pbnRzWzFdID0gbnJPZkNoYXJzRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMF0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxQb2ludHNbMF0gPSBuck9mQ2hhcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuck9mQ2hhcnNFbmQgPD0gbm9kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMV0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsUG9pbnRzWzFdID0gbnJPZkNoYXJzRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuck9mQ2hhcnNFbmQgLT0gbm9kZUxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIW5vZGVzVG9GaW5kWzBdKSB7XHJcbiAgICAgICAgICAgIG5vZGVzVG9GaW5kWzBdID0gZWxlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFub2Rlc1RvRmluZFsxXSkge1xyXG4gICAgICAgICAgICBub2Rlc1RvRmluZFsxXSA9IG5vZGVzVG9GaW5kWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICAgICAgICByYW5nZS5zZXRTdGFydChub2Rlc1RvRmluZFswXSwgc2VsUG9pbnRzWzBdKTtcclxuICAgICAgICByYW5nZS5zZXRFbmQobm9kZXNUb0ZpbmRbMV0sIHNlbFBvaW50c1sxXSk7XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldENhcmV0UG9zaXRpb246IHJldHVybiBbc3RhcnQsIGVuZF0gYXMgb2Zmc2V0cyB0byBlbGVtLnRleHRDb250ZW50IHRoYXRcclxuICAgIC8vICAgY29ycmVzcG9uZCB0byB0aGUgc2VsZWN0ZWQgcG9ydGlvbiBvZiB0ZXh0XHJcbiAgICAvLyAgIChpZiBzdGFydCA9PT0gZW5kLCBjYXJldCBpcyBhdCBnaXZlbiBwb3NpdGlvbiBhbmQgbm8gdGV4dCBpcyBzZWxlY3RlZClcclxuICAgIHB1YmxpYyBnZXRDYXJldFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KTogbnVtYmVyW10ge1xyXG4gICAgICAgIGNvbnN0IHNlbDogU2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIGxldCBjdW1MZW5ndGggPSBbMCwgMCwgc2VsLmFuY2hvck9mZnNldCwgc2VsLmZvY3VzT2Zmc2V0XTtcclxuXHJcbiAgICAgICAgaWYgKHNlbC5hbmNob3JOb2RlID09PSBlbGVtKSB7XHJcbiAgICAgICAgICAgIGN1bUxlbmd0aCA9IFtzZWwuYW5jaG9yT2Zmc2V0LCBzZWwuZm9jdXNPZmZzZXQsIHNlbC5hbmNob3JPZmZzZXQsIHNlbC5mb2N1c09mZnNldF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBub2Rlc1RvRmluZCA9IFtzZWwuYW5jaG9yTm9kZSwgc2VsLmZvY3VzTm9kZV07XHJcbiAgICAgICAgICAgIGlmICghZWxlbS5jb250YWlucyhzZWwuYW5jaG9yTm9kZSkgfHwgIWVsZW0uY29udGFpbnMoc2VsLmZvY3VzTm9kZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kOiBBcnJheTxib29sZWFuPiA9IFtmYWxzZSwgZmFsc2VdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGV3YWxrKGVsZW0sIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gbm9kZXNUb0ZpbmRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZFtpID09PSAwID8gMSA6IDBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gYWxsIGRvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQgJiYgIW5vZGUuZmlyc3RDaGlsZCAmJiBub2RlLm5vZGVUeXBlICE9PSBub2RlLkNPTU1FTlRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VtTGVuZ3RoW2ldICs9IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjdW1MZW5ndGhbMF0gKz0gc2VsLmFuY2hvck9mZnNldDtcclxuICAgICAgICAgICAgICAgIGN1bUxlbmd0aFsxXSArPSBzZWwuZm9jdXNPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1bUxlbmd0aFswXSA8PSBjdW1MZW5ndGhbMV0pXHJcbiAgICAgICAgICAgIHJldHVybiBjdW1MZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBbY3VtTGVuZ3RoWzFdLCBjdW1MZW5ndGhbMF0sIHNlbC5hbmNob3JPZmZzZXQsIHNlbC5mb2N1c09mZnNldF07XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNYXJrVXBSYW5nZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvblN0YXJ0OiBudW1iZXIsIHBvc2l0aW9uRW5kOiBudW1iZXIsIGFuY2hvclN0YXJ0OiBudW1iZXIsIGZvY3VzU3RhcnQ6IG51bWJlciwgaWQ6IHN0cmluZykgeyAgICAgIFxyXG4gICAgICAgIHRoaXMucG9zaXRpb25FbmQgPSBwb3NpdGlvbkVuZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSBwb3NpdGlvblN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5jaG9yU3RhcnQgPSBhbmNob3JTdGFydDtcclxuICAgICAgICB0aGlzLmZvY3VzU3RhcnQgPSBmb2N1c1N0YXJ0O1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICBwdWJsaWMgcG9zaXRpb25TdGFydDogbnVtYmVyO1xyXG4gICAgcHVibGljIHBvc2l0aW9uRW5kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYW5jaG9yU3RhcnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBmb2N1c1N0YXJ0OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIElzU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uRW5kICE9PSB0aGlzLnBvc2l0aW9uU3RhcnRcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBlbGVtIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0QXJlYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFNldFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50LCBwb3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gZWxlbSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgICAgIHRleHRBcmVhLnNlbGVjdGlvblN0YXJ0ID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0aW9uRW5kID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uRW5kID0gcG9zICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTWFya1VwUmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXByYW5nZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtVcFJhbmdlRWxlbWVudCBleHRlbmRzIE1hcmtVcFJhbmdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvblN0YXJ0OiBudW1iZXIsIHBvc2l0aW9uRW5kOiBudW1iZXIsIGFuY2hvclN0YXJ0OiBudW1iZXIsIGZvY3VzU3RhcnQ6IG51bWJlciwgaWQ6IHN0cmluZywgdGFnTmFtZTogc3RyaW5nLCB0ZXh0Q29udGVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb25TdGFydCwgcG9zaXRpb25FbmQsIGFuY2hvclN0YXJ0LCBmb2N1c1N0YXJ0LCBpZCk7XHJcbiAgICAgICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZTtcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdGFnTmFtZTogc3RyaW5nXHJcbiAgICBwdWJsaWMgdGV4dENvbnRlbnQ6IHN0cmluZ1xyXG59IiwiaW1wb3J0IHsgTWFya1VwRWxlbWVudCB9IGZyb20gXCIuL21hcmt1cGVsZW1lbnRcIjtcclxuZXhwb3J0IGNsYXNzIE1hcmtVcFRleHRBcmVhIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFya1VwVGV4dEFyZWEgZnVuY3Rpb24gbG9hZCcpO1xyXG4gICAgICAgIGNvbnN0IEVsZW1lbnQgPSB7XHJcbiAgICAgICAgICAgIE1hcmtVcEVsZW1lbnQ6IG5ldyBNYXJrVXBFbGVtZW50KClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAod2luZG93WydibGF6b3JIdG1sQnVpbGRlciddKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLndpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSxcclxuICAgICAgICAgICAgICAgIC4uLkVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLkVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBWYWx1ZSB7XHJcbiAgICBJbml0KGlkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCByYW5nZTogTWFya1VwUmFuZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5pbm5lckh0bWwgPSBodG1sO1xyXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcclxuICAgIH1cclxuICAgIGlubmVySHRtbDogc3RyaW5nXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcmFuZ2U6IE1hcmtVcFJhbmdlO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9