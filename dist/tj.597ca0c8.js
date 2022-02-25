// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"T92x":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style');
var txtArea = document.querySelector('.txtArea');
var n = 0;
var str = "/*\u6211\u662F\u4E00\u4E2A\u524D\u7AEF\u5C0F\u767D\n*\u63A5\u4E0B\u6765\u8981\u5C55\u793A\u4E00\u4E0B\u6211\u7684\u5B66\u4E60\u6210\u679C\n*\u4E3A\u5927\u5BB6\u5236\u4F5C\u4E00\u4E2A\u592A\u6781\n**/\n#dome{\n    outline:1px solid #999;\n    transform:translateX(-50%);\n    border-radius:50%;\n    width:300px;\n    height:300px;\n}\n/*\n*\u6613\u7ECF\u7CFB\u8F9E\uFF1A\u201C\u662F\u6545\u6613\u6709\u592A\u6781\uFF0C\u662F\u751F\u4E24\u4EEA\u201D\u3002\n*\u4E24\u4EEA\u5373\u4E3A\u592A\u6781\u7684\u9634\u3001\u9633\u4E8C\u4EEA\u3002\n**/\n#dome{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\n*\u592A\u6781\u9634\u9633\u4E24\u5206\u800C\u5408\u548C\u3002\n*\u592A\u6781\uFF0C\u5916\u8868\u73B0\u4E3A\u9634\u9633\u5408\u548C\u4E4B\u5927\u4E00\uFF0C\u5185\u8868\u73B0\u4E3A\u9634\u9633\u4E24\u5206\u3002\n*\u4E00\u5206\u4E3A\u4E8C\u53C8\u5408\u4E8C\u800C\u4E00\u3002\n*\u4E24\u4E2A\u5143\u7D20\u4E4B\u95F4\u76F8\u4E92\u77DB\u76FE\u53C8\u76F8\u4E92\u4F9D\u5B58\uFF0C\u987B\u81FE\u4E0D\u53EF\u5206\u79BB\u3002\n*\u5408\u5219\u751F\uFF0C\u6563\u5219\u6B7B\u3002\n**/\n#dome::before{\n    left:50%;\n    top:0;\n    border-radius:50%;\n    width:150px;\n    height:150px;\n    transform:translateX(-50%);\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)\n}\n#dome::after{\n    left:50%;\n    bottom:0;\n    border-radius:50%;\n    width:150px;\n    height:150px;\n    transform:translateX(-50%);\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n";
var str2 = '';

function realize() {
  setTimeout(function () {
    if (str[n] === '\n') {
      str2 += '<br>';
    } else if (str[n] === ' ') {
      str2 += '&nbsp';
    } else {
      str2 += str[n];
    }

    n += 1;
    html.innerHTML = str2;
    style.innerHTML = str.substring(0, n);

    if (n < str.length) {
      realize();
    }
  }, 30);
  txtArea.scrollTo(0, 8888);
}

setTimeout(function () {
  realize();
}, 1000);
},{}]},{},["T92x"], null)
//# sourceMappingURL=tj.597ca0c8.js.map