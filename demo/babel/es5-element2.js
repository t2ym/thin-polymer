'use strict';

/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
Prototype = {
  is: 'es5-element2',
  template: '\n    <style>\n    .label {\n      color: white;\n      background-color: blue;\n    }\n    </style>\n    <span class="label">{{label}}</span>\n  ',
  properties: {
    label: {
      type: String,
      value: 'label'
    }
  },
  attached: function attached() {
    this.label = this.label.toUpperCase();
  }
};