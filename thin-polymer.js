/*
@license https://github.com/t2ym/thin-polymer/blob/master/LICENSE.md
Copyright (c) 2016, Tetsuya Mori <t2y3141592@gmail.com>. All rights reserved.
*/
(function () {
  function UncamelCase (name) {
    return name
      // insert a hyphen between lower & upper
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z0-9])/, '$1 $2$3')
      // replace spaces with hyphens
      .replace(/ /g, '-')
      // lowercase
      .toLowerCase();
  }
  function functionName (func) {
    return typeof func === 'function' ? 
            func.toString().replace(/^[\S\s]*?function\s*/, "").replace(/[\s\(\/][\S\s]+$/, "") :
            undefined;
  }
  if (!window.Prototype) {
    Object.defineProperty(window, 'Prototype', {
      get: function () {
        return function (id) {
          return this.PolymerElements ? this.PolymerElements[id] : undefined;
        };
      },
      set: function (proto) {
        /*
        Patterns:
          a) template id {}
          b) template id {is}
          c) document.template id {is}
          d) template {is}
          e) {is}
          f) class Is {template}
          g) {is,template}
        */
        var id;
        var classId;
        var obj;
        var name = proto.name || functionName(proto);
        var current; // currentScript
        var template = null;
        var previous; // previousSibling template
        var cousin; // dom5.serialize output support

        current = Polymer.Settings.useNativeImports ? document.currentScript
                                                    : document._currentScript;

        previous = current.previousSibling;
        while (previous && !previous.tagName) {
          previous = previous.previousSibling;
        }
        if (previous && previous.tagName !== 'template'.toUpperCase()) {
          previous = null;
        }
        if (!previous) {
          // search for cousin template
          if (current.parentNode.tagName === 'body'.toUpperCase()) {
            previous = current.parentNode.previousSibling;
            while (previous && !previous.tagName) {
              previous = previous.previousSibling;
            }
            if (previous && previous.tagName.toLowerCase() === 'head') {
              for (var i = 0; i < previous.childNodes.length; i++) {
                if (previous.childNodes[i].tagName === 'template'.toUpperCase()) {
                  cousin = previous.childNodes[i];
                  break;
                }
              }
            }
          }
          if (cousin) {
            previous = cousin;
          }
          else {
            previous = null;
          }
        }

        if (!proto.is && (!name || name === 'class' || name === 'Prototype')) {
          if (previous) {
            id = previous.id;
            if (id) {
              // Pattern a)
              template = previous;
              proto.is = id;
            }
          }
        }
        else {
          if (proto.is) {
            id = proto.is;
          }
          else if (typeof proto === 'function' && name) {
            // ES6 class
            id = UncamelCase(name);
            classId = name;
            obj = new proto();
            if (obj.template) {
              // Pattern f)
              template = document.createElement('template');
              template.innerHTML = obj.template;
              var children = Array.prototype.filter.call(template.content.childNodes, 
                              function (node) { return node.tagName; });
              var topChild = children.length === 1 ? children[0] : undefined;
              if (topChild && topChild.tagName.toLowerCase() === 'template') {
                template = topChild;
              }
            }
            obj.is = id;
            Object.getOwnPropertyNames(obj.__proto__).forEach(function (prop) {
              obj[prop] = obj.__proto__[prop];
            });
            proto = obj;
          }
          if (!template && proto.template) {
            // Pattern g)
            template = document.createElement('template');
            template.innerHTML = proto.template;
          }
          if (!template) {
            // Pattern b), c)
            template = current.ownerDocument
                        .querySelector('template[id=' + id + ']') || 
                       document.querySelector('template[id=' + id + ']');
          }
          if (!template && previous && !previous.id) {
            // Pattern d)
            template = previous;
            template.id = id;
          }
          else {
            // Pattern e)
          }
        }

        if (!id) {
          throw 'Custom element name is not defined';
        }

        // register dom-module
        if (template) {
          var domModule = document.createElement('dom-module');
          var assetUrl = new URL(current.baseURI || window.currentImport.baseURI);
          domModule.appendChild(template);
          domModule.setAttribute('assetpath', 
                                  assetUrl.pathname.indexOf('.vulcanized.') < 0 ?
                                    assetUrl.pathname :
                                      template.hasAttribute('assetpath') ? 
                                      template.getAttribute('assetpath') : 
                                      assetUrl.pathname);
          domModule.register(id);
        }

        // register Polymer element
        this.PolymerElements = this.PolymerElements || {};
        classId = classId || id.split('-').map(function (word) {
          return word[0].toUpperCase() + word.substr(1);
        }).join('');
        var PrototypeGeneratorName = 'Polymer'; // to pass jshint
        if (this.PolymerElements[id]) {
          console.warn('Discarding duplicate regitration of custom element ' + id);
        }
        else {
          this.PolymerElements[id] = window[PrototypeGeneratorName](proto); // to pass strip
          this.PolymerElements[classId] = this.PolymerElements[id];
        }
        return this.PolymerElements[id];
      }
    });
  }
})();
