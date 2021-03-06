/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Prototype = function () {
  function Es7Element2() {
    _classCallCheck(this, Es7Element2);

    this.template = '\n    <style>\n    .label {\n      background-color: blue;\n      color: white;\n    }\n    </style>\n    <span class="label">{{label}}</span>\n  ';
    this.properties = {
      label: {
        type: String,
        value: 'label'
      }
    };
  }

  _createClass(Es7Element2, [{
    key: 'attached',
    value: function attached() {
      this.label = this.label.toUpperCase();
    }
  }]);

  return Es7Element2;
}();