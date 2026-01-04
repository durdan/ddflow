import { jsxs as S, jsx as l, Fragment as yt } from "react/jsx-runtime";
import Uc, { useState as V, useRef as _e, useEffect as he, useMemo as ye, useCallback as K } from "react";
var $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zg(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function xc(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bn, Gc;
function Og() {
  if (Gc) return bn;
  Gc = 1;
  function o() {
    this.__data__ = [], this.size = 0;
  }
  return bn = o, bn;
}
var xn, jc;
function Ft() {
  if (jc) return xn;
  jc = 1;
  function o(t, r) {
    return t === r || t !== t && r !== r;
  }
  return xn = o, xn;
}
var vn, Hc;
function zr() {
  if (Hc) return vn;
  Hc = 1;
  var o = Ft();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (o(r[i][0], n))
        return i;
    return -1;
  }
  return vn = t, vn;
}
var wn, Yc;
function qg() {
  if (Yc) return wn;
  Yc = 1;
  var o = zr(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, e = o(a, i);
    if (e < 0)
      return !1;
    var s = a.length - 1;
    return e == s ? a.pop() : r.call(a, e, 1), --this.size, !0;
  }
  return wn = n, wn;
}
var Sn, Vc;
function Fg() {
  if (Vc) return Sn;
  Vc = 1;
  var o = zr();
  function t(r) {
    var n = this.__data__, i = o(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return Sn = t, Sn;
}
var kn, Kc;
function Ug() {
  if (Kc) return kn;
  Kc = 1;
  var o = zr();
  function t(r) {
    return o(this.__data__, r) > -1;
  }
  return kn = t, kn;
}
var En, Xc;
function Gg() {
  if (Xc) return En;
  Xc = 1;
  var o = zr();
  function t(r, n) {
    var i = this.__data__, a = o(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return En = t, En;
}
var Cn, Qc;
function Or() {
  if (Qc) return Cn;
  Qc = 1;
  var o = Og(), t = qg(), r = Fg(), n = Ug(), i = Gg();
  function a(e) {
    var s = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++s < h; ) {
      var d = e[s];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = o, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Cn = a, Cn;
}
var Mn, Zc;
function jg() {
  if (Zc) return Mn;
  Zc = 1;
  var o = Or();
  function t() {
    this.__data__ = new o(), this.size = 0;
  }
  return Mn = t, Mn;
}
var An, Jc;
function Hg() {
  if (Jc) return An;
  Jc = 1;
  function o(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return An = o, An;
}
var $n, el;
function Yg() {
  if (el) return $n;
  el = 1;
  function o(t) {
    return this.__data__.get(t);
  }
  return $n = o, $n;
}
var Rn, tl;
function Vg() {
  if (tl) return Rn;
  tl = 1;
  function o(t) {
    return this.__data__.has(t);
  }
  return Rn = o, Rn;
}
var In, rl;
function af() {
  if (rl) return In;
  rl = 1;
  var o = typeof $r == "object" && $r && $r.Object === Object && $r;
  return In = o, In;
}
var Tn, nl;
function pt() {
  if (nl) return Tn;
  nl = 1;
  var o = af(), t = typeof self == "object" && self && self.Object === Object && self, r = o || t || Function("return this")();
  return Tn = r, Tn;
}
var Pn, ol;
function Ut() {
  if (ol) return Pn;
  ol = 1;
  var o = pt(), t = o.Symbol;
  return Pn = t, Pn;
}
var _n, il;
function Kg() {
  if (il) return _n;
  il = 1;
  var o = Ut(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = o ? o.toStringTag : void 0;
  function a(e) {
    var s = r.call(e, i), h = e[i];
    try {
      e[i] = void 0;
      var d = !0;
    } catch {
    }
    var u = n.call(e);
    return d && (s ? e[i] = h : delete e[i]), u;
  }
  return _n = a, _n;
}
var Dn, al;
function Xg() {
  if (al) return Dn;
  al = 1;
  var o = Object.prototype, t = o.toString;
  function r(n) {
    return t.call(n);
  }
  return Dn = r, Dn;
}
var Ln, sl;
function Nt() {
  if (sl) return Ln;
  sl = 1;
  var o = Ut(), t = Kg(), r = Xg(), n = "[object Null]", i = "[object Undefined]", a = o ? o.toStringTag : void 0;
  function e(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? t(s) : r(s);
  }
  return Ln = e, Ln;
}
var Nn, cl;
function it() {
  if (cl) return Nn;
  cl = 1;
  function o(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Nn = o, Nn;
}
var Bn, ll;
function nr() {
  if (ll) return Bn;
  ll = 1;
  var o = Nt(), t = it(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function e(s) {
    if (!t(s))
      return !1;
    var h = o(s);
    return h == n || h == i || h == r || h == a;
  }
  return Bn = e, Bn;
}
var Wn, dl;
function Qg() {
  if (dl) return Wn;
  dl = 1;
  var o = pt(), t = o["__core-js_shared__"];
  return Wn = t, Wn;
}
var zn, ul;
function Zg() {
  if (ul) return zn;
  ul = 1;
  var o = Qg(), t = function() {
    var n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return zn = r, zn;
}
var On, pl;
function sf() {
  if (pl) return On;
  pl = 1;
  var o = Function.prototype, t = o.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return On = r, On;
}
var qn, hl;
function Jg() {
  if (hl) return qn;
  hl = 1;
  var o = nr(), t = Zg(), r = it(), n = sf(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, e = Function.prototype, s = Object.prototype, h = e.toString, d = s.hasOwnProperty, u = RegExp(
    "^" + h.call(d).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(m) {
    if (!r(m) || t(m))
      return !1;
    var g = o(m) ? u : a;
    return g.test(n(m));
  }
  return qn = f, qn;
}
var Fn, fl;
function em() {
  if (fl) return Fn;
  fl = 1;
  function o(t, r) {
    return t == null ? void 0 : t[r];
  }
  return Fn = o, Fn;
}
var Un, gl;
function Bt() {
  if (gl) return Un;
  gl = 1;
  var o = Jg(), t = em();
  function r(n, i) {
    var a = t(n, i);
    return o(a) ? a : void 0;
  }
  return Un = r, Un;
}
var Gn, ml;
function vc() {
  if (ml) return Gn;
  ml = 1;
  var o = Bt(), t = pt(), r = o(t, "Map");
  return Gn = r, Gn;
}
var jn, yl;
function qr() {
  if (yl) return jn;
  yl = 1;
  var o = Bt(), t = o(Object, "create");
  return jn = t, jn;
}
var Hn, bl;
function tm() {
  if (bl) return Hn;
  bl = 1;
  var o = qr();
  function t() {
    this.__data__ = o ? o(null) : {}, this.size = 0;
  }
  return Hn = t, Hn;
}
var Yn, xl;
function rm() {
  if (xl) return Yn;
  xl = 1;
  function o(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Yn = o, Yn;
}
var Vn, vl;
function nm() {
  if (vl) return Vn;
  vl = 1;
  var o = qr(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var e = this.__data__;
    if (o) {
      var s = e[a];
      return s === t ? void 0 : s;
    }
    return n.call(e, a) ? e[a] : void 0;
  }
  return Vn = i, Vn;
}
var Kn, wl;
function om() {
  if (wl) return Kn;
  wl = 1;
  var o = qr(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return o ? a[i] !== void 0 : r.call(a, i);
  }
  return Kn = n, Kn;
}
var Xn, Sl;
function im() {
  if (Sl) return Xn;
  Sl = 1;
  var o = qr(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = o && i === void 0 ? t : i, this;
  }
  return Xn = r, Xn;
}
var Qn, kl;
function am() {
  if (kl) return Qn;
  kl = 1;
  var o = tm(), t = rm(), r = nm(), n = om(), i = im();
  function a(e) {
    var s = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++s < h; ) {
      var d = e[s];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = o, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Qn = a, Qn;
}
var Zn, El;
function sm() {
  if (El) return Zn;
  El = 1;
  var o = am(), t = Or(), r = vc();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new o(),
      map: new (r || t)(),
      string: new o()
    };
  }
  return Zn = n, Zn;
}
var Jn, Cl;
function cm() {
  if (Cl) return Jn;
  Cl = 1;
  function o(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Jn = o, Jn;
}
var eo, Ml;
function Fr() {
  if (Ml) return eo;
  Ml = 1;
  var o = cm();
  function t(r, n) {
    var i = r.__data__;
    return o(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return eo = t, eo;
}
var to, Al;
function lm() {
  if (Al) return to;
  Al = 1;
  var o = Fr();
  function t(r) {
    var n = o(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return to = t, to;
}
var ro, $l;
function dm() {
  if ($l) return ro;
  $l = 1;
  var o = Fr();
  function t(r) {
    return o(this, r).get(r);
  }
  return ro = t, ro;
}
var no, Rl;
function um() {
  if (Rl) return no;
  Rl = 1;
  var o = Fr();
  function t(r) {
    return o(this, r).has(r);
  }
  return no = t, no;
}
var oo, Il;
function pm() {
  if (Il) return oo;
  Il = 1;
  var o = Fr();
  function t(r, n) {
    var i = o(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return oo = t, oo;
}
var io, Tl;
function wc() {
  if (Tl) return io;
  Tl = 1;
  var o = sm(), t = lm(), r = dm(), n = um(), i = pm();
  function a(e) {
    var s = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++s < h; ) {
      var d = e[s];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = o, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, io = a, io;
}
var ao, Pl;
function hm() {
  if (Pl) return ao;
  Pl = 1;
  var o = Or(), t = vc(), r = wc(), n = 200;
  function i(a, e) {
    var s = this.__data__;
    if (s instanceof o) {
      var h = s.__data__;
      if (!t || h.length < n - 1)
        return h.push([a, e]), this.size = ++s.size, this;
      s = this.__data__ = new r(h);
    }
    return s.set(a, e), this.size = s.size, this;
  }
  return ao = i, ao;
}
var so, _l;
function Ur() {
  if (_l) return so;
  _l = 1;
  var o = Or(), t = jg(), r = Hg(), n = Yg(), i = Vg(), a = hm();
  function e(s) {
    var h = this.__data__ = new o(s);
    this.size = h.size;
  }
  return e.prototype.clear = t, e.prototype.delete = r, e.prototype.get = n, e.prototype.has = i, e.prototype.set = a, so = e, so;
}
var co, Dl;
function Sc() {
  if (Dl) return co;
  Dl = 1;
  function o(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i && r(t[n], n, t) !== !1; )
      ;
    return t;
  }
  return co = o, co;
}
var lo, Ll;
function cf() {
  if (Ll) return lo;
  Ll = 1;
  var o = Bt(), t = function() {
    try {
      var r = o(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return lo = t, lo;
}
var uo, Nl;
function Gr() {
  if (Nl) return uo;
  Nl = 1;
  var o = cf();
  function t(r, n, i) {
    n == "__proto__" && o ? o(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return uo = t, uo;
}
var po, Bl;
function jr() {
  if (Bl) return po;
  Bl = 1;
  var o = Gr(), t = Ft(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a, e, s) {
    var h = a[e];
    (!(n.call(a, e) && t(h, s)) || s === void 0 && !(e in a)) && o(a, e, s);
  }
  return po = i, po;
}
var ho, Wl;
function or() {
  if (Wl) return ho;
  Wl = 1;
  var o = jr(), t = Gr();
  function r(n, i, a, e) {
    var s = !a;
    a || (a = {});
    for (var h = -1, d = i.length; ++h < d; ) {
      var u = i[h], f = e ? e(a[u], n[u], u, a, n) : void 0;
      f === void 0 && (f = n[u]), s ? t(a, u, f) : o(a, u, f);
    }
    return a;
  }
  return ho = r, ho;
}
var fo, zl;
function fm() {
  if (zl) return fo;
  zl = 1;
  function o(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return fo = o, fo;
}
var go, Ol;
function bt() {
  if (Ol) return go;
  Ol = 1;
  function o(t) {
    return t != null && typeof t == "object";
  }
  return go = o, go;
}
var mo, ql;
function gm() {
  if (ql) return mo;
  ql = 1;
  var o = Nt(), t = bt(), r = "[object Arguments]";
  function n(i) {
    return t(i) && o(i) == r;
  }
  return mo = n, mo;
}
var yo, Fl;
function ir() {
  if (Fl) return yo;
  Fl = 1;
  var o = gm(), t = bt(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = o(/* @__PURE__ */ function() {
    return arguments;
  }()) ? o : function(e) {
    return t(e) && n.call(e, "callee") && !i.call(e, "callee");
  };
  return yo = a, yo;
}
var bo, Ul;
function Ne() {
  if (Ul) return bo;
  Ul = 1;
  var o = Array.isArray;
  return bo = o, bo;
}
var Kt = { exports: {} }, xo, Gl;
function mm() {
  if (Gl) return xo;
  Gl = 1;
  function o() {
    return !1;
  }
  return xo = o, xo;
}
Kt.exports;
var jl;
function Gt() {
  return jl || (jl = 1, function(o, t) {
    var r = pt(), n = mm(), i = t && !t.nodeType && t, a = i && !0 && o && !o.nodeType && o, e = a && a.exports === i, s = e ? r.Buffer : void 0, h = s ? s.isBuffer : void 0, d = h || n;
    o.exports = d;
  }(Kt, Kt.exports)), Kt.exports;
}
var vo, Hl;
function Hr() {
  if (Hl) return vo;
  Hl = 1;
  var o = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? o, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return vo = r, vo;
}
var wo, Yl;
function kc() {
  if (Yl) return wo;
  Yl = 1;
  var o = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= o;
  }
  return wo = t, wo;
}
var So, Vl;
function ym() {
  if (Vl) return So;
  Vl = 1;
  var o = Nt(), t = kc(), r = bt(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", e = "[object Date]", s = "[object Error]", h = "[object Function]", d = "[object Map]", u = "[object Number]", f = "[object Object]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", c = "[object WeakMap]", p = "[object ArrayBuffer]", b = "[object DataView]", x = "[object Float32Array]", C = "[object Float64Array]", w = "[object Int8Array]", E = "[object Int16Array]", k = "[object Int32Array]", M = "[object Uint8Array]", A = "[object Uint8ClampedArray]", I = "[object Uint16Array]", R = "[object Uint32Array]", $ = {};
  $[x] = $[C] = $[w] = $[E] = $[k] = $[M] = $[A] = $[I] = $[R] = !0, $[n] = $[i] = $[p] = $[a] = $[b] = $[e] = $[s] = $[h] = $[d] = $[u] = $[f] = $[m] = $[g] = $[y] = $[c] = !1;
  function D(P) {
    return r(P) && t(P.length) && !!$[o(P)];
  }
  return So = D, So;
}
var ko, Kl;
function Yr() {
  if (Kl) return ko;
  Kl = 1;
  function o(t) {
    return function(r) {
      return t(r);
    };
  }
  return ko = o, ko;
}
var Xt = { exports: {} };
Xt.exports;
var Xl;
function Ec() {
  return Xl || (Xl = 1, function(o, t) {
    var r = af(), n = t && !t.nodeType && t, i = n && !0 && o && !o.nodeType && o, a = i && i.exports === n, e = a && r.process, s = function() {
      try {
        var h = i && i.require && i.require("util").types;
        return h || e && e.binding && e.binding("util");
      } catch {
      }
    }();
    o.exports = s;
  }(Xt, Xt.exports)), Xt.exports;
}
var Eo, Ql;
function ar() {
  if (Ql) return Eo;
  Ql = 1;
  var o = ym(), t = Yr(), r = Ec(), n = r && r.isTypedArray, i = n ? t(n) : o;
  return Eo = i, Eo;
}
var Co, Zl;
function lf() {
  if (Zl) return Co;
  Zl = 1;
  var o = fm(), t = ir(), r = Ne(), n = Gt(), i = Hr(), a = ar(), e = Object.prototype, s = e.hasOwnProperty;
  function h(d, u) {
    var f = r(d), m = !f && t(d), g = !f && !m && n(d), y = !f && !m && !g && a(d), c = f || m || g || y, p = c ? o(d.length, String) : [], b = p.length;
    for (var x in d)
      (u || s.call(d, x)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
      (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
      i(x, b))) && p.push(x);
    return p;
  }
  return Co = h, Co;
}
var Mo, Jl;
function Vr() {
  if (Jl) return Mo;
  Jl = 1;
  var o = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || o;
    return r === i;
  }
  return Mo = t, Mo;
}
var Ao, ed;
function df() {
  if (ed) return Ao;
  ed = 1;
  function o(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Ao = o, Ao;
}
var $o, td;
function bm() {
  if (td) return $o;
  td = 1;
  var o = df(), t = o(Object.keys, Object);
  return $o = t, $o;
}
var Ro, rd;
function Cc() {
  if (rd) return Ro;
  rd = 1;
  var o = Vr(), t = bm(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!o(a))
      return t(a);
    var e = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && e.push(s);
    return e;
  }
  return Ro = i, Ro;
}
var Io, nd;
function Ct() {
  if (nd) return Io;
  nd = 1;
  var o = nr(), t = kc();
  function r(n) {
    return n != null && t(n.length) && !o(n);
  }
  return Io = r, Io;
}
var To, od;
function _t() {
  if (od) return To;
  od = 1;
  var o = lf(), t = Cc(), r = Ct();
  function n(i) {
    return r(i) ? o(i) : t(i);
  }
  return To = n, To;
}
var Po, id;
function xm() {
  if (id) return Po;
  id = 1;
  var o = or(), t = _t();
  function r(n, i) {
    return n && o(i, t(i), n);
  }
  return Po = r, Po;
}
var _o, ad;
function vm() {
  if (ad) return _o;
  ad = 1;
  function o(t) {
    var r = [];
    if (t != null)
      for (var n in Object(t))
        r.push(n);
    return r;
  }
  return _o = o, _o;
}
var Do, sd;
function wm() {
  if (sd) return Do;
  sd = 1;
  var o = it(), t = Vr(), r = vm(), n = Object.prototype, i = n.hasOwnProperty;
  function a(e) {
    if (!o(e))
      return r(e);
    var s = t(e), h = [];
    for (var d in e)
      d == "constructor" && (s || !i.call(e, d)) || h.push(d);
    return h;
  }
  return Do = a, Do;
}
var Lo, cd;
function Wt() {
  if (cd) return Lo;
  cd = 1;
  var o = lf(), t = wm(), r = Ct();
  function n(i) {
    return r(i) ? o(i, !0) : t(i);
  }
  return Lo = n, Lo;
}
var No, ld;
function Sm() {
  if (ld) return No;
  ld = 1;
  var o = or(), t = Wt();
  function r(n, i) {
    return n && o(i, t(i), n);
  }
  return No = r, No;
}
var Qt = { exports: {} };
Qt.exports;
var dd;
function uf() {
  return dd || (dd = 1, function(o, t) {
    var r = pt(), n = t && !t.nodeType && t, i = n && !0 && o && !o.nodeType && o, a = i && i.exports === n, e = a ? r.Buffer : void 0, s = e ? e.allocUnsafe : void 0;
    function h(d, u) {
      if (u)
        return d.slice();
      var f = d.length, m = s ? s(f) : new d.constructor(f);
      return d.copy(m), m;
    }
    o.exports = h;
  }(Qt, Qt.exports)), Qt.exports;
}
var Bo, ud;
function pf() {
  if (ud) return Bo;
  ud = 1;
  function o(t, r) {
    var n = -1, i = t.length;
    for (r || (r = Array(i)); ++n < i; )
      r[n] = t[n];
    return r;
  }
  return Bo = o, Bo;
}
var Wo, pd;
function hf() {
  if (pd) return Wo;
  pd = 1;
  function o(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, e = []; ++n < i; ) {
      var s = t[n];
      r(s, n, t) && (e[a++] = s);
    }
    return e;
  }
  return Wo = o, Wo;
}
var zo, hd;
function ff() {
  if (hd) return zo;
  hd = 1;
  function o() {
    return [];
  }
  return zo = o, zo;
}
var Oo, fd;
function Mc() {
  if (fd) return Oo;
  fd = 1;
  var o = hf(), t = ff(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(e) {
    return e == null ? [] : (e = Object(e), o(i(e), function(s) {
      return n.call(e, s);
    }));
  } : t;
  return Oo = a, Oo;
}
var qo, gd;
function km() {
  if (gd) return qo;
  gd = 1;
  var o = or(), t = Mc();
  function r(n, i) {
    return o(n, t(n), i);
  }
  return qo = r, qo;
}
var Fo, md;
function Ac() {
  if (md) return Fo;
  md = 1;
  function o(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return Fo = o, Fo;
}
var Uo, yd;
function Kr() {
  if (yd) return Uo;
  yd = 1;
  var o = df(), t = o(Object.getPrototypeOf, Object);
  return Uo = t, Uo;
}
var Go, bd;
function gf() {
  if (bd) return Go;
  bd = 1;
  var o = Ac(), t = Kr(), r = Mc(), n = ff(), i = Object.getOwnPropertySymbols, a = i ? function(e) {
    for (var s = []; e; )
      o(s, r(e)), e = t(e);
    return s;
  } : n;
  return Go = a, Go;
}
var jo, xd;
function Em() {
  if (xd) return jo;
  xd = 1;
  var o = or(), t = gf();
  function r(n, i) {
    return o(n, t(n), i);
  }
  return jo = r, jo;
}
var Ho, vd;
function mf() {
  if (vd) return Ho;
  vd = 1;
  var o = Ac(), t = Ne();
  function r(n, i, a) {
    var e = i(n);
    return t(n) ? e : o(e, a(n));
  }
  return Ho = r, Ho;
}
var Yo, wd;
function yf() {
  if (wd) return Yo;
  wd = 1;
  var o = mf(), t = Mc(), r = _t();
  function n(i) {
    return o(i, r, t);
  }
  return Yo = n, Yo;
}
var Vo, Sd;
function Cm() {
  if (Sd) return Vo;
  Sd = 1;
  var o = mf(), t = gf(), r = Wt();
  function n(i) {
    return o(i, r, t);
  }
  return Vo = n, Vo;
}
var Ko, kd;
function Mm() {
  if (kd) return Ko;
  kd = 1;
  var o = Bt(), t = pt(), r = o(t, "DataView");
  return Ko = r, Ko;
}
var Xo, Ed;
function Am() {
  if (Ed) return Xo;
  Ed = 1;
  var o = Bt(), t = pt(), r = o(t, "Promise");
  return Xo = r, Xo;
}
var Qo, Cd;
function bf() {
  if (Cd) return Qo;
  Cd = 1;
  var o = Bt(), t = pt(), r = o(t, "Set");
  return Qo = r, Qo;
}
var Zo, Md;
function $m() {
  if (Md) return Zo;
  Md = 1;
  var o = Bt(), t = pt(), r = o(t, "WeakMap");
  return Zo = r, Zo;
}
var Jo, Ad;
function jt() {
  if (Ad) return Jo;
  Ad = 1;
  var o = Mm(), t = vc(), r = Am(), n = bf(), i = $m(), a = Nt(), e = sf(), s = "[object Map]", h = "[object Object]", d = "[object Promise]", u = "[object Set]", f = "[object WeakMap]", m = "[object DataView]", g = e(o), y = e(t), c = e(r), p = e(n), b = e(i), x = a;
  return (o && x(new o(new ArrayBuffer(1))) != m || t && x(new t()) != s || r && x(r.resolve()) != d || n && x(new n()) != u || i && x(new i()) != f) && (x = function(C) {
    var w = a(C), E = w == h ? C.constructor : void 0, k = E ? e(E) : "";
    if (k)
      switch (k) {
        case g:
          return m;
        case y:
          return s;
        case c:
          return d;
        case p:
          return u;
        case b:
          return f;
      }
    return w;
  }), Jo = x, Jo;
}
var ei, $d;
function Rm() {
  if ($d) return ei;
  $d = 1;
  var o = Object.prototype, t = o.hasOwnProperty;
  function r(n) {
    var i = n.length, a = new n.constructor(i);
    return i && typeof n[0] == "string" && t.call(n, "index") && (a.index = n.index, a.input = n.input), a;
  }
  return ei = r, ei;
}
var ti, Rd;
function xf() {
  if (Rd) return ti;
  Rd = 1;
  var o = pt(), t = o.Uint8Array;
  return ti = t, ti;
}
var ri, Id;
function $c() {
  if (Id) return ri;
  Id = 1;
  var o = xf();
  function t(r) {
    var n = new r.constructor(r.byteLength);
    return new o(n).set(new o(r)), n;
  }
  return ri = t, ri;
}
var ni, Td;
function Im() {
  if (Td) return ni;
  Td = 1;
  var o = $c();
  function t(r, n) {
    var i = n ? o(r.buffer) : r.buffer;
    return new r.constructor(i, r.byteOffset, r.byteLength);
  }
  return ni = t, ni;
}
var oi, Pd;
function Tm() {
  if (Pd) return oi;
  Pd = 1;
  var o = /\w*$/;
  function t(r) {
    var n = new r.constructor(r.source, o.exec(r));
    return n.lastIndex = r.lastIndex, n;
  }
  return oi = t, oi;
}
var ii, _d;
function Pm() {
  if (_d) return ii;
  _d = 1;
  var o = Ut(), t = o ? o.prototype : void 0, r = t ? t.valueOf : void 0;
  function n(i) {
    return r ? Object(r.call(i)) : {};
  }
  return ii = n, ii;
}
var ai, Dd;
function vf() {
  if (Dd) return ai;
  Dd = 1;
  var o = $c();
  function t(r, n) {
    var i = n ? o(r.buffer) : r.buffer;
    return new r.constructor(i, r.byteOffset, r.length);
  }
  return ai = t, ai;
}
var si, Ld;
function _m() {
  if (Ld) return si;
  Ld = 1;
  var o = $c(), t = Im(), r = Tm(), n = Pm(), i = vf(), a = "[object Boolean]", e = "[object Date]", s = "[object Map]", h = "[object Number]", d = "[object RegExp]", u = "[object Set]", f = "[object String]", m = "[object Symbol]", g = "[object ArrayBuffer]", y = "[object DataView]", c = "[object Float32Array]", p = "[object Float64Array]", b = "[object Int8Array]", x = "[object Int16Array]", C = "[object Int32Array]", w = "[object Uint8Array]", E = "[object Uint8ClampedArray]", k = "[object Uint16Array]", M = "[object Uint32Array]";
  function A(I, R, $) {
    var D = I.constructor;
    switch (R) {
      case g:
        return o(I);
      case a:
      case e:
        return new D(+I);
      case y:
        return t(I, $);
      case c:
      case p:
      case b:
      case x:
      case C:
      case w:
      case E:
      case k:
      case M:
        return i(I, $);
      case s:
        return new D();
      case h:
      case f:
        return new D(I);
      case d:
        return r(I);
      case u:
        return new D();
      case m:
        return n(I);
    }
  }
  return si = A, si;
}
var ci, Nd;
function wf() {
  if (Nd) return ci;
  Nd = 1;
  var o = it(), t = Object.create, r = /* @__PURE__ */ function() {
    function n() {
    }
    return function(i) {
      if (!o(i))
        return {};
      if (t)
        return t(i);
      n.prototype = i;
      var a = new n();
      return n.prototype = void 0, a;
    };
  }();
  return ci = r, ci;
}
var li, Bd;
function Sf() {
  if (Bd) return li;
  Bd = 1;
  var o = wf(), t = Kr(), r = Vr();
  function n(i) {
    return typeof i.constructor == "function" && !r(i) ? o(t(i)) : {};
  }
  return li = n, li;
}
var di, Wd;
function Dm() {
  if (Wd) return di;
  Wd = 1;
  var o = jt(), t = bt(), r = "[object Map]";
  function n(i) {
    return t(i) && o(i) == r;
  }
  return di = n, di;
}
var ui, zd;
function Lm() {
  if (zd) return ui;
  zd = 1;
  var o = Dm(), t = Yr(), r = Ec(), n = r && r.isMap, i = n ? t(n) : o;
  return ui = i, ui;
}
var pi, Od;
function Nm() {
  if (Od) return pi;
  Od = 1;
  var o = jt(), t = bt(), r = "[object Set]";
  function n(i) {
    return t(i) && o(i) == r;
  }
  return pi = n, pi;
}
var hi, qd;
function Bm() {
  if (qd) return hi;
  qd = 1;
  var o = Nm(), t = Yr(), r = Ec(), n = r && r.isSet, i = n ? t(n) : o;
  return hi = i, hi;
}
var fi, Fd;
function kf() {
  if (Fd) return fi;
  Fd = 1;
  var o = Ur(), t = Sc(), r = jr(), n = xm(), i = Sm(), a = uf(), e = pf(), s = km(), h = Em(), d = yf(), u = Cm(), f = jt(), m = Rm(), g = _m(), y = Sf(), c = Ne(), p = Gt(), b = Lm(), x = it(), C = Bm(), w = _t(), E = Wt(), k = 1, M = 2, A = 4, I = "[object Arguments]", R = "[object Array]", $ = "[object Boolean]", D = "[object Date]", P = "[object Error]", _ = "[object Function]", z = "[object GeneratorFunction]", B = "[object Map]", j = "[object Number]", X = "[object Object]", te = "[object RegExp]", ee = "[object Set]", ae = "[object String]", F = "[object Symbol]", N = "[object WeakMap]", Z = "[object ArrayBuffer]", T = "[object DataView]", W = "[object Float32Array]", O = "[object Float64Array]", de = "[object Int8Array]", Se = "[object Int16Array]", fe = "[object Int32Array]", ze = "[object Uint8Array]", De = "[object Uint8ClampedArray]", ie = "[object Uint16Array]", G = "[object Uint32Array]", Y = {};
  Y[I] = Y[R] = Y[Z] = Y[T] = Y[$] = Y[D] = Y[W] = Y[O] = Y[de] = Y[Se] = Y[fe] = Y[B] = Y[j] = Y[X] = Y[te] = Y[ee] = Y[ae] = Y[F] = Y[ze] = Y[De] = Y[ie] = Y[G] = !0, Y[P] = Y[_] = Y[N] = !1;
  function ce(Q, ne, re, se, pe, ke) {
    var Me, we = ne & k, Ie = ne & M, qe = ne & A;
    if (re && (Me = pe ? re(Q, se, pe, ke) : re(Q)), Me !== void 0)
      return Me;
    if (!x(Q))
      return Q;
    var Ye = c(Q);
    if (Ye) {
      if (Me = m(Q), !we)
        return e(Q, Me);
    } else {
      var Ve = f(Q), ct = Ve == _ || Ve == z;
      if (p(Q))
        return a(Q, we);
      if (Ve == X || Ve == I || ct && !pe) {
        if (Me = Ie || ct ? {} : y(Q), !we)
          return Ie ? h(Q, i(Me, Q)) : s(Q, n(Me, Q));
      } else {
        if (!Y[Ve])
          return pe ? Q : {};
        Me = g(Q, Ve, we);
      }
    }
    ke || (ke = new o());
    var lt = ke.get(Q);
    if (lt)
      return lt;
    ke.set(Q, Me), C(Q) ? Q.forEach(function(Ue) {
      Me.add(ce(Ue, ne, re, Ue, Q, ke));
    }) : b(Q) && Q.forEach(function(Ue, Ge) {
      Me.set(Ge, ce(Ue, ne, re, Ge, Q, ke));
    });
    var Ke = qe ? Ie ? u : d : Ie ? E : w, rt = Ye ? void 0 : Ke(Q);
    return t(rt || Q, function(Ue, Ge) {
      rt && (Ge = Ue, Ue = Q[Ge]), r(Me, Ge, ce(Ue, ne, re, Ge, Q, ke));
    }), Me;
  }
  return fi = ce, fi;
}
var gi, Ud;
function Wm() {
  if (Ud) return gi;
  Ud = 1;
  var o = kf(), t = 4;
  function r(n) {
    return o(n, t);
  }
  return gi = r, gi;
}
var mi, Gd;
function Rc() {
  if (Gd) return mi;
  Gd = 1;
  function o(t) {
    return function() {
      return t;
    };
  }
  return mi = o, mi;
}
var yi, jd;
function zm() {
  if (jd) return yi;
  jd = 1;
  function o(t) {
    return function(r, n, i) {
      for (var a = -1, e = Object(r), s = i(r), h = s.length; h--; ) {
        var d = s[t ? h : ++a];
        if (n(e[d], d, e) === !1)
          break;
      }
      return r;
    };
  }
  return yi = o, yi;
}
var bi, Hd;
function Ic() {
  if (Hd) return bi;
  Hd = 1;
  var o = zm(), t = o();
  return bi = t, bi;
}
var xi, Yd;
function Tc() {
  if (Yd) return xi;
  Yd = 1;
  var o = Ic(), t = _t();
  function r(n, i) {
    return n && o(n, i, t);
  }
  return xi = r, xi;
}
var vi, Vd;
function Om() {
  if (Vd) return vi;
  Vd = 1;
  var o = Ct();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!o(i))
        return r(i, a);
      for (var e = i.length, s = n ? e : -1, h = Object(i); (n ? s-- : ++s < e) && a(h[s], s, h) !== !1; )
        ;
      return i;
    };
  }
  return vi = t, vi;
}
var wi, Kd;
function Xr() {
  if (Kd) return wi;
  Kd = 1;
  var o = Tc(), t = Om(), r = t(o);
  return wi = r, wi;
}
var Si, Xd;
function zt() {
  if (Xd) return Si;
  Xd = 1;
  function o(t) {
    return t;
  }
  return Si = o, Si;
}
var ki, Qd;
function Ef() {
  if (Qd) return ki;
  Qd = 1;
  var o = zt();
  function t(r) {
    return typeof r == "function" ? r : o;
  }
  return ki = t, ki;
}
var Ei, Zd;
function Cf() {
  if (Zd) return Ei;
  Zd = 1;
  var o = Sc(), t = Xr(), r = Ef(), n = Ne();
  function i(a, e) {
    var s = n(a) ? o : t;
    return s(a, r(e));
  }
  return Ei = i, Ei;
}
var Ci, Jd;
function Mf() {
  return Jd || (Jd = 1, Ci = Cf()), Ci;
}
var Mi, eu;
function qm() {
  if (eu) return Mi;
  eu = 1;
  var o = Xr();
  function t(r, n) {
    var i = [];
    return o(r, function(a, e, s) {
      n(a, e, s) && i.push(a);
    }), i;
  }
  return Mi = t, Mi;
}
var Ai, tu;
function Fm() {
  if (tu) return Ai;
  tu = 1;
  var o = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, o), this;
  }
  return Ai = t, Ai;
}
var $i, ru;
function Um() {
  if (ru) return $i;
  ru = 1;
  function o(t) {
    return this.__data__.has(t);
  }
  return $i = o, $i;
}
var Ri, nu;
function Af() {
  if (nu) return Ri;
  nu = 1;
  var o = wc(), t = Fm(), r = Um();
  function n(i) {
    var a = -1, e = i == null ? 0 : i.length;
    for (this.__data__ = new o(); ++a < e; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Ri = n, Ri;
}
var Ii, ou;
function Gm() {
  if (ou) return Ii;
  ou = 1;
  function o(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Ii = o, Ii;
}
var Ti, iu;
function $f() {
  if (iu) return Ti;
  iu = 1;
  function o(t, r) {
    return t.has(r);
  }
  return Ti = o, Ti;
}
var Pi, au;
function Rf() {
  if (au) return Pi;
  au = 1;
  var o = Af(), t = Gm(), r = $f(), n = 1, i = 2;
  function a(e, s, h, d, u, f) {
    var m = h & n, g = e.length, y = s.length;
    if (g != y && !(m && y > g))
      return !1;
    var c = f.get(e), p = f.get(s);
    if (c && p)
      return c == s && p == e;
    var b = -1, x = !0, C = h & i ? new o() : void 0;
    for (f.set(e, s), f.set(s, e); ++b < g; ) {
      var w = e[b], E = s[b];
      if (d)
        var k = m ? d(E, w, b, s, e, f) : d(w, E, b, e, s, f);
      if (k !== void 0) {
        if (k)
          continue;
        x = !1;
        break;
      }
      if (C) {
        if (!t(s, function(M, A) {
          if (!r(C, A) && (w === M || u(w, M, h, d, f)))
            return C.push(A);
        })) {
          x = !1;
          break;
        }
      } else if (!(w === E || u(w, E, h, d, f))) {
        x = !1;
        break;
      }
    }
    return f.delete(e), f.delete(s), x;
  }
  return Pi = a, Pi;
}
var _i, su;
function jm() {
  if (su) return _i;
  su = 1;
  function o(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return _i = o, _i;
}
var Di, cu;
function Pc() {
  if (cu) return Di;
  cu = 1;
  function o(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return Di = o, Di;
}
var Li, lu;
function Hm() {
  if (lu) return Li;
  lu = 1;
  var o = Ut(), t = xf(), r = Ft(), n = Rf(), i = jm(), a = Pc(), e = 1, s = 2, h = "[object Boolean]", d = "[object Date]", u = "[object Error]", f = "[object Map]", m = "[object Number]", g = "[object RegExp]", y = "[object Set]", c = "[object String]", p = "[object Symbol]", b = "[object ArrayBuffer]", x = "[object DataView]", C = o ? o.prototype : void 0, w = C ? C.valueOf : void 0;
  function E(k, M, A, I, R, $, D) {
    switch (A) {
      case x:
        if (k.byteLength != M.byteLength || k.byteOffset != M.byteOffset)
          return !1;
        k = k.buffer, M = M.buffer;
      case b:
        return !(k.byteLength != M.byteLength || !$(new t(k), new t(M)));
      case h:
      case d:
      case m:
        return r(+k, +M);
      case u:
        return k.name == M.name && k.message == M.message;
      case g:
      case c:
        return k == M + "";
      case f:
        var P = i;
      case y:
        var _ = I & e;
        if (P || (P = a), k.size != M.size && !_)
          return !1;
        var z = D.get(k);
        if (z)
          return z == M;
        I |= s, D.set(k, M);
        var B = n(P(k), P(M), I, R, $, D);
        return D.delete(k), B;
      case p:
        if (w)
          return w.call(k) == w.call(M);
    }
    return !1;
  }
  return Li = E, Li;
}
var Ni, du;
function Ym() {
  if (du) return Ni;
  du = 1;
  var o = yf(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, e, s, h, d, u) {
    var f = s & t, m = o(a), g = m.length, y = o(e), c = y.length;
    if (g != c && !f)
      return !1;
    for (var p = g; p--; ) {
      var b = m[p];
      if (!(f ? b in e : n.call(e, b)))
        return !1;
    }
    var x = u.get(a), C = u.get(e);
    if (x && C)
      return x == e && C == a;
    var w = !0;
    u.set(a, e), u.set(e, a);
    for (var E = f; ++p < g; ) {
      b = m[p];
      var k = a[b], M = e[b];
      if (h)
        var A = f ? h(M, k, b, e, a, u) : h(k, M, b, a, e, u);
      if (!(A === void 0 ? k === M || d(k, M, s, h, u) : A)) {
        w = !1;
        break;
      }
      E || (E = b == "constructor");
    }
    if (w && !E) {
      var I = a.constructor, R = e.constructor;
      I != R && "constructor" in a && "constructor" in e && !(typeof I == "function" && I instanceof I && typeof R == "function" && R instanceof R) && (w = !1);
    }
    return u.delete(a), u.delete(e), w;
  }
  return Ni = i, Ni;
}
var Bi, uu;
function Vm() {
  if (uu) return Bi;
  uu = 1;
  var o = Ur(), t = Rf(), r = Hm(), n = Ym(), i = jt(), a = Ne(), e = Gt(), s = ar(), h = 1, d = "[object Arguments]", u = "[object Array]", f = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function y(c, p, b, x, C, w) {
    var E = a(c), k = a(p), M = E ? u : i(c), A = k ? u : i(p);
    M = M == d ? f : M, A = A == d ? f : A;
    var I = M == f, R = A == f, $ = M == A;
    if ($ && e(c)) {
      if (!e(p))
        return !1;
      E = !0, I = !1;
    }
    if ($ && !I)
      return w || (w = new o()), E || s(c) ? t(c, p, b, x, C, w) : r(c, p, M, b, x, C, w);
    if (!(b & h)) {
      var D = I && g.call(c, "__wrapped__"), P = R && g.call(p, "__wrapped__");
      if (D || P) {
        var _ = D ? c.value() : c, z = P ? p.value() : p;
        return w || (w = new o()), C(_, z, b, x, w);
      }
    }
    return $ ? (w || (w = new o()), n(c, p, b, x, C, w)) : !1;
  }
  return Bi = y, Bi;
}
var Wi, pu;
function If() {
  if (pu) return Wi;
  pu = 1;
  var o = Vm(), t = bt();
  function r(n, i, a, e, s) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : o(n, i, a, e, r, s);
  }
  return Wi = r, Wi;
}
var zi, hu;
function Km() {
  if (hu) return zi;
  hu = 1;
  var o = Ur(), t = If(), r = 1, n = 2;
  function i(a, e, s, h) {
    var d = s.length, u = d, f = !h;
    if (a == null)
      return !u;
    for (a = Object(a); d--; ) {
      var m = s[d];
      if (f && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++d < u; ) {
      m = s[d];
      var g = m[0], y = a[g], c = m[1];
      if (f && m[2]) {
        if (y === void 0 && !(g in a))
          return !1;
      } else {
        var p = new o();
        if (h)
          var b = h(y, c, g, a, e, p);
        if (!(b === void 0 ? t(c, y, r | n, h, p) : b))
          return !1;
      }
    }
    return !0;
  }
  return zi = i, zi;
}
var Oi, fu;
function Tf() {
  if (fu) return Oi;
  fu = 1;
  var o = it();
  function t(r) {
    return r === r && !o(r);
  }
  return Oi = t, Oi;
}
var qi, gu;
function Xm() {
  if (gu) return qi;
  gu = 1;
  var o = Tf(), t = _t();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var e = i[a], s = n[e];
      i[a] = [e, s, o(s)];
    }
    return i;
  }
  return qi = r, qi;
}
var Fi, mu;
function Pf() {
  if (mu) return Fi;
  mu = 1;
  function o(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Fi = o, Fi;
}
var Ui, yu;
function Qm() {
  if (yu) return Ui;
  yu = 1;
  var o = Km(), t = Xm(), r = Pf();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(e) {
      return e === i || o(e, i, a);
    };
  }
  return Ui = n, Ui;
}
var Gi, bu;
function Ht() {
  if (bu) return Gi;
  bu = 1;
  var o = Nt(), t = bt(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && o(i) == r;
  }
  return Gi = n, Gi;
}
var ji, xu;
function _c() {
  if (xu) return ji;
  xu = 1;
  var o = Ne(), t = Ht(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, e) {
    if (o(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || e != null && a in Object(e);
  }
  return ji = i, ji;
}
var Hi, vu;
function Zm() {
  if (vu) return Hi;
  vu = 1;
  var o = wc(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var e = arguments, s = i ? i.apply(this, e) : e[0], h = a.cache;
      if (h.has(s))
        return h.get(s);
      var d = n.apply(this, e);
      return a.cache = h.set(s, d) || h, d;
    };
    return a.cache = new (r.Cache || o)(), a;
  }
  return r.Cache = o, Hi = r, Hi;
}
var Yi, wu;
function Jm() {
  if (wu) return Yi;
  wu = 1;
  var o = Zm(), t = 500;
  function r(n) {
    var i = o(n, function(e) {
      return a.size === t && a.clear(), e;
    }), a = i.cache;
    return i;
  }
  return Yi = r, Yi;
}
var Vi, Su;
function ey() {
  if (Su) return Vi;
  Su = 1;
  var o = Jm(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = o(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(e, s, h, d) {
      a.push(h ? d.replace(r, "$1") : s || e);
    }), a;
  });
  return Vi = n, Vi;
}
var Ki, ku;
function Qr() {
  if (ku) return Ki;
  ku = 1;
  function o(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Ki = o, Ki;
}
var Xi, Eu;
function ty() {
  if (Eu) return Xi;
  Eu = 1;
  var o = Ut(), t = Qr(), r = Ne(), n = Ht(), i = o ? o.prototype : void 0, a = i ? i.toString : void 0;
  function e(s) {
    if (typeof s == "string")
      return s;
    if (r(s))
      return t(s, e) + "";
    if (n(s))
      return a ? a.call(s) : "";
    var h = s + "";
    return h == "0" && 1 / s == -1 / 0 ? "-0" : h;
  }
  return Xi = e, Xi;
}
var Qi, Cu;
function _f() {
  if (Cu) return Qi;
  Cu = 1;
  var o = ty();
  function t(r) {
    return r == null ? "" : o(r);
  }
  return Qi = t, Qi;
}
var Zi, Mu;
function Zr() {
  if (Mu) return Zi;
  Mu = 1;
  var o = Ne(), t = _c(), r = ey(), n = _f();
  function i(a, e) {
    return o(a) ? a : t(a, e) ? [a] : r(n(a));
  }
  return Zi = i, Zi;
}
var Ji, Au;
function sr() {
  if (Au) return Ji;
  Au = 1;
  var o = Ht();
  function t(r) {
    if (typeof r == "string" || o(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Ji = t, Ji;
}
var ea, $u;
function Jr() {
  if ($u) return ea;
  $u = 1;
  var o = Zr(), t = sr();
  function r(n, i) {
    i = o(i, n);
    for (var a = 0, e = i.length; n != null && a < e; )
      n = n[t(i[a++])];
    return a && a == e ? n : void 0;
  }
  return ea = r, ea;
}
var ta, Ru;
function ry() {
  if (Ru) return ta;
  Ru = 1;
  var o = Jr();
  function t(r, n, i) {
    var a = r == null ? void 0 : o(r, n);
    return a === void 0 ? i : a;
  }
  return ta = t, ta;
}
var ra, Iu;
function ny() {
  if (Iu) return ra;
  Iu = 1;
  function o(t, r) {
    return t != null && r in Object(t);
  }
  return ra = o, ra;
}
var na, Tu;
function Df() {
  if (Tu) return na;
  Tu = 1;
  var o = Zr(), t = ir(), r = Ne(), n = Hr(), i = kc(), a = sr();
  function e(s, h, d) {
    h = o(h, s);
    for (var u = -1, f = h.length, m = !1; ++u < f; ) {
      var g = a(h[u]);
      if (!(m = s != null && d(s, g)))
        break;
      s = s[g];
    }
    return m || ++u != f ? m : (f = s == null ? 0 : s.length, !!f && i(f) && n(g, f) && (r(s) || t(s)));
  }
  return na = e, na;
}
var oa, Pu;
function Lf() {
  if (Pu) return oa;
  Pu = 1;
  var o = ny(), t = Df();
  function r(n, i) {
    return n != null && t(n, i, o);
  }
  return oa = r, oa;
}
var ia, _u;
function oy() {
  if (_u) return ia;
  _u = 1;
  var o = If(), t = ry(), r = Lf(), n = _c(), i = Tf(), a = Pf(), e = sr(), s = 1, h = 2;
  function d(u, f) {
    return n(u) && i(f) ? a(e(u), f) : function(m) {
      var g = t(m, u);
      return g === void 0 && g === f ? r(m, u) : o(f, g, s | h);
    };
  }
  return ia = d, ia;
}
var aa, Du;
function Nf() {
  if (Du) return aa;
  Du = 1;
  function o(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return aa = o, aa;
}
var sa, Lu;
function iy() {
  if (Lu) return sa;
  Lu = 1;
  var o = Jr();
  function t(r) {
    return function(n) {
      return o(n, r);
    };
  }
  return sa = t, sa;
}
var ca, Nu;
function ay() {
  if (Nu) return ca;
  Nu = 1;
  var o = Nf(), t = iy(), r = _c(), n = sr();
  function i(a) {
    return r(a) ? o(n(a)) : t(a);
  }
  return ca = i, ca;
}
var la, Bu;
function Mt() {
  if (Bu) return la;
  Bu = 1;
  var o = Qm(), t = oy(), r = zt(), n = Ne(), i = ay();
  function a(e) {
    return typeof e == "function" ? e : e == null ? r : typeof e == "object" ? n(e) ? t(e[0], e[1]) : o(e) : i(e);
  }
  return la = a, la;
}
var da, Wu;
function Bf() {
  if (Wu) return da;
  Wu = 1;
  var o = hf(), t = qm(), r = Mt(), n = Ne();
  function i(a, e) {
    var s = n(a) ? o : t;
    return s(a, r(e, 3));
  }
  return da = i, da;
}
var ua, zu;
function sy() {
  if (zu) return ua;
  zu = 1;
  var o = Object.prototype, t = o.hasOwnProperty;
  function r(n, i) {
    return n != null && t.call(n, i);
  }
  return ua = r, ua;
}
var pa, Ou;
function Wf() {
  if (Ou) return pa;
  Ou = 1;
  var o = sy(), t = Df();
  function r(n, i) {
    return n != null && t(n, i, o);
  }
  return pa = r, pa;
}
var ha, qu;
function cy() {
  if (qu) return ha;
  qu = 1;
  var o = Cc(), t = jt(), r = ir(), n = Ne(), i = Ct(), a = Gt(), e = Vr(), s = ar(), h = "[object Map]", d = "[object Set]", u = Object.prototype, f = u.hasOwnProperty;
  function m(g) {
    if (g == null)
      return !0;
    if (i(g) && (n(g) || typeof g == "string" || typeof g.splice == "function" || a(g) || s(g) || r(g)))
      return !g.length;
    var y = t(g);
    if (y == h || y == d)
      return !g.size;
    if (e(g))
      return !o(g).length;
    for (var c in g)
      if (f.call(g, c))
        return !1;
    return !0;
  }
  return ha = m, ha;
}
var fa, Fu;
function zf() {
  if (Fu) return fa;
  Fu = 1;
  function o(t) {
    return t === void 0;
  }
  return fa = o, fa;
}
var ga, Uu;
function Of() {
  if (Uu) return ga;
  Uu = 1;
  var o = Xr(), t = Ct();
  function r(n, i) {
    var a = -1, e = t(n) ? Array(n.length) : [];
    return o(n, function(s, h, d) {
      e[++a] = i(s, h, d);
    }), e;
  }
  return ga = r, ga;
}
var ma, Gu;
function qf() {
  if (Gu) return ma;
  Gu = 1;
  var o = Qr(), t = Mt(), r = Of(), n = Ne();
  function i(a, e) {
    var s = n(a) ? o : r;
    return s(a, t(e, 3));
  }
  return ma = i, ma;
}
var ya, ju;
function ly() {
  if (ju) return ya;
  ju = 1;
  function o(t, r, n, i) {
    var a = -1, e = t == null ? 0 : t.length;
    for (i && e && (n = t[++a]); ++a < e; )
      n = r(n, t[a], a, t);
    return n;
  }
  return ya = o, ya;
}
var ba, Hu;
function dy() {
  if (Hu) return ba;
  Hu = 1;
  function o(t, r, n, i, a) {
    return a(t, function(e, s, h) {
      n = i ? (i = !1, e) : r(n, e, s, h);
    }), n;
  }
  return ba = o, ba;
}
var xa, Yu;
function Ff() {
  if (Yu) return xa;
  Yu = 1;
  var o = ly(), t = Xr(), r = Mt(), n = dy(), i = Ne();
  function a(e, s, h) {
    var d = i(e) ? o : n, u = arguments.length < 3;
    return d(e, r(s, 4), h, u, t);
  }
  return xa = a, xa;
}
var va, Vu;
function uy() {
  if (Vu) return va;
  Vu = 1;
  var o = Nt(), t = Ne(), r = bt(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && o(a) == n;
  }
  return va = i, va;
}
var wa, Ku;
function py() {
  if (Ku) return wa;
  Ku = 1;
  var o = Nf(), t = o("length");
  return wa = t, wa;
}
var Sa, Xu;
function hy() {
  if (Xu) return Sa;
  Xu = 1;
  var o = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", e = "\\u200d", s = RegExp("[" + e + o + i + a + "]");
  function h(d) {
    return s.test(d);
  }
  return Sa = h, Sa;
}
var ka, Qu;
function fy() {
  if (Qu) return ka;
  Qu = 1;
  var o = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", e = "[" + o + "]", s = "[" + i + "]", h = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + s + "|" + h + ")", u = "[^" + o + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", y = d + "?", c = "[" + a + "]?", p = "(?:" + g + "(?:" + [u, f, m].join("|") + ")" + c + y + ")*", b = c + y + p, x = "(?:" + [u + s + "?", s, f, m, e].join("|") + ")", C = RegExp(h + "(?=" + h + ")|" + x + b, "g");
  function w(E) {
    for (var k = C.lastIndex = 0; C.test(E); )
      ++k;
    return k;
  }
  return ka = w, ka;
}
var Ea, Zu;
function gy() {
  if (Zu) return Ea;
  Zu = 1;
  var o = py(), t = hy(), r = fy();
  function n(i) {
    return t(i) ? r(i) : o(i);
  }
  return Ea = n, Ea;
}
var Ca, Ju;
function my() {
  if (Ju) return Ca;
  Ju = 1;
  var o = Cc(), t = jt(), r = Ct(), n = uy(), i = gy(), a = "[object Map]", e = "[object Set]";
  function s(h) {
    if (h == null)
      return 0;
    if (r(h))
      return n(h) ? i(h) : h.length;
    var d = t(h);
    return d == a || d == e ? h.size : o(h).length;
  }
  return Ca = s, Ca;
}
var Ma, ep;
function yy() {
  if (ep) return Ma;
  ep = 1;
  var o = Sc(), t = wf(), r = Tc(), n = Mt(), i = Kr(), a = Ne(), e = Gt(), s = nr(), h = it(), d = ar();
  function u(f, m, g) {
    var y = a(f), c = y || e(f) || d(f);
    if (m = n(m, 4), g == null) {
      var p = f && f.constructor;
      c ? g = y ? new p() : [] : h(f) ? g = s(p) ? t(i(f)) : {} : g = {};
    }
    return (c ? o : r)(f, function(b, x, C) {
      return m(g, b, x, C);
    }), g;
  }
  return Ma = u, Ma;
}
var Aa, tp;
function by() {
  if (tp) return Aa;
  tp = 1;
  var o = Ut(), t = ir(), r = Ne(), n = o ? o.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Aa = i, Aa;
}
var $a, rp;
function Dc() {
  if (rp) return $a;
  rp = 1;
  var o = Ac(), t = by();
  function r(n, i, a, e, s) {
    var h = -1, d = n.length;
    for (a || (a = t), s || (s = []); ++h < d; ) {
      var u = n[h];
      i > 0 && a(u) ? i > 1 ? r(u, i - 1, a, e, s) : o(s, u) : e || (s[s.length] = u);
    }
    return s;
  }
  return $a = r, $a;
}
var Ra, np;
function xy() {
  if (np) return Ra;
  np = 1;
  function o(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return Ra = o, Ra;
}
var Ia, op;
function Uf() {
  if (op) return Ia;
  op = 1;
  var o = xy(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var e = arguments, s = -1, h = t(e.length - i, 0), d = Array(h); ++s < h; )
        d[s] = e[i + s];
      s = -1;
      for (var u = Array(i + 1); ++s < i; )
        u[s] = e[s];
      return u[i] = a(d), o(n, this, u);
    };
  }
  return Ia = r, Ia;
}
var Ta, ip;
function vy() {
  if (ip) return Ta;
  ip = 1;
  var o = Rc(), t = cf(), r = zt(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: o(a),
      writable: !0
    });
  } : r;
  return Ta = n, Ta;
}
var Pa, ap;
function wy() {
  if (ap) return Pa;
  ap = 1;
  var o = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, e = 0;
    return function() {
      var s = r(), h = t - (s - e);
      if (e = s, h > 0) {
        if (++a >= o)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Pa = n, Pa;
}
var _a, sp;
function Gf() {
  if (sp) return _a;
  sp = 1;
  var o = vy(), t = wy(), r = t(o);
  return _a = r, _a;
}
var Da, cp;
function en() {
  if (cp) return Da;
  cp = 1;
  var o = zt(), t = Uf(), r = Gf();
  function n(i, a) {
    return r(t(i, a, o), i + "");
  }
  return Da = n, Da;
}
var La, lp;
function jf() {
  if (lp) return La;
  lp = 1;
  function o(t, r, n, i) {
    for (var a = t.length, e = n + (i ? 1 : -1); i ? e-- : ++e < a; )
      if (r(t[e], e, t))
        return e;
    return -1;
  }
  return La = o, La;
}
var Na, dp;
function Sy() {
  if (dp) return Na;
  dp = 1;
  function o(t) {
    return t !== t;
  }
  return Na = o, Na;
}
var Ba, up;
function ky() {
  if (up) return Ba;
  up = 1;
  function o(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return Ba = o, Ba;
}
var Wa, pp;
function Ey() {
  if (pp) return Wa;
  pp = 1;
  var o = jf(), t = Sy(), r = ky();
  function n(i, a, e) {
    return a === a ? r(i, a, e) : o(i, t, e);
  }
  return Wa = n, Wa;
}
var za, hp;
function Cy() {
  if (hp) return za;
  hp = 1;
  var o = Ey();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && o(r, n, 0) > -1;
  }
  return za = t, za;
}
var Oa, fp;
function My() {
  if (fp) return Oa;
  fp = 1;
  function o(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return Oa = o, Oa;
}
var qa, gp;
function Ay() {
  if (gp) return qa;
  gp = 1;
  function o() {
  }
  return qa = o, qa;
}
var Fa, mp;
function $y() {
  if (mp) return Fa;
  mp = 1;
  var o = bf(), t = Ay(), r = Pc(), n = 1 / 0, i = o && 1 / r(new o([, -0]))[1] == n ? function(a) {
    return new o(a);
  } : t;
  return Fa = i, Fa;
}
var Ua, yp;
function Ry() {
  if (yp) return Ua;
  yp = 1;
  var o = Af(), t = Cy(), r = My(), n = $f(), i = $y(), a = Pc(), e = 200;
  function s(h, d, u) {
    var f = -1, m = t, g = h.length, y = !0, c = [], p = c;
    if (u)
      y = !1, m = r;
    else if (g >= e) {
      var b = d ? null : i(h);
      if (b)
        return a(b);
      y = !1, m = n, p = new o();
    } else
      p = d ? [] : c;
    e:
      for (; ++f < g; ) {
        var x = h[f], C = d ? d(x) : x;
        if (x = u || x !== 0 ? x : 0, y && C === C) {
          for (var w = p.length; w--; )
            if (p[w] === C)
              continue e;
          d && p.push(C), c.push(x);
        } else m(p, C, u) || (p !== c && p.push(C), c.push(x));
      }
    return c;
  }
  return Ua = s, Ua;
}
var Ga, bp;
function Hf() {
  if (bp) return Ga;
  bp = 1;
  var o = Ct(), t = bt();
  function r(n) {
    return t(n) && o(n);
  }
  return Ga = r, Ga;
}
var ja, xp;
function Iy() {
  if (xp) return ja;
  xp = 1;
  var o = Dc(), t = en(), r = Ry(), n = Hf(), i = t(function(a) {
    return r(o(a, 1, n, !0));
  });
  return ja = i, ja;
}
var Ha, vp;
function Ty() {
  if (vp) return Ha;
  vp = 1;
  var o = Qr();
  function t(r, n) {
    return o(n, function(i) {
      return r[i];
    });
  }
  return Ha = t, Ha;
}
var Ya, wp;
function Yf() {
  if (wp) return Ya;
  wp = 1;
  var o = Ty(), t = _t();
  function r(n) {
    return n == null ? [] : o(n, t(n));
  }
  return Ya = r, Ya;
}
var Va, Sp;
function at() {
  if (Sp) return Va;
  Sp = 1;
  var o;
  if (typeof xc == "function")
    try {
      o = {
        clone: Wm(),
        constant: Rc(),
        each: Mf(),
        filter: Bf(),
        has: Wf(),
        isArray: Ne(),
        isEmpty: cy(),
        isFunction: nr(),
        isUndefined: zf(),
        keys: _t(),
        map: qf(),
        reduce: Ff(),
        size: my(),
        transform: yy(),
        union: Iy(),
        values: Yf()
      };
    } catch {
    }
  return o || (o = window._), Va = o, Va;
}
var Ka, kp;
function Lc() {
  if (kp) return Ka;
  kp = 1;
  var o = at();
  Ka = i;
  var t = "\0", r = "\0", n = "";
  function i(u) {
    this._isDirected = o.has(u, "directed") ? u.directed : !0, this._isMultigraph = o.has(u, "multigraph") ? u.multigraph : !1, this._isCompound = o.has(u, "compound") ? u.compound : !1, this._label = void 0, this._defaultNodeLabelFn = o.constant(void 0), this._defaultEdgeLabelFn = o.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[r] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  i.prototype._nodeCount = 0, i.prototype._edgeCount = 0, i.prototype.isDirected = function() {
    return this._isDirected;
  }, i.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, i.prototype.isCompound = function() {
    return this._isCompound;
  }, i.prototype.setGraph = function(u) {
    return this._label = u, this;
  }, i.prototype.graph = function() {
    return this._label;
  }, i.prototype.setDefaultNodeLabel = function(u) {
    return o.isFunction(u) || (u = o.constant(u)), this._defaultNodeLabelFn = u, this;
  }, i.prototype.nodeCount = function() {
    return this._nodeCount;
  }, i.prototype.nodes = function() {
    return o.keys(this._nodes);
  }, i.prototype.sources = function() {
    var u = this;
    return o.filter(this.nodes(), function(f) {
      return o.isEmpty(u._in[f]);
    });
  }, i.prototype.sinks = function() {
    var u = this;
    return o.filter(this.nodes(), function(f) {
      return o.isEmpty(u._out[f]);
    });
  }, i.prototype.setNodes = function(u, f) {
    var m = arguments, g = this;
    return o.each(u, function(y) {
      m.length > 1 ? g.setNode(y, f) : g.setNode(y);
    }), this;
  }, i.prototype.setNode = function(u, f) {
    return o.has(this._nodes, u) ? (arguments.length > 1 && (this._nodes[u] = f), this) : (this._nodes[u] = arguments.length > 1 ? f : this._defaultNodeLabelFn(u), this._isCompound && (this._parent[u] = r, this._children[u] = {}, this._children[r][u] = !0), this._in[u] = {}, this._preds[u] = {}, this._out[u] = {}, this._sucs[u] = {}, ++this._nodeCount, this);
  }, i.prototype.node = function(u) {
    return this._nodes[u];
  }, i.prototype.hasNode = function(u) {
    return o.has(this._nodes, u);
  }, i.prototype.removeNode = function(u) {
    var f = this;
    if (o.has(this._nodes, u)) {
      var m = function(g) {
        f.removeEdge(f._edgeObjs[g]);
      };
      delete this._nodes[u], this._isCompound && (this._removeFromParentsChildList(u), delete this._parent[u], o.each(this.children(u), function(g) {
        f.setParent(g);
      }), delete this._children[u]), o.each(o.keys(this._in[u]), m), delete this._in[u], delete this._preds[u], o.each(o.keys(this._out[u]), m), delete this._out[u], delete this._sucs[u], --this._nodeCount;
    }
    return this;
  }, i.prototype.setParent = function(u, f) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (o.isUndefined(f))
      f = r;
    else {
      f += "";
      for (var m = f; !o.isUndefined(m); m = this.parent(m))
        if (m === u)
          throw new Error("Setting " + f + " as parent of " + u + " would create a cycle");
      this.setNode(f);
    }
    return this.setNode(u), this._removeFromParentsChildList(u), this._parent[u] = f, this._children[f][u] = !0, this;
  }, i.prototype._removeFromParentsChildList = function(u) {
    delete this._children[this._parent[u]][u];
  }, i.prototype.parent = function(u) {
    if (this._isCompound) {
      var f = this._parent[u];
      if (f !== r)
        return f;
    }
  }, i.prototype.children = function(u) {
    if (o.isUndefined(u) && (u = r), this._isCompound) {
      var f = this._children[u];
      if (f)
        return o.keys(f);
    } else {
      if (u === r)
        return this.nodes();
      if (this.hasNode(u))
        return [];
    }
  }, i.prototype.predecessors = function(u) {
    var f = this._preds[u];
    if (f)
      return o.keys(f);
  }, i.prototype.successors = function(u) {
    var f = this._sucs[u];
    if (f)
      return o.keys(f);
  }, i.prototype.neighbors = function(u) {
    var f = this.predecessors(u);
    if (f)
      return o.union(f, this.successors(u));
  }, i.prototype.isLeaf = function(u) {
    var f;
    return this.isDirected() ? f = this.successors(u) : f = this.neighbors(u), f.length === 0;
  }, i.prototype.filterNodes = function(u) {
    var f = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    f.setGraph(this.graph());
    var m = this;
    o.each(this._nodes, function(c, p) {
      u(p) && f.setNode(p, c);
    }), o.each(this._edgeObjs, function(c) {
      f.hasNode(c.v) && f.hasNode(c.w) && f.setEdge(c, m.edge(c));
    });
    var g = {};
    function y(c) {
      var p = m.parent(c);
      return p === void 0 || f.hasNode(p) ? (g[c] = p, p) : p in g ? g[p] : y(p);
    }
    return this._isCompound && o.each(f.nodes(), function(c) {
      f.setParent(c, y(c));
    }), f;
  }, i.prototype.setDefaultEdgeLabel = function(u) {
    return o.isFunction(u) || (u = o.constant(u)), this._defaultEdgeLabelFn = u, this;
  }, i.prototype.edgeCount = function() {
    return this._edgeCount;
  }, i.prototype.edges = function() {
    return o.values(this._edgeObjs);
  }, i.prototype.setPath = function(u, f) {
    var m = this, g = arguments;
    return o.reduce(u, function(y, c) {
      return g.length > 1 ? m.setEdge(y, c, f) : m.setEdge(y, c), c;
    }), this;
  }, i.prototype.setEdge = function() {
    var u, f, m, g, y = !1, c = arguments[0];
    typeof c == "object" && c !== null && "v" in c ? (u = c.v, f = c.w, m = c.name, arguments.length === 2 && (g = arguments[1], y = !0)) : (u = c, f = arguments[1], m = arguments[3], arguments.length > 2 && (g = arguments[2], y = !0)), u = "" + u, f = "" + f, o.isUndefined(m) || (m = "" + m);
    var p = s(this._isDirected, u, f, m);
    if (o.has(this._edgeLabels, p))
      return y && (this._edgeLabels[p] = g), this;
    if (!o.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(u), this.setNode(f), this._edgeLabels[p] = y ? g : this._defaultEdgeLabelFn(u, f, m);
    var b = h(this._isDirected, u, f, m);
    return u = b.v, f = b.w, Object.freeze(b), this._edgeObjs[p] = b, a(this._preds[f], u), a(this._sucs[u], f), this._in[f][p] = b, this._out[u][p] = b, this._edgeCount++, this;
  }, i.prototype.edge = function(u, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : s(this._isDirected, u, f, m);
    return this._edgeLabels[g];
  }, i.prototype.hasEdge = function(u, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : s(this._isDirected, u, f, m);
    return o.has(this._edgeLabels, g);
  }, i.prototype.removeEdge = function(u, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : s(this._isDirected, u, f, m), y = this._edgeObjs[g];
    return y && (u = y.v, f = y.w, delete this._edgeLabels[g], delete this._edgeObjs[g], e(this._preds[f], u), e(this._sucs[u], f), delete this._in[f][g], delete this._out[u][g], this._edgeCount--), this;
  }, i.prototype.inEdges = function(u, f) {
    var m = this._in[u];
    if (m) {
      var g = o.values(m);
      return f ? o.filter(g, function(y) {
        return y.v === f;
      }) : g;
    }
  }, i.prototype.outEdges = function(u, f) {
    var m = this._out[u];
    if (m) {
      var g = o.values(m);
      return f ? o.filter(g, function(y) {
        return y.w === f;
      }) : g;
    }
  }, i.prototype.nodeEdges = function(u, f) {
    var m = this.inEdges(u, f);
    if (m)
      return m.concat(this.outEdges(u, f));
  };
  function a(u, f) {
    u[f] ? u[f]++ : u[f] = 1;
  }
  function e(u, f) {
    --u[f] || delete u[f];
  }
  function s(u, f, m, g) {
    var y = "" + f, c = "" + m;
    if (!u && y > c) {
      var p = y;
      y = c, c = p;
    }
    return y + n + c + n + (o.isUndefined(g) ? t : g);
  }
  function h(u, f, m, g) {
    var y = "" + f, c = "" + m;
    if (!u && y > c) {
      var p = y;
      y = c, c = p;
    }
    var b = { v: y, w: c };
    return g && (b.name = g), b;
  }
  function d(u, f) {
    return s(u, f.v, f.w, f.name);
  }
  return Ka;
}
var Xa, Ep;
function Py() {
  return Ep || (Ep = 1, Xa = "2.1.8"), Xa;
}
var Qa, Cp;
function _y() {
  return Cp || (Cp = 1, Qa = {
    Graph: Lc(),
    version: Py()
  }), Qa;
}
var Za, Mp;
function Dy() {
  if (Mp) return Za;
  Mp = 1;
  var o = at(), t = Lc();
  Za = {
    write: r,
    read: a
  };
  function r(e) {
    var s = {
      options: {
        directed: e.isDirected(),
        multigraph: e.isMultigraph(),
        compound: e.isCompound()
      },
      nodes: n(e),
      edges: i(e)
    };
    return o.isUndefined(e.graph()) || (s.value = o.clone(e.graph())), s;
  }
  function n(e) {
    return o.map(e.nodes(), function(s) {
      var h = e.node(s), d = e.parent(s), u = { v: s };
      return o.isUndefined(h) || (u.value = h), o.isUndefined(d) || (u.parent = d), u;
    });
  }
  function i(e) {
    return o.map(e.edges(), function(s) {
      var h = e.edge(s), d = { v: s.v, w: s.w };
      return o.isUndefined(s.name) || (d.name = s.name), o.isUndefined(h) || (d.value = h), d;
    });
  }
  function a(e) {
    var s = new t(e.options).setGraph(e.value);
    return o.each(e.nodes, function(h) {
      s.setNode(h.v, h.value), h.parent && s.setParent(h.v, h.parent);
    }), o.each(e.edges, function(h) {
      s.setEdge({ v: h.v, w: h.w, name: h.name }, h.value);
    }), s;
  }
  return Za;
}
var Ja, Ap;
function Ly() {
  if (Ap) return Ja;
  Ap = 1;
  var o = at();
  Ja = t;
  function t(r) {
    var n = {}, i = [], a;
    function e(s) {
      o.has(n, s) || (n[s] = !0, a.push(s), o.each(r.successors(s), e), o.each(r.predecessors(s), e));
    }
    return o.each(r.nodes(), function(s) {
      a = [], e(s), a.length && i.push(a);
    }), i;
  }
  return Ja;
}
var es, $p;
function Vf() {
  if ($p) return es;
  $p = 1;
  var o = at();
  es = t;
  function t() {
    this._arr = [], this._keyIndices = {};
  }
  return t.prototype.size = function() {
    return this._arr.length;
  }, t.prototype.keys = function() {
    return this._arr.map(function(r) {
      return r.key;
    });
  }, t.prototype.has = function(r) {
    return o.has(this._keyIndices, r);
  }, t.prototype.priority = function(r) {
    var n = this._keyIndices[r];
    if (n !== void 0)
      return this._arr[n].priority;
  }, t.prototype.min = function() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }, t.prototype.add = function(r, n) {
    var i = this._keyIndices;
    if (r = String(r), !o.has(i, r)) {
      var a = this._arr, e = a.length;
      return i[r] = e, a.push({ key: r, priority: n }), this._decrease(e), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var r = this._arr.pop();
    return delete this._keyIndices[r.key], this._heapify(0), r.key;
  }, t.prototype.decrease = function(r, n) {
    var i = this._keyIndices[r];
    if (n > this._arr[i].priority)
      throw new Error("New priority is greater than current priority. Key: " + r + " Old: " + this._arr[i].priority + " New: " + n);
    this._arr[i].priority = n, this._decrease(i);
  }, t.prototype._heapify = function(r) {
    var n = this._arr, i = 2 * r, a = i + 1, e = r;
    i < n.length && (e = n[i].priority < n[e].priority ? i : e, a < n.length && (e = n[a].priority < n[e].priority ? a : e), e !== r && (this._swap(r, e), this._heapify(e)));
  }, t.prototype._decrease = function(r) {
    for (var n = this._arr, i = n[r].priority, a; r !== 0 && (a = r >> 1, !(n[a].priority < i)); )
      this._swap(r, a), r = a;
  }, t.prototype._swap = function(r, n) {
    var i = this._arr, a = this._keyIndices, e = i[r], s = i[n];
    i[r] = s, i[n] = e, a[s.key] = r, a[e.key] = n;
  }, es;
}
var ts, Rp;
function Kf() {
  if (Rp) return ts;
  Rp = 1;
  var o = at(), t = Vf();
  ts = n;
  var r = o.constant(1);
  function n(a, e, s, h) {
    return i(
      a,
      String(e),
      s || r,
      h || function(d) {
        return a.outEdges(d);
      }
    );
  }
  function i(a, e, s, h) {
    var d = {}, u = new t(), f, m, g = function(y) {
      var c = y.v !== f ? y.v : y.w, p = d[c], b = s(y), x = m.distance + b;
      if (b < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + y + " Weight: " + b);
      x < p.distance && (p.distance = x, p.predecessor = f, u.decrease(c, x));
    };
    for (a.nodes().forEach(function(y) {
      var c = y === e ? 0 : Number.POSITIVE_INFINITY;
      d[y] = { distance: c }, u.add(y, c);
    }); u.size() > 0 && (f = u.removeMin(), m = d[f], m.distance !== Number.POSITIVE_INFINITY); )
      h(f).forEach(g);
    return d;
  }
  return ts;
}
var rs, Ip;
function Ny() {
  if (Ip) return rs;
  Ip = 1;
  var o = Kf(), t = at();
  rs = r;
  function r(n, i, a) {
    return t.transform(n.nodes(), function(e, s) {
      e[s] = o(n, s, i, a);
    }, {});
  }
  return rs;
}
var ns, Tp;
function Xf() {
  if (Tp) return ns;
  Tp = 1;
  var o = at();
  ns = t;
  function t(r) {
    var n = 0, i = [], a = {}, e = [];
    function s(h) {
      var d = a[h] = {
        onStack: !0,
        lowlink: n,
        index: n++
      };
      if (i.push(h), r.successors(h).forEach(function(m) {
        o.has(a, m) ? a[m].onStack && (d.lowlink = Math.min(d.lowlink, a[m].index)) : (s(m), d.lowlink = Math.min(d.lowlink, a[m].lowlink));
      }), d.lowlink === d.index) {
        var u = [], f;
        do
          f = i.pop(), a[f].onStack = !1, u.push(f);
        while (h !== f);
        e.push(u);
      }
    }
    return r.nodes().forEach(function(h) {
      o.has(a, h) || s(h);
    }), e;
  }
  return ns;
}
var os, Pp;
function By() {
  if (Pp) return os;
  Pp = 1;
  var o = at(), t = Xf();
  os = r;
  function r(n) {
    return o.filter(t(n), function(i) {
      return i.length > 1 || i.length === 1 && n.hasEdge(i[0], i[0]);
    });
  }
  return os;
}
var is, _p;
function Wy() {
  if (_p) return is;
  _p = 1;
  var o = at();
  is = r;
  var t = o.constant(1);
  function r(i, a, e) {
    return n(
      i,
      a || t,
      e || function(s) {
        return i.outEdges(s);
      }
    );
  }
  function n(i, a, e) {
    var s = {}, h = i.nodes();
    return h.forEach(function(d) {
      s[d] = {}, s[d][d] = { distance: 0 }, h.forEach(function(u) {
        d !== u && (s[d][u] = { distance: Number.POSITIVE_INFINITY });
      }), e(d).forEach(function(u) {
        var f = u.v === d ? u.w : u.v, m = a(u);
        s[d][f] = { distance: m, predecessor: d };
      });
    }), h.forEach(function(d) {
      var u = s[d];
      h.forEach(function(f) {
        var m = s[f];
        h.forEach(function(g) {
          var y = m[d], c = u[g], p = m[g], b = y.distance + c.distance;
          b < p.distance && (p.distance = b, p.predecessor = c.predecessor);
        });
      });
    }), s;
  }
  return is;
}
var as, Dp;
function Qf() {
  if (Dp) return as;
  Dp = 1;
  var o = at();
  as = t, t.CycleException = r;
  function t(n) {
    var i = {}, a = {}, e = [];
    function s(h) {
      if (o.has(a, h))
        throw new r();
      o.has(i, h) || (a[h] = !0, i[h] = !0, o.each(n.predecessors(h), s), delete a[h], e.push(h));
    }
    if (o.each(n.sinks(), s), o.size(i) !== n.nodeCount())
      throw new r();
    return e;
  }
  function r() {
  }
  return r.prototype = new Error(), as;
}
var ss, Lp;
function zy() {
  if (Lp) return ss;
  Lp = 1;
  var o = Qf();
  ss = t;
  function t(r) {
    try {
      o(r);
    } catch (n) {
      if (n instanceof o.CycleException)
        return !1;
      throw n;
    }
    return !0;
  }
  return ss;
}
var cs, Np;
function Zf() {
  if (Np) return cs;
  Np = 1;
  var o = at();
  cs = t;
  function t(n, i, a) {
    o.isArray(i) || (i = [i]);
    var e = (n.isDirected() ? n.successors : n.neighbors).bind(n), s = [], h = {};
    return o.each(i, function(d) {
      if (!n.hasNode(d))
        throw new Error("Graph does not have node: " + d);
      r(n, d, a === "post", h, e, s);
    }), s;
  }
  function r(n, i, a, e, s, h) {
    o.has(e, i) || (e[i] = !0, a || h.push(i), o.each(s(i), function(d) {
      r(n, d, a, e, s, h);
    }), a && h.push(i));
  }
  return cs;
}
var ls, Bp;
function Oy() {
  if (Bp) return ls;
  Bp = 1;
  var o = Zf();
  ls = t;
  function t(r, n) {
    return o(r, n, "post");
  }
  return ls;
}
var ds, Wp;
function qy() {
  if (Wp) return ds;
  Wp = 1;
  var o = Zf();
  ds = t;
  function t(r, n) {
    return o(r, n, "pre");
  }
  return ds;
}
var us, zp;
function Fy() {
  if (zp) return us;
  zp = 1;
  var o = at(), t = Lc(), r = Vf();
  us = n;
  function n(i, a) {
    var e = new t(), s = {}, h = new r(), d;
    function u(m) {
      var g = m.v === d ? m.w : m.v, y = h.priority(g);
      if (y !== void 0) {
        var c = a(m);
        c < y && (s[g] = d, h.decrease(g, c));
      }
    }
    if (i.nodeCount() === 0)
      return e;
    o.each(i.nodes(), function(m) {
      h.add(m, Number.POSITIVE_INFINITY), e.setNode(m);
    }), h.decrease(i.nodes()[0], 0);
    for (var f = !1; h.size() > 0; ) {
      if (d = h.removeMin(), o.has(s, d))
        e.setEdge(d, s[d]);
      else {
        if (f)
          throw new Error("Input graph is not connected: " + i);
        f = !0;
      }
      i.nodeEdges(d).forEach(u);
    }
    return e;
  }
  return us;
}
var ps, Op;
function Uy() {
  return Op || (Op = 1, ps = {
    components: Ly(),
    dijkstra: Kf(),
    dijkstraAll: Ny(),
    findCycles: By(),
    floydWarshall: Wy(),
    isAcyclic: zy(),
    postorder: Oy(),
    preorder: qy(),
    prim: Fy(),
    tarjan: Xf(),
    topsort: Qf()
  }), ps;
}
var hs, qp;
function Gy() {
  if (qp) return hs;
  qp = 1;
  var o = _y();
  return hs = {
    Graph: o.Graph,
    json: Dy(),
    alg: Uy(),
    version: o.version
  }, hs;
}
var Pr;
if (typeof xc == "function")
  try {
    Pr = Gy();
  } catch {
  }
Pr || (Pr = window.graphlib);
var ht = Pr, fs, Fp;
function jy() {
  if (Fp) return fs;
  Fp = 1;
  var o = kf(), t = 1, r = 4;
  function n(i) {
    return o(i, t | r);
  }
  return fs = n, fs;
}
var gs, Up;
function tn() {
  if (Up) return gs;
  Up = 1;
  var o = Ft(), t = Ct(), r = Hr(), n = it();
  function i(a, e, s) {
    if (!n(s))
      return !1;
    var h = typeof e;
    return (h == "number" ? t(s) && r(e, s.length) : h == "string" && e in s) ? o(s[e], a) : !1;
  }
  return gs = i, gs;
}
var ms, Gp;
function Hy() {
  if (Gp) return ms;
  Gp = 1;
  var o = en(), t = Ft(), r = tn(), n = Wt(), i = Object.prototype, a = i.hasOwnProperty, e = o(function(s, h) {
    s = Object(s);
    var d = -1, u = h.length, f = u > 2 ? h[2] : void 0;
    for (f && r(h[0], h[1], f) && (u = 1); ++d < u; )
      for (var m = h[d], g = n(m), y = -1, c = g.length; ++y < c; ) {
        var p = g[y], b = s[p];
        (b === void 0 || t(b, i[p]) && !a.call(s, p)) && (s[p] = m[p]);
      }
    return s;
  });
  return ms = e, ms;
}
var ys, jp;
function Yy() {
  if (jp) return ys;
  jp = 1;
  var o = Mt(), t = Ct(), r = _t();
  function n(i) {
    return function(a, e, s) {
      var h = Object(a);
      if (!t(a)) {
        var d = o(e, 3);
        a = r(a), e = function(f) {
          return d(h[f], f, h);
        };
      }
      var u = i(a, e, s);
      return u > -1 ? h[d ? a[u] : u] : void 0;
    };
  }
  return ys = n, ys;
}
var bs, Hp;
function Vy() {
  if (Hp) return bs;
  Hp = 1;
  var o = /\s/;
  function t(r) {
    for (var n = r.length; n-- && o.test(r.charAt(n)); )
      ;
    return n;
  }
  return bs = t, bs;
}
var xs, Yp;
function Ky() {
  if (Yp) return xs;
  Yp = 1;
  var o = Vy(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, o(n) + 1).replace(t, "");
  }
  return xs = r, xs;
}
var vs, Vp;
function Xy() {
  if (Vp) return vs;
  Vp = 1;
  var o = Ky(), t = it(), r = Ht(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, e = /^0o[0-7]+$/i, s = parseInt;
  function h(d) {
    if (typeof d == "number")
      return d;
    if (r(d))
      return n;
    if (t(d)) {
      var u = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = t(u) ? u + "" : u;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = o(d);
    var f = a.test(d);
    return f || e.test(d) ? s(d.slice(2), f ? 2 : 8) : i.test(d) ? n : +d;
  }
  return vs = h, vs;
}
var ws, Kp;
function Jf() {
  if (Kp) return ws;
  Kp = 1;
  var o = Xy(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = o(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return ws = n, ws;
}
var Ss, Xp;
function Qy() {
  if (Xp) return Ss;
  Xp = 1;
  var o = Jf();
  function t(r) {
    var n = o(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return Ss = t, Ss;
}
var ks, Qp;
function Zy() {
  if (Qp) return ks;
  Qp = 1;
  var o = jf(), t = Mt(), r = Qy(), n = Math.max;
  function i(a, e, s) {
    var h = a == null ? 0 : a.length;
    if (!h)
      return -1;
    var d = s == null ? 0 : r(s);
    return d < 0 && (d = n(h + d, 0)), o(a, t(e, 3), d);
  }
  return ks = i, ks;
}
var Es, Zp;
function Jy() {
  if (Zp) return Es;
  Zp = 1;
  var o = Yy(), t = Zy(), r = o(t);
  return Es = r, Es;
}
var Cs, Jp;
function eg() {
  if (Jp) return Cs;
  Jp = 1;
  var o = Dc();
  function t(r) {
    var n = r == null ? 0 : r.length;
    return n ? o(r, 1) : [];
  }
  return Cs = t, Cs;
}
var Ms, eh;
function e0() {
  if (eh) return Ms;
  eh = 1;
  var o = Ic(), t = Ef(), r = Wt();
  function n(i, a) {
    return i == null ? i : o(i, t(a), r);
  }
  return Ms = n, Ms;
}
var As, th;
function t0() {
  if (th) return As;
  th = 1;
  function o(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return As = o, As;
}
var $s, rh;
function r0() {
  if (rh) return $s;
  rh = 1;
  var o = Gr(), t = Tc(), r = Mt();
  function n(i, a) {
    var e = {};
    return a = r(a, 3), t(i, function(s, h, d) {
      o(e, h, a(s, h, d));
    }), e;
  }
  return $s = n, $s;
}
var Rs, nh;
function Nc() {
  if (nh) return Rs;
  nh = 1;
  var o = Ht();
  function t(r, n, i) {
    for (var a = -1, e = r.length; ++a < e; ) {
      var s = r[a], h = n(s);
      if (h != null && (d === void 0 ? h === h && !o(h) : i(h, d)))
        var d = h, u = s;
    }
    return u;
  }
  return Rs = t, Rs;
}
var Is, oh;
function n0() {
  if (oh) return Is;
  oh = 1;
  function o(t, r) {
    return t > r;
  }
  return Is = o, Is;
}
var Ts, ih;
function o0() {
  if (ih) return Ts;
  ih = 1;
  var o = Nc(), t = n0(), r = zt();
  function n(i) {
    return i && i.length ? o(i, r, t) : void 0;
  }
  return Ts = n, Ts;
}
var Ps, ah;
function tg() {
  if (ah) return Ps;
  ah = 1;
  var o = Gr(), t = Ft();
  function r(n, i, a) {
    (a !== void 0 && !t(n[i], a) || a === void 0 && !(i in n)) && o(n, i, a);
  }
  return Ps = r, Ps;
}
var _s, sh;
function i0() {
  if (sh) return _s;
  sh = 1;
  var o = Nt(), t = Kr(), r = bt(), n = "[object Object]", i = Function.prototype, a = Object.prototype, e = i.toString, s = a.hasOwnProperty, h = e.call(Object);
  function d(u) {
    if (!r(u) || o(u) != n)
      return !1;
    var f = t(u);
    if (f === null)
      return !0;
    var m = s.call(f, "constructor") && f.constructor;
    return typeof m == "function" && m instanceof m && e.call(m) == h;
  }
  return _s = d, _s;
}
var Ds, ch;
function rg() {
  if (ch) return Ds;
  ch = 1;
  function o(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return Ds = o, Ds;
}
var Ls, lh;
function a0() {
  if (lh) return Ls;
  lh = 1;
  var o = or(), t = Wt();
  function r(n) {
    return o(n, t(n));
  }
  return Ls = r, Ls;
}
var Ns, dh;
function s0() {
  if (dh) return Ns;
  dh = 1;
  var o = tg(), t = uf(), r = vf(), n = pf(), i = Sf(), a = ir(), e = Ne(), s = Hf(), h = Gt(), d = nr(), u = it(), f = i0(), m = ar(), g = rg(), y = a0();
  function c(p, b, x, C, w, E, k) {
    var M = g(p, x), A = g(b, x), I = k.get(A);
    if (I) {
      o(p, x, I);
      return;
    }
    var R = E ? E(M, A, x + "", p, b, k) : void 0, $ = R === void 0;
    if ($) {
      var D = e(A), P = !D && h(A), _ = !D && !P && m(A);
      R = A, D || P || _ ? e(M) ? R = M : s(M) ? R = n(M) : P ? ($ = !1, R = t(A, !0)) : _ ? ($ = !1, R = r(A, !0)) : R = [] : f(A) || a(A) ? (R = M, a(M) ? R = y(M) : (!u(M) || d(M)) && (R = i(A))) : $ = !1;
    }
    $ && (k.set(A, R), w(R, A, C, E, k), k.delete(A)), o(p, x, R);
  }
  return Ns = c, Ns;
}
var Bs, uh;
function c0() {
  if (uh) return Bs;
  uh = 1;
  var o = Ur(), t = tg(), r = Ic(), n = s0(), i = it(), a = Wt(), e = rg();
  function s(h, d, u, f, m) {
    h !== d && r(d, function(g, y) {
      if (m || (m = new o()), i(g))
        n(h, d, y, u, s, f, m);
      else {
        var c = f ? f(e(h, y), g, y + "", h, d, m) : void 0;
        c === void 0 && (c = g), t(h, y, c);
      }
    }, a);
  }
  return Bs = s, Bs;
}
var Ws, ph;
function l0() {
  if (ph) return Ws;
  ph = 1;
  var o = en(), t = tn();
  function r(n) {
    return o(function(i, a) {
      var e = -1, s = a.length, h = s > 1 ? a[s - 1] : void 0, d = s > 2 ? a[2] : void 0;
      for (h = n.length > 3 && typeof h == "function" ? (s--, h) : void 0, d && t(a[0], a[1], d) && (h = s < 3 ? void 0 : h, s = 1), i = Object(i); ++e < s; ) {
        var u = a[e];
        u && n(i, u, e, h);
      }
      return i;
    });
  }
  return Ws = r, Ws;
}
var zs, hh;
function d0() {
  if (hh) return zs;
  hh = 1;
  var o = c0(), t = l0(), r = t(function(n, i, a) {
    o(n, i, a);
  });
  return zs = r, zs;
}
var Os, fh;
function ng() {
  if (fh) return Os;
  fh = 1;
  function o(t, r) {
    return t < r;
  }
  return Os = o, Os;
}
var qs, gh;
function u0() {
  if (gh) return qs;
  gh = 1;
  var o = Nc(), t = ng(), r = zt();
  function n(i) {
    return i && i.length ? o(i, r, t) : void 0;
  }
  return qs = n, qs;
}
var Fs, mh;
function p0() {
  if (mh) return Fs;
  mh = 1;
  var o = Nc(), t = Mt(), r = ng();
  function n(i, a) {
    return i && i.length ? o(i, t(a, 2), r) : void 0;
  }
  return Fs = n, Fs;
}
var Us, yh;
function h0() {
  if (yh) return Us;
  yh = 1;
  var o = pt(), t = function() {
    return o.Date.now();
  };
  return Us = t, Us;
}
var Gs, bh;
function f0() {
  if (bh) return Gs;
  bh = 1;
  var o = jr(), t = Zr(), r = Hr(), n = it(), i = sr();
  function a(e, s, h, d) {
    if (!n(e))
      return e;
    s = t(s, e);
    for (var u = -1, f = s.length, m = f - 1, g = e; g != null && ++u < f; ) {
      var y = i(s[u]), c = h;
      if (y === "__proto__" || y === "constructor" || y === "prototype")
        return e;
      if (u != m) {
        var p = g[y];
        c = d ? d(p, y, g) : void 0, c === void 0 && (c = n(p) ? p : r(s[u + 1]) ? [] : {});
      }
      o(g, y, c), g = g[y];
    }
    return e;
  }
  return Gs = a, Gs;
}
var js, xh;
function g0() {
  if (xh) return js;
  xh = 1;
  var o = Jr(), t = f0(), r = Zr();
  function n(i, a, e) {
    for (var s = -1, h = a.length, d = {}; ++s < h; ) {
      var u = a[s], f = o(i, u);
      e(f, u) && t(d, r(u, i), f);
    }
    return d;
  }
  return js = n, js;
}
var Hs, vh;
function m0() {
  if (vh) return Hs;
  vh = 1;
  var o = g0(), t = Lf();
  function r(n, i) {
    return o(n, i, function(a, e) {
      return t(n, e);
    });
  }
  return Hs = r, Hs;
}
var Ys, wh;
function y0() {
  if (wh) return Ys;
  wh = 1;
  var o = eg(), t = Uf(), r = Gf();
  function n(i) {
    return r(t(i, void 0, o), i + "");
  }
  return Ys = n, Ys;
}
var Vs, Sh;
function b0() {
  if (Sh) return Vs;
  Sh = 1;
  var o = m0(), t = y0(), r = t(function(n, i) {
    return n == null ? {} : o(n, i);
  });
  return Vs = r, Vs;
}
var Ks, kh;
function x0() {
  if (kh) return Ks;
  kh = 1;
  var o = Math.ceil, t = Math.max;
  function r(n, i, a, e) {
    for (var s = -1, h = t(o((i - n) / (a || 1)), 0), d = Array(h); h--; )
      d[e ? h : ++s] = n, n += a;
    return d;
  }
  return Ks = r, Ks;
}
var Xs, Eh;
function v0() {
  if (Eh) return Xs;
  Eh = 1;
  var o = x0(), t = tn(), r = Jf();
  function n(i) {
    return function(a, e, s) {
      return s && typeof s != "number" && t(a, e, s) && (e = s = void 0), a = r(a), e === void 0 ? (e = a, a = 0) : e = r(e), s = s === void 0 ? a < e ? 1 : -1 : r(s), o(a, e, s, i);
    };
  }
  return Xs = n, Xs;
}
var Qs, Ch;
function w0() {
  if (Ch) return Qs;
  Ch = 1;
  var o = v0(), t = o();
  return Qs = t, Qs;
}
var Zs, Mh;
function S0() {
  if (Mh) return Zs;
  Mh = 1;
  function o(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Zs = o, Zs;
}
var Js, Ah;
function k0() {
  if (Ah) return Js;
  Ah = 1;
  var o = Ht();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, e = r === r, s = o(r), h = n !== void 0, d = n === null, u = n === n, f = o(n);
      if (!d && !f && !s && r > n || s && h && u && !d && !f || a && h && u || !i && u || !e)
        return 1;
      if (!a && !s && !f && r < n || f && i && e && !a && !s || d && i && e || !h && e || !u)
        return -1;
    }
    return 0;
  }
  return Js = t, Js;
}
var ec, $h;
function E0() {
  if ($h) return ec;
  $h = 1;
  var o = k0();
  function t(r, n, i) {
    for (var a = -1, e = r.criteria, s = n.criteria, h = e.length, d = i.length; ++a < h; ) {
      var u = o(e[a], s[a]);
      if (u) {
        if (a >= d)
          return u;
        var f = i[a];
        return u * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return ec = t, ec;
}
var tc, Rh;
function C0() {
  if (Rh) return tc;
  Rh = 1;
  var o = Qr(), t = Jr(), r = Mt(), n = Of(), i = S0(), a = Yr(), e = E0(), s = zt(), h = Ne();
  function d(u, f, m) {
    f.length ? f = o(f, function(c) {
      return h(c) ? function(p) {
        return t(p, c.length === 1 ? c[0] : c);
      } : c;
    }) : f = [s];
    var g = -1;
    f = o(f, a(r));
    var y = n(u, function(c, p, b) {
      var x = o(f, function(C) {
        return C(c);
      });
      return { criteria: x, index: ++g, value: c };
    });
    return i(y, function(c, p) {
      return e(c, p, m);
    });
  }
  return tc = d, tc;
}
var rc, Ih;
function M0() {
  if (Ih) return rc;
  Ih = 1;
  var o = Dc(), t = C0(), r = en(), n = tn(), i = r(function(a, e) {
    if (a == null)
      return [];
    var s = e.length;
    return s > 1 && n(a, e[0], e[1]) ? e = [] : s > 2 && n(e[0], e[1], e[2]) && (e = [e[0]]), t(a, o(e, 1), []);
  });
  return rc = i, rc;
}
var nc, Th;
function A0() {
  if (Th) return nc;
  Th = 1;
  var o = _f(), t = 0;
  function r(n) {
    var i = ++t;
    return o(n) + i;
  }
  return nc = r, nc;
}
var oc, Ph;
function $0() {
  if (Ph) return oc;
  Ph = 1;
  function o(t, r, n) {
    for (var i = -1, a = t.length, e = r.length, s = {}; ++i < a; ) {
      var h = i < e ? r[i] : void 0;
      n(s, t[i], h);
    }
    return s;
  }
  return oc = o, oc;
}
var ic, _h;
function R0() {
  if (_h) return ic;
  _h = 1;
  var o = jr(), t = $0();
  function r(n, i) {
    return t(n || [], i || [], o);
  }
  return ic = r, ic;
}
var _r;
if (typeof xc == "function")
  try {
    _r = {
      cloneDeep: jy(),
      constant: Rc(),
      defaults: Hy(),
      each: Mf(),
      filter: Bf(),
      find: Jy(),
      flatten: eg(),
      forEach: Cf(),
      forIn: e0(),
      has: Wf(),
      isUndefined: zf(),
      last: t0(),
      map: qf(),
      mapValues: r0(),
      max: o0(),
      merge: d0(),
      min: u0(),
      minBy: p0(),
      now: h0(),
      pick: b0(),
      range: w0(),
      reduce: Ff(),
      sortBy: M0(),
      uniqueId: A0(),
      values: Yf(),
      zipObject: R0()
    };
  } catch {
  }
_r || (_r = window._);
var Pe = _r, I0 = rn;
function rn() {
  var o = {};
  o._next = o._prev = o, this._sentinel = o;
}
rn.prototype.dequeue = function() {
  var o = this._sentinel, t = o._prev;
  if (t !== o)
    return og(t), t;
};
rn.prototype.enqueue = function(o) {
  var t = this._sentinel;
  o._prev && o._next && og(o), o._next = t._next, t._next._prev = o, t._next = o, o._prev = t;
};
rn.prototype.toString = function() {
  for (var o = [], t = this._sentinel, r = t._prev; r !== t; )
    o.push(JSON.stringify(r, T0)), r = r._prev;
  return "[" + o.join(", ") + "]";
};
function og(o) {
  o._prev._next = o._next, o._next._prev = o._prev, delete o._next, delete o._prev;
}
function T0(o, t) {
  if (o !== "_next" && o !== "_prev")
    return t;
}
var St = Pe, P0 = ht.Graph, _0 = I0, D0 = N0, L0 = St.constant(1);
function N0(o, t) {
  if (o.nodeCount() <= 1)
    return [];
  var r = W0(o, t || L0), n = B0(r.graph, r.buckets, r.zeroIdx);
  return St.flatten(St.map(n, function(i) {
    return o.outEdges(i.v, i.w);
  }), !0);
}
function B0(o, t, r) {
  for (var n = [], i = t[t.length - 1], a = t[0], e; o.nodeCount(); ) {
    for (; e = a.dequeue(); )
      ac(o, t, r, e);
    for (; e = i.dequeue(); )
      ac(o, t, r, e);
    if (o.nodeCount()) {
      for (var s = t.length - 2; s > 0; --s)
        if (e = t[s].dequeue(), e) {
          n = n.concat(ac(o, t, r, e, !0));
          break;
        }
    }
  }
  return n;
}
function ac(o, t, r, n, i) {
  var a = i ? [] : void 0;
  return St.forEach(o.inEdges(n.v), function(e) {
    var s = o.edge(e), h = o.node(e.v);
    i && a.push({ v: e.v, w: e.w }), h.out -= s, gc(t, r, h);
  }), St.forEach(o.outEdges(n.v), function(e) {
    var s = o.edge(e), h = e.w, d = o.node(h);
    d.in -= s, gc(t, r, d);
  }), o.removeNode(n.v), a;
}
function W0(o, t) {
  var r = new P0(), n = 0, i = 0;
  St.forEach(o.nodes(), function(s) {
    r.setNode(s, { v: s, in: 0, out: 0 });
  }), St.forEach(o.edges(), function(s) {
    var h = r.edge(s.v, s.w) || 0, d = t(s), u = h + d;
    r.setEdge(s.v, s.w, u), i = Math.max(i, r.node(s.v).out += d), n = Math.max(n, r.node(s.w).in += d);
  });
  var a = St.range(i + n + 3).map(function() {
    return new _0();
  }), e = n + 1;
  return St.forEach(r.nodes(), function(s) {
    gc(a, e, r.node(s));
  }), { graph: r, buckets: a, zeroIdx: e };
}
function gc(o, t, r) {
  r.out ? r.in ? o[r.out - r.in + t].enqueue(r) : o[o.length - 1].enqueue(r) : o[0].enqueue(r);
}
var Lt = Pe, z0 = D0, O0 = {
  run: q0,
  undo: U0
};
function q0(o) {
  var t = o.graph().acyclicer === "greedy" ? z0(o, r(o)) : F0(o);
  Lt.forEach(t, function(n) {
    var i = o.edge(n);
    o.removeEdge(n), i.forwardName = n.name, i.reversed = !0, o.setEdge(n.w, n.v, i, Lt.uniqueId("rev"));
  });
  function r(n) {
    return function(i) {
      return n.edge(i).weight;
    };
  }
}
function F0(o) {
  var t = [], r = {}, n = {};
  function i(a) {
    Lt.has(n, a) || (n[a] = !0, r[a] = !0, Lt.forEach(o.outEdges(a), function(e) {
      Lt.has(r, e.w) ? t.push(e) : i(e.w);
    }), delete r[a]);
  }
  return Lt.forEach(o.nodes(), i), t;
}
function U0(o) {
  Lt.forEach(o.edges(), function(t) {
    var r = o.edge(t);
    if (r.reversed) {
      o.removeEdge(t);
      var n = r.forwardName;
      delete r.reversed, delete r.forwardName, o.setEdge(t.w, t.v, r, n);
    }
  });
}
var Ce = Pe, ig = ht.Graph, et = {
  addDummyNode: ag,
  simplify: G0,
  asNonCompoundGraph: j0,
  successorWeights: H0,
  predecessorWeights: Y0,
  intersectRect: V0,
  buildLayerMatrix: K0,
  normalizeRanks: X0,
  removeEmptyRanks: Q0,
  addBorderNode: Z0,
  maxRank: sg,
  partition: J0,
  time: eb,
  notime: tb
};
function ag(o, t, r, n) {
  var i;
  do
    i = Ce.uniqueId(n);
  while (o.hasNode(i));
  return r.dummy = t, o.setNode(i, r), i;
}
function G0(o) {
  var t = new ig().setGraph(o.graph());
  return Ce.forEach(o.nodes(), function(r) {
    t.setNode(r, o.node(r));
  }), Ce.forEach(o.edges(), function(r) {
    var n = t.edge(r.v, r.w) || { weight: 0, minlen: 1 }, i = o.edge(r);
    t.setEdge(r.v, r.w, {
      weight: n.weight + i.weight,
      minlen: Math.max(n.minlen, i.minlen)
    });
  }), t;
}
function j0(o) {
  var t = new ig({ multigraph: o.isMultigraph() }).setGraph(o.graph());
  return Ce.forEach(o.nodes(), function(r) {
    o.children(r).length || t.setNode(r, o.node(r));
  }), Ce.forEach(o.edges(), function(r) {
    t.setEdge(r, o.edge(r));
  }), t;
}
function H0(o) {
  var t = Ce.map(o.nodes(), function(r) {
    var n = {};
    return Ce.forEach(o.outEdges(r), function(i) {
      n[i.w] = (n[i.w] || 0) + o.edge(i).weight;
    }), n;
  });
  return Ce.zipObject(o.nodes(), t);
}
function Y0(o) {
  var t = Ce.map(o.nodes(), function(r) {
    var n = {};
    return Ce.forEach(o.inEdges(r), function(i) {
      n[i.v] = (n[i.v] || 0) + o.edge(i).weight;
    }), n;
  });
  return Ce.zipObject(o.nodes(), t);
}
function V0(o, t) {
  var r = o.x, n = o.y, i = t.x - r, a = t.y - n, e = o.width / 2, s = o.height / 2;
  if (!i && !a)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var h, d;
  return Math.abs(a) * e > Math.abs(i) * s ? (a < 0 && (s = -s), h = s * i / a, d = s) : (i < 0 && (e = -e), h = e, d = e * a / i), { x: r + h, y: n + d };
}
function K0(o) {
  var t = Ce.map(Ce.range(sg(o) + 1), function() {
    return [];
  });
  return Ce.forEach(o.nodes(), function(r) {
    var n = o.node(r), i = n.rank;
    Ce.isUndefined(i) || (t[i][n.order] = r);
  }), t;
}
function X0(o) {
  var t = Ce.min(Ce.map(o.nodes(), function(r) {
    return o.node(r).rank;
  }));
  Ce.forEach(o.nodes(), function(r) {
    var n = o.node(r);
    Ce.has(n, "rank") && (n.rank -= t);
  });
}
function Q0(o) {
  var t = Ce.min(Ce.map(o.nodes(), function(a) {
    return o.node(a).rank;
  })), r = [];
  Ce.forEach(o.nodes(), function(a) {
    var e = o.node(a).rank - t;
    r[e] || (r[e] = []), r[e].push(a);
  });
  var n = 0, i = o.graph().nodeRankFactor;
  Ce.forEach(r, function(a, e) {
    Ce.isUndefined(a) && e % i !== 0 ? --n : n && Ce.forEach(a, function(s) {
      o.node(s).rank += n;
    });
  });
}
function Z0(o, t, r, n) {
  var i = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (i.rank = r, i.order = n), ag(o, "border", i, t);
}
function sg(o) {
  return Ce.max(Ce.map(o.nodes(), function(t) {
    var r = o.node(t).rank;
    if (!Ce.isUndefined(r))
      return r;
  }));
}
function J0(o, t) {
  var r = { lhs: [], rhs: [] };
  return Ce.forEach(o, function(n) {
    t(n) ? r.lhs.push(n) : r.rhs.push(n);
  }), r;
}
function eb(o, t) {
  var r = Ce.now();
  try {
    return t();
  } finally {
    console.log(o + " time: " + (Ce.now() - r) + "ms");
  }
}
function tb(o, t) {
  return t();
}
var cg = Pe, rb = et, nb = {
  run: ob,
  undo: ab
};
function ob(o) {
  o.graph().dummyChains = [], cg.forEach(o.edges(), function(t) {
    ib(o, t);
  });
}
function ib(o, t) {
  var r = t.v, n = o.node(r).rank, i = t.w, a = o.node(i).rank, e = t.name, s = o.edge(t), h = s.labelRank;
  if (a !== n + 1) {
    o.removeEdge(t);
    var d, u, f;
    for (f = 0, ++n; n < a; ++f, ++n)
      s.points = [], u = {
        width: 0,
        height: 0,
        edgeLabel: s,
        edgeObj: t,
        rank: n
      }, d = rb.addDummyNode(o, "edge", u, "_d"), n === h && (u.width = s.width, u.height = s.height, u.dummy = "edge-label", u.labelpos = s.labelpos), o.setEdge(r, d, { weight: s.weight }, e), f === 0 && o.graph().dummyChains.push(d), r = d;
    o.setEdge(r, i, { weight: s.weight }, e);
  }
}
function ab(o) {
  cg.forEach(o.graph().dummyChains, function(t) {
    var r = o.node(t), n = r.edgeLabel, i;
    for (o.setEdge(r.edgeObj, n); r.dummy; )
      i = o.successors(t)[0], o.removeNode(t), n.points.push({ x: r.x, y: r.y }), r.dummy === "edge-label" && (n.x = r.x, n.y = r.y, n.width = r.width, n.height = r.height), t = i, r = o.node(t);
  });
}
var Rr = Pe, nn = {
  longestPath: sb,
  slack: cb
};
function sb(o) {
  var t = {};
  function r(n) {
    var i = o.node(n);
    if (Rr.has(t, n))
      return i.rank;
    t[n] = !0;
    var a = Rr.min(Rr.map(o.outEdges(n), function(e) {
      return r(e.w) - o.edge(e).minlen;
    }));
    return (a === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    a === void 0 || // return value of _.map([]) for Lodash 4
    a === null) && (a = 0), i.rank = a;
  }
  Rr.forEach(o.sources(), r);
}
function cb(o, t) {
  return o.node(t.w).rank - o.node(t.v).rank - o.edge(t).minlen;
}
var Dr = Pe, lb = ht.Graph, Lr = nn.slack, lg = db;
function db(o) {
  var t = new lb({ directed: !1 }), r = o.nodes()[0], n = o.nodeCount();
  t.setNode(r, {});
  for (var i, a; ub(t, o) < n; )
    i = pb(t, o), a = t.hasNode(i.v) ? Lr(o, i) : -Lr(o, i), hb(t, o, a);
  return t;
}
function ub(o, t) {
  function r(n) {
    Dr.forEach(t.nodeEdges(n), function(i) {
      var a = i.v, e = n === a ? i.w : a;
      !o.hasNode(e) && !Lr(t, i) && (o.setNode(e, {}), o.setEdge(n, e, {}), r(e));
    });
  }
  return Dr.forEach(o.nodes(), r), o.nodeCount();
}
function pb(o, t) {
  return Dr.minBy(t.edges(), function(r) {
    if (o.hasNode(r.v) !== o.hasNode(r.w))
      return Lr(t, r);
  });
}
function hb(o, t, r) {
  Dr.forEach(o.nodes(), function(n) {
    t.node(n).rank += r;
  });
}
var Et = Pe, fb = lg, gb = nn.slack, mb = nn.longestPath, yb = ht.alg.preorder, bb = ht.alg.postorder, xb = et.simplify, vb = Ot;
Ot.initLowLimValues = Wc;
Ot.initCutValues = Bc;
Ot.calcCutValue = dg;
Ot.leaveEdge = pg;
Ot.enterEdge = hg;
Ot.exchangeEdges = fg;
function Ot(o) {
  o = xb(o), mb(o);
  var t = fb(o);
  Wc(t), Bc(t, o);
  for (var r, n; r = pg(t); )
    n = hg(t, o, r), fg(t, o, r, n);
}
function Bc(o, t) {
  var r = bb(o, o.nodes());
  r = r.slice(0, r.length - 1), Et.forEach(r, function(n) {
    wb(o, t, n);
  });
}
function wb(o, t, r) {
  var n = o.node(r), i = n.parent;
  o.edge(r, i).cutvalue = dg(o, t, r);
}
function dg(o, t, r) {
  var n = o.node(r), i = n.parent, a = !0, e = t.edge(r, i), s = 0;
  return e || (a = !1, e = t.edge(i, r)), s = e.weight, Et.forEach(t.nodeEdges(r), function(h) {
    var d = h.v === r, u = d ? h.w : h.v;
    if (u !== i) {
      var f = d === a, m = t.edge(h).weight;
      if (s += f ? m : -m, kb(o, r, u)) {
        var g = o.edge(r, u).cutvalue;
        s += f ? -g : g;
      }
    }
  }), s;
}
function Wc(o, t) {
  arguments.length < 2 && (t = o.nodes()[0]), ug(o, {}, 1, t);
}
function ug(o, t, r, n, i) {
  var a = r, e = o.node(n);
  return t[n] = !0, Et.forEach(o.neighbors(n), function(s) {
    Et.has(t, s) || (r = ug(o, t, r, s, n));
  }), e.low = a, e.lim = r++, i ? e.parent = i : delete e.parent, r;
}
function pg(o) {
  return Et.find(o.edges(), function(t) {
    return o.edge(t).cutvalue < 0;
  });
}
function hg(o, t, r) {
  var n = r.v, i = r.w;
  t.hasEdge(n, i) || (n = r.w, i = r.v);
  var a = o.node(n), e = o.node(i), s = a, h = !1;
  a.lim > e.lim && (s = e, h = !0);
  var d = Et.filter(t.edges(), function(u) {
    return h === Dh(o, o.node(u.v), s) && h !== Dh(o, o.node(u.w), s);
  });
  return Et.minBy(d, function(u) {
    return gb(t, u);
  });
}
function fg(o, t, r, n) {
  var i = r.v, a = r.w;
  o.removeEdge(i, a), o.setEdge(n.v, n.w, {}), Wc(o), Bc(o, t), Sb(o, t);
}
function Sb(o, t) {
  var r = Et.find(o.nodes(), function(i) {
    return !t.node(i).parent;
  }), n = yb(o, r);
  n = n.slice(1), Et.forEach(n, function(i) {
    var a = o.node(i).parent, e = t.edge(i, a), s = !1;
    e || (e = t.edge(a, i), s = !0), t.node(i).rank = t.node(a).rank + (s ? e.minlen : -e.minlen);
  });
}
function kb(o, t, r) {
  return o.hasEdge(t, r);
}
function Dh(o, t, r) {
  return r.low <= t.lim && t.lim <= r.lim;
}
var Eb = nn, gg = Eb.longestPath, Cb = lg, Mb = vb, Ab = $b;
function $b(o) {
  switch (o.graph().ranker) {
    case "network-simplex":
      Lh(o);
      break;
    case "tight-tree":
      Ib(o);
      break;
    case "longest-path":
      Rb(o);
      break;
    default:
      Lh(o);
  }
}
var Rb = gg;
function Ib(o) {
  gg(o), Cb(o);
}
function Lh(o) {
  Mb(o);
}
var mc = Pe, Tb = Pb;
function Pb(o) {
  var t = Db(o);
  mc.forEach(o.graph().dummyChains, function(r) {
    for (var n = o.node(r), i = n.edgeObj, a = _b(o, t, i.v, i.w), e = a.path, s = a.lca, h = 0, d = e[h], u = !0; r !== i.w; ) {
      if (n = o.node(r), u) {
        for (; (d = e[h]) !== s && o.node(d).maxRank < n.rank; )
          h++;
        d === s && (u = !1);
      }
      if (!u) {
        for (; h < e.length - 1 && o.node(d = e[h + 1]).minRank <= n.rank; )
          h++;
        d = e[h];
      }
      o.setParent(r, d), r = o.successors(r)[0];
    }
  });
}
function _b(o, t, r, n) {
  var i = [], a = [], e = Math.min(t[r].low, t[n].low), s = Math.max(t[r].lim, t[n].lim), h, d;
  h = r;
  do
    h = o.parent(h), i.push(h);
  while (h && (t[h].low > e || s > t[h].lim));
  for (d = h, h = n; (h = o.parent(h)) !== d; )
    a.push(h);
  return { path: i.concat(a.reverse()), lca: d };
}
function Db(o) {
  var t = {}, r = 0;
  function n(i) {
    var a = r;
    mc.forEach(o.children(i), n), t[i] = { low: a, lim: r++ };
  }
  return mc.forEach(o.children(), n), t;
}
var kt = Pe, yc = et, Lb = {
  run: Nb,
  cleanup: zb
};
function Nb(o) {
  var t = yc.addDummyNode(o, "root", {}, "_root"), r = Bb(o), n = kt.max(kt.values(r)) - 1, i = 2 * n + 1;
  o.graph().nestingRoot = t, kt.forEach(o.edges(), function(e) {
    o.edge(e).minlen *= i;
  });
  var a = Wb(o) + 1;
  kt.forEach(o.children(), function(e) {
    mg(o, t, i, a, n, r, e);
  }), o.graph().nodeRankFactor = i;
}
function mg(o, t, r, n, i, a, e) {
  var s = o.children(e);
  if (!s.length) {
    e !== t && o.setEdge(t, e, { weight: 0, minlen: r });
    return;
  }
  var h = yc.addBorderNode(o, "_bt"), d = yc.addBorderNode(o, "_bb"), u = o.node(e);
  o.setParent(h, e), u.borderTop = h, o.setParent(d, e), u.borderBottom = d, kt.forEach(s, function(f) {
    mg(o, t, r, n, i, a, f);
    var m = o.node(f), g = m.borderTop ? m.borderTop : f, y = m.borderBottom ? m.borderBottom : f, c = m.borderTop ? n : 2 * n, p = g !== y ? 1 : i - a[e] + 1;
    o.setEdge(h, g, {
      weight: c,
      minlen: p,
      nestingEdge: !0
    }), o.setEdge(y, d, {
      weight: c,
      minlen: p,
      nestingEdge: !0
    });
  }), o.parent(e) || o.setEdge(t, h, { weight: 0, minlen: i + a[e] });
}
function Bb(o) {
  var t = {};
  function r(n, i) {
    var a = o.children(n);
    a && a.length && kt.forEach(a, function(e) {
      r(e, i + 1);
    }), t[n] = i;
  }
  return kt.forEach(o.children(), function(n) {
    r(n, 1);
  }), t;
}
function Wb(o) {
  return kt.reduce(o.edges(), function(t, r) {
    return t + o.edge(r).weight;
  }, 0);
}
function zb(o) {
  var t = o.graph();
  o.removeNode(t.nestingRoot), delete t.nestingRoot, kt.forEach(o.edges(), function(r) {
    var n = o.edge(r);
    n.nestingEdge && o.removeEdge(r);
  });
}
var sc = Pe, Ob = et, qb = Fb;
function Fb(o) {
  function t(r) {
    var n = o.children(r), i = o.node(r);
    if (n.length && sc.forEach(n, t), sc.has(i, "minRank")) {
      i.borderLeft = [], i.borderRight = [];
      for (var a = i.minRank, e = i.maxRank + 1; a < e; ++a)
        Nh(o, "borderLeft", "_bl", r, i, a), Nh(o, "borderRight", "_br", r, i, a);
    }
  }
  sc.forEach(o.children(), t);
}
function Nh(o, t, r, n, i, a) {
  var e = { width: 0, height: 0, rank: a, borderType: t }, s = i[t][a - 1], h = Ob.addDummyNode(o, "border", e, r);
  i[t][a] = h, o.setParent(h, n), s && o.setEdge(s, h, { weight: 1 });
}
var mt = Pe, Ub = {
  adjust: Gb,
  undo: jb
};
function Gb(o) {
  var t = o.graph().rankdir.toLowerCase();
  (t === "lr" || t === "rl") && yg(o);
}
function jb(o) {
  var t = o.graph().rankdir.toLowerCase();
  (t === "bt" || t === "rl") && Hb(o), (t === "lr" || t === "rl") && (Yb(o), yg(o));
}
function yg(o) {
  mt.forEach(o.nodes(), function(t) {
    Bh(o.node(t));
  }), mt.forEach(o.edges(), function(t) {
    Bh(o.edge(t));
  });
}
function Bh(o) {
  var t = o.width;
  o.width = o.height, o.height = t;
}
function Hb(o) {
  mt.forEach(o.nodes(), function(t) {
    cc(o.node(t));
  }), mt.forEach(o.edges(), function(t) {
    var r = o.edge(t);
    mt.forEach(r.points, cc), mt.has(r, "y") && cc(r);
  });
}
function cc(o) {
  o.y = -o.y;
}
function Yb(o) {
  mt.forEach(o.nodes(), function(t) {
    lc(o.node(t));
  }), mt.forEach(o.edges(), function(t) {
    var r = o.edge(t);
    mt.forEach(r.points, lc), mt.has(r, "x") && lc(r);
  });
}
function lc(o) {
  var t = o.x;
  o.x = o.y, o.y = t;
}
var vt = Pe, Vb = Kb;
function Kb(o) {
  var t = {}, r = vt.filter(o.nodes(), function(s) {
    return !o.children(s).length;
  }), n = vt.max(vt.map(r, function(s) {
    return o.node(s).rank;
  })), i = vt.map(vt.range(n + 1), function() {
    return [];
  });
  function a(s) {
    if (!vt.has(t, s)) {
      t[s] = !0;
      var h = o.node(s);
      i[h.rank].push(s), vt.forEach(o.successors(s), a);
    }
  }
  var e = vt.sortBy(r, function(s) {
    return o.node(s).rank;
  });
  return vt.forEach(e, a), i;
}
var At = Pe, Xb = Qb;
function Qb(o, t) {
  for (var r = 0, n = 1; n < t.length; ++n)
    r += Zb(o, t[n - 1], t[n]);
  return r;
}
function Zb(o, t, r) {
  for (var n = At.zipObject(
    r,
    At.map(r, function(d, u) {
      return u;
    })
  ), i = At.flatten(At.map(t, function(d) {
    return At.sortBy(At.map(o.outEdges(d), function(u) {
      return { pos: n[u.w], weight: o.edge(u).weight };
    }), "pos");
  }), !0), a = 1; a < r.length; ) a <<= 1;
  var e = 2 * a - 1;
  a -= 1;
  var s = At.map(new Array(e), function() {
    return 0;
  }), h = 0;
  return At.forEach(i.forEach(function(d) {
    var u = d.pos + a;
    s[u] += d.weight;
    for (var f = 0; u > 0; )
      u % 2 && (f += s[u + 1]), u = u - 1 >> 1, s[u] += d.weight;
    h += d.weight * f;
  })), h;
}
var Wh = Pe, Jb = ex;
function ex(o, t) {
  return Wh.map(t, function(r) {
    var n = o.inEdges(r);
    if (n.length) {
      var i = Wh.reduce(n, function(a, e) {
        var s = o.edge(e), h = o.node(e.v);
        return {
          sum: a.sum + s.weight * h.order,
          weight: a.weight + s.weight
        };
      }, { sum: 0, weight: 0 });
      return {
        v: r,
        barycenter: i.sum / i.weight,
        weight: i.weight
      };
    } else
      return { v: r };
  });
}
var nt = Pe, tx = rx;
function rx(o, t) {
  var r = {};
  nt.forEach(o, function(i, a) {
    var e = r[i.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [i.v],
      i: a
    };
    nt.isUndefined(i.barycenter) || (e.barycenter = i.barycenter, e.weight = i.weight);
  }), nt.forEach(t.edges(), function(i) {
    var a = r[i.v], e = r[i.w];
    !nt.isUndefined(a) && !nt.isUndefined(e) && (e.indegree++, a.out.push(r[i.w]));
  });
  var n = nt.filter(r, function(i) {
    return !i.indegree;
  });
  return nx(n);
}
function nx(o) {
  var t = [];
  function r(a) {
    return function(e) {
      e.merged || (nt.isUndefined(e.barycenter) || nt.isUndefined(a.barycenter) || e.barycenter >= a.barycenter) && ox(a, e);
    };
  }
  function n(a) {
    return function(e) {
      e.in.push(a), --e.indegree === 0 && o.push(e);
    };
  }
  for (; o.length; ) {
    var i = o.pop();
    t.push(i), nt.forEach(i.in.reverse(), r(i)), nt.forEach(i.out, n(i));
  }
  return nt.map(
    nt.filter(t, function(a) {
      return !a.merged;
    }),
    function(a) {
      return nt.pick(a, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function ox(o, t) {
  var r = 0, n = 0;
  o.weight && (r += o.barycenter * o.weight, n += o.weight), t.weight && (r += t.barycenter * t.weight, n += t.weight), o.vs = t.vs.concat(o.vs), o.barycenter = r / n, o.weight = n, o.i = Math.min(t.i, o.i), t.merged = !0;
}
var Zt = Pe, ix = et, ax = sx;
function sx(o, t) {
  var r = ix.partition(o, function(u) {
    return Zt.has(u, "barycenter");
  }), n = r.lhs, i = Zt.sortBy(r.rhs, function(u) {
    return -u.i;
  }), a = [], e = 0, s = 0, h = 0;
  n.sort(cx(!!t)), h = zh(a, i, h), Zt.forEach(n, function(u) {
    h += u.vs.length, a.push(u.vs), e += u.barycenter * u.weight, s += u.weight, h = zh(a, i, h);
  });
  var d = { vs: Zt.flatten(a, !0) };
  return s && (d.barycenter = e / s, d.weight = s), d;
}
function zh(o, t, r) {
  for (var n; t.length && (n = Zt.last(t)).i <= r; )
    t.pop(), o.push(n.vs), r++;
  return r;
}
function cx(o) {
  return function(t, r) {
    return t.barycenter < r.barycenter ? -1 : t.barycenter > r.barycenter ? 1 : o ? r.i - t.i : t.i - r.i;
  };
}
var $t = Pe, lx = Jb, dx = tx, ux = ax, px = bg;
function bg(o, t, r, n) {
  var i = o.children(t), a = o.node(t), e = a ? a.borderLeft : void 0, s = a ? a.borderRight : void 0, h = {};
  e && (i = $t.filter(i, function(y) {
    return y !== e && y !== s;
  }));
  var d = lx(o, i);
  $t.forEach(d, function(y) {
    if (o.children(y.v).length) {
      var c = bg(o, y.v, r, n);
      h[y.v] = c, $t.has(c, "barycenter") && fx(y, c);
    }
  });
  var u = dx(d, r);
  hx(u, h);
  var f = ux(u, n);
  if (e && (f.vs = $t.flatten([e, f.vs, s], !0), o.predecessors(e).length)) {
    var m = o.node(o.predecessors(e)[0]), g = o.node(o.predecessors(s)[0]);
    $t.has(f, "barycenter") || (f.barycenter = 0, f.weight = 0), f.barycenter = (f.barycenter * f.weight + m.order + g.order) / (f.weight + 2), f.weight += 2;
  }
  return f;
}
function hx(o, t) {
  $t.forEach(o, function(r) {
    r.vs = $t.flatten(r.vs.map(function(n) {
      return t[n] ? t[n].vs : n;
    }), !0);
  });
}
function fx(o, t) {
  $t.isUndefined(o.barycenter) ? (o.barycenter = t.barycenter, o.weight = t.weight) : (o.barycenter = (o.barycenter * o.weight + t.barycenter * t.weight) / (o.weight + t.weight), o.weight += t.weight);
}
var Jt = Pe, gx = ht.Graph, mx = yx;
function yx(o, t, r) {
  var n = bx(o), i = new gx({ compound: !0 }).setGraph({ root: n }).setDefaultNodeLabel(function(a) {
    return o.node(a);
  });
  return Jt.forEach(o.nodes(), function(a) {
    var e = o.node(a), s = o.parent(a);
    (e.rank === t || e.minRank <= t && t <= e.maxRank) && (i.setNode(a), i.setParent(a, s || n), Jt.forEach(o[r](a), function(h) {
      var d = h.v === a ? h.w : h.v, u = i.edge(d, a), f = Jt.isUndefined(u) ? 0 : u.weight;
      i.setEdge(d, a, { weight: o.edge(h).weight + f });
    }), Jt.has(e, "minRank") && i.setNode(a, {
      borderLeft: e.borderLeft[t],
      borderRight: e.borderRight[t]
    }));
  }), i;
}
function bx(o) {
  for (var t; o.hasNode(t = Jt.uniqueId("_root")); ) ;
  return t;
}
var xx = Pe, vx = wx;
function wx(o, t, r) {
  var n = {}, i;
  xx.forEach(r, function(a) {
    for (var e = o.parent(a), s, h; e; ) {
      if (s = o.parent(e), s ? (h = n[s], n[s] = e) : (h = i, i = e), h && h !== e) {
        t.setEdge(h, e);
        return;
      }
      e = s;
    }
  });
}
var It = Pe, Sx = Vb, kx = Xb, Ex = px, Cx = mx, Mx = vx, Ax = ht.Graph, Oh = et, $x = Rx;
function Rx(o) {
  var t = Oh.maxRank(o), r = qh(o, It.range(1, t + 1), "inEdges"), n = qh(o, It.range(t - 1, -1, -1), "outEdges"), i = Sx(o);
  Fh(o, i);
  for (var a = Number.POSITIVE_INFINITY, e, s = 0, h = 0; h < 4; ++s, ++h) {
    Ix(s % 2 ? r : n, s % 4 >= 2), i = Oh.buildLayerMatrix(o);
    var d = kx(o, i);
    d < a && (h = 0, e = It.cloneDeep(i), a = d);
  }
  Fh(o, e);
}
function qh(o, t, r) {
  return It.map(t, function(n) {
    return Cx(o, n, r);
  });
}
function Ix(o, t) {
  var r = new Ax();
  It.forEach(o, function(n) {
    var i = n.graph().root, a = Ex(n, i, r, t);
    It.forEach(a.vs, function(e, s) {
      n.node(e).order = s;
    }), Mx(n, r, a.vs);
  });
}
function Fh(o, t) {
  It.forEach(t, function(r) {
    It.forEach(r, function(n, i) {
      o.node(n).order = i;
    });
  });
}
var me = Pe, Tx = ht.Graph, Px = et, _x = {
  positionX: Gx
};
function Dx(o, t) {
  var r = {};
  function n(i, a) {
    var e = 0, s = 0, h = i.length, d = me.last(a);
    return me.forEach(a, function(u, f) {
      var m = Nx(o, u), g = m ? o.node(m).order : h;
      (m || u === d) && (me.forEach(a.slice(s, f + 1), function(y) {
        me.forEach(o.predecessors(y), function(c) {
          var p = o.node(c), b = p.order;
          (b < e || g < b) && !(p.dummy && o.node(y).dummy) && xg(r, c, y);
        });
      }), s = f + 1, e = g);
    }), a;
  }
  return me.reduce(t, n), r;
}
function Lx(o, t) {
  var r = {};
  function n(a, e, s, h, d) {
    var u;
    me.forEach(me.range(e, s), function(f) {
      u = a[f], o.node(u).dummy && me.forEach(o.predecessors(u), function(m) {
        var g = o.node(m);
        g.dummy && (g.order < h || g.order > d) && xg(r, m, u);
      });
    });
  }
  function i(a, e) {
    var s = -1, h, d = 0;
    return me.forEach(e, function(u, f) {
      if (o.node(u).dummy === "border") {
        var m = o.predecessors(u);
        m.length && (h = o.node(m[0]).order, n(e, d, f, s, h), d = f, s = h);
      }
      n(e, d, e.length, h, a.length);
    }), e;
  }
  return me.reduce(t, i), r;
}
function Nx(o, t) {
  if (o.node(t).dummy)
    return me.find(o.predecessors(t), function(r) {
      return o.node(r).dummy;
    });
}
function xg(o, t, r) {
  if (t > r) {
    var n = t;
    t = r, r = n;
  }
  var i = o[t];
  i || (o[t] = i = {}), i[r] = !0;
}
function Bx(o, t, r) {
  if (t > r) {
    var n = t;
    t = r, r = n;
  }
  return me.has(o[t], r);
}
function Wx(o, t, r, n) {
  var i = {}, a = {}, e = {};
  return me.forEach(t, function(s) {
    me.forEach(s, function(h, d) {
      i[h] = h, a[h] = h, e[h] = d;
    });
  }), me.forEach(t, function(s) {
    var h = -1;
    me.forEach(s, function(d) {
      var u = n(d);
      if (u.length) {
        u = me.sortBy(u, function(c) {
          return e[c];
        });
        for (var f = (u.length - 1) / 2, m = Math.floor(f), g = Math.ceil(f); m <= g; ++m) {
          var y = u[m];
          a[d] === d && h < e[y] && !Bx(r, d, y) && (a[y] = d, a[d] = i[d] = i[y], h = e[y]);
        }
      }
    });
  }), { root: i, align: a };
}
function zx(o, t, r, n, i) {
  var a = {}, e = Ox(o, t, r, i), s = i ? "borderLeft" : "borderRight";
  function h(f, m) {
    for (var g = e.nodes(), y = g.pop(), c = {}; y; )
      c[y] ? f(y) : (c[y] = !0, g.push(y), g = g.concat(m(y))), y = g.pop();
  }
  function d(f) {
    a[f] = e.inEdges(f).reduce(function(m, g) {
      return Math.max(m, a[g.v] + e.edge(g));
    }, 0);
  }
  function u(f) {
    var m = e.outEdges(f).reduce(function(y, c) {
      return Math.min(y, a[c.w] - e.edge(c));
    }, Number.POSITIVE_INFINITY), g = o.node(f);
    m !== Number.POSITIVE_INFINITY && g.borderType !== s && (a[f] = Math.max(a[f], m));
  }
  return h(d, e.predecessors.bind(e)), h(u, e.successors.bind(e)), me.forEach(n, function(f) {
    a[f] = a[r[f]];
  }), a;
}
function Ox(o, t, r, n) {
  var i = new Tx(), a = o.graph(), e = jx(a.nodesep, a.edgesep, n);
  return me.forEach(t, function(s) {
    var h;
    me.forEach(s, function(d) {
      var u = r[d];
      if (i.setNode(u), h) {
        var f = r[h], m = i.edge(f, u);
        i.setEdge(f, u, Math.max(e(o, d, h), m || 0));
      }
      h = d;
    });
  }), i;
}
function qx(o, t) {
  return me.minBy(me.values(t), function(r) {
    var n = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    return me.forIn(r, function(a, e) {
      var s = Hx(o, e) / 2;
      n = Math.max(a + s, n), i = Math.min(a - s, i);
    }), n - i;
  });
}
function Fx(o, t) {
  var r = me.values(t), n = me.min(r), i = me.max(r);
  me.forEach(["u", "d"], function(a) {
    me.forEach(["l", "r"], function(e) {
      var s = a + e, h = o[s], d;
      if (h !== t) {
        var u = me.values(h);
        d = e === "l" ? n - me.min(u) : i - me.max(u), d && (o[s] = me.mapValues(h, function(f) {
          return f + d;
        }));
      }
    });
  });
}
function Ux(o, t) {
  return me.mapValues(o.ul, function(r, n) {
    if (t)
      return o[t.toLowerCase()][n];
    var i = me.sortBy(me.map(o, n));
    return (i[1] + i[2]) / 2;
  });
}
function Gx(o) {
  var t = Px.buildLayerMatrix(o), r = me.merge(
    Dx(o, t),
    Lx(o, t)
  ), n = {}, i;
  me.forEach(["u", "d"], function(e) {
    i = e === "u" ? t : me.values(t).reverse(), me.forEach(["l", "r"], function(s) {
      s === "r" && (i = me.map(i, function(f) {
        return me.values(f).reverse();
      }));
      var h = (e === "u" ? o.predecessors : o.successors).bind(o), d = Wx(o, i, r, h), u = zx(
        o,
        i,
        d.root,
        d.align,
        s === "r"
      );
      s === "r" && (u = me.mapValues(u, function(f) {
        return -f;
      })), n[e + s] = u;
    });
  });
  var a = qx(o, n);
  return Fx(n, a), Ux(n, o.graph().align);
}
function jx(o, t, r) {
  return function(n, i, a) {
    var e = n.node(i), s = n.node(a), h = 0, d;
    if (h += e.width / 2, me.has(e, "labelpos"))
      switch (e.labelpos.toLowerCase()) {
        case "l":
          d = -e.width / 2;
          break;
        case "r":
          d = e.width / 2;
          break;
      }
    if (d && (h += r ? d : -d), d = 0, h += (e.dummy ? t : o) / 2, h += (s.dummy ? t : o) / 2, h += s.width / 2, me.has(s, "labelpos"))
      switch (s.labelpos.toLowerCase()) {
        case "l":
          d = s.width / 2;
          break;
        case "r":
          d = -s.width / 2;
          break;
      }
    return d && (h += r ? d : -d), d = 0, h;
  };
}
function Hx(o, t) {
  return o.node(t).width;
}
var er = Pe, vg = et, Yx = _x.positionX, Vx = Kx;
function Kx(o) {
  o = vg.asNonCompoundGraph(o), Xx(o), er.forEach(Yx(o), function(t, r) {
    o.node(r).x = t;
  });
}
function Xx(o) {
  var t = vg.buildLayerMatrix(o), r = o.graph().ranksep, n = 0;
  er.forEach(t, function(i) {
    var a = er.max(er.map(i, function(e) {
      return o.node(e).height;
    }));
    er.forEach(i, function(e) {
      o.node(e).y = n + a / 2;
    }), n += a + r;
  });
}
var ve = Pe, Uh = O0, Gh = nb, Qx = Ab, Zx = et.normalizeRanks, Jx = Tb, e1 = et.removeEmptyRanks, jh = Lb, t1 = qb, Hh = Ub, r1 = $x, n1 = Vx, Tt = et, o1 = ht.Graph, i1 = a1;
function a1(o, t) {
  var r = t && t.debugTiming ? Tt.time : Tt.notime;
  r("layout", function() {
    var n = r("  buildLayoutGraph", function() {
      return y1(o);
    });
    r("  runLayout", function() {
      s1(n, r);
    }), r("  updateInputGraph", function() {
      c1(o, n);
    });
  });
}
function s1(o, t) {
  t("    makeSpaceForEdgeLabels", function() {
    b1(o);
  }), t("    removeSelfEdges", function() {
    A1(o);
  }), t("    acyclic", function() {
    Uh.run(o);
  }), t("    nestingGraph.run", function() {
    jh.run(o);
  }), t("    rank", function() {
    Qx(Tt.asNonCompoundGraph(o));
  }), t("    injectEdgeLabelProxies", function() {
    x1(o);
  }), t("    removeEmptyRanks", function() {
    e1(o);
  }), t("    nestingGraph.cleanup", function() {
    jh.cleanup(o);
  }), t("    normalizeRanks", function() {
    Zx(o);
  }), t("    assignRankMinMax", function() {
    v1(o);
  }), t("    removeEdgeLabelProxies", function() {
    w1(o);
  }), t("    normalize.run", function() {
    Gh.run(o);
  }), t("    parentDummyChains", function() {
    Jx(o);
  }), t("    addBorderSegments", function() {
    t1(o);
  }), t("    order", function() {
    r1(o);
  }), t("    insertSelfEdges", function() {
    $1(o);
  }), t("    adjustCoordinateSystem", function() {
    Hh.adjust(o);
  }), t("    position", function() {
    n1(o);
  }), t("    positionSelfEdges", function() {
    R1(o);
  }), t("    removeBorderNodes", function() {
    M1(o);
  }), t("    normalize.undo", function() {
    Gh.undo(o);
  }), t("    fixupEdgeLabelCoords", function() {
    E1(o);
  }), t("    undoCoordinateSystem", function() {
    Hh.undo(o);
  }), t("    translateGraph", function() {
    S1(o);
  }), t("    assignNodeIntersects", function() {
    k1(o);
  }), t("    reversePoints", function() {
    C1(o);
  }), t("    acyclic.undo", function() {
    Uh.undo(o);
  });
}
function c1(o, t) {
  ve.forEach(o.nodes(), function(r) {
    var n = o.node(r), i = t.node(r);
    n && (n.x = i.x, n.y = i.y, t.children(r).length && (n.width = i.width, n.height = i.height));
  }), ve.forEach(o.edges(), function(r) {
    var n = o.edge(r), i = t.edge(r);
    n.points = i.points, ve.has(i, "x") && (n.x = i.x, n.y = i.y);
  }), o.graph().width = t.graph().width, o.graph().height = t.graph().height;
}
var l1 = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], d1 = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, u1 = ["acyclicer", "ranker", "rankdir", "align"], p1 = ["width", "height"], h1 = { width: 0, height: 0 }, f1 = ["minlen", "weight", "width", "height", "labeloffset"], g1 = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
}, m1 = ["labelpos"];
function y1(o) {
  var t = new o1({ multigraph: !0, compound: !0 }), r = uc(o.graph());
  return t.setGraph(ve.merge(
    {},
    d1,
    dc(r, l1),
    ve.pick(r, u1)
  )), ve.forEach(o.nodes(), function(n) {
    var i = uc(o.node(n));
    t.setNode(n, ve.defaults(dc(i, p1), h1)), t.setParent(n, o.parent(n));
  }), ve.forEach(o.edges(), function(n) {
    var i = uc(o.edge(n));
    t.setEdge(n, ve.merge(
      {},
      g1,
      dc(i, f1),
      ve.pick(i, m1)
    ));
  }), t;
}
function b1(o) {
  var t = o.graph();
  t.ranksep /= 2, ve.forEach(o.edges(), function(r) {
    var n = o.edge(r);
    n.minlen *= 2, n.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? n.width += n.labeloffset : n.height += n.labeloffset);
  });
}
function x1(o) {
  ve.forEach(o.edges(), function(t) {
    var r = o.edge(t);
    if (r.width && r.height) {
      var n = o.node(t.v), i = o.node(t.w), a = { rank: (i.rank - n.rank) / 2 + n.rank, e: t };
      Tt.addDummyNode(o, "edge-proxy", a, "_ep");
    }
  });
}
function v1(o) {
  var t = 0;
  ve.forEach(o.nodes(), function(r) {
    var n = o.node(r);
    n.borderTop && (n.minRank = o.node(n.borderTop).rank, n.maxRank = o.node(n.borderBottom).rank, t = ve.max(t, n.maxRank));
  }), o.graph().maxRank = t;
}
function w1(o) {
  ve.forEach(o.nodes(), function(t) {
    var r = o.node(t);
    r.dummy === "edge-proxy" && (o.edge(r.e).labelRank = r.rank, o.removeNode(t));
  });
}
function S1(o) {
  var t = Number.POSITIVE_INFINITY, r = 0, n = Number.POSITIVE_INFINITY, i = 0, a = o.graph(), e = a.marginx || 0, s = a.marginy || 0;
  function h(d) {
    var u = d.x, f = d.y, m = d.width, g = d.height;
    t = Math.min(t, u - m / 2), r = Math.max(r, u + m / 2), n = Math.min(n, f - g / 2), i = Math.max(i, f + g / 2);
  }
  ve.forEach(o.nodes(), function(d) {
    h(o.node(d));
  }), ve.forEach(o.edges(), function(d) {
    var u = o.edge(d);
    ve.has(u, "x") && h(u);
  }), t -= e, n -= s, ve.forEach(o.nodes(), function(d) {
    var u = o.node(d);
    u.x -= t, u.y -= n;
  }), ve.forEach(o.edges(), function(d) {
    var u = o.edge(d);
    ve.forEach(u.points, function(f) {
      f.x -= t, f.y -= n;
    }), ve.has(u, "x") && (u.x -= t), ve.has(u, "y") && (u.y -= n);
  }), a.width = r - t + e, a.height = i - n + s;
}
function k1(o) {
  ve.forEach(o.edges(), function(t) {
    var r = o.edge(t), n = o.node(t.v), i = o.node(t.w), a, e;
    r.points ? (a = r.points[0], e = r.points[r.points.length - 1]) : (r.points = [], a = i, e = n), r.points.unshift(Tt.intersectRect(n, a)), r.points.push(Tt.intersectRect(i, e));
  });
}
function E1(o) {
  ve.forEach(o.edges(), function(t) {
    var r = o.edge(t);
    if (ve.has(r, "x"))
      switch ((r.labelpos === "l" || r.labelpos === "r") && (r.width -= r.labeloffset), r.labelpos) {
        case "l":
          r.x -= r.width / 2 + r.labeloffset;
          break;
        case "r":
          r.x += r.width / 2 + r.labeloffset;
          break;
      }
  });
}
function C1(o) {
  ve.forEach(o.edges(), function(t) {
    var r = o.edge(t);
    r.reversed && r.points.reverse();
  });
}
function M1(o) {
  ve.forEach(o.nodes(), function(t) {
    if (o.children(t).length) {
      var r = o.node(t), n = o.node(r.borderTop), i = o.node(r.borderBottom), a = o.node(ve.last(r.borderLeft)), e = o.node(ve.last(r.borderRight));
      r.width = Math.abs(e.x - a.x), r.height = Math.abs(i.y - n.y), r.x = a.x + r.width / 2, r.y = n.y + r.height / 2;
    }
  }), ve.forEach(o.nodes(), function(t) {
    o.node(t).dummy === "border" && o.removeNode(t);
  });
}
function A1(o) {
  ve.forEach(o.edges(), function(t) {
    if (t.v === t.w) {
      var r = o.node(t.v);
      r.selfEdges || (r.selfEdges = []), r.selfEdges.push({ e: t, label: o.edge(t) }), o.removeEdge(t);
    }
  });
}
function $1(o) {
  var t = Tt.buildLayerMatrix(o);
  ve.forEach(t, function(r) {
    var n = 0;
    ve.forEach(r, function(i, a) {
      var e = o.node(i);
      e.order = a + n, ve.forEach(e.selfEdges, function(s) {
        Tt.addDummyNode(o, "selfedge", {
          width: s.label.width,
          height: s.label.height,
          rank: e.rank,
          order: a + ++n,
          e: s.e,
          label: s.label
        }, "_se");
      }), delete e.selfEdges;
    });
  });
}
function R1(o) {
  ve.forEach(o.nodes(), function(t) {
    var r = o.node(t);
    if (r.dummy === "selfedge") {
      var n = o.node(r.e.v), i = n.x + n.width / 2, a = n.y, e = r.x - i, s = n.height / 2;
      o.setEdge(r.e, r.label), o.removeNode(t), r.label.points = [
        { x: i + 2 * e / 3, y: a - s },
        { x: i + 5 * e / 6, y: a - s },
        { x: i + e, y: a },
        { x: i + 5 * e / 6, y: a + s },
        { x: i + 2 * e / 3, y: a + s }
      ], r.label.x = r.x, r.label.y = r.y;
    }
  });
}
function dc(o, t) {
  return ve.mapValues(ve.pick(o, t), Number);
}
function uc(o) {
  var t = {};
  return ve.forEach(o, function(r, n) {
    t[n.toLowerCase()] = r;
  }), t;
}
var Ir = Pe, I1 = et, T1 = ht.Graph, P1 = {
  debugOrdering: _1
};
function _1(o) {
  var t = I1.buildLayerMatrix(o), r = new T1({ compound: !0, multigraph: !0 }).setGraph({});
  return Ir.forEach(o.nodes(), function(n) {
    r.setNode(n, { label: n }), r.setParent(n, "layer" + o.node(n).rank);
  }), Ir.forEach(o.edges(), function(n) {
    r.setEdge(n.v, n.w, {}, n.name);
  }), Ir.forEach(t, function(n, i) {
    var a = "layer" + i;
    r.setNode(a, { rank: "same" }), Ir.reduce(n, function(e, s) {
      return r.setEdge(e, s, { style: "invis" }), s;
    });
  }), r;
}
var D1 = "0.8.5", L1 = {
  graphlib: ht,
  layout: i1,
  debug: P1,
  util: {
    time: et.time,
    notime: et.notime
  },
  version: D1
};
const Yh = /* @__PURE__ */ zg(L1), wg = `You are DDFlow, an AI assistant that generates diagram DSL code. You convert natural language descriptions into valid DDFlow DSL syntax.

IMPORTANT RULES:
1. Always respond with ONLY the DSL code - no explanations, no markdown code blocks
2. Start your response with a comment indicating the diagram type: <!-- type: typename -->
3. Use the exact syntax specified below for each diagram type
4. If unsure which diagram type fits best, ask for clarification

AVAILABLE DIAGRAM TYPES AND SYNTAX:

================================================================================
1. FLOWCHART (type: flowchart)
================================================================================
Syntax:
- Node types: (start), (process), (decision), (end), (io)
- Connections: NodeA -> NodeB or NodeA -> NodeB: label

Example:
<!-- type: flowchart -->
(start) Start
Start -> (process) Process Data
Process Data -> (decision) Valid?
Valid? -> (end) Done
Valid? -> (io) Show Error

================================================================================
2. SEQUENCE DIAGRAM (type: sequence)
================================================================================
Syntax:
- Define participants: participant Name1, Name2, Name3
- Solid arrow (request): A -> B: message
- Dashed arrow (response): A --> B: message

Example:
<!-- type: sequence -->
participant Client, API, Database

Client -> API: Login Request
API -> Database: Validate User
Database --> API: User Data
API --> Client: Auth Token

================================================================================
3. MIND MAP / WBS (type: mindmap or wbs)
================================================================================
Syntax:
- Hierarchical indentation (2 spaces per level)
- Use - or * or + prefix, or just text

Example:
<!-- type: mindmap -->
Project Planning
  Research
    Market Analysis
    Competitor Review
  Design
    Wireframes
    Prototypes
  Development
    Frontend
    Backend

================================================================================
4. ERD - Entity Relationship Diagram (type: erd)
================================================================================
Syntax: SQL CREATE TABLE statements
- PRIMARY KEY marks primary key
- REFERENCES table(column) marks foreign key

Example:
<!-- type: erd -->
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255),
  name VARCHAR(100),
  created_at TIMESTAMP
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total DECIMAL(10,2),
  status VARCHAR(50)
);

================================================================================
5. USER JOURNEY (type: journey)
================================================================================
Syntax:
- Define nodes: [type] NodeName
- Node types: actor, user, page, screen, action, form, email, success, error, decision, notification, milestone
- Connections: NodeA -> NodeB or NodeA -label-> NodeB

Example:
<!-- type: journey -->
[actor] Customer
[page] Homepage
[action] Browse Products
[action] Add to Cart
[page] Checkout
[success] Order Confirmed

Customer -> Homepage
Homepage -> Browse Products
Browse Products -> Add to Cart
Add to Cart -> Checkout
Checkout -> Order Confirmed

================================================================================
6. ARCHITECTURE DIAGRAM (type: architecture)
================================================================================
Syntax:
- Title/subtitle (optional): title: Name, subtitle: Description
- Define layers: [layerType] Item1, Item2, Item3
- With descriptions: [layerType] Item: Description
- Layer types: clients, frontend, gateway, api, services, backend, data, database, cache, queue, storage, external

C4-Style Node Types (for detailed diagrams):
- [person] User: Description
- [system] System: Description
- [webapp] Web App: Technology
- [mobileapp] Mobile: Technology
- [service] Service: Description
- [component] Component: Description
- [server] Server: Description
- [monitoring] Tool: Description
- [logging] Logger: Description

Grouping with Boundaries (for organized layouts):
boundary "Group Name" {
  [type] Component1: Description
  [type] Component2: Description
}

Connections:
- Source -> Target (solid)
- Source -> Target: label
- Source --> Target (dotted)
- Source ==> Target (thick)

Example (Simple):
<!-- type: architecture -->
[clients] Web App, Mobile App
[gateway] API Gateway
[services] Auth Service, User Service
[data] PostgreSQL, Redis

Web App -> API Gateway
API Gateway -> Auth Service

Example (With Boundaries - C4 Style):
<!-- type: architecture -->
title: E-Commerce Platform
subtitle: Container Diagram

[person] Customer: Online shopper
[external] Payment Gateway: Stripe

boundary "Web Layer" {
  [webapp] Web App: React SPA
  [mobileapp] Mobile: React Native
}

boundary "Services" {
  [service] User Service: Auth
  [service] Order Service: Orders
}

boundary "Data Layer" {
  [database] PostgreSQL: Primary DB
  [cache] Redis: Sessions
}

Customer -> Web App: Uses
Web App -> User Service: API
Order Service -> PostgreSQL: Writes

================================================================================
7. STATE MACHINE (type: state)
================================================================================
Syntax:
- Mark initial/final: (initial) StateName, (final) StateName
- Transitions: StateA -> StateB: EVENT_NAME

Example:
<!-- type: state -->
(initial) Idle
(final) Completed

Idle -> Loading: FETCH_DATA
Loading -> Success: DATA_RECEIVED
Loading -> Error: FETCH_FAILED
Success -> Completed: CONFIRM
Error -> Idle: RETRY

================================================================================
8. TIMELINE (type: timeline)
================================================================================
Syntax:
- Format: [Date] Event Title | Description
- Use * prefix for milestones: [Date] *Milestone | Description

Example:
<!-- type: timeline -->
[Q1 2024] *Project Kickoff | Team assembled
[Q2 2024] Design Phase | UI/UX complete
[Q3 2024] *MVP Launch | Beta release
[Q4 2024] Public Release | Version 1.0

================================================================================
9. ORGANIZATION CHART (type: orgchart)
================================================================================
Syntax:
- Hierarchical indentation
- Optional title in brackets: Name [Title]

Example:
<!-- type: orgchart -->
CEO [Chief Executive Officer]
  CTO [Chief Technology Officer]
    Engineering Lead
      Senior Developer
      Junior Developer
    QA Lead
  CFO [Chief Financial Officer]
    Finance Manager
    Accountant

================================================================================
10. NETWORK DIAGRAM (type: network)
================================================================================
Syntax:
- Define devices: [type] Name (IP)
- Device types: cloud, firewall, router, server, computer, switch, hub
- Connections: Device1 -- Device2 or Device1 -- Device2: Protocol

Example:
<!-- type: network -->
[cloud] Internet
[firewall] Firewall (10.0.0.1)
[router] Main Router (10.0.0.2)
[switch] Core Switch (10.0.0.3)
[server] Web Server (10.0.0.10)
[server] Database Server (10.0.0.11)

Internet -- Firewall
Firewall -- Main Router
Main Router -- Core Switch
Core Switch -- Web Server: HTTP
Core Switch -- Database Server: TCP

================================================================================
11. GANTT CHART (type: gantt)
================================================================================
Syntax: TaskName, startDay, duration, progress(optional)

Example:
<!-- type: gantt -->
Planning, 0, 2, 100
Design, 2, 3, 100
Development, 5, 5, 60
Testing, 10, 3, 0
Deployment, 13, 1, 0

================================================================================
12. CLASS DIAGRAM (type: class)
================================================================================
Syntax:
- Class declaration: class ClassName
- Properties: [visibility] name: type
- Methods: [visibility] methodName(params): returnType
- Visibility: + (public), - (private), # (protected)

Example:
<!-- type: class -->
class User
  + id: string
  + email: string
  - password: string
  + login(email, password): boolean
  + logout(): void
  # hashPassword(plain): string

class Order
  + id: string
  + userId: string
  + items: Item[]
  + total: number
  + calculateTotal(): number

================================================================================
13. USE CASE DIAGRAM (type: usecase)
================================================================================
Syntax:
- Define actors: actor ActorName
- Define use cases: (Use Case Name)
- Relationships: Actor -> UseCase

Example:
<!-- type: usecase -->
actor Customer
actor Admin

(Browse Products)
(Place Order)
(Manage Inventory)
(View Reports)

Customer -> Browse Products
Customer -> Place Order
Admin -> Manage Inventory
Admin -> View Reports

================================================================================
14. PIE CHART (type: pie)
================================================================================
Syntax: "Label": value or Label: value

Example:
<!-- type: pie -->
"JavaScript": 35
"Python": 25
"TypeScript": 20
"Go": 12
"Rust": 8

================================================================================
15. QUADRANT DIAGRAM (type: quadrant)
================================================================================
Syntax:
- Config: title:, x-axis:, y-axis:, quadrant-1: through quadrant-4:
- Points: Label: [x, y] where x,y are 0-100

Example:
<!-- type: quadrant -->
title: Priority Matrix
x-axis: Effort ->
y-axis: Impact ->
quadrant-1: Quick Wins
quadrant-2: Major Projects
quadrant-3: Fill-ins
quadrant-4: Thankless Tasks

Feature A: [20, 80]
Feature B: [70, 90]
Feature C: [30, 30]
Feature D: [80, 20]

================================================================================
16. GIT GRAPH (type: git)
================================================================================
Syntax:
- commit "Message"
- branch BranchName
- checkout BranchName
- merge BranchName

Example:
<!-- type: git -->
commit "Initial commit"
commit "Add basic structure"
branch feature/auth
commit "Add login page"
commit "Add authentication"
checkout main
commit "Update readme"
merge feature/auth
commit "Release v1.0"

================================================================================
17. DEPLOYMENT DIAGRAM (type: deployment)
================================================================================
Syntax:
- Hierarchical with type annotations: [type] Name
- Types: cloud, cluster, container, database, device, server

Example:
<!-- type: deployment -->
[cloud] AWS
  [cluster] EKS Cluster
    [container] API Service
    [container] Worker Service
  [database] RDS PostgreSQL
  [storage] S3 Bucket
[device] User Browser
[device] Mobile App

================================================================================
18. WIREFRAME (type: wireframe)
================================================================================
Syntax (rich UI elements):
- {Title} - window frame
- [[ Item1 | Item2 ]] - navbar
- (( Tab1 | Tab2 )) - tabs
- >> Breadcrumb - breadcrumbs
- # Heading - heading
- [Button] - button
- [search: placeholder] - search input
- [v Dropdown] - dropdown
- <Card Title> ... </Card> - card
- (@Username) - avatar
- |Col1|Col2|Col3| - table row
- [progress: 75%] - progress bar
- --- - divider

Example:
<!-- type: wireframe -->
{Dashboard}
[[ Home | Analytics | Settings | Profile ]]

>> Dashboard > Overview

# Welcome Back

<Statistics>
(@Admin User)
[search: Search metrics...]

|Metric|Value|Change|
|Users|1,234|+12%|
|Revenue|$5,678|+8%|

[progress: 75%]

(( Overview | Details | History ))

[Export Report] [Refresh Data]
</Statistics>

================================================================================
19. ACTIVITY DIAGRAM (type: activity)
================================================================================
Syntax:
- [start] or start - start node
- [end] or end - end node
- <Decision?> - decision diamond
- :Action; or Action - action box
- Explicit connections: NodeLabel -> NodeLabel: EdgeLabel
- For branching, define explicit edges after node definitions

Example (with branching):
<!-- type: activity -->
[start]
:Open App;
:Login;
<Authenticated?>
:Show Dashboard;
:Show Error;
[end]

start -> Open App
Open App -> Login
Login -> Authenticated?
Authenticated? -> Show Dashboard: Yes
Authenticated? -> Show Error: No
Show Dashboard -> end
Show Error -> Login

================================================================================
20. COMPONENT DIAGRAM (type: component)
================================================================================
Syntax:
- [type] ComponentName
- Connections: Comp1 --> Comp2 or Comp1 -- Comp2

Example:
<!-- type: component -->
[service] API Gateway
[service] Auth Service
[service] User Service
[database] PostgreSQL
[cache] Redis

API Gateway --> Auth Service
API Gateway --> User Service
Auth Service -- Redis
User Service --> PostgreSQL

================================================================================
21. C4 DIAGRAM (type: c4)
================================================================================
Syntax:
- [type] Name: Description
- Types: person, system, container, component, external, database, webapp, mobileapp, service
- Relationships: Element1 -> Element2: Description

Grouping with Boundaries (for system containers):
boundary "System Name" {
  [container] Component1: Description
  [container] Component2: Description
}

Example (Simple):
<!-- type: c4 -->
[person] User: A customer
[system] Web App: Main application
[container] API: REST API service
[database] Database: PostgreSQL
[external] Payment Gateway: Stripe

User -> Web App: Uses
Web App -> API: Calls
API -> Database: Reads/Writes

Example (With Boundaries):
<!-- type: c4 -->
[person] Customer: End user
[external] Email Service: SendGrid

boundary "Banking System" {
  [webapp] Web App: React SPA
  [container] API Gateway: Kong
  [service] Auth Service: JWT auth
  [service] Account Service: Account management
  [database] Database: PostgreSQL
}

Customer -> Web App: Uses
Web App -> API Gateway: HTTPS
API Gateway -> Auth Service: Validates
Auth Service -> Database: Queries

================================================================================
22. REQUIREMENT DIAGRAM (type: requirement)
================================================================================
Syntax:
requirement Name {
  text: Description
  risk: Low/Medium/High
  priority: Low/Medium/High/Critical
}
- Trace relationships: Req1 -> Req2: relationship

Example:
<!-- type: requirement -->
requirement User Authentication {
  text: System must authenticate users via email/password
  risk: High
  priority: Critical
}

requirement Data Encryption {
  text: All sensitive data must be encrypted at rest
  risk: Medium
  priority: High
}

requirement Performance {
  text: Response time under 200ms
  risk: Low
  priority: Medium
}

User Authentication -> Data Encryption: derives
Data Encryption -> Performance: traces

================================================================================

Remember: Output ONLY the DSL code starting with <!-- type: typename -->. No explanations or markdown formatting.`;
async function N1(o, t = []) {
  var s;
  const r = import.meta.env.VITE_OPENAI_API_KEY, n = import.meta.env.VITE_AI_MODEL || "gpt-4o";
  if (!r)
    throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
  const i = [
    { role: "system", content: wg },
    ...t,
    { role: "user", content: o }
  ], a = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${r}`
    },
    body: JSON.stringify({
      model: n,
      messages: i,
      temperature: 0.7,
      max_tokens: 2048
    })
  });
  if (!a.ok) {
    const h = await a.json();
    throw new Error(((s = h.error) == null ? void 0 : s.message) || "OpenAI API request failed");
  }
  return (await a.json()).choices[0].message.content;
}
async function B1(o, t = []) {
  var s;
  const r = import.meta.env.VITE_ANTHROPIC_API_KEY, n = import.meta.env.VITE_AI_MODEL || "claude-sonnet-4-20250514";
  if (!r)
    throw new Error("Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env");
  const i = [
    ...t.map((h) => ({
      role: h.role === "assistant" ? "assistant" : "user",
      content: h.content
    })),
    { role: "user", content: o }
  ], a = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": r,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: n,
      max_tokens: 2048,
      system: wg,
      messages: i
    })
  });
  if (!a.ok) {
    const h = await a.json();
    throw new Error(((s = h.error) == null ? void 0 : s.message) || "Anthropic API request failed");
  }
  return (await a.json()).content[0].text;
}
function Nr(o) {
  const t = o.match(/<!--\s*type:\s*(\w+)\s*-->/);
  return t ? t[1] : "flowchart";
}
function W1(o) {
  const t = o.match(/<!--\s*name:\s*(.+?)\s*-->/);
  return t ? t[1].trim() : null;
}
function z1(o) {
  const t = o.match(/<!--\s*alternatives:\s*(.+?)\s*-->/);
  if (!t) return [];
  const r = t[1].trim().toLowerCase();
  return r === "none" ? [] : r.split(/[,\s]+/).map((n) => n.trim()).filter((n) => n && n !== "none");
}
function Br(o) {
  return o.replace(/<!--\s*type:\s*\w+\s*-->\n?/g, "").replace(/<!--\s*name:\s*.+?\s*-->\n?/g, "").replace(/<!--\s*alternatives:\s*.+?\s*-->\n?/g, "").trim();
}
async function O1(o, t = []) {
  const r = import.meta.env.VITE_AI_PROVIDER || "openai";
  let n;
  r === "anthropic" ? n = await B1(o, t) : n = await N1(o, t);
  const i = Nr(n), a = Br(n);
  return {
    type: i,
    dsl: a,
    raw: n
  };
}
function qt() {
  return (import.meta.env.VITE_AI_PROVIDER || "openai") === "anthropic" ? !!import.meta.env.VITE_ANTHROPIC_API_KEY : !!import.meta.env.VITE_OPENAI_API_KEY;
}
function q1() {
  return (import.meta.env.VITE_AI_PROVIDER || "openai") === "anthropic" ? "Claude" : "GPT-4";
}
const F1 = `You are DDFlow's diagram explainer. You analyze DDFlow DSL diagrams and explain them clearly.

Given a diagram's DSL code and type, explain:
1. What the diagram represents
2. The key components and their relationships
3. The flow or structure
4. Any patterns or notable aspects

Respond in clear, concise language with proper formatting. Use bullet points where appropriate.
Keep your explanation focused and helpful for someone trying to understand the diagram.`, U1 = `You are DDFlow's diagram optimizer. You analyze DDFlow DSL diagrams and suggest improvements.

Given a diagram's DSL code and type, suggest improvements for:
1. Clarity and readability
2. Missing elements or connections
3. Better organization or naming
4. Best practices for this diagram type

IMPORTANT: Your response must follow this exact format:
1. First, output the improved DSL code starting with <!-- type: typename -->
2. Then add a line with "---EXPLANATION---"
3. Then explain your changes

Example format:
<!-- type: flowchart -->
(start) Begin
Begin -> (process) Improved Step
...

---EXPLANATION---
Here are the improvements I made:
- Renamed nodes for clarity
- Added missing connection
...`, G1 = `You are DDFlow's diagram validator. You analyze DDFlow DSL diagrams for issues.

Given a diagram's DSL code and type, check for:
1. Syntax errors
2. Missing connections (orphaned nodes)
3. Incomplete definitions
4. Best practice violations
5. Logical issues in the flow

Respond with a JSON object in this exact format:
{
  "isValid": true/false,
  "errors": ["list of critical errors"],
  "warnings": ["list of potential issues"],
  "suggestions": ["list of improvement suggestions"]
}

IMPORTANT: Return ONLY the JSON object, no other text.`;
async function zc(o, t) {
  return (import.meta.env.VITE_AI_PROVIDER || "openai") === "anthropic" ? H1(o, t) : j1(o, t);
}
async function j1(o, t) {
  var e;
  const r = import.meta.env.VITE_OPENAI_API_KEY, n = import.meta.env.VITE_AI_MODEL || "gpt-4o";
  if (!r)
    throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
  const i = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${r}`
    },
    body: JSON.stringify({
      model: n,
      messages: [
        { role: "system", content: o },
        { role: "user", content: t }
      ],
      temperature: 0.7,
      max_tokens: 2048
    })
  });
  if (!i.ok) {
    const s = await i.json();
    throw new Error(((e = s.error) == null ? void 0 : e.message) || "OpenAI API request failed");
  }
  return (await i.json()).choices[0].message.content;
}
async function H1(o, t) {
  var e;
  const r = import.meta.env.VITE_ANTHROPIC_API_KEY, n = import.meta.env.VITE_AI_MODEL || "claude-sonnet-4-20250514";
  if (!r)
    throw new Error("Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env");
  const i = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": r,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: n,
      max_tokens: 2048,
      system: o,
      messages: [{ role: "user", content: t }]
    })
  });
  if (!i.ok) {
    const s = await i.json();
    throw new Error(((e = s.error) == null ? void 0 : e.message) || "Anthropic API request failed");
  }
  return (await i.json()).content[0].text;
}
async function Y1(o, t) {
  const r = `Please explain this ${t} diagram:

\`\`\`
${o}
\`\`\`

Provide a clear explanation of what this diagram represents, its key components, and how they relate to each other.`;
  return await zc(F1, r);
}
async function V1(o, t) {
  const r = `Please analyze this ${t} diagram and suggest improvements:

\`\`\`
${o}
\`\`\`

Provide an improved version of the DSL code followed by an explanation of your changes.`, n = await zc(U1, r), i = n.split("---EXPLANATION---");
  if (i.length === 2) {
    const e = i[0].trim(), s = i[1].trim(), h = Nr(e) || t;
    return {
      dsl: Br(e),
      type: h,
      explanation: s,
      raw: n
    };
  }
  return n.match(/<!--\s*type:\s*(\w+)\s*-->/) ? {
    dsl: Br(n),
    type: Nr(n),
    explanation: "Improvements applied.",
    raw: n
  } : {
    dsl: o,
    type: t,
    explanation: n,
    raw: n
  };
}
async function K1(o, t) {
  const r = `Please validate this ${t} diagram for errors and issues:

\`\`\`
${o}
\`\`\`

Return a JSON object with isValid, errors, warnings, and suggestions arrays.`, n = await zc(G1, r);
  try {
    const i = n.match(/\{[\s\S]*\}/);
    return i ? JSON.parse(i[0]) : {
      isValid: !0,
      errors: [],
      warnings: ["Could not parse validation response"],
      suggestions: [n]
    };
  } catch {
    return {
      isValid: !0,
      errors: [],
      warnings: ["Validation response was not in expected format"],
      suggestions: [n]
    };
  }
}
const Sg = `You are DDFlow's image analyzer. Analyze this image and extract the diagram structure.

Your task:
1. Identify the BEST diagram type for this image
2. Extract a descriptive NAME/TITLE for the diagram
3. Suggest ALTERNATIVE diagram types that could also work (if any)
4. Extract all nodes/components with their labels
5. Generate valid DDFlow DSL code

DIAGRAM TYPE SELECTION GUIDE:
- Circular/radial diagram with center → use MINDMAP (center = root, surrounding = children)
- System with layers (clients, services, databases) → use ARCHITECTURE
- Step-by-step process with arrows → use FLOWCHART
- Message passing between entities → use SEQUENCE
- Tree/hierarchy structure → use MINDMAP
- Database tables → use ERD
- Company structure → use ORGCHART

RESPONSE FORMAT (must include all 3 metadata lines):
<!-- type: typename -->
<!-- name: Descriptive Diagram Name -->
<!-- alternatives: type1, type2 OR none -->

Then the DSL code.

IMPORTANT RULES:
1. MUST start with the 3 metadata comment lines
2. Name should be descriptive (e.g., "User Authentication Flow", "E-commerce Architecture")
3. Alternatives should list other valid types, or "none" if the chosen type is clearly best
4. Use EXACT syntax for chosen diagram type
5. NO explanations after metadata, ONLY DSL code

=== ARCHITECTURE (system layers) ===
Layer types: [clients], [gateway], [services], [data], [cache], [queue], [storage]

[clients] Web App, Mobile App
[gateway] API Gateway
[services] Auth Service, User Service
[data] PostgreSQL, Redis

Web App -> API Gateway
API Gateway -> Auth Service

=== MINDMAP (hierarchical - INDENTATION ONLY, NO ARROWS) ===
Use for: tree structures, radial diagrams, org charts, concept maps

Central Topic
  Branch 1
    Sub-item 1.1
    Sub-item 1.2
  Branch 2
    Sub-item 2.1
  Branch 3

For circular/radial diagrams: center = root, surrounding items = branches

=== FLOWCHART (process steps) ===
Node types: (start), (end), (process), (decision), (io)
IMPORTANT: Type must be one of the above keywords, NOT the label!

(start) Begin
Begin -> (process) Step 1
Step 1 -> (decision) Check?
Check? -> (end) Done

WRONG: (My Label) My Label  ← Don't repeat label as type!
RIGHT: (process) My Label   ← Use keyword type, then label

=== SEQUENCE (messages between participants) ===
participant Client, Server, Database
Client -> Server: Request
Server -> Database: Query
Database --> Server: Data
Server --> Client: Response

=== ERD (database tables) ===
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));

Output ONLY the DSL code starting with the type comment.`;
async function X1(o, t) {
  var e;
  const r = import.meta.env.VITE_OPENAI_API_KEY, n = import.meta.env.VITE_AI_MODEL || "gpt-4o";
  if (!r)
    throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
  const i = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${r}`
    },
    body: JSON.stringify({
      model: n,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: Sg },
            {
              type: "image_url",
              image_url: {
                url: `data:${t};base64,${o}`,
                detail: "high"
              }
            }
          ]
        }
      ],
      max_tokens: 4096
    })
  });
  if (!i.ok) {
    const s = await i.json();
    throw new Error(((e = s.error) == null ? void 0 : e.message) || "OpenAI Vision API request failed");
  }
  return (await i.json()).choices[0].message.content;
}
async function Q1(o, t) {
  var s;
  const r = import.meta.env.VITE_ANTHROPIC_API_KEY, n = import.meta.env.VITE_AI_MODEL || "claude-sonnet-4-20250514";
  if (!r)
    throw new Error("Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env");
  const a = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": r,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: n,
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: t === "image/jpg" ? "image/jpeg" : t,
                data: o
              }
            },
            {
              type: "text",
              text: Sg
            }
          ]
        }
      ]
    })
  });
  if (!a.ok) {
    const h = await a.json();
    throw new Error(((s = h.error) == null ? void 0 : s.message) || "Anthropic Vision API request failed");
  }
  return (await a.json()).content[0].text;
}
function Z1(o) {
  if (!o.includes("->"))
    return o;
  let t = o.replace(/->\s*\n\s*/g, "-> ");
  t = t.replace(/,\s*\n\s*(?![A-Z])/g, ", ");
  const r = t.split(`
`).filter((u) => u.trim()), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  r.forEach((u) => {
    const f = u.match(/^(.+?)\s*->\s*(.+)$/);
    if (f) {
      const m = f[1].trim(), y = f[2].trim().split(",").map((c) => c.trim()).filter((c) => c);
      i.add(m), y.forEach((c) => {
        i.add(c), a.add(c);
      }), n.has(m) || n.set(m, []), n.get(m).push(...y);
    } else u.trim() && !u.includes("->") && i.add(u.trim());
  });
  const e = [...i].filter((u) => !a.has(u));
  if (e.length === 0)
    return o;
  const s = [], h = /* @__PURE__ */ new Set();
  function d(u, f) {
    if (h.has(u)) return;
    h.add(u), s.push("  ".repeat(f) + u), (n.get(u) || []).forEach((g) => d(g, f + 1));
  }
  return e.forEach((u) => d(u, 0)), s.join(`
`);
}
function J1(o) {
  if (!/^\s*\(([^)]+)\)\s+\1\s*$/m.test(o))
    return { dsl: o, convertToMindmap: !1 };
  const r = o.split(`
`).filter((u) => u.trim()), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  r.forEach((u) => {
    const f = u.match(/^\s*\(([^)]+)\)\s+\1\s*->\s*\(([^)]+)\)\s+\2\s*$/);
    if (f) {
      const m = f[1].trim(), g = f[2].trim();
      i.add(m), i.add(g), a.add(g), n.has(m) || n.set(m, []), n.get(m).push(g);
    } else {
      const m = u.match(/^\s*\(([^)]+)\)\s+\1\s*$/);
      m && i.add(m[1].trim());
    }
  });
  const e = [...i].filter((u) => !a.has(u));
  if (e.length === 0) return { dsl: o, convertToMindmap: !1 };
  const s = [], h = /* @__PURE__ */ new Set();
  function d(u, f) {
    if (h.has(u)) return;
    h.add(u), s.push("  ".repeat(f) + u), (n.get(u) || []).forEach((g) => d(g, f + 1));
  }
  return e.forEach((u) => d(u, 0)), { dsl: s.join(`
`), convertToMindmap: !0 };
}
async function ev(o, t = "image/png") {
  const r = import.meta.env.VITE_AI_PROVIDER || "openai";
  let n;
  r === "anthropic" ? n = await Q1(o, t) : n = await X1(o, t);
  let i = Nr(n), a = Br(n);
  const e = W1(n);
  let s = z1(n);
  if ((i === "mindmap" || i === "orgchart") && a.includes("->") && (a = Z1(a)), i === "flowchart") {
    const h = J1(a);
    h.convertToMindmap && (s.includes("flowchart") || (s = ["flowchart", ...s]), i = "mindmap", a = h.dsl);
  }
  return s = s.filter((h) => h !== i), {
    type: i,
    name: e || "Imported Diagram",
    alternatives: s,
    dsl: a,
    raw: n
  };
}
const Vt = {
  purple: "#7C3AED",
  green: "#10B981"
};
function tv({ onApplyDiagram: o, isOpen: t, onClose: r }) {
  const [n, i] = V([]), [a, e] = V(""), [s, h] = V(!1), [d, u] = V(null), f = _e(null), m = _e(null), g = () => {
    var w;
    (w = f.current) == null || w.scrollIntoView({ behavior: "smooth" });
  };
  he(() => {
    g();
  }, [n]), he(() => {
    t && m.current && m.current.focus();
  }, [t]);
  const y = async (w) => {
    if (w.preventDefault(), !a.trim() || s) return;
    const E = a.trim();
    e(""), u(null), i((k) => [...k, { role: "user", content: E }]), h(!0);
    try {
      const k = n.map((A) => ({
        role: A.role,
        content: A.content
      })), M = await O1(E, k);
      i((A) => [...A, {
        role: "assistant",
        content: M.raw,
        type: M.type,
        dsl: M.dsl
      }]);
    } catch (k) {
      u(k.message), i((M) => [...M, {
        role: "error",
        content: k.message
      }]);
    } finally {
      h(!1);
    }
  }, c = (w) => {
    w.dsl && w.type && o(w.type, w.dsl);
  }, p = async (w) => {
    try {
      await navigator.clipboard.writeText(w);
    } catch (E) {
      console.error("Failed to copy:", E);
    }
  }, b = () => {
    i([]), u(null);
  };
  if (!t) return null;
  const x = qt(), C = q1();
  return /* @__PURE__ */ S("div", { style: {
    position: "fixed",
    right: 0,
    top: 0,
    bottom: 0,
    width: "380px",
    background: "rgba(10, 10, 15, 0.98)",
    borderLeft: "1px solid rgba(124, 58, 237, 0.3)",
    display: "flex",
    flexDirection: "column",
    zIndex: 1e3,
    backdropFilter: "blur(20px)"
  }, children: [
    /* @__PURE__ */ S("div", { style: {
      padding: "16px 20px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(124, 58, 237, 0.1)"
    }, children: [
      /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ l("span", { style: { fontSize: "20px" }, children: "🤖" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: { color: "#fff", fontWeight: 600, fontSize: "14px" }, children: "AI Diagram Assistant" }),
          /* @__PURE__ */ S("div", { style: { color: "#888", fontSize: "11px" }, children: [
            "Powered by ",
            C
          ] })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: b,
            style: {
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "6px",
              padding: "6px 10px",
              color: "#888",
              cursor: "pointer",
              fontSize: "12px"
            },
            title: "Clear chat",
            children: "Clear"
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: r,
            style: {
              background: "transparent",
              border: "none",
              color: "#888",
              cursor: "pointer",
              fontSize: "18px",
              padding: "4px 8px"
            },
            children: "✕"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }, children: [
      !x && /* @__PURE__ */ S("div", { style: {
        background: "rgba(239, 68, 68, 0.1)",
        border: "1px solid rgba(239, 68, 68, 0.3)",
        borderRadius: "8px",
        padding: "12px",
        color: "#f87171",
        fontSize: "13px"
      }, children: [
        /* @__PURE__ */ l("strong", { children: "API Key Required" }),
        /* @__PURE__ */ S("p", { style: { margin: "8px 0 0 0", color: "#fca5a5" }, children: [
          "Please configure your API key in ",
          /* @__PURE__ */ l("code", { style: { background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: "4px" }, children: ".env" }),
          " file. Copy ",
          /* @__PURE__ */ l("code", { style: { background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: "4px" }, children: ".env.example" }),
          " to ",
          /* @__PURE__ */ l("code", { style: { background: "rgba(0,0,0,0.3)", padding: "2px 6px", borderRadius: "4px" }, children: ".env" }),
          " and add your key."
        ] })
      ] }),
      n.length === 0 && x && /* @__PURE__ */ S("div", { style: {
        textAlign: "center",
        color: "#666",
        padding: "40px 20px"
      }, children: [
        /* @__PURE__ */ l("div", { style: { fontSize: "40px", marginBottom: "16px" }, children: "💬" }),
        /* @__PURE__ */ l("div", { style: { fontSize: "14px", marginBottom: "8px" }, children: "Describe the diagram you want to create" }),
        /* @__PURE__ */ l("div", { style: { fontSize: "12px", color: "#555" }, children: 'Try: "Create a flowchart for user login with email verification"' })
      ] }),
      n.map((w, E) => /* @__PURE__ */ l("div", { style: {
        alignSelf: w.role === "user" ? "flex-end" : "flex-start",
        maxWidth: "90%"
      }, children: w.role === "user" ? /* @__PURE__ */ l("div", { style: {
        background: "linear-gradient(135deg, #7C3AED, #6366F1)",
        borderRadius: "12px 12px 4px 12px",
        padding: "10px 14px",
        color: "#fff",
        fontSize: "13px"
      }, children: w.content }) : w.role === "error" ? /* @__PURE__ */ S("div", { style: {
        background: "rgba(239, 68, 68, 0.1)",
        border: "1px solid rgba(239, 68, 68, 0.3)",
        borderRadius: "12px 12px 12px 4px",
        padding: "10px 14px",
        color: "#f87171",
        fontSize: "13px"
      }, children: [
        "⚠️ ",
        w.content
      ] }) : /* @__PURE__ */ S("div", { style: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px 12px 12px 4px",
        padding: "12px",
        width: "100%"
      }, children: [
        /* @__PURE__ */ S("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px"
        }, children: [
          /* @__PURE__ */ l("span", { style: {
            background: `${Vt.purple}30`,
            color: Vt.purple,
            padding: "3px 8px",
            borderRadius: "4px",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase"
          }, children: w.type }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: "6px" }, children: [
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => p(w.dsl),
                style: {
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  color: "#888",
                  cursor: "pointer",
                  fontSize: "11px"
                },
                children: "Copy"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => c(w),
                style: {
                  background: Vt.green,
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 10px",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: 600
                },
                children: "Apply"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l("pre", { style: {
          background: "rgba(0,0,0,0.3)",
          borderRadius: "6px",
          padding: "10px",
          margin: 0,
          fontSize: "11px",
          color: "#e0e0e0",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          maxHeight: "200px",
          overflowY: "auto",
          fontFamily: "Monaco, Consolas, monospace"
        }, children: w.dsl })
      ] }) }, E)),
      s && /* @__PURE__ */ S("div", { style: {
        alignSelf: "flex-start",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px 12px 12px 4px",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }, children: [
        /* @__PURE__ */ l("div", { style: {
          width: "8px",
          height: "8px",
          background: Vt.purple,
          borderRadius: "50%",
          animation: "pulse 1s infinite"
        } }),
        /* @__PURE__ */ l("span", { style: { color: "#888", fontSize: "13px" }, children: "Generating diagram..." }),
        /* @__PURE__ */ l("style", { children: `
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
              }
            ` })
      ] }),
      /* @__PURE__ */ l("div", { ref: f })
    ] }),
    /* @__PURE__ */ S("form", { onSubmit: y, style: {
      padding: "16px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(0,0,0,0.2)"
    }, children: [
      /* @__PURE__ */ S("div", { style: {
        display: "flex",
        gap: "8px"
      }, children: [
        /* @__PURE__ */ l(
          "input",
          {
            ref: m,
            type: "text",
            value: a,
            onChange: (w) => e(w.target.value),
            placeholder: x ? "Describe your diagram..." : "Configure API key first",
            disabled: !x || s,
            style: {
              flex: 1,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              padding: "12px 14px",
              color: "#fff",
              fontSize: "13px",
              outline: "none"
            }
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "submit",
            disabled: !x || s || !a.trim(),
            style: {
              background: x && a.trim() ? Vt.purple : "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "8px",
              padding: "12px 16px",
              color: x && a.trim() ? "#fff" : "#666",
              cursor: x && a.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: s ? "..." : "→"
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { style: {
        marginTop: "8px",
        fontSize: "11px",
        color: "#555",
        textAlign: "center"
      }, children: "Press Enter to send • Supports all 22 diagram types" })
    ] })
  ] });
}
const Oc = {
  CUSTOM_TEMPLATES: "ddflow_custom_templates"
}, oe = {
  FLOWCHARTS: "Flowcharts",
  ARCHITECTURE: "Architecture",
  DATA_MODELING: "Data Modeling",
  PROJECT_MANAGEMENT: "Project Management",
  SOFTWARE_DESIGN: "Software Design",
  BUSINESS: "Business",
  NETWORK: "Network",
  UI_DESIGN: "UI Design",
  APP_BUNDLES: "App Bundles"
}, qc = [
  // ============================================
  // FLOWCHARTS
  // ============================================
  {
    id: "login-flow",
    name: "User Login Flow",
    description: "Authentication flow with validation and error handling",
    category: oe.FLOWCHARTS,
    type: "flowchart",
    thumbnail: "flowchart",
    source: `(start) Start
Start -> (io) Enter Credentials
Enter Credentials -> (process) Validate Input
Validate Input -> (decision) Valid Format?
Valid Format? -> (process) Check Database: Yes
Valid Format? -> (io) Show Format Error: No
Show Format Error -> Enter Credentials
Check Database -> (decision) User Exists?
User Exists? -> (decision) Password Correct?: Yes
User Exists? -> (io) Show User Error: No
Show User Error -> Enter Credentials
Password Correct? -> (process) Create Session: Yes
Password Correct? -> (io) Show Auth Error: No
Show Auth Error -> Enter Credentials
Create Session -> (end) Dashboard`
  },
  {
    id: "order-process",
    name: "Order Processing",
    description: "E-commerce order flow from cart to delivery",
    category: oe.FLOWCHARTS,
    type: "flowchart",
    thumbnail: "flowchart",
    source: `(start) Cart
Cart -> (process) Calculate Total
Calculate Total -> (io) Enter Shipping
Enter Shipping -> (io) Enter Payment
Enter Payment -> (decision) Payment Valid?
Payment Valid? -> (process) Process Payment: Yes
Payment Valid? -> (io) Show Error: No
Show Error -> Enter Payment
Process Payment -> (decision) Payment Success?
Payment Success? -> (process) Create Order: Yes
Payment Success? -> (io) Payment Failed: No
Payment Failed -> Enter Payment
Create Order -> (io) Send Confirmation
Send Confirmation -> (process) Prepare Shipment
Prepare Shipment -> (end) Delivered`
  },
  {
    id: "approval-workflow",
    name: "Approval Workflow",
    description: "Multi-level approval process with escalation",
    category: oe.FLOWCHARTS,
    type: "flowchart",
    thumbnail: "flowchart",
    source: `(start) Submit Request
Submit Request -> (process) Initial Review
Initial Review -> (decision) Meets Criteria?
Meets Criteria? -> (process) Manager Review: Yes
Meets Criteria? -> (io) Return for Revision: No
Return for Revision -> Submit Request
Manager Review -> (decision) Manager Approves?
Manager Approves? -> (decision) Above Threshold?: Yes
Manager Approves? -> (io) Rejected: No
Rejected -> (end) Closed
Above Threshold? -> (process) Director Review: Yes
Above Threshold? -> (process) Approved: No
Director Review -> (decision) Director Approves?
Director Approves? -> Approved: Yes
Director Approves? -> Rejected: No
Approved -> (end) Complete`
  },
  {
    id: "bug-triage",
    name: "Bug Triage Process",
    description: "Software bug reporting and resolution workflow",
    category: oe.FLOWCHARTS,
    type: "flowchart",
    thumbnail: "flowchart",
    source: `(start) Bug Reported
Bug Reported -> (process) Reproduce Issue
Reproduce Issue -> (decision) Reproducible?
Reproducible? -> (process) Classify Severity: Yes
Reproducible? -> (io) Request More Info: No
Request More Info -> Bug Reported
Classify Severity -> (decision) Critical?
Critical? -> (process) Assign Senior Dev: Yes
Critical? -> (decision) High Priority?: No
High Priority? -> (process) Add to Sprint: Yes
High Priority? -> (process) Add to Backlog: No
Add to Backlog -> (end) Queued
Assign Senior Dev -> (process) Fix Bug
Add to Sprint -> Fix Bug
Fix Bug -> (process) Code Review
Code Review -> (decision) Approved?
Approved? -> (process) Deploy Fix: Yes
Approved? -> Fix Bug: No
Deploy Fix -> (process) Verify Fix
Verify Fix -> (end) Resolved`
  },
  // ============================================
  // ARCHITECTURE
  // ============================================
  {
    id: "microservices",
    name: "Microservices Architecture",
    description: "C4-style microservices with boundaries and layers",
    category: oe.ARCHITECTURE,
    type: "architecture",
    thumbnail: "architecture",
    source: `title: Microservices Platform
subtitle: Container Diagram

[person] Customer: End user
[person] Developer: API consumer
[external] Payment Provider: Stripe

boundary "Client Applications" {
[webapp] Web App: React SPA
[mobileapp] Mobile App: React Native
}

boundary "API Layer" {
[gateway] API Gateway: Kong
[auth] Auth Service: OAuth2/JWT
}

boundary "Core Services" {
[service] User Service: User management
[service] Product Service: Catalog
[service] Order Service: Checkout
[service] Notification Service: Alerts
}

boundary "Data Stores" {
[database] PostgreSQL: Primary data
[database] MongoDB: Products
[cache] Redis: Sessions
[queue] RabbitMQ: Events
}

Customer -> Web App: Uses
Customer -> Mobile App: Uses
Developer -> API Gateway: API calls
Web App -> API Gateway
Mobile App -> API Gateway
API Gateway -> Auth Service: Validates
API Gateway -> User Service
API Gateway -> Product Service
API Gateway -> Order Service
Order Service -> Payment Provider: Payments
User Service -> PostgreSQL
Product Service -> MongoDB
Order Service -> PostgreSQL
Auth Service -> Redis: Sessions
Order Service -> RabbitMQ: Events`
  },
  {
    id: "serverless",
    name: "Serverless Architecture",
    description: "AWS serverless with Lambda, DynamoDB & C4 boundaries",
    category: oe.ARCHITECTURE,
    type: "architecture",
    thumbnail: "architecture",
    source: `title: Serverless Platform
subtitle: AWS Deployment Diagram

[person] User: App user
[external] Stripe: Payments

boundary "CDN & Edge" {
[cdn] CloudFront: CDN
[storage] S3: Static assets
}

boundary "API & Compute" {
[gateway] API Gateway: REST API
[lambda] Auth Lambda: Authentication
[lambda] API Lambda: Business logic
[lambda] Worker Lambda: Background jobs
}

boundary "Messaging" {
[queue] SQS: Job queue
[pubsub] SNS: Notifications
}

boundary "Data" {
[database] DynamoDB: NoSQL data
[cache] ElastiCache: Redis cache
}

User -> CloudFront: Web access
User -> API Gateway: API calls
CloudFront -> S3: Static content
API Gateway -> Auth Lambda: Auth
API Gateway -> API Lambda: Requests
Auth Lambda -> DynamoDB: Users
API Lambda -> DynamoDB: Data
API Lambda -> ElastiCache: Cache
API Lambda -> SQS: Queue jobs
SQS -> Worker Lambda: Process
Worker Lambda -> SNS: Notify
API Lambda -> Stripe: Payments`
  },
  {
    id: "event-driven",
    name: "Event-Driven Architecture",
    description: "Event sourcing with CQRS pattern",
    category: oe.ARCHITECTURE,
    type: "architecture",
    thumbnail: "architecture",
    source: `[clients] Web UI, Admin Dashboard
[gateway] API Gateway
[services] Command Handler, Event Processor, Query Handler, Saga Orchestrator
[queue] Event Bus, Command Queue
[data] Event Store, Read Database, Projections

Web UI -> API Gateway
Admin Dashboard -> API Gateway
API Gateway -> Command Handler
API Gateway -> Query Handler
Command Handler -> Command Queue
Command Queue -> Event Processor
Event Processor -> Event Bus
Event Processor -> Event Store
Event Bus -> Saga Orchestrator
Event Bus -> Projections
Projections -> Read Database
Query Handler -> Read Database`
  },
  {
    id: "three-tier",
    name: "Three-Tier Application",
    description: "Traditional three-tier web application",
    category: oe.ARCHITECTURE,
    type: "architecture",
    thumbnail: "architecture",
    source: `[clients] Browser, Mobile App
[gateway] Load Balancer
[services] Web Server, Application Server, Background Jobs
[cache] Redis Cache, Session Store
[data] Primary Database, Read Replica, File Storage

Browser -> Load Balancer
Mobile App -> Load Balancer
Load Balancer -> Web Server
Web Server -> Application Server
Application Server -> Redis Cache
Application Server -> Session Store
Application Server -> Primary Database
Application Server -> Background Jobs
Primary Database -> Read Replica
Background Jobs -> File Storage`
  },
  // ============================================
  // DATA MODELING
  // ============================================
  {
    id: "ecommerce-erd",
    name: "E-Commerce Database",
    description: "Complete e-commerce database schema",
    category: oe.DATA_MODELING,
    type: "erd",
    thumbnail: "erd",
    source: `CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE addresses (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type VARCHAR(20),
  street VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(100),
  is_default BOOLEAN
);

CREATE TABLE categories (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  slug VARCHAR(100),
  parent_id UUID REFERENCES categories(id),
  description TEXT
);

CREATE TABLE products (
  id UUID PRIMARY KEY,
  category_id UUID REFERENCES categories(id),
  name VARCHAR(255),
  slug VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  stock_quantity INTEGER,
  is_active BOOLEAN,
  created_at TIMESTAMP
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  shipping_address_id UUID REFERENCES addresses(id),
  status VARCHAR(50),
  subtotal DECIMAL(10,2),
  tax DECIMAL(10,2),
  shipping_cost DECIMAL(10,2),
  total DECIMAL(10,2),
  created_at TIMESTAMP
);

CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER,
  unit_price DECIMAL(10,2),
  total_price DECIMAL(10,2)
);`
  },
  {
    id: "blog-erd",
    name: "Blog Platform Database",
    description: "Blog with posts, comments, and tags",
    category: oe.DATA_MODELING,
    type: "erd",
    thumbnail: "erd",
    source: `CREATE TABLE authors (
  id UUID PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(255) UNIQUE,
  bio TEXT,
  avatar_url VARCHAR(500),
  created_at TIMESTAMP
);

CREATE TABLE posts (
  id UUID PRIMARY KEY,
  author_id UUID REFERENCES authors(id),
  title VARCHAR(255),
  slug VARCHAR(255) UNIQUE,
  content TEXT,
  excerpt TEXT,
  status VARCHAR(20),
  published_at TIMESTAMP,
  created_at TIMESTAMP
);

CREATE TABLE tags (
  id UUID PRIMARY KEY,
  name VARCHAR(50),
  slug VARCHAR(50) UNIQUE
);

CREATE TABLE post_tags (
  post_id UUID REFERENCES posts(id),
  tag_id UUID REFERENCES tags(id),
  PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE comments (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id),
  author_id UUID REFERENCES authors(id),
  parent_id UUID REFERENCES comments(id),
  content TEXT,
  is_approved BOOLEAN,
  created_at TIMESTAMP
);`
  },
  {
    id: "saas-erd",
    name: "SaaS Multi-Tenant Database",
    description: "Multi-tenant SaaS application schema",
    category: oe.DATA_MODELING,
    type: "erd",
    thumbnail: "erd",
    source: `CREATE TABLE organizations (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  slug VARCHAR(100) UNIQUE,
  plan VARCHAR(50),
  status VARCHAR(20),
  created_at TIMESTAMP
);

CREATE TABLE users (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  email VARCHAR(255),
  role VARCHAR(50),
  status VARCHAR(20),
  last_login_at TIMESTAMP,
  created_at TIMESTAMP
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  plan VARCHAR(50),
  status VARCHAR(20),
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  stripe_subscription_id VARCHAR(255)
);

CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  subscription_id UUID REFERENCES subscriptions(id),
  amount DECIMAL(10,2),
  status VARCHAR(20),
  due_date DATE,
  paid_at TIMESTAMP
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  action VARCHAR(100),
  resource_type VARCHAR(50),
  resource_id UUID,
  metadata JSONB,
  created_at TIMESTAMP
);`
  },
  // ============================================
  // PROJECT MANAGEMENT
  // ============================================
  {
    id: "product-roadmap",
    name: "Product Roadmap",
    description: "Quarterly product development roadmap",
    category: oe.PROJECT_MANAGEMENT,
    type: "timeline",
    thumbnail: "timeline",
    source: `[Q1 2025] *Kickoff | Project initiation and team assembly
[Q1 2025] Research Phase | Market analysis and user research
[Q1 2025] Design Sprint | UI/UX design and prototyping
[Q2 2025] *MVP Development | Core feature implementation
[Q2 2025] Internal Testing | QA and bug fixes
[Q2 2025] *Beta Launch | Limited release to beta users
[Q3 2025] User Feedback | Collect and analyze feedback
[Q3 2025] Feature Iteration | Implement improvements
[Q3 2025] *Public Launch | Version 1.0 release
[Q4 2025] Growth Phase | Marketing and user acquisition
[Q4 2025] Feature Expansion | New features development
[Q4 2025] *Scale | Infrastructure optimization`
  },
  {
    id: "sprint-gantt",
    name: "Sprint Planning",
    description: "2-week sprint with tasks and dependencies",
    category: oe.PROJECT_MANAGEMENT,
    type: "gantt",
    thumbnail: "gantt",
    source: `Sprint Planning, 0, 0.5, 100
Backlog Refinement, 0.5, 0.5, 100
Design Review, 1, 1, 100
API Development, 2, 3, 75
Frontend Development, 3, 4, 50
Integration, 5, 2, 25
Unit Testing, 6, 2, 10
QA Testing, 7, 2, 0
Bug Fixes, 8, 1, 0
Code Review, 9, 1, 0
Sprint Review, 9.5, 0.5, 0
Retrospective, 10, 0.5, 0`
  },
  {
    id: "project-wbs",
    name: "Project Work Breakdown",
    description: "Work breakdown structure for project planning",
    category: oe.PROJECT_MANAGEMENT,
    type: "wbs",
    thumbnail: "mindmap",
    source: `Project Launch
  Planning
    Requirements Gathering
    Scope Definition
    Resource Allocation
    Timeline Creation
  Design
    Architecture Design
    Database Design
    UI/UX Design
    API Design
  Development
    Backend
      Core Services
      Database Layer
      API Endpoints
    Frontend
      Components
      State Management
      API Integration
  Testing
    Unit Tests
    Integration Tests
    Performance Tests
    Security Tests
  Deployment
    Environment Setup
    CI/CD Pipeline
    Monitoring
    Documentation`
  },
  {
    id: "team-org",
    name: "Development Team Structure",
    description: "Software development team organization",
    category: oe.PROJECT_MANAGEMENT,
    type: "orgchart",
    thumbnail: "orgchart",
    source: `VP of Engineering [Executive]
  Engineering Manager [Management]
    Tech Lead - Backend [Leadership]
      Senior Backend Dev
      Backend Developer
      Backend Developer
    Tech Lead - Frontend [Leadership]
      Senior Frontend Dev
      Frontend Developer
      Frontend Developer
    Tech Lead - DevOps [Leadership]
      DevOps Engineer
      SRE Engineer
  QA Manager [Management]
    QA Lead [Leadership]
      Senior QA Engineer
      QA Engineer
      QA Engineer
  Product Manager [Product]
    UX Designer
    Technical Writer`
  },
  // ============================================
  // SOFTWARE DESIGN
  // ============================================
  {
    id: "api-sequence",
    name: "REST API Flow",
    description: "API request/response with authentication",
    category: oe.SOFTWARE_DESIGN,
    type: "sequence",
    thumbnail: "sequence",
    source: `participant Client, API Gateway, Auth Service, User Service, Database

Client -> API Gateway: POST /api/users
API Gateway -> Auth Service: Validate JWT
Auth Service --> API Gateway: Token Valid
API Gateway -> User Service: Create User Request
User Service -> Database: INSERT user
Database --> User Service: User Record
User Service -> Database: INSERT audit_log
Database --> User Service: OK
User Service --> API Gateway: User Created Response
API Gateway --> Client: 201 Created + User JSON`
  },
  {
    id: "oauth-sequence",
    name: "OAuth 2.0 Flow",
    description: "OAuth authorization code flow",
    category: oe.SOFTWARE_DESIGN,
    type: "sequence",
    thumbnail: "sequence",
    source: `participant User, Client App, Auth Server, Resource Server

User -> Client App: Click Login
Client App -> Auth Server: Authorization Request
Auth Server -> User: Login Page
User -> Auth Server: Credentials
Auth Server --> User: Authorization Code
User -> Client App: Redirect with Code
Client App -> Auth Server: Exchange Code for Token
Auth Server --> Client App: Access Token + Refresh Token
Client App -> Resource Server: API Request + Access Token
Resource Server --> Client App: Protected Resource
Client App --> User: Display Data`
  },
  {
    id: "order-state",
    name: "Order State Machine",
    description: "E-commerce order lifecycle states",
    category: oe.SOFTWARE_DESIGN,
    type: "state",
    thumbnail: "state",
    source: `(initial) Draft
(final) Completed
(final) Cancelled
(final) Refunded

Draft -> Pending: SUBMIT_ORDER
Pending -> Confirmed: PAYMENT_SUCCESS
Pending -> Cancelled: PAYMENT_FAILED
Pending -> Cancelled: CANCEL_ORDER
Confirmed -> Processing: START_PROCESSING
Processing -> Shipped: SHIP_ORDER
Shipped -> Delivered: CONFIRM_DELIVERY
Delivered -> Completed: CLOSE_ORDER
Delivered -> Refunded: REQUEST_REFUND
Confirmed -> Cancelled: CANCEL_ORDER`
  },
  {
    id: "user-classes",
    name: "User Management Classes",
    description: "OOP class diagram for user system",
    category: oe.SOFTWARE_DESIGN,
    type: "class",
    thumbnail: "class",
    source: `class User
  + id: UUID
  + email: string
  + username: string
  - passwordHash: string
  + role: Role
  + createdAt: Date
  + login(password): boolean
  + updateProfile(data): void
  # hashPassword(plain): string

class Role
  + id: UUID
  + name: string
  + permissions: Permission[]
  + hasPermission(action): boolean

class Permission
  + id: UUID
  + name: string
  + resource: string
  + action: string

class AuthService
  - userRepo: UserRepository
  - tokenService: TokenService
  + authenticate(email, password): Token
  + register(userData): User
  + refreshToken(token): Token
  - validatePassword(plain, hash): boolean`
  },
  {
    id: "shopping-usecase",
    name: "E-Commerce Use Cases",
    description: "Online shopping use case diagram",
    category: oe.SOFTWARE_DESIGN,
    type: "usecase",
    thumbnail: "usecase",
    source: `actor Customer
actor Admin
actor Payment System

(Browse Products)
(Search Products)
(Add to Cart)
(Checkout)
(Process Payment)
(View Order History)
(Manage Products)
(Manage Orders)
(Generate Reports)

Customer -> Browse Products
Customer -> Search Products
Customer -> Add to Cart
Customer -> Checkout
Customer -> View Order History
Checkout -> Process Payment
Payment System -> Process Payment
Admin -> Manage Products
Admin -> Manage Orders
Admin -> Generate Reports`
  },
  {
    id: "c4-system",
    name: "C4 System Context",
    description: "C4 model with boundaries and groupings",
    category: oe.SOFTWARE_DESIGN,
    type: "c4",
    thumbnail: "c4",
    source: `title: E-Commerce Platform Architecture
subtitle: C4 Container Diagram with Boundaries

[person] Customer: Online shopper
[person] Admin: Platform administrator

boundary "Web Layer" {
  [container] Web App: React SPA
  [container] Mobile App: React Native
  [container] Admin Portal: Vue.js Dashboard
}

boundary "API Layer" {
  [container] API Gateway: Kong/NGINX
  [container] Auth Service: JWT/OAuth2
  [container] Order Service: Node.js
  [container] Product Service: Go microservice
}

boundary "Data Layer" {
  [database] PostgreSQL: Orders & Users
  [database] MongoDB: Product Catalog
  [database] Redis: Session Cache
}

boundary "External Services" {
  [external] Stripe: Payment Processing
  [external] SendGrid: Email Notifications
  [external] AWS S3: Media Storage
}

Customer -> Web App: Browse & Purchase
Customer -> Mobile App: Shop on-the-go
Admin -> Admin Portal: Manage Platform
Web App -> API Gateway: HTTPS/REST
Mobile App -> API Gateway: HTTPS/REST
Admin Portal -> API Gateway: Admin API
API Gateway -> Auth Service: Validate Token
API Gateway -> Order Service: Order Operations
API Gateway -> Product Service: Product CRUD
Order Service -> PostgreSQL: Store Orders
Product Service -> MongoDB: Product Data
Auth Service -> Redis: Cache Sessions
Order Service -> Stripe: Process Payment
Order Service -> SendGrid: Order Confirmation
Product Service -> AWS S3: Product Images`
  },
  // ============================================
  // BUSINESS
  // ============================================
  {
    id: "customer-journey",
    name: "Customer Onboarding Journey",
    description: "New customer onboarding experience map",
    category: oe.BUSINESS,
    type: "journey",
    thumbnail: "journey",
    source: `[actor] New Customer
[page] Landing Page
[action] Sign Up
[form] Registration Form
[email] Welcome Email
[page] Dashboard
[action] Complete Profile
[action] Watch Tutorial
[milestone] First Action
[notification] Tips Notification
[success] Fully Onboarded

New Customer -> Landing Page
Landing Page -browses-> Sign Up
Sign Up -> Registration Form
Registration Form -submits-> Welcome Email
Welcome Email -clicks link-> Dashboard
Dashboard -> Complete Profile
Dashboard -> Watch Tutorial
Complete Profile -> First Action
Watch Tutorial -> First Action
First Action -> Tips Notification
Tips Notification -> Fully Onboarded`
  },
  {
    id: "priority-quadrant",
    name: "Priority Matrix",
    description: "Eisenhower matrix for task prioritization",
    category: oe.BUSINESS,
    type: "quadrant",
    thumbnail: "quadrant",
    source: `title: Priority Matrix
x-axis: Urgency ->
y-axis: Importance ->
quadrant-1: Do First
quadrant-2: Schedule
quadrant-3: Delegate
quadrant-4: Eliminate

Customer Bug Fix: [85, 90]
Security Patch: [90, 95]
Feature Request A: [25, 85]
Code Refactoring: [20, 70]
Documentation: [30, 60]
Meeting Prep: [75, 40]
Email Responses: [80, 30]
Social Media: [15, 15]`
  },
  {
    id: "market-pie",
    name: "Market Share Analysis",
    description: "Pie chart for market distribution",
    category: oe.BUSINESS,
    type: "pie",
    thumbnail: "pie",
    source: `"Our Product": 28
"Competitor A": 25
"Competitor B": 20
"Competitor C": 15
"Others": 12`
  },
  {
    id: "requirements",
    name: "System Requirements",
    description: "Requirement specification with traceability",
    category: oe.BUSINESS,
    type: "requirement",
    thumbnail: "requirement",
    source: `requirement User Authentication {
  text: System shall authenticate users via email and password
  risk: High
  priority: Critical
}

requirement Password Security {
  text: Passwords must be hashed using bcrypt with cost factor 12
  risk: High
  priority: Critical
}

requirement Session Management {
  text: Sessions expire after 24 hours of inactivity
  risk: Medium
  priority: High
}

requirement Multi-Factor Auth {
  text: System shall support TOTP-based 2FA
  risk: Medium
  priority: Medium
}

requirement Rate Limiting {
  text: Login attempts limited to 5 per minute per IP
  risk: Low
  priority: High
}

User Authentication -> Password Security: derives
User Authentication -> Session Management: traces
User Authentication -> Multi-Factor Auth: refines
Password Security -> Rate Limiting: traces`
  },
  // ============================================
  // NETWORK
  // ============================================
  {
    id: "corporate-network",
    name: "Corporate Network",
    description: "Enterprise network with DMZ and internal zones",
    category: oe.NETWORK,
    type: "network",
    thumbnail: "network",
    source: `[cloud] Internet
[firewall] Edge Firewall (10.0.0.1)
[router] Core Router (10.0.0.2)
[firewall] Internal Firewall (10.0.1.1)
[switch] DMZ Switch (10.0.2.1)
[switch] Internal Switch (10.1.0.1)
[server] Web Server (10.0.2.10)
[server] Mail Server (10.0.2.11)
[server] App Server (10.1.0.10)
[server] Database Server (10.1.0.11)
[server] File Server (10.1.0.12)
[computer] Workstations (10.1.1.0/24)

Internet -- Edge Firewall
Edge Firewall -- Core Router
Core Router -- DMZ Switch
Core Router -- Internal Firewall
DMZ Switch -- Web Server: HTTPS
DMZ Switch -- Mail Server: SMTP
Internal Firewall -- Internal Switch
Internal Switch -- App Server
Internal Switch -- Database Server: TCP
Internal Switch -- File Server: SMB
Internal Switch -- Workstations`
  },
  {
    id: "cloud-vpc",
    name: "Cloud VPC Architecture",
    description: "AWS VPC with public and private subnets",
    category: oe.NETWORK,
    type: "network",
    thumbnail: "network",
    source: `[cloud] AWS Region
[router] Internet Gateway
[router] NAT Gateway (10.0.1.100)
[switch] Public Subnet A (10.0.1.0/24)
[switch] Public Subnet B (10.0.2.0/24)
[switch] Private Subnet A (10.0.10.0/24)
[switch] Private Subnet B (10.0.20.0/24)
[server] Load Balancer
[server] Bastion Host (10.0.1.10)
[server] App Server 1 (10.0.10.10)
[server] App Server 2 (10.0.20.10)
[database] RDS Primary (10.0.10.100)
[database] RDS Replica (10.0.20.100)

AWS Region -- Internet Gateway
Internet Gateway -- Public Subnet A
Internet Gateway -- Public Subnet B
Public Subnet A -- Load Balancer
Public Subnet A -- Bastion Host
Public Subnet A -- NAT Gateway
NAT Gateway -- Private Subnet A
NAT Gateway -- Private Subnet B
Private Subnet A -- App Server 1
Private Subnet B -- App Server 2
Private Subnet A -- RDS Primary
Private Subnet B -- RDS Replica`
  },
  // ============================================
  // UI DESIGN
  // ============================================
  {
    id: "landing-page-wireframe",
    name: "Landing Page",
    description: "Complete landing page with hero, features, pricing, testimonials",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{SaaS Landing Page}
[[ Logo | Features | Pricing | About | [Sign Up] ]]

[hero: Build Amazing Products Faster | The all-in-one platform for modern teams to collaborate, build, and ship products. | Start Free Trial]

---

## Why Teams Love Us

[feature: 🚀 | Lightning Fast | Deploy in seconds with our optimized infrastructure and global CDN.]

[feature: 🔒 | Enterprise Security | SOC 2 compliant with end-to-end encryption and SSO support.]

[feature: 📊 | Real-time Analytics | Get instant insights with beautiful dashboards and reports.]

[feature: 🤝 | Team Collaboration | Work together seamlessly with built-in comments and sharing.]

---

## Simple, Transparent Pricing

[pricing: Starter | $9 | 5 projects, 10GB storage, Email support | Get Started]

[pricing: Pro | $29 | Unlimited projects, 100GB storage, Priority support, API access | Start Free Trial]

[pricing: Enterprise | $99 | Everything in Pro, SSO, Dedicated support, Custom integrations | Contact Sales]

---

[testimonial: "This platform transformed how our team works. We shipped 3x faster!" | Sarah Chen | VP Engineering, TechCorp]

[testimonial: "The best investment we made this year. Incredible ROI." | Marcus Johnson | CEO, StartupXYZ]

---

[cta: Ready to get started? | Join 10,000+ teams already using our platform. | Start Free Trial]

---

[footer: Product | Features | Pricing | Docs :: Company | About | Blog | Careers :: Support | Help Center | Contact | Status :: © 2024 Company. All rights reserved.]

[social: twitter | github | linkedin | youtube]`
  },
  {
    id: "dashboard-wireframe",
    name: "Admin Dashboard",
    description: "Modern dashboard with stats, charts, and data tables",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{Admin Dashboard}
[[ 🏠 Dashboard | 👥 Users | 📦 Products | 📋 Orders | ⚙️ Settings | (@Admin) ]]

>> Home > Dashboard Overview

---

## Key Metrics

[stat: 12,456 | Total Users | +12.5%]

[stat: $84,230 | Revenue | +8.2%]

[stat: 1,847 | Orders | +15.3%]

[stat: 94.2% | Satisfaction | +2.1%]

---

## Quick Actions

[widget: New Orders | 24 | 🛒]

[widget: Pending Reviews | 8 | ⏳]

[widget: Support Tickets | 12 | 🎫]

[widget: Low Stock Items | 5 | ⚠️]

---

## Recent Activity

[activity: John Smith created a new order #1234 | 5 minutes ago]

[activity: Sarah Johnson updated product inventory | 12 minutes ago]

[activity: Mike Brown resolved support ticket #567 | 1 hour ago]

[activity: System backup completed successfully | 2 hours ago]

---

## Orders Overview

[data-table: 5 rows]

---

[toast: 3 new orders received | success]

[fab: +]`
  },
  {
    id: "auth-wireframe",
    name: "Authentication Pages",
    description: "Login and signup forms with modern styling",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{Authentication}

## Login Form

[login-form: Welcome Back]

---

## Sign Up Form

[signup-form: Create Your Account]

---

## Social Login Options

[social: google | github | microsoft | apple]

---

## Password Reset

<Card>
## Forgot Password?

Enter your email and we'll send you a reset link.

[text: Email address]

[Send Reset Link]

>> Remember your password? Sign in
</Card>

---

## Two-Factor Authentication

<Card>
## Verify Your Identity

Enter the 6-digit code from your authenticator app.

[text: ● ● ● ● ● ●]

[Verify Code]

[ ] Trust this device for 30 days

>> Didn't receive a code? Resend
</Card>`
  },
  {
    id: "mobile-app-wireframe",
    name: "Mobile App Screens",
    description: "Mobile UI with bottom nav, app bar, and FAB",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{Mobile App}

## Home Screen

[app-bar: Home | 🔔 | 👤]

[search: Search anything...]

---

## Stats Overview

[stat: 2,847 | Steps Today | +18%]

[stat: 6.2 | Hours Sleep | -5%]

[stat: 1,450 | Calories | +12%]

---

## Activity Feed

[activity: Morning workout completed | 8:30 AM]

[activity: Reached daily step goal | 2:15 PM]

[activity: Sleep score: Excellent | Last night]

---

[fab: +]

[bottom-nav: 🏠 Home | 📊 Stats | ➕ | 🏆 Goals | 👤 Profile]

---

## Profile Screen

[app-bar: Profile | ⚙️]

[profile: Alex Johnson | @alexj | Health enthusiast and fitness lover. Building better habits one day at a time.]

---

## Empty State

[empty: No workouts yet | Start tracking your fitness journey by adding your first workout. | Add Workout]

---

## Error State

[error: Connection Lost | Unable to sync your data. Please check your internet connection. | Retry]

---

## Loading State

[loading: Syncing your data...]`
  },
  {
    id: "settings-wireframe",
    name: "Settings Page",
    description: "Comprehensive settings with accordions and toggles",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{Settings}
[[ Home | Profile | Settings ]]

>> Settings > Account

(( General | Security | Notifications | Billing | Integrations ))

---

## General Settings

[accordion: Profile Information | Privacy Settings | Language & Region]

---

## Profile

(@John Doe)

[text: Full Name]
[text: Email]
[text: Phone]
[textarea: Bio]

[upload: Upload profile picture]

---

## Preferences

[toggle: on] Dark Mode
[toggle: off] Compact View
[toggle: on] Show Online Status
[toggle: off] Auto-play Videos

---

[v Select Timezone]
[v Select Language]

---

## Notifications

[x] Email notifications
[x] Push notifications
[ ] SMS notifications
[x] Weekly digest

---

## Danger Zone

[!error] Delete Account
This action cannot be undone. All your data will be permanently deleted.
[Delete Account]

---

[Cancel] [Save Changes]

[toast: Settings saved successfully | success]`
  },
  {
    id: "product-wireframe",
    name: "E-Commerce Product Page",
    description: "Product listing with reviews and comments",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{Product Details}
[[ 🏠 Home | 📦 Products | 🛒 Cart (3) | ❤️ Wishlist | (@User) ]]

>> Electronics > Smartphones > iPhone 15 Pro

---

[image: Product Image]

## iPhone 15 Pro

★★★★☆ (4.8) · 1,234 reviews

**$999.00** ~~$1,199.00~~ [!success] Save $200

[v Select Color: Space Black]
[v Select Storage: 256GB]
[v Quantity: 1]

[Add to Cart] [Buy Now]

---

## Key Features

[feature: 🎬 | ProMotion Display | 120Hz adaptive refresh rate]

[feature: 📸 | 48MP Camera | Professional-grade photography]

[feature: ⚡ | A17 Pro Chip | Industry-leading performance]

[feature: 🔋 | All-Day Battery | Up to 29 hours video playback]

---

## Customer Reviews

[comment: techfan2024 | Absolutely love this phone! The camera quality is insane. | 2 days ago]

[comment: sarah_m | Great upgrade from my old phone. The display is beautiful. | 1 week ago]

[comment: johnsmith | Fast shipping, arrived earlier than expected. | 2 weeks ago]

---

## Technical Specs

[accordion: Display | Camera | Performance | Battery | Connectivity]

---

[code: json]

---

## You Might Also Like

<Card>
AirPods Pro
$249.00
[Add to Cart]
</Card>

<Card>
MagSafe Charger
$39.00
[Add to Cart]
</Card>

---

[footer: Shop | Mac | iPad | iPhone | Watch :: Support | Contact | Returns :: © 2024 Store]`
  },
  {
    id: "blog-wireframe",
    name: "Blog Article",
    description: "Blog post with comments, social sharing, and related posts",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{Blog Article}
[[ 📝 Blog | 🏷️ Categories | 🔍 Search | [Subscribe] ]]

>> Tech > Web Development > Building Scalable React Apps

---

# Building Scalable React Applications in 2024

[avatar-group: 3] By **John Doe** · Dec 15, 2024 · 8 min read

[chip: React] [chip: Architecture] [chip: Performance]

---

[image: Featured Image]

---

## Introduction

Building scalable React applications requires careful planning and adherence to best practices. In this article, we'll explore the key patterns and techniques...

---

## Code Example

[code: javascript]

---

## Key Takeaways

- Use proper state management
- Implement code splitting
- Optimize bundle size
- Write testable components

---

## Share This Article

[social: twitter | linkedin | facebook]

---

## Comments (24)

[comment: dev_sarah | Great article! The code splitting section was particularly helpful. | 2 hours ago]

[comment: react_pro | Would love to see a follow-up on testing strategies. | 5 hours ago]

[comment: newbie_dev | This helped me understand so much. Thank you! | 1 day ago]

---

## Related Articles

[feature: 📘 | State Management Patterns | Learn about Redux, MobX, and Zustand]

[feature: 🚀 | Performance Optimization | Tips for faster React apps]

[feature: 🧪 | Testing Best Practices | Write reliable tests]

---

[cta: Want more articles? | Subscribe to our newsletter for weekly updates. | Subscribe]

---

[footer: Blog | About | Contact | Privacy :: © 2024 TechBlog]`
  },
  {
    id: "saas-dashboard-wireframe",
    name: "SaaS Application",
    description: "Full SaaS app with sidebar, widgets, and notifications",
    category: oe.UI_DESIGN,
    type: "wireframe",
    thumbnail: "wireframe",
    source: `{SaaS Dashboard}
[[ 🎯 ProjectHub | Projects | Team | Analytics | Settings | [Upgrade] | (@PM) ]]

>> Projects > Website Redesign > Tasks

---

## Project Stats

[stat: 67% | Completed | +5% this week]

[stat: 12 | In Progress | 3 due today]

[stat: 8 | Team Members | 2 online]

[stat: 5 | Days Left | On track]

---

## Quick Actions

[widget: Add Task | + | 📝]

[widget: Schedule Meeting | + | 📅]

[widget: Upload Files | + | 📤]

[widget: Invite Member | + | 👥]

---

## Task Board

[data-table: 5 rows]

---

## Recent Files

[upload: Drop files here to upload]

---

## Team Activity

[activity: Emma updated the design mockups | 10 min ago]

[activity: James completed "API Integration" | 1 hour ago]

[activity: Sarah commented on "Homepage Design" | 2 hours ago]

---

## Upcoming Deadlines

[toast: Sprint review meeting in 2 hours | warning]

[toast: Design approval deadline tomorrow | info]

---

## Need Help?

[accordion: Getting Started Guide | Keyboard Shortcuts | Contact Support]

---

[fab: +]

[toast: Changes saved automatically | success]`
  },
  // ============================================
  // APP DESIGN BUNDLES (Wireframes + User Journey)
  // ============================================
  // E-commerce App Bundle - Home Page
  {
    id: "ecommerce-home",
    name: "🛒 E-commerce: Home Page",
    description: "E-commerce app home page with featured products and categories",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "E-commerce App",
    bundleOrder: 1,
    source: `{ShopFlow - Home}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 (3) | [Sign In] ]]

>> Home

---

[hero: Summer Sale - Up to 50% Off | Discover amazing deals on thousands of products. Limited time offer! | Shop Now]

---

## Featured Categories

<card>
[feature: 👗 | Fashion | Latest trends in clothing]

[feature: 📱 | Electronics | Gadgets & devices]

[feature: 🏠 | Home & Living | Furniture & decor]

[feature: 🎮 | Gaming | Consoles & accessories]
</>

---

## Trending Products

<card>
|Product|Price|Rating|
|Wireless Earbuds|$79.99|⭐⭐⭐⭐⭐|
|Smart Watch Pro|$299.99|⭐⭐⭐⭐|
|Laptop Stand|$49.99|⭐⭐⭐⭐⭐|
|USB-C Hub|$39.99|⭐⭐⭐⭐|
</>

---

## Special Offers

[stat: 2,847 | Products on Sale | 🔥]

[stat: 50% | Max Discount | 💰]

[stat: 24h | Flash Deal Ends | ⏰]

---

[footer: Shop | Categories | Deals :: Account | Orders | Wishlist :: Help | Contact | Returns :: © 2024 ShopFlow]`
  },
  // E-commerce App Bundle - Product Page
  {
    id: "ecommerce-product",
    name: "🛒 E-commerce: Product Page",
    description: "Product detail page with images, specs, and reviews",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "E-commerce App",
    bundleOrder: 2,
    source: `{ShopFlow - Product}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 (3) | [Sign In] ]]

>> Home > Electronics > Headphones > Wireless Earbuds Pro

---

<card>
## Product Images

[img: Main product image]

[img 1:1] [img 1:1] [img 1:1] [img 1:1]
</>

<Sidebar>
## Wireless Earbuds Pro

⭐⭐⭐⭐⭐ (2,847 reviews)

### $79.99 ~~$129.99~~

{badge:sale} 38% OFF

---

**Color**
(( Black | White | Navy ))

**Quantity**
[v 1      ]

---

[Add to Cart]
[Buy Now]

---

- ✓ Free shipping over $50
- ✓ 30-day return policy
- ✓ 2-year warranty
</>

---

## Product Details

<card>
(( Description | Specifications | Reviews ))

Premium wireless earbuds with active noise cancellation,
30-hour battery life, and crystal-clear audio quality.

- Active Noise Cancellation
- 30-hour total battery life
- IPX4 water resistance
- Touch controls
- Bluetooth 5.3
</>

---

## Customer Reviews

<card>
[testimonial: Amazing sound quality! | Sarah M. | ⭐⭐⭐⭐⭐]

[testimonial: Best earbuds I've owned | John D. | ⭐⭐⭐⭐⭐]

[testimonial: Great value for money | Mike R. | ⭐⭐⭐⭐]
</>

---

## You May Also Like

|Product|Price|
|Charging Case|$29.99|
|Ear Tips Pack|$12.99|
|Carry Pouch|$19.99|`
  },
  // E-commerce App Bundle - Cart Page
  {
    id: "ecommerce-cart",
    name: "🛒 E-commerce: Cart Page",
    description: "Shopping cart with items, quantities, and order summary",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "E-commerce App",
    bundleOrder: 3,
    source: `{ShopFlow - Cart}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 (3) | [Sign In] ]]

>> Home > Shopping Cart

---

## Shopping Cart (3 items)

<card>
### Cart Items

---

|Product|Price|Qty|Total|
|Wireless Earbuds Pro|$79.99|[v 1]|$79.99|
|Smart Watch Pro|$299.99|[v 1]|$299.99|
|USB-C Hub|$39.99|[v 2]|$79.98|

---

[🗑️ Remove Selected]  [Continue Shopping]
</>

<Sidebar>
### Order Summary

---

Subtotal: **$459.96**

Shipping: **Free**

Tax: **$36.80**

---

[___Promo Code___] [Apply]

---

### Total: **$496.76**

---

[Proceed to Checkout]

---

[✓] I agree to terms and conditions

---

**We Accept**
💳 Visa | Mastercard | PayPal | Apple Pay
</>

---

## Recommended For You

<card>
[feature: 🎧 | Headphone Stand | $24.99]

[feature: 🔌 | Fast Charger | $19.99]

[feature: 📱 | Phone Case | $14.99]
</>

---

[toast: Item added to cart | success]`
  },
  // E-commerce App Bundle - Checkout Page
  {
    id: "ecommerce-checkout",
    name: "🛒 E-commerce: Checkout Page",
    description: "Checkout flow with shipping, payment, and confirmation",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "E-commerce App",
    bundleOrder: 4,
    source: `{ShopFlow - Checkout}
[[ 🛒 ShopFlow | 🔒 Secure Checkout ]]

---

[step: 2/4]

## Checkout

---

<card>
### 1. Shipping Address ✓

John Doe
123 Main Street, Apt 4B
New York, NY 10001
📞 (555) 123-4567

[Edit]
</>

<card>
### 2. Payment Method

(( 💳 Credit Card | PayPal | Apple Pay ))

---

**Card Number**
[____1234 5678 9012 3456____]

**Expiry**          **CVV**
[__12/25__]         [__***__]

**Name on Card**
[____John Doe____]

---

[x] Save card for future purchases
</>

<card>
### 3. Review Order

|Item|Qty|Price|
|Wireless Earbuds Pro|1|$79.99|
|Smart Watch Pro|1|$299.99|
|USB-C Hub|2|$79.98|

---

Subtotal: $459.96
Shipping: Free
Tax: $36.80

---

**Total: $496.76**
</>

---

<Sidebar>
### Order Summary

3 items

---

**Subtotal:** $459.96
**Shipping:** Free
**Tax:** $36.80

---

### Total
## $496.76

---

[Place Order]

---

🔒 Your payment info is secure

---

- ✓ 30-day returns
- ✓ Free shipping
- ✓ Secure payment
</>

---

[toast: Shipping address confirmed | success]`
  },
  // E-commerce App Bundle - Order Confirmation
  {
    id: "ecommerce-confirmation",
    name: "🛒 E-commerce: Order Confirmation",
    description: "Order success page with details and tracking",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "E-commerce App",
    bundleOrder: 5,
    source: `{ShopFlow - Order Confirmed}
[[ 🛒 ShopFlow | Categories | Deals | 🔍 Search... | ❤️ | 🛒 | (@John) ]]

---

<card>
## ✅ Order Confirmed!

Thank you for your purchase, John!

---

**Order Number:** #SHP-2024-78542

**Estimated Delivery:** Jan 5-7, 2025

---

[Track Order]  [View Order Details]
</>

---

## Order Summary

<card>
|Item|Qty|Price|
|Wireless Earbuds Pro|1|$79.99|
|Smart Watch Pro|1|$299.99|
|USB-C Hub|2|$79.98|

---

**Total Paid: $496.76**
</>

---

## Shipping To

<card>
**John Doe**
123 Main Street, Apt 4B
New York, NY 10001

📦 Standard Shipping (3-5 business days)
</>

---

## What's Next?

<card>
[feature: 📧 | Confirmation Email | Check your inbox for order details]

[feature: 📦 | Shipping Updates | We'll notify you when your order ships]

[feature: 📱 | Track Anytime | Use your order number to track delivery]
</>

---

[Continue Shopping]

---

[toast: Order #SHP-2024-78542 placed successfully! | success]

---

[footer: Shop | My Orders | Help :: © 2024 ShopFlow]`
  },
  // E-commerce App Bundle - User Journey
  {
    id: "ecommerce-user-journey",
    name: "🛒 E-commerce: User Journey",
    description: "Complete shopping flow from browsing to purchase",
    category: oe.APP_BUNDLES,
    type: "journey",
    thumbnail: "journey",
    bundle: "E-commerce App",
    bundleOrder: 6,
    source: `[user] Customer

[screen:ecommerce-home] Home Page
[screen:ecommerce-product] Product Page
[screen:ecommerce-cart] Cart
[screen:ecommerce-checkout] Checkout
[success:ecommerce-confirmation] Order Confirmed

Customer -> Home Page
Home Page -browse-> Product Page
Product Page -add to cart-> Cart
Product Page -back-> Home Page
Cart -checkout-> Checkout
Cart -edit-> Cart
Cart -continue-> Home Page
Checkout -place order-> Order Confirmed
Checkout -back-> Cart`
  },
  // SaaS App Bundle - Dashboard
  {
    id: "saas-dashboard",
    name: "📊 SaaS App: Dashboard",
    description: "Main dashboard with metrics and activity",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "SaaS App",
    bundleOrder: 1,
    source: `{TaskFlow - Dashboard}
[[ 📊 TaskFlow | Dashboard | Projects | Team | Reports | [Upgrade] | (@PM) ]]

>> Dashboard

---

[hero: Welcome back, Sarah! | You have 5 tasks due today and 2 meetings scheduled. | View Tasks]

---

## Key Metrics

[stat: 24 | Active Projects | +3]

[stat: 156 | Tasks Completed | +12%]

[stat: 8 | Team Members | +1]

[stat: 94% | On-time Rate | +2%]

---

## Recent Projects

<card>
|Project|Status|Progress|Due Date|
|Website Redesign|{badge:In Progress}|[====----] 60%|Jan 15|
|Mobile App v2|{badge:On Track}|[=======--] 80%|Jan 10|
|API Integration|{badge:At Risk}|[===------] 35%|Jan 8|
|Documentation|{badge:Complete}|[=========] 100%|Done|
</>

---

## Recent Activity

[activity: Sarah completed "Design Review" | 10 min ago]

[activity: Mike commented on "API Endpoints" | 1 hour ago]

[activity: Team meeting scheduled for tomorrow | 2 hours ago]

[activity: New task assigned: "Update landing page" | 3 hours ago]

---

## Upcoming Deadlines

[toast: API Integration due in 2 days | warning]

[toast: Team standup in 30 minutes | info]

---

[fab: +]`
  },
  // SaaS App Bundle - Projects List
  {
    id: "saas-projects",
    name: "📊 SaaS App: Projects",
    description: "Projects list with filters and actions",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "SaaS App",
    bundleOrder: 2,
    source: `{TaskFlow - Projects}
[[ 📊 TaskFlow | Dashboard | Projects | Team | Reports | [Upgrade] | (@PM) ]]

>> Projects

---

## All Projects

<card>
[🔍___Search projects...___] [v All Status] [v All Teams] [+ New Project]
</>

---

<card>
### Website Redesign
**Team Alpha** • 6 members

[====------] 60% Complete

12 tasks remaining • Due Jan 15

{badge:In Progress} {badge:High Priority}

[View] [Edit]
</>

<card>
### Mobile App v2
**Team Beta** • 4 members

[========--] 80% Complete

5 tasks remaining • Due Jan 10

{badge:On Track} {badge:Medium Priority}

[View] [Edit]
</>

<card>
### API Integration
**Team Alpha** • 3 members

[===-------] 35% Complete

18 tasks remaining • Due Jan 8

{badge:At Risk} {badge:High Priority}

[View] [Edit]
</>

---

[< 1 2 3 ... 5 >]

---

[fab: +]`
  },
  // SaaS App Bundle - Settings
  {
    id: "saas-settings",
    name: "📊 SaaS App: Settings",
    description: "Account and app settings page",
    category: oe.APP_BUNDLES,
    type: "wireframe",
    thumbnail: "wireframe",
    bundle: "SaaS App",
    bundleOrder: 3,
    source: `{TaskFlow - Settings}
[[ 📊 TaskFlow | Dashboard | Projects | Team | Reports | [Upgrade] | (@PM) ]]

>> Settings

---

<Sidebar>
## Settings

- 👤 Profile
- 🔔 Notifications
- 🔒 Security
- 💳 Billing
- 🎨 Appearance
- 🔗 Integrations
- 👥 Team
</>

<card>
## Profile Settings

---

[img 1:1]

[Upload Photo]

---

**Full Name**
[____Sarah Johnson____]

**Email**
[____sarah@company.com____]

**Role**
[v Project Manager    ]

**Timezone**
[v UTC-5 (Eastern)    ]

---

**Bio**
[________________________________________]
[________________________________________]

---

[Save Changes]  [Cancel]
</>

---

<card>
## Notification Preferences

---

[x] Email notifications for task assignments
[x] Push notifications for mentions
[ ] Weekly summary email
[x] Desktop notifications
[ ] SMS alerts for urgent items

---

[Save Preferences]
</>

---

[toast: Settings saved successfully | success]`
  },
  // SaaS App Bundle - User Journey
  {
    id: "saas-user-journey",
    name: "📊 SaaS App: User Journey",
    description: "User flow through the SaaS application",
    category: oe.APP_BUNDLES,
    type: "journey",
    thumbnail: "journey",
    bundle: "SaaS App",
    bundleOrder: 4,
    source: `[user] Project Manager

[screen:saas-dashboard] Dashboard
[screen:saas-projects] Projects
[screen:saas-settings] Settings
[success] Task Complete

Project Manager -> Dashboard
Dashboard -view projects-> Projects
Dashboard -settings-> Settings
Projects -select-> Projects
Projects -back-> Dashboard
Settings -save-> Dashboard
Projects -complete task-> Task Complete`
  },
  // ============================================
  // ADDITIONAL TYPES
  // ============================================
  {
    id: "git-feature-flow",
    name: "Git Feature Branch Flow",
    description: "Feature branch workflow with code review",
    category: oe.SOFTWARE_DESIGN,
    type: "git",
    thumbnail: "git",
    source: `commit "Initial setup"
commit "Add project structure"
branch feature/user-auth
commit "Add user model"
commit "Add auth controller"
commit "Add login tests"
checkout main
commit "Update dependencies"
branch feature/dashboard
commit "Add dashboard layout"
commit "Add charts component"
checkout main
merge feature/user-auth
checkout feature/dashboard
commit "Fix responsive layout"
checkout main
merge feature/dashboard
commit "Release v1.0.0"`
  },
  {
    id: "deployment-k8s",
    name: "Kubernetes Deployment",
    description: "K8s cluster with pods and services",
    category: oe.ARCHITECTURE,
    type: "deployment",
    thumbnail: "deployment",
    source: `[cloud] AWS EKS
  [cluster] Production Cluster
    [namespace] default
      [container] nginx-ingress
      [container] cert-manager
    [namespace] app
      [container] api-deployment (3 replicas)
      [container] worker-deployment (2 replicas)
      [container] scheduler
    [namespace] monitoring
      [container] prometheus
      [container] grafana
      [container] alertmanager
  [database] RDS PostgreSQL
  [storage] S3 Bucket
  [cache] ElastiCache Redis
[device] Developer Workstation
[device] CI/CD Pipeline`
  },
  {
    id: "checkout-activity",
    name: "Checkout Activity Flow",
    description: "E-commerce checkout process with decisions",
    category: oe.FLOWCHARTS,
    type: "activity",
    thumbnail: "activity",
    source: `[start]
:View Cart;
:Enter Shipping;
<Address Valid?>
:Enter Payment;
<Payment Method?>
:Process Card;
:Process PayPal;
<Payment Success?>
:Create Order;
:Send Confirmation;
[end]
:Show Error;

start -> View Cart
View Cart -> Enter Shipping
Enter Shipping -> Address Valid?
Address Valid? -> Enter Payment: Yes
Address Valid? -> Enter Shipping: No
Enter Payment -> Payment Method?
Payment Method? -> Process Card: Card
Payment Method? -> Process PayPal: PayPal
Process Card -> Payment Success?
Process PayPal -> Payment Success?
Payment Success? -> Create Order: Yes
Payment Success? -> Show Error: No
Show Error -> Enter Payment
Create Order -> Send Confirmation
Send Confirmation -> end`
  },
  {
    id: "component-architecture",
    name: "Service Components",
    description: "Microservice component relationships",
    category: oe.ARCHITECTURE,
    type: "component",
    thumbnail: "component",
    source: `[component] Web Frontend
[component] Mobile App
[service] API Gateway
[service] Auth Service
[service] User Service
[service] Product Service
[service] Order Service
[service] Payment Service
[database] User DB
[database] Product DB
[database] Order DB
[cache] Redis
[queue] Message Queue

Web Frontend --> API Gateway
Mobile App --> API Gateway
API Gateway --> Auth Service
API Gateway --> User Service
API Gateway --> Product Service
API Gateway --> Order Service
Auth Service -- Redis
User Service --> User DB
Product Service --> Product DB
Order Service --> Order DB
Order Service --> Message Queue
Payment Service --> Message Queue`
  }
];
function Vh() {
  return qc;
}
function rv(o) {
  return qc.find((t) => t.id === o) || Rt().find((t) => t.id === o) || null;
}
function Rt() {
  try {
    const o = localStorage.getItem(Oc.CUSTOM_TEMPLATES);
    if (o)
      return JSON.parse(o);
  } catch (o) {
    console.error("Failed to load custom templates:", o);
  }
  return [];
}
function nv(o) {
  try {
    const t = Rt(), r = {
      ...o,
      id: `custom-${Date.now()}`,
      isCustom: !0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return t.unshift(r), localStorage.setItem(Oc.CUSTOM_TEMPLATES, JSON.stringify(t)), r;
  } catch (t) {
    throw console.error("Failed to save custom template:", t), t;
  }
}
function ov(o) {
  try {
    const r = Rt().filter((n) => n.id !== o);
    return localStorage.setItem(Oc.CUSTOM_TEMPLATES, JSON.stringify(r)), !0;
  } catch (t) {
    return console.error("Failed to delete custom template:", t), !1;
  }
}
function iv() {
  return [...Rt(), ...qc];
}
function av(o) {
  const t = o.toLowerCase();
  return iv().filter(
    (r) => r.name.toLowerCase().includes(t) || r.description.toLowerCase().includes(t) || r.category.toLowerCase().includes(t) || r.type.toLowerCase().includes(t)
  );
}
const Le = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  pink: "#EC4899",
  red: "#EF4444",
  cyan: "#06B6D4",
  violet: "#8B5CF6"
}, sv = {
  flowchart: "🔀",
  sequence: "↔️",
  mindmap: "🧠",
  wbs: "📊",
  erd: "🗃️",
  architecture: "🏗️",
  state: "🔄",
  timeline: "📅",
  orgchart: "👥",
  network: "🌐",
  gantt: "📈",
  class: "📦",
  usecase: "👤",
  pie: "🥧",
  quadrant: "📍",
  git: "🔱",
  deployment: "☁️",
  wireframe: "📱",
  activity: "⚡",
  component: "🧩",
  c4: "🏛️",
  requirement: "📋",
  journey: "🚶"
}, cv = {
  [oe.FLOWCHARTS]: "🔀",
  [oe.ARCHITECTURE]: "🏗️",
  [oe.DATA_MODELING]: "🗃️",
  [oe.PROJECT_MANAGEMENT]: "📊",
  [oe.SOFTWARE_DESIGN]: "💻",
  [oe.BUSINESS]: "💼",
  [oe.NETWORK]: "🌐",
  [oe.UI_DESIGN]: "📱",
  [oe.APP_BUNDLES]: "📦",
  "My Templates": "⭐"
}, Kh = {
  [oe.FLOWCHARTS]: Le.blue,
  [oe.ARCHITECTURE]: Le.purple,
  [oe.DATA_MODELING]: Le.green,
  [oe.PROJECT_MANAGEMENT]: Le.orange,
  [oe.SOFTWARE_DESIGN]: Le.violet,
  [oe.BUSINESS]: Le.pink,
  [oe.NETWORK]: Le.cyan,
  [oe.UI_DESIGN]: Le.red,
  [oe.APP_BUNDLES]: Le.teal,
  "My Templates": Le.orange
};
function lv({ isOpen: o, onClose: t, onApplyTemplate: r, theme: n }) {
  const [i, a] = V(""), [e, s] = V("All"), [h, d] = V(null), [u, f] = V(null), m = _e(null), g = (n == null ? void 0 : n.name) === "dark";
  he(() => {
    o && m.current && setTimeout(() => {
      var w;
      return (w = m.current) == null ? void 0 : w.focus();
    }, 100);
  }, [o]);
  const y = ye(() => {
    let w;
    if (i.trim())
      w = av(i);
    else {
      const E = Vh();
      w = [...Rt(), ...E];
    }
    return e === "All" ? w : e === "My Templates" ? w.filter((E) => E.isCustom) : w.filter((E) => E.category === e);
  }, [i, e]), c = ye(() => {
    const w = Rt(), E = ["All", ...Object.values(oe)];
    return w.length > 0 && E.splice(1, 0, "My Templates"), E;
  }, []), p = (w) => {
    r(w.type, w.source), t();
  }, b = (w) => {
    ov(w), f(null);
  };
  if (!o) return null;
  const x = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      zIndex: 1e3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    modal: {
      width: "90vw",
      maxWidth: "1100px",
      height: "85vh",
      maxHeight: "800px",
      background: g ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))",
      borderRadius: "16px",
      border: `1px solid ${g ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)"}`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
    },
    header: {
      padding: "20px 24px",
      borderBottom: `1px solid ${g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: g ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.05)"
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    headerIcon: {
      fontSize: "24px"
    },
    titleText: {
      color: g ? "#fff" : "#1e293b",
      fontWeight: 600,
      fontSize: "18px"
    },
    subtitle: {
      color: g ? "#888" : "#64748b",
      fontSize: "12px"
    },
    closeButton: {
      background: "transparent",
      border: "none",
      color: g ? "#888" : "#64748b",
      cursor: "pointer",
      fontSize: "24px",
      padding: "4px 8px",
      borderRadius: "6px",
      transition: "all 0.2s"
    },
    searchBar: {
      padding: "16px 24px",
      borderBottom: `1px solid ${g ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
    },
    searchInput: {
      width: "100%",
      padding: "12px 16px",
      paddingLeft: "44px",
      background: g ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: "10px",
      color: g ? "#fff" : "#1e293b",
      fontSize: "14px",
      outline: "none",
      transition: "all 0.2s"
    },
    searchWrapper: {
      position: "relative"
    },
    searchIcon: {
      position: "absolute",
      left: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      color: g ? "#666" : "#94a3b8",
      fontSize: "16px",
      pointerEvents: "none"
    },
    content: {
      display: "flex",
      flex: 1,
      overflow: "hidden"
    },
    sidebar: {
      width: "200px",
      borderRight: `1px solid ${g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      padding: "16px 0",
      overflowY: "auto"
    },
    categoryItem: (w, E) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 20px",
      cursor: "pointer",
      background: w ? g ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)" : "transparent",
      borderLeft: w ? `3px solid ${E || Le.purple}` : "3px solid transparent",
      color: w ? g ? "#fff" : "#1e293b" : g ? "#aaa" : "#64748b",
      fontSize: "13px",
      fontWeight: w ? 600 : 400,
      transition: "all 0.2s"
    }),
    categoryIcon: {
      fontSize: "16px"
    },
    categoryCount: {
      marginLeft: "auto",
      fontSize: "11px",
      padding: "2px 6px",
      background: g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      borderRadius: "10px",
      color: g ? "#888" : "#64748b"
    },
    grid: {
      flex: 1,
      padding: "20px",
      overflowY: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "16px",
      alignContent: "start"
    },
    card: (w, E) => ({
      background: g ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.8)",
      borderRadius: "12px",
      border: `1px solid ${w ? E || Le.purple : g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.2s",
      transform: w ? "translateY(-2px)" : "none",
      boxShadow: w ? `0 8px 20px ${E}20` : "none"
    }),
    cardThumbnail: (w) => ({
      height: "100px",
      background: `linear-gradient(135deg, ${w}15, ${w}05)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "40px",
      borderBottom: `1px solid ${g ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
    }),
    cardContent: {
      padding: "16px",
      minHeight: "100px"
    },
    cardTitle: {
      color: g ? "#ffffff" : "#1e293b",
      fontSize: "15px",
      fontWeight: 700,
      marginBottom: "8px",
      lineHeight: 1.3
    },
    cardDescription: {
      color: g ? "#aaaaaa" : "#64748b",
      fontSize: "13px",
      lineHeight: 1.5,
      marginBottom: "12px",
      minHeight: "36px"
    },
    cardMeta: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "10px"
    },
    typeBadge: (w) => ({
      padding: "3px 8px",
      background: `${w}20`,
      color: w,
      borderRadius: "4px",
      fontSize: "10px",
      fontWeight: 600,
      textTransform: "uppercase"
    }),
    customBadge: {
      padding: "3px 8px",
      background: `${Le.orange}20`,
      color: Le.orange,
      borderRadius: "4px",
      fontSize: "10px"
    },
    bundleBadge: {
      padding: "4px 10px",
      background: `${Le.teal}25`,
      color: Le.teal,
      borderRadius: "6px",
      fontSize: "10px",
      fontWeight: 600,
      border: `1px solid ${Le.teal}40`
    },
    deleteButton: {
      marginLeft: "auto",
      padding: "4px 8px",
      background: `${Le.red}20`,
      color: Le.red,
      border: "none",
      borderRadius: "4px",
      fontSize: "11px",
      cursor: "pointer"
    },
    emptyState: {
      gridColumn: "1 / -1",
      textAlign: "center",
      padding: "60px 20px",
      color: g ? "#666" : "#94a3b8"
    },
    emptyIcon: {
      fontSize: "48px",
      marginBottom: "16px"
    },
    emptyTitle: {
      fontSize: "16px",
      color: g ? "#888" : "#64748b",
      marginBottom: "8px"
    },
    emptyText: {
      fontSize: "13px"
    },
    confirmOverlay: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "12px"
    },
    confirmBox: {
      background: g ? "#1e293b" : "#fff",
      padding: "16px",
      borderRadius: "8px",
      textAlign: "center"
    },
    confirmText: {
      color: g ? "#fff" : "#1e293b",
      fontSize: "13px",
      marginBottom: "12px"
    },
    confirmButtons: {
      display: "flex",
      gap: "8px",
      justifyContent: "center"
    },
    confirmButton: (w) => ({
      padding: "6px 14px",
      background: w ? Le.red : g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      color: w || g ? "#fff" : "#1e293b",
      border: "none",
      borderRadius: "6px",
      fontSize: "12px",
      cursor: "pointer"
    })
  }, C = (w) => {
    const E = [...Rt(), ...Vh()];
    return w === "All" ? E.length : w === "My Templates" ? Rt().length : E.filter((k) => k.category === w).length;
  };
  return /* @__PURE__ */ l("div", { style: x.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: x.modal, onClick: (w) => w.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: x.header, children: [
      /* @__PURE__ */ S("div", { style: x.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: x.headerIcon, children: "📋" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: x.titleText, children: "Template Gallery" }),
          /* @__PURE__ */ l("div", { style: x.subtitle, children: "Choose a template to get started quickly" })
        ] })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          style: x.closeButton,
          onClick: t,
          onMouseEnter: (w) => w.target.style.color = g ? "#fff" : "#1e293b",
          onMouseLeave: (w) => w.target.style.color = g ? "#888" : "#64748b",
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { style: x.searchBar, children: /* @__PURE__ */ S("div", { style: x.searchWrapper, children: [
      /* @__PURE__ */ l("span", { style: x.searchIcon, children: "🔍" }),
      /* @__PURE__ */ l(
        "input",
        {
          ref: m,
          type: "text",
          placeholder: "Search templates by name, type, or category...",
          value: i,
          onChange: (w) => a(w.target.value),
          style: x.searchInput
        }
      )
    ] }) }),
    /* @__PURE__ */ S("div", { style: x.content, children: [
      /* @__PURE__ */ l("div", { style: x.sidebar, children: c.map((w) => /* @__PURE__ */ S(
        "div",
        {
          style: x.categoryItem(
            e === w,
            Kh[w]
          ),
          onClick: () => s(w),
          onMouseEnter: (E) => {
            e !== w && (E.currentTarget.style.background = g ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)");
          },
          onMouseLeave: (E) => {
            e !== w && (E.currentTarget.style.background = "transparent");
          },
          children: [
            /* @__PURE__ */ l("span", { style: x.categoryIcon, children: cv[w] || "📁" }),
            /* @__PURE__ */ l("span", { children: w }),
            /* @__PURE__ */ l("span", { style: x.categoryCount, children: C(w) })
          ]
        },
        w
      )) }),
      /* @__PURE__ */ l("div", { style: x.grid, children: y.length === 0 ? /* @__PURE__ */ S("div", { style: x.emptyState, children: [
        /* @__PURE__ */ l("div", { style: x.emptyIcon, children: "🔍" }),
        /* @__PURE__ */ l("div", { style: x.emptyTitle, children: "No templates found" }),
        /* @__PURE__ */ l("div", { style: x.emptyText, children: "Try a different search term or category" })
      ] }) : y.map((w) => {
        var A;
        const E = Kh[w.category] || Le.purple, k = h === w.id, M = u === w.id;
        return /* @__PURE__ */ S(
          "div",
          {
            style: { ...x.card(k, E), position: "relative" },
            onMouseEnter: () => d(w.id),
            onMouseLeave: () => d(null),
            onClick: () => !M && p(w),
            children: [
              /* @__PURE__ */ l("div", { style: x.cardThumbnail(E), children: sv[w.type] || "📄" }),
              /* @__PURE__ */ S("div", { style: x.cardContent, children: [
                /* @__PURE__ */ l("div", { style: x.cardTitle, children: w.name || "Untitled" }),
                /* @__PURE__ */ l("div", { style: x.cardDescription, children: w.description || "No description" }),
                /* @__PURE__ */ S("div", { style: x.cardMeta, children: [
                  /* @__PURE__ */ l("span", { style: x.typeBadge(E), children: (A = w.type) == null ? void 0 : A.toUpperCase() }),
                  w.bundle && /* @__PURE__ */ l("span", { style: x.bundleBadge, children: w.bundle }),
                  w.isCustom && /* @__PURE__ */ S(yt, { children: [
                    /* @__PURE__ */ l("span", { style: x.customBadge, children: "Custom" }),
                    /* @__PURE__ */ l(
                      "button",
                      {
                        style: x.deleteButton,
                        onClick: (I) => {
                          I.stopPropagation(), f(w.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ] })
              ] }),
              M && /* @__PURE__ */ l("div", { style: x.confirmOverlay, onClick: (I) => I.stopPropagation(), children: /* @__PURE__ */ S("div", { style: x.confirmBox, children: [
                /* @__PURE__ */ l("div", { style: x.confirmText, children: "Delete this template?" }),
                /* @__PURE__ */ S("div", { style: x.confirmButtons, children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      style: x.confirmButton(!1),
                      onClick: () => f(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "button",
                    {
                      style: x.confirmButton(!0),
                      onClick: () => b(w.id),
                      children: "Delete"
                    }
                  )
                ] })
              ] }) })
            ]
          },
          w.id
        );
      }) })
    ] })
  ] }) });
}
const wt = {
  purple: "#7C3AED",
  green: "#10B981",
  red: "#EF4444"
};
function dv({ isOpen: o, onClose: t, diagramType: r, diagramSource: n, theme: i }) {
  const [a, e] = V(""), [s, h] = V(""), [d, u] = V(oe.FLOWCHARTS), [f, m] = V(""), [g, y] = V(!1), c = _e(null), p = (i == null ? void 0 : i.name) === "dark";
  he(() => {
    o && (e(""), h(""), u(oe.FLOWCHARTS), m(""), y(!1), setTimeout(() => {
      var C;
      return (C = c.current) == null ? void 0 : C.focus();
    }, 100));
  }, [o]);
  const b = () => {
    if (!a.trim()) {
      m("Please enter a template name");
      return;
    }
    if (!(n != null && n.trim())) {
      m("No diagram content to save");
      return;
    }
    try {
      nv({
        name: a.trim(),
        description: s.trim() || "Custom template",
        category: d,
        type: r,
        source: n
      }), y(!0), setTimeout(() => {
        t();
      }, 1500);
    } catch (C) {
      m("Failed to save template: " + C.message);
    }
  };
  if (!o) return null;
  const x = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      zIndex: 1001,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    modal: {
      width: "90vw",
      maxWidth: "450px",
      background: p ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))",
      borderRadius: "16px",
      border: `1px solid ${p ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)"}`,
      overflow: "hidden",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
    },
    header: {
      padding: "20px 24px",
      borderBottom: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: p ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.05)"
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    headerIcon: {
      fontSize: "24px"
    },
    titleText: {
      color: p ? "#fff" : "#1e293b",
      fontWeight: 600,
      fontSize: "18px"
    },
    closeButton: {
      background: "transparent",
      border: "none",
      color: p ? "#888" : "#64748b",
      cursor: "pointer",
      fontSize: "24px",
      padding: "4px 8px",
      borderRadius: "6px"
    },
    content: {
      padding: "24px"
    },
    formGroup: {
      marginBottom: "20px"
    },
    label: {
      display: "block",
      color: p ? "#aaa" : "#64748b",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      marginBottom: "8px"
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      background: p ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: "8px",
      color: p ? "#fff" : "#1e293b",
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box"
    },
    textarea: {
      width: "100%",
      padding: "12px 14px",
      background: p ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: "8px",
      color: p ? "#fff" : "#1e293b",
      fontSize: "14px",
      outline: "none",
      minHeight: "80px",
      resize: "vertical",
      fontFamily: "inherit",
      boxSizing: "border-box"
    },
    select: {
      width: "100%",
      padding: "12px 14px",
      background: p ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: "8px",
      color: p ? "#fff" : "#1e293b",
      fontSize: "14px",
      outline: "none",
      cursor: "pointer",
      boxSizing: "border-box"
    },
    typeInfo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 14px",
      background: p ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.05)",
      borderRadius: "8px",
      border: `1px solid ${p ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)"}`
    },
    typeLabel: {
      color: p ? "#888" : "#64748b",
      fontSize: "12px"
    },
    typeBadge: {
      padding: "4px 10px",
      background: `${wt.purple}20`,
      color: wt.purple,
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase"
    },
    error: {
      padding: "10px 14px",
      background: `${wt.red}15`,
      border: `1px solid ${wt.red}40`,
      borderRadius: "8px",
      color: wt.red,
      fontSize: "13px",
      marginBottom: "16px"
    },
    success: {
      padding: "10px 14px",
      background: `${wt.green}15`,
      border: `1px solid ${wt.green}40`,
      borderRadius: "8px",
      color: wt.green,
      fontSize: "13px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    footer: {
      padding: "16px 24px",
      borderTop: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px"
    },
    button: (C) => ({
      padding: "10px 20px",
      background: C ? wt.purple : p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      color: C || p ? "#fff" : "#1e293b",
      border: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.2s"
    })
  };
  return /* @__PURE__ */ l("div", { style: x.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: x.modal, onClick: (C) => C.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: x.header, children: [
      /* @__PURE__ */ S("div", { style: x.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: x.headerIcon, children: "💾" }),
        /* @__PURE__ */ l("span", { style: x.titleText, children: "Save as Template" })
      ] }),
      /* @__PURE__ */ l("button", { style: x.closeButton, onClick: t, children: "×" })
    ] }),
    /* @__PURE__ */ S("div", { style: x.content, children: [
      f && /* @__PURE__ */ l("div", { style: x.error, children: f }),
      g && /* @__PURE__ */ S("div", { style: x.success, children: [
        /* @__PURE__ */ l("span", { children: "✓" }),
        "Template saved successfully!"
      ] }),
      /* @__PURE__ */ S("div", { style: x.formGroup, children: [
        /* @__PURE__ */ l("label", { style: x.label, children: "Template Name" }),
        /* @__PURE__ */ l(
          "input",
          {
            ref: c,
            type: "text",
            placeholder: "Enter template name...",
            value: a,
            onChange: (C) => e(C.target.value),
            style: x.input,
            disabled: g
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { style: x.formGroup, children: [
        /* @__PURE__ */ l("label", { style: x.label, children: "Description" }),
        /* @__PURE__ */ l(
          "textarea",
          {
            placeholder: "Describe what this template is for...",
            value: s,
            onChange: (C) => h(C.target.value),
            style: x.textarea,
            disabled: g
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { style: x.formGroup, children: [
        /* @__PURE__ */ l("label", { style: x.label, children: "Category" }),
        /* @__PURE__ */ l(
          "select",
          {
            value: d,
            onChange: (C) => u(C.target.value),
            style: x.select,
            disabled: g,
            children: Object.values(oe).map((C) => /* @__PURE__ */ l("option", { value: C, children: C }, C))
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { style: x.formGroup, children: [
        /* @__PURE__ */ l("label", { style: x.label, children: "Diagram Type" }),
        /* @__PURE__ */ S("div", { style: x.typeInfo, children: [
          /* @__PURE__ */ l("span", { style: x.typeLabel, children: "This template will be saved as:" }),
          /* @__PURE__ */ l("span", { style: x.typeBadge, children: r })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: x.footer, children: [
      /* @__PURE__ */ l(
        "button",
        {
          style: x.button(!1),
          onClick: t,
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          style: x.button(!0),
          onClick: b,
          disabled: g,
          children: g ? "Saved!" : "Save Template"
        }
      )
    ] })
  ] }) });
}
const pc = {
  purple: "#7C3AED",
  green: "#10B981"
};
function Tr({
  label: o,
  icon: t,
  items: r,
  theme: n,
  color: i = pc.purple,
  disabled: a = !1,
  showCaret: e = !0
}) {
  const [s, h] = V(!1), d = _e(null), u = (n == null ? void 0 : n.name) === "dark";
  he(() => {
    function b(x) {
      d.current && !d.current.contains(x.target) && h(!1);
    }
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, []);
  const f = (b) => {
    b.onClick && !b.disabled && (b.onClick(), h(!1));
  }, m = {
    container: {
      position: "relative",
      display: "inline-block"
    },
    button: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 12px",
      background: s ? `${i}30` : `${i}20`,
      border: `1px solid ${s ? i : `${i}50`}`,
      borderRadius: 6,
      color: i,
      fontSize: "0.8rem",
      fontWeight: 500,
      cursor: a ? "not-allowed" : "pointer",
      opacity: a ? 0.5 : 1,
      transition: "all 0.15s ease",
      whiteSpace: "nowrap"
    },
    caret: {
      fontSize: "0.65rem",
      transition: "transform 0.15s ease",
      transform: s ? "rotate(180deg)" : "rotate(0deg)"
    },
    dropdown: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      minWidth: "180px",
      background: u ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
      border: `1px solid ${u ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)"}`,
      borderRadius: 8,
      boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
      zIndex: 1e3,
      overflow: "hidden",
      backdropFilter: "blur(10px)"
    },
    section: {
      padding: "6px 0",
      borderBottom: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
    },
    sectionLast: {
      padding: "6px 0"
    },
    sectionLabel: {
      padding: "4px 12px",
      fontSize: "0.7rem",
      fontWeight: 600,
      color: u ? "#666" : "#94a3b8",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    item: (b, x) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 12px",
      fontSize: "0.85rem",
      color: b.disabled ? u ? "#555" : "#cbd5e1" : u ? "#e2e8f0" : "#334155",
      cursor: b.disabled ? "not-allowed" : "pointer",
      background: x && !b.disabled ? u ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)" : "transparent",
      opacity: b.disabled ? 0.5 : 1,
      transition: "background 0.1s ease"
    }),
    itemIcon: {
      fontSize: "0.9rem",
      width: "20px",
      textAlign: "center"
    },
    itemContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    itemLabel: {
      fontWeight: 500
    },
    itemDescription: {
      fontSize: "0.75rem",
      color: u ? "#666" : "#94a3b8",
      marginTop: "2px"
    },
    itemShortcut: {
      fontSize: "0.7rem",
      color: u ? "#555" : "#94a3b8",
      fontFamily: "monospace",
      background: u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      padding: "2px 5px",
      borderRadius: 3
    },
    itemBadge: (b) => ({
      fontSize: "0.65rem",
      padding: "2px 6px",
      background: `${b}20`,
      color: b,
      borderRadius: 4,
      fontWeight: 600
    }),
    divider: {
      height: 1,
      background: u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      margin: "4px 0"
    }
  }, g = [];
  let y = { label: null, items: [] };
  r.forEach((b, x) => {
    b.type === "divider" ? y.items.length > 0 && (g.push(y), y = { label: null, items: [] }) : b.type === "section" ? (y.items.length > 0 && g.push(y), y = { label: b.label, items: [] }) : y.items.push(b);
  }), y.items.length > 0 && g.push(y);
  const [c, p] = V(null);
  return /* @__PURE__ */ S("div", { ref: d, style: m.container, children: [
    /* @__PURE__ */ S(
      "button",
      {
        style: m.button,
        onClick: () => !a && h(!s),
        onMouseEnter: (b) => {
          a || (b.currentTarget.style.background = `${i}30`);
        },
        onMouseLeave: (b) => {
          !a && !s && (b.currentTarget.style.background = `${i}20`);
        },
        children: [
          t && /* @__PURE__ */ l("span", { children: t }),
          /* @__PURE__ */ l("span", { children: o }),
          e && /* @__PURE__ */ l("span", { style: m.caret, children: "▼" })
        ]
      }
    ),
    s && /* @__PURE__ */ l("div", { style: m.dropdown, children: g.map((b, x) => /* @__PURE__ */ S(
      "div",
      {
        style: x < g.length - 1 ? m.section : m.sectionLast,
        children: [
          b.label && /* @__PURE__ */ l("div", { style: m.sectionLabel, children: b.label }),
          b.items.map((C, w) => /* @__PURE__ */ S(
            "div",
            {
              style: m.item(C, c === `${x}-${w}`),
              onClick: () => f(C),
              onMouseEnter: () => p(`${x}-${w}`),
              onMouseLeave: () => p(null),
              children: [
                C.icon && /* @__PURE__ */ l("span", { style: m.itemIcon, children: C.icon }),
                /* @__PURE__ */ S("div", { style: m.itemContent, children: [
                  /* @__PURE__ */ l("span", { style: m.itemLabel, children: C.label }),
                  C.description && /* @__PURE__ */ l("span", { style: m.itemDescription, children: C.description })
                ] }),
                C.shortcut && /* @__PURE__ */ l("span", { style: m.itemShortcut, children: C.shortcut }),
                C.badge && /* @__PURE__ */ l("span", { style: m.itemBadge(C.badgeColor || pc.purple), children: C.badge }),
                C.active && /* @__PURE__ */ l("span", { style: { color: pc.green }, children: "✓" })
              ]
            },
            w
          ))
        ]
      },
      x
    )) })
  ] });
}
const gt = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  pink: "#EC4899",
  cyan: "#06B6D4"
}, uv = {
  "Flow & Process": {
    icon: "🔀",
    color: gt.blue,
    types: ["flowchart", "activity", "state", "journey", "swimlane", "sankey"]
  },
  Architecture: {
    icon: "🏗️",
    color: gt.purple,
    types: ["architecture", "deployment", "component", "c4", "network"]
  },
  "Data & Structure": {
    icon: "📊",
    color: gt.green,
    types: ["erd", "class", "mindmap", "orgchart"]
  },
  Planning: {
    icon: "📅",
    color: gt.orange,
    types: ["gantt", "timeline", "requirement"]
  },
  Interaction: {
    icon: "🔄",
    color: gt.cyan,
    types: ["sequence", "usecase"]
  },
  Visualization: {
    icon: "📈",
    color: gt.pink,
    types: ["pie", "quadrant", "wireframe", "git"]
  }
}, Xh = {
  flowchart: { icon: "📈", name: "Flowchart", desc: "Process flows" },
  activity: { icon: "🔄", name: "Activity", desc: "UML activity" },
  state: { icon: "⚡", name: "State Machine", desc: "State transitions" },
  journey: { icon: "🚶", name: "User Journey", desc: "User experience" },
  architecture: { icon: "🏗️", name: "Architecture", desc: "System design" },
  deployment: { icon: "🚀", name: "Deployment", desc: "Infrastructure" },
  component: { icon: "📦", name: "Component", desc: "Components" },
  c4: { icon: "🏛️", name: "C4 Model", desc: "C4 architecture" },
  network: { icon: "🌐", name: "Network", desc: "Network topology" },
  erd: { icon: "📊", name: "ERD", desc: "Database schema" },
  class: { icon: "📐", name: "Class Diagram", desc: "OOP classes" },
  mindmap: { icon: "🧠", name: "Mind Map", desc: "Ideas hierarchy" },
  orgchart: { icon: "👥", name: "Org Chart", desc: "Organization" },
  gantt: { icon: "📊", name: "Gantt Chart", desc: "Project timeline" },
  timeline: { icon: "📅", name: "Timeline", desc: "Events timeline" },
  requirement: { icon: "📋", name: "Requirements", desc: "Specifications" },
  sequence: { icon: "🔄", name: "Sequence", desc: "Message flow" },
  usecase: { icon: "👤", name: "Use Case", desc: "Actor interactions" },
  pie: { icon: "🥧", name: "Pie Chart", desc: "Data distribution" },
  quadrant: { icon: "📊", name: "Quadrant", desc: "Priority matrix" },
  wireframe: { icon: "📱", name: "Wireframe", desc: "UI mockups" },
  git: { icon: "🌿", name: "Git Graph", desc: "Branch history" },
  swimlane: { icon: "🏊", name: "Swimlane", desc: "Process with roles" },
  sankey: { icon: "🌊", name: "Sankey", desc: "Flow visualization" }
};
function pv({ activeType: o, onTypeChange: t, theme: r }) {
  const [n, i] = V(!1), [a, e] = V(null), s = _e(null), h = (r == null ? void 0 : r.name) === "dark";
  he(() => {
    function m(g) {
      s.current && !s.current.contains(g.target) && i(!1);
    }
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const d = Xh[o] || { icon: "📄", name: o }, u = {
    container: {
      position: "relative"
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 12px",
      background: n ? h ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)" : h ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.1)",
      border: `1px solid ${n ? gt.purple : "rgba(124,58,237,0.3)"}`,
      borderRadius: 8,
      cursor: "pointer",
      transition: "all 0.15s ease"
    },
    triggerIcon: {
      fontSize: "1rem"
    },
    triggerText: {
      color: h ? "#fff" : "#1e293b",
      fontSize: "0.9rem",
      fontWeight: 600
    },
    triggerDesc: {
      color: h ? "#888" : "#64748b",
      fontSize: "0.75rem"
    },
    caret: {
      color: h ? "#888" : "#64748b",
      fontSize: "0.65rem",
      marginLeft: "4px",
      transition: "transform 0.15s ease",
      transform: n ? "rotate(180deg)" : "rotate(0deg)"
    },
    dropdown: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      width: "320px",
      maxHeight: "70vh",
      overflowY: "auto",
      background: h ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
      border: `1px solid ${h ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)"}`,
      borderRadius: 12,
      boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
      zIndex: 1e3,
      backdropFilter: "blur(10px)"
    },
    category: {
      padding: "8px 0",
      borderBottom: `1px solid ${h ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
    },
    categoryLast: {
      padding: "8px 0"
    },
    categoryHeader: (m) => ({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 14px",
      fontSize: "0.75rem",
      fontWeight: 600,
      color: m,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    }),
    typeGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "4px",
      padding: "0 8px"
    },
    typeItem: (m, g) => ({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 12px",
      borderRadius: 6,
      cursor: "pointer",
      background: m ? h ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.15)" : g ? h ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" : "transparent",
      border: m ? `1px solid ${gt.purple}` : "1px solid transparent",
      transition: "all 0.1s ease"
    }),
    typeIcon: {
      fontSize: "1rem"
    },
    typeContent: {
      flex: 1,
      minWidth: 0
    },
    typeName: (m) => ({
      fontSize: "0.85rem",
      fontWeight: m ? 600 : 500,
      color: m ? gt.purple : h ? "#e2e8f0" : "#334155",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }),
    typeDesc: {
      fontSize: "0.7rem",
      color: h ? "#666" : "#94a3b8"
    },
    checkmark: {
      color: gt.green,
      fontSize: "0.8rem"
    }
  }, f = Object.entries(uv);
  return /* @__PURE__ */ S("div", { ref: s, style: u.container, children: [
    /* @__PURE__ */ S(
      "div",
      {
        style: u.trigger,
        onClick: () => i(!n),
        onMouseEnter: (m) => {
          n || (m.currentTarget.style.background = h ? "rgba(124,58,237,0.25)" : "rgba(124,58,237,0.15)");
        },
        onMouseLeave: (m) => {
          n || (m.currentTarget.style.background = h ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.1)");
        },
        children: [
          /* @__PURE__ */ l("span", { style: u.triggerIcon, children: d.icon }),
          /* @__PURE__ */ S("div", { children: [
            /* @__PURE__ */ l("div", { style: u.triggerText, children: d.name }),
            /* @__PURE__ */ l("div", { style: u.triggerDesc, children: d.desc })
          ] }),
          /* @__PURE__ */ l("span", { style: u.caret, children: "▼" })
        ]
      }
    ),
    n && /* @__PURE__ */ l("div", { style: u.dropdown, children: f.map(([m, g], y) => /* @__PURE__ */ S(
      "div",
      {
        style: y < f.length - 1 ? u.category : u.categoryLast,
        children: [
          /* @__PURE__ */ S("div", { style: u.categoryHeader(g.color), children: [
            /* @__PURE__ */ l("span", { children: g.icon }),
            /* @__PURE__ */ l("span", { children: m })
          ] }),
          /* @__PURE__ */ l("div", { style: u.typeGrid, children: g.types.map((c) => {
            const p = Xh[c], b = c === o, x = a === c;
            return /* @__PURE__ */ S(
              "div",
              {
                style: u.typeItem(b, x),
                onClick: () => {
                  t(c), i(!1);
                },
                onMouseEnter: () => e(c),
                onMouseLeave: () => e(null),
                children: [
                  /* @__PURE__ */ l("span", { style: u.typeIcon, children: p.icon }),
                  /* @__PURE__ */ S("div", { style: u.typeContent, children: [
                    /* @__PURE__ */ l("div", { style: u.typeName(b), children: p.name }),
                    /* @__PURE__ */ l("div", { style: u.typeDesc, children: p.desc })
                  ] }),
                  b && /* @__PURE__ */ l("span", { style: u.checkmark, children: "✓" })
                ]
              },
              c
            );
          }) })
        ]
      },
      m
    )) })
  ] });
}
const J = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  pink: "#EC4899",
  red: "#EF4444",
  cyan: "#06B6D4",
  violet: "#8B5CF6",
  teal: "#14B8A6",
  amber: "#D97706",
  emerald: "#059669",
  sky: "#0284C7"
}, hv = {
  flowchart: {
    name: "Flowchart",
    categories: [
      {
        name: "Flow Control",
        nodes: [
          { type: "start", icon: "▶️", label: "Start", color: J.green, dsl: "(start) Start" },
          { type: "end", icon: "⏹️", label: "End", color: J.red, dsl: "(end) End" },
          { type: "decision", icon: "◇", label: "Decision", color: J.orange, dsl: "(decision) Decision?" }
        ]
      },
      {
        name: "Actions",
        nodes: [
          { type: "process", icon: "⬜", label: "Process", color: J.blue, dsl: "(process) Process" },
          { type: "action", icon: "⚡", label: "Action", color: J.purple, dsl: "(action) Action" },
          { type: "io", icon: "▱", label: "Input/Output", color: J.cyan, dsl: "(io) Input/Output" }
        ]
      }
    ]
  },
  architecture: {
    name: "Architecture",
    categories: [
      {
        name: "Frontend",
        nodes: [
          { type: "clients", icon: "👥", label: "Client", color: J.pink, dsl: "[clients] Client" },
          { type: "gateway", icon: "🚪", label: "Gateway", color: J.orange, dsl: "[gateway] API Gateway" }
        ]
      },
      {
        name: "Backend",
        nodes: [
          { type: "services", icon: "⚙️", label: "Service", color: J.blue, dsl: "[services] Service" },
          { type: "data", icon: "🗄️", label: "Database", color: J.emerald, dsl: "[data] Database" },
          { type: "cache", icon: "⚡", label: "Cache", color: J.red, dsl: "[cache] Redis" },
          { type: "queue", icon: "📨", label: "Queue", color: J.amber, dsl: "[queue] Message Queue" },
          { type: "storage", icon: "📦", label: "Storage", color: J.teal, dsl: "[storage] S3 Bucket" }
        ]
      }
    ]
  },
  journey: {
    name: "User Journey",
    categories: [
      {
        name: "People",
        nodes: [
          { type: "actor", icon: "👤", label: "Actor", color: J.pink, dsl: "[actor] User" },
          { type: "user", icon: "🧑", label: "User", color: J.pink, dsl: "[user] Customer" }
        ]
      },
      {
        name: "Touchpoints",
        nodes: [
          { type: "page", icon: "📱", label: "Page", color: J.cyan, dsl: "[page] Landing Page" },
          { type: "screen", icon: "🖥️", label: "Screen", color: J.cyan, dsl: "[screen] Dashboard" },
          { type: "action", icon: "👆", label: "Action", color: J.purple, dsl: "[action] Click Button" },
          { type: "form", icon: "📝", label: "Form", color: J.orange, dsl: "[form] Sign Up Form" }
        ]
      },
      {
        name: "Communication",
        nodes: [
          { type: "email", icon: "✉️", label: "Email", color: J.amber, dsl: "[email] Welcome Email" },
          { type: "notification", icon: "🔔", label: "Notification", color: J.red, dsl: "[notification] Alert" }
        ]
      },
      {
        name: "Outcomes",
        nodes: [
          { type: "success", icon: "✅", label: "Success", color: J.green, dsl: "[success] Completed" },
          { type: "error", icon: "❌", label: "Error", color: J.red, dsl: "[error] Failed" },
          { type: "milestone", icon: "🎯", label: "Milestone", color: J.green, dsl: "[milestone] Goal Reached" },
          { type: "decision", icon: "❓", label: "Decision", color: J.orange, dsl: "[decision] Choose Path" }
        ]
      }
    ]
  },
  state: {
    name: "State Machine",
    categories: [
      {
        name: "States",
        nodes: [
          { type: "initial", icon: "▶️", label: "Initial", color: J.green, dsl: "(initial) Initial" },
          { type: "state", icon: "⬜", label: "State", color: J.blue, dsl: "State" },
          { type: "final", icon: "⏹️", label: "Final", color: J.red, dsl: "(final) Final" }
        ]
      }
    ]
  },
  erd: {
    name: "ERD",
    categories: [
      {
        name: "Tables",
        nodes: [
          { type: "table", icon: "📋", label: "Table", color: J.blue, dsl: `CREATE TABLE table_name (
  id UUID PRIMARY KEY,
  name VARCHAR(255)
);` },
          { type: "pk", icon: "🔑", label: "Primary Key", color: J.amber, dsl: "  id UUID PRIMARY KEY," },
          { type: "fk", icon: "🔗", label: "Foreign Key", color: J.purple, dsl: "  ref_id UUID REFERENCES other_table(id)," },
          { type: "column", icon: "▪️", label: "Column", color: J.cyan, dsl: "  column_name VARCHAR(255)," }
        ]
      }
    ]
  },
  sequence: {
    name: "Sequence",
    categories: [
      {
        name: "Participants",
        nodes: [
          { type: "participant", icon: "👤", label: "Participant", color: J.blue, dsl: "participant Actor" }
        ]
      },
      {
        name: "Messages",
        nodes: [
          { type: "request", icon: "➡️", label: "Request", color: J.green, dsl: "A -> B: Request" },
          { type: "response", icon: "⬅️", label: "Response", color: J.orange, dsl: "B --> A: Response" }
        ]
      }
    ]
  },
  mindmap: {
    name: "Mind Map",
    categories: [
      {
        name: "Nodes",
        nodes: [
          { type: "root", icon: "🌳", label: "Root", color: J.purple, dsl: "Root Topic" },
          { type: "branch", icon: "🌿", label: "Branch", color: J.blue, dsl: "  Branch" },
          { type: "leaf", icon: "🍃", label: "Leaf", color: J.green, dsl: "    Leaf" }
        ]
      }
    ]
  },
  class: {
    name: "Class Diagram",
    categories: [
      {
        name: "Classes",
        nodes: [
          { type: "class", icon: "📦", label: "Class", color: J.blue, dsl: `class ClassName
  + property: type
  + method(): void` },
          { type: "interface", icon: "📄", label: "Interface", color: J.purple, dsl: `interface IName
  + method(): void` }
        ]
      },
      {
        name: "Members",
        nodes: [
          { type: "public", icon: "➕", label: "Public", color: J.green, dsl: "  + publicMember: type" },
          { type: "private", icon: "➖", label: "Private", color: J.red, dsl: "  - privateMember: type" },
          { type: "protected", icon: "#️⃣", label: "Protected", color: J.orange, dsl: "  # protectedMember: type" }
        ]
      }
    ]
  },
  deployment: {
    name: "Deployment",
    categories: [
      {
        name: "Infrastructure",
        nodes: [
          { type: "cloud", icon: "☁️", label: "Cloud", color: J.sky, dsl: "[cloud] AWS" },
          { type: "cluster", icon: "🔷", label: "Cluster", color: J.teal, dsl: "  [cluster] Kubernetes" },
          { type: "container", icon: "📦", label: "Container", color: J.cyan, dsl: "    [container] Service" }
        ]
      },
      {
        name: "Data",
        nodes: [
          { type: "database", icon: "🗄️", label: "Database", color: J.green, dsl: "  [database] PostgreSQL" },
          { type: "storage", icon: "💾", label: "Storage", color: J.emerald, dsl: "  [storage] S3" }
        ]
      },
      {
        name: "Clients",
        nodes: [
          { type: "device", icon: "💻", label: "Device", color: J.pink, dsl: "[device] Browser" },
          { type: "server", icon: "🖥️", label: "Server", color: J.violet, dsl: "[server] Web Server" }
        ]
      }
    ]
  },
  network: {
    name: "Network",
    categories: [
      {
        name: "Devices",
        nodes: [
          { type: "cloud", icon: "☁️", label: "Cloud", color: J.sky, dsl: "[cloud] Internet" },
          { type: "firewall", icon: "🛡️", label: "Firewall", color: J.red, dsl: "[firewall] Firewall (10.0.0.1)" },
          { type: "router", icon: "📡", label: "Router", color: J.orange, dsl: "[router] Router (10.0.0.2)" },
          { type: "switch", icon: "🔀", label: "Switch", color: J.blue, dsl: "[switch] Switch (10.0.0.3)" },
          { type: "server", icon: "🖥️", label: "Server", color: J.purple, dsl: "[server] Server (10.0.0.10)" },
          { type: "computer", icon: "💻", label: "Computer", color: J.green, dsl: "[computer] Workstation" }
        ]
      }
    ]
  },
  usecase: {
    name: "Use Case",
    categories: [
      {
        name: "Elements",
        nodes: [
          { type: "actor", icon: "👤", label: "Actor", color: J.blue, dsl: "actor User" },
          { type: "usecase", icon: "⭕", label: "Use Case", color: J.purple, dsl: "(Use Case Name)" }
        ]
      }
    ]
  },
  component: {
    name: "Component",
    categories: [
      {
        name: "Components",
        nodes: [
          { type: "component", icon: "🧩", label: "Component", color: J.purple, dsl: "[component] Component" },
          { type: "service", icon: "⚙️", label: "Service", color: J.blue, dsl: "[service] Service" },
          { type: "api", icon: "🔌", label: "API", color: J.orange, dsl: "[api] API Gateway" },
          { type: "database", icon: "🗄️", label: "Database", color: J.green, dsl: "[database] Database" },
          { type: "cache", icon: "⚡", label: "Cache", color: J.red, dsl: "[cache] Redis" }
        ]
      }
    ]
  },
  c4: {
    name: "C4 Model",
    categories: [
      {
        name: "Elements",
        nodes: [
          { type: "person", icon: "👤", label: "Person", color: J.blue, dsl: "[person] User: Description" },
          { type: "system", icon: "🏢", label: "System", color: J.purple, dsl: "[system] System: Description" },
          { type: "container", icon: "📦", label: "Container", color: J.cyan, dsl: "[container] Container: Description" },
          { type: "component", icon: "🧩", label: "Component", color: J.green, dsl: "[component] Component: Description" },
          { type: "external", icon: "🌐", label: "External", color: J.orange, dsl: "[external] External: Description" }
        ]
      }
    ]
  },
  activity: {
    name: "Activity",
    categories: [
      {
        name: "Control",
        nodes: [
          { type: "start", icon: "▶️", label: "Start", color: J.green, dsl: "[start]" },
          { type: "end", icon: "⏹️", label: "End", color: J.red, dsl: "[end]" },
          { type: "decision", icon: "◇", label: "Decision", color: J.orange, dsl: "<Decision?>" }
        ]
      },
      {
        name: "Actions",
        nodes: [
          { type: "action", icon: "⬜", label: "Action", color: J.blue, dsl: ":Action;" }
        ]
      }
    ]
  },
  gantt: {
    name: "Gantt",
    categories: [
      {
        name: "Tasks",
        nodes: [
          { type: "task", icon: "📋", label: "Task", color: J.blue, dsl: "Task Name, 0, 3" },
          { type: "milestone", icon: "🎯", label: "Milestone", color: J.green, dsl: "Milestone, 5, 0" }
        ]
      }
    ]
  },
  timeline: {
    name: "Timeline",
    categories: [
      {
        name: "Events",
        nodes: [
          { type: "event", icon: "📅", label: "Event", color: J.blue, dsl: "[Date] Event Title | Description" },
          { type: "milestone", icon: "⭐", label: "Milestone", color: J.green, dsl: "[Date] *Milestone | Description" }
        ]
      }
    ]
  },
  wireframe: {
    name: "Wireframe",
    categories: [
      {
        name: "Layout",
        nodes: [
          { type: "window", icon: "🪟", label: "Window", color: J.blue, dsl: "{Window Title}" },
          { type: "navbar", icon: "📊", label: "Navbar", color: J.purple, dsl: "[[ Home | About | Contact ]]" },
          { type: "tabs", icon: "📑", label: "Tabs", color: J.cyan, dsl: "(( Tab1 | Tab2 | Tab3 ))" },
          { type: "card", icon: "🃏", label: "Card", color: J.orange, dsl: `<Card Title>
Content here
</Card>` }
        ]
      },
      {
        name: "Elements",
        nodes: [
          { type: "button", icon: "🔘", label: "Button", color: J.green, dsl: "[Button Text]" },
          { type: "input", icon: "📝", label: "Input", color: J.blue, dsl: "[text: Placeholder...]" },
          { type: "search", icon: "🔍", label: "Search", color: J.purple, dsl: "[search: Search...]" },
          { type: "dropdown", icon: "📋", label: "Dropdown", color: J.orange, dsl: "[v Select Option]" }
        ]
      },
      {
        name: "Content",
        nodes: [
          { type: "heading", icon: "📰", label: "Heading", color: J.blue, dsl: "# Heading Text" },
          { type: "divider", icon: "➖", label: "Divider", color: J.cyan, dsl: "---" },
          { type: "table", icon: "📊", label: "Table", color: J.purple, dsl: `|Col1|Col2|Col3|
|Data|Data|Data|` },
          { type: "progress", icon: "📊", label: "Progress", color: J.green, dsl: "[progress: 75%]" }
        ]
      }
    ]
  }
}, fv = {
  name: "Generic",
  categories: [
    {
      name: "Basic",
      nodes: [
        { type: "node", icon: "⬜", label: "Node", color: J.blue, dsl: "Node" }
      ]
    }
  ]
};
function gv({ isOpen: o, diagramType: t, onDragStart: r, onClose: n, onAddNode: i, theme: a }) {
  const [e, s] = V(""), [h, d] = V({}), u = (a == null ? void 0 : a.name) === "dark", f = hv[t] || fv, m = ye(() => {
    if (!e.trim()) return f.categories;
    const b = e.toLowerCase();
    return f.categories.map((x) => ({
      ...x,
      nodes: x.nodes.filter(
        (C) => C.label.toLowerCase().includes(b) || C.type.toLowerCase().includes(b)
      )
    })).filter((x) => x.nodes.length > 0);
  }, [f.categories, e]), g = (b) => {
    d((x) => ({
      ...x,
      [b]: !x[b]
    }));
  }, y = (b, x) => {
    b.dataTransfer.setData("text/plain", x.dsl), b.dataTransfer.effectAllowed = "copy", r && r(x);
  }, c = (b) => {
    i && i(b.dsl);
  };
  if (!o) return null;
  const p = {
    sidebar: {
      position: "fixed",
      left: 0,
      top: 105,
      // Below header and toolbar
      width: 260,
      height: "calc(100vh - 105px)",
      background: u ? "linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
      borderRight: `1px solid ${u ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)"}`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      zIndex: 100,
      boxShadow: "4px 0 20px rgba(0,0,0,0.2)"
    },
    header: {
      padding: "12px 14px",
      borderBottom: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: u ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.05)"
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: 8
    },
    headerIcon: {
      fontSize: "1rem"
    },
    title: {
      fontSize: "0.8rem",
      fontWeight: 600,
      color: u ? "#fff" : "#1e293b"
    },
    subtitle: {
      fontSize: "0.65rem",
      color: u ? "#888" : "#64748b"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: u ? "#888" : "#64748b",
      cursor: "pointer",
      fontSize: "1rem",
      padding: 4,
      borderRadius: 4
    },
    search: {
      padding: "10px 14px",
      borderBottom: `1px solid ${u ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
    },
    searchInput: {
      width: "100%",
      padding: "8px 12px",
      background: u ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: 6,
      color: u ? "#fff" : "#1e293b",
      fontSize: "0.75rem",
      outline: "none"
    },
    content: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 0"
    },
    category: {
      marginBottom: 4
    },
    categoryHeader: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      cursor: "pointer",
      color: u ? "#aaa" : "#64748b",
      fontSize: "0.7rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    categoryArrow: (b) => ({
      transition: "transform 0.2s",
      transform: b ? "rotate(90deg)" : "rotate(0deg)",
      fontSize: "0.6rem"
    }),
    nodesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 6,
      padding: "4px 10px 12px"
    },
    nodeItem: (b) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px 6px",
      background: u ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.03)",
      border: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: 8,
      cursor: "grab",
      transition: "all 0.15s"
    }),
    nodeIcon: {
      fontSize: "1.2rem",
      marginBottom: 4
    },
    nodeLabel: {
      fontSize: "0.65rem",
      color: u ? "#ccc" : "#334155",
      textAlign: "center",
      fontWeight: 500
    },
    emptyState: {
      padding: "20px 14px",
      textAlign: "center",
      color: u ? "#666" : "#94a3b8",
      fontSize: "0.75rem"
    },
    tip: {
      padding: "10px 14px",
      borderTop: `1px solid ${u ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
      background: u ? "rgba(124,58,237,0.05)" : "rgba(124,58,237,0.03)"
    },
    tipText: {
      fontSize: "0.65rem",
      color: u ? "#888" : "#64748b",
      textAlign: "center"
    }
  };
  return /* @__PURE__ */ S("div", { style: p.sidebar, children: [
    /* @__PURE__ */ S("div", { style: p.header, children: [
      /* @__PURE__ */ S("div", { style: p.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: p.headerIcon, children: "🧩" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: p.title, children: "Node Library" }),
          /* @__PURE__ */ l("div", { style: p.subtitle, children: f.name })
        ] })
      ] }),
      /* @__PURE__ */ l("button", { style: p.closeBtn, onClick: n, title: "Close library", children: "✕" })
    ] }),
    /* @__PURE__ */ l("div", { style: p.search, children: /* @__PURE__ */ l(
      "input",
      {
        type: "text",
        placeholder: "Search nodes...",
        value: e,
        onChange: (b) => s(b.target.value),
        style: p.searchInput
      }
    ) }),
    /* @__PURE__ */ l("div", { style: p.content, children: m.length === 0 ? /* @__PURE__ */ l("div", { style: p.emptyState, children: "No nodes match your search" }) : m.map((b) => {
      const x = h[b.name] !== !1;
      return /* @__PURE__ */ S("div", { style: p.category, children: [
        /* @__PURE__ */ S(
          "div",
          {
            style: p.categoryHeader,
            onClick: () => g(b.name),
            children: [
              /* @__PURE__ */ l("span", { style: p.categoryArrow(x), children: "▶" }),
              /* @__PURE__ */ l("span", { children: b.name }),
              /* @__PURE__ */ l("span", { style: { marginLeft: "auto", opacity: 0.6 }, children: b.nodes.length })
            ]
          }
        ),
        x && /* @__PURE__ */ l("div", { style: p.nodesGrid, children: b.nodes.map((C) => /* @__PURE__ */ S(
          "div",
          {
            style: p.nodeItem(C.color),
            draggable: !0,
            onClick: () => c(C),
            onDragStart: (w) => y(w, C),
            onMouseEnter: (w) => {
              w.currentTarget.style.borderColor = C.color, w.currentTarget.style.transform = "translateY(-2px)", w.currentTarget.style.boxShadow = `0 4px 12px ${C.color}30`;
            },
            onMouseLeave: (w) => {
              w.currentTarget.style.borderColor = u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)", w.currentTarget.style.transform = "none", w.currentTarget.style.boxShadow = "none";
            },
            title: `Click or drag to add ${C.label}`,
            children: [
              /* @__PURE__ */ l("span", { style: p.nodeIcon, children: C.icon }),
              /* @__PURE__ */ l("span", { style: p.nodeLabel, children: C.label })
            ]
          },
          C.type
        )) })
      ] }, b.name);
    }) }),
    /* @__PURE__ */ l("div", { style: p.tip, children: /* @__PURE__ */ l("div", { style: p.tipText, children: "Click or drag nodes to add them to your diagram" }) })
  ] });
}
const xt = {
  CURRENT_DIAGRAM: "ddflow_current_diagram",
  RECENT_FILES: "ddflow_recent_files",
  AUTO_SAVE_ENABLED: "ddflow_autosave_enabled",
  COLOR_SETTINGS: "ddflow_color_settings"
}, mv = 10;
function yv() {
  try {
    const o = localStorage.getItem(xt.CURRENT_DIAGRAM);
    if (o)
      return JSON.parse(o);
  } catch (o) {
    console.error("Failed to load diagram from localStorage:", o);
  }
  return null;
}
function Qh(o, t, r = "Untitled Diagram") {
  try {
    const n = {
      type: o,
      source: t,
      name: r,
      savedAt: (/* @__PURE__ */ new Date()).toISOString(),
      version: "1.0"
    };
    return localStorage.setItem(xt.CURRENT_DIAGRAM, JSON.stringify(n)), !0;
  } catch (n) {
    return console.error("Failed to save diagram to localStorage:", n), !1;
  }
}
function Fc() {
  try {
    const o = localStorage.getItem(xt.RECENT_FILES);
    if (o)
      return JSON.parse(o);
  } catch (o) {
    console.error("Failed to load recent files:", o);
  }
  return [];
}
function kg(o) {
  try {
    let t = Fc();
    t = t.filter((r) => r.name !== o.name), t.unshift({
      ...o,
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    }), t = t.slice(0, mv), localStorage.setItem(xt.RECENT_FILES, JSON.stringify(t));
  } catch (t) {
    console.error("Failed to add to recent files:", t);
  }
}
function bv(o) {
  try {
    let t = Fc();
    t = t.filter((r) => r.name !== o), localStorage.setItem(xt.RECENT_FILES, JSON.stringify(t));
  } catch (t) {
    console.error("Failed to remove from recent files:", t);
  }
}
function xv(o, t, r = "diagram") {
  const n = {
    type: o,
    source: t,
    name: r,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    version: "1.0",
    format: "ddflow"
  }, i = JSON.stringify(n, null, 2), a = new Blob([i], { type: "application/json" }), e = URL.createObjectURL(a), s = document.createElement("a");
  s.href = e, s.download = `${r}.ddflow`, s.style.display = "none", document.body.appendChild(s), s.click(), document.body.removeChild(s), setTimeout(() => URL.revokeObjectURL(e), 100), kg({ name: r, type: o, source: t });
}
function vv() {
  return new Promise((o, t) => {
    const r = document.createElement("input");
    r.type = "file", r.accept = ".ddflow,.json", r.style.display = "none", r.onchange = async (n) => {
      var a;
      const i = (a = n.target.files) == null ? void 0 : a[0];
      if (!i) {
        t(new Error("No file selected"));
        return;
      }
      try {
        const e = await i.text(), s = JSON.parse(e);
        if (!s.type || !s.source)
          throw new Error("Invalid diagram file: missing type or source");
        s.name || (s.name = i.name.replace(/\.(ddflow|json)$/i, "")), kg({
          name: s.name,
          type: s.type,
          source: s.source
        }), o(s);
      } catch (e) {
        t(new Error(`Failed to parse file: ${e.message}`));
      }
    }, r.onerror = () => {
      t(new Error("Failed to open file"));
    }, document.body.appendChild(r), r.click(), document.body.removeChild(r);
  });
}
function wv() {
  try {
    return localStorage.getItem(xt.AUTO_SAVE_ENABLED) !== "false";
  } catch {
    return !0;
  }
}
function Sv(o) {
  try {
    localStorage.setItem(xt.AUTO_SAVE_ENABLED, String(o));
  } catch (t) {
    console.error("Failed to save auto-save setting:", t);
  }
}
function kv(o) {
  try {
    const t = new Date(o), n = /* @__PURE__ */ new Date() - t, i = Math.floor(n / 6e4), a = Math.floor(n / 36e5), e = Math.floor(n / 864e5);
    return i < 1 ? "Just now" : i < 60 ? `${i}m ago` : a < 24 ? `${a}h ago` : e < 7 ? `${e}d ago` : t.toLocaleDateString();
  } catch {
    return "Unknown";
  }
}
const Wr = {
  accentPrimary: "#7C3AED",
  // Main accent (purple)
  accentSecondary: "#6366F1",
  // Secondary accent (indigo)
  selection: "#0EA5E9",
  // Selection highlight (blue)
  success: "#10B981",
  // Success states (green)
  warning: "#F59E0B",
  // Warning states (orange)
  error: "#EF4444"
  // Error states (red)
}, hc = {
  purple: {
    name: "Purple (Default)",
    icon: "💜",
    accentPrimary: "#7C3AED",
    accentSecondary: "#6366F1"
  },
  blue: {
    name: "Ocean Blue",
    icon: "💙",
    accentPrimary: "#0EA5E9",
    accentSecondary: "#3B82F6"
  },
  green: {
    name: "Forest Green",
    icon: "💚",
    accentPrimary: "#10B981",
    accentSecondary: "#059669"
  },
  orange: {
    name: "Sunset Orange",
    icon: "🧡",
    accentPrimary: "#F59E0B",
    accentSecondary: "#D97706"
  },
  pink: {
    name: "Rose Pink",
    icon: "💗",
    accentPrimary: "#EC4899",
    accentSecondary: "#DB2777"
  },
  cyan: {
    name: "Teal Cyan",
    icon: "💠",
    accentPrimary: "#06B6D4",
    accentSecondary: "#14B8A6"
  },
  red: {
    name: "Ruby Red",
    icon: "❤️",
    accentPrimary: "#EF4444",
    accentSecondary: "#DC2626"
  }
};
function Eg() {
  try {
    const o = localStorage.getItem(xt.COLOR_SETTINGS);
    if (o)
      return { ...Wr, ...JSON.parse(o) };
  } catch (o) {
    console.error("Failed to load color settings:", o);
  }
  return { ...Wr };
}
function Ev(o) {
  try {
    return localStorage.setItem(xt.COLOR_SETTINGS, JSON.stringify(o)), !0;
  } catch (t) {
    return console.error("Failed to save color settings:", t), !1;
  }
}
function Cv() {
  try {
    localStorage.removeItem(xt.COLOR_SETTINGS);
  } catch (o) {
    console.error("Failed to reset color settings:", o);
  }
}
function Mv({ isOpen: o, onClose: t, onApply: r, theme: n }) {
  const [i, a] = V(() => Eg()), [e, s] = V(null), h = (n == null ? void 0 : n.name) === "dark";
  he(() => {
    const c = Object.entries(hc).find(
      ([p, b]) => b.accentPrimary === i.accentPrimary && b.accentSecondary === i.accentSecondary
    );
    s(c ? c[0] : null);
  }, [i]);
  const d = (c) => {
    const p = hc[c], b = {
      ...i,
      accentPrimary: p.accentPrimary,
      accentSecondary: p.accentSecondary
    };
    a(b);
  }, u = (c, p) => {
    a((b) => ({ ...b, [c]: p }));
  }, f = () => {
    Ev(i), r && r(i), t();
  }, m = () => {
    Cv(), a({ ...Wr }), r && r(Wr);
  };
  if (!o) return null;
  const g = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
      padding: 20
    },
    modal: {
      background: (n == null ? void 0 : n.modalBg) || (h ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),
      borderRadius: 16,
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      width: "100%",
      maxWidth: 480,
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
    },
    header: {
      padding: "16px 20px",
      borderBottom: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: `${i.accentPrimary}15`
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    headerIcon: {
      fontSize: "1.2rem"
    },
    title: {
      fontWeight: 600,
      color: (n == null ? void 0 : n.textPrimary) || "#fff"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "1.2rem",
      cursor: "pointer",
      padding: 4
    },
    content: {
      padding: 20,
      maxHeight: "calc(80vh - 140px)",
      overflowY: "auto"
    },
    section: {
      marginBottom: 24
    },
    sectionTitle: {
      fontSize: "0.75rem",
      fontWeight: 600,
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      marginBottom: 12
    },
    presetsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 8
    },
    presetItem: (c, p) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "12px 8px",
      background: c ? `${p}20` : h ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `2px solid ${c ? p : "transparent"}`,
      borderRadius: 10,
      cursor: "pointer",
      transition: "all 0.15s"
    }),
    presetIcon: {
      fontSize: "1.4rem"
    },
    presetName: {
      fontSize: "0.65rem",
      color: (n == null ? void 0 : n.textPrimary) || "#fff",
      textAlign: "center",
      fontWeight: 500
    },
    colorRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: `1px solid ${h ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
    },
    colorLabel: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    },
    colorName: {
      fontSize: "0.85rem",
      fontWeight: 500,
      color: (n == null ? void 0 : n.textPrimary) || "#fff"
    },
    colorDesc: {
      fontSize: "0.7rem",
      color: (n == null ? void 0 : n.textSecondary) || "#888"
    },
    colorInput: {
      display: "flex",
      alignItems: "center",
      gap: 8
    },
    colorPicker: {
      width: 36,
      height: 36,
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      padding: 0
    },
    colorHex: {
      fontSize: "0.75rem",
      fontFamily: "Monaco, monospace",
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      background: h ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      padding: "4px 8px",
      borderRadius: 4
    },
    preview: {
      padding: 16,
      background: h ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      borderRadius: 10,
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    },
    previewItem: (c) => ({
      padding: "6px 12px",
      background: `${c}20`,
      border: `1px solid ${c}`,
      borderRadius: 6,
      color: c,
      fontSize: "0.75rem",
      fontWeight: 500
    }),
    footer: {
      padding: "12px 20px",
      borderTop: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    resetBtn: {
      padding: "8px 16px",
      background: "transparent",
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 6,
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "0.8rem",
      cursor: "pointer"
    },
    buttonGroup: {
      display: "flex",
      gap: 10
    },
    cancelBtn: {
      padding: "8px 16px",
      background: "rgba(255,255,255,0.1)",
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 6,
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "0.8rem",
      cursor: "pointer"
    },
    applyBtn: {
      padding: "8px 16px",
      background: `linear-gradient(135deg, ${i.accentPrimary}, ${i.accentSecondary})`,
      border: "none",
      borderRadius: 6,
      color: "#fff",
      fontSize: "0.8rem",
      fontWeight: 600,
      cursor: "pointer"
    }
  }, y = [
    { key: "accentPrimary", name: "Primary Accent", desc: "Main brand color for buttons, links" },
    { key: "accentSecondary", name: "Secondary Accent", desc: "Gradients and hover states" },
    { key: "selection", name: "Selection", desc: "Selected items highlight" },
    { key: "success", name: "Success", desc: "Success messages and states" },
    { key: "warning", name: "Warning", desc: "Warning messages and states" },
    { key: "error", name: "Error", desc: "Error messages and states" }
  ];
  return /* @__PURE__ */ l("div", { style: g.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: g.modal, onClick: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: g.header, children: [
      /* @__PURE__ */ S("div", { style: g.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: g.headerIcon, children: "🎨" }),
        /* @__PURE__ */ l("span", { style: g.title, children: "Color Settings" })
      ] }),
      /* @__PURE__ */ l("button", { style: g.closeBtn, onClick: t, children: "✕" })
    ] }),
    /* @__PURE__ */ S("div", { style: g.content, children: [
      /* @__PURE__ */ S("div", { style: g.section, children: [
        /* @__PURE__ */ l("div", { style: g.sectionTitle, children: "Color Presets" }),
        /* @__PURE__ */ l("div", { style: g.presetsGrid, children: Object.entries(hc).map(([c, p]) => /* @__PURE__ */ S(
          "div",
          {
            style: g.presetItem(e === c, p.accentPrimary),
            onClick: () => d(c),
            onMouseEnter: (b) => {
              e !== c && (b.currentTarget.style.borderColor = p.accentPrimary + "50");
            },
            onMouseLeave: (b) => {
              e !== c && (b.currentTarget.style.borderColor = "transparent");
            },
            children: [
              /* @__PURE__ */ l("span", { style: g.presetIcon, children: p.icon }),
              /* @__PURE__ */ l("span", { style: g.presetName, children: p.name.split(" ")[0] })
            ]
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ S("div", { style: g.section, children: [
        /* @__PURE__ */ l("div", { style: g.sectionTitle, children: "Custom Colors" }),
        y.map(({ key: c, name: p, desc: b }) => /* @__PURE__ */ S("div", { style: g.colorRow, children: [
          /* @__PURE__ */ S("div", { style: g.colorLabel, children: [
            /* @__PURE__ */ l("span", { style: g.colorName, children: p }),
            /* @__PURE__ */ l("span", { style: g.colorDesc, children: b })
          ] }),
          /* @__PURE__ */ S("div", { style: g.colorInput, children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "color",
                value: i[c],
                onChange: (x) => u(c, x.target.value),
                style: g.colorPicker
              }
            ),
            /* @__PURE__ */ l("span", { style: g.colorHex, children: i[c] })
          ] })
        ] }, c))
      ] }),
      /* @__PURE__ */ S("div", { style: g.section, children: [
        /* @__PURE__ */ l("div", { style: g.sectionTitle, children: "Preview" }),
        /* @__PURE__ */ S("div", { style: g.preview, children: [
          /* @__PURE__ */ l("span", { style: g.previewItem(i.accentPrimary), children: "Primary" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(i.accentSecondary), children: "Secondary" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(i.selection), children: "Selected" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(i.success), children: "Success" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(i.warning), children: "Warning" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(i.error), children: "Error" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: g.footer, children: [
      /* @__PURE__ */ l("button", { style: g.resetBtn, onClick: m, children: "Reset to Default" }),
      /* @__PURE__ */ S("div", { style: g.buttonGroup, children: [
        /* @__PURE__ */ l("button", { style: g.cancelBtn, onClick: t, children: "Cancel" }),
        /* @__PURE__ */ l("button", { style: g.applyBtn, onClick: f, children: "Apply Colors" })
      ] })
    ] })
  ] }) });
}
const Te = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  red: "#EF4444",
  indigo: "#6366F1"
}, Av = 10 * 1024 * 1024, Zh = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"];
function $v({ isOpen: o, onClose: t, onImport: r, theme: n }) {
  const [i, a] = V(null), [e, s] = V(!1), [h, d] = V(!1), [u, f] = V(null), [m, g] = V(null), y = _e(null), c = _e(null), p = (n == null ? void 0 : n.name) === "dark";
  he(() => {
    o || (a(null), f(null), g(null), d(!1));
  }, [o]), he(() => {
    if (!o) return;
    const _ = async (z) => {
      var j;
      const B = (j = z.clipboardData) == null ? void 0 : j.items;
      if (B) {
        for (const X of B)
          if (X.type.startsWith("image/")) {
            z.preventDefault();
            const te = X.getAsFile();
            te && await b(te);
            break;
          }
      }
    };
    return document.addEventListener("paste", _), () => document.removeEventListener("paste", _);
  }, [o]);
  const b = async (_) => {
    if (g(null), f(null), !Zh.includes(_.type)) {
      g(`Unsupported file type: ${_.type}. Please use PNG, JPG, WEBP, or GIF.`);
      return;
    }
    if (_.size > Av) {
      g(`File too large (${(_.size / 1024 / 1024).toFixed(1)}MB). Maximum size is 10MB.`);
      return;
    }
    const z = new FileReader();
    z.onload = (B) => {
      const j = B.target.result, X = j.split(",")[1];
      a({
        base64: X,
        mimeType: _.type,
        name: _.name,
        size: _.size,
        preview: j
      });
    }, z.onerror = () => {
      g("Failed to read file. Please try again.");
    }, z.readAsDataURL(_);
  }, x = K((_) => {
    _.preventDefault(), _.stopPropagation(), s(!0);
  }, []), C = K((_) => {
    _.preventDefault(), _.stopPropagation(), s(!1);
  }, []), w = K(async (_) => {
    var B;
    _.preventDefault(), _.stopPropagation(), s(!1);
    const z = (B = _.dataTransfer) == null ? void 0 : B.files;
    z && z.length > 0 && await b(z[0]);
  }, []), E = async (_) => {
    var B;
    const z = (B = _.target.files) == null ? void 0 : B[0];
    z && await b(z);
  }, [k, M] = V(null), A = async () => {
    if (!(!i || !qt())) {
      d(!0), g(null), f(null), M(null);
      try {
        const _ = await ev(i.base64, i.mimeType);
        f(_), M(_.type);
      } catch (_) {
        g(_.message || "Failed to analyze image. Please try again.");
      } finally {
        d(!1);
      }
    }
  }, I = () => {
    u && r && r(k || u.type, u.dsl, u.name);
  }, R = (_) => {
    M(_);
  }, $ = () => {
    a(null), f(null), g(null), y.current && (y.current.value = "");
  };
  if (!o) return null;
  const D = (_) => _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : `${(_ / 1024 / 1024).toFixed(1)} MB`, P = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
      padding: 20
    },
    modal: {
      background: (n == null ? void 0 : n.modalBg) || (p ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),
      borderRadius: 16,
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      width: "100%",
      maxWidth: 600,
      maxHeight: "90vh",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column"
    },
    header: {
      padding: "16px 20px",
      borderBottom: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: `${Te.purple}15`
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    headerIcon: {
      fontSize: "1.2rem"
    },
    title: {
      fontWeight: 600,
      color: (n == null ? void 0 : n.textPrimary) || "#fff"
    },
    subtitle: {
      fontSize: "0.7rem",
      color: (n == null ? void 0 : n.textSecondary) || "#888"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "1.2rem",
      cursor: "pointer",
      padding: 4
    },
    content: {
      padding: 20,
      flex: 1,
      overflowY: "auto"
    },
    dropZone: {
      border: `2px dashed ${e ? Te.purple : p ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
      borderRadius: 12,
      padding: 40,
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.2s",
      background: e ? `${Te.purple}10` : "transparent"
    },
    dropIcon: {
      fontSize: "3rem",
      marginBottom: 16,
      opacity: 0.7
    },
    dropText: {
      fontSize: "1rem",
      fontWeight: 500,
      color: (n == null ? void 0 : n.textPrimary) || "#fff",
      marginBottom: 8
    },
    dropSubtext: {
      fontSize: "0.8rem",
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      marginBottom: 16
    },
    browseBtn: {
      padding: "8px 20px",
      background: `${Te.purple}20`,
      border: `1px solid ${Te.purple}`,
      borderRadius: 8,
      color: Te.purple,
      fontSize: "0.85rem",
      fontWeight: 500,
      cursor: "pointer"
    },
    pasteHint: {
      fontSize: "0.7rem",
      color: (n == null ? void 0 : n.textMuted) || "#666",
      marginTop: 16
    },
    imagePreview: {
      marginTop: 20,
      padding: 16,
      background: p ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      borderRadius: 12
    },
    previewHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    },
    previewInfo: {
      display: "flex",
      alignItems: "center",
      gap: 8
    },
    previewName: {
      fontSize: "0.85rem",
      fontWeight: 500,
      color: (n == null ? void 0 : n.textPrimary) || "#fff"
    },
    previewSize: {
      fontSize: "0.75rem",
      color: (n == null ? void 0 : n.textSecondary) || "#888"
    },
    clearBtn: {
      padding: "4px 10px",
      background: "transparent",
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 6,
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "0.75rem",
      cursor: "pointer"
    },
    previewImage: {
      width: "100%",
      maxHeight: 300,
      objectFit: "contain",
      borderRadius: 8,
      background: p ? "rgba(0,0,0,0.5)" : "#fff"
    },
    analyzeBtn: {
      width: "100%",
      padding: "12px 20px",
      background: `linear-gradient(135deg, ${Te.purple}, ${Te.indigo})`,
      border: "none",
      borderRadius: 8,
      color: "#fff",
      fontSize: "0.9rem",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    },
    analyzingBtn: {
      width: "100%",
      padding: "12px 20px",
      background: `${Te.purple}50`,
      border: "none",
      borderRadius: 8,
      color: "#fff",
      fontSize: "0.9rem",
      fontWeight: 600,
      cursor: "not-allowed",
      marginTop: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    },
    error: {
      marginTop: 16,
      padding: "12px 16px",
      background: `${Te.red}15`,
      border: `1px solid ${Te.red}40`,
      borderRadius: 8,
      color: Te.red,
      fontSize: "0.85rem"
    },
    result: {
      marginTop: 20,
      padding: 16,
      background: p ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      borderRadius: 12
    },
    resultHeader: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    },
    resultIcon: {
      fontSize: "1rem"
    },
    resultTitle: {
      fontSize: "0.9rem",
      fontWeight: 600,
      color: Te.green
    },
    dslPreview: {
      background: (n == null ? void 0 : n.inputBg) || (p ? "rgba(0,0,0,0.4)" : "#fff"),
      padding: 12,
      borderRadius: 8,
      maxHeight: 200,
      overflow: "auto",
      fontFamily: "Monaco, monospace",
      fontSize: "0.75rem",
      color: (n == null ? void 0 : n.editorText) || Te.purple,
      whiteSpace: "pre-wrap",
      lineHeight: 1.5
    },
    footer: {
      padding: "12px 20px",
      borderTop: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    },
    cancelBtn: {
      padding: "8px 16px",
      background: "rgba(255,255,255,0.1)",
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 6,
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "0.8rem",
      cursor: "pointer"
    },
    applyBtn: {
      padding: "8px 20px",
      background: `linear-gradient(135deg, ${Te.green}, ${Te.blue})`,
      border: "none",
      borderRadius: 6,
      color: "#fff",
      fontSize: "0.8rem",
      fontWeight: 600,
      cursor: "pointer"
    },
    disabledBtn: {
      padding: "8px 20px",
      background: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: 6,
      color: "#666",
      fontSize: "0.8rem",
      cursor: "not-allowed"
    },
    notConfigured: {
      textAlign: "center",
      padding: 40,
      color: (n == null ? void 0 : n.textSecondary) || "#888"
    }
  };
  return /* @__PURE__ */ l("div", { style: P.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: P.modal, onClick: (_) => _.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: P.header, children: [
      /* @__PURE__ */ S("div", { style: P.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: P.headerIcon, children: "🖼️" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: P.title, children: "Import from Image" }),
          /* @__PURE__ */ l("div", { style: P.subtitle, children: "AI-powered diagram extraction" })
        ] })
      ] }),
      /* @__PURE__ */ l("button", { style: P.closeBtn, onClick: t, children: "✕" })
    ] }),
    /* @__PURE__ */ l("div", { style: P.content, children: qt() ? /* @__PURE__ */ S(yt, { children: [
      !i && /* @__PURE__ */ S(
        "div",
        {
          ref: c,
          style: P.dropZone,
          onDragOver: x,
          onDragLeave: C,
          onDrop: w,
          onClick: () => {
            var _;
            return (_ = y.current) == null ? void 0 : _.click();
          },
          children: [
            /* @__PURE__ */ l("div", { style: P.dropIcon, children: "📸" }),
            /* @__PURE__ */ l("div", { style: P.dropText, children: e ? "Drop image here" : "Drag & drop an image" }),
            /* @__PURE__ */ l("div", { style: P.dropSubtext, children: "or click to browse files" }),
            /* @__PURE__ */ l("button", { style: P.browseBtn, onClick: (_) => {
              var z;
              _.stopPropagation(), (z = y.current) == null || z.click();
            }, children: "Browse Files" }),
            /* @__PURE__ */ l("div", { style: P.pasteHint, children: "💡 Tip: You can also paste an image from clipboard (Ctrl+V / Cmd+V)" }),
            /* @__PURE__ */ l(
              "input",
              {
                ref: y,
                type: "file",
                accept: Zh.join(","),
                onChange: E,
                style: { display: "none" }
              }
            )
          ]
        }
      ),
      i && /* @__PURE__ */ S("div", { style: P.imagePreview, children: [
        /* @__PURE__ */ S("div", { style: P.previewHeader, children: [
          /* @__PURE__ */ S("div", { style: P.previewInfo, children: [
            /* @__PURE__ */ l("span", { style: P.previewName, children: i.name }),
            /* @__PURE__ */ S("span", { style: P.previewSize, children: [
              "(",
              D(i.size),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ l("button", { style: P.clearBtn, onClick: $, children: "Clear" })
        ] }),
        /* @__PURE__ */ l("img", { src: i.preview, alt: "Preview", style: P.previewImage }),
        !u && /* @__PURE__ */ l(
          "button",
          {
            style: h ? P.analyzingBtn : P.analyzeBtn,
            onClick: A,
            disabled: h,
            children: h ? /* @__PURE__ */ S(yt, { children: [
              /* @__PURE__ */ l("span", { children: "⏳" }),
              " Analyzing with AI..."
            ] }) : /* @__PURE__ */ S(yt, { children: [
              /* @__PURE__ */ l("span", { children: "✨" }),
              " Extract Diagram with AI"
            ] })
          }
        )
      ] }),
      m && /* @__PURE__ */ S("div", { style: P.error, children: [
        "❌ ",
        m
      ] }),
      u && /* @__PURE__ */ S("div", { style: P.result, children: [
        /* @__PURE__ */ S("div", { style: P.resultHeader, children: [
          /* @__PURE__ */ l("span", { style: P.resultIcon, children: "✅" }),
          /* @__PURE__ */ l("span", { style: P.resultTitle, children: "Diagram Extracted Successfully" })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginBottom: 12, padding: "8px 12px", background: `${Te.purple}15`, borderRadius: 8, border: `1px solid ${Te.purple}30` }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 4 }, children: "DIAGRAM NAME" }),
          /* @__PURE__ */ l("div", { style: { fontSize: "1rem", fontWeight: 600, color: (n == null ? void 0 : n.textPrimary) || "#fff" }, children: u.name })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 8 }, children: "DIAGRAM TYPE" }),
          /* @__PURE__ */ S("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: [
            /* @__PURE__ */ S(
              "button",
              {
                onClick: () => R(u.type),
                style: {
                  padding: "6px 14px",
                  background: k === u.type ? `${Te.green}20` : "transparent",
                  border: `2px solid ${k === u.type ? Te.green : p ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                  borderRadius: 8,
                  color: k === u.type ? Te.green : (n == null ? void 0 : n.textPrimary) || "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  k === u.type && /* @__PURE__ */ l("span", { children: "✓" }),
                  u.type,
                  /* @__PURE__ */ l("span", { style: { fontSize: "0.65rem", opacity: 0.7 }, children: "(detected)" })
                ]
              }
            ),
            u.alternatives && u.alternatives.length > 0 && u.alternatives.map((_) => /* @__PURE__ */ S(
              "button",
              {
                onClick: () => R(_),
                style: {
                  padding: "6px 14px",
                  background: k === _ ? `${Te.blue}20` : "transparent",
                  border: `2px solid ${k === _ ? Te.blue : p ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}`,
                  borderRadius: 8,
                  color: k === _ ? Te.blue : (n == null ? void 0 : n.textSecondary) || "#888",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  k === _ && /* @__PURE__ */ l("span", { children: "✓" }),
                  _
                ]
              },
              _
            ))
          ] }),
          u.alternatives && u.alternatives.length > 0 && /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textMuted) || "#666", marginTop: 6 }, children: "💡 Alternative types may render this data differently" })
        ] }),
        /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 6 }, children: "DSL PREVIEW" }),
        /* @__PURE__ */ l("div", { style: P.dslPreview, children: u.dsl })
      ] })
    ] }) : /* @__PURE__ */ S("div", { style: P.notConfigured, children: [
      /* @__PURE__ */ l("div", { style: { fontSize: "3rem", marginBottom: 16 }, children: "⚠️" }),
      /* @__PURE__ */ l("div", { style: { fontSize: "1rem", fontWeight: 500, marginBottom: 8, color: n == null ? void 0 : n.textPrimary }, children: "AI Not Configured" }),
      /* @__PURE__ */ l("div", { style: { fontSize: "0.85rem" }, children: "Please configure your AI provider in the .env file to use this feature." })
    ] }) }),
    /* @__PURE__ */ S("div", { style: P.footer, children: [
      /* @__PURE__ */ l("button", { style: P.cancelBtn, onClick: t, children: "Cancel" }),
      u ? /* @__PURE__ */ l("button", { style: P.applyBtn, onClick: I, children: "Apply Diagram" }) : /* @__PURE__ */ l("button", { style: P.disabledBtn, disabled: !0, children: "Apply Diagram" })
    ] })
  ] }) });
}
function Cg(o) {
  const t = o.toLowerCase();
  if (t.includes("@startmindmap") || t.includes("@startwbs")) return "mindmap";
  if (t.includes("@startgantt")) return "gantt";
  if (t.includes("@startjson") || t.includes("@startyaml")) return "unsupported";
  const r = o.replace(/@startuml.*|@enduml.*/gi, "").trim();
  return /\b(Person|System|Container|Component|System_Ext|Container_Ext|Boundary|Enterprise_Boundary|System_Boundary|Container_Boundary)\s*\(/i.test(r) || /\b(Rel|Rel_R|Rel_L|Rel_U|Rel_D)\s*\(/i.test(r) ? "c4" : /\b(node|device|artifact|file|folder|frame|rectangle|card)\s+"?[^"]*"?\s*(<<|as|\{|$)/im.test(r) && /\b(node|device|artifact)\b/i.test(r) ? "deployment" : /\bactor\b/i.test(r) && (/\busecase\b/i.test(r) || /\([^)]+\)/i.test(r)) ? "usecase" : /\b(class|interface|abstract\s+class|enum)\s+\w+/i.test(r) ? "class" : /\[\*\]\s*(-->|->)/.test(r) || /(-->|->)\s*\[\*\]/.test(r) || /\bstate\s+\w+/i.test(r) && !r.includes("component") ? "state" : (/\bparticipant\b/i.test(r) || /\bactor\b.*->/.test(r)) && /->>|-->>|->|-->/.test(r) && /:/.test(r) ? "sequence" : /\bstart\b/i.test(r) && /\bstop\b/i.test(r) || /:[^;]+;/.test(r) || /\bif\s*\(/.test(r) && /\bthen\b/.test(r) ? "flowchart" : /\b(component|package|node|folder|frame|cloud|database)\b/i.test(r) ? "architecture" : /\bentity\b/i.test(r) ? "erd" : /\bobject\b/i.test(r) ? "class" : /->>|-->>|->|-->/.test(r) && /:/.test(r) ? "sequence" : "flowchart";
}
function Rv(o) {
  let t = Cg(o), r;
  switch (t) {
    case "sequence":
      r = Iv(o);
      break;
    case "class":
      r = Tv(o);
      break;
    case "state":
      r = Pv(o);
      break;
    case "flowchart":
      r = _v(o);
      break;
    case "usecase":
      r = Dv(o);
      break;
    case "architecture":
      r = Lv(o);
      break;
    case "mindmap":
      r = Nv(o);
      break;
    case "gantt":
      r = Bv(o);
      break;
    case "erd":
      r = Wv(o);
      break;
    case "c4":
      r = zv(o), t = "architecture";
      break;
    case "deployment":
      r = Ov(o);
      break;
    default:
      throw new Error(`Unsupported PlantUML diagram type: ${t}`);
  }
  return { type: t, source: r };
}
function ft(o) {
  return o.replace(/@startuml.*\n?/gi, "").replace(/@enduml.*\n?/gi, "").replace(/@startmindmap.*\n?/gi, "").replace(/@endmindmap.*\n?/gi, "").replace(/@startwbs.*\n?/gi, "").replace(/@endwbs.*\n?/gi, "").replace(/@startgantt.*\n?/gi, "").replace(/@endgantt.*\n?/gi, "").replace(/^\s*title\s+.+$/gim, "").replace(/^\s*skinparam\s+.+$/gim, "").replace(/^\s*hide\s+.+$/gim, "").replace(/^\s*'.*$/gim, "").trim();
}
function Iv(o) {
  const r = ft(o).split(`
`).filter((e) => e.trim()), n = [], i = [];
  r.forEach((e) => {
    const s = e.trim(), h = s.match(/^(participant|actor)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (h) {
      const f = h[4] || h[2];
      i.includes(f) || i.push(f);
      return;
    }
    const d = s.match(/^(\w+)\s*(->>|-->>|->|-->)\s*(\w+)\s*:\s*(.+)$/);
    if (d) {
      const [, f, m, g, y] = d;
      i.includes(f) || i.push(f), i.includes(g) || i.push(g);
      const c = m.replace(">>", ">");
      n.push(`${f} ${c} ${g}: ${y}`);
      return;
    }
    s.match(/^note\s+(left|right|over)\s*:?\s*(.+)$/i);
  });
  const a = [];
  return i.length > 0 && (a.push(`participant ${i.join(", ")}`), a.push("")), a.push(...n), a.join(`
`);
}
function Tv(o) {
  const r = ft(o).split(`
`), n = [];
  let i = null, a = !1, e = 0;
  return r.forEach((s) => {
    const h = s.trim(), d = h.match(/^(class|interface|abstract\s+class|enum)\s+(\w+)(\s*\{)?/i);
    if (d) {
      i && n.push(""), i = d[2], n.push(`class ${i}`), h.includes("{") && (a = !0, e = 1);
      return;
    }
    const u = h.match(/^object\s+"?([^"]+)"?/i);
    if (u) {
      i && n.push(""), i = u[1].replace(/\s+/g, "_"), n.push(`class ${i}`), h.includes("{") && (a = !0, e = 1);
      return;
    }
    if (h === "{" && i) {
      a = !0, e = 1;
      return;
    }
    if (h === "}" && a) {
      e--, e <= 0 && (a = !1, i = null);
      return;
    }
    if (a && i && h && h !== "{" && h !== "}") {
      const f = h.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*:?\s*(\w+)?/);
      if (f) {
        const [, y = "+", c, p, b] = f, x = b ? `: ${b}` : "";
        n.push(`  ${y} ${c}(${p})${x}`);
        return;
      }
      const m = h.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)/);
      if (m) {
        const [, y = "+", c, p] = m;
        n.push(`  ${y} ${c}: ${p}`);
        return;
      }
      const g = h.match(/^([+\-#~])?\s*(\w+)$/);
      if (g) {
        const [, y = "+", c] = g;
        n.push(`  ${y} ${c}`);
        return;
      }
    }
    if (!a) {
      const f = h.match(/^(\w+)\s*(<\|--|--\|>)\s*(\w+)/);
      if (f) {
        const [, g, y, c] = f;
        y === "<|--" ? n.push(`${c} extends ${g}`) : n.push(`${g} extends ${c}`);
        return;
      }
      if (h.match(/^(\w+)\s*(--|-->|<--)\s*(\w+)/))
        return;
    }
  }), n.join(`
`);
}
function Pv(o) {
  const r = ft(o).split(`
`).filter((a) => a.trim()), n = [], i = /* @__PURE__ */ new Set();
  return r.forEach((a) => {
    const e = a.trim(), s = e.match(/^state\s+"([^"]+)"\s+as\s+(\w+)/i);
    if (s) {
      const [, , u] = s;
      i.add(u);
      return;
    }
    const h = e.match(/^state\s+(\w+)$/i);
    if (h) {
      i.add(h[1]);
      return;
    }
    const d = e.match(/^(\[\*\]|\w+)\s*(-->|->)\s*(\[\*\]|\w+)(\s*:\s*(.+))?$/);
    if (d) {
      let [, u, , f, , m] = d, g = u, y = f;
      if (u === "[*]" && !i.has("__initial__") && (n.unshift(`(initial) ${f}`), i.add("__initial__"), g = f, !m))
        return;
      if (f === "[*]" && (i.has("__final__") || (n.push("(final) End"), i.add("__final__")), y = "End"), u !== "[*]") {
        const c = m ? `: ${m.trim()}` : "";
        n.push(`${g} -> ${y}${c}`);
      }
      return;
    }
  }), n.join(`
`);
}
function _v(o) {
  const r = ft(o).split(`
`).filter((u) => u.trim()), n = [], i = [];
  let a = 0, e = null;
  const s = [], h = (u, f) => {
    const m = `node${a++}`;
    return n.push({ id: m, type: u, label: f }), m;
  };
  r.forEach((u) => {
    const f = u.trim();
    if (/^start$/i.test(f)) {
      e = h("start", "Start");
      return;
    }
    if (/^(stop|end)$/i.test(f)) {
      const c = h("end", "End");
      e && i.push({ from: e, to: c }), e = c;
      return;
    }
    const m = f.match(/^:([^;]+);?$/);
    if (m) {
      const c = m[1].trim(), p = h("process", c);
      e && i.push({ from: e, to: p }), e = p;
      return;
    }
    const g = f.match(/^if\s*\(([^)]+)\)\s*then\s*\(([^)]+)\)/i);
    if (g) {
      const c = g[1].trim(), p = g[2].trim(), b = h("decision", c);
      e && i.push({ from: e, to: b }), s.push({ type: "if", decisionId: b, yesLabel: p, noLabel: null, mergePoint: null }), e = b;
      return;
    }
    const y = f.match(/^else\s*\(([^)]+)\)/i);
    if (y && s.length > 0) {
      const c = s[s.length - 1];
      c.noLabel = y[1].trim(), c.lastYesNode = e, e = c.decisionId;
      return;
    }
    if (/^endif$/i.test(f) && s.length > 0) {
      const c = s.pop();
      c.lastNoNode = e;
      return;
    }
  });
  const d = [];
  return n.forEach((u) => {
    d.push(`(${u.type}) ${u.label}`);
  }), d.push(""), i.forEach((u) => {
    const f = n.find((g) => g.id === u.from), m = n.find((g) => g.id === u.to);
    if (f && m) {
      const g = u.label ? `: ${u.label}` : "";
      d.push(`${f.label} -> ${m.label}${g}`);
    }
  }), d.join(`
`);
}
function Dv(o) {
  const r = ft(o).split(`
`).filter((s) => s.trim()), n = [], i = [], a = [], e = [];
  return r.forEach((s) => {
    const h = s.trim(), d = h.match(/^actor\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (d) {
      const g = d[3] || d[1];
      i.includes(g) || (i.push(g), n.push(`actor ${g}`));
      return;
    }
    const u = h.match(/^usecase\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (u) {
      const g = u[3] || u[1];
      a.includes(g) || (a.push(g), n.push(`(${g})`));
      return;
    }
    const f = h.match(/^\(([^)]+)\)$/);
    if (f) {
      const g = f[1];
      a.includes(g) || (a.push(g), n.push(`(${g})`));
      return;
    }
    const m = h.match(/^(\w+)\s*(-->|->|--)\s*\(?([^)]+)\)?$/);
    if (m) {
      const [, g, , y] = m, c = y.replace(/[()]/g, "");
      e.push(`${g} -> ${c}`);
      return;
    }
  }), n.push(""), n.push(...e), n.join(`
`);
}
function Lv(o) {
  const r = ft(o).split(`
`).filter((e) => e.trim()), n = {
    clients: [],
    gateway: [],
    services: [],
    data: [],
    storage: [],
    other: []
  }, i = [];
  r.forEach((e) => {
    const s = e.trim(), h = s.match(/^(component|node|package|folder|frame|cloud|database|storage|queue)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (h) {
      const [, f, m, , g] = h, y = g || m, c = f.toLowerCase();
      c === "database" || c === "storage" ? n.data.push(y) : c === "cloud" ? n.clients.push(y) : n.services.push(y);
      return;
    }
    const d = s.match(/^\[([^\]]+)\]$/);
    if (d) {
      n.services.push(d[1]);
      return;
    }
    const u = s.match(/^(\[?[^\]]+\]?)\s*(-->|->|--)\s*(\[?[^\]]+\]?)(\s*:\s*(.+))?$/);
    if (u) {
      let [, f, , m] = u;
      f = f.replace(/[\[\]]/g, "").trim(), m = m.replace(/[\[\]]/g, "").trim(), i.push(`${f} -> ${m}`);
      return;
    }
  });
  const a = [];
  return n.clients.length > 0 && a.push(`[clients] ${n.clients.join(", ")}`), n.gateway.length > 0 && a.push(`[gateway] ${n.gateway.join(", ")}`), n.services.length > 0 && a.push(`[services] ${n.services.join(", ")}`), n.data.length > 0 && a.push(`[data] ${n.data.join(", ")}`), n.storage.length > 0 && a.push(`[storage] ${n.storage.join(", ")}`), n.other.length > 0 && a.push(`[services] ${n.other.join(", ")}`), i.length > 0 && (a.push(""), a.push(...i)), a.join(`
`);
}
function Nv(o) {
  const r = ft(o).split(`
`).filter((i) => i.trim()), n = [];
  return r.forEach((i) => {
    const a = i.match(/^(\*+)\s*(.+)$/);
    if (a) {
      const e = a[1].length - 1, s = a[2].trim(), h = "  ".repeat(e);
      n.push(`${h}${s}`);
    }
  }), n.join(`
`);
}
function Bv(o) {
  const r = ft(o).split(`
`).filter((a) => a.trim()), n = [];
  let i = 0;
  return r.forEach((a) => {
    const e = a.trim(), s = e.match(/^\[([^\]]+)\]\s+lasts\s+(\d+)\s+days?/i);
    if (s) {
      const [, u, f] = s;
      n.push(`${u}, ${i}, ${f}`), i += parseInt(f);
      return;
    }
    const h = e.match(/^\[([^\]]+)\]\s+starts\s+at\s+day\s+(\d+)/i);
    if (h) {
      i = parseInt(h[2]);
      return;
    }
    e.match(/^project\s+starts\s+/i);
  }), n.join(`
`);
}
function Wv(o) {
  const r = ft(o).split(`
`), n = [];
  let i = null, a = !1;
  return r.forEach((e) => {
    const s = e.trim(), h = s.match(/^entity\s+"?([^"{\s]+)"?\s*(\{)?/i);
    if (h) {
      i && (n.push(");"), n.push("")), i = h[1], n.push(`CREATE TABLE ${i} (`), a = s.includes("{");
      return;
    }
    if (s === "{" && i) {
      a = !0;
      return;
    }
    if (s === "}" && a) {
      n.push(");"), a = !1, i = null;
      return;
    }
    if (a && i && s && !s.startsWith("--")) {
      const d = s.match(/^(\*?)?\s*(\w+)\s*:\s*(.+)$/);
      if (d) {
        const [, u, f, m] = d, g = u === "*" ? " PRIMARY KEY" : "", y = m.trim().toUpperCase();
        n.push(`  ${f} ${y}${g},`);
      }
    }
  }), a && n.push(");"), n.join(`
`).replace(/,\n\);/g, `
);`);
}
function zv(o) {
  const r = ft(o).split(`
`).filter((u) => u.trim()), n = /* @__PURE__ */ new Map(), i = [], a = [], e = /* @__PURE__ */ new Map();
  r.forEach((u) => {
    const f = u.trim();
    if (f.startsWith("!include") || f.startsWith("'")) return;
    const m = f.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(\s*(\w+)\s*,\s*["']([^"']+)["']/i);
    if (m) {
      const x = a.length > 0 ? a[a.length - 1] : null;
      e.set(m[2], { label: m[3], type: m[1], parent: x }), a.push(m[2]);
      return;
    }
    if (f === "}" && a.length > 0) {
      a.pop();
      return;
    }
    const g = f.match(/^Person(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (g) {
      const x = a.length > 0 ? a[a.length - 1] : null;
      n.set(g[1], {
        type: "user",
        label: g[2],
        description: g[3] || "",
        boundary: x
      });
      return;
    }
    const y = f.match(/^System(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (y) {
      const x = a.length > 0 ? a[a.length - 1] : null;
      n.set(y[1], {
        type: f.includes("_Ext") ? "external" : "services",
        label: y[2],
        description: y[3] || "",
        boundary: x
      });
      return;
    }
    const c = f.match(/^Container(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (c) {
      const x = a.length > 0 ? a[a.length - 1] : null;
      let C = "services";
      /ContainerDb/i.test(f) ? C = "data" : /ContainerQueue/i.test(f) ? C = "queue" : /_Ext/i.test(f) && (C = "external"), n.set(c[1], {
        type: C,
        label: c[2],
        technology: c[3] || "",
        description: c[4] || "",
        boundary: x
      });
      return;
    }
    const p = f.match(/^Component(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (p) {
      const x = a.length > 0 ? a[a.length - 1] : null;
      let C = "services";
      /ComponentDb/i.test(f) && (C = "data"), /_Ext/i.test(f) && (C = "external"), n.set(p[1], {
        type: C,
        label: p[2],
        technology: p[3] || "",
        description: p[4] || "",
        boundary: x
      });
      return;
    }
    const b = f.match(/^(?:Bi)?Rel(?:_[RLUD])?\s*\(\s*(\w+)\s*,\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    b && i.push({
      from: b[1],
      to: b[2],
      label: b[3],
      tech: b[4] || ""
    });
  });
  const s = [], h = { user: [], clients: [], services: [], data: [], external: [], queue: [] };
  n.forEach((u, f) => {
    const m = u.type || "services";
    h[m] || (h[m] = []), h[m].push(u.label);
  }), Object.entries(h).forEach(([u, f]) => {
    f.length > 0 && s.push(`[${u}] ${f.join(", ")}`);
  });
  const d = (u, f = "") => {
    const m = e.get(u);
    m && (s.push(`${f}group "${m.label}" {`), n.forEach((g, y) => {
      g.boundary === u && s.push(`${f}  ${g.label}`);
    }), e.forEach((g, y) => {
      g.parent === u && d(y, f + "  ");
    }), s.push(`${f}}`));
  };
  return e.forEach((u, f) => {
    u.parent || d(f);
  }), s.push(""), i.forEach((u) => {
    const f = n.get(u.from), m = n.get(u.to);
    f && m && s.push(`${f.label} -> ${m.label}`);
  }), s.join(`
`);
}
function Ov(o) {
  const r = ft(o).split(`
`).filter((h) => h.trim()), n = [], i = /* @__PURE__ */ new Map(), a = [];
  let e = null, s = !1;
  return r.forEach((h) => {
    const d = h.trim(), u = d.match(/^(node|device|artifact|file|folder|frame|rectangle|card)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?(?:\s*\{)?/i);
    if (u) {
      const m = u[1].toLowerCase(), g = u[2].trim(), y = u[3] || g.replace(/\s+/g, "_");
      i.set(y, { type: m, label: g, children: [] }), e = y, d.includes("{") && (s = !0);
      return;
    }
    if (s && e) {
      const m = d.match(/^(node|device|artifact|component|database)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?/i);
      if (m) {
        const g = m[3] || m[2].replace(/\s+/g, "_");
        i.set(g, { type: m[1].toLowerCase(), label: m[2].trim(), parent: e });
        const y = i.get(e);
        y && y.children.push(g);
        return;
      }
    }
    if (d === "}") {
      s = !1, e = null;
      return;
    }
    const f = d.match(/^(\w+)\s*(-->|->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);
    f && a.push({
      from: f[1],
      to: f[3],
      label: f[4] || ""
    });
  }), i.forEach((h, d) => {
    if (!h.parent) {
      let u = `(${h.type}) ${h.label}`;
      n.push(u), h.children.length > 0 && h.children.forEach((f) => {
        const m = i.get(f);
        m && n.push(`  (${m.type}) ${m.label}`);
      });
    }
  }), n.push(""), a.forEach((h) => {
    const d = i.get(h.from), u = i.get(h.to);
    if (d && u) {
      const f = h.label ? `: ${h.label}` : "";
      n.push(`${d.label} -> ${u.label}${f}`);
    }
  }), n.join(`
`);
}
function qv(o, t) {
  switch (o) {
    case "sequence":
      return Fv(t);
    case "class":
      return Uv(t);
    case "state":
      return Gv(t);
    case "flowchart":
      return jv(t);
    case "usecase":
      return Hv(t);
    case "architecture":
    case "component":
      return Yv(t);
    case "mindmap":
    case "wbs":
      return Mg(t);
    case "gantt":
      return Vv(t);
    case "erd":
      return Kv(t);
    case "orgchart":
      return Xv(t);
    default:
      throw new Error(`Export to PlantUML not supported for diagram type: ${o}`);
  }
}
function Fv(o) {
  const t = o.split(`
`).filter((n) => n.trim()), r = ["@startuml"];
  return t.forEach((n) => {
    const i = n.trim();
    if (i.startsWith("participant ")) {
      r.push(i);
      return;
    }
    if (i.match(/^(\w+)\s*(->|-->)\s*(\w+)\s*:\s*(.+)$/)) {
      r.push(i);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function Uv(o) {
  const t = o.split(`
`), r = ["@startuml"];
  let n = null;
  return t.forEach((i) => {
    const a = i.trim();
    if (a.startsWith("class ")) {
      n && (r.push("}"), r.push("")), n = a.replace("class ", ""), r.push(`class ${n} {`);
      return;
    }
    if (a.match(/^([+\-#~])\s*(.+)$/) && n) {
      r.push(`  ${a}`);
      return;
    }
    const s = a.match(/^(\w+)\s+extends\s+(\w+)$/);
    if (s) {
      n && (r.push("}"), n = null), r.push(`${s[2]} <|-- ${s[1]}`);
      return;
    }
  }), n && r.push("}"), r.push("@enduml"), r.join(`
`);
}
function Gv(o) {
  const t = o.split(`
`).filter((i) => i.trim()), r = ["@startuml"];
  let n = !1;
  return t.forEach((i) => {
    const a = i.trim(), e = a.match(/^\(initial\)\s+(\w+)$/);
    if (e) {
      n || (r.push(`[*] --> ${e[1]}`), n = !0);
      return;
    }
    if (a.match(/^\(final\)\s+(\w+)$/))
      return;
    const h = a.match(/^(\w+)\s*->\s*(\w+)(\s*:\s*(.+))?$/);
    if (h) {
      const [, d, u, , f] = h, m = f ? ` : ${f}` : "";
      u.toLowerCase() === "end" || u.toLowerCase() === "final" ? r.push(`${d} --> [*]${m}`) : r.push(`${d} --> ${u}${m}`);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function jv(o) {
  const t = o.split(`
`).filter((e) => e.trim()), r = ["@startuml"], n = /* @__PURE__ */ new Map(), i = [];
  t.forEach((e) => {
    var u;
    const s = e.trim(), h = s.match(/^\((\w+)\)\s+(.+)$/);
    h && n.set(h[2], h[1]);
    const d = s.match(/^(.+?)\s*->\s*(.+?)(\s*:\s*(.+))?$/);
    d && !s.startsWith("(") && i.push({
      from: d[1].trim(),
      to: d[2].trim(),
      label: (u = d[4]) == null ? void 0 : u.trim()
    });
  });
  const a = /* @__PURE__ */ new Set();
  return i.forEach((e) => {
    const s = n.get(e.from) || "process", h = n.get(e.to) || "process";
    s === "start" && !a.has("__start__") && (r.push("start"), a.add("__start__")), s !== "start" && s !== "end" && !a.has(e.from) && (s === "decision" ? r.push(`if (${e.from}?) then (${e.label || "yes"})`) : r.push(`:${e.from};`), a.add(e.from)), h === "end" && !a.has("__end__") ? (r.push("stop"), a.add("__end__")) : h !== "start" && !a.has(e.to) && (h === "decision" ? r.push(`if (${e.to}?) then (yes)`) : h !== "end" && r.push(`:${e.to};`), a.add(e.to));
  }), !a.has("__end__") && n.has("End") && r.push("stop"), r.push("@enduml"), r.join(`
`);
}
function Hv(o) {
  const t = o.split(`
`).filter((n) => n.trim()), r = ["@startuml"];
  return t.forEach((n) => {
    const i = n.trim();
    if (i.startsWith("actor ")) {
      r.push(i);
      return;
    }
    const a = i.match(/^\(([^)]+)\)$/);
    if (a) {
      r.push(`usecase "${a[1]}"`);
      return;
    }
    const e = i.match(/^(\w+)\s*->\s*(\w+)$/);
    if (e) {
      r.push(`${e[1]} --> (${e[2]})`);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function Yv(o) {
  const t = o.split(`
`).filter((n) => n.trim()), r = ["@startuml"];
  return t.forEach((n) => {
    const i = n.trim(), a = i.match(/^\[(\w+)\]\s+(.+)$/);
    if (a) {
      const [, s, h] = a, d = h.split(",").map((u) => u.trim());
      r.push(`package "${s}" {`), d.forEach((u) => {
        s === "data" || s === "databases" ? r.push(`  database "${u}"`) : s === "clients" ? r.push(`  node "${u}"`) : r.push(`  component "${u}"`);
      }), r.push("}"), r.push("");
      return;
    }
    const e = i.match(/^(.+?)\s*->\s*(.+)$/);
    if (e && !i.startsWith("[")) {
      r.push(`[${e[1].trim()}] --> [${e[2].trim()}]`);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function Mg(o) {
  const t = o.split(`
`), r = ["@startmindmap"];
  return t.forEach((n) => {
    if (!n.trim()) return;
    const i = n.match(/^(\s*)/)[1].length, a = Math.floor(i / 2) + 1, e = n.trim();
    e && r.push("*".repeat(a) + " " + e);
  }), r.push("@endmindmap"), r.join(`
`);
}
function Vv(o) {
  const t = o.split(`
`).filter((n) => n.trim()), r = ["@startgantt"];
  return t.forEach((n) => {
    const a = n.trim().match(/^([^,]+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?$/);
    if (a) {
      const [, e, s, h] = a;
      r.push(`[${e.trim()}] lasts ${h} days`), parseInt(s) > 0 && r.push(`[${e.trim()}] starts at day ${s}`);
      return;
    }
  }), r.push("@endgantt"), r.join(`
`);
}
function Kv(o) {
  const t = o.split(`
`), r = ["@startuml"];
  let n = null;
  return t.forEach((i) => {
    const a = i.trim(), e = a.match(/^CREATE\s+TABLE\s+(\w+)/i);
    if (e) {
      n && (r.push("}"), r.push("")), n = e[1], r.push(`entity "${n}" {`);
      return;
    }
    const s = a.match(/^(\w+)\s+(\w+)(.*)$/);
    if (s && n && !a.startsWith("CREATE") && !a.startsWith(")")) {
      const [, h, d, u] = s, m = /PRIMARY\s+KEY/i.test(u) ? "*" : "";
      r.push(`  ${m}${h} : ${d}`);
      return;
    }
    if (a === ");" && n) {
      r.push("}"), n = null;
      return;
    }
  }), n && r.push("}"), r.push("@enduml"), r.join(`
`);
}
function Xv(o) {
  return Mg(o);
}
function Qv(o, t = "diagram") {
  const r = new Blob([o], { type: "text/plain" }), n = URL.createObjectURL(r), i = document.createElement("a");
  i.href = n, i.download = `${t}.puml`, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(n);
}
async function Zv(o) {
  try {
    return await navigator.clipboard.writeText(o), !0;
  } catch (t) {
    return console.error("Failed to copy to clipboard:", t), !1;
  }
}
const Oe = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  red: "#EF4444",
  indigo: "#6366F1"
};
function Jv({ isOpen: o, onClose: t, onImport: r, theme: n }) {
  const [i, a] = V(""), [e, s] = V(null), [h, d] = V(""), [u, f] = V(null), m = _e(null), g = (n == null ? void 0 : n.name) === "dark";
  he(() => {
    o || (a(""), s(null), d(""), f(null));
  }, [o]), he(() => {
    if (i.trim())
      try {
        const x = Cg(i);
        f(x);
      } catch {
        f(null);
      }
    else
      f(null);
  }, [i]);
  const y = (x) => {
    var E;
    const C = (E = x.target.files) == null ? void 0 : E[0];
    if (!C) return;
    const w = new FileReader();
    w.onload = (k) => {
      a(k.target.result), s(null), d("");
    }, w.onerror = () => {
      d("Failed to read file");
    }, w.readAsText(C);
  }, c = () => {
    if (d(""), s(null), !i.trim()) {
      d("Please enter PlantUML source code");
      return;
    }
    try {
      const x = Rv(i);
      s(x);
    } catch (x) {
      d(x.message || "Failed to convert PlantUML");
    }
  }, p = () => {
    e && r(e.type, e.source);
  };
  if (!o) return null;
  const b = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
      padding: 20
    },
    modal: {
      background: (n == null ? void 0 : n.modalBg) || (g ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),
      borderRadius: 16,
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      width: "100%",
      maxWidth: 700,
      maxHeight: "90vh",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column"
    },
    header: {
      padding: "16px 20px",
      borderBottom: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: `${Oe.green}15`
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    headerIcon: {
      fontSize: "1.2rem"
    },
    title: {
      fontWeight: 600,
      color: (n == null ? void 0 : n.textPrimary) || "#fff"
    },
    subtitle: {
      fontSize: "0.7rem",
      color: (n == null ? void 0 : n.textSecondary) || "#888"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "1.2rem",
      cursor: "pointer",
      padding: 4
    },
    content: {
      padding: 20,
      flex: 1,
      overflowY: "auto"
    },
    inputSection: {
      marginBottom: 16
    },
    label: {
      display: "block",
      fontSize: "0.8rem",
      fontWeight: 500,
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      marginBottom: 8
    },
    textarea: {
      width: "100%",
      height: 200,
      padding: 12,
      background: (n == null ? void 0 : n.inputBg) || (g ? "rgba(0,0,0,0.3)" : "#fff"),
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 8,
      color: (n == null ? void 0 : n.textPrimary) || "#fff",
      fontFamily: "Monaco, Consolas, monospace",
      fontSize: "0.85rem",
      resize: "vertical",
      outline: "none"
    },
    fileRow: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 12
    },
    uploadBtn: {
      padding: "8px 16px",
      background: `${Oe.blue}20`,
      border: `1px solid ${Oe.blue}`,
      borderRadius: 6,
      color: Oe.blue,
      fontSize: "0.8rem",
      fontWeight: 500,
      cursor: "pointer"
    },
    fileHint: {
      fontSize: "0.75rem",
      color: (n == null ? void 0 : n.textMuted) || "#666"
    },
    typeIndicator: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      background: `${Oe.purple}20`,
      borderRadius: 6,
      fontSize: "0.75rem",
      color: Oe.purple,
      marginTop: 8
    },
    previewBtn: {
      width: "100%",
      padding: "12px 20px",
      background: `linear-gradient(135deg, ${Oe.purple}, ${Oe.indigo})`,
      border: "none",
      borderRadius: 8,
      color: "#fff",
      fontSize: "0.9rem",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: 16
    },
    previewBtnDisabled: {
      width: "100%",
      padding: "12px 20px",
      background: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: 8,
      color: "#666",
      fontSize: "0.9rem",
      fontWeight: 600,
      cursor: "not-allowed",
      marginTop: 16
    },
    error: {
      marginTop: 16,
      padding: "12px 16px",
      background: `${Oe.red}15`,
      border: `1px solid ${Oe.red}40`,
      borderRadius: 8,
      color: Oe.red,
      fontSize: "0.85rem"
    },
    previewSection: {
      marginTop: 20,
      padding: 16,
      background: g ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      borderRadius: 12
    },
    previewHeader: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 12
    },
    previewIcon: {
      fontSize: "1rem"
    },
    previewTitle: {
      fontSize: "0.9rem",
      fontWeight: 600,
      color: Oe.green
    },
    previewType: {
      display: "inline-block",
      padding: "4px 10px",
      background: `${Oe.green}20`,
      borderRadius: 6,
      color: Oe.green,
      fontSize: "0.8rem",
      fontWeight: 500,
      marginBottom: 12
    },
    dslPreview: {
      background: (n == null ? void 0 : n.inputBg) || (g ? "rgba(0,0,0,0.4)" : "#fff"),
      padding: 12,
      borderRadius: 8,
      maxHeight: 200,
      overflow: "auto",
      fontFamily: "Monaco, Consolas, monospace",
      fontSize: "0.75rem",
      color: (n == null ? void 0 : n.editorText) || Oe.purple,
      whiteSpace: "pre-wrap",
      lineHeight: 1.5
    },
    footer: {
      padding: "12px 20px",
      borderTop: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    },
    cancelBtn: {
      padding: "8px 16px",
      background: "rgba(255,255,255,0.1)",
      border: `1px solid ${(n == null ? void 0 : n.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 6,
      color: (n == null ? void 0 : n.textSecondary) || "#888",
      fontSize: "0.8rem",
      cursor: "pointer"
    },
    importBtn: {
      padding: "8px 20px",
      background: `linear-gradient(135deg, ${Oe.green}, ${Oe.blue})`,
      border: "none",
      borderRadius: 6,
      color: "#fff",
      fontSize: "0.8rem",
      fontWeight: 600,
      cursor: "pointer"
    },
    importBtnDisabled: {
      padding: "8px 20px",
      background: "rgba(255,255,255,0.1)",
      border: "none",
      borderRadius: 6,
      color: "#666",
      fontSize: "0.8rem",
      cursor: "not-allowed"
    },
    exampleHint: {
      marginTop: 12,
      padding: 12,
      background: `${Oe.blue}10`,
      borderRadius: 8,
      fontSize: "0.75rem",
      color: (n == null ? void 0 : n.textSecondary) || "#888"
    },
    exampleCode: {
      fontFamily: "Monaco, Consolas, monospace",
      fontSize: "0.7rem",
      color: Oe.blue,
      marginTop: 8,
      whiteSpace: "pre"
    }
  };
  return /* @__PURE__ */ l("div", { style: b.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: b.modal, onClick: (x) => x.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: b.header, children: [
      /* @__PURE__ */ S("div", { style: b.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: b.headerIcon, children: "🌱" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: b.title, children: "Import from PlantUML" }),
          /* @__PURE__ */ l("div", { style: b.subtitle, children: "Convert PlantUML diagrams to DDFlow" })
        ] })
      ] }),
      /* @__PURE__ */ l("button", { style: b.closeBtn, onClick: t, children: "✕" })
    ] }),
    /* @__PURE__ */ S("div", { style: b.content, children: [
      /* @__PURE__ */ S("div", { style: b.inputSection, children: [
        /* @__PURE__ */ l("label", { style: b.label, children: "PLANTUML SOURCE" }),
        /* @__PURE__ */ l(
          "textarea",
          {
            style: b.textarea,
            value: i,
            onChange: (x) => {
              a(x.target.value), s(null), d("");
            },
            placeholder: `@startuml
participant Client
participant Server
Client -> Server: Request
Server --> Client: Response
@enduml`,
            spellCheck: !1
          }
        ),
        /* @__PURE__ */ S("div", { style: b.fileRow, children: [
          /* @__PURE__ */ l(
            "button",
            {
              style: b.uploadBtn,
              onClick: () => {
                var x;
                return (x = m.current) == null ? void 0 : x.click();
              },
              children: "Upload .puml File"
            }
          ),
          /* @__PURE__ */ l("span", { style: b.fileHint, children: "Supports .puml, .plantuml, .txt files" }),
          /* @__PURE__ */ l(
            "input",
            {
              ref: m,
              type: "file",
              accept: ".puml,.plantuml,.txt",
              onChange: y,
              style: { display: "none" }
            }
          )
        ] }),
        u && /* @__PURE__ */ S("div", { style: b.typeIndicator, children: [
          /* @__PURE__ */ l("span", { children: "Detected type:" }),
          /* @__PURE__ */ l("strong", { children: u })
        ] })
      ] }),
      !i && /* @__PURE__ */ S("div", { style: b.exampleHint, children: [
        /* @__PURE__ */ l("strong", { children: "Supported diagram types:" }),
        " Sequence, Class, State, Activity (Flowchart), Use Case, Component (Architecture), Mind Map, Gantt, ERD",
        /* @__PURE__ */ l("div", { style: b.exampleCode, children: `@startuml
class User {
  +id: string
  +login(): boolean
}
@enduml` })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          style: i.trim() ? b.previewBtn : b.previewBtnDisabled,
          onClick: c,
          disabled: !i.trim(),
          children: "Preview Conversion"
        }
      ),
      h && /* @__PURE__ */ S("div", { style: b.error, children: [
        "❌ ",
        h
      ] }),
      e && /* @__PURE__ */ S("div", { style: b.previewSection, children: [
        /* @__PURE__ */ S("div", { style: b.previewHeader, children: [
          /* @__PURE__ */ l("span", { style: b.previewIcon, children: "✅" }),
          /* @__PURE__ */ l("span", { style: b.previewTitle, children: "Conversion Successful" })
        ] }),
        /* @__PURE__ */ l("div", { style: b.previewType, children: e.type }),
        /* @__PURE__ */ l("div", { style: b.dslPreview, children: e.source })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: b.footer, children: [
      /* @__PURE__ */ l("button", { style: b.cancelBtn, onClick: t, children: "Cancel" }),
      /* @__PURE__ */ l(
        "button",
        {
          style: e ? b.importBtn : b.importBtnDisabled,
          onClick: p,
          disabled: !e,
          children: "Import Diagram"
        }
      )
    ] })
  ] }) });
}
const Fe = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  red: "#EF4444",
  indigo: "#6366F1"
}, Jh = [
  "sequence",
  "class",
  "state",
  "flowchart",
  "usecase",
  "architecture",
  "component",
  "mindmap",
  "wbs",
  "gantt",
  "erd",
  "orgchart"
];
function ew({ isOpen: o, onClose: t, diagramType: r, diagramSource: n, theme: i }) {
  const [a, e] = V(""), [s, h] = V(""), [d, u] = V(!1), f = (i == null ? void 0 : i.name) === "dark";
  he(() => {
    if (o && r && n) {
      if (h(""), u(!1), !Jh.includes(r)) {
        h(`Export to PlantUML is not supported for "${r}" diagrams.

Supported types: ${Jh.join(", ")}`), e("");
        return;
      }
      try {
        const c = qv(r, n);
        e(c);
      } catch (c) {
        h(c.message || "Failed to convert to PlantUML"), e("");
      }
    }
  }, [o, r, n]), he(() => {
    o || (e(""), h(""), u(!1));
  }, [o]);
  const m = async () => {
    await Zv(a) && (u(!0), setTimeout(() => u(!1), 2e3));
  }, g = () => {
    const c = `diagram-${r}`;
    Qv(a, c);
  };
  if (!o) return null;
  const y = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
      padding: 20
    },
    modal: {
      background: (i == null ? void 0 : i.modalBg) || (f ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),
      borderRadius: 16,
      border: `1px solid ${(i == null ? void 0 : i.border) || "rgba(255,255,255,0.1)"}`,
      width: "100%",
      maxWidth: 700,
      maxHeight: "90vh",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column"
    },
    header: {
      padding: "16px 20px",
      borderBottom: `1px solid ${(i == null ? void 0 : i.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: `${Fe.green}15`
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    headerIcon: {
      fontSize: "1.2rem"
    },
    title: {
      fontWeight: 600,
      color: (i == null ? void 0 : i.textPrimary) || "#fff"
    },
    subtitle: {
      fontSize: "0.7rem",
      color: (i == null ? void 0 : i.textSecondary) || "#888"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: (i == null ? void 0 : i.textSecondary) || "#888",
      fontSize: "1.2rem",
      cursor: "pointer",
      padding: 4
    },
    content: {
      padding: 20,
      flex: 1,
      overflowY: "auto"
    },
    typeInfo: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    },
    typeBadge: {
      display: "inline-block",
      padding: "6px 14px",
      background: `${Fe.purple}20`,
      borderRadius: 8,
      color: Fe.purple,
      fontSize: "0.85rem",
      fontWeight: 600
    },
    conversionArrow: {
      fontSize: "1.2rem",
      color: (i == null ? void 0 : i.textMuted) || "#666"
    },
    outputBadge: {
      display: "inline-block",
      padding: "6px 14px",
      background: `${Fe.green}20`,
      borderRadius: 8,
      color: Fe.green,
      fontSize: "0.85rem",
      fontWeight: 600
    },
    label: {
      display: "block",
      fontSize: "0.8rem",
      fontWeight: 500,
      color: (i == null ? void 0 : i.textSecondary) || "#888",
      marginBottom: 8
    },
    textarea: {
      width: "100%",
      height: 300,
      padding: 12,
      background: (i == null ? void 0 : i.inputBg) || (f ? "rgba(0,0,0,0.3)" : "#fff"),
      border: `1px solid ${(i == null ? void 0 : i.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 8,
      color: (i == null ? void 0 : i.textPrimary) || "#fff",
      fontFamily: "Monaco, Consolas, monospace",
      fontSize: "0.85rem",
      resize: "vertical",
      outline: "none"
    },
    actions: {
      display: "flex",
      gap: 10,
      marginTop: 16
    },
    copyBtn: {
      flex: 1,
      padding: "12px 20px",
      background: d ? `${Fe.green}20` : `${Fe.blue}20`,
      border: `1px solid ${d ? Fe.green : Fe.blue}`,
      borderRadius: 8,
      color: d ? Fe.green : Fe.blue,
      fontSize: "0.85rem",
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    },
    downloadBtn: {
      flex: 1,
      padding: "12px 20px",
      background: `linear-gradient(135deg, ${Fe.purple}, ${Fe.indigo})`,
      border: "none",
      borderRadius: 8,
      color: "#fff",
      fontSize: "0.85rem",
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    },
    error: {
      padding: "20px",
      background: `${Fe.red}10`,
      border: `1px solid ${Fe.red}30`,
      borderRadius: 12,
      textAlign: "center"
    },
    errorIcon: {
      fontSize: "2rem",
      marginBottom: 12
    },
    errorText: {
      color: Fe.red,
      fontSize: "0.9rem",
      whiteSpace: "pre-wrap"
    },
    footer: {
      padding: "12px 20px",
      borderTop: `1px solid ${(i == null ? void 0 : i.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      justifyContent: "flex-end"
    },
    closeFooterBtn: {
      padding: "8px 20px",
      background: "rgba(255,255,255,0.1)",
      border: `1px solid ${(i == null ? void 0 : i.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 6,
      color: (i == null ? void 0 : i.textSecondary) || "#888",
      fontSize: "0.8rem",
      cursor: "pointer"
    },
    hint: {
      marginTop: 12,
      padding: 12,
      background: `${Fe.blue}10`,
      borderRadius: 8,
      fontSize: "0.75rem",
      color: (i == null ? void 0 : i.textSecondary) || "#888"
    }
  };
  return /* @__PURE__ */ l("div", { style: y.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: y.modal, onClick: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: y.header, children: [
      /* @__PURE__ */ S("div", { style: y.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: y.headerIcon, children: "🌱" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: y.title, children: "Export to PlantUML" }),
          /* @__PURE__ */ l("div", { style: y.subtitle, children: "Convert DDFlow diagram to PlantUML format" })
        ] })
      ] }),
      /* @__PURE__ */ l("button", { style: y.closeBtn, onClick: t, children: "✕" })
    ] }),
    /* @__PURE__ */ S("div", { style: y.content, children: [
      /* @__PURE__ */ S("div", { style: y.typeInfo, children: [
        /* @__PURE__ */ l("span", { style: y.typeBadge, children: r }),
        /* @__PURE__ */ l("span", { style: y.conversionArrow, children: "→" }),
        /* @__PURE__ */ l("span", { style: y.outputBadge, children: "PlantUML" })
      ] }),
      s ? (
        /* Error State */
        /* @__PURE__ */ S("div", { style: y.error, children: [
          /* @__PURE__ */ l("div", { style: y.errorIcon, children: "⚠️" }),
          /* @__PURE__ */ l("div", { style: y.errorText, children: s })
        ] })
      ) : (
        /* Success State */
        /* @__PURE__ */ S(yt, { children: [
          /* @__PURE__ */ l("label", { style: y.label, children: "PLANTUML OUTPUT" }),
          /* @__PURE__ */ l(
            "textarea",
            {
              style: y.textarea,
              value: a,
              readOnly: !0,
              spellCheck: !1
            }
          ),
          /* @__PURE__ */ S("div", { style: y.actions, children: [
            /* @__PURE__ */ l("button", { style: y.copyBtn, onClick: m, children: d ? "✓ Copied!" : "📋 Copy to Clipboard" }),
            /* @__PURE__ */ l("button", { style: y.downloadBtn, onClick: g, children: "⬇️ Download .puml" })
          ] }),
          /* @__PURE__ */ S("div", { style: y.hint, children: [
            /* @__PURE__ */ l("strong", { children: "Tip:" }),
            " You can use this PlantUML code with online renderers like",
            " ",
            /* @__PURE__ */ l(
              "a",
              {
                href: "https://www.plantuml.com/plantuml/uml/",
                target: "_blank",
                rel: "noopener noreferrer",
                style: { color: Fe.blue },
                children: "plantuml.com"
              }
            ),
            " ",
            "or in VS Code with the PlantUML extension."
          ] })
        ] })
      )
    ] }),
    /* @__PURE__ */ l("div", { style: y.footer, children: /* @__PURE__ */ l("button", { style: y.closeFooterBtn, onClick: t, children: "Close" }) })
  ] }) });
}
const L = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  red: "#EF4444",
  pink: "#EC4899",
  teal: "#14B8A6"
}, ef = {
  process: {
    label: "Process",
    shapes: [
      {
        id: "flowchart",
        label: "Flowchart",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "8", width: "16", height: "10", rx: "2", fill: `${L.orange}40`, stroke: L.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "24", y: "8", width: "16", height: "10", rx: "2", fill: `${L.red}40`, stroke: L.red, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "44", y: "8", width: "16", height: "10", rx: "2", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "28", width: "16", height: "10", rx: "2", fill: `${L.pink}40`, stroke: L.pink, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "28", width: "16", height: "10", rx: "2", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M20 18 L22 28", stroke: "#666", strokeWidth: "1", strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: "M32 18 L32 28", stroke: "#666", strokeWidth: "1", strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: "M44 18 L42 28", stroke: "#666", strokeWidth: "1", strokeLinecap: "round" })
        ] }),
        template: "flowchart",
        dsl: `(start) Start -> (process) Step 1 -> (decision) Check?
(decision) Check? -> |yes| (process) Step 2 -> (end) End
(decision) Check? -> |no| (process) Step 3 -> (end) End`
      },
      {
        id: "orgchart",
        label: "Org Chart",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "22", y: "4", width: "20", height: "10", rx: "2", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "34", width: "16", height: "10", rx: "2", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "24", y: "34", width: "16", height: "10", rx: "2", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "44", y: "34", width: "16", height: "10", rx: "2", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M32 14 L32 24 M12 24 L52 24 M12 24 L12 34 M32 24 L32 34 M52 24 L52 34", stroke: "#666", strokeWidth: "1", strokeLinecap: "round" })
        ] }),
        template: "orgchart",
        dsl: `CEO
  VP Engineering
    Team Lead
    Senior Dev
  VP Sales
    Sales Manager`
      },
      {
        id: "cycle",
        label: "Cycle",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "16", fill: "none", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "8", r: "6", fill: `${L.orange}40`, stroke: L.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "46", cy: "24", r: "6", fill: `${L.red}40`, stroke: L.red, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "40", r: "6", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "18", cy: "24", r: "6", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M38 10 L44 18", stroke: "#666", strokeWidth: "1", strokeLinecap: "round", markerEnd: "url(#arrow)" }),
          /* @__PURE__ */ l("path", { d: "M44 30 L38 38", stroke: "#666", strokeWidth: "1", strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: "M26 38 L20 30", stroke: "#666", strokeWidth: "1", strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: "M20 18 L26 10", stroke: "#666", strokeWidth: "1", strokeLinecap: "round" })
        ] }),
        template: "state",
        dsl: `[*] -> Planning
Planning -> Development : start
Development -> Testing : complete
Testing -> Review : pass
Review -> Planning : iterate
Review -> [*] : done`
      },
      {
        id: "sequence",
        label: "Sequence",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "12", height: "8", rx: "2", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "26", y: "4", width: "12", height: "8", rx: "2", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "48", y: "4", width: "12", height: "8", rx: "2", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "10", y1: "12", x2: "10", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("line", { x1: "32", y1: "12", x2: "32", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("line", { x1: "54", y1: "12", x2: "54", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("path", { d: "M10 20 L32 20", stroke: L.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M32 28 L54 28", stroke: L.pink, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M54 36 L32 36", stroke: L.teal, strokeWidth: "1.5", strokeDasharray: "3,2" })
        ] }),
        template: "sequence",
        dsl: `participant Client
participant Server
participant Database

Client -> Server: Request
Server -> Database: Query
Database --> Server: Result
Server --> Client: Response`
      },
      {
        id: "network",
        label: "Network",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "8", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "6", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "12", r: "6", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "36", r: "6", fill: `${L.orange}40`, stroke: L.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "36", r: "6", fill: `${L.red}40`, stroke: L.red, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M24 20 L16 14", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M40 20 L48 14", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M24 28 L16 34", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M40 28 L48 34", stroke: "#666", strokeWidth: "1" })
        ] }),
        template: "network",
        dsl: `router: Router [router]
server: Web Server [server] 192.168.1.10
db: Database [database] 192.168.1.20
client1: Client 1 [desktop]
client2: Client 2 [laptop]

router -- server
router -- db
router -- client1
router -- client2`
      },
      {
        id: "kanban",
        label: "Kanban",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "16", height: "40", rx: "2", fill: "#f5f5f5", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "24", y: "4", width: "16", height: "40", rx: "2", fill: "#f5f5f5", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "44", y: "4", width: "16", height: "40", rx: "2", fill: "#f5f5f5", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "6", y: "12", width: "12", height: "6", rx: "1", fill: `${L.orange}60` }),
          /* @__PURE__ */ l("rect", { x: "6", y: "20", width: "12", height: "6", rx: "1", fill: `${L.orange}60` }),
          /* @__PURE__ */ l("rect", { x: "26", y: "12", width: "12", height: "6", rx: "1", fill: `${L.blue}60` }),
          /* @__PURE__ */ l("rect", { x: "46", y: "12", width: "12", height: "6", rx: "1", fill: `${L.green}60` }),
          /* @__PURE__ */ l("rect", { x: "46", y: "20", width: "12", height: "6", rx: "1", fill: `${L.green}60` })
        ] }),
        template: "gantt",
        dsl: `Task 1: 2024-01-01, 5d
Task 2: 2024-01-03, 3d
Task 3: 2024-01-06, 4d
Task 4: 2024-01-08, 2d`
      }
    ]
  },
  data: {
    label: "Data",
    shapes: [
      {
        id: "barchart",
        label: "Bar Chart",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "8", y: "28", width: "10", height: "16", rx: "1", fill: `${L.blue}60` }),
          /* @__PURE__ */ l("rect", { x: "22", y: "18", width: "10", height: "26", rx: "1", fill: `${L.purple}60` }),
          /* @__PURE__ */ l("rect", { x: "36", y: "8", width: "10", height: "36", rx: "1", fill: `${L.green}60` }),
          /* @__PURE__ */ l("rect", { x: "50", y: "22", width: "10", height: "22", rx: "1", fill: `${L.orange}60` }),
          /* @__PURE__ */ l("line", { x1: "4", y1: "44", x2: "60", y2: "44", stroke: "#666", strokeWidth: "1" })
        ] }),
        template: "pie",
        dsl: `Sales: 45
Marketing: 30
Engineering: 50
Support: 25`
      },
      {
        id: "piechart",
        label: "Pie Chart",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "18", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M32 24 L32 6 A18 18 0 0 1 48 16 Z", fill: `${L.purple}60` }),
          /* @__PURE__ */ l("path", { d: "M32 24 L48 16 A18 18 0 0 1 44 40 Z", fill: `${L.green}60` }),
          /* @__PURE__ */ l("path", { d: "M32 24 L44 40 A18 18 0 0 1 20 40 Z", fill: `${L.orange}60` })
        ] }),
        template: "pie",
        dsl: `Revenue: 35
Costs: 25
Profit: 20
Other: 20`
      },
      {
        id: "erd",
        label: "ERD",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "24", height: "18", rx: "2", fill: "#f8f8f8", stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "24", height: "6", rx: "2", fill: `${L.blue}30` }),
          /* @__PURE__ */ l("rect", { x: "36", y: "26", width: "24", height: "18", rx: "2", fill: "#f8f8f8", stroke: L.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "36", y: "26", width: "24", height: "6", rx: "2", fill: `${L.green}30` }),
          /* @__PURE__ */ l("path", { d: "M28 13 L36 35", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("circle", { cx: "28", cy: "13", r: "2", fill: "#666" }),
          /* @__PURE__ */ l("circle", { cx: "36", cy: "35", r: "2", fill: "none", stroke: "#666", strokeWidth: "1" })
        ] }),
        template: "erd",
        dsl: `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  total DECIMAL
);`
      },
      {
        id: "class",
        label: "Class Diagram",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "8", y: "4", width: "22", height: "20", rx: "2", fill: "#f8f8f8", stroke: L.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "10", x2: "30", y2: "10", stroke: L.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "16", x2: "30", y2: "16", stroke: L.purple, strokeWidth: "0.5" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "24", width: "22", height: "20", rx: "2", fill: "#f8f8f8", stroke: L.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "34", y1: "30", x2: "56", y2: "30", stroke: L.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "34", y1: "36", x2: "56", y2: "36", stroke: L.orange, strokeWidth: "0.5" }),
          /* @__PURE__ */ l("path", { d: "M19 24 L45 24", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("polygon", { points: "19,24 23,22 23,26", fill: "#666" })
        ] }),
        template: "class",
        dsl: `class User {
  +id: int
  +name: string
  +login(): boolean
}

class Order {
  +id: int
  +total: decimal
  +process(): void
}

User "1" -- "*" Order`
      },
      {
        id: "linechart",
        label: "Line Chart",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("line", { x1: "8", y1: "40", x2: "56", y2: "40", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "8", x2: "8", y2: "40", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M12 32 L22 24 L32 28 L42 16 L52 20", stroke: L.blue, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ l("path", { d: "M12 36 L22 30 L32 34 L42 26 L52 30", stroke: L.green, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "32", r: "2", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "28", r: "2", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "20", r: "2", fill: L.blue })
        ] }),
        template: "quadrant",
        dsl: `title: Performance Analysis
x-axis: Time
y-axis: Value

Q1: Low Risk, High Value
Q2: High Risk, High Value
Q3: High Risk, Low Value
Q4: Low Risk, Low Value`
      },
      {
        id: "radar",
        label: "Radar",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("polygon", { points: "32,8 52,20 48,40 16,40 12,20", fill: "none", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("polygon", { points: "32,14 46,22 43,36 21,36 18,22", fill: "none", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("polygon", { points: "32,20 40,25 38,32 26,32 24,25", fill: "none", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("polygon", { points: "32,12 48,21 44,38 20,38 16,21", fill: `${L.blue}30`, stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "12", r: "2", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "21", r: "2", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "44", cy: "38", r: "2", fill: L.blue })
        ] }),
        template: "pie",
        dsl: `Performance: 85
Quality: 70
Speed: 90
Reliability: 75
Cost: 60`
      }
    ]
  },
  diagrams: {
    label: "Diagrams",
    shapes: [
      {
        id: "mindmap",
        label: "Mind Map",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("ellipse", { cx: "32", cy: "24", rx: "12", ry: "8", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("ellipse", { cx: "10", cy: "12", rx: "8", ry: "5", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "54", cy: "12", rx: "8", ry: "5", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "10", cy: "36", rx: "8", ry: "5", fill: `${L.orange}40`, stroke: L.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "54", cy: "36", rx: "8", ry: "5", fill: `${L.red}40`, stroke: L.red, strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M20 20 L14 15", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M44 20 L50 15", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M20 28 L14 33", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M44 28 L50 33", stroke: "#666", strokeWidth: "1" })
        ] }),
        template: "mindmap",
        dsl: `Central Topic
  Branch 1
    Sub-topic A
    Sub-topic B
  Branch 2
    Sub-topic C
  Branch 3
    Sub-topic D
    Sub-topic E`
      },
      {
        id: "architecture",
        label: "Architecture",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "56", height: "10", rx: "2", fill: `${L.blue}20`, stroke: L.blue, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "6", width: "14", height: "6", rx: "1", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "25", y: "6", width: "14", height: "6", rx: "1", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "42", y: "6", width: "14", height: "6", rx: "1", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "18", width: "56", height: "10", rx: "2", fill: `${L.green}20`, stroke: L.green, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "20", width: "22", height: "6", rx: "1", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "20", width: "22", height: "6", rx: "1", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "32", width: "56", height: "10", rx: "2", fill: `${L.purple}20`, stroke: L.purple, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "18", y: "34", width: "28", height: "6", rx: "1", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1" })
        ] }),
        template: "architecture",
        dsl: `[clients] Web App, Mobile App, CLI
[services] API Gateway, Auth Service, User Service
[data] PostgreSQL, Redis, S3

Web App -> API Gateway
Mobile App -> API Gateway
API Gateway -> Auth Service
API Gateway -> User Service
User Service -> PostgreSQL
Auth Service -> Redis`
      },
      {
        id: "usecase",
        label: "Use Case",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "18", y: "4", width: "40", height: "40", rx: "4", fill: "#f8f8f8", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "14", rx: "12", ry: "6", fill: `${L.blue}30`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "28", rx: "12", ry: "6", fill: `${L.green}30`, stroke: L.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "42", rx: "12", ry: "6", fill: `${L.orange}30`, stroke: L.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("circle", { cx: "8", cy: "14", r: "4", fill: "none", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "18", x2: "8", y2: "28", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "4", y1: "22", x2: "12", y2: "22", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "28", x2: "4", y2: "36", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "28", x2: "12", y2: "36", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M12 14 L26 14", stroke: "#666", strokeWidth: "1" })
        ] }),
        template: "usecase",
        dsl: `actor User
actor Admin

User -> Login
User -> View Dashboard
User -> Update Profile

Admin -> Manage Users
Admin -> View Reports`
      },
      {
        id: "timeline",
        label: "Timeline",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("line", { x1: "8", y1: "24", x2: "56", y2: "24", stroke: "#666", strokeWidth: "2" }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "24", r: "4", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "4", fill: L.green }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "24", r: "4", fill: L.purple }),
          /* @__PURE__ */ l("rect", { x: "10", y: "8", width: "12", height: "8", rx: "2", fill: `${L.blue}30`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "26", y: "32", width: "12", height: "8", rx: "2", fill: `${L.green}30`, stroke: L.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "42", y: "8", width: "12", height: "8", rx: "2", fill: `${L.purple}30`, stroke: L.purple, strokeWidth: "1" })
        ] }),
        template: "timeline",
        dsl: `2024-01: Project Start
2024-03: Phase 1 Complete
2024-06: Beta Release
2024-09: v1.0 Launch
2024-12: Year Review`
      },
      {
        id: "journey",
        label: "User Journey",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("circle", { cx: "8", cy: "24", r: "4", fill: L.green }),
          /* @__PURE__ */ l("circle", { cx: "22", cy: "16", r: "4", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "36", cy: "28", r: "4", fill: L.orange }),
          /* @__PURE__ */ l("circle", { cx: "50", cy: "20", r: "4", fill: L.purple }),
          /* @__PURE__ */ l("path", { d: "M12 24 Q17 16, 18 16", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M26 16 Q31 16, 32 28", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M40 28 Q45 28, 46 20", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M8 34 Q22 42, 36 38 Q50 34, 56 36", stroke: L.green, strokeWidth: "2", fill: "none", strokeDasharray: "4,2" })
        ] }),
        template: "journey",
        dsl: `[start] Discover
[action] Sign Up
[action] Explore
[decision] Subscribe?
[success] Premium User
[end] Loyal Customer

Discover -> Sign Up -> Explore -> Subscribe?
Subscribe? -yes-> Premium User -> Loyal Customer
Subscribe? -no-> Explore`
      },
      {
        id: "git",
        label: "Git Graph",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("line", { x1: "16", y1: "8", x2: "16", y2: "40", stroke: L.blue, strokeWidth: "2" }),
          /* @__PURE__ */ l("line", { x1: "32", y1: "16", x2: "32", y2: "40", stroke: L.green, strokeWidth: "2" }),
          /* @__PURE__ */ l("line", { x1: "48", y1: "24", x2: "48", y2: "40", stroke: L.purple, strokeWidth: "2" }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "12", r: "3", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "24", r: "3", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "36", r: "3", fill: L.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "20", r: "3", fill: L.green }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "32", r: "3", fill: L.green }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "28", r: "3", fill: L.purple }),
          /* @__PURE__ */ l("path", { d: "M16 12 Q24 12, 32 20", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M32 20 Q40 20, 48 28", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M32 32 L16 36", stroke: "#666", strokeWidth: "1" })
        ] }),
        template: "gitgraph",
        dsl: `commit: Initial commit
branch: feature
commit: Add feature
checkout: main
commit: Fix bug
merge: feature
commit: Release v1.0`
      }
    ]
  },
  components: {
    label: "Components",
    shapes: [
      {
        id: "deployment",
        label: "Deployment",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "26", height: "18", rx: "3", fill: `${L.blue}20`, stroke: L.blue, strokeWidth: "1.5", strokeDasharray: "4,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "8", width: "8", height: "6", rx: "1", fill: `${L.blue}50` }),
          /* @__PURE__ */ l("rect", { x: "18", y: "8", width: "8", height: "6", rx: "1", fill: `${L.blue}50` }),
          /* @__PURE__ */ l("rect", { x: "34", y: "26", width: "26", height: "18", rx: "3", fill: `${L.green}20`, stroke: L.green, strokeWidth: "1.5", strokeDasharray: "4,2" }),
          /* @__PURE__ */ l("rect", { x: "38", y: "30", width: "8", height: "6", rx: "1", fill: `${L.green}50` }),
          /* @__PURE__ */ l("rect", { x: "48", y: "30", width: "8", height: "6", rx: "1", fill: `${L.green}50` }),
          /* @__PURE__ */ l("path", { d: "M30 13 L34 35", stroke: "#666", strokeWidth: "1", strokeDasharray: "3,2" })
        ] }),
        template: "deployment",
        dsl: `node: AWS Cloud {
  node: EC2 Instance {
    component: Web Server
    component: API Server
  }
  node: RDS {
    component: PostgreSQL
  }
}`
      },
      {
        id: "component",
        label: "Component",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "16", y: "8", width: "32", height: "32", rx: "4", fill: `${L.purple}20`, stroke: L.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "10", y: "14", width: "8", height: "6", rx: "1", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "10", y: "28", width: "8", height: "6", rx: "1", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "46", y: "14", width: "8", height: "6", rx: "1", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "46", y: "28", width: "8", height: "6", rx: "1", fill: `${L.purple}40`, stroke: L.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("text", { x: "32", y: "28", textAnchor: "middle", fontSize: "8", fill: L.purple, children: "API" })
        ] }),
        template: "component",
        dsl: `component: Auth Service [auth]
component: User Service [user]
component: Order Service [order]
component: Payment Gateway [payment]

Auth Service -> User Service
User Service -> Order Service
Order Service -> Payment Gateway`
      },
      {
        id: "c4",
        label: "C4 Model",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "56", height: "40", rx: "4", fill: "#f5f5f5", stroke: "#ddd", strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "8", width: "18", height: "14", rx: "2", fill: `${L.blue}30`, stroke: L.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("circle", { cx: "38", cy: "8", r: "6", fill: "none", stroke: L.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "38", cy: "4", r: "2", fill: `${L.orange}40`, stroke: L.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "48", y: "8", width: "10", height: "14", rx: "2", fill: `${L.green}30`, stroke: L.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "28", width: "22", height: "14", rx: "2", fill: `${L.purple}30`, stroke: L.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "28", width: "22", height: "14", rx: "2", fill: `${L.pink}30`, stroke: L.pink, strokeWidth: "1" })
        ] }),
        template: "c4",
        dsl: `person: User [User accesses the system]
system: Web Application [Main application]
container: API Backend [Handles requests]
container: Database [Stores data]

User -> Web Application: Uses
Web Application -> API Backend: Calls
API Backend -> Database: Reads/Writes`
      },
      {
        id: "state",
        label: "State Machine",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("circle", { cx: "12", cy: "24", r: "6", fill: "none", stroke: "#666", strokeWidth: "2" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "24", r: "4", fill: "#666" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "12", r: "6", fill: `${L.blue}40`, stroke: L.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "24", r: "6", fill: `${L.green}40`, stroke: L.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "36", r: "6", fill: `${L.orange}40`, stroke: L.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M18 22 L26 14", stroke: "#666", strokeWidth: "1", markerEnd: "url(#arrow)" }),
          /* @__PURE__ */ l("path", { d: "M38 12 L46 20", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M52 30 L52 36 L38 36", stroke: "#666", strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M26 36 L18 28", stroke: "#666", strokeWidth: "1" })
        ] }),
        template: "state",
        dsl: `[*] -> Idle
Idle -> Processing : start
Processing -> Complete : success
Processing -> Error : fail
Error -> Idle : retry
Complete -> [*]`
      }
    ]
  }
};
function tw({ isOpen: o, onClose: t, onSelectShape: r, theme: n }) {
  const [i, a] = V(
    Object.keys(ef).reduce((d, u) => ({ ...d, [u]: !0 }), {})
  ), e = (n == null ? void 0 : n.name) === "dark", s = (d) => {
    a((u) => ({ ...u, [d]: !u[d] }));
  };
  if (!o) return null;
  const h = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "flex-end",
      zIndex: 1e3
    },
    panel: {
      width: 320,
      maxWidth: "90vw",
      height: "100vh",
      background: e ? "linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(180deg, #ffffff, #f8fafc)",
      borderLeft: `1px solid ${e ? "rgba(255,255,255,0.1)" : "#e2e8f0"}`,
      display: "flex",
      flexDirection: "column",
      boxShadow: "-10px 0 30px rgba(0,0,0,0.2)"
    },
    header: {
      padding: "16px 20px",
      borderBottom: `1px solid ${e ? "rgba(255,255,255,0.1)" : "#e2e8f0"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: e ? "rgba(0,0,0,0.2)" : "#f1f5f9"
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    headerIcon: {
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
      fontWeight: 600,
      fontSize: "1rem",
      color: e ? "#fff" : "#1e293b"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: e ? "#94a3b8" : "#64748b",
      fontSize: "1.2rem",
      cursor: "pointer",
      padding: 4,
      borderRadius: 4
    },
    content: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 0"
    },
    category: {
      marginBottom: 4
    },
    categoryHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px",
      cursor: "pointer",
      background: e ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
      borderBottom: `1px solid ${e ? "rgba(255,255,255,0.05)" : "#f1f5f9"}`,
      transition: "background 0.2s"
    },
    categoryLabel: {
      fontWeight: 600,
      fontSize: "0.9rem",
      color: e ? "#e2e8f0" : "#334155"
    },
    categoryArrow: {
      fontSize: "0.8rem",
      color: e ? "#64748b" : "#94a3b8",
      transition: "transform 0.2s"
    },
    shapesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12,
      padding: "16px 20px"
    },
    shapeItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: 10,
      background: e ? "rgba(255,255,255,0.05)" : "#fff",
      borderRadius: 12,
      border: `1px solid ${e ? "rgba(255,255,255,0.1)" : "#e2e8f0"}`,
      cursor: "pointer",
      transition: "all 0.2s"
    },
    shapeIcon: {
      width: 64,
      height: 48
    },
    shapeLabel: {
      fontSize: "0.7rem",
      color: e ? "#94a3b8" : "#64748b",
      textAlign: "center",
      fontWeight: 500
    },
    footer: {
      padding: "12px 20px",
      borderTop: `1px solid ${e ? "rgba(255,255,255,0.1)" : "#e2e8f0"}`,
      background: e ? "rgba(0,0,0,0.2)" : "#f1f5f9"
    },
    hint: {
      fontSize: "0.75rem",
      color: e ? "#64748b" : "#94a3b8",
      textAlign: "center"
    }
  };
  return /* @__PURE__ */ l("div", { style: h.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: h.panel, onClick: (d) => d.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: h.header, children: [
      /* @__PURE__ */ S("div", { style: h.headerTitle, children: [
        /* @__PURE__ */ l("div", { style: h.headerIcon, children: /* @__PURE__ */ S("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ l("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
        ] }) }),
        /* @__PURE__ */ l("span", { style: h.title, children: "Categories" })
      ] }),
      /* @__PURE__ */ l("button", { style: h.closeBtn, onClick: t, children: "✕" })
    ] }),
    /* @__PURE__ */ l("div", { style: h.content, children: Object.entries(ef).map(([d, u]) => /* @__PURE__ */ S("div", { style: h.category, children: [
      /* @__PURE__ */ S(
        "div",
        {
          style: h.categoryHeader,
          onClick: () => s(d),
          onMouseEnter: (f) => f.currentTarget.style.background = e ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
          onMouseLeave: (f) => f.currentTarget.style.background = e ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
          children: [
            /* @__PURE__ */ l("span", { style: h.categoryLabel, children: u.label }),
            /* @__PURE__ */ l("span", { style: { ...h.categoryArrow, transform: i[d] ? "rotate(180deg)" : "rotate(0deg)" }, children: "▼" })
          ]
        }
      ),
      i[d] && /* @__PURE__ */ l("div", { style: h.shapesGrid, children: u.shapes.map((f) => /* @__PURE__ */ S(
        "div",
        {
          style: h.shapeItem,
          onClick: () => r(f),
          onMouseEnter: (m) => {
            m.currentTarget.style.background = e ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)", m.currentTarget.style.borderColor = L.purple, m.currentTarget.style.transform = "scale(1.05)";
          },
          onMouseLeave: (m) => {
            m.currentTarget.style.background = e ? "rgba(255,255,255,0.05)" : "#fff", m.currentTarget.style.borderColor = e ? "rgba(255,255,255,0.1)" : "#e2e8f0", m.currentTarget.style.transform = "scale(1)";
          },
          children: [
            /* @__PURE__ */ l("div", { style: h.shapeIcon, children: f.icon }),
            /* @__PURE__ */ l("span", { style: h.shapeLabel, children: f.label })
          ]
        },
        f.id
      )) })
    ] }, d)) }),
    /* @__PURE__ */ l("div", { style: h.footer, children: /* @__PURE__ */ l("p", { style: h.hint, children: "Click a shape to use it as a diagram template" }) })
  ] }) });
}
async function Ag(o, t = 2) {
  const r = o.getBoundingClientRect(), n = Math.ceil(r.width), i = Math.ceil(r.height), a = document.createElement("canvas");
  a.width = n * t, a.height = i * t;
  const e = a.getContext("2d");
  e.scale(t, t), e.fillStyle = "#1a1a2e", e.fillRect(0, 0, n, i);
  const s = o.querySelectorAll("svg");
  for (const h of s)
    await rw(h, e, o);
  return await nw(o, e), a;
}
async function rw(o, t, r) {
  const n = o.getBoundingClientRect(), i = r.getBoundingClientRect(), a = n.left - i.left, e = n.top - i.top, s = o.cloneNode(!0), h = o.querySelectorAll("*"), d = s.querySelectorAll("*");
  h.forEach((m, g) => {
    const y = d[g];
    if (y)
      try {
        const c = window.getComputedStyle(m);
        ["fill", "stroke", "stroke-width", "stroke-dasharray", "opacity", "font-size", "font-family"].forEach((p) => {
          const b = c.getPropertyValue(p);
          b && b !== "none" && y.setAttribute(p, b);
        }), y.style.animation = "none";
      } catch {
      }
  }), s.setAttribute("width", n.width), s.setAttribute("height", n.height), s.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const u = new XMLSerializer().serializeToString(s), f = new Blob([u], { type: "image/svg+xml;charset=utf-8" });
  return new Promise((m) => {
    const g = new Image();
    g.onload = () => {
      t.drawImage(g, a, e, n.width, n.height), URL.revokeObjectURL(g.src), m();
    }, g.onerror = () => {
      URL.revokeObjectURL(g.src), m();
    }, g.src = URL.createObjectURL(f);
  });
}
async function nw(o, t) {
  const r = o.getBoundingClientRect(), n = o.querySelectorAll("*"), i = /* @__PURE__ */ new Set();
  for (const e of n) {
    if (e.classList.contains("canvas-bg") || e.tagName === "SVG" || e.tagName === "svg" || e.closest("svg")) continue;
    const s = e.getBoundingClientRect();
    if (s.width < 5 || s.height < 5) continue;
    const h = window.getComputedStyle(e);
    if (h.display === "none" || h.visibility === "hidden") continue;
    const d = s.left - r.left, u = s.top - r.top;
    if (d < -50 || u < -50 || d > r.width + 50 || u > r.height + 50) continue;
    const f = h.backgroundColor, m = h.borderColor, g = f && f !== "rgba(0, 0, 0, 0)" && f !== "transparent", y = m && m !== "rgba(0, 0, 0, 0)" && parseInt(h.borderWidth) > 0, c = `${Math.round(d)},${Math.round(u)},${Math.round(s.width)},${Math.round(s.height)}`;
    if ((g || y) && !i.has(c)) {
      i.add(c);
      const p = parseInt(h.borderRadius) || 0;
      g && (t.fillStyle = f, p > 0 ? (tf(t, d, u, s.width, s.height, p), t.fill()) : t.fillRect(d, u, s.width, s.height)), y && (t.strokeStyle = m, t.lineWidth = parseInt(h.borderWidth) || 1, p > 0 ? (tf(t, d, u, s.width, s.height, p), t.stroke()) : t.strokeRect(d, u, s.width, s.height));
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const e of n) {
    if (e.closest("svg") || e.classList.contains("canvas-bg")) continue;
    const s = window.getComputedStyle(e);
    if (s.display === "none" || s.visibility === "hidden") continue;
    let h = "";
    for (const C of e.childNodes)
      C.nodeType === Node.TEXT_NODE && (h += C.textContent);
    if (!h && e.children.length === 0 && (h = e.textContent || ""), h = h.trim(), !h) continue;
    const d = e.getBoundingClientRect();
    let u = d.left - r.left, f = d.top - r.top, m, g;
    if (d.width > 1 && d.height > 1 ? (m = u + d.width / 2, g = f + d.height / 2) : (m = u, g = f), m < -200 || g < -200 || m > r.width + 200 || g > r.height + 200) continue;
    const y = `${h}@${Math.round(m)},${Math.round(g)}`;
    if (a.has(y)) continue;
    a.add(y);
    const c = s.fontSize || "14px", p = s.fontWeight || "400", b = s.fontFamily || "system-ui, -apple-system, sans-serif", x = s.color || "#ffffff";
    t.fillStyle = x, t.font = `${p} ${c} ${b}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(h, m, g);
  }
}
function tf(o, t, r, n, i, a) {
  o.beginPath(), o.moveTo(t + a, r), o.lineTo(t + n - a, r), o.quadraticCurveTo(t + n, r, t + n, r + a), o.lineTo(t + n, r + i - a), o.quadraticCurveTo(t + n, r + i, t + n - a, r + i), o.lineTo(t + a, r + i), o.quadraticCurveTo(t, r + i, t, r + i - a), o.lineTo(t, r + a), o.quadraticCurveTo(t, r, t + a, r), o.closePath();
}
function $g(o, t) {
  const r = URL.createObjectURL(o), n = document.createElement("a");
  n.href = r, n.download = t, n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n), setTimeout(() => URL.revokeObjectURL(r), 100);
}
async function ow(o, t = "diagram", r = 2) {
  var i;
  if (!o)
    throw new Error("No container element provided");
  const n = ((i = o.querySelector('[class*="canvas"]')) == null ? void 0 : i.parentElement) || o.firstElementChild || o;
  try {
    const a = await Ag(n, r);
    return new Promise((e, s) => {
      a.toBlob(
        (h) => {
          if (!h) {
            s(new Error("Failed to create PNG"));
            return;
          }
          $g(h, `${t}.png`), e();
        },
        "image/png",
        1
      );
    });
  } catch (a) {
    throw console.error("Export failed:", a), new Error(`Export failed: ${a.message}`);
  }
}
function iw(o, t = "diagram") {
  if (!o)
    throw new Error("No container element provided");
  const r = o.querySelector("svg");
  if (!r)
    throw new Error("No SVG element found in the diagram");
  const n = r.cloneNode(!0), i = r.getBoundingClientRect(), a = r.querySelectorAll("*"), e = n.querySelectorAll("*");
  a.forEach((d, u) => {
    const f = e[u];
    if (f)
      try {
        const m = window.getComputedStyle(d);
        ["fill", "stroke", "stroke-width", "stroke-dasharray", "opacity", "font-size", "font-family", "font-weight"].forEach((g) => {
          const y = m.getPropertyValue(g);
          y && y !== "none" && y !== "normal" && f.setAttribute(g, y);
        }), f.style.animation = "none";
      } catch {
      }
  }), n.setAttribute("width", i.width), n.setAttribute("height", i.height), n.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const s = `<?xml version="1.0" encoding="UTF-8"?>
` + new XMLSerializer().serializeToString(n), h = new Blob([s], { type: "image/svg+xml;charset=utf-8" });
  $g(h, `${t}.svg`);
}
async function aw(o, t = 2) {
  var n;
  if (!o)
    throw new Error("No container element provided");
  const r = ((n = o.querySelector('[class*="canvas"]')) == null ? void 0 : n.parentElement) || o.firstElementChild || o;
  try {
    const i = await Ag(r, t);
    return new Promise((a, e) => {
      i.toBlob(
        async (s) => {
          if (!s) {
            e(new Error("Failed to create image"));
            return;
          }
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": s })
            ]), a();
          } catch (h) {
            console.error("Clipboard error:", h), e(new Error("Clipboard access denied. Try using HTTPS."));
          }
        },
        "image/png",
        1
      );
    });
  } catch (i) {
    throw new Error(`Copy failed: ${i.message}`);
  }
}
function sw(o) {
  if (!o)
    throw new Error("No container element provided");
  const t = o.cloneNode(!0), r = o.getBoundingClientRect(), n = r.width + 100, i = r.height + 100, a = window.open("", "_blank", `width=${n},height=${i}`);
  if (!a)
    throw new Error("Pop-up blocked. Please allow pop-ups.");
  let e = "";
  for (const s of document.styleSheets)
    try {
      for (const h of s.cssRules)
        e += h.cssText + `
`;
    } catch {
    }
  a.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DDFlow Diagram</title>
      <style>
        ${e}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @page { size: auto; margin: 10mm; }
        @media print {
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #1a1a2e;
          padding: 20px;
        }
        .diagram-container {
          transform-origin: top left;
        }
      </style>
    </head>
    <body>
      <div class="diagram-container">${t.innerHTML}</div>
      <script>
        window.onload = function() { setTimeout(function() { window.print(); }, 500); };
        window.onafterprint = function() { window.close(); };
      <\/script>
    </body>
    </html>
  `), a.document.close();
}
const Rg = {
  UNDO: { key: "z", meta: !0, description: "Undo", category: "Edit" },
  REDO: { key: "z", meta: !0, shift: !0, description: "Redo", category: "Edit" },
  ZOOM_IN: { key: "=", keyAlt: "+", description: "Zoom in", category: "View" },
  ZOOM_OUT: { key: "-", description: "Zoom out", category: "View" },
  RESET_VIEW: { key: "r", description: "Reset view", category: "View" },
  RESET_VIEW_ALT: { key: "Home", description: "Reset view (alt)", category: "View" },
  PAN_UP: { key: "ArrowUp", description: "Pan up", category: "Navigation" },
  PAN_DOWN: { key: "ArrowDown", description: "Pan down", category: "Navigation" },
  PAN_LEFT: { key: "ArrowLeft", description: "Pan left", category: "Navigation" },
  PAN_RIGHT: { key: "ArrowRight", description: "Pan right", category: "Navigation" },
  TOGGLE_EDITOR: { key: "e", meta: !0, description: "Toggle editor", category: "Editor" },
  TOGGLE_AI_CHAT: { key: "k", meta: !0, description: "Toggle AI chat", category: "Editor" },
  HELP: { key: "?", description: "Show keyboard shortcuts", category: "Help" },
  HELP_ALT: { key: "/", shift: !0, description: "Show keyboard shortcuts (alt)", category: "Help" },
  EXPORT_PNG: { key: "p", meta: !0, shift: !0, description: "Export as PNG", category: "Export" },
  EXPORT_SVG: { key: "s", meta: !0, shift: !0, description: "Export as SVG", category: "Export" },
  COPY_CLIPBOARD: { key: "c", meta: !0, shift: !0, description: "Copy to clipboard", category: "Export" }
};
function cw(o) {
  const t = [], r = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/.test(navigator.platform);
  o.meta && t.push(r ? "⌘" : "Ctrl"), o.shift && t.push(r ? "⇧" : "Shift"), o.alt && t.push(r ? "⌥" : "Alt");
  let n = o.key;
  return n === "ArrowUp" ? n = "↑" : n === "ArrowDown" ? n = "↓" : n === "ArrowLeft" ? n = "←" : n === "ArrowRight" ? n = "→" : n === "Home" ? n = "Home" : n === "=" ? n = "+" : n === "/" ? n = "/" : n = n.toUpperCase(), t.push(n), t.join(r ? "" : "+");
}
function lw() {
  const o = {};
  return Object.entries(Rg).forEach(([t, r]) => {
    if (t.endsWith("_ALT")) return;
    const n = r.category || "Other";
    o[n] || (o[n] = []), o[n].push({
      name: t,
      ...r,
      formatted: cw(r)
    });
  }), o;
}
function dw(o, t) {
  var s;
  const n = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? o.metaKey : o.ctrlKey;
  if (t.meta && !n || !t.meta && n || t.shift && !o.shiftKey || !t.shift && o.shiftKey && t.key !== "?" || t.alt && !o.altKey || !t.alt && o.altKey) return !1;
  const i = o.key.toLowerCase(), a = t.key.toLowerCase(), e = (s = t.keyAlt) == null ? void 0 : s.toLowerCase();
  return i === a || e && i === e;
}
function uw(o, t = !0) {
  const r = K((n) => {
    if (!t) return;
    const i = n.target;
    if (!(i.tagName === "INPUT" || i.tagName === "TEXTAREA" || i.isContentEditable)) {
      for (const [a, e] of Object.entries(Rg))
        if (dw(n, e)) {
          const s = o[a];
          if (s) {
            n.preventDefault(), s(n);
            return;
          }
        }
    }
  }, [o, t]);
  he(() => (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r)), [r]);
}
function pw(o) {
  const t = o.trim().toLowerCase();
  return t.startsWith("flowchart") || t.startsWith("graph") ? "flowchart" : t.startsWith("sequencediagram") ? "sequence" : t.startsWith("classdiagram") ? "class" : t.startsWith("statediagram") ? "state" : t.startsWith("erdiagram") ? "erd" : t.startsWith("gantt") ? "gantt" : t.startsWith("pie") ? "pie" : t.startsWith("gitgraph") ? "git" : t.startsWith("journey") ? "journey" : t.startsWith("mindmap") ? "mindmap" : t.startsWith("c4context") || t.startsWith("c4container") || t.startsWith("c4component") || t.startsWith("c4dynamic") || t.startsWith("c4deployment") ? "c4" : t.startsWith("timeline") ? "timeline" : t.startsWith("quadrantchart") ? "quadrant" : t.startsWith("sankey") ? "sankey" : t.startsWith("requirementdiagram") ? "requirement" : null;
}
function He(o) {
  return o.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}
function hw(o) {
  const t = o.split(`
`), r = t[0].trim().toLowerCase(), n = t.slice(1);
  let i = "TB";
  const a = r.match(/(?:flowchart|graph)\s+(td|tb|lr|rl|bt)/i);
  a && (i = a[1].toUpperCase(), i === "TD" && (i = "TB"));
  const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = [];
  let f = !1, m = null;
  const g = (M) => {
    M = M.trim();
    let A = M.match(/^(\w+)\(\(\((.+)\)\)\)$/);
    return A ? { id: A[1], label: He(A[2]), type: "start" } : (A = M.match(/^(\w+)\{\{(.+)\}\}$/), A ? { id: A[1], label: He(A[2]), type: "hexagon" } : (A = M.match(/^(\w+)\[\[(.+)\]\]$/), A ? { id: A[1], label: He(A[2]), type: "subroutine" } : (A = M.match(/^(\w+)\[\/(.+)\/\]$/), A ? { id: A[1], label: He(A[2]), type: "io" } : (A = M.match(/^(\w+)\[\\(.+)\\\]$/), A ? { id: A[1], label: He(A[2]), type: "io" } : (A = M.match(/^(\w+)\[\/(.+)\\\]$/), A ? { id: A[1], label: He(A[2]), type: "trapezoid" } : (A = M.match(/^(\w+)\[\\(.+)\/\]$/), A ? { id: A[1], label: He(A[2]), type: "trapezoid" } : (A = M.match(/^(\w+)>(.+)\]$/), A ? { id: A[1], label: He(A[2]), type: "flag" } : (A = M.match(/^(\w+)\(\(([^)]+)\)\)$/), A ? { id: A[1], label: He(A[2]), type: "start" } : (A = M.match(/^(\w+)\(\[([^\]]+)\]\)$/), A ? { id: A[1], label: He(A[2]), type: "process" } : (A = M.match(/^(\w+)\[\(([^)]+)\)\]$/), A ? { id: A[1], label: He(A[2]), type: "database" } : (A = M.match(/^(\w+)\{([^}]+)\}$/), A ? { id: A[1], label: He(A[2]), type: "decision" } : (A = M.match(/^(\w+)\[([^\]]+)\]$/), A ? { id: A[1], label: He(A[2]), type: "process" } : (A = M.match(/^(\w+)\(([^)]+)\)$/), A ? { id: A[1], label: He(A[2]), type: "process" } : (A = M.match(/^(\w+)$/), A ? { id: A[1], label: A[1], type: "process" } : null))))))))))))));
  }, y = (M) => M.replace(/fa:fa-[\w-]+\s*/g, "").trim() || M;
  n.forEach((M) => {
    if (M = M.trim(), !M || M.startsWith("%%")) return;
    const A = M.match(/^subgraph\s+(.+)/i);
    if (A) {
      m = He(A[1]), d.has(m) || d.set(m, []);
      return;
    }
    if (M === "end") {
      m = null;
      return;
    }
    const I = /^(.+?)\s*(--+>|==+>|-\.+->?|--+o|--+x|~~~|--+)\s*(?:\|([^|]*)\|)?\s*(.+)$/;
    let R = M.match(I);
    if (!R) {
      const D = /^(.+?)\s*--\s+([^-]+?)\s+-->\s*(.+)$/, P = M.match(D);
      P && (R = [M, P[1], "-->", P[2].trim(), P[3]]);
    }
    if (R) {
      const [, D, P, _, z] = R, B = g(D.trim());
      if (B) {
        const X = y(B.label), te = B.label !== B.id;
        (te || !e.has(B.id)) && e.set(B.id, X), (te || !s.has(B.id)) && s.set(B.id, B.type), B.type === "decision" && (f = !0), m && (h.set(B.id, m), d.get(m).includes(B.id) || d.get(m).push(B.id));
      }
      const j = g(z.trim());
      if (j) {
        const X = y(j.label), te = j.label !== j.id;
        (te || !e.has(j.id)) && e.set(j.id, X), (te || !s.has(j.id)) && s.set(j.id, j.type), j.type === "decision" && (f = !0), m && (h.set(j.id, m), d.get(m).includes(j.id) || d.get(m).push(j.id));
      }
      B && j && u.push({
        from: B.id,
        to: j.id,
        label: _ ? He(_) : ""
      });
      return;
    }
    const $ = g(M);
    if ($) {
      const D = y($.label), P = $.label !== $.id;
      (P || !e.has($.id)) && e.set($.id, D), (P || !s.has($.id)) && s.set($.id, $.type), $.type === "decision" && (f = !0), m && (h.set($.id, m), d.get(m).includes($.id) || d.get(m).push($.id));
    }
  });
  const c = [];
  u.forEach(({ from: M, to: A }) => {
    c.includes(M) || c.push(M), c.includes(A) || c.push(A);
  }), e.forEach((M, A) => {
    c.includes(A) || c.push(A);
  });
  const p = /* @__PURE__ */ new Map();
  let b = !1;
  u.forEach(({ from: M, label: A }) => {
    p.set(M, (p.get(M) || 0) + 1), A && /interact|fetch|cache|call|send|use|connect|query|read|write|get|post|create|update|webhook|event/i.test(A) && (b = !0);
  });
  const x = [...p.values()].some((M) => M > 1), C = d.size > 0;
  if (!f && (C || x && b || b || e.size >= 8 && x))
    return {
      type: "architecture",
      source: fw(e, u, c, h, d, s)
    };
  const E = [], k = /* @__PURE__ */ new Set();
  if (i !== "TB" && E.push(`direction: ${i}`), c.length > 0) {
    const M = c[0], A = e.get(M) || M, I = s.get(M) || "process";
    E.push(`(${I}) ${A}`), k.add(M);
  }
  return u.forEach(({ from: M, to: A, label: I }) => {
    const R = e.get(M) || M, $ = e.get(A) || A, D = s.get(A) || "process";
    I ? E.push(`${R} -> (${D}) ${$}: ${I}`) : E.push(`${R} -> (${D}) ${$}`), k.add(A);
  }), {
    type: "flowchart",
    source: E.join(`
`)
  };
}
function fw(o, t, r, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map()) {
  const e = [], s = {
    clients: /^(fe|ui|frontend|user|client|browser|mobile|app)\b/i,
    gateway: /gateway|proxy|load.?balancer|nginx|router|ingress|kong|traefik|envoy/i,
    service: /(api|service|server|backend|engine|controller|handler|processor)\b/i,
    database: /database|db|mysql|postgres|mongo|redis|cache|storage|sql|queue|index|store|elastic|dynamo|s3|bucket/i,
    external: /external|third.?party|vendor|saas|stripe|twilio|sendgrid|aws|gcp|azure/i
  }, h = (x, C) => {
    const w = `${x} ${C}`.toLowerCase();
    return s.clients.test(w) ? "clients" : s.gateway.test(w) ? "gateway" : s.database.test(w) ? "database" : s.external.test(w) ? "external" : (s.service.test(w), "service");
  }, d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  r.forEach((x) => {
    d.set(x, []), u.set(x, []);
  }), t.forEach(({ from: x, to: C }) => {
    d.has(x) && d.get(x).push(C), u.has(C) && u.get(C).push(x);
  });
  const f = /* @__PURE__ */ new Set();
  r.forEach((x) => {
    const C = o.get(x) || x;
    ((u.get(x) || []).length === 0 || s.clients.test(C) || s.clients.test(x)) && f.add(x);
  }), f.size === 0 && r.length > 0 && f.add(r[0]);
  const m = /* @__PURE__ */ new Set();
  t.forEach(({ from: x, to: C }, w) => {
    f.has(C) && !f.has(x) && m.add(w);
  });
  const g = /* @__PURE__ */ new Map();
  f.forEach((x) => g.set(x, 0));
  const y = [...f];
  for (; y.length > 0; ) {
    const x = y.shift(), C = g.get(x);
    (d.get(x) || []).forEach((E) => {
      const k = t.findIndex((I) => I.from === x && I.to === E);
      if (m.has(k)) return;
      const M = g.get(E), A = C + 1;
      (M === void 0 || M < A) && (g.set(E, A), y.includes(E) || y.push(E));
    });
  }
  i.size > 0 && i.forEach((x, C) => {
    if (x.filter((E) => (u.get(E) || []).filter((M) => !x.includes(M)).length === 0).length === x.length) {
      Math.max(0, ...g.values()), x.forEach((k, M) => {
        g.has(k) || g.set(k, 0);
      });
      const E = x.filter((k) => g.has(k));
      for (; E.length > 0; ) {
        const k = E.shift(), M = g.get(k);
        (d.get(k) || []).filter((I) => x.includes(I) || !g.has(I)).forEach((I) => {
          const R = M + 1;
          (!g.has(I) || g.get(I) < R) && (g.set(I, R), E.includes(I) || E.push(I));
        });
      }
    }
  });
  const c = g.size > 0 ? Math.floor([...g.values()].reduce((x, C) => x + C, 0) / g.size) : 0;
  r.forEach((x) => {
    g.has(x) || g.set(x, c);
  });
  const p = /* @__PURE__ */ new Map();
  return r.forEach((x) => {
    const C = g.get(x);
    p.has(C) || p.set(C, []), p.get(C).push(x);
  }), [...p.keys()].sort((x, C) => x - C).forEach((x) => {
    const C = p.get(x), w = /* @__PURE__ */ new Map();
    C.forEach((E) => {
      const k = o.get(E) || E, M = n.get(E);
      let A;
      if (M) {
        const I = M.toLowerCase();
        /ingestion|ingest|import|input/i.test(I) ? A = "service" : /gateway|api/i.test(I) ? A = "gateway" : /data|storage|database/i.test(I) ? A = "database" : /external|third/i.test(I) ? A = "external" : A = h(k, E);
      } else
        A = h(k, E);
      w.has(A) || w.set(A, []), w.get(A).push(E);
    }), w.forEach((E, k) => {
      const M = E.map((A) => o.get(A) || A);
      e.push(`[${k}] ${M.join(", ")}`);
    });
  }), e.push(""), t.forEach(({ from: x, to: C, label: w }) => {
    const E = o.get(x) || x, k = o.get(C) || C;
    w ? e.push(`${E} -> ${k}: ${w}`) : e.push(`${E} -> ${k}`);
  }), e.join(`
`);
}
function gw(o) {
  const t = o.split(`
`).slice(1), r = /* @__PURE__ */ new Set(), n = [], i = /* @__PURE__ */ new Map();
  t.forEach((e) => {
    if (e = e.trim(), !e || e.startsWith("%%")) return;
    const s = e.match(/^participant\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (s) {
      const M = s[1], A = s[2] || s[1];
      i.set(M, A), r.add(A);
      return;
    }
    const h = e.match(/^actor\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (h) {
      const M = h[1], A = h[2] || h[1];
      i.set(M, A), r.add(A);
      return;
    }
    const d = e.match(/^loop\s+(.+)/i);
    if (d) {
      n.push(`loop ${d[1]}`);
      return;
    }
    const u = e.match(/^alt\s+(.+)/i);
    if (u) {
      n.push(`alt ${u[1]}`);
      return;
    }
    const f = e.match(/^else\s*(.*)/i);
    if (f) {
      n.push(`else ${f[1] || ""}`);
      return;
    }
    const m = e.match(/^opt\s+(.+)/i);
    if (m) {
      n.push(`opt ${m[1]}`);
      return;
    }
    const g = e.match(/^par\s+(.+)/i);
    if (g) {
      n.push(`par ${g[1]}`);
      return;
    }
    const y = e.match(/^and\s+(.+)/i);
    if (y) {
      n.push(`and ${y[1]}`);
      return;
    }
    const c = e.match(/^critical\s+(.+)/i);
    if (c) {
      n.push(`critical ${c[1]}`);
      return;
    }
    const p = e.match(/^option\s+(.+)/i);
    if (p) {
      n.push(`option ${p[1]}`);
      return;
    }
    const b = e.match(/^break\s+(.+)/i);
    if (b) {
      n.push(`break ${b[1]}`);
      return;
    }
    const x = e.match(/^rect\s+(.+)/i);
    if (x) {
      n.push(`rect ${x[1]}`);
      return;
    }
    const C = e.match(/^(activate|deactivate)\s+(\w+)/i);
    if (C) {
      const M = C[2], A = i.get(M) || M;
      n.push(`${C[1].toLowerCase()} ${A}`);
      return;
    }
    if (e.toLowerCase() === "end") {
      n.push("end");
      return;
    }
    const w = e.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);
    if (w) {
      const M = w[1].toLowerCase(), A = w[2], I = i.get(A) || A, R = w[3];
      n.push(`note ${M} of ${I}: ${R}`);
      return;
    }
    const E = e.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);
    if (E) {
      const M = E[1].split(",").map((A) => {
        const I = A.trim();
        return i.get(I) || I;
      });
      n.push(`note over ${M.join(", ")}: ${E[2]}`);
      return;
    }
    const k = e.match(/(\w+)\s*(-?->>?|-->>?|-x|--x|-\)|--\))([+-])?\s*(\w+)\s*:\s*(.+)/);
    if (k) {
      const [, M, A, I, R, $] = k, D = i.get(M) || M, P = i.get(R) || R, _ = A.startsWith("--"), z = A.includes("x"), B = A.includes(")");
      r.add(D), r.add(P);
      let j = _ ? "-->" : "->";
      z ? j = _ ? "--x" : "-x" : B && (j = _ ? "--)" : "-)"), n.push(`${D} ${j} ${P}: ${$}`), I === "+" ? n.push(`activate ${P}`) : I === "-" && n.push(`deactivate ${P}`);
    }
  });
  const a = [];
  return r.size > 0 && (a.push(`participant ${[...r].join(", ")}`), a.push("")), a.push(...n), a.join(`
`);
}
function mw(o) {
  const t = o.split(`
`).slice(1), r = /* @__PURE__ */ new Map(), n = [];
  let i = null;
  t.forEach((e) => {
    if (e = e.trim(), !e || e.startsWith("%%")) return;
    const s = e.match(/^class\s+(\w+)/i);
    if (s) {
      i = s[1], r.has(i) || r.set(i, { name: i, members: [] });
      return;
    }
    if (i && (e.startsWith("+") || e.startsWith("-") || e.startsWith("#") || e.startsWith("~"))) {
      r.get(i).members.push(e);
      return;
    }
    const h = e.match(/^(\w+)\s*:\s*(.+)/);
    if (h && !e.includes("--") && !e.includes("..")) {
      const [, u, f] = h;
      r.has(u) || r.set(u, { name: u, members: [] }), r.get(u).members.push(f);
      return;
    }
    const d = e.match(/(\w+)\s*(--|>|\.\.>|-->|--\*|--o|\.\.|--)\s*(\w+)(?:\s*:\s*(.+))?/);
    if (d) {
      const [, u, f, m, g] = d;
      let y = "-->";
      f === "--|>" ? y = "--|>" : f === "--*" ? y = "--*" : f === "--o" ? y = "--o" : f.includes("..") && (y = "..>"), n.push({ from: u, to: m, arrow: y, label: g || "" });
    }
  });
  const a = [];
  return r.forEach(({ name: e, members: s }) => {
    a.push(`class ${e}`), s.forEach((h) => a.push(h)), a.push("");
  }), n.forEach(({ from: e, to: s, arrow: h, label: d }) => {
    const u = d ? `${e} ${h} ${s} : ${d}` : `${e} ${h} ${s}`;
    a.push(u);
  }), a.join(`
`);
}
function yw(o) {
  const t = o.split(`
`).slice(1), r = /* @__PURE__ */ new Map(), n = [], i = [], a = /* @__PURE__ */ new Map();
  t.forEach((s) => {
    if (s = s.trim(), !s || s.startsWith("%%")) return;
    const h = s.match(/^state\s+"([^"]+)"\s+as\s+(\w+)/i);
    if (h) {
      const [, c, p] = h;
      a.set(p, c), r.has(p) || r.set(p, { id: p });
      return;
    }
    const d = s.match(/^(\w+)\s*:\s*([^{]+)$/);
    if (d && !s.includes("-->")) {
      const [, c, p] = d;
      a.set(c, p.trim()), r.has(c) || r.set(c, { id: c });
      return;
    }
    const u = s.match(/^state\s+(\w+)\s*\{?\s*$/i);
    if (u) {
      const c = u[1];
      if (!r.has(c))
        r.set(c, { id: c, isComposite: !0, children: [] });
      else {
        const p = r.get(c);
        p.isComposite = !0, p.children = p.children || [];
      }
      i.push(c);
      return;
    }
    if (s === "}") {
      i.pop();
      return;
    }
    const f = s.match(/^state\s+(\w+)\s*<<(fork|join)>>/i);
    if (f) {
      const [, c, p] = f;
      r.set(c, { id: c, specialType: p.toLowerCase() });
      return;
    }
    const m = s.match(/^state\s+(\w+)\s*<<choice>>/i);
    if (m) {
      const c = m[1];
      r.set(c, { id: c, specialType: "choice" });
      return;
    }
    const g = s.match(/^state\s+(\w+)\s*<<note>>/i);
    if (g) {
      const c = g[1];
      r.set(c, { id: c, specialType: "note" });
      return;
    }
    if (s.includes("[*]")) {
      const c = s.match(/\[\*\]\s*-->\s*(\w+)/), p = s.match(/(\w+)\s*-->\s*\[\*\]/);
      if (c) {
        const b = c[1];
        if (r.has(b) ? r.get(b).isInitial = !0 : r.set(b, { id: b, isInitial: !0 }), i.length > 0) {
          const x = r.get(i[i.length - 1]);
          x && x.children && !x.children.includes(b) && x.children.push(b);
        }
      }
      if (p) {
        const b = p[1];
        r.has(b) ? r.get(b).isFinal = !0 : r.set(b, { id: b, isFinal: !0 });
      }
      return;
    }
    const y = s.match(/(\w+)\s*-->\s*(\w+)(?:\s*:\s*(.+))?/);
    if (y) {
      const [, c, p, b] = y;
      if (r.has(c) || r.set(c, { id: c }), r.has(p) || r.set(p, { id: p }), n.push({ from: c, to: p, event: b || "" }), i.length > 0) {
        const x = r.get(i[i.length - 1]);
        x && x.children && (x.children.includes(c) || x.children.push(c), x.children.includes(p) || x.children.push(p));
      }
    }
  });
  const e = [];
  return r.forEach((s) => {
    const h = a.get(s.id), d = h ? `${s.id}: ${h}` : s.id;
    s.isInitial ? e.push(`(initial) ${d}`) : s.isFinal ? e.push(`(final) ${d}`) : s.specialType === "fork" ? e.push(`(fork) ${d}`) : s.specialType === "join" ? e.push(`(join) ${d}`) : s.specialType === "choice" ? e.push(`(choice) ${d}`) : s.isComposite && e.push(`(composite) ${d}`);
  }), e.length > 0 && e.push(""), n.forEach(({ from: s, to: h, event: d }) => {
    const u = d ? `${s} -> ${h}: ${d}` : `${s} -> ${h}`;
    e.push(u);
  }), e.join(`
`);
}
function bw(o) {
  const t = o.split(`
`).slice(1), r = /* @__PURE__ */ new Map();
  t.forEach((i) => {
    if (i = i.trim(), !i || i.startsWith("%%")) return;
    const a = i.match(/^(\w+)\s*\{/);
    if (a) {
      r.set(a[1], { name: a[1], fields: [] });
      return;
    }
    const e = i.match(/^\s*(\w+)\s+(\w+)\s*(PK|FK)?/);
    if (e && r.size > 0) {
      const [, s, h, d] = e, u = Array.from(r.values()).pop();
      u && u.fields.push({
        name: h,
        type: s.toUpperCase(),
        isPK: d === "PK",
        isFK: d === "FK"
      });
    }
  });
  const n = [];
  return r.forEach(({ name: i, fields: a }) => {
    const e = a.map((s) => {
      let h = `${s.name} ${s.type}`;
      return s.isPK && (h += " PRIMARY KEY"), h;
    }).join(", ");
    n.push(`CREATE TABLE ${i} (${e});`);
  }), n.join(`
`);
}
function xw(o) {
  const t = o.split(`
`).slice(1), r = [], n = /* @__PURE__ */ new Map();
  let i = "", a = 0, e = "";
  return t.forEach((s) => {
    if (s = s.trim(), !s || s.startsWith("%%")) return;
    const h = s.match(/^title\s+(.+)/i);
    if (h) {
      e = h[1].trim();
      return;
    }
    if (/^(dateFormat|axisFormat|excludes|todayMarker|tickInterval|weekday)/i.test(s))
      return;
    if (s.toLowerCase().startsWith("section")) {
      i = s.replace(/^section\s*/i, "").trim(), r.push(`== ${i} ==`);
      return;
    }
    const d = s.match(/^(.+?)\s*:\s*(.+)$/);
    if (d) {
      const u = d[1].trim(), m = d[2].trim().split(",").map((w) => w.trim()), g = [];
      let y = null, c = null, p = null, b = null;
      m.forEach((w) => {
        /^(done|active|crit|milestone)$/i.test(w) ? g.push(w.toLowerCase()) : /^after\s+/i.test(w) ? c = w.replace(/^after\s+/i, "").trim() : /^\d+d?$/.test(w) ? b = parseInt(w) : /^\d{4}-\d{2}-\d{2}$/.test(w) || /^\d+$/.test(w) ? p ? b || (b = parseInt(w)) : p = w : /^\w+$/.test(w) && !y && (y = w);
      }), b || (b = 1);
      let x = a;
      if (c && n.has(c)) {
        const w = n.get(c);
        x = w.start + w.duration;
      } else p && /^\d+$/.test(p) && (x = parseInt(p));
      y && n.set(y, { start: x, duration: b });
      let C = `${u}, ${x}, ${b}`;
      g.length > 0 && (C += ` [${g.join(", ")}]`), c && (C += ` after:${c}`), r.push(C), a = x + b;
    }
  }), e && (r.unshift(`title: ${e}`), r.splice(1, 0, "")), r.join(`
`);
}
function vw(o) {
  const t = o.split(`
`).slice(1), r = [];
  return t.forEach((n) => {
    if (n = n.trim(), !n || n.startsWith("%%") || n.startsWith("title")) return;
    const i = n.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);
    i && r.push({ label: i[1], value: parseFloat(i[2]) });
  }), r.map((n) => `"${n.label}": ${n.value}`).join(`
`);
}
function ww(o) {
  const t = o.split(`
`).slice(1), r = [];
  return t.forEach((n) => {
    if (n = n.trim(), !n || n.startsWith("%%")) return;
    const i = n.match(/^commit(?:\s+id:\s*"([^"]+)")?(?:\s+msg:\s*"([^"]+)")?/i);
    if (i) {
      const h = i[2] || i[1] || "Commit";
      r.push(`commit "${h}"`);
      return;
    }
    const a = n.match(/^branch\s+(\w+)/i);
    if (a) {
      r.push(`branch ${a[1]}`);
      return;
    }
    const e = n.match(/^checkout\s+(\w+)/i);
    if (e) {
      r.push(`checkout ${e[1]}`);
      return;
    }
    const s = n.match(/^merge\s+(\w+)/i);
    if (s) {
      r.push(`merge ${s[1]}`);
      return;
    }
  }), r.join(`
`);
}
function Sw(o) {
  const t = o.split(`
`), r = [];
  let n = "", i = null;
  t.forEach((s) => {
    if (s = s.trim(), !s || s.startsWith("%%") || s.toLowerCase() === "journey") return;
    const h = s.match(/^title\s+(.+)/i);
    if (h) {
      n = h[1].trim();
      return;
    }
    const d = s.match(/^section\s+(.+)/i);
    if (d) {
      i = {
        name: d[1].trim(),
        tasks: []
      }, r.push(i);
      return;
    }
    const u = s.match(/^(.+?):\s*(\d+)(?:\s*:\s*(.+))?$/);
    if (u && i) {
      const f = u[1].trim(), m = parseInt(u[2]), g = u[3] || "", y = g ? g.split(",").map((c) => c.trim()).filter((c) => c) : [];
      i.tasks.push({ task: f, score: m, actors: y });
    }
  });
  const a = [];
  n && (a.push(`title: ${n}`), a.push(""));
  const e = /* @__PURE__ */ new Set();
  return r.forEach((s) => {
    s.tasks.forEach((h) => h.actors.forEach((d) => e.add(d)));
  }), e.size > 0 && (a.push(`actors: ${[...e].join(", ")}`), a.push("")), r.forEach((s) => {
    a.push(`== ${s.name} ==`), s.tasks.forEach((h) => {
      const d = h.actors.length > 0 ? ` | ${h.actors.join(", ")}` : "";
      a.push(`- ${h.task} | ${h.score}${d}`);
    }), a.push("");
  }), a.join(`
`);
}
function kw(o) {
  const t = o.split(`
`).slice(1), r = [];
  return t.forEach((n) => {
    if (!n.trim() || n.trim().startsWith("%%")) return;
    const i = n.match(/^(\s*)/)[1].length, a = n.trim().replace(/^\(\((.+)\)\)$/, "$1").replace(/^\((.+)\)$/, "$1").replace(/^\[(.+)\]$/, "$1").replace(/^{{(.+)}}$/, "$1");
    a && r.push("  ".repeat(Math.floor(i / 2)) + a);
  }), r.join(`
`);
}
function Ew(o) {
  const t = o.split(`
`), r = t[0].trim().toLowerCase();
  r.includes("c4container") || r.includes("c4component") || r.includes("c4dynamic") || r.includes("c4deployment");
  const n = /* @__PURE__ */ new Map(), i = [], a = [], e = /* @__PURE__ */ new Map(), s = (c) => {
    const p = c.match(/^(\w+)\s*\((.+)\)\s*$/);
    if (!p) return null;
    const b = p[1], x = p[2], C = [];
    let w = "", E = !1, k = "";
    for (let M = 0; M < x.length; M++) {
      const A = x[M];
      (A === '"' || A === "'") && !E ? (E = !0, k = A) : A === k && E ? (E = !1, k = "") : A === "," && !E ? (C.push(w.trim().replace(/^["']|["']$/g, "")), w = "") : w += A;
    }
    return w.trim() && C.push(w.trim().replace(/^["']|["']$/g, "")), { funcName: b, args: C };
  };
  t.slice(1).forEach((c) => {
    if (c = c.trim(), !c || c.startsWith("%%") || c.startsWith("title")) return;
    const p = c.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(([^,]+),\s*["']([^"']+)["'](?:,\s*["']([^"']+)["'])?\s*\)/i);
    if (p) {
      const k = p[2].trim(), M = p[3], A = p[4] || p[1].replace("_Boundary", "").toLowerCase(), I = a.length > 0 ? a[a.length - 1].alias : null;
      e.set(k, {
        label: M,
        type: A,
        parentBoundary: I
      }), a.push({
        type: p[1],
        alias: k,
        label: M
      });
      return;
    }
    if (c === "}" || c === "{") {
      c === "}" && a.length > 0 && a.pop();
      return;
    }
    if (c.startsWith("Update")) return;
    const b = s(c);
    if (!b) return;
    const { funcName: x, args: C } = b, w = x.toLowerCase(), E = a.length > 0 ? a[a.length - 1].alias : null;
    if (w.startsWith("person")) {
      const k = w.includes("_ext");
      n.set(C[0], {
        type: k ? "external" : "clients",
        label: C[1] || C[0],
        description: C[2] || "",
        boundary: E
      });
      return;
    }
    if (w.startsWith("system")) {
      const k = w.includes("_ext"), M = w.includes("db"), A = w.includes("queue");
      let I = "service";
      k ? I = "external" : M ? I = "database" : A && (I = "service"), n.set(C[0], {
        type: I,
        label: C[1] || C[0],
        description: C[2] || "",
        technology: "",
        boundary: E
      });
      return;
    }
    if (w.startsWith("container")) {
      const k = w.includes("_ext"), M = w.includes("db"), A = w.includes("queue");
      let I = "service";
      k ? I = "external" : M ? I = "database" : A && (I = "service"), n.set(C[0], {
        type: I,
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: E
      });
      return;
    }
    if (w.startsWith("component")) {
      const k = w.includes("_ext"), M = w.includes("db");
      let A = "service";
      k ? A = "external" : M && (A = "database"), n.set(C[0], {
        type: A,
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: E
      });
      return;
    }
    if (w === "node" || w === "node_l" || w === "node_r") {
      n.set(C[0], {
        type: "service",
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: E
      });
      return;
    }
    if (w.startsWith("deployment_node")) {
      n.set(C[0], {
        type: "service",
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: E
      });
      return;
    }
    if (w.startsWith("rel") || w === "birel") {
      const k = w === "birel";
      let M, A, I, R;
      w === "relindex" ? (M = C[1], A = C[2], I = C[3] || "", R = C[4] || "") : (M = C[0], A = C[1], I = C[2] || "", R = C[3] || ""), i.push({
        from: M,
        to: A,
        label: R ? `${I} [${R}]` : I,
        bidirectional: k
      });
      return;
    }
  });
  const h = [], d = /* @__PURE__ */ new Map(), u = [];
  n.forEach((c, p) => {
    c.boundary ? (d.has(c.boundary) || d.set(c.boundary, []), d.get(c.boundary).push({ alias: p, ...c })) : u.push({ alias: p, ...c });
  });
  const f = (c) => {
    const p = /* @__PURE__ */ new Map();
    c.forEach((x) => {
      p.has(x.type) || p.set(x.type, []), p.get(x.type).push(x);
    });
    const b = ["clients", "external", "gateway", "service", "database"];
    b.forEach((x) => {
      const C = p.get(x);
      if (C && C.length > 0) {
        const w = C.map((E) => E.label);
        h.push(`[${x}] ${w.join(", ")}`);
      }
    }), p.forEach((x, C) => {
      if (!b.includes(C) && x.length > 0) {
        const w = x.map((E) => E.label);
        h.push(`[${C}] ${w.join(", ")}`);
      }
    });
  };
  u.length > 0 && (f(u), h.push(""));
  const m = [], g = /* @__PURE__ */ new Map();
  e.forEach((c, p) => {
    c.parentBoundary ? (g.has(c.parentBoundary) || g.set(c.parentBoundary, []), g.get(c.parentBoundary).push(p)) : m.push(p);
  });
  const y = (c, p = "") => {
    const b = e.get(c);
    if (!b) return;
    const x = d.get(c) || [], C = g.get(c) || [];
    if (!(x.length === 0 && C.length === 0)) {
      if (h.push(`${p}group "${b.label}" {`), x.length > 0) {
        const w = /* @__PURE__ */ new Map();
        x.forEach((k) => {
          w.has(k.type) || w.set(k.type, []), w.get(k.type).push(k);
        });
        const E = ["clients", "external", "gateway", "service", "database"];
        E.forEach((k) => {
          const M = w.get(k);
          if (M && M.length > 0) {
            const A = M.map((I) => I.label);
            h.push(`${p}  [${k}] ${A.join(", ")}`);
          }
        }), w.forEach((k, M) => {
          if (!E.includes(M) && k.length > 0) {
            const A = k.map((I) => I.label);
            h.push(`${p}  [${M}] ${A.join(", ")}`);
          }
        });
      }
      C.length > 0 && (x.length > 0 && h.push(""), C.forEach((w) => {
        y(w, p + "  ");
      })), h.push(`${p}}`), h.push("");
    }
  };
  return m.forEach((c) => {
    y(c);
  }), i.forEach((c) => {
    const p = n.get(c.from), b = n.get(c.to), x = (p == null ? void 0 : p.label) || c.from, C = (b == null ? void 0 : b.label) || c.to;
    c.bidirectional ? h.push(`${x} <-> ${C}: ${c.label}`) : c.label ? h.push(`${x} -> ${C}: ${c.label}`) : h.push(`${x} -> ${C}`);
  }), h.join(`
`);
}
function Cw(o) {
  const t = o.split(`
`), r = [];
  let n = "", i = "";
  return t.forEach((a) => {
    if (a = a.trim(), !a || a.startsWith("%%") || a.toLowerCase() === "timeline") return;
    const e = a.match(/^title\s+(.+)/i);
    if (e) {
      n = e[1].trim();
      return;
    }
    const s = a.match(/^section\s+(.+)/i);
    if (s) {
      i = s[1].trim(), r.push(`== ${i} ==`);
      return;
    }
    const h = a.match(/^(.+?)\s*:\s*(.+)/);
    if (h) {
      const d = h[1].trim();
      h[2].split(":").map((f) => f.trim()).filter((f) => f).forEach((f) => {
        r.push(`${d}: ${f}`);
      });
    }
  }), n && (r.unshift(`title: ${n}`), r.splice(1, 0, "")), r.join(`
`);
}
function Mw(o) {
  const t = o.split(`
`), r = [];
  let n = "";
  const i = { x: { left: "", right: "" }, y: { bottom: "", top: "" } }, a = {}, e = [];
  return t.forEach((s) => {
    var g, y;
    if (s = s.trim(), !s || s.startsWith("%%") || s.toLowerCase() === "quadrantchart") return;
    const h = s.match(/^title\s+(.+)/i);
    if (h) {
      n = h[1].trim();
      return;
    }
    const d = s.match(/^x-axis\s+(.+?)(?:\s*-->\s*(.+))?$/i);
    if (d) {
      i.x.left = d[1].trim(), i.x.right = ((g = d[2]) == null ? void 0 : g.trim()) || "";
      return;
    }
    const u = s.match(/^y-axis\s+(.+?)(?:\s*-->\s*(.+))?$/i);
    if (u) {
      i.y.bottom = u[1].trim(), i.y.top = ((y = u[2]) == null ? void 0 : y.trim()) || "";
      return;
    }
    const f = s.match(/^quadrant-(\d)\s+(.+)/i);
    if (f) {
      a[f[1]] = f[2].trim();
      return;
    }
    const m = s.match(/^(.+?)(?::::\w+)?:\s*\[([0-9.]+),\s*([0-9.]+)\]/);
    m && e.push({
      name: m[1].trim(),
      x: parseFloat(m[2]),
      y: parseFloat(m[3])
    });
  }), n && r.push(`title: ${n}`), i.x.left && r.push(`x-axis: ${i.x.left}${i.x.right ? " -> " + i.x.right : ""}`), i.y.bottom && r.push(`y-axis: ${i.y.bottom}${i.y.top ? " -> " + i.y.top : ""}`), Object.entries(a).forEach(([s, h]) => {
    r.push(`quadrant-${s}: ${h}`);
  }), r.push(""), e.forEach((s) => {
    r.push(`"${s.name}": [${s.x}, ${s.y}]`);
  }), r.join(`
`);
}
function Aw(o) {
  const t = o.split(`
`), r = [], n = [];
  return t.forEach((i) => {
    if (i = i.trim(), !i || i.startsWith("%%") || i.toLowerCase().startsWith("sankey")) return;
    const a = [];
    let e = "", s = !1;
    for (let h = 0; h < i.length; h++) {
      const d = i[h];
      d === '"' && !s ? s = !0 : d === '"' && s ? s = !1 : d === "," && !s ? (a.push(e.trim()), e = "") : e += d;
    }
    if (e.trim() && a.push(e.trim()), a.length >= 3) {
      const [h, d, u] = a;
      n.push({ source: h, target: d, value: parseFloat(u) });
    }
  }), n.forEach((i) => {
    r.push(`"${i.source}" -> "${i.target}": ${i.value}`);
  }), r.join(`
`);
}
function $w(o) {
  const t = o.split(`
`), r = [], n = [];
  let i = null;
  return t.forEach((a) => {
    if (a = a.trim(), !a || a.startsWith("%%") || a.toLowerCase() === "requirementdiagram") return;
    const e = a.match(/^(requirement|functionalRequirement|interfaceRequirement|performanceRequirement|physicalRequirement|designConstraint)\s+(\w+)\s*\{?/i);
    if (e) {
      i = { type: e[1], name: e[2], id: "", text: "", risk: "", verifyMethod: "" };
      return;
    }
    const s = a.match(/^element\s+(\w+)\s*\{?/i);
    if (s) {
      i = { type: "element", name: s[1] };
      return;
    }
    if (a === "}") {
      i && (n.push(i), i = null);
      return;
    }
    if (i) {
      const d = a.match(/^(\w+):\s*(.+)/);
      d && (i[d[1]] = d[2]);
    }
    const h = a.match(/^(\w+)\s*-\s*(satisfies|traces|contains|copies|derives|verifies|refines)\s*->\s*(\w+)/i);
    h && r.push(`${h[1]} -${h[2]}-> ${h[3]}`);
  }), n.forEach((a) => {
    if (a.type === "element")
      r.unshift(`[element] ${a.name}: ${a.type || ""}`);
    else {
      const e = [];
      a.id && e.push(`id: ${a.id}`), a.text && e.push(`"${a.text}"`), a.risk && e.push(`risk: ${a.risk}`), r.unshift(`[${a.type}] ${a.name}: ${e.join(", ")}`);
    }
  }), r.join(`
`);
}
function Rw(o) {
  const t = pw(o);
  if (!t)
    throw new Error("Could not detect Mermaid diagram type. Supported types: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap, c4, timeline, quadrant, sankey, requirement");
  let r = "", n = t;
  switch (t) {
    case "flowchart": {
      const i = hw(o);
      r = i.source, n = i.type;
      break;
    }
    case "sequence":
      r = gw(o);
      break;
    case "class":
      r = mw(o);
      break;
    case "state":
      r = yw(o);
      break;
    case "erd":
      r = bw(o);
      break;
    case "gantt":
      r = xw(o);
      break;
    case "pie":
      r = vw(o);
      break;
    case "git":
      r = ww(o);
      break;
    case "journey":
      r = Sw(o);
      break;
    case "mindmap":
      r = kw(o);
      break;
    case "c4":
      r = Ew(o), n = "architecture";
      break;
    case "timeline":
      r = Cw(o);
      break;
    case "quadrant":
      r = Mw(o);
      break;
    case "sankey":
      r = Aw(o);
      break;
    case "requirement":
      r = $w(o);
      break;
    default:
      throw new Error(`Unsupported Mermaid diagram type: ${n}`);
  }
  return { type: n, source: r };
}
function Iw(o) {
  const t = ["flowchart TD"], r = /* @__PURE__ */ new Map();
  let n = 0;
  const i = (a) => {
    const e = a.toLowerCase().replace(/[^a-z0-9]/g, "_");
    return r.has(e) || r.set(e, `N${n++}`), r.get(e);
  };
  return o.split(`
`).forEach((a) => {
    if (a = a.trim(), !a || a.startsWith("#")) return;
    const e = a.split(/\s*->\s*/);
    if (e.length >= 2)
      for (let s = 0; s < e.length - 1; s++) {
        const h = e[s].match(/^\((\w+)\)\s*(.+)/) || [null, "process", e[s]], d = e[s + 1].match(/^\((\w+)\)\s*(.+)/) || [null, "process", e[s + 1]], u = h[1], f = h[2].trim(), m = d[1];
        let g = d[2].trim(), y = "";
        const c = g.match(/^(.+?):\s*(.+)$/);
        c && (g = c[1].trim(), y = c[2].trim());
        const p = i(f), b = i(g), x = (E, k, M) => {
          switch (E) {
            case "decision":
              return `${M}{${k}}`;
            case "start":
            case "end":
              return `${M}((${k}))`;
            case "io":
              return `${M}[/${k}/]`;
            default:
              return `${M}[${k}]`;
          }
        }, C = x(u, f, p), w = x(m, g, b);
        y ? t.push(`    ${C} -->|${y}| ${w}`) : t.push(`    ${C} --> ${w}`);
      }
  }), t.join(`
`);
}
function Tw(o) {
  const t = ["sequenceDiagram"];
  return o.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    if (r.toLowerCase().startsWith("participant")) {
      r.replace(/^participant\s+/i, "").split(",").map((a) => a.trim()).forEach((a) => t.push(`    participant ${a}`));
      return;
    }
    const n = r.match(/^(\w+)\s*(-->?)\s*(\w+)\s*:\s*(.+)/);
    if (n) {
      const [, i, a, e, s] = n, h = a === "-->" ? "-->>" : "->>";
      t.push(`    ${i}${h}${e}: ${s}`);
    }
  }), t.join(`
`);
}
function Pw(o) {
  const t = ["classDiagram"];
  let r = null;
  return o.split(`
`).forEach((n) => {
    if (n = n.trim(), !n) return;
    if (n.startsWith("class ")) {
      r = n.replace("class ", "").trim(), t.push(`    class ${r}`);
      return;
    }
    if (r && /^[+\-#~]/.test(n)) {
      t.push(`    ${r} : ${n}`);
      return;
    }
    const i = n.match(/^(\w+)\s*(-->|--\*|--o|--|>|\.\.>)\s*(\w+)(?:\s*:\s*(.+))?/);
    if (i) {
      const [, a, e, s, h] = i;
      let d = "-->";
      e === "--|>" ? d = "--|>" : e === "--*" ? d = "*--" : e === "--o" ? d = "o--" : e === "..>" && (d = "..>");
      const u = h ? `${a} ${d} ${s} : ${h}` : `${a} ${d} ${s}`;
      t.push(`    ${u}`), r = null;
    }
  }), t.join(`
`);
}
function _w(o) {
  const t = ["stateDiagram-v2"], r = [], n = [];
  return o.split(`
`).forEach((i) => {
    if (i = i.trim(), !i || i.startsWith("#")) return;
    const a = i.match(/^\((\w+)\)\s*(\w+)/);
    if (a) {
      a[1] === "initial" && r.push(a[2]), a[1] === "final" && n.push(a[2]);
      return;
    }
    const e = i.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);
    if (e) {
      const [, s, h, d] = e, u = d ? `${s} --> ${h} : ${d}` : `${s} --> ${h}`;
      t.push(`    ${u}`);
    }
  }), r.forEach((i) => t.unshift(`    [*] --> ${i}`)), n.forEach((i) => t.push(`    ${i} --> [*]`)), t.join(`
`);
}
function Dw(o) {
  const t = ["erDiagram"], r = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi, n = [];
  let i;
  for (; (i = r.exec(o)) !== null; ) {
    const a = i[1], e = i[2];
    t.push(`    ${a} {`), e.split(",").forEach((s) => {
      if (s = s.trim(), !s || /^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)/i.test(s)) return;
      const h = s.match(/^[`"']?(\w+)[`"']?\s+(\w+)/);
      if (h) {
        const [, d, u] = h, f = /PRIMARY\s+KEY/i.test(s), m = /REFERENCES/i.test(s);
        let g = u.toLowerCase();
        f && (g = `${g} PK`), m && (g = `${g} FK`), t.push(`        ${g} ${d}`);
        const y = s.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);
        y && n.push({ from: a, to: y[1], field: d });
      }
    }), t.push("    }");
  }
  return n.forEach((a) => {
    t.push(`    ${a.to} ||--o{ ${a.from} : "has"`);
  }), t.join(`
`);
}
function Lw(o) {
  const t = ["gantt", "    dateFormat X", "    axisFormat %d"];
  return o.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    const n = r.match(/^(.+?),\s*(\d+),\s*(\d+)/);
    if (n) {
      const [, i, a, e] = n;
      t.push(`    ${i.trim()} :${a}, ${e}d`);
    }
  }), t.join(`
`);
}
function Nw(o) {
  const t = ["pie showData"];
  return o.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    const n = r.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);
    n && t.push(`    "${n[1]}" : ${n[2]}`);
  }), t.join(`
`);
}
function Bw(o) {
  const t = ["gitGraph"];
  return o.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    const n = r.match(/^commit\s+"([^"]+)"/i);
    if (n) {
      t.push(`    commit id: "${n[1]}"`);
      return;
    }
    const i = r.match(/^branch\s+(\w+)/i);
    if (i) {
      t.push(`    branch ${i[1]}`);
      return;
    }
    const a = r.match(/^checkout\s+(\w+)/i);
    if (a) {
      t.push(`    checkout ${a[1]}`);
      return;
    }
    const e = r.match(/^merge\s+(\w+)/i);
    if (e) {
      t.push(`    merge ${e[1]}`);
      return;
    }
  }), t.join(`
`);
}
function Ww(o) {
  const t = ["journey", "    title User Journey"], r = [], n = [];
  return o.split(`
`).forEach((i) => {
    var e;
    if (i = i.trim(), !i || i.startsWith("#")) return;
    const a = i.match(/^\[(\w+)\]\s*(.+?)(?:\s*:\s*(.+))?$/);
    if (a && !i.includes("->")) {
      r.push({ type: a[1], label: a[2], desc: a[3] });
      return;
    }
    if (i.includes("->")) {
      const s = i.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+)$/);
      s && n.push({ from: s[1].trim(), label: (e = s[2]) == null ? void 0 : e.trim(), to: s[3].trim() });
    }
  }), t.push("    section Journey"), r.filter((i) => i.type !== "actor").forEach((i, a) => {
    const e = 5 - Math.floor(a / 2);
    t.push(`        ${i.label}: ${Math.max(1, Math.min(5, e))}`);
  }), t.join(`
`);
}
function zw(o) {
  const t = ["mindmap"];
  return o.split(`
`).forEach((r) => {
    if (!r.trim()) return;
    const n = r.match(/^(\s*)/)[1].length, i = Math.floor(n / 2), a = r.trim();
    a && t.push("  ".repeat(i + 1) + a);
  }), t.join(`
`);
}
function Ow(o, t) {
  switch (o) {
    case "flowchart":
      return Iw(t);
    case "sequence":
      return Tw(t);
    case "class":
      return Pw(t);
    case "state":
      return _w(t);
    case "erd":
      return Dw(t);
    case "gantt":
      return Lw(t);
    case "pie":
      return Nw(t);
    case "git":
      return Bw(t);
    case "journey":
      return Ww(t);
    case "mindmap":
      return zw(t);
    default:
      throw new Error(`Cannot export "${o}" to Mermaid. Supported types: flowchart, sequence, class, state, erd, gantt, pie, git, journey, mindmap`);
  }
}
function qw(o, t = "diagram") {
  const r = new Blob([o], { type: "text/plain" }), n = URL.createObjectURL(r), i = document.createElement("a");
  i.href = n, i.download = `${t}.mmd`, i.style.display = "none", document.body.appendChild(i), i.click(), document.body.removeChild(i), setTimeout(() => URL.revokeObjectURL(n), 100);
}
async function Fw(o) {
  await navigator.clipboard.writeText(o);
}
function Uw(o) {
  const [t, r] = V({
    past: [],
    present: { ...o, timestamp: Date.now(), changeType: "initial" },
    future: []
  }), n = _e(!1), i = K((u, f = "unknown") => {
    n.current || r((m) => m.present.source === u.source && m.present.type === u.type && m.present.diagramName === u.diagramName && JSON.stringify(m.present.positions) === JSON.stringify(u.positions) ? m : {
      past: [...m.past.slice(-49), m.present],
      present: {
        ...u,
        timestamp: Date.now(),
        changeType: f
      },
      future: []
      // Clear redo stack on new change
    });
  }, []), a = K(() => {
    r((u) => {
      if (u.past.length === 0) return u;
      const f = u.past[u.past.length - 1];
      return n.current = !0, setTimeout(() => {
        n.current = !1;
      }, 0), {
        past: u.past.slice(0, -1),
        present: f,
        future: [u.present, ...u.future]
      };
    });
  }, []), e = K(() => {
    r((u) => {
      if (u.future.length === 0) return u;
      const f = u.future[0];
      return n.current = !0, setTimeout(() => {
        n.current = !1;
      }, 0), {
        past: [...u.past, u.present],
        present: f,
        future: u.future.slice(1)
      };
    });
  }, []), s = K(() => {
    r((u) => ({
      past: [],
      present: u.present,
      future: []
    }));
  }, []), h = K((u) => {
    r({
      past: [],
      present: { ...u, timestamp: Date.now(), changeType: "reset" },
      future: []
    });
  }, []), d = K(() => n.current, []);
  return {
    // Current state
    state: t.present,
    // Boolean flags
    canUndo: t.past.length > 0,
    canRedo: t.future.length > 0,
    // History info
    historyLength: t.past.length,
    futureLength: t.future.length,
    // Actions
    undo: a,
    redo: e,
    pushState: i,
    clear: s,
    reset: h,
    isApplying: d
  };
}
const cr = {
  // Core diagram types
  flowchart: {
    name: "Flowchart",
    description: "Process flows with decisions and steps",
    aliases: ["flow", "process"]
  },
  sequence: {
    name: "Sequence Diagram",
    description: "Message passing between participants over time",
    aliases: ["seq"]
  },
  mindmap: {
    name: "Mind Map",
    description: "Hierarchical tree structure for concepts and ideas",
    aliases: ["tree", "wbs"]
  },
  architecture: {
    name: "Architecture Diagram",
    description: "System architecture with layers, components, and connections",
    aliases: ["arch", "system"]
  },
  c4: {
    name: "C4 Diagram",
    description: "C4 model diagrams (Context, Container, Component, Code)",
    aliases: ["c4model"]
  },
  erd: {
    name: "ERD",
    description: "Entity Relationship Diagram using SQL CREATE TABLE syntax",
    aliases: ["database", "db", "sql"]
  },
  state: {
    name: "State Machine",
    description: "State transitions with events",
    aliases: ["statemachine", "fsm"]
  },
  journey: {
    name: "User Journey",
    description: "User flow through pages and actions",
    aliases: ["userjourney", "userflow"]
  },
  timeline: {
    name: "Timeline",
    description: "Chronological events with dates",
    aliases: ["roadmap"]
  },
  orgchart: {
    name: "Organization Chart",
    description: "Hierarchical organization structure",
    aliases: ["org", "hierarchy"]
  },
  network: {
    name: "Network Diagram",
    description: "Network topology with devices and connections",
    aliases: ["topology"]
  },
  gantt: {
    name: "Gantt Chart",
    description: "Project timeline with tasks and durations",
    aliases: ["project"]
  },
  class: {
    name: "Class Diagram",
    description: "UML class diagram with properties and methods",
    aliases: ["uml"]
  },
  usecase: {
    name: "Use Case Diagram",
    description: "Actors and their interactions with the system",
    aliases: ["usecases"]
  },
  pie: {
    name: "Pie Chart",
    description: "Proportional data visualization",
    aliases: ["piechart"]
  },
  quadrant: {
    name: "Quadrant Diagram",
    description: "2x2 matrix for prioritization and analysis",
    aliases: ["matrix", "priority"]
  },
  git: {
    name: "Git Graph",
    description: "Git branch and commit visualization",
    aliases: ["gitgraph", "branches"]
  },
  deployment: {
    name: "Deployment Diagram",
    description: "Infrastructure and deployment topology",
    aliases: ["infra", "infrastructure"]
  },
  wireframe: {
    name: "Wireframe",
    description: "UI mockup with components",
    aliases: ["ui", "mockup"]
  },
  activity: {
    name: "Activity Diagram",
    description: "UML activity diagram with actions and decisions",
    aliases: ["workflow"]
  },
  component: {
    name: "Component Diagram",
    description: "System components and their dependencies",
    aliases: ["components"]
  },
  requirement: {
    name: "Requirement Diagram",
    description: "Requirements with risk and priority levels",
    aliases: ["requirements", "specs"]
  }
}, rr = {
  // ---------------------------------------------------------------------------
  // FLOWCHART
  // ---------------------------------------------------------------------------
  flowchart: `
## Flowchart DSL Syntax

**Node Types** (use these keywords, not custom labels):
- (start) Label - Start node (rounded)
- (end) Label - End node (rounded)
- (process) Label - Process step (rectangle)
- (decision) Label - Decision point (diamond)
- (io) Label - Input/Output (parallelogram)

**Connections:**
- NodeLabel -> NextNodeLabel
- NodeLabel -> NextNodeLabel: edge label

**Example:**
\`\`\`
(start) Begin
Begin -> (process) Validate Input
Validate Input -> (decision) Is Valid?
Is Valid? -> (process) Process Data: Yes
Is Valid? -> (io) Show Error: No
Process Data -> (end) Complete
Show Error -> (process) Validate Input: Retry
\`\`\`

**IMPORTANT:** The type keyword (start/end/process/decision/io) defines the shape, NOT the label.
WRONG: (My Label) My Label
RIGHT: (process) My Label
`,
  // ---------------------------------------------------------------------------
  // SEQUENCE DIAGRAM
  // ---------------------------------------------------------------------------
  sequence: `
## Sequence Diagram DSL Syntax

**Define Participants:**
\`participant Name1, Name2, Name3\`

**Message Types:**
- A -> B: message  (solid arrow - request/call)
- A --> B: message (dashed arrow - response/return)
- A ->> B: message (async message)

**Self-calls:**
- A -> A: internal process

**Example:**
\`\`\`
participant Client, API, Database

Client -> API: POST /login
API -> Database: Query user
Database --> API: User data
API -> API: Validate credentials
API --> Client: JWT Token
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // MIND MAP
  // ---------------------------------------------------------------------------
  mindmap: `
## Mind Map DSL Syntax

**Structure:** Indentation-based hierarchy (2 spaces per level)
**NO ARROWS** - hierarchy is defined by indentation only

**Format:**
\`\`\`
Root Topic
  Branch 1
    Sub-item 1.1
    Sub-item 1.2
  Branch 2
    Sub-item 2.1
      Deep item
  Branch 3
\`\`\`

**Optional prefixes:** -, *, + (all treated the same)

**IMPORTANT:**
- Do NOT use arrows (->)
- Hierarchy comes from indentation
- Use consistent 2-space indentation
`,
  // ---------------------------------------------------------------------------
  // ARCHITECTURE DIAGRAM
  // ---------------------------------------------------------------------------
  architecture: `
## Architecture Diagram DSL Syntax

**Title/Subtitle (optional):**
\`\`\`
title: System Architecture
subtitle: High-level overview
\`\`\`

**Layer Definitions:**
\`[layerType] Component1, Component2, Component3\`
\`[layerType] Component: Description\`

**Layer Types:**
- [clients] - Client applications (web, mobile)
- [frontend] - Frontend layer
- [gateway] - API gateways, load balancers
- [api] - API layer
- [services] - Microservices, backend services
- [backend] - Backend layer
- [data] - Data stores
- [database] - Databases (PostgreSQL, MongoDB)
- [cache] - Caching layer (Redis, Memcached)
- [queue] - Message queues (RabbitMQ, Kafka)
- [storage] - Object storage (S3, Blob)
- [external] - External systems

**C4-Style Node Types (for detailed diagrams):**
- [person] User: Description
- [system] System Name: Description
- [webapp] Web Application: Technology
- [mobileapp] Mobile App: Technology
- [component] Component: Description
- [service] Service Name: Description
- [server] Server: Description
- [monitoring] Monitoring Tool: Description
- [logging] Logging: Description

**Grouping with Boundaries (C4 style):**
\`\`\`
boundary "Group Name" {
  [type] Component1: Description
  [type] Component2: Description
}
\`\`\`

**Connections:**
- Source -> Target
- Source -> Target: label

**Edge Styles:**
- A -> B (solid)
- A --> B (dotted)
- A ==> B (thick)
- A ->> B (async)
- A -.-> B (dashed)

**Complete Example:**
\`\`\`
title: E-Commerce Platform
subtitle: Microservices Architecture

[person] Customer: Online shopper
[external] Payment Gateway: Stripe

boundary "Web Layer" {
  [webapp] Web App: React
  [mobileapp] Mobile App: React Native
}

boundary "Services" {
  [service] User Service: Authentication
  [service] Order Service: Order management
  [service] Product Service: Catalog
}

boundary "Data Layer" {
  [database] PostgreSQL: Primary DB
  [cache] Redis: Session cache
  [queue] RabbitMQ: Events
}

Customer -> Web App: Uses
Web App -> User Service: API calls
Order Service -> PostgreSQL: Writes
Order Service -> RabbitMQ: Publishes
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // C4 DIAGRAM
  // ---------------------------------------------------------------------------
  c4: `
## C4 Diagram DSL Syntax

**Element Types:**
- [person] Name: Description
- [system] Name: Description
- [container] Name: Description
- [component] Name: Description
- [external] Name: Description
- [database] Name: Description

**Grouping with Boundaries:**
\`\`\`
boundary "System Name" {
  [container] API: REST API
  [container] Web App: React frontend
  [database] Database: PostgreSQL
}
\`\`\`

**Relationships:**
- Element1 -> Element2: Description

**Example:**
\`\`\`
[person] User: A customer of the system

boundary "Internet Banking System" {
  [container] Web Application: React
  [container] API: Node.js REST API
  [database] Database: PostgreSQL
}

[external] Email System: SendGrid

User -> Web Application: Uses
Web Application -> API: JSON/HTTPS
API -> Database: Reads/Writes
API -> Email System: Sends emails
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // ERD
  // ---------------------------------------------------------------------------
  erd: `
## ERD (Entity Relationship Diagram) DSL Syntax

**Uses SQL CREATE TABLE statements**

**Primary Key:** column_name TYPE PRIMARY KEY
**Foreign Key:** column_name TYPE REFERENCES table(column)

**Example:**
\`\`\`sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100),
  created_at TIMESTAMP
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total DECIMAL(10,2),
  status VARCHAR(50)
);

CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER,
  price DECIMAL(10,2)
);
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // STATE MACHINE
  // ---------------------------------------------------------------------------
  state: `
## State Machine DSL Syntax

**Special States:**
- (initial) StateName - Start state
- (final) StateName - End state

**Transitions:**
\`State1 -> State2: EVENT_NAME\`

**Example:**
\`\`\`
(initial) Idle

Idle -> Loading: FETCH
Loading -> Success: RESOLVE
Loading -> Error: REJECT
Success -> Idle: RESET
Error -> Loading: RETRY
Error -> Idle: DISMISS

(final) Success
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // USER JOURNEY
  // ---------------------------------------------------------------------------
  journey: `
## User Journey DSL Syntax

**Node Types:**
- [actor] Name - User/persona
- [user] Name - User
- [page] Name - Page/screen
- [screen] Name - Screen
- [action] Name - User action
- [form] Name - Form
- [email] Name - Email
- [success] Name - Success state
- [error] Name - Error state
- [decision] Name - Decision point
- [notification] Name - Notification
- [milestone] Name - Milestone

**Connections:**
- Node1 -> Node2
- Node1 -label-> Node2

**Example:**
\`\`\`
[actor] Customer
[page] Homepage
[action] Search Products
[page] Product List
[action] Add to Cart
[page] Cart
[action] Checkout
[form] Payment Form
[success] Order Confirmed

Customer -> Homepage
Homepage -> Search Products
Search Products -> Product List
Product List -> Add to Cart
Add to Cart -> Cart
Cart -> Checkout
Checkout -> Payment Form
Payment Form -> Order Confirmed
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // TIMELINE
  // ---------------------------------------------------------------------------
  timeline: `
## Timeline DSL Syntax

**Format:**
\`[Date] Event Title | Description\`

**Milestones (with *):**
\`[Date] *Milestone Title | Description\`

**Example:**
\`\`\`
[Q1 2024] *Project Kickoff | Team assembled
[Q1 2024] Requirements | Specs finalized
[Q2 2024] Design Phase | UI/UX complete
[Q2 2024] *Alpha Release | Core features done
[Q3 2024] Beta Testing | User feedback
[Q4 2024] *Public Launch | Version 1.0
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // ORG CHART
  // ---------------------------------------------------------------------------
  orgchart: `
## Organization Chart DSL Syntax

**Structure:** Indentation-based hierarchy

**Optional title in brackets:**
\`Name [Title]\`

**Example:**
\`\`\`
CEO [Chief Executive Officer]
  CTO [Chief Technology Officer]
    VP Engineering
      Engineering Manager
        Senior Developer
        Developer
    QA Lead
      QA Engineer
  CFO [Chief Financial Officer]
    Finance Manager
    HR Manager
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // NETWORK DIAGRAM
  // ---------------------------------------------------------------------------
  network: `
## Network Diagram DSL Syntax

**Device Types:**
- [cloud] Name (IP)
- [firewall] Name (IP)
- [router] Name (IP)
- [switch] Name (IP)
- [server] Name (IP)
- [computer] Name (IP)
- [hub] Name (IP)

**Connections:**
- Device1 -- Device2
- Device1 -- Device2: Protocol

**Example:**
\`\`\`
[cloud] Internet
[firewall] Firewall (10.0.0.1)
[router] Router (10.0.0.2)
[switch] Switch (10.0.1.1)
[server] Web Server (10.0.1.10)
[server] DB Server (10.0.1.11)
[computer] Workstation (10.0.2.10)

Internet -- Firewall
Firewall -- Router
Router -- Switch
Switch -- Web Server: HTTP
Switch -- DB Server: PostgreSQL
Router -- Workstation: SSH
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // GANTT CHART
  // ---------------------------------------------------------------------------
  gantt: `
## Gantt Chart DSL Syntax

**Format:**
\`TaskName, startDay, duration, progress(optional)\`

- startDay: Day number (0 = start)
- duration: Number of days
- progress: 0-100 percentage (optional)

**Example:**
\`\`\`
Planning, 0, 3, 100
Design, 3, 4, 100
Development, 7, 10, 60
Testing, 15, 5, 0
Deployment, 19, 2, 0
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // CLASS DIAGRAM
  // ---------------------------------------------------------------------------
  class: `
## Class Diagram DSL Syntax

**Class Declaration:**
\`class ClassName\`

**Properties:**
- + property: type  (public)
- - property: type  (private)
- # property: type  (protected)

**Methods:**
- + methodName(params): returnType  (public)
- - methodName(): void  (private)

**Example:**
\`\`\`
class User
  + id: string
  + email: string
  - passwordHash: string
  + login(email, password): boolean
  + logout(): void
  # hashPassword(plain): string

class Order
  + id: string
  + userId: string
  + items: Item[]
  + total: number
  + calculateTotal(): number
  + addItem(item): void
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // USE CASE DIAGRAM
  // ---------------------------------------------------------------------------
  usecase: `
## Use Case Diagram DSL Syntax

**Actors:**
\`actor ActorName\`

**Use Cases:**
\`(Use Case Name)\`

**Relationships:**
\`Actor -> Use Case\`

**Example:**
\`\`\`
actor Customer
actor Admin
actor System

(Browse Products)
(Add to Cart)
(Checkout)
(Manage Products)
(Process Orders)
(Send Notifications)

Customer -> Browse Products
Customer -> Add to Cart
Customer -> Checkout
Admin -> Manage Products
Admin -> Process Orders
System -> Send Notifications
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // PIE CHART
  // ---------------------------------------------------------------------------
  pie: `
## Pie Chart DSL Syntax

**Format:**
\`"Label": value\` or \`Label: value\`

**Example:**
\`\`\`
"JavaScript": 35
"Python": 25
"TypeScript": 20
"Go": 12
"Other": 8
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // QUADRANT DIAGRAM
  // ---------------------------------------------------------------------------
  quadrant: `
## Quadrant Diagram DSL Syntax

**Configuration:**
\`\`\`
title: Chart Title
x-axis: Label ->
y-axis: Label ->
quadrant-1: Top-Right Label
quadrant-2: Top-Left Label
quadrant-3: Bottom-Left Label
quadrant-4: Bottom-Right Label
\`\`\`

**Points:**
\`Label: [x, y]\` where x,y are 0-100

**Example:**
\`\`\`
title: Priority Matrix
x-axis: Effort ->
y-axis: Impact ->
quadrant-1: Quick Wins
quadrant-2: Major Projects
quadrant-3: Fill-ins
quadrant-4: Thankless Tasks

Feature A: [20, 85]
Feature B: [80, 90]
Feature C: [30, 30]
Feature D: [75, 25]
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // GIT GRAPH
  // ---------------------------------------------------------------------------
  git: `
## Git Graph DSL Syntax

**Commands:**
- commit "Message"
- branch BranchName
- checkout BranchName
- merge BranchName

**Example:**
\`\`\`
commit "Initial commit"
commit "Add project structure"
branch develop
commit "Feature: Auth"
commit "Feature: Dashboard"
checkout main
commit "Hotfix: Security"
merge develop
commit "Release v1.0"
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // DEPLOYMENT DIAGRAM
  // ---------------------------------------------------------------------------
  deployment: `
## Deployment Diagram DSL Syntax

**Node Types (hierarchical with indentation):**
- [cloud] Name
- [cluster] Name
- [container] Name
- [server] Name
- [database] Name
- [storage] Name
- [device] Name
- [component] Name

**Example:**
\`\`\`
[cloud] AWS
  [cluster] EKS Cluster
    [container] API Pod
    [container] Worker Pod
  [database] RDS PostgreSQL
  [storage] S3 Bucket
  [cache] ElastiCache
[cloud] Cloudflare
  [component] CDN
  [component] WAF
[device] User Browser
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // WIREFRAME
  // ---------------------------------------------------------------------------
  wireframe: `
## Wireframe DSL Syntax

**Window Frame:**
\`{Window Title}\`

**Navigation:**
\`[[ Item1 | Item2 | Item3 ]]\` - navbar
\`(( Tab1 | Tab2 ))\` - tabs

**Content:**
- \`# Heading\` - heading
- \`>> Breadcrumb > Path\` - breadcrumbs
- \`---\` - divider
- \`___\` - spacer

**Components:**
- \`[Button]\` - button
- \`[search: placeholder]\` - search
- \`[v Dropdown]\` - dropdown
- \`[progress: 75%]\` - progress bar
- \`(@Username)\` - avatar

**Cards:**
\`\`\`
<Card Title>
  Content here
</Card>
\`\`\`

**Tables:**
\`|Col1|Col2|Col3|\`

**Example:**
\`\`\`
{Dashboard}
[[ Home | Analytics | Settings ]]

>> Dashboard > Overview

# Welcome Back

<Stats>
|Metric|Value|
|Users|1,234|
|Revenue|$5,678|

[progress: 75%]
</Stats>

[Export] [Refresh]
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // ACTIVITY DIAGRAM
  // ---------------------------------------------------------------------------
  activity: `
## Activity Diagram DSL Syntax

**Nodes:**
- \`[start]\` or \`start\` - start node
- \`[end]\` or \`end\` - end node
- \`:Action Name;\` - action
- \`<Decision?>\` - decision diamond

**Connections (required for branching):**
\`NodeLabel -> NodeLabel: EdgeLabel\`

**Example:**
\`\`\`
[start]
:Open App;
:Login;
<Authenticated?>
:Show Dashboard;
:Show Error;
[end]

start -> Open App
Open App -> Login
Login -> Authenticated?
Authenticated? -> Show Dashboard: Yes
Authenticated? -> Show Error: No
Show Dashboard -> end
Show Error -> Login: Retry
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // COMPONENT DIAGRAM
  // ---------------------------------------------------------------------------
  component: `
## Component Diagram DSL Syntax

**Component Types:**
- [service] Name
- [component] Name
- [database] Name
- [cache] Name
- [queue] Name
- [api] Name

**Connections:**
- Comp1 --> Comp2 (depends on)
- Comp1 -- Comp2 (associates with)

**Example:**
\`\`\`
[service] API Gateway
[service] Auth Service
[service] User Service
[database] PostgreSQL
[cache] Redis
[queue] RabbitMQ

API Gateway --> Auth Service
API Gateway --> User Service
Auth Service -- Redis
User Service --> PostgreSQL
User Service --> RabbitMQ
\`\`\`
`,
  // ---------------------------------------------------------------------------
  // REQUIREMENT DIAGRAM
  // ---------------------------------------------------------------------------
  requirement: `
## Requirement Diagram DSL Syntax

**Requirement Definition:**
\`\`\`
requirement Name {
  text: Requirement description
  risk: Low | Medium | High
  priority: Low | Medium | High | Critical
}
\`\`\`

**Relationships:**
- Req1 -> Req2: derives
- Req1 -> Req2: traces
- Req1 -> Req2: satisfies

**Example:**
\`\`\`
requirement Authentication {
  text: Users must authenticate via OAuth or password
  risk: High
  priority: Critical
}

requirement Encryption {
  text: All data must be encrypted at rest
  risk: Medium
  priority: High
}

requirement Audit {
  text: All actions must be logged
  risk: Low
  priority: Medium
}

Authentication -> Encryption: derives
Encryption -> Audit: traces
\`\`\`
`
}, Ig = `# DDFlow DSL Reference

This is the complete DSL syntax reference for DDFlow diagram generation.
Use this reference when prompting AI to generate diagram DSL.

## Supported Diagram Types

${Object.entries(cr).map(([o, t]) => `- **${o}** - ${t.description}`).join(`
`)}

---

${Object.entries(rr).map(([o, t]) => t).join(`
---
`)}
`, Tg = `You are a diagram DSL generator for DDFlow. Generate ONLY valid DDFlow DSL code based on user descriptions.

CRITICAL RULES:
1. Output ONLY the DSL code - no explanations, no markdown code blocks
2. Start with: <!-- type: DIAGRAM_TYPE -->
3. Use EXACT syntax from the reference below
4. For hierarchical data (mind maps, org charts) use INDENTATION, not arrows

${Ig}

---

USER REQUEST:
{USER_INPUT}

Generate the DDFlow DSL:`;
function Gw(o) {
  var r;
  const t = o.toLowerCase();
  if (rr[t])
    return rr[t];
  for (const [n, i] of Object.entries(cr))
    if ((r = i.aliases) != null && r.includes(t))
      return rr[n];
  return null;
}
function jw() {
  return Object.keys(cr);
}
function Hw(o) {
  return cr[o.toLowerCase()] || null;
}
function Yw(o) {
  return Tg.replace("{USER_INPUT}", o);
}
function Vw() {
  return `DDFlow DSL Quick Reference

FLOWCHART: (start) Label -> (process) Label -> (decision) Label? -> (end) Done
SEQUENCE: participant A, B, C | A -> B: message | B --> A: response
MINDMAP: Root (indent 2 spaces for children, NO arrows)
ARCHITECTURE: [clients] App1, App2 | [services] Svc1, Svc2 | App1 -> Svc1
  - Boundaries: boundary "Name" { [type] Component }
C4: [person] User | [system] App | [container] API | User -> App: Uses
ERD: CREATE TABLE name (id INT PRIMARY KEY, fk INT REFERENCES other(id));
STATE: (initial) Start | Start -> Loading: EVENT | (final) Done
JOURNEY: [actor] User | [page] Home | [action] Click | User -> Home
TIMELINE: [Q1 2024] *Milestone | Description
ORGCHART: CEO (indent for hierarchy)
NETWORK: [server] Name (IP) | Server1 -- Server2: Protocol
GANTT: TaskName, startDay, duration, progress
CLASS: class Name | +public: type | -private: type | +method(): void
USECASE: actor User | (Use Case) | User -> Use Case
PIE: "Label": value
QUADRANT: title: Name | x-axis: Label -> | Point: [x, y]
GIT: commit "msg" | branch name | checkout name | merge name
DEPLOYMENT: [cloud] AWS (indent [container] for children)
WIREFRAME: {Title} | [[ Nav ]] | # Heading | [Button] | <Card>...</>
ACTIVITY: [start] | :Action; | <Decision?> | [end] | Node -> Node: label
COMPONENT: [service] Name | [database] Name | Svc --> DB
REQUIREMENT: requirement Name { text: desc | risk: High | priority: Critical }

Always start with: <!-- type: TYPENAME -->`;
}
const W2 = {
  DIAGRAM_TYPES: cr,
  DSL_SYNTAX: rr,
  DSL_REFERENCE: Ig,
  AI_PROMPT_TEMPLATE: Tg,
  getDSLForType: Gw,
  getAvailableTypes: jw,
  getTypeInfo: Hw,
  createAIPrompt: Yw,
  getCompactReference: Vw
};
function Kw(o, t) {
  let r = null;
  const n = (...i) => {
    r && clearTimeout(r), r = setTimeout(() => o(...i), t);
  };
  return n.cancel = () => {
    r && clearTimeout(r);
  }, n;
}
const $e = {
  dark: {
    name: "dark",
    background: "linear-gradient(135deg, #0a0a0f, #1a1a2e, #0f0f1a)",
    canvasBg: "rgba(0,0,0,0.4)",
    gridColor: "rgba(124,58,237,0.04)",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#555555",
    border: "rgba(255,255,255,0.1)",
    surface: "rgba(15, 23, 42, 0.95)",
    cardBg: "rgba(15, 23, 42, 0.95)",
    headerBg: "transparent",
    toolbarBg: "transparent",
    editorBg: "rgba(0,0,0,0.3)",
    editorText: "#a78bfa",
    buttonBg: "rgba(255,255,255,0.05)",
    buttonActiveBg: "rgba(124,58,237,0.3)",
    modalBg: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
    inputBg: "rgba(0,0,0,0.3)",
    logoGradient: "linear-gradient(135deg, #fff, #a78bfa)"
  },
  light: {
    name: "light",
    background: "linear-gradient(135deg, #f8fafc, #e2e8f0, #f1f5f9)",
    canvasBg: "rgba(255,255,255,0.7)",
    gridColor: "rgba(124,58,237,0.08)",
    textPrimary: "#1e293b",
    textSecondary: "#64748b",
    textMuted: "#94a3b8",
    border: "rgba(0,0,0,0.1)",
    surface: "rgba(255, 255, 255, 0.95)",
    cardBg: "rgba(255, 255, 255, 0.95)",
    headerBg: "rgba(255,255,255,0.8)",
    toolbarBg: "rgba(255,255,255,0.6)",
    editorBg: "rgba(255,255,255,0.95)",
    editorText: "#7c3aed",
    buttonBg: "rgba(0,0,0,0.05)",
    buttonActiveBg: "rgba(124,58,237,0.2)",
    modalBg: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))",
    inputBg: "rgba(255,255,255,0.9)",
    logoGradient: "linear-gradient(135deg, #1e293b, #7c3aed)"
  }
}, Pg = "ddflow_theme";
function Xw() {
  try {
    return localStorage.getItem(Pg) || "dark";
  } catch {
    return "dark";
  }
}
function Qw(o) {
  try {
    localStorage.setItem(Pg, o);
  } catch {
  }
}
const _g = "ddflow_sketch_mode";
function Zw() {
  try {
    return localStorage.getItem(_g) === "true";
  } catch {
    return !1;
  }
}
function Jw(o) {
  try {
    localStorage.setItem(_g, o ? "true" : "false");
  } catch {
  }
}
const Ee = {
  stroke: "#333333",
  fill: "#faf9f6",
  accent: "#5c5c5c"
}, v = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  pink: "#EC4899",
  red: "#EF4444",
  cyan: "#06B6D4",
  violet: "#8B5CF6",
  teal: "#14B8A6",
  amber: "#D97706",
  indigo: "#6366F1",
  rose: "#F43F5E",
  emerald: "#059669",
  sky: "#0284C7",
  fuchsia: "#D946EF",
  lime: "#84CC16",
  slate: "#64748B",
  zinc: "#71717A",
  yellow: "#EAB308"
}, rf = {
  // Frontend/Client layer - Light green
  clients: "#dcfce7",
  client: "#dcfce7",
  frontend: "#dcfce7",
  web: "#dcfce7",
  mobile: "#dcfce7",
  users: "#dcfce7",
  user: "#dcfce7",
  // Gateway/API layer - Light yellow
  gateway: "#fef9c3",
  gateways: "#fef9c3",
  api: "#fef9c3",
  lb: "#fef9c3",
  loadbalancer: "#fef9c3",
  proxy: "#fef9c3",
  cdn: "#fef9c3",
  // Services/Backend layer - Light blue
  services: "#dbeafe",
  service: "#dbeafe",
  backend: "#dbeafe",
  microservices: "#dbeafe",
  microservice: "#dbeafe",
  functions: "#dbeafe",
  // Data/Storage layer - Light purple
  data: "#f3e8ff",
  database: "#f3e8ff",
  databases: "#f3e8ff",
  storage: "#f3e8ff",
  db: "#f3e8ff",
  // Cache layer - Light red
  cache: "#fecaca",
  redis: "#fecaca",
  memcached: "#fecaca",
  // Queue/Messaging layer - Light amber
  queue: "#fef3c7",
  queues: "#fef3c7",
  kafka: "#fef3c7",
  messaging: "#fef3c7",
  eventbus: "#fef3c7",
  // Monitoring layer - Light fuchsia
  monitoring: "#fae8ff",
  metrics: "#fae8ff",
  logging: "#fae8ff",
  // Security layer - Light indigo
  auth: "#e0e7ff",
  security: "#e0e7ff",
  identity: "#e0e7ff",
  // External layer - Light gray
  external: "#f1f5f9",
  thirdparty: "#f1f5f9",
  saas: "#f1f5f9",
  // Default
  default: "#f1f5f9"
}, nf = {
  clients: "#86efac",
  client: "#86efac",
  frontend: "#86efac",
  web: "#86efac",
  mobile: "#86efac",
  users: "#86efac",
  user: "#86efac",
  gateway: "#fde047",
  gateways: "#fde047",
  api: "#fde047",
  lb: "#fde047",
  loadbalancer: "#fde047",
  proxy: "#fde047",
  cdn: "#fde047",
  services: "#93c5fd",
  service: "#93c5fd",
  backend: "#93c5fd",
  microservices: "#93c5fd",
  microservice: "#93c5fd",
  functions: "#93c5fd",
  data: "#d8b4fe",
  database: "#d8b4fe",
  databases: "#d8b4fe",
  storage: "#d8b4fe",
  db: "#d8b4fe",
  cache: "#fca5a5",
  redis: "#fca5a5",
  memcached: "#fca5a5",
  queue: "#fcd34d",
  queues: "#fcd34d",
  kafka: "#fcd34d",
  messaging: "#fcd34d",
  eventbus: "#fcd34d",
  monitoring: "#f0abfc",
  metrics: "#f0abfc",
  logging: "#f0abfc",
  auth: "#a5b4fc",
  security: "#a5b4fc",
  identity: "#a5b4fc",
  external: "#cbd5e1",
  thirdparty: "#cbd5e1",
  saas: "#cbd5e1",
  default: "#cbd5e1"
}, ge = [v.purple, v.blue, v.green, v.orange, v.pink, v.cyan, v.violet, v.teal], Pt = (o, t = !1) => t ? Ee.fill : `linear-gradient(135deg, ${o}70, ${o}50)`, ot = (o, t, r, n = !1) => n ? "none" : t ? `0 0 0 2px ${o}, 0 12px 28px ${o}50, 0 20px 40px rgba(0,0,0,0.25)` : r ? `0 0 0 3px rgba(124,58,237,0.7), 0 8px 24px rgba(124,58,237,0.35), 0 16px 32px ${o}25` : `0 2px 4px rgba(0,0,0,0.08), 0 8px 20px ${o}25, 0 16px 40px ${o}12`, on = (o = !1) => o ? "'Caveat', cursive" : "system-ui, -apple-system, sans-serif", e2 = (o, t = !1) => {
  if (t) {
    if (typeof o == "string") {
      const r = parseFloat(o), n = o.replace(/[\d.]/g, "") || "px";
      return `${r * 1.25}${n}`;
    }
    return o * 1.25;
  }
  return o;
}, lr = (o, t, r, n) => {
  const i = r - o, a = n - t, e = Math.sqrt(i * i + a * a), s = Math.min(Math.max(e * 0.3, 20), 80);
  if (e < 30)
    return `M ${o} ${t} L ${r} ${n}`;
  if (Math.abs(i) > Math.abs(a) * 1.2) {
    const f = i > 0 ? 1 : -1, m = a * 0.1;
    return `M ${o} ${t} C ${o + s * f} ${t + m}, ${r - s * f} ${n - m}, ${r} ${n}`;
  }
  if (Math.abs(a) > Math.abs(i) * 1.2) {
    const f = a > 0 ? 1 : -1, m = i * 0.1;
    return `M ${o} ${t} C ${o + m} ${t + s * f}, ${r - m} ${n - s * f}, ${r} ${n}`;
  }
  const h = i > 0 ? 1 : -1, d = a > 0 ? 1 : -1, u = s * 0.7;
  return `M ${o} ${t} C ${o + u * h} ${t + u * d * 0.3}, ${r - u * h} ${n - u * d * 0.3}, ${r} ${n}`;
}, Dg = (o, t, r, n, i = !1) => {
  if (!i)
    return lr(o, t, r, n);
  const a = r - o, e = n - t, s = Math.sqrt(a * a + e * e), h = Math.max(3, Math.floor(s / 40)), d = [];
  for (let f = 0; f <= h; f++) {
    const m = f / h;
    let g = o + a * m, y = t + e * m;
    f > 0 && f < h && (g += (Math.random() - 0.5) * 3 * 2, y += (Math.random() - 0.5) * 3 * 2), d.push({ x: g, y });
  }
  if (d.length < 2) return `M ${o} ${t} L ${r} ${n}`;
  let u = `M ${d[0].x} ${d[0].y}`;
  for (let f = 1; f < d.length; f++) {
    const m = d[f - 1], g = d[f], y = (m.x + g.x) / 2, c = (m.y + g.y) / 2;
    u += ` Q ${m.x} ${m.y} ${y} ${c}`;
  }
  return u += ` L ${d[d.length - 1].x} ${d[d.length - 1].y}`, u;
};
function Be(o = { x: 50, y: 50 }) {
  const t = _e(null), [r, n] = V(o), [i, a] = V(1), [e, s] = V(!1), [h, d] = V({ x: 0, y: 0 }), [u, f] = V({}), [m, g] = V(null), [y, c] = V({ x: 0, y: 0 }), [p, b] = V(!0), x = 25, C = K((q) => p ? Math.round(q / x) * x : q, [p, x]), [w, E] = V(/* @__PURE__ */ new Set()), [k, M] = V(null), [A, I] = V(""), [R, $] = V({}), [D, P] = V({}), [_, z] = V({}), [B, j] = V({}), X = { width: 130, height: 60 }, te = { width: 80, height: 40 }, ee = { width: 300, height: 200 }, [ae, F] = V(null), [N, Z] = V(null), [T, W] = V(null), [O, de] = V(null), [Se, fe] = V(!1), [ze, De] = V(null), [ie, G] = V(""), [Y, ce] = V(!1), [Q, ne] = V(null), [re, se] = V(null), [pe, ke] = V(null), [Me, we] = V({}), [Ie, qe] = V({}), [Ye, Ve] = V({}), [ct, lt] = V(null), [Ke, rt] = V({ horizontal: [], vertical: [] }), Ue = 5, Ge = _e(null), dt = _e(null), Ze = K((q, H) => {
    if (!t.current) return { x: 0, y: 0 };
    const le = t.current.getBoundingClientRect();
    return {
      x: (q - le.left - r.x) / i,
      y: (H - le.top - r.y) / i
    };
  }, [r, i]), an = K((q) => {
    if (q.target === t.current || q.target.classList.contains("canvas-bg"))
      if (q.shiftKey) {
        const H = Ze(q.clientX, q.clientY);
        fe(!0), de({ startX: H.x, startY: H.y, endX: H.x, endY: H.y });
      } else
        s(!0), d({ x: q.clientX - r.x, y: q.clientY - r.y });
  }, [r, Ze]), sn = K((q, H, le, xe) => {
    if (q.stopPropagation(), Z(null), q.shiftKey) {
      E((Re) => {
        const je = new Set(Re);
        return je.has(H) ? je.delete(H) : je.add(H), je;
      });
      return;
    }
    E(/* @__PURE__ */ new Set([H])), g(H);
    const Ae = Ze(q.clientX, q.clientY);
    c({ x: Ae.x - le, y: Ae.y - xe });
  }, [Ze]), cn = K((q, H, le) => {
    q.stopPropagation(), M(H), I(le || ""), E(/* @__PURE__ */ new Set([H]));
  }, []), ln = K(() => {
    const q = { nodeId: k, newValue: A };
    return M(null), I(""), q;
  }, [k, A]), dn = K(() => {
    M(null), I("");
  }, []), un = K((q, H) => {
    q.preventDefault(), q.stopPropagation(), Z({
      nodeId: H,
      x: q.clientX,
      y: q.clientY
    }), w.has(H) || E(/* @__PURE__ */ new Set([H]));
  }, [w]), dr = K(() => {
    Z(null);
  }, []), ur = K((q, H) => {
    $((le) => ({
      ...le,
      [q]: H
    })), Z(null);
  }, []), pr = K((q, H) => {
    P((le) => ({
      ...le,
      [q]: H
    }));
  }, []), pn = K((q, H) => {
    z((le) => ({
      ...le,
      [q]: H
    }));
  }, []), hr = K(() => {
    E(/* @__PURE__ */ new Set());
  }, []), fr = K((q) => {
    if (w.size === 0 || !q) return;
    const H = q.filter((xe) => w.has(xe.id));
    if (H.length === 0) return;
    const le = H.map((xe) => {
      var Ae, Re;
      return {
        ...xe,
        copiedX: ((Ae = u[xe.id]) == null ? void 0 : Ae.x) ?? xe.x,
        copiedY: ((Re = u[xe.id]) == null ? void 0 : Re.y) ?? xe.y
      };
    });
    return W(le), le;
  }, [w, u]), hn = K(() => {
    if (!T || T.length === 0) return null;
    const q = 30;
    return T.map((H) => ({
      ...H,
      id: `${H.id}_copy_${Date.now()}`,
      x: H.copiedX + q,
      y: H.copiedY + q,
      label: H.label
    }));
  }, [T]), fn = K((q, H, le) => {
    q.stopPropagation(), De(H), G(le || "");
  }, []), gn = K(() => {
    const q = { edgeId: ze, newValue: ie };
    return De(null), G(""), q;
  }, [ze, ie]), mn = K(() => {
    De(null), G("");
  }, []), yn = K((q, H) => {
    q.preventDefault(), q.stopPropagation(), lt({
      edgeId: H,
      x: q.clientX,
      y: q.clientY
    });
  }, []), gr = K(() => {
    lt(null);
  }, []), mr = K((q, H) => {
    we((le) => ({
      ...le,
      [q]: H
    }));
  }, []), yr = K((q, H) => {
    qe((le) => ({
      ...le,
      [q]: H
    })), lt(null);
  }, []), br = K((q, H) => {
    Ve((le) => ({
      ...le,
      [q]: H
    }));
  }, []), xr = K((q) => B[q] || X, [B]), vr = K((q, H, le) => {
    q.stopPropagation(), q.preventDefault();
    const xe = B[H] || X;
    F({
      nodeId: H,
      handle: le,
      // 'se' (southeast), 'e' (east), 's' (south)
      startX: q.clientX,
      startY: q.clientY,
      startWidth: xe.width,
      startHeight: xe.height
    });
  }, [B]), Yt = K((q, H) => {
    if (!ae) return;
    const le = (q - ae.startX) / i, xe = (H - ae.startY) / i;
    let Ae = ae.startWidth, Re = ae.startHeight;
    ae.handle.includes("e") && (Ae = Math.max(te.width, Math.min(ee.width, ae.startWidth + le))), ae.handle.includes("s") && (Re = Math.max(te.height, Math.min(ee.height, ae.startHeight + xe))), p && (Ae = Math.round(Ae / x) * x, Re = Math.round(Re / x) * x, Ae = Math.max(te.width, Ae), Re = Math.max(te.height, Re)), j((je) => ({
      ...je,
      [ae.nodeId]: { width: Ae, height: Re }
    }));
  }, [ae, i, p, x]);
  K(() => {
    F(null);
  }, []);
  const wr = K((q, H, le, xe) => {
    q.stopPropagation(), q.preventDefault(), ce(!0), ne({ nodeId: H, x: le, y: xe }), se({ x: le, y: xe });
  }, []), Sr = K(() => {
    ce(!1), ne(null), se(null), ke(null);
  }, []), kr = K((q) => {
    Y && Q && Q.nodeId !== q && ke(q);
  }, [Y, Q]), Er = K(() => {
    ke(null);
  }, []), Cr = K((q, H) => {
    if (!H || !q) return [];
    const le = Math.min(H.startX, H.endX), xe = Math.max(H.startX, H.endX), Ae = Math.min(H.startY, H.endY), Re = Math.max(H.startY, H.endY);
    return q.filter((je) => {
      const Qe = u[je.id] || { x: je.x, y: je.y };
      return Qe.x >= le && Qe.x <= xe && Qe.y >= Ae && Qe.y <= Re;
    }).map((je) => je.id);
  }, [u]), Mr = K((q) => {
    if (e)
      n({ x: q.clientX - h.x, y: q.clientY - h.y });
    else if (ae)
      Yt(q.clientX, q.clientY);
    else if (Y) {
      const H = Ze(q.clientX, q.clientY);
      se({ x: H.x, y: H.y });
    } else if (Se && O) {
      const H = Ze(q.clientX, q.clientY);
      de((le) => ({ ...le, endX: H.x, endY: H.y }));
    } else if (m) {
      const H = Ze(q.clientX, q.clientY);
      let le = H.x - y.x, xe = H.y - y.y;
      le = C(le), xe = C(xe), f((Ae) => ({
        ...Ae,
        [m]: { x: le, y: xe }
      }));
    } else
      (Ke.horizontal.length > 0 || Ke.vertical.length > 0) && rt({ horizontal: [], vertical: [] });
  }, [e, h, ae, Yt, Y, Se, O, m, y, Ze, C, Ke]), U = K((q, H, le, xe) => {
    if (!q || !H) {
      rt({ horizontal: [], vertical: [] });
      return;
    }
    const Ae = [], Re = [];
    le.forEach((je) => {
      if (je.id === q) return;
      const Qe = xe(je);
      Math.abs(Qe.y - H.y) < Ue && Ae.push({ y: Qe.y, fromX: Math.min(Qe.x, H.x) - 50, toX: Math.max(Qe.x, H.x) + 200 }), Math.abs(Qe.x - H.x) < Ue && Re.push({ x: Qe.x, fromY: Math.min(Qe.y, H.y) - 50, toY: Math.max(Qe.y, H.y) + 100 });
    }), rt({ horizontal: Ae, vertical: Re });
  }, [Ue]), ue = K(() => {
    rt({ horizontal: [], vertical: [] });
    let q = null;
    return Y && Q && pe && (q = {
      source: Q.nodeId,
      target: pe
    }), s(!1), g(null), F(null), fe(!1), de(null), ce(!1), ne(null), se(null), ke(null), q;
  }, [Y, Q, pe]), be = (q) => {
    if (q.length < 2) return null;
    const H = q[0].clientX - q[1].clientX, le = q[0].clientY - q[1].clientY;
    return Math.sqrt(H * H + le * le);
  }, Xe = (q) => q.length < 2 ? { x: q[0].clientX, y: q[0].clientY } : {
    x: (q[0].clientX + q[1].clientX) / 2,
    y: (q[0].clientY + q[1].clientY) / 2
  }, Dt = K((q) => {
    if (q.touches.length === 2)
      q.preventDefault(), Ge.current = be(q.touches), dt.current = Xe(q.touches);
    else if (q.touches.length === 1) {
      const H = q.touches[0];
      (q.target === t.current || q.target.classList.contains("canvas-bg")) && (s(!0), d({ x: H.clientX - r.x, y: H.clientY - r.y }));
    }
  }, [r]), ut = K((q, H, le, xe) => {
    if (q.stopPropagation(), q.touches.length === 1) {
      const Ae = q.touches[0];
      g(H);
      const Re = Ze(Ae.clientX, Ae.clientY);
      c({ x: Re.x - le, y: Re.y - xe });
    }
  }, [Ze]), Je = K((q) => {
    if (q.touches.length === 2) {
      q.preventDefault();
      const H = be(q.touches), le = Xe(q.touches);
      if (Ge.current && H) {
        const xe = H / Ge.current;
        a((Ae) => Math.min(Math.max(Ae * xe, 0.2), 3));
      }
      if (dt.current) {
        const xe = le.x - dt.current.x, Ae = le.y - dt.current.y;
        n((Re) => ({ x: Re.x + xe, y: Re.y + Ae }));
      }
      Ge.current = H, dt.current = le;
    } else if (q.touches.length === 1) {
      const H = q.touches[0];
      if (e)
        n({ x: H.clientX - h.x, y: H.clientY - h.y });
      else if (m) {
        q.preventDefault();
        const le = Ze(H.clientX, H.clientY);
        f((xe) => ({
          ...xe,
          [m]: { x: le.x - y.x, y: le.y - y.y }
        }));
      }
    }
  }, [e, h, m, y, Ze]), Ar = K(() => {
    s(!1), g(null), Ge.current = null, dt.current = null;
  }, []), Lg = K((q) => {
    q.preventDefault();
    const le = 1 - q.deltaY * 2e-3;
    a((xe) => Math.min(Math.max(xe * le, 0.2), 3));
  }, []), Ng = K(() => {
    n(o), a(1), f({});
  }, [o]), Bg = K((q) => {
    if (!t.current || !q) return;
    const H = t.current.getBoundingClientRect(), le = 60, xe = (H.width - le * 2) / q.width, Ae = (H.height - le * 2) / q.height, Re = Math.min(Math.max(Math.min(xe, Ae), 0.3), 1.5), je = q.x + q.width / 2, Qe = q.y + q.height / 2;
    n({
      x: H.width / 2 - je * Re,
      y: H.height / 2 - Qe * Re
    }), a(Re);
  }, []), Wg = K((q, H, le) => {
    const xe = u[q];
    return xe ? { x: xe.x, y: xe.y } : { x: H, y: le };
  }, [u]);
  return {
    canvasRef: t,
    pan: r,
    setPan: n,
    zoom: i,
    setZoom: a,
    isPanning: e,
    dragging: m,
    positions: u,
    // Multi-select
    selectedNodes: w,
    setSelectedNodes: E,
    clearSelection: hr,
    // Inline editing
    editingNode: k,
    editValue: A,
    setEditValue: I,
    handleNodeDoubleClick: cn,
    finishEditing: ln,
    cancelEditing: dn,
    // Node colors
    nodeColors: R,
    setNodeColor: ur,
    nodeIcons: D,
    setNodeIcon: pr,
    nodeShapes: _,
    setNodeShape: pn,
    // Node sizes (resize)
    nodeSizes: B,
    getNodeSize: xr,
    resizing: ae,
    handleResizeStart: vr,
    // Context menu
    contextMenu: N,
    handleNodeContextMenu: un,
    closeContextMenu: dr,
    // Clipboard (copy/paste)
    clipboard: T,
    copySelectedNodes: fr,
    pasteNodes: hn,
    // Selection box (drag to select)
    selectionBox: O,
    isSelecting: Se,
    getNodesInSelectionBox: Cr,
    // Edge editing
    editingEdge: ze,
    edgeEditValue: ie,
    setEdgeEditValue: G,
    handleEdgeDoubleClick: fn,
    finishEdgeEditing: gn,
    cancelEdgeEditing: mn,
    // Edge styles and context menu
    edgeStyles: Me,
    setEdgeStyle: mr,
    edgeArrowTypes: Ie,
    setEdgeArrowType: yr,
    edgePathTypes: Ye,
    setEdgePathType: br,
    edgeContextMenu: ct,
    handleEdgeContextMenu: yn,
    closeEdgeContextMenu: gr,
    // Connection drawing (drag from node to node)
    isConnecting: Y,
    connectionStart: Q,
    connectionEnd: re,
    connectionTarget: pe,
    handlePortMouseDown: wr,
    cancelConnection: Sr,
    setConnectionTargetNode: kr,
    clearConnectionTarget: Er,
    // Snap to grid
    snapToGrid: p,
    setSnapToGrid: b,
    // Alignment guides
    alignmentGuides: Ke,
    updateAlignmentGuides: U,
    // Existing handlers
    handleCanvasMouseDown: an,
    handleNodeMouseDown: sn,
    handleMouseMove: Mr,
    handleMouseUp: ue,
    handleTouchStart: Dt,
    handleNodeTouchStart: ut,
    handleTouchMove: Je,
    handleTouchEnd: Ar,
    handleWheel: Lg,
    resetView: Ng,
    fitToView: Bg,
    getNodePosition: Wg,
    setPositions: f
  };
}
function We({ onZoomIn: o, onZoomOut: t, onFit: r, onReset: n, zoom: i, snapToGrid: a, onToggleSnap: e, onAutoLayout: s }) {
  return /* @__PURE__ */ S(yt, { children: [
    /* @__PURE__ */ S("div", { style: { position: "absolute", bottom: 12, left: 12, display: "flex", gap: 6, zIndex: 100 }, children: [
      [{ l: "+", a: o }, { l: "−", a: t }, { l: "Fit", a: r }, { l: "Reset", a: n }].map((h) => /* @__PURE__ */ l("button", { onClick: h.a, style: { minWidth: h.l.length > 1 ? "auto" : 36, height: 36, padding: h.l.length > 1 ? "0 12px" : 0, background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "#fff", fontSize: h.l.length > 1 ? "0.75rem" : "1.2rem", cursor: "pointer" }, children: h.l }, h.l)),
      e && /* @__PURE__ */ S(
        "button",
        {
          onClick: e,
          title: a ? "Snap to grid: ON" : "Snap to grid: OFF",
          style: {
            minWidth: 36,
            height: 36,
            padding: "0 10px",
            background: a ? "rgba(124,58,237,0.5)" : "rgba(0,0,0,0.7)",
            border: `1px solid ${a ? v.purple : "rgba(255,255,255,0.2)"}`,
            borderRadius: 8,
            color: "#fff",
            fontSize: "0.75rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4
          },
          children: [
            /* @__PURE__ */ l("span", { style: { fontSize: "1rem" }, children: "⊞" }),
            /* @__PURE__ */ l("span", { children: a ? "ON" : "OFF" })
          ]
        }
      ),
      s && /* @__PURE__ */ S(
        "button",
        {
          onClick: s,
          title: "Auto-layout: Arrange nodes automatically",
          style: {
            minWidth: 36,
            height: 36,
            padding: "0 10px",
            background: "rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 8,
            color: "#fff",
            fontSize: "0.75rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4
          },
          children: [
            /* @__PURE__ */ l("span", { style: { fontSize: "1rem" }, children: "⚡" }),
            /* @__PURE__ */ l("span", { children: "Layout" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ S("div", { style: { position: "absolute", bottom: 12, right: 12, background: "rgba(0,0,0,0.7)", borderRadius: 6, padding: "4px 10px", color: "#888", fontSize: "0.7rem", zIndex: 100 }, children: [
      Math.round(i * 100),
      "%"
    ] }),
    /* @__PURE__ */ l("div", { style: { position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.6)", borderRadius: 6, padding: "6px 10px", color: "#666", fontSize: "0.65rem", zIndex: 100 }, children: "Drag nodes • Drag port to connect • Double-click to edit • Right-click for styles • Shift+drag to select" })
  ] });
}
const t2 = [
  { name: "Purple", color: v.purple },
  { name: "Blue", color: v.blue },
  { name: "Green", color: v.green },
  { name: "Orange", color: v.orange },
  { name: "Pink", color: v.pink },
  { name: "Red", color: v.red },
  { name: "Cyan", color: v.cyan },
  { name: "Teal", color: v.teal },
  { name: "Indigo", color: v.indigo },
  { name: "Rose", color: v.rose },
  { name: "Slate", color: v.slate },
  { name: "Default", color: null }
], r2 = [
  { name: "Rectangle", shape: "rectangle", icon: "▭" },
  { name: "Rounded", shape: "rounded", icon: "▢" },
  { name: "Circle", shape: "circle", icon: "●" },
  { name: "Diamond", shape: "diamond", icon: "◆" },
  { name: "Hexagon", shape: "hexagon", icon: "⬡" },
  { name: "Pill", shape: "pill", icon: "💊" }
], n2 = [
  { name: "None", icon: null },
  { name: "Server", icon: "🖥️" },
  { name: "Database", icon: "🗄️" },
  { name: "Cloud", icon: "☁️" },
  { name: "User", icon: "👤" },
  { name: "Settings", icon: "⚙️" },
  { name: "Lock", icon: "🔒" },
  { name: "Email", icon: "📧" },
  { name: "API", icon: "🔌" },
  { name: "File", icon: "📄" },
  { name: "Folder", icon: "📁" },
  { name: "Code", icon: "💻" },
  { name: "Chart", icon: "📊" },
  { name: "Bell", icon: "🔔" },
  { name: "Star", icon: "⭐" },
  { name: "Check", icon: "✅" },
  { name: "Warning", icon: "⚠️" },
  { name: "Error", icon: "❌" },
  { name: "Money", icon: "💰" },
  { name: "Clock", icon: "🕐" }
];
function st({ x: o, y: t, nodeId: r, currentIcon: n, currentShape: i, onSelectColor: a, onSelectIcon: e, onSelectShape: s, onClose: h, theme: d }) {
  const u = _e(null);
  return he(() => {
    const f = (m) => {
      u.current && !u.current.contains(m.target) && h();
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [h]), /* @__PURE__ */ S(
    "div",
    {
      ref: u,
      style: {
        position: "fixed",
        left: o,
        top: t,
        background: (d == null ? void 0 : d.modalBg) || "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
        border: `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.15)"}`,
        borderRadius: 12,
        padding: 12,
        zIndex: 1e3,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        minWidth: 160
      },
      children: [
        /* @__PURE__ */ l("div", { style: { color: (d == null ? void 0 : d.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Node Color" }),
        /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }, children: t2.map((f) => /* @__PURE__ */ l(
          "button",
          {
            onClick: () => a(r, f.color),
            title: f.name,
            style: {
              width: 28,
              height: 28,
              borderRadius: 6,
              border: f.color ? `2px solid ${f.color}` : `2px dashed ${(d == null ? void 0 : d.textMuted) || "#555"}`,
              background: f.color ? `${f.color}40` : "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.7rem",
              color: (d == null ? void 0 : d.textMuted) || "#666"
            },
            children: !f.color && "×"
          },
          f.name
        )) }),
        e && /* @__PURE__ */ S("div", { style: { marginTop: 12, paddingTop: 10, borderTop: `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.1)"}` }, children: [
          /* @__PURE__ */ l("div", { style: { color: (d == null ? void 0 : d.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Node Icon" }),
          /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4, maxHeight: 120, overflowY: "auto" }, children: n2.map((f) => {
            const m = n === f.icon || !n && !f.icon;
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => e(r, f.icon),
                title: f.name,
                style: {
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  border: m ? `2px solid ${v.purple}` : `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.1)"}`,
                  background: m ? `${v.purple}20` : "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: f.icon ? "1rem" : "0.7rem",
                  color: (d == null ? void 0 : d.textMuted) || "#666"
                },
                children: f.icon || "×"
              },
              f.name
            );
          }) })
        ] }),
        s && /* @__PURE__ */ S("div", { style: { marginTop: 12, paddingTop: 10, borderTop: `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.1)"}` }, children: [
          /* @__PURE__ */ l("div", { style: { color: (d == null ? void 0 : d.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Node Shape" }),
          /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }, children: r2.map((f) => {
            const m = i === f.shape || !i && f.shape === "rounded";
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => s(r, f.shape),
                title: f.name,
                style: {
                  padding: "6px 8px",
                  borderRadius: 6,
                  border: m ? `2px solid ${v.purple}` : `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.1)"}`,
                  background: m ? `${v.purple}20` : "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  fontSize: "0.7rem",
                  color: (d == null ? void 0 : d.textPrimary) || "#fff"
                },
                children: /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem" }, children: f.icon })
              },
              f.shape
            );
          }) })
        ] }),
        /* @__PURE__ */ l("div", { style: { marginTop: 10, paddingTop: 8, borderTop: `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.1)"}` }, children: /* @__PURE__ */ l(
          "button",
          {
            onClick: h,
            style: {
              width: "100%",
              padding: "6px 12px",
              background: "transparent",
              border: `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.1)"}`,
              borderRadius: 6,
              color: (d == null ? void 0 : d.textSecondary) || "#888",
              fontSize: "0.75rem",
              cursor: "pointer"
            },
            children: "Cancel"
          }
        ) })
      ]
    }
  );
}
const bc = [
  { name: "Solid", style: "solid", icon: "━", dasharray: null, animated: !1 },
  { name: "Animated", style: "animated", icon: "〰️", dasharray: null, animated: !0 },
  { name: "Dashed", style: "dashed", icon: "┅", dasharray: "10,6", animated: !1 },
  { name: "Dotted", style: "dotted", icon: "···", dasharray: "2,4", animated: !1 }
], o2 = [
  { name: "Triangle", type: "triangle", icon: "▶" },
  { name: "Open", type: "open", icon: "▷" },
  { name: "Diamond", type: "diamond", icon: "◆" },
  { name: "Circle", type: "circle", icon: "●" },
  { name: "None", type: "none", icon: "—" }
];
function i2({ x: o, y: t, edgeId: r, currentStyle: n, currentArrowType: i, currentPathType: a, onSelectStyle: e, onSelectArrowType: s, onSelectPathType: h, onClose: d, theme: u }) {
  const f = _e(null);
  return he(() => {
    const m = (g) => {
      f.current && !f.current.contains(g.target) && d();
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [d]), /* @__PURE__ */ S(
    "div",
    {
      ref: f,
      style: {
        position: "fixed",
        left: o,
        top: t,
        background: (u == null ? void 0 : u.modalBg) || "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
        border: `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.15)"}`,
        borderRadius: 12,
        padding: 12,
        zIndex: 1e3,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        minWidth: 160
      },
      children: [
        /* @__PURE__ */ l("div", { style: { color: (u == null ? void 0 : u.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Line Style" }),
        /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: bc.map((m) => {
          const g = n === m.style || !n && m.style === "animated";
          return /* @__PURE__ */ S(
            "button",
            {
              onClick: () => e(r, m.style),
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 12px",
                borderRadius: 8,
                border: g ? `2px solid ${v.purple}` : `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.1)"}`,
                background: g ? `${v.purple}20` : "transparent",
                cursor: "pointer",
                color: (u == null ? void 0 : u.textPrimary) || "#fff",
                fontSize: "0.8rem"
              },
              children: [
                /* @__PURE__ */ l("span", { style: { fontSize: "1rem", width: 24 }, children: m.icon }),
                /* @__PURE__ */ l("span", { children: m.name }),
                g && /* @__PURE__ */ l("span", { style: { marginLeft: "auto", color: v.purple }, children: "✓" })
              ]
            },
            m.style
          );
        }) }),
        /* @__PURE__ */ S("div", { style: { marginTop: 12, paddingTop: 10, borderTop: `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.1)"}` }, children: [
          /* @__PURE__ */ l("div", { style: { color: (u == null ? void 0 : u.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Arrow Style" }),
          /* @__PURE__ */ l("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 }, children: o2.map((m) => {
            const g = i === m.type || !i && m.type === "triangle";
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => s(r, m.type),
                title: m.name,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: g ? `2px solid ${v.purple}` : `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.1)"}`,
                  background: g ? `${v.purple}20` : "transparent",
                  cursor: "pointer",
                  color: (u == null ? void 0 : u.textPrimary) || "#fff",
                  fontSize: "1rem"
                },
                children: m.icon
              },
              m.type
            );
          }) })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginTop: 12, paddingTop: 10, borderTop: `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.1)"}` }, children: [
          /* @__PURE__ */ l("div", { style: { color: (u == null ? void 0 : u.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Path Style" }),
          /* @__PURE__ */ l("div", { style: { display: "flex", gap: 4 }, children: [
            { name: "Curved", type: "curved", icon: "⌒" },
            { name: "Straight", type: "straight", icon: "—" },
            { name: "Elbow", type: "step", icon: "⌐" },
            { name: "Rounded", type: "rounded", icon: "╭" }
          ].map((m) => {
            const g = a === m.type || !a && m.type === "curved";
            return /* @__PURE__ */ S(
              "button",
              {
                onClick: () => h(r, m.type),
                style: {
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: g ? `2px solid ${v.purple}` : `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.1)"}`,
                  background: g ? `${v.purple}20` : "transparent",
                  cursor: "pointer",
                  color: (u == null ? void 0 : u.textPrimary) || "#fff",
                  fontSize: "0.8rem"
                },
                children: [
                  /* @__PURE__ */ l("span", { style: { fontSize: "1rem" }, children: m.icon }),
                  /* @__PURE__ */ l("span", { children: m.name })
                ]
              },
              m.type
            );
          }) })
        ] }),
        /* @__PURE__ */ l("div", { style: { marginTop: 10, paddingTop: 8, borderTop: `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.1)"}` }, children: /* @__PURE__ */ l(
          "button",
          {
            onClick: d,
            style: {
              width: "100%",
              padding: "6px 12px",
              background: "transparent",
              border: `1px solid ${(u == null ? void 0 : u.border) || "rgba(255,255,255,0.1)"}`,
              borderRadius: 6,
              color: (u == null ? void 0 : u.textSecondary) || "#888",
              fontSize: "0.75rem",
              cursor: "pointer"
            },
            children: "Cancel"
          }
        ) })
      ]
    }
  );
}
function tt({
  isEditing: o,
  value: t,
  onChange: r,
  onFinish: n,
  onCancel: i,
  style: a = {},
  inputStyle: e = {}
}) {
  const s = _e(null);
  he(() => {
    o && s.current && (s.current.focus(), s.current.select());
  }, [o]);
  const h = (d) => {
    d.key === "Enter" ? (d.preventDefault(), n()) : d.key === "Escape" && (d.preventDefault(), i());
  };
  return o ? /* @__PURE__ */ l(
    "input",
    {
      ref: s,
      type: "text",
      value: t,
      onChange: (d) => r(d.target.value),
      onBlur: n,
      onKeyDown: h,
      style: {
        background: "rgba(0,0,0,0.5)",
        border: "1px solid rgba(124,58,237,0.5)",
        borderRadius: 4,
        color: "#fff",
        fontSize: "inherit",
        fontWeight: "inherit",
        textAlign: "center",
        padding: "2px 6px",
        width: "100%",
        minWidth: 60,
        outline: "none",
        ...e
      },
      onClick: (d) => d.stopPropagation(),
      onMouseDown: (d) => d.stopPropagation()
    }
  ) : /* @__PURE__ */ l("span", { style: a, children: t });
}
function a2(o) {
  const t = {
    format: "sections",
    title: "",
    actors: [],
    sections: []
  };
  let r = null;
  const n = [
    v.cyan,
    v.purple,
    v.orange,
    v.pink,
    v.emerald,
    v.amber,
    v.blue,
    v.red
  ], i = {
    user: v.pink,
    system: v.blue,
    admin: v.purple,
    customer: v.cyan,
    default: v.slate
  };
  return o.split(`
`).forEach((a) => {
    if (a = a.trim(), !a) return;
    const e = a.match(/^title:\s*(.+)/i);
    if (e) {
      t.title = e[1].trim();
      return;
    }
    const s = a.match(/^actors:\s*(.+)/i);
    if (s) {
      t.actors = s[1].split(",").map((u) => {
        const f = u.trim(), m = i[f.toLowerCase()] || i.default;
        return { name: f, color: m };
      });
      return;
    }
    const h = a.match(/^==\s*(.+?)\s*==$/);
    if (h) {
      const u = t.sections.length;
      r = {
        name: h[1],
        color: n[u % n.length],
        tasks: []
      }, t.sections.push(r);
      return;
    }
    const d = a.match(/^-\s*(.+?)\s*\|\s*(\d+)(?:\s*\|\s*(.+))?$/);
    if (d && r) {
      const u = d[1].trim(), f = parseInt(d[2]), m = d[3] || "", g = m ? m.split(",").map((y) => y.trim()).filter((y) => y) : [];
      r.tasks.push({
        id: `task-${t.sections.length - 1}-${r.tasks.length}`,
        name: u,
        score: f,
        actors: g
      });
    }
  }), t;
}
const s2 = {
  markdown: (o) => {
    const t = o.split(`
`).filter((i) => i.trim());
    if (!t.length) return { id: "root", label: "Empty", children: [] };
    const r = { id: "root", label: t[0].trim(), children: [] }, n = [{ node: r, indent: -1 }];
    for (let i = 1; i < t.length; i++) {
      const a = t[i], e = a.trimStart(), s = a.length - e.length, h = e.replace(/^[-*+]\s*/, "").trim();
      if (!h) continue;
      for (; n.length > 1 && n[n.length - 1].indent >= s; ) n.pop();
      const d = { id: `node-${i}`, label: h, children: [] };
      n[n.length - 1].node.children.push(d), n.push({ node: d, indent: s });
    }
    return r;
  },
  sql: (o) => {
    const t = [], r = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi;
    let n;
    for (; (n = r.exec(o)) !== null; ) {
      const i = n[1], a = [];
      n[2].split(",").map((e) => e.trim()).filter((e) => e && !/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT|INDEX|KEY)/i.test(e)).forEach((e) => {
        const s = e.match(/^[`"']?(\w+)[`"']?\s+(\w+(?:\([^)]+\))?)/i);
        if (s) {
          const h = { name: s[1], type: s[2].toUpperCase() };
          /PRIMARY\s+KEY/i.test(e) && (h.key = !0);
          const d = e.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);
          d && (h.fk = !0, h.references = d[1]), a.push(h);
        }
      }), t.push({ name: i, fields: a });
    }
    return t;
  },
  architecture: (o) => {
    const t = /* @__PURE__ */ new Map(), r = [], n = /* @__PURE__ */ new Map();
    let i = 0, a = null, e = null;
    const s = o.match(/^title:\s*(.+)$/im), h = o.match(/^subtitle:\s*(.+)$/im);
    s && (a = s[1].trim()), h && (e = h[1].trim());
    const d = {
      // ===== C4 MODEL TYPES =====
      // Context Level - People and Systems
      person: { color: "#08427B", icon: "👤", shape: "person", label: "Person" },
      actor: { color: "#08427B", icon: "👤", shape: "person", label: "Actor" },
      system: { color: "#1168BD", icon: "🏢", shape: "rect", label: "Software System" },
      software: { color: "#1168BD", icon: "🏢", shape: "rect", label: "Software System" },
      // Container Level
      webapp: { color: "#438DD5", icon: "🌐", shape: "rect", label: "Web Application" },
      mobileapp: { color: "#438DD5", icon: "📱", shape: "rect", label: "Mobile App" },
      spa: { color: "#438DD5", icon: "⚛️", shape: "rect", label: "SPA" },
      desktop: { color: "#438DD5", icon: "🖥️", shape: "rect", label: "Desktop App" },
      // Component Level
      component: { color: "#85BBF0", icon: "⚙️", shape: "rect", label: "Component" },
      controller: { color: "#85BBF0", icon: "🎮", shape: "rect", label: "Controller" },
      repository: { color: "#85BBF0", icon: "📚", shape: "rect", label: "Repository" },
      facade: { color: "#85BBF0", icon: "🎭", shape: "rect", label: "Facade" },
      // Code Level
      class: { color: "#B8D4E8", icon: "📄", shape: "rect", label: "Class" },
      interface: { color: "#B8D4E8", icon: "📋", shape: "rect", label: "Interface" },
      module: { color: "#B8D4E8", icon: "📦", shape: "rect", label: "Module" },
      // Deployment Level - Infrastructure
      server: { color: "#999999", icon: "🖥️", shape: "rect", label: "Server" },
      vm: { color: "#999999", icon: "💻", shape: "rect", label: "Virtual Machine" },
      instance: { color: "#999999", icon: "🖥️", shape: "rect", label: "Instance" },
      deployment: { color: "#999999", icon: "🚀", shape: "rect", label: "Deployment Node" },
      infrastructure: { color: "#666666", icon: "🏗️", shape: "rect", label: "Infrastructure" },
      datacenter: { color: "#666666", icon: "🏢", shape: "rect", label: "Data Center" },
      // External Systems
      external: { color: "#999999", icon: "🔗", shape: "rect", label: "External System" },
      thirdparty: { color: "#999999", icon: "🔗", shape: "rect", label: "Third Party" },
      // ===== ARCHITECTURE TYPES =====
      // Client/Frontend
      clients: { color: v.pink, icon: "🖥️", shape: "rect", label: "Clients" },
      client: { color: v.pink, icon: "🖥️", shape: "rect", label: "Client" },
      web: { color: v.pink, icon: "🌐", shape: "rect", label: "Web" },
      mobile: { color: v.pink, icon: "📱", shape: "rect", label: "Mobile" },
      browser: { color: v.pink, icon: "🌐", shape: "rect", label: "Browser" },
      user: { color: v.pink, icon: "👤", shape: "rect", label: "User" },
      users: { color: v.pink, icon: "👥", shape: "rect", label: "Users" },
      // Gateway/Network
      gateway: { color: v.orange, icon: "🚪", shape: "hexagon", label: "Gateway" },
      gateways: { color: v.orange, icon: "🚪", shape: "hexagon", label: "Gateways" },
      api: { color: v.orange, icon: "🔌", shape: "hexagon", label: "API" },
      lb: { color: v.orange, icon: "⚖️", shape: "hexagon", label: "Load Balancer" },
      loadbalancer: { color: v.orange, icon: "⚖️", shape: "hexagon", label: "Load Balancer" },
      proxy: { color: v.orange, icon: "🔀", shape: "hexagon", label: "Proxy" },
      cdn: { color: v.orange, icon: "🌍", shape: "hexagon", label: "CDN" },
      dns: { color: v.orange, icon: "📍", shape: "rect", label: "DNS" },
      firewall: { color: v.red, icon: "🛡️", shape: "hexagon", label: "Firewall" },
      // Services/Backend
      services: { color: v.blue, icon: "⚙️", shape: "rect", label: "Services" },
      service: { color: v.blue, icon: "⚙️", shape: "rect", label: "Service" },
      backend: { color: v.blue, icon: "⚙️", shape: "rect", label: "Backend" },
      microservice: { color: v.blue, icon: "🔷", shape: "rect", label: "Microservice" },
      microservices: { color: v.blue, icon: "🔷", shape: "rect", label: "Microservices" },
      function: { color: v.violet, icon: "λ", shape: "rect", label: "Function" },
      lambda: { color: v.violet, icon: "λ", shape: "rect", label: "Lambda" },
      serverless: { color: v.violet, icon: "☁️", shape: "rect", label: "Serverless" },
      worker: { color: v.blue, icon: "👷", shape: "rect", label: "Worker" },
      // Containers/Orchestration
      container: { color: v.cyan, icon: "📦", shape: "rect", label: "Container" },
      containers: { color: v.cyan, icon: "📦", shape: "rect", label: "Containers" },
      docker: { color: v.cyan, icon: "🐳", shape: "rect", label: "Docker" },
      k8s: { color: v.cyan, icon: "☸️", shape: "rect", label: "Kubernetes" },
      kubernetes: { color: v.cyan, icon: "☸️", shape: "rect", label: "Kubernetes" },
      pod: { color: v.cyan, icon: "🫛", shape: "rect", label: "Pod" },
      pods: { color: v.cyan, icon: "🫛", shape: "rect", label: "Pods" },
      cluster: { color: v.cyan, icon: "🔷", shape: "rect", label: "Cluster" },
      node: { color: v.cyan, icon: "🖥️", shape: "rect", label: "Node" },
      // Data/Storage
      databases: { color: v.emerald, icon: "🗄️", shape: "cylinder", label: "Databases" },
      database: { color: v.emerald, icon: "🗄️", shape: "cylinder", label: "Database" },
      db: { color: v.emerald, icon: "🗄️", shape: "cylinder", label: "Database" },
      data: { color: v.emerald, icon: "🗄️", shape: "cylinder", label: "Data" },
      sql: { color: v.emerald, icon: "📊", shape: "cylinder", label: "SQL" },
      nosql: { color: v.emerald, icon: "📋", shape: "cylinder", label: "NoSQL" },
      storage: { color: v.emerald, icon: "💾", shape: "cylinder", label: "Storage" },
      s3: { color: v.emerald, icon: "🪣", shape: "cylinder", label: "S3" },
      blob: { color: v.emerald, icon: "📁", shape: "cylinder", label: "Blob" },
      // Cache/Memory
      cache: { color: v.red, icon: "⚡", shape: "cylinder", label: "Cache" },
      redis: { color: v.red, icon: "⚡", shape: "cylinder", label: "Redis" },
      memcached: { color: v.red, icon: "🧠", shape: "cylinder", label: "Memcached" },
      // Messaging/Queue
      queue: { color: v.amber, icon: "📬", shape: "rect", label: "Queue" },
      queues: { color: v.amber, icon: "📬", shape: "rect", label: "Queues" },
      mq: { color: v.amber, icon: "📨", shape: "rect", label: "Message Queue" },
      kafka: { color: v.amber, icon: "📊", shape: "rect", label: "Kafka" },
      rabbitmq: { color: v.amber, icon: "🐰", shape: "rect", label: "RabbitMQ" },
      pubsub: { color: v.amber, icon: "📢", shape: "rect", label: "Pub/Sub" },
      eventbus: { color: v.amber, icon: "🚌", shape: "rect", label: "Event Bus" },
      stream: { color: v.amber, icon: "🌊", shape: "rect", label: "Stream" },
      // Monitoring/Observability
      monitoring: { color: v.fuchsia, icon: "📈", shape: "rect", label: "Monitoring" },
      metrics: { color: v.fuchsia, icon: "📊", shape: "rect", label: "Metrics" },
      logging: { color: v.fuchsia, icon: "📝", shape: "rect", label: "Logging" },
      logs: { color: v.fuchsia, icon: "📝", shape: "rect", label: "Logs" },
      tracing: { color: v.fuchsia, icon: "🔍", shape: "rect", label: "Tracing" },
      alerting: { color: v.fuchsia, icon: "🔔", shape: "rect", label: "Alerting" },
      // Security
      auth: { color: v.indigo, icon: "🔐", shape: "rect", label: "Auth" },
      identity: { color: v.indigo, icon: "🆔", shape: "rect", label: "Identity" },
      vault: { color: v.indigo, icon: "🔒", shape: "rect", label: "Vault" },
      secrets: { color: v.indigo, icon: "🔑", shape: "rect", label: "Secrets" },
      // Cloud/Infrastructure
      cloud: { color: v.sky, icon: "☁️", shape: "rect", label: "Cloud" },
      aws: { color: v.orange, icon: "☁️", shape: "rect", label: "AWS" },
      gcp: { color: v.blue, icon: "☁️", shape: "rect", label: "GCP" },
      azure: { color: v.sky, icon: "☁️", shape: "rect", label: "Azure" },
      vpc: { color: v.slate, icon: "🔲", shape: "rect", label: "VPC" },
      subnet: { color: v.slate, icon: "📡", shape: "rect", label: "Subnet" },
      region: { color: v.slate, icon: "🌍", shape: "rect", label: "Region" },
      zone: { color: v.slate, icon: "📍", shape: "rect", label: "Zone" },
      // Third-party
      saas: { color: v.slate, icon: "☁️", shape: "rect", label: "SaaS" },
      email: { color: v.slate, icon: "📧", shape: "rect", label: "Email" },
      payment: { color: v.slate, icon: "💳", shape: "rect", label: "Payment" },
      analytics: { color: v.slate, icon: "📊", shape: "rect", label: "Analytics" }
    }, u = 150, f = 90, m = [
      { bg: "#1168BD", border: "#0D5BA8" },
      // Blue
      { bg: "#2D882D", border: "#236B23" },
      // Green
      { bg: "#7B4B94", border: "#5E3A72" },
      // Purple
      { bg: "#D4652F", border: "#B85525" },
      // Orange
      { bg: "#C73E1D", border: "#A33318" },
      // Red
      { bg: "#1A9988", border: "#157A6C" }
      // Teal
    ];
    let g = 0;
    const y = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), b = [];
    let x = 0;
    const C = o.split(`
`);
    for (let G = 0; G < C.length; G++) {
      let Y = C[G].trim();
      if (!Y || Y.startsWith("#")) continue;
      const ce = Y.match(/^(?:group|boundary)\s+["']([^"']+)["']\s*\{?\s*$/i);
      if (ce) {
        const re = ce[1], se = b.length > 0 ? b[b.length - 1] : null;
        p.set(re, {
          name: re,
          nodes: [],
          colorIndex: x++,
          parent: se,
          children: []
        }), se && p.has(se) && p.get(se).children.push(re), b.push(re);
        continue;
      }
      if (Y === "}" && b.length > 0) {
        b.pop();
        continue;
      }
      const Q = Y.match(/^\[(\w+)(?:\s+"([^"]+)")?\]\s*(.+)/);
      if (Q) {
        const re = Q[1].toLowerCase(), se = Q[2] || null, pe = Q[3], ke = d[re] || { color: v.slate, icon: "📦", shape: "rect" }, Me = pe.split(",").map((Ye) => Ye.trim()).filter((Ye) => Ye), we = b.length > 0 ? b[b.length - 1] : null, Ie = `layer-${re}-${i}`, qe = se || re.charAt(0).toUpperCase() + re.slice(1);
        n.has(Ie) || n.set(Ie, {
          id: Ie,
          type: re,
          label: qe,
          nodes: [],
          color: rf[re] || rf.default,
          borderColor: nf[re] || nf.default,
          order: i
        }), Me.forEach((Ye) => {
          const Ve = Ye.match(/^([^:]+):\s*(.+)$/), ct = Ve ? Ve[1].trim() : Ye, lt = Ve ? Ve[2].trim() : "", Ke = ct.toLowerCase().replace(/[^a-z0-9]/g, "_"), rt = we && p.has(we) ? p.get(we).colorIndex : -1, Ue = rt >= 0 ? m[rt % m.length] : null, Ge = {
            id: Ke,
            label: ct,
            description: lt,
            type: re,
            typeLabel: ke.label || re,
            ...ke,
            // Override color with layer color if in a group
            color: Ue ? Ue.bg : ke.color,
            x: 0,
            // Will be set by dagre
            y: 0,
            // Will be set by dagre
            width: Math.max(u, ct.length * 9 + 40),
            layerIndex: g,
            layerId: Ie,
            // Reference to parent layer for layered mode
            group: we,
            // Innermost group for positioning
            groupColorIndex: rt
          };
          t.set(Ke, Ge), y.set(Ke, g), n.get(Ie).nodes.push({
            id: Ke,
            label: ct,
            description: lt,
            icon: ke.icon,
            shape: ke.shape,
            color: ke.color
          }), b.length > 0 && (c.set(Ke, [...b]), b.forEach((dt) => {
            p.has(dt) && p.get(dt).nodes.push(Ke);
          }));
        }), g++, i++;
        continue;
      }
      const ne = [
        { regex: /^(.+?)\s*<->\s*(.+?)(?::\s*(.+))?$/, style: "bidirectional" },
        { regex: /^(.+?)\s*-->\s*(.+?)(?::\s*(.+))?$/, style: "dotted" },
        { regex: /^(.+?)\s*==>\s*(.+?)(?::\s*(.+))?$/, style: "thick" },
        { regex: /^(.+?)\s*->>\s*(.+?)(?::\s*(.+))?$/, style: "async" },
        { regex: /^(.+?)\s*-\.->\s*(.+?)(?::\s*(.+))?$/, style: "dashed" },
        { regex: /^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/, style: "normal" }
      ];
      for (const { regex: re, style: se } of ne) {
        const pe = Y.match(re);
        if (pe) {
          const [, ke, Me, we] = pe, Ie = ke.trim().toLowerCase().replace(/[^a-z0-9]/g, "_"), qe = Me.trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
          r.push({
            id: `e-${r.length}`,
            source: Ie,
            target: qe,
            label: (we == null ? void 0 : we.trim()) || "",
            style: se
          }), se === "bidirectional" && r.push({
            id: `e-${r.length}`,
            source: qe,
            target: Ie,
            label: "",
            style: "normal"
          });
          break;
        }
      }
    }
    const w = t.size, E = r.length, k = w > 8 || E > 10, M = /* @__PURE__ */ new Set();
    if (t.forEach((G) => M.add(G.layerIndex)), M.size <= 2 && w > 4) {
      const G = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map();
      t.forEach((re, se) => {
        G.set(se, 0), Y.set(se, []);
      }), r.forEach((re) => {
        t.has(re.source) && t.has(re.target) && (Y.get(re.source).push(re.target), G.set(re.target, (G.get(re.target) || 0) + 1));
      });
      const ce = /* @__PURE__ */ new Map(), Q = [];
      for (t.forEach((re, se) => {
        G.get(se) === 0 && (ce.set(se, 0), Q.push(se));
      }); Q.length > 0; ) {
        const re = Q.shift(), se = ce.get(re);
        Y.get(re).forEach((pe) => {
          const ke = se + 1;
          (!ce.has(pe) || ce.get(pe) < ke) && ce.set(pe, ke), G.set(pe, G.get(pe) - 1), G.get(pe) === 0 && Q.push(pe);
        });
      }
      const ne = ce.size > 0 ? Math.floor([...ce.values()].reduce((re, se) => re + se, 0) / ce.size) : 0;
      t.forEach((re, se) => {
        ce.has(se) || ce.set(se, ne), re.layerIndex = ce.get(se);
      });
    }
    const I = new Yh.graphlib.Graph();
    I.setGraph({
      rankdir: "TB",
      // Top to bottom
      nodesep: k ? 70 : 50,
      // Horizontal spacing between nodes
      ranksep: k ? 50 : 40,
      // Vertical spacing between layers (reduced for compactness)
      marginx: 40,
      marginy: 30,
      ranker: "network-simplex"
      // Best for complex multi-path graphs
    }), I.setDefaultEdgeLabel(() => ({}));
    const R = /* @__PURE__ */ new Map();
    t.forEach((G, Y) => R.set(Y, 0)), r.forEach((G) => {
      R.has(G.target) && R.set(G.target, R.get(G.target) + 1);
    });
    const $ = [];
    t.forEach((G, Y) => {
      R.get(Y) === 0 && $.push(Y);
    }), t.forEach((G) => {
      I.setNode(G.id, {
        label: G.label,
        width: G.width || u,
        // Use actual node width
        height: f,
        // Use layer index for rank constraint
        rank: G.layerIndex
      });
    });
    const D = /* @__PURE__ */ new Set();
    r.forEach((G) => {
      const Y = t.get(G.source), ce = t.get(G.target);
      if (Y && ce) {
        const Q = $.includes(G.target) && !$.includes(G.source), ne = Y.layerIndex > ce.layerIndex;
        (Q || ne) && D.add(G.id);
      }
    });
    const P = /* @__PURE__ */ new Set();
    r.forEach((G) => {
      const Y = `${G.source}-${G.target}`, ce = `${G.target}-${G.source}`;
      if (!P.has(Y) && !P.has(ce) && t.has(G.source) && t.has(G.target)) {
        const Q = D.has(G.id);
        I.setEdge(G.source, G.target, {
          weight: Q ? 0.5 : 3,
          minlen: Q ? 1 : 2
        }), P.add(Y);
      }
    }), Yh.layout(I), I.nodes().forEach((G) => {
      const Y = t.get(G), ce = I.node(G);
      Y && ce && (Y.x = ce.x, Y.y = ce.y);
    });
    const _ = /* @__PURE__ */ new Set();
    r.forEach((G) => {
      _.add(G.source), _.add(G.target);
    });
    let z = 0, B = 0;
    t.forEach((G) => {
      _.has(G.id) && (z = Math.max(z, G.y + f / 2), B = Math.max(B, G.x + (G.width || u) / 2));
    });
    const j = /* @__PURE__ */ new Map(), X = [];
    if (t.forEach((G) => {
      _.has(G.id) || (G.group ? (j.has(G.group) || j.set(G.group, []), j.get(G.group).push(G)) : X.push(G));
    }), X.length > 0) {
      const G = /* @__PURE__ */ new Map();
      X.forEach((Q) => {
        const ne = Q.layerIndex || 0;
        G.has(ne) || G.set(ne, []), G.get(ne).push(Q);
      });
      const Y = /* @__PURE__ */ new Map();
      t.forEach((Q) => {
        if (_.has(Q.id) && !Q.group) {
          const ne = Q.layerIndex || 0;
          Y.has(ne) || Y.set(ne, Q.y);
        }
      });
      let ce = B + 100;
      G.forEach((Q, ne) => {
        const re = Y.get(ne) || 100 + ne * 150;
        Q.forEach((se, pe) => {
          se.x = ce + pe * ((se.width || u) + 60), se.y = re;
        });
      });
    }
    let te = z + 100;
    const ee = 50;
    [...p.keys()].forEach((G) => {
      const Y = j.get(G);
      if (!Y || Y.length === 0) return;
      const ce = [], Q = [];
      if (p.get(G).nodes.forEach((ne) => {
        const re = t.get(ne);
        re && re.group === G && (_.has(ne) ? ce.push(re) : Q.push(re));
      }), ce.length > 0) {
        let ne = 0, re = 0;
        ce.forEach((se) => {
          ne = Math.max(ne, se.x + (se.width || u) / 2), re += se.y;
        }), re /= ce.length, Q.forEach((se, pe) => {
          se.x = ne + 80 + pe * ((se.width || u) + 60), se.y = re;
        });
      } else {
        const re = f + 40, se = 200;
        Q.forEach((ke, Me) => {
          const we = Math.floor(Me / 3), Ie = Me % 3;
          ke.x = 150 + Ie * se, ke.y = te + we * re;
        });
        const pe = Math.ceil(Q.length / 3);
        te += pe * re + ee + 40;
      }
    });
    const F = [], N = /* @__PURE__ */ new Map(), Z = 30, T = 15, W = (G) => {
      let Y = 0, ce = G;
      for (; ce; ) {
        const Q = p.get(ce);
        if (Q && Q.parent)
          Y++, ce = Q.parent;
        else
          break;
      }
      return Y;
    };
    [...p.keys()].sort((G, Y) => W(Y) - W(G)).forEach((G) => {
      const Y = p.get(G);
      if (!Y || Y.nodes.length === 0) return;
      let ce = 1 / 0, Q = 1 / 0, ne = -1 / 0, re = -1 / 0;
      if (Y.nodes.forEach((se) => {
        const pe = t.get(se);
        if (pe) {
          if (pe.group !== G || (c.get(se) || []).some((qe) => qe !== G && Y.children.includes(qe))) return;
          const we = pe.width || u, Ie = f;
          ce = Math.min(ce, pe.x - we / 2), Q = Math.min(Q, pe.y - Ie / 2), ne = Math.max(ne, pe.x + we / 2), re = Math.max(re, pe.y + Ie / 2);
        }
      }), Y.children.forEach((se) => {
        const pe = N.get(se);
        pe && (ce = Math.min(ce, pe.minX - T), Q = Math.min(Q, pe.minY - T), ne = Math.max(ne, pe.maxX + T), re = Math.max(re, pe.maxY + T));
      }), ce !== 1 / 0) {
        N.set(G, {
          minX: ce - Z,
          minY: Q - Z - 20,
          maxX: ne + Z,
          maxY: re + Z
        });
        const se = N.get(G), pe = m[Y.colorIndex % m.length];
        F.push({
          id: `group-${G.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
          name: G,
          x: se.minX,
          y: se.minY,
          width: se.maxX - se.minX,
          height: se.maxY - se.minY,
          color: pe.bg,
          borderColor: pe.border,
          colorIndex: Y.colorIndex,
          depth: W(G),
          parent: Y.parent
        });
      }
    }), F.sort((G, Y) => G.depth - Y.depth);
    const de = /* @__PURE__ */ new Map();
    F.forEach((G) => {
      const Y = G.parent || "__root__";
      de.has(Y) || de.set(Y, []), de.get(Y).push(G);
    }), de.forEach((G) => {
      G.sort((Y, ce) => Y.y - ce.y);
      for (let Y = 1; Y < G.length; Y++) {
        const ce = G[Y - 1], Q = G[Y], ne = ce.y + ce.height;
        if (Q.y < ne + 20) {
          const re = ne + 20 - Q.y;
          Q.y += re;
          const se = p.get(Q.name);
          se && se.nodes.forEach((pe) => {
            const ke = t.get(pe);
            ke && (ke.y += re);
          });
        }
      }
    });
    const Se = r.length > 0, ze = n.size > 0 && !Se ? "layered" : "classic", De = Array.from(n.values()).sort((G, Y) => G.order - Y.order), ie = [];
    for (let G = 0; G < De.length - 1; G++)
      ie.push({
        fromLayer: De[G].id,
        toLayer: De[G + 1].id,
        label: ""
      });
    return {
      // Classic mode data (backwards compatible)
      nodes: Array.from(t.values()),
      edges: r,
      groups: F,
      // Layered mode data
      title: a,
      subtitle: e,
      layers: De,
      interLayerConnections: ie,
      layoutMode: ze
    };
  },
  flowchart: (o) => {
    const t = /* @__PURE__ */ new Map(), r = [], n = [], i = (p) => {
      p = p.trim();
      let b = "", x = p;
      const C = p.match(/^(.+?):\s+([^:]+)$/);
      C && (x = C[1].trim(), b = C[2].trim());
      const w = x.match(/^\(([^)]+)\)\s*(.*)$/);
      if (w) {
        const E = w[1].trim(), k = w[2].trim();
        return k && E.toLowerCase() === k.toLowerCase() ? { type: "process", label: k, edgeLabel: b } : ["start", "end", "process", "decision", "io", "data", "database", "document"].includes(E.toLowerCase()) ? { type: E.toLowerCase(), label: k || E, edgeLabel: b } : { type: "process", label: k || E, edgeLabel: b };
      }
      return { type: "process", label: x, edgeLabel: b };
    };
    let a = "TB";
    const e = o.match(/^direction:\s*(TB|LR|RL|BT)/im);
    e && (a = e[1].toUpperCase());
    const s = a === "LR" || a === "RL";
    o.split(`
`).forEach((p) => {
      if (p = p.trim(), !p || p.startsWith("#") || p.match(/^direction:/i)) return;
      const b = p.split(/\s*->\s*/);
      b.forEach((x, C) => {
        const { type: w, label: E, edgeLabel: k } = i(x), M = E.toLowerCase().replace(/[^a-z0-9]/g, "_");
        if (t.has(M) || (t.set(M, { id: M, type: w, label: E, x: 0, y: 0 }), n.push(M)), C > 0) {
          const { label: A } = i(b[C - 1]), I = A.toLowerCase().replace(/[^a-z0-9]/g, "_");
          r.push({ id: `e-${r.length}`, source: I, target: M, label: k });
        }
      });
    });
    const h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    r.forEach((p) => {
      h.has(p.source) || h.set(p.source, []), h.get(p.source).push(p.target), d.has(p.target) || d.set(p.target, []), d.get(p.target).push(p.source);
    });
    const u = (p) => {
      const E = Math.min(180, Math.max(100, ((p == null ? void 0 : p.length) || 5) * 8 + 40)), k = Math.floor((E - 20) / 8), M = Math.ceil(((p == null ? void 0 : p.length) || 5) / k), A = Math.max(60, 30 + M * 18);
      return { width: E, height: A };
    };
    t.forEach((p, b) => {
      const x = u(p.label);
      p.width = x.width, p.height = x.height;
    });
    const f = n.filter((p) => !d.has(p) || d.get(p).length === 0), m = /* @__PURE__ */ new Set(), g = [v.purple, v.blue, v.emerald, v.orange, v.pink, v.cyan], y = (p, b, x, C = 0, w = 0) => {
      if (m.has(p)) return;
      const E = t.get(p);
      if (!E) return;
      s ? (E.x = b, E.y = x + C) : (E.x = x + C, E.y = b), E.depth = w, E.color = g[w % g.length], m.add(p);
      const k = h.get(p) || [], M = E.width || 130, A = E.height || 60, I = s ? M + 60 : A + 40, R = s ? 100 : 200;
      if (k.length === 1)
        y(k[0], b + I, x, C, w + 1);
      else if (k.length >= 2) {
        const $ = (k.length - 1) * R;
        k.forEach((D, P) => {
          const _ = -$ / 2 + P * R;
          y(D, b + I, x, _, w + 1);
        });
      }
    };
    if (s) {
      let p = 200;
      f.forEach((b, x) => {
        y(b, 100, p + x * 150, 0, 0);
      });
    } else {
      let p = 400;
      f.forEach((b, x) => {
        y(b, 100, p + x * 250, 0, 0);
      });
    }
    let c = 100;
    return n.forEach((p) => {
      if (!m.has(p)) {
        const b = t.get(p);
        b.x = 700, b.y = c, b.depth = 0, b.color = v.gray, c += s ? 100 : (b.height || 60) + 40, m.add(p);
      }
    }), { nodes: Array.from(t.values()), edges: r, direction: a };
  },
  stateMachine: (o) => {
    const t = /* @__PURE__ */ new Map(), r = [];
    o.split(`
`).forEach((i) => {
      var s;
      if (i = i.trim(), !i || i.startsWith("#")) return;
      const a = i.match(/^\((\w+)\)\s*(\w+)(?::\s*(.+))?/);
      if (a) {
        const h = a[1].toLowerCase(), d = a[2], u = ((s = a[3]) == null ? void 0 : s.trim()) || "";
        t.set(d, {
          id: d,
          label: u || d,
          isInitial: h === "initial",
          isFinal: h === "final",
          isFork: h === "fork",
          isJoin: h === "join",
          isChoice: h === "choice",
          isComposite: h === "composite",
          stateType: h
        });
        return;
      }
      const e = i.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);
      e && (t.has(e[1]) || t.set(e[1], { id: e[1], label: e[1] }), t.has(e[2]) || t.set(e[2], { id: e[2], label: e[2] }), r.push({ from: e[1], to: e[2], event: e[3] || "" }));
    });
    const n = Array.from(t.values());
    return n.forEach((i, a) => {
      const e = 2 * Math.PI / n.length * a - Math.PI / 2;
      i.x = 300 + Math.cos(e) * 150, i.y = 250 + Math.sin(e) * 150;
    }), { states: n, transitions: r };
  },
  userJourney: (o) => {
    if (o.includes("== ") || o.includes("title:") || o.includes("actors:"))
      return a2(o);
    const t = [], r = /* @__PURE__ */ new Map(), n = {
      actor: { color: v.pink, icon: "👤", shape: "circle" },
      user: { color: v.pink, icon: "👤", shape: "circle" },
      page: { color: v.cyan, icon: "📱", shape: "rect" },
      screen: { color: v.cyan, icon: "📱", shape: "rect" },
      action: { color: v.purple, icon: "👆", shape: "rect" },
      form: { color: v.orange, icon: "📝", shape: "rect" },
      email: { color: v.amber, icon: "✉️", shape: "rect" },
      success: { color: v.green, icon: "✅", shape: "rect" },
      error: { color: v.red, icon: "❌", shape: "rect" },
      decision: { color: v.orange, icon: "❓", shape: "diamond" },
      notification: { color: v.red, icon: "🔔", shape: "rect", badge: "New" },
      milestone: { color: v.green, icon: "🎯", shape: "rect" },
      default: { color: v.blue, icon: "📄", shape: "rect" }
    };
    o.split(`
`).forEach((c) => {
      var x, C;
      if (c = c.trim(), !c || c.startsWith("#") || c.toLowerCase().startsWith("title")) return;
      const p = c.match(/^[\[(](\w+)(?::([a-z0-9-]+))?[\])]\s*(.+?)(?:\s*:\s*(.+))?$/i);
      if (p && !c.includes("->")) {
        const w = p[1].toLowerCase(), E = p[2] || null, k = p[3].trim(), M = ((x = p[4]) == null ? void 0 : x.trim()) || "", A = k.toLowerCase().replace(/[^a-z0-9]/g, "_"), I = n[w] || n.default;
        r.has(A) || r.set(A, { id: A, label: k, description: M, type: w, linkedTemplate: E, clickable: !!E, ...I, x: 0, y: 0 });
        return;
      }
      const b = c.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+?)$/);
      if (b) {
        const w = b[1].trim(), E = ((C = b[2]) == null ? void 0 : C.trim()) || "", k = b[3].trim(), M = w.toLowerCase().replace(/[^a-z0-9]/g, "_"), A = k.toLowerCase().replace(/[^a-z0-9]/g, "_");
        r.has(M) || r.set(M, { id: M, label: w, type: "default", ...n.default, x: 0, y: 0 }), r.has(A) || r.set(A, { id: A, label: k, type: "default", ...n.default, x: 0, y: 0 }), t.push({ id: `edge-${t.length}`, source: M, target: A, label: E });
      }
    });
    const i = Array.from(r.values()), a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), s = new Set(t.map((c) => c.target)), h = i.filter((c) => !s.has(c.id)), d = (c, p) => {
      e.has(c) || (e.add(c), a.set(c, Math.max(a.get(c) || 0, p)), t.filter((b) => b.source === c).forEach((b) => d(b.target, p + 1)));
    };
    (h.length ? h : i.slice(0, 1)).forEach((c) => d(c.id, 0)), i.forEach((c) => {
      a.has(c.id) || a.set(c.id, 0);
    });
    const u = /* @__PURE__ */ new Map();
    i.forEach((c) => {
      const p = a.get(c.id) || 0;
      u.has(p) || u.set(p, []), u.get(p).push(c);
    });
    const f = Math.max(...Array.from(u.values()).map((c) => c.length), 1), m = Math.max(...Array.from(a.values()), 0) + 1, g = 220, y = 160;
    for (let c = 0; c <= m - 1; c++) {
      const p = u.get(c) || [], b = p.length * y, x = 150 + (f * y - b) / 2;
      p.forEach((C, w) => {
        C.x = 180 + c * g, C.y = x + w * y;
      });
    }
    return { nodes: i, edges: t };
  },
  timeline: (o) => {
    const t = [];
    let r = 100;
    return o.split(`
`).forEach((n, i) => {
      var h, d;
      if (n = n.trim(), !n || n.startsWith("#")) return;
      const a = n.match(/^\[(.+?)\]\s*(.+?)(?:\|(.+))?$/) || [null, "", n, ""];
      let e = a[2].trim();
      const s = e.startsWith("*");
      s && (e = e.substring(1).trim()), t.push({ id: `timeline-${i}`, date: ((h = a[1]) == null ? void 0 : h.trim()) || "", label: e, description: ((d = a[3]) == null ? void 0 : d.trim()) || "", x: r, y: 200, isMilestone: s }), r += 220;
    }), t;
  },
  sequence: (o) => {
    const t = [], r = [], n = [], i = [];
    let a = 80, e = [], s = 0;
    return o.split(`
`).forEach((h) => {
      if (h = h.trim(), !h || h.startsWith("#")) return;
      const d = h.match(/^participants?\s+(.+)/i);
      if (d) {
        d[1].split(",").forEach((x) => {
          const C = x.trim(), w = C.toLowerCase().replace(/\s/g, "_");
          t.find((E) => E.id === w) || (t.push({ id: w, label: C, x: a }), a += 160);
        });
        return;
      }
      const u = h.match(/^(loop|alt|opt|par|critical|break|rect)\s+(.+)/i);
      if (u) {
        e.push({
          type: u[1].toLowerCase(),
          label: u[2],
          startIndex: s,
          sections: [{ label: u[2], startIndex: s }]
        });
        return;
      }
      const f = h.match(/^else\s*(.*)/i);
      if (f && e.length > 0) {
        const x = e[e.length - 1];
        x.type === "alt" && x.sections.push({ label: f[1] || "else", startIndex: s });
        return;
      }
      const m = h.match(/^and\s+(.+)/i);
      if (m && e.length > 0) {
        const x = e[e.length - 1];
        x.type === "par" && x.sections.push({ label: m[1], startIndex: s });
        return;
      }
      const g = h.match(/^option\s+(.+)/i);
      if (g && e.length > 0) {
        const x = e[e.length - 1];
        x.type === "critical" && x.sections.push({ label: g[1], startIndex: s });
        return;
      }
      const y = h.match(/^(activate|deactivate)\s+(\w+)/i);
      if (y) {
        const x = y[1].toLowerCase(), C = y[2].toLowerCase().replace(/\s/g, "_");
        r.push({
          type: x,
          participant: C,
          index: s
        });
        return;
      }
      if (h.toLowerCase() === "end") {
        if (e.length > 0) {
          const x = e.pop();
          x.endIndex = s, n.push(x);
        }
        return;
      }
      const c = h.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);
      if (c) {
        const x = c[1].toLowerCase(), C = c[2], w = C.toLowerCase().replace(/\s/g, "_");
        t.find((E) => E.id === w) || (t.push({ id: w, label: C, x: a }), a += 160), i.push({
          position: x,
          participantId: w,
          text: c[3],
          atMessageIndex: s
        });
        return;
      }
      const p = h.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);
      if (p) {
        const C = p[1].split(",").map((w) => w.trim()).map((w) => {
          const E = w.toLowerCase().replace(/\s/g, "_");
          return t.find((k) => k.id === E) || (t.push({ id: E, label: w, x: a }), a += 160), E;
        });
        i.push({
          position: "over",
          participantIds: C,
          text: p[2],
          atMessageIndex: s
        });
        return;
      }
      const b = h.match(/^(\w+)\s*(->|-->|-x|--x|-\)|--\))\s*(\w+)(?::\s*(.+))?/);
      if (b) {
        const x = b[1].toLowerCase().replace(/\s/g, "_"), C = b[3].toLowerCase().replace(/\s/g, "_");
        t.find((w) => w.id === x) || (t.push({ id: x, label: b[1], x: a }), a += 160), t.find((w) => w.id === C) || (t.push({ id: C, label: b[3], x: a }), a += 160), r.push({
          from: x,
          to: C,
          label: b[4] || "",
          isReturn: b[2] === "-->",
          index: s
        }), s++;
      }
    }), { participants: t, messages: r, fragments: n, notes: i };
  },
  orgChart: (o) => {
    const t = [], r = [], n = [{ id: null, indent: -1 }];
    return o.split(`
`).forEach((i, a) => {
      var u;
      if (!i.trim()) return;
      const e = i.trimStart(), s = i.length - e.length, h = e.match(/^(.+?)(?:\s*\[(.+?)\])?$/);
      for (; n.length > 1 && n[n.length - 1].indent >= s; ) n.pop();
      const d = { id: `org-${a}`, label: h[1].trim(), title: ((u = h[2]) == null ? void 0 : u.trim()) || "", children: [], parent: n[n.length - 1].id };
      if (t.push(d), n[n.length - 1].id) {
        r.push({ id: `oe-${a}`, source: n[n.length - 1].id, target: d.id });
        const f = t.find((m) => m.id === n[n.length - 1].id);
        f && f.children.push(d.id);
      }
      n.push({ id: d.id, indent: s });
    }), { nodes: t, edges: r };
  },
  network: (o) => {
    const t = /* @__PURE__ */ new Map(), r = [];
    return o.split(`
`).forEach((n) => {
      var e;
      if (n = n.trim(), !n || n.startsWith("#")) return;
      const i = n.match(/^\[(\w+)\]\s*(.+?)(?:\s*\((.+?)\))?$/);
      if (i) {
        const s = i[2].trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.set(s, { id: s, type: i[1].toLowerCase(), label: i[2].trim(), ip: ((e = i[3]) == null ? void 0 : e.trim()) || "" });
        return;
      }
      const a = n.match(/^(.+?)\s*--\s*(.+?)(?:\s*:\s*(.+))?$/);
      a && r.push({ id: `conn-${r.length}`, source: a[1].trim().toLowerCase().replace(/[^a-z0-9]/g, "_"), target: a[2].trim().toLowerCase().replace(/[^a-z0-9]/g, "_"), protocol: a[3] || "" });
    }), { devices: Array.from(t.values()), connections: r };
  },
  gantt: (o) => {
    const t = [];
    return o.split(`
`).forEach((r, n) => {
      if (r = r.trim(), !r || r.startsWith("#")) return;
      const i = r.split(",").map((a) => a.trim());
      i.length >= 2 && t.push({ id: `task-${n}`, name: i[0], start: parseInt(i[1]) || n * 2, duration: parseInt(i[2]) || 2, progress: parseInt(i[3]) || 0 });
    }), t;
  },
  deployment: (o) => {
    const t = [], r = [{ id: null, indent: -1 }];
    let n = 0;
    return o.split(`
`).forEach((i) => {
      if (!i.trim()) return;
      const a = i.trimStart(), e = i.length - a.length, s = a.match(/^\[(\w+)\]\s*(.+)$/) || [null, "component", a];
      for (; r.length > 1 && r[r.length - 1].indent >= e; ) r.pop();
      const h = { id: `deploy-${n++}`, label: (s[2] || a).trim(), type: (s[1] || "component").toLowerCase(), parentId: r[r.length - 1].id, indent: e };
      t.push(h), r.push({ id: h.id, indent: e });
    }), { nodes: t };
  },
  pie: (o) => {
    const t = [];
    return o.split(`
`).forEach((r) => {
      if (r = r.trim(), !r || r.startsWith("#") || r.toLowerCase().startsWith("title")) return;
      const n = r.match(/^"?([^":,]+)"?\s*[:,]\s*(\d+(?:\.\d+)?)/);
      n && t.push({ label: n[1].trim(), value: parseFloat(n[2]) });
    }), t;
  },
  quadrant: (o) => {
    const t = { title: "", xLabel: "", yLabel: "", quadrants: ["", "", "", ""] }, r = [];
    return o.split(`
`).forEach((n) => {
      if (n = n.trim(), !n || n.startsWith("#")) return;
      if (n.startsWith("title:")) {
        t.title = n.replace("title:", "").trim();
        return;
      }
      if (n.startsWith("x-axis:")) {
        t.xLabel = n.replace("x-axis:", "").trim();
        return;
      }
      if (n.startsWith("y-axis:")) {
        t.yLabel = n.replace("y-axis:", "").trim();
        return;
      }
      const i = n.match(/^quadrant-(\d):\s*(.+)$/);
      if (i) {
        t.quadrants[parseInt(i[1]) - 1] = i[2];
        return;
      }
      const a = n.match(/^(.+?):\s*\[(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)\]$/);
      a && r.push({ id: `point-${r.length}`, label: a[1].trim(), x: parseFloat(a[2]), y: parseFloat(a[3]) });
    }), { config: t, points: r };
  },
  git: (o) => {
    const t = [], r = /* @__PURE__ */ new Map();
    let n = "main", i = 0;
    return r.set("main", { name: "main", y: 100, parentBranch: null, branchPoint: 0 }), o.split(`
`).forEach((a) => {
      var e;
      if (a = a.trim(), !(!a || a.startsWith("#"))) {
        if (a.startsWith("branch ")) {
          const s = a.replace("branch ", "").trim();
          r.has(s) || r.set(s, { name: s, y: 100 + r.size * 80, parentBranch: n, branchPoint: i }), n = s;
          return;
        }
        if (a.startsWith("checkout ")) {
          n = a.replace("checkout ", "").trim();
          return;
        }
        if (a.startsWith("commit") || a.startsWith("merge")) {
          const s = a.startsWith("merge"), h = a.match(/"([^"]+)"/);
          let d = null;
          if (s) {
            const u = a.match(/merge\s+(\w+)/i);
            u && (d = u[1]);
          }
          t.push({ id: `commit-${i}`, label: h ? h[1] : `C${i}`, branch: n, x: 120 + i * 100, y: ((e = r.get(n)) == null ? void 0 : e.y) || 100, isMerge: s, mergeFrom: d, index: i }), i++;
        }
      }
    }), { commits: t, branches: Array.from(r.values()) };
  },
  wireframe: (o) => {
    const t = [];
    let r = 20, n = 20, i = [], a = !1, e = 0, s = 0;
    const h = /sidebar|aside|slip|cart|panel|summary/i.test(o) && /<\s*(sidebar|aside|slip|cart|panel|summary)/i.test(o), d = h ? 480 : 620, u = 200, f = h ? d + u + 30 : d + 40, m = () => a ? d + 30 : i.length > 0 ? i[i.length - 1].x + 15 : n, g = () => a ? u : i.length > 0 ? i[i.length - 1].width - 30 : d;
    for (o.split(`
`).forEach((y, c) => {
      var k, M, A, I, R, $, D, P, _, z, B, j, X, te, ee, ae, F, N, Z;
      const p = y.trim();
      if (!p || p.startsWith("//") || p.startsWith("#") && !p.startsWith("# ") && !p.startsWith("## ") && !p.startsWith("### ")) return;
      const b = m(), x = g();
      if (p.match(/^\{(.+)\}$/) && !p.match(/\{(badge|tag):/i)) {
        t.push({ id: `wf-${c}`, type: "window", label: p.slice(1, -1), x: b, y: r, width: f, height: 36 }), r += 46;
        return;
      }
      if (p.match(/^<(.+)>$/) && !p.includes("/")) {
        const T = p.slice(1, -1), W = /sidebar|aside|slip|cart|panel|summary/i.test(T);
        W && !a && (a = !0, s = r, e = 145, r = e);
        const O = T === "card" || /^(sidebar|aside|panel|slip|summary|cart)$/i.test(T), de = { id: `wf-${c}`, type: "card", label: O ? "" : T, x: b, y: r, width: x, startY: r, children: [], isSidebar: W };
        t.push(de), i.push(de), r += O ? 15 : 45;
        return;
      }
      if (p.match(/^<\/(.*)>$/) || p === "</>") {
        if (i.length > 0) {
          const T = i.pop();
          T.height = r - T.startY + 20, T.isSidebar && (a = !1, r = Math.max(r, s));
        }
        r += 25;
        return;
      }
      if (p.match(/^\{\{(.+)\}\}$/)) {
        t.push({ id: `wf-${c}`, type: "modal", label: p.slice(2, -2), x: b + 20, y: r, width: x - 40, height: 200 }), r += 220;
        return;
      }
      if (p.match(/^\[\[(.+)\]\]$/)) {
        const T = p.slice(2, -2).split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "navbar", items: T, x: b, y: r, width: f, height: 44 }), r += 54;
        return;
      }
      if (p.match(/^\(\((.+)\)\)$/)) {
        const T = p.slice(2, -2).split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "tabs", items: T, activeIndex: 0, x: b, y: r, width: x, height: 40 }), r += 50;
        return;
      }
      if (p.startsWith(">>")) {
        const T = p.slice(2).split(">").map((W) => W.trim()).filter((W) => W);
        t.push({ id: `wf-${c}`, type: "breadcrumbs", items: T, x: b, y: r, width: x }), r += 35;
        return;
      }
      const C = p.match(/\[[^\]]+\]/g);
      if (C && C.length > 1) {
        const T = C.map((W) => {
          const O = W.slice(1, -1).trim();
          return O.startsWith("🔍") || O.toLowerCase().startsWith("search") ? { type: "search", label: O.replace(/^🔍\s*/, "").replace(/^search:?\s*/i, "").replace(/_/g, " ").trim() || "Search..." } : O.startsWith("v ") || O.toLowerCase().startsWith("select:") ? { type: "dropdown", label: O.replace(/^v\s+/, "").replace(/^select:\s*/i, "") } : O.startsWith("+") || O.startsWith("+ ") ? { type: "button", label: O, variant: "primary" } : { type: "button", label: O, variant: "secondary" };
        });
        t.push({ id: `wf-${c}`, type: "toolbar", items: T, x: b, y: r, width: x, height: 44 }), r += 54;
        return;
      }
      if (p.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/) || p.match(/^\[search:?\s*(.*)\]$/i)) {
        let T = ((k = p.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/)) == null ? void 0 : k[1]) || ((M = p.match(/^\[search:?\s*(.*)\]$/i)) == null ? void 0 : M[1]) || "Search...";
        T = T.replace(/^_+|_+$/g, "").replace(/_+/g, " ").trim() || "Search...", t.push({ id: `wf-${c}`, type: "search", label: T, x: b, y: r, width: x, height: 40 }), r += 50;
        return;
      }
      if (p.match(/^\[v\s+(.+)\]$/) || p.match(/^\[select:\s*(.+)\]$/i)) {
        const T = ((A = p.match(/^\[v\s+(.+)\]$/)) == null ? void 0 : A[1]) || ((I = p.match(/^\[select:\s*(.+)\]$/i)) == null ? void 0 : I[1]);
        t.push({ id: `wf-${c}`, type: "dropdown", label: T, x: b, y: r, width: Math.min(200, x), height: 36 }), r += 46;
        return;
      }
      if (p.match(/^\[([oO])\]\s*(.+)$/)) {
        const T = p.match(/^\[([oO])\]\s*(.+)$/);
        t.push({ id: `wf-${c}`, type: "toggle", enabled: T[1] === "O", label: T[2], x: b, y: r }), r += 40;
        return;
      }
      if (p.match(/^\(([oO\*\s])\)\s*(.+)$/)) {
        const T = p.match(/^\(([oO\*\s])\)\s*(.+)$/);
        t.push({ id: `wf-${c}`, type: "radio", selected: T[1] === "O" || T[1] === "*", label: T[2], x: b, y: r }), r += 35;
        return;
      }
      if (p.match(/^\[=+o-+\]$/) || p.match(/^\[slider:\s*(\d+)%?\]$/i)) {
        let T = 50;
        const W = p.match(/^\[slider:\s*(\d+)%?\]$/i);
        if (W) T = parseInt(W[1]);
        else {
          const O = p.match(/^\[(=*)o(-*)\]$/);
          O && (T = Math.round(O[1].length / (O[1].length + O[2].length) * 100));
        }
        t.push({ id: `wf-${c}`, type: "slider", value: T, x: b, y: r, width: Math.min(200, x) }), r += 45;
        return;
      }
      if (p.match(/^\[\|+\.+\]/) || p.match(/^\[=+-+\]/) || p.match(/^\[progress:\s*(\d+)%?\]/i)) {
        let T = 50, W = "";
        const O = p.match(/^\[progress:\s*(\d+)%?\](.*)$/i);
        if (O)
          T = parseInt(O[1]), W = ((R = O[2]) == null ? void 0 : R.trim()) || "";
        else {
          const de = p.match(/^\[(\|+)(\.+)\]\s*(.*)$/);
          de && (T = Math.round(de[1].length / (de[1].length + de[2].length) * 100), W = de[3] || "");
          const Se = p.match(/^\[(=+)(-+)\]\s*(.*)$/);
          Se && (T = Math.round(Se[1].length / (Se[1].length + Se[2].length) * 100), W = Se[3] || "");
        }
        t.push({ id: `wf-${c}`, type: "progress", value: T, label: W, x: b, y: r, width: x - 20 }), r += 35;
        return;
      }
      if (p.match(/^\(@+\)$/) || p.match(/^\(@(.+)\)$/)) {
        if (p.match(/^\(@+\)$/)) {
          const W = p.length - 2;
          t.push({ id: `wf-${c}`, type: "avatar-group", count: W, x: b, y: r });
        } else {
          const W = (($ = p.match(/^\(@(.+)\)$/)) == null ? void 0 : $[1]) || "";
          t.push({ id: `wf-${c}`, type: "avatar", label: W, x: b, y: r });
        }
        r += 55;
        return;
      }
      if (p.match(/^\[img[^\]]*\](\s+\[img[^\]]*\])+$/i)) {
        const T = p.match(/\[img[^\]]*\]/gi) || [], W = T.length, O = Math.floor((x - (W - 1) * 8) / W);
        T.forEach((de, Se) => {
          const fe = de.match(/(\d+):(\d+)/), ze = fe ? parseInt(fe[1]) / parseInt(fe[2]) : 1, De = Math.min(Math.round(O / ze), 100);
          t.push({ id: `wf-${c}-${Se}`, type: "image", label: "", x: b + Se * (O + 8), y: r, width: O, height: De });
        }), r += 115;
        return;
      }
      const w = p.match(/\{(badge|tag):([^}]+)\}/gi);
      if (w && w.length > 0) {
        const T = w.map((W) => {
          const de = W.match(/\{(badge|tag):([^}]+)\}/i)[2].trim(), Se = de.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i), fe = Se ? Se[1].toLowerCase() : null, ze = Se ? Se[2] : de;
          return { variant: fe, label: ze };
        });
        t.push({ id: `wf-${c}`, type: "badge-group", badges: T, x: b, y: r }), r += 35;
        return;
      }
      if (p.match(/^\[img[:\s]?.*\]$/i)) {
        const T = ((D = p.match(/^\[img:\s*(.+)\]$/i)) == null ? void 0 : D[1]) || "", W = p.match(/(\d+):(\d+)/), O = W ? parseInt(W[1]) / parseInt(W[2]) : 16 / 9, de = Math.round(x / O);
        t.push({ id: `wf-${c}`, type: "image", label: T, x: b, y: r, width: x, height: Math.min(de, 200) }), r += Math.min(de, 200) + 15;
        return;
      }
      if (p.match(/^\[video[:\s]?.*\]$/i)) {
        const T = ((P = p.match(/^\[video:\s*(.+)\]$/i)) == null ? void 0 : P[1]) || "";
        t.push({ id: `wf-${c}`, type: "video", label: T, x: b, y: r, width: x, height: 180 }), r += 195;
        return;
      }
      if (p.match(/^\[map[:\s]?.*\]$/i)) {
        const T = ((_ = p.match(/^\[map:\s*(.+)\]$/i)) == null ? void 0 : _[1]) || "";
        t.push({ id: `wf-${c}`, type: "map", label: T, x: b, y: r, width: x, height: 160 }), r += 175;
        return;
      }
      if (p.match(/^\[chart[:\s]?.*\]$/i)) {
        const T = ((z = p.match(/^\[chart:\s*(.+)\]$/i)) == null ? void 0 : z[1]) || "bar";
        t.push({ id: `wf-${c}`, type: "chart", chartType: T, x: b, y: r, width: x, height: 150 }), r += 165;
        return;
      }
      if (p.match(/^\[calendar\]$/i)) {
        t.push({ id: `wf-${c}`, type: "calendar", x: b, y: r, width: Math.min(280, x), height: 220 }), r += 235;
        return;
      }
      if (p.match(/^\|.+\|$/)) {
        const T = p.slice(1, -1).split("|").map((O) => O.trim()), W = !t.some((O) => O.type === "table-row" && O.y === r - 36);
        t.push({ id: `wf-${c}`, type: "table-row", cells: T, isHeader: W, x: b, y: r, width: x, height: 36 }), r += 36;
        return;
      }
      if (p.match(/^[-\*•]\s+(.+)$/)) {
        const T = p.match(/^[-\*•]\s+(.+)$/)[1];
        t.push({ id: `wf-${c}`, type: "list-item", label: T, x: b, y: r }), r += 32;
        return;
      }
      if (p.match(/^(\d+)[.)]\s+(.+)$/)) {
        const T = p.match(/^(\d+)[.)]\s+(.+)$/);
        t.push({ id: `wf-${c}`, type: "list-item-numbered", number: T[1], label: T[2], x: b, y: r }), r += 32;
        return;
      }
      if (p.match(/^\{(\w+):?(.*)?\}$/) && !p.match(/^\{.{15,}\}$/)) {
        const T = p.match(/^\{(\w+):?(.*)?\}$/), W = T[1].toLowerCase(), O = T[2] || T[1];
        if (["badge", "tag", "success", "warning", "error", "info", "new", "beta", "pro"].includes(W) || T[2]) {
          t.push({ id: `wf-${c}`, type: "badge", variant: W, label: O, x: b, y: r }), r += 35;
          return;
        }
      }
      if (p.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/)) {
        const T = p.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/), W = { "!": "error", i: "info", I: "info", "✓": "success", "✗": "error", "⚠": "warning" }[T[1]] || "info";
        t.push({ id: `wf-${c}`, type: "alert", variant: W, label: T[2], x: b, y: r, width: x }), r += 55;
        return;
      }
      if (p.match(/^\(\d+\)(---\(\d+\))+$/) || p.match(/^\[step:\s*(\d+)\/(\d+)\]$/i)) {
        let T = 1, W = 3;
        const O = p.match(/^\[step:\s*(\d+)\/(\d+)\]$/i);
        O ? (T = parseInt(O[1]), W = parseInt(O[2])) : (W = p.match(/\((\d+)\)/g).length, T = 1), t.push({ id: `wf-${c}`, type: "stepper", current: T, total: W, x: b, y: r, width: x }), r += 50;
        return;
      }
      if (p.match(/^\[<.*>\]$/) || p.match(/^\[page:\s*(\d+)\/(\d+)\]$/i)) {
        let T = 1, W = 5;
        const O = p.match(/^\[page:\s*(\d+)\/(\d+)\]$/i);
        O && (T = parseInt(O[1]), W = parseInt(O[2])), t.push({ id: `wf-${c}`, type: "pagination", current: T, total: W, x: b, y: r, width: x }), r += 45;
        return;
      }
      if (p === "[~~~]" || p.toLowerCase() === "[skeleton]") {
        t.push({ id: `wf-${c}`, type: "skeleton", x: b, y: r, width: x, height: 20 }), r += 30;
        return;
      }
      if (p.match(/^\["""\s*(.*)\]$/) || p.toLowerCase() === "[textarea]") {
        const T = ((B = p.match(/^\["""\s*(.*)\]$/)) == null ? void 0 : B[1]) || "";
        t.push({ id: `wf-${c}`, type: "textarea", label: T, x: b, y: r, width: x, height: 80 }), r += 95;
        return;
      }
      if (p.match(/^\[~(.+)~\]$/)) {
        t.push({ id: `wf-${c}`, type: "button", variant: "secondary", label: p.match(/^\[~(.+)~\]$/)[1], x: b, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[--(.+)--\]$/)) {
        t.push({ id: `wf-${c}`, type: "button", variant: "ghost", label: p.match(/^\[--(.+)--\]$/)[1], x: b, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[!!(.+)!!\]$/)) {
        t.push({ id: `wf-${c}`, type: "button", variant: "danger", label: p.match(/^\[!!(.+)!!\]$/)[1], x: b, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[icon:(\w+)\]$/i)) {
        const T = p.match(/^\[icon:(\w+)\]$/i)[1];
        t.push({ id: `wf-${c}`, type: "icon-button", icon: T, x: b, y: r }), r += 45;
        return;
      }
      if (p.match(/^---\s*(.+)\s*---$/) || p.match(/^===\s*(.+)\s*===$/)) {
        const T = p.match(/^[-=]{3}\s*(.+)\s*[-=]{3}$/)[1];
        t.push({ id: `wf-${c}`, type: "divider-label", label: T, x: b, y: r, width: x }), r += 30;
        return;
      }
      if (p.match(/^\[[\*★☆]+\]$/)) {
        const T = p.slice(1, -1), W = (T.match(/[\*★]/g) || []).length, O = T.length;
        t.push({ id: `wf-${c}`, type: "rating", filled: W, total: O, x: b, y: r }), r += 35;
        return;
      }
      if (p.match(/^(<\w+>\s*)+$/)) {
        const T = p.match(/<(\w+)>/g).map((W) => W.slice(1, -1));
        t.push({ id: `wf-${c}`, type: "chip-group", tags: T, x: b, y: r }), r += 40;
        return;
      }
      if (p === "[?]" || p === "(?)") {
        t.push({ id: `wf-${c}`, type: "tooltip", x: b, y: r }), r += 30;
        return;
      }
      if (p.match(/^\[.+\](\s+\[.+\])+$/) && !p.includes("|")) {
        const T = p.match(/\[([^\]]+)\]/g).map((W) => W.slice(1, -1));
        t.push({ id: `wf-${c}`, type: "button-row", buttons: T, x: b, y: r, width: x }), r += 50;
        return;
      }
      if (p.match(/^@\w+\s+.+/) || p.match(/^@\w+:\s*.+/)) {
        const T = p.match(/^@(\w+):?\s*(.+)$/);
        if (T) {
          t.push({ id: `wf-${c}`, type: "feed-item", username: T[1], text: T[2], x: b, y: r, width: x }), r += 38;
          return;
        }
      }
      if (p.match(/^[🏆💰🎉🔥⭐]\s*@\w+/)) {
        const T = p.match(/^([🏆💰🎉🔥⭐])\s*@(\w+)\s*(.+)$/);
        if (T) {
          t.push({ id: `wf-${c}`, type: "win-notification", emoji: T[1], username: T[2], text: T[3], x: b, y: r, width: x }), r += 44;
          return;
        }
      }
      if (p.match(/^[❤️💬🔄💾🎯👍👎].+[❤️💬🔄💾🎯👍👎]/)) {
        t.push({ id: `wf-${c}`, type: "social-stats", text: p, x: b, y: r, width: x }), r += 40;
        return;
      }
      if (p.match(/^_{3,}$/)) {
        r += 20;
        return;
      }
      if (p.match(/^\[hero:\s*(.+)\]$/i)) {
        const T = p.match(/^\[hero:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "hero", title: T[0], subtitle: T[1] || "", cta: T[2] || "Get Started", x: b, y: r, width: x, height: 280 }), r += 300;
        return;
      }
      if (p.match(/^\[pricing:\s*(.+)\]$/i)) {
        const T = p.match(/^\[pricing:\s*(.+)\]$/i)[1].split("|").map((O) => O.trim()), W = T[2] ? T[2].split(",").map((O) => O.trim()) : [];
        t.push({ id: `wf-${c}`, type: "pricing-card", plan: T[0], price: T[1] || "$0", features: W, cta: T[3] || "Choose Plan", x: b, y: r, width: Math.min(280, x), height: 320 }), r += 340;
        return;
      }
      if (p.match(/^\[feature:\s*(.+)\]$/i)) {
        const T = p.match(/^\[feature:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "feature-card", icon: T[0] || "✨", title: T[1] || "Feature", description: T[2] || "", x: b, y: r, width: Math.min(300, x), height: 160 }), r += 180;
        return;
      }
      if (p.match(/^\[stat:\s*(.+)\]$/i)) {
        const T = p.match(/^\[stat:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "stat-widget", value: T[0], label: T[1] || "", trend: T[2] || "", x: b, y: r, width: Math.min(200, x), height: 140 }), r += 160;
        return;
      }
      if (p.match(/^\[login-form[:\s]*(.*)?\]$/i)) {
        const T = ((j = p.match(/^\[login-form:\s*(.+)\]$/i)) == null ? void 0 : j[1]) || "Sign In";
        t.push({ id: `wf-${c}`, type: "login-form", title: T, x: b, y: r, width: Math.min(360, x), height: 420 }), r += 440;
        return;
      }
      if (p.match(/^\[signup-form[:\s]*(.*)?\]$/i)) {
        const T = ((X = p.match(/^\[signup-form:\s*(.+)\]$/i)) == null ? void 0 : X[1]) || "Create Account";
        t.push({ id: `wf-${c}`, type: "signup-form", title: T, x: b, y: r, width: Math.min(360, x), height: 480 }), r += 500;
        return;
      }
      if (p.match(/^\[widget:\s*(.+)\]$/i)) {
        const T = p.match(/^\[widget:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "dashboard-widget", title: T[0], value: T[1] || "", icon: T[2] || "📊", x: b, y: r, width: Math.min(200, x), height: 120 }), r += 140;
        return;
      }
      if (p.match(/^\[bottom-nav:\s*(.+)\]$/i)) {
        const T = p.match(/^\[bottom-nav:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "bottom-nav", items: T, x: b, y: r, width: x, height: 64 }), r += 80;
        return;
      }
      if (p.match(/^\[app-bar:\s*(.+)\]$/i)) {
        const T = p.match(/^\[app-bar:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "app-bar", title: T[0], actions: T.slice(1), x: b, y: r, width: x, height: 56 }), r += 70;
        return;
      }
      if (p.match(/^\[fab:\s*(.+)\]$/i)) {
        const T = p.match(/^\[fab:\s*(.+)\]$/i)[1];
        t.push({ id: `wf-${c}`, type: "fab", icon: T, x: b + x - 70, y: r, width: 56, height: 56 }), r += 70;
        return;
      }
      if (p.match(/^\[toast:\s*(.+)\]$/i)) {
        const T = p.match(/^\[toast:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "toast", message: T[0], variant: T[1] || "info", x: b, y: r, width: Math.min(400, x), height: 56 }), r += 70;
        return;
      }
      if (p.match(/^\[empty:\s*(.+)\]$/i)) {
        const T = p.match(/^\[empty:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "empty-state", title: T[0], description: T[1] || "", cta: T[2] || "", x: b, y: r, width: x, height: 240 }), r += 260;
        return;
      }
      if (p.match(/^\[error:\s*(.+)\]$/i)) {
        const T = p.match(/^\[error:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "error-state", title: T[0], description: T[1] || "", cta: T[2] || "Retry", x: b, y: r, width: x, height: 240 }), r += 260;
        return;
      }
      if (p.match(/^\[loading[:\s]*(.*)?\]$/i)) {
        const T = ((te = p.match(/^\[loading:\s*(.+)\]$/i)) == null ? void 0 : te[1]) || "Loading...";
        t.push({ id: `wf-${c}`, type: "loading-state", text: T, x: b, y: r, width: x, height: 120 }), r += 140;
        return;
      }
      if (p.match(/^\[testimonial:\s*(.+)\]$/i)) {
        const T = p.match(/^\[testimonial:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "testimonial", quote: (ee = T[0]) == null ? void 0 : ee.replace(/^["']|["']$/g, ""), name: T[1] || "John Doe", title: T[2] || "", x: b, y: r, width: Math.min(400, x), height: 200 }), r += 220;
        return;
      }
      if (p.match(/^\[footer:\s*(.+)\]$/i)) {
        const T = p.match(/^\[footer:\s*(.+)\]$/i)[1], W = T.includes("::") ? T.split("::").map((O) => O.split("|").map((de) => de.trim())) : [T.split("|").map((O) => O.trim())];
        t.push({ id: `wf-${c}`, type: "footer", sections: W, copyright: "", x: b, y: r, width: x, height: 140 }), r += 160;
        return;
      }
      if (p.match(/^\[social:\s*(.+)\]$/i)) {
        const T = p.match(/^\[social:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "social-links", links: T, x: b, y: r, width: x, height: 48 }), r += 60;
        return;
      }
      if (p.match(/^\[cta:\s*(.+)\]$/i)) {
        const T = p.match(/^\[cta:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "cta-section", title: T[0], description: T[1] || "", cta: T[2] || "Get Started", x: b, y: r, width: x, height: 180 }), r += 200;
        return;
      }
      if (p.match(/^\[profile:\s*(.+)\]$/i)) {
        const T = p.match(/^\[profile:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "profile-card", name: T[0], username: T[1] || "", bio: T[2] || "", x: b, y: r, width: Math.min(300, x), height: 280 }), r += 300;
        return;
      }
      if (p.match(/^\[activity:\s*(.+)\]$/i)) {
        const T = p.match(/^\[activity:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "activity-item", text: T[0], time: T[1] || "Just now", x: b, y: r, width: x, height: 60 }), r += 70;
        return;
      }
      if (p.match(/^\[comment:\s*(.+)\]$/i)) {
        const T = p.match(/^\[comment:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "comment", username: T[0], text: T[1] || "", time: T[2] || "", x: b, y: r, width: x, height: 100 }), r += 115;
        return;
      }
      if (p.match(/^\[code[:\s]*(.*)?\]$/i)) {
        const T = ((ae = p.match(/^\[code:\s*(.+)\]$/i)) == null ? void 0 : ae[1]) || "javascript";
        t.push({ id: `wf-${c}`, type: "code-block", language: T, x: b, y: r, width: x, height: 160 }), r += 180;
        return;
      }
      if (p.match(/^\[upload[:\s]*(.*)?\]$/i)) {
        const T = ((F = p.match(/^\[upload:\s*(.+)\]$/i)) == null ? void 0 : F[1]) || "Drag and drop files here";
        t.push({ id: `wf-${c}`, type: "upload", label: T, x: b, y: r, width: x, height: 160 }), r += 180;
        return;
      }
      if (p.match(/^\[accordion:\s*(.+)\]$/i)) {
        const T = p.match(/^\[accordion:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim());
        t.push({ id: `wf-${c}`, type: "accordion", items: T, x: b, y: r, width: x, height: 60 + T.length * 50 }), r += 80 + T.length * 50;
        return;
      }
      if (p.match(/^\[data-table:\s*(\d+)?\s*rows?\]$/i)) {
        const T = parseInt(((N = p.match(/^\[data-table:\s*(\d+)/i)) == null ? void 0 : N[1]) || "3");
        t.push({ id: `wf-${c}`, type: "data-table", rows: T, x: b, y: r, width: x, height: 52 + T * 52 }), r += 72 + T * 52;
        return;
      }
      if (p.match(/^\[(user|bot|assistant|chatgpt|ai|me|you|system):\s*(.+)\]$/i)) {
        const T = p.match(/^\[(\w+):\s*(.+)\]$/i), W = T[1], O = T[2], de = /user|me|you/i.test(W);
        t.push({ id: `wf-${c}`, type: "chat-message", sender: W, message: O, isUser: de, x: b, y: r, width: x }), r += 60;
        return;
      }
      if (p.match(/^\[([^\]:]+)\]$/) && !p.match(/^\[_{2,}\]$/) && !p.match(/^\[(x| )\]/i) && !p.match(/^\[v\s/)) {
        t.push({ id: `wf-${c}`, type: "button", variant: "primary", label: p.slice(1, -1), x: b, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[_{2,}\]$/) || p.match(/^"(.+)"$/)) {
        t.push({ id: `wf-${c}`, type: "input", label: ((Z = p.match(/^"(.+)"$/)) == null ? void 0 : Z[1]) || "", x: b, y: r, width: x, height: 36 }), r += 48;
        return;
      }
      const E = p.match(/^\[(x| )\]\s*(.+)$/i);
      if (E) {
        t.push({ id: `wf-${c}`, type: "checkbox", checked: E[1].toLowerCase() === "x", label: E[2], x: b, y: r }), r += 35;
        return;
      }
      if (p === "---" || p === "===") {
        t.push({ id: `wf-${c}`, type: "separator", x: b, y: r, width: x, height: 2 }), r += 15;
        return;
      }
      if (p) {
        const T = p.startsWith("# "), W = p.startsWith("## "), O = p.startsWith("### "), de = p.startsWith("**") && p.endsWith("**");
        let Se = p, fe = "body";
        T ? (Se = p.slice(2), fe = "h1") : W ? (Se = p.slice(3), fe = "h2") : O ? (Se = p.slice(4), fe = "h3") : de && (Se = p.slice(2, -2), fe = "bold"), t.push({ id: `wf-${c}`, type: "text", label: Se, textType: fe, x: b, y: r }), r += fe === "h1" ? 45 : fe === "h2" ? 38 : fe === "h3" ? 32 : fe === "bold" ? 30 : 26;
      }
    }); i.length > 0; ) {
      const y = i.pop();
      y.height = r - y.startY + 15;
    }
    return { elements: t, totalHeight: r + 40 };
  },
  classDiagram: (o) => {
    const t = [], r = [];
    let n = null;
    return o.split(`
`).forEach((i) => {
      var d;
      if (i = i.trim(), !i || i.startsWith("#")) return;
      const a = i.match(/^class\s+(\w+)/i);
      if (a) {
        n && t.push(n), n = { id: a[1], name: a[1], properties: [], methods: [] };
        return;
      }
      const e = i.match(/^(\w+)\s*(--|>|--\*|-->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);
      if (e) {
        const u = e[2] === "--|>" ? "extends" : e[2] === "--*" ? "composition" : "association";
        r.push({ from: e[1], to: e[3], type: u, label: ((d = e[4]) == null ? void 0 : d.trim()) || "" });
        return;
      }
      const s = i.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)$/);
      if (s && n) {
        n.properties.push({ visibility: s[1] || "+", name: s[2], type: s[3] });
        return;
      }
      const h = i.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*(?::\s*(.+))?$/);
      h && n && n.methods.push({ visibility: h[1] || "+", name: h[2], params: h[3], returns: h[4] || "void" });
    }), n && t.push(n), { classes: t, relationships: r };
  },
  activity: (o) => {
    const t = /* @__PURE__ */ new Map(), r = [], n = [], i = o.split(`
`).map((f) => f.trim()).filter((f) => f && !f.startsWith("#"));
    if (i.forEach((f) => {
      if (f.match(/^[^<:\[].+?\s*->\s*.+$/)) return;
      let m = "action", g = f, y = f;
      f === "[start]" || f === "start" ? (m = "start", g = "start", y = "") : f === "[end]" || f === "end" ? (m = "end", g = "end", y = "") : f.match(/^<(.+)>$/) ? (m = "decision", g = f.match(/^<(.+)>$/)[1], y = g) : f.match(/^:(.+);?$/) && (g = f.match(/^:(.+);?$/)[1], y = g);
      const c = g.toLowerCase().replace(/[^a-z0-9]/g, "_");
      t.has(c) || (t.set(c, { id: c, type: m, label: y, x: 0, y: 0 }), n.push(c));
    }), i.forEach((f) => {
      var g;
      const m = f.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (m) {
        const y = m[1].replace(/^[<:\[]|[>;>\]]$/g, "").trim(), c = m[2].replace(/^[<:\[]|[>;>\]]$/g, "").trim(), p = ((g = m[3]) == null ? void 0 : g.trim()) || "", b = y.toLowerCase().replace(/[^a-z0-9]/g, "_"), x = c.toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.has(b) && t.has(x) && r.push({ id: `ae-${r.length}`, source: b, target: x, label: p });
      }
    }), r.length === 0 && n.length > 1)
      for (let f = 0; f < n.length - 1; f++)
        r.push({ id: `ae-${f}`, source: n[f], target: n[f + 1] });
    const a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    r.forEach((f) => {
      a.has(f.source) || a.set(f.source, []), a.get(f.source).push(f.target), e.has(f.target) || e.set(f.target, []), e.get(f.target).push(f.source);
    });
    const s = /* @__PURE__ */ new Set(), h = (f, m, g) => {
      if (s.has(f) || !t.has(f)) return;
      const y = t.get(f);
      y.x = m, y.y = g, s.add(f);
      const c = a.get(f) || [];
      c.length === 1 ? h(c[0], m, g + 120) : c.length >= 2 && c.forEach((b, x) => {
        const C = x === 0 ? -100 : x === 1 ? 100 : (x - 0.5) * 200;
        h(b, m + C, g + 120);
      });
    }, d = n.find((f) => {
      var m;
      return ((m = t.get(f)) == null ? void 0 : m.type) === "start";
    }) || n[0];
    d && h(d, 400, 80);
    let u = 80;
    return n.forEach((f) => {
      if (!s.has(f)) {
        const m = t.get(f);
        m.x = 650, m.y = u, u += 120, s.add(f);
      }
    }), { nodes: Array.from(t.values()), edges: r };
  },
  useCase: (o) => {
    const t = [], r = [], n = [];
    return o.split(`
`).forEach((i) => {
      if (i = i.trim(), !i || i.startsWith("#")) return;
      if (i.match(/^actor\s+/i)) {
        t.push({ id: `actor-${t.length}`, label: i.replace(/^actor\s+/i, "").trim() });
        return;
      }
      if (i.startsWith("(") || i.match(/^usecase\s+/i)) {
        r.push({ id: `uc-${r.length}`, label: i.replace(/^usecase\s+/i, "").replace(/[()]/g, "").trim() });
        return;
      }
      const a = i.match(/^(.+?)\s*->\s*(.+)$/);
      a && n.push({ from: a[1].trim(), to: a[2].trim() });
    }), { actors: t, useCases: r, relationships: n };
  },
  component: (o) => {
    const t = [], r = [];
    return o.split(`
`).forEach((n) => {
      if (n = n.trim(), !n || n.startsWith("#")) return;
      const i = n.match(/^\[(\w+)\]\s*(.+)$/);
      if (i) {
        t.push({ id: `comp-${t.length}`, label: i[2].trim(), type: i[1] });
        return;
      }
      const a = n.match(/^(.+?)\s*(-->|--)\s*(.+)$/);
      a && r.push({ from: a[1].trim(), to: a[3].trim() });
    }), { components: t, connections: r };
  },
  c4: (o) => {
    const t = [], r = [], n = [], i = [];
    let a = 0;
    const e = /* @__PURE__ */ new Map();
    let s = 0, h = null, d = null;
    const u = o.match(/^title:\s*(.+)$/im), f = o.match(/^subtitle:\s*(.+)$/im);
    u && (h = u[1].trim()), f && (d = f[1].trim());
    const m = {
      person: "#dbeafe",
      // Light blue
      user: "#dbeafe",
      system: "#dcfce7",
      // Light green
      container: "#fef9c3",
      // Light yellow
      component: "#f3e8ff",
      // Light purple
      database: "#f3e8ff",
      external: "#f1f5f9"
      // Light gray
    }, g = {
      person: "#93c5fd",
      user: "#93c5fd",
      system: "#86efac",
      container: "#fde047",
      component: "#d8b4fe",
      database: "#d8b4fe",
      external: "#cbd5e1"
    };
    o.split(`
`).forEach((C, w) => {
      var A;
      if (C = C.trim(), !C || C.startsWith("#") || C.toLowerCase().startsWith("title:") || C.toLowerCase().startsWith("subtitle:")) return;
      const E = C.match(/^(?:boundary|group)\s+["']([^"']+)["']\s*\{?\s*$/i);
      if (E) {
        const I = {
          id: `boundary-${a++}`,
          name: E[1].trim(),
          elements: [],
          parent: i.length > 0 ? i[i.length - 1].id : null
        };
        n.push(I), i.push(I);
        return;
      }
      if (C === "}" && i.length > 0) {
        i.pop();
        return;
      }
      const k = C.match(/^\[(\w+)\]\s*(.+)$/);
      if (k) {
        const I = k[1].toLowerCase(), R = k[2];
        if (R.includes(",") && !R.includes(":")) {
          const D = R.split(",").map((_) => _.trim()).filter((_) => _), P = `c4-layer-${I}-${s}`;
          e.has(P) || e.set(P, {
            id: P,
            type: I,
            label: I.charAt(0).toUpperCase() + I.slice(1),
            nodes: [],
            color: m[I] || m.external,
            borderColor: g[I] || g.external,
            order: s++
          }), D.forEach((_, z) => {
            const B = _.match(/^([^:]+):\s*(.+)$/), j = B ? B[1].trim() : _, X = B ? B[2].trim() : "", te = {
              id: `c4-${w}-${z}`,
              type: I,
              label: j,
              description: X,
              boundary: i.length > 0 ? i[i.length - 1].id : null,
              layerId: P
            };
            t.push(te), e.get(P).nodes.push({
              id: te.id,
              label: j,
              description: X,
              icon: I === "person" ? "👤" : I === "database" ? "🗄️" : "🏢",
              color: g[I] || g.external
            }), i.length > 0 && i[i.length - 1].elements.push(te.id);
          });
        } else {
          const D = R.match(/^(.+?):\s*(.+)$/), P = D ? D[1].trim() : R.trim(), _ = D ? D[2].trim() : "", z = {
            id: `c4-${w}`,
            type: I,
            label: P,
            description: _,
            boundary: i.length > 0 ? i[i.length - 1].id : null
          };
          t.push(z), i.length > 0 && i[i.length - 1].elements.push(z.id);
        }
        return;
      }
      const M = C.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      M && r.push({ from: M[1].trim(), to: M[2].trim(), label: ((A = M[3]) == null ? void 0 : A.trim()) || "" });
    });
    const y = r.length > 0, p = e.size > 0 && !y ? "layered" : "classic", b = Array.from(e.values()).sort((C, w) => C.order - w.order), x = [];
    for (let C = 0; C < b.length - 1; C++)
      x.push({
        fromLayer: b[C].id,
        toLayer: b[C + 1].id,
        label: ""
      });
    return {
      elements: t,
      relationships: r,
      boundaries: n,
      title: h,
      subtitle: d,
      layers: b,
      interLayerConnections: x,
      layoutMode: p
    };
  },
  requirement: (o) => {
    const t = [], r = [];
    let n = null;
    return o.split(`
`).forEach((i, a) => {
      var h;
      if (i = i.trim(), !i || i.startsWith("#")) return;
      const e = i.match(/^requirement\s+(.+?)(?:\s*{)?$/i);
      if (e) {
        n && t.push(n), n = { id: `req-${a}`, name: e[1].trim(), text: "", risk: "", priority: "" };
        return;
      }
      const s = i.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (s && !n) {
        r.push({ from: s[1].trim(), to: s[2].trim(), label: ((h = s[3]) == null ? void 0 : h.trim()) || "" });
        return;
      }
      n && (i.startsWith("text:") ? n.text = i.replace("text:", "").trim() : i.startsWith("risk:") ? n.risk = i.replace("risk:", "").trim() : i.startsWith("priority:") ? n.priority = i.replace("priority:", "").trim() : i === "}" && (t.push(n), n = null));
    }), n && t.push(n), { requirements: t, traces: r };
  },
  sankey: (o) => {
    const t = /* @__PURE__ */ new Map(), r = [];
    o.split(`
`).forEach((y, c) => {
      if (y = y.trim(), !y || y.startsWith("#")) return;
      const p = y.match(/^(.+?)\s*->\s*(.+?)(?::\s*(\d+(?:\.\d+)?))?$/);
      if (p) {
        const b = p[1].trim(), x = p[2].trim(), C = parseFloat(p[3]) || 10, w = b.toLowerCase().replace(/[^a-z0-9]/g, "_"), E = x.toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.has(w) || t.set(w, { id: w, label: b }), t.has(E) || t.set(E, { id: E, label: x }), r.push({ id: `link-${c}`, source: w, target: E, value: C });
      }
    });
    const n = Array.from(t.values()), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
    r.forEach((y) => {
      i.has(y.source) || i.set(y.source, []), i.get(y.source).push(y.target), a.has(y.target) || a.set(y.target, []), a.get(y.target).push(y.source);
    });
    const e = /* @__PURE__ */ new Map(), s = (y, c) => {
      const p = e.get(y);
      p !== void 0 && p >= c || (e.set(y, c), (i.get(y) || []).forEach((b) => s(b, c + 1)));
    };
    n.filter((y) => !a.has(y.id) || a.get(y.id).length === 0).forEach((y) => s(y.id, 0)), n.forEach((y) => {
      e.has(y.id) || e.set(y.id, 0);
    });
    const h = Math.max(...e.values(), 0), d = /* @__PURE__ */ new Map();
    n.forEach((y) => {
      const c = e.get(y.id) || 0;
      d.has(c) || d.set(c, []), d.get(c).push(y);
    }), n.forEach((y) => {
      const c = r.filter((b) => b.source === y.id).reduce((b, x) => b + x.value, 0), p = r.filter((b) => b.target === y.id).reduce((b, x) => b + x.value, 0);
      y.value = Math.max(c, p, 10);
    });
    const u = 800, f = 500, m = 60, g = (u - m * 2) / (h + 1 || 1);
    for (let y = 0; y <= h; y++) {
      const c = d.get(y) || [], p = c.reduce((x, C) => x + Math.max(30, C.value * 2), 0) + (c.length - 1) * 20;
      let b = (f - p) / 2;
      c.forEach((x) => {
        x.x = m + y * g, x.y = b, x.height = Math.max(30, x.value * 2), x.layer = y, b += x.height + 20;
      });
    }
    return r.forEach((y) => {
      const c = t.get(y.source), p = t.get(y.target);
      c && p && (y.sourceY = c.y + c.height / 2, y.targetY = p.y + p.height / 2, y.thickness = Math.max(4, y.value * 1.5));
    }), { nodes: n, links: r };
  },
  // Swimlane parser for process flows with roles/responsibilities
  swimlane: (o) => {
    const t = [], r = [], n = [];
    let i = null, a = 0;
    o.split(`
`).forEach((f) => {
      if (f = f.trim(), !f || f.startsWith("#")) return;
      const m = f.match(/^\[(.+?)\]$/) || f.match(/^lane:\s*(.+)$/i);
      if (m) {
        i = { id: `lane-${t.length}`, name: m[1].trim(), nodes: [] }, t.push(i);
        return;
      }
      const g = f.match(/^\((\w+)\)\s*(.+?)(?:\s*->\s*(.+))?$/) || f.match(/^(.+?)\s*->\s*(.+)$/);
      if (g) {
        let y, c, p;
        g[1] && g[2] && f.startsWith("(") ? (y = g[1].toLowerCase(), c = g[2].trim(), p = g[3]) : (y = "process", c = g[1].trim(), p = g[2]);
        const b = {
          start: "start",
          end: "end",
          decision: "diamond",
          diamond: "diamond",
          process: "rect",
          task: "rect",
          rect: "rect",
          action: "rect",
          document: "document",
          doc: "document",
          data: "parallelogram",
          io: "parallelogram"
        }, x = `n${a++}`, C = {
          id: x,
          label: c,
          type: b[y] || "rect",
          lane: (i == null ? void 0 : i.id) || null
        };
        r.push(C), i && i.nodes.push(x), p && p.split(",").map((E) => E.trim()).forEach((E) => {
          const k = E.match(/^(.+?):\s*(.+)$/), M = k ? k[1].trim() : E, A = k ? k[2].trim() : "";
          n.push({
            id: `e${n.length}`,
            source: x,
            targetLabel: M,
            label: A
          });
        });
      } else if (i && f) {
        const y = f.match(/^\((\w+)\)\s*(.+)$/) || [null, "process", f], c = y[1] || "process", p = y[2] || f, b = {
          start: "start",
          end: "end",
          decision: "diamond",
          diamond: "diamond",
          process: "rect",
          task: "rect",
          rect: "rect",
          action: "rect"
        }, x = `n${a++}`;
        r.push({
          id: x,
          label: p,
          type: b[c.toLowerCase()] || "rect",
          lane: i.id
        }), i.nodes.push(x);
      }
    }), n.forEach((f) => {
      const m = r.find((g) => g.label.toLowerCase() === f.targetLabel.toLowerCase());
      m && (f.target = m.id);
    });
    const e = n.filter((f) => f.target), s = 120, h = 140, d = 50;
    t.forEach((f, m) => {
      f.y = m * s, f.height = s, r.filter((y) => y.lane === f.id).forEach((y, c) => {
        y.x = 180 + c * (h + 60), y.y = f.y + (s - d) / 2, y.width = h, y.height = d;
      });
    });
    const u = r.filter((f) => !f.lane);
    if (u.length > 0) {
      const f = { id: "default", name: "General", nodes: [], y: t.length * s, height: s };
      t.push(f), u.forEach((m, g) => {
        m.lane = "default", m.x = 180 + g * (h + 60), m.y = f.y + (s - d) / 2, m.width = h, m.height = d;
      });
    }
    return { lanes: t, nodes: r, edges: e };
  }
};
function c2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 100, y: 0 }), [s, h] = V(/* @__PURE__ */ new Set()), d = ye(() => {
    const c = [], p = [], b = /* @__PURE__ */ new Map(), x = 50, C = (A) => Math.max(120, ((A == null ? void 0 : A.length) || 5) * 9 + 50), w = (A, I) => {
      var $;
      const R = C(A.label);
      b.set(I, Math.max(b.get(I) || 0, R)), ($ = A.children) != null && $.length && !s.has(A.id) && A.children.forEach((D) => w(D, I + 1));
    }, E = (A) => {
      let I = 0;
      for (let R = 0; R < A; R++)
        I += (b.get(R) || 120) + x;
      return I;
    }, k = (A) => {
      var I;
      return !((I = A.children) != null && I.length) || s.has(A.id) ? 38 : A.children.reduce((R, $) => R + k($) + 16, -16);
    }, M = (A, I, R, $, D) => {
      var X, te, ee;
      const P = k(A), _ = R + P / 2, z = C(A.label), B = I === 0 ? v.purple : D, j = E(I);
      if (c.push({ id: A.id, label: A.label || "", defaultX: j, defaultY: _, width: z, level: I, color: B, hasChildren: ((X = A.children) == null ? void 0 : X.length) > 0, isCollapsed: s.has(A.id), childCount: ((te = A.children) == null ? void 0 : te.length) || 0 }), $ && p.push({ id: `e-${$}-${A.id}`, source: $, target: A.id, color: B }), (ee = A.children) != null && ee.length && !s.has(A.id)) {
        let ae = R;
        A.children.forEach((F, N) => {
          M(F, I + 1, ae, A.id, I === 0 ? ge[N % ge.length] : D), ae += k(F) + 16;
        });
      }
    };
    if (o != null && o.label && (w(o, 0), M(o, 0, 0, null, ge[0]), c.length)) {
      const A = Math.min(...c.map((R) => R.defaultY)), I = Math.max(...c.map((R) => R.defaultY));
      c.forEach((R) => {
        R.defaultY += -(A + I) / 2 + 300;
      });
    }
    return { nodes: c, edges: p };
  }, [o, s]), u = (c) => e.getNodePosition(c.id, c.defaultX, c.defaultY), f = (c, p) => {
    const b = u(c), x = u(p), C = b.x + c.width + 5, w = b.y, E = x.x - 5, k = x.y, M = E - C, A = Math.min(Math.abs(M) * 0.4, 80);
    return `M ${C} ${w} C ${C + A} ${w}, ${E - A} ${k}, ${E} ${k}`;
  }, m = K(() => {
    const c = e.finishEditing();
    if (c.nodeId && c.newValue && n) {
      const p = d.nodes.find((b) => b.id === c.nodeId);
      p && p.label !== c.newValue && n(c.nodeId, p.label, c.newValue);
    }
  }, [e, d.nodes, n]);
  he(() => {
    const c = (p) => {
      const x = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? p.metaKey : p.ctrlKey;
      if (!e.editingNode) {
        if ((p.key === "Delete" || p.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          p.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (x && p.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          p.preventDefault(), e.copySelectedNodes(d.nodes);
          return;
        }
        if (x && p.key.toLowerCase() === "v" && e.clipboard && a) {
          p.preventDefault();
          const C = e.pasteNodes();
          C && a(C);
          return;
        }
      }
    };
    return window.addEventListener("keydown", c), () => window.removeEventListener("keydown", c);
  }, [e, d.nodes, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const c = e.getNodesInSelectionBox(d.nodes.map((p) => ({ ...p, x: p.defaultX, y: p.defaultY })), e.selectionBox);
      c.length > 0 && e.setSelectedNodes(new Set(c));
    }
  }, [e.isSelecting, e.selectionBox, d.nodes, e]);
  const g = K((c) => {
    (c.target === e.canvasRef.current || c.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), y = K((c) => {
    h((p) => {
      const b = new Set(p);
      return b.has(c) ? b.delete(c) : b.add(c), b;
    });
  }, []);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${30 * e.zoom}px ${30 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        d.edges.map((c) => {
          const p = d.nodes.find((w) => w.id === c.source), b = d.nodes.find((w) => w.id === c.target);
          if (!p || !b) return null;
          const x = f(p, b), C = r ? Ee.stroke : c.color;
          return /* @__PURE__ */ S("g", { children: [
            !r && /* @__PURE__ */ l("path", { d: x, fill: "none", stroke: C, strokeWidth: 6, strokeOpacity: 0.1, strokeLinecap: "round" }),
            !r && /* @__PURE__ */ l("path", { d: x, fill: "none", stroke: C, strokeWidth: 3, strokeOpacity: 0.25, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: x, fill: "none", stroke: C, strokeWidth: r ? 2.5 : 2, strokeOpacity: r ? 1 : 0.8, strokeLinecap: "round" })
          ] }, c.id);
        }),
        e.isSelecting && e.selectionBox && /* @__PURE__ */ l(
          "rect",
          {
            x: Math.min(e.selectionBox.startX, e.selectionBox.endX),
            y: Math.min(e.selectionBox.startY, e.selectionBox.endY),
            width: Math.abs(e.selectionBox.endX - e.selectionBox.startX),
            height: Math.abs(e.selectionBox.endY - e.selectionBox.startY),
            fill: "rgba(124,58,237,0.1)",
            stroke: v.purple,
            strokeWidth: 2,
            strokeDasharray: "5,5",
            style: { pointerEvents: "none" }
          }
        )
      ] }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: d.nodes.map((c) => {
        const p = u(c), b = e.nodeColors[c.id] || c.color, x = e.dragging === c.id, C = e.selectedNodes.has(c.id), w = e.editingNode === c.id;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (E) => e.handleNodeMouseDown(E, c.id, p.x, p.y),
            onDoubleClick: (E) => e.handleNodeDoubleClick(E, c.id, c.label),
            onContextMenu: (E) => e.handleNodeContextMenu(E, c.id),
            style: {
              position: "absolute",
              left: p.x,
              top: p.y - 19,
              width: c.width,
              height: 38,
              background: r ? Ee.fill : c.level === 0 ? `linear-gradient(135deg, ${b}, ${b}dd)` : Pt(b),
              border: r ? `2px solid ${Ee.stroke}` : `2px solid ${b}`,
              borderRadius: c.level === 0 ? 19 : 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: x ? "grabbing" : "grab",
              boxShadow: ot(b, x, C, r),
              transition: x ? "none" : "box-shadow 0.2s, background 0.2s",
              fontFamily: on(r)
            },
            children: [
              /* @__PURE__ */ l(
                tt,
                {
                  isEditing: w,
                  value: w ? e.editValue : c.label,
                  onChange: e.setEditValue,
                  onFinish: m,
                  onCancel: e.cancelEditing,
                  style: { color: r ? Ee.stroke : c.level === 0 ? "#fff" : t.textPrimary, fontSize: r ? e2(c.level === 0 ? 14 : 13) : c.level === 0 ? 14 : 13, fontWeight: c.level === 0 ? 700 : 500 }
                }
              ),
              c.hasChildren && /* @__PURE__ */ l(
                "div",
                {
                  onClick: (E) => {
                    E.stopPropagation(), y(c.id);
                  },
                  style: { position: "absolute", right: -28, width: 24, height: 24, borderRadius: "50%", background: b, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer" },
                  children: c.isCollapsed ? "+" : "−"
                }
              )
            ]
          },
          c.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((c) => Math.min(c * 1.2, 3)), onZoomOut: () => e.setZoom((c) => Math.max(c * 0.8, 0.2)), onFit: () => {
    }, onReset: () => {
      e.resetView(), h(/* @__PURE__ */ new Set());
    }, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((c) => !c) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      st,
      {
        x: e.contextMenu.x,
        y: e.contextMenu.y,
        nodeId: e.contextMenu.nodeId,
        currentIcon: e.nodeIcons[e.contextMenu.nodeId],
        currentShape: e.nodeShapes[e.contextMenu.nodeId],
        onSelectColor: e.setNodeColor,
        onSelectIcon: e.setNodeIcon,
        onSelectShape: e.setNodeShape,
        onClose: e.closeContextMenu,
        theme: t
      }
    )
  ] });
}
const l2 = (o, t = 1e3) => {
  let u = 80;
  const f = [];
  return o.forEach((m) => {
    const g = m.nodes.length, y = Math.min(g, 5), c = Math.ceil(g / 5), p = y * 140 + (y - 1) * 25, b = Math.max(p + 40 * 2, 350), C = c * 70 + (c - 1) * 15 + 40 * 2 + 35, w = (t - b) / 2, E = u, k = m.nodes.map((M, A) => {
      const I = Math.floor(A / 5), R = A % 5, $ = Math.min(5, g - I * 5), D = $ * 140 + ($ - 1) * 25, P = w + (b - D) / 2;
      return {
        ...M,
        x: P + R * 165 + 140 / 2,
        y: E + 35 + 40 + I * 85 + 70 / 2,
        width: 140,
        height: 70
      };
    });
    f.push({
      ...m,
      x: w,
      y: E,
      width: b,
      height: C,
      nodes: k
    }), u += C + 30;
  }), {
    layers: f,
    totalHeight: u + 20,
    totalWidth: t
  };
};
function of({ data: o, theme: t = $e.dark }) {
  const r = Be({ x: 50, y: 30 }), { title: n, subtitle: i, layers: a = [], interLayerConnections: e = [] } = o, s = ye(() => l2(a), [a]), h = ye(() => {
    if (!s.layers.length) return { x: 0, y: 0, width: 800, height: 600 };
    if (s.layers.flatMap((y) => y.nodes).length === 0) return { x: 0, y: 0, width: 800, height: 600 };
    const u = Math.min(...s.layers.map((y) => y.x)) - 50, f = Math.max(...s.layers.map((y) => y.x + y.width)) + 50, m = 0, g = s.totalHeight + 50;
    return { x: u, y: m, width: f - u, height: g - m };
  }, [s]);
  return /* @__PURE__ */ S("div", { style: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: t.canvasBg,
    borderRadius: 12,
    border: `1px solid ${t.border}`
  }, children: [
    /* @__PURE__ */ S(
      "div",
      {
        ref: r.canvasRef,
        className: "canvas-bg",
        onMouseDown: r.handleCanvasMouseDown,
        onMouseMove: r.handleMouseMove,
        onMouseUp: r.handleMouseUp,
        onMouseLeave: r.handleMouseUp,
        onWheel: r.handleWheel,
        style: {
          width: "100%",
          height: "100%",
          cursor: r.isPanning ? "grabbing" : "grab"
        },
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              className: "canvas-bg",
              style: {
                position: "absolute",
                inset: 0,
                backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
                backgroundSize: `${25 * r.zoom}px ${25 * r.zoom}px`,
                backgroundPosition: `${r.pan.x}px ${r.pan.y}px`,
                pointerEvents: "none"
              }
            }
          ),
          /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
            /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "layered-arrow", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 10 4 L 0 8 L 2.5 4 Z", fill: t.textSecondary }) }) }),
            /* @__PURE__ */ S("g", { transform: `translate(${r.pan.x}, ${r.pan.y}) scale(${r.zoom})`, children: [
              s.layers.map((d) => /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l(
                  "rect",
                  {
                    x: d.x,
                    y: d.y,
                    width: d.width,
                    height: d.height,
                    fill: d.color,
                    stroke: d.borderColor,
                    strokeWidth: 2,
                    strokeDasharray: "8,4",
                    rx: 16,
                    opacity: 0.95
                  }
                ),
                /* @__PURE__ */ l(
                  "text",
                  {
                    x: d.x + d.width / 2,
                    y: d.y + 22,
                    textAnchor: "middle",
                    fill: t.textPrimary,
                    fontSize: "13",
                    fontWeight: "600",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    opacity: 0.85,
                    children: d.label
                  }
                )
              ] }, d.id)),
              e.map((d, u) => {
                const f = s.layers.find((b) => b.id === d.fromLayer), m = s.layers.find((b) => b.id === d.toLayer);
                if (!f || !m) return null;
                const g = f.x + f.width / 2, y = f.y + f.height + 2, c = m.y - 2, p = (y + c) / 2;
                return /* @__PURE__ */ S("g", { children: [
                  /* @__PURE__ */ l(
                    "path",
                    {
                      d: `M ${g} ${y} L ${g} ${c - 8}`,
                      fill: "none",
                      stroke: t.textSecondary,
                      strokeWidth: 2,
                      markerEnd: "url(#layered-arrow)",
                      opacity: 0.5
                    }
                  ),
                  d.label && /* @__PURE__ */ l(
                    "text",
                    {
                      x: g + 15,
                      y: p,
                      fill: t.textSecondary,
                      fontSize: "10",
                      fontFamily: "system-ui",
                      children: d.label
                    }
                  )
                ] }, `conn-${u}`);
              })
            ] })
          ] }),
          /* @__PURE__ */ S("div", { style: {
            position: "absolute",
            transform: `translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,
            transformOrigin: "0 0",
            pointerEvents: "none"
          }, children: [
            (n || i) && /* @__PURE__ */ S("div", { style: {
              position: "absolute",
              top: 15,
              left: 0,
              right: 0,
              textAlign: "center",
              width: s.totalWidth
            }, children: [
              n && /* @__PURE__ */ l("h2", { style: {
                margin: 0,
                fontSize: "1.3rem",
                fontWeight: 700,
                color: t.textPrimary,
                fontFamily: "system-ui, -apple-system, sans-serif"
              }, children: n }),
              i && /* @__PURE__ */ l("p", { style: {
                margin: "4px 0 0",
                fontSize: "0.85rem",
                color: t.textSecondary,
                fontFamily: "system-ui, -apple-system, sans-serif"
              }, children: i })
            ] }),
            s.layers.flatMap(
              (d) => d.nodes.map((u) => /* @__PURE__ */ S(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: u.x - u.width / 2,
                    top: u.y - u.height / 2,
                    width: u.width,
                    height: u.height,
                    background: "white",
                    border: `2px solid ${u.color || "#e2e8f0"}`,
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    pointerEvents: "auto",
                    cursor: "default"
                  },
                  children: [
                    /* @__PURE__ */ l("span", { style: {
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#1e293b",
                      textAlign: "center",
                      padding: "0 8px",
                      fontFamily: "system-ui, -apple-system, sans-serif"
                    }, children: u.label }),
                    u.description && /* @__PURE__ */ l("span", { style: {
                      fontSize: "0.65rem",
                      color: "#64748b",
                      textAlign: "center",
                      padding: "0 6px",
                      marginTop: 2,
                      maxWidth: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: "system-ui, -apple-system, sans-serif"
                    }, children: u.description })
                  ]
                },
                u.id
              ))
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l(
      We,
      {
        onZoomIn: () => r.setZoom((d) => Math.min(d * 1.2, 2.5)),
        onZoomOut: () => r.setZoom((d) => Math.max(d * 0.8, 0.3)),
        onFit: () => r.fitToView(h),
        onReset: r.resetView,
        zoom: r.zoom
      }
    )
  ] });
}
function d2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 0, y: 30 }), { nodes: s = [], edges: h = [], groups: d = [] } = o, u = (k) => e.getNodePosition(k.id, k.x, k.y), [f, m] = V({}), g = 150, y = 90, c = (k) => k.shape === "cylinder" || ["database", "cache", "storage", "db", "redis", "s3", "blob"].includes(k.type) ? "cylinder" : k.shape === "hexagon" || ["gateway", "loadbalancer", "lb", "api", "proxy", "cdn", "firewall"].includes(k.type) ? "hexagon" : "rect", p = ye(() => {
    if (!s || s.length === 0) return { x: 0, y: 0, width: 800, height: 600 };
    const k = s.map((P) => {
      var z;
      return ((z = e.nodePositions) == null ? void 0 : z[P.id]) || { x: P.x || 0, y: P.y || 0 };
    });
    if (k.length === 0) return { x: 0, y: 0, width: 800, height: 600 };
    const M = k.map((P) => P.x), A = k.map((P) => P.y), I = Math.min(...M) - g, R = Math.max(...M) + g, $ = Math.min(...A) - y, D = Math.max(...A) + y;
    return { x: I, y: $, width: R - I, height: D - $ };
  }, [s, e.nodePositions]), b = (k) => {
    switch (k.style || "solid") {
      case "dotted":
        return { strokeDasharray: "2,4", strokeWidth: 2, animated: !1 };
      case "dashed":
        return { strokeDasharray: "10,6", strokeWidth: 2, animated: !1 };
      case "thick":
        return { strokeDasharray: null, strokeWidth: 3.5, animated: !1 };
      case "async":
        return { strokeDasharray: "4,4", strokeWidth: 2, animated: !0 };
      case "animated":
        return { strokeDasharray: null, strokeWidth: 2.5, animated: !0 };
      default:
        return { strokeDasharray: null, strokeWidth: 2.5, animated: !1 };
    }
  }, x = (k, M, A, I) => {
    const R = M.x - k.x, $ = M.y - k.y, D = A / 2, P = I / 2;
    if (R === 0 && $ === 0) return { x: k.x, y: k.y };
    const _ = Math.abs(R), z = Math.abs($);
    if (_ * P > z * D) {
      const B = R > 0 ? 1 : -1;
      return { x: k.x + B * D, y: k.y + $ / _ * D };
    } else {
      const B = $ > 0 ? 1 : -1;
      return { x: k.x + R / z * P, y: k.y + B * P };
    }
  }, C = K(() => {
    const k = e.finishEditing();
    if (k.nodeId && k.newValue && n) {
      const M = s.find((A) => A.id === k.nodeId);
      M && M.label !== k.newValue && n(k.nodeId, M.label, k.newValue);
    }
  }, [e, s, n]), w = K(() => {
    if (!s || s.length === 0) return;
    const k = 150, M = 100, A = 40, I = 30, R = 40, $ = 60, D = 100, P = 100, _ = 4, z = /* @__PURE__ */ new Map(), B = [];
    s.forEach((ee) => {
      ee.group ? (z.has(ee.group) || z.set(ee.group, []), z.get(ee.group).push(ee)) : B.push(ee);
    });
    const j = {}, X = {};
    let te = P;
    if (B.length > 0) {
      const ee = Math.min(_, B.length), ae = ee * k + (ee - 1) * A, F = D + 200;
      B.forEach((Z, T) => {
        const W = T % ee, O = Math.floor(T / ee);
        j[Z.id] = {
          x: F + W * (k + A) + k / 2 - ae / 2,
          y: te + O * (M + I) + M / 2
        };
      });
      const N = Math.ceil(B.length / ee);
      te += N * (M + I) + $;
    }
    d.forEach((ee, ae) => {
      const F = z.get(ee.name) || [];
      if (F.length === 0) return;
      const N = Math.min(_, F.length), Z = Math.ceil(F.length / N), T = N * k + (N - 1) * A, W = Z * M + (Z - 1) * I, O = D, de = te;
      F.forEach((Se, fe) => {
        const ze = fe % N, De = Math.floor(fe / N);
        j[Se.id] = {
          x: O + R + ze * (k + A) + k / 2,
          y: de + R + 30 + De * (M + I) + M / 2
        };
      }), X[ee.id] = {
        x: O,
        y: de,
        width: T + R * 2,
        height: W + R * 2 + 30,
        // +30 for label
        color: ee.color,
        borderColor: ee.borderColor
      }, te += W + R * 2 + 30 + $;
    }), e.setPositions(j), m(X);
  }, [s, h, d, e]);
  he(() => {
    const k = (M) => {
      const I = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? M.metaKey : M.ctrlKey;
      if (!e.editingNode) {
        if ((M.key === "Delete" || M.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          M.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (I && M.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          M.preventDefault(), e.copySelectedNodes(s);
          return;
        }
        if (I && M.key.toLowerCase() === "v" && e.clipboard && a) {
          M.preventDefault();
          const R = e.pasteNodes();
          R && a(R);
          return;
        }
      }
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [e, s, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const k = e.getNodesInSelectionBox(s, e.selectionBox);
      k.length > 0 && e.setSelectedNodes(new Set(k));
    }
  }, [e.isSelecting, e.selectionBox, s, e]);
  const E = K((k) => {
    (k.target === e.canvasRef.current || k.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes archFlowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: E, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ l("marker", { id: "arch-arr", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "arch-arr-thick", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 10 4 L 0 8 L 2.5 4 Z", fill: v.purple }) })
        ] }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          d.map((k) => {
            const M = f[k.id] || k;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l(
                "rect",
                {
                  x: M.x,
                  y: M.y,
                  width: M.width,
                  height: M.height,
                  fill: `${k.color}08`,
                  stroke: k.color,
                  strokeWidth: 2,
                  strokeDasharray: "8,4",
                  rx: 12,
                  opacity: 0.8
                }
              ),
              /* @__PURE__ */ l(
                "text",
                {
                  x: M.x + 16,
                  y: M.y + 24,
                  fill: k.color,
                  fontSize: "14",
                  fontWeight: "600",
                  fontFamily: "system-ui",
                  children: k.name
                }
              )
            ] }, k.id);
          }),
          h.map((k) => {
            const M = s.find((W) => W.id === k.source), A = s.find((W) => W.id === k.target);
            if (!M || !A) return null;
            const I = u(M), R = u(A), $ = M.width || g, D = M.height || y, P = A.width || g, _ = A.height || y, z = x(I, R, $, D), B = x(R, I, P, _), j = z.x, X = z.y, te = B.x, ee = B.y, ae = (j + te) / 2, F = (X + ee) / 2, N = r ? Dg(j, X, te, ee, !0) : lr(j, X, te, ee), Z = r ? Ee.stroke : v.purple, T = b(k);
            return /* @__PURE__ */ S("g", { children: [
              !r && /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: Z, strokeWidth: T.strokeWidth * 4, strokeOpacity: 0.08, strokeLinecap: "round" }),
              !r && /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: Z, strokeWidth: T.strokeWidth * 2, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: Z, strokeWidth: r ? 2.5 : T.strokeWidth, strokeDasharray: T.strokeDasharray, markerEnd: r ? "" : k.style === "thick" ? "url(#arch-arr-thick)" : "url(#arch-arr)", opacity: r ? 1 : 0.95, strokeLinecap: "round" }),
              !r && T.animated && /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: "rgba(255,255,255,0.6)", strokeWidth: T.strokeWidth, strokeDasharray: "4,12", strokeLinecap: "round", style: { animation: "archFlowDash 0.8s linear infinite" } }),
              k.label && /* @__PURE__ */ S(yt, { children: [
                /* @__PURE__ */ l("rect", { x: ae - Math.max(k.label.length * 4, 40), y: F - 10, width: Math.max(k.label.length * 8, 80), height: 20, rx: 4, fill: t.cardBg, stroke: v.purple, strokeWidth: 1, opacity: 0.95 }),
                /* @__PURE__ */ l("text", { x: ae, y: F + 4, textAnchor: "middle", fill: t.textPrimary, fontSize: "10", fontFamily: "system-ui", fontWeight: "500", children: k.label })
              ] })
            ] }, k.id);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l(
            "rect",
            {
              x: Math.min(e.selectionBox.startX, e.selectionBox.endX),
              y: Math.min(e.selectionBox.startY, e.selectionBox.endY),
              width: Math.abs(e.selectionBox.endX - e.selectionBox.startX),
              height: Math.abs(e.selectionBox.endY - e.selectionBox.startY),
              fill: "rgba(124,58,237,0.1)",
              stroke: v.purple,
              strokeWidth: 2,
              strokeDasharray: "5,5",
              style: { pointerEvents: "none" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: s.map((k) => {
        const M = u(k), A = c(k), I = e.nodeColors[k.id] || k.color, R = e.dragging === k.id, $ = e.selectedNodes.has(k.id), D = e.editingNode === k.id, P = k.description && k.description.length > 0, _ = k.groupColorIndex >= 0, z = _ ? I : Pt(I, r);
        let B = { position: "absolute", left: M.x - 75, top: M.y - 45, width: 150, height: P ? 100 : 90, background: z, border: $ ? `2px solid ${v.blue}` : _ ? "none" : `2px solid ${I}`, borderRadius: A === "person" ? "50% 50% 8px 8px" : 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: R ? "grabbing" : "grab", boxShadow: $ ? `0 0 0 3px ${v.blue}40` : _ ? "0 2px 4px rgba(0,0,0,0.2)" : ot(I, R, $, r), transition: R ? "none" : "box-shadow 0.2s", fontFamily: on(r), padding: "8px 10px", boxSizing: "border-box" };
        A === "cylinder" && (B.borderRadius = "50% / 15%", B.height = P ? 105 : 95), A === "hexagon" && (B.clipPath = "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)", B.width = 155);
        const j = _ ? "#fff" : r ? Ee.stroke : t.textPrimary, X = _ ? "rgba(255,255,255,0.8)" : t.textSecondary;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (te) => e.handleNodeMouseDown(te, k.id, M.x, M.y),
            onDoubleClick: (te) => e.handleNodeDoubleClick(te, k.id, k.label),
            onContextMenu: (te) => e.handleNodeContextMenu(te, k.id),
            style: B,
            title: k.description || "",
            children: [
              _ && k.typeLabel && /* @__PURE__ */ S("div", { style: { fontSize: "0.6rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", marginBottom: 4 }, children: [
                "[",
                k.typeLabel,
                "]"
              ] }),
              !_ && /* @__PURE__ */ l("div", { style: { fontSize: "1.4rem", marginBottom: 2 }, children: e.nodeIcons[k.id] || k.icon }),
              /* @__PURE__ */ l(
                tt,
                {
                  isEditing: D,
                  value: D ? e.editValue : k.label,
                  onChange: e.setEditValue,
                  onFinish: C,
                  onCancel: e.cancelEditing,
                  style: { fontSize: _ ? "0.85rem" : r ? "1rem" : "0.8rem", fontWeight: 600, color: j, textAlign: "center" }
                }
              ),
              P && /* @__PURE__ */ l("div", { style: { fontSize: "0.65rem", color: X, textAlign: "center", padding: "0 8px", marginTop: 4, maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", lineHeight: 1.2 }, children: k.description })
            ]
          },
          k.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((k) => Math.min(k * 1.2, 2.5)), onZoomOut: () => e.setZoom((k) => Math.max(k * 0.8, 0.3)), onFit: () => e.fitToView(p), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((k) => !k), onAutoLayout: w }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      st,
      {
        x: e.contextMenu.x,
        y: e.contextMenu.y,
        nodeId: e.contextMenu.nodeId,
        currentIcon: e.nodeIcons[e.contextMenu.nodeId],
        currentShape: e.nodeShapes[e.contextMenu.nodeId],
        onSelectColor: e.setNodeColor,
        onSelectIcon: e.setNodeIcon,
        onSelectShape: e.setNodeShape,
        onClose: e.closeContextMenu,
        theme: t
      }
    )
  ] });
}
function u2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a, onLinkedTemplateClick: e }) {
  if ((o == null ? void 0 : o.format) === "sections")
    return /* @__PURE__ */ l(p2, { data: o, theme: t });
  const s = Be({ x: 50, y: 50 }), { nodes: h, edges: d } = o, u = (y) => s.getNodePosition(y.id, y.x, y.y), f = ye(() => {
    if (!h || h.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const y = h.map((w) => w.x), c = h.map((w) => w.y), p = Math.min(...y) - 100, b = Math.max(...y) + 100, x = Math.min(...c) - 80, C = Math.max(...c) + 80;
    return { x: p, y: x, width: b - p, height: C - x };
  }, [h]), m = K(() => {
    const y = s.finishEditing();
    if (y.nodeId && y.newValue !== void 0 && n) {
      const c = h.find((p) => p.id === y.nodeId);
      c && c.label !== y.newValue && n(y.nodeId, c.label, y.newValue);
    }
  }, [s, h, n]);
  he(() => {
    const y = (c) => {
      const b = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? c.metaKey : c.ctrlKey;
      if (!s.editingNode) {
        if ((c.key === "Delete" || c.key === "Backspace") && s.selectedNodes.size > 0 && i) {
          c.preventDefault(), i(Array.from(s.selectedNodes)), s.clearSelection();
          return;
        }
        if (b && c.key.toLowerCase() === "c" && s.selectedNodes.size > 0) {
          c.preventDefault(), s.copySelectedNodes(h);
          return;
        }
        if (b && c.key.toLowerCase() === "v" && s.clipboard && a) {
          c.preventDefault();
          const x = s.pasteNodes();
          x && a(x);
          return;
        }
      }
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [s, h, i, a]), he(() => {
    if (!s.isSelecting && s.selectionBox) {
      const y = s.getNodesInSelectionBox(h, s.selectionBox);
      y.length > 0 && s.setSelectedNodes(new Set(y));
    }
  }, [s.isSelecting, s.selectionBox, h, s]);
  const g = K((y) => {
    (y.target === s.canvasRef.current || y.target.classList.contains("canvas-bg")) && (s.clearSelection(), s.closeContextMenu());
  }, [s]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: s.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: s.handleCanvasMouseDown, onMouseMove: s.handleMouseMove, onMouseUp: s.handleMouseUp, onMouseLeave: s.handleMouseUp, onTouchStart: s.handleTouchStart, onTouchMove: s.handleTouchMove, onTouchEnd: s.handleTouchEnd, onWheel: s.handleWheel, style: { width: "100%", height: "100%", cursor: s.isPanning || s.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * s.zoom}px ${25 * s.zoom}px`, backgroundPosition: `${s.pan.x}px ${s.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "journey-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.purple }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${s.pan.x}, ${s.pan.y}) scale(${s.zoom})`, children: [
          d.map((y) => {
            const c = h.find((ae) => ae.id === y.source), p = h.find((ae) => ae.id === y.target);
            if (!c || !p) return null;
            const b = u(c), x = u(p), C = x.x - b.x, w = x.y - b.y, E = c.shape === "circle" ? 50 : 70, k = c.shape === "circle" ? 50 : 45, M = p.shape === "circle" ? 50 : 70, A = p.shape === "circle" ? 50 : 45, I = Math.atan2(w, C), R = b.x + Math.cos(I) * E, $ = b.y + Math.sin(I) * k, D = x.x - Math.cos(I) * M, P = x.y - Math.sin(I) * A, _ = (R + D) / 2, z = ($ + P) / 2, B = Math.min(Math.abs(w) * 0.3, 30), j = _, X = z - B, te = `M ${R} ${$} Q ${j} ${X} ${D} ${P}`, ee = y.label ? Math.max(y.label.length * 7 + 16, 50) : 0;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: te, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: te, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: te, fill: "none", stroke: v.purple, strokeWidth: 2, markerEnd: "url(#journey-arrow)", strokeLinecap: "round", opacity: "0.8" }),
              /* @__PURE__ */ l("path", { d: te, fill: "none", stroke: "rgba(255,255,255,0.6)", strokeWidth: 2, strokeLinecap: "round", strokeDasharray: "4,12", children: /* @__PURE__ */ l("animate", { attributeName: "stroke-dashoffset", from: "16", to: "0", dur: "0.8s", repeatCount: "indefinite" }) }),
              y.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: _ - ee / 2, y: X - 10, width: ee, height: 20, rx: 10, fill: t.cardBg, stroke: "rgba(124,58,237,0.5)", strokeWidth: 1 }),
                /* @__PURE__ */ l("text", { x: _, y: X + 4, textAnchor: "middle", fill: t.textPrimary, fontSize: 10, fontWeight: "500", fontFamily: "system-ui, sans-serif", children: y.label })
              ] })
            ] }, y.id);
          }),
          s.isSelecting && s.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(s.selectionBox.startX, s.selectionBox.endX), y: Math.min(s.selectionBox.startY, s.selectionBox.endY), width: Math.abs(s.selectionBox.endX - s.selectionBox.startX), height: Math.abs(s.selectionBox.endY - s.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${s.pan.x}px, ${s.pan.y}px) scale(${s.zoom})`, transformOrigin: "0 0" }, children: h.map((y) => {
        const c = u(y), p = s.dragging === y.id, b = s.selectedNodes.has(y.id);
        return y.shape === "circle" ? /* @__PURE__ */ S("div", { onClick: (C) => s.handleNodeClick(C, y.id), onDoubleClick: (C) => s.handleNodeDoubleClick(C, y.id, y.label), onContextMenu: (C) => s.handleNodeContextMenu(C, y.id), onMouseDown: (C) => s.handleNodeMouseDown(C, y.id, c.x, c.y), onTouchStart: (C) => s.handleNodeTouchStart(C, y.id, c.x, c.y), style: { position: "absolute", left: c.x - 50, top: c.y - 50, width: 100, height: 100, borderRadius: "50%", background: Pt(y.color), border: `2px solid ${b ? v.blue : y.color}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: p ? "grabbing" : "grab", boxShadow: ot(y.color, p, b), transition: p ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: 24 }, children: y.icon }),
          s.editingNode === y.id ? /* @__PURE__ */ l(tt, { value: s.editingValue, onChange: (C) => s.setEditingValue(C), onFinish: m, style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? Ee.stroke : t.textPrimary, marginTop: 4 } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? Ee.stroke : t.textPrimary, marginTop: 4 }, children: y.label })
        ] }, y.id) : /* @__PURE__ */ S("div", { onClick: (C) => {
          y.linkedTemplate && e ? (C.stopPropagation(), e(y.linkedTemplate, y.label)) : s.handleNodeClick(C, y.id);
        }, onDoubleClick: (C) => y.linkedTemplate && e ? e(y.linkedTemplate, y.label) : s.handleNodeDoubleClick(C, y.id, y.label), onContextMenu: (C) => s.handleNodeContextMenu(C, y.id), onMouseDown: (C) => s.handleNodeMouseDown(C, y.id, c.x, c.y), onTouchStart: (C) => s.handleNodeTouchStart(C, y.id, c.x, c.y), style: { position: "absolute", left: c.x - 70, top: c.y - 45, width: 140, height: 90, background: Pt(y.color), border: `2px solid ${b ? v.blue : y.linkedTemplate ? v.cyan : y.color}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: y.linkedTemplate ? "pointer" : p ? "grabbing" : "grab", boxShadow: y.linkedTemplate ? `${ot(y.color, p, b)}, 0 0 0 3px ${v.cyan}30` : ot(y.color, p, b), transition: p ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          y.badge && /* @__PURE__ */ l("div", { style: { position: "absolute", top: -10, right: -10, background: v.red, color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 10 }, children: y.badge }),
          y.linkedTemplate && /* @__PURE__ */ l("div", { style: { position: "absolute", top: -8, left: -8, background: v.cyan, color: "#fff", fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 6, display: "flex", alignItems: "center", gap: 3 }, children: "🔗 Click to open" }),
          /* @__PURE__ */ l("span", { style: { fontSize: 22 }, children: y.icon }),
          s.editingNode === y.id ? /* @__PURE__ */ l(tt, { value: s.editingValue, onChange: (C) => s.setEditingValue(C), onFinish: m, style: { fontSize: r ? 14 : 11, fontWeight: 600, color: r ? Ee.stroke : t.textPrimary, marginTop: 4 } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 11, fontWeight: 600, color: r ? Ee.stroke : t.textPrimary, marginTop: 4 }, children: y.label })
        ] }, y.id);
      }) })
    ] }),
    s.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "6px 12px", borderRadius: 6, fontSize: "0.75rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ S("span", { children: [
        s.selectedNodes.size,
        " selected"
      ] }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.6 }, children: "|" }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.7 }, children: "Del to delete • ⌘C copy • ⌘V paste" })
    ] }),
    s.clipboard && /* @__PURE__ */ S("div", { style: { position: "absolute", top: s.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${v.green}20`, padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem", color: v.green, border: `1px solid ${v.green}40` }, children: [
      s.clipboard.length,
      " node",
      s.clipboard.length > 1 ? "s" : "",
      " copied"
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => s.setZoom((y) => Math.min(y * 1.2, 3)), onZoomOut: () => s.setZoom((y) => Math.max(y * 0.8, 0.2)), onFit: () => s.fitToView(f), onReset: s.resetView, zoom: s.zoom }),
    s.contextMenu && /* @__PURE__ */ l(st, { position: s.contextMenu, onClose: () => s.closeContextMenu(), nodeId: s.contextMenu.nodeId })
  ] });
}
function p2({ data: o, theme: t = $e.dark }) {
  var y, c;
  const { title: r, actors: n, sections: i } = o, a = _e(null), [e, s] = V({ width: 1200, height: 600 }), h = ye(() => {
    const p = [];
    return i.forEach((b, x) => {
      b.tasks.forEach((C, w) => {
        p.push({ ...C, section: b.name, sectionIndex: x, sectionColor: b.color });
      });
    }), p;
  }, [i]);
  he(() => {
    if (a.current) {
      const p = a.current.getBoundingClientRect();
      s({ width: Math.max(p.width, 800), height: Math.max(p.height - 80, 400) });
    }
  }, []);
  const d = ye(() => {
    const p = { top: 120, bottom: 100, left: 80, right: 80 }, b = Math.max(e.width - p.left - p.right, h.length * 150), x = e.height - p.top - p.bottom, C = b / Math.max(h.length - 1, 1), w = h.map(($, D) => {
      const P = p.left + D * C, _ = x * 0.2, z = Math.sin(D * 0.8) * _, j = p.top + x / 2 + z;
      return { ...$, x: P, y: j, index: D };
    });
    let E = "";
    if (w.length > 0) {
      E = `M ${w[0].x} ${w[0].y}`;
      for (let $ = 1; $ < w.length; $++) {
        const D = w[$ - 1], P = w[$], _ = D.x + (P.x - D.x) * 0.5, z = D.x + (P.x - D.x) * 0.5;
        E += ` C ${_} ${D.y}, ${z} ${P.y}, ${P.x} ${P.y}`;
      }
    }
    const k = w.map(($, D) => {
      const P = p.top + 50 - ($.score - 1) * 12;
      return { x: $.x, y: P, score: $.score };
    });
    let M = "";
    if (k.length > 0) {
      M = `M ${k[0].x} ${k[0].y}`;
      for (let $ = 1; $ < k.length; $++) {
        const D = k[$ - 1], P = k[$], _ = D.x + (P.x - D.x) * 0.5;
        M += ` C ${_} ${D.y}, ${_} ${P.y}, ${P.x} ${P.y}`;
      }
    }
    const A = [];
    let I = -1, R = 0;
    return w.forEach(($, D) => {
      $.sectionIndex !== I && (I >= 0 && A.push({
        index: I,
        start: R,
        end: $.x - C / 2,
        color: i[I].color,
        name: i[I].name
      }), I = $.sectionIndex, R = D === 0 ? p.left - 40 : $.x - C / 2);
    }), I >= 0 && A.push({
      index: I,
      start: R,
      end: p.left + b + 40,
      color: i[I].color,
      name: i[I].name
    }), { nodes: w, pathString: E, emotionPathString: M, emotionPath: k, sectionBounds: A, padding: p, availableWidth: b };
  }, [h, e, i]), u = (p) => ({ 1: "#ef4444", 2: "#f97316", 3: "#eab308", 4: "#22c55e", 5: "#10b981" })[p] || "#64748b", f = (p) => {
    const b = p.toLowerCase();
    return b.includes("user") ? v.pink : b.includes("system") ? v.blue : b.includes("admin") ? v.purple : v.cyan;
  }, m = (p) => {
    const b = p.toLowerCase();
    return b.includes("user") ? "👤" : b.includes("system") ? "⚙️" : b.includes("admin") ? "👨‍💼" : "🧑";
  }, g = d.padding.left + d.availableWidth + d.padding.right;
  return /* @__PURE__ */ S(
    "div",
    {
      ref: a,
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${t.canvasBg} 0%, rgba(15,23,42,1) 100%)`,
        borderRadius: 12,
        border: `1px solid ${t.border}`
      },
      children: [
        r && /* @__PURE__ */ S("div", { style: {
          position: "absolute",
          top: 16,
          left: 24,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 12
        }, children: [
          /* @__PURE__ */ l("div", { style: {
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            boxShadow: "0 4px 20px rgba(139,92,246,0.4)"
          }, children: "🚀" }),
          /* @__PURE__ */ S("div", { children: [
            /* @__PURE__ */ l("h2", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: t.textPrimary }, children: r }),
            /* @__PURE__ */ S("p", { style: { margin: 0, fontSize: "0.75rem", color: t.textSecondary }, children: [
              h.length,
              " steps across ",
              i.length,
              " phases"
            ] })
          ] })
        ] }),
        n.length > 0 && /* @__PURE__ */ l("div", { style: {
          position: "absolute",
          top: 16,
          right: 24,
          zIndex: 10,
          display: "flex",
          gap: 8
        }, children: n.map((p, b) => /* @__PURE__ */ S("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 14px",
          borderRadius: 20,
          background: `${f(p.name)}15`,
          border: `1px solid ${f(p.name)}40`,
          backdropFilter: "blur(8px)"
        }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem" }, children: m(p.name) }),
          /* @__PURE__ */ l("span", { style: { fontSize: "0.75rem", fontWeight: 600, color: f(p.name) }, children: p.name })
        ] }, b)) }),
        /* @__PURE__ */ l("div", { style: { width: "100%", height: "100%", overflowX: "auto", overflowY: "hidden" }, children: /* @__PURE__ */ S(
          "svg",
          {
            width: Math.max(g, e.width),
            height: e.height,
            style: { display: "block" },
            children: [
              /* @__PURE__ */ S("defs", { children: [
                /* @__PURE__ */ S("linearGradient", { id: "pathGradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                  /* @__PURE__ */ l("stop", { offset: "0%", stopColor: v.purple }),
                  /* @__PURE__ */ l("stop", { offset: "50%", stopColor: v.pink }),
                  /* @__PURE__ */ l("stop", { offset: "100%", stopColor: v.cyan })
                ] }),
                /* @__PURE__ */ S("filter", { id: "glow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
                  /* @__PURE__ */ l("feGaussianBlur", { stdDeviation: "4", result: "coloredBlur" }),
                  /* @__PURE__ */ S("feMerge", { children: [
                    /* @__PURE__ */ l("feMergeNode", { in: "coloredBlur" }),
                    /* @__PURE__ */ l("feMergeNode", { in: "SourceGraphic" })
                  ] })
                ] }),
                d.sectionBounds.map((p, b) => /* @__PURE__ */ S("linearGradient", { id: `sectionGrad${b}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                  /* @__PURE__ */ l("stop", { offset: "0%", stopColor: p.color, stopOpacity: "0.08" }),
                  /* @__PURE__ */ l("stop", { offset: "100%", stopColor: p.color, stopOpacity: "0.02" })
                ] }, b)),
                /* @__PURE__ */ S("linearGradient", { id: "emotionGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                  /* @__PURE__ */ l("stop", { offset: "0%", stopColor: "#10b981" }),
                  /* @__PURE__ */ l("stop", { offset: "50%", stopColor: "#eab308" }),
                  /* @__PURE__ */ l("stop", { offset: "100%", stopColor: "#10b981" })
                ] })
              ] }),
              d.sectionBounds.map((p, b) => /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l(
                  "rect",
                  {
                    x: p.start,
                    y: 60,
                    width: p.end - p.start,
                    height: e.height - 120,
                    rx: 16,
                    fill: `url(#sectionGrad${b})`
                  }
                ),
                /* @__PURE__ */ l(
                  "text",
                  {
                    x: p.start + (p.end - p.start) / 2,
                    y: 85,
                    textAnchor: "middle",
                    fill: p.color,
                    fontSize: "11",
                    fontWeight: "600",
                    fontFamily: "system-ui",
                    opacity: "0.8",
                    children: p.name.toUpperCase()
                  }
                ),
                /* @__PURE__ */ l(
                  "circle",
                  {
                    cx: p.start + 30,
                    cy: 85,
                    r: 12,
                    fill: p.color,
                    opacity: "0.9"
                  }
                ),
                /* @__PURE__ */ l(
                  "text",
                  {
                    x: p.start + 30,
                    y: 89,
                    textAnchor: "middle",
                    fill: "#fff",
                    fontSize: "10",
                    fontWeight: "700",
                    fontFamily: "system-ui",
                    children: b + 1
                  }
                )
              ] }, `section-${b}`)),
              /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l(
                  "path",
                  {
                    d: d.emotionPathString + ` L ${((y = d.emotionPath[d.emotionPath.length - 1]) == null ? void 0 : y.x) || 0} ${d.padding.top + 60} L ${((c = d.emotionPath[0]) == null ? void 0 : c.x) || 0} ${d.padding.top + 60} Z`,
                    fill: "url(#emotionGrad)",
                    opacity: "0.1"
                  }
                ),
                /* @__PURE__ */ l(
                  "path",
                  {
                    d: d.emotionPathString,
                    fill: "none",
                    stroke: "url(#emotionGrad)",
                    strokeWidth: "2",
                    strokeDasharray: "4,4",
                    opacity: "0.6"
                  }
                ),
                d.emotionPath.map((p, b) => /* @__PURE__ */ l(
                  "circle",
                  {
                    cx: p.x,
                    cy: p.y,
                    r: 4,
                    fill: u(p.score),
                    opacity: "0.8"
                  },
                  `emotion-${b}`
                )),
                /* @__PURE__ */ l("text", { x: d.padding.left - 45, y: d.padding.top + 10, fill: t.textSecondary, fontSize: "9", fontFamily: "system-ui", children: "😊 Great" }),
                /* @__PURE__ */ l("text", { x: d.padding.left - 45, y: d.padding.top + 58, fill: t.textSecondary, fontSize: "9", fontFamily: "system-ui", children: "😞 Poor" })
              ] }),
              /* @__PURE__ */ l(
                "path",
                {
                  d: d.pathString,
                  fill: "none",
                  stroke: "url(#pathGradient)",
                  strokeWidth: "6",
                  strokeLinecap: "round",
                  opacity: "0.2",
                  filter: "url(#glow)"
                }
              ),
              /* @__PURE__ */ l(
                "path",
                {
                  d: d.pathString,
                  fill: "none",
                  stroke: "url(#pathGradient)",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  opacity: "0.8"
                }
              ),
              /* @__PURE__ */ l(
                "path",
                {
                  d: d.pathString,
                  fill: "none",
                  stroke: "rgba(255,255,255,0.8)",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeDasharray: "8,40",
                  opacity: "0.6",
                  children: /* @__PURE__ */ l("animate", { attributeName: "stroke-dashoffset", from: "48", to: "0", dur: "2s", repeatCount: "indefinite" })
                }
              ),
              d.nodes.map((p, b) => {
                const C = p.actors.length > 0 ? f(p.actors[0]) : p.sectionColor;
                return /* @__PURE__ */ S("g", { style: { cursor: "pointer" }, children: [
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: p.x,
                      cy: p.y,
                      r: 48 / 2 + 8,
                      fill: C,
                      opacity: "0.15",
                      filter: "url(#glow)"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: p.x,
                      cy: p.y,
                      r: 48 / 2 + 3,
                      fill: "none",
                      stroke: C,
                      strokeWidth: "2",
                      opacity: "0.5"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: p.x,
                      cy: p.y,
                      r: 48 / 2,
                      fill: `${t.canvasBg}`,
                      stroke: C,
                      strokeWidth: "2"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: p.x,
                      cy: p.y,
                      r: 48 / 2 - 4,
                      fill: "none",
                      stroke: u(p.score),
                      strokeWidth: "3",
                      strokeDasharray: `${p.score / 5 * 100} 100`,
                      transform: `rotate(-90 ${p.x} ${p.y})`,
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "text",
                    {
                      x: p.x,
                      y: p.y + 4,
                      textAnchor: "middle",
                      fill: t.textPrimary,
                      fontSize: "14",
                      fontWeight: "700",
                      fontFamily: "system-ui",
                      children: b + 1
                    }
                  ),
                  p.actors.length > 0 && /* @__PURE__ */ S("g", { children: [
                    /* @__PURE__ */ l(
                      "circle",
                      {
                        cx: p.x + 48 / 2 - 4,
                        cy: p.y - 48 / 2 + 4,
                        r: 10,
                        fill: C
                      }
                    ),
                    /* @__PURE__ */ l(
                      "text",
                      {
                        x: p.x + 48 / 2 - 4,
                        y: p.y - 48 / 2 + 8,
                        textAnchor: "middle",
                        fontSize: "10",
                        children: m(p.actors[0])
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(
                    "foreignObject",
                    {
                      x: p.x - 70,
                      y: p.y + 48 / 2 + 8,
                      width: "140",
                      height: "50",
                      children: /* @__PURE__ */ l("div", { style: {
                        textAlign: "center",
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        color: t.textPrimary,
                        lineHeight: 1.3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical"
                      }, children: p.name })
                    }
                  )
                ] }, p.id);
              })
            ]
          }
        ) }),
        /* @__PURE__ */ S("div", { style: {
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 24,
          padding: "8px 20px",
          background: "rgba(0,0,0,0.6)",
          borderRadius: 20,
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)"
        }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 20, height: 3, background: "linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)", borderRadius: 2 } }),
            /* @__PURE__ */ l("span", { style: { fontSize: "0.7rem", color: t.textSecondary }, children: "Journey Path" })
          ] }),
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 20, height: 2, background: "#22c55e", borderRadius: 2, opacity: 0.6 } }),
            /* @__PURE__ */ l("span", { style: { fontSize: "0.7rem", color: t.textSecondary }, children: "Sentiment" })
          ] }),
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 4 }, children: [
            [5, 4, 3, 2, 1].map((p) => /* @__PURE__ */ l("div", { style: { width: 8, height: 8, borderRadius: "50%", background: u(p) } }, p)),
            /* @__PURE__ */ l("span", { style: { fontSize: "0.7rem", color: t.textSecondary, marginLeft: 4 }, children: "Score" })
          ] })
        ] })
      ]
    }
  );
}
function fc({ nodes: o, edges: t, theme: r = $e.dark, sketchMode: n = !1, onLabelChange: i, onDeleteNodes: a, onPasteNodes: e, onEdgeLabelChange: s, onCreateConnection: h }) {
  const d = Be({ x: 50, y: 50 }), u = { start: { color: v.green, icon: "▶" }, end: { color: v.red, icon: "■" }, process: { color: v.blue, icon: "⚙️" }, decision: { color: v.orange, icon: "◇" }, action: { color: v.blue, icon: "▹" }, io: { color: v.purple, icon: "📦" }, default: { color: v.purple, icon: "📦" } }, f = (E) => d.getNodePosition(E.id, E.x, E.y), m = ye(() => {
    if (!o || o.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const E = o.map((M) => M.x), k = o.map((M) => M.y);
    return { x: Math.min(...E) - 100, y: Math.min(...k) - 80, width: Math.max(...E) - Math.min(...E) + 300, height: Math.max(...k) - Math.min(...k) + 200 };
  }, [o]), g = K(() => {
    const E = d.finishEditing();
    if (E.nodeId && E.newValue && i) {
      const k = o.find((M) => M.id === E.nodeId);
      k && k.label !== E.newValue && i(E.nodeId, k.label, E.newValue);
    }
  }, [d, o, i]), y = K(() => {
    const E = d.finishEdgeEditing();
    if (E.edgeId && s) {
      const k = t.find((M) => M.id === E.edgeId);
      s(E.edgeId, (k == null ? void 0 : k.label) || "", E.newValue);
    }
  }, [d, t, s]), c = K(() => {
    if (!o || o.length === 0) return;
    const E = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
    o.forEach((B) => {
      E.set(B.id, []), k.set(B.id, 0);
    }), t.forEach((B) => {
      E.has(B.source) && E.get(B.source).push(B.target), k.has(B.target) && k.set(B.target, k.get(B.target) + 1);
    });
    const M = o.filter((B) => k.get(B.id) === 0);
    M.length === 0 && M.push(o[0]);
    const A = /* @__PURE__ */ new Map(), I = M.map((B) => ({ id: B.id, level: 0 })), R = /* @__PURE__ */ new Set();
    for (; I.length > 0; ) {
      const { id: B, level: j } = I.shift();
      if (R.has(B)) continue;
      R.add(B), A.set(B, j), (E.get(B) || []).forEach((te) => {
        R.has(te) || I.push({ id: te, level: j + 1 });
      });
    }
    o.forEach((B) => {
      R.has(B.id) || A.set(B.id, 0);
    });
    const $ = /* @__PURE__ */ new Map();
    A.forEach((B, j) => {
      $.has(B) || $.set(B, []), $.get(B).push(j);
    });
    const D = 120, P = 180, _ = 100, z = {};
    $.forEach((B, j) => {
      const X = _ + j * D, ee = 300 - (B.length - 1) * P / 2;
      B.forEach((ae, F) => {
        z[ae] = {
          x: ee + F * P,
          y: X
        };
      });
    }), d.setPositions(z), d.fitToView(m);
  }, [o, t, d, m]), p = K(() => {
    const E = Array.from(d.selectedNodes);
    if (E.length < 3) return;
    const k = E.map(($) => {
      var D, P;
      return {
        id: $,
        x: ((D = d.positions[$]) == null ? void 0 : D.x) ?? ((P = o.find((_) => _.id === $)) == null ? void 0 : P.x) ?? 0
      };
    });
    k.sort(($, D) => $.x - D.x);
    const M = k[0].x, I = (k[k.length - 1].x - M) / (k.length - 1), R = { ...d.positions };
    k.forEach(($, D) => {
      var _, z;
      const P = ((_ = R[$.id]) == null ? void 0 : _.y) ?? ((z = o.find((B) => B.id === $.id)) == null ? void 0 : z.y) ?? 0;
      R[$.id] = { x: M + D * I, y: P };
    }), d.setPositions(R);
  }, [d, o]), b = K(() => {
    const E = Array.from(d.selectedNodes);
    if (E.length < 3) return;
    const k = E.map(($) => {
      var D, P;
      return {
        id: $,
        y: ((D = d.positions[$]) == null ? void 0 : D.y) ?? ((P = o.find((_) => _.id === $)) == null ? void 0 : P.y) ?? 0
      };
    });
    k.sort(($, D) => $.y - D.y);
    const M = k[0].y, I = (k[k.length - 1].y - M) / (k.length - 1), R = { ...d.positions };
    k.forEach(($, D) => {
      var _, z;
      const P = ((_ = R[$.id]) == null ? void 0 : _.x) ?? ((z = o.find((B) => B.id === $.id)) == null ? void 0 : z.x) ?? 0;
      R[$.id] = { x: P, y: M + D * I };
    }), d.setPositions(R);
  }, [d, o]);
  he(() => {
    if (d.dragging) {
      const E = f({ id: d.dragging });
      d.updateAlignmentGuides(d.dragging, E, o, f);
    }
  }, [d.dragging, d.positions, o, f, d.updateAlignmentGuides]), he(() => {
    const E = (k) => {
      const A = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? k.metaKey : k.ctrlKey;
      if (!(d.editingNode || d.editingEdge)) {
        if ((k.key === "Delete" || k.key === "Backspace") && d.selectedNodes.size > 0 && a) {
          k.preventDefault(), a(Array.from(d.selectedNodes)), d.clearSelection();
          return;
        }
        if (A && k.key.toLowerCase() === "c" && d.selectedNodes.size > 0) {
          k.preventDefault(), d.copySelectedNodes(o);
          return;
        }
        if (A && k.key.toLowerCase() === "v" && d.clipboard && e) {
          k.preventDefault();
          const I = d.pasteNodes();
          I && e(I);
          return;
        }
      }
    };
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [d, o, a, e]), he(() => {
    if (!d.isSelecting && d.selectionBox) {
      const E = d.getNodesInSelectionBox(o, d.selectionBox);
      E.length > 0 && d.setSelectedNodes(new Set(E));
    }
  }, [d.isSelecting, d.selectionBox, o, d]);
  const x = K((E) => {
    (E.target === d.canvasRef.current || E.target.classList.contains("canvas-bg")) && (d.clearSelection(), d.closeContextMenu(), d.closeEdgeContextMenu(), d.cancelEdgeEditing());
  }, [d]), C = K((E) => {
    const k = d.edgeStyles[E] || "solid", M = d.edgeArrowTypes[E] || "triangle", A = bc.find((R) => R.style === k) || bc[0];
    let I = "url(#flow-arr-triangle)";
    return M === "none" ? I = "" : M === "open" ? I = "url(#flow-arr-open)" : M === "diamond" ? I = "url(#flow-arr-diamond)" : M === "circle" && (I = "url(#flow-arr-circle)"), {
      strokeDasharray: A.dasharray,
      animation: A.animated ? "flowDash 1s linear infinite" : "none",
      markerEnd: I
    };
  }, [d.edgeStyles, d.edgeArrowTypes]), w = K((E) => {
    const k = d.handleMouseUp();
    k && h && h(k.source, k.target);
  }, [d, h]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: r.canvasBg, borderRadius: 12, border: `1px solid ${r.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: `
        @keyframes flowDash { to { stroke-dashoffset: -20; } }
        .flow-node:hover .connection-port-right { opacity: 1 !important; transform: translateY(-50%) scale(1.1) !important; }
        .flow-node:hover .connection-port-left { opacity: 0.3 !important; }
        .edge-add-label:hover { opacity: 1 !important; }
      ` }),
    /* @__PURE__ */ S("div", { ref: d.canvasRef, className: "canvas-bg", onClick: x, onMouseDown: d.handleCanvasMouseDown, onMouseMove: d.handleMouseMove, onMouseUp: w, onMouseLeave: w, onTouchStart: d.handleTouchStart, onTouchMove: d.handleTouchMove, onTouchEnd: d.handleTouchEnd, onWheel: d.handleWheel, style: { width: "100%", height: "100%", cursor: d.isPanning || d.dragging ? "grabbing" : d.isConnecting ? "crosshair" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${r.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${r.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * d.zoom}px ${25 * d.zoom}px`, backgroundPosition: `${d.pan.x}px ${d.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible" }, children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ l("marker", { id: "flow-arr-triangle", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr-open", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 7 3 L 0 6", fill: "none", stroke: v.purple, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr-diamond", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 4 L 5 0 L 10 4 L 5 8 Z", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr-circle", markerWidth: "8", markerHeight: "8", refX: "7", refY: "4", orient: "auto", children: /* @__PURE__ */ l("circle", { cx: "4", cy: "4", r: "3", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.purple }) })
        ] }),
        /* @__PURE__ */ S("g", { transform: `translate(${d.pan.x}, ${d.pan.y}) scale(${d.zoom})`, children: [
          t.map((E) => {
            const k = o.find((O) => O.id === E.source), M = o.find((O) => O.id === E.target);
            if (!k || !M) return null;
            const A = f(k), I = f(M), R = I.x - A.x, $ = I.y - A.y, D = Math.sqrt(R * R + $ * $) || 1, P = k.type === "decision" ? 45 : 40, _ = M.type === "decision" ? 45 : 40, z = A.x + R / D * P, B = A.y + $ / D * 35, j = I.x - R / D * _, X = I.y - $ / D * 35, te = d.edgePathTypes[E.id] || "curved", ee = (z + j) / 2, ae = (B + X) / 2, F = te === "straight" ? 0 : Math.abs(R) > 50 ? Math.sign($ || 1) * 20 : 0;
            let N;
            if (te === "straight")
              N = `M ${z} ${B} L ${j} ${X}`;
            else if (te === "step")
              Math.abs(R) > Math.abs($) ? N = `M ${z} ${B} L ${ee} ${B} L ${ee} ${X} L ${j} ${X}` : N = `M ${z} ${B} L ${z} ${ae} L ${j} ${ae} L ${j} ${X}`;
            else if (te === "rounded")
              if (Math.abs(R) > Math.abs($)) {
                const de = X > B ? 1 : -1;
                N = `M ${z} ${B} L ${ee - 12} ${B} Q ${ee} ${B} ${ee} ${B + de * 12} L ${ee} ${X - de * 12} Q ${ee} ${X} ${ee + 12 * Math.sign(R)} ${X} L ${j} ${X}`;
              } else {
                const de = j > z ? 1 : -1;
                N = `M ${z} ${B} L ${z} ${ae - Math.sign($) * 12} Q ${z} ${ae} ${z + de * 12} ${ae} L ${j - de * 12} ${ae} Q ${j} ${ae} ${j} ${ae + Math.sign($) * 12} L ${j} ${X}`;
              }
            else
              N = n ? Dg(z, B, j, X, !0) : lr(z, B, j, X);
            const Z = d.editingEdge === E.id, T = Z ? d.edgeEditValue : E.label || "", W = C(E.id);
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: "transparent", strokeWidth: 20, style: { cursor: "pointer", pointerEvents: "stroke" }, onDoubleClick: (O) => {
                O.stopPropagation(), d.handleEdgeDoubleClick(O, E.id, E.label || "");
              }, onContextMenu: (O) => {
                O.preventDefault(), O.stopPropagation(), d.handleEdgeContextMenu(O, E.id);
              } }),
              !n && /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round", style: { pointerEvents: "none" } }),
              !n && /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round", style: { pointerEvents: "none" } }),
              /* @__PURE__ */ l("path", { d: N, fill: "none", stroke: n ? Ee.stroke : v.purple, strokeWidth: n ? 2.5 : 2, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: W.strokeDasharray, markerEnd: n ? "" : W.markerEnd, opacity: 0.9, style: { animation: n ? "none" : W.animation, pointerEvents: "none" } }),
              (T || Z) && /* @__PURE__ */ S("g", { style: { cursor: "pointer" }, onDoubleClick: (O) => {
                O.stopPropagation(), d.handleEdgeDoubleClick(O, E.id, E.label || "");
              }, children: [
                /* @__PURE__ */ l("rect", { x: ee - Math.max(T.length, 3) * 3.5 - 8, y: ae + F - 12, width: Math.max(T.length, 3) * 7 + 16, height: 22, rx: 11, fill: Z ? "rgba(124,58,237,0.3)" : "rgba(15,23,42,0.9)", stroke: Z ? v.purple : "rgba(124,58,237,0.4)", strokeWidth: Z ? 2 : 1 }),
                !Z && /* @__PURE__ */ l("text", { x: ee, y: ae + F + 4, textAnchor: "middle", fill: "#e0e0e0", fontSize: 10, fontWeight: 500, children: T })
              ] }),
              !T && !Z && /* @__PURE__ */ S("g", { style: { cursor: "pointer", opacity: 0 }, className: "edge-add-label", onDoubleClick: (O) => {
                O.stopPropagation(), d.handleEdgeDoubleClick(O, E.id, "");
              }, children: [
                /* @__PURE__ */ l("rect", { x: ee - 20, y: ae + F - 10, width: 40, height: 20, rx: 10, fill: "rgba(124,58,237,0.2)" }),
                /* @__PURE__ */ l("text", { x: ee, y: ae + F + 4, textAnchor: "middle", fill: "#888", fontSize: 9, children: "+ label" })
              ] })
            ] }, E.id);
          }),
          d.isSelecting && d.selectionBox && /* @__PURE__ */ l(
            "rect",
            {
              x: Math.min(d.selectionBox.startX, d.selectionBox.endX),
              y: Math.min(d.selectionBox.startY, d.selectionBox.endY),
              width: Math.abs(d.selectionBox.endX - d.selectionBox.startX),
              height: Math.abs(d.selectionBox.endY - d.selectionBox.startY),
              fill: "rgba(124,58,237,0.1)",
              stroke: v.purple,
              strokeWidth: 2,
              strokeDasharray: "5,5",
              style: { pointerEvents: "none" }
            }
          ),
          d.isConnecting && d.connectionStart && d.connectionEnd && /* @__PURE__ */ S("g", { style: { pointerEvents: "none" }, children: [
            /* @__PURE__ */ l(
              "line",
              {
                x1: d.connectionStart.x,
                y1: d.connectionStart.y,
                x2: d.connectionEnd.x,
                y2: d.connectionEnd.y,
                stroke: d.connectionTarget ? v.green : v.purple,
                strokeWidth: 3,
                strokeDasharray: "8,4",
                opacity: 0.8
              }
            ),
            /* @__PURE__ */ l(
              "circle",
              {
                cx: d.connectionEnd.x,
                cy: d.connectionEnd.y,
                r: 8,
                fill: d.connectionTarget ? v.green : v.purple,
                opacity: 0.6
              }
            )
          ] }),
          d.alignmentGuides.horizontal.map((E, k) => /* @__PURE__ */ l(
            "line",
            {
              x1: E.fromX,
              y1: E.y,
              x2: E.toX,
              y2: E.y,
              stroke: v.cyan,
              strokeWidth: 1,
              strokeDasharray: "4,4",
              opacity: 0.8,
              style: { pointerEvents: "none" }
            },
            `h-${k}`
          )),
          d.alignmentGuides.vertical.map((E, k) => /* @__PURE__ */ l(
            "line",
            {
              x1: E.x,
              y1: E.fromY,
              x2: E.x,
              y2: E.toY,
              stroke: v.cyan,
              strokeWidth: 1,
              strokeDasharray: "4,4",
              opacity: 0.8,
              style: { pointerEvents: "none" }
            },
            `v-${k}`
          ))
        ] })
      ] }),
      d.editingEdge && (() => {
        const E = t.find((_) => _.id === d.editingEdge);
        if (!E) return null;
        const k = o.find((_) => _.id === E.source), M = o.find((_) => _.id === E.target);
        if (!k || !M) return null;
        const A = f(k), I = f(M), R = (A.x + I.x) / 2, $ = (A.y + I.y) / 2, D = R * d.zoom + d.pan.x, P = $ * d.zoom + d.pan.y;
        return /* @__PURE__ */ l("div", { style: { position: "absolute", left: D - 50, top: P - 12, zIndex: 200 }, children: /* @__PURE__ */ l(
          "input",
          {
            autoFocus: !0,
            type: "text",
            value: d.edgeEditValue,
            onChange: (_) => d.setEdgeEditValue(_.target.value),
            onKeyDown: (_) => {
              _.key === "Enter" ? (_.preventDefault(), y()) : _.key === "Escape" && (_.preventDefault(), d.cancelEdgeEditing());
            },
            onBlur: y,
            placeholder: "Label",
            style: { width: 100, padding: "4px 8px", background: "rgba(15,23,42,0.95)", border: `2px solid ${v.purple}`, borderRadius: 8, color: "#fff", fontSize: "0.75rem", textAlign: "center", outline: "none" },
            onClick: (_) => _.stopPropagation(),
            onMouseDown: (_) => _.stopPropagation()
          }
        ) });
      })(),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${d.pan.x}px, ${d.pan.y}px) scale(${d.zoom})`, transformOrigin: "0 0" }, children: o.map((E) => {
        var de, Se;
        const k = f(E), M = u[E.type] || u.default, A = d.nodeColors[E.id] || E.color || M.color, I = d.dragging === E.id, R = d.selectedNodes.has(E.id), $ = d.editingNode === E.id, D = ((de = d.resizing) == null ? void 0 : de.nodeId) === E.id, _ = d.nodeShapes[E.id] || (E.type === "decision" ? "diamond" : ["start", "end"].includes(E.type) ? "pill" : "rounded"), z = _ === "diamond", B = d.getNodeSize(E.id), j = d.nodeSizes[E.id] ? B : {
          width: E.width || B.width,
          height: E.height || B.height
        }, X = _ === "circle", te = Math.max(j.width, j.height), ee = z ? 70 : X ? te : j.width, ae = z ? 70 : X ? te : j.height;
        let F = 12, N;
        _ === "rectangle" ? F = 0 : _ === "rounded" ? F = 12 : _ === "circle" ? F = "50%" : _ === "pill" ? F = ae / 2 : _ === "hexagon" && (N = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)");
        let Z = {
          position: "absolute",
          left: k.x - ee / 2,
          top: k.y - ae / 2,
          width: ee,
          height: ae,
          background: Pt(A, n),
          border: n ? `2px solid ${Ee.stroke}` : `2px solid ${A}`,
          borderRadius: F,
          clipPath: N,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: I ? "grabbing" : D ? "nwse-resize" : "grab",
          boxShadow: ot(A, I, R, n),
          transition: I || D ? "none" : "box-shadow 0.2s, background 0.2s",
          touchAction: "none",
          fontFamily: on(n)
        };
        z && (Z.left = k.x - 35, Z.top = k.y - 35, Z.transform = "rotate(45deg)", Z.borderRadius = 8, Z.clipPath = void 0);
        const T = d.isConnecting && d.connectionTarget === E.id, W = d.isConnecting && ((Se = d.connectionStart) == null ? void 0 : Se.nodeId) !== E.id, O = z ? 35 : ee / 2;
        return /* @__PURE__ */ S(
          "div",
          {
            className: "flow-node",
            onMouseDown: (fe) => d.handleNodeMouseDown(fe, E.id, k.x, k.y),
            onDoubleClick: (fe) => d.handleNodeDoubleClick(fe, E.id, E.label),
            onContextMenu: (fe) => d.handleNodeContextMenu(fe, E.id),
            onTouchStart: (fe) => d.handleNodeTouchStart(fe, E.id, k.x, k.y),
            onMouseEnter: () => W && d.setConnectionTargetNode(E.id),
            onMouseLeave: () => d.clearConnectionTarget(),
            style: {
              ...Z,
              boxShadow: T ? `0 0 0 4px ${v.green}, 0 0 30px ${v.green}50` : Z.boxShadow
            },
            children: [
              /* @__PURE__ */ S("div", { style: { transform: z ? "rotate(-45deg)" : "none", textAlign: "center", width: "100%", padding: "0 8px" }, children: [
                (d.nodeIcons[E.id] || M.icon) && /* @__PURE__ */ l("div", { style: { fontSize: "1.2rem" }, children: d.nodeIcons[E.id] || M.icon }),
                /* @__PURE__ */ l(
                  tt,
                  {
                    isEditing: $,
                    value: $ ? d.editValue : E.label,
                    onChange: d.setEditValue,
                    onFinish: g,
                    onCancel: d.cancelEditing,
                    style: { fontSize: n ? "1rem" : "0.8rem", fontWeight: 600, color: n ? Ee.stroke : r.textPrimary }
                  }
                )
              ] }),
              /* @__PURE__ */ l(
                "div",
                {
                  className: "connection-port connection-port-right",
                  onMouseDown: (fe) => d.handlePortMouseDown(fe, E.id, k.x + O, k.y),
                  style: {
                    position: "absolute",
                    right: -8,
                    top: "50%",
                    transform: z ? "rotate(-45deg) translateY(-50%)" : "translateY(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: v.purple,
                    border: "3px solid rgba(255,255,255,0.9)",
                    cursor: "crosshair",
                    opacity: 0,
                    transition: "opacity 0.15s, transform 0.15s",
                    zIndex: 10
                  },
                  title: "Drag to connect"
                }
              ),
              /* @__PURE__ */ l(
                "div",
                {
                  className: "connection-port connection-port-left",
                  style: {
                    position: "absolute",
                    left: -8,
                    top: "50%",
                    transform: z ? "rotate(-45deg) translateY(-50%)" : "translateY(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: W ? v.green : v.blue,
                    border: "3px solid rgba(255,255,255,0.9)",
                    cursor: "pointer",
                    opacity: W ? 1 : 0,
                    transition: "opacity 0.15s, transform 0.15s",
                    zIndex: 10,
                    pointerEvents: W ? "auto" : "none"
                  }
                }
              ),
              R && !z && /* @__PURE__ */ S(yt, { children: [
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "resize-handle resize-handle-se",
                    onMouseDown: (fe) => d.handleResizeStart(fe, E.id, "se"),
                    style: {
                      position: "absolute",
                      right: -6,
                      bottom: -6,
                      width: 12,
                      height: 12,
                      background: v.purple,
                      border: "2px solid #fff",
                      borderRadius: 2,
                      cursor: "nwse-resize",
                      zIndex: 20
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "resize-handle resize-handle-e",
                    onMouseDown: (fe) => d.handleResizeStart(fe, E.id, "e"),
                    style: {
                      position: "absolute",
                      right: -5,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 10,
                      height: 20,
                      background: v.purple,
                      border: "2px solid #fff",
                      borderRadius: 2,
                      cursor: "ew-resize",
                      zIndex: 20,
                      opacity: 0.7
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "resize-handle resize-handle-s",
                    onMouseDown: (fe) => d.handleResizeStart(fe, E.id, "s"),
                    style: {
                      position: "absolute",
                      bottom: -5,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 10,
                      background: v.purple,
                      border: "2px solid #fff",
                      borderRadius: 2,
                      cursor: "ns-resize",
                      zIndex: 20,
                      opacity: 0.7
                    }
                  }
                )
              ] })
            ]
          },
          E.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => d.setZoom((E) => Math.min(E * 1.2, 2.5)), onZoomOut: () => d.setZoom((E) => Math.max(E * 0.8, 0.3)), onFit: () => d.fitToView(m), onReset: d.resetView, zoom: d.zoom, snapToGrid: d.snapToGrid, onToggleSnap: () => d.setSnapToGrid((E) => !E), onAutoLayout: c }),
    d.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", gap: 8, zIndex: 100 }, children: [
      /* @__PURE__ */ S("div", { style: { background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem" }, children: [
        d.selectedNodes.size,
        " selected • ⌘C copy • ⌘V paste • Del remove"
      ] }),
      d.selectedNodes.size >= 3 && /* @__PURE__ */ S("div", { style: { display: "flex", gap: 4 }, children: [
        /* @__PURE__ */ S(
          "button",
          {
            onClick: p,
            title: "Distribute horizontally",
            style: {
              padding: "4px 8px",
              background: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(124,58,237,0.5)",
              borderRadius: 6,
              color: "#fff",
              fontSize: "0.7rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4
            },
            children: [
              /* @__PURE__ */ l("span", { style: { transform: "rotate(90deg)", fontSize: "0.9rem" }, children: "⋮" }),
              " H"
            ]
          }
        ),
        /* @__PURE__ */ S(
          "button",
          {
            onClick: b,
            title: "Distribute vertically",
            style: {
              padding: "4px 8px",
              background: "rgba(0,0,0,0.8)",
              border: "1px solid rgba(124,58,237,0.5)",
              borderRadius: 6,
              color: "#fff",
              fontSize: "0.7rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4
            },
            children: [
              /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem" }, children: "⋮" }),
              " V"
            ]
          }
        )
      ] })
    ] }),
    d.clipboard && d.clipboard.length > 0 && d.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      d.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    d.contextMenu && /* @__PURE__ */ l(
      st,
      {
        x: d.contextMenu.x,
        y: d.contextMenu.y,
        nodeId: d.contextMenu.nodeId,
        currentIcon: d.nodeIcons[d.contextMenu.nodeId],
        currentShape: d.nodeShapes[d.contextMenu.nodeId],
        onSelectColor: d.setNodeColor,
        onSelectIcon: d.setNodeIcon,
        onSelectShape: d.setNodeShape,
        onClose: d.closeContextMenu,
        theme: r
      }
    ),
    d.edgeContextMenu && /* @__PURE__ */ l(
      i2,
      {
        x: d.edgeContextMenu.x,
        y: d.edgeContextMenu.y,
        edgeId: d.edgeContextMenu.edgeId,
        currentStyle: d.edgeStyles[d.edgeContextMenu.edgeId],
        currentArrowType: d.edgeArrowTypes[d.edgeContextMenu.edgeId],
        currentPathType: d.edgePathTypes[d.edgeContextMenu.edgeId],
        onSelectStyle: d.setEdgeStyle,
        onSelectArrowType: d.setEdgeArrowType,
        onSelectPathType: d.setEdgePathType,
        onClose: d.closeEdgeContextMenu,
        theme: r
      }
    )
  ] });
}
function h2({ tables: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be(), s = ye(() => {
    const m = Math.min(3, Math.ceil(Math.sqrt(o.length)));
    return o.map((g, y) => ({ ...g, id: g.name, label: g.name, defaultX: y % m * 280 + 60, defaultY: Math.floor(y / m) * 250 + 60, width: 230 }));
  }, [o]), h = (m) => e.getNodePosition(m.name, m.defaultX, m.defaultY), d = ye(() => {
    if (!s || s.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const m = s.map((y) => y.defaultX), g = s.map((y) => y.defaultY);
    return { x: Math.min(...m) - 60, y: Math.min(...g) - 60, width: Math.max(...m) - Math.min(...m) + 300, height: Math.max(...g) - Math.min(...g) + 300 };
  }, [s]), u = K(() => {
    const m = e.finishEditing();
    if (m.nodeId && m.newValue && n) {
      const g = s.find((y) => y.name === m.nodeId);
      g && g.name !== m.newValue && n(m.nodeId, g.name, m.newValue);
    }
  }, [e, s, n]);
  he(() => {
    const m = (g) => {
      const c = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? g.metaKey : g.ctrlKey;
      if (!e.editingNode) {
        if ((g.key === "Delete" || g.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          g.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (c && g.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          g.preventDefault(), e.copySelectedNodes(s);
          return;
        }
        if (c && g.key.toLowerCase() === "v" && e.clipboard && a) {
          g.preventDefault();
          const p = e.pasteNodes();
          p && a(p);
          return;
        }
      }
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [e, s, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const m = e.getNodesInSelectionBox(s.map((g) => ({ ...g, x: g.defaultX, y: g.defaultY })), e.selectionBox);
      m.length > 0 && e.setSelectedNodes(new Set(m));
    }
  }, [e.isSelecting, e.selectionBox, s, e]);
  const f = K((m) => {
    (m.target === e.canvasRef.current || m.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: f, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "erd-crow", markerWidth: "12", markerHeight: "10", refX: "10", refY: "5", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 5 L 8 0 M 0 5 L 8 5 M 0 5 L 8 10", stroke: v.blue, strokeWidth: "2", strokeLinecap: "round", fill: "none" }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          s.flatMap((m) => {
            var g;
            return ((g = m.fields) == null ? void 0 : g.filter((y) => y.fk && y.references).map((y, c) => {
              const p = s.find((A) => A.name === y.references);
              if (!p) return null;
              const b = h(m), x = h(p), C = b.y + 44 + c * 30 + 15, w = b.x + m.width, E = x.x, k = x.y + 22, M = `M ${w} ${C} C ${(w + E) / 2} ${C}, ${(w + E) / 2} ${k}, ${E} ${k}`;
              return /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("path", { d: M, fill: "none", stroke: v.blue, strokeWidth: 8, strokeOpacity: 0.1, strokeLinecap: "round" }),
                /* @__PURE__ */ l("path", { d: M, fill: "none", stroke: v.blue, strokeWidth: 4, strokeOpacity: 0.25, strokeLinecap: "round" }),
                /* @__PURE__ */ l("path", { d: M, fill: "none", stroke: v.blue, strokeWidth: 2.5, markerEnd: "url(#erd-crow)", opacity: 0.95, strokeLinecap: "round" })
              ] }, `${m.name}-${y.name}`);
            })) || [];
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l(
            "rect",
            {
              x: Math.min(e.selectionBox.startX, e.selectionBox.endX),
              y: Math.min(e.selectionBox.startY, e.selectionBox.endY),
              width: Math.abs(e.selectionBox.endX - e.selectionBox.startX),
              height: Math.abs(e.selectionBox.endY - e.selectionBox.startY),
              fill: "rgba(124,58,237,0.1)",
              stroke: v.purple,
              strokeWidth: 2,
              strokeDasharray: "5,5",
              style: { pointerEvents: "none" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: s.map((m) => {
        var x;
        const g = h(m), y = e.dragging === m.name, c = e.selectedNodes.has(m.name), p = e.editingNode === m.name, b = e.nodeColors[m.name] || v.orange;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (C) => e.handleNodeMouseDown(C, m.name, g.x, g.y),
            onDoubleClick: (C) => e.handleNodeDoubleClick(C, m.name, m.name),
            onContextMenu: (C) => e.handleNodeContextMenu(C, m.name),
            onTouchStart: (C) => e.handleNodeTouchStart(C, m.name, g.x, g.y),
            style: { position: "absolute", left: g.x, top: g.y, width: m.width, background: `linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${b}`, borderRadius: 12, overflow: "hidden", cursor: y ? "grabbing" : "grab", boxShadow: ot(b, y, c), transition: y ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { padding: "12px 16px", background: `linear-gradient(135deg, ${b}, ${b}dd)` }, children: /* @__PURE__ */ S("span", { style: { color: "#fff", fontWeight: 700, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 6 }, children: [
                "📊",
                /* @__PURE__ */ l(
                  tt,
                  {
                    isEditing: p,
                    value: p ? e.editValue : m.name,
                    onChange: e.setEditValue,
                    onFinish: u,
                    onCancel: e.cancelEditing,
                    style: { color: "#fff", fontWeight: 700, fontSize: r ? "1.1rem" : "0.95rem" }
                  }
                )
              ] }) }),
              /* @__PURE__ */ l("div", { style: { padding: "8px 0" }, children: (x = m.fields) == null ? void 0 : x.map((C, w) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", padding: "7px 16px", borderBottom: w < m.fields.length - 1 ? `1px solid ${t.border}` : "none", gap: 10 }, children: [
                /* @__PURE__ */ l("span", { style: { width: 20, fontSize: "0.8rem" }, children: C.key ? "🔑" : C.fk ? "🔗" : "" }),
                /* @__PURE__ */ l("span", { style: { flex: 1, color: C.key ? b : C.fk ? v.blue : t.textPrimary, fontSize: "0.85rem", fontWeight: C.key ? 600 : 400 }, children: C.name }),
                /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem", fontFamily: "monospace" }, children: C.type })
              ] }, w)) })
            ]
          },
          m.name
        );
      }) })
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((m) => Math.min(m * 1.2, 2)), onZoomOut: () => e.setZoom((m) => Math.max(m * 0.8, 0.3)), onFit: () => e.fitToView(d), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((m) => !m) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      st,
      {
        x: e.contextMenu.x,
        y: e.contextMenu.y,
        nodeId: e.contextMenu.nodeId,
        currentIcon: e.nodeIcons[e.contextMenu.nodeId],
        currentShape: e.nodeShapes[e.contextMenu.nodeId],
        onSelectColor: e.setNodeColor,
        onSelectIcon: e.setNodeIcon,
        onSelectShape: e.setNodeShape,
        onClose: e.closeContextMenu,
        theme: t
      }
    )
  ] });
}
function f2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be(), s = { router: "📡", switch: "🔀", firewall: "🛡️", server: "🖥️", computer: "💻", cloud: "☁️", hub: "🔌" }, h = ye(() => {
    const g = Math.ceil(Math.sqrt(o.devices.length));
    return { devices: o.devices.map((y, c) => ({ ...y, defaultX: 100 + c % g * 200, defaultY: 100 + Math.floor(c / g) * 170 })), connections: o.connections };
  }, [o]), d = (g) => e.getNodePosition(g.id, g.defaultX, g.defaultY), u = ye(() => {
    if (!h.devices || h.devices.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const g = h.devices.map((c) => c.defaultX), y = h.devices.map((c) => c.defaultY);
    return { x: Math.min(...g) - 60, y: Math.min(...y) - 60, width: Math.max(...g) - Math.min(...g) + 200, height: Math.max(...y) - Math.min(...y) + 200 };
  }, [h]), f = K(() => {
    const g = e.finishEditing();
    if (g.nodeId && g.newValue && n) {
      const y = h.devices.find((c) => c.id === g.nodeId);
      y && y.label !== g.newValue && n(g.nodeId, y.label, g.newValue);
    }
  }, [e, h.devices, n]);
  he(() => {
    const g = (y) => {
      const p = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? y.metaKey : y.ctrlKey;
      if (!e.editingNode) {
        if ((y.key === "Delete" || y.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          y.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (p && y.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          y.preventDefault(), e.copySelectedNodes(h.devices);
          return;
        }
        if (p && y.key.toLowerCase() === "v" && e.clipboard && a) {
          y.preventDefault();
          const b = e.pasteNodes();
          b && a(b);
          return;
        }
      }
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, h.devices, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const g = e.getNodesInSelectionBox(h.devices.map((y) => ({ ...y, x: y.defaultX, y: y.defaultY })), e.selectionBox);
      g.length > 0 && e.setSelectedNodes(new Set(g));
    }
  }, [e.isSelecting, e.selectionBox, h.devices, e]);
  const m = K((g) => {
    (g.target === e.canvasRef.current || g.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: m, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        h.connections.map((g) => {
          const y = h.devices.find((I) => I.id === g.source), c = h.devices.find((I) => I.id === g.target);
          if (!y || !c) return null;
          const p = d(y), b = d(c), x = p.x + 65, C = p.y + 55, w = b.x + 65, E = b.y + 55, k = lr(x, C, w, E), M = (x + w) / 2, A = (C + E) / 2;
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.blue, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.blue, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.blue, strokeWidth: 2.5, opacity: 0.95, strokeLinecap: "round" }),
            g.protocol && /* @__PURE__ */ S(yt, { children: [
              /* @__PURE__ */ l("rect", { x: M - 28, y: A - 10, width: 56, height: 18, rx: 4, fill: "rgba(0,0,0,0.8)" }),
              /* @__PURE__ */ l("text", { x: M, y: A + 3, textAnchor: "middle", fill: v.blue, fontSize: 10, children: g.protocol })
            ] })
          ] }, g.id);
        }),
        e.isSelecting && e.selectionBox && /* @__PURE__ */ l(
          "rect",
          {
            x: Math.min(e.selectionBox.startX, e.selectionBox.endX),
            y: Math.min(e.selectionBox.startY, e.selectionBox.endY),
            width: Math.abs(e.selectionBox.endX - e.selectionBox.startX),
            height: Math.abs(e.selectionBox.endY - e.selectionBox.startY),
            fill: "rgba(124,58,237,0.1)",
            stroke: v.purple,
            strokeWidth: 2,
            strokeDasharray: "5,5",
            style: { pointerEvents: "none" }
          }
        )
      ] }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: h.devices.map((g) => {
        const y = d(g), c = e.dragging === g.id, p = e.selectedNodes.has(g.id), b = e.editingNode === g.id, x = e.nodeColors[g.id] || v.blue;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (C) => e.handleNodeMouseDown(C, g.id, y.x, y.y),
            onDoubleClick: (C) => e.handleNodeDoubleClick(C, g.id, g.label),
            onContextMenu: (C) => e.handleNodeContextMenu(C, g.id),
            onTouchStart: (C) => e.handleNodeTouchStart(C, g.id, y.x, y.y),
            style: { position: "absolute", left: y.x, top: y.y, width: 130, background: Pt(x), border: `2px solid ${x}`, borderRadius: 12, padding: 12, textAlign: "center", cursor: c ? "grabbing" : "grab", boxShadow: ot(x, c, p), transition: c ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { fontSize: "2.5rem", marginBottom: 6 }, children: e.nodeIcons[g.id] || s[g.type] || "📦" }),
              /* @__PURE__ */ l(
                tt,
                {
                  isEditing: b,
                  value: b ? e.editValue : g.label,
                  onChange: e.setEditValue,
                  onFinish: f,
                  onCancel: e.cancelEditing,
                  style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? Ee.stroke : t.textPrimary }
                }
              ),
              g.ip && /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: t.textSecondary, fontFamily: "monospace", marginTop: 4 }, children: g.ip })
            ]
          },
          g.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((g) => Math.min(g * 1.2, 2)), onZoomOut: () => e.setZoom((g) => Math.max(g * 0.8, 0.3)), onFit: () => e.fitToView(u), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((g) => !g) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      st,
      {
        x: e.contextMenu.x,
        y: e.contextMenu.y,
        nodeId: e.contextMenu.nodeId,
        currentIcon: e.nodeIcons[e.contextMenu.nodeId],
        currentShape: e.nodeShapes[e.contextMenu.nodeId],
        onSelectColor: e.setNodeColor,
        onSelectIcon: e.setNodeIcon,
        onSelectShape: e.setNodeShape,
        onClose: e.closeContextMenu,
        theme: t
      }
    )
  ] });
}
function g2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be(), { classes: s = [], relationships: h = [] } = o, d = ye(() => {
    const c = Math.min(3, Math.ceil(Math.sqrt(s.length)));
    return s.map((p, b) => ({ ...p, label: p.name, defaultX: 80 + b % c * 300, defaultY: 80 + Math.floor(b / c) * 220, width: 230 }));
  }, [s]), u = (c) => e.getNodePosition(c.id, c.defaultX, c.defaultY), f = ye(() => {
    if (!d || d.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const c = d.map((b) => b.defaultX), p = d.map((b) => b.defaultY);
    return { x: Math.min(...c) - 60, y: Math.min(...p) - 60, width: Math.max(...c) - Math.min(...c) + 320, height: Math.max(...p) - Math.min(...p) + 280 };
  }, [d]), m = (c) => {
    const b = c.properties.length > 0 ? c.properties.length * 22 + 16 : 30, x = c.methods.length > 0 ? c.methods.length * 22 + 16 : 30;
    return 38 + b + x;
  }, g = K(() => {
    const c = e.finishEditing();
    if (c.nodeId && c.newValue && n) {
      const p = d.find((b) => b.id === c.nodeId);
      p && p.name !== c.newValue && n(c.nodeId, p.name, c.newValue);
    }
  }, [e, d, n]);
  he(() => {
    const c = (p) => {
      const x = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? p.metaKey : p.ctrlKey;
      if (!e.editingNode) {
        if ((p.key === "Delete" || p.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          p.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (x && p.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          p.preventDefault(), e.copySelectedNodes(d);
          return;
        }
        if (x && p.key.toLowerCase() === "v" && e.clipboard && a) {
          p.preventDefault();
          const C = e.pasteNodes();
          C && a(C);
          return;
        }
      }
    };
    return window.addEventListener("keydown", c), () => window.removeEventListener("keydown", c);
  }, [e, d, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const c = e.getNodesInSelectionBox(d.map((p) => ({ ...p, x: p.defaultX, y: p.defaultY })), e.selectionBox);
      c.length > 0 && e.setSelectedNodes(new Set(c));
    }
  }, [e.isSelecting, e.selectionBox, d, e]);
  const y = K((c) => {
    (c.target === e.canvasRef.current || c.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: y, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ l("marker", { id: "class-inherit", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 10 4 L 0 8 Z", fill: "none", stroke: v.purple, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
          /* @__PURE__ */ l("marker", { id: "class-assoc", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.blue }) }),
          /* @__PURE__ */ l("marker", { id: "class-diamond", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 4 L 5 0 L 10 4 L 5 8 Z", fill: v.orange }) })
        ] }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((c, p) => {
            const b = d.find((N) => N.id === c.from || N.name === c.from), x = d.find((N) => N.id === c.to || N.name === c.to);
            if (!b || !x) return null;
            const C = u(b), w = u(x), E = m(b), k = m(x), M = C.x + b.width / 2, A = C.y + E / 2, I = w.x + x.width / 2, R = w.y + k / 2, $ = I - M, D = R - A, P = Math.sqrt($ * $ + D * D) || 1, _ = M + $ / P * (b.width / 2 + 5), z = A + D / P * (E / 2 + 5), B = I - $ / P * (x.width / 2 + 15), j = R - D / P * (k / 2 + 5), X = (_ + B) / 2, te = (z + j) / 2, ee = c.type === "extends" ? "url(#class-inherit)" : c.type === "composition" ? "url(#class-diamond)" : "url(#class-assoc)", ae = c.type === "extends" ? v.purple : c.type === "composition" ? v.orange : v.blue, F = lr(_, z, B, j);
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: F, fill: "none", stroke: ae, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: F, fill: "none", stroke: ae, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: F, fill: "none", stroke: ae, strokeWidth: 2.5, markerEnd: ee, opacity: 0.95, strokeLinecap: "round" }),
              c.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: X - c.label.length * 3.5 - 6, y: te - 10, width: c.label.length * 7 + 12, height: 18, rx: 4, fill: "rgba(0,0,0,0.8)" }),
                /* @__PURE__ */ l("text", { x: X, y: te + 4, textAnchor: "middle", fill: ae, fontSize: 10, children: c.label })
              ] })
            ] }, p);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l(
            "rect",
            {
              x: Math.min(e.selectionBox.startX, e.selectionBox.endX),
              y: Math.min(e.selectionBox.startY, e.selectionBox.endY),
              width: Math.abs(e.selectionBox.endX - e.selectionBox.startX),
              height: Math.abs(e.selectionBox.endY - e.selectionBox.startY),
              fill: "rgba(124,58,237,0.1)",
              stroke: v.purple,
              strokeWidth: 2,
              strokeDasharray: "5,5",
              style: { pointerEvents: "none" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: d.map((c) => {
        const p = u(c), b = e.dragging === c.id, x = e.selectedNodes.has(c.id), C = e.editingNode === c.id, w = e.nodeColors[c.id] || v.purple;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (E) => e.handleNodeMouseDown(E, c.id, p.x, p.y),
            onDoubleClick: (E) => e.handleNodeDoubleClick(E, c.id, c.name),
            onContextMenu: (E) => e.handleNodeContextMenu(E, c.id),
            onTouchStart: (E) => e.handleNodeTouchStart(E, c.id, p.x, p.y),
            style: { position: "absolute", left: p.x, top: p.y, width: c.width, background: `linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${w}`, borderRadius: 8, overflow: "hidden", cursor: b ? "grabbing" : "grab", boxShadow: ot(w, b, x), transition: b ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { padding: "10px 14px", background: `linear-gradient(135deg, ${w}40, ${w}20)`, borderBottom: `1px solid ${w}` }, children: /* @__PURE__ */ l(
                tt,
                {
                  isEditing: C,
                  value: C ? e.editValue : c.name,
                  onChange: e.setEditValue,
                  onFinish: g,
                  onCancel: e.cancelEditing,
                  style: { color: r ? Ee.stroke : t.textPrimary, fontWeight: 700, fontSize: r ? "1rem" : "inherit" }
                }
              ) }),
              /* @__PURE__ */ S("div", { style: { padding: "8px 14px", borderBottom: `1px solid ${t.border}` }, children: [
                c.properties.map((E, k) => /* @__PURE__ */ S("div", { style: { fontSize: "0.8rem", color: t.textSecondary }, children: [
                  /* @__PURE__ */ l("span", { style: { color: v.orange }, children: E.visibility }),
                  " ",
                  E.name,
                  ": ",
                  E.type
                ] }, k)),
                c.properties.length === 0 && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textMuted }, children: "No properties" })
              ] }),
              /* @__PURE__ */ S("div", { style: { padding: "8px 14px" }, children: [
                c.methods.map((E, k) => /* @__PURE__ */ S("div", { style: { fontSize: "0.8rem", color: t.textSecondary }, children: [
                  /* @__PURE__ */ l("span", { style: { color: v.green }, children: E.visibility }),
                  " ",
                  E.name,
                  "(): ",
                  E.returns
                ] }, k)),
                c.methods.length === 0 && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textMuted }, children: "No methods" })
              ] })
            ]
          },
          c.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((c) => Math.min(c * 1.2, 2)), onZoomOut: () => e.setZoom((c) => Math.max(c * 0.8, 0.3)), onFit: () => e.fitToView(f), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((c) => !c) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      st,
      {
        x: e.contextMenu.x,
        y: e.contextMenu.y,
        nodeId: e.contextMenu.nodeId,
        currentIcon: e.nodeIcons[e.contextMenu.nodeId],
        currentShape: e.nodeShapes[e.contextMenu.nodeId],
        onSelectColor: e.setNodeColor,
        onSelectIcon: e.setNodeIcon,
        onSelectShape: e.setNodeShape,
        onClose: e.closeContextMenu,
        theme: t
      }
    )
  ] });
}
function m2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 0, y: 50 }), s = ye(() => {
    const { nodes: m, edges: g } = o;
    if (!m.length) return { nodes: [], edges: g };
    const y = {};
    m.forEach((w) => {
      y[w.id] = [];
    }), g.forEach((w) => {
      y[w.source] && y[w.source].push(w.target);
    });
    const c = new Set(g.map((w) => w.target)), p = m.find((w) => !c.has(w.id));
    if (!p) return { nodes: m, edges: g };
    const b = (w) => {
      const E = y[w] || [];
      return E.length === 0 ? 180 : Math.max(180, E.map(b).reduce((k, M) => k + M + 40, -40));
    }, x = [], C = (w, E, k, M) => {
      const A = m.find(($) => $.id === w);
      if (!A) return;
      const I = y[w] || [], R = b(w);
      if (x.push({ ...A, defaultX: E, defaultY: k, level: M, color: [v.purple, v.blue, v.green, v.orange][Math.min(M, 3)] }), I.length) {
        let $ = E - R / 2;
        I.forEach((D) => {
          const P = b(D);
          C(D, $ + P / 2, k + 120, M + 1), $ += P + 40;
        });
      }
    };
    return C(p.id, b(p.id) / 2 + 100, 80, 0), { nodes: x, edges: g };
  }, [o]), h = (m) => e.getNodePosition(m.id, m.defaultX, m.defaultY), d = K(() => {
    const m = e.finishEditing();
    if (m.nodeId && m.newValue !== void 0 && n) {
      const g = s.nodes.find((y) => y.id === m.nodeId);
      g && g.label !== m.newValue && n(m.nodeId, g.label, m.newValue);
    }
  }, [e, s.nodes, n]);
  he(() => {
    const m = (g) => {
      const c = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? g.metaKey : g.ctrlKey;
      if (!e.editingNode) {
        if ((g.key === "Delete" || g.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          g.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (c && g.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          g.preventDefault(), e.copySelectedNodes(s.nodes);
          return;
        }
        if (c && g.key.toLowerCase() === "v" && e.clipboard && a) {
          g.preventDefault();
          const p = e.pasteNodes();
          p && a(p);
          return;
        }
      }
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [e, s.nodes, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const m = e.getNodesInSelectionBox(s.nodes.map((g) => ({ ...g, x: g.defaultX, y: g.defaultY })), e.selectionBox);
      m.length > 0 && e.setSelectedNodes(new Set(m));
    }
  }, [e.isSelecting, e.selectionBox, s.nodes, e]);
  const u = K((m) => {
    (m.target === e.canvasRef.current || m.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), f = ye(() => {
    if (!s.nodes || s.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const m = s.nodes.map((y) => y.defaultX), g = s.nodes.map((y) => y.defaultY);
    return { x: Math.min(...m) - 60, y: Math.min(...g) - 60, width: Math.max(...m) - Math.min(...m) + 250, height: Math.max(...g) - Math.min(...g) + 180 };
  }, [s]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: u, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        s.edges.map((m) => {
          const g = s.nodes.find((M) => M.id === m.source), y = s.nodes.find((M) => M.id === m.target);
          if (!g || !y) return null;
          const c = h(g), p = h(y), b = c.x + 90, x = c.y + 60, C = p.x + 90, w = p.y, E = (x + w) / 2, k = `M ${b} ${x} L ${b} ${E} L ${C} ${E} L ${C} ${w}`;
          return /* @__PURE__ */ S("g", { children: [
            !r && /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round", strokeLinejoin: "round" }),
            !r && /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: r ? Ee.stroke : v.purple, strokeWidth: r ? 2.5 : 2, strokeDasharray: "6,4", opacity: r ? 1 : 0.7, strokeLinecap: "round", strokeLinejoin: "round" })
          ] }, m.id);
        }),
        e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
      ] }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: s.nodes.map((m) => {
        const g = h(m), y = e.dragging === m.id, c = e.selectedNodes.has(m.id);
        return /* @__PURE__ */ S("div", { onClick: (p) => e.handleNodeClick(p, m.id), onDoubleClick: (p) => e.handleNodeDoubleClick(p, m.id, m.label), onContextMenu: (p) => e.handleNodeContextMenu(p, m.id), onMouseDown: (p) => e.handleNodeMouseDown(p, m.id, g.x, g.y), onTouchStart: (p) => e.handleNodeTouchStart(p, m.id, g.x, g.y), style: { position: "absolute", left: g.x, top: g.y, width: 180, background: Pt(m.color, r), border: r ? `2px solid ${Ee.stroke}` : `2px solid ${c ? v.blue : m.color}`, borderRadius: 12, padding: "10px 8px", textAlign: "center", cursor: y ? "grabbing" : "grab", boxShadow: ot(m.color, y, c, r), transition: y ? "none" : "box-shadow 0.2s", touchAction: "none", overflow: "hidden", fontFamily: on(r) }, children: [
          e.editingNode === m.id ? /* @__PURE__ */ l(tt, { value: e.editingValue, onChange: (p) => e.setEditingValue(p), onFinish: d, style: { fontSize: r ? "1.1rem" : "0.95rem", fontWeight: 600, color: r ? Ee.stroke : t.textPrimary } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1.1rem" : "0.95rem", fontWeight: 600, color: r ? Ee.stroke : t.textPrimary }, children: m.label }),
          m.title && /* @__PURE__ */ l("div", { style: { fontSize: r ? "0.9rem" : "0.75rem", color: r ? Ee.accent : m.color, marginTop: 4 }, children: m.title })
        ] }, m.id);
      }) })
    ] }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "6px 12px", borderRadius: 6, fontSize: "0.75rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ S("span", { children: [
        e.selectedNodes.size,
        " selected"
      ] }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.6 }, children: "|" }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.7 }, children: "Del to delete • ⌘C copy • ⌘V paste" })
    ] }),
    e.clipboard && /* @__PURE__ */ S("div", { style: { position: "absolute", top: e.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${v.green}20`, padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem", color: v.green, border: `1px solid ${v.green}40` }, children: [
      e.clipboard.length,
      " node",
      e.clipboard.length > 1 ? "s" : "",
      " copied"
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((m) => Math.min(m * 1.2, 2)), onZoomOut: () => e.setZoom((m) => Math.max(m * 0.8, 0.3)), onFit: () => e.fitToView(f), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(st, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function y2({ data: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const { participants: n, messages: i, fragments: a = [], notes: e = [] } = o, s = Be({ x: 30, y: 20 }), h = (y) => s.getNodePosition(y.id, y.x, 0), d = 60, u = 110, f = ye(() => {
    if (!n || n.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const y = n.map((c) => c.x);
    return { x: Math.min(...y) - 60, y: 0, width: Math.max(...y) - Math.min(...y) + 200, height: 85 + i.length * d + 80 };
  }, [n, i]), m = (y) => u + y * d, g = {
    loop: v.blue,
    alt: v.orange,
    opt: v.green
  };
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: s.canvasRef, className: "canvas-bg", onMouseDown: s.handleCanvasMouseDown, onMouseMove: s.handleMouseMove, onMouseUp: s.handleMouseUp, onMouseLeave: s.handleMouseUp, onTouchStart: s.handleTouchStart, onTouchMove: s.handleTouchMove, onTouchEnd: s.handleTouchEnd, onWheel: s.handleWheel, style: { width: "100%", height: "100%", cursor: s.isPanning || s.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute" }, children: /* @__PURE__ */ S("g", { transform: `translate(${s.pan.x}, ${s.pan.y}) scale(${s.zoom})`, children: [
      a.map((y, c) => {
        if (!y || y.startIndex === void 0) return null;
        const p = g[y.type] || v.purple, b = i.filter(
          ($) => $.index >= y.startIndex && $.index < (y.endIndex || y.startIndex + 1)
        );
        if (b.length === 0) return null;
        const x = /* @__PURE__ */ new Set();
        b.forEach(($) => {
          x.add($.from), x.add($.to);
        });
        const C = n.filter(($) => x.has($.id));
        if (C.length === 0) return null;
        const w = C.map(($) => h($).x), E = Math.min(...w) - 10, k = Math.max(...w) + 130, M = Math.min(...b.map(($) => $.index)), A = Math.max(...b.map(($) => $.index)), I = m(M) - 35, R = (A - M + 1) * d + 25;
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l(
            "rect",
            {
              x: E,
              y: I,
              width: k - E,
              height: R,
              rx: 6,
              fill: `${p}08`,
              stroke: p,
              strokeWidth: 1.5,
              strokeDasharray: "6,3",
              opacity: 0.8
            }
          ),
          /* @__PURE__ */ l(
            "rect",
            {
              x: E,
              y: I,
              width: 50,
              height: 18,
              fill: p,
              rx: 4
            }
          ),
          /* @__PURE__ */ l(
            "text",
            {
              x: E + 25,
              y: I + 13,
              textAnchor: "middle",
              fill: "#fff",
              fontSize: 9,
              fontWeight: 700,
              children: y.type
            }
          ),
          /* @__PURE__ */ S(
            "text",
            {
              x: E + 55,
              y: I + 13,
              fill: p,
              fontSize: 9,
              fontWeight: 600,
              children: [
                "[",
                y.label,
                "]"
              ]
            }
          )
        ] }, `frag-${c}`);
      }),
      n.map((y, c) => {
        const p = h(y);
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("line", { x1: p.x + 60, y1: 85, x2: p.x + 60, y2: 85 + i.length * d + 40, stroke: v.purple, strokeWidth: 2, strokeDasharray: "4,4", opacity: 0.4 }),
          /* @__PURE__ */ S("defs", { children: [
            /* @__PURE__ */ S("linearGradient", { id: `seq-grad-${c}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ l("stop", { offset: "0%", stopColor: ge[c % ge.length], stopOpacity: "0.35" }),
              /* @__PURE__ */ l("stop", { offset: "100%", stopColor: ge[c % ge.length], stopOpacity: "0.12" })
            ] }),
            /* @__PURE__ */ l("filter", { id: `seq-shadow-${c}`, x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ l("feDropShadow", { dx: "0", dy: "4", stdDeviation: "8", floodColor: ge[c % ge.length], floodOpacity: "0.3" }) })
          ] }),
          /* @__PURE__ */ l("rect", { x: p.x, y: 30, width: 120, height: 45, rx: 8, fill: `url(#seq-grad-${c})`, stroke: ge[c % ge.length], strokeWidth: 2, filter: `url(#seq-shadow-${c})`, style: { cursor: s.dragging === y.id ? "grabbing" : "grab", touchAction: "none" }, onMouseDown: (b) => {
            b.stopPropagation(), s.handleNodeMouseDown(b, y.id, p.x, 0);
          }, onTouchStart: (b) => {
            b.stopPropagation(), s.handleNodeTouchStart(b, y.id, p.x, 0);
          } }),
          /* @__PURE__ */ l("text", { x: p.x + 60, y: 58, textAnchor: "middle", fill: t.textPrimary, fontSize: 13, fontWeight: 600, style: { pointerEvents: "none" }, children: y.label })
        ] }, y.id);
      }),
      i.map((y, c) => {
        const p = n.find((I) => I.id === y.from), b = n.find((I) => I.id === y.to);
        if (!p || !b) return null;
        const x = h(p), C = h(b), w = m(c), E = x.x + 60, k = C.x + 60, M = y.isReturn ? t.textSecondary : v.purple;
        return y.from === y.to ? /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: `seq-arr-${c}`, markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: M }) }) }),
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${E} ${w} L ${E + 40} ${w} L ${E + 40} ${w + 30} L ${E + 8} ${w + 30}`,
              stroke: M,
              strokeWidth: 2,
              fill: "none",
              markerEnd: `url(#seq-arr-${c})`
            }
          ),
          /* @__PURE__ */ l("rect", { x: E + 40 + 5, y: w - 10, width: Math.max(80, y.label.length * 6), height: 18, rx: 4, fill: "rgba(0,0,0,0.85)" }),
          /* @__PURE__ */ l("text", { x: E + 40 + 10, y: w + 3, fill: M, fontSize: 11, children: y.label })
        ] }, `msg-${c}`) : /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: `seq-arr-${c}`, markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: M }) }) }),
          /* @__PURE__ */ l("line", { x1: E, y1: w, x2: k - (E < k ? 8 : -8), y2: w, stroke: M, strokeWidth: 6, strokeOpacity: 0.1, strokeLinecap: "round" }),
          /* @__PURE__ */ l("line", { x1: E, y1: w, x2: k - (E < k ? 8 : -8), y2: w, stroke: M, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
          /* @__PURE__ */ l("line", { x1: E, y1: w, x2: k - (E < k ? 8 : -8), y2: w, stroke: M, strokeWidth: 2.5, strokeDasharray: y.isReturn ? "6,4" : null, markerEnd: `url(#seq-arr-${c})` }),
          /* @__PURE__ */ l("rect", { x: Math.min(E, k) + Math.abs(k - E) / 2 - 50, y: w - 20, width: 100, height: 18, rx: 4, fill: "rgba(0,0,0,0.85)" }),
          /* @__PURE__ */ l("text", { x: Math.min(E, k) + Math.abs(k - E) / 2, y: w - 7, textAnchor: "middle", fill: M, fontSize: 11, children: y.label })
        ] }, `msg-${c}`);
      }),
      e.map((y, c) => {
        const p = n.find((E) => E.id === y.participantId);
        if (!p) return null;
        const b = h(p), x = m(y.atMessageIndex) - 15, C = y.position === "right" ? b.x + 130 : b.x - 110, w = Math.max(100, y.text.length * 6 + 20);
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${C} ${x} L ${C + w - 10} ${x} L ${C + w} ${x + 10} L ${C + w} ${x + 40} L ${C} ${x + 40} Z`,
              fill: "#fef3c7",
              stroke: "#f59e0b",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${C + w - 10} ${x} L ${C + w - 10} ${x + 10} L ${C + w} ${x + 10}`,
              fill: "#fde68a",
              stroke: "#f59e0b",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ l(
            "text",
            {
              x: C + 8,
              y: x + 25,
              fill: "#92400e",
              fontSize: 11,
              fontWeight: 500,
              children: y.text
            }
          )
        ] }, `note-${c}`);
      })
    ] }) }) }),
    /* @__PURE__ */ l(We, { onZoomIn: () => s.setZoom((y) => Math.min(y * 1.2, 2)), onZoomOut: () => s.setZoom((y) => Math.max(y * 0.8, 0.3)), onFit: () => s.fitToView(f), onReset: s.resetView, zoom: s.zoom })
  ] });
}
function b2({ events: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const n = Be({ x: 30, y: 0 }), i = (e) => n.getNodePosition(e.id, e.x, e.y), a = ye(() => {
    if (!o || o.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const e = o.map((s) => s.x);
    return { x: Math.min(...e) - 60, y: 0, width: Math.max(...e) - Math.min(...e) + 280, height: 350 };
  }, [o]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: n.canvasRef, className: "canvas-bg", onMouseDown: n.handleCanvasMouseDown, onMouseMove: n.handleMouseMove, onMouseUp: n.handleMouseUp, onMouseLeave: n.handleMouseUp, onTouchStart: n.handleTouchStart, onTouchMove: n.handleTouchMove, onTouchEnd: n.handleTouchEnd, onWheel: n.handleWheel, style: { width: "100%", height: "100%", cursor: n.isPanning || n.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`, transformOrigin: "0 0", padding: "80px 50px" }, children: [
      /* @__PURE__ */ l("div", { style: { position: "absolute", top: 265, left: 50, width: o.length * 220, height: 4, background: `linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.green})`, borderRadius: 2 } }),
      o.map((e, s) => {
        const h = i(e), d = e.isMilestone ? v.orange : v.purple, u = n.dragging === e.id;
        return /* @__PURE__ */ S("div", { onMouseDown: (f) => n.handleNodeMouseDown(f, e.id, h.x, h.y), onTouchStart: (f) => n.handleNodeTouchStart(f, e.id, h.x, h.y), style: { position: "absolute", left: h.x, top: 80, width: 190, cursor: u ? "grabbing" : "grab", touchAction: "none" }, children: [
          /* @__PURE__ */ S("div", { style: { background: e.isMilestone ? `linear-gradient(135deg, ${v.orange}35, ${v.orange}12)` : Pt(d), border: `2px solid ${d}`, borderRadius: 12, padding: 16, textAlign: "center", minHeight: 110, boxShadow: ot(d, u, !1), transition: u ? "none" : "box-shadow 0.2s" }, children: [
            e.isMilestone && /* @__PURE__ */ l("div", { style: { fontSize: "1.3rem", marginBottom: 6 }, children: "🎯" }),
            /* @__PURE__ */ l("div", { style: { fontSize: "0.8rem", color: d, fontWeight: 600, marginBottom: 6 }, children: e.date }),
            /* @__PURE__ */ l("div", { style: { fontSize: "0.95rem", fontWeight: 700, color: t.textPrimary }, children: e.label }),
            e.description && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textSecondary, marginTop: 6 }, children: e.description })
          ] }),
          /* @__PURE__ */ l("div", { style: { position: "absolute", left: 93, top: "100%", width: 2, height: 35, background: d } }),
          /* @__PURE__ */ l("div", { style: { position: "absolute", left: 88, top: "calc(100% + 30px)", width: 14, height: 14, borderRadius: "50%", background: d, border: "3px solid #0f0f1a" } })
        ] }, e.id);
      })
    ] }) }),
    /* @__PURE__ */ l(We, { onZoomIn: () => n.setZoom((e) => Math.min(e * 1.2, 2)), onZoomOut: () => n.setZoom((e) => Math.max(e * 0.8, 0.3)), onFit: () => n.fitToView(a), onReset: n.resetView, zoom: n.zoom })
  ] });
}
function x2({ data: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const { commits: n, branches: i } = o, a = Be({ x: 20, y: 20 }), e = (d) => a.getNodePosition(d.id, d.x, d.y), s = ye(() => {
    if (!n || n.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const d = n.map((f) => f.x), u = n.map((f) => f.y);
    return { x: Math.min(...d) - 100, y: Math.min(...u) - 60, width: Math.max(...d) - Math.min(...d) + 200, height: Math.max(...u) - Math.min(...u) + 120 };
  }, [n]), h = ye(() => {
    const d = [];
    return i.forEach((u, f) => {
      const m = n.filter((g) => g.branch === u.name).sort((g, y) => g.index - y.index);
      for (let g = 0; g < m.length - 1; g++) d.push({ type: "seq", from: m[g], to: m[g + 1], color: ge[f % ge.length] });
      if (u.parentBranch) {
        i.findIndex((p) => p.name === u.parentBranch);
        const g = n.filter((p) => p.branch === u.parentBranch), y = g.find((p) => p.index === u.branchPoint - 1) || g[g.length - 1], c = m[0];
        y && c && d.push({ type: "branch", from: y, to: c, color: ge[f % ge.length] });
      }
    }), n.filter((u) => u.isMerge && u.mergeFrom).forEach((u) => {
      const f = i.findIndex((g) => g.name === u.mergeFrom), m = n.filter((g) => g.branch === u.mergeFrom).sort((g, y) => y.index - g.index)[0];
      m && d.push({ type: "merge", from: m, to: u, color: ge[f % ge.length] });
    }), d;
  }, [n, i]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: a.canvasRef, className: "canvas-bg", onMouseDown: a.handleCanvasMouseDown, onMouseMove: a.handleMouseMove, onMouseUp: a.handleMouseUp, onMouseLeave: a.handleMouseUp, onTouchStart: a.handleTouchStart, onTouchMove: a.handleTouchMove, onTouchEnd: a.handleTouchEnd, onWheel: a.handleWheel, style: { width: "100%", height: "100%", cursor: a.isPanning || a.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute" }, children: /* @__PURE__ */ S("g", { transform: `translate(${a.pan.x}, ${a.pan.y}) scale(${a.zoom})`, children: [
      i.map((d, u) => /* @__PURE__ */ l("text", { x: 30, y: d.y + 5, fill: ge[u % ge.length], fontSize: 14, fontWeight: 700, children: d.name }, d.name)),
      h.map((d, u) => {
        const f = e(d.from), m = e(d.to);
        if (d.type === "seq")
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("line", { x1: f.x, y1: f.y, x2: m.x, y2: m.y, stroke: d.color, strokeWidth: 10, strokeOpacity: 0.1, strokeLinecap: "round" }),
            /* @__PURE__ */ l("line", { x1: f.x, y1: f.y, x2: m.x, y2: m.y, stroke: d.color, strokeWidth: 6, strokeOpacity: 0.25, strokeLinecap: "round" }),
            /* @__PURE__ */ l("line", { x1: f.x, y1: f.y, x2: m.x, y2: m.y, stroke: d.color, strokeWidth: 4, strokeLinecap: "round" })
          ] }, u);
        const g = (f.x + m.x) / 2, y = `M ${f.x} ${f.y} C ${g} ${f.y}, ${g} ${m.y}, ${m.x} ${m.y}`;
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("path", { d: y, fill: "none", stroke: d.color, strokeWidth: 8, strokeOpacity: 0.1, strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: y, fill: "none", stroke: d.color, strokeWidth: 5, strokeOpacity: 0.25, strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: y, fill: "none", stroke: d.color, strokeWidth: 3, strokeDasharray: d.type === "merge" ? "6,4" : "none", opacity: 0.9, strokeLinecap: "round" })
        ] }, u);
      }),
      n.map((d) => {
        const u = e(d), f = i.findIndex((g) => g.name === d.branch), m = a.dragging === d.id;
        return /* @__PURE__ */ S("g", { style: { cursor: m ? "grabbing" : "grab", touchAction: "none" }, onMouseDown: (g) => {
          g.stopPropagation(), a.handleNodeMouseDown(g, d.id, u.x, u.y);
        }, onTouchStart: (g) => {
          g.stopPropagation(), a.handleNodeTouchStart(g, d.id, u.x, u.y);
        }, children: [
          /* @__PURE__ */ l("circle", { cx: u.x, cy: u.y, r: d.isMerge ? 14 : 12, fill: ge[f % ge.length], stroke: m ? "#fff" : t.canvasBg, strokeWidth: m ? 4 : 3 }),
          d.isMerge && /* @__PURE__ */ l("circle", { cx: u.x, cy: u.y, r: 6, fill: t.canvasBg }),
          /* @__PURE__ */ l("text", { x: u.x, y: u.y - 22, textAnchor: "middle", fill: t.textPrimary, fontSize: 12, fontWeight: 600, children: d.label })
        ] }, d.id);
      })
    ] }) }) }),
    /* @__PURE__ */ l(We, { onZoomIn: () => a.setZoom((d) => Math.min(d * 1.2, 2)), onZoomOut: () => a.setZoom((d) => Math.max(d * 0.8, 0.3)), onFit: () => a.fitToView(s), onReset: a.resetView, zoom: a.zoom })
  ] });
}
function v2({ tasks: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const n = Math.max(...o.map((i) => i.start + i.duration), 14);
  return /* @__PURE__ */ S("div", { style: { width: "100%", height: "100%", overflow: "auto", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, padding: 20 }, children: [
    /* @__PURE__ */ l("div", { style: { display: "flex", marginLeft: 160, marginBottom: 12 }, children: Array.from({ length: n + 1 }, (i, a) => /* @__PURE__ */ l("div", { style: { width: 40, textAlign: "center", fontSize: "0.75rem", color: t.textSecondary }, children: a }, a)) }),
    o.map((i, a) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", height: 44, borderBottom: `1px solid ${t.border}` }, children: [
      /* @__PURE__ */ l("div", { style: { width: 160, paddingRight: 16, fontSize: "0.85rem", color: t.textPrimary, fontWeight: 500 }, children: i.name }),
      /* @__PURE__ */ S("div", { style: { flex: 1, position: "relative", height: "100%" }, children: [
        Array.from({ length: n + 1 }, (e, s) => /* @__PURE__ */ l("div", { style: { position: "absolute", left: s * 40, top: 0, bottom: 0, width: 1, background: t.border } }, s)),
        /* @__PURE__ */ l("div", { style: { position: "absolute", left: i.start * 40 + 2, top: 10, width: i.duration * 40 - 4, height: 24, background: `linear-gradient(135deg, ${ge[a % ge.length]}, ${ge[a % ge.length]}cc)`, borderRadius: 6, boxShadow: `0 2px 8px ${ge[a % ge.length]}40` } })
      ] })
    ] }, i.id))
  ] });
}
function w2({ data: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const n = o.reduce((e, s) => e + s.value, 0);
  let i = -90;
  const a = o.map((e, s) => {
    const h = e.value / n * 100, d = e.value / n * 360, u = i;
    i += d;
    const f = 200 + 120 * Math.cos(u * Math.PI / 180), m = 200 + 120 * Math.sin(u * Math.PI / 180), g = 200 + 120 * Math.cos((u + d) * Math.PI / 180), y = 200 + 120 * Math.sin((u + d) * Math.PI / 180), c = 200 + 150 * Math.cos((u + d / 2) * Math.PI / 180), p = 200 + 150 * Math.sin((u + d / 2) * Math.PI / 180);
    return { ...e, pct: h, path: `M 200 200 L ${f} ${m} A 120 120 0 ${d > 180 ? 1 : 0} 1 ${g} ${y} Z`, color: ge[s % ge.length], lx: c, ly: p };
  });
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center" }, children: [
    /* @__PURE__ */ l("svg", { width: "450", height: "400", viewBox: "0 0 450 400", children: a.map((e, s) => /* @__PURE__ */ S("g", { children: [
      /* @__PURE__ */ l("path", { d: e.path, fill: e.color, stroke: t.canvasBg, strokeWidth: 2 }),
      /* @__PURE__ */ l("text", { x: e.lx, y: e.ly, textAnchor: "middle", fill: t.textPrimary, fontSize: 11, fontWeight: 500, children: e.label }),
      /* @__PURE__ */ S("text", { x: e.lx, y: e.ly + 14, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: [
        e.pct.toFixed(1),
        "%"
      ] })
    ] }, s)) }),
    /* @__PURE__ */ l("div", { style: { position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)" }, children: a.map((e, s) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: [
      /* @__PURE__ */ l("div", { style: { width: 14, height: 14, borderRadius: 3, background: e.color } }),
      /* @__PURE__ */ l("span", { style: { fontSize: "0.8rem", color: t.textPrimary }, children: e.label })
    ] }, s)) })
  ] });
}
function S2({ data: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const { config: n, points: i } = o, a = Be({ x: 50, y: 20 }), e = 400, s = 60, h = e - s * 2, d = (u) => a.getNodePosition(u.id, s + u.x / 100 * h + 50, s + h - u.y / 100 * h);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ l("div", { ref: a.canvasRef, className: "canvas-bg", onMouseDown: a.handleCanvasMouseDown, onMouseMove: a.handleMouseMove, onMouseUp: a.handleMouseUp, onMouseLeave: a.handleMouseUp, onWheel: a.handleWheel, style: { width: "100%", height: "100%", cursor: a.isPanning || a.dragging ? "grabbing" : "grab", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ S("svg", { width: e + 100, height: e, viewBox: `0 0 ${e + 100} ${e}`, style: { transform: `translate(${a.pan.x - 50}px, ${a.pan.y - 20}px) scale(${a.zoom})`, transformOrigin: "center" }, children: [
      n.title && /* @__PURE__ */ l("text", { x: e / 2 + 50, y: 30, textAnchor: "middle", fill: t.textPrimary, fontSize: 16, fontWeight: 700, children: n.title }),
      /* @__PURE__ */ l("rect", { x: s + 50, y: s, width: h / 2, height: h / 2, fill: v.green + "15" }),
      /* @__PURE__ */ l("rect", { x: s + h / 2 + 50, y: s, width: h / 2, height: h / 2, fill: v.blue + "15" }),
      /* @__PURE__ */ l("rect", { x: s + 50, y: s + h / 2, width: h / 2, height: h / 2, fill: v.orange + "15" }),
      /* @__PURE__ */ l("rect", { x: s + h / 2 + 50, y: s + h / 2, width: h / 2, height: h / 2, fill: v.red + "15" }),
      /* @__PURE__ */ l("line", { x1: s + 50, y1: s + h / 2, x2: s + h + 50, y2: s + h / 2, stroke: t.border, strokeWidth: 2 }),
      /* @__PURE__ */ l("line", { x1: s + h / 2 + 50, y1: s, x2: s + h / 2 + 50, y2: s + h, stroke: t.border, strokeWidth: 2 }),
      n.quadrants.map((u, f) => {
        const m = [{ x: s + h / 4 + 50, y: s + h / 4 }, { x: s + h * 3 / 4 + 50, y: s + h / 4 }, { x: s + h / 4 + 50, y: s + h * 3 / 4 }, { x: s + h * 3 / 4 + 50, y: s + h * 3 / 4 }];
        return u && /* @__PURE__ */ l("text", { x: m[f].x, y: m[f].y, textAnchor: "middle", fill: t.textSecondary, fontSize: 11, children: u }, f);
      }),
      n.xLabel && /* @__PURE__ */ l("text", { x: e / 2 + 50, y: e - 10, textAnchor: "middle", fill: t.textSecondary, fontSize: 12, children: n.xLabel }),
      n.yLabel && /* @__PURE__ */ l("text", { x: 20, y: e / 2, textAnchor: "middle", fill: t.textSecondary, fontSize: 12, transform: `rotate(-90, 20, ${e / 2})`, children: n.yLabel }),
      i.map((u, f) => {
        const m = d(u), g = a.dragging === u.id;
        return /* @__PURE__ */ S("g", { style: { cursor: g ? "grabbing" : "grab" }, onMouseDown: (y) => {
          y.stopPropagation(), a.handleNodeMouseDown(y, u.id, m.x, m.y);
        }, children: [
          /* @__PURE__ */ l("circle", { cx: m.x, cy: m.y, r: 12, fill: ge[f % ge.length], stroke: g ? "#fff" : "none", strokeWidth: 3 }),
          /* @__PURE__ */ l("text", { x: m.x, y: m.y - 18, textAnchor: "middle", fill: t.textPrimary, fontSize: 11, children: u.label })
        ] }, f);
      })
    ] }) }),
    /* @__PURE__ */ l(We, { onZoomIn: () => a.setZoom((u) => Math.min(u * 1.2, 2)), onZoomOut: () => a.setZoom((u) => Math.max(u * 0.8, 0.3)), onFit: () => {
    }, onReset: a.resetView, zoom: a.zoom })
  ] });
}
function k2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 30, y: 30 }), s = { cloud: { color: v.sky, icon: "☁️" }, cluster: { color: v.teal, icon: "🌐" }, container: { color: v.cyan, icon: "📦" }, database: { color: v.green, icon: "🗄️" }, storage: { color: v.emerald, icon: "💾" }, device: { color: v.pink, icon: "📱" }, server: { color: v.violet, icon: "🖧" }, component: { color: v.purple, icon: "⚙️" } }, h = ye(() => {
    const g = o.nodes, y = [], c = (w) => g.filter((E) => E.parentId === w), p = (w) => {
      const E = c(w);
      return E.length === 0 ? 70 : 60 + E.reduce((k, M) => k + p(M.id) + 15, 0);
    }, b = (w, E, k, M) => {
      const A = s[w.type] || s.component, I = c(w.id), R = p(w.id);
      y.push({ ...w, defaultX: E, defaultY: k, width: 220, height: R, level: M, ...A, hasChildren: I.length > 0 });
      let $ = k + 55;
      I.forEach((D) => {
        b(D, E + 20, $, M + 1), $ += p(D.id) + 15;
      });
    }, x = g.filter((w) => !w.parentId);
    let C = 40;
    return x.forEach((w) => {
      b(w, C, 40, 0), C += 280;
    }), { nodes: y.sort((w, E) => w.level - E.level) };
  }, [o]), d = (g) => e.getNodePosition(g.id, g.defaultX, g.defaultY), u = K(() => {
    const g = e.finishEditing();
    if (g.nodeId && g.newValue !== void 0 && n) {
      const y = h.nodes.find((c) => c.id === g.nodeId);
      y && y.label !== g.newValue && n(g.nodeId, y.label, g.newValue);
    }
  }, [e, h.nodes, n]);
  he(() => {
    const g = (y) => {
      const p = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? y.metaKey : y.ctrlKey;
      if (!e.editingNode) {
        if ((y.key === "Delete" || y.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          y.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (p && y.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          y.preventDefault(), e.copySelectedNodes(h.nodes);
          return;
        }
        if (p && y.key.toLowerCase() === "v" && e.clipboard && a) {
          y.preventDefault();
          const b = e.pasteNodes();
          b && a(b);
          return;
        }
      }
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, h.nodes, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const g = e.getNodesInSelectionBox(h.nodes.map((y) => ({ ...y, x: y.defaultX, y: y.defaultY })), e.selectionBox);
      g.length > 0 && e.setSelectedNodes(new Set(g));
    }
  }, [e.isSelecting, e.selectionBox, h.nodes, e]);
  const f = K((g) => {
    (g.target === e.canvasRef.current || g.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), m = ye(() => {
    if (!h.nodes || h.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const g = h.nodes.map((p) => p.defaultX), y = h.nodes.map((p) => p.defaultY), c = h.nodes.map((p) => p.height || 70);
    return { x: Math.min(...g) - 60, y: Math.min(...y) - 60, width: Math.max(...g) - Math.min(...g) + 300, height: Math.max(...y.map((p, b) => p + c[b])) - Math.min(...y) + 120 };
  }, [h]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: f, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ l("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" }) }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: h.nodes.map((g) => {
        const y = d(g), c = e.dragging === g.id, p = e.selectedNodes.has(g.id);
        return /* @__PURE__ */ l("div", { onClick: (b) => e.handleNodeClick(b, g.id), onDoubleClick: (b) => e.handleNodeDoubleClick(b, g.id, g.label), onContextMenu: (b) => e.handleNodeContextMenu(b, g.id), onMouseDown: (b) => e.handleNodeMouseDown(b, g.id, y.x, y.y), onTouchStart: (b) => e.handleNodeTouchStart(b, g.id, y.x, y.y), style: { position: "absolute", left: y.x, top: y.y, width: g.width, height: g.height, background: `${g.color}10`, border: `2px ${g.level === 0 ? "solid" : "dashed"} ${p ? v.blue : g.color}`, borderRadius: 12, boxSizing: "border-box", cursor: c ? "grabbing" : "grab", boxShadow: p ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : c ? `0 0 30px ${g.color}40` : "none", transition: c ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: g.hasChildren ? `1px solid ${g.color}30` : "none" }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.3rem" }, children: g.icon }),
          e.editingNode === g.id ? /* @__PURE__ */ l(tt, { value: e.editingValue, onChange: (b) => e.setEditingValue(b), onFinish: u, style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? Ee.stroke : t.textPrimary } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? Ee.stroke : t.textPrimary }, children: g.label }),
          /* @__PURE__ */ S("span", { style: { fontSize: "0.6rem", color: g.color, marginLeft: "auto", background: `${g.color}20`, padding: "3px 8px", borderRadius: 4 }, children: [
            "«",
            g.type,
            "»"
          ] })
        ] }) }, g.id);
      }) })
    ] }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "6px 12px", borderRadius: 6, fontSize: "0.75rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ S("span", { children: [
        e.selectedNodes.size,
        " selected"
      ] }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.6 }, children: "|" }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.7 }, children: "Del to delete • ⌘C copy • ⌘V paste" })
    ] }),
    e.clipboard && /* @__PURE__ */ S("div", { style: { position: "absolute", top: e.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${v.green}20`, padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem", color: v.green, border: `1px solid ${v.green}40` }, children: [
      e.clipboard.length,
      " node",
      e.clipboard.length > 1 ? "s" : "",
      " copied"
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((g) => Math.min(g * 1.2, 2)), onZoomOut: () => e.setZoom((g) => Math.max(g * 0.8, 0.3)), onFit: () => e.fitToView(m), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(st, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function E2({ data: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const { elements: n, totalHeight: i } = o, a = (c, p = {}) => !c || !c.includes("**") && !c.includes("~~") && !c.includes("{badge:") && !c.includes("{tag:") ? c : c.split(/(\*\*[^*]+\*\*|~~[^~]+~~|\{(?:badge|tag):[^}]+\})/gi).map((x, C) => {
    if (x.startsWith("**") && x.endsWith("**"))
      return /* @__PURE__ */ l("strong", { style: { fontWeight: 700, ...p }, children: x.slice(2, -2) }, C);
    if (x.startsWith("~~") && x.endsWith("~~"))
      return /* @__PURE__ */ l("span", { style: { textDecoration: "line-through", opacity: 0.6 }, children: x.slice(2, -2) }, C);
    const w = x.match(/^\{(?:badge|tag):([^}]+)\}$/i);
    if (w) {
      const E = w[1], k = E.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i), M = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber }, A = k ? k[1].toLowerCase() : null, I = k ? k[2] : E, R = M[A] || v.red;
      return /* @__PURE__ */ l("span", { style: { display: "inline-flex", padding: "2px 8px", background: `${R}25`, border: `1px solid ${R}`, borderRadius: 10, color: R, fontSize: "0.7rem", fontWeight: 600, marginRight: 6 }, children: I }, C);
    }
    return x;
  }), e = t.name === "light", s = e ? {
    light: { background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" },
    medium: { background: "rgba(255,255,255,0.8)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" },
    dark: { background: "rgba(255,255,255,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }
  } : {
    light: { background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" },
    medium: { background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" },
    dark: { background: "rgba(0,0,0,0.4)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }
  }, h = e ? {
    sm: "0 2px 8px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
    md: "0 4px 20px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
    lg: "0 8px 40px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",
    xl: "0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1)",
    glow: (c) => `0 4px 20px ${c}30, 0 0 40px ${c}15`,
    inset: "inset 0 1px 0 rgba(255,255,255,0.5)"
  } : {
    sm: "0 2px 8px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)",
    md: "0 4px 20px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)",
    lg: "0 8px 40px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)",
    xl: "0 20px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25)",
    glow: (c) => `0 4px 20px ${c}40, 0 0 40px ${c}20`,
    inset: "inset 0 1px 0 rgba(255,255,255,0.1)"
  }, d = e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)", u = e ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)", f = e ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)", m = e ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.3)", g = {
    low: e ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)",
    medium: e ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
    high: e ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
    elevated: e ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
    prominent: e ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)",
    overlay: e ? "rgba(255,255,255,0.95)" : "rgba(30,30,40,0.95)",
    code: e ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.4)"
  }, y = (c) => {
    var b, x;
    const p = { position: "absolute", left: c.x, top: c.y, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
    switch (c.type) {
      case "window":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: e ? "linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)" : "linear-gradient(180deg, #2d3748 0%, #1a202c 100%)", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", padding: "0 16px", boxShadow: h.lg, border: `1px solid ${d}` }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 8, marginRight: 16 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #ff6b6b, #ee5a5a)", boxShadow: "0 2px 4px rgba(238,90,90,0.4)" } }),
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #ffd93d, #f0c419)", boxShadow: "0 2px 4px rgba(240,196,25,0.4)" } }),
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #6bcf63, #4ade80)", boxShadow: "0 2px 4px rgba(74,222,128,0.4)" } })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }, children: a(c.label) })
        ] }, c.id);
      case "card":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, ...s.light, border: `1px solid ${d}`, borderRadius: 16, boxShadow: `${h.md}, ${h.inset}` }, children: c.label && /* @__PURE__ */ l("div", { style: { padding: "14px 18px", borderBottom: `1px solid ${u}`, background: e ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)" : "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)", borderRadius: "16px 16px 0 0", fontWeight: 600, color: t.textPrimary, fontSize: "0.9rem", letterSpacing: "-0.01em" }, children: a(c.label) }) }, c.id);
      case "modal":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, ...s.medium, border: `1px solid ${d}`, borderRadius: 20, boxShadow: h.xl }, children: [
          /* @__PURE__ */ S("div", { style: { padding: "18px 24px", borderBottom: `1px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: e ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)" : "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)", borderRadius: "20px 20px 0 0" }, children: [
            /* @__PURE__ */ l("span", { style: { fontWeight: 700, color: t.textPrimary, fontSize: "1rem", letterSpacing: "-0.02em" }, children: a(c.label) }),
            /* @__PURE__ */ l("div", { style: { width: 28, height: 28, borderRadius: 8, background: e ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "1rem", lineHeight: 1 }, children: "×" }) })
          ] }),
          /* @__PURE__ */ l("div", { style: { padding: 24, color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.6 }, children: "Modal content area..." })
        ] }, c.id);
      case "navbar":
        const C = c.items[0] && /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(c.items[0]);
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, ...s.dark, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 20px", gap: 24, boxShadow: h.md, border: `1px solid ${u}` }, children: [
          !C && /* @__PURE__ */ l("span", { style: { fontWeight: 800, color: t.textPrimary, fontSize: "1.1rem", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "◆" }),
          c.items.map((F, N) => {
            const Z = F.match(/^\[(.+)\]$/), T = F.match(/^\((@?\w+)\)$/);
            return Z ? /* @__PURE__ */ l("button", { style: { padding: "8px 18px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, color: "#fff", border: "none", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: h.glow(v.purple), transition: "transform 0.2s, box-shadow 0.2s" }, children: Z[1] }, N) : T ? /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}40, ${v.blue}40)`, border: `2px solid ${v.purple}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 600, color: v.purple }, children: T[1].slice(0, 2).toUpperCase() }, N) : /* @__PURE__ */ l("span", { style: { color: N === 0 ? v.purple : t.textSecondary, fontSize: "0.9rem", fontWeight: N === 0 ? 600 : 500, transition: "color 0.2s" }, children: F }, N);
          })
        ] }, c.id);
      case "tabs":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, display: "flex", gap: 4, background: g.medium, padding: 4, borderRadius: 12, border: `1px solid ${u}` }, children: c.items.map((F, N) => /* @__PURE__ */ l("div", { style: { padding: "10px 20px", color: N === c.activeIndex ? "#fff" : t.textSecondary, background: N === c.activeIndex ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : "transparent", borderRadius: 8, fontSize: "0.85rem", fontWeight: N === c.activeIndex ? 600 : 500, boxShadow: N === c.activeIndex ? h.glow(v.purple) : "none", transition: "all 0.2s" }, children: F }, N)) }, c.id);
      case "breadcrumbs":
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: c.items.map((F, N) => /* @__PURE__ */ S(Uc.Fragment, { children: [
          /* @__PURE__ */ l("span", { style: { color: N === c.items.length - 1 ? t.textPrimary : v.purple, fontSize: "0.85rem", fontWeight: N === c.items.length - 1 ? 600 : 400 }, children: F }),
          N < c.items.length - 1 && /* @__PURE__ */ l("span", { style: { color: t.textMuted, opacity: 0.5 }, children: "›" })
        ] }, N)) }, c.id);
      case "search":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, ...s.light, border: `1px solid ${d}`, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 18px", gap: 12, boxShadow: h.sm }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1rem", opacity: 0.7 }, children: "🔍" }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: c.label })
        ] }, c.id);
      case "toolbar":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }, children: c.items.map((F, N) => {
          if (F.type === "search")
            return /* @__PURE__ */ S("div", { style: { flex: 1, minWidth: 150, height: 38, ...s.light, border: `1px solid ${d}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 14px", gap: 10, boxShadow: h.sm }, children: [
              /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem", opacity: 0.7 }, children: "🔍" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: F.label })
            ] }, N);
          if (F.type === "dropdown")
            return /* @__PURE__ */ S("div", { style: { height: 38, ...s.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 14px", gap: 8, boxShadow: h.sm }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem", fontWeight: 500 }, children: F.label }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.65rem" }, children: "▼" })
            ] }, N);
          const Z = F.variant === "primary";
          return /* @__PURE__ */ l("button", { style: { height: 38, padding: "0 16px", background: Z ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : "transparent", color: Z ? "#fff" : t.textPrimary, border: Z ? "none" : `1px solid ${f}`, borderRadius: 10, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: Z ? h.glow(v.purple) : h.sm, display: "flex", alignItems: "center", gap: 6 }, children: F.label }, N);
        }) }, c.id);
      case "dropdown":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, ...s.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", boxShadow: h.sm }, children: [
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: c.label }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "▼" })
        ] }, c.id);
      case "toggle":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 14 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 52, height: 28, borderRadius: 14, background: c.enabled ? `linear-gradient(135deg, ${v.green}, #22c55e)` : g.prominent, position: "relative", boxShadow: c.enabled ? h.glow(v.green) : h.sm, transition: "all 0.3s" }, children: /* @__PURE__ */ l("div", { style: { position: "absolute", top: 3, left: c.enabled ? 27 : 3, width: 22, height: 22, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)" } }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: c.label })
        ] }, c.id);
      case "radio":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2px solid ${c.selected ? v.purple : m}`, display: "flex", alignItems: "center", justifyContent: "center", background: c.selected ? `${v.purple}15` : "transparent", boxShadow: c.selected ? h.glow(v.purple) : "none", transition: "all 0.2s" }, children: c.selected && /* @__PURE__ */ l("div", { style: { width: 10, height: 10, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})` } }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: c.label })
        ] }, c.id);
      case "slider":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width }, children: [
          /* @__PURE__ */ S("div", { style: { height: 8, background: g.prominent, borderRadius: 4, position: "relative", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)" }, children: [
            /* @__PURE__ */ l("div", { style: { position: "absolute", left: 0, top: 0, height: "100%", width: `${c.value}%`, background: `linear-gradient(90deg, ${v.purple}, ${v.blue})`, borderRadius: 4, boxShadow: h.glow(v.purple) } }),
            /* @__PURE__ */ l("div", { style: { position: "absolute", top: -8, left: `${c.value}%`, transform: "translateX(-50%)", width: 24, height: 24, borderRadius: "50%", background: "#fff", border: `3px solid ${v.purple}`, boxShadow: "0 2px 10px rgba(0,0,0,0.3)" } })
          ] }),
          /* @__PURE__ */ S("div", { style: { textAlign: "right", fontSize: "0.8rem", color: v.purple, marginTop: 10, fontWeight: 600 }, children: [
            c.value,
            "%"
          ] })
        ] }, c.id);
      case "progress":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width }, children: /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 10, background: g.prominent, borderRadius: 5, overflow: "hidden", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)" }, children: /* @__PURE__ */ l("div", { style: { height: "100%", width: `${c.value}%`, background: `linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.cyan})`, borderRadius: 5, boxShadow: h.glow(v.purple) } }) }),
          /* @__PURE__ */ l("span", { style: { fontSize: "0.8rem", color: t.textSecondary, fontWeight: 600, whiteSpace: "nowrap" }, children: c.label || `${c.value}%` })
        ] }) }, c.id);
      case "avatar":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 14 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.2rem", boxShadow: h.glow(v.purple), border: "3px solid rgba(255,255,255,0.2)" }, children: c.label ? c.label.charAt(0).toUpperCase() : "👤" }),
          c.label && /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 600 }, children: c.label })
        ] }, c.id);
      case "avatar-group":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex" }, children: [
          Array.from({ length: Math.min(c.count, 5) }).map((F, N) => /* @__PURE__ */ l("div", { style: { width: 36, height: 36, borderRadius: "50%", background: ge[N % ge.length], border: `2px solid ${e ? "#fff" : "#1a1a2e"}`, marginLeft: N > 0 ? -12 : 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 600 }, children: String.fromCharCode(65 + N) }, N)),
          c.count > 5 && /* @__PURE__ */ S("div", { style: { width: 36, height: 36, borderRadius: "50%", background: g.prominent, border: `2px solid ${e ? "#fff" : "#1a1a2e"}`, marginLeft: -12, display: "flex", alignItems: "center", justifyContent: "center", color: t.textSecondary, fontSize: "0.7rem" }, children: [
            "+",
            c.count - 5
          ] })
        ] }, c.id);
      case "image":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.high, border: `2px dashed ${f}`, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "2rem" }, children: "🖼️" }),
          c.label && /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: c.label })
        ] }, c.id);
      case "video":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: e ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.3)", border: `2px dashed ${f}`, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 60, height: 60, borderRadius: "50%", background: g.prominent, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ l("span", { style: { fontSize: "1.5rem", marginLeft: 4, color: t.textPrimary }, children: "▶" }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: c.label || "Video" })
        ] }, c.id);
      case "map":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: "rgba(20,184,166,0.1)", border: "2px dashed rgba(20,184,166,0.3)", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "2.5rem" }, children: "📍" }),
          /* @__PURE__ */ l("span", { style: { color: v.teal, fontSize: "0.8rem" }, children: c.label || "Map" })
        ] }, c.id);
      case "chart":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 8, padding: 16 }, children: /* @__PURE__ */ l("div", { style: { height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-around", gap: 8 }, children: [60, 85, 45, 90, 55, 70].map((F, N) => /* @__PURE__ */ l("div", { style: { width: "12%", height: `${F}%`, background: `linear-gradient(180deg, ${ge[N % ge.length]}, ${ge[N % ge.length]}88)`, borderRadius: "4px 4px 0 0" } }, N)) }) }, c.id);
      case "calendar":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 8, padding: 12 }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted }, children: "‹" }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.85rem" }, children: "December 2024" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted }, children: "›" })
          ] }),
          /* @__PURE__ */ S("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, textAlign: "center" }, children: [
            ["S", "M", "T", "W", "T", "F", "S"].map((F, N) => /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.7rem", padding: 4 }, children: F }, N)),
            Array.from({ length: 35 }).map((F, N) => {
              const Z = N - 5, T = Z === 15;
              return /* @__PURE__ */ l("div", { style: { padding: 6, fontSize: "0.75rem", color: Z < 1 || Z > 31 ? "transparent" : T ? "#fff" : t.textSecondary, background: T ? v.purple : "transparent", borderRadius: "50%" }, children: Z < 1 || Z > 31 ? "" : Z }, N);
            })
          ] })
        ] }, c.id);
      case "table-row":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, display: "flex", borderBottom: `1px solid ${u}`, background: c.isHeader ? g.high : "transparent" }, children: c.cells.map((F, N) => /* @__PURE__ */ l("div", { style: { flex: 1, padding: "8px 12px", color: c.isHeader ? t.textPrimary : t.textSecondary, fontSize: "0.8rem", fontWeight: c.isHeader ? 600 : 400, borderRight: N < c.cells.length - 1 ? `1px solid ${u}` : "none" }, children: F }, N)) }, c.id);
      case "list-item":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { color: v.purple }, children: "•" }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: c.label })
        ] }, c.id);
      case "list-item-numbered":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ S("span", { style: { color: v.purple, fontWeight: 600, minWidth: 20 }, children: [
            c.number,
            "."
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: c.label })
        ] }, c.id);
      case "badge":
        const E = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber }[c.variant] || v.purple;
        return /* @__PURE__ */ l("div", { style: { ...p, display: "inline-flex", padding: "5px 12px", background: `linear-gradient(135deg, ${E}30, ${E}15)`, border: `1px solid ${E}50`, borderRadius: 20, color: E, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", boxShadow: `0 2px 8px ${E}25` }, children: c.label }, c.id);
      case "badge-group":
        const k = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber };
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", flexWrap: "wrap", gap: 8 }, children: c.badges.map((F, N) => {
          const Z = k[F.variant] || v.purple;
          return /* @__PURE__ */ l("span", { style: { display: "inline-flex", padding: "5px 12px", background: `linear-gradient(135deg, ${Z}30, ${Z}15)`, border: `1px solid ${Z}50`, borderRadius: 20, color: Z, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", boxShadow: `0 2px 8px ${Z}25` }, children: F.label }, N);
        }) }, c.id);
      case "alert":
        const M = { info: { color: v.blue, icon: "ℹ️" }, success: { color: v.green, icon: "✓" }, warning: { color: v.orange, icon: "⚠️" }, error: { color: v.red, icon: "✗" } }, A = M[c.variant] || M.info;
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, padding: "12px 16px", background: `${A.color}15`, border: `1px solid ${A.color}40`, borderRadius: 8, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.1rem" }, children: A.icon }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: c.label })
        ] }, c.id);
      case "stepper":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }, children: Array.from({ length: c.total }).map((F, N) => /* @__PURE__ */ S(Uc.Fragment, { children: [
          /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: N < c.current ? v.green : N === c.current - 1 ? v.purple : g.prominent, display: "flex", alignItems: "center", justifyContent: "center", color: N < c.current ? "#fff" : t.textSecondary, fontSize: "0.8rem", fontWeight: 600 }, children: N < c.current - 1 ? "✓" : N + 1 }),
          N < c.total - 1 && /* @__PURE__ */ l("div", { style: { width: 40, height: 2, background: N < c.current - 1 ? v.green : g.prominent } })
        ] }, N)) }, c.id);
      case "pagination":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 4 }, children: [
          /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer" }, children: "‹" }),
          Array.from({ length: Math.min(c.total, 5) }).map((F, N) => {
            const Z = N + 1;
            return /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: Z === c.current ? v.purple : g.prominent, border: "none", borderRadius: 6, color: Z === c.current ? "#fff" : t.textSecondary, cursor: "pointer", fontSize: "0.8rem" }, children: Z }, N);
          }),
          c.total > 5 && /* @__PURE__ */ l("span", { style: { color: t.textMuted, padding: "0 8px" }, children: "..." }),
          c.total > 5 && /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer", fontSize: "0.8rem" }, children: c.total }),
          /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer" }, children: "›" })
        ] }, c.id);
      case "skeleton":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, background: e ? "linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 75%)" : "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)", backgroundSize: "200% 100%", borderRadius: 4, animation: "shimmer 1.5s infinite" } }, c.id);
      case "textarea":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, background: g.elevated, border: `1px solid ${f}`, borderRadius: 8, padding: 12 }, children: /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: c.label || "Enter text..." }) }, c.id);
      case "chat-message":
        const I = c.isUser ? v.blue : g.prominent, R = c.isUser ? "flex-end" : "flex-start", $ = c.isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px";
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, display: "flex", flexDirection: "column", alignItems: R }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "0.7rem", color: t.textMuted, marginBottom: 4 }, children: c.sender }),
          /* @__PURE__ */ l("div", { style: { maxWidth: "75%", background: I, padding: "10px 14px", borderRadius: $ }, children: /* @__PURE__ */ l("span", { style: { color: c.isUser ? "#fff" : t.textPrimary, fontSize: "0.85rem", lineHeight: 1.4 }, children: c.message }) })
        ] }, c.id);
      case "button":
        const D = {
          primary: { bg: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "transparent", color: "#fff", shadow: h.glow(v.purple) },
          secondary: { bg: g.elevated, border: f, color: t.textPrimary, shadow: h.sm },
          ghost: { bg: "transparent", border: "transparent", color: v.purple, shadow: "none" },
          danger: { bg: `linear-gradient(135deg, ${v.red}, #dc2626)`, border: "transparent", color: "#fff", shadow: h.glow(v.red) },
          success: { bg: `linear-gradient(135deg, ${v.green}, #22c55e)`, border: "transparent", color: "#fff", shadow: h.glow(v.green) }
        }, P = D[c.variant] || D.primary;
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, background: P.bg, border: `2px solid ${P.border}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: P.shadow, transition: "all 0.2s" }, children: /* @__PURE__ */ l("span", { style: { color: P.color, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }, children: c.label }) }, c.id);
      case "icon-button":
        const _ = { menu: "☰", close: "✕", settings: "⚙", user: "👤", search: "🔍", home: "🏠", edit: "✏️", delete: "🗑️", add: "+", more: "⋯" };
        return /* @__PURE__ */ l("div", { style: { ...p, width: 40, height: 40, background: g.prominent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: _[c.icon] || c.icon }) }, c.id);
      case "divider-label":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 1, background: d } }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: c.label }),
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 1, background: d } })
        ] }, c.id);
      case "rating":
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", gap: 4 }, children: Array.from({ length: c.total }).map((F, N) => /* @__PURE__ */ l("span", { style: { color: N < c.filled ? v.amber : f, fontSize: "1.2rem" }, children: "★" }, N)) }, c.id);
      case "chip-group":
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", gap: 8, flexWrap: "wrap" }, children: c.tags.map((F, N) => /* @__PURE__ */ l("span", { style: { padding: "6px 12px", background: `${ge[N % ge.length]}20`, border: `1px solid ${ge[N % ge.length]}`, borderRadius: 16, color: ge[N % ge.length], fontSize: "0.8rem" }, children: F }, N)) }, c.id);
      case "tooltip":
        return /* @__PURE__ */ l("div", { style: { ...p, width: 20, height: 20, borderRadius: "50%", background: g.prominent, display: "flex", alignItems: "center", justifyContent: "center", color: t.textSecondary, fontSize: "0.75rem", fontWeight: 600 }, children: "?" }, c.id);
      case "button-row":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, display: "flex", gap: 10, flexWrap: "wrap" }, children: c.buttons.map((F, N) => /* @__PURE__ */ l("div", { style: { padding: "10px 16px", background: ge[N % ge.length], borderRadius: 8, color: "#fff", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }, children: F }, N)) }, c.id);
      case "feed-item":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.75rem", fontWeight: 700 }, children: c.username.charAt(0).toUpperCase() }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ S("span", { style: { color: v.purple, fontWeight: 600, fontSize: "0.85rem" }, children: [
              "@",
              c.username
            ] }),
            /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "0.85rem", marginLeft: 6 }, children: c.text })
          ] })
        ] }, c.id);
      case "win-notification":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.5rem" }, children: c.emoji }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ S("span", { style: { color: v.green, fontWeight: 700, fontSize: "0.9rem" }, children: [
              "@",
              c.username
            ] }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", marginLeft: 6 }, children: c.text })
          ] })
        ] }, c.id);
      case "social-stats":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, display: "flex", alignItems: "center", gap: 20, padding: "8px 0" }, children: c.text.split(/\s{2,}/).map((F, N) => /* @__PURE__ */ l("span", { style: { color: N === 0 ? v.pink : t.textSecondary, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: 4 }, children: F }, N)) }, c.id);
      case "input":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, ...s.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 16px", boxShadow: `${h.sm}, inset 0 1px 2px rgba(0,0,0,0.1)`, transition: "border-color 0.2s, box-shadow 0.2s" }, children: /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem", fontWeight: 400 }, children: c.label || "Enter text..." }) }, c.id);
      case "checkbox":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 20, height: 20, border: `2px solid ${c.checked ? v.blue : m}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", background: c.checked ? v.blue : "transparent" }, children: c.checked && /* @__PURE__ */ l("span", { style: { color: "#fff", fontSize: "0.75rem" }, children: "✓" }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: c.label })
        ] }, c.id);
      case "separator":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, background: d } }, c.id);
      case "text":
        const z = {
          h1: { fontSize: "1.5rem", fontWeight: 800, color: t.textPrimary },
          h2: { fontSize: "1.2rem", fontWeight: 700, color: t.textPrimary },
          h3: { fontSize: "1rem", fontWeight: 600, color: t.textPrimary },
          bold: { fontSize: "0.9rem", fontWeight: 600, color: t.textPrimary },
          body: { fontSize: "0.9rem", fontWeight: 400, color: t.textSecondary }
        }, B = z[c.textType] || z.body;
        return /* @__PURE__ */ l("div", { style: { ...p, ...B }, children: a(c.label, { color: t.textPrimary }) }, c.id);
      case "hero":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: `linear-gradient(135deg, ${v.purple}20, ${v.blue}15, ${v.cyan}10)`, borderRadius: 16, padding: "48px 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", border: `1px solid ${v.purple}30`, boxShadow: `0 8px 32px ${v.purple}15` }, children: [
          /* @__PURE__ */ l("h1", { style: { color: t.textPrimary, fontSize: "2.2rem", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em", background: `linear-gradient(135deg, ${t.textPrimary}, ${v.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: c.title || "Welcome to Our Platform" }),
          c.subtitle && /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.6, marginBottom: 28 }, children: c.subtitle }),
          c.cta && /* @__PURE__ */ l("button", { style: { padding: "14px 32px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 20px ${v.purple}50`, transform: "translateY(0)", transition: "all 0.2s" }, children: c.cta })
        ] }, c.id);
      case "pricing-card":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: c.featured ? `linear-gradient(135deg, ${v.purple}15, ${v.blue}10)` : g.low, border: `${c.featured ? 2 : 1}px solid ${c.featured ? v.purple : d}`, borderRadius: 16, padding: "28px 24px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }, children: [
          c.featured && /* @__PURE__ */ l("div", { style: { position: "absolute", top: 12, right: -32, background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "4px 40px", transform: "rotate(45deg)" }, children: "POPULAR" }),
          /* @__PURE__ */ S("div", { style: { marginBottom: 20 }, children: [
            /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }, children: c.plan || "Pro Plan" }),
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "baseline", gap: 4 }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "2.5rem", fontWeight: 800 }, children: c.price || "$29" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: "/month" })
            ] })
          ] }),
          /* @__PURE__ */ l("div", { style: { flex: 1, borderTop: `1px solid ${u}`, paddingTop: 20 }, children: (c.features || ["Feature 1", "Feature 2", "Feature 3"]).map((F, N) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: t.textSecondary, fontSize: "0.9rem" }, children: [
            /* @__PURE__ */ l("span", { style: { color: v.green, fontSize: "1rem" }, children: "✓" }),
            F
          ] }, N)) }),
          /* @__PURE__ */ l("button", { style: { marginTop: 20, padding: "12px 20px", background: c.featured ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : g.prominent, border: c.featured ? "none" : `1px solid ${f}`, borderRadius: 10, color: c.featured ? "#fff" : t.textPrimary, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: c.cta || "Get Started" })
        ] }, c.id);
      case "feature-card":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column", gap: 16, transition: "all 0.2s", boxShadow: h.md }, children: [
          /* @__PURE__ */ l("div", { style: { width: 56, height: 56, borderRadius: 14, background: `${v.purple}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }, children: c.icon || "🚀" }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.1rem", fontWeight: 700 }, children: c.title || "Feature Title" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.6 }, children: c.description || "Feature description goes here with more details about this amazing capability." })
        ] }, c.id);
      case "stat-widget":
        const j = (b = c.trend) != null && b.startsWith("+") ? v.green : (x = c.trend) != null && x.startsWith("-") ? v.red : t.textMuted;
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 14, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem", fontWeight: 500 }, children: c.label || "Metric" }),
            c.trend && /* @__PURE__ */ l("span", { style: { color: j, fontSize: "0.8rem", fontWeight: 600, padding: "3px 8px", background: `${j}15`, borderRadius: 6 }, children: c.trend })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }, children: c.value || "1,234" }),
          /* @__PURE__ */ l("div", { style: { height: 32, display: "flex", alignItems: "flex-end", gap: 3, marginTop: 8 }, children: [40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((F, N) => /* @__PURE__ */ l("div", { style: { flex: 1, height: `${F}%`, background: `linear-gradient(180deg, ${v.purple}80, ${v.purple}40)`, borderRadius: 2 } }, N)) })
        ] }, c.id);
      case "login-form":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "36px 32px", display: "flex", flexDirection: "column", boxShadow: h.xl }, children: [
          /* @__PURE__ */ S("div", { style: { textAlign: "center", marginBottom: 28 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 56, height: 56, margin: "0 auto 16px", borderRadius: 14, background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }, children: "🔐" }),
            /* @__PURE__ */ l("h2", { style: { color: t.textPrimary, fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }, children: c.title || "Welcome Back" }),
            /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: "Sign in to your account" })
          ] }),
          /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: 14, flex: 1 }, children: [
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("label", { style: { color: t.textSecondary, fontSize: "0.8rem", fontWeight: 500, marginBottom: 6, display: "block" }, children: "Email" }),
              /* @__PURE__ */ l("div", { style: { background: g.high, border: `1px solid ${d}`, borderRadius: 10, padding: "12px 14px", color: t.textMuted, fontSize: "0.9rem" }, children: "you@example.com" })
            ] }),
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("label", { style: { color: t.textSecondary, fontSize: "0.8rem", fontWeight: 500, marginBottom: 6, display: "block" }, children: "Password" }),
              /* @__PURE__ */ l("div", { style: { background: g.high, border: `1px solid ${d}`, borderRadius: 10, padding: "12px 14px", color: t.textMuted, fontSize: "0.9rem" }, children: "••••••••" })
            ] }),
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }, children: [
              /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
                /* @__PURE__ */ l("div", { style: { width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${m}` } }),
                /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "0.8rem" }, children: "Remember me" })
              ] }),
              /* @__PURE__ */ l("span", { style: { color: v.purple, fontSize: "0.8rem", cursor: "pointer" }, children: "Forgot password?" })
            ] })
          ] }),
          /* @__PURE__ */ l("button", { style: { marginTop: 20, padding: "14px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer" }, children: "Sign In" }),
          /* @__PURE__ */ S("p", { style: { textAlign: "center", marginTop: 16, color: t.textMuted, fontSize: "0.85rem" }, children: [
            "Don't have an account? ",
            /* @__PURE__ */ l("span", { style: { color: v.purple, cursor: "pointer" }, children: "Sign up" })
          ] })
        ] }, c.id);
      case "signup-form":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "36px 32px", display: "flex", flexDirection: "column", boxShadow: h.xl }, children: [
          /* @__PURE__ */ S("div", { style: { textAlign: "center", marginBottom: 24 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 56, height: 56, margin: "0 auto 16px", borderRadius: 14, background: `linear-gradient(135deg, ${v.green}, ${v.teal})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }, children: "✨" }),
            /* @__PURE__ */ l("h2", { style: { color: t.textPrimary, fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }, children: c.title || "Create Account" }),
            /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: "Start your journey today" })
          ] }),
          /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: 12, flex: 1 }, children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", gap: 12 }, children: [
              /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ l("label", { style: { color: t.textSecondary, fontSize: "0.75rem", fontWeight: 500, marginBottom: 5, display: "block" }, children: "First Name" }),
                /* @__PURE__ */ l("div", { style: { background: g.high, border: `1px solid ${d}`, borderRadius: 10, padding: "11px 12px", color: t.textMuted, fontSize: "0.85rem" }, children: "John" })
              ] }),
              /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ l("label", { style: { color: t.textSecondary, fontSize: "0.75rem", fontWeight: 500, marginBottom: 5, display: "block" }, children: "Last Name" }),
                /* @__PURE__ */ l("div", { style: { background: g.high, border: `1px solid ${d}`, borderRadius: 10, padding: "11px 12px", color: t.textMuted, fontSize: "0.85rem" }, children: "Doe" })
              ] })
            ] }),
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("label", { style: { color: t.textSecondary, fontSize: "0.75rem", fontWeight: 500, marginBottom: 5, display: "block" }, children: "Email" }),
              /* @__PURE__ */ l("div", { style: { background: g.high, border: `1px solid ${d}`, borderRadius: 10, padding: "11px 12px", color: t.textMuted, fontSize: "0.85rem" }, children: "john@example.com" })
            ] }),
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("label", { style: { color: t.textSecondary, fontSize: "0.75rem", fontWeight: 500, marginBottom: 5, display: "block" }, children: "Password" }),
              /* @__PURE__ */ l("div", { style: { background: g.high, border: `1px solid ${d}`, borderRadius: 10, padding: "11px 12px", color: t.textMuted, fontSize: "0.85rem" }, children: "••••••••" })
            ] })
          ] }),
          /* @__PURE__ */ l("button", { style: { marginTop: 18, padding: "13px", background: `linear-gradient(135deg, ${v.green}, ${v.teal})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer" }, children: "Create Account" }),
          /* @__PURE__ */ S("p", { style: { textAlign: "center", marginTop: 14, color: t.textMuted, fontSize: "0.85rem" }, children: [
            "Already have an account? ",
            /* @__PURE__ */ l("span", { style: { color: v.purple, cursor: "pointer" }, children: "Sign in" })
          ] })
        ] }, c.id);
      case "dashboard-widget":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 14, padding: "18px 20px", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "0.85rem", fontWeight: 500 }, children: c.title || "Widget" }),
            /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: c.icon || "📊" })
          ] }),
          /* @__PURE__ */ l("div", { style: { flex: 1, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "1.8rem", fontWeight: 800 }, children: c.value || "0" }) })
        ] }, c.id);
      case "bottom-nav":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, height: c.height, background: g.overlay, borderRadius: "20px 20px 0 0", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 16px", boxShadow: e ? "0 -4px 20px rgba(0,0,0,0.1)" : "0 -4px 20px rgba(0,0,0,0.3)", backdropFilter: "blur(10px)" }, children: (c.items || ["🏠 Home", "🔍 Search", "➕", "❤️ Likes", "👤 Profile"]).map((F, N) => {
          const Z = N === 0, [T, W] = F.includes(" ") ? F.split(" ", 2) : [F, ""];
          return /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 12px", cursor: "pointer" }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: T === "➕" ? "1.8rem" : "1.3rem", opacity: Z ? 1 : 0.6 }, children: T }),
            W && /* @__PURE__ */ l("span", { style: { fontSize: "0.65rem", color: Z ? v.purple : t.textMuted, fontWeight: Z ? 600 : 400 }, children: W })
          ] }, N);
        }) }, c.id);
      case "app-bar":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.overlay, borderRadius: "0 0 16px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", boxShadow: h.md, backdropFilter: "blur(10px)" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: "1.3rem", cursor: "pointer", color: t.textPrimary }, children: "←" }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "1.1rem", fontWeight: 600 }, children: c.title || "Screen Title" })
          ] }),
          /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: (c.actions || ["🔔", "👤"]).map((F, N) => /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem", cursor: "pointer" }, children: F }, N)) })
        ] }, c.id);
      case "fab":
        return /* @__PURE__ */ l("div", { style: { ...p, width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: `0 6px 24px ${v.purple}50`, fontSize: "1.5rem", color: "#fff", fontWeight: 300 }, children: c.icon || "+" }, c.id);
      case "toast":
        const X = { success: v.green, error: v.red, warning: v.orange, info: v.blue }, te = { success: "✓", error: "✗", warning: "⚠", info: "ℹ" }, ee = X[c.variant] || v.blue;
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, minHeight: 52, background: g.overlay, border: `1px solid ${ee}40`, borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: `${h.lg}, 0 0 0 1px ${ee}20`, backdropFilter: "blur(10px)" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 28, height: 28, borderRadius: "50%", background: `${ee}20`, display: "flex", alignItems: "center", justifyContent: "center", color: ee, fontSize: "0.9rem", fontWeight: 700 }, children: te[c.variant] || "ℹ" }),
          /* @__PURE__ */ l("span", { style: { flex: 1, color: t.textPrimary, fontSize: "0.9rem" }, children: c.message || "Notification message" }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "1rem", cursor: "pointer" }, children: "×" })
        ] }, c.id);
      case "empty-state":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `2px dashed ${d}`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: 20, background: g.high, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: "2.5rem" }, children: "📭" }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }, children: c.title || "No items yet" }),
          /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.9rem", maxWidth: 280, lineHeight: 1.5, marginBottom: 20 }, children: c.description || "Get started by creating your first item" }),
          c.cta && /* @__PURE__ */ l("button", { style: { padding: "10px 24px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 8, color: "#fff", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: c.cta })
        ] }, c.id);
      case "error-state":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: `${v.red}08`, border: `1px solid ${v.red}30`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: 20, background: `${v.red}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: "2.5rem" }, children: "⚠️" }),
          /* @__PURE__ */ l("h3", { style: { color: v.red, fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }, children: c.title || "Something went wrong" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", maxWidth: 300, lineHeight: 1.5, marginBottom: 20 }, children: c.description || "We encountered an error. Please try again." }),
          c.cta && /* @__PURE__ */ l("button", { style: { padding: "10px 24px", background: v.red, border: "none", borderRadius: 8, color: "#fff", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: c.cta })
        ] }, c.id);
      case "loading-state":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 48, height: 48, border: `3px solid ${v.purple}30`, borderTopColor: v.purple, borderRadius: "50%", animation: "spin 1s linear infinite" } }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: c.text || "Loading..." }),
          /* @__PURE__ */ l("style", { children: "@keyframes spin { to { transform: rotate(360deg); } }" })
        ] }, c.id);
      case "testimonial":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "2.5rem", color: v.purple, opacity: 0.6, lineHeight: 1 }, children: '"' }),
          /* @__PURE__ */ l("p", { style: { flex: 1, color: t.textPrimary, fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic", marginTop: 8 }, children: c.quote || "This product has completely transformed how we work." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginTop: 20, paddingTop: 16, borderTop: `1px solid ${u}` }, children: [
            /* @__PURE__ */ l("div", { style: { width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }, children: (c.name || "J").charAt(0) }),
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.95rem" }, children: c.name || "Jane Doe" }),
              /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: c.title || "CEO, Company" })
            ] })
          ] })
        ] }, c.id);
      case "footer":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: e ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.3)", borderRadius: "16px 16px 0 0", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 24 }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }, children: (c.sections || [["Product", "Features", "Pricing"], ["Company", "About", "Blog"], ["Support", "Help", "Contact"]]).map((F, N) => /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.9rem" }, children: F[0] }),
            F.slice(1).map((Z, T) => /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem", cursor: "pointer" }, children: Z }, T))
          ] }, N)) }),
          /* @__PURE__ */ S("div", { style: { borderTop: `1px solid ${u}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: c.copyright || "© 2024 Company. All rights reserved." }),
            /* @__PURE__ */ l("div", { style: { display: "flex", gap: 16 }, children: ["twitter", "github", "linkedin"].map((F, N) => /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: 8, background: g.elevated, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "0.9rem", color: t.textSecondary }, children: F === "twitter" ? "𝕏" : F === "github" ? "⌗" : "in" }, N)) })
          ] })
        ] }, c.id);
      case "social-links":
        const ae = { twitter: "𝕏", github: "⌗", linkedin: "in", facebook: "f", instagram: "📷", youtube: "▶" };
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", gap: 12 }, children: (c.links || ["twitter", "github", "linkedin"]).map((F, N) => /* @__PURE__ */ l("div", { style: { width: 40, height: 40, borderRadius: 10, background: g.elevated, border: `1px solid ${d}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1rem", color: t.textSecondary }, children: ae[F.toLowerCase()] || F.charAt(0).toUpperCase() }, N)) }, c.id);
      case "cta-section":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: `linear-gradient(135deg, ${v.purple}20, ${v.blue}15)`, border: `1px solid ${v.purple}30`, borderRadius: 20, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }, children: [
          /* @__PURE__ */ l("h2", { style: { color: t.textPrimary, fontSize: "1.8rem", fontWeight: 800, marginBottom: 12 }, children: c.title || "Ready to get started?" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "1rem", maxWidth: 480, marginBottom: 24 }, children: c.description || "Join thousands of satisfied customers today." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 12 }, children: [
            /* @__PURE__ */ l("button", { style: { padding: "14px 28px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }, children: c.cta || "Get Started" }),
            /* @__PURE__ */ l("button", { style: { padding: "14px 28px", background: "transparent", border: `1px solid ${m}`, borderRadius: 10, color: t.textPrimary, fontSize: "1rem", fontWeight: 600, cursor: "pointer" }, children: "Learn More" })
          ] })
        ] }, c.id);
      case "profile-card":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: "2rem", color: "#fff", fontWeight: 700 }, children: (c.name || "U").charAt(0) }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 700, marginBottom: 4 }, children: c.name || "User Name" }),
          /* @__PURE__ */ l("span", { style: { color: v.purple, fontSize: "0.85rem", marginBottom: 12 }, children: c.username || "@username" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5 }, children: c.bio || "Software developer and design enthusiast." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 24, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${u}`, width: "100%", justifyContent: "center" }, children: [
            /* @__PURE__ */ S("div", { style: { textAlign: "center" }, children: [
              /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 700, fontSize: "1.1rem" }, children: "1.2K" }),
              /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "Followers" })
            ] }),
            /* @__PURE__ */ S("div", { style: { textAlign: "center" }, children: [
              /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 700, fontSize: "1.1rem" }, children: "348" }),
              /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "Following" })
            ] })
          ] })
        ] }, c.id);
      case "activity-item":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${ge[Math.floor(Math.random() * 5)]}, ${ge[Math.floor(Math.random() * 5) + 1]})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 600, flexShrink: 0 }, children: "U" }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ l("p", { style: { color: t.textPrimary, fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }, children: c.text || "User performed an action" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: c.time || "2 hours ago" })
          ] })
        ] }, c.id);
      case "comment":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, display: "flex", alignItems: "flex-start", gap: 12, padding: "16px", background: g.low, borderRadius: 12, border: `1px solid ${u}` }, children: [
          /* @__PURE__ */ l("div", { style: { width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.9rem", fontWeight: 600, flexShrink: 0 }, children: (c.username || "U").charAt(0) }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.9rem" }, children: c.username || "Username" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: c.time || "1 hour ago" })
            ] }),
            /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }, children: c.text || "This is a comment..." }),
            /* @__PURE__ */ S("div", { style: { display: "flex", gap: 16, marginTop: 10 }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem", cursor: "pointer" }, children: "❤️ Like" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem", cursor: "pointer" }, children: "💬 Reply" })
            ] })
          ] })
        ] }, c.id);
      case "code-block":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.code, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden", fontFamily: "SF Mono, Monaco, Consolas, monospace" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: g.low, borderBottom: `1px solid ${u}` }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: c.language || "javascript" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem", cursor: "pointer" }, children: "📋 Copy" })
          ] }),
          /* @__PURE__ */ l("pre", { style: { margin: 0, padding: "16px", color: t.textSecondary, fontSize: "0.85rem", lineHeight: 1.6, overflow: "auto" }, children: /* @__PURE__ */ l("code", { children: c.code || `const greeting = "Hello, World!";
console.log(greeting);` }) })
        ] }, c.id);
      case "upload":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, height: c.height, background: g.low, border: `2px dashed ${f}`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, cursor: "pointer", transition: "all 0.2s" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 56, height: 56, borderRadius: 14, background: `${v.purple}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }, children: "📤" }),
          /* @__PURE__ */ S("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ l("p", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 600, marginBottom: 4 }, children: c.label || "Drag files here" }),
            /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: "or click to browse" })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "Max 10MB • PNG, JPG, PDF" })
        ] }, c.id);
      case "accordion":
        return /* @__PURE__ */ l("div", { style: { ...p, width: c.width, background: g.low, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden" }, children: (c.items || ["Section 1", "Section 2", "Section 3"]).map((F, N) => {
          var Z;
          return /* @__PURE__ */ S("div", { style: { borderBottom: N < (((Z = c.items) == null ? void 0 : Z.length) || 3) - 1 ? `1px solid ${u}` : "none" }, children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", cursor: "pointer" }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 500 }, children: F }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, transform: N === 0 ? "rotate(180deg)" : "none", transition: "transform 0.2s" }, children: "▾" })
            ] }),
            N === 0 && /* @__PURE__ */ l("div", { style: { padding: "0 18px 14px", color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5 }, children: "Expanded content for this section with more details..." })
          ] }, N);
        }) }, c.id);
      case "data-table":
        return /* @__PURE__ */ S("div", { style: { ...p, width: c.width, background: g.low, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden" }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", background: g.high, borderBottom: `1px solid ${d}` }, children: ["Name", "Status", "Date", "Actions"].map((F, N) => /* @__PURE__ */ l("div", { style: { flex: N === 0 ? 2 : 1, padding: "12px 16px", color: t.textSecondary, fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }, children: F }, N)) }),
          Array.from({ length: c.rows || 3 }).map((F, N) => /* @__PURE__ */ S("div", { style: { display: "flex", borderBottom: N < (c.rows || 3) - 1 ? `1px solid ${u}` : "none" }, children: [
            /* @__PURE__ */ S("div", { style: { flex: 2, padding: "14px 16px", color: t.textPrimary, fontSize: "0.9rem" }, children: [
              "Item ",
              N + 1
            ] }),
            /* @__PURE__ */ l("div", { style: { flex: 1, padding: "14px 16px" }, children: /* @__PURE__ */ l("span", { style: { padding: "4px 10px", background: N === 0 ? `${v.green}20` : `${v.orange}20`, color: N === 0 ? v.green : v.orange, borderRadius: 6, fontSize: "0.75rem", fontWeight: 500 }, children: N === 0 ? "Active" : "Pending" }) }),
            /* @__PURE__ */ S("div", { style: { flex: 1, padding: "14px 16px", color: t.textMuted, fontSize: "0.85rem" }, children: [
              "Dec ",
              10 + N,
              ", 2024"
            ] }),
            /* @__PURE__ */ S("div", { style: { flex: 1, padding: "14px 16px", display: "flex", gap: 8 }, children: [
              /* @__PURE__ */ l("span", { style: { cursor: "pointer" }, children: "✏️" }),
              /* @__PURE__ */ l("span", { style: { cursor: "pointer" }, children: "🗑️" })
            ] })
          ] }, N))
        ] }, c.id);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "auto", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }" }),
    /* @__PURE__ */ l("div", { style: { position: "relative", minHeight: i, padding: 20 }, children: n.map(y) })
  ] });
}
function C2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 50, y: 50 }), { components: s = [], connections: h = [] } = o, d = {
    service: { color: v.blue, icon: "⚙️" },
    database: { color: v.green, icon: "🗄️" },
    cache: { color: v.red, icon: "⚡" },
    queue: { color: v.orange, icon: "📬" },
    api: { color: v.purple, icon: "🔌" },
    component: { color: v.purple, icon: "📦" },
    default: { color: v.purple, icon: "📦" }
  }, u = ye(() => {
    const c = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(s.length))));
    return s.map((p, b) => ({
      ...p,
      id: p.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
      defaultX: 120 + b % c * 220,
      defaultY: 100 + Math.floor(b / c) * 160,
      style: d[p.type] || d.default
    }));
  }, [s]), f = (c) => e.getNodePosition(c.id, c.defaultX, c.defaultY), m = K(() => {
    const c = e.finishEditing();
    if (c.nodeId && c.newValue !== void 0 && n) {
      const p = u.find((b) => b.id === c.nodeId);
      p && p.label !== c.newValue && n(c.nodeId, p.label, c.newValue);
    }
  }, [e, u, n]);
  he(() => {
    const c = (p) => {
      const x = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? p.metaKey : p.ctrlKey;
      if (!e.editingNode) {
        if ((p.key === "Delete" || p.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          p.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (x && p.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          p.preventDefault(), e.copySelectedNodes(u);
          return;
        }
        if (x && p.key.toLowerCase() === "v" && e.clipboard && a) {
          p.preventDefault();
          const C = e.pasteNodes();
          C && a(C);
          return;
        }
      }
    };
    return window.addEventListener("keydown", c), () => window.removeEventListener("keydown", c);
  }, [e, u, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const c = e.getNodesInSelectionBox(u.map((p) => ({ ...p, x: p.defaultX, y: p.defaultY })), e.selectionBox);
      c.length > 0 && e.setSelectedNodes(new Set(c));
    }
  }, [e.isSelecting, e.selectionBox, u, e]);
  const g = K((c) => {
    (c.target === e.canvasRef.current || c.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), y = ye(() => {
    if (!u.length) return { x: 0, y: 0, width: 400, height: 300 };
    const c = u.map((b) => b.defaultX), p = u.map((b) => b.defaultY);
    return { x: Math.min(...c) - 80, y: Math.min(...p) - 60, width: Math.max(...c) - Math.min(...c) + 280, height: Math.max(...p) - Math.min(...p) + 220 };
  }, [u]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "comp-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.purple }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((c, p) => {
            const b = u.find((P) => P.id === c.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), x = u.find((P) => P.id === c.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
            if (!b || !x) return null;
            const C = f(b), w = f(x), E = w.x - C.x, k = w.y - C.y, M = Math.sqrt(E * E + k * k) || 1, A = (C.x + w.x) / 2, I = (C.y + w.y) / 2, R = -k / M * 30, $ = E / M * 30, D = `M ${C.x + E / M * 75} ${C.y + k / M * 50} Q ${A + R} ${I + $} ${w.x - E / M * 75} ${w.y - k / M * 50}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: D, fill: "none", stroke: v.purple, strokeWidth: 2.5, markerEnd: "url(#comp-arrow)", opacity: 0.95 }),
              c.label && /* @__PURE__ */ l("text", { x: A + R, y: I + $ - 8, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: c.label })
            ] }, p);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: u.map((c) => {
        const p = f(c), b = e.dragging === c.id, x = e.selectedNodes.has(c.id);
        return /* @__PURE__ */ S("div", { onClick: (C) => e.handleNodeClick(C, c.id), onDoubleClick: (C) => e.handleNodeDoubleClick(C, c.id, c.label), onContextMenu: (C) => e.handleNodeContextMenu(C, c.id), onMouseDown: (C) => e.handleNodeMouseDown(C, c.id, p.x, p.y), onTouchStart: (C) => e.handleNodeTouchStart(C, c.id, p.x, p.y), style: { position: "absolute", left: p.x - 75, top: p.y - 50, width: 150, height: 100, background: `${c.style.color}15`, border: `2px solid ${x ? v.blue : c.style.color}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: b ? "grabbing" : "grab", boxShadow: x ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : b ? `0 0 30px ${c.style.color}50` : `0 4px 20px ${c.style.color}20`, transition: b ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "1.8rem", marginBottom: 6 }, children: c.style.icon }),
          e.editingNode === c.id ? /* @__PURE__ */ l(tt, { value: e.editingValue, onChange: (C) => e.setEditingValue(C), onFinish: m, style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? Ee.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? Ee.stroke : t.textPrimary, textAlign: "center", padding: "0 8px" }, children: c.label })
        ] }, c.id);
      }) })
    ] }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "6px 12px", borderRadius: 6, fontSize: "0.75rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ S("span", { children: [
        e.selectedNodes.size,
        " selected"
      ] }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.6 }, children: "|" }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.7 }, children: "Del to delete • ⌘C copy • ⌘V paste" })
    ] }),
    e.clipboard && /* @__PURE__ */ S("div", { style: { position: "absolute", top: e.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${v.green}20`, padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem", color: v.green, border: `1px solid ${v.green}40` }, children: [
      e.clipboard.length,
      " node",
      e.clipboard.length > 1 ? "s" : "",
      " copied"
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((c) => Math.min(c * 1.2, 2.5)), onZoomOut: () => e.setZoom((c) => Math.max(c * 0.8, 0.3)), onFit: () => e.fitToView(y), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(st, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function M2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 50, y: 50 }), { elements: s = [], relationships: h = [], boundaries: d = [], title: u = null, subtitle: f = null } = o, m = [
    { bg: "#1168BD", border: "#0D5BA8" },
    // Blue
    { bg: "#2D882D", border: "#236B23" },
    // Green
    { bg: "#7B4B94", border: "#5E3A72" },
    // Purple
    { bg: "#D4652F", border: "#B85525" },
    // Orange
    { bg: "#C73E1D", border: "#A33318" },
    // Red
    { bg: "#1A9988", border: "#157A6C" }
    // Teal
  ], g = {
    person: { color: "#08427B", label: "Person", shape: "person" },
    external: { color: "#999999", label: "External System", shape: "rect" }
  }, y = (R, $ = -1) => {
    if ($ < 0 && g[R]) return g[R];
    if ($ >= 0) {
      const D = m[$ % m.length], P = R.charAt(0).toUpperCase() + R.slice(1);
      return { color: D.bg, label: P, shape: R === "database" ? "cylinder" : "rect" };
    }
    return { color: "#1168BD", label: R.charAt(0).toUpperCase() + R.slice(1), shape: "rect" };
  }, c = m.map((R) => R.border), [p, b] = V({}), x = ye(() => {
    const R = /* @__PURE__ */ new Map(), $ = [];
    s.forEach((N, Z) => {
      N.boundary ? (R.has(N.boundary) || R.set(N.boundary, []), R.get(N.boundary).push({ ...N, origIndex: Z })) : $.push({ ...N, origIndex: Z });
    });
    const D = [], P = u || f ? 80 : 0, _ = 160, z = 100, B = 40, j = 40, X = 30, te = 50, ee = 3, ae = 100;
    let F = 100 + P;
    if ($.length > 0) {
      const N = $.length * _ + ($.length - 1) * B, T = ae + 300 - N / 2 + _ / 2;
      $.forEach((W, O) => {
        D.push({
          ...W,
          id: W.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
          defaultX: T + O * (_ + B),
          defaultY: F + z / 2,
          style: y(W.type, -1)
        });
      }), F += z + te;
    }
    return d.forEach((N, Z) => {
      const T = R.get(N.id) || [];
      if (T.length === 0) return;
      const W = Math.min(ee, T.length), O = Math.ceil(T.length / W), de = F + X + 35, Se = ae + X + 20;
      T.forEach((ze, De) => {
        const ie = De % W, G = Math.floor(De / W);
        D.push({
          ...ze,
          id: ze.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
          defaultX: Se + ie * (_ + B) + _ / 2,
          defaultY: de + G * (z + j) + z / 2,
          style: y(ze.type, Z),
          boundaryId: N.id,
          boundaryIndex: Z
        });
      });
      const fe = O * z + (O - 1) * j;
      F += fe + X * 2 + 40 + te;
    }), D;
  }, [s, d, u, f]), C = ye(() => d.map((P, _) => {
    const z = x.filter((X) => X.boundaryId === P.id);
    if (z.length === 0) return null;
    const B = z.map((X) => X.defaultX), j = z.map((X) => X.defaultY);
    return {
      id: P.id,
      name: P.name,
      x: Math.min(...B) - 160 / 2 - 25,
      y: Math.min(...j) - 100 / 2 - 25 - 25,
      width: Math.max(...B) - Math.min(...B) + 160 + 25 * 2,
      height: Math.max(...j) - Math.min(...j) + 100 + 25 * 2 + 25,
      color: c[_ % c.length]
    };
  }).filter(Boolean), [d, x]), w = (R) => e.getNodePosition(R.id, R.defaultX, R.defaultY), E = K(() => {
    const R = e.finishEditing();
    if (R.nodeId && R.newValue !== void 0 && n) {
      const $ = x.find((D) => D.id === R.nodeId);
      $ && $.label !== R.newValue && n(R.nodeId, $.label, R.newValue);
    }
  }, [e, x, n]), k = K(() => {
    if (!x || x.length === 0) return;
    const R = {};
    x.forEach(($) => {
      R[$.id] = { x: $.defaultX, y: $.defaultY };
    }), b({}), e.setPositions(R);
  }, [x, e]), M = _e(!1);
  he(() => {
    if (!M.current && x && x.length > 0) {
      M.current = !0;
      const R = setTimeout(() => {
        k();
      }, 100);
      return () => clearTimeout(R);
    }
  }, [x, k]), he(() => {
    const R = ($) => {
      const P = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? $.metaKey : $.ctrlKey;
      if (!e.editingNode) {
        if (($.key === "Delete" || $.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          $.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (P && $.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          $.preventDefault(), e.copySelectedNodes(x);
          return;
        }
        if (P && $.key.toLowerCase() === "v" && e.clipboard && a) {
          $.preventDefault();
          const _ = e.pasteNodes();
          _ && a(_);
          return;
        }
      }
    };
    return window.addEventListener("keydown", R), () => window.removeEventListener("keydown", R);
  }, [e, x, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const R = e.getNodesInSelectionBox(x.map(($) => ({ ...$, x: $.defaultX, y: $.defaultY })), e.selectionBox);
      R.length > 0 && e.setSelectedNodes(new Set(R));
    }
  }, [e.isSelecting, e.selectionBox, x, e]);
  const A = K((R) => {
    (R.target === e.canvasRef.current || R.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), I = ye(() => {
    if (!x.length) return { x: 0, y: 0, width: 400, height: 300 };
    const R = x.map((D) => D.defaultX), $ = x.map((D) => D.defaultY);
    return { x: Math.min(...R) - 100, y: Math.min(...$) - 80, width: Math.max(...R) - Math.min(...R) + 320, height: Math.max(...$) - Math.min(...$) + 260 };
  }, [x]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: A, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "c4-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: "#707070" }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((R, $) => {
            const D = x.find((O) => O.id === R.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), P = x.find((O) => O.id === R.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
            if (!D || !P) return null;
            const _ = w(D), z = w(P), B = z.x - _.x, j = z.y - _.y, X = Math.sqrt(B * B + j * j) || 1, te = 80, ee = 50, ae = _.x + B / X * te, F = _.y + j / X * ee, N = z.x - B / X * te, Z = z.y - j / X * ee, T = (ae + N) / 2, W = (F + Z) / 2;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("line", { x1: ae, y1: F, x2: N, y2: Z, stroke: "#707070", strokeWidth: 1.5, markerEnd: "url(#c4-arrow)" }),
              R.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: T - R.label.length * 3 - 6, y: W - 10, width: R.label.length * 6 + 12, height: 16, rx: 2, fill: "white", stroke: "#707070", strokeWidth: 1 }),
                /* @__PURE__ */ l("text", { x: T, y: W + 2, textAnchor: "middle", fill: "#333", fontSize: 9, fontWeight: "500", children: R.label })
              ] })
            ] }, $);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: [
        (u || f) && /* @__PURE__ */ S("div", { style: { position: "absolute", left: 100, top: 20, textAlign: "left" }, children: [
          u && /* @__PURE__ */ l("div", { style: { fontSize: "1.3rem", fontWeight: 700, color: t.textPrimary, marginBottom: 4 }, children: u }),
          f && /* @__PURE__ */ l("div", { style: { fontSize: "0.85rem", fontWeight: 400, color: t.textSecondary }, children: f })
        ] }),
        d.map((R, $) => {
          const D = p[R.id] || C.find((_) => _.id === R.id);
          if (!D) return null;
          const P = m[$ % m.length];
          return /* @__PURE__ */ l("div", { style: { position: "absolute", left: D.x, top: D.y, width: D.width, height: D.height, background: `${P.bg}10`, border: `2px dashed ${P.bg}`, borderRadius: 8, pointerEvents: "none" }, children: /* @__PURE__ */ l("div", { style: { position: "absolute", top: 8, left: 12, fontSize: "0.8rem", fontWeight: 600, color: P.bg, letterSpacing: "0.2px" }, children: R.name }) }, R.id);
        }),
        x.map((R) => {
          const $ = w(R), D = e.dragging === R.id, P = e.selectedNodes.has(R.id), _ = R.style.shape === "person", z = 160, B = 100, j = R.style.color;
          return /* @__PURE__ */ S("div", { onClick: (X) => e.handleNodeClick(X, R.id), onDoubleClick: (X) => e.handleNodeDoubleClick(X, R.id, R.label), onContextMenu: (X) => e.handleNodeContextMenu(X, R.id), onMouseDown: (X) => e.handleNodeMouseDown(X, R.id, $.x, $.y), onTouchStart: (X) => e.handleNodeTouchStart(X, R.id, $.x, $.y), style: { position: "absolute", left: $.x - z / 2, top: $.y - B / 2, width: z, height: B, background: j, border: P ? `2px solid ${v.blue}` : "none", borderRadius: _ ? "50% 50% 8px 8px" : 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: D ? "grabbing" : "grab", boxShadow: P ? `0 0 0 3px ${v.blue}40` : "0 2px 4px rgba(0,0,0,0.2)", transition: D ? "none" : "box-shadow 0.15s", touchAction: "none", padding: "8px 12px", boxSizing: "border-box" }, children: [
            /* @__PURE__ */ S("div", { style: { fontSize: "0.6rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", textAlign: "center", marginBottom: 4 }, children: [
              "[",
              R.style.label,
              "]"
            ] }),
            e.editingNode === R.id ? /* @__PURE__ */ l(tt, { value: e.editingValue, onChange: (X) => e.setEditingValue(X), onFinish: E, style: { fontSize: "0.85rem", fontWeight: 700, color: "#fff", textAlign: "center" } }) : /* @__PURE__ */ l("div", { style: { fontSize: "0.85rem", fontWeight: 700, color: "#fff", textAlign: "center", lineHeight: 1.2 }, children: R.label }),
            R.description && /* @__PURE__ */ l("div", { style: { fontSize: "0.65rem", color: "rgba(255,255,255,0.8)", textAlign: "center", marginTop: 4, lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }, children: R.description })
          ] }, R.id);
        })
      ] })
    ] }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "6px 12px", borderRadius: 6, fontSize: "0.75rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ S("span", { children: [
        e.selectedNodes.size,
        " selected"
      ] }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.6 }, children: "|" }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.7 }, children: "Del to delete • ⌘C copy • ⌘V paste" })
    ] }),
    e.clipboard && /* @__PURE__ */ S("div", { style: { position: "absolute", top: e.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${v.green}20`, padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem", color: v.green, border: `1px solid ${v.green}40` }, children: [
      e.clipboard.length,
      " node",
      e.clipboard.length > 1 ? "s" : "",
      " copied"
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((R) => Math.min(R * 1.2, 2.5)), onZoomOut: () => e.setZoom((R) => Math.max(R * 0.8, 0.3)), onFit: () => e.fitToView(I), onReset: e.resetView, onLayout: k, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(st, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function A2({ data: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const n = Be({ x: 50, y: 50 }), { requirements: i = [], traces: a = [] } = o, e = {
    critical: v.red,
    high: v.orange,
    medium: v.amber,
    low: v.green
  }, s = ye(() => {
    const u = Math.min(3, Math.max(2, Math.ceil(Math.sqrt(i.length))));
    return i.map((f, m) => {
      var g;
      return {
        ...f,
        id: f.name.toLowerCase().replace(/[^a-z0-9]/g, "_"),
        defaultX: 150 + m % u * 280,
        defaultY: 100 + Math.floor(m / u) * 160,
        color: e[(g = f.priority) == null ? void 0 : g.toLowerCase()] || v.orange
      };
    });
  }, [i]), h = (u) => n.getNodePosition(u.id, u.defaultX, u.defaultY), d = ye(() => {
    if (!s.length) return { x: 0, y: 0, width: 400, height: 300 };
    const u = s.map((m) => m.defaultX), f = s.map((m) => m.defaultY);
    return { x: Math.min(...u) - 100, y: Math.min(...f) - 60, width: Math.max(...u) - Math.min(...u) + 360, height: Math.max(...f) - Math.min(...f) + 220 };
  }, [s]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: n.canvasRef, className: "canvas-bg", onMouseDown: n.handleCanvasMouseDown, onMouseMove: n.handleMouseMove, onMouseUp: n.handleMouseUp, onMouseLeave: n.handleMouseUp, onTouchStart: n.handleTouchStart, onTouchMove: n.handleTouchMove, onTouchEnd: n.handleTouchEnd, onWheel: n.handleWheel, style: { width: "100%", height: "100%", cursor: n.isPanning || n.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * n.zoom}px ${25 * n.zoom}px`, backgroundPosition: `${n.pan.x}px ${n.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "req-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.orange }) }) }),
        /* @__PURE__ */ l("g", { transform: `translate(${n.pan.x}, ${n.pan.y}) scale(${n.zoom})`, children: a.map((u, f) => {
          const m = s.find((C) => C.id === u.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), g = s.find((C) => C.id === u.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
          if (!m || !g) return null;
          const y = h(m), c = h(g), p = c.x - y.x, b = c.y - y.y, x = Math.sqrt(p * p + b * b) || 1;
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("line", { x1: y.x + p / x * 120, y1: y.y + b / x * 65, x2: c.x - p / x * 120, y2: c.y - b / x * 65, stroke: v.orange, strokeWidth: 2.5, markerEnd: "url(#req-arrow)", opacity: 0.95 }),
            u.label && /* @__PURE__ */ l("text", { x: (y.x + c.x) / 2, y: (y.y + c.y) / 2 - 8, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: u.label })
          ] }, f);
        }) })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`, transformOrigin: "0 0" }, children: s.map((u) => {
        const f = h(u), m = n.dragging === u.id;
        return /* @__PURE__ */ S("div", { onMouseDown: (g) => n.handleNodeMouseDown(g, u.id, f.x, f.y), onTouchStart: (g) => n.handleNodeTouchStart(g, u.id, f.x, f.y), style: { position: "absolute", left: f.x - 110, top: f.y - 55, width: 220, height: 110, background: `${u.color}15`, border: `2px solid ${u.color}`, borderRadius: 12, padding: 12, cursor: m ? "grabbing" : "grab", boxShadow: m ? `0 0 30px ${u.color}50` : `0 4px 20px ${u.color}20`, transition: m ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: "📋" }),
            /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem", fontWeight: 600, color: t.textPrimary }, children: u.name })
          ] }),
          u.text && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textSecondary, marginBottom: 6, lineHeight: 1.3 }, children: u.text }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [
            u.priority && /* @__PURE__ */ l("span", { style: { fontSize: "0.65rem", padding: "2px 6px", background: `${u.color}30`, color: u.color, borderRadius: 4 }, children: u.priority }),
            u.risk && /* @__PURE__ */ S("span", { style: { fontSize: "0.65rem", padding: "2px 6px", background: "rgba(255,255,255,0.1)", color: t.textSecondary, borderRadius: 4 }, children: [
              "Risk: ",
              u.risk
            ] })
          ] })
        ] }, u.id);
      }) })
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => n.setZoom((u) => Math.min(u * 1.2, 2.5)), onZoomOut: () => n.setZoom((u) => Math.max(u * 0.8, 0.3)), onFit: () => n.fitToView(d), onReset: n.resetView, zoom: n.zoom })
  ] });
}
function $2({ data: o, theme: t = $e.dark, sketchMode: r = !1 }) {
  const n = Be({ x: 50, y: 50 }), { nodes: i = [], links: a = [] } = o, e = 20, s = [v.purple, v.blue, v.cyan, v.emerald, v.green, v.amber, v.orange], h = ye(() => {
    if (!i.length) return { x: 0, y: 0, width: 800, height: 500 };
    const f = i.map((y) => y.x), m = i.map((y) => y.y), g = i.map((y) => y.height || 30);
    return {
      x: Math.min(...f) - 40,
      y: Math.min(...m) - 40,
      width: Math.max(...f) - Math.min(...f) + e + 80,
      height: Math.max(...m.map((y, c) => y + g[c])) - Math.min(...m) + 80
    };
  }, [i]), d = (f) => n.getNodePosition(f.id, f.x, f.y), u = (f) => {
    const m = i.find((E) => E.id === f.source), g = i.find((E) => E.id === f.target);
    if (!m || !g) return "";
    const y = d(m), c = d(g), p = y.x + e, b = y.y + (m.height || 30) / 2, x = c.x, C = c.y + (g.height || 30) / 2, w = (p + x) / 2;
    return `M ${p} ${b} C ${w} ${b}, ${w} ${C}, ${x} ${C}`;
  };
  return /* @__PURE__ */ S("div", { style: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: t.canvasBg,
    borderRadius: 12,
    border: `1px solid ${t.border}`,
    touchAction: "none"
  }, children: [
    /* @__PURE__ */ S(
      "div",
      {
        ref: n.canvasRef,
        className: "canvas-bg",
        onMouseDown: n.handleCanvasMouseDown,
        onMouseMove: n.handleMouseMove,
        onMouseUp: n.handleMouseUp,
        onMouseLeave: n.handleMouseUp,
        onTouchStart: n.handleTouchStart,
        onTouchMove: n.handleTouchMove,
        onTouchEnd: n.handleTouchEnd,
        onWheel: n.handleWheel,
        style: {
          width: "100%",
          height: "100%",
          cursor: n.isPanning || n.dragging ? "grabbing" : "grab",
          touchAction: "none"
        },
        children: [
          /* @__PURE__ */ l("div", { className: "canvas-bg", style: {
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
            backgroundSize: `${25 * n.zoom}px ${25 * n.zoom}px`,
            backgroundPosition: `${n.pan.x}px ${n.pan.y}px`,
            pointerEvents: "none"
          } }),
          /* @__PURE__ */ S(
            "svg",
            {
              width: "100%",
              height: "100%",
              style: { position: "absolute", overflow: "visible", pointerEvents: "none" },
              children: [
                /* @__PURE__ */ l("defs", { children: a.map((f, m) => {
                  const g = i.find((b) => b.id === f.source), y = i.find((b) => b.id === f.target), c = s[((g == null ? void 0 : g.layer) || 0) % s.length], p = s[((y == null ? void 0 : y.layer) || 0) % s.length];
                  return /* @__PURE__ */ S("linearGradient", { id: `sankey-gradient-${m}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ l("stop", { offset: "0%", stopColor: c, stopOpacity: "0.6" }),
                    /* @__PURE__ */ l("stop", { offset: "100%", stopColor: p, stopOpacity: "0.6" })
                  ] }, `grad-${m}`);
                }) }),
                /* @__PURE__ */ l("g", { transform: `translate(${n.pan.x}, ${n.pan.y}) scale(${n.zoom})`, children: a.map((f, m) => {
                  const g = u(f), y = f.thickness || 8;
                  return /* @__PURE__ */ S("g", { children: [
                    /* @__PURE__ */ l(
                      "path",
                      {
                        d: g,
                        fill: "none",
                        stroke: `url(#sankey-gradient-${m})`,
                        strokeWidth: y,
                        strokeLinecap: "round",
                        opacity: 0.7
                      }
                    ),
                    /* @__PURE__ */ l("title", { children: `${f.value}` })
                  ] }, f.id);
                }) })
              ]
            }
          ),
          /* @__PURE__ */ l("div", { style: {
            position: "absolute",
            transform: `translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`,
            transformOrigin: "0 0"
          }, children: i.map((f, m) => {
            const g = d(f), y = n.dragging === f.id, c = s[(f.layer || 0) % s.length], p = f.height || 30;
            return /* @__PURE__ */ S(
              "div",
              {
                onMouseDown: (b) => n.handleNodeMouseDown(b, f.id, g.x, g.y),
                onTouchStart: (b) => n.handleNodeTouchStart(b, f.id, g.x, g.y),
                style: {
                  position: "absolute",
                  left: g.x,
                  top: g.y,
                  width: e,
                  height: p,
                  background: r ? Ee.stroke : c,
                  borderRadius: 3,
                  cursor: y ? "grabbing" : "grab",
                  boxShadow: y ? `0 0 20px ${c}80` : `0 2px 10px ${c}40`,
                  transition: y ? "none" : "box-shadow 0.2s",
                  touchAction: "none"
                },
                children: [
                  /* @__PURE__ */ l("div", { style: {
                    position: "absolute",
                    left: e + 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    whiteSpace: "nowrap",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    fontFamily: r ? "'Caveat', cursive" : "inherit",
                    color: r ? Ee.stroke : t.textPrimary
                  }, children: f.label }),
                  /* @__PURE__ */ l("div", { style: {
                    position: "absolute",
                    left: e + 8,
                    top: "50%",
                    transform: "translateY(50%)",
                    fontSize: "0.65rem",
                    color: t.textSecondary
                  }, children: f.value })
                ]
              },
              f.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      We,
      {
        onZoomIn: () => n.setZoom((f) => Math.min(f * 1.2, 2.5)),
        onZoomOut: () => n.setZoom((f) => Math.max(f * 0.8, 0.3)),
        onFit: () => n.fitToView(h),
        onReset: n.resetView,
        zoom: n.zoom
      }
    )
  ] });
}
function R2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 50, y: 50 }), { lanes: s = [], nodes: h = [], edges: d = [] } = o, u = [v.purple, v.blue, v.cyan, v.emerald, v.green, v.amber], f = ye(() => {
    if (!h.length) return { x: 0, y: 0, width: 800, height: 400 };
    const c = h.map((C) => C.x), p = h.map((C) => C.y), b = h.map((C) => C.width || 140), x = h.map((C) => C.height || 50);
    return {
      x: Math.min(...c) - 200,
      y: Math.min(...p) - 40,
      width: Math.max(...c.map((C, w) => C + b[w])) - Math.min(...c) + 280,
      height: Math.max(...p.map((C, w) => C + x[w])) - Math.min(...p) + 80
    };
  }, [h]), m = (c) => e.getNodePosition(c.id, c.x, c.y), g = (c) => {
    const p = h.find((ee) => ee.id === c.source), b = h.find((ee) => ee.id === c.target);
    if (!p || !b) return "";
    const x = m(p), C = m(b), w = p.width || 140, E = p.height || 50, k = b.width || 140, M = b.height || 50, A = x.x + w / 2, I = x.y + E / 2, R = C.x + k / 2, $ = C.y + M / 2;
    let D, P, _, z;
    const B = R - A, j = $ - I;
    Math.abs(B) > Math.abs(j) ? (D = B > 0 ? x.x + w : x.x, P = I, _ = B > 0 ? C.x : C.x + k, z = $) : (D = A, P = j > 0 ? x.y + E : x.y, _ = R, z = j > 0 ? C.y : C.y + M);
    const X = (D + _) / 2, te = (P + z) / 2;
    return Math.abs(B) > Math.abs(j) ? `M ${D} ${P} L ${X} ${P} L ${X} ${z} L ${_} ${z}` : `M ${D} ${P} L ${D} ${te} L ${_} ${te} L ${_} ${z}`;
  }, y = (c) => {
    switch (c) {
      case "start":
        return { borderRadius: "50%", width: 30, height: 30, background: v.green };
      case "end":
        return { borderRadius: "50%", width: 30, height: 30, background: v.red, border: "3px solid" };
      case "diamond":
        return { borderRadius: 4, transform: "rotate(45deg)", width: 40, height: 40 };
      case "document":
        return { borderRadius: "0 0 8px 8px", clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" };
      case "parallelogram":
        return { transform: "skewX(-10deg)" };
      default:
        return { borderRadius: 8 };
    }
  };
  return /* @__PURE__ */ S("div", { style: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: t.canvasBg,
    borderRadius: 12,
    border: `1px solid ${t.border}`,
    touchAction: "none"
  }, children: [
    /* @__PURE__ */ S(
      "div",
      {
        ref: e.canvasRef,
        className: "canvas-bg",
        onMouseDown: e.handleCanvasMouseDown,
        onMouseMove: e.handleMouseMove,
        onMouseUp: e.handleMouseUp,
        onMouseLeave: e.handleMouseUp,
        onTouchStart: e.handleTouchStart,
        onTouchMove: e.handleTouchMove,
        onTouchEnd: e.handleTouchEnd,
        onWheel: e.handleWheel,
        style: {
          width: "100%",
          height: "100%",
          cursor: e.isPanning || e.dragging ? "grabbing" : "grab",
          touchAction: "none"
        },
        children: [
          /* @__PURE__ */ l("div", { className: "canvas-bg", style: {
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
            backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`,
            backgroundPosition: `${e.pan.x}px ${e.pan.y}px`,
            pointerEvents: "none"
          } }),
          /* @__PURE__ */ S(
            "svg",
            {
              width: "100%",
              height: "100%",
              style: { position: "absolute", overflow: "visible", pointerEvents: "none" },
              children: [
                /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "swimlane-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: t.textSecondary }) }) }),
                /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
                  s.map((c, p) => {
                    const x = u[p % u.length];
                    return /* @__PURE__ */ S("g", { children: [
                      /* @__PURE__ */ l(
                        "rect",
                        {
                          x: 0,
                          y: c.y,
                          width: 1200,
                          height: c.height,
                          fill: x,
                          fillOpacity: 0.05,
                          stroke: x,
                          strokeOpacity: 0.3,
                          strokeWidth: 1,
                          rx: 4
                        }
                      ),
                      p < s.length - 1 && /* @__PURE__ */ l(
                        "line",
                        {
                          x1: 0,
                          y1: c.y + c.height,
                          x2: 1200,
                          y2: c.y + c.height,
                          stroke: t.border,
                          strokeWidth: 1,
                          strokeDasharray: "5,5"
                        }
                      )
                    ] }, c.id);
                  }),
                  d.map((c) => {
                    const p = g(c);
                    return /* @__PURE__ */ S("g", { children: [
                      /* @__PURE__ */ l(
                        "path",
                        {
                          d: p,
                          fill: "none",
                          stroke: r ? Ee.stroke : t.textSecondary,
                          strokeWidth: 2,
                          markerEnd: "url(#swimlane-arrow)",
                          opacity: 0.7
                        }
                      ),
                      c.label && /* @__PURE__ */ l(
                        "text",
                        {
                          x: 0,
                          y: 0,
                          fill: t.textSecondary,
                          fontSize: "0.7rem",
                          fontFamily: r ? "'Caveat', cursive" : "inherit",
                          textAnchor: "middle",
                          children: /* @__PURE__ */ l("textPath", { href: `#edge-path-${c.id}`, startOffset: "50%", children: c.label })
                        }
                      )
                    ] }, c.id);
                  })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ S("div", { style: {
            position: "absolute",
            transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,
            transformOrigin: "0 0"
          }, children: [
            s.map((c, p) => {
              const b = u[p % u.length];
              return /* @__PURE__ */ l(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: 0,
                    top: c.y,
                    width: 160,
                    height: c.height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 16px",
                    background: `${b}15`,
                    borderRight: `2px solid ${b}50`,
                    borderRadius: "4px 0 0 4px"
                  },
                  children: /* @__PURE__ */ l("span", { style: {
                    color: r ? Ee.stroke : b,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    fontFamily: r ? "'Caveat', cursive" : "inherit",
                    textAlign: "center",
                    wordBreak: "break-word"
                  }, children: c.name })
                },
                `lane-header-${c.id}`
              );
            }),
            h.map((c) => {
              const p = m(c), b = e.dragging === c.id, x = s.find((M) => M.id === c.lane), C = s.indexOf(x), w = u[C % u.length] || v.purple, E = y(c.type), k = ["start", "end", "diamond"].includes(c.type);
              return /* @__PURE__ */ l(
                "div",
                {
                  onMouseDown: (M) => e.handleNodeMouseDown(M, c.id, p.x, p.y),
                  onTouchStart: (M) => e.handleNodeTouchStart(M, c.id, p.x, p.y),
                  style: {
                    position: "absolute",
                    left: p.x,
                    top: p.y,
                    width: k ? E.width : c.width || 140,
                    height: k ? E.height : c.height || 50,
                    background: E.background || (r ? Ee.bg : `${w}20`),
                    border: `2px solid ${r ? Ee.stroke : w}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: b ? "grabbing" : "grab",
                    boxShadow: b ? `0 0 20px ${w}50` : "0 2px 8px rgba(0,0,0,0.2)",
                    transition: b ? "none" : "box-shadow 0.2s",
                    touchAction: "none",
                    ...E
                  },
                  children: !k && /* @__PURE__ */ l("span", { style: {
                    color: r ? Ee.stroke : t.textPrimary,
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    fontFamily: r ? "'Caveat', cursive" : "inherit",
                    textAlign: "center",
                    padding: "4px 8px",
                    wordBreak: "break-word",
                    transform: c.type === "diamond" ? "rotate(-45deg)" : "none"
                  }, children: c.label })
                },
                c.id
              );
            })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l(
      We,
      {
        onZoomIn: () => e.setZoom((c) => Math.min(c * 1.2, 2.5)),
        onZoomOut: () => e.setZoom((c) => Math.max(c * 0.8, 0.3)),
        onFit: () => e.fitToView(f),
        onReset: e.resetView,
        zoom: e.zoom
      }
    )
  ] });
}
function I2({ data: o, theme: t = $e.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: i, onPasteNodes: a }) {
  const e = Be({ x: 50, y: 50 }), { actors: s = [], useCases: h = [], relationships: d = [] } = o, { actorPositions: u, useCasePositions: f } = ye(() => {
    const w = /* @__PURE__ */ new Map();
    s.forEach(($) => w.set($.label.toLowerCase(), [])), d.forEach(($) => {
      const D = $.from.toLowerCase(), P = $.to.toLowerCase();
      w.has(D) && w.get(D).push(P);
    });
    const E = [], k = /* @__PURE__ */ new Set();
    let M = 120;
    const A = 110, I = 450;
    return s.forEach(($, D) => {
      (w.get($.label.toLowerCase()) || []).forEach((_) => {
        const z = h.find((B) => B.label.toLowerCase() === _);
        z && !k.has(z.id) && (E.push({ ...z, x: I, y: M, actorIndex: D }), k.add(z.id), M += A);
      });
    }), h.forEach(($) => {
      k.has($.id) || (E.push({ ...$, x: I, y: M, actorIndex: -1 }), M += A);
    }), { actorPositions: s.map(($, D) => {
      const P = E.filter((z) => z.actorIndex === D);
      let _;
      if (P.length > 0) {
        const z = Math.min(...P.map((j) => j.y)), B = Math.max(...P.map((j) => j.y));
        _ = (z + B) / 2;
      } else
        _ = 150 + D * 180;
      return { ...$, x: 120, y: _ };
    }), useCasePositions: E };
  }, [s, h, d]), m = (w) => e.getNodePosition(w.id, w.x, w.y), g = (w) => e.getNodePosition(w.id, w.x, w.y), y = ye(() => d.map((w, E) => {
    const k = u.find((A) => A.label.toLowerCase() === w.from.toLowerCase()), M = f.find((A) => A.label.toLowerCase() === w.to.toLowerCase());
    return k && M ? { id: `conn-${E}`, from: k, to: M } : null;
  }).filter(Boolean), [d, u, f]), c = ye(() => {
    if (f.length === 0) return { x: 280, y: 40, width: 400, height: 300 };
    const w = f.map((M) => M.x), E = f.map((M) => M.y), k = 100;
    return {
      x: Math.min(...w) - k,
      y: Math.min(...E) - k - 20,
      width: Math.max(...w) - Math.min(...w) + k * 2 + 140,
      height: Math.max(...E) - Math.min(...E) + k * 2 + 80
    };
  }, [f]), p = ye(() => {
    const w = [...u.map((R) => R.x), ...f.map((R) => R.x)], E = [...u.map((R) => R.y), ...f.map((R) => R.y)];
    if (w.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const k = Math.min(...w) - 100, M = Math.max(...w) + 100, A = Math.min(...E) - 80, I = Math.max(...E) + 80;
    return { x: k, y: A, width: M - k, height: I - A };
  }, [u, f]), b = ye(() => [...u, ...f], [u, f]), x = K(() => {
    const w = e.finishEditing();
    if (w.nodeId && w.newValue !== void 0 && n) {
      const E = b.find((k) => k.id === w.nodeId);
      E && E.label !== w.newValue && n(w.nodeId, E.label, w.newValue);
    }
  }, [e, b, n]);
  he(() => {
    const w = (E) => {
      const M = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? E.metaKey : E.ctrlKey;
      if (!e.editingNode) {
        if ((E.key === "Delete" || E.key === "Backspace") && e.selectedNodes.size > 0 && i) {
          E.preventDefault(), i(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (M && E.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          E.preventDefault(), e.copySelectedNodes(b);
          return;
        }
        if (M && E.key.toLowerCase() === "v" && e.clipboard && a) {
          E.preventDefault();
          const A = e.pasteNodes();
          A && a(A);
          return;
        }
      }
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [e, b, i, a]), he(() => {
    if (!e.isSelecting && e.selectionBox) {
      const w = e.getNodesInSelectionBox(b, e.selectionBox);
      w.length > 0 && e.setSelectedNodes(new Set(w));
    }
  }, [e.isSelecting, e.selectionBox, b, e]);
  const C = K((w) => {
    (w.target === e.canvasRef.current || w.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: `
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes flow { from { stroke-dashoffset: 20; } to { stroke-dashoffset: 0; } }
      ` }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: C, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, ${t.gridColor} 1px, transparent 0)`, backgroundSize: `${30 * e.zoom}px ${30 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ S("linearGradient", { id: "uc-gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
            /* @__PURE__ */ l("stop", { offset: "0%", stopColor: v.purple }),
            /* @__PURE__ */ l("stop", { offset: "100%", stopColor: v.blue })
          ] }),
          /* @__PURE__ */ S("filter", { id: "uc-glow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
            /* @__PURE__ */ l("feGaussianBlur", { stdDeviation: "4", result: "blur" }),
            /* @__PURE__ */ S("feMerge", { children: [
              /* @__PURE__ */ l("feMergeNode", { in: "blur" }),
              /* @__PURE__ */ l("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          /* @__PURE__ */ l("rect", { x: c.x, y: c.y, width: c.width, height: c.height, fill: "rgba(124, 58, 237, 0.03)", rx: 24 }),
          /* @__PURE__ */ l("rect", { x: c.x, y: c.y, width: c.width, height: c.height, fill: "none", stroke: "url(#uc-gradient)", strokeWidth: 2, rx: 24, opacity: "0.4" }),
          /* @__PURE__ */ l("text", { x: c.x + c.width / 2, y: c.y + 30, textAnchor: "middle", fill: v.purple, fontSize: 13, fontWeight: "600", fontFamily: "system-ui, sans-serif", opacity: "0.8", children: "System Boundary" }),
          y.map((w, E) => {
            const k = m(w.from), M = g(w.to), A = k.x + 45, I = k.y, R = M.x - 85, $ = M.y, D = `M ${A} ${I} L ${R} ${$}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: D, fill: "none", stroke: v.purple, strokeWidth: 4, strokeLinecap: "round", opacity: "0.15" }),
              /* @__PURE__ */ l("path", { d: D, fill: "none", stroke: "url(#uc-gradient)", strokeWidth: 1.5, strokeLinecap: "round", opacity: "0.6" }),
              /* @__PURE__ */ l("path", { d: D, fill: "none", stroke: "rgba(255,255,255,0.8)", strokeWidth: 1.5, strokeLinecap: "round", strokeDasharray: "2,10", style: { animation: "flow 0.6s linear infinite", animationDelay: `${E * 0.15}s` } })
            ] }, w.id);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: [
        u.map((w) => {
          const E = m(w), k = e.dragging === w.id, M = e.selectedNodes.has(w.id);
          return /* @__PURE__ */ S("div", { onClick: (A) => e.handleNodeClick(A, w.id), onDoubleClick: (A) => e.handleNodeDoubleClick(A, w.id, w.label), onContextMenu: (A) => e.handleNodeContextMenu(A, w.id), onMouseDown: (A) => e.handleNodeMouseDown(A, w.id, E.x, E.y), onTouchStart: (A) => e.handleNodeTouchStart(A, w.id, E.x, E.y), style: { position: "absolute", left: E.x - 45, top: E.y - 55, width: 90, display: "flex", flexDirection: "column", alignItems: "center", cursor: k ? "grabbing" : "grab", transition: k ? "none" : "transform 0.2s", transform: k ? "scale(1.05)" : "scale(1)", touchAction: "none" }, children: [
            /* @__PURE__ */ l("div", { style: { width: 70, height: 70, borderRadius: "50%", background: `linear-gradient(135deg, ${v.pink}35, ${v.purple}15)`, border: `2px solid ${M ? v.blue : v.pink}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: ot(v.pink, k, M), transition: "box-shadow 0.2s" }, children: /* @__PURE__ */ S("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none", children: [
              /* @__PURE__ */ l("circle", { cx: "12", cy: "8", r: "4", stroke: v.pink, strokeWidth: "1.5", fill: `${v.pink}20` }),
              /* @__PURE__ */ l("path", { d: "M4 20c0-4 4-6 8-6s8 2 8 6", stroke: v.pink, strokeWidth: "1.5", strokeLinecap: "round", fill: "none" })
            ] }) }),
            /* @__PURE__ */ l("div", { style: { marginTop: 10, padding: "4px 12px", background: "rgba(0,0,0,0.4)", borderRadius: 12, backdropFilter: "blur(8px)" }, children: e.editingNode === w.id ? /* @__PURE__ */ l(tt, { value: e.editingValue, onChange: (A) => e.setEditingValue(A), onFinish: x, style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? Ee.stroke : t.textPrimary } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? Ee.stroke : t.textPrimary }, children: w.label }) })
          ] }, w.id);
        }),
        f.map((w) => {
          const E = g(w), k = e.dragging === w.id, M = e.selectedNodes.has(w.id);
          return /* @__PURE__ */ l("div", { onClick: (A) => e.handleNodeClick(A, w.id), onDoubleClick: (A) => e.handleNodeDoubleClick(A, w.id, w.label), onContextMenu: (A) => e.handleNodeContextMenu(A, w.id), onMouseDown: (A) => e.handleNodeMouseDown(A, w.id, E.x, E.y), onTouchStart: (A) => e.handleNodeTouchStart(A, w.id, E.x, E.y), style: { position: "absolute", left: E.x - 80, top: E.y - 35, width: 160, height: 70, background: `linear-gradient(135deg, ${v.blue}25, ${v.purple}15)`, border: `1.5px solid ${M ? v.blue : "rgba(14, 165, 233, 0.5)"}`, borderRadius: 35, display: "flex", alignItems: "center", justifyContent: "center", cursor: k ? "grabbing" : "grab", boxShadow: ot(v.blue, k, M), backdropFilter: "blur(8px)", transition: k ? "none" : "box-shadow 0.2s, transform 0.2s", transform: k ? "scale(1.03)" : "scale(1)", touchAction: "none" }, children: e.editingNode === w.id ? /* @__PURE__ */ l(tt, { value: e.editingValue, onChange: (A) => e.setEditingValue(A), onFinish: x, style: { fontSize: r ? 14 : 12, fontWeight: 500, color: r ? Ee.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 500, color: r ? Ee.stroke : t.textPrimary, textAlign: "center", padding: "0 12px", lineHeight: 1.3 }, children: w.label }) }, w.id);
        })
      ] })
    ] }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "6px 12px", borderRadius: 6, fontSize: "0.75rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ S("span", { children: [
        e.selectedNodes.size,
        " selected"
      ] }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.6 }, children: "|" }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.7 }, children: "Del to delete • ⌘C copy • ⌘V paste" })
    ] }),
    e.clipboard && /* @__PURE__ */ S("div", { style: { position: "absolute", top: e.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${v.green}20`, padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem", color: v.green, border: `1px solid ${v.green}40` }, children: [
      e.clipboard.length,
      " node",
      e.clipboard.length > 1 ? "s" : "",
      " copied"
    ] }),
    /* @__PURE__ */ l(We, { onZoomIn: () => e.setZoom((w) => Math.min(w * 1.15, 3)), onZoomOut: () => e.setZoom((w) => Math.max(w * 0.85, 0.2)), onFit: () => e.fitToView(p), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(st, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function T2({ type: o, data: t, source: r, theme: n = "dark", sketchMode: i = !1, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s, onEdgeLabelChange: h, onCreateConnection: d, onLinkedTemplateClick: u }) {
  var g;
  const f = $e[n] || $e.dark, m = ye(() => {
    if (t) return t;
    if (!r) return null;
    const y = s2;
    switch (o) {
      case "mindmap":
      case "wbs":
        return y.markdown(r);
      case "erd":
        return y.sql(r);
      case "flowchart":
        return y.flowchart(r);
      case "architecture":
        return y.architecture(r);
      case "state":
        return y.stateMachine(r);
      case "journey":
        return y.userJourney(r);
      case "timeline":
        return y.timeline(r);
      case "sequence":
        return y.sequence(r);
      case "orgchart":
        return y.orgChart(r);
      case "network":
        return y.network(r);
      case "gantt":
        return y.gantt(r);
      case "deployment":
        return y.deployment(r);
      case "pie":
        return y.pie(r);
      case "quadrant":
        return y.quadrant(r);
      case "git":
        return y.git(r);
      case "wireframe":
        return y.wireframe(r);
      case "class":
        return y.classDiagram(r);
      case "activity":
        return y.activity(r);
      case "usecase":
        return y.useCase(r);
      case "component":
        return y.component(r);
      case "c4":
        return y.c4(r);
      case "requirement":
        return y.requirement(r);
      case "sankey":
        return y.sankey(r);
      case "swimlane":
        return y.swimlane(r);
      default:
        return null;
    }
  }, [o, t, r]);
  if (!m) return /* @__PURE__ */ l("div", { style: { padding: 20, color: "#888" }, children: "No data" });
  switch (o) {
    case "mindmap":
    case "wbs":
      return /* @__PURE__ */ l(c2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "erd":
      return /* @__PURE__ */ l(h2, { tables: Array.isArray(m) ? m : [], theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "architecture":
      return m.layoutMode === "layered" ? /* @__PURE__ */ l(of, { data: m, theme: f }) : /* @__PURE__ */ l(d2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "flowchart":
      return /* @__PURE__ */ l(fc, { nodes: m.nodes || [], edges: m.edges || [], theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s, onEdgeLabelChange: h, onCreateConnection: d });
    case "state":
      return /* @__PURE__ */ l(fc, { nodes: m.states || [], edges: ((g = m.transitions) == null ? void 0 : g.map((y, c) => ({ id: `t-${c}`, source: y.from, target: y.to, label: y.event }))) || [], theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s, onEdgeLabelChange: h, onCreateConnection: d });
    case "activity":
      return /* @__PURE__ */ l(fc, { nodes: m.nodes || [], edges: m.edges || [], theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s, onEdgeLabelChange: h, onCreateConnection: d });
    case "journey":
      return /* @__PURE__ */ l(u2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s, onLinkedTemplateClick: u });
    case "timeline":
      return /* @__PURE__ */ l(b2, { events: m, theme: f, sketchMode: i });
    case "sequence":
      return /* @__PURE__ */ l(y2, { data: m, theme: f, sketchMode: i });
    case "orgchart":
      return /* @__PURE__ */ l(m2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "network":
      return /* @__PURE__ */ l(f2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "gantt":
      return /* @__PURE__ */ l(v2, { tasks: m, theme: f, sketchMode: i });
    case "deployment":
      return /* @__PURE__ */ l(k2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "pie":
      return /* @__PURE__ */ l(w2, { data: m, theme: f, sketchMode: i });
    case "quadrant":
      return /* @__PURE__ */ l(S2, { data: m, theme: f, sketchMode: i });
    case "git":
      return /* @__PURE__ */ l(x2, { data: m, theme: f, sketchMode: i });
    case "wireframe":
      return /* @__PURE__ */ l(E2, { data: m, theme: f, sketchMode: i });
    case "class":
      return /* @__PURE__ */ l(g2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "usecase":
      return /* @__PURE__ */ l(I2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "component":
      return /* @__PURE__ */ l(C2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "c4":
      return m.layoutMode === "layered" ? /* @__PURE__ */ l(of, { data: m, theme: f }) : /* @__PURE__ */ l(M2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    case "requirement":
      return /* @__PURE__ */ l(A2, { data: m, theme: f, sketchMode: i });
    case "sankey":
      return /* @__PURE__ */ l($2, { data: m, theme: f, sketchMode: i });
    case "swimlane":
      return /* @__PURE__ */ l(R2, { data: m, theme: f, sketchMode: i, onLabelChange: a, onDeleteNodes: e, onPasteNodes: s });
    default:
      return /* @__PURE__ */ S("div", { style: { padding: 20, color: "#888" }, children: [
        "Unknown: ",
        o
      ] });
  }
}
function P2({ isOpen: o, onClose: t }) {
  if (!o) return null;
  const r = lw(), n = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/.test(navigator.platform);
  return /* @__PURE__ */ l(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1e4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)"
      },
      onClick: t,
      children: /* @__PURE__ */ S(
        "div",
        {
          style: {
            background: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
            borderRadius: 16,
            padding: 24,
            maxWidth: 600,
            width: "90%",
            maxHeight: "80vh",
            overflow: "auto",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
          },
          onClick: (i) => i.stopPropagation(),
          children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }, children: [
              /* @__PURE__ */ l("h2", { style: { margin: 0, fontSize: "1.25rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: "⌨️ Keyboard Shortcuts" }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: t,
                  style: {
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: 8,
                    padding: "6px 12px",
                    color: "#888",
                    cursor: "pointer",
                    fontSize: "0.875rem"
                  },
                  children: "ESC"
                }
              )
            ] }),
            /* @__PURE__ */ l("p", { style: { color: "#888", fontSize: "0.75rem", marginBottom: 16 }, children: n ? "Using ⌘ (Command) for keyboard shortcuts" : "Using Ctrl for keyboard shortcuts" }),
            Object.entries(r).map(([i, a]) => /* @__PURE__ */ S("div", { style: { marginBottom: 20 }, children: [
              /* @__PURE__ */ l("h3", { style: {
                margin: "0 0 8px 0",
                fontSize: "0.7rem",
                color: v.purple,
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }, children: i }),
              /* @__PURE__ */ l("div", { style: { display: "grid", gap: 6 }, children: a.map((e) => /* @__PURE__ */ S(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.05)"
                  },
                  children: [
                    /* @__PURE__ */ l("span", { style: { color: "#e0e0e0", fontSize: "0.8rem" }, children: e.description }),
                    /* @__PURE__ */ l("kbd", { style: {
                      background: "rgba(124,58,237,0.2)",
                      padding: "4px 8px",
                      borderRadius: 4,
                      fontSize: "0.7rem",
                      color: "#a78bfa",
                      fontFamily: "monospace",
                      border: "1px solid rgba(124,58,237,0.3)"
                    }, children: e.formatted })
                  ]
                },
                e.name
              )) })
            ] }, i)),
            /* @__PURE__ */ l("div", { style: { marginTop: 20, padding: 12, background: "rgba(16,185,129,0.1)", borderRadius: 8, border: "1px solid rgba(16,185,129,0.2)" }, children: /* @__PURE__ */ S("p", { style: { margin: 0, color: v.green, fontSize: "0.75rem" }, children: [
              "💡 Tip: Press ",
              /* @__PURE__ */ l("kbd", { style: { background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: 4, margin: "0 4px" }, children: "?" }),
              " anytime to show this help"
            ] }) })
          ]
        }
      )
    }
  );
}
function _2({ isOpen: o, onClose: t, onSelect: r, onRemove: n }) {
  const [i, a] = V([]);
  return he(() => {
    o && a(Fc());
  }, [o]), o ? /* @__PURE__ */ l(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)"
      },
      onClick: t,
      children: /* @__PURE__ */ S(
        "div",
        {
          style: {
            background: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
            borderRadius: 16,
            padding: 24,
            maxWidth: 500,
            width: "90%",
            maxHeight: "70vh",
            overflow: "auto",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
          },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }, children: [
              /* @__PURE__ */ l("h2", { style: { margin: 0, fontSize: "1.25rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: "📂 Recent Diagrams" }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: t,
                  style: {
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: 8,
                    padding: "6px 12px",
                    color: "#888",
                    cursor: "pointer",
                    fontSize: "0.875rem"
                  },
                  children: "ESC"
                }
              )
            ] }),
            i.length === 0 ? /* @__PURE__ */ S("div", { style: { padding: 40, textAlign: "center", color: "#666" }, children: [
              /* @__PURE__ */ l("div", { style: { fontSize: 48, marginBottom: 16 }, children: "📭" }),
              /* @__PURE__ */ l("p", { style: { margin: 0 }, children: "No recent diagrams" }),
              /* @__PURE__ */ l("p", { style: { margin: "8px 0 0 0", fontSize: "0.75rem" }, children: "Save a diagram to see it here" })
            ] }) : /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: i.map((e, s) => {
              var h, d;
              return /* @__PURE__ */ S(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  },
                  onClick: () => {
                    r(e), t();
                  },
                  onMouseEnter: (u) => u.currentTarget.style.background = "rgba(124,58,237,0.1)",
                  onMouseLeave: (u) => u.currentTarget.style.background = "rgba(255,255,255,0.03)",
                  children: [
                    /* @__PURE__ */ l("div", { style: { fontSize: 24 }, children: ((d = (h = tr[e.type]) == null ? void 0 : h.title) == null ? void 0 : d.split(" ")[0]) || "📄" }),
                    /* @__PURE__ */ S("div", { style: { flex: 1, minWidth: 0 }, children: [
                      /* @__PURE__ */ l("div", { style: { color: "#e0e0e0", fontWeight: 600, fontSize: "0.9rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: e.name }),
                      /* @__PURE__ */ S("div", { style: { color: "#666", fontSize: "0.7rem", display: "flex", gap: 8 }, children: [
                        /* @__PURE__ */ l("span", { children: e.type }),
                        /* @__PURE__ */ l("span", { children: "•" }),
                        /* @__PURE__ */ l("span", { children: kv(e.savedAt) })
                      ] })
                    ] }),
                    /* @__PURE__ */ l(
                      "button",
                      {
                        onClick: (u) => {
                          u.stopPropagation(), n(e.name), a((f) => f.filter((m) => m.name !== e.name));
                        },
                        style: {
                          background: "rgba(239,68,68,0.1)",
                          border: "none",
                          borderRadius: 6,
                          padding: "4px 8px",
                          color: v.red,
                          cursor: "pointer",
                          fontSize: "0.7rem"
                        },
                        title: "Remove from recent",
                        children: "✕"
                      }
                    )
                  ]
                },
                `${e.name}-${s}`
              );
            }) }),
            /* @__PURE__ */ l("div", { style: { marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: 8 }, children: /* @__PURE__ */ l(
              "button",
              {
                onClick: async () => {
                  try {
                    const e = await vv();
                    r(e), t();
                  } catch (e) {
                    alert(e.message);
                  }
                },
                style: {
                  flex: 1,
                  padding: "10px 16px",
                  background: "rgba(16,185,129,0.2)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: 8,
                  color: v.green,
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.85rem"
                },
                children: "📁 Import .ddflow File"
              }
            ) })
          ]
        }
      )
    }
  ) : null;
}
function D2({ isOpen: o, onClose: t, onImport: r }) {
  const [n, i] = V(""), [a, e] = V(""), [s, h] = V(null);
  he(() => {
    o || (i(""), e(""), h(null));
  }, [o]);
  const d = () => {
    try {
      e("");
      const f = Rw(n);
      h(f);
    } catch (f) {
      e(f.message), h(null);
    }
  }, u = () => {
    s && (r(s.type, s.source), t());
  };
  return o ? /* @__PURE__ */ l(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)"
      },
      onClick: t,
      children: /* @__PURE__ */ S(
        "div",
        {
          style: {
            background: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
            borderRadius: 16,
            padding: 24,
            maxWidth: 700,
            width: "90%",
            maxHeight: "85vh",
            overflow: "auto",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
          },
          onClick: (f) => f.stopPropagation(),
          children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }, children: [
              /* @__PURE__ */ l("h2", { style: { margin: 0, fontSize: "1.25rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: "🧜‍♀️ Import from Mermaid" }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: t,
                  style: {
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: 8,
                    padding: "6px 12px",
                    color: "#888",
                    cursor: "pointer",
                    fontSize: "0.875rem"
                  },
                  children: "ESC"
                }
              )
            ] }),
            /* @__PURE__ */ l("p", { style: { color: "#888", fontSize: "0.8rem", marginBottom: 16 }, children: "Paste your Mermaid diagram code below. Supported: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap" }),
            /* @__PURE__ */ l(
              "textarea",
              {
                value: n,
                onChange: (f) => {
                  i(f.target.value), e(""), h(null);
                },
                placeholder: `flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[OK]
    B -->|No| D[Cancel]`,
                style: {
                  width: "100%",
                  height: 200,
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: 12,
                  color: "#a78bfa",
                  fontFamily: "Monaco, monospace",
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                  resize: "vertical",
                  outline: "none",
                  boxSizing: "border-box"
                }
              }
            ),
            a && /* @__PURE__ */ l("div", { style: { marginTop: 12, padding: 12, background: "rgba(239,68,68,0.1)", borderRadius: 8, border: "1px solid rgba(239,68,68,0.3)" }, children: /* @__PURE__ */ S("div", { style: { color: v.red, fontSize: "0.8rem" }, children: [
              "❌ ",
              a
            ] }) }),
            s && /* @__PURE__ */ S("div", { style: { marginTop: 16 }, children: [
              /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: /* @__PURE__ */ S("span", { style: { color: v.green, fontSize: "0.85rem" }, children: [
                "✅ Detected: ",
                /* @__PURE__ */ l("strong", { children: s.type })
              ] }) }),
              /* @__PURE__ */ l("div", { style: {
                background: "rgba(0,0,0,0.3)",
                borderRadius: 8,
                padding: 12,
                border: "1px solid rgba(16,185,129,0.3)",
                maxHeight: 150,
                overflow: "auto"
              }, children: /* @__PURE__ */ l("pre", { style: { margin: 0, color: "#a78bfa", fontSize: "0.7rem", fontFamily: "Monaco, monospace", whiteSpace: "pre-wrap" }, children: s.source }) })
            ] }),
            /* @__PURE__ */ S("div", { style: { marginTop: 20, display: "flex", gap: 8 }, children: [
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: d,
                  disabled: !n.trim(),
                  style: {
                    flex: 1,
                    padding: "10px 16px",
                    background: "rgba(124,58,237,0.2)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    borderRadius: 8,
                    color: v.purple,
                    cursor: n.trim() ? "pointer" : "not-allowed",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    opacity: n.trim() ? 1 : 0.5
                  },
                  children: "🔍 Preview Conversion"
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: u,
                  disabled: !s,
                  style: {
                    flex: 1,
                    padding: "10px 16px",
                    background: s ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${s ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: 8,
                    color: s ? v.green : "#666",
                    cursor: s ? "pointer" : "not-allowed",
                    fontWeight: 600,
                    fontSize: "0.85rem"
                  },
                  children: "✨ Import to Editor"
                }
              )
            ] })
          ]
        }
      )
    }
  ) : null;
}
function L2({ isOpen: o, onClose: t, diagramType: r, diagramSource: n }) {
  const [i, a] = V(""), [e, s] = V(""), [h, d] = V(!1);
  he(() => {
    if (o && r && n)
      try {
        const m = Ow(r, n);
        a(m), s("");
      } catch (m) {
        a(""), s(m.message);
      }
  }, [o, r, n]), he(() => {
    o || d(!1);
  }, [o]);
  const u = async () => {
    try {
      await Fw(i), d(!0), setTimeout(() => d(!1), 2e3);
    } catch (m) {
      s("Failed to copy: " + m.message);
    }
  }, f = () => {
    qw(i, `ddflow-${r}`);
  };
  return o ? /* @__PURE__ */ l(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)"
      },
      onClick: t,
      children: /* @__PURE__ */ S(
        "div",
        {
          style: {
            background: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
            borderRadius: 16,
            padding: 24,
            maxWidth: 600,
            width: "90%",
            maxHeight: "80vh",
            overflow: "auto",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
          },
          onClick: (m) => m.stopPropagation(),
          children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }, children: [
              /* @__PURE__ */ l("h2", { style: { margin: 0, fontSize: "1.25rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: "🧜‍♀️ Export as Mermaid" }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: t,
                  style: {
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: 8,
                    padding: "6px 12px",
                    color: "#888",
                    cursor: "pointer",
                    fontSize: "0.875rem"
                  },
                  children: "ESC"
                }
              )
            ] }),
            e ? /* @__PURE__ */ l("div", { style: { padding: 20, background: "rgba(239,68,68,0.1)", borderRadius: 8, border: "1px solid rgba(239,68,68,0.3)" }, children: /* @__PURE__ */ S("div", { style: { color: v.red, fontSize: "0.85rem" }, children: [
              "❌ ",
              e
            ] }) }) : /* @__PURE__ */ S(yt, { children: [
              /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }, children: /* @__PURE__ */ S("span", { style: { color: v.green, fontSize: "0.85rem" }, children: [
                "✅ Converted from: ",
                /* @__PURE__ */ l("strong", { children: r })
              ] }) }),
              /* @__PURE__ */ l("div", { style: {
                background: "rgba(0,0,0,0.3)",
                borderRadius: 8,
                padding: 16,
                border: "1px solid rgba(124,58,237,0.2)",
                maxHeight: 300,
                overflow: "auto"
              }, children: /* @__PURE__ */ l("pre", { style: { margin: 0, color: "#a78bfa", fontSize: "0.75rem", fontFamily: "Monaco, monospace", whiteSpace: "pre-wrap" }, children: i }) }),
              /* @__PURE__ */ S("div", { style: { marginTop: 16, display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: u,
                    style: {
                      flex: 1,
                      padding: "10px 16px",
                      background: h ? "rgba(16,185,129,0.3)" : "rgba(14,165,233,0.2)",
                      border: `1px solid ${h ? "rgba(16,185,129,0.3)" : "rgba(14,165,233,0.3)"}`,
                      borderRadius: 8,
                      color: h ? v.green : v.blue,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.85rem"
                    },
                    children: h ? "✅ Copied!" : "📋 Copy to Clipboard"
                  }
                ),
                /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: f,
                    style: {
                      flex: 1,
                      padding: "10px 16px",
                      background: "rgba(124,58,237,0.2)",
                      border: "1px solid rgba(124,58,237,0.3)",
                      borderRadius: 8,
                      color: v.purple,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.85rem"
                    },
                    children: "📥 Download .mmd"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  ) : null;
}
const tr = {
  journey: { title: "🚶 Journey", source: `[actor] User
[page] Landing Page
[action] Sign Up
[email] Verify Email
[page] Onboarding
[page] Dashboard
[notification] Welcome!

User -Visit-> Landing Page
Landing Page -Click CTA-> Sign Up
Sign Up -Submit-> Verify Email
Verify Email -Confirm-> Onboarding
Onboarding -Complete-> Dashboard
Dashboard -> Welcome!` },
  mindmap: { title: "🧠 Mind Map", source: `Project
  Goals
    Revenue
    Growth
  Features
    Auth
    Dashboard
  Stack
    React
    Node` },
  architecture: { title: "🏗️ Architecture", source: `title: E-Commerce Platform
subtitle: C4 Container Diagram

# External actors
[person] Customer: Online shopper
[person] Admin: System administrator
[external] Payment Gateway: Stripe/PayPal
[external] Email Service: SendGrid

boundary "Web Layer" {
[webapp] Web Application: React SPA
[mobileapp] Mobile App: React Native
[desktop] Admin Portal: Vue.js
}

boundary "API Gateway" {
[gateway] Kong Gateway: API routing
[auth] Auth Service: OAuth2/JWT
}

boundary "Microservices" {
[service] User Service: User management
[service] Product Service: Catalog
[service] Order Service: Orders/checkout
[service] Notification Service: Alerts
}

boundary "Data Layer" {
[database] PostgreSQL: Primary DB
[database] MongoDB: Product catalog
[cache] Redis: Sessions/cache
[queue] RabbitMQ: Event queue
}

boundary "Infrastructure" {
[monitoring] Prometheus: Metrics
[logging] ELK Stack: Logs
[server] Kubernetes: Orchestration
}

# Connections
Customer -> Web Application: Uses
Customer -> Mobile App: Uses
Admin -> Admin Portal: Manages
Web Application -> Kong Gateway: API calls
Mobile App -> Kong Gateway: API calls
Admin Portal -> Kong Gateway: Admin API
Kong Gateway -> Auth Service: Validates
Kong Gateway -> User Service
Kong Gateway -> Product Service
Kong Gateway -> Order Service
Order Service -> Payment Gateway: Process payment
Notification Service -> Email Service: Send emails
User Service -> PostgreSQL
Product Service -> MongoDB
Order Service -> PostgreSQL
Auth Service -> Redis: Sessions
Order Service -> RabbitMQ: Events
Notification Service -> RabbitMQ: Listens` },
  erd: { title: "📊 ERD", source: `CREATE TABLE users (id UUID PRIMARY KEY, email VARCHAR(255), name VARCHAR(100));
CREATE TABLE posts (id UUID PRIMARY KEY, title VARCHAR(200), user_id UUID REFERENCES users(id));` },
  sequence: { title: "🔄 Sequence", source: `participant Client, API, DB

Client -> API: Request
API -> DB: Query
DB --> API: Result
API --> Client: Response` },
  flowchart: { title: "📈 Flowchart", source: `(start) Start
Start -> (process) Process
Process -> (decision) Valid?
Valid? -> (end) Done
Valid? -> (io) Error` },
  state: { title: "⚡ State", source: `(initial) Idle
(final) Done

Idle -> Loading: FETCH
Loading -> Done: SUCCESS
Loading -> Idle: FAIL` },
  timeline: { title: "📅 Timeline", source: `[Jan] *Kickoff | Started
[Mar] Design | UI done
[Jun] *MVP | Core ready
[Sep] Launch | Public` },
  orgchart: { title: "👥 Org Chart", source: `CEO [Chief Executive]
  CTO [Technology]
    Dev Lead
    QA Lead
  CFO [Finance]` },
  network: { title: "🌐 Network", source: `[cloud] Internet
[firewall] Firewall (10.0.0.1)
[router] Router (10.0.0.2)
[server] Server (10.0.0.10)

Internet -- Firewall
Firewall -- Router
Router -- Server` },
  gantt: { title: "📊 Gantt", source: `Research, 0, 2
Design, 2, 3
Develop, 5, 4
Test, 9, 2
Launch, 11, 1` },
  deployment: { title: "🚀 Deployment", source: `[cloud] AWS
  [cluster] K8s
    [container] API
    [container] Worker
  [database] RDS
[device] Browser` },
  pie: { title: "🥧 Pie", source: `"JavaScript": 40
"Python": 25
"TypeScript": 20
"Go": 15` },
  quadrant: { title: "📊 Quadrant", source: `title: Tech Matrix
x-axis: Effort →
y-axis: Impact →
quadrant-1: Quick Wins
quadrant-2: Big Projects
quadrant-3: Fill-ins
quadrant-4: Thankless

React: [30, 90]
Refactor: [80, 70]
Docs: [20, 40]` },
  git: { title: "🌿 Git", source: `commit "Initial"
commit "Feature A"
branch develop
commit "Dev work"
checkout main
commit "Hotfix"
merge develop` },
  wireframe: { title: "📱 Wireframe", source: `{Dashboard App}
[[ 🏠 Home | 📊 Analytics | 👤 Profile | ⚙️ Settings | [Upgrade] ]]

>> Home > Dashboard

---

[hero: Welcome to Your Dashboard | Track your progress, manage tasks, and achieve your goals. | Get Started]

---

## Key Metrics

[stat: 2,847 | Active Users | +12%]

[stat: $48,294 | Revenue | +8.5%]

[stat: 156 | New Orders | +23%]

---

## Quick Actions

[widget: Tasks | 12 | 📋]

[widget: Messages | 5 | 💬]

[widget: Reports | 3 | 📈]

---

## Features

[feature: 🚀 | Fast Performance | Lightning-fast load times with optimized delivery.]

[feature: 🔒 | Secure by Default | Enterprise-grade security with encryption.]

[feature: 📊 | Real-time Analytics | Live insights into your business metrics.]

---

## Recent Activity

[activity: John completed project review | 5 min ago]

[activity: Sarah uploaded new design files | 1 hour ago]

[activity: Team meeting scheduled | 2 hours ago]

---

## Data Overview

[data-table: 4 rows]

---

## Quick Upload

[upload: Drop files here or click to browse]

---

[toast: Changes saved successfully | success]

[fab: +]

---

[footer: Product | Pricing | Support :: Company | About | Careers :: © 2024 App Inc.]` },
  class: { title: "📐 Class", source: `class User
+id: string
+name: string
-password: string
+login(): boolean
+getPosts(): Post[]

class Post
+id: string
+title: string
+content: string
+userId: string
+publish(): void

User --> Post : has many
User --* Post : owns` },
  activity: { title: "🔄 Activity", source: `[start]
:Open App;
:Login;
<Valid?>
:Dashboard;
:Error;
[end]

start -> Open App
Open App -> Login
Login -> Valid?
Valid? -> Dashboard: Yes
Valid? -> Error: No
Dashboard -> end
Error -> Login` },
  usecase: { title: "👤 Use Case", source: `actor Customer
actor Admin
(Browse Products)
(Checkout)
(Manage Inventory)
(View Reports)

Customer -> Browse Products
Customer -> Checkout
Admin -> Manage Inventory
Admin -> View Reports` },
  component: { title: "📦 Component", source: `[service] Frontend
[api] API Gateway
[service] Auth Service
[database] Database
[cache] Redis Cache

Frontend --> API Gateway
API Gateway --> Auth Service
API Gateway --> Database
Auth Service --> Redis Cache` },
  c4: { title: "🏛️ C4", source: `title: Banking System
subtitle: Container Diagram

[person] Customer: Bank customer

boundary "Application" {
  [container] Web App: React
  [container] Mobile App: Swift/Kotlin
}

boundary "Services" {
  [container] API: REST Backend
  [container] Auth: OAuth2
}

boundary "Data" {
  [database] Database: PostgreSQL
}

Customer -> Web App: Uses
Customer -> Mobile App: Uses
Web App -> API: Calls
Mobile App -> API: Calls
API -> Auth: Validates
API -> Database: Reads/Writes` },
  requirement: { title: "📋 Requirement", source: `requirement Login {
text: Users must authenticate
risk: low
priority: high
}

requirement Security {
text: All data encrypted
priority: critical
}

requirement Performance {
text: Response under 200ms
risk: medium
priority: high
}

Login -> Security: derives
Security -> Performance: traces` },
  sankey: { title: "🌊 Sankey", source: `# Energy Flow
Coal -> Electricity: 40
Gas -> Electricity: 30
Nuclear -> Electricity: 20
Solar -> Electricity: 10
Electricity -> Residential: 35
Electricity -> Commercial: 25
Electricity -> Industrial: 30
Electricity -> Transport: 10` },
  swimlane: { title: "🏊 Swimlane", source: `[Customer]
(start) Submit Order -> Review Order

[Sales]
Review Order -> (decision) Approve?
Approve? -> Process Payment
Approve? -> Reject Order

[Warehouse]
Process Payment -> Ship Order
Ship Order -> (end) Complete` }
};
function z2() {
  var gr, mr, yr, br, xr, vr, Yt, wr, Sr, kr, Er, Cr, Mr;
  const [o, t] = V("journey"), [r, n] = V(""), [i, a] = V(!1), [e, s] = V(!1), [h, d] = V(!1), [u, f] = V(!1), [m, g] = V(!1), [y, c] = V(!1), [p, b] = V(!1), [x, C] = V(!1), [w, E] = V(!1), [k, M] = V(null), [A, I] = V(!1), [R, $] = V(!1), [D, P] = V(!1), [_, z] = V(!1), [B, j] = V(!1), [X, te] = V(!1), [ee, ae] = V(() => Eg()), [F, N] = V("Untitled Diagram"), [Z, T] = V(() => wv()), [W, O] = V({ loading: !1, message: "" }), [de, Se] = V(() => Xw()), [fe, ze] = V(() => Zw()), De = $e[de] || $e.dark, ie = ye(() => ({
    ...De,
    // Override accent-related styles with custom colors
    buttonActiveBg: `${ee.accentPrimary}30`,
    gridColor: `${ee.accentPrimary}08`,
    logoGradient: `linear-gradient(135deg, ${De.name === "dark" ? "#fff" : "#1e293b"}, ${ee.accentPrimary})`
  }), [De, ee]), G = _e(null), Y = _e(null), ce = _e(!1), Q = tr[o], ne = i && r ? r : Q.source, {
    state: re,
    canUndo: se,
    canRedo: pe,
    undo: ke,
    redo: Me,
    pushState: we,
    isApplying: Ie
  } = Uw({
    type: o,
    source: r || Q.source,
    diagramName: F
  }), qe = _e(null);
  he(() => (qe.current = Kw((U, ue, be) => {
    !ce.current && !Ie() && we({ type: ue, source: U, diagramName: be }, "source");
  }, 1e3), () => {
    var U;
    return (U = qe.current) == null ? void 0 : U.cancel();
  }), [we, Ie]);
  const Ye = K((U) => {
    var ue;
    n(U), (ue = qe.current) == null || ue.call(qe, U, o, F);
  }, [o, F]), Ve = K((U) => {
    var ue;
    (ue = qe.current) == null || ue.cancel(), t(U), n(""), we({ type: U, source: "", diagramName: F }, "type");
  }, [we, F]);
  K((U) => {
    N(U);
  }, []);
  const ct = K((U, ue, be) => {
    if (!ne || !ue || !be) return;
    const Xe = ue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), Dt = new RegExp(`\\b${Xe}\\b`, "g"), ut = ne.replace(Dt, be);
    ut !== ne && (n(ut), we({ type: o, source: ut, diagramName: F }, "label-edit"));
  }, [ne, o, F, we]), lt = K((U) => {
    if (!ne || !U || U.length === 0) return;
    let ue = ne;
    U.forEach((be) => {
      ue = ue.split(`
`).filter((ut) => {
        const Je = ut.trim();
        return !(Je.startsWith(be + ":") || Je.startsWith(be + " ") || Je.match(new RegExp(`^\\[${be}\\]`)) || Je.match(new RegExp(`^${be}\\s*->`)) || Je.match(new RegExp(`->\\s*${be}\\s*$`)));
      }).join(`
`);
    }), ue !== ne && (n(ue), we({ type: o, source: ue, diagramName: F }, "delete-nodes"));
  }, [ne, o, F, we]), Ke = K((U) => {
    if (!U || U.length === 0) return;
    const ue = U.map((Xe) => {
      const Dt = Xe.type ? `[${Xe.type}] ` : "";
      return `${Xe.id}: ${Dt}${Xe.label}`;
    }), be = ne + `
` + ue.join(`
`);
    n(be), we({ type: o, source: be, diagramName: F }, "paste-nodes");
  }, [ne, o, F, we]), rt = K((U, ue, be) => {
    if (!ne) return;
    const ut = ne.split(`
`).map((Je) => {
      if (Je.includes("->")) {
        if (ue && Je.includes(ue))
          return Je.replace(ue, be);
        if (!ue && be) {
          const Ar = Je.trim();
          if (!Ar.includes(":") && !Ar.includes("|"))
            return Je + " : " + be;
        }
      }
      return Je;
    }).join(`
`);
    ut !== ne && (n(ut), we({ type: o, source: ut, diagramName: F }, "edge-label"));
  }, [ne, o, F, we]), Ue = K((U, ue) => {
    if (!U || !ue) return;
    const be = `${U} -> ${ue}`, Xe = ne + `
` + be;
    n(Xe), we({ type: o, source: Xe, diagramName: F }, "create-connection");
  }, [ne, o, F, we]), Ge = K((U, ue) => {
    const be = rv(U);
    be ? (t(be.type), n(be.source), N(be.name), a(!0), we({ type: be.type, source: be.source, diagramName: be.name }, "linked-template")) : console.warn(`Template not found: ${U}`);
  }, [we]);
  he(() => {
    Ie() && (ce.current = !0, re.type !== o && t(re.type), re.source !== r && n(re.source), re.diagramName !== F && N(re.diagramName), setTimeout(() => {
      ce.current = !1;
    }, 0));
  }, [re, Ie]), he(() => {
    const U = (ue) => {
      (/Mac|iPhone|iPad|iPod/.test(navigator.platform) ? ue.metaKey : ue.ctrlKey) && ue.key.toLowerCase() === "z" && (ue.preventDefault(), ue.shiftKey ? Me() : ke());
    };
    return window.addEventListener("keydown", U), () => window.removeEventListener("keydown", U);
  }, [ke, Me]);
  const dt = ye(() => ({
    HELP: () => d(!0),
    HELP_ALT: () => d(!0),
    TOGGLE_EDITOR: () => a((U) => !U),
    TOGGLE_AI_CHAT: () => s((U) => !U),
    EXPORT_PNG: () => dr(),
    EXPORT_SVG: () => ur(),
    COPY_CLIPBOARD: () => pr()
  }), []);
  uw(dt, !h), he(() => {
    const U = yv();
    U && tr[U.type] && (t(U.type), n(U.source), U.name && N(U.name), a(!0));
  }, []), he(() => {
    if (Z)
      return Y.current && clearTimeout(Y.current), Y.current = setTimeout(() => {
        const U = r || Q.source;
        Qh(o, U, F);
      }, 1e3), () => {
        Y.current && clearTimeout(Y.current);
      };
  }, [o, r, F, Z, Q.source]);
  const Ze = () => {
    const U = r || Q.source;
    Qh(o, U, F), O({ loading: !1, message: "Saved!" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
  }, an = () => {
    const U = r || Q.source, ue = F.replace(/[^a-z0-9]/gi, "_").toLowerCase() || "diagram";
    xv(o, U, ue), O({ loading: !1, message: "File exported!" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
  }, sn = (U) => {
    tr[U.type] && (t(U.type), n(U.source), N(U.name || "Recent Diagram"), a(!0));
  }, cn = () => {
    const U = !Z;
    T(U), Sv(U), O({ loading: !1, message: U ? "Auto-save enabled" : "Auto-save disabled" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
  }, ln = () => {
    const U = de === "dark" ? "light" : "dark";
    Se(U), Qw(U), O({ loading: !1, message: `${U === "dark" ? "Dark" : "Light"} mode` }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
  }, dn = () => {
    const U = !fe;
    ze(U), Jw(U), O({ loading: !1, message: U ? "Sketch mode" : "Clean mode" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
  }, un = (U) => {
    const be = {
      flowchart: "flowchart",
      orgchart: "orgchart",
      state: "state",
      sequence: "sequence",
      network: "network",
      gantt: "gantt",
      pie: "pie",
      erd: "erd",
      class: "class",
      quadrant: "quadrant",
      mindmap: "mindmap",
      architecture: "architecture",
      usecase: "usecase",
      timeline: "timeline",
      journey: "journey",
      gitgraph: "git",
      git: "git",
      deployment: "deployment",
      component: "component",
      c4: "c4",
      activity: "activity",
      requirement: "requirement",
      wireframe: "wireframe"
    }[U.template];
    be && tr[be] ? (t(be), n(U.dsl), a(!0)) : (n(U.dsl), a(!0)), te(!1), O({ loading: !1, message: `Loaded ${U.label} template` }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
  }, dr = async () => {
    if (G.current) {
      O({ loading: !0, message: "Exporting PNG..." });
      try {
        await ow(G.current, `ddflow-${o}`), O({ loading: !1, message: "PNG exported!" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
      } catch (U) {
        O({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => O({ loading: !1, message: "" }), 3e3);
      }
    }
  }, ur = () => {
    if (G.current) {
      O({ loading: !0, message: "Exporting SVG..." });
      try {
        iw(G.current, `ddflow-${o}`), O({ loading: !1, message: "SVG exported!" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
      } catch (U) {
        O({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => O({ loading: !1, message: "" }), 3e3);
      }
    }
  }, pr = async () => {
    if (G.current) {
      O({ loading: !0, message: "Copying to clipboard..." });
      try {
        await aw(G.current), O({ loading: !1, message: "Copied to clipboard!" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
      } catch (U) {
        O({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => O({ loading: !1, message: "" }), 3e3);
      }
    }
  }, pn = () => {
    if (G.current) {
      O({ loading: !0, message: "Opening print dialog..." });
      try {
        sw(G.current), O({ loading: !1, message: "" });
      } catch (U) {
        O({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => O({ loading: !1, message: "" }), 3e3);
      }
    }
  }, hr = (U, ue) => {
    t(U), n(ue), a(!0);
  }, fr = K((U) => {
    const be = (r || Q.source).trim() + `
` + U;
    Ye(be), a(!0);
  }, [r, Q.source, Ye]), hn = K(async () => {
    if (!qt()) {
      O({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => O({ loading: !1, message: "" }), 3e3);
      return;
    }
    I(!0), M({ type: "explain", content: null, loading: !0 });
    try {
      const U = await Y1(ne, o);
      M({ type: "explain", content: U, loading: !1 });
    } catch (U) {
      M({ type: "explain", content: `Error: ${U.message}`, loading: !1 });
    } finally {
      I(!1);
    }
  }, [ne, o]), fn = K(async () => {
    if (!qt()) {
      O({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => O({ loading: !1, message: "" }), 3e3);
      return;
    }
    I(!0), M({ type: "improve", content: null, loading: !0 });
    try {
      const U = await V1(ne, o);
      M({ type: "improve", content: U, loading: !1 });
    } catch (U) {
      M({ type: "improve", content: { explanation: `Error: ${U.message}` }, loading: !1 });
    } finally {
      I(!1);
    }
  }, [ne, o]), gn = K(async () => {
    if (!qt()) {
      O({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => O({ loading: !1, message: "" }), 3e3);
      return;
    }
    I(!0), M({ type: "validate", content: null, loading: !0 });
    try {
      const U = await K1(ne, o);
      M({ type: "validate", content: U, loading: !1 });
    } catch (U) {
      M({ type: "validate", content: { isValid: !1, errors: [U.message], warnings: [], suggestions: [] }, loading: !1 });
    } finally {
      I(!1);
    }
  }, [ne, o]), mn = K(() => {
    var U;
    (k == null ? void 0 : k.type) === "improve" && ((U = k.content) != null && U.dsl) && (t(k.content.type), n(k.content.dsl), a(!0), M(null));
  }, [k]), yn = (U, ue) => {
    t(U), n(ue), a(!0), O({ loading: !1, message: "Mermaid imported!" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
  };
  return /* @__PURE__ */ S("div", { style: { minHeight: "100vh", background: ie.background, fontFamily: "system-ui", color: ie.textPrimary, transition: "background 0.3s ease, color 0.3s ease" }, children: [
    /* @__PURE__ */ S("div", { style: { padding: "10px 20px", borderBottom: `1px solid ${ie.border}`, background: ie.headerBg, display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
        /* @__PURE__ */ l("div", { children: /* @__PURE__ */ S("h1", { style: { fontSize: "1.2rem", fontWeight: 800, background: ie.logoGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.4rem" }, children: "◈" }),
          " DDFlow"
        ] }) }),
        /* @__PURE__ */ l("div", { style: { height: 24, width: 1, background: ie.border } }),
        /* @__PURE__ */ l("span", { style: { color: ie.textMuted, fontSize: "0.85rem" }, children: "Diagram Engine" })
      ] }),
      /* @__PURE__ */ S("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
        /* @__PURE__ */ l("button", { onClick: ln, style: { padding: "6px 10px", background: "transparent", border: `1px solid ${ie.border}`, borderRadius: 6, color: ie.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: `Switch to ${de === "dark" ? "light" : "dark"} mode`, children: de === "dark" ? "☀️" : "🌙" }),
        /* @__PURE__ */ l("button", { onClick: dn, style: { padding: "6px 10px", background: fe ? `${ee.accentPrimary}20` : "transparent", border: `1px solid ${fe ? ee.accentPrimary : ie.border}`, borderRadius: 6, color: fe ? ee.accentPrimary : ie.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: fe ? "Switch to clean mode" : "Switch to sketch mode", children: fe ? "✏️" : "✨" }),
        /* @__PURE__ */ l("button", { onClick: () => te(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${ie.border}`, borderRadius: 6, color: ie.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Shape Library", children: /* @__PURE__ */ S("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ l("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
        ] }) }),
        /* @__PURE__ */ l("button", { onClick: () => d(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${ie.border}`, borderRadius: 6, color: ie.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Keyboard Shortcuts (?)", children: "⌨️" }),
        /* @__PURE__ */ l("button", { onClick: () => $(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${ie.border}`, borderRadius: 6, color: ie.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Color Settings", children: "🎨" }),
        /* @__PURE__ */ l("a", { href: "/guide.html", target: "_blank", rel: "noopener noreferrer", style: { padding: "6px 10px", background: "transparent", border: `1px solid ${ie.border}`, borderRadius: 6, color: ie.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }, children: "📖" }),
        /* @__PURE__ */ l("div", { style: { height: 20, width: 1, background: ie.border, margin: "0 4px" } }),
        /* @__PURE__ */ l("button", { onClick: () => s(!e), style: { padding: "6px 14px", background: e ? `linear-gradient(135deg, ${ee.accentPrimary}, ${ee.accentSecondary})` : `${ee.accentPrimary}20`, border: `1px solid ${e ? "transparent" : ee.accentPrimary}`, borderRadius: 6, color: e ? "#fff" : ee.accentPrimary, fontSize: "0.85rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontWeight: 600 }, children: "🤖 AI Chat" })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: { display: "flex", gap: 10, padding: "10px 20px", borderBottom: `1px solid ${ie.border}`, background: ie.toolbarBg, alignItems: "center" }, children: [
      /* @__PURE__ */ l(
        pv,
        {
          activeType: o,
          onTypeChange: Ve,
          theme: ie
        }
      ),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: ie.border } }),
      /* @__PURE__ */ l(
        Tr,
        {
          label: "File",
          icon: "📁",
          color: v.blue,
          theme: ie,
          items: [
            { type: "section", label: "Create" },
            { icon: "📋", label: "Browse Templates", description: "Start from a template", onClick: () => b(!0) },
            { icon: "⭐", label: "Save as Template", description: "Save current as template", onClick: () => C(!0) },
            { type: "divider" },
            { type: "section", label: "Save & Open" },
            { icon: "💾", label: "Save", description: "Save to browser", shortcut: "⌘S", onClick: Ze },
            { icon: "📥", label: "Export File", description: "Download .ddflow", onClick: an },
            { icon: "📂", label: "Open Recent", description: "Open saved diagrams", onClick: () => f(!0) },
            { type: "divider" },
            { icon: Z ? "✓" : "○", label: "Auto-save", description: Z ? "Enabled" : "Disabled", onClick: cn, active: Z }
          ]
        }
      ),
      /* @__PURE__ */ l(
        Tr,
        {
          label: "Export",
          icon: "📤",
          color: v.pink,
          theme: ie,
          items: [
            { type: "section", label: "Image" },
            { icon: "📋", label: "Copy to Clipboard", shortcut: "⌘⇧C", onClick: pr, disabled: W.loading },
            { icon: "🖼️", label: "Export as PNG", shortcut: "⌘⇧P", onClick: dr, disabled: W.loading },
            { icon: "📐", label: "Export as SVG", shortcut: "⌘⇧S", onClick: ur, disabled: W.loading },
            { icon: "📄", label: "Export as PDF", onClick: pn, disabled: W.loading },
            { type: "divider" },
            { type: "section", label: "Code" },
            { icon: "🧜‍♀️", label: "Export as Mermaid", description: "Convert to Mermaid syntax", onClick: () => c(!0) },
            { icon: "🌱", label: "Export as PlantUML", description: "Convert to PlantUML syntax", onClick: () => j(!0) }
          ]
        }
      ),
      /* @__PURE__ */ l(
        Tr,
        {
          label: "Import",
          icon: "📥",
          color: v.cyan,
          theme: ie,
          items: [
            { icon: "🖼️", label: "Import from Image", description: "AI extracts diagram from image", onClick: () => P(!0) },
            { icon: "🧜‍♀️", label: "Import Mermaid", description: "Convert from Mermaid syntax", onClick: () => g(!0) },
            { icon: "🌱", label: "Import PlantUML", description: "Convert from PlantUML syntax", onClick: () => z(!0) },
            { icon: "📂", label: "Open .ddflow File", description: "Load saved diagram", onClick: () => f(!0) }
          ]
        }
      ),
      /* @__PURE__ */ l(
        Tr,
        {
          label: A ? "AI..." : "AI Tools",
          icon: "✨",
          color: v.purple,
          theme: ie,
          items: [
            { type: "section", label: "Analysis" },
            { icon: "📖", label: "Explain Diagram", description: "Get AI explanation of diagram", onClick: hn, disabled: A },
            { icon: "✅", label: "Validate Diagram", description: "Check for errors and issues", onClick: gn, disabled: A },
            { type: "divider" },
            { type: "section", label: "Enhancement" },
            { icon: "💡", label: "Suggest Improvements", description: "Get AI optimization tips", onClick: fn, disabled: A }
          ]
        }
      ),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: ie.border } }),
      /* @__PURE__ */ S("div", { style: { display: "flex", gap: 4 }, children: [
        /* @__PURE__ */ l("button", { onClick: ke, disabled: !se, style: { padding: "6px 10px", background: se ? "rgba(100,116,139,0.2)" : "rgba(255,255,255,0.02)", border: `1px solid ${se ? "rgba(100,116,139,0.3)" : "rgba(255,255,255,0.05)"}`, borderRadius: 6, color: se ? v.slate : "#444", fontSize: "0.7rem", cursor: se ? "pointer" : "not-allowed", opacity: se ? 1 : 0.5, display: "flex", alignItems: "center", gap: 4 }, title: "Undo (Cmd+Z)", children: /* @__PURE__ */ l("span", { children: "↩" }) }),
        /* @__PURE__ */ l("button", { onClick: Me, disabled: !pe, style: { padding: "6px 10px", background: pe ? "rgba(100,116,139,0.2)" : "rgba(255,255,255,0.02)", border: `1px solid ${pe ? "rgba(100,116,139,0.3)" : "rgba(255,255,255,0.05)"}`, borderRadius: 6, color: pe ? v.slate : "#444", fontSize: "0.7rem", cursor: pe ? "pointer" : "not-allowed", opacity: pe ? 1 : 0.5, display: "flex", alignItems: "center", gap: 4 }, title: "Redo (Cmd+Shift+Z)", children: /* @__PURE__ */ l("span", { children: "↪" }) })
      ] }),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: ie.border } }),
      /* @__PURE__ */ S("button", { onClick: () => E(!w), style: { padding: "6px 12px", background: w ? `${v.orange}30` : "rgba(255,255,255,0.05)", border: `1px solid ${w ? v.orange : "rgba(255,255,255,0.1)"}`, borderRadius: 6, color: w ? v.orange : de === "dark" ? "#888" : "#64748b", fontSize: "0.8rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }, title: "Toggle Node Library", children: [
        w ? "📚" : "📦",
        " Nodes"
      ] }),
      /* @__PURE__ */ l("div", { style: { flex: 1 } }),
      W.message && /* @__PURE__ */ S("span", { style: { padding: "5px 10px", background: W.message.startsWith("Error") ? "rgba(239,68,68,0.2)" : "rgba(16,185,129,0.2)", borderRadius: 6, color: W.message.startsWith("Error") ? v.red : v.green, fontSize: "0.7rem", display: "flex", alignItems: "center", gap: 4 }, children: [
        W.loading && "⏳",
        W.message
      ] }),
      /* @__PURE__ */ S("button", { onClick: () => a(!i), style: { padding: "6px 12px", background: i ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${i ? v.green : "rgba(255,255,255,0.1)"}`, borderRadius: 6, color: i ? v.green : de === "dark" ? "#888" : "#64748b", fontSize: "0.7rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }, children: [
        i ? "✓" : "◇",
        " Editor"
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: { display: "flex", height: "calc(100vh - 105px)" }, children: [
      i && /* @__PURE__ */ l("div", { style: { width: 300, borderRight: `1px solid ${ie.border}` }, children: /* @__PURE__ */ l("textarea", { value: r || Q.source, onChange: (U) => Ye(U.target.value), style: { width: "100%", height: "100%", background: ie.editorBg, border: "none", padding: 12, color: ie.editorText, fontFamily: "Monaco, monospace", fontSize: "0.65rem", lineHeight: 1.5, resize: "none", outline: "none", boxSizing: "border-box", transition: "background 0.3s ease, color 0.3s ease" } }) }),
      /* @__PURE__ */ l(
        "div",
        {
          ref: G,
          style: { flex: 1, padding: 10, marginRight: e ? "380px" : 0, marginLeft: w ? "260px" : 0, transition: "margin 0.3s ease" },
          onDragOver: (U) => {
            U.preventDefault(), U.dataTransfer.dropEffect = "copy";
          },
          onDrop: (U) => {
            U.preventDefault();
            const ue = U.dataTransfer.getData("text/plain");
            ue && fr(ue);
          },
          children: /* @__PURE__ */ l(T2, { type: o, source: ne, theme: de, sketchMode: fe, onLabelChange: ct, onDeleteNodes: lt, onPasteNodes: Ke, onEdgeLabelChange: rt, onCreateConnection: Ue, onLinkedTemplateClick: Ge }, `${o}-${ne}-${de}-${fe}`)
        }
      )
    ] }),
    /* @__PURE__ */ l(
      gv,
      {
        isOpen: w,
        diagramType: o,
        theme: ie,
        onAddNode: fr
      }
    ),
    /* @__PURE__ */ l(tv, { isOpen: e, onClose: () => s(!1), onApplyDiagram: hr }),
    /* @__PURE__ */ l(P2, { isOpen: h, onClose: () => d(!1) }),
    /* @__PURE__ */ l(
      _2,
      {
        isOpen: u,
        onClose: () => f(!1),
        onSelect: sn,
        onRemove: bv
      }
    ),
    /* @__PURE__ */ l(
      D2,
      {
        isOpen: m,
        onClose: () => g(!1),
        onImport: yn
      }
    ),
    /* @__PURE__ */ l(
      L2,
      {
        isOpen: y,
        onClose: () => c(!1),
        diagramType: o,
        diagramSource: ne
      }
    ),
    /* @__PURE__ */ l(
      lv,
      {
        isOpen: p,
        onClose: () => b(!1),
        onApplyTemplate: hr,
        theme: ie
      }
    ),
    /* @__PURE__ */ l(
      dv,
      {
        isOpen: x,
        onClose: () => C(!1),
        diagramType: o,
        diagramSource: ne,
        theme: ie
      }
    ),
    k && /* @__PURE__ */ l("div", { style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
      padding: 20
    }, onClick: () => !k.loading && M(null), children: /* @__PURE__ */ S("div", { style: {
      background: ie.modalBg,
      borderRadius: 16,
      border: `1px solid ${ie.border}`,
      width: "100%",
      maxWidth: 600,
      maxHeight: "80vh",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
    }, onClick: (U) => U.stopPropagation(), children: [
      /* @__PURE__ */ S("div", { style: {
        padding: "16px 20px",
        borderBottom: `1px solid ${ie.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: `${v.purple}15`
      }, children: [
        /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: k.type === "explain" ? "📖" : k.type === "validate" ? "✅" : "💡" }),
          /* @__PURE__ */ l("span", { style: { fontWeight: 600, color: ie.textPrimary }, children: k.type === "explain" ? "Diagram Explanation" : k.type === "validate" ? "Validation Results" : "Improvement Suggestions" })
        ] }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => M(null),
            disabled: k.loading,
            style: {
              background: "transparent",
              border: "none",
              color: ie.textSecondary,
              fontSize: "1.2rem",
              cursor: k.loading ? "not-allowed" : "pointer",
              padding: 4
            },
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { style: {
        padding: 20,
        maxHeight: "calc(80vh - 120px)",
        overflowY: "auto"
      }, children: k.loading ? /* @__PURE__ */ S("div", { style: { textAlign: "center", padding: 40, color: ie.textSecondary }, children: [
        /* @__PURE__ */ l("div", { style: { fontSize: "2rem", marginBottom: 12 }, children: "⏳" }),
        /* @__PURE__ */ l("div", { children: "Analyzing diagram with AI..." })
      ] }) : k.type === "explain" ? /* @__PURE__ */ l("div", { style: { color: ie.textPrimary, lineHeight: 1.6, fontSize: "0.9rem", whiteSpace: "pre-wrap" }, children: k.content }) : k.type === "validate" ? /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ S("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          background: (gr = k.content) != null && gr.isValid ? `${v.green}15` : `${v.red}15`,
          borderRadius: 8,
          marginBottom: 16
        }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: (mr = k.content) != null && mr.isValid ? "✓" : "✗" }),
          /* @__PURE__ */ l("span", { style: { color: (yr = k.content) != null && yr.isValid ? v.green : v.red, fontWeight: 600 }, children: (br = k.content) != null && br.isValid ? "Diagram is valid" : "Issues found" })
        ] }),
        ((vr = (xr = k.content) == null ? void 0 : xr.errors) == null ? void 0 : vr.length) > 0 && /* @__PURE__ */ S("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { color: v.red, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Errors:" }),
          k.content.errors.map((U, ue) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.red}10`, borderRadius: 6, marginBottom: 4, color: ie.textPrimary, fontSize: "0.85rem" }, children: U }, ue))
        ] }),
        ((wr = (Yt = k.content) == null ? void 0 : Yt.warnings) == null ? void 0 : wr.length) > 0 && /* @__PURE__ */ S("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { color: v.orange, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Warnings:" }),
          k.content.warnings.map((U, ue) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.orange}10`, borderRadius: 6, marginBottom: 4, color: ie.textPrimary, fontSize: "0.85rem" }, children: U }, ue))
        ] }),
        ((kr = (Sr = k.content) == null ? void 0 : Sr.suggestions) == null ? void 0 : kr.length) > 0 && /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: { color: v.blue, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Suggestions:" }),
          k.content.suggestions.map((U, ue) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.blue}10`, borderRadius: 6, marginBottom: 4, color: ie.textPrimary, fontSize: "0.85rem" }, children: U }, ue))
        ] })
      ] }) : k.type === "improve" ? /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("div", { style: { color: ie.textPrimary, lineHeight: 1.6, fontSize: "0.9rem", marginBottom: 20, whiteSpace: "pre-wrap" }, children: ((Er = k.content) == null ? void 0 : Er.explanation) || "No explanation provided." }),
        ((Cr = k.content) == null ? void 0 : Cr.dsl) && /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: { color: v.purple, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Improved DSL:" }),
          /* @__PURE__ */ l("pre", { style: {
            background: ie.inputBg,
            padding: 12,
            borderRadius: 8,
            fontSize: "0.75rem",
            overflow: "auto",
            maxHeight: 200,
            color: ie.editorText
          }, children: k.content.dsl })
        ] })
      ] }) : null }),
      !k.loading && /* @__PURE__ */ S("div", { style: {
        padding: "12px 20px",
        borderTop: `1px solid ${ie.border}`,
        display: "flex",
        justifyContent: "flex-end",
        gap: 10
      }, children: [
        k.type === "improve" && ((Mr = k.content) == null ? void 0 : Mr.dsl) && /* @__PURE__ */ l(
          "button",
          {
            onClick: mn,
            style: {
              padding: "8px 16px",
              background: `linear-gradient(135deg, ${v.purple}, ${v.indigo})`,
              border: "none",
              borderRadius: 6,
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer"
            },
            children: "Apply Improvements"
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => M(null),
            style: {
              padding: "8px 16px",
              background: "rgba(255,255,255,0.1)",
              border: `1px solid ${ie.border}`,
              borderRadius: 6,
              color: ie.textSecondary,
              fontSize: "0.8rem",
              cursor: "pointer"
            },
            children: "Close"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l(
      Mv,
      {
        isOpen: R,
        onClose: () => $(!1),
        onApply: ae,
        theme: ie
      }
    ),
    /* @__PURE__ */ l(
      $v,
      {
        isOpen: D,
        onClose: () => P(!1),
        onImport: (U, ue, be) => {
          t(U), n(ue), be && N(be), a(!0), P(!1), O({ loading: !1, message: `Diagram "${be || "Imported"}" imported from image!` }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
        },
        theme: ie
      }
    ),
    /* @__PURE__ */ l(
      Jv,
      {
        isOpen: _,
        onClose: () => z(!1),
        onImport: (U, ue) => {
          t(U), n(ue), a(!0), z(!1), O({ loading: !1, message: "PlantUML diagram imported!" }), setTimeout(() => O({ loading: !1, message: "" }), 2e3);
        },
        theme: ie
      }
    ),
    /* @__PURE__ */ l(
      ew,
      {
        isOpen: B,
        onClose: () => j(!1),
        diagramType: o,
        diagramSource: ne,
        theme: ie
      }
    ),
    /* @__PURE__ */ l(
      tw,
      {
        isOpen: X,
        onClose: () => te(!1),
        onSelectShape: un,
        theme: ie
      }
    )
  ] });
}
export {
  Tg as AI_PROMPT_TEMPLATE,
  d2 as ArchitectureDiagram,
  v as COLORS,
  g2 as ClassDiagram,
  cr as DIAGRAM_TYPES,
  W2 as DSLReference,
  Ig as DSL_REFERENCE,
  rr as DSL_SYNTAX,
  k2 as DeploymentDiagram,
  h2 as ERDDiagram,
  fc as FlowDiagram,
  v2 as GanttDiagram,
  x2 as GitGraphDiagram,
  c2 as MindMapDiagram,
  f2 as NetworkDiagram,
  m2 as OrgChartDiagram,
  s2 as Parsers,
  w2 as PieChartDiagram,
  S2 as QuadrantDiagram,
  y2 as SequenceDiagram,
  $e as THEMES,
  b2 as TimelineDiagram,
  T2 as UniversalDiagram,
  I2 as UseCaseDiagram,
  u2 as UserJourneyDiagram,
  E2 as WireframeDiagram,
  Yw as createAIPrompt,
  z2 as default,
  jw as getAvailableTypes,
  Vw as getCompactReference,
  Gw as getDSLForType
};
//# sourceMappingURL=index.esm.js.map
