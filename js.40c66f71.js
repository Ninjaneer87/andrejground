parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NcgF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.popup=exports.createPopup=void 0;var e=function(e){document.querySelector(".popup-div-content").innerHTML=e,o("add")};exports.createPopup=e;var o=function(e){document.querySelector(".popup-overlay").classList[e]("show-popup"),document.querySelector("body").classList[e]("no-scroll"),"add"===e?document.querySelector("body").classList[e]("perspective"):setTimeout(function(){document.querySelector("body").classList[e]("perspective")},150)};exports.popup=o;
},{}],"NesY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shareItHTML=exports.coinlandHTML=void 0;var e='\n    <div class="project-holder">\n        <div class="project-content">\n            <h3 class="project-title">Coinland</h3>\n            <div class="project-desc">\n                Application for displaying prices and other data of top 100 cryptocurrencies, connected to <i>coinmarketcap.com</i> API, with some features like :\n                <ul class="project-features">\n                    <li class="project-feature">- Quick search with listed results</li>\n                    <li class="project-feature">- Portfolio with calculated balances</li>\n                    <li class="project-feature">- Currency converter</li>\n                    <li class="project-feature">- Watchlist - favourites</li>\n                    <li class="project-feature">- Night mode</li>\n                </ul>\n                <ul class="project-technologies">\n                    <li class="project-technology">HTML</li>\n                    <li class="project-technology">CSS</li>\n                    <li class="project-technology">JavaScript</li>\n                    <li class="project-technology">Node JS</li>\n                    <li class="project-technology">Axios</li>\n                </ul>\n                <div class="project-buttons">\n                    <a href="https://github.com/Ninjaneer87/coinland" target="_blank" class="src-code project-button" title="View source code">\n                        <i class="fas fa-code fa-lg"></i>\n                    </a>\n                    <a href="https://ninjaneer87.github.io/coinland/" target="_blank" class="live-demo project-button" title="Visit site">\n                        <i class="fas fa-link fa-lg"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n';exports.coinlandHTML=e;var t='        \n    <div class="project-holder">\n        <div class="project-content">\n            <h3 class="project-title">Share-it</h3>\n            <div class="project-desc">\n                <div class="planning">In planning phase</div> <br>\n                Simple social network, based on some features of twitter like:\n                <ul class="project-features">\n                    <li class="project-feature">- Profiles</li>\n                    <li class="project-feature">- Followers</li>\n                    <li class="project-feature">- Posts</li>\n                    <li class="project-feature">- Likes</li>\n                    <li class="project-feature">- Comments</li>\n                </ul>\n                <ul class="project-technologies">\n                    <li class="project-technology">Angular 8</li>\n                    <li class="project-technology">Node JS</li>\n                    <li class="project-technology">MongoDB</li>\n                </ul>\n                <div class="project-buttons">\n                    <a href="" target="_blank" class="src-code project-button disabled" title="View source code">\n                        <i class="fas fa-code fa-lg"></i>\n                    </a>\n                    <a href="" target="_blank" class="live-demo project-button disabled" title="Visit site">\n                        <i class="fas fa-link fa-lg"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n';exports.shareItHTML=t;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./popup"),t=require("./templates"),o=document.querySelector(".about").getBoundingClientRect().top-200,c=document.querySelector(".skills").getBoundingClientRect().top-200,n=document.querySelector(".portfolio").getBoundingClientRect().top-200,r=document.querySelector(".contact").getBoundingClientRect().top-200,l=[[o,"about"],[c,"skills"],[n,"portfolio"],[r,"contact"]],u=document.querySelectorAll(".after-link");document.querySelector("body").addEventListener("scroll",function(){event.target.scrollTop>0?(document.querySelector("header").classList.add("background"),u.forEach(function(e){return e.classList.remove("after-scale")})):document.querySelector("header").classList.remove("background"),l.forEach(function(e){event.target.scrollTop>e[0]&&(u.forEach(function(e){return e.classList.remove("after-scale")}),document.querySelectorAll(".".concat(e[1],"-link .after-link ,  .menu-").concat(e[1],"-link .after-link")).forEach(function(e){return e.classList.add("after-scale")}))})}),document.querySelector(".logo").addEventListener("click",function(){return document.querySelector("body").scrollTop=0});var a=["about","skills","portfolio","contact"];a.forEach(function(e){document.querySelector(".".concat(e,"-link")).addEventListener("click",function(){return document.querySelector(".".concat(e)).scrollIntoView()}),document.querySelector(".menu-".concat(e,"-link")).addEventListener("click",function(){document.querySelector(".".concat(e,"-link")).click(),document.querySelector(".menu-link").click()})}),document.querySelector(".menu-link").addEventListener("click",function(){document.querySelector(".menu-navbar-container").classList.toggle("show-menu")}),document.querySelector(".portfolio").addEventListener("click",function(){event.target.matches(".coinland-image")&&(0,e.createPopup)(t.coinlandHTML),event.target.matches(".share-it-image")&&(0,e.createPopup)(t.shareItHTML)}),document.querySelector(".popup-overlay").addEventListener("click",function(){event.target.matches(".popup-overlay, .close-popup")&&(0,e.popup)("remove")}),document.addEventListener("keydown",function(){27===event.keyCode&&(0,e.popup)("remove"),console.log(event.keyCode)});
},{"./popup":"NcgF","./templates":"NesY"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.40c66f71.js.map