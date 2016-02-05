# thin-polymer

Thin Polymer syntax for ES6 (experimental)

[Demo](https://t2ym.github.io/thin-polymer/components/thin-polymer/demo/) on GitHub Pages

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

Omit `<dom-module>` and `Polymer()`

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

ES6 template string for `template` property and ES6 shorthand method.

```html
    <script>
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
    </script>
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

ES6 class with initialization at constructor.
Automatic un-camel-casing from class name.

```html
    <script>
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
    </script>
```

### ES7 class property

ES7 class properties for initialization.

```html
    <script>
    // Babel tranpilation required
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
    </script>
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

- Release 0.0.3 Compatibility Table

Babel Transpilation:

| Browser          | Pure ES5   | Partial ES6 | ES6 class | ES6 constructor | ES7 property |
|:-----------------|:-----------|:------------|:----------|:----------------|:-------------|
| Chrome 48        | Run        | Run         | Run       | Run             | Run          |
| Microsoft Edge   | Run        | Run         | Run       | Run             | Run          |
| IE 11            | Run        | Run         | Run       | Run             | Run          |
| Firefox 43       | Run        | Run         | Run       | Run             | Run          |
| Safari           | N/A        | N/A         | N/A       | N/A             | N/A          |   
| Mobile Chrome 48 | Run        | Run         | Run       | Run             | Run          |

Native:

| Browser          | Pure ES5   | Partial ES6 | ES6 class | ES6 constructor | ES7 property |
|:-----------------|:-----------|:------------|:----------|:----------------|:-------------|
| Chrome 48        | Run        | Run         | Run       | Run             | Not Run      |
| Microsoft Edge   | Run        | Run         | Not Run   | Not Run         | Not Run      |
| IE 11            | Run        | Not Run     | Not Run   | Not Run         | Not Run      |
| Firefox 43       | Run        | Run         | Not Run   | Not Run         | Not Run      |
| Safari           | N/A        | N/A         | N/A       | N/A             | N/A          |   
| Mobile Chrome 48 | Run        | Run         | Run       | Run             | Not Run      |

- Importing

Browsers with HTML Import polyfill, that is, non-Chrome browsers, have to wrap 
`<script src=""></script>` by HTML import so that thin-polymer is loaded before
the scripts.

## Demo Transpilation by Babel

```
    npm install && bower install
    # Source demo/native/; Dest demo/babel/
    gulp demo
```

## License

[BSD-2-Clause](https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md)
