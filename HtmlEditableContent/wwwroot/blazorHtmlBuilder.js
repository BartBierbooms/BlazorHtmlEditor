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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vaW50ZXJvcC9zcmMvbWFya3VwZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXBlbGVtZW50Y2hhbmdlLnRzIiwid2VicGFjazovLy8uL2ludGVyb3Avc3JjL21hcmt1cGVsZW1lbnRyYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXByYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXB0ZXh0YXJlYS50cyIsIndlYnBhY2s6Ly8vLi9pbnRlcm9wL3NyYy9tYXJrdXB2YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBa0Q7QUFDbEQsOERBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RvQztBQUNkO0FBQ2M7QUFDZDtBQUk1QztJQU9JO1FBRlEsY0FBUyxHQUFnQixJQUFJLHdEQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFHekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNFQUFrQjtRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksd0RBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsRUFBVTtRQUN6QixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLG1DQUFXLEdBQWxCLFVBQW1CLEVBQVU7UUFDekIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLElBQUksd0RBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFWSxrQ0FBVSxHQUF2QixVQUF3QixFQUFVLEVBQUUsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYzs7OztnQkFDeEUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25DLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLFlBQVksRUFBRTtvQkFDZCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQzlCO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ1AsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzVFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbkM7Ozs7S0FDSjtJQUVPLDBDQUFrQixHQUExQixVQUEyQixJQUFnQjtRQUV2QyxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUM7SUFDOUMsQ0FBQztJQUVhLHFDQUFhLEdBQTNCLFVBQTRCLEVBQVU7Ozs7Ozt3QkFFNUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ25DLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM1QyxHQUFHLEdBQUcsS0FBSyxDQUFDO3dCQUdoQixpQkFBaUIsR0FBRyxLQUFLLENBQUM7NkJBQ3RCLFlBQVksRUFBWix3QkFBWTt3QkFDTixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs2QkFDcEcsU0FBUyxFQUFULHdCQUFTO3dCQUNILFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxLQUFLLElBQUksRUFDOUM7NEJBQ0ksaUJBQWlCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZJLEdBQUcsR0FBRyxJQUFJO3lCQUNiO3dCQUNELFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ25CLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTs0QkFDNUQsV0FBVyxHQUFHLEtBQUssQ0FBQzt5QkFDdkI7NkJBQ0ksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7NEJBQ3pKLFdBQVcsR0FBRyxLQUFLLENBQUM7eUJBQ3ZCO3dCQUNLLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDZCxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDbkUsSUFBSSxpQkFBaUIsRUFDckI7Z0NBQ1EsUUFBUSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0NBQ3hDLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUM3QztvQ0FDSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztpQ0FDckM7Z0NBQUEsQ0FBQztnQ0FDRixJQUFJLFFBQVEsRUFBRTtvQ0FDSixXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDbEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7b0NBQ2pDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7aUNBQzNEOzZCQUNKO3lCQUNKOzZCQUVEOzRCQUNJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ25DO3dCQUNELFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNiLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDOzt3QkFBdkMsU0FBdUMsQ0FBQzs7Ozs7O0tBR25EO0lBRU8sdUNBQWUsR0FBdkIsVUFBd0IsSUFBaUI7UUFDckMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDeEIsT0FBTyxJQUFzQixDQUFDO2FBQ2pDO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFNLE9BQU8sR0FBRyxJQUFzQixDQUFDO2dCQUN2QyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTt3QkFDM0IsT0FBTyxPQUFPLENBQUM7cUJBQ2xCO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQU0sV0FBVyxHQUFHLElBQUksd0RBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLEVBQUU7WUFDTixxSEFBcUg7WUFDckgsaURBQWlEO1lBQ2pELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsQ0FBRSxDQUFDLEVBQUU7Z0JBQzFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDaEY7aUJBQ0k7Z0JBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxRTtTQUNKO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVNLG1DQUFXLEdBQWxCLFVBQW1CLEVBQVUsRUFBRSxRQUFnQjtRQUMzQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlFLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7U0FDSjtJQUNMLENBQUM7SUFDTyxvQ0FBWSxHQUFwQixVQUFxQixLQUFZO1FBQzdCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sOENBQXNCLEdBQTlCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFWSw4Q0FBc0IsR0FBbkMsVUFBb0MsRUFBVTs7Ozs7Z0JBQ3BDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLElBQUksRUFBRTtvQkFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDOUI7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDOzs7d0NBQzdCLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDOztvQ0FBdkMsU0FBdUMsQ0FBQzs7Ozt5QkFDM0MsQ0FDSixDQUFDO29CQUVJLE1BQU0sR0FBRzt3QkFDWCxTQUFTLEVBQUUsSUFBSTt3QkFDZixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsYUFBYSxFQUFFLElBQUk7d0JBQ25CLE9BQU8sRUFBRSxJQUFJO3FCQUNoQixDQUFDO29CQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFFdkM7Ozs7S0FDSjtJQUNNLDJDQUFtQixHQUExQixVQUEyQixFQUFVO1FBQ2pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRUssMENBQWtCLEdBQXhCLFVBQXlCLEVBQVUsRUFBRSxJQUFpQjs7OztnQkFDNUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdELElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNuQyxPQUFPLEdBQUcsSUFBSSxzRUFBaUIsRUFBRSxDQUFDO29CQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksd0RBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUMzRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUM1RTs7OztLQUNKO0lBQ0ssd0NBQWdCLEdBQXRCLFVBQXVCLElBQWlCLEVBQUUsRUFBVTs7Ozs7O3dCQUVoRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUM7NEJBQzdCLHNCQUFPO3dCQUVMLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUN6RCxZQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBeEIsd0JBQXdCO3dCQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksd0RBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7O3dCQUV2RSxxQkFBTSxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7d0JBQS9GLFNBQStGLENBQUM7Ozs7d0JBRWhHLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQzs7Ozs7O0tBRzFCO0lBR00sd0NBQWdCLEdBQXZCLFVBQXdCLEVBQVU7UUFBbEMsaUJBc0JDO1FBckJHLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLEVBQUU7WUFFTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOzs7Z0NBQzNCLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOzs0QkFBckMsU0FBcUMsQ0FBQzs7OztpQkFDekMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUs7Z0JBQ25DLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7b0JBQ3ZCLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUMxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCO3dCQUNJLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzFCO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFOzs7Z0NBQzdCLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOzs0QkFBckMsU0FBcUMsQ0FBQzs7OztpQkFDekMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JQRDtBQUFBO0FBQUE7SUFBQTtJQVdBLENBQUM7SUFWRyxnQ0FBSSxHQUFKLFVBQUssRUFBVSxFQUFFLE9BQWUsRUFBRSxJQUFZLEVBQUUsV0FBd0I7UUFDcEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBS0wsd0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtJQUlJO0lBQWdCLENBQUM7SUFFVCxxQ0FBUSxHQUFoQixVQUFpQixJQUFVLEVBQUUsSUFBNkI7UUFDdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxLQUFLLEtBQUssSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQzFFLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sNkNBQWdCLEdBQXhCLFVBQXlCLElBQVU7UUFFL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDMUMsSUFBSSxFQUFFLENBQUMsZUFBZTtnQkFDbEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7O2dCQUV4QixNQUFNO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTywyQ0FBYyxHQUF0QixVQUF1QixJQUFJO1FBRXZCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsb0JBQW9CO1lBQzNELE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQW1CLElBQVUsRUFBRSxJQUFVO1FBRXJDLElBQUksc0JBQTRCLENBQUM7UUFDakMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO1lBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFDdEU7WUFDSSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUNwQztZQUNJLE9BQU8sc0JBQXNCLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN4RDthQUVEO1lBQ0ksT0FBTyxzQkFBc0IsS0FBSyxJQUFJLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBRU0sOENBQWlCLEdBQXhCLFVBQXlCLElBQWlCLEVBQUUsU0FBaUI7UUFFekQsSUFBSSxNQUFNLEdBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQUMsSUFBVTtZQUMzQixJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqSCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtvQkFDckMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2lCQUN4QztxQkFDSTtvQkFDRCxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO29CQUMxQixPQUFPLEtBQUssQ0FBQztpQkFDaEI7YUFFSjtZQUFBLENBQUM7WUFDRixNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNwQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSx3Q0FBVyxHQUFsQixVQUFtQixJQUFpQixFQUFFLEtBQWEsRUFBRSxHQUFXO1FBRTVELElBQU0sV0FBVyxHQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFNLFNBQVMsR0FBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFDLElBQVU7WUFDM0IsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLEVBQUQsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNaLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7aUJBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN0SCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDM0MsSUFBTSxXQUFXLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUN6RSxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUU7b0JBQzFCLFNBQVMsSUFBSSxVQUFVLENBQUM7b0JBQ3hCLFlBQVksSUFBSSxVQUFVO2lCQUM3QjtxQkFDSTtvQkFDRCxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUc7d0JBQzFCLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7cUJBQy9CO3lCQUNJO3dCQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7d0JBQ3pCLElBQUksWUFBWSxJQUFJLFVBQVUsRUFBRTs0QkFDNUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDdEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQzt5QkFDL0I7NkJBQUs7NEJBQ0YsWUFBWSxJQUFJLFVBQVUsQ0FBQzt5QkFDOUI7cUJBQ0o7aUJBQ0o7YUFDSjtZQUFBLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQztRQUNELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7UUFDcEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsT0FBTyxLQUFLLENBQUM7SUFHakIsQ0FBQztJQUdELDRFQUE0RTtJQUM1RSwrQ0FBK0M7SUFDL0MsMkVBQTJFO0lBQ3BFLDZDQUFnQixHQUF2QixVQUF3QixJQUFpQjtRQUNyQyxJQUFNLEdBQUcsR0FBYyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUN6QixTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRDthQUNJO1lBQ0QsSUFBTSxhQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQy9ELE9BQU8sU0FBUyxDQUFDO2lCQUNoQjtnQkFDRCxJQUFNLE9BQUssR0FBbUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLElBQUksR0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQUMsSUFBVTtvQkFDM0IsS0FBSyxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUU7d0JBQ3BCLElBQUksSUFBSSxLQUFLLGFBQVcsQ0FBQyxHQUFDLENBQUMsRUFBRTs0QkFDekIsT0FBSyxDQUFDLEdBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDaEIsSUFBSSxPQUFLLENBQUMsR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3RCLE9BQU8sS0FBSyxDQUFDLENBQUMsV0FBVzt5QkFDaEM7cUJBQ0o7b0JBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQzdFLEtBQUssR0FBQyxHQUFHLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFFOzRCQUNwQixJQUFJLENBQUMsT0FBSyxDQUFDLEdBQUMsQ0FBQyxFQUFFO2dDQUNYLFNBQVMsQ0FBQyxHQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzs2QkFDM0M7eUJBQ0o7cUJBQ0o7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQ2pDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQ25DO1NBQ0o7UUFDRCxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sU0FBUyxDQUFDO1FBRXJCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQTNLTSwrQkFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBNkszTSx5QkFBQztDQUFBO0FBL0s4Qjs7Ozs7Ozs7Ozs7OztBQ0EvQjtBQUFBO0FBQUE7SUFDSSxxQkFBWSxhQUFxQixFQUFFLFdBQW1CLEVBQUUsRUFBVTtRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBS00saUNBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLGFBQWE7SUFDbEQsQ0FBQztJQUNNLGlDQUFXLEdBQWxCLFVBQW1CLElBQWlCO1FBQ2hDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBTSxRQUFRLEdBQUcsSUFBMkIsQ0FBQztZQUM3QyxJQUFJLFFBQVEsRUFBRTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDbEM7WUFDRCxJQUFNLEtBQUssR0FBRyxJQUF3QixDQUFDO1lBQ3ZDLElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUMvQjtZQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjthQUNJO1lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUNNLGlDQUFXLEdBQWxCLFVBQW1CLElBQWlCLEVBQUUsR0FBVztRQUM3QyxJQUFJLElBQUksRUFBRTtZQUNOLElBQU0sUUFBUSxHQUFHLElBQTJCLENBQUM7WUFDN0MsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUM1QixPQUFPO2FBQ1Y7WUFDRCxJQUFNLEtBQUssR0FBRyxJQUF3QixDQUFDO1lBQ3ZDLElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2dCQUMzQixLQUFLLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDaEM7U0FDSjtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QytDO0FBQ2hEO0lBQUE7SUFrQkEsQ0FBQztJQWpCaUIsbUJBQUksR0FBbEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDNUMsSUFBTSxPQUFPLEdBQUc7WUFDWixhQUFhLEVBQUUsSUFBSSw0REFBYSxFQUFFO1NBQ3JDLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyx5QkFDcEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQzNCLE9BQU8sQ0FDYjtTQUNKO2FBQU07WUFDSCxNQUFNLENBQUMsbUJBQW1CLENBQUMsZ0JBQ3BCLE9BQU8sQ0FDYjtTQUNKO0lBQ0wsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFBO0lBQUE7SUFXQSxDQUFDO0lBVkcsMEJBQUksR0FBSixVQUFLLEVBQVUsRUFBRSxPQUFlLEVBQUUsSUFBWSxFQUFFLEtBQWtCO1FBQzlELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUtMLGtCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJibGF6b3JIdG1sQnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW50ZXJvcC9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBNYXJrVXBUZXh0QXJlYSB9IGZyb20gJy4vbWFya3VwdGV4dGFyZWEnO1xyXG5NYXJrVXBUZXh0QXJlYS5Mb2FkKCk7XHJcblxyXG4iLCJpbXBvcnQgeyBNYXJrVXBFbGVtZW50UmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXBlbGVtZW50cmFuZ2VcIjtcclxuaW1wb3J0IHsgTWFya1VwUmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXByYW5nZVwiO1xyXG5pbXBvcnQgeyBNYXJrVXBWYWx1ZUNoYW5nZSB9IGZyb20gXCIuL21hcmt1cGVsZW1lbnRjaGFuZ2VcIjtcclxuaW1wb3J0IHsgTWFya1VwVmFsdWUgfSBmcm9tIFwiLi9tYXJrdXB2YWx1ZVwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCBEb3ROZXQ6IGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBFbGVtZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVNlbGVjdGlvbjogTWFya1VwUmFuZ2U7XHJcbiAgICBwcml2YXRlIGVsZW1lbnRSYW5nZTogTWFya1VwRWxlbWVudFJhbmdlO1xyXG4gICAgcHJpdmF0ZSBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICAgIHByaXZhdGUgdW5rb3duUG9zOiBNYXJrVXBSYW5nZSA9IG5ldyBNYXJrVXBSYW5nZSgtMSwgLTEsIFwiXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJhbmdlID0gbmV3IE1hcmtVcEVsZW1lbnRSYW5nZVxyXG4gICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uID0gbmV3IE1hcmtVcFJhbmdlKC0xLCAtMSwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFbGVtZW50KGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0UG9zaXRpb24oaWQ6IHN0cmluZyk6IE1hcmtVcFJhbmdlIHtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmVsZW1lbnRSYW5nZS5nZXRDYXJldFBvc2l0aW9uKHRoaXMuZ2V0RWxlbWVudChpZCkpO1xyXG4gICAgICAgIGlmIChwb3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXJrVXBSYW5nZShwb3NbMF0sIHBvc1sxXSwgaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51bmtvd25Qb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIFNldENvbnRlbnQoaWQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCBzdGFydFBvczogbnVtYmVyLCBlbmRQb3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVFbGVtID0gdGhpcy5lZGl0YWJsZURpdk5vZGUoZWxlbSk7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlRWxlbSkge1xyXG4gICAgICAgICAgICB0aGlzLkRldGFjaE11dGF0aW9uTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgZWxlbS5mb2N1cygpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmNyZWF0ZVJhbmdlKGVkaXRhYmxlRWxlbSwgc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKHJhbmdlKTtcclxuICAgICAgICAgICAgdGhpcy5BdHRhY2hNdXRhdGlvbkxpc3RlbmVyKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJc0xhc3RFbGVtZW50Q2hpbGQoZWxlbTpIVE1MRWxlbWVudCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubGFzdEVsZW1lbnRDaGlsZCA9PT0gZWxlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIEluc2VydE5ld0xpbmUoaWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRWxlbSA9IHRoaXMuZWRpdGFibGVEaXZOb2RlKGVsZW0pO1xyXG4gICAgICAgIGxldCB0YWcgPSAnZGl2JztcclxuICAgICAgICBsZXQgaW5UaGVNaWRkbGU6IGJvb2xlYW47XHJcbiAgICAgICAgbGV0IGVuZE9mRG9jdW1lbnRJbkxpOiBib29sZWFuO1xyXG4gICAgICAgIGVuZE9mRG9jdW1lbnRJbkxpID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlRWxlbSkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZU5vZGUgPSB0aGlzLmVsZW1lbnRSYW5nZS5jcmVhdGVDdXJzb3JSYW5nZShlZGl0YWJsZUVsZW0sIHRoaXMuYWN0aXZlU2VsZWN0aW9uLnBvc2l0aW9uU3RhcnQpO1xyXG4gICAgICAgICAgICBpZiAocmFuZ2VOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVOb2RlID0gcmFuZ2VOb2RlWzFdXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlTm9kZS5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lID09PSAnTEknKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZE9mRG9jdW1lbnRJbkxpID0gKHJhbmdlTm9kZVswXS5zdGFydE9mZnNldCA9PT0gYWN0aXZlTm9kZS50ZXh0Q29udGVudC5sZW5ndGgpICYmICh0aGlzLmVsZW1lbnRSYW5nZS5Jc0xhc3RDaGlsZChlbGVtLCByYW5nZU5vZGVbMV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZyA9ICdsaSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGluVGhlTWlkZGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZU5vZGVbMF0uc3RhcnRPZmZzZXQgPT09IGFjdGl2ZU5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5UaGVNaWRkbGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJhbmdlTm9kZVswXS5zdGFydE9mZnNldCA9PT0gYWN0aXZlTm9kZS50ZXh0Q29udGVudC5sZW5ndGggLSAxICYmIGFjdGl2ZU5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKGFjdGl2ZU5vZGUudGV4dENvbnRlbnQubGVuZ3RoIC0gMSkgPT09IFwiXFx1MjAwQlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5UaGVNaWRkbGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICAgICAgICAgIG5ld1RhZy5pbm5lckhUTUwgPSBcIlxcdTIwMEJcIjtcclxuICAgICAgICAgICAgICAgIGlmICghaW5UaGVNaWRkbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVOb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG5ld1RhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZE9mRG9jdW1lbnRJbkxpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudGxpID0gYWN0aXZlTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50bGkgJiYgcGFyZW50bGkubm9kZU5hbWUgIT09ICdPTCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudGxpID0gcGFyZW50bGkucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudGxpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFeHRyYVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXh0cmFUYWcuaW5uZXJIVE1MID0gXCJcXHUyMDBCXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRsaS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgbmV3RXh0cmFUYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlTm9kZVswXS5pbnNlcnROb2RlKG5ld1RhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZU5vZGVbMF0uc2V0U3RhcnQobmV3VGFnLCAxKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlTm9kZVswXS5zZXRFbmQobmV3VGFnLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKHJhbmdlTm9kZVswXSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVsZW1Db250ZW50Q2hhbmdlZChpZCwgZWxlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlZGl0YWJsZURpdk5vZGUoZWxlbTogSFRNTEVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgaWYgKGVsZW0uaXNDb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gZWxlbS5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2Tm9kZSA9IG5vZGUgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGl2Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXZOb2RlLmlzQ29udGVudEVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXZOb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0TWFya1VwKGlkOiBzdHJpbmcpOiBNYXJrVXBWYWx1ZSB7XHJcbiAgICAgICAgY29uc3QgbWFya1VwVmFsdWUgPSBuZXcgTWFya1VwVmFsdWUoKTtcclxuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5nZXRFbGVtZW50KGlkKTtcclxuICAgICAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdHZXRNYXJrVXAgc3RhcnQvZW5kOiAnICsgdGhpcy5hY3RpdmVTZWxlY3Rpb24ucG9zaXRpb25TdGFydCArICcvJyArIHRoaXMuYWN0aXZlU2VsZWN0aW9uLnBvc2l0aW9uRW5kKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZWxlbS5pbm5lckhUTUwnICsgZWxlbS5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVTZWxlY3Rpb24ucG9zaXRpb25TdGFydCA+IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgbWFya1VwVmFsdWUuSW5pdChpZCwgZWxlbS50ZXh0Q29udGVudCwgZWxlbS5pbm5lckhUTUwsIHRoaXMuYWN0aXZlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hcmtVcFZhbHVlLkluaXQoaWQsIGVsZW0udGV4dENvbnRlbnQsIGVsZW0uaW5uZXJIVE1MLCB0aGlzLnVua293blBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcmtVcFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRQb3NpdGlvbihpZDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVFbGVtID0gdGhpcy5lZGl0YWJsZURpdk5vZGUoZWxlbSk7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlRWxlbSkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmNyZWF0ZVJhbmdlKGVkaXRhYmxlRWxlbSwgcG9zaXRpb24sIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihyYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldFNlbGVjdGlvbihyYW5nZTogUmFuZ2UpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBEZXRhY2hNdXRhdGlvbkxpc3RlbmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgQXR0YWNoTXV0YXRpb25MaXN0ZW5lcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5lbGVtQ29udGVudENoYW5nZWQoaWQsIGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWxlbSwgY29uZmlnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVtb3ZlRXZlbnRMaXN0ZW5lcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZlRXZlbnRMaXN0ZW5lcjogdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0IFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBlbGVtQ29udGVudENoYW5nZWQoaWQ6IHN0cmluZywgZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwb3NPbkNoYW5nZSA9IHRoaXMuZWxlbWVudFJhbmdlLmdldENhcmV0UG9zaXRpb24oZWxlbSk7XHJcbiAgICAgICAgaWYgKHBvc09uQ2hhbmdlICYmIHBvc09uQ2hhbmdlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkID0gbmV3IE1hcmtVcFZhbHVlQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uID0gbmV3IE1hcmtVcFJhbmdlKHBvc09uQ2hhbmdlWzBdLCBwb3NPbkNoYW5nZVsxXSwgaWQpO1xyXG4gICAgICAgICAgICBjaGFuZ2VkLkluaXQoaWQsIGVsZW0udGV4dENvbnRlbnQsIGVsZW0uaW5uZXJIVE1MLCB0aGlzLmFjdGl2ZVNlbGVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2VsZWN0aW9uQ2hhbmdlZChlbGVtOiBIVE1MRWxlbWVudCwgaWQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAoZWxlbS50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zT25DaGFuZ2UgPSB0aGlzLmVsZW1lbnRSYW5nZS5nZXRDYXJldFBvc2l0aW9uKGVsZW0pO1xyXG4gICAgICAgIGlmIChwb3NPbkNoYW5nZS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb24gPSBuZXcgTWFya1VwUmFuZ2UocG9zT25DaGFuZ2VbMF0sIHBvc09uQ2hhbmdlWzFdLCBpZCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBEb3ROZXQuaW52b2tlTWV0aG9kQXN5bmMoJ0h0bWxFZGl0YWJsZUNvbnRlbnQnLCAnU2VsZWN0aW9uQ2hhbmdlZCcsIHRoaXMuYWN0aXZlU2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIHdhcyBhbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIHB1YmxpYyBBZGRFdmVudExpc3RlbmVyKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkKGVsZW0sIGlkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSW5zZXJ0TmV3TGluZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VsZWN0aW9uQ2hhbmdlZChlbGVtLCBpZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTWFya1VwUmFuZ2UgfSBmcm9tIFwiLi9tYXJrdXByYW5nZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtVcFZhbHVlQ2hhbmdlIHtcclxuICAgIEluaXQoaWQ6IHN0cmluZywgY2hhbmdlZDogc3RyaW5nLCBodG1sOiBzdHJpbmcsIGNoYW5nZVJhbmdlOiBNYXJrVXBSYW5nZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBjaGFuZ2VkO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZEh0bWwgPSBodG1sO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUmFuZ2UgPSBjaGFuZ2VSYW5nZTtcclxuICAgIH1cclxuICAgIGNoYW5nZVJhbmdlOiBNYXJrVXBSYW5nZTtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjaGFuZ2VkOiBzdHJpbmc7XHJcbiAgICBjaGFuZ2VkSHRtbDogc3RyaW5nXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hcmtVcEVsZW1lbnRSYW5nZSB7XHJcblxyXG4gICAgc3RhdGljIHZvaWROb2RlVGFncyA9IFsnQVJFQScsICdCQVNFJywgJ0JSJywgJ0NPTCcsICdFTUJFRCcsICdIUicsICdJTUcnLCAnSU5QVVQnLCAnS0VZR0VOJywgJ0xJTksnLCAnTUVOVUlURU0nLCAnTUVUQScsICdQQVJBTScsICdTT1VSQ0UnLCAnVFJBQ0snLCAnV0JSJywgJ0JBU0VGT05UJywgJ0JHU09VTkQnLCAnRlJBTUUnLCAnSVNJTkRFWCddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBub2Rld2Fsayhub2RlOiBOb2RlLCBmdW5jOiAobm9kZTogTm9kZSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmdW5jKG5vZGUpO1xyXG4gICAgICAgIGZvciAobm9kZSA9IG5vZGUuZmlyc3RDaGlsZDsgcmVzdWx0ICE9PSBmYWxzZSAmJiBub2RlOyBub2RlID0gbm9kZS5uZXh0U2libGluZylcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ub2Rld2Fsayhub2RlLCBmdW5jKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TGFzdENoaWxkTm9kZShyb290OiBOb2RlKTogTm9kZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsYyA9IHJvb3QubGFzdENoaWxkO1xyXG4gICAgICAgIHdoaWxlIChsYyAmJiBsYy5ub2RlVHlwZSAhPT0gbGMuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgIGlmIChsYy5wcmV2aW91c1NpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICBsYyA9IGxjLnByZXZpb3VzU2libGluZztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbkNvbnRhaW5UZXh0KG5vZGUpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7IC8vaXMgYW4gZWxlbWVudCBub2RlXHJcbiAgICAgICAgICAgIHJldHVybiAhKE1hcmtVcEVsZW1lbnRSYW5nZS52b2lkTm9kZVRhZ3MuaW5kZXhPZihub2RlLm5vZGVOYW1lKSA+IDApO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0xhc3RDaGlsZChyb290OiBOb2RlLCBub2RlOiBOb2RlKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb250ZW50RWRpdGFibGVFbGVtZW50OiBOb2RlO1xyXG4gICAgICAgIGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQgPSByb290O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmdldExhc3RDaGlsZE5vZGUoY29udGVudEVkaXRhYmxlRWxlbWVudCkgJiZcclxuICAgICAgICAgICAgdGhpcy5jYW5Db250YWluVGV4dCh0aGlzLmdldExhc3RDaGlsZE5vZGUoY29udGVudEVkaXRhYmxlRWxlbWVudCkpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGVudEVkaXRhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TGFzdENoaWxkTm9kZShjb250ZW50RWRpdGFibGVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQgPT09IG5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRFZGl0YWJsZUVsZW1lbnQgPT09IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDdXJzb3JSYW5nZShlbGVtOiBIVE1MRWxlbWVudCwgbnJPZkNoYXJzOiBudW1iZXIpOiBbUmFuZ2UsIE5vZGVdXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogW05vZGUsIG51bWJlcl0gPSBbZWxlbSwgMF07XHJcbiAgICAgICAgdGhpcy5ub2Rld2FsayhlbGVtLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobnJPZkNoYXJzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbbm9kZSwgMF1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudCAmJiAhbm9kZS5maXJzdENoaWxkICYmIG5vZGUubm9kZVR5cGUgIT09IG5vZGUuQ09NTUVOVF9OT0RFICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudC5sZW5ndGggPCBuck9mQ2hhcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuck9mQ2hhcnMgLT0gbm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbbm9kZSwgbnJPZkNoYXJzXVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtub2RlLCBuck9mQ2hhcnNdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnQocmVzdWx0WzBdLCByZXN1bHRbMV0pO1xyXG4gICAgICAgIHJldHVybiBbcmFuZ2UsIHJlc3VsdFswXV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVJhbmdlKGVsZW06IEhUTUxFbGVtZW50LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFJhbmdlIHtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXNUb0ZpbmQ6IEFycmF5PE5vZGU+ID0gW251bGwsIG51bGxdO1xyXG4gICAgICAgIGNvbnN0IHNlbFBvaW50czogQXJyYXk8bnVtYmVyPiA9IFswLCAwXTtcclxuICAgICAgICBsZXQgbnJPZkNoYXJzID0gc3RhcnQ7XHJcbiAgICAgICAgbGV0IG5yT2ZDaGFyc0VuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLm5vZGV3YWxrKGVsZW0sIChub2RlOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2Rlc1RvRmluZC5ldmVyeSh2ID0+IHYpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXJ0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIG5vZGVzVG9GaW5kWzBdID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIHNlbFBvaW50c1swXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS50ZXh0Q29udGVudCAmJiAhbm9kZS5maXJzdENoaWxkICYmIG5vZGUubm9kZVR5cGUgIT09IG5vZGUuQ09NTUVOVF9OT0RFICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTGVuZ3RoID0gbm9kZS50ZXh0Q29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuclRvQ29tcGFyZSA9IChub2Rlc1RvRmluZFswXSA9PT0gbnVsbCkgPyBuck9mQ2hhcnMgOiBuck9mQ2hhcnNFbmQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobnJUb0NvbXBhcmUgPiBub2RlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnJPZkNoYXJzIC09IG5vZGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbnJPZkNoYXJzRW5kIC09IG5vZGVMZW5ndGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1RvRmluZFswXSAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMV0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxQb2ludHNbMV0gPSBuck9mQ2hhcnNFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvRmluZFswXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbFBvaW50c1swXSA9IG5yT2ZDaGFycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5yT2ZDaGFyc0VuZCA8PSBub2RlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvRmluZFsxXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxQb2ludHNbMV0gPSBuck9mQ2hhcnNFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5yT2ZDaGFyc0VuZCAtPSBub2RlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghbm9kZXNUb0ZpbmRbMF0pIHtcclxuICAgICAgICAgICAgbm9kZXNUb0ZpbmRbMF0gPSBlbGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW5vZGVzVG9GaW5kWzFdKSB7XHJcbiAgICAgICAgICAgIG5vZGVzVG9GaW5kWzFdID0gbm9kZXNUb0ZpbmRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0KG5vZGVzVG9GaW5kWzBdLCBzZWxQb2ludHNbMF0pO1xyXG4gICAgICAgIHJhbmdlLnNldEVuZChub2Rlc1RvRmluZFsxXSwgc2VsUG9pbnRzWzFdKTtcclxuICAgICAgICByZXR1cm4gcmFuZ2U7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0Q2FyZXRQb3NpdGlvbjogcmV0dXJuIFtzdGFydCwgZW5kXSBhcyBvZmZzZXRzIHRvIGVsZW0udGV4dENvbnRlbnQgdGhhdFxyXG4gICAgLy8gICBjb3JyZXNwb25kIHRvIHRoZSBzZWxlY3RlZCBwb3J0aW9uIG9mIHRleHRcclxuICAgIC8vICAgKGlmIHN0YXJ0ID09PSBlbmQsIGNhcmV0IGlzIGF0IGdpdmVuIHBvc2l0aW9uIGFuZCBubyB0ZXh0IGlzIHNlbGVjdGVkKVxyXG4gICAgcHVibGljIGdldENhcmV0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgY29uc3Qgc2VsOiBTZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IGN1bUxlbmd0aCA9IFswLCAwXTtcclxuXHJcbiAgICAgICAgaWYgKHNlbC5hbmNob3JOb2RlID09PSBlbGVtKSB7XHJcbiAgICAgICAgICAgIGN1bUxlbmd0aCA9IFtzZWwuYW5jaG9yT2Zmc2V0LCBzZWwuZm9jdXNPZmZzZXRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZXNUb0ZpbmQgPSBbc2VsLmFuY2hvck5vZGUsIHNlbC5mb2N1c05vZGVdO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW0uY29udGFpbnMoc2VsLmFuY2hvck5vZGUpIHx8ICFlbGVtLmNvbnRhaW5zKHNlbC5mb2N1c05vZGUpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZDogQXJyYXk8Ym9vbGVhbj4gPSBbZmFsc2UsIGZhbHNlXTtcclxuICAgICAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rld2FsayhlbGVtLCAobm9kZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IG5vZGVzVG9GaW5kW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmRbaSA9PT0gMCA/IDEgOiAwXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGFsbCBkb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnRleHRDb250ZW50ICYmICFub2RlLmZpcnN0Q2hpbGQgJiYgbm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5DT01NRU5UX05PREUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1bUxlbmd0aFtpXSArPSBub2RlLnRleHRDb250ZW50Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY3VtTGVuZ3RoWzBdICs9IHNlbC5hbmNob3JPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBjdW1MZW5ndGhbMV0gKz0gc2VsLmZvY3VzT2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdW1MZW5ndGhbMF0gPD0gY3VtTGVuZ3RoWzFdKVxyXG4gICAgICAgICAgICByZXR1cm4gY3VtTGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gW2N1bUxlbmd0aFsxXSwgY3VtTGVuZ3RoWzBdXTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hcmtVcFJhbmdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uU3RhcnQ6IG51bWJlciwgcG9zaXRpb25FbmQ6IG51bWJlciwgaWQ6IHN0cmluZykgeyAgICAgIFxyXG4gICAgICAgIHRoaXMucG9zaXRpb25FbmQgPSBwb3NpdGlvbkVuZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uU3RhcnQgPSBwb3NpdGlvblN0YXJ0O1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICBwdWJsaWMgcG9zaXRpb25TdGFydDogbnVtYmVyO1xyXG4gICAgcHVibGljIHBvc2l0aW9uRW5kOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIElzU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uRW5kICE9PSB0aGlzLnBvc2l0aW9uU3RhcnRcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGVsZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBlbGVtIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0QXJlYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFNldFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50LCBwb3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChlbGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gZWxlbSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgICAgIHRleHRBcmVhLnNlbGVjdGlvblN0YXJ0ID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgdGV4dEFyZWEuc2VsZWN0aW9uRW5kID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc2VsZWN0aW9uRW5kID0gcG9zICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTWFya1VwRWxlbWVudCB9IGZyb20gXCIuL21hcmt1cGVsZW1lbnRcIjtcclxuZXhwb3J0IGNsYXNzIE1hcmtVcFRleHRBcmVhIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFya1VwVGV4dEFyZWEgZnVuY3Rpb24gbG9hZCcpO1xyXG4gICAgICAgIGNvbnN0IEVsZW1lbnQgPSB7XHJcbiAgICAgICAgICAgIE1hcmtVcEVsZW1lbnQ6IG5ldyBNYXJrVXBFbGVtZW50KClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAod2luZG93WydibGF6b3JIdG1sQnVpbGRlciddKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLndpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSxcclxuICAgICAgICAgICAgICAgIC4uLkVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snYmxhem9ySHRtbEJ1aWxkZXInXSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLkVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hcmtVcFJhbmdlIH0gZnJvbSBcIi4vbWFya3VwcmFuZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXJrVXBWYWx1ZSB7XHJcbiAgICBJbml0KGlkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaHRtbDogc3RyaW5nLCByYW5nZTogTWFya1VwUmFuZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5pbm5lckh0bWwgPSBodG1sO1xyXG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcclxuICAgIH1cclxuICAgIGlubmVySHRtbDogc3RyaW5nXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcmFuZ2U6IE1hcmtVcFJhbmdlO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9