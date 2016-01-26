/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
'use strict';

Prototype = class Es6Element2 {
  constructor () {
    this.template = `
      <span>{{label}}</span>
    `;
    this.properties = {
      label: {
        type: String,
        value: 'label'
      }
    };
  }
  attached () {
    this.label = this.label.toUpperCase();
  }
}
