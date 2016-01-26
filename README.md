# thin-polymer

Thin Polymer syntax for ES6 (experimental)

## Install

```
    bower install --save thin-polymer
```

## Import

```html
    <link rel="import" href="/path/to/bower_components/thin-polymer/thin-polymer.html">
```

## Thinner Syntax

### Pure ES5

Omitted: `<dom-module>` and `Polymer()`

```html
    <template id="es5-element1">
      <span>{{label}}</span>
    </template>
    <script>
    Prototype = {
      is: 'es5-element1',
      properties: {
        label: {
          type: String,
          value: 'label'
        }
      },
      attached: function () {
        this.label = this.label.toUpperCase();
      }
    }
    </script>
```

### Partial ES6

JavaScript only. Template as a property in a ES6 template string. 

```javascript
    Prototype = {
      is: 'es5-element2',
      template: `
        <span>{{label}}</span>
      `,
      properties: {
        label: {
          type: String,
          value: 'label'
        }
      },
      attached () {
        this.label = this.label.toUpperCase();
      }
    }
```

### ES6 class with beforeRegister

ES6 class with beforeRegister() callback.

```html
    <template id="es6-element1">
      <span>{{label}}</span>
    </template>
    <script>
    Prototype = class Es6Element1 {
      beforeRegister () {
        this.is = 'es6-element1';
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
    </script>
```

### ES6 class with constructor

JavaScript only. ES6 class with initialization at constructor.
Automatic un-camel-casing from class name.

```javascript
    // es6-element2.js
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
```

### ES7 class property

JavaScript only. ES7 class properties for initialization.

```javascript
    // Es7Element2.js - Babel tranpilation required
    Prototype = class Es7Element2 {
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
```

### Equivalent ES5 Polymer syntax

```html
    <dom-module id="es5-element">
      <template>
        <span>{{label}}</span>
      </template>
      <script>
      Polymer({
        is: 'es5-element',
        properties: {
          label: {
            type: String,
            value: 'label'
          }
        },
        attached: function () {
          this.label = this.label.toUpperCase();
        }
      });
      </script>
    </dom-module>
```

## Compatibility

- Release 0.0.2 Compatibility Table

| Browser          | Pure ES5   | Partial ES6 | ES6 class | ES6 constructor | ES7 property |
|:-----------------|:-----------|:------------|:----------|:----------------|:-------------|
| Chrome 48        | Run        | Run         | Run       | Run             | Run          |
| Microsoft Edge   | Run        | Run         | Not Run   | Not Run         | Not Run      |
| IE 11            | Not Run    | Not Run     | Not Run   | Not Run         | Not Run      |
| Firefox 43       | Run        | Run         | Not Run   | Not Run         | Not Run      |
| Safari           | N/A        | N/A         | N/A       | N/A             | N/A          |   
| Mobile Chrome 48 | Run        | Run         | Run       | Run             | Run          |

## License

[BSD-2-Clause](https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md)
