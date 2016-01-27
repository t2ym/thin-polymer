'use strict';

window.addEventListener('WebComponentsReady', function () {
  var demoSnippets = document.querySelectorAll('demo-snippet');
  Array.prototype.forEach.call(demoSnippets, function (demo) {
    var script = Polymer.dom(demo).queryDistributedElements('script[type="text/markdown"]')[0];

    if (!script) {
      return;
    }

    var snippet = script.innerHTML;
    var match = snippet.match(/\n([ ]*)/);
    if (match && match[1]) {
      var lines = snippet.split(/\n/);
      snippet = lines.map(function (line) {
        if (line.indexOf(match[1]) === 0) {
          line = line.slice(match[1].length);
        }
        return line;
      }).join('\n');
    }

    snippet = '```\n' + snippet + '\n```';
    snippet = snippet.replace(/=""/g, '');

    demo._markdown = snippet;
  });
});
/*
      var demoSnippet = document.querySelector('demo-snippet#demo-snippet');
      demoSnippet.addEventListener('markdown-changed', function (e) {
        demoSnippet._markdown = e.detail.markdown;
      });
*/