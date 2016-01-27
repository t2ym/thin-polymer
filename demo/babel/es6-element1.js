/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Prototype = function () {
  function Prototype() {
    _classCallCheck(this, Prototype);
  }

  _createClass(Prototype, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'es6-element1';
      this.properties = {
        label: {
          type: String,
          value: 'label'
        }
      };
    }
  }, {
    key: 'attached',
    value: function attached() {
      this.label = this.label.toUpperCase();
    }
  }]);

  return Prototype;
}();