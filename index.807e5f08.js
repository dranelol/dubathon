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
parcelHelpers.export(exports, "topChatters", ()=>topChatters);
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
//import DownsamplePlugin from 'chartjs-plugin-downsample';
let data = require("../data/release/dubathon_data.json");
let maiyaData = require("../data/release/maiyaDanceOverTime.json");
let chatData = require("../data/release/chatters.json");
let emoteData = require("../data/release/emojiUse.json");
window.activateChart = function(chartIdx) {
    activateChart(chartIdx);
};
Chart.register((0, _chartjsPluginZoomDefault.default));
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
            topEmotes();
            break;
    }
}
async function topEmotes() {
    let emotesNames = [];
    let emotesCount = [];
    for(let i = 0; i < emoteData.length; i++){
        const dataLine = emoteData[i];
        emotesCount.push(dataLine.count);
        emotesNames.push(dataLine.emote);
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
async function maiyaDanceUsage() {
    let chartData = [];
    let tempDateCollection = [];
    let maiyaCount = 0;
    for(let i = 0; i < maiyaData.length; i++){
        const dataLine = maiyaData[i];
        const emojiCount = dataLine.count;
        if (emojiCount == "0") continue;
        const dateMS = dataLine.timeMS;
        maiyaCount += emojiCount;
        tempDateCollection.push(dateMS);
        chartData.push(maiyaCount);
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
                        tooltipFormat: "DD T"
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
        //console.log(timerLeft);
        tempDateCollection.push(dateMS);
        chartData.push(timerLeft);
    }
    currentChart = new Chart(document.getElementById("charts"), {
        type: "line",
        data: {
            labels: tempDateCollection,
            datasets: [
                {
                    label: "Hours remaining",
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
                        tooltipFormat: "DD T"
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
activateChart(0);

},{"chartjs-plugin-zoom":"kMtu7","../data/release/dubathon_data.json":"jyj2f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../data/release/maiyaDanceOverTime.json":"7igeN","../data/release/chatters.json":"eWKe8","../data/release/emojiUse.json":"97m7T"}],"kMtu7":[function(require,module,exports) {
/*!
* chartjs-plugin-zoom v2.0.0
* undefined
 * (c) 2016-2022 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>plugin);
parcelHelpers.export(exports, "pan", ()=>pan);
parcelHelpers.export(exports, "resetZoom", ()=>resetZoom);
parcelHelpers.export(exports, "zoom", ()=>zoom);
parcelHelpers.export(exports, "zoomRect", ()=>zoomRect);
parcelHelpers.export(exports, "zoomScale", ()=>zoomScale);
var _hammerjs = require("hammerjs");
var _hammerjsDefault = parcelHelpers.interopDefault(_hammerjs);
var _helpers = require("chart.js/helpers");
const getModifierKey = (opts)=>opts && opts.enabled && opts.modifierKey;
const keyPressed = (key, event)=>key && event[key + "Key"];
const keyNotPressed = (key, event)=>key && !event[key + "Key"];
/**
 * @param {string|function} mode can be 'x', 'y' or 'xy'
 * @param {string} dir can be 'x' or 'y'
 * @param {import('chart.js').Chart} chart instance of the chart in question
 * @returns {boolean}
 */ function directionEnabled(mode, dir, chart) {
    if (mode === undefined) return true;
    else if (typeof mode === "string") return mode.indexOf(dir) !== -1;
    else if (typeof mode === "function") return mode({
        chart
    }).indexOf(dir) !== -1;
    return false;
}
function directionsEnabled(mode, chart) {
    if (typeof mode === "function") mode = mode({
        chart
    });
    if (typeof mode === "string") return {
        x: mode.indexOf("x") !== -1,
        y: mode.indexOf("y") !== -1
    };
    return {
        x: false,
        y: false
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 * @param {function} fn - Function to call. No arguments are passed.
 * @param {number} delay - Delay in ms. 0 = immediate invocation.
 * @returns {function}
 */ function debounce(fn, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay);
        return delay;
    };
}
/**
 * Checks which axis is under the mouse cursor.
 * @param {{x: number, y: number}} point - the mouse location
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 * @return {import('chart.js').Scale}
 */ function getScaleUnderPoint({ x , y  }, chart) {
    const scales = chart.scales;
    const scaleIds = Object.keys(scales);
    for(let i = 0; i < scaleIds.length; i++){
        const scale = scales[scaleIds[i]];
        if (y >= scale.top && y <= scale.bottom && x >= scale.left && x <= scale.right) return scale;
    }
    return null;
}
/**
 * Evaluate the chart's mode, scaleMode, and overScaleMode properties to
 * determine which axes are eligible for scaling.
 * options.overScaleMode can be a function if user want zoom only one scale of many for example.
 * @param options - Zoom or pan options
 * @param {{x: number, y: number}} point - the mouse location
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 * @return {import('chart.js').Scale[]}
 */ function getEnabledScalesByPoint(options, point, chart) {
    const { mode ="xy" , scaleMode , overScaleMode  } = options || {};
    const scale = getScaleUnderPoint(point, chart);
    const enabled = directionsEnabled(mode, chart);
    const scaleEnabled = directionsEnabled(scaleMode, chart);
    // Convert deprecated overScaleEnabled to new scaleEnabled.
    if (overScaleMode) {
        const overScaleEnabled = directionsEnabled(overScaleMode, chart);
        for (const axis of [
            "x",
            "y"
        ])if (overScaleEnabled[axis]) {
            scaleEnabled[axis] = enabled[axis];
            enabled[axis] = false;
        }
    }
    if (scale && scaleEnabled[scale.axis]) return [
        scale
    ];
    const enabledScales = [];
    (0, _helpers.each)(chart.scales, function(scaleItem) {
        if (enabled[scaleItem.axis]) enabledScales.push(scaleItem);
    });
    return enabledScales;
}
const chartStates = new WeakMap();
function getState(chart) {
    let state = chartStates.get(chart);
    if (!state) {
        state = {
            originalScaleLimits: {},
            updatedScaleLimits: {},
            handlers: {},
            panDelta: {}
        };
        chartStates.set(chart, state);
    }
    return state;
}
function removeState(chart) {
    chartStates.delete(chart);
}
function zoomDelta(scale, zoom, center) {
    const range = scale.max - scale.min;
    const newRange = range * (zoom - 1);
    const centerPoint = scale.isHorizontal() ? center.x : center.y;
    // `scale.getValueForPixel()` can return a value less than the `scale.min` or
    // greater than `scale.max` when `centerPoint` is outside chartArea.
    const minPercent = Math.max(0, Math.min(1, (scale.getValueForPixel(centerPoint) - scale.min) / range || 0));
    const maxPercent = 1 - minPercent;
    return {
        min: newRange * minPercent,
        max: newRange * maxPercent
    };
}
function getLimit(state, scale, scaleLimits, prop, fallback) {
    let limit = scaleLimits[prop];
    if (limit === "original") {
        const original = state.originalScaleLimits[scale.id][prop];
        limit = (0, _helpers.valueOrDefault)(original.options, original.scale);
    }
    return (0, _helpers.valueOrDefault)(limit, fallback);
}
function getRange(scale, pixel0, pixel1) {
    const v0 = scale.getValueForPixel(pixel0);
    const v1 = scale.getValueForPixel(pixel1);
    return {
        min: Math.min(v0, v1),
        max: Math.max(v0, v1)
    };
}
function updateRange(scale, { min , max  }, limits, zoom = false) {
    const state = getState(scale.chart);
    const { id , axis , options: scaleOpts  } = scale;
    const scaleLimits = limits && (limits[id] || limits[axis]) || {};
    const { minRange =0  } = scaleLimits;
    const minLimit = getLimit(state, scale, scaleLimits, "min", -Infinity);
    const maxLimit = getLimit(state, scale, scaleLimits, "max", Infinity);
    const cmin = Math.max(min, minLimit);
    const cmax = Math.min(max, maxLimit);
    const range = zoom ? Math.max(cmax - cmin, minRange) : scale.max - scale.min;
    if (cmax - cmin !== range) {
        if (minLimit > cmax - range) {
            min = cmin;
            max = cmin + range;
        } else if (maxLimit < cmin + range) {
            max = cmax;
            min = cmax - range;
        } else {
            const offset = (range - cmax + cmin) / 2;
            min = cmin - offset;
            max = cmax + offset;
        }
    } else {
        min = cmin;
        max = cmax;
    }
    scaleOpts.min = min;
    scaleOpts.max = max;
    state.updatedScaleLimits[scale.id] = {
        min,
        max
    };
    // return true if the scale range is changed
    return scale.parse(min) !== scale.min || scale.parse(max) !== scale.max;
}
function zoomNumericalScale(scale, zoom, center, limits) {
    const delta = zoomDelta(scale, zoom, center);
    const newRange = {
        min: scale.min + delta.min,
        max: scale.max - delta.max
    };
    return updateRange(scale, newRange, limits, true);
}
function zoomRectNumericalScale(scale, from, to, limits) {
    updateRange(scale, getRange(scale, from, to), limits, true);
}
const integerChange = (v)=>v === 0 || isNaN(v) ? 0 : v < 0 ? Math.min(Math.round(v), -1) : Math.max(Math.round(v), 1);
function existCategoryFromMaxZoom(scale) {
    const labels = scale.getLabels();
    const maxIndex = labels.length - 1;
    if (scale.min > 0) scale.min -= 1;
    if (scale.max < maxIndex) scale.max += 1;
}
function zoomCategoryScale(scale, zoom, center, limits) {
    const delta = zoomDelta(scale, zoom, center);
    if (scale.min === scale.max && zoom < 1) existCategoryFromMaxZoom(scale);
    const newRange = {
        min: scale.min + integerChange(delta.min),
        max: scale.max - integerChange(delta.max)
    };
    return updateRange(scale, newRange, limits, true);
}
function scaleLength(scale) {
    return scale.isHorizontal() ? scale.width : scale.height;
}
function panCategoryScale(scale, delta, limits) {
    const labels = scale.getLabels();
    const lastLabelIndex = labels.length - 1;
    let { min , max  } = scale;
    // The visible range. Ticks can be skipped, and thus not reliable.
    const range = Math.max(max - min, 1);
    // How many pixels of delta is required before making a step. stepSize, but limited to max 1/10 of the scale length.
    const stepDelta = Math.round(scaleLength(scale) / Math.max(range, 10));
    const stepSize = Math.round(Math.abs(delta / stepDelta));
    let applied;
    if (delta < -stepDelta) {
        max = Math.min(max + stepSize, lastLabelIndex);
        min = range === 1 ? max : max - range;
        applied = max === lastLabelIndex;
    } else if (delta > stepDelta) {
        min = Math.max(0, min - stepSize);
        max = range === 1 ? min : min + range;
        applied = min === 0;
    }
    return updateRange(scale, {
        min,
        max
    }, limits) || applied;
}
const OFFSETS = {
    second: 500,
    minute: 30000,
    hour: 1800000,
    day: 43200000,
    week: 302400000,
    month: 1296000000,
    quarter: 5184000000,
    year: 15724800000 // 182 d
};
function panNumericalScale(scale, delta, limits, canZoom = false) {
    const { min: prevStart , max: prevEnd , options  } = scale;
    const round = options.time && options.time.round;
    const offset = OFFSETS[round] || 0;
    const newMin = scale.getValueForPixel(scale.getPixelForValue(prevStart + offset) - delta);
    const newMax = scale.getValueForPixel(scale.getPixelForValue(prevEnd + offset) - delta);
    const { min: minLimit = -Infinity , max: maxLimit = Infinity  } = canZoom && limits && limits[scale.axis] || {};
    if (isNaN(newMin) || isNaN(newMax) || newMin < minLimit || newMax > maxLimit) // At limit: No change but return true to indicate no need to store the delta.
    // NaN can happen for 0-dimension scales (either because they were configured
    // with min === max or because the chart has 0 plottable area).
    return true;
    return updateRange(scale, {
        min: newMin,
        max: newMax
    }, limits, canZoom);
}
function panNonLinearScale(scale, delta, limits) {
    return panNumericalScale(scale, delta, limits, true);
}
const zoomFunctions = {
    category: zoomCategoryScale,
    default: zoomNumericalScale
};
const zoomRectFunctions = {
    default: zoomRectNumericalScale
};
const panFunctions = {
    category: panCategoryScale,
    default: panNumericalScale,
    logarithmic: panNonLinearScale,
    timeseries: panNonLinearScale
};
function shouldUpdateScaleLimits(scale, originalScaleLimits, updatedScaleLimits) {
    const { id , options: { min , max  }  } = scale;
    if (!originalScaleLimits[id] || !updatedScaleLimits[id]) return true;
    const previous = updatedScaleLimits[id];
    return previous.min !== min || previous.max !== max;
}
function removeMissingScales(limits, scales) {
    (0, _helpers.each)(limits, (opt, key)=>{
        if (!scales[key]) delete limits[key];
    });
}
function storeOriginalScaleLimits(chart, state) {
    const { scales  } = chart;
    const { originalScaleLimits , updatedScaleLimits  } = state;
    (0, _helpers.each)(scales, function(scale) {
        if (shouldUpdateScaleLimits(scale, originalScaleLimits, updatedScaleLimits)) originalScaleLimits[scale.id] = {
            min: {
                scale: scale.min,
                options: scale.options.min
            },
            max: {
                scale: scale.max,
                options: scale.options.max
            }
        };
    });
    removeMissingScales(originalScaleLimits, scales);
    removeMissingScales(updatedScaleLimits, scales);
    return originalScaleLimits;
}
function doZoom(scale, amount, center, limits) {
    const fn = zoomFunctions[scale.type] || zoomFunctions.default;
    (0, _helpers.callback)(fn, [
        scale,
        amount,
        center,
        limits
    ]);
}
function doZoomRect(scale, amount, from, to, limits) {
    const fn = zoomRectFunctions[scale.type] || zoomRectFunctions.default;
    (0, _helpers.callback)(fn, [
        scale,
        amount,
        from,
        to,
        limits
    ]);
}
function getCenter(chart) {
    const ca = chart.chartArea;
    return {
        x: (ca.left + ca.right) / 2,
        y: (ca.top + ca.bottom) / 2
    };
}
/**
 * @param chart The chart instance
 * @param {number | {x?: number, y?: number, focalPoint?: {x: number, y: number}}} amount The zoom percentage or percentages and focal point
 * @param {string} [transition] Which transition mode to use. Defaults to 'none'
 */ function zoom(chart, amount, transition = "none") {
    const { x =1 , y =1 , focalPoint =getCenter(chart)  } = typeof amount === "number" ? {
        x: amount,
        y: amount
    } : amount;
    const state = getState(chart);
    const { options: { limits , zoom: zoomOptions  }  } = state;
    storeOriginalScaleLimits(chart, state);
    const xEnabled = x !== 1;
    const yEnabled = y !== 1;
    const enabledScales = getEnabledScalesByPoint(zoomOptions, focalPoint, chart);
    (0, _helpers.each)(enabledScales || chart.scales, function(scale) {
        if (scale.isHorizontal() && xEnabled) doZoom(scale, x, focalPoint, limits);
        else if (!scale.isHorizontal() && yEnabled) doZoom(scale, y, focalPoint, limits);
    });
    chart.update(transition);
    (0, _helpers.callback)(zoomOptions.onZoom, [
        {
            chart
        }
    ]);
}
function zoomRect(chart, p0, p1, transition = "none") {
    const state = getState(chart);
    const { options: { limits , zoom: zoomOptions  }  } = state;
    const { mode ="xy"  } = zoomOptions;
    storeOriginalScaleLimits(chart, state);
    const xEnabled = directionEnabled(mode, "x", chart);
    const yEnabled = directionEnabled(mode, "y", chart);
    (0, _helpers.each)(chart.scales, function(scale) {
        if (scale.isHorizontal() && xEnabled) doZoomRect(scale, p0.x, p1.x, limits);
        else if (!scale.isHorizontal() && yEnabled) doZoomRect(scale, p0.y, p1.y, limits);
    });
    chart.update(transition);
    (0, _helpers.callback)(zoomOptions.onZoom, [
        {
            chart
        }
    ]);
}
function zoomScale(chart, scaleId, range, transition = "none") {
    storeOriginalScaleLimits(chart, getState(chart));
    const scale = chart.scales[scaleId];
    updateRange(scale, range, undefined, true);
    chart.update(transition);
}
function resetZoom(chart, transition = "default") {
    const state = getState(chart);
    const originalScaleLimits = storeOriginalScaleLimits(chart, state);
    (0, _helpers.each)(chart.scales, function(scale) {
        const scaleOptions = scale.options;
        if (originalScaleLimits[scale.id]) {
            scaleOptions.min = originalScaleLimits[scale.id].min.options;
            scaleOptions.max = originalScaleLimits[scale.id].max.options;
        } else {
            delete scaleOptions.min;
            delete scaleOptions.max;
        }
    });
    chart.update(transition);
    (0, _helpers.callback)(state.options.zoom.onZoomComplete, [
        {
            chart
        }
    ]);
}
function getOriginalRange(state, scaleId) {
    const original = state.originalScaleLimits[scaleId];
    if (!original) return;
    const { min , max  } = original;
    return (0, _helpers.valueOrDefault)(max.options, max.scale) - (0, _helpers.valueOrDefault)(min.options, min.scale);
}
function getZoomLevel(chart) {
    const state = getState(chart);
    let min = 1;
    let max = 1;
    (0, _helpers.each)(chart.scales, function(scale) {
        const origRange = getOriginalRange(state, scale.id);
        if (origRange) {
            const level = Math.round(origRange / (scale.max - scale.min) * 100) / 100;
            min = Math.min(min, level);
            max = Math.max(max, level);
        }
    });
    return min < 1 ? min : max;
}
function panScale(scale, delta, limits, state) {
    const { panDelta  } = state;
    // Add possible cumulative delta from previous pan attempts where scale did not change
    const storedDelta = panDelta[scale.id] || 0;
    if ((0, _helpers.sign)(storedDelta) === (0, _helpers.sign)(delta)) delta += storedDelta;
    const fn = panFunctions[scale.type] || panFunctions.default;
    if ((0, _helpers.callback)(fn, [
        scale,
        delta,
        limits
    ])) // The scale changed, reset cumulative delta
    panDelta[scale.id] = 0;
    else // The scale did not change, store cumulative delta
    panDelta[scale.id] = delta;
}
function pan(chart, delta, enabledScales, transition = "none") {
    const { x =0 , y =0  } = typeof delta === "number" ? {
        x: delta,
        y: delta
    } : delta;
    const state = getState(chart);
    const { options: { pan: panOptions , limits  }  } = state;
    const { onPan  } = panOptions || {};
    storeOriginalScaleLimits(chart, state);
    const xEnabled = x !== 0;
    const yEnabled = y !== 0;
    (0, _helpers.each)(enabledScales || chart.scales, function(scale) {
        if (scale.isHorizontal() && xEnabled) panScale(scale, x, limits, state);
        else if (!scale.isHorizontal() && yEnabled) panScale(scale, y, limits, state);
    });
    chart.update(transition);
    (0, _helpers.callback)(onPan, [
        {
            chart
        }
    ]);
}
function getInitialScaleBounds(chart) {
    const state = getState(chart);
    const scaleBounds = {};
    for (const scaleId of Object.keys(chart.scales)){
        const { min , max  } = state.originalScaleLimits[scaleId] || {
            min: {},
            max: {}
        };
        scaleBounds[scaleId] = {
            min: min.scale,
            max: max.scale
        };
    }
    return scaleBounds;
}
function isZoomedOrPanned(chart) {
    const scaleBounds = getInitialScaleBounds(chart);
    for (const scaleId of Object.keys(chart.scales)){
        const { min: originalMin , max: originalMax  } = scaleBounds[scaleId];
        if (originalMin !== undefined && chart.scales[scaleId].min !== originalMin) return true;
        if (originalMax !== undefined && chart.scales[scaleId].max !== originalMax) return true;
    }
    return false;
}
function removeHandler(chart, type) {
    const { handlers  } = getState(chart);
    const handler = handlers[type];
    if (handler && handler.target) {
        handler.target.removeEventListener(type, handler);
        delete handlers[type];
    }
}
function addHandler(chart, target, type, handler) {
    const { handlers , options  } = getState(chart);
    const oldHandler = handlers[type];
    if (oldHandler && oldHandler.target === target) // already attached
    return;
    removeHandler(chart, type);
    handlers[type] = (event)=>handler(chart, event, options);
    handlers[type].target = target;
    target.addEventListener(type, handlers[type]);
}
function mouseMove(chart, event) {
    const state = getState(chart);
    if (state.dragStart) {
        state.dragging = true;
        state.dragEnd = event;
        chart.update("none");
    }
}
function keyDown(chart, event) {
    const state = getState(chart);
    if (!state.dragStart || event.key !== "Escape") return;
    removeHandler(chart, "keydown");
    state.dragging = false;
    state.dragStart = state.dragEnd = null;
    chart.update("none");
}
function zoomStart(chart, event, zoomOptions) {
    const { onZoomStart , onZoomRejected  } = zoomOptions;
    if (onZoomStart) {
        const { left: offsetX , top: offsetY  } = event.target.getBoundingClientRect();
        const point = {
            x: event.clientX - offsetX,
            y: event.clientY - offsetY
        };
        if ((0, _helpers.callback)(onZoomStart, [
            {
                chart,
                event,
                point
            }
        ]) === false) {
            (0, _helpers.callback)(onZoomRejected, [
                {
                    chart,
                    event
                }
            ]);
            return false;
        }
    }
}
function mouseDown(chart, event) {
    const state = getState(chart);
    const { pan: panOptions , zoom: zoomOptions = {}  } = state.options;
    if (event.button !== 0 || keyPressed(getModifierKey(panOptions), event) || keyNotPressed(getModifierKey(zoomOptions.drag), event)) return (0, _helpers.callback)(zoomOptions.onZoomRejected, [
        {
            chart,
            event
        }
    ]);
    if (zoomStart(chart, event, zoomOptions) === false) return;
    state.dragStart = event;
    addHandler(chart, chart.canvas, "mousemove", mouseMove);
    addHandler(chart, window.document, "keydown", keyDown);
}
function computeDragRect(chart, mode, beginPoint, endPoint) {
    const { left: offsetX , top: offsetY  } = beginPoint.target.getBoundingClientRect();
    const xEnabled = directionEnabled(mode, "x", chart);
    const yEnabled = directionEnabled(mode, "y", chart);
    let { top , left , right , bottom , width: chartWidth , height: chartHeight  } = chart.chartArea;
    if (xEnabled) {
        left = Math.min(beginPoint.clientX, endPoint.clientX) - offsetX;
        right = Math.max(beginPoint.clientX, endPoint.clientX) - offsetX;
    }
    if (yEnabled) {
        top = Math.min(beginPoint.clientY, endPoint.clientY) - offsetY;
        bottom = Math.max(beginPoint.clientY, endPoint.clientY) - offsetY;
    }
    const width = right - left;
    const height = bottom - top;
    return {
        left,
        top,
        right,
        bottom,
        width,
        height,
        zoomX: xEnabled && width ? 1 + (chartWidth - width) / chartWidth : 1,
        zoomY: yEnabled && height ? 1 + (chartHeight - height) / chartHeight : 1
    };
}
function mouseUp(chart, event) {
    const state = getState(chart);
    if (!state.dragStart) return;
    removeHandler(chart, "mousemove");
    const { mode , onZoomComplete , drag: { threshold =0  }  } = state.options.zoom;
    const rect = computeDragRect(chart, mode, state.dragStart, event);
    const distanceX = directionEnabled(mode, "x", chart) ? rect.width : 0;
    const distanceY = directionEnabled(mode, "y", chart) ? rect.height : 0;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    // Remove drag start and end before chart update to stop drawing selected area
    state.dragStart = state.dragEnd = null;
    if (distance <= threshold) {
        state.dragging = false;
        chart.update("none");
        return;
    }
    zoomRect(chart, {
        x: rect.left,
        y: rect.top
    }, {
        x: rect.right,
        y: rect.bottom
    }, "zoom");
    setTimeout(()=>state.dragging = false, 500);
    (0, _helpers.callback)(onZoomComplete, [
        {
            chart
        }
    ]);
}
function wheelPreconditions(chart, event, zoomOptions) {
    // Before preventDefault, check if the modifier key required and pressed
    if (keyNotPressed(getModifierKey(zoomOptions.wheel), event)) {
        (0, _helpers.callback)(zoomOptions.onZoomRejected, [
            {
                chart,
                event
            }
        ]);
        return;
    }
    if (zoomStart(chart, event, zoomOptions) === false) return;
    // Prevent the event from triggering the default behavior (e.g. content scrolling).
    if (event.cancelable) event.preventDefault();
    // Firefox always fires the wheel event twice:
    // First without the delta and right after that once with the delta properties.
    if (event.deltaY === undefined) return;
    return true;
}
function wheel(chart, event) {
    const { handlers: { onZoomComplete  } , options: { zoom: zoomOptions  }  } = getState(chart);
    if (!wheelPreconditions(chart, event, zoomOptions)) return;
    const rect = event.target.getBoundingClientRect();
    const speed = 1 + (event.deltaY >= 0 ? -zoomOptions.wheel.speed : zoomOptions.wheel.speed);
    const amount = {
        x: speed,
        y: speed,
        focalPoint: {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    };
    zoom(chart, amount);
    if (onZoomComplete) onZoomComplete();
}
function addDebouncedHandler(chart, name, handler, delay) {
    if (handler) getState(chart).handlers[name] = debounce(()=>(0, _helpers.callback)(handler, [
            {
                chart
            }
        ]), delay);
}
function addListeners(chart, options) {
    const canvas = chart.canvas;
    const { wheel: wheelOptions , drag: dragOptions , onZoomComplete  } = options.zoom;
    // Install listeners. Do this dynamically based on options so that we can turn zoom on and off
    // We also want to make sure listeners aren't always on. E.g. if you're scrolling down a page
    // and the mouse goes over a chart you don't want it intercepted unless the plugin is enabled
    if (wheelOptions.enabled) {
        addHandler(chart, canvas, "wheel", wheel);
        addDebouncedHandler(chart, "onZoomComplete", onZoomComplete, 250);
    } else removeHandler(chart, "wheel");
    if (dragOptions.enabled) {
        addHandler(chart, canvas, "mousedown", mouseDown);
        addHandler(chart, canvas.ownerDocument, "mouseup", mouseUp);
    } else {
        removeHandler(chart, "mousedown");
        removeHandler(chart, "mousemove");
        removeHandler(chart, "mouseup");
        removeHandler(chart, "keydown");
    }
}
function removeListeners(chart) {
    removeHandler(chart, "mousedown");
    removeHandler(chart, "mousemove");
    removeHandler(chart, "mouseup");
    removeHandler(chart, "wheel");
    removeHandler(chart, "click");
    removeHandler(chart, "keydown");
}
function createEnabler(chart, state) {
    return function(recognizer, event) {
        const { pan: panOptions , zoom: zoomOptions = {}  } = state.options;
        if (!panOptions || !panOptions.enabled) return false;
        const srcEvent = event && event.srcEvent;
        if (!srcEvent) return true;
        if (!state.panning && event.pointerType === "mouse" && (keyNotPressed(getModifierKey(panOptions), srcEvent) || keyPressed(getModifierKey(zoomOptions.drag), srcEvent))) {
            (0, _helpers.callback)(panOptions.onPanRejected, [
                {
                    chart,
                    event
                }
            ]);
            return false;
        }
        return true;
    };
}
function pinchAxes(p0, p1) {
    // fingers position difference
    const pinchX = Math.abs(p0.clientX - p1.clientX);
    const pinchY = Math.abs(p0.clientY - p1.clientY);
    // diagonal fingers will change both (xy) axes
    const p = pinchX / pinchY;
    let x, y;
    if (p > 0.3 && p < 1.7) x = y = true;
    else if (pinchX > pinchY) x = true;
    else y = true;
    return {
        x,
        y
    };
}
function handlePinch(chart, state, e) {
    if (state.scale) {
        const { center , pointers  } = e;
        // Hammer reports the total scaling. We need the incremental amount
        const zoomPercent = 1 / state.scale * e.scale;
        const rect = e.target.getBoundingClientRect();
        const pinch = pinchAxes(pointers[0], pointers[1]);
        const mode = state.options.zoom.mode;
        const amount = {
            x: pinch.x && directionEnabled(mode, "x", chart) ? zoomPercent : 1,
            y: pinch.y && directionEnabled(mode, "y", chart) ? zoomPercent : 1,
            focalPoint: {
                x: center.x - rect.left,
                y: center.y - rect.top
            }
        };
        zoom(chart, amount);
        // Keep track of overall scale
        state.scale = e.scale;
    }
}
function startPinch(chart, state) {
    if (state.options.zoom.pinch.enabled) state.scale = 1;
}
function endPinch(chart, state, e) {
    if (state.scale) {
        handlePinch(chart, state, e);
        state.scale = null; // reset
        (0, _helpers.callback)(state.options.zoom.onZoomComplete, [
            {
                chart
            }
        ]);
    }
}
function handlePan(chart, state, e) {
    const delta = state.delta;
    if (delta) {
        state.panning = true;
        pan(chart, {
            x: e.deltaX - delta.x,
            y: e.deltaY - delta.y
        }, state.panScales);
        state.delta = {
            x: e.deltaX,
            y: e.deltaY
        };
    }
}
function startPan(chart, state, event) {
    const { enabled , onPanStart , onPanRejected  } = state.options.pan;
    if (!enabled) return;
    const rect = event.target.getBoundingClientRect();
    const point = {
        x: event.center.x - rect.left,
        y: event.center.y - rect.top
    };
    if ((0, _helpers.callback)(onPanStart, [
        {
            chart,
            event,
            point
        }
    ]) === false) return (0, _helpers.callback)(onPanRejected, [
        {
            chart,
            event
        }
    ]);
    state.panScales = getEnabledScalesByPoint(state.options.pan, point, chart);
    state.delta = {
        x: 0,
        y: 0
    };
    clearTimeout(state.panEndTimeout);
    handlePan(chart, state, event);
}
function endPan(chart, state) {
    state.delta = null;
    if (state.panning) {
        state.panEndTimeout = setTimeout(()=>state.panning = false, 500);
        (0, _helpers.callback)(state.options.pan.onPanComplete, [
            {
                chart
            }
        ]);
    }
}
const hammers = new WeakMap();
function startHammer(chart, options) {
    const state = getState(chart);
    const canvas = chart.canvas;
    const { pan: panOptions , zoom: zoomOptions  } = options;
    const mc = new (0, _hammerjsDefault.default).Manager(canvas);
    if (zoomOptions && zoomOptions.pinch.enabled) {
        mc.add(new (0, _hammerjsDefault.default).Pinch());
        mc.on("pinchstart", ()=>startPinch(chart, state));
        mc.on("pinch", (e)=>handlePinch(chart, state, e));
        mc.on("pinchend", (e)=>endPinch(chart, state, e));
    }
    if (panOptions && panOptions.enabled) {
        mc.add(new (0, _hammerjsDefault.default).Pan({
            threshold: panOptions.threshold,
            enable: createEnabler(chart, state)
        }));
        mc.on("panstart", (e)=>startPan(chart, state, e));
        mc.on("panmove", (e)=>handlePan(chart, state, e));
        mc.on("panend", ()=>endPan(chart, state));
    }
    hammers.set(chart, mc);
}
function stopHammer(chart) {
    const mc = hammers.get(chart);
    if (mc) {
        mc.remove("pinchstart");
        mc.remove("pinch");
        mc.remove("pinchend");
        mc.remove("panstart");
        mc.remove("pan");
        mc.remove("panend");
        mc.destroy();
        hammers.delete(chart);
    }
}
var version = "2.0.0";
function draw(chart, caller, options) {
    const dragOptions = options.zoom.drag;
    const { dragStart , dragEnd  } = getState(chart);
    if (dragOptions.drawTime !== caller || !dragEnd) return;
    const { left , top , width , height  } = computeDragRect(chart, options.zoom.mode, dragStart, dragEnd);
    const ctx = chart.ctx;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = dragOptions.backgroundColor || "rgba(225,225,225,0.3)";
    ctx.fillRect(left, top, width, height);
    if (dragOptions.borderWidth > 0) {
        ctx.lineWidth = dragOptions.borderWidth;
        ctx.strokeStyle = dragOptions.borderColor || "rgba(225,225,225)";
        ctx.strokeRect(left, top, width, height);
    }
    ctx.restore();
}
var plugin = {
    id: "zoom",
    version,
    defaults: {
        pan: {
            enabled: false,
            mode: "xy",
            threshold: 10,
            modifierKey: null
        },
        zoom: {
            wheel: {
                enabled: false,
                speed: 0.1,
                modifierKey: null
            },
            drag: {
                enabled: false,
                drawTime: "beforeDatasetsDraw",
                modifierKey: null
            },
            pinch: {
                enabled: false
            },
            mode: "xy"
        }
    },
    start: function(chart, _args, options) {
        const state = getState(chart);
        state.options = options;
        if (Object.prototype.hasOwnProperty.call(options.zoom, "enabled")) console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`.");
        if (Object.prototype.hasOwnProperty.call(options.zoom, "overScaleMode") || Object.prototype.hasOwnProperty.call(options.pan, "overScaleMode")) console.warn("The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired).");
        if (0, _hammerjsDefault.default) startHammer(chart, options);
        chart.pan = (delta, panScales, transition)=>pan(chart, delta, panScales, transition);
        chart.zoom = (args, transition)=>zoom(chart, args, transition);
        chart.zoomRect = (p0, p1, transition)=>zoomRect(chart, p0, p1, transition);
        chart.zoomScale = (id, range, transition)=>zoomScale(chart, id, range, transition);
        chart.resetZoom = (transition)=>resetZoom(chart, transition);
        chart.getZoomLevel = ()=>getZoomLevel(chart);
        chart.getInitialScaleBounds = ()=>getInitialScaleBounds(chart);
        chart.isZoomedOrPanned = ()=>isZoomedOrPanned(chart);
    },
    beforeEvent (chart) {
        const state = getState(chart);
        if (state.panning || state.dragging) // cancel any event handling while panning or dragging
        return false;
    },
    beforeUpdate: function(chart, args, options) {
        const state = getState(chart);
        state.options = options;
        addListeners(chart, options);
    },
    beforeDatasetsDraw (chart, _args, options) {
        draw(chart, "beforeDatasetsDraw", options);
    },
    afterDatasetsDraw (chart, _args, options) {
        draw(chart, "afterDatasetsDraw", options);
    },
    beforeDraw (chart, _args, options) {
        draw(chart, "beforeDraw", options);
    },
    afterDraw (chart, _args, options) {
        draw(chart, "afterDraw", options);
    },
    stop: function(chart) {
        removeListeners(chart);
        if (0, _hammerjsDefault.default) stopHammer(chart);
        removeState(chart);
    },
    panFunctions,
    zoomFunctions,
    zoomRectFunctions
};

},{"hammerjs":"lHwvQ","chart.js/helpers":"dxsY3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHwvQ":[function(require,module,exports) {
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */ (function(window1, document1, exportName, undefined) {
    "use strict";
    var VENDOR_PREFIXES = [
        "",
        "webkit",
        "Moz",
        "MS",
        "ms",
        "o"
    ];
    var TEST_ELEMENT = document1.createElement("div");
    var TYPE_FUNCTION = "function";
    var round = Math.round;
    var abs = Math.abs;
    var now = Date.now;
    /**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */ function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
    }
    /**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */ function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
            each(arg, context[fn], context);
            return true;
        }
        return false;
    }
    /**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */ function each(obj, iterator, context) {
        var i;
        if (!obj) return;
        if (obj.forEach) obj.forEach(iterator, context);
        else if (obj.length !== undefined) {
            i = 0;
            while(i < obj.length){
                iterator.call(context, obj[i], i, obj);
                i++;
            }
        } else for(i in obj)obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
    }
    /**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */ function deprecate(method, name, message) {
        var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
        return function() {
            var e = new Error("get-stack-trace");
            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
            var log = window1.console && (window1.console.warn || window1.console.log);
            if (log) log.call(window1.console, deprecationMessage, stack);
            return method.apply(this, arguments);
        };
    }
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */ var assign;
    if (typeof Object.assign !== "function") assign = function assign(target) {
        if (target === undefined || target === null) throw new TypeError("Cannot convert undefined or null to object");
        var output = Object(target);
        for(var index = 1; index < arguments.length; index++){
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for(var nextKey in source)if (source.hasOwnProperty(nextKey)) output[nextKey] = source[nextKey];
            }
        }
        return output;
    };
    else assign = Object.assign;
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */ var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;
        while(i < keys.length){
            if (!merge || merge && dest[keys[i]] === undefined) dest[keys[i]] = src[keys[i]];
            i++;
        }
        return dest;
    }, "extend", "Use `assign`.");
    /**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */ var merge = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
    }, "merge", "Use `assign`.");
    /**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */ function inherit(child, base, properties) {
        var baseP = base.prototype, childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;
        if (properties) assign(childP, properties);
    }
    /**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */ function bindFn(fn, context) {
        return function boundFn() {
            return fn.apply(context, arguments);
        };
    }
    /**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */ function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) return val.apply(args ? args[0] || undefined : undefined, args);
        return val;
    }
    /**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */ function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
    }
    /**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function addEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.addEventListener(type, handler, false);
        });
    }
    /**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function removeEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.removeEventListener(type, handler, false);
        });
    }
    /**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */ function hasParent(node, parent) {
        while(node){
            if (node == parent) return true;
            node = node.parentNode;
        }
        return false;
    }
    /**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */ function inStr(str, find) {
        return str.indexOf(find) > -1;
    }
    /**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */ function splitStr(str) {
        return str.trim().split(/\s+/g);
    }
    /**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */ function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) return src.indexOf(find);
        else {
            var i = 0;
            while(i < src.length){
                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) return i;
                i++;
            }
            return -1;
        }
    }
    /**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */ function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
    }
    /**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */ function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;
        while(i < src.length){
            var val = key ? src[i][key] : src[i];
            if (inArray(values, val) < 0) results.push(src[i]);
            values[i] = val;
            i++;
        }
        if (sort) {
            if (!key) results = results.sort();
            else results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
        return results;
    }
    /**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */ function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;
        while(i < VENDOR_PREFIXES.length){
            prefix = VENDOR_PREFIXES[i];
            prop = prefix ? prefix + camelProp : property;
            if (prop in obj) return prop;
            i++;
        }
        return undefined;
    }
    /**
 * get a unique id
 * @returns {number} uniqueId
 */ var _uniqueId = 1;
    function uniqueId() {
        return _uniqueId++;
    }
    /**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */ function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window1;
    }
    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    var SUPPORT_TOUCH = "ontouchstart" in window1;
    var SUPPORT_POINTER_EVENTS = prefixed(window1, "PointerEvent") !== undefined;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
    var INPUT_TYPE_TOUCH = "touch";
    var INPUT_TYPE_PEN = "pen";
    var INPUT_TYPE_MOUSE = "mouse";
    var INPUT_TYPE_KINECT = "kinect";
    var COMPUTE_INTERVAL = 25;
    var INPUT_START = 1;
    var INPUT_MOVE = 2;
    var INPUT_END = 4;
    var INPUT_CANCEL = 8;
    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;
    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
    var PROPS_XY = [
        "x",
        "y"
    ];
    var PROPS_CLIENT_XY = [
        "clientX",
        "clientY"
    ];
    /**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */ function Input(manager, callback) {
        var self1 = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget;
        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.
        this.domHandler = function(ev) {
            if (boolOrFn(manager.options.enable, [
                manager
            ])) self1.handler(ev);
        };
        this.init();
    }
    Input.prototype = {
        /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */ handler: function() {},
        /**
     * bind the events
     */ init: function() {
            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },
        /**
     * unbind the events
     */ destroy: function() {
            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
    };
    /**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */ function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;
        if (inputClass) Type = inputClass;
        else if (SUPPORT_POINTER_EVENTS) Type = PointerEventInput;
        else if (SUPPORT_ONLY_TOUCH) Type = TouchInput;
        else if (!SUPPORT_TOUCH) Type = MouseInput;
        else Type = TouchMouseInput;
        return new Type(manager, inputHandler);
    }
    /**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */ function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;
        if (isFirst) manager.session = {};
        // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'
        input.eventType = eventType;
        // compute scale, rotation etc
        computeInputData(manager, input);
        // emit secret event
        manager.emit("hammer.input", input);
        manager.recognize(input);
        manager.session.prevInput = input;
    }
    /**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */ function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length;
        // store the first input to calculate the distance and direction
        if (!session.firstInput) session.firstInput = simpleCloneInputData(input);
        // to compute scale and rotation we need to store the multiple touches
        if (pointersLength > 1 && !session.firstMultiple) session.firstMultiple = simpleCloneInputData(input);
        else if (pointersLength === 1) session.firstMultiple = false;
        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input);
        // find the correct target
        var target = manager.element;
        if (hasParent(input.srcEvent.target, target)) target = input.srcEvent.target;
        input.target = target;
    }
    function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};
        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
            prevDelta = session.prevDelta = {
                x: prevInput.deltaX || 0,
                y: prevInput.deltaY || 0
            };
            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }
        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
    }
    /**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */ function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
            var deltaX = input.deltaX - last.deltaX;
            var deltaY = input.deltaY - last.deltaY;
            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY);
            session.lastInterval = input;
        } else {
            // use latest velocity info if it doesn't overtake a minimum period
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }
        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
    }
    /**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */ function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;
        while(i < input.pointers.length){
            pointers[i] = {
                clientX: round(input.pointers[i].clientX),
                clientY: round(input.pointers[i].clientY)
            };
            i++;
        }
        return {
            timeStamp: now(),
            pointers: pointers,
            center: getCenter(pointers),
            deltaX: input.deltaX,
            deltaY: input.deltaY
        };
    }
    /**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */ function getCenter(pointers) {
        var pointersLength = pointers.length;
        // no need to loop when only one touch
        if (pointersLength === 1) return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
        var x = 0, y = 0, i = 0;
        while(i < pointersLength){
            x += pointers[i].clientX;
            y += pointers[i].clientY;
            i++;
        }
        return {
            x: round(x / pointersLength),
            y: round(y / pointersLength)
        };
    }
    /**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */ function getVelocity(deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    }
    /**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */ function getDirection(x, y) {
        if (x === y) return DIRECTION_NONE;
        if (abs(x) >= abs(y)) return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }
    /**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */ function getDistance(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
    }
    /**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */ function getAngle(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
    }
    /**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */ function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }
    /**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */ function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }
    var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
    };
    var MOUSE_ELEMENT_EVENTS = "mousedown";
    var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
    /**
 * Mouse events input
 * @constructor
 * @extends Input
 */ function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state
        Input.apply(this, arguments);
    }
    inherit(MouseInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function MEhandler(ev) {
            var eventType = MOUSE_INPUT_MAP[ev.type];
            // on start we want to have the left mouse button down
            if (eventType & INPUT_START && ev.button === 0) this.pressed = true;
            if (eventType & INPUT_MOVE && ev.which !== 1) eventType = INPUT_END;
            // mouse must be down
            if (!this.pressed) return;
            if (eventType & INPUT_END) this.pressed = false;
            this.callback(this.manager, eventType, {
                pointers: [
                    ev
                ],
                changedPointers: [
                    ev
                ],
                pointerType: INPUT_TYPE_MOUSE,
                srcEvent: ev
            });
        }
    });
    var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
    };
    // in IE10 the pointer types is defined as an enum
    var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
    };
    var POINTER_ELEMENT_EVENTS = "pointerdown";
    var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
    // IE10 has prefixed support, and case-sensitive
    if (window1.MSPointerEvent && !window1.PointerEvent) {
        POINTER_ELEMENT_EVENTS = "MSPointerDown";
        POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
    }
    /**
 * Pointer events input
 * @constructor
 * @extends Input
 */ function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
    }
    inherit(PointerEventInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function PEhandler(ev) {
            var store = this.store;
            var removePointer = false;
            var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
            var isTouch = pointerType == INPUT_TYPE_TOUCH;
            // get index of the event in the store
            var storeIndex = inArray(store, ev.pointerId, "pointerId");
            // start and mouse must be down
            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
                if (storeIndex < 0) {
                    store.push(ev);
                    storeIndex = store.length - 1;
                }
            } else if (eventType & (INPUT_END | INPUT_CANCEL)) removePointer = true;
            // it not found, so the pointer hasn't been down (so it's probably a hover)
            if (storeIndex < 0) return;
            // update the event in the store
            store[storeIndex] = ev;
            this.callback(this.manager, eventType, {
                pointers: store,
                changedPointers: [
                    ev
                ],
                pointerType: pointerType,
                srcEvent: ev
            });
            if (removePointer) // remove from the store
            store.splice(storeIndex, 1);
        }
    });
    var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
    var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Touch events input
 * @constructor
 * @extends Input
 */ function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
    }
    inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
            // should we handle the touch events?
            if (type === INPUT_START) this.started = true;
            if (!this.started) return;
            var touches = normalizeSingleTouches.call(this, ev, type);
            // when done, reset the started state
            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) this.started = false;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);
        if (type & (INPUT_END | INPUT_CANCEL)) all = uniqueArray(all.concat(changed), "identifier", true);
        return [
            all,
            changed
        ];
    }
    var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */ function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
    }
    inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
            var type = TOUCH_INPUT_MAP[ev.type];
            var touches = getTouches.call(this, ev, type);
            if (!touches) return;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds;
        // when there is only one touch, the process can be simplified
        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            return [
                allTouches,
                allTouches
            ];
        }
        var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
        // get target touches from touches
        targetTouches = allTouches.filter(function(touch) {
            return hasParent(touch.target, target);
        });
        // collect touches
        if (type === INPUT_START) {
            i = 0;
            while(i < targetTouches.length){
                targetIds[targetTouches[i].identifier] = true;
                i++;
            }
        }
        // filter changed touches to only contain touches that exist in the collected target ids
        i = 0;
        while(i < changedTouches.length){
            if (targetIds[changedTouches[i].identifier]) changedTargetTouches.push(changedTouches[i]);
            // cleanup removed touches
            if (type & (INPUT_END | INPUT_CANCEL)) delete targetIds[changedTouches[i].identifier];
            i++;
        }
        if (!changedTargetTouches.length) return;
        return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
            changedTargetTouches
        ];
    }
    /**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */ var DEDUP_TIMEOUT = 2500;
    var DEDUP_DISTANCE = 25;
    function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
    }
    inherit(TouchMouseInput, Input, {
        /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */ handler: function TMEhandler(manager, inputEvent, inputData) {
            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH, isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) return;
            // when we're in a touch event, record touches to  de-dupe synthetic mouse event
            if (isTouch) recordTouches.call(this, inputEvent, inputData);
            else if (isMouse && isSyntheticEvent.call(this, inputData)) return;
            this.callback(manager, inputEvent, inputData);
        },
        /**
     * remove the event listeners
     */ destroy: function destroy() {
            this.touch.destroy();
            this.mouse.destroy();
        }
    });
    function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
            this.primaryTouch = eventData.changedPointers[0].identifier;
            setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) setLastTouch.call(this, eventData);
    }
    function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];
        if (touch.identifier === this.primaryTouch) {
            var lastTouch = {
                x: touch.clientX,
                y: touch.clientY
            };
            this.lastTouches.push(lastTouch);
            var lts = this.lastTouches;
            var removeLastTouch = function() {
                var i = lts.indexOf(lastTouch);
                if (i > -1) lts.splice(i, 1);
            };
            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
    }
    function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
        for(var i = 0; i < this.lastTouches.length; i++){
            var t = this.lastTouches[i];
            var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) return true;
        }
        return false;
    }
    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
    // magical touchAction value
    var TOUCH_ACTION_COMPUTE = "compute";
    var TOUCH_ACTION_AUTO = "auto";
    var TOUCH_ACTION_MANIPULATION = "manipulation"; // not implemented
    var TOUCH_ACTION_NONE = "none";
    var TOUCH_ACTION_PAN_X = "pan-x";
    var TOUCH_ACTION_PAN_Y = "pan-y";
    var TOUCH_ACTION_MAP = getTouchActionProps();
    /**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */ function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
    }
    TouchAction.prototype = {
        /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */ set: function(value) {
            // find out the touch-action by the event handlers
            if (value == TOUCH_ACTION_COMPUTE) value = this.compute();
            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
            this.actions = value.toLowerCase().trim();
        },
        /**
     * just re-set the touchAction value
     */ update: function() {
            this.set(this.manager.options.touchAction);
        },
        /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */ compute: function() {
            var actions = [];
            each(this.manager.recognizers, function(recognizer) {
                if (boolOrFn(recognizer.options.enable, [
                    recognizer
                ])) actions = actions.concat(recognizer.getTouchAction());
            });
            return cleanTouchActions(actions.join(" "));
        },
        /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */ preventDefaults: function(input) {
            var srcEvent = input.srcEvent;
            var direction = input.offsetDirection;
            // if the touch action did prevented once this session
            if (this.manager.session.prevented) {
                srcEvent.preventDefault();
                return;
            }
            var actions = this.actions;
            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
            if (hasNone) {
                //do not prevent defaults if this is a tap gesture
                var isTapPointer = input.pointers.length === 1;
                var isTapMovement = input.distance < 2;
                var isTapTouchTime = input.deltaTime < 250;
                if (isTapPointer && isTapMovement && isTapTouchTime) return;
            }
            if (hasPanX && hasPanY) // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) return this.preventSrc(srcEvent);
        },
        /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */ preventSrc: function(srcEvent) {
            this.manager.session.prevented = true;
            srcEvent.preventDefault();
        }
    };
    /**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */ function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) return TOUCH_ACTION_NONE;
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning
        if (hasPanX && hasPanY) return TOUCH_ACTION_NONE;
        // pan-x OR pan-y
        if (hasPanX || hasPanY) return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        // manipulation
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) return TOUCH_ACTION_MANIPULATION;
        return TOUCH_ACTION_AUTO;
    }
    function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) return false;
        var touchMap = {};
        var cssSupports = window1.CSS && window1.CSS.supports;
        [
            "auto",
            "manipulation",
            "pan-y",
            "pan-x",
            "pan-x pan-y",
            "none"
        ].forEach(function(val) {
            // If css.supports is not supported but there is native touch-action assume it supports
            // all values. This is the case for IE 10 and 11.
            touchMap[val] = cssSupports ? window1.CSS.supports("touch-action", val) : true;
        });
        return touchMap;
    }
    /**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */ var STATE_POSSIBLE = 1;
    var STATE_BEGAN = 2;
    var STATE_CHANGED = 4;
    var STATE_ENDED = 8;
    var STATE_RECOGNIZED = STATE_ENDED;
    var STATE_CANCELLED = 16;
    var STATE_FAILED = 32;
    /**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */ function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null;
        // default is enable true
        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
    }
    Recognizer.prototype = {
        /**
     * @virtual
     * @type {Object}
     */ defaults: {},
        /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */ set: function(options) {
            assign(this.options, options);
            // also update the touchAction, in case something changed about the directions/enabled state
            this.manager && this.manager.touchAction.update();
            return this;
        },
        /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ recognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) return this;
            var simultaneous = this.simultaneous;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (!simultaneous[otherRecognizer.id]) {
                simultaneous[otherRecognizer.id] = otherRecognizer;
                otherRecognizer.recognizeWith(this);
            }
            return this;
        },
        /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRecognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            delete this.simultaneous[otherRecognizer.id];
            return this;
        },
        /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ requireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "requireFailure", this)) return this;
            var requireFail = this.requireFail;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (inArray(requireFail, otherRecognizer) === -1) {
                requireFail.push(otherRecognizer);
                otherRecognizer.requireFailure(this);
            }
            return this;
        },
        /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRequireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            var index = inArray(this.requireFail, otherRecognizer);
            if (index > -1) this.requireFail.splice(index, 1);
            return this;
        },
        /**
     * has require failures boolean
     * @returns {boolean}
     */ hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */ canRecognizeWith: function(otherRecognizer) {
            return !!this.simultaneous[otherRecognizer.id];
        },
        /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */ emit: function(input) {
            var self1 = this;
            var state = this.state;
            function emit(event) {
                self1.manager.emit(event, input);
            }
            // 'panstart' and 'panmove'
            if (state < STATE_ENDED) emit(self1.options.event + stateStr(state));
            emit(self1.options.event); // simple 'eventName' events
            if (input.additionalEvent) emit(input.additionalEvent);
            // panend and pancancel
            if (state >= STATE_ENDED) emit(self1.options.event + stateStr(state));
        },
        /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */ tryEmit: function(input) {
            if (this.canEmit()) return this.emit(input);
            // it's failing anyway
            this.state = STATE_FAILED;
        },
        /**
     * can we emit?
     * @returns {boolean}
     */ canEmit: function() {
            var i = 0;
            while(i < this.requireFail.length){
                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) return false;
                i++;
            }
            return true;
        },
        /**
     * update the recognizer
     * @param {Object} inputData
     */ recognize: function(inputData) {
            // make a new copy of the inputData
            // so we can change the inputData without messing up the other recognizers
            var inputDataClone = assign({}, inputData);
            // is is enabled and allow recognizing?
            if (!boolOrFn(this.options.enable, [
                this,
                inputDataClone
            ])) {
                this.reset();
                this.state = STATE_FAILED;
                return;
            }
            // reset when we've reached the end
            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) this.state = STATE_POSSIBLE;
            this.state = this.process(inputDataClone);
            // the recognizer has recognized a gesture
            // so trigger an event
            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) this.tryEmit(inputDataClone);
        },
        /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */ process: function(inputData) {},
        /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */ getTouchAction: function() {},
        /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */ reset: function() {}
    };
    /**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */ function stateStr(state) {
        if (state & STATE_CANCELLED) return "cancel";
        else if (state & STATE_ENDED) return "end";
        else if (state & STATE_CHANGED) return "move";
        else if (state & STATE_BEGAN) return "start";
        return "";
    }
    /**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */ function directionStr(direction) {
        if (direction == DIRECTION_DOWN) return "down";
        else if (direction == DIRECTION_UP) return "up";
        else if (direction == DIRECTION_LEFT) return "left";
        else if (direction == DIRECTION_RIGHT) return "right";
        return "";
    }
    /**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */ function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;
        if (manager) return manager.get(otherRecognizer);
        return otherRecognizer;
    }
    /**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */ function AttrRecognizer() {
        Recognizer.apply(this, arguments);
    }
    inherit(AttrRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof AttrRecognizer
     */ defaults: {
            /**
         * @type {Number}
         * @default 1
         */ pointers: 1
        },
        /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */ attrTest: function(input) {
            var optionPointers = this.options.pointers;
            return optionPointers === 0 || input.pointers.length === optionPointers;
        },
        /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */ process: function(input) {
            var state = this.state;
            var eventType = input.eventType;
            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
            var isValid = this.attrTest(input);
            // on cancel input and we've recognized before, return STATE_CANCELLED
            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) return state | STATE_CANCELLED;
            else if (isRecognized || isValid) {
                if (eventType & INPUT_END) return state | STATE_ENDED;
                else if (!(state & STATE_BEGAN)) return STATE_BEGAN;
                return state | STATE_CHANGED;
            }
            return STATE_FAILED;
        }
    });
    /**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
    }
    inherit(PanRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PanRecognizer
     */ defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: DIRECTION_ALL
        },
        getTouchAction: function() {
            var direction = this.options.direction;
            var actions = [];
            if (direction & DIRECTION_HORIZONTAL) actions.push(TOUCH_ACTION_PAN_Y);
            if (direction & DIRECTION_VERTICAL) actions.push(TOUCH_ACTION_PAN_X);
            return actions;
        },
        directionTest: function(input) {
            var options = this.options;
            var hasMoved = true;
            var distance = input.distance;
            var direction = input.direction;
            var x = input.deltaX;
            var y = input.deltaY;
            // lock to axis?
            if (!(direction & options.direction)) {
                if (options.direction & DIRECTION_HORIZONTAL) {
                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                    hasMoved = x != this.pX;
                    distance = Math.abs(input.deltaX);
                } else {
                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                    hasMoved = y != this.pY;
                    distance = Math.abs(input.deltaY);
                }
            }
            input.direction = direction;
            return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function(input) {
            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function(input) {
            this.pX = input.deltaX;
            this.pY = input.deltaY;
            var direction = directionStr(input.direction);
            if (direction) input.additionalEvent = this.options.event + direction;
            this._super.emit.call(this, input);
        }
    });
    /**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */ function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(PinchRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function(input) {
            if (input.scale !== 1) {
                var inOut = input.scale < 1 ? "in" : "out";
                input.additionalEvent = this.options.event + inOut;
            }
            this._super.emit.call(this, input);
        }
    });
    /**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */ function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
    }
    inherit(PressRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PressRecognizer
     */ defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9 // a minimal movement is ok, but keep it low
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_AUTO
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTime = input.deltaTime > options.time;
            this._input = input;
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) this.reset();
            else if (input.eventType & INPUT_START) {
                this.reset();
                this._timer = setTimeoutContext(function() {
                    this.state = STATE_RECOGNIZED;
                    this.tryEmit();
                }, options.time, this);
            } else if (input.eventType & INPUT_END) return STATE_RECOGNIZED;
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(input) {
            if (this.state !== STATE_RECOGNIZED) return;
            if (input && input.eventType & INPUT_END) this.manager.emit(this.options.event + "up", input);
            else {
                this._input.timeStamp = now();
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */ function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(RotateRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof RotateRecognizer
     */ defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
    });
    /**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(SwipeRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof SwipeRecognizer
     */ defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
            pointers: 1
        },
        getTouchAction: function() {
            return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function(input) {
            var direction = this.options.direction;
            var velocity;
            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) velocity = input.overallVelocity;
            else if (direction & DIRECTION_HORIZONTAL) velocity = input.overallVelocityX;
            else if (direction & DIRECTION_VERTICAL) velocity = input.overallVelocityY;
            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function(input) {
            var direction = directionStr(input.offsetDirection);
            if (direction) this.manager.emit(this.options.event + direction, input);
            this.manager.emit(this.options.event, input);
        }
    });
    /**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */ function TapRecognizer() {
        Recognizer.apply(this, arguments);
        // previous time and center,
        // used for tap counting
        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
    }
    inherit(TapRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10 // a multi-tap can be a bit off the initial position
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_MANIPULATION
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTouchTime = input.deltaTime < options.time;
            this.reset();
            if (input.eventType & INPUT_START && this.count === 0) return this.failTimeout();
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (validMovement && validTouchTime && validPointers) {
                if (input.eventType != INPUT_END) return this.failTimeout();
                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
                this.pTime = input.timeStamp;
                this.pCenter = input.center;
                if (!validMultiTap || !validInterval) this.count = 1;
                else this.count += 1;
                this._input = input;
                // if tap count matches we have recognized it,
                // else it has began recognizing...
                var tapCount = this.count % options.taps;
                if (tapCount === 0) {
                    // no failing requirements, immediately trigger the tap event
                    // or wait as long as the multitap interval to trigger
                    if (!this.hasRequireFailures()) return STATE_RECOGNIZED;
                    else {
                        this._timer = setTimeoutContext(function() {
                            this.state = STATE_RECOGNIZED;
                            this.tryEmit();
                        }, options.interval, this);
                        return STATE_BEGAN;
                    }
                }
            }
            return STATE_FAILED;
        },
        failTimeout: function() {
            this._timer = setTimeoutContext(function() {
                this.state = STATE_FAILED;
            }, this.options.interval, this);
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            if (this.state == STATE_RECOGNIZED) {
                this._input.tapCount = this.count;
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
    }
    /**
 * @const {string}
 */ Hammer.VERSION = "2.0.7";
    /**
 * default settings
 * @namespace
 */ Hammer.defaults = {
        /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */ domEvents: false,
        /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */ touchAction: TOUCH_ACTION_COMPUTE,
        /**
     * @type {Boolean}
     * @default true
     */ enable: true,
        /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */ inputTarget: null,
        /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */ inputClass: null,
        /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */ preset: [
            // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
            [
                RotateRecognizer,
                {
                    enable: false
                }
            ],
            [
                PinchRecognizer,
                {
                    enable: false
                },
                [
                    "rotate"
                ]
            ],
            [
                SwipeRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                }
            ],
            [
                PanRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                },
                [
                    "swipe"
                ]
            ],
            [
                TapRecognizer
            ],
            [
                TapRecognizer,
                {
                    event: "doubletap",
                    taps: 2
                },
                [
                    "tap"
                ]
            ],
            [
                PressRecognizer
            ]
        ],
        /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */ cssProps: {
            /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userSelect: "none",
            /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */ touchSelect: "none",
            /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */ touchCallout: "none",
            /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */ contentZooming: "none",
            /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userDrag: "none",
            /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */ tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var STOP = 1;
    var FORCED_STOP = 2;
    /**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function(item) {
            var recognizer = this.add(new item[0](item[1]));
            item[2] && recognizer.recognizeWith(item[2]);
            item[3] && recognizer.requireFailure(item[3]);
        }, this);
    }
    Manager.prototype = {
        /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */ set: function(options) {
            assign(this.options, options);
            // Options that need a little more setup
            if (options.touchAction) this.touchAction.update();
            if (options.inputTarget) {
                // Clean up existing event listeners and reinitialize
                this.input.destroy();
                this.input.target = options.inputTarget;
                this.input.init();
            }
            return this;
        },
        /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */ stop: function(force) {
            this.session.stopped = force ? FORCED_STOP : STOP;
        },
        /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */ recognize: function(inputData) {
            var session = this.session;
            if (session.stopped) return;
            // run the touch-action polyfill
            this.touchAction.preventDefaults(inputData);
            var recognizer;
            var recognizers = this.recognizers;
            // this holds the recognizer that is being recognized.
            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
            // if no recognizer is detecting a thing, it is set to `null`
            var curRecognizer = session.curRecognizer;
            // reset when the last recognizer is recognized
            // or when we're in a new session
            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) curRecognizer = session.curRecognizer = null;
            var i = 0;
            while(i < recognizers.length){
                recognizer = recognizers[i];
                // find out if we are allowed try to recognize the input for this one.
                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
                //      that is being recognized.
                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
                //      this can be setup with the `recognizeWith()` method on the recognizer.
                if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || // 2
                recognizer.canRecognizeWith(curRecognizer))) recognizer.recognize(inputData);
                else recognizer.reset();
                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
                // current active recognizer. but only if we don't already have an active recognizer
                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) curRecognizer = session.curRecognizer = recognizer;
                i++;
            }
        },
        /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */ get: function(recognizer) {
            if (recognizer instanceof Recognizer) return recognizer;
            var recognizers = this.recognizers;
            for(var i = 0; i < recognizers.length; i++){
                if (recognizers[i].options.event == recognizer) return recognizers[i];
            }
            return null;
        },
        /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */ add: function(recognizer) {
            if (invokeArrayArg(recognizer, "add", this)) return this;
            // remove existing
            var existing = this.get(recognizer.options.event);
            if (existing) this.remove(existing);
            this.recognizers.push(recognizer);
            recognizer.manager = this;
            this.touchAction.update();
            return recognizer;
        },
        /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */ remove: function(recognizer) {
            if (invokeArrayArg(recognizer, "remove", this)) return this;
            recognizer = this.get(recognizer);
            // let's make sure this recognizer exists
            if (recognizer) {
                var recognizers = this.recognizers;
                var index = inArray(recognizers, recognizer);
                if (index !== -1) {
                    recognizers.splice(index, 1);
                    this.touchAction.update();
                }
            }
            return this;
        },
        /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */ on: function(events, handler) {
            if (events === undefined) return;
            if (handler === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                handlers[event] = handlers[event] || [];
                handlers[event].push(handler);
            });
            return this;
        },
        /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */ off: function(events, handler) {
            if (events === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                if (!handler) delete handlers[event];
                else handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            });
            return this;
        },
        /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */ emit: function(event, data) {
            // we also want to trigger dom events
            if (this.options.domEvents) triggerDomEvent(event, data);
            // no handlers, so skip it all
            var handlers = this.handlers[event] && this.handlers[event].slice();
            if (!handlers || !handlers.length) return;
            data.type = event;
            data.preventDefault = function() {
                data.srcEvent.preventDefault();
            };
            var i = 0;
            while(i < handlers.length){
                handlers[i](data);
                i++;
            }
        },
        /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */ destroy: function() {
            this.element && toggleCssProps(this, false);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null;
        }
    };
    /**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */ function toggleCssProps(manager, add) {
        var element = manager.element;
        if (!element.style) return;
        var prop;
        each(manager.options.cssProps, function(value, name) {
            prop = prefixed(element.style, name);
            if (add) {
                manager.oldCssProps[prop] = element.style[prop];
                element.style[prop] = value;
            } else element.style[prop] = manager.oldCssProps[prop] || "";
        });
        if (!add) manager.oldCssProps = {};
    }
    /**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */ function triggerDomEvent(event, data) {
        var gestureEvent = document1.createEvent("Event");
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
    }
    assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
    });
    // this prevents errors when Hammer is loaded in the presence of an AMD
    //  style loader but by script tag, not by the loader.
    var freeGlobal = typeof window1 !== "undefined" ? window1 : typeof self !== "undefined" ? self : {}; // jshint ignore:line
    freeGlobal.Hammer = Hammer;
    if (typeof define === "function" && define.amd) define(function() {
        return Hammer;
    });
    else if (module.exports) module.exports = Hammer;
    else window1[exportName] = Hammer;
})(window, document, "Hammer");

},{}],"dxsY3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("../dist/helpers.js");
parcelHelpers.exportAll(_helpersJs, exports);

},{"../dist/helpers.js":"2ZYxS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ZYxS":[function(require,module,exports) {
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HALF_PI", ()=>(0, _helpersSegmentJs.H));
parcelHelpers.export(exports, "INFINITY", ()=>(0, _helpersSegmentJs.b2));
parcelHelpers.export(exports, "PI", ()=>(0, _helpersSegmentJs.P));
parcelHelpers.export(exports, "PITAU", ()=>(0, _helpersSegmentJs.b1));
parcelHelpers.export(exports, "QUARTER_PI", ()=>(0, _helpersSegmentJs.b4));
parcelHelpers.export(exports, "RAD_PER_DEG", ()=>(0, _helpersSegmentJs.b3));
parcelHelpers.export(exports, "TAU", ()=>(0, _helpersSegmentJs.T));
parcelHelpers.export(exports, "TWO_THIRDS_PI", ()=>(0, _helpersSegmentJs.b5));
parcelHelpers.export(exports, "_addGrace", ()=>(0, _helpersSegmentJs.R));
parcelHelpers.export(exports, "_alignPixel", ()=>(0, _helpersSegmentJs.X));
parcelHelpers.export(exports, "_alignStartEnd", ()=>(0, _helpersSegmentJs.a2));
parcelHelpers.export(exports, "_angleBetween", ()=>(0, _helpersSegmentJs.p));
parcelHelpers.export(exports, "_angleDiff", ()=>(0, _helpersSegmentJs.b6));
parcelHelpers.export(exports, "_arrayUnique", ()=>(0, _helpersSegmentJs._));
parcelHelpers.export(exports, "_attachContext", ()=>(0, _helpersSegmentJs.a8));
parcelHelpers.export(exports, "_bezierCurveTo", ()=>(0, _helpersSegmentJs.as));
parcelHelpers.export(exports, "_bezierInterpolation", ()=>(0, _helpersSegmentJs.ap));
parcelHelpers.export(exports, "_boundSegment", ()=>(0, _helpersSegmentJs.ax));
parcelHelpers.export(exports, "_boundSegments", ()=>(0, _helpersSegmentJs.an));
parcelHelpers.export(exports, "_capitalize", ()=>(0, _helpersSegmentJs.a5));
parcelHelpers.export(exports, "_computeSegments", ()=>(0, _helpersSegmentJs.am));
parcelHelpers.export(exports, "_createResolver", ()=>(0, _helpersSegmentJs.a9));
parcelHelpers.export(exports, "_decimalPlaces", ()=>(0, _helpersSegmentJs.aK));
parcelHelpers.export(exports, "_deprecated", ()=>(0, _helpersSegmentJs.aV));
parcelHelpers.export(exports, "_descriptors", ()=>(0, _helpersSegmentJs.aa));
parcelHelpers.export(exports, "_elementsEqual", ()=>(0, _helpersSegmentJs.ah));
parcelHelpers.export(exports, "_factorize", ()=>(0, _helpersSegmentJs.N));
parcelHelpers.export(exports, "_filterBetween", ()=>(0, _helpersSegmentJs.aO));
parcelHelpers.export(exports, "_getParentNode", ()=>(0, _helpersSegmentJs.I));
parcelHelpers.export(exports, "_getStartAndCountOfVisiblePoints", ()=>(0, _helpersSegmentJs.q));
parcelHelpers.export(exports, "_int16Range", ()=>(0, _helpersSegmentJs.W));
parcelHelpers.export(exports, "_isBetween", ()=>(0, _helpersSegmentJs.aj));
parcelHelpers.export(exports, "_isClickEvent", ()=>(0, _helpersSegmentJs.ai));
parcelHelpers.export(exports, "_isDomSupported", ()=>(0, _helpersSegmentJs.M));
parcelHelpers.export(exports, "_isPointInArea", ()=>(0, _helpersSegmentJs.C));
parcelHelpers.export(exports, "_limitValue", ()=>(0, _helpersSegmentJs.S));
parcelHelpers.export(exports, "_longestText", ()=>(0, _helpersSegmentJs.aN));
parcelHelpers.export(exports, "_lookup", ()=>(0, _helpersSegmentJs.aP));
parcelHelpers.export(exports, "_lookupByKey", ()=>(0, _helpersSegmentJs.B));
parcelHelpers.export(exports, "_measureText", ()=>(0, _helpersSegmentJs.V));
parcelHelpers.export(exports, "_merger", ()=>(0, _helpersSegmentJs.aT));
parcelHelpers.export(exports, "_mergerIf", ()=>(0, _helpersSegmentJs.aU));
parcelHelpers.export(exports, "_normalizeAngle", ()=>(0, _helpersSegmentJs.ay));
parcelHelpers.export(exports, "_parseObjectDataRadialScale", ()=>(0, _helpersSegmentJs.y));
parcelHelpers.export(exports, "_pointInLine", ()=>(0, _helpersSegmentJs.aq));
parcelHelpers.export(exports, "_readValueToProps", ()=>(0, _helpersSegmentJs.ak));
parcelHelpers.export(exports, "_rlookupByKey", ()=>(0, _helpersSegmentJs.A));
parcelHelpers.export(exports, "_scaleRangesChanged", ()=>(0, _helpersSegmentJs.w));
parcelHelpers.export(exports, "_setMinAndMaxByKey", ()=>(0, _helpersSegmentJs.aG));
parcelHelpers.export(exports, "_splitKey", ()=>(0, _helpersSegmentJs.aW));
parcelHelpers.export(exports, "_steppedInterpolation", ()=>(0, _helpersSegmentJs.ao));
parcelHelpers.export(exports, "_steppedLineTo", ()=>(0, _helpersSegmentJs.ar));
parcelHelpers.export(exports, "_textX", ()=>(0, _helpersSegmentJs.aB));
parcelHelpers.export(exports, "_toLeftRightCenter", ()=>(0, _helpersSegmentJs.a1));
parcelHelpers.export(exports, "_updateBezierControlPoints", ()=>(0, _helpersSegmentJs.al));
parcelHelpers.export(exports, "addRoundedRectPath", ()=>(0, _helpersSegmentJs.au));
parcelHelpers.export(exports, "almostEquals", ()=>(0, _helpersSegmentJs.aJ));
parcelHelpers.export(exports, "almostWhole", ()=>(0, _helpersSegmentJs.aI));
parcelHelpers.export(exports, "callback", ()=>(0, _helpersSegmentJs.Q));
parcelHelpers.export(exports, "clearCanvas", ()=>(0, _helpersSegmentJs.af));
parcelHelpers.export(exports, "clipArea", ()=>(0, _helpersSegmentJs.Y));
parcelHelpers.export(exports, "clone", ()=>(0, _helpersSegmentJs.aS));
parcelHelpers.export(exports, "color", ()=>(0, _helpersSegmentJs.c));
parcelHelpers.export(exports, "createContext", ()=>(0, _helpersSegmentJs.j));
parcelHelpers.export(exports, "debounce", ()=>(0, _helpersSegmentJs.ad));
parcelHelpers.export(exports, "defined", ()=>(0, _helpersSegmentJs.h));
parcelHelpers.export(exports, "distanceBetweenPoints", ()=>(0, _helpersSegmentJs.aE));
parcelHelpers.export(exports, "drawPoint", ()=>(0, _helpersSegmentJs.at));
parcelHelpers.export(exports, "drawPointLegend", ()=>(0, _helpersSegmentJs.aD));
parcelHelpers.export(exports, "each", ()=>(0, _helpersSegmentJs.F));
parcelHelpers.export(exports, "easingEffects", ()=>(0, _helpersSegmentJs.e));
parcelHelpers.export(exports, "finiteOrDefault", ()=>(0, _helpersSegmentJs.O));
parcelHelpers.export(exports, "fontString", ()=>(0, _helpersSegmentJs.a$));
parcelHelpers.export(exports, "formatNumber", ()=>(0, _helpersSegmentJs.o));
parcelHelpers.export(exports, "getAngleFromPoint", ()=>(0, _helpersSegmentJs.D));
parcelHelpers.export(exports, "getHoverColor", ()=>(0, _helpersSegmentJs.aR));
parcelHelpers.export(exports, "getMaximumSize", ()=>(0, _helpersSegmentJs.G));
parcelHelpers.export(exports, "getRelativePosition", ()=>(0, _helpersSegmentJs.z));
parcelHelpers.export(exports, "getRtlAdapter", ()=>(0, _helpersSegmentJs.az));
parcelHelpers.export(exports, "getStyle", ()=>(0, _helpersSegmentJs.a_));
parcelHelpers.export(exports, "isArray", ()=>(0, _helpersSegmentJs.b));
parcelHelpers.export(exports, "isFinite", ()=>(0, _helpersSegmentJs.g));
parcelHelpers.export(exports, "isFunction", ()=>(0, _helpersSegmentJs.a7));
parcelHelpers.export(exports, "isNullOrUndef", ()=>(0, _helpersSegmentJs.k));
parcelHelpers.export(exports, "isNumber", ()=>(0, _helpersSegmentJs.x));
parcelHelpers.export(exports, "isObject", ()=>(0, _helpersSegmentJs.i));
parcelHelpers.export(exports, "isPatternOrGradient", ()=>(0, _helpersSegmentJs.aQ));
parcelHelpers.export(exports, "listenArrayEvents", ()=>(0, _helpersSegmentJs.l));
parcelHelpers.export(exports, "log10", ()=>(0, _helpersSegmentJs.aM));
parcelHelpers.export(exports, "merge", ()=>(0, _helpersSegmentJs.a4));
parcelHelpers.export(exports, "mergeIf", ()=>(0, _helpersSegmentJs.ab));
parcelHelpers.export(exports, "niceNum", ()=>(0, _helpersSegmentJs.aH));
parcelHelpers.export(exports, "noop", ()=>(0, _helpersSegmentJs.aF));
parcelHelpers.export(exports, "overrideTextDirection", ()=>(0, _helpersSegmentJs.aA));
parcelHelpers.export(exports, "readUsedSize", ()=>(0, _helpersSegmentJs.J));
parcelHelpers.export(exports, "renderText", ()=>(0, _helpersSegmentJs.Z));
parcelHelpers.export(exports, "requestAnimFrame", ()=>(0, _helpersSegmentJs.r));
parcelHelpers.export(exports, "resolve", ()=>(0, _helpersSegmentJs.a));
parcelHelpers.export(exports, "resolveObjectKey", ()=>(0, _helpersSegmentJs.f));
parcelHelpers.export(exports, "restoreTextDirection", ()=>(0, _helpersSegmentJs.aC));
parcelHelpers.export(exports, "retinaScale", ()=>(0, _helpersSegmentJs.ae));
parcelHelpers.export(exports, "setsEqual", ()=>(0, _helpersSegmentJs.ag));
parcelHelpers.export(exports, "sign", ()=>(0, _helpersSegmentJs.s));
parcelHelpers.export(exports, "splineCurve", ()=>(0, _helpersSegmentJs.aY));
parcelHelpers.export(exports, "splineCurveMonotone", ()=>(0, _helpersSegmentJs.aZ));
parcelHelpers.export(exports, "supportsEventListenerOptions", ()=>(0, _helpersSegmentJs.K));
parcelHelpers.export(exports, "throttled", ()=>(0, _helpersSegmentJs.L));
parcelHelpers.export(exports, "toDegrees", ()=>(0, _helpersSegmentJs.U));
parcelHelpers.export(exports, "toDimension", ()=>(0, _helpersSegmentJs.n));
parcelHelpers.export(exports, "toFont", ()=>(0, _helpersSegmentJs.a0));
parcelHelpers.export(exports, "toFontString", ()=>(0, _helpersSegmentJs.aX));
parcelHelpers.export(exports, "toLineHeight", ()=>(0, _helpersSegmentJs.b0));
parcelHelpers.export(exports, "toPadding", ()=>(0, _helpersSegmentJs.E));
parcelHelpers.export(exports, "toPercentage", ()=>(0, _helpersSegmentJs.m));
parcelHelpers.export(exports, "toRadians", ()=>(0, _helpersSegmentJs.t));
parcelHelpers.export(exports, "toTRBL", ()=>(0, _helpersSegmentJs.av));
parcelHelpers.export(exports, "toTRBLCorners", ()=>(0, _helpersSegmentJs.aw));
parcelHelpers.export(exports, "uid", ()=>(0, _helpersSegmentJs.ac));
parcelHelpers.export(exports, "unclipArea", ()=>(0, _helpersSegmentJs.$));
parcelHelpers.export(exports, "unlistenArrayEvents", ()=>(0, _helpersSegmentJs.u));
parcelHelpers.export(exports, "valueOrDefault", ()=>(0, _helpersSegmentJs.v));
var _helpersSegmentJs = require("./chunks/helpers.segment.js");

},{"./chunks/helpers.segment.js":"7oQuk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oQuk":[function(require,module,exports) {
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ /**
 * @namespace Chart.helpers
 */ /**
 * An empty function that can be used, for example, for optional callback.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>unclipArea);
parcelHelpers.export(exports, "A", ()=>_rlookupByKey);
parcelHelpers.export(exports, "B", ()=>_lookupByKey);
parcelHelpers.export(exports, "C", ()=>_isPointInArea);
parcelHelpers.export(exports, "D", ()=>getAngleFromPoint);
parcelHelpers.export(exports, "E", ()=>toPadding);
parcelHelpers.export(exports, "F", ()=>each);
parcelHelpers.export(exports, "G", ()=>getMaximumSize);
parcelHelpers.export(exports, "H", ()=>HALF_PI);
parcelHelpers.export(exports, "I", ()=>_getParentNode);
parcelHelpers.export(exports, "J", ()=>readUsedSize);
parcelHelpers.export(exports, "K", ()=>supportsEventListenerOptions);
parcelHelpers.export(exports, "L", ()=>throttled);
parcelHelpers.export(exports, "M", ()=>_isDomSupported);
parcelHelpers.export(exports, "N", ()=>_factorize);
parcelHelpers.export(exports, "O", ()=>finiteOrDefault);
parcelHelpers.export(exports, "P", ()=>PI);
parcelHelpers.export(exports, "Q", ()=>callback);
parcelHelpers.export(exports, "R", ()=>_addGrace);
parcelHelpers.export(exports, "S", ()=>_limitValue);
parcelHelpers.export(exports, "T", ()=>TAU);
parcelHelpers.export(exports, "U", ()=>toDegrees);
parcelHelpers.export(exports, "V", ()=>_measureText);
parcelHelpers.export(exports, "W", ()=>_int16Range);
parcelHelpers.export(exports, "X", ()=>_alignPixel);
parcelHelpers.export(exports, "Y", ()=>clipArea);
parcelHelpers.export(exports, "Z", ()=>renderText);
parcelHelpers.export(exports, "_", ()=>_arrayUnique);
parcelHelpers.export(exports, "a", ()=>resolve);
parcelHelpers.export(exports, "a$", ()=>fontString);
parcelHelpers.export(exports, "a0", ()=>toFont);
parcelHelpers.export(exports, "a1", ()=>_toLeftRightCenter);
parcelHelpers.export(exports, "a2", ()=>_alignStartEnd);
parcelHelpers.export(exports, "a3", ()=>overrides);
parcelHelpers.export(exports, "a4", ()=>merge);
parcelHelpers.export(exports, "a5", ()=>_capitalize);
parcelHelpers.export(exports, "a6", ()=>descriptors);
parcelHelpers.export(exports, "a7", ()=>isFunction);
parcelHelpers.export(exports, "a8", ()=>_attachContext);
parcelHelpers.export(exports, "a9", ()=>_createResolver);
parcelHelpers.export(exports, "aA", ()=>overrideTextDirection);
parcelHelpers.export(exports, "aB", ()=>_textX);
parcelHelpers.export(exports, "aC", ()=>restoreTextDirection);
parcelHelpers.export(exports, "aD", ()=>drawPointLegend);
parcelHelpers.export(exports, "aE", ()=>distanceBetweenPoints);
parcelHelpers.export(exports, "aF", ()=>noop);
parcelHelpers.export(exports, "aG", ()=>_setMinAndMaxByKey);
parcelHelpers.export(exports, "aH", ()=>niceNum);
parcelHelpers.export(exports, "aI", ()=>almostWhole);
parcelHelpers.export(exports, "aJ", ()=>almostEquals);
parcelHelpers.export(exports, "aK", ()=>_decimalPlaces);
parcelHelpers.export(exports, "aL", ()=>Ticks);
parcelHelpers.export(exports, "aM", ()=>log10);
parcelHelpers.export(exports, "aN", ()=>_longestText);
parcelHelpers.export(exports, "aO", ()=>_filterBetween);
parcelHelpers.export(exports, "aP", ()=>_lookup);
parcelHelpers.export(exports, "aQ", ()=>isPatternOrGradient);
parcelHelpers.export(exports, "aR", ()=>getHoverColor);
parcelHelpers.export(exports, "aS", ()=>clone$1);
parcelHelpers.export(exports, "aT", ()=>_merger);
parcelHelpers.export(exports, "aU", ()=>_mergerIf);
parcelHelpers.export(exports, "aV", ()=>_deprecated);
parcelHelpers.export(exports, "aW", ()=>_splitKey);
parcelHelpers.export(exports, "aX", ()=>toFontString);
parcelHelpers.export(exports, "aY", ()=>splineCurve);
parcelHelpers.export(exports, "aZ", ()=>splineCurveMonotone);
parcelHelpers.export(exports, "a_", ()=>getStyle);
parcelHelpers.export(exports, "aa", ()=>_descriptors);
parcelHelpers.export(exports, "ab", ()=>mergeIf);
parcelHelpers.export(exports, "ac", ()=>uid);
parcelHelpers.export(exports, "ad", ()=>debounce);
parcelHelpers.export(exports, "ae", ()=>retinaScale);
parcelHelpers.export(exports, "af", ()=>clearCanvas);
parcelHelpers.export(exports, "ag", ()=>setsEqual);
parcelHelpers.export(exports, "ah", ()=>_elementsEqual);
parcelHelpers.export(exports, "ai", ()=>_isClickEvent);
parcelHelpers.export(exports, "aj", ()=>_isBetween);
parcelHelpers.export(exports, "ak", ()=>_readValueToProps);
parcelHelpers.export(exports, "al", ()=>_updateBezierControlPoints);
parcelHelpers.export(exports, "am", ()=>_computeSegments);
parcelHelpers.export(exports, "an", ()=>_boundSegments);
parcelHelpers.export(exports, "ao", ()=>_steppedInterpolation);
parcelHelpers.export(exports, "ap", ()=>_bezierInterpolation);
parcelHelpers.export(exports, "aq", ()=>_pointInLine);
parcelHelpers.export(exports, "ar", ()=>_steppedLineTo);
parcelHelpers.export(exports, "as", ()=>_bezierCurveTo);
parcelHelpers.export(exports, "at", ()=>drawPoint);
parcelHelpers.export(exports, "au", ()=>addRoundedRectPath);
parcelHelpers.export(exports, "av", ()=>toTRBL);
parcelHelpers.export(exports, "aw", ()=>toTRBLCorners);
parcelHelpers.export(exports, "ax", ()=>_boundSegment);
parcelHelpers.export(exports, "ay", ()=>_normalizeAngle);
parcelHelpers.export(exports, "az", ()=>getRtlAdapter);
parcelHelpers.export(exports, "b", ()=>isArray);
parcelHelpers.export(exports, "b0", ()=>toLineHeight);
parcelHelpers.export(exports, "b1", ()=>PITAU);
parcelHelpers.export(exports, "b2", ()=>INFINITY);
parcelHelpers.export(exports, "b3", ()=>RAD_PER_DEG);
parcelHelpers.export(exports, "b4", ()=>QUARTER_PI);
parcelHelpers.export(exports, "b5", ()=>TWO_THIRDS_PI);
parcelHelpers.export(exports, "b6", ()=>_angleDiff);
parcelHelpers.export(exports, "c", ()=>color);
parcelHelpers.export(exports, "d", ()=>defaults);
parcelHelpers.export(exports, "e", ()=>effects$1);
parcelHelpers.export(exports, "f", ()=>resolveObjectKey);
parcelHelpers.export(exports, "g", ()=>isNumberFinite);
parcelHelpers.export(exports, "h", ()=>defined);
parcelHelpers.export(exports, "i", ()=>isObject);
parcelHelpers.export(exports, "j", ()=>createContext);
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
parcelHelpers.export(exports, "z", ()=>getRelativePosition);
function noop() {
/* noop */ }
/**
 * Returns a unique id, sequentially generated from a global variable.
 */ const uid = (()=>{
    let id = 0;
    return ()=>id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isNullOrUndef(value) {
    return value === null || typeof value === "undefined";
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */ function isArray(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") return true;
    return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */ function isNumberFinite(value) {
    return (typeof value === "number" || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */ function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */ function valueOrDefault(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
}
const toPercentage = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : +value / dimension;
const toDimension = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */ function callback(fn, args, thisArg) {
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
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */ function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */ function clone$1(source) {
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
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */ function _merger(key, target, source, options) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
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
    let current;
    for(let i = 0; i < ilen; ++i){
        current = sources[i];
        if (!isObject(current)) continue;
        const keys = Object.keys(current);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, current, options);
    }
    return target;
}
function mergeIf(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return merge(target, source, {
        merger: _mergerIf
    });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */ function _mergerIf(key, target, source) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) mergeIf(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = clone$1(sval);
}
/**
 * @private
 */ function _deprecated(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
// resolveObjectKey resolver cache
const keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    "": (v)=>v,
    // default resolvers
    x: (o)=>o.x,
    y: (o)=>o.y
};
/**
 * @private
 */ function _splitKey(key) {
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
function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
}
/**
 * @private
 */ function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value)=>typeof value !== "undefined";
const isFunction = (value)=>typeof value === "function";
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const setsEqual = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
/**
 * @param e - The event
 * @private
 */ function _isClickEvent(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
/**
 * @alias Chart.helpers.math
 * @namespace
 */ const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */ function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */ function _factorize(value) {
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
function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */ function _setMinAndMaxByKey(array, target, property) {
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
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */ function _decimalPlaces(x) {
    if (!isNumberFinite(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    return {
        angle,
        distance: radialDistanceFromCenter
    };
}
function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */ function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */ function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */ function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */ function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */ function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */ function _isBetween(value, start, end, epsilon = 1e-6) {
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
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */ const _lookupByKey = (table, key, value, last)=>_lookup(table, value, last ? (index)=>{
        const ti = table[index][key];
        return ti < value || ti === value && table[index + 1][key] === value;
    } : (index)=>table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */ const _rlookupByKey = (table, key, value)=>_lookup(table, value, (index)=>table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */ function _filterBetween(values, min, max) {
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
/**
 * @param items
 */ function _arrayUnique(items) {
    const set = new Set();
    let i, ilen;
    for(i = 0, ilen = items.length; i < ilen; ++i)set.add(items[i]);
    if (set.size === ilen) return items;
    return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + " " + pixelSize + "px " + fontFamily;
}
/**
* Request animation polyfill
*/ const requestAnimFrame = function() {
    if (typeof window === "undefined") return function(callback) {
        return callback();
    };
    return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */ function throttled(fn, thisArg) {
    let ticking = false;
    return function(...args) {
        if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, args);
            });
        }
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 */ function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */ const _toLeftRightCenter = (align)=>align === "start" ? "left" : align === "end" ? "right" : "center";
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */ const _alignStartEnd = (align, start, end)=>align === "start" ? start : align === "end" ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */ const _textX = (align, left, right, rtl)=>{
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */ function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
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
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */ function _scaleRangesChanged(meta) {
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
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */ const effects = {
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
var effects$1 = effects;
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
function applyAnimationsDefaults(defaults) {
    defaults.set("animation", {
        delay: undefined,
        duration: 1000,
        easing: "easeOutQuart",
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
    });
    defaults.describe("animation", {
        _fallback: false,
        _indexable: false,
        _scriptable: (name)=>name !== "onProgress" && name !== "onComplete" && name !== "fn"
    });
    defaults.set("animations", {
        colors: {
            type: "color",
            properties: colors
        },
        numbers: {
            type: "number",
            properties: numbers
        }
    });
    defaults.describe("animations", {
        _fallback: "animation"
    });
    defaults.set("transitions", {
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
}
function applyLayoutsDefaults(defaults) {
    defaults.set("layout", {
        autoPadding: true,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
}
const intlCache = new Map();
function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
}
const formatters = {
    values (value) {
        return isArray(value) ? value : "" + value;
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
        const logDelta = log10(Math.abs(delta));
        const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return formatNumber(tickValue, locale, options);
    },
    logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
        if ([
            1,
            2,
            3,
            5,
            10,
            15
        ].includes(remain) || index > 0.8 * ticks.length) return formatters.numeric.call(this, tickValue, index, ticks);
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
function applyScaleDefaults(defaults) {
    defaults.set("scale", {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: "ticks",
        grace: 0,
        grid: {
            display: true,
            lineWidth: 1,
            drawOnChartArea: true,
            drawTicks: true,
            tickLength: 8,
            tickWidth: (_ctx, options)=>options.lineWidth,
            tickColor: (_ctx, options)=>options.color,
            offset: false
        },
        border: {
            display: true,
            dash: [],
            dashOffset: 0.0,
            width: 1
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
    defaults.route("scale.ticks", "color", "", "color");
    defaults.route("scale.grid", "color", "", "borderColor");
    defaults.route("scale.border", "color", "", "borderColor");
    defaults.route("scale.title", "color", "", "color");
    defaults.describe("scale", {
        _fallback: false,
        _scriptable: (name)=>!name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
        _indexable: (name)=>name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
    });
    defaults.describe("scales", {
        _fallback: "scale"
    });
    defaults.describe("scale.ticks", {
        _scriptable: (name)=>name !== "backdropPadding" && name !== "callback",
        _indexable: (name)=>name !== "backdropPadding"
    });
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
    constructor(_descriptors, _appliers){
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
        this.apply(_appliers);
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
    apply(appliers) {
        appliers.forEach((apply)=>apply(this));
    }
}
var defaults = /* #__PURE__ */ new Defaults({
    _scriptable: (name)=>!name.startsWith("on"),
    _indexable: (name)=>name !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
}, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
]);
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
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
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
            width = w ? w / 2 : radius;
            ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case "rectRounded":
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
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
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            ctx.closePath();
            break;
        case "crossRot":
            rad += QUARTER_PI;
        case "cross":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case "star":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            rad += QUARTER_PI;
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case "line":
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case "dash":
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
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
        if (opts.backdrop) drawBackdrop(ctx, opts.backdrop);
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
function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
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
const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */ function toLineHeight(value, size) {
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
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */ function toTRBL(value) {
    return _readValueToProps(value, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */ function toTRBLCorners(value) {
    return _readValueToProps(value, [
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ]);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */ function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */ function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === "string") size = parseInt(size, 10);
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !("" + style).match(FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = undefined;
    }
    const font = {
        family: valueOrDefault(options.family, fallback.family),
        lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
        size,
        style,
        weight: valueOrDefault(options.weight, fallback.weight),
        string: ""
    };
    font.string = toFontString(font);
    return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */ function resolve(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) continue;
        if (context !== undefined && typeof value === "function") {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && isArray(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) info.cacheable = false;
            return value;
        }
    }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */ function _addGrace(minmax, grace, beginAtZero) {
    const { min , max  } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
/**
 * Create a context inheriting parentContext
 * @param parentContext
 * @param context
 * @returns
 */ function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}
function _createResolver(scopes, prefixes = [
    ""
], rootScopes = scopes, fallback, getTarget = ()=>scopes[0]) {
    if (!defined(fallback)) fallback = _resolve("_fallback", scopes);
    const cache = {
        [Symbol.toStringTag]: "Object",
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: rootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>_createResolver([
                scope,
                ...scopes
            ], prefixes, rootScopes, fallback)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete target._keys;
            delete scopes[0][prop];
            return true;
        },
        get (target, prop) {
            return _cached(target, prop, ()=>_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        has (target, prop) {
            return getKeysFromAllScopes(target).includes(prop);
        },
        ownKeys (target) {
            return getKeysFromAllScopes(target);
        },
        set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value;
            delete target._keys;
            return true;
        }
    });
}
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: _descriptors(proxy, descriptorDefaults),
        setContext: (ctx)=>_attachContext(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>_attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete proxy[prop];
            return true;
        },
        get (target, prop, receiver) {
            return _cached(target, prop, ()=>_resolveWithContext(target, prop, receiver));
        },
        getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        set (target, prop, value) {
            proxy[prop] = value;
            delete target[prop];
            return true;
        }
    });
}
function _descriptors(proxy, defaults = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable =defaults.scriptable , _indexable =defaults.indexable , _allKeys =defaults.allKeys  } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: isFunction(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: isFunction(_indexable) ? _indexable : ()=>_indexable
    };
}
const readKey = (prefix, name)=>prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value)=>isObject(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) return target[prop];
    const value = resolve();
    target[prop] = value;
    return value;
}
function _resolveWithContext(target, prop, receiver) {
    const { _proxy , _context , _subProxy , _descriptors: descriptors  } = target;
    let value = _proxy[prop];
    if (isFunction(value) && descriptors.isScriptable(prop)) value = _resolveScriptable(prop, value, target, receiver);
    if (isArray(value) && value.length) value = _resolveArray(prop, value, target, descriptors.isIndexable);
    if (needsSubResolver(prop, value)) value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
    return value;
}
function _resolveScriptable(prop, value, target, receiver) {
    const { _proxy , _context , _subProxy , _stack  } = target;
    if (_stack.has(prop)) throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    _stack.add(prop);
    value = value(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    return value;
}
function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy , _context , _subProxy , _descriptors: descriptors  } = target;
    if (defined(_context.index) && isIndexable(prop)) value = value[_context.index % value.length];
    else if (isObject(value[0])) {
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = createSubResolver(scopes, _proxy, prop, item);
            value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
    }
    return value;
}
function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent)=>key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = getScope(key, parent);
        if (scope) {
            set.add(scope);
            const fallback = resolveFallback(scope._fallback, key, value);
            if (defined(fallback) && fallback !== key && fallback !== parentFallback) return fallback;
        } else if (scope === false && defined(parentFallback) && key !== parentFallback) return null;
    }
    return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set = new Set();
    set.add(value);
    let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
    if (key === null) return false;
    if (defined(fallback) && fallback !== prop) {
        key = addScopesFromKey(set, allScopes, fallback, key, value);
        if (key === null) return false;
    }
    return _createResolver(Array.from(set), [
        ""
    ], rootScopes, fallback, ()=>subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
    while(key)key = addScopes(set, allScopes, key, fallback, item);
    return key;
}
function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) parent[prop] = {};
    const target = parent[prop];
    if (isArray(target) && isObject(value)) return value;
    return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = _resolve(readKey(prefix, prop), scopes);
        if (defined(value)) return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
    }
}
function _resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) continue;
        const value = scope[key];
        if (defined(value)) return value;
    }
}
function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    return keys;
}
function resolveKeysFromAllScopes(scopes) {
    const set = new Set();
    for (const scope of scopes)for (const key of Object.keys(scope).filter((k)=>!k.startsWith("_")))set.add(key);
    return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
    const { iScale  } = meta;
    const { key ="r"  } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse(resolveObjectKey(item, key), index)
        };
    }
    return parsed;
}
const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis)=>indexAxis === "x" ? "y" : "x";
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01; // scaling factor for triangle Ta
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
/**
 * Adjust tangents to ensure monotonic properties
 */ function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) continue;
        if (almostEquals(deltaK[i], 0, EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) continue;
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */ function splineCurveMonotone(points, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    // Calculate slopes (deltaK) and initialize tangents (mK)
    let i, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
        if (!inArea) continue;
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
/**
 * @private
 */ function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    // Only consider points that are drawn in case the spanGaps option is used
    if (options.spanGaps) points = points.filter((pt)=>!pt.skip);
    if (options.cubicInterpolationMode === "monotone") splineCurveMonotone(points, indexAxis);
    else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) capBezierPoints(points, area);
}
/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import("../core/core.controller").default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
 * @private
 */ function _isDomSupported() {
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * @private
 */ function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") parent = parent.host;
    return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */ function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf("%") !== -1) // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    } else valueInPixels = styleValue;
    return valueInPixels;
}
const getComputedStyle = (element)=>element.ownerDocument.defaultView.getComputedStyle(element, null);
function getStyle(el, property) {
    return getComputedStyle(el).getPropertyValue(property);
}
const positions = [
    "top",
    "right",
    "bottom",
    "left"
];
function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for(let i = 0; i < 4; i++){
        const pos = positions[i];
        result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */ function getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX , offsetY  } = source;
    let box = false;
    let x, y;
    if (useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x,
        y,
        box
    };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */ function getRelativePosition(event, chart) {
    if ("native" in event) return event;
    const { canvas , currentDevicePixelRatio  } = chart;
    const style = getComputedStyle(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = getPositionedStyle(style, "padding");
    const borders = getPositionedStyle(style, "border", "width");
    const { x , y , box  } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width , height  } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = _getParentNode(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect(); // this is the border box of the container
            const containerStyle = getComputedStyle(container);
            const containerBorder = getPositionedStyle(containerStyle, "border", "width");
            const containerPadding = getPositionedStyle(containerStyle, "padding");
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
            maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
        }
    }
    return {
        width,
        height,
        maxWidth: maxWidth || INFINITY,
        maxHeight: maxHeight || INFINITY
    };
}
const round1 = (v)=>Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle(canvas);
    const margins = getPositionedStyle(style, "margin");
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width , height  } = containerSize;
    if (style.boxSizing === "content-box") {
        const borders = getPositionedStyle(style, "border", "width");
        const paddings = getPositionedStyle(style, "padding");
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
    const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
        height = containerSize.height;
        width = round1(Math.floor(height * aspectRatio));
    }
    return {
        width,
        height
    };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */ function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = deviceHeight / pixelRatio;
    chart.width = deviceWidth / pixelRatio;
    const canvas = chart.canvas;
    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */ const supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
    } catch (e) {
    // continue regardless of error
    }
    return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */ function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}
/**
 * @private
 */ function _pointInLine(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
/**
 * @private
 */ function _steppedInterpolation(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === "middle" ? t < 0.5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
/**
 * @private
 */ function _bezierInterpolation(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = _pointInLine(p1, cp1, t);
    const b = _pointInLine(cp1, cp2, t);
    const c = _pointInLine(cp2, p2, t);
    const d = _pointInLine(a, b, t);
    const e = _pointInLine(b, c, t);
    return _pointInLine(d, e, t);
}
const getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === "center") return align;
            return align === "right" ? "left" : "right";
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue("direction"),
            style.getPropertyPriority("direction")
        ];
        style.setProperty("direction", direction, "important");
        ctx.prevTextDirection = original;
    }
}
function restoreTextDirection(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
}
function propertyFn(property) {
    if (property === "angle") return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
    };
    return {
        between: _isBetween,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function normalizeSegment({ start , end , count , loop , style  }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style
    };
}
function getSegment(segment, points, bounds) {
    const { property , start: startBound , end: endBound  } = bounds;
    const { between , normalize  } = propertyFn(property);
    const count = points.length;
    let { start , end , loop  } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) end += count;
    return {
        start,
        end,
        loop,
        style: segment.style
    };
}
function _boundSegment(segment, points, bounds) {
    if (!bounds) return [
        segment
    ];
    const { property , start: startBound , end: endBound  } = bounds;
    const count = points.length;
    const { compare , between , normalize  } = propertyFn(property);
    const { start , end , loop , style  } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) continue;
        value = normalize(point[property]);
        if (value === prevValue) continue;
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
        if (subStart !== null && shouldStop()) {
            result.push(normalizeSegment({
                start: subStart,
                end: i,
                loop,
                count,
                style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) result.push(normalizeSegment({
        start: subStart,
        end,
        loop,
        count,
        style
    }));
    return result;
}
function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = _boundSegment(segments[i], line.points, bounds);
        if (sub.length) result.push(...sub);
    }
    return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) while(start < count && !points[start].skip)start++;
    while(start < count && points[start].skip)start++;
    start %= count;
    if (loop) end += start;
    while(end > start && points[end % count].skip)end--;
    end %= count;
    return {
        start,
        end
    };
}
function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) start = end;
        }
        prev = cur;
    }
    if (last !== null) result.push({
        start: start % count,
        end: last % count,
        loop
    });
    return result;
}
function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) return [];
    const loop = !!line._loop;
    const { start , end  } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) return splitByStyles(line, [
        {
            start,
            end,
            loop
        }
    ], points, segmentOptions);
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
    return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex , options: { spanGaps  }  } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) return;
        s += count;
        while(points[s % count].skip)s -= dir;
        while(points[e % count].skip)e += dir;
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = readStyle(segmentOptions.setContext(createContext(chartContext, {
                type: "segment",
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex
            })));
            if (styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
    }
    return result;
}
function readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function styleChanged(style, prevStyle) {
    return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"jyj2f":[function(require,module,exports) {

},{}],"7igeN":[function(require,module,exports) {
module.exports = JSON.parse('[{"user":"MynockGate","timeMS":1669190944147,"count":4},{"user":"MynockGate","timeMS":1669190960566,"count":5},{"user":"MynockGate","timeMS":1669191004343,"count":4},{"user":"MynockGate","timeMS":1669191024212,"count":3},{"user":"MynockGate","timeMS":1669191221615,"count":1},{"user":"BrownTownBrown","timeMS":1669192837372,"count":1},{"user":"BrownTownBrown","timeMS":1669192909994,"count":3},{"user":"Chip_Chippy","timeMS":1669230875938,"count":1},{"user":"WheatiesR1337","timeMS":1669234272456,"count":1},{"user":"BrownTownBrown","timeMS":1669234284249,"count":1},{"user":"Ben64r","timeMS":1669234310287,"count":1},{"user":"Lotharou","timeMS":1669234320208,"count":1},{"user":"BrownTownBrown","timeMS":1669234537934,"count":1},{"user":"Lotharou","timeMS":1669234549706,"count":1},{"user":"BrownTownBrown","timeMS":1669234568483,"count":3},{"user":"Lotharou","timeMS":1669235800115,"count":1},{"user":"MynockGate","timeMS":1669235843422,"count":1},{"user":"BrownTownBrown","timeMS":1669235870068,"count":1},{"user":"BrownTownBrown","timeMS":1669235983269,"count":1},{"user":"Lotharou","timeMS":1669235991211,"count":1},{"user":"MynockGate","timeMS":1669236016874,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236055934,"count":1},{"user":"MynockGate","timeMS":1669236080203,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236156624,"count":1},{"user":"BrownTownBrown","timeMS":1669236169229,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236185338,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236273040,"count":1},{"user":"MynockGate","timeMS":1669236312617,"count":1},{"user":"FridayAtElmStreet","timeMS":1669236734639,"count":1},{"user":"MynockGate","timeMS":1669236749968,"count":1},{"user":"Lotharou","timeMS":1669236772372,"count":1},{"user":"Orenfel","timeMS":1669236792348,"count":1},{"user":"Lotharou","timeMS":1669237620734,"count":1},{"user":"dbcallector","timeMS":1669237680143,"count":4},{"user":"FridayAtElmStreet","timeMS":1669238510613,"count":1},{"user":"FridayAtElmStreet","timeMS":1669239175809,"count":1},{"user":"FridayAtElmStreet","timeMS":1669241246805,"count":1},{"user":"FridayAtElmStreet","timeMS":1669242222236,"count":1},{"user":"FridayAtElmStreet","timeMS":1669244585287,"count":1},{"user":"vaultboy719","timeMS":1669250831310,"count":1},{"user":"explohd","timeMS":1669255022125,"count":5},{"user":"slim_cognito420","timeMS":1669255022169,"count":5},{"user":"MynockGate","timeMS":1669255023187,"count":5},{"user":"Lotharou","timeMS":1669255023234,"count":5},{"user":"karleygrey","timeMS":1669255023252,"count":5},{"user":"chriskeyy","timeMS":1669255023283,"count":4},{"user":"MaiyaDanny","timeMS":1669255023765,"count":4},{"user":"undeadtweak","timeMS":1669255023810,"count":5},{"user":"dluith","timeMS":1669255026871,"count":5},{"user":"SeedyEyes","timeMS":1669255027708,"count":5},{"user":"dbcallector","timeMS":1669255029198,"count":5},{"user":"ForeverMalone","timeMS":1669255031565,"count":5},{"user":"SeedyEyes","timeMS":1669255033223,"count":5},{"user":"chriskeyy","timeMS":1669255036586,"count":8},{"user":"SerDread","timeMS":1669255039254,"count":5},{"user":"SeedyEyes","timeMS":1669255041434,"count":5},{"user":"slim_cognito420","timeMS":1669255041763,"count":5},{"user":"rulerofwax","timeMS":1669255045300,"count":5},{"user":"jermw1ns","timeMS":1669261018092,"count":6},{"user":"argyle_pigeon","timeMS":1669261461277,"count":2},{"user":"Rezoli","timeMS":1669262989233,"count":1},{"user":"Rezoli","timeMS":1669263008984,"count":1},{"user":"Lotharou","timeMS":1669264171963,"count":1},{"user":"argyle_pigeon","timeMS":1669266302469,"count":4},{"user":"argyle_pigeon","timeMS":1669266403271,"count":4},{"user":"MynockGate","timeMS":1669266445605,"count":4},{"user":"SeedyEyes","timeMS":1669271457182,"count":1},{"user":"dbcallector","timeMS":1669271460861,"count":4},{"user":"Lotharou","timeMS":1669271473338,"count":1},{"user":"MynockGate","timeMS":1669271476502,"count":1},{"user":"BxgHxrns","timeMS":1669271502022,"count":1},{"user":"BrownTownBrown","timeMS":1669272713151,"count":3},{"user":"BrownTownBrown","timeMS":1669275194408,"count":3},{"user":"argyle_pigeon","timeMS":1669275202500,"count":5},{"user":"MynockGate","timeMS":1669275214069,"count":5},{"user":"jakenosnek","timeMS":1669275242518,"count":3},{"user":"BrownTownBrown","timeMS":1669278342840,"count":1},{"user":"Lotharou","timeMS":1669278382123,"count":1},{"user":"BrownTownBrown","timeMS":1669278454055,"count":1},{"user":"MynockGate","timeMS":1669278463766,"count":1},{"user":"BrownTownBrown","timeMS":1669278529962,"count":3},{"user":"BrownTownBrown","timeMS":1669280112613,"count":2},{"user":"BrownTownBrown","timeMS":1669280567238,"count":4},{"user":"BrownTownBrown","timeMS":1669280876695,"count":1},{"user":"cajunrabbit90","timeMS":1669286246438,"count":1},{"user":"cajunrabbit90","timeMS":1669300456969,"count":1},{"user":"cajunrabbit90","timeMS":1669307395635,"count":1},{"user":"cajunrabbit90","timeMS":1669313102464,"count":5},{"user":"dbcallector","timeMS":1669313115700,"count":5},{"user":"Lotharou","timeMS":1669313277667,"count":1},{"user":"cysann","timeMS":1669313294900,"count":1},{"user":"cajunrabbit90","timeMS":1669313306912,"count":1},{"user":"YeComicMan","timeMS":1669315320965,"count":1},{"user":"FridayAtElmStreet","timeMS":1669315464133,"count":1},{"user":"chriskeyy","timeMS":1669315475520,"count":1},{"user":"FridayAtElmStreet","timeMS":1669315654914,"count":1},{"user":"cajunrabbit90","timeMS":1669315736848,"count":4},{"user":"jakenosnek","timeMS":1669315748219,"count":4},{"user":"FridayAtElmStreet","timeMS":1669321517021,"count":1},{"user":"FridayAtElmStreet","timeMS":1669321674910,"count":1},{"user":"MynockGate","timeMS":1669322301768,"count":1},{"user":"cajunrabbit90","timeMS":1669322357368,"count":4},{"user":"thunderbolt2790","timeMS":1669322374090,"count":3},{"user":"jakenosnek","timeMS":1669322398304,"count":4},{"user":"chriskeyy","timeMS":1669322404282,"count":5},{"user":"thunderbolt2790","timeMS":1669322411891,"count":5},{"user":"argyle_pigeon","timeMS":1669329851487,"count":2},{"user":"cysann","timeMS":1669332055646,"count":1},{"user":"JRBangs","timeMS":1669332574346,"count":1},{"user":"argyle_pigeon","timeMS":1669334059656,"count":5},{"user":"MynockGate","timeMS":1669334302843,"count":3},{"user":"Lotharou","timeMS":1669334317364,"count":4},{"user":"atomysktrue","timeMS":1669334409928,"count":1},{"user":"chriskeyy","timeMS":1669334998954,"count":3},{"user":"FridayAtElmStreet","timeMS":1669335006322,"count":10},{"user":"atomysktrue","timeMS":1669335011476,"count":1},{"user":"ForeverMalone","timeMS":1669335027249,"count":7},{"user":"Second_Trumpet","timeMS":1669335044313,"count":1},{"user":"argyle_pigeon","timeMS":1669340285359,"count":5},{"user":"MynockGate","timeMS":1669340300129,"count":7},{"user":"daskichan","timeMS":1669340309691,"count":5},{"user":"Lotharou","timeMS":1669340398597,"count":6},{"user":"Du6e","timeMS":1669340426277,"count":5},{"user":"michaels4n","timeMS":1669340430838,"count":3},{"user":"spyder256","timeMS":1669340432120,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669340449011,"count":5},{"user":"MrGingerbradman","timeMS":1669340459729,"count":5},{"user":"MynockGate","timeMS":1669340462208,"count":6},{"user":"Second_Trumpet","timeMS":1669340476140,"count":2},{"user":"TheSisk0","timeMS":1669340507193,"count":4},{"user":"blinkuzernm","timeMS":1669340586790,"count":2},{"user":"argyle_pigeon","timeMS":1669343234101,"count":3},{"user":"Lotharou","timeMS":1669343252383,"count":1},{"user":"Euphemysticism","timeMS":1669343283355,"count":1},{"user":"gardthedog","timeMS":1669345068133,"count":5},{"user":"djdduty","timeMS":1669345077602,"count":6},{"user":"Lotharou","timeMS":1669345078395,"count":2},{"user":"hokputooy","timeMS":1669349854273,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669349856183,"count":1},{"user":"argyle_pigeon","timeMS":1669351053369,"count":6},{"user":"Lotharou","timeMS":1669351060574,"count":6},{"user":"dmooch","timeMS":1669351078321,"count":1},{"user":"rulerofwax","timeMS":1669351583570,"count":1},{"user":"rulerofwax","timeMS":1669351706844,"count":3},{"user":"SeedyEyes","timeMS":1669352030628,"count":4},{"user":"feelmyfunk","timeMS":1669352031281,"count":3},{"user":"BrownTownBrown","timeMS":1669352031772,"count":4},{"user":"ForeverMalone","timeMS":1669352036481,"count":7},{"user":"jakenosnek","timeMS":1669352037088,"count":5},{"user":"dbcallector","timeMS":1669352037514,"count":1},{"user":"ForeverMalone","timeMS":1669352038932,"count":7},{"user":"sweatpantsandsuitjackets","timeMS":1669352041114,"count":7},{"user":"ForeverMalone","timeMS":1669352042754,"count":7},{"user":"Euphemysticism","timeMS":1669352046246,"count":1},{"user":"chriskeyy","timeMS":1669352047339,"count":7},{"user":"dbcallector","timeMS":1669352048246,"count":8},{"user":"SeedyEyes","timeMS":1669352051198,"count":9},{"user":"Lotharou","timeMS":1669352051706,"count":4},{"user":"markswanmusic","timeMS":1669352053516,"count":12},{"user":"ForeverMalone","timeMS":1669352055745,"count":8},{"user":"chriskeyy","timeMS":1669352056880,"count":14},{"user":"robdidlyob","timeMS":1669352059582,"count":8},{"user":"Du6e","timeMS":1669352060463,"count":11},{"user":"cysann","timeMS":1669352060868,"count":1},{"user":"SeedyEyes","timeMS":1669352062945,"count":7},{"user":"dmooch","timeMS":1669352063681,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669352068313,"count":9},{"user":"markswanmusic","timeMS":1669352114855,"count":12},{"user":"ForeverMalone","timeMS":1669352121609,"count":8},{"user":"dbcallector","timeMS":1669352125411,"count":9},{"user":"SeedyEyes","timeMS":1669352133151,"count":10},{"user":"codykeene56","timeMS":1669352145031,"count":5},{"user":"markswanmusic","timeMS":1669352190204,"count":9},{"user":"jakenosnek","timeMS":1669352193704,"count":7},{"user":"ForeverMalone","timeMS":1669352193883,"count":5},{"user":"SeedyEyes","timeMS":1669352194659,"count":11},{"user":"argyle_pigeon","timeMS":1669352195299,"count":4},{"user":"SeedyEyes","timeMS":1669352196913,"count":8},{"user":"Du6e","timeMS":1669352197567,"count":7},{"user":"Cyclonicks","timeMS":1669352198552,"count":14},{"user":"sweatpantsandsuitjackets","timeMS":1669352201406,"count":8},{"user":"SeedyEyes","timeMS":1669352205866,"count":6},{"user":"BrownTownBrown","timeMS":1669352206599,"count":3},{"user":"Lotharou","timeMS":1669352208772,"count":4},{"user":"Dr_Gonzz","timeMS":1669352209246,"count":5},{"user":"FridayAtElmStreet","timeMS":1669352210106,"count":21},{"user":"jerksandwich","timeMS":1669352214466,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352215597,"count":11},{"user":"chriskeyy","timeMS":1669352215795,"count":7},{"user":"markswanmusic","timeMS":1669352217987,"count":16},{"user":"afergusson","timeMS":1669352218320,"count":14},{"user":"FridayAtElmStreet","timeMS":1669352220421,"count":12},{"user":"dbcallector","timeMS":1669352222296,"count":7},{"user":"wagonwithascoop","timeMS":1669352222526,"count":3},{"user":"FridayAtElmStreet","timeMS":1669352224592,"count":30},{"user":"FridayAtElmStreet","timeMS":1669352245719,"count":5},{"user":"markswanmusic","timeMS":1669352257801,"count":8},{"user":"FridayAtElmStreet","timeMS":1669352264021,"count":9},{"user":"dbcallector","timeMS":1669352278507,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352310922,"count":21},{"user":"FridayAtElmStreet","timeMS":1669352313516,"count":28},{"user":"markswanmusic","timeMS":1669352314370,"count":12},{"user":"dbcallector","timeMS":1669352317338,"count":11},{"user":"FridayAtElmStreet","timeMS":1669352318848,"count":15},{"user":"rulerofwax","timeMS":1669352319463,"count":6},{"user":"SeedyEyes","timeMS":1669352321494,"count":8},{"user":"ForeverMalone","timeMS":1669352322088,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352322781,"count":21},{"user":"ForeverMalone","timeMS":1669352326843,"count":12},{"user":"FridayAtElmStreet","timeMS":1669352327094,"count":26},{"user":"BrownTownBrown","timeMS":1669352328040,"count":3},{"user":"ForeverMalone","timeMS":1669352330775,"count":19},{"user":"manmuffin89","timeMS":1669352333090,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352334532,"count":6},{"user":"rulerofwax","timeMS":1669352341868,"count":6},{"user":"ForeverMalone","timeMS":1669352345478,"count":18},{"user":"markswanmusic","timeMS":1669352350930,"count":8},{"user":"SeedyEyes","timeMS":1669352352834,"count":8},{"user":"dbcallector","timeMS":1669352352883,"count":7},{"user":"rulerofwax","timeMS":1669352402058,"count":6},{"user":"deadpoolskitty","timeMS":1669352536651,"count":3},{"user":"FridayAtElmStreet","timeMS":1669352560814,"count":16},{"user":"SeedyEyes","timeMS":1669352566654,"count":11},{"user":"FridayAtElmStreet","timeMS":1669352600503,"count":19},{"user":"SeedyEyes","timeMS":1669352614973,"count":12},{"user":"markswanmusic","timeMS":1669352633049,"count":7},{"user":"FridayAtElmStreet","timeMS":1669352654568,"count":25},{"user":"dbcallector","timeMS":1669352657785,"count":8},{"user":"BrownTownBrown","timeMS":1669352669154,"count":1},{"user":"FridayAtElmStreet","timeMS":1669352830256,"count":17},{"user":"PiercingThread7","timeMS":1669352842509,"count":3},{"user":"dbcallector","timeMS":1669352849247,"count":9},{"user":"FridayAtElmStreet","timeMS":1669352853154,"count":14},{"user":"FridayAtElmStreet","timeMS":1669352861588,"count":10},{"user":"explohd","timeMS":1669352865263,"count":7},{"user":"SeedyEyes","timeMS":1669352879950,"count":7},{"user":"FridayAtElmStreet","timeMS":1669352882522,"count":9},{"user":"chriskeyy","timeMS":1669352886972,"count":7},{"user":"PiercingThread7","timeMS":1669352891941,"count":1},{"user":"explohd","timeMS":1669352892343,"count":13},{"user":"DuckBees","timeMS":1669352894180,"count":9},{"user":"Lotharou","timeMS":1669353013506,"count":1},{"user":"SeedyEyes","timeMS":1669353017866,"count":1},{"user":"FridayAtElmStreet","timeMS":1669353027191,"count":11},{"user":"SeedyEyes","timeMS":1669353031703,"count":9},{"user":"explohd","timeMS":1669353039954,"count":10},{"user":"PiercingThread7","timeMS":1669353044596,"count":9},{"user":"FridayAtElmStreet","timeMS":1669353047692,"count":17},{"user":"dbcallector","timeMS":1669353052170,"count":16},{"user":"FridayAtElmStreet","timeMS":1669353053870,"count":5},{"user":"kemsmith","timeMS":1669353111791,"count":1},{"user":"FridayAtElmStreet","timeMS":1669353130570,"count":16},{"user":"FridayAtElmStreet","timeMS":1669353134842,"count":18},{"user":"SeedyEyes","timeMS":1669353136935,"count":12},{"user":"FridayAtElmStreet","timeMS":1669353213060,"count":12},{"user":"explohd","timeMS":1669353226679,"count":13},{"user":"dbcallector","timeMS":1669353242905,"count":13},{"user":"BrownTownBrown","timeMS":1669353271705,"count":8},{"user":"FridayAtElmStreet","timeMS":1669353296688,"count":15},{"user":"dbcallector","timeMS":1669353304697,"count":13},{"user":"explohd","timeMS":1669353312859,"count":11},{"user":"FridayAtElmStreet","timeMS":1669353317663,"count":11},{"user":"undeadtweak","timeMS":1669353324849,"count":5},{"user":"amazonianathena98","timeMS":1669353325796,"count":3},{"user":"SeedyEyes","timeMS":1669353332252,"count":14},{"user":"FridayAtElmStreet","timeMS":1669353335130,"count":12},{"user":"FridayAtElmStreet","timeMS":1669353342359,"count":15},{"user":"explohd","timeMS":1669353343163,"count":9},{"user":"dbcallector","timeMS":1669353348695,"count":26},{"user":"SeedyEyes","timeMS":1669353354263,"count":18},{"user":"explohd","timeMS":1669353369720,"count":18},{"user":"amazonianathena98","timeMS":1669353373113,"count":3},{"user":"Miklickers","timeMS":1669353412821,"count":4},{"user":"FridayAtElmStreet","timeMS":1669353412955,"count":16},{"user":"SeedyEyes","timeMS":1669353416099,"count":21},{"user":"FridayAtElmStreet","timeMS":1669353416186,"count":21},{"user":"ForeverMalone","timeMS":1669353417765,"count":8},{"user":"ForeverMalone","timeMS":1669353422148,"count":12},{"user":"BrownTownBrown","timeMS":1669353425456,"count":4},{"user":"dbcallector","timeMS":1669353425466,"count":19},{"user":"FridayAtElmStreet","timeMS":1669353446205,"count":14},{"user":"explohd","timeMS":1669353484718,"count":10},{"user":"FridayAtElmStreet","timeMS":1669353523715,"count":13},{"user":"chriskeyy","timeMS":1669353526720,"count":7},{"user":"FridayAtElmStreet","timeMS":1669353533916,"count":22},{"user":"dbcallector","timeMS":1669353535338,"count":13},{"user":"ForbiddenFractal","timeMS":1669353539360,"count":12},{"user":"SeedyEyes","timeMS":1669353542382,"count":18},{"user":"FridayAtElmStreet","timeMS":1669353543452,"count":16},{"user":"chriskeyy","timeMS":1669353546295,"count":14},{"user":"FridayAtElmStreet","timeMS":1669353548095,"count":17},{"user":"dbcallector","timeMS":1669353550106,"count":26},{"user":"explohd","timeMS":1669353550132,"count":14},{"user":"ForeverMalone","timeMS":1669353553655,"count":12},{"user":"TheSisk0","timeMS":1669353560984,"count":6},{"user":"FridayAtElmStreet","timeMS":1669353586771,"count":11},{"user":"SeedyEyes","timeMS":1669353618370,"count":8},{"user":"FridayAtElmStreet","timeMS":1669353618808,"count":9},{"user":"FridayAtElmStreet","timeMS":1669353646235,"count":15},{"user":"BrownTownBrown","timeMS":1669353688677,"count":4},{"user":"FridayAtElmStreet","timeMS":1669353701751,"count":11},{"user":"SeedyEyes","timeMS":1669353705547,"count":10},{"user":"FridayAtElmStreet","timeMS":1669353714553,"count":9},{"user":"explohd","timeMS":1669353716271,"count":10},{"user":"FridayAtElmStreet","timeMS":1669353810026,"count":5},{"user":"FridayAtElmStreet","timeMS":1669353854358,"count":14},{"user":"FridayAtElmStreet","timeMS":1669353881781,"count":6},{"user":"FridayAtElmStreet","timeMS":1669353901023,"count":10},{"user":"dbcallector","timeMS":1669353918493,"count":1},{"user":"FridayAtElmStreet","timeMS":1669353956628,"count":5},{"user":"FridayAtElmStreet","timeMS":1669353964903,"count":9},{"user":"FridayAtElmStreet","timeMS":1669353991861,"count":19},{"user":"wagonwithascoop","timeMS":1669353995859,"count":1},{"user":"markswanmusic","timeMS":1669354000738,"count":12},{"user":"ProtusMose","timeMS":1669354010588,"count":12},{"user":"chriskeyy","timeMS":1669354023256,"count":1},{"user":"FridayAtElmStreet","timeMS":1669354069891,"count":10},{"user":"dbcallector","timeMS":1669354081173,"count":11},{"user":"FridayAtElmStreet","timeMS":1669354105805,"count":13},{"user":"FridayAtElmStreet","timeMS":1669354121732,"count":1},{"user":"FridayAtElmStreet","timeMS":1669354128060,"count":3},{"user":"FridayAtElmStreet","timeMS":1669354237815,"count":21},{"user":"FridayAtElmStreet","timeMS":1669354241164,"count":24},{"user":"dbcallector","timeMS":1669354247904,"count":1},{"user":"FridayAtElmStreet","timeMS":1669354248781,"count":13},{"user":"markswanmusic","timeMS":1669354488841,"count":3},{"user":"dbcallector","timeMS":1669354492079,"count":1},{"user":"UVCW","timeMS":1669354494862,"count":1},{"user":"chriskeyy","timeMS":1669354559951,"count":5},{"user":"dbcallector","timeMS":1669354913303,"count":1},{"user":"dbcallector","timeMS":1669355069234,"count":1},{"user":"Lotharou","timeMS":1669355158145,"count":1},{"user":"explohd","timeMS":1669355167179,"count":8},{"user":"SeedyEyes","timeMS":1669355169053,"count":5},{"user":"Dr_Gonzz","timeMS":1669355170884,"count":1},{"user":"undeadtweak","timeMS":1669355172483,"count":3},{"user":"SeedyEyes","timeMS":1669355173807,"count":8},{"user":"chriskeyy","timeMS":1669355174768,"count":3},{"user":"dbcallector","timeMS":1669355176101,"count":10},{"user":"ForeverMalone","timeMS":1669355176598,"count":12},{"user":"chriskeyy","timeMS":1669355182253,"count":6},{"user":"Dr_Gonzz","timeMS":1669355183223,"count":5},{"user":"Mickol","timeMS":1669355185874,"count":4},{"user":"v299792458","timeMS":1669355191532,"count":1},{"user":"TheSisk0","timeMS":1669355192284,"count":5},{"user":"SeedyEyes","timeMS":1669355198587,"count":5},{"user":"AestheticallyGeeky","timeMS":1669355200572,"count":12},{"user":"Lotharou","timeMS":1669355209435,"count":7},{"user":"SeedyEyes","timeMS":1669355214101,"count":11},{"user":"dbcallector","timeMS":1669355224814,"count":10},{"user":"explohd","timeMS":1669355233816,"count":10},{"user":"WheatiesR1337","timeMS":1669355238337,"count":3},{"user":"dbcallector","timeMS":1669355247829,"count":7},{"user":"SeedyEyes","timeMS":1669355299448,"count":9},{"user":"dbcallector","timeMS":1669355322391,"count":5},{"user":"undeadtweak","timeMS":1669355333404,"count":5},{"user":"UVCW","timeMS":1669355336922,"count":3},{"user":"explohd","timeMS":1669355353341,"count":7},{"user":"FridayAtElmStreet","timeMS":1669355375396,"count":10},{"user":"FridayAtElmStreet","timeMS":1669355754284,"count":1},{"user":"explohd","timeMS":1669355758653,"count":8},{"user":"FridayAtElmStreet","timeMS":1669355767325,"count":13},{"user":"FridayAtElmStreet","timeMS":1669355787837,"count":4},{"user":"FridayAtElmStreet","timeMS":1669355791915,"count":11},{"user":"FridayAtElmStreet","timeMS":1669355824230,"count":5},{"user":"FridayAtElmStreet","timeMS":1669355871700,"count":5},{"user":"Mickol","timeMS":1669356008651,"count":2},{"user":"dluith","timeMS":1669356021162,"count":2},{"user":"dbcallector","timeMS":1669356031301,"count":12},{"user":"chriskeyy","timeMS":1669356815870,"count":5},{"user":"dbcallector","timeMS":1669356816507,"count":9},{"user":"yam_cakes","timeMS":1669356834005,"count":1},{"user":"sodapop_30","timeMS":1669357003996,"count":10},{"user":"explohd","timeMS":1669357019760,"count":1},{"user":"dbcallector","timeMS":1669357021148,"count":8},{"user":"00Doly","timeMS":1669357022686,"count":7},{"user":"chriskeyy","timeMS":1669357026213,"count":5},{"user":"sodapop_30","timeMS":1669357027291,"count":13},{"user":"Dr_Gonzz","timeMS":1669357031330,"count":6},{"user":"yam_cakes","timeMS":1669357036067,"count":11},{"user":"Mickol","timeMS":1669357037172,"count":2},{"user":"Dr_Gonzz","timeMS":1669357037719,"count":5},{"user":"PointlessOk","timeMS":1669357040151,"count":2},{"user":"cajunrabbit90","timeMS":1669357046017,"count":8},{"user":"explohd","timeMS":1669357048822,"count":7},{"user":"00Doly","timeMS":1669357049258,"count":9},{"user":"Tomaetchen","timeMS":1669357051920,"count":8},{"user":"yam_cakes","timeMS":1669357058518,"count":9},{"user":"dbcallector","timeMS":1669357060107,"count":5},{"user":"sodapop_30","timeMS":1669357064608,"count":12},{"user":"chriskeyy","timeMS":1669357064809,"count":5},{"user":"chriskeyy","timeMS":1669357078557,"count":17},{"user":"treyorrr","timeMS":1669357084233,"count":14},{"user":"yam_cakes","timeMS":1669357090636,"count":8},{"user":"Mickol","timeMS":1669357095597,"count":8},{"user":"dbcallector","timeMS":1669357107322,"count":9},{"user":"CarlosTheGardener","timeMS":1669357117424,"count":1},{"user":"chriskeyy","timeMS":1669357124242,"count":3},{"user":"Mickol","timeMS":1669357137949,"count":8},{"user":"rulerofwax","timeMS":1669357143800,"count":4},{"user":"rulerofwax","timeMS":1669357211834,"count":4},{"user":"sodapop_30","timeMS":1669357217447,"count":11},{"user":"Tomaetchen","timeMS":1669357274222,"count":4},{"user":"UVCW","timeMS":1669357284618,"count":3},{"user":"Mickol","timeMS":1669357287466,"count":4},{"user":"rulerofwax","timeMS":1669357312238,"count":4},{"user":"Lotharou","timeMS":1669357323157,"count":1},{"user":"FridayAtElmStreet","timeMS":1669357338632,"count":20},{"user":"ForbiddenFractal","timeMS":1669357338877,"count":13},{"user":"Mickol","timeMS":1669357338946,"count":10},{"user":"undeadtweak","timeMS":1669357339398,"count":18},{"user":"PointlessOk","timeMS":1669357339512,"count":2},{"user":"dbcallector","timeMS":1669357339668,"count":18},{"user":"explohd","timeMS":1669357339743,"count":21},{"user":"rulerofwax","timeMS":1669357340103,"count":7},{"user":"Euphemysticism","timeMS":1669357340183,"count":15},{"user":"zombiedango","timeMS":1669357340500,"count":4},{"user":"ForeverMalone","timeMS":1669357340892,"count":7},{"user":"FridayAtElmStreet","timeMS":1669357340954,"count":25},{"user":"yam_cakes","timeMS":1669357342536,"count":1},{"user":"ForbiddenFractal","timeMS":1669357342716,"count":15},{"user":"ForeverMalone","timeMS":1669357342852,"count":7},{"user":"FridayAtElmStreet","timeMS":1669357343265,"count":24},{"user":"dbcallector","timeMS":1669357345491,"count":7},{"user":"ForeverMalone","timeMS":1669357345645,"count":7},{"user":"Tomaetchen","timeMS":1669357347824,"count":14},{"user":"FridayAtElmStreet","timeMS":1669357348320,"count":16},{"user":"ForeverMalone","timeMS":1669357348322,"count":7},{"user":"ForbiddenFractal","timeMS":1669357348474,"count":19},{"user":"Euphemysticism","timeMS":1669357348567,"count":13},{"user":"TheSisk0","timeMS":1669357349756,"count":5},{"user":"FridayAtElmStreet","timeMS":1669357350978,"count":24},{"user":"rulerofwax","timeMS":1669357351485,"count":7},{"user":"argyle_pigeon","timeMS":1669357352190,"count":7},{"user":"ForeverMalone","timeMS":1669357352517,"count":7},{"user":"explohd","timeMS":1669357352530,"count":32},{"user":"FridayAtElmStreet","timeMS":1669357354601,"count":22},{"user":"ForeverMalone","timeMS":1669357355159,"count":7},{"user":"DuderGuyDude","timeMS":1669357357037,"count":16},{"user":"ForeverMalone","timeMS":1669357357890,"count":7},{"user":"Lotharou","timeMS":1669357358666,"count":13},{"user":"ForeverMalone","timeMS":1669357360522,"count":7},{"user":"zombiedango","timeMS":1669357360830,"count":7},{"user":"PointlessOk","timeMS":1669357361336,"count":4},{"user":"dbcallector","timeMS":1669357362882,"count":13},{"user":"ForeverMalone","timeMS":1669357362971,"count":7},{"user":"Euphemysticism","timeMS":1669357363536,"count":8},{"user":"DuderGuyDude","timeMS":1669357363560,"count":10},{"user":"Lotharou","timeMS":1669357363724,"count":13},{"user":"explohd","timeMS":1669357363812,"count":28},{"user":"ForeverMalone","timeMS":1669357365179,"count":7},{"user":"ForeverMalone","timeMS":1669357367856,"count":7},{"user":"DuderGuyDude","timeMS":1669357370070,"count":14},{"user":"ForeverMalone","timeMS":1669357370350,"count":7},{"user":"PointlessOk","timeMS":1669357374884,"count":3},{"user":"Lotharou","timeMS":1669357376049,"count":13},{"user":"ForeverMalone","timeMS":1669357377527,"count":10},{"user":"DuderGuyDude","timeMS":1669357379340,"count":10},{"user":"zombiedango","timeMS":1669357380633,"count":13},{"user":"ForeverMalone","timeMS":1669357383704,"count":10},{"user":"Lotharou","timeMS":1669357386700,"count":13},{"user":"ForeverMalone","timeMS":1669357388836,"count":10},{"user":"yam_cakes","timeMS":1669357389059,"count":8},{"user":"ForeverMalone","timeMS":1669357393026,"count":10},{"user":"zombiedango","timeMS":1669357393666,"count":8},{"user":"yam_cakes","timeMS":1669357395362,"count":11},{"user":"ForeverMalone","timeMS":1669357396456,"count":10},{"user":"ForbiddenFractal","timeMS":1669357396694,"count":1},{"user":"yam_cakes","timeMS":1669357399599,"count":5},{"user":"ForeverMalone","timeMS":1669357402162,"count":10},{"user":"Lotharou","timeMS":1669357404525,"count":10},{"user":"cajunrabbit90","timeMS":1669357406067,"count":12},{"user":"ForeverMalone","timeMS":1669357406130,"count":10},{"user":"yam_cakes","timeMS":1669357407010,"count":10},{"user":"zombiedango","timeMS":1669357407464,"count":10},{"user":"explohd","timeMS":1669357408175,"count":17},{"user":"ForeverMalone","timeMS":1669357413702,"count":10},{"user":"yam_cakes","timeMS":1669357418380,"count":7},{"user":"markswanmusic","timeMS":1669357418716,"count":10},{"user":"ForeverMalone","timeMS":1669357419685,"count":10},{"user":"zombiedango","timeMS":1669357423037,"count":7},{"user":"zombiedango","timeMS":1669357427761,"count":10},{"user":"ForeverMalone","timeMS":1669357432735,"count":10},{"user":"dbcallector","timeMS":1669357434997,"count":9},{"user":"zombiedango","timeMS":1669357437605,"count":10},{"user":"ForeverMalone","timeMS":1669357438760,"count":10},{"user":"jakenosnek","timeMS":1669357441458,"count":5},{"user":"sodapop_30","timeMS":1669357803689,"count":4},{"user":"rulerofwax","timeMS":1669357834630,"count":3},{"user":"explohd","timeMS":1669358069274,"count":8},{"user":"cajunrabbit90","timeMS":1669358074404,"count":12},{"user":"argyle_pigeon","timeMS":1669358087290,"count":4},{"user":"FridayAtElmStreet","timeMS":1669358132739,"count":11},{"user":"FridayAtElmStreet","timeMS":1669358136149,"count":14},{"user":"BrownTownBrown","timeMS":1669358141410,"count":4},{"user":"dluith","timeMS":1669358144604,"count":4},{"user":"cajunrabbit90","timeMS":1669358147998,"count":12},{"user":"KneeCapper_","timeMS":1669358158167,"count":12},{"user":"FridayAtElmStreet","timeMS":1669358225801,"count":1},{"user":"FridayAtElmStreet","timeMS":1669358397652,"count":1},{"user":"sodapop_30","timeMS":1669358515535,"count":20},{"user":"explohd","timeMS":1669358522842,"count":8},{"user":"dbcallector","timeMS":1669358545209,"count":8},{"user":"sodapop_30","timeMS":1669358662879,"count":8},{"user":"pwcee","timeMS":1669358669828,"count":4},{"user":"chriskeyy","timeMS":1669358673799,"count":5},{"user":"FridayAtElmStreet","timeMS":1669358681939,"count":1},{"user":"BrownTownBrown","timeMS":1669358684162,"count":2},{"user":"dbcallector","timeMS":1669358953543,"count":6},{"user":"FridayAtElmStreet","timeMS":1669359174462,"count":1},{"user":"s_o_ft","timeMS":1669359226704,"count":4},{"user":"chriskeyy","timeMS":1669359228696,"count":3},{"user":"sodapop_30","timeMS":1669359229187,"count":11},{"user":"dbcallector","timeMS":1669359241720,"count":12},{"user":"Evan_Al_Mighty","timeMS":1669359251410,"count":9},{"user":"FridayAtElmStreet","timeMS":1669359289467,"count":1},{"user":"cajunrabbit90","timeMS":1669359343947,"count":12},{"user":"dluith","timeMS":1669359355579,"count":3},{"user":"Evan_Al_Mighty","timeMS":1669359384420,"count":12},{"user":"FridayAtElmStreet","timeMS":1669359414903,"count":14},{"user":"dbcallector","timeMS":1669359433179,"count":11},{"user":"BrownTownBrown","timeMS":1669359443437,"count":3},{"user":"cajunrabbit90","timeMS":1669359528663,"count":1},{"user":"SBlonk","timeMS":1669359533881,"count":1},{"user":"dbcallector","timeMS":1669359805749,"count":6},{"user":"explohd","timeMS":1669359814517,"count":10},{"user":"chriskeyy","timeMS":1669359819367,"count":3},{"user":"chriskeyy","timeMS":1669359864620,"count":3},{"user":"FridayAtElmStreet","timeMS":1669359870144,"count":1},{"user":"FridayAtElmStreet","timeMS":1669359965699,"count":1},{"user":"FridayAtElmStreet","timeMS":1669360075875,"count":1},{"user":"cajunrabbit90","timeMS":1669360155673,"count":12},{"user":"markswanmusic","timeMS":1669360292010,"count":5},{"user":"chriskeyy","timeMS":1669360317928,"count":5},{"user":"SBlonk","timeMS":1669360323658,"count":1},{"user":"BrownTownBrown","timeMS":1669360327915,"count":2},{"user":"FridayAtElmStreet","timeMS":1669360359447,"count":9},{"user":"dbcallector","timeMS":1669360382955,"count":8},{"user":"FridayAtElmStreet","timeMS":1669360561919,"count":1},{"user":"Second_Trumpet","timeMS":1669360570020,"count":1},{"user":"FridayAtElmStreet","timeMS":1669361040395,"count":1},{"user":"Lotharou","timeMS":1669361309345,"count":1},{"user":"CarlosTheGardener","timeMS":1669362301470,"count":1},{"user":"Lotharou","timeMS":1669362311341,"count":1},{"user":"TheSisk0","timeMS":1669362341066,"count":1},{"user":"dbcallector","timeMS":1669362972915,"count":5},{"user":"corgidrum","timeMS":1669362990808,"count":1},{"user":"WheatiesR1337","timeMS":1669363221370,"count":9},{"user":"cajunrabbit90","timeMS":1669363221498,"count":6},{"user":"rulerofwax","timeMS":1669363229314,"count":1},{"user":"dbcallector","timeMS":1669363248736,"count":6},{"user":"TheSisk0","timeMS":1669363270817,"count":3},{"user":"cajunrabbit90","timeMS":1669363279135,"count":7},{"user":"FridayAtElmStreet","timeMS":1669363295229,"count":5},{"user":"CarlosTheGardener","timeMS":1669363557149,"count":2},{"user":"Lotharou","timeMS":1669363562985,"count":2},{"user":"BrownTownBrown","timeMS":1669363573709,"count":2},{"user":"dbcallector","timeMS":1669363577675,"count":2},{"user":"litdad_","timeMS":1669363578244,"count":2},{"user":"TheSisk0","timeMS":1669363585265,"count":2},{"user":"FridayAtElmStreet","timeMS":1669363756749,"count":1},{"user":"FridayAtElmStreet","timeMS":1669363900483,"count":1},{"user":"dbcallector","timeMS":1669363917489,"count":1},{"user":"cajunrabbit90","timeMS":1669364664337,"count":12},{"user":"dbcallector","timeMS":1669364747681,"count":15},{"user":"BrownTownBrown","timeMS":1669364853619,"count":3},{"user":"dbcallector","timeMS":1669364862510,"count":6},{"user":"cajunrabbit90","timeMS":1669364865384,"count":4},{"user":"FridayAtElmStreet","timeMS":1669364874269,"count":1},{"user":"dbcallector","timeMS":1669366433169,"count":4},{"user":"Euphemysticism","timeMS":1669366447008,"count":2},{"user":"dbcallector","timeMS":1669366770964,"count":2},{"user":"FridayAtElmStreet","timeMS":1669366802982,"count":2},{"user":"theonlyjevans2","timeMS":1669366811532,"count":1},{"user":"Dr_Gonzz","timeMS":1669366817424,"count":4},{"user":"s_o_ft","timeMS":1669366819340,"count":5},{"user":"FridayAtElmStreet","timeMS":1669366982099,"count":1},{"user":"BrownTownBrown","timeMS":1669367059748,"count":1},{"user":"FridayAtElmStreet","timeMS":1669367251706,"count":1},{"user":"FridayAtElmStreet","timeMS":1669367265598,"count":2},{"user":"BrownTownBrown","timeMS":1669367288377,"count":4},{"user":"jakenosnek","timeMS":1669367292744,"count":4},{"user":"dbcallector","timeMS":1669367293340,"count":5},{"user":"FridayAtElmStreet","timeMS":1669367294313,"count":1},{"user":"richardsim7","timeMS":1669367299034,"count":1},{"user":"MynockGate","timeMS":1669367380494,"count":4},{"user":"MynockGate","timeMS":1669367400774,"count":3},{"user":"cajunrabbit90","timeMS":1669367473273,"count":4},{"user":"FridayAtElmStreet","timeMS":1669367643016,"count":1},{"user":"jakenosnek","timeMS":1669368131841,"count":4},{"user":"richardsim7","timeMS":1669368182301,"count":1},{"user":"cajunrabbit90","timeMS":1669368198006,"count":12},{"user":"MynockGate","timeMS":1669368209626,"count":12},{"user":"BrownTownBrown","timeMS":1669368212968,"count":3},{"user":"cajunrabbit90","timeMS":1669368223282,"count":12},{"user":"MynockGate","timeMS":1669368268174,"count":8},{"user":"MynockGate","timeMS":1669368423684,"count":8},{"user":"BrownTownBrown","timeMS":1669368646953,"count":3},{"user":"Dr_Gonzz","timeMS":1669368705610,"count":4},{"user":"cajunrabbit90","timeMS":1669368814152,"count":12},{"user":"BrownTownBrown","timeMS":1669369087969,"count":1},{"user":"Dr_Gonzz","timeMS":1669369516812,"count":1},{"user":"MynockGate","timeMS":1669370206463,"count":8},{"user":"cajunrabbit90","timeMS":1669370239880,"count":12},{"user":"cajunrabbit90","timeMS":1669370628437,"count":1},{"user":"richardsim7","timeMS":1669370887569,"count":5},{"user":"cajunrabbit90","timeMS":1669370895296,"count":12},{"user":"BrownTownBrown","timeMS":1669370900109,"count":3},{"user":"torp1337","timeMS":1669370902892,"count":7},{"user":"MynockGate","timeMS":1669370910486,"count":10},{"user":"Second_Trumpet","timeMS":1669370910960,"count":1},{"user":"UVCW","timeMS":1669370914994,"count":4},{"user":"ForeverMalone","timeMS":1669370943533,"count":7},{"user":"richardsim7","timeMS":1669370956157,"count":1},{"user":"torp1337","timeMS":1669370957005,"count":5},{"user":"xfatxninjax","timeMS":1669370964636,"count":1},{"user":"Parksies_","timeMS":1669370965144,"count":3},{"user":"treyorrr","timeMS":1669370965405,"count":10},{"user":"BrownTownBrown","timeMS":1669370968758,"count":7},{"user":"MynockGate","timeMS":1669370971589,"count":10},{"user":"Scyral","timeMS":1669370974142,"count":6},{"user":"cajunrabbit90","timeMS":1669370975248,"count":12},{"user":"computeryogi","timeMS":1669370975459,"count":3},{"user":"FridayAtElmStreet","timeMS":1669370979417,"count":10},{"user":"koaxOG","timeMS":1669370982454,"count":3},{"user":"Scyral","timeMS":1669370982593,"count":6},{"user":"beglebum","timeMS":1669370990435,"count":1},{"user":"FridayAtElmStreet","timeMS":1669371022162,"count":5},{"user":"FridayAtElmStreet","timeMS":1669371272396,"count":15},{"user":"FridayAtElmStreet","timeMS":1669371282235,"count":18},{"user":"torp1337","timeMS":1669371282620,"count":6},{"user":"cajunrabbit90","timeMS":1669371284944,"count":12},{"user":"Scyral","timeMS":1669371295726,"count":12},{"user":"MynockGate","timeMS":1669371300580,"count":10},{"user":"TheSisk0","timeMS":1669371301775,"count":6},{"user":"Belly__boy","timeMS":1669371333099,"count":6},{"user":"FridayAtElmStreet","timeMS":1669371602346,"count":1},{"user":"cajunrabbit90","timeMS":1669371947755,"count":4},{"user":"WheatiesR1337","timeMS":1669371985109,"count":1},{"user":"Scyral","timeMS":1669372371918,"count":1},{"user":"FridayAtElmStreet","timeMS":1669373163771,"count":1},{"user":"CarlosTheGardener","timeMS":1669373282599,"count":1},{"user":"GoSabres","timeMS":1669373472286,"count":1},{"user":"Scyral","timeMS":1669373475418,"count":1},{"user":"Scyral","timeMS":1669373481092,"count":1},{"user":"Second_Trumpet","timeMS":1669373658213,"count":1},{"user":"cajunrabbit90","timeMS":1669373930542,"count":12},{"user":"Second_Trumpet","timeMS":1669374431789,"count":1},{"user":"WheatiesR1337","timeMS":1669374436820,"count":4},{"user":"MynockGate","timeMS":1669374451116,"count":10},{"user":"UVCW","timeMS":1669374452730,"count":1},{"user":"TheSisk0","timeMS":1669374462503,"count":10},{"user":"cajunrabbit90","timeMS":1669374478753,"count":12},{"user":"UVCW","timeMS":1669374486033,"count":12},{"user":"Scyral","timeMS":1669374502030,"count":12},{"user":"Scyral","timeMS":1669374552335,"count":1},{"user":"ForeverMalone","timeMS":1669374879142,"count":8},{"user":"sodapop_30","timeMS":1669374989216,"count":21},{"user":"richardsim7","timeMS":1669375008342,"count":1},{"user":"ForeverMalone","timeMS":1669375011880,"count":8},{"user":"cajunrabbit90","timeMS":1669375012589,"count":12},{"user":"Parksies_","timeMS":1669375013278,"count":12},{"user":"torp1337","timeMS":1669375013720,"count":12},{"user":"MynockGate","timeMS":1669375014469,"count":8},{"user":"cajunrabbit90","timeMS":1669375016869,"count":12},{"user":"DuderGuyDude","timeMS":1669375016973,"count":4},{"user":"FridayAtElmStreet","timeMS":1669375017157,"count":13},{"user":"ForeverMalone","timeMS":1669375017273,"count":12},{"user":"UVCW","timeMS":1669375017434,"count":7},{"user":"Tomaetchen","timeMS":1669375017995,"count":10},{"user":"MynockGate","timeMS":1669375018515,"count":10},{"user":"ForeverMalone","timeMS":1669375019803,"count":17},{"user":"beglebum","timeMS":1669375021047,"count":5},{"user":"GoSabres","timeMS":1669375029626,"count":5},{"user":"FridayAtElmStreet","timeMS":1669375029924,"count":7},{"user":"Scyral","timeMS":1669375030526,"count":12},{"user":"Tomaetchen","timeMS":1669375031513,"count":9},{"user":"Scyral","timeMS":1669375039259,"count":12},{"user":"sodapop_30","timeMS":1669375041807,"count":6},{"user":"DuderGuyDude","timeMS":1669375045523,"count":4},{"user":"TheSisk0","timeMS":1669375045819,"count":12},{"user":"torp1337","timeMS":1669375046991,"count":12},{"user":"asgarnieu","timeMS":1669375051257,"count":4},{"user":"FridayAtElmStreet","timeMS":1669375055467,"count":4},{"user":"DuderGuyDude","timeMS":1669375059052,"count":8},{"user":"MynockGate","timeMS":1669375067603,"count":8},{"user":"MynockGate","timeMS":1669375079486,"count":9},{"user":"DuderGuyDude","timeMS":1669375082078,"count":4},{"user":"cajunrabbit90","timeMS":1669375097586,"count":12},{"user":"FridayAtElmStreet","timeMS":1669375101537,"count":1},{"user":"Second_Trumpet","timeMS":1669375120066,"count":1},{"user":"GoSabres","timeMS":1669375121983,"count":1},{"user":"FridayAtElmStreet","timeMS":1669375149861,"count":1},{"user":"FridayAtElmStreet","timeMS":1669375163382,"count":2},{"user":"MynockGate","timeMS":1669375166084,"count":9},{"user":"torp1337","timeMS":1669375421562,"count":12},{"user":"GoSabres","timeMS":1669375446692,"count":1},{"user":"Scyral","timeMS":1669375451750,"count":2},{"user":"Scyral","timeMS":1669375688879,"count":3},{"user":"cajunrabbit90","timeMS":1669375719154,"count":12},{"user":"Tomaetchen","timeMS":1669375721842,"count":4},{"user":"kimchikelso","timeMS":1669377322724,"count":1},{"user":"cajunrabbit90","timeMS":1669378011433,"count":2},{"user":"MynockGate","timeMS":1669378044722,"count":1},{"user":"suddenlyzoe","timeMS":1669378061729,"count":1},{"user":"cajunrabbit90","timeMS":1669378158794,"count":10},{"user":"MynockGate","timeMS":1669378170631,"count":9},{"user":"DuderGuyDude","timeMS":1669382108105,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669382659956,"count":5},{"user":"DuderGuyDude","timeMS":1669382667651,"count":4},{"user":"asasquatch","timeMS":1669382673601,"count":3},{"user":"CookieKrisp","timeMS":1669382679216,"count":3},{"user":"the_bearded_helmet","timeMS":1669382727510,"count":4},{"user":"Lotharou","timeMS":1669388716919,"count":1},{"user":"Lotharou","timeMS":1669390026238,"count":1},{"user":"MynockGate","timeMS":1669390056910,"count":10},{"user":"MynockGate","timeMS":1669391454677,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669392159588,"count":1},{"user":"MynockGate","timeMS":1669393723593,"count":4},{"user":"Du6e","timeMS":1669393735715,"count":3},{"user":"Lotharou","timeMS":1669393765773,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669393910153,"count":3},{"user":"Miklickers","timeMS":1669394858979,"count":1},{"user":"Lotharou","timeMS":1669396834024,"count":1},{"user":"cajunrabbit90","timeMS":1669397652998,"count":11},{"user":"FridayAtElmStreet","timeMS":1669397803507,"count":1},{"user":"Lotharou","timeMS":1669397845310,"count":1},{"user":"SeedyEyes","timeMS":1669397871188,"count":1},{"user":"chriskeyy","timeMS":1669397923526,"count":1},{"user":"Lotharou","timeMS":1669397954141,"count":1},{"user":"FiveGetsYouTen","timeMS":1669398011575,"count":10},{"user":"Lotharou","timeMS":1669398021974,"count":10},{"user":"TheSisk0","timeMS":1669398037104,"count":10},{"user":"Du6e","timeMS":1669398046167,"count":10},{"user":"dacullenator","timeMS":1669398073576,"count":10},{"user":"MynockGate","timeMS":1669398116044,"count":10},{"user":"cajunrabbit90","timeMS":1669398181783,"count":1},{"user":"SeedyEyes","timeMS":1669398290565,"count":7},{"user":"chriskeyy","timeMS":1669398919616,"count":1},{"user":"MynockGate","timeMS":1669399071132,"count":9},{"user":"Lotharou","timeMS":1669399077538,"count":9},{"user":"cajunrabbit90","timeMS":1669399093563,"count":9},{"user":"atomysktrue","timeMS":1669399105060,"count":9},{"user":"LilMermaid","timeMS":1669399112010,"count":9},{"user":"chriskeyy","timeMS":1669399147448,"count":9},{"user":"LilMermaid","timeMS":1669399164918,"count":1},{"user":"MynockGate","timeMS":1669399168871,"count":9},{"user":"explohd","timeMS":1669399179049,"count":5},{"user":"cajunrabbit90","timeMS":1669399193238,"count":9},{"user":"MynockGate","timeMS":1669399197017,"count":10},{"user":"Du6e","timeMS":1669399198200,"count":9},{"user":"Lotharou","timeMS":1669399207134,"count":10},{"user":"FrostedFerrets","timeMS":1669399214560,"count":3},{"user":"MynockGate","timeMS":1669399257510,"count":10},{"user":"FridayAtElmStreet","timeMS":1669399368785,"count":1},{"user":"MynockGate","timeMS":1669399374382,"count":10},{"user":"cajunrabbit90","timeMS":1669399387933,"count":10},{"user":"FrostedFerrets","timeMS":1669399394610,"count":3},{"user":"chriskeyy","timeMS":1669399422578,"count":9},{"user":"FrostedFerrets","timeMS":1669399656965,"count":4},{"user":"rulerofwax","timeMS":1669399674134,"count":1},{"user":"TheZtakMan","timeMS":1669399681961,"count":1},{"user":"Lotharou","timeMS":1669399685166,"count":4},{"user":"dbcallector","timeMS":1669399686864,"count":4},{"user":"cajunrabbit90","timeMS":1669399691280,"count":10},{"user":"AzraeII","timeMS":1669399691679,"count":5},{"user":"TheCrunge24","timeMS":1669399703319,"count":4},{"user":"MynockGate","timeMS":1669399709927,"count":10},{"user":"TheSisk0","timeMS":1669399713347,"count":4},{"user":"Rezoli","timeMS":1669399714877,"count":10},{"user":"dbcallector","timeMS":1669399717548,"count":10},{"user":"FrostedFerrets","timeMS":1669399722619,"count":4},{"user":"cajunrabbit90","timeMS":1669400091639,"count":10},{"user":"rulerofwax","timeMS":1669400101510,"count":10},{"user":"chriskeyy","timeMS":1669400228201,"count":5},{"user":"rulerofwax","timeMS":1669400294961,"count":10},{"user":"FridayAtElmStreet","timeMS":1669400311080,"count":18},{"user":"FridayAtElmStreet","timeMS":1669400314447,"count":21},{"user":"FridayAtElmStreet","timeMS":1669400320760,"count":5},{"user":"FridayAtElmStreet","timeMS":1669400406424,"count":5},{"user":"dbcallector","timeMS":1669400421746,"count":11},{"user":"chriskeyy","timeMS":1669400427960,"count":5},{"user":"MynockGate","timeMS":1669400435724,"count":6},{"user":"explohd","timeMS":1669400447135,"count":7},{"user":"ProtusMose","timeMS":1669400451680,"count":2},{"user":"MynockGate","timeMS":1669400461259,"count":10},{"user":"cajunrabbit90","timeMS":1669400474654,"count":10},{"user":"FridayAtElmStreet","timeMS":1669400477681,"count":1},{"user":"viviz","timeMS":1669400484445,"count":3},{"user":"razorblahd","timeMS":1669400506344,"count":2},{"user":"kevvywevy","timeMS":1669400698222,"count":3},{"user":"kemsmith","timeMS":1669400715959,"count":1},{"user":"MynockGate","timeMS":1669400801582,"count":10},{"user":"kevvywevy","timeMS":1669400804585,"count":3},{"user":"kemsmith","timeMS":1669400809172,"count":8},{"user":"cajunrabbit90","timeMS":1669400809249,"count":10},{"user":"TheSisk0","timeMS":1669400809640,"count":10},{"user":"rulerofwax","timeMS":1669400810367,"count":1},{"user":"explohd","timeMS":1669400810476,"count":10},{"user":"kevvywevy","timeMS":1669400814021,"count":4},{"user":"Lotharou","timeMS":1669400817191,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669400819708,"count":4},{"user":"FiveGetsYouTen","timeMS":1669400820402,"count":33},{"user":"LilMermaid","timeMS":1669400827031,"count":10},{"user":"chriskeyy","timeMS":1669400835684,"count":3},{"user":"MynockGate","timeMS":1669400840518,"count":10},{"user":"dbcallector","timeMS":1669400848193,"count":10},{"user":"chriskeyy","timeMS":1669401124630,"count":3},{"user":"jakenosnek","timeMS":1669401440635,"count":2},{"user":"FridayAtElmStreet","timeMS":1669401463611,"count":1},{"user":"FridayAtElmStreet","timeMS":1669401488242,"count":1},{"user":"FridayAtElmStreet","timeMS":1669402062280,"count":1},{"user":"bleedcheez","timeMS":1669402276675,"count":1},{"user":"FridayAtElmStreet","timeMS":1669402583174,"count":1},{"user":"FrostedFerrets","timeMS":1669402584308,"count":1},{"user":"cajunrabbit90","timeMS":1669402589145,"count":10},{"user":"LilMermaid","timeMS":1669402597683,"count":1},{"user":"dbcallector","timeMS":1669402609541,"count":10},{"user":"jakenosnek","timeMS":1669402612456,"count":5},{"user":"FridayAtElmStreet","timeMS":1669402614496,"count":6},{"user":"TheZtakMan","timeMS":1669402615352,"count":3},{"user":"Rezoli","timeMS":1669402618888,"count":1},{"user":"bleedcheez","timeMS":1669402665949,"count":2},{"user":"richardsim7","timeMS":1669402673730,"count":1},{"user":"ProtusMose","timeMS":1669402692660,"count":4},{"user":"FridayAtElmStreet","timeMS":1669402698183,"count":2},{"user":"Lotharou","timeMS":1669402698289,"count":1},{"user":"FridayAtElmStreet","timeMS":1669402734981,"count":4},{"user":"FridayAtElmStreet","timeMS":1669402766507,"count":10},{"user":"jakenosnek","timeMS":1669402773869,"count":5},{"user":"MynockGate","timeMS":1669402784779,"count":9},{"user":"medlols","timeMS":1669402787979,"count":12},{"user":"dbcallector","timeMS":1669402790879,"count":10},{"user":"cajunrabbit90","timeMS":1669402797244,"count":10},{"user":"Lotharou","timeMS":1669402829192,"count":9},{"user":"FridayAtElmStreet","timeMS":1669402841255,"count":9},{"user":"dbcallector","timeMS":1669402854471,"count":9},{"user":"MynockGate","timeMS":1669402862592,"count":7},{"user":"FelixTava","timeMS":1669402868258,"count":9},{"user":"jakenosnek","timeMS":1669403073041,"count":4},{"user":"DGKALLDAYKAY","timeMS":1669403239402,"count":2},{"user":"PiercingThread7","timeMS":1669403399111,"count":4},{"user":"dbcallector","timeMS":1669403752468,"count":9},{"user":"karleygrey","timeMS":1669403765261,"count":9},{"user":"cajunrabbit90","timeMS":1669403769541,"count":9},{"user":"Lotharou","timeMS":1669403777440,"count":9},{"user":"PiercingThread7","timeMS":1669403778380,"count":4},{"user":"kemsmith","timeMS":1669403795558,"count":3},{"user":"WheatiesR1337","timeMS":1669403993802,"count":3},{"user":"rulerofwax","timeMS":1669404151797,"count":1},{"user":"MynockGate","timeMS":1669404159423,"count":3},{"user":"FridayAtElmStreet","timeMS":1669404163580,"count":1},{"user":"dbcallector","timeMS":1669404176555,"count":9},{"user":"MynockGate","timeMS":1669404192658,"count":9},{"user":"cajunrabbit90","timeMS":1669404200799,"count":9},{"user":"Lotharou","timeMS":1669404217270,"count":9},{"user":"AzraeII","timeMS":1669404217661,"count":9},{"user":"karleygrey","timeMS":1669404231516,"count":9},{"user":"Du6e","timeMS":1669404251047,"count":9},{"user":"PiercingThread7","timeMS":1669404253078,"count":5},{"user":"Deadenterprise","timeMS":1669404262403,"count":9},{"user":"FridayAtElmStreet","timeMS":1669404265277,"count":9},{"user":"WheatiesR1337","timeMS":1669404273170,"count":5},{"user":"WheatiesR1337","timeMS":1669404473266,"count":1},{"user":"kemsmith","timeMS":1669404473393,"count":1},{"user":"Du6e","timeMS":1669404478340,"count":1},{"user":"dbcallector","timeMS":1669404481370,"count":9},{"user":"MynockGate","timeMS":1669404485440,"count":9},{"user":"thunderbolt2790","timeMS":1669404487376,"count":2},{"user":"Forrest_ThePugKing","timeMS":1669404491346,"count":1},{"user":"karleygrey","timeMS":1669404492918,"count":9},{"user":"Chip_Chippy","timeMS":1669404493829,"count":1},{"user":"the_bearded_helmet","timeMS":1669404500611,"count":8},{"user":"pat_boy514","timeMS":1669404501692,"count":3},{"user":"idemerzel","timeMS":1669404505237,"count":1},{"user":"Arcannition","timeMS":1669404515673,"count":4},{"user":"MynockGate","timeMS":1669404525778,"count":4},{"user":"WheatiesR1337","timeMS":1669405128486,"count":1},{"user":"FridayAtElmStreet","timeMS":1669405362941,"count":1},{"user":"rulerofwax","timeMS":1669405366826,"count":1},{"user":"dbcallector","timeMS":1669405370140,"count":1},{"user":"chriskeyy","timeMS":1669405370624,"count":1},{"user":"chriskeyy","timeMS":1669405507818,"count":1},{"user":"pat_boy514","timeMS":1669405510278,"count":3},{"user":"dbcallector","timeMS":1669405512494,"count":1},{"user":"atomysktrue","timeMS":1669406421370,"count":1},{"user":"atomysktrue","timeMS":1669409384001,"count":1},{"user":"dbcallector","timeMS":1669409398576,"count":3},{"user":"FridayAtElmStreet","timeMS":1669409402543,"count":1},{"user":"chriskeyy","timeMS":1669409417224,"count":1},{"user":"rulerofwax","timeMS":1669410204569,"count":1},{"user":"FrostedFerrets","timeMS":1669410388618,"count":1},{"user":"chriskeyy","timeMS":1669410574885,"count":5},{"user":"FridayAtElmStreet","timeMS":1669410647031,"count":2},{"user":"Lotharou","timeMS":1669410648050,"count":9},{"user":"FrostedFerrets","timeMS":1669410650819,"count":1},{"user":"atomysktrue","timeMS":1669410655029,"count":1},{"user":"cajunrabbit90","timeMS":1669410659378,"count":10},{"user":"BoarLordNago","timeMS":1669410660535,"count":3},{"user":"chriskeyy","timeMS":1669410661285,"count":1},{"user":"chriskeyy","timeMS":1669410674881,"count":5},{"user":"BoarLordNago","timeMS":1669410679230,"count":3},{"user":"FridayAtElmStreet","timeMS":1669410822168,"count":1},{"user":"chriskeyy","timeMS":1669410919576,"count":1},{"user":"explohd","timeMS":1669410923027,"count":4},{"user":"FridayAtElmStreet","timeMS":1669410929108,"count":1},{"user":"Scyral","timeMS":1669410936707,"count":5},{"user":"richardsim7","timeMS":1669410940548,"count":1},{"user":"FridayAtElmStreet","timeMS":1669410985699,"count":1},{"user":"cajunrabbit90","timeMS":1669411000430,"count":10},{"user":"chriskeyy","timeMS":1669411007445,"count":5},{"user":"MynockGate","timeMS":1669411009026,"count":10},{"user":"FridayAtElmStreet","timeMS":1669411021753,"count":1},{"user":"thunderbolt2790","timeMS":1669411022891,"count":5},{"user":"BrownTownBrown","timeMS":1669411024173,"count":10},{"user":"ForeverMalone","timeMS":1669411025413,"count":1},{"user":"rulerofwax","timeMS":1669411026440,"count":1},{"user":"Inoeth","timeMS":1669411027710,"count":5},{"user":"UVCW","timeMS":1669411028520,"count":4},{"user":"Du6e","timeMS":1669411029076,"count":5},{"user":"Scyral","timeMS":1669411032525,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669411037388,"count":3},{"user":"Chip_Chippy","timeMS":1669411038556,"count":7},{"user":"beglebum","timeMS":1669411038818,"count":1},{"user":"Ben64r","timeMS":1669411040126,"count":1},{"user":"xfatxninjax","timeMS":1669411040422,"count":1},{"user":"BoarLordNago","timeMS":1669411042855,"count":3},{"user":"ForeverMalone","timeMS":1669411044290,"count":1},{"user":"explohd","timeMS":1669411046047,"count":11},{"user":"chriskeyy","timeMS":1669411046226,"count":3},{"user":"BrownTownBrown","timeMS":1669411046477,"count":3},{"user":"daskichan","timeMS":1669411049130,"count":5},{"user":"Scyral","timeMS":1669411054625,"count":15},{"user":"FridayAtElmStreet","timeMS":1669411060100,"count":1},{"user":"UVCW","timeMS":1669411089260,"count":5},{"user":"FridayAtElmStreet","timeMS":1669411136483,"count":1},{"user":"FridayAtElmStreet","timeMS":1669411144750,"count":2},{"user":"atomysktrue","timeMS":1669411245159,"count":1},{"user":"MynockGate","timeMS":1669411254387,"count":10},{"user":"MynockGate","timeMS":1669411257149,"count":20},{"user":"MynockGate","timeMS":1669411259504,"count":10},{"user":"chriskeyy","timeMS":1669411262138,"count":5},{"user":"cajunrabbit90","timeMS":1669411265828,"count":10},{"user":"Second_Trumpet","timeMS":1669411273934,"count":3},{"user":"Rezoli","timeMS":1669411274128,"count":20},{"user":"FrostedFerrets","timeMS":1669411279669,"count":4},{"user":"seagespacho","timeMS":1669411282142,"count":20},{"user":"cajunrabbit90","timeMS":1669411287214,"count":20},{"user":"MynockGate","timeMS":1669411291662,"count":20},{"user":"chriskeyy","timeMS":1669411312481,"count":20},{"user":"ForeverMalone","timeMS":1669411317327,"count":20},{"user":"cajunrabbit90","timeMS":1669411323732,"count":10},{"user":"daskichan","timeMS":1669411396097,"count":4},{"user":"WheatiesR1337","timeMS":1669411859738,"count":3},{"user":"atomysktrue","timeMS":1669411909028,"count":5},{"user":"WheatiesR1337","timeMS":1669411923562,"count":5},{"user":"rulerofwax","timeMS":1669411931515,"count":1},{"user":"Lotharou","timeMS":1669411937715,"count":5},{"user":"jakenosnek","timeMS":1669411942200,"count":5},{"user":"Scyral","timeMS":1669411956452,"count":5},{"user":"michaels4n","timeMS":1669411963257,"count":5},{"user":"atomysktrue","timeMS":1669411975474,"count":5},{"user":"pat_boy514","timeMS":1669411985315,"count":5},{"user":"daskichan","timeMS":1669412016892,"count":4},{"user":"amazonianathena98","timeMS":1669412032333,"count":4},{"user":"dluith","timeMS":1669412038448,"count":2},{"user":"SeedyEyes","timeMS":1669412038861,"count":4},{"user":"ChildishGoobino","timeMS":1669412044081,"count":3},{"user":"cajunrabbit90","timeMS":1669412066879,"count":8},{"user":"cajunrabbit90","timeMS":1669412219106,"count":8},{"user":"daddyygoose","timeMS":1669412225537,"count":4},{"user":"Lotharou","timeMS":1669412229355,"count":5},{"user":"cajunrabbit90","timeMS":1669412233260,"count":8},{"user":"Inoeth","timeMS":1669412234981,"count":8},{"user":"cajunrabbit90","timeMS":1669412239055,"count":4},{"user":"jakenosnek","timeMS":1669412240014,"count":15},{"user":"Scyral","timeMS":1669412244663,"count":5},{"user":"atomysktrue","timeMS":1669412245221,"count":5},{"user":"TheCrunge24","timeMS":1669412245806,"count":5},{"user":"ChildishGoobino","timeMS":1669412247022,"count":4},{"user":"pat_boy514","timeMS":1669412248322,"count":8},{"user":"beefsoupu","timeMS":1669412248608,"count":8},{"user":"pat_boy514","timeMS":1669412250624,"count":8},{"user":"cajunrabbit90","timeMS":1669412252813,"count":8},{"user":"WheatiesR1337","timeMS":1669412254734,"count":9},{"user":"UVCW","timeMS":1669412256151,"count":4},{"user":"Lotharou","timeMS":1669412258995,"count":5},{"user":"viviz","timeMS":1669412259699,"count":5},{"user":"nrMite","timeMS":1669412262621,"count":8},{"user":"FridayAtElmStreet","timeMS":1669412265456,"count":12},{"user":"Miklickers","timeMS":1669412266007,"count":4},{"user":"Miklickers","timeMS":1669412271495,"count":8},{"user":"chriskeyy","timeMS":1669412279472,"count":5},{"user":"daskichan","timeMS":1669412300462,"count":3},{"user":"karleygrey","timeMS":1669412499413,"count":1},{"user":"dluith","timeMS":1669412516862,"count":1},{"user":"cajunrabbit90","timeMS":1669412606961,"count":18},{"user":"ForeverMalone","timeMS":1669412609406,"count":1},{"user":"dluith","timeMS":1669412615775,"count":18},{"user":"karleygrey","timeMS":1669412618651,"count":18},{"user":"FridayAtElmStreet","timeMS":1669412622886,"count":1},{"user":"KadeemScheme","timeMS":1669412623611,"count":1},{"user":"UVCW","timeMS":1669412643334,"count":18},{"user":"cajunrabbit90","timeMS":1669412957026,"count":4},{"user":"cajunrabbit90","timeMS":1669412961299,"count":4},{"user":"cysann","timeMS":1669413276793,"count":1},{"user":"cajunrabbit90","timeMS":1669413351798,"count":9},{"user":"cajunrabbit90","timeMS":1669413417143,"count":9},{"user":"Lotharou","timeMS":1669413675191,"count":1},{"user":"Lotharou","timeMS":1669413680788,"count":1},{"user":"cajunrabbit90","timeMS":1669413926621,"count":9},{"user":"DuderGuyDude","timeMS":1669414069680,"count":1},{"user":"atomysktrue","timeMS":1669414449292,"count":4},{"user":"cajunrabbit90","timeMS":1669414481811,"count":4},{"user":"Lotharou","timeMS":1669414488800,"count":4},{"user":"atomysktrue","timeMS":1669415091572,"count":4},{"user":"amazonianathena98","timeMS":1669415458310,"count":1},{"user":"chriskeyy","timeMS":1669415685336,"count":1},{"user":"amazonianathena98","timeMS":1669416062216,"count":1},{"user":"SeedyEyes","timeMS":1669416756949,"count":4},{"user":"atomysktrue","timeMS":1669416766457,"count":5},{"user":"MynockGate","timeMS":1669416786347,"count":5},{"user":"nrMite","timeMS":1669416793993,"count":5},{"user":"SeedyEyes","timeMS":1669416801017,"count":4},{"user":"TheSisk0","timeMS":1669416802499,"count":5},{"user":"richardsim7","timeMS":1669416803301,"count":1},{"user":"ForeverMalone","timeMS":1669416804901,"count":1},{"user":"atomysktrue","timeMS":1669416805442,"count":5},{"user":"PointlessOk","timeMS":1669416806130,"count":1},{"user":"beglebum","timeMS":1669416808744,"count":1},{"user":"Lotharou","timeMS":1669416810375,"count":5},{"user":"karleygrey","timeMS":1669416810675,"count":5},{"user":"jakenosnek","timeMS":1669416817220,"count":5},{"user":"BrownTownBrown","timeMS":1669416818175,"count":5},{"user":"Ragingquitter","timeMS":1669416824184,"count":5},{"user":"cajunrabbit90","timeMS":1669416826086,"count":10},{"user":"Deadenterprise","timeMS":1669416830215,"count":5},{"user":"SeedyEyes","timeMS":1669416849566,"count":4},{"user":"amazonianathena98","timeMS":1669416960548,"count":1},{"user":"atomysktrue","timeMS":1669417015333,"count":5},{"user":"karleygrey","timeMS":1669417015558,"count":5},{"user":"jakenosnek","timeMS":1669417016821,"count":10},{"user":"cajunrabbit90","timeMS":1669417020031,"count":5},{"user":"chriskeyy","timeMS":1669417020112,"count":5},{"user":"TheSisk0","timeMS":1669417021601,"count":5},{"user":"PointlessOk","timeMS":1669417021701,"count":3},{"user":"beglebum","timeMS":1669417022484,"count":1},{"user":"SeedyEyes","timeMS":1669417023295,"count":4},{"user":"richardsim7","timeMS":1669417023821,"count":1},{"user":"WheatiesR1337","timeMS":1669417026220,"count":5},{"user":"ForeverMalone","timeMS":1669417026501,"count":7},{"user":"explohd","timeMS":1669417026750,"count":10},{"user":"xsneakerheadx94","timeMS":1669417027135,"count":5},{"user":"BrownTownBrown","timeMS":1669417027714,"count":5},{"user":"amazonianathena98","timeMS":1669417027893,"count":5},{"user":"ForeverMalone","timeMS":1669417029016,"count":7},{"user":"cajunrabbit90","timeMS":1669417031760,"count":10},{"user":"Lotharou","timeMS":1669417033272,"count":10},{"user":"Scyral","timeMS":1669417035510,"count":5},{"user":"Lotharou","timeMS":1669417035943,"count":10},{"user":"Deadenterprise","timeMS":1669417036238,"count":5},{"user":"daskichan","timeMS":1669417056139,"count":5},{"user":"Second_Trumpet","timeMS":1669417070249,"count":4},{"user":"Scyral","timeMS":1669417510023,"count":5},{"user":"amazonianathena98","timeMS":1669418009132,"count":1},{"user":"rulerofwax","timeMS":1669419008281,"count":4},{"user":"rulerofwax","timeMS":1669419011992,"count":1},{"user":"rulerofwax","timeMS":1669419014261,"count":3},{"user":"PolarizedBoi","timeMS":1669419028315,"count":3},{"user":"Lotharou","timeMS":1669419045197,"count":1},{"user":"Lotharou","timeMS":1669419053032,"count":1},{"user":"Lotharou","timeMS":1669419089277,"count":1},{"user":"rulerofwax","timeMS":1669419091417,"count":6},{"user":"Lotharou","timeMS":1669419091679,"count":1},{"user":"Lotharou","timeMS":1669419095686,"count":6},{"user":"rulerofwax","timeMS":1669419096214,"count":5},{"user":"Rezoli","timeMS":1669419098704,"count":9},{"user":"treyorrr","timeMS":1669419098736,"count":6},{"user":"richardsim7","timeMS":1669419099002,"count":1},{"user":"Rezoli","timeMS":1669419100208,"count":9},{"user":"Lotharou","timeMS":1669419102259,"count":6},{"user":"jakenosnek","timeMS":1669419103031,"count":6},{"user":"DontTazeMeBro44","timeMS":1669419103365,"count":6},{"user":"dbcallector","timeMS":1669419104440,"count":6},{"user":"Rezoli","timeMS":1669419105214,"count":6},{"user":"BrownTownBrown","timeMS":1669419106471,"count":9},{"user":"SourLemonLeaf","timeMS":1669419107091,"count":4},{"user":"atomysktrue","timeMS":1669419107132,"count":7},{"user":"PolarizedBoi","timeMS":1669419108086,"count":3},{"user":"Rezoli","timeMS":1669419110273,"count":6},{"user":"SourLemonLeaf","timeMS":1669419114541,"count":4},{"user":"Deadenterprise","timeMS":1669419115469,"count":5},{"user":"razorblahd","timeMS":1669419118190,"count":9},{"user":"Rezoli","timeMS":1669419118853,"count":6},{"user":"richardsim7","timeMS":1669419119732,"count":1},{"user":"PolarizedBoi","timeMS":1669419120018,"count":6},{"user":"BrownTownBrown","timeMS":1669419127012,"count":9},{"user":"razorblahd","timeMS":1669419127676,"count":6},{"user":"chriskeyy","timeMS":1669419130765,"count":11},{"user":"atomysktrue","timeMS":1669419130860,"count":6},{"user":"DontTazeMeBro44","timeMS":1669419134632,"count":6},{"user":"jakenosnek","timeMS":1669419138282,"count":6},{"user":"Rezoli","timeMS":1669419138539,"count":6},{"user":"Rezoli","timeMS":1669419139386,"count":6},{"user":"atomysktrue","timeMS":1669419152322,"count":6},{"user":"FridayAtElmStreet","timeMS":1669419584594,"count":1},{"user":"jakenosnek","timeMS":1669419678923,"count":5},{"user":"dbcallector","timeMS":1669419688000,"count":5},{"user":"MynockGate","timeMS":1669419690375,"count":5},{"user":"Scyral","timeMS":1669419696200,"count":5},{"user":"michaels4n","timeMS":1669419703384,"count":5},{"user":"atomysktrue","timeMS":1669419709489,"count":5},{"user":"FridayAtElmStreet","timeMS":1669419712319,"count":1},{"user":"michaels4n","timeMS":1669419770899,"count":5},{"user":"atomysktrue","timeMS":1669419776706,"count":5},{"user":"dbcallector","timeMS":1669419777549,"count":5},{"user":"FridayAtElmStreet","timeMS":1669419778928,"count":1},{"user":"jakenosnek","timeMS":1669419801716,"count":5},{"user":"MynockGate","timeMS":1669419804527,"count":5},{"user":"UVCW","timeMS":1669419806327,"count":5},{"user":"BrownTownBrown","timeMS":1669419808460,"count":5},{"user":"cajunrabbit90","timeMS":1669419812970,"count":5},{"user":"Deadenterprise","timeMS":1669419825786,"count":5},{"user":"dbcallector","timeMS":1669421057234,"count":1},{"user":"dbcallector","timeMS":1669422469770,"count":6},{"user":"michaels4n","timeMS":1669422477567,"count":5},{"user":"Scyral","timeMS":1669422485109,"count":5},{"user":"AzraeII","timeMS":1669423160229,"count":6},{"user":"BrownTownBrown","timeMS":1669423330912,"count":7},{"user":"beglebum","timeMS":1669423332446,"count":1},{"user":"michaels4n","timeMS":1669423333945,"count":4},{"user":"Du6e","timeMS":1669423334784,"count":4},{"user":"dbcallector","timeMS":1669423339304,"count":10},{"user":"atomysktrue","timeMS":1669423339449,"count":1},{"user":"UVCW","timeMS":1669423339927,"count":5},{"user":"daskichan","timeMS":1669423343027,"count":6},{"user":"yam_cakes","timeMS":1669423343365,"count":4},{"user":"The_GhostWarrior","timeMS":1669423343392,"count":3},{"user":"Scyral","timeMS":1669423343684,"count":6},{"user":"Shiny_Cony_","timeMS":1669423351075,"count":1},{"user":"dbcallector","timeMS":1669423357384,"count":1},{"user":"stickypricks","timeMS":1669423362091,"count":5},{"user":"dbcallector","timeMS":1669423372787,"count":9},{"user":"michaels4n","timeMS":1669423452506,"count":5},{"user":"daskichan","timeMS":1669423453281,"count":3},{"user":"Du6e","timeMS":1669423453466,"count":6},{"user":"bruce_waang","timeMS":1669423454323,"count":4},{"user":"Scyral","timeMS":1669423457958,"count":5},{"user":"dbcallector","timeMS":1669423458552,"count":11},{"user":"MynockGate","timeMS":1669423463329,"count":6},{"user":"BrownTownBrown","timeMS":1669423464420,"count":3},{"user":"AstralGrapes","timeMS":1669423465648,"count":5},{"user":"michaels4n","timeMS":1669423470010,"count":1},{"user":"dbcallector","timeMS":1669423470840,"count":22},{"user":"daskichan","timeMS":1669423485736,"count":3},{"user":"Deadenterprise","timeMS":1669423487397,"count":6},{"user":"dbcallector","timeMS":1669423496208,"count":11},{"user":"BrownTownBrown","timeMS":1669423498195,"count":4},{"user":"Scyral","timeMS":1669423609813,"count":1},{"user":"atomysktrue","timeMS":1669423675546,"count":3},{"user":"CarlosTheGardener","timeMS":1669424382010,"count":1},{"user":"Lotharou","timeMS":1669424394397,"count":1},{"user":"Scyral","timeMS":1669424401668,"count":5},{"user":"Spired12","timeMS":1669424410187,"count":1},{"user":"TheSisk0","timeMS":1669424414807,"count":1},{"user":"Second_Trumpet","timeMS":1669424766236,"count":4},{"user":"michaels4n","timeMS":1669424773641,"count":5},{"user":"MynockGate","timeMS":1669424783101,"count":5},{"user":"SeedyEyes","timeMS":1669424785493,"count":4},{"user":"DuderGuyDude","timeMS":1669425901673,"count":3},{"user":"Second_Trumpet","timeMS":1669425939437,"count":1},{"user":"BrownTownBrown","timeMS":1669425953897,"count":4},{"user":"torp1337","timeMS":1669425962169,"count":4},{"user":"dbcallector","timeMS":1669425966935,"count":5},{"user":"amazonianathena98","timeMS":1669425977251,"count":6},{"user":"PDCollins","timeMS":1669425981944,"count":6},{"user":"amazonianathena98","timeMS":1669426073908,"count":1},{"user":"FridayAtElmStreet","timeMS":1669426141674,"count":1},{"user":"amazonianathena98","timeMS":1669426365852,"count":1},{"user":"daskichan","timeMS":1669426624553,"count":4},{"user":"dbcallector","timeMS":1669426655873,"count":8},{"user":"Second_Trumpet","timeMS":1669426759438,"count":4},{"user":"TheSisk0","timeMS":1669426776239,"count":4},{"user":"BrownTownBrown","timeMS":1669426836515,"count":4},{"user":"xfatxninjax","timeMS":1669427766629,"count":2},{"user":"dbcallector","timeMS":1669427891252,"count":7},{"user":"UVCW","timeMS":1669428081075,"count":2},{"user":"argyle_pigeon","timeMS":1669428360922,"count":3},{"user":"dbcallector","timeMS":1669430270862,"count":6},{"user":"Evan_Al_Mighty","timeMS":1669432220679,"count":10},{"user":"KadeemScheme","timeMS":1669437276798,"count":1},{"user":"dbcallector","timeMS":1669437363696,"count":1},{"user":"dbcallector","timeMS":1669437771514,"count":3},{"user":"amazonianathena98","timeMS":1669437810630,"count":1},{"user":"markswanmusic","timeMS":1669437995490,"count":7},{"user":"unrealdustin","timeMS":1669438018089,"count":5},{"user":"Du6e","timeMS":1669438021045,"count":3},{"user":"Arcannition","timeMS":1669438031473,"count":3},{"user":"ProtusMose","timeMS":1669438032418,"count":2},{"user":"yam_cakes","timeMS":1669438034506,"count":20},{"user":"dbcallector","timeMS":1669438038499,"count":7},{"user":"yam_cakes","timeMS":1669438038892,"count":12},{"user":"ProtusMose","timeMS":1669438043822,"count":8},{"user":"Lotharou","timeMS":1669438045688,"count":17},{"user":"amazonianathena98","timeMS":1669438047708,"count":3},{"user":"Wallsh_","timeMS":1669438050200,"count":9},{"user":"Wallsh_","timeMS":1669438055208,"count":6},{"user":"WheatiesR1337","timeMS":1669438058131,"count":6},{"user":"markswanmusic","timeMS":1669438062160,"count":6},{"user":"SeedyEyes","timeMS":1669438074455,"count":13},{"user":"yam_cakes","timeMS":1669438084044,"count":4},{"user":"DrexsteinA","timeMS":1669438105222,"count":3},{"user":"yam_cakes","timeMS":1669438490712,"count":1},{"user":"amazonianathena98","timeMS":1669438498227,"count":5},{"user":"dbcallector","timeMS":1669438521792,"count":5},{"user":"chriskeyy","timeMS":1669438706617,"count":1},{"user":"yam_cakes","timeMS":1669438713184,"count":1},{"user":"MynockGate","timeMS":1669438990257,"count":10},{"user":"UVCW","timeMS":1669439612972,"count":3},{"user":"Evan_Al_Mighty","timeMS":1669440045734,"count":9},{"user":"Evan_Al_Mighty","timeMS":1669440243736,"count":10},{"user":"Du6e","timeMS":1669440244946,"count":11},{"user":"PointlessOk","timeMS":1669440251520,"count":10},{"user":"dbcallector","timeMS":1669440252636,"count":8},{"user":"DrexsteinA","timeMS":1669440255556,"count":5},{"user":"explohd","timeMS":1669440259043,"count":10},{"user":"Evan_Al_Mighty","timeMS":1669440261257,"count":6},{"user":"BrownTownBrown","timeMS":1669440261435,"count":5},{"user":"Scyral","timeMS":1669440261743,"count":15},{"user":"Lotharou","timeMS":1669440262480,"count":10},{"user":"MynockGate","timeMS":1669440267875,"count":10},{"user":"drwhethan","timeMS":1669440269036,"count":1},{"user":"BlueWhale_02","timeMS":1669440274945,"count":30},{"user":"BrownTownBrown","timeMS":1669440276724,"count":5},{"user":"unmakeyourselff","timeMS":1669440278470,"count":7},{"user":"dbcallector","timeMS":1669440280625,"count":10},{"user":"markswanmusic","timeMS":1669440282622,"count":5},{"user":"thicckingcolombo","timeMS":1669440286203,"count":7},{"user":"Evan_Al_Mighty","timeMS":1669440289595,"count":7},{"user":"Lotharou","timeMS":1669440290286,"count":5},{"user":"BlueWhale_02","timeMS":1669440293097,"count":15},{"user":"dbcallector","timeMS":1669440297050,"count":20},{"user":"Euphemysticism","timeMS":1669440298636,"count":6},{"user":"BlueWhale_02","timeMS":1669440298720,"count":14},{"user":"FridayAtElmStreet","timeMS":1669440310391,"count":1},{"user":"BlueWhale_02","timeMS":1669440317849,"count":6},{"user":"yam_cakes","timeMS":1669440330197,"count":1},{"user":"Euphemysticism","timeMS":1669440330232,"count":4},{"user":"KadeemScheme","timeMS":1669440472432,"count":2},{"user":"jakenosnek","timeMS":1669440554401,"count":4},{"user":"yam_cakes","timeMS":1669440592241,"count":6},{"user":"Euphemysticism","timeMS":1669440602265,"count":4},{"user":"SeedyEyes","timeMS":1669440682924,"count":9},{"user":"Lotharou","timeMS":1669440689606,"count":9},{"user":"dbcallector","timeMS":1669440694909,"count":9},{"user":"DrexsteinA","timeMS":1669440705228,"count":9},{"user":"yam_cakes","timeMS":1669440714413,"count":9},{"user":"yam_cakes","timeMS":1669440724424,"count":9},{"user":"SeedyEyes","timeMS":1669440733628,"count":12},{"user":"Euphemysticism","timeMS":1669440751896,"count":1},{"user":"yam_cakes","timeMS":1669440777668,"count":1},{"user":"PyknicRob","timeMS":1669440797462,"count":5},{"user":"FrostedFerrets","timeMS":1669440800066,"count":1},{"user":"yam_cakes","timeMS":1669440830544,"count":11},{"user":"MynockGate","timeMS":1669441405907,"count":3},{"user":"dbcallector","timeMS":1669441410160,"count":7},{"user":"SeedyEyes","timeMS":1669441414512,"count":10},{"user":"Lotharou","timeMS":1669441417897,"count":7},{"user":"DrexsteinA","timeMS":1669441420729,"count":5},{"user":"MynockGate","timeMS":1669441471618,"count":8},{"user":"yam_cakes","timeMS":1669441478506,"count":6},{"user":"SeedyEyes","timeMS":1669441602419,"count":8},{"user":"yam_cakes","timeMS":1669441609856,"count":6},{"user":"dbcallector","timeMS":1669441611403,"count":9},{"user":"jakenosnek","timeMS":1669441612090,"count":6},{"user":"drwhethan","timeMS":1669441621144,"count":3},{"user":"Lotharou","timeMS":1669441621255,"count":6},{"user":"Du6e","timeMS":1669441622294,"count":6},{"user":"Lotharou","timeMS":1669441623715,"count":6},{"user":"MynockGate","timeMS":1669441623998,"count":7},{"user":"SeedyEyes","timeMS":1669441625875,"count":12},{"user":"Scyral","timeMS":1669441638015,"count":6},{"user":"yam_cakes","timeMS":1669441640130,"count":7},{"user":"SeedyEyes","timeMS":1669441651560,"count":14},{"user":"yam_cakes","timeMS":1669441796667,"count":1},{"user":"drwhethan","timeMS":1669441797152,"count":1},{"user":"BobbieShroom","timeMS":1669441800853,"count":1},{"user":"FridayAtElmStreet","timeMS":1669441802622,"count":1},{"user":"UVCW","timeMS":1669441804718,"count":2},{"user":"MynockGate","timeMS":1669441807303,"count":8},{"user":"dbcallector","timeMS":1669441928291,"count":2},{"user":"SeedyEyes","timeMS":1669441933074,"count":1},{"user":"BrownTownBrown","timeMS":1669441937592,"count":2},{"user":"yam_cakes","timeMS":1669441944031,"count":2},{"user":"FridayAtElmStreet","timeMS":1669441954839,"count":1},{"user":"MynockGate","timeMS":1669441960813,"count":2},{"user":"drwhethan","timeMS":1669442540284,"count":1},{"user":"dbcallector","timeMS":1669442550959,"count":2},{"user":"yam_cakes","timeMS":1669442555324,"count":1},{"user":"drwhethan","timeMS":1669442564226,"count":2},{"user":"yam_cakes","timeMS":1669442579139,"count":2},{"user":"dbcallector","timeMS":1669442631152,"count":2},{"user":"FridayAtElmStreet","timeMS":1669442645957,"count":5},{"user":"MynockGate","timeMS":1669442706561,"count":10},{"user":"MynockGate","timeMS":1669442746210,"count":10},{"user":"Scyral","timeMS":1669442757176,"count":10},{"user":"SeedyEyes","timeMS":1669442774070,"count":10},{"user":"MynockGate","timeMS":1669442938543,"count":10},{"user":"BrownTownBrown","timeMS":1669442946514,"count":10},{"user":"dbcallector","timeMS":1669442958977,"count":10},{"user":"MynockGate","timeMS":1669442964175,"count":10},{"user":"dbcallector","timeMS":1669442986948,"count":10},{"user":"MynockGate","timeMS":1669442992404,"count":10},{"user":"SeedyEyes","timeMS":1669443004652,"count":10},{"user":"chriskeyy","timeMS":1669443007545,"count":10},{"user":"yam_cakes","timeMS":1669443015889,"count":6},{"user":"MynockGate","timeMS":1669443017665,"count":10},{"user":"dbcallector","timeMS":1669443049195,"count":2},{"user":"Scyral","timeMS":1669443054758,"count":2},{"user":"SeedyEyes","timeMS":1669443058425,"count":2},{"user":"BrownTownBrown","timeMS":1669443061203,"count":2},{"user":"yam_cakes","timeMS":1669443066437,"count":1},{"user":"Scyral","timeMS":1669443086858,"count":2},{"user":"dbcallector","timeMS":1669443099616,"count":4},{"user":"chriskeyy","timeMS":1669443101854,"count":10},{"user":"Euphemysticism","timeMS":1669443268609,"count":1},{"user":"FridayAtElmStreet","timeMS":1669443618996,"count":1},{"user":"WheatiesR1337","timeMS":1669443635710,"count":1},{"user":"dbcallector","timeMS":1669443644136,"count":1},{"user":"FridayAtElmStreet","timeMS":1669443650047,"count":1},{"user":"BrownTownBrown","timeMS":1669443658587,"count":1},{"user":"SeedyEyes","timeMS":1669443696631,"count":4},{"user":"jakenosnek","timeMS":1669443708371,"count":4},{"user":"MynockGate","timeMS":1669443710532,"count":4},{"user":"Lotharou","timeMS":1669443715693,"count":4},{"user":"BrownTownBrown","timeMS":1669443717164,"count":4},{"user":"xfatxninjax","timeMS":1669443718712,"count":4},{"user":"dbcallector","timeMS":1669443729715,"count":4},{"user":"MynockGate","timeMS":1669443776859,"count":10},{"user":"yam_cakes","timeMS":1669443802925,"count":1},{"user":"yam_cakes","timeMS":1669443812894,"count":2},{"user":"FridayAtElmStreet","timeMS":1669445033432,"count":1},{"user":"chriskeyy","timeMS":1669445039794,"count":1},{"user":"FridayAtElmStreet","timeMS":1669445593414,"count":1},{"user":"JRBangs","timeMS":1669445862089,"count":1},{"user":"MynockGate","timeMS":1669446462235,"count":4},{"user":"yam_cakes","timeMS":1669446473625,"count":5},{"user":"DrexsteinA","timeMS":1669446478810,"count":3},{"user":"SeedyEyes","timeMS":1669446494116,"count":6},{"user":"yam_cakes","timeMS":1669446975841,"count":1},{"user":"chriskeyy","timeMS":1669446996111,"count":1},{"user":"markswanmusic","timeMS":1669447025221,"count":9},{"user":"KadeemScheme","timeMS":1669447279070,"count":2},{"user":"jakenosnek","timeMS":1669447421090,"count":4},{"user":"Lotharou","timeMS":1669447447801,"count":2},{"user":"Lotharou","timeMS":1669447450459,"count":2},{"user":"FridayAtElmStreet","timeMS":1669447753155,"count":1},{"user":"KadeemScheme","timeMS":1669448032347,"count":4},{"user":"Lotharou","timeMS":1669448478554,"count":2},{"user":"Lotharou","timeMS":1669448484181,"count":2},{"user":"jakenosnek","timeMS":1669448486100,"count":2},{"user":"SeedyEyes","timeMS":1669448508606,"count":6},{"user":"markswanmusic","timeMS":1669448519378,"count":6},{"user":"MynockGate","timeMS":1669448548566,"count":5},{"user":"peachfurs","timeMS":1669448553731,"count":5},{"user":"markswanmusic","timeMS":1669448789209,"count":15},{"user":"KadeemScheme","timeMS":1669448949427,"count":1},{"user":"Lotharou","timeMS":1669449618285,"count":1},{"user":"xfatxninjax","timeMS":1669449620074,"count":2},{"user":"FridayAtElmStreet","timeMS":1669449620611,"count":1},{"user":"Ben64r","timeMS":1669449622105,"count":1},{"user":"Tomaetchen","timeMS":1669449623752,"count":3},{"user":"MynockGate","timeMS":1669449628546,"count":10},{"user":"CHEEsey_bussy","timeMS":1669449629060,"count":2},{"user":"SeedyEyes","timeMS":1669449631280,"count":1},{"user":"MynockGate","timeMS":1669449632142,"count":10},{"user":"dbcallector","timeMS":1669449639759,"count":10},{"user":"Lotharou","timeMS":1669449640901,"count":10},{"user":"peachfurs","timeMS":1669449641142,"count":10},{"user":"SeedyEyes","timeMS":1669449642727,"count":10},{"user":"yam_cakes","timeMS":1669449642778,"count":1},{"user":"Lotharou","timeMS":1669449643109,"count":10},{"user":"MynockGate","timeMS":1669449645036,"count":10},{"user":"Deadenterprise","timeMS":1669449650381,"count":10},{"user":"Tomaetchen","timeMS":1669449652042,"count":10},{"user":"MynockGate","timeMS":1669449655626,"count":10},{"user":"dbcallector","timeMS":1669449659489,"count":5},{"user":"jakenosnek","timeMS":1669449663772,"count":10},{"user":"markswanmusic","timeMS":1669449663777,"count":10},{"user":"MynockGate","timeMS":1669449667777,"count":10},{"user":"dbcallector","timeMS":1669449732546,"count":1},{"user":"Arcannition","timeMS":1669449739175,"count":1},{"user":"markswanmusic","timeMS":1669450768104,"count":6},{"user":"BrownTownBrown","timeMS":1669451615050,"count":4},{"user":"MynockGate","timeMS":1669451625522,"count":6},{"user":"phizx343","timeMS":1669451637017,"count":9},{"user":"McNeww","timeMS":1669451644549,"count":9},{"user":"markswanmusic","timeMS":1669451644836,"count":11},{"user":"Lotharou","timeMS":1669451650207,"count":11},{"user":"MynockGate","timeMS":1669451695208,"count":6},{"user":"McNeww","timeMS":1669451728211,"count":6},{"user":"dbcallector","timeMS":1669451735943,"count":10},{"user":"cuddlepuddl3","timeMS":1669451747963,"count":10},{"user":"markswanmusic","timeMS":1669451773766,"count":12},{"user":"suddenlyzoe","timeMS":1669451799656,"count":6},{"user":"jakenosnek","timeMS":1669451839838,"count":10},{"user":"BrownTownBrown","timeMS":1669452200420,"count":1},{"user":"markswanmusic","timeMS":1669474149817,"count":8},{"user":"thicckingcolombo","timeMS":1669475361276,"count":5},{"user":"markswanmusic","timeMS":1669478987095,"count":8},{"user":"coachchrisaz1","timeMS":1669478995989,"count":8},{"user":"Forrest_ThePugKing","timeMS":1669480529994,"count":3},{"user":"MynockGate","timeMS":1669492405813,"count":3},{"user":"viviz","timeMS":1669492422021,"count":3},{"user":"rulerofwax","timeMS":1669492431173,"count":4},{"user":"Nightbot","timeMS":1669492436273,"count":10},{"user":"dbcallector","timeMS":1669492438093,"count":7},{"user":"MynockGate","timeMS":1669492487602,"count":10},{"user":"daskichan","timeMS":1669492508501,"count":6},{"user":"dbcallector","timeMS":1669492538444,"count":10},{"user":"MynockGate","timeMS":1669492590703,"count":10},{"user":"dbcallector","timeMS":1669492723563,"count":10},{"user":"MynockGate","timeMS":1669492743142,"count":10},{"user":"richardsim7","timeMS":1669492824998,"count":1},{"user":"Nightbot","timeMS":1669492834772,"count":10},{"user":"MynockGate","timeMS":1669492835576,"count":10},{"user":"xfatxninjax","timeMS":1669492849135,"count":10},{"user":"QuiesNova","timeMS":1669492850038,"count":10},{"user":"cajunrabbit90","timeMS":1669492860718,"count":20},{"user":"rulerofwax","timeMS":1669492873416,"count":2},{"user":"dbcallector","timeMS":1669492874056,"count":10},{"user":"MynockGate","timeMS":1669492877856,"count":10},{"user":"Nightbot","timeMS":1669492882554,"count":10},{"user":"daskichan","timeMS":1669492882634,"count":6},{"user":"viviz","timeMS":1669492886153,"count":4},{"user":"xfatxninjax","timeMS":1669492886268,"count":10},{"user":"Decentpackage","timeMS":1669492903105,"count":10},{"user":"rulerofwax","timeMS":1669492920182,"count":10},{"user":"dbcallector","timeMS":1669493116928,"count":6},{"user":"MynockGate","timeMS":1669493158038,"count":10},{"user":"dbcallector","timeMS":1669493168513,"count":10},{"user":"xfatxninjax","timeMS":1669493212814,"count":10},{"user":"MynockGate","timeMS":1669493326677,"count":10},{"user":"dbcallector","timeMS":1669493616373,"count":2},{"user":"MynockGate","timeMS":1669493640703,"count":10},{"user":"daskichan","timeMS":1669493644285,"count":5},{"user":"torp1337","timeMS":1669495458081,"count":4},{"user":"dbcallector","timeMS":1669499822930,"count":4},{"user":"MynockGate","timeMS":1669499837797,"count":10},{"user":"dbcallector","timeMS":1669499852014,"count":10},{"user":"cajunrabbit90","timeMS":1669499870703,"count":10},{"user":"MynockGate","timeMS":1669499876447,"count":10},{"user":"Nightbot","timeMS":1669499902626,"count":10},{"user":"jakenosnek","timeMS":1669500380523,"count":9},{"user":"markswanmusic","timeMS":1669504179126,"count":5},{"user":"Nightbot","timeMS":1669506804544,"count":10},{"user":"daskichan","timeMS":1669506831176,"count":3},{"user":"Nightbot","timeMS":1669508992726,"count":10},{"user":"PolarizedBoi","timeMS":1669508996577,"count":1},{"user":"richardsim7","timeMS":1669509521984,"count":1},{"user":"Nightbot","timeMS":1669509575474,"count":10},{"user":"cajunrabbit90","timeMS":1669509581609,"count":10},{"user":"kimchikelso","timeMS":1669509592866,"count":10},{"user":"cajunrabbit90","timeMS":1669509611422,"count":10},{"user":"ImSpackle","timeMS":1669509618604,"count":10},{"user":"Scyral","timeMS":1669509623620,"count":10},{"user":"UVCW","timeMS":1669509631522,"count":10},{"user":"iNeverKnowMan","timeMS":1669509690562,"count":10},{"user":"jakenosnek","timeMS":1669509706916,"count":2},{"user":"Nightbot","timeMS":1669509740408,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669509755495,"count":10},{"user":"UVCW","timeMS":1669509912888,"count":1},{"user":"atomysktrue","timeMS":1669510057782,"count":3},{"user":"cajunrabbit90","timeMS":1669510589076,"count":10},{"user":"markswanmusic","timeMS":1669510602230,"count":4},{"user":"MynockGate","timeMS":1669510609554,"count":10},{"user":"markswanmusic","timeMS":1669510741631,"count":5},{"user":"jakenosnek","timeMS":1669511311234,"count":4},{"user":"daskichan","timeMS":1669512233139,"count":1},{"user":"bleedcheez","timeMS":1669512443607,"count":2},{"user":"Nightbot","timeMS":1669513243379,"count":10},{"user":"daskichan","timeMS":1669515113536,"count":5},{"user":"atomysktrue","timeMS":1669515367360,"count":1},{"user":"daskichan","timeMS":1669515378807,"count":1},{"user":"Nightbot","timeMS":1669515388801,"count":10},{"user":"atomysktrue","timeMS":1669515400935,"count":1},{"user":"daskichan","timeMS":1669515416416,"count":5},{"user":"atomysktrue","timeMS":1669515443516,"count":1},{"user":"Nightbot","timeMS":1669515561318,"count":10},{"user":"Nightbot","timeMS":1669517753995,"count":10},{"user":"Nightbot","timeMS":1669517913323,"count":10},{"user":"Nightbot","timeMS":1669518130707,"count":10},{"user":"Nightbot","timeMS":1669518214683,"count":10},{"user":"Nightbot","timeMS":1669518924022,"count":10},{"user":"atomysktrue","timeMS":1669519003841,"count":1},{"user":"jakenosnek","timeMS":1669519015362,"count":10},{"user":"Nightbot","timeMS":1669519506071,"count":10},{"user":"Nightbot","timeMS":1669519763777,"count":10},{"user":"atomysktrue","timeMS":1669519834549,"count":7},{"user":"markswanmusic","timeMS":1669519885041,"count":7},{"user":"markswanmusic","timeMS":1669520116805,"count":11},{"user":"atomysktrue","timeMS":1669520196553,"count":1},{"user":"Second_Trumpet","timeMS":1669520520512,"count":4},{"user":"atomysktrue","timeMS":1669521036441,"count":7},{"user":"jakenosnek","timeMS":1669521043950,"count":7},{"user":"markswanmusic","timeMS":1669521056024,"count":13},{"user":"Gralkor","timeMS":1669521060822,"count":7},{"user":"speak_the_speech","timeMS":1669521061609,"count":8},{"user":"iNeverKnowMan","timeMS":1669521065665,"count":7},{"user":"Second_Trumpet","timeMS":1669521068809,"count":7},{"user":"beglebum","timeMS":1669521077581,"count":2},{"user":"jakenosnek","timeMS":1669521138441,"count":7},{"user":"atomysktrue","timeMS":1669521139295,"count":7},{"user":"atomysktrue","timeMS":1669521145583,"count":7},{"user":"iNeverKnowMan","timeMS":1669521146219,"count":7},{"user":"Gralkor","timeMS":1669521146725,"count":7},{"user":"markswanmusic","timeMS":1669521149880,"count":2},{"user":"WhoYouDrew","timeMS":1669521151117,"count":7},{"user":"ArisakaT99","timeMS":1669521151783,"count":7},{"user":"viviz","timeMS":1669521152803,"count":2},{"user":"Second_Trumpet","timeMS":1669521154126,"count":7},{"user":"iNeverKnowMan","timeMS":1669521156827,"count":7},{"user":"AraSanji","timeMS":1669521157675,"count":8},{"user":"ArisakaT99","timeMS":1669521162786,"count":14},{"user":"xfatxninjax","timeMS":1669521164921,"count":7},{"user":"atomysktrue","timeMS":1669521167850,"count":7},{"user":"richardsim7","timeMS":1669521169283,"count":7},{"user":"BxgHxrns","timeMS":1669521175457,"count":7},{"user":"jakenosnek","timeMS":1669521203301,"count":7},{"user":"Nightbot","timeMS":1669521241307,"count":10},{"user":"ArisakaT99","timeMS":1669521243166,"count":7},{"user":"richardsim7","timeMS":1669521246599,"count":7},{"user":"jakenosnek","timeMS":1669521263706,"count":7},{"user":"Second_Trumpet","timeMS":1669521969099,"count":7},{"user":"jakenosnek","timeMS":1669522123862,"count":7},{"user":"markswanmusic","timeMS":1669522849849,"count":9},{"user":"Lotharou","timeMS":1669522865466,"count":4},{"user":"jakenosnek","timeMS":1669522867297,"count":4},{"user":"FridayAtElmStreet","timeMS":1669523167888,"count":1},{"user":"qgthor","timeMS":1669523376475,"count":7},{"user":"Second_Trumpet","timeMS":1669523945894,"count":7},{"user":"Nightbot","timeMS":1669524814969,"count":10},{"user":"Nightbot","timeMS":1669526107077,"count":10},{"user":"spyder256","timeMS":1669526116242,"count":10},{"user":"Second_Trumpet","timeMS":1669526939758,"count":1},{"user":"bleedcheez","timeMS":1669526966539,"count":6},{"user":"jakenosnek","timeMS":1669527011435,"count":8},{"user":"jakenosnek","timeMS":1669527016786,"count":4},{"user":"HipsterRudolph","timeMS":1669527020517,"count":8},{"user":"WheatiesR1337","timeMS":1669527022183,"count":10},{"user":"Nightbot","timeMS":1669527027552,"count":10},{"user":"slim_cognito420","timeMS":1669527037523,"count":3},{"user":"Lotharou","timeMS":1669527318584,"count":4},{"user":"FridayAtElmStreet","timeMS":1669527747755,"count":1},{"user":"Second_Trumpet","timeMS":1669527908968,"count":1},{"user":"Scyral","timeMS":1669527921727,"count":5},{"user":"FridayAtElmStreet","timeMS":1669527933101,"count":1},{"user":"Scyral","timeMS":1669527936188,"count":5},{"user":"markswanmusic","timeMS":1669527954207,"count":5},{"user":"slim_cognito420","timeMS":1669528331161,"count":8},{"user":"Lotharou","timeMS":1669528332193,"count":8},{"user":"PiercingThread7","timeMS":1669528332228,"count":8},{"user":"MynockGate","timeMS":1669528333046,"count":8},{"user":"undeadtweak","timeMS":1669528333129,"count":8},{"user":"DuderGuyDude","timeMS":1669528333436,"count":8},{"user":"BrownTownBrown","timeMS":1669528333440,"count":8},{"user":"rulerofwax","timeMS":1669528333554,"count":7},{"user":"dbcallector","timeMS":1669528333683,"count":8},{"user":"SeedyEyes","timeMS":1669528333944,"count":8},{"user":"MaiyaDanny","timeMS":1669528334019,"count":8},{"user":"HitTheUsernameLengthLimit","timeMS":1669528334513,"count":8},{"user":"chriskeyy","timeMS":1669528334748,"count":8},{"user":"DrexsteinA","timeMS":1669528334944,"count":8},{"user":"ForbiddenFractal","timeMS":1669528335613,"count":8},{"user":"karleygrey","timeMS":1669528335627,"count":8},{"user":"AzraeII","timeMS":1669528336504,"count":8},{"user":"TheSisk0","timeMS":1669528336608,"count":8},{"user":"rulerofwax","timeMS":1669528336760,"count":7},{"user":"UVCW","timeMS":1669528336772,"count":8},{"user":"ForeverMalone","timeMS":1669528337261,"count":8},{"user":"chriskeyy","timeMS":1669528340369,"count":7},{"user":"atomysktrue","timeMS":1669528342333,"count":8},{"user":"markswanmusic","timeMS":1669528342988,"count":8},{"user":"SeedyEyes","timeMS":1669528344715,"count":8},{"user":"Lotharou","timeMS":1669528350225,"count":7},{"user":"atomysktrue","timeMS":1669528353068,"count":8},{"user":"dbcallector","timeMS":1669528353984,"count":16},{"user":"SeedyEyes","timeMS":1669528354674,"count":8},{"user":"chriskeyy","timeMS":1669528354979,"count":8},{"user":"AraSanji","timeMS":1669528357940,"count":8},{"user":"AzraeII","timeMS":1669528358329,"count":8},{"user":"FridayAtElmStreet","timeMS":1669528360471,"count":1},{"user":"PointlessOk","timeMS":1669528362030,"count":3},{"user":"Tomaetchen","timeMS":1669528364251,"count":5},{"user":"DoctorRoffles","timeMS":1669528366374,"count":5},{"user":"rulerofwax","timeMS":1669528368028,"count":7},{"user":"chriskeyy","timeMS":1669528368665,"count":1},{"user":"Second_Trumpet","timeMS":1669528370330,"count":7},{"user":"SeedyEyes","timeMS":1669528371589,"count":20},{"user":"bleedcheez","timeMS":1669528372226,"count":4},{"user":"dbcallector","timeMS":1669528373100,"count":8},{"user":"SeedyEyes","timeMS":1669528374658,"count":16},{"user":"BrownTownBrown","timeMS":1669528377773,"count":8},{"user":"SeedyEyes","timeMS":1669528380051,"count":8},{"user":"SeedyEyes","timeMS":1669528388915,"count":16},{"user":"chriskeyy","timeMS":1669528392470,"count":7},{"user":"dluith","timeMS":1669528396915,"count":8},{"user":"WheatiesR1337","timeMS":1669528533425,"count":2},{"user":"Second_Trumpet","timeMS":1669528537320,"count":7},{"user":"chriskeyy","timeMS":1669528541035,"count":8},{"user":"DrexsteinA","timeMS":1669528551096,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669528551151,"count":6},{"user":"Nightbot","timeMS":1669529042559,"count":10},{"user":"atomysktrue","timeMS":1669529217839,"count":4},{"user":"Second_Trumpet","timeMS":1669529231585,"count":7},{"user":"Nightbot","timeMS":1669530457865,"count":10},{"user":"Second_Trumpet","timeMS":1669530466005,"count":7},{"user":"FridayAtElmStreet","timeMS":1669530843729,"count":1},{"user":"YeComicMan","timeMS":1669531051566,"count":8},{"user":"FridayAtElmStreet","timeMS":1669531380167,"count":1},{"user":"FridayAtElmStreet","timeMS":1669531816402,"count":3},{"user":"dbcallector","timeMS":1669531823664,"count":3},{"user":"Lotharou","timeMS":1669531829667,"count":1},{"user":"alexieee_","timeMS":1669531831470,"count":3},{"user":"FridayAtElmStreet","timeMS":1669531835187,"count":2},{"user":"MynockGate","timeMS":1669532643708,"count":10},{"user":"MynockGate","timeMS":1669532994130,"count":10},{"user":"Rezoli","timeMS":1669532997274,"count":10},{"user":"MynockGate","timeMS":1669532998372,"count":10},{"user":"dbcallector","timeMS":1669532999171,"count":10},{"user":"MynockGate","timeMS":1669533003088,"count":10},{"user":"MynockGate","timeMS":1669533006725,"count":10},{"user":"seagespacho","timeMS":1669533009825,"count":10},{"user":"MynockGate","timeMS":1669533011139,"count":10},{"user":"MynockGate","timeMS":1669533015646,"count":10},{"user":"MynockGate","timeMS":1669533020511,"count":10},{"user":"chriskeyy","timeMS":1669533022165,"count":10},{"user":"zona_james","timeMS":1669533024559,"count":10},{"user":"dungeonsiren","timeMS":1669533024740,"count":10},{"user":"MynockGate","timeMS":1669533025865,"count":10},{"user":"Rezoli","timeMS":1669533027742,"count":10},{"user":"MynockGate","timeMS":1669533029745,"count":10},{"user":"FridayAtElmStreet","timeMS":1669533033099,"count":1},{"user":"MynockGate","timeMS":1669533107386,"count":10},{"user":"Nightbot","timeMS":1669533126895,"count":10},{"user":"MynockGate","timeMS":1669533159045,"count":10},{"user":"Rezoli","timeMS":1669533165468,"count":10},{"user":"MynockGate","timeMS":1669533180550,"count":10},{"user":"iNeverKnowMan","timeMS":1669533214407,"count":10},{"user":"FridayAtElmStreet","timeMS":1669533399917,"count":1},{"user":"beglebum","timeMS":1669533404868,"count":1},{"user":"jakenosnek","timeMS":1669533836254,"count":8},{"user":"argyle_pigeon","timeMS":1669534481131,"count":5},{"user":"FridayAtElmStreet","timeMS":1669535349732,"count":1},{"user":"JRBangs","timeMS":1669535379060,"count":1},{"user":"FridayAtElmStreet","timeMS":1669535418915,"count":1},{"user":"alexieee_","timeMS":1669535433905,"count":4},{"user":"FridayAtElmStreet","timeMS":1669535438006,"count":1},{"user":"argyle_pigeon","timeMS":1669535620931,"count":9},{"user":"Nightbot","timeMS":1669536250774,"count":10},{"user":"argyle_pigeon","timeMS":1669537278878,"count":6},{"user":"jakenosnek","timeMS":1669537501216,"count":4},{"user":"FridayAtElmStreet","timeMS":1669542489473,"count":1},{"user":"FridayAtElmStreet","timeMS":1669542576881,"count":1},{"user":"FridayAtElmStreet","timeMS":1669542880370,"count":3},{"user":"FridayAtElmStreet","timeMS":1669542895449,"count":4},{"user":"DrexsteinA","timeMS":1669542904548,"count":5},{"user":"FridayAtElmStreet","timeMS":1669542957036,"count":1},{"user":"icrywhenicum_","timeMS":1669542985360,"count":4},{"user":"icrywhenicum_","timeMS":1669543197385,"count":4},{"user":"icrywhenicum_","timeMS":1669543224317,"count":2},{"user":"FridayAtElmStreet","timeMS":1669543534321,"count":2},{"user":"FridayAtElmStreet","timeMS":1669543613445,"count":2},{"user":"FridayAtElmStreet","timeMS":1669544804515,"count":1},{"user":"DrexsteinA","timeMS":1669544837024,"count":1},{"user":"KadeemScheme","timeMS":1669547705192,"count":1},{"user":"MynockGate","timeMS":1669552569659,"count":10},{"user":"MynockGate","timeMS":1669552635272,"count":10},{"user":"cajunrabbit90","timeMS":1669552654422,"count":10},{"user":"McNeww","timeMS":1669552664342,"count":10},{"user":"cajunrabbit90","timeMS":1669552667609,"count":10},{"user":"MynockGate","timeMS":1669552685588,"count":10},{"user":"MynockGate","timeMS":1669552696799,"count":10},{"user":"McNeww","timeMS":1669556084307,"count":1},{"user":"MynockGate","timeMS":1669556131856,"count":1},{"user":"MynockGate","timeMS":1669556203982,"count":10},{"user":"cajunrabbit90","timeMS":1669556206879,"count":10},{"user":"McNeww","timeMS":1669556213563,"count":10},{"user":"McNeww","timeMS":1669556340807,"count":10},{"user":"MynockGate","timeMS":1669556469706,"count":9},{"user":"MynockGate","timeMS":1669556481799,"count":6},{"user":"Forrest_ThePugKing","timeMS":1669556497729,"count":9},{"user":"McNeww","timeMS":1669556634592,"count":6},{"user":"MynockGate","timeMS":1669556736705,"count":6},{"user":"MynockGate","timeMS":1669562427093,"count":10},{"user":"MynockGate","timeMS":1669562466755,"count":10},{"user":"cajunrabbit90","timeMS":1669562472814,"count":10},{"user":"Nightbot","timeMS":1669562494254,"count":10},{"user":"Lotharou","timeMS":1669564546131,"count":1},{"user":"Lotharou","timeMS":1669564596161,"count":1},{"user":"Lotharou","timeMS":1669568042395,"count":1},{"user":"Lotharou","timeMS":1669568121559,"count":1},{"user":"WhoYouDrew","timeMS":1669568971344,"count":1},{"user":"MynockGate","timeMS":1669569219140,"count":10},{"user":"MynockGate","timeMS":1669571436925,"count":10},{"user":"cajunrabbit90","timeMS":1669571443155,"count":10},{"user":"Nightbot","timeMS":1669571445466,"count":10},{"user":"cajunrabbit90","timeMS":1669571458198,"count":10},{"user":"MynockGate","timeMS":1669571465699,"count":10},{"user":"MynockGate","timeMS":1669571539532,"count":10},{"user":"cajunrabbit90","timeMS":1669571546754,"count":10},{"user":"Lotharou","timeMS":1669571562285,"count":2},{"user":"MynockGate","timeMS":1669571582409,"count":2},{"user":"Rezoli","timeMS":1669572840510,"count":1},{"user":"FridayAtElmStreet","timeMS":1669572884234,"count":1},{"user":"Lotharou","timeMS":1669573343691,"count":1},{"user":"FridayAtElmStreet","timeMS":1669573420769,"count":1},{"user":"FridayAtElmStreet","timeMS":1669573428191,"count":1},{"user":"FridayAtElmStreet","timeMS":1669575328616,"count":1},{"user":"NakedManInSocks","timeMS":1669575339101,"count":1},{"user":"bleedcheez","timeMS":1669575749984,"count":3},{"user":"Forrest_ThePugKing","timeMS":1669575766839,"count":3},{"user":"FridayAtElmStreet","timeMS":1669581917048,"count":2},{"user":"FridayAtElmStreet","timeMS":1669581972127,"count":1},{"user":"MynockGate","timeMS":1669582082459,"count":2},{"user":"MynockGate","timeMS":1669582146917,"count":2},{"user":"MynockGate","timeMS":1669582242708,"count":2},{"user":"MynockGate","timeMS":1669582445240,"count":2},{"user":"MynockGate","timeMS":1669582829045,"count":2},{"user":"MynockGate","timeMS":1669582873947,"count":2},{"user":"dbcallector","timeMS":1669582890143,"count":2},{"user":"BrownTownBrown","timeMS":1669582921077,"count":1},{"user":"Nightbot","timeMS":1669582925304,"count":10},{"user":"cajunrabbit90","timeMS":1669582935735,"count":10},{"user":"McNeww","timeMS":1669583024433,"count":3},{"user":"MynockGate","timeMS":1669583614646,"count":2},{"user":"McNeww","timeMS":1669584698829,"count":3},{"user":"richardsim7","timeMS":1669584712318,"count":1},{"user":"viviz","timeMS":1669584723312,"count":1},{"user":"BrownTownBrown","timeMS":1669584724289,"count":3},{"user":"McNeww","timeMS":1669585521364,"count":1},{"user":"daskichan","timeMS":1669585548088,"count":3},{"user":"PointlessOk","timeMS":1669586832938,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669586847184,"count":1},{"user":"ItsMeSuperbad","timeMS":1669586851484,"count":1},{"user":"chriskeyy","timeMS":1669589033692,"count":18},{"user":"richardsim7","timeMS":1669589826417,"count":5},{"user":"MynockGate","timeMS":1669589840541,"count":4},{"user":"atomysktrue","timeMS":1669590025095,"count":1},{"user":"atomysktrue","timeMS":1669591392547,"count":3},{"user":"richardsim7","timeMS":1669591397649,"count":1},{"user":"atomysktrue","timeMS":1669591403316,"count":3},{"user":"jakenosnek","timeMS":1669591406249,"count":4},{"user":"Nightbot","timeMS":1669591406423,"count":10},{"user":"UVCW","timeMS":1669591413170,"count":5},{"user":"xfatxninjax","timeMS":1669591416176,"count":10},{"user":"Scyral","timeMS":1669591418707,"count":10},{"user":"Scyral","timeMS":1669591421629,"count":10},{"user":"Tomaetchen","timeMS":1669591422045,"count":10},{"user":"McNeww","timeMS":1669591429131,"count":10},{"user":"cajunrabbit90","timeMS":1669591434934,"count":20},{"user":"Arcannition","timeMS":1669591444727,"count":20},{"user":"spyder256","timeMS":1669591448906,"count":10},{"user":"McNeww","timeMS":1669591474264,"count":10},{"user":"ForeverMalone","timeMS":1669591485874,"count":20},{"user":"Nightbot","timeMS":1669594997729,"count":10},{"user":"FiveGetsYouTen","timeMS":1669596302211,"count":12},{"user":"BrownTownBrown","timeMS":1669596308635,"count":12},{"user":"FiveGetsYouTen","timeMS":1669596314081,"count":19},{"user":"FiveGetsYouTen","timeMS":1669596317081,"count":10},{"user":"TheSisk0","timeMS":1669596335925,"count":19},{"user":"FiveGetsYouTen","timeMS":1669596338810,"count":14},{"user":"Lotharou","timeMS":1669596345283,"count":14},{"user":"MynockGate","timeMS":1669596376431,"count":14},{"user":"asgarnieu","timeMS":1669596485283,"count":5},{"user":"BrownTownBrown","timeMS":1669596511176,"count":4},{"user":"MynockGate","timeMS":1669596692637,"count":10},{"user":"cajunrabbit90","timeMS":1669596727711,"count":10},{"user":"FridayAtElmStreet","timeMS":1669597865781,"count":2},{"user":"UVCW","timeMS":1669598065429,"count":4},{"user":"McNeww","timeMS":1669598217121,"count":10},{"user":"FridayAtElmStreet","timeMS":1669598967113,"count":1},{"user":"FridayAtElmStreet","timeMS":1669599046510,"count":2},{"user":"FiveGetsYouTen","timeMS":1669599050360,"count":7},{"user":"McNeww","timeMS":1669599054740,"count":10},{"user":"slim_cognito420","timeMS":1669599056346,"count":3},{"user":"slim_cognito420","timeMS":1669601022464,"count":3},{"user":"Second_Trumpet","timeMS":1669607829403,"count":7},{"user":"atomysktrue","timeMS":1669607977112,"count":4},{"user":"tiananmen_cubed","timeMS":1669607985985,"count":4},{"user":"guerrero9797","timeMS":1669608447054,"count":1},{"user":"markswanmusic","timeMS":1669608735831,"count":9},{"user":"coachchrisaz1","timeMS":1669608746834,"count":9},{"user":"adamandhisbun","timeMS":1669608774193,"count":15},{"user":"beglebum","timeMS":1669608809804,"count":4},{"user":"spyder256","timeMS":1669608818350,"count":4},{"user":"coachchrisaz1","timeMS":1669608823631,"count":4},{"user":"iNeverKnowMan","timeMS":1669608839559,"count":4},{"user":"Second_Trumpet","timeMS":1669608854972,"count":7},{"user":"Lotharou","timeMS":1669608860386,"count":7},{"user":"mr_mustash","timeMS":1669608867913,"count":7},{"user":"ArisakaT99","timeMS":1669608876904,"count":7},{"user":"FridayAtElmStreet","timeMS":1669611032242,"count":1},{"user":"DrexsteinA","timeMS":1669611041874,"count":1},{"user":"viviz","timeMS":1669611293139,"count":2},{"user":"beglebum","timeMS":1669611343239,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669611353228,"count":2},{"user":"C_a_l_e__","timeMS":1669611356363,"count":2},{"user":"Nightbot","timeMS":1669611791573,"count":10},{"user":"WheatiesR1337","timeMS":1669619478757,"count":1},{"user":"JRBangs","timeMS":1669620371706,"count":1},{"user":"MynockGate","timeMS":1669620385228,"count":4},{"user":"MynockGate","timeMS":1669620402277,"count":10},{"user":"MynockGate","timeMS":1669620407964,"count":10},{"user":"Scyral","timeMS":1669620632289,"count":10},{"user":"MynockGate","timeMS":1669620958127,"count":10},{"user":"MynockGate","timeMS":1669620962865,"count":10},{"user":"MynockGate","timeMS":1669620987185,"count":2},{"user":"MynockGate","timeMS":1669621576975,"count":10},{"user":"amaiumami","timeMS":1669621736700,"count":10},{"user":"WheatiesR1337","timeMS":1669621740454,"count":6},{"user":"WheatiesR1337","timeMS":1669621759996,"count":5},{"user":"MynockGate","timeMS":1669621766208,"count":10},{"user":"BrownTownBrown","timeMS":1669621815224,"count":10},{"user":"Nightbot","timeMS":1669622780076,"count":10},{"user":"MynockGate","timeMS":1669622784659,"count":10},{"user":"Scyral","timeMS":1669622795131,"count":10},{"user":"MynockGate","timeMS":1669623009618,"count":10},{"user":"Nightbot","timeMS":1669623122063,"count":10},{"user":"MynockGate","timeMS":1669623125410,"count":10},{"user":"Tomaetchen","timeMS":1669623132467,"count":6},{"user":"BrownTownBrown","timeMS":1669623150251,"count":4},{"user":"Nightbot","timeMS":1669623212851,"count":10},{"user":"MynockGate","timeMS":1669623282654,"count":10},{"user":"Nightbot","timeMS":1669623298740,"count":10},{"user":"MynockGate","timeMS":1669623307123,"count":10},{"user":"Nightbot","timeMS":1669623604933,"count":10},{"user":"MynockGate","timeMS":1669623608339,"count":10},{"user":"MynockGate","timeMS":1669623618239,"count":10},{"user":"JRBangs","timeMS":1669623624143,"count":15},{"user":"yam_cakes","timeMS":1669623664447,"count":10},{"user":"Nightbot","timeMS":1669623971148,"count":10},{"user":"MynockGate","timeMS":1669623979276,"count":10},{"user":"yam_cakes","timeMS":1669623991047,"count":10},{"user":"jakenosnek","timeMS":1669624070117,"count":10},{"user":"Nightbot","timeMS":1669625339973,"count":10},{"user":"MynockGate","timeMS":1669625369233,"count":10},{"user":"Nightbot","timeMS":1669626913201,"count":10},{"user":"AestheticallyGeeky","timeMS":1669626928405,"count":10},{"user":"Nightbot","timeMS":1669627140177,"count":10},{"user":"yam_cakes","timeMS":1669627148361,"count":10},{"user":"MynockGate","timeMS":1669627154699,"count":10},{"user":"AestheticallyGeeky","timeMS":1669627178600,"count":10},{"user":"Nightbot","timeMS":1669627566443,"count":10},{"user":"AestheticallyGeeky","timeMS":1669627566672,"count":10},{"user":"yam_cakes","timeMS":1669627572188,"count":1},{"user":"MynockGate","timeMS":1669627575155,"count":10},{"user":"yam_cakes","timeMS":1669627576838,"count":10},{"user":"Lotharou","timeMS":1669627584464,"count":10},{"user":"Scyral","timeMS":1669627598553,"count":10},{"user":"MynockGate","timeMS":1669627776632,"count":10},{"user":"UVCW","timeMS":1669627783369,"count":10},{"user":"MynockGate","timeMS":1669627815042,"count":9},{"user":"MynockGate","timeMS":1669627820348,"count":9},{"user":"beglebum","timeMS":1669628274492,"count":10},{"user":"Nightbot","timeMS":1669628277942,"count":10},{"user":"UVCW","timeMS":1669628281471,"count":10},{"user":"yam_cakes","timeMS":1669628284573,"count":10},{"user":"MynockGate","timeMS":1669628285797,"count":11},{"user":"MynockGate","timeMS":1669628289469,"count":10},{"user":"Scyral","timeMS":1669628290802,"count":10},{"user":"Nightbot","timeMS":1669629620860,"count":10},{"user":"Scyral","timeMS":1669630719316,"count":12},{"user":"Scyral","timeMS":1669630722159,"count":12},{"user":"yam_cakes","timeMS":1669630729562,"count":10},{"user":"McNeww","timeMS":1669630750581,"count":10},{"user":"MynockGate","timeMS":1669630754651,"count":10},{"user":"MynockGate","timeMS":1669630880936,"count":10},{"user":"McNeww","timeMS":1669630935870,"count":10},{"user":"MynockGate","timeMS":1669630968076,"count":10},{"user":"MynockGate","timeMS":1669631651291,"count":10},{"user":"McNeww","timeMS":1669631694050,"count":10},{"user":"Lotharou","timeMS":1669639532217,"count":1},{"user":"Nightbot","timeMS":1669654135020,"count":10},{"user":"McNeww","timeMS":1669654144099,"count":10},{"user":"cajunrabbit90","timeMS":1669654168105,"count":10},{"user":"McNeww","timeMS":1669660199049,"count":8},{"user":"MynockGate","timeMS":1669660214648,"count":10},{"user":"FridayAtElmStreet","timeMS":1669660231456,"count":2},{"user":"markswanmusic","timeMS":1669663557737,"count":9},{"user":"McNeww","timeMS":1669663567676,"count":3},{"user":"MynockGate","timeMS":1669663572071,"count":10},{"user":"MynockGate","timeMS":1669663578769,"count":10},{"user":"UVCW","timeMS":1669663592378,"count":10},{"user":"Scyral","timeMS":1669665908527,"count":5},{"user":"richardsim7","timeMS":1669670598443,"count":1},{"user":"Scyral","timeMS":1669671154429,"count":5},{"user":"McNeww","timeMS":1669673129226,"count":3},{"user":"chriskeyy","timeMS":1669673137894,"count":1},{"user":"Nightbot","timeMS":1669678746439,"count":10},{"user":"slim_cognito420","timeMS":1669678850289,"count":10},{"user":"MynockGate","timeMS":1669678868181,"count":10},{"user":"MynockGate","timeMS":1669678877494,"count":10},{"user":"dbcallector","timeMS":1669678890960,"count":10},{"user":"MynockGate","timeMS":1669678971039,"count":10},{"user":"dbcallector","timeMS":1669678975284,"count":6},{"user":"MynockGate","timeMS":1669679892291,"count":6},{"user":"WheatiesR1337","timeMS":1669679900038,"count":5},{"user":"Nightbot","timeMS":1669679900920,"count":10},{"user":"chriskeyy","timeMS":1669679903457,"count":6},{"user":"cajunrabbit90","timeMS":1669679919145,"count":6},{"user":"CookieKrisp","timeMS":1669679920787,"count":6},{"user":"thunderbolt2790","timeMS":1669679947557,"count":1},{"user":"0mmurg","timeMS":1669680460282,"count":2},{"user":"pat_boy514","timeMS":1669680671676,"count":3},{"user":"MynockGate","timeMS":1669681239620,"count":4},{"user":"WheatiesR1337","timeMS":1669681248428,"count":8},{"user":"bleedcheez","timeMS":1669681262788,"count":1},{"user":"thunderbolt2790","timeMS":1669681268195,"count":1},{"user":"viviz","timeMS":1669681299369,"count":1},{"user":"FridayAtElmStreet","timeMS":1669681545811,"count":1},{"user":"cajunrabbit90","timeMS":1669683231129,"count":10},{"user":"Nightbot","timeMS":1669683262109,"count":10},{"user":"Nightbot","timeMS":1669683300084,"count":10},{"user":"WheatiesR1337","timeMS":1669683321270,"count":1},{"user":"FridayAtElmStreet","timeMS":1669683527939,"count":1},{"user":"MynockGate","timeMS":1669683563921,"count":5},{"user":"MynockGate","timeMS":1669683574754,"count":10},{"user":"MynockGate","timeMS":1669683579581,"count":10},{"user":"icrywhenicum_","timeMS":1669683586834,"count":6},{"user":"wiltygreens","timeMS":1669683598201,"count":6},{"user":"Scyral","timeMS":1669683609852,"count":10},{"user":"Scyral","timeMS":1669683612511,"count":10},{"user":"UVCW","timeMS":1669683637713,"count":10},{"user":"cajunrabbit90","timeMS":1669683678952,"count":10},{"user":"icrywhenicum_","timeMS":1669684347898,"count":2},{"user":"Nightbot","timeMS":1669685634185,"count":10},{"user":"atomysktrue","timeMS":1669685714479,"count":4},{"user":"atomysktrue","timeMS":1669685850547,"count":4},{"user":"FiveGetsYouTen","timeMS":1669686002070,"count":3},{"user":"atomysktrue","timeMS":1669686051008,"count":4},{"user":"jakenosnek","timeMS":1669686135885,"count":3},{"user":"daskichan","timeMS":1669686494425,"count":4},{"user":"Nightbot","timeMS":1669686561272,"count":10},{"user":"wiltygreens","timeMS":1669686561524,"count":1},{"user":"UVCW","timeMS":1669686564979,"count":3},{"user":"MynockGate","timeMS":1669686605363,"count":10},{"user":"daskichan","timeMS":1669686616564,"count":4},{"user":"Nightbot","timeMS":1669686712366,"count":10},{"user":"FiveGetsYouTen","timeMS":1669687182700,"count":17},{"user":"wiltygreens","timeMS":1669687404741,"count":2},{"user":"Nightbot","timeMS":1669687446278,"count":10},{"user":"daskichan","timeMS":1669687464635,"count":4},{"user":"argyle_pigeon","timeMS":1669687757695,"count":5},{"user":"FiveGetsYouTen","timeMS":1669687821786,"count":7},{"user":"atomysktrue","timeMS":1669687821873,"count":4},{"user":"MynockGate","timeMS":1669687844813,"count":5},{"user":"Tomaetchen","timeMS":1669687847354,"count":2},{"user":"Nightbot","timeMS":1669687852749,"count":10},{"user":"FiveGetsYouTen","timeMS":1669687869956,"count":5},{"user":"FiveGetsYouTen","timeMS":1669687885047,"count":10},{"user":"FiveGetsYouTen","timeMS":1669687899605,"count":2},{"user":"FiveGetsYouTen","timeMS":1669687938349,"count":1},{"user":"FiveGetsYouTen","timeMS":1669687961509,"count":1},{"user":"jakenosnek","timeMS":1669688025698,"count":5},{"user":"wiltygreens","timeMS":1669688070190,"count":4},{"user":"MynockGate","timeMS":1669688173702,"count":5},{"user":"wiltygreens","timeMS":1669688177447,"count":4},{"user":"daskichan","timeMS":1669688189988,"count":2},{"user":"suddenlyzoe","timeMS":1669688206460,"count":5},{"user":"BrownTownBrown","timeMS":1669688386507,"count":1},{"user":"wiltygreens","timeMS":1669688391166,"count":4},{"user":"atomysktrue","timeMS":1669688417756,"count":1},{"user":"Nightbot","timeMS":1669688472760,"count":10},{"user":"chriskeyy","timeMS":1669688496346,"count":10},{"user":"CHEEsey_bussy","timeMS":1669689185685,"count":1},{"user":"wiltygreens","timeMS":1669689546173,"count":4},{"user":"wiltygreens","timeMS":1669689667938,"count":1},{"user":"Nightbot","timeMS":1669689671275,"count":10},{"user":"beglebum","timeMS":1669689674291,"count":1},{"user":"daskichan","timeMS":1669689674456,"count":5},{"user":"zona_james","timeMS":1669689675619,"count":1},{"user":"FiveGetsYouTen","timeMS":1669689677212,"count":7},{"user":"FridayAtElmStreet","timeMS":1669689677462,"count":1},{"user":"PointlessOk","timeMS":1669689680121,"count":1},{"user":"FiveGetsYouTen","timeMS":1669689681667,"count":9},{"user":"Karyudo_","timeMS":1669689685162,"count":4},{"user":"MynockGate","timeMS":1669689685979,"count":5},{"user":"FridayAtElmStreet","timeMS":1669689686747,"count":2},{"user":"chriskeyy","timeMS":1669689687024,"count":10},{"user":"UVCW","timeMS":1669689688327,"count":7},{"user":"wiltygreens","timeMS":1669689691295,"count":4},{"user":"dr_ficus","timeMS":1669689691980,"count":4},{"user":"alexieee_","timeMS":1669689693336,"count":3},{"user":"MynockGate","timeMS":1669689694406,"count":10},{"user":"markswanmusic","timeMS":1669689694526,"count":7},{"user":"Deadenterprise","timeMS":1669689694739,"count":10},{"user":"McNeww","timeMS":1669689699983,"count":4},{"user":"TheSisk0","timeMS":1669689705310,"count":7},{"user":"MoldyButtCubes","timeMS":1669689706840,"count":10},{"user":"viviz","timeMS":1669689706917,"count":10},{"user":"fernandioh0","timeMS":1669689711132,"count":10},{"user":"MynockGate","timeMS":1669689713099,"count":9},{"user":"MynockGate","timeMS":1669689715647,"count":9},{"user":"chriskeyy","timeMS":1669689717352,"count":20},{"user":"bubbles69___","timeMS":1669689722417,"count":3},{"user":"MynockGate","timeMS":1669689723387,"count":9},{"user":"karleygrey","timeMS":1669689729834,"count":9},{"user":"wiltygreens","timeMS":1669689749090,"count":4},{"user":"CHEEsey_bussy","timeMS":1669689800112,"count":1},{"user":"atomysktrue","timeMS":1669689801540,"count":1},{"user":"PointlessOk","timeMS":1669689826400,"count":1},{"user":"McNeww","timeMS":1669689882620,"count":4},{"user":"AyyTeaJeez","timeMS":1669689908073,"count":5},{"user":"CHEEsey_bussy","timeMS":1669689934195,"count":1},{"user":"McNeww","timeMS":1669689967309,"count":4},{"user":"MynockGate","timeMS":1669689984576,"count":9},{"user":"wiltygreens","timeMS":1669689987244,"count":4},{"user":"AyyTeaJeez","timeMS":1669690002349,"count":7},{"user":"wiltygreens","timeMS":1669690017766,"count":4},{"user":"McNeww","timeMS":1669690119896,"count":4},{"user":"dr_ficus","timeMS":1669690538072,"count":1},{"user":"WheatiesR1337","timeMS":1669690612354,"count":1},{"user":"McNeww","timeMS":1669690727176,"count":3},{"user":"FridayAtElmStreet","timeMS":1669690832419,"count":1},{"user":"wiltygreens","timeMS":1669690874069,"count":4},{"user":"CHEEsey_bussy","timeMS":1669690883936,"count":1},{"user":"beglebum","timeMS":1669691132700,"count":1},{"user":"wiltygreens","timeMS":1669691301844,"count":4},{"user":"FridayAtElmStreet","timeMS":1669691339306,"count":1},{"user":"WheatiesR1337","timeMS":1669691349465,"count":5},{"user":"jakenosnek","timeMS":1669691359452,"count":2},{"user":"karleygrey","timeMS":1669691385794,"count":4},{"user":"McNeww","timeMS":1669691393065,"count":4},{"user":"Du6e","timeMS":1669691399420,"count":3},{"user":"dr_ficus","timeMS":1669691404775,"count":4},{"user":"McNeww","timeMS":1669691444183,"count":4},{"user":"kemsmith","timeMS":1669691477039,"count":1},{"user":"dr_ficus","timeMS":1669691667058,"count":4},{"user":"atomysktrue","timeMS":1669691706914,"count":4},{"user":"McNeww","timeMS":1669691722582,"count":4},{"user":"phizx343","timeMS":1669691750952,"count":2},{"user":"McNeww","timeMS":1669692008225,"count":2},{"user":"McNeww","timeMS":1669692106195,"count":3},{"user":"MoldyButtCubes","timeMS":1669692163357,"count":1},{"user":"McNeww","timeMS":1669692166574,"count":1},{"user":"McNeww","timeMS":1669692371235,"count":3},{"user":"CHEEsey_bussy","timeMS":1669692377068,"count":1},{"user":"McNeww","timeMS":1669692386758,"count":2},{"user":"CHEEsey_bussy","timeMS":1669692710171,"count":1},{"user":"McNeww","timeMS":1669692757779,"count":3},{"user":"karleygrey","timeMS":1669692776528,"count":1},{"user":"MoldyButtCubes","timeMS":1669692781989,"count":1},{"user":"McNeww","timeMS":1669692784094,"count":1},{"user":"MoldyButtCubes","timeMS":1669692794021,"count":2},{"user":"Du6e","timeMS":1669692818833,"count":1},{"user":"karleygrey","timeMS":1669692889895,"count":1},{"user":"McNeww","timeMS":1669692920472,"count":1},{"user":"MynockGate","timeMS":1669692921416,"count":4},{"user":"chriskeyy","timeMS":1669692933021,"count":9},{"user":"McNeww","timeMS":1669692939767,"count":1},{"user":"chriskeyy","timeMS":1669692951957,"count":1},{"user":"MoldyButtCubes","timeMS":1669692983919,"count":2},{"user":"Du6e","timeMS":1669692993215,"count":3},{"user":"asgarnieu","timeMS":1669692998474,"count":3},{"user":"karleygrey","timeMS":1669692999580,"count":16},{"user":"atomysktrue","timeMS":1669693003944,"count":3},{"user":"chriskeyy","timeMS":1669693017205,"count":1},{"user":"MoldyButtCubes","timeMS":1669693023012,"count":2},{"user":"wiltygreens","timeMS":1669693031204,"count":1},{"user":"wiltygreens","timeMS":1669693039232,"count":5},{"user":"McNeww","timeMS":1669693039787,"count":3},{"user":"atomysktrue","timeMS":1669693041610,"count":4},{"user":"daskichan","timeMS":1669693059785,"count":8},{"user":"McNeww","timeMS":1669693064089,"count":5},{"user":"beglebum","timeMS":1669693068466,"count":5},{"user":"atomysktrue","timeMS":1669693143168,"count":4},{"user":"McNeww","timeMS":1669693151559,"count":4},{"user":"atomysktrue","timeMS":1669693155899,"count":4},{"user":"MoldyButtCubes","timeMS":1669693157850,"count":1},{"user":"treyorrr","timeMS":1669693159889,"count":4},{"user":"AestheticallyGeeky","timeMS":1669693165903,"count":4},{"user":"MoldyButtCubes","timeMS":1669693171380,"count":4},{"user":"Shiny_Cony_","timeMS":1669693182641,"count":4},{"user":"bleedcheez","timeMS":1669693234073,"count":2},{"user":"bleedcheez","timeMS":1669693281669,"count":3},{"user":"PointlessOk","timeMS":1669693432986,"count":1},{"user":"markswanmusic","timeMS":1669693465402,"count":6},{"user":"McNeww","timeMS":1669693475106,"count":4},{"user":"adamandhisbun","timeMS":1669693527933,"count":7},{"user":"daskichan","timeMS":1669693541130,"count":6},{"user":"McNeww","timeMS":1669693547276,"count":6},{"user":"TheSisk0","timeMS":1669693554957,"count":6},{"user":"banano_covid_2019","timeMS":1669693562223,"count":1},{"user":"atomysktrue","timeMS":1669693669369,"count":4},{"user":"Nightbot","timeMS":1669693716690,"count":10},{"user":"McNeww","timeMS":1669693778519,"count":1},{"user":"McNeww","timeMS":1669693899651,"count":3},{"user":"FridayAtElmStreet","timeMS":1669693984449,"count":1},{"user":"MoldyButtCubes","timeMS":1669694442393,"count":3},{"user":"Nightbot","timeMS":1669694448625,"count":10},{"user":"McNeww","timeMS":1669694459093,"count":10},{"user":"MynockGate","timeMS":1669694459451,"count":10},{"user":"TheSisk0","timeMS":1669694459826,"count":10},{"user":"dbcallector","timeMS":1669694462616,"count":10},{"user":"TheSisk0","timeMS":1669694464166,"count":10},{"user":"atomysktrue","timeMS":1669694464172,"count":5},{"user":"KadeemScheme","timeMS":1669694465170,"count":10},{"user":"PartyDudeMikey","timeMS":1669694467166,"count":10},{"user":"Deadenterprise","timeMS":1669694467953,"count":10},{"user":"chriskeyy","timeMS":1669694472743,"count":10},{"user":"MynockGate","timeMS":1669694473877,"count":10},{"user":"bleedcheez","timeMS":1669694475052,"count":10},{"user":"Scyral","timeMS":1669694476594,"count":10},{"user":"Nightbot","timeMS":1669694481460,"count":10},{"user":"MynockGate","timeMS":1669694484944,"count":10},{"user":"karleygrey","timeMS":1669694488334,"count":10},{"user":"MoldyButtCubes","timeMS":1669694491511,"count":10},{"user":"spyder256","timeMS":1669694494932,"count":10},{"user":"chriskeyy","timeMS":1669694496599,"count":20},{"user":"atomysktrue","timeMS":1669694498186,"count":5},{"user":"BrownTownBrown","timeMS":1669694499451,"count":3},{"user":"jakenosnek","timeMS":1669694499486,"count":10},{"user":"suddenlyzoe","timeMS":1669694503057,"count":10},{"user":"WheatiesR1337","timeMS":1669694515581,"count":9},{"user":"kimchikelso","timeMS":1669694517757,"count":10},{"user":"viviz","timeMS":1669694520322,"count":10},{"user":"bleedcheez","timeMS":1669694520623,"count":10},{"user":"MoldyButtCubes","timeMS":1669694539864,"count":20},{"user":"WheatiesR1337","timeMS":1669694552665,"count":3},{"user":"McNeww","timeMS":1669694569409,"count":1},{"user":"argyle_pigeon","timeMS":1669694574649,"count":3},{"user":"jakenosnek","timeMS":1669694579138,"count":10},{"user":"bleedcheez","timeMS":1669694584222,"count":10},{"user":"MoldyButtCubes","timeMS":1669694587980,"count":20},{"user":"MynockGate","timeMS":1669694599796,"count":10},{"user":"McNeww","timeMS":1669695352754,"count":4},{"user":"bleedcheez","timeMS":1669695645939,"count":10},{"user":"MynockGate","timeMS":1669695688999,"count":10},{"user":"Nightbot","timeMS":1669695690271,"count":10},{"user":"Nightbot","timeMS":1669696358657,"count":10},{"user":"FridayAtElmStreet","timeMS":1669698434577,"count":1},{"user":"FridayAtElmStreet","timeMS":1669698859664,"count":1},{"user":"Nightbot","timeMS":1669698864147,"count":10},{"user":"Tomaetchen","timeMS":1669698882258,"count":1},{"user":"Nightbot","timeMS":1669698912791,"count":10},{"user":"McNeww","timeMS":1669698920270,"count":3},{"user":"DrexsteinA","timeMS":1669698932911,"count":2},{"user":"argyle_pigeon","timeMS":1669698935716,"count":4},{"user":"McNeww","timeMS":1669699128203,"count":1},{"user":"FridayAtElmStreet","timeMS":1669699207253,"count":1},{"user":"BrownTownBrown","timeMS":1669699269681,"count":4},{"user":"dbcallector","timeMS":1669699282822,"count":1},{"user":"DrexsteinA","timeMS":1669699289408,"count":1},{"user":"MynockGate","timeMS":1669699292991,"count":4},{"user":"BrownTownBrown","timeMS":1669699871175,"count":1},{"user":"DrexsteinA","timeMS":1669700372769,"count":2},{"user":"BrownTownBrown","timeMS":1669700689980,"count":1},{"user":"BrownTownBrown","timeMS":1669701275961,"count":2},{"user":"Tomaetchen","timeMS":1669701552929,"count":4},{"user":"JRBangs","timeMS":1669701767232,"count":4},{"user":"TheStylishBum","timeMS":1669702307480,"count":4},{"user":"BrownTownBrown","timeMS":1669702349059,"count":4},{"user":"markswanmusic","timeMS":1669702359717,"count":3},{"user":"sweatpantsandsuitjackets","timeMS":1669702367453,"count":3},{"user":"UVCW","timeMS":1669702459908,"count":4},{"user":"Nightbot","timeMS":1669703442227,"count":10},{"user":"MynockGate","timeMS":1669703451926,"count":10},{"user":"Scyral","timeMS":1669703454829,"count":10},{"user":"markswanmusic","timeMS":1669703459882,"count":10},{"user":"UVCW","timeMS":1669703462689,"count":10},{"user":"Scyral","timeMS":1669703463597,"count":10},{"user":"amaiumami","timeMS":1669703467866,"count":10},{"user":"Lotharou","timeMS":1669703468177,"count":10},{"user":"MynockGate","timeMS":1669703468323,"count":10},{"user":"icrywhenicum_","timeMS":1669703472067,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669703478745,"count":10},{"user":"MynockGate","timeMS":1669703484445,"count":10},{"user":"McNeww","timeMS":1669703490425,"count":10},{"user":"fernandioh0","timeMS":1669703533076,"count":2},{"user":"BrownTownBrown","timeMS":1669703674622,"count":1},{"user":"jakenosnek","timeMS":1669703684230,"count":1},{"user":"Tomaetchen","timeMS":1669703687009,"count":7},{"user":"MynockGate","timeMS":1669703692406,"count":10},{"user":"asgarnieu","timeMS":1669703705270,"count":10},{"user":"viviz","timeMS":1669703707891,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669703710558,"count":4},{"user":"MynockGate","timeMS":1669703714005,"count":10},{"user":"dbcallector","timeMS":1669703715103,"count":10},{"user":"markswanmusic","timeMS":1669703717218,"count":10},{"user":"Scyral","timeMS":1669703718881,"count":10},{"user":"NightOwlBTBAM","timeMS":1669703732181,"count":10},{"user":"Scyral","timeMS":1669703754737,"count":10},{"user":"BrownTownBrown","timeMS":1669703763269,"count":10},{"user":"markswanmusic","timeMS":1669703765027,"count":3},{"user":"AraSanji","timeMS":1669703767165,"count":10},{"user":"MynockGate","timeMS":1669703769505,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669703780004,"count":10},{"user":"UVCW","timeMS":1669703796245,"count":10},{"user":"SkunkPriest","timeMS":1669703804881,"count":10},{"user":"Tomaetchen","timeMS":1669703841452,"count":5},{"user":"BrownTownBrown","timeMS":1669703845306,"count":4},{"user":"FridayAtElmStreet","timeMS":1669703847616,"count":1},{"user":"FridayAtElmStreet","timeMS":1669703852412,"count":1},{"user":"chriskeyy","timeMS":1669703859779,"count":1},{"user":"markswanmusic","timeMS":1669703860169,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703864913,"count":5},{"user":"MynockGate","timeMS":1669703866449,"count":10},{"user":"FridayAtElmStreet","timeMS":1669703867811,"count":8},{"user":"amaiumami","timeMS":1669703873020,"count":10},{"user":"Nightbot","timeMS":1669703882691,"count":10},{"user":"beglebum","timeMS":1669703891264,"count":4},{"user":"argyle_pigeon","timeMS":1669703891792,"count":5},{"user":"MynockGate","timeMS":1669703896665,"count":20},{"user":"VanBeren","timeMS":1669703900927,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703907024,"count":5},{"user":"kwispy_crumch","timeMS":1669703907900,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703912847,"count":7},{"user":"markswanmusic","timeMS":1669703913229,"count":8},{"user":"UVCW","timeMS":1669703919461,"count":10},{"user":"AraSanji","timeMS":1669703919639,"count":8},{"user":"Tomaetchen","timeMS":1669703920311,"count":6},{"user":"Lotharou","timeMS":1669703922894,"count":1},{"user":"Scyral","timeMS":1669703922943,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703926874,"count":3},{"user":"Lotharou","timeMS":1669703928428,"count":6},{"user":"theplomdawg","timeMS":1669703930612,"count":8},{"user":"CookieKrisp","timeMS":1669703932194,"count":5},{"user":"Lotharou","timeMS":1669703937845,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703938862,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669703939762,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703943217,"count":7},{"user":"pacificviewer","timeMS":1669703949893,"count":4},{"user":"UVCW","timeMS":1669703950674,"count":8},{"user":"FridayAtElmStreet","timeMS":1669703950725,"count":6},{"user":"CookieKrisp","timeMS":1669703952036,"count":8},{"user":"MynockGate","timeMS":1669703954633,"count":12},{"user":"asgarnieu","timeMS":1669703968904,"count":12},{"user":"FridayAtElmStreet","timeMS":1669703994501,"count":5},{"user":"FridayAtElmStreet","timeMS":1669703997844,"count":10},{"user":"asgarnieu","timeMS":1669704005245,"count":12},{"user":"dbcallector","timeMS":1669704007342,"count":10},{"user":"beglebum","timeMS":1669704011287,"count":3},{"user":"FridayAtElmStreet","timeMS":1669704014909,"count":7},{"user":"Tomaetchen","timeMS":1669704015940,"count":7},{"user":"chriskeyy","timeMS":1669704017927,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704018011,"count":4},{"user":"FridayAtElmStreet","timeMS":1669704021676,"count":8},{"user":"FridayAtElmStreet","timeMS":1669704025111,"count":7},{"user":"Ben64r","timeMS":1669704027019,"count":10},{"user":"Lotharou","timeMS":1669704027309,"count":8},{"user":"CookieKrisp","timeMS":1669704030753,"count":8},{"user":"chriskeyy","timeMS":1669704031537,"count":20},{"user":"markswanmusic","timeMS":1669704032675,"count":7},{"user":"Ben64r","timeMS":1669704034176,"count":10},{"user":"carmnsndiego","timeMS":1669704039168,"count":4},{"user":"FridayAtElmStreet","timeMS":1669704041701,"count":7},{"user":"McNeww","timeMS":1669704043044,"count":10},{"user":"Ben64r","timeMS":1669704044362,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669704045421,"count":8},{"user":"Tomaetchen","timeMS":1669704046224,"count":10},{"user":"TheSisk0","timeMS":1669704047238,"count":10},{"user":"Scyral","timeMS":1669704048147,"count":8},{"user":"Scyral","timeMS":1669704056736,"count":8},{"user":"treyorrr","timeMS":1669704059077,"count":7},{"user":"carmnsndiego","timeMS":1669704068382,"count":6},{"user":"FridayAtElmStreet","timeMS":1669704074146,"count":7},{"user":"CookieKrisp","timeMS":1669704074588,"count":3},{"user":"FridayAtElmStreet","timeMS":1669704099263,"count":4},{"user":"FridayAtElmStreet","timeMS":1669704161899,"count":5},{"user":"FridayAtElmStreet","timeMS":1669704182097,"count":1},{"user":"FridayAtElmStreet","timeMS":1669704238970,"count":3},{"user":"FridayAtElmStreet","timeMS":1669704245933,"count":4},{"user":"chriskeyy","timeMS":1669704271487,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704273126,"count":3},{"user":"carmnsndiego","timeMS":1669704283498,"count":4},{"user":"Ben64r","timeMS":1669704294779,"count":21},{"user":"DuderGuyDude","timeMS":1669704294995,"count":4},{"user":"BrownTownBrown","timeMS":1669704301149,"count":3},{"user":"Tomaetchen","timeMS":1669704319304,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704320162,"count":6},{"user":"0mmurg","timeMS":1669704325932,"count":21},{"user":"suddenlyzoe","timeMS":1669704327636,"count":25},{"user":"CookieKrisp","timeMS":1669704351977,"count":14},{"user":"DuderGuyDude","timeMS":1669704431780,"count":1},{"user":"CookieKrisp","timeMS":1669704442243,"count":14},{"user":"Tomaetchen","timeMS":1669704486011,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704494545,"count":4},{"user":"Lotharou","timeMS":1669704497416,"count":10},{"user":"WheatiesR1337","timeMS":1669704498103,"count":4},{"user":"argyle_pigeon","timeMS":1669704549016,"count":6},{"user":"FridayAtElmStreet","timeMS":1669704556115,"count":1},{"user":"suddenlyzoe","timeMS":1669704571881,"count":25},{"user":"markswanmusic","timeMS":1669704574390,"count":9},{"user":"BrownTownBrown","timeMS":1669704575660,"count":2},{"user":"MynockGate","timeMS":1669704579323,"count":2},{"user":"Tomaetchen","timeMS":1669704582403,"count":10},{"user":"CookieKrisp","timeMS":1669704586775,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669704588404,"count":1},{"user":"chriskeyy","timeMS":1669704590718,"count":10},{"user":"MynockGate","timeMS":1669704592965,"count":10},{"user":"Scyral","timeMS":1669704594744,"count":15},{"user":"Forrest_ThePugKing","timeMS":1669704595915,"count":10},{"user":"McNeww","timeMS":1669704598324,"count":10},{"user":"WheatiesR1337","timeMS":1669704598339,"count":5},{"user":"MynockGate","timeMS":1669704600357,"count":10},{"user":"Scyral","timeMS":1669704613168,"count":15},{"user":"MynockGate","timeMS":1669704614642,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704617614,"count":1},{"user":"MynockGate","timeMS":1669704651680,"count":10},{"user":"MynockGate","timeMS":1669704666022,"count":10},{"user":"McNeww","timeMS":1669704671209,"count":10},{"user":"argyle_pigeon","timeMS":1669704686924,"count":6},{"user":"MynockGate","timeMS":1669704687793,"count":10},{"user":"BrownTownBrown","timeMS":1669704767752,"count":3},{"user":"Tomaetchen","timeMS":1669704770394,"count":6},{"user":"suddenlyzoe","timeMS":1669704773590,"count":25},{"user":"McNeww","timeMS":1669704780166,"count":1},{"user":"Nightbot","timeMS":1669704812670,"count":10},{"user":"MynockGate","timeMS":1669704816828,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669704818734,"count":10},{"user":"CookieKrisp","timeMS":1669704829268,"count":10},{"user":"FridayAtElmStreet","timeMS":1669704855114,"count":5},{"user":"FridayAtElmStreet","timeMS":1669704861302,"count":4},{"user":"MynockGate","timeMS":1669704872870,"count":10},{"user":"AraSanji","timeMS":1669704881381,"count":8},{"user":"UVCW","timeMS":1669704885386,"count":8},{"user":"argyle_pigeon","timeMS":1669704890010,"count":3},{"user":"McNeww","timeMS":1669704896914,"count":1},{"user":"argyle_pigeon","timeMS":1669704961300,"count":3},{"user":"McNeww","timeMS":1669704978335,"count":2},{"user":"BrownTownBrown","timeMS":1669705031703,"count":3},{"user":"BrownTownBrown","timeMS":1669705047484,"count":1},{"user":"beglebum","timeMS":1669705104297,"count":1},{"user":"McNeww","timeMS":1669705105355,"count":2},{"user":"McNeww","timeMS":1669705112618,"count":10},{"user":"DuderGuyDude","timeMS":1669705177831,"count":1},{"user":"UVCW","timeMS":1669705184476,"count":3},{"user":"markswanmusic","timeMS":1669705189217,"count":4},{"user":"peachfurs","timeMS":1669705191895,"count":10},{"user":"Lotharou","timeMS":1669705200415,"count":10},{"user":"kopfkino0","timeMS":1669705208772,"count":1},{"user":"TheSisk0","timeMS":1669705219628,"count":9},{"user":"CookieKrisp","timeMS":1669705222727,"count":9},{"user":"markswanmusic","timeMS":1669705229466,"count":6},{"user":"MynockGate","timeMS":1669705231294,"count":10},{"user":"Tomaetchen","timeMS":1669705234187,"count":17},{"user":"Ben64r","timeMS":1669705234518,"count":34},{"user":"CookieKrisp","timeMS":1669705234668,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669705234685,"count":11},{"user":"peachfurs","timeMS":1669705237442,"count":13},{"user":"FridayAtElmStreet","timeMS":1669705238696,"count":1},{"user":"Scyral","timeMS":1669705239889,"count":15},{"user":"McNeww","timeMS":1669705242885,"count":10},{"user":"BrownTownBrown","timeMS":1669705243092,"count":10},{"user":"0mmurg","timeMS":1669705245675,"count":10},{"user":"DuderGuyDude","timeMS":1669705246659,"count":4},{"user":"MynockGate","timeMS":1669705246972,"count":10},{"user":"Tomaetchen","timeMS":1669705248199,"count":10},{"user":"MynockGate","timeMS":1669705248333,"count":10},{"user":"Lotharou","timeMS":1669705249309,"count":10},{"user":"suddenlyzoe","timeMS":1669705250415,"count":10},{"user":"Deadenterprise","timeMS":1669705251599,"count":10},{"user":"Scyral","timeMS":1669705252906,"count":15},{"user":"DuderGuyDude","timeMS":1669705253427,"count":4},{"user":"Nightbot","timeMS":1669705253477,"count":10},{"user":"peachfurs","timeMS":1669705260318,"count":10},{"user":"Ben64r","timeMS":1669705262130,"count":8},{"user":"MynockGate","timeMS":1669705268329,"count":10},{"user":"Scyral","timeMS":1669705270089,"count":10},{"user":"UVCW","timeMS":1669705271288,"count":10},{"user":"TheSisk0","timeMS":1669705272469,"count":10},{"user":"McNeww","timeMS":1669705285467,"count":1},{"user":"Scyral","timeMS":1669705290474,"count":10},{"user":"UVCW","timeMS":1669705294721,"count":10},{"user":"markswanmusic","timeMS":1669705418462,"count":4},{"user":"cysann","timeMS":1669705456582,"count":1},{"user":"UVCW","timeMS":1669705572578,"count":5},{"user":"Tomaetchen","timeMS":1669705783083,"count":5},{"user":"BrownTownBrown","timeMS":1669705792734,"count":3},{"user":"FridayAtElmStreet","timeMS":1669705948850,"count":1},{"user":"FridayAtElmStreet","timeMS":1669705976131,"count":2},{"user":"FridayAtElmStreet","timeMS":1669706065628,"count":1},{"user":"suddenlyzoe","timeMS":1669706071015,"count":10},{"user":"Tomaetchen","timeMS":1669706122478,"count":3},{"user":"MynockGate","timeMS":1669706124800,"count":10},{"user":"MynockGate","timeMS":1669706130869,"count":10},{"user":"UVCW","timeMS":1669706142102,"count":10},{"user":"FridayAtElmStreet","timeMS":1669706153736,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706169060,"count":1},{"user":"Tomaetchen","timeMS":1669706184551,"count":2},{"user":"FridayAtElmStreet","timeMS":1669706247236,"count":1},{"user":"beglebum","timeMS":1669706254843,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706256472,"count":1},{"user":"Gallibep","timeMS":1669706258465,"count":4},{"user":"beglebum","timeMS":1669706263634,"count":1},{"user":"Tomaetchen","timeMS":1669706265637,"count":3},{"user":"FridayAtElmStreet","timeMS":1669706266390,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669706268822,"count":1},{"user":"DuderGuyDude","timeMS":1669706311419,"count":1},{"user":"Ben64r","timeMS":1669706435504,"count":1},{"user":"Nightbot","timeMS":1669706438101,"count":10},{"user":"dbcallector","timeMS":1669706438774,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669706439201,"count":1},{"user":"MynockGate","timeMS":1669706451806,"count":10},{"user":"FridayAtElmStreet","timeMS":1669706487400,"count":1},{"user":"argyle_pigeon","timeMS":1669706736636,"count":4},{"user":"FridayAtElmStreet","timeMS":1669706806294,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706814479,"count":1},{"user":"argyle_pigeon","timeMS":1669706891351,"count":5},{"user":"Ben64r","timeMS":1669706915007,"count":1},{"user":"jakenosnek","timeMS":1669706915229,"count":3},{"user":"FridayAtElmStreet","timeMS":1669706930293,"count":1},{"user":"FridayAtElmStreet","timeMS":1669706934073,"count":1},{"user":"DoctorRoffles","timeMS":1669706971070,"count":5},{"user":"FridayAtElmStreet","timeMS":1669706977224,"count":1},{"user":"Tomaetchen","timeMS":1669706981495,"count":5},{"user":"FridayAtElmStreet","timeMS":1669706992444,"count":2},{"user":"jakenosnek","timeMS":1669707011720,"count":3},{"user":"BrownTownBrown","timeMS":1669707022364,"count":3},{"user":"DuderGuyDude","timeMS":1669707125640,"count":2},{"user":"Nightbot","timeMS":1669707687118,"count":10},{"user":"Tomaetchen","timeMS":1669707692904,"count":2},{"user":"MynockGate","timeMS":1669707693777,"count":10},{"user":"MynockGate","timeMS":1669707697366,"count":10},{"user":"UVCW","timeMS":1669707704311,"count":10},{"user":"Scyral","timeMS":1669707714061,"count":10},{"user":"SkunkPriest","timeMS":1669707729455,"count":10},{"user":"markswanmusic","timeMS":1669707921569,"count":2},{"user":"SkunkPriest","timeMS":1669708021509,"count":1},{"user":"DoctorRoffles","timeMS":1669708368606,"count":4},{"user":"Tomaetchen","timeMS":1669708381185,"count":4},{"user":"McNeww","timeMS":1669708392987,"count":10},{"user":"FridayAtElmStreet","timeMS":1669708424134,"count":1},{"user":"CarlosTheGardener","timeMS":1669708436049,"count":2},{"user":"CarlosTheGardener","timeMS":1669708459636,"count":3},{"user":"treyorrr","timeMS":1669708467735,"count":2},{"user":"BrownTownBrown","timeMS":1669708469578,"count":3},{"user":"FridayAtElmStreet","timeMS":1669708478300,"count":2},{"user":"jakenosnek","timeMS":1669708488471,"count":2},{"user":"VilifiedPeanut","timeMS":1669708503388,"count":6},{"user":"kopfkino0","timeMS":1669708514192,"count":6},{"user":"Ben64r","timeMS":1669708518564,"count":6},{"user":"DuderGuyDude","timeMS":1669708611800,"count":1},{"user":"FridayAtElmStreet","timeMS":1669708652346,"count":1},{"user":"FridayAtElmStreet","timeMS":1669708675355,"count":1},{"user":"ForeverMalone","timeMS":1669708689661,"count":8},{"user":"argyle_pigeon","timeMS":1669708696884,"count":3},{"user":"Forrest_ThePugKing","timeMS":1669708704044,"count":8},{"user":"BrownTownBrown","timeMS":1669708794231,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669708822465,"count":1},{"user":"Forrest_ThePugKing","timeMS":1669708876792,"count":1},{"user":"BrownTownBrown","timeMS":1669708886916,"count":3},{"user":"VanBeren","timeMS":1669708928785,"count":6},{"user":"markswanmusic","timeMS":1669708932869,"count":6},{"user":"carmnsndiego","timeMS":1669708936555,"count":1},{"user":"MynockGate","timeMS":1669708940877,"count":10},{"user":"beglebum","timeMS":1669708945591,"count":1},{"user":"kopfkino0","timeMS":1669708951576,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669708952518,"count":1},{"user":"Scyral","timeMS":1669708953409,"count":10},{"user":"VanBeren","timeMS":1669708971712,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669708985295,"count":10},{"user":"Scyral","timeMS":1669708985760,"count":10},{"user":"SkunkPriest","timeMS":1669709001610,"count":10},{"user":"beglebum","timeMS":1669709004812,"count":10},{"user":"beglebum","timeMS":1669709008906,"count":10},{"user":"UVCW","timeMS":1669709016845,"count":10},{"user":"MynockGate","timeMS":1669709017324,"count":10},{"user":"captainrollyjoger","timeMS":1669709034541,"count":10},{"user":"kwispy_crumch","timeMS":1669709045052,"count":10},{"user":"FridayAtElmStreet","timeMS":1669709048010,"count":1},{"user":"Nightbot","timeMS":1669709058638,"count":10},{"user":"UVCW","timeMS":1669709063252,"count":1},{"user":"MynockGate","timeMS":1669709077219,"count":10},{"user":"Scyral","timeMS":1669709098657,"count":10},{"user":"UVCW","timeMS":1669709113975,"count":10},{"user":"Tomaetchen","timeMS":1669709262727,"count":3},{"user":"carmnsndiego","timeMS":1669709330647,"count":5},{"user":"FridayAtElmStreet","timeMS":1669709444673,"count":1},{"user":"BrownTownBrown","timeMS":1669709488351,"count":1},{"user":"FridayAtElmStreet","timeMS":1669709575117,"count":1},{"user":"McNeww","timeMS":1669709614117,"count":10},{"user":"BrownTownBrown","timeMS":1669709765169,"count":1},{"user":"FridayAtElmStreet","timeMS":1669709827033,"count":1},{"user":"ForeverMalone","timeMS":1669709925198,"count":1},{"user":"ForeverMalone","timeMS":1669710158575,"count":1},{"user":"Scyral","timeMS":1669710168817,"count":5},{"user":"viviz","timeMS":1669710168905,"count":3},{"user":"ForeverMalone","timeMS":1669710169745,"count":5},{"user":"FridayAtElmStreet","timeMS":1669710171802,"count":1},{"user":"Nightbot","timeMS":1669710172354,"count":10},{"user":"dbcallector","timeMS":1669710179133,"count":5},{"user":"FridayAtElmStreet","timeMS":1669710180139,"count":1},{"user":"Scyral","timeMS":1669710180536,"count":5},{"user":"MynockGate","timeMS":1669710183069,"count":10},{"user":"MynockGate","timeMS":1669710185542,"count":10},{"user":"MynockGate","timeMS":1669710200924,"count":10},{"user":"McNeww","timeMS":1669710272161,"count":10},{"user":"MynockGate","timeMS":1669710295273,"count":10},{"user":"AIIuux","timeMS":1669710297244,"count":7},{"user":"Nightbot","timeMS":1669710377265,"count":10},{"user":"BrownTownBrown","timeMS":1669710571995,"count":4},{"user":"ForeverMalone","timeMS":1669712114128,"count":1},{"user":"Tomaetchen","timeMS":1669712114901,"count":2},{"user":"Ben64r","timeMS":1669712120226,"count":1},{"user":"MynockGate","timeMS":1669712129384,"count":1},{"user":"Nightbot","timeMS":1669712687591,"count":10},{"user":"MynockGate","timeMS":1669712694963,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669712709345,"count":10},{"user":"scifigirl211","timeMS":1669712719802,"count":10},{"user":"0mmurg","timeMS":1669713491303,"count":2},{"user":"Du6e","timeMS":1669713507711,"count":3},{"user":"Nightbot","timeMS":1669713894089,"count":10},{"user":"Scyral","timeMS":1669714671271,"count":5},{"user":"Tomaetchen","timeMS":1669717478681,"count":5},{"user":"Nightbot","timeMS":1669717482147,"count":10},{"user":"MynockGate","timeMS":1669717483654,"count":10},{"user":"cajunrabbit90","timeMS":1669717520310,"count":10},{"user":"McNeww","timeMS":1669741333102,"count":1},{"user":"McNeww","timeMS":1669743266135,"count":10},{"user":"Lotharou","timeMS":1669744994532,"count":1},{"user":"McNeww","timeMS":1669745511386,"count":10},{"user":"FiveGetsYouTen","timeMS":1669748127968,"count":10},{"user":"FiveGetsYouTen","timeMS":1669748512437,"count":13},{"user":"FridayAtElmStreet","timeMS":1669749073866,"count":1},{"user":"FridayAtElmStreet","timeMS":1669750571048,"count":1},{"user":"Du6e","timeMS":1669751062738,"count":4},{"user":"UVCW","timeMS":1669751065022,"count":3},{"user":"Scyral","timeMS":1669751095596,"count":1},{"user":"daskichan","timeMS":1669751098030,"count":3},{"user":"Ben64r","timeMS":1669751110886,"count":6},{"user":"Ben64r","timeMS":1669751125925,"count":6},{"user":"McNeww","timeMS":1669751128033,"count":3},{"user":"Ben64r","timeMS":1669751134929,"count":6},{"user":"Du6e","timeMS":1669751141323,"count":2},{"user":"Scyral","timeMS":1669751143189,"count":15},{"user":"richardsim7","timeMS":1669751146999,"count":1},{"user":"Scyral","timeMS":1669751153821,"count":15},{"user":"cajunrabbit90","timeMS":1669751164218,"count":10},{"user":"cajunrabbit90","timeMS":1669751168680,"count":10},{"user":"chriskeyy","timeMS":1669751176534,"count":10},{"user":"McNeww","timeMS":1669751213594,"count":3},{"user":"karleygrey","timeMS":1669751213820,"count":4},{"user":"Scyral","timeMS":1669751231689,"count":4},{"user":"UVCW","timeMS":1669751320124,"count":2},{"user":"FridayAtElmStreet","timeMS":1669751579692,"count":1},{"user":"FridayAtElmStreet","timeMS":1669751649055,"count":1},{"user":"FridayAtElmStreet","timeMS":1669751784564,"count":1},{"user":"BrownTownBrown","timeMS":1669756536707,"count":1},{"user":"chriskeyy","timeMS":1669758964634,"count":6},{"user":"UVCW","timeMS":1669759199097,"count":1},{"user":"Nightbot","timeMS":1669759308288,"count":10},{"user":"MynockGate","timeMS":1669759333947,"count":10},{"user":"cajunrabbit90","timeMS":1669759337801,"count":10},{"user":"atomysktrue","timeMS":1669759840748,"count":3},{"user":"Gralkor","timeMS":1669759861432,"count":3},{"user":"Nightbot","timeMS":1669759961833,"count":10},{"user":"atomysktrue","timeMS":1669761700161,"count":4},{"user":"richardsim7","timeMS":1669762516651,"count":1},{"user":"Anarch42","timeMS":1669762526396,"count":6},{"user":"MynockGate","timeMS":1669762535787,"count":5},{"user":"michaels4n","timeMS":1669762552644,"count":3},{"user":"FridayAtElmStreet","timeMS":1669762597167,"count":1},{"user":"Scyral","timeMS":1669762751677,"count":3},{"user":"Scyral","timeMS":1669762762575,"count":3},{"user":"SkunkPriest","timeMS":1669762954476,"count":2},{"user":"zona_james","timeMS":1669762964619,"count":2},{"user":"SkunkPriest","timeMS":1669762970284,"count":2},{"user":"Morphman30","timeMS":1669762972291,"count":2},{"user":"Nightbot","timeMS":1669762992727,"count":10},{"user":"MynockGate","timeMS":1669763147660,"count":10},{"user":"beglebum","timeMS":1669763217361,"count":2},{"user":"beglebum","timeMS":1669763897606,"count":1},{"user":"MynockGate","timeMS":1669764455391,"count":10},{"user":"MynockGate","timeMS":1669764459050,"count":10},{"user":"Nightbot","timeMS":1669764468438,"count":10},{"user":"beglebum","timeMS":1669764479633,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669764488688,"count":6},{"user":"daskichan","timeMS":1669764518290,"count":2},{"user":"adamandhisbun","timeMS":1669764524321,"count":6},{"user":"VanBeren","timeMS":1669764534323,"count":6},{"user":"Forrest_ThePugKing","timeMS":1669764741328,"count":10},{"user":"richardsim7","timeMS":1669767711861,"count":1},{"user":"adamandhisbun","timeMS":1669768952890,"count":5},{"user":"McNeww","timeMS":1669769029913,"count":1},{"user":"McNeww","timeMS":1669769087061,"count":8},{"user":"McNeww","timeMS":1669769118602,"count":8},{"user":"McNeww","timeMS":1669769205748,"count":8},{"user":"michaels4n","timeMS":1669770417788,"count":1},{"user":"jhawk145","timeMS":1669770432649,"count":1},{"user":"McNeww","timeMS":1669772550066,"count":5},{"user":"zona_james","timeMS":1669772557273,"count":3},{"user":"kiwikayyyyy","timeMS":1669773448722,"count":6},{"user":"hokputooy","timeMS":1669774092652,"count":2},{"user":"kiwikayyyyy","timeMS":1669775528023,"count":6},{"user":"kiwikayyyyy","timeMS":1669776227854,"count":5},{"user":"TheStylishBum","timeMS":1669777329775,"count":6},{"user":"Nightbot","timeMS":1669779449968,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669782156203,"count":1},{"user":"Nightbot","timeMS":1669785144548,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669785635007,"count":8},{"user":"VanBeren","timeMS":1669785644732,"count":8},{"user":"beglebum","timeMS":1669785650130,"count":8},{"user":"VanBeren","timeMS":1669785664804,"count":8},{"user":"MynockGate","timeMS":1669785672457,"count":8},{"user":"Scyral","timeMS":1669785681669,"count":8},{"user":"markswanmusic","timeMS":1669785683563,"count":8},{"user":"MynockGate","timeMS":1669785779321,"count":8},{"user":"Nightbot","timeMS":1669786554627,"count":10},{"user":"MynockGate","timeMS":1669786632182,"count":10},{"user":"MynockGate","timeMS":1669786635114,"count":10},{"user":"UVCW","timeMS":1669786643120,"count":10},{"user":"beglebum","timeMS":1669786656656,"count":2},{"user":"MynockGate","timeMS":1669786703244,"count":10},{"user":"MynockGate","timeMS":1669786718460,"count":10},{"user":"beglebum","timeMS":1669786719633,"count":10},{"user":"MynockGate","timeMS":1669786797274,"count":10},{"user":"Scyral","timeMS":1669786908895,"count":10},{"user":"MynockGate","timeMS":1669786933022,"count":10},{"user":"MynockGate","timeMS":1669787012942,"count":10},{"user":"Scyral","timeMS":1669788007644,"count":5},{"user":"MynockGate","timeMS":1669788037348,"count":4},{"user":"BrownTownBrown","timeMS":1669789405602,"count":3},{"user":"Nightbot","timeMS":1669789431438,"count":10},{"user":"carmnsndiego","timeMS":1669789433329,"count":3},{"user":"kiwikayyyyy","timeMS":1669789444580,"count":15},{"user":"sh0eb0x_","timeMS":1669789456920,"count":4},{"user":"beglebum","timeMS":1669789469591,"count":1},{"user":"carmnsndiego","timeMS":1669789482095,"count":5},{"user":"MynockGate","timeMS":1669789605721,"count":10},{"user":"UVCW","timeMS":1669790336920,"count":3},{"user":"FridayAtElmStreet","timeMS":1669790505540,"count":1},{"user":"MynockGate","timeMS":1669790553440,"count":1},{"user":"SkunkPriest","timeMS":1669792031975,"count":2},{"user":"beglebum","timeMS":1669792055063,"count":3},{"user":"Nightbot","timeMS":1669792094954,"count":10},{"user":"MynockGate","timeMS":1669792098850,"count":10},{"user":"MynockGate","timeMS":1669792102351,"count":10},{"user":"MynockGate","timeMS":1669792110158,"count":10},{"user":"MynockGate","timeMS":1669792115132,"count":10},{"user":"UVCW","timeMS":1669792123409,"count":10},{"user":"Nightbot","timeMS":1669792400383,"count":10},{"user":"Nightbot","timeMS":1669793033362,"count":10},{"user":"yam_cakes","timeMS":1669793042354,"count":1},{"user":"beglebum","timeMS":1669793143254,"count":2},{"user":"Scyral","timeMS":1669793287372,"count":2},{"user":"MynockGate","timeMS":1669793321730,"count":10},{"user":"MynockGate","timeMS":1669793329459,"count":10},{"user":"UVCW","timeMS":1669793330158,"count":6},{"user":"Scyral","timeMS":1669793335705,"count":10},{"user":"UVCW","timeMS":1669793364672,"count":10},{"user":"McNeww","timeMS":1669793391256,"count":4},{"user":"MynockGate","timeMS":1669795332641,"count":10},{"user":"MynockGate","timeMS":1669795335609,"count":10},{"user":"UVCW","timeMS":1669795351148,"count":10},{"user":"peachfurs","timeMS":1669797176845,"count":3},{"user":"TheSisk0","timeMS":1669797793530,"count":3},{"user":"KadeemScheme","timeMS":1669797793561,"count":4},{"user":"Nightbot","timeMS":1669797796804,"count":10},{"user":"Nightbot","timeMS":1669798730267,"count":10},{"user":"McNeww","timeMS":1669798739500,"count":10},{"user":"peachfurs","timeMS":1669798745130,"count":10},{"user":"suddenlyzoe","timeMS":1669798755120,"count":10},{"user":"Nightbot","timeMS":1669798765477,"count":10},{"user":"suddenlyzoe","timeMS":1669798769184,"count":10},{"user":"peachfurs","timeMS":1669798780428,"count":10},{"user":"richardsim7","timeMS":1669798782380,"count":1},{"user":"suddenlyzoe","timeMS":1669798823134,"count":10},{"user":"McNeww","timeMS":1669798831437,"count":10},{"user":"Scyral","timeMS":1669798976851,"count":2},{"user":"McNeww","timeMS":1669799122030,"count":10},{"user":"Scyral","timeMS":1669799146343,"count":3},{"user":"Scyral","timeMS":1669799225072,"count":3},{"user":"SkunkPriest","timeMS":1669799392673,"count":2},{"user":"SkunkPriest","timeMS":1669799420177,"count":2},{"user":"QuiesNova","timeMS":1669799471400,"count":1},{"user":"SkunkPriest","timeMS":1669799491739,"count":2},{"user":"peachfurs","timeMS":1669799686436,"count":1},{"user":"Nightbot","timeMS":1669799688319,"count":10},{"user":"SkunkPriest","timeMS":1669799704917,"count":7},{"user":"QuiesNova","timeMS":1669799737066,"count":10},{"user":"suddenlyzoe","timeMS":1669799742454,"count":10},{"user":"FridayAtElmStreet","timeMS":1669832823669,"count":2},{"user":"Nightbot","timeMS":1669833994755,"count":10},{"user":"McNeww","timeMS":1669834004063,"count":10},{"user":"Lotharou","timeMS":1669834115216,"count":2},{"user":"McNeww","timeMS":1669834124382,"count":10},{"user":"Nightbot","timeMS":1669834134635,"count":10},{"user":"FridayAtElmStreet","timeMS":1669834143829,"count":1},{"user":"cajunrabbit90","timeMS":1669834153229,"count":10},{"user":"FridayAtElmStreet","timeMS":1669834214834,"count":1},{"user":"FridayAtElmStreet","timeMS":1669834299568,"count":1},{"user":"McNeww","timeMS":1669835053250,"count":10},{"user":"UVCW","timeMS":1669835086039,"count":1},{"user":"FridayAtElmStreet","timeMS":1669837269696,"count":1},{"user":"BrownTownBrown","timeMS":1669837597475,"count":1},{"user":"Nightbot","timeMS":1669837741910,"count":10},{"user":"FridayAtElmStreet","timeMS":1669838128519,"count":1},{"user":"richardsim7","timeMS":1669838131999,"count":1},{"user":"McNeww","timeMS":1669838321248,"count":10},{"user":"Scyral","timeMS":1669840060272,"count":2},{"user":"FridayAtElmStreet","timeMS":1669841048799,"count":1},{"user":"BrownTownBrown","timeMS":1669841675294,"count":1},{"user":"kiwikayyyyy","timeMS":1669842241830,"count":8},{"user":"Scyral","timeMS":1669842697360,"count":4},{"user":"Scyral","timeMS":1669842922585,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669846414229,"count":8},{"user":"UVCW","timeMS":1669846429627,"count":8},{"user":"Skython","timeMS":1669846488331,"count":8},{"user":"FridayAtElmStreet","timeMS":1669846678260,"count":3},{"user":"FridayAtElmStreet","timeMS":1669846730333,"count":3},{"user":"FridayAtElmStreet","timeMS":1669847278971,"count":3},{"user":"FridayAtElmStreet","timeMS":1669847297257,"count":1},{"user":"FridayAtElmStreet","timeMS":1669847439263,"count":1},{"user":"Scyral","timeMS":1669848236597,"count":4},{"user":"UVCW","timeMS":1669848245905,"count":4},{"user":"atomysktrue","timeMS":1669848698590,"count":3},{"user":"Nightbot","timeMS":1669848708390,"count":10},{"user":"MynockGate","timeMS":1669848725374,"count":10},{"user":"atomysktrue","timeMS":1669848782333,"count":3},{"user":"Nightbot","timeMS":1669850478737,"count":10},{"user":"Scyral","timeMS":1669851301667,"count":1},{"user":"WheatiesR1337","timeMS":1669853002195,"count":4},{"user":"atomysktrue","timeMS":1669853003461,"count":4},{"user":"WheatiesR1337","timeMS":1669853010453,"count":4},{"user":"asgarnieu","timeMS":1669853047755,"count":5},{"user":"YeComicMan","timeMS":1669853069866,"count":3},{"user":"asgarnieu","timeMS":1669853240560,"count":5},{"user":"WheatiesR1337","timeMS":1669853262732,"count":6},{"user":"YeComicMan","timeMS":1669853270006,"count":4},{"user":"atomysktrue","timeMS":1669853348323,"count":3},{"user":"atomysktrue","timeMS":1669853431340,"count":3},{"user":"jakenosnek","timeMS":1669853447752,"count":3},{"user":"WheatiesR1337","timeMS":1669853472691,"count":5},{"user":"atomysktrue","timeMS":1669854652088,"count":1},{"user":"atomysktrue","timeMS":1669854669855,"count":4},{"user":"BrownTownBrown","timeMS":1669854681196,"count":4},{"user":"chriskeyy","timeMS":1669854730338,"count":9},{"user":"UVCW","timeMS":1669854769860,"count":4},{"user":"WheatiesR1337","timeMS":1669854802193,"count":7},{"user":"adamandhisbun","timeMS":1669855332233,"count":6},{"user":"MynockGate","timeMS":1669855340336,"count":6},{"user":"jakenosnek","timeMS":1669855342136,"count":5},{"user":"UVCW","timeMS":1669855350888,"count":5},{"user":"jakenosnek","timeMS":1669855356267,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669855357619,"count":5},{"user":"beglebum","timeMS":1669855887946,"count":1},{"user":"MynockGate","timeMS":1669855901584,"count":1},{"user":"carmnsndiego","timeMS":1669856291277,"count":4},{"user":"Forrest_ThePugKing","timeMS":1669856300741,"count":5},{"user":"FridayAtElmStreet","timeMS":1669856313478,"count":1},{"user":"carmnsndiego","timeMS":1669856317840,"count":3},{"user":"richardsim7","timeMS":1669856322015,"count":1},{"user":"MynockGate","timeMS":1669856325328,"count":10},{"user":"MynockGate","timeMS":1669856330592,"count":10},{"user":"hokputooy","timeMS":1669856330999,"count":10},{"user":"hokputooy","timeMS":1669856344470,"count":10},{"user":"SBlonk","timeMS":1669856345691,"count":10},{"user":"Scyral","timeMS":1669856353469,"count":10},{"user":"UVCW","timeMS":1669856357719,"count":10},{"user":"adamandhisbun","timeMS":1669856358893,"count":9},{"user":"julovesthehub","timeMS":1669856360799,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669856369200,"count":10},{"user":"atomysktrue","timeMS":1669856402816,"count":3},{"user":"carmnsndiego","timeMS":1669856408874,"count":4},{"user":"MynockGate","timeMS":1669856435656,"count":4},{"user":"MynockGate","timeMS":1669856447737,"count":4},{"user":"Scyral","timeMS":1669856460382,"count":4},{"user":"YeComicMan","timeMS":1669856480828,"count":4},{"user":"atomysktrue","timeMS":1669856485293,"count":3},{"user":"sweatpantsandsuitjackets","timeMS":1669856486141,"count":8},{"user":"cajunrabbit90","timeMS":1669856508180,"count":4},{"user":"FridayAtElmStreet","timeMS":1669856757197,"count":1},{"user":"MynockGate","timeMS":1669856929591,"count":1},{"user":"MynockGate","timeMS":1669856937076,"count":1},{"user":"cajunrabbit90","timeMS":1669857099705,"count":4},{"user":"Gralkor","timeMS":1669857114181,"count":4},{"user":"TheSisk0","timeMS":1669857132880,"count":4},{"user":"karleygrey","timeMS":1669857144795,"count":2},{"user":"kiwikayyyyy","timeMS":1669857359353,"count":5},{"user":"Scyral","timeMS":1669857501831,"count":1},{"user":"adamandhisbun","timeMS":1669857525029,"count":5},{"user":"UVCW","timeMS":1669857533340,"count":5},{"user":"sweatpantsandsuitjackets","timeMS":1669857542280,"count":5},{"user":"Scyral","timeMS":1669857542854,"count":5},{"user":"SBlonk","timeMS":1669857562543,"count":5},{"user":"FridayAtElmStreet","timeMS":1669859006553,"count":1},{"user":"Scyral","timeMS":1669859891269,"count":2},{"user":"MynockGate","timeMS":1669859975368,"count":10},{"user":"MynockGate","timeMS":1669859979523,"count":8},{"user":"beglebum","timeMS":1669859991270,"count":8},{"user":"Lotharou","timeMS":1669859992866,"count":10},{"user":"Scyral","timeMS":1669859994674,"count":8},{"user":"sweatpantsandsuitjackets","timeMS":1669860014177,"count":8},{"user":"UVCW","timeMS":1669860030844,"count":8},{"user":"beglebum","timeMS":1669860233518,"count":2},{"user":"FridayAtElmStreet","timeMS":1669860280127,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669861734374,"count":12},{"user":"MynockGate","timeMS":1669861784144,"count":12},{"user":"MynockGate","timeMS":1669861786982,"count":12},{"user":"UVCW","timeMS":1669861789872,"count":12},{"user":"MynockGate","timeMS":1669861842253,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669862227756,"count":14},{"user":"Scyral","timeMS":1669862239605,"count":14},{"user":"UVCW","timeMS":1669862287044,"count":14},{"user":"sweatpantsandsuitjackets","timeMS":1669862436377,"count":10},{"user":"UVCW","timeMS":1669862468576,"count":1},{"user":"sweatpantsandsuitjackets","timeMS":1669863075639,"count":10},{"user":"Kykywox","timeMS":1669863092083,"count":9},{"user":"Khromio","timeMS":1669863100030,"count":10},{"user":"MynockGate","timeMS":1669863100399,"count":9},{"user":"Scyral","timeMS":1669863119928,"count":9},{"user":"sweatpantsandsuitjackets","timeMS":1669863130873,"count":2},{"user":"UVCW","timeMS":1669863139536,"count":9},{"user":"Scyral","timeMS":1669865094427,"count":5},{"user":"VanBeren","timeMS":1669869428484,"count":3},{"user":"carmnsndiego","timeMS":1669869826830,"count":4},{"user":"Nightbot","timeMS":1669869839338,"count":10},{"user":"slim_cognito420","timeMS":1669869848462,"count":6},{"user":"Scyral","timeMS":1669870106621,"count":3},{"user":"carmnsndiego","timeMS":1669870641323,"count":4},{"user":"FiveGetsYouTen","timeMS":1669870674814,"count":10},{"user":"McNeww","timeMS":1669870683137,"count":10},{"user":"goodolgregg","timeMS":1669870704171,"count":4},{"user":"carmnsndiego","timeMS":1669870712493,"count":3},{"user":"carmnsndiego","timeMS":1669870758397,"count":2},{"user":"carmnsndiego","timeMS":1669870836839,"count":2},{"user":"alexieee_","timeMS":1669870841720,"count":3},{"user":"MynockGate","timeMS":1669871013281,"count":10},{"user":"MynockGate","timeMS":1669871015750,"count":10},{"user":"Du6e","timeMS":1669871026090,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669871028958,"count":10},{"user":"AraSanji","timeMS":1669871031893,"count":10},{"user":"McNeww","timeMS":1669871035413,"count":10},{"user":"benjiTK","timeMS":1669871055505,"count":10},{"user":"McNeww","timeMS":1669871581323,"count":3},{"user":"MynockGate","timeMS":1669872770488,"count":10},{"user":"MynockGate","timeMS":1669872774005,"count":10},{"user":"McNeww","timeMS":1669872785361,"count":10},{"user":"cajunrabbit90","timeMS":1669872790314,"count":10},{"user":"WheatiesR1337","timeMS":1669874575403,"count":4},{"user":"feelmyfunk","timeMS":1669874944166,"count":5},{"user":"BrownTownBrown","timeMS":1669876026161,"count":1},{"user":"MynockGate","timeMS":1669876882451,"count":4},{"user":"Scyral","timeMS":1669877096804,"count":3},{"user":"MynockGate","timeMS":1669877155246,"count":1},{"user":"FridayAtElmStreet","timeMS":1669877990183,"count":1},{"user":"McNeww","timeMS":1669879026135,"count":1},{"user":"MynockGate","timeMS":1669884920081,"count":4},{"user":"McNeww","timeMS":1669884951735,"count":4},{"user":"WheatiesR1337","timeMS":1669885156629,"count":5},{"user":"Lotharou","timeMS":1669898273480,"count":1},{"user":"MynockGate","timeMS":1669900673723,"count":2},{"user":"MynockGate","timeMS":1669903418506,"count":6},{"user":"Lotharou","timeMS":1669903426821,"count":6},{"user":"TommyZoid","timeMS":1669903431725,"count":6},{"user":"MynockGate","timeMS":1669903449448,"count":12},{"user":"MynockGate","timeMS":1669903464626,"count":2},{"user":"MynockGate","timeMS":1669903467968,"count":14},{"user":"Lotharou","timeMS":1669903488606,"count":14},{"user":"Lotharou","timeMS":1669903491593,"count":14},{"user":"Lotharou","timeMS":1669904049201,"count":1},{"user":"MynockGate","timeMS":1669917376626,"count":4},{"user":"sweatpantsandsuitjackets","timeMS":1669920277627,"count":2},{"user":"Lotharou","timeMS":1669922580686,"count":1},{"user":"Lotharou","timeMS":1669923361120,"count":3},{"user":"BrownTownBrown","timeMS":1669927452973,"count":3},{"user":"Nightbot","timeMS":1669930806396,"count":10},{"user":"kiwikayyyyy","timeMS":1669930814044,"count":8},{"user":"Zereux","timeMS":1669930829157,"count":4},{"user":"Lotharou","timeMS":1669930835706,"count":1},{"user":"beglebum","timeMS":1669930844516,"count":1},{"user":"argyle_pigeon","timeMS":1669930878632,"count":6},{"user":"kiwikayyyyy","timeMS":1669930901014,"count":7},{"user":"Zereux","timeMS":1669930917044,"count":2},{"user":"kiwikayyyyy","timeMS":1669931311162,"count":6},{"user":"BrownTownBrown","timeMS":1669931327478,"count":1},{"user":"kiwikayyyyy","timeMS":1669931381318,"count":3},{"user":"MynockGate","timeMS":1669931463898,"count":10},{"user":"MynockGate","timeMS":1669931586691,"count":10},{"user":"beglebum","timeMS":1669931598058,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669931599732,"count":10},{"user":"Kykywox","timeMS":1669931626879,"count":10},{"user":"UVCW","timeMS":1669931672122,"count":10},{"user":"Lotharou","timeMS":1669931775165,"count":10},{"user":"MynockGate","timeMS":1669931911123,"count":12},{"user":"Scyral","timeMS":1669931924109,"count":12},{"user":"sweatpantsandsuitjackets","timeMS":1669931930717,"count":10},{"user":"Kykywox","timeMS":1669931935319,"count":3},{"user":"uncanny_pyro","timeMS":1669931957523,"count":7},{"user":"TheSisk0","timeMS":1669931975760,"count":10},{"user":"UVCW","timeMS":1669931980010,"count":10},{"user":"Kykywox","timeMS":1669931982344,"count":10},{"user":"uncanny_pyro","timeMS":1669932002488,"count":10},{"user":"MynockGate","timeMS":1669932095968,"count":12},{"user":"McNeww","timeMS":1669932134616,"count":12},{"user":"MynockGate","timeMS":1669932162351,"count":2},{"user":"MynockGate","timeMS":1669932165923,"count":12},{"user":"Kykywox","timeMS":1669932183924,"count":2},{"user":"sweatpantsandsuitjackets","timeMS":1669932192929,"count":10},{"user":"yungelderberry","timeMS":1669932193798,"count":2},{"user":"Lotharou","timeMS":1669932198809,"count":10},{"user":"UVCW","timeMS":1669932202222,"count":10},{"user":"beglebum","timeMS":1669932204430,"count":10},{"user":"uncanny_pyro","timeMS":1669932208426,"count":9},{"user":"Forrest_ThePugKing","timeMS":1669932211735,"count":12},{"user":"Scyral","timeMS":1669932226226,"count":9},{"user":"viviz","timeMS":1669932244942,"count":9},{"user":"Lotharou","timeMS":1669932680463,"count":1},{"user":"Lotharou","timeMS":1669932687243,"count":1},{"user":"Lotharou","timeMS":1669932749696,"count":3},{"user":"beglebum","timeMS":1669933250951,"count":4},{"user":"MynockGate","timeMS":1669933254323,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669933259822,"count":4},{"user":"UVCW","timeMS":1669933264227,"count":10},{"user":"VanBeren","timeMS":1669934150224,"count":15},{"user":"SkunkPriest","timeMS":1669934151018,"count":1},{"user":"MynockGate","timeMS":1669934166624,"count":18},{"user":"Scyral","timeMS":1669934599206,"count":4},{"user":"ForeverMalone","timeMS":1669935514883,"count":4},{"user":"argyle_pigeon","timeMS":1669935524150,"count":4},{"user":"seagespacho","timeMS":1669935530285,"count":4},{"user":"CaptWumbo","timeMS":1669935535981,"count":4},{"user":"BrownTownBrown","timeMS":1669935536227,"count":4},{"user":"ForeverMalone","timeMS":1669935568109,"count":4},{"user":"argyle_pigeon","timeMS":1669935822722,"count":6},{"user":"argyle_pigeon","timeMS":1669935921805,"count":5},{"user":"Scyral","timeMS":1669935950337,"count":4},{"user":"Kykywox","timeMS":1669938644023,"count":10},{"user":"MynockGate","timeMS":1669938663098,"count":10},{"user":"MynockGate","timeMS":1669938666873,"count":10},{"user":"benjiTK","timeMS":1669938676018,"count":10},{"user":"McNeww","timeMS":1669938710536,"count":10},{"user":"ForeverMalone","timeMS":1669941813273,"count":5},{"user":"ForeverMalone","timeMS":1669941834255,"count":5},{"user":"ForeverMalone","timeMS":1669941848294,"count":5},{"user":"ForeverMalone","timeMS":1669941869963,"count":5},{"user":"ForeverMalone","timeMS":1669941894921,"count":5},{"user":"richardsim7","timeMS":1669942340652,"count":1},{"user":"Nightbot","timeMS":1669942392796,"count":10},{"user":"Forrest_ThePugKing","timeMS":1669942410956,"count":1},{"user":"Nightbot","timeMS":1669942427160,"count":10},{"user":"ForeverMalone","timeMS":1669942468747,"count":5},{"user":"McNeww","timeMS":1669942504231,"count":1},{"user":"Nightbot","timeMS":1669942592273,"count":10},{"user":"ForeverMalone","timeMS":1669942593502,"count":5},{"user":"carmnsndiego","timeMS":1669942593730,"count":4},{"user":"richardsim7","timeMS":1669942604018,"count":1},{"user":"FridayAtElmStreet","timeMS":1669942606124,"count":8},{"user":"ForeverMalone","timeMS":1669942608421,"count":5},{"user":"adamandhisbun","timeMS":1669942609037,"count":10},{"user":"ForeverMalone","timeMS":1669942613175,"count":5},{"user":"alexieee_","timeMS":1669942615026,"count":4},{"user":"kimchikelso","timeMS":1669942615913,"count":5},{"user":"beglebum","timeMS":1669942617717,"count":10},{"user":"cajunrabbit90","timeMS":1669942617941,"count":10},{"user":"Lotharou","timeMS":1669942618318,"count":5},{"user":"Kykywox","timeMS":1669942621291,"count":10},{"user":"Lotharou","timeMS":1669942621737,"count":5},{"user":"goodolgregg","timeMS":1669942623598,"count":4},{"user":"ForeverMalone","timeMS":1669942624435,"count":5},{"user":"suddenlyzoe","timeMS":1669942625227,"count":5},{"user":"MynockGate","timeMS":1669942625728,"count":6},{"user":"cajunrabbit90","timeMS":1669942626049,"count":10},{"user":"viviz","timeMS":1669942627376,"count":14},{"user":"ForeverMalone","timeMS":1669942630082,"count":6},{"user":"alexieee_","timeMS":1669942630855,"count":6},{"user":"AraSanji","timeMS":1669942632700,"count":5},{"user":"ForeverMalone","timeMS":1669942634501,"count":6},{"user":"viviz","timeMS":1669942634946,"count":12},{"user":"FridayAtElmStreet","timeMS":1669942635032,"count":5},{"user":"Forrest_ThePugKing","timeMS":1669942635054,"count":8},{"user":"TheSisk0","timeMS":1669942635437,"count":7},{"user":"HelloNeptune","timeMS":1669942635590,"count":5},{"user":"zona_james","timeMS":1669942636233,"count":3},{"user":"sweatpantsandsuitjackets","timeMS":1669942637876,"count":10},{"user":"carmnsndiego","timeMS":1669942638365,"count":4},{"user":"ForeverMalone","timeMS":1669942638938,"count":6},{"user":"SkunkPriest","timeMS":1669942640399,"count":14},{"user":"dbcallector","timeMS":1669942644050,"count":6},{"user":"ForeverMalone","timeMS":1669942649303,"count":6},{"user":"viviz","timeMS":1669942650106,"count":10},{"user":"SeedyEyes","timeMS":1669942650673,"count":12},{"user":"FridayAtElmStreet","timeMS":1669942651832,"count":6},{"user":"BrownTownBrown","timeMS":1669942654858,"count":6},{"user":"cajunrabbit90","timeMS":1669942655059,"count":10},{"user":"ForeverMalone","timeMS":1669942655882,"count":7},{"user":"Lotharou","timeMS":1669942658019,"count":5},{"user":"alexieee_","timeMS":1669942660105,"count":6},{"user":"viviz","timeMS":1669942660809,"count":10},{"user":"ForeverMalone","timeMS":1669942660822,"count":7},{"user":"explohd","timeMS":1669942660865,"count":12},{"user":"kimchikelso","timeMS":1669942661459,"count":12},{"user":"frightwave","timeMS":1669942663374,"count":6},{"user":"cajunrabbit90","timeMS":1669942663451,"count":10},{"user":"sweatpantsandsuitjackets","timeMS":1669942667693,"count":10},{"user":"ForeverMalone","timeMS":1669942668384,"count":7},{"user":"dbcallector","timeMS":1669942670629,"count":12},{"user":"FridayAtElmStreet","timeMS":1669942674880,"count":4},{"user":"ForeverMalone","timeMS":1669942675722,"count":7},{"user":"MynockGate","timeMS":1669942677796,"count":10},{"user":"ForeverMalone","timeMS":1669942678043,"count":7},{"user":"carmnsndiego","timeMS":1669942680591,"count":7},{"user":"MynockGate","timeMS":1669942681097,"count":10},{"user":"McNeww","timeMS":1669942685811,"count":7},{"user":"ForeverMalone","timeMS":1669942688909,"count":7},{"user":"MynockGate","timeMS":1669942697491,"count":10},{"user":"cajunrabbit90","timeMS":1669942698414,"count":10},{"user":"FridayAtElmStreet","timeMS":1669942698933,"count":5},{"user":"MynockGate","timeMS":1669942700386,"count":10},{"user":"djdduty","timeMS":1669942701499,"count":6},{"user":"dbcallector","timeMS":1669942701601,"count":12},{"user":"cajunrabbit90","timeMS":1669942707973,"count":10},{"user":"wiltygreens","timeMS":1669942715367,"count":12},{"user":"benjiTK","timeMS":1669942724458,"count":12},{"user":"djdduty","timeMS":1669942730451,"count":13},{"user":"Cyclonicks","timeMS":1669942743975,"count":13},{"user":"ForeverMalone","timeMS":1669942745368,"count":7},{"user":"FridayAtElmStreet","timeMS":1669942748646,"count":4},{"user":"viviz","timeMS":1669942751716,"count":12},{"user":"sweatpantsandsuitjackets","timeMS":1669942752894,"count":10},{"user":"dbcallector","timeMS":1669942753019,"count":12},{"user":"SeedyEyes","timeMS":1669942753126,"count":12},{"user":"kimchikelso","timeMS":1669942755587,"count":12},{"user":"carmnsndiego","timeMS":1669942756240,"count":4},{"user":"cajunrabbit90","timeMS":1669942756564,"count":10},{"user":"beglebum","timeMS":1669942757517,"count":10},{"user":"benjiTK","timeMS":1669942757589,"count":12},{"user":"viviz","timeMS":1669942757713,"count":10},{"user":"goodolgregg","timeMS":1669942758253,"count":6},{"user":"cajunrabbit90","timeMS":1669942761539,"count":10},{"user":"ForeverMalone","timeMS":1669942762665,"count":7},{"user":"djdduty","timeMS":1669942763301,"count":6},{"user":"alexieee_","timeMS":1669942763605,"count":5},{"user":"FridayAtElmStreet","timeMS":1669942764185,"count":5},{"user":"AraSanji","timeMS":1669942765933,"count":5},{"user":"Nightbot","timeMS":1669942767498,"count":10},{"user":"benjiTK","timeMS":1669942768853,"count":13},{"user":"TheSisk0","timeMS":1669942769572,"count":9},{"user":"dbcallector","timeMS":1669942771717,"count":23},{"user":"viviz","timeMS":1669942772107,"count":10},{"user":"ladyfatallitea","timeMS":1669942772771,"count":12},{"user":"ForeverMalone","timeMS":1669942773629,"count":7},{"user":"ModestPumpkin","timeMS":1669942774565,"count":2},{"user":"kimchikelso","timeMS":1669942775137,"count":10},{"user":"wiltygreens","timeMS":1669942775317,"count":13},{"user":"viviz","timeMS":1669942782663,"count":12},{"user":"SkunkPriest","timeMS":1669942784571,"count":9},{"user":"Orenfel","timeMS":1669942786595,"count":13},{"user":"FridayAtElmStreet","timeMS":1669942790744,"count":3},{"user":"dbcallector","timeMS":1669942792752,"count":12},{"user":"ForeverMalone","timeMS":1669942796341,"count":7},{"user":"ForeverMalone","timeMS":1669942802222,"count":7},{"user":"viviz","timeMS":1669942803461,"count":14},{"user":"Rezoli","timeMS":1669942804844,"count":12},{"user":"ForeverMalone","timeMS":1669942808249,"count":7},{"user":"Rezoli","timeMS":1669942810376,"count":12},{"user":"Rezoli","timeMS":1669942810855,"count":12},{"user":"ForeverMalone","timeMS":1669942811226,"count":7},{"user":"Rezoli","timeMS":1669942811482,"count":12},{"user":"Rezoli","timeMS":1669942812177,"count":12},{"user":"Rezoli","timeMS":1669942813389,"count":12},{"user":"ForeverMalone","timeMS":1669942814324,"count":7},{"user":"SeedyEyes","timeMS":1669942815730,"count":12},{"user":"McNeww","timeMS":1669942846099,"count":7},{"user":"McNeww","timeMS":1669942863339,"count":7},{"user":"McNeww","timeMS":1669942888800,"count":7},{"user":"FridayAtElmStreet","timeMS":1669942896778,"count":1},{"user":"SkunkPriest","timeMS":1669942933863,"count":2},{"user":"McNeww","timeMS":1669942956583,"count":7}]');

},{}],"eWKe8":[function(require,module,exports) {
module.exports = JSON.parse('[{"chatter":"Nightbot","count":8050},{"chatter":"Lotharou","count":5686},{"chatter":"TheCrunge24","count":4875},{"chatter":"UVCW","count":4579},{"chatter":"Scyral","count":4255},{"chatter":"argyle_pigeon","count":4045},{"chatter":"Spazolin_Dirk","count":3588},{"chatter":"scifigirl211","count":3352},{"chatter":"sweatpantsandsuitjackets","count":3190},{"chatter":"beglebum","count":3188},{"chatter":"MynockGate","count":3148},{"chatter":"grindhaus","count":2851},{"chatter":"cysann","count":2371},{"chatter":"Teerizz","count":2299},{"chatter":"Ben64r","count":2192}]');

},{}],"97m7T":[function(require,module,exports) {
module.exports = JSON.parse('[{"emote":"maiyaDance","count":19686},{"emote":"KEKW","count":12905},{"emote":"wubby7","count":8179},{"emote":"Pog","count":5685},{"emote":"alluuxSteer","count":4954},{"emote":"yebANTIRAID","count":4830},{"emote":"alluuxHype","count":4623},{"emote":"Clap","count":3871},{"emote":"<3","count":3410},{"emote":"alluuxRun","count":3387},{"emote":"LUL","count":3193},{"emote":"alluux7","count":3146},{"emote":"maiyaClap","count":2771},{"emote":"Stare","count":2524},{"emote":"D:","count":2163}]');

},{}]},["4ayTC","kkiZQ"], "kkiZQ", "parcelRequirea17d")

//# sourceMappingURL=index.807e5f08.js.map