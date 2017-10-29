(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("hint.css"), require("es6-string-html-template"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "hint.css", "es6-string-html-template"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("react"), require("hint.css"), require("es6-string-html-template"));
	else
		root["index"] = factory(root["react"], root["hint.css"], root["es6-string-html-template"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(2);

	var _annotator = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Paragraph = function (_React$Component) {
	  _inherits(Paragraph, _React$Component);

	  function Paragraph(props) {
	    _classCallCheck(this, Paragraph);

	    var _this = _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).call(this, props));

	    _this.isCentered = function () {
	      return _this.props.format && _this.props.format.centered;
	    };

	    _this.render = function () {
	      return _react2.default.createElement('div', {
	        ref: function ref(input) {
	          _this.contents = input;
	        },
	        dangerouslySetInnerHTML: { __html: _this.state.text } });
	    };

	    _this.state = {
	      text: _this.props.paragraph.text
	    };
	    return _this;
	  }

	  _createClass(Paragraph, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.props.setContentRef) {
	        this.props.setContentRef(this.contents);
	      }
	      var text = (0, _annotator.annotateText)({
	        text: this.props.paragraph.text,
	        annotations: this.props.paragraph.annotations,
	        tooltipRenderer: this.props.tooltipRenderer
	      });
	      this.setState({ text: text }, function () {
	        if (_this2.props.onTextChange) {
	          _this2.props.onTextChange(_this2.state.text);
	        }
	      });
	    }
	  }]);

	  return Paragraph;
	}(_react2.default.Component);

	exports.default = Paragraph;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.annotateText = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _es6StringHtmlTemplate = __webpack_require__(4);

	var link = function link(_ref) {
	  var explanation = _ref.explanation,
	      highlighted = _ref.highlighted,
	      hintType = _ref.hintType,
	      className = _ref.className,
	      index = _ref.index;

	  className = className !== undefined ? className : "annotation";
	  hintType = hintType !== undefined ? hintType : "info";
	  if (explanation !== undefined) {
	    className = className + " hint--bottom hint--medium hint--" + hintType + " hint--rounded";
	  }
	  return "<a href=\"javascript: void(0)\" class=\"" + className + "\" aria-label=\"" + explanation + "\" idx=" + index + ">" + highlighted + "</a>";
	};

	var annotateText = function annotateText(_ref2) {
	  var text = _ref2.text,
	      annotations = _ref2.annotations,
	      tooltipRenderer = _ref2.tooltipRenderer;

	  var offset = 0;
	  var result = "";
	  var transformation = function transformation(annotation, index) {
	    var beforeHtml = (0, _es6StringHtmlTemplate.escape)(text.substr(offset, annotation.offset - offset));
	    var linkHtml = link(_extends({}, tooltipRenderer(text, annotation), {
	      index: index
	    }));
	    result += beforeHtml;
	    result += linkHtml;
	    offset = annotation.offset + annotation.length; // next!
	  };
	  annotations.forEach(transformation);
	  result += (0, _es6StringHtmlTemplate.escape)(text.slice(offset));
	  return result;
	};

	exports.annotateText = annotateText;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ])
});
;