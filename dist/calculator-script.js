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
})({"iUHqi":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d890859568b24bb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gYdTW":[function(require,module,exports) {
var _helpersFunctions = require("./helpers-functions");
var _lookups = require("./lookups");
console.log("Calculator script loaded ");
/**
 * fixed values based on notion doc instructions
 * comment includes the cell reference from Google sheet
 */ const managed_instance = true; // B6
const hosted_region = "us"; // B16
const credit_price = 3; // B17
const margin = 0.3; // B22 -> 30%
// user input values
let data_ingestion_per_day = 7000; // A5
let data_retention_in_days = 365; // B5
// calculated values
const data_load_service = "Snowpipe"; // B9, "Snowpipe" here is hard coded(according to Google sheet), but can be collected from input if needed.
const data_credits_per_year = (0, _lookups.get_credits_per_year)(data_ingestion_per_day, data_load_service); // B9,
const [warehouse_size, warehouse_credits_per_year] = (0, _lookups.get_warehouse_data)(data_ingestion_per_day); // [A11, B11]
const storage_size_on_disk_TB = data_ingestion_per_day * data_retention_in_days / 1024 * (1 - (0, _lookups.COMPRESSION_RATE)); // A13, =((A5*B5)/1024)*(1-Lookups!B17)
let total_compute = 0; // B18
let total_storage = 0; // B19
let anvilogic_cost = 0; // B20
let anvilogic_profit = 0; // B21
let customer_estimate = 0; // B23
let splunk_cost = 0; // B28
let splunk_savings = 0; // C28
let splunk_cloud_cost = 0; // B29
let splunk_cloud_savings = 0; // C29
let azure_sentinel_cost = 0; // B30
let azure_sentinel_savings = 0; // C30
// DOM elements
const $totalCompute = document.getElementById("total_compute");
const $totalStorage = document.getElementById("total_storage");
const $anvilogicCost = document.getElementById("anvilogic_cost");
const $splunkCost = document.getElementById("splunk_cost");
const $splunkSavings = document.getElementById("splunk_savings");
const $splunkCloudCost = document.getElementById("splunk_cloud_cost");
const $splunkCloudSavings = document.getElementById("splunk_cloud_savings");
const $azureSentinelCost = document.getElementById("azure_sentinel_cost");
const $azureSentinelSavings = document.getElementById("azure_sentinel_savings");
/**
 * ------------------------------------------
 * Calculations
 */ function calculate_totals() {
    // recalculate the values
    total_compute = (0, _helpersFunctions.formattedNumber)(credit_price * (warehouse_credits_per_year + data_credits_per_year));
    total_storage = (0, _lookups.get_total_storage)(hosted_region, storage_size_on_disk_TB);
    anvilogic_cost = (0, _helpersFunctions.formattedNumber)(total_compute + total_storage); // =sum(B18+B19)
    anvilogic_profit = (0, _helpersFunctions.formattedNumber)(managed_instance ? total_compute * margin : 0); // =IF(B6=FALSE(), 0, B18*B22)
    customer_estimate = anvilogic_cost + anvilogic_profit; // =sum(B20+B21)
    const { splunk_val, splunk_cloud_val, azure_val } = (0, _lookups.get_compared_costs)(data_ingestion_per_day);
    splunk_cost = splunk_val;
    splunk_savings = (splunk_cost - customer_estimate) / splunk_cost;
    splunk_cloud_cost = splunk_cloud_val;
    splunk_cloud_savings = (splunk_cloud_cost - customer_estimate) / splunk_cloud_cost;
    azure_sentinel_cost = azure_val;
    azure_sentinel_savings = (azure_sentinel_cost - customer_estimate) / azure_sentinel_cost;
    // update DOM elements
    if ($totalCompute && $totalStorage && $anvilogicCost) {
        $totalCompute.textContent = (0, _helpersFunctions.numberToPrice)(total_compute);
        $totalStorage.textContent = (0, _helpersFunctions.numberToPrice)(total_storage);
        $anvilogicCost.textContent = (0, _helpersFunctions.numberToPrice)(anvilogic_cost);
        $splunkCost.textContent = (0, _helpersFunctions.numberToPrice)(splunk_cost);
        $splunkSavings.textContent = (0, _helpersFunctions.getSavingsPercent)(splunk_savings);
        $splunkCloudCost.textContent = (0, _helpersFunctions.numberToPrice)(splunk_cloud_cost);
        $splunkCloudSavings.textContent = (0, _helpersFunctions.getSavingsPercent)(splunk_cloud_savings);
        $azureSentinelCost.textContent = (0, _helpersFunctions.numberToPrice)(azure_sentinel_cost);
        $azureSentinelSavings.textContent = (0, _helpersFunctions.getSavingsPercent)(azure_sentinel_savings);
    } else console.error("All necessary DOM elements not found");
    // console.log(data_ingestion_per_day, data_retention_in_days);
    console.log("---------------------------------------------------------");
    console.log("Total compute: ", total_compute);
    console.log("Total storage: ", total_storage);
    console.log("Anvilogic cost: ", anvilogic_cost);
    console.log("Anvilogic profit: ", anvilogic_profit);
    console.log("Customer estimate: ", customer_estimate);
    console.log("Splunk cost: ", splunk_cost);
    console.log("Splunk savings: ", splunk_savings);
    console.log("Splunk cloud cost: ", splunk_cloud_cost);
    console.log("Splunk cloud savings: ", splunk_cloud_savings);
    console.log("Azure Sentinel cost: ", azure_sentinel_cost);
    console.log("Azure Sentinel savings: ", azure_sentinel_savings);
}
/**
 * ------------------------------------------
 * Event listeners
 */ // Get the input element
const dataSizeInput = document.getElementById("Data-size");
const dataRetentionDaysInput = document.getElementById("Number-of-days");
// handle the input change event
function handleInputChange(event) {
    const inputElement = event.target;
    if (inputElement.id === "Data-size") data_ingestion_per_day = parseInt(inputElement.value);
    else data_retention_in_days = parseInt(inputElement.value);
    // recalculate the values
    calculate_totals();
}
// Attach the event listener to the input element (can be optimized using debounce)
dataSizeInput.addEventListener("input", handleInputChange);
dataRetentionDaysInput.addEventListener("input", handleInputChange);
/**
 * ------------------------------------------
 * on load, set the initial values
 * and calculate the totals
 */ document.addEventListener("DOMContentLoaded", function() {
    dataSizeInput.value = data_ingestion_per_day.toString();
    dataRetentionDaysInput.value = data_retention_in_days.toString();
    calculate_totals();
}); // --- END onload ---

},{"./lookups":"6U6f9","./helpers-functions":"IAx4b"}],"6U6f9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMPRESSION_RATE", ()=>COMPRESSION_RATE);
parcelHelpers.export(exports, "MANAGED_COST", ()=>MANAGED_COST);
parcelHelpers.export(exports, "STORAGE_COST", ()=>STORAGE_COST);
parcelHelpers.export(exports, "COMPUTE_COST", ()=>COMPUTE_COST);
parcelHelpers.export(exports, "DATA_LOAD_SERVICE", ()=>DATA_LOAD_SERVICE);
parcelHelpers.export(exports, "get_credits_per_year", ()=>get_credits_per_year);
parcelHelpers.export(exports, "get_warehouse_data", ()=>get_warehouse_data);
parcelHelpers.export(exports, "get_total_storage", ()=>get_total_storage);
parcelHelpers.export(exports, "get_compared_costs", ()=>get_compared_costs);
var _helpersFunctions = require("./helpers-functions");
const COMPRESSION_RATE = 0.9; // B17
const MANAGED_COST = 0.3; // B19
// Storage Loc	Cost / TB
const STORAGE_COST = {
    "us-east": 24,
    "eu-central": 24.5,
    "ap-southeast": 25
};
// Compute Loc	Cost / Credit
const COMPUTE_COST = {
    "us-east": 3,
    "eu-central": 3.9,
    "ap-southeast": 3.7
};
/**
 * --------------------------------------
 * data load service / credits per year
 */ const DATA_LOAD_SERVICE = {
    Snowpipe: 2190,
    Snowpipe_ADJ: 29200
};
function get_credits_per_year(data_ingestion_per_day, data_load_service) {
    // =((A5/100/1.25)*Lookups!B12)
    return data_ingestion_per_day / 100 / 1.25 * DATA_LOAD_SERVICE[data_load_service];
}
/**
 * --------------------------------------
 * warehouse size / credits per year
 */ const WAREHOUSE_SIZE = {
    XS: 11680,
    S: 23360,
    M: 46720,
    L: 93440,
    XL: 186880,
    "2XL": 373760,
    "3XL": 747520,
    "4XL": 1495040
};
function get_warehouse_data(data_ingestion_per_day) {
    //=IF(ISBETWEEN(A5,0,2000,TRUE,TRUE),"XS", IF(ISBETWEEN(A5,2000,5000,FALSE,TRUE), "S", IF(ISBETWEEN(A5,5000,12500,FALSE,TRUE), "M", IF(ISBETWEEN(A5,12500,25000,FALSE,TRUE), "L", IF(ISBETWEEN(A5,25000,50000,FALSE,TRUE))))))
    let size;
    if (data_ingestion_per_day <= 2000) size = "XS";
    else if (data_ingestion_per_day <= 5000) size = "S";
    else if (data_ingestion_per_day <= 12500) size = "M";
    else if (data_ingestion_per_day <= 25000) size = "L";
    else if (data_ingestion_per_day <= 50000) size = "XL";
    else if (data_ingestion_per_day <= 100000) size = "2XL";
    else if (data_ingestion_per_day <= 200000) size = "3XL";
    else size = "4XL";
    return [
        size,
        WAREHOUSE_SIZE[size]
    ];
}
/**
 * --------------------------------------
 * total storage calculation
 * location is fixed to "us" -> ("us-east") for now ( according to notion doc)
 * =IF(B16="US", IF(A13*Lookups!E15*12 < 24, "24", A13*Lookups!E15*12)/1,IF(B16="EU", IF(A13*Lookups!E16*12 < 24.5, "24.5", A13*Lookups!E16*12)/1, IF(B16="AP", IF(A13*Lookups!E17*12 < 24.5, "24.5", A13*Lookups!E17*12)/1)))
 */ function get_total_storage(hosted_region, storage_size_on_disk_TB) {
    if (hosted_region === "us") {
        // IF(A13*Lookups!E15*12 < 24, "24", A13*Lookups!E15*12)/1
        const result = storage_size_on_disk_TB * STORAGE_COST["us-east"] * 12 < 24 ? 24 : storage_size_on_disk_TB * STORAGE_COST["us-east"] * 12;
        return Math.ceil(result * 100) / 100;
    }
}
/**
 * --------------------------------------
 * calculate compared costs
 */ // [GB/Year: A25, Splunk: B25, Splunk Cloud: C25, Azure Sentinel: D25
const COMPARED_COSTS = [
    [
        100,
        600,
        800,
        715.4
    ],
    [
        500,
        500,
        710,
        631.45
    ],
    [
        1024,
        390.63,
        683.59,
        620.5
    ],
    [
        5120,
        366.21,
        488.28,
        587.65
    ],
    [
        10240,
        292.97,
        390.63,
        550
    ],
    [
        25600,
        244.14,
        341.8,
        510
    ],
    [
        51200,
        195.31,
        195.31,
        470
    ]
];
function get_compared_costs(data) {
    let result = {
        splunk_val: 0,
        splunk_cloud_val: 0,
        azure_val: 0
    };
    /*formula = IF( A5<Lookups!A27,A5*Lookups!B26, IF( A5<Lookups!A28,A5*Lookups!B27, IF( A5<Lookups!A29,A5*Lookups!B28,IF( A5<Lookups!A30,A5*Lookups!B29, IF( A5<Lookups!A31,A5*Lookups!B30, IF( A5<Lookups!A32,A5*Lookups!B31,A5*Lookups!B32 ) ) ) ) ) )*/ COMPARED_COSTS.every(([gb_per_year, splunk, splunk_cloud, azure])=>{
        console.log(data, gb_per_year, splunk, splunk_cloud, azure);
        if (data <= gb_per_year) {
            result = {
                splunk_val: (0, _helpersFunctions.formattedNumber)(data * splunk),
                splunk_cloud_val: (0, _helpersFunctions.formattedNumber)(data * splunk_cloud),
                azure_val: (0, _helpersFunctions.formattedNumber)(data * azure)
            };
            return; // exit loop if match found
        }
        return true; // continue loop
    });
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"b3YDz","./helpers-functions":"IAx4b"}],"b3YDz":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"IAx4b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formattedNumber", ()=>formattedNumber);
/**
 * return format: $91,980.00
 * @param value
 */ parcelHelpers.export(exports, "numberToPrice", ()=>numberToPrice);
/**
 * get savings %
 * format: 71.43%
 */ parcelHelpers.export(exports, "getSavingsPercent", ()=>getSavingsPercent);
function formattedNumber(value) {
    return Math.ceil(value * 100) / 100;
}
function numberToPrice(value) {
    let num = formattedNumber(value);
    return num.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}
function getSavingsPercent(savings) {
    return formattedNumber(savings * 100) + "%";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"b3YDz"}]},["iUHqi","gYdTW"], "gYdTW", "parcelRequire88a3")

//# sourceMappingURL=calculator-script.js.map
