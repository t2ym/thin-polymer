'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
Prototype = function () {
  function Es7Element1() {
    _classCallCheck(this, Es7Element1);

    this.template = '\n    <span>{{label}}</span>\n  ';
    this.properties = {
      label: {
        type: String,
        value: 'label'
      }
    };
  }

  _createClass(Es7Element1, [{
    key: 'attached',
    value: function attached() {
      this.label = this.label.toUpperCase();
    }
  }]);

  return Es7Element1;
}();

