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
                if (posOnChange && posOnChange.length === 2) {
                    changed = new _markupelementchange__WEBPACK_IMPORTED_MODULE_3__["MarkUpValueChange"]();
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
                            if (!(posOnChange.length === 2)) return [3 /*break*/, 4];
                            mrkUpRangeElement = new _markuprangeelement__WEBPACK_IMPORTED_MODULE_2__["MarkUpRangeElement"](posOnChange[0], posOnChange[1], id, elementClicked.tagName, elementClicked.textContent);
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
    function MarkUpRangeElement(positionStart, positionEnd, id, tagName, textContent) {
        var _this = _super.call(this, positionStart, positionEnd, id) || this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXBlbGVtZW50Y2hhbmdlLnRzIiwid2VicGFjazovLy8uL2ludGVyb3Avc3JjL21hcmt1cGVsZW1lbnRyYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXByYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXByYW5nZWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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QUFDLENBQUM7UUFDNUMsSUFBTSxPQUFPLEdBQUc7WUFDWixhQUFhLEVBQUUsSUFBSSw0REFBYSxFQUFFO1NBQ3JDLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyx5QkFDcEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQzNCLE9BQU8sQ0FDYjtTQUNKO2FBQU07WUFDSCxNQUFNLENBQUMsbUJBQW1CLENBQUMsZ0JBQ3BCLE9BQU8sQ0FDYjtTQUNKO0lBQ0wsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFBO0lBQUE7SUFXQSxDQUFDO0lBVkcsMEJBQUksR0FBSixVQUFLLEVBQVUsRUFBRSxPQUFlLEVBQUUsSUFBWSxFQUFFLEtBQWtCO1FBQzlELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUtMLGtCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJibGF6b3JIdG1sQnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW50ZXJvcC9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBNYXJrVXBUZXh0QXJlYSB9IGZyb20gJy4vbWFya3VwdGV4dGFyZWEnO1xyXG5NYXJrVXBUZXh0QXJlYS5Mb2FkKCk7XHJcblxyXG4iLCJpbXBvcnQgeyBNYXJrVXBFbGVtZW50UmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXBlbGVtZW50cmFuZ2VcIjtcclxuaW1wb3J0IHsgTWFya1VwUmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXByYW5nZVwiO1xyXG5pbXBvcnQgeyBNYXJrVXBSYW5nZUVsZW1lbnQgfSBmcm9tIFwiLi9tYXJrdXByYW5nZWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgTWFya1VwVmFsdWVDaGFuZ2UgfSBmcm9tIFwiLi9tYXJrdXBlbGVtZW50Y2hhbmdlXCI7XHJcbmltcG9ydCB7IE1hcmtVcFZhbHVlIH0gZnJvbSBcIi4vbWFya3VwdmFsdWVcIjtcclxuXHJcbmRlY2xhcmUgY29uc3QgRG90TmV0OiBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya1VwRWxlbWVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmVTZWxlY3Rpb246IE1hcmtVcFJhbmdlO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmFuZ2U6IE1hcmtVcEVsZW1lbnRSYW5nZTtcclxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIHVua293blBvczogTWFya1VwUmFuZ2UgPSBuZXcgTWFya1VwUmFuZ2UoLTEsIC0xLCBcIlwiKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSYW5nZSA9IG5ldyBNYXJrVXBFbGVtZW50UmFuZ2VcclxuICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbiA9IG5ldyBNYXJrVXBSYW5nZSgtMSwgLTEsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWxlbWVudChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFBvc2l0aW9uKGlkOiBzdHJpbmcpOiBNYXJrVXBSYW5nZSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5lbGVtZW50UmFuZ2UuZ2V0Q2FyZXRQb3NpdGlvbih0aGlzLmdldEVsZW1lbnQoaWQpKTtcclxuICAgICAgICBpZiAocG9zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFya1VwUmFuZ2UocG9zWzBdLCBwb3NbMV0sIGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5rb3duUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBTZXRDb250ZW50KGlkOiBzdHJpbmcsIGh0bWw6IHN0cmluZywgc3RhcnRQb3M6IG51bWJlciwgZW5kUG9zOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRWxlbSA9IHRoaXMuZWRpdGFibGVEaXZOb2RlKGVsZW0pO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUVsZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5EZXRhY2hNdXRhdGlvbkxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgICAgIGVsZW0uZm9jdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5jcmVhdGVSYW5nZShlZGl0YWJsZUVsZW0sIHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihyYW5nZSk7XHJcbiAgICAgICAgICAgIHRoaXMuQXR0YWNoTXV0YXRpb25MaXN0ZW5lcihpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSXNMYXN0RWxlbWVudENoaWxkKGVsZW06SFRNTEVsZW1lbnQpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50Lmxhc3RFbGVtZW50Q2hpbGQgPT09IGVsZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBJbnNlcnROZXdMaW5lKGlkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBjb25zdCBlZGl0YWJsZUVsZW0gPSB0aGlzLmVkaXRhYmxlRGl2Tm9kZShlbGVtKTtcclxuICAgICAgICBsZXQgdGFnID0gJ2Rpdic7XHJcbiAgICAgICAgbGV0IGluVGhlTWlkZGxlOiBib29sZWFuO1xyXG4gICAgICAgIGxldCBlbmRPZkRvY3VtZW50SW5MaTogYm9vbGVhbjtcclxuICAgICAgICBlbmRPZkRvY3VtZW50SW5MaSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2VOb2RlID0gdGhpcy5lbGVtZW50UmFuZ2UuY3JlYXRlQ3Vyc29yUmFuZ2UoZWRpdGFibGVFbGVtLCB0aGlzLmFjdGl2ZVNlbGVjdGlvbi5wb3NpdGlvblN0YXJ0KTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlTm9kZSA9IHJhbmdlTm9kZVsxXVxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZU5vZGUucGFyZW50RWxlbWVudC5ub2RlTmFtZSA9PT0gJ0xJJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRPZkRvY3VtZW50SW5MaSA9IChyYW5nZU5vZGVbMF0uc3RhcnRPZmZzZXQgPT09IGFjdGl2ZU5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSAmJiAodGhpcy5lbGVtZW50UmFuZ2UuSXNMYXN0Q2hpbGQoZWxlbSwgcmFuZ2VOb2RlWzFdKSlcclxuICAgICAgICAgICAgICAgICAgICB0YWcgPSAnbGknXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpblRoZU1pZGRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VOb2RlWzBdLnN0YXJ0T2Zmc2V0ID09PSBhY3RpdmVOb2RlLnRleHRDb250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluVGhlTWlkZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyYW5nZU5vZGVbMF0uc3RhcnRPZmZzZXQgPT09IGFjdGl2ZU5vZGUudGV4dENvbnRlbnQubGVuZ3RoIC0gMSAmJiBhY3RpdmVOb2RlLnRleHRDb250ZW50LnN1YnN0cmluZyhhY3RpdmVOb2RlLnRleHRDb250ZW50Lmxlbmd0aCAtIDEpID09PSBcIlxcdTIwMEJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGluVGhlTWlkZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgICAgICAgICBuZXdUYWcuaW5uZXJIVE1MID0gXCJcXHUyMDBCXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluVGhlTWlkZGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBuZXdUYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmRPZkRvY3VtZW50SW5MaSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnRsaSA9IGFjdGl2ZU5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudGxpICYmIHBhcmVudGxpLm5vZGVOYW1lICE9PSAnT0wnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRsaSA9IHBhcmVudGxpLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRsaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RXh0cmFUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V4dHJhVGFnLmlubmVySFRNTCA9IFwiXFx1MjAwQlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50bGkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG5ld0V4dHJhVGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uaW5zZXJ0Tm9kZShuZXdUYWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmFuZ2VOb2RlWzBdLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VOb2RlWzBdLnNldFN0YXJ0KG5ld1RhZywgMSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uc2V0RW5kKG5ld1RhZywgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihyYW5nZU5vZGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgZWxlbS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbGVtQ29udGVudENoYW5nZWQoaWQsIGVsZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZWRpdGFibGVEaXZOb2RlKGVsZW06IEhUTUxFbGVtZW50KTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtLmlzQ29udGVudEVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGVsZW0uY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdk5vZGUgPSBub2RlIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpdk5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGl2Tm9kZS5pc0NvbnRlbnRFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGl2Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE1hcmtVcChpZDogc3RyaW5nKTogTWFya1VwVmFsdWUge1xyXG4gICAgICAgIGNvbnN0IG1hcmtVcFZhbHVlID0gbmV3IE1hcmtVcFZhbHVlKCk7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnR2V0TWFya1VwIHN0YXJ0L2VuZDogJyArIHRoaXMuYWN0aXZlU2VsZWN0aW9uLnBvc2l0aW9uU3RhcnQgKyAnLycgKyB0aGlzLmFjdGl2ZVNlbGVjdGlvbi5wb3NpdGlvbkVuZCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2VsZW0uaW5uZXJIVE1MJyArIGVsZW0uaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2VsZWN0aW9uLnBvc2l0aW9uU3RhcnQgPiAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG1hcmtVcFZhbHVlLkluaXQoaWQsIGVsZW0udGV4dENvbnRlbnQsIGVsZW0uaW5uZXJIVE1MLCB0aGlzLmFjdGl2ZVNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrVXBWYWx1ZS5Jbml0KGlkLCBlbGVtLnRleHRDb250ZW50LCBlbGVtLmlubmVySFRNTCwgdGhpcy51bmtvd25Qb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXJrVXBWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0UG9zaXRpb24oaWQ6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRWxlbSA9IHRoaXMuZWRpdGFibGVEaXZOb2RlKGVsZW0pO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5jcmVhdGVSYW5nZShlZGl0YWJsZUVsZW0sIHBvc2l0aW9uLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24ocmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRTZWxlY3Rpb24ocmFuZ2U6IFJhbmdlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgRGV0YWNoTXV0YXRpb25MaXN0ZW5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIEF0dGFjaE11dGF0aW9uTGlzdGVuZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZWxlbUNvbnRlbnRDaGFuZ2VkKGlkLCBlbGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGVsZW0sIGNvbmZpZyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlbW92ZUV2ZW50TGlzdGVuZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92ZUV2ZW50TGlzdGVuZXI6IHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVsZW1Db250ZW50Q2hhbmdlZChpZDogc3RyaW5nLCBlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHBvc09uQ2hhbmdlID0gdGhpcy5lbGVtZW50UmFuZ2UuZ2V0Q2FyZXRQb3NpdGlvbihlbGVtKTtcclxuICAgICAgICBpZiAocG9zT25DaGFuZ2UgJiYgcG9zT25DaGFuZ2UubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZWQgPSBuZXcgTWFya1VwVmFsdWVDaGFuZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb24gPSBuZXcgTWFya1VwUmFuZ2UocG9zT25DaGFuZ2VbMF0sIHBvc09uQ2hhbmdlWzFdLCBpZCk7XHJcbiAgICAgICAgICAgIGNoYW5nZWQuSW5pdChpZCwgZWxlbS50ZXh0Q29udGVudCwgZWxlbS5pbm5lckhUTUwsIHRoaXMuYWN0aXZlU2VsZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBzZWxlY3Rpb25DaGFuZ2VkKGVsZW06IEhUTUxFbGVtZW50LCBpZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlbGVtLnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NPbkNoYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmdldENhcmV0UG9zaXRpb24oZWxlbSk7XHJcbiAgICAgICAgaWYgKHBvc09uQ2hhbmdlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbiA9IG5ldyBNYXJrVXBSYW5nZShwb3NPbkNoYW5nZVswXSwgcG9zT25DaGFuZ2VbMV0sIGlkKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IERvdE5ldC5pbnZva2VNZXRob2RBc3luYygnSHRtbEVkaXRhYmxlQ29udGVudCcsICdTZWxlY3Rpb25DaGFuZ2VkJywgdGhpcy5hY3RpdmVTZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgd2FzIGFuIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgcHVibGljIEFkZEV2ZW50TGlzdGVuZXIoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNlbGVjdGlvbkNoYW5nZWQoZWxlbSwgaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlICNpZCBvZiBjbGlja2VkIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkTm9kZSA9IChlLnRhcmdldCBhcyBOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlja2VkTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Q2xpY2tlZDogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tlZE5vZGUubm9kZVR5cGUgPT09IGNsaWNrZWROb2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudENsaWNrZWQgPSBjbGlja2VkTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNsaWNrZWROb2RlLm5vZGVUeXBlID09PSBjbGlja2VkTm9kZS5FTEVNRU5UX05PREUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDbGlja2VkID0gY2xpY2tlZE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRDbGlja2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NPbkNoYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmdldENhcmV0UG9zaXRpb24oZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zT25DaGFuZ2UubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXJrVXBSYW5nZUVsZW1lbnQgPSBuZXcgTWFya1VwUmFuZ2VFbGVtZW50KHBvc09uQ2hhbmdlWzBdLCBwb3NPbkNoYW5nZVsxXSwgaWQsIGVsZW1lbnRDbGlja2VkLnRhZ05hbWUsIGVsZW1lbnRDbGlja2VkLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBEb3ROZXQuaW52b2tlTWV0aG9kQXN5bmMoJ0h0bWxFZGl0YWJsZUNvbnRlbnQnLCAnT25Eb3VibGVDbGlja0VsZW1lbnQnLCBtcmtVcFJhbmdlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgd2FzIGFuIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkluc2VydE5ld0xpbmUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNlbGVjdGlvbkNoYW5nZWQoZWxlbSwgaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBWYWx1ZUNoYW5nZSB7XHJcbiAgICBJbml0KGlkOiBzdHJpbmcsIGNoYW5nZWQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCBjaGFuZ2VSYW5nZTogTWFya1VwUmFuZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gY2hhbmdlZDtcclxuICAgICAgICB0aGlzLmNoYW5nZWRIdG1sID0gaHRtbDtcclxuICAgICAgICB0aGlzLmNoYW5nZVJhbmdlID0gY2hhbmdlUmFuZ2U7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VSYW5nZTogTWFya1VwUmFuZ2U7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY2hhbmdlZDogc3RyaW5nO1xyXG4gICAgY2hhbmdlZEh0bWw6IHN0cmluZ1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNYXJrVXBFbGVtZW50UmFuZ2Uge1xyXG5cclxuICAgIHN0YXRpYyB2b2lkTm9kZVRhZ3MgPSBbJ0FSRUEnLCAnQkFTRScsICdCUicsICdDT0wnLCAnRU1CRUQnLCAnSFInLCAnSU1HJywgJ0lOUFVUJywgJ0tFWUdFTicsICdMSU5LJywgJ01FTlVJVEVNJywgJ01FVEEnLCAnUEFSQU0nLCAnU09VUkNFJywgJ1RSQUNLJywgJ1dCUicsICdCQVNFRk9OVCcsICdCR1NPVU5EJywgJ0ZSQU1FJywgJ0lTSU5ERVgnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgbm9kZXdhbGsobm9kZTogTm9kZSwgZnVuYzogKG5vZGU6IE5vZGUpID0+IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZnVuYyhub2RlKTtcclxuICAgICAgICBmb3IgKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7IHJlc3VsdCAhPT0gZmFsc2UgJiYgbm9kZTsgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmcpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubm9kZXdhbGsobm9kZSwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExhc3RDaGlsZE5vZGUocm9vdDogTm9kZSk6IE5vZGVcclxuICAgIHtcclxuICAgICAgICBsZXQgbGMgPSByb290Lmxhc3RDaGlsZDtcclxuICAgICAgICB3aGlsZSAobGMgJiYgbGMubm9kZVR5cGUgIT09IGxjLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgICAgICBpZiAobGMucHJldmlvdXNTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgbGMgPSBsYy5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5Db250YWluVGV4dChub2RlKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkgeyAvL2lzIGFuIGVsZW1lbnQgbm9kZVxyXG4gICAgICAgICAgICByZXR1cm4gIShNYXJrVXBFbGVtZW50UmFuZ2Uudm9pZE5vZGVUYWdzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgPiAwKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNMYXN0Q2hpbGQocm9vdDogTm9kZSwgbm9kZTogTm9kZSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgY29udGVudEVkaXRhYmxlRWxlbWVudDogTm9kZTtcclxuICAgICAgICBjb250ZW50RWRpdGFibGVFbGVtZW50ID0gcm9vdDtcclxuICAgICAgICB3aGlsZSAodGhpcy5nZXRMYXN0Q2hpbGROb2RlKGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQpICYmXHJcbiAgICAgICAgICAgIHRoaXMuY2FuQ29udGFpblRleHQodGhpcy5nZXRMYXN0Q2hpbGROb2RlKGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQpKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQgPSB0aGlzLmdldExhc3RDaGlsZE5vZGUoY29udGVudEVkaXRhYmxlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50RWRpdGFibGVFbGVtZW50ID09PSBub2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50RWRpdGFibGVFbGVtZW50ID09PSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQ3Vyc29yUmFuZ2UoZWxlbTogSFRNTEVsZW1lbnQsIG5yT2ZDaGFyczogbnVtYmVyKTogW1JhbmdlLCBOb2RlXVxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IFtOb2RlLCBudW1iZXJdID0gW2VsZW0sIDBdO1xyXG4gICAgICAgIHRoaXMubm9kZXdhbGsoZWxlbSwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5yT2ZDaGFycyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW25vZGUsIDBdXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQgJiYgIW5vZGUuZmlyc3RDaGlsZCAmJiBub2RlLm5vZGVUeXBlICE9PSBub2RlLkNPTU1FTlRfTk9ERSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQubGVuZ3RoIDwgbnJPZkNoYXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnJPZkNoYXJzIC09IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW25vZGUsIG5yT2ZDaGFyc11cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXN1bHQgPSBbbm9kZSwgbnJPZkNoYXJzXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0KHJlc3VsdFswXSwgcmVzdWx0WzFdKTtcclxuICAgICAgICByZXR1cm4gW3JhbmdlLCByZXN1bHRbMF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVSYW5nZShlbGVtOiBIVE1MRWxlbWVudCwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBSYW5nZSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGVzVG9GaW5kOiBBcnJheTxOb2RlPiA9IFtudWxsLCBudWxsXTtcclxuICAgICAgICBjb25zdCBzZWxQb2ludHM6IEFycmF5PG51bWJlcj4gPSBbMCwgMF07XHJcbiAgICAgICAgbGV0IG5yT2ZDaGFycyA9IHN0YXJ0O1xyXG4gICAgICAgIGxldCBuck9mQ2hhcnNFbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5ub2Rld2FsayhlbGVtLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZXNUb0ZpbmQuZXZlcnkodiA9PiB2KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBub2Rlc1RvRmluZFswXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBzZWxQb2ludHNbMF0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUudGV4dENvbnRlbnQgJiYgIW5vZGUuZmlyc3RDaGlsZCAmJiBub2RlLm5vZGVUeXBlICE9PSBub2RlLkNPTU1FTlRfTk9ERSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxlbmd0aCA9IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbnJUb0NvbXBhcmUgPSAobm9kZXNUb0ZpbmRbMF0gPT09IG51bGwpID8gbnJPZkNoYXJzIDogbnJPZkNoYXJzRW5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5yVG9Db21wYXJlID4gbm9kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5yT2ZDaGFycyAtPSBub2RlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIG5yT2ZDaGFyc0VuZCAtPSBub2RlTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNUb0ZpbmRbMF0gIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9GaW5kWzFdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsUG9pbnRzWzFdID0gbnJPZkNoYXJzRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMF0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxQb2ludHNbMF0gPSBuck9mQ2hhcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuck9mQ2hhcnNFbmQgPD0gbm9kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMV0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsUG9pbnRzWzFdID0gbnJPZkNoYXJzRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuck9mQ2hhcnNFbmQgLT0gbm9kZUxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIW5vZGVzVG9GaW5kWzBdKSB7XHJcbiAgICAgICAgICAgIG5vZGVzVG9GaW5kWzBdID0gZWxlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFub2Rlc1RvRmluZFsxXSkge1xyXG4gICAgICAgICAgICBub2Rlc1RvRmluZFsxXSA9IG5vZGVzVG9GaW5kWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICAgICAgICByYW5nZS5zZXRTdGFydChub2Rlc1RvRmluZFswXSwgc2VsUG9pbnRzWzBdKTtcclxuICAgICAgICByYW5nZS5zZXRFbmQobm9kZXNUb0ZpbmRbMV0sIHNlbFBvaW50c1sxXSk7XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldENhcmV0UG9zaXRpb246IHJldHVybiBbc3RhcnQsIGVuZF0gYXMgb2Zmc2V0cyB0byBlbGVtLnRleHRDb250ZW50IHRoYXRcclxuICAgIC8vICAgY29ycmVzcG9uZCB0byB0aGUgc2VsZWN0ZWQgcG9ydGlvbiBvZiB0ZXh0XHJcbiAgICAvLyAgIChpZiBzdGFydCA9PT0gZW5kLCBjYXJldCBpcyBhdCBnaXZlbiBwb3NpdGlvbiBhbmQgbm8gdGV4dCBpcyBzZWxlY3RlZClcclxuICAgIHB1YmxpYyBnZXRDYXJldFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KTogbnVtYmVyW10ge1xyXG4gICAgICAgIGNvbnN0IHNlbDogU2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIGxldCBjdW1MZW5ndGggPSBbMCwgMF07XHJcblxyXG4gICAgICAgIGlmIChzZWwuYW5jaG9yTm9kZSA9PT0gZWxlbSkge1xyXG4gICAgICAgICAgICBjdW1MZW5ndGggPSBbc2VsLmFuY2hvck9mZnNldCwgc2VsLmZvY3VzT2Zmc2V0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzVG9GaW5kID0gW3NlbC5hbmNob3JOb2RlLCBzZWwuZm9jdXNOb2RlXTtcclxuICAgICAgICAgICAgaWYgKCFlbGVtLmNvbnRhaW5zKHNlbC5hbmNob3JOb2RlKSB8fCAhZWxlbS5jb250YWlucyhzZWwuZm9jdXNOb2RlKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmQ6IEFycmF5PGJvb2xlYW4+ID0gW2ZhbHNlLCBmYWxzZV07XHJcbiAgICAgICAgICAgICAgICBsZXQgaTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXdhbGsoZWxlbSwgKG5vZGU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSBub2Rlc1RvRmluZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kW2kgPT09IDAgPyAxIDogMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBhbGwgZG9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudCAmJiAhbm9kZS5maXJzdENoaWxkICYmIG5vZGUubm9kZVR5cGUgIT09IG5vZGUuQ09NTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm91bmRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdW1MZW5ndGhbaV0gKz0gbm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGN1bUxlbmd0aFswXSArPSBzZWwuYW5jaG9yT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgY3VtTGVuZ3RoWzFdICs9IHNlbC5mb2N1c09mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VtTGVuZ3RoWzBdIDw9IGN1bUxlbmd0aFsxXSlcclxuICAgICAgICAgICAgcmV0dXJuIGN1bUxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtjdW1MZW5ndGhbMV0sIGN1bUxlbmd0aFswXV07XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNYXJrVXBSYW5nZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvblN0YXJ0OiBudW1iZXIsIHBvc2l0aW9uRW5kOiBudW1iZXIsIGlkOiBzdHJpbmcpIHsgICAgICBcclxuICAgICAgICB0aGlzLnBvc2l0aW9uRW5kID0gcG9zaXRpb25FbmQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblN0YXJ0ID0gcG9zaXRpb25TdGFydDtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgcHVibGljIHBvc2l0aW9uU3RhcnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBwb3NpdGlvbkVuZDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBJc1NlbGVjdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkVuZCAhPT0gdGhpcy5wb3NpdGlvblN0YXJ0XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gZWxlbSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGVsZW0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCwgcG9zOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGVsZW0gYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRleHRBcmVhKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3Rpb25TdGFydCA9IHBvcztcclxuICAgICAgICAgICAgICAgIHRleHRBcmVhLnNlbGVjdGlvbkVuZCA9IHBvcztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGVsZW0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IHBvcztcclxuICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IHBvcyArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBSYW5nZUVsZW1lbnQgZXh0ZW5kcyBNYXJrVXBSYW5nZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb25TdGFydDogbnVtYmVyLCBwb3NpdGlvbkVuZDogbnVtYmVyLCBpZDogc3RyaW5nLCB0YWdOYW1lOiBzdHJpbmcsIHRleHRDb250ZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvblN0YXJ0LCBwb3NpdGlvbkVuZCwgaWQpO1xyXG4gICAgICAgIHRoaXMudGFnTmFtZSA9IHRhZ05hbWU7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRhZ05hbWU6IHN0cmluZ1xyXG4gICAgcHVibGljIHRleHRDb250ZW50OiBzdHJpbmdcclxufSIsImltcG9ydCB7IE1hcmtVcEVsZW1lbnQgfSBmcm9tIFwiLi9tYXJrdXBlbGVtZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBUZXh0QXJlYSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmtVcFRleHRBcmVhIGZ1bmN0aW9uIGxvYWQnKTtcclxuICAgICAgICBjb25zdCBFbGVtZW50ID0ge1xyXG4gICAgICAgICAgICBNYXJrVXBFbGVtZW50OiBuZXcgTWFya1VwRWxlbWVudCgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2JsYXpvckh0bWxCdWlsZGVyJ10gPSB7XHJcbiAgICAgICAgICAgICAgICAuLi53aW5kb3dbJ2JsYXpvckh0bWxCdWlsZGVyJ10sXHJcbiAgICAgICAgICAgICAgICAuLi5FbGVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2JsYXpvckh0bWxCdWlsZGVyJ10gPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5FbGVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYXJrVXBSYW5nZSB9IGZyb20gXCIuL21hcmt1cHJhbmdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya1VwVmFsdWUge1xyXG4gICAgSW5pdChpZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGh0bWw6IHN0cmluZywgcmFuZ2U6IE1hcmtVcFJhbmdlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuaW5uZXJIdG1sID0gaHRtbDtcclxuICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XHJcbiAgICB9XHJcbiAgICBpbm5lckh0bWw6IHN0cmluZ1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHJhbmdlOiBNYXJrVXBSYW5nZTtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==