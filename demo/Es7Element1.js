/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
 */
Prototype = class Es7Element1 {
  template = `
    <span>{{label}}</span>
  `;
  properties = {
    label: {
      type: String,
      value: 'label'
    }
  };
  attached () {
    this.label = this.label.toUpperCase();
  }
}
