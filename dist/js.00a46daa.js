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
exports.projectView = void 0;

var feature = function feature(item) {
  return "\n    <li class=\"project-feature\">- ".concat(item, "</li>\n");
};

var technology = function technology(item) {
  return "\n    <li class=\"project-technology\">".concat(item, "</li>\n");
};

var projectView = function projectView(project) {
  return "        \n    <div class=\"project-holder\">\n        <div class=\"project-content\">\n            <h3 class=\"project-title\">".concat(project.title, "</h3>\n            <div class=\"project-desc\">\n                <div class=\"planning ").concat(project.planning ? '' : 'hide', "\">In planning phase</div> <br>\n                ").concat(project.desc, "\n                <ul class=\"project-features\">\n                    ").concat(project.features.map(function (project) {
    return feature(project);
  }).join(''), "\n                </ul>\n                <ul class=\"project-technologies\">\n                    ").concat(project.technologies.map(function (project) {
    return technology(project);
  }).join(''), "\n                </ul>\n                <div class=\"project-buttons\">\n                    <a href=\"").concat(project.sourceCode ? project.sourceCode : '', "\" target=\"_blank\" class=\"src-code project-button ").concat(project.sourceCode ? '' : 'disabled', "\" title=\"View source code\">\n                        <i class=\"fas fa-code fa-lg\"></i>\n                    </a>\n                    <a href=\"").concat(project.liveDemo ? project.liveDemo : '', "\" target=\"_blank\" class=\"live-demo project-button ").concat(project.liveDemo ? '' : 'disabled', "\" title=\"Visit site\">\n                        <i class=\"fas fa-link fa-lg\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n");
};

exports.projectView = projectView;
},{}],"js/projects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projects = void 0;
var projects = [{
  title: 'Coinland',
  cssClass: 'coinland',
  planning: false,
  desc: 'Application for displaying prices and other data of top 100 cryptocurrencies, connected to <i>coinmarketcap.com</i> API, with some features like :',
  features: ['Search with instant results', 'Portfolio & balances', 'Currency converter', 'Watchlist - favourites', 'Night mode'],
  technologies: ['HTML', 'CSS', 'Javascript', 'Node JS', 'Axios'],
  sourceCode: 'https://github.com/Ninjaneer87/coinland',
  liveDemo: 'https://ninjaneer87.github.io/coinland/'
}, {
  title: 'Share-it',
  cssClass: 'shareIt',
  planning: true,
  desc: 'Simple social network, based on some features of twitter like:',
  features: ['Profiles', 'Followers', 'Posts', 'Likes', 'Comments'],
  technologies: ['Angular 8', 'Node JS', 'MongoDB'],
  sourceCode: false,
  liveDemo: false
}];
exports.projects = projects;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _popup = require("./popup");

var _templates = require("./templates");

var _projects = require("./projects");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sections = ['about', 'skills', 'portfolio', 'contact'];
var sectionPositions = sections.reduce(function (acc, section) {
  acc[section] = document.querySelector(".".concat(section)).getBoundingClientRect().top - 200;
  return acc;
}, {});
var allAfterElements = document.querySelectorAll('.after-link');
var elementsToFadein = ['about1', 'about2', 'about3', 'skillsImage', 'skillsContent', 'skillsFamiliar', 'portfolio1', 'portfolio2', 'contactInfo']; // hide elements on load

var elementPositions = elementsToFadein.reduce(function (acc, el) {
  var element = document.querySelector(".".concat(el));
  element.classList.add('fade-animate');
  element.classList.add('transition');
  acc[el] = element.getBoundingClientRect().top - (window.innerWidth < 768 ? 400 : 500);
  return acc;
}, {}); //scroll

document.querySelector('body').addEventListener('scroll', function () {
  if (event.target.scrollTop > 0) {
    document.querySelector('header').classList.add('background');
    allAfterElements.forEach(function (element) {
      return element.classList.remove('after-scale');
    });
  } else {
    document.querySelector('header').classList.remove('background');
  }

  for (var _i = 0, _Object$entries = Object.entries(sectionPositions); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (event.target.scrollTop > value) {
      allAfterElements.forEach(function (element) {
        return element.classList.remove('after-scale');
      });
      var afterElements = document.querySelectorAll(".".concat(key, "-link .after-link ,  .menu-").concat(key, "-link .after-link"));
      afterElements.forEach(function (element) {
        return element.classList.add("after-scale");
      });
    }
  }

  for (var _i2 = 0, _Object$entries2 = Object.entries(elementPositions); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        _key = _Object$entries2$_i[0],
        _value = _Object$entries2$_i[1];

    if (_key !== 'skillsFamiliar') {
      if (event.target.scrollTop > _value) document.querySelector(".".concat(_key)).classList.remove('fade-animate');
    } else {
      if (event.target.scrollTop > _value - 150) document.querySelector(".".concat(_key)).classList.remove('fade-animate');
    }
  }

  if (event.target.scrollTop > sectionPositions.portfolio + 200) {
    document.querySelector('body').classList.add('body-bg');
  } else {
    document.querySelector('body').classList.remove('body-bg');
  }
}); //navigation

document.querySelector('.logo').addEventListener('click', function () {
  return document.querySelector('body').scrollTop = 0;
});
sections.forEach(function (section) {
  document.querySelector(".".concat(section, "-link")).addEventListener('click', function () {
    return document.querySelector(".".concat(section)).scrollIntoView();
  });
  document.querySelector(".menu-".concat(section, "-link")).addEventListener('click', function () {
    document.querySelector(".".concat(section, "-link")).click();
    document.querySelector('.menu-link').click();
  });
}); //hamburger menu

document.querySelector('.menu-link').addEventListener('click', function () {
  document.querySelector('.menu-navbar').classList.toggle('show-menu');
}); //portfolio popups

document.querySelector('.portfolio').addEventListener('click', function () {
  _projects.projects.forEach(function (project) {
    if (event.target.matches(".".concat(project.cssClass))) (0, _popup.createPopup)((0, _templates.projectView)(project));
  });
}); //close popup

document.querySelector('.popup-overlay').addEventListener('click', function () {
  if (event.target.matches('.popup-overlay, .close-popup')) (0, _popup.popup)('remove');
}); //close popup on escape key

document.addEventListener('keydown', function () {
  if (event.keyCode === 27) (0, _popup.popup)('remove');
  console.log(event.keyCode);
});
},{"./popup":"js/popup.js","./templates":"js/templates.js","./projects":"js/projects.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60396" + '/');

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