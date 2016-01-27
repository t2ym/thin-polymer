'use strict';

/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
Prototype = {
  is: 'es5-element1',
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