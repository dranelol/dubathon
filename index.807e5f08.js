// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4ayTC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1ff325b0807e5f08";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kkiZQ":[function(require,module,exports) {
//import { Chart } from 'chart.js/auto';
//import 'chartjs-adapter-luxon';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "activateChart", ()=>activateChart);
parcelHelpers.export(exports, "topEmotes", ()=>topEmotes);
parcelHelpers.export(exports, "topEmotesYEB", ()=>topEmotesYEB);
parcelHelpers.export(exports, "topEmotesAlluux", ()=>topEmotesAlluux);
parcelHelpers.export(exports, "topChatters", ()=>topChatters);
parcelHelpers.export(exports, "topChattersAlluux", ()=>topChattersAlluux);
parcelHelpers.export(exports, "topChattersYEB", ()=>topChattersYEB);
parcelHelpers.export(exports, "maiyaDanceUsage", ()=>maiyaDanceUsage);
parcelHelpers.export(exports, "timerDurationCountdown", ()=>timerDurationCountdown);
parcelHelpers.export(exports, "subsPerDay", ()=>subsPerDay);
parcelHelpers.export(exports, "subsPerDaySplit", ()=>subsPerDaySplit);
parcelHelpers.export(exports, "bitsPerDay", ()=>bitsPerDay);
parcelHelpers.export(exports, "bitsPerDaySplit", ()=>bitsPerDaySplit);
parcelHelpers.export(exports, "moneyPerDay", ()=>moneyPerDay);
parcelHelpers.export(exports, "moneyPerDaySplit", ()=>moneyPerDaySplit);
var _chartjsPluginZoom = require("chartjs-plugin-zoom");
var _chartjsPluginZoomDefault = parcelHelpers.interopDefault(_chartjsPluginZoom);
var _chartjsPluginAnnotation = require("chartjs-plugin-annotation");
var _chartjsPluginAnnotationDefault = parcelHelpers.interopDefault(_chartjsPluginAnnotation);
//import DownsamplePlugin from 'chartjs-plugin-downsample';
let data = require("../data/release/dubathon_data.json");
let maiyaData = require("../data/release/maiyaDanceOverTime.json");
let chatData = require("../data/release/chatters.json");
let emoteData = require("../data/release/emojiUse.json");
let chatDataAlluux = require("../data/release/chattersAlluux.json");
let emoteDataAlluux = require("../data/release/emojiUseAlluux.json");
let chatDataYEB = require("../data/release/chattersYEB.json");
let emoteDataYEB = require("../data/release/emojiUseYEB.json");
window.activateChart = function(chartIdx) {
    activateChart(chartIdx);
};
Chart.register((0, _chartjsPluginZoomDefault.default), (0, _chartjsPluginAnnotationDefault.default));
Chart.defaults.font.family = "futura";
var currentChart = null;
// stream started at November 22, 2022, 08:44:42 PM EST (Tuesday), or 20:44:42
// stream ended at December 01, 2022, 08:02:33 PM EST (Thursday), or 20:02:33
// at stream start, there were 4 subs and 0:47:18 on the clock, or 2838 seconds
// the first data entry starts at 2022-11-22 19:48:20; rolling back to this, stream timer would have been 56:22 more, 3382, minus the 4 subs (120) so 3262
// timer starting at first data entry gives 6100 seconds or 1:41:40
const originalTimerMS = 6100000;
const firstDateEventMS = 1669168100000;
function activateChart(chartIdx) {
    if (currentChart != null) currentChart.destroy();
    switch(chartIdx){
        case 0:
            subsPerDay();
            break;
        case 1:
            bitsPerDay();
            break;
        case 2:
            moneyPerDay();
            break;
        case 3:
            subsPerDaySplit();
            break;
        case 4:
            bitsPerDaySplit();
            break;
        case 5:
            moneyPerDaySplit();
            break;
        case 6:
            timerDurationCountdown();
            break;
        case 7:
            maiyaDanceUsage();
            break;
        case 8:
            topChatters();
            break;
        case 9:
            topChattersAlluux();
            break;
        case 10:
            topChattersYEB();
            break;
        case 11:
            topEmotes();
            break;
        case 12:
            topEmotesAlluux();
            break;
        case 13:
            topEmotesYEB();
            break;
    }
}
async function topEmotes() {
    let emotesNames = [];
    let emotesCount = [];
    let emotesLinks = [];
    let images = [];
    for(let i = 0; i < emoteData.length; i++){
        const dataLine = emoteData[i];
        emotesCount.push(dataLine.count);
        emotesNames.push(dataLine.emote);
        emotesLinks.push(dataLine.link);
    }
    for(let j = 0; j < emotesLinks.length; j++){
        var image = new Image();
        image.src = emotesLinks[j];
        images.push(image);
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: emotesNames,
            datasets: [
                {
                    label: "Top Emotes",
                    data: emotesCount
                }
            ]
        },
        plugins: [
            {
                id: "bar-images",
                afterDraw: (chart, args, options)=>{
                    const { ctx  } = chart;
                    var xAxis = chart.scales["x"];
                    var yAxis = chart.scales["y"];
                    xAxis.ticks.forEach((value, index)=>{
                        var x = xAxis.getPixelForTick(index);
                        var y = yAxis.getPixelForValue(emotesCount[index]);
                        ctx.drawImage(images[index], x - 12, y - 36);
                    });
                }
            }
        ],
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 20000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "xy"
                    }
                }
            }
        }
    });
}
async function topEmotesYEB() {
    let emotesNamesYEB = [];
    let emotesCountYEB = [];
    let emotesLinksYEB = [];
    let images = [];
    for(let i = 0; i < emoteDataYEB.length; i++){
        const dataLine = emoteDataYEB[i];
        emotesCountYEB.push(dataLine.count);
        emotesNamesYEB.push(dataLine.emote);
        emotesLinksYEB.push(dataLine.link);
    }
    for(let j = 0; j < emotesLinksYEB.length; j++){
        var image = new Image();
        image.src = emotesLinksYEB[j];
        images.push(image);
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: emotesNamesYEB,
            datasets: [
                {
                    label: "Top Emotes, YEB",
                    data: emotesCountYEB
                }
            ]
        },
        plugins: [
            {
                id: "bar-images",
                afterDraw: (chart, args, options)=>{
                    const { ctx  } = chart;
                    var xAxis = chart.scales["x"];
                    var yAxis = chart.scales["y"];
                    xAxis.ticks.forEach((value, index)=>{
                        var x = xAxis.getPixelForTick(index);
                        var y = yAxis.getPixelForValue(emotesCountYEB[index]);
                        ctx.drawImage(images[index], x - 12, y - 36);
                    });
                }
            }
        ],
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 20000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "xy"
                    }
                }
            }
        }
    });
}
async function topEmotesAlluux() {
    let emotesNamesAlluux = [];
    let emotesCountAlluux = [];
    let emotesLinksAlluux = [];
    let images = [];
    for(let i = 0; i < emoteDataAlluux.length; i++){
        const dataLine = emoteDataAlluux[i];
        emotesCountAlluux.push(dataLine.count);
        emotesNamesAlluux.push(dataLine.emote);
        emotesLinksAlluux.push(dataLine.link);
    }
    for(let j = 0; j < emotesLinksAlluux.length; j++){
        var image = new Image();
        image.src = emotesLinksAlluux[j];
        image.height = 28;
        image.width = 28;
        images.push(image);
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: emotesNamesAlluux,
            datasets: [
                {
                    label: "Top Emotes, Alluux",
                    data: emotesCountAlluux
                }
            ]
        },
        plugins: [
            {
                id: "bar-images",
                afterDraw: (chart, args, options)=>{
                    const { ctx  } = chart;
                    var xAxis = chart.scales["x"];
                    var yAxis = chart.scales["y"];
                    xAxis.ticks.forEach((value, index)=>{
                        var x = xAxis.getPixelForTick(index);
                        var y = yAxis.getPixelForValue(emotesCountAlluux[index]);
                        ctx.drawImage(images[index], x - 12, y - 36);
                    });
                }
            }
        ],
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 20000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "xy"
                    }
                }
            }
        }
    });
}
async function topChatters() {
    let chatterData = [];
    let chatterNames = [];
    for(let i = 0; i < chatData.length; i++){
        const dataLine = chatData[i];
        chatterNames.push(dataLine.chatter);
        chatterData.push(dataLine.count);
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: chatterNames,
            datasets: [
                {
                    label: "Top Chatters",
                    data: chatterData
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 140000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function topChattersAlluux() {
    let chatterDataAlluux = [];
    let chatterNamesAlluux = [];
    for(let i = 0; i < chatDataAlluux.length; i++){
        const dataLine = chatDataAlluux[i];
        chatterNamesAlluux.push(dataLine.chatter);
        chatterDataAlluux.push(dataLine.count);
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: chatterNamesAlluux,
            datasets: [
                {
                    label: "Top Chatters, Alluux",
                    data: chatterDataAlluux
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 140000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function topChattersYEB() {
    let chatterDataYEB = [];
    let chatterNamesYEB = [];
    for(let i = 0; i < chatDataYEB.length; i++){
        const dataLine = chatDataYEB[i];
        chatterNamesYEB.push(dataLine.chatter);
        chatterDataYEB.push(dataLine.count);
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: chatterNamesYEB,
            datasets: [
                {
                    label: "Top Chatters, YEB",
                    data: chatterDataYEB
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 140000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function maiyaDanceUsage() {
    let chartData = [];
    let tempDateCollection = [];
    let maiyaCount = 0;
    let skips = 0;
    let skipsBetween = 10;
    for(let i = 0; i < maiyaData.length; i++){
        const dataLine = maiyaData[i];
        const emojiCount = dataLine.count;
        if (emojiCount == "0") continue;
        const dateMS = dataLine.timeMS;
        maiyaCount += emojiCount;
        if (skips >= skipsBetween) {
            tempDateCollection.push(dateMS);
            chartData.push(maiyaCount);
            skips = 0;
        } else skips++;
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "line",
        data: {
            labels: tempDateCollection,
            datasets: [
                {
                    label: "MaiyaDance over Time",
                    data: chartData.map((item)=>{
                        return item;
                    })
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        x: {
                            min: 1669190944147,
                            max: 1669942956583
                        },
                        y: {
                            min: 0,
                            max: 20000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "xy"
                    }
                }
            },
            scales: {
                x: {
                    type: "time",
                    time: {
                        // Luxon format string
                        tooltipFormat: "DD T",
                        unit: "day"
                    },
                    title: {
                        display: true,
                        text: "Date"
                    }
                }
            }
        }
    });
}
async function timerDurationCountdown() {
    let chartData = [];
    let tempDateCollection = [];
    let totalTimeAddedMS = 0;
    let skips = 0;
    let skipsBetween = 10;
    for(let i = 0; i < data.length; i++){
        const dataLine = data[i];
        const timeAdded = dataLine.timeadded;
        if (timeAdded == "0") continue;
        const timeAddedNumMS = Number(timeAdded) * 1000;
        totalTimeAddedMS += timeAddedNumMS;
        const date = new Date(dataLine.time);
        const dateMS = date.getTime();
        const sinceStartMS = dateMS - firstDateEventMS;
        const timerLeft = originalTimerMS - sinceStartMS + totalTimeAddedMS;
        if (skips >= skipsBetween) {
            tempDateCollection.push(dateMS);
            chartData.push(timerLeft);
            skips = 0;
        } else skips++;
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "line",
        data: {
            labels: tempDateCollection,
            datasets: [
                {
                    label: "Time remaining in the Dubathon",
                    data: chartData.map((item)=>{
                        return item / 3600000;
                    })
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "xy"
                    }
                }
            },
            scales: {
                x: {
                    type: "time",
                    time: {
                        // Luxon format string
                        tooltipFormat: "DD T",
                        unit: "day"
                    },
                    title: {
                        display: true,
                        text: "Date"
                    }
                }
            }
        }
    });
}
async function subsPerDay() {
    let chartData = [];
    let tempDateCollection = [];
    for(let i = 0; i < data.length; i++){
        const dataLine = data[i];
        const subs = dataLine.subs;
        if (subs == "NULL") continue;
        const subsNum = Number(subs);
        const date = new Date(dataLine.time);
        const formatedDate = date.toLocaleDateString("en-us");
        if (tempDateCollection.includes(formatedDate)) {
            const index = tempDateCollection.indexOf(formatedDate);
            const element = chartData[index];
            chartData[index] = element + subsNum;
        } else {
            tempDateCollection.push(formatedDate);
            chartData.push(subsNum);
        }
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: tempDateCollection,
            datasets: [
                {
                    label: "Subs per Day",
                    data: chartData
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 5000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function subsPerDaySplit() {
    let chartDataAlluux = [];
    let tempDateCollectionAlluux = [];
    let chartDataYEB = [];
    let tempDateCollectionYEB = [];
    for(let i = 0; i < data.length; i++){
        const dataLine = data[i];
        const subs = dataLine.subs;
        if (subs == "NULL") continue;
        const subsNum = Number(subs);
        const date = new Date(dataLine.time);
        const formatedDate = date.toLocaleDateString("en-us");
        const channel = dataLine.channel;
        if (channel == "alluux") {
            if (tempDateCollectionAlluux.includes(formatedDate)) {
                const index = tempDateCollectionAlluux.indexOf(formatedDate);
                const element = chartDataAlluux[index];
                chartDataAlluux[index] = element + subsNum;
            } else {
                tempDateCollectionAlluux.push(formatedDate);
                chartDataAlluux.push(subsNum);
            }
        } else if (channel == "yungelderberry") {
            if (tempDateCollectionYEB.includes(formatedDate)) {
                const index1 = tempDateCollectionYEB.indexOf(formatedDate);
                const element1 = chartDataYEB[index1];
                chartDataYEB[index1] = element1 + subsNum;
            } else {
                tempDateCollectionYEB.push(formatedDate);
                chartDataYEB.push(subsNum);
            }
        }
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: tempDateCollectionAlluux,
            datasets: [
                {
                    label: "Subs per Day, Alluux",
                    data: chartDataAlluux,
                    borderColor: "#BF95F7",
                    backgroundColor: "#F2C8FF",
                    borderWidth: 2
                },
                {
                    label: "Subs per Day, YEB",
                    data: chartDataYEB,
                    borderColor: "#54E0E1",
                    backgroundColor: "#87FFFF",
                    borderWidth: 2
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            },
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 3000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function bitsPerDay() {
    let chartData = [];
    let tempDateCollection = [];
    for(let i = 0; i < data.length; i++){
        const dataLine = data[i];
        const bits = dataLine.bits;
        if (bits == "NULL") continue;
        const bitsNum = Number(bits);
        const date = new Date(dataLine.time);
        const formatedDate = date.toLocaleDateString("en-us");
        if (tempDateCollection.includes(formatedDate)) {
            const index = tempDateCollection.indexOf(formatedDate);
            const element = chartData[index];
            chartData[index] = element + bitsNum;
        } else {
            tempDateCollection.push(formatedDate);
            chartData.push(bitsNum);
        }
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: tempDateCollection,
            datasets: [
                {
                    label: "Bits per Day",
                    data: chartData
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 140000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function bitsPerDaySplit() {
    let chartDataAlluux = [];
    let tempDateCollectionAlluux = [];
    let chartDataYEB = [];
    let tempDateCollectionYEB = [];
    for(let i = 0; i < data.length; i++){
        const dataLine = data[i];
        const bits = dataLine.bits;
        if (bits == "NULL") continue;
        const bitsNum = Number(bits);
        const date = new Date(dataLine.time);
        const formatedDate = date.toLocaleDateString("en-us");
        const channel = dataLine.channel;
        if (channel == "alluux") {
            if (tempDateCollectionAlluux.includes(formatedDate)) {
                const index = tempDateCollectionAlluux.indexOf(formatedDate);
                const element = chartDataAlluux[index];
                chartDataAlluux[index] = element + bitsNum;
            } else {
                tempDateCollectionAlluux.push(formatedDate);
                chartDataAlluux.push(bitsNum);
            }
        } else if (channel == "yungelderberry") {
            if (tempDateCollectionYEB.includes(formatedDate)) {
                const index1 = tempDateCollectionYEB.indexOf(formatedDate);
                const element1 = chartDataYEB[index1];
                chartDataYEB[index1] = element1 + bitsNum;
            } else {
                tempDateCollectionYEB.push(formatedDate);
                chartDataYEB.push(bitsNum);
            }
        }
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: tempDateCollectionAlluux,
            datasets: [
                {
                    label: "Bits per Day, Alluux",
                    data: chartDataAlluux,
                    borderColor: "#BF95F7",
                    backgroundColor: "#F2C8FF",
                    borderWidth: 2
                },
                {
                    label: "Bits per Day, YEB",
                    data: chartDataYEB,
                    borderColor: "#54E0E1",
                    backgroundColor: "#87FFFF",
                    borderWidth: 2
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            },
            plugins: {
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 140000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function moneyPerDay() {
    let chartData = [];
    let tempDateCollection = [];
    for(let i = 0; i < data.length; i++){
        const dataLine = data[i];
        const money = dataLine.money;
        if (money == "0.00") continue;
        const moneyNum = Number(money);
        const date = new Date(dataLine.time);
        const formatedDate = date.toLocaleDateString("en-us");
        if (tempDateCollection.includes(formatedDate)) {
            const index = tempDateCollection.indexOf(formatedDate);
            const element = chartData[index];
            chartData[index] = element + moneyNum;
        } else {
            tempDateCollection.push(formatedDate);
            chartData.push(moneyNum);
        }
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: tempDateCollection,
            datasets: [
                {
                    label: "Donations per Day",
                    data: chartData
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return "$" + value;
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let label = tooltipItem.dataset.label || "";
                            if (label) label += ": ";
                            if (tooltipItem.parsed.y !== null) label += new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD"
                            }).format(tooltipItem.parsed.y);
                            return label;
                        }
                    }
                },
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 3000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
async function moneyPerDaySplit() {
    let chartDataAlluux = [];
    let tempDateCollectionAlluux = [];
    let chartDataYEB = [];
    let tempDateCollectionYEB = [];
    for(let i = 0; i < data.length; i++){
        const dataLine = data[i];
        const money = dataLine.money;
        if (money == "0.00") continue;
        const moneyNum = Number(money);
        const date = new Date(dataLine.time);
        const formatedDate = date.toLocaleDateString("en-us");
        const channel = dataLine.channel;
        if (channel == "alluux") {
            if (tempDateCollectionAlluux.includes(formatedDate)) {
                const index = tempDateCollectionAlluux.indexOf(formatedDate);
                const element = chartDataAlluux[index];
                chartDataAlluux[index] = element + moneyNum;
            } else {
                tempDateCollectionAlluux.push(formatedDate);
                chartDataAlluux.push(moneyNum);
            }
        } else if (channel == "yungelderberry") {
            if (tempDateCollectionYEB.includes(formatedDate)) {
                const index1 = tempDateCollectionYEB.indexOf(formatedDate);
                const element1 = chartDataYEB[index1];
                chartDataYEB[index1] = element1 + moneyNum;
            } else {
                tempDateCollectionYEB.push(formatedDate);
                chartDataYEB.push(moneyNum);
            }
        }
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "bar",
        data: {
            labels: tempDateCollectionYEB,
            datasets: [
                {
                    label: "Donations per Day, Alluux",
                    data: chartDataAlluux,
                    borderColor: "#BF95F7",
                    backgroundColor: "#F2C8FF",
                    borderWidth: 2
                },
                {
                    label: "Donations per Day, YEB",
                    data: chartDataYEB,
                    borderColor: "#54E0E1",
                    backgroundColor: "#87FFFF",
                    borderWidth: 2
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    ticks: {
                        callback: function(value, index, ticks) {
                            return "$" + value;
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let label = tooltipItem.dataset.label || "";
                            if (label) label += ": ";
                            if (tooltipItem.parsed.y !== null) label += new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD"
                            }).format(tooltipItem.parsed.y);
                            return label;
                        }
                    }
                },
                zoom: {
                    limits: {
                        y: {
                            min: 0,
                            max: 3000
                        }
                    },
                    pan: {
                        enabled: true,
                        mode: "xy"
                    },
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: "y"
                    }
                }
            }
        }
    });
}
activateChart(6);

},{"../data/release/dubathon_data.json":"jyj2f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../data/release/maiyaDanceOverTime.json":"7igeN","../data/release/chatters.json":"eWKe8","../data/release/emojiUse.json":"97m7T","../data/release/chattersAlluux.json":"9YL3f","../data/release/emojiUseAlluux.json":"7ysTy","../data/release/chattersYEB.json":"hUl2O","../data/release/emojiUseYEB.json":"d4wsW","chartjs-plugin-annotation":"5xmc5","chartjs-plugin-zoom":"kMtu7"}],"jyj2f":[function(require,module,exports) {

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7igeN":[function(require,module,exports) {
module.exports = JSON.parse('[{"user":"MynockGate","timeMS":1669190944147,"count":4},{"user":"MynockGate","timeMS":1669190960566,"count":5},{"user":"MynockGate","timeMS":1669191004343,"count":4},{"user":"MynockGate","timeMS":1669191024212,"count":3},{"user":"MynockGate","timeMS":1669191221615,"count":1},{"user":"BrownTownBrown","timeMS":1669192837372,"count":1},{"user":"BrownTownBrown","timeMS":1669192909994,"count":3},{"user":"Chip_Chippy","timeMS":1669230875938,"count":1},{"user":"WheatiesR1337","timeMS":1669234272456,"count":1},{"user":"BrownTownBrown","timeMS":1669234284249,"count":1},{"user":"Ben64r","timeMS":1669234310287,"count":1},{"user":"Lotharou","timeMS":1669234320208,"count":1},{"user":"BrownTownBrown","timeMS":1669234537934,"count":1},{"user":"Lotharou","timeMS":1669234549706,"count":1},{"user":"BrownTownBrown","timeMS":1669234568483,"count":3},{"user":"Lotharou","timeMS":1669235800115,"count":1},{"user":"MynockGate","timeMS":1669235843422,"count":1},{"user":"BrownTownBrown","timeMS":1669235870068,"count":1},{"user":"BrownTownBrown","timeMS":1669235983269,"count":1},{"user":"Lotharou","timeMS":1669235991211,"count":1},{"user":"MynockGate","timeMS":1669236016874,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236055934,"count":1},{"user":"MynockGate","timeMS":1669236080203,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236156624,"count":1},{"user":"BrownTownBrown","timeMS":1669236169229,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236185338,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236273040,"count":1},{"user":"MynockGate","timeMS":1669236312617,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236734639,"count":1},{"user":"MynockGate","timeMS":1669236749968,"count":1},{"user":"Lotharou","timeMS":1669236772372,"count":1},{"user":"Orenfel","timeMS":1669236792348,"count":1},{"user":"Lotharou","timeMS":1669237620734,"count":1},{"user":"dbcallector","timeMS":1669237680143,"count":4},{"user":"FridayAtElmStreet","timeMS":1669238510613,"count":1},{"user":"FridayAtElmStreet","timeMS":1669239175809,"count":1},{"user":"FridayAtElmStreet","timeMS":1669241246805,"count":1},{"user":"FridayAtElmStreet","timeMS":1669242222236,"count":1},{"user":"FridayAtElmStreet","timeMS":1669244585287,"count":1},{"user":"vaultboy719","timeMS":1669250831310,"count":1},{"user":"explohd","timeMS":1669255022125,"count":5},{"user":"slim_cognito420","timeMS":1669255022169,"count":5},{"user":"MynockGate","timeMS":1669255023187,"count":5},{"user":"Lotharou","timeMS":1669255023234,"count":5},{"user":"karleygrey","timeMS":1669255023252,"count":5},{"user":"chriskeyy","timeMS":1669255023283,"count":4},{"user":"MaiyaDanny","timeMS":1669255023765,"count":4},{"user":"undeadtweak","timeMS":1669255023810,"count":5},{"user":"dluith","timeMS":1669255026871,"count":5},{"user":"SeedyEyes","timeMS":1669255027708,"count":5},{"user":"dbcallector","timeMS":1669255029198,"count":5},{"user":"ForeverMalone","timeMS":1669255031565,"count":5},{"user":"SeedyEyes","timeMS":1669255033223,"count":5},{"user":"chriskeyy","timeMS":1669255036586,"count":8},{"user":"SerDread","timeMS":1669255039254,"count":5},{"user":"SeedyEyes","timeMS":1669255041434,"count":5},{"user":"slim_cognito420","timeMS":1669255041763,"count":5},{"user":"rulerofwax","timeMS":1669255045300,"count":5},{"user":"jermw1ns","timeMS":1669261018092,"count":6},{"user":"argyle_pigeon","timeMS":1669261461277,"count":2},{"user":"Rezoli","timeMS":1669262989233,"count":1},{"user":"Rezoli","timeMS":1669263008984,"count":1},{"user":"Lotharou","timeMS":1669264171963,"count":1},{"user":"argyle_pigeon","timeMS":1669266302469,"count":4},{"user":"argyle_pigeon","timeMS":1669266403271,"count":4},{"user":"MynockGate","timeMS":1669266445605,"count":4},{"user":"SeedyEyes","timeMS":1669271457182,"count":1},{"user":"dbcallector","timeMS":1669271460861,"count":4},{"user":"Lotharou","timeMS":1669271473338,"count":1},{"user":"MynockGate","timeMS":1669271476502,"count":1},{"user":"BxgHxrns","timeMS":1669271502022,"count":1},{"user":"BrownTownBrown","timeMS":1669272713151,"count":3},{"user":"BrownTownBrown","timeMS":1669275194408,"count":3},{"user":"argyle_pigeon","timeMS":1669275202500,"count":5},{"user":"MynockGate","timeMS":1669275214069,"count":5},{"user":"jakenosnek","timeMS":1669275242518,"count":3},{"user":"BrownTownBrown","timeMS":1669278342840,"count":1},{"user":"Lotharou","timeMS":1669278382123,"count":1},{"user":"BrownTownBrown","timeMS":1669278454055,"count":1},{"user":"MynockGate","timeMS":1669278463766,"count":1},{"user":"BrownTownBrown","timeMS":1669278529962,"count":3},{"user":"BrownTownBrown","timeMS":1669280112613,"count":2},{"user":"BrownTownBrown","timeMS":1669280567238,"count":4},{"user":"BrownTownBrown","timeMS":1669280876695,"count":1},{"user":"cajunrabbit90","timeMS":1669286246438,"count":1},{"user":"cajunrabbit90","timeMS":1669300456969,"count":1},{"user":"cajunrabbit90","timeMS":1669307395635,"count":1},{"user":"cajunrabbit90","timeMS":1669313102464,"count":5},{"user":"dbcallector","timeMS":1669313115700,"count":5},{"user":"Lotharou","timeMS":1669313277667,"count":1},{"user":"cysann","timeMS":1669313294900,"count":1},{"user":"cajunrabbit90","timeMS":1669313306912,"count":1},{"user":"YeComicMan","timeMS":1669315320965,"count":1},{"user":"FridayAtElmStreet","timeMS":1669315464133,"count":1},{"user":"chriskeyy","timeMS":1669315475520,"count":1},{"user":"FridayAtElmStreet","timeMS":1669315654914,"count":1},{"user":"cajunrabbit90","timeMS":1669315736848,"count":4},{"user":"jakenosnek","timeMS":1669315748219,"count":4},{"user":"FridayAtElmStreet","timeMS":1669321517021,"count":1},{"user":"FridayAtElmStreet","timeMS":1669321674910,"count":1},{"user":"MynockGate","timeMS":1669322301768,"count":1},{"user":"cajunrabbit90","timeMS":1669322357368,"count":4},{"user":"thunderbolt2790","timeMS":1669322374090,"count":3},{"user":"jakenosnek","timeMS":1669322398304,"count":4},{"user":"chriskeyy","timeMS":1669322404282,"count":5},{"user":"thunderbolt2790","timeMS":1669322411891,"count":5},{"user":"argyle_pigeon","timeMS":1669329851487,"count":2},{"user":"cysann","timeMS":1669332055646,"count":1},{"user":"JRBangs","timeMS":1669332574346,"count":1},{"user":"argyle_pigeon","timeMS":1669334059656,"count":5},{"user":"MynockGate","timeMS":1669334302843,"count":3},{"user":"Lotharou","timeMS":1669334317364,"count":4},{"user":"atomysktrue","timeMS":1669334409928,"count":1},{"user":"chriskeyy","timeMS":1669334998954,"count":3},{"user":"FridayAtElmStreet","timeMS":1669335006322,"count":10},{"user":"atomysktrue","timeMS":1669335011476,"count":1},{"user":"ForeverMalone","timeMS":1669335027249,"count":7},{"user":"Second_Trumpet","timeMS":1669335044313,"count":1},{"user":"argyle_pigeon","timeMS":1669340285359,"count":5},{"user":"MynockGate","timeMS":1669340300129,"count":7},{"user":"daskichan","timeMS":1669340309691,"count":5},{"user":"Lotharou","timeMS":1669340398597,"count":6},{"user":"Du6e","timeMS":1669340426277,"count":5},{"user":"michaels4n","timeMS":1669340430838,"count":3},{"user":"spyder256","timeMS":1669340432120,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669340449011,"count":5},{"user":"MrGingerbradman","timeMS":1669340459729,"count":5},{"user":"MynockGate","timeMS":1669340462208,"count":6},{"user":"Second_Trumpet","timeMS":1669340476140,"count":2},{"user":"TheSisk0","timeMS":1669340507193,"count":4},{"user":"blinkuzernm","timeMS":1669340586790,"count":2},{"user":"argyle_pigeon","timeMS":1669343234101,"count":3},{"user":"Lotharou","timeMS":1669343252383,"count":1},{"user":"Euphemysticism","timeMS":1669343283355,"count":1},{"user":"gardthedog","timeMS":1669345068133,"count":5},{"user":"djdduty","timeMS":1669345077602,"count":6},{"user":"Lotharou","timeMS":1669345078395,"count":2},{"user":"hokputooy","timeMS":1669349854273,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669349856183,"count":1},{"user":"argyle_pigeon","timeMS":1669351053369,"count":6},{"user":"Lotharou","timeMS":1669351060574,"count":6},{"user":"dmooch","timeMS":1669351078321,"count":1},{"user":"rulerofwax","timeMS":1669351583570,"count":1},{"user":"rulerofwax","timeMS":1669351706844,"count":3},{"user":"SeedyEyes","timeMS":1669352030628,"count":4},{"user":"feelmyfunk","timeMS":1669352031281,"count":3},{"user":"BrownTownBrown","timeMS":1669352031772,"count":4},{"user":"ForeverMalone","timeMS":1669352036481,"count":7},{"user":"jakenosnek","timeMS":1669352037088,"count":5},{"user":"dbcallector","timeMS":1669352037514,"count":1},{"user":"ForeverMalone","timeMS":1669352038932,"count":7},{"user":"sweatpantsandsuitjackets","timeMS":1669352041114,"count":7},{"user":"ForeverMalone","timeMS":1669352042754,"count":7},{"user":"Euphemysticism","timeMS":1669352046246,"count":1},{"user":"chriskeyy","timeMS":1669352047339,"count":7},{"user":"dbcallector","timeMS":1669352048246,"count":8},{"user":"SeedyEyes","timeMS":1669352051198,"count":9},{"user":"Lotharou","timeMS":1669352051706,"count":4},{"user":"markswanmusic","timeMS":1669352053516,"count":12},{"user":"ForeverMalone","timeMS":1669352055745,"count":8},{"user":"chriskeyy","timeMS":1669352056880,"count":14},{"user":"robdidlyob","timeMS":1669352059582,"count":8},{"user":"Du6e","timeMS":1669352060463,"count":11},{"user":"cysann","timeMS":1669352060868,"count":1},{"user":"SeedyEyes","timeMS":1669352062945,"count":7},{"user":"dmooch","timeMS":1669352063681,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669352068313,"count":9},{"user":"markswanmusic","timeMS":1669352114855,"count":12},{"user":"ForeverMalone","timeMS":1669352121609,"count":8},{"user":"dbcallector","timeMS":1669352125411,"count":9},{"user":"SeedyEyes","timeMS":1669352133151,"count":10},{"user":"codykeene56","timeMS":1669352145031,"count":5},{"user":"markswanmusic","timeMS":1669352190204,"count":9},{"user":"jakenosnek","timeMS":1669352193704,"count":7},{"user":"ForeverMalone","timeMS":1669352193883,"count":5},{"user":"SeedyEyes","timeMS":1669352194659,"count":11},{"user":"argyle_pigeon","timeMS":1669352195299,"count":4},{"user":"SeedyEyes","timeMS":1669352196913,"count":8},{"user":"Du6e","timeMS":1669352197567,"count":7},{"user":"Cyclonicks","timeMS":1669352198552,"count":14},{"user":"sweatpantsandsuitjackets","timeMS":1669352201406,"count":8},{"user":"SeedyEyes","timeMS":1669352205866,"count":6},{"user":"BrownTownBrown","timeMS":1669352206599,"count":3},{"user":"Lotharou","timeMS":1669352208772,"count":4},{"user":"Dr_Gonzz","timeMS":1669352209246,"count":5},{"user":"FridayAtElmStreet","timeMS":1669352210106,"count":21},{"user":"jerksandwich","timeMS":1669352214466,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352215597,"count":11},{"user":"chriskeyy","timeMS":1669352215795,"count":7},{"user":"markswanmusic","timeMS":1669352217987,"count":16},{"user":"afergusson","timeMS":1669352218320,"count":14},{"user":"FridayAtElmStreet","timeMS":1669352220421,"count":12},{"user":"dbcallector","timeMS":1669352222296,"count":7},{"user":"wagonwithascoop","timeMS":1669352222526,"count":3},{"user":"FridayAtElmStreet","timeMS":1669352224592,"count":30},{"user":"FridayAtElmStreet","timeMS":1669352245719,"count":5},{"user":"markswanmusic","timeMS":1669352257801,"count":8},{"user":"FridayAtElmStreet","timeMS":1669352264021,"count":9},{"user":"dbcallector","timeMS":1669352278507,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352310922,"count":21},{"user":"FridayAtElmStreet","timeMS":1669352313516,"count":28},{"user":"markswanmusic","timeMS":1669352314370,"count":12},{"user":"dbcallector","timeMS":1669352317338,"count":11},{"user":"FridayAtElmStreet","timeMS":1669352318848,"count":15},{"user":"rulerofwax","timeMS":1669352319463,"count":6},{"user":"SeedyEyes","timeMS":1669352321494,"count":8},{"user":"ForeverMalone","timeMS":1669352322088,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352322781,"count":21},{"user":"ForeverMalone","timeMS":1669352326843,"count":12},{"user":"FridayAtElmStreet","timeMS":1669352327094,"count":26},{"user":"BrownTownBrown","timeMS":1669352328040,"count":3},{"user":"ForeverMalone","timeMS":1669352330775,"count":19},{"user":"manmuffin89","timeMS":1669352333090,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352334532,"count":6},{"user":"rulerofwax","timeMS":1669352341868,"count":6},{"user":"ForeverMalone","timeMS":1669352345478,"count":18},{"user":"markswanmusic","timeMS":1669352350930,"count":8},{"user":"SeedyEyes","timeMS":1669352352834,"count":8},{"user":"dbcallector","timeMS":1669352352883,"count":7},{"user":"rulerofwax","timeMS":1669352402058,"count":6},{"user":"deadpoolskitty","timeMS":1669352536651,"count":3},{"user":"FridayAtElmStreet","timeMS":1669352560814,"count":16},{"user":"SeedyEyes","timeMS":1669352566654,"count":11},{"user":"FridayAtElmStreet","timeMS":1669352600503,"count":19},{"user":"SeedyEyes","timeMS":1669352614973,"count":12},{"user":"markswanmusic","timeMS":1669352633049,"count":7},{"user":"FridayAtElmStreet","timeMS":1669352654568,"count":25},{"user":"dbcallector","timeMS":1669352657785,"count":8},{"user":"BrownTownBrown","timeMS":1669352669154,"count":1},{"user":"FridayAtElmStreet","timeMS":1669352830256,"count":17},{"user":"PiercingThread7","timeMS":1669352842509,"count":3},{"user":"dbcallector","timeMS":1669352849247,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352853154,"count":14},{"user":"FridayAtElmStreet","timeMS":1669352861588,"count":10},{"user":"explohd","timeMS":1669352865263,"count":7},{"user":"SeedyEyes","timeMS":1669352879950,"count":7},{"user":"FridayAtElmStreet","timeMS":1669352882522,"count":9},{"user":"chriskeyy","timeMS":1669352886972,"count":7},{"user":"PiercingThread7","timeMS":1669352891941,"count":1},{"user":"explohd","timeMS":1669352892343,"count":13},{"user":"DuckBees","timeMS":1669352894180,"count":9},{"user":"Lotharou","timeMS":1669353013506,"count":1},{"user":"SeedyEyes","timeMS":1669353017866,"count":1},{"user":"FridayAtElmStreet","timeMS":1669353027191,"count":11},{"user":"SeedyEyes","timeMS":1669353031703,"count":9},{"user":"explohd","timeMS":1669353039954,"count":10},{"user":"PiercingThread7","timeMS":1669353044596,"count":9},{"user":"FridayAtElmStreet","timeMS":1669353047692,"count":17},{"user":"dbcallector","timeMS":1669353052170,"count":16},{"user":"FridayAtElmStreet","timeMS":1669353053870,"count":5},{"user":"kemsmith","timeMS":1669353111791,"count":1},{"user":"FridayAtElmStreet","timeMS":1669353130570,"count":16},{"user":"FridayAtElmStreet","timeMS":1669353134842,"count":18},{"user":"SeedyEyes","timeMS":1669353136935,"count":12},{"user":"FridayAtElmStreet","timeMS":1669353213060,"count":12},{"user":"explohd","timeMS":1669353226679,"count":13},{"user":"dbcallector","timeMS":1669353242905,"count":13},{"user":"BrownTownBrown","timeMS":1669353271705,"count":8},{"user":"FridayAtElmStreet","timeMS":1669353296688,"count":15},{"user":"dbcallector","timeMS":1669353304697,"count":13},{"user":"explohd","timeMS":1669353312859,"count":11},{"user":"FridayAtElmStreet","timeMS":1669353317663,"count":11},{"user":"undeadtweak","timeMS":1669353324849,"count":5},{"user":"amazonianathena98","timeMS":1669353325796,"count":3},{"user":"SeedyEyes","timeMS":1669353332252,"count":14},{"user":"FridayAtElmStreet","timeMS":1669353335130,"count":12},{"user":"FridayAtElmStreet","timeMS":1669353342359,"count":15},{"user":"explohd","timeMS":1669353343163,"count":9},{"user":"dbcallector","timeMS":1669353348695,"count":26},{"user":"SeedyEyes","timeMS":1669353354263,"count":18},{"user":"explohd","timeMS":1669353369720,"count":18},{"user":"amazonianathena98","timeMS":1669353373113,"count":3},{"user":"Miklickers","timeMS":1669353412821,"count":4},{"user":"FridayAtElmStreet","timeMS":1669353412955,"count":16},{"user":"SeedyEyes","timeMS":1669353416099,"count":21},{"user":"FridayAtElmStreet","timeMS":1669353416186,"count":21},{"user":"ForeverMalone","timeMS":1669353417765,"count":8},{"user":"ForeverMalone","timeMS":1669353422148,"count":12},{"user":"BrownTownBrown","timeMS":1669353425456,"count":4},{"user":"dbcallector","timeMS":1669353425466,"count":19},{"user":"FridayAtElmStreet","timeMS":1669353446205,"count":14},{"user":"explohd","timeMS":1669353484718,"count":10},{"user":"FridayAtElmStreet","timeMS":1669353523715,"count":13},{"user":"chriskeyy","timeMS":1669353526720,"count":7},{"user":"FridayAtElmStreet","timeMS":1669353533916,"count":22},{"user":"dbcallector","timeMS":1669353535338,"count":13},{"user":"ForbiddenFractal","timeMS":1669353539360,"count":12},{"user":"SeedyEyes","timeMS":1669353542382,"count":18},{"user":"FridayAtElmStreet","timeMS":1669353543452,"count":16},{"user":"chriskeyy","timeMS":1669353546295,"count":14},{"user":"FridayAtElmStreet","timeMS":1669353548095,"count":17},{"user":"dbcallector","timeMS":1669353550106,"count":26},{"user":"explohd","timeMS":1669353550132,"count":14},{"user":"ForeverMalone","timeMS":1669353553655,"count":12},{"user":"TheSisk0","timeMS":1669353560984,"count":6},{"user":"FridayAtElmStreet","timeMS":1669353586771,"count":11},{"user":"SeedyEyes","timeMS":1669353618370,"count":8},{"user":"FridayAtElmStreet","timeMS":1669353618808,"count":9},{"user":"FridayAtElmStreet","timeMS":1669353646235,"count":15},{"user":"BrownTownBrown","timeMS":1669353688677,"count":4},{"user":"FridayAtElmStreet","timeMS":1669353701751,"count":11},{"user":"SeedyEyes","timeMS":1669353705547,"count":10},{"user":"FridayAtElmStreet","timeMS":1669353714553,"count":9},{"user":"explohd","timeMS":1669353716271,"count":10},{"user":"FridayAtElmStreet","timeMS":1669353810026,"count":5},{"user":"FridayAtElmStreet","timeMS":1669353854358,"count":14},{"user":"FridayAtElmStreet","timeMS":1669353881781,"count":6},{"user":"FridayAtElmStreet","timeMS":1669353901023,"count":10},{"user":"dbcallector","timeMS":1669353918493,"count":1},{"user":"FridayAtElmStreet","timeMS":1669353956628,"count":5},{"user":"FridayAtElmStreet","timeMS":1669353964903,"count":9},{"user":"FridayAtElmStreet","timeMS":1669353991861,"count":19},{"user":"wagonwithascoop","timeMS":1669353995859,"count":1},{"user":"markswanmusic","timeMS":1669354000738,"count":12},{"user":"ProtusMose","timeMS":1669354010588,"count":12},{"user":"chriskeyy","timeMS":1669354023256,"count":1},{"user":"FridayAtElmStreet","timeMS":1669354069891,"count":10},{"user":"dbcallector","timeMS":1669354081173,"count":11},{"user":"FridayAtElmStreet","timeMS":1669354105805,"count":13},{"user":"FridayAtElmStreet","timeMS":1669354121732,"count":1},{"user":"FridayAtElmStreet","timeMS":1669354128060,"count":3},{"user":"FridayAtElmStreet","timeMS":1669354237815,"count":21},{"user":"FridayAtElmStreet","timeMS":1669354241164,"count":24},{"user":"dbcallector","timeMS":1669354247904,"count":1},{"user":"FridayAtElmStreet","timeMS":1669354248781,"count":13},{"user":"markswanmusic","timeMS":1669354488841,"count":3},{"user":"dbcallector","timeMS":1669354492079,"count":1},{"user":"UVCW","timeMS":1669354494862,"count":1},{"user":"chriskeyy","timeMS":1669354559951,"count":5},{"user":"dbcallector","timeMS":1669354913303,"count":1},{"user":"dbcallector","timeMS":1669355069234,"count":1},{"user":"Lotharou","timeMS":1669355158145,"count":1},{"user":"explohd","timeMS":1669355167179,"count":8},{"user":"SeedyEyes","timeMS":1669355169053,"count":5},{"user":"Dr_Gonzz","timeMS":1669355170884,"count":1},{"user":"undeadtweak","timeMS":1669355172483,"count":3},{"user":"SeedyEyes","timeMS":1669355173807,"count":8},{"user":"chriskeyy","timeMS":1669355174768,"count":3},{"user":"dbcallector","timeMS":1669355176101,"count":10},{"user":"ForeverMalone","timeMS":1669355176598,"count":12},{"user":"chriskeyy","timeMS":1669355182253,"count":6},{"user":"Dr_Gonzz","timeMS":1669355183223,"count":5},{"user":"Mickol","timeMS":1669355185874,"count":4},{"user":"v299792458","timeMS":1669355191532,"count":1},{"user":"TheSisk0","timeMS":1669355192284,"count":5},{"user":"SeedyEyes","timeMS":1669355198587,"count":5},{"user":"AestheticallyGeeky","timeMS":1669355200572,"count":12},{"user":"Lotharou","timeMS":1669355209435,"count":7},{"user":"SeedyEyes","timeMS":1669355214101,"count":11},{"user":"dbcallector","timeMS":1669355224814,"count":10},{"user":"explohd","timeMS":1669355233816,"count":10},{"user":"WheatiesR1337","timeMS":1669355238337,"count":3},{"user":"dbcallector","timeMS":1669355247829,"count":7},{"user":"SeedyEyes","timeMS":1669355299448,"count":9},{"user":"dbcallector","timeMS":1669355322391,"count":5},{"user":"undeadtweak","timeMS":1669355333404,"count":5},{"user":"UVCW","timeMS":1669355336922,"count":3},{"user":"explohd","timeMS":1669355353341,"count":7},{"user":"FridayAtElmStreet","timeMS":1669355375396,"count":10},{"user":"FridayAtElmStreet","timeMS":1669355754284,"count":1},{"user":"explohd","timeMS":1669355758653,"count":8},{"user":"FridayAtElmStreet","timeMS":1669355767325,"count":13},{"user":"FridayAtElmStreet","timeMS":1669355787837,"count":4},{"user":"FridayAtElmStreet","timeMS":1669355791915,"count":11},{"user":"FridayAtElmStreet","timeMS":1669355824230,"count":5},{"user":"FridayAtElmStreet","timeMS":1669355871700,"count":5},{"user":"Mickol","timeMS":1669356008651,"count":2},{"user":"dluith","timeMS":1669356021162,"count":2},{"user":"dbcallector","timeMS":1669356031301,"count":12},{"user":"chriskeyy","timeMS":1669356815870,"count":5},{"user":"dbcallector","timeMS":1669356816507,"count":9},{"user":"yam_cakes","timeMS":1669356834005,"count":1},{"user":"sodapop_30","timeMS":1669357003996,"count":10},{"user":"explohd","timeMS":1669357019760,"count":1},{"user":"dbcallector","timeMS":1669357021148,"count":8},{"user":"00Doly","timeMS":1669357022686,"count":7},{"user":"chriskeyy","timeMS":1669357026213,"count":5},{"user":"sodapop_30","timeMS":1669357027291,"count":13},{"user":"Dr_Gonzz","timeMS":1669357031330,"count":6},{"user":"yam_cakes","timeMS":1669357036067,"count":11},{"user":"Mickol","timeMS":1669357037172,"count":2},{"user":"Dr_Gonzz","timeMS":1669357037719,"count":5},{"user":"PointlessOk","timeMS":1669357040151,"count":2},{"user":"cajunrabbit90","timeMS":1669357046017,"count":8},{"user":"explohd","timeMS":1669357048822,"count":7},{"user":"00Doly","timeMS":1669357049258,"count":9},{"user":"Tomaetchen","timeMS":1669357051920,"count":8},{"user":"yam_cakes","timeMS":1669357058518,"count":9},{"user":"dbcallector","timeMS":1669357060107,"count":5},{"user":"sodapop_30","timeMS":1669357064608,"count":12},{"user":"chriskeyy","timeMS":1669357064809,"count":5},{"user":"chriskeyy","timeMS":1669357078557,"count":17},{"user":"treyorrr","timeMS":1669357084233,"count":14},{"user":"yam_cakes","timeMS":1669357090636,"count":8},{"user":"Mickol","timeMS":1669357095597,"count":8},{"user":"dbcallector","timeMS":1669357107322,"count":9},{"user":"CarlosTheGardener","timeMS":1669357117424,"count":1},{"user":"chriskeyy","timeMS":1669357124242,"count":3},{"user":"Mickol","timeMS":1669357137949,"count":8},{"user":"rulerofwax","timeMS":1669357143800,"count":4},{"user":"rulerofwax","timeMS":1669357211834,"count":4},{"user":"sodapop_30","timeMS":1669357217447,"count":11},{"user":"Tomaetchen","timeMS":1669357274222,"count":4},{"user":"UVCW","timeMS":1669357284618,"count":3},{"user":"Mickol","timeMS":1669357287466,"count":4},{"user":"rulerofwax","timeMS":1669357312238,"count":4},{"user":"Lotharou","timeMS":1669357323157,"count":1},{"user":"FridayAtElmStreet","timeMS":1669357338632,"count":20},{"user":"ForbiddenFractal","timeMS":1669357338877,"count":13},{"user":"Mickol","timeMS":1669357338946,"count":10},{"user":"undeadtweak","timeMS":1669357339398,"count":18},{"user":"PointlessOk","timeMS":1669357339512,"count":2},{"user":"dbcallector","timeMS":1669357339668,"count":18},{"user":"explohd","timeMS":1669357339743,"count":21},{"user":"rulerofwax","timeMS":1669357340103,"count":7},{"user":"Euphemysticism","timeMS":1669357340183,"count":15},{"user":"zombiedango","timeMS":1669357340500,"count":4},{"user":"ForeverMalone","timeMS":1669357340892,"count":7},{"user":"FridayAtElmStreet","timeMS":1669357340954,"count":25},{"user":"yam_cakes","timeMS":1669357342536,"count":1},{"user":"ForbiddenFractal","timeMS":1669357342716,"count":15},{"user":"ForeverMalone","timeMS":1669357342852,"count":7},{"user":"FridayAtElmStreet","timeMS":1669357343265,"count":24},{"user":"dbcallector","timeMS":1669357345491,"count":7},{"user":"ForeverMalone","timeMS":1669357345645,"count":7},{"user":"Tomaetchen","timeMS":1669357347824,"count":14},{"user":"FridayAtElmStreet","timeMS":1669357348320,"count":16},{"user":"ForeverMalone","timeMS":1669357348322,"count":7},{"user":"ForbiddenFractal","timeMS":1669357348474,"count":19},{"user":"Euphemysticism","timeMS":1669357348567,"count":13},{"user":"TheSisk0","timeMS":1669357349756,"count":5},{"user":"FridayAtElmStreet","timeMS":1669357350978,"count":24},{"user":"rulerofwax","timeMS":1669357351485,"count":7},{"user":"argyle_pigeon","timeMS":1669357352190,"count":7},{"user":"ForeverMalone","timeMS":1669357352517,"count":7},{"user":"explohd","timeMS":1669357352530,"count":32},{"user":"FridayAtElmStreet","timeMS":1669357354601,"count":22},{"user":"ForeverMalone","timeMS":1669357355159,"count":7},{"user":"DuderGuyDude","timeMS":1669357357037,"count":16},{"user":"ForeverMalone","timeMS":1669357357890,"count":7},{"user":"Lotharou","timeMS":1669357358666,"count":13},{"user":"ForeverMalone","timeMS":1669357360522,"count":7},{"user":"zombiedango","timeMS":1669357360830,"count":7},{"user":"PointlessOk","timeMS":1669357361336,"count":4},{"user":"dbcallector","timeMS":1669357362882,"count":13},{"user":"ForeverMalone","timeMS":1669357362971,"count":7},{"user":"Euphemysticism","timeMS":1669357363536,"count":8},{"user":"DuderGuyDude","timeMS":1669357363560,"count":10},{"user":"Lotharou","timeMS":1669357363724,"count":13},{"user":"explohd","timeMS":1669357363812,"count":28},{"user":"ForeverMalone","timeMS":1669357365179,"count":7},{"user":"ForeverMalone","timeMS":1669357367856,"count":7},{"user":"DuderGuyDude","timeMS":1669357370070,"count":14},{"user":"ForeverMalone","timeMS":1669357370350,"count":7},{"user":"PointlessOk","timeMS":1669357374884,"count":3},{"user":"Lotharou","timeMS":1669357376049,"count":13},{"user":"ForeverMalone","timeMS":1669357377527,"count":10},{"user":"DuderGuyDude","timeMS":1669357379340,"count":10},{"user":"zombiedango","timeMS":1669357380633,"count":13},{"user":"ForeverMalone","timeMS":1669357383704,"count":10},{"user":"Lotharou","timeMS":1669357386700,"count":13},{"user":"ForeverMalone","timeMS":1669357388836,"count":10},{"user":"yam_cakes","timeMS":1669357389059,"count":8},{"user":"ForeverMalone","timeMS":1669357393026,"count":10},{"user":"zombiedango","timeMS":1669357393666,"count":8},{"user":"yam_cakes","timeMS":1669357395362,"count":11},{"user":"ForeverMalone","timeMS":1669357396456,"count":10},{"user":"ForbiddenFractal","timeMS":1669357396694,"count":1},{"user":"yam_cakes","timeMS":1669357399599,"count":5},{"user":"ForeverMalone","timeMS":1669357402162,"count":10},{"user":"Lotharou","timeMS":1669357404525,"count":10},{"user":"cajunrabbit90","timeMS":1669357406067,"count":12},{"user":"ForeverMalone","timeMS":1669357406130,"count":10},{"user":"yam_cakes","timeMS":1669357407010,"count":10},{"user":"zombiedango","timeMS":1669357407464,"count":10},{"user":"explohd","timeMS":1669357408175,"count":17},{"user":"ForeverMalone","timeMS":1669357413702,"count":10},{"user":"yam_cakes","timeMS":1669357418380,"count":7},{"user":"markswanmusic","timeMS":1669357418716,"count":10},{"user":"ForeverMalone","timeMS":1669357419685,"count":10},{"user":"zombiedango","timeMS":1669357423037,"count":7},{"user":"zombiedango","timeMS":1669357427761,"count":10},{"user":"ForeverMalone","timeMS":1669357432735,"count":10},{"user":"dbcallector","timeMS":1669357434997,"count":9},{"user":"zombiedango","timeMS":1669357437605,"count":10},{"user":"ForeverMalone","timeMS":1669357438760,"count":10},{"user":"jakenosnek","timeMS":1669357441458,"count":5},{"user":"sodapop_30","timeMS":1669357803689,"count":4},{"user":"rulerofwax","timeMS":1669357834630,"count":3},{"user":"explohd","timeMS":1669358069274,"count":8},{"user":"cajunrabbit90","timeMS":1669358074404,"count":12},{"user":"argyle_pigeon","timeMS":1669358087290,"count":4},{"user":"FridayAtElmStreet","timeMS":1669358132739,"count":11},{"user":"FridayAtElmStreet","timeMS":1669358136149,"count":14},{"user":"BrownTownBrown","timeMS":1669358141410,"count":4},{"user":"dluith","timeMS":1669358144604,"count":4},{"user":"cajunrabbit90","timeMS":1669358147998,"count":12},{"user":"KneeCapper_","timeMS":1669358158167,"count":12},{"user":"FridayAtElmStreet","timeMS":1669358225801,"count":1},{"user":"FridayAtElmStreet","timeMS":1669358397652,"count":1},{"user":"sodapop_30","timeMS":1669358515535,"count":20},{"user":"explohd","timeMS":1669358522842,"count":8},{"user":"dbcallector","timeMS":1669358545209,"count":8},{"user":"sodapop_30","timeMS":1669358662879,"count":8},{"user":"pwcee","timeMS":1669358669828,"count":4},{"user":"chriskeyy","timeMS":1669358673799,"count":5},{"user":"FridayAtElmStreet","timeMS":1669358681939,"count":1},{"user":"BrownTownBrown","timeMS":1669358684162,"count":2},{"user":"dbcallector","timeMS":1669358953543,"count":6},{"user":"FridayAtElmStreet","timeMS":1669359174462,"count":1},{"user":"s_o_ft","timeMS":1669359226704,"count":4},{"user":"chriskeyy","timeMS":1669359228696,"count":3},{"user":"sodapop_30","timeMS":1669359229187,"count":11},{"user":"dbcallector","timeMS":1669359241720,"count":12},{"user":"Evan_Al_Mighty","timeMS":1669359251410,"count":9},{"user":"FridayAtElmStreet","timeMS":1669359289467,"count":1},{"user":"cajunrabbit90","timeMS":1669359343947,"count":12},{"user":"dluith","timeMS":1669359355579,"count":3},{"user":"Evan_Al_Mighty","timeMS":1669359384420,"count":12},{"user":"FridayAtElmStreet","timeMS":1669359414903,"count":14},{"user":"dbcallector","timeMS":1669359433179,"count":11},{"user":"BrownTownBrown","timeMS":1669359443437,"count":3},{"user":"cajunrabbit90","timeMS":1669359528663,"count":1},{"user":"SBlonk","timeMS":1669359533881,"count":1},{"user":"dbcallector","timeMS":1669359805749,"count":6},{"user":"explohd","timeMS":1669359814517,"count":10},{"user":"chriskeyy","timeMS":1669359819367,"count":3},{"user":"chriskeyy","timeMS":1669359864620,"count":3},{"user":"FridayAtElmStreet","timeMS":1669359870144,"count":1},{"user":"FridayAtElmStreet","timeMS":1669359965699,"count":1},{"user":"FridayAtElmStreet","timeMS":1669360075875,"count":1},{"user":"cajunrabbit90","timeMS":1669360155673,"count":12},{"user":"markswanmusic","timeMS":1669360292010,"count":5},{"user":"chriskeyy","timeMS":1669360317928,"count":5},{"user":"SBlonk","timeMS":1669360323658,"count":1},{"user":"BrownTownBrown","timeMS":1669360327915,"count":2},{"user":"FridayAtElmStreet","timeMS":1669360359447,"count":9},{"user":"dbcallector","timeMS":1669360382955,"count":8},{"user":"FridayAtElmStreet","timeMS":1669360561919,"count":1},{"user":"Second_Trumpet","timeMS":1669360570020,"count":1},{"user":"FridayAtElmStreet","timeMS":1669361040395,"count":1},{"user":"Lotharou","timeMS":1669361309345,"count":1},{"user":"CarlosTheGardener","timeMS":1669362301470,"count":1},{"user":"Lotharou","timeMS":1669362311341,"count":1},{"user":"TheSisk0","timeMS":1669362341066,"count":1},{"user":"dbcallector","timeMS":1669362972915,"count":5},{"user":"corgidrum","timeMS":1669362990808,"count":1},{"user":"WheatiesR1337","timeMS":1669363221370,"count":9},{"user":"cajunrabbit90","timeMS":1669363221498,"count":6},{"user":"rulerofwax","timeMS":1669363229314,"count":1},{"user":"dbcallector","timeMS":1669363248736,"count":6},{"user":"TheSisk0","timeMS":1669363270817,"count":3},{"user":"cajunrabbit90","timeMS":1669363279135,"count":7},{"user":"FridayAtElmStreet","timeMS":1669363295229,"count":5},{"user":"CarlosTheGardener","timeMS":1669363557149,"count":2},{"user":"Lotharou","timeMS":1669363562985,"count":2},{"user":"BrownTownBrown","timeMS":1669363573709,"count":2},{"user":"dbcallector","timeMS":1669363577675,"count":2},{"user":"litdad_","timeMS":1669363578244,"count":2},{"user":"TheSisk0","timeMS":1669363585265,"count":2},{"user":"FridayAtElmStreet","timeMS":1669363756749,"count":1},{"user":"FridayAtElmStreet","timeMS":1669363900483,"count":1},{"user":"dbcallector","timeMS":1669363917489,"count":1},{"user":"cajunrabbit90","timeMS":1669364664337,"count":12},{"user":"dbcallector","timeMS":1669364747681,"count":15},{"user":"BrownTownBrown","timeMS":1669364853619,"count":3},{"user":"dbcallector","timeMS":1669364862510,"count":6},{"user":"cajunrabbit90","timeMS":1669364865384,"count":4},{"user":"FridayAtElmStreet","timeMS":1669364874269,"count":1},{"user":"dbcallector","timeMS":1669366433169,"count":4},{"user":"Euphemysticism","timeMS":1669366447008,"count":2},{"user":"dbcallector","timeMS":1669366770964,"count":2},{"user":"FridayAtElmStreet","timeMS":1669366802982,"count":2},{"user":"theonlyjevans2","timeMS":1669366811532,"count":1},{"user":"Dr_Gonzz","timeMS":1669366817424,"count":4},{"user":"s_o_ft","timeMS":1669366819340,"count":5},{"user":"FridayAtElmStreet","timeMS":1669366982099,"count":1},{"user":"BrownTownBrown","timeMS":1669367059748,"count":1},{"user":"FridayAtElmStreet","timeMS":1669367251706,"count":1},{"user":"FridayAtElmStreet","timeMS":1669367265598,"count":2},{"user":"BrownTownBrown","timeMS":1669367288377,"count":4},{"user":"jakenosnek","timeMS":1669367292744,"count":4},{"user":"dbcallector","timeMS":1669367293340,"count":5},{"user":"FridayAtElmStreet","timeMS":1669367294313,"count":1},{"user":"richardsim7","timeMS":1669367299034,"count":1},{"user":"MynockGate","timeMS":1669367380494,"count":4},{"user":"MynockGate","timeMS":1669367400774,"count":3},{"user":"cajunrabbit90","timeMS":1669367473273,"count":4},{"user":"FridayAtElmStreet","timeMS":1669367643016,"count":1},{"user":"jakenosnek","timeMS":1669368131841,"count":4},{"user":"richardsim7","timeMS":1669368182301,"count":1},{"user":"cajunrabbit90","timeMS":1669368198006,"count":12},{"user":"MynockGate","timeMS":1669368209626,"count":12},{"user":"BrownTownBrown","timeMS":1669368212968,"count":3},{"user":"cajunrabbit90","timeMS":1669368223282,"count":12},{"user":"MynockGate","timeMS":1669368268174,"count":8},{"user":"MynockGate","timeMS":1669368423684,"count":8},{"user":"BrownTownBrown","timeMS":1669368646953,"count":3},{"user":"Dr_Gonzz","timeMS":1669368705610,"count":4},{"user":"cajunrabbit90","timeMS":1669368814152,"count":12},{"user":"BrownTownBrown","timeMS":1669369087969,"count":1},{"user":"Dr_Gonzz","timeMS":1669369516812,"count":1},{"user":"MynockGate","timeMS":1669370206463,"count":8},{"user":"cajunrabbit90","timeMS":1669370239880,"count":12},{"user":"cajunrabbit90","timeMS":1669370628437,"count":1},{"user":"richardsim7","timeMS":1669370887569,"count":5},{"user":"cajunrabbit90","timeMS":1669370895296,"count":12},{"user":"BrownTownBrown","timeMS":1669370900109,"count":3},{"user":"torp1337","timeMS":1669370902892,"count":7},{"user":"MynockGate","timeMS":1669370910486,"count":10},{"user":"Second_Trumpet","timeMS":1669370910960,"count":1},{"user":"UVCW","timeMS":1669370914994,"count":4},{"user":"ForeverMalone","timeMS":1669370943533,"count":7},{"user":"richardsim7","timeMS":1669370956157,"count":1},{"user":"torp1337","timeMS":1669370957005,"count":5},{"user":"xfatxninjax","timeMS":1669370964636,"count":1},{"user":"Parksies_","timeMS":1669370965144,"count":3},{"user":"treyorrr","timeMS":1669370965405,"count":10},{"user":"BrownTownBrown","timeMS":1669370968758,"count":7},{"user":"MynockGate","timeMS":1669370971589,"count":10},{"user":"Scyral","timeMS":1669370974142,"count":6},{"user":"cajunrabbit90","timeMS":1669370975248,"count":12},{"user":"computeryogi","timeMS":1669370975459,"count":3},{"user":"FridayAtElmStreet","timeMS":1669370979417,"count":10},{"user":"koaxOG","timeMS":1669370982454,"count":3},{"user":"Scyral","timeMS":1669370982593,"count":6},{"user":"beglebum","timeMS":1669370990435,"count":1},{"user":"FridayAtElmStreet","timeMS":1669371022162,"count":5},{"user":"FridayAtElmStreet","timeMS":1669371272396,"count":15},{"user":"FridayAtElmStreet","timeMS":1669371282235,"count":18},{"user":"torp1337","timeMS":1669371282620,"count":6},{"user":"cajunrabbit90","timeMS":1669371284944,"count":12},{"user":"Scyral","timeMS":1669371295726,"count":12},{"user":"MynockGate","timeMS":1669371300580,"count":10},{"user":"TheSisk0","timeMS":1669371301775,"count":6},{"user":"Belly__boy","timeMS":1669371333099,"count":6},{"user":"FridayAtElmStreet","timeMS":1669371602346,"count":1},{"user":"cajunrabbit90","timeMS":1669371947755,"count":4},{"user":"WheatiesR1337","timeMS":1669371985109,"count":1},{"user":"Scyral","timeMS":1669372371918,"count":1},{"user":"FridayAtElmStreet","timeMS":1669373163771,"count":1},{"user":"CarlosTheGardener","timeMS":1669373282599,"count":1},{"user":"GoSabres","timeMS":1669373472286,"count":1},{"user":"Scyral","timeMS":1669373475418,"count":1},{"user":"Scyral","timeMS":1669373481092,"count":1},{"user":"Second_Trumpet","timeMS":1669373658213,"count":1},{"user":"cajunrabbit90","timeMS":1669373930542,"count":12},{"user":"Second_Trumpet","timeMS":1669374431789,"count":1},{"user":"WheatiesR1337","timeMS":1669374436820,"count":4},{"user":"MynockGate","timeMS":1669374451116,"count":10},{"user":"UVCW","timeMS":1669374452730,"count":1},{"user":"TheSisk0","timeMS":1669374462503,"count":10},{"user":"cajunrabbit90","timeMS":1669374478753,"count":12},{"user":"UVCW","timeMS":1669374486033,"count":12},{"user":"Scyral","timeMS":1669374502030,"count":12},{"user":"Scyral","timeMS":1669374552335,"count":1},{"user":"ForeverMalone","timeMS":1669374879142,"count":8},{"user":"sodapop_30","timeMS":1669374989216,"count":21},{"user":"richardsim7","timeMS":1669375008342,"count":1},{"user":"ForeverMalone","timeMS":1669375011880,"count":8},{"user":"cajunrabbit90","timeMS":1669375012589,"count":12},{"user":"Parksies_","timeMS":1669375013278,"count":12},{"user":"torp1337","timeMS":1669375013720,"count":12},{"user":"MynockGate","timeMS":1669375014469,"count":8},{"user":"cajunrabbit90","timeMS":1669375016869,"count":12},{"user":"DuderGuyDude","timeMS":1669375016973,"count":4},{"user":"FridayAtElmStreet","timeMS":1669375017157,"count":13},{"user":"ForeverMalone","timeMS":1669375017273,"count":12},{"user":"UVCW","timeMS":1669375017434,"count":7},{"user":"Tomaetchen","timeMS":1669375017995,"count":10},{"user":"MynockGate","timeMS":1669375018515,"count":10},{"user":"ForeverMalone","timeMS":1669375019803,"count":17},{"user":"beglebum","timeMS":1669375021047,"count":5},{"user":"GoSabres","timeMS":1669375029626,"count":5},{"user":"FridayAtElmStreet","timeMS":1669375029924,"count":7},{"user":"Scyral","timeMS":1669375030526,"count":12},{"user":"Tomaetchen","timeMS":1669375031513,"count":9},{"user":"Scyral","timeMS":1669375039259,"count":12},{"user":"sodapop_30","timeMS":1669375041807,"count":6},{"user":"DuderGuyDude","timeMS":1669375045523,"count":4},{"user":"TheSisk0","timeMS":1669375045819,"count":12},{"user":"torp1337","timeMS":1669375046991,"count":12},{"user":"asgarnieu","timeMS":1669375051257,"count":4},{"user":"FridayAtElmStreet","timeMS":1669375055467,"count":4},{"user":"DuderGuyDude","timeMS":1669375059052,"count":8},{"user":"MynockGate","timeMS":1669375067603,"count":8},{"user":"MynockGate","timeMS":1669375079486,"count":9},{"user":"DuderGuyDude","timeMS":1669375082078,"count":4},{"user":"cajunrabbit90","timeMS":1669375097586,"count":12},{"user":"FridayAtElmStreet","timeMS":1669375101537,"count":1},{"user":"Second_Trumpet","timeMS":1669375120066,"count":1},{"user":"GoSabres","timeMS":1669375121983,"count":1},{"user":"FridayAtElmStreet","timeMS":1669375149861,"count":1},{"user":"FridayAtElmStreet","timeMS":1669375163382,"count":2},{"user":"MynockGate","timeMS":1669375166084,"count":9},{"user":"torp1337","timeMS":1669375421562,"count":12},{"user":"GoSabres","timeMS":1669375446692,"count":1},{"user":"Scyral","timeMS":1669375451750,"count":2},{"user":"Scyral","timeMS":1669375688879,"count":3},{"user":"cajunrabbit90","timeMS":1669375719154,"count":12},{"user":"Tomaetchen","timeMS":1669375721842,"count":4},{"user":"kimchikelso","timeMS":1669377322724,"count":1},{"user":"cajunrabbit90","timeMS":1669378011433,"count":2},{"user":"MynockGate","timeMS":1669378044722,"count":1},{"user":"suddenlyzoe","timeMS":1669378061729,"count":1},{"user":"cajunrabbit90","timeMS":1669378158794,"count":10},{"user":"MynockGate","timeMS":1669378170631,"count":9},{"user":"DuderGuyDude","timeMS":1669382108105,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669382659956,"count":5},{"user":"DuderGuyDude","timeMS":1669382667651,"count":4},{"user":"asasquatch","timeMS":1669382673601,"count":3},{"user":"CookieKrisp","timeMS":1669382679216,"count":3},{"user":"the_bearded_helmet","timeMS":1669382727510,"count":4},{"user":"Lotharou","timeMS":1669388716919,"count":1},{"user":"Lotharou","timeMS":1669390026238,"count":1},{"user":"MynockGate","timeMS":1669390056910,"count":10},{"user":"MynockGate","timeMS":1669391454677,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669392159588,"count":1},{"user":"MynockGate","timeMS":1669393723593,"count":4},{"user":"Du6e","timeMS":1669393735715,"count":3},{"user":"Lotharou","timeMS":1669393765773,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669393910153,"count":3},{"user":"Miklickers","timeMS":1669394858979,"count":1},{"user":"Lotharou","timeMS":1669396834024,"count":1},{"user":"cajunrabbit90","timeMS":1669397652998,"count":11},{"user":"FridayAtElmStreet","timeMS":1669397803507,"count":1},{"user":"Lotharou","timeMS":1669397845310,"count":1},{"user":"SeedyEyes","timeMS":1669397871188,"count":1},{"user":"chriskeyy","timeMS":1669397923526,"count":1},{"user":"Lotharou","timeMS":1669397954141,"count":1},{"user":"FiveGetsYouTen","timeMS":1669398011575,"count":10},{"user":"Lotharou","timeMS":1669398021974,"count":10},{"user":"TheSisk0","timeMS":1669398037104,"count":10},{"user":"Du6e","timeMS":1669398046167,"count":10},{"user":"dacullenator","timeMS":1669398073576,"count":10},{"user":"MynockGate","timeMS":1669398116044,"count":10},{"user":"cajunrabbit90","timeMS":1669398181783,"count":1},{"user":"SeedyEyes","timeMS":1669398290565,"count":7},{"user":"chriskeyy","timeMS":1669398919616,"count":1},{"user":"MynockGate","timeMS":1669399071132,"count":9},{"user":"Lotharou","timeMS":1669399077538,"count":9},{"user":"cajunrabbit90","timeMS":1669399093563,"count":9},{"user":"atomysktrue","timeMS":1669399105060,"count":9},{"user":"LilMermaid","timeMS":1669399112010,"count":9},{"user":"chriskeyy","timeMS":1669399147448,"count":9},{"user":"LilMermaid","timeMS":1669399164918,"count":1},{"user":"MynockGate","timeMS":1669399168871,"count":9},{"user":"explohd","timeMS":1669399179049,"count":5},{"user":"cajunrabbit90","timeMS":1669399193238,"count":9},{"user":"MynockGate","timeMS":1669399197017,"count":10},{"user":"Du6e","timeMS":1669399198200,"count":9},{"user":"Lotharou","timeMS":1669399207134,"count":10},{"user":"FrostedFerrets","timeMS":1669399214560,"count":3},{"user":"MynockGate","timeMS":1669399257510,"count":10},{"user":"FridayAtElmStreet","timeMS":1669399368785,"count":1},{"user":"MynockGate","timeMS":1669399374382,"count":10},{"user":"cajunrabbit90","timeMS":1669399387933,"count":10},{"user":"FrostedFerrets","timeMS":1669399394610,"count":3},{"user":"chriskeyy","timeMS":1669399422578,"count":9},{"user":"FrostedFerrets","timeMS":1669399656965,"count":4},{"user":"rulerofwax","timeMS":1669399674134,"count":1},{"user":"TheZtakMan","timeMS":1669399681961,"count":1},{"user":"Lotharou","timeMS":1669399685166,"count":4},{"user":"dbcallector","timeMS":1669399686864,"count":4},{"user":"cajunrabbit90","timeMS":1669399691280,"count":10},{"user":"AzraeII","timeMS":1669399691679,"count":5},{"user":"TheCrunge24","timeMS":1669399703319,"count":4},{"user":"MynockGate","timeMS":1669399709927,"count":10},{"user":"TheSisk0","timeMS":1669399713347,"count":4},{"user":"Rezoli","timeMS":1669399714877,"count":10},{"user":"dbcallector","timeMS":1669399717548,"count":10},{"user":"FrostedFerrets","timeMS":1669399722619,"count":4},{"user":"cajunrabbit90","timeMS":1669400091639,"count":10},{"user":"rulerofwax","timeMS":1669400101510,"count":10},{"user":"chriskeyy","timeMS":1669400228201,"count":5},{"user":"rulerofwax","timeMS":1669400294961,"count":10},{"user":"FridayAtElmStreet","timeMS":1669400311080,"count":18},{"user":"FridayAtElmStreet","timeMS":1669400314447,"count":21},{"user":"FridayAtElmStreet","timeMS":1669400320760,"count":5},{"user":"FridayAtElmStreet","timeMS":1669400406424,"count":5},{"user":"dbcallector","timeMS":1669400421746,"count":11},{"user":"chriskeyy","timeMS":1669400427960,"count":5},{"user":"MynockGate","timeMS":1669400435724,"count":6},{"user":"explohd","timeMS":1669400447135,"count":7},{"user":"ProtusMose","timeMS":1669400451680,"count":2},{"user":"MynockGate","timeMS":1669400461259,"count":10},{"user":"cajunrabbit90","timeMS":1669400474654,"count":10},{"user":"FridayAtElmStreet","timeMS":1669400477681,"count":1},{"user":"viviz","timeMS":1669400484445,"count":3},{"user":"razorblahd","timeMS":1669400506344,"count":2},{"user":"kevvywevy","timeMS":1669400698222,"count":3},{"user":"kemsmith","timeMS":1669400715959,"count":1},{"user":"MynockGate","timeMS":1669400801582,"count":10},{"user":"kevvywevy","timeMS":1669400804585,"count":3},{"user":"kemsmith","timeMS":1669400809172,"count":8},{"user":"cajunrabbit90","timeMS":1669400809249,"count":10},{"user":"TheSisk0","timeMS":1669400809640,"count":10},{"user":"rulerofwax","timeMS":1669400810367,"count":1},{"user":"explohd","timeMS":1669400810476,"count":10},{"user":"kevvywevy","timeMS":1669400814021,"count":4},{"user":"Lotharou","timeMS":1669400817191,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669400819708,"count":4},{"user":"FiveGetsYouTen","timeMS":1669400820402,"count":33},{"user":"LilMermaid","timeMS":1669400827031,"count":10},{"user":"chriskeyy","timeMS":1669400835684,"count":3},{"user":"MynockGate","timeMS":1669400840518,"count":10},{"user":"dbcallector","timeMS":1669400848193,"count":10},{"user":"chriskeyy","timeMS":1669401124630,"count":3},{"user":"jakenosnek","timeMS":1669401440635,"count":2},{"user":"FridayAtElmStreet","timeMS":1669401463611,"count":1},{"user":"FridayAtElmStreet","timeMS":1669401488242,"count":1},{"user":"FridayAtElmStreet","timeMS":1669402062280,"count":1},{"user":"bleedcheez","timeMS":1669402276675,"count":1},{"user":"FridayAtElmStreet","timeMS":1669402583174,"count":1},{"user":"FrostedFerrets","timeMS":1669402584308,"count":1},{"user":"cajunrabbit90","timeMS":1669402589145,"count":10},{"user":"LilMermaid","timeMS":1669402597683,"count":1},{"user":"dbcallector","timeMS":1669402609541,"count":10},{"user":"jakenosnek","timeMS":1669402612456,"count":5},{"user":"FridayAtElmStreet","timeMS":1669402614496,"count":6},{"user":"TheZtakMan","timeMS":1669402615352,"count":3},{"user":"Rezoli","timeMS":1669402618888,"count":1},{"user":"bleedcheez","timeMS":1669402665949,"count":2},{"user":"richardsim7","timeMS":1669402673730,"count":1},{"user":"ProtusMose","timeMS":1669402692660,"count":4},{"user":"FridayAtElmStreet","timeMS":1669402698183,"count":2},{"user":"Lotharou","timeMS":1669402698289,"count":1},{"user":"FridayAtElmStreet","timeMS":1669402734981,"count":4},{"user":"FridayAtElmStreet","timeMS":1669402766507,"count":10},{"user":"jakenosnek","timeMS":1669402773869,"count":5},{"user":"MynockGate","timeMS":1669402784779,"count":9},{"user":"medlols","timeMS":1669402787979,"count":12},{"user":"dbcallector","timeMS":1669402790879,"count":10},{"user":"cajunrabbit90","timeMS":1669402797244,"count":10},{"user":"Lotharou","timeMS":1669402829192,"count":9},{"user":"FridayAtElmStreet","timeMS":1669402841255,"count":9},{"user":"dbcallector","timeMS":1669402854471,"count":9},{"user":"MynockGate","timeMS":1669402862592,"count":7},{"user":"FelixTava","timeMS":1669402868258,"count":9},{"user":"jakenosnek","timeMS":1669403073041,"count":4},{"user":"DGKALLDAYKAY","timeMS":1669403239402,"count":2},{"user":"PiercingThread7","timeMS":1669403399111,"count":4},{"user":"dbcallector","timeMS":1669403752468,"count":9},{"user":"karleygrey","timeMS":1669403765261,"count":9},{"user":"cajunrabbit90","timeMS":1669403769541,"count":9},{"user":"Lotharou","timeMS":1669403777440,"count":9},{"user":"PiercingThread7","timeMS":1669403778380,"count":4},{"user":"kemsmith","timeMS":1669403795558,"count":3},{"user":"WheatiesR1337","timeMS":1669403993802,"count":3},{"user":"rulerofwax","timeMS":1669404151797,"count":1},{"user":"MynockGate","timeMS":1669404159423,"count":3},{"user":"FridayAtElmStreet","timeMS":1669404163580,"count":1},{"user":"dbcallector","timeMS":1669404176555,"count":9},{"user":"MynockGate","timeMS":1669404192658,"count":9},{"user":"cajunrabbit90","timeMS":1669404200799,"count":9},{"user":"Lotharou","timeMS":1669404217270,"count":9},{"user":"AzraeII","timeMS":1669404217661,"count":9},{"user":"karleygrey","timeMS":1669404231516,"count":9},{"user":"Du6e","timeMS":1669404251047,"count":9},{"user":"PiercingThread7","timeMS":1669404253078,"count":5},{"user":"Deadenterprise","timeMS":1669404262403,"count":9},{"user":"FridayAtElmStreet","timeMS":1669404265277,"count":9},{"user":"WheatiesR1337","timeMS":1669404273170,"count":5},{"user":"WheatiesR1337","timeMS":1669404473266,"count":1},{"user":"kemsmith","timeMS":1669404473393,"count":1},{"user":"Du6e","timeMS":1669404478340,"count":1},{"user":"dbcallector","timeMS":1669404481370,"count":9},{"user":"MynockGate","timeMS":1669404485440,"count":9},{"user":"thunderbolt2790","timeMS":1669404487376,"count":2},{"user":"Forrest_ThePugKing","timeMS":1669404491346,"count":1},{"user":"karleygrey","timeMS":1669404492918,"count":9},{"user":"Chip_Chippy","timeMS":1669404493829,"count":1},{"user":"the_bearded_helmet","timeMS":1669404500611,"count":8},{"user":"pat_boy514","timeMS":1669404501692,"count":3},{"user":"idemerzel","timeMS":1669404505237,"count":1},{"user":"Arcannition","timeMS":1669404515673,"count":4},{"user":"MynockGate","timeMS":1669404525778,"count":4},{"user":"WheatiesR1337","timeMS":1669405128486,"count":1},{"user":"FridayAtElmStreet","timeMS":1669405362941,"count":1},{"user":"rulerofwax","timeMS":1669405366826,"count":1},{"user":"dbcallector","timeMS":1669405370140,"count":1},{"user":"chriskeyy","timeMS":1669405370624,"count":1},{"user":"chriskeyy","timeMS":1669405507818,"count":1},{"user":"pat_boy514","timeMS":1669405510278,"count":3},{"user":"dbcallector","timeMS":1669405512494,"count":1},{"user":"atomysktrue","timeMS":1669406421370,"count":1},{"user":"atomysktrue","timeMS":1669409384001,"count":1},{"user":"dbcallector","timeMS":1669409398576,"count":3},{"user":"FridayAtElmStreet","timeMS":1669409402543,"count":1},{"user":"chriskeyy","timeMS":1669409417224,"count":1},{"user":"rulerofwax","timeMS":1669410204569,"count":1},{"user":"FrostedFerrets","timeMS":1669410388618,"count":1},{"user":"chriskeyy","timeMS":1669410574885,"count":5},{"user":"FridayAtElmStreet","timeMS":1669410647031,"count":2},{"user":"Lotharou","timeMS":1669410648050,"count":9},{"user":"FrostedFerrets","timeMS":1669410650819,"count":1},{"user":"atomysktrue","timeMS":1669410655029,"count":1},{"user":"cajunrabbit90","timeMS":1669410659378,"count":10},{"user":"BoarLordNago","timeMS":1669410660535,"count":3},{"user":"chriskeyy","timeMS":1669410661285,"count":1},{"user":"chriskeyy","timeMS":1669410674881,"count":5},{"user":"BoarLordNago","timeMS":1669410679230,"count":3},{"user":"FridayAtElmStreet","timeMS":1669410822168,"count":1},{"user":"chriskeyy","timeMS":1669410919576,"count":1},{"user":"explohd","timeMS":1669410923027,"count":4},{"user":"FridayAtElmStreet","timeMS":1669410929108,"count":1},{"user":"Scyral","timeMS":1669410936707,"count":5},{"user":"richardsim7","timeMS":1669410940548,"count":1},{"user":"FridayAtElmStreet","timeMS":1669410985699,"count":1},{"user":"cajunrabbit90","timeMS":1669411000430,"count":10},{"user":"chriskeyy","timeMS":1669411007445,"count":5},{"user":"MynockGate","timeMS":1669411009026,"count":10},{"user":"FridayAtElmStreet","timeMS":1669411021753,"count":1},{"user":"thunderbolt2790","timeMS":1669411022891,"count":5},{"user":"BrownTownBrown","timeMS":1669411024173,"count":10},{"user":"ForeverMalone","timeMS":1669411025413,"count":1},{"user":"rulerofwax","timeMS":1669411026440,"count":1},{"user":"Inoeth","timeMS":1669411027710,"count":5},{"user":"UVCW","timeMS":1669411028520,"count":4},{"user":"Du6e","timeMS":1669411029076,"count":5},{"user":"Scyral","timeMS":1669411032525,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669411037388,"count":3},{"user":"Chip_Chippy","timeMS":1669411038556,"count":7},{"user":"beglebum","timeMS":1669411038818,"count":1},{"user":"Ben64r","timeMS":1669411040126,"count":1},{"user":"xfatxninjax","timeMS":1669411040422,"count":1},{"user":"BoarLordNago","timeMS":1669411042855,"count":3},{"user":"ForeverMalone","timeMS":1669411044290,"count":1},{"user":"explohd","timeMS":1669411046047,"count":11},{"user":"chriskeyy","timeMS":1669411046226,"count":3},{"user":"BrownTownBrown","timeMS":1669411046477,"count":3},{"user":"daskichan","timeMS":1669411049130,"count":5},{"user":"Scyral","timeMS":1669411054625,"count":15},{"user":"FridayAtElmStreet","timeMS":1669411060100,"count":1},{"user":"UVCW","timeMS":1669411089260,"count":5},{"user":"FridayAtElmStreet","timeMS":1669411136483,"count":1},{"user":"FridayAtElmStreet","timeMS":1669411144750,"count":2},{"user":"atomysktrue","timeMS":1669411245159,"count":1},{"user":"MynockGate","timeMS":1669411254387,"count":10},{"user":"MynockGate","timeMS":1669411257149,"count":20},{"user":"MynockGate","timeMS":1669411259504,"count":10},{"user":"chriskeyy","timeMS":1669411262138,"count":5},{"user":"cajunrabbit90","timeMS":1669411265828,"count":10},{"user":"Second_Trumpet","timeMS":1669411273934,"count":3},{"user":"Rezoli","timeMS":1669411274128,"count":20},{"user":"FrostedFerrets","timeMS":1669411279669,"count":4},{"user":"seagespacho","timeMS":1669411282142,"count":20},{"user":"cajunrabbit90","timeMS":1669411287214,"count":20},{"user":"MynockGate","timeMS":1669411291662,"count":20},{"user":"chriskeyy","timeMS":1669411312481,"count":20},{"user":"ForeverMalone","timeMS":1669411317327,"count":20},{"user":"cajunrabbit90","timeMS":1669411323732,"count":10},{"user":"daskichan","timeMS":1669411396097,"count":4},{"user":"WheatiesR1337","timeMS":1669411859738,"count":3},{"user":"atomysktrue","timeMS":1669411909028,"count":5},{"user":"WheatiesR1337","timeMS":1669411923562,"count":5},{"user":"rulerofwax","timeMS":1669411931515,"count":1},{"user":"Lotharou","timeMS":1669411937715,"count":5},{"user":"jakenosnek","timeMS":1669411942200,"count":5},{"user":"Scyral","timeMS":1669411956452,"count":5},{"user":"michaels4n","timeMS":1669411963257,"count":5},{"user":"atomysktrue","timeMS":1669411975474,"count":5},{"user":"pat_boy514","timeMS":1669411985315,"count":5},{"user":"daskichan","timeMS":1669412016892,"count":4},{"user":"amazonianathena98","timeMS":1669412032333,"count":4},{"user":"dluith","timeMS":1669412038448,"count":2},{"user":"SeedyEyes","timeMS":1669412038861,"count":4},{"user":"ChildishGoobino","timeMS":1669412044081,"count":3},{"user":"cajunrabbit90","timeMS":1669412066879,"count":8},{"user":"cajunrabbit90","timeMS":1669412219106,"count":8},{"user":"daddyygoose","timeMS":1669412225537,"count":4},{"user":"Lotharou","timeMS":1669412229355,"count":5},{"user":"cajunrabbit90","timeMS":1669412233260,"count":8},{"user":"Inoeth","timeMS":1669412234981,"count":8},{"user":"cajunrabbit90","timeMS":1669412239055,"count":4},{"user":"jakenosnek","timeMS":1669412240014,"count":15},{"user":"Scyral","timeMS":1669412244663,"count":5},{"user":"atomysktrue","timeMS":1669412245221,"count":5},{"user":"TheCrunge24","timeMS":1669412245806,"count":5},{"user":"ChildishGoobino","timeMS":1669412247022,"count":4},{"user":"pat_boy514","timeMS":1669412248322,"count":8},{"user":"beefsoupu","timeMS":1669412248608,"count":8},{"user":"pat_boy514","timeMS":1669412250624,"count":8},{"user":"cajunrabbit90","timeMS":1669412252813,"count":8},{"user":"WheatiesR1337","timeMS":1669412254734,"count":9},{"user":"UVCW","timeMS":1669412256151,"count":4},{"user":"Lotharou","timeMS":1669412258995,"count":5},{"user":"viviz","timeMS":1669412259699,"count":5},{"user":"nrMite","timeMS":1669412262621,"count":8},{"user":"FridayAtElmStreet","timeMS":1669412265456,"count":12},{"user":"Miklickers","timeMS":1669412266007,"count":4},{"user":"Miklickers","timeMS":1669412271495,"count":8},{"user":"chriskeyy","timeMS":1669412279472,"count":5},{"user":"daskichan","timeMS":1669412300462,"count":3},{"user":"karleygrey","timeMS":1669412499413,"count":1},{"user":"dluith","timeMS":1669412516862,"count":1},{"user":"cajunrabbit90","timeMS":1669412606961,"count":18},{"user":"ForeverMalone","timeMS":1669412609406,"count":1},{"user":"dluith","timeMS":1669412615775,"count":18},{"user":"karleygrey","timeMS":1669412618651,"count":18},{"user":"FridayAtElmStreet","timeMS":1669412622886,"count":1},{"user":"KadeemScheme","timeMS":1669412623611,"count":1},{"user":"UVCW","timeMS":1669412643334,"count":18},{"user":"cajunrabbit90","timeMS":1669412957026,"count":4},{"user":"cajunrabbit90","timeMS":1669412961299,"count":4},{"user":"cysann","timeMS":1669413276793,"count":1},{"user":"cajunrabbit90","timeMS":1669413351798,"count":9},{"user":"cajunrabbit90","timeMS":1669413417143,"count":9},{"user":"Lotharou","timeMS":1669413675191,"count":1},{"user":"Lotharou","timeMS":1669413680788,"count":1},{"user":"cajunrabbit90","timeMS":1669413926621,"count":9},{"user":"DuderGuyDude","timeMS":1669414069680,"count":1},{"user":"atomysktrue","timeMS":1669414449292,"count":4},{"user":"cajunrabbit90","timeMS":1669414481811,"count":4},{"user":"Lotharou","timeMS":1669414488800,"count":4},{"user":"atomysktrue","timeMS":1669415091572,"count":4},{"user":"amazonianathena98","timeMS":1669415458310,"count":1},{"user":"chriskeyy","timeMS":1669415685336,"count":1},{"user":"amazonianathena98","timeMS":1669416062216,"count":1},{"user":"SeedyEyes","timeMS":1669416756949,"count":4},{"user":"atomysktrue","timeMS":1669416766457,"count":5},{"user":"MynockGate","timeMS":1669416786347,"count":5},{"user":"nrMite","timeMS":1669416793993,"count":5},{"user":"SeedyEyes","timeMS":1669416801017,"count":4},{"user":"TheSisk0","timeMS":1669416802499,"count":5},{"user":"richardsim7","timeMS":1669416803301,"count":1},{"user":"ForeverMalone","timeMS":1669416804901,"count":1},{"user":"atomysktrue","timeMS":1669416805442,"count":5},{"user":"PointlessOk","timeMS":1669416806130,"count":1},{"user":"beglebum","timeMS":1669416808744,"count":1},{"user":"Lotharou","timeMS":1669416810375,"count":5},{"user":"karleygrey","timeMS":1669416810675,"count":5},{"user":"jakenosnek","timeMS":1669416817220,"count":5},{"user":"BrownTownBrown","timeMS":1669416818175,"count":5},{"user":"Ragingquitter","timeMS":1669416824184,"count":5},{"user":"cajunrabbit90","timeMS":1669416826086,"count":10},{"user":"Deadenterprise","timeMS":1669416830215,"count":5},{"user":"SeedyEyes","timeMS":1669416849566,"count":4},{"user":"amazonianathena98","timeMS":1669416960548,"count":1},{"user":"atomysktrue","timeMS":1669417015333,"count":5},{"user":"karleygrey","timeMS":1669417015558,"count":5},{"user":"jakenosnek","timeMS":1669417016821,"count":10},{"user":"cajunrabbit90","timeMS":1669417020031,"count":5},{"user":"chriskeyy","timeMS":1669417020112,"count":5},{"user":"TheSisk0","timeMS":1669417021601,"count":5},{"user":"PointlessOk","timeMS":1669417021701,"count":3},{"user":"beglebum","timeMS":1669417022484,"count":1},{"user":"SeedyEyes","timeMS":1669417023295,"count":4},{"user":"richardsim7","timeMS":1669417023821,"count":1},{"user":"WheatiesR1337","timeMS":1669417026220,"count":5},{"user":"ForeverMalone","timeMS":1669417026501,"count":7},{"user":"explohd","timeMS":1669417026750,"count":10},{"user":"xsneakerheadx94","timeMS":1669417027135,"count":5},{"user":"BrownTownBrown","timeMS":1669417027714,"count":5},{"user":"amazonianathena98","timeMS":1669417027893,"count":5},{"user":"ForeverMalone","timeMS":1669417029016,"count":7},{"user":"cajunrabbit90","timeMS":1669417031760,"count":10},{"user":"Lotharou","timeMS":1669417033272,"count":10},{"user":"Scyral","timeMS":1669417035510,"count":5},{"user":"Lotharou","timeMS":1669417035943,"count":10},{"user":"Deadenterprise","timeMS":1669417036238,"count":5},{"user":"daskichan","timeMS":1669417056139,"count":5},{"user":"Second_Trumpet","timeMS":1669417070249,"count":4},{"user":"Scyral","timeMS":1669417510023,"count":5},{"user":"amazonianathena98","timeMS":1669418009132,"count":1},{"user":"rulerofwax","timeMS":1669419008281,"count":4},{"user":"rulerofwax","timeMS":1669419011992,"count":1},{"user":"rulerofwax","timeMS":1669419014261,"count":3},{"user":"PolarizedBoi","timeMS":1669419028315,"count":3},{"user":"Lotharou","timeMS":1669419045197,"count":1},{"user":"Lotharou","timeMS":1669419053032,"count":1},{"user":"Lotharou","timeMS":1669419089277,"count":1},{"user":"rulerofwax","timeMS":1669419091417,"count":6},{"user":"Lotharou","timeMS":1669419091679,"count":1},{"user":"Lotharou","timeMS":1669419095686,"count":6},{"user":"rulerofwax","timeMS":1669419096214,"count":5},{"user":"Rezoli","timeMS":1669419098704,"count":9},{"user":"treyorrr","timeMS":1669419098736,"count":6},{"user":"richardsim7","timeMS":1669419099002,"count":1},{"user":"Rezoli","timeMS":1669419100208,"count":9},{"user":"Lotharou","timeMS":1669419102259,"count":6},{"user":"jakenosnek","timeMS":1669419103031,"count":6},{"user":"DontTazeMeBro44","timeMS":1669419103365,"count":6},{"user":"dbcallector","timeMS":1669419104440,"count":6},{"user":"Rezoli","timeMS":1669419105214,"count":6},{"user":"BrownTownBrown","timeMS":1669419106471,"count":9},{"user":"SourLemonLeaf","timeMS":1669419107091,"count":4},{"user":"atomysktrue","timeMS":1669419107132,"count":7},{"user":"PolarizedBoi","timeMS":1669419108086,"count":3},{"user":"Rezoli","timeMS":1669419110273,"count":6},{"user":"SourLemonLeaf","timeMS":1669419114541,"count":4},{"user":"Deadenterprise","timeMS":1669419115469,"count":5},{"user":"razorblahd","timeMS":1669419118190,"count":9},{"user":"Rezoli","timeMS":1669419118853,"count":6},{"user":"richardsim7","timeMS":1669419119732,"count":1},{"user":"PolarizedBoi","timeMS":1669419120018,"count":6},{"user":"BrownTownBrown","timeMS":1669419127012,"count":9},{"user":"razorblahd","timeMS":1669419127676,"count":6},{"user":"chriskeyy","timeMS":1669419130765,"count":11},{"user":"atomysktrue","timeMS":1669419130860,"count":6},{"user":"DontTazeMeBro44","timeMS":1669419134632,"count":6},{"user":"jakenosnek","timeMS":1669419138282,"count":6},{"user":"Rezoli","timeMS":1669419138539,"count":6},{"user":"Rezoli","timeMS":1669419139386,"count":6},{"user":"atomysktrue","timeMS":1669419152322,"count":6},{"user":"FridayAtElmStreet","timeMS":1669419584594,"count":1},{"user":"jakenosnek","timeMS":1669419678923,"count":5},{"user":"dbcallector","timeMS":1669419688000,"count":5},{"user":"MynockGate","timeMS":1669419690375,"count":5},{"user":"Scyral","timeMS":1669419696200,"count":5},{"user":"michaels4n","timeMS":1669419703384,"count":5},{"user":"atomysktrue","timeMS":1669419709489,"count":5},{"user":"FridayAtElmStreet","timeMS":1669419712319,"count":1},{"user":"michaels4n","timeMS":1669419770899,"count":5},{"user":"atomysktrue","timeMS":1669419776706,"count":5},{"user":"dbcallector","timeMS":1669419777549,"count":5},{"user":"FridayAtElmStreet","timeMS":1669419778928,"count":1},{"user":"jakenosnek","timeMS":1669419801716,"count":5},{"user":"MynockGate","timeMS":1669419804527,"count":5},{"user":"UVCW","timeMS":1669419806327,"count":5},{"user":"BrownTownBrown","timeMS":1669419808460,"count":5},{"user":"cajunrabbit90","timeMS":1669419812970,"count":5},{"user":"Deadenterprise","timeMS":1669419825786,"count":5},{"user":"dbcallector","timeMS":1669421057234,"count":1},{"user":"dbcallector","timeMS":1669422469770,"count":6},{"user":"michaels4n","timeMS":1669422477567,"count":5},{"user":"Scyral","timeMS":1669422485109,"count":5},{"user":"AzraeII","timeMS":1669423160229,"count":6},{"user":"BrownTownBrown","timeMS":1669423330912,"count":7},{"user":"beglebum","timeMS":1669423332446,"count":1},{"user":"michaels4n","timeMS":1669423333945,"count":4},{"user":"Du6e","timeMS":1669423334784,"count":4},{"user":"dbcallector","timeMS":1669423339304,"count":10},{"user":"atomysktrue","timeMS":1669423339449,"count":1},{"user":"UVCW","timeMS":1669423339927,"count":5},{"user":"daskichan","timeMS":1669423343027,"count":6},{"user":"yam_cakes","timeMS":1669423343365,"count":4},{"user":"The_GhostWarrior","timeMS":1669423343392,"count":3},{"user":"Scyral","timeMS":1669423343684,"count":6},{"user":"Shiny_Cony_","timeMS":1669423351075,"count":1},{"user":"dbcallector","timeMS":1669423357384,"count":1},{"user":"stickypricks","timeMS":1669423362091,"count":5},{"user":"dbcallector","timeMS":1669423372787,"count":9},{"user":"michaels4n","timeMS":1669423452506,"count":5},{"user":"daskichan","timeMS":1669423453281,"count":3},{"user":"Du6e","timeMS":1669423453466,"count":6},{"user":"bruce_waang","timeMS":1669423454323,"count":4},{"user":"Scyral","timeMS":1669423457958,"count":5},{"user":"dbcallector","timeMS":1669423458552,"count":11},{"user":"MynockGate","timeMS":1669423463329,"count":6},{"user":"BrownTownBrown","timeMS":1669423464420,"count":3},{"user":"AstralGrapes","timeMS":1669423465648,"count":5},{"user":"michaels4n","timeMS":1669423470010,"count":1},{"user":"dbcallector","timeMS":1669423470840,"count":22},{"user":"daskichan","timeMS":1669423485736,"count":3},{"user":"Deadenterprise","timeMS":1669423487397,"count":6},{"user":"dbcallector","timeMS":1669423496208,"count":11},{"user":"BrownTownBrown","timeMS":1669423498195,"count":4},{"user":"Scyral","timeMS":1669423609813,"count":1},{"user":"atomysktrue","timeMS":1669423675546,"count":3},{"user":"CarlosTheGardener","timeMS":1669424382010,"count":1},{"user":"Lotharou","timeMS":1669424394397,"count":1},{"user":"Scyral","timeMS":1669424401668,"count":5},{"user":"Spired12","timeMS":1669424410187,"count":1},{"user":"TheSisk0","timeMS":1669424414807,"count":1},{"user":"Second_Trumpet","timeMS":1669424766236,"count":4},{"user":"michaels4n","timeMS":1669424773641,"count":5},{"user":"MynockGate","timeMS":1669424783101,"count":5},{"user":"SeedyEyes","timeMS":1669424785493,"count":4},{"user":"DuderGuyDude","timeMS":1669425901673,"count":3},{"user":"Second_Trumpet","timeMS":1669425939437,"count":1},{"user":"BrownTownBrown","timeMS":1669425953897,"count":4},{"user":"torp1337","timeMS":1669425962169,"count":4},{"user":"dbcallector","timeMS":1669425966935,"count":5},{"user":"amazonianathena98","timeMS":1669425977251,"count":6},{"user":"PDCollins","timeMS":1669425981944,"count":6},{"user":"amazonianathena98","timeMS":1669426073908,"count":1},{"user":"FridayAtElmStreet","timeMS":1669426141674,"count":1},{"user":"amazonianathena98","timeMS":1669426365852,"count":1},{"user":"daskichan","timeMS":1669426624553,"count":4},{"user":"dbcallector","timeMS":1669426655873,"count":8},{"user":"Second_Trumpet","timeMS":1669426759438,"count":4},{"user":"TheSisk0","timeMS":1669426776239,"count":4},{"user":"BrownTownBrown","timeMS":1669426836515,"count":4},{"user":"xfatxninjax","timeMS":1669427766629,"count":2},{"user":"dbcallector","timeMS":1669427891252,"count":7},{"user":"UVCW","timeMS":1669428081075,"count":2},{"user":"argyle_pigeon","timeMS":1669428360922,"count":3},{"user":"dbcallector","timeMS":1669430270862,"count":6},{"user":"Evan_Al_Mighty","timeMS":1669432220679,"count":10},{"user":"KadeemScheme","timeMS":1669437276798,"count":1},{"user":"dbcallector","timeMS":1669437363696,"count":1},{"user":"dbcallector","timeMS":1669437771514,"count":3},{"user":"amazonianathena98","timeMS":1669437810630,"count":1},{"user":"markswanmusic","timeMS":1669437995490,"count":7},{"user":"unrealdustin","timeMS":1669438018089,"count":5},{"user":"Du6e","timeMS":1669438021045,"count":3},{"user":"Arcannition","timeMS":1669438031473,"count":3},{"user":"ProtusMose","timeMS":1669438032418,"count":2},{"user":"yam_cakes","timeMS":1669438034506,"count":20},{"user":"dbcallector","timeMS":1669438038499,"count":7},{"user":"yam_cakes","timeMS":1669438038892,"count":12},{"user":"ProtusMose","timeMS":1669438043822,"count":8},{"user":"Lotharou","timeMS":1669438045688,"count":17},{"user":"amazonianathena98","timeMS":1669438047708,"count":3},{"user":"Wallsh_","timeMS":1669438050200,"count":9},{"user":"Wallsh_","timeMS":1669438055208,"count":6},{"user":"WheatiesR1337","timeMS":1669438058131,"count":6},{"user":"markswanmusic","timeMS":1669438062160,"count":6},{"user":"SeedyEyes","timeMS":1669438074455,"count":13},{"user":"yam_cakes","timeMS":1669438084044,"count":4},{"user":"DrexsteinA","timeMS":1669438105222,"count":3},{"user":"yam_cakes","timeMS":1669438490712,"count":1},{"user":"amazonianathena98","timeMS":1669438498227,"count":5},{"user":"dbcallector","timeMS":1669438521792,"count":5},{"user":"chriskeyy","timeMS":1669438706617,"count":1},{"user":"yam_cakes","timeMS":1669438713184,"count":1},{"user":"MynockGate","timeMS":1669438990257,"count":10},{"user":"UVCW","timeMS":1669439612972,"count":3},{"user":"Evan_Al_Mighty","timeMS":1669440045734,"count":9},{"user":"Evan_Al_Mighty","timeMS":1669440243736,"count":10},{"user":"Du6e","timeMS":1669440244946,"count":11},{"user":"PointlessOk","timeMS":1669440251520,"count":10},{"user":"dbcallector","timeMS":1669440252636,"count":8},{"user":"DrexsteinA","timeMS":1669440255556,"count":5},{"user":"explohd","timeMS":1669440259043,"count":10},{"user":"Evan_Al_Mighty","timeMS":1669440261257,"count":6},{"user":"BrownTownBrown","timeMS":1669440261435,"count":5},{"user":"Scyral","timeMS":1669440261743,"count":15},{"user":"Lotharou","timeMS":1669440262480,"count":10},{"user":"MynockGate","timeMS":1669440267875,"count":10},{"user":"drwhethan","timeMS":1669440269036,"count":1},{"user":"BlueWhale_02","timeMS":1669440274945,"count":30},{"user":"BrownTownBrown","timeMS":1669440276724,"count":5},{"user":"unmakeyourselff","timeMS":1669440278470,"count":7},{"user":"dbcallector","timeMS":1669440280625,"count":10},{"user":"markswanmusic","timeMS":1669440282622,"count":5},{"user":"thicckingcolombo","timeMS":1669440286203,"count":7},{"user":"Evan_Al_Mighty","timeMS":1669440289595,"count":7},{"user":"Lotharou","timeMS":1669440290286,"count":5},{"user":"BlueWhale_02","timeMS":1669440293097,"count":15},{"user":"dbcallector","timeMS":1669440297050,"count":20},{"user":"Euphemysticism","timeMS":1669440298636,"count":6},{"user":"BlueWhale_02","timeMS":1669440298720,"count":14},{"user":"FridayAtElmStreet","timeMS":1669440310391,"count":1},{"user":"BlueWhale_02","timeMS":1669440317849,"count":6},{"user":"yam_cakes","timeMS":1669440330197,"count":1},{"user":"Euphemysticism","timeMS":1669440330232,"count":4},{"user":"KadeemScheme","timeMS":1669440472432,"count":2},{"user":"jakenosnek","timeMS":1669440554401,"count":4},{"user":"yam_cakes","timeMS":1669440592241,"count":6},{"user":"Euphemysticism","timeMS":1669440602265,"count":4},{"user":"SeedyEyes","timeMS":1669440682924,"count":9},{"user":"Lotharou","timeMS":1669440689606,"count":9},{"user":"dbcallector","timeMS":1669440694909,"count":9},{"user":"DrexsteinA","timeMS":1669440705228,"count":9},{"user":"yam_cakes","timeMS":1669440714413,"count":9},{"user":"yam_cakes","timeMS":1669440724424,"count":9},{"user":"SeedyEyes","timeMS":1669440733628,"count":12},{"user":"Euphemysticism","timeMS":1669440751896,"count":1},{"user":"yam_cakes","timeMS":1669440777668,"count":1},{"user":"PyknicRob","timeMS":1669440797462,"count":5},{"user":"FrostedFerrets","timeMS":1669440800066,"count":1},{"user":"yam_cakes","timeMS":1669440830544,"count":11},{"user":"MynockGate","timeMS":1669441405907,"count":3},{"user":"dbcallector","timeMS":1669441410160,"count":7},{"user":"SeedyEyes","timeMS":1669441414512,"count":10},{"user":"Lotharou","timeMS":1669441417897,"count":7},{"user":"DrexsteinA","timeMS":1669441420729,"count":5},{"user":"MynockGate","timeMS":1669441471618,"count":8},{"user":"yam_cakes","timeMS":1669441478506,"count":6},{"user":"SeedyEyes","timeMS":1669441602419,"count":8},{"user":"yam_cakes","timeMS":1669441609856,"count":6},{"user":"dbcallector","timeMS":1669441611403,"count":9},{"user":"jakenosnek","timeMS":1669441612090,"count":6},{"user":"drwhethan","timeMS":1669441621144,"count":3},{"user":"Lotharou","timeMS":1669441621255,"count":6},{"user":"Du6e","timeMS":1669441622294,"count":6},{"user":"Lotharou","timeMS":1669441623715,"count":6},{"user":"MynockGate","timeMS":1669441623998,"count":7},{"user":"SeedyEyes","timeMS":1669441625875,"count":12},{"user":"Scyral","timeMS":1669441638015,"count":6},{"user":"yam_cakes","timeMS":1669441640130,"count":7},{"user":"SeedyEyes","timeMS":1669441651560,"count":14},{"user":"yam_cakes","timeMS":1669441796667,"count":1},{"user":"drwhethan","timeMS":1669441797152,"count":1},{"user":"BobbieShroom","timeMS":1669441800853,"count":1},{"user":"FridayAtElmStreet","timeMS":1669441802622,"count":1},{"user":"UVCW","timeMS":1669441804718,"count":2},{"user":"MynockGate","timeMS":1669441807303,"count":8},{"user":"dbcallector","timeMS":1669441928291,"count":2},{"user":"SeedyEyes","timeMS":1669441933074,"count":1},{"user":"BrownTownBrown","timeMS":1669441937592,"count":2},{"user":"yam_cakes","timeMS":1669441944031,"count":2},{"user":"FridayAtElmStreet","timeMS":1669441954839,"count":1},{"user":"MynockGate","timeMS":1669441960813,"count":2},{"user":"drwhethan","timeMS":1669442540284,"count":1},{"user":"dbcallector","timeMS":1669442550959,"count":2},{"user":"yam_cakes","timeMS":1669442555324,"count":1},{"user":"drwhethan","timeMS":1669442564226,"count":2},{"user":"yam_cakes","timeMS":1669442579139,"count":2},{"user":"dbcallector","timeMS":1669442631152,"count":2},{"user":"FridayAtElmStreet","timeMS":1669442645957,"count":5},{"user":"MynockGate","timeMS":1669442706561,"count":10},{"user":"MynockGate","timeMS":1669442746210,"count":10},{"user":"Scyral","timeMS":1669442757176,"count":10},{"user":"SeedyEyes","timeMS":1669442774070,"count":10},{"user":"MynockGate","timeMS":1669442938543,"count":10},{"user":"BrownTownBrown","timeMS":1669442946514,"count":10},{"user":"dbcallector","timeMS":1669442958977,"count":10},{"user":"MynockGate","timeMS":1669442964175,"count":10},{"user":"dbcallector","timeMS":1669442986948,"count":10},{"user":"MynockGate","timeMS":1669442992404,"count":10},{"user":"SeedyEyes","timeMS":1669443004652,"count":10},{"user":"chriskeyy","timeMS":1669443007545,"count":10},{"user":"yam_cakes","timeMS":1669443015889,"count":6},{"user":"MynockGate","timeMS":1669443017665,"count":10},{"user":"dbcallector","timeMS":1669443049195,"count":2},{"user":"Scyral","timeMS":1669443054758,"count":2},{"user":"SeedyEyes","timeMS":1669443058425,"count":2},{"user":"BrownTownBrown","timeMS":1669443061203,"count":2},{"user":"yam_cakes","timeMS":1669443066437,"count":1},{"user":"Scyral","timeMS":1669443086858,"count":2},{"user":"dbcallector","timeMS":1669443099616,"count":4},{"user":"chriskeyy","timeMS":1669443101854,"count":10},{"user":"Euphemysticism","timeMS":1669443268609,"count":1},{"user":"FridayAtElmStreet","timeMS":1669443618996,"count":1},{"user":"WheatiesR1337","timeMS":1669443635710,"count":1},{"user":"dbcallector","timeMS":1669443644136,"count":1},{"user":"FridayAtElmStreet","timeMS":1669443650047,"count":1},{"user":"BrownTownBrown","timeMS":1669443658587,"count":1},{"user":"SeedyEyes","timeMS":1669443696631,"count":4},{"user":"jakenosnek","timeMS":1669443708371,"count":4},{"user":"MynockGate","timeMS":1669443710532,"count":4},{"user":"Lotharou","timeMS":1669443715693,"count":4},{"user":"BrownTownBrown","timeMS":1669443717164,"count":4},{"user":"xfatxninjax","timeMS":1669443718712,"count":4},{"user":"dbcallector","timeMS":1669443729715,"count":4},{"user":"MynockGate","timeMS":1669443776859,"count":10},{"user":"yam_cakes","timeMS":1669443802925,"count":1},{"user":"yam_cakes","timeMS":1669443812894,"count":2},{"user":"FridayAtElmStreet","timeMS":1669445033432,"count":1},{"user":"chriskeyy","timeMS":1669445039794,"count":1},{"user":"FridayAtElmStreet","timeMS":1669445593414,"count":1},{"user":"JRBangs","timeMS":1669445862089,"count":1},{"user":"MynockGate","timeMS":1669446462235,"count":4},{"user":"yam_cakes","timeMS":1669446473625,"count":5},{"user":"DrexsteinA","timeMS":1669446478810,"count":3},{"user":"SeedyEyes","timeMS":1669446494116,"count":6},{"user":"yam_cakes","timeMS":1669446975841,"count":1},{"user":"chriskeyy","timeMS":1669446996111,"count":1},{"user":"markswanmusic","timeMS":1669447025221,"count":9},{"user":"KadeemScheme","timeMS":1669447279070,"count":2},{"user":"jakenosnek","timeMS":1669447421090,"count":4},{"user":"Lotharou","timeMS":1669447447801,"count":2},{"user":"Lotharou","timeMS":1669447450459,"count":2},{"user":"FridayAtElmStreet","timeMS":1669447753155,"count":1},{"user":"KadeemScheme","timeMS":1669448032347,"count":4},{"user":"Lotharou","timeMS":1669448478554,"count":2},{"user":"Lotharou","timeMS":1669448484181,"count":2},{"user":"jakenosnek","timeMS":1669448486100,"count":2},{"user":"SeedyEyes","timeMS":1669448508606,"count":6},{"user":"markswanmusic","timeMS":1669448519378,"count":6},{"user":"MynockGate","timeMS":1669448548566,"count":5},{"user":"peachfurs","timeMS":1669448553731,"count":5},{"user":"markswanmusic","timeMS":1669448789209,"count":15},{"user":"KadeemScheme","timeMS":1669448949427,"count":1},{"user":"Lotharou","timeMS":1669449618285,"count":1},{"user":"xfatxninjax","timeMS":1669449620074,"count":2},{"user":"FridayAtElmStreet","timeMS":1669449620611,"count":1},{"user":"Ben64r","timeMS":1669449622105,"count":1},{"user":"Tomaetchen","timeMS":1669449623752,"count":3},{"user":"MynockGate","timeMS":1669449628546,"count":10},{"user":"CHEEsey_bussy","timeMS":1669449629060,"count":2},{"user":"SeedyEyes","timeMS":1669449631280,"count":1},{"user":"MynockGate","timeMS":1669449632142,"count":10},{"user":"dbcallector","timeMS":1669449639759,"count":10},{"user":"Lotharou","timeMS":1669449640901,"count":10},{"user":"peachfurs","timeMS":1669449641142,"count":10},{"user":"SeedyEyes","timeMS":1669449642727,"count":10},{"user":"yam_cakes","timeMS":1669449642778,"count":1},{"user":"Lotharou","timeMS":1669449643109,"count":10},{"user":"MynockGate","timeMS":1669449645036,"count":10},{"user":"Deadenterprise","timeMS":1669449650381,"count":10},{"user":"Tomaetchen","timeMS":1669449652042,"count":10},{"user":"MynockGate","timeMS":1669449655626,"count":10},{"user":"dbcallector","timeMS":1669449659489,"count":5},{"user":"jakenosnek","timeMS":1669449663772,"count":10},{"user":"markswanmusic","timeMS":1669449663777,"count":10},{"user":"MynockGate","timeMS":1669449667777,"count":10},{"user":"dbcallector","timeMS":1669449732546,"count":1},{"user":"Arcannition","timeMS":1669449739175,"count":1},{"user":"markswanmusic","timeMS":1669450768104,"count":6},{"user":"BrownTownBrown","timeMS":1669451615050,"count":4},{"user":"MynockGate","timeMS":1669451625522,"count":6},{"user":"phizx343","timeMS":1669451637017,"count":9},{"user":"McNeww","timeMS":1669451644549,"count":9},{"user":"markswanmusic","timeMS":1669451644836,"count":11},{"user":"Lotharou","timeMS":1669451650207,"count":11},{"user":"MynockGate","timeMS":1669451695208,"count":6},{"user":"McNeww","timeMS":1669451728211,"count":6},{"user":"dbcallector","timeMS":1669451735943,"count":10},{"user":"cuddlepuddl3","timeMS":1669451747963,"count":10},{"user":"markswanmusic","timeMS":1669451773766,"count":12},{"user":"suddenlyzoe","timeMS":1669451799656,"count":6},{"user":"jakenosnek","timeMS":1669451839838,"count":10},{"user":"BrownTownBrown","timeMS":1669452200420,"count":1},{"user":"markswanmusic","timeMS":1669474149817,"count":8},{"user":"thicckingcolombo","timeMS":1669475361276,"count":5},{"user":"markswanmusic","timeMS":1669478987095,"count":8},{"user":"coachchrisaz1","timeMS":1669478995989,"count":8},{"user":"Forrest_ThePugKing","timeMS":1669480529994,"count":3},{"user":"MynockGate","timeMS":1669492405813,"count":3},{"user":"viviz","timeMS":1669492422021,"count":3},{"user":"rulerofwax","timeMS":1669492431173,"count":4},{"user":"Nightbot","timeMS":1669492436273,"count":10},{"user":"dbcallector","timeMS":1669492438093,"count":7},{"user":"MynockGate","timeMS":1669492487602,"count":10},{"user":"daskichan","timeMS":1669492508501,"count":6},{"user":"dbcallector","timeMS":1669492538444,"count":10},{"user":"MynockGate","timeMS":1669492590703,"count":10},{"user":"dbcallector","timeMS":1669492723563,"count":10},{"user":"MynockGate","timeMS":1669492743142,"count":10},{"user":"richardsim7","timeMS":1669492824998,"count":1},{"user":"Nightbot","timeMS":1669492834772,"count":10},{"user":"MynockGate","timeMS":1669492835576,"count":10},{"user":"xfatxninjax","timeMS":1669492849135,"count":10},{"user":"QuiesNova","timeMS":1669492850038,"count":10},{"user":"cajunrabbit90","timeMS":1669492860718,"count":20},{"user":"rulerofwax","timeMS":1669492873416,"count":2},{"user":"dbcallector","timeMS":1669492874056,"count":10},{"user":"MynockGate","timeMS":1669492877856,"count":10},{"user":"Nightbot","timeMS":1669492882554,"count":10},{"user":"daskichan","timeMS":1669492882634,"count":6},{"user":"viviz","timeMS":1669492886153,"count":4},{"user":"xfatxninjax","timeMS":1669492886268,"count":10},{"user":"Decentpackage","timeMS":1669492903105,"count":10},{"user":"rulerofwax","timeMS":1669492920182,"count":10},{"user":"dbcallector","timeMS":1669493116928,"count":6},{"user":"MynockGate","timeMS":1669493158038,"count":10},{"user":"dbcallector","timeMS":1669493168513,"count":10},{"user":"xfatxninjax","timeMS":1669493212814,"count":10},{"user":"MynockGate","timeMS":1669493326677,"count":10},{"user":"dbcallector","timeMS":1669493616373,"count":2},{"user":"MynockGate","timeMS":1669493640703,"count":10},{"user":"daskichan","timeMS":1669493644285,"count":5},{"user":"torp1337","timeMS":1669495458081,"count":4},{"user":"dbcallector","timeMS":1669499822930,"count":4},{"user":"MynockGate","timeMS":1669499837797,"count":10},{"user":"dbcallector","timeMS":1669499852014,"count":10},{"user":"cajunrabbit90","timeMS":1669499870703,"count":10},{"user":"MynockGate","timeMS":1669499876447,"count":10},{"user":"Nightbot","timeMS":1669499902626,"count":10},{"user":"jakenosnek","timeMS":1669500380523,"count":9},{"user":"markswanmusic","timeMS":1669504179126,"count":5},{"user":"Nightbot","timeMS":1669506804544,"count":10},{"user":"daskichan","timeMS":1669506831176,"count":3},{"user":"Nightbot","timeMS":1669508992726,"count":10},{"user":"PolarizedBoi","timeMS":1669508996577,"count":1},{"user":"richardsim7","timeMS":1669509521984,"count":1},{"user":"Nightbot","timeMS":1669509575474,"count":10},{"user":"cajunrabbit90","timeMS":1669509581609,"count":10},{"user":"kimchikelso","timeMS":1669509592866,"count":10},{"user":"cajunrabbit90","timeMS":1669509611422,"count":10},{"user":"ImSpackle","timeMS":1669509618604,"count":10},{"user":"Scyral","timeMS":1669509623620,"count":10},{"user":"UVCW","timeMS":1669509631522,"count":10},{"user":"iNeverKnowMan","timeMS":1669509690562,"count":10},{"user":"jakenosnek","timeMS":1669509706916,"count":2},{"user":"Nightbot","timeMS":1669509740408,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669509755495,"count":10},{"user":"UVCW","timeMS":1669509912888,"count":1},{"user":"atomysktrue","timeMS":1669510057782,"count":3},{"user":"cajunrabbit90","timeMS":1669510589076,"count":10},{"user":"markswanmusic","timeMS":1669510602230,"count":4},{"user":"MynockGate","timeMS":1669510609554,"count":10},{"user":"markswanmusic","timeMS":1669510741631,"count":5},{"user":"jakenosnek","timeMS":1669511311234,"count":4},{"user":"daskichan","timeMS":1669512233139,"count":1},{"user":"bleedcheez","timeMS":1669512443607,"count":2},{"user":"Nightbot","timeMS":1669513243379,"count":10},{"user":"daskichan","timeMS":1669515113536,"count":5},{"user":"atomysktrue","timeMS":1669515367360,"count":1},{"user":"daskichan","timeMS":1669515378807,"count":1},{"user":"Nightbot","timeMS":1669515388801,"count":10},{"user":"atomysktrue","timeMS":1669515400935,"count":1},{"user":"daskichan","timeMS":1669515416416,"count":5},{"user":"atomysktrue","timeMS":1669515443516,"count":1},{"user":"Nightbot","timeMS":1669515561318,"count":10},{"user":"Nightbot","timeMS":1669517753995,"count":10},{"user":"Nightbot","timeMS":1669517913323,"count":10},{"user":"Nightbot","timeMS":1669518130707,"count":10},{"user":"Nightbot","timeMS":1669518214683,"count":10},{"user":"Nightbot","timeMS":1669518924022,"count":10},{"user":"atomysktrue","timeMS":1669519003841,"count":1},{"user":"jakenosnek","timeMS":1669519015362,"count":10},{"user":"Nightbot","timeMS":1669519506071,"count":10},{"user":"Nightbot","timeMS":1669519763777,"count":10},{"user":"atomysktrue","timeMS":1669519834549,"count":7},{"user":"markswanmusic","timeMS":1669519885041,"count":7},{"user":"markswanmusic","timeMS":1669520116805,"count":11},{"user":"atomysktrue","timeMS":1669520196553,"count":1},{"user":"Second_Trumpet","timeMS":1669520520512,"count":4},{"user":"atomysktrue","timeMS":1669521036441,"count":7},{"user":"jakenosnek","timeMS":1669521043950,"count":7},{"user":"markswanmusic","timeMS":1669521056024,"count":13},{"user":"Gralkor","timeMS":1669521060822,"count":7},{"user":"speak_the_speech","timeMS":1669521061609,"count":8},{"user":"iNeverKnowMan","timeMS":1669521065665,"count":7},{"user":"Second_Trumpet","timeMS":1669521068809,"count":7},{"user":"beglebum","timeMS":1669521077581,"count":2},{"user":"jakenosnek","timeMS":1669521138441,"count":7},{"user":"atomysktrue","timeMS":1669521139295,"count":7},{"user":"atomysktrue","timeMS":1669521145583,"count":7},{"user":"iNeverKnowMan","timeMS":1669521146219,"count":7},{"user":"Gralkor","timeMS":1669521146725,"count":7},{"user":"markswanmusic","timeMS":1669521149880,"count":2},{"user":"WhoYouDrew","timeMS":1669521151117,"count":7},{"user":"ArisakaT99","timeMS":1669521151783,"count":7},{"user":"viviz","timeMS":1669521152803,"count":2},{"user":"Second_Trumpet","timeMS":1669521154126,"count":7},{"user":"iNeverKnowMan","timeMS":1669521156827,"count":7},{"user":"AraSanji","timeMS":1669521157675,"count":8},{"user":"ArisakaT99","timeMS":1669521162786,"count":14},{"user":"xfatxninjax","timeMS":1669521164921,"count":7},{"user":"atomysktrue","timeMS":1669521167850,"count":7},{"user":"richardsim7","timeMS":1669521169283,"count":7},{"user":"BxgHxrns","timeMS":1669521175457,"count":7},{"user":"jakenosnek","timeMS":1669521203301,"count":7},{"user":"Nightbot","timeMS":1669521241307,"count":10},{"user":"ArisakaT99","timeMS":1669521243166,"count":7},{"user":"richardsim7","timeMS":1669521246599,"count":7},{"user":"jakenosnek","timeMS":1669521263706,"count":7},{"user":"Second_Trumpet","timeMS":1669521969099,"count":7},{"user":"jakenosnek","timeMS":1669522123862,"count":7},{"user":"markswanmusic","timeMS":1669522849849,"count":9},{"user":"Lotharou","timeMS":1669522865466,"count":4},{"user":"jakenosnek","timeMS":1669522867297,"count":4},{"user":"FridayAtElmStreet","timeMS":1669523167888,"count":1},{"user":"qgthor","timeMS":1669523376475,"count":7},{"user":"Second_Trumpet","timeMS":1669523945894,"count":7},{"user":"Nightbot","timeMS":1669524814969,"count":10},{"user":"Nightbot","timeMS":1669526107077,"count":10},{"user":"spyder256","timeMS":1669526116242,"count":10},{"user":"Second_Trumpet","timeMS":1669526939758,"count":1},{"user":"bleedcheez","timeMS":1669526966539,"count":6},{"user":"jakenosnek","timeMS":1669527011435,"count":8},{"user":"jakenosnek","timeMS":1669527016786,"count":4},{"user":"HipsterRudolph","timeMS":1669527020517,"count":8},{"user":"WheatiesR1337","timeMS":1669527022183,"count":10},{"user":"Nightbot","timeMS":1669527027552,"count":10},{"user":"slim_cognito420","timeMS":1669527037523,"count":3},{"user":"Lotharou","timeMS":1669527318584,"count":4},{"user":"FridayAtElmStreet","timeMS":1669527747755,"count":1},{"user":"Second_Trumpet","timeMS":1669527908968,"count":1},{"user":"Scyral","timeMS":1669527921727,"count":5},{"user":"FridayAtElmStreet","timeMS":1669527933101,"count":1},{"user":"Scyral","timeMS":1669527936188,"count":5},{"user":"markswanmusic","timeMS":1669527954207,"count":5},{"user":"slim_cognito420","timeMS":1669528331161,"count":8},{"user":"Lotharou","timeMS":1669528332193,"count":8},{"user":"PiercingThread7","timeMS":1669528332228,"count":8},{"user":"MynockGate","timeMS":1669528333046,"count":8},{"user":"undeadtweak","timeMS":1669528333129,"count":8},{"user":"DuderGuyDude","timeMS":1669528333436,"count":8},{"user":"BrownTownBrown","timeMS":1669528333440,"count":8},{"user":"rulerofwax","timeMS":1669528333554,"count":7},{"user":"dbcallector","timeMS":1669528333683,"count":8},{"user":"SeedyEyes","timeMS":1669528333944,"count":8},{"user":"MaiyaDanny","timeMS":1669528334019,"count":8},{"user":"HitTheUsernameLengthLimit","timeMS":1669528334513,"count":8},{"user":"chriskeyy","timeMS":1669528334748,"count":8},{"user":"DrexsteinA","timeMS":1669528334944,"count":8},{"user":"ForbiddenFractal","timeMS":1669528335613,"count":8},{"user":"karleygrey","timeMS":1669528335627,"count":8},{"user":"AzraeII","timeMS":1669528336504,"count":8},{"user":"TheSisk0","timeMS":1669528336608,"count":8},{"user":"rulerofwax","timeMS":1669528336760,"count":7},{"user":"UVCW","timeMS":1669528336772,"count":8},{"user":"ForeverMalone","timeMS":1669528337261,"count":8},{"user":"chriskeyy","timeMS":1669528340369,"count":7},{"user":"atomysktrue","timeMS":1669528342333,"count":8},{"user":"markswanmusic","timeMS":1669528342988,"count":8},{"user":"SeedyEyes","timeMS":1669528344715,"count":8},{"user":"Lotharou","timeMS":1669528350225,"count":7},{"user":"atomysktrue","timeMS":1669528353068,"count":8},{"user":"dbcallector","timeMS":1669528353984,"count":16},{"user":"SeedyEyes","timeMS":1669528354674,"count":8},{"user":"chriskeyy","timeMS":1669528354979,"count":8},{"user":"AraSanji","timeMS":1669528357940,"count":8},{"user":"AzraeII","timeMS":1669528358329,"count":8},{"user":"FridayAtElmStreet","timeMS":1669528360471,"count":1},{"user":"PointlessOk","timeMS":1669528362030,"count":3},{"user":"Tomaetchen","timeMS":1669528364251,"count":5},{"user":"DoctorRoffles","timeMS":1669528366374,"count":5},{"user":"rulerofwax","timeMS":1669528368028,"count":7},{"user":"chriskeyy","timeMS":1669528368665,"count":1},{"user":"Second_Trumpet","timeMS":1669528370330,"count":7},{"user":"SeedyEyes","timeMS":1669528371589,"count":20},{"user":"bleedcheez","timeMS":1669528372226,"count":4},{"user":"dbcallector","timeMS":1669528373100,"count":8},{"user":"SeedyEyes","timeMS":1669528374658,"count":16},{"user":"BrownTownBrown","timeMS":1669528377773,"count":8},{"user":"SeedyEyes","timeMS":1669528380051,"count":8},{"user":"SeedyEyes","timeMS":1669528388915,"count":16},{"user":"chriskeyy","timeMS":1669528392470,"count":7},{"user":"dluith","timeMS":1669528396915,"count":8},{"user":"WheatiesR1337","timeMS":1669528533425,"count":2},{"user":"Second_Trumpet","timeMS":1669528537320,"count":7},{"user":"chriskeyy","timeMS":1669528541035,"count":8},{"user":"DrexsteinA","timeMS":1669528551096,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669528551151,"count":6},{"user":"Nightbot","timeMS":1669529042559,"count":10},{"user":"atomysktrue","timeMS":1669529217839,"count":4},{"user":"Second_Trumpet","timeMS":1669529231585,"count":7},{"user":"Nightbot","timeMS":1669530457865,"count":10},{"user":"Second_Trumpet","timeMS":1669530466005,"count":7},{"user":"FridayAtElmStreet","timeMS":1669530843729,"count":1},{"user":"YeComicMan","timeMS":1669531051566,"count":8},{"user":"FridayAtElmStreet","timeMS":1669531380167,"count":1},{"user":"FridayAtElmStreet","timeMS":1669531816402,"count":3},{"user":"dbcallector","timeMS":1669531823664,"count":3},{"user":"Lotharou","timeMS":1669531829667,"count":1},{"user":"alexieee_","timeMS":1669531831470,"count":3},{"user":"FridayAtElmStreet","timeMS":1669531835187,"count":2},{"user":"MynockGate","timeMS":1669532643708,"count":10},{"user":"MynockGate","timeMS":1669532994130,"count":10},{"user":"Rezoli","timeMS":1669532997274,"count":10},{"user":"MynockGate","timeMS":1669532998372,"count":10},{"user":"dbcallector","timeMS":1669532999171,"count":10},{"user":"MynockGate","timeMS":1669533003088,"count":10},{"user":"MynockGate","timeMS":1669533006725,"count":10},{"user":"seagespacho","timeMS":1669533009825,"count":10},{"user":"MynockGate","timeMS":1669533011139,"count":10},{"user":"MynockGate","timeMS":1669533015646,"count":10},{"user":"MynockGate","timeMS":1669533020511,"count":10},{"user":"chriskeyy","timeMS":1669533022165,"count":10},{"user":"zona_james","timeMS":1669533024559,"count":10},{"user":"dungeonsiren","timeMS":1669533024740,"count":10},{"user":"MynockGate","timeMS":1669533025865,"count":10},{"user":"Rezoli","timeMS":1669533027742,"count":10},{"user":"MynockGate","timeMS":1669533029745,"count":10},{"user":"FridayAtElmStreet","timeMS":1669533033099,"count":1},{"user":"MynockGate","timeMS":1669533107386,"count":10},{"user":"Nightbot","timeMS":1669533126895,"count":10},{"user":"MynockGate","timeMS":1669533159045,"count":10},{"user":"Rezoli","timeMS":1669533165468,"count":10},{"user":"MynockGate","timeMS":1669533180550,"count":10},{"user":"iNeverKnowMan","timeMS":1669533214407,"count":10},{"user":"FridayAtElmStreet","timeMS":1669533399917,"count":1},{"user":"beglebum","timeMS":1669533404868,"count":1},{"user":"jakenosnek","timeMS":1669533836254,"count":8},{"user":"argyle_pigeon","timeMS":1669534481131,"count":5},{"user":"FridayAtElmStreet","timeMS":1669535349732,"count":1},{"user":"JRBangs","timeMS":1669535379060,"count":1},{"user":"FridayAtElmStreet","timeMS":1669535418915,"count":1},{"user":"alexieee_","timeMS":1669535433905,"count":4},{"user":"FridayAtElmStreet","timeMS":1669535438006,"count":1},{"user":"argyle_pigeon","timeMS":1669535620931,"count":9},{"user":"Nightbot","timeMS":1669536250774,"count":10},{"user":"argyle_pigeon","timeMS":1669537278878,"count":6},{"user":"jakenosnek","timeMS":1669537501216,"count":4},{"user":"FridayAtElmStreet","timeMS":1669542489473,"count":1},{"user":"FridayAtElmStreet","timeMS":1669542576881,"count":1},{"user":"FridayAtElmStreet","timeMS":1669542880370,"count":3},{"user":"FridayAtElmStreet","timeMS":1669542895449,"count":4},{"user":"DrexsteinA","timeMS":1669542904548,"count":5},{"user":"FridayAtElmStreet","timeMS":1669542957036,"count":1},{"user":"icrywhenicum_","timeMS":1669542985360,"count":4},{"user":"icrywhenicum_","timeMS":1669543197385,"count":4},{"user":"icrywhenicum_","timeMS":1669543224317,"count":2},{"user":"FridayAtElmStreet","timeMS":1669543534321,"count":2},{"user":"FridayAtElmStreet","timeMS":1669543613445,"count":2},{"user":"FridayAtElmStreet","timeMS":1669544804515,"count":1},{"user":"DrexsteinA","timeMS":1669544837024,"count":1},{"user":"KadeemScheme","timeMS":1669547705192,"count":1},{"user":"MynockGate","timeMS":1669552569659,"count":10},{"user":"MynockGate","timeMS":1669552635272,"count":10},{"user":"cajunrabbit90","timeMS":1669552654422,"count":10},{"user":"McNeww","timeMS":1669552664342,"count":10},{"user":"cajunrabbit90","timeMS":1669552667609,"count":10},{"user":"MynockGate","timeMS":1669552685588,"count":10},{"user":"MynockGate","timeMS":1669552696799,"count":10},{"user":"McNeww","timeMS":1669556084307,"count":1},{"user":"MynockGate","timeMS":1669556131856,"count":1},{"user":"MynockGate","timeMS":1669556203982,"count":10},{"user":"cajunrabbit90","timeMS":1669556206879,"count":10},{"user":"McNeww","timeMS":1669556213563,"count":10},{"user":"McNeww","timeMS":1669556340807,"count":10},{"user":"MynockGate","timeMS":1669556469706,"count":9},{"user":"MynockGate","timeMS":1669556481799,"count":6},{"user":"Forrest_ThePugKing","timeMS":1669556497729,"count":9},{"user":"McNeww","timeMS":1669556634592,"count":6},{"user":"MynockGate","timeMS":1669556736705,"count":6},{"user":"MynockGate","timeMS":1669562427093,"count":10},{"user":"MynockGate","timeMS":1669562466755,"count":10},{"user":"cajunrabbit90","timeMS":1669562472814,"count":10},{"user":"Nightbot","timeMS":1669562494254,"count":10},{"user":"Lotharou","timeMS":1669564546131,"count":1},{"user":"Lotharou","timeMS":1669564596161,"count":1},{"user":"Lotharou","timeMS":1669568042395,"count":1},{"user":"Lotharou","timeMS":1669568121559,"count":1},{"user":"WhoYouDrew","timeMS":1669568971344,"count":1},{"user":"MynockGate","timeMS":1669569219140,"count":10},{"user":"MynockGate","timeMS":1669571436925,"count":10},{"user":"cajunrabbit90","timeMS":1669571443155,"count":10},{"user":"Nightbot","timeMS":1669571445466,"count":10},{"user":"cajunrabbit90","timeMS":1669571458198,"count":10},{"user":"MynockGate","timeMS":1669571465699,"count":10},{"user":"MynockGate","timeMS":1669571539532,"count":10},{"user":"cajunrabbit90","timeMS":1669571546754,"count":10},{"user":"Lotharou","timeMS":1669571562285,"count":2},{"user":"MynockGate","timeMS":1669571582409,"count":2},{"user":"Rezoli","timeMS":1669572840510,"count":1},{"user":"FridayAtElmStreet","timeMS":1669572884234,"count":1},{"user":"Lotharou","timeMS":1669573343691,"count":1},{"user":"FridayAtElmStreet","timeMS":1669573420769,"count":1},{"user":"FridayAtElmStreet","timeMS":1669573428191,"count":1},{"user":"FridayAtElmStreet","timeMS":1669575328616,"count":1},{"user":"NakedManInSocks","timeMS":1669575339101,"count":1},{"user":"bleedcheez","timeMS":1669575749984,"count":3},{"user":"Forrest_ThePugKing","timeMS":1669575766839,"count":3},{"user":"FridayAtElmStreet","timeMS":1669581917048,"count":2},{"user":"FridayAtElmStreet","timeMS":1669581972127,"count":1},{"user":"MynockGate","timeMS":1669582082459,"count":2},{"user":"MynockGate","timeMS":1669582146917,"count":2},{"user":"MynockGate","timeMS":1669582242708,"count":2},{"user":"MynockGate","timeMS":1669582445240,"count":2},{"user":"MynockGate","timeMS":1669582829045,"count":2},{"user":"MynockGate","timeMS":1669582873947,"count":2},{"user":"dbcallector","timeMS":1669582890143,"count":2},{"user":"BrownTownBrown","timeMS":1669582921077,"count":1},{"user":"Nightbot","timeMS":1669582925304,"count":10},{"user":"cajunrabbit90","timeMS":1669582935735,"count":10},{"user":"McNeww","timeMS":1669583024433,"count":3},{"user":"MynockGate","timeMS":1669583614646,"count":2},{"user":"McNeww","timeMS":1669584698829,"count":3},{"user":"richardsim7","timeMS":1669584712318,"count":1},{"user":"viviz","timeMS":1669584723312,"count":1},{"user":"BrownTownBrown","timeMS":1669584724289,"count":3},{"user":"McNeww","timeMS":1669585521364,"count":1},{"user":"daskichan","timeMS":1669585548088,"count":3},{"user":"PointlessOk","timeMS":1669586832938,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669586847184,"count":1},{"user":"ItsMeSuperbad","timeMS":1669586851484,"count":1},{"user":"chriskeyy","timeMS":1669589033692,"count":18},{"user":"richardsim7","timeMS":1669589826417,"count":5},{"user":"MynockGate","timeMS":1669589840541,"count":4},{"user":"atomysktrue","timeMS":1669590025095,"count":1},{"user":"atomysktrue","timeMS":1669591392547,"count":3},{"user":"richardsim7","timeMS":1669591397649,"count":1},{"user":"atomysktrue","timeMS":1669591403316,"count":3},{"user":"jakenosnek","timeMS":1669591406249,"count":4},{"user":"Nightbot","timeMS":1669591406423,"count":10},{"user":"UVCW","timeMS":1669591413170,"count":5},{"user":"xfatxninjax","timeMS":1669591416176,"count":10},{"user":"Scyral","timeMS":1669591418707,"count":10},{"user":"Scyral","timeMS":1669591421629,"count":10},{"user":"Tomaetchen","timeMS":1669591422045,"count":10},{"user":"McNeww","timeMS":1669591429131,"count":10},{"user":"cajunrabbit90","timeMS":1669591434934,"count":20},{"user":"Arcannition","timeMS":1669591444727,"count":20},{"user":"spyder256","timeMS":1669591448906,"count":10},{"user":"McNeww","timeMS":1669591474264,"count":10},{"user":"ForeverMalone","timeMS":1669591485874,"count":20},{"user":"Nightbot","timeMS":1669594997729,"count":10},{"user":"FiveGetsYouTen","timeMS":1669596302211,"count":12},{"user":"BrownTownBrown","timeMS":1669596308635,"count":12},{"user":"FiveGetsYouTen","timeMS":1669596314081,"count":19},{"user":"FiveGetsYouTen","timeMS":1669596317081,"count":10},{"user":"TheSisk0","timeMS":1669596335925,"count":19},{"user":"FiveGetsYouTen","timeMS":1669596338810,"count":14},{"user":"Lotharou","timeMS":1669596345283,"count":14},{"user":"MynockGate","timeMS":1669596376431,"count":14},{"user":"asgarnieu","timeMS":1669596485283,"count":5},{"user":"BrownTownBrown","timeMS":1669596511176,"count":4},{"user":"MynockGate","timeMS":1669596692637,"count":10},{"user":"cajunrabbit90","timeMS":1669596727711,"count":10},{"user":"FridayAtElmStreet","timeMS":1669597865781,"count":2},{"user":"UVCW","timeMS":1669598065429,"count":4},{"user":"McNeww","timeMS":1669598217121,"count":10},{"user":"FridayAtElmStreet","timeMS":1669598967113,"count":1},{"user":"FridayAtElmStreet","timeMS":1669599046510,"count":2},{"user":"FiveGetsYouTen","timeMS":1669599050360,"count":7},{"user":"McNeww","timeMS":1669599054740,"count":10},{"user":"slim_cognito420","timeMS":1669599056346,"count":3},{"user":"slim_cognito420","timeMS":1669601022464,"count":3},{"user":"Second_Trumpet","timeMS":1669607829403,"count":7},{"user":"atomysktrue","timeMS":1669607977112,"count":4},{"user":"tiananmen_cubed","timeMS":1669607985985,"count":4},{"user":"guerrero9797","timeMS":1669608447054,"count":1},{"user":"markswanmusic","timeMS":1669608735831,"count":9},{"user":"coachchrisaz1","timeMS":1669608746834,"count":9},{"user":"adamandhisbun","timeMS":1669608774193,"count":15},{"user":"beglebum","timeMS":1669608809804,"count":4},{"user":"spyder256","timeMS":1669608818350,"count":4},{"user":"coachchrisaz1","timeMS":1669608823631,"count":4},{"user":"iNeverKnowMan","timeMS":1669608839559,"count":4},{"user":"Second_Trumpet","timeMS":1669608854972,"count":7},{"user":"Lotharou","timeMS":1669608860386,"count":7},{"user":"mr_mustash","timeMS":1669608867913,"count":7},{"user":"ArisakaT99","timeMS":1669608876904,"count":7},{"user":"FridayAtElmStreet","timeMS":1669611032242,"count":1},{"user":"DrexsteinA","timeMS":1669611041874,"count":1},{"user":"viviz","timeMS":1669611293139,"count":2},{"user":"beglebum","timeMS":1669611343239,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669611353228,"count":2},{"user":"C_a_l_e__","timeMS":1669611356363,"count":2},{"user":"Nightbot","timeMS":1669611791573,"count":10},{"user":"WheatiesR1337","timeMS":1669619478757,"count":1},{"user":"JRBangs","timeMS":1669620371706,"count":1},{"user":"MynockGate","timeMS":1669620385228,"count":4},{"user":"MynockGate","timeMS":1669620402277,"count":10},{"user":"MynockGate","timeMS":1669620407964,"count":10},{"user":"Scyral","timeMS":1669620632289,"count":10},{"user":"MynockGate","timeMS":1669620958127,"count":10},{"user":"MynockGate","timeMS":1669620962865,"count":10},{"user":"MynockGate","timeMS":1669620987185,"count":2},{"user":"MynockGate","timeMS":1669621576975,"count":10},{"user":"amaiumami","timeMS":1669621736700,"count":10},{"user":"WheatiesR1337","timeMS":1669621740454,"count":6},{"user":"WheatiesR1337","timeMS":1669621759996,"count":5},{"user":"MynockGate","timeMS":1669621766208,"count":10},{"user":"BrownTownBrown","timeMS":1669621815224,"count":10},{"user":"Nightbot","timeMS":1669622780076,"count":10},{"user":"MynockGate","timeMS":1669622784659,"count":10},{"user":"Scyral","timeMS":1669622795131,"count":10},{"user":"MynockGate","timeMS":1669623009618,"count":10},{"user":"Nightbot","timeMS":1669623122063,"count":10},{"user":"MynockGate","timeMS":1669623125410,"count":10},{"user":"Tomaetchen","timeMS":1669623132467,"count":6},{"user":"BrownTownBrown","timeMS":1669623150251,"count":4},{"user":"Nightbot","timeMS":1669623212851,"count":10},{"user":"MynockGate","timeMS":1669623282654,"count":10},{"user":"Nightbot","timeMS":1669623298740,"count":10},{"user":"MynockGate","timeMS":1669623307123,"count":10},{"user":"Nightbot","timeMS":1669623604933,"count":10},{"user":"MynockGate","timeMS":1669623608339,"count":10},{"user":"MynockGate","timeMS":1669623618239,"count":10},{"user":"JRBangs","timeMS":1669623624143,"count":15},{"user":"yam_cakes","timeMS":1669623664447,"count":10},{"user":"Nightbot","timeMS":1669623971148,"count":10},{"user":"MynockGate","timeMS":1669623979276,"count":10},{"user":"yam_cakes","timeMS":1669623991047,"count":10},{"user":"jakenosnek","timeMS":1669624070117,"count":10},{"user":"Nightbot","timeMS":1669625339973,"count":10},{"user":"MynockGate","timeMS":1669625369233,"count":10},{"user":"Nightbot","timeMS":1669626913201,"count":10},{"user":"AestheticallyGeeky","timeMS":1669626928405,"count":10},{"user":"Nightbot","timeMS":1669627140177,"count":10},{"user":"yam_cakes","timeMS":1669627148361,"count":10},{"user":"MynockGate","timeMS":1669627154699,"count":10},{"user":"AestheticallyGeeky","timeMS":1669627178600,"count":10},{"user":"Nightbot","timeMS":1669627566443,"count":10},{"user":"AestheticallyGeeky","timeMS":1669627566672,"count":10},{"user":"yam_cakes","timeMS":1669627572188,"count":1},{"user":"MynockGate","timeMS":1669627575155,"count":10},{"user":"yam_cakes","timeMS":1669627576838,"count":10},{"user":"Lotharou","timeMS":1669627584464,"count":10},{"user":"Scyral","timeMS":1669627598553,"count":10},{"user":"MynockGate","timeMS":1669627776632,"count":10},{"user":"UVCW","timeMS":1669627783369,"count":10},{"user":"MynockGate","timeMS":1669627815042,"count":9},{"user":"MynockGate","timeMS":1669627820348,"count":9},{"user":"beglebum","timeMS":1669628274492,"count":10},{"user":"Nightbot","timeMS":1669628277942,"count":10},{"user":"UVCW","timeMS":1669628281471,"count":10},{"user":"yam_cakes","timeMS":1669628284573,"count":10},{"user":"MynockGate","timeMS":1669628285797,"count":11},{"user":"MynockGate","timeMS":1669628289469,"count":10},{"user":"Scyral","timeMS":1669628290802,"count":10},{"user":"Nightbot","timeMS":1669629620860,"count":10},{"user":"Scyral","timeMS":1669630719316,"count":12},{"user":"Scyral","timeMS":1669630722159,"count":12},{"user":"yam_cakes","timeMS":1669630729562,"count":10},{"user":"McNeww","timeMS":1669630750581,"count":10},{"user":"MynockGate","timeMS":1669630754651,"count":10},{"user":"MynockGate","timeMS":1669630880936,"count":10},{"user":"McNeww","timeMS":1669630935870,"count":10},{"user":"MynockGate","timeMS":1669630968076,"count":10},{"user":"MynockGate","timeMS":1669631651291,"count":10},{"user":"McNeww","timeMS":1669631694050,"count":10},{"user":"Lotharou","timeMS":1669639532217,"count":1},{"user":"Nightbot","timeMS":1669654135020,"count":10},{"user":"McNeww","timeMS":1669654144099,"count":10},{"user":"cajunrabbit90","timeMS":1669654168105,"count":10},{"user":"McNeww","timeMS":1669660199049,"count":8},{"user":"MynockGate","timeMS":1669660214648,"count":10},{"user":"FridayAtElmStreet","timeMS":1669660231456,"count":2},{"user":"markswanmusic","timeMS":1669663557737,"count":9},{"user":"McNeww","timeMS":1669663567676,"count":3},{"user":"MynockGate","timeMS":1669663572071,"count":10},{"user":"MynockGate","timeMS":1669663578769,"count":10},{"user":"UVCW","timeMS":1669663592378,"count":10},{"user":"Scyral","timeMS":1669665908527,"count":5},{"user":"richardsim7","timeMS":1669670598443,"count":1},{"user":"Scyral","timeMS":1669671154429,"count":5},{"user":"McNeww","timeMS":1669673129226,"count":3},{"user":"chriskeyy","timeMS":1669673137894,"count":1},{"user":"Nightbot","timeMS":1669678746439,"count":10},{"user":"slim_cognito420","timeMS":1669678850289,"count":10},{"user":"MynockGate","timeMS":1669678868181,"count":10},{"user":"MynockGate","timeMS":1669678877494,"count":10},{"user":"dbcallector","timeMS":1669678890960,"count":10},{"user":"MynockGate","timeMS":1669678971039,"count":10},{"user":"dbcallector","timeMS":1669678975284,"count":6},{"user":"MynockGate","timeMS":1669679892291,"count":6},{"user":"WheatiesR1337","timeMS":1669679900038,"count":5},{"user":"Nightbot","timeMS":1669679900920,"count":10},{"user":"chriskeyy","timeMS":1669679903457,"count":6},{"user":"cajunrabbit90","timeMS":1669679919145,"count":6},{"user":"CookieKrisp","timeMS":1669679920787,"count":6},{"user":"thunderbolt2790","timeMS":1669679947557,"count":1},{"user":"0mmurg","timeMS":1669680460282,"count":2},{"user":"pat_boy514","timeMS":1669680671676,"count":3},{"user":"MynockGate","timeMS":1669681239620,"count":4},{"user":"WheatiesR1337","timeMS":1669681248428,"count":8},{"user":"bleedcheez","timeMS":1669681262788,"count":1},{"user":"thunderbolt2790","timeMS":1669681268195,"count":1},{"user":"viviz","timeMS":1669681299369,"count":1},{"user":"FridayAtElmStreet","timeMS":1669681545811,"count":1},{"user":"cajunrabbit90","timeMS":1669683231129,"count":10},{"user":"Nightbot","timeMS":1669683262109,"count":10},{"user":"Nightbot","timeMS":1669683300084,"count":10},{"user":"WheatiesR1337","timeMS":1669683321270,"count":1},{"user":"FridayAtElmStreet","timeMS":1669683527939,"count":1},{"user":"MynockGate","timeMS":1669683563921,"count":5},{"user":"MynockGate","timeMS":1669683574754,"count":10},{"user":"MynockGate","timeMS":1669683579581,"count":10},{"user":"icrywhenicum_","timeMS":1669683586834,"count":6},{"user":"wiltygreens","timeMS":1669683598201,"count":6},{"user":"Scyral","timeMS":1669683609852,"count":10},{"user":"Scyral","timeMS":1669683612511,"count":10},{"user":"UVCW","timeMS":1669683637713,"count":10},{"user":"cajunrabbit90","timeMS":1669683678952,"count":10},{"user":"icrywhenicum_","timeMS":1669684347898,"count":2},{"user":"Nightbot","timeMS":1669685634185,"count":10},{"user":"atomysktrue","timeMS":1669685714479,"count":4},{"user":"atomysktrue","timeMS":1669685850547,"count":4},{"user":"FiveGetsYouTen","timeMS":1669686002070,"count":3},{"user":"atomysktrue","timeMS":1669686051008,"count":4},{"user":"jakenosnek","timeMS":1669686135885,"count":3},{"user":"daskichan","timeMS":1669686494425,"count":4},{"user":"Nightbot","timeMS":1669686561272,"count":10},{"user":"wiltygreens","timeMS":1669686561524,"count":1},{"user":"UVCW","timeMS":1669686564979,"count":3},{"user":"MynockGate","timeMS":1669686605363,"count":10},{"user":"daskichan","timeMS":1669686616564,"count":4},{"user":"Nightbot","timeMS":1669686712366,"count":10},{"user":"FiveGetsYouTen","timeMS":1669687182700,"count":17},{"user":"wiltygreens","timeMS":1669687404741,"count":2},{"user":"Nightbot","timeMS":1669687446278,"count":10},{"user":"daskichan","timeMS":1669687464635,"count":4},{"user":"argyle_pigeon","timeMS":1669687757695,"count":5},{"user":"FiveGetsYouTen","timeMS":1669687821786,"count":7},{"user":"atomysktrue","timeMS":1669687821873,"count":4},{"user":"MynockGate","timeMS":1669687844813,"count":5},{"user":"Tomaetchen","timeMS":1669687847354,"count":2},{"user":"Nightbot","timeMS":1669687852749,"count":10},{"user":"FiveGetsYouTen","timeMS":1669687869956,"count":5},{"user":"FiveGetsYouTen","timeMS":1669687885047,"count":10},{"user":"FiveGetsYouTen","timeMS":1669687899605,"count":2},{"user":"FiveGetsYouTen","timeMS":1669687938349,"count":1},{"user":"FiveGetsYouTen","timeMS":1669687961509,"count":1},{"user":"jakenosnek","timeMS":1669688025698,"count":5},{"user":"wiltygreens","timeMS":1669688070190,"count":4},{"user":"MynockGate","timeMS":1669688173702,"count":5},{"user":"wiltygreens","timeMS":1669688177447,"count":4},{"user":"daskichan","timeMS":1669688189988,"count":2},{"user":"suddenlyzoe","timeMS":1669688206460,"count":5},{"user":"BrownTownBrown","timeMS":1669688386507,"count":1},{"user":"wiltygreens","timeMS":1669688391166,"count":4},{"user":"atomysktrue","timeMS":1669688417756,"count":1},{"user":"Nightbot","timeMS":1669688472760,"count":10},{"user":"chriskeyy","timeMS":1669688496346,"count":10},{"user":"CHEEsey_bussy","timeMS":1669689185685,"count":1},{"user":"wiltygreens","timeMS":1669689546173,"count":4},{"user":"wiltygreens","timeMS":1669689667938,"count":1},{"user":"Nightbot","timeMS":1669689671275,"count":10},{"user":"beglebum","timeMS":1669689674291,"count":1},{"user":"daskichan","timeMS":1669689674456,"count":5},{"user":"zona_james","timeMS":1669689675619,"count":1},{"user":"FiveGetsYouTen","timeMS":1669689677212,"count":7},{"user":"FridayAtElmStreet","timeMS":1669689677462,"count":1},{"user":"PointlessOk","timeMS":1669689680121,"count":1},{"user":"FiveGetsYouTen","timeMS":1669689681667,"count":9},{"user":"Karyudo_","timeMS":1669689685162,"count":4},{"user":"MynockGate","timeMS":1669689685979,"count":5},{"user":"FridayAtElmStreet","timeMS":1669689686747,"count":2},{"user":"chriskeyy","timeMS":1669689687024,"count":10},{"user":"UVCW","timeMS":1669689688327,"count":7},{"user":"wiltygreens","timeMS":1669689691295,"count":4},{"user":"dr_ficus","timeMS":1669689691980,"count":4},{"user":"alexieee_","timeMS":1669689693336,"count":3},{"user":"MynockGate","timeMS":1669689694406,"count":10},{"user":"markswanmusic","timeMS":1669689694526,"count":7},{"user":"Deadenterprise","timeMS":1669689694739,"count":10},{"user":"McNeww","timeMS":1669689699983,"count":4},{"user":"TheSisk0","timeMS":1669689705310,"count":7},{"user":"MoldyButtCubes","timeMS":1669689706840,"count":10},{"user":"viviz","timeMS":1669689706917,"count":10},{"user":"fernandioh0","timeMS":1669689711132,"count":10},{"user":"MynockGate","timeMS":1669689713099,"count":9},{"user":"MynockGate","timeMS":1669689715647,"count":9},{"user":"chriskeyy","timeMS":1669689717352,"count":20},{"user":"bubbles69___","timeMS":1669689722417,"count":3},{"user":"MynockGate","timeMS":1669689723387,"count":9},{"user":"karleygrey","timeMS":1669689729834,"count":9},{"user":"wiltygreens","timeMS":1669689749090,"count":4},{"user":"CHEEsey_bussy","timeMS":1669689800112,"count":1},{"user":"atomysktrue","timeMS":1669689801540,"count":1},{"user":"PointlessOk","timeMS":1669689826400,"count":1},{"user":"McNeww","timeMS":1669689882620,"count":4},{"user":"AyyTeaJeez","timeMS":1669689908073,"count":5},{"user":"CHEEsey_bussy","timeMS":1669689934195,"count":1},{"user":"McNeww","timeMS":1669689967309,"count":4},{"user":"MynockGate","timeMS":1669689984576,"count":9},{"user":"wiltygreens","timeMS":1669689987244,"count":4},{"user":"AyyTeaJeez","timeMS":1669690002349,"count":7},{"user":"wiltygreens","timeMS":1669690017766,"count":4},{"user":"McNeww","timeMS":1669690119896,"count":4},{"user":"dr_ficus","timeMS":1669690538072,"count":1},{"user":"WheatiesR1337","timeMS":1669690612354,"count":1},{"user":"McNeww","timeMS":1669690727176,"count":3},{"user":"FridayAtElmStreet","timeMS":1669690832419,"count":1},{"user":"wiltygreens","timeMS":1669690874069,"count":4},{"user":"CHEEsey_bussy","timeMS":1669690883936,"count":1},{"user":"beglebum","timeMS":1669691132700,"count":1},{"user":"wiltygreens","timeMS":1669691301844,"count":4},{"user":"FridayAtElmStreet","timeMS":1669691339306,"count":1},{"user":"WheatiesR1337","timeMS":1669691349465,"count":5},{"user":"jakenosnek","timeMS":1669691359452,"count":2},{"user":"karleygrey","timeMS":1669691385794,"count":4},{"user":"McNeww","timeMS":1669691393065,"count":4},{"user":"Du6e","timeMS":1669691399420,"count":3},{"user":"dr_ficus","timeMS":1669691404775,"count":4},{"user":"McNeww","timeMS":1669691444183,"count":4},{"user":"kemsmith","timeMS":1669691477039,"count":1},{"user":"dr_ficus","timeMS":1669691667058,"count":4},{"user":"atomysktrue","timeMS":1669691706914,"count":4},{"user":"McNeww","timeMS":1669691722582,"count":4},{"user":"phizx343","timeMS":1669691750952,"count":2},{"user":"McNeww","timeMS":1669692008225,"count":2},{"user":"McNeww","timeMS":1669692106195,"count":3},{"user":"MoldyButtCubes","timeMS":1669692163357,"count":1},{"user":"McNeww","timeMS":1669692166574,"count":1},{"user":"McNeww","timeMS":1669692371235,"count":3},{"user":"CHEEsey_bussy","timeMS":1669692377068,"count":1},{"user":"McNeww","timeMS":1669692386758,"count":2},{"user":"CHEEsey_bussy","timeMS":1669692710171,"count":1},{"user":"McNeww","timeMS":1669692757779,"count":3},{"user":"karleygrey","timeMS":1669692776528,"count":1},{"user":"MoldyButtCubes","timeMS":1669692781989,"count":1},{"user":"McNeww","timeMS":1669692784094,"count":1},{"user":"MoldyButtCubes","timeMS":1669692794021,"count":2},{"user":"Du6e","timeMS":1669692818833,"count":1},{"user":"karleygrey","timeMS":1669692889895,"count":1},{"user":"McNeww","timeMS":1669692920472,"count":1},{"user":"MynockGate","timeMS":1669692921416,"count":4},{"user":"chriskeyy","timeMS":1669692933021,"count":9},{"user":"McNeww","timeMS":1669692939767,"count":1},{"user":"chriskeyy","timeMS":1669692951957,"count":1},{"user":"MoldyButtCubes","timeMS":1669692983919,"count":2},{"user":"Du6e","timeMS":1669692993215,"count":3},{"user":"asgarnieu","timeMS":1669692998474,"count":3},{"user":"karleygrey","timeMS":1669692999580,"count":16},{"user":"atomysktrue","timeMS":1669693003944,"count":3},{"user":"chriskeyy","timeMS":1669693017205,"count":1},{"user":"MoldyButtCubes","timeMS":1669693023012,"count":2},{"user":"wiltygreens","timeMS":1669693031204,"count":1},{"user":"wiltygreens","timeMS":1669693039232,"count":5},{"user":"McNeww","timeMS":1669693039787,"count":3},{"user":"atomysktrue","timeMS":1669693041610,"count":4},{"user":"daskichan","timeMS":1669693059785,"count":8},{"user":"McNeww","timeMS":1669693064089,"count":5},{"user":"beglebum","timeMS":1669693068466,"count":5},{"user":"atomysktrue","timeMS":1669693143168,"count":4},{"user":"McNeww","timeMS":1669693151559,"count":4},{"user":"atomysktrue","timeMS":1669693155899,"count":4},{"user":"MoldyButtCubes","timeMS":1669693157850,"count":1},{"user":"treyorrr","timeMS":1669693159889,"count":4},{"user":"AestheticallyGeeky","timeMS":1669693165903,"count":4},{"user":"MoldyButtCubes","timeMS":1669693171380,"count":4},{"user":"Shiny_Cony_","timeMS":1669693182641,"count":4},{"user":"bleedcheez","timeMS":1669693234073,"count":2},{"user":"bleedcheez","timeMS":1669693281669,"count":3},{"user":"PointlessOk","timeMS":1669693432986,"count":1},{"user":"markswanmusic","timeMS":1669693465402,"count":6},{"user":"McNeww","timeMS":1669693475106,"count":4},{"user":"adamandhisbun","timeMS":1669693527933,"count":7},{"user":"daskichan","timeMS":1669693541130,"count":6},{"user":"McNeww","timeMS":1669693547276,"count":6},{"user":"TheSisk0","timeMS":1669693554957,"count":6},{"user":"banano_covid_2019","timeMS":1669693562223,"count":1},{"user":"atomysktrue","timeMS":1669693669369,"count":4},{"user":"Nightbot","timeMS":1669693716690,"count":10},{"user":"McNeww","timeMS":1669693778519,"count":1},{"user":"McNeww","timeMS":1669693899651,"count":3},{"user":"FridayAtElmStreet","timeMS":1669693984449,"count":1},{"user":"MoldyButtCubes","timeMS":1669694442393,"count":3},{"user":"Nightbot","timeMS":1669694448625,"count":10},{"user":"McNeww","timeMS":1669694459093,"count":10},{"user":"MynockGate","timeMS":1669694459451,"count":10},{"user":"TheSisk0","timeMS":1669694459826,"count":10},{"user":"dbcallector","timeMS":1669694462616,"count":10},{"user":"TheSisk0","timeMS":1669694464166,"count":10},{"user":"atomysktrue","timeMS":1669694464172,"count":5},{"user":"KadeemScheme","timeMS":1669694465170,"count":10},{"user":"PartyDudeMikey","timeMS":1669694467166,"count":10},{"user":"Deadenterprise","timeMS":1669694467953,"count":10},{"user":"chriskeyy","timeMS":1669694472743,"count":10},{"user":"MynockGate","timeMS":1669694473877,"count":10},{"user":"bleedcheez","timeMS":1669694475052,"count":10},{"user":"Scyral","timeMS":1669694476594,"count":10},{"user":"Nightbot","timeMS":1669694481460,"count":10},{"user":"MynockGate","timeMS":1669694484944,"count":10},{"user":"karleygrey","timeMS":1669694488334,"count":10},{"user":"MoldyButtCubes","timeMS":1669694491511,"count":10},{"user":"spyder256","timeMS":1669694494932,"count":10},{"user":"chriskeyy","timeMS":1669694496599,"count":20},{"user":"atomysktrue","timeMS":1669694498186,"count":5},{"user":"BrownTownBrown","timeMS":1669694499451,"count":3},{"user":"jakenosnek","timeMS":1669694499486,"count":10},{"user":"suddenlyzoe","timeMS":1669694503057,"count":10},{"user":"WheatiesR1337","timeMS":1669694515581,"count":9},{"user":"kimchikelso","timeMS":1669694517757,"count":10},{"user":"viviz","timeMS":1669694520322,"count":10},{"user":"bleedcheez","timeMS":1669694520623,"count":10},{"user":"MoldyButtCubes","timeMS":1669694539864,"count":20},{"user":"WheatiesR1337","timeMS":1669694552665,"count":3},{"user":"McNeww","timeMS":1669694569409,"count":1},{"user":"argyle_pigeon","timeMS":1669694574649,"count":3},{"user":"jakenosnek","timeMS":1669694579138,"count":10},{"user":"bleedcheez","timeMS":1669694584222,"count":10},{"user":"MoldyButtCubes","timeMS":1669694587980,"count":20},{"user":"MynockGate","timeMS":1669694599796,"count":10},{"user":"McNeww","timeMS":1669695352754,"count":4},{"user":"bleedcheez","timeMS":1669695645939,"count":10},{"user":"MynockGate","timeMS":1669695688999,"count":10},{"user":"Nightbot","timeMS":1669695690271,"count":10},{"user":"Nightbot","timeMS":1669696358657,"count":10},{"user":"FridayAtElmStreet","timeMS":1669698434577,"count":1},{"user":"FridayAtElmStreet","timeMS":1669698859664,"count":1},{"user":"Nightbot","timeMS":1669698864147,"count":10},{"user":"Tomaetchen","timeMS":1669698882258,"count":1},{"user":"Nightbot","timeMS":1669698912791,"count":10},{"user":"McNeww","timeMS":1669698920270,"count":3},{"user":"DrexsteinA","timeMS":1669698932911,"count":2},{"user":"argyle_pigeon","timeMS":1669698935716,"count":4},{"user":"McNeww","timeMS":1669699128203,"count":1},{"user":"FridayAtElmStreet","timeMS":1669699207253,"count":1},{"user":"BrownTownBrown","timeMS":1669699269681,"count":4},{"user":"dbcallector","timeMS":1669699282822,"count":1},{"user":"DrexsteinA","timeMS":1669699289408,"count":1},{"user":"MynockGate","timeMS":1669699292991,"count":4},{"user":"BrownTownBrown","timeMS":1669699871175,"count":1},{"user":"DrexsteinA","timeMS":1669700372769,"count":2},{"user":"BrownTownBrown","timeMS":1669700689980,"count":1},{"user":"BrownTownBrown","timeMS":1669701275961,"count":2},{"user":"Tomaetchen","timeMS":1669701552929,"count":4},{"user":"JRBangs","timeMS":1669701767232,"count":4},{"user":"TheStylishBum","timeMS":1669702307480,"count":4},{"user":"BrownTownBrown","timeMS":1669702349059,"count":4},{"user":"markswanmusic","timeMS":1669702359717,"count":3},{"user":"sweatpantsandsuitjackets","timeMS":1669702367453,"count":3},{"user":"UVCW","timeMS":1669702459908,"count":4},{"user":"Nightbot","timeMS":1669703442227,"count":10},{"user":"MynockGate","timeMS":1669703451926,"count":10},{"user":"Scyral","timeMS":1669703454829,"count":10},{"user":"markswanmusic","timeMS":1669703459882,"count":10},{"user":"UVCW","timeMS":1669703462689,"count":10},{"user":"Scyral","timeMS":1669703463597,"count":10},{"user":"amaiumami","timeMS":1669703467866,"count":10},{"user":"Lotharou","timeMS":1669703468177,"count":10},{"user":"MynockGate","timeMS":1669703468323,"count":10},{"user":"icrywhenicum_","timeMS":1669703472067,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669703478745,"count":10},{"user":"MynockGate","timeMS":1669703484445,"count":10},{"user":"McNeww","timeMS":1669703490425,"count":10},{"user":"fernandioh0","timeMS":1669703533076,"count":2},{"user":"BrownTownBrown","timeMS":1669703674622,"count":1},{"user":"jakenosnek","timeMS":1669703684230,"count":1},{"user":"Tomaetchen","timeMS":1669703687009,"count":7},{"user":"MynockGate","timeMS":1669703692406,"count":10},{"user":"asgarnieu","timeMS":1669703705270,"count":10},{"user":"viviz","timeMS":1669703707891,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669703710558,"count":4},{"user":"MynockGate","timeMS":1669703714005,"count":10},{"user":"dbcallector","timeMS":1669703715103,"count":10},{"user":"markswanmusic","timeMS":1669703717218,"count":10},{"user":"Scyral","timeMS":1669703718881,"count":10},{"user":"NightOwlBTBAM","timeMS":1669703732181,"count":10},{"user":"Scyral","timeMS":1669703754737,"count":10},{"user":"BrownTownBrown","timeMS":1669703763269,"count":10},{"user":"markswanmusic","timeMS":1669703765027,"count":3},{"user":"AraSanji","timeMS":1669703767165,"count":10},{"user":"MynockGate","timeMS":1669703769505,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669703780004,"count":10},{"user":"UVCW","timeMS":1669703796245,"count":10},{"user":"SkunkPriest","timeMS":1669703804881,"count":10},{"user":"Tomaetchen","timeMS":1669703841452,"count":5},{"user":"BrownTownBrown","timeMS":1669703845306,"count":4},{"user":"FridayAtElmStreet","timeMS":1669703847616,"count":1},{"user":"FridayAtElmStreet","timeMS":1669703852412,"count":1},{"user":"chriskeyy","timeMS":1669703859779,"count":1},{"user":"markswanmusic","timeMS":1669703860169,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703864913,"count":5},{"user":"MynockGate","timeMS":1669703866449,"count":10},{"user":"FridayAtElmStreet","timeMS":1669703867811,"count":8},{"user":"amaiumami","timeMS":1669703873020,"count":10},{"user":"Nightbot","timeMS":1669703882691,"count":10},{"user":"beglebum","timeMS":1669703891264,"count":4},{"user":"argyle_pigeon","timeMS":1669703891792,"count":5},{"user":"MynockGate","timeMS":1669703896665,"count":20},{"user":"VanBeren","timeMS":1669703900927,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703907024,"count":5},{"user":"kwispy_crumch","timeMS":1669703907900,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703912847,"count":7},{"user":"markswanmusic","timeMS":1669703913229,"count":8},{"user":"UVCW","timeMS":1669703919461,"count":10},{"user":"AraSanji","timeMS":1669703919639,"count":8},{"user":"Tomaetchen","timeMS":1669703920311,"count":6},{"user":"Lotharou","timeMS":1669703922894,"count":1},{"user":"Scyral","timeMS":1669703922943,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703926874,"count":3},{"user":"Lotharou","timeMS":1669703928428,"count":6},{"user":"theplomdawg","timeMS":1669703930612,"count":8},{"user":"CookieKrisp","timeMS":1669703932194,"count":5},{"user":"Lotharou","timeMS":1669703937845,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703938862,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669703939762,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703943217,"count":7},{"user":"pacificviewer","timeMS":1669703949893,"count":4},{"user":"UVCW","timeMS":1669703950674,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703950725,"count":6},{"user":"CookieKrisp","timeMS":1669703952036,"count":8},{"user":"MynockGate","timeMS":1669703954633,"count":12},{"user":"asgarnieu","timeMS":1669703968904,"count":12},{"user":"FridayAtElmStreet","timeMS":1669703994501,"count":5},{"user":"FridayAtElmStreet","timeMS":1669703997844,"count":10},{"user":"asgarnieu","timeMS":1669704005245,"count":12},{"user":"dbcallector","timeMS":1669704007342,"count":10},{"user":"beglebum","timeMS":1669704011287,"count":3},{"user":"FridayAtElmStreet","timeMS":1669704014909,"count":7},{"user":"Tomaetchen","timeMS":1669704015940,"count":7},{"user":"chriskeyy","timeMS":1669704017927,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704018011,"count":4},{"user":"FridayAtElmStreet","timeMS":1669704021676,"count":8},{"user":"FridayAtElmStreet","timeMS":1669704025111,"count":7},{"user":"Ben64r","timeMS":1669704027019,"count":10},{"user":"Lotharou","timeMS":1669704027309,"count":8},{"user":"CookieKrisp","timeMS":1669704030753,"count":8},{"user":"chriskeyy","timeMS":1669704031537,"count":20},{"user":"markswanmusic","timeMS":1669704032675,"count":7},{"user":"Ben64r","timeMS":1669704034176,"count":10},{"user":"carmnsndiego","timeMS":1669704039168,"count":4},{"user":"FridayAtElmStreet","timeMS":1669704041701,"count":7},{"user":"McNeww","timeMS":1669704043044,"count":10},{"user":"Ben64r","timeMS":1669704044362,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669704045421,"count":8},{"user":"Tomaetchen","timeMS":1669704046224,"count":10},{"user":"TheSisk0","timeMS":1669704047238,"count":10},{"user":"Scyral","timeMS":1669704048147,"count":8},{"user":"Scyral","timeMS":1669704056736,"count":8},{"user":"treyorrr","timeMS":1669704059077,"count":7},{"user":"carmnsndiego","timeMS":1669704068382,"count":6},{"user":"FridayAtElmStreet","timeMS":1669704074146,"count":7},{"user":"CookieKrisp","timeMS":1669704074588,"count":3},{"user":"FridayAtElmStreet","timeMS":1669704099263,"count":4},{"user":"FridayAtElmStreet","timeMS":1669704161899,"count":5},{"user":"FridayAtElmStreet","timeMS":1669704182097,"count":1},{"user":"FridayAtElmStreet","timeMS":1669704238970,"count":3},{"user":"FridayAtElmStreet","timeMS":1669704245933,"count":4},{"user":"chriskeyy","timeMS":1669704271487,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704273126,"count":3},{"user":"carmnsndiego","timeMS":1669704283498,"count":4},{"user":"Ben64r","timeMS":1669704294779,"count":21},{"user":"DuderGuyDude","timeMS":1669704294995,"count":4},{"user":"BrownTownBrown","timeMS":1669704301149,"count":3},{"user":"Tomaetchen","timeMS":1669704319304,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704320162,"count":6},{"user":"0mmurg","timeMS":1669704325932,"count":21},{"user":"suddenlyzoe","timeMS":1669704327636,"count":25},{"user":"CookieKrisp","timeMS":1669704351977,"count":14},{"user":"DuderGuyDude","timeMS":1669704431780,"count":1},{"user":"CookieKrisp","timeMS":1669704442243,"count":14},{"user":"Tomaetchen","timeMS":1669704486011,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704494545,"count":4},{"user":"Lotharou","timeMS":1669704497416,"count":10},{"user":"WheatiesR1337","timeMS":1669704498103,"count":4},{"user":"argyle_pigeon","timeMS":1669704549016,"count":6},{"user":"FridayAtElmStreet","timeMS":1669704556115,"count":1},{"user":"suddenlyzoe","timeMS":1669704571881,"count":25},{"user":"markswanmusic","timeMS":1669704574390,"count":9},{"user":"BrownTownBrown","timeMS":1669704575660,"count":2},{"user":"MynockGate","timeMS":1669704579323,"count":2},{"user":"Tomaetchen","timeMS":1669704582403,"count":10},{"user":"CookieKrisp","timeMS":1669704586775,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669704588404,"count":1},{"user":"chriskeyy","timeMS":1669704590718,"count":10},{"user":"MynockGate","timeMS":1669704592965,"count":10},{"user":"Scyral","timeMS":1669704594744,"count":15},{"user":"Forrest_ThePugKing","timeMS":1669704595915,"count":10},{"user":"McNeww","timeMS":1669704598324,"count":10},{"user":"WheatiesR1337","timeMS":1669704598339,"count":5},{"user":"MynockGate","timeMS":1669704600357,"count":10},{"user":"Scyral","timeMS":1669704613168,"count":15},{"user":"MynockGate","timeMS":1669704614642,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704617614,"count":1},{"user":"MynockGate","timeMS":1669704651680,"count":10},{"user":"MynockGate","timeMS":1669704666022,"count":10},{"user":"McNeww","timeMS":1669704671209,"count":10},{"user":"argyle_pigeon","timeMS":1669704686924,"count":6},{"user":"MynockGate","timeMS":1669704687793,"count":10},{"user":"BrownTownBrown","timeMS":1669704767752,"count":3},{"user":"Tomaetchen","timeMS":1669704770394,"count":6},{"user":"suddenlyzoe","timeMS":1669704773590,"count":25},{"user":"McNeww","timeMS":1669704780166,"count":1},{"user":"Nightbot","timeMS":1669704812670,"count":10},{"user":"MynockGate","timeMS":1669704816828,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669704818734,"count":10},{"user":"CookieKrisp","timeMS":1669704829268,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704855114,"count":5},{"user":"FridayAtElmStreet","timeMS":1669704861302,"count":4},{"user":"MynockGate","timeMS":1669704872870,"count":10},{"user":"AraSanji","timeMS":1669704881381,"count":8},{"user":"UVCW","timeMS":1669704885386,"count":8},{"user":"argyle_pigeon","timeMS":1669704890010,"count":3},{"user":"McNeww","timeMS":1669704896914,"count":1},{"user":"argyle_pigeon","timeMS":1669704961300,"count":3},{"user":"McNeww","timeMS":1669704978335,"count":2},{"user":"BrownTownBrown","timeMS":1669705031703,"count":3},{"user":"BrownTownBrown","timeMS":1669705047484,"count":1},{"user":"beglebum","timeMS":1669705104297,"count":1},{"user":"McNeww","timeMS":1669705105355,"count":2},{"user":"McNeww","timeMS":1669705112618,"count":10},{"user":"DuderGuyDude","timeMS":1669705177831,"count":1},{"user":"UVCW","timeMS":1669705184476,"count":3},{"user":"markswanmusic","timeMS":1669705189217,"count":4},{"user":"peachfurs","timeMS":1669705191895,"count":10},{"user":"Lotharou","timeMS":1669705200415,"count":10},{"user":"kopfkino0","timeMS":1669705208772,"count":1},{"user":"TheSisk0","timeMS":1669705219628,"count":9},{"user":"CookieKrisp","timeMS":1669705222727,"count":9},{"user":"markswanmusic","timeMS":1669705229466,"count":6},{"user":"MynockGate","timeMS":1669705231294,"count":10},{"user":"Tomaetchen","timeMS":1669705234187,"count":17},{"user":"Ben64r","timeMS":1669705234518,"count":34},{"user":"CookieKrisp","timeMS":1669705234668,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669705234685,"count":11},{"user":"peachfurs","timeMS":1669705237442,"count":13},{"user":"FridayAtElmStreet","timeMS":1669705238696,"count":1},{"user":"Scyral","timeMS":1669705239889,"count":15},{"user":"McNeww","timeMS":1669705242885,"count":10},{"user":"BrownTownBrown","timeMS":1669705243092,"count":10},{"user":"0mmurg","timeMS":1669705245675,"count":10},{"user":"DuderGuyDude","timeMS":1669705246659,"count":4},{"user":"MynockGate","timeMS":1669705246972,"count":10},{"user":"Tomaetchen","timeMS":1669705248199,"count":10},{"user":"MynockGate","timeMS":1669705248333,"count":10},{"user":"Lotharou","timeMS":1669705249309,"count":10},{"user":"suddenlyzoe","timeMS":1669705250415,"count":10},{"user":"Deadenterprise","timeMS":1669705251599,"count":10},{"user":"Scyral","timeMS":1669705252906,"count":15},{"user":"DuderGuyDude","timeMS":1669705253427,"count":4},{"user":"Nightbot","timeMS":1669705253477,"count":10},{"user":"peachfurs","timeMS":1669705260318,"count":10},{"user":"Ben64r","timeMS":1669705262130,"count":8},{"user":"MynockGate","timeMS":1669705268329,"count":10},{"user":"Scyral","timeMS":1669705270089,"count":10},{"user":"UVCW","timeMS":1669705271288,"count":10},{"user":"TheSisk0","timeMS":1669705272469,"count":10},{"user":"McNeww","timeMS":1669705285467,"count":1},{"user":"Scyral","timeMS":1669705290474,"count":10},{"user":"UVCW","timeMS":1669705294721,"count":10},{"user":"markswanmusic","timeMS":1669705418462,"count":4},{"user":"cysann","timeMS":1669705456582,"count":1},{"user":"UVCW","timeMS":1669705572578,"count":5},{"user":"Tomaetchen","timeMS":1669705783083,"count":5},{"user":"BrownTownBrown","timeMS":1669705792734,"count":3},{"user":"FridayAtElmStreet","timeMS":1669705948850,"count":1},{"user":"FridayAtElmStreet","timeMS":1669705976131,"count":2},{"user":"FridayAtElmStreet","timeMS":1669706065628,"count":1},{"user":"suddenlyzoe","timeMS":1669706071015,"count":10},{"user":"Tomaetchen","timeMS":1669706122478,"count":3},{"user":"MynockGate","timeMS":1669706124800,"count":10},{"user":"MynockGate","timeMS":1669706130869,"count":10},{"user":"UVCW","timeMS":1669706142102,"count":10},{"user":"FridayAtElmStreet","timeMS":1669706153736,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706169060,"count":1},{"user":"Tomaetchen","timeMS":1669706184551,"count":2},{"user":"FridayAtElmStreet","timeMS":1669706247236,"count":1},{"user":"beglebum","timeMS":1669706254843,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706256472,"count":1},{"user":"Gallibep","timeMS":1669706258465,"count":4},{"user":"beglebum","timeMS":1669706263634,"count":1},{"user":"Tomaetchen","timeMS":1669706265637,"count":3},{"user":"FridayAtElmStreet","timeMS":1669706266390,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669706268822,"count":1},{"user":"DuderGuyDude","timeMS":1669706311419,"count":1},{"user":"Ben64r","timeMS":1669706435504,"count":1},{"user":"Nightbot","timeMS":1669706438101,"count":10},{"user":"dbcallector","timeMS":1669706438774,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669706439201,"count":1},{"user":"MynockGate","timeMS":1669706451806,"count":10},{"user":"FridayAtElmStreet","timeMS":1669706487400,"count":1},{"user":"argyle_pigeon","timeMS":1669706736636,"count":4},{"user":"FridayAtElmStreet","timeMS":1669706806294,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706814479,"count":1},{"user":"argyle_pigeon","timeMS":1669706891351,"count":5},{"user":"Ben64r","timeMS":1669706915007,"count":1},{"user":"jakenosnek","timeMS":1669706915229,"count":3},{"user":"FridayAtElmStreet","timeMS":1669706930293,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706934073,"count":1},{"user":"DoctorRoffles","timeMS":1669706971070,"count":5},{"user":"FridayAtElmStreet","timeMS":1669706977224,"count":1},{"user":"Tomaetchen","timeMS":1669706981495,"count":5},{"user":"FridayAtElmStreet","timeMS":1669706992444,"count":2},{"user":"jakenosnek","timeMS":1669707011720,"count":3},{"user":"BrownTownBrown","timeMS":1669707022364,"count":3},{"user":"DuderGuyDude","timeMS":1669707125640,"count":2},{"user":"Nightbot","timeMS":1669707687118,"count":10},{"user":"Tomaetchen","timeMS":1669707692904,"count":2},{"user":"MynockGate","timeMS":1669707693777,"count":10},{"user":"MynockGate","timeMS":1669707697366,"count":10},{"user":"UVCW","timeMS":1669707704311,"count":10},{"user":"Scyral","timeMS":1669707714061,"count":10},{"user":"SkunkPriest","timeMS":1669707729455,"count":10},{"user":"markswanmusic","timeMS":1669707921569,"count":2},{"user":"SkunkPriest","timeMS":1669708021509,"count":1},{"user":"DoctorRoffles","timeMS":1669708368606,"count":4},{"user":"Tomaetchen","timeMS":1669708381185,"count":4},{"user":"McNeww","timeMS":1669708392987,"count":10},{"user":"FridayAtElmStreet","timeMS":1669708424134,"count":1},{"user":"CarlosTheGardener","timeMS":1669708436049,"count":2},{"user":"CarlosTheGardener","timeMS":1669708459636,"count":3},{"user":"treyorrr","timeMS":1669708467735,"count":2},{"user":"BrownTownBrown","timeMS":1669708469578,"count":3},{"user":"FridayAtElmStreet","timeMS":1669708478300,"count":2},{"user":"jakenosnek","timeMS":1669708488471,"count":2},{"user":"VilifiedPeanut","timeMS":1669708503388,"count":6},{"user":"kopfkino0","timeMS":1669708514192,"count":6},{"user":"Ben64r","timeMS":1669708518564,"count":6},{"user":"DuderGuyDude","timeMS":1669708611800,"count":1},{"user":"FridayAtElmStreet","timeMS":1669708652346,"count":1},{"user":"FridayAtElmStreet","timeMS":1669708675355,"count":1},{"user":"ForeverMalone","timeMS":1669708689661,"count":8},{"user":"argyle_pigeon","timeMS":1669708696884,"count":3},{"user":"Forrest_ThePugKing","timeMS":1669708704044,"count":8},{"user":"BrownTownBrown","timeMS":1669708794231,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669708822465,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669708876792,"count":1},{"user":"BrownTownBrown","timeMS":1669708886916,"count":3},{"user":"VanBeren","timeMS":1669708928785,"count":6},{"user":"markswanmusic","timeMS":1669708932869,"count":6},{"user":"carmnsndiego","timeMS":1669708936555,"count":1},{"user":"MynockGate","timeMS":1669708940877,"count":10},{"user":"beglebum","timeMS":1669708945591,"count":1},{"user":"kopfkino0","timeMS":1669708951576,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669708952518,"count":1},{"user":"Scyral","timeMS":1669708953409,"count":10},{"user":"VanBeren","timeMS":1669708971712,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669708985295,"count":10},{"user":"Scyral","timeMS":1669708985760,"count":10},{"user":"SkunkPriest","timeMS":1669709001610,"count":10},{"user":"beglebum","timeMS":1669709004812,"count":10},{"user":"beglebum","timeMS":1669709008906,"count":10},{"user":"UVCW","timeMS":1669709016845,"count":10},{"user":"MynockGate","timeMS":1669709017324,"count":10},{"user":"captainrollyjoger","timeMS":1669709034541,"count":10},{"user":"kwispy_crumch","timeMS":1669709045052,"count":10},{"user":"FridayAtElmStreet","timeMS":1669709048010,"count":1},{"user":"Nightbot","timeMS":1669709058638,"count":10},{"user":"UVCW","timeMS":1669709063252,"count":1},{"user":"MynockGate","timeMS":1669709077219,"count":10},{"user":"Scyral","timeMS":1669709098657,"count":10},{"user":"UVCW","timeMS":1669709113975,"count":10},{"user":"Tomaetchen","timeMS":1669709262727,"count":3},{"user":"carmnsndiego","timeMS":1669709330647,"count":5},{"user":"FridayAtElmStreet","timeMS":1669709444673,"count":1},{"user":"BrownTownBrown","timeMS":1669709488351,"count":1},{"user":"FridayAtElmStreet","timeMS":1669709575117,"count":1},{"user":"McNeww","timeMS":1669709614117,"count":10},{"user":"BrownTownBrown","timeMS":1669709765169,"count":1},{"user":"FridayAtElmStreet","timeMS":1669709827033,"count":1},{"user":"ForeverMalone","timeMS":1669709925198,"count":1},{"user":"ForeverMalone","timeMS":1669710158575,"count":1},{"user":"Scyral","timeMS":1669710168817,"count":5},{"user":"viviz","timeMS":1669710168905,"count":3},{"user":"ForeverMalone","timeMS":1669710169745,"count":5},{"user":"FridayAtElmStreet","timeMS":1669710171802,"count":1},{"user":"Nightbot","timeMS":1669710172354,"count":10},{"user":"dbcallector","timeMS":1669710179133,"count":5},{"user":"FridayAtElmStreet","timeMS":1669710180139,"count":1},{"user":"Scyral","timeMS":1669710180536,"count":5},{"user":"MynockGate","timeMS":1669710183069,"count":10},{"user":"MynockGate","timeMS":1669710185542,"count":10},{"user":"MynockGate","timeMS":1669710200924,"count":10},{"user":"McNeww","timeMS":1669710272161,"count":10},{"user":"MynockGate","timeMS":1669710295273,"count":10},{"user":"AIIuux","timeMS":1669710297244,"count":7},{"user":"Nightbot","timeMS":1669710377265,"count":10},{"user":"BrownTownBrown","timeMS":1669710571995,"count":4},{"user":"ForeverMalone","timeMS":1669712114128,"count":1},{"user":"Tomaetchen","timeMS":1669712114901,"count":2},{"user":"Ben64r","timeMS":1669712120226,"count":1},{"user":"MynockGate","timeMS":1669712129384,"count":1},{"user":"Nightbot","timeMS":1669712687591,"count":10},{"user":"MynockGate","timeMS":1669712694963,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669712709345,"count":10},{"user":"scifigirl211","timeMS":1669712719802,"count":10},{"user":"0mmurg","timeMS":1669713491303,"count":2},{"user":"Du6e","timeMS":1669713507711,"count":3},{"user":"Nightbot","timeMS":1669713894089,"count":10},{"user":"Scyral","timeMS":1669714671271,"count":5},{"user":"Tomaetchen","timeMS":1669717478681,"count":5},{"user":"Nightbot","timeMS":1669717482147,"count":10},{"user":"MynockGate","timeMS":1669717483654,"count":10},{"user":"cajunrabbit90","timeMS":1669717520310,"count":10},{"user":"McNeww","timeMS":1669741333102,"count":1},{"user":"McNeww","timeMS":1669743266135,"count":10},{"user":"Lotharou","timeMS":1669744994532,"count":1},{"user":"McNeww","timeMS":1669745511386,"count":10},{"user":"FiveGetsYouTen","timeMS":1669748127968,"count":10},{"user":"FiveGetsYouTen","timeMS":1669748512437,"count":13},{"user":"FridayAtElmStreet","timeMS":1669749073866,"count":1},{"user":"FridayAtElmStreet","timeMS":1669750571048,"count":1},{"user":"Du6e","timeMS":1669751062738,"count":4},{"user":"UVCW","timeMS":1669751065022,"count":3},{"user":"Scyral","timeMS":1669751095596,"count":1},{"user":"daskichan","timeMS":1669751098030,"count":3},{"user":"Ben64r","timeMS":1669751110886,"count":6},{"user":"Ben64r","timeMS":1669751125925,"count":6},{"user":"McNeww","timeMS":1669751128033,"count":3},{"user":"Ben64r","timeMS":1669751134929,"count":6},{"user":"Du6e","timeMS":1669751141323,"count":2},{"user":"Scyral","timeMS":1669751143189,"count":15},{"user":"richardsim7","timeMS":1669751146999,"count":1},{"user":"Scyral","timeMS":1669751153821,"count":15},{"user":"cajunrabbit90","timeMS":1669751164218,"count":10},{"user":"cajunrabbit90","timeMS":1669751168680,"count":10},{"user":"chriskeyy","timeMS":1669751176534,"count":10},{"user":"McNeww","timeMS":1669751213594,"count":3},{"user":"karleygrey","timeMS":1669751213820,"count":4},{"user":"Scyral","timeMS":1669751231689,"count":4},{"user":"UVCW","timeMS":1669751320124,"count":2},{"user":"FridayAtElmStreet","timeMS":1669751579692,"count":1},{"user":"FridayAtElmStreet","timeMS":1669751649055,"count":1},{"user":"FridayAtElmStreet","timeMS":1669751784564,"count":1},{"user":"BrownTownBrown","timeMS":1669756536707,"count":1},{"user":"chriskeyy","timeMS":1669758964634,"count":6},{"user":"UVCW","timeMS":1669759199097,"count":1},{"user":"Nightbot","timeMS":1669759308288,"count":10},{"user":"MynockGate","timeMS":1669759333947,"count":10},{"user":"cajunrabbit90","timeMS":1669759337801,"count":10},{"user":"atomysktrue","timeMS":1669759840748,"count":3},{"user":"Gralkor","timeMS":1669759861432,"count":3},{"user":"Nightbot","timeMS":1669759961833,"count":10},{"user":"atomysktrue","timeMS":1669761700161,"count":4},{"user":"richardsim7","timeMS":1669762516651,"count":1},{"user":"Anarch42","timeMS":1669762526396,"count":6},{"user":"MynockGate","timeMS":1669762535787,"count":5},{"user":"michaels4n","timeMS":1669762552644,"count":3},{"user":"FridayAtElmStreet","timeMS":1669762597167,"count":1},{"user":"Scyral","timeMS":1669762751677,"count":3},{"user":"Scyral","timeMS":1669762762575,"count":3},{"user":"SkunkPriest","timeMS":1669762954476,"count":2},{"user":"zona_james","timeMS":1669762964619,"count":2},{"user":"SkunkPriest","timeMS":1669762970284,"count":2},{"user":"Morphman30","timeMS":1669762972291,"count":2},{"user":"Nightbot","timeMS":1669762992727,"count":10},{"user":"MynockGate","timeMS":1669763147660,"count":10},{"user":"beglebum","timeMS":1669763217361,"count":2},{"user":"beglebum","timeMS":1669763897606,"count":1},{"user":"MynockGate","timeMS":1669764455391,"count":10},{"user":"MynockGate","timeMS":1669764459050,"count":10},{"user":"Nightbot","timeMS":1669764468438,"count":10},{"user":"beglebum","timeMS":1669764479633,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669764488688,"count":6},{"user":"daskichan","timeMS":1669764518290,"count":2},{"user":"adamandhisbun","timeMS":1669764524321,"count":6},{"user":"VanBeren","timeMS":1669764534323,"count":6},{"user":"Forrest_ThePugKing","timeMS":1669764741328,"count":10},{"user":"richardsim7","timeMS":1669767711861,"count":1},{"user":"adamandhisbun","timeMS":1669768952890,"count":5},{"user":"McNeww","timeMS":1669769029913,"count":1},{"user":"McNeww","timeMS":1669769087061,"count":8},{"user":"McNeww","timeMS":1669769118602,"count":8},{"user":"McNeww","timeMS":1669769205748,"count":8},{"user":"michaels4n","timeMS":1669770417788,"count":1},{"user":"jhawk145","timeMS":1669770432649,"count":1},{"user":"McNeww","timeMS":1669772550066,"count":5},{"user":"zona_james","timeMS":1669772557273,"count":3},{"user":"kiwikayyyyy","timeMS":1669773448722,"count":6},{"user":"hokputooy","timeMS":1669774092652,"count":2},{"user":"kiwikayyyyy","timeMS":1669775528023,"count":6},{"user":"kiwikayyyyy","timeMS":1669776227854,"count":5},{"user":"TheStylishBum","timeMS":1669777329775,"count":6},{"user":"Nightbot","timeMS":1669779449968,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669782156203,"count":1},{"user":"Nightbot","timeMS":1669785144548,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669785635007,"count":8},{"user":"VanBeren","timeMS":1669785644732,"count":8},{"user":"beglebum","timeMS":1669785650130,"count":8},{"user":"VanBeren","timeMS":1669785664804,"count":8},{"user":"MynockGate","timeMS":1669785672457,"count":8},{"user":"Scyral","timeMS":1669785681669,"count":8},{"user":"markswanmusic","timeMS":1669785683563,"count":8},{"user":"MynockGate","timeMS":1669785779321,"count":8},{"user":"Nightbot","timeMS":1669786554627,"count":10},{"user":"MynockGate","timeMS":1669786632182,"count":10},{"user":"MynockGate","timeMS":1669786635114,"count":10},{"user":"UVCW","timeMS":1669786643120,"count":10},{"user":"beglebum","timeMS":1669786656656,"count":2},{"user":"MynockGate","timeMS":1669786703244,"count":10},{"user":"MynockGate","timeMS":1669786718460,"count":10},{"user":"beglebum","timeMS":1669786719633,"count":10},{"user":"MynockGate","timeMS":1669786797274,"count":10},{"user":"Scyral","timeMS":1669786908895,"count":10},{"user":"MynockGate","timeMS":1669786933022,"count":10},{"user":"MynockGate","timeMS":1669787012942,"count":10},{"user":"Scyral","timeMS":1669788007644,"count":5},{"user":"MynockGate","timeMS":1669788037348,"count":4},{"user":"BrownTownBrown","timeMS":1669789405602,"count":3},{"user":"Nightbot","timeMS":1669789431438,"count":10},{"user":"carmnsndiego","timeMS":1669789433329,"count":3},{"user":"kiwikayyyyy","timeMS":1669789444580,"count":15},{"user":"sh0eb0x_","timeMS":1669789456920,"count":4},{"user":"beglebum","timeMS":1669789469591,"count":1},{"user":"carmnsndiego","timeMS":1669789482095,"count":5},{"user":"MynockGate","timeMS":1669789605721,"count":10},{"user":"UVCW","timeMS":1669790336920,"count":3},{"user":"FridayAtElmStreet","timeMS":1669790505540,"count":1},{"user":"MynockGate","timeMS":1669790553440,"count":1},{"user":"SkunkPriest","timeMS":1669792031975,"count":2},{"user":"beglebum","timeMS":1669792055063,"count":3},{"user":"Nightbot","timeMS":1669792094954,"count":10},{"user":"MynockGate","timeMS":1669792098850,"count":10},{"user":"MynockGate","timeMS":1669792102351,"count":10},{"user":"MynockGate","timeMS":1669792110158,"count":10},{"user":"MynockGate","timeMS":1669792115132,"count":10},{"user":"UVCW","timeMS":1669792123409,"count":10},{"user":"Nightbot","timeMS":1669792400383,"count":10},{"user":"Nightbot","timeMS":1669793033362,"count":10},{"user":"yam_cakes","timeMS":1669793042354,"count":1},{"user":"beglebum","timeMS":1669793143254,"count":2},{"user":"Scyral","timeMS":1669793287372,"count":2},{"user":"MynockGate","timeMS":1669793321730,"count":10},{"user":"MynockGate","timeMS":1669793329459,"count":10},{"user":"UVCW","timeMS":1669793330158,"count":6},{"user":"Scyral","timeMS":1669793335705,"count":10},{"user":"UVCW","timeMS":1669793364672,"count":10},{"user":"McNeww","timeMS":1669793391256,"count":4},{"user":"MynockGate","timeMS":1669795332641,"count":10},{"user":"MynockGate","timeMS":1669795335609,"count":10},{"user":"UVCW","timeMS":1669795351148,"count":10},{"user":"peachfurs","timeMS":1669797176845,"count":3},{"user":"TheSisk0","timeMS":1669797793530,"count":3},{"user":"KadeemScheme","timeMS":1669797793561,"count":4},{"user":"Nightbot","timeMS":1669797796804,"count":10},{"user":"Nightbot","timeMS":1669798730267,"count":10},{"user":"McNeww","timeMS":1669798739500,"count":10},{"user":"peachfurs","timeMS":1669798745130,"count":10},{"user":"suddenlyzoe","timeMS":1669798755120,"count":10},{"user":"Nightbot","timeMS":1669798765477,"count":10},{"user":"suddenlyzoe","timeMS":1669798769184,"count":10},{"user":"peachfurs","timeMS":1669798780428,"count":10},{"user":"richardsim7","timeMS":1669798782380,"count":1},{"user":"suddenlyzoe","timeMS":1669798823134,"count":10},{"user":"McNeww","timeMS":1669798831437,"count":10},{"user":"Scyral","timeMS":1669798976851,"count":2},{"user":"McNeww","timeMS":1669799122030,"count":10},{"user":"Scyral","timeMS":1669799146343,"count":3},{"user":"Scyral","timeMS":1669799225072,"count":3},{"user":"SkunkPriest","timeMS":1669799392673,"count":2},{"user":"SkunkPriest","timeMS":1669799420177,"count":2},{"user":"QuiesNova","timeMS":1669799471400,"count":1},{"user":"SkunkPriest","timeMS":1669799491739,"count":2},{"user":"peachfurs","timeMS":1669799686436,"count":1},{"user":"Nightbot","timeMS":1669799688319,"count":10},{"user":"SkunkPriest","timeMS":1669799704917,"count":7},{"user":"QuiesNova","timeMS":1669799737066,"count":10},{"user":"suddenlyzoe","timeMS":1669799742454,"count":10},{"user":"FridayAtElmStreet","timeMS":1669832823669,"count":2},{"user":"Nightbot","timeMS":1669833994755,"count":10},{"user":"McNeww","timeMS":1669834004063,"count":10},{"user":"Lotharou","timeMS":1669834115216,"count":2},{"user":"McNeww","timeMS":1669834124382,"count":10},{"user":"Nightbot","timeMS":1669834134635,"count":10},{"user":"FridayAtElmStreet","timeMS":1669834143829,"count":1},{"user":"cajunrabbit90","timeMS":1669834153229,"count":10},{"user":"FridayAtElmStreet","timeMS":1669834214834,"count":1},{"user":"FridayAtElmStreet","timeMS":1669834299568,"count":1},{"user":"McNeww","timeMS":1669835053250,"count":10},{"user":"UVCW","timeMS":1669835086039,"count":1},{"user":"FridayAtElmStreet","timeMS":1669837269696,"count":1},{"user":"BrownTownBrown","timeMS":1669837597475,"count":1},{"user":"Nightbot","timeMS":1669837741910,"count":10},{"user":"FridayAtElmStreet","timeMS":1669838128519,"count":1},{"user":"richardsim7","timeMS":1669838131999,"count":1},{"user":"McNeww","timeMS":1669838321248,"count":10},{"user":"Scyral","timeMS":1669840060272,"count":2},{"user":"FridayAtElmStreet","timeMS":1669841048799,"count":1},{"user":"BrownTownBrown","timeMS":1669841675294,"count":1},{"user":"kiwikayyyyy","timeMS":1669842241830,"count":8},{"user":"Scyral","timeMS":1669842697360,"count":4},{"user":"Scyral","timeMS":1669842922585,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669846414229,"count":8},{"user":"UVCW","timeMS":1669846429627,"count":8},{"user":"Skython","timeMS":1669846488331,"count":8},{"user":"FridayAtElmStreet","timeMS":1669846678260,"count":3},{"user":"FridayAtElmStreet","timeMS":1669846730333,"count":3},{"user":"FridayAtElmStreet","timeMS":1669847278971,"count":3},{"user":"FridayAtElmStreet","timeMS":1669847297257,"count":1},{"user":"FridayAtElmStreet","timeMS":1669847439263,"count":1},{"user":"Scyral","timeMS":1669848236597,"count":4},{"user":"UVCW","timeMS":1669848245905,"count":4},{"user":"atomysktrue","timeMS":1669848698590,"count":3},{"user":"Nightbot","timeMS":1669848708390,"count":10},{"user":"MynockGate","timeMS":1669848725374,"count":10},{"user":"atomysktrue","timeMS":1669848782333,"count":3},{"user":"Nightbot","timeMS":1669850478737,"count":10},{"user":"Scyral","timeMS":1669851301667,"count":1},{"user":"WheatiesR1337","timeMS":1669853002195,"count":4},{"user":"atomysktrue","timeMS":1669853003461,"count":4},{"user":"WheatiesR1337","timeMS":1669853010453,"count":4},{"user":"asgarnieu","timeMS":1669853047755,"count":5},{"user":"YeComicMan","timeMS":1669853069866,"count":3},{"user":"asgarnieu","timeMS":1669853240560,"count":5},{"user":"WheatiesR1337","timeMS":1669853262732,"count":6},{"user":"YeComicMan","timeMS":1669853270006,"count":4},{"user":"atomysktrue","timeMS":1669853348323,"count":3},{"user":"atomysktrue","timeMS":1669853431340,"count":3},{"user":"jakenosnek","timeMS":1669853447752,"count":3},{"user":"WheatiesR1337","timeMS":1669853472691,"count":5},{"user":"atomysktrue","timeMS":1669854652088,"count":1},{"user":"atomysktrue","timeMS":1669854669855,"count":4},{"user":"BrownTownBrown","timeMS":1669854681196,"count":4},{"user":"chriskeyy","timeMS":1669854730338,"count":9},{"user":"UVCW","timeMS":1669854769860,"count":4},{"user":"WheatiesR1337","timeMS":1669854802193,"count":7},{"user":"adamandhisbun","timeMS":1669855332233,"count":6},{"user":"MynockGate","timeMS":1669855340336,"count":6},{"user":"jakenosnek","timeMS":1669855342136,"count":5},{"user":"UVCW","timeMS":1669855350888,"count":5},{"user":"jakenosnek","timeMS":1669855356267,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669855357619,"count":5},{"user":"beglebum","timeMS":1669855887946,"count":1},{"user":"MynockGate","timeMS":1669855901584,"count":1},{"user":"carmnsndiego","timeMS":1669856291277,"count":4},{"user":"Forrest_ThePugKing","timeMS":1669856300741,"count":5},{"user":"FridayAtElmStreet","timeMS":1669856313478,"count":1},{"user":"carmnsndiego","timeMS":1669856317840,"count":3},{"user":"richardsim7","timeMS":1669856322015,"count":1},{"user":"MynockGate","timeMS":1669856325328,"count":10},{"user":"MynockGate","timeMS":1669856330592,"count":10},{"user":"hokputooy","timeMS":1669856330999,"count":10},{"user":"hokputooy","timeMS":1669856344470,"count":10},{"user":"SBlonk","timeMS":1669856345691,"count":10},{"user":"Scyral","timeMS":1669856353469,"count":10},{"user":"UVCW","timeMS":1669856357719,"count":10},{"user":"adamandhisbun","timeMS":1669856358893,"count":9},{"user":"julovesthehub","timeMS":1669856360799,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669856369200,"count":10},{"user":"atomysktrue","timeMS":1669856402816,"count":3},{"user":"carmnsndiego","timeMS":1669856408874,"count":4},{"user":"MynockGate","timeMS":1669856435656,"count":4},{"user":"MynockGate","timeMS":1669856447737,"count":4},{"user":"Scyral","timeMS":1669856460382,"count":4},{"user":"YeComicMan","timeMS":1669856480828,"count":4},{"user":"atomysktrue","timeMS":1669856485293,"count":3},{"user":"sweatpantsandsuitjackets","timeMS":1669856486141,"count":8},{"user":"cajunrabbit90","timeMS":1669856508180,"count":4},{"user":"FridayAtElmStreet","timeMS":1669856757197,"count":1},{"user":"MynockGate","timeMS":1669856929591,"count":1},{"user":"MynockGate","timeMS":1669856937076,"count":1},{"user":"cajunrabbit90","timeMS":1669857099705,"count":4},{"user":"Gralkor","timeMS":1669857114181,"count":4},{"user":"TheSisk0","timeMS":1669857132880,"count":4},{"user":"karleygrey","timeMS":1669857144795,"count":2},{"user":"kiwikayyyyy","timeMS":1669857359353,"count":5},{"user":"Scyral","timeMS":1669857501831,"count":1},{"user":"adamandhisbun","timeMS":1669857525029,"count":5},{"user":"UVCW","timeMS":1669857533340,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669857542280,"count":5},{"user":"Scyral","timeMS":1669857542854,"count":5},{"user":"SBlonk","timeMS":1669857562543,"count":5},{"user":"FridayAtElmStreet","timeMS":1669859006553,"count":1},{"user":"Scyral","timeMS":1669859891269,"count":2},{"user":"MynockGate","timeMS":1669859975368,"count":10},{"user":"MynockGate","timeMS":1669859979523,"count":8},{"user":"beglebum","timeMS":1669859991270,"count":8},{"user":"Lotharou","timeMS":1669859992866,"count":10},{"user":"Scyral","timeMS":1669859994674,"count":8},{"user":"sweatpantsandsuitjackets","timeMS":1669860014177,"count":8},{"user":"UVCW","timeMS":1669860030844,"count":8},{"user":"beglebum","timeMS":1669860233518,"count":2},{"user":"FridayAtElmStreet","timeMS":1669860280127,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669861734374,"count":12},{"user":"MynockGate","timeMS":1669861784144,"count":12},{"user":"MynockGate","timeMS":1669861786982,"count":12},{"user":"UVCW","timeMS":1669861789872,"count":12},{"user":"MynockGate","timeMS":1669861842253,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669862227756,"count":14},{"user":"Scyral","timeMS":1669862239605,"count":14},{"user":"UVCW","timeMS":1669862287044,"count":14},{"user":"sweatpantsandsuitjackets","timeMS":1669862436377,"count":10},{"user":"UVCW","timeMS":1669862468576,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669863075639,"count":10},{"user":"Kykywox","timeMS":1669863092083,"count":9},{"user":"Khromio","timeMS":1669863100030,"count":10},{"user":"MynockGate","timeMS":1669863100399,"count":9},{"user":"Scyral","timeMS":1669863119928,"count":9},{"user":"sweatpantsandsuitjackets","timeMS":1669863130873,"count":2},{"user":"UVCW","timeMS":1669863139536,"count":9},{"user":"Scyral","timeMS":1669865094427,"count":5},{"user":"VanBeren","timeMS":1669869428484,"count":3},{"user":"carmnsndiego","timeMS":1669869826830,"count":4},{"user":"Nightbot","timeMS":1669869839338,"count":10},{"user":"slim_cognito420","timeMS":1669869848462,"count":6},{"user":"Scyral","timeMS":1669870106621,"count":3},{"user":"carmnsndiego","timeMS":1669870641323,"count":4},{"user":"FiveGetsYouTen","timeMS":1669870674814,"count":10},{"user":"McNeww","timeMS":1669870683137,"count":10},{"user":"goodolgregg","timeMS":1669870704171,"count":4},{"user":"carmnsndiego","timeMS":1669870712493,"count":3},{"user":"carmnsndiego","timeMS":1669870758397,"count":2},{"user":"carmnsndiego","timeMS":1669870836839,"count":2},{"user":"alexieee_","timeMS":1669870841720,"count":3},{"user":"MynockGate","timeMS":1669871013281,"count":10},{"user":"MynockGate","timeMS":1669871015750,"count":10},{"user":"Du6e","timeMS":1669871026090,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669871028958,"count":10},{"user":"AraSanji","timeMS":1669871031893,"count":10},{"user":"McNeww","timeMS":1669871035413,"count":10},{"user":"benjiTK","timeMS":1669871055505,"count":10},{"user":"McNeww","timeMS":1669871581323,"count":3},{"user":"MynockGate","timeMS":1669872770488,"count":10},{"user":"MynockGate","timeMS":1669872774005,"count":10},{"user":"McNeww","timeMS":1669872785361,"count":10},{"user":"cajunrabbit90","timeMS":1669872790314,"count":10},{"user":"WheatiesR1337","timeMS":1669874575403,"count":4},{"user":"feelmyfunk","timeMS":1669874944166,"count":5},{"user":"BrownTownBrown","timeMS":1669876026161,"count":1},{"user":"MynockGate","timeMS":1669876882451,"count":4},{"user":"Scyral","timeMS":1669877096804,"count":3},{"user":"MynockGate","timeMS":1669877155246,"count":1},{"user":"FridayAtElmStreet","timeMS":1669877990183,"count":1},{"user":"McNeww","timeMS":1669879026135,"count":1},{"user":"MynockGate","timeMS":1669884920081,"count":4},{"user":"McNeww","timeMS":1669884951735,"count":4},{"user":"WheatiesR1337","timeMS":1669885156629,"count":5},{"user":"Lotharou","timeMS":1669898273480,"count":1},{"user":"MynockGate","timeMS":1669900673723,"count":2},{"user":"MynockGate","timeMS":1669903418506,"count":6},{"user":"Lotharou","timeMS":1669903426821,"count":6},{"user":"TommyZoid","timeMS":1669903431725,"count":6},{"user":"MynockGate","timeMS":1669903449448,"count":12},{"user":"MynockGate","timeMS":1669903464626,"count":2},{"user":"MynockGate","timeMS":1669903467968,"count":14},{"user":"Lotharou","timeMS":1669903488606,"count":14},{"user":"Lotharou","timeMS":1669903491593,"count":14},{"user":"Lotharou","timeMS":1669904049201,"count":1},{"user":"MynockGate","timeMS":1669917376626,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669920277627,"count":2},{"user":"Lotharou","timeMS":1669922580686,"count":1},{"user":"Lotharou","timeMS":1669923361120,"count":3},{"user":"BrownTownBrown","timeMS":1669927452973,"count":3},{"user":"Nightbot","timeMS":1669930806396,"count":10},{"user":"kiwikayyyyy","timeMS":1669930814044,"count":8},{"user":"Zereux","timeMS":1669930829157,"count":4},{"user":"Lotharou","timeMS":1669930835706,"count":1},{"user":"beglebum","timeMS":1669930844516,"count":1},{"user":"argyle_pigeon","timeMS":1669930878632,"count":6},{"user":"kiwikayyyyy","timeMS":1669930901014,"count":7},{"user":"Zereux","timeMS":1669930917044,"count":2},{"user":"kiwikayyyyy","timeMS":1669931311162,"count":6},{"user":"BrownTownBrown","timeMS":1669931327478,"count":1},{"user":"kiwikayyyyy","timeMS":1669931381318,"count":3},{"user":"MynockGate","timeMS":1669931463898,"count":10},{"user":"MynockGate","timeMS":1669931586691,"count":10},{"user":"beglebum","timeMS":1669931598058,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669931599732,"count":10},{"user":"Kykywox","timeMS":1669931626879,"count":10},{"user":"UVCW","timeMS":1669931672122,"count":10},{"user":"Lotharou","timeMS":1669931775165,"count":10},{"user":"MynockGate","timeMS":1669931911123,"count":12},{"user":"Scyral","timeMS":1669931924109,"count":12},{"user":"sweatpantsandsuitjackets","timeMS":1669931930717,"count":10},{"user":"Kykywox","timeMS":1669931935319,"count":3},{"user":"uncanny_pyro","timeMS":1669931957523,"count":7},{"user":"TheSisk0","timeMS":1669931975760,"count":10},{"user":"UVCW","timeMS":1669931980010,"count":10},{"user":"Kykywox","timeMS":1669931982344,"count":10},{"user":"uncanny_pyro","timeMS":1669932002488,"count":10},{"user":"MynockGate","timeMS":1669932095968,"count":12},{"user":"McNeww","timeMS":1669932134616,"count":12},{"user":"MynockGate","timeMS":1669932162351,"count":2},{"user":"MynockGate","timeMS":1669932165923,"count":12},{"user":"Kykywox","timeMS":1669932183924,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669932192929,"count":10},{"user":"yungelderberry","timeMS":1669932193798,"count":2},{"user":"Lotharou","timeMS":1669932198809,"count":10},{"user":"UVCW","timeMS":1669932202222,"count":10},{"user":"beglebum","timeMS":1669932204430,"count":10},{"user":"uncanny_pyro","timeMS":1669932208426,"count":9},{"user":"Forrest_ThePugKing","timeMS":1669932211735,"count":12},{"user":"Scyral","timeMS":1669932226226,"count":9},{"user":"viviz","timeMS":1669932244942,"count":9},{"user":"Lotharou","timeMS":1669932680463,"count":1},{"user":"Lotharou","timeMS":1669932687243,"count":1},{"user":"Lotharou","timeMS":1669932749696,"count":3},{"user":"beglebum","timeMS":1669933250951,"count":4},{"user":"MynockGate","timeMS":1669933254323,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669933259822,"count":4},{"user":"UVCW","timeMS":1669933264227,"count":10},{"user":"VanBeren","timeMS":1669934150224,"count":15},{"user":"SkunkPriest","timeMS":1669934151018,"count":1},{"user":"MynockGate","timeMS":1669934166624,"count":18},{"user":"Scyral","timeMS":1669934599206,"count":4},{"user":"ForeverMalone","timeMS":1669935514883,"count":4},{"user":"argyle_pigeon","timeMS":1669935524150,"count":4},{"user":"seagespacho","timeMS":1669935530285,"count":4},{"user":"CaptWumbo","timeMS":1669935535981,"count":4},{"user":"BrownTownBrown","timeMS":1669935536227,"count":4},{"user":"ForeverMalone","timeMS":1669935568109,"count":4},{"user":"argyle_pigeon","timeMS":1669935822722,"count":6},{"user":"argyle_pigeon","timeMS":1669935921805,"count":5},{"user":"Scyral","timeMS":1669935950337,"count":4},{"user":"Kykywox","timeMS":1669938644023,"count":10},{"user":"MynockGate","timeMS":1669938663098,"count":10},{"user":"MynockGate","timeMS":1669938666873,"count":10},{"user":"benjiTK","timeMS":1669938676018,"count":10},{"user":"McNeww","timeMS":1669938710536,"count":10},{"user":"ForeverMalone","timeMS":1669941813273,"count":5},{"user":"ForeverMalone","timeMS":1669941834255,"count":5},{"user":"ForeverMalone","timeMS":1669941848294,"count":5},{"user":"ForeverMalone","timeMS":1669941869963,"count":5},{"user":"ForeverMalone","timeMS":1669941894921,"count":5},{"user":"richardsim7","timeMS":1669942340652,"count":1},{"user":"Nightbot","timeMS":1669942392796,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669942410956,"count":1},{"user":"Nightbot","timeMS":1669942427160,"count":10},{"user":"ForeverMalone","timeMS":1669942468747,"count":5},{"user":"McNeww","timeMS":1669942504231,"count":1},{"user":"Nightbot","timeMS":1669942592273,"count":10},{"user":"ForeverMalone","timeMS":1669942593502,"count":5},{"user":"carmnsndiego","timeMS":1669942593730,"count":4},{"user":"richardsim7","timeMS":1669942604018,"count":1},{"user":"FridayAtElmStreet","timeMS":1669942606124,"count":8},{"user":"ForeverMalone","timeMS":1669942608421,"count":5},{"user":"adamandhisbun","timeMS":1669942609037,"count":10},{"user":"ForeverMalone","timeMS":1669942613175,"count":5},{"user":"alexieee_","timeMS":1669942615026,"count":4},{"user":"kimchikelso","timeMS":1669942615913,"count":5},{"user":"beglebum","timeMS":1669942617717,"count":10},{"user":"cajunrabbit90","timeMS":1669942617941,"count":10},{"user":"Lotharou","timeMS":1669942618318,"count":5},{"user":"Kykywox","timeMS":1669942621291,"count":10},{"user":"Lotharou","timeMS":1669942621737,"count":5},{"user":"goodolgregg","timeMS":1669942623598,"count":4},{"user":"ForeverMalone","timeMS":1669942624435,"count":5},{"user":"suddenlyzoe","timeMS":1669942625227,"count":5},{"user":"MynockGate","timeMS":1669942625728,"count":6},{"user":"cajunrabbit90","timeMS":1669942626049,"count":10},{"user":"viviz","timeMS":1669942627376,"count":14},{"user":"ForeverMalone","timeMS":1669942630082,"count":6},{"user":"alexieee_","timeMS":1669942630855,"count":6},{"user":"AraSanji","timeMS":1669942632700,"count":5},{"user":"ForeverMalone","timeMS":1669942634501,"count":6},{"user":"viviz","timeMS":1669942634946,"count":12},{"user":"FridayAtElmStreet","timeMS":1669942635032,"count":5},{"user":"Forrest_ThePugKing","timeMS":1669942635054,"count":8},{"user":"TheSisk0","timeMS":1669942635437,"count":7},{"user":"HelloNeptune","timeMS":1669942635590,"count":5},{"user":"zona_james","timeMS":1669942636233,"count":3},{"user":"sweatpantsandsuitjackets","timeMS":1669942637876,"count":10},{"user":"carmnsndiego","timeMS":1669942638365,"count":4},{"user":"ForeverMalone","timeMS":1669942638938,"count":6},{"user":"SkunkPriest","timeMS":1669942640399,"count":14},{"user":"dbcallector","timeMS":1669942644050,"count":6},{"user":"ForeverMalone","timeMS":1669942649303,"count":6},{"user":"viviz","timeMS":1669942650106,"count":10},{"user":"SeedyEyes","timeMS":1669942650673,"count":12},{"user":"FridayAtElmStreet","timeMS":1669942651832,"count":6},{"user":"BrownTownBrown","timeMS":1669942654858,"count":6},{"user":"cajunrabbit90","timeMS":1669942655059,"count":10},{"user":"ForeverMalone","timeMS":1669942655882,"count":7},{"user":"Lotharou","timeMS":1669942658019,"count":5},{"user":"alexieee_","timeMS":1669942660105,"count":6},{"user":"viviz","timeMS":1669942660809,"count":10},{"user":"ForeverMalone","timeMS":1669942660822,"count":7},{"user":"explohd","timeMS":1669942660865,"count":12},{"user":"kimchikelso","timeMS":1669942661459,"count":12},{"user":"frightwave","timeMS":1669942663374,"count":6},{"user":"cajunrabbit90","timeMS":1669942663451,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669942667693,"count":10},{"user":"ForeverMalone","timeMS":1669942668384,"count":7},{"user":"dbcallector","timeMS":1669942670629,"count":12},{"user":"FridayAtElmStreet","timeMS":1669942674880,"count":4},{"user":"ForeverMalone","timeMS":1669942675722,"count":7},{"user":"MynockGate","timeMS":1669942677796,"count":10},{"user":"ForeverMalone","timeMS":1669942678043,"count":7},{"user":"carmnsndiego","timeMS":1669942680591,"count":7},{"user":"MynockGate","timeMS":1669942681097,"count":10},{"user":"McNeww","timeMS":1669942685811,"count":7},{"user":"ForeverMalone","timeMS":1669942688909,"count":7},{"user":"MynockGate","timeMS":1669942697491,"count":10},{"user":"cajunrabbit90","timeMS":1669942698414,"count":10},{"user":"FridayAtElmStreet","timeMS":1669942698933,"count":5},{"user":"MynockGate","timeMS":1669942700386,"count":10},{"user":"djdduty","timeMS":1669942701499,"count":6},{"user":"dbcallector","timeMS":1669942701601,"count":12},{"user":"cajunrabbit90","timeMS":1669942707973,"count":10},{"user":"wiltygreens","timeMS":1669942715367,"count":12},{"user":"benjiTK","timeMS":1669942724458,"count":12},{"user":"djdduty","timeMS":1669942730451,"count":13},{"user":"Cyclonicks","timeMS":1669942743975,"count":13},{"user":"ForeverMalone","timeMS":1669942745368,"count":7},{"user":"FridayAtElmStreet","timeMS":1669942748646,"count":4},{"user":"viviz","timeMS":1669942751716,"count":12},{"user":"sweatpantsandsuitjackets","timeMS":1669942752894,"count":10},{"user":"dbcallector","timeMS":1669942753019,"count":12},{"user":"SeedyEyes","timeMS":1669942753126,"count":12},{"user":"kimchikelso","timeMS":1669942755587,"count":12},{"user":"carmnsndiego","timeMS":1669942756240,"count":4},{"user":"cajunrabbit90","timeMS":1669942756564,"count":10},{"user":"beglebum","timeMS":1669942757517,"count":10},{"user":"benjiTK","timeMS":1669942757589,"count":12},{"user":"viviz","timeMS":1669942757713,"count":10},{"user":"goodolgregg","timeMS":1669942758253,"count":6},{"user":"cajunrabbit90","timeMS":1669942761539,"count":10},{"user":"ForeverMalone","timeMS":1669942762665,"count":7},{"user":"djdduty","timeMS":1669942763301,"count":6},{"user":"alexieee_","timeMS":1669942763605,"count":5},{"user":"FridayAtElmStreet","timeMS":1669942764185,"count":5},{"user":"AraSanji","timeMS":1669942765933,"count":5},{"user":"Nightbot","timeMS":1669942767498,"count":10},{"user":"benjiTK","timeMS":1669942768853,"count":13},{"user":"TheSisk0","timeMS":1669942769572,"count":9},{"user":"dbcallector","timeMS":1669942771717,"count":23},{"user":"viviz","timeMS":1669942772107,"count":10},{"user":"ladyfatallitea","timeMS":1669942772771,"count":12},{"user":"ForeverMalone","timeMS":1669942773629,"count":7},{"user":"ModestPumpkin","timeMS":1669942774565,"count":2},{"user":"kimchikelso","timeMS":1669942775137,"count":10},{"user":"wiltygreens","timeMS":1669942775317,"count":13},{"user":"viviz","timeMS":1669942782663,"count":12},{"user":"SkunkPriest","timeMS":1669942784571,"count":9},{"user":"Orenfel","timeMS":1669942786595,"count":13},{"user":"FridayAtElmStreet","timeMS":1669942790744,"count":3},{"user":"dbcallector","timeMS":1669942792752,"count":12},{"user":"ForeverMalone","timeMS":1669942796341,"count":7},{"user":"ForeverMalone","timeMS":1669942802222,"count":7},{"user":"viviz","timeMS":1669942803461,"count":14},{"user":"Rezoli","timeMS":1669942804844,"count":12},{"user":"ForeverMalone","timeMS":1669942808249,"count":7},{"user":"Rezoli","timeMS":1669942810376,"count":12},{"user":"Rezoli","timeMS":1669942810855,"count":12},{"user":"ForeverMalone","timeMS":1669942811226,"count":7},{"user":"Rezoli","timeMS":1669942811482,"count":12},{"user":"Rezoli","timeMS":1669942812177,"count":12},{"user":"Rezoli","timeMS":1669942813389,"count":12},{"user":"ForeverMalone","timeMS":1669942814324,"count":7},{"user":"SeedyEyes","timeMS":1669942815730,"count":12},{"user":"McNeww","timeMS":1669942846099,"count":7},{"user":"McNeww","timeMS":1669942863339,"count":7},{"user":"McNeww","timeMS":1669942888800,"count":7},{"user":"FridayAtElmStreet","timeMS":1669942896778,"count":1},{"user":"SkunkPriest","timeMS":1669942933863,"count":2},{"user":"McNeww","timeMS":1669942956583,"count":7}]');

},{}],"eWKe8":[function(require,module,exports) {
module.exports = JSON.parse('[{"chatter":"Nightbot","count":8050},{"chatter":"Lotharou","count":5686},{"chatter":"TheCrunge24","count":4875},{"chatter":"UVCW","count":4579},{"chatter":"Scyral","count":4255},{"chatter":"argyle_pigeon","count":4045},{"chatter":"Spazolin_Dirk","count":3588},{"chatter":"scifigirl211","count":3352},{"chatter":"sweatpantsandsuitjackets","count":3190},{"chatter":"beglebum","count":3188},{"chatter":"MynockGate","count":3148},{"chatter":"grindhaus","count":2851},{"chatter":"cysann","count":2371},{"chatter":"Teerizz","count":2299},{"chatter":"Ben64r","count":2192}]');

},{}],"97m7T":[function(require,module,exports) {
module.exports = JSON.parse('[{"emote":"maiyaDance","count":19686,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a0e4acb18a1547fcb48ee21bbfeff4be/default/dark/1.0"},{"emote":"KEKW","count":12905,"link":"https://cdn.betterttv.net/emote/61c4da14002cdeedc2206ccb/1x"},{"emote":"wubby7","count":8179,"link":"https://static-cdn.jtvnw.net/emoticons/v2/303512117/default/dark/1.0"},{"emote":"Pog","count":5685,"link":"https://cdn.frankerfacez.com/emote/210748/1"},{"emote":"alluuxSteer","count":4954,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_6cd61edec255425799e6f9d31bbaaba9/default/dark/1.0"},{"emote":"yebANTIRAID","count":4830,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_56c87557afac4b2c9544eb02027b5219/default/dark/1.0"},{"emote":"alluuxHype","count":4623,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_79090418a2ae4a4f8b0441e313429b2c/default/dark/1.0"},{"emote":"Clap","count":3871,"link":"https://cdn.7tv.app/emote/62fc0a0c4a75fd54bd3520a9/1x.webp"},{"emote":"<3","count":3410,"link":"https://static-cdn.jtvnw.net/emoticons/v2/9/default/dark/1.0"},{"emote":"alluuxRun","count":3387,"link":"https://cdn.discordapp.com/emojis/855251622266667028.webp?size=28"},{"emote":"LUL","count":3193,"link":"https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0"},{"emote":"alluux7","count":3146,"link":"https://static-cdn.jtvnw.net/emoticons/v2/306075574/default/dark/1.0"},{"emote":"maiyaClap","count":2771,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_ee4f7f1664384c91a18f52f4e6a0a9d2/default/dark/1.0"},{"emote":"Stare","count":2524,"link":"https://cdn.7tv.app/emote/60e5d610a69fc8d27f2737b7/1x.webp"},{"emote":"D:","count":2163,"link":"https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/1x"}]');

},{}],"9YL3f":[function(require,module,exports) {
module.exports = JSON.parse('[{"chatter":"Lotharou","count":4452},{"chatter":"Nightbot","count":4370},{"chatter":"argyle_pigeon","count":4014},{"chatter":"scifigirl211","count":3301},{"chatter":"cysann","count":2288},{"chatter":"MynockGate","count":2288},{"chatter":"Ben64r","count":2150},{"chatter":"daskichan","count":1698},{"chatter":"FridayAtElmStreet","count":1676},{"chatter":"treyorrr","count":1651},{"chatter":"richardsim7","count":1578},{"chatter":"xfatxninjax","count":1541},{"chatter":"McNeww","count":1540},{"chatter":"peachfurs","count":1342},{"chatter":"Gralkor","count":1323}]');

},{}],"7ysTy":[function(require,module,exports) {
module.exports = JSON.parse('[{"emote":"maiyaDance","count":15605,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a0e4acb18a1547fcb48ee21bbfeff4be/default/dark/1.0"},{"emote":"KEKW","count":9360,"link":"https://cdn.betterttv.net/emote/61c4da14002cdeedc2206ccb/1x"},{"emote":"wubby7","count":7203,"link":"https://static-cdn.jtvnw.net/emoticons/v2/303512117/default/dark/1.0"},{"emote":"alluuxSteer","count":4642,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_6cd61edec255425799e6f9d31bbaaba9/default/dark/1.0"},{"emote":"alluuxHype","count":4252,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_79090418a2ae4a4f8b0441e313429b2c/default/dark/1.0"},{"emote":"Pog","count":3620,"link":"https://cdn.frankerfacez.com/emote/210748/1"},{"emote":"alluuxRun","count":3217,"link":"https://cdn.discordapp.com/emojis/855251622266667028.webp?size=28"},{"emote":"alluux7","count":2999,"link":"https://static-cdn.jtvnw.net/emoticons/v2/306075574/default/dark/1.0"},{"emote":"<3","count":2718,"link":"https://static-cdn.jtvnw.net/emoticons/v2/9/default/dark/1.0"},{"emote":"Clap","count":2372,"link":"https://cdn.7tv.app/emote/62fc0a0c4a75fd54bd3520a9/1x.webp"},{"emote":"maiyaClap","count":2181,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_ee4f7f1664384c91a18f52f4e6a0a9d2/default/dark/1.0"},{"emote":"Stare","count":1880,"link":"https://cdn.7tv.app/emote/60e5d610a69fc8d27f2737b7/1x.webp"},{"emote":"LUL","count":1654,"link":"https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0"},{"emote":"alluuxOoga","count":1623,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_35dc75d7aca542cb8730f7704ad0883a/default/dark/1.0"},{"emote":"wubbyHug","count":1526,"link":"https://static-cdn.jtvnw.net/emoticons/v2/307187975/default/dark/1.0"}]');

},{}],"hUl2O":[function(require,module,exports) {
module.exports = JSON.parse('[{"chatter":"UVCW","count":4542},{"chatter":"TheCrunge24","count":4190},{"chatter":"Nightbot","count":3680},{"chatter":"Scyral","count":3397},{"chatter":"sweatpantsandsuitjackets","count":3141},{"chatter":"Spazolin_Dirk","count":3085},{"chatter":"beglebum","count":3010},{"chatter":"grindhaus","count":2506},{"chatter":"Teerizz","count":1995},{"chatter":"computeryogi","count":1788},{"chatter":"kirsty9","count":1729},{"chatter":"xpluginbaby","count":1517},{"chatter":"Kykywox","count":1515},{"chatter":"lapdanceforjesus","count":1488},{"chatter":"westayfish","count":1436}]');

},{}],"d4wsW":[function(require,module,exports) {
module.exports = JSON.parse('[{"emote":"yebANTIRAID","count":4815,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_56c87557afac4b2c9544eb02027b5219/default/dark/1.0"},{"emote":"maiyaDance","count":4081,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a0e4acb18a1547fcb48ee21bbfeff4be/default/dark/1.0"},{"emote":"KEKW","count":3545,"link":"https://cdn.frankerfacez.com/emote/381875/1"},{"emote":"Pog","count":2065,"link":"https://cdn.frankerfacez.com/emote/210748/1"},{"emote":"LUL","count":1539,"link":"https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0"},{"emote":"Clap","count":1499,"link":"https://cdn.7tv.app/emote/60aed217c9cf495e5be86812/1x.webp"},{"emote":"yebStare","count":1282,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c4b4b9f6bf6b42ff80819d8ac0ce9d64/default/dark/1.0"},{"emote":"yebEggNANI","count":1003,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a4c9394da6ad4266947979ddb68ca5ac/default/dark/1.0"},{"emote":"yebLipBite","count":994,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_a4185b7839ac44e7a9c6d3763228a548/default/dark/1.0"},{"emote":"wubby7","count":976,"link":"https://static-cdn.jtvnw.net/emoticons/v2/303512117/default/dark/1.0"},{"emote":"ROACH","count":962,"link":"https://cdn.7tv.app/emote/60b895db5d373afbd60f5e07/1x.webp"},{"emote":"yebPONZUHI","count":961,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_40a37a06f45f4402be14936447763e0e/default/dark/1.0"},{"emote":"yebArrive","count":954,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_89ee37c77a4747a3b1ed051c1854a2d3/default/dark/1.0"},{"emote":"yebBoogieChecc","count":937,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_3c7fb971fc8744f98221fa4f5193ae43/default/dark/1.0"},{"emote":"yebRiddleWorm","count":933,"link":"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_902340f8a40841ffb9a26e469a0a91c4/default/dark/1.0"}]');

},{}],"5xmc5":[function(require,module,exports) {
/*!
* chartjs-plugin-annotation v2.1.2
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2023 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>annotation);
var _chartJs = require("chart.js");
var _helpers = require("chart.js/helpers");
/**
 * @typedef { import("chart.js").ChartEvent } ChartEvent
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 */ const interaction = {
    modes: {
        /**
     * Point mode returns all elements that hit test based on the event position
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */ point (state, event) {
            return filterElements(state, event, {
                intersect: true
            });
        },
        /**
     * Nearest mode returns the element closest to the event position
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */ nearest (state, event, options) {
            return getNearestItem(state, event, options);
        },
        /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */ x (state, event, options) {
            return filterElements(state, event, {
                intersect: options.intersect,
                axis: "x"
            });
        },
        /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */ y (state, event, options) {
            return filterElements(state, event, {
                intersect: options.intersect,
                axis: "y"
            });
        }
    }
};
/**
 * Returns all elements that hit test based on the event position
 * @param {Object} state - the state of the plugin
 * @param {ChartEvent} event - the event we are find things at
 * @param {Object} options - interaction options to use
 * @return {AnnotationElement[]} - elements that are found
 */ function getElements(state, event, options) {
    const mode = interaction.modes[options.mode] || interaction.modes.nearest;
    return mode(state, event, options);
}
function inRangeByAxis(element, event, axis) {
    if (axis !== "x" && axis !== "y") return element.inRange(event.x, event.y, "x", true) || element.inRange(event.x, event.y, "y", true);
    return element.inRange(event.x, event.y, axis, true);
}
function getPointByAxis(event, center, axis) {
    if (axis === "x") return {
        x: event.x,
        y: center.y
    };
    else if (axis === "y") return {
        x: center.x,
        y: event.y
    };
    return center;
}
function filterElements(state, event, options) {
    return state.visibleElements.filter((element)=>options.intersect ? element.inRange(event.x, event.y) : inRangeByAxis(element, event, options.axis));
}
function getNearestItem(state, event, options) {
    let minDistance = Number.POSITIVE_INFINITY;
    return filterElements(state, event, options).reduce((nearestItems, element)=>{
        const center = element.getCenterPoint();
        const evenPoint = getPointByAxis(event, center, options.axis);
        const distance = (0, _helpers.distanceBetweenPoints)(event, evenPoint);
        if (distance < minDistance) {
            nearestItems = [
                element
            ];
            minDistance = distance;
        } else if (distance === minDistance) // Can have multiple items at the same distance in which case we sort by size
        nearestItems.push(element);
        return nearestItems;
    }, []).sort((a, b)=>a._index - b._index).slice(0, 1); // return only the top item;
}
const moveHooks = [
    "enter",
    "leave"
];
/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import('../../types/options').AnnotationPluginOptions } AnnotationPluginOptions
 */ const hooks = moveHooks.concat("click");
/**
 * @param {Chart} chart
 * @param {Object} state
 * @param {AnnotationPluginOptions} options
 */ function updateListeners(chart, state, options) {
    state.listened = false;
    state.moveListened = false;
    state._getElements = getElements; // for testing
    hooks.forEach((hook)=>{
        if (typeof options[hook] === "function") {
            state.listened = true;
            state.listeners[hook] = options[hook];
        } else if ((0, _helpers.defined)(state.listeners[hook])) delete state.listeners[hook];
    });
    moveHooks.forEach((hook)=>{
        if (typeof options[hook] === "function") state.moveListened = true;
    });
    if (!state.listened || !state.moveListened) state.annotations.forEach((scope)=>{
        if (!state.listened && typeof scope.click === "function") state.listened = true;
        if (!state.moveListened) moveHooks.forEach((hook)=>{
            if (typeof scope[hook] === "function") {
                state.listened = true;
                state.moveListened = true;
            }
        });
    });
}
/**
 * @param {Object} state
 * @param {ChartEvent} event
 * @param {AnnotationPluginOptions} options
 * @return {boolean|undefined}
 */ function handleEvent(state, event, options) {
    if (state.listened) switch(event.type){
        case "mousemove":
        case "mouseout":
            return handleMoveEvents(state, event, options);
        case "click":
            return handleClickEvents(state, event, options);
    }
}
function handleMoveEvents(state, event, options) {
    if (!state.moveListened) return;
    let elements;
    if (event.type === "mousemove") elements = getElements(state, event, options.interaction);
    else elements = [];
    const previous = state.hovered;
    state.hovered = elements;
    const context = {
        state,
        event
    };
    let changed = dispatchMoveEvents(context, "leave", previous, elements);
    return dispatchMoveEvents(context, "enter", elements, previous) || changed;
}
function dispatchMoveEvents({ state , event  }, hook, elements, checkElements) {
    let changed;
    for (const element of elements)if (checkElements.indexOf(element) < 0) changed = dispatchEvent(element.options[hook] || state.listeners[hook], element, event) || changed;
    return changed;
}
function handleClickEvents(state, event, options) {
    const listeners = state.listeners;
    const elements = getElements(state, event, options.interaction);
    let changed;
    for (const element of elements)changed = dispatchEvent(element.options.click || listeners.click, element, event) || changed;
    return changed;
}
function dispatchEvent(handler, element, event) {
    return (0, _helpers.callback)(handler, [
        element.$context,
        event
    ]) === true;
}
const isOlderPart = (act, req)=>req > act || act.length > req.length && act.slice(0, req.length) === req;
/**
 * @typedef { import('chart.js').Point } Point
 * @typedef { import('chart.js').InteractionAxis } InteractionAxis
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 */ const EPSILON = 0.001;
const clamp = (x, from, to)=>Math.min(to, Math.max(from, x));
/**
 * @param {Object} obj
 * @param {number} from
 * @param {number} to
 * @returns {Object}
 */ function clampAll(obj, from, to) {
    for (const key of Object.keys(obj))obj[key] = clamp(obj[key], from, to);
    return obj;
}
/**
 * @param {Point} point
 * @param {Point} center
 * @param {number} radius
 * @param {number} borderWidth
 * @returns {boolean}
 */ function inPointRange(point, center, radius, borderWidth) {
    if (!point || !center || radius <= 0) return false;
    const hBorderWidth = borderWidth / 2;
    return Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2) <= Math.pow(radius + hBorderWidth, 2);
}
/**
 * @param {Point} point
 * @param {{x: number, y: number, x2: number, y2: number}} rect
 * @param {InteractionAxis} axis
 * @param {number} borderWidth
 * @returns {boolean}
 */ function inBoxRange(point, { x , y , x2 , y2  }, axis, borderWidth) {
    const hBorderWidth = borderWidth / 2;
    const inRangeX = point.x >= x - hBorderWidth - EPSILON && point.x <= x2 + hBorderWidth + EPSILON;
    const inRangeY = point.y >= y - hBorderWidth - EPSILON && point.y <= y2 + hBorderWidth + EPSILON;
    if (axis === "x") return inRangeX;
    else if (axis === "y") return inRangeY;
    return inRangeX && inRangeY;
}
/**
 * @param {AnnotationElement} element
 * @param {boolean} useFinalPosition
 * @returns {Point}
 */ function getElementCenterPoint(element, useFinalPosition) {
    const { centerX , centerY  } = element.getProps([
        "centerX",
        "centerY"
    ], useFinalPosition);
    return {
        x: centerX,
        y: centerY
    };
}
/**
 * @param {string} pkg
 * @param {string} min
 * @param {string} ver
 * @param {boolean} [strict=true]
 * @returns {boolean}
 */ function requireVersion(pkg, min, ver, strict = true) {
    const parts = ver.split(".");
    let i = 0;
    for (const req of min.split(".")){
        const act = parts[i++];
        if (parseInt(req, 10) < parseInt(act, 10)) break;
        if (isOlderPart(act, req)) {
            if (strict) throw new Error(`${pkg} v${ver} is not supported. v${min} or newer is required.`);
            else return false;
        }
    }
    return true;
}
const isPercentString = (s)=>typeof s === "string" && s.endsWith("%");
const toPercent = (s)=>clamp(parseFloat(s) / 100, 0, 1);
/**
 * @typedef { import('../../types/options').AnnotationPointCoordinates } AnnotationPointCoordinates
 * @typedef { import('../../types/label').CoreLabelOptions } CoreLabelOptions
 * @typedef { import('../../types/label').LabelPositionObject } LabelPositionObject
 */ /**
 * @param {number} size
 * @param {number|string} position
 * @param {number} to
 * @returns {number}
 */ function getRelativePosition(size, position) {
    if (position === "start") return 0;
    if (position === "end") return size;
    if (isPercentString(position)) return toPercent(position) * size;
    return size / 2;
}
/**
 * @param {number} size
 * @param {number|string} value
 * @param {number} to
 * @returns {number}
 */ function getSize(size, value) {
    if (typeof value === "number") return value;
    else if (isPercentString(value)) return toPercent(value) * size;
    return size;
}
/**
 * @param {{x: number, width: number}} size
 * @param {CoreLabelOptions} options
 * @returns {number}
 */ function calculateTextAlignment(size, options) {
    const { x , width  } = size;
    const textAlign = options.textAlign;
    if (textAlign === "center") return x + width / 2;
    else if (textAlign === "end" || textAlign === "right") return x + width;
    return x;
}
/**
 * @param {LabelPositionObject|string} value
 * @returns {LabelPositionObject}
 */ function toPosition(value) {
    if ((0, _helpers.isObject)(value)) return {
        x: (0, _helpers.valueOrDefault)(value.x, "center"),
        y: (0, _helpers.valueOrDefault)(value.y, "center")
    };
    value = (0, _helpers.valueOrDefault)(value, "center");
    return {
        x: value,
        y: value
    };
}
/**
 * @param {AnnotationPointCoordinates} options
 * @returns {boolean}
 */ function isBoundToPoint(options) {
    return options && ((0, _helpers.defined)(options.xValue) || (0, _helpers.defined)(options.yValue));
}
const widthCache = new Map();
/**
 * @typedef { import('chart.js').Point } Point
 * @typedef { import('../../types/label').CoreLabelOptions } CoreLabelOptions
 */ /**
 * Determine if content is an image or a canvas.
 * @param {*} content
 * @returns boolean|undefined
 * @todo move this function to chart.js helpers
 */ function isImageOrCanvas(content) {
    if (content && typeof content === "object") {
        const type = content.toString();
        return type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]";
    }
}
/**
 * Set the translation on the canvas if the rotation must be applied.
 * @param {CanvasRenderingContext2D} ctx - chart canvas context
 * @param {Point} point - the point of translation
 * @param {number} rotation - rotation (in degrees) to apply
 */ function translate(ctx, { x , y  }, rotation) {
    if (rotation) {
        ctx.translate(x, y);
        ctx.rotate((0, _helpers.toRadians)(rotation));
        ctx.translate(-x, -y);
    }
}
/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} options
 * @returns {boolean|undefined}
 */ function setBorderStyle(ctx, options) {
    if (options && options.borderWidth) {
        ctx.lineCap = options.borderCapStyle;
        ctx.setLineDash(options.borderDash);
        ctx.lineDashOffset = options.borderDashOffset;
        ctx.lineJoin = options.borderJoinStyle;
        ctx.lineWidth = options.borderWidth;
        ctx.strokeStyle = options.borderColor;
        return true;
    }
}
/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} options
 */ function setShadowStyle(ctx, options) {
    ctx.shadowColor = options.backgroundShadowColor;
    ctx.shadowBlur = options.shadowBlur;
    ctx.shadowOffsetX = options.shadowOffsetX;
    ctx.shadowOffsetY = options.shadowOffsetY;
}
/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CoreLabelOptions} options
 * @returns {{width: number, height: number}}
 */ function measureLabelSize(ctx, options) {
    const content = options.content;
    if (isImageOrCanvas(content)) return {
        width: getSize(content.width, options.width),
        height: getSize(content.height, options.height)
    };
    const font = (0, _helpers.toFont)(options.font);
    const strokeWidth = options.textStrokeWidth;
    const lines = (0, _helpers.isArray)(content) ? content : [
        content
    ];
    const mapKey = lines.join() + font.string + strokeWidth + (ctx._measureText ? "-spriting" : "");
    if (!widthCache.has(mapKey)) {
        ctx.save();
        ctx.font = font.string;
        const count = lines.length;
        let width = 0;
        for(let i = 0; i < count; i++){
            const text = lines[i];
            width = Math.max(width, ctx.measureText(text).width + strokeWidth);
        }
        ctx.restore();
        const height = count * font.lineHeight + strokeWidth;
        widthCache.set(mapKey, {
            width,
            height
        });
    }
    return widthCache.get(mapKey);
}
/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{x: number, y: number, width: number, height: number}} rect
 * @param {Object} options
 */ function drawBox(ctx, rect, options) {
    const { x , y , width , height  } = rect;
    ctx.save();
    setShadowStyle(ctx, options);
    const stroke = setBorderStyle(ctx, options);
    ctx.fillStyle = options.backgroundColor;
    ctx.beginPath();
    (0, _helpers.addRoundedRectPath)(ctx, {
        x,
        y,
        w: width,
        h: height,
        radius: clampAll((0, _helpers.toTRBLCorners)(options.borderRadius), 0, Math.min(width, height) / 2)
    });
    ctx.closePath();
    ctx.fill();
    if (stroke) {
        ctx.shadowColor = options.borderShadowColor;
        ctx.stroke();
    }
    ctx.restore();
}
/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{x: number, y: number, width: number, height: number}} rect
 * @param {CoreLabelOptions} options
 */ function drawLabel(ctx, rect, options) {
    const content = options.content;
    if (isImageOrCanvas(content)) {
        ctx.drawImage(content, rect.x, rect.y, rect.width, rect.height);
        return;
    }
    const labels = (0, _helpers.isArray)(content) ? content : [
        content
    ];
    const font = (0, _helpers.toFont)(options.font);
    const lh = font.lineHeight;
    const x = calculateTextAlignment(rect, options);
    const y = rect.y + lh / 2 + options.textStrokeWidth / 2;
    ctx.save();
    ctx.font = font.string;
    ctx.textBaseline = "middle";
    ctx.textAlign = options.textAlign;
    if (setTextStrokeStyle(ctx, options)) labels.forEach((l, i)=>ctx.strokeText(l, x, y + i * lh));
    ctx.fillStyle = options.color;
    labels.forEach((l, i)=>ctx.fillText(l, x, y + i * lh));
    ctx.restore();
}
function setTextStrokeStyle(ctx, options) {
    if (options.textStrokeWidth > 0) {
        // https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
        ctx.lineJoin = "round";
        ctx.miterLimit = 2;
        ctx.lineWidth = options.textStrokeWidth;
        ctx.strokeStyle = options.textStrokeColor;
        return true;
    }
}
/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").Scale } Scale
 * @typedef { import("chart.js").Point } Point
 * @typedef { import('../../types/element').AnnotationBoxModel } AnnotationBoxModel
 * @typedef { import('../../types/options').CoreAnnotationOptions } CoreAnnotationOptions
 * @typedef { import('../../types/options').PointAnnotationOptions } PointAnnotationOptions
 * @typedef { import('../../types/options').PolygonAnnotationOptions } PolygonAnnotationOptions
 */ /**
 * @param {Scale} scale
 * @param {number|string} value
 * @param {number} fallback
 * @returns {number}
 */ function scaleValue(scale, value, fallback) {
    value = typeof value === "number" ? value : scale.parse(value);
    return (0, _helpers.isFinite)(value) ? scale.getPixelForValue(value) : fallback;
}
/**
 * Search the scale defined in chartjs by the axis related to the annotation options key.
 * @param {{ [key: string]: Scale }} scales
 * @param {CoreAnnotationOptions} options
 * @param {string} key
 * @returns {string}
 */ function retrieveScaleID(scales, options, key) {
    const scaleID = options[key];
    if (scaleID || key === "scaleID") return scaleID;
    const axis = key.charAt(0);
    const axes = Object.values(scales).filter((scale)=>scale.axis && scale.axis === axis);
    if (axes.length) return axes[0].id;
    return axis;
}
/**
 * @param {Scale} scale
 * @param {{min: number, max: number, start: number, end: number}} options
 * @returns {{start: number, end: number}|undefined}
 */ function getDimensionByScale(scale, options) {
    if (scale) {
        const reverse = scale.options.reverse;
        const start = scaleValue(scale, options.min, reverse ? options.end : options.start);
        const end = scaleValue(scale, options.max, reverse ? options.start : options.end);
        return {
            start,
            end
        };
    }
}
/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @returns {Point}
 */ function getChartPoint(chart, options) {
    const { chartArea , scales  } = chart;
    const xScale = scales[retrieveScaleID(scales, options, "xScaleID")];
    const yScale = scales[retrieveScaleID(scales, options, "yScaleID")];
    let x = chartArea.width / 2;
    let y = chartArea.height / 2;
    if (xScale) x = scaleValue(xScale, options.xValue, xScale.left + xScale.width / 2);
    if (yScale) y = scaleValue(yScale, options.yValue, yScale.top + yScale.height / 2);
    return {
        x,
        y
    };
}
/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */ function resolveBoxProperties(chart, options) {
    const scales = chart.scales;
    const xScale = scales[retrieveScaleID(scales, options, "xScaleID")];
    const yScale = scales[retrieveScaleID(scales, options, "yScaleID")];
    if (!xScale && !yScale) return {};
    let { left: x , right: x2  } = xScale || chart.chartArea;
    let { top: y , bottom: y2  } = yScale || chart.chartArea;
    const xDim = getChartDimensionByScale(xScale, {
        min: options.xMin,
        max: options.xMax,
        start: x,
        end: x2
    });
    x = xDim.start;
    x2 = xDim.end;
    const yDim = getChartDimensionByScale(yScale, {
        min: options.yMin,
        max: options.yMax,
        start: y2,
        end: y
    });
    y = yDim.start;
    y2 = yDim.end;
    return {
        x,
        y,
        x2,
        y2,
        width: x2 - x,
        height: y2 - y,
        centerX: x + (x2 - x) / 2,
        centerY: y + (y2 - y) / 2
    };
}
/**
 * @param {Chart} chart
 * @param {PointAnnotationOptions|PolygonAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */ function resolvePointProperties(chart, options) {
    if (!isBoundToPoint(options)) {
        const box = resolveBoxProperties(chart, options);
        let radius = options.radius;
        if (!radius || isNaN(radius)) {
            radius = Math.min(box.width, box.height) / 2;
            options.radius = radius;
        }
        const size = radius * 2;
        return {
            x: box.x + options.xAdjust,
            y: box.y + options.yAdjust,
            x2: box.x + size + options.xAdjust,
            y2: box.y + size + options.yAdjust,
            centerX: box.centerX + options.xAdjust,
            centerY: box.centerY + options.yAdjust,
            width: size,
            height: size
        };
    }
    return getChartCircle(chart, options);
}
/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */ function resolveBoxAndLabelProperties(chart, options) {
    const properties = resolveBoxProperties(chart, options);
    const { x , y  } = properties;
    properties.elements = [
        {
            type: "label",
            optionScope: "label",
            properties: resolveLabelElementProperties$1(chart, properties, options)
        }
    ];
    properties.initProperties = {
        x,
        y
    };
    return properties;
}
function getChartCircle(chart, options) {
    const point = getChartPoint(chart, options);
    const size = options.radius * 2;
    return {
        x: point.x - options.radius + options.xAdjust,
        y: point.y - options.radius + options.yAdjust,
        x2: point.x + options.radius + options.xAdjust,
        y2: point.y + options.radius + options.yAdjust,
        centerX: point.x + options.xAdjust,
        centerY: point.y + options.yAdjust,
        width: size,
        height: size
    };
}
function getChartDimensionByScale(scale, options) {
    const result = getDimensionByScale(scale, options) || options;
    return {
        start: Math.min(result.start, result.end),
        end: Math.max(result.start, result.end)
    };
}
function calculateX({ properties , options  }, labelSize, position, padding) {
    const { x: start , x2: end , width: size  } = properties;
    return calculatePosition$1({
        start,
        end,
        size,
        borderWidth: options.borderWidth
    }, {
        position: position.x,
        padding: {
            start: padding.left,
            end: padding.right
        },
        adjust: options.label.xAdjust,
        size: labelSize.width
    });
}
function calculateY({ properties , options  }, labelSize, position, padding) {
    const { y: start , y2: end , height: size  } = properties;
    return calculatePosition$1({
        start,
        end,
        size,
        borderWidth: options.borderWidth
    }, {
        position: position.y,
        padding: {
            start: padding.top,
            end: padding.bottom
        },
        adjust: options.label.yAdjust,
        size: labelSize.height
    });
}
function calculatePosition$1(boxOpts, labelOpts) {
    const { start , end , borderWidth  } = boxOpts;
    const { position , padding: { start: padStart , end: padEnd  } , adjust  } = labelOpts;
    const availableSize = end - borderWidth - start - padStart - padEnd - labelOpts.size;
    return start + borderWidth / 2 + adjust + getRelativePosition(availableSize, position);
}
function resolveLabelElementProperties$1(chart, properties, options) {
    const label = options.label;
    label.backgroundColor = "transparent";
    label.callout.display = false;
    const position = toPosition(label.position);
    const padding = (0, _helpers.toPadding)(label.padding);
    const labelSize = measureLabelSize(chart.ctx, label);
    const x = calculateX({
        properties,
        options
    }, labelSize, position, padding);
    const y = calculateY({
        properties,
        options
    }, labelSize, position, padding);
    const width = labelSize.width + padding.width;
    const height = labelSize.height + padding.height;
    return {
        x,
        y,
        x2: x + width,
        y2: y + height,
        width,
        height,
        centerX: x + width / 2,
        centerY: y + height / 2,
        rotation: label.rotation
    };
}
/**
 * @typedef {import('chart.js').Point} Point
 */ /**
 * Rotate a `point` relative to `center` point by `angle`
 * @param {Point} point - the point to rotate
 * @param {Point} center - center point for rotation
 * @param {number} angle - angle for rotation, in radians
 * @returns {Point} rotated point
 */ function rotated(point, center, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const cx = center.x;
    const cy = center.y;
    return {
        x: cx + cos * (point.x - cx) - sin * (point.y - cy),
        y: cy + sin * (point.x - cx) + cos * (point.y - cy)
    };
}
/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").Scale } Scale
 * @typedef { import('../../types/options').CoreAnnotationOptions } CoreAnnotationOptions
 */ /**
 * @param {Chart} chart
 * @param {Scale} scale
 * @param {CoreAnnotationOptions[]} annotations
 */ function adjustScaleRange(chart, scale, annotations) {
    const range = getScaleLimits(chart.scales, scale, annotations);
    let changed = changeScaleLimit(scale, range, "min", "suggestedMin");
    changed = changeScaleLimit(scale, range, "max", "suggestedMax") || changed;
    if (changed && typeof scale.handleTickRangeOptions === "function") scale.handleTickRangeOptions();
}
/**
 * @param {CoreAnnotationOptions[]} annotations
 * @param {{ [key: string]: Scale }} scales
 */ function verifyScaleOptions(annotations, scales) {
    for (const annotation of annotations)verifyScaleIDs(annotation, scales);
}
function changeScaleLimit(scale, range, limit, suggestedLimit) {
    if ((0, _helpers.isFinite)(range[limit]) && !scaleLimitDefined(scale.options, limit, suggestedLimit)) {
        const changed = scale[limit] !== range[limit];
        scale[limit] = range[limit];
        return changed;
    }
}
function scaleLimitDefined(scaleOptions, limit, suggestedLimit) {
    return (0, _helpers.defined)(scaleOptions[limit]) || (0, _helpers.defined)(scaleOptions[suggestedLimit]);
}
function verifyScaleIDs(annotation, scales) {
    for (const key of [
        "scaleID",
        "xScaleID",
        "yScaleID"
    ]){
        const scaleID = retrieveScaleID(scales, annotation, key);
        if (scaleID && !scales[scaleID] && verifyProperties(annotation, key)) console.warn(`No scale found with id '${scaleID}' for annotation '${annotation.id}'`);
    }
}
function verifyProperties(annotation, key) {
    if (key === "scaleID") return true;
    const axis = key.charAt(0);
    for (const prop of [
        "Min",
        "Max",
        "Value"
    ]){
        if ((0, _helpers.defined)(annotation[axis + prop])) return true;
    }
    return false;
}
function getScaleLimits(scales, scale, annotations) {
    const axis = scale.axis;
    const scaleID = scale.id;
    const scaleIDOption = axis + "ScaleID";
    const limits = {
        min: (0, _helpers.valueOrDefault)(scale.min, Number.NEGATIVE_INFINITY),
        max: (0, _helpers.valueOrDefault)(scale.max, Number.POSITIVE_INFINITY)
    };
    for (const annotation of annotations){
        if (annotation.scaleID === scaleID) updateLimits(annotation, scale, [
            "value",
            "endValue"
        ], limits);
        else if (retrieveScaleID(scales, annotation, scaleIDOption) === scaleID) updateLimits(annotation, scale, [
            axis + "Min",
            axis + "Max",
            axis + "Value"
        ], limits);
    }
    return limits;
}
function updateLimits(annotation, scale, props, limits) {
    for (const prop of props){
        const raw = annotation[prop];
        if ((0, _helpers.defined)(raw)) {
            const value = scale.parse(raw);
            limits.min = Math.min(limits.min, value);
            limits.max = Math.max(limits.max, value);
        }
    }
}
class BoxAnnotation extends (0, _chartJs.Element) {
    inRange(mouseX, mouseY, axis, useFinalPosition) {
        const { x , y  } = rotated({
            x: mouseX,
            y: mouseY
        }, this.getCenterPoint(useFinalPosition), (0, _helpers.toRadians)(-this.options.rotation));
        return inBoxRange({
            x,
            y
        }, this.getProps([
            "x",
            "y",
            "x2",
            "y2"
        ], useFinalPosition), axis, this.options.borderWidth);
    }
    getCenterPoint(useFinalPosition) {
        return getElementCenterPoint(this, useFinalPosition);
    }
    draw(ctx) {
        ctx.save();
        translate(ctx, this.getCenterPoint(), this.options.rotation);
        drawBox(ctx, this, this.options);
        ctx.restore();
    }
    get label() {
        return this.elements && this.elements[0];
    }
    resolveElementProperties(chart, options) {
        return resolveBoxAndLabelProperties(chart, options);
    }
}
BoxAnnotation.id = "boxAnnotation";
BoxAnnotation.defaults = {
    adjustScaleRange: true,
    backgroundShadowColor: "transparent",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderRadius: 0,
    borderShadowColor: "transparent",
    borderWidth: 1,
    display: true,
    label: {
        backgroundColor: "transparent",
        borderWidth: 0,
        callout: {
            display: false
        },
        color: "black",
        content: null,
        display: false,
        drawTime: undefined,
        font: {
            family: undefined,
            lineHeight: undefined,
            size: undefined,
            style: undefined,
            weight: "bold"
        },
        height: undefined,
        padding: 6,
        position: "center",
        rotation: undefined,
        textAlign: "start",
        textStrokeColor: undefined,
        textStrokeWidth: 0,
        width: undefined,
        xAdjust: 0,
        yAdjust: 0,
        z: undefined
    },
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    xMax: undefined,
    xMin: undefined,
    xScaleID: undefined,
    yMax: undefined,
    yMin: undefined,
    yScaleID: undefined,
    z: 0
};
BoxAnnotation.defaultRoutes = {
    borderColor: "color",
    backgroundColor: "color"
};
BoxAnnotation.descriptors = {
    label: {
        _fallback: true
    }
};
const positions = [
    "left",
    "bottom",
    "top",
    "right"
];
class LabelAnnotation extends (0, _chartJs.Element) {
    inRange(mouseX, mouseY, axis, useFinalPosition) {
        const { x , y  } = rotated({
            x: mouseX,
            y: mouseY
        }, this.getCenterPoint(useFinalPosition), (0, _helpers.toRadians)(-this.rotation));
        return inBoxRange({
            x,
            y
        }, this.getProps([
            "x",
            "y",
            "x2",
            "y2"
        ], useFinalPosition), axis, this.options.borderWidth);
    }
    getCenterPoint(useFinalPosition) {
        return getElementCenterPoint(this, useFinalPosition);
    }
    draw(ctx) {
        const options = this.options;
        const visible = !(0, _helpers.defined)(this._visible) || this._visible;
        if (!options.display || !options.content || !visible) return;
        ctx.save();
        translate(ctx, this.getCenterPoint(), this.rotation);
        drawCallout(ctx, this);
        drawBox(ctx, this, options);
        drawLabel(ctx, getLabelSize(this), options);
        ctx.restore();
    }
    resolveElementProperties(chart, options) {
        let point;
        if (!isBoundToPoint(options)) {
            const { centerX , centerY  } = resolveBoxProperties(chart, options);
            point = {
                x: centerX,
                y: centerY
            };
        } else point = getChartPoint(chart, options);
        const padding = (0, _helpers.toPadding)(options.padding);
        const labelSize = measureLabelSize(chart.ctx, options);
        const boxSize = measureRect(point, labelSize, options, padding);
        return {
            pointX: point.x,
            pointY: point.y,
            ...boxSize,
            rotation: options.rotation
        };
    }
}
LabelAnnotation.id = "labelAnnotation";
LabelAnnotation.defaults = {
    adjustScaleRange: true,
    backgroundColor: "transparent",
    backgroundShadowColor: "transparent",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderRadius: 0,
    borderShadowColor: "transparent",
    borderWidth: 0,
    callout: {
        borderCapStyle: "butt",
        borderColor: undefined,
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 1,
        display: false,
        margin: 5,
        position: "auto",
        side: 5,
        start: "50%"
    },
    color: "black",
    content: null,
    display: true,
    font: {
        family: undefined,
        lineHeight: undefined,
        size: undefined,
        style: undefined,
        weight: undefined
    },
    height: undefined,
    padding: 6,
    position: "center",
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textAlign: "center",
    textStrokeColor: undefined,
    textStrokeWidth: 0,
    width: undefined,
    xAdjust: 0,
    xMax: undefined,
    xMin: undefined,
    xScaleID: undefined,
    xValue: undefined,
    yAdjust: 0,
    yMax: undefined,
    yMin: undefined,
    yScaleID: undefined,
    yValue: undefined,
    z: 0
};
LabelAnnotation.defaultRoutes = {
    borderColor: "color"
};
function measureRect(point, size, options, padding) {
    const width = size.width + padding.width + options.borderWidth;
    const height = size.height + padding.height + options.borderWidth;
    const position = toPosition(options.position);
    const x = calculatePosition(point.x, width, options.xAdjust, position.x);
    const y = calculatePosition(point.y, height, options.yAdjust, position.y);
    return {
        x,
        y,
        x2: x + width,
        y2: y + height,
        width,
        height,
        centerX: x + width / 2,
        centerY: y + height / 2
    };
}
function calculatePosition(start, size, adjust = 0, position) {
    return start - getRelativePosition(size, position) + adjust;
}
function drawCallout(ctx, element) {
    const { pointX , pointY , options  } = element;
    const callout = options.callout;
    const calloutPosition = callout && callout.display && resolveCalloutPosition(element, callout);
    if (!calloutPosition || isPointInRange(element, callout, calloutPosition)) return;
    ctx.save();
    ctx.beginPath();
    const stroke = setBorderStyle(ctx, callout);
    if (!stroke) return ctx.restore();
    const { separatorStart , separatorEnd  } = getCalloutSeparatorCoord(element, calloutPosition);
    const { sideStart , sideEnd  } = getCalloutSideCoord(element, calloutPosition, separatorStart);
    if (callout.margin > 0 || options.borderWidth === 0) {
        ctx.moveTo(separatorStart.x, separatorStart.y);
        ctx.lineTo(separatorEnd.x, separatorEnd.y);
    }
    ctx.moveTo(sideStart.x, sideStart.y);
    ctx.lineTo(sideEnd.x, sideEnd.y);
    const rotatedPoint = rotated({
        x: pointX,
        y: pointY
    }, element.getCenterPoint(), (0, _helpers.toRadians)(-element.rotation));
    ctx.lineTo(rotatedPoint.x, rotatedPoint.y);
    ctx.stroke();
    ctx.restore();
}
function getCalloutSeparatorCoord(element, position) {
    const { x , y , x2 , y2  } = element;
    const adjust = getCalloutSeparatorAdjust(element, position);
    let separatorStart, separatorEnd;
    if (position === "left" || position === "right") {
        separatorStart = {
            x: x + adjust,
            y
        };
        separatorEnd = {
            x: separatorStart.x,
            y: y2
        };
    } else {
        //  position 'top' or 'bottom'
        separatorStart = {
            x,
            y: y + adjust
        };
        separatorEnd = {
            x: x2,
            y: separatorStart.y
        };
    }
    return {
        separatorStart,
        separatorEnd
    };
}
function getCalloutSeparatorAdjust(element, position) {
    const { width , height , options  } = element;
    const adjust = options.callout.margin + options.borderWidth / 2;
    if (position === "right") return width + adjust;
    else if (position === "bottom") return height + adjust;
    return -adjust;
}
function getCalloutSideCoord(element, position, separatorStart) {
    const { y , width , height , options  } = element;
    const start = options.callout.start;
    const side = getCalloutSideAdjust(position, options.callout);
    let sideStart, sideEnd;
    if (position === "left" || position === "right") {
        sideStart = {
            x: separatorStart.x,
            y: y + getSize(height, start)
        };
        sideEnd = {
            x: sideStart.x + side,
            y: sideStart.y
        };
    } else {
        //  position 'top' or 'bottom'
        sideStart = {
            x: separatorStart.x + getSize(width, start),
            y: separatorStart.y
        };
        sideEnd = {
            x: sideStart.x,
            y: sideStart.y + side
        };
    }
    return {
        sideStart,
        sideEnd
    };
}
function getCalloutSideAdjust(position, options) {
    const side = options.side;
    if (position === "left" || position === "top") return -side;
    return side;
}
function resolveCalloutPosition(element, options) {
    const position = options.position;
    if (positions.includes(position)) return position;
    return resolveCalloutAutoPosition(element, options);
}
function resolveCalloutAutoPosition(element, options) {
    const { x , y , x2 , y2 , width , height , pointX , pointY , centerX , centerY , rotation  } = element;
    const center = {
        x: centerX,
        y: centerY
    };
    const start = options.start;
    const xAdjust = getSize(width, start);
    const yAdjust = getSize(height, start);
    const xPoints = [
        x,
        x + xAdjust,
        x + xAdjust,
        x2
    ];
    const yPoints = [
        y + yAdjust,
        y2,
        y,
        y2
    ];
    const result = [];
    for(let index = 0; index < 4; index++){
        const rotatedPoint = rotated({
            x: xPoints[index],
            y: yPoints[index]
        }, center, (0, _helpers.toRadians)(rotation));
        result.push({
            position: positions[index],
            distance: (0, _helpers.distanceBetweenPoints)(rotatedPoint, {
                x: pointX,
                y: pointY
            })
        });
    }
    return result.sort((a, b)=>a.distance - b.distance)[0].position;
}
function getLabelSize({ x , y , width , height , options  }) {
    const hBorderWidth = options.borderWidth / 2;
    const padding = (0, _helpers.toPadding)(options.padding);
    return {
        x: x + padding.left + hBorderWidth,
        y: y + padding.top + hBorderWidth,
        width: width - padding.left - padding.right - options.borderWidth,
        height: height - padding.top - padding.bottom - options.borderWidth
    };
}
function isPointInRange(element, callout, position) {
    const { pointX , pointY  } = element;
    const margin = callout.margin;
    let x = pointX;
    let y = pointY;
    if (position === "left") x += margin;
    else if (position === "right") x -= margin;
    else if (position === "top") y += margin;
    else if (position === "bottom") y -= margin;
    return element.inRange(x, y);
}
const pointInLine = (p1, p2, t)=>({
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    });
const interpolateX = (y, p1, p2)=>pointInLine(p1, p2, Math.abs((y - p1.y) / (p2.y - p1.y))).x;
const interpolateY = (x, p1, p2)=>pointInLine(p1, p2, Math.abs((x - p1.x) / (p2.x - p1.x))).y;
const sqr = (v)=>v * v;
const rangeLimit = (mouseX, mouseY, { x , y , x2 , y2  }, axis)=>axis === "y" ? {
        start: Math.min(y, y2),
        end: Math.max(y, y2),
        value: mouseY
    } : {
        start: Math.min(x, x2),
        end: Math.max(x, x2),
        value: mouseX
    };
class LineAnnotation extends (0, _chartJs.Element) {
    inRange(mouseX, mouseY, axis, useFinalPosition) {
        const hBorderWidth = this.options.borderWidth / 2;
        if (axis !== "x" && axis !== "y") {
            const epsilon = sqr(hBorderWidth);
            const point = {
                mouseX,
                mouseY
            };
            return intersects(this, point, epsilon, useFinalPosition) || isOnLabel(this, point, useFinalPosition);
        }
        const limit = rangeLimit(mouseX, mouseY, this.getProps([
            "x",
            "y",
            "x2",
            "y2"
        ], useFinalPosition), axis);
        return limit.value >= limit.start - hBorderWidth && limit.value <= limit.end + hBorderWidth || isOnLabel(this, {
            mouseX,
            mouseY
        }, useFinalPosition, axis);
    }
    getCenterPoint(useFinalPosition) {
        return getElementCenterPoint(this, useFinalPosition);
    }
    draw(ctx) {
        const { x , y , x2 , y2 , options  } = this;
        ctx.save();
        if (!setBorderStyle(ctx, options)) // no border width, then line is not drawn
        return ctx.restore();
        setShadowStyle(ctx, options);
        const angle = Math.atan2(y2 - y, x2 - x);
        const length = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
        const { startOpts , endOpts , startAdjust , endAdjust  } = getArrowHeads(this);
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0 + startAdjust, 0);
        ctx.lineTo(length - endAdjust, 0);
        ctx.shadowColor = options.borderShadowColor;
        ctx.stroke();
        drawArrowHead(ctx, 0, startAdjust, startOpts);
        drawArrowHead(ctx, length, -endAdjust, endOpts);
        ctx.restore();
    }
    get label() {
        return this.elements && this.elements[0];
    }
    resolveElementProperties(chart, options) {
        const { scales , chartArea  } = chart;
        const scale = scales[options.scaleID];
        const area = {
            x: chartArea.left,
            y: chartArea.top,
            x2: chartArea.right,
            y2: chartArea.bottom
        };
        let min, max;
        if (scale) {
            min = scaleValue(scale, options.value, NaN);
            max = scaleValue(scale, options.endValue, min);
            if (scale.isHorizontal()) {
                area.x = min;
                area.x2 = max;
            } else {
                area.y = min;
                area.y2 = max;
            }
        } else {
            const xScale = scales[retrieveScaleID(scales, options, "xScaleID")];
            const yScale = scales[retrieveScaleID(scales, options, "yScaleID")];
            if (xScale) applyScaleValueToDimension(area, xScale, {
                min: options.xMin,
                max: options.xMax,
                start: xScale.left,
                end: xScale.right,
                startProp: "x",
                endProp: "x2"
            });
            if (yScale) applyScaleValueToDimension(area, yScale, {
                min: options.yMin,
                max: options.yMax,
                start: yScale.bottom,
                end: yScale.top,
                startProp: "y",
                endProp: "y2"
            });
        }
        const { x , y , x2 , y2  } = area;
        const inside = isLineInArea(area, chart.chartArea);
        const properties = inside ? limitLineToArea({
            x,
            y
        }, {
            x: x2,
            y: y2
        }, chart.chartArea) : {
            x,
            y,
            x2,
            y2,
            width: Math.abs(x2 - x),
            height: Math.abs(y2 - y)
        };
        properties.centerX = (x2 + x) / 2;
        properties.centerY = (y2 + y) / 2;
        const labelProperties = resolveLabelElementProperties(chart, properties, options.label);
        // additonal prop to manage zoom/pan
        labelProperties._visible = inside;
        properties.elements = [
            {
                type: "label",
                optionScope: "label",
                properties: labelProperties
            }
        ];
        return properties;
    }
}
LineAnnotation.id = "lineAnnotation";
const arrowHeadsDefaults = {
    backgroundColor: undefined,
    backgroundShadowColor: undefined,
    borderColor: undefined,
    borderDash: undefined,
    borderDashOffset: undefined,
    borderShadowColor: undefined,
    borderWidth: undefined,
    display: undefined,
    fill: undefined,
    length: undefined,
    shadowBlur: undefined,
    shadowOffsetX: undefined,
    shadowOffsetY: undefined,
    width: undefined
};
LineAnnotation.defaults = {
    adjustScaleRange: true,
    arrowHeads: {
        display: false,
        end: Object.assign({}, arrowHeadsDefaults),
        fill: false,
        length: 12,
        start: Object.assign({}, arrowHeadsDefaults),
        width: 6
    },
    borderDash: [],
    borderDashOffset: 0,
    borderShadowColor: "transparent",
    borderWidth: 2,
    display: true,
    endValue: undefined,
    label: {
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundShadowColor: "transparent",
        borderCapStyle: "butt",
        borderColor: "black",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderRadius: 6,
        borderShadowColor: "transparent",
        borderWidth: 0,
        callout: Object.assign({}, LabelAnnotation.defaults.callout),
        color: "#fff",
        content: null,
        display: false,
        drawTime: undefined,
        font: {
            family: undefined,
            lineHeight: undefined,
            size: undefined,
            style: undefined,
            weight: "bold"
        },
        height: undefined,
        padding: 6,
        position: "center",
        rotation: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        textAlign: "center",
        textStrokeColor: undefined,
        textStrokeWidth: 0,
        width: undefined,
        xAdjust: 0,
        yAdjust: 0,
        z: undefined
    },
    scaleID: undefined,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    value: undefined,
    xMax: undefined,
    xMin: undefined,
    xScaleID: undefined,
    yMax: undefined,
    yMin: undefined,
    yScaleID: undefined,
    z: 0
};
LineAnnotation.descriptors = {
    arrowHeads: {
        start: {
            _fallback: true
        },
        end: {
            _fallback: true
        },
        _fallback: true
    }
};
LineAnnotation.defaultRoutes = {
    borderColor: "color"
};
function isLineInArea({ x , y , x2 , y2  }, { top , right , bottom , left  }) {
    return !(x < left && x2 < left || x > right && x2 > right || y < top && y2 < top || y > bottom && y2 > bottom);
}
function limitPointToArea({ x , y  }, p2, { top , right , bottom , left  }) {
    if (x < left) {
        y = interpolateY(left, {
            x,
            y
        }, p2);
        x = left;
    }
    if (x > right) {
        y = interpolateY(right, {
            x,
            y
        }, p2);
        x = right;
    }
    if (y < top) {
        x = interpolateX(top, {
            x,
            y
        }, p2);
        y = top;
    }
    if (y > bottom) {
        x = interpolateX(bottom, {
            x,
            y
        }, p2);
        y = bottom;
    }
    return {
        x,
        y
    };
}
function limitLineToArea(p1, p2, area) {
    const { x , y  } = limitPointToArea(p1, p2, area);
    const { x: x2 , y: y2  } = limitPointToArea(p2, p1, area);
    return {
        x,
        y,
        x2,
        y2,
        width: Math.abs(x2 - x),
        height: Math.abs(y2 - y)
    };
}
function intersects(element, { mouseX , mouseY  }, epsilon = EPSILON, useFinalPosition) {
    // Adapted from https://stackoverflow.com/a/6853926/25507
    const { x: x1 , y: y1 , x2 , y2  } = element.getProps([
        "x",
        "y",
        "x2",
        "y2"
    ], useFinalPosition);
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lenSq = sqr(dx) + sqr(dy);
    const t = lenSq === 0 ? -1 : ((mouseX - x1) * dx + (mouseY - y1) * dy) / lenSq;
    let xx, yy;
    if (t < 0) {
        xx = x1;
        yy = y1;
    } else if (t > 1) {
        xx = x2;
        yy = y2;
    } else {
        xx = x1 + t * dx;
        yy = y1 + t * dy;
    }
    return sqr(mouseX - xx) + sqr(mouseY - yy) <= epsilon;
}
function isOnLabel(element, { mouseX , mouseY  }, useFinalPosition, axis) {
    const label = element.label;
    return label.options.display && label.inRange(mouseX, mouseY, axis, useFinalPosition);
}
function applyScaleValueToDimension(area, scale, options) {
    const dim = getDimensionByScale(scale, options);
    area[options.startProp] = dim.start;
    area[options.endProp] = dim.end;
}
function resolveLabelElementProperties(chart, properties, options) {
    const borderWidth = options.borderWidth;
    const padding = (0, _helpers.toPadding)(options.padding);
    const textSize = measureLabelSize(chart.ctx, options);
    const width = textSize.width + padding.width + borderWidth;
    const height = textSize.height + padding.height + borderWidth;
    return calculateLabelPosition(properties, options, {
        width,
        height,
        padding
    }, chart.chartArea);
}
function calculateAutoRotation(properties) {
    const { x , y , x2 , y2  } = properties;
    const rotation = Math.atan2(y2 - y, x2 - x);
    // Flip the rotation if it goes > PI/2 or < -PI/2, so label stays upright
    return rotation > (0, _helpers.PI) / 2 ? rotation - (0, _helpers.PI) : rotation < (0, _helpers.PI) / -2 ? rotation + (0, _helpers.PI) : rotation;
}
function calculateLabelPosition(properties, label, sizes, chartArea) {
    const { width , height , padding  } = sizes;
    const { xAdjust , yAdjust  } = label;
    const p1 = {
        x: properties.x,
        y: properties.y
    };
    const p2 = {
        x: properties.x2,
        y: properties.y2
    };
    const rotation = label.rotation === "auto" ? calculateAutoRotation(properties) : (0, _helpers.toRadians)(label.rotation);
    const size = rotatedSize(width, height, rotation);
    const t = calculateT(properties, label, {
        labelSize: size,
        padding
    }, chartArea);
    const pt = pointInLine(p1, p2, t);
    const xCoordinateSizes = {
        size: size.w,
        min: chartArea.left,
        max: chartArea.right,
        padding: padding.left
    };
    const yCoordinateSizes = {
        size: size.h,
        min: chartArea.top,
        max: chartArea.bottom,
        padding: padding.top
    };
    const centerX = adjustLabelCoordinate(pt.x, xCoordinateSizes) + xAdjust;
    const centerY = adjustLabelCoordinate(pt.y, yCoordinateSizes) + yAdjust;
    return {
        x: centerX - width / 2,
        y: centerY - height / 2,
        x2: centerX + width / 2,
        y2: centerY + height / 2,
        centerX,
        centerY,
        pointX: pt.x,
        pointY: pt.y,
        width,
        height,
        rotation: (0, _helpers.toDegrees)(rotation)
    };
}
function rotatedSize(width, height, rotation) {
    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);
    return {
        w: Math.abs(width * cos) + Math.abs(height * sin),
        h: Math.abs(width * sin) + Math.abs(height * cos)
    };
}
function calculateT(properties, label, sizes, chartArea) {
    let t;
    const space = spaceAround(properties, chartArea);
    if (label.position === "start") t = calculateTAdjust({
        w: properties.x2 - properties.x,
        h: properties.y2 - properties.y
    }, sizes, label, space);
    else if (label.position === "end") t = 1 - calculateTAdjust({
        w: properties.x - properties.x2,
        h: properties.y - properties.y2
    }, sizes, label, space);
    else t = getRelativePosition(1, label.position);
    return t;
}
function calculateTAdjust(lineSize, sizes, label, space) {
    const { labelSize , padding  } = sizes;
    const lineW = lineSize.w * space.dx;
    const lineH = lineSize.h * space.dy;
    const x = lineW > 0 && (labelSize.w / 2 + padding.left - space.x) / lineW;
    const y = lineH > 0 && (labelSize.h / 2 + padding.top - space.y) / lineH;
    return clamp(Math.max(x, y), 0, 0.25);
}
function spaceAround(properties, chartArea) {
    const { x , x2 , y , y2  } = properties;
    const t = Math.min(y, y2) - chartArea.top;
    const l = Math.min(x, x2) - chartArea.left;
    const b = chartArea.bottom - Math.max(y, y2);
    const r = chartArea.right - Math.max(x, x2);
    return {
        x: Math.min(l, r),
        y: Math.min(t, b),
        dx: l <= r ? 1 : -1,
        dy: t <= b ? 1 : -1
    };
}
function adjustLabelCoordinate(coordinate, labelSizes) {
    const { size , min , max , padding  } = labelSizes;
    const halfSize = size / 2;
    if (size > max - min) // if it does not fit, display as much as possible
    return (max + min) / 2;
    if (min >= coordinate - padding - halfSize) coordinate = min + padding + halfSize;
    if (max <= coordinate + padding + halfSize) coordinate = max - padding - halfSize;
    return coordinate;
}
function getArrowHeads(line) {
    const options = line.options;
    const arrowStartOpts = options.arrowHeads && options.arrowHeads.start;
    const arrowEndOpts = options.arrowHeads && options.arrowHeads.end;
    return {
        startOpts: arrowStartOpts,
        endOpts: arrowEndOpts,
        startAdjust: getLineAdjust(line, arrowStartOpts),
        endAdjust: getLineAdjust(line, arrowEndOpts)
    };
}
function getLineAdjust(line, arrowOpts) {
    if (!arrowOpts || !arrowOpts.display) return 0;
    const { length , width  } = arrowOpts;
    const adjust = line.options.borderWidth / 2;
    const p1 = {
        x: length,
        y: width + adjust
    };
    const p2 = {
        x: 0,
        y: adjust
    };
    return Math.abs(interpolateX(0, p1, p2));
}
function drawArrowHead(ctx, offset, adjust, arrowOpts) {
    if (!arrowOpts || !arrowOpts.display) return;
    const { length , width , fill , backgroundColor , borderColor  } = arrowOpts;
    const arrowOffsetX = Math.abs(offset - length) + adjust;
    ctx.beginPath();
    setShadowStyle(ctx, arrowOpts);
    setBorderStyle(ctx, arrowOpts);
    ctx.moveTo(arrowOffsetX, -width);
    ctx.lineTo(offset + adjust, 0);
    ctx.lineTo(arrowOffsetX, width);
    if (fill === true) {
        ctx.fillStyle = backgroundColor || borderColor;
        ctx.closePath();
        ctx.fill();
        ctx.shadowColor = "transparent";
    } else ctx.shadowColor = arrowOpts.borderShadowColor;
    ctx.stroke();
}
class EllipseAnnotation extends (0, _chartJs.Element) {
    inRange(mouseX, mouseY, axis, useFinalPosition) {
        const rotation = this.options.rotation;
        const borderWidth = this.options.borderWidth;
        if (axis !== "x" && axis !== "y") return pointInEllipse({
            x: mouseX,
            y: mouseY
        }, this.getProps([
            "width",
            "height",
            "centerX",
            "centerY"
        ], useFinalPosition), rotation, borderWidth);
        const { x , y , x2 , y2  } = this.getProps([
            "x",
            "y",
            "x2",
            "y2"
        ], useFinalPosition);
        const hBorderWidth = borderWidth / 2;
        const limit = axis === "y" ? {
            start: y,
            end: y2
        } : {
            start: x,
            end: x2
        };
        const rotatedPoint = rotated({
            x: mouseX,
            y: mouseY
        }, this.getCenterPoint(useFinalPosition), (0, _helpers.toRadians)(-rotation));
        return rotatedPoint[axis] >= limit.start - hBorderWidth - EPSILON && rotatedPoint[axis] <= limit.end + hBorderWidth + EPSILON;
    }
    getCenterPoint(useFinalPosition) {
        return getElementCenterPoint(this, useFinalPosition);
    }
    draw(ctx) {
        const { width , height , centerX , centerY , options  } = this;
        ctx.save();
        translate(ctx, this.getCenterPoint(), options.rotation);
        setShadowStyle(ctx, this.options);
        ctx.beginPath();
        ctx.fillStyle = options.backgroundColor;
        const stroke = setBorderStyle(ctx, options);
        ctx.ellipse(centerX, centerY, height / 2, width / 2, (0, _helpers.PI) / 2, 0, 2 * (0, _helpers.PI));
        ctx.fill();
        if (stroke) {
            ctx.shadowColor = options.borderShadowColor;
            ctx.stroke();
        }
        ctx.restore();
    }
    get label() {
        return this.elements && this.elements[0];
    }
    resolveElementProperties(chart, options) {
        return resolveBoxAndLabelProperties(chart, options);
    }
}
EllipseAnnotation.id = "ellipseAnnotation";
EllipseAnnotation.defaults = {
    adjustScaleRange: true,
    backgroundShadowColor: "transparent",
    borderDash: [],
    borderDashOffset: 0,
    borderShadowColor: "transparent",
    borderWidth: 1,
    display: true,
    label: Object.assign({}, BoxAnnotation.defaults.label),
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    xMax: undefined,
    xMin: undefined,
    xScaleID: undefined,
    yMax: undefined,
    yMin: undefined,
    yScaleID: undefined,
    z: 0
};
EllipseAnnotation.defaultRoutes = {
    borderColor: "color",
    backgroundColor: "color"
};
EllipseAnnotation.descriptors = {
    label: {
        _fallback: true
    }
};
function pointInEllipse(p, ellipse, rotation, borderWidth) {
    const { width , height , centerX , centerY  } = ellipse;
    const xRadius = width / 2;
    const yRadius = height / 2;
    if (xRadius <= 0 || yRadius <= 0) return false;
    // https://stackoverflow.com/questions/7946187/point-and-ellipse-rotated-position-test-algorithm
    const angle = (0, _helpers.toRadians)(rotation || 0);
    const hBorderWidth = borderWidth / 2 || 0;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const a = Math.pow(cosAngle * (p.x - centerX) + sinAngle * (p.y - centerY), 2);
    const b = Math.pow(sinAngle * (p.x - centerX) - cosAngle * (p.y - centerY), 2);
    return a / Math.pow(xRadius + hBorderWidth, 2) + b / Math.pow(yRadius + hBorderWidth, 2) <= 1.0001;
}
class PointAnnotation extends (0, _chartJs.Element) {
    inRange(mouseX, mouseY, axis, useFinalPosition) {
        const { x , y , x2 , y2 , width  } = this.getProps([
            "x",
            "y",
            "x2",
            "y2",
            "width"
        ], useFinalPosition);
        const borderWidth = this.options.borderWidth;
        if (axis !== "x" && axis !== "y") return inPointRange({
            x: mouseX,
            y: mouseY
        }, this.getCenterPoint(useFinalPosition), width / 2, borderWidth);
        const hBorderWidth = borderWidth / 2;
        const limit = axis === "y" ? {
            start: y,
            end: y2,
            value: mouseY
        } : {
            start: x,
            end: x2,
            value: mouseX
        };
        return limit.value >= limit.start - hBorderWidth && limit.value <= limit.end + hBorderWidth;
    }
    getCenterPoint(useFinalPosition) {
        return getElementCenterPoint(this, useFinalPosition);
    }
    draw(ctx) {
        const options = this.options;
        const borderWidth = options.borderWidth;
        if (options.radius < 0.1) return;
        ctx.save();
        ctx.fillStyle = options.backgroundColor;
        setShadowStyle(ctx, options);
        const stroke = setBorderStyle(ctx, options);
        options.borderWidth = 0;
        (0, _helpers.drawPoint)(ctx, options, this.centerX, this.centerY);
        if (stroke && !isImageOrCanvas(options.pointStyle)) {
            ctx.shadowColor = options.borderShadowColor;
            ctx.stroke();
        }
        ctx.restore();
        options.borderWidth = borderWidth;
    }
    resolveElementProperties(chart, options) {
        return resolvePointProperties(chart, options);
    }
}
PointAnnotation.id = "pointAnnotation";
PointAnnotation.defaults = {
    adjustScaleRange: true,
    backgroundShadowColor: "transparent",
    borderDash: [],
    borderDashOffset: 0,
    borderShadowColor: "transparent",
    borderWidth: 1,
    display: true,
    pointStyle: "circle",
    radius: 10,
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    xAdjust: 0,
    xMax: undefined,
    xMin: undefined,
    xScaleID: undefined,
    xValue: undefined,
    yAdjust: 0,
    yMax: undefined,
    yMin: undefined,
    yScaleID: undefined,
    yValue: undefined,
    z: 0
};
PointAnnotation.defaultRoutes = {
    borderColor: "color",
    backgroundColor: "color"
};
class PolygonAnnotation extends (0, _chartJs.Element) {
    inRange(mouseX, mouseY, axis, useFinalPosition) {
        if (axis !== "x" && axis !== "y") return this.options.radius >= 0.1 && this.elements.length > 1 && pointIsInPolygon(this.elements, mouseX, mouseY, useFinalPosition);
        const rotatedPoint = rotated({
            x: mouseX,
            y: mouseY
        }, this.getCenterPoint(useFinalPosition), (0, _helpers.toRadians)(-this.options.rotation));
        const axisPoints = this.elements.map((point)=>axis === "y" ? point.bY : point.bX);
        const start = Math.min(...axisPoints);
        const end = Math.max(...axisPoints);
        return rotatedPoint[axis] >= start && rotatedPoint[axis] <= end;
    }
    getCenterPoint(useFinalPosition) {
        return getElementCenterPoint(this, useFinalPosition);
    }
    draw(ctx) {
        const { elements , options  } = this;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = options.backgroundColor;
        setShadowStyle(ctx, options);
        const stroke = setBorderStyle(ctx, options);
        let first = true;
        for (const el of elements)if (first) {
            ctx.moveTo(el.x, el.y);
            first = false;
        } else ctx.lineTo(el.x, el.y);
        ctx.closePath();
        ctx.fill();
        // If no border, don't draw it
        if (stroke) {
            ctx.shadowColor = options.borderShadowColor;
            ctx.stroke();
        }
        ctx.restore();
    }
    resolveElementProperties(chart, options) {
        const properties = resolvePointProperties(chart, options);
        const { x , y  } = properties;
        const { sides , rotation  } = options;
        const elements = [];
        const angle = 2 * (0, _helpers.PI) / sides;
        let rad = rotation * (0, _helpers.RAD_PER_DEG);
        for(let i = 0; i < sides; i++, rad += angle)elements.push(buildPointElement(properties, options, rad));
        properties.elements = elements;
        properties.initProperties = {
            x,
            y
        };
        return properties;
    }
}
PolygonAnnotation.id = "polygonAnnotation";
PolygonAnnotation.defaults = {
    adjustScaleRange: true,
    backgroundShadowColor: "transparent",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderShadowColor: "transparent",
    borderWidth: 1,
    display: true,
    point: {
        radius: 0
    },
    radius: 10,
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    sides: 3,
    xAdjust: 0,
    xMax: undefined,
    xMin: undefined,
    xScaleID: undefined,
    xValue: undefined,
    yAdjust: 0,
    yMax: undefined,
    yMin: undefined,
    yScaleID: undefined,
    yValue: undefined,
    z: 0
};
PolygonAnnotation.defaultRoutes = {
    borderColor: "color",
    backgroundColor: "color"
};
function buildPointElement({ centerX , centerY  }, { radius , borderWidth  }, rad) {
    const halfBorder = borderWidth / 2;
    const sin = Math.sin(rad);
    const cos = Math.cos(rad);
    const point = {
        x: centerX + sin * radius,
        y: centerY - cos * radius
    };
    return {
        type: "point",
        optionScope: "point",
        properties: {
            x: point.x,
            y: point.y,
            centerX: point.x,
            centerY: point.y,
            bX: centerX + sin * (radius + halfBorder),
            bY: centerY - cos * (radius + halfBorder)
        }
    };
}
function pointIsInPolygon(points, x, y, useFinalPosition) {
    let isInside = false;
    let A = points[points.length - 1].getProps([
        "bX",
        "bY"
    ], useFinalPosition);
    for (const point of points){
        const B = point.getProps([
            "bX",
            "bY"
        ], useFinalPosition);
        if (B.bY > y !== A.bY > y && x < (A.bX - B.bX) * (y - B.bY) / (A.bY - B.bY) + B.bX) isInside = !isInside;
        A = B;
    }
    return isInside;
}
const annotationTypes = {
    box: BoxAnnotation,
    ellipse: EllipseAnnotation,
    label: LabelAnnotation,
    line: LineAnnotation,
    point: PointAnnotation,
    polygon: PolygonAnnotation
};
/**
 * Register fallback for annotation elements
 * For example lineAnnotation options would be looked through:
 * - the annotation object (options.plugins.annotation.annotations[id])
 * - element options (options.elements.lineAnnotation)
 * - element defaults (defaults.elements.lineAnnotation)
 * - annotation plugin defaults (defaults.plugins.annotation, this is what we are registering here)
 */ Object.keys(annotationTypes).forEach((key)=>{
    (0, _chartJs.defaults).describe(`elements.${annotationTypes[key].id}`, {
        _fallback: "plugins.annotation.common"
    });
});
const directUpdater = {
    update: Object.assign
};
/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").UpdateMode } UpdateMode
 * @typedef { import('../../types/options').AnnotationPluginOptions } AnnotationPluginOptions
 */ /**
 * Resolve the annotation type, checking if is supported.
 * @param {string} [type=line] - annotation type
 * @returns {string} resolved annotation type
 */ function resolveType(type = "line") {
    if (annotationTypes[type]) return type;
    console.warn(`Unknown annotation type: '${type}', defaulting to 'line'`);
    return "line";
}
/**
 * @param {Chart} chart
 * @param {Object} state
 * @param {AnnotationPluginOptions} options
 * @param {UpdateMode} mode
 */ function updateElements(chart, state, options, mode) {
    const animations = resolveAnimations(chart, options.animations, mode);
    const annotations = state.annotations;
    const elements = resyncElements(state.elements, annotations);
    for(let i = 0; i < annotations.length; i++){
        const annotationOptions = annotations[i];
        const element = getOrCreateElement(elements, i, annotationOptions.type);
        const resolver = annotationOptions.setContext(getContext(chart, element, annotationOptions));
        const properties = element.resolveElementProperties(chart, resolver);
        properties.skip = toSkip(properties);
        if ("elements" in properties) {
            updateSubElements(element, properties, resolver, animations);
            // Remove the sub-element definitions from properties, so the actual elements
            // are not overwritten by their definitions
            delete properties.elements;
        }
        if (!(0, _helpers.defined)(element.x)) // If the element is newly created, assing the properties directly - to
        // make them readily awailable to any scriptable options. If we do not do this,
        // the properties retruned by `resolveElementProperties` are available only
        // after options resolution.
        Object.assign(element, properties);
        properties.options = resolveAnnotationOptions(resolver);
        animations.update(element, properties);
    }
}
function toSkip(properties) {
    return isNaN(properties.x) || isNaN(properties.y);
}
function resolveAnimations(chart, animOpts, mode) {
    if (mode === "reset" || mode === "none" || mode === "resize") return directUpdater;
    return new (0, _chartJs.Animations)(chart, animOpts);
}
function updateSubElements(mainElement, { elements , initProperties  }, resolver, animations) {
    const subElements = mainElement.elements || (mainElement.elements = []);
    subElements.length = elements.length;
    for(let i = 0; i < elements.length; i++){
        const definition = elements[i];
        const properties = definition.properties;
        const subElement = getOrCreateElement(subElements, i, definition.type, initProperties);
        const subResolver = resolver[definition.optionScope].override(definition);
        properties.options = resolveAnnotationOptions(subResolver);
        animations.update(subElement, properties);
    }
}
function getOrCreateElement(elements, index, type, initProperties) {
    const elementClass = annotationTypes[resolveType(type)];
    let element = elements[index];
    if (!element || !(element instanceof elementClass)) {
        element = elements[index] = new elementClass();
        if ((0, _helpers.isObject)(initProperties)) Object.assign(element, initProperties);
    }
    return element;
}
function resolveAnnotationOptions(resolver) {
    const elementClass = annotationTypes[resolveType(resolver.type)];
    const result = {};
    result.id = resolver.id;
    result.type = resolver.type;
    result.drawTime = resolver.drawTime;
    Object.assign(result, resolveObj(resolver, elementClass.defaults), resolveObj(resolver, elementClass.defaultRoutes));
    for (const hook of hooks)result[hook] = resolver[hook];
    return result;
}
function resolveObj(resolver, defs) {
    const result = {};
    for (const prop of Object.keys(defs)){
        const optDefs = defs[prop];
        const value = resolver[prop];
        result[prop] = (0, _helpers.isObject)(optDefs) ? resolveObj(value, optDefs) : value;
    }
    return result;
}
function getContext(chart, element, annotation) {
    return element.$context || (element.$context = Object.assign(Object.create(chart.getContext()), {
        element,
        id: annotation.id,
        type: "annotation"
    }));
}
function resyncElements(elements, annotations) {
    const count = annotations.length;
    const start = elements.length;
    if (start < count) {
        const add = count - start;
        elements.splice(start, 0, ...new Array(add));
    } else if (start > count) elements.splice(count, start - count);
    return elements;
}
var version = "2.1.2";
const chartStates = new Map();
var annotation = {
    id: "annotation",
    version,
    beforeRegister () {
        requireVersion("chart.js", "3.7", (0, _chartJs.Chart).version);
    },
    afterRegister () {
        (0, _chartJs.Chart).register(annotationTypes);
    },
    afterUnregister () {
        (0, _chartJs.Chart).unregister(annotationTypes);
    },
    beforeInit (chart) {
        chartStates.set(chart, {
            annotations: [],
            elements: [],
            visibleElements: [],
            listeners: {},
            listened: false,
            moveListened: false,
            hovered: []
        });
    },
    beforeUpdate (chart, args, options) {
        const state = chartStates.get(chart);
        const annotations = state.annotations = [];
        let annotationOptions = options.annotations;
        if ((0, _helpers.isObject)(annotationOptions)) Object.keys(annotationOptions).forEach((key)=>{
            const value = annotationOptions[key];
            if ((0, _helpers.isObject)(value)) {
                value.id = key;
                annotations.push(value);
            }
        });
        else if ((0, _helpers.isArray)(annotationOptions)) annotations.push(...annotationOptions);
        verifyScaleOptions(annotations, chart.scales);
    },
    afterDataLimits (chart, args) {
        const state = chartStates.get(chart);
        adjustScaleRange(chart, args.scale, state.annotations.filter((a)=>a.display && a.adjustScaleRange));
    },
    afterUpdate (chart, args, options) {
        const state = chartStates.get(chart);
        updateListeners(chart, state, options);
        updateElements(chart, state, options, args.mode);
        state.visibleElements = state.elements.filter((el)=>!el.skip && el.options.display);
    },
    beforeDatasetsDraw (chart, _args, options) {
        draw(chart, "beforeDatasetsDraw", options.clip);
    },
    afterDatasetsDraw (chart, _args, options) {
        draw(chart, "afterDatasetsDraw", options.clip);
    },
    beforeDraw (chart, _args, options) {
        draw(chart, "beforeDraw", options.clip);
    },
    afterDraw (chart, _args, options) {
        draw(chart, "afterDraw", options.clip);
    },
    beforeEvent (chart, args, options) {
        const state = chartStates.get(chart);
        if (handleEvent(state, args.event, options)) args.changed = true;
    },
    afterDestroy (chart) {
        chartStates.delete(chart);
    },
    _getState (chart) {
        return chartStates.get(chart);
    },
    defaults: {
        animations: {
            numbers: {
                properties: [
                    "x",
                    "y",
                    "x2",
                    "y2",
                    "width",
                    "height",
                    "centerX",
                    "centerY",
                    "pointX",
                    "pointY",
                    "radius"
                ],
                type: "number"
            }
        },
        clip: true,
        interaction: {
            mode: undefined,
            axis: undefined,
            intersect: undefined
        },
        common: {
            drawTime: "afterDatasetsDraw",
            label: {}
        }
    },
    descriptors: {
        _indexable: false,
        _scriptable: (prop)=>!hooks.includes(prop),
        annotations: {
            _allKeys: false,
            _fallback: (prop, opts)=>`elements.${annotationTypes[resolveType(opts.type)].id}`
        },
        interaction: {
            _fallback: true
        },
        common: {
            label: {
                _fallback: true
            }
        }
    },
    additionalOptionScopes: [
        ""
    ]
};
function draw(chart, caller, clip) {
    const { ctx , chartArea  } = chart;
    const { visibleElements  } = chartStates.get(chart);
    if (clip) (0, _helpers.clipArea)(ctx, chartArea);
    const drawableElements = getDrawableElements(visibleElements, caller).sort((a, b)=>a.options.z - b.options.z);
    for (const element of drawableElements)element.draw(chart.ctx, chartArea);
    if (clip) (0, _helpers.unclipArea)(ctx);
}
function getDrawableElements(elements, caller) {
    const drawableElements = [];
    for (const el of elements){
        if (el.options.drawTime === caller) drawableElements.push(el);
        if (el.elements && el.elements.length) {
            for (const sub of el.elements)if (sub.options.display && sub.options.drawTime === caller) drawableElements.push(sub);
        }
    }
    return drawableElements;
}

},{"chart.js":"d3eK4","chart.js/helpers":"7ZUAe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3eK4":[function(require,module,exports) {
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaults", ()=>(0, _helpersSegmentMjs.d));
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Animations", ()=>Animations);
parcelHelpers.export(exports, "ArcElement", ()=>ArcElement);
parcelHelpers.export(exports, "BarController", ()=>BarController);
parcelHelpers.export(exports, "BarElement", ()=>BarElement);
parcelHelpers.export(exports, "BasePlatform", ()=>BasePlatform);
parcelHelpers.export(exports, "BasicPlatform", ()=>BasicPlatform);
parcelHelpers.export(exports, "BubbleController", ()=>BubbleController);
parcelHelpers.export(exports, "CategoryScale", ()=>CategoryScale);
parcelHelpers.export(exports, "Chart", ()=>Chart);
parcelHelpers.export(exports, "DatasetController", ()=>DatasetController);
parcelHelpers.export(exports, "Decimation", ()=>plugin_decimation);
parcelHelpers.export(exports, "DomPlatform", ()=>DomPlatform);
parcelHelpers.export(exports, "DoughnutController", ()=>DoughnutController);
parcelHelpers.export(exports, "Element", ()=>Element);
parcelHelpers.export(exports, "Filler", ()=>index);
parcelHelpers.export(exports, "Interaction", ()=>Interaction);
parcelHelpers.export(exports, "Legend", ()=>plugin_legend);
parcelHelpers.export(exports, "LineController", ()=>LineController);
parcelHelpers.export(exports, "LineElement", ()=>LineElement);
parcelHelpers.export(exports, "LinearScale", ()=>LinearScale);
parcelHelpers.export(exports, "LogarithmicScale", ()=>LogarithmicScale);
parcelHelpers.export(exports, "PieController", ()=>PieController);
parcelHelpers.export(exports, "PointElement", ()=>PointElement);
parcelHelpers.export(exports, "PolarAreaController", ()=>PolarAreaController);
parcelHelpers.export(exports, "RadarController", ()=>RadarController);
parcelHelpers.export(exports, "RadialLinearScale", ()=>RadialLinearScale);
parcelHelpers.export(exports, "Scale", ()=>Scale);
parcelHelpers.export(exports, "ScatterController", ()=>ScatterController);
parcelHelpers.export(exports, "SubTitle", ()=>plugin_subtitle);
parcelHelpers.export(exports, "Ticks", ()=>Ticks);
parcelHelpers.export(exports, "TimeScale", ()=>TimeScale);
parcelHelpers.export(exports, "TimeSeriesScale", ()=>TimeSeriesScale);
parcelHelpers.export(exports, "Title", ()=>plugin_title);
parcelHelpers.export(exports, "Tooltip", ()=>plugin_tooltip);
parcelHelpers.export(exports, "_adapters", ()=>adapters);
parcelHelpers.export(exports, "_detectPlatform", ()=>_detectPlatform);
parcelHelpers.export(exports, "animator", ()=>animator);
parcelHelpers.export(exports, "controllers", ()=>controllers);
parcelHelpers.export(exports, "elements", ()=>elements);
parcelHelpers.export(exports, "layouts", ()=>layouts);
parcelHelpers.export(exports, "plugins", ()=>plugins);
parcelHelpers.export(exports, "registerables", ()=>registerables);
parcelHelpers.export(exports, "registry", ()=>registry);
parcelHelpers.export(exports, "scales", ()=>scales);
var _helpersSegmentMjs = require("./chunks/helpers.segment.mjs");
class Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
    _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart,
                initial: anims.initial,
                numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
    _refresh() {
        if (this._request) return;
        this._running = true;
        this._request = (0, _helpersSegmentMjs.r).call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) this._refresh();
        });
    }
    _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) return;
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) anims.duration = item._total;
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, "progress");
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, "complete");
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) this._running = false;
    }
    _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
    listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
        if (!items || !items.length) return;
        this._getAnims(chart).items.push(...items);
    }
    has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) return;
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) return false;
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) return false;
        return true;
    }
    stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) return;
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i)items[i].cancel();
        anims.items = [];
        this._notify(chart, anims, Date.now(), "complete");
    }
    remove(chart) {
        return this._charts.delete(chart);
    }
}
var animator = new Animator();
const transparent = "transparent";
const interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
    color (from, to, factor) {
        const c0 = (0, _helpersSegmentMjs.c)(from || transparent);
        const c1 = c0.valid && (0, _helpersSegmentMjs.c)(to || transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class Animation {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = (0, _helpersSegmentMjs.a)([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = (0, _helpersSegmentMjs.a)([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || interpolators[cfg.type || typeof from];
        this._easing = (0, _helpersSegmentMjs.e)[cfg.easing] || (0, _helpersSegmentMjs.e).linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = (0, _helpersSegmentMjs.a)([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = (0, _helpersSegmentMjs.a)([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res,
                rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? "res" : "rej";
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++)promises[i][method]();
    }
}
const numbers = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
];
const colors = [
    "color",
    "borderColor",
    "backgroundColor"
];
(0, _helpersSegmentMjs.d).set("animation", {
    delay: undefined,
    duration: 1000,
    easing: "easeOutQuart",
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
});
const animationOptions = Object.keys((0, _helpersSegmentMjs.d).animation);
(0, _helpersSegmentMjs.d).describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: (name)=>name !== "onProgress" && name !== "onComplete" && name !== "fn"
});
(0, _helpersSegmentMjs.d).set("animations", {
    colors: {
        type: "color",
        properties: colors
    },
    numbers: {
        type: "number",
        properties: numbers
    }
});
(0, _helpersSegmentMjs.d).describe("animations", {
    _fallback: "animation"
});
(0, _helpersSegmentMjs.d).set("transitions", {
    active: {
        animation: {
            duration: 400
        }
    },
    resize: {
        animation: {
            duration: 0
        }
    },
    show: {
        animations: {
            colors: {
                from: "transparent"
            },
            visible: {
                type: "boolean",
                duration: 0
            }
        }
    },
    hide: {
        animations: {
            colors: {
                to: "transparent"
            },
            visible: {
                type: "boolean",
                easing: "linear",
                fn: (v)=>v | 0
            }
        }
    }
});
class Animations {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!(0, _helpersSegmentMjs.i)(config)) return;
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!(0, _helpersSegmentMjs.i)(cfg)) return;
            const resolved = {};
            for (const option of animationOptions)resolved[option] = cfg[option];
            ((0, _helpersSegmentMjs.b)(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
            });
        });
    }
    _animateOptions(target, values) {
        const newOptions = values.options;
        const options = resolveTargetOptions(target, newOptions);
        if (!options) return [];
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) awaitAll(target.options.$animations, newOptions).then(()=>{
            target.options = newOptions;
        }, ()=>{});
        return animations;
    }
    _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === "$") continue;
            if (prop === "options") {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else animation.cancel();
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new Animation(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
    update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            animator.add(this._chart, animations);
            return true;
        }
    }
}
function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) running.push(anim.wait());
    }
    return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
    if (!newOptions) return;
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
    });
    return options;
}
function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) return false;
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function toClip(value) {
    let t, r, b, l;
    if ((0, _helpersSegmentMjs.i)(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else t = r = b = l = value;
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i)keys.push(metasets[i].index);
    return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i, ilen, datasetIndex, otherValue;
    if (value === null) return;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            if (options.all) continue;
            break;
        }
        otherValue = stack.values[datasetIndex];
        if ((0, _helpersSegmentMjs.g)(otherValue) && (singleMode || value === 0 || (0, _helpersSegmentMjs.s)(value) === (0, _helpersSegmentMjs.s)(otherValue))) value += otherValue;
    }
    return value;
}
function convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            x: key,
            y: data[key]
        };
    }
    return adata;
}
function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
    const { min , max , minDefined , maxDefined  } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) return meta.index;
    }
    return null;
}
function updateStacks(controller, parsed) {
    const { chart , _cachedMeta: meta  } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale , vScale , index: datasetIndex  } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index , [vAxis]: value  } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
    }
}
function getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
    return (0, _helpersSegmentMjs.h)(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index,
        mode: "default",
        type: "dataset"
    });
}
function createDataContext(parent, index, element) {
    return (0, _helpersSegmentMjs.h)(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element,
        index,
        mode: "default",
        type: "data"
    });
}
function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) return;
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) return;
        delete stacks[axis][datasetIndex];
    }
}
const isDirectUpdateMode = (mode)=>mode === "reset" || mode === "none";
const cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: getSortedDatasetIndices(chart, true),
        values: null
    };
class DatasetController {
    constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
        this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = isStacked(meta.vScale, meta);
        this.addElements();
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) clearStacks(this._cachedMeta);
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === "x" ? x : axis === "r" ? r : y;
        const xid = meta.xAxisID = (0, _helpersSegmentMjs.v)(dataset.xAxisID, getFirstScaleId(chart, "x"));
        const yid = meta.yAxisID = (0, _helpersSegmentMjs.v)(dataset.yAxisID, getFirstScaleId(chart, "y"));
        const rid = meta.rAxisID = (0, _helpersSegmentMjs.v)(dataset.rAxisID, getFirstScaleId(chart, "r"));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update("reset");
    }
    _destroy() {
        const meta = this._cachedMeta;
        if (this._data) (0, _helpersSegmentMjs.u)(this._data, this);
        if (meta._stacked) clearStacks(meta);
    }
    _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if ((0, _helpersSegmentMjs.i)(data)) this._data = convertObjectDataToArray(data);
        else if (_data !== data) {
            if (_data) {
                (0, _helpersSegmentMjs.u)(_data, this);
                const meta = this._cachedMeta;
                clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) (0, _helpersSegmentMjs.l)(data, this);
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) meta.dataset = new this.datasetElementType();
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) updateStacks(this, meta._parsed);
    }
    configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
    parse(start, count) {
        const { _cachedMeta: meta , _data: data  } = this;
        const { iScale , _stacked  } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if ((0, _helpersSegmentMjs.b)(data[start])) parsed = this.parseArrayData(meta, data, start, count);
            else if ((0, _helpersSegmentMjs.i)(data[start])) parsed = this.parseObjectData(meta, data, start, count);
            else parsed = this.parsePrimitiveData(meta, data, start, count);
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) sorted = false;
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) updateStacks(this, parsed);
    }
    parsePrimitiveData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const { xScale , yScale  } = meta;
        const { xAxisKey ="x" , yAxisKey ="y"  } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse((0, _helpersSegmentMjs.f)(item, xAxisKey), index),
                y: yScale.parse((0, _helpersSegmentMjs.f)(item, yAxisKey), index)
            };
        }
        return parsed;
    }
    getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
    getDataElement(index) {
        return this._cachedMeta.data[index];
    }
    applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]
        };
        return applyStack(stack, value, meta.index, {
            mode
        });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin , max: otherMax  } = getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !(0, _helpersSegmentMjs.g)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) break;
        }
        if (sorted) for(i = ilen - 1; i >= 0; --i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            break;
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if ((0, _helpersSegmentMjs.g)(value)) values.push(value);
        }
        return values;
    }
    getMaxOverflow() {
        return false;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
            value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
        };
    }
    _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || "default");
        meta._clip = toClip((0, _helpersSegmentMjs.v)(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) continue;
            if (element.active && drawActiveElementsOnTop) active.push(element);
            else element.draw(ctx, area);
        }
        for(i = 0; i < active.length; ++i)active[i].draw(ctx, area);
    }
    getStyle(index, active) {
        const mode = active ? "active" : "default";
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
    getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
    resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
    _resolveElementOptions(elementType, mode = "default", index) {
        const active = mode === "active";
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + "-" + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && (0, _helpersSegmentMjs.j)(index);
        if (cached) return cloneIfNotShared(cached, sharing);
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            "hover",
            elementType,
            ""
        ] : [
            elementType,
            ""
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys((0, _helpersSegmentMjs.d).elements[elementType]);
        const context = ()=>this.getContext(index, active);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
        }
        return values;
    }
    _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) return cached;
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new Animations(chart, options && options.animations);
        if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
        return animations;
    }
    getSharedOptions(options) {
        if (!options.$shared) return;
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
        return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions,
            includeOptions
        };
    }
    updateElement(element, index, properties, mode) {
        if (isDirectUpdateMode(mode)) Object.assign(element, properties);
        else this._resolveAnimations(index, mode).update(element, properties);
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !isDirectUpdateMode(mode)) this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
    _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, "active", false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, "active", true);
    }
    _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", false);
    }
    _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", true);
    }
    _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList)this[method](arg1, arg2);
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) this.parse(0, count);
        if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
        else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
    }
    _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--)arr[i] = arr[i - count];
        };
        move(data);
        for(i = start; i < end; ++i)data[i] = new this.dataElementType();
        if (this._parsing) move(meta._parsed);
        this.parse(start, count);
        if (resetNewElements) this.updateElements(data, start, count, "reset");
    }
    updateElements(element, start, count, mode) {}
    _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) clearStacks(meta, removed);
        }
        meta.data.splice(start, count);
    }
    _sync(args) {
        if (this._parsing) this._syncList.push(args);
        else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            "_insertElements",
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            "_removeElements",
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            "_removeElements",
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) this._sync([
            "_removeElements",
            start,
            count
        ]);
        const newCount = arguments.length - 2;
        if (newCount) this._sync([
            "_insertElements",
            start,
            newCount
        ]);
    }
    _onDataUnshift() {
        this._sync([
            "_insertElements",
            0,
            arguments.length
        ]);
    }
}
DatasetController.defaults = {};
DatasetController.prototype.datasetElementType = null;
DatasetController.prototype.dataElementType = null;
function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++)values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        scale._cache.$bar = (0, _helpersSegmentMjs._)(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) return;
        if ((0, _helpersSegmentMjs.j)(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if ((0, _helpersSegmentMjs.k)(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio,
        start: ruler.pixels[index] - size / 2
    };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    if (next === null) next = curr + curr - prev;
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start
    };
}
function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart,
        barEnd,
        start: startValue,
        end: endValue,
        min,
        max
    };
}
function parseValue(entry, item, vScale, i) {
    if ((0, _helpersSegmentMjs.b)(entry)) parseFloatBar(entry, item, vScale, i);
    else item[vScale.axis] = vScale.parse(entry, i);
    return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
    if (size !== 0) return (0, _helpersSegmentMjs.s)(size);
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = "left";
        end = "right";
    } else {
        reverse = properties.base < properties.y;
        start = "bottom";
        end = "top";
    }
    if (reverse) {
        top = "end";
        bottom = "start";
    } else {
        top = "start";
        bottom = "end";
    }
    return {
        start,
        end,
        reverse,
        top,
        bottom
    };
}
function setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start , end , reverse , top , bottom  } = borderProps(properties);
    if (edge === "middle" && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) edge = top;
        else if ((stack._bottom || 0) === index) edge = bottom;
        else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = swap(edge, a, b);
        edge = startEnd(edge, b, a);
    } else edge = startEnd(edge, a, b);
    return edge;
}
function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
    return v === "start" ? start : v === "end" ? end : v;
}
function setInflateAmount(properties, { inflateAmount  }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class BarController extends DatasetController {
    parsePrimitiveData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        const { iScale , vScale  } = meta;
        const { xAxisKey ="x" , yAxisKey ="y"  } = this._parsing;
        const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse((0, _helpersSegmentMjs.f)(obj, iAxisKey), i);
            parsed.push(parseValue((0, _helpersSegmentMjs.f)(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale , vScale  } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
            value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === "reset";
        const { index , _cachedMeta: { vScale  }  } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || (0, _helpersSegmentMjs.k)(parsed[vScale.axis]) ? {
                base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
            const options = properties.options || bars[i].options;
            setBorderSkipped(properties, options, stack, index);
            setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
    _getStacks(last, dataIndex) {
        const { iScale  } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const skipNull = (meta)=>{
            const parsed = meta.controller.getParsed(dataIndex);
            const val = parsed && parsed[meta.vScale.axis];
            if ((0, _helpersSegmentMjs.k)(val) || isNaN(val)) return true;
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) continue;
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) stacks.push(meta.stack);
            if (meta.index === last) break;
        }
        if (!stacks.length) stacks.push(undefined);
        return stacks;
    }
    _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name !== undefined ? stacks.indexOf(name) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
    _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i)pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        const barThickness = opts.barThickness;
        const min = barThickness || computeMinSampleSize(meta);
        return {
            min,
            pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
    _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale , _stacked  } , options: { base: baseValue , minBarLength  }  } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && (0, _helpersSegmentMjs.s)(value) !== (0, _helpersSegmentMjs.s)(custom.barEnd)) start = 0;
            start += value;
        }
        const startValue = !(0, _helpersSegmentMjs.k)(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) head = vScale.getPixelForValue(start + length);
        else head = base;
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) base -= size / 2;
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = (0, _helpersSegmentMjs.s)(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size,
            base,
            head,
            center: head + size / 2
        };
    }
    _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = (0, _helpersSegmentMjs.v)(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === "flex" ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center,
            size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i)if (this.getParsed(i)[vScale.axis] !== null) rects[i].draw(this._ctx);
    }
}
BarController.id = "bar";
BarController.defaults = {
    datasetElementType: false,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: true,
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "base",
                "width",
                "height"
            ]
        }
    }
};
BarController.overrides = {
    scales: {
        _index_: {
            type: "category",
            offset: true,
            grid: {
                offset: true
            }
        },
        _value_: {
            type: "linear",
            beginAtZero: true
        }
    }
};
class BubbleController extends DatasetController {
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++)parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersSegmentMjs.v)(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersSegmentMjs.v)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        return max > 0 && max;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { xScale , yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: meta.label,
            value: "(" + x + ", " + y + (r ? ", " + r : "") + ")"
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale , vScale  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
                if (reset) properties.options.radius = 0;
            }
            this.updateElement(point, i, properties, mode);
        }
    }
    resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) values = Object.assign({}, values, {
            $shared: false
        });
        const radius = values.radius;
        if (mode !== "active") values.radius = 0;
        values.radius += (0, _helpersSegmentMjs.v)(parsed && parsed._custom, radius);
        return values;
    }
}
BubbleController.id = "bubble";
BubbleController.defaults = {
    datasetElementType: false,
    dataElementType: "point",
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "borderWidth",
                "radius"
            ]
        }
    }
};
BubbleController.overrides = {
    scales: {
        x: {
            type: "linear"
        },
        y: {
            type: "linear"
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                title () {
                    return "";
                }
            }
        }
    }
};
function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < (0, _helpersSegmentMjs.T)) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>(0, _helpersSegmentMjs.p)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>(0, _helpersSegmentMjs.p)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax((0, _helpersSegmentMjs.H), startY, endY);
        const minX = calcMin((0, _helpersSegmentMjs.P), startX, endX);
        const minY = calcMin((0, _helpersSegmentMjs.P) + (0, _helpersSegmentMjs.H), startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX,
        ratioY,
        offsetX,
        offsetY
    };
}
class DoughnutController extends DatasetController {
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
    parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) meta._parsed = data;
        else {
            let getter = (i)=>+data[i];
            if ((0, _helpersSegmentMjs.i)(data[start])) {
                const { key ="value"  } = this._parsing;
                getter = (i)=>+(0, _helpersSegmentMjs.f)(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i)meta._parsed[i] = getter(i);
        }
    }
    _getRotation() {
        return (0, _helpersSegmentMjs.t)(this.options.rotation - 90);
    }
    _getCircumference() {
        return (0, _helpersSegmentMjs.t)(this.options.circumference);
    }
    _getRotationExtents() {
        let min = (0, _helpersSegmentMjs.T);
        let max = -(0, _helpersSegmentMjs.T);
        for(let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i)) {
            const controller = this.chart.getDatasetMeta(i).controller;
            const rotation = controller._getRotation();
            const circumference = controller._getCircumference();
            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
    update(mode) {
        const chart = this.chart;
        const { chartArea  } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min((0, _helpersSegmentMjs.m)(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference , rotation  } = this._getRotationExtents();
        const { ratioX , ratioY , offsetX , offsetY  } = getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = (0, _helpersSegmentMjs.n)(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) return 0;
        return this.calculateCircumference(meta._parsed[i] * circumference / (0, _helpersSegmentMjs.T));
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i)startAngle += this._circumference(i, reset);
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle,
                endAngle: startAngle + circumference,
                circumference,
                outerRadius,
                innerRadius
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? "active" : mode);
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) total += Math.abs(value);
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) return (0, _helpersSegmentMjs.T) * (Math.abs(value) / total);
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersSegmentMjs.o)(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || "",
            value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i)if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
            }
        }
        if (!arcs) return 0;
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== "inner") max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
    _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i)if (this.chart.isDatasetVisible(i)) ringWeightOffset += this._getRingWeight(i);
        return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
        return Math.max((0, _helpersSegmentMjs.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
DoughnutController.id = "doughnut";
DoughnutController.defaults = {
    datasetElementType: false,
    dataElementType: "arc",
    animation: {
        animateRotate: true,
        animateScale: false
    },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing"
            ]
        }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
};
DoughnutController.descriptors = {
    _scriptable: (name)=>name !== "spacing",
    _indexable: (name)=>name !== "spacing"
};
DoughnutController.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        const { labels: { pointStyle  }  } = chart.legend.options;
                        return data.labels.map((label, i)=>{
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);
                            return {
                                text: label,
                                fillStyle: style.backgroundColor,
                                strokeStyle: style.borderColor,
                                lineWidth: style.borderWidth,
                                pointStyle: pointStyle,
                                hidden: !chart.getDataVisibility(i),
                                index: i
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (e, legendItem, legend) {
                legend.chart.toggleDataVisibility(legendItem.index);
                legend.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (tooltipItem) {
                    let dataLabel = tooltipItem.label;
                    const value = ": " + tooltipItem.formattedValue;
                    if ((0, _helpersSegmentMjs.b)(dataLabel)) {
                        dataLabel = dataLabel.slice();
                        dataLabel[0] += value;
                    } else dataLabel += value;
                    return dataLabel;
                }
            }
        }
    }
};
class LineController extends DatasetController {
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line , data: points = [] , _dataset  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = (0, _helpersSegmentMjs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersSegmentMjs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) options.borderWidth = 0;
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const { sharedOptions , includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = (0, _helpersSegmentMjs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, _helpersSegmentMjs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}
LineController.id = "line";
LineController.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: true,
    spanGaps: false
};
LineController.overrides = {
    scales: {
        _index_: {
            type: "category"
        },
        _value_: {
            type: "linear"
        }
    }
};
class PolarAreaController extends DatasetController {
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersSegmentMjs.o)(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || "",
            value
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersSegmentMjs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) range.min = parsed;
                if (parsed > range.max) range.max = parsed;
            }
        });
        return range;
    }
    _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * (0, _helpersSegmentMjs.P);
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i)angle += this._computeAngle(i, mode, defaultAngle);
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) outerRadius = 0;
                if (animationOpts.animateRotate) startAngle = endAngle = datasetStartAngle;
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? "active" : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) count++;
        });
        return count;
    }
    _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? (0, _helpersSegmentMjs.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}
PolarAreaController.id = "polarArea";
PolarAreaController.defaults = {
    dataElementType: "arc",
    animation: {
        animateRotate: true,
        animateScale: true
    },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius"
            ]
        }
    },
    indexAxis: "r",
    startAngle: 0
};
PolarAreaController.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (chart) {
                    const data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        const { labels: { pointStyle  }  } = chart.legend.options;
                        return data.labels.map((label, i)=>{
                            const meta = chart.getDatasetMeta(0);
                            const style = meta.controller.getStyle(i);
                            return {
                                text: label,
                                fillStyle: style.backgroundColor,
                                strokeStyle: style.borderColor,
                                lineWidth: style.borderWidth,
                                pointStyle: pointStyle,
                                hidden: !chart.getDataVisibility(i),
                                index: i
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (e, legendItem, legend) {
                legend.chart.toggleDataVisibility(legendItem.index);
                legend.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (context) {
                    return context.chart.data.labels[context.dataIndex] + ": " + context.formattedValue;
                }
            }
        }
    },
    scales: {
        r: {
            type: "radialLinear",
            angleLines: {
                display: false
            },
            beginAtZero: true,
            grid: {
                circular: true
            },
            pointLabels: {
                display: false
            },
            startAngle: 0
        }
    }
};
class PieController extends DoughnutController {
}
PieController.id = "pie";
PieController.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
};
class RadarController extends DatasetController {
    getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: "" + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersSegmentMjs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== "resize") {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) options.borderWidth = 0;
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === "reset";
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x,
                y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}
RadarController.id = "radar";
RadarController.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: true,
    elements: {
        line: {
            fill: "start"
        }
    }
};
RadarController.overrides = {
    aspectRatio: 1,
    scales: {
        r: {
            type: "radialLinear"
        }
    }
};
class Element {
    constructor(){
        this.x = undefined;
        this.y = undefined;
        this.active = false;
        this.options = undefined;
        this.$animations = undefined;
    }
    tooltipPosition(useFinalPosition) {
        const { x , y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    hasValue() {
        return (0, _helpersSegmentMjs.x)(this.x) && (0, _helpersSegmentMjs.x)(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) return this;
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}
Element.defaults = {};
Element.defaultRoutes = undefined;
const formatters = {
    values (value) {
        return (0, _helpersSegmentMjs.b)(value) ? value : "" + value;
    },
    numeric (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) notation = "scientific";
            delta = calculateDelta(tickValue, ticks);
        }
        const logDelta = (0, _helpersSegmentMjs.z)(Math.abs(delta));
        const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return (0, _helpersSegmentMjs.o)(tickValue, locale, options);
    },
    logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const remain = tickValue / Math.pow(10, Math.floor((0, _helpersSegmentMjs.z)(tickValue)));
        if (remain === 1 || remain === 2 || remain === 5) return formatters.numeric.call(this, tickValue, index, ticks);
        return "";
    }
};
function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
    return delta;
}
var Ticks = {
    formatters
};
(0, _helpersSegmentMjs.d).set("scale", {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: "ticks",
    grace: 0,
    grid: {
        display: true,
        lineWidth: 1,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 8,
        tickWidth: (_ctx, options)=>options.lineWidth,
        tickColor: (_ctx, options)=>options.color,
        offset: false,
        borderDash: [],
        borderDashOffset: 0.0,
        borderWidth: 1
    },
    title: {
        display: false,
        text: "",
        padding: {
            top: 4,
            bottom: 4
        }
    },
    ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: false,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: true,
        autoSkip: true,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Ticks.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: false,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
    }
});
(0, _helpersSegmentMjs.d).route("scale.ticks", "color", "", "color");
(0, _helpersSegmentMjs.d).route("scale.grid", "color", "", "borderColor");
(0, _helpersSegmentMjs.d).route("scale.grid", "borderColor", "", "borderColor");
(0, _helpersSegmentMjs.d).route("scale.title", "color", "", "color");
(0, _helpersSegmentMjs.d).describe("scale", {
    _fallback: false,
    _scriptable: (name)=>!name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
    _indexable: (name)=>name !== "borderDash" && name !== "tickBorderDash"
});
(0, _helpersSegmentMjs.d).describe("scales", {
    _fallback: "scale"
});
(0, _helpersSegmentMjs.d).describe("scale.ticks", {
    _scriptable: (name)=>name !== "backdropPadding" && name !== "callback",
    _indexable: (name)=>name !== "backdropPadding"
});
function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const ticksLimit = tickOpts.maxTicksLimit || determineMaxTicks(scale);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        skip(ticks, newTicks, spacing, (0, _helpersSegmentMjs.k)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++)skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        skip(ticks, newTicks, spacing, last, (0, _helpersSegmentMjs.k)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
}
function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) return Math.max(spacing, 1);
    const factors = (0, _helpersSegmentMjs.A)(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) return factor;
    }
    return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++)if (ticks[i].major) result.push(i);
    return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
    }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = (0, _helpersSegmentMjs.v)(majorStart, 0);
    const end = Math.min((0, _helpersSegmentMjs.v)(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
    }
}
function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) return false;
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return diff;
}
const reverseAlign = (align)=>align === "left" ? "right" : align === "right" ? "left" : align;
const offsetFromEdge = (scale, edge, offset)=>edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment)result.push(arr[Math.floor(i)]);
    return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
        else if (index === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
        else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) return;
    }
    return lineValue;
}
function garbageCollect(caches, length) {
    (0, _helpersSegmentMjs.Q)(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i)delete cache.data[gc[i]];
            gc.splice(0, gcLen);
        }
    });
}
function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
    if (!options.display) return 0;
    const font = (0, _helpersSegmentMjs.O)(options.font, fallback);
    const padding = (0, _helpersSegmentMjs.K)(options.padding);
    const lines = (0, _helpersSegmentMjs.b)(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
    return (0, _helpersSegmentMjs.h)(parent, {
        scale,
        type: "scale"
    });
}
function createTickContext(parent, index, tick) {
    return (0, _helpersSegmentMjs.h)(parent, {
        tick,
        index,
        type: "tick"
    });
}
function titleAlign(align, position, reverse) {
    let ret = (0, _helpersSegmentMjs.R)(align);
    if (reverse && position !== "right" || !reverse && position === "right") ret = reverseAlign(ret);
    return ret;
}
function titleArgs(scale, offset, position, align) {
    const { top , left , bottom , right , chart  } = scale;
    const { chartArea , scales  } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = (0, _helpersSegmentMjs.S)(align, left, right);
        if ((0, _helpersSegmentMjs.i)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === "center") titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        else titleY = offsetFromEdge(scale, position, offset);
        maxWidth = right - left;
    } else {
        if ((0, _helpersSegmentMjs.i)(position)) {
            const positionAxisID1 = Object.keys(position)[0];
            const value1 = position[positionAxisID1];
            titleX = scales[positionAxisID1].getPixelForValue(value1) - width + offset;
        } else if (position === "center") titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        else titleX = offsetFromEdge(scale, position, offset);
        titleY = (0, _helpersSegmentMjs.S)(align, bottom, top);
        rotation = position === "left" ? -(0, _helpersSegmentMjs.H) : (0, _helpersSegmentMjs.H);
    }
    return {
        titleX,
        titleY,
        maxWidth,
        rotation
    };
}
class Scale extends Element {
    constructor(cfg){
        super();
        this.id = cfg.id;
        this.type = cfg.type;
        this.options = undefined;
        this.ctx = cfg.ctx;
        this.chart = cfg.chart;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.maxWidth = undefined;
        this.maxHeight = undefined;
        this.paddingTop = undefined;
        this.paddingBottom = undefined;
        this.paddingLeft = undefined;
        this.paddingRight = undefined;
        this.axis = undefined;
        this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
        this.ticks = [];
        this._gridLineItems = null;
        this._labelItems = null;
        this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
        this._startPixel = undefined;
        this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
    init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
        return raw;
    }
    getUserBounds() {
        let { _userMin , _userMax , _suggestedMin , _suggestedMax  } = this;
        _userMin = (0, _helpersSegmentMjs.B)(_userMin, Number.POSITIVE_INFINITY);
        _userMax = (0, _helpersSegmentMjs.B)(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = (0, _helpersSegmentMjs.B)(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = (0, _helpersSegmentMjs.B)(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: (0, _helpersSegmentMjs.B)(_userMin, _suggestedMin),
            max: (0, _helpersSegmentMjs.B)(_userMax, _suggestedMax),
            minDefined: (0, _helpersSegmentMjs.g)(_userMin),
            maxDefined: (0, _helpersSegmentMjs.g)(_userMax)
        };
    }
    getMinMax(canStack) {
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) return {
            min,
            max
        };
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) min = Math.min(min, range.min);
            if (!maxDefined) max = Math.max(max, range.max);
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: (0, _helpersSegmentMjs.B)(min, (0, _helpersSegmentMjs.B)(max, min)),
            max: (0, _helpersSegmentMjs.B)(max, (0, _helpersSegmentMjs.B)(min, max))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        (0, _helpersSegmentMjs.C)(this.options.beforeUpdate, [
            this
        ]);
    }
    update(maxWidth, maxHeight, margins) {
        const { beginAtZero , grace , ticks: tickOpts  } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = (0, _helpersSegmentMjs.D)(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
            this.ticks = autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) this._convertTicksToLabels(this.ticks);
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
    configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        (0, _helpersSegmentMjs.C)(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        (0, _helpersSegmentMjs.C)(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        (0, _helpersSegmentMjs.C)(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name) {
        this.chart.notifyPlugins(name, this.getContext());
        (0, _helpersSegmentMjs.C)(this.options[name], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
        (0, _helpersSegmentMjs.C)(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = (0, _helpersSegmentMjs.C)(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        (0, _helpersSegmentMjs.C)(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        (0, _helpersSegmentMjs.C)(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = this.ticks.length;
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = (0, _helpersSegmentMjs.E)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = (0, _helpersSegmentMjs.F)(Math.min(Math.asin((0, _helpersSegmentMjs.E)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0, _helpersSegmentMjs.E)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0, _helpersSegmentMjs.E)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        (0, _helpersSegmentMjs.C)(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        (0, _helpersSegmentMjs.C)(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart , options: { ticks: tickOpts , title: titleOpts , grid: gridOpts  }  } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first , last , widest , highest  } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = (0, _helpersSegmentMjs.t)(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align , padding  } , position  } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === "start") paddingRight = last.width;
            else if (align === "end") paddingLeft = first.width;
            else if (align !== "inner") {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === "start") {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === "end") {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
    _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        (0, _helpersSegmentMjs.C)(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis , position  } = this.options;
        return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++)if ((0, _helpersSegmentMjs.k)(ticks[i].label)) {
            ticks.splice(i, 1);
            ilen--;
            i--;
        }
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) ticks = sample(ticks, sampleSize);
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
        }
        return labelSizes;
    }
    _computeLabelSizes(ticks, length) {
        const { ctx , _longestTextCache: caches  } = this;
        const widths = [];
        const heights = [];
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; ++i){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!(0, _helpersSegmentMjs.k)(label) && !(0, _helpersSegmentMjs.b)(label)) {
                width = (0, _helpersSegmentMjs.G)(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if ((0, _helpersSegmentMjs.b)(label)) for(j = 0, jlen = label.length; j < jlen; ++j){
                nestedLabel = label[j];
                if (!(0, _helpersSegmentMjs.k)(nestedLabel) && !(0, _helpersSegmentMjs.b)(nestedLabel)) {
                    width = (0, _helpersSegmentMjs.G)(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths,
            heights
        };
    }
    getLabelForValue(value) {
        return value;
    }
    getPixelForValue(value, index) {
        return NaN;
    }
    getValueForPixel(pixel) {}
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getPixelForDecimal(decimal) {
        if (this._reversePixels) decimal = 1 - decimal;
        const pixel = this._startPixel + decimal * this._length;
        return (0, _helpersSegmentMjs.I)(this._alignToPixels ? (0, _helpersSegmentMjs.J)(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min , max  } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = (0, _helpersSegmentMjs.t)(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
        const display = this.options.display;
        if (display !== "auto") return !!display;
        return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid , position  } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = getTickMarkLength(grid);
        const items = [];
        const borderOpts = grid.setContext(this.getContext());
        const axisWidth = borderOpts.drawBorder ? borderOpts.borderWidth : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return (0, _helpersSegmentMjs.J)(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === "top") {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === "bottom") {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === "left") {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === "right") {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === "x") {
            if (position === "center") borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            else if ((0, _helpersSegmentMjs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === "y") {
            if (position === "center") borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            else if ((0, _helpersSegmentMjs.i)(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID1].getPixelForValue(value1));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = (0, _helpersSegmentMjs.v)(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const optsAtIndex = grid.setContext(this.getContext(i));
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndex.borderDash || [];
            const borderDashOffset = optsAtIndex.borderDashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) continue;
            alignedLineValue = (0, _helpersSegmentMjs.J)(chart, lineValue, lineWidth);
            if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
            else ty1 = ty2 = y1 = y2 = alignedLineValue;
            items.push({
                tx1,
                ty1,
                tx2,
                ty2,
                x1,
                y1,
                x2,
                y2,
                width: lineWidth,
                color: lineColor,
                borderDash,
                borderDashOffset,
                tickWidth,
                tickColor,
                tickBorderDash,
                tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
    _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position , ticks: optionTicks  } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align , crossAlign , padding , mirror  } = optionTicks;
        const tl = getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -(0, _helpersSegmentMjs.t)(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = "middle";
        if (position === "top") {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "bottom") {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "left") {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === "right") {
            const ret1 = this._getYAxisLabelAlignment(tl);
            textAlign = ret1.textAlign;
            x = ret1.x;
        } else if (axis === "x") {
            if (position === "center") y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            else if ((0, _helpersSegmentMjs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === "y") {
            if (position === "center") x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            else if ((0, _helpersSegmentMjs.i)(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                x = this.chart.scales[positionAxisID1].getPixelForValue(value1);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === "y") {
            if (align === "start") textBaseline = "top";
            else if (align === "end") textBaseline = "bottom";
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = (0, _helpersSegmentMjs.b)(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === "inner") {
                    if (i === ilen - 1) tickTextAlign = !this.options.reverse ? "right" : "left";
                    else if (i === 0) tickTextAlign = !this.options.reverse ? "left" : "right";
                    else tickTextAlign = "center";
                }
                if (position === "top") {
                    if (crossAlign === "near" || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
                    else if (crossAlign === "center") textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    else textOffset = -labelSizes.highest.height + lineHeight / 2;
                } else {
                    if (crossAlign === "near" || rotation !== 0) textOffset = lineHeight / 2;
                    else if (crossAlign === "center") textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
                if (mirror) textOffset *= -1;
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = (0, _helpersSegmentMjs.K)(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = y + textOffset - labelPadding.top;
                let left = x - labelPadding.left;
                switch(textBaseline){
                    case "middle":
                        top -= height / 2;
                        break;
                    case "bottom":
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case "center":
                        left -= width / 2;
                        break;
                    case "right":
                        left -= width;
                        break;
                }
                backdrop = {
                    left,
                    top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                rotation,
                label,
                font,
                color,
                strokeColor,
                strokeWidth,
                textOffset,
                textAlign: tickTextAlign,
                textBaseline,
                translation: [
                    x,
                    y
                ],
                backdrop
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position , ticks  } = this.options;
        const rotation = -(0, _helpersSegmentMjs.t)(this.labelRotation);
        if (rotation) return position === "top" ? "left" : "right";
        let align = "center";
        if (ticks.align === "start") align = "left";
        else if (ticks.align === "end") align = "right";
        else if (ticks.align === "inner") align = "inner";
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position , ticks: { crossAlign , mirror , padding  }  } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === "left") {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x = this.left;
                }
            }
        } else if (position === "right") {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x = this.right;
                }
            }
        } else textAlign = "right";
        return {
            textAlign,
            x
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const chart = this.chart;
        const position = this.options.position;
        if (position === "left" || position === "right") return {
            top: 0,
            left: this.left,
            bottom: chart.height,
            right: this.right
        };
        if (position === "top" || position === "bottom") return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: chart.width
        };
    }
    drawBackground() {
        const { ctx , options: { backgroundColor  } , left , top , width , height  } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) return 0;
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
    drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) return;
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            if (grid.drawOnChartArea) drawLine({
                x: item.x1,
                y: item.y1
            }, {
                x: item.x2,
                y: item.y2
            }, item);
            if (grid.drawTicks) drawLine({
                x: item.tx1,
                y: item.ty1
            }, {
                x: item.tx2,
                y: item.ty2
            }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart , ctx , options: { grid  }  } = this;
        const borderOpts = grid.setContext(this.getContext());
        const axisWidth = grid.drawBorder ? borderOpts.borderWidth : 0;
        if (!axisWidth) return;
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = (0, _helpersSegmentMjs.J)(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = (0, _helpersSegmentMjs.J)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = (0, _helpersSegmentMjs.J)(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = (0, _helpersSegmentMjs.J)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.borderWidth;
        ctx.strokeStyle = borderOpts.borderColor;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) return;
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) (0, _helpersSegmentMjs.L)(ctx, area);
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        let i, ilen;
        for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            const tickFont = item.font;
            const label = item.label;
            if (item.backdrop) {
                ctx.fillStyle = item.backdrop.color;
                ctx.fillRect(item.backdrop.left, item.backdrop.top, item.backdrop.width, item.backdrop.height);
            }
            let y = item.textOffset;
            (0, _helpersSegmentMjs.M)(ctx, label, 0, y, tickFont, item);
        }
        if (area) (0, _helpersSegmentMjs.N)(ctx);
    }
    drawTitle() {
        const { ctx , options: { position , title , reverse  }  } = this;
        if (!title.display) return;
        const font = (0, _helpersSegmentMjs.O)(title.font);
        const padding = (0, _helpersSegmentMjs.K)(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === "bottom" || position === "center" || (0, _helpersSegmentMjs.i)(position)) {
            offset += padding.bottom;
            if ((0, _helpersSegmentMjs.b)(title.text)) offset += font.lineHeight * (title.text.length - 1);
        } else offset += padding.top;
        const { titleX , titleY , maxWidth , rotation  } = titleArgs(this, offset, position, align);
        (0, _helpersSegmentMjs.M)(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth,
            rotation,
            textAlign: titleAlign(align, position, reverse),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) return;
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
    _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = (0, _helpersSegmentMjs.v)(opts.grid && opts.grid.z, -1);
        if (!this._isVisible() || this.draw !== Scale.prototype.draw) return [
            {
                z: tz,
                draw: (chartArea)=>{
                    this.draw(chartArea);
                }
            }
        ];
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: gz + 1,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
    getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + "AxisID";
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
        }
        return result;
    }
    _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return (0, _helpersSegmentMjs.O)(opts.font);
    }
    _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}
class TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if (isIChartComponent(proto)) parentScope = this.register(proto);
        const items = this.items;
        const id = item.id;
        const scope = this.scope + "." + id;
        if (!id) throw new Error("class does not have id: " + item);
        if (id in items) return scope;
        items[id] = item;
        registerDefaults(item, scope, parentScope);
        if (this.override) (0, _helpersSegmentMjs.d).override(item.id, item.overrides);
        return scope;
    }
    get(id) {
        return this.items[id];
    }
    unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) delete items[id];
        if (scope && id in (0, _helpersSegmentMjs.d)[scope]) {
            delete (0, _helpersSegmentMjs.d)[scope][id];
            if (this.override) delete (0, _helpersSegmentMjs.U)[id];
        }
    }
}
function registerDefaults(item, scope, parentScope) {
    const itemDefaults = (0, _helpersSegmentMjs.V)(Object.create(null), [
        parentScope ? (0, _helpersSegmentMjs.d).get(parentScope) : {},
        (0, _helpersSegmentMjs.d).get(scope),
        item.defaults
    ]);
    (0, _helpersSegmentMjs.d).set(scope, itemDefaults);
    if (item.defaultRoutes) routeDefaults(scope, item.defaultRoutes);
    if (item.descriptors) (0, _helpersSegmentMjs.d).describe(scope, item.descriptors);
}
function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split(".");
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join(".");
        const parts = routes[property].split(".");
        const targetName = parts.pop();
        const targetScope = parts.join(".");
        (0, _helpersSegmentMjs.d).route(sourceScope, sourceName, targetScope, targetName);
    });
}
function isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
}
class Registry {
    constructor(){
        this.controllers = new TypedRegistry(DatasetController, "datasets", true);
        this.elements = new TypedRegistry(Element, "elements");
        this.plugins = new TypedRegistry(Object, "plugins");
        this.scales = new TypedRegistry(Scale, "scales");
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...args) {
        this._each("register", args);
    }
    remove(...args) {
        this._each("unregister", args);
    }
    addControllers(...args) {
        this._each("register", args, this.controllers);
    }
    addElements(...args) {
        this._each("register", args, this.elements);
    }
    addPlugins(...args) {
        this._each("register", args, this.plugins);
    }
    addScales(...args) {
        this._each("register", args, this.scales);
    }
    getController(id) {
        return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
        return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
        return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
        return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
        this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
        this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
        this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
        this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
            else (0, _helpersSegmentMjs.Q)(arg, (item)=>{
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
            });
        });
    }
    _exec(method, registry, component) {
        const camelMethod = (0, _helpersSegmentMjs.W)(method);
        (0, _helpersSegmentMjs.C)(component["before" + camelMethod], [], component);
        registry[method](component);
        (0, _helpersSegmentMjs.C)(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) return reg;
        }
        return this.plugins;
    }
    _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) throw new Error('"' + id + '" is not a registered ' + type + ".");
        return item;
    }
}
var registry = new Registry();
class ScatterController extends DatasetController {
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = []  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start , count  } = (0, _helpersSegmentMjs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersSegmentMjs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            const { dataset: line , _dataset  } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options
            }, mode);
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine  } = this.options;
        if (!this.datasetElementType && showLine) this.datasetElementType = registry.getElement("line");
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale , vScale , _stacked , _dataset  } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps , segment  } = this.options;
        const maxGapLength = (0, _helpersSegmentMjs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, _helpersSegmentMjs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}
ScatterController.id = "scatter";
ScatterController.defaults = {
    datasetElementType: false,
    dataElementType: "point",
    showLine: false,
    fill: false
};
ScatterController.overrides = {
    interaction: {
        mode: "point"
    },
    plugins: {
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (item) {
                    return "(" + item.label + ", " + item.formattedValue + ")";
                }
            }
        }
    },
    scales: {
        x: {
            type: "linear"
        },
        y: {
            type: "linear"
        }
    }
};
var controllers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BarController: BarController,
    BubbleController: BubbleController,
    DoughnutController: DoughnutController,
    LineController: LineController,
    PolarAreaController: PolarAreaController,
    PieController: PieController,
    RadarController: RadarController,
    ScatterController: ScatterController
});
function abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class DateAdapter {
    constructor(options){
        this.options = options || {};
    }
    init(chartOptions) {}
    formats() {
        return abstract();
    }
    parse(value, format) {
        return abstract();
    }
    format(timestamp, format) {
        return abstract();
    }
    add(timestamp, amount, unit) {
        return abstract();
    }
    diff(a, b, unit) {
        return abstract();
    }
    startOf(timestamp, unit, weekday) {
        return abstract();
    }
    endOf(timestamp, unit) {
        return abstract();
    }
}
DateAdapter.override = function(members) {
    Object.assign(DateAdapter.prototype, members);
};
var adapters = {
    _date: DateAdapter
};
function binarySearch(metaset, axis, value, intersect) {
    const { controller , data , _sorted  } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? (0, _helpersSegmentMjs.Y) : (0, _helpersSegmentMjs.Z);
        if (!intersect) return lookupMethod(data, axis, value);
        else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === "function" && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index , data  } = metasets[i];
        const { lo , hi  } = binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) handler(element, index, j);
        }
    }
}
function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) return items;
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !(0, _helpersSegmentMjs.$)(element, chart.chartArea, 0)) return;
        if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
            element,
            datasetIndex,
            index
        });
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle , endAngle  } = element.getProps([
            "startAngle",
            "endAngle"
        ], useFinalPosition);
        const { angle  } = (0, _helpersSegmentMjs.a0)(element, {
            x: position.x,
            y: position.y
        });
        if ((0, _helpersSegmentMjs.p)(angle, startAngle, endAngle)) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) return;
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) return;
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element,
                    datasetIndex,
                    index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) return [];
    return axis === "r" && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) return [];
    return items;
}
var Interaction = {
    evaluateInteractionItems,
    modes: {
        index (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentMjs.X)(e, chart);
            const axis = options.axis || "x";
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) return [];
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) elements.push({
                    element,
                    datasetIndex: meta.index,
                    index
                });
            });
            return elements;
        },
        dataset (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentMjs.X)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i)items.push({
                    element: data[i],
                    datasetIndex,
                    index: i
                });
            }
            return items;
        },
        point (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentMjs.X)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
        nearest (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentMjs.X)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
        x (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentMjs.X)(e, chart);
            return getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
        },
        y (chart, e, options, useFinalPosition) {
            const position = (0, _helpersSegmentMjs.X)(e, chart);
            return getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
        }
    }
};
const STATIC_POSITIONS = [
    "left",
    "top",
    "right",
    "bottom"
];
function filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos , options: { stack , stackWeight =1  }  } = box);
        layoutBoxes.push({
            index: i,
            box,
            pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight
        });
    }
    return layoutBoxes;
}
function buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack , pos , stackWeight  } = wrap;
        if (!stack || !STATIC_POSITIONS.includes(pos)) continue;
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
function setLayoutDims(layouts, params) {
    const stacks = buildStacks(layouts);
    const { vBoxMaxWidth , hBoxMaxHeight  } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize  } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
    const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
        fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: filterByPosition(layoutBoxes, "chartArea"),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
    const { pos , box  } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!(0, _helpersSegmentMjs.i)(pos)) {
        if (layout.size) chartArea[pos] -= layout.size;
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) updateMaxPadding(maxPadding, box.getPadding());
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
}
function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        "left",
        "right"
    ]) : marginForPositions([
        "top",
        "bottom"
    ]);
}
function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
        const { same , other  } = updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) refitBoxes.push(layout);
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x , y  } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if ((0, _helpersSegmentMjs.j)(stack.start)) y = stack.start;
            if (box.fullSize) setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            else setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height1 = chartArea.h * weight;
            const width1 = stack.size || box.width;
            if ((0, _helpersSegmentMjs.j)(stack.start)) x = stack.start;
            if (box.fullSize) setBoxDims(box, x, userPadding.top, width1, params.outerHeight - userPadding.bottom - userPadding.top);
            else setBoxDims(box, x, chartArea.top + stack.placed, width1, height1);
            stack.start = x;
            stack.placed += height1;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
(0, _helpersSegmentMjs.d).set("layout", {
    autoPadding: true,
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
var layouts = {
    addBox (chart, item) {
        if (!chart.boxes) chart.boxes = [];
        item.fullSize = item.fullSize || false;
        item.position = item.position || "top";
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
    removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) chart.boxes.splice(index, 1);
    },
    configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
    update (chart, width, height, minPadding) {
        if (!chart) return;
        const padding = (0, _helpersSegmentMjs.K)(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        (0, _helpersSegmentMjs.Q)(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === "function") box.beforeLayout();
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding,
            availableWidth,
            availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        updateMaxPadding(maxPadding, (0, _helpersSegmentMjs.K)(minPadding));
        const chartArea = Object.assign({
            maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        fitBoxes(boxes.fullSize, chartArea, params, stacks);
        fitBoxes(verticalBoxes, chartArea, params, stacks);
        if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) fitBoxes(verticalBoxes, chartArea, params, stacks);
        handleMaxPadding(chartArea);
        placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        (0, _helpersSegmentMjs.Q)(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class BasePlatform {
    acquireContext(canvas, aspectRatio) {}
    releaseContext(context) {
        return false;
    }
    addEventListener(chart, type, listener) {}
    removeEventListener(chart, type, listener) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
    isAttached(canvas) {
        return true;
    }
    updateConfig(config) {}
}
class BasicPlatform extends BasePlatform {
    acquireContext(item) {
        return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}
const EXPANDO_KEY = "$chartjs";
const EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
};
const isNullOrEmpty = (value)=>value === null || value === "";
function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if (isNullOrEmpty(renderWidth)) {
        const displayWidth = (0, _helpersSegmentMjs.a3)(canvas, "width");
        if (displayWidth !== undefined) canvas.width = displayWidth;
    }
    if (isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === "") canvas.height = canvas.width / (aspectRatio || 2);
        else {
            const displayHeight = (0, _helpersSegmentMjs.a3)(canvas, "height");
            if (displayHeight !== undefined) canvas.height = displayHeight;
        }
    }
    return canvas;
}
const eventListenerOptions = (0, _helpersSegmentMjs.a5) ? {
    passive: true
} : false;
function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x , y  } = (0, _helpersSegmentMjs.X)(event, chart);
    return {
        type,
        chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) return true;
    }
}
function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) return;
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) resize();
    });
}
function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) window.addEventListener("resize", onWindowResize);
    drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) window.removeEventListener("resize", onWindowResize);
}
function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && (0, _helpersSegmentMjs.a2)(canvas);
    if (!container) return;
    const resize = (0, _helpersSegmentMjs.a4)((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) listener();
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) return;
        resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function releaseObserver(chart, type, observer) {
    if (observer) observer.disconnect();
    if (type === "resize") unlistenDevicePixelRatioChanges(chart);
}
function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = (0, _helpersSegmentMjs.a4)((event)=>{
        if (chart.ctx !== null) listener(fromNativeEvent(event, chart));
    }, chart, (args)=>{
        const event = args[0];
        return [
            event,
            event.offsetX,
            event.offsetY
        ];
    });
    addListener(canvas, type, proxy);
    return proxy;
}
class DomPlatform extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext("2d");
        if (context && context.canvas === canvas) {
            initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
    releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[EXPANDO_KEY]) return false;
        const initial = canvas[EXPANDO_KEY].initial;
        [
            "height",
            "width"
        ].forEach((prop)=>{
            const value = initial[prop];
            if ((0, _helpersSegmentMjs.k)(value)) canvas.removeAttribute(prop);
            else canvas.setAttribute(prop, value);
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[EXPANDO_KEY];
        return true;
    }
    addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: createAttachObserver,
            detach: createDetachObserver,
            resize: createResizeObserver
        };
        const handler = handlers[type] || createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) return;
        const handlers = {
            attach: releaseObserver,
            detach: releaseObserver,
            resize: releaseObserver
        };
        const handler = handlers[type] || removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
        return (0, _helpersSegmentMjs.a1)(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
        const container = (0, _helpersSegmentMjs.a2)(canvas);
        return !!(container && container.isConnected);
    }
}
function _detectPlatform(canvas) {
    if (!(0, _helpersSegmentMjs.a6)() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return BasicPlatform;
    return DomPlatform;
}
class PluginService {
    constructor(){
        this._init = [];
    }
    notify(chart, hook, args, filter) {
        if (hook === "beforeInit") {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, "install");
        }
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === "afterDestroy") {
            this._notify(descriptors, chart, "stop");
            this._notify(this._init, chart, "uninstall");
        }
        return result;
    }
    _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if ((0, _helpersSegmentMjs.C)(method, params, plugin) === false && args.cancelable) return false;
        }
        return true;
    }
    invalidate() {
        if (!(0, _helpersSegmentMjs.k)(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
    _descriptors(chart) {
        if (this._cache) return this._cache;
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = (0, _helpersSegmentMjs.v)(config.options && config.options.plugins, {});
        const plugins = allPlugins(config);
        return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
    }
    _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, "stop");
        this._notify(diff(descriptors, previousDescriptors), chart, "start");
    }
}
function allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys(registry.plugins.items);
    for(let i = 0; i < keys.length; i++)plugins.push(registry.getPlugin(keys[i]));
    const local = config.plugins || [];
    for(let i1 = 0; i1 < local.length; i1++){
        const plugin = local[i1];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins,
        localIds
    };
}
function getOpts(options, all) {
    if (!all && options === false) return null;
    if (options === true) return {};
    return options;
}
function createDescriptors(chart, { plugins , localIds  }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = getOpts(options[id], all);
        if (opts === null) continue;
        result.push({
            plugin,
            options: pluginOpts(chart.config, {
                plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function pluginOpts(config, { plugin , local  }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) scopes.push(plugin.defaults);
    return config.createResolver(scopes, context, [
        ""
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}
function getIndexAxis(type, options) {
    const datasetDefaults = (0, _helpersSegmentMjs.d).datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
}
function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") axis = indexAxis;
    else if (id === "_value_") axis = indexAxis === "x" ? "y" : "x";
    return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
}
function axisFromPosition(position) {
    if (position === "top" || position === "bottom") return "x";
    if (position === "left" || position === "right") return "y";
}
function determineAxis(id, scaleOptions) {
    if (id === "x" || id === "y") return id;
    return scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.charAt(0).toLowerCase();
}
function mergeScaleConfig(config, options) {
    const chartDefaults = (0, _helpersSegmentMjs.U)[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const firstIDs = Object.create(null);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!(0, _helpersSegmentMjs.i)(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
        if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        const axis = determineAxis(id, scaleConf);
        const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        firstIDs[axis] = firstIDs[axis] || id;
        scales[id] = (0, _helpersSegmentMjs.ac)(Object.create(null), [
            {
                axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
        const datasetDefaults = (0, _helpersSegmentMjs.U)[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + "AxisID"] || firstIDs[axis] || axis;
            scales[id] = scales[id] || Object.create(null);
            (0, _helpersSegmentMjs.ac)(scales[id], [
                {
                    axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        (0, _helpersSegmentMjs.ac)(scale, [
            (0, _helpersSegmentMjs.d).scales[scale.type],
            (0, _helpersSegmentMjs.d).scale
        ]);
    });
    return scales;
}
function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = (0, _helpersSegmentMjs.v)(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        keyCache.set(cacheKey, keys);
        keysCached.add(keys);
    }
    return keys;
}
const addIfFound = (set, obj, key)=>{
    const opts = (0, _helpersSegmentMjs.f)(obj, key);
    if (opts !== undefined) set.add(opts);
};
class Config {
    constructor(config){
        this._config = initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
        return cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
        return cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
        return cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ""
                ]
            ]);
    }
    pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
    _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
        const { options , type  } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) return cached;
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>addIfFound(scopes, options, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentMjs.U)[type] || {}, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentMjs.d), key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersSegmentMjs.a7), key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) array.push(Object.create(null));
        if (keysCached.has(keyLists)) cache.set(keyLists, array);
        return array;
    }
    chartOptionScopes() {
        const { options , type  } = this;
        return [
            options,
            (0, _helpersSegmentMjs.U)[type] || {},
            (0, _helpersSegmentMjs.d).datasets[type] || {},
            {
                type
            },
            (0, _helpersSegmentMjs.d),
            (0, _helpersSegmentMjs.a7)
        ];
    }
    resolveNamedOptions(scopes, names, context, prefixes = [
        ""
    ]) {
        const result = {
            $shared: true
        };
        const { resolver , subPrefixes  } = getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if (needContext(resolver, names)) {
            result.$shared = false;
            context = (0, _helpersSegmentMjs.a8)(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = (0, _helpersSegmentMjs.a9)(resolver, context, subResolver);
        }
        for (const prop of names)result[prop] = options[prop];
        return result;
    }
    createResolver(scopes, context, prefixes = [
        ""
    ], descriptorDefaults) {
        const { resolver  } = getResolver(this._resolverCache, scopes, prefixes);
        return (0, _helpersSegmentMjs.i)(context) ? (0, _helpersSegmentMjs.a9)(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = (0, _helpersSegmentMjs.aa)(scopes, prefixes);
        cached = {
            resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes("hover"))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const hasFunction = (value)=>(0, _helpersSegmentMjs.i)(value) && Object.getOwnPropertyNames(value).reduce((acc, key)=>acc || (0, _helpersSegmentMjs.a8)(value[key]), false);
function needContext(proxy, names) {
    const { isScriptable , isIndexable  } = (0, _helpersSegmentMjs.ab)(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && ((0, _helpersSegmentMjs.a8)(value) || hasFunction(value)) || indexable && (0, _helpersSegmentMjs.b)(value)) return true;
    }
    return false;
}
var version = "3.9.1";
const KNOWN_POSITIONS = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
];
function positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
}
function compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins("afterRender");
    (0, _helpersSegmentMjs.C)(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    (0, _helpersSegmentMjs.C)(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
function getCanvas(item) {
    if ((0, _helpersSegmentMjs.a6)() && typeof item === "string") item = document.getElementById(item);
    else if (item && item.length) item = item[0];
    if (item && item.canvas) item = item.canvas;
    return item;
}
const instances = {};
const getChart = (key)=>{
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c)=>c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) obj[intKey + move] = value;
        }
    }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === "mouseout") return null;
    if (isClick) return lastEvent;
    return e;
}
class Chart {
    constructor(item, userConfig){
        const config = this.config = new Config(userConfig);
        const initialCanvas = getCanvas(item);
        const existingChart = getChart(initialCanvas);
        if (existingChart) throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "'" + " must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || _detectPlatform(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = (0, _helpersSegmentMjs.ad)();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
        this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = (0, _helpersSegmentMjs.ae)((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        animator.listen(this, "complete", onAnimationsComplete);
        animator.listen(this, "progress", onAnimationProgress);
        this._initialize();
        if (this.attached) this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio , maintainAspectRatio  } , width , height , _aspectRatio  } = this;
        if (!(0, _helpersSegmentMjs.k)(aspectRatio)) return aspectRatio;
        if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    _initialize() {
        this.notifyPlugins("beforeInit");
        if (this.options.responsive) this.resize();
        else (0, _helpersSegmentMjs.af)(this, this.options.devicePixelRatio);
        this.bindEvents();
        this.notifyPlugins("afterInit");
        return this;
    }
    clear() {
        (0, _helpersSegmentMjs.ag)(this.canvas, this.ctx);
        return this;
    }
    stop() {
        animator.stop(this);
        return this;
    }
    resize(width, height) {
        if (!animator.running(this)) this._resize(width, height);
        else this._resizeBeforeDraw = {
            width,
            height
        };
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? "resize" : "attach";
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!(0, _helpersSegmentMjs.af)(this, newRatio, true)) return;
        this.notifyPlugins("resize", {
            size: newSize
        });
        (0, _helpersSegmentMjs.C)(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) this.render();
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        (0, _helpersSegmentMjs.Q)(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
    buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id)=>{
            const scaleOptions = scaleOpts[id];
            const axis = determineAxis(id, scaleOptions);
            const isRadial = axis === "r";
            const isHorizontal = axis === "x";
            return {
                options: scaleOptions,
                dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
                dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
            };
        }));
        (0, _helpersSegmentMjs.Q)(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = determineAxis(id, scaleOptions);
            const scaleType = (0, _helpersSegmentMjs.v)(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) scale = scales[id];
            else {
                const scaleClass = registry.getScale(scaleType);
                scale = new scaleClass({
                    id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        (0, _helpersSegmentMjs.Q)(updated, (hasUpdated, id)=>{
            if (!hasUpdated) delete scales[id];
        });
        (0, _helpersSegmentMjs.Q)(scales, (scale)=>{
            layouts.configure(this, scale, scale.options);
            layouts.addBox(this, scale);
        });
    }
    _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i)this._destroyDatasetMeta(i);
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: metasets , data: { datasets  }  } = this;
        if (metasets.length > datasets.length) delete this._stacks;
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) this._destroyDatasetMeta(index);
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = "" + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = registry.getController(type);
                const { datasetElementType , dataElementType  } = (0, _helpersSegmentMjs.d).datasets[type];
                Object.assign(ControllerClass.prototype, {
                    dataElementType: registry.getElement(dataElementType),
                    datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
    _resetElements() {
        (0, _helpersSegmentMjs.Q)(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements();
        this.notifyPlugins("reset");
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins("beforeUpdate", {
            mode,
            cancelable: true
        }) === false) return;
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller  } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) (0, _helpersSegmentMjs.Q)(newControllers, (controller)=>{
            controller.reset();
        });
        this._updateDatasets(mode);
        this.notifyPlugins("afterUpdate", {
            mode
        });
        this._layers.sort(compare2Level("z", "_idx"));
        const { _active , _lastEvent  } = this;
        if (_lastEvent) this._eventHandler(_lastEvent, true);
        else if (_active.length) this._updateHoverStyles(_active, _active, true);
        this.render();
    }
    _updateScales() {
        (0, _helpersSegmentMjs.Q)(this.scales, (scale)=>{
            layouts.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!(0, _helpersSegmentMjs.ah)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
    _updateHiddenIndices() {
        const { _hiddenIndices  } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method , start , count  } of changes){
            const move = method === "_removeElements" ? -count : count;
            moveNumericKeys(_hiddenIndices, start, move);
        }
    }
    _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) return;
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + "," + c.splice(1).join(",")));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!(0, _helpersSegmentMjs.ah)(changeSet, makeSet(i))) return;
        }
        return Array.from(changeSet).map((c)=>c.split(",")).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
    _updateLayout(minPadding) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: true
        }) === false) return;
        layouts.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        (0, _helpersSegmentMjs.Q)(this.boxes, (box)=>{
            if (noArea && box.position === "chartArea") return;
            if (box.configure) box.configure();
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode,
            cancelable: true
        }) === false) return;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this.getDatasetMeta(i).controller.configure();
        for(let i1 = 0, ilen1 = this.data.datasets.length; i1 < ilen1; ++i1)this._updateDataset(i1, (0, _helpersSegmentMjs.a8)(mode) ? mode({
            datasetIndex: i1
        }) : mode);
        this.notifyPlugins("afterDatasetsUpdate", {
            mode
        });
    }
    _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta,
            index,
            mode,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetUpdate", args) === false) return;
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
        if (this.notifyPlugins("beforeRender", {
            cancelable: true
        }) === false) return;
        if (animator.has(this)) {
            if (this.attached && !animator.running(this)) animator.start(this);
        } else {
            this.draw();
            onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width , height  } = this._resizeBeforeDraw;
            this._resize(width, height);
            this._resizeBeforeDraw = null;
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) return;
        if (this.notifyPlugins("beforeDraw", {
            cancelable: true
        }) === false) return;
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i)layers[i].draw(this.chartArea);
        this._drawDatasets();
        for(; i < layers.length; ++i)layers[i].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) result.push(meta);
        }
        return result;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: true
        }) === false) return;
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i)this._drawDataset(metasets[i]);
        this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
        const ctx = this.ctx;
        const clip = meta._clip;
        const useClip = !clip.disabled;
        const area = this.chartArea;
        const args = {
            meta,
            index: meta.index,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetDraw", args) === false) return;
        if (useClip) (0, _helpersSegmentMjs.L)(ctx, {
            left: clip.left === false ? 0 : area.left - clip.left,
            right: clip.right === false ? this.width : area.right + clip.right,
            top: clip.top === false ? 0 : area.top - clip.top,
            bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
        meta.controller.draw();
        if (useClip) (0, _helpersSegmentMjs.N)(ctx);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetDraw", args);
    }
    isPointInArea(point) {
        return (0, _helpersSegmentMjs.$)(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = Interaction.modes[mode];
        if (typeof method === "function") return method(this, e, options, useFinalPosition);
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = (0, _helpersSegmentMjs.h)(null, {
            chart: this,
            type: "chart"
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) return false;
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? "show" : "hide";
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if ((0, _helpersSegmentMjs.j)(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) meta.controller._destroy();
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        animator.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._destroyDatasetMeta(i);
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas , ctx  } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            (0, _helpersSegmentMjs.ag)(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        this.notifyPlugins("destroy");
        delete instances[this.id];
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
    bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) this.bindResponsiveEvents();
        else this.attached = true;
    }
    bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        (0, _helpersSegmentMjs.Q)(this.options.events, (type)=>_add(type, listener));
    }
    bindResponsiveEvents() {
        if (!this._responsiveListeners) this._responsiveListeners = {};
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) this.resize(width, height);
        };
        let detached;
        const attached = ()=>{
            _remove("attach", attached);
            this.attached = true;
            this.resize();
            _add("resize", listener);
            _add("detach", detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove("resize", listener);
            this._stop();
            this._resize(0, 0);
            _add("attach", attached);
        };
        if (platform.isAttached(this.canvas)) attached();
        else detached();
    }
    unbindEvents() {
        (0, _helpersSegmentMjs.Q)(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        (0, _helpersSegmentMjs.Q)(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? "set" : "remove";
        let meta, item, i, ilen;
        if (mode === "dataset") {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller["_" + prefix + "DatasetHoverStyle"]();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("No dataset found at index " + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersSegmentMjs.ai)(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
    notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
    _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
    _eventHandler(e, replay) {
        const args = {
            event: e,
            replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) return;
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins("afterEvent", args, eventFilter);
        if (changed || args.changed) this.render();
        return this;
    }
    _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [] , options  } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = (0, _helpersSegmentMjs.aj)(e);
        const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            (0, _helpersSegmentMjs.C)(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) (0, _helpersSegmentMjs.C)(options.onClick, [
                e,
                active,
                this
            ], this);
        }
        const changed = !(0, _helpersSegmentMjs.ai)(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
const invalidatePlugins = ()=>(0, _helpersSegmentMjs.Q)(Chart.instances, (chart)=>chart._plugins.invalidate());
const enumerable = true;
Object.defineProperties(Chart, {
    defaults: {
        enumerable,
        value: (0, _helpersSegmentMjs.d)
    },
    instances: {
        enumerable,
        value: instances
    },
    overrides: {
        enumerable,
        value: (0, _helpersSegmentMjs.U)
    },
    registry: {
        enumerable,
        value: registry
    },
    version: {
        enumerable,
        value: version
    },
    getChart: {
        enumerable,
        value: getChart
    },
    register: {
        enumerable,
        value: (...items)=>{
            registry.add(...items);
            invalidatePlugins();
        }
    },
    unregister: {
        enumerable,
        value: (...items)=>{
            registry.remove(...items);
            invalidatePlugins();
        }
    }
});
function clipArc(ctx, element, endAngle) {
    const { startAngle , pixelMargin , x , y , outerRadius , innerRadius  } = element;
    let angleMargin = pixelMargin / outerRadius;
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else ctx.arc(x, y, pixelMargin, endAngle + (0, _helpersSegmentMjs.H), startAngle - (0, _helpersSegmentMjs.H));
    ctx.closePath();
    ctx.clip();
}
function toRadiusCorners(value) {
    return (0, _helpersSegmentMjs.al)(value, [
        "outerStart",
        "outerEnd",
        "innerStart",
        "innerEnd"
    ]);
}
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return (0, _helpersSegmentMjs.E)(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: (0, _helpersSegmentMjs.E)(o.innerStart, 0, innerLimit),
        innerEnd: (0, _helpersSegmentMjs.E)(o.innerEnd, 0, innerLimit)
    };
}
function rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x , y , startAngle: start , pixelMargin , innerRadius: innerR  } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / (0, _helpersSegmentMjs.P)) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart , outerEnd , innerStart , innerEnd  } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerEndAdjustedAngle);
        if (outerEnd > 0) {
            const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + (0, _helpersSegmentMjs.H));
        }
        const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        if (innerEnd > 0) {
            const pCenter1 = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter1.x, pCenter1.y, innerEnd, endAngle + (0, _helpersSegmentMjs.H), innerEndAdjustedAngle + Math.PI);
        }
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, startAngle + innerStart / innerRadius, true);
        if (innerStart > 0) {
            const pCenter2 = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter2.x, pCenter2.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - (0, _helpersSegmentMjs.H));
        }
        const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        if (outerStart > 0) {
            const pCenter3 = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter3.x, pCenter3.y, outerStart, startAngle - (0, _helpersSegmentMjs.H), outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles , startAngle , circumference  } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, startAngle + (0, _helpersSegmentMjs.T), circular);
        for(let i = 0; i < fullCircles; ++i)ctx.fill();
        if (!isNaN(circumference)) {
            endAngle = startAngle + circumference % (0, _helpersSegmentMjs.T);
            if (circumference % (0, _helpersSegmentMjs.T) === 0) endAngle += (0, _helpersSegmentMjs.T);
        }
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function drawFullCircleBorders(ctx, element, inner) {
    const { x , y , startAngle , pixelMargin , fullCircles  } = element;
    const outerRadius = Math.max(element.outerRadius - pixelMargin, 0);
    const innerRadius = element.innerRadius + pixelMargin;
    let i;
    if (inner) clipArc(ctx, element, startAngle + (0, _helpersSegmentMjs.T));
    ctx.beginPath();
    ctx.arc(x, y, innerRadius, startAngle + (0, _helpersSegmentMjs.T), startAngle, true);
    for(i = 0; i < fullCircles; ++i)ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle, startAngle + (0, _helpersSegmentMjs.T));
    for(i = 0; i < fullCircles; ++i)ctx.stroke();
}
function drawBorder(ctx, element, offset, spacing, endAngle, circular) {
    const { options  } = element;
    const { borderWidth , borderJoinStyle  } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) return;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || "round";
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || "bevel";
    }
    if (element.fullCircles) drawFullCircleBorders(ctx, element, inner);
    if (inner) clipArc(ctx, element, endAngle);
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.stroke();
}
class ArcElement extends Element {
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        const { angle , distance  } = (0, _helpersSegmentMjs.a0)(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle , endAngle , innerRadius , outerRadius , circumference  } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], useFinalPosition);
        const rAdjust = this.options.spacing / 2;
        const _circumference = (0, _helpersSegmentMjs.v)(circumference, endAngle - startAngle);
        const betweenAngles = _circumference >= (0, _helpersSegmentMjs.T) || (0, _helpersSegmentMjs.p)(angle, startAngle, endAngle);
        const withinRadius = (0, _helpersSegmentMjs.ak)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , startAngle , endAngle , innerRadius , outerRadius  } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], useFinalPosition);
        const { offset , spacing  } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options , circumference  } = this;
        const offset = (options.offset || 0) / 2;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
        this.fullCircles = circumference > (0, _helpersSegmentMjs.T) ? Math.floor(circumference / (0, _helpersSegmentMjs.T)) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        ctx.save();
        let radiusOffset = 0;
        if (offset) {
            radiusOffset = offset / 2;
            const halfAngle = (this.startAngle + this.endAngle) / 2;
            ctx.translate(Math.cos(halfAngle) * radiusOffset, Math.sin(halfAngle) * radiusOffset);
            if (this.circumference >= (0, _helpersSegmentMjs.P)) radiusOffset = offset;
        }
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        const endAngle = drawArc(ctx, this, radiusOffset, spacing, circular);
        drawBorder(ctx, this, radiusOffset, spacing, endAngle, circular);
        ctx.restore();
    }
}
ArcElement.id = "arc";
ArcElement.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: undefined,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: undefined,
    circular: true
};
ArcElement.defaultRoutes = {
    backgroundColor: "backgroundColor"
};
function setStyle(ctx, options, style = options) {
    ctx.lineCap = (0, _helpersSegmentMjs.v)(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash((0, _helpersSegmentMjs.v)(style.borderDash, options.borderDash));
    ctx.lineDashOffset = (0, _helpersSegmentMjs.v)(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = (0, _helpersSegmentMjs.v)(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = (0, _helpersSegmentMjs.v)(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = (0, _helpersSegmentMjs.v)(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
    if (options.stepped) return 0, _helpersSegmentMjs.as;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, _helpersSegmentMjs.at;
    return lineTo;
}
function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0 , end: paramsEnd = count - 1  } = params;
    const { start: segmentStart , end: segmentEnd  } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count,
        start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
function pathSegment(ctx, line, segment, params) {
    const { points , options  } = line;
    const { count , start , loop , ilen  } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move =true , reverse  } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) continue;
        else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else lineMethod(ctx, prev, point, reverse, options.stepped);
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count , start , ilen  } = pathVars(points, segment, params);
    const { move =true , reverse  } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) continue;
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) minY = y;
            else if (y > maxY) maxY = y;
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
    if (options.stepped) return 0, _helpersSegmentMjs.ap;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, _helpersSegmentMjs.aq;
    return 0, _helpersSegmentMjs.ar;
}
function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) path.closePath();
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
    const { segments , options  } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments){
        setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start,
            end: start + count - 1
        })) ctx.closePath();
        ctx.stroke();
    }
}
const usePath2D = typeof Path2D === "function";
function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) strokePathWithCache(ctx, line, start, count);
    else strokePathDirect(ctx, line, start, count);
}
class LineElement extends Element {
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            (0, _helpersSegmentMjs.am)(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = (0, _helpersSegmentMjs.an)(this, this.options.segment));
    }
    first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
    last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = (0, _helpersSegmentMjs.ao)(this, {
            property,
            start: value,
            end: value
        });
        if (!segments.length) return;
        const result = [];
        const _interpolate = _getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start , end  } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
        const segmentMethod = _getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = _getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments)loop &= segmentMethod(ctx, this, segment, {
            start,
            end: start + count - 1
        });
        return !!loop;
    }
    draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}
LineElement.id = "line";
LineElement.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: true,
    cubicInterpolationMode: "default",
    fill: false,
    spanGaps: false,
    stepped: false,
    tension: 0
};
LineElement.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
LineElement.descriptors = {
    _scriptable: true,
    _indexable: (name)=>name !== "borderDash" && name !== "fill"
};
function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value  } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class PointElement extends Element {
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x , y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !(0, _helpersSegmentMjs.$)(this, area, this.size(options) / 2)) return;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        (0, _helpersSegmentMjs.au)(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        return options.radius + options.hitRadius;
    }
}
PointElement.id = "point";
PointElement.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
};
PointElement.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
function getBarBounds(bar, useFinalPosition) {
    const { x , y , base , width , height  } = bar.getProps([
        "x",
        "y",
        "base",
        "width",
        "height"
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left,
        top,
        right,
        bottom
    };
}
function skipOrLimit(skip, value, min, max) {
    return skip ? 0 : (0, _helpersSegmentMjs.E)(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = (0, _helpersSegmentMjs.aw)(value);
    return {
        t: skipOrLimit(skip.top, o.top, 0, maxH),
        r: skipOrLimit(skip.right, o.right, 0, maxW),
        b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius  } = bar.getProps([
        "enableBorderRadius"
    ]);
    const value = bar.options.borderRadius;
    const o = (0, _helpersSegmentMjs.ax)(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || (0, _helpersSegmentMjs.i)(value);
    return {
        topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || (0, _helpersSegmentMjs.ak)(x, bounds.left, bounds.right)) && (skipY || (0, _helpersSegmentMjs.ak)(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class BarElement extends Element {
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    draw(ctx) {
        const { inflateAmount , options: { borderColor , backgroundColor  }  } = this;
        const { inner , outer  } = boundingRects(this);
        const addRectPath = hasRadius(outer.radius) ? (0, _helpersSegmentMjs.av) : addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill("evenodd");
        }
        ctx.beginPath();
        addRectPath(ctx, inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x , y , base , horizontal  } = this.getProps([
            "x",
            "y",
            "base",
            "horizontal"
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === "x" ? this.width / 2 : this.height / 2;
    }
}
BarElement.id = "bar";
BarElement.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: undefined
};
BarElement.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
var elements = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ArcElement: ArcElement,
    LineElement: LineElement,
    PointElement: PointElement,
    BarElement: BarElement
});
function lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) return data.slice(start, start + count);
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx , y: pointAy  } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!(0, _helpersSegmentMjs.k)(minIndex) && !(0, _helpersSegmentMjs.k)(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) decimated.push({
                    ...data[intermediateIndex1],
                    x: avgX
                });
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) decimated.push({
                    ...data[intermediateIndex2],
                    x: avgX
                });
            }
            if (i > 0 && lastIndex !== startIndex) decimated.push(data[lastIndex]);
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, "data", {
            value: data
        });
    }
}
function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        cleanDecimatedDataset(dataset);
    });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale  } = meta;
    const { min , max , minDefined , maxDefined  } = iScale.getUserBounds();
    if (minDefined) start = (0, _helpersSegmentMjs.E)((0, _helpersSegmentMjs.Z)(points, iScale.axis, min).lo, 0, pointCount - 1);
    if (maxDefined) count = (0, _helpersSegmentMjs.E)((0, _helpersSegmentMjs.Z)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    else count = pointCount - start;
    return {
        start,
        count
    };
}
var plugin_decimation = {
    id: "decimation",
    defaults: {
        algorithm: "min-max",
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data , indexAxis  } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if ((0, _helpersSegmentMjs.a)([
                indexAxis,
                chart.options.indexAxis
            ]) === "y") return;
            if (!meta.controller.supportsDecimation) return;
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== "linear" && xAxis.type !== "time") return;
            if (chart.options.parsing) return;
            let { start , count  } = getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                cleanDecimatedDataset(dataset);
                return;
            }
            if ((0, _helpersSegmentMjs.k)(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, "data", {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case "lttb":
                    decimated = lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case "min-max":
                    decimated = minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        cleanDecimatedData(chart);
    }
};
function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start , end  } = segment;
        end = _findSegmentEnd(start, end, points);
        const bounds = _getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = (0, _helpersSegmentMjs.ao)(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = (0, _helpersSegmentMjs.ay)(segment, points, subBounds);
            for (const fillSource of fillSources)parts.push({
                source: fillSource,
                target: tgt,
                start: {
                    [property]: _getEdge(bounds, subBounds, "start", Math.max)
                },
                end: {
                    [property]: _getEdge(bounds, subBounds, "end", Math.min)
                }
            });
        }
    }
    return parts;
}
function _getBounds(property, first, last, loop) {
    if (loop) return;
    let start = first[property];
    let end = last[property];
    if (property === "angle") {
        start = (0, _helpersSegmentMjs.az)(start);
        end = (0, _helpersSegmentMjs.az)(end);
    }
    return {
        property,
        start,
        end
    };
}
function _pointsFromSegments(boundary, line) {
    const { x =null , y =null  } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start , end  })=>{
        end = _findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y
            });
            points.push({
                x: last.x,
                y
            });
        } else if (x !== null) {
            points.push({
                x,
                y: first.y
            });
            points.push({
                x,
                y: last.y
            });
        }
    });
    return points;
}
function _findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) break;
    }
    return end;
}
function _getEdge(a, b, prop, fn) {
    if (a && b) return fn(a[prop], b[prop]);
    return a ? a[prop] : b ? b[prop] : 0;
}
function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if ((0, _helpersSegmentMjs.b)(boundary)) {
        _loop = true;
        points = boundary;
    } else points = _pointsFromSegments(boundary, line);
    return points.length ? new LineElement({
        points,
        options: {
            tension: 0
        },
        _loop,
        _fullLoop: _loop
    }) : null;
}
function _shouldApplyFill(source) {
    return source && source.fill !== false;
}
function _resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) return fill;
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!(0, _helpersSegmentMjs.g)(fill)) return fill;
        target = sources[fill];
        if (!target) return false;
        if (target.visible) return fill;
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
function _decodeFill(line, index, count) {
    const fill = parseFillOption(line);
    if ((0, _helpersSegmentMjs.i)(fill)) return isNaN(fill.value) ? false : fill;
    let target = parseFloat(fill);
    if ((0, _helpersSegmentMjs.g)(target) && Math.floor(target) === target) return decodeTargetIndex(fill[0], index, target, count);
    return [
        "origin",
        "start",
        "end",
        "stack",
        "shape"
    ].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === "-" || firstCh === "+") target = index + target;
    if (target === index || target < 0 || target >= count) return false;
    return target;
}
function _getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === "start") pixel = scale.bottom;
    else if (fill === "end") pixel = scale.top;
    else if ((0, _helpersSegmentMjs.i)(fill)) pixel = scale.getPixelForValue(fill.value);
    else if (scale.getBasePixel) pixel = scale.getBasePixel();
    return pixel;
}
function _getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === "start") value = startValue;
    else if (fill === "end") value = scale.options.reverse ? scale.min : scale.max;
    else if ((0, _helpersSegmentMjs.i)(fill)) value = fill.value;
    else value = scale.getBaseValue();
    return value;
}
function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = (0, _helpersSegmentMjs.v)(fillOption && fillOption.target, fillOption);
    if (fill === undefined) fill = !!options.backgroundColor;
    if (fill === false || fill === null) return false;
    if (fill === true) return "origin";
    return fill;
}
function _buildStackLine(source) {
    const { scale , index , line  } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index);
    linesBelow.push(_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++)addPointsBelow(points, sourcePoints[j], linesBelow);
    }
    return new LineElement({
        points,
        options: {}
    });
}
function getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) break;
        if (!meta.hidden) below.unshift(meta.dataset);
    }
    return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first , last , point  } = findPoint(line, sourcePoint, "x");
        if (!point || first && last) continue;
        if (first) postponed.unshift(point);
        else {
            points.push(point);
            if (!last) break;
        }
    }
    points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) return {};
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if ((0, _helpersSegmentMjs.ak)(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first,
        last,
        point
    };
}
class simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x , y , radius  } = this;
        bounds = bounds || {
            start: 0,
            end: (0, _helpersSegmentMjs.T)
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x , y , radius  } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle
        };
    }
}
function _getTarget(source) {
    const { chart , fill , line  } = source;
    if ((0, _helpersSegmentMjs.g)(fill)) return getLineByIndex(chart, fill);
    if (fill === "stack") return _buildStackLine(source);
    if (fill === "shape") return true;
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) return boundary;
    return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) return computeCircularBoundary(source);
    return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
    const { scale ={} , fill  } = source;
    const pixel = _getTargetPixel(fill, scale);
    if ((0, _helpersSegmentMjs.g)(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function computeCircularBoundary(source) {
    const { scale , fill  } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i)target.push(scale.getPointPositionForValue(i, value));
    return target;
}
function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { line , scale , axis  } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above =color , below =color  } = fillOption || {};
    if (target && line.points.length) {
        (0, _helpersSegmentMjs.L)(ctx, area);
        doFill(ctx, {
            line,
            target,
            above,
            below,
            area,
            scale,
            axis
        });
        (0, _helpersSegmentMjs.N)(ctx);
    }
}
function doFill(ctx, cfg) {
    const { line , target , above , below , area , scale  } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    if (property === "x" && below !== above) {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
            line,
            target,
            color: above,
            scale,
            property
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
    }
    fill(ctx, {
        line,
        target,
        color: below,
        scale,
        property
    });
    ctx.restore();
}
function clipVertical(ctx, target, clipY) {
    const { segments , points  } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start , end  } = segment;
        const firstPoint = points[start];
        const lastPoint = points[_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(lastPoint.x, clipY);
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function fill(ctx, cfg) {
    const { line , target , property , color , scale  } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src , target: tgt , start , end  } of segments){
        const { style: { backgroundColor =color  } = {}  } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) ctx.closePath();
            else interpolatedLineTo(ctx, target, end, property);
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) interpolatedLineTo(ctx, target, start, property);
        }
        ctx.closePath();
        ctx.fill(loop ? "evenodd" : "nonzero");
        ctx.restore();
    }
}
function clipBounds(ctx, scale, bounds) {
    const { top , bottom  } = scale.chart.chartArea;
    const { property , start , end  } = bounds || {};
    if (property === "x") {
        ctx.beginPath();
        ctx.rect(start, top, end - start, bottom - top);
        ctx.clip();
    }
}
function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
}
var index = {
    id: "filler",
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof LineElement) source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: _decodeFill(line, i, count),
                chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line
            };
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) continue;
            source.fill = _resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === "beforeDraw";
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) continue;
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) _drawfill(chart.ctx, source, area);
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== "beforeDatasetsDraw") return;
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (_shouldApplyFill(source)) _drawfill(chart.ctx, source, chart.chartArea);
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!_shouldApplyFill(source) || options.drawTime !== "beforeDatasetDraw") return;
        _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: "beforeDatasetDraw"
    }
};
const getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight =fontSize , boxWidth =fontSize  } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth,
        boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
    constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
        this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = (0, _helpersSegmentMjs.C)(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        if (labelOpts.sort) legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        if (this.options.reverse) legendItems.reverse();
        this.legendItems = legendItems;
    }
    fit() {
        const { options , ctx  } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = (0, _helpersSegmentMjs.O)(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth , itemHeight  } = getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx , maxWidth , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top,
                row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx , maxHeight , options: { labels: { padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left,
                top: currentColHeight,
                col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes , options: { align , labels: { padding  } , rtl  }  } = this;
        const rtlHelper = (0, _helpersSegmentMjs.aA)(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = (0, _helpersSegmentMjs.S)(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = (0, _helpersSegmentMjs.S)(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = (0, _helpersSegmentMjs.S)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox1 of hitboxes){
                if (hitbox1.col !== col) {
                    col = hitbox1.col;
                    top = (0, _helpersSegmentMjs.S)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox1.top = top;
                hitbox1.left += this.left + padding;
                hitbox1.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox1.left), hitbox1.width);
                top += hitbox1.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            (0, _helpersSegmentMjs.L)(ctx, this);
            this._draw();
            (0, _helpersSegmentMjs.N)(ctx);
        }
    }
    _draw() {
        const { options: opts , columnSizes , lineWidths , ctx  } = this;
        const { align , labels: labelOpts  } = opts;
        const defaultColor = (0, _helpersSegmentMjs.d).color;
        const rtlHelper = (0, _helpersSegmentMjs.aA)(opts.rtl, this.left, this.width);
        const labelFont = (0, _helpersSegmentMjs.O)(labelOpts.font);
        const { color: fontColor , padding  } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign("left");
        ctx.textBaseline = "middle";
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth , boxHeight , itemHeight  } = getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
            ctx.save();
            const lineWidth = (0, _helpersSegmentMjs.v)(legendItem.lineWidth, 1);
            ctx.fillStyle = (0, _helpersSegmentMjs.v)(legendItem.fillStyle, defaultColor);
            ctx.lineCap = (0, _helpersSegmentMjs.v)(legendItem.lineCap, "butt");
            ctx.lineDashOffset = (0, _helpersSegmentMjs.v)(legendItem.lineDashOffset, 0);
            ctx.lineJoin = (0, _helpersSegmentMjs.v)(legendItem.lineJoin, "miter");
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = (0, _helpersSegmentMjs.v)(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash((0, _helpersSegmentMjs.v)(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                (0, _helpersSegmentMjs.aE)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = (0, _helpersSegmentMjs.ax)(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) (0, _helpersSegmentMjs.av)(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                ctx.fill();
                if (lineWidth !== 0) ctx.stroke();
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            (0, _helpersSegmentMjs.M)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) cursor = {
            x: (0, _helpersSegmentMjs.S)(align, this.left + padding, this.right - lineWidths[0]),
            y: this.top + padding + titleHeight,
            line: 0
        };
        else cursor = {
            x: this.left + padding,
            y: (0, _helpersSegmentMjs.S)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
            line: 0
        };
        (0, _helpersSegmentMjs.aB)(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor || fontColor;
            ctx.fillStyle = legendItem.fontColor || fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = (0, _helpersSegmentMjs.S)(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = (0, _helpersSegmentMjs.S)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = (0, _helpersSegmentMjs.aC)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) cursor.x += width + padding;
            else cursor.y += lineHeight;
        });
        (0, _helpersSegmentMjs.aD)(this.ctx, opts.textDirection);
    }
    drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = (0, _helpersSegmentMjs.O)(titleOpts.font);
        const titlePadding = (0, _helpersSegmentMjs.K)(titleOpts.padding);
        if (!titleOpts.display) return;
        const rtlHelper = (0, _helpersSegmentMjs.aA)(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = (0, _helpersSegmentMjs.S)(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + (0, _helpersSegmentMjs.S)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = (0, _helpersSegmentMjs.S)(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign((0, _helpersSegmentMjs.R)(position));
        ctx.textBaseline = "middle";
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        (0, _helpersSegmentMjs.M)(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = (0, _helpersSegmentMjs.O)(titleOpts.font);
        const titlePadding = (0, _helpersSegmentMjs.K)(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if ((0, _helpersSegmentMjs.ak)(x, this.left, this.right) && (0, _helpersSegmentMjs.ak)(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if ((0, _helpersSegmentMjs.ak)(x, hitBox.left, hitBox.left + hitBox.width) && (0, _helpersSegmentMjs.ak)(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
            }
        }
        return null;
    }
    handleEvent(e) {
        const opts = this.options;
        if (!isListened(e.type, opts)) return;
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === "mousemove" || e.type === "mouseout") {
            const previous = this._hoveredItem;
            const sameItem = itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) (0, _helpersSegmentMjs.C)(opts.onLeave, [
                e,
                previous,
                this
            ], this);
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) (0, _helpersSegmentMjs.C)(opts.onHover, [
                e,
                hoveredItem,
                this
            ], this);
        } else if (hoveredItem) (0, _helpersSegmentMjs.C)(opts.onClick, [
            e,
            hoveredItem,
            this
        ], this);
    }
}
function isListened(type, opts) {
    if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) return true;
    if (opts.onClick && (type === "click" || type === "mouseup")) return true;
    return false;
}
var plugin_legend = {
    id: "legend",
    _element: Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new Legend({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, legend, options);
        layouts.addBox(chart, legend);
    },
    stop (chart) {
        layouts.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        layouts.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) chart.legend.handleEvent(args.event);
    },
    defaults: {
        display: true,
        position: "top",
        align: "center",
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle , pointStyle , textAlign , color  }  } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = (0, _helpersSegmentMjs.K)(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: 0,
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: (name)=>!name.startsWith("on"),
        labels: {
            _scriptable: (name)=>![
                    "generateLabels",
                    "filter",
                    "sort"
                ].includes(name)
        }
    }
};
class Title extends Element {
    constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = (0, _helpersSegmentMjs.b)(opts.text) ? opts.text.length : 1;
        this._padding = (0, _helpersSegmentMjs.K)(opts.padding);
        const textSize = lineCount * (0, _helpersSegmentMjs.O)(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) this.height = textSize;
        else this.width = textSize;
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
        const { top , left , bottom , right , options  } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = (0, _helpersSegmentMjs.S)(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === "left") {
                titleX = left + offset;
                titleY = (0, _helpersSegmentMjs.S)(align, bottom, top);
                rotation = (0, _helpersSegmentMjs.P) * -0.5;
            } else {
                titleX = right - offset;
                titleY = (0, _helpersSegmentMjs.S)(align, top, bottom);
                rotation = (0, _helpersSegmentMjs.P) * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX,
            titleY,
            maxWidth,
            rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) return;
        const fontOpts = (0, _helpersSegmentMjs.O)(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX , titleY , maxWidth , rotation  } = this._drawArgs(offset);
        (0, _helpersSegmentMjs.M)(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth,
            rotation,
            textAlign: (0, _helpersSegmentMjs.R)(opts.align),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function createTitle(chart, titleOpts) {
    const title = new Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
}
var plugin_title = {
    id: "title",
    _element: Title,
    start (chart, _args, options) {
        createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "bold"
        },
        fullSize: true,
        padding: 10,
        position: "top",
        text: "",
        weight: 2000
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const map = new WeakMap();
var plugin_subtitle = {
    id: "subtitle",
    start (chart, _args, options) {
        const title = new Title({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, title, options);
        layouts.addBox(chart, title);
        map.set(chart, title);
    },
    stop (chart) {
        layouts.removeBox(chart, map.get(chart));
        map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = map.get(chart);
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "normal"
        },
        fullSize: true,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const positioners = {
    average (items) {
        if (!items.length) return false;
        let i, len;
        let x = 0;
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                x += pos.x;
                y += pos.y;
                ++count;
            }
        }
        return {
            x: x / count,
            y: y / count
        };
    },
    nearest (items, eventPosition) {
        if (!items.length) return false;
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = (0, _helpersSegmentMjs.aG)(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x,
            y
        };
    }
};
function pushOrConcat(base, toPush) {
    if (toPush) {
        if ((0, _helpersSegmentMjs.b)(toPush)) Array.prototype.push.apply(base, toPush);
        else base.push(toPush);
    }
    return base;
}
function splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) return str.split("\n");
    return str;
}
function createTooltipItem(chart, item) {
    const { element , datasetIndex , index  } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label , value  } = controller.getLabelAndValue(index);
    return {
        chart,
        label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex,
        element
    };
}
function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body , footer , title  } = tooltip;
    const { boxWidth , boxHeight  } = options;
    const bodyFont = (0, _helpersSegmentMjs.O)(options.bodyFont);
    const titleFont = (0, _helpersSegmentMjs.O)(options.titleFont);
    const footerFont = (0, _helpersSegmentMjs.O)(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = (0, _helpersSegmentMjs.K)(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    (0, _helpersSegmentMjs.Q)(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    (0, _helpersSegmentMjs.Q)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    (0, _helpersSegmentMjs.Q)(body, (bodyItem)=>{
        (0, _helpersSegmentMjs.Q)(bodyItem.before, maxLineWidth);
        (0, _helpersSegmentMjs.Q)(bodyItem.lines, maxLineWidth);
        (0, _helpersSegmentMjs.Q)(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    (0, _helpersSegmentMjs.Q)(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width,
        height
    };
}
function determineYAlign(chart, size) {
    const { y , height  } = size;
    if (y < height / 2) return "top";
    else if (y > chart.height - height / 2) return "bottom";
    return "center";
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x , width  } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x + width + caret > chart.width) return true;
    if (xAlign === "right" && x - width - caret < 0) return true;
}
function determineXAlign(chart, options, size, yAlign) {
    const { x , width  } = size;
    const { width: chartWidth , chartArea: { left , right  }  } = chart;
    let xAlign = "center";
    if (yAlign === "center") xAlign = x <= (left + right) / 2 ? "left" : "right";
    else if (x <= width / 2) xAlign = "left";
    else if (x >= chartWidth - width / 2) xAlign = "right";
    if (doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = "center";
    return xAlign;
}
function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
        yAlign
    };
}
function alignX(size, xAlign) {
    let { x , width  } = size;
    if (xAlign === "right") x -= width;
    else if (xAlign === "center") x -= width / 2;
    return x;
}
function alignY(size, yAlign, paddingAndSize) {
    let { y , height  } = size;
    if (yAlign === "top") y += paddingAndSize;
    else if (yAlign === "bottom") y -= height + paddingAndSize;
    else y -= height / 2;
    return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize , caretPadding , cornerRadius  } = options;
    const { xAlign , yAlign  } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft , topRight , bottomLeft , bottomRight  } = (0, _helpersSegmentMjs.ax)(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === "center") {
        if (xAlign === "left") x += paddingAndSize;
        else if (xAlign === "right") x -= paddingAndSize;
    } else if (xAlign === "left") x -= Math.max(topLeft, bottomLeft) + caretSize;
    else if (xAlign === "right") x += Math.max(topRight, bottomRight) + caretSize;
    return {
        x: (0, _helpersSegmentMjs.E)(x, 0, chart.width - size.width),
        y: (0, _helpersSegmentMjs.E)(y, 0, chart.height - size.height)
    };
}
function getAlignedX(tooltip, align, options) {
    const padding = (0, _helpersSegmentMjs.K)(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
    return (0, _helpersSegmentMjs.h)(parent, {
        tooltip,
        tooltipItems,
        type: "tooltip"
    });
}
function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
class Tooltip extends Element {
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart || config._chart;
        this._chart = this.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
    _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) return cached;
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new Animations(this.chart, opts);
        if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
        return animations;
    }
    getContext() {
        return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks  } = options;
        const beforeTitle = callbacks.beforeTitle.apply(this, [
            context
        ]);
        const title = callbacks.title.apply(this, [
            context
        ]);
        const afterTitle = callbacks.afterTitle.apply(this, [
            context
        ]);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeTitle));
        lines = pushOrConcat(lines, splitNewlines(title));
        lines = pushOrConcat(lines, splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(options.callbacks.beforeBody.apply(this, [
            tooltipItems
        ]));
    }
    getBody(tooltipItems, options) {
        const { callbacks  } = options;
        const bodyItems = [];
        (0, _helpersSegmentMjs.Q)(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = overrideCallbacks(callbacks, context);
            pushOrConcat(bodyItem.before, splitNewlines(scoped.beforeLabel.call(this, context)));
            pushOrConcat(bodyItem.lines, scoped.label.call(this, context));
            pushOrConcat(bodyItem.after, splitNewlines(scoped.afterLabel.call(this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(options.callbacks.afterBody.apply(this, [
            tooltipItems
        ]));
    }
    getFooter(tooltipItems, options) {
        const { callbacks  } = options;
        const beforeFooter = callbacks.beforeFooter.apply(this, [
            tooltipItems
        ]);
        const footer = callbacks.footer.apply(this, [
            tooltipItems
        ]);
        const afterFooter = callbacks.afterFooter.apply(this, [
            tooltipItems
        ]);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeFooter));
        lines = pushOrConcat(lines, splitNewlines(footer));
        lines = pushOrConcat(lines, splitNewlines(afterFooter));
        return lines;
    }
    _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i)tooltipItems.push(createTooltipItem(this.chart, active[i]));
        if (options.filter) tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        if (options.itemSort) tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        (0, _helpersSegmentMjs.Q)(tooltipItems, (context)=>{
            const scoped = overrideCallbacks(options.callbacks, context);
            labelColors.push(scoped.labelColor.call(this, context));
            labelPointStyles.push(scoped.labelPointStyle.call(this, context));
            labelTextColors.push(scoped.labelTextColor.call(this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) properties = {
                opacity: 0
            };
        } else {
            const position = positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) this._resolveAnimations().update(this, properties);
        if (changed && options.external) options.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay
        });
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign , yAlign  } = this;
        const { caretSize , cornerRadius  } = options;
        const { topLeft , topRight , bottomLeft , bottomRight  } = (0, _helpersSegmentMjs.ax)(cornerRadius);
        const { x: ptX , y: ptY  } = tooltipPoint;
        const { width , height  } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === "center") {
            y2 = ptY + height / 2;
            if (xAlign === "left") {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === "left") x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            else if (xAlign === "right") x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            else x2 = this.caretX;
            if (yAlign === "top") {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1,
            x2,
            x3,
            y1,
            y2,
            y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = (0, _helpersSegmentMjs.aA)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = "middle";
            titleFont = (0, _helpersSegmentMjs.O)(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
            }
        }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColors = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight , boxWidth , boxPadding  } = options;
        const bodyFont = (0, _helpersSegmentMjs.O)(options.bodyFont);
        const colorX = getAlignedX(this, "left", options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            (0, _helpersSegmentMjs.au)(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColors.borderColor;
            ctx.fillStyle = labelColors.backgroundColor;
            (0, _helpersSegmentMjs.au)(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = (0, _helpersSegmentMjs.i)(labelColors.borderWidth) ? Math.max(...Object.values(labelColors.borderWidth)) : labelColors.borderWidth || 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.setLineDash(labelColors.borderDash || []);
            ctx.lineDashOffset = labelColors.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
            const borderRadius = (0, _helpersSegmentMjs.ax)(labelColors.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                (0, _helpersSegmentMjs.av)(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.beginPath();
                (0, _helpersSegmentMjs.av)(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body  } = this;
        const { bodySpacing , bodyAlign , displayColors , boxHeight , boxWidth , boxPadding  } = options;
        const bodyFont = (0, _helpersSegmentMjs.O)(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = (0, _helpersSegmentMjs.aA)(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = "middle";
        ctx.font = bodyFont.string;
        pt.x = getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        (0, _helpersSegmentMjs.Q)(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            (0, _helpersSegmentMjs.Q)(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            (0, _helpersSegmentMjs.Q)(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        (0, _helpersSegmentMjs.Q)(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = (0, _helpersSegmentMjs.aA)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = "middle";
            footerFont = (0, _helpersSegmentMjs.O)(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign , yAlign  } = this;
        const { x , y  } = pt;
        const { width , height  } = tooltipSize;
        const { topLeft , topRight , bottomLeft , bottomRight  } = (0, _helpersSegmentMjs.ax)(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === "top") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === "center" && xAlign === "right") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === "bottom") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === "center" && xAlign === "left") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) ctx.stroke();
    }
    _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) return;
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = determineAlignment(chart, options, positionAndSize);
            const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) return;
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = (0, _helpersSegmentMjs.K)(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            (0, _helpersSegmentMjs.aB)(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            (0, _helpersSegmentMjs.aD)(ctx, options.textDirection);
            ctx.restore();
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex , index  })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("Cannot find a dataset at index " + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersSegmentMjs.ai)(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
    handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) return false;
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !(0, _helpersSegmentMjs.ai)(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) active.reverse();
        return active;
    }
    _positionChanged(active, e) {
        const { caretX , caretY , options  } = this;
        const position = positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
Tooltip.positioners = positioners;
var plugin_tooltip = {
    id: "tooltip",
    _element: Tooltip,
    positioners,
    afterInit (chart, _args, options) {
        if (options) chart.tooltip = new Tooltip({
            chart,
            options
        });
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    reset (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip
            };
            if (chart.notifyPlugins("beforeTooltipDraw", args) === false) return;
            tooltip.draw(chart.ctx);
            chart.notifyPlugins("afterTooltipDraw", args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: true,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "width",
                    "height",
                    "caretX",
                    "caretY"
                ]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: {
            beforeTitle: (0, _helpersSegmentMjs.aF),
            title (tooltipItems) {
                if (tooltipItems.length > 0) {
                    const item = tooltipItems[0];
                    const labels = item.chart.data.labels;
                    const labelCount = labels ? labels.length : 0;
                    if (this && this.options && this.options.mode === "dataset") return item.dataset.label || "";
                    else if (item.label) return item.label;
                    else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
                }
                return "";
            },
            afterTitle: (0, _helpersSegmentMjs.aF),
            beforeBody: (0, _helpersSegmentMjs.aF),
            beforeLabel: (0, _helpersSegmentMjs.aF),
            label (tooltipItem) {
                if (this && this.options && this.options.mode === "dataset") return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
                let label = tooltipItem.dataset.label || "";
                if (label) label += ": ";
                const value = tooltipItem.formattedValue;
                if (!(0, _helpersSegmentMjs.k)(value)) label += value;
                return label;
            },
            labelColor (tooltipItem) {
                const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
                const options = meta.controller.getStyle(tooltipItem.dataIndex);
                return {
                    borderColor: options.borderColor,
                    backgroundColor: options.backgroundColor,
                    borderWidth: options.borderWidth,
                    borderDash: options.borderDash,
                    borderDashOffset: options.borderDashOffset,
                    borderRadius: 0
                };
            },
            labelTextColor () {
                return this.options.bodyColor;
            },
            labelPointStyle (tooltipItem) {
                const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
                const options = meta.controller.getStyle(tooltipItem.dataIndex);
                return {
                    pointStyle: options.pointStyle,
                    rotation: options.rotation
                };
            },
            afterLabel: (0, _helpersSegmentMjs.aF),
            afterBody: (0, _helpersSegmentMjs.aF),
            beforeFooter: (0, _helpersSegmentMjs.aF),
            footer: (0, _helpersSegmentMjs.aF),
            afterFooter: (0, _helpersSegmentMjs.aF)
        }
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: (name)=>name !== "filter" && name !== "itemSort" && name !== "external",
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: [
        "interaction"
    ]
};
var plugins = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Decimation: plugin_decimation,
    Filler: index,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
});
const addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === "string") {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index,
            label: raw
        });
    } else if (isNaN(raw)) index = null;
    return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) return addIfString(labels, raw, index, addedLabels);
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const validIndex = (index, max)=>index === null ? null : (0, _helpersSegmentMjs.E)(Math.round(index), 0, max);
class CategoryScale extends Scale {
    constructor(cfg){
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index , label  } of added)if (labels[index] === label) labels.splice(index, 1);
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if ((0, _helpersSegmentMjs.k)(raw)) return null;
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, (0, _helpersSegmentMjs.v)(index, raw), this._addedLabels);
        return validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this.getMinMax(true);
        if (this.options.bounds === "ticks") {
            if (!minDefined) min = 0;
            if (!maxDefined) max = this.getLabels().length - 1;
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++)ticks.push({
            value
        });
        return ticks;
    }
    getLabelForValue(value) {
        const labels = this.getLabels();
        if (value >= 0 && value < labels.length) return labels[value];
        return value;
    }
    configure() {
        super.configure();
        if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
    }
    getPixelForValue(value) {
        if (typeof value !== "number") value = this.parse(value);
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
CategoryScale.id = "category";
CategoryScale.defaults = {
    ticks: {
        callback: CategoryScale.prototype.getLabelForValue
    }
};
function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds , step , min , max , precision , count , maxTicks , maxDigits , includeBounds  } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin , max: rmax  } = dataRange;
    const minDefined = !(0, _helpersSegmentMjs.k)(min);
    const maxDefined = !(0, _helpersSegmentMjs.k)(max);
    const countDefined = !(0, _helpersSegmentMjs.k)(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = (0, _helpersSegmentMjs.aI)((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [
        {
            value: rmin
        },
        {
            value: rmax
        }
    ];
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) spacing = (0, _helpersSegmentMjs.aI)(numSpaces * spacing / maxSpaces / unit) * unit;
    if (!(0, _helpersSegmentMjs.k)(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && (0, _helpersSegmentMjs.aJ)((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if ((0, _helpersSegmentMjs.aK)(numSpaces, Math.round(numSpaces), spacing / 1000)) numSpaces = Math.round(numSpaces);
        else numSpaces = Math.ceil(numSpaces);
    }
    const decimalPlaces = Math.max((0, _helpersSegmentMjs.aL)(spacing), (0, _helpersSegmentMjs.aL)(niceMin));
    factor = Math.pow(10, (0, _helpersSegmentMjs.k)(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) j++;
            if ((0, _helpersSegmentMjs.aK)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) j++;
        } else if (niceMin < min) j++;
    }
    for(; j < numSpaces; ++j)ticks.push({
        value: Math.round((niceMin + j * spacing) * factor) / factor
    });
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && (0, _helpersSegmentMjs.aK)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
        else ticks.push({
            value: max
        });
    } else if (!maxDefined || niceMax === max) ticks.push({
        value: niceMax
    });
    return ticks;
}
function relativeLabelSize(value, minSpacing, { horizontal , minRotation  }) {
    const rad = (0, _helpersSegmentMjs.t)(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if ((0, _helpersSegmentMjs.k)(raw)) return null;
        if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) return null;
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero  } = this.options;
        const { minDefined , maxDefined  } = this.getUserBounds();
        let { min , max  } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = (0, _helpersSegmentMjs.s)(min);
            const maxSign = (0, _helpersSegmentMjs.s)(max);
            if (minSign < 0 && maxSign < 0) setMax(0);
            else if (minSign > 0 && maxSign > 0) setMin(0);
        }
        if (min === max) {
            let offset = 1;
            if (max >= Number.MAX_SAFE_INTEGER || min <= Number.MIN_SAFE_INTEGER) offset = Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) setMin(min - offset);
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit , stepSize  } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
        return maxTicks;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === "ticks") (0, _helpersSegmentMjs.aH)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return (0, _helpersSegmentMjs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
}
class LinearScale extends LinearScaleBase {
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = (0, _helpersSegmentMjs.g)(min) ? min : 0;
        this.max = (0, _helpersSegmentMjs.g)(max) ? max : 1;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = (0, _helpersSegmentMjs.t)(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}
LinearScale.id = "linear";
LinearScale.defaults = {
    ticks: {
        callback: Ticks.formatters.numeric
    }
};
function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, Math.floor((0, _helpersSegmentMjs.z)(tickVal)));
    return remain === 1;
}
function generateTicks(generationOptions, dataRange) {
    const endExp = Math.floor((0, _helpersSegmentMjs.z)(dataRange.max));
    const endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    const ticks = [];
    let tickVal = (0, _helpersSegmentMjs.B)(generationOptions.min, Math.pow(10, Math.floor((0, _helpersSegmentMjs.z)(dataRange.min))));
    let exp = Math.floor((0, _helpersSegmentMjs.z)(tickVal));
    let significand = Math.floor(tickVal / Math.pow(10, exp));
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    do {
        ticks.push({
            value: tickVal,
            major: isMajor(tickVal)
        });
        ++significand;
        if (significand === 10) {
            significand = 1;
            ++exp;
            precision = exp >= 0 ? 1 : precision;
        }
        tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
    }while (exp < endExp || exp === endExp && significand < endSignificand);
    const lastTick = (0, _helpersSegmentMjs.B)(generationOptions.max, tickVal);
    ticks.push({
        value: lastTick,
        major: isMajor(tickVal)
    });
    return ticks;
}
class LogarithmicScale extends Scale {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return (0, _helpersSegmentMjs.g)(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(true);
        this.min = (0, _helpersSegmentMjs.g)(min) ? Math.max(0, min) : null;
        this.max = (0, _helpersSegmentMjs.g)(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) this._zero = true;
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined , maxDefined  } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        const exp = (v, m)=>Math.pow(10, Math.floor((0, _helpersSegmentMjs.z)(v)) + m);
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin(exp(min, -1));
                setMax(exp(max, 1));
            }
        }
        if (min <= 0) setMin(exp(max, -1));
        if (max <= 0) setMax(exp(min, 1));
        if (this._zero && this.min !== this._suggestedMin && min === exp(this.min, 0)) setMin(exp(min, -1));
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = generateTicks(generationOptions, this);
        if (opts.bounds === "ticks") (0, _helpersSegmentMjs.aH)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    getLabelForValue(value) {
        return value === undefined ? "0" : (0, _helpersSegmentMjs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const start = this.min;
        super.configure();
        this._startValue = (0, _helpersSegmentMjs.z)(start);
        this._valueRange = (0, _helpersSegmentMjs.z)(this.max) - (0, _helpersSegmentMjs.z)(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) value = this.min;
        if (value === null || isNaN(value)) return NaN;
        return this.getPixelForDecimal(value === this.min ? 0 : ((0, _helpersSegmentMjs.z)(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}
LogarithmicScale.id = "logarithmic";
LogarithmicScale.defaults = {
    ticks: {
        callback: Ticks.formatters.logarithmic,
        major: {
            enabled: true
        }
    }
};
function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = (0, _helpersSegmentMjs.K)(tickOpts.backdropPadding);
        return (0, _helpersSegmentMjs.v)(tickOpts.font && tickOpts.font.size, (0, _helpersSegmentMjs.d).font.size) + padding.height;
    }
    return 0;
}
function measureLabelSize(ctx, font, label) {
    label = (0, _helpersSegmentMjs.b)(label) ? label : [
        label
    ];
    return {
        w: (0, _helpersSegmentMjs.aM)(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) return {
        start: pos - size / 2,
        end: pos + size / 2
    };
    else if (angle < min || angle > max) return {
        start: pos - size,
        end: pos
    };
    return {
        start: pos,
        end: pos + size
    };
}
function fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? (0, _helpersSegmentMjs.P) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = (0, _helpersSegmentMjs.O)(opts.font);
        const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = (0, _helpersSegmentMjs.az)(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round((0, _helpersSegmentMjs.F)(angleRadians));
        const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const extra = getTickBackdropHeight(opts) / 2;
    const outerDistance = scale.drawingArea;
    const additionalAngle = opts.pointLabels.centerPointLabels ? (0, _helpersSegmentMjs.P) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
        const angle = Math.round((0, _helpersSegmentMjs.F)((0, _helpersSegmentMjs.az)(pointLabelPosition.angle + (0, _helpersSegmentMjs.H))));
        const size = labelSizes[i];
        const y = yForAngle(pointLabelPosition.y, size.h, angle);
        const textAlign = getTextAlignForAngle(angle);
        const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
        items.push({
            x: pointLabelPosition.x,
            y,
            textAlign,
            left,
            top: y,
            right: left + size.w,
            bottom: y + size.h
        });
    }
    return items;
}
function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) return "center";
    else if (angle < 180) return "left";
    return "right";
}
function leftForTextAlign(x, w, align) {
    if (align === "right") x -= w;
    else if (align === "center") x -= w / 2;
    return x;
}
function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) y -= h / 2;
    else if (angle > 270 || angle < 90) y -= h;
    return y;
}
function drawPointLabels(scale, labelCount) {
    const { ctx , options: { pointLabels  }  } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        const plFont = (0, _helpersSegmentMjs.O)(optsAtIndex.font);
        const { x , y , textAlign , left , top , right , bottom  } = scale._pointLabelItems[i];
        const { backdropColor  } = optsAtIndex;
        if (!(0, _helpersSegmentMjs.k)(backdropColor)) {
            const borderRadius = (0, _helpersSegmentMjs.ax)(optsAtIndex.borderRadius);
            const padding = (0, _helpersSegmentMjs.K)(optsAtIndex.backdropPadding);
            ctx.fillStyle = backdropColor;
            const backdropLeft = left - padding.left;
            const backdropTop = top - padding.top;
            const backdropWidth = right - left + padding.width;
            const backdropHeight = bottom - top + padding.height;
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                (0, _helpersSegmentMjs.av)(ctx, {
                    x: backdropLeft,
                    y: backdropTop,
                    w: backdropWidth,
                    h: backdropHeight,
                    radius: borderRadius
                });
                ctx.fill();
            } else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
        }
        (0, _helpersSegmentMjs.M)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: "middle"
        });
    }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx  } = scale;
    if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, (0, _helpersSegmentMjs.T));
    else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color , lineWidth  } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(gridLineOpts.borderDash);
    ctx.lineDashOffset = gridLineOpts.borderDashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function createPointLabelContext(parent, index, label) {
    return (0, _helpersSegmentMjs.h)(parent, {
        label,
        index,
        type: "pointLabel"
    });
}
class RadialLinearScale extends LinearScaleBase {
    constructor(cfg){
        super(cfg);
        this.xCenter = undefined;
        this.yCenter = undefined;
        this.drawingArea = undefined;
        this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = (0, _helpersSegmentMjs.K)(getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min , max  } = this.getMinMax(false);
        this.min = (0, _helpersSegmentMjs.g)(min) && !isNaN(min) ? min : 0;
        this.max = (0, _helpersSegmentMjs.g)(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = (0, _helpersSegmentMjs.C)(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : "";
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) fitWithPointLabels(this);
        else this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = (0, _helpersSegmentMjs.T) / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return (0, _helpersSegmentMjs.az)(index * angleMultiplier + (0, _helpersSegmentMjs.t)(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if ((0, _helpersSegmentMjs.k)(value)) return NaN;
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) return (this.max - value) * scalingFactor;
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if ((0, _helpersSegmentMjs.k)(distance)) return NaN;
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - (0, _helpersSegmentMjs.H) + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left , top , right , bottom  } = this._pointLabelItems[index];
        return {
            left,
            top,
            right,
            bottom
        };
    }
    drawBackground() {
        const { backgroundColor , grid: { circular  }  } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
    drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines , grid  } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) drawPointLabels(this, labelCount);
        if (grid.display) this.ticks.forEach((tick, index)=>{
            if (index !== 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const optsAtIndex = grid.setContext(this.getContext(index - 1));
                drawRadiusLine(this, optsAtIndex, offset, labelCount);
            }
        });
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color , lineWidth  } = optsAtIndex;
                if (!lineWidth || !color) continue;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) return;
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && !opts.reverse) return;
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = (0, _helpersSegmentMjs.O)(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = (0, _helpersSegmentMjs.K)(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            (0, _helpersSegmentMjs.M)(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color
            });
        });
        ctx.restore();
    }
    drawTitle() {}
}
RadialLinearScale.id = "radialLinear";
RadialLinearScale.defaults = {
    display: true,
    animate: true,
    position: "chartArea",
    angleLines: {
        display: true,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0.0
    },
    grid: {
        circular: false
    },
    startAngle: 0,
    ticks: {
        showLabelBackdrop: true,
        callback: Ticks.formatters.numeric
    },
    pointLabels: {
        backdropColor: undefined,
        backdropPadding: 2,
        display: true,
        font: {
            size: 10
        },
        callback (label) {
            return label;
        },
        padding: 5,
        centerPointLabels: false
    }
};
RadialLinearScale.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
};
RadialLinearScale.descriptors = {
    angleLines: {
        _fallback: "grid"
    }
};
const INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
const UNITS = Object.keys(INTERVALS);
function sorter(a, b) {
    return a - b;
}
function parse(scale, input) {
    if ((0, _helpersSegmentMjs.k)(input)) return null;
    const adapter = scale._adapter;
    const { parser , round , isoWeekday  } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") value = parser(value);
    if (!(0, _helpersSegmentMjs.g)(value)) value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    if (value === null) return null;
    if (round) value = round === "week" && ((0, _helpersSegmentMjs.x)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round);
    return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for(let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = INTERVALS[UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return UNITS[i];
    }
    return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--){
        const unit = UNITS[i];
        if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
    for(let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i){
        if (INTERVALS[UNITS[i]].common) return UNITS[i];
    }
}
function addTick(ticks, time, timestamps) {
    if (!timestamps) ticks[time] = true;
    else if (timestamps.length) {
        const { lo , hi  } = (0, _helpersSegmentMjs.aO)(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) ticks[index].major = true;
    }
    return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
    constructor(props){
        super(props);
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
        this._unit = "day";
        this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts) {
        const time = scaleOpts.time || (scaleOpts.time = {});
        const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
        adapter.init(opts);
        (0, _helpersSegmentMjs.ac)(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
    parse(raw, index) {
        if (raw === undefined) return null;
        return parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || "day";
        let { min , max , minDefined , maxDefined  } = this.getUserBounds();
        function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
            if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== "ticks" || options.ticks.source !== "labels") _applyBounds(this.getMinMax(false));
        }
        min = (0, _helpersSegmentMjs.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = (0, _helpersSegmentMjs.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min,
            max
        };
    }
    buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === "ticks" && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = (0, _helpersSegmentMjs.aN)(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? undefined : determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) ticks.reverse();
        return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick)=>+tick.value));
    }
    initOffsets(timestamps) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) start = 1 - first;
            else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) end = last;
            else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = (0, _helpersSegmentMjs.E)(start, 0, limit);
        end = (0, _helpersSegmentMjs.E)(end, 0, limit);
        this._offsets = {
            start,
            end,
            factor: 1 / (start + 1 + end)
        };
    }
    _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = (0, _helpersSegmentMjs.v)(timeOpts.stepSize, 1);
        const weekday = minor === "week" ? timeOpts.isoWeekday : false;
        const hasWeekday = (0, _helpersSegmentMjs.x)(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) first = +adapter.startOf(first, "isoWeek", weekday);
        first = +adapter.startOf(first, hasWeekday ? "day" : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
        const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++)addTick(ticks, time, timestamps);
        if (time === max || options.bounds === "ticks" || count === 1) addTick(ticks, time, timestamps);
        return Object.keys(ticks).sort((a, b)=>a - b).map((x)=>+x);
    }
    getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        const label = this._adapter.format(time, format || (major ? majorFormat : minorFormat));
        const formatter = options.ticks.callback;
        return formatter ? (0, _helpersSegmentMjs.C)(formatter, [
            label,
            index,
            ticks
        ], this) : label;
    }
    generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
    getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = (0, _helpersSegmentMjs.t)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
    _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
        for(i = 0, ilen = metas.length; i < ilen; ++i)timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i)timestamps.push(parse(this, labels[i]));
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
        return (0, _helpersSegmentMjs._)(values.sort(sorter));
    }
}
TimeScale.id = "time";
TimeScale.defaults = {
    bounds: "data",
    adapters: {},
    time: {
        parser: false,
        unit: false,
        round: false,
        isoWeekday: false,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        major: {
            enabled: false
        }
    }
};
function interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) ({ lo , hi  } = (0, _helpersSegmentMjs.Z)(table, "pos", val));
        ({ pos: prevSource , time: prevTarget  } = table[lo]);
        ({ pos: nextSource , time: nextTarget  } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) ({ lo , hi  } = (0, _helpersSegmentMjs.Z)(table, "time", val));
        ({ time: prevSource , pos: prevTarget  } = table[lo]);
        ({ time: nextSource , pos: nextTarget  } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
    constructor(props){
        super(props);
        this._table = [];
        this._minPos = undefined;
        this._tableRange = undefined;
    }
    initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = interpolate(table, this.min);
        this._tableRange = interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
        const { min , max  } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) items.push(curr);
        }
        if (items.length < 2) return [
            {
                time: min,
                pos: 0
            },
            {
                time: max,
                pos: 1
            }
        ];
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) table.push({
                time: curr,
                pos: i / (ilen - 1)
            });
        }
        return table;
    }
    _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) return timestamps;
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) timestamps = this.normalize(data.concat(label));
        else timestamps = data.length ? data : label;
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
    getDecimalForValue(value) {
        return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}
TimeSeriesScale.id = "timeseries";
TimeSeriesScale.defaults = TimeScale.defaults;
var scales = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    CategoryScale: CategoryScale,
    LinearScale: LinearScale,
    LogarithmicScale: LogarithmicScale,
    RadialLinearScale: RadialLinearScale,
    TimeScale: TimeScale,
    TimeSeriesScale: TimeSeriesScale
});
const registerables = [
    controllers,
    elements,
    plugins,
    scales
];

},{"./chunks/helpers.segment.mjs":"SiqvY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SiqvY":[function(require,module,exports) {
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>_isPointInArea);
parcelHelpers.export(exports, "A", ()=>_factorize);
parcelHelpers.export(exports, "B", ()=>finiteOrDefault);
parcelHelpers.export(exports, "C", ()=>callback);
parcelHelpers.export(exports, "D", ()=>_addGrace);
parcelHelpers.export(exports, "E", ()=>_limitValue);
parcelHelpers.export(exports, "F", ()=>toDegrees);
parcelHelpers.export(exports, "G", ()=>_measureText);
parcelHelpers.export(exports, "H", ()=>HALF_PI);
parcelHelpers.export(exports, "I", ()=>_int16Range);
parcelHelpers.export(exports, "J", ()=>_alignPixel);
parcelHelpers.export(exports, "K", ()=>toPadding);
parcelHelpers.export(exports, "L", ()=>clipArea);
parcelHelpers.export(exports, "M", ()=>renderText);
parcelHelpers.export(exports, "N", ()=>unclipArea);
parcelHelpers.export(exports, "O", ()=>toFont);
parcelHelpers.export(exports, "P", ()=>PI);
parcelHelpers.export(exports, "Q", ()=>each);
parcelHelpers.export(exports, "R", ()=>_toLeftRightCenter);
parcelHelpers.export(exports, "S", ()=>_alignStartEnd);
parcelHelpers.export(exports, "T", ()=>TAU);
parcelHelpers.export(exports, "U", ()=>overrides);
parcelHelpers.export(exports, "V", ()=>merge);
parcelHelpers.export(exports, "W", ()=>_capitalize);
parcelHelpers.export(exports, "X", ()=>getRelativePosition);
parcelHelpers.export(exports, "Y", ()=>_rlookupByKey);
parcelHelpers.export(exports, "Z", ()=>_lookupByKey);
parcelHelpers.export(exports, "_", ()=>_arrayUnique);
parcelHelpers.export(exports, "a", ()=>resolve);
parcelHelpers.export(exports, "a$", ()=>toLineHeight);
parcelHelpers.export(exports, "a0", ()=>getAngleFromPoint);
parcelHelpers.export(exports, "a1", ()=>getMaximumSize);
parcelHelpers.export(exports, "a2", ()=>_getParentNode);
parcelHelpers.export(exports, "a3", ()=>readUsedSize);
parcelHelpers.export(exports, "a4", ()=>throttled);
parcelHelpers.export(exports, "a5", ()=>supportsEventListenerOptions);
parcelHelpers.export(exports, "a6", ()=>_isDomSupported);
parcelHelpers.export(exports, "a7", ()=>descriptors);
parcelHelpers.export(exports, "a8", ()=>isFunction);
parcelHelpers.export(exports, "a9", ()=>_attachContext);
parcelHelpers.export(exports, "aA", ()=>getRtlAdapter);
parcelHelpers.export(exports, "aB", ()=>overrideTextDirection);
parcelHelpers.export(exports, "aC", ()=>_textX);
parcelHelpers.export(exports, "aD", ()=>restoreTextDirection);
parcelHelpers.export(exports, "aE", ()=>drawPointLegend);
parcelHelpers.export(exports, "aF", ()=>noop);
parcelHelpers.export(exports, "aG", ()=>distanceBetweenPoints);
parcelHelpers.export(exports, "aH", ()=>_setMinAndMaxByKey);
parcelHelpers.export(exports, "aI", ()=>niceNum);
parcelHelpers.export(exports, "aJ", ()=>almostWhole);
parcelHelpers.export(exports, "aK", ()=>almostEquals);
parcelHelpers.export(exports, "aL", ()=>_decimalPlaces);
parcelHelpers.export(exports, "aM", ()=>_longestText);
parcelHelpers.export(exports, "aN", ()=>_filterBetween);
parcelHelpers.export(exports, "aO", ()=>_lookup);
parcelHelpers.export(exports, "aP", ()=>isPatternOrGradient);
parcelHelpers.export(exports, "aQ", ()=>getHoverColor);
parcelHelpers.export(exports, "aR", ()=>clone$1);
parcelHelpers.export(exports, "aS", ()=>_merger);
parcelHelpers.export(exports, "aT", ()=>_mergerIf);
parcelHelpers.export(exports, "aU", ()=>_deprecated);
parcelHelpers.export(exports, "aV", ()=>_splitKey);
parcelHelpers.export(exports, "aW", ()=>toFontString);
parcelHelpers.export(exports, "aX", ()=>splineCurve);
parcelHelpers.export(exports, "aY", ()=>splineCurveMonotone);
parcelHelpers.export(exports, "aZ", ()=>getStyle);
parcelHelpers.export(exports, "a_", ()=>fontString);
parcelHelpers.export(exports, "aa", ()=>_createResolver);
parcelHelpers.export(exports, "ab", ()=>_descriptors);
parcelHelpers.export(exports, "ac", ()=>mergeIf);
parcelHelpers.export(exports, "ad", ()=>uid);
parcelHelpers.export(exports, "ae", ()=>debounce);
parcelHelpers.export(exports, "af", ()=>retinaScale);
parcelHelpers.export(exports, "ag", ()=>clearCanvas);
parcelHelpers.export(exports, "ah", ()=>setsEqual);
parcelHelpers.export(exports, "ai", ()=>_elementsEqual);
parcelHelpers.export(exports, "aj", ()=>_isClickEvent);
parcelHelpers.export(exports, "ak", ()=>_isBetween);
parcelHelpers.export(exports, "al", ()=>_readValueToProps);
parcelHelpers.export(exports, "am", ()=>_updateBezierControlPoints);
parcelHelpers.export(exports, "an", ()=>_computeSegments);
parcelHelpers.export(exports, "ao", ()=>_boundSegments);
parcelHelpers.export(exports, "ap", ()=>_steppedInterpolation);
parcelHelpers.export(exports, "aq", ()=>_bezierInterpolation);
parcelHelpers.export(exports, "ar", ()=>_pointInLine);
parcelHelpers.export(exports, "as", ()=>_steppedLineTo);
parcelHelpers.export(exports, "at", ()=>_bezierCurveTo);
parcelHelpers.export(exports, "au", ()=>drawPoint);
parcelHelpers.export(exports, "av", ()=>addRoundedRectPath);
parcelHelpers.export(exports, "aw", ()=>toTRBL);
parcelHelpers.export(exports, "ax", ()=>toTRBLCorners);
parcelHelpers.export(exports, "ay", ()=>_boundSegment);
parcelHelpers.export(exports, "az", ()=>_normalizeAngle);
parcelHelpers.export(exports, "b", ()=>isArray);
parcelHelpers.export(exports, "b0", ()=>PITAU);
parcelHelpers.export(exports, "b1", ()=>INFINITY);
parcelHelpers.export(exports, "b2", ()=>RAD_PER_DEG);
parcelHelpers.export(exports, "b3", ()=>QUARTER_PI);
parcelHelpers.export(exports, "b4", ()=>TWO_THIRDS_PI);
parcelHelpers.export(exports, "b5", ()=>_angleDiff);
parcelHelpers.export(exports, "c", ()=>color);
parcelHelpers.export(exports, "d", ()=>defaults);
parcelHelpers.export(exports, "e", ()=>effects);
parcelHelpers.export(exports, "f", ()=>resolveObjectKey);
parcelHelpers.export(exports, "g", ()=>isNumberFinite);
parcelHelpers.export(exports, "h", ()=>createContext);
parcelHelpers.export(exports, "i", ()=>isObject);
parcelHelpers.export(exports, "j", ()=>defined);
parcelHelpers.export(exports, "k", ()=>isNullOrUndef);
parcelHelpers.export(exports, "l", ()=>listenArrayEvents);
parcelHelpers.export(exports, "m", ()=>toPercentage);
parcelHelpers.export(exports, "n", ()=>toDimension);
parcelHelpers.export(exports, "o", ()=>formatNumber);
parcelHelpers.export(exports, "p", ()=>_angleBetween);
parcelHelpers.export(exports, "q", ()=>_getStartAndCountOfVisiblePoints);
parcelHelpers.export(exports, "r", ()=>requestAnimFrame);
parcelHelpers.export(exports, "s", ()=>sign);
parcelHelpers.export(exports, "t", ()=>toRadians);
parcelHelpers.export(exports, "u", ()=>unlistenArrayEvents);
parcelHelpers.export(exports, "v", ()=>valueOrDefault);
parcelHelpers.export(exports, "w", ()=>_scaleRangesChanged);
parcelHelpers.export(exports, "x", ()=>isNumber);
parcelHelpers.export(exports, "y", ()=>_parseObjectDataRadialScale);
parcelHelpers.export(exports, "z", ()=>log10);
function noop() {}
const uid = function() {
    let id = 0;
    return function() {
        return id++;
    };
}();
function isNullOrUndef(value) {
    return value === null || typeof value === "undefined";
}
function isArray(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") return true;
    return false;
}
function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
}
const isNumberFinite = (value)=>(typeof value === "number" || value instanceof Number) && isFinite(+value);
function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
}
function valueOrDefault(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
}
const toPercentage = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : value / dimension;
const toDimension = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === "function") return fn.apply(thisArg, args);
}
function each(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if (isArray(loopable)) {
        len = loopable.length;
        if (reverse) for(i = len - 1; i >= 0; i--)fn.call(thisArg, loopable[i], i);
        else for(i = 0; i < len; i++)fn.call(thisArg, loopable[i], i);
    } else if (isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++)fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
}
function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
function clone$1(source) {
    if (isArray(source)) return source.map(clone$1);
    if (isObject(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k)target[keys[k]] = clone$1(source[keys[k]]);
        return target;
    }
    return source;
}
function isValidKey(key) {
    return [
        "__proto__",
        "prototype",
        "constructor"
    ].indexOf(key) === -1;
}
function _merger(key, target, source, options) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) merge(tval, sval, options);
    else target[key] = clone$1(sval);
}
function merge(target, source, options) {
    const sources = isArray(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!isObject(target)) return target;
    options = options || {};
    const merger = options.merger || _merger;
    for(let i = 0; i < ilen; ++i){
        source = sources[i];
        if (!isObject(source)) continue;
        const keys = Object.keys(source);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, source, options);
    }
    return target;
}
function mergeIf(target, source) {
    return merge(target, source, {
        merger: _mergerIf
    });
}
function _mergerIf(key, target, source) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) mergeIf(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = clone$1(sval);
}
function _deprecated(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
const keyResolvers = {
    "": (v)=>v,
    x: (o)=>o.x,
    y: (o)=>o.y
};
function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
}
function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj)=>{
        for (const k of keys){
            if (k === "") break;
            obj = obj && obj[k];
        }
        return obj;
    };
}
function _splitKey(key) {
    const parts = key.split(".");
    const keys = [];
    let tmp = "";
    for (const part of parts){
        tmp += part;
        if (tmp.endsWith("\\")) tmp = tmp.slice(0, -1) + ".";
        else {
            keys.push(tmp);
            tmp = "";
        }
    }
    return keys;
}
function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value)=>typeof value !== "undefined";
const isFunction = (value)=>typeof value === "function";
const setsEqual = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
function _isClickEvent(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++)if (value % i === 0) {
        result.push(i);
        result.push(value / i);
    }
    if (sqrt === (sqrt | 0)) result.push(sqrt);
    result.sort((a, b)=>a - b).pop();
    return result;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
function _setMinAndMaxByKey(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function toRadians(degrees) {
    return degrees * (PI / 180);
}
function toDegrees(radians) {
    return radians * (180 / PI);
}
function _decimalPlaces(x) {
    if (!isNumberFinite(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) angle += TAU;
    return {
        angle,
        distance: radialDistanceFromCenter
    };
}
function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
}
function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
}
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
}
function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) lo = mid;
        else hi = mid;
    }
    return {
        lo,
        hi
    };
}
const _lookupByKey = (table, key, value, last)=>_lookup(table, value, last ? (index)=>table[index][key] <= value : (index)=>table[index][key] < value);
const _rlookupByKey = (table, key, value)=>_lookup(table, value, (index)=>table[index][key] >= value);
function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min)start++;
    while(end > start && values[end - 1] > max)end--;
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const arrayEvents = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
];
function listenArrayEvents(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, "_chartjs", {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    arrayEvents.forEach((key)=>{
        const method = "_onData" + _capitalize(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === "function") object[method](...args);
                });
                return res;
            }
        });
    });
}
function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) return;
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
    if (listeners.length > 0) return;
    arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
function _arrayUnique(items) {
    const set = new Set();
    let i, ilen;
    for(i = 0, ilen = items.length; i < ilen; ++i)set.add(items[i]);
    if (set.size === ilen) return items;
    return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + " " + pixelSize + "px " + fontFamily;
}
const requestAnimFrame = function() {
    if (typeof window === "undefined") return function(callback) {
        return callback();
    };
    return window.requestAnimationFrame;
}();
function throttled(fn, thisArg, updateFn) {
    const updateArgs = updateFn || ((args)=>Array.prototype.slice.call(args));
    let ticking = false;
    let args = [];
    return function(...rest) {
        args = updateArgs(rest);
        if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, args);
            });
        }
    };
}
function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
const _toLeftRightCenter = (align)=>align === "start" ? "left" : align === "end" ? "right" : "center";
const _alignStartEnd = (align, start, end)=>align === "start" ? start : align === "end" ? end : (start + end) / 2;
const _textX = (align, left, right, rtl)=>{
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
};
function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale , _parsed  } = meta;
        const axis = iScale.axis;
        const { min , max , minDefined , maxDefined  } = iScale.getUserBounds();
        if (minDefined) start = _limitValue(Math.min(_lookupByKey(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
        if (maxDefined) count = _limitValue(Math.max(_lookupByKey(_parsed, iScale.axis, max, true).hi + 1, animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
        else count = pointCount - start;
    }
    return {
        start,
        count
    };
}
function _scaleRangesChanged(meta) {
    const { xScale , yScale , _scaleRanges  } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}
const atEdge = (t)=>t === 0 || t === 1;
const elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
const effects = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * HALF_PI) + 1,
    easeOutSine: (t)=>Math.sin(t * HALF_PI),
    easeInOutSine: (t)=>-0.5 * (Math.cos(PI * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - effects.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) return m * t * t;
        if (t < 2 / d) return m * (t -= 1.5 / d) * t + 0.75;
        if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + 0.9375;
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function round(v) {
    return v + 0.5 | 0;
}
const lim = (v, l, h)=>Math.max(Math.min(v, h), l);
function p2b(v) {
    return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
    return lim(round(v * 255), 0, 255);
}
function b2n(v) {
    return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
    return lim(round(v * 100), 0, 100);
}
const map$1 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const hex = [
    ..."0123456789ABCDEF"
];
const h1 = (b)=>hex[b & 0xF];
const h2 = (b)=>hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = (b)=>(b & 0xF0) >> 4 === (b & 0xF);
const isShort = (v)=>eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
        if (len === 4 || len === 5) ret = {
            r: 255 & map$1[str[1]] * 17,
            g: 255 & map$1[str[2]] * 17,
            b: 255 & map$1[str[3]] * 17,
            a: len === 5 ? map$1[str[4]] * 17 : 255
        };
        else if (len === 7 || len === 9) ret = {
            r: map$1[str[1]] << 4 | map$1[str[2]],
            g: map$1[str[3]] << 4 | map$1[str[4]],
            b: map$1[str[5]] << 4 | map$1[str[6]],
            a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
        };
    }
    return ret;
}
const alpha = (a, f)=>a < 255 ? f(a) : "";
function hexString(v) {
    var f = isShort(v) ? h1 : h2;
    return v ? "#" + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [
        f(0),
        f(8),
        f(4)
    ];
}
function hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6)=>v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [
        f(5),
        f(3),
        f(1)
    ];
}
function hwb2rgbn(h, w, b) {
    const rgb = hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
        i = 1 / (w + b);
        w *= i;
        b *= i;
    }
    for(i = 0; i < 3; i++){
        rgb[i] *= 1 - w - b;
        rgb[i] += w;
    }
    return rgb;
}
function hueValue(r, g, b, d, max) {
    if (r === max) return (g - b) / d + (g < b ? 6 : 0);
    if (g === max) return (b - r) / d + 2;
    return (r - g) / d + 4;
}
function rgb2hsl(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = hueValue(r, g, b, d, max);
        h = h * 60 + 0.5;
    }
    return [
        h | 0,
        s || 0,
        l
    ];
}
function calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
    return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
    return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
    return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
    return (h % 360 + 360) % 360;
}
function hueParse(str) {
    const m = HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) return;
    if (m[5] !== v) a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
    const h = hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === "hwb") v = hwb2rgb(h, p1, p2);
    else if (m[1] === "hsv") v = hsv2rgb(h, p1, p2);
    else v = hsl2rgb(h, p1, p2);
    return {
        r: v[0],
        g: v[1],
        b: v[2],
        a: a
    };
}
function rotate(v, deg) {
    var h = rgb2hsl(v);
    h[0] = hue(h[0] + deg);
    h = hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
}
function hslString(v) {
    if (!v) return;
    const a = rgb2hsl(v);
    const h = a[0];
    const s = n2p(a[1]);
    const l = n2p(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
};
const names$1 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};
function unpack() {
    const unpacked = {};
    const keys = Object.keys(names$1);
    const tkeys = Object.keys(map);
    let i, j, k, ok, nk;
    for(i = 0; i < keys.length; i++){
        ok = nk = keys[i];
        for(j = 0; j < tkeys.length; j++){
            k = tkeys[j];
            nk = nk.replace(k, map[k]);
        }
        k = parseInt(names$1[ok], 16);
        unpacked[nk] = [
            k >> 16 & 0xFF,
            k >> 8 & 0xFF,
            k & 0xFF
        ];
    }
    return unpacked;
}
let names;
function nameParse(str) {
    if (!names) {
        names = unpack();
        names.transparent = [
            0,
            0,
            0,
            0
        ];
    }
    const a = names[str.toLowerCase()];
    return a && {
        r: a[0],
        g: a[1],
        b: a[2],
        a: a.length === 4 ? a[3] : 255
    };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
    const m = RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) return;
    if (m[7] !== r) {
        const v = +m[7];
        a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
    g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
    b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
function rgbString(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const to = (v)=>v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = (v)=>v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
    const r = from(b2n(rgb1.r));
    const g = from(b2n(rgb1.g));
    const b = from(b2n(rgb1.b));
    return {
        r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
        g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
        b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
        a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
}
function modHSL(v, i, ratio) {
    if (v) {
        let tmp = rgb2hsl(v);
        tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
        tmp = hsl2rgb(tmp);
        v.r = tmp[0];
        v.g = tmp[1];
        v.b = tmp[2];
    }
}
function clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
    var v = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    if (Array.isArray(input)) {
        if (input.length >= 3) {
            v = {
                r: input[0],
                g: input[1],
                b: input[2],
                a: 255
            };
            if (input.length > 3) v.a = n2b(input[3]);
        }
    } else {
        v = clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        });
        v.a = n2b(v.a);
    }
    return v;
}
function functionParse(str) {
    if (str.charAt(0) === "r") return rgbParse(str);
    return hueParse(str);
}
class Color {
    constructor(input){
        if (input instanceof Color) return input;
        const type = typeof input;
        let v;
        if (type === "object") v = fromObject(input);
        else if (type === "string") v = hexParse(input) || nameParse(input) || functionParse(input);
        this._rgb = v;
        this._valid = !!v;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var v = clone(this._rgb);
        if (v) v.a = b2n(v.a);
        return v;
    }
    set rgb(obj) {
        this._rgb = fromObject(obj);
    }
    rgbString() {
        return this._valid ? rgbString(this._rgb) : undefined;
    }
    hexString() {
        return this._valid ? hexString(this._rgb) : undefined;
    }
    hslString() {
        return this._valid ? hslString(this._rgb) : undefined;
    }
    mix(color, weight) {
        if (color) {
            const c1 = this.rgb;
            const c2 = color.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
            w2 = 1 - w1;
            c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
        }
        return this;
    }
    interpolate(color, t) {
        if (color) this._rgb = interpolate(this._rgb, color._rgb, t);
        return this;
    }
    clone() {
        return new Color(this.rgb);
    }
    alpha(a) {
        this._rgb.a = n2b(a);
        return this;
    }
    clearer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
    }
    greyscale() {
        const rgb = this._rgb;
        const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
    }
    opaquer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
    }
    negate() {
        const v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
    }
    lighten(ratio) {
        modHSL(this._rgb, 2, ratio);
        return this;
    }
    darken(ratio) {
        modHSL(this._rgb, 2, -ratio);
        return this;
    }
    saturate(ratio) {
        modHSL(this._rgb, 1, ratio);
        return this;
    }
    desaturate(ratio) {
        modHSL(this._rgb, 1, -ratio);
        return this;
    }
    rotate(deg) {
        rotate(this._rgb, deg);
        return this;
    }
}
function index_esm(input) {
    return new Color(input);
}
function isPatternOrGradient(value) {
    if (value && typeof value === "object") {
        const type = value.toString();
        return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
    }
    return false;
}
function color(value) {
    return isPatternOrGradient(value) ? value : index_esm(value);
}
function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
}
const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
    if (!key) return node;
    const keys = key.split(".");
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function set(root, scope, values) {
    if (typeof scope === "string") return merge(getScope$1(root, scope), values);
    return merge(getScope$1(root, ""), scope);
}
class Defaults {
    constructor(_descriptors){
        this.animation = undefined;
        this.backgroundColor = "rgba(0,0,0,0.1)";
        this.borderColor = "rgba(0,0,0,0.1)";
        this.color = "#666";
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>getHoverColor(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>getHoverColor(options.borderColor);
        this.hoverColor = (ctx, options)=>getHoverColor(options.color);
        this.indexAxis = "x";
        this.interaction = {
            mode: "nearest",
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors);
    }
    set(scope, values) {
        return set(this, scope, values);
    }
    get(scope) {
        return getScope$1(this, scope);
    }
    describe(scope, values) {
        return set(descriptors, scope, values);
    }
    override(scope, values) {
        return set(overrides, scope, values);
    }
    route(scope, name, targetScope, targetName) {
        const scopeObject = getScope$1(this, scope);
        const targetScopeObject = getScope$1(this, targetScope);
        const privateName = "_" + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if (isObject(local)) return Object.assign({}, target, local);
                    return valueOrDefault(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
}
var defaults = new Defaults({
    _scriptable: (name)=>!name.startsWith("on"),
    _indexable: (name)=>name !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
});
function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) return null;
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
}
function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) longest = textWidth;
    return longest;
}
function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        if (thing !== undefined && thing !== null && isArray(thing) !== true) longest = _measureText(ctx, data, gc, longest, thing);
        else if (isArray(thing)) for(j = 0, jlen = thing.length; j < jlen; j++){
            nestedThing = thing[j];
            if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++)delete data[gc[i]];
        gc.splice(0, gcLen);
    }
    return longest;
}
function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function clearCanvas(canvas, ctx) {
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function drawPoint(ctx, options, x, y) {
    drawPointLegend(ctx, options, x, y, null);
}
function drawPointLegend(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === "object") {
        type = style.toString();
        if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) return;
    ctx.beginPath();
    switch(style){
        default:
            if (w) ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
            else ctx.arc(x, y, radius, 0, TAU);
            ctx.closePath();
            break;
        case "triangle":
            ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case "rectRounded":
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
            ctx.closePath();
            break;
        case "rect":
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                width = w ? w / 2 : size;
                ctx.rect(x - width, y - size, 2 * width, 2 * size);
                break;
            }
            rad += QUARTER_PI;
        case "rectRot":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + yOffset, y - xOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            ctx.closePath();
            break;
        case "crossRot":
            rad += QUARTER_PI;
        case "cross":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;
        case "star":
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            rad += QUARTER_PI;
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            ctx.moveTo(x + yOffset, y - xOffset);
            ctx.lineTo(x - yOffset, y + xOffset);
            break;
        case "line":
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case "dash":
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) ctx.stroke();
}
function _isPointInArea(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function unclipArea(ctx) {
    ctx.restore();
}
function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    if (mode === "middle") {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) ctx.lineTo(previous.x, target.y);
    else ctx.lineTo(target.x, previous.y);
    ctx.lineTo(target.x, target.y);
}
function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function renderText(ctx, text, x, y, font, opts = {}) {
    const lines = isArray(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (stroke) {
            if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
            if (!isNullOrUndef(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        decorateText(ctx, x, y, line, opts);
        y += font.lineHeight;
    }
    ctx.restore();
}
function setRenderOpts(ctx, opts) {
    if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
    if (!isNullOrUndef(opts.rotation)) ctx.rotate(opts.rotation);
    if (opts.color) ctx.fillStyle = opts.color;
    if (opts.textAlign) ctx.textAlign = opts.textAlign;
    if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function addRoundedRectPath(ctx, rect) {
    const { x , y , w , h , radius  } = rect;
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
    ctx.lineTo(x, y + h - radius.bottomLeft);
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    ctx.lineTo(x + w, y + radius.topRight);
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    ctx.lineTo(x + radius.topLeft, y);
}
const LINE_HEIGHT = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
const FONT_STYLE = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function toLineHeight(value, size) {
    const matches = ("" + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === "normal") return size * 1.2;
    value = +matches[2];
    switch(matches[3]){
        case "px":
            return value;
        case "%":
            value /= 100;
            break;
    }
    return size * value;
}
const numberOrZero = (v)=>+v || 0;
function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop)=>valueOrDefault(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop of keys)ret[prop] = numberOrZero(read(prop));
    return ret;
}
function toTRBL(value) {
    return _readValueToProps(value, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    });
}
function toTRBLCorners(value) {
    return _readValueToProps(value, [
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ]);
}
function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
        style = "";
    }
        size,
}