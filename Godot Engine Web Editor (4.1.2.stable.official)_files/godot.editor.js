
var Godot = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Godot) {
  Godot = Godot || {};


var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = c.value;
  return a;
};
function ca(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global,];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
}
var da = ca(this);
function ea(a, b) {
  if (b) {
    a: {
      var c = da;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) {
          break a;
        }
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && aa(c, a, {configurable:!0, writable:!0, value:b});
    }
  }
}
ea("Object.values", function(a) {
  return a ? a : function(b) {
    var c = [], d;
    for (d in b) {
      Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
    }
    return c;
  };
});
ea("Array.prototype.includes", function(a) {
  return a ? a : function(b, c) {
    var d = this;
    d instanceof String && (d = String(d));
    var e = d.length;
    c = c || 0;
    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
      var f = d[c];
      if (f === b || Object.is(f, b)) {
        return !0;
      }
    }
    return !1;
  };
});
ea("String.prototype.padStart", function(a) {
  return a ? a : function(b, c) {
    if (null == this) {
      throw new TypeError("The 'this' value for String.prototype.padStart must not be null or undefined");
    }
    b -= this.length;
    c = void 0 !== c ? String(c) : " ";
    return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + this;
  };
});
function h() {
  m.buffer != fa && ha(m.buffer);
  return ja;
}
function ka() {
  m.buffer != fa && ha(m.buffer);
  return ma;
}
function na() {
  m.buffer != fa && ha(m.buffer);
  return oa;
}
function pa() {
  m.buffer != fa && ha(m.buffer);
  return qa;
}
function n() {
  m.buffer != fa && ha(m.buffer);
  return ra;
}
function q() {
  m.buffer != fa && ha(m.buffer);
  return sa;
}
function t() {
  m.buffer != fa && ha(m.buffer);
  return ta;
}
function ua() {
  m.buffer != fa && ha(m.buffer);
  return va;
}
var v;
v || (v = typeof Godot !== 'undefined' ? Godot : {});
var wa, xa;
v.ready = new Promise(function(a, b) {
  wa = a;
  xa = b;
});
"_main __emscripten_thread_init __emscripten_thread_exit __emscripten_thread_crashed __emscripten_tls_init _pthread_self executeNotifiedProxyingQueue establishStackSpace invokeEntryPoint PThread _emscripten_webgl_commit_frame __Z14godot_web_mainiPPc _fflush __emwebxr_on_input_event __emwebxr_on_simple_event __emscripten_proxy_execute_task_queue onRuntimeInitialized".split(" ").forEach(a => {
  Object.getOwnPropertyDescriptor(v.ready, a) || Object.defineProperty(v.ready, a, {get:() => za("You are getting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"), set:() => za("You are setting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")});
});
var Aa = Object.assign({}, v), Ba = [], Ca = "./this.program", Da = (a, b) => {
  throw b;
}, Ea = "object" == typeof window, Fa = "function" == typeof importScripts, Ga = "object" == typeof process && "object" == typeof process.dd && "string" == typeof process.dd.node, Ha = !Ea && !Ga && !Fa;
if (v.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
}
var w = v.ENVIRONMENT_IS_PTHREAD || !1, Ia = "";
function Ja(a) {
  return v.locateFile ? v.locateFile(a, Ia) : Ia + a;
}
var La;
if (Ha) {
  if ("object" == typeof process && "function" === typeof require || "object" == typeof window || "function" == typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  La = function(a) {
    if ("function" == typeof readbuffer) {
      return new Uint8Array(readbuffer(a));
    }
    a = read(a, "binary");
    y("object" == typeof a);
    return a;
  };
  "undefined" != typeof scriptArgs ? Ba = scriptArgs : "undefined" != typeof arguments && (Ba = arguments);
  "function" == typeof quit && (Da = (a, b) => {
    if (Ma) {
      throw b;
    }
    if (!(b instanceof Na)) {
      var c = b;
      b && "object" == typeof b && b.stack && (c = [b, b.stack]);
      z("exiting due to exception: " + c);
    }
    quit(a);
  });
  "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print);
} else if (Ea || Fa) {
  Fa ? Ia = self.location.href : "undefined" != typeof document && document.currentScript && (Ia = document.currentScript.src);
  _scriptDir && (Ia = _scriptDir);
  0 !== Ia.indexOf("blob:") ? Ia = Ia.substr(0, Ia.replace(/[?#].*/, "").lastIndexOf("/") + 1) : Ia = "";
  if ("object" != typeof window && "function" != typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  Fa && (La = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  });
} else {
  throw Error("environment detection error");
}
var Oa = v.print || console.log.bind(console), z = v.printErr || console.warn.bind(console);
Object.assign(v, Aa);
Aa = null;
Object.getOwnPropertyDescriptor(v, "fetchSettings") && za("`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API");
v.arguments && (Ba = v.arguments);
Pa("arguments", "arguments_");
v.thisProgram && (Ca = v.thisProgram);
Pa("thisProgram", "thisProgram");
v.quit && (Da = v.quit);
Pa("quit", "quit_");
y("undefined" == typeof v.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
y("undefined" == typeof v.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
y("undefined" == typeof v.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
y("undefined" == typeof v.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
y("undefined" == typeof v.read, "Module.read option was removed (modify read_ in JS)");
y("undefined" == typeof v.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
y("undefined" == typeof v.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
y("undefined" == typeof v.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
y("undefined" == typeof v.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Pa("read", "read_");
Pa("readAsync", "readAsync");
Pa("readBinary", "readBinary");
Pa("setWindowTitle", "setWindowTitle");
y(Ea || Fa || Ga, "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)");
y(!Ga, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");
y(!Ha, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");
function Pa(a, b) {
  Object.getOwnPropertyDescriptor(v, a) || Object.defineProperty(v, a, {configurable:!0, get:function() {
    za("Module." + a + " has been replaced with plain " + b + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }});
}
function Qa(a) {
  return "FS_createPath" === a || "FS_createDataFile" === a || "FS_createPreloadedFile" === a || "FS_unlink" === a || "addRunDependency" === a || "FS_createLazyFile" === a || "FS_createDevice" === a || "removeRunDependency" === a;
}
var Ra = 0, Sa;
v.wasmBinary && (Sa = v.wasmBinary);
Pa("wasmBinary", "wasmBinary");
var noExitRuntime = v.noExitRuntime || !1;
Pa("noExitRuntime", "noExitRuntime");
"object" != typeof WebAssembly && za("no native wasm support detected");
var m, Ta, Ua = !1, Va;
function y(a, b) {
  a || za("Assertion failed" + (b ? ": " + b : ""));
}
var Wa = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function Xa(a, b, c) {
  var d = b + c;
  for (c = b; a[c] && !(c >= d);) {
    ++c;
  }
  if (16 < c - b && a.buffer && Wa) {
    return Wa.decode(a.buffer instanceof SharedArrayBuffer ? a.slice(b, c) : a.subarray(b, c));
  }
  for (d = ""; b < c;) {
    var e = a[b++];
    if (e & 128) {
      var f = a[b++] & 63;
      if (192 == (e & 224)) {
        d += String.fromCharCode((e & 31) << 6 | f);
      } else {
        var g = a[b++] & 63;
        224 == (e & 240) ? e = (e & 15) << 12 | f << 6 | g : (240 != (e & 248) && Ya("Invalid UTF-8 leading byte 0x" + e.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), e = (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63);
        65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
      }
    } else {
      d += String.fromCharCode(e);
    }
  }
  return d;
}
function C(a, b) {
  return a ? Xa(ka(), a, b) : "";
}
function Za(a, b, c, d) {
  if (!(0 < d)) {
    return 0;
  }
  var e = c;
  d = c + d - 1;
  for (var f = 0; f < a.length; ++f) {
    var g = a.charCodeAt(f);
    if (55296 <= g && 57343 >= g) {
      var k = a.charCodeAt(++f);
      g = 65536 + ((g & 1023) << 10) | k & 1023;
    }
    if (127 >= g) {
      if (c >= d) {
        break;
      }
      b[c++] = g;
    } else {
      if (2047 >= g) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | g >> 6;
      } else {
        if (65535 >= g) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | g >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          1114111 < g && Ya("Invalid Unicode code point 0x" + g.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
          b[c++] = 240 | g >> 18;
          b[c++] = 128 | g >> 12 & 63;
        }
        b[c++] = 128 | g >> 6 & 63;
      }
      b[c++] = 128 | g & 63;
    }
  }
  b[c] = 0;
  return c - e;
}
function $a(a, b, c) {
  y("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  return Za(a, ka(), b, c);
}
function ab(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
  }
  return b;
}
var fa, ja, ma, oa, qa, ra, sa, ta, va;
w && (fa = v.buffer);
function ha(a) {
  fa = a;
  v.HEAP8 = ja = new Int8Array(a);
  v.HEAP16 = oa = new Int16Array(a);
  v.HEAP32 = ra = new Int32Array(a);
  v.HEAPU8 = ma = new Uint8Array(a);
  v.HEAPU16 = qa = new Uint16Array(a);
  v.HEAPU32 = sa = new Uint32Array(a);
  v.HEAPF32 = ta = new Float32Array(a);
  v.HEAPF64 = va = new Float64Array(a);
}
v.TOTAL_STACK && y(5242880 === v.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var bb = v.INITIAL_MEMORY || 67108864;
Pa("INITIAL_MEMORY", "INITIAL_MEMORY");
y(5242880 <= bb, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + bb + "! (TOTAL_STACK=5242880)");
y("undefined" != typeof Int32Array && "undefined" !== typeof Float64Array && void 0 != Int32Array.prototype.subarray && void 0 != Int32Array.prototype.set, "JS engine does not provide full typed array support");
if (w) {
  m = v.wasmMemory, fa = v.buffer;
} else {
  if (v.wasmMemory) {
    m = v.wasmMemory;
  } else {
    if (m = new WebAssembly.Memory({initial:bb / 65536, maximum:32768, shared:!0}), !(m.buffer instanceof SharedArrayBuffer)) {
      throw z("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), Ga && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"), Error("bad memory");
    }
  }
}
m && (fa = m.buffer);
bb = fa.byteLength;
y(0 === bb % 65536);
ha(fa);
var cb;
function db() {
  var a = eb();
  y(0 == (a & 3));
  n()[a >> 2] = 34821223;
  n()[a + 4 >> 2] = 2310721022;
  q()[0] = 1668509029;
}
function fb() {
  if (!Ua) {
    var a = eb(), b = q()[a >> 2], c = q()[a + 4 >> 2];
    34821223 == b && 2310721022 == c || za("Stack overflow! Stack cookie has been overwritten at 0x" + a.toString(16) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + c.toString(16) + " 0x" + b.toString(16));
    1668509029 !== q()[0] && za("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var gb = new Int16Array(1), hb = new Int8Array(gb.buffer);
gb[0] = 25459;
if (115 !== hb[0] || 99 !== hb[1]) {
  throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
}
var ib = [], jb = [], kb = [], lb = [], mb = [], nb = !1, ob = !1, Ma = 0;
function pb() {
  return noExitRuntime || 0 < Ma;
}
function qb() {
  y(!nb);
  nb = !0;
  if (!w) {
    fb();
    if (!v.noFSInit && !rb) {
      y(!rb, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
      rb = !0;
      sb();
      v.stdin = v.stdin;
      v.stdout = v.stdout;
      v.stderr = v.stderr;
      v.stdin ? tb("stdin", v.stdin) : ub("/dev/tty", "/dev/stdin");
      v.stdout ? tb("stdout", null, v.stdout) : ub("/dev/tty", "/dev/stdout");
      v.stderr ? tb("stderr", null, v.stderr) : ub("/dev/tty1", "/dev/stderr");
      var a = vb("/dev/stdin", 0), b = vb("/dev/stdout", 1), c = vb("/dev/stderr", 1);
      y(0 === a.m, "invalid handle for stdin (" + a.m + ")");
      y(1 === b.m, "invalid handle for stdout (" + b.m + ")");
      y(2 === c.m, "invalid handle for stderr (" + c.m + ")");
    }
    wb = !1;
    xb.root = yb(xb, null);
    zb(jb);
  }
}
function Ab() {
  var a = v.preRun.shift();
  ib.unshift(a);
}
y(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
y(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
y(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
y(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var Bb = 0, Cb = null, Db = null, Eb = {};
function Fb() {
  Bb++;
  v.monitorRunDependencies && v.monitorRunDependencies(Bb);
  y(!Eb["wasm-instantiate"]);
  Eb["wasm-instantiate"] = 1;
  null === Cb && "undefined" != typeof setInterval && (Cb = setInterval(function() {
    if (Ua) {
      clearInterval(Cb), Cb = null;
    } else {
      var a = !1, b;
      for (b in Eb) {
        a || (a = !0, z("still waiting on run dependencies:")), z("dependency: " + b);
      }
      a && z("(end of list)");
    }
  }, 1e4));
}
function za(a) {
  if (w) {
    postMessage({cmd:"onAbort", arg:a});
  } else {
    if (v.onAbort) {
      v.onAbort(a);
    }
  }
  a = "Aborted(" + a + ")";
  z(a);
  Ua = !0;
  Va = 1;
  a = new WebAssembly.RuntimeError(a);
  xa(a);
  throw a;
}
function Gb() {
  return Hb.startsWith("data:application/octet-stream;base64,");
}
function E(a) {
  return function() {
    var b = v.asm;
    y(nb, "native function `" + a + "` called before runtime initialization");
    y(!ob, "native function `" + a + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    b[a] || y(b[a], "exported native function `" + a + "` not found");
    return b[a].apply(null, arguments);
  };
}
var Hb;
Hb = "godot.web.editor.wasm32.wasm";
Gb() || (Hb = Ja(Hb));
function Ib() {
  var a = Hb;
  try {
    if (a == Hb && Sa) {
      return new Uint8Array(Sa);
    }
    if (La) {
      return La(a);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (b) {
    za(b);
  }
}
function Jb() {
  return Sa || !Ea && !Fa || "function" != typeof fetch ? Promise.resolve().then(function() {
    return Ib();
  }) : fetch(Hb, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + Hb + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return Ib();
  });
}
var F, G, Kb = {};
function Na(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
function Lb(a) {
  y(!w, "Internal Error! cleanupThread() can only ever be called from main application thread!");
  y(a, "Internal Error! Null pthread_ptr in cleanupThread!");
  a = H.J[a];
  y(a);
  H.Lb(a);
}
function Mb(a) {
  y(!w, "Internal Error! spawnThread() can only ever be called from main application thread!");
  y(a.B, "Internal error, no pthread ptr!");
  var b = H.nc();
  if (!b) {
    return 6;
  }
  y(!b.B, "Internal error!");
  H.ia.push(b);
  H.J[a.B] = b;
  b.B = a.B;
  var c = {cmd:"run", start_routine:a.Tc, arg:a.nb, pthread_ptr:a.B};
  b.ua = () => {
    c.time = performance.now();
    b.postMessage(c, a.ad);
  };
  b.loaded && (b.ua(), delete b.ua);
  return 0;
}
var Nb = (a, b) => {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}, Ob = a => {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = Nb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}, Pb = a => {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}, Qb = a => {
  if ("/" === a) {
    return "/";
  }
  a = Ob(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
};
function Rb() {
  if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
    var a = new Uint8Array(1);
    return () => {
      crypto.getRandomValues(a);
      return a[0];
    };
  }
  return () => za("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
}
function Sb() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : Tb;
    if ("string" != typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = Nb(a.split("/").filter(d => !!d), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
var Ub = (a, b) => {
  function c(g) {
    for (var k = 0; k < g.length && "" === g[k]; k++) {
    }
    for (var l = g.length - 1; 0 <= l && "" === g[l]; l--) {
    }
    return k > l ? [] : g.slice(k, l - k + 1);
  }
  a = Sb(a).substr(1);
  b = Sb(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++) {
    if (a[f] !== b[f]) {
      e = f;
      break;
    }
  }
  d = [];
  for (f = e; f < a.length; f++) {
    d.push("..");
  }
  d = d.concat(b.slice(e));
  return d.join("/");
};
function Vb(a, b) {
  var c = Array(ab(a) + 1);
  a = Za(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
var Wb = [];
function Xb(a, b) {
  Wb[a] = {input:[], A:[], fa:b};
  Yb(a, Zb);
}
var Zb = {open:function(a) {
  var b = Wb[a.node.ra];
  if (!b) {
    throw new I(43);
  }
  a.o = b;
  a.seekable = !1;
}, close:function(a) {
  a.o.fa.flush(a.o);
}, flush:function(a) {
  a.o.fa.flush(a.o);
}, read:function(a, b, c, d) {
  if (!a.o || !a.o.fa.xb) {
    throw new I(60);
  }
  for (var e = 0, f = 0; f < d; f++) {
    try {
      var g = a.o.fa.xb(a.o);
    } catch (k) {
      throw new I(29);
    }
    if (void 0 === g && 0 === e) {
      throw new I(6);
    }
    if (null === g || void 0 === g) {
      break;
    }
    e++;
    b[c + f] = g;
  }
  e && (a.node.timestamp = Date.now());
  return e;
}, write:function(a, b, c, d) {
  if (!a.o || !a.o.fa.bb) {
    throw new I(60);
  }
  try {
    for (var e = 0; e < d; e++) {
      a.o.fa.bb(a.o, b[c + e]);
    }
  } catch (f) {
    throw new I(29);
  }
  d && (a.node.timestamp = Date.now());
  return e;
}}, $b = {xb:function(a) {
  if (!a.input.length) {
    var b = null;
    "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    if (!b) {
      return null;
    }
    a.input = Vb(b, !0);
  }
  return a.input.shift();
}, bb:function(a, b) {
  null === b || 10 === b ? (Oa(Xa(a.A, 0)), a.A = []) : 0 != b && a.A.push(b);
}, flush:function(a) {
  a.A && 0 < a.A.length && (Oa(Xa(a.A, 0)), a.A = []);
}}, ac = {bb:function(a, b) {
  null === b || 10 === b ? (z(Xa(a.A, 0)), a.A = []) : 0 != b && a.A.push(b);
}, flush:function(a) {
  a.A && 0 < a.A.length && (z(Xa(a.A, 0)), a.A = []);
}}, J = {L:null, u:function() {
  return J.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new I(63);
  }
  J.L || (J.L = {dir:{node:{K:J.h.K, D:J.h.D, na:J.h.na, Fa:J.h.Fa, Ja:J.h.Ja, Ra:J.h.Ra, La:J.h.La, Ia:J.h.Ia, Ma:J.h.Ma}, stream:{Z:J.j.Z}}, file:{node:{K:J.h.K, D:J.h.D}, stream:{Z:J.j.Z, read:J.j.read, write:J.j.write, lb:J.j.lb, Cb:J.j.Cb, Db:J.j.Db}}, link:{node:{K:J.h.K, D:J.h.D, ta:J.h.ta}, stream:{}}, qb:{node:{K:J.h.K, D:J.h.D}, stream:bc}});
  c = cc(a, b, c, d);
  16384 === (c.mode & 61440) ? (c.h = J.L.dir.node, c.j = J.L.dir.stream, c.l = {}) : 32768 === (c.mode & 61440) ? (c.h = J.L.file.node, c.j = J.L.file.stream, c.s = 0, c.l = null) : 40960 === (c.mode & 61440) ? (c.h = J.L.link.node, c.j = J.L.link.stream) : 8192 === (c.mode & 61440) && (c.h = J.L.qb.node, c.j = J.L.qb.stream);
  c.timestamp = Date.now();
  a && (a.l[b] = c, a.timestamp = c.timestamp);
  return c;
}, lc:function(a) {
  return a.l ? a.l.subarray ? a.l.subarray(0, a.s) : new Uint8Array(a.l) : new Uint8Array(0);
}, vb:function(a, b) {
  var c = a.l ? a.l.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.l, a.l = new Uint8Array(b), 0 < a.s && a.l.set(c.subarray(0, a.s), 0));
}, Qc:function(a, b) {
  if (a.s != b) {
    if (0 == b) {
      a.l = null, a.s = 0;
    } else {
      var c = a.l;
      a.l = new Uint8Array(b);
      c && a.l.set(c.subarray(0, Math.min(b, a.s)));
      a.s = b;
    }
  }
}, h:{K:function(a) {
  var b = {};
  b.fc = 8192 === (a.mode & 61440) ? a.id : 1;
  b.Za = a.id;
  b.mode = a.mode;
  b.Fc = 1;
  b.uid = 0;
  b.tc = 0;
  b.ra = a.ra;
  16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.s : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.ob = new Date(a.timestamp);
  b.pa = new Date(a.timestamp);
  b.sb = new Date(a.timestamp);
  b.Yb = 4096;
  b.Zb = Math.ceil(b.size / b.Yb);
  return b;
}, D:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && J.Qc(a, b.size);
}, na:function() {
  throw dc[44];
}, Fa:function(a, b, c, d) {
  return J.createNode(a, b, c, d);
}, Ja:function(a, b, c) {
  if (16384 === (a.mode & 61440)) {
    try {
      var d = ec(b, c);
    } catch (f) {
    }
    if (d) {
      for (var e in d.l) {
        throw new I(55);
      }
    }
  }
  delete a.parent.l[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.l[c] = a;
  b.timestamp = a.parent.timestamp;
  a.parent = b;
}, Ra:function(a, b) {
  delete a.l[b];
  a.timestamp = Date.now();
}, La:function(a, b) {
  var c = ec(a, b), d;
  for (d in c.l) {
    throw new I(55);
  }
  delete a.l[b];
  a.timestamp = Date.now();
}, Ia:function(a) {
  var b = [".", ".."], c;
  for (c in a.l) {
    a.l.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, Ma:function(a, b, c) {
  a = J.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, ta:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new I(28);
  }
  return a.link;
}}, j:{read:function(a, b, c, d, e) {
  var f = a.node.l;
  if (e >= a.node.s) {
    return 0;
  }
  a = Math.min(a.node.s - e, d);
  y(0 <= a);
  if (8 < a && f.subarray) {
    b.set(f.subarray(e, e + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = f[e + d];
    }
  }
  return a;
}, write:function(a, b, c, d, e, f) {
  y(!(b instanceof ArrayBuffer));
  b.buffer === h().buffer && (f = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.l || a.l.subarray)) {
    if (f) {
      return y(0 === e, "canOwn must imply no weird position inside the file"), a.l = b.subarray(c, c + d), a.s = d;
    }
    if (0 === a.s && 0 === e) {
      return a.l = b.slice(c, c + d), a.s = d;
    }
    if (e + d <= a.s) {
      return a.l.set(b.subarray(c, c + d), e), d;
    }
  }
  J.vb(a, e + d);
  if (a.l.subarray && b.subarray) {
    a.l.set(b.subarray(c, c + d), e);
  } else {
    for (f = 0; f < d; f++) {
      a.l[e + f] = b[c + f];
    }
  }
  a.s = Math.max(a.s, e + d);
  return d;
}, Z:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.s);
  if (0 > b) {
    throw new I(28);
  }
  return b;
}, lb:function(a, b, c) {
  J.vb(a.node, b + c);
  a.node.s = Math.max(a.node.s, b + c);
}, Cb:function(a, b, c, d, e) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new I(43);
  }
  a = a.node.l;
  if (e & 2 || a.buffer !== fa) {
    if (0 < c || c + b < a.length) {
      a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
    }
    c = !0;
    y(65536, "alignment argument is required");
    e = 65536 * Math.ceil(b / 65536);
    (b = fc(65536, e)) ? ka().fill(0, b, b + e) : b = 0;
    if (!b) {
      throw new I(48);
    }
    h().set(a, b);
  } else {
    c = !1, b = a.byteOffset;
  }
  return {aa:b, fd:c};
}, Db:function(a, b, c, d, e) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new I(43);
  }
  if (e & 2) {
    return 0;
  }
  J.j.write(a, b, 0, d, c, !1);
  return 0;
}}}, K = {W:{}, indexedDB:() => {
  if ("undefined" != typeof indexedDB) {
    return indexedDB;
  }
  var a = null;
  "object" == typeof window && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
  y(a, "IDBFS used, but indexedDB not supported");
  return a;
}, Tb:21, V:"FILE_DATA", u:function(a) {
  return J.u.apply(null, arguments);
}, Ob:(a, b, c) => {
  K.mc(a, (d, e) => {
    if (d) {
      return c(d);
    }
    K.oc(a, (f, g) => {
      if (f) {
        return c(f);
      }
      K.Mc(b ? g : e, b ? e : g, c);
    });
  });
}, Jc:() => {
  Object.values(K.W).forEach(a => a.close());
  K.W = {};
}, kc:(a, b) => {
  var c = K.W[a];
  if (c) {
    return b(null, c);
  }
  try {
    var d = K.indexedDB().open(a, K.Tb);
  } catch (e) {
    return b(e);
  }
  if (!d) {
    return b("Unable to connect to IndexedDB");
  }
  d.onupgradeneeded = e => {
    var f = e.target.result;
    e = e.target.transaction;
    var g;
    f.objectStoreNames.contains(K.V) ? g = e.objectStore(K.V) : g = f.createObjectStore(K.V);
    g.indexNames.contains("timestamp") || g.createIndex("timestamp", "timestamp", {unique:!1});
  };
  d.onsuccess = () => {
    c = d.result;
    K.W[a] = c;
    b(null, c);
  };
  d.onerror = e => {
    b(this.error);
    e.preventDefault();
  };
}, mc:(a, b) => {
  function c(k) {
    return "." !== k && ".." !== k;
  }
  function d(k) {
    return l => Ob(k + "/" + l);
  }
  var e = {};
  for (a = gc(a.oa).filter(c).map(d(a.oa)); a.length;) {
    var f = a.pop();
    try {
      var g = hc(f);
    } catch (k) {
      return b(k);
    }
    16384 === (g.mode & 61440) && a.push.apply(a, gc(f).filter(c).map(d(f)));
    e[f] = {timestamp:g.pa};
  }
  return b(null, {type:"local", entries:e});
}, oc:(a, b) => {
  var c = {};
  K.kc(a.oa, (d, e) => {
    if (d) {
      return b(d);
    }
    try {
      var f = e.transaction([K.V], "readonly");
      f.onerror = g => {
        b(this.error);
        g.preventDefault();
      };
      f.objectStore(K.V).index("timestamp").openKeyCursor().onsuccess = g => {
        g = g.target.result;
        if (!g) {
          return b(null, {type:"remote", db:e, entries:c});
        }
        c[g.primaryKey] = {timestamp:g.key};
        g.continue();
      };
    } catch (g) {
      return b(g);
    }
  });
}, Cc:(a, b) => {
  try {
    var c = ic(a).node;
    var d = hc(a);
  } catch (e) {
    return b(e);
  }
  return 16384 === (d.mode & 61440) ? b(null, {timestamp:d.pa, mode:d.mode}) : 32768 === (d.mode & 61440) ? (c.l = J.lc(c), b(null, {timestamp:d.pa, mode:d.mode, contents:c.l})) : b(Error("node type not supported"));
}, Uc:(a, b, c) => {
  try {
    if (16384 === (b.mode & 61440)) {
      jc(a, b.mode);
    } else if (32768 === (b.mode & 61440)) {
      kc(a, b.contents, {pb:!0});
    } else {
      return c(Error("node type not supported"));
    }
    lc(a, b.mode);
    var d = b.timestamp, e = b.timestamp, f = ic(a, {U:!0}).node;
    f.h.D(f, {timestamp:Math.max(d, e)});
  } catch (g) {
    return c(g);
  }
  c(null);
}, Oc:(a, b) => {
  try {
    var c = hc(a);
    16384 === (c.mode & 61440) ? mc(a) : 32768 === (c.mode & 61440) && nc(a);
  } catch (d) {
    return b(d);
  }
  b(null);
}, Dc:(a, b, c) => {
  a = a.get(b);
  a.onsuccess = d => {
    c(null, d.target.result);
  };
  a.onerror = d => {
    c(this.error);
    d.preventDefault();
  };
}, Vc:(a, b, c, d) => {
  try {
    var e = a.put(c, b);
  } catch (f) {
    d(f);
    return;
  }
  e.onsuccess = () => {
    d(null);
  };
  e.onerror = f => {
    d(this.error);
    f.preventDefault();
  };
}, Pc:(a, b, c) => {
  a = a.delete(b);
  a.onsuccess = () => {
    c(null);
  };
  a.onerror = d => {
    c(this.error);
    d.preventDefault();
  };
}, Mc:(a, b, c) => {
  function d(u) {
    if (u && !k) {
      return k = !0, c(u);
    }
  }
  var e = 0, f = [];
  Object.keys(a.entries).forEach(function(u) {
    var A = a.entries[u], D = b.entries[u];
    D && A.timestamp.getTime() == D.timestamp.getTime() || (f.push(u), e++);
  });
  var g = [];
  Object.keys(b.entries).forEach(function(u) {
    a.entries[u] || (g.push(u), e++);
  });
  if (!e) {
    return c(null);
  }
  var k = !1, l = ("remote" === a.type ? a.db : b.db).transaction([K.V], "readwrite"), p = l.objectStore(K.V);
  l.onerror = u => {
    d(this.error);
    u.preventDefault();
  };
  l.oncomplete = () => {
    k || c(null);
  };
  f.sort().forEach(u => {
    "local" === b.type ? K.Dc(p, u, (A, D) => {
      if (A) {
        return d(A);
      }
      K.Uc(u, D, d);
    }) : K.Cc(u, (A, D) => {
      if (A) {
        return d(A);
      }
      K.Vc(p, u, D, d);
    });
  });
  g.sort().reverse().forEach(u => {
    "local" === b.type ? K.Oc(u, d) : K.Pc(p, u, d);
  });
}}, oc = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized"}, pc = {}, qc = null, rc = {}, sc = [], tc = 1, uc = null, Tb = "/", wb = !0, I = null, dc = {}, vc = 0, ic = (a, b = {}) => {
  a = Sb(Tb, a);
  if (!a) {
    return {path:"", node:null};
  }
  b = Object.assign({Xa:!0, eb:0}, b);
  if (8 < b.eb) {
    throw new I(32);
  }
  a = Nb(a.split("/").filter(g => !!g), !1);
  for (var c = qc, d = "/", e = 0; e < a.length; e++) {
    var f = e === a.length - 1;
    if (f && b.parent) {
      break;
    }
    c = ec(c, a[e]);
    d = Ob(d + "/" + a[e]);
    c.I && (!f || f && b.Xa) && (c = c.I.root);
    if (!f || b.U) {
      for (f = 0; 40960 === (c.mode & 61440);) {
        if (c = wc(d), d = Sb(Pb(d), c), c = ic(d, {eb:b.eb + 1}).node, 40 < f++) {
          throw new I(32);
        }
      }
    }
  }
  return {path:d, node:c};
}, xc = a => {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.u.oa, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}, yc = (a, b) => {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % uc.length;
}, zc = a => {
  var b = yc(a.parent.id, a.name);
  a.$ = uc[b];
  uc[b] = a;
}, Ac = a => {
  var b = yc(a.parent.id, a.name);
  if (uc[b] === a) {
    uc[b] = a.$;
  } else {
    for (b = uc[b]; b;) {
      if (b.$ === a) {
        b.$ = a.$;
        break;
      }
      b = b.$;
    }
  }
}, ec = (a, b) => {
  var c;
  if (c = (c = Bc(a, "x")) ? c : a.h.na ? 0 : 2) {
    throw new I(c, a);
  }
  for (c = uc[yc(a.id, b)]; c; c = c.$) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.h.na(a, b);
}, cc = (a, b, c, d) => {
  y("object" == typeof a);
  a = new Cc(a, b, c, d);
  zc(a);
  return a;
}, Dc = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090}, Ec = a => {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}, Bc = (a, b) => {
  if (wb) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}, Fc = (a, b) => {
  try {
    return ec(a, b), 20;
  } catch (c) {
  }
  return Bc(a, "wx");
}, Gc = (a, b, c) => {
  try {
    var d = ec(a, b);
  } catch (e) {
    return e.g;
  }
  if (a = Bc(a, "wx")) {
    return a;
  }
  if (c) {
    if (16384 !== (d.mode & 61440)) {
      return 54;
    }
    if (d === d.parent || xc(d) === Tb) {
      return 10;
    }
  } else {
    if (16384 === (d.mode & 61440)) {
      return 31;
    }
  }
  return 0;
}, Hc = (a = 0) => {
  for (; 4096 >= a; a++) {
    if (!sc[a]) {
      return a;
    }
  }
  throw new I(33);
}, Jc = (a, b) => {
  Ic || (Ic = function() {
    this.T = {};
  }, Ic.prototype = {}, Object.defineProperties(Ic.prototype, {object:{get:function() {
    return this.node;
  }, set:function(c) {
    this.node = c;
  }}, flags:{get:function() {
    return this.T.flags;
  }, set:function(c) {
    this.T.flags = c;
  }}, position:{get:function() {
    return this.T.position;
  }, set:function(c) {
    this.T.position = c;
  }}}));
  a = Object.assign(new Ic(), a);
  b = Hc(b);
  a.m = b;
  return sc[b] = a;
}, bc = {open:a => {
  a.j = rc[a.node.ra].j;
  a.j.open && a.j.open(a);
}, Z:() => {
  throw new I(70);
}}, Yb = (a, b) => {
  rc[a] = {j:b};
}, Kc = a => {
  var b = [];
  for (a = [a]; a.length;) {
    var c = a.pop();
    b.push(c);
    a.push.apply(a, c.Ga);
  }
  return b;
}, Lc = (a, b) => {
  function c(g) {
    y(0 < vc);
    vc--;
    return b(g);
  }
  function d(g) {
    if (g) {
      if (!d.ic) {
        return d.ic = !0, c(g);
      }
    } else {
      ++f >= e.length && c(null);
    }
  }
  "function" == typeof a && (b = a, a = !1);
  vc++;
  1 < vc && z("warning: " + vc + " FS.syncfs operations in flight at once, probably just doing extra work");
  var e = Kc(qc.u), f = 0;
  e.forEach(g => {
    if (!g.type.Ob) {
      return d(null);
    }
    g.type.Ob(g, a, d);
  });
}, yb = (a, b) => {
  if ("string" == typeof a) {
    throw a;
  }
  var c = "/" === b, d = !b;
  if (c && qc) {
    throw new I(10);
  }
  if (!c && !d) {
    var e = ic(b, {Xa:!1});
    b = e.path;
    e = e.node;
    if (e.I) {
      throw new I(10);
    }
    if (16384 !== (e.mode & 61440)) {
      throw new I(54);
    }
  }
  b = {type:a, Ad:{}, oa:b, Ga:[]};
  a = a.u(b);
  a.u = b;
  b.root = a;
  c ? qc = a : e && (e.I = b, e.u && e.u.Ga.push(b));
  return a;
}, Mc = a => {
  a = ic(a, {Xa:!1});
  if (!a.node.I) {
    throw new I(28);
  }
  a = a.node;
  var b = a.I, c = Kc(b);
  Object.keys(uc).forEach(d => {
    for (d = uc[d]; d;) {
      var e = d.$;
      c.includes(d.u) && Ac(d);
      d = e;
    }
  });
  a.I = null;
  b = a.u.Ga.indexOf(b);
  y(-1 !== b);
  a.u.Ga.splice(b, 1);
}, Nc = (a, b, c) => {
  var d = ic(a, {parent:!0}).node;
  a = Qb(a);
  if (!a || "." === a || ".." === a) {
    throw new I(28);
  }
  var e = Fc(d, a);
  if (e) {
    throw new I(e);
  }
  if (!d.h.Fa) {
    throw new I(63);
  }
  return d.h.Fa(d, a, b, c);
}, Oc = (a, b) => Nc(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0), jc = (a, b) => {
  a = a.split("/");
  for (var c = "", d = 0; d < a.length; ++d) {
    if (a[d]) {
      c += "/" + a[d];
      try {
        Oc(c, b);
      } catch (e) {
        if (20 != e.g) {
          throw e;
        }
      }
    }
  }
}, Pc = (a, b, c) => {
  "undefined" == typeof c && (c = b, b = 438);
  Nc(a, b | 8192, c);
}, ub = (a, b) => {
  if (!Sb(a)) {
    throw new I(44);
  }
  var c = ic(b, {parent:!0}).node;
  if (!c) {
    throw new I(44);
  }
  b = Qb(b);
  var d = Fc(c, b);
  if (d) {
    throw new I(d);
  }
  if (!c.h.Ma) {
    throw new I(63);
  }
  c.h.Ma(c, b, a);
}, mc = a => {
  var b = ic(a, {parent:!0}).node;
  a = Qb(a);
  var c = ec(b, a), d = Gc(b, a, !0);
  if (d) {
    throw new I(d);
  }
  if (!b.h.La) {
    throw new I(63);
  }
  if (c.I) {
    throw new I(10);
  }
  b.h.La(b, a);
  Ac(c);
}, gc = a => {
  a = ic(a, {U:!0}).node;
  if (!a.h.Ia) {
    throw new I(54);
  }
  return a.h.Ia(a);
}, nc = a => {
  var b = ic(a, {parent:!0}).node;
  if (!b) {
    throw new I(44);
  }
  a = Qb(a);
  var c = ec(b, a), d = Gc(b, a, !1);
  if (d) {
    throw new I(d);
  }
  if (!b.h.Ra) {
    throw new I(63);
  }
  if (c.I) {
    throw new I(10);
  }
  b.h.Ra(b, a);
  Ac(c);
}, wc = a => {
  a = ic(a).node;
  if (!a) {
    throw new I(44);
  }
  if (!a.h.ta) {
    throw new I(28);
  }
  return Sb(xc(a.parent), a.h.ta(a));
}, hc = (a, b) => {
  a = ic(a, {U:!b}).node;
  if (!a) {
    throw new I(44);
  }
  if (!a.h.K) {
    throw new I(63);
  }
  return a.h.K(a);
}, Qc = a => hc(a, !0), lc = (a, b) => {
  a = "string" == typeof a ? ic(a, {U:!0}).node : a;
  if (!a.h.D) {
    throw new I(63);
  }
  a.h.D(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}, vb = (a, b, c) => {
  if ("" === a) {
    throw new I(44);
  }
  if ("string" == typeof b) {
    var d = Dc[b];
    if ("undefined" == typeof d) {
      throw Error("Unknown file open mode: " + b);
    }
    b = d;
  }
  c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" == typeof a) {
    var e = a;
  } else {
    a = Ob(a);
    try {
      e = ic(a, {U:!(b & 131072)}).node;
    } catch (f) {
    }
  }
  d = !1;
  if (b & 64) {
    if (e) {
      if (b & 128) {
        throw new I(20);
      }
    } else {
      e = Nc(a, c, 0), d = !0;
    }
  }
  if (!e) {
    throw new I(44);
  }
  8192 === (e.mode & 61440) && (b &= -513);
  if (b & 65536 && 16384 !== (e.mode & 61440)) {
    throw new I(54);
  }
  if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Ec(b) || b & 512) ? 31 : Bc(e, Ec(b)) : 44)) {
    throw new I(c);
  }
  if (b & 512 && !d) {
    c = e;
    c = "string" == typeof c ? ic(c, {U:!0}).node : c;
    if (!c.h.D) {
      throw new I(63);
    }
    if (16384 === (c.mode & 61440)) {
      throw new I(31);
    }
    if (32768 !== (c.mode & 61440)) {
      throw new I(28);
    }
    if (d = Bc(c, "w")) {
      throw new I(d);
    }
    c.h.D(c, {size:0, timestamp:Date.now()});
  }
  b &= -131713;
  e = Jc({node:e, path:xc(e), flags:b, seekable:!0, position:0, j:e.j, bd:[], error:!1});
  e.j.open && e.j.open(e);
  !v.logReadFiles || b & 1 || (Rc || (Rc = {}), a in Rc || (Rc[a] = 1));
  return e;
}, Sc = a => {
  if (null === a.m) {
    throw new I(8);
  }
  a.X && (a.X = null);
  try {
    a.j.close && a.j.close(a);
  } catch (b) {
    throw b;
  } finally {
    sc[a.m] = null;
  }
  a.m = null;
}, Tc = (a, b, c) => {
  if (null === a.m) {
    throw new I(8);
  }
  if (!a.seekable || !a.j.Z) {
    throw new I(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new I(28);
  }
  a.position = a.j.Z(a, b, c);
  a.bd = [];
  return a.position;
}, Uc = (a, b, c, d, e, f) => {
  if (0 > d || 0 > e) {
    throw new I(28);
  }
  if (null === a.m) {
    throw new I(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new I(8);
  }
  if (16384 === (a.node.mode & 61440)) {
    throw new I(31);
  }
  if (!a.j.write) {
    throw new I(28);
  }
  a.seekable && a.flags & 1024 && Tc(a, 0, 2);
  var g = "undefined" != typeof e;
  if (!g) {
    e = a.position;
  } else if (!a.seekable) {
    throw new I(70);
  }
  b = a.j.write(a, b, c, d, e, f);
  g || (a.position += b);
  return b;
}, kc = (a, b, c = {}) => {
  c.flags = c.flags || 577;
  a = vb(a, c.flags, c.mode);
  if ("string" == typeof b) {
    var d = new Uint8Array(ab(b) + 1);
    b = Za(b, d, 0, d.length);
    Uc(a, d, 0, b, void 0, c.pb);
  } else if (ArrayBuffer.isView(b)) {
    Uc(a, b, 0, b.byteLength, void 0, c.pb);
  } else {
    throw Error("Unsupported data type");
  }
  Sc(a);
}, sb = () => {
  I || (I = function(a, b) {
    this.node = b;
    this.Rc = function(c) {
      this.g = c;
      for (var d in pc) {
        if (pc[d] === c) {
          this.code = d;
          break;
        }
      }
    };
    this.Rc(a);
    this.message = oc[a];
    this.stack && (Object.defineProperty(this, "stack", {value:Error().stack, writable:!0}), this.stack = Vc(this.stack));
  }, I.prototype = Error(), I.prototype.constructor = I, [44].forEach(a => {
    dc[a] = new I(a);
    dc[a].stack = "<generic error, no stack>";
  }));
}, rb, Wc = (a, b) => {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}, tb = (a, b, c) => {
  a = Ob("/dev/" + a);
  var d = Wc(!!b, !!c);
  Xc || (Xc = 64);
  var e = Xc++ << 8 | 0;
  Yb(e, {open:f => {
    f.seekable = !1;
  }, close:() => {
    c && c.buffer && c.buffer.length && c(10);
  }, read:(f, g, k, l) => {
    for (var p = 0, u = 0; u < l; u++) {
      try {
        var A = b();
      } catch (D) {
        throw new I(29);
      }
      if (void 0 === A && 0 === p) {
        throw new I(6);
      }
      if (null === A || void 0 === A) {
        break;
      }
      p++;
      g[k + u] = A;
    }
    p && (f.node.timestamp = Date.now());
    return p;
  }, write:(f, g, k, l) => {
    for (var p = 0; p < l; p++) {
      try {
        c(g[k + p]);
      } catch (u) {
        throw new I(29);
      }
    }
    l && (f.node.timestamp = Date.now());
    return p;
  }});
  Pc(a, d, e);
}, Xc, L = {}, Ic, Rc;
function Yc(a, b, c) {
  if ("/" === b.charAt(0)) {
    return b;
  }
  if (-100 === a) {
    a = Tb;
  } else {
    a = sc[a];
    if (!a) {
      throw new I(8);
    }
    a = a.path;
  }
  if (0 == b.length) {
    if (!c) {
      throw new I(44);
    }
    return a;
  }
  return Ob(a + "/" + b);
}
function Zc(a, b, c) {
  try {
    var d = a(b);
  } catch (e) {
    if (e && e.node && Ob(b) !== Ob(xc(e.node))) {
      return -54;
    }
    throw e;
  }
  n()[c >> 2] = d.fc;
  n()[c + 8 >> 2] = d.Za;
  n()[c + 12 >> 2] = d.mode;
  n()[c + 16 >> 2] = d.Fc;
  n()[c + 20 >> 2] = d.uid;
  n()[c + 24 >> 2] = d.tc;
  n()[c + 28 >> 2] = d.ra;
  G = [d.size >>> 0, (F = d.size, 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
  n()[c + 40 >> 2] = G[0];
  n()[c + 44 >> 2] = G[1];
  n()[c + 48 >> 2] = 4096;
  n()[c + 52 >> 2] = d.Zb;
  G = [Math.floor(d.ob.getTime() / 1e3) >>> 0, (F = Math.floor(d.ob.getTime() / 1e3), 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
  n()[c + 56 >> 2] = G[0];
  n()[c + 60 >> 2] = G[1];
  n()[c + 64 >> 2] = 0;
  G = [Math.floor(d.pa.getTime() / 1e3) >>> 0, (F = Math.floor(d.pa.getTime() / 1e3), 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
  n()[c + 72 >> 2] = G[0];
  n()[c + 76 >> 2] = G[1];
  n()[c + 80 >> 2] = 0;
  G = [Math.floor(d.sb.getTime() / 1e3) >>> 0, (F = Math.floor(d.sb.getTime() / 1e3), 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
  n()[c + 88 >> 2] = G[0];
  n()[c + 92 >> 2] = G[1];
  n()[c + 96 >> 2] = 0;
  G = [d.Za >>> 0, (F = d.Za, 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
  n()[c + 104 >> 2] = G[0];
  n()[c + 108 >> 2] = G[1];
  return 0;
}
var $c = void 0;
function ad() {
  y(void 0 != $c);
  $c += 4;
  return n()[$c - 4 >> 2];
}
function bd(a) {
  a = sc[a];
  if (!a) {
    throw new I(8);
  }
  return a;
}
function cd(a) {
  if (w) {
    return M(1, 1, a);
  }
  Va = a;
  if (!pb()) {
    H.Pb();
    if (v.onExit) {
      v.onExit(a);
    }
    Ua = !0;
  }
  Da(a, new Na(a));
}
function dd(a, b) {
  Va = a;
  if (!b && w) {
    throw ed(a), "unwind";
  }
  if (!pb() && (fb(), !w)) {
    fd();
    zb(lb);
    rb = !1;
    gd(0);
    for (var c = 0; c < sc.length; c++) {
      var d = sc[c];
      d && Sc(d);
    }
    K.Jc();
    H.Pb();
    ob = !0;
  }
  pb() && !b && (b = "program exited (with status: " + a + "), but keepRuntimeAlive() is set (counter=" + Ma + ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)", xa(b), z(b));
  cd(a);
}
function hd(a) {
  if (a instanceof Na || "unwind" == a) {
    return Va;
  }
  Da(1, a);
}
var H = {O:[], ia:[], Na:[], J:{}, Ya:function() {
  w ? H.zc() : H.yc();
}, yc:function() {
  for (var a = 0; 8 > a; ++a) {
    H.mb();
  }
}, zc:function() {
  H.receiveObjectTransfer = H.Lc;
  H.threadInitTLS = H.Qb;
  H.setExitStatus = H.Nb;
  noExitRuntime = !1;
}, Nb:function(a) {
  Va = a;
}, Pb:function() {
  y(!w, "Internal Error! terminateAllThreads() can only ever be called from main application thread!");
  for (var a in H.J) {
    var b = H.J[a];
    b && H.Lb(b);
  }
  y(0 === Object.keys(H.J).length);
  y(0 === H.ia.length);
  for (a = 0; a < H.O.length; ++a) {
    b = H.O[a], y(!b.B), b.terminate();
  }
  H.O = [];
}, Lb:function(a) {
  var b = a.B;
  delete H.J[b];
  H.O.push(a);
  H.ia.splice(H.ia.indexOf(a), 1);
  a.B = 0;
  jd(b);
}, Lc:function() {
}, Qb:function() {
  for (var a in H.Na) {
    if (H.Na.hasOwnProperty(a)) {
      H.Na[a]();
    }
  }
}, Bb:function(a, b) {
  a.onmessage = c => {
    c = c.data;
    var d = c.cmd;
    a.B && (H.ec = a.B);
    if (c.targetThread && c.targetThread != kd()) {
      var e = H.J[c.Hd];
      e ? e.postMessage(c, c.transferList) : z('Internal error! Worker sent a message "' + d + '" to target pthread ' + c.targetThread + ", but that thread no longer exists!");
    } else {
      if ("processProxyingQueue" === d) {
        ld(c.queue);
      } else if ("spawnThread" === d) {
        Mb(c);
      } else if ("cleanupThread" === d) {
        Lb(c.thread);
      } else if ("killThread" === d) {
        c = c.thread, y(!w, "Internal Error! killThread() can only ever be called from main application thread!"), y(c, "Internal Error! Null pthread_ptr in killThread!"), d = H.J[c], delete H.J[c], d.terminate(), jd(c), H.ia.splice(H.ia.indexOf(d), 1), d.B = 0;
      } else if ("cancelThread" === d) {
        c = c.thread, y(!w, "Internal Error! cancelThread() can only ever be called from main application thread!"), y(c, "Internal Error! Null pthread_ptr in cancelThread!"), H.J[c].postMessage({cmd:"cancel"});
      } else if ("loaded" === d) {
        a.loaded = !0, b && b(a), a.ua && (a.ua(), delete a.ua);
      } else if ("print" === d) {
        Oa("Thread " + c.threadId + ": " + c.text);
      } else if ("printErr" === d) {
        z("Thread " + c.threadId + ": " + c.text);
      } else if ("alert" === d) {
        alert("Thread " + c.threadId + ": " + c.text);
      } else if ("setimmediate" === c.target) {
        a.postMessage(c);
      } else if ("onAbort" === d) {
        if (v.onAbort) {
          v.onAbort(c.arg);
        }
      } else {
        d && z("worker sent an unknown command " + d);
      }
    }
    H.ec = void 0;
  };
  a.onerror = c => {
    var d = "worker sent an error!";
    a.B && (d = "Pthread 0x" + a.B.toString(16).padStart(8, "0") + " sent an error!");
    z(d + " " + c.filename + ":" + c.lineno + ": " + c.message);
    throw c;
  };
  y(m instanceof WebAssembly.Memory, "WebAssembly memory should have been loaded by now!");
  y(Ta instanceof WebAssembly.Module, "WebAssembly Module should have been loaded by now!");
  a.postMessage({cmd:"load", urlOrBlob:v.mainScriptUrlOrBlob || _scriptDir, wasmMemory:m, wasmModule:Ta});
}, mb:function() {
  var a = Ja("godot.web.editor.wasm32.worker.js");
  H.O.push(new Worker(a));
}, nc:function() {
  0 == H.O.length && (z("Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`."), H.mb(), H.Bb(H.O[0]));
  return H.O.pop();
}};
v.PThread = H;
function zb(a) {
  for (; 0 < a.length;) {
    a.shift()(v);
  }
}
function md(a) {
  var b = nd();
  a = a();
  od(b);
  return a;
}
function Vc(a) {
  return a.replace(/\b_Z[\w\d_]+/g, function(b) {
    Ya("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling");
    return b === b ? b : b + " [" + b + "]";
  });
}
v.establishStackSpace = function() {
  var a = kd(), b = n()[a + 44 >> 2];
  a = n()[a + 48 >> 2];
  a = b - a;
  y(0 != b);
  y(0 != a);
  y(b > a, "stackTop must be higher then stackMax");
  pd(b, a);
  od(b);
  db();
};
function ed(a) {
  if (w) {
    return M(2, 0, a);
  }
  try {
    dd(a);
  } catch (b) {
    hd(b);
  }
}
function qd(a, b = "i8") {
  b.endsWith("*") && (b = "*");
  switch(b) {
    case "i1":
      return h()[a >> 0];
    case "i8":
      return h()[a >> 0];
    case "i16":
      return na()[a >> 1];
    case "i32":
      return n()[a >> 2];
    case "i64":
      return n()[a >> 2];
    case "float":
      return t()[a >> 2];
    case "double":
      return ua()[a >> 3];
    case "*":
      return q()[a >> 2];
    default:
      za("invalid type for getValue: " + b);
  }
  return null;
}
var rd = [];
function sd(a) {
  var b = rd[a];
  b || (a >= rd.length && (rd.length = a + 1), rd[a] = b = cb.get(a));
  y(cb.get(a) == b, "JavaScript-side Wasm function table mirror is out of date!");
  return b;
}
v.invokeEntryPoint = function(a, b) {
  a = sd(a)(b);
  fb();
  pb() ? H.Nb(a) : td(a);
};
function N(a, b, c = "i8") {
  c.endsWith("*") && (c = "*");
  switch(c) {
    case "i1":
      h()[a >> 0] = b;
      break;
    case "i8":
      h()[a >> 0] = b;
      break;
    case "i16":
      na()[a >> 1] = b;
      break;
    case "i32":
      n()[a >> 2] = b;
      break;
    case "i64":
      G = [b >>> 0, (F = b, 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
      n()[a >> 2] = G[0];
      n()[a + 4 >> 2] = G[1];
      break;
    case "float":
      t()[a >> 2] = b;
      break;
    case "double":
      ua()[a >> 3] = b;
      break;
    case "*":
      q()[a >> 2] = b;
      break;
    default:
      za("invalid type for setValue: " + c);
  }
}
function ud(a, b) {
  y(0 <= a.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
  h().set(a, b);
}
function vd(a) {
  this.aa = a - 24;
  this.Ec = function(b) {
    q()[this.aa + 4 >> 2] = b;
  };
  this.zb = function(b) {
    q()[this.aa + 8 >> 2] = b;
  };
  this.Ac = function() {
    n()[this.aa >> 2] = 0;
  };
  this.yb = function() {
    var b = 0;
    h()[this.aa + 12 >> 0] = b;
  };
  this.Bc = function() {
    var b = 0;
    h()[this.aa + 13 >> 0] = b;
  };
  this.Ya = function(b, c) {
    this.T();
    this.Ec(b);
    this.zb(c);
    this.Ac();
    this.yb();
    this.Bc();
  };
  this.T = function() {
    q()[this.aa + 16 >> 2] = 0;
  };
}
var wd = 0;
function xd(a, b, c, d) {
  return w ? M(3, 1, a, b, c, d) : yd(a, b, c, d);
}
function yd(a, b, c, d) {
  if ("undefined" == typeof SharedArrayBuffer) {
    return z("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
  }
  var e = [];
  if (w && 0 === e.length) {
    return xd(a, b, c, d);
  }
  a = {Tc:c, B:a, nb:d, ad:e};
  return w ? (a.jd = "spawnThread", postMessage(a, e), 0) : Mb(a);
}
function zd(a, b, c, d, e) {
  if (w) {
    return M(4, 1, a, b, c, d, e);
  }
  try {
    y(64 >= a, "nfds must be less than or equal to 64");
    y(!d, "exceptfds not supported");
    e = 0;
    for (var f = b ? n()[b >> 2] : 0, g = b ? n()[b + 4 >> 2] : 0, k = c ? n()[c >> 2] : 0, l = c ? n()[c + 4 >> 2] : 0, p = d ? n()[d >> 2] : 0, u = d ? n()[d + 4 >> 2] : 0, A = 0, D = 0, r = 0, B = 0, x = 0, O = 0, ba = (b ? n()[b >> 2] : 0) | (c ? n()[c >> 2] : 0) | (d ? n()[d >> 2] : 0), ia = (b ? n()[b + 4 >> 2] : 0) | (c ? n()[c + 4 >> 2] : 0) | (d ? n()[d + 4 >> 2] : 0), la = 0; la < a; la++) {
      var W = 1 << la % 32;
      if (32 > la ? ba & W : ia & W) {
        var ya = sc[la];
        if (!ya) {
          throw new I(8);
        }
        var Ka = 5;
        ya.j.ga && (Ka = ya.j.ga(ya));
        Ka & 1 && (32 > la ? f & W : g & W) && (32 > la ? A |= W : D |= W, e++);
        Ka & 4 && (32 > la ? k & W : l & W) && (32 > la ? r |= W : B |= W, e++);
        Ka & 2 && (32 > la ? p & W : u & W) && (32 > la ? x |= W : O |= W, e++);
      }
    }
    b && (n()[b >> 2] = A, n()[b + 4 >> 2] = D);
    c && (n()[c >> 2] = r, n()[c + 4 >> 2] = B);
    d && (n()[d >> 2] = x, n()[d + 4 >> 2] = O);
    return e;
  } catch (Pd) {
    if ("undefined" == typeof L || !(Pd instanceof I)) {
      throw Pd;
    }
    return -Pd.g;
  }
}
var xb = {u:function() {
  v.websocket = v.websocket && "object" === typeof v.websocket ? v.websocket : {};
  v.websocket.Sa = {};
  v.websocket.on = function(a, b) {
    "function" === typeof b && (this.Sa[a] = b);
    return this;
  };
  v.websocket.ea = function(a, b) {
    "function" === typeof this.Sa[a] && this.Sa[a].call(this, b);
  };
  return cc(null, "/", 16895, 0);
}, cc:function(a, b, c) {
  b &= -526337;
  if (1 == b && c && 6 != c) {
    throw new I(66);
  }
  a = {family:a, type:b, protocol:c, M:null, error:null, qa:{}, pending:[], ha:[], F:xb.G};
  b = xb.Ha();
  c = cc(xb.root, b, 49152, 0);
  c.ja = a;
  b = Jc({path:b, node:c, flags:2, seekable:!1, j:xb.j});
  a.stream = b;
  return a;
}, pc:function(a) {
  return (a = sc[a]) && 49152 === (a.node.mode & 49152) ? a.node.ja : null;
}, j:{ga:function(a) {
  a = a.node.ja;
  return a.F.ga(a);
}, Ba:function(a, b, c) {
  a = a.node.ja;
  return a.F.Ba(a, b, c);
}, read:function(a, b, c, d) {
  a = a.node.ja;
  d = a.F.Jb(a, d);
  if (!d) {
    return 0;
  }
  b.set(d.buffer, c);
  return d.buffer.length;
}, write:function(a, b, c, d) {
  a = a.node.ja;
  return a.F.Mb(a, b, c, d);
}, close:function(a) {
  a = a.node.ja;
  a.F.close(a);
}}, Ha:function() {
  xb.Ha.current || (xb.Ha.current = 0);
  return "socket[" + xb.Ha.current++ + "]";
}, G:{rb:function(a, b, c) {
  if ("object" == typeof b) {
    var d = b;
    c = b = null;
  }
  if (d) {
    if (d.jb) {
      b = d.jb.Dd, c = d.jb.Ed;
    } else {
      c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url);
      if (!c) {
        throw Error("WebSocket URL must be in the format ws(s)://address:port");
      }
      b = c[1];
      c = parseInt(c[2], 10);
    }
  } else {
    try {
      var e = v.websocket && "object" === typeof v.websocket, f = "ws://";
      e && "string" === typeof v.websocket.url && (f = v.websocket.url);
      if ("ws://" === f || "wss://" === f) {
        var g = b.split("/");
        f = f + g[0] + ":" + c + "/" + g.slice(1).join("/");
      }
      g = "binary";
      e && "string" === typeof v.websocket.subprotocol && (g = v.websocket.subprotocol);
      var k = void 0;
      "null" !== g && (k = g = g.replace(/^ +| +$/g, "").split(/ *, */));
      e && null === v.websocket.subprotocol && (k = void 0);
      d = new WebSocket(f, k);
      d.binaryType = "arraybuffer";
    } catch (l) {
      throw new I(23);
    }
  }
  b = {v:b, port:c, i:d, za:[]};
  xb.G.kb(a, b);
  xb.G.vc(a, b);
  2 === a.type && "undefined" != typeof a.ka && b.za.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.ka & 65280) >> 8, a.ka & 255]));
  return b;
}, Aa:function(a, b, c) {
  return a.qa[b + ":" + c];
}, kb:function(a, b) {
  a.qa[b.v + ":" + b.port] = b;
}, Kb:function(a, b) {
  delete a.qa[b.v + ":" + b.port];
}, vc:function(a, b) {
  function c() {
    v.websocket.ea("open", a.stream.m);
    try {
      for (var f = b.za.shift(); f;) {
        b.i.send(f), f = b.za.shift();
      }
    } catch (g) {
      b.i.close();
    }
  }
  function d(f) {
    if ("string" == typeof f) {
      f = (new TextEncoder()).encode(f);
    } else {
      y(void 0 !== f.byteLength);
      if (0 == f.byteLength) {
        return;
      }
      f = new Uint8Array(f);
    }
    var g = e;
    e = !1;
    g && 10 === f.length && 255 === f[0] && 255 === f[1] && 255 === f[2] && 255 === f[3] && 112 === f[4] && 111 === f[5] && 114 === f[6] && 116 === f[7] ? (f = f[8] << 8 | f[9], xb.G.Kb(a, b), b.port = f, xb.G.kb(a, b)) : (a.ha.push({v:b.v, port:b.port, data:f}), v.websocket.ea("message", a.stream.m));
  }
  var e = !0;
  Ga ? (b.i.ab("open", c), b.i.ab("message", function(f, g) {
    g && d((new Uint8Array(f)).buffer);
  }), b.i.ab("close", function() {
    v.websocket.ea("close", a.stream.m);
  }), b.i.ab("error", function() {
    a.error = 14;
    v.websocket.ea("error", [a.stream.m, a.error, "ECONNREFUSED: Connection refused"]);
  })) : (b.i.onopen = c, b.i.onclose = function() {
    v.websocket.ea("close", a.stream.m);
  }, b.i.onmessage = function(f) {
    d(f.data);
  }, b.i.onerror = function() {
    a.error = 14;
    v.websocket.ea("error", [a.stream.m, a.error, "ECONNREFUSED: Connection refused"]);
  });
}, ga:function(a) {
  if (1 === a.type && a.M) {
    return a.pending.length ? 65 : 0;
  }
  var b = 0, c = 1 === a.type ? xb.G.Aa(a, a.R, a.S) : null;
  if (a.ha.length || !c || c && c.i.readyState === c.i.CLOSING || c && c.i.readyState === c.i.CLOSED) {
    b |= 65;
  }
  if (!c || c && c.i.readyState === c.i.OPEN) {
    b |= 4;
  }
  if (c && c.i.readyState === c.i.CLOSING || c && c.i.readyState === c.i.CLOSED) {
    b |= 16;
  }
  return b;
}, Ba:function(a, b, c) {
  switch(b) {
    case 21531:
      return b = 0, a.ha.length && (b = a.ha[0].data.length), n()[c >> 2] = b, 0;
    default:
      return 28;
  }
}, close:function(a) {
  if (a.M) {
    try {
      a.M.close();
    } catch (e) {
    }
    a.M = null;
  }
  for (var b = Object.keys(a.qa), c = 0; c < b.length; c++) {
    var d = a.qa[b[c]];
    try {
      d.i.close();
    } catch (e) {
    }
    xb.G.Kb(a, d);
  }
  return 0;
}, bind:function(a, b, c) {
  if ("undefined" != typeof a.gb || "undefined" != typeof a.ka) {
    throw new I(28);
  }
  a.gb = b;
  a.ka = c;
  if (2 === a.type) {
    a.M && (a.M.close(), a.M = null);
    try {
      a.F.Ab(a, 0);
    } catch (d) {
      if (!(d instanceof I)) {
        throw d;
      }
      if (138 !== d.g) {
        throw d;
      }
    }
  }
}, connect:function(a, b, c) {
  if (a.M) {
    throw new I(138);
  }
  if ("undefined" != typeof a.R && "undefined" != typeof a.S) {
    var d = xb.G.Aa(a, a.R, a.S);
    if (d) {
      if (d.i.readyState === d.i.CONNECTING) {
        throw new I(7);
      }
      throw new I(30);
    }
  }
  b = xb.G.rb(a, b, c);
  a.R = b.v;
  a.S = b.port;
  throw new I(26);
}, Ab:function() {
  if (!Ga) {
    throw new I(138);
  }
}, accept:function(a) {
  if (!a.M || !a.pending.length) {
    throw new I(28);
  }
  var b = a.pending.shift();
  b.stream.flags = a.stream.flags;
  return b;
}, ud:function(a, b) {
  if (b) {
    if (void 0 === a.R || void 0 === a.S) {
      throw new I(53);
    }
    b = a.R;
    a = a.S;
  } else {
    b = a.gb || 0, a = a.ka || 0;
  }
  return {v:b, port:a};
}, Mb:function(a, b, c, d, e, f) {
  if (2 === a.type) {
    if (void 0 === e || void 0 === f) {
      e = a.R, f = a.S;
    }
    if (void 0 === e || void 0 === f) {
      throw new I(17);
    }
  } else {
    e = a.R, f = a.S;
  }
  var g = xb.G.Aa(a, e, f);
  if (1 === a.type) {
    if (!g || g.i.readyState === g.i.CLOSING || g.i.readyState === g.i.CLOSED) {
      throw new I(53);
    }
    if (g.i.readyState === g.i.CONNECTING) {
      throw new I(6);
    }
  }
  ArrayBuffer.isView(b) && (c += b.byteOffset, b = b.buffer);
  var k;
  b instanceof SharedArrayBuffer ? k = (new Uint8Array(new Uint8Array(b.slice(c, c + d)))).buffer : k = b.slice(c, c + d);
  if (2 === a.type && (!g || g.i.readyState !== g.i.OPEN)) {
    return g && g.i.readyState !== g.i.CLOSING && g.i.readyState !== g.i.CLOSED || (g = xb.G.rb(a, e, f)), g.za.push(k), d;
  }
  try {
    return g.i.send(k), d;
  } catch (l) {
    throw new I(28);
  }
}, Jb:function(a, b) {
  if (1 === a.type && a.M) {
    throw new I(53);
  }
  var c = a.ha.shift();
  if (!c) {
    if (1 === a.type) {
      a = xb.G.Aa(a, a.R, a.S);
      if (!a) {
        throw new I(53);
      }
      if (a.i.readyState === a.i.CLOSING || a.i.readyState === a.i.CLOSED) {
        return null;
      }
    }
    throw new I(6);
  }
  var d = c.data.byteLength || c.data.length, e = c.data.byteOffset || 0, f = c.data.buffer || c.data;
  b = Math.min(b, d);
  var g = {buffer:new Uint8Array(f, e, b), v:c.v, port:c.port};
  1 === a.type && b < d && (c.data = new Uint8Array(f, e + b, d - b), a.ha.unshift(c));
  return g;
}}};
function Ad(a) {
  a = xb.pc(a);
  if (!a) {
    throw new I(8);
  }
  return a;
}
function Bd(a) {
  a = a.split(".");
  for (var b = 0; 4 > b; b++) {
    var c = Number(a[b]);
    if (isNaN(c)) {
      return null;
    }
    a[b] = c;
  }
  return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0;
}
function Cd(a) {
  var b, c, d = [];
  if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a)) {
    return null;
  }
  if ("::" === a) {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
  0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"), a = a.split(":"), a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]), a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]), a = a.slice(0, a.length - 2)) : a = a.split(":");
  for (b = c = 0; b < a.length; b++) {
    if ("string" == typeof a[b]) {
      if ("Z" === a[b]) {
        for (c = 0; c < 8 - a.length + 1; c++) {
          d[b + c] = 0;
        }
        --c;
      } else {
        d[b + c] = Dd(parseInt(a[b], 16));
      }
    } else {
      d[b + c] = a[b];
    }
  }
  return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]];
}
function Ed(a, b, c, d, e) {
  switch(b) {
    case 2:
      c = Bd(c);
      ka().fill(0, a, a + 16);
      e && (n()[e >> 2] = 16);
      na()[a >> 1] = b;
      n()[a + 4 >> 2] = c;
      na()[a + 2 >> 1] = Dd(d);
      break;
    case 10:
      c = Cd(c);
      ka().fill(0, a, a + 28);
      e && (n()[e >> 2] = 28);
      n()[a >> 2] = b;
      n()[a + 8 >> 2] = c[0];
      n()[a + 12 >> 2] = c[1];
      n()[a + 16 >> 2] = c[2];
      n()[a + 20 >> 2] = c[3];
      na()[a + 2 >> 1] = Dd(d);
      break;
    default:
      return 5;
  }
  return 0;
}
var Fd = 1, Gd = {}, Hd = {};
function Id(a) {
  var b = Bd(a);
  if (null !== b) {
    return a;
  }
  b = Cd(a);
  if (null !== b) {
    return a;
  }
  Gd[a] ? b = Gd[a] : (b = Fd++, y(65535 > b, "exceeded max address mappings of 65535"), b = "172.29." + (b & 255) + "." + (b & 65280), Hd[b] = a, Gd[a] = b);
  return b;
}
function Jd(a, b, c, d) {
  if (w) {
    return M(5, 1, a, b, c, d);
  }
  try {
    var e = Ad(a), f = e.F.accept(e);
    if (b) {
      var g = Ed(b, f.family, Id(f.R), f.S, c);
      y(!g);
    }
    return f.stream.m;
  } catch (k) {
    if ("undefined" == typeof L || !(k instanceof I)) {
      throw k;
    }
    return -k.g;
  }
}
function Kd(a) {
  return (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255);
}
function Ld(a) {
  var b = "", c, d = 0, e = 0, f = 0, g = 0;
  a = [a[0] & 65535, a[0] >> 16, a[1] & 65535, a[1] >> 16, a[2] & 65535, a[2] >> 16, a[3] & 65535, a[3] >> 16];
  var k = !0;
  for (c = 0; 5 > c; c++) {
    if (0 !== a[c]) {
      k = !1;
      break;
    }
  }
  if (k) {
    c = Kd(a[6] | a[7] << 16);
    if (-1 === a[5]) {
      return "::ffff:" + c;
    }
    if (0 === a[5]) {
      return "0.0.0.0" === c && (c = ""), "0.0.0.1" === c && (c = "1"), "::" + c;
    }
  }
  for (c = 0; 8 > c; c++) {
    0 === a[c] && (1 < c - e && (g = 0), e = c, g++), g > d && (d = g, f = c - d + 1);
  }
  for (c = 0; 8 > c; c++) {
    1 < d && 0 === a[c] && c >= f && c < f + d ? c === f && (b += ":", 0 === f && (b += ":")) : (b += Number(Md(a[c] & 65535)).toString(16), b += 7 > c ? ":" : "");
  }
  return b;
}
function Nd(a, b) {
  var c = na()[a >> 1], d = Md(pa()[a + 2 >> 1]);
  switch(c) {
    case 2:
      if (16 !== b) {
        return {g:28};
      }
      a = n()[a + 4 >> 2];
      a = Kd(a);
      break;
    case 10:
      if (28 !== b) {
        return {g:28};
      }
      a = [n()[a + 8 >> 2], n()[a + 12 >> 2], n()[a + 16 >> 2], n()[a + 20 >> 2]];
      a = Ld(a);
      break;
    default:
      return {g:5};
  }
  return {family:c, v:a, port:d};
}
function Od(a, b, c) {
  if (c && 0 === a) {
    return null;
  }
  a = Nd(a, b);
  if (a.g) {
    throw new I(a.g);
  }
  b = a.v;
  a.v = (Hd[b] ? Hd[b] : null) || a.v;
  return a;
}
function Qd(a, b, c) {
  if (w) {
    return M(6, 1, a, b, c);
  }
  try {
    var d = Ad(a), e = Od(b, c);
    d.F.bind(d, e.v, e.port);
    return 0;
  } catch (f) {
    if ("undefined" == typeof L || !(f instanceof I)) {
      throw f;
    }
    return -f.g;
  }
}
function Rd(a) {
  if (w) {
    return M(7, 1, a);
  }
  try {
    a = C(a);
    var b = ic(a, {U:!0});
    if (null === b.node) {
      throw new I(44);
    }
    if (16384 !== (b.node.mode & 61440)) {
      throw new I(54);
    }
    var c = Bc(b.node, "x");
    if (c) {
      throw new I(c);
    }
    Tb = b.path;
    return 0;
  } catch (d) {
    if ("undefined" == typeof L || !(d instanceof I)) {
      throw d;
    }
    return -d.g;
  }
}
function Sd(a, b) {
  if (w) {
    return M(8, 1, a, b);
  }
  try {
    return a = C(a), lc(a, b), 0;
  } catch (c) {
    if ("undefined" == typeof L || !(c instanceof I)) {
      throw c;
    }
    return -c.g;
  }
}
function Td(a, b, c) {
  if (w) {
    return M(9, 1, a, b, c);
  }
  try {
    var d = Ad(a), e = Od(b, c);
    d.F.connect(d, e.v, e.port);
    return 0;
  } catch (f) {
    if ("undefined" == typeof L || !(f instanceof I)) {
      throw f;
    }
    return -f.g;
  }
}
function Ud(a, b, c, d) {
  if (w) {
    return M(10, 1, a, b, c, d);
  }
  try {
    b = C(b);
    y(0 === d);
    b = Yc(a, b);
    if (c & -8) {
      return -28;
    }
    var e = ic(b, {U:!0}).node;
    if (!e) {
      return -44;
    }
    a = "";
    c & 4 && (a += "r");
    c & 2 && (a += "w");
    c & 1 && (a += "x");
    return a && Bc(e, a) ? -2 : 0;
  } catch (f) {
    if ("undefined" == typeof L || !(f instanceof I)) {
      throw f;
    }
    return -f.g;
  }
}
function Vd(a, b) {
  if (w) {
    return M(11, 1, a, b);
  }
  try {
    var c = sc[a];
    if (!c) {
      throw new I(8);
    }
    lc(c.node, b);
    return 0;
  } catch (d) {
    if ("undefined" == typeof L || !(d instanceof I)) {
      throw d;
    }
    return -d.g;
  }
}
function Wd(a, b, c) {
  if (w) {
    return M(12, 1, a, b, c);
  }
  $c = c;
  try {
    var d = bd(a);
    switch(b) {
      case 0:
        var e = ad();
        return 0 > e ? -28 : Jc(d, e).m;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return e = ad(), d.flags |= e, 0;
      case 5:
        return e = ad(), na()[e + 0 >> 1] = 2, 0;
      case 6:
      case 7:
        return 0;
      case 16:
      case 8:
        return -28;
      case 9:
        return n()[Xd() >> 2] = 28, -1;
      default:
        return -28;
    }
  } catch (f) {
    if ("undefined" == typeof L || !(f instanceof I)) {
      throw f;
    }
    return -f.g;
  }
}
function Yd(a, b) {
  if (w) {
    return M(13, 1, a, b);
  }
  try {
    if (0 === b) {
      return -28;
    }
    var c = Tb, d = ab(c) + 1;
    if (b < d) {
      return -68;
    }
    $a(c, a, b);
    return d;
  } catch (e) {
    if ("undefined" == typeof L || !(e instanceof I)) {
      throw e;
    }
    return -e.g;
  }
}
function Zd(a, b, c) {
  if (w) {
    return M(14, 1, a, b, c);
  }
  try {
    var d = bd(a);
    d.X || (d.X = gc(d.path));
    a = 0;
    for (var e = Tc(d, 0, 1), f = Math.floor(e / 280); f < d.X.length && a + 280 <= c;) {
      var g = d.X[f];
      if ("." === g) {
        var k = d.node.id;
        var l = 4;
      } else if (".." === g) {
        k = ic(d.path, {parent:!0}).node.id, l = 4;
      } else {
        var p = ec(d.node, g);
        k = p.id;
        l = 8192 === (p.mode & 61440) ? 2 : 16384 === (p.mode & 61440) ? 4 : 40960 === (p.mode & 61440) ? 10 : 8;
      }
      y(k);
      G = [k >>> 0, (F = k, 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
      n()[b + a >> 2] = G[0];
      n()[b + a + 4 >> 2] = G[1];
      G = [280 * (f + 1) >>> 0, (F = 280 * (f + 1), 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
      n()[b + a + 8 >> 2] = G[0];
      n()[b + a + 12 >> 2] = G[1];
      na()[b + a + 16 >> 1] = 280;
      h()[b + a + 18 >> 0] = l;
      $a(g, b + a + 19, 256);
      a += 280;
      f += 1;
    }
    Tc(d, 280 * f, 0);
    return a;
  } catch (u) {
    if ("undefined" == typeof L || !(u instanceof I)) {
      throw u;
    }
    return -u.g;
  }
}
function $d(a, b, c) {
  if (w) {
    return M(15, 1, a, b, c);
  }
  try {
    z("__syscall_getsockname " + a);
    var d = Ad(a), e = Ed(b, d.family, Id(d.gb || "0.0.0.0"), d.ka, c);
    y(!e);
    return 0;
  } catch (f) {
    if ("undefined" == typeof L || !(f instanceof I)) {
      throw f;
    }
    return -f.g;
  }
}
function ae(a, b, c, d, e) {
  if (w) {
    return M(16, 1, a, b, c, d, e);
  }
  try {
    var f = Ad(a);
    return 1 === b && 4 === c ? (n()[d >> 2] = f.error, n()[e >> 2] = 4, f.error = null, 0) : -50;
  } catch (g) {
    if ("undefined" == typeof L || !(g instanceof I)) {
      throw g;
    }
    return -g.g;
  }
}
function be(a, b, c) {
  if (w) {
    return M(17, 1, a, b, c);
  }
  $c = c;
  try {
    var d = bd(a);
    switch(b) {
      case 21509:
      case 21505:
        return d.o ? 0 : -59;
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508:
        return d.o ? 0 : -59;
      case 21519:
        if (!d.o) {
          return -59;
        }
        var e = ad();
        return n()[e >> 2] = 0;
      case 21520:
        return d.o ? -28 : -59;
      case 21531:
        a = e = ad();
        if (!d.j.Ba) {
          throw new I(59);
        }
        return d.j.Ba(d, b, a);
      case 21523:
        return d.o ? 0 : -59;
      case 21524:
        return d.o ? 0 : -59;
      default:
        return -28;
    }
  } catch (f) {
    if ("undefined" == typeof L || !(f instanceof I)) {
      throw f;
    }
    return -f.g;
  }
}
function ce(a, b) {
  if (w) {
    return M(18, 1, a, b);
  }
  try {
    var c = Ad(a);
    c.F.Ab(c, b);
    return 0;
  } catch (d) {
    if ("undefined" == typeof L || !(d instanceof I)) {
      throw d;
    }
    return -d.g;
  }
}
function de(a, b) {
  if (w) {
    return M(19, 1, a, b);
  }
  try {
    return a = C(a), Zc(Qc, a, b);
  } catch (c) {
    if ("undefined" == typeof L || !(c instanceof I)) {
      throw c;
    }
    return -c.g;
  }
}
function ee(a, b, c) {
  if (w) {
    return M(20, 1, a, b, c);
  }
  try {
    return b = C(b), b = Yc(a, b), b = Ob(b), "/" === b[b.length - 1] && (b = b.substr(0, b.length - 1)), Oc(b, c), 0;
  } catch (d) {
    if ("undefined" == typeof L || !(d instanceof I)) {
      throw d;
    }
    return -d.g;
  }
}
function fe(a, b, c, d) {
  if (w) {
    return M(21, 1, a, b, c, d);
  }
  try {
    b = C(b);
    var e = d & 256, f = d & 4096;
    d &= -4353;
    y(!d, d);
    b = Yc(a, b, f);
    return Zc(e ? Qc : hc, b, c);
  } catch (g) {
    if ("undefined" == typeof L || !(g instanceof I)) {
      throw g;
    }
    return -g.g;
  }
}
function ge(a, b, c, d) {
  if (w) {
    return M(22, 1, a, b, c, d);
  }
  $c = d;
  try {
    b = C(b);
    b = Yc(a, b);
    var e = d ? ad() : 0;
    return vb(b, c, e).m;
  } catch (f) {
    if ("undefined" == typeof L || !(f instanceof I)) {
      throw f;
    }
    return -f.g;
  }
}
function he(a, b, c) {
  if (w) {
    return M(23, 1, a, b, c);
  }
  try {
    for (var d = c = 0; d < b; d++) {
      var e = a + 8 * d, f = n()[e >> 2], g = na()[e + 4 >> 1], k = 32, l = sc[f];
      l && (k = 5, l.j.ga && (k = l.j.ga(l)));
      (k &= g | 24) && c++;
      na()[e + 6 >> 1] = k;
    }
    return c;
  } catch (p) {
    if ("undefined" == typeof L || !(p instanceof I)) {
      throw p;
    }
    return -p.g;
  }
}
function ie(a, b, c, d) {
  if (w) {
    return M(24, 1, a, b, c, d);
  }
  try {
    b = C(b);
    b = Yc(a, b);
    if (0 >= d) {
      return -28;
    }
    var e = wc(b), f = Math.min(d, ab(e)), g = h()[c + f];
    $a(e, c, d + 1);
    h()[c + f] = g;
    return f;
  } catch (k) {
    if ("undefined" == typeof L || !(k instanceof I)) {
      throw k;
    }
    return -k.g;
  }
}
function je(a, b, c, d, e, f) {
  if (w) {
    return M(25, 1, a, b, c, d, e, f);
  }
  try {
    var g = Ad(a), k = g.F.Jb(g, c);
    if (!k) {
      return 0;
    }
    if (e) {
      var l = Ed(e, g.family, Id(k.v), k.port, f);
      y(!l);
    }
    ka().set(k.buffer, b);
    return k.buffer.byteLength;
  } catch (p) {
    if ("undefined" == typeof L || !(p instanceof I)) {
      throw p;
    }
    return -p.g;
  }
}
function ke(a, b, c, d) {
  if (w) {
    return M(26, 1, a, b, c, d);
  }
  try {
    b = C(b);
    d = C(d);
    b = Yc(a, b);
    d = Yc(c, d);
    a = b;
    var e = Pb(a), f = Pb(d), g = Qb(a), k = Qb(d);
    var l = ic(a, {parent:!0});
    var p = l.node;
    l = ic(d, {parent:!0});
    var u = l.node;
    if (!p || !u) {
      throw new I(44);
    }
    if (p.u !== u.u) {
      throw new I(75);
    }
    var A = ec(p, g), D = Ub(a, f);
    if ("." !== D.charAt(0)) {
      throw new I(28);
    }
    D = Ub(d, e);
    if ("." !== D.charAt(0)) {
      throw new I(55);
    }
    try {
      var r = ec(u, k);
    } catch (O) {
    }
    if (A !== r) {
      var B = 16384 === (A.mode & 61440), x = Gc(p, g, B);
      if (x) {
        throw new I(x);
      }
      if (x = r ? Gc(u, k, B) : Fc(u, k)) {
        throw new I(x);
      }
      if (!p.h.Ja) {
        throw new I(63);
      }
      if (A.I || r && r.I) {
        throw new I(10);
      }
      if (u !== p && (x = Bc(p, "w"))) {
        throw new I(x);
      }
      Ac(A);
      try {
        p.h.Ja(A, u, k);
      } catch (O) {
        throw O;
      } finally {
        zc(A);
      }
    }
    return 0;
  } catch (O) {
    if ("undefined" == typeof L || !(O instanceof I)) {
      throw O;
    }
    return -O.g;
  }
}
function le(a) {
  if (w) {
    return M(27, 1, a);
  }
  try {
    return a = C(a), mc(a), 0;
  } catch (b) {
    if ("undefined" == typeof L || !(b instanceof I)) {
      throw b;
    }
    return -b.g;
  }
}
function me(a, b, c, d, e, f) {
  if (w) {
    return M(28, 1, a, b, c, d, e, f);
  }
  try {
    var g = Ad(a), k = Od(e, f, !0);
    return k ? g.F.Mb(g, h(), b, c, k.v, k.port) : Uc(g.stream, h(), b, c);
  } catch (l) {
    if ("undefined" == typeof L || !(l instanceof I)) {
      throw l;
    }
    return -l.g;
  }
}
function ne(a, b, c) {
  if (w) {
    return M(29, 1, a, b, c);
  }
  try {
    var d = xb.cc(a, b, c);
    y(64 > d.stream.m);
    return d.stream.m;
  } catch (e) {
    if ("undefined" == typeof L || !(e instanceof I)) {
      throw e;
    }
    return -e.g;
  }
}
function oe(a, b) {
  if (w) {
    return M(30, 1, a, b);
  }
  try {
    return a = C(a), Zc(hc, a, b);
  } catch (c) {
    if ("undefined" == typeof L || !(c instanceof I)) {
      throw c;
    }
    return -c.g;
  }
}
function pe(a, b, c) {
  if (w) {
    return M(31, 1, a, b, c);
  }
  try {
    return C(a), y(64 === b), n()[c + 4 >> 2] = 4096, n()[c + 40 >> 2] = 4096, n()[c + 8 >> 2] = 1e6, n()[c + 12 >> 2] = 5e5, n()[c + 16 >> 2] = 5e5, n()[c + 20 >> 2] = tc, n()[c + 24 >> 2] = 1e6, n()[c + 28 >> 2] = 42, n()[c + 44 >> 2] = 2, n()[c + 36 >> 2] = 255, 0;
  } catch (d) {
    if ("undefined" == typeof L || !(d instanceof I)) {
      throw d;
    }
    return -d.g;
  }
}
function qe(a, b) {
  if (w) {
    return M(32, 1, a, b);
  }
  try {
    return a = C(a), b = C(b), ub(a, b), 0;
  } catch (c) {
    if ("undefined" == typeof L || !(c instanceof I)) {
      throw c;
    }
    return -c.g;
  }
}
function re(a, b, c) {
  if (w) {
    return M(33, 1, a, b, c);
  }
  try {
    return b = C(b), b = Yc(a, b), 0 === c ? nc(b) : 512 === c ? mc(b) : za("Invalid flags passed to unlinkat"), 0;
  } catch (d) {
    if ("undefined" == typeof L || !(d instanceof I)) {
      throw d;
    }
    return -d.g;
  }
}
function ld(a) {
  Atomics.store(n(), a >> 2, 1);
  kd() && se(a);
  Atomics.compareExchange(n(), a >> 2, 1, 0);
}
v.executeNotifiedProxyingQueue = ld;
function te(a) {
  return q()[a >> 2] + 4294967296 * n()[a + 4 >> 2];
}
function ue(a) {
  var b = ab(a) + 1, c = ve(b);
  c && Za(a, h(), c, b);
  return c;
}
function we(a, b, c) {
  function d(p) {
    return (p = p.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? p[1] : "GMT";
  }
  if (w) {
    return M(34, 1, a, b, c);
  }
  var e = (new Date()).getFullYear(), f = new Date(e, 0, 1), g = new Date(e, 6, 1);
  e = f.getTimezoneOffset();
  var k = g.getTimezoneOffset(), l = Math.max(e, k);
  n()[a >> 2] = 60 * l;
  n()[b >> 2] = Number(e != k);
  a = d(f);
  b = d(g);
  a = ue(a);
  b = ue(b);
  k < e ? (q()[c >> 2] = a, q()[c + 4 >> 2] = b) : (q()[c >> 2] = b, q()[c + 4 >> 2] = a);
}
function xe(a, b, c) {
  xe.$b || (xe.$b = !0, we(a, b, c));
}
function ye(a, b) {
  ze = a;
  Ae = b;
  if (Be) {
    if (Ce || (Ma += 1, Ce = !0), 0 == a) {
      De = function() {
        var d = Math.max(0, Ee + b - Fe()) | 0;
        setTimeout(Ge, d);
      }, He = "timeout";
    } else if (1 == a) {
      De = function() {
        Ie(Ge);
      }, He = "rAF";
    } else if (2 == a) {
      if ("undefined" == typeof setImmediate) {
        var c = [];
        addEventListener("message", d => {
          if ("setimmediate" === d.data || "setimmediate" === d.data.target) {
            d.stopPropagation(), c.shift()();
          }
        }, !0);
        setImmediate = function(d) {
          c.push(d);
          Fa ? (void 0 === v.setImmediates && (v.setImmediates = []), v.setImmediates.push(d), postMessage({target:"setimmediate"})) : postMessage("setimmediate", "*");
        };
      }
      De = function() {
        setImmediate(Ge);
      };
      He = "immediate";
    }
  } else {
    z("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.");
  }
}
var Fe;
Fe = w ? () => performance.now() - v.__performance_now_clock_drift : () => performance.now();
function Je() {
  if (!pb()) {
    try {
      w ? td(Va) : dd(Va);
    } catch (a) {
      hd(a);
    }
  }
}
function Ke() {
  y(0 < Ma);
  --Ma;
}
function Le(a, b, c, d, e) {
  function f() {
    return g < Me ? (Ke(), Je(), !1) : !0;
  }
  y(!Be, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  Be = a;
  Ne = d;
  var g = Me;
  Ce = !1;
  Ge = function() {
    if (!Ua) {
      if (0 < Oe.length) {
        var k = Date.now(), l = Oe.shift();
        l.rd(l.nb);
        if (Pe) {
          var p = Pe, u = 0 == p % 1 ? p - 1 : Math.floor(p);
          Pe = l.md ? u : (8 * p + (u + .5)) / 9;
        }
        Oa('main loop blocker "' + l.name + '" took ' + (Date.now() - k) + " ms");
        v.setStatus && (k = v.statusMessage || "Please wait...", l = Pe, p = Qe.qd, l ? l < p ? v.setStatus(k + " (" + (p - l) + "/" + p + ")") : v.setStatus(k) : v.setStatus(""));
        f() && setTimeout(Ge, 0);
      } else {
        f() && (Re = Re + 1 | 0, 1 == ze && 1 < Ae && 0 != Re % Ae ? De() : (0 == ze && (Ee = Fe()), "timeout" === He && v.la && (Ya("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), He = ""), Ua || v.preMainLoop && !1 === v.preMainLoop() || (Se(a), v.postMainLoop && v.postMainLoop()), fb(), f() && ("object" == typeof SDL && 
        SDL.audio && SDL.audio.Ic && SDL.audio.Ic(), De())));
      }
    }
  };
  e || (b && 0 < b ? ye(0, 1e3 / b) : ye(1, 1), De());
  if (c) {
    throw "unwind";
  }
}
function Se(a) {
  if (ob || Ua) {
    z("user callback triggered after runtime exited or application aborted.  Ignoring.");
  } else {
    try {
      a(), Je();
    } catch (b) {
      hd(b);
    }
  }
}
function Te(a) {
  Ma += 1;
  setTimeout(function() {
    Ke();
    Se(a);
  }, 1e4);
}
function Ya(a) {
  Ue || (Ue = {});
  Ue[a] || (Ue[a] = 1, z(a));
}
var Ue, Ce = !1, De = null, He = "", Me = 0, Be = null, Ne = 0, ze = 0, Ae = 0, Re = 0, Oe = [];
function Ve() {
  Me++;
  var a = ze, b = Ae, c = Be;
  Be = null;
  Le(c, 0, !1, Ne, !0);
  ye(a, b);
  De();
}
var Qe = {}, Ee, Ge, Pe, We = !1, Xe = !1, Ye = [];
function Ze() {
  function a() {
    Xe = document.pointerLockElement === v.canvas || document.mozPointerLockElement === v.canvas || document.webkitPointerLockElement === v.canvas || document.msPointerLockElement === v.canvas;
  }
  v.preloadPlugins || (v.preloadPlugins = []);
  if (!$e) {
    $e = !0;
    try {
      af = !0;
    } catch (c) {
      af = !1, z("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    bf = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : af ? null : z("warning: no BlobBuilder");
    cf = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
    v.Gb || "undefined" != typeof cf || (z("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), v.Gb = !0);
    v.preloadPlugins.push({canHandle:function(c) {
      return !v.Gb && /\.(jpg|jpeg|png|bmp)$/i.test(c);
    }, handle:function(c, d, e, f) {
      var g = null;
      if (af) {
        try {
          g = new Blob([c], {type:df(d)}), g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer], {type:df(d)}));
        } catch (p) {
          Ya("Blob constructor present but fails: " + p + "; falling back to blob builder");
        }
      }
      g || (g = new bf(), g.append((new Uint8Array(c)).buffer), g = g.getBlob());
      var k = cf.createObjectURL(g);
      y("string" == typeof k, "createObjectURL must return a url as a string");
      var l = new Image();
      l.onload = () => {
        y(l.complete, "Image " + d + " could not be decoded");
        var p = document.createElement("canvas");
        p.width = l.width;
        p.height = l.height;
        p.getContext("2d").drawImage(l, 0, 0);
        cf.revokeObjectURL(k);
        e && e(c);
      };
      l.onerror = () => {
        Oa("Image " + k + " could not be decoded");
        f && f();
      };
      l.src = k;
    }});
    v.preloadPlugins.push({canHandle:function(c) {
      return !v.zd && c.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(c, d, e, f) {
      function g() {
        l || (l = !0, e && e(c));
      }
      function k() {
        l || (l = !0, new Audio(), f && f());
      }
      var l = !1;
      if (af) {
        try {
          var p = new Blob([c], {type:df(d)});
        } catch (A) {
          return k();
        }
        p = cf.createObjectURL(p);
        y("string" == typeof p, "createObjectURL must return a url as a string");
        var u = new Audio();
        u.addEventListener("canplaythrough", () => g(u), !1);
        u.onerror = function() {
          if (!l) {
            z("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
            for (var A = "", D = 0, r = 0, B = 0; B < c.length; B++) {
              for (D = D << 8 | c[B], r += 8; 6 <= r;) {
                var x = D >> r - 6 & 63;
                r -= 6;
                A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[x];
              }
            }
            2 == r ? (A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(D & 3) << 4], A += "==") : 4 == r && (A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(D & 15) << 2], A += "=");
            u.src = "data:audio/x-" + d.substr(-3) + ";base64," + A;
            g(u);
          }
        };
        u.src = p;
        Te(function() {
          g(u);
        });
      } else {
        return k();
      }
    }});
    var b = v.canvas;
    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || (() => {
    }), b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {
    }), b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), v.elementPointerLock && b.addEventListener("click", c => {
      !Xe && v.canvas.requestPointerLock && (v.canvas.requestPointerLock(), c.preventDefault());
    }, !1));
  }
}
function ef(a, b, c, d) {
  if (b && v.la && a == v.canvas) {
    return v.la;
  }
  var e;
  if (b) {
    var f = {antialias:!1, alpha:!1, $a:"undefined" != typeof WebGL2RenderingContext ? 2 : 1};
    if (d) {
      for (var g in d) {
        f[g] = d[g];
      }
    }
    if ("undefined" != typeof ff && (e = gf(a, f))) {
      var k = hf[e].C;
    }
  } else {
    k = a.getContext("2d");
  }
  if (!k) {
    return null;
  }
  c && (b || y("undefined" == typeof P, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), v.la = k, b && jf(e), v.Kd = b, Ye.forEach(function(l) {
    l();
  }), Ze());
  return k;
}
var kf = !1, lf = void 0, mf = void 0;
function nf(a, b) {
  function c() {
    We = !1;
    var f = d.parentNode;
    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = of, lf && d.requestPointerLock(), We = !0, mf ? ("undefined" != typeof SDL && (f = q()[SDL.screen >> 2], f |= 8388608, n()[SDL.screen >> 2] = f), pf(v.canvas), qf()) : pf(d)) : (f.parentNode.insertBefore(d, f), f.parentNode.removeChild(f), mf ? ("undefined" != typeof SDL && (f = q()[SDL.screen >> 
    2], f &= -8388609, n()[SDL.screen >> 2] = f), pf(v.canvas), qf()) : pf(d));
    if (v.onFullScreen) {
      v.onFullScreen(We);
    }
    if (v.onFullscreen) {
      v.onFullscreen(We);
    }
  }
  lf = a;
  mf = b;
  "undefined" == typeof lf && (lf = !0);
  "undefined" == typeof mf && (mf = !1);
  var d = v.canvas;
  kf || (kf = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
  var e = document.createElement("div");
  d.parentNode.insertBefore(e, d);
  e.appendChild(d);
  e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? () => e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ? () => e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
  e.requestFullscreen();
}
function of() {
  if (!We) {
    return !1;
  }
  (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
  }).apply(document, []);
  return !0;
}
var rf = 0;
function Ie(a) {
  if ("function" == typeof requestAnimationFrame) {
    requestAnimationFrame(a);
  } else {
    var b = Date.now();
    if (0 === rf) {
      rf = b + 1e3 / 60;
    } else {
      for (; b + 2 >= rf;) {
        rf += 1e3 / 60;
      }
    }
    setTimeout(a, Math.max(rf - b, 0));
  }
}
function df(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
var sf = [];
function qf() {
  var a = v.canvas;
  sf.forEach(function(b) {
    b(a.width, a.height);
  });
}
function pf(a, b, c) {
  b && c ? (a.ed = b, a.wc = c) : (b = a.ed, c = a.wc);
  var d = b, e = c;
  v.forcedAspectRatio && 0 < v.forcedAspectRatio && (d / e < v.forcedAspectRatio ? d = Math.round(e * v.forcedAspectRatio) : e = Math.round(d / v.forcedAspectRatio));
  if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var f = Math.min(screen.width / d, screen.height / e);
    d = Math.round(d * f);
    e = Math.round(e * f);
  }
  mf ? (a.width != d && (a.width = d), a.height != e && (a.height = e), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var $e, af, bf, cf;
function tf(a) {
  if (w) {
    return M(35, 1, a);
  }
  noExitRuntime = !1;
  Ma = 0;
  dd(a);
}
function uf(a) {
  var b = a.getExtension("ANGLE_instanced_arrays");
  b && (a.vertexAttribDivisor = function(c, d) {
    b.vertexAttribDivisorANGLE(c, d);
  }, a.drawArraysInstanced = function(c, d, e, f) {
    b.drawArraysInstancedANGLE(c, d, e, f);
  }, a.drawElementsInstanced = function(c, d, e, f, g) {
    b.drawElementsInstancedANGLE(c, d, e, f, g);
  });
}
function vf(a) {
  var b = a.getExtension("OES_vertex_array_object");
  b && (a.createVertexArray = function() {
    return b.createVertexArrayOES();
  }, a.deleteVertexArray = function(c) {
    b.deleteVertexArrayOES(c);
  }, a.bindVertexArray = function(c) {
    b.bindVertexArrayOES(c);
  }, a.isVertexArray = function(c) {
    return b.isVertexArrayOES(c);
  });
}
function wf(a) {
  var b = a.getExtension("WEBGL_draw_buffers");
  b && (a.drawBuffers = function(c, d) {
    b.drawBuffersWEBGL(c, d);
  });
}
function xf(a) {
  a.nd = a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
}
function yf(a) {
  a.vd = a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
}
function zf(a) {
  a.yd = a.getExtension("WEBGL_multi_draw");
}
var Af = 1, Bf = [], Cf = [], Df = [], Ef = [], Ff = [], Gf = [], Hf = [], hf = {}, If = [], Jf = [], Kf = {}, Lf = {}, Mf = 4;
function Q(a) {
  Nf || (Nf = a);
}
function Of(a) {
  for (var b = Af++, c = a.length; c < b; c++) {
    a[c] = null;
  }
  return b;
}
function gf(a, b) {
  b.Ka && (b.preserveDrawingBuffer = !0);
  var c = 1 < b.$a ? a.getContext("webgl2", b) : a.getContext("webgl", b);
  if (c) {
    a = ve(8);
    n()[a + 4 >> 2] = kd();
    var d = {uc:a, attributes:b, version:b.$a, C:c};
    c.canvas && (c.canvas.Ub = d);
    hf[a] = d;
    ("undefined" == typeof b.ub || b.ub) && Pf(d);
    if (b.Ka) {
      b = d.C;
      c = b.createFramebuffer();
      b.bindFramebuffer(36160, c);
      d.Va = c;
      d.Wa = !1;
      b.getContextAttributes().antialias ? d.Wa = !0 : (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d\d)/), null != c && (d.Wa = 67 > c[1]));
      d.ma = b.createTexture();
      d.xa = b.createRenderbuffer();
      Qf(d);
      b.bindTexture(3553, d.ma);
      b.texParameteri(3553, 10241, 9728);
      b.texParameteri(3553, 10240, 9728);
      b.texParameteri(3553, 10242, 33071);
      b.texParameteri(3553, 10243, 33071);
      b.texImage2D(3553, 0, 6408, b.canvas.width, b.canvas.height, 0, 6408, 5121, null);
      b.framebufferTexture2D(36160, 36064, 3553, d.ma, 0);
      b.bindTexture(3553, null);
      b.bindRenderbuffer(36161, d.xa);
      b.renderbufferStorage(36161, 33189, b.canvas.width, b.canvas.height);
      b.framebufferRenderbuffer(36160, 36096, 36161, d.xa);
      b.bindRenderbuffer(36161, null);
      c = b.createBuffer();
      b.bindBuffer(34962, c);
      b.bufferData(34962, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), 35044);
      b.bindBuffer(34962, null);
      d.Xb = c;
      c = b.createShader(35633);
      b.shaderSource(c, "attribute vec2 pos;varying lowp vec2 tex;void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }");
      b.compileShader(c);
      var e = b.createShader(35632);
      b.shaderSource(e, "varying lowp vec2 tex;uniform sampler2D sampler;void main() { gl_FragColor = texture2D(sampler, tex); }");
      b.compileShader(e);
      var f = b.createProgram();
      b.attachShader(f, c);
      b.attachShader(f, e);
      b.linkProgram(f);
      d.Wb = f;
      d.H = b.getAttribLocation(f, "pos");
      b.useProgram(f);
      b.uniform1i(b.getUniformLocation(f, "sampler"), 0);
      b.useProgram(null);
      d.ya = void 0;
      b.createVertexArray && (d.ya = b.createVertexArray(), b.bindVertexArray(d.ya), b.enableVertexAttribArray(d.H), b.bindVertexArray(null));
    }
  } else {
    a = 0;
  }
  return a;
}
function Qf(a) {
  var b = a.C;
  if (a.ma) {
    var c = b.getParameter(32873);
    b.bindTexture(3553, a.ma);
    b.texImage2D(3553, 0, 6408, b.drawingBufferWidth, b.drawingBufferHeight, 0, 6408, 5121, null);
    b.bindTexture(3553, c);
  }
  a.xa && (c = b.getParameter(36007), b.bindRenderbuffer(36161, a.xa), b.renderbufferStorage(36161, 33189, b.drawingBufferWidth, b.drawingBufferHeight), b.bindRenderbuffer(36161, c));
}
function Rf() {
  var a = R, b = a.C, c = b.getParameter(3089);
  c && b.disable(3089);
  var d = b.getParameter(36006);
  if (b.blitFramebuffer && !a.Wa) {
    b.bindFramebuffer(36008, a.Va), b.bindFramebuffer(36009, null), b.blitFramebuffer(0, 0, b.canvas.width, b.canvas.height, 0, 0, b.canvas.width, b.canvas.height, 16384, 9728);
  } else {
    b.bindFramebuffer(36160, null);
    var e = b.getParameter(35725);
    b.useProgram(a.Wb);
    var f = b.getParameter(34964);
    b.bindBuffer(34962, a.Xb);
    var g = b.getParameter(34016);
    b.activeTexture(33984);
    var k = b.getParameter(32873);
    b.bindTexture(3553, a.ma);
    var l = b.getParameter(3042);
    l && b.disable(3042);
    var p = b.getParameter(2884);
    p && b.disable(2884);
    var u = b.getParameter(2929);
    u && b.disable(2929);
    var A = b.getParameter(2960);
    A && b.disable(2960);
    function ia() {
      b.vertexAttribPointer(a.H, 2, 5126, !1, 0, 0);
      b.drawArrays(5, 0, 4);
    }
    if (a.ya) {
      var D = b.getParameter(34229);
      b.bindVertexArray(a.ya);
      ia();
      b.bindVertexArray(D);
    } else {
      D = {buffer:b.getVertexAttrib(a.H, 34975), size:b.getVertexAttrib(a.H, 34339), Wc:b.getVertexAttrib(a.H, 34340), type:b.getVertexAttrib(a.H, 34341), Gc:b.getVertexAttrib(a.H, 34922), Bd:b.getVertexAttribOffset(a.H, 34373)};
      for (var r = b.getParameter(34921), B = [], x = 0; x < r; ++x) {
        var O = b.getVertexAttrib(x, 34338), ba = x == a.H;
        O && !ba && b.disableVertexAttribArray(x);
        !O && ba && b.enableVertexAttribArray(x);
        B[x] = O;
      }
      ia();
      for (x = 0; x < r; ++x) {
        O = B[x], ba = x == a.H, O && !ba && b.enableVertexAttribArray(x), !O && ba && b.disableVertexAttribArray(x);
      }
      b.bindBuffer(34962, D.buffer);
      b.vertexAttribPointer(a.H, D.size, D.type, D.Gc, D.Wc, D.offset);
    }
    A && b.enable(2960);
    u && b.enable(2929);
    p && b.enable(2884);
    l && b.enable(3042);
    b.bindTexture(3553, k);
    b.activeTexture(g);
    b.bindBuffer(34962, f);
    b.useProgram(e);
  }
  b.bindFramebuffer(36160, d);
  c && b.enable(3089);
}
function jf(a) {
  R = hf[a];
  v.la = P = R && R.C;
  return !(a && !P);
}
function Pf(a) {
  a || (a = R);
  if (!a.xc) {
    a.xc = !0;
    var b = a.C;
    uf(b);
    vf(b);
    wf(b);
    xf(b);
    yf(b);
    2 <= a.version && (b.tb = b.getExtension("EXT_disjoint_timer_query_webgl2"));
    if (2 > a.version || !b.tb) {
      b.tb = b.getExtension("EXT_disjoint_timer_query");
    }
    zf(b);
    (b.getSupportedExtensions() || []).forEach(function(c) {
      c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
    });
  }
}
var ff = {}, R, Nf;
function Sf(a, b, c, d) {
  for (var e = 0; e < a; e++) {
    var f = P[c](), g = f && Of(d);
    f ? (f.name = g, d[g] = f) : Q(1282);
    n()[b + 4 * e >> 2] = g;
  }
}
function Tf(a, b, c) {
  if (b) {
    var d = void 0;
    switch(a) {
      case 36346:
        d = 1;
        break;
      case 36344:
        0 != c && 1 != c && Q(1280);
        return;
      case 34814:
      case 36345:
        d = 0;
        break;
      case 34466:
        var e = P.getParameter(34467);
        d = e ? e.length : 0;
        break;
      case 33309:
        if (2 > R.version) {
          Q(1282);
          return;
        }
        d = 2 * (P.getSupportedExtensions() || []).length;
        break;
      case 33307:
      case 33308:
        if (2 > R.version) {
          Q(1280);
          return;
        }
        d = 33307 == a ? 3 : 0;
    }
    if (void 0 === d) {
      switch(e = P.getParameter(a), typeof e) {
        case "number":
          d = e;
          break;
        case "boolean":
          d = e ? 1 : 0;
          break;
        case "string":
          Q(1280);
          return;
        case "object":
          if (null === e) {
            switch(a) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                d = 0;
                break;
              default:
                Q(1280);
                return;
            }
          } else {
            if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
              for (var f = 0; f < e.length; ++f) {
                switch(c) {
                  case 0:
                    n()[b + 4 * f >> 2] = e[f];
                    break;
                  case 2:
                    t()[b + 4 * f >> 2] = e[f];
                    break;
                  case 4:
                    h()[b + f >> 0] = e[f] ? 1 : 0;
                }
              }
              return;
            }
            try {
              d = e.name | 0;
            } catch (g) {
              Q(1280);
              z("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + g + ")");
              return;
            }
          }
          break;
        default:
          Q(1280);
          z("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + e + " of type " + typeof e + "!");
          return;
      }
    }
    switch(c) {
      case 1:
        c = d;
        q()[b >> 2] = c;
        q()[b + 4 >> 2] = (c - q()[b >> 2]) / 4294967296;
        0 <= c ? f = q()[b >> 2] + 4294967296 * q()[b + 4 >> 2] : f = te(b);
        f != c && Ya("writeI53ToI64() out of range: serialized JS Number " + c + " to Wasm heap as bytes lo=0x" + q()[b >> 2].toString(16) + ", hi=0x" + q()[b + 4 >> 2].toString(16) + ", which deserializes back to " + f + " instead!");
        break;
      case 0:
        n()[b >> 2] = d;
        break;
      case 2:
        t()[b >> 2] = d;
        break;
      case 4:
        h()[b >> 0] = d ? 1 : 0;
    }
  } else {
    Q(1281);
  }
}
function Uf(a) {
  var b = ab(a) + 1, c = ve(b);
  $a(a, c, b);
  return c;
}
function Vf(a) {
  return "]" == a.slice(-1) && a.lastIndexOf("[");
}
function Wf(a) {
  a -= 5120;
  return 0 == a ? h() : 1 == a ? ka() : 2 == a ? na() : 4 == a ? n() : 6 == a ? t() : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? q() : pa();
}
function Xf(a) {
  return 31 - Math.clz32(a.BYTES_PER_ELEMENT);
}
function Yf(a, b, c, d, e) {
  a = Wf(a);
  var f = Xf(a), g = Mf;
  return a.subarray(e >> f, e + d * (c * ({5:3, 6:4, 8:2, 29502:3, 29504:4, 26917:2, 26918:2, 29846:3, 29847:4}[b - 6402] || 1) * (1 << f) + g - 1 & -g) >> f);
}
function Zf(a) {
  var b = P.dc;
  if (b) {
    var c = b.va[a];
    "number" == typeof c && (b.va[a] = c = P.getUniformLocation(b, b.Rb[a] + (0 < c ? "[" + c + "]" : "")));
    return c;
  }
  Q(1282);
}
var $f = [], ag = [];
function M(a, b) {
  var c = arguments.length - 2, d = arguments;
  if (19 < c) {
    throw "emscripten_proxy_to_main_thread_js: Too many arguments " + c + " to proxied function idx=" + a + ", maximum supported is 19!";
  }
  return md(function() {
    for (var e = bg(8 * c), f = e >> 3, g = 0; g < c; g++) {
      var k = d[2 + g];
      ua()[f + g] = k;
    }
    return cg(a, c, e, b);
  });
}
var dg = [];
function eg(a) {
  if (w) {
    return M(36, 1, a);
  }
  R == a && (R = 0);
  R === hf[a] && (R = null);
  if ("object" == typeof fg) {
    for (var b = hf[a].C.canvas, c = 0; c < gg.length; ++c) {
      if (gg[c].target == b) {
        var d = c--, e = gg[d];
        e.target.removeEventListener(e.pd, e.od, e.Jd);
        gg.splice(d, 1);
      }
    }
  }
  hf[a] && hf[a].C.canvas && (hf[a].C.canvas.Ub = void 0);
  S(hf[a].uc);
  hf[a] = null;
}
function hg(a, b) {
  return w ? M(37, 1, a, b) : ig(a, b);
}
var gg = [], fg = {}, jg = ["default", "low-power", "high-performance"], kg = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0];
function ig(a, b) {
  y(b);
  var c = b >> 2, d = n()[c + 6];
  c = {alpha:!!n()[c], depth:!!n()[c + 1], stencil:!!n()[c + 2], antialias:!!n()[c + 3], premultipliedAlpha:!!n()[c + 4], preserveDrawingBuffer:!!n()[c + 5], powerPreference:jg[d], failIfMajorPerformanceCaveat:!!n()[c + 7], $a:n()[c + 8], wd:n()[c + 9], ub:n()[c + 10], wb:n()[c + 11], Hb:n()[c + 12], Ka:n()[c + 13]};
  d = a;
  d = 2 < d ? C(d) : d;
  d = kg[d] || ("undefined" != typeof document ? document.querySelector(d) : void 0);
  if (w && (2 === c.Hb || !d && 1 === c.Hb)) {
    return "undefined" == typeof OffscreenCanvas && (n()[b + 52 >> 2] = 1, n()[b + 20 >> 2] = 1), hg(a, b);
  }
  if (!d) {
    return 0;
  }
  c.wb && !c.Ka && (c.Ka = !0);
  return gf(d, c);
}
function lg(a, b) {
  if (w) {
    return M(38, 1, a, b);
  }
  a = hf[a];
  b = C(b);
  b.startsWith("GL_") && (b = b.substr(3));
  "ANGLE_instanced_arrays" == b && uf(P);
  "OES_vertex_array_object" == b && vf(P);
  "WEBGL_draw_buffers" == b && wf(P);
  "WEBGL_draw_instanced_base_vertex_base_instance" == b && xf(P);
  "WEBGL_multi_draw_instanced_base_vertex_base_instance" == b && yf(P);
  "WEBGL_multi_draw" == b && zf(P);
  return !!a.C.getExtension(b);
}
var mg = {};
function ng() {
  if (!og) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:Ca || "./this.program"}, b;
    for (b in mg) {
      void 0 === mg[b] ? delete a[b] : a[b] = mg[b];
    }
    var c = [];
    for (b in a) {
      c.push(b + "=" + a[b]);
    }
    og = c;
  }
  return og;
}
var og;
function pg(a, b) {
  if (w) {
    return M(39, 1, a, b);
  }
  var c = 0;
  ng().forEach(function(d, e) {
    var f = b + c;
    e = q()[a + 4 * e >> 2] = f;
    for (f = 0; f < d.length; ++f) {
      y(d.charCodeAt(f) === (d.charCodeAt(f) & 255)), h()[e++ >> 0] = d.charCodeAt(f);
    }
    h()[e >> 0] = 0;
    c += d.length + 1;
  });
  return 0;
}
function qg(a, b) {
  if (w) {
    return M(40, 1, a, b);
  }
  var c = ng();
  q()[a >> 2] = c.length;
  var d = 0;
  c.forEach(function(e) {
    d += e.length + 1;
  });
  q()[b >> 2] = d;
  return 0;
}
function rg(a) {
  if (w) {
    return M(41, 1, a);
  }
  try {
    var b = bd(a);
    Sc(b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof L || !(c instanceof I)) {
      throw c;
    }
    return c.g;
  }
}
function sg(a, b) {
  if (w) {
    return M(42, 1, a, b);
  }
  try {
    var c = bd(a), d = c.o ? 2 : 16384 === (c.mode & 61440) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
    h()[b >> 0] = d;
    return 0;
  } catch (e) {
    if ("undefined" == typeof L || !(e instanceof I)) {
      throw e;
    }
    return e.g;
  }
}
function tg(a, b, c, d) {
  if (w) {
    return M(43, 1, a, b, c, d);
  }
  try {
    a: {
      var e = bd(a);
      a = b;
      for (var f = b = 0; f < c; f++) {
        var g = q()[a >> 2], k = q()[a + 4 >> 2];
        a += 8;
        var l = e, p = h(), u = g, A = k, D = void 0;
        if (0 > A || 0 > D) {
          throw new I(28);
        }
        if (null === l.m) {
          throw new I(8);
        }
        if (1 === (l.flags & 2097155)) {
          throw new I(8);
        }
        if (16384 === (l.node.mode & 61440)) {
          throw new I(31);
        }
        if (!l.j.read) {
          throw new I(28);
        }
        var r = "undefined" != typeof D;
        if (!r) {
          D = l.position;
        } else if (!l.seekable) {
          throw new I(70);
        }
        var B = l.j.read(l, p, u, A, D);
        r || (l.position += B);
        var x = B;
        if (0 > x) {
          var O = -1;
          break a;
        }
        b += x;
        if (x < k) {
          break;
        }
      }
      O = b;
    }
    n()[d >> 2] = O;
    return 0;
  } catch (ba) {
    if ("undefined" == typeof L || !(ba instanceof I)) {
      throw ba;
    }
    return ba.g;
  }
}
function ug(a, b, c, d, e) {
  if (w) {
    return M(44, 1, a, b, c, d, e);
  }
  try {
    y(b == b >>> 0 || b == (b | 0));
    y(c === (c | 0));
    var f = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
    if (isNaN(f)) {
      return 61;
    }
    var g = bd(a);
    Tc(g, f, d);
    G = [g.position >>> 0, (F = g.position, 1 <= +Math.abs(F) ? 0 < F ? (Math.min(+Math.floor(F / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((F - +(~~F >>> 0)) / 4294967296) >>> 0 : 0)];
    n()[e >> 2] = G[0];
    n()[e + 4 >> 2] = G[1];
    g.X && 0 === f && 0 === d && (g.X = null);
    return 0;
  } catch (k) {
    if ("undefined" == typeof L || !(k instanceof I)) {
      throw k;
    }
    return k.g;
  }
}
function vg(a, b, c, d) {
  if (w) {
    return M(45, 1, a, b, c, d);
  }
  try {
    a: {
      var e = bd(a);
      a = b;
      for (var f = b = 0; f < c; f++) {
        var g = q()[a >> 2], k = q()[a + 4 >> 2];
        a += 8;
        var l = Uc(e, h(), g, k);
        if (0 > l) {
          var p = -1;
          break a;
        }
        b += l;
      }
      p = b;
    }
    q()[d >> 2] = p;
    return 0;
  } catch (u) {
    if ("undefined" == typeof L || !(u instanceof I)) {
      throw u;
    }
    return u.g;
  }
}
function wg(a, b, c, d) {
  function e(A, D, r, B, x, O) {
    var ba = 10 === A ? 28 : 16;
    x = 10 === A ? Ld(x) : Kd(x);
    ba = ve(ba);
    x = Ed(ba, A, x, O);
    y(!x);
    x = ve(32);
    n()[x + 4 >> 2] = A;
    n()[x + 8 >> 2] = D;
    n()[x + 12 >> 2] = r;
    n()[x + 24 >> 2] = B;
    q()[x + 20 >> 2] = ba;
    10 === A ? n()[x + 16 >> 2] = 28 : n()[x + 16 >> 2] = 16;
    n()[x + 28 >> 2] = 0;
    return x;
  }
  if (w) {
    return M(46, 1, a, b, c, d);
  }
  var f = 0, g = 0, k = 0, l = 0, p = 0, u = 0;
  c && (k = n()[c >> 2], l = n()[c + 4 >> 2], p = n()[c + 8 >> 2], u = n()[c + 12 >> 2]);
  p && !u && (u = 2 === p ? 17 : 6);
  !p && u && (p = 17 === u ? 2 : 1);
  0 === u && (u = 6);
  0 === p && (p = 1);
  if (!a && !b) {
    return -2;
  }
  if (k & -1088 || 0 !== c && n()[c >> 2] & 2 && !a) {
    return -1;
  }
  if (k & 32) {
    return -2;
  }
  if (0 !== p && 1 !== p && 2 !== p) {
    return -7;
  }
  if (0 !== l && 2 !== l && 10 !== l) {
    return -6;
  }
  if (b && (b = C(b), g = parseInt(b, 10), isNaN(g))) {
    return k & 1024 ? -2 : -8;
  }
  if (!a) {
    return 0 === l && (l = 2), 0 === (k & 1) && (2 === l ? f = xg(2130706433) : f = [0, 0, 0, 1]), a = e(l, p, u, null, f, g), q()[d >> 2] = a, 0;
  }
  a = C(a);
  f = Bd(a);
  if (null !== f) {
    if (0 === l || 2 === l) {
      l = 2;
    } else if (10 === l && k & 8) {
      f = [0, 0, xg(65535), f], l = 10;
    } else {
      return -2;
    }
  } else {
    if (f = Cd(a), null !== f) {
      if (0 === l || 10 === l) {
        l = 10;
      } else {
        return -2;
      }
    }
  }
  if (null != f) {
    return a = e(l, p, u, a, f, g), q()[d >> 2] = a, 0;
  }
  if (k & 4) {
    return -2;
  }
  a = Id(a);
  f = Bd(a);
  0 === l ? l = 2 : 10 === l && (f = [0, 0, xg(65535), f]);
  a = e(l, p, u, null, f, g);
  q()[d >> 2] = a;
  return 0;
}
function T(a) {
  return cb.get(a);
}
function U() {
  z.apply(null, Array.from(arguments));
}
function yg() {
  Oa.apply(null, Array.from(arguments));
}
function zg(a, b) {
  N(a, b, "*");
}
function Ag(a, b, c) {
  const d = a.BYTES_PER_ELEMENT;
  return a.subarray(b / d, b / d + c);
}
function Bg(a, b, c) {
  const d = a.BYTES_PER_ELEMENT;
  return a.slice(b / d, b / d + c);
}
function Cg(a, b) {
  const c = [];
  Ag(n(), a, b).forEach(function(d) {
    c.push(C(d));
  });
  return c;
}
function V(a) {
  const b = ab(a) + 1, c = ve(b);
  $a(a, c, b);
  return c;
}
function Dg(a) {
  const b = a.length, c = ve(4 * b);
  for (let d = 0; d < b; d++) {
    n()[(c >> 2) + d] = V(a[d]);
  }
  return c;
}
function Eg(a, b) {
  for (let c = 0; c < b; c++) {
    S(n()[(a >> 2) + c]);
  }
  S(a);
}
var X = null, Fg = "en", Gg = 2, Hg = !1, Ig = !1, Jg = null, Kg = null, Lg = !1, Mg = !1, Ng = [];
function Og() {
  Ng.forEach(function(a) {
    try {
      Mc(a);
    } catch (b) {
      yg("Already unmounted", b);
    }
    Lg && K.W[a] && (K.W[a].close(), delete K.W[a]);
  });
  Ng = [];
  Mg = Lg = !1;
}
function Pg() {
  if (Mg) {
    return U("Already syncing!"), Promise.resolve();
  }
  Mg = !0;
  return new Promise(function(a) {
    Lc(!1, function(b) {
      b && U(`Failed to save IDB file system: ${b.message}`);
      Mg = !1;
      a(b);
    });
  });
}
function Qg(a, b) {
  const c = a.lastIndexOf("/");
  let d = "/";
  0 < c && (d = a.slice(0, c));
  try {
    hc(d);
  } catch (e) {
    44 !== e.g && U(e), jc(d);
  }
  kc(a, new Uint8Array(b));
}
function Rg() {
}
var Sg = [], Tg = null;
function Ug(a) {
  Tg.then(function() {
    const b = [];
    Sg.forEach(function(c) {
      b.push(new Promise(c));
    });
    return Promise.all(b);
  }).then(function() {
    return Pg();
  }).then(function() {
    setTimeout(function() {
      a();
    }, 0);
  });
}
var Vg = null, Wg = null, Xg = null, Yg = 0;
function Zg(a, b, c) {
  const d = {};
  a && (d.sampleRate = a);
  const e = new (window.AudioContext || window.webkitAudioContext)(d);
  Vg = e;
  e.onstatechange = function() {
    let f = 0;
    switch(e.state) {
      case "suspended":
        f = 0;
        break;
      case "running":
        f = 1;
        break;
      case "closed":
        f = 2;
    }
    b(f);
  };
  e.onstatechange();
  Yg = setInterval(function() {
    let f = 0;
    e.Vb && (f += Vg.Vb);
    e.Hc && (f += Vg.Hc);
    c(f);
  }, 1e3);
  Sg.push($g);
  return e.destination.channelCount;
}
function ah(a) {
  function b(c) {
    try {
      Wg = Vg.createMediaStreamSource(c), a(Wg);
    } catch (d) {
      U("Failed creating input.", d);
    }
  }
  if (Wg) {
    return 0;
  }
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({audio:!0}).then(b, function(c) {
      U("Error getting user media.", c);
    });
  } else {
    navigator.getUserMedia || (navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.T);
    if (!navigator.getUserMedia) {
      return U("getUserMedia not available."), 1;
    }
    navigator.getUserMedia({audio:!0}, b, function(c) {
      yg(c);
    });
  }
  return 0;
}
function $g(a) {
  const b = Vg;
  Vg = null;
  if (b) {
    Yg && (clearInterval(Yg), Yg = 0);
    Wg && (Wg.disconnect(), Wg = null);
    var c = Promise.resolve();
    Xg && (c = Xg.close());
    c.then(function() {
      return b.close();
    }).then(function() {
      b.onstatechange = null;
      a();
    }).catch(function(d) {
      b.onstatechange = null;
      U("Error closing AudioContext", d);
      a();
    });
  } else {
    a();
  }
}
function bh() {
  return w ? M(47, 1) : ah(function(a) {
    a.connect(Xg.rc());
  });
}
function ch() {
  if (w) {
    return M(48, 1);
  }
  if (Wg) {
    const a = Wg.mediaStream.getTracks();
    for (let b = 0; b < a.length; b++) {
      a[b].stop();
    }
    Wg.disconnect();
    Wg = null;
  }
}
function dh() {
  return w ? M(49, 1) : window.AudioContext || window.webkitAudioContext ? 1 : 0;
}
var eh = {promise:null, P:null, fb:null, create:function(a) {
  const b = v.locateFile("godot.audio.worklet.js");
  eh.promise = Vg.audioWorklet.addModule(b).then(function() {
    eh.P = new AudioWorkletNode(Vg, "godot-processor", {outputChannelCount:[a]});
    return Promise.resolve();
  });
  Xg = eh;
}, start:function(a, b, c) {
  eh.promise.then(function() {
    const d = eh.P;
    d.connect(Vg.destination);
    d.port.postMessage({cmd:"start", data:[c, a, b]});
    d.port.onmessage = function(e) {
      U(e.data);
    };
  });
}, Gd:function(a, b, c, d, e, f) {
  eh.fb = new function() {
    let g = 0, k = 0, l = 0;
    const p = new Float32Array(b);
    this.Kc = function(u) {
      const A = Ag(t(), d, e), D = k;
      let r = u.length, B = 0;
      k + r >= e && (B = e - k, A.set(u.subarray(0, B), k), r -= B, k = 0);
      r && A.set(u.subarray(B, r), k);
      f(D, u.length);
      k += r;
    };
    this.bc = function(u) {
      var A = eh.P.port;
      l += u;
      if (0 !== l) {
        u = Ag(t(), a, b);
        var D = u.length, r = l;
        c(g, l);
        if (g + l >= D) {
          const B = D - g;
          p.set(u.subarray(g, D));
          l -= B;
          g = 0;
        }
        0 < l && p.set(u.subarray(g, g + l), r - l);
        A.postMessage({cmd:"chunk", data:p.subarray(0, r)});
        g += l;
        l = 0;
      }
    };
  }();
  eh.promise.then(function() {
    const g = eh.P, k = Bg(t(), a, b);
    g.connect(Vg.destination);
    g.port.postMessage({cmd:"start_nothreads", data:[k, e]});
    g.port.onmessage = function(l) {
      eh.P && ("read" === l.data.cmd ? eh.fb.bc(l.data.data) : "input" === l.data.cmd ? (l = l.data.data, l.length > e ? U("Input chunk is too big") : eh.fb.Kc(l)) : U(l.data));
    };
  });
}, rc:function() {
  return eh.P;
}, close:function() {
  return new Promise(function(a) {
    null !== eh.promise && eh.promise.then(function() {
      eh.P.port.postMessage({cmd:"stop", data:null});
      eh.P.disconnect();
      eh.P.port.onmessage = null;
      eh.P = null;
      eh.promise = null;
      a();
    }).catch(function(b) {
      U(b);
    });
  });
}}, fh = "default", gh = !0, hh = {};
function ih(a) {
  let b = fh = a;
  a in hh && (a = hh[a], b = `url("${a.url}") ${a.x} ${a.y}, default`);
  gh && (X.style.cursor = b);
}
function jh() {
  X.style.cursor = "";
  fh = "default";
  gh = !0;
  Object.keys(hh).forEach(function(a) {
    URL.revokeObjectURL(hh[a]);
    delete hh[a];
  });
}
var kh = [];
function lh(a, b, c, d) {
  return -1 !== kh.findIndex(function(e) {
    return e.target === a && e.event === b && e.method === c && e.capture === d;
  });
}
function Y(a, b, c, d) {
  lh(a, b, c, d) || (kh.push(new function(e, f, g, k) {
    this.target = e;
    this.event = f;
    this.method = g;
    this.capture = k;
  }(a, b, c, d)), a.addEventListener(b, c, d));
}
function mh() {
  kh.forEach(function(a) {
    a.target.removeEventListener(a.event, a.method, a.capture);
  });
  kh.length = 0;
}
var nh = [0, 0], oh = !0;
function ph() {
  const a = document.fullscreenElement || document.yb || document.webkitFullscreenElement || document.msFullscreenElement;
  return a ? a === X : document.T || document.mozFullScreen || document.zb;
}
function qh() {
  if (!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled)) {
    return 1;
  }
  const a = X;
  try {
    const b = (a.requestFullscreen || a.msRequestFullscreen || a.mozRequestFullScreen || a.xd || a.webkitRequestFullscreen).call(a);
    b && b.catch(function() {
    });
  } catch (b) {
    return 1;
  }
  return 0;
}
function rh() {
  if (!ph()) {
    return 0;
  }
  try {
    const a = document.exitFullscreen();
    a && a.catch(function() {
    });
  } catch (a) {
    return 1;
  }
  return 0;
}
function sh() {
  var a = th();
  (a = hf[a]) && Qf(a);
}
function uh() {
  var a = ph();
  const b = 2 === Gg, c = X;
  let d = nh[0], e = nh[1];
  if (0 === Gg) {
    return c.width !== d || c.height !== e ? (nh = [c.width, c.height], sh(), 1) : 0;
  }
  var f = oh ? window.devicePixelRatio || 1 : 1;
  if (a || b) {
    d = window.innerWidth * f, e = window.innerHeight * f;
  }
  a = `${d / f}px`;
  f = `${e / f}px`;
  return c.style.width !== a || c.style.height !== f || c.width !== d || c.height !== e ? (c.width = d, c.height = e, c.style.width = a, c.style.height = f, sh(), 1) : 0;
}
var vh = null, wh = null;
function xh(a) {
  function b(c) {
    const d = document.createElement(c);
    d.style.display = "none";
    d.style.position = "absolute";
    d.style.zIndex = "-1";
    d.style.background = "transparent";
    d.style.padding = "0px";
    d.style.margin = "0px";
    d.style.overflow = "hidden";
    d.style.width = "0px";
    d.style.height = "0px";
    d.style.border = "0px";
    d.style.outline = "none";
    d.Ib = !0;
    d.disabled = !0;
    Y(d, "input", function() {
      const e = V(d.value);
      a(e, d.selectionEnd);
      S(e);
    }, !1);
    Y(d, "blur", function() {
      d.style.display = "none";
      d.Ib = !0;
      d.disabled = !0;
    }, !1);
    X.insertAdjacentElement("beforebegin", d);
    return d;
  }
  vh = b("input");
  wh = b("textarea");
  yh();
}
function zh() {
  vh && wh && [vh, wh].forEach(function(a) {
    a.blur();
    a.style.display = "none";
    a.value = "";
  });
}
function yh() {
  function a(c) {
    c.style.left = `${b.left}px`;
    c.style.top = `${b.top}px`;
    c.style.width = `${b.width}px`;
    c.style.height = `${b.height}px`;
  }
  if (vh && wh) {
    var b = X.getBoundingClientRect();
    a(vh);
    a(wh);
  }
}
var Ah = "", Bh = 0, Z = {};
function Ch(a) {
  const b = ++Bh;
  Z[b] = a;
  return b;
}
function Dh(a) {
  delete Z[a];
}
function Eh(a, b) {
  if (a = Z[a]) {
    b.value && a.Ta.push(b.value), a.cb = !1, a.done = b.done;
  }
}
function Fh(a, b) {
  if (a = Z[a]) {
    var c = !1;
    b.headers.forEach(function(d, e) {
      d = d.toLowerCase().trim();
      "transfer-encoding" === e.toLowerCase().trim() && "chunked" === d && (c = !0);
    });
    a.status = b.status;
    a.response = b;
    a.sa = b.body.getReader();
    a.ac = c;
  }
}
function Gh(a, b) {
  U(b);
  if (a = Z[a]) {
    a.error = b;
  }
}
function Hh(a, b, c, d) {
  const e = {request:null, response:null, sa:null, error:null, done:!1, cb:!1, status:0, Ta:[]}, f = Ch(e);
  e.request = fetch(b, {method:a, headers:c, body:d});
  e.request.then(Fh.bind(null, f)).catch(Gh.bind(null, f));
  return f;
}
function Ih(a) {
  const b = Z[a];
  b && (Dh(a), b.request && b.request.then(function(c) {
    c.abort();
  }).catch(function() {
  }));
}
var Jh = [];
function Kh() {
  try {
    const a = navigator.getGamepads();
    return a ? a : [];
  } catch (a) {
    return [];
  }
}
function Lh(a) {
  function b(d) {
    if (d.mapping) {
      var e = d.mapping;
    } else {
      var f = navigator.userAgent;
      e = "Unknown";
      0 <= f.indexOf("Android") ? e = "Android" : 0 <= f.indexOf("Linux") ? e = "Linux" : 0 <= f.indexOf("iPhone") ? e = "iOS" : 0 <= f.indexOf("Macintosh") ? e = "MacOSX" : 0 <= f.indexOf("Windows") && (e = "Windows");
      var g = d.id, k = /vendor: ([0-9a-f]{4}) product: ([0-9a-f]{4})/i, l = /^([0-9a-f]+)-([0-9a-f]+)-/i, p = f = "";
      k.test(g) ? (g = k.exec(g), f = g[1].padStart(4, "0"), p = g[2].padStart(4, "0")) : l.test(g) && (g = l.exec(g), f = g[1].padStart(4, "0"), p = g[2].padStart(4, "0"));
      e = f && p ? e + f + p : `${e}Unknown`;
    }
    f = e;
    e = V(d.id);
    f = V(f);
    a(d.index, 1, e, f);
    S(e);
    S(f);
  }
  Jh = [];
  const c = Kh();
  for (let d = 0; d < c.length; d++) {
    c[d] && b(c[d]);
  }
  Y(window, "gamepadconnected", function(d) {
    d.gamepad && b(d.gamepad);
  }, !1);
  Y(window, "gamepaddisconnected", function(d) {
    d.gamepad && a(d.gamepad.index, 0);
  }, !1);
}
var Mh = [], Nh = [];
function Oh(a) {
  a.isDirectory ? Ph(a) : a.isFile ? Qh(a) : U("Unrecognized entry...", a);
}
function Ph(a) {
  Mh.push(new Promise(function(b) {
    a.createReader().readEntries(function(c) {
      for (let d = 0; d < c.length; d++) {
        Oh(c[d]);
      }
      b();
    });
  }));
}
function Qh(a) {
  Mh.push(new Promise(function(b, c) {
    a.file(function(d) {
      const e = new FileReader();
      e.onload = function() {
        const f = {path:d.Cd || d.webkitRelativePath, name:d.name, type:d.type, size:d.size, data:e.result};
        f.path || (f.path = f.name);
        Nh.push(f);
        b();
      };
      e.onerror = function() {
        yg("Error reading file");
        c();
      };
      e.readAsArrayBuffer(d);
    }, function() {
      yg("Error!");
      c();
    });
  }));
}
function Rh(a, b) {
  0 === Mh.length ? a() : Mh.pop().then(function() {
    setTimeout(function() {
      Rh(a, b);
    }, 0);
  });
}
function Sh(a, b) {
  a.preventDefault();
  if (a.dataTransfer.items) {
    for (let c = 0; c < a.dataTransfer.items.length; c++) {
      const d = a.dataTransfer.items[c];
      let e = null;
      "getAsEntry" in d ? e = d.td() : "webkitGetAsEntry" in d && (e = d.webkitGetAsEntry());
      e && Oh(e);
    }
  } else {
    U("File upload not supported");
  }
  (new Promise(Rh)).then(function() {
    const c = `/tmp/drop-${parseInt(1073741824 * Math.random(), 10)}/`, d = [], e = [];
    Oc(c.slice(0, -1));
    Nh.forEach(f => {
      const g = f.path;
      Qg(c + g, f.data);
      f = g.indexOf("/");
      if (-1 === f) {
        d.push(c + g);
      } else {
        const k = g.substr(0, f);
        f = k.indexOf("/");
        0 > f && -1 === d.indexOf(c + k) && d.push(c + k);
      }
      e.push(c + g);
    });
    Mh = [];
    Nh = [];
    b(d);
    Ig ? Sg.push(function(f) {
      Th(e, c);
      f();
    }) : Th(e, c);
  });
}
function Th(a, b) {
  const c = [b.substr(0, b.length - 1)];
  a.forEach(function(d) {
    nc(d);
    d = d.replace(b, "");
    let e = d.lastIndexOf("/");
    for (; 0 < e;) {
      d = d.substr(0, e), -1 === c.indexOf(b + d) && c.push(b + d), e = d.lastIndexOf("/");
    }
  });
  c.sort(function(d, e) {
    d = (d.match(/\//g) || []).length;
    e = (e.match(/\//g) || []).length;
    return d > e ? -1 : d < e ? 1 : 0;
  }).forEach(function(d) {
    mc(d);
  });
}
function Uh(a) {
  return function(b) {
    Sh(b, a);
  };
}
function Vh(a) {
  return a.shiftKey + 0 + (a.altKey + 0 << 1) + (a.ctrlKey + 0 << 2) + (a.metaKey + 0 << 3);
}
function Wh(a, b) {
  const c = X;
  return [c.width / b.width * (a.clientX - b.x), c.height / b.height * (a.clientY - b.y)];
}
var Xh = !1;
function Yh(a, b) {
  b && b.active && (b.waiting && (Xh = !0, a()), Y(b, "updatefound", function() {
    const c = b.installing;
    Y(c, "statechange", function() {
      "installed" === c.state && (Xh = !0, a());
    });
  }));
}
function Zh(a, b, c, d, e) {
  if (a = Z[a]) {
    a.binaryType = "arraybuffer", a.onopen = function() {
      b();
    }, a.onclose = function() {
      e();
    }, a.onerror = function() {
      d();
    }, a.onmessage = function(f) {
      let g = 0;
      if (f.data instanceof ArrayBuffer) {
        f = new Uint8Array(f.data);
      } else {
        if (f.data instanceof Blob) {
          U("Blob type not supported");
          return;
        }
        if ("string" === typeof f.data) {
          g = 1;
          var k = new TextEncoder("utf-8");
          f = new Uint8Array(k.encode(f.data));
        } else {
          U("Unknown message type");
          return;
        }
      }
      k = f.length * f.BYTES_PER_ELEMENT;
      const l = ve(k);
      ka().set(f, l);
      c(l, k, g);
      S(l);
    };
  }
}
function $h(a) {
  if (a = Z[a]) {
    a.onopen = null, a.onmessage = null, a.onerror = null, a.onclose = null, a.close();
  }
}
function ai(a, b, c) {
  return (a = Z[a]) && void 0 !== a[b] ? a[b] : c;
}
var bi = {Fb:0, ld:1, connected:2, hc:3, jc:4, closed:5}, ci = {Fb:0, hd:1, connected:2, kd:2, hc:3, jc:4, closed:5}, di = {Fb:0, sd:1, complete:2}, ei = {Fd:0, "have-local-offer":1, "have-remote-offer":2, "have-local-pranswer":3, "have-remote-pranswer":4, closed:5};
function fi(a, b, c, d, e, f) {
  let g = null;
  try {
    g = new RTCPeerConnection(a);
  } catch (l) {
    return U(l), 0;
  }
  const k = Ch(g);
  "connectionState" in g && void 0 !== g.connectionState ? g.onconnectionstatechange = function() {
    Z[k] && b(bi[g.connectionState] || 0);
  } : g.oniceconnectionstatechange = function() {
    Z[k] && b(ci[g.iceConnectionState] || 0);
  };
  g.onicegatheringstatechange = function() {
    Z[k] && d(di[g.iceGatheringState] || 0);
  };
  g.onsignalingstatechange = function() {
    Z[k] && c(ei[g.signalingState] || 0);
  };
  g.onicecandidate = function(l) {
    if (Z[k] && (l = l.candidate) && l.candidate) {
      var p = V(l.candidate), u = V(l.sdpMid);
      e(u, l.sdpMLineIndex, p);
      S(p);
      S(u);
    }
  };
  g.ondatachannel = function(l) {
    Z[k] && (l = Ch(l.channel), f(l));
  };
  return k;
}
function gi(a, b, c) {
  Z[a] && (a = V(c.type), c = V(c.sdp), b(a, c), S(a), S(c));
}
function hi(a, b) {
  if (a = Z[a]) {
    a = V(a.protocol), b(a), S(a);
  }
}
function ii(a, b, c) {
  if (Z[a]) {
    a = 0;
    if (c.data instanceof ArrayBuffer) {
      c = new Uint8Array(c.data);
    } else {
      if (c.data instanceof Blob) {
        U("Blob type not supported");
        return;
      }
      if ("string" === typeof c.data) {
        a = 1;
        var d = new TextEncoder("utf-8");
        c = new Uint8Array(d.encode(c.data));
      } else {
        U("Unknown message type");
        return;
      }
    }
    d = c.length * c.BYTES_PER_ELEMENT;
    var e = ve(d);
    ka().set(c, e);
    b(e, d, a);
    S(e);
  }
}
function ji(a, b) {
  Z[a] && b();
}
function ki(a, b, c) {
  Z[a] && (a = V(c.reason), b(c.code, a, c.wasClean ? 1 : 0), S(a));
}
function li(a, b, c) {
  (a = Z[a]) && a.readyState < a.CLOSING && (c = C(c), a.close(b, c));
}
var mi = null, ni = null;
function oi(a) {
  const b = Ch(this);
  mi.set(a, b);
  let c = 1;
  this.Nc = function() {
    c++;
  };
  this.cd = function() {
    c--;
    0 === c && (Dh(b), mi.delete(a));
  };
  this.sc = function() {
    return a;
  };
  this.qc = function() {
    return b;
  };
}
function pi(a) {
  const b = mi.get(a);
  if (void 0 === b) {
    return (new oi(a)).qc();
  }
  Z[b].Nc();
  return b;
}
function qi(a) {
  a = Z[a];
  if (void 0 !== a) {
    return a.sc();
  }
}
function ri(a, b) {
  switch(a) {
    case 0:
      return null;
    case 1:
      return !!qd(b, "i64");
    case 2:
      return qd(b, "i64");
    case 3:
      return qd(b, "double");
    case 4:
      return C(qd(b, "*"));
    case 24:
      return qi(qd(b, "i64"));
  }
}
function si(a, b) {
  if (void 0 === a || null === a) {
    return 0;
  }
  const c = typeof a;
  if ("boolean" === c) {
    return N(b, a, "i64"), 1;
  }
  if ("number" === c) {
    if (Number.isInteger(a)) {
      return N(b, a, "i64"), 2;
    }
    N(b, a, "double");
    return 3;
  }
  if ("string" === c) {
    return a = V(a), N(b, a, "*"), 4;
  }
  a = pi(a);
  N(b, a, "i64");
  return 24;
}
function ti(a, b, c, d, e, f) {
  if (w) {
    return M(50, 1, a, b, c, d, e, f);
  }
  const g = R;
  if ("undefined" === typeof g.Eb) {
    const k = g.C.getExtension("OVR_multiview2");
    if (!k) {
      U("Trying to call glFramebufferTextureMultiviewOVR() without the OVR_multiview2 extension");
      return;
    }
    g.Eb = k;
  }
  g.Eb.framebufferTextureMultiviewOVR(a, b, Ff[c], d, e, f);
}
var ui = null, vi = null, wi = null, xi = null, yi = null, zi = null, Ai = null, Bi = 1, Ci = [, , , , , , , , , , , , , , , ], Di = [, , , , ], Ei = null, Fi = null, Gi = a => {
  vi && yi ? vi.requestAnimationFrame(function(b, c) {
    zi = c;
    Ai = c.getViewerPose(yi);
    a(b);
    Ai = zi = null;
  }) : Fi(a);
}, Hi = () => {
  De = null;
  Me++;
  Ma += 1;
  window.setTimeout(function() {
    Ke();
    Ve();
  }, 0);
}, Ii = () => {
  const a = Ai ? Ai.views.length : 1;
  var b = xi;
  if (b && Bi === a) {
    return b;
  }
  if (!vi || !wi) {
    return null;
  }
  b = ui;
  b = wi.createProjectionLayer({textureType:1 < a ? "texture-array" : "texture", colorFormat:b.RGBA8, depthFormat:b.DEPTH_COMPONENT24});
  vi.updateRenderState({layers:[b]});
  xi = b;
  Bi = a;
  return b;
}, Ji = () => {
  if (!Ai) {
    return null;
  }
  const a = Ii();
  return null === a ? null : wi.getViewSubImage(a, Ai.views[0]);
}, Ki = a => {
  if (void 0 !== a.name) {
    return a.name;
  }
  const b = Of(Ff);
  a.name = b;
  Ff[b] = a;
  return b;
}, Li = a => {
  let b = -1;
  if ("tracked-pointer" === a.targetRayMode && "left" === a.handedness) {
    b = 0;
  } else if ("tracked-pointer" === a.targetRayMode && "right" === a.handedness) {
    b = 1;
  } else {
    for (var c = 2; 16 > c; c++) {
      if (!Ci[c]) {
        b = c;
        break;
      }
    }
  }
  if (0 <= b && (Ci[b] = a, a.name = b, "screen" === a.targetRayMode)) {
    c = -1;
    for (let d = 0; 5 > d; d++) {
      if (!Di[d]) {
        c = d;
        break;
      }
    }
    0 <= c && (Di[c] = a, a.Qa = c);
  }
  return b;
}, Mi = a => {
  if (void 0 !== a.name) {
    const b = a.name;
    0 <= b && 16 > b && (Ci[b] = null);
    void 0 !== a.Qa && (a = a.Qa, 0 <= a && 5 > a && (Di[a] = null));
    return b;
  }
  return -1;
};
function Ni(a) {
  if (w) {
    return M(51, 1, a);
  }
  if (!yi || !yi.boundsGeometry) {
    return 0;
  }
  const b = yi.boundsGeometry.length;
  if (0 === b) {
    return 0;
  }
  const c = ve(12 * b);
  for (let d = 0; d < b; d++) {
    const e = yi.boundsGeometry[d];
    N(c + 12 * d, e.x, "float");
    N(c + 4 * (3 * d + 1), e.y, "float");
    N(c + 4 * (3 * d + 2), e.z, "float");
  }
  N(a, c, "i32");
  return b;
}
function Oi() {
  if (w) {
    return M(52, 1);
  }
  const a = Ji();
  return null === a ? 0 : Ki(a.colorTexture);
}
function Pi() {
  if (w) {
    return M(53, 1);
  }
  const a = Ji();
  return null !== a && a.depthStencilTexture ? Ki(a.depthStencilTexture) : 0;
}
function Qi() {
  return w ? M(54, 1) : vi && void 0 !== vi.frameRate ? vi.frameRate : 0;
}
function Ri(a, b) {
  if (w) {
    return M(55, 1, a, b);
  }
  if (!vi || !Ai) {
    return !1;
  }
  a = Ai.views[a].projectionMatrix;
  for (let c = 0; 16 > c; c++) {
    N(b + 4 * c, a[c], "float");
  }
  return !0;
}
function Si(a) {
  if (w) {
    return M(56, 1, a);
  }
  const b = Ji();
  if (null === b) {
    return !1;
  }
  N(a + 0, b.viewport.width, "i32");
  N(a + 4, b.viewport.height, "i32");
  return !0;
}
function Ti(a) {
  if (w) {
    return M(57, 1, a);
  }
  if (!vi || void 0 === vi.supportedFrameRates) {
    return 0;
  }
  const b = vi.supportedFrameRates.length;
  if (0 === b) {
    return 0;
  }
  const c = ve(4 * b);
  for (let d = 0; d < b; d++) {
    N(c + 4 * d, vi.supportedFrameRates[d], "float");
  }
  N(a, c, "i32");
  return b;
}
function Ui(a, b) {
  if (w) {
    return M(58, 1, a, b);
  }
  if (!vi || !Ai) {
    return !1;
  }
  var c = Ai.views;
  a = 0 <= a ? c[a].transform.matrix : Ai.transform.matrix;
  for (c = 0; 16 > c; c++) {
    N(b + 4 * c, a[c], "float");
  }
  return !0;
}
function Vi() {
  if (w) {
    return M(59, 1);
  }
  const a = Ji();
  return null !== a && a.motionVectorTexture ? Ki(a.motionVectorTexture) : 0;
}
function Wi() {
  if (w) {
    return M(60, 1);
  }
  if (!vi || !Ai) {
    return 1;
  }
  const a = Ai.views.length;
  return 0 < a ? a : 1;
}
function Xi() {
  return w ? M(61, 1) : vi && vi.visibilityState ? V(vi.visibilityState) : 0;
}
function Yi(a, b, c, d, e, f, g, k, l) {
  if (w) {
    return M(62, 1, a, b, c, d, e, f, g, k, l);
  }
  null === Fi && (Fi = Ie);
  Ie = Gi;
  a = C(a);
  b = C(b).split(",").map(x => x.trim()).filter(x => "" !== x);
  c = C(c).split(",").map(x => x.trim()).filter(x => "" !== x);
  const p = C(d).split(",").map(x => x.trim()), u = T(e), A = T(f), D = T(g), r = T(k), B = T(l);
  d = {};
  0 < b.length && (d.requiredFeatures = b);
  0 < c.length && (d.optionalFeatures = c);
  navigator.xr.requestSession(a, d).then(function(x) {
    vi = x;
    x.addEventListener("end", function() {
      A();
    });
    x.addEventListener("inputsourceschange", function(ia) {
      ia.added.forEach(Li);
      ia.removed.forEach(Mi);
    });
    ["selectstart", "selectend", "squeezestart", "squeezeend"].forEach((ia, la) => {
      x.addEventListener(ia, function(W) {
        zi = W.frame;
        W = W.inputSource;
        r(la, void 0 !== W ? W.name : -1);
        zi = null;
      });
    });
    x.addEventListener("visibilitychange", function() {
      const ia = V("visibility_state_changed");
      B(ia);
      S(ia);
    });
    Ei = B;
    const O = th(), ba = hf[O].C;
    ui = ba;
    ba.makeXRCompatible().then(function() {
      function ia(W, ya) {
        yi = W;
        W.onreset = function() {
          const Ka = V("reference_space_reset");
          B(Ka);
          S(Ka);
        };
        Hi();
        window.setTimeout(function() {
          const Ka = V(ya);
          u(Ka);
          S(Ka);
        }, 0);
      }
      function la() {
        const W = p.shift();
        x.requestReferenceSpace(W).then(ya => {
          ia(ya, W);
        }).catch(() => {
          if (0 === p.length) {
            const ya = V("Unable to get any of the requested reference space types");
            D(ya);
            S(ya);
          } else {
            la();
          }
        });
      }
      wi = new XRWebGLBinding(x, ba);
      Ii();
      la();
    }).catch(function(ia) {
      ia = V(`Unable to make WebGL context compatible with WebXR: ${ia}`);
      D(ia);
      S(ia);
    });
  }).catch(function(x) {
    x = V(`Unable to start session: ${x}`);
    D(x);
    S(x);
  });
}
function Zi(a, b) {
  if (w) {
    return M(63, 1, a, b);
  }
  const c = C(a), d = T(b);
  navigator.xr ? navigator.xr.isSessionSupported(c).then(function(e) {
    const f = V(c);
    d(f, e ? 1 : 0);
    S(f);
  }) : (a = V(c), d(a, 0), S(a));
}
function $i() {
  return w ? M(64, 1) : !!navigator.xr;
}
function aj() {
  if (w) {
    return M(65, 1);
  }
  vi && vi.end().catch(() => {
  });
  Ai = zi = yi = xi = wi = vi = null;
  Bi = 1;
  Ci = Array(16);
  Di = Array(5);
  Ei = null;
  null === Fi && (Fi = Ie);
  Ie = Fi;
  Hi();
}
function bj(a, b, c, d, e, f, g, k, l, p, u) {
  if (w) {
    return M(66, 1, a, b, c, d, e, f, g, k, l, p, u);
  }
  if (!vi || !zi) {
    return 0;
  }
  if (0 > a || a >= Ci.length || !Ci[a]) {
    return !1;
  }
  a = Ci[a];
  const A = zi, D = yi;
  var r = A.getPose(a.targetRaySpace, D);
  if (!r) {
    return !1;
  }
  r = r.transform.matrix;
  for (let B = 0; 16 > B; B++) {
    N(b + 4 * B, r[B], "float");
  }
  b = 0;
  switch(a.targetRayMode) {
    case "gaze":
      b = 1;
      break;
    case "tracked-pointer":
      b = 2;
      break;
    case "screen":
      b = 3;
  }
  N(c, b, "i32");
  N(d, void 0 !== a.Qa ? a.Qa : -1, "i32");
  c = !1;
  if (a.gripSpace && (d = A.getPose(a.gripSpace, D))) {
    c = d.transform.matrix;
    for (d = 0; 16 > d; d++) {
      N(f + 4 * d, c[d], "float");
    }
    c = !0;
  }
  N(e, c ? 1 : 0, "i32");
  e = !1;
  c = f = 0;
  if (a.gamepad) {
    "xr-standard" === a.gamepad.mapping && (e = !0);
    f = Math.min(a.gamepad.buttons.length, 10);
    for (c = 0; c < f; c++) {
      N(l + 4 * c, a.gamepad.buttons[c].value, "float");
    }
    c = Math.min(a.gamepad.axes.length, 10);
    for (l = 0; l < c; l++) {
      N(u + 4 * l, a.gamepad.axes[l], "float");
    }
  }
  N(g, e ? 1 : 0, "i32");
  N(k, f, "i32");
  N(p, c, "i32");
  return !0;
}
function cj(a) {
  if (w) {
    return M(67, 1, a);
  }
  vi && void 0 !== vi.updateTargetFrameRate && vi.updateTargetFrameRate(a).then(() => {
    const b = V("display_refresh_rate_changed");
    Ei(b);
    S(b);
  });
}
function dj(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
var ej = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fj = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function gj(a, b, c, d) {
  function e(r, B, x) {
    for (r = "number" == typeof r ? r.toString() : r || ""; r.length < B;) {
      r = x[0] + r;
    }
    return r;
  }
  function f(r, B) {
    return e(r, B, "0");
  }
  function g(r, B) {
    function x(ba) {
      return 0 > ba ? -1 : 0 < ba ? 1 : 0;
    }
    var O;
    0 === (O = x(r.getFullYear() - B.getFullYear())) && 0 === (O = x(r.getMonth() - B.getMonth())) && (O = x(r.getDate() - B.getDate()));
    return O;
  }
  function k(r) {
    switch(r.getDay()) {
      case 0:
        return new Date(r.getFullYear() - 1, 11, 29);
      case 1:
        return r;
      case 2:
        return new Date(r.getFullYear(), 0, 3);
      case 3:
        return new Date(r.getFullYear(), 0, 2);
      case 4:
        return new Date(r.getFullYear(), 0, 1);
      case 5:
        return new Date(r.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(r.getFullYear() - 1, 11, 30);
    }
  }
  function l(r) {
    var B = r.ba;
    for (r = new Date((new Date(r.ca + 1900, 0, 1)).getTime()); 0 < B;) {
      var x = r.getMonth(), O = (dj(r.getFullYear()) ? ej : fj)[x];
      if (B > O - r.getDate()) {
        B -= O - r.getDate() + 1, r.setDate(1), 11 > x ? r.setMonth(x + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
      } else {
        r.setDate(r.getDate() + B);
        break;
      }
    }
    x = new Date(r.getFullYear() + 1, 0, 4);
    B = k(new Date(r.getFullYear(), 0, 4));
    x = k(x);
    return 0 >= g(B, r) ? 0 >= g(x, r) ? r.getFullYear() + 1 : r.getFullYear() : r.getFullYear() - 1;
  }
  var p = n()[d + 40 >> 2];
  d = {Zc:n()[d >> 2], Yc:n()[d + 4 >> 2], Oa:n()[d + 8 >> 2], hb:n()[d + 12 >> 2], Pa:n()[d + 16 >> 2], ca:n()[d + 20 >> 2], N:n()[d + 24 >> 2], ba:n()[d + 28 >> 2], Id:n()[d + 32 >> 2], Xc:n()[d + 36 >> 2], $c:p ? C(p) : ""};
  c = C(c);
  p = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
  for (var u in p) {
    c = c.replace(new RegExp(u, "g"), p[u]);
  }
  var A = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), D = "January February March April May June July August September October November December".split(" ");
  p = {"%a":function(r) {
    return A[r.N].substring(0, 3);
  }, "%A":function(r) {
    return A[r.N];
  }, "%b":function(r) {
    return D[r.Pa].substring(0, 3);
  }, "%B":function(r) {
    return D[r.Pa];
  }, "%C":function(r) {
    return f((r.ca + 1900) / 100 | 0, 2);
  }, "%d":function(r) {
    return f(r.hb, 2);
  }, "%e":function(r) {
    return e(r.hb, 2, " ");
  }, "%g":function(r) {
    return l(r).toString().substring(2);
  }, "%G":function(r) {
    return l(r);
  }, "%H":function(r) {
    return f(r.Oa, 2);
  }, "%I":function(r) {
    r = r.Oa;
    0 == r ? r = 12 : 12 < r && (r -= 12);
    return f(r, 2);
  }, "%j":function(r) {
    for (var B = 0, x = 0; x <= r.Pa - 1; B += (dj(r.ca + 1900) ? ej : fj)[x++]) {
    }
    return f(r.hb + B, 3);
  }, "%m":function(r) {
    return f(r.Pa + 1, 2);
  }, "%M":function(r) {
    return f(r.Yc, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(r) {
    return 0 <= r.Oa && 12 > r.Oa ? "AM" : "PM";
  }, "%S":function(r) {
    return f(r.Zc, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(r) {
    return r.N || 7;
  }, "%U":function(r) {
    return f(Math.floor((r.ba + 7 - r.N) / 7), 2);
  }, "%V":function(r) {
    var B = Math.floor((r.ba + 7 - (r.N + 6) % 7) / 7);
    2 >= (r.N + 371 - r.ba - 2) % 7 && B++;
    if (B) {
      53 == B && (x = (r.N + 371 - r.ba) % 7, 4 == x || 3 == x && dj(r.ca) || (B = 1));
    } else {
      B = 52;
      var x = (r.N + 7 - r.ba - 1) % 7;
      (4 == x || 5 == x && dj(r.ca % 400 - 1)) && B++;
    }
    return f(B, 2);
  }, "%w":function(r) {
    return r.N;
  }, "%W":function(r) {
    return f(Math.floor((r.ba + 7 - (r.N + 6) % 7) / 7), 2);
  }, "%y":function(r) {
    return (r.ca + 1900).toString().substring(2);
  }, "%Y":function(r) {
    return r.ca + 1900;
  }, "%z":function(r) {
    r = r.Xc;
    var B = 0 <= r;
    r = Math.abs(r) / 60;
    return (B ? "+" : "-") + String("0000" + (r / 60 * 100 + r % 60)).slice(-4);
  }, "%Z":function(r) {
    return r.$c;
  }, "%%":function() {
    return "%";
  }};
  c = c.replace(/%%/g, "\x00\x00");
  for (u in p) {
    c.includes(u) && (c = c.replace(new RegExp(u, "g"), p[u](d)));
  }
  c = c.replace(/\0\0/g, "%");
  u = Vb(c, !1);
  if (u.length > b) {
    return 0;
  }
  ud(u, a);
  return u.length - 1;
}
"undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
function hj(a) {
  var b = v["_" + a];
  y(b, "Cannot call unknown function " + a + ", make sure it is exported");
  return b;
}
function ij(a, b, c, d) {
  var e = {string:p => {
    var u = 0;
    if (null !== p && void 0 !== p && 0 !== p) {
      var A = (p.length << 2) + 1;
      u = bg(A);
      $a(p, u, A);
    }
    return u;
  }, array:p => {
    var u = bg(p.length);
    ud(p, u);
    return u;
  }};
  a = hj(a);
  var f = [], g = 0;
  y("array" !== b, 'Return type should not be "array".');
  if (d) {
    for (var k = 0; k < d.length; k++) {
      var l = e[c[k]];
      l ? (0 === g && (g = nd()), f[k] = l(d[k])) : f[k] = d[k];
    }
  }
  c = a.apply(null, f);
  return c = function(p) {
    0 !== g && od(g);
    return "string" === b ? C(p) : "boolean" === b ? !!p : p;
  }(c);
}
H.Ya();
function Cc(a, b, c, d) {
  a || (a = this);
  this.parent = a;
  this.u = a.u;
  this.I = null;
  this.id = tc++;
  this.name = b;
  this.mode = c;
  this.h = {};
  this.j = {};
  this.ra = d;
}
Object.defineProperties(Cc.prototype, {read:{get:function() {
  return 365 === (this.mode & 365);
}, set:function(a) {
  a ? this.mode |= 365 : this.mode &= -366;
}}, write:{get:function() {
  return 146 === (this.mode & 146);
}, set:function(a) {
  a ? this.mode |= 146 : this.mode &= -147;
}}});
sb();
uc = Array(4096);
yb(J, "/");
Oc("/tmp");
Oc("/home");
Oc("/home/web_user");
(() => {
  Oc("/dev");
  Yb(259, {read:() => 0, write:(b, c, d, e) => e});
  Pc("/dev/null", 259);
  Xb(1280, $b);
  Xb(1536, ac);
  Pc("/dev/tty", 1280);
  Pc("/dev/tty1", 1536);
  var a = Rb();
  tb("random", a);
  tb("urandom", a);
  Oc("/dev/shm");
  Oc("/dev/shm/tmp");
})();
(() => {
  Oc("/proc");
  var a = Oc("/proc/self");
  Oc("/proc/self/fd");
  yb({u:() => {
    var b = cc(a, "fd", 16895, 73);
    b.h = {na:(c, d) => {
      var e = sc[+d];
      if (!e) {
        throw new I(8);
      }
      c = {parent:null, u:{oa:"fake"}, h:{ta:() => e.path}};
      return c.parent = c;
    }};
    return b;
  }}, "/proc/self/fd");
})();
pc = {EPERM:63, ENOENT:44, ESRCH:71, EINTR:27, EIO:29, ENXIO:60, E2BIG:1, ENOEXEC:45, EBADF:8, ECHILD:12, EAGAIN:6, EWOULDBLOCK:6, ENOMEM:48, EACCES:2, EFAULT:21, ENOTBLK:105, EBUSY:10, EEXIST:20, EXDEV:75, ENODEV:43, ENOTDIR:54, EISDIR:31, EINVAL:28, ENFILE:41, EMFILE:33, ENOTTY:59, ETXTBSY:74, EFBIG:22, ENOSPC:51, ESPIPE:70, EROFS:69, EMLINK:34, EPIPE:64, EDOM:18, ERANGE:68, ENOMSG:49, EIDRM:24, ECHRNG:106, EL2NSYNC:156, EL3HLT:107, EL3RST:108, ELNRNG:109, EUNATCH:110, ENOCSI:111, EL2HLT:112, EDEADLK:16, 
ENOLCK:46, EBADE:113, EBADR:114, EXFULL:115, ENOANO:104, EBADRQC:103, EBADSLT:102, EDEADLOCK:16, EBFONT:101, ENOSTR:100, ENODATA:116, ETIME:117, ENOSR:118, ENONET:119, ENOPKG:120, EREMOTE:121, ENOLINK:47, EADV:122, ESRMNT:123, ECOMM:124, EPROTO:65, EMULTIHOP:36, EDOTDOT:125, EBADMSG:9, ENOTUNIQ:126, EBADFD:127, EREMCHG:128, ELIBACC:129, ELIBBAD:130, ELIBSCN:131, ELIBMAX:132, ELIBEXEC:133, ENOSYS:52, ENOTEMPTY:55, ENAMETOOLONG:37, ELOOP:32, EOPNOTSUPP:138, EPFNOSUPPORT:139, ECONNRESET:15, ENOBUFS:42, 
EAFNOSUPPORT:5, EPROTOTYPE:67, ENOTSOCK:57, ENOPROTOOPT:50, ESHUTDOWN:140, ECONNREFUSED:14, EADDRINUSE:3, ECONNABORTED:13, ENETUNREACH:40, ENETDOWN:38, ETIMEDOUT:73, EHOSTDOWN:142, EHOSTUNREACH:23, EINPROGRESS:26, EALREADY:7, EDESTADDRREQ:17, EMSGSIZE:35, EPROTONOSUPPORT:66, ESOCKTNOSUPPORT:137, EADDRNOTAVAIL:4, ENETRESET:39, EISCONN:30, ENOTCONN:53, ETOOMANYREFS:141, EUSERS:136, EDQUOT:19, ESTALE:72, ENOTSUP:138, ENOMEDIUM:148, EILSEQ:25, EOVERFLOW:61, ECANCELED:11, ENOTRECOVERABLE:56, EOWNERDEAD:62, 
ESTRPIPE:135};
v.requestFullscreen = function(a, b) {
  nf(a, b);
};
v.requestFullScreen = function() {
  za("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
};
v.requestAnimationFrame = function(a) {
  Ie(a);
};
v.setCanvasSize = function(a, b, c) {
  pf(v.canvas, a, b);
  c || qf();
};
v.pauseMainLoop = function() {
  De = null;
  Me++;
};
v.resumeMainLoop = function() {
  Ve();
};
v.getUserMedia = function() {
  window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.getUserMedia(void 0);
};
v.createContext = function(a, b, c, d) {
  return ef(a, b, c, d);
};
for (var P, jj = new Int32Array(288), kj = 0; 288 > kj; ++kj) {
  $f[kj] = jj.subarray(0, kj + 1);
}
var lj = new Float32Array(288);
for (kj = 0; 288 > kj; ++kj) {
  ag[kj] = lj.subarray(0, kj + 1);
}
v.request_quit = function() {
  Rg();
};
v.onExit = function(a) {
  const b = Kg;
  Og();
  X = null;
  Fg = "en";
  Gg = 2;
  Ig = Hg = !1;
  Kg = Jg = null;
  b && b(a);
};
Tg = Promise.resolve();
v.initConfig = function(a) {
  Gg = a.canvasResizePolicy;
  X = a.canvas;
  Fg = a.locale || Fg;
  Hg = a.virtualKeyboard;
  Ig = !!a.persistentDrops;
  Jg = a.onExecute;
  Kg = a.onExit;
  a.focusCanvas && X.focus();
};
v.initFS = function(a) {
  Lg = !1;
  if (!Array.isArray(a)) {
    return Promise.reject(Error("Persistent paths must be an array"));
  }
  if (!a.length) {
    return Promise.resolve();
  }
  Ng = a.slice();
  Ng.forEach(function(b) {
    try {
      hc(b);
    } catch (c) {
      44 !== c.g && U(c), jc(b);
    }
    yb(K, b);
  });
  return new Promise(function(b) {
    Lc(!0, function(c) {
      c ? (Ng = [], Lg = !1, yg(`IndexedDB not available: ${c.message}`)) : Lg = !0;
      b(c);
    });
  });
};
v.copyToFS = Qg;
Sg.push(function(a) {
  jh();
  a();
});
Sg.push(function(a) {
  mh();
  a();
});
Sg.push(function(a) {
  vh && (vh.remove(), vh = null);
  wh && (wh.remove(), wh = null);
  a();
});
mi = new Map();
var mj = [null, cd, ed, xd, zd, Jd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, we, tf, eg, hg, lg, pg, qg, rg, sg, tg, ug, vg, wg, bh, ch, dh, ti, Ni, Oi, Pi, Qi, Ri, Si, Ti, Ui, Vi, Wi, Xi, Yi, Zi, $i, aj, bj, cj], yj = {__assert_fail:function(a, b, c, d) {
  za("Assertion failed: " + C(a) + ", at: " + [b ? C(b) : "unknown filename", c, d ? C(d) : "unknown function"]);
}, __call_sighandler:function(a, b) {
  sd(a)(b);
}, __cxa_allocate_exception:function(a) {
  return ve(a + 24) + 24;
}, __cxa_throw:function(a, b, c) {
  (new vd(a)).Ya(b, c);
  wd++;
  throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.";
}, __emscripten_init_main_thread_js:function(a) {
  nj(a, !Fa, 1, !Ea);
  H.Qb();
}, __emscripten_thread_cleanup:function(a) {
  w ? postMessage({cmd:"cleanupThread", thread:a}) : Lb(a);
}, __pthread_create_js:yd, __syscall__newselect:zd, __syscall_accept4:Jd, __syscall_bind:Qd, __syscall_chdir:Rd, __syscall_chmod:Sd, __syscall_connect:Td, __syscall_faccessat:Ud, __syscall_fchmod:Vd, __syscall_fcntl64:Wd, __syscall_getcwd:Yd, __syscall_getdents64:Zd, __syscall_getsockname:$d, __syscall_getsockopt:ae, __syscall_ioctl:be, __syscall_listen:ce, __syscall_lstat64:de, __syscall_mkdirat:ee, __syscall_newfstatat:fe, __syscall_openat:ge, __syscall_poll:he, __syscall_readlinkat:ie, __syscall_recvfrom:je, 
__syscall_renameat:ke, __syscall_rmdir:le, __syscall_sendto:me, __syscall_socket:ne, __syscall_stat64:oe, __syscall_statfs64:pe, __syscall_symlink:qe, __syscall_unlinkat:re, _dlinit:function() {
}, _dlopen_js:function() {
  za("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking");
}, _dlsym_js:function() {
  za("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking");
}, _emscripten_date_now:function() {
  return Date.now();
}, _emscripten_default_pthread_stack_size:function() {
  return 2097152;
}, _emscripten_get_now_is_monotonic:function() {
  return !0;
}, _emscripten_notify_task_queue:function(a, b, c, d) {
  if (a == b) {
    setTimeout(() => ld(d));
  } else if (w) {
    postMessage({targetThread:a, cmd:"processProxyingQueue", queue:d});
  } else {
    b = H.J[a];
    if (!b) {
      z("Cannot send message to thread with ID " + a + ", unknown thread ID!");
      return;
    }
    b.postMessage({cmd:"processProxyingQueue", queue:d});
  }
  return 1;
}, _emscripten_proxied_gl_context_activated_from_main_browser_thread:function(a) {
  P = v.la = R = a;
}, _emscripten_set_offscreencanvas_size:function() {
  z("emscripten_set_offscreencanvas_size: Build with -sOFFSCREENCANVAS_SUPPORT=1 to enable transferring canvases to pthreads.");
  return -1;
}, _emscripten_throw_longjmp:function() {
  throw Infinity;
}, _gmtime_js:function(a, b) {
  a = new Date(1e3 * te(a));
  n()[b >> 2] = a.getUTCSeconds();
  n()[b + 4 >> 2] = a.getUTCMinutes();
  n()[b + 8 >> 2] = a.getUTCHours();
  n()[b + 12 >> 2] = a.getUTCDate();
  n()[b + 16 >> 2] = a.getUTCMonth();
  n()[b + 20 >> 2] = a.getUTCFullYear() - 1900;
  n()[b + 24 >> 2] = a.getUTCDay();
  a = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
  n()[b + 28 >> 2] = a;
}, _localtime_js:function(a, b) {
  a = new Date(1e3 * te(a));
  n()[b >> 2] = a.getSeconds();
  n()[b + 4 >> 2] = a.getMinutes();
  n()[b + 8 >> 2] = a.getHours();
  n()[b + 12 >> 2] = a.getDate();
  n()[b + 16 >> 2] = a.getMonth();
  n()[b + 20 >> 2] = a.getFullYear() - 1900;
  n()[b + 24 >> 2] = a.getDay();
  var c = new Date(a.getFullYear(), 0, 1), d = (a.getTime() - c.getTime()) / 864E5 | 0;
  n()[b + 28 >> 2] = d;
  n()[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
  d = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
  c = c.getTimezoneOffset();
  a = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0;
  n()[b + 32 >> 2] = a;
}, _tzset_js:xe, abort:function() {
  za("native code called abort()");
}, emscripten_cancel_main_loop:function() {
  De = null;
  Me++;
  Be = null;
}, emscripten_check_blocking_allowed:function() {
  Fa || Ya("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
}, emscripten_console_error:function(a) {
  y("number" == typeof a);
  console.error(C(a));
}, emscripten_force_exit:tf, emscripten_get_now:Fe, emscripten_glActiveTexture:function(a) {
  P.activeTexture(a);
}, emscripten_glAttachShader:function(a, b) {
  P.attachShader(Cf[a], Gf[b]);
}, emscripten_glBeginTransformFeedback:function(a) {
  P.beginTransformFeedback(a);
}, emscripten_glBindBuffer:function(a, b) {
  35051 == a ? P.Ua = b : 35052 == a && (P.da = b);
  P.bindBuffer(a, Bf[b]);
}, emscripten_glBindBufferBase:function(a, b, c) {
  P.bindBufferBase(a, b, Bf[c]);
}, emscripten_glBindBufferRange:function(a, b, c, d, e) {
  P.bindBufferRange(a, b, Bf[c], d, e);
}, emscripten_glBindFramebuffer:function(a, b) {
  P.bindFramebuffer(a, b ? Df[b] : R.Va);
}, emscripten_glBindRenderbuffer:function(a, b) {
  P.bindRenderbuffer(a, Ef[b]);
}, emscripten_glBindTexture:function(a, b) {
  P.bindTexture(a, Ff[b]);
}, emscripten_glBindVertexArray:function(a) {
  P.bindVertexArray(Hf[a]);
}, emscripten_glBlendColor:function(a, b, c, d) {
  P.blendColor(a, b, c, d);
}, emscripten_glBlendEquation:function(a) {
  P.blendEquation(a);
}, emscripten_glBlendFunc:function(a, b) {
  P.blendFunc(a, b);
}, emscripten_glBlendFuncSeparate:function(a, b, c, d) {
  P.blendFuncSeparate(a, b, c, d);
}, emscripten_glBlitFramebuffer:function(a, b, c, d, e, f, g, k, l, p) {
  P.blitFramebuffer(a, b, c, d, e, f, g, k, l, p);
}, emscripten_glBufferData:function(a, b, c, d) {
  2 <= R.version ? c && b ? P.bufferData(a, ka(), d, c, b) : P.bufferData(a, b, d) : P.bufferData(a, c ? ka().subarray(c, c + b) : b, d);
}, emscripten_glBufferSubData:function(a, b, c, d) {
  2 <= R.version ? c && P.bufferSubData(a, b, ka(), d, c) : P.bufferSubData(a, b, ka().subarray(d, d + c));
}, emscripten_glCheckFramebufferStatus:function(a) {
  return P.checkFramebufferStatus(a);
}, emscripten_glClear:function(a) {
  P.clear(a);
}, emscripten_glClearBufferfv:function(a, b, c) {
  P.clearBufferfv(a, b, t(), c >> 2);
}, emscripten_glClearColor:function(a, b, c, d) {
  P.clearColor(a, b, c, d);
}, emscripten_glClearDepthf:function(a) {
  P.clearDepth(a);
}, emscripten_glColorMask:function(a, b, c, d) {
  P.colorMask(!!a, !!b, !!c, !!d);
}, emscripten_glCompileShader:function(a) {
  P.compileShader(Gf[a]);
}, emscripten_glCompressedTexImage2D:function(a, b, c, d, e, f, g, k) {
  2 <= R.version ? P.da || !g ? P.compressedTexImage2D(a, b, c, d, e, f, g, k) : P.compressedTexImage2D(a, b, c, d, e, f, ka(), k, g) : P.compressedTexImage2D(a, b, c, d, e, f, k ? ka().subarray(k, k + g) : null);
}, emscripten_glCopyBufferSubData:function(a, b, c, d, e) {
  P.copyBufferSubData(a, b, c, d, e);
}, emscripten_glCreateProgram:function() {
  var a = Of(Cf), b = P.createProgram();
  b.name = a;
  b.Ea = b.Ca = b.Da = 0;
  b.ib = 1;
  Cf[a] = b;
  return a;
}, emscripten_glCreateShader:function(a) {
  var b = Of(Gf);
  Gf[b] = P.createShader(a);
  return b;
}, emscripten_glCullFace:function(a) {
  P.cullFace(a);
}, emscripten_glDeleteBuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = n()[b + 4 * c >> 2], e = Bf[d];
    e && (P.deleteBuffer(e), e.name = 0, Bf[d] = null, d == P.Ua && (P.Ua = 0), d == P.da && (P.da = 0));
  }
}, emscripten_glDeleteFramebuffers:function(a, b) {
  for (var c = 0; c < a; ++c) {
    var d = n()[b + 4 * c >> 2], e = Df[d];
    e && (P.deleteFramebuffer(e), e.name = 0, Df[d] = null);
  }
}, emscripten_glDeleteProgram:function(a) {
  if (a) {
    var b = Cf[a];
    b ? (P.deleteProgram(b), b.name = 0, Cf[a] = null) : Q(1281);
  }
}, emscripten_glDeleteQueries:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = n()[b + 4 * c >> 2], e = If[d];
    e && (P.deleteQuery(e), If[d] = null);
  }
}, emscripten_glDeleteRenderbuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = n()[b + 4 * c >> 2], e = Ef[d];
    e && (P.deleteRenderbuffer(e), e.name = 0, Ef[d] = null);
  }
}, emscripten_glDeleteShader:function(a) {
  if (a) {
    var b = Gf[a];
    b ? (P.deleteShader(b), Gf[a] = null) : Q(1281);
  }
}, emscripten_glDeleteSync:function(a) {
  if (a) {
    var b = Jf[a];
    b ? (P.deleteSync(b), b.name = 0, Jf[a] = null) : Q(1281);
  }
}, emscripten_glDeleteTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = n()[b + 4 * c >> 2], e = Ff[d];
    e && (P.deleteTexture(e), e.name = 0, Ff[d] = null);
  }
}, emscripten_glDeleteVertexArrays:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = n()[b + 4 * c >> 2];
    P.deleteVertexArray(Hf[d]);
    Hf[d] = null;
  }
}, emscripten_glDepthFunc:function(a) {
  P.depthFunc(a);
}, emscripten_glDepthMask:function(a) {
  P.depthMask(!!a);
}, emscripten_glDisable:function(a) {
  P.disable(a);
}, emscripten_glDisableVertexAttribArray:function(a) {
  P.disableVertexAttribArray(a);
}, emscripten_glDrawArrays:function(a, b, c) {
  P.drawArrays(a, b, c);
}, emscripten_glDrawArraysInstanced:function(a, b, c, d) {
  P.drawArraysInstanced(a, b, c, d);
}, emscripten_glDrawElements:function(a, b, c, d) {
  P.drawElements(a, b, c, d);
}, emscripten_glDrawElementsInstanced:function(a, b, c, d, e) {
  P.drawElementsInstanced(a, b, c, d, e);
}, emscripten_glEnable:function(a) {
  P.enable(a);
}, emscripten_glEnableVertexAttribArray:function(a) {
  P.enableVertexAttribArray(a);
}, emscripten_glEndTransformFeedback:function() {
  P.endTransformFeedback();
}, emscripten_glFenceSync:function(a, b) {
  return (a = P.fenceSync(a, b)) ? (b = Of(Jf), a.name = b, Jf[b] = a, b) : 0;
}, emscripten_glFinish:function() {
  P.finish();
}, emscripten_glFramebufferRenderbuffer:function(a, b, c, d) {
  P.framebufferRenderbuffer(a, b, c, Ef[d]);
}, emscripten_glFramebufferTexture2D:function(a, b, c, d, e) {
  P.framebufferTexture2D(a, b, c, Ff[d], e);
}, emscripten_glFramebufferTextureLayer:function(a, b, c, d, e) {
  P.framebufferTextureLayer(a, b, Ff[c], d, e);
}, emscripten_glFrontFace:function(a) {
  P.frontFace(a);
}, emscripten_glGenBuffers:function(a, b) {
  Sf(a, b, "createBuffer", Bf);
}, emscripten_glGenFramebuffers:function(a, b) {
  Sf(a, b, "createFramebuffer", Df);
}, emscripten_glGenQueries:function(a, b) {
  Sf(a, b, "createQuery", If);
}, emscripten_glGenRenderbuffers:function(a, b) {
  Sf(a, b, "createRenderbuffer", Ef);
}, emscripten_glGenTextures:function(a, b) {
  Sf(a, b, "createTexture", Ff);
}, emscripten_glGenVertexArrays:function(a, b) {
  Sf(a, b, "createVertexArray", Hf);
}, emscripten_glGenerateMipmap:function(a) {
  P.generateMipmap(a);
}, emscripten_glGetFloatv:function(a, b) {
  Tf(a, b, 2);
}, emscripten_glGetInteger64v:function(a, b) {
  Tf(a, b, 1);
}, emscripten_glGetProgramInfoLog:function(a, b, c, d) {
  a = P.getProgramInfoLog(Cf[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? $a(a, d, b) : 0;
  c && (n()[c >> 2] = b);
}, emscripten_glGetProgramiv:function(a, b, c) {
  if (c) {
    if (a >= Af) {
      Q(1281);
    } else {
      if (a = Cf[a], 35716 == b) {
        a = P.getProgramInfoLog(a), null === a && (a = "(unknown error)"), n()[c >> 2] = a.length + 1;
      } else if (35719 == b) {
        if (!a.Ea) {
          for (b = 0; b < P.getProgramParameter(a, 35718); ++b) {
            a.Ea = Math.max(a.Ea, P.getActiveUniform(a, b).name.length + 1);
          }
        }
        n()[c >> 2] = a.Ea;
      } else if (35722 == b) {
        if (!a.Ca) {
          for (b = 0; b < P.getProgramParameter(a, 35721); ++b) {
            a.Ca = Math.max(a.Ca, P.getActiveAttrib(a, b).name.length + 1);
          }
        }
        n()[c >> 2] = a.Ca;
      } else if (35381 == b) {
        if (!a.Da) {
          for (b = 0; b < P.getProgramParameter(a, 35382); ++b) {
            a.Da = Math.max(a.Da, P.getActiveUniformBlockName(a, b).length + 1);
          }
        }
        n()[c >> 2] = a.Da;
      } else {
        n()[c >> 2] = P.getProgramParameter(a, b);
      }
    }
  } else {
    Q(1281);
  }
}, emscripten_glGetShaderInfoLog:function(a, b, c, d) {
  a = P.getShaderInfoLog(Gf[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? $a(a, d, b) : 0;
  c && (n()[c >> 2] = b);
}, emscripten_glGetShaderiv:function(a, b, c) {
  c ? 35716 == b ? (a = P.getShaderInfoLog(Gf[a]), null === a && (a = "(unknown error)"), a = a ? a.length + 1 : 0, n()[c >> 2] = a) : 35720 == b ? (a = (a = P.getShaderSource(Gf[a])) ? a.length + 1 : 0, n()[c >> 2] = a) : n()[c >> 2] = P.getShaderParameter(Gf[a], b) : Q(1281);
}, emscripten_glGetString:function(a) {
  var b = Kf[a];
  if (!b) {
    switch(a) {
      case 7939:
        b = P.getSupportedExtensions() || [];
        b = b.concat(b.map(function(d) {
          return "GL_" + d;
        }));
        b = Uf(b.join(" "));
        break;
      case 7936:
      case 7937:
      case 37445:
      case 37446:
        (b = P.getParameter(a)) || Q(1280);
        b = b && Uf(b);
        break;
      case 7938:
        b = P.getParameter(7938);
        b = 2 <= R.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
        b = Uf(b);
        break;
      case 35724:
        b = P.getParameter(35724);
        var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
        null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
        b = Uf(b);
        break;
      default:
        Q(1280);
    }
    Kf[a] = b;
  }
  return b;
}, emscripten_glGetStringi:function(a, b) {
  if (2 > R.version) {
    return Q(1282), 0;
  }
  var c = Lf[a];
  if (c) {
    return 0 > b || b >= c.length ? (Q(1281), 0) : c[b];
  }
  switch(a) {
    case 7939:
      return c = P.getSupportedExtensions() || [], c = c.concat(c.map(function(d) {
        return "GL_" + d;
      })), c = c.map(function(d) {
        return Uf(d);
      }), c = Lf[a] = c, 0 > b || b >= c.length ? (Q(1281), 0) : c[b];
    default:
      return Q(1280), 0;
  }
}, emscripten_glGetSynciv:function(a, b, c, d, e) {
  0 > c ? Q(1281) : e ? (a = P.getSyncParameter(Jf[a], b), null !== a && (n()[e >> 2] = a, d && (n()[d >> 2] = 1))) : Q(1281);
}, emscripten_glGetUniformBlockIndex:function(a, b) {
  return P.getUniformBlockIndex(Cf[a], C(b));
}, emscripten_glGetUniformLocation:function(a, b) {
  b = C(b);
  if (a = Cf[a]) {
    var c = a, d = c.va, e = c.Sb, f;
    if (!d) {
      for (c.va = d = {}, c.Rb = {}, f = 0; f < P.getProgramParameter(c, 35718); ++f) {
        var g = P.getActiveUniform(c, f);
        var k = g.name;
        g = g.size;
        var l = Vf(k);
        l = 0 < l ? k.slice(0, l) : k;
        var p = c.ib;
        c.ib += g;
        e[l] = [g, p];
        for (k = 0; k < g; ++k) {
          d[p] = k, c.Rb[p++] = l;
        }
      }
    }
    c = a.va;
    d = 0;
    e = b;
    f = Vf(b);
    0 < f && (d = parseInt(b.slice(f + 1)) >>> 0, e = b.slice(0, f));
    if ((e = a.Sb[e]) && d < e[0] && (d += e[1], c[d] = c[d] || P.getUniformLocation(a, b))) {
      return d;
    }
  } else {
    Q(1281);
  }
  return -1;
}, emscripten_glLinkProgram:function(a) {
  a = Cf[a];
  P.linkProgram(a);
  a.va = 0;
  a.Sb = {};
}, emscripten_glPixelStorei:function(a, b) {
  3317 == a && (Mf = b);
  P.pixelStorei(a, b);
}, emscripten_glReadBuffer:function(a) {
  P.readBuffer(a);
}, emscripten_glReadPixels:function(a, b, c, d, e, f, g) {
  if (2 <= R.version) {
    if (P.Ua) {
      P.readPixels(a, b, c, d, e, f, g);
    } else {
      var k = Wf(f);
      P.readPixels(a, b, c, d, e, f, k, g >> Xf(k));
    }
  } else {
    (g = Yf(f, e, c, d, g)) ? P.readPixels(a, b, c, d, e, f, g) : Q(1280);
  }
}, emscripten_glRenderbufferStorage:function(a, b, c, d) {
  P.renderbufferStorage(a, b, c, d);
}, emscripten_glScissor:function(a, b, c, d) {
  P.scissor(a, b, c, d);
}, emscripten_glShaderSource:function(a, b, c, d) {
  for (var e = "", f = 0; f < b; ++f) {
    var g = d ? n()[d + 4 * f >> 2] : -1;
    e += C(n()[c + 4 * f >> 2], 0 > g ? void 0 : g);
  }
  P.shaderSource(Gf[a], e);
}, emscripten_glTexImage2D:function(a, b, c, d, e, f, g, k, l) {
  if (2 <= R.version) {
    if (P.da) {
      P.texImage2D(a, b, c, d, e, f, g, k, l);
    } else if (l) {
      var p = Wf(k);
      P.texImage2D(a, b, c, d, e, f, g, k, p, l >> Xf(p));
    } else {
      P.texImage2D(a, b, c, d, e, f, g, k, null);
    }
  } else {
    P.texImage2D(a, b, c, d, e, f, g, k, l ? Yf(k, g, d, e, l) : null);
  }
}, emscripten_glTexImage3D:function(a, b, c, d, e, f, g, k, l, p) {
  if (P.da) {
    P.texImage3D(a, b, c, d, e, f, g, k, l, p);
  } else if (p) {
    var u = Wf(l);
    P.texImage3D(a, b, c, d, e, f, g, k, l, u, p >> Xf(u));
  } else {
    P.texImage3D(a, b, c, d, e, f, g, k, l, null);
  }
}, emscripten_glTexParameterf:function(a, b, c) {
  P.texParameterf(a, b, c);
}, emscripten_glTexParameteri:function(a, b, c) {
  P.texParameteri(a, b, c);
}, emscripten_glTexStorage2D:function(a, b, c, d, e) {
  P.texStorage2D(a, b, c, d, e);
}, emscripten_glTexSubImage3D:function(a, b, c, d, e, f, g, k, l, p, u) {
  if (P.da) {
    P.texSubImage3D(a, b, c, d, e, f, g, k, l, p, u);
  } else if (u) {
    var A = Wf(p);
    P.texSubImage3D(a, b, c, d, e, f, g, k, l, p, A, u >> Xf(A));
  } else {
    P.texSubImage3D(a, b, c, d, e, f, g, k, l, p, null);
  }
}, emscripten_glTransformFeedbackVaryings:function(a, b, c, d) {
  a = Cf[a];
  for (var e = [], f = 0; f < b; f++) {
    e.push(C(n()[c + 4 * f >> 2]));
  }
  P.transformFeedbackVaryings(a, e, d);
}, emscripten_glUniform1f:function(a, b) {
  P.uniform1f(Zf(a), b);
}, emscripten_glUniform1i:function(a, b) {
  P.uniform1i(Zf(a), b);
}, emscripten_glUniform1iv:function(a, b, c) {
  if (2 <= R.version) {
    b && P.uniform1iv(Zf(a), n(), c >> 2, b);
  } else {
    if (288 >= b) {
      for (var d = $f[b - 1], e = 0; e < b; ++e) {
        d[e] = n()[c + 4 * e >> 2];
      }
    } else {
      d = n().subarray(c >> 2, c + 4 * b >> 2);
    }
    P.uniform1iv(Zf(a), d);
  }
}, emscripten_glUniform1ui:function(a, b) {
  P.uniform1ui(Zf(a), b);
}, emscripten_glUniform1uiv:function(a, b, c) {
  b && P.uniform1uiv(Zf(a), q(), c >> 2, b);
}, emscripten_glUniform2f:function(a, b, c) {
  P.uniform2f(Zf(a), b, c);
}, emscripten_glUniform2fv:function(a, b, c) {
  if (2 <= R.version) {
    b && P.uniform2fv(Zf(a), t(), c >> 2, 2 * b);
  } else {
    if (144 >= b) {
      for (var d = ag[2 * b - 1], e = 0; e < 2 * b; e += 2) {
        d[e] = t()[c + 4 * e >> 2], d[e + 1] = t()[c + (4 * e + 4) >> 2];
      }
    } else {
      d = t().subarray(c >> 2, c + 8 * b >> 2);
    }
    P.uniform2fv(Zf(a), d);
  }
}, emscripten_glUniform2iv:function(a, b, c) {
  if (2 <= R.version) {
    b && P.uniform2iv(Zf(a), n(), c >> 2, 2 * b);
  } else {
    if (144 >= b) {
      for (var d = $f[2 * b - 1], e = 0; e < 2 * b; e += 2) {
        d[e] = n()[c + 4 * e >> 2], d[e + 1] = n()[c + (4 * e + 4) >> 2];
      }
    } else {
      d = n().subarray(c >> 2, c + 8 * b >> 2);
    }
    P.uniform2iv(Zf(a), d);
  }
}, emscripten_glUniform3fv:function(a, b, c) {
  if (2 <= R.version) {
    b && P.uniform3fv(Zf(a), t(), c >> 2, 3 * b);
  } else {
    if (96 >= b) {
      for (var d = ag[3 * b - 1], e = 0; e < 3 * b; e += 3) {
        d[e] = t()[c + 4 * e >> 2], d[e + 1] = t()[c + (4 * e + 4) >> 2], d[e + 2] = t()[c + (4 * e + 8) >> 2];
      }
    } else {
      d = t().subarray(c >> 2, c + 12 * b >> 2);
    }
    P.uniform3fv(Zf(a), d);
  }
}, emscripten_glUniform4f:function(a, b, c, d, e) {
  P.uniform4f(Zf(a), b, c, d, e);
}, emscripten_glUniform4fv:function(a, b, c) {
  if (2 <= R.version) {
    b && P.uniform4fv(Zf(a), t(), c >> 2, 4 * b);
  } else {
    if (72 >= b) {
      var d = ag[4 * b - 1], e = t();
      c >>= 2;
      for (var f = 0; f < 4 * b; f += 4) {
        var g = c + f;
        d[f] = e[g];
        d[f + 1] = e[g + 1];
        d[f + 2] = e[g + 2];
        d[f + 3] = e[g + 3];
      }
    } else {
      d = t().subarray(c >> 2, c + 16 * b >> 2);
    }
    P.uniform4fv(Zf(a), d);
  }
}, emscripten_glUniformBlockBinding:function(a, b, c) {
  a = Cf[a];
  P.uniformBlockBinding(a, b, c);
}, emscripten_glUniformMatrix4fv:function(a, b, c, d) {
  if (2 <= R.version) {
    b && P.uniformMatrix4fv(Zf(a), !!c, t(), d >> 2, 16 * b);
  } else {
    if (18 >= b) {
      var e = ag[16 * b - 1], f = t();
      d >>= 2;
      for (var g = 0; g < 16 * b; g += 16) {
        var k = d + g;
        e[g] = f[k];
        e[g + 1] = f[k + 1];
        e[g + 2] = f[k + 2];
        e[g + 3] = f[k + 3];
        e[g + 4] = f[k + 4];
        e[g + 5] = f[k + 5];
        e[g + 6] = f[k + 6];
        e[g + 7] = f[k + 7];
        e[g + 8] = f[k + 8];
        e[g + 9] = f[k + 9];
        e[g + 10] = f[k + 10];
        e[g + 11] = f[k + 11];
        e[g + 12] = f[k + 12];
        e[g + 13] = f[k + 13];
        e[g + 14] = f[k + 14];
        e[g + 15] = f[k + 15];
      }
    } else {
      e = t().subarray(d >> 2, d + 64 * b >> 2);
    }
    P.uniformMatrix4fv(Zf(a), !!c, e);
  }
}, emscripten_glUseProgram:function(a) {
  a = Cf[a];
  P.useProgram(a);
  P.dc = a;
}, emscripten_glVertexAttrib4f:function(a, b, c, d, e) {
  P.vertexAttrib4f(a, b, c, d, e);
}, emscripten_glVertexAttribDivisor:function(a, b) {
  P.vertexAttribDivisor(a, b);
}, emscripten_glVertexAttribIPointer:function(a, b, c, d, e) {
  P.vertexAttribIPointer(a, b, c, d, e);
}, emscripten_glVertexAttribPointer:function(a, b, c, d, e, f) {
  P.vertexAttribPointer(a, b, c, !!d, e, f);
}, emscripten_glViewport:function(a, b, c, d) {
  P.viewport(a, b, c, d);
}, emscripten_memcpy_big:function(a, b, c) {
  ka().copyWithin(a, b, b + c);
}, emscripten_num_logical_cores:function() {
  return navigator.hardwareConcurrency;
}, emscripten_receive_on_main_thread_js:function(a, b, c) {
  dg.length = b;
  c >>= 3;
  for (var d = 0; d < b; d++) {
    dg[d] = ua()[c + d];
  }
  a = 0 > a ? Kb[-a - 1] : mj[a];
  y(a.length == b, "Call args mismatch in emscripten_receive_on_main_thread_js");
  return a.apply(null, dg);
}, emscripten_resize_heap:function(a) {
  var b = ka().length;
  a >>>= 0;
  if (a <= b) {
    return !1;
  }
  if (2147483648 < a) {
    return z("Cannot enlarge memory, asked to go up to " + a + " bytes, but the limit is 2147483648 bytes!"), !1;
  }
  for (var c = 1; 4 >= c; c *= 2) {
    var d = b * (1 + .2 / c);
    d = Math.min(d, a + 100663296);
    var e = Math;
    d = Math.max(a, d);
    e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536);
    a: {
      d = e;
      try {
        m.grow(d - fa.byteLength + 65535 >>> 16);
        ha(m.buffer);
        var f = 1;
        break a;
      } catch (g) {
        z("emscripten_realloc_buffer: Attempted to grow heap from " + fa.byteLength + " bytes to " + d + " bytes, but got error: " + g);
      }
      f = void 0;
    }
    if (f) {
      return !0;
    }
  }
  z("Failed to grow the heap from " + b + " bytes to " + e + " bytes, not enough memory!");
  return !1;
}, emscripten_set_main_loop:function(a, b, c) {
  a = sd(a);
  Le(a, b, c);
}, emscripten_supports_offscreencanvas:function() {
  return 0;
}, emscripten_unwind_to_js_event_loop:function() {
  throw "unwind";
}, emscripten_webgl_destroy_context:eg, emscripten_webgl_do_commit_frame:function() {
  return R && R.C ? R.Va ? (Rf(), 0) : R.attributes.wb ? 0 : -3 : -3;
}, emscripten_webgl_do_create_context:ig, emscripten_webgl_enable_extension:lg, emscripten_webgl_init_context_attributes:function(a) {
  y(a);
  for (var b = a >> 2, c = 0; 14 > c; ++c) {
    n()[b + c] = 0;
  }
  n()[b] = n()[b + 1] = n()[b + 3] = n()[b + 4] = n()[b + 8] = n()[b + 10] = 1;
  Fa && (n()[a + 48 >> 2] = 1);
}, emscripten_webgl_make_context_current_calling_thread:function(a) {
  return jf(a) ? 0 : -5;
}, environ_get:pg, environ_sizes_get:qg, exit:dd, fd_close:rg, fd_fdstat_get:sg, fd_read:tg, fd_seek:ug, fd_write:vg, getTempRet0:function() {
  return Ra;
}, getaddrinfo:wg, getnameinfo:function(a, b, c, d, e, f, g) {
  b = Nd(a, b);
  if (b.g) {
    return -6;
  }
  a = b.port;
  var k = b.v;
  b = !1;
  if (c && d) {
    var l;
    if (g & 1 || !(l = Hd[k] ? Hd[k] : null)) {
      if (g & 8) {
        return -2;
      }
    } else {
      k = l;
    }
    c = $a(k, c, d);
    c + 1 >= d && (b = !0);
  }
  e && f && (c = $a("" + a, e, f), c + 1 >= f && (b = !0));
  return b ? -12 : 0;
}, glGetBufferSubData:function(a, b, c, d) {
  d ? c && P.getBufferSubData(a, b, ka(), d, c) : Q(1281);
}, godot_audio_has_worklet:function() {
  return Vg && Vg.audioWorklet ? 1 : 0;
}, godot_audio_init:function(a, b, c, d) {
  b = T(c);
  d = T(d);
  c = qd(a, "i32");
  d = Zg(c, b, d);
  N(a, Vg.sampleRate, "i32");
  return d;
}, godot_audio_input_start:bh, godot_audio_input_stop:ch, godot_audio_is_available:dh, godot_audio_resume:function() {
  Vg && "running" !== Vg.state && Vg.resume();
}, godot_audio_worklet_create:function(a) {
  try {
    eh.create(a);
  } catch (b) {
    return U("Error starting AudioDriverWorklet", b), 1;
  }
  return 0;
}, godot_audio_worklet_start:function(a, b, c, d, e) {
  c = Ag(t(), c, d);
  a = Ag(t(), a, b);
  e = Ag(n(), e, 4);
  eh.start(a, c, e);
}, godot_audio_worklet_state_add:function(a, b, c) {
  return Atomics.add(n(), (a >> 2) + b, c);
}, godot_audio_worklet_state_get:function(a, b) {
  return Atomics.load(n(), (a >> 2) + b);
}, godot_audio_worklet_state_wait:function(a, b, c, d) {
  Atomics.wait(n(), (a >> 2) + b, c, d);
  return Atomics.load(n(), (a >> 2) + b);
}, godot_js_config_canvas_id_get:function(a, b) {
  Za(`#${X.id}`, h(), a, b);
}, godot_js_config_locale_get:function(a, b) {
  Za(Fg, h(), a, b);
}, godot_js_display_alert:function(a) {
  window.alert(C(a));
}, godot_js_display_canvas_focus:function() {
  X.focus();
}, godot_js_display_canvas_is_focused:function() {
  return document.activeElement === X;
}, godot_js_display_clipboard_get:function(a) {
  const b = T(a);
  try {
    navigator.clipboard.readText().then(function(c) {
      c = V(c);
      b(c);
      S(c);
    }).catch(function() {
    });
  } catch (c) {
  }
}, godot_js_display_clipboard_set:function(a) {
  a = C(a);
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    return 1;
  }
  navigator.clipboard.writeText(a).catch(function(b) {
    U("Setting OS clipboard is only possible from an input callback for the Web platform. Exception:", b);
  });
  return 0;
}, godot_js_display_cursor_is_hidden:function() {
  return !gh;
}, godot_js_display_cursor_is_locked:function() {
  return document.pointerLockElement === X ? 1 : 0;
}, godot_js_display_cursor_lock_set:function(a) {
  a ? (a = X, a.requestPointerLock && a.requestPointerLock()) : document.exitPointerLock && document.exitPointerLock();
}, godot_js_display_cursor_set_custom_shape:function(a, b, c, d, e) {
  a = C(a);
  const f = hh[a];
  0 < c ? (b = new Blob([Bg(ka(), b, c)], {type:"image/png"}), b = URL.createObjectURL(b), hh[a] = {url:b, x:d, y:e}) : delete hh[a];
  a === fh && ih(fh);
  f && URL.revokeObjectURL(f.url);
}, godot_js_display_cursor_set_shape:function(a) {
  ih(C(a));
}, godot_js_display_cursor_set_visible:function(a) {
  a = 0 !== a;
  a !== gh && ((gh = a) ? ih(fh) : X.style.cursor = "none");
}, godot_js_display_desired_size_set:function(a, b) {
  nh = [a, b];
  uh();
}, godot_js_display_fullscreen_cb:function(a) {
  function b(e) {
    e.target === c && d(ph());
  }
  const c = X, d = T(a);
  Y(document, "fullscreenchange", b, !1);
  Y(document, "mozfullscreenchange", b, !1);
  Y(document, "webkitfullscreenchange", b, !1);
}, godot_js_display_fullscreen_exit:function() {
  return rh();
}, godot_js_display_fullscreen_request:function() {
  return qh();
}, godot_js_display_has_webgl:function(a) {
  if (1 !== a && 2 !== a) {
    return !1;
  }
  try {
    return !!document.createElement("canvas").getContext(2 === a ? "webgl2" : "webgl");
  } catch (b) {
  }
  return !1;
}, godot_js_display_is_swap_ok_cancel:function() {
  return -1 !== ["Windows", "Win64", "Win32", "WinCE"].indexOf(navigator.platform || "") ? 1 : 0;
}, godot_js_display_notification_cb:function(a, b, c, d, e) {
  const f = X, g = T(a), k = [b, c, d, e];
  ["mouseover", "mouseleave", "focus", "blur"].forEach(function(l, p) {
    Y(f, l, function() {
      g(k[p]);
    }, !0);
  });
}, godot_js_display_pixel_ratio_get:function() {
  return oh ? window.devicePixelRatio || 1 : 1;
}, godot_js_display_screen_dpi_get:function() {
  const a = Math.round(96 * window.devicePixelRatio);
  return 96 <= a ? a : 96;
}, godot_js_display_screen_size_get:function(a, b) {
  const c = oh ? window.devicePixelRatio || 1 : 1;
  N(a, window.screen.width * c, "i32");
  N(b, window.screen.height * c, "i32");
}, godot_js_display_setup_canvas:function(a, b, c, d) {
  const e = X;
  Y(e, "contextmenu", function(f) {
    f.preventDefault();
  }, !1);
  Y(e, "webglcontextlost", function(f) {
    alert("WebGL context lost, please reload the page");
    f.preventDefault();
  }, !1);
  oh = !!d;
  switch(Gg) {
    case 0:
      nh = [e.width, e.height];
      break;
    case 1:
      nh = [a, b];
      break;
    default:
      e.style.position = "absolute", e.style.top = 0, e.style.left = 0;
  }
  uh();
  c && qh();
}, godot_js_display_size_update:function() {
  const a = uh();
  a && yh();
  return a;
}, godot_js_display_touchscreen_is_available:function() {
  return "ontouchstart" in window;
}, godot_js_display_tts_available:function() {
  return "speechSynthesis" in window;
}, godot_js_display_vk_available:function() {
  return Hg && "ontouchstart" in window;
}, godot_js_display_vk_cb:function(a) {
  a = T(a);
  Hg && "ontouchstart" in window && xh(a);
}, godot_js_display_vk_hide:function() {
  zh();
}, godot_js_display_vk_show:function(a, b, c, d) {
  a = C(a);
  c = 0 < c ? c : 0;
  d = 0 < d ? d : c;
  if (vh && wh) {
    "" === vh.style.display && "" === wh.style.display || zh();
    yh();
    var e = vh;
    switch(b) {
      case 0:
        e.type = "text";
        e.Y = "";
        break;
      case 1:
        e = wh;
        break;
      case 2:
        e.type = "text";
        e.Y = "numeric";
        break;
      case 3:
        e.type = "text";
        e.Y = "decimal";
        break;
      case 4:
        e.type = "tel";
        e.Y = "";
        break;
      case 5:
        e.type = "email";
        e.Y = "";
        break;
      case 6:
        e.type = "password";
        e.Y = "";
        break;
      case 7:
        e.type = "url";
        e.Y = "";
        break;
      default:
        e.type = "text", e.Y = "";
    }
    e.Ib = !1;
    e.disabled = !1;
    e.value = a;
    e.style.display = "block";
    e.focus();
    e.setSelectionRange(c, d);
  }
}, godot_js_display_window_blur_cb:function(a) {
  const b = T(a);
  Y(window, "blur", function() {
    b();
  }, !1);
}, godot_js_display_window_icon_set:function(a, b) {
  let c = document.getElementById("-gd-engine-icon");
  null === c && (c = document.createElement("link"), c.rel = "icon", c.id = "-gd-engine-icon", document.head.appendChild(c));
  const d = Ah;
  a = new Blob([Bg(ka(), a, b)], {type:"image/png"});
  Ah = URL.createObjectURL(a);
  c.href = Ah;
  d && URL.revokeObjectURL(d);
}, godot_js_display_window_size_get:function(a, b) {
  N(a, X.width, "i32");
  N(b, X.height, "i32");
}, godot_js_display_window_title_set:function(a) {
  document.title = C(a);
}, godot_js_eval:function(a, b, c, d, e, f) {
  b = C(a);
  a = null;
  try {
    a = (0,eval)(b);
  } catch (g) {
    U(g);
  }
  switch(typeof a) {
    case "boolean":
      return N(c, a, "i32"), 1;
    case "number":
      return N(c, a, "double"), 3;
    case "string":
      return zg(c, V(a)), 4;
    case "object":
      if (null !== a && (!ArrayBuffer.isView(a) || a instanceof Uint8Array ? a instanceof ArrayBuffer && (a = new Uint8Array(a)) : a = new Uint8Array(a.buffer), a instanceof Uint8Array)) {
        return c = T(f)(d, e, a.length), ka().set(a, c), 29;
      }
  }
  return 0;
}, godot_js_fetch_create:function(a, b, c, d, e, f) {
  a = C(a);
  b = C(b);
  c = Cg(c, d);
  e = f ? Bg(h(), e, f) : null;
  return Hh(a, b, c.map(function(g) {
    const k = g.indexOf(":");
    return 0 >= k ? [] : [g.slice(0, k).trim(), g.slice(k + 1).trim()];
  }).filter(function(g) {
    return 2 === g.length;
  }), e);
}, godot_js_fetch_free:function(a) {
  Ih(a);
}, godot_js_fetch_http_status_get:function(a) {
  return (a = Z[a]) && a.response ? a.status : 0;
}, godot_js_fetch_is_chunked:function(a) {
  return (a = Z[a]) && a.response ? a.ac ? 1 : 0 : -1;
}, godot_js_fetch_read_chunk:function(a, b, c) {
  const d = Z[a];
  if (!d || !d.response) {
    return 0;
  }
  let e = c;
  const f = d.Ta;
  for (; e && f.length;) {
    const l = d.Ta[0];
    if (l.length > e) {
      var g = h(), k = l.slice(0, e);
      g.set(k, b / k.BYTES_PER_ELEMENT);
      f[0] = l.slice(e);
      e = 0;
    } else {
      h().set(l, b / l.BYTES_PER_ELEMENT), e -= l.length, f.pop();
    }
  }
  f.length || (b = Z[a]) && b.sa && !b.cb && (b.done ? b.sa = null : (b.cb = !0, b.sa.read().then(Eh.bind(null, a)).catch(Gh.bind(null, a))));
  return c - e;
}, godot_js_fetch_read_headers:function(a, b, c) {
  a = Z[a];
  if (!a || !a.response) {
    return 1;
  }
  b = T(b);
  const d = [];
  a.response.headers.forEach(function(e, f) {
    d.push(`${f}:${e}`);
  });
  a = Dg(d);
  b(d.length, a, c);
  Eg(a, d.length);
  return 0;
}, godot_js_fetch_state_get:function(a) {
  a = Z[a];
  return !a || a.error ? -1 : a.response ? a.sa ? 1 : a.done ? 2 : -1 : 0;
}, godot_js_input_drop_files_cb:function(a) {
  const b = T(a);
  a = X;
  Y(a, "dragover", function(c) {
    c.preventDefault();
  }, !1);
  Y(a, "drop", Uh(function(c) {
    var d = c || [];
    d.length && (c = d.length, d = Dg(d), b(d, c), Eg(d, c));
  }));
}, godot_js_input_gamepad_cb:function(a) {
  a = T(a);
  Lh(a);
}, godot_js_input_gamepad_sample:function() {
  const a = Kh(), b = [];
  for (let d = 0; d < a.length; d++) {
    const e = a[d];
    if (!e) {
      b.push(null);
      continue;
    }
    const f = {Sc:"standard" === e.mapping, buttons:[], axes:[], connected:e.connected};
    for (var c = 0; c < e.buttons.length; c++) {
      f.buttons.push(e.buttons[c].value);
    }
    for (c = 0; c < e.axes.length; c++) {
      f.axes.push(e.axes[c]);
    }
    b.push(f);
  }
  Jh = b;
  return 0;
}, godot_js_input_gamepad_sample_count:function() {
  return Jh.length;
}, godot_js_input_gamepad_sample_get:function(a, b, c, d, e, f) {
  var g = Jh;
  a = a < g.length ? g[a] : null;
  if (!a || !a.connected) {
    return 1;
  }
  g = a.buttons;
  const k = 16 > g.length ? g.length : 16;
  for (let l = 0; l < k; l++) {
    N(b + (l << 2), g[l], "float");
  }
  N(c, k, "i32");
  b = a.axes;
  c = 10 > b.length ? b.length : 10;
  for (g = 0; g < c; g++) {
    N(d + (g << 2), b[g], "float");
  }
  N(e, c, "i32");
  N(f, a.Sc ? 1 : 0, "i32");
  return 0;
}, godot_js_input_key_cb:function(a, b, c) {
  function d(f, g) {
    const k = Vh(g);
    Za(g.code, h(), b, 32);
    Za(g.key, h(), c, 32);
    e(f, g.repeat, k);
    g.preventDefault();
  }
  const e = T(a);
  Y(X, "keydown", d.bind(null, 1), !1);
  Y(X, "keyup", d.bind(null, 0), !1);
}, godot_js_input_mouse_button_cb:function(a) {
  function b(e, f) {
    var g = d.getBoundingClientRect();
    g = Wh(f, g);
    const k = Vh(f);
    e && X.focus();
    c(e, f.button, g[0], g[1], k) && f.preventDefault();
  }
  const c = T(a), d = X;
  Y(d, "mousedown", b.bind(null, 1), !1);
  Y(window, "mouseup", b.bind(null, 0), !1);
}, godot_js_input_mouse_move_cb:function(a) {
  const b = T(a), c = X;
  Y(window, "mousemove", function(d) {
    const e = c.getBoundingClientRect(), f = Wh(d, e);
    b(f[0], f[1], c.width / e.width * d.movementX, c.height / e.height * d.movementY, Vh(d));
  }, !1);
}, godot_js_input_mouse_wheel_cb:function(a) {
  const b = T(a);
  Y(X, "wheel", function(c) {
    b(c.deltaX || 0, c.deltaY || 0) && c.preventDefault();
  }, !1);
}, godot_js_input_paste_cb:function(a) {
  const b = T(a);
  Y(window, "paste", function(c) {
    c = c.clipboardData.getData("text");
    c = V(c);
    b(c);
    S(c);
  }, !1);
}, godot_js_input_touch_cb:function(a, b, c) {
  function d(g, k) {
    0 === g && X.focus();
    const l = f.getBoundingClientRect(), p = k.changedTouches;
    for (let u = 0; u < p.length; u++) {
      const A = p[u], D = Wh(A, l);
      N(c + 16 * u, D[0], "double");
      N(c + 8 * (2 * u + 1), D[1], "double");
      N(b + 4 * u, A.identifier, "i32");
    }
    e(g, p.length);
    k.cancelable && k.preventDefault();
  }
  const e = T(a), f = X;
  Y(f, "touchstart", d.bind(null, 0), !1);
  Y(f, "touchend", d.bind(null, 1), !1);
  Y(f, "touchcancel", d.bind(null, 1), !1);
  Y(f, "touchmove", d.bind(null, 2), !1);
}, godot_js_input_vibrate_handheld:function(a) {
  "function" !== typeof navigator.vibrate ? yg("This browser does not support vibration.") : navigator.vibrate(a);
}, godot_js_os_download_buffer:function(a, b, c, d) {
  a = Bg(h(), a, b);
  c = C(c);
  d = C(d);
  d = window.URL.createObjectURL(new Blob([a], {type:d}));
  a = document.createElement("a");
  a.href = d;
  a.download = c;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(d);
}, godot_js_os_execute:function(a) {
  a = C(a);
  a = JSON.parse(a);
  return Jg ? (Jg(a), 0) : 1;
}, godot_js_os_finish_async:function(a) {
  a = T(a);
  Ug(a);
}, godot_js_os_fs_is_persistent:function() {
  return Lg ? 1 : 0;
}, godot_js_os_fs_sync:function(a) {
  const b = T(a);
  Tg = Pg();
  Tg.then(function() {
    b();
  });
}, godot_js_os_has_feature:function(a) {
  a = C(a);
  const b = navigator.userAgent;
  return "web_macos" === a ? -1 !== b.indexOf("Mac") ? 1 : 0 : "web_windows" === a ? -1 !== b.indexOf("Windows") ? 1 : 0 : "web_android" === a ? -1 !== b.indexOf("Android") ? 1 : 0 : "web_ios" === a ? -1 !== b.indexOf("iPhone") || -1 !== b.indexOf("iPad") || -1 !== b.indexOf("iPod") ? 1 : 0 : "web_linuxbsd" === a ? -1 !== b.indexOf("CrOS") || -1 !== b.indexOf("BSD") || -1 !== b.indexOf("Linux") || -1 !== b.indexOf("X11") ? 1 : 0 : 0;
}, godot_js_os_hw_concurrency_get:function() {
  const a = navigator.hardwareConcurrency || 1;
  return 2 > a ? a : 2;
}, godot_js_os_request_quit_cb:function(a) {
  Rg = T(a);
}, godot_js_os_shell_open:function(a) {
  window.open(C(a), "_blank");
}, godot_js_pwa_cb:function(a) {
  "serviceWorker" in navigator && (a = T(a), navigator.serviceWorker.getRegistration().then(Yh.bind(null, a)));
}, godot_js_pwa_update:function() {
  return "serviceWorker" in navigator && Xh ? (navigator.serviceWorker.getRegistration().then(function(a) {
    a && a.waiting && a.waiting.postMessage("update");
  }), 0) : 1;
}, godot_js_rtc_datachannel_close:function(a) {
  Z[a] && $h(a);
}, godot_js_rtc_datachannel_connect:function(a, b, c, d, e, f) {
  c = T(c).bind(null, b);
  d = T(d).bind(null, b);
  e = T(e).bind(null, b);
  b = T(f).bind(null, b);
  Zh(a, c, d, e, b);
}, godot_js_rtc_datachannel_destroy:function(a) {
  $h(a);
  Dh(a);
}, godot_js_rtc_datachannel_get_buffered_amount:function(a) {
  return ai(a, "bufferedAmount", 0);
}, godot_js_rtc_datachannel_id_get:function(a) {
  return ai(a, "id", 65535);
}, godot_js_rtc_datachannel_is_negotiated:function(a) {
  return ai(a, "negotiated", 65535);
}, godot_js_rtc_datachannel_is_ordered:function(a) {
  return ai(a, "ordered", !0);
}, godot_js_rtc_datachannel_label_get:function(a) {
  return (a = Z[a]) && a.label ? V(a.label) : 0;
}, godot_js_rtc_datachannel_max_packet_lifetime_get:function(a) {
  return (a = Z[a]) ? void 0 !== a.maxPacketLifeTime ? a.maxPacketLifeTime : void 0 !== a.maxRetransmitTime ? a.maxRetransmitTime : 65535 : 65535;
}, godot_js_rtc_datachannel_max_retransmits_get:function(a) {
  return ai(a, "maxRetransmits", 65535);
}, godot_js_rtc_datachannel_protocol_get:function(a) {
  return (a = Z[a]) && a.protocol ? V(a.protocol) : 0;
}, godot_js_rtc_datachannel_ready_state_get:function(a) {
  a = Z[a];
  if (!a) {
    return 3;
  }
  switch(a.readyState) {
    case "connecting":
      return 0;
    case "open":
      return 1;
    case "closing":
      return 2;
    default:
      return 3;
  }
}, godot_js_rtc_datachannel_send:function(a, b, c, d) {
  a = Z[a];
  if (!a) {
    return 1;
  }
  const e = new Uint8Array(c);
  for (let f = 0; f < c; f++) {
    e[f] = qd(b + f, "i8");
  }
  d ? a.send(e.buffer) : (b = (new TextDecoder("utf-8")).decode(e), a.send(b));
  return 0;
}, godot_js_rtc_pc_close:function(a) {
  (a = Z[a]) && a.close();
}, godot_js_rtc_pc_create:function(a, b, c, d, e, f, g) {
  function k(l) {
    return T(l).bind(null, b);
  }
  return fi(JSON.parse(C(a)), k(c), k(e), k(d), k(f), k(g));
}, godot_js_rtc_pc_datachannel_create:function(a, b, c) {
  try {
    const d = Z[a];
    if (!d) {
      return 0;
    }
    const e = C(b), f = JSON.parse(C(c)), g = d.createDataChannel(e, f);
    return Ch(g);
  } catch (d) {
    return U(d), 0;
  }
}, godot_js_rtc_pc_destroy:function(a) {
  const b = Z[a];
  b && (b.onconnectionstatechange = null, b.oniceconnectionstatechange = null, b.onicegatheringstatechange = null, b.onsignalingstatechange = null, b.onicecandidate = null, b.ondatachannel = null, Dh(a));
}, godot_js_rtc_pc_ice_candidate_add:function(a, b, c, d) {
  if (a = Z[a]) {
    b = C(b), d = C(d), a.addIceCandidate(new RTCIceCandidate({candidate:d, sdpMid:b, sdpMlineIndex:c}));
  }
}, godot_js_rtc_pc_local_description_set:function(a, b, c, d, e) {
  const f = Z[a];
  if (f) {
    b = C(b);
    c = C(c);
    var g = T(e).bind(null, d);
    f.setLocalDescription({sdp:c, type:b}).catch(function(k) {
      Z[a] && (U(k), g());
    });
  }
}, godot_js_rtc_pc_offer_create:function(a, b, c, d) {
  const e = Z[a];
  if (e) {
    var f = T(c).bind(null, b), g = T(d).bind(null, b);
    e.createOffer().then(function(k) {
      gi(a, f, k);
    }).catch(function(k) {
      Z[a] && (U(k), g());
    });
  }
}, godot_js_rtc_pc_remote_description_set:function(a, b, c, d, e, f) {
  const g = Z[a];
  if (g) {
    var k = C(b);
    b = C(c);
    var l = T(f).bind(null, d), p = T(e).bind(null, d);
    g.setRemoteDescription({sdp:b, type:k}).then(function() {
      return "offer" !== k ? Promise.resolve() : g.createAnswer().then(function(u) {
        gi(a, p, u);
      });
    }).catch(function(u) {
      Z[a] && (U(u), l());
    });
  }
}, godot_js_tts_get_voices:function(a) {
  a = T(a);
  try {
    const b = [], c = window.speechSynthesis.getVoices();
    for (let e = 0; e < c.length; e++) {
      b.push(`${c[e].lang};${c[e].name}`);
    }
    const d = Dg(b);
    a(b.length, d);
    Eg(d, b.length);
  } catch (b) {
  }
}, godot_js_tts_is_paused:function() {
  return window.speechSynthesis.paused;
}, godot_js_tts_is_speaking:function() {
  return window.speechSynthesis.T;
}, godot_js_tts_pause:function() {
  window.speechSynthesis.pause();
}, godot_js_tts_resume:function() {
  window.speechSynthesis.resume();
}, godot_js_tts_speak:function(a, b, c, d, e, f, g) {
  g = T(g);
  a = new SpeechSynthesisUtterance(C(a));
  a.rate = e;
  a.pitch = d;
  a.volume = c / 100;
  a.addEventListener("end", function(k) {
    k.currentTarget.wa(1, k.currentTarget.id, 0);
  });
  a.addEventListener("start", function(k) {
    k.currentTarget.wa(0, k.currentTarget.id, 0);
  });
  a.addEventListener("error", function(k) {
    k.currentTarget.wa(2, k.currentTarget.id, 0);
  });
  a.addEventListener("boundary", function(k) {
    k.currentTarget.wa(3, k.currentTarget.id, k.gd);
  });
  a.id = f;
  a.wa = g;
  b = C(b);
  c = window.speechSynthesis.getVoices();
  for (d = 0; d < c.length; d++) {
    if (c[d].name === b) {
      a.voice = c[d];
      break;
    }
  }
  window.speechSynthesis.resume();
  window.speechSynthesis.speak(a);
}, godot_js_tts_stop:function() {
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();
}, godot_js_websocket_buffered_amount:function(a) {
  return (a = Z[a]) ? a.bufferedAmount : 0;
}, godot_js_websocket_close:function(a, b, c) {
  c = C(c);
  li(a, b, c);
}, godot_js_websocket_create:function(a, b, c, d, e, f, g) {
  d = T(d).bind(null, a);
  e = T(e).bind(null, a);
  f = T(f).bind(null, a);
  a = T(g).bind(null, a);
  b = C(b);
  c = C(c);
  g = null;
  try {
    g = c ? new WebSocket(b, c.split(",")) : new WebSocket(b);
  } catch (k) {
    return 0;
  }
  g.binaryType = "arraybuffer";
  c = g;
  b = Ch(c);
  c.onopen = hi.bind(null, b, d);
  c.onmessage = ii.bind(null, b, e);
  c.onerror = ji.bind(null, b, f);
  c.onclose = ki.bind(null, b, a);
  return b;
}, godot_js_websocket_destroy:function(a) {
  const b = Z[a];
  b && (li(a, 3001, "destroyed"), Dh(a), b.onopen = null, b.onmessage = null, b.onerror = null, b.onclose = null);
}, godot_js_websocket_send:function(a, b, c, d) {
  const e = new Uint8Array(c);
  let f;
  for (f = 0; f < c; f++) {
    e[f] = qd(b + f, "i8");
  }
  b = e.buffer;
  d || (b = (new TextDecoder("utf-8")).decode(e));
  (a = Z[a]) && a.readyState === a.OPEN ? (a.send(b), a = 0) : a = 1;
  return a;
}, godot_js_wrapper_create_cb:function(a, b) {
  const c = T(b);
  let d = 0;
  return d = pi(function() {
    if (qi(d)) {
      ni = null;
      var e = Array.from(arguments);
      c(a, pi(e), e.length);
      e = ni;
      ni = null;
      return e;
    }
  });
}, godot_js_wrapper_create_object:function(a, b, c, d, e, f, g) {
  a = C(a);
  if ("undefined" === typeof window[a]) {
    return -1;
  }
  d = T(d);
  g = T(g);
  const k = Array(c);
  for (let l = 0; l < c; l++) {
    const p = d(b, l, e, f), u = qd(f, "*");
    k[l] = ri(p, e);
    u && g(f, p);
  }
  try {
    const l = new window[a](...k);
    return si(l, e);
  } catch (l) {
    return U(`Error calling constructor ${a} with args:`, k, "error:", l), -1;
  }
}, godot_js_wrapper_interface_get:function(a) {
  a = C(a);
  return "undefined" !== typeof window[a] ? pi(window[a]) : 0;
}, godot_js_wrapper_object_call:function(a, b, c, d, e, f, g, k) {
  a = qi(a);
  if (void 0 === a) {
    return -1;
  }
  b = C(b);
  e = T(e);
  k = T(k);
  const l = Array(d);
  for (let p = 0; p < d; p++) {
    const u = e(c, p, f, g), A = qd(g, "*");
    l[p] = ri(u, f);
    A && k(g, u);
  }
  try {
    const p = a[b](...l);
    return si(p, f);
  } catch (p) {
    return U(`Error calling method ${b} on:`, a, "error:", p), -1;
  }
}, godot_js_wrapper_object_get:function(a, b, c) {
  a = qi(a);
  if (void 0 === a) {
    return 0;
  }
  if (c) {
    c = C(c);
    try {
      return si(a[c], b);
    } catch (d) {
      return U(`Error getting variable ${c} on object`, a), 0;
    }
  }
  return si(a, b);
}, godot_js_wrapper_object_getvar:function(a, b, c) {
  a = qi(a);
  if (void 0 === a) {
    return -1;
  }
  b = ri(b, c);
  if (void 0 === b || null === b) {
    return -1;
  }
  try {
    return si(a[b], c);
  } catch (d) {
    return U(`Error getting variable ${b} on object`, a, d), -1;
  }
}, godot_js_wrapper_object_set:function(a, b, c, d) {
  a = qi(a);
  if (void 0 !== a) {
    b = C(b);
    try {
      a[b] = ri(c, d);
    } catch (e) {
      U(`Error setting variable ${b} on object`, a);
    }
  }
}, godot_js_wrapper_object_set_cb_ret:function(a, b) {
  ni = ri(a, b);
}, godot_js_wrapper_object_setvar:function(a, b, c, d, e) {
  a = qi(a);
  if (void 0 === a) {
    return -1;
  }
  b = ri(b, c);
  try {
    return a[b] = ri(d, e), 0;
  } catch (f) {
    return U(`Error setting variable ${b} on object`, a), -1;
  }
}, godot_js_wrapper_object_unref:function(a) {
  a = Z[a];
  void 0 !== a && a.cd();
}, godot_webgl2_glFramebufferTextureMultiviewOVR:ti, godot_webxr_get_bounds_geometry:Ni, godot_webxr_get_color_texture:Oi, godot_webxr_get_depth_texture:Pi, godot_webxr_get_frame_rate:Qi, godot_webxr_get_projection_for_view:Ri, godot_webxr_get_render_target_size:Si, godot_webxr_get_supported_frame_rates:Ti, godot_webxr_get_transform_for_view:Ui, godot_webxr_get_velocity_texture:Vi, godot_webxr_get_view_count:Wi, godot_webxr_get_visibility_state:Xi, godot_webxr_initialize:Yi, godot_webxr_is_session_supported:Zi, 
godot_webxr_is_supported:$i, godot_webxr_uninitialize:aj, godot_webxr_update_input_source:bj, godot_webxr_update_target_frame_rate:cj, invoke_ii:oj, invoke_iii:pj, invoke_iiii:qj, invoke_iiiii:rj, invoke_iiiiiii:sj, invoke_vi:tj, invoke_vii:uj, invoke_viii:vj, invoke_viiii:wj, invoke_viiiiiii:xj, memory:m || v.wasmMemory, setTempRet0:function(a) {
  Ra = a;
}, strftime:gj, strftime_l:function(a, b, c, d) {
  return gj(a, b, c, d);
}};
(function() {
  function a(f, g) {
    v.asm = f.exports;
    H.Na.push(v.asm._emscripten_tls_init);
    cb = v.asm.__indirect_function_table;
    y(cb, "table not found in wasm exports");
    jb.unshift(v.asm.__wasm_call_ctors);
    Ta = g;
    if (!w) {
      var k = H.O.length;
      H.O.forEach(function(l) {
        H.Bb(l, function() {
          if (!--k && (Bb--, v.monitorRunDependencies && v.monitorRunDependencies(Bb), y(Eb["wasm-instantiate"]), delete Eb["wasm-instantiate"], 0 == Bb && (null !== Cb && (clearInterval(Cb), Cb = null), Db))) {
            var p = Db;
            Db = null;
            p();
          }
        });
      });
    }
  }
  function b(f) {
    y(v === e, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    e = null;
    a(f.instance, f.module);
  }
  function c(f) {
    return Jb().then(function(g) {
      return WebAssembly.instantiate(g, d);
    }).then(function(g) {
      return g;
    }).then(f, function(g) {
      z("failed to asynchronously prepare wasm: " + g);
      Hb.startsWith("file://") && z("warning: Loading from a file URI (" + Hb + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
      za(g);
    });
  }
  var d = {env:yj, wasi_snapshot_preview1:yj};
  w || Fb();
  var e = v;
  if (v.instantiateWasm) {
    try {
      return v.instantiateWasm(d, a);
    } catch (f) {
      return z("Module.instantiateWasm callback failed with error: " + f), !1;
    }
  }
  (function() {
    return Sa || "function" != typeof WebAssembly.instantiateStreaming || Gb() || "function" != typeof fetch ? c(b) : fetch(Hb, {credentials:"same-origin"}).then(function(f) {
      return WebAssembly.instantiateStreaming(f, d).then(b, function(g) {
        z("wasm streaming compile failed: " + g);
        z("falling back to ArrayBuffer instantiation");
        return c(b);
      });
    });
  })().catch(xa);
  return {};
})();
v.___wasm_call_ctors = E("__wasm_call_ctors");
v._emscripten_webgl_make_context_current = E("emscripten_webgl_make_context_current");
v._emscripten_webgl_commit_frame = E("emscripten_webgl_commit_frame");
var S = v._free = E("free");
v.__Z14godot_web_mainiPPc = E("_Z14godot_web_mainiPPc");
v._main = E("__main_argc_argv");
var ve = v._malloc = E("malloc"), xg = v._htonl = E("htonl"), Dd = v._htons = E("htons"), Md = v._ntohs = E("ntohs"), Xd = v.___errno_location = E("__errno_location"), gd = v._fflush = E("fflush");
v.__emwebxr_on_input_event = E("_emwebxr_on_input_event");
v.__emwebxr_on_simple_event = E("_emwebxr_on_simple_event");
v.__emscripten_tls_init = E("_emscripten_tls_init");
var kd = v._pthread_self = E("pthread_self"), fc = v._emscripten_builtin_memalign = E("emscripten_builtin_memalign"), th = v._emscripten_webgl_get_current_context = E("emscripten_webgl_get_current_context");
v._emscripten_dispatch_to_thread_ = E("emscripten_dispatch_to_thread_");
var fd = v.___funcs_on_exit = E("__funcs_on_exit");
v.___dl_seterr = E("__dl_seterr");
var nj = v.__emscripten_thread_init = E("_emscripten_thread_init");
v.__emscripten_thread_crashed = E("_emscripten_thread_crashed");
v._emscripten_main_thread_process_queued_calls = E("emscripten_main_thread_process_queued_calls");
v._raise = E("raise");
v._emscripten_main_browser_thread_id = E("emscripten_main_browser_thread_id");
var cg = v._emscripten_run_in_main_runtime_thread_js = E("emscripten_run_in_main_runtime_thread_js");
v._emscripten_stack_get_base = function() {
  return (v._emscripten_stack_get_base = v.asm.emscripten_stack_get_base).apply(null, arguments);
};
var eb = v._emscripten_stack_get_end = function() {
  return (eb = v._emscripten_stack_get_end = v.asm.emscripten_stack_get_end).apply(null, arguments);
}, se = v.__emscripten_proxy_execute_task_queue = E("_emscripten_proxy_execute_task_queue"), jd = v.__emscripten_thread_free_data = E("_emscripten_thread_free_data"), td = v.__emscripten_thread_exit = E("_emscripten_thread_exit"), zj = v._setThrew = E("setThrew");
v._saveSetjmp = E("saveSetjmp");
var Aj = v._emscripten_stack_init = function() {
  return (Aj = v._emscripten_stack_init = v.asm.emscripten_stack_init).apply(null, arguments);
}, pd = v._emscripten_stack_set_limits = function() {
  return (pd = v._emscripten_stack_set_limits = v.asm.emscripten_stack_set_limits).apply(null, arguments);
};
v._emscripten_stack_get_free = function() {
  return (v._emscripten_stack_get_free = v.asm.emscripten_stack_get_free).apply(null, arguments);
};
var nd = v.stackSave = E("stackSave"), od = v.stackRestore = E("stackRestore"), bg = v.stackAlloc = E("stackAlloc");
v.___cxa_is_pointer_type = E("__cxa_is_pointer_type");
v.dynCall_vjiii = E("dynCall_vjiii");
v.dynCall_vij = E("dynCall_vij");
v.dynCall_ji = E("dynCall_ji");
v.dynCall_viiij = E("dynCall_viiij");
v.dynCall_jiiii = E("dynCall_jiiii");
v.dynCall_viiiiifiijii = E("dynCall_viiiiifiijii");
v.dynCall_viiiiifiiijjii = E("dynCall_viiiiifiiijjii");
v.dynCall_viiiiifiiijii = E("dynCall_viiiiifiiijii");
v.dynCall_viiiiifiiiijjii = E("dynCall_viiiiifiiiijjii");
v.dynCall_jii = E("dynCall_jii");
v.dynCall_viij = E("dynCall_viij");
v.dynCall_jiji = E("dynCall_jiji");
v.dynCall_viiiij = E("dynCall_viiiij");
v.dynCall_viiiiijiii = E("dynCall_viiiiijiii");
v.dynCall_viiiiijj = E("dynCall_viiiiijj");
v.dynCall_viji = E("dynCall_viji");
v.dynCall_vijii = E("dynCall_vijii");
v.dynCall_jiifff = E("dynCall_jiifff");
v.dynCall_vijf = E("dynCall_vijf");
v.dynCall_iij = E("dynCall_iij");
v.dynCall_vijiii = E("dynCall_vijiii");
v.dynCall_vijiiii = E("dynCall_vijiiii");
v.dynCall_viiiiij = E("dynCall_viiiiij");
v.dynCall_viiiiiji = E("dynCall_viiiiiji");
v.dynCall_viiijii = E("dynCall_viiijii");
v.dynCall_vijiiiiiidddd = E("dynCall_vijiiiiiidddd");
v.dynCall_jij = E("dynCall_jij");
v.dynCall_jiij = E("dynCall_jiij");
v.dynCall_jiijiiii = E("dynCall_jiijiiii");
v.dynCall_jiii = E("dynCall_jiii");
v.dynCall_jiiji = E("dynCall_jiiji");
v.dynCall_jiiiji = E("dynCall_jiiiji");
v.dynCall_jiijii = E("dynCall_jiijii");
v.dynCall_iijiiij = E("dynCall_iijiiij");
v.dynCall_jijjjiiiiijii = E("dynCall_jijjjiiiiijii");
v.dynCall_jijiiiiifiii = E("dynCall_jijiiiiifiii");
v.dynCall_viijiiiiiifiii = E("dynCall_viijiiiiiifiii");
v.dynCall_jiiiiiii = E("dynCall_jiiiiiii");
v.dynCall_viiji = E("dynCall_viiji");
v.dynCall_vijj = E("dynCall_vijj");
v.dynCall_vijji = E("dynCall_vijji");
v.dynCall_vijjii = E("dynCall_vijjii");
v.dynCall_fij = E("dynCall_fij");
v.dynCall_vijiffifff = E("dynCall_vijiffifff");
v.dynCall_vijff = E("dynCall_vijff");
v.dynCall_vijiffff = E("dynCall_vijiffff");
v.dynCall_vijjf = E("dynCall_vijjf");
v.dynCall_vijij = E("dynCall_vijij");
v.dynCall_vijif = E("dynCall_vijif");
v.dynCall_vijiiifi = E("dynCall_vijiiifi");
v.dynCall_vijiifi = E("dynCall_vijiifi");
v.dynCall_vijiif = E("dynCall_vijiif");
v.dynCall_vijifi = E("dynCall_vijifi");
v.dynCall_vijijiii = E("dynCall_vijijiii");
v.dynCall_vijijiiii = E("dynCall_vijijiiii");
v.dynCall_vijijiiiff = E("dynCall_vijijiiiff");
v.dynCall_vijijii = E("dynCall_vijijii");
v.dynCall_vijiijiiiiii = E("dynCall_vijiijiiiiii");
v.dynCall_vijiiij = E("dynCall_vijiiij");
v.dynCall_vijiiiiiiji = E("dynCall_vijiiiiiiji");
v.dynCall_vijjj = E("dynCall_vijjj");
v.dynCall_vijdddd = E("dynCall_vijdddd");
v.dynCall_vijififi = E("dynCall_vijififi");
v.dynCall_iiiij = E("dynCall_iiiij");
v.dynCall_iijji = E("dynCall_iijji");
v.dynCall_viijj = E("dynCall_viijj");
v.dynCall_jiiiiii = E("dynCall_jiiiiii");
v.dynCall_viiiiji = E("dynCall_viiiiji");
v.dynCall_dij = E("dynCall_dij");
v.dynCall_vijd = E("dynCall_vijd");
v.dynCall_iiij = E("dynCall_iiij");
v.dynCall_jiiiii = E("dynCall_jiiiii");
v.dynCall_ij = E("dynCall_ij");
v.dynCall_viijiiii = E("dynCall_viijiiii");
v.dynCall_viijiii = E("dynCall_viijiii");
v.dynCall_iiji = E("dynCall_iiji");
v.dynCall_iiiijf = E("dynCall_iiiijf");
v.dynCall_vijiiiii = E("dynCall_vijiiiii");
v.dynCall_iiiiiiiji = E("dynCall_iiiiiiiji");
v.dynCall_viijd = E("dynCall_viijd");
v.dynCall_diij = E("dynCall_diij");
v.dynCall_viiiji = E("dynCall_viiiji");
v.dynCall_viiijj = E("dynCall_viiijj");
v.dynCall_viijji = E("dynCall_viijji");
v.dynCall_jiiij = E("dynCall_jiiij");
v.dynCall_viijii = E("dynCall_viijii");
v.dynCall_jiijjj = E("dynCall_jiijjj");
v.dynCall_jiijj = E("dynCall_jiijj");
v.dynCall_viiijiji = E("dynCall_viiijiji");
v.dynCall_viiijjiji = E("dynCall_viiijjiji");
v.dynCall_viijiji = E("dynCall_viijiji");
v.dynCall_iiiiijiii = E("dynCall_iiiiijiii");
v.dynCall_iiiiiijd = E("dynCall_iiiiiijd");
v.dynCall_diidj = E("dynCall_diidj");
v.dynCall_viiiijij = E("dynCall_viiiijij");
v.dynCall_viiidjj = E("dynCall_viiidjj");
v.dynCall_viidj = E("dynCall_viidj");
v.dynCall_iiijj = E("dynCall_iiijj");
v.dynCall_jiid = E("dynCall_jiid");
v.dynCall_viiiiddji = E("dynCall_viiiiddji");
v.dynCall_vijiiiiiiiii = E("dynCall_vijiiiiiiiii");
v.dynCall_vijiiiffi = E("dynCall_vijiiiffi");
v.dynCall_vijiiifii = E("dynCall_vijiiifii");
v.dynCall_viijfii = E("dynCall_viijfii");
v.dynCall_viiiiiiiiiiijjjjjjifiiiiii = E("dynCall_viiiiiiiiiiijjjjjjifiiiiii");
v.dynCall_vijifff = E("dynCall_vijifff");
v.dynCall_fiji = E("dynCall_fiji");
v.dynCall_vijiiffifffi = E("dynCall_vijiiffifffi");
v.dynCall_iijj = E("dynCall_iijj");
v.dynCall_iijjfj = E("dynCall_iijjfj");
v.dynCall_vijiji = E("dynCall_vijiji");
v.dynCall_jijii = E("dynCall_jijii");
v.dynCall_vijid = E("dynCall_vijid");
v.dynCall_vijiiiffiiiii = E("dynCall_vijiiiffiiiii");
v.dynCall_vijiiiiii = E("dynCall_vijiiiiii");
v.dynCall_vijiff = E("dynCall_vijiff");
v.dynCall_vijjjj = E("dynCall_vijjjj");
v.dynCall_vijiiiiiii = E("dynCall_vijiiiiiii");
v.dynCall_jiiifi = E("dynCall_jiiifi");
v.dynCall_viiiifijii = E("dynCall_viiiifijii");
v.dynCall_viiiifiijjii = E("dynCall_viiiifiijjii");
v.dynCall_vijiiifiijii = E("dynCall_vijiiifiijii");
v.dynCall_vijiiifiiijjii = E("dynCall_vijiiifiiijjii");
v.dynCall_vijiiifiiijii = E("dynCall_vijiiifiiijii");
v.dynCall_vijiiifiiiijjii = E("dynCall_vijiiifiiiijjii");
v.dynCall_fijiiii = E("dynCall_fijiiii");
v.dynCall_fijiiiii = E("dynCall_fijiiiii");
v.dynCall_iijii = E("dynCall_iijii");
v.dynCall_iijiijiiiii = E("dynCall_iijiijiiiii");
v.dynCall_iijijiiiii = E("dynCall_iijijiiiii");
v.dynCall_vijijj = E("dynCall_vijijj");
v.dynCall_vijiiijj = E("dynCall_vijiiijj");
v.dynCall_vijiijj = E("dynCall_vijiijj");
v.dynCall_vijjiji = E("dynCall_vijjiji");
v.dynCall_vijjiijii = E("dynCall_vijjiijii");
v.dynCall_fijii = E("dynCall_fijii");
v.dynCall_vijiiiij = E("dynCall_vijiiiij");
v.dynCall_jijj = E("dynCall_jijj");
v.dynCall_jiiif = E("dynCall_jiiif");
v.dynCall_vijfff = E("dynCall_vijfff");
v.dynCall_vijfiff = E("dynCall_vijfiff");
v.dynCall_vijfi = E("dynCall_vijfi");
v.dynCall_vijffffi = E("dynCall_vijffffi");
v.dynCall_vijiiffi = E("dynCall_vijiiffi");
v.dynCall_vijiifffffff = E("dynCall_vijiifffffff");
v.dynCall_vijifiifffffifff = E("dynCall_vijifiifffffifff");
v.dynCall_vijiiffffiffffj = E("dynCall_vijiiffffiffffj");
v.dynCall_vijiifff = E("dynCall_vijiifff");
v.dynCall_vijiffffffff = E("dynCall_vijiffffffff");
v.dynCall_vijiifiififff = E("dynCall_vijiifiififff");
v.dynCall_vijifffij = E("dynCall_vijifffij");
v.dynCall_viijjjiifjii = E("dynCall_viijjjiifjii");
v.dynCall_vijjjii = E("dynCall_vijjjii");
v.dynCall_fijj = E("dynCall_fijj");
v.dynCall_iijjiii = E("dynCall_iijjiii");
v.dynCall_iiiiij = E("dynCall_iiiiij");
v.dynCall_iiiiijj = E("dynCall_iiiiijj");
v.dynCall_iiiiiijj = E("dynCall_iiiiiijj");
function uj(a, b, c) {
  var d = nd();
  try {
    sd(a)(b, c);
  } catch (e) {
    od(d);
    if (e !== e + 0) {
      throw e;
    }
    zj(1, 0);
  }
}
function tj(a, b) {
  var c = nd();
  try {
    sd(a)(b);
  } catch (d) {
    od(c);
    if (d !== d + 0) {
      throw d;
    }
    zj(1, 0);
  }
}
function vj(a, b, c, d) {
  var e = nd();
  try {
    sd(a)(b, c, d);
  } catch (f) {
    od(e);
    if (f !== f + 0) {
      throw f;
    }
    zj(1, 0);
  }
}
function oj(a, b) {
  var c = nd();
  try {
    return sd(a)(b);
  } catch (d) {
    od(c);
    if (d !== d + 0) {
      throw d;
    }
    zj(1, 0);
  }
}
function wj(a, b, c, d, e) {
  var f = nd();
  try {
    sd(a)(b, c, d, e);
  } catch (g) {
    od(f);
    if (g !== g + 0) {
      throw g;
    }
    zj(1, 0);
  }
}
function pj(a, b, c) {
  var d = nd();
  try {
    return sd(a)(b, c);
  } catch (e) {
    od(d);
    if (e !== e + 0) {
      throw e;
    }
    zj(1, 0);
  }
}
function qj(a, b, c, d) {
  var e = nd();
  try {
    return sd(a)(b, c, d);
  } catch (f) {
    od(e);
    if (f !== f + 0) {
      throw f;
    }
    zj(1, 0);
  }
}
function rj(a, b, c, d, e) {
  var f = nd();
  try {
    return sd(a)(b, c, d, e);
  } catch (g) {
    od(f);
    if (g !== g + 0) {
      throw g;
    }
    zj(1, 0);
  }
}
function xj(a, b, c, d, e, f, g, k) {
  var l = nd();
  try {
    sd(a)(b, c, d, e, f, g, k);
  } catch (p) {
    od(l);
    if (p !== p + 0) {
      throw p;
    }
    zj(1, 0);
  }
}
function sj(a, b, c, d, e, f, g) {
  var k = nd();
  try {
    return sd(a)(b, c, d, e, f, g);
  } catch (l) {
    od(k);
    if (l !== l + 0) {
      throw l;
    }
    zj(1, 0);
  }
}
v.callMain = Bj;
v.keepRuntimeAlive = pb;
v.wasmMemory = m;
v.cwrap = function(a, b, c) {
  return function() {
    return ij(a, b, c, arguments);
  };
};
v.ExitStatus = Na;
v.PThread = H;
"run UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun addRunDependency removeRunDependency FS_createFolder FS_createPath FS_createDataFile FS_createPreloadedFile FS_createLazyFile FS_createLink FS_createDevice FS_unlink getLEB getFunctionTables alignFunctionTables registerFunctions prettyPrint getCompilerSetting print printErr getTempRet0 setTempRet0 abort stackSave stackRestore stackAlloc GROWABLE_HEAP_I8 GROWABLE_HEAP_U8 GROWABLE_HEAP_I16 GROWABLE_HEAP_U16 GROWABLE_HEAP_I32 GROWABLE_HEAP_U32 GROWABLE_HEAP_F32 GROWABLE_HEAP_F64 writeStackCookie checkStackCookie ptrToString zeroMemory stringToNewUTF8 exitJS getHeapMax emscripten_realloc_buffer ENV ERRNO_CODES ERRNO_MESSAGES setErrNo inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr DNS getHostByName Protocols Sockets getRandomDevice warnOnce traverseStack UNWIND_CACHE convertPCtoSourceLocation readAsmConstArgsArray readAsmConstArgs mainThreadEM_ASM jstoi_q jstoi_s getExecutableName listenOnce autoResumeAudioContext dynCallLegacy getDynCaller dynCall handleException runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit safeSetTimeout asmjsMangle asyncLoad alignMemory mmapAlloc writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getCFunc ccall uleb128Encode sigToWasmTypes convertJsFunctionToWasm freeTableIndexes functionsInTableMap getEmptyTableSlot updateTableMap addFunction removeFunction reallyNegative unSign strLen reSign formatString setValue getValue PATH PATH_FS intArrayFromString intArrayToString AsciiToString stringToAscii UTF16Decoder UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 allocateUTF8 allocateUTF8OnStack writeStringToMemory writeArrayToMemory writeAsciiToMemory SYSCALLS getSocketFromFD getSocketAddress JSEvents registerKeyEventCallback specialHTMLTargets maybeCStringToJsString findEventTarget findCanvasEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox currentFullscreenStrategy restoreOldWindowedStyle softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize demangle demangleAll jsStackTrace stackTrace getEnvStrings checkWasiClock doReadv doWritev dlopenMissingError setImmediateWrapped clearImmediateWrapped polyfillSetImmediate uncaughtExceptionCount exceptionLast exceptionCaught ExceptionInfo exception_addRef exception_decRef Browser setMainLoop wget FS MEMFS TTY PIPEFS SOCKFS _setNetworkCallback tempFixedLengthArray miniTempWebGLFloatBuffers heapObjectForWebGLType heapAccessShiftForWebGLHeap GL emscriptenWebGLGet computeUnpackAlignedImageSize emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib writeGLArray AL SDL_unicode SDL_ttfContext SDL_audio SDL SDL_gfx GLUT EGL GLFW_Window GLFW GLEW IDBStore runAndAbortIfError emscriptenWebGLGetIndexed ALLOC_NORMAL ALLOC_STACK allocate killThread cleanupThread registerTLSInit cancelThread spawnThread exitOnMainThread invokeEntryPoint executeNotifiedProxyingQueue GodotWebXR GodotWebSocket GodotRTCDataChannel GodotRTCPeerConnection GodotAudio GodotAudioWorklet GodotAudioScript GodotDisplayVK GodotDisplayCursor GodotDisplayScreen GodotDisplay GodotFetch IDHandler GodotConfig GodotFS GodotOS GodotEventListeners GodotPWA GodotRuntime GodotInputGamepads GodotInputDragDrop GodotInput GodotWebGL2 GodotJSWrapper IDBFS".split(" ").forEach(function(a) {
  Object.getOwnPropertyDescriptor(v, a) || Object.defineProperty(v, a, {configurable:!0, get:function() {
    var b = "'" + a + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
    Qa(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    za(b);
  }});
});
"getHostByName traverseStack convertPCtoSourceLocation readAsmConstArgs mainThreadEM_ASM jstoi_s listenOnce autoResumeAudioContext dynCallLegacy getDynCaller dynCall asmjsMangle writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling convertI32PairToI53 convertU32PairToI53 reallyNegative unSign strLen reSign formatString registerKeyEventCallback getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize checkWasiClock setImmediateWrapped clearImmediateWrapped polyfillSetImmediate exception_addRef exception_decRef _setNetworkCallback emscriptenWebGLGetUniform emscriptenWebGLGetVertexAttrib writeGLArray SDL_unicode SDL_ttfContext SDL_audio GLFW_Window runAndAbortIfError emscriptenWebGLGetIndexed".split(" ").forEach(function(a) {
  "undefined" === typeof globalThis || Object.getOwnPropertyDescriptor(globalThis, a) || Object.defineProperty(globalThis, a, {configurable:!0, get:function() {
    var b = "`" + a + "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";
    Qa(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    Ya(b);
  }});
});
var Cj;
Db = function Dj() {
  Cj || Ej();
  Cj || (Db = Dj);
};
function Bj(a) {
  y(0 == Bb, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  y(0 == ib.length, "cannot call main when preRun functions remain to be called");
  var b = v._main;
  a = a || [];
  a.unshift(Ca);
  var c = a.length, d = bg(4 * (c + 1)), e = d >> 2;
  a.forEach(g => {
    var k = n(), l = e++, p = ab(g) + 1, u = bg(p);
    Za(g, h(), u, p);
    k[l] = u;
  });
  n()[e] = 0;
  try {
    var f = b(c, d);
    dd(f, !0);
    return f;
  } catch (g) {
    return hd(g);
  }
}
function Ej() {
  function a() {
    if (!Cj && (Cj = !0, v.calledRun = !0, !Ua)) {
      qb();
      fb();
      w || zb(kb);
      wa(v);
      if (v.onRuntimeInitialized) {
        v.onRuntimeInitialized();
      }
      Fj && Bj(b);
      fb();
      if (!w) {
        if (v.postRun) {
          for ("function" == typeof v.postRun && (v.postRun = [v.postRun]); v.postRun.length;) {
            var c = v.postRun.shift();
            mb.unshift(c);
          }
        }
        zb(mb);
      }
    }
  }
  var b = b || Ba;
  if (!(0 < Bb)) {
    if (w || (y(!w), Aj(), db()), w) {
      wa(v), qb(), postMessage({cmd:"loaded"});
    } else {
      y(!w);
      if (v.preRun) {
        for ("function" == typeof v.preRun && (v.preRun = [v.preRun]); v.preRun.length;) {
          Ab();
        }
      }
      zb(ib);
      0 < Bb || (v.setStatus ? (v.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          v.setStatus("");
        }, 1);
        a();
      }, 1)) : a(), fb());
    }
  }
}
if (v.preInit) {
  for ("function" == typeof v.preInit && (v.preInit = [v.preInit]); 0 < v.preInit.length;) {
    v.preInit.pop()();
  }
}
var Fj = !1;
v.noInitialRun && (Fj = !1);
Ej();



  return Godot.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Godot;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Godot; });
else if (typeof exports === 'object')
  exports["Godot"] = Godot;

function t(c=1){try{return!!document.createElement("canvas").getContext(["webgl","webgl2"][c-1])}catch(l){}return!1}function u(){return"fetch"in window&&"Response"in window&&"body"in window.Response.prototype}function v(){return!0===window.isSecureContext}function w(){return!0===window.crossOriginIsolated}function x(){return"SharedArrayBuffer"in window}function y(){return"AudioContext"in window&&"audioWorklet"in AudioContext.prototype}
function z(){const c=[];t(2)||c.push("WebGL2 - Check web browser configuration and hardware support");u()||c.push("Fetch - Check web browser version");v()||c.push("Secure Context - Check web server configuration (use HTTPS)");w()||c.push("Cross Origin Isolation - Check web server configuration (send correct headers)");x()||c.push("SharedArrayBuffer - Check web server configuration (send correct headers)");return c};function A(){function c(){let a=0,d=0,m=!0,h=!0;Object.keys(n).forEach(function(e){e=n[e];e.done||(h=!1);m&&0!==e.total?d+=e.total:(m=!1,d=0);a+=e.loaded});if(a!==g||d!==p)g=a,p=d,"function"===typeof f&&f(a,d);h||requestAnimationFrame(c)}function l(a,d){function m(e,q){return e.read().then(function(r){if(d.done)return Promise.resolve();r.value&&(q.enqueue(r.value),d.loaded+=r.value.length);if(!r.done)return m(e,q);d.done=!0;return Promise.resolve()})}const h=a.body.getReader();return new Response(new ReadableStream({start:function(e){m(h,
e).then(function(){e.close()})}}),{headers:a.headers})}function k(a,d,m,h){d[a]={total:m||0,loaded:0,done:!1};return fetch(a).then(function(e){if(!e.ok)return Promise.reject(Error(`Failed loading file '${a}'`));e=l(e,d[a]);return h?Promise.resolve(e):e.arrayBuffer()})}function b(a,d=1){return a().catch(function(m){return 1>=d?Promise.reject(m):new Promise(function(h,e){setTimeout(function(){b(a,d-1).then(h).catch(e)},1E3)})})}const n={};var g=0,p=0;let f=null;this.R=c;this.S=function(a){f=a};this.o=
function(a,d,m=!1){return b(k.bind(null,a,n,d,m),4)};this.i=[];this.B=function(a,d,m){let h=null;if("string"===typeof a){const e=this;return this.o(a,m).then(function(q){e.i.push({path:d||a,buffer:q});return Promise.resolve()})}a instanceof ArrayBuffer?h=new Uint8Array(a):ArrayBuffer.isView(a)&&(h=new Uint8Array(a.buffer));return h?(this.i.push({path:d,buffer:a}),Promise.resolve()):Promise.reject(Error("Invalid object for preloading"))}};function B(c){function l(k){this.update(k)}l.prototype={M:!0,canvas:null,l:"",D:null,locale:null,s:2,j:[],v:!0,u:!1,serviceWorker:"",L:["/userfs"],K:!1,A:[],m:[],F:null,G:null,J:null,H:function(){console.log.apply(console,Array.from(arguments))},I:function(k){console.error.apply(console,Array.from(arguments))}};l.prototype.update=function(k){function b(g,p){return"undefined"===typeof n[g]?p:n[g]}const n=k||{};this.M=b("unloadAfterInit",this.M);this.I=b("onPrintError",this.I);this.H=b("onPrint",this.H);
this.J=b("onProgress",this.J);this.canvas=b("canvas",this.canvas);this.l=b("executable",this.l);this.D=b("mainPack",this.D);this.locale=b("locale",this.locale);this.s=b("canvasResizePolicy",this.s);this.L=b("persistentPaths",this.L);this.K=b("persistentDrops",this.K);this.u=b("experimentalVK",this.u);this.v=b("focusCanvas",this.v);this.serviceWorker=b("serviceWorker",this.serviceWorker);this.A=b("gdextensionLibs",this.A);this.m=b("fileSizes",this.m);this.j=b("args",this.j);this.F=b("onExecute",this.F);
this.G=b("onExit",this.G)};l.prototype.P=function(k,b){let n=b;return{print:this.H,printErr:this.I,thisProgram:this.l,noExitRuntime:!1,dynamicLibraries:[`${k}.side.wasm`],instantiateWasm:function(g,p){function f(a){p(a.instance,a.module)}"undefined"!==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(Promise.resolve(n),g).then(f):n.arrayBuffer().then(function(a){WebAssembly.instantiate(a,g).then(f)});n=null;return{}},locateFile:function(g){return g.endsWith(".worker.js")?`${k}.worker.js`:
g.endsWith(".audio.worklet.js")?`${k}.audio.worklet.js`:g.endsWith(".js")?`${k}.js`:g.endsWith(".side.wasm")?`${k}.side.wasm`:g.endsWith(".wasm")?`${k}.wasm`:g}}};l.prototype.O=function(k){if(!(this.canvas instanceof HTMLCanvasElement)){var b=document.getElementsByTagName("canvas");b.length&&b[0]instanceof HTMLCanvasElement&&(this.canvas=b[0]);if(!this.canvas)throw Error("No canvas found in page");}0>this.canvas.tabIndex&&(this.canvas.tabIndex=0);b=this.locale;b||(b=navigator.languages?navigator.languages[0]:
navigator.language,b=b.split(".")[0]);b=b.replace("-","_");const n=this.G;return{canvas:this.canvas,canvasResizePolicy:this.s,locale:b,persistentDrops:this.K,virtualKeyboard:this.u,focusCanvas:this.v,onExecute:this.F,onExit:function(g){k();"function"===typeof n&&n(g)}}};return new l(c)};const C=function(){function c(p){this.g=new B(p);this.h=null}function l(p){c.prototype={C:function(f){if(g)return g;if(null==b){if(!f)return g=Promise.reject(Error("A base path must be provided when calling `init` and the engine is not loaded."));c.load(f,this.g.m[`${f}.wasm`])}const a=this;k.S(this.g.J);return g=function(d){return new Promise(function(m){d.then(function(h){h=new Response(h.clone().body,{headers:[["content-type","application/wasm"]]});Godot(a.g.P(n,h)).then(function(e){e.initFS(a.g.L).then(function(){a.h=
e;a.g.M&&c.i();m()})})})})}(b)},N:function(f,a){return k.B(f,a,this.g.m[f])},start:function(f){this.g.update(f);const a=this;return a.C().then(function(){if(!a.h)return Promise.reject(Error("The engine must be initialized before it can be started"));let d={};try{d=a.g.O(function(){a.h=null})}catch(h){return Promise.reject(h)}a.h.initConfig(d);const m=[];a.g.A.forEach(function(h){m.push(a.h.loadDynamicLibrary(h,{loadAsync:!0}))});return Promise.all(m).then(function(){return new Promise(function(h){k.i.forEach(function(e){a.h.copyToFS(e.path,
e.buffer)});k.i.length=0;a.h.callMain(a.g.j);g=null;a.g.serviceWorker&&"serviceWorker"in navigator&&navigator.serviceWorker.register(a.g.serviceWorker);h()})})})},B:function(f){this.g.update(f);f=this.g.l;const a=this.g.D||`${f}.pck`;this.g.j=["--main-pack",a].concat(this.g.j);const d=this;return Promise.all([this.C(f),this.N(a,a)]).then(function(){return d.start.apply(d)})},i:function(f,a){if(null==this.h)throw Error("Engine must be inited before copying files");this.h.copyToFS(f,a)},o:function(){this.h&&
this.h.request_quit()}};c.prototype.init=c.prototype.C;c.prototype.preloadFile=c.prototype.N;c.prototype.start=c.prototype.start;c.prototype.startGame=c.prototype.B;c.prototype.copyToFS=c.prototype.i;c.prototype.requestQuit=c.prototype.o;c.prototype.load=c.load;c.prototype.unload=c.i;return new c(p)}const k=new A;let b=null,n="",g=null;c.load=function(p,f){null==b&&(n=p,b=k.o(`${n}.wasm`,f,!0),requestAnimationFrame(k.R));return b};c.i=function(){b=null};l.load=c.load;l.unload=c.i;l.isWebGLAvailable=
t;l.isFetchAvailable=u;l.isSecureContext=v;l.isCrossOriginIsolated=w;l.isSharedArrayBufferAvailable=x;l.isAudioWorkletAvailable=y;l.getMissingFeatures=z;return l}();"undefined"!==typeof window&&(window.Engine=C);
