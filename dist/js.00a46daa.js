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
})({"js/popup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popup = exports.createPopup = void 0;

var createPopup = function createPopup(htmlContent) {
  document.querySelector('.popup-div-content').innerHTML = htmlContent;
  popup('add');
};

exports.createPopup = createPopup;

var popup = function popup(action) {
  document.querySelector('.popup-overlay').classList[action]('show-popup');
  document.querySelector('body').classList[action]('no-scroll');

  if (action === 'add') {
    document.querySelector('body').classList[action]('perspective');
  } else {
    setTimeout(function () {
      document.querySelector('body').classList[action]('perspective');
    }, 150);
  }
};

exports.popup = popup;
},{}],"js/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuNavbarHTML = exports.shareItHTML = exports.coinlandHTML = void 0;
var coinlandHTML = "\n    <div class=\"project-holder\">\n        <div class=\"project-content\">\n            <h3 class=\"project-title\">Coinland</h3>\n            <div class=\"project-desc\">\n                Application for displaying prices and other data of top 100 cryptocurrencies, connected to <i>coinmarketcap.com</i> API, with some features like :\n                <ul class=\"project-features\">\n                    <li class=\"project-feature\">- Quick search with listed results</li>\n                    <li class=\"project-feature\">- Portfolio with calculated balances</li>\n                    <li class=\"project-feature\">- Currency converter</li>\n                    <li class=\"project-feature\">- Watchlist - favourites</li>\n                    <li class=\"project-feature\">- Night mode</li>\n                </ul>\n                <ul class=\"project-technologies\">\n                    <li class=\"project-technology\">HTML</li>\n                    <li class=\"project-technology\">CSS</li>\n                    <li class=\"project-technology\">JavaScript</li>\n                    <li class=\"project-technology\">Node JS</li>\n                    <li class=\"project-technology\">Axios</li>\n                </ul>\n                <div class=\"project-buttons\">\n                    <a href=\"https://github.com/Ninjaneer87/coinland\" target=\"_blank\" class=\"src-code project-button\" title=\"View source code\">\n                        <i class=\"fas fa-code fa-lg\"></i>\n                    </a>\n                    <a href=\"https://ninjaneer87.github.io/coinland/\" target=\"_blank\" class=\"live-demo project-button\" title=\"Visit site\">\n                        <i class=\"fas fa-link fa-lg\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n";
exports.coinlandHTML = coinlandHTML;
var shareItHTML = "        \n    <div class=\"project-holder\">\n        <div class=\"project-content\">\n            <h3 class=\"project-title\">Share-it</h3>\n            <div class=\"project-desc\">\n                <div class=\"planning\">In planning phase</div> <br>\n                Simple social network, based on some features of twitter like:\n                <ul class=\"project-features\">\n                    <li class=\"project-feature\">- Profiles</li>\n                    <li class=\"project-feature\">- Followers</li>\n                    <li class=\"project-feature\">- Posts</li>\n                    <li class=\"project-feature\">- Likes</li>\n                    <li class=\"project-feature\">- Comments</li>\n                </ul>\n                <ul class=\"project-technologies\">\n                    <li class=\"project-technology\">Angular 8</li>\n                    <li class=\"project-technology\">Node JS</li>\n                    <li class=\"project-technology\">MongoDB</li>\n                </ul>\n                <div class=\"project-buttons\">\n                    <a href=\"\" target=\"_blank\" class=\"src-code project-button disabled\" title=\"View source code\">\n                        <i class=\"fas fa-code fa-lg\"></i>\n                    </a>\n                    <a href=\"\" target=\"_blank\" class=\"live-demo project-button disabled\" title=\"Visit site\">\n                        <i class=\"fas fa-link fa-lg\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n";
exports.shareItHTML = shareItHTML;
var menuNavbarHTML = "\n    <ul class=\"menu-navbar\">\n        <li class=\"nav-item\"><a class=\"menu-nav-link about-link\" href=\"javascript:;\">ABOUT ME</a></li>\n        <li class=\"nav-item\"><a class=\"menu-nav-link skills-link\" href=\"javascript:;\">SKILLS</a></li>\n        <li class=\"nav-item\"><a class=\"menu-nav-link portfolio-link\" href=\"javascript:;\">PORTFOLIO</a></li>\n        <li class=\"nav-item\"><a class=\"menu-nav-link contact-link\" href=\"javascript:;\">CONTACT</a></li>\n        <li class=\"nav-item\"><a class=\"menu-nav-link resume-link\" href=\"javascript:;\">RESUME</a></li>\n    </ul>\n";
exports.menuNavbarHTML = menuNavbarHTML;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _popup = require("./popup");

var _templates = require("./templates");

document.querySelector('body').addEventListener('scroll', function () {
  if (event.target.scrollTop > 0) {
    document.querySelector('header').classList.add('background');
  } else {
    document.querySelector('header').classList.remove('background');
  }
});
document.querySelector('.logo').addEventListener('click', function () {
  return document.querySelector('body').scrollTop = 0;
});
var sections = ['about', 'skills', 'portfolio', 'contact'];
sections.forEach(function (section) {
  document.querySelector(".".concat(section, "-link")).addEventListener('click', function () {
    return document.querySelector(".".concat(section)).scrollIntoView();
  });
  document.querySelector(".menu-".concat(section, "-link")).addEventListener('click', function () {
    document.querySelector(".".concat(section, "-link")).click();
    document.querySelector('.menu-link').click();
  });
});
document.querySelector('.portfolio').addEventListener('click', function () {
  if (event.target.matches('.coinland-image')) {
    (0, _popup.createPopup)(_templates.coinlandHTML);
  }

  if (event.target.matches('.share-it-image')) {
    (0, _popup.createPopup)(_templates.shareItHTML);
  }
});
document.querySelector('.menu-link').addEventListener('click', function () {
  document.querySelector('.menu-navbar-container').classList.toggle('show-menu');
});
document.querySelector('.popup-overlay').addEventListener('click', function () {
  if (event.target.matches('.popup-overlay, .close-popup')) (0, _popup.popup)('remove');
}); // document.querySelector('.resume-link').addEventListener('click', () => {
//     console.log('successful: ', coinlandHTML)
//     createPopup(coinlandHTML);
// })
// let element = document.querySelector('.paralax');
// let rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
// window.addEventListener('scroll', () => {
//     console.log(window.scrollY)
// })
// let element = document.querySelector('.third');
// let rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
// window.addEventListener('scroll', () => {
//     if(window.scrollY > rect.top-element.offsetHeight) {
//         console.log('bem ti mater');
//         element.style.background = 'white';
//     }
// })
},{"./popup":"js/popup.js","./templates":"js/templates.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58811" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map