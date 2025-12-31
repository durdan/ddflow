import { jsxs as S, jsx as l, Fragment as ut } from "react/jsx-runtime";
import Oc, { useState as Y, useRef as _e, useEffect as se, useMemo as ge, useCallback as H } from "react";
var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ig(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function yc(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var mn, Fc;
function Ag() {
  if (Fc) return mn;
  Fc = 1;
  function i() {
    this.__data__ = [], this.size = 0;
  }
  return mn = i, mn;
}
var yn, Uc;
function Ft() {
  if (Uc) return yn;
  Uc = 1;
  function i(t, r) {
    return t === r || t !== t && r !== r;
  }
  return yn = i, yn;
}
var bn, jc;
function Br() {
  if (jc) return bn;
  jc = 1;
  var i = Ft();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (i(r[o][0], n))
        return o;
    return -1;
  }
  return bn = t, bn;
}
var xn, Gc;
function Tg() {
  if (Gc) return xn;
  Gc = 1;
  var i = Br(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, e = i(a, o);
    if (e < 0)
      return !1;
    var c = a.length - 1;
    return e == c ? a.pop() : r.call(a, e, 1), --this.size, !0;
  }
  return xn = n, xn;
}
var vn, Yc;
function Pg() {
  if (Yc) return vn;
  Yc = 1;
  var i = Br();
  function t(r) {
    var n = this.__data__, o = i(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return vn = t, vn;
}
var wn, Hc;
function Dg() {
  if (Hc) return wn;
  Hc = 1;
  var i = Br();
  function t(r) {
    return i(this.__data__, r) > -1;
  }
  return wn = t, wn;
}
var Sn, Vc;
function Lg() {
  if (Vc) return Sn;
  Vc = 1;
  var i = Br();
  function t(r, n) {
    var o = this.__data__, a = i(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return Sn = t, Sn;
}
var kn, Xc;
function Wr() {
  if (Xc) return kn;
  Xc = 1;
  var i = Ag(), t = Tg(), r = Pg(), n = Dg(), o = Lg();
  function a(e) {
    var c = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++c < h; ) {
      var d = e[c];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = i, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, kn = a, kn;
}
var Cn, Kc;
function zg() {
  if (Kc) return Cn;
  Kc = 1;
  var i = Wr();
  function t() {
    this.__data__ = new i(), this.size = 0;
  }
  return Cn = t, Cn;
}
var $n, Qc;
function Bg() {
  if (Qc) return $n;
  Qc = 1;
  function i(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return $n = i, $n;
}
var En, Zc;
function Wg() {
  if (Zc) return En;
  Zc = 1;
  function i(t) {
    return this.__data__.get(t);
  }
  return En = i, En;
}
var Mn, Jc;
function Ng() {
  if (Jc) return Mn;
  Jc = 1;
  function i(t) {
    return this.__data__.has(t);
  }
  return Mn = i, Mn;
}
var Rn, el;
function ef() {
  if (el) return Rn;
  el = 1;
  var i = typeof Er == "object" && Er && Er.Object === Object && Er;
  return Rn = i, Rn;
}
var _n, tl;
function it() {
  if (tl) return _n;
  tl = 1;
  var i = ef(), t = typeof self == "object" && self && self.Object === Object && self, r = i || t || Function("return this")();
  return _n = r, _n;
}
var In, rl;
function Ut() {
  if (rl) return In;
  rl = 1;
  var i = it(), t = i.Symbol;
  return In = t, In;
}
var An, nl;
function qg() {
  if (nl) return An;
  nl = 1;
  var i = Ut(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = i ? i.toStringTag : void 0;
  function a(e) {
    var c = r.call(e, o), h = e[o];
    try {
      e[o] = void 0;
      var d = !0;
    } catch {
    }
    var p = n.call(e);
    return d && (c ? e[o] = h : delete e[o]), p;
  }
  return An = a, An;
}
var Tn, il;
function Og() {
  if (il) return Tn;
  il = 1;
  var i = Object.prototype, t = i.toString;
  function r(n) {
    return t.call(n);
  }
  return Tn = r, Tn;
}
var Pn, ol;
function Lt() {
  if (ol) return Pn;
  ol = 1;
  var i = Ut(), t = qg(), r = Og(), n = "[object Null]", o = "[object Undefined]", a = i ? i.toStringTag : void 0;
  function e(c) {
    return c == null ? c === void 0 ? o : n : a && a in Object(c) ? t(c) : r(c);
  }
  return Pn = e, Pn;
}
var Dn, al;
function Je() {
  if (al) return Dn;
  al = 1;
  function i(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Dn = i, Dn;
}
var Ln, sl;
function rr() {
  if (sl) return Ln;
  sl = 1;
  var i = Lt(), t = Je(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function e(c) {
    if (!t(c))
      return !1;
    var h = i(c);
    return h == n || h == o || h == r || h == a;
  }
  return Ln = e, Ln;
}
var zn, cl;
function Fg() {
  if (cl) return zn;
  cl = 1;
  var i = it(), t = i["__core-js_shared__"];
  return zn = t, zn;
}
var Bn, ll;
function Ug() {
  if (ll) return Bn;
  ll = 1;
  var i = Fg(), t = function() {
    var n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Bn = r, Bn;
}
var Wn, dl;
function tf() {
  if (dl) return Wn;
  dl = 1;
  var i = Function.prototype, t = i.toString;
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
  return Wn = r, Wn;
}
var Nn, ul;
function jg() {
  if (ul) return Nn;
  ul = 1;
  var i = rr(), t = Ug(), r = Je(), n = tf(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, e = Function.prototype, c = Object.prototype, h = e.toString, d = c.hasOwnProperty, p = RegExp(
    "^" + h.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(m) {
    if (!r(m) || t(m))
      return !1;
    var g = i(m) ? p : a;
    return g.test(n(m));
  }
  return Nn = f, Nn;
}
var qn, pl;
function Gg() {
  if (pl) return qn;
  pl = 1;
  function i(t, r) {
    return t == null ? void 0 : t[r];
  }
  return qn = i, qn;
}
var On, hl;
function zt() {
  if (hl) return On;
  hl = 1;
  var i = jg(), t = Gg();
  function r(n, o) {
    var a = t(n, o);
    return i(a) ? a : void 0;
  }
  return On = r, On;
}
var Fn, fl;
function bc() {
  if (fl) return Fn;
  fl = 1;
  var i = zt(), t = it(), r = i(t, "Map");
  return Fn = r, Fn;
}
var Un, gl;
function Nr() {
  if (gl) return Un;
  gl = 1;
  var i = zt(), t = i(Object, "create");
  return Un = t, Un;
}
var jn, ml;
function Yg() {
  if (ml) return jn;
  ml = 1;
  var i = Nr();
  function t() {
    this.__data__ = i ? i(null) : {}, this.size = 0;
  }
  return jn = t, jn;
}
var Gn, yl;
function Hg() {
  if (yl) return Gn;
  yl = 1;
  function i(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Gn = i, Gn;
}
var Yn, bl;
function Vg() {
  if (bl) return Yn;
  bl = 1;
  var i = Nr(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var e = this.__data__;
    if (i) {
      var c = e[a];
      return c === t ? void 0 : c;
    }
    return n.call(e, a) ? e[a] : void 0;
  }
  return Yn = o, Yn;
}
var Hn, xl;
function Xg() {
  if (xl) return Hn;
  xl = 1;
  var i = Nr(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return i ? a[o] !== void 0 : r.call(a, o);
  }
  return Hn = n, Hn;
}
var Vn, vl;
function Kg() {
  if (vl) return Vn;
  vl = 1;
  var i = Nr(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = i && o === void 0 ? t : o, this;
  }
  return Vn = r, Vn;
}
var Xn, wl;
function Qg() {
  if (wl) return Xn;
  wl = 1;
  var i = Yg(), t = Hg(), r = Vg(), n = Xg(), o = Kg();
  function a(e) {
    var c = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++c < h; ) {
      var d = e[c];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = i, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Xn = a, Xn;
}
var Kn, Sl;
function Zg() {
  if (Sl) return Kn;
  Sl = 1;
  var i = Qg(), t = Wr(), r = bc();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new i(),
      map: new (r || t)(),
      string: new i()
    };
  }
  return Kn = n, Kn;
}
var Qn, kl;
function Jg() {
  if (kl) return Qn;
  kl = 1;
  function i(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Qn = i, Qn;
}
var Zn, Cl;
function qr() {
  if (Cl) return Zn;
  Cl = 1;
  var i = Jg();
  function t(r, n) {
    var o = r.__data__;
    return i(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return Zn = t, Zn;
}
var Jn, $l;
function e0() {
  if ($l) return Jn;
  $l = 1;
  var i = qr();
  function t(r) {
    var n = i(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Jn = t, Jn;
}
var ei, El;
function t0() {
  if (El) return ei;
  El = 1;
  var i = qr();
  function t(r) {
    return i(this, r).get(r);
  }
  return ei = t, ei;
}
var ti, Ml;
function r0() {
  if (Ml) return ti;
  Ml = 1;
  var i = qr();
  function t(r) {
    return i(this, r).has(r);
  }
  return ti = t, ti;
}
var ri, Rl;
function n0() {
  if (Rl) return ri;
  Rl = 1;
  var i = qr();
  function t(r, n) {
    var o = i(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return ri = t, ri;
}
var ni, _l;
function xc() {
  if (_l) return ni;
  _l = 1;
  var i = Zg(), t = e0(), r = t0(), n = r0(), o = n0();
  function a(e) {
    var c = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++c < h; ) {
      var d = e[c];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = i, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, ni = a, ni;
}
var ii, Il;
function i0() {
  if (Il) return ii;
  Il = 1;
  var i = Wr(), t = bc(), r = xc(), n = 200;
  function o(a, e) {
    var c = this.__data__;
    if (c instanceof i) {
      var h = c.__data__;
      if (!t || h.length < n - 1)
        return h.push([a, e]), this.size = ++c.size, this;
      c = this.__data__ = new r(h);
    }
    return c.set(a, e), this.size = c.size, this;
  }
  return ii = o, ii;
}
var oi, Al;
function Or() {
  if (Al) return oi;
  Al = 1;
  var i = Wr(), t = zg(), r = Bg(), n = Wg(), o = Ng(), a = i0();
  function e(c) {
    var h = this.__data__ = new i(c);
    this.size = h.size;
  }
  return e.prototype.clear = t, e.prototype.delete = r, e.prototype.get = n, e.prototype.has = o, e.prototype.set = a, oi = e, oi;
}
var ai, Tl;
function vc() {
  if (Tl) return ai;
  Tl = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o && r(t[n], n, t) !== !1; )
      ;
    return t;
  }
  return ai = i, ai;
}
var si, Pl;
function rf() {
  if (Pl) return si;
  Pl = 1;
  var i = zt(), t = function() {
    try {
      var r = i(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return si = t, si;
}
var ci, Dl;
function Fr() {
  if (Dl) return ci;
  Dl = 1;
  var i = rf();
  function t(r, n, o) {
    n == "__proto__" && i ? i(r, n, {
      configurable: !0,
      enumerable: !0,
      value: o,
      writable: !0
    }) : r[n] = o;
  }
  return ci = t, ci;
}
var li, Ll;
function Ur() {
  if (Ll) return li;
  Ll = 1;
  var i = Fr(), t = Ft(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a, e, c) {
    var h = a[e];
    (!(n.call(a, e) && t(h, c)) || c === void 0 && !(e in a)) && i(a, e, c);
  }
  return li = o, li;
}
var di, zl;
function nr() {
  if (zl) return di;
  zl = 1;
  var i = Ur(), t = Fr();
  function r(n, o, a, e) {
    var c = !a;
    a || (a = {});
    for (var h = -1, d = o.length; ++h < d; ) {
      var p = o[h], f = e ? e(a[p], n[p], p, a, n) : void 0;
      f === void 0 && (f = n[p]), c ? t(a, p, f) : i(a, p, f);
    }
    return a;
  }
  return di = r, di;
}
var ui, Bl;
function o0() {
  if (Bl) return ui;
  Bl = 1;
  function i(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return ui = i, ui;
}
var pi, Wl;
function pt() {
  if (Wl) return pi;
  Wl = 1;
  function i(t) {
    return t != null && typeof t == "object";
  }
  return pi = i, pi;
}
var hi, Nl;
function a0() {
  if (Nl) return hi;
  Nl = 1;
  var i = Lt(), t = pt(), r = "[object Arguments]";
  function n(o) {
    return t(o) && i(o) == r;
  }
  return hi = n, hi;
}
var fi, ql;
function ir() {
  if (ql) return fi;
  ql = 1;
  var i = a0(), t = pt(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = i(/* @__PURE__ */ function() {
    return arguments;
  }()) ? i : function(e) {
    return t(e) && n.call(e, "callee") && !o.call(e, "callee");
  };
  return fi = a, fi;
}
var gi, Ol;
function Ae() {
  if (Ol) return gi;
  Ol = 1;
  var i = Array.isArray;
  return gi = i, gi;
}
var Xt = { exports: {} }, mi, Fl;
function s0() {
  if (Fl) return mi;
  Fl = 1;
  function i() {
    return !1;
  }
  return mi = i, mi;
}
Xt.exports;
var Ul;
function jt() {
  return Ul || (Ul = 1, function(i, t) {
    var r = it(), n = s0(), o = t && !t.nodeType && t, a = o && !0 && i && !i.nodeType && i, e = a && a.exports === o, c = e ? r.Buffer : void 0, h = c ? c.isBuffer : void 0, d = h || n;
    i.exports = d;
  }(Xt, Xt.exports)), Xt.exports;
}
var yi, jl;
function jr() {
  if (jl) return yi;
  jl = 1;
  var i = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? i, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return yi = r, yi;
}
var bi, Gl;
function wc() {
  if (Gl) return bi;
  Gl = 1;
  var i = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= i;
  }
  return bi = t, bi;
}
var xi, Yl;
function c0() {
  if (Yl) return xi;
  Yl = 1;
  var i = Lt(), t = wc(), r = pt(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", e = "[object Date]", c = "[object Error]", h = "[object Function]", d = "[object Map]", p = "[object Number]", f = "[object Object]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", s = "[object WeakMap]", u = "[object ArrayBuffer]", x = "[object DataView]", b = "[object Float32Array]", k = "[object Float64Array]", w = "[object Int8Array]", C = "[object Int16Array]", $ = "[object Int32Array]", E = "[object Uint8Array]", M = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", P = "[object Uint32Array]", A = {};
  A[b] = A[k] = A[w] = A[C] = A[$] = A[E] = A[M] = A[_] = A[P] = !0, A[n] = A[o] = A[u] = A[a] = A[x] = A[e] = A[c] = A[h] = A[d] = A[p] = A[f] = A[m] = A[g] = A[y] = A[s] = !1;
  function W(B) {
    return r(B) && t(B.length) && !!A[i(B)];
  }
  return xi = W, xi;
}
var vi, Hl;
function Gr() {
  if (Hl) return vi;
  Hl = 1;
  function i(t) {
    return function(r) {
      return t(r);
    };
  }
  return vi = i, vi;
}
var Kt = { exports: {} };
Kt.exports;
var Vl;
function Sc() {
  return Vl || (Vl = 1, function(i, t) {
    var r = ef(), n = t && !t.nodeType && t, o = n && !0 && i && !i.nodeType && i, a = o && o.exports === n, e = a && r.process, c = function() {
      try {
        var h = o && o.require && o.require("util").types;
        return h || e && e.binding && e.binding("util");
      } catch {
      }
    }();
    i.exports = c;
  }(Kt, Kt.exports)), Kt.exports;
}
var wi, Xl;
function or() {
  if (Xl) return wi;
  Xl = 1;
  var i = c0(), t = Gr(), r = Sc(), n = r && r.isTypedArray, o = n ? t(n) : i;
  return wi = o, wi;
}
var Si, Kl;
function nf() {
  if (Kl) return Si;
  Kl = 1;
  var i = o0(), t = ir(), r = Ae(), n = jt(), o = jr(), a = or(), e = Object.prototype, c = e.hasOwnProperty;
  function h(d, p) {
    var f = r(d), m = !f && t(d), g = !f && !m && n(d), y = !f && !m && !g && a(d), s = f || m || g || y, u = s ? i(d.length, String) : [], x = u.length;
    for (var b in d)
      (p || c.call(d, b)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      o(b, x))) && u.push(b);
    return u;
  }
  return Si = h, Si;
}
var ki, Ql;
function Yr() {
  if (Ql) return ki;
  Ql = 1;
  var i = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || i;
    return r === o;
  }
  return ki = t, ki;
}
var Ci, Zl;
function of() {
  if (Zl) return Ci;
  Zl = 1;
  function i(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Ci = i, Ci;
}
var $i, Jl;
function l0() {
  if (Jl) return $i;
  Jl = 1;
  var i = of(), t = i(Object.keys, Object);
  return $i = t, $i;
}
var Ei, ed;
function kc() {
  if (ed) return Ei;
  ed = 1;
  var i = Yr(), t = l0(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    if (!i(a))
      return t(a);
    var e = [];
    for (var c in Object(a))
      n.call(a, c) && c != "constructor" && e.push(c);
    return e;
  }
  return Ei = o, Ei;
}
var Mi, td;
function vt() {
  if (td) return Mi;
  td = 1;
  var i = rr(), t = wc();
  function r(n) {
    return n != null && t(n.length) && !i(n);
  }
  return Mi = r, Mi;
}
var Ri, rd;
function Tt() {
  if (rd) return Ri;
  rd = 1;
  var i = nf(), t = kc(), r = vt();
  function n(o) {
    return r(o) ? i(o) : t(o);
  }
  return Ri = n, Ri;
}
var _i, nd;
function d0() {
  if (nd) return _i;
  nd = 1;
  var i = nr(), t = Tt();
  function r(n, o) {
    return n && i(o, t(o), n);
  }
  return _i = r, _i;
}
var Ii, id;
function u0() {
  if (id) return Ii;
  id = 1;
  function i(t) {
    var r = [];
    if (t != null)
      for (var n in Object(t))
        r.push(n);
    return r;
  }
  return Ii = i, Ii;
}
var Ai, od;
function p0() {
  if (od) return Ai;
  od = 1;
  var i = Je(), t = Yr(), r = u0(), n = Object.prototype, o = n.hasOwnProperty;
  function a(e) {
    if (!i(e))
      return r(e);
    var c = t(e), h = [];
    for (var d in e)
      d == "constructor" && (c || !o.call(e, d)) || h.push(d);
    return h;
  }
  return Ai = a, Ai;
}
var Ti, ad;
function Bt() {
  if (ad) return Ti;
  ad = 1;
  var i = nf(), t = p0(), r = vt();
  function n(o) {
    return r(o) ? i(o, !0) : t(o);
  }
  return Ti = n, Ti;
}
var Pi, sd;
function h0() {
  if (sd) return Pi;
  sd = 1;
  var i = nr(), t = Bt();
  function r(n, o) {
    return n && i(o, t(o), n);
  }
  return Pi = r, Pi;
}
var Qt = { exports: {} };
Qt.exports;
var cd;
function af() {
  return cd || (cd = 1, function(i, t) {
    var r = it(), n = t && !t.nodeType && t, o = n && !0 && i && !i.nodeType && i, a = o && o.exports === n, e = a ? r.Buffer : void 0, c = e ? e.allocUnsafe : void 0;
    function h(d, p) {
      if (p)
        return d.slice();
      var f = d.length, m = c ? c(f) : new d.constructor(f);
      return d.copy(m), m;
    }
    i.exports = h;
  }(Qt, Qt.exports)), Qt.exports;
}
var Di, ld;
function sf() {
  if (ld) return Di;
  ld = 1;
  function i(t, r) {
    var n = -1, o = t.length;
    for (r || (r = Array(o)); ++n < o; )
      r[n] = t[n];
    return r;
  }
  return Di = i, Di;
}
var Li, dd;
function cf() {
  if (dd) return Li;
  dd = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, e = []; ++n < o; ) {
      var c = t[n];
      r(c, n, t) && (e[a++] = c);
    }
    return e;
  }
  return Li = i, Li;
}
var zi, ud;
function lf() {
  if (ud) return zi;
  ud = 1;
  function i() {
    return [];
  }
  return zi = i, zi;
}
var Bi, pd;
function Cc() {
  if (pd) return Bi;
  pd = 1;
  var i = cf(), t = lf(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(e) {
    return e == null ? [] : (e = Object(e), i(o(e), function(c) {
      return n.call(e, c);
    }));
  } : t;
  return Bi = a, Bi;
}
var Wi, hd;
function f0() {
  if (hd) return Wi;
  hd = 1;
  var i = nr(), t = Cc();
  function r(n, o) {
    return i(n, t(n), o);
  }
  return Wi = r, Wi;
}
var Ni, fd;
function $c() {
  if (fd) return Ni;
  fd = 1;
  function i(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return Ni = i, Ni;
}
var qi, gd;
function Hr() {
  if (gd) return qi;
  gd = 1;
  var i = of(), t = i(Object.getPrototypeOf, Object);
  return qi = t, qi;
}
var Oi, md;
function df() {
  if (md) return Oi;
  md = 1;
  var i = $c(), t = Hr(), r = Cc(), n = lf(), o = Object.getOwnPropertySymbols, a = o ? function(e) {
    for (var c = []; e; )
      i(c, r(e)), e = t(e);
    return c;
  } : n;
  return Oi = a, Oi;
}
var Fi, yd;
function g0() {
  if (yd) return Fi;
  yd = 1;
  var i = nr(), t = df();
  function r(n, o) {
    return i(n, t(n), o);
  }
  return Fi = r, Fi;
}
var Ui, bd;
function uf() {
  if (bd) return Ui;
  bd = 1;
  var i = $c(), t = Ae();
  function r(n, o, a) {
    var e = o(n);
    return t(n) ? e : i(e, a(n));
  }
  return Ui = r, Ui;
}
var ji, xd;
function pf() {
  if (xd) return ji;
  xd = 1;
  var i = uf(), t = Cc(), r = Tt();
  function n(o) {
    return i(o, r, t);
  }
  return ji = n, ji;
}
var Gi, vd;
function m0() {
  if (vd) return Gi;
  vd = 1;
  var i = uf(), t = df(), r = Bt();
  function n(o) {
    return i(o, r, t);
  }
  return Gi = n, Gi;
}
var Yi, wd;
function y0() {
  if (wd) return Yi;
  wd = 1;
  var i = zt(), t = it(), r = i(t, "DataView");
  return Yi = r, Yi;
}
var Hi, Sd;
function b0() {
  if (Sd) return Hi;
  Sd = 1;
  var i = zt(), t = it(), r = i(t, "Promise");
  return Hi = r, Hi;
}
var Vi, kd;
function hf() {
  if (kd) return Vi;
  kd = 1;
  var i = zt(), t = it(), r = i(t, "Set");
  return Vi = r, Vi;
}
var Xi, Cd;
function x0() {
  if (Cd) return Xi;
  Cd = 1;
  var i = zt(), t = it(), r = i(t, "WeakMap");
  return Xi = r, Xi;
}
var Ki, $d;
function Gt() {
  if ($d) return Ki;
  $d = 1;
  var i = y0(), t = bc(), r = b0(), n = hf(), o = x0(), a = Lt(), e = tf(), c = "[object Map]", h = "[object Object]", d = "[object Promise]", p = "[object Set]", f = "[object WeakMap]", m = "[object DataView]", g = e(i), y = e(t), s = e(r), u = e(n), x = e(o), b = a;
  return (i && b(new i(new ArrayBuffer(1))) != m || t && b(new t()) != c || r && b(r.resolve()) != d || n && b(new n()) != p || o && b(new o()) != f) && (b = function(k) {
    var w = a(k), C = w == h ? k.constructor : void 0, $ = C ? e(C) : "";
    if ($)
      switch ($) {
        case g:
          return m;
        case y:
          return c;
        case s:
          return d;
        case u:
          return p;
        case x:
          return f;
      }
    return w;
  }), Ki = b, Ki;
}
var Qi, Ed;
function v0() {
  if (Ed) return Qi;
  Ed = 1;
  var i = Object.prototype, t = i.hasOwnProperty;
  function r(n) {
    var o = n.length, a = new n.constructor(o);
    return o && typeof n[0] == "string" && t.call(n, "index") && (a.index = n.index, a.input = n.input), a;
  }
  return Qi = r, Qi;
}
var Zi, Md;
function ff() {
  if (Md) return Zi;
  Md = 1;
  var i = it(), t = i.Uint8Array;
  return Zi = t, Zi;
}
var Ji, Rd;
function Ec() {
  if (Rd) return Ji;
  Rd = 1;
  var i = ff();
  function t(r) {
    var n = new r.constructor(r.byteLength);
    return new i(n).set(new i(r)), n;
  }
  return Ji = t, Ji;
}
var eo, _d;
function w0() {
  if (_d) return eo;
  _d = 1;
  var i = Ec();
  function t(r, n) {
    var o = n ? i(r.buffer) : r.buffer;
    return new r.constructor(o, r.byteOffset, r.byteLength);
  }
  return eo = t, eo;
}
var to, Id;
function S0() {
  if (Id) return to;
  Id = 1;
  var i = /\w*$/;
  function t(r) {
    var n = new r.constructor(r.source, i.exec(r));
    return n.lastIndex = r.lastIndex, n;
  }
  return to = t, to;
}
var ro, Ad;
function k0() {
  if (Ad) return ro;
  Ad = 1;
  var i = Ut(), t = i ? i.prototype : void 0, r = t ? t.valueOf : void 0;
  function n(o) {
    return r ? Object(r.call(o)) : {};
  }
  return ro = n, ro;
}
var no, Td;
function gf() {
  if (Td) return no;
  Td = 1;
  var i = Ec();
  function t(r, n) {
    var o = n ? i(r.buffer) : r.buffer;
    return new r.constructor(o, r.byteOffset, r.length);
  }
  return no = t, no;
}
var io, Pd;
function C0() {
  if (Pd) return io;
  Pd = 1;
  var i = Ec(), t = w0(), r = S0(), n = k0(), o = gf(), a = "[object Boolean]", e = "[object Date]", c = "[object Map]", h = "[object Number]", d = "[object RegExp]", p = "[object Set]", f = "[object String]", m = "[object Symbol]", g = "[object ArrayBuffer]", y = "[object DataView]", s = "[object Float32Array]", u = "[object Float64Array]", x = "[object Int8Array]", b = "[object Int16Array]", k = "[object Int32Array]", w = "[object Uint8Array]", C = "[object Uint8ClampedArray]", $ = "[object Uint16Array]", E = "[object Uint32Array]";
  function M(_, P, A) {
    var W = _.constructor;
    switch (P) {
      case g:
        return i(_);
      case a:
      case e:
        return new W(+_);
      case y:
        return t(_, A);
      case s:
      case u:
      case x:
      case b:
      case k:
      case w:
      case C:
      case $:
      case E:
        return o(_, A);
      case c:
        return new W();
      case h:
      case f:
        return new W(_);
      case d:
        return r(_);
      case p:
        return new W();
      case m:
        return n(_);
    }
  }
  return io = M, io;
}
var oo, Dd;
function mf() {
  if (Dd) return oo;
  Dd = 1;
  var i = Je(), t = Object.create, r = /* @__PURE__ */ function() {
    function n() {
    }
    return function(o) {
      if (!i(o))
        return {};
      if (t)
        return t(o);
      n.prototype = o;
      var a = new n();
      return n.prototype = void 0, a;
    };
  }();
  return oo = r, oo;
}
var ao, Ld;
function yf() {
  if (Ld) return ao;
  Ld = 1;
  var i = mf(), t = Hr(), r = Yr();
  function n(o) {
    return typeof o.constructor == "function" && !r(o) ? i(t(o)) : {};
  }
  return ao = n, ao;
}
var so, zd;
function $0() {
  if (zd) return so;
  zd = 1;
  var i = Gt(), t = pt(), r = "[object Map]";
  function n(o) {
    return t(o) && i(o) == r;
  }
  return so = n, so;
}
var co, Bd;
function E0() {
  if (Bd) return co;
  Bd = 1;
  var i = $0(), t = Gr(), r = Sc(), n = r && r.isMap, o = n ? t(n) : i;
  return co = o, co;
}
var lo, Wd;
function M0() {
  if (Wd) return lo;
  Wd = 1;
  var i = Gt(), t = pt(), r = "[object Set]";
  function n(o) {
    return t(o) && i(o) == r;
  }
  return lo = n, lo;
}
var uo, Nd;
function R0() {
  if (Nd) return uo;
  Nd = 1;
  var i = M0(), t = Gr(), r = Sc(), n = r && r.isSet, o = n ? t(n) : i;
  return uo = o, uo;
}
var po, qd;
function bf() {
  if (qd) return po;
  qd = 1;
  var i = Or(), t = vc(), r = Ur(), n = d0(), o = h0(), a = af(), e = sf(), c = f0(), h = g0(), d = pf(), p = m0(), f = Gt(), m = v0(), g = C0(), y = yf(), s = Ae(), u = jt(), x = E0(), b = Je(), k = R0(), w = Tt(), C = Bt(), $ = 1, E = 2, M = 4, _ = "[object Arguments]", P = "[object Array]", A = "[object Boolean]", W = "[object Date]", B = "[object Error]", L = "[object Function]", j = "[object GeneratorFunction]", q = "[object Map]", X = "[object Number]", re = "[object Object]", oe = "[object RegExp]", te = "[object Set]", ae = "[object String]", U = "[object Symbol]", I = "[object WeakMap]", O = "[object ArrayBuffer]", R = "[object DataView]", D = "[object Float32Array]", z = "[object Float64Array]", V = "[object Int8Array]", Q = "[object Int16Array]", Z = "[object Int32Array]", ke = "[object Uint8Array]", Ce = "[object Uint8ClampedArray]", J = "[object Uint16Array]", xe = "[object Uint32Array]", le = {};
  le[_] = le[P] = le[O] = le[R] = le[A] = le[W] = le[D] = le[z] = le[V] = le[Q] = le[Z] = le[q] = le[X] = le[re] = le[oe] = le[te] = le[ae] = le[U] = le[ke] = le[Ce] = le[J] = le[xe] = !0, le[B] = le[L] = le[I] = !1;
  function Le(ce, pe, Ne, Ke, qe, Be) {
    var Ie, Me = pe & $, rt = pe & E, st = pe & M;
    if (Ne && (Ie = qe ? Ne(ce, Ke, qe, Be) : Ne(ce)), Ie !== void 0)
      return Ie;
    if (!b(ce))
      return ce;
    var St = s(ce);
    if (St) {
      if (Ie = m(ce), !Me)
        return e(ce, Ie);
    } else {
      var ct = f(ce), qt = ct == L || ct == j;
      if (u(ce))
        return a(ce, Me);
      if (ct == re || ct == _ || qt && !qe) {
        if (Ie = rt || qt ? {} : y(ce), !Me)
          return rt ? h(ce, o(Ie, ce)) : c(ce, n(Ie, ce));
      } else {
        if (!le[ct])
          return qe ? ce : {};
        Ie = g(ce, ct, Me);
      }
    }
    Be || (Be = new i());
    var kt = Be.get(ce);
    if (kt)
      return kt;
    Be.set(ce, Ie), k(ce) ? ce.forEach(function(Ge) {
      Ie.add(Le(Ge, pe, Ne, Ge, ce, Be));
    }) : x(ce) && ce.forEach(function(Ge, Fe) {
      Ie.set(Fe, Le(Ge, pe, Ne, Fe, ce, Be));
    });
    var Ct = st ? rt ? p : d : rt ? C : w, ft = St ? void 0 : Ct(ce);
    return t(ft || ce, function(Ge, Fe) {
      ft && (Fe = Ge, Ge = ce[Fe]), r(Ie, Fe, Le(Ge, pe, Ne, Fe, ce, Be));
    }), Ie;
  }
  return po = Le, po;
}
var ho, Od;
function _0() {
  if (Od) return ho;
  Od = 1;
  var i = bf(), t = 4;
  function r(n) {
    return i(n, t);
  }
  return ho = r, ho;
}
var fo, Fd;
function Mc() {
  if (Fd) return fo;
  Fd = 1;
  function i(t) {
    return function() {
      return t;
    };
  }
  return fo = i, fo;
}
var go, Ud;
function I0() {
  if (Ud) return go;
  Ud = 1;
  function i(t) {
    return function(r, n, o) {
      for (var a = -1, e = Object(r), c = o(r), h = c.length; h--; ) {
        var d = c[t ? h : ++a];
        if (n(e[d], d, e) === !1)
          break;
      }
      return r;
    };
  }
  return go = i, go;
}
var mo, jd;
function Rc() {
  if (jd) return mo;
  jd = 1;
  var i = I0(), t = i();
  return mo = t, mo;
}
var yo, Gd;
function _c() {
  if (Gd) return yo;
  Gd = 1;
  var i = Rc(), t = Tt();
  function r(n, o) {
    return n && i(n, o, t);
  }
  return yo = r, yo;
}
var bo, Yd;
function A0() {
  if (Yd) return bo;
  Yd = 1;
  var i = vt();
  function t(r, n) {
    return function(o, a) {
      if (o == null)
        return o;
      if (!i(o))
        return r(o, a);
      for (var e = o.length, c = n ? e : -1, h = Object(o); (n ? c-- : ++c < e) && a(h[c], c, h) !== !1; )
        ;
      return o;
    };
  }
  return bo = t, bo;
}
var xo, Hd;
function Vr() {
  if (Hd) return xo;
  Hd = 1;
  var i = _c(), t = A0(), r = t(i);
  return xo = r, xo;
}
var vo, Vd;
function Wt() {
  if (Vd) return vo;
  Vd = 1;
  function i(t) {
    return t;
  }
  return vo = i, vo;
}
var wo, Xd;
function xf() {
  if (Xd) return wo;
  Xd = 1;
  var i = Wt();
  function t(r) {
    return typeof r == "function" ? r : i;
  }
  return wo = t, wo;
}
var So, Kd;
function vf() {
  if (Kd) return So;
  Kd = 1;
  var i = vc(), t = Vr(), r = xf(), n = Ae();
  function o(a, e) {
    var c = n(a) ? i : t;
    return c(a, r(e));
  }
  return So = o, So;
}
var ko, Qd;
function wf() {
  return Qd || (Qd = 1, ko = vf()), ko;
}
var Co, Zd;
function T0() {
  if (Zd) return Co;
  Zd = 1;
  var i = Vr();
  function t(r, n) {
    var o = [];
    return i(r, function(a, e, c) {
      n(a, e, c) && o.push(a);
    }), o;
  }
  return Co = t, Co;
}
var $o, Jd;
function P0() {
  if (Jd) return $o;
  Jd = 1;
  var i = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, i), this;
  }
  return $o = t, $o;
}
var Eo, eu;
function D0() {
  if (eu) return Eo;
  eu = 1;
  function i(t) {
    return this.__data__.has(t);
  }
  return Eo = i, Eo;
}
var Mo, tu;
function Sf() {
  if (tu) return Mo;
  tu = 1;
  var i = xc(), t = P0(), r = D0();
  function n(o) {
    var a = -1, e = o == null ? 0 : o.length;
    for (this.__data__ = new i(); ++a < e; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Mo = n, Mo;
}
var Ro, ru;
function L0() {
  if (ru) return Ro;
  ru = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Ro = i, Ro;
}
var _o, nu;
function kf() {
  if (nu) return _o;
  nu = 1;
  function i(t, r) {
    return t.has(r);
  }
  return _o = i, _o;
}
var Io, iu;
function Cf() {
  if (iu) return Io;
  iu = 1;
  var i = Sf(), t = L0(), r = kf(), n = 1, o = 2;
  function a(e, c, h, d, p, f) {
    var m = h & n, g = e.length, y = c.length;
    if (g != y && !(m && y > g))
      return !1;
    var s = f.get(e), u = f.get(c);
    if (s && u)
      return s == c && u == e;
    var x = -1, b = !0, k = h & o ? new i() : void 0;
    for (f.set(e, c), f.set(c, e); ++x < g; ) {
      var w = e[x], C = c[x];
      if (d)
        var $ = m ? d(C, w, x, c, e, f) : d(w, C, x, e, c, f);
      if ($ !== void 0) {
        if ($)
          continue;
        b = !1;
        break;
      }
      if (k) {
        if (!t(c, function(E, M) {
          if (!r(k, M) && (w === E || p(w, E, h, d, f)))
            return k.push(M);
        })) {
          b = !1;
          break;
        }
      } else if (!(w === C || p(w, C, h, d, f))) {
        b = !1;
        break;
      }
    }
    return f.delete(e), f.delete(c), b;
  }
  return Io = a, Io;
}
var Ao, ou;
function z0() {
  if (ou) return Ao;
  ou = 1;
  function i(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return Ao = i, Ao;
}
var To, au;
function Ic() {
  if (au) return To;
  au = 1;
  function i(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return To = i, To;
}
var Po, su;
function B0() {
  if (su) return Po;
  su = 1;
  var i = Ut(), t = ff(), r = Ft(), n = Cf(), o = z0(), a = Ic(), e = 1, c = 2, h = "[object Boolean]", d = "[object Date]", p = "[object Error]", f = "[object Map]", m = "[object Number]", g = "[object RegExp]", y = "[object Set]", s = "[object String]", u = "[object Symbol]", x = "[object ArrayBuffer]", b = "[object DataView]", k = i ? i.prototype : void 0, w = k ? k.valueOf : void 0;
  function C($, E, M, _, P, A, W) {
    switch (M) {
      case b:
        if ($.byteLength != E.byteLength || $.byteOffset != E.byteOffset)
          return !1;
        $ = $.buffer, E = E.buffer;
      case x:
        return !($.byteLength != E.byteLength || !A(new t($), new t(E)));
      case h:
      case d:
      case m:
        return r(+$, +E);
      case p:
        return $.name == E.name && $.message == E.message;
      case g:
      case s:
        return $ == E + "";
      case f:
        var B = o;
      case y:
        var L = _ & e;
        if (B || (B = a), $.size != E.size && !L)
          return !1;
        var j = W.get($);
        if (j)
          return j == E;
        _ |= c, W.set($, E);
        var q = n(B($), B(E), _, P, A, W);
        return W.delete($), q;
      case u:
        if (w)
          return w.call($) == w.call(E);
    }
    return !1;
  }
  return Po = C, Po;
}
var Do, cu;
function W0() {
  if (cu) return Do;
  cu = 1;
  var i = pf(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function o(a, e, c, h, d, p) {
    var f = c & t, m = i(a), g = m.length, y = i(e), s = y.length;
    if (g != s && !f)
      return !1;
    for (var u = g; u--; ) {
      var x = m[u];
      if (!(f ? x in e : n.call(e, x)))
        return !1;
    }
    var b = p.get(a), k = p.get(e);
    if (b && k)
      return b == e && k == a;
    var w = !0;
    p.set(a, e), p.set(e, a);
    for (var C = f; ++u < g; ) {
      x = m[u];
      var $ = a[x], E = e[x];
      if (h)
        var M = f ? h(E, $, x, e, a, p) : h($, E, x, a, e, p);
      if (!(M === void 0 ? $ === E || d($, E, c, h, p) : M)) {
        w = !1;
        break;
      }
      C || (C = x == "constructor");
    }
    if (w && !C) {
      var _ = a.constructor, P = e.constructor;
      _ != P && "constructor" in a && "constructor" in e && !(typeof _ == "function" && _ instanceof _ && typeof P == "function" && P instanceof P) && (w = !1);
    }
    return p.delete(a), p.delete(e), w;
  }
  return Do = o, Do;
}
var Lo, lu;
function N0() {
  if (lu) return Lo;
  lu = 1;
  var i = Or(), t = Cf(), r = B0(), n = W0(), o = Gt(), a = Ae(), e = jt(), c = or(), h = 1, d = "[object Arguments]", p = "[object Array]", f = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function y(s, u, x, b, k, w) {
    var C = a(s), $ = a(u), E = C ? p : o(s), M = $ ? p : o(u);
    E = E == d ? f : E, M = M == d ? f : M;
    var _ = E == f, P = M == f, A = E == M;
    if (A && e(s)) {
      if (!e(u))
        return !1;
      C = !0, _ = !1;
    }
    if (A && !_)
      return w || (w = new i()), C || c(s) ? t(s, u, x, b, k, w) : r(s, u, E, x, b, k, w);
    if (!(x & h)) {
      var W = _ && g.call(s, "__wrapped__"), B = P && g.call(u, "__wrapped__");
      if (W || B) {
        var L = W ? s.value() : s, j = B ? u.value() : u;
        return w || (w = new i()), k(L, j, x, b, w);
      }
    }
    return A ? (w || (w = new i()), n(s, u, x, b, k, w)) : !1;
  }
  return Lo = y, Lo;
}
var zo, du;
function $f() {
  if (du) return zo;
  du = 1;
  var i = N0(), t = pt();
  function r(n, o, a, e, c) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : i(n, o, a, e, r, c);
  }
  return zo = r, zo;
}
var Bo, uu;
function q0() {
  if (uu) return Bo;
  uu = 1;
  var i = Or(), t = $f(), r = 1, n = 2;
  function o(a, e, c, h) {
    var d = c.length, p = d, f = !h;
    if (a == null)
      return !p;
    for (a = Object(a); d--; ) {
      var m = c[d];
      if (f && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++d < p; ) {
      m = c[d];
      var g = m[0], y = a[g], s = m[1];
      if (f && m[2]) {
        if (y === void 0 && !(g in a))
          return !1;
      } else {
        var u = new i();
        if (h)
          var x = h(y, s, g, a, e, u);
        if (!(x === void 0 ? t(s, y, r | n, h, u) : x))
          return !1;
      }
    }
    return !0;
  }
  return Bo = o, Bo;
}
var Wo, pu;
function Ef() {
  if (pu) return Wo;
  pu = 1;
  var i = Je();
  function t(r) {
    return r === r && !i(r);
  }
  return Wo = t, Wo;
}
var No, hu;
function O0() {
  if (hu) return No;
  hu = 1;
  var i = Ef(), t = Tt();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var e = o[a], c = n[e];
      o[a] = [e, c, i(c)];
    }
    return o;
  }
  return No = r, No;
}
var qo, fu;
function Mf() {
  if (fu) return qo;
  fu = 1;
  function i(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return qo = i, qo;
}
var Oo, gu;
function F0() {
  if (gu) return Oo;
  gu = 1;
  var i = q0(), t = O0(), r = Mf();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(e) {
      return e === o || i(e, o, a);
    };
  }
  return Oo = n, Oo;
}
var Fo, mu;
function Yt() {
  if (mu) return Fo;
  mu = 1;
  var i = Lt(), t = pt(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && i(o) == r;
  }
  return Fo = n, Fo;
}
var Uo, yu;
function Ac() {
  if (yu) return Uo;
  yu = 1;
  var i = Ae(), t = Yt(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, e) {
    if (i(a))
      return !1;
    var c = typeof a;
    return c == "number" || c == "symbol" || c == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || e != null && a in Object(e);
  }
  return Uo = o, Uo;
}
var jo, bu;
function U0() {
  if (bu) return jo;
  bu = 1;
  var i = xc(), t = "Expected a function";
  function r(n, o) {
    if (typeof n != "function" || o != null && typeof o != "function")
      throw new TypeError(t);
    var a = function() {
      var e = arguments, c = o ? o.apply(this, e) : e[0], h = a.cache;
      if (h.has(c))
        return h.get(c);
      var d = n.apply(this, e);
      return a.cache = h.set(c, d) || h, d;
    };
    return a.cache = new (r.Cache || i)(), a;
  }
  return r.Cache = i, jo = r, jo;
}
var Go, xu;
function j0() {
  if (xu) return Go;
  xu = 1;
  var i = U0(), t = 500;
  function r(n) {
    var o = i(n, function(e) {
      return a.size === t && a.clear(), e;
    }), a = o.cache;
    return o;
  }
  return Go = r, Go;
}
var Yo, vu;
function G0() {
  if (vu) return Yo;
  vu = 1;
  var i = j0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = i(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(e, c, h, d) {
      a.push(h ? d.replace(r, "$1") : c || e);
    }), a;
  });
  return Yo = n, Yo;
}
var Ho, wu;
function Xr() {
  if (wu) return Ho;
  wu = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Ho = i, Ho;
}
var Vo, Su;
function Y0() {
  if (Su) return Vo;
  Su = 1;
  var i = Ut(), t = Xr(), r = Ae(), n = Yt(), o = i ? i.prototype : void 0, a = o ? o.toString : void 0;
  function e(c) {
    if (typeof c == "string")
      return c;
    if (r(c))
      return t(c, e) + "";
    if (n(c))
      return a ? a.call(c) : "";
    var h = c + "";
    return h == "0" && 1 / c == -1 / 0 ? "-0" : h;
  }
  return Vo = e, Vo;
}
var Xo, ku;
function Rf() {
  if (ku) return Xo;
  ku = 1;
  var i = Y0();
  function t(r) {
    return r == null ? "" : i(r);
  }
  return Xo = t, Xo;
}
var Ko, Cu;
function Kr() {
  if (Cu) return Ko;
  Cu = 1;
  var i = Ae(), t = Ac(), r = G0(), n = Rf();
  function o(a, e) {
    return i(a) ? a : t(a, e) ? [a] : r(n(a));
  }
  return Ko = o, Ko;
}
var Qo, $u;
function ar() {
  if ($u) return Qo;
  $u = 1;
  var i = Yt();
  function t(r) {
    if (typeof r == "string" || i(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Qo = t, Qo;
}
var Zo, Eu;
function Qr() {
  if (Eu) return Zo;
  Eu = 1;
  var i = Kr(), t = ar();
  function r(n, o) {
    o = i(o, n);
    for (var a = 0, e = o.length; n != null && a < e; )
      n = n[t(o[a++])];
    return a && a == e ? n : void 0;
  }
  return Zo = r, Zo;
}
var Jo, Mu;
function H0() {
  if (Mu) return Jo;
  Mu = 1;
  var i = Qr();
  function t(r, n, o) {
    var a = r == null ? void 0 : i(r, n);
    return a === void 0 ? o : a;
  }
  return Jo = t, Jo;
}
var ea, Ru;
function V0() {
  if (Ru) return ea;
  Ru = 1;
  function i(t, r) {
    return t != null && r in Object(t);
  }
  return ea = i, ea;
}
var ta, _u;
function _f() {
  if (_u) return ta;
  _u = 1;
  var i = Kr(), t = ir(), r = Ae(), n = jr(), o = wc(), a = ar();
  function e(c, h, d) {
    h = i(h, c);
    for (var p = -1, f = h.length, m = !1; ++p < f; ) {
      var g = a(h[p]);
      if (!(m = c != null && d(c, g)))
        break;
      c = c[g];
    }
    return m || ++p != f ? m : (f = c == null ? 0 : c.length, !!f && o(f) && n(g, f) && (r(c) || t(c)));
  }
  return ta = e, ta;
}
var ra, Iu;
function If() {
  if (Iu) return ra;
  Iu = 1;
  var i = V0(), t = _f();
  function r(n, o) {
    return n != null && t(n, o, i);
  }
  return ra = r, ra;
}
var na, Au;
function X0() {
  if (Au) return na;
  Au = 1;
  var i = $f(), t = H0(), r = If(), n = Ac(), o = Ef(), a = Mf(), e = ar(), c = 1, h = 2;
  function d(p, f) {
    return n(p) && o(f) ? a(e(p), f) : function(m) {
      var g = t(m, p);
      return g === void 0 && g === f ? r(m, p) : i(f, g, c | h);
    };
  }
  return na = d, na;
}
var ia, Tu;
function Af() {
  if (Tu) return ia;
  Tu = 1;
  function i(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return ia = i, ia;
}
var oa, Pu;
function K0() {
  if (Pu) return oa;
  Pu = 1;
  var i = Qr();
  function t(r) {
    return function(n) {
      return i(n, r);
    };
  }
  return oa = t, oa;
}
var aa, Du;
function Q0() {
  if (Du) return aa;
  Du = 1;
  var i = Af(), t = K0(), r = Ac(), n = ar();
  function o(a) {
    return r(a) ? i(n(a)) : t(a);
  }
  return aa = o, aa;
}
var sa, Lu;
function wt() {
  if (Lu) return sa;
  Lu = 1;
  var i = F0(), t = X0(), r = Wt(), n = Ae(), o = Q0();
  function a(e) {
    return typeof e == "function" ? e : e == null ? r : typeof e == "object" ? n(e) ? t(e[0], e[1]) : i(e) : o(e);
  }
  return sa = a, sa;
}
var ca, zu;
function Tf() {
  if (zu) return ca;
  zu = 1;
  var i = cf(), t = T0(), r = wt(), n = Ae();
  function o(a, e) {
    var c = n(a) ? i : t;
    return c(a, r(e, 3));
  }
  return ca = o, ca;
}
var la, Bu;
function Z0() {
  if (Bu) return la;
  Bu = 1;
  var i = Object.prototype, t = i.hasOwnProperty;
  function r(n, o) {
    return n != null && t.call(n, o);
  }
  return la = r, la;
}
var da, Wu;
function Pf() {
  if (Wu) return da;
  Wu = 1;
  var i = Z0(), t = _f();
  function r(n, o) {
    return n != null && t(n, o, i);
  }
  return da = r, da;
}
var ua, Nu;
function J0() {
  if (Nu) return ua;
  Nu = 1;
  var i = kc(), t = Gt(), r = ir(), n = Ae(), o = vt(), a = jt(), e = Yr(), c = or(), h = "[object Map]", d = "[object Set]", p = Object.prototype, f = p.hasOwnProperty;
  function m(g) {
    if (g == null)
      return !0;
    if (o(g) && (n(g) || typeof g == "string" || typeof g.splice == "function" || a(g) || c(g) || r(g)))
      return !g.length;
    var y = t(g);
    if (y == h || y == d)
      return !g.size;
    if (e(g))
      return !i(g).length;
    for (var s in g)
      if (f.call(g, s))
        return !1;
    return !0;
  }
  return ua = m, ua;
}
var pa, qu;
function Df() {
  if (qu) return pa;
  qu = 1;
  function i(t) {
    return t === void 0;
  }
  return pa = i, pa;
}
var ha, Ou;
function Lf() {
  if (Ou) return ha;
  Ou = 1;
  var i = Vr(), t = vt();
  function r(n, o) {
    var a = -1, e = t(n) ? Array(n.length) : [];
    return i(n, function(c, h, d) {
      e[++a] = o(c, h, d);
    }), e;
  }
  return ha = r, ha;
}
var fa, Fu;
function zf() {
  if (Fu) return fa;
  Fu = 1;
  var i = Xr(), t = wt(), r = Lf(), n = Ae();
  function o(a, e) {
    var c = n(a) ? i : r;
    return c(a, t(e, 3));
  }
  return fa = o, fa;
}
var ga, Uu;
function em() {
  if (Uu) return ga;
  Uu = 1;
  function i(t, r, n, o) {
    var a = -1, e = t == null ? 0 : t.length;
    for (o && e && (n = t[++a]); ++a < e; )
      n = r(n, t[a], a, t);
    return n;
  }
  return ga = i, ga;
}
var ma, ju;
function tm() {
  if (ju) return ma;
  ju = 1;
  function i(t, r, n, o, a) {
    return a(t, function(e, c, h) {
      n = o ? (o = !1, e) : r(n, e, c, h);
    }), n;
  }
  return ma = i, ma;
}
var ya, Gu;
function Bf() {
  if (Gu) return ya;
  Gu = 1;
  var i = em(), t = Vr(), r = wt(), n = tm(), o = Ae();
  function a(e, c, h) {
    var d = o(e) ? i : n, p = arguments.length < 3;
    return d(e, r(c, 4), h, p, t);
  }
  return ya = a, ya;
}
var ba, Yu;
function rm() {
  if (Yu) return ba;
  Yu = 1;
  var i = Lt(), t = Ae(), r = pt(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && i(a) == n;
  }
  return ba = o, ba;
}
var xa, Hu;
function nm() {
  if (Hu) return xa;
  Hu = 1;
  var i = Af(), t = i("length");
  return xa = t, xa;
}
var va, Vu;
function im() {
  if (Vu) return va;
  Vu = 1;
  var i = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", e = "\\u200d", c = RegExp("[" + e + i + o + a + "]");
  function h(d) {
    return c.test(d);
  }
  return va = h, va;
}
var wa, Xu;
function om() {
  if (Xu) return wa;
  Xu = 1;
  var i = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", e = "[" + i + "]", c = "[" + o + "]", h = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + c + "|" + h + ")", p = "[^" + i + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", y = d + "?", s = "[" + a + "]?", u = "(?:" + g + "(?:" + [p, f, m].join("|") + ")" + s + y + ")*", x = s + y + u, b = "(?:" + [p + c + "?", c, f, m, e].join("|") + ")", k = RegExp(h + "(?=" + h + ")|" + b + x, "g");
  function w(C) {
    for (var $ = k.lastIndex = 0; k.test(C); )
      ++$;
    return $;
  }
  return wa = w, wa;
}
var Sa, Ku;
function am() {
  if (Ku) return Sa;
  Ku = 1;
  var i = nm(), t = im(), r = om();
  function n(o) {
    return t(o) ? r(o) : i(o);
  }
  return Sa = n, Sa;
}
var ka, Qu;
function sm() {
  if (Qu) return ka;
  Qu = 1;
  var i = kc(), t = Gt(), r = vt(), n = rm(), o = am(), a = "[object Map]", e = "[object Set]";
  function c(h) {
    if (h == null)
      return 0;
    if (r(h))
      return n(h) ? o(h) : h.length;
    var d = t(h);
    return d == a || d == e ? h.size : i(h).length;
  }
  return ka = c, ka;
}
var Ca, Zu;
function cm() {
  if (Zu) return Ca;
  Zu = 1;
  var i = vc(), t = mf(), r = _c(), n = wt(), o = Hr(), a = Ae(), e = jt(), c = rr(), h = Je(), d = or();
  function p(f, m, g) {
    var y = a(f), s = y || e(f) || d(f);
    if (m = n(m, 4), g == null) {
      var u = f && f.constructor;
      s ? g = y ? new u() : [] : h(f) ? g = c(u) ? t(o(f)) : {} : g = {};
    }
    return (s ? i : r)(f, function(x, b, k) {
      return m(g, x, b, k);
    }), g;
  }
  return Ca = p, Ca;
}
var $a, Ju;
function lm() {
  if (Ju) return $a;
  Ju = 1;
  var i = Ut(), t = ir(), r = Ae(), n = i ? i.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return $a = o, $a;
}
var Ea, ep;
function Tc() {
  if (ep) return Ea;
  ep = 1;
  var i = $c(), t = lm();
  function r(n, o, a, e, c) {
    var h = -1, d = n.length;
    for (a || (a = t), c || (c = []); ++h < d; ) {
      var p = n[h];
      o > 0 && a(p) ? o > 1 ? r(p, o - 1, a, e, c) : i(c, p) : e || (c[c.length] = p);
    }
    return c;
  }
  return Ea = r, Ea;
}
var Ma, tp;
function dm() {
  if (tp) return Ma;
  tp = 1;
  function i(t, r, n) {
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
  return Ma = i, Ma;
}
var Ra, rp;
function Wf() {
  if (rp) return Ra;
  rp = 1;
  var i = dm(), t = Math.max;
  function r(n, o, a) {
    return o = t(o === void 0 ? n.length - 1 : o, 0), function() {
      for (var e = arguments, c = -1, h = t(e.length - o, 0), d = Array(h); ++c < h; )
        d[c] = e[o + c];
      c = -1;
      for (var p = Array(o + 1); ++c < o; )
        p[c] = e[c];
      return p[o] = a(d), i(n, this, p);
    };
  }
  return Ra = r, Ra;
}
var _a, np;
function um() {
  if (np) return _a;
  np = 1;
  var i = Mc(), t = rf(), r = Wt(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: i(a),
      writable: !0
    });
  } : r;
  return _a = n, _a;
}
var Ia, ip;
function pm() {
  if (ip) return Ia;
  ip = 1;
  var i = 800, t = 16, r = Date.now;
  function n(o) {
    var a = 0, e = 0;
    return function() {
      var c = r(), h = t - (c - e);
      if (e = c, h > 0) {
        if (++a >= i)
          return arguments[0];
      } else
        a = 0;
      return o.apply(void 0, arguments);
    };
  }
  return Ia = n, Ia;
}
var Aa, op;
function Nf() {
  if (op) return Aa;
  op = 1;
  var i = um(), t = pm(), r = t(i);
  return Aa = r, Aa;
}
var Ta, ap;
function Zr() {
  if (ap) return Ta;
  ap = 1;
  var i = Wt(), t = Wf(), r = Nf();
  function n(o, a) {
    return r(t(o, a, i), o + "");
  }
  return Ta = n, Ta;
}
var Pa, sp;
function qf() {
  if (sp) return Pa;
  sp = 1;
  function i(t, r, n, o) {
    for (var a = t.length, e = n + (o ? 1 : -1); o ? e-- : ++e < a; )
      if (r(t[e], e, t))
        return e;
    return -1;
  }
  return Pa = i, Pa;
}
var Da, cp;
function hm() {
  if (cp) return Da;
  cp = 1;
  function i(t) {
    return t !== t;
  }
  return Da = i, Da;
}
var La, lp;
function fm() {
  if (lp) return La;
  lp = 1;
  function i(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return La = i, La;
}
var za, dp;
function gm() {
  if (dp) return za;
  dp = 1;
  var i = qf(), t = hm(), r = fm();
  function n(o, a, e) {
    return a === a ? r(o, a, e) : i(o, t, e);
  }
  return za = n, za;
}
var Ba, up;
function mm() {
  if (up) return Ba;
  up = 1;
  var i = gm();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && i(r, n, 0) > -1;
  }
  return Ba = t, Ba;
}
var Wa, pp;
function ym() {
  if (pp) return Wa;
  pp = 1;
  function i(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return Wa = i, Wa;
}
var Na, hp;
function bm() {
  if (hp) return Na;
  hp = 1;
  function i() {
  }
  return Na = i, Na;
}
var qa, fp;
function xm() {
  if (fp) return qa;
  fp = 1;
  var i = hf(), t = bm(), r = Ic(), n = 1 / 0, o = i && 1 / r(new i([, -0]))[1] == n ? function(a) {
    return new i(a);
  } : t;
  return qa = o, qa;
}
var Oa, gp;
function vm() {
  if (gp) return Oa;
  gp = 1;
  var i = Sf(), t = mm(), r = ym(), n = kf(), o = xm(), a = Ic(), e = 200;
  function c(h, d, p) {
    var f = -1, m = t, g = h.length, y = !0, s = [], u = s;
    if (p)
      y = !1, m = r;
    else if (g >= e) {
      var x = d ? null : o(h);
      if (x)
        return a(x);
      y = !1, m = n, u = new i();
    } else
      u = d ? [] : s;
    e:
      for (; ++f < g; ) {
        var b = h[f], k = d ? d(b) : b;
        if (b = p || b !== 0 ? b : 0, y && k === k) {
          for (var w = u.length; w--; )
            if (u[w] === k)
              continue e;
          d && u.push(k), s.push(b);
        } else m(u, k, p) || (u !== s && u.push(k), s.push(b));
      }
    return s;
  }
  return Oa = c, Oa;
}
var Fa, mp;
function Of() {
  if (mp) return Fa;
  mp = 1;
  var i = vt(), t = pt();
  function r(n) {
    return t(n) && i(n);
  }
  return Fa = r, Fa;
}
var Ua, yp;
function wm() {
  if (yp) return Ua;
  yp = 1;
  var i = Tc(), t = Zr(), r = vm(), n = Of(), o = t(function(a) {
    return r(i(a, 1, n, !0));
  });
  return Ua = o, Ua;
}
var ja, bp;
function Sm() {
  if (bp) return ja;
  bp = 1;
  var i = Xr();
  function t(r, n) {
    return i(n, function(o) {
      return r[o];
    });
  }
  return ja = t, ja;
}
var Ga, xp;
function Ff() {
  if (xp) return Ga;
  xp = 1;
  var i = Sm(), t = Tt();
  function r(n) {
    return n == null ? [] : i(n, t(n));
  }
  return Ga = r, Ga;
}
var Ya, vp;
function et() {
  if (vp) return Ya;
  vp = 1;
  var i;
  if (typeof yc == "function")
    try {
      i = {
        clone: _0(),
        constant: Mc(),
        each: wf(),
        filter: Tf(),
        has: Pf(),
        isArray: Ae(),
        isEmpty: J0(),
        isFunction: rr(),
        isUndefined: Df(),
        keys: Tt(),
        map: zf(),
        reduce: Bf(),
        size: sm(),
        transform: cm(),
        union: wm(),
        values: Ff()
      };
    } catch {
    }
  return i || (i = window._), Ya = i, Ya;
}
var Ha, wp;
function Pc() {
  if (wp) return Ha;
  wp = 1;
  var i = et();
  Ha = o;
  var t = "\0", r = "\0", n = "";
  function o(p) {
    this._isDirected = i.has(p, "directed") ? p.directed : !0, this._isMultigraph = i.has(p, "multigraph") ? p.multigraph : !1, this._isCompound = i.has(p, "compound") ? p.compound : !1, this._label = void 0, this._defaultNodeLabelFn = i.constant(void 0), this._defaultEdgeLabelFn = i.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[r] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  o.prototype._nodeCount = 0, o.prototype._edgeCount = 0, o.prototype.isDirected = function() {
    return this._isDirected;
  }, o.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, o.prototype.isCompound = function() {
    return this._isCompound;
  }, o.prototype.setGraph = function(p) {
    return this._label = p, this;
  }, o.prototype.graph = function() {
    return this._label;
  }, o.prototype.setDefaultNodeLabel = function(p) {
    return i.isFunction(p) || (p = i.constant(p)), this._defaultNodeLabelFn = p, this;
  }, o.prototype.nodeCount = function() {
    return this._nodeCount;
  }, o.prototype.nodes = function() {
    return i.keys(this._nodes);
  }, o.prototype.sources = function() {
    var p = this;
    return i.filter(this.nodes(), function(f) {
      return i.isEmpty(p._in[f]);
    });
  }, o.prototype.sinks = function() {
    var p = this;
    return i.filter(this.nodes(), function(f) {
      return i.isEmpty(p._out[f]);
    });
  }, o.prototype.setNodes = function(p, f) {
    var m = arguments, g = this;
    return i.each(p, function(y) {
      m.length > 1 ? g.setNode(y, f) : g.setNode(y);
    }), this;
  }, o.prototype.setNode = function(p, f) {
    return i.has(this._nodes, p) ? (arguments.length > 1 && (this._nodes[p] = f), this) : (this._nodes[p] = arguments.length > 1 ? f : this._defaultNodeLabelFn(p), this._isCompound && (this._parent[p] = r, this._children[p] = {}, this._children[r][p] = !0), this._in[p] = {}, this._preds[p] = {}, this._out[p] = {}, this._sucs[p] = {}, ++this._nodeCount, this);
  }, o.prototype.node = function(p) {
    return this._nodes[p];
  }, o.prototype.hasNode = function(p) {
    return i.has(this._nodes, p);
  }, o.prototype.removeNode = function(p) {
    var f = this;
    if (i.has(this._nodes, p)) {
      var m = function(g) {
        f.removeEdge(f._edgeObjs[g]);
      };
      delete this._nodes[p], this._isCompound && (this._removeFromParentsChildList(p), delete this._parent[p], i.each(this.children(p), function(g) {
        f.setParent(g);
      }), delete this._children[p]), i.each(i.keys(this._in[p]), m), delete this._in[p], delete this._preds[p], i.each(i.keys(this._out[p]), m), delete this._out[p], delete this._sucs[p], --this._nodeCount;
    }
    return this;
  }, o.prototype.setParent = function(p, f) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (i.isUndefined(f))
      f = r;
    else {
      f += "";
      for (var m = f; !i.isUndefined(m); m = this.parent(m))
        if (m === p)
          throw new Error("Setting " + f + " as parent of " + p + " would create a cycle");
      this.setNode(f);
    }
    return this.setNode(p), this._removeFromParentsChildList(p), this._parent[p] = f, this._children[f][p] = !0, this;
  }, o.prototype._removeFromParentsChildList = function(p) {
    delete this._children[this._parent[p]][p];
  }, o.prototype.parent = function(p) {
    if (this._isCompound) {
      var f = this._parent[p];
      if (f !== r)
        return f;
    }
  }, o.prototype.children = function(p) {
    if (i.isUndefined(p) && (p = r), this._isCompound) {
      var f = this._children[p];
      if (f)
        return i.keys(f);
    } else {
      if (p === r)
        return this.nodes();
      if (this.hasNode(p))
        return [];
    }
  }, o.prototype.predecessors = function(p) {
    var f = this._preds[p];
    if (f)
      return i.keys(f);
  }, o.prototype.successors = function(p) {
    var f = this._sucs[p];
    if (f)
      return i.keys(f);
  }, o.prototype.neighbors = function(p) {
    var f = this.predecessors(p);
    if (f)
      return i.union(f, this.successors(p));
  }, o.prototype.isLeaf = function(p) {
    var f;
    return this.isDirected() ? f = this.successors(p) : f = this.neighbors(p), f.length === 0;
  }, o.prototype.filterNodes = function(p) {
    var f = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    f.setGraph(this.graph());
    var m = this;
    i.each(this._nodes, function(s, u) {
      p(u) && f.setNode(u, s);
    }), i.each(this._edgeObjs, function(s) {
      f.hasNode(s.v) && f.hasNode(s.w) && f.setEdge(s, m.edge(s));
    });
    var g = {};
    function y(s) {
      var u = m.parent(s);
      return u === void 0 || f.hasNode(u) ? (g[s] = u, u) : u in g ? g[u] : y(u);
    }
    return this._isCompound && i.each(f.nodes(), function(s) {
      f.setParent(s, y(s));
    }), f;
  }, o.prototype.setDefaultEdgeLabel = function(p) {
    return i.isFunction(p) || (p = i.constant(p)), this._defaultEdgeLabelFn = p, this;
  }, o.prototype.edgeCount = function() {
    return this._edgeCount;
  }, o.prototype.edges = function() {
    return i.values(this._edgeObjs);
  }, o.prototype.setPath = function(p, f) {
    var m = this, g = arguments;
    return i.reduce(p, function(y, s) {
      return g.length > 1 ? m.setEdge(y, s, f) : m.setEdge(y, s), s;
    }), this;
  }, o.prototype.setEdge = function() {
    var p, f, m, g, y = !1, s = arguments[0];
    typeof s == "object" && s !== null && "v" in s ? (p = s.v, f = s.w, m = s.name, arguments.length === 2 && (g = arguments[1], y = !0)) : (p = s, f = arguments[1], m = arguments[3], arguments.length > 2 && (g = arguments[2], y = !0)), p = "" + p, f = "" + f, i.isUndefined(m) || (m = "" + m);
    var u = c(this._isDirected, p, f, m);
    if (i.has(this._edgeLabels, u))
      return y && (this._edgeLabels[u] = g), this;
    if (!i.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(p), this.setNode(f), this._edgeLabels[u] = y ? g : this._defaultEdgeLabelFn(p, f, m);
    var x = h(this._isDirected, p, f, m);
    return p = x.v, f = x.w, Object.freeze(x), this._edgeObjs[u] = x, a(this._preds[f], p), a(this._sucs[p], f), this._in[f][u] = x, this._out[p][u] = x, this._edgeCount++, this;
  }, o.prototype.edge = function(p, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : c(this._isDirected, p, f, m);
    return this._edgeLabels[g];
  }, o.prototype.hasEdge = function(p, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : c(this._isDirected, p, f, m);
    return i.has(this._edgeLabels, g);
  }, o.prototype.removeEdge = function(p, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : c(this._isDirected, p, f, m), y = this._edgeObjs[g];
    return y && (p = y.v, f = y.w, delete this._edgeLabels[g], delete this._edgeObjs[g], e(this._preds[f], p), e(this._sucs[p], f), delete this._in[f][g], delete this._out[p][g], this._edgeCount--), this;
  }, o.prototype.inEdges = function(p, f) {
    var m = this._in[p];
    if (m) {
      var g = i.values(m);
      return f ? i.filter(g, function(y) {
        return y.v === f;
      }) : g;
    }
  }, o.prototype.outEdges = function(p, f) {
    var m = this._out[p];
    if (m) {
      var g = i.values(m);
      return f ? i.filter(g, function(y) {
        return y.w === f;
      }) : g;
    }
  }, o.prototype.nodeEdges = function(p, f) {
    var m = this.inEdges(p, f);
    if (m)
      return m.concat(this.outEdges(p, f));
  };
  function a(p, f) {
    p[f] ? p[f]++ : p[f] = 1;
  }
  function e(p, f) {
    --p[f] || delete p[f];
  }
  function c(p, f, m, g) {
    var y = "" + f, s = "" + m;
    if (!p && y > s) {
      var u = y;
      y = s, s = u;
    }
    return y + n + s + n + (i.isUndefined(g) ? t : g);
  }
  function h(p, f, m, g) {
    var y = "" + f, s = "" + m;
    if (!p && y > s) {
      var u = y;
      y = s, s = u;
    }
    var x = { v: y, w: s };
    return g && (x.name = g), x;
  }
  function d(p, f) {
    return c(p, f.v, f.w, f.name);
  }
  return Ha;
}
var Va, Sp;
function km() {
  return Sp || (Sp = 1, Va = "2.1.8"), Va;
}
var Xa, kp;
function Cm() {
  return kp || (kp = 1, Xa = {
    Graph: Pc(),
    version: km()
  }), Xa;
}
var Ka, Cp;
function $m() {
  if (Cp) return Ka;
  Cp = 1;
  var i = et(), t = Pc();
  Ka = {
    write: r,
    read: a
  };
  function r(e) {
    var c = {
      options: {
        directed: e.isDirected(),
        multigraph: e.isMultigraph(),
        compound: e.isCompound()
      },
      nodes: n(e),
      edges: o(e)
    };
    return i.isUndefined(e.graph()) || (c.value = i.clone(e.graph())), c;
  }
  function n(e) {
    return i.map(e.nodes(), function(c) {
      var h = e.node(c), d = e.parent(c), p = { v: c };
      return i.isUndefined(h) || (p.value = h), i.isUndefined(d) || (p.parent = d), p;
    });
  }
  function o(e) {
    return i.map(e.edges(), function(c) {
      var h = e.edge(c), d = { v: c.v, w: c.w };
      return i.isUndefined(c.name) || (d.name = c.name), i.isUndefined(h) || (d.value = h), d;
    });
  }
  function a(e) {
    var c = new t(e.options).setGraph(e.value);
    return i.each(e.nodes, function(h) {
      c.setNode(h.v, h.value), h.parent && c.setParent(h.v, h.parent);
    }), i.each(e.edges, function(h) {
      c.setEdge({ v: h.v, w: h.w, name: h.name }, h.value);
    }), c;
  }
  return Ka;
}
var Qa, $p;
function Em() {
  if ($p) return Qa;
  $p = 1;
  var i = et();
  Qa = t;
  function t(r) {
    var n = {}, o = [], a;
    function e(c) {
      i.has(n, c) || (n[c] = !0, a.push(c), i.each(r.successors(c), e), i.each(r.predecessors(c), e));
    }
    return i.each(r.nodes(), function(c) {
      a = [], e(c), a.length && o.push(a);
    }), o;
  }
  return Qa;
}
var Za, Ep;
function Uf() {
  if (Ep) return Za;
  Ep = 1;
  var i = et();
  Za = t;
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
    return i.has(this._keyIndices, r);
  }, t.prototype.priority = function(r) {
    var n = this._keyIndices[r];
    if (n !== void 0)
      return this._arr[n].priority;
  }, t.prototype.min = function() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }, t.prototype.add = function(r, n) {
    var o = this._keyIndices;
    if (r = String(r), !i.has(o, r)) {
      var a = this._arr, e = a.length;
      return o[r] = e, a.push({ key: r, priority: n }), this._decrease(e), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var r = this._arr.pop();
    return delete this._keyIndices[r.key], this._heapify(0), r.key;
  }, t.prototype.decrease = function(r, n) {
    var o = this._keyIndices[r];
    if (n > this._arr[o].priority)
      throw new Error("New priority is greater than current priority. Key: " + r + " Old: " + this._arr[o].priority + " New: " + n);
    this._arr[o].priority = n, this._decrease(o);
  }, t.prototype._heapify = function(r) {
    var n = this._arr, o = 2 * r, a = o + 1, e = r;
    o < n.length && (e = n[o].priority < n[e].priority ? o : e, a < n.length && (e = n[a].priority < n[e].priority ? a : e), e !== r && (this._swap(r, e), this._heapify(e)));
  }, t.prototype._decrease = function(r) {
    for (var n = this._arr, o = n[r].priority, a; r !== 0 && (a = r >> 1, !(n[a].priority < o)); )
      this._swap(r, a), r = a;
  }, t.prototype._swap = function(r, n) {
    var o = this._arr, a = this._keyIndices, e = o[r], c = o[n];
    o[r] = c, o[n] = e, a[c.key] = r, a[e.key] = n;
  }, Za;
}
var Ja, Mp;
function jf() {
  if (Mp) return Ja;
  Mp = 1;
  var i = et(), t = Uf();
  Ja = n;
  var r = i.constant(1);
  function n(a, e, c, h) {
    return o(
      a,
      String(e),
      c || r,
      h || function(d) {
        return a.outEdges(d);
      }
    );
  }
  function o(a, e, c, h) {
    var d = {}, p = new t(), f, m, g = function(y) {
      var s = y.v !== f ? y.v : y.w, u = d[s], x = c(y), b = m.distance + x;
      if (x < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + y + " Weight: " + x);
      b < u.distance && (u.distance = b, u.predecessor = f, p.decrease(s, b));
    };
    for (a.nodes().forEach(function(y) {
      var s = y === e ? 0 : Number.POSITIVE_INFINITY;
      d[y] = { distance: s }, p.add(y, s);
    }); p.size() > 0 && (f = p.removeMin(), m = d[f], m.distance !== Number.POSITIVE_INFINITY); )
      h(f).forEach(g);
    return d;
  }
  return Ja;
}
var es, Rp;
function Mm() {
  if (Rp) return es;
  Rp = 1;
  var i = jf(), t = et();
  es = r;
  function r(n, o, a) {
    return t.transform(n.nodes(), function(e, c) {
      e[c] = i(n, c, o, a);
    }, {});
  }
  return es;
}
var ts, _p;
function Gf() {
  if (_p) return ts;
  _p = 1;
  var i = et();
  ts = t;
  function t(r) {
    var n = 0, o = [], a = {}, e = [];
    function c(h) {
      var d = a[h] = {
        onStack: !0,
        lowlink: n,
        index: n++
      };
      if (o.push(h), r.successors(h).forEach(function(m) {
        i.has(a, m) ? a[m].onStack && (d.lowlink = Math.min(d.lowlink, a[m].index)) : (c(m), d.lowlink = Math.min(d.lowlink, a[m].lowlink));
      }), d.lowlink === d.index) {
        var p = [], f;
        do
          f = o.pop(), a[f].onStack = !1, p.push(f);
        while (h !== f);
        e.push(p);
      }
    }
    return r.nodes().forEach(function(h) {
      i.has(a, h) || c(h);
    }), e;
  }
  return ts;
}
var rs, Ip;
function Rm() {
  if (Ip) return rs;
  Ip = 1;
  var i = et(), t = Gf();
  rs = r;
  function r(n) {
    return i.filter(t(n), function(o) {
      return o.length > 1 || o.length === 1 && n.hasEdge(o[0], o[0]);
    });
  }
  return rs;
}
var ns, Ap;
function _m() {
  if (Ap) return ns;
  Ap = 1;
  var i = et();
  ns = r;
  var t = i.constant(1);
  function r(o, a, e) {
    return n(
      o,
      a || t,
      e || function(c) {
        return o.outEdges(c);
      }
    );
  }
  function n(o, a, e) {
    var c = {}, h = o.nodes();
    return h.forEach(function(d) {
      c[d] = {}, c[d][d] = { distance: 0 }, h.forEach(function(p) {
        d !== p && (c[d][p] = { distance: Number.POSITIVE_INFINITY });
      }), e(d).forEach(function(p) {
        var f = p.v === d ? p.w : p.v, m = a(p);
        c[d][f] = { distance: m, predecessor: d };
      });
    }), h.forEach(function(d) {
      var p = c[d];
      h.forEach(function(f) {
        var m = c[f];
        h.forEach(function(g) {
          var y = m[d], s = p[g], u = m[g], x = y.distance + s.distance;
          x < u.distance && (u.distance = x, u.predecessor = s.predecessor);
        });
      });
    }), c;
  }
  return ns;
}
var is, Tp;
function Yf() {
  if (Tp) return is;
  Tp = 1;
  var i = et();
  is = t, t.CycleException = r;
  function t(n) {
    var o = {}, a = {}, e = [];
    function c(h) {
      if (i.has(a, h))
        throw new r();
      i.has(o, h) || (a[h] = !0, o[h] = !0, i.each(n.predecessors(h), c), delete a[h], e.push(h));
    }
    if (i.each(n.sinks(), c), i.size(o) !== n.nodeCount())
      throw new r();
    return e;
  }
  function r() {
  }
  return r.prototype = new Error(), is;
}
var os, Pp;
function Im() {
  if (Pp) return os;
  Pp = 1;
  var i = Yf();
  os = t;
  function t(r) {
    try {
      i(r);
    } catch (n) {
      if (n instanceof i.CycleException)
        return !1;
      throw n;
    }
    return !0;
  }
  return os;
}
var as, Dp;
function Hf() {
  if (Dp) return as;
  Dp = 1;
  var i = et();
  as = t;
  function t(n, o, a) {
    i.isArray(o) || (o = [o]);
    var e = (n.isDirected() ? n.successors : n.neighbors).bind(n), c = [], h = {};
    return i.each(o, function(d) {
      if (!n.hasNode(d))
        throw new Error("Graph does not have node: " + d);
      r(n, d, a === "post", h, e, c);
    }), c;
  }
  function r(n, o, a, e, c, h) {
    i.has(e, o) || (e[o] = !0, a || h.push(o), i.each(c(o), function(d) {
      r(n, d, a, e, c, h);
    }), a && h.push(o));
  }
  return as;
}
var ss, Lp;
function Am() {
  if (Lp) return ss;
  Lp = 1;
  var i = Hf();
  ss = t;
  function t(r, n) {
    return i(r, n, "post");
  }
  return ss;
}
var cs, zp;
function Tm() {
  if (zp) return cs;
  zp = 1;
  var i = Hf();
  cs = t;
  function t(r, n) {
    return i(r, n, "pre");
  }
  return cs;
}
var ls, Bp;
function Pm() {
  if (Bp) return ls;
  Bp = 1;
  var i = et(), t = Pc(), r = Uf();
  ls = n;
  function n(o, a) {
    var e = new t(), c = {}, h = new r(), d;
    function p(m) {
      var g = m.v === d ? m.w : m.v, y = h.priority(g);
      if (y !== void 0) {
        var s = a(m);
        s < y && (c[g] = d, h.decrease(g, s));
      }
    }
    if (o.nodeCount() === 0)
      return e;
    i.each(o.nodes(), function(m) {
      h.add(m, Number.POSITIVE_INFINITY), e.setNode(m);
    }), h.decrease(o.nodes()[0], 0);
    for (var f = !1; h.size() > 0; ) {
      if (d = h.removeMin(), i.has(c, d))
        e.setEdge(d, c[d]);
      else {
        if (f)
          throw new Error("Input graph is not connected: " + o);
        f = !0;
      }
      o.nodeEdges(d).forEach(p);
    }
    return e;
  }
  return ls;
}
var ds, Wp;
function Dm() {
  return Wp || (Wp = 1, ds = {
    components: Em(),
    dijkstra: jf(),
    dijkstraAll: Mm(),
    findCycles: Rm(),
    floydWarshall: _m(),
    isAcyclic: Im(),
    postorder: Am(),
    preorder: Tm(),
    prim: Pm(),
    tarjan: Gf(),
    topsort: Yf()
  }), ds;
}
var us, Np;
function Lm() {
  if (Np) return us;
  Np = 1;
  var i = Cm();
  return us = {
    Graph: i.Graph,
    json: $m(),
    alg: Dm(),
    version: i.version
  }, us;
}
var Ir;
if (typeof yc == "function")
  try {
    Ir = Lm();
  } catch {
  }
Ir || (Ir = window.graphlib);
var ot = Ir, ps, qp;
function zm() {
  if (qp) return ps;
  qp = 1;
  var i = bf(), t = 1, r = 4;
  function n(o) {
    return i(o, t | r);
  }
  return ps = n, ps;
}
var hs, Op;
function Jr() {
  if (Op) return hs;
  Op = 1;
  var i = Ft(), t = vt(), r = jr(), n = Je();
  function o(a, e, c) {
    if (!n(c))
      return !1;
    var h = typeof e;
    return (h == "number" ? t(c) && r(e, c.length) : h == "string" && e in c) ? i(c[e], a) : !1;
  }
  return hs = o, hs;
}
var fs, Fp;
function Bm() {
  if (Fp) return fs;
  Fp = 1;
  var i = Zr(), t = Ft(), r = Jr(), n = Bt(), o = Object.prototype, a = o.hasOwnProperty, e = i(function(c, h) {
    c = Object(c);
    var d = -1, p = h.length, f = p > 2 ? h[2] : void 0;
    for (f && r(h[0], h[1], f) && (p = 1); ++d < p; )
      for (var m = h[d], g = n(m), y = -1, s = g.length; ++y < s; ) {
        var u = g[y], x = c[u];
        (x === void 0 || t(x, o[u]) && !a.call(c, u)) && (c[u] = m[u]);
      }
    return c;
  });
  return fs = e, fs;
}
var gs, Up;
function Wm() {
  if (Up) return gs;
  Up = 1;
  var i = wt(), t = vt(), r = Tt();
  function n(o) {
    return function(a, e, c) {
      var h = Object(a);
      if (!t(a)) {
        var d = i(e, 3);
        a = r(a), e = function(f) {
          return d(h[f], f, h);
        };
      }
      var p = o(a, e, c);
      return p > -1 ? h[d ? a[p] : p] : void 0;
    };
  }
  return gs = n, gs;
}
var ms, jp;
function Nm() {
  if (jp) return ms;
  jp = 1;
  var i = /\s/;
  function t(r) {
    for (var n = r.length; n-- && i.test(r.charAt(n)); )
      ;
    return n;
  }
  return ms = t, ms;
}
var ys, Gp;
function qm() {
  if (Gp) return ys;
  Gp = 1;
  var i = Nm(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, i(n) + 1).replace(t, "");
  }
  return ys = r, ys;
}
var bs, Yp;
function Om() {
  if (Yp) return bs;
  Yp = 1;
  var i = qm(), t = Je(), r = Yt(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, e = /^0o[0-7]+$/i, c = parseInt;
  function h(d) {
    if (typeof d == "number")
      return d;
    if (r(d))
      return n;
    if (t(d)) {
      var p = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = t(p) ? p + "" : p;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = i(d);
    var f = a.test(d);
    return f || e.test(d) ? c(d.slice(2), f ? 2 : 8) : o.test(d) ? n : +d;
  }
  return bs = h, bs;
}
var xs, Hp;
function Vf() {
  if (Hp) return xs;
  Hp = 1;
  var i = Om(), t = 1 / 0, r = 17976931348623157e292;
  function n(o) {
    if (!o)
      return o === 0 ? o : 0;
    if (o = i(o), o === t || o === -t) {
      var a = o < 0 ? -1 : 1;
      return a * r;
    }
    return o === o ? o : 0;
  }
  return xs = n, xs;
}
var vs, Vp;
function Fm() {
  if (Vp) return vs;
  Vp = 1;
  var i = Vf();
  function t(r) {
    var n = i(r), o = n % 1;
    return n === n ? o ? n - o : n : 0;
  }
  return vs = t, vs;
}
var ws, Xp;
function Um() {
  if (Xp) return ws;
  Xp = 1;
  var i = qf(), t = wt(), r = Fm(), n = Math.max;
  function o(a, e, c) {
    var h = a == null ? 0 : a.length;
    if (!h)
      return -1;
    var d = c == null ? 0 : r(c);
    return d < 0 && (d = n(h + d, 0)), i(a, t(e, 3), d);
  }
  return ws = o, ws;
}
var Ss, Kp;
function jm() {
  if (Kp) return Ss;
  Kp = 1;
  var i = Wm(), t = Um(), r = i(t);
  return Ss = r, Ss;
}
var ks, Qp;
function Xf() {
  if (Qp) return ks;
  Qp = 1;
  var i = Tc();
  function t(r) {
    var n = r == null ? 0 : r.length;
    return n ? i(r, 1) : [];
  }
  return ks = t, ks;
}
var Cs, Zp;
function Gm() {
  if (Zp) return Cs;
  Zp = 1;
  var i = Rc(), t = xf(), r = Bt();
  function n(o, a) {
    return o == null ? o : i(o, t(a), r);
  }
  return Cs = n, Cs;
}
var $s, Jp;
function Ym() {
  if (Jp) return $s;
  Jp = 1;
  function i(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return $s = i, $s;
}
var Es, eh;
function Hm() {
  if (eh) return Es;
  eh = 1;
  var i = Fr(), t = _c(), r = wt();
  function n(o, a) {
    var e = {};
    return a = r(a, 3), t(o, function(c, h, d) {
      i(e, h, a(c, h, d));
    }), e;
  }
  return Es = n, Es;
}
var Ms, th;
function Dc() {
  if (th) return Ms;
  th = 1;
  var i = Yt();
  function t(r, n, o) {
    for (var a = -1, e = r.length; ++a < e; ) {
      var c = r[a], h = n(c);
      if (h != null && (d === void 0 ? h === h && !i(h) : o(h, d)))
        var d = h, p = c;
    }
    return p;
  }
  return Ms = t, Ms;
}
var Rs, rh;
function Vm() {
  if (rh) return Rs;
  rh = 1;
  function i(t, r) {
    return t > r;
  }
  return Rs = i, Rs;
}
var _s, nh;
function Xm() {
  if (nh) return _s;
  nh = 1;
  var i = Dc(), t = Vm(), r = Wt();
  function n(o) {
    return o && o.length ? i(o, r, t) : void 0;
  }
  return _s = n, _s;
}
var Is, ih;
function Kf() {
  if (ih) return Is;
  ih = 1;
  var i = Fr(), t = Ft();
  function r(n, o, a) {
    (a !== void 0 && !t(n[o], a) || a === void 0 && !(o in n)) && i(n, o, a);
  }
  return Is = r, Is;
}
var As, oh;
function Km() {
  if (oh) return As;
  oh = 1;
  var i = Lt(), t = Hr(), r = pt(), n = "[object Object]", o = Function.prototype, a = Object.prototype, e = o.toString, c = a.hasOwnProperty, h = e.call(Object);
  function d(p) {
    if (!r(p) || i(p) != n)
      return !1;
    var f = t(p);
    if (f === null)
      return !0;
    var m = c.call(f, "constructor") && f.constructor;
    return typeof m == "function" && m instanceof m && e.call(m) == h;
  }
  return As = d, As;
}
var Ts, ah;
function Qf() {
  if (ah) return Ts;
  ah = 1;
  function i(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return Ts = i, Ts;
}
var Ps, sh;
function Qm() {
  if (sh) return Ps;
  sh = 1;
  var i = nr(), t = Bt();
  function r(n) {
    return i(n, t(n));
  }
  return Ps = r, Ps;
}
var Ds, ch;
function Zm() {
  if (ch) return Ds;
  ch = 1;
  var i = Kf(), t = af(), r = gf(), n = sf(), o = yf(), a = ir(), e = Ae(), c = Of(), h = jt(), d = rr(), p = Je(), f = Km(), m = or(), g = Qf(), y = Qm();
  function s(u, x, b, k, w, C, $) {
    var E = g(u, b), M = g(x, b), _ = $.get(M);
    if (_) {
      i(u, b, _);
      return;
    }
    var P = C ? C(E, M, b + "", u, x, $) : void 0, A = P === void 0;
    if (A) {
      var W = e(M), B = !W && h(M), L = !W && !B && m(M);
      P = M, W || B || L ? e(E) ? P = E : c(E) ? P = n(E) : B ? (A = !1, P = t(M, !0)) : L ? (A = !1, P = r(M, !0)) : P = [] : f(M) || a(M) ? (P = E, a(E) ? P = y(E) : (!p(E) || d(E)) && (P = o(M))) : A = !1;
    }
    A && ($.set(M, P), w(P, M, k, C, $), $.delete(M)), i(u, b, P);
  }
  return Ds = s, Ds;
}
var Ls, lh;
function Jm() {
  if (lh) return Ls;
  lh = 1;
  var i = Or(), t = Kf(), r = Rc(), n = Zm(), o = Je(), a = Bt(), e = Qf();
  function c(h, d, p, f, m) {
    h !== d && r(d, function(g, y) {
      if (m || (m = new i()), o(g))
        n(h, d, y, p, c, f, m);
      else {
        var s = f ? f(e(h, y), g, y + "", h, d, m) : void 0;
        s === void 0 && (s = g), t(h, y, s);
      }
    }, a);
  }
  return Ls = c, Ls;
}
var zs, dh;
function ey() {
  if (dh) return zs;
  dh = 1;
  var i = Zr(), t = Jr();
  function r(n) {
    return i(function(o, a) {
      var e = -1, c = a.length, h = c > 1 ? a[c - 1] : void 0, d = c > 2 ? a[2] : void 0;
      for (h = n.length > 3 && typeof h == "function" ? (c--, h) : void 0, d && t(a[0], a[1], d) && (h = c < 3 ? void 0 : h, c = 1), o = Object(o); ++e < c; ) {
        var p = a[e];
        p && n(o, p, e, h);
      }
      return o;
    });
  }
  return zs = r, zs;
}
var Bs, uh;
function ty() {
  if (uh) return Bs;
  uh = 1;
  var i = Jm(), t = ey(), r = t(function(n, o, a) {
    i(n, o, a);
  });
  return Bs = r, Bs;
}
var Ws, ph;
function Zf() {
  if (ph) return Ws;
  ph = 1;
  function i(t, r) {
    return t < r;
  }
  return Ws = i, Ws;
}
var Ns, hh;
function ry() {
  if (hh) return Ns;
  hh = 1;
  var i = Dc(), t = Zf(), r = Wt();
  function n(o) {
    return o && o.length ? i(o, r, t) : void 0;
  }
  return Ns = n, Ns;
}
var qs, fh;
function ny() {
  if (fh) return qs;
  fh = 1;
  var i = Dc(), t = wt(), r = Zf();
  function n(o, a) {
    return o && o.length ? i(o, t(a, 2), r) : void 0;
  }
  return qs = n, qs;
}
var Os, gh;
function iy() {
  if (gh) return Os;
  gh = 1;
  var i = it(), t = function() {
    return i.Date.now();
  };
  return Os = t, Os;
}
var Fs, mh;
function oy() {
  if (mh) return Fs;
  mh = 1;
  var i = Ur(), t = Kr(), r = jr(), n = Je(), o = ar();
  function a(e, c, h, d) {
    if (!n(e))
      return e;
    c = t(c, e);
    for (var p = -1, f = c.length, m = f - 1, g = e; g != null && ++p < f; ) {
      var y = o(c[p]), s = h;
      if (y === "__proto__" || y === "constructor" || y === "prototype")
        return e;
      if (p != m) {
        var u = g[y];
        s = d ? d(u, y, g) : void 0, s === void 0 && (s = n(u) ? u : r(c[p + 1]) ? [] : {});
      }
      i(g, y, s), g = g[y];
    }
    return e;
  }
  return Fs = a, Fs;
}
var Us, yh;
function ay() {
  if (yh) return Us;
  yh = 1;
  var i = Qr(), t = oy(), r = Kr();
  function n(o, a, e) {
    for (var c = -1, h = a.length, d = {}; ++c < h; ) {
      var p = a[c], f = i(o, p);
      e(f, p) && t(d, r(p, o), f);
    }
    return d;
  }
  return Us = n, Us;
}
var js, bh;
function sy() {
  if (bh) return js;
  bh = 1;
  var i = ay(), t = If();
  function r(n, o) {
    return i(n, o, function(a, e) {
      return t(n, e);
    });
  }
  return js = r, js;
}
var Gs, xh;
function cy() {
  if (xh) return Gs;
  xh = 1;
  var i = Xf(), t = Wf(), r = Nf();
  function n(o) {
    return r(t(o, void 0, i), o + "");
  }
  return Gs = n, Gs;
}
var Ys, vh;
function ly() {
  if (vh) return Ys;
  vh = 1;
  var i = sy(), t = cy(), r = t(function(n, o) {
    return n == null ? {} : i(n, o);
  });
  return Ys = r, Ys;
}
var Hs, wh;
function dy() {
  if (wh) return Hs;
  wh = 1;
  var i = Math.ceil, t = Math.max;
  function r(n, o, a, e) {
    for (var c = -1, h = t(i((o - n) / (a || 1)), 0), d = Array(h); h--; )
      d[e ? h : ++c] = n, n += a;
    return d;
  }
  return Hs = r, Hs;
}
var Vs, Sh;
function uy() {
  if (Sh) return Vs;
  Sh = 1;
  var i = dy(), t = Jr(), r = Vf();
  function n(o) {
    return function(a, e, c) {
      return c && typeof c != "number" && t(a, e, c) && (e = c = void 0), a = r(a), e === void 0 ? (e = a, a = 0) : e = r(e), c = c === void 0 ? a < e ? 1 : -1 : r(c), i(a, e, c, o);
    };
  }
  return Vs = n, Vs;
}
var Xs, kh;
function py() {
  if (kh) return Xs;
  kh = 1;
  var i = uy(), t = i();
  return Xs = t, Xs;
}
var Ks, Ch;
function hy() {
  if (Ch) return Ks;
  Ch = 1;
  function i(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Ks = i, Ks;
}
var Qs, $h;
function fy() {
  if ($h) return Qs;
  $h = 1;
  var i = Yt();
  function t(r, n) {
    if (r !== n) {
      var o = r !== void 0, a = r === null, e = r === r, c = i(r), h = n !== void 0, d = n === null, p = n === n, f = i(n);
      if (!d && !f && !c && r > n || c && h && p && !d && !f || a && h && p || !o && p || !e)
        return 1;
      if (!a && !c && !f && r < n || f && o && e && !a && !c || d && o && e || !h && e || !p)
        return -1;
    }
    return 0;
  }
  return Qs = t, Qs;
}
var Zs, Eh;
function gy() {
  if (Eh) return Zs;
  Eh = 1;
  var i = fy();
  function t(r, n, o) {
    for (var a = -1, e = r.criteria, c = n.criteria, h = e.length, d = o.length; ++a < h; ) {
      var p = i(e[a], c[a]);
      if (p) {
        if (a >= d)
          return p;
        var f = o[a];
        return p * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Zs = t, Zs;
}
var Js, Mh;
function my() {
  if (Mh) return Js;
  Mh = 1;
  var i = Xr(), t = Qr(), r = wt(), n = Lf(), o = hy(), a = Gr(), e = gy(), c = Wt(), h = Ae();
  function d(p, f, m) {
    f.length ? f = i(f, function(s) {
      return h(s) ? function(u) {
        return t(u, s.length === 1 ? s[0] : s);
      } : s;
    }) : f = [c];
    var g = -1;
    f = i(f, a(r));
    var y = n(p, function(s, u, x) {
      var b = i(f, function(k) {
        return k(s);
      });
      return { criteria: b, index: ++g, value: s };
    });
    return o(y, function(s, u) {
      return e(s, u, m);
    });
  }
  return Js = d, Js;
}
var ec, Rh;
function yy() {
  if (Rh) return ec;
  Rh = 1;
  var i = Tc(), t = my(), r = Zr(), n = Jr(), o = r(function(a, e) {
    if (a == null)
      return [];
    var c = e.length;
    return c > 1 && n(a, e[0], e[1]) ? e = [] : c > 2 && n(e[0], e[1], e[2]) && (e = [e[0]]), t(a, i(e, 1), []);
  });
  return ec = o, ec;
}
var tc, _h;
function by() {
  if (_h) return tc;
  _h = 1;
  var i = Rf(), t = 0;
  function r(n) {
    var o = ++t;
    return i(n) + o;
  }
  return tc = r, tc;
}
var rc, Ih;
function xy() {
  if (Ih) return rc;
  Ih = 1;
  function i(t, r, n) {
    for (var o = -1, a = t.length, e = r.length, c = {}; ++o < a; ) {
      var h = o < e ? r[o] : void 0;
      n(c, t[o], h);
    }
    return c;
  }
  return rc = i, rc;
}
var nc, Ah;
function vy() {
  if (Ah) return nc;
  Ah = 1;
  var i = Ur(), t = xy();
  function r(n, o) {
    return t(n || [], o || [], i);
  }
  return nc = r, nc;
}
var Ar;
if (typeof yc == "function")
  try {
    Ar = {
      cloneDeep: zm(),
      constant: Mc(),
      defaults: Bm(),
      each: wf(),
      filter: Tf(),
      find: jm(),
      flatten: Xf(),
      forEach: vf(),
      forIn: Gm(),
      has: Pf(),
      isUndefined: Df(),
      last: Ym(),
      map: zf(),
      mapValues: Hm(),
      max: Xm(),
      merge: ty(),
      min: ry(),
      minBy: ny(),
      now: iy(),
      pick: ly(),
      range: py(),
      reduce: Bf(),
      sortBy: yy(),
      uniqueId: by(),
      values: Ff(),
      zipObject: vy()
    };
  } catch {
  }
Ar || (Ar = window._);
var Ee = Ar, wy = en;
function en() {
  var i = {};
  i._next = i._prev = i, this._sentinel = i;
}
en.prototype.dequeue = function() {
  var i = this._sentinel, t = i._prev;
  if (t !== i)
    return Jf(t), t;
};
en.prototype.enqueue = function(i) {
  var t = this._sentinel;
  i._prev && i._next && Jf(i), i._next = t._next, t._next._prev = i, t._next = i, i._prev = t;
};
en.prototype.toString = function() {
  for (var i = [], t = this._sentinel, r = t._prev; r !== t; )
    i.push(JSON.stringify(r, Sy)), r = r._prev;
  return "[" + i.join(", ") + "]";
};
function Jf(i) {
  i._prev._next = i._next, i._next._prev = i._prev, delete i._next, delete i._prev;
}
function Sy(i, t) {
  if (i !== "_next" && i !== "_prev")
    return t;
}
var yt = Ee, ky = ot.Graph, Cy = wy, $y = My, Ey = yt.constant(1);
function My(i, t) {
  if (i.nodeCount() <= 1)
    return [];
  var r = _y(i, t || Ey), n = Ry(r.graph, r.buckets, r.zeroIdx);
  return yt.flatten(yt.map(n, function(o) {
    return i.outEdges(o.v, o.w);
  }), !0);
}
function Ry(i, t, r) {
  for (var n = [], o = t[t.length - 1], a = t[0], e; i.nodeCount(); ) {
    for (; e = a.dequeue(); )
      ic(i, t, r, e);
    for (; e = o.dequeue(); )
      ic(i, t, r, e);
    if (i.nodeCount()) {
      for (var c = t.length - 2; c > 0; --c)
        if (e = t[c].dequeue(), e) {
          n = n.concat(ic(i, t, r, e, !0));
          break;
        }
    }
  }
  return n;
}
function ic(i, t, r, n, o) {
  var a = o ? [] : void 0;
  return yt.forEach(i.inEdges(n.v), function(e) {
    var c = i.edge(e), h = i.node(e.v);
    o && a.push({ v: e.v, w: e.w }), h.out -= c, hc(t, r, h);
  }), yt.forEach(i.outEdges(n.v), function(e) {
    var c = i.edge(e), h = e.w, d = i.node(h);
    d.in -= c, hc(t, r, d);
  }), i.removeNode(n.v), a;
}
function _y(i, t) {
  var r = new ky(), n = 0, o = 0;
  yt.forEach(i.nodes(), function(c) {
    r.setNode(c, { v: c, in: 0, out: 0 });
  }), yt.forEach(i.edges(), function(c) {
    var h = r.edge(c.v, c.w) || 0, d = t(c), p = h + d;
    r.setEdge(c.v, c.w, p), o = Math.max(o, r.node(c.v).out += d), n = Math.max(n, r.node(c.w).in += d);
  });
  var a = yt.range(o + n + 3).map(function() {
    return new Cy();
  }), e = n + 1;
  return yt.forEach(r.nodes(), function(c) {
    hc(a, e, r.node(c));
  }), { graph: r, buckets: a, zeroIdx: e };
}
function hc(i, t, r) {
  r.out ? r.in ? i[r.out - r.in + t].enqueue(r) : i[i.length - 1].enqueue(r) : i[0].enqueue(r);
}
var Dt = Ee, Iy = $y, Ay = {
  run: Ty,
  undo: Dy
};
function Ty(i) {
  var t = i.graph().acyclicer === "greedy" ? Iy(i, r(i)) : Py(i);
  Dt.forEach(t, function(n) {
    var o = i.edge(n);
    i.removeEdge(n), o.forwardName = n.name, o.reversed = !0, i.setEdge(n.w, n.v, o, Dt.uniqueId("rev"));
  });
  function r(n) {
    return function(o) {
      return n.edge(o).weight;
    };
  }
}
function Py(i) {
  var t = [], r = {}, n = {};
  function o(a) {
    Dt.has(n, a) || (n[a] = !0, r[a] = !0, Dt.forEach(i.outEdges(a), function(e) {
      Dt.has(r, e.w) ? t.push(e) : o(e.w);
    }), delete r[a]);
  }
  return Dt.forEach(i.nodes(), o), t;
}
function Dy(i) {
  Dt.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    if (r.reversed) {
      i.removeEdge(t);
      var n = r.forwardName;
      delete r.reversed, delete r.forwardName, i.setEdge(t.w, t.v, r, n);
    }
  });
}
var be = Ee, eg = ot.Graph, Ve = {
  addDummyNode: tg,
  simplify: Ly,
  asNonCompoundGraph: zy,
  successorWeights: By,
  predecessorWeights: Wy,
  intersectRect: Ny,
  buildLayerMatrix: qy,
  normalizeRanks: Oy,
  removeEmptyRanks: Fy,
  addBorderNode: Uy,
  maxRank: rg,
  partition: jy,
  time: Gy,
  notime: Yy
};
function tg(i, t, r, n) {
  var o;
  do
    o = be.uniqueId(n);
  while (i.hasNode(o));
  return r.dummy = t, i.setNode(o, r), o;
}
function Ly(i) {
  var t = new eg().setGraph(i.graph());
  return be.forEach(i.nodes(), function(r) {
    t.setNode(r, i.node(r));
  }), be.forEach(i.edges(), function(r) {
    var n = t.edge(r.v, r.w) || { weight: 0, minlen: 1 }, o = i.edge(r);
    t.setEdge(r.v, r.w, {
      weight: n.weight + o.weight,
      minlen: Math.max(n.minlen, o.minlen)
    });
  }), t;
}
function zy(i) {
  var t = new eg({ multigraph: i.isMultigraph() }).setGraph(i.graph());
  return be.forEach(i.nodes(), function(r) {
    i.children(r).length || t.setNode(r, i.node(r));
  }), be.forEach(i.edges(), function(r) {
    t.setEdge(r, i.edge(r));
  }), t;
}
function By(i) {
  var t = be.map(i.nodes(), function(r) {
    var n = {};
    return be.forEach(i.outEdges(r), function(o) {
      n[o.w] = (n[o.w] || 0) + i.edge(o).weight;
    }), n;
  });
  return be.zipObject(i.nodes(), t);
}
function Wy(i) {
  var t = be.map(i.nodes(), function(r) {
    var n = {};
    return be.forEach(i.inEdges(r), function(o) {
      n[o.v] = (n[o.v] || 0) + i.edge(o).weight;
    }), n;
  });
  return be.zipObject(i.nodes(), t);
}
function Ny(i, t) {
  var r = i.x, n = i.y, o = t.x - r, a = t.y - n, e = i.width / 2, c = i.height / 2;
  if (!o && !a)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var h, d;
  return Math.abs(a) * e > Math.abs(o) * c ? (a < 0 && (c = -c), h = c * o / a, d = c) : (o < 0 && (e = -e), h = e, d = e * a / o), { x: r + h, y: n + d };
}
function qy(i) {
  var t = be.map(be.range(rg(i) + 1), function() {
    return [];
  });
  return be.forEach(i.nodes(), function(r) {
    var n = i.node(r), o = n.rank;
    be.isUndefined(o) || (t[o][n.order] = r);
  }), t;
}
function Oy(i) {
  var t = be.min(be.map(i.nodes(), function(r) {
    return i.node(r).rank;
  }));
  be.forEach(i.nodes(), function(r) {
    var n = i.node(r);
    be.has(n, "rank") && (n.rank -= t);
  });
}
function Fy(i) {
  var t = be.min(be.map(i.nodes(), function(a) {
    return i.node(a).rank;
  })), r = [];
  be.forEach(i.nodes(), function(a) {
    var e = i.node(a).rank - t;
    r[e] || (r[e] = []), r[e].push(a);
  });
  var n = 0, o = i.graph().nodeRankFactor;
  be.forEach(r, function(a, e) {
    be.isUndefined(a) && e % o !== 0 ? --n : n && be.forEach(a, function(c) {
      i.node(c).rank += n;
    });
  });
}
function Uy(i, t, r, n) {
  var o = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (o.rank = r, o.order = n), tg(i, "border", o, t);
}
function rg(i) {
  return be.max(be.map(i.nodes(), function(t) {
    var r = i.node(t).rank;
    if (!be.isUndefined(r))
      return r;
  }));
}
function jy(i, t) {
  var r = { lhs: [], rhs: [] };
  return be.forEach(i, function(n) {
    t(n) ? r.lhs.push(n) : r.rhs.push(n);
  }), r;
}
function Gy(i, t) {
  var r = be.now();
  try {
    return t();
  } finally {
    console.log(i + " time: " + (be.now() - r) + "ms");
  }
}
function Yy(i, t) {
  return t();
}
var ng = Ee, Hy = Ve, Vy = {
  run: Xy,
  undo: Qy
};
function Xy(i) {
  i.graph().dummyChains = [], ng.forEach(i.edges(), function(t) {
    Ky(i, t);
  });
}
function Ky(i, t) {
  var r = t.v, n = i.node(r).rank, o = t.w, a = i.node(o).rank, e = t.name, c = i.edge(t), h = c.labelRank;
  if (a !== n + 1) {
    i.removeEdge(t);
    var d, p, f;
    for (f = 0, ++n; n < a; ++f, ++n)
      c.points = [], p = {
        width: 0,
        height: 0,
        edgeLabel: c,
        edgeObj: t,
        rank: n
      }, d = Hy.addDummyNode(i, "edge", p, "_d"), n === h && (p.width = c.width, p.height = c.height, p.dummy = "edge-label", p.labelpos = c.labelpos), i.setEdge(r, d, { weight: c.weight }, e), f === 0 && i.graph().dummyChains.push(d), r = d;
    i.setEdge(r, o, { weight: c.weight }, e);
  }
}
function Qy(i) {
  ng.forEach(i.graph().dummyChains, function(t) {
    var r = i.node(t), n = r.edgeLabel, o;
    for (i.setEdge(r.edgeObj, n); r.dummy; )
      o = i.successors(t)[0], i.removeNode(t), n.points.push({ x: r.x, y: r.y }), r.dummy === "edge-label" && (n.x = r.x, n.y = r.y, n.width = r.width, n.height = r.height), t = o, r = i.node(t);
  });
}
var Mr = Ee, tn = {
  longestPath: Zy,
  slack: Jy
};
function Zy(i) {
  var t = {};
  function r(n) {
    var o = i.node(n);
    if (Mr.has(t, n))
      return o.rank;
    t[n] = !0;
    var a = Mr.min(Mr.map(i.outEdges(n), function(e) {
      return r(e.w) - i.edge(e).minlen;
    }));
    return (a === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    a === void 0 || // return value of _.map([]) for Lodash 4
    a === null) && (a = 0), o.rank = a;
  }
  Mr.forEach(i.sources(), r);
}
function Jy(i, t) {
  return i.node(t.w).rank - i.node(t.v).rank - i.edge(t).minlen;
}
var Tr = Ee, eb = ot.Graph, Pr = tn.slack, ig = tb;
function tb(i) {
  var t = new eb({ directed: !1 }), r = i.nodes()[0], n = i.nodeCount();
  t.setNode(r, {});
  for (var o, a; rb(t, i) < n; )
    o = nb(t, i), a = t.hasNode(o.v) ? Pr(i, o) : -Pr(i, o), ib(t, i, a);
  return t;
}
function rb(i, t) {
  function r(n) {
    Tr.forEach(t.nodeEdges(n), function(o) {
      var a = o.v, e = n === a ? o.w : a;
      !i.hasNode(e) && !Pr(t, o) && (i.setNode(e, {}), i.setEdge(n, e, {}), r(e));
    });
  }
  return Tr.forEach(i.nodes(), r), i.nodeCount();
}
function nb(i, t) {
  return Tr.minBy(t.edges(), function(r) {
    if (i.hasNode(r.v) !== i.hasNode(r.w))
      return Pr(t, r);
  });
}
function ib(i, t, r) {
  Tr.forEach(i.nodes(), function(n) {
    t.node(n).rank += r;
  });
}
var xt = Ee, ob = ig, ab = tn.slack, sb = tn.longestPath, cb = ot.alg.preorder, lb = ot.alg.postorder, db = Ve.simplify, ub = Nt;
Nt.initLowLimValues = zc;
Nt.initCutValues = Lc;
Nt.calcCutValue = og;
Nt.leaveEdge = sg;
Nt.enterEdge = cg;
Nt.exchangeEdges = lg;
function Nt(i) {
  i = db(i), sb(i);
  var t = ob(i);
  zc(t), Lc(t, i);
  for (var r, n; r = sg(t); )
    n = cg(t, i, r), lg(t, i, r, n);
}
function Lc(i, t) {
  var r = lb(i, i.nodes());
  r = r.slice(0, r.length - 1), xt.forEach(r, function(n) {
    pb(i, t, n);
  });
}
function pb(i, t, r) {
  var n = i.node(r), o = n.parent;
  i.edge(r, o).cutvalue = og(i, t, r);
}
function og(i, t, r) {
  var n = i.node(r), o = n.parent, a = !0, e = t.edge(r, o), c = 0;
  return e || (a = !1, e = t.edge(o, r)), c = e.weight, xt.forEach(t.nodeEdges(r), function(h) {
    var d = h.v === r, p = d ? h.w : h.v;
    if (p !== o) {
      var f = d === a, m = t.edge(h).weight;
      if (c += f ? m : -m, fb(i, r, p)) {
        var g = i.edge(r, p).cutvalue;
        c += f ? -g : g;
      }
    }
  }), c;
}
function zc(i, t) {
  arguments.length < 2 && (t = i.nodes()[0]), ag(i, {}, 1, t);
}
function ag(i, t, r, n, o) {
  var a = r, e = i.node(n);
  return t[n] = !0, xt.forEach(i.neighbors(n), function(c) {
    xt.has(t, c) || (r = ag(i, t, r, c, n));
  }), e.low = a, e.lim = r++, o ? e.parent = o : delete e.parent, r;
}
function sg(i) {
  return xt.find(i.edges(), function(t) {
    return i.edge(t).cutvalue < 0;
  });
}
function cg(i, t, r) {
  var n = r.v, o = r.w;
  t.hasEdge(n, o) || (n = r.w, o = r.v);
  var a = i.node(n), e = i.node(o), c = a, h = !1;
  a.lim > e.lim && (c = e, h = !0);
  var d = xt.filter(t.edges(), function(p) {
    return h === Th(i, i.node(p.v), c) && h !== Th(i, i.node(p.w), c);
  });
  return xt.minBy(d, function(p) {
    return ab(t, p);
  });
}
function lg(i, t, r, n) {
  var o = r.v, a = r.w;
  i.removeEdge(o, a), i.setEdge(n.v, n.w, {}), zc(i), Lc(i, t), hb(i, t);
}
function hb(i, t) {
  var r = xt.find(i.nodes(), function(o) {
    return !t.node(o).parent;
  }), n = cb(i, r);
  n = n.slice(1), xt.forEach(n, function(o) {
    var a = i.node(o).parent, e = t.edge(o, a), c = !1;
    e || (e = t.edge(a, o), c = !0), t.node(o).rank = t.node(a).rank + (c ? e.minlen : -e.minlen);
  });
}
function fb(i, t, r) {
  return i.hasEdge(t, r);
}
function Th(i, t, r) {
  return r.low <= t.lim && t.lim <= r.lim;
}
var gb = tn, dg = gb.longestPath, mb = ig, yb = ub, bb = xb;
function xb(i) {
  switch (i.graph().ranker) {
    case "network-simplex":
      Ph(i);
      break;
    case "tight-tree":
      wb(i);
      break;
    case "longest-path":
      vb(i);
      break;
    default:
      Ph(i);
  }
}
var vb = dg;
function wb(i) {
  dg(i), mb(i);
}
function Ph(i) {
  yb(i);
}
var fc = Ee, Sb = kb;
function kb(i) {
  var t = $b(i);
  fc.forEach(i.graph().dummyChains, function(r) {
    for (var n = i.node(r), o = n.edgeObj, a = Cb(i, t, o.v, o.w), e = a.path, c = a.lca, h = 0, d = e[h], p = !0; r !== o.w; ) {
      if (n = i.node(r), p) {
        for (; (d = e[h]) !== c && i.node(d).maxRank < n.rank; )
          h++;
        d === c && (p = !1);
      }
      if (!p) {
        for (; h < e.length - 1 && i.node(d = e[h + 1]).minRank <= n.rank; )
          h++;
        d = e[h];
      }
      i.setParent(r, d), r = i.successors(r)[0];
    }
  });
}
function Cb(i, t, r, n) {
  var o = [], a = [], e = Math.min(t[r].low, t[n].low), c = Math.max(t[r].lim, t[n].lim), h, d;
  h = r;
  do
    h = i.parent(h), o.push(h);
  while (h && (t[h].low > e || c > t[h].lim));
  for (d = h, h = n; (h = i.parent(h)) !== d; )
    a.push(h);
  return { path: o.concat(a.reverse()), lca: d };
}
function $b(i) {
  var t = {}, r = 0;
  function n(o) {
    var a = r;
    fc.forEach(i.children(o), n), t[o] = { low: a, lim: r++ };
  }
  return fc.forEach(i.children(), n), t;
}
var bt = Ee, gc = Ve, Eb = {
  run: Mb,
  cleanup: Ib
};
function Mb(i) {
  var t = gc.addDummyNode(i, "root", {}, "_root"), r = Rb(i), n = bt.max(bt.values(r)) - 1, o = 2 * n + 1;
  i.graph().nestingRoot = t, bt.forEach(i.edges(), function(e) {
    i.edge(e).minlen *= o;
  });
  var a = _b(i) + 1;
  bt.forEach(i.children(), function(e) {
    ug(i, t, o, a, n, r, e);
  }), i.graph().nodeRankFactor = o;
}
function ug(i, t, r, n, o, a, e) {
  var c = i.children(e);
  if (!c.length) {
    e !== t && i.setEdge(t, e, { weight: 0, minlen: r });
    return;
  }
  var h = gc.addBorderNode(i, "_bt"), d = gc.addBorderNode(i, "_bb"), p = i.node(e);
  i.setParent(h, e), p.borderTop = h, i.setParent(d, e), p.borderBottom = d, bt.forEach(c, function(f) {
    ug(i, t, r, n, o, a, f);
    var m = i.node(f), g = m.borderTop ? m.borderTop : f, y = m.borderBottom ? m.borderBottom : f, s = m.borderTop ? n : 2 * n, u = g !== y ? 1 : o - a[e] + 1;
    i.setEdge(h, g, {
      weight: s,
      minlen: u,
      nestingEdge: !0
    }), i.setEdge(y, d, {
      weight: s,
      minlen: u,
      nestingEdge: !0
    });
  }), i.parent(e) || i.setEdge(t, h, { weight: 0, minlen: o + a[e] });
}
function Rb(i) {
  var t = {};
  function r(n, o) {
    var a = i.children(n);
    a && a.length && bt.forEach(a, function(e) {
      r(e, o + 1);
    }), t[n] = o;
  }
  return bt.forEach(i.children(), function(n) {
    r(n, 1);
  }), t;
}
function _b(i) {
  return bt.reduce(i.edges(), function(t, r) {
    return t + i.edge(r).weight;
  }, 0);
}
function Ib(i) {
  var t = i.graph();
  i.removeNode(t.nestingRoot), delete t.nestingRoot, bt.forEach(i.edges(), function(r) {
    var n = i.edge(r);
    n.nestingEdge && i.removeEdge(r);
  });
}
var oc = Ee, Ab = Ve, Tb = Pb;
function Pb(i) {
  function t(r) {
    var n = i.children(r), o = i.node(r);
    if (n.length && oc.forEach(n, t), oc.has(o, "minRank")) {
      o.borderLeft = [], o.borderRight = [];
      for (var a = o.minRank, e = o.maxRank + 1; a < e; ++a)
        Dh(i, "borderLeft", "_bl", r, o, a), Dh(i, "borderRight", "_br", r, o, a);
    }
  }
  oc.forEach(i.children(), t);
}
function Dh(i, t, r, n, o, a) {
  var e = { width: 0, height: 0, rank: a, borderType: t }, c = o[t][a - 1], h = Ab.addDummyNode(i, "border", e, r);
  o[t][a] = h, i.setParent(h, n), c && i.setEdge(c, h, { weight: 1 });
}
var dt = Ee, Db = {
  adjust: Lb,
  undo: zb
};
function Lb(i) {
  var t = i.graph().rankdir.toLowerCase();
  (t === "lr" || t === "rl") && pg(i);
}
function zb(i) {
  var t = i.graph().rankdir.toLowerCase();
  (t === "bt" || t === "rl") && Bb(i), (t === "lr" || t === "rl") && (Wb(i), pg(i));
}
function pg(i) {
  dt.forEach(i.nodes(), function(t) {
    Lh(i.node(t));
  }), dt.forEach(i.edges(), function(t) {
    Lh(i.edge(t));
  });
}
function Lh(i) {
  var t = i.width;
  i.width = i.height, i.height = t;
}
function Bb(i) {
  dt.forEach(i.nodes(), function(t) {
    ac(i.node(t));
  }), dt.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    dt.forEach(r.points, ac), dt.has(r, "y") && ac(r);
  });
}
function ac(i) {
  i.y = -i.y;
}
function Wb(i) {
  dt.forEach(i.nodes(), function(t) {
    sc(i.node(t));
  }), dt.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    dt.forEach(r.points, sc), dt.has(r, "x") && sc(r);
  });
}
function sc(i) {
  var t = i.x;
  i.x = i.y, i.y = t;
}
var gt = Ee, Nb = qb;
function qb(i) {
  var t = {}, r = gt.filter(i.nodes(), function(c) {
    return !i.children(c).length;
  }), n = gt.max(gt.map(r, function(c) {
    return i.node(c).rank;
  })), o = gt.map(gt.range(n + 1), function() {
    return [];
  });
  function a(c) {
    if (!gt.has(t, c)) {
      t[c] = !0;
      var h = i.node(c);
      o[h.rank].push(c), gt.forEach(i.successors(c), a);
    }
  }
  var e = gt.sortBy(r, function(c) {
    return i.node(c).rank;
  });
  return gt.forEach(e, a), o;
}
var Et = Ee, Ob = Fb;
function Fb(i, t) {
  for (var r = 0, n = 1; n < t.length; ++n)
    r += Ub(i, t[n - 1], t[n]);
  return r;
}
function Ub(i, t, r) {
  for (var n = Et.zipObject(
    r,
    Et.map(r, function(d, p) {
      return p;
    })
  ), o = Et.flatten(Et.map(t, function(d) {
    return Et.sortBy(Et.map(i.outEdges(d), function(p) {
      return { pos: n[p.w], weight: i.edge(p).weight };
    }), "pos");
  }), !0), a = 1; a < r.length; ) a <<= 1;
  var e = 2 * a - 1;
  a -= 1;
  var c = Et.map(new Array(e), function() {
    return 0;
  }), h = 0;
  return Et.forEach(o.forEach(function(d) {
    var p = d.pos + a;
    c[p] += d.weight;
    for (var f = 0; p > 0; )
      p % 2 && (f += c[p + 1]), p = p - 1 >> 1, c[p] += d.weight;
    h += d.weight * f;
  })), h;
}
var zh = Ee, jb = Gb;
function Gb(i, t) {
  return zh.map(t, function(r) {
    var n = i.inEdges(r);
    if (n.length) {
      var o = zh.reduce(n, function(a, e) {
        var c = i.edge(e), h = i.node(e.v);
        return {
          sum: a.sum + c.weight * h.order,
          weight: a.weight + c.weight
        };
      }, { sum: 0, weight: 0 });
      return {
        v: r,
        barycenter: o.sum / o.weight,
        weight: o.weight
      };
    } else
      return { v: r };
  });
}
var Qe = Ee, Yb = Hb;
function Hb(i, t) {
  var r = {};
  Qe.forEach(i, function(o, a) {
    var e = r[o.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [o.v],
      i: a
    };
    Qe.isUndefined(o.barycenter) || (e.barycenter = o.barycenter, e.weight = o.weight);
  }), Qe.forEach(t.edges(), function(o) {
    var a = r[o.v], e = r[o.w];
    !Qe.isUndefined(a) && !Qe.isUndefined(e) && (e.indegree++, a.out.push(r[o.w]));
  });
  var n = Qe.filter(r, function(o) {
    return !o.indegree;
  });
  return Vb(n);
}
function Vb(i) {
  var t = [];
  function r(a) {
    return function(e) {
      e.merged || (Qe.isUndefined(e.barycenter) || Qe.isUndefined(a.barycenter) || e.barycenter >= a.barycenter) && Xb(a, e);
    };
  }
  function n(a) {
    return function(e) {
      e.in.push(a), --e.indegree === 0 && i.push(e);
    };
  }
  for (; i.length; ) {
    var o = i.pop();
    t.push(o), Qe.forEach(o.in.reverse(), r(o)), Qe.forEach(o.out, n(o));
  }
  return Qe.map(
    Qe.filter(t, function(a) {
      return !a.merged;
    }),
    function(a) {
      return Qe.pick(a, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function Xb(i, t) {
  var r = 0, n = 0;
  i.weight && (r += i.barycenter * i.weight, n += i.weight), t.weight && (r += t.barycenter * t.weight, n += t.weight), i.vs = t.vs.concat(i.vs), i.barycenter = r / n, i.weight = n, i.i = Math.min(t.i, i.i), t.merged = !0;
}
var Zt = Ee, Kb = Ve, Qb = Zb;
function Zb(i, t) {
  var r = Kb.partition(i, function(p) {
    return Zt.has(p, "barycenter");
  }), n = r.lhs, o = Zt.sortBy(r.rhs, function(p) {
    return -p.i;
  }), a = [], e = 0, c = 0, h = 0;
  n.sort(Jb(!!t)), h = Bh(a, o, h), Zt.forEach(n, function(p) {
    h += p.vs.length, a.push(p.vs), e += p.barycenter * p.weight, c += p.weight, h = Bh(a, o, h);
  });
  var d = { vs: Zt.flatten(a, !0) };
  return c && (d.barycenter = e / c, d.weight = c), d;
}
function Bh(i, t, r) {
  for (var n; t.length && (n = Zt.last(t)).i <= r; )
    t.pop(), i.push(n.vs), r++;
  return r;
}
function Jb(i) {
  return function(t, r) {
    return t.barycenter < r.barycenter ? -1 : t.barycenter > r.barycenter ? 1 : i ? r.i - t.i : t.i - r.i;
  };
}
var Mt = Ee, ex = jb, tx = Yb, rx = Qb, nx = hg;
function hg(i, t, r, n) {
  var o = i.children(t), a = i.node(t), e = a ? a.borderLeft : void 0, c = a ? a.borderRight : void 0, h = {};
  e && (o = Mt.filter(o, function(y) {
    return y !== e && y !== c;
  }));
  var d = ex(i, o);
  Mt.forEach(d, function(y) {
    if (i.children(y.v).length) {
      var s = hg(i, y.v, r, n);
      h[y.v] = s, Mt.has(s, "barycenter") && ox(y, s);
    }
  });
  var p = tx(d, r);
  ix(p, h);
  var f = rx(p, n);
  if (e && (f.vs = Mt.flatten([e, f.vs, c], !0), i.predecessors(e).length)) {
    var m = i.node(i.predecessors(e)[0]), g = i.node(i.predecessors(c)[0]);
    Mt.has(f, "barycenter") || (f.barycenter = 0, f.weight = 0), f.barycenter = (f.barycenter * f.weight + m.order + g.order) / (f.weight + 2), f.weight += 2;
  }
  return f;
}
function ix(i, t) {
  Mt.forEach(i, function(r) {
    r.vs = Mt.flatten(r.vs.map(function(n) {
      return t[n] ? t[n].vs : n;
    }), !0);
  });
}
function ox(i, t) {
  Mt.isUndefined(i.barycenter) ? (i.barycenter = t.barycenter, i.weight = t.weight) : (i.barycenter = (i.barycenter * i.weight + t.barycenter * t.weight) / (i.weight + t.weight), i.weight += t.weight);
}
var Jt = Ee, ax = ot.Graph, sx = cx;
function cx(i, t, r) {
  var n = lx(i), o = new ax({ compound: !0 }).setGraph({ root: n }).setDefaultNodeLabel(function(a) {
    return i.node(a);
  });
  return Jt.forEach(i.nodes(), function(a) {
    var e = i.node(a), c = i.parent(a);
    (e.rank === t || e.minRank <= t && t <= e.maxRank) && (o.setNode(a), o.setParent(a, c || n), Jt.forEach(i[r](a), function(h) {
      var d = h.v === a ? h.w : h.v, p = o.edge(d, a), f = Jt.isUndefined(p) ? 0 : p.weight;
      o.setEdge(d, a, { weight: i.edge(h).weight + f });
    }), Jt.has(e, "minRank") && o.setNode(a, {
      borderLeft: e.borderLeft[t],
      borderRight: e.borderRight[t]
    }));
  }), o;
}
function lx(i) {
  for (var t; i.hasNode(t = Jt.uniqueId("_root")); ) ;
  return t;
}
var dx = Ee, ux = px;
function px(i, t, r) {
  var n = {}, o;
  dx.forEach(r, function(a) {
    for (var e = i.parent(a), c, h; e; ) {
      if (c = i.parent(e), c ? (h = n[c], n[c] = e) : (h = o, o = e), h && h !== e) {
        t.setEdge(h, e);
        return;
      }
      e = c;
    }
  });
}
var _t = Ee, hx = Nb, fx = Ob, gx = nx, mx = sx, yx = ux, bx = ot.Graph, Wh = Ve, xx = vx;
function vx(i) {
  var t = Wh.maxRank(i), r = Nh(i, _t.range(1, t + 1), "inEdges"), n = Nh(i, _t.range(t - 1, -1, -1), "outEdges"), o = hx(i);
  qh(i, o);
  for (var a = Number.POSITIVE_INFINITY, e, c = 0, h = 0; h < 4; ++c, ++h) {
    wx(c % 2 ? r : n, c % 4 >= 2), o = Wh.buildLayerMatrix(i);
    var d = fx(i, o);
    d < a && (h = 0, e = _t.cloneDeep(o), a = d);
  }
  qh(i, e);
}
function Nh(i, t, r) {
  return _t.map(t, function(n) {
    return mx(i, n, r);
  });
}
function wx(i, t) {
  var r = new bx();
  _t.forEach(i, function(n) {
    var o = n.graph().root, a = gx(n, o, r, t);
    _t.forEach(a.vs, function(e, c) {
      n.node(e).order = c;
    }), yx(n, r, a.vs);
  });
}
function qh(i, t) {
  _t.forEach(t, function(r) {
    _t.forEach(r, function(n, o) {
      i.node(n).order = o;
    });
  });
}
var ue = Ee, Sx = ot.Graph, kx = Ve, Cx = {
  positionX: Lx
};
function $x(i, t) {
  var r = {};
  function n(o, a) {
    var e = 0, c = 0, h = o.length, d = ue.last(a);
    return ue.forEach(a, function(p, f) {
      var m = Mx(i, p), g = m ? i.node(m).order : h;
      (m || p === d) && (ue.forEach(a.slice(c, f + 1), function(y) {
        ue.forEach(i.predecessors(y), function(s) {
          var u = i.node(s), x = u.order;
          (x < e || g < x) && !(u.dummy && i.node(y).dummy) && fg(r, s, y);
        });
      }), c = f + 1, e = g);
    }), a;
  }
  return ue.reduce(t, n), r;
}
function Ex(i, t) {
  var r = {};
  function n(a, e, c, h, d) {
    var p;
    ue.forEach(ue.range(e, c), function(f) {
      p = a[f], i.node(p).dummy && ue.forEach(i.predecessors(p), function(m) {
        var g = i.node(m);
        g.dummy && (g.order < h || g.order > d) && fg(r, m, p);
      });
    });
  }
  function o(a, e) {
    var c = -1, h, d = 0;
    return ue.forEach(e, function(p, f) {
      if (i.node(p).dummy === "border") {
        var m = i.predecessors(p);
        m.length && (h = i.node(m[0]).order, n(e, d, f, c, h), d = f, c = h);
      }
      n(e, d, e.length, h, a.length);
    }), e;
  }
  return ue.reduce(t, o), r;
}
function Mx(i, t) {
  if (i.node(t).dummy)
    return ue.find(i.predecessors(t), function(r) {
      return i.node(r).dummy;
    });
}
function fg(i, t, r) {
  if (t > r) {
    var n = t;
    t = r, r = n;
  }
  var o = i[t];
  o || (i[t] = o = {}), o[r] = !0;
}
function Rx(i, t, r) {
  if (t > r) {
    var n = t;
    t = r, r = n;
  }
  return ue.has(i[t], r);
}
function _x(i, t, r, n) {
  var o = {}, a = {}, e = {};
  return ue.forEach(t, function(c) {
    ue.forEach(c, function(h, d) {
      o[h] = h, a[h] = h, e[h] = d;
    });
  }), ue.forEach(t, function(c) {
    var h = -1;
    ue.forEach(c, function(d) {
      var p = n(d);
      if (p.length) {
        p = ue.sortBy(p, function(s) {
          return e[s];
        });
        for (var f = (p.length - 1) / 2, m = Math.floor(f), g = Math.ceil(f); m <= g; ++m) {
          var y = p[m];
          a[d] === d && h < e[y] && !Rx(r, d, y) && (a[y] = d, a[d] = o[d] = o[y], h = e[y]);
        }
      }
    });
  }), { root: o, align: a };
}
function Ix(i, t, r, n, o) {
  var a = {}, e = Ax(i, t, r, o), c = o ? "borderLeft" : "borderRight";
  function h(f, m) {
    for (var g = e.nodes(), y = g.pop(), s = {}; y; )
      s[y] ? f(y) : (s[y] = !0, g.push(y), g = g.concat(m(y))), y = g.pop();
  }
  function d(f) {
    a[f] = e.inEdges(f).reduce(function(m, g) {
      return Math.max(m, a[g.v] + e.edge(g));
    }, 0);
  }
  function p(f) {
    var m = e.outEdges(f).reduce(function(y, s) {
      return Math.min(y, a[s.w] - e.edge(s));
    }, Number.POSITIVE_INFINITY), g = i.node(f);
    m !== Number.POSITIVE_INFINITY && g.borderType !== c && (a[f] = Math.max(a[f], m));
  }
  return h(d, e.predecessors.bind(e)), h(p, e.successors.bind(e)), ue.forEach(n, function(f) {
    a[f] = a[r[f]];
  }), a;
}
function Ax(i, t, r, n) {
  var o = new Sx(), a = i.graph(), e = zx(a.nodesep, a.edgesep, n);
  return ue.forEach(t, function(c) {
    var h;
    ue.forEach(c, function(d) {
      var p = r[d];
      if (o.setNode(p), h) {
        var f = r[h], m = o.edge(f, p);
        o.setEdge(f, p, Math.max(e(i, d, h), m || 0));
      }
      h = d;
    });
  }), o;
}
function Tx(i, t) {
  return ue.minBy(ue.values(t), function(r) {
    var n = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY;
    return ue.forIn(r, function(a, e) {
      var c = Bx(i, e) / 2;
      n = Math.max(a + c, n), o = Math.min(a - c, o);
    }), n - o;
  });
}
function Px(i, t) {
  var r = ue.values(t), n = ue.min(r), o = ue.max(r);
  ue.forEach(["u", "d"], function(a) {
    ue.forEach(["l", "r"], function(e) {
      var c = a + e, h = i[c], d;
      if (h !== t) {
        var p = ue.values(h);
        d = e === "l" ? n - ue.min(p) : o - ue.max(p), d && (i[c] = ue.mapValues(h, function(f) {
          return f + d;
        }));
      }
    });
  });
}
function Dx(i, t) {
  return ue.mapValues(i.ul, function(r, n) {
    if (t)
      return i[t.toLowerCase()][n];
    var o = ue.sortBy(ue.map(i, n));
    return (o[1] + o[2]) / 2;
  });
}
function Lx(i) {
  var t = kx.buildLayerMatrix(i), r = ue.merge(
    $x(i, t),
    Ex(i, t)
  ), n = {}, o;
  ue.forEach(["u", "d"], function(e) {
    o = e === "u" ? t : ue.values(t).reverse(), ue.forEach(["l", "r"], function(c) {
      c === "r" && (o = ue.map(o, function(f) {
        return ue.values(f).reverse();
      }));
      var h = (e === "u" ? i.predecessors : i.successors).bind(i), d = _x(i, o, r, h), p = Ix(
        i,
        o,
        d.root,
        d.align,
        c === "r"
      );
      c === "r" && (p = ue.mapValues(p, function(f) {
        return -f;
      })), n[e + c] = p;
    });
  });
  var a = Tx(i, n);
  return Px(n, a), Dx(n, i.graph().align);
}
function zx(i, t, r) {
  return function(n, o, a) {
    var e = n.node(o), c = n.node(a), h = 0, d;
    if (h += e.width / 2, ue.has(e, "labelpos"))
      switch (e.labelpos.toLowerCase()) {
        case "l":
          d = -e.width / 2;
          break;
        case "r":
          d = e.width / 2;
          break;
      }
    if (d && (h += r ? d : -d), d = 0, h += (e.dummy ? t : i) / 2, h += (c.dummy ? t : i) / 2, h += c.width / 2, ue.has(c, "labelpos"))
      switch (c.labelpos.toLowerCase()) {
        case "l":
          d = c.width / 2;
          break;
        case "r":
          d = -c.width / 2;
          break;
      }
    return d && (h += r ? d : -d), d = 0, h;
  };
}
function Bx(i, t) {
  return i.node(t).width;
}
var er = Ee, gg = Ve, Wx = Cx.positionX, Nx = qx;
function qx(i) {
  i = gg.asNonCompoundGraph(i), Ox(i), er.forEach(Wx(i), function(t, r) {
    i.node(r).x = t;
  });
}
function Ox(i) {
  var t = gg.buildLayerMatrix(i), r = i.graph().ranksep, n = 0;
  er.forEach(t, function(o) {
    var a = er.max(er.map(o, function(e) {
      return i.node(e).height;
    }));
    er.forEach(o, function(e) {
      i.node(e).y = n + a / 2;
    }), n += a + r;
  });
}
var me = Ee, Oh = Ay, Fh = Vy, Fx = bb, Ux = Ve.normalizeRanks, jx = Sb, Gx = Ve.removeEmptyRanks, Uh = Eb, Yx = Tb, jh = Db, Hx = xx, Vx = Nx, It = Ve, Xx = ot.Graph, Kx = Qx;
function Qx(i, t) {
  var r = t && t.debugTiming ? It.time : It.notime;
  r("layout", function() {
    var n = r("  buildLayoutGraph", function() {
      return c1(i);
    });
    r("  runLayout", function() {
      Zx(n, r);
    }), r("  updateInputGraph", function() {
      Jx(i, n);
    });
  });
}
function Zx(i, t) {
  t("    makeSpaceForEdgeLabels", function() {
    l1(i);
  }), t("    removeSelfEdges", function() {
    b1(i);
  }), t("    acyclic", function() {
    Oh.run(i);
  }), t("    nestingGraph.run", function() {
    Uh.run(i);
  }), t("    rank", function() {
    Fx(It.asNonCompoundGraph(i));
  }), t("    injectEdgeLabelProxies", function() {
    d1(i);
  }), t("    removeEmptyRanks", function() {
    Gx(i);
  }), t("    nestingGraph.cleanup", function() {
    Uh.cleanup(i);
  }), t("    normalizeRanks", function() {
    Ux(i);
  }), t("    assignRankMinMax", function() {
    u1(i);
  }), t("    removeEdgeLabelProxies", function() {
    p1(i);
  }), t("    normalize.run", function() {
    Fh.run(i);
  }), t("    parentDummyChains", function() {
    jx(i);
  }), t("    addBorderSegments", function() {
    Yx(i);
  }), t("    order", function() {
    Hx(i);
  }), t("    insertSelfEdges", function() {
    x1(i);
  }), t("    adjustCoordinateSystem", function() {
    jh.adjust(i);
  }), t("    position", function() {
    Vx(i);
  }), t("    positionSelfEdges", function() {
    v1(i);
  }), t("    removeBorderNodes", function() {
    y1(i);
  }), t("    normalize.undo", function() {
    Fh.undo(i);
  }), t("    fixupEdgeLabelCoords", function() {
    g1(i);
  }), t("    undoCoordinateSystem", function() {
    jh.undo(i);
  }), t("    translateGraph", function() {
    h1(i);
  }), t("    assignNodeIntersects", function() {
    f1(i);
  }), t("    reversePoints", function() {
    m1(i);
  }), t("    acyclic.undo", function() {
    Oh.undo(i);
  });
}
function Jx(i, t) {
  me.forEach(i.nodes(), function(r) {
    var n = i.node(r), o = t.node(r);
    n && (n.x = o.x, n.y = o.y, t.children(r).length && (n.width = o.width, n.height = o.height));
  }), me.forEach(i.edges(), function(r) {
    var n = i.edge(r), o = t.edge(r);
    n.points = o.points, me.has(o, "x") && (n.x = o.x, n.y = o.y);
  }), i.graph().width = t.graph().width, i.graph().height = t.graph().height;
}
var e1 = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], t1 = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, r1 = ["acyclicer", "ranker", "rankdir", "align"], n1 = ["width", "height"], i1 = { width: 0, height: 0 }, o1 = ["minlen", "weight", "width", "height", "labeloffset"], a1 = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
}, s1 = ["labelpos"];
function c1(i) {
  var t = new Xx({ multigraph: !0, compound: !0 }), r = lc(i.graph());
  return t.setGraph(me.merge(
    {},
    t1,
    cc(r, e1),
    me.pick(r, r1)
  )), me.forEach(i.nodes(), function(n) {
    var o = lc(i.node(n));
    t.setNode(n, me.defaults(cc(o, n1), i1)), t.setParent(n, i.parent(n));
  }), me.forEach(i.edges(), function(n) {
    var o = lc(i.edge(n));
    t.setEdge(n, me.merge(
      {},
      a1,
      cc(o, o1),
      me.pick(o, s1)
    ));
  }), t;
}
function l1(i) {
  var t = i.graph();
  t.ranksep /= 2, me.forEach(i.edges(), function(r) {
    var n = i.edge(r);
    n.minlen *= 2, n.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? n.width += n.labeloffset : n.height += n.labeloffset);
  });
}
function d1(i) {
  me.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    if (r.width && r.height) {
      var n = i.node(t.v), o = i.node(t.w), a = { rank: (o.rank - n.rank) / 2 + n.rank, e: t };
      It.addDummyNode(i, "edge-proxy", a, "_ep");
    }
  });
}
function u1(i) {
  var t = 0;
  me.forEach(i.nodes(), function(r) {
    var n = i.node(r);
    n.borderTop && (n.minRank = i.node(n.borderTop).rank, n.maxRank = i.node(n.borderBottom).rank, t = me.max(t, n.maxRank));
  }), i.graph().maxRank = t;
}
function p1(i) {
  me.forEach(i.nodes(), function(t) {
    var r = i.node(t);
    r.dummy === "edge-proxy" && (i.edge(r.e).labelRank = r.rank, i.removeNode(t));
  });
}
function h1(i) {
  var t = Number.POSITIVE_INFINITY, r = 0, n = Number.POSITIVE_INFINITY, o = 0, a = i.graph(), e = a.marginx || 0, c = a.marginy || 0;
  function h(d) {
    var p = d.x, f = d.y, m = d.width, g = d.height;
    t = Math.min(t, p - m / 2), r = Math.max(r, p + m / 2), n = Math.min(n, f - g / 2), o = Math.max(o, f + g / 2);
  }
  me.forEach(i.nodes(), function(d) {
    h(i.node(d));
  }), me.forEach(i.edges(), function(d) {
    var p = i.edge(d);
    me.has(p, "x") && h(p);
  }), t -= e, n -= c, me.forEach(i.nodes(), function(d) {
    var p = i.node(d);
    p.x -= t, p.y -= n;
  }), me.forEach(i.edges(), function(d) {
    var p = i.edge(d);
    me.forEach(p.points, function(f) {
      f.x -= t, f.y -= n;
    }), me.has(p, "x") && (p.x -= t), me.has(p, "y") && (p.y -= n);
  }), a.width = r - t + e, a.height = o - n + c;
}
function f1(i) {
  me.forEach(i.edges(), function(t) {
    var r = i.edge(t), n = i.node(t.v), o = i.node(t.w), a, e;
    r.points ? (a = r.points[0], e = r.points[r.points.length - 1]) : (r.points = [], a = o, e = n), r.points.unshift(It.intersectRect(n, a)), r.points.push(It.intersectRect(o, e));
  });
}
function g1(i) {
  me.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    if (me.has(r, "x"))
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
function m1(i) {
  me.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    r.reversed && r.points.reverse();
  });
}
function y1(i) {
  me.forEach(i.nodes(), function(t) {
    if (i.children(t).length) {
      var r = i.node(t), n = i.node(r.borderTop), o = i.node(r.borderBottom), a = i.node(me.last(r.borderLeft)), e = i.node(me.last(r.borderRight));
      r.width = Math.abs(e.x - a.x), r.height = Math.abs(o.y - n.y), r.x = a.x + r.width / 2, r.y = n.y + r.height / 2;
    }
  }), me.forEach(i.nodes(), function(t) {
    i.node(t).dummy === "border" && i.removeNode(t);
  });
}
function b1(i) {
  me.forEach(i.edges(), function(t) {
    if (t.v === t.w) {
      var r = i.node(t.v);
      r.selfEdges || (r.selfEdges = []), r.selfEdges.push({ e: t, label: i.edge(t) }), i.removeEdge(t);
    }
  });
}
function x1(i) {
  var t = It.buildLayerMatrix(i);
  me.forEach(t, function(r) {
    var n = 0;
    me.forEach(r, function(o, a) {
      var e = i.node(o);
      e.order = a + n, me.forEach(e.selfEdges, function(c) {
        It.addDummyNode(i, "selfedge", {
          width: c.label.width,
          height: c.label.height,
          rank: e.rank,
          order: a + ++n,
          e: c.e,
          label: c.label
        }, "_se");
      }), delete e.selfEdges;
    });
  });
}
function v1(i) {
  me.forEach(i.nodes(), function(t) {
    var r = i.node(t);
    if (r.dummy === "selfedge") {
      var n = i.node(r.e.v), o = n.x + n.width / 2, a = n.y, e = r.x - o, c = n.height / 2;
      i.setEdge(r.e, r.label), i.removeNode(t), r.label.points = [
        { x: o + 2 * e / 3, y: a - c },
        { x: o + 5 * e / 6, y: a - c },
        { x: o + e, y: a },
        { x: o + 5 * e / 6, y: a + c },
        { x: o + 2 * e / 3, y: a + c }
      ], r.label.x = r.x, r.label.y = r.y;
    }
  });
}
function cc(i, t) {
  return me.mapValues(me.pick(i, t), Number);
}
function lc(i) {
  var t = {};
  return me.forEach(i, function(r, n) {
    t[n.toLowerCase()] = r;
  }), t;
}
var Rr = Ee, w1 = Ve, S1 = ot.Graph, k1 = {
  debugOrdering: C1
};
function C1(i) {
  var t = w1.buildLayerMatrix(i), r = new S1({ compound: !0, multigraph: !0 }).setGraph({});
  return Rr.forEach(i.nodes(), function(n) {
    r.setNode(n, { label: n }), r.setParent(n, "layer" + i.node(n).rank);
  }), Rr.forEach(i.edges(), function(n) {
    r.setEdge(n.v, n.w, {}, n.name);
  }), Rr.forEach(t, function(n, o) {
    var a = "layer" + o;
    r.setNode(a, { rank: "same" }), Rr.reduce(n, function(e, c) {
      return r.setEdge(e, c, { style: "invis" }), c;
    });
  }), r;
}
var $1 = "0.8.5", E1 = {
  graphlib: ot,
  layout: Kx,
  debug: k1,
  util: {
    time: Ve.time,
    notime: Ve.notime
  },
  version: $1
};
const Gh = /* @__PURE__ */ Ig(E1);
async function M1(i, t = []) {
  throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
}
function Dr(i) {
  const t = i.match(/<!--\s*type:\s*(\w+)\s*-->/);
  return t ? t[1] : "flowchart";
}
function R1(i) {
  const t = i.match(/<!--\s*name:\s*(.+?)\s*-->/);
  return t ? t[1].trim() : null;
}
function _1(i) {
  const t = i.match(/<!--\s*alternatives:\s*(.+?)\s*-->/);
  if (!t) return [];
  const r = t[1].trim().toLowerCase();
  return r === "none" ? [] : r.split(/[,\s]+/).map((n) => n.trim()).filter((n) => n && n !== "none");
}
function Lr(i) {
  return i.replace(/<!--\s*type:\s*\w+\s*-->\n?/g, "").replace(/<!--\s*name:\s*.+?\s*-->\n?/g, "").replace(/<!--\s*alternatives:\s*.+?\s*-->\n?/g, "").trim();
}
async function I1(i, t = []) {
  let r;
  r = await M1(i, t);
  const n = Dr(r), o = Lr(r);
  return {
    type: n,
    dsl: o,
    raw: r
  };
}
function Ot() {
  return !1;
}
function A1() {
  return "GPT-4";
}
async function Bc(i, t) {
  return T1();
}
async function T1(i, t) {
  throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
}
async function P1(i, t) {
  return await Bc();
}
async function D1(i, t) {
  const r = await Bc(), n = r.split("---EXPLANATION---");
  if (n.length === 2) {
    const a = n[0].trim(), e = n[1].trim(), c = Dr(a) || t;
    return {
      dsl: Lr(a),
      type: c,
      explanation: e,
      raw: r
    };
  }
  return r.match(/<!--\s*type:\s*(\w+)\s*-->/) ? {
    dsl: Lr(r),
    type: Dr(r),
    explanation: "Improvements applied.",
    raw: r
  } : {
    dsl: i,
    type: t,
    explanation: r,
    raw: r
  };
}
async function L1(i, t) {
  const r = await Bc();
  try {
    const n = r.match(/\{[\s\S]*\}/);
    return n ? JSON.parse(n[0]) : {
      isValid: !0,
      errors: [],
      warnings: ["Could not parse validation response"],
      suggestions: [r]
    };
  } catch {
    return {
      isValid: !0,
      errors: [],
      warnings: ["Validation response was not in expected format"],
      suggestions: [r]
    };
  }
}
async function z1(i, t) {
  throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
}
function B1(i) {
  if (!i.includes("->"))
    return i;
  let t = i.replace(/->\s*\n\s*/g, "-> ");
  t = t.replace(/,\s*\n\s*(?![A-Z])/g, ", ");
  const r = t.split(`
`).filter((p) => p.trim()), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  r.forEach((p) => {
    const f = p.match(/^(.+?)\s*->\s*(.+)$/);
    if (f) {
      const m = f[1].trim(), y = f[2].trim().split(",").map((s) => s.trim()).filter((s) => s);
      o.add(m), y.forEach((s) => {
        o.add(s), a.add(s);
      }), n.has(m) || n.set(m, []), n.get(m).push(...y);
    } else p.trim() && !p.includes("->") && o.add(p.trim());
  });
  const e = [...o].filter((p) => !a.has(p));
  if (e.length === 0)
    return i;
  const c = [], h = /* @__PURE__ */ new Set();
  function d(p, f) {
    if (h.has(p)) return;
    h.add(p), c.push("  ".repeat(f) + p), (n.get(p) || []).forEach((g) => d(g, f + 1));
  }
  return e.forEach((p) => d(p, 0)), c.join(`
`);
}
function W1(i) {
  if (!/^\s*\(([^)]+)\)\s+\1\s*$/m.test(i))
    return { dsl: i, convertToMindmap: !1 };
  const r = i.split(`
`).filter((p) => p.trim()), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  r.forEach((p) => {
    const f = p.match(/^\s*\(([^)]+)\)\s+\1\s*->\s*\(([^)]+)\)\s+\2\s*$/);
    if (f) {
      const m = f[1].trim(), g = f[2].trim();
      o.add(m), o.add(g), a.add(g), n.has(m) || n.set(m, []), n.get(m).push(g);
    } else {
      const m = p.match(/^\s*\(([^)]+)\)\s+\1\s*$/);
      m && o.add(m[1].trim());
    }
  });
  const e = [...o].filter((p) => !a.has(p));
  if (e.length === 0) return { dsl: i, convertToMindmap: !1 };
  const c = [], h = /* @__PURE__ */ new Set();
  function d(p, f) {
    if (h.has(p)) return;
    h.add(p), c.push("  ".repeat(f) + p), (n.get(p) || []).forEach((g) => d(g, f + 1));
  }
  return e.forEach((p) => d(p, 0)), { dsl: c.join(`
`), convertToMindmap: !0 };
}
async function N1(i, t = "image/png") {
  let r;
  r = await z1();
  let n = Dr(r), o = Lr(r);
  const a = R1(r);
  let e = _1(r);
  if ((n === "mindmap" || n === "orgchart") && o.includes("->") && (o = B1(o)), n === "flowchart") {
    const c = W1(o);
    c.convertToMindmap && (e.includes("flowchart") || (e = ["flowchart", ...e]), n = "mindmap", o = c.dsl);
  }
  return e = e.filter((c) => c !== n), {
    type: n,
    name: a || "Imported Diagram",
    alternatives: e,
    dsl: o,
    raw: r
  };
}
const Vt = {
  purple: "#7C3AED",
  green: "#10B981"
};
function q1({ onApplyDiagram: i, isOpen: t, onClose: r }) {
  const [n, o] = Y([]), [a, e] = Y(""), [c, h] = Y(!1), [d, p] = Y(null), f = _e(null), m = _e(null), g = () => {
    var w;
    (w = f.current) == null || w.scrollIntoView({ behavior: "smooth" });
  };
  se(() => {
    g();
  }, [n]), se(() => {
    t && m.current && m.current.focus();
  }, [t]);
  const y = async (w) => {
    if (w.preventDefault(), !a.trim() || c) return;
    const C = a.trim();
    e(""), p(null), o(($) => [...$, { role: "user", content: C }]), h(!0);
    try {
      const $ = n.map((M) => ({
        role: M.role,
        content: M.content
      })), E = await I1(C, $);
      o((M) => [...M, {
        role: "assistant",
        content: E.raw,
        type: E.type,
        dsl: E.dsl
      }]);
    } catch ($) {
      p($.message), o((E) => [...E, {
        role: "error",
        content: $.message
      }]);
    } finally {
      h(!1);
    }
  }, s = (w) => {
    w.dsl && w.type && i(w.type, w.dsl);
  }, u = async (w) => {
    try {
      await navigator.clipboard.writeText(w);
    } catch (C) {
      console.error("Failed to copy:", C);
    }
  }, x = () => {
    o([]), p(null);
  };
  if (!t) return null;
  const b = Ot(), k = A1();
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
            k
          ] })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: x,
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
      !b && /* @__PURE__ */ S("div", { style: {
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
      n.length === 0 && b && /* @__PURE__ */ S("div", { style: {
        textAlign: "center",
        color: "#666",
        padding: "40px 20px"
      }, children: [
        /* @__PURE__ */ l("div", { style: { fontSize: "40px", marginBottom: "16px" }, children: "💬" }),
        /* @__PURE__ */ l("div", { style: { fontSize: "14px", marginBottom: "8px" }, children: "Describe the diagram you want to create" }),
        /* @__PURE__ */ l("div", { style: { fontSize: "12px", color: "#555" }, children: 'Try: "Create a flowchart for user login with email verification"' })
      ] }),
      n.map((w, C) => /* @__PURE__ */ l("div", { style: {
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
                onClick: () => u(w.dsl),
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
                onClick: () => s(w),
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
      ] }) }, C)),
      c && /* @__PURE__ */ S("div", { style: {
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
            placeholder: b ? "Describe your diagram..." : "Configure API key first",
            disabled: !b || c,
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
            disabled: !b || c || !a.trim(),
            style: {
              background: b && a.trim() ? Vt.purple : "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "8px",
              padding: "12px 16px",
              color: b && a.trim() ? "#fff" : "#666",
              cursor: b && a.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: c ? "..." : "→"
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
const Wc = {
  CUSTOM_TEMPLATES: "ddflow_custom_templates"
}, ee = {
  FLOWCHARTS: "Flowcharts",
  ARCHITECTURE: "Architecture",
  DATA_MODELING: "Data Modeling",
  PROJECT_MANAGEMENT: "Project Management",
  SOFTWARE_DESIGN: "Software Design",
  BUSINESS: "Business",
  NETWORK: "Network",
  UI_DESIGN: "UI Design",
  APP_BUNDLES: "App Bundles"
}, Nc = [
  // ============================================
  // FLOWCHARTS
  // ============================================
  {
    id: "login-flow",
    name: "User Login Flow",
    description: "Authentication flow with validation and error handling",
    category: ee.FLOWCHARTS,
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
    category: ee.FLOWCHARTS,
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
    category: ee.FLOWCHARTS,
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
    category: ee.FLOWCHARTS,
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
    description: "Modern microservices with API gateway and message queue",
    category: ee.ARCHITECTURE,
    type: "architecture",
    thumbnail: "architecture",
    source: `[clients] Web App, Mobile App, Third-Party
[gateway] API Gateway, Load Balancer
[services] Auth Service, User Service, Product Service, Order Service, Payment Service, Notification Service
[queue] RabbitMQ, Redis Cache
[data] PostgreSQL, MongoDB, Elasticsearch

Web App -> API Gateway
Mobile App -> API Gateway
Third-Party -> API Gateway
API Gateway -> Load Balancer
Load Balancer -> Auth Service
Load Balancer -> User Service
Load Balancer -> Product Service
Load Balancer -> Order Service
Auth Service -> Redis Cache
User Service -> PostgreSQL
Product Service -> MongoDB
Product Service -> Elasticsearch
Order Service -> PostgreSQL
Order Service -> RabbitMQ
Payment Service -> RabbitMQ
Notification Service -> RabbitMQ`
  },
  {
    id: "serverless",
    name: "Serverless Architecture",
    description: "AWS serverless architecture with Lambda and DynamoDB",
    category: ee.ARCHITECTURE,
    type: "architecture",
    thumbnail: "architecture",
    source: `[clients] Web Client, Mobile Client
[gateway] API Gateway, CloudFront CDN
[services] Auth Lambda, API Lambda, Worker Lambda
[queue] SQS Queue, SNS Topics
[storage] S3 Bucket
[data] DynamoDB, ElastiCache

Web Client -> CloudFront CDN
Mobile Client -> API Gateway
CloudFront CDN -> S3 Bucket
API Gateway -> Auth Lambda
API Gateway -> API Lambda
Auth Lambda -> DynamoDB
API Lambda -> DynamoDB
API Lambda -> ElastiCache
API Lambda -> SQS Queue
SQS Queue -> Worker Lambda
Worker Lambda -> SNS Topics
Worker Lambda -> S3 Bucket`
  },
  {
    id: "event-driven",
    name: "Event-Driven Architecture",
    description: "Event sourcing with CQRS pattern",
    category: ee.ARCHITECTURE,
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
    category: ee.ARCHITECTURE,
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
    category: ee.DATA_MODELING,
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
    category: ee.DATA_MODELING,
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
    category: ee.DATA_MODELING,
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
    category: ee.PROJECT_MANAGEMENT,
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
    category: ee.PROJECT_MANAGEMENT,
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
    category: ee.PROJECT_MANAGEMENT,
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
    category: ee.PROJECT_MANAGEMENT,
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
    category: ee.SOFTWARE_DESIGN,
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
    category: ee.SOFTWARE_DESIGN,
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
    category: ee.SOFTWARE_DESIGN,
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
    category: ee.SOFTWARE_DESIGN,
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
    category: ee.SOFTWARE_DESIGN,
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
    description: "C4 model system context diagram",
    category: ee.SOFTWARE_DESIGN,
    type: "c4",
    thumbnail: "c4",
    source: `[person] Customer: A registered user of the system
[person] Admin: System administrator
[system] E-Commerce Platform: Main application for online shopping
[container] Web Application: React SPA
[container] Mobile App: iOS/Android app
[container] API Server: Node.js backend
[container] Database: PostgreSQL
[external] Payment Gateway: Stripe
[external] Email Service: SendGrid
[external] Analytics: Google Analytics

Customer -> Web Application: Browse and purchase
Customer -> Mobile App: Browse and purchase
Admin -> Web Application: Manage system
Web Application -> API Server: API calls
Mobile App -> API Server: API calls
API Server -> Database: Read/Write data
API Server -> Payment Gateway: Process payments
API Server -> Email Service: Send notifications
Web Application -> Analytics: Track events`
  },
  // ============================================
  // BUSINESS
  // ============================================
  {
    id: "customer-journey",
    name: "Customer Onboarding Journey",
    description: "New customer onboarding experience map",
    category: ee.BUSINESS,
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
    category: ee.BUSINESS,
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
    category: ee.BUSINESS,
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
    category: ee.BUSINESS,
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
    category: ee.NETWORK,
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
    category: ee.NETWORK,
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
    category: ee.UI_DESIGN,
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
    category: ee.UI_DESIGN,
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
    category: ee.UI_DESIGN,
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
    category: ee.UI_DESIGN,
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
    category: ee.UI_DESIGN,
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
    category: ee.UI_DESIGN,
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
    category: ee.UI_DESIGN,
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
    category: ee.UI_DESIGN,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.APP_BUNDLES,
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
    category: ee.SOFTWARE_DESIGN,
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
    category: ee.ARCHITECTURE,
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
    category: ee.FLOWCHARTS,
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
    category: ee.ARCHITECTURE,
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
function Yh() {
  return Nc;
}
function O1(i) {
  return Nc.find((t) => t.id === i) || Rt().find((t) => t.id === i) || null;
}
function Rt() {
  try {
    const i = localStorage.getItem(Wc.CUSTOM_TEMPLATES);
    if (i)
      return JSON.parse(i);
  } catch (i) {
    console.error("Failed to load custom templates:", i);
  }
  return [];
}
function F1(i) {
  try {
    const t = Rt(), r = {
      ...i,
      id: `custom-${Date.now()}`,
      isCustom: !0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return t.unshift(r), localStorage.setItem(Wc.CUSTOM_TEMPLATES, JSON.stringify(t)), r;
  } catch (t) {
    throw console.error("Failed to save custom template:", t), t;
  }
}
function U1(i) {
  try {
    const r = Rt().filter((n) => n.id !== i);
    return localStorage.setItem(Wc.CUSTOM_TEMPLATES, JSON.stringify(r)), !0;
  } catch (t) {
    return console.error("Failed to delete custom template:", t), !1;
  }
}
function j1() {
  return [...Rt(), ...Nc];
}
function G1(i) {
  const t = i.toLowerCase();
  return j1().filter(
    (r) => r.name.toLowerCase().includes(t) || r.description.toLowerCase().includes(t) || r.category.toLowerCase().includes(t) || r.type.toLowerCase().includes(t)
  );
}
const Re = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  pink: "#EC4899",
  red: "#EF4444",
  cyan: "#06B6D4",
  violet: "#8B5CF6"
}, Y1 = {
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
}, H1 = {
  [ee.FLOWCHARTS]: "🔀",
  [ee.ARCHITECTURE]: "🏗️",
  [ee.DATA_MODELING]: "🗃️",
  [ee.PROJECT_MANAGEMENT]: "📊",
  [ee.SOFTWARE_DESIGN]: "💻",
  [ee.BUSINESS]: "💼",
  [ee.NETWORK]: "🌐",
  [ee.UI_DESIGN]: "📱",
  [ee.APP_BUNDLES]: "📦",
  "My Templates": "⭐"
}, Hh = {
  [ee.FLOWCHARTS]: Re.blue,
  [ee.ARCHITECTURE]: Re.purple,
  [ee.DATA_MODELING]: Re.green,
  [ee.PROJECT_MANAGEMENT]: Re.orange,
  [ee.SOFTWARE_DESIGN]: Re.violet,
  [ee.BUSINESS]: Re.pink,
  [ee.NETWORK]: Re.cyan,
  [ee.UI_DESIGN]: Re.red,
  [ee.APP_BUNDLES]: Re.teal,
  "My Templates": Re.orange
};
function V1({ isOpen: i, onClose: t, onApplyTemplate: r, theme: n }) {
  const [o, a] = Y(""), [e, c] = Y("All"), [h, d] = Y(null), [p, f] = Y(null), m = _e(null), g = (n == null ? void 0 : n.name) === "dark";
  se(() => {
    i && m.current && setTimeout(() => {
      var w;
      return (w = m.current) == null ? void 0 : w.focus();
    }, 100);
  }, [i]);
  const y = ge(() => {
    let w;
    if (o.trim())
      w = G1(o);
    else {
      const C = Yh();
      w = [...Rt(), ...C];
    }
    return e === "All" ? w : e === "My Templates" ? w.filter((C) => C.isCustom) : w.filter((C) => C.category === e);
  }, [o, e]), s = ge(() => {
    const w = Rt(), C = ["All", ...Object.values(ee)];
    return w.length > 0 && C.splice(1, 0, "My Templates"), C;
  }, []), u = (w) => {
    r(w.type, w.source), t();
  }, x = (w) => {
    U1(w), f(null);
  };
  if (!i) return null;
  const b = {
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
    categoryItem: (w, C) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 20px",
      cursor: "pointer",
      background: w ? g ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)" : "transparent",
      borderLeft: w ? `3px solid ${C || Re.purple}` : "3px solid transparent",
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
    card: (w, C) => ({
      background: g ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.8)",
      borderRadius: "12px",
      border: `1px solid ${w ? C || Re.purple : g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.2s",
      transform: w ? "translateY(-2px)" : "none",
      boxShadow: w ? `0 8px 20px ${C}20` : "none"
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
      background: `${Re.orange}20`,
      color: Re.orange,
      borderRadius: "4px",
      fontSize: "10px"
    },
    bundleBadge: {
      padding: "4px 10px",
      background: `${Re.teal}25`,
      color: Re.teal,
      borderRadius: "6px",
      fontSize: "10px",
      fontWeight: 600,
      border: `1px solid ${Re.teal}40`
    },
    deleteButton: {
      marginLeft: "auto",
      padding: "4px 8px",
      background: `${Re.red}20`,
      color: Re.red,
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
      background: w ? Re.red : g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      color: w || g ? "#fff" : "#1e293b",
      border: "none",
      borderRadius: "6px",
      fontSize: "12px",
      cursor: "pointer"
    })
  }, k = (w) => {
    const C = [...Rt(), ...Yh()];
    return w === "All" ? C.length : w === "My Templates" ? Rt().length : C.filter(($) => $.category === w).length;
  };
  return /* @__PURE__ */ l("div", { style: b.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: b.modal, onClick: (w) => w.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: b.header, children: [
      /* @__PURE__ */ S("div", { style: b.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: b.headerIcon, children: "📋" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: b.titleText, children: "Template Gallery" }),
          /* @__PURE__ */ l("div", { style: b.subtitle, children: "Choose a template to get started quickly" })
        ] })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          style: b.closeButton,
          onClick: t,
          onMouseEnter: (w) => w.target.style.color = g ? "#fff" : "#1e293b",
          onMouseLeave: (w) => w.target.style.color = g ? "#888" : "#64748b",
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { style: b.searchBar, children: /* @__PURE__ */ S("div", { style: b.searchWrapper, children: [
      /* @__PURE__ */ l("span", { style: b.searchIcon, children: "🔍" }),
      /* @__PURE__ */ l(
        "input",
        {
          ref: m,
          type: "text",
          placeholder: "Search templates by name, type, or category...",
          value: o,
          onChange: (w) => a(w.target.value),
          style: b.searchInput
        }
      )
    ] }) }),
    /* @__PURE__ */ S("div", { style: b.content, children: [
      /* @__PURE__ */ l("div", { style: b.sidebar, children: s.map((w) => /* @__PURE__ */ S(
        "div",
        {
          style: b.categoryItem(
            e === w,
            Hh[w]
          ),
          onClick: () => c(w),
          onMouseEnter: (C) => {
            e !== w && (C.currentTarget.style.background = g ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)");
          },
          onMouseLeave: (C) => {
            e !== w && (C.currentTarget.style.background = "transparent");
          },
          children: [
            /* @__PURE__ */ l("span", { style: b.categoryIcon, children: H1[w] || "📁" }),
            /* @__PURE__ */ l("span", { children: w }),
            /* @__PURE__ */ l("span", { style: b.categoryCount, children: k(w) })
          ]
        },
        w
      )) }),
      /* @__PURE__ */ l("div", { style: b.grid, children: y.length === 0 ? /* @__PURE__ */ S("div", { style: b.emptyState, children: [
        /* @__PURE__ */ l("div", { style: b.emptyIcon, children: "🔍" }),
        /* @__PURE__ */ l("div", { style: b.emptyTitle, children: "No templates found" }),
        /* @__PURE__ */ l("div", { style: b.emptyText, children: "Try a different search term or category" })
      ] }) : y.map((w) => {
        var M;
        const C = Hh[w.category] || Re.purple, $ = h === w.id, E = p === w.id;
        return /* @__PURE__ */ S(
          "div",
          {
            style: { ...b.card($, C), position: "relative" },
            onMouseEnter: () => d(w.id),
            onMouseLeave: () => d(null),
            onClick: () => !E && u(w),
            children: [
              /* @__PURE__ */ l("div", { style: b.cardThumbnail(C), children: Y1[w.type] || "📄" }),
              /* @__PURE__ */ S("div", { style: b.cardContent, children: [
                /* @__PURE__ */ l("div", { style: b.cardTitle, children: w.name || "Untitled" }),
                /* @__PURE__ */ l("div", { style: b.cardDescription, children: w.description || "No description" }),
                /* @__PURE__ */ S("div", { style: b.cardMeta, children: [
                  /* @__PURE__ */ l("span", { style: b.typeBadge(C), children: (M = w.type) == null ? void 0 : M.toUpperCase() }),
                  w.bundle && /* @__PURE__ */ l("span", { style: b.bundleBadge, children: w.bundle }),
                  w.isCustom && /* @__PURE__ */ S(ut, { children: [
                    /* @__PURE__ */ l("span", { style: b.customBadge, children: "Custom" }),
                    /* @__PURE__ */ l(
                      "button",
                      {
                        style: b.deleteButton,
                        onClick: (_) => {
                          _.stopPropagation(), f(w.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ] })
              ] }),
              E && /* @__PURE__ */ l("div", { style: b.confirmOverlay, onClick: (_) => _.stopPropagation(), children: /* @__PURE__ */ S("div", { style: b.confirmBox, children: [
                /* @__PURE__ */ l("div", { style: b.confirmText, children: "Delete this template?" }),
                /* @__PURE__ */ S("div", { style: b.confirmButtons, children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      style: b.confirmButton(!1),
                      onClick: () => f(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "button",
                    {
                      style: b.confirmButton(!0),
                      onClick: () => x(w.id),
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
const mt = {
  purple: "#7C3AED",
  green: "#10B981",
  red: "#EF4444"
};
function X1({ isOpen: i, onClose: t, diagramType: r, diagramSource: n, theme: o }) {
  const [a, e] = Y(""), [c, h] = Y(""), [d, p] = Y(ee.FLOWCHARTS), [f, m] = Y(""), [g, y] = Y(!1), s = _e(null), u = (o == null ? void 0 : o.name) === "dark";
  se(() => {
    i && (e(""), h(""), p(ee.FLOWCHARTS), m(""), y(!1), setTimeout(() => {
      var k;
      return (k = s.current) == null ? void 0 : k.focus();
    }, 100));
  }, [i]);
  const x = () => {
    if (!a.trim()) {
      m("Please enter a template name");
      return;
    }
    if (!(n != null && n.trim())) {
      m("No diagram content to save");
      return;
    }
    try {
      F1({
        name: a.trim(),
        description: c.trim() || "Custom template",
        category: d,
        type: r,
        source: n
      }), y(!0), setTimeout(() => {
        t();
      }, 1500);
    } catch (k) {
      m("Failed to save template: " + k.message);
    }
  };
  if (!i) return null;
  const b = {
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
      background: u ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))",
      borderRadius: "16px",
      border: `1px solid ${u ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)"}`,
      overflow: "hidden",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
    },
    header: {
      padding: "20px 24px",
      borderBottom: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: u ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.05)"
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
      color: u ? "#fff" : "#1e293b",
      fontWeight: 600,
      fontSize: "18px"
    },
    closeButton: {
      background: "transparent",
      border: "none",
      color: u ? "#888" : "#64748b",
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
      color: u ? "#aaa" : "#64748b",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      marginBottom: "8px"
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      background: u ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: "8px",
      color: u ? "#fff" : "#1e293b",
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box"
    },
    textarea: {
      width: "100%",
      padding: "12px 14px",
      background: u ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: "8px",
      color: u ? "#fff" : "#1e293b",
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
      background: u ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: "8px",
      color: u ? "#fff" : "#1e293b",
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
      background: u ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.05)",
      borderRadius: "8px",
      border: `1px solid ${u ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)"}`
    },
    typeLabel: {
      color: u ? "#888" : "#64748b",
      fontSize: "12px"
    },
    typeBadge: {
      padding: "4px 10px",
      background: `${mt.purple}20`,
      color: mt.purple,
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase"
    },
    error: {
      padding: "10px 14px",
      background: `${mt.red}15`,
      border: `1px solid ${mt.red}40`,
      borderRadius: "8px",
      color: mt.red,
      fontSize: "13px",
      marginBottom: "16px"
    },
    success: {
      padding: "10px 14px",
      background: `${mt.green}15`,
      border: `1px solid ${mt.green}40`,
      borderRadius: "8px",
      color: mt.green,
      fontSize: "13px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    footer: {
      padding: "16px 24px",
      borderTop: `1px solid ${u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px"
    },
    button: (k) => ({
      padding: "10px 20px",
      background: k ? mt.purple : u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      color: k || u ? "#fff" : "#1e293b",
      border: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.2s"
    })
  };
  return /* @__PURE__ */ l("div", { style: b.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: b.modal, onClick: (k) => k.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: b.header, children: [
      /* @__PURE__ */ S("div", { style: b.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: b.headerIcon, children: "💾" }),
        /* @__PURE__ */ l("span", { style: b.titleText, children: "Save as Template" })
      ] }),
      /* @__PURE__ */ l("button", { style: b.closeButton, onClick: t, children: "×" })
    ] }),
    /* @__PURE__ */ S("div", { style: b.content, children: [
      f && /* @__PURE__ */ l("div", { style: b.error, children: f }),
      g && /* @__PURE__ */ S("div", { style: b.success, children: [
        /* @__PURE__ */ l("span", { children: "✓" }),
        "Template saved successfully!"
      ] }),
      /* @__PURE__ */ S("div", { style: b.formGroup, children: [
        /* @__PURE__ */ l("label", { style: b.label, children: "Template Name" }),
        /* @__PURE__ */ l(
          "input",
          {
            ref: s,
            type: "text",
            placeholder: "Enter template name...",
            value: a,
            onChange: (k) => e(k.target.value),
            style: b.input,
            disabled: g
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { style: b.formGroup, children: [
        /* @__PURE__ */ l("label", { style: b.label, children: "Description" }),
        /* @__PURE__ */ l(
          "textarea",
          {
            placeholder: "Describe what this template is for...",
            value: c,
            onChange: (k) => h(k.target.value),
            style: b.textarea,
            disabled: g
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { style: b.formGroup, children: [
        /* @__PURE__ */ l("label", { style: b.label, children: "Category" }),
        /* @__PURE__ */ l(
          "select",
          {
            value: d,
            onChange: (k) => p(k.target.value),
            style: b.select,
            disabled: g,
            children: Object.values(ee).map((k) => /* @__PURE__ */ l("option", { value: k, children: k }, k))
          }
        )
      ] }),
      /* @__PURE__ */ S("div", { style: b.formGroup, children: [
        /* @__PURE__ */ l("label", { style: b.label, children: "Diagram Type" }),
        /* @__PURE__ */ S("div", { style: b.typeInfo, children: [
          /* @__PURE__ */ l("span", { style: b.typeLabel, children: "This template will be saved as:" }),
          /* @__PURE__ */ l("span", { style: b.typeBadge, children: r })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: b.footer, children: [
      /* @__PURE__ */ l(
        "button",
        {
          style: b.button(!1),
          onClick: t,
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          style: b.button(!0),
          onClick: x,
          disabled: g,
          children: g ? "Saved!" : "Save Template"
        }
      )
    ] })
  ] }) });
}
const dc = {
  purple: "#7C3AED",
  green: "#10B981"
};
function _r({
  label: i,
  icon: t,
  items: r,
  theme: n,
  color: o = dc.purple,
  disabled: a = !1,
  showCaret: e = !0
}) {
  const [c, h] = Y(!1), d = _e(null), p = (n == null ? void 0 : n.name) === "dark";
  se(() => {
    function x(b) {
      d.current && !d.current.contains(b.target) && h(!1);
    }
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []);
  const f = (x) => {
    x.onClick && !x.disabled && (x.onClick(), h(!1));
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
      background: c ? `${o}30` : `${o}20`,
      border: `1px solid ${c ? o : `${o}50`}`,
      borderRadius: 6,
      color: o,
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
      transform: c ? "rotate(180deg)" : "rotate(0deg)"
    },
    dropdown: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      minWidth: "180px",
      background: p ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
      border: `1px solid ${p ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)"}`,
      borderRadius: 8,
      boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
      zIndex: 1e3,
      overflow: "hidden",
      backdropFilter: "blur(10px)"
    },
    section: {
      padding: "6px 0",
      borderBottom: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
    },
    sectionLast: {
      padding: "6px 0"
    },
    sectionLabel: {
      padding: "4px 12px",
      fontSize: "0.7rem",
      fontWeight: 600,
      color: p ? "#666" : "#94a3b8",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    item: (x, b) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 12px",
      fontSize: "0.85rem",
      color: x.disabled ? p ? "#555" : "#cbd5e1" : p ? "#e2e8f0" : "#334155",
      cursor: x.disabled ? "not-allowed" : "pointer",
      background: b && !x.disabled ? p ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)" : "transparent",
      opacity: x.disabled ? 0.5 : 1,
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
      color: p ? "#666" : "#94a3b8",
      marginTop: "2px"
    },
    itemShortcut: {
      fontSize: "0.7rem",
      color: p ? "#555" : "#94a3b8",
      fontFamily: "monospace",
      background: p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      padding: "2px 5px",
      borderRadius: 3
    },
    itemBadge: (x) => ({
      fontSize: "0.65rem",
      padding: "2px 6px",
      background: `${x}20`,
      color: x,
      borderRadius: 4,
      fontWeight: 600
    }),
    divider: {
      height: 1,
      background: p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      margin: "4px 0"
    }
  }, g = [];
  let y = { label: null, items: [] };
  r.forEach((x, b) => {
    x.type === "divider" ? y.items.length > 0 && (g.push(y), y = { label: null, items: [] }) : x.type === "section" ? (y.items.length > 0 && g.push(y), y = { label: x.label, items: [] }) : y.items.push(x);
  }), y.items.length > 0 && g.push(y);
  const [s, u] = Y(null);
  return /* @__PURE__ */ S("div", { ref: d, style: m.container, children: [
    /* @__PURE__ */ S(
      "button",
      {
        style: m.button,
        onClick: () => !a && h(!c),
        onMouseEnter: (x) => {
          a || (x.currentTarget.style.background = `${o}30`);
        },
        onMouseLeave: (x) => {
          !a && !c && (x.currentTarget.style.background = `${o}20`);
        },
        children: [
          t && /* @__PURE__ */ l("span", { children: t }),
          /* @__PURE__ */ l("span", { children: i }),
          e && /* @__PURE__ */ l("span", { style: m.caret, children: "▼" })
        ]
      }
    ),
    c && /* @__PURE__ */ l("div", { style: m.dropdown, children: g.map((x, b) => /* @__PURE__ */ S(
      "div",
      {
        style: b < g.length - 1 ? m.section : m.sectionLast,
        children: [
          x.label && /* @__PURE__ */ l("div", { style: m.sectionLabel, children: x.label }),
          x.items.map((k, w) => /* @__PURE__ */ S(
            "div",
            {
              style: m.item(k, s === `${b}-${w}`),
              onClick: () => f(k),
              onMouseEnter: () => u(`${b}-${w}`),
              onMouseLeave: () => u(null),
              children: [
                k.icon && /* @__PURE__ */ l("span", { style: m.itemIcon, children: k.icon }),
                /* @__PURE__ */ S("div", { style: m.itemContent, children: [
                  /* @__PURE__ */ l("span", { style: m.itemLabel, children: k.label }),
                  k.description && /* @__PURE__ */ l("span", { style: m.itemDescription, children: k.description })
                ] }),
                k.shortcut && /* @__PURE__ */ l("span", { style: m.itemShortcut, children: k.shortcut }),
                k.badge && /* @__PURE__ */ l("span", { style: m.itemBadge(k.badgeColor || dc.purple), children: k.badge }),
                k.active && /* @__PURE__ */ l("span", { style: { color: dc.green }, children: "✓" })
              ]
            },
            w
          ))
        ]
      },
      b
    )) })
  ] });
}
const lt = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  pink: "#EC4899",
  cyan: "#06B6D4"
}, K1 = {
  "Flow & Process": {
    icon: "🔀",
    color: lt.blue,
    types: ["flowchart", "activity", "state", "journey", "swimlane", "sankey"]
  },
  Architecture: {
    icon: "🏗️",
    color: lt.purple,
    types: ["architecture", "deployment", "component", "c4", "network"]
  },
  "Data & Structure": {
    icon: "📊",
    color: lt.green,
    types: ["erd", "class", "mindmap", "orgchart"]
  },
  Planning: {
    icon: "📅",
    color: lt.orange,
    types: ["gantt", "timeline", "requirement"]
  },
  Interaction: {
    icon: "🔄",
    color: lt.cyan,
    types: ["sequence", "usecase"]
  },
  Visualization: {
    icon: "📈",
    color: lt.pink,
    types: ["pie", "quadrant", "wireframe", "git"]
  }
}, Vh = {
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
function Q1({ activeType: i, onTypeChange: t, theme: r }) {
  const [n, o] = Y(!1), [a, e] = Y(null), c = _e(null), h = (r == null ? void 0 : r.name) === "dark";
  se(() => {
    function m(g) {
      c.current && !c.current.contains(g.target) && o(!1);
    }
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const d = Vh[i] || { icon: "📄", name: i }, p = {
    container: {
      position: "relative"
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 12px",
      background: n ? h ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)" : h ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.1)",
      border: `1px solid ${n ? lt.purple : "rgba(124,58,237,0.3)"}`,
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
      border: m ? `1px solid ${lt.purple}` : "1px solid transparent",
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
      color: m ? lt.purple : h ? "#e2e8f0" : "#334155",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }),
    typeDesc: {
      fontSize: "0.7rem",
      color: h ? "#666" : "#94a3b8"
    },
    checkmark: {
      color: lt.green,
      fontSize: "0.8rem"
    }
  }, f = Object.entries(K1);
  return /* @__PURE__ */ S("div", { ref: c, style: p.container, children: [
    /* @__PURE__ */ S(
      "div",
      {
        style: p.trigger,
        onClick: () => o(!n),
        onMouseEnter: (m) => {
          n || (m.currentTarget.style.background = h ? "rgba(124,58,237,0.25)" : "rgba(124,58,237,0.15)");
        },
        onMouseLeave: (m) => {
          n || (m.currentTarget.style.background = h ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.1)");
        },
        children: [
          /* @__PURE__ */ l("span", { style: p.triggerIcon, children: d.icon }),
          /* @__PURE__ */ S("div", { children: [
            /* @__PURE__ */ l("div", { style: p.triggerText, children: d.name }),
            /* @__PURE__ */ l("div", { style: p.triggerDesc, children: d.desc })
          ] }),
          /* @__PURE__ */ l("span", { style: p.caret, children: "▼" })
        ]
      }
    ),
    n && /* @__PURE__ */ l("div", { style: p.dropdown, children: f.map(([m, g], y) => /* @__PURE__ */ S(
      "div",
      {
        style: y < f.length - 1 ? p.category : p.categoryLast,
        children: [
          /* @__PURE__ */ S("div", { style: p.categoryHeader(g.color), children: [
            /* @__PURE__ */ l("span", { children: g.icon }),
            /* @__PURE__ */ l("span", { children: m })
          ] }),
          /* @__PURE__ */ l("div", { style: p.typeGrid, children: g.types.map((s) => {
            const u = Vh[s], x = s === i, b = a === s;
            return /* @__PURE__ */ S(
              "div",
              {
                style: p.typeItem(x, b),
                onClick: () => {
                  t(s), o(!1);
                },
                onMouseEnter: () => e(s),
                onMouseLeave: () => e(null),
                children: [
                  /* @__PURE__ */ l("span", { style: p.typeIcon, children: u.icon }),
                  /* @__PURE__ */ S("div", { style: p.typeContent, children: [
                    /* @__PURE__ */ l("div", { style: p.typeName(x), children: u.name }),
                    /* @__PURE__ */ l("div", { style: p.typeDesc, children: u.desc })
                  ] }),
                  x && /* @__PURE__ */ l("span", { style: p.checkmark, children: "✓" })
                ]
              },
              s
            );
          }) })
        ]
      },
      m
    )) })
  ] });
}
const K = {
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
}, Z1 = {
  flowchart: {
    name: "Flowchart",
    categories: [
      {
        name: "Flow Control",
        nodes: [
          { type: "start", icon: "▶️", label: "Start", color: K.green, dsl: "(start) Start" },
          { type: "end", icon: "⏹️", label: "End", color: K.red, dsl: "(end) End" },
          { type: "decision", icon: "◇", label: "Decision", color: K.orange, dsl: "(decision) Decision?" }
        ]
      },
      {
        name: "Actions",
        nodes: [
          { type: "process", icon: "⬜", label: "Process", color: K.blue, dsl: "(process) Process" },
          { type: "action", icon: "⚡", label: "Action", color: K.purple, dsl: "(action) Action" },
          { type: "io", icon: "▱", label: "Input/Output", color: K.cyan, dsl: "(io) Input/Output" }
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
          { type: "clients", icon: "👥", label: "Client", color: K.pink, dsl: "[clients] Client" },
          { type: "gateway", icon: "🚪", label: "Gateway", color: K.orange, dsl: "[gateway] API Gateway" }
        ]
      },
      {
        name: "Backend",
        nodes: [
          { type: "services", icon: "⚙️", label: "Service", color: K.blue, dsl: "[services] Service" },
          { type: "data", icon: "🗄️", label: "Database", color: K.emerald, dsl: "[data] Database" },
          { type: "cache", icon: "⚡", label: "Cache", color: K.red, dsl: "[cache] Redis" },
          { type: "queue", icon: "📨", label: "Queue", color: K.amber, dsl: "[queue] Message Queue" },
          { type: "storage", icon: "📦", label: "Storage", color: K.teal, dsl: "[storage] S3 Bucket" }
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
          { type: "actor", icon: "👤", label: "Actor", color: K.pink, dsl: "[actor] User" },
          { type: "user", icon: "🧑", label: "User", color: K.pink, dsl: "[user] Customer" }
        ]
      },
      {
        name: "Touchpoints",
        nodes: [
          { type: "page", icon: "📱", label: "Page", color: K.cyan, dsl: "[page] Landing Page" },
          { type: "screen", icon: "🖥️", label: "Screen", color: K.cyan, dsl: "[screen] Dashboard" },
          { type: "action", icon: "👆", label: "Action", color: K.purple, dsl: "[action] Click Button" },
          { type: "form", icon: "📝", label: "Form", color: K.orange, dsl: "[form] Sign Up Form" }
        ]
      },
      {
        name: "Communication",
        nodes: [
          { type: "email", icon: "✉️", label: "Email", color: K.amber, dsl: "[email] Welcome Email" },
          { type: "notification", icon: "🔔", label: "Notification", color: K.red, dsl: "[notification] Alert" }
        ]
      },
      {
        name: "Outcomes",
        nodes: [
          { type: "success", icon: "✅", label: "Success", color: K.green, dsl: "[success] Completed" },
          { type: "error", icon: "❌", label: "Error", color: K.red, dsl: "[error] Failed" },
          { type: "milestone", icon: "🎯", label: "Milestone", color: K.green, dsl: "[milestone] Goal Reached" },
          { type: "decision", icon: "❓", label: "Decision", color: K.orange, dsl: "[decision] Choose Path" }
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
          { type: "initial", icon: "▶️", label: "Initial", color: K.green, dsl: "(initial) Initial" },
          { type: "state", icon: "⬜", label: "State", color: K.blue, dsl: "State" },
          { type: "final", icon: "⏹️", label: "Final", color: K.red, dsl: "(final) Final" }
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
          { type: "table", icon: "📋", label: "Table", color: K.blue, dsl: `CREATE TABLE table_name (
  id UUID PRIMARY KEY,
  name VARCHAR(255)
);` },
          { type: "pk", icon: "🔑", label: "Primary Key", color: K.amber, dsl: "  id UUID PRIMARY KEY," },
          { type: "fk", icon: "🔗", label: "Foreign Key", color: K.purple, dsl: "  ref_id UUID REFERENCES other_table(id)," },
          { type: "column", icon: "▪️", label: "Column", color: K.cyan, dsl: "  column_name VARCHAR(255)," }
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
          { type: "participant", icon: "👤", label: "Participant", color: K.blue, dsl: "participant Actor" }
        ]
      },
      {
        name: "Messages",
        nodes: [
          { type: "request", icon: "➡️", label: "Request", color: K.green, dsl: "A -> B: Request" },
          { type: "response", icon: "⬅️", label: "Response", color: K.orange, dsl: "B --> A: Response" }
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
          { type: "root", icon: "🌳", label: "Root", color: K.purple, dsl: "Root Topic" },
          { type: "branch", icon: "🌿", label: "Branch", color: K.blue, dsl: "  Branch" },
          { type: "leaf", icon: "🍃", label: "Leaf", color: K.green, dsl: "    Leaf" }
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
          { type: "class", icon: "📦", label: "Class", color: K.blue, dsl: `class ClassName
  + property: type
  + method(): void` },
          { type: "interface", icon: "📄", label: "Interface", color: K.purple, dsl: `interface IName
  + method(): void` }
        ]
      },
      {
        name: "Members",
        nodes: [
          { type: "public", icon: "➕", label: "Public", color: K.green, dsl: "  + publicMember: type" },
          { type: "private", icon: "➖", label: "Private", color: K.red, dsl: "  - privateMember: type" },
          { type: "protected", icon: "#️⃣", label: "Protected", color: K.orange, dsl: "  # protectedMember: type" }
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
          { type: "cloud", icon: "☁️", label: "Cloud", color: K.sky, dsl: "[cloud] AWS" },
          { type: "cluster", icon: "🔷", label: "Cluster", color: K.teal, dsl: "  [cluster] Kubernetes" },
          { type: "container", icon: "📦", label: "Container", color: K.cyan, dsl: "    [container] Service" }
        ]
      },
      {
        name: "Data",
        nodes: [
          { type: "database", icon: "🗄️", label: "Database", color: K.green, dsl: "  [database] PostgreSQL" },
          { type: "storage", icon: "💾", label: "Storage", color: K.emerald, dsl: "  [storage] S3" }
        ]
      },
      {
        name: "Clients",
        nodes: [
          { type: "device", icon: "💻", label: "Device", color: K.pink, dsl: "[device] Browser" },
          { type: "server", icon: "🖥️", label: "Server", color: K.violet, dsl: "[server] Web Server" }
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
          { type: "cloud", icon: "☁️", label: "Cloud", color: K.sky, dsl: "[cloud] Internet" },
          { type: "firewall", icon: "🛡️", label: "Firewall", color: K.red, dsl: "[firewall] Firewall (10.0.0.1)" },
          { type: "router", icon: "📡", label: "Router", color: K.orange, dsl: "[router] Router (10.0.0.2)" },
          { type: "switch", icon: "🔀", label: "Switch", color: K.blue, dsl: "[switch] Switch (10.0.0.3)" },
          { type: "server", icon: "🖥️", label: "Server", color: K.purple, dsl: "[server] Server (10.0.0.10)" },
          { type: "computer", icon: "💻", label: "Computer", color: K.green, dsl: "[computer] Workstation" }
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
          { type: "actor", icon: "👤", label: "Actor", color: K.blue, dsl: "actor User" },
          { type: "usecase", icon: "⭕", label: "Use Case", color: K.purple, dsl: "(Use Case Name)" }
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
          { type: "component", icon: "🧩", label: "Component", color: K.purple, dsl: "[component] Component" },
          { type: "service", icon: "⚙️", label: "Service", color: K.blue, dsl: "[service] Service" },
          { type: "api", icon: "🔌", label: "API", color: K.orange, dsl: "[api] API Gateway" },
          { type: "database", icon: "🗄️", label: "Database", color: K.green, dsl: "[database] Database" },
          { type: "cache", icon: "⚡", label: "Cache", color: K.red, dsl: "[cache] Redis" }
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
          { type: "person", icon: "👤", label: "Person", color: K.blue, dsl: "[person] User: Description" },
          { type: "system", icon: "🏢", label: "System", color: K.purple, dsl: "[system] System: Description" },
          { type: "container", icon: "📦", label: "Container", color: K.cyan, dsl: "[container] Container: Description" },
          { type: "component", icon: "🧩", label: "Component", color: K.green, dsl: "[component] Component: Description" },
          { type: "external", icon: "🌐", label: "External", color: K.orange, dsl: "[external] External: Description" }
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
          { type: "start", icon: "▶️", label: "Start", color: K.green, dsl: "[start]" },
          { type: "end", icon: "⏹️", label: "End", color: K.red, dsl: "[end]" },
          { type: "decision", icon: "◇", label: "Decision", color: K.orange, dsl: "<Decision?>" }
        ]
      },
      {
        name: "Actions",
        nodes: [
          { type: "action", icon: "⬜", label: "Action", color: K.blue, dsl: ":Action;" }
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
          { type: "task", icon: "📋", label: "Task", color: K.blue, dsl: "Task Name, 0, 3" },
          { type: "milestone", icon: "🎯", label: "Milestone", color: K.green, dsl: "Milestone, 5, 0" }
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
          { type: "event", icon: "📅", label: "Event", color: K.blue, dsl: "[Date] Event Title | Description" },
          { type: "milestone", icon: "⭐", label: "Milestone", color: K.green, dsl: "[Date] *Milestone | Description" }
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
          { type: "window", icon: "🪟", label: "Window", color: K.blue, dsl: "{Window Title}" },
          { type: "navbar", icon: "📊", label: "Navbar", color: K.purple, dsl: "[[ Home | About | Contact ]]" },
          { type: "tabs", icon: "📑", label: "Tabs", color: K.cyan, dsl: "(( Tab1 | Tab2 | Tab3 ))" },
          { type: "card", icon: "🃏", label: "Card", color: K.orange, dsl: `<Card Title>
Content here
</Card>` }
        ]
      },
      {
        name: "Elements",
        nodes: [
          { type: "button", icon: "🔘", label: "Button", color: K.green, dsl: "[Button Text]" },
          { type: "input", icon: "📝", label: "Input", color: K.blue, dsl: "[text: Placeholder...]" },
          { type: "search", icon: "🔍", label: "Search", color: K.purple, dsl: "[search: Search...]" },
          { type: "dropdown", icon: "📋", label: "Dropdown", color: K.orange, dsl: "[v Select Option]" }
        ]
      },
      {
        name: "Content",
        nodes: [
          { type: "heading", icon: "📰", label: "Heading", color: K.blue, dsl: "# Heading Text" },
          { type: "divider", icon: "➖", label: "Divider", color: K.cyan, dsl: "---" },
          { type: "table", icon: "📊", label: "Table", color: K.purple, dsl: `|Col1|Col2|Col3|
|Data|Data|Data|` },
          { type: "progress", icon: "📊", label: "Progress", color: K.green, dsl: "[progress: 75%]" }
        ]
      }
    ]
  }
}, J1 = {
  name: "Generic",
  categories: [
    {
      name: "Basic",
      nodes: [
        { type: "node", icon: "⬜", label: "Node", color: K.blue, dsl: "Node" }
      ]
    }
  ]
};
function ev({ isOpen: i, diagramType: t, onDragStart: r, onClose: n, onAddNode: o, theme: a }) {
  const [e, c] = Y(""), [h, d] = Y({}), p = (a == null ? void 0 : a.name) === "dark", f = Z1[t] || J1, m = ge(() => {
    if (!e.trim()) return f.categories;
    const x = e.toLowerCase();
    return f.categories.map((b) => ({
      ...b,
      nodes: b.nodes.filter(
        (k) => k.label.toLowerCase().includes(x) || k.type.toLowerCase().includes(x)
      )
    })).filter((b) => b.nodes.length > 0);
  }, [f.categories, e]), g = (x) => {
    d((b) => ({
      ...b,
      [x]: !b[x]
    }));
  }, y = (x, b) => {
    x.dataTransfer.setData("text/plain", b.dsl), x.dataTransfer.effectAllowed = "copy", r && r(b);
  }, s = (x) => {
    o && o(x.dsl);
  };
  if (!i) return null;
  const u = {
    sidebar: {
      position: "fixed",
      left: 0,
      top: 105,
      // Below header and toolbar
      width: 260,
      height: "calc(100vh - 105px)",
      background: p ? "linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
      borderRight: `1px solid ${p ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)"}`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      zIndex: 100,
      boxShadow: "4px 0 20px rgba(0,0,0,0.2)"
    },
    header: {
      padding: "12px 14px",
      borderBottom: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: p ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.05)"
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
      color: p ? "#fff" : "#1e293b"
    },
    subtitle: {
      fontSize: "0.65rem",
      color: p ? "#888" : "#64748b"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: p ? "#888" : "#64748b",
      cursor: "pointer",
      fontSize: "1rem",
      padding: 4,
      borderRadius: 4
    },
    search: {
      padding: "10px 14px",
      borderBottom: `1px solid ${p ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
    },
    searchInput: {
      width: "100%",
      padding: "8px 12px",
      background: p ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      borderRadius: 6,
      color: p ? "#fff" : "#1e293b",
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
      color: p ? "#aaa" : "#64748b",
      fontSize: "0.7rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    categoryArrow: (x) => ({
      transition: "transform 0.2s",
      transform: x ? "rotate(90deg)" : "rotate(0deg)",
      fontSize: "0.6rem"
    }),
    nodesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 6,
      padding: "4px 10px 12px"
    },
    nodeItem: (x) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px 6px",
      background: p ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.03)",
      border: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
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
      color: p ? "#ccc" : "#334155",
      textAlign: "center",
      fontWeight: 500
    },
    emptyState: {
      padding: "20px 14px",
      textAlign: "center",
      color: p ? "#666" : "#94a3b8",
      fontSize: "0.75rem"
    },
    tip: {
      padding: "10px 14px",
      borderTop: `1px solid ${p ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`,
      background: p ? "rgba(124,58,237,0.05)" : "rgba(124,58,237,0.03)"
    },
    tipText: {
      fontSize: "0.65rem",
      color: p ? "#888" : "#64748b",
      textAlign: "center"
    }
  };
  return /* @__PURE__ */ S("div", { style: u.sidebar, children: [
    /* @__PURE__ */ S("div", { style: u.header, children: [
      /* @__PURE__ */ S("div", { style: u.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: u.headerIcon, children: "🧩" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: u.title, children: "Node Library" }),
          /* @__PURE__ */ l("div", { style: u.subtitle, children: f.name })
        ] })
      ] }),
      /* @__PURE__ */ l("button", { style: u.closeBtn, onClick: n, title: "Close library", children: "✕" })
    ] }),
    /* @__PURE__ */ l("div", { style: u.search, children: /* @__PURE__ */ l(
      "input",
      {
        type: "text",
        placeholder: "Search nodes...",
        value: e,
        onChange: (x) => c(x.target.value),
        style: u.searchInput
      }
    ) }),
    /* @__PURE__ */ l("div", { style: u.content, children: m.length === 0 ? /* @__PURE__ */ l("div", { style: u.emptyState, children: "No nodes match your search" }) : m.map((x) => {
      const b = h[x.name] !== !1;
      return /* @__PURE__ */ S("div", { style: u.category, children: [
        /* @__PURE__ */ S(
          "div",
          {
            style: u.categoryHeader,
            onClick: () => g(x.name),
            children: [
              /* @__PURE__ */ l("span", { style: u.categoryArrow(b), children: "▶" }),
              /* @__PURE__ */ l("span", { children: x.name }),
              /* @__PURE__ */ l("span", { style: { marginLeft: "auto", opacity: 0.6 }, children: x.nodes.length })
            ]
          }
        ),
        b && /* @__PURE__ */ l("div", { style: u.nodesGrid, children: x.nodes.map((k) => /* @__PURE__ */ S(
          "div",
          {
            style: u.nodeItem(k.color),
            draggable: !0,
            onClick: () => s(k),
            onDragStart: (w) => y(w, k),
            onMouseEnter: (w) => {
              w.currentTarget.style.borderColor = k.color, w.currentTarget.style.transform = "translateY(-2px)", w.currentTarget.style.boxShadow = `0 4px 12px ${k.color}30`;
            },
            onMouseLeave: (w) => {
              w.currentTarget.style.borderColor = p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)", w.currentTarget.style.transform = "none", w.currentTarget.style.boxShadow = "none";
            },
            title: `Click or drag to add ${k.label}`,
            children: [
              /* @__PURE__ */ l("span", { style: u.nodeIcon, children: k.icon }),
              /* @__PURE__ */ l("span", { style: u.nodeLabel, children: k.label })
            ]
          },
          k.type
        )) })
      ] }, x.name);
    }) }),
    /* @__PURE__ */ l("div", { style: u.tip, children: /* @__PURE__ */ l("div", { style: u.tipText, children: "Click or drag nodes to add them to your diagram" }) })
  ] });
}
const ht = {
  CURRENT_DIAGRAM: "ddflow_current_diagram",
  RECENT_FILES: "ddflow_recent_files",
  AUTO_SAVE_ENABLED: "ddflow_autosave_enabled",
  COLOR_SETTINGS: "ddflow_color_settings"
}, tv = 10;
function rv() {
  try {
    const i = localStorage.getItem(ht.CURRENT_DIAGRAM);
    if (i)
      return JSON.parse(i);
  } catch (i) {
    console.error("Failed to load diagram from localStorage:", i);
  }
  return null;
}
function Xh(i, t, r = "Untitled Diagram") {
  try {
    const n = {
      type: i,
      source: t,
      name: r,
      savedAt: (/* @__PURE__ */ new Date()).toISOString(),
      version: "1.0"
    };
    return localStorage.setItem(ht.CURRENT_DIAGRAM, JSON.stringify(n)), !0;
  } catch (n) {
    return console.error("Failed to save diagram to localStorage:", n), !1;
  }
}
function qc() {
  try {
    const i = localStorage.getItem(ht.RECENT_FILES);
    if (i)
      return JSON.parse(i);
  } catch (i) {
    console.error("Failed to load recent files:", i);
  }
  return [];
}
function mg(i) {
  try {
    let t = qc();
    t = t.filter((r) => r.name !== i.name), t.unshift({
      ...i,
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    }), t = t.slice(0, tv), localStorage.setItem(ht.RECENT_FILES, JSON.stringify(t));
  } catch (t) {
    console.error("Failed to add to recent files:", t);
  }
}
function nv(i) {
  try {
    let t = qc();
    t = t.filter((r) => r.name !== i), localStorage.setItem(ht.RECENT_FILES, JSON.stringify(t));
  } catch (t) {
    console.error("Failed to remove from recent files:", t);
  }
}
function iv(i, t, r = "diagram") {
  const n = {
    type: i,
    source: t,
    name: r,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    version: "1.0",
    format: "ddflow"
  }, o = JSON.stringify(n, null, 2), a = new Blob([o], { type: "application/json" }), e = URL.createObjectURL(a), c = document.createElement("a");
  c.href = e, c.download = `${r}.ddflow`, c.style.display = "none", document.body.appendChild(c), c.click(), document.body.removeChild(c), setTimeout(() => URL.revokeObjectURL(e), 100), mg({ name: r, type: i, source: t });
}
function ov() {
  return new Promise((i, t) => {
    const r = document.createElement("input");
    r.type = "file", r.accept = ".ddflow,.json", r.style.display = "none", r.onchange = async (n) => {
      var a;
      const o = (a = n.target.files) == null ? void 0 : a[0];
      if (!o) {
        t(new Error("No file selected"));
        return;
      }
      try {
        const e = await o.text(), c = JSON.parse(e);
        if (!c.type || !c.source)
          throw new Error("Invalid diagram file: missing type or source");
        c.name || (c.name = o.name.replace(/\.(ddflow|json)$/i, "")), mg({
          name: c.name,
          type: c.type,
          source: c.source
        }), i(c);
      } catch (e) {
        t(new Error(`Failed to parse file: ${e.message}`));
      }
    }, r.onerror = () => {
      t(new Error("Failed to open file"));
    }, document.body.appendChild(r), r.click(), document.body.removeChild(r);
  });
}
function av() {
  try {
    return localStorage.getItem(ht.AUTO_SAVE_ENABLED) !== "false";
  } catch {
    return !0;
  }
}
function sv(i) {
  try {
    localStorage.setItem(ht.AUTO_SAVE_ENABLED, String(i));
  } catch (t) {
    console.error("Failed to save auto-save setting:", t);
  }
}
function cv(i) {
  try {
    const t = new Date(i), n = /* @__PURE__ */ new Date() - t, o = Math.floor(n / 6e4), a = Math.floor(n / 36e5), e = Math.floor(n / 864e5);
    return o < 1 ? "Just now" : o < 60 ? `${o}m ago` : a < 24 ? `${a}h ago` : e < 7 ? `${e}d ago` : t.toLocaleDateString();
  } catch {
    return "Unknown";
  }
}
const zr = {
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
}, uc = {
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
function yg() {
  try {
    const i = localStorage.getItem(ht.COLOR_SETTINGS);
    if (i)
      return { ...zr, ...JSON.parse(i) };
  } catch (i) {
    console.error("Failed to load color settings:", i);
  }
  return { ...zr };
}
function lv(i) {
  try {
    return localStorage.setItem(ht.COLOR_SETTINGS, JSON.stringify(i)), !0;
  } catch (t) {
    return console.error("Failed to save color settings:", t), !1;
  }
}
function dv() {
  try {
    localStorage.removeItem(ht.COLOR_SETTINGS);
  } catch (i) {
    console.error("Failed to reset color settings:", i);
  }
}
function uv({ isOpen: i, onClose: t, onApply: r, theme: n }) {
  const [o, a] = Y(() => yg()), [e, c] = Y(null), h = (n == null ? void 0 : n.name) === "dark";
  se(() => {
    const s = Object.entries(uc).find(
      ([u, x]) => x.accentPrimary === o.accentPrimary && x.accentSecondary === o.accentSecondary
    );
    c(s ? s[0] : null);
  }, [o]);
  const d = (s) => {
    const u = uc[s], x = {
      ...o,
      accentPrimary: u.accentPrimary,
      accentSecondary: u.accentSecondary
    };
    a(x);
  }, p = (s, u) => {
    a((x) => ({ ...x, [s]: u }));
  }, f = () => {
    lv(o), r && r(o), t();
  }, m = () => {
    dv(), a({ ...zr }), r && r(zr);
  };
  if (!i) return null;
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
      background: `${o.accentPrimary}15`
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
    presetItem: (s, u) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "12px 8px",
      background: s ? `${u}20` : h ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `2px solid ${s ? u : "transparent"}`,
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
    previewItem: (s) => ({
      padding: "6px 12px",
      background: `${s}20`,
      border: `1px solid ${s}`,
      borderRadius: 6,
      color: s,
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
      background: `linear-gradient(135deg, ${o.accentPrimary}, ${o.accentSecondary})`,
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
  return /* @__PURE__ */ l("div", { style: g.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: g.modal, onClick: (s) => s.stopPropagation(), children: [
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
        /* @__PURE__ */ l("div", { style: g.presetsGrid, children: Object.entries(uc).map(([s, u]) => /* @__PURE__ */ S(
          "div",
          {
            style: g.presetItem(e === s, u.accentPrimary),
            onClick: () => d(s),
            onMouseEnter: (x) => {
              e !== s && (x.currentTarget.style.borderColor = u.accentPrimary + "50");
            },
            onMouseLeave: (x) => {
              e !== s && (x.currentTarget.style.borderColor = "transparent");
            },
            children: [
              /* @__PURE__ */ l("span", { style: g.presetIcon, children: u.icon }),
              /* @__PURE__ */ l("span", { style: g.presetName, children: u.name.split(" ")[0] })
            ]
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ S("div", { style: g.section, children: [
        /* @__PURE__ */ l("div", { style: g.sectionTitle, children: "Custom Colors" }),
        y.map(({ key: s, name: u, desc: x }) => /* @__PURE__ */ S("div", { style: g.colorRow, children: [
          /* @__PURE__ */ S("div", { style: g.colorLabel, children: [
            /* @__PURE__ */ l("span", { style: g.colorName, children: u }),
            /* @__PURE__ */ l("span", { style: g.colorDesc, children: x })
          ] }),
          /* @__PURE__ */ S("div", { style: g.colorInput, children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "color",
                value: o[s],
                onChange: (b) => p(s, b.target.value),
                style: g.colorPicker
              }
            ),
            /* @__PURE__ */ l("span", { style: g.colorHex, children: o[s] })
          ] })
        ] }, s))
      ] }),
      /* @__PURE__ */ S("div", { style: g.section, children: [
        /* @__PURE__ */ l("div", { style: g.sectionTitle, children: "Preview" }),
        /* @__PURE__ */ S("div", { style: g.preview, children: [
          /* @__PURE__ */ l("span", { style: g.previewItem(o.accentPrimary), children: "Primary" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(o.accentSecondary), children: "Secondary" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(o.selection), children: "Selected" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(o.success), children: "Success" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(o.warning), children: "Warning" }),
          /* @__PURE__ */ l("span", { style: g.previewItem(o.error), children: "Error" })
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
const $e = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  red: "#EF4444",
  indigo: "#6366F1"
}, pv = 10 * 1024 * 1024, Kh = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"];
function hv({ isOpen: i, onClose: t, onImport: r, theme: n }) {
  const [o, a] = Y(null), [e, c] = Y(!1), [h, d] = Y(!1), [p, f] = Y(null), [m, g] = Y(null), y = _e(null), s = _e(null), u = (n == null ? void 0 : n.name) === "dark";
  se(() => {
    i || (a(null), f(null), g(null), d(!1));
  }, [i]), se(() => {
    if (!i) return;
    const L = async (j) => {
      var X;
      const q = (X = j.clipboardData) == null ? void 0 : X.items;
      if (q) {
        for (const re of q)
          if (re.type.startsWith("image/")) {
            j.preventDefault();
            const oe = re.getAsFile();
            oe && await x(oe);
            break;
          }
      }
    };
    return document.addEventListener("paste", L), () => document.removeEventListener("paste", L);
  }, [i]);
  const x = async (L) => {
    if (g(null), f(null), !Kh.includes(L.type)) {
      g(`Unsupported file type: ${L.type}. Please use PNG, JPG, WEBP, or GIF.`);
      return;
    }
    if (L.size > pv) {
      g(`File too large (${(L.size / 1024 / 1024).toFixed(1)}MB). Maximum size is 10MB.`);
      return;
    }
    const j = new FileReader();
    j.onload = (q) => {
      const X = q.target.result, re = X.split(",")[1];
      a({
        base64: re,
        mimeType: L.type,
        name: L.name,
        size: L.size,
        preview: X
      });
    }, j.onerror = () => {
      g("Failed to read file. Please try again.");
    }, j.readAsDataURL(L);
  }, b = H((L) => {
    L.preventDefault(), L.stopPropagation(), c(!0);
  }, []), k = H((L) => {
    L.preventDefault(), L.stopPropagation(), c(!1);
  }, []), w = H(async (L) => {
    var q;
    L.preventDefault(), L.stopPropagation(), c(!1);
    const j = (q = L.dataTransfer) == null ? void 0 : q.files;
    j && j.length > 0 && await x(j[0]);
  }, []), C = async (L) => {
    var q;
    const j = (q = L.target.files) == null ? void 0 : q[0];
    j && await x(j);
  }, [$, E] = Y(null), M = async () => {
    if (!(!o || !Ot())) {
      d(!0), g(null), f(null), E(null);
      try {
        const L = await N1(o.base64, o.mimeType);
        f(L), E(L.type);
      } catch (L) {
        g(L.message || "Failed to analyze image. Please try again.");
      } finally {
        d(!1);
      }
    }
  }, _ = () => {
    p && r && r($ || p.type, p.dsl, p.name);
  }, P = (L) => {
    E(L);
  }, A = () => {
    a(null), f(null), g(null), y.current && (y.current.value = "");
  };
  if (!i) return null;
  const W = (L) => L < 1024 ? `${L} B` : L < 1024 * 1024 ? `${(L / 1024).toFixed(1)} KB` : `${(L / 1024 / 1024).toFixed(1)} MB`, B = {
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
      background: (n == null ? void 0 : n.modalBg) || (u ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),
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
      background: `${$e.purple}15`
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
      border: `2px dashed ${e ? $e.purple : u ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
      borderRadius: 12,
      padding: 40,
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.2s",
      background: e ? `${$e.purple}10` : "transparent"
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
      background: `${$e.purple}20`,
      border: `1px solid ${$e.purple}`,
      borderRadius: 8,
      color: $e.purple,
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
      background: u ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
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
      background: u ? "rgba(0,0,0,0.5)" : "#fff"
    },
    analyzeBtn: {
      width: "100%",
      padding: "12px 20px",
      background: `linear-gradient(135deg, ${$e.purple}, ${$e.indigo})`,
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
      background: `${$e.purple}50`,
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
      background: `${$e.red}15`,
      border: `1px solid ${$e.red}40`,
      borderRadius: 8,
      color: $e.red,
      fontSize: "0.85rem"
    },
    result: {
      marginTop: 20,
      padding: 16,
      background: u ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
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
      color: $e.green
    },
    dslPreview: {
      background: (n == null ? void 0 : n.inputBg) || (u ? "rgba(0,0,0,0.4)" : "#fff"),
      padding: 12,
      borderRadius: 8,
      maxHeight: 200,
      overflow: "auto",
      fontFamily: "Monaco, monospace",
      fontSize: "0.75rem",
      color: (n == null ? void 0 : n.editorText) || $e.purple,
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
      background: `linear-gradient(135deg, ${$e.green}, ${$e.blue})`,
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
  return /* @__PURE__ */ l("div", { style: B.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: B.modal, onClick: (L) => L.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: B.header, children: [
      /* @__PURE__ */ S("div", { style: B.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: B.headerIcon, children: "🖼️" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: B.title, children: "Import from Image" }),
          /* @__PURE__ */ l("div", { style: B.subtitle, children: "AI-powered diagram extraction" })
        ] })
      ] }),
      /* @__PURE__ */ l("button", { style: B.closeBtn, onClick: t, children: "✕" })
    ] }),
    /* @__PURE__ */ l("div", { style: B.content, children: Ot() ? /* @__PURE__ */ S(ut, { children: [
      !o && /* @__PURE__ */ S(
        "div",
        {
          ref: s,
          style: B.dropZone,
          onDragOver: b,
          onDragLeave: k,
          onDrop: w,
          onClick: () => {
            var L;
            return (L = y.current) == null ? void 0 : L.click();
          },
          children: [
            /* @__PURE__ */ l("div", { style: B.dropIcon, children: "📸" }),
            /* @__PURE__ */ l("div", { style: B.dropText, children: e ? "Drop image here" : "Drag & drop an image" }),
            /* @__PURE__ */ l("div", { style: B.dropSubtext, children: "or click to browse files" }),
            /* @__PURE__ */ l("button", { style: B.browseBtn, onClick: (L) => {
              var j;
              L.stopPropagation(), (j = y.current) == null || j.click();
            }, children: "Browse Files" }),
            /* @__PURE__ */ l("div", { style: B.pasteHint, children: "💡 Tip: You can also paste an image from clipboard (Ctrl+V / Cmd+V)" }),
            /* @__PURE__ */ l(
              "input",
              {
                ref: y,
                type: "file",
                accept: Kh.join(","),
                onChange: C,
                style: { display: "none" }
              }
            )
          ]
        }
      ),
      o && /* @__PURE__ */ S("div", { style: B.imagePreview, children: [
        /* @__PURE__ */ S("div", { style: B.previewHeader, children: [
          /* @__PURE__ */ S("div", { style: B.previewInfo, children: [
            /* @__PURE__ */ l("span", { style: B.previewName, children: o.name }),
            /* @__PURE__ */ S("span", { style: B.previewSize, children: [
              "(",
              W(o.size),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ l("button", { style: B.clearBtn, onClick: A, children: "Clear" })
        ] }),
        /* @__PURE__ */ l("img", { src: o.preview, alt: "Preview", style: B.previewImage }),
        !p && /* @__PURE__ */ l(
          "button",
          {
            style: h ? B.analyzingBtn : B.analyzeBtn,
            onClick: M,
            disabled: h,
            children: h ? /* @__PURE__ */ S(ut, { children: [
              /* @__PURE__ */ l("span", { children: "⏳" }),
              " Analyzing with AI..."
            ] }) : /* @__PURE__ */ S(ut, { children: [
              /* @__PURE__ */ l("span", { children: "✨" }),
              " Extract Diagram with AI"
            ] })
          }
        )
      ] }),
      m && /* @__PURE__ */ S("div", { style: B.error, children: [
        "❌ ",
        m
      ] }),
      p && /* @__PURE__ */ S("div", { style: B.result, children: [
        /* @__PURE__ */ S("div", { style: B.resultHeader, children: [
          /* @__PURE__ */ l("span", { style: B.resultIcon, children: "✅" }),
          /* @__PURE__ */ l("span", { style: B.resultTitle, children: "Diagram Extracted Successfully" })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginBottom: 12, padding: "8px 12px", background: `${$e.purple}15`, borderRadius: 8, border: `1px solid ${$e.purple}30` }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 4 }, children: "DIAGRAM NAME" }),
          /* @__PURE__ */ l("div", { style: { fontSize: "1rem", fontWeight: 600, color: (n == null ? void 0 : n.textPrimary) || "#fff" }, children: p.name })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 8 }, children: "DIAGRAM TYPE" }),
          /* @__PURE__ */ S("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: [
            /* @__PURE__ */ S(
              "button",
              {
                onClick: () => P(p.type),
                style: {
                  padding: "6px 14px",
                  background: $ === p.type ? `${$e.green}20` : "transparent",
                  border: `2px solid ${$ === p.type ? $e.green : u ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                  borderRadius: 8,
                  color: $ === p.type ? $e.green : (n == null ? void 0 : n.textPrimary) || "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  $ === p.type && /* @__PURE__ */ l("span", { children: "✓" }),
                  p.type,
                  /* @__PURE__ */ l("span", { style: { fontSize: "0.65rem", opacity: 0.7 }, children: "(detected)" })
                ]
              }
            ),
            p.alternatives && p.alternatives.length > 0 && p.alternatives.map((L) => /* @__PURE__ */ S(
              "button",
              {
                onClick: () => P(L),
                style: {
                  padding: "6px 14px",
                  background: $ === L ? `${$e.blue}20` : "transparent",
                  border: `2px solid ${$ === L ? $e.blue : u ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}`,
                  borderRadius: 8,
                  color: $ === L ? $e.blue : (n == null ? void 0 : n.textSecondary) || "#888",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  $ === L && /* @__PURE__ */ l("span", { children: "✓" }),
                  L
                ]
              },
              L
            ))
          ] }),
          p.alternatives && p.alternatives.length > 0 && /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textMuted) || "#666", marginTop: 6 }, children: "💡 Alternative types may render this data differently" })
        ] }),
        /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 6 }, children: "DSL PREVIEW" }),
        /* @__PURE__ */ l("div", { style: B.dslPreview, children: p.dsl })
      ] })
    ] }) : /* @__PURE__ */ S("div", { style: B.notConfigured, children: [
      /* @__PURE__ */ l("div", { style: { fontSize: "3rem", marginBottom: 16 }, children: "⚠️" }),
      /* @__PURE__ */ l("div", { style: { fontSize: "1rem", fontWeight: 500, marginBottom: 8, color: n == null ? void 0 : n.textPrimary }, children: "AI Not Configured" }),
      /* @__PURE__ */ l("div", { style: { fontSize: "0.85rem" }, children: "Please configure your AI provider in the .env file to use this feature." })
    ] }) }),
    /* @__PURE__ */ S("div", { style: B.footer, children: [
      /* @__PURE__ */ l("button", { style: B.cancelBtn, onClick: t, children: "Cancel" }),
      p ? /* @__PURE__ */ l("button", { style: B.applyBtn, onClick: _, children: "Apply Diagram" }) : /* @__PURE__ */ l("button", { style: B.disabledBtn, disabled: !0, children: "Apply Diagram" })
    ] })
  ] }) });
}
function bg(i) {
  const t = i.toLowerCase();
  if (t.includes("@startmindmap") || t.includes("@startwbs")) return "mindmap";
  if (t.includes("@startgantt")) return "gantt";
  if (t.includes("@startjson") || t.includes("@startyaml")) return "unsupported";
  const r = i.replace(/@startuml.*|@enduml.*/gi, "").trim();
  return /\b(Person|System|Container|Component|System_Ext|Container_Ext|Boundary|Enterprise_Boundary|System_Boundary|Container_Boundary)\s*\(/i.test(r) || /\b(Rel|Rel_R|Rel_L|Rel_U|Rel_D)\s*\(/i.test(r) ? "c4" : /\b(node|device|artifact|file|folder|frame|rectangle|card)\s+"?[^"]*"?\s*(<<|as|\{|$)/im.test(r) && /\b(node|device|artifact)\b/i.test(r) ? "deployment" : /\bactor\b/i.test(r) && (/\busecase\b/i.test(r) || /\([^)]+\)/i.test(r)) ? "usecase" : /\b(class|interface|abstract\s+class|enum)\s+\w+/i.test(r) ? "class" : /\[\*\]\s*(-->|->)/.test(r) || /(-->|->)\s*\[\*\]/.test(r) || /\bstate\s+\w+/i.test(r) && !r.includes("component") ? "state" : (/\bparticipant\b/i.test(r) || /\bactor\b.*->/.test(r)) && /->>|-->>|->|-->/.test(r) && /:/.test(r) ? "sequence" : /\bstart\b/i.test(r) && /\bstop\b/i.test(r) || /:[^;]+;/.test(r) || /\bif\s*\(/.test(r) && /\bthen\b/.test(r) ? "flowchart" : /\b(component|package|node|folder|frame|cloud|database)\b/i.test(r) ? "architecture" : /\bentity\b/i.test(r) ? "erd" : /\bobject\b/i.test(r) ? "class" : /->>|-->>|->|-->/.test(r) && /:/.test(r) ? "sequence" : "flowchart";
}
function fv(i) {
  let t = bg(i), r;
  switch (t) {
    case "sequence":
      r = gv(i);
      break;
    case "class":
      r = mv(i);
      break;
    case "state":
      r = yv(i);
      break;
    case "flowchart":
      r = bv(i);
      break;
    case "usecase":
      r = xv(i);
      break;
    case "architecture":
      r = vv(i);
      break;
    case "mindmap":
      r = wv(i);
      break;
    case "gantt":
      r = Sv(i);
      break;
    case "erd":
      r = kv(i);
      break;
    case "c4":
      r = Cv(i), t = "architecture";
      break;
    case "deployment":
      r = $v(i);
      break;
    default:
      throw new Error(`Unsupported PlantUML diagram type: ${t}`);
  }
  return { type: t, source: r };
}
function at(i) {
  return i.replace(/@startuml.*\n?/gi, "").replace(/@enduml.*\n?/gi, "").replace(/@startmindmap.*\n?/gi, "").replace(/@endmindmap.*\n?/gi, "").replace(/@startwbs.*\n?/gi, "").replace(/@endwbs.*\n?/gi, "").replace(/@startgantt.*\n?/gi, "").replace(/@endgantt.*\n?/gi, "").replace(/^\s*title\s+.+$/gim, "").replace(/^\s*skinparam\s+.+$/gim, "").replace(/^\s*hide\s+.+$/gim, "").replace(/^\s*'.*$/gim, "").trim();
}
function gv(i) {
  const r = at(i).split(`
`).filter((e) => e.trim()), n = [], o = [];
  r.forEach((e) => {
    const c = e.trim(), h = c.match(/^(participant|actor)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (h) {
      const f = h[4] || h[2];
      o.includes(f) || o.push(f);
      return;
    }
    const d = c.match(/^(\w+)\s*(->>|-->>|->|-->)\s*(\w+)\s*:\s*(.+)$/);
    if (d) {
      const [, f, m, g, y] = d;
      o.includes(f) || o.push(f), o.includes(g) || o.push(g);
      const s = m.replace(">>", ">");
      n.push(`${f} ${s} ${g}: ${y}`);
      return;
    }
    c.match(/^note\s+(left|right|over)\s*:?\s*(.+)$/i);
  });
  const a = [];
  return o.length > 0 && (a.push(`participant ${o.join(", ")}`), a.push("")), a.push(...n), a.join(`
`);
}
function mv(i) {
  const r = at(i).split(`
`), n = [];
  let o = null, a = !1, e = 0;
  return r.forEach((c) => {
    const h = c.trim(), d = h.match(/^(class|interface|abstract\s+class|enum)\s+(\w+)(\s*\{)?/i);
    if (d) {
      o && n.push(""), o = d[2], n.push(`class ${o}`), h.includes("{") && (a = !0, e = 1);
      return;
    }
    const p = h.match(/^object\s+"?([^"]+)"?/i);
    if (p) {
      o && n.push(""), o = p[1].replace(/\s+/g, "_"), n.push(`class ${o}`), h.includes("{") && (a = !0, e = 1);
      return;
    }
    if (h === "{" && o) {
      a = !0, e = 1;
      return;
    }
    if (h === "}" && a) {
      e--, e <= 0 && (a = !1, o = null);
      return;
    }
    if (a && o && h && h !== "{" && h !== "}") {
      const f = h.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*:?\s*(\w+)?/);
      if (f) {
        const [, y = "+", s, u, x] = f, b = x ? `: ${x}` : "";
        n.push(`  ${y} ${s}(${u})${b}`);
        return;
      }
      const m = h.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)/);
      if (m) {
        const [, y = "+", s, u] = m;
        n.push(`  ${y} ${s}: ${u}`);
        return;
      }
      const g = h.match(/^([+\-#~])?\s*(\w+)$/);
      if (g) {
        const [, y = "+", s] = g;
        n.push(`  ${y} ${s}`);
        return;
      }
    }
    if (!a) {
      const f = h.match(/^(\w+)\s*(<\|--|--\|>)\s*(\w+)/);
      if (f) {
        const [, g, y, s] = f;
        y === "<|--" ? n.push(`${s} extends ${g}`) : n.push(`${g} extends ${s}`);
        return;
      }
      if (h.match(/^(\w+)\s*(--|-->|<--)\s*(\w+)/))
        return;
    }
  }), n.join(`
`);
}
function yv(i) {
  const r = at(i).split(`
`).filter((a) => a.trim()), n = [], o = /* @__PURE__ */ new Set();
  return r.forEach((a) => {
    const e = a.trim(), c = e.match(/^state\s+"([^"]+)"\s+as\s+(\w+)/i);
    if (c) {
      const [, , p] = c;
      o.add(p);
      return;
    }
    const h = e.match(/^state\s+(\w+)$/i);
    if (h) {
      o.add(h[1]);
      return;
    }
    const d = e.match(/^(\[\*\]|\w+)\s*(-->|->)\s*(\[\*\]|\w+)(\s*:\s*(.+))?$/);
    if (d) {
      let [, p, , f, , m] = d, g = p, y = f;
      if (p === "[*]" && !o.has("__initial__") && (n.unshift(`(initial) ${f}`), o.add("__initial__"), g = f, !m))
        return;
      if (f === "[*]" && (o.has("__final__") || (n.push("(final) End"), o.add("__final__")), y = "End"), p !== "[*]") {
        const s = m ? `: ${m.trim()}` : "";
        n.push(`${g} -> ${y}${s}`);
      }
      return;
    }
  }), n.join(`
`);
}
function bv(i) {
  const r = at(i).split(`
`).filter((p) => p.trim()), n = [], o = [];
  let a = 0, e = null;
  const c = [], h = (p, f) => {
    const m = `node${a++}`;
    return n.push({ id: m, type: p, label: f }), m;
  };
  r.forEach((p) => {
    const f = p.trim();
    if (/^start$/i.test(f)) {
      e = h("start", "Start");
      return;
    }
    if (/^(stop|end)$/i.test(f)) {
      const s = h("end", "End");
      e && o.push({ from: e, to: s }), e = s;
      return;
    }
    const m = f.match(/^:([^;]+);?$/);
    if (m) {
      const s = m[1].trim(), u = h("process", s);
      e && o.push({ from: e, to: u }), e = u;
      return;
    }
    const g = f.match(/^if\s*\(([^)]+)\)\s*then\s*\(([^)]+)\)/i);
    if (g) {
      const s = g[1].trim(), u = g[2].trim(), x = h("decision", s);
      e && o.push({ from: e, to: x }), c.push({ type: "if", decisionId: x, yesLabel: u, noLabel: null, mergePoint: null }), e = x;
      return;
    }
    const y = f.match(/^else\s*\(([^)]+)\)/i);
    if (y && c.length > 0) {
      const s = c[c.length - 1];
      s.noLabel = y[1].trim(), s.lastYesNode = e, e = s.decisionId;
      return;
    }
    if (/^endif$/i.test(f) && c.length > 0) {
      const s = c.pop();
      s.lastNoNode = e;
      return;
    }
  });
  const d = [];
  return n.forEach((p) => {
    d.push(`(${p.type}) ${p.label}`);
  }), d.push(""), o.forEach((p) => {
    const f = n.find((g) => g.id === p.from), m = n.find((g) => g.id === p.to);
    if (f && m) {
      const g = p.label ? `: ${p.label}` : "";
      d.push(`${f.label} -> ${m.label}${g}`);
    }
  }), d.join(`
`);
}
function xv(i) {
  const r = at(i).split(`
`).filter((c) => c.trim()), n = [], o = [], a = [], e = [];
  return r.forEach((c) => {
    const h = c.trim(), d = h.match(/^actor\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (d) {
      const g = d[3] || d[1];
      o.includes(g) || (o.push(g), n.push(`actor ${g}`));
      return;
    }
    const p = h.match(/^usecase\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (p) {
      const g = p[3] || p[1];
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
      const [, g, , y] = m, s = y.replace(/[()]/g, "");
      e.push(`${g} -> ${s}`);
      return;
    }
  }), n.push(""), n.push(...e), n.join(`
`);
}
function vv(i) {
  const r = at(i).split(`
`).filter((e) => e.trim()), n = {
    clients: [],
    gateway: [],
    services: [],
    data: [],
    storage: [],
    other: []
  }, o = [];
  r.forEach((e) => {
    const c = e.trim(), h = c.match(/^(component|node|package|folder|frame|cloud|database|storage|queue)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);
    if (h) {
      const [, f, m, , g] = h, y = g || m, s = f.toLowerCase();
      s === "database" || s === "storage" ? n.data.push(y) : s === "cloud" ? n.clients.push(y) : n.services.push(y);
      return;
    }
    const d = c.match(/^\[([^\]]+)\]$/);
    if (d) {
      n.services.push(d[1]);
      return;
    }
    const p = c.match(/^(\[?[^\]]+\]?)\s*(-->|->|--)\s*(\[?[^\]]+\]?)(\s*:\s*(.+))?$/);
    if (p) {
      let [, f, , m] = p;
      f = f.replace(/[\[\]]/g, "").trim(), m = m.replace(/[\[\]]/g, "").trim(), o.push(`${f} -> ${m}`);
      return;
    }
  });
  const a = [];
  return n.clients.length > 0 && a.push(`[clients] ${n.clients.join(", ")}`), n.gateway.length > 0 && a.push(`[gateway] ${n.gateway.join(", ")}`), n.services.length > 0 && a.push(`[services] ${n.services.join(", ")}`), n.data.length > 0 && a.push(`[data] ${n.data.join(", ")}`), n.storage.length > 0 && a.push(`[storage] ${n.storage.join(", ")}`), n.other.length > 0 && a.push(`[services] ${n.other.join(", ")}`), o.length > 0 && (a.push(""), a.push(...o)), a.join(`
`);
}
function wv(i) {
  const r = at(i).split(`
`).filter((o) => o.trim()), n = [];
  return r.forEach((o) => {
    const a = o.match(/^(\*+)\s*(.+)$/);
    if (a) {
      const e = a[1].length - 1, c = a[2].trim(), h = "  ".repeat(e);
      n.push(`${h}${c}`);
    }
  }), n.join(`
`);
}
function Sv(i) {
  const r = at(i).split(`
`).filter((a) => a.trim()), n = [];
  let o = 0;
  return r.forEach((a) => {
    const e = a.trim(), c = e.match(/^\[([^\]]+)\]\s+lasts\s+(\d+)\s+days?/i);
    if (c) {
      const [, p, f] = c;
      n.push(`${p}, ${o}, ${f}`), o += parseInt(f);
      return;
    }
    const h = e.match(/^\[([^\]]+)\]\s+starts\s+at\s+day\s+(\d+)/i);
    if (h) {
      o = parseInt(h[2]);
      return;
    }
    e.match(/^project\s+starts\s+/i);
  }), n.join(`
`);
}
function kv(i) {
  const r = at(i).split(`
`), n = [];
  let o = null, a = !1;
  return r.forEach((e) => {
    const c = e.trim(), h = c.match(/^entity\s+"?([^"{\s]+)"?\s*(\{)?/i);
    if (h) {
      o && (n.push(");"), n.push("")), o = h[1], n.push(`CREATE TABLE ${o} (`), a = c.includes("{");
      return;
    }
    if (c === "{" && o) {
      a = !0;
      return;
    }
    if (c === "}" && a) {
      n.push(");"), a = !1, o = null;
      return;
    }
    if (a && o && c && !c.startsWith("--")) {
      const d = c.match(/^(\*?)?\s*(\w+)\s*:\s*(.+)$/);
      if (d) {
        const [, p, f, m] = d, g = p === "*" ? " PRIMARY KEY" : "", y = m.trim().toUpperCase();
        n.push(`  ${f} ${y}${g},`);
      }
    }
  }), a && n.push(");"), n.join(`
`).replace(/,\n\);/g, `
);`);
}
function Cv(i) {
  const r = at(i).split(`
`).filter((p) => p.trim()), n = /* @__PURE__ */ new Map(), o = [], a = [], e = /* @__PURE__ */ new Map();
  r.forEach((p) => {
    const f = p.trim();
    if (f.startsWith("!include") || f.startsWith("'")) return;
    const m = f.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(\s*(\w+)\s*,\s*["']([^"']+)["']/i);
    if (m) {
      const b = a.length > 0 ? a[a.length - 1] : null;
      e.set(m[2], { label: m[3], type: m[1], parent: b }), a.push(m[2]);
      return;
    }
    if (f === "}" && a.length > 0) {
      a.pop();
      return;
    }
    const g = f.match(/^Person(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (g) {
      const b = a.length > 0 ? a[a.length - 1] : null;
      n.set(g[1], {
        type: "user",
        label: g[2],
        description: g[3] || "",
        boundary: b
      });
      return;
    }
    const y = f.match(/^System(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (y) {
      const b = a.length > 0 ? a[a.length - 1] : null;
      n.set(y[1], {
        type: f.includes("_Ext") ? "external" : "services",
        label: y[2],
        description: y[3] || "",
        boundary: b
      });
      return;
    }
    const s = f.match(/^Container(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (s) {
      const b = a.length > 0 ? a[a.length - 1] : null;
      let k = "services";
      /ContainerDb/i.test(f) ? k = "data" : /ContainerQueue/i.test(f) ? k = "queue" : /_Ext/i.test(f) && (k = "external"), n.set(s[1], {
        type: k,
        label: s[2],
        technology: s[3] || "",
        description: s[4] || "",
        boundary: b
      });
      return;
    }
    const u = f.match(/^Component(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (u) {
      const b = a.length > 0 ? a[a.length - 1] : null;
      let k = "services";
      /ComponentDb/i.test(f) && (k = "data"), /_Ext/i.test(f) && (k = "external"), n.set(u[1], {
        type: k,
        label: u[2],
        technology: u[3] || "",
        description: u[4] || "",
        boundary: b
      });
      return;
    }
    const x = f.match(/^(?:Bi)?Rel(?:_[RLUD])?\s*\(\s*(\w+)\s*,\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);
    x && o.push({
      from: x[1],
      to: x[2],
      label: x[3],
      tech: x[4] || ""
    });
  });
  const c = [], h = { user: [], clients: [], services: [], data: [], external: [], queue: [] };
  n.forEach((p, f) => {
    const m = p.type || "services";
    h[m] || (h[m] = []), h[m].push(p.label);
  }), Object.entries(h).forEach(([p, f]) => {
    f.length > 0 && c.push(`[${p}] ${f.join(", ")}`);
  });
  const d = (p, f = "") => {
    const m = e.get(p);
    m && (c.push(`${f}group "${m.label}" {`), n.forEach((g, y) => {
      g.boundary === p && c.push(`${f}  ${g.label}`);
    }), e.forEach((g, y) => {
      g.parent === p && d(y, f + "  ");
    }), c.push(`${f}}`));
  };
  return e.forEach((p, f) => {
    p.parent || d(f);
  }), c.push(""), o.forEach((p) => {
    const f = n.get(p.from), m = n.get(p.to);
    f && m && c.push(`${f.label} -> ${m.label}`);
  }), c.join(`
`);
}
function $v(i) {
  const r = at(i).split(`
`).filter((h) => h.trim()), n = [], o = /* @__PURE__ */ new Map(), a = [];
  let e = null, c = !1;
  return r.forEach((h) => {
    const d = h.trim(), p = d.match(/^(node|device|artifact|file|folder|frame|rectangle|card)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?(?:\s*\{)?/i);
    if (p) {
      const m = p[1].toLowerCase(), g = p[2].trim(), y = p[3] || g.replace(/\s+/g, "_");
      o.set(y, { type: m, label: g, children: [] }), e = y, d.includes("{") && (c = !0);
      return;
    }
    if (c && e) {
      const m = d.match(/^(node|device|artifact|component|database)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?/i);
      if (m) {
        const g = m[3] || m[2].replace(/\s+/g, "_");
        o.set(g, { type: m[1].toLowerCase(), label: m[2].trim(), parent: e });
        const y = o.get(e);
        y && y.children.push(g);
        return;
      }
    }
    if (d === "}") {
      c = !1, e = null;
      return;
    }
    const f = d.match(/^(\w+)\s*(-->|->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);
    f && a.push({
      from: f[1],
      to: f[3],
      label: f[4] || ""
    });
  }), o.forEach((h, d) => {
    if (!h.parent) {
      let p = `(${h.type}) ${h.label}`;
      n.push(p), h.children.length > 0 && h.children.forEach((f) => {
        const m = o.get(f);
        m && n.push(`  (${m.type}) ${m.label}`);
      });
    }
  }), n.push(""), a.forEach((h) => {
    const d = o.get(h.from), p = o.get(h.to);
    if (d && p) {
      const f = h.label ? `: ${h.label}` : "";
      n.push(`${d.label} -> ${p.label}${f}`);
    }
  }), n.join(`
`);
}
function Ev(i, t) {
  switch (i) {
    case "sequence":
      return Mv(t);
    case "class":
      return Rv(t);
    case "state":
      return _v(t);
    case "flowchart":
      return Iv(t);
    case "usecase":
      return Av(t);
    case "architecture":
    case "component":
      return Tv(t);
    case "mindmap":
    case "wbs":
      return xg(t);
    case "gantt":
      return Pv(t);
    case "erd":
      return Dv(t);
    case "orgchart":
      return Lv(t);
    default:
      throw new Error(`Export to PlantUML not supported for diagram type: ${i}`);
  }
}
function Mv(i) {
  const t = i.split(`
`).filter((n) => n.trim()), r = ["@startuml"];
  return t.forEach((n) => {
    const o = n.trim();
    if (o.startsWith("participant ")) {
      r.push(o);
      return;
    }
    if (o.match(/^(\w+)\s*(->|-->)\s*(\w+)\s*:\s*(.+)$/)) {
      r.push(o);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function Rv(i) {
  const t = i.split(`
`), r = ["@startuml"];
  let n = null;
  return t.forEach((o) => {
    const a = o.trim();
    if (a.startsWith("class ")) {
      n && (r.push("}"), r.push("")), n = a.replace("class ", ""), r.push(`class ${n} {`);
      return;
    }
    if (a.match(/^([+\-#~])\s*(.+)$/) && n) {
      r.push(`  ${a}`);
      return;
    }
    const c = a.match(/^(\w+)\s+extends\s+(\w+)$/);
    if (c) {
      n && (r.push("}"), n = null), r.push(`${c[2]} <|-- ${c[1]}`);
      return;
    }
  }), n && r.push("}"), r.push("@enduml"), r.join(`
`);
}
function _v(i) {
  const t = i.split(`
`).filter((o) => o.trim()), r = ["@startuml"];
  let n = !1;
  return t.forEach((o) => {
    const a = o.trim(), e = a.match(/^\(initial\)\s+(\w+)$/);
    if (e) {
      n || (r.push(`[*] --> ${e[1]}`), n = !0);
      return;
    }
    if (a.match(/^\(final\)\s+(\w+)$/))
      return;
    const h = a.match(/^(\w+)\s*->\s*(\w+)(\s*:\s*(.+))?$/);
    if (h) {
      const [, d, p, , f] = h, m = f ? ` : ${f}` : "";
      p.toLowerCase() === "end" || p.toLowerCase() === "final" ? r.push(`${d} --> [*]${m}`) : r.push(`${d} --> ${p}${m}`);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function Iv(i) {
  const t = i.split(`
`).filter((e) => e.trim()), r = ["@startuml"], n = /* @__PURE__ */ new Map(), o = [];
  t.forEach((e) => {
    var p;
    const c = e.trim(), h = c.match(/^\((\w+)\)\s+(.+)$/);
    h && n.set(h[2], h[1]);
    const d = c.match(/^(.+?)\s*->\s*(.+?)(\s*:\s*(.+))?$/);
    d && !c.startsWith("(") && o.push({
      from: d[1].trim(),
      to: d[2].trim(),
      label: (p = d[4]) == null ? void 0 : p.trim()
    });
  });
  const a = /* @__PURE__ */ new Set();
  return o.forEach((e) => {
    const c = n.get(e.from) || "process", h = n.get(e.to) || "process";
    c === "start" && !a.has("__start__") && (r.push("start"), a.add("__start__")), c !== "start" && c !== "end" && !a.has(e.from) && (c === "decision" ? r.push(`if (${e.from}?) then (${e.label || "yes"})`) : r.push(`:${e.from};`), a.add(e.from)), h === "end" && !a.has("__end__") ? (r.push("stop"), a.add("__end__")) : h !== "start" && !a.has(e.to) && (h === "decision" ? r.push(`if (${e.to}?) then (yes)`) : h !== "end" && r.push(`:${e.to};`), a.add(e.to));
  }), !a.has("__end__") && n.has("End") && r.push("stop"), r.push("@enduml"), r.join(`
`);
}
function Av(i) {
  const t = i.split(`
`).filter((n) => n.trim()), r = ["@startuml"];
  return t.forEach((n) => {
    const o = n.trim();
    if (o.startsWith("actor ")) {
      r.push(o);
      return;
    }
    const a = o.match(/^\(([^)]+)\)$/);
    if (a) {
      r.push(`usecase "${a[1]}"`);
      return;
    }
    const e = o.match(/^(\w+)\s*->\s*(\w+)$/);
    if (e) {
      r.push(`${e[1]} --> (${e[2]})`);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function Tv(i) {
  const t = i.split(`
`).filter((n) => n.trim()), r = ["@startuml"];
  return t.forEach((n) => {
    const o = n.trim(), a = o.match(/^\[(\w+)\]\s+(.+)$/);
    if (a) {
      const [, c, h] = a, d = h.split(",").map((p) => p.trim());
      r.push(`package "${c}" {`), d.forEach((p) => {
        c === "data" || c === "databases" ? r.push(`  database "${p}"`) : c === "clients" ? r.push(`  node "${p}"`) : r.push(`  component "${p}"`);
      }), r.push("}"), r.push("");
      return;
    }
    const e = o.match(/^(.+?)\s*->\s*(.+)$/);
    if (e && !o.startsWith("[")) {
      r.push(`[${e[1].trim()}] --> [${e[2].trim()}]`);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function xg(i) {
  const t = i.split(`
`), r = ["@startmindmap"];
  return t.forEach((n) => {
    if (!n.trim()) return;
    const o = n.match(/^(\s*)/)[1].length, a = Math.floor(o / 2) + 1, e = n.trim();
    e && r.push("*".repeat(a) + " " + e);
  }), r.push("@endmindmap"), r.join(`
`);
}
function Pv(i) {
  const t = i.split(`
`).filter((n) => n.trim()), r = ["@startgantt"];
  return t.forEach((n) => {
    const a = n.trim().match(/^([^,]+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?$/);
    if (a) {
      const [, e, c, h] = a;
      r.push(`[${e.trim()}] lasts ${h} days`), parseInt(c) > 0 && r.push(`[${e.trim()}] starts at day ${c}`);
      return;
    }
  }), r.push("@endgantt"), r.join(`
`);
}
function Dv(i) {
  const t = i.split(`
`), r = ["@startuml"];
  let n = null;
  return t.forEach((o) => {
    const a = o.trim(), e = a.match(/^CREATE\s+TABLE\s+(\w+)/i);
    if (e) {
      n && (r.push("}"), r.push("")), n = e[1], r.push(`entity "${n}" {`);
      return;
    }
    const c = a.match(/^(\w+)\s+(\w+)(.*)$/);
    if (c && n && !a.startsWith("CREATE") && !a.startsWith(")")) {
      const [, h, d, p] = c, m = /PRIMARY\s+KEY/i.test(p) ? "*" : "";
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
function Lv(i) {
  return xg(i);
}
function zv(i, t = "diagram") {
  const r = new Blob([i], { type: "text/plain" }), n = URL.createObjectURL(r), o = document.createElement("a");
  o.href = n, o.download = `${t}.puml`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(n);
}
async function Bv(i) {
  try {
    return await navigator.clipboard.writeText(i), !0;
  } catch (t) {
    return console.error("Failed to copy to clipboard:", t), !1;
  }
}
const Te = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  red: "#EF4444",
  indigo: "#6366F1"
};
function Wv({ isOpen: i, onClose: t, onImport: r, theme: n }) {
  const [o, a] = Y(""), [e, c] = Y(null), [h, d] = Y(""), [p, f] = Y(null), m = _e(null), g = (n == null ? void 0 : n.name) === "dark";
  se(() => {
    i || (a(""), c(null), d(""), f(null));
  }, [i]), se(() => {
    if (o.trim())
      try {
        const b = bg(o);
        f(b);
      } catch {
        f(null);
      }
    else
      f(null);
  }, [o]);
  const y = (b) => {
    var C;
    const k = (C = b.target.files) == null ? void 0 : C[0];
    if (!k) return;
    const w = new FileReader();
    w.onload = ($) => {
      a($.target.result), c(null), d("");
    }, w.onerror = () => {
      d("Failed to read file");
    }, w.readAsText(k);
  }, s = () => {
    if (d(""), c(null), !o.trim()) {
      d("Please enter PlantUML source code");
      return;
    }
    try {
      const b = fv(o);
      c(b);
    } catch (b) {
      d(b.message || "Failed to convert PlantUML");
    }
  }, u = () => {
    e && r(e.type, e.source);
  };
  if (!i) return null;
  const x = {
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
      background: `${Te.green}15`
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
      background: `${Te.blue}20`,
      border: `1px solid ${Te.blue}`,
      borderRadius: 6,
      color: Te.blue,
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
      background: `${Te.purple}20`,
      borderRadius: 6,
      fontSize: "0.75rem",
      color: Te.purple,
      marginTop: 8
    },
    previewBtn: {
      width: "100%",
      padding: "12px 20px",
      background: `linear-gradient(135deg, ${Te.purple}, ${Te.indigo})`,
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
      background: `${Te.red}15`,
      border: `1px solid ${Te.red}40`,
      borderRadius: 8,
      color: Te.red,
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
      color: Te.green
    },
    previewType: {
      display: "inline-block",
      padding: "4px 10px",
      background: `${Te.green}20`,
      borderRadius: 6,
      color: Te.green,
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
    importBtn: {
      padding: "8px 20px",
      background: `linear-gradient(135deg, ${Te.green}, ${Te.blue})`,
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
      background: `${Te.blue}10`,
      borderRadius: 8,
      fontSize: "0.75rem",
      color: (n == null ? void 0 : n.textSecondary) || "#888"
    },
    exampleCode: {
      fontFamily: "Monaco, Consolas, monospace",
      fontSize: "0.7rem",
      color: Te.blue,
      marginTop: 8,
      whiteSpace: "pre"
    }
  };
  return /* @__PURE__ */ l("div", { style: x.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: x.modal, onClick: (b) => b.stopPropagation(), children: [
    /* @__PURE__ */ S("div", { style: x.header, children: [
      /* @__PURE__ */ S("div", { style: x.headerTitle, children: [
        /* @__PURE__ */ l("span", { style: x.headerIcon, children: "🌱" }),
        /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: x.title, children: "Import from PlantUML" }),
          /* @__PURE__ */ l("div", { style: x.subtitle, children: "Convert PlantUML diagrams to DDFlow" })
        ] })
      ] }),
      /* @__PURE__ */ l("button", { style: x.closeBtn, onClick: t, children: "✕" })
    ] }),
    /* @__PURE__ */ S("div", { style: x.content, children: [
      /* @__PURE__ */ S("div", { style: x.inputSection, children: [
        /* @__PURE__ */ l("label", { style: x.label, children: "PLANTUML SOURCE" }),
        /* @__PURE__ */ l(
          "textarea",
          {
            style: x.textarea,
            value: o,
            onChange: (b) => {
              a(b.target.value), c(null), d("");
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
        /* @__PURE__ */ S("div", { style: x.fileRow, children: [
          /* @__PURE__ */ l(
            "button",
            {
              style: x.uploadBtn,
              onClick: () => {
                var b;
                return (b = m.current) == null ? void 0 : b.click();
              },
              children: "Upload .puml File"
            }
          ),
          /* @__PURE__ */ l("span", { style: x.fileHint, children: "Supports .puml, .plantuml, .txt files" }),
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
        p && /* @__PURE__ */ S("div", { style: x.typeIndicator, children: [
          /* @__PURE__ */ l("span", { children: "Detected type:" }),
          /* @__PURE__ */ l("strong", { children: p })
        ] })
      ] }),
      !o && /* @__PURE__ */ S("div", { style: x.exampleHint, children: [
        /* @__PURE__ */ l("strong", { children: "Supported diagram types:" }),
        " Sequence, Class, State, Activity (Flowchart), Use Case, Component (Architecture), Mind Map, Gantt, ERD",
        /* @__PURE__ */ l("div", { style: x.exampleCode, children: `@startuml
class User {
  +id: string
  +login(): boolean
}
@enduml` })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          style: o.trim() ? x.previewBtn : x.previewBtnDisabled,
          onClick: s,
          disabled: !o.trim(),
          children: "Preview Conversion"
        }
      ),
      h && /* @__PURE__ */ S("div", { style: x.error, children: [
        "❌ ",
        h
      ] }),
      e && /* @__PURE__ */ S("div", { style: x.previewSection, children: [
        /* @__PURE__ */ S("div", { style: x.previewHeader, children: [
          /* @__PURE__ */ l("span", { style: x.previewIcon, children: "✅" }),
          /* @__PURE__ */ l("span", { style: x.previewTitle, children: "Conversion Successful" })
        ] }),
        /* @__PURE__ */ l("div", { style: x.previewType, children: e.type }),
        /* @__PURE__ */ l("div", { style: x.dslPreview, children: e.source })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: x.footer, children: [
      /* @__PURE__ */ l("button", { style: x.cancelBtn, onClick: t, children: "Cancel" }),
      /* @__PURE__ */ l(
        "button",
        {
          style: e ? x.importBtn : x.importBtnDisabled,
          onClick: u,
          disabled: !e,
          children: "Import Diagram"
        }
      )
    ] })
  ] }) });
}
const ze = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  red: "#EF4444",
  indigo: "#6366F1"
}, Qh = [
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
function Nv({ isOpen: i, onClose: t, diagramType: r, diagramSource: n, theme: o }) {
  const [a, e] = Y(""), [c, h] = Y(""), [d, p] = Y(!1), f = (o == null ? void 0 : o.name) === "dark";
  se(() => {
    if (i && r && n) {
      if (h(""), p(!1), !Qh.includes(r)) {
        h(`Export to PlantUML is not supported for "${r}" diagrams.

Supported types: ${Qh.join(", ")}`), e("");
        return;
      }
      try {
        const s = Ev(r, n);
        e(s);
      } catch (s) {
        h(s.message || "Failed to convert to PlantUML"), e("");
      }
    }
  }, [i, r, n]), se(() => {
    i || (e(""), h(""), p(!1));
  }, [i]);
  const m = async () => {
    await Bv(a) && (p(!0), setTimeout(() => p(!1), 2e3));
  }, g = () => {
    const s = `diagram-${r}`;
    zv(a, s);
  };
  if (!i) return null;
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
      background: (o == null ? void 0 : o.modalBg) || (f ? "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))" : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),
      borderRadius: 16,
      border: `1px solid ${(o == null ? void 0 : o.border) || "rgba(255,255,255,0.1)"}`,
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
      borderBottom: `1px solid ${(o == null ? void 0 : o.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: `${ze.green}15`
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
      color: (o == null ? void 0 : o.textPrimary) || "#fff"
    },
    subtitle: {
      fontSize: "0.7rem",
      color: (o == null ? void 0 : o.textSecondary) || "#888"
    },
    closeBtn: {
      background: "transparent",
      border: "none",
      color: (o == null ? void 0 : o.textSecondary) || "#888",
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
      background: `${ze.purple}20`,
      borderRadius: 8,
      color: ze.purple,
      fontSize: "0.85rem",
      fontWeight: 600
    },
    conversionArrow: {
      fontSize: "1.2rem",
      color: (o == null ? void 0 : o.textMuted) || "#666"
    },
    outputBadge: {
      display: "inline-block",
      padding: "6px 14px",
      background: `${ze.green}20`,
      borderRadius: 8,
      color: ze.green,
      fontSize: "0.85rem",
      fontWeight: 600
    },
    label: {
      display: "block",
      fontSize: "0.8rem",
      fontWeight: 500,
      color: (o == null ? void 0 : o.textSecondary) || "#888",
      marginBottom: 8
    },
    textarea: {
      width: "100%",
      height: 300,
      padding: 12,
      background: (o == null ? void 0 : o.inputBg) || (f ? "rgba(0,0,0,0.3)" : "#fff"),
      border: `1px solid ${(o == null ? void 0 : o.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 8,
      color: (o == null ? void 0 : o.textPrimary) || "#fff",
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
      background: d ? `${ze.green}20` : `${ze.blue}20`,
      border: `1px solid ${d ? ze.green : ze.blue}`,
      borderRadius: 8,
      color: d ? ze.green : ze.blue,
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
      background: `linear-gradient(135deg, ${ze.purple}, ${ze.indigo})`,
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
      background: `${ze.red}10`,
      border: `1px solid ${ze.red}30`,
      borderRadius: 12,
      textAlign: "center"
    },
    errorIcon: {
      fontSize: "2rem",
      marginBottom: 12
    },
    errorText: {
      color: ze.red,
      fontSize: "0.9rem",
      whiteSpace: "pre-wrap"
    },
    footer: {
      padding: "12px 20px",
      borderTop: `1px solid ${(o == null ? void 0 : o.border) || "rgba(255,255,255,0.1)"}`,
      display: "flex",
      justifyContent: "flex-end"
    },
    closeFooterBtn: {
      padding: "8px 20px",
      background: "rgba(255,255,255,0.1)",
      border: `1px solid ${(o == null ? void 0 : o.border) || "rgba(255,255,255,0.1)"}`,
      borderRadius: 6,
      color: (o == null ? void 0 : o.textSecondary) || "#888",
      fontSize: "0.8rem",
      cursor: "pointer"
    },
    hint: {
      marginTop: 12,
      padding: 12,
      background: `${ze.blue}10`,
      borderRadius: 8,
      fontSize: "0.75rem",
      color: (o == null ? void 0 : o.textSecondary) || "#888"
    }
  };
  return /* @__PURE__ */ l("div", { style: y.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: y.modal, onClick: (s) => s.stopPropagation(), children: [
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
      c ? (
        /* Error State */
        /* @__PURE__ */ S("div", { style: y.error, children: [
          /* @__PURE__ */ l("div", { style: y.errorIcon, children: "⚠️" }),
          /* @__PURE__ */ l("div", { style: y.errorText, children: c })
        ] })
      ) : (
        /* Success State */
        /* @__PURE__ */ S(ut, { children: [
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
                style: { color: ze.blue },
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
const T = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  red: "#EF4444",
  pink: "#EC4899",
  teal: "#14B8A6"
}, Zh = {
  process: {
    label: "Process",
    shapes: [
      {
        id: "flowchart",
        label: "Flowchart",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "8", width: "16", height: "10", rx: "2", fill: `${T.orange}40`, stroke: T.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "24", y: "8", width: "16", height: "10", rx: "2", fill: `${T.red}40`, stroke: T.red, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "44", y: "8", width: "16", height: "10", rx: "2", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "28", width: "16", height: "10", rx: "2", fill: `${T.pink}40`, stroke: T.pink, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "28", width: "16", height: "10", rx: "2", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("rect", { x: "22", y: "4", width: "20", height: "10", rx: "2", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "34", width: "16", height: "10", rx: "2", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "24", y: "34", width: "16", height: "10", rx: "2", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "44", y: "34", width: "16", height: "10", rx: "2", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "8", r: "6", fill: `${T.orange}40`, stroke: T.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "46", cy: "24", r: "6", fill: `${T.red}40`, stroke: T.red, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "40", r: "6", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "18", cy: "24", r: "6", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "12", height: "8", rx: "2", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "26", y: "4", width: "12", height: "8", rx: "2", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "48", y: "4", width: "12", height: "8", rx: "2", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "10", y1: "12", x2: "10", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("line", { x1: "32", y1: "12", x2: "32", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("line", { x1: "54", y1: "12", x2: "54", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("path", { d: "M10 20 L32 20", stroke: T.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M32 28 L54 28", stroke: T.pink, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M54 36 L32 36", stroke: T.teal, strokeWidth: "1.5", strokeDasharray: "3,2" })
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "8", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "6", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "12", r: "6", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "36", r: "6", fill: `${T.orange}40`, stroke: T.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "36", r: "6", fill: `${T.red}40`, stroke: T.red, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("rect", { x: "6", y: "12", width: "12", height: "6", rx: "1", fill: `${T.orange}60` }),
          /* @__PURE__ */ l("rect", { x: "6", y: "20", width: "12", height: "6", rx: "1", fill: `${T.orange}60` }),
          /* @__PURE__ */ l("rect", { x: "26", y: "12", width: "12", height: "6", rx: "1", fill: `${T.blue}60` }),
          /* @__PURE__ */ l("rect", { x: "46", y: "12", width: "12", height: "6", rx: "1", fill: `${T.green}60` }),
          /* @__PURE__ */ l("rect", { x: "46", y: "20", width: "12", height: "6", rx: "1", fill: `${T.green}60` })
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
          /* @__PURE__ */ l("rect", { x: "8", y: "28", width: "10", height: "16", rx: "1", fill: `${T.blue}60` }),
          /* @__PURE__ */ l("rect", { x: "22", y: "18", width: "10", height: "26", rx: "1", fill: `${T.purple}60` }),
          /* @__PURE__ */ l("rect", { x: "36", y: "8", width: "10", height: "36", rx: "1", fill: `${T.green}60` }),
          /* @__PURE__ */ l("rect", { x: "50", y: "22", width: "10", height: "22", rx: "1", fill: `${T.orange}60` }),
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "18", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M32 24 L32 6 A18 18 0 0 1 48 16 Z", fill: `${T.purple}60` }),
          /* @__PURE__ */ l("path", { d: "M32 24 L48 16 A18 18 0 0 1 44 40 Z", fill: `${T.green}60` }),
          /* @__PURE__ */ l("path", { d: "M32 24 L44 40 A18 18 0 0 1 20 40 Z", fill: `${T.orange}60` })
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "24", height: "18", rx: "2", fill: "#f8f8f8", stroke: T.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "24", height: "6", rx: "2", fill: `${T.blue}30` }),
          /* @__PURE__ */ l("rect", { x: "36", y: "26", width: "24", height: "18", rx: "2", fill: "#f8f8f8", stroke: T.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "36", y: "26", width: "24", height: "6", rx: "2", fill: `${T.green}30` }),
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
          /* @__PURE__ */ l("rect", { x: "8", y: "4", width: "22", height: "20", rx: "2", fill: "#f8f8f8", stroke: T.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "10", x2: "30", y2: "10", stroke: T.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "16", x2: "30", y2: "16", stroke: T.purple, strokeWidth: "0.5" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "24", width: "22", height: "20", rx: "2", fill: "#f8f8f8", stroke: T.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "34", y1: "30", x2: "56", y2: "30", stroke: T.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "34", y1: "36", x2: "56", y2: "36", stroke: T.orange, strokeWidth: "0.5" }),
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
          /* @__PURE__ */ l("path", { d: "M12 32 L22 24 L32 28 L42 16 L52 20", stroke: T.blue, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ l("path", { d: "M12 36 L22 30 L32 34 L42 26 L52 30", stroke: T.green, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "32", r: "2", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "28", r: "2", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "20", r: "2", fill: T.blue })
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
          /* @__PURE__ */ l("polygon", { points: "32,12 48,21 44,38 20,38 16,21", fill: `${T.blue}30`, stroke: T.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "12", r: "2", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "21", r: "2", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "44", cy: "38", r: "2", fill: T.blue })
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
          /* @__PURE__ */ l("ellipse", { cx: "32", cy: "24", rx: "12", ry: "8", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("ellipse", { cx: "10", cy: "12", rx: "8", ry: "5", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "54", cy: "12", rx: "8", ry: "5", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "10", cy: "36", rx: "8", ry: "5", fill: `${T.orange}40`, stroke: T.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "54", cy: "36", rx: "8", ry: "5", fill: `${T.red}40`, stroke: T.red, strokeWidth: "1" }),
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "56", height: "10", rx: "2", fill: `${T.blue}20`, stroke: T.blue, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "6", width: "14", height: "6", rx: "1", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "25", y: "6", width: "14", height: "6", rx: "1", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "42", y: "6", width: "14", height: "6", rx: "1", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "18", width: "56", height: "10", rx: "2", fill: `${T.green}20`, stroke: T.green, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "20", width: "22", height: "6", rx: "1", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "20", width: "22", height: "6", rx: "1", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "32", width: "56", height: "10", rx: "2", fill: `${T.purple}20`, stroke: T.purple, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "18", y: "34", width: "28", height: "6", rx: "1", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1" })
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
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "14", rx: "12", ry: "6", fill: `${T.blue}30`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "28", rx: "12", ry: "6", fill: `${T.green}30`, stroke: T.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "42", rx: "12", ry: "6", fill: `${T.orange}30`, stroke: T.orange, strokeWidth: "1" }),
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
          /* @__PURE__ */ l("circle", { cx: "16", cy: "24", r: "4", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "4", fill: T.green }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "24", r: "4", fill: T.purple }),
          /* @__PURE__ */ l("rect", { x: "10", y: "8", width: "12", height: "8", rx: "2", fill: `${T.blue}30`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "26", y: "32", width: "12", height: "8", rx: "2", fill: `${T.green}30`, stroke: T.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "42", y: "8", width: "12", height: "8", rx: "2", fill: `${T.purple}30`, stroke: T.purple, strokeWidth: "1" })
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
          /* @__PURE__ */ l("circle", { cx: "8", cy: "24", r: "4", fill: T.green }),
          /* @__PURE__ */ l("circle", { cx: "22", cy: "16", r: "4", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "36", cy: "28", r: "4", fill: T.orange }),
          /* @__PURE__ */ l("circle", { cx: "50", cy: "20", r: "4", fill: T.purple }),
          /* @__PURE__ */ l("path", { d: "M12 24 Q17 16, 18 16", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M26 16 Q31 16, 32 28", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M40 28 Q45 28, 46 20", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M8 34 Q22 42, 36 38 Q50 34, 56 36", stroke: T.green, strokeWidth: "2", fill: "none", strokeDasharray: "4,2" })
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
          /* @__PURE__ */ l("line", { x1: "16", y1: "8", x2: "16", y2: "40", stroke: T.blue, strokeWidth: "2" }),
          /* @__PURE__ */ l("line", { x1: "32", y1: "16", x2: "32", y2: "40", stroke: T.green, strokeWidth: "2" }),
          /* @__PURE__ */ l("line", { x1: "48", y1: "24", x2: "48", y2: "40", stroke: T.purple, strokeWidth: "2" }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "12", r: "3", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "24", r: "3", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "36", r: "3", fill: T.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "20", r: "3", fill: T.green }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "32", r: "3", fill: T.green }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "28", r: "3", fill: T.purple }),
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "26", height: "18", rx: "3", fill: `${T.blue}20`, stroke: T.blue, strokeWidth: "1.5", strokeDasharray: "4,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "8", width: "8", height: "6", rx: "1", fill: `${T.blue}50` }),
          /* @__PURE__ */ l("rect", { x: "18", y: "8", width: "8", height: "6", rx: "1", fill: `${T.blue}50` }),
          /* @__PURE__ */ l("rect", { x: "34", y: "26", width: "26", height: "18", rx: "3", fill: `${T.green}20`, stroke: T.green, strokeWidth: "1.5", strokeDasharray: "4,2" }),
          /* @__PURE__ */ l("rect", { x: "38", y: "30", width: "8", height: "6", rx: "1", fill: `${T.green}50` }),
          /* @__PURE__ */ l("rect", { x: "48", y: "30", width: "8", height: "6", rx: "1", fill: `${T.green}50` }),
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
          /* @__PURE__ */ l("rect", { x: "16", y: "8", width: "32", height: "32", rx: "4", fill: `${T.purple}20`, stroke: T.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "10", y: "14", width: "8", height: "6", rx: "1", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "10", y: "28", width: "8", height: "6", rx: "1", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "46", y: "14", width: "8", height: "6", rx: "1", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "46", y: "28", width: "8", height: "6", rx: "1", fill: `${T.purple}40`, stroke: T.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("text", { x: "32", y: "28", textAnchor: "middle", fontSize: "8", fill: T.purple, children: "API" })
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
          /* @__PURE__ */ l("rect", { x: "8", y: "8", width: "18", height: "14", rx: "2", fill: `${T.blue}30`, stroke: T.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("circle", { cx: "38", cy: "8", r: "6", fill: "none", stroke: T.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "38", cy: "4", r: "2", fill: `${T.orange}40`, stroke: T.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "48", y: "8", width: "10", height: "14", rx: "2", fill: `${T.green}30`, stroke: T.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "28", width: "22", height: "14", rx: "2", fill: `${T.purple}30`, stroke: T.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "28", width: "22", height: "14", rx: "2", fill: `${T.pink}30`, stroke: T.pink, strokeWidth: "1" })
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "12", r: "6", fill: `${T.blue}40`, stroke: T.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "24", r: "6", fill: `${T.green}40`, stroke: T.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "36", r: "6", fill: `${T.orange}40`, stroke: T.orange, strokeWidth: "1.5" }),
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
function qv({ isOpen: i, onClose: t, onSelectShape: r, theme: n }) {
  const [o, a] = Y(
    Object.keys(Zh).reduce((d, p) => ({ ...d, [p]: !0 }), {})
  ), e = (n == null ? void 0 : n.name) === "dark", c = (d) => {
    a((p) => ({ ...p, [d]: !p[d] }));
  };
  if (!i) return null;
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
    /* @__PURE__ */ l("div", { style: h.content, children: Object.entries(Zh).map(([d, p]) => /* @__PURE__ */ S("div", { style: h.category, children: [
      /* @__PURE__ */ S(
        "div",
        {
          style: h.categoryHeader,
          onClick: () => c(d),
          onMouseEnter: (f) => f.currentTarget.style.background = e ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
          onMouseLeave: (f) => f.currentTarget.style.background = e ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
          children: [
            /* @__PURE__ */ l("span", { style: h.categoryLabel, children: p.label }),
            /* @__PURE__ */ l("span", { style: { ...h.categoryArrow, transform: o[d] ? "rotate(180deg)" : "rotate(0deg)" }, children: "▼" })
          ]
        }
      ),
      o[d] && /* @__PURE__ */ l("div", { style: h.shapesGrid, children: p.shapes.map((f) => /* @__PURE__ */ S(
        "div",
        {
          style: h.shapeItem,
          onClick: () => r(f),
          onMouseEnter: (m) => {
            m.currentTarget.style.background = e ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)", m.currentTarget.style.borderColor = T.purple, m.currentTarget.style.transform = "scale(1.05)";
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
async function vg(i, t = 2) {
  const r = i.getBoundingClientRect(), n = Math.ceil(r.width), o = Math.ceil(r.height), a = document.createElement("canvas");
  a.width = n * t, a.height = o * t;
  const e = a.getContext("2d");
  e.scale(t, t), e.fillStyle = "#1a1a2e", e.fillRect(0, 0, n, o);
  const c = i.querySelectorAll("svg");
  for (const h of c)
    await Ov(h, e, i);
  return await Fv(i, e), a;
}
async function Ov(i, t, r) {
  const n = i.getBoundingClientRect(), o = r.getBoundingClientRect(), a = n.left - o.left, e = n.top - o.top, c = i.cloneNode(!0), h = i.querySelectorAll("*"), d = c.querySelectorAll("*");
  h.forEach((m, g) => {
    const y = d[g];
    if (y)
      try {
        const s = window.getComputedStyle(m);
        ["fill", "stroke", "stroke-width", "stroke-dasharray", "opacity", "font-size", "font-family"].forEach((u) => {
          const x = s.getPropertyValue(u);
          x && x !== "none" && y.setAttribute(u, x);
        }), y.style.animation = "none";
      } catch {
      }
  }), c.setAttribute("width", n.width), c.setAttribute("height", n.height), c.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const p = new XMLSerializer().serializeToString(c), f = new Blob([p], { type: "image/svg+xml;charset=utf-8" });
  return new Promise((m) => {
    const g = new Image();
    g.onload = () => {
      t.drawImage(g, a, e, n.width, n.height), URL.revokeObjectURL(g.src), m();
    }, g.onerror = () => {
      URL.revokeObjectURL(g.src), m();
    }, g.src = URL.createObjectURL(f);
  });
}
async function Fv(i, t) {
  const r = i.getBoundingClientRect(), n = i.querySelectorAll("*"), o = /* @__PURE__ */ new Set();
  for (const e of n) {
    if (e.classList.contains("canvas-bg") || e.tagName === "SVG" || e.tagName === "svg" || e.closest("svg")) continue;
    const c = e.getBoundingClientRect();
    if (c.width < 5 || c.height < 5) continue;
    const h = window.getComputedStyle(e);
    if (h.display === "none" || h.visibility === "hidden") continue;
    const d = c.left - r.left, p = c.top - r.top;
    if (d < -50 || p < -50 || d > r.width + 50 || p > r.height + 50) continue;
    const f = h.backgroundColor, m = h.borderColor, g = f && f !== "rgba(0, 0, 0, 0)" && f !== "transparent", y = m && m !== "rgba(0, 0, 0, 0)" && parseInt(h.borderWidth) > 0, s = `${Math.round(d)},${Math.round(p)},${Math.round(c.width)},${Math.round(c.height)}`;
    if ((g || y) && !o.has(s)) {
      o.add(s);
      const u = parseInt(h.borderRadius) || 0;
      g && (t.fillStyle = f, u > 0 ? (Jh(t, d, p, c.width, c.height, u), t.fill()) : t.fillRect(d, p, c.width, c.height)), y && (t.strokeStyle = m, t.lineWidth = parseInt(h.borderWidth) || 1, u > 0 ? (Jh(t, d, p, c.width, c.height, u), t.stroke()) : t.strokeRect(d, p, c.width, c.height));
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const e of n) {
    if (e.closest("svg") || e.classList.contains("canvas-bg")) continue;
    const c = window.getComputedStyle(e);
    if (c.display === "none" || c.visibility === "hidden") continue;
    let h = "";
    for (const k of e.childNodes)
      k.nodeType === Node.TEXT_NODE && (h += k.textContent);
    if (!h && e.children.length === 0 && (h = e.textContent || ""), h = h.trim(), !h) continue;
    const d = e.getBoundingClientRect();
    let p = d.left - r.left, f = d.top - r.top, m, g;
    if (d.width > 1 && d.height > 1 ? (m = p + d.width / 2, g = f + d.height / 2) : (m = p, g = f), m < -200 || g < -200 || m > r.width + 200 || g > r.height + 200) continue;
    const y = `${h}@${Math.round(m)},${Math.round(g)}`;
    if (a.has(y)) continue;
    a.add(y);
    const s = c.fontSize || "14px", u = c.fontWeight || "400", x = c.fontFamily || "system-ui, -apple-system, sans-serif", b = c.color || "#ffffff";
    t.fillStyle = b, t.font = `${u} ${s} ${x}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(h, m, g);
  }
}
function Jh(i, t, r, n, o, a) {
  i.beginPath(), i.moveTo(t + a, r), i.lineTo(t + n - a, r), i.quadraticCurveTo(t + n, r, t + n, r + a), i.lineTo(t + n, r + o - a), i.quadraticCurveTo(t + n, r + o, t + n - a, r + o), i.lineTo(t + a, r + o), i.quadraticCurveTo(t, r + o, t, r + o - a), i.lineTo(t, r + a), i.quadraticCurveTo(t, r, t + a, r), i.closePath();
}
function wg(i, t) {
  const r = URL.createObjectURL(i), n = document.createElement("a");
  n.href = r, n.download = t, n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n), setTimeout(() => URL.revokeObjectURL(r), 100);
}
async function Uv(i, t = "diagram", r = 2) {
  var o;
  if (!i)
    throw new Error("No container element provided");
  const n = ((o = i.querySelector('[class*="canvas"]')) == null ? void 0 : o.parentElement) || i.firstElementChild || i;
  try {
    const a = await vg(n, r);
    return new Promise((e, c) => {
      a.toBlob(
        (h) => {
          if (!h) {
            c(new Error("Failed to create PNG"));
            return;
          }
          wg(h, `${t}.png`), e();
        },
        "image/png",
        1
      );
    });
  } catch (a) {
    throw console.error("Export failed:", a), new Error(`Export failed: ${a.message}`);
  }
}
function jv(i, t = "diagram") {
  if (!i)
    throw new Error("No container element provided");
  const r = i.querySelector("svg");
  if (!r)
    throw new Error("No SVG element found in the diagram");
  const n = r.cloneNode(!0), o = r.getBoundingClientRect(), a = r.querySelectorAll("*"), e = n.querySelectorAll("*");
  a.forEach((d, p) => {
    const f = e[p];
    if (f)
      try {
        const m = window.getComputedStyle(d);
        ["fill", "stroke", "stroke-width", "stroke-dasharray", "opacity", "font-size", "font-family", "font-weight"].forEach((g) => {
          const y = m.getPropertyValue(g);
          y && y !== "none" && y !== "normal" && f.setAttribute(g, y);
        }), f.style.animation = "none";
      } catch {
      }
  }), n.setAttribute("width", o.width), n.setAttribute("height", o.height), n.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const c = `<?xml version="1.0" encoding="UTF-8"?>
` + new XMLSerializer().serializeToString(n), h = new Blob([c], { type: "image/svg+xml;charset=utf-8" });
  wg(h, `${t}.svg`);
}
async function Gv(i, t = 2) {
  var n;
  if (!i)
    throw new Error("No container element provided");
  const r = ((n = i.querySelector('[class*="canvas"]')) == null ? void 0 : n.parentElement) || i.firstElementChild || i;
  try {
    const o = await vg(r, t);
    return new Promise((a, e) => {
      o.toBlob(
        async (c) => {
          if (!c) {
            e(new Error("Failed to create image"));
            return;
          }
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ "image/png": c })
            ]), a();
          } catch (h) {
            console.error("Clipboard error:", h), e(new Error("Clipboard access denied. Try using HTTPS."));
          }
        },
        "image/png",
        1
      );
    });
  } catch (o) {
    throw new Error(`Copy failed: ${o.message}`);
  }
}
function Yv(i) {
  if (!i)
    throw new Error("No container element provided");
  const t = i.cloneNode(!0), r = i.getBoundingClientRect(), n = r.width + 100, o = r.height + 100, a = window.open("", "_blank", `width=${n},height=${o}`);
  if (!a)
    throw new Error("Pop-up blocked. Please allow pop-ups.");
  let e = "";
  for (const c of document.styleSheets)
    try {
      for (const h of c.cssRules)
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
const Sg = {
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
function Hv(i) {
  const t = [], r = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/.test(navigator.platform);
  i.meta && t.push(r ? "⌘" : "Ctrl"), i.shift && t.push(r ? "⇧" : "Shift"), i.alt && t.push(r ? "⌥" : "Alt");
  let n = i.key;
  return n === "ArrowUp" ? n = "↑" : n === "ArrowDown" ? n = "↓" : n === "ArrowLeft" ? n = "←" : n === "ArrowRight" ? n = "→" : n === "Home" ? n = "Home" : n === "=" ? n = "+" : n === "/" ? n = "/" : n = n.toUpperCase(), t.push(n), t.join(r ? "" : "+");
}
function Vv() {
  const i = {};
  return Object.entries(Sg).forEach(([t, r]) => {
    if (t.endsWith("_ALT")) return;
    const n = r.category || "Other";
    i[n] || (i[n] = []), i[n].push({
      name: t,
      ...r,
      formatted: Hv(r)
    });
  }), i;
}
function Xv(i, t) {
  var c;
  const n = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? i.metaKey : i.ctrlKey;
  if (t.meta && !n || !t.meta && n || t.shift && !i.shiftKey || !t.shift && i.shiftKey && t.key !== "?" || t.alt && !i.altKey || !t.alt && i.altKey) return !1;
  const o = i.key.toLowerCase(), a = t.key.toLowerCase(), e = (c = t.keyAlt) == null ? void 0 : c.toLowerCase();
  return o === a || e && o === e;
}
function Kv(i, t = !0) {
  const r = H((n) => {
    if (!t) return;
    const o = n.target;
    if (!(o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable)) {
      for (const [a, e] of Object.entries(Sg))
        if (Xv(n, e)) {
          const c = i[a];
          if (c) {
            n.preventDefault(), c(n);
            return;
          }
        }
    }
  }, [i, t]);
  se(() => (window.addEventListener("keydown", r), () => window.removeEventListener("keydown", r)), [r]);
}
function Qv(i) {
  const t = i.trim().toLowerCase();
  return t.startsWith("flowchart") || t.startsWith("graph") ? "flowchart" : t.startsWith("sequencediagram") ? "sequence" : t.startsWith("classdiagram") ? "class" : t.startsWith("statediagram") ? "state" : t.startsWith("erdiagram") ? "erd" : t.startsWith("gantt") ? "gantt" : t.startsWith("pie") ? "pie" : t.startsWith("gitgraph") ? "git" : t.startsWith("journey") ? "journey" : t.startsWith("mindmap") ? "mindmap" : t.startsWith("c4context") || t.startsWith("c4container") || t.startsWith("c4component") || t.startsWith("c4dynamic") || t.startsWith("c4deployment") ? "c4" : t.startsWith("timeline") ? "timeline" : t.startsWith("quadrantchart") ? "quadrant" : t.startsWith("sankey") ? "sankey" : t.startsWith("requirementdiagram") ? "requirement" : null;
}
function Oe(i) {
  return i.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}
function Zv(i) {
  const t = i.split(`
`), r = t[0].trim().toLowerCase(), n = t.slice(1);
  let o = "TB";
  const a = r.match(/(?:flowchart|graph)\s+(td|tb|lr|rl|bt)/i);
  a && (o = a[1].toUpperCase(), o === "TD" && (o = "TB"));
  const e = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = [];
  let f = !1, m = null;
  const g = (E) => {
    E = E.trim();
    let M = E.match(/^(\w+)\(\(\((.+)\)\)\)$/);
    return M ? { id: M[1], label: Oe(M[2]), type: "start" } : (M = E.match(/^(\w+)\{\{(.+)\}\}$/), M ? { id: M[1], label: Oe(M[2]), type: "hexagon" } : (M = E.match(/^(\w+)\[\[(.+)\]\]$/), M ? { id: M[1], label: Oe(M[2]), type: "subroutine" } : (M = E.match(/^(\w+)\[\/(.+)\/\]$/), M ? { id: M[1], label: Oe(M[2]), type: "io" } : (M = E.match(/^(\w+)\[\\(.+)\\\]$/), M ? { id: M[1], label: Oe(M[2]), type: "io" } : (M = E.match(/^(\w+)\[\/(.+)\\\]$/), M ? { id: M[1], label: Oe(M[2]), type: "trapezoid" } : (M = E.match(/^(\w+)\[\\(.+)\/\]$/), M ? { id: M[1], label: Oe(M[2]), type: "trapezoid" } : (M = E.match(/^(\w+)>(.+)\]$/), M ? { id: M[1], label: Oe(M[2]), type: "flag" } : (M = E.match(/^(\w+)\(\(([^)]+)\)\)$/), M ? { id: M[1], label: Oe(M[2]), type: "start" } : (M = E.match(/^(\w+)\(\[([^\]]+)\]\)$/), M ? { id: M[1], label: Oe(M[2]), type: "process" } : (M = E.match(/^(\w+)\[\(([^)]+)\)\]$/), M ? { id: M[1], label: Oe(M[2]), type: "database" } : (M = E.match(/^(\w+)\{([^}]+)\}$/), M ? { id: M[1], label: Oe(M[2]), type: "decision" } : (M = E.match(/^(\w+)\[([^\]]+)\]$/), M ? { id: M[1], label: Oe(M[2]), type: "process" } : (M = E.match(/^(\w+)\(([^)]+)\)$/), M ? { id: M[1], label: Oe(M[2]), type: "process" } : (M = E.match(/^(\w+)$/), M ? { id: M[1], label: M[1], type: "process" } : null))))))))))))));
  }, y = (E) => E.replace(/fa:fa-[\w-]+\s*/g, "").trim() || E;
  n.forEach((E) => {
    if (E = E.trim(), !E || E.startsWith("%%")) return;
    const M = E.match(/^subgraph\s+(.+)/i);
    if (M) {
      m = Oe(M[1]), d.has(m) || d.set(m, []);
      return;
    }
    if (E === "end") {
      m = null;
      return;
    }
    const _ = /^(.+?)\s*(--+>|==+>|-\.+->?|--+o|--+x|~~~|--+)\s*(?:\|([^|]*)\|)?\s*(.+)$/;
    let P = E.match(_);
    if (!P) {
      const W = /^(.+?)\s*--\s+([^-]+?)\s+-->\s*(.+)$/, B = E.match(W);
      B && (P = [E, B[1], "-->", B[2].trim(), B[3]]);
    }
    if (P) {
      const [, W, B, L, j] = P, q = g(W.trim());
      if (q) {
        const re = y(q.label), oe = q.label !== q.id;
        (oe || !e.has(q.id)) && e.set(q.id, re), (oe || !c.has(q.id)) && c.set(q.id, q.type), q.type === "decision" && (f = !0), m && (h.set(q.id, m), d.get(m).includes(q.id) || d.get(m).push(q.id));
      }
      const X = g(j.trim());
      if (X) {
        const re = y(X.label), oe = X.label !== X.id;
        (oe || !e.has(X.id)) && e.set(X.id, re), (oe || !c.has(X.id)) && c.set(X.id, X.type), X.type === "decision" && (f = !0), m && (h.set(X.id, m), d.get(m).includes(X.id) || d.get(m).push(X.id));
      }
      q && X && p.push({
        from: q.id,
        to: X.id,
        label: L ? Oe(L) : ""
      });
      return;
    }
    const A = g(E);
    if (A) {
      const W = y(A.label), B = A.label !== A.id;
      (B || !e.has(A.id)) && e.set(A.id, W), (B || !c.has(A.id)) && c.set(A.id, A.type), A.type === "decision" && (f = !0), m && (h.set(A.id, m), d.get(m).includes(A.id) || d.get(m).push(A.id));
    }
  });
  const s = [];
  p.forEach(({ from: E, to: M }) => {
    s.includes(E) || s.push(E), s.includes(M) || s.push(M);
  }), e.forEach((E, M) => {
    s.includes(M) || s.push(M);
  });
  const u = /* @__PURE__ */ new Map();
  let x = !1;
  p.forEach(({ from: E, label: M }) => {
    u.set(E, (u.get(E) || 0) + 1), M && /interact|fetch|cache|call|send|use|connect|query|read|write|get|post|create|update|webhook|event/i.test(M) && (x = !0);
  });
  const b = [...u.values()].some((E) => E > 1), k = d.size > 0;
  if (!f && (k || b && x || x || e.size >= 8 && b))
    return {
      type: "architecture",
      source: Jv(e, p, s, h, d, c)
    };
  const C = [], $ = /* @__PURE__ */ new Set();
  if (o !== "TB" && C.push(`direction: ${o}`), s.length > 0) {
    const E = s[0], M = e.get(E) || E, _ = c.get(E) || "process";
    C.push(`(${_}) ${M}`), $.add(E);
  }
  return p.forEach(({ from: E, to: M, label: _ }) => {
    const P = e.get(E) || E, A = e.get(M) || M, W = c.get(M) || "process";
    _ ? C.push(`${P} -> (${W}) ${A}: ${_}`) : C.push(`${P} -> (${W}) ${A}`), $.add(M);
  }), {
    type: "flowchart",
    source: C.join(`
`)
  };
}
function Jv(i, t, r, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map()) {
  const e = [], c = {
    clients: /^(fe|ui|frontend|user|client|browser|mobile|app)\b/i,
    gateway: /gateway|proxy|load.?balancer|nginx|router|ingress|kong|traefik|envoy/i,
    service: /(api|service|server|backend|engine|controller|handler|processor)\b/i,
    database: /database|db|mysql|postgres|mongo|redis|cache|storage|sql|queue|index|store|elastic|dynamo|s3|bucket/i,
    external: /external|third.?party|vendor|saas|stripe|twilio|sendgrid|aws|gcp|azure/i
  }, h = (b, k) => {
    const w = `${b} ${k}`.toLowerCase();
    return c.clients.test(w) ? "clients" : c.gateway.test(w) ? "gateway" : c.database.test(w) ? "database" : c.external.test(w) ? "external" : (c.service.test(w), "service");
  }, d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  r.forEach((b) => {
    d.set(b, []), p.set(b, []);
  }), t.forEach(({ from: b, to: k }) => {
    d.has(b) && d.get(b).push(k), p.has(k) && p.get(k).push(b);
  });
  const f = /* @__PURE__ */ new Set();
  r.forEach((b) => {
    const k = i.get(b) || b;
    ((p.get(b) || []).length === 0 || c.clients.test(k) || c.clients.test(b)) && f.add(b);
  }), f.size === 0 && r.length > 0 && f.add(r[0]);
  const m = /* @__PURE__ */ new Set();
  t.forEach(({ from: b, to: k }, w) => {
    f.has(k) && !f.has(b) && m.add(w);
  });
  const g = /* @__PURE__ */ new Map();
  f.forEach((b) => g.set(b, 0));
  const y = [...f];
  for (; y.length > 0; ) {
    const b = y.shift(), k = g.get(b);
    (d.get(b) || []).forEach((C) => {
      const $ = t.findIndex((_) => _.from === b && _.to === C);
      if (m.has($)) return;
      const E = g.get(C), M = k + 1;
      (E === void 0 || E < M) && (g.set(C, M), y.includes(C) || y.push(C));
    });
  }
  o.size > 0 && o.forEach((b, k) => {
    if (b.filter((C) => (p.get(C) || []).filter((E) => !b.includes(E)).length === 0).length === b.length) {
      Math.max(0, ...g.values()), b.forEach(($, E) => {
        g.has($) || g.set($, 0);
      });
      const C = b.filter(($) => g.has($));
      for (; C.length > 0; ) {
        const $ = C.shift(), E = g.get($);
        (d.get($) || []).filter((_) => b.includes(_) || !g.has(_)).forEach((_) => {
          const P = E + 1;
          (!g.has(_) || g.get(_) < P) && (g.set(_, P), C.includes(_) || C.push(_));
        });
      }
    }
  });
  const s = g.size > 0 ? Math.floor([...g.values()].reduce((b, k) => b + k, 0) / g.size) : 0;
  r.forEach((b) => {
    g.has(b) || g.set(b, s);
  });
  const u = /* @__PURE__ */ new Map();
  return r.forEach((b) => {
    const k = g.get(b);
    u.has(k) || u.set(k, []), u.get(k).push(b);
  }), [...u.keys()].sort((b, k) => b - k).forEach((b) => {
    const k = u.get(b), w = /* @__PURE__ */ new Map();
    k.forEach((C) => {
      const $ = i.get(C) || C, E = n.get(C);
      let M;
      if (E) {
        const _ = E.toLowerCase();
        /ingestion|ingest|import|input/i.test(_) ? M = "service" : /gateway|api/i.test(_) ? M = "gateway" : /data|storage|database/i.test(_) ? M = "database" : /external|third/i.test(_) ? M = "external" : M = h($, C);
      } else
        M = h($, C);
      w.has(M) || w.set(M, []), w.get(M).push(C);
    }), w.forEach((C, $) => {
      const E = C.map((M) => i.get(M) || M);
      e.push(`[${$}] ${E.join(", ")}`);
    });
  }), e.push(""), t.forEach(({ from: b, to: k, label: w }) => {
    const C = i.get(b) || b, $ = i.get(k) || k;
    w ? e.push(`${C} -> ${$}: ${w}`) : e.push(`${C} -> ${$}`);
  }), e.join(`
`);
}
function e2(i) {
  const t = i.split(`
`).slice(1), r = /* @__PURE__ */ new Set(), n = [], o = /* @__PURE__ */ new Map();
  t.forEach((e) => {
    if (e = e.trim(), !e || e.startsWith("%%")) return;
    const c = e.match(/^participant\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (c) {
      const E = c[1], M = c[2] || c[1];
      o.set(E, M), r.add(M);
      return;
    }
    const h = e.match(/^actor\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (h) {
      const E = h[1], M = h[2] || h[1];
      o.set(E, M), r.add(M);
      return;
    }
    const d = e.match(/^loop\s+(.+)/i);
    if (d) {
      n.push(`loop ${d[1]}`);
      return;
    }
    const p = e.match(/^alt\s+(.+)/i);
    if (p) {
      n.push(`alt ${p[1]}`);
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
    const s = e.match(/^critical\s+(.+)/i);
    if (s) {
      n.push(`critical ${s[1]}`);
      return;
    }
    const u = e.match(/^option\s+(.+)/i);
    if (u) {
      n.push(`option ${u[1]}`);
      return;
    }
    const x = e.match(/^break\s+(.+)/i);
    if (x) {
      n.push(`break ${x[1]}`);
      return;
    }
    const b = e.match(/^rect\s+(.+)/i);
    if (b) {
      n.push(`rect ${b[1]}`);
      return;
    }
    const k = e.match(/^(activate|deactivate)\s+(\w+)/i);
    if (k) {
      const E = k[2], M = o.get(E) || E;
      n.push(`${k[1].toLowerCase()} ${M}`);
      return;
    }
    if (e.toLowerCase() === "end") {
      n.push("end");
      return;
    }
    const w = e.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);
    if (w) {
      const E = w[1].toLowerCase(), M = w[2], _ = o.get(M) || M, P = w[3];
      n.push(`note ${E} of ${_}: ${P}`);
      return;
    }
    const C = e.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);
    if (C) {
      const E = C[1].split(",").map((M) => {
        const _ = M.trim();
        return o.get(_) || _;
      });
      n.push(`note over ${E.join(", ")}: ${C[2]}`);
      return;
    }
    const $ = e.match(/(\w+)\s*(-?->>?|-->>?|-x|--x|-\)|--\))([+-])?\s*(\w+)\s*:\s*(.+)/);
    if ($) {
      const [, E, M, _, P, A] = $, W = o.get(E) || E, B = o.get(P) || P, L = M.startsWith("--"), j = M.includes("x"), q = M.includes(")");
      r.add(W), r.add(B);
      let X = L ? "-->" : "->";
      j ? X = L ? "--x" : "-x" : q && (X = L ? "--)" : "-)"), n.push(`${W} ${X} ${B}: ${A}`), _ === "+" ? n.push(`activate ${B}`) : _ === "-" && n.push(`deactivate ${B}`);
    }
  });
  const a = [];
  return r.size > 0 && (a.push(`participant ${[...r].join(", ")}`), a.push("")), a.push(...n), a.join(`
`);
}
function t2(i) {
  const t = i.split(`
`).slice(1), r = /* @__PURE__ */ new Map(), n = [];
  let o = null;
  t.forEach((e) => {
    if (e = e.trim(), !e || e.startsWith("%%")) return;
    const c = e.match(/^class\s+(\w+)/i);
    if (c) {
      o = c[1], r.has(o) || r.set(o, { name: o, members: [] });
      return;
    }
    if (o && (e.startsWith("+") || e.startsWith("-") || e.startsWith("#") || e.startsWith("~"))) {
      r.get(o).members.push(e);
      return;
    }
    const h = e.match(/^(\w+)\s*:\s*(.+)/);
    if (h && !e.includes("--") && !e.includes("..")) {
      const [, p, f] = h;
      r.has(p) || r.set(p, { name: p, members: [] }), r.get(p).members.push(f);
      return;
    }
    const d = e.match(/(\w+)\s*(--|>|\.\.>|-->|--\*|--o|\.\.|--)\s*(\w+)(?:\s*:\s*(.+))?/);
    if (d) {
      const [, p, f, m, g] = d;
      let y = "-->";
      f === "--|>" ? y = "--|>" : f === "--*" ? y = "--*" : f === "--o" ? y = "--o" : f.includes("..") && (y = "..>"), n.push({ from: p, to: m, arrow: y, label: g || "" });
    }
  });
  const a = [];
  return r.forEach(({ name: e, members: c }) => {
    a.push(`class ${e}`), c.forEach((h) => a.push(h)), a.push("");
  }), n.forEach(({ from: e, to: c, arrow: h, label: d }) => {
    const p = d ? `${e} ${h} ${c} : ${d}` : `${e} ${h} ${c}`;
    a.push(p);
  }), a.join(`
`);
}
function r2(i) {
  const t = i.split(`
`).slice(1), r = /* @__PURE__ */ new Map(), n = [], o = [], a = /* @__PURE__ */ new Map();
  t.forEach((c) => {
    if (c = c.trim(), !c || c.startsWith("%%")) return;
    const h = c.match(/^state\s+"([^"]+)"\s+as\s+(\w+)/i);
    if (h) {
      const [, s, u] = h;
      a.set(u, s), r.has(u) || r.set(u, { id: u });
      return;
    }
    const d = c.match(/^(\w+)\s*:\s*([^{]+)$/);
    if (d && !c.includes("-->")) {
      const [, s, u] = d;
      a.set(s, u.trim()), r.has(s) || r.set(s, { id: s });
      return;
    }
    const p = c.match(/^state\s+(\w+)\s*\{?\s*$/i);
    if (p) {
      const s = p[1];
      if (!r.has(s))
        r.set(s, { id: s, isComposite: !0, children: [] });
      else {
        const u = r.get(s);
        u.isComposite = !0, u.children = u.children || [];
      }
      o.push(s);
      return;
    }
    if (c === "}") {
      o.pop();
      return;
    }
    const f = c.match(/^state\s+(\w+)\s*<<(fork|join)>>/i);
    if (f) {
      const [, s, u] = f;
      r.set(s, { id: s, specialType: u.toLowerCase() });
      return;
    }
    const m = c.match(/^state\s+(\w+)\s*<<choice>>/i);
    if (m) {
      const s = m[1];
      r.set(s, { id: s, specialType: "choice" });
      return;
    }
    const g = c.match(/^state\s+(\w+)\s*<<note>>/i);
    if (g) {
      const s = g[1];
      r.set(s, { id: s, specialType: "note" });
      return;
    }
    if (c.includes("[*]")) {
      const s = c.match(/\[\*\]\s*-->\s*(\w+)/), u = c.match(/(\w+)\s*-->\s*\[\*\]/);
      if (s) {
        const x = s[1];
        if (r.has(x) ? r.get(x).isInitial = !0 : r.set(x, { id: x, isInitial: !0 }), o.length > 0) {
          const b = r.get(o[o.length - 1]);
          b && b.children && !b.children.includes(x) && b.children.push(x);
        }
      }
      if (u) {
        const x = u[1];
        r.has(x) ? r.get(x).isFinal = !0 : r.set(x, { id: x, isFinal: !0 });
      }
      return;
    }
    const y = c.match(/(\w+)\s*-->\s*(\w+)(?:\s*:\s*(.+))?/);
    if (y) {
      const [, s, u, x] = y;
      if (r.has(s) || r.set(s, { id: s }), r.has(u) || r.set(u, { id: u }), n.push({ from: s, to: u, event: x || "" }), o.length > 0) {
        const b = r.get(o[o.length - 1]);
        b && b.children && (b.children.includes(s) || b.children.push(s), b.children.includes(u) || b.children.push(u));
      }
    }
  });
  const e = [];
  return r.forEach((c) => {
    const h = a.get(c.id), d = h ? `${c.id}: ${h}` : c.id;
    c.isInitial ? e.push(`(initial) ${d}`) : c.isFinal ? e.push(`(final) ${d}`) : c.specialType === "fork" ? e.push(`(fork) ${d}`) : c.specialType === "join" ? e.push(`(join) ${d}`) : c.specialType === "choice" ? e.push(`(choice) ${d}`) : c.isComposite && e.push(`(composite) ${d}`);
  }), e.length > 0 && e.push(""), n.forEach(({ from: c, to: h, event: d }) => {
    const p = d ? `${c} -> ${h}: ${d}` : `${c} -> ${h}`;
    e.push(p);
  }), e.join(`
`);
}
function n2(i) {
  const t = i.split(`
`).slice(1), r = /* @__PURE__ */ new Map();
  t.forEach((o) => {
    if (o = o.trim(), !o || o.startsWith("%%")) return;
    const a = o.match(/^(\w+)\s*\{/);
    if (a) {
      r.set(a[1], { name: a[1], fields: [] });
      return;
    }
    const e = o.match(/^\s*(\w+)\s+(\w+)\s*(PK|FK)?/);
    if (e && r.size > 0) {
      const [, c, h, d] = e, p = Array.from(r.values()).pop();
      p && p.fields.push({
        name: h,
        type: c.toUpperCase(),
        isPK: d === "PK",
        isFK: d === "FK"
      });
    }
  });
  const n = [];
  return r.forEach(({ name: o, fields: a }) => {
    const e = a.map((c) => {
      let h = `${c.name} ${c.type}`;
      return c.isPK && (h += " PRIMARY KEY"), h;
    }).join(", ");
    n.push(`CREATE TABLE ${o} (${e});`);
  }), n.join(`
`);
}
function i2(i) {
  const t = i.split(`
`).slice(1), r = [], n = /* @__PURE__ */ new Map();
  let o = "", a = 0, e = "";
  return t.forEach((c) => {
    if (c = c.trim(), !c || c.startsWith("%%")) return;
    const h = c.match(/^title\s+(.+)/i);
    if (h) {
      e = h[1].trim();
      return;
    }
    if (/^(dateFormat|axisFormat|excludes|todayMarker|tickInterval|weekday)/i.test(c))
      return;
    if (c.toLowerCase().startsWith("section")) {
      o = c.replace(/^section\s*/i, "").trim(), r.push(`== ${o} ==`);
      return;
    }
    const d = c.match(/^(.+?)\s*:\s*(.+)$/);
    if (d) {
      const p = d[1].trim(), m = d[2].trim().split(",").map((w) => w.trim()), g = [];
      let y = null, s = null, u = null, x = null;
      m.forEach((w) => {
        /^(done|active|crit|milestone)$/i.test(w) ? g.push(w.toLowerCase()) : /^after\s+/i.test(w) ? s = w.replace(/^after\s+/i, "").trim() : /^\d+d?$/.test(w) ? x = parseInt(w) : /^\d{4}-\d{2}-\d{2}$/.test(w) || /^\d+$/.test(w) ? u ? x || (x = parseInt(w)) : u = w : /^\w+$/.test(w) && !y && (y = w);
      }), x || (x = 1);
      let b = a;
      if (s && n.has(s)) {
        const w = n.get(s);
        b = w.start + w.duration;
      } else u && /^\d+$/.test(u) && (b = parseInt(u));
      y && n.set(y, { start: b, duration: x });
      let k = `${p}, ${b}, ${x}`;
      g.length > 0 && (k += ` [${g.join(", ")}]`), s && (k += ` after:${s}`), r.push(k), a = b + x;
    }
  }), e && (r.unshift(`title: ${e}`), r.splice(1, 0, "")), r.join(`
`);
}
function o2(i) {
  const t = i.split(`
`).slice(1), r = [];
  return t.forEach((n) => {
    if (n = n.trim(), !n || n.startsWith("%%") || n.startsWith("title")) return;
    const o = n.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);
    o && r.push({ label: o[1], value: parseFloat(o[2]) });
  }), r.map((n) => `"${n.label}": ${n.value}`).join(`
`);
}
function a2(i) {
  const t = i.split(`
`).slice(1), r = [];
  return t.forEach((n) => {
    if (n = n.trim(), !n || n.startsWith("%%")) return;
    const o = n.match(/^commit(?:\s+id:\s*"([^"]+)")?(?:\s+msg:\s*"([^"]+)")?/i);
    if (o) {
      const h = o[2] || o[1] || "Commit";
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
    const c = n.match(/^merge\s+(\w+)/i);
    if (c) {
      r.push(`merge ${c[1]}`);
      return;
    }
  }), r.join(`
`);
}
function s2(i) {
  const t = i.split(`
`), r = [];
  let n = "", o = null;
  t.forEach((c) => {
    if (c = c.trim(), !c || c.startsWith("%%") || c.toLowerCase() === "journey") return;
    const h = c.match(/^title\s+(.+)/i);
    if (h) {
      n = h[1].trim();
      return;
    }
    const d = c.match(/^section\s+(.+)/i);
    if (d) {
      o = {
        name: d[1].trim(),
        tasks: []
      }, r.push(o);
      return;
    }
    const p = c.match(/^(.+?):\s*(\d+)(?:\s*:\s*(.+))?$/);
    if (p && o) {
      const f = p[1].trim(), m = parseInt(p[2]), g = p[3] || "", y = g ? g.split(",").map((s) => s.trim()).filter((s) => s) : [];
      o.tasks.push({ task: f, score: m, actors: y });
    }
  });
  const a = [];
  n && (a.push(`title: ${n}`), a.push(""));
  const e = /* @__PURE__ */ new Set();
  return r.forEach((c) => {
    c.tasks.forEach((h) => h.actors.forEach((d) => e.add(d)));
  }), e.size > 0 && (a.push(`actors: ${[...e].join(", ")}`), a.push("")), r.forEach((c) => {
    a.push(`== ${c.name} ==`), c.tasks.forEach((h) => {
      const d = h.actors.length > 0 ? ` | ${h.actors.join(", ")}` : "";
      a.push(`- ${h.task} | ${h.score}${d}`);
    }), a.push("");
  }), a.join(`
`);
}
function c2(i) {
  const t = i.split(`
`).slice(1), r = [];
  return t.forEach((n) => {
    if (!n.trim() || n.trim().startsWith("%%")) return;
    const o = n.match(/^(\s*)/)[1].length, a = n.trim().replace(/^\(\((.+)\)\)$/, "$1").replace(/^\((.+)\)$/, "$1").replace(/^\[(.+)\]$/, "$1").replace(/^{{(.+)}}$/, "$1");
    a && r.push("  ".repeat(Math.floor(o / 2)) + a);
  }), r.join(`
`);
}
function l2(i) {
  const t = i.split(`
`), r = t[0].trim().toLowerCase();
  r.includes("c4container") || r.includes("c4component") || r.includes("c4dynamic") || r.includes("c4deployment");
  const n = /* @__PURE__ */ new Map(), o = [], a = [], e = /* @__PURE__ */ new Map(), c = (s) => {
    const u = s.match(/^(\w+)\s*\((.+)\)\s*$/);
    if (!u) return null;
    const x = u[1], b = u[2], k = [];
    let w = "", C = !1, $ = "";
    for (let E = 0; E < b.length; E++) {
      const M = b[E];
      (M === '"' || M === "'") && !C ? (C = !0, $ = M) : M === $ && C ? (C = !1, $ = "") : M === "," && !C ? (k.push(w.trim().replace(/^["']|["']$/g, "")), w = "") : w += M;
    }
    return w.trim() && k.push(w.trim().replace(/^["']|["']$/g, "")), { funcName: x, args: k };
  };
  t.slice(1).forEach((s) => {
    if (s = s.trim(), !s || s.startsWith("%%") || s.startsWith("title")) return;
    const u = s.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(([^,]+),\s*["']([^"']+)["'](?:,\s*["']([^"']+)["'])?\s*\)/i);
    if (u) {
      const $ = u[2].trim(), E = u[3], M = u[4] || u[1].replace("_Boundary", "").toLowerCase(), _ = a.length > 0 ? a[a.length - 1].alias : null;
      e.set($, {
        label: E,
        type: M,
        parentBoundary: _
      }), a.push({
        type: u[1],
        alias: $,
        label: E
      });
      return;
    }
    if (s === "}" || s === "{") {
      s === "}" && a.length > 0 && a.pop();
      return;
    }
    if (s.startsWith("Update")) return;
    const x = c(s);
    if (!x) return;
    const { funcName: b, args: k } = x, w = b.toLowerCase(), C = a.length > 0 ? a[a.length - 1].alias : null;
    if (w.startsWith("person")) {
      const $ = w.includes("_ext");
      n.set(k[0], {
        type: $ ? "external" : "clients",
        label: k[1] || k[0],
        description: k[2] || "",
        boundary: C
      });
      return;
    }
    if (w.startsWith("system")) {
      const $ = w.includes("_ext"), E = w.includes("db"), M = w.includes("queue");
      let _ = "service";
      $ ? _ = "external" : E ? _ = "database" : M && (_ = "service"), n.set(k[0], {
        type: _,
        label: k[1] || k[0],
        description: k[2] || "",
        technology: "",
        boundary: C
      });
      return;
    }
    if (w.startsWith("container")) {
      const $ = w.includes("_ext"), E = w.includes("db"), M = w.includes("queue");
      let _ = "service";
      $ ? _ = "external" : E ? _ = "database" : M && (_ = "service"), n.set(k[0], {
        type: _,
        label: k[1] || k[0],
        technology: k[2] || "",
        description: k[3] || "",
        boundary: C
      });
      return;
    }
    if (w.startsWith("component")) {
      const $ = w.includes("_ext"), E = w.includes("db");
      let M = "service";
      $ ? M = "external" : E && (M = "database"), n.set(k[0], {
        type: M,
        label: k[1] || k[0],
        technology: k[2] || "",
        description: k[3] || "",
        boundary: C
      });
      return;
    }
    if (w === "node" || w === "node_l" || w === "node_r") {
      n.set(k[0], {
        type: "service",
        label: k[1] || k[0],
        technology: k[2] || "",
        description: k[3] || "",
        boundary: C
      });
      return;
    }
    if (w.startsWith("deployment_node")) {
      n.set(k[0], {
        type: "service",
        label: k[1] || k[0],
        technology: k[2] || "",
        description: k[3] || "",
        boundary: C
      });
      return;
    }
    if (w.startsWith("rel") || w === "birel") {
      const $ = w === "birel";
      let E, M, _, P;
      w === "relindex" ? (E = k[1], M = k[2], _ = k[3] || "", P = k[4] || "") : (E = k[0], M = k[1], _ = k[2] || "", P = k[3] || ""), o.push({
        from: E,
        to: M,
        label: P ? `${_} [${P}]` : _,
        bidirectional: $
      });
      return;
    }
  });
  const h = [], d = /* @__PURE__ */ new Map(), p = [];
  n.forEach((s, u) => {
    s.boundary ? (d.has(s.boundary) || d.set(s.boundary, []), d.get(s.boundary).push({ alias: u, ...s })) : p.push({ alias: u, ...s });
  });
  const f = (s) => {
    const u = /* @__PURE__ */ new Map();
    s.forEach((b) => {
      u.has(b.type) || u.set(b.type, []), u.get(b.type).push(b);
    });
    const x = ["clients", "external", "gateway", "service", "database"];
    x.forEach((b) => {
      const k = u.get(b);
      if (k && k.length > 0) {
        const w = k.map((C) => C.label);
        h.push(`[${b}] ${w.join(", ")}`);
      }
    }), u.forEach((b, k) => {
      if (!x.includes(k) && b.length > 0) {
        const w = b.map((C) => C.label);
        h.push(`[${k}] ${w.join(", ")}`);
      }
    });
  };
  p.length > 0 && (f(p), h.push(""));
  const m = [], g = /* @__PURE__ */ new Map();
  e.forEach((s, u) => {
    s.parentBoundary ? (g.has(s.parentBoundary) || g.set(s.parentBoundary, []), g.get(s.parentBoundary).push(u)) : m.push(u);
  });
  const y = (s, u = "") => {
    const x = e.get(s);
    if (!x) return;
    const b = d.get(s) || [], k = g.get(s) || [];
    if (!(b.length === 0 && k.length === 0)) {
      if (h.push(`${u}group "${x.label}" {`), b.length > 0) {
        const w = /* @__PURE__ */ new Map();
        b.forEach(($) => {
          w.has($.type) || w.set($.type, []), w.get($.type).push($);
        });
        const C = ["clients", "external", "gateway", "service", "database"];
        C.forEach(($) => {
          const E = w.get($);
          if (E && E.length > 0) {
            const M = E.map((_) => _.label);
            h.push(`${u}  [${$}] ${M.join(", ")}`);
          }
        }), w.forEach(($, E) => {
          if (!C.includes(E) && $.length > 0) {
            const M = $.map((_) => _.label);
            h.push(`${u}  [${E}] ${M.join(", ")}`);
          }
        });
      }
      k.length > 0 && (b.length > 0 && h.push(""), k.forEach((w) => {
        y(w, u + "  ");
      })), h.push(`${u}}`), h.push("");
    }
  };
  return m.forEach((s) => {
    y(s);
  }), o.forEach((s) => {
    const u = n.get(s.from), x = n.get(s.to), b = (u == null ? void 0 : u.label) || s.from, k = (x == null ? void 0 : x.label) || s.to;
    s.bidirectional ? h.push(`${b} <-> ${k}: ${s.label}`) : s.label ? h.push(`${b} -> ${k}: ${s.label}`) : h.push(`${b} -> ${k}`);
  }), h.join(`
`);
}
function d2(i) {
  const t = i.split(`
`), r = [];
  let n = "", o = "";
  return t.forEach((a) => {
    if (a = a.trim(), !a || a.startsWith("%%") || a.toLowerCase() === "timeline") return;
    const e = a.match(/^title\s+(.+)/i);
    if (e) {
      n = e[1].trim();
      return;
    }
    const c = a.match(/^section\s+(.+)/i);
    if (c) {
      o = c[1].trim(), r.push(`== ${o} ==`);
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
function u2(i) {
  const t = i.split(`
`), r = [];
  let n = "";
  const o = { x: { left: "", right: "" }, y: { bottom: "", top: "" } }, a = {}, e = [];
  return t.forEach((c) => {
    var g, y;
    if (c = c.trim(), !c || c.startsWith("%%") || c.toLowerCase() === "quadrantchart") return;
    const h = c.match(/^title\s+(.+)/i);
    if (h) {
      n = h[1].trim();
      return;
    }
    const d = c.match(/^x-axis\s+(.+?)(?:\s*-->\s*(.+))?$/i);
    if (d) {
      o.x.left = d[1].trim(), o.x.right = ((g = d[2]) == null ? void 0 : g.trim()) || "";
      return;
    }
    const p = c.match(/^y-axis\s+(.+?)(?:\s*-->\s*(.+))?$/i);
    if (p) {
      o.y.bottom = p[1].trim(), o.y.top = ((y = p[2]) == null ? void 0 : y.trim()) || "";
      return;
    }
    const f = c.match(/^quadrant-(\d)\s+(.+)/i);
    if (f) {
      a[f[1]] = f[2].trim();
      return;
    }
    const m = c.match(/^(.+?)(?::::\w+)?:\s*\[([0-9.]+),\s*([0-9.]+)\]/);
    m && e.push({
      name: m[1].trim(),
      x: parseFloat(m[2]),
      y: parseFloat(m[3])
    });
  }), n && r.push(`title: ${n}`), o.x.left && r.push(`x-axis: ${o.x.left}${o.x.right ? " -> " + o.x.right : ""}`), o.y.bottom && r.push(`y-axis: ${o.y.bottom}${o.y.top ? " -> " + o.y.top : ""}`), Object.entries(a).forEach(([c, h]) => {
    r.push(`quadrant-${c}: ${h}`);
  }), r.push(""), e.forEach((c) => {
    r.push(`"${c.name}": [${c.x}, ${c.y}]`);
  }), r.join(`
`);
}
function p2(i) {
  const t = i.split(`
`), r = [], n = [];
  return t.forEach((o) => {
    if (o = o.trim(), !o || o.startsWith("%%") || o.toLowerCase().startsWith("sankey")) return;
    const a = [];
    let e = "", c = !1;
    for (let h = 0; h < o.length; h++) {
      const d = o[h];
      d === '"' && !c ? c = !0 : d === '"' && c ? c = !1 : d === "," && !c ? (a.push(e.trim()), e = "") : e += d;
    }
    if (e.trim() && a.push(e.trim()), a.length >= 3) {
      const [h, d, p] = a;
      n.push({ source: h, target: d, value: parseFloat(p) });
    }
  }), n.forEach((o) => {
    r.push(`"${o.source}" -> "${o.target}": ${o.value}`);
  }), r.join(`
`);
}
function h2(i) {
  const t = i.split(`
`), r = [], n = [];
  let o = null;
  return t.forEach((a) => {
    if (a = a.trim(), !a || a.startsWith("%%") || a.toLowerCase() === "requirementdiagram") return;
    const e = a.match(/^(requirement|functionalRequirement|interfaceRequirement|performanceRequirement|physicalRequirement|designConstraint)\s+(\w+)\s*\{?/i);
    if (e) {
      o = { type: e[1], name: e[2], id: "", text: "", risk: "", verifyMethod: "" };
      return;
    }
    const c = a.match(/^element\s+(\w+)\s*\{?/i);
    if (c) {
      o = { type: "element", name: c[1] };
      return;
    }
    if (a === "}") {
      o && (n.push(o), o = null);
      return;
    }
    if (o) {
      const d = a.match(/^(\w+):\s*(.+)/);
      d && (o[d[1]] = d[2]);
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
function f2(i) {
  const t = Qv(i);
  if (!t)
    throw new Error("Could not detect Mermaid diagram type. Supported types: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap, c4, timeline, quadrant, sankey, requirement");
  let r = "", n = t;
  switch (t) {
    case "flowchart": {
      const o = Zv(i);
      r = o.source, n = o.type;
      break;
    }
    case "sequence":
      r = e2(i);
      break;
    case "class":
      r = t2(i);
      break;
    case "state":
      r = r2(i);
      break;
    case "erd":
      r = n2(i);
      break;
    case "gantt":
      r = i2(i);
      break;
    case "pie":
      r = o2(i);
      break;
    case "git":
      r = a2(i);
      break;
    case "journey":
      r = s2(i);
      break;
    case "mindmap":
      r = c2(i);
      break;
    case "c4":
      r = l2(i), n = "architecture";
      break;
    case "timeline":
      r = d2(i);
      break;
    case "quadrant":
      r = u2(i);
      break;
    case "sankey":
      r = p2(i);
      break;
    case "requirement":
      r = h2(i);
      break;
    default:
      throw new Error(`Unsupported Mermaid diagram type: ${n}`);
  }
  return { type: n, source: r };
}
function g2(i) {
  const t = ["flowchart TD"], r = /* @__PURE__ */ new Map();
  let n = 0;
  const o = (a) => {
    const e = a.toLowerCase().replace(/[^a-z0-9]/g, "_");
    return r.has(e) || r.set(e, `N${n++}`), r.get(e);
  };
  return i.split(`
`).forEach((a) => {
    if (a = a.trim(), !a || a.startsWith("#")) return;
    const e = a.split(/\s*->\s*/);
    if (e.length >= 2)
      for (let c = 0; c < e.length - 1; c++) {
        const h = e[c].match(/^\((\w+)\)\s*(.+)/) || [null, "process", e[c]], d = e[c + 1].match(/^\((\w+)\)\s*(.+)/) || [null, "process", e[c + 1]], p = h[1], f = h[2].trim(), m = d[1];
        let g = d[2].trim(), y = "";
        const s = g.match(/^(.+?):\s*(.+)$/);
        s && (g = s[1].trim(), y = s[2].trim());
        const u = o(f), x = o(g), b = (C, $, E) => {
          switch (C) {
            case "decision":
              return `${E}{${$}}`;
            case "start":
            case "end":
              return `${E}((${$}))`;
            case "io":
              return `${E}[/${$}/]`;
            default:
              return `${E}[${$}]`;
          }
        }, k = b(p, f, u), w = b(m, g, x);
        y ? t.push(`    ${k} -->|${y}| ${w}`) : t.push(`    ${k} --> ${w}`);
      }
  }), t.join(`
`);
}
function m2(i) {
  const t = ["sequenceDiagram"];
  return i.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    if (r.toLowerCase().startsWith("participant")) {
      r.replace(/^participant\s+/i, "").split(",").map((a) => a.trim()).forEach((a) => t.push(`    participant ${a}`));
      return;
    }
    const n = r.match(/^(\w+)\s*(-->?)\s*(\w+)\s*:\s*(.+)/);
    if (n) {
      const [, o, a, e, c] = n, h = a === "-->" ? "-->>" : "->>";
      t.push(`    ${o}${h}${e}: ${c}`);
    }
  }), t.join(`
`);
}
function y2(i) {
  const t = ["classDiagram"];
  let r = null;
  return i.split(`
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
    const o = n.match(/^(\w+)\s*(-->|--\*|--o|--|>|\.\.>)\s*(\w+)(?:\s*:\s*(.+))?/);
    if (o) {
      const [, a, e, c, h] = o;
      let d = "-->";
      e === "--|>" ? d = "--|>" : e === "--*" ? d = "*--" : e === "--o" ? d = "o--" : e === "..>" && (d = "..>");
      const p = h ? `${a} ${d} ${c} : ${h}` : `${a} ${d} ${c}`;
      t.push(`    ${p}`), r = null;
    }
  }), t.join(`
`);
}
function b2(i) {
  const t = ["stateDiagram-v2"], r = [], n = [];
  return i.split(`
`).forEach((o) => {
    if (o = o.trim(), !o || o.startsWith("#")) return;
    const a = o.match(/^\((\w+)\)\s*(\w+)/);
    if (a) {
      a[1] === "initial" && r.push(a[2]), a[1] === "final" && n.push(a[2]);
      return;
    }
    const e = o.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);
    if (e) {
      const [, c, h, d] = e, p = d ? `${c} --> ${h} : ${d}` : `${c} --> ${h}`;
      t.push(`    ${p}`);
    }
  }), r.forEach((o) => t.unshift(`    [*] --> ${o}`)), n.forEach((o) => t.push(`    ${o} --> [*]`)), t.join(`
`);
}
function x2(i) {
  const t = ["erDiagram"], r = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi, n = [];
  let o;
  for (; (o = r.exec(i)) !== null; ) {
    const a = o[1], e = o[2];
    t.push(`    ${a} {`), e.split(",").forEach((c) => {
      if (c = c.trim(), !c || /^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)/i.test(c)) return;
      const h = c.match(/^[`"']?(\w+)[`"']?\s+(\w+)/);
      if (h) {
        const [, d, p] = h, f = /PRIMARY\s+KEY/i.test(c), m = /REFERENCES/i.test(c);
        let g = p.toLowerCase();
        f && (g = `${g} PK`), m && (g = `${g} FK`), t.push(`        ${g} ${d}`);
        const y = c.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);
        y && n.push({ from: a, to: y[1], field: d });
      }
    }), t.push("    }");
  }
  return n.forEach((a) => {
    t.push(`    ${a.to} ||--o{ ${a.from} : "has"`);
  }), t.join(`
`);
}
function v2(i) {
  const t = ["gantt", "    dateFormat X", "    axisFormat %d"];
  return i.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    const n = r.match(/^(.+?),\s*(\d+),\s*(\d+)/);
    if (n) {
      const [, o, a, e] = n;
      t.push(`    ${o.trim()} :${a}, ${e}d`);
    }
  }), t.join(`
`);
}
function w2(i) {
  const t = ["pie showData"];
  return i.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    const n = r.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);
    n && t.push(`    "${n[1]}" : ${n[2]}`);
  }), t.join(`
`);
}
function S2(i) {
  const t = ["gitGraph"];
  return i.split(`
`).forEach((r) => {
    if (r = r.trim(), !r || r.startsWith("#")) return;
    const n = r.match(/^commit\s+"([^"]+)"/i);
    if (n) {
      t.push(`    commit id: "${n[1]}"`);
      return;
    }
    const o = r.match(/^branch\s+(\w+)/i);
    if (o) {
      t.push(`    branch ${o[1]}`);
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
function k2(i) {
  const t = ["journey", "    title User Journey"], r = [], n = [];
  return i.split(`
`).forEach((o) => {
    var e;
    if (o = o.trim(), !o || o.startsWith("#")) return;
    const a = o.match(/^\[(\w+)\]\s*(.+?)(?:\s*:\s*(.+))?$/);
    if (a && !o.includes("->")) {
      r.push({ type: a[1], label: a[2], desc: a[3] });
      return;
    }
    if (o.includes("->")) {
      const c = o.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+)$/);
      c && n.push({ from: c[1].trim(), label: (e = c[2]) == null ? void 0 : e.trim(), to: c[3].trim() });
    }
  }), t.push("    section Journey"), r.filter((o) => o.type !== "actor").forEach((o, a) => {
    const e = 5 - Math.floor(a / 2);
    t.push(`        ${o.label}: ${Math.max(1, Math.min(5, e))}`);
  }), t.join(`
`);
}
function C2(i) {
  const t = ["mindmap"];
  return i.split(`
`).forEach((r) => {
    if (!r.trim()) return;
    const n = r.match(/^(\s*)/)[1].length, o = Math.floor(n / 2), a = r.trim();
    a && t.push("  ".repeat(o + 1) + a);
  }), t.join(`
`);
}
function $2(i, t) {
  switch (i) {
    case "flowchart":
      return g2(t);
    case "sequence":
      return m2(t);
    case "class":
      return y2(t);
    case "state":
      return b2(t);
    case "erd":
      return x2(t);
    case "gantt":
      return v2(t);
    case "pie":
      return w2(t);
    case "git":
      return S2(t);
    case "journey":
      return k2(t);
    case "mindmap":
      return C2(t);
    default:
      throw new Error(`Cannot export "${i}" to Mermaid. Supported types: flowchart, sequence, class, state, erd, gantt, pie, git, journey, mindmap`);
  }
}
function E2(i, t = "diagram") {
  const r = new Blob([i], { type: "text/plain" }), n = URL.createObjectURL(r), o = document.createElement("a");
  o.href = n, o.download = `${t}.mmd`, o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o), setTimeout(() => URL.revokeObjectURL(n), 100);
}
async function M2(i) {
  await navigator.clipboard.writeText(i);
}
function R2(i) {
  const [t, r] = Y({
    past: [],
    present: { ...i, timestamp: Date.now(), changeType: "initial" },
    future: []
  }), n = _e(!1), o = H((p, f = "unknown") => {
    n.current || r((m) => m.present.source === p.source && m.present.type === p.type && m.present.diagramName === p.diagramName && JSON.stringify(m.present.positions) === JSON.stringify(p.positions) ? m : {
      past: [...m.past.slice(-49), m.present],
      present: {
        ...p,
        timestamp: Date.now(),
        changeType: f
      },
      future: []
      // Clear redo stack on new change
    });
  }, []), a = H(() => {
    r((p) => {
      if (p.past.length === 0) return p;
      const f = p.past[p.past.length - 1];
      return n.current = !0, setTimeout(() => {
        n.current = !1;
      }, 0), {
        past: p.past.slice(0, -1),
        present: f,
        future: [p.present, ...p.future]
      };
    });
  }, []), e = H(() => {
    r((p) => {
      if (p.future.length === 0) return p;
      const f = p.future[0];
      return n.current = !0, setTimeout(() => {
        n.current = !1;
      }, 0), {
        past: [...p.past, p.present],
        present: f,
        future: p.future.slice(1)
      };
    });
  }, []), c = H(() => {
    r((p) => ({
      past: [],
      present: p.present,
      future: []
    }));
  }, []), h = H((p) => {
    r({
      past: [],
      present: { ...p, timestamp: Date.now(), changeType: "reset" },
      future: []
    });
  }, []), d = H(() => n.current, []);
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
    pushState: o,
    clear: c,
    reset: h,
    isApplying: d
  };
}
function _2(i, t) {
  let r = null;
  const n = (...o) => {
    r && clearTimeout(r), r = setTimeout(() => i(...o), t);
  };
  return n.cancel = () => {
    r && clearTimeout(r);
  }, n;
}
const we = {
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
}, kg = "ddflow_theme";
function I2() {
  try {
    return localStorage.getItem(kg) || "dark";
  } catch {
    return "dark";
  }
}
function A2(i) {
  try {
    localStorage.setItem(kg, i);
  } catch {
  }
}
const Cg = "ddflow_sketch_mode";
function T2() {
  try {
    return localStorage.getItem(Cg) === "true";
  } catch {
    return !1;
  }
}
function P2(i) {
  try {
    localStorage.setItem(Cg, i ? "true" : "false");
  } catch {
  }
}
const ye = {
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
}, de = [v.purple, v.blue, v.green, v.orange, v.pink, v.cyan, v.violet, v.teal], At = (i, t = !1) => t ? ye.fill : `linear-gradient(135deg, ${i}38, ${i}15)`, Ze = (i, t, r, n = !1) => n ? "none" : t ? `0 0 0 2px ${i}, 0 12px 28px ${i}50, 0 20px 40px rgba(0,0,0,0.25)` : r ? `0 0 0 3px rgba(124,58,237,0.7), 0 8px 24px rgba(124,58,237,0.35), 0 16px 32px ${i}25` : `0 2px 4px rgba(0,0,0,0.08), 0 8px 20px ${i}25, 0 16px 40px ${i}12`, rn = (i = !1) => i ? "'Caveat', cursive" : "system-ui, -apple-system, sans-serif", D2 = (i, t = !1) => {
  if (t) {
    if (typeof i == "string") {
      const r = parseFloat(i), n = i.replace(/[\d.]/g, "") || "px";
      return `${r * 1.25}${n}`;
    }
    return i * 1.25;
  }
  return i;
}, sr = (i, t, r, n) => {
  const o = r - i, a = n - t, e = Math.sqrt(o * o + a * a), c = Math.min(e * 0.25, 60);
  if (Math.abs(o) > Math.abs(a)) {
    const d = o > 0 ? 1 : -1;
    return `M ${i} ${t} C ${i + c * d} ${t}, ${r - c * d} ${n}, ${r} ${n}`;
  }
  const h = a > 0 ? 1 : -1;
  return `M ${i} ${t} C ${i} ${t + c * h}, ${r} ${n - c * h}, ${r} ${n}`;
}, $g = (i, t, r, n, o = !1) => {
  if (!o)
    return sr(i, t, r, n);
  const a = r - i, e = n - t, c = Math.sqrt(a * a + e * e), h = Math.max(3, Math.floor(c / 40)), d = [];
  for (let f = 0; f <= h; f++) {
    const m = f / h;
    let g = i + a * m, y = t + e * m;
    f > 0 && f < h && (g += (Math.random() - 0.5) * 3 * 2, y += (Math.random() - 0.5) * 3 * 2), d.push({ x: g, y });
  }
  if (d.length < 2) return `M ${i} ${t} L ${r} ${n}`;
  let p = `M ${d[0].x} ${d[0].y}`;
  for (let f = 1; f < d.length; f++) {
    const m = d[f - 1], g = d[f], y = (m.x + g.x) / 2, s = (m.y + g.y) / 2;
    p += ` Q ${m.x} ${m.y} ${y} ${s}`;
  }
  return p += ` L ${d[d.length - 1].x} ${d[d.length - 1].y}`, p;
};
function Pe(i = { x: 50, y: 50 }) {
  const t = _e(null), [r, n] = Y(i), [o, a] = Y(1), [e, c] = Y(!1), [h, d] = Y({ x: 0, y: 0 }), [p, f] = Y({}), [m, g] = Y(null), [y, s] = Y({ x: 0, y: 0 }), [u, x] = Y(!0), b = 25, k = H((N) => u ? Math.round(N / b) * b : N, [u, b]), [w, C] = Y(/* @__PURE__ */ new Set()), [$, E] = Y(null), [M, _] = Y(""), [P, A] = Y({}), [W, B] = Y({}), [L, j] = Y({}), [q, X] = Y({}), re = { width: 130, height: 60 }, oe = { width: 80, height: 40 }, te = { width: 300, height: 200 }, [ae, U] = Y(null), [I, O] = Y(null), [R, D] = Y(null), [z, V] = Y(null), [Q, Z] = Y(!1), [ke, Ce] = Y(null), [J, xe] = Y(""), [le, Le] = Y(!1), [ce, pe] = Y(null), [Ne, Ke] = Y(null), [qe, Be] = Y(null), [Ie, Me] = Y({}), [rt, st] = Y({}), [St, ct] = Y({}), [qt, kt] = Y(null), [Ct, ft] = Y({ horizontal: [], vertical: [] }), Ge = 5, Fe = _e(null), $t = _e(null), Ye = H((N, G) => {
    if (!t.current) return { x: 0, y: 0 };
    const ne = t.current.getBoundingClientRect();
    return {
      x: (N - ne.left - r.x) / o,
      y: (G - ne.top - r.y) / o
    };
  }, [r, o]), nn = H((N) => {
    if (N.target === t.current || N.target.classList.contains("canvas-bg"))
      if (N.shiftKey) {
        const G = Ye(N.clientX, N.clientY);
        Z(!0), V({ startX: G.x, startY: G.y, endX: G.x, endY: G.y });
      } else
        c(!0), d({ x: N.clientX - r.x, y: N.clientY - r.y });
  }, [r, Ye]), on = H((N, G, ne, fe) => {
    if (N.stopPropagation(), O(null), N.shiftKey) {
      C((Se) => {
        const We = new Set(Se);
        return We.has(G) ? We.delete(G) : We.add(G), We;
      });
      return;
    }
    C(/* @__PURE__ */ new Set([G])), g(G);
    const ve = Ye(N.clientX, N.clientY);
    s({ x: ve.x - ne, y: ve.y - fe });
  }, [Ye]), an = H((N, G, ne) => {
    N.stopPropagation(), E(G), _(ne || ""), C(/* @__PURE__ */ new Set([G]));
  }, []), sn = H(() => {
    const N = { nodeId: $, newValue: M };
    return E(null), _(""), N;
  }, [$, M]), cn = H(() => {
    E(null), _("");
  }, []), ln = H((N, G) => {
    N.preventDefault(), N.stopPropagation(), O({
      nodeId: G,
      x: N.clientX,
      y: N.clientY
    }), w.has(G) || C(/* @__PURE__ */ new Set([G]));
  }, [w]), cr = H(() => {
    O(null);
  }, []), lr = H((N, G) => {
    A((ne) => ({
      ...ne,
      [N]: G
    })), O(null);
  }, []), dr = H((N, G) => {
    B((ne) => ({
      ...ne,
      [N]: G
    }));
  }, []), dn = H((N, G) => {
    j((ne) => ({
      ...ne,
      [N]: G
    }));
  }, []), ur = H(() => {
    C(/* @__PURE__ */ new Set());
  }, []), pr = H((N) => {
    if (w.size === 0 || !N) return;
    const G = N.filter((fe) => w.has(fe.id));
    if (G.length === 0) return;
    const ne = G.map((fe) => {
      var ve, Se;
      return {
        ...fe,
        copiedX: ((ve = p[fe.id]) == null ? void 0 : ve.x) ?? fe.x,
        copiedY: ((Se = p[fe.id]) == null ? void 0 : Se.y) ?? fe.y
      };
    });
    return D(ne), ne;
  }, [w, p]), un = H(() => {
    if (!R || R.length === 0) return null;
    const N = 30;
    return R.map((G) => ({
      ...G,
      id: `${G.id}_copy_${Date.now()}`,
      x: G.copiedX + N,
      y: G.copiedY + N,
      label: G.label
    }));
  }, [R]), pn = H((N, G, ne) => {
    N.stopPropagation(), Ce(G), xe(ne || "");
  }, []), hn = H(() => {
    const N = { edgeId: ke, newValue: J };
    return Ce(null), xe(""), N;
  }, [ke, J]), fn = H(() => {
    Ce(null), xe("");
  }, []), gn = H((N, G) => {
    N.preventDefault(), N.stopPropagation(), kt({
      edgeId: G,
      x: N.clientX,
      y: N.clientY
    });
  }, []), hr = H(() => {
    kt(null);
  }, []), fr = H((N, G) => {
    Me((ne) => ({
      ...ne,
      [N]: G
    }));
  }, []), gr = H((N, G) => {
    st((ne) => ({
      ...ne,
      [N]: G
    })), kt(null);
  }, []), mr = H((N, G) => {
    ct((ne) => ({
      ...ne,
      [N]: G
    }));
  }, []), yr = H((N) => q[N] || re, [q]), br = H((N, G, ne) => {
    N.stopPropagation(), N.preventDefault();
    const fe = q[G] || re;
    U({
      nodeId: G,
      handle: ne,
      // 'se' (southeast), 'e' (east), 's' (south)
      startX: N.clientX,
      startY: N.clientY,
      startWidth: fe.width,
      startHeight: fe.height
    });
  }, [q]), Ht = H((N, G) => {
    if (!ae) return;
    const ne = (N - ae.startX) / o, fe = (G - ae.startY) / o;
    let ve = ae.startWidth, Se = ae.startHeight;
    ae.handle.includes("e") && (ve = Math.max(oe.width, Math.min(te.width, ae.startWidth + ne))), ae.handle.includes("s") && (Se = Math.max(oe.height, Math.min(te.height, ae.startHeight + fe))), u && (ve = Math.round(ve / b) * b, Se = Math.round(Se / b) * b, ve = Math.max(oe.width, ve), Se = Math.max(oe.height, Se)), X((We) => ({
      ...We,
      [ae.nodeId]: { width: ve, height: Se }
    }));
  }, [ae, o, u, b]);
  H(() => {
    U(null);
  }, []);
  const xr = H((N, G, ne, fe) => {
    N.stopPropagation(), N.preventDefault(), Le(!0), pe({ nodeId: G, x: ne, y: fe }), Ke({ x: ne, y: fe });
  }, []), vr = H(() => {
    Le(!1), pe(null), Ke(null), Be(null);
  }, []), wr = H((N) => {
    le && ce && ce.nodeId !== N && Be(N);
  }, [le, ce]), Sr = H(() => {
    Be(null);
  }, []), kr = H((N, G) => {
    if (!G || !N) return [];
    const ne = Math.min(G.startX, G.endX), fe = Math.max(G.startX, G.endX), ve = Math.min(G.startY, G.endY), Se = Math.max(G.startY, G.endY);
    return N.filter((We) => {
      const je = p[We.id] || { x: We.x, y: We.y };
      return je.x >= ne && je.x <= fe && je.y >= ve && je.y <= Se;
    }).map((We) => We.id);
  }, [p]), Cr = H((N) => {
    if (e)
      n({ x: N.clientX - h.x, y: N.clientY - h.y });
    else if (ae)
      Ht(N.clientX, N.clientY);
    else if (le) {
      const G = Ye(N.clientX, N.clientY);
      Ke({ x: G.x, y: G.y });
    } else if (Q && z) {
      const G = Ye(N.clientX, N.clientY);
      V((ne) => ({ ...ne, endX: G.x, endY: G.y }));
    } else if (m) {
      const G = Ye(N.clientX, N.clientY);
      let ne = G.x - y.x, fe = G.y - y.y;
      ne = k(ne), fe = k(fe), f((ve) => ({
        ...ve,
        [m]: { x: ne, y: fe }
      }));
    } else
      (Ct.horizontal.length > 0 || Ct.vertical.length > 0) && ft({ horizontal: [], vertical: [] });
  }, [e, h, ae, Ht, le, Q, z, m, y, Ye, k, Ct]), F = H((N, G, ne, fe) => {
    if (!N || !G) {
      ft({ horizontal: [], vertical: [] });
      return;
    }
    const ve = [], Se = [];
    ne.forEach((We) => {
      if (We.id === N) return;
      const je = fe(We);
      Math.abs(je.y - G.y) < Ge && ve.push({ y: je.y, fromX: Math.min(je.x, G.x) - 50, toX: Math.max(je.x, G.x) + 200 }), Math.abs(je.x - G.x) < Ge && Se.push({ x: je.x, fromY: Math.min(je.y, G.y) - 50, toY: Math.max(je.y, G.y) + 100 });
    }), ft({ horizontal: ve, vertical: Se });
  }, [Ge]), ie = H(() => {
    ft({ horizontal: [], vertical: [] });
    let N = null;
    return le && ce && qe && (N = {
      source: ce.nodeId,
      target: qe
    }), c(!1), g(null), U(null), Z(!1), V(null), Le(!1), pe(null), Ke(null), Be(null), N;
  }, [le, ce, qe]), he = (N) => {
    if (N.length < 2) return null;
    const G = N[0].clientX - N[1].clientX, ne = N[0].clientY - N[1].clientY;
    return Math.sqrt(G * G + ne * ne);
  }, Ue = (N) => N.length < 2 ? { x: N[0].clientX, y: N[0].clientY } : {
    x: (N[0].clientX + N[1].clientX) / 2,
    y: (N[0].clientY + N[1].clientY) / 2
  }, Pt = H((N) => {
    if (N.touches.length === 2)
      N.preventDefault(), Fe.current = he(N.touches), $t.current = Ue(N.touches);
    else if (N.touches.length === 1) {
      const G = N.touches[0];
      (N.target === t.current || N.target.classList.contains("canvas-bg")) && (c(!0), d({ x: G.clientX - r.x, y: G.clientY - r.y }));
    }
  }, [r]), nt = H((N, G, ne, fe) => {
    if (N.stopPropagation(), N.touches.length === 1) {
      const ve = N.touches[0];
      g(G);
      const Se = Ye(ve.clientX, ve.clientY);
      s({ x: Se.x - ne, y: Se.y - fe });
    }
  }, [Ye]), He = H((N) => {
    if (N.touches.length === 2) {
      N.preventDefault();
      const G = he(N.touches), ne = Ue(N.touches);
      if (Fe.current && G) {
        const fe = G / Fe.current;
        a((ve) => Math.min(Math.max(ve * fe, 0.2), 3));
      }
      if ($t.current) {
        const fe = ne.x - $t.current.x, ve = ne.y - $t.current.y;
        n((Se) => ({ x: Se.x + fe, y: Se.y + ve }));
      }
      Fe.current = G, $t.current = ne;
    } else if (N.touches.length === 1) {
      const G = N.touches[0];
      if (e)
        n({ x: G.clientX - h.x, y: G.clientY - h.y });
      else if (m) {
        N.preventDefault();
        const ne = Ye(G.clientX, G.clientY);
        f((fe) => ({
          ...fe,
          [m]: { x: ne.x - y.x, y: ne.y - y.y }
        }));
      }
    }
  }, [e, h, m, y, Ye]), $r = H(() => {
    c(!1), g(null), Fe.current = null, $t.current = null;
  }, []), Eg = H((N) => {
    N.preventDefault();
    const ne = 1 - N.deltaY * 2e-3;
    a((fe) => Math.min(Math.max(fe * ne, 0.2), 3));
  }, []), Mg = H(() => {
    n(i), a(1), f({});
  }, [i]), Rg = H((N) => {
    if (!t.current || !N) return;
    const G = t.current.getBoundingClientRect(), ne = 60, fe = (G.width - ne * 2) / N.width, ve = (G.height - ne * 2) / N.height, Se = Math.min(Math.max(Math.min(fe, ve), 0.3), 1.5), We = N.x + N.width / 2, je = N.y + N.height / 2;
    n({
      x: G.width / 2 - We * Se,
      y: G.height / 2 - je * Se
    }), a(Se);
  }, []), _g = H((N, G, ne) => {
    const fe = p[N];
    return fe ? { x: fe.x, y: fe.y } : { x: G, y: ne };
  }, [p]);
  return {
    canvasRef: t,
    pan: r,
    setPan: n,
    zoom: o,
    setZoom: a,
    isPanning: e,
    dragging: m,
    positions: p,
    // Multi-select
    selectedNodes: w,
    setSelectedNodes: C,
    clearSelection: ur,
    // Inline editing
    editingNode: $,
    editValue: M,
    setEditValue: _,
    handleNodeDoubleClick: an,
    finishEditing: sn,
    cancelEditing: cn,
    // Node colors
    nodeColors: P,
    setNodeColor: lr,
    nodeIcons: W,
    setNodeIcon: dr,
    nodeShapes: L,
    setNodeShape: dn,
    // Node sizes (resize)
    nodeSizes: q,
    getNodeSize: yr,
    resizing: ae,
    handleResizeStart: br,
    // Context menu
    contextMenu: I,
    handleNodeContextMenu: ln,
    closeContextMenu: cr,
    // Clipboard (copy/paste)
    clipboard: R,
    copySelectedNodes: pr,
    pasteNodes: un,
    // Selection box (drag to select)
    selectionBox: z,
    isSelecting: Q,
    getNodesInSelectionBox: kr,
    // Edge editing
    editingEdge: ke,
    edgeEditValue: J,
    setEdgeEditValue: xe,
    handleEdgeDoubleClick: pn,
    finishEdgeEditing: hn,
    cancelEdgeEditing: fn,
    // Edge styles and context menu
    edgeStyles: Ie,
    setEdgeStyle: fr,
    edgeArrowTypes: rt,
    setEdgeArrowType: gr,
    edgePathTypes: St,
    setEdgePathType: mr,
    edgeContextMenu: qt,
    handleEdgeContextMenu: gn,
    closeEdgeContextMenu: hr,
    // Connection drawing (drag from node to node)
    isConnecting: le,
    connectionStart: ce,
    connectionEnd: Ne,
    connectionTarget: qe,
    handlePortMouseDown: xr,
    cancelConnection: vr,
    setConnectionTargetNode: wr,
    clearConnectionTarget: Sr,
    // Snap to grid
    snapToGrid: u,
    setSnapToGrid: x,
    // Alignment guides
    alignmentGuides: Ct,
    updateAlignmentGuides: F,
    // Existing handlers
    handleCanvasMouseDown: nn,
    handleNodeMouseDown: on,
    handleMouseMove: Cr,
    handleMouseUp: ie,
    handleTouchStart: Pt,
    handleNodeTouchStart: nt,
    handleTouchMove: He,
    handleTouchEnd: $r,
    handleWheel: Eg,
    resetView: Mg,
    fitToView: Rg,
    getNodePosition: _g,
    setPositions: f
  };
}
function De({ onZoomIn: i, onZoomOut: t, onFit: r, onReset: n, zoom: o, snapToGrid: a, onToggleSnap: e, onAutoLayout: c }) {
  return /* @__PURE__ */ S(ut, { children: [
    /* @__PURE__ */ S("div", { style: { position: "absolute", bottom: 12, left: 12, display: "flex", gap: 6, zIndex: 100 }, children: [
      [{ l: "+", a: i }, { l: "−", a: t }, { l: "Fit", a: r }, { l: "Reset", a: n }].map((h) => /* @__PURE__ */ l("button", { onClick: h.a, style: { minWidth: h.l.length > 1 ? "auto" : 36, height: 36, padding: h.l.length > 1 ? "0 12px" : 0, background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "#fff", fontSize: h.l.length > 1 ? "0.75rem" : "1.2rem", cursor: "pointer" }, children: h.l }, h.l)),
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
      c && /* @__PURE__ */ S(
        "button",
        {
          onClick: c,
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
      Math.round(o * 100),
      "%"
    ] }),
    /* @__PURE__ */ l("div", { style: { position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.6)", borderRadius: 6, padding: "6px 10px", color: "#666", fontSize: "0.65rem", zIndex: 100 }, children: "Drag nodes • Drag port to connect • Double-click to edit • Right-click for styles • Shift+drag to select" })
  ] });
}
const L2 = [
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
], z2 = [
  { name: "Rectangle", shape: "rectangle", icon: "▭" },
  { name: "Rounded", shape: "rounded", icon: "▢" },
  { name: "Circle", shape: "circle", icon: "●" },
  { name: "Diamond", shape: "diamond", icon: "◆" },
  { name: "Hexagon", shape: "hexagon", icon: "⬡" },
  { name: "Pill", shape: "pill", icon: "💊" }
], B2 = [
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
function tt({ x: i, y: t, nodeId: r, currentIcon: n, currentShape: o, onSelectColor: a, onSelectIcon: e, onSelectShape: c, onClose: h, theme: d }) {
  const p = _e(null);
  return se(() => {
    const f = (m) => {
      p.current && !p.current.contains(m.target) && h();
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [h]), /* @__PURE__ */ S(
    "div",
    {
      ref: p,
      style: {
        position: "fixed",
        left: i,
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
        /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }, children: L2.map((f) => /* @__PURE__ */ l(
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
          /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4, maxHeight: 120, overflowY: "auto" }, children: B2.map((f) => {
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
        c && /* @__PURE__ */ S("div", { style: { marginTop: 12, paddingTop: 10, borderTop: `1px solid ${(d == null ? void 0 : d.border) || "rgba(255,255,255,0.1)"}` }, children: [
          /* @__PURE__ */ l("div", { style: { color: (d == null ? void 0 : d.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Node Shape" }),
          /* @__PURE__ */ l("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }, children: z2.map((f) => {
            const m = o === f.shape || !o && f.shape === "rounded";
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => c(r, f.shape),
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
const mc = [
  { name: "Animated", style: "animated", icon: "〰️", dasharray: "8,4", animated: !0 },
  { name: "Dashed", style: "dashed", icon: "┅", dasharray: "8,4", animated: !1 },
  { name: "Dotted", style: "dotted", icon: "···", dasharray: "3,3", animated: !1 },
  { name: "Solid", style: "solid", icon: "━", dasharray: null, animated: !1 }
], W2 = [
  { name: "Triangle", type: "triangle", icon: "▶" },
  { name: "Open", type: "open", icon: "▷" },
  { name: "Diamond", type: "diamond", icon: "◆" },
  { name: "Circle", type: "circle", icon: "●" },
  { name: "None", type: "none", icon: "—" }
];
function N2({ x: i, y: t, edgeId: r, currentStyle: n, currentArrowType: o, currentPathType: a, onSelectStyle: e, onSelectArrowType: c, onSelectPathType: h, onClose: d, theme: p }) {
  const f = _e(null);
  return se(() => {
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
        left: i,
        top: t,
        background: (p == null ? void 0 : p.modalBg) || "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",
        border: `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.15)"}`,
        borderRadius: 12,
        padding: 12,
        zIndex: 1e3,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        minWidth: 160
      },
      children: [
        /* @__PURE__ */ l("div", { style: { color: (p == null ? void 0 : p.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Line Style" }),
        /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: mc.map((m) => {
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
                border: g ? `2px solid ${v.purple}` : `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.1)"}`,
                background: g ? `${v.purple}20` : "transparent",
                cursor: "pointer",
                color: (p == null ? void 0 : p.textPrimary) || "#fff",
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
        /* @__PURE__ */ S("div", { style: { marginTop: 12, paddingTop: 10, borderTop: `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.1)"}` }, children: [
          /* @__PURE__ */ l("div", { style: { color: (p == null ? void 0 : p.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Arrow Style" }),
          /* @__PURE__ */ l("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 }, children: W2.map((m) => {
            const g = o === m.type || !o && m.type === "triangle";
            return /* @__PURE__ */ l(
              "button",
              {
                onClick: () => c(r, m.type),
                title: m.name,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: g ? `2px solid ${v.purple}` : `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.1)"}`,
                  background: g ? `${v.purple}20` : "transparent",
                  cursor: "pointer",
                  color: (p == null ? void 0 : p.textPrimary) || "#fff",
                  fontSize: "1rem"
                },
                children: m.icon
              },
              m.type
            );
          }) })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginTop: 12, paddingTop: 10, borderTop: `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.1)"}` }, children: [
          /* @__PURE__ */ l("div", { style: { color: (p == null ? void 0 : p.textSecondary) || "#888", fontSize: "0.75rem", marginBottom: 8, fontWeight: 600 }, children: "Path Style" }),
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
                  border: g ? `2px solid ${v.purple}` : `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.1)"}`,
                  background: g ? `${v.purple}20` : "transparent",
                  cursor: "pointer",
                  color: (p == null ? void 0 : p.textPrimary) || "#fff",
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
        /* @__PURE__ */ l("div", { style: { marginTop: 10, paddingTop: 8, borderTop: `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.1)"}` }, children: /* @__PURE__ */ l(
          "button",
          {
            onClick: d,
            style: {
              width: "100%",
              padding: "6px 12px",
              background: "transparent",
              border: `1px solid ${(p == null ? void 0 : p.border) || "rgba(255,255,255,0.1)"}`,
              borderRadius: 6,
              color: (p == null ? void 0 : p.textSecondary) || "#888",
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
function Xe({
  isEditing: i,
  value: t,
  onChange: r,
  onFinish: n,
  onCancel: o,
  style: a = {},
  inputStyle: e = {}
}) {
  const c = _e(null);
  se(() => {
    i && c.current && (c.current.focus(), c.current.select());
  }, [i]);
  const h = (d) => {
    d.key === "Enter" ? (d.preventDefault(), n()) : d.key === "Escape" && (d.preventDefault(), o());
  };
  return i ? /* @__PURE__ */ l(
    "input",
    {
      ref: c,
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
function q2(i) {
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
  ], o = {
    user: v.pink,
    system: v.blue,
    admin: v.purple,
    customer: v.cyan,
    default: v.slate
  };
  return i.split(`
`).forEach((a) => {
    if (a = a.trim(), !a) return;
    const e = a.match(/^title:\s*(.+)/i);
    if (e) {
      t.title = e[1].trim();
      return;
    }
    const c = a.match(/^actors:\s*(.+)/i);
    if (c) {
      t.actors = c[1].split(",").map((p) => {
        const f = p.trim(), m = o[f.toLowerCase()] || o.default;
        return { name: f, color: m };
      });
      return;
    }
    const h = a.match(/^==\s*(.+?)\s*==$/);
    if (h) {
      const p = t.sections.length;
      r = {
        name: h[1],
        color: n[p % n.length],
        tasks: []
      }, t.sections.push(r);
      return;
    }
    const d = a.match(/^-\s*(.+?)\s*\|\s*(\d+)(?:\s*\|\s*(.+))?$/);
    if (d && r) {
      const p = d[1].trim(), f = parseInt(d[2]), m = d[3] || "", g = m ? m.split(",").map((y) => y.trim()).filter((y) => y) : [];
      r.tasks.push({
        id: `task-${t.sections.length - 1}-${r.tasks.length}`,
        name: p,
        score: f,
        actors: g
      });
    }
  }), t;
}
const O2 = {
  markdown: (i) => {
    const t = i.split(`
`).filter((o) => o.trim());
    if (!t.length) return { id: "root", label: "Empty", children: [] };
    const r = { id: "root", label: t[0].trim(), children: [] }, n = [{ node: r, indent: -1 }];
    for (let o = 1; o < t.length; o++) {
      const a = t[o], e = a.trimStart(), c = a.length - e.length, h = e.replace(/^[-*+]\s*/, "").trim();
      if (!h) continue;
      for (; n.length > 1 && n[n.length - 1].indent >= c; ) n.pop();
      const d = { id: `node-${o}`, label: h, children: [] };
      n[n.length - 1].node.children.push(d), n.push({ node: d, indent: c });
    }
    return r;
  },
  sql: (i) => {
    const t = [], r = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi;
    let n;
    for (; (n = r.exec(i)) !== null; ) {
      const o = n[1], a = [];
      n[2].split(",").map((e) => e.trim()).filter((e) => e && !/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT|INDEX|KEY)/i.test(e)).forEach((e) => {
        const c = e.match(/^[`"']?(\w+)[`"']?\s+(\w+(?:\([^)]+\))?)/i);
        if (c) {
          const h = { name: c[1], type: c[2].toUpperCase() };
          /PRIMARY\s+KEY/i.test(e) && (h.key = !0);
          const d = e.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);
          d && (h.fk = !0, h.references = d[1]), a.push(h);
        }
      }), t.push({ name: o, fields: a });
    }
    return t;
  },
  architecture: (i) => {
    const t = /* @__PURE__ */ new Map(), r = [], n = {
      // Client/Frontend
      clients: { color: v.pink, icon: "🖥️", shape: "rect" },
      client: { color: v.pink, icon: "🖥️", shape: "rect" },
      web: { color: v.pink, icon: "🌐", shape: "rect" },
      mobile: { color: v.pink, icon: "📱", shape: "rect" },
      browser: { color: v.pink, icon: "🌐", shape: "rect" },
      user: { color: v.pink, icon: "👤", shape: "rect" },
      users: { color: v.pink, icon: "👥", shape: "rect" },
      // Gateway/Network
      gateway: { color: v.orange, icon: "🚪", shape: "hexagon" },
      gateways: { color: v.orange, icon: "🚪", shape: "hexagon" },
      api: { color: v.orange, icon: "🔌", shape: "hexagon" },
      lb: { color: v.orange, icon: "⚖️", shape: "hexagon" },
      loadbalancer: { color: v.orange, icon: "⚖️", shape: "hexagon" },
      proxy: { color: v.orange, icon: "🔀", shape: "hexagon" },
      cdn: { color: v.orange, icon: "🌍", shape: "hexagon" },
      dns: { color: v.orange, icon: "📍", shape: "rect" },
      firewall: { color: v.red, icon: "🛡️", shape: "hexagon" },
      // Services/Backend
      services: { color: v.blue, icon: "⚙️", shape: "rect" },
      service: { color: v.blue, icon: "⚙️", shape: "rect" },
      backend: { color: v.blue, icon: "⚙️", shape: "rect" },
      microservice: { color: v.blue, icon: "🔷", shape: "rect" },
      microservices: { color: v.blue, icon: "🔷", shape: "rect" },
      function: { color: v.violet, icon: "λ", shape: "rect" },
      lambda: { color: v.violet, icon: "λ", shape: "rect" },
      serverless: { color: v.violet, icon: "☁️", shape: "rect" },
      worker: { color: v.blue, icon: "👷", shape: "rect" },
      // Containers/Orchestration
      container: { color: v.cyan, icon: "📦", shape: "rect" },
      containers: { color: v.cyan, icon: "📦", shape: "rect" },
      docker: { color: v.cyan, icon: "🐳", shape: "rect" },
      k8s: { color: v.cyan, icon: "☸️", shape: "rect" },
      kubernetes: { color: v.cyan, icon: "☸️", shape: "rect" },
      pod: { color: v.cyan, icon: "🫛", shape: "rect" },
      pods: { color: v.cyan, icon: "🫛", shape: "rect" },
      cluster: { color: v.cyan, icon: "🔷", shape: "rect" },
      node: { color: v.cyan, icon: "🖥️", shape: "rect" },
      // Data/Storage
      databases: { color: v.emerald, icon: "🗄️", shape: "cylinder" },
      database: { color: v.emerald, icon: "🗄️", shape: "cylinder" },
      db: { color: v.emerald, icon: "🗄️", shape: "cylinder" },
      data: { color: v.emerald, icon: "🗄️", shape: "cylinder" },
      sql: { color: v.emerald, icon: "📊", shape: "cylinder" },
      nosql: { color: v.emerald, icon: "📋", shape: "cylinder" },
      storage: { color: v.emerald, icon: "💾", shape: "cylinder" },
      s3: { color: v.emerald, icon: "🪣", shape: "cylinder" },
      blob: { color: v.emerald, icon: "📁", shape: "cylinder" },
      // Cache/Memory
      cache: { color: v.red, icon: "⚡", shape: "cylinder" },
      redis: { color: v.red, icon: "⚡", shape: "cylinder" },
      memcached: { color: v.red, icon: "🧠", shape: "cylinder" },
      // Messaging/Queue
      queue: { color: v.amber, icon: "📬", shape: "rect" },
      queues: { color: v.amber, icon: "📬", shape: "rect" },
      mq: { color: v.amber, icon: "📨", shape: "rect" },
      kafka: { color: v.amber, icon: "📊", shape: "rect" },
      rabbitmq: { color: v.amber, icon: "🐰", shape: "rect" },
      pubsub: { color: v.amber, icon: "📢", shape: "rect" },
      eventbus: { color: v.amber, icon: "🚌", shape: "rect" },
      stream: { color: v.amber, icon: "🌊", shape: "rect" },
      // Monitoring/Observability
      monitoring: { color: v.fuchsia, icon: "📈", shape: "rect" },
      metrics: { color: v.fuchsia, icon: "📊", shape: "rect" },
      logging: { color: v.fuchsia, icon: "📝", shape: "rect" },
      logs: { color: v.fuchsia, icon: "📝", shape: "rect" },
      tracing: { color: v.fuchsia, icon: "🔍", shape: "rect" },
      alerting: { color: v.fuchsia, icon: "🔔", shape: "rect" },
      // Security
      auth: { color: v.indigo, icon: "🔐", shape: "rect" },
      identity: { color: v.indigo, icon: "🆔", shape: "rect" },
      vault: { color: v.indigo, icon: "🔒", shape: "rect" },
      secrets: { color: v.indigo, icon: "🔑", shape: "rect" },
      // Cloud/Infrastructure
      cloud: { color: v.sky, icon: "☁️", shape: "rect" },
      aws: { color: v.orange, icon: "☁️", shape: "rect" },
      gcp: { color: v.blue, icon: "☁️", shape: "rect" },
      azure: { color: v.sky, icon: "☁️", shape: "rect" },
      vpc: { color: v.slate, icon: "🔲", shape: "rect" },
      subnet: { color: v.slate, icon: "📡", shape: "rect" },
      region: { color: v.slate, icon: "🌍", shape: "rect" },
      zone: { color: v.slate, icon: "📍", shape: "rect" },
      // External/Third-party
      external: { color: v.slate, icon: "🔗", shape: "rect" },
      thirdparty: { color: v.slate, icon: "🔗", shape: "rect" },
      saas: { color: v.slate, icon: "☁️", shape: "rect" },
      email: { color: v.slate, icon: "📧", shape: "rect" },
      payment: { color: v.slate, icon: "💳", shape: "rect" },
      analytics: { color: v.slate, icon: "📊", shape: "rect" }
    }, o = 150, a = 90, e = [v.purple, v.blue, v.cyan, v.emerald, v.amber, v.pink];
    let c = 0;
    const h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), f = [];
    let m = 0;
    const g = i.split(`
`);
    for (let I = 0; I < g.length; I++) {
      let O = g[I].trim();
      if (!O || O.startsWith("#")) continue;
      const R = O.match(/^(?:group|boundary)\s+["']([^"']+)["']\s*\{?\s*$/i);
      if (R) {
        const V = R[1], Q = f.length > 0 ? f[f.length - 1] : null;
        p.set(V, {
          name: V,
          nodes: [],
          colorIndex: m++,
          parent: Q,
          children: []
        }), Q && p.has(Q) && p.get(Q).children.push(V), f.push(V);
        continue;
      }
      if (O === "}" && f.length > 0) {
        f.pop();
        continue;
      }
      const D = O.match(/^\[(\w+)\]\s*(.+)/);
      if (D) {
        const V = D[1].toLowerCase(), Q = n[V] || { color: v.slate, icon: "📦", shape: "rect" }, Z = D[2].split(",").map((Ce) => Ce.trim()).filter((Ce) => Ce), ke = f.length > 0 ? f[f.length - 1] : null;
        Z.forEach((Ce) => {
          const J = Ce.match(/^([^:]+):\s*(.+)$/), xe = J ? J[1].trim() : Ce, le = J ? J[2].trim() : "", Le = xe.toLowerCase().replace(/[^a-z0-9]/g, "_"), ce = {
            id: Le,
            label: xe,
            description: le,
            ...Q,
            x: 0,
            // Will be set by dagre
            y: 0,
            // Will be set by dagre
            width: Math.max(o, xe.length * 9 + 40),
            layerIndex: c,
            group: ke
            // Innermost group for positioning
          };
          t.set(Le, ce), h.set(Le, c), f.length > 0 && (d.set(Le, [...f]), f.forEach((pe) => {
            p.has(pe) && p.get(pe).nodes.push(Le);
          }));
        }), c++;
        continue;
      }
      const z = [
        { regex: /^(.+?)\s*<->\s*(.+?)(?::\s*(.+))?$/, style: "bidirectional" },
        { regex: /^(.+?)\s*-->\s*(.+?)(?::\s*(.+))?$/, style: "dotted" },
        { regex: /^(.+?)\s*==>\s*(.+?)(?::\s*(.+))?$/, style: "thick" },
        { regex: /^(.+?)\s*->>\s*(.+?)(?::\s*(.+))?$/, style: "async" },
        { regex: /^(.+?)\s*-\.->\s*(.+?)(?::\s*(.+))?$/, style: "dashed" },
        { regex: /^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/, style: "normal" }
      ];
      for (const { regex: V, style: Q } of z) {
        const Z = O.match(V);
        if (Z) {
          const [, ke, Ce, J] = Z, xe = ke.trim().toLowerCase().replace(/[^a-z0-9]/g, "_"), le = Ce.trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
          r.push({
            id: `e-${r.length}`,
            source: xe,
            target: le,
            label: (J == null ? void 0 : J.trim()) || "",
            style: Q
          }), Q === "bidirectional" && r.push({
            id: `e-${r.length}`,
            source: le,
            target: xe,
            label: "",
            style: "normal"
          });
          break;
        }
      }
    }
    const y = t.size, s = r.length, u = y > 8 || s > 10, x = /* @__PURE__ */ new Set();
    if (t.forEach((I) => x.add(I.layerIndex)), x.size <= 2 && y > 4) {
      const I = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
      t.forEach((V, Q) => {
        I.set(Q, 0), O.set(Q, []);
      }), r.forEach((V) => {
        t.has(V.source) && t.has(V.target) && (O.get(V.source).push(V.target), I.set(V.target, (I.get(V.target) || 0) + 1));
      });
      const R = /* @__PURE__ */ new Map(), D = [];
      for (t.forEach((V, Q) => {
        I.get(Q) === 0 && (R.set(Q, 0), D.push(Q));
      }); D.length > 0; ) {
        const V = D.shift(), Q = R.get(V);
        O.get(V).forEach((Z) => {
          const ke = Q + 1;
          (!R.has(Z) || R.get(Z) < ke) && R.set(Z, ke), I.set(Z, I.get(Z) - 1), I.get(Z) === 0 && D.push(Z);
        });
      }
      const z = R.size > 0 ? Math.floor([...R.values()].reduce((V, Q) => V + Q, 0) / R.size) : 0;
      t.forEach((V, Q) => {
        R.has(Q) || R.set(Q, z), V.layerIndex = R.get(Q);
      });
    }
    const k = new Gh.graphlib.Graph();
    k.setGraph({
      rankdir: "TB",
      // Top to bottom
      nodesep: u ? 180 : 120,
      // More horizontal spacing
      ranksep: u ? 180 : 130,
      // More vertical spacing between layers
      marginx: 120,
      marginy: 100,
      ranker: "network-simplex"
      // Best for complex multi-path graphs
    }), k.setDefaultEdgeLabel(() => ({}));
    const w = /* @__PURE__ */ new Map();
    t.forEach((I, O) => w.set(O, 0)), r.forEach((I) => {
      w.has(I.target) && w.set(I.target, w.get(I.target) + 1);
    });
    const C = [];
    t.forEach((I, O) => {
      w.get(O) === 0 && C.push(O);
    }), t.forEach((I) => {
      k.setNode(I.id, {
        label: I.label,
        width: Math.max(I.width, 180),
        // Wider minimum width
        height: a,
        // Use layer index for rank constraint
        rank: I.layerIndex
      });
    });
    const $ = /* @__PURE__ */ new Set();
    r.forEach((I) => {
      const O = t.get(I.source), R = t.get(I.target);
      if (O && R) {
        const D = C.includes(I.target) && !C.includes(I.source), z = O.layerIndex > R.layerIndex;
        (D || z) && $.add(I.id);
      }
    });
    const E = /* @__PURE__ */ new Set();
    r.forEach((I) => {
      const O = `${I.source}-${I.target}`, R = `${I.target}-${I.source}`;
      if (!E.has(O) && !E.has(R) && t.has(I.source) && t.has(I.target)) {
        const D = $.has(I.id);
        k.setEdge(I.source, I.target, {
          weight: D ? 0.5 : 3,
          minlen: D ? 1 : 2
        }), E.add(O);
      }
    }), Gh.layout(k), k.nodes().forEach((I) => {
      const O = t.get(I), R = k.node(I);
      O && R && (O.x = R.x, O.y = R.y);
    });
    const M = /* @__PURE__ */ new Set();
    r.forEach((I) => {
      M.add(I.source), M.add(I.target);
    });
    let _ = 0, P = 0;
    t.forEach((I) => {
      M.has(I.id) && (_ = Math.max(_, I.y + a / 2), P = Math.max(P, I.x + (I.width || o) / 2));
    });
    const A = /* @__PURE__ */ new Map(), W = [];
    if (t.forEach((I) => {
      M.has(I.id) || (I.group ? (A.has(I.group) || A.set(I.group, []), A.get(I.group).push(I)) : W.push(I));
    }), W.length > 0) {
      const I = /* @__PURE__ */ new Map();
      W.forEach((D) => {
        const z = D.layerIndex || 0;
        I.has(z) || I.set(z, []), I.get(z).push(D);
      });
      const O = /* @__PURE__ */ new Map();
      t.forEach((D) => {
        if (M.has(D.id) && !D.group) {
          const z = D.layerIndex || 0;
          O.has(z) || O.set(z, D.y);
        }
      });
      let R = P + 100;
      I.forEach((D, z) => {
        const V = O.get(z) || 100 + z * 150;
        D.forEach((Q, Z) => {
          Q.x = R + Z * ((Q.width || o) + 60), Q.y = V;
        });
      });
    }
    let B = _ + 100;
    const L = 50;
    [...p.keys()].forEach((I) => {
      const O = A.get(I);
      if (!O || O.length === 0) return;
      const R = [], D = [];
      if (p.get(I).nodes.forEach((z) => {
        const V = t.get(z);
        V && (M.has(z) ? R.push(V) : D.push(V));
      }), R.length > 0) {
        let z = 0, V = 0;
        R.forEach((Q) => {
          z = Math.max(z, Q.x + (Q.width || o) / 2), V += Q.y;
        }), V /= R.length, D.forEach((Q, Z) => {
          Q.x = z + 80 + Z * ((Q.width || o) + 60), Q.y = V;
        });
      } else {
        const V = a + 40, Q = 200;
        D.forEach((ke, Ce) => {
          const J = Math.floor(Ce / 3), xe = Ce % 3;
          ke.x = 150 + xe * Q, ke.y = B + J * V;
        });
        const Z = Math.ceil(D.length / 3);
        B += Z * V + L + 40;
      }
    });
    const q = [], X = /* @__PURE__ */ new Map(), re = 30, oe = 15, te = (I) => {
      let O = 0, R = I;
      for (; R; ) {
        const D = p.get(R);
        if (D && D.parent)
          O++, R = D.parent;
        else
          break;
      }
      return O;
    };
    [...p.keys()].sort((I, O) => te(O) - te(I)).forEach((I) => {
      const O = p.get(I);
      if (!O || O.nodes.length === 0) return;
      let R = 1 / 0, D = 1 / 0, z = -1 / 0, V = -1 / 0;
      if (O.nodes.forEach((Q) => {
        const Z = t.get(Q);
        if (Z) {
          if ((d.get(Q) || []).some((le) => le !== I && O.children.includes(le))) return;
          const J = Z.width || o, xe = a;
          R = Math.min(R, Z.x - J / 2), D = Math.min(D, Z.y - xe / 2), z = Math.max(z, Z.x + J / 2), V = Math.max(V, Z.y + xe / 2);
        }
      }), O.children.forEach((Q) => {
        const Z = X.get(Q);
        Z && (R = Math.min(R, Z.minX - oe), D = Math.min(D, Z.minY - oe), z = Math.max(z, Z.maxX + oe), V = Math.max(V, Z.maxY + oe));
      }), R !== 1 / 0) {
        X.set(I, {
          minX: R - re,
          minY: D - re - 20,
          maxX: z + re,
          maxY: V + re
        });
        const Q = X.get(I);
        q.push({
          id: `group-${I.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
          name: I,
          x: Q.minX,
          y: Q.minY,
          width: Q.maxX - Q.minX,
          height: Q.maxY - Q.minY,
          color: e[O.colorIndex % e.length],
          depth: te(I),
          parent: O.parent
        });
      }
    }), q.sort((I, O) => I.depth - O.depth);
    const U = /* @__PURE__ */ new Map();
    return q.forEach((I) => {
      const O = I.parent || "__root__";
      U.has(O) || U.set(O, []), U.get(O).push(I);
    }), U.forEach((I) => {
      I.sort((O, R) => O.y - R.y);
      for (let O = 1; O < I.length; O++) {
        const R = I[O - 1], D = I[O], z = R.y + R.height;
        if (D.y < z + 20) {
          const V = z + 20 - D.y;
          D.y += V;
          const Q = p.get(D.name);
          Q && Q.nodes.forEach((Z) => {
            const ke = t.get(Z);
            ke && (ke.y += V);
          });
        }
      }
    }), { nodes: Array.from(t.values()), edges: r, groups: q };
  },
  flowchart: (i) => {
    const t = /* @__PURE__ */ new Map(), r = [], n = [], o = (u) => {
      u = u.trim();
      let x = "", b = u;
      const k = u.match(/^(.+?):\s+([^:]+)$/);
      k && (b = k[1].trim(), x = k[2].trim());
      const w = b.match(/^\(([^)]+)\)\s*(.*)$/);
      if (w) {
        const C = w[1].trim(), $ = w[2].trim();
        return $ && C.toLowerCase() === $.toLowerCase() ? { type: "process", label: $, edgeLabel: x } : ["start", "end", "process", "decision", "io", "data", "database", "document"].includes(C.toLowerCase()) ? { type: C.toLowerCase(), label: $ || C, edgeLabel: x } : { type: "process", label: $ || C, edgeLabel: x };
      }
      return { type: "process", label: b, edgeLabel: x };
    };
    let a = "TB";
    const e = i.match(/^direction:\s*(TB|LR|RL|BT)/im);
    e && (a = e[1].toUpperCase());
    const c = a === "LR" || a === "RL";
    i.split(`
`).forEach((u) => {
      if (u = u.trim(), !u || u.startsWith("#") || u.match(/^direction:/i)) return;
      const x = u.split(/\s*->\s*/);
      x.forEach((b, k) => {
        const { type: w, label: C, edgeLabel: $ } = o(b), E = C.toLowerCase().replace(/[^a-z0-9]/g, "_");
        if (t.has(E) || (t.set(E, { id: E, type: w, label: C, x: 0, y: 0 }), n.push(E)), k > 0) {
          const { label: M } = o(x[k - 1]), _ = M.toLowerCase().replace(/[^a-z0-9]/g, "_");
          r.push({ id: `e-${r.length}`, source: _, target: E, label: $ });
        }
      });
    });
    const h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    r.forEach((u) => {
      h.has(u.source) || h.set(u.source, []), h.get(u.source).push(u.target), d.has(u.target) || d.set(u.target, []), d.get(u.target).push(u.source);
    });
    const p = (u) => {
      const C = Math.min(180, Math.max(100, ((u == null ? void 0 : u.length) || 5) * 8 + 40)), $ = Math.floor((C - 20) / 8), E = Math.ceil(((u == null ? void 0 : u.length) || 5) / $), M = Math.max(60, 30 + E * 18);
      return { width: C, height: M };
    };
    t.forEach((u, x) => {
      const b = p(u.label);
      u.width = b.width, u.height = b.height;
    });
    const f = n.filter((u) => !d.has(u) || d.get(u).length === 0), m = /* @__PURE__ */ new Set(), g = [v.purple, v.blue, v.emerald, v.orange, v.pink, v.cyan], y = (u, x, b, k = 0, w = 0) => {
      if (m.has(u)) return;
      const C = t.get(u);
      if (!C) return;
      c ? (C.x = x, C.y = b + k) : (C.x = b + k, C.y = x), C.depth = w, C.color = g[w % g.length], m.add(u);
      const $ = h.get(u) || [], E = C.width || 130, M = C.height || 60, _ = c ? E + 60 : M + 40, P = c ? 100 : 200;
      if ($.length === 1)
        y($[0], x + _, b, k, w + 1);
      else if ($.length >= 2) {
        const A = ($.length - 1) * P;
        $.forEach((W, B) => {
          const L = -A / 2 + B * P;
          y(W, x + _, b, L, w + 1);
        });
      }
    };
    if (c) {
      let u = 200;
      f.forEach((x, b) => {
        y(x, 100, u + b * 150, 0, 0);
      });
    } else {
      let u = 400;
      f.forEach((x, b) => {
        y(x, 100, u + b * 250, 0, 0);
      });
    }
    let s = 100;
    return n.forEach((u) => {
      if (!m.has(u)) {
        const x = t.get(u);
        x.x = 700, x.y = s, x.depth = 0, x.color = v.gray, s += c ? 100 : (x.height || 60) + 40, m.add(u);
      }
    }), { nodes: Array.from(t.values()), edges: r, direction: a };
  },
  stateMachine: (i) => {
    const t = /* @__PURE__ */ new Map(), r = [];
    i.split(`
`).forEach((o) => {
      var c;
      if (o = o.trim(), !o || o.startsWith("#")) return;
      const a = o.match(/^\((\w+)\)\s*(\w+)(?::\s*(.+))?/);
      if (a) {
        const h = a[1].toLowerCase(), d = a[2], p = ((c = a[3]) == null ? void 0 : c.trim()) || "";
        t.set(d, {
          id: d,
          label: p || d,
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
      const e = o.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);
      e && (t.has(e[1]) || t.set(e[1], { id: e[1], label: e[1] }), t.has(e[2]) || t.set(e[2], { id: e[2], label: e[2] }), r.push({ from: e[1], to: e[2], event: e[3] || "" }));
    });
    const n = Array.from(t.values());
    return n.forEach((o, a) => {
      const e = 2 * Math.PI / n.length * a - Math.PI / 2;
      o.x = 300 + Math.cos(e) * 150, o.y = 250 + Math.sin(e) * 150;
    }), { states: n, transitions: r };
  },
  userJourney: (i) => {
    if (i.includes("== ") || i.includes("title:") || i.includes("actors:"))
      return q2(i);
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
    i.split(`
`).forEach((s) => {
      var b, k;
      if (s = s.trim(), !s || s.startsWith("#") || s.toLowerCase().startsWith("title")) return;
      const u = s.match(/^[\[(](\w+)(?::([a-z0-9-]+))?[\])]\s*(.+?)(?:\s*:\s*(.+))?$/i);
      if (u && !s.includes("->")) {
        const w = u[1].toLowerCase(), C = u[2] || null, $ = u[3].trim(), E = ((b = u[4]) == null ? void 0 : b.trim()) || "", M = $.toLowerCase().replace(/[^a-z0-9]/g, "_"), _ = n[w] || n.default;
        r.has(M) || r.set(M, { id: M, label: $, description: E, type: w, linkedTemplate: C, clickable: !!C, ..._, x: 0, y: 0 });
        return;
      }
      const x = s.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+?)$/);
      if (x) {
        const w = x[1].trim(), C = ((k = x[2]) == null ? void 0 : k.trim()) || "", $ = x[3].trim(), E = w.toLowerCase().replace(/[^a-z0-9]/g, "_"), M = $.toLowerCase().replace(/[^a-z0-9]/g, "_");
        r.has(E) || r.set(E, { id: E, label: w, type: "default", ...n.default, x: 0, y: 0 }), r.has(M) || r.set(M, { id: M, label: $, type: "default", ...n.default, x: 0, y: 0 }), t.push({ id: `edge-${t.length}`, source: E, target: M, label: C });
      }
    });
    const o = Array.from(r.values()), a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), c = new Set(t.map((s) => s.target)), h = o.filter((s) => !c.has(s.id)), d = (s, u) => {
      e.has(s) || (e.add(s), a.set(s, Math.max(a.get(s) || 0, u)), t.filter((x) => x.source === s).forEach((x) => d(x.target, u + 1)));
    };
    (h.length ? h : o.slice(0, 1)).forEach((s) => d(s.id, 0)), o.forEach((s) => {
      a.has(s.id) || a.set(s.id, 0);
    });
    const p = /* @__PURE__ */ new Map();
    o.forEach((s) => {
      const u = a.get(s.id) || 0;
      p.has(u) || p.set(u, []), p.get(u).push(s);
    });
    const f = Math.max(...Array.from(p.values()).map((s) => s.length), 1), m = Math.max(...Array.from(a.values()), 0) + 1, g = 220, y = 160;
    for (let s = 0; s <= m - 1; s++) {
      const u = p.get(s) || [], x = u.length * y, b = 150 + (f * y - x) / 2;
      u.forEach((k, w) => {
        k.x = 180 + s * g, k.y = b + w * y;
      });
    }
    return { nodes: o, edges: t };
  },
  timeline: (i) => {
    const t = [];
    let r = 100;
    return i.split(`
`).forEach((n, o) => {
      var h, d;
      if (n = n.trim(), !n || n.startsWith("#")) return;
      const a = n.match(/^\[(.+?)\]\s*(.+?)(?:\|(.+))?$/) || [null, "", n, ""];
      let e = a[2].trim();
      const c = e.startsWith("*");
      c && (e = e.substring(1).trim()), t.push({ id: `timeline-${o}`, date: ((h = a[1]) == null ? void 0 : h.trim()) || "", label: e, description: ((d = a[3]) == null ? void 0 : d.trim()) || "", x: r, y: 200, isMilestone: c }), r += 220;
    }), t;
  },
  sequence: (i) => {
    const t = [], r = [], n = [], o = [];
    let a = 80, e = [], c = 0;
    return i.split(`
`).forEach((h) => {
      if (h = h.trim(), !h || h.startsWith("#")) return;
      const d = h.match(/^participants?\s+(.+)/i);
      if (d) {
        d[1].split(",").forEach((b) => {
          const k = b.trim(), w = k.toLowerCase().replace(/\s/g, "_");
          t.find((C) => C.id === w) || (t.push({ id: w, label: k, x: a }), a += 160);
        });
        return;
      }
      const p = h.match(/^(loop|alt|opt|par|critical|break|rect)\s+(.+)/i);
      if (p) {
        e.push({
          type: p[1].toLowerCase(),
          label: p[2],
          startIndex: c,
          sections: [{ label: p[2], startIndex: c }]
        });
        return;
      }
      const f = h.match(/^else\s*(.*)/i);
      if (f && e.length > 0) {
        const b = e[e.length - 1];
        b.type === "alt" && b.sections.push({ label: f[1] || "else", startIndex: c });
        return;
      }
      const m = h.match(/^and\s+(.+)/i);
      if (m && e.length > 0) {
        const b = e[e.length - 1];
        b.type === "par" && b.sections.push({ label: m[1], startIndex: c });
        return;
      }
      const g = h.match(/^option\s+(.+)/i);
      if (g && e.length > 0) {
        const b = e[e.length - 1];
        b.type === "critical" && b.sections.push({ label: g[1], startIndex: c });
        return;
      }
      const y = h.match(/^(activate|deactivate)\s+(\w+)/i);
      if (y) {
        const b = y[1].toLowerCase(), k = y[2].toLowerCase().replace(/\s/g, "_");
        r.push({
          type: b,
          participant: k,
          index: c
        });
        return;
      }
      if (h.toLowerCase() === "end") {
        if (e.length > 0) {
          const b = e.pop();
          b.endIndex = c, n.push(b);
        }
        return;
      }
      const s = h.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);
      if (s) {
        const b = s[1].toLowerCase(), k = s[2], w = k.toLowerCase().replace(/\s/g, "_");
        t.find((C) => C.id === w) || (t.push({ id: w, label: k, x: a }), a += 160), o.push({
          position: b,
          participantId: w,
          text: s[3],
          atMessageIndex: c
        });
        return;
      }
      const u = h.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);
      if (u) {
        const k = u[1].split(",").map((w) => w.trim()).map((w) => {
          const C = w.toLowerCase().replace(/\s/g, "_");
          return t.find(($) => $.id === C) || (t.push({ id: C, label: w, x: a }), a += 160), C;
        });
        o.push({
          position: "over",
          participantIds: k,
          text: u[2],
          atMessageIndex: c
        });
        return;
      }
      const x = h.match(/^(\w+)\s*(->|-->|-x|--x|-\)|--\))\s*(\w+)(?::\s*(.+))?/);
      if (x) {
        const b = x[1].toLowerCase().replace(/\s/g, "_"), k = x[3].toLowerCase().replace(/\s/g, "_");
        t.find((w) => w.id === b) || (t.push({ id: b, label: x[1], x: a }), a += 160), t.find((w) => w.id === k) || (t.push({ id: k, label: x[3], x: a }), a += 160), r.push({
          from: b,
          to: k,
          label: x[4] || "",
          isReturn: x[2] === "-->",
          index: c
        }), c++;
      }
    }), { participants: t, messages: r, fragments: n, notes: o };
  },
  orgChart: (i) => {
    const t = [], r = [], n = [{ id: null, indent: -1 }];
    return i.split(`
`).forEach((o, a) => {
      var p;
      if (!o.trim()) return;
      const e = o.trimStart(), c = o.length - e.length, h = e.match(/^(.+?)(?:\s*\[(.+?)\])?$/);
      for (; n.length > 1 && n[n.length - 1].indent >= c; ) n.pop();
      const d = { id: `org-${a}`, label: h[1].trim(), title: ((p = h[2]) == null ? void 0 : p.trim()) || "", children: [], parent: n[n.length - 1].id };
      if (t.push(d), n[n.length - 1].id) {
        r.push({ id: `oe-${a}`, source: n[n.length - 1].id, target: d.id });
        const f = t.find((m) => m.id === n[n.length - 1].id);
        f && f.children.push(d.id);
      }
      n.push({ id: d.id, indent: c });
    }), { nodes: t, edges: r };
  },
  network: (i) => {
    const t = /* @__PURE__ */ new Map(), r = [];
    return i.split(`
`).forEach((n) => {
      var e;
      if (n = n.trim(), !n || n.startsWith("#")) return;
      const o = n.match(/^\[(\w+)\]\s*(.+?)(?:\s*\((.+?)\))?$/);
      if (o) {
        const c = o[2].trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.set(c, { id: c, type: o[1].toLowerCase(), label: o[2].trim(), ip: ((e = o[3]) == null ? void 0 : e.trim()) || "" });
        return;
      }
      const a = n.match(/^(.+?)\s*--\s*(.+?)(?:\s*:\s*(.+))?$/);
      a && r.push({ id: `conn-${r.length}`, source: a[1].trim().toLowerCase().replace(/[^a-z0-9]/g, "_"), target: a[2].trim().toLowerCase().replace(/[^a-z0-9]/g, "_"), protocol: a[3] || "" });
    }), { devices: Array.from(t.values()), connections: r };
  },
  gantt: (i) => {
    const t = [];
    return i.split(`
`).forEach((r, n) => {
      if (r = r.trim(), !r || r.startsWith("#")) return;
      const o = r.split(",").map((a) => a.trim());
      o.length >= 2 && t.push({ id: `task-${n}`, name: o[0], start: parseInt(o[1]) || n * 2, duration: parseInt(o[2]) || 2, progress: parseInt(o[3]) || 0 });
    }), t;
  },
  deployment: (i) => {
    const t = [], r = [{ id: null, indent: -1 }];
    let n = 0;
    return i.split(`
`).forEach((o) => {
      if (!o.trim()) return;
      const a = o.trimStart(), e = o.length - a.length, c = a.match(/^\[(\w+)\]\s*(.+)$/) || [null, "component", a];
      for (; r.length > 1 && r[r.length - 1].indent >= e; ) r.pop();
      const h = { id: `deploy-${n++}`, label: (c[2] || a).trim(), type: (c[1] || "component").toLowerCase(), parentId: r[r.length - 1].id, indent: e };
      t.push(h), r.push({ id: h.id, indent: e });
    }), { nodes: t };
  },
  pie: (i) => {
    const t = [];
    return i.split(`
`).forEach((r) => {
      if (r = r.trim(), !r || r.startsWith("#") || r.toLowerCase().startsWith("title")) return;
      const n = r.match(/^"?([^":,]+)"?\s*[:,]\s*(\d+(?:\.\d+)?)/);
      n && t.push({ label: n[1].trim(), value: parseFloat(n[2]) });
    }), t;
  },
  quadrant: (i) => {
    const t = { title: "", xLabel: "", yLabel: "", quadrants: ["", "", "", ""] }, r = [];
    return i.split(`
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
      const o = n.match(/^quadrant-(\d):\s*(.+)$/);
      if (o) {
        t.quadrants[parseInt(o[1]) - 1] = o[2];
        return;
      }
      const a = n.match(/^(.+?):\s*\[(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)\]$/);
      a && r.push({ id: `point-${r.length}`, label: a[1].trim(), x: parseFloat(a[2]), y: parseFloat(a[3]) });
    }), { config: t, points: r };
  },
  git: (i) => {
    const t = [], r = /* @__PURE__ */ new Map();
    let n = "main", o = 0;
    return r.set("main", { name: "main", y: 100, parentBranch: null, branchPoint: 0 }), i.split(`
`).forEach((a) => {
      var e;
      if (a = a.trim(), !(!a || a.startsWith("#"))) {
        if (a.startsWith("branch ")) {
          const c = a.replace("branch ", "").trim();
          r.has(c) || r.set(c, { name: c, y: 100 + r.size * 80, parentBranch: n, branchPoint: o }), n = c;
          return;
        }
        if (a.startsWith("checkout ")) {
          n = a.replace("checkout ", "").trim();
          return;
        }
        if (a.startsWith("commit") || a.startsWith("merge")) {
          const c = a.startsWith("merge"), h = a.match(/"([^"]+)"/);
          let d = null;
          if (c) {
            const p = a.match(/merge\s+(\w+)/i);
            p && (d = p[1]);
          }
          t.push({ id: `commit-${o}`, label: h ? h[1] : `C${o}`, branch: n, x: 120 + o * 100, y: ((e = r.get(n)) == null ? void 0 : e.y) || 100, isMerge: c, mergeFrom: d, index: o }), o++;
        }
      }
    }), { commits: t, branches: Array.from(r.values()) };
  },
  wireframe: (i) => {
    const t = [];
    let r = 20, n = 20, o = [], a = !1, e = 0, c = 0;
    const h = /sidebar|aside|slip|cart|panel|summary/i.test(i) && /<\s*(sidebar|aside|slip|cart|panel|summary)/i.test(i), d = h ? 480 : 620, p = 200, f = h ? d + p + 30 : d + 40, m = () => a ? d + 30 : o.length > 0 ? o[o.length - 1].x + 15 : n, g = () => a ? p : o.length > 0 ? o[o.length - 1].width - 30 : d;
    for (i.split(`
`).forEach((y, s) => {
      var $, E, M, _, P, A, W, B, L, j, q, X, re, oe, te, ae, U, I, O;
      const u = y.trim();
      if (!u || u.startsWith("//") || u.startsWith("#") && !u.startsWith("# ") && !u.startsWith("## ") && !u.startsWith("### ")) return;
      const x = m(), b = g();
      if (u.match(/^\{(.+)\}$/) && !u.match(/\{(badge|tag):/i)) {
        t.push({ id: `wf-${s}`, type: "window", label: u.slice(1, -1), x, y: r, width: f, height: 36 }), r += 46;
        return;
      }
      if (u.match(/^<(.+)>$/) && !u.includes("/")) {
        const R = u.slice(1, -1), D = /sidebar|aside|slip|cart|panel|summary/i.test(R);
        D && !a && (a = !0, c = r, e = 145, r = e);
        const z = R === "card" || /^(sidebar|aside|panel|slip|summary|cart)$/i.test(R), V = { id: `wf-${s}`, type: "card", label: z ? "" : R, x, y: r, width: b, startY: r, children: [], isSidebar: D };
        t.push(V), o.push(V), r += z ? 15 : 45;
        return;
      }
      if (u.match(/^<\/(.*)>$/) || u === "</>") {
        if (o.length > 0) {
          const R = o.pop();
          R.height = r - R.startY + 20, R.isSidebar && (a = !1, r = Math.max(r, c));
        }
        r += 25;
        return;
      }
      if (u.match(/^\{\{(.+)\}\}$/)) {
        t.push({ id: `wf-${s}`, type: "modal", label: u.slice(2, -2), x: x + 20, y: r, width: b - 40, height: 200 }), r += 220;
        return;
      }
      if (u.match(/^\[\[(.+)\]\]$/)) {
        const R = u.slice(2, -2).split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "navbar", items: R, x, y: r, width: f, height: 44 }), r += 54;
        return;
      }
      if (u.match(/^\(\((.+)\)\)$/)) {
        const R = u.slice(2, -2).split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "tabs", items: R, activeIndex: 0, x, y: r, width: b, height: 40 }), r += 50;
        return;
      }
      if (u.startsWith(">>")) {
        const R = u.slice(2).split(">").map((D) => D.trim()).filter((D) => D);
        t.push({ id: `wf-${s}`, type: "breadcrumbs", items: R, x, y: r, width: b }), r += 35;
        return;
      }
      const k = u.match(/\[[^\]]+\]/g);
      if (k && k.length > 1) {
        const R = k.map((D) => {
          const z = D.slice(1, -1).trim();
          return z.startsWith("🔍") || z.toLowerCase().startsWith("search") ? { type: "search", label: z.replace(/^🔍\s*/, "").replace(/^search:?\s*/i, "").replace(/_/g, " ").trim() || "Search..." } : z.startsWith("v ") || z.toLowerCase().startsWith("select:") ? { type: "dropdown", label: z.replace(/^v\s+/, "").replace(/^select:\s*/i, "") } : z.startsWith("+") || z.startsWith("+ ") ? { type: "button", label: z, variant: "primary" } : { type: "button", label: z, variant: "secondary" };
        });
        t.push({ id: `wf-${s}`, type: "toolbar", items: R, x, y: r, width: b, height: 44 }), r += 54;
        return;
      }
      if (u.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/) || u.match(/^\[search:?\s*(.*)\]$/i)) {
        let R = (($ = u.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/)) == null ? void 0 : $[1]) || ((E = u.match(/^\[search:?\s*(.*)\]$/i)) == null ? void 0 : E[1]) || "Search...";
        R = R.replace(/^_+|_+$/g, "").replace(/_+/g, " ").trim() || "Search...", t.push({ id: `wf-${s}`, type: "search", label: R, x, y: r, width: b, height: 40 }), r += 50;
        return;
      }
      if (u.match(/^\[v\s+(.+)\]$/) || u.match(/^\[select:\s*(.+)\]$/i)) {
        const R = ((M = u.match(/^\[v\s+(.+)\]$/)) == null ? void 0 : M[1]) || ((_ = u.match(/^\[select:\s*(.+)\]$/i)) == null ? void 0 : _[1]);
        t.push({ id: `wf-${s}`, type: "dropdown", label: R, x, y: r, width: Math.min(200, b), height: 36 }), r += 46;
        return;
      }
      if (u.match(/^\[([oO])\]\s*(.+)$/)) {
        const R = u.match(/^\[([oO])\]\s*(.+)$/);
        t.push({ id: `wf-${s}`, type: "toggle", enabled: R[1] === "O", label: R[2], x, y: r }), r += 40;
        return;
      }
      if (u.match(/^\(([oO\*\s])\)\s*(.+)$/)) {
        const R = u.match(/^\(([oO\*\s])\)\s*(.+)$/);
        t.push({ id: `wf-${s}`, type: "radio", selected: R[1] === "O" || R[1] === "*", label: R[2], x, y: r }), r += 35;
        return;
      }
      if (u.match(/^\[=+o-+\]$/) || u.match(/^\[slider:\s*(\d+)%?\]$/i)) {
        let R = 50;
        const D = u.match(/^\[slider:\s*(\d+)%?\]$/i);
        if (D) R = parseInt(D[1]);
        else {
          const z = u.match(/^\[(=*)o(-*)\]$/);
          z && (R = Math.round(z[1].length / (z[1].length + z[2].length) * 100));
        }
        t.push({ id: `wf-${s}`, type: "slider", value: R, x, y: r, width: Math.min(200, b) }), r += 45;
        return;
      }
      if (u.match(/^\[\|+\.+\]/) || u.match(/^\[=+-+\]/) || u.match(/^\[progress:\s*(\d+)%?\]/i)) {
        let R = 50, D = "";
        const z = u.match(/^\[progress:\s*(\d+)%?\](.*)$/i);
        if (z)
          R = parseInt(z[1]), D = ((P = z[2]) == null ? void 0 : P.trim()) || "";
        else {
          const V = u.match(/^\[(\|+)(\.+)\]\s*(.*)$/);
          V && (R = Math.round(V[1].length / (V[1].length + V[2].length) * 100), D = V[3] || "");
          const Q = u.match(/^\[(=+)(-+)\]\s*(.*)$/);
          Q && (R = Math.round(Q[1].length / (Q[1].length + Q[2].length) * 100), D = Q[3] || "");
        }
        t.push({ id: `wf-${s}`, type: "progress", value: R, label: D, x, y: r, width: b - 20 }), r += 35;
        return;
      }
      if (u.match(/^\(@+\)$/) || u.match(/^\(@(.+)\)$/)) {
        if (u.match(/^\(@+\)$/)) {
          const D = u.length - 2;
          t.push({ id: `wf-${s}`, type: "avatar-group", count: D, x, y: r });
        } else {
          const D = ((A = u.match(/^\(@(.+)\)$/)) == null ? void 0 : A[1]) || "";
          t.push({ id: `wf-${s}`, type: "avatar", label: D, x, y: r });
        }
        r += 55;
        return;
      }
      if (u.match(/^\[img[^\]]*\](\s+\[img[^\]]*\])+$/i)) {
        const R = u.match(/\[img[^\]]*\]/gi) || [], D = R.length, z = Math.floor((b - (D - 1) * 8) / D);
        R.forEach((V, Q) => {
          const Z = V.match(/(\d+):(\d+)/), ke = Z ? parseInt(Z[1]) / parseInt(Z[2]) : 1, Ce = Math.min(Math.round(z / ke), 100);
          t.push({ id: `wf-${s}-${Q}`, type: "image", label: "", x: x + Q * (z + 8), y: r, width: z, height: Ce });
        }), r += 115;
        return;
      }
      const w = u.match(/\{(badge|tag):([^}]+)\}/gi);
      if (w && w.length > 0) {
        const R = w.map((D) => {
          const V = D.match(/\{(badge|tag):([^}]+)\}/i)[2].trim(), Q = V.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i), Z = Q ? Q[1].toLowerCase() : null, ke = Q ? Q[2] : V;
          return { variant: Z, label: ke };
        });
        t.push({ id: `wf-${s}`, type: "badge-group", badges: R, x, y: r }), r += 35;
        return;
      }
      if (u.match(/^\[img[:\s]?.*\]$/i)) {
        const R = ((W = u.match(/^\[img:\s*(.+)\]$/i)) == null ? void 0 : W[1]) || "", D = u.match(/(\d+):(\d+)/), z = D ? parseInt(D[1]) / parseInt(D[2]) : 16 / 9, V = Math.round(b / z);
        t.push({ id: `wf-${s}`, type: "image", label: R, x, y: r, width: b, height: Math.min(V, 200) }), r += Math.min(V, 200) + 15;
        return;
      }
      if (u.match(/^\[video[:\s]?.*\]$/i)) {
        const R = ((B = u.match(/^\[video:\s*(.+)\]$/i)) == null ? void 0 : B[1]) || "";
        t.push({ id: `wf-${s}`, type: "video", label: R, x, y: r, width: b, height: 180 }), r += 195;
        return;
      }
      if (u.match(/^\[map[:\s]?.*\]$/i)) {
        const R = ((L = u.match(/^\[map:\s*(.+)\]$/i)) == null ? void 0 : L[1]) || "";
        t.push({ id: `wf-${s}`, type: "map", label: R, x, y: r, width: b, height: 160 }), r += 175;
        return;
      }
      if (u.match(/^\[chart[:\s]?.*\]$/i)) {
        const R = ((j = u.match(/^\[chart:\s*(.+)\]$/i)) == null ? void 0 : j[1]) || "bar";
        t.push({ id: `wf-${s}`, type: "chart", chartType: R, x, y: r, width: b, height: 150 }), r += 165;
        return;
      }
      if (u.match(/^\[calendar\]$/i)) {
        t.push({ id: `wf-${s}`, type: "calendar", x, y: r, width: Math.min(280, b), height: 220 }), r += 235;
        return;
      }
      if (u.match(/^\|.+\|$/)) {
        const R = u.slice(1, -1).split("|").map((z) => z.trim()), D = !t.some((z) => z.type === "table-row" && z.y === r - 36);
        t.push({ id: `wf-${s}`, type: "table-row", cells: R, isHeader: D, x, y: r, width: b, height: 36 }), r += 36;
        return;
      }
      if (u.match(/^[-\*•]\s+(.+)$/)) {
        const R = u.match(/^[-\*•]\s+(.+)$/)[1];
        t.push({ id: `wf-${s}`, type: "list-item", label: R, x, y: r }), r += 32;
        return;
      }
      if (u.match(/^(\d+)[.)]\s+(.+)$/)) {
        const R = u.match(/^(\d+)[.)]\s+(.+)$/);
        t.push({ id: `wf-${s}`, type: "list-item-numbered", number: R[1], label: R[2], x, y: r }), r += 32;
        return;
      }
      if (u.match(/^\{(\w+):?(.*)?\}$/) && !u.match(/^\{.{15,}\}$/)) {
        const R = u.match(/^\{(\w+):?(.*)?\}$/), D = R[1].toLowerCase(), z = R[2] || R[1];
        if (["badge", "tag", "success", "warning", "error", "info", "new", "beta", "pro"].includes(D) || R[2]) {
          t.push({ id: `wf-${s}`, type: "badge", variant: D, label: z, x, y: r }), r += 35;
          return;
        }
      }
      if (u.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/)) {
        const R = u.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/), D = { "!": "error", i: "info", I: "info", "✓": "success", "✗": "error", "⚠": "warning" }[R[1]] || "info";
        t.push({ id: `wf-${s}`, type: "alert", variant: D, label: R[2], x, y: r, width: b }), r += 55;
        return;
      }
      if (u.match(/^\(\d+\)(---\(\d+\))+$/) || u.match(/^\[step:\s*(\d+)\/(\d+)\]$/i)) {
        let R = 1, D = 3;
        const z = u.match(/^\[step:\s*(\d+)\/(\d+)\]$/i);
        z ? (R = parseInt(z[1]), D = parseInt(z[2])) : (D = u.match(/\((\d+)\)/g).length, R = 1), t.push({ id: `wf-${s}`, type: "stepper", current: R, total: D, x, y: r, width: b }), r += 50;
        return;
      }
      if (u.match(/^\[<.*>\]$/) || u.match(/^\[page:\s*(\d+)\/(\d+)\]$/i)) {
        let R = 1, D = 5;
        const z = u.match(/^\[page:\s*(\d+)\/(\d+)\]$/i);
        z && (R = parseInt(z[1]), D = parseInt(z[2])), t.push({ id: `wf-${s}`, type: "pagination", current: R, total: D, x, y: r, width: b }), r += 45;
        return;
      }
      if (u === "[~~~]" || u.toLowerCase() === "[skeleton]") {
        t.push({ id: `wf-${s}`, type: "skeleton", x, y: r, width: b, height: 20 }), r += 30;
        return;
      }
      if (u.match(/^\["""\s*(.*)\]$/) || u.toLowerCase() === "[textarea]") {
        const R = ((q = u.match(/^\["""\s*(.*)\]$/)) == null ? void 0 : q[1]) || "";
        t.push({ id: `wf-${s}`, type: "textarea", label: R, x, y: r, width: b, height: 80 }), r += 95;
        return;
      }
      if (u.match(/^\[~(.+)~\]$/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "secondary", label: u.match(/^\[~(.+)~\]$/)[1], x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (u.match(/^\[--(.+)--\]$/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "ghost", label: u.match(/^\[--(.+)--\]$/)[1], x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (u.match(/^\[!!(.+)!!\]$/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "danger", label: u.match(/^\[!!(.+)!!\]$/)[1], x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (u.match(/^\[icon:(\w+)\]$/i)) {
        const R = u.match(/^\[icon:(\w+)\]$/i)[1];
        t.push({ id: `wf-${s}`, type: "icon-button", icon: R, x, y: r }), r += 45;
        return;
      }
      if (u.match(/^---\s*(.+)\s*---$/) || u.match(/^===\s*(.+)\s*===$/)) {
        const R = u.match(/^[-=]{3}\s*(.+)\s*[-=]{3}$/)[1];
        t.push({ id: `wf-${s}`, type: "divider-label", label: R, x, y: r, width: b }), r += 30;
        return;
      }
      if (u.match(/^\[[\*★☆]+\]$/)) {
        const R = u.slice(1, -1), D = (R.match(/[\*★]/g) || []).length, z = R.length;
        t.push({ id: `wf-${s}`, type: "rating", filled: D, total: z, x, y: r }), r += 35;
        return;
      }
      if (u.match(/^(<\w+>\s*)+$/)) {
        const R = u.match(/<(\w+)>/g).map((D) => D.slice(1, -1));
        t.push({ id: `wf-${s}`, type: "chip-group", tags: R, x, y: r }), r += 40;
        return;
      }
      if (u === "[?]" || u === "(?)") {
        t.push({ id: `wf-${s}`, type: "tooltip", x, y: r }), r += 30;
        return;
      }
      if (u.match(/^\[.+\](\s+\[.+\])+$/) && !u.includes("|")) {
        const R = u.match(/\[([^\]]+)\]/g).map((D) => D.slice(1, -1));
        t.push({ id: `wf-${s}`, type: "button-row", buttons: R, x, y: r, width: b }), r += 50;
        return;
      }
      if (u.match(/^@\w+\s+.+/) || u.match(/^@\w+:\s*.+/)) {
        const R = u.match(/^@(\w+):?\s*(.+)$/);
        if (R) {
          t.push({ id: `wf-${s}`, type: "feed-item", username: R[1], text: R[2], x, y: r, width: b }), r += 38;
          return;
        }
      }
      if (u.match(/^[🏆💰🎉🔥⭐]\s*@\w+/)) {
        const R = u.match(/^([🏆💰🎉🔥⭐])\s*@(\w+)\s*(.+)$/);
        if (R) {
          t.push({ id: `wf-${s}`, type: "win-notification", emoji: R[1], username: R[2], text: R[3], x, y: r, width: b }), r += 44;
          return;
        }
      }
      if (u.match(/^[❤️💬🔄💾🎯👍👎].+[❤️💬🔄💾🎯👍👎]/)) {
        t.push({ id: `wf-${s}`, type: "social-stats", text: u, x, y: r, width: b }), r += 40;
        return;
      }
      if (u.match(/^_{3,}$/)) {
        r += 20;
        return;
      }
      if (u.match(/^\[hero:\s*(.+)\]$/i)) {
        const R = u.match(/^\[hero:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "hero", title: R[0], subtitle: R[1] || "", cta: R[2] || "Get Started", x, y: r, width: b, height: 280 }), r += 300;
        return;
      }
      if (u.match(/^\[pricing:\s*(.+)\]$/i)) {
        const R = u.match(/^\[pricing:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim()), D = R[2] ? R[2].split(",").map((z) => z.trim()) : [];
        t.push({ id: `wf-${s}`, type: "pricing-card", plan: R[0], price: R[1] || "$0", features: D, cta: R[3] || "Choose Plan", x, y: r, width: Math.min(280, b), height: 320 }), r += 340;
        return;
      }
      if (u.match(/^\[feature:\s*(.+)\]$/i)) {
        const R = u.match(/^\[feature:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "feature-card", icon: R[0] || "✨", title: R[1] || "Feature", description: R[2] || "", x, y: r, width: Math.min(300, b), height: 160 }), r += 180;
        return;
      }
      if (u.match(/^\[stat:\s*(.+)\]$/i)) {
        const R = u.match(/^\[stat:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "stat-widget", value: R[0], label: R[1] || "", trend: R[2] || "", x, y: r, width: Math.min(200, b), height: 140 }), r += 160;
        return;
      }
      if (u.match(/^\[login-form[:\s]*(.*)?\]$/i)) {
        const R = ((X = u.match(/^\[login-form:\s*(.+)\]$/i)) == null ? void 0 : X[1]) || "Sign In";
        t.push({ id: `wf-${s}`, type: "login-form", title: R, x, y: r, width: Math.min(360, b), height: 420 }), r += 440;
        return;
      }
      if (u.match(/^\[signup-form[:\s]*(.*)?\]$/i)) {
        const R = ((re = u.match(/^\[signup-form:\s*(.+)\]$/i)) == null ? void 0 : re[1]) || "Create Account";
        t.push({ id: `wf-${s}`, type: "signup-form", title: R, x, y: r, width: Math.min(360, b), height: 480 }), r += 500;
        return;
      }
      if (u.match(/^\[widget:\s*(.+)\]$/i)) {
        const R = u.match(/^\[widget:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "dashboard-widget", title: R[0], value: R[1] || "", icon: R[2] || "📊", x, y: r, width: Math.min(200, b), height: 120 }), r += 140;
        return;
      }
      if (u.match(/^\[bottom-nav:\s*(.+)\]$/i)) {
        const R = u.match(/^\[bottom-nav:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "bottom-nav", items: R, x, y: r, width: b, height: 64 }), r += 80;
        return;
      }
      if (u.match(/^\[app-bar:\s*(.+)\]$/i)) {
        const R = u.match(/^\[app-bar:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "app-bar", title: R[0], actions: R.slice(1), x, y: r, width: b, height: 56 }), r += 70;
        return;
      }
      if (u.match(/^\[fab:\s*(.+)\]$/i)) {
        const R = u.match(/^\[fab:\s*(.+)\]$/i)[1];
        t.push({ id: `wf-${s}`, type: "fab", icon: R, x: x + b - 70, y: r, width: 56, height: 56 }), r += 70;
        return;
      }
      if (u.match(/^\[toast:\s*(.+)\]$/i)) {
        const R = u.match(/^\[toast:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "toast", message: R[0], variant: R[1] || "info", x, y: r, width: Math.min(400, b), height: 56 }), r += 70;
        return;
      }
      if (u.match(/^\[empty:\s*(.+)\]$/i)) {
        const R = u.match(/^\[empty:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "empty-state", title: R[0], description: R[1] || "", cta: R[2] || "", x, y: r, width: b, height: 240 }), r += 260;
        return;
      }
      if (u.match(/^\[error:\s*(.+)\]$/i)) {
        const R = u.match(/^\[error:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "error-state", title: R[0], description: R[1] || "", cta: R[2] || "Retry", x, y: r, width: b, height: 240 }), r += 260;
        return;
      }
      if (u.match(/^\[loading[:\s]*(.*)?\]$/i)) {
        const R = ((oe = u.match(/^\[loading:\s*(.+)\]$/i)) == null ? void 0 : oe[1]) || "Loading...";
        t.push({ id: `wf-${s}`, type: "loading-state", text: R, x, y: r, width: b, height: 120 }), r += 140;
        return;
      }
      if (u.match(/^\[testimonial:\s*(.+)\]$/i)) {
        const R = u.match(/^\[testimonial:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "testimonial", quote: (te = R[0]) == null ? void 0 : te.replace(/^["']|["']$/g, ""), name: R[1] || "John Doe", title: R[2] || "", x, y: r, width: Math.min(400, b), height: 200 }), r += 220;
        return;
      }
      if (u.match(/^\[footer:\s*(.+)\]$/i)) {
        const R = u.match(/^\[footer:\s*(.+)\]$/i)[1], D = R.includes("::") ? R.split("::").map((z) => z.split("|").map((V) => V.trim())) : [R.split("|").map((z) => z.trim())];
        t.push({ id: `wf-${s}`, type: "footer", sections: D, copyright: "", x, y: r, width: b, height: 140 }), r += 160;
        return;
      }
      if (u.match(/^\[social:\s*(.+)\]$/i)) {
        const R = u.match(/^\[social:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "social-links", links: R, x, y: r, width: b, height: 48 }), r += 60;
        return;
      }
      if (u.match(/^\[cta:\s*(.+)\]$/i)) {
        const R = u.match(/^\[cta:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "cta-section", title: R[0], description: R[1] || "", cta: R[2] || "Get Started", x, y: r, width: b, height: 180 }), r += 200;
        return;
      }
      if (u.match(/^\[profile:\s*(.+)\]$/i)) {
        const R = u.match(/^\[profile:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "profile-card", name: R[0], username: R[1] || "", bio: R[2] || "", x, y: r, width: Math.min(300, b), height: 280 }), r += 300;
        return;
      }
      if (u.match(/^\[activity:\s*(.+)\]$/i)) {
        const R = u.match(/^\[activity:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "activity-item", text: R[0], time: R[1] || "Just now", x, y: r, width: b, height: 60 }), r += 70;
        return;
      }
      if (u.match(/^\[comment:\s*(.+)\]$/i)) {
        const R = u.match(/^\[comment:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "comment", username: R[0], text: R[1] || "", time: R[2] || "", x, y: r, width: b, height: 100 }), r += 115;
        return;
      }
      if (u.match(/^\[code[:\s]*(.*)?\]$/i)) {
        const R = ((ae = u.match(/^\[code:\s*(.+)\]$/i)) == null ? void 0 : ae[1]) || "javascript";
        t.push({ id: `wf-${s}`, type: "code-block", language: R, x, y: r, width: b, height: 160 }), r += 180;
        return;
      }
      if (u.match(/^\[upload[:\s]*(.*)?\]$/i)) {
        const R = ((U = u.match(/^\[upload:\s*(.+)\]$/i)) == null ? void 0 : U[1]) || "Drag and drop files here";
        t.push({ id: `wf-${s}`, type: "upload", label: R, x, y: r, width: b, height: 160 }), r += 180;
        return;
      }
      if (u.match(/^\[accordion:\s*(.+)\]$/i)) {
        const R = u.match(/^\[accordion:\s*(.+)\]$/i)[1].split("|").map((D) => D.trim());
        t.push({ id: `wf-${s}`, type: "accordion", items: R, x, y: r, width: b, height: 60 + R.length * 50 }), r += 80 + R.length * 50;
        return;
      }
      if (u.match(/^\[data-table:\s*(\d+)?\s*rows?\]$/i)) {
        const R = parseInt(((I = u.match(/^\[data-table:\s*(\d+)/i)) == null ? void 0 : I[1]) || "3");
        t.push({ id: `wf-${s}`, type: "data-table", rows: R, x, y: r, width: b, height: 52 + R * 52 }), r += 72 + R * 52;
        return;
      }
      if (u.match(/^\[(user|bot|assistant|chatgpt|ai|me|you|system):\s*(.+)\]$/i)) {
        const R = u.match(/^\[(\w+):\s*(.+)\]$/i), D = R[1], z = R[2], V = /user|me|you/i.test(D);
        t.push({ id: `wf-${s}`, type: "chat-message", sender: D, message: z, isUser: V, x, y: r, width: b }), r += 60;
        return;
      }
      if (u.match(/^\[([^\]:]+)\]$/) && !u.match(/^\[_{2,}\]$/) && !u.match(/^\[(x| )\]/i) && !u.match(/^\[v\s/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "primary", label: u.slice(1, -1), x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (u.match(/^\[_{2,}\]$/) || u.match(/^"(.+)"$/)) {
        t.push({ id: `wf-${s}`, type: "input", label: ((O = u.match(/^"(.+)"$/)) == null ? void 0 : O[1]) || "", x, y: r, width: b, height: 36 }), r += 48;
        return;
      }
      const C = u.match(/^\[(x| )\]\s*(.+)$/i);
      if (C) {
        t.push({ id: `wf-${s}`, type: "checkbox", checked: C[1].toLowerCase() === "x", label: C[2], x, y: r }), r += 35;
        return;
      }
      if (u === "---" || u === "===") {
        t.push({ id: `wf-${s}`, type: "separator", x, y: r, width: b, height: 2 }), r += 15;
        return;
      }
      if (u) {
        const R = u.startsWith("# "), D = u.startsWith("## "), z = u.startsWith("### "), V = u.startsWith("**") && u.endsWith("**");
        let Q = u, Z = "body";
        R ? (Q = u.slice(2), Z = "h1") : D ? (Q = u.slice(3), Z = "h2") : z ? (Q = u.slice(4), Z = "h3") : V && (Q = u.slice(2, -2), Z = "bold"), t.push({ id: `wf-${s}`, type: "text", label: Q, textType: Z, x, y: r }), r += Z === "h1" ? 45 : Z === "h2" ? 38 : Z === "h3" ? 32 : Z === "bold" ? 30 : 26;
      }
    }); o.length > 0; ) {
      const y = o.pop();
      y.height = r - y.startY + 15;
    }
    return { elements: t, totalHeight: r + 40 };
  },
  classDiagram: (i) => {
    const t = [], r = [];
    let n = null;
    return i.split(`
`).forEach((o) => {
      var d;
      if (o = o.trim(), !o || o.startsWith("#")) return;
      const a = o.match(/^class\s+(\w+)/i);
      if (a) {
        n && t.push(n), n = { id: a[1], name: a[1], properties: [], methods: [] };
        return;
      }
      const e = o.match(/^(\w+)\s*(--|>|--\*|-->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);
      if (e) {
        const p = e[2] === "--|>" ? "extends" : e[2] === "--*" ? "composition" : "association";
        r.push({ from: e[1], to: e[3], type: p, label: ((d = e[4]) == null ? void 0 : d.trim()) || "" });
        return;
      }
      const c = o.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)$/);
      if (c && n) {
        n.properties.push({ visibility: c[1] || "+", name: c[2], type: c[3] });
        return;
      }
      const h = o.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*(?::\s*(.+))?$/);
      h && n && n.methods.push({ visibility: h[1] || "+", name: h[2], params: h[3], returns: h[4] || "void" });
    }), n && t.push(n), { classes: t, relationships: r };
  },
  activity: (i) => {
    const t = /* @__PURE__ */ new Map(), r = [], n = [], o = i.split(`
`).map((f) => f.trim()).filter((f) => f && !f.startsWith("#"));
    if (o.forEach((f) => {
      if (f.match(/^[^<:\[].+?\s*->\s*.+$/)) return;
      let m = "action", g = f, y = f;
      f === "[start]" || f === "start" ? (m = "start", g = "start", y = "") : f === "[end]" || f === "end" ? (m = "end", g = "end", y = "") : f.match(/^<(.+)>$/) ? (m = "decision", g = f.match(/^<(.+)>$/)[1], y = g) : f.match(/^:(.+);?$/) && (g = f.match(/^:(.+);?$/)[1], y = g);
      const s = g.toLowerCase().replace(/[^a-z0-9]/g, "_");
      t.has(s) || (t.set(s, { id: s, type: m, label: y, x: 0, y: 0 }), n.push(s));
    }), o.forEach((f) => {
      var g;
      const m = f.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (m) {
        const y = m[1].replace(/^[<:\[]|[>;>\]]$/g, "").trim(), s = m[2].replace(/^[<:\[]|[>;>\]]$/g, "").trim(), u = ((g = m[3]) == null ? void 0 : g.trim()) || "", x = y.toLowerCase().replace(/[^a-z0-9]/g, "_"), b = s.toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.has(x) && t.has(b) && r.push({ id: `ae-${r.length}`, source: x, target: b, label: u });
      }
    }), r.length === 0 && n.length > 1)
      for (let f = 0; f < n.length - 1; f++)
        r.push({ id: `ae-${f}`, source: n[f], target: n[f + 1] });
    const a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    r.forEach((f) => {
      a.has(f.source) || a.set(f.source, []), a.get(f.source).push(f.target), e.has(f.target) || e.set(f.target, []), e.get(f.target).push(f.source);
    });
    const c = /* @__PURE__ */ new Set(), h = (f, m, g) => {
      if (c.has(f) || !t.has(f)) return;
      const y = t.get(f);
      y.x = m, y.y = g, c.add(f);
      const s = a.get(f) || [];
      s.length === 1 ? h(s[0], m, g + 120) : s.length >= 2 && s.forEach((x, b) => {
        const k = b === 0 ? -100 : b === 1 ? 100 : (b - 0.5) * 200;
        h(x, m + k, g + 120);
      });
    }, d = n.find((f) => {
      var m;
      return ((m = t.get(f)) == null ? void 0 : m.type) === "start";
    }) || n[0];
    d && h(d, 400, 80);
    let p = 80;
    return n.forEach((f) => {
      if (!c.has(f)) {
        const m = t.get(f);
        m.x = 650, m.y = p, p += 120, c.add(f);
      }
    }), { nodes: Array.from(t.values()), edges: r };
  },
  useCase: (i) => {
    const t = [], r = [], n = [];
    return i.split(`
`).forEach((o) => {
      if (o = o.trim(), !o || o.startsWith("#")) return;
      if (o.match(/^actor\s+/i)) {
        t.push({ id: `actor-${t.length}`, label: o.replace(/^actor\s+/i, "").trim() });
        return;
      }
      if (o.startsWith("(") || o.match(/^usecase\s+/i)) {
        r.push({ id: `uc-${r.length}`, label: o.replace(/^usecase\s+/i, "").replace(/[()]/g, "").trim() });
        return;
      }
      const a = o.match(/^(.+?)\s*->\s*(.+)$/);
      a && n.push({ from: a[1].trim(), to: a[2].trim() });
    }), { actors: t, useCases: r, relationships: n };
  },
  component: (i) => {
    const t = [], r = [];
    return i.split(`
`).forEach((n) => {
      if (n = n.trim(), !n || n.startsWith("#")) return;
      const o = n.match(/^\[(\w+)\]\s*(.+)$/);
      if (o) {
        t.push({ id: `comp-${t.length}`, label: o[2].trim(), type: o[1] });
        return;
      }
      const a = n.match(/^(.+?)\s*(-->|--)\s*(.+)$/);
      a && r.push({ from: a[1].trim(), to: a[3].trim() });
    }), { components: t, connections: r };
  },
  c4: (i) => {
    const t = [], r = [], n = [], o = [];
    let a = 0;
    return i.split(`
`).forEach((e, c) => {
      var f, m;
      if (e = e.trim(), !e || e.startsWith("#")) return;
      const h = e.match(/^(?:boundary|group)\s+["']([^"']+)["']\s*\{?\s*$/i);
      if (h) {
        const g = {
          id: `boundary-${a++}`,
          name: h[1].trim(),
          elements: [],
          parent: o.length > 0 ? o[o.length - 1].id : null
        };
        n.push(g), o.push(g);
        return;
      }
      if (e === "}" && o.length > 0) {
        o.pop();
        return;
      }
      const d = e.match(/^\[(\w+)\]\s*(.+?)(?::\s*(.+))?$/);
      if (d) {
        const g = {
          id: `c4-${c}`,
          type: d[1].toLowerCase(),
          label: d[2].trim(),
          description: ((f = d[3]) == null ? void 0 : f.trim()) || "",
          boundary: o.length > 0 ? o[o.length - 1].id : null
        };
        t.push(g), o.length > 0 && o[o.length - 1].elements.push(g.id);
        return;
      }
      const p = e.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      p && r.push({ from: p[1].trim(), to: p[2].trim(), label: ((m = p[3]) == null ? void 0 : m.trim()) || "" });
    }), { elements: t, relationships: r, boundaries: n };
  },
  requirement: (i) => {
    const t = [], r = [];
    let n = null;
    return i.split(`
`).forEach((o, a) => {
      var h;
      if (o = o.trim(), !o || o.startsWith("#")) return;
      const e = o.match(/^requirement\s+(.+?)(?:\s*{)?$/i);
      if (e) {
        n && t.push(n), n = { id: `req-${a}`, name: e[1].trim(), text: "", risk: "", priority: "" };
        return;
      }
      const c = o.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      if (c && !n) {
        r.push({ from: c[1].trim(), to: c[2].trim(), label: ((h = c[3]) == null ? void 0 : h.trim()) || "" });
        return;
      }
      n && (o.startsWith("text:") ? n.text = o.replace("text:", "").trim() : o.startsWith("risk:") ? n.risk = o.replace("risk:", "").trim() : o.startsWith("priority:") ? n.priority = o.replace("priority:", "").trim() : o === "}" && (t.push(n), n = null));
    }), n && t.push(n), { requirements: t, traces: r };
  },
  sankey: (i) => {
    const t = /* @__PURE__ */ new Map(), r = [];
    i.split(`
`).forEach((y, s) => {
      if (y = y.trim(), !y || y.startsWith("#")) return;
      const u = y.match(/^(.+?)\s*->\s*(.+?)(?::\s*(\d+(?:\.\d+)?))?$/);
      if (u) {
        const x = u[1].trim(), b = u[2].trim(), k = parseFloat(u[3]) || 10, w = x.toLowerCase().replace(/[^a-z0-9]/g, "_"), C = b.toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.has(w) || t.set(w, { id: w, label: x }), t.has(C) || t.set(C, { id: C, label: b }), r.push({ id: `link-${s}`, source: w, target: C, value: k });
      }
    });
    const n = Array.from(t.values()), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
    r.forEach((y) => {
      o.has(y.source) || o.set(y.source, []), o.get(y.source).push(y.target), a.has(y.target) || a.set(y.target, []), a.get(y.target).push(y.source);
    });
    const e = /* @__PURE__ */ new Map(), c = (y, s) => {
      const u = e.get(y);
      u !== void 0 && u >= s || (e.set(y, s), (o.get(y) || []).forEach((x) => c(x, s + 1)));
    };
    n.filter((y) => !a.has(y.id) || a.get(y.id).length === 0).forEach((y) => c(y.id, 0)), n.forEach((y) => {
      e.has(y.id) || e.set(y.id, 0);
    });
    const h = Math.max(...e.values(), 0), d = /* @__PURE__ */ new Map();
    n.forEach((y) => {
      const s = e.get(y.id) || 0;
      d.has(s) || d.set(s, []), d.get(s).push(y);
    }), n.forEach((y) => {
      const s = r.filter((x) => x.source === y.id).reduce((x, b) => x + b.value, 0), u = r.filter((x) => x.target === y.id).reduce((x, b) => x + b.value, 0);
      y.value = Math.max(s, u, 10);
    });
    const p = 800, f = 500, m = 60, g = (p - m * 2) / (h + 1 || 1);
    for (let y = 0; y <= h; y++) {
      const s = d.get(y) || [], u = s.reduce((b, k) => b + Math.max(30, k.value * 2), 0) + (s.length - 1) * 20;
      let x = (f - u) / 2;
      s.forEach((b) => {
        b.x = m + y * g, b.y = x, b.height = Math.max(30, b.value * 2), b.layer = y, x += b.height + 20;
      });
    }
    return r.forEach((y) => {
      const s = t.get(y.source), u = t.get(y.target);
      s && u && (y.sourceY = s.y + s.height / 2, y.targetY = u.y + u.height / 2, y.thickness = Math.max(4, y.value * 1.5));
    }), { nodes: n, links: r };
  },
  // Swimlane parser for process flows with roles/responsibilities
  swimlane: (i) => {
    const t = [], r = [], n = [];
    let o = null, a = 0;
    i.split(`
`).forEach((f) => {
      if (f = f.trim(), !f || f.startsWith("#")) return;
      const m = f.match(/^\[(.+?)\]$/) || f.match(/^lane:\s*(.+)$/i);
      if (m) {
        o = { id: `lane-${t.length}`, name: m[1].trim(), nodes: [] }, t.push(o);
        return;
      }
      const g = f.match(/^\((\w+)\)\s*(.+?)(?:\s*->\s*(.+))?$/) || f.match(/^(.+?)\s*->\s*(.+)$/);
      if (g) {
        let y, s, u;
        g[1] && g[2] && f.startsWith("(") ? (y = g[1].toLowerCase(), s = g[2].trim(), u = g[3]) : (y = "process", s = g[1].trim(), u = g[2]);
        const x = {
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
        }, b = `n${a++}`, k = {
          id: b,
          label: s,
          type: x[y] || "rect",
          lane: (o == null ? void 0 : o.id) || null
        };
        r.push(k), o && o.nodes.push(b), u && u.split(",").map((C) => C.trim()).forEach((C) => {
          const $ = C.match(/^(.+?):\s*(.+)$/), E = $ ? $[1].trim() : C, M = $ ? $[2].trim() : "";
          n.push({
            id: `e${n.length}`,
            source: b,
            targetLabel: E,
            label: M
          });
        });
      } else if (o && f) {
        const y = f.match(/^\((\w+)\)\s*(.+)$/) || [null, "process", f], s = y[1] || "process", u = y[2] || f, x = {
          start: "start",
          end: "end",
          decision: "diamond",
          diamond: "diamond",
          process: "rect",
          task: "rect",
          rect: "rect",
          action: "rect"
        }, b = `n${a++}`;
        r.push({
          id: b,
          label: u,
          type: x[s.toLowerCase()] || "rect",
          lane: o.id
        }), o.nodes.push(b);
      }
    }), n.forEach((f) => {
      const m = r.find((g) => g.label.toLowerCase() === f.targetLabel.toLowerCase());
      m && (f.target = m.id);
    });
    const e = n.filter((f) => f.target), c = 120, h = 140, d = 50;
    t.forEach((f, m) => {
      f.y = m * c, f.height = c, r.filter((y) => y.lane === f.id).forEach((y, s) => {
        y.x = 180 + s * (h + 60), y.y = f.y + (c - d) / 2, y.width = h, y.height = d;
      });
    });
    const p = r.filter((f) => !f.lane);
    if (p.length > 0) {
      const f = { id: "default", name: "General", nodes: [], y: t.length * c, height: c };
      t.push(f), p.forEach((m, g) => {
        m.lane = "default", m.x = 180 + g * (h + 60), m.y = f.y + (c - d) / 2, m.width = h, m.height = d;
      });
    }
    return { lanes: t, nodes: r, edges: e };
  }
};
function F2({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 100, y: 0 }), [c, h] = Y(/* @__PURE__ */ new Set()), d = ge(() => {
    const s = [], u = [], x = /* @__PURE__ */ new Map(), b = 50, k = (M) => Math.max(120, ((M == null ? void 0 : M.length) || 5) * 9 + 50), w = (M, _) => {
      var A;
      const P = k(M.label);
      x.set(_, Math.max(x.get(_) || 0, P)), (A = M.children) != null && A.length && !c.has(M.id) && M.children.forEach((W) => w(W, _ + 1));
    }, C = (M) => {
      let _ = 0;
      for (let P = 0; P < M; P++)
        _ += (x.get(P) || 120) + b;
      return _;
    }, $ = (M) => {
      var _;
      return !((_ = M.children) != null && _.length) || c.has(M.id) ? 38 : M.children.reduce((P, A) => P + $(A) + 16, -16);
    }, E = (M, _, P, A, W) => {
      var re, oe, te;
      const B = $(M), L = P + B / 2, j = k(M.label), q = _ === 0 ? v.purple : W, X = C(_);
      if (s.push({ id: M.id, label: M.label || "", defaultX: X, defaultY: L, width: j, level: _, color: q, hasChildren: ((re = M.children) == null ? void 0 : re.length) > 0, isCollapsed: c.has(M.id), childCount: ((oe = M.children) == null ? void 0 : oe.length) || 0 }), A && u.push({ id: `e-${A}-${M.id}`, source: A, target: M.id, color: q }), (te = M.children) != null && te.length && !c.has(M.id)) {
        let ae = P;
        M.children.forEach((U, I) => {
          E(U, _ + 1, ae, M.id, _ === 0 ? de[I % de.length] : W), ae += $(U) + 16;
        });
      }
    };
    if (i != null && i.label && (w(i, 0), E(i, 0, 0, null, de[0]), s.length)) {
      const M = Math.min(...s.map((P) => P.defaultY)), _ = Math.max(...s.map((P) => P.defaultY));
      s.forEach((P) => {
        P.defaultY += -(M + _) / 2 + 300;
      });
    }
    return { nodes: s, edges: u };
  }, [i, c]), p = (s) => e.getNodePosition(s.id, s.defaultX, s.defaultY), f = (s, u) => {
    const x = p(s), b = p(u), k = x.x + s.width + 5, w = x.y, C = b.x - 5, $ = b.y, E = C - k, M = Math.min(Math.abs(E) * 0.4, 80);
    return `M ${k} ${w} C ${k + M} ${w}, ${C - M} ${$}, ${C} ${$}`;
  }, m = H(() => {
    const s = e.finishEditing();
    if (s.nodeId && s.newValue && n) {
      const u = d.nodes.find((x) => x.id === s.nodeId);
      u && u.label !== s.newValue && n(s.nodeId, u.label, s.newValue);
    }
  }, [e, d.nodes, n]);
  se(() => {
    const s = (u) => {
      const b = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? u.metaKey : u.ctrlKey;
      if (!e.editingNode) {
        if ((u.key === "Delete" || u.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          u.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (b && u.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          u.preventDefault(), e.copySelectedNodes(d.nodes);
          return;
        }
        if (b && u.key.toLowerCase() === "v" && e.clipboard && a) {
          u.preventDefault();
          const k = e.pasteNodes();
          k && a(k);
          return;
        }
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e, d.nodes, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const s = e.getNodesInSelectionBox(d.nodes.map((u) => ({ ...u, x: u.defaultX, y: u.defaultY })), e.selectionBox);
      s.length > 0 && e.setSelectedNodes(new Set(s));
    }
  }, [e.isSelecting, e.selectionBox, d.nodes, e]);
  const g = H((s) => {
    (s.target === e.canvasRef.current || s.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), y = H((s) => {
    h((u) => {
      const x = new Set(u);
      return x.has(s) ? x.delete(s) : x.add(s), x;
    });
  }, []);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${30 * e.zoom}px ${30 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        d.edges.map((s) => {
          const u = d.nodes.find((w) => w.id === s.source), x = d.nodes.find((w) => w.id === s.target);
          if (!u || !x) return null;
          const b = f(u, x), k = r ? ye.stroke : s.color;
          return /* @__PURE__ */ S("g", { children: [
            !r && /* @__PURE__ */ l("path", { d: b, fill: "none", stroke: k, strokeWidth: 6, strokeOpacity: 0.1, strokeLinecap: "round" }),
            !r && /* @__PURE__ */ l("path", { d: b, fill: "none", stroke: k, strokeWidth: 3, strokeOpacity: 0.25, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: b, fill: "none", stroke: k, strokeWidth: r ? 2.5 : 2, strokeOpacity: r ? 1 : 0.8, strokeLinecap: "round" })
          ] }, s.id);
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: d.nodes.map((s) => {
        const u = p(s), x = e.nodeColors[s.id] || s.color, b = e.dragging === s.id, k = e.selectedNodes.has(s.id), w = e.editingNode === s.id;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (C) => e.handleNodeMouseDown(C, s.id, u.x, u.y),
            onDoubleClick: (C) => e.handleNodeDoubleClick(C, s.id, s.label),
            onContextMenu: (C) => e.handleNodeContextMenu(C, s.id),
            style: {
              position: "absolute",
              left: u.x,
              top: u.y - 19,
              width: s.width,
              height: 38,
              background: r ? ye.fill : s.level === 0 ? `linear-gradient(135deg, ${x}, ${x}dd)` : At(x),
              border: r ? `2px solid ${ye.stroke}` : `2px solid ${x}`,
              borderRadius: s.level === 0 ? 19 : 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: b ? "grabbing" : "grab",
              boxShadow: Ze(x, b, k, r),
              transition: b ? "none" : "box-shadow 0.2s, background 0.2s",
              fontFamily: rn(r)
            },
            children: [
              /* @__PURE__ */ l(
                Xe,
                {
                  isEditing: w,
                  value: w ? e.editValue : s.label,
                  onChange: e.setEditValue,
                  onFinish: m,
                  onCancel: e.cancelEditing,
                  style: { color: r ? ye.stroke : s.level === 0 ? "#fff" : t.textPrimary, fontSize: r ? D2(s.level === 0 ? 14 : 13) : s.level === 0 ? 14 : 13, fontWeight: s.level === 0 ? 700 : 500 }
                }
              ),
              s.hasChildren && /* @__PURE__ */ l(
                "div",
                {
                  onClick: (C) => {
                    C.stopPropagation(), y(s.id);
                  },
                  style: { position: "absolute", right: -28, width: 24, height: 24, borderRadius: "50%", background: x, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer" },
                  children: s.isCollapsed ? "+" : "−"
                }
              )
            ]
          },
          s.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((s) => Math.min(s * 1.2, 3)), onZoomOut: () => e.setZoom((s) => Math.max(s * 0.8, 0.2)), onFit: () => {
    }, onReset: () => {
      e.resetView(), h(/* @__PURE__ */ new Set());
    }, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((s) => !s) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      tt,
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
function U2({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 0, y: 30 }), { nodes: c = [], edges: h = [], groups: d = [] } = i, p = (u) => e.getNodePosition(u.id, u.x, u.y), f = (u) => u.shape === "cylinder" || ["database", "cache", "storage", "db", "redis", "s3", "blob"].includes(u.type) ? "cylinder" : u.shape === "hexagon" || ["gateway", "loadbalancer", "lb", "api", "proxy", "cdn", "firewall"].includes(u.type) ? "hexagon" : "rect", m = ge(() => {
    if (!c || c.length === 0) return { x: 0, y: 0, width: 800, height: 600 };
    const u = 150, x = 90, b = c.map((_) => {
      var A;
      return ((A = e.nodePositions) == null ? void 0 : A[_.id]) || { x: _.x || 0, y: _.y || 0 };
    });
    if (b.length === 0) return { x: 0, y: 0, width: 800, height: 600 };
    const k = b.map((_) => _.x), w = b.map((_) => _.y), C = Math.min(...k) - u, $ = Math.max(...k) + u, E = Math.min(...w) - x, M = Math.max(...w) + x;
    return { x: C, y: E, width: $ - C, height: M - E };
  }, [c, e.nodePositions]), g = (u) => {
    switch (u.style || "normal") {
      case "dotted":
        return { strokeDasharray: "4,4", strokeWidth: 2 };
      case "dashed":
        return { strokeDasharray: "8,4", strokeWidth: 2 };
      case "thick":
        return { strokeDasharray: "none", strokeWidth: 4 };
      case "async":
        return { strokeDasharray: "2,2", strokeWidth: 2 };
      default:
        return { strokeDasharray: "6,4", strokeWidth: 2 };
    }
  }, y = H(() => {
    const u = e.finishEditing();
    if (u.nodeId && u.newValue && n) {
      const x = c.find((b) => b.id === u.nodeId);
      x && x.label !== u.newValue && n(u.nodeId, x.label, u.newValue);
    }
  }, [e, c, n]);
  se(() => {
    const u = (x) => {
      const k = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? x.metaKey : x.ctrlKey;
      if (!e.editingNode) {
        if ((x.key === "Delete" || x.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          x.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (k && x.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          x.preventDefault(), e.copySelectedNodes(c);
          return;
        }
        if (k && x.key.toLowerCase() === "v" && e.clipboard && a) {
          x.preventDefault();
          const w = e.pasteNodes();
          w && a(w);
          return;
        }
      }
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e, c, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const u = e.getNodesInSelectionBox(c, e.selectionBox);
      u.length > 0 && e.setSelectedNodes(new Set(u));
    }
  }, [e.isSelecting, e.selectionBox, c, e]);
  const s = H((u) => {
    (u.target === e.canvasRef.current || u.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: s, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ l("marker", { id: "arch-arr", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "arch-arr-thick", markerWidth: "12", markerHeight: "10", refX: "11", refY: "5", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 12 5, 0 10", fill: v.purple }) })
        ] }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          d.map((u) => /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l(
              "rect",
              {
                x: u.x,
                y: u.y,
                width: u.width,
                height: u.height,
                fill: `${u.color}08`,
                stroke: u.color,
                strokeWidth: 2,
                strokeDasharray: "8,4",
                rx: 12,
                opacity: 0.8
              }
            ),
            /* @__PURE__ */ l(
              "text",
              {
                x: u.x + 16,
                y: u.y + 24,
                fill: u.color,
                fontSize: "14",
                fontWeight: "600",
                fontFamily: "system-ui",
                children: u.name
              }
            )
          ] }, u.id)),
          h.map((u) => {
            const x = c.find((X) => X.id === u.source), b = c.find((X) => X.id === u.target);
            if (!x || !b) return null;
            const k = p(x), w = p(b), C = w.x - k.x, $ = w.y - k.y, E = Math.sqrt(C * C + $ * $) || 1, M = k.x + C / E * 55, _ = k.y + $ / E * 45, P = w.x - C / E * 55, A = w.y - $ / E * 45, W = (M + P) / 2, B = (_ + A) / 2, L = r ? $g(M, _, P, A, !0) : sr(M, _, P, A), j = r ? ye.stroke : v.purple, q = g(u);
            return /* @__PURE__ */ S("g", { children: [
              !r && /* @__PURE__ */ l("path", { d: L, fill: "none", stroke: j, strokeWidth: q.strokeWidth * 4, strokeOpacity: 0.08, strokeLinecap: "round" }),
              !r && /* @__PURE__ */ l("path", { d: L, fill: "none", stroke: j, strokeWidth: q.strokeWidth * 2, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: L, fill: "none", stroke: j, strokeWidth: r ? 2.5 : q.strokeWidth, strokeDasharray: q.strokeDasharray, markerEnd: r ? "" : u.style === "thick" ? "url(#arch-arr-thick)" : "url(#arch-arr)", opacity: r ? 1 : 0.8, strokeLinecap: "round" }),
              u.label && /* @__PURE__ */ S(ut, { children: [
                /* @__PURE__ */ l("rect", { x: W - Math.max(u.label.length * 4, 40), y: B - 10, width: Math.max(u.label.length * 8, 80), height: 20, rx: 4, fill: "rgba(15,23,42,0.9)", stroke: v.purple, strokeWidth: 1, opacity: 0.9 }),
                /* @__PURE__ */ l("text", { x: W, y: B + 4, textAnchor: "middle", fill: t.textPrimary, fontSize: "10", fontFamily: "system-ui", fontWeight: "500", children: u.label })
              ] })
            ] }, u.id);
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: c.map((u) => {
        const x = p(u), b = f(u), k = e.nodeColors[u.id] || u.color, w = e.dragging === u.id, C = e.selectedNodes.has(u.id), $ = e.editingNode === u.id, E = u.description && u.description.length > 0;
        let M = { position: "absolute", left: x.x - 65, top: x.y - 37, width: 130, height: E ? 90 : 75, background: At(k, r), border: r ? `2px solid ${ye.stroke}` : `2px solid ${k}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: w ? "grabbing" : "grab", boxShadow: Ze(k, w, C, r), transition: w ? "none" : "box-shadow 0.2s", fontFamily: rn(r) };
        return b === "cylinder" && (M.borderRadius = "50% / 15%", M.height = E ? 100 : 85), b === "hexagon" && (M.clipPath = "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)", M.width = 145), /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (_) => e.handleNodeMouseDown(_, u.id, x.x, x.y),
            onDoubleClick: (_) => e.handleNodeDoubleClick(_, u.id, u.label),
            onContextMenu: (_) => e.handleNodeContextMenu(_, u.id),
            style: M,
            title: u.description || "",
            children: [
              /* @__PURE__ */ l("div", { style: { fontSize: "1.5rem", marginBottom: 2 }, children: e.nodeIcons[u.id] || u.icon }),
              /* @__PURE__ */ l(
                Xe,
                {
                  isEditing: $,
                  value: $ ? e.editValue : u.label,
                  onChange: e.setEditValue,
                  onFinish: y,
                  onCancel: e.cancelEditing,
                  style: { fontSize: r ? "1rem" : "0.8rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" }
                }
              ),
              E && /* @__PURE__ */ l("div", { style: { fontSize: "0.65rem", color: t.textSecondary, textAlign: "center", padding: "0 8px", marginTop: 2, maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: u.description })
            ]
          },
          u.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((u) => Math.min(u * 1.2, 2.5)), onZoomOut: () => e.setZoom((u) => Math.max(u * 0.8, 0.3)), onFit: () => e.fitToView(m), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((u) => !u) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      tt,
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
function j2({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a, onLinkedTemplateClick: e }) {
  if ((i == null ? void 0 : i.format) === "sections")
    return /* @__PURE__ */ l(G2, { data: i, theme: t });
  const c = Pe({ x: 50, y: 50 }), { nodes: h, edges: d } = i, p = (y) => c.getNodePosition(y.id, y.x, y.y), f = ge(() => {
    if (!h || h.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const y = h.map((w) => w.x), s = h.map((w) => w.y), u = Math.min(...y) - 100, x = Math.max(...y) + 100, b = Math.min(...s) - 80, k = Math.max(...s) + 80;
    return { x: u, y: b, width: x - u, height: k - b };
  }, [h]), m = H(() => {
    const y = c.finishEditing();
    if (y.nodeId && y.newValue !== void 0 && n) {
      const s = h.find((u) => u.id === y.nodeId);
      s && s.label !== y.newValue && n(y.nodeId, s.label, y.newValue);
    }
  }, [c, h, n]);
  se(() => {
    const y = (s) => {
      const x = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? s.metaKey : s.ctrlKey;
      if (!c.editingNode) {
        if ((s.key === "Delete" || s.key === "Backspace") && c.selectedNodes.size > 0 && o) {
          s.preventDefault(), o(Array.from(c.selectedNodes)), c.clearSelection();
          return;
        }
        if (x && s.key.toLowerCase() === "c" && c.selectedNodes.size > 0) {
          s.preventDefault(), c.copySelectedNodes(h);
          return;
        }
        if (x && s.key.toLowerCase() === "v" && c.clipboard && a) {
          s.preventDefault();
          const b = c.pasteNodes();
          b && a(b);
          return;
        }
      }
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [c, h, o, a]), se(() => {
    if (!c.isSelecting && c.selectionBox) {
      const y = c.getNodesInSelectionBox(h, c.selectionBox);
      y.length > 0 && c.setSelectedNodes(new Set(y));
    }
  }, [c.isSelecting, c.selectionBox, h, c]);
  const g = H((y) => {
    (y.target === c.canvasRef.current || y.target.classList.contains("canvas-bg")) && (c.clearSelection(), c.closeContextMenu());
  }, [c]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: c.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: c.handleCanvasMouseDown, onMouseMove: c.handleMouseMove, onMouseUp: c.handleMouseUp, onMouseLeave: c.handleMouseUp, onTouchStart: c.handleTouchStart, onTouchMove: c.handleTouchMove, onTouchEnd: c.handleTouchEnd, onWheel: c.handleWheel, style: { width: "100%", height: "100%", cursor: c.isPanning || c.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * c.zoom}px ${25 * c.zoom}px`, backgroundPosition: `${c.pan.x}px ${c.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "journey-arrow", markerWidth: "6", markerHeight: "6", refX: "5", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 6 3 L 0 6 Z", fill: v.purple, opacity: "0.9" }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${c.pan.x}, ${c.pan.y}) scale(${c.zoom})`, children: [
          d.map((y) => {
            const s = h.find((ae) => ae.id === y.source), u = h.find((ae) => ae.id === y.target);
            if (!s || !u) return null;
            const x = p(s), b = p(u), k = b.x - x.x, w = b.y - x.y, C = s.shape === "circle" ? 50 : 70, $ = s.shape === "circle" ? 50 : 45, E = u.shape === "circle" ? 50 : 70, M = u.shape === "circle" ? 50 : 45, _ = Math.atan2(w, k), P = x.x + Math.cos(_) * C, A = x.y + Math.sin(_) * $, W = b.x - Math.cos(_) * E, B = b.y - Math.sin(_) * M, L = (P + W) / 2, j = (A + B) / 2, q = Math.min(Math.abs(w) * 0.3, 30), X = L, re = j - q, oe = `M ${P} ${A} Q ${X} ${re} ${W} ${B}`, te = y.label ? Math.max(y.label.length * 7 + 16, 50) : 0;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: oe, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: oe, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: oe, fill: "none", stroke: v.purple, strokeWidth: 2, markerEnd: "url(#journey-arrow)", strokeLinecap: "round", opacity: "0.8" }),
              /* @__PURE__ */ l("path", { d: oe, fill: "none", stroke: "rgba(255,255,255,0.6)", strokeWidth: 2, strokeLinecap: "round", strokeDasharray: "4,12", children: /* @__PURE__ */ l("animate", { attributeName: "stroke-dashoffset", from: "16", to: "0", dur: "0.8s", repeatCount: "indefinite" }) }),
              y.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: L - te / 2, y: re - 10, width: te, height: 20, rx: 10, fill: "rgba(15, 23, 42, 0.9)", stroke: "rgba(124,58,237,0.5)", strokeWidth: 1 }),
                /* @__PURE__ */ l("text", { x: L, y: re + 4, textAnchor: "middle", fill: "#e0e0e0", fontSize: 10, fontWeight: "500", fontFamily: "system-ui, sans-serif", children: y.label })
              ] })
            ] }, y.id);
          }),
          c.isSelecting && c.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(c.selectionBox.startX, c.selectionBox.endX), y: Math.min(c.selectionBox.startY, c.selectionBox.endY), width: Math.abs(c.selectionBox.endX - c.selectionBox.startX), height: Math.abs(c.selectionBox.endY - c.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${c.pan.x}px, ${c.pan.y}px) scale(${c.zoom})`, transformOrigin: "0 0" }, children: h.map((y) => {
        const s = p(y), u = c.dragging === y.id, x = c.selectedNodes.has(y.id);
        return y.shape === "circle" ? /* @__PURE__ */ S("div", { onClick: (k) => c.handleNodeClick(k, y.id), onDoubleClick: (k) => c.handleNodeDoubleClick(k, y.id, y.label), onContextMenu: (k) => c.handleNodeContextMenu(k, y.id), onMouseDown: (k) => c.handleNodeMouseDown(k, y.id, s.x, s.y), onTouchStart: (k) => c.handleNodeTouchStart(k, y.id, s.x, s.y), style: { position: "absolute", left: s.x - 50, top: s.y - 50, width: 100, height: 100, borderRadius: "50%", background: At(y.color), border: `2px solid ${x ? v.blue : y.color}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: u ? "grabbing" : "grab", boxShadow: Ze(y.color, u, x), transition: u ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: 24 }, children: y.icon }),
          c.editingNode === y.id ? /* @__PURE__ */ l(Xe, { value: c.editingValue, onChange: (k) => c.setEditingValue(k), onFinish: m, style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 }, children: y.label })
        ] }, y.id) : /* @__PURE__ */ S("div", { onClick: (k) => {
          y.linkedTemplate && e ? (k.stopPropagation(), e(y.linkedTemplate, y.label)) : c.handleNodeClick(k, y.id);
        }, onDoubleClick: (k) => y.linkedTemplate && e ? e(y.linkedTemplate, y.label) : c.handleNodeDoubleClick(k, y.id, y.label), onContextMenu: (k) => c.handleNodeContextMenu(k, y.id), onMouseDown: (k) => c.handleNodeMouseDown(k, y.id, s.x, s.y), onTouchStart: (k) => c.handleNodeTouchStart(k, y.id, s.x, s.y), style: { position: "absolute", left: s.x - 70, top: s.y - 45, width: 140, height: 90, background: At(y.color), border: `2px solid ${x ? v.blue : y.linkedTemplate ? v.cyan : y.color}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: y.linkedTemplate ? "pointer" : u ? "grabbing" : "grab", boxShadow: y.linkedTemplate ? `${Ze(y.color, u, x)}, 0 0 0 3px ${v.cyan}30` : Ze(y.color, u, x), transition: u ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          y.badge && /* @__PURE__ */ l("div", { style: { position: "absolute", top: -10, right: -10, background: v.red, color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 10 }, children: y.badge }),
          y.linkedTemplate && /* @__PURE__ */ l("div", { style: { position: "absolute", top: -8, left: -8, background: v.cyan, color: "#fff", fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 6, display: "flex", alignItems: "center", gap: 3 }, children: "🔗 Click to open" }),
          /* @__PURE__ */ l("span", { style: { fontSize: 22 }, children: y.icon }),
          c.editingNode === y.id ? /* @__PURE__ */ l(Xe, { value: c.editingValue, onChange: (k) => c.setEditingValue(k), onFinish: m, style: { fontSize: r ? 14 : 11, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 11, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 }, children: y.label })
        ] }, y.id);
      }) })
    ] }),
    c.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.8)", padding: "6px 12px", borderRadius: 6, fontSize: "0.75rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }, children: [
      /* @__PURE__ */ S("span", { children: [
        c.selectedNodes.size,
        " selected"
      ] }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.6 }, children: "|" }),
      /* @__PURE__ */ l("span", { style: { opacity: 0.7 }, children: "Del to delete • ⌘C copy • ⌘V paste" })
    ] }),
    c.clipboard && /* @__PURE__ */ S("div", { style: { position: "absolute", top: c.selectedNodes.size > 0 ? 48 : 12, left: 12, background: `${v.green}20`, padding: "4px 10px", borderRadius: 4, fontSize: "0.7rem", color: v.green, border: `1px solid ${v.green}40` }, children: [
      c.clipboard.length,
      " node",
      c.clipboard.length > 1 ? "s" : "",
      " copied"
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => c.setZoom((y) => Math.min(y * 1.2, 3)), onZoomOut: () => c.setZoom((y) => Math.max(y * 0.8, 0.2)), onFit: () => c.fitToView(f), onReset: c.resetView, zoom: c.zoom }),
    c.contextMenu && /* @__PURE__ */ l(tt, { position: c.contextMenu, onClose: () => c.closeContextMenu(), nodeId: c.contextMenu.nodeId })
  ] });
}
function G2({ data: i, theme: t = we.dark }) {
  var y, s;
  const { title: r, actors: n, sections: o } = i, a = _e(null), [e, c] = Y({ width: 1200, height: 600 }), h = ge(() => {
    const u = [];
    return o.forEach((x, b) => {
      x.tasks.forEach((k, w) => {
        u.push({ ...k, section: x.name, sectionIndex: b, sectionColor: x.color });
      });
    }), u;
  }, [o]);
  se(() => {
    if (a.current) {
      const u = a.current.getBoundingClientRect();
      c({ width: Math.max(u.width, 800), height: Math.max(u.height - 80, 400) });
    }
  }, []);
  const d = ge(() => {
    const u = { top: 120, bottom: 100, left: 80, right: 80 }, x = Math.max(e.width - u.left - u.right, h.length * 150), b = e.height - u.top - u.bottom, k = x / Math.max(h.length - 1, 1), w = h.map((A, W) => {
      const B = u.left + W * k, L = b * 0.2, j = Math.sin(W * 0.8) * L, X = u.top + b / 2 + j;
      return { ...A, x: B, y: X, index: W };
    });
    let C = "";
    if (w.length > 0) {
      C = `M ${w[0].x} ${w[0].y}`;
      for (let A = 1; A < w.length; A++) {
        const W = w[A - 1], B = w[A], L = W.x + (B.x - W.x) * 0.5, j = W.x + (B.x - W.x) * 0.5;
        C += ` C ${L} ${W.y}, ${j} ${B.y}, ${B.x} ${B.y}`;
      }
    }
    const $ = w.map((A, W) => {
      const B = u.top + 50 - (A.score - 1) * 12;
      return { x: A.x, y: B, score: A.score };
    });
    let E = "";
    if ($.length > 0) {
      E = `M ${$[0].x} ${$[0].y}`;
      for (let A = 1; A < $.length; A++) {
        const W = $[A - 1], B = $[A], L = W.x + (B.x - W.x) * 0.5;
        E += ` C ${L} ${W.y}, ${L} ${B.y}, ${B.x} ${B.y}`;
      }
    }
    const M = [];
    let _ = -1, P = 0;
    return w.forEach((A, W) => {
      A.sectionIndex !== _ && (_ >= 0 && M.push({
        index: _,
        start: P,
        end: A.x - k / 2,
        color: o[_].color,
        name: o[_].name
      }), _ = A.sectionIndex, P = W === 0 ? u.left - 40 : A.x - k / 2);
    }), _ >= 0 && M.push({
      index: _,
      start: P,
      end: u.left + x + 40,
      color: o[_].color,
      name: o[_].name
    }), { nodes: w, pathString: C, emotionPathString: E, emotionPath: $, sectionBounds: M, padding: u, availableWidth: x };
  }, [h, e, o]), p = (u) => ({ 1: "#ef4444", 2: "#f97316", 3: "#eab308", 4: "#22c55e", 5: "#10b981" })[u] || "#64748b", f = (u) => {
    const x = u.toLowerCase();
    return x.includes("user") ? v.pink : x.includes("system") ? v.blue : x.includes("admin") ? v.purple : v.cyan;
  }, m = (u) => {
    const x = u.toLowerCase();
    return x.includes("user") ? "👤" : x.includes("system") ? "⚙️" : x.includes("admin") ? "👨‍💼" : "🧑";
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
              o.length,
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
        }, children: n.map((u, x) => /* @__PURE__ */ S("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 14px",
          borderRadius: 20,
          background: `${f(u.name)}15`,
          border: `1px solid ${f(u.name)}40`,
          backdropFilter: "blur(8px)"
        }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem" }, children: m(u.name) }),
          /* @__PURE__ */ l("span", { style: { fontSize: "0.75rem", fontWeight: 600, color: f(u.name) }, children: u.name })
        ] }, x)) }),
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
                d.sectionBounds.map((u, x) => /* @__PURE__ */ S("linearGradient", { id: `sectionGrad${x}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                  /* @__PURE__ */ l("stop", { offset: "0%", stopColor: u.color, stopOpacity: "0.08" }),
                  /* @__PURE__ */ l("stop", { offset: "100%", stopColor: u.color, stopOpacity: "0.02" })
                ] }, x)),
                /* @__PURE__ */ S("linearGradient", { id: "emotionGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                  /* @__PURE__ */ l("stop", { offset: "0%", stopColor: "#10b981" }),
                  /* @__PURE__ */ l("stop", { offset: "50%", stopColor: "#eab308" }),
                  /* @__PURE__ */ l("stop", { offset: "100%", stopColor: "#10b981" })
                ] })
              ] }),
              d.sectionBounds.map((u, x) => /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l(
                  "rect",
                  {
                    x: u.start,
                    y: 60,
                    width: u.end - u.start,
                    height: e.height - 120,
                    rx: 16,
                    fill: `url(#sectionGrad${x})`
                  }
                ),
                /* @__PURE__ */ l(
                  "text",
                  {
                    x: u.start + (u.end - u.start) / 2,
                    y: 85,
                    textAnchor: "middle",
                    fill: u.color,
                    fontSize: "11",
                    fontWeight: "600",
                    fontFamily: "system-ui",
                    opacity: "0.8",
                    children: u.name.toUpperCase()
                  }
                ),
                /* @__PURE__ */ l(
                  "circle",
                  {
                    cx: u.start + 30,
                    cy: 85,
                    r: 12,
                    fill: u.color,
                    opacity: "0.9"
                  }
                ),
                /* @__PURE__ */ l(
                  "text",
                  {
                    x: u.start + 30,
                    y: 89,
                    textAnchor: "middle",
                    fill: "#fff",
                    fontSize: "10",
                    fontWeight: "700",
                    fontFamily: "system-ui",
                    children: x + 1
                  }
                )
              ] }, `section-${x}`)),
              /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l(
                  "path",
                  {
                    d: d.emotionPathString + ` L ${((y = d.emotionPath[d.emotionPath.length - 1]) == null ? void 0 : y.x) || 0} ${d.padding.top + 60} L ${((s = d.emotionPath[0]) == null ? void 0 : s.x) || 0} ${d.padding.top + 60} Z`,
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
                d.emotionPath.map((u, x) => /* @__PURE__ */ l(
                  "circle",
                  {
                    cx: u.x,
                    cy: u.y,
                    r: 4,
                    fill: p(u.score),
                    opacity: "0.8"
                  },
                  `emotion-${x}`
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
              d.nodes.map((u, x) => {
                const k = u.actors.length > 0 ? f(u.actors[0]) : u.sectionColor;
                return /* @__PURE__ */ S("g", { style: { cursor: "pointer" }, children: [
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: u.x,
                      cy: u.y,
                      r: 48 / 2 + 8,
                      fill: k,
                      opacity: "0.15",
                      filter: "url(#glow)"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: u.x,
                      cy: u.y,
                      r: 48 / 2 + 3,
                      fill: "none",
                      stroke: k,
                      strokeWidth: "2",
                      opacity: "0.5"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: u.x,
                      cy: u.y,
                      r: 48 / 2,
                      fill: `${t.canvasBg}`,
                      stroke: k,
                      strokeWidth: "2"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "circle",
                    {
                      cx: u.x,
                      cy: u.y,
                      r: 48 / 2 - 4,
                      fill: "none",
                      stroke: p(u.score),
                      strokeWidth: "3",
                      strokeDasharray: `${u.score / 5 * 100} 100`,
                      transform: `rotate(-90 ${u.x} ${u.y})`,
                      opacity: "0.8"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "text",
                    {
                      x: u.x,
                      y: u.y + 4,
                      textAnchor: "middle",
                      fill: t.textPrimary,
                      fontSize: "14",
                      fontWeight: "700",
                      fontFamily: "system-ui",
                      children: x + 1
                    }
                  ),
                  u.actors.length > 0 && /* @__PURE__ */ S("g", { children: [
                    /* @__PURE__ */ l(
                      "circle",
                      {
                        cx: u.x + 48 / 2 - 4,
                        cy: u.y - 48 / 2 + 4,
                        r: 10,
                        fill: k
                      }
                    ),
                    /* @__PURE__ */ l(
                      "text",
                      {
                        x: u.x + 48 / 2 - 4,
                        y: u.y - 48 / 2 + 8,
                        textAnchor: "middle",
                        fontSize: "10",
                        children: m(u.actors[0])
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(
                    "foreignObject",
                    {
                      x: u.x - 70,
                      y: u.y + 48 / 2 + 8,
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
                      }, children: u.name })
                    }
                  )
                ] }, u.id);
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
            [5, 4, 3, 2, 1].map((u) => /* @__PURE__ */ l("div", { style: { width: 8, height: 8, borderRadius: "50%", background: p(u) } }, u)),
            /* @__PURE__ */ l("span", { style: { fontSize: "0.7rem", color: t.textSecondary, marginLeft: 4 }, children: "Score" })
          ] })
        ] })
      ]
    }
  );
}
function pc({ nodes: i, edges: t, theme: r = we.dark, sketchMode: n = !1, onLabelChange: o, onDeleteNodes: a, onPasteNodes: e, onEdgeLabelChange: c, onCreateConnection: h }) {
  const d = Pe({ x: 50, y: 50 }), p = { start: { color: v.green, icon: "▶" }, end: { color: v.red, icon: "■" }, process: { color: v.blue, icon: "⚙️" }, decision: { color: v.orange, icon: "◇" }, action: { color: v.blue, icon: "▹" }, io: { color: v.purple, icon: "📦" }, default: { color: v.purple, icon: "📦" } }, f = (C) => d.getNodePosition(C.id, C.x, C.y), m = ge(() => {
    if (!i || i.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const C = i.map((E) => E.x), $ = i.map((E) => E.y);
    return { x: Math.min(...C) - 100, y: Math.min(...$) - 80, width: Math.max(...C) - Math.min(...C) + 300, height: Math.max(...$) - Math.min(...$) + 200 };
  }, [i]), g = H(() => {
    const C = d.finishEditing();
    if (C.nodeId && C.newValue && o) {
      const $ = i.find((E) => E.id === C.nodeId);
      $ && $.label !== C.newValue && o(C.nodeId, $.label, C.newValue);
    }
  }, [d, i, o]), y = H(() => {
    const C = d.finishEdgeEditing();
    if (C.edgeId && c) {
      const $ = t.find((E) => E.id === C.edgeId);
      c(C.edgeId, ($ == null ? void 0 : $.label) || "", C.newValue);
    }
  }, [d, t, c]), s = H(() => {
    if (!i || i.length === 0) return;
    const C = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
    i.forEach((q) => {
      C.set(q.id, []), $.set(q.id, 0);
    }), t.forEach((q) => {
      C.has(q.source) && C.get(q.source).push(q.target), $.has(q.target) && $.set(q.target, $.get(q.target) + 1);
    });
    const E = i.filter((q) => $.get(q.id) === 0);
    E.length === 0 && E.push(i[0]);
    const M = /* @__PURE__ */ new Map(), _ = E.map((q) => ({ id: q.id, level: 0 })), P = /* @__PURE__ */ new Set();
    for (; _.length > 0; ) {
      const { id: q, level: X } = _.shift();
      if (P.has(q)) continue;
      P.add(q), M.set(q, X), (C.get(q) || []).forEach((oe) => {
        P.has(oe) || _.push({ id: oe, level: X + 1 });
      });
    }
    i.forEach((q) => {
      P.has(q.id) || M.set(q.id, 0);
    });
    const A = /* @__PURE__ */ new Map();
    M.forEach((q, X) => {
      A.has(q) || A.set(q, []), A.get(q).push(X);
    });
    const W = 120, B = 180, L = 100, j = {};
    A.forEach((q, X) => {
      const re = L + X * W, te = 300 - (q.length - 1) * B / 2;
      q.forEach((ae, U) => {
        j[ae] = {
          x: te + U * B,
          y: re
        };
      });
    }), d.setPositions(j), d.fitToView(m);
  }, [i, t, d, m]), u = H(() => {
    const C = Array.from(d.selectedNodes);
    if (C.length < 3) return;
    const $ = C.map((A) => {
      var W, B;
      return {
        id: A,
        x: ((W = d.positions[A]) == null ? void 0 : W.x) ?? ((B = i.find((L) => L.id === A)) == null ? void 0 : B.x) ?? 0
      };
    });
    $.sort((A, W) => A.x - W.x);
    const E = $[0].x, _ = ($[$.length - 1].x - E) / ($.length - 1), P = { ...d.positions };
    $.forEach((A, W) => {
      var L, j;
      const B = ((L = P[A.id]) == null ? void 0 : L.y) ?? ((j = i.find((q) => q.id === A.id)) == null ? void 0 : j.y) ?? 0;
      P[A.id] = { x: E + W * _, y: B };
    }), d.setPositions(P);
  }, [d, i]), x = H(() => {
    const C = Array.from(d.selectedNodes);
    if (C.length < 3) return;
    const $ = C.map((A) => {
      var W, B;
      return {
        id: A,
        y: ((W = d.positions[A]) == null ? void 0 : W.y) ?? ((B = i.find((L) => L.id === A)) == null ? void 0 : B.y) ?? 0
      };
    });
    $.sort((A, W) => A.y - W.y);
    const E = $[0].y, _ = ($[$.length - 1].y - E) / ($.length - 1), P = { ...d.positions };
    $.forEach((A, W) => {
      var L, j;
      const B = ((L = P[A.id]) == null ? void 0 : L.x) ?? ((j = i.find((q) => q.id === A.id)) == null ? void 0 : j.x) ?? 0;
      P[A.id] = { x: B, y: E + W * _ };
    }), d.setPositions(P);
  }, [d, i]);
  se(() => {
    if (d.dragging) {
      const C = f({ id: d.dragging });
      d.updateAlignmentGuides(d.dragging, C, i, f);
    }
  }, [d.dragging, d.positions, i, f, d.updateAlignmentGuides]), se(() => {
    const C = ($) => {
      const M = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? $.metaKey : $.ctrlKey;
      if (!(d.editingNode || d.editingEdge)) {
        if (($.key === "Delete" || $.key === "Backspace") && d.selectedNodes.size > 0 && a) {
          $.preventDefault(), a(Array.from(d.selectedNodes)), d.clearSelection();
          return;
        }
        if (M && $.key.toLowerCase() === "c" && d.selectedNodes.size > 0) {
          $.preventDefault(), d.copySelectedNodes(i);
          return;
        }
        if (M && $.key.toLowerCase() === "v" && d.clipboard && e) {
          $.preventDefault();
          const _ = d.pasteNodes();
          _ && e(_);
          return;
        }
      }
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C);
  }, [d, i, a, e]), se(() => {
    if (!d.isSelecting && d.selectionBox) {
      const C = d.getNodesInSelectionBox(i, d.selectionBox);
      C.length > 0 && d.setSelectedNodes(new Set(C));
    }
  }, [d.isSelecting, d.selectionBox, i, d]);
  const b = H((C) => {
    (C.target === d.canvasRef.current || C.target.classList.contains("canvas-bg")) && (d.clearSelection(), d.closeContextMenu(), d.closeEdgeContextMenu(), d.cancelEdgeEditing());
  }, [d]), k = H((C) => {
    const $ = d.edgeStyles[C] || "animated", E = d.edgeArrowTypes[C] || "triangle", M = mc.find((P) => P.style === $) || mc[0];
    let _ = "url(#flow-arr-triangle)";
    return E === "none" ? _ = "" : E === "open" ? _ = "url(#flow-arr-open)" : E === "diamond" ? _ = "url(#flow-arr-diamond)" : E === "circle" && (_ = "url(#flow-arr-circle)"), {
      strokeDasharray: M.dasharray,
      animation: M.animated ? "flowDash 1s linear infinite" : "none",
      markerEnd: _
    };
  }, [d.edgeStyles, d.edgeArrowTypes]), w = H((C) => {
    const $ = d.handleMouseUp();
    $ && h && h($.source, $.target);
  }, [d, h]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: r.canvasBg, borderRadius: 12, border: `1px solid ${r.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: `
        @keyframes flowDash { to { stroke-dashoffset: -20; } }
        .flow-node:hover .connection-port-right { opacity: 1 !important; transform: translateY(-50%) scale(1.1) !important; }
        .flow-node:hover .connection-port-left { opacity: 0.3 !important; }
        .edge-add-label:hover { opacity: 1 !important; }
      ` }),
    /* @__PURE__ */ S("div", { ref: d.canvasRef, className: "canvas-bg", onClick: b, onMouseDown: d.handleCanvasMouseDown, onMouseMove: d.handleMouseMove, onMouseUp: w, onMouseLeave: w, onTouchStart: d.handleTouchStart, onTouchMove: d.handleTouchMove, onTouchEnd: d.handleTouchEnd, onWheel: d.handleWheel, style: { width: "100%", height: "100%", cursor: d.isPanning || d.dragging ? "grabbing" : d.isConnecting ? "crosshair" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${r.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${r.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * d.zoom}px ${25 * d.zoom}px`, backgroundPosition: `${d.pan.x}px ${d.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible" }, children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ l("marker", { id: "flow-arr-triangle", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr-open", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polyline", { points: "0 0, 10 4, 0 8", fill: "none", stroke: v.purple, strokeWidth: "2" }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr-diamond", markerWidth: "12", markerHeight: "8", refX: "11", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 4, 6 0, 12 4, 6 8", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr-circle", markerWidth: "10", markerHeight: "10", refX: "9", refY: "5", orient: "auto", children: /* @__PURE__ */ l("circle", { cx: "5", cy: "5", r: "4", fill: v.purple }) }),
          /* @__PURE__ */ l("marker", { id: "flow-arr", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: v.purple }) })
        ] }),
        /* @__PURE__ */ S("g", { transform: `translate(${d.pan.x}, ${d.pan.y}) scale(${d.zoom})`, children: [
          t.map((C) => {
            const $ = i.find((z) => z.id === C.source), E = i.find((z) => z.id === C.target);
            if (!$ || !E) return null;
            const M = f($), _ = f(E), P = _.x - M.x, A = _.y - M.y, W = Math.sqrt(P * P + A * A) || 1, B = $.type === "decision" ? 45 : 40, L = E.type === "decision" ? 45 : 40, j = M.x + P / W * B, q = M.y + A / W * 35, X = _.x - P / W * L, re = _.y - A / W * 35, oe = d.edgePathTypes[C.id] || "curved", te = (j + X) / 2, ae = (q + re) / 2, U = oe === "straight" ? 0 : Math.abs(P) > 50 ? Math.sign(A || 1) * 20 : 0;
            let I;
            if (oe === "straight")
              I = `M ${j} ${q} L ${X} ${re}`;
            else if (oe === "step")
              Math.abs(P) > Math.abs(A) ? I = `M ${j} ${q} L ${te} ${q} L ${te} ${re} L ${X} ${re}` : I = `M ${j} ${q} L ${j} ${ae} L ${X} ${ae} L ${X} ${re}`;
            else if (oe === "rounded")
              if (Math.abs(P) > Math.abs(A)) {
                const V = re > q ? 1 : -1;
                I = `M ${j} ${q} L ${te - 12} ${q} Q ${te} ${q} ${te} ${q + V * 12} L ${te} ${re - V * 12} Q ${te} ${re} ${te + 12 * Math.sign(P)} ${re} L ${X} ${re}`;
              } else {
                const V = X > j ? 1 : -1;
                I = `M ${j} ${q} L ${j} ${ae - Math.sign(A) * 12} Q ${j} ${ae} ${j + V * 12} ${ae} L ${X - V * 12} ${ae} Q ${X} ${ae} ${X} ${ae + Math.sign(A) * 12} L ${X} ${re}`;
              }
            else
              I = n ? $g(j, q, X, re, !0) : sr(j, q, X, re);
            const O = d.editingEdge === C.id, R = O ? d.edgeEditValue : C.label || "", D = k(C.id);
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: I, fill: "none", stroke: "transparent", strokeWidth: 20, style: { cursor: "pointer", pointerEvents: "stroke" }, onDoubleClick: (z) => {
                z.stopPropagation(), d.handleEdgeDoubleClick(z, C.id, C.label || "");
              }, onContextMenu: (z) => {
                z.preventDefault(), z.stopPropagation(), d.handleEdgeContextMenu(z, C.id);
              } }),
              !n && /* @__PURE__ */ l("path", { d: I, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round", style: { pointerEvents: "none" } }),
              !n && /* @__PURE__ */ l("path", { d: I, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round", style: { pointerEvents: "none" } }),
              /* @__PURE__ */ l("path", { d: I, fill: "none", stroke: n ? ye.stroke : v.purple, strokeWidth: n ? 2.5 : 2, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: D.strokeDasharray, markerEnd: n ? "" : D.markerEnd, opacity: 0.9, style: { animation: n ? "none" : D.animation, pointerEvents: "none" } }),
              (R || O) && /* @__PURE__ */ S("g", { style: { cursor: "pointer" }, onDoubleClick: (z) => {
                z.stopPropagation(), d.handleEdgeDoubleClick(z, C.id, C.label || "");
              }, children: [
                /* @__PURE__ */ l("rect", { x: te - Math.max(R.length, 3) * 3.5 - 8, y: ae + U - 12, width: Math.max(R.length, 3) * 7 + 16, height: 22, rx: 11, fill: O ? "rgba(124,58,237,0.3)" : "rgba(15,23,42,0.9)", stroke: O ? v.purple : "rgba(124,58,237,0.4)", strokeWidth: O ? 2 : 1 }),
                !O && /* @__PURE__ */ l("text", { x: te, y: ae + U + 4, textAnchor: "middle", fill: "#e0e0e0", fontSize: 10, fontWeight: 500, children: R })
              ] }),
              !R && !O && /* @__PURE__ */ S("g", { style: { cursor: "pointer", opacity: 0 }, className: "edge-add-label", onDoubleClick: (z) => {
                z.stopPropagation(), d.handleEdgeDoubleClick(z, C.id, "");
              }, children: [
                /* @__PURE__ */ l("rect", { x: te - 20, y: ae + U - 10, width: 40, height: 20, rx: 10, fill: "rgba(124,58,237,0.2)" }),
                /* @__PURE__ */ l("text", { x: te, y: ae + U + 4, textAnchor: "middle", fill: "#888", fontSize: 9, children: "+ label" })
              ] })
            ] }, C.id);
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
          d.alignmentGuides.horizontal.map((C, $) => /* @__PURE__ */ l(
            "line",
            {
              x1: C.fromX,
              y1: C.y,
              x2: C.toX,
              y2: C.y,
              stroke: v.cyan,
              strokeWidth: 1,
              strokeDasharray: "4,4",
              opacity: 0.8,
              style: { pointerEvents: "none" }
            },
            `h-${$}`
          )),
          d.alignmentGuides.vertical.map((C, $) => /* @__PURE__ */ l(
            "line",
            {
              x1: C.x,
              y1: C.fromY,
              x2: C.x,
              y2: C.toY,
              stroke: v.cyan,
              strokeWidth: 1,
              strokeDasharray: "4,4",
              opacity: 0.8,
              style: { pointerEvents: "none" }
            },
            `v-${$}`
          ))
        ] })
      ] }),
      d.editingEdge && (() => {
        const C = t.find((L) => L.id === d.editingEdge);
        if (!C) return null;
        const $ = i.find((L) => L.id === C.source), E = i.find((L) => L.id === C.target);
        if (!$ || !E) return null;
        const M = f($), _ = f(E), P = (M.x + _.x) / 2, A = (M.y + _.y) / 2, W = P * d.zoom + d.pan.x, B = A * d.zoom + d.pan.y;
        return /* @__PURE__ */ l("div", { style: { position: "absolute", left: W - 50, top: B - 12, zIndex: 200 }, children: /* @__PURE__ */ l(
          "input",
          {
            autoFocus: !0,
            type: "text",
            value: d.edgeEditValue,
            onChange: (L) => d.setEdgeEditValue(L.target.value),
            onKeyDown: (L) => {
              L.key === "Enter" ? (L.preventDefault(), y()) : L.key === "Escape" && (L.preventDefault(), d.cancelEdgeEditing());
            },
            onBlur: y,
            placeholder: "Label",
            style: { width: 100, padding: "4px 8px", background: "rgba(15,23,42,0.95)", border: `2px solid ${v.purple}`, borderRadius: 8, color: "#fff", fontSize: "0.75rem", textAlign: "center", outline: "none" },
            onClick: (L) => L.stopPropagation(),
            onMouseDown: (L) => L.stopPropagation()
          }
        ) });
      })(),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${d.pan.x}px, ${d.pan.y}px) scale(${d.zoom})`, transformOrigin: "0 0" }, children: i.map((C) => {
        var V, Q;
        const $ = f(C), E = p[C.type] || p.default, M = d.nodeColors[C.id] || C.color || E.color, _ = d.dragging === C.id, P = d.selectedNodes.has(C.id), A = d.editingNode === C.id, W = ((V = d.resizing) == null ? void 0 : V.nodeId) === C.id, L = d.nodeShapes[C.id] || (C.type === "decision" ? "diamond" : ["start", "end"].includes(C.type) ? "pill" : "rounded"), j = L === "diamond", q = d.getNodeSize(C.id), X = d.nodeSizes[C.id] ? q : {
          width: C.width || q.width,
          height: C.height || q.height
        }, re = L === "circle", oe = Math.max(X.width, X.height), te = j ? 70 : re ? oe : X.width, ae = j ? 70 : re ? oe : X.height;
        let U = 12, I;
        L === "rectangle" ? U = 0 : L === "rounded" ? U = 12 : L === "circle" ? U = "50%" : L === "pill" ? U = ae / 2 : L === "hexagon" && (I = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)");
        let O = {
          position: "absolute",
          left: $.x - te / 2,
          top: $.y - ae / 2,
          width: te,
          height: ae,
          background: At(M, n),
          border: n ? `2px solid ${ye.stroke}` : `2px solid ${M}`,
          borderRadius: U,
          clipPath: I,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: _ ? "grabbing" : W ? "nwse-resize" : "grab",
          boxShadow: Ze(M, _, P, n),
          transition: _ || W ? "none" : "box-shadow 0.2s, background 0.2s",
          touchAction: "none",
          fontFamily: rn(n)
        };
        j && (O.left = $.x - 35, O.top = $.y - 35, O.transform = "rotate(45deg)", O.borderRadius = 8, O.clipPath = void 0);
        const R = d.isConnecting && d.connectionTarget === C.id, D = d.isConnecting && ((Q = d.connectionStart) == null ? void 0 : Q.nodeId) !== C.id, z = j ? 35 : te / 2;
        return /* @__PURE__ */ S(
          "div",
          {
            className: "flow-node",
            onMouseDown: (Z) => d.handleNodeMouseDown(Z, C.id, $.x, $.y),
            onDoubleClick: (Z) => d.handleNodeDoubleClick(Z, C.id, C.label),
            onContextMenu: (Z) => d.handleNodeContextMenu(Z, C.id),
            onTouchStart: (Z) => d.handleNodeTouchStart(Z, C.id, $.x, $.y),
            onMouseEnter: () => D && d.setConnectionTargetNode(C.id),
            onMouseLeave: () => d.clearConnectionTarget(),
            style: {
              ...O,
              boxShadow: R ? `0 0 0 4px ${v.green}, 0 0 30px ${v.green}50` : O.boxShadow
            },
            children: [
              /* @__PURE__ */ S("div", { style: { transform: j ? "rotate(-45deg)" : "none", textAlign: "center", width: "100%", padding: "0 8px" }, children: [
                (d.nodeIcons[C.id] || E.icon) && /* @__PURE__ */ l("div", { style: { fontSize: "1.2rem" }, children: d.nodeIcons[C.id] || E.icon }),
                /* @__PURE__ */ l(
                  Xe,
                  {
                    isEditing: A,
                    value: A ? d.editValue : C.label,
                    onChange: d.setEditValue,
                    onFinish: g,
                    onCancel: d.cancelEditing,
                    style: { fontSize: n ? "1rem" : "0.8rem", fontWeight: 600, color: n ? ye.stroke : r.textPrimary }
                  }
                )
              ] }),
              /* @__PURE__ */ l(
                "div",
                {
                  className: "connection-port connection-port-right",
                  onMouseDown: (Z) => d.handlePortMouseDown(Z, C.id, $.x + z, $.y),
                  style: {
                    position: "absolute",
                    right: -8,
                    top: "50%",
                    transform: j ? "rotate(-45deg) translateY(-50%)" : "translateY(-50%)",
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
                    transform: j ? "rotate(-45deg) translateY(-50%)" : "translateY(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: D ? v.green : v.blue,
                    border: "3px solid rgba(255,255,255,0.9)",
                    cursor: "pointer",
                    opacity: D ? 1 : 0,
                    transition: "opacity 0.15s, transform 0.15s",
                    zIndex: 10,
                    pointerEvents: D ? "auto" : "none"
                  }
                }
              ),
              P && !j && /* @__PURE__ */ S(ut, { children: [
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "resize-handle resize-handle-se",
                    onMouseDown: (Z) => d.handleResizeStart(Z, C.id, "se"),
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
                    onMouseDown: (Z) => d.handleResizeStart(Z, C.id, "e"),
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
                    onMouseDown: (Z) => d.handleResizeStart(Z, C.id, "s"),
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
          C.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => d.setZoom((C) => Math.min(C * 1.2, 2.5)), onZoomOut: () => d.setZoom((C) => Math.max(C * 0.8, 0.3)), onFit: () => d.fitToView(m), onReset: d.resetView, zoom: d.zoom, snapToGrid: d.snapToGrid, onToggleSnap: () => d.setSnapToGrid((C) => !C), onAutoLayout: s }),
    d.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", gap: 8, zIndex: 100 }, children: [
      /* @__PURE__ */ S("div", { style: { background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem" }, children: [
        d.selectedNodes.size,
        " selected • ⌘C copy • ⌘V paste • Del remove"
      ] }),
      d.selectedNodes.size >= 3 && /* @__PURE__ */ S("div", { style: { display: "flex", gap: 4 }, children: [
        /* @__PURE__ */ S(
          "button",
          {
            onClick: u,
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
            onClick: x,
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
      tt,
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
      N2,
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
function Y2({ tables: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe(), c = ge(() => {
    const m = Math.min(3, Math.ceil(Math.sqrt(i.length)));
    return i.map((g, y) => ({ ...g, id: g.name, label: g.name, defaultX: y % m * 280 + 60, defaultY: Math.floor(y / m) * 250 + 60, width: 230 }));
  }, [i]), h = (m) => e.getNodePosition(m.name, m.defaultX, m.defaultY), d = ge(() => {
    if (!c || c.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const m = c.map((y) => y.defaultX), g = c.map((y) => y.defaultY);
    return { x: Math.min(...m) - 60, y: Math.min(...g) - 60, width: Math.max(...m) - Math.min(...m) + 300, height: Math.max(...g) - Math.min(...g) + 300 };
  }, [c]), p = H(() => {
    const m = e.finishEditing();
    if (m.nodeId && m.newValue && n) {
      const g = c.find((y) => y.name === m.nodeId);
      g && g.name !== m.newValue && n(m.nodeId, g.name, m.newValue);
    }
  }, [e, c, n]);
  se(() => {
    const m = (g) => {
      const s = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? g.metaKey : g.ctrlKey;
      if (!e.editingNode) {
        if ((g.key === "Delete" || g.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          g.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (s && g.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          g.preventDefault(), e.copySelectedNodes(c);
          return;
        }
        if (s && g.key.toLowerCase() === "v" && e.clipboard && a) {
          g.preventDefault();
          const u = e.pasteNodes();
          u && a(u);
          return;
        }
      }
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [e, c, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const m = e.getNodesInSelectionBox(c.map((g) => ({ ...g, x: g.defaultX, y: g.defaultY })), e.selectionBox);
      m.length > 0 && e.setSelectedNodes(new Set(m));
    }
  }, [e.isSelecting, e.selectionBox, c, e]);
  const f = H((m) => {
    (m.target === e.canvasRef.current || m.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: f, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "erd-crow", markerWidth: "16", markerHeight: "12", refX: "14", refY: "6", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 6 L 10 0 M 0 6 L 10 6 M 0 6 L 10 12", stroke: v.blue, strokeWidth: "2", fill: "none" }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          c.flatMap((m) => {
            var g;
            return ((g = m.fields) == null ? void 0 : g.filter((y) => y.fk && y.references).map((y, s) => {
              const u = c.find((M) => M.name === y.references);
              if (!u) return null;
              const x = h(m), b = h(u), k = x.y + 44 + s * 30 + 15, w = x.x + m.width, C = b.x, $ = b.y + 22, E = `M ${w} ${k} C ${(w + C) / 2} ${k}, ${(w + C) / 2} ${$}, ${C} ${$}`;
              return /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("path", { d: E, fill: "none", stroke: v.blue, strokeWidth: 8, strokeOpacity: 0.1, strokeLinecap: "round" }),
                /* @__PURE__ */ l("path", { d: E, fill: "none", stroke: v.blue, strokeWidth: 4, strokeOpacity: 0.25, strokeLinecap: "round" }),
                /* @__PURE__ */ l("path", { d: E, fill: "none", stroke: v.blue, strokeWidth: 2, markerEnd: "url(#erd-crow)", opacity: 0.8, strokeLinecap: "round" })
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: c.map((m) => {
        var b;
        const g = h(m), y = e.dragging === m.name, s = e.selectedNodes.has(m.name), u = e.editingNode === m.name, x = e.nodeColors[m.name] || v.orange;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (k) => e.handleNodeMouseDown(k, m.name, g.x, g.y),
            onDoubleClick: (k) => e.handleNodeDoubleClick(k, m.name, m.name),
            onContextMenu: (k) => e.handleNodeContextMenu(k, m.name),
            onTouchStart: (k) => e.handleNodeTouchStart(k, m.name, g.x, g.y),
            style: { position: "absolute", left: g.x, top: g.y, width: m.width, background: `linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${x}`, borderRadius: 12, overflow: "hidden", cursor: y ? "grabbing" : "grab", boxShadow: Ze(x, y, s), transition: y ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { padding: "12px 16px", background: `linear-gradient(135deg, ${x}, ${x}dd)` }, children: /* @__PURE__ */ S("span", { style: { color: "#fff", fontWeight: 700, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 6 }, children: [
                "📊",
                /* @__PURE__ */ l(
                  Xe,
                  {
                    isEditing: u,
                    value: u ? e.editValue : m.name,
                    onChange: e.setEditValue,
                    onFinish: p,
                    onCancel: e.cancelEditing,
                    style: { color: "#fff", fontWeight: 700, fontSize: r ? "1.1rem" : "0.95rem" }
                  }
                )
              ] }) }),
              /* @__PURE__ */ l("div", { style: { padding: "8px 0" }, children: (b = m.fields) == null ? void 0 : b.map((k, w) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", padding: "7px 16px", borderBottom: w < m.fields.length - 1 ? `1px solid ${t.border}` : "none", gap: 10 }, children: [
                /* @__PURE__ */ l("span", { style: { width: 20, fontSize: "0.8rem" }, children: k.key ? "🔑" : k.fk ? "🔗" : "" }),
                /* @__PURE__ */ l("span", { style: { flex: 1, color: k.key ? x : k.fk ? v.blue : t.textPrimary, fontSize: "0.85rem", fontWeight: k.key ? 600 : 400 }, children: k.name }),
                /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem", fontFamily: "monospace" }, children: k.type })
              ] }, w)) })
            ]
          },
          m.name
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((m) => Math.min(m * 1.2, 2)), onZoomOut: () => e.setZoom((m) => Math.max(m * 0.8, 0.3)), onFit: () => e.fitToView(d), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((m) => !m) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      tt,
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
function H2({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe(), c = { router: "📡", switch: "🔀", firewall: "🛡️", server: "🖥️", computer: "💻", cloud: "☁️", hub: "🔌" }, h = ge(() => {
    const g = Math.ceil(Math.sqrt(i.devices.length));
    return { devices: i.devices.map((y, s) => ({ ...y, defaultX: 100 + s % g * 200, defaultY: 100 + Math.floor(s / g) * 170 })), connections: i.connections };
  }, [i]), d = (g) => e.getNodePosition(g.id, g.defaultX, g.defaultY), p = ge(() => {
    if (!h.devices || h.devices.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const g = h.devices.map((s) => s.defaultX), y = h.devices.map((s) => s.defaultY);
    return { x: Math.min(...g) - 60, y: Math.min(...y) - 60, width: Math.max(...g) - Math.min(...g) + 200, height: Math.max(...y) - Math.min(...y) + 200 };
  }, [h]), f = H(() => {
    const g = e.finishEditing();
    if (g.nodeId && g.newValue && n) {
      const y = h.devices.find((s) => s.id === g.nodeId);
      y && y.label !== g.newValue && n(g.nodeId, y.label, g.newValue);
    }
  }, [e, h.devices, n]);
  se(() => {
    const g = (y) => {
      const u = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? y.metaKey : y.ctrlKey;
      if (!e.editingNode) {
        if ((y.key === "Delete" || y.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          y.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (u && y.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          y.preventDefault(), e.copySelectedNodes(h.devices);
          return;
        }
        if (u && y.key.toLowerCase() === "v" && e.clipboard && a) {
          y.preventDefault();
          const x = e.pasteNodes();
          x && a(x);
          return;
        }
      }
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, h.devices, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const g = e.getNodesInSelectionBox(h.devices.map((y) => ({ ...y, x: y.defaultX, y: y.defaultY })), e.selectionBox);
      g.length > 0 && e.setSelectedNodes(new Set(g));
    }
  }, [e.isSelecting, e.selectionBox, h.devices, e]);
  const m = H((g) => {
    (g.target === e.canvasRef.current || g.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: m, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        h.connections.map((g) => {
          const y = h.devices.find((_) => _.id === g.source), s = h.devices.find((_) => _.id === g.target);
          if (!y || !s) return null;
          const u = d(y), x = d(s), b = u.x + 65, k = u.y + 55, w = x.x + 65, C = x.y + 55, $ = sr(b, k, w, C), E = (b + w) / 2, M = (k + C) / 2;
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("path", { d: $, fill: "none", stroke: v.blue, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: $, fill: "none", stroke: v.blue, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: $, fill: "none", stroke: v.blue, strokeWidth: 2, strokeDasharray: "6,4", opacity: 0.8, strokeLinecap: "round" }),
            g.protocol && /* @__PURE__ */ S(ut, { children: [
              /* @__PURE__ */ l("rect", { x: E - 28, y: M - 10, width: 56, height: 18, rx: 4, fill: "rgba(0,0,0,0.8)" }),
              /* @__PURE__ */ l("text", { x: E, y: M + 3, textAnchor: "middle", fill: v.blue, fontSize: 10, children: g.protocol })
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
        const y = d(g), s = e.dragging === g.id, u = e.selectedNodes.has(g.id), x = e.editingNode === g.id, b = e.nodeColors[g.id] || v.blue;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (k) => e.handleNodeMouseDown(k, g.id, y.x, y.y),
            onDoubleClick: (k) => e.handleNodeDoubleClick(k, g.id, g.label),
            onContextMenu: (k) => e.handleNodeContextMenu(k, g.id),
            onTouchStart: (k) => e.handleNodeTouchStart(k, g.id, y.x, y.y),
            style: { position: "absolute", left: y.x, top: y.y, width: 130, background: At(b), border: `2px solid ${b}`, borderRadius: 12, padding: 12, textAlign: "center", cursor: s ? "grabbing" : "grab", boxShadow: Ze(b, s, u), transition: s ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { fontSize: "2.5rem", marginBottom: 6 }, children: e.nodeIcons[g.id] || c[g.type] || "📦" }),
              /* @__PURE__ */ l(
                Xe,
                {
                  isEditing: x,
                  value: x ? e.editValue : g.label,
                  onChange: e.setEditValue,
                  onFinish: f,
                  onCancel: e.cancelEditing,
                  style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary }
                }
              ),
              g.ip && /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: t.textSecondary, fontFamily: "monospace", marginTop: 4 }, children: g.ip })
            ]
          },
          g.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((g) => Math.min(g * 1.2, 2)), onZoomOut: () => e.setZoom((g) => Math.max(g * 0.8, 0.3)), onFit: () => e.fitToView(p), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((g) => !g) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.clipboard && e.clipboard.length > 0 && e.selectedNodes.size === 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(16,185,129,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.clipboard.length,
      " in clipboard • ⌘V to paste"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      tt,
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
function V2({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe(), { classes: c = [], relationships: h = [] } = i, d = ge(() => {
    const s = Math.min(3, Math.ceil(Math.sqrt(c.length)));
    return c.map((u, x) => ({ ...u, label: u.name, defaultX: 80 + x % s * 300, defaultY: 80 + Math.floor(x / s) * 220, width: 230 }));
  }, [c]), p = (s) => e.getNodePosition(s.id, s.defaultX, s.defaultY), f = ge(() => {
    if (!d || d.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const s = d.map((x) => x.defaultX), u = d.map((x) => x.defaultY);
    return { x: Math.min(...s) - 60, y: Math.min(...u) - 60, width: Math.max(...s) - Math.min(...s) + 320, height: Math.max(...u) - Math.min(...u) + 280 };
  }, [d]), m = (s) => {
    const x = s.properties.length > 0 ? s.properties.length * 22 + 16 : 30, b = s.methods.length > 0 ? s.methods.length * 22 + 16 : 30;
    return 38 + x + b;
  }, g = H(() => {
    const s = e.finishEditing();
    if (s.nodeId && s.newValue && n) {
      const u = d.find((x) => x.id === s.nodeId);
      u && u.name !== s.newValue && n(s.nodeId, u.name, s.newValue);
    }
  }, [e, d, n]);
  se(() => {
    const s = (u) => {
      const b = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? u.metaKey : u.ctrlKey;
      if (!e.editingNode) {
        if ((u.key === "Delete" || u.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          u.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (b && u.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          u.preventDefault(), e.copySelectedNodes(d);
          return;
        }
        if (b && u.key.toLowerCase() === "v" && e.clipboard && a) {
          u.preventDefault();
          const k = e.pasteNodes();
          k && a(k);
          return;
        }
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e, d, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const s = e.getNodesInSelectionBox(d.map((u) => ({ ...u, x: u.defaultX, y: u.defaultY })), e.selectionBox);
      s.length > 0 && e.setSelectedNodes(new Set(s));
    }
  }, [e.isSelecting, e.selectionBox, d, e]);
  const y = H((s) => {
    (s.target === e.canvasRef.current || s.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: y, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ S("defs", { children: [
          /* @__PURE__ */ l("marker", { id: "class-inherit", markerWidth: "12", markerHeight: "12", refX: "11", refY: "6", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 12 6, 0 12", fill: "none", stroke: v.purple, strokeWidth: "2" }) }),
          /* @__PURE__ */ l("marker", { id: "class-assoc", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: v.blue }) }),
          /* @__PURE__ */ l("marker", { id: "class-diamond", markerWidth: "12", markerHeight: "12", refX: "11", refY: "6", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 6, 6 0, 12 6, 6 12", fill: v.orange }) })
        ] }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((s, u) => {
            const x = d.find((I) => I.id === s.from || I.name === s.from), b = d.find((I) => I.id === s.to || I.name === s.to);
            if (!x || !b) return null;
            const k = p(x), w = p(b), C = m(x), $ = m(b), E = k.x + x.width / 2, M = k.y + C / 2, _ = w.x + b.width / 2, P = w.y + $ / 2, A = _ - E, W = P - M, B = Math.sqrt(A * A + W * W) || 1, L = E + A / B * (x.width / 2 + 5), j = M + W / B * (C / 2 + 5), q = _ - A / B * (b.width / 2 + 15), X = P - W / B * ($ / 2 + 5), re = (L + q) / 2, oe = (j + X) / 2, te = s.type === "extends" ? "url(#class-inherit)" : s.type === "composition" ? "url(#class-diamond)" : "url(#class-assoc)", ae = s.type === "extends" ? v.purple : s.type === "composition" ? v.orange : v.blue, U = sr(L, j, q, X);
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: U, fill: "none", stroke: ae, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: U, fill: "none", stroke: ae, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: U, fill: "none", stroke: ae, strokeWidth: 2, strokeDasharray: "8,4", markerEnd: te, opacity: 0.8, strokeLinecap: "round", style: { animation: "flowDash 1s linear infinite" } }),
              s.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: re - s.label.length * 3.5 - 6, y: oe - 10, width: s.label.length * 7 + 12, height: 18, rx: 4, fill: "rgba(0,0,0,0.8)" }),
                /* @__PURE__ */ l("text", { x: re, y: oe + 4, textAnchor: "middle", fill: ae, fontSize: 10, children: s.label })
              ] })
            ] }, u);
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: d.map((s) => {
        const u = p(s), x = e.dragging === s.id, b = e.selectedNodes.has(s.id), k = e.editingNode === s.id, w = e.nodeColors[s.id] || v.purple;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (C) => e.handleNodeMouseDown(C, s.id, u.x, u.y),
            onDoubleClick: (C) => e.handleNodeDoubleClick(C, s.id, s.name),
            onContextMenu: (C) => e.handleNodeContextMenu(C, s.id),
            onTouchStart: (C) => e.handleNodeTouchStart(C, s.id, u.x, u.y),
            style: { position: "absolute", left: u.x, top: u.y, width: s.width, background: `linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${w}`, borderRadius: 8, overflow: "hidden", cursor: x ? "grabbing" : "grab", boxShadow: Ze(w, x, b), transition: x ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { padding: "10px 14px", background: `linear-gradient(135deg, ${w}40, ${w}20)`, borderBottom: `1px solid ${w}` }, children: /* @__PURE__ */ l(
                Xe,
                {
                  isEditing: k,
                  value: k ? e.editValue : s.name,
                  onChange: e.setEditValue,
                  onFinish: g,
                  onCancel: e.cancelEditing,
                  style: { color: r ? ye.stroke : t.textPrimary, fontWeight: 700, fontSize: r ? "1rem" : "inherit" }
                }
              ) }),
              /* @__PURE__ */ S("div", { style: { padding: "8px 14px", borderBottom: `1px solid ${t.border}` }, children: [
                s.properties.map((C, $) => /* @__PURE__ */ S("div", { style: { fontSize: "0.8rem", color: t.textSecondary }, children: [
                  /* @__PURE__ */ l("span", { style: { color: v.orange }, children: C.visibility }),
                  " ",
                  C.name,
                  ": ",
                  C.type
                ] }, $)),
                s.properties.length === 0 && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textMuted }, children: "No properties" })
              ] }),
              /* @__PURE__ */ S("div", { style: { padding: "8px 14px" }, children: [
                s.methods.map((C, $) => /* @__PURE__ */ S("div", { style: { fontSize: "0.8rem", color: t.textSecondary }, children: [
                  /* @__PURE__ */ l("span", { style: { color: v.green }, children: C.visibility }),
                  " ",
                  C.name,
                  "(): ",
                  C.returns
                ] }, $)),
                s.methods.length === 0 && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textMuted }, children: "No methods" })
              ] })
            ]
          },
          s.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((s) => Math.min(s * 1.2, 2)), onZoomOut: () => e.setZoom((s) => Math.max(s * 0.8, 0.3)), onFit: () => e.fitToView(f), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((s) => !s) }),
    e.selectedNodes.size > 0 && /* @__PURE__ */ S("div", { style: { position: "absolute", top: 12, left: 12, background: "rgba(124,58,237,0.9)", borderRadius: 6, padding: "4px 10px", color: "#fff", fontSize: "0.75rem", zIndex: 100 }, children: [
      e.selectedNodes.size,
      " selected • ⌘C copy • ⌘V paste • Del remove"
    ] }),
    e.contextMenu && /* @__PURE__ */ l(
      tt,
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
function X2({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 0, y: 50 }), c = ge(() => {
    const { nodes: m, edges: g } = i;
    if (!m.length) return { nodes: [], edges: g };
    const y = {};
    m.forEach((w) => {
      y[w.id] = [];
    }), g.forEach((w) => {
      y[w.source] && y[w.source].push(w.target);
    });
    const s = new Set(g.map((w) => w.target)), u = m.find((w) => !s.has(w.id));
    if (!u) return { nodes: m, edges: g };
    const x = (w) => {
      const C = y[w] || [];
      return C.length === 0 ? 180 : Math.max(180, C.map(x).reduce(($, E) => $ + E + 40, -40));
    }, b = [], k = (w, C, $, E) => {
      const M = m.find((A) => A.id === w);
      if (!M) return;
      const _ = y[w] || [], P = x(w);
      if (b.push({ ...M, defaultX: C, defaultY: $, level: E, color: [v.purple, v.blue, v.green, v.orange][Math.min(E, 3)] }), _.length) {
        let A = C - P / 2;
        _.forEach((W) => {
          const B = x(W);
          k(W, A + B / 2, $ + 120, E + 1), A += B + 40;
        });
      }
    };
    return k(u.id, x(u.id) / 2 + 100, 80, 0), { nodes: b, edges: g };
  }, [i]), h = (m) => e.getNodePosition(m.id, m.defaultX, m.defaultY), d = H(() => {
    const m = e.finishEditing();
    if (m.nodeId && m.newValue !== void 0 && n) {
      const g = c.nodes.find((y) => y.id === m.nodeId);
      g && g.label !== m.newValue && n(m.nodeId, g.label, m.newValue);
    }
  }, [e, c.nodes, n]);
  se(() => {
    const m = (g) => {
      const s = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? g.metaKey : g.ctrlKey;
      if (!e.editingNode) {
        if ((g.key === "Delete" || g.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          g.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (s && g.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          g.preventDefault(), e.copySelectedNodes(c.nodes);
          return;
        }
        if (s && g.key.toLowerCase() === "v" && e.clipboard && a) {
          g.preventDefault();
          const u = e.pasteNodes();
          u && a(u);
          return;
        }
      }
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [e, c.nodes, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const m = e.getNodesInSelectionBox(c.nodes.map((g) => ({ ...g, x: g.defaultX, y: g.defaultY })), e.selectionBox);
      m.length > 0 && e.setSelectedNodes(new Set(m));
    }
  }, [e.isSelecting, e.selectionBox, c.nodes, e]);
  const p = H((m) => {
    (m.target === e.canvasRef.current || m.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), f = ge(() => {
    if (!c.nodes || c.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const m = c.nodes.map((y) => y.defaultX), g = c.nodes.map((y) => y.defaultY);
    return { x: Math.min(...m) - 60, y: Math.min(...g) - 60, width: Math.max(...m) - Math.min(...m) + 250, height: Math.max(...g) - Math.min(...g) + 180 };
  }, [c]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: p, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        c.edges.map((m) => {
          const g = c.nodes.find((E) => E.id === m.source), y = c.nodes.find((E) => E.id === m.target);
          if (!g || !y) return null;
          const s = h(g), u = h(y), x = s.x + 90, b = s.y + 60, k = u.x + 90, w = u.y, C = (b + w) / 2, $ = `M ${x} ${b} L ${x} ${C} L ${k} ${C} L ${k} ${w}`;
          return /* @__PURE__ */ S("g", { children: [
            !r && /* @__PURE__ */ l("path", { d: $, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round", strokeLinejoin: "round" }),
            !r && /* @__PURE__ */ l("path", { d: $, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ l("path", { d: $, fill: "none", stroke: r ? ye.stroke : v.purple, strokeWidth: r ? 2.5 : 2, strokeDasharray: "6,4", opacity: r ? 1 : 0.7, strokeLinecap: "round", strokeLinejoin: "round" })
          ] }, m.id);
        }),
        e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
      ] }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: c.nodes.map((m) => {
        const g = h(m), y = e.dragging === m.id, s = e.selectedNodes.has(m.id);
        return /* @__PURE__ */ S("div", { onClick: (u) => e.handleNodeClick(u, m.id), onDoubleClick: (u) => e.handleNodeDoubleClick(u, m.id, m.label), onContextMenu: (u) => e.handleNodeContextMenu(u, m.id), onMouseDown: (u) => e.handleNodeMouseDown(u, m.id, g.x, g.y), onTouchStart: (u) => e.handleNodeTouchStart(u, m.id, g.x, g.y), style: { position: "absolute", left: g.x, top: g.y, width: 180, background: At(m.color, r), border: r ? `2px solid ${ye.stroke}` : `2px solid ${s ? v.blue : m.color}`, borderRadius: 12, padding: "10px 8px", textAlign: "center", cursor: y ? "grabbing" : "grab", boxShadow: Ze(m.color, y, s, r), transition: y ? "none" : "box-shadow 0.2s", touchAction: "none", overflow: "hidden", fontFamily: rn(r) }, children: [
          e.editingNode === m.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (u) => e.setEditingValue(u), onFinish: d, style: { fontSize: r ? "1.1rem" : "0.95rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1.1rem" : "0.95rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary }, children: m.label }),
          m.title && /* @__PURE__ */ l("div", { style: { fontSize: r ? "0.9rem" : "0.75rem", color: r ? ye.accent : m.color, marginTop: 4 }, children: m.title })
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
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((m) => Math.min(m * 1.2, 2)), onZoomOut: () => e.setZoom((m) => Math.max(m * 0.8, 0.3)), onFit: () => e.fitToView(f), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(tt, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function K2({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const { participants: n, messages: o, fragments: a = [], notes: e = [] } = i, c = Pe({ x: 30, y: 20 }), h = (y) => c.getNodePosition(y.id, y.x, 0), d = 60, p = 110, f = ge(() => {
    if (!n || n.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const y = n.map((s) => s.x);
    return { x: Math.min(...y) - 60, y: 0, width: Math.max(...y) - Math.min(...y) + 200, height: 85 + o.length * d + 80 };
  }, [n, o]), m = (y) => p + y * d, g = {
    loop: v.blue,
    alt: v.orange,
    opt: v.green
  };
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: c.canvasRef, className: "canvas-bg", onMouseDown: c.handleCanvasMouseDown, onMouseMove: c.handleMouseMove, onMouseUp: c.handleMouseUp, onMouseLeave: c.handleMouseUp, onTouchStart: c.handleTouchStart, onTouchMove: c.handleTouchMove, onTouchEnd: c.handleTouchEnd, onWheel: c.handleWheel, style: { width: "100%", height: "100%", cursor: c.isPanning || c.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute" }, children: /* @__PURE__ */ S("g", { transform: `translate(${c.pan.x}, ${c.pan.y}) scale(${c.zoom})`, children: [
      a.map((y, s) => {
        if (!y || y.startIndex === void 0) return null;
        const u = g[y.type] || v.purple, x = o.filter(
          (A) => A.index >= y.startIndex && A.index < (y.endIndex || y.startIndex + 1)
        );
        if (x.length === 0) return null;
        const b = /* @__PURE__ */ new Set();
        x.forEach((A) => {
          b.add(A.from), b.add(A.to);
        });
        const k = n.filter((A) => b.has(A.id));
        if (k.length === 0) return null;
        const w = k.map((A) => h(A).x), C = Math.min(...w) - 10, $ = Math.max(...w) + 130, E = Math.min(...x.map((A) => A.index)), M = Math.max(...x.map((A) => A.index)), _ = m(E) - 35, P = (M - E + 1) * d + 25;
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l(
            "rect",
            {
              x: C,
              y: _,
              width: $ - C,
              height: P,
              rx: 6,
              fill: `${u}08`,
              stroke: u,
              strokeWidth: 1.5,
              strokeDasharray: "6,3",
              opacity: 0.8
            }
          ),
          /* @__PURE__ */ l(
            "rect",
            {
              x: C,
              y: _,
              width: 50,
              height: 18,
              fill: u,
              rx: 4
            }
          ),
          /* @__PURE__ */ l(
            "text",
            {
              x: C + 25,
              y: _ + 13,
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
              x: C + 55,
              y: _ + 13,
              fill: u,
              fontSize: 9,
              fontWeight: 600,
              children: [
                "[",
                y.label,
                "]"
              ]
            }
          )
        ] }, `frag-${s}`);
      }),
      n.map((y, s) => {
        const u = h(y);
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("line", { x1: u.x + 60, y1: 85, x2: u.x + 60, y2: 85 + o.length * d + 40, stroke: v.purple, strokeWidth: 2, strokeDasharray: "4,4", opacity: 0.4 }),
          /* @__PURE__ */ S("defs", { children: [
            /* @__PURE__ */ S("linearGradient", { id: `seq-grad-${s}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ l("stop", { offset: "0%", stopColor: de[s % de.length], stopOpacity: "0.35" }),
              /* @__PURE__ */ l("stop", { offset: "100%", stopColor: de[s % de.length], stopOpacity: "0.12" })
            ] }),
            /* @__PURE__ */ l("filter", { id: `seq-shadow-${s}`, x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ l("feDropShadow", { dx: "0", dy: "4", stdDeviation: "8", floodColor: de[s % de.length], floodOpacity: "0.3" }) })
          ] }),
          /* @__PURE__ */ l("rect", { x: u.x, y: 30, width: 120, height: 45, rx: 8, fill: `url(#seq-grad-${s})`, stroke: de[s % de.length], strokeWidth: 2, filter: `url(#seq-shadow-${s})`, style: { cursor: c.dragging === y.id ? "grabbing" : "grab", touchAction: "none" }, onMouseDown: (x) => {
            x.stopPropagation(), c.handleNodeMouseDown(x, y.id, u.x, 0);
          }, onTouchStart: (x) => {
            x.stopPropagation(), c.handleNodeTouchStart(x, y.id, u.x, 0);
          } }),
          /* @__PURE__ */ l("text", { x: u.x + 60, y: 58, textAnchor: "middle", fill: t.textPrimary, fontSize: 13, fontWeight: 600, style: { pointerEvents: "none" }, children: y.label })
        ] }, y.id);
      }),
      o.map((y, s) => {
        const u = n.find((_) => _.id === y.from), x = n.find((_) => _.id === y.to);
        if (!u || !x) return null;
        const b = h(u), k = h(x), w = m(s), C = b.x + 60, $ = k.x + 60, E = y.isReturn ? t.textSecondary : v.purple;
        return y.from === y.to ? /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: `seq-arr-${s}`, markerWidth: "10", markerHeight: "8", refX: "8", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: E }) }) }),
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${C} ${w} L ${C + 40} ${w} L ${C + 40} ${w + 30} L ${C + 8} ${w + 30}`,
              stroke: E,
              strokeWidth: 2,
              fill: "none",
              markerEnd: `url(#seq-arr-${s})`
            }
          ),
          /* @__PURE__ */ l("rect", { x: C + 40 + 5, y: w - 10, width: Math.max(80, y.label.length * 6), height: 18, rx: 4, fill: "rgba(0,0,0,0.85)" }),
          /* @__PURE__ */ l("text", { x: C + 40 + 10, y: w + 3, fill: E, fontSize: 11, children: y.label })
        ] }, `msg-${s}`) : /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: `seq-arr-${s}`, markerWidth: "10", markerHeight: "8", refX: "8", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: E }) }) }),
          /* @__PURE__ */ l("line", { x1: C, y1: w, x2: $ - (C < $ ? 8 : -8), y2: w, stroke: E, strokeWidth: 6, strokeOpacity: 0.1, strokeLinecap: "round" }),
          /* @__PURE__ */ l("line", { x1: C, y1: w, x2: $ - (C < $ ? 8 : -8), y2: w, stroke: E, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
          /* @__PURE__ */ l("line", { x1: C, y1: w, x2: $ - (C < $ ? 8 : -8), y2: w, stroke: E, strokeWidth: 2, strokeDasharray: y.isReturn ? "4,3" : "none", markerEnd: `url(#seq-arr-${s})` }),
          /* @__PURE__ */ l("rect", { x: Math.min(C, $) + Math.abs($ - C) / 2 - 50, y: w - 20, width: 100, height: 18, rx: 4, fill: "rgba(0,0,0,0.85)" }),
          /* @__PURE__ */ l("text", { x: Math.min(C, $) + Math.abs($ - C) / 2, y: w - 7, textAnchor: "middle", fill: E, fontSize: 11, children: y.label })
        ] }, `msg-${s}`);
      }),
      e.map((y, s) => {
        const u = n.find((C) => C.id === y.participantId);
        if (!u) return null;
        const x = h(u), b = m(y.atMessageIndex) - 15, k = y.position === "right" ? x.x + 130 : x.x - 110, w = Math.max(100, y.text.length * 6 + 20);
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${k} ${b} L ${k + w - 10} ${b} L ${k + w} ${b + 10} L ${k + w} ${b + 40} L ${k} ${b + 40} Z`,
              fill: "#fef3c7",
              stroke: "#f59e0b",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${k + w - 10} ${b} L ${k + w - 10} ${b + 10} L ${k + w} ${b + 10}`,
              fill: "#fde68a",
              stroke: "#f59e0b",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ l(
            "text",
            {
              x: k + 8,
              y: b + 25,
              fill: "#92400e",
              fontSize: 11,
              fontWeight: 500,
              children: y.text
            }
          )
        ] }, `note-${s}`);
      })
    ] }) }) }),
    /* @__PURE__ */ l(De, { onZoomIn: () => c.setZoom((y) => Math.min(y * 1.2, 2)), onZoomOut: () => c.setZoom((y) => Math.max(y * 0.8, 0.3)), onFit: () => c.fitToView(f), onReset: c.resetView, zoom: c.zoom })
  ] });
}
function Q2({ events: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const n = Pe({ x: 30, y: 0 }), o = (e) => n.getNodePosition(e.id, e.x, e.y), a = ge(() => {
    if (!i || i.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const e = i.map((c) => c.x);
    return { x: Math.min(...e) - 60, y: 0, width: Math.max(...e) - Math.min(...e) + 280, height: 350 };
  }, [i]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: n.canvasRef, className: "canvas-bg", onMouseDown: n.handleCanvasMouseDown, onMouseMove: n.handleMouseMove, onMouseUp: n.handleMouseUp, onMouseLeave: n.handleMouseUp, onTouchStart: n.handleTouchStart, onTouchMove: n.handleTouchMove, onTouchEnd: n.handleTouchEnd, onWheel: n.handleWheel, style: { width: "100%", height: "100%", cursor: n.isPanning || n.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`, transformOrigin: "0 0", padding: "80px 50px" }, children: [
      /* @__PURE__ */ l("div", { style: { position: "absolute", top: 265, left: 50, width: i.length * 220, height: 4, background: `linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.green})`, borderRadius: 2 } }),
      i.map((e, c) => {
        const h = o(e), d = e.isMilestone ? v.orange : v.purple, p = n.dragging === e.id;
        return /* @__PURE__ */ S("div", { onMouseDown: (f) => n.handleNodeMouseDown(f, e.id, h.x, h.y), onTouchStart: (f) => n.handleNodeTouchStart(f, e.id, h.x, h.y), style: { position: "absolute", left: h.x, top: 80, width: 190, cursor: p ? "grabbing" : "grab", touchAction: "none" }, children: [
          /* @__PURE__ */ S("div", { style: { background: e.isMilestone ? `linear-gradient(135deg, ${v.orange}35, ${v.orange}12)` : At(d), border: `2px solid ${d}`, borderRadius: 12, padding: 16, textAlign: "center", minHeight: 110, boxShadow: Ze(d, p, !1), transition: p ? "none" : "box-shadow 0.2s" }, children: [
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
    /* @__PURE__ */ l(De, { onZoomIn: () => n.setZoom((e) => Math.min(e * 1.2, 2)), onZoomOut: () => n.setZoom((e) => Math.max(e * 0.8, 0.3)), onFit: () => n.fitToView(a), onReset: n.resetView, zoom: n.zoom })
  ] });
}
function Z2({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const { commits: n, branches: o } = i, a = Pe({ x: 20, y: 20 }), e = (d) => a.getNodePosition(d.id, d.x, d.y), c = ge(() => {
    if (!n || n.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const d = n.map((f) => f.x), p = n.map((f) => f.y);
    return { x: Math.min(...d) - 100, y: Math.min(...p) - 60, width: Math.max(...d) - Math.min(...d) + 200, height: Math.max(...p) - Math.min(...p) + 120 };
  }, [n]), h = ge(() => {
    const d = [];
    return o.forEach((p, f) => {
      const m = n.filter((g) => g.branch === p.name).sort((g, y) => g.index - y.index);
      for (let g = 0; g < m.length - 1; g++) d.push({ type: "seq", from: m[g], to: m[g + 1], color: de[f % de.length] });
      if (p.parentBranch) {
        o.findIndex((u) => u.name === p.parentBranch);
        const g = n.filter((u) => u.branch === p.parentBranch), y = g.find((u) => u.index === p.branchPoint - 1) || g[g.length - 1], s = m[0];
        y && s && d.push({ type: "branch", from: y, to: s, color: de[f % de.length] });
      }
    }), n.filter((p) => p.isMerge && p.mergeFrom).forEach((p) => {
      const f = o.findIndex((g) => g.name === p.mergeFrom), m = n.filter((g) => g.branch === p.mergeFrom).sort((g, y) => y.index - g.index)[0];
      m && d.push({ type: "merge", from: m, to: p, color: de[f % de.length] });
    }), d;
  }, [n, o]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: a.canvasRef, className: "canvas-bg", onMouseDown: a.handleCanvasMouseDown, onMouseMove: a.handleMouseMove, onMouseUp: a.handleMouseUp, onMouseLeave: a.handleMouseUp, onTouchStart: a.handleTouchStart, onTouchMove: a.handleTouchMove, onTouchEnd: a.handleTouchEnd, onWheel: a.handleWheel, style: { width: "100%", height: "100%", cursor: a.isPanning || a.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute" }, children: /* @__PURE__ */ S("g", { transform: `translate(${a.pan.x}, ${a.pan.y}) scale(${a.zoom})`, children: [
      o.map((d, p) => /* @__PURE__ */ l("text", { x: 30, y: d.y + 5, fill: de[p % de.length], fontSize: 14, fontWeight: 700, children: d.name }, d.name)),
      h.map((d, p) => {
        const f = e(d.from), m = e(d.to);
        if (d.type === "seq")
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("line", { x1: f.x, y1: f.y, x2: m.x, y2: m.y, stroke: d.color, strokeWidth: 10, strokeOpacity: 0.1, strokeLinecap: "round" }),
            /* @__PURE__ */ l("line", { x1: f.x, y1: f.y, x2: m.x, y2: m.y, stroke: d.color, strokeWidth: 6, strokeOpacity: 0.25, strokeLinecap: "round" }),
            /* @__PURE__ */ l("line", { x1: f.x, y1: f.y, x2: m.x, y2: m.y, stroke: d.color, strokeWidth: 4, strokeLinecap: "round" })
          ] }, p);
        const g = (f.x + m.x) / 2, y = `M ${f.x} ${f.y} C ${g} ${f.y}, ${g} ${m.y}, ${m.x} ${m.y}`;
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("path", { d: y, fill: "none", stroke: d.color, strokeWidth: 8, strokeOpacity: 0.1, strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: y, fill: "none", stroke: d.color, strokeWidth: 5, strokeOpacity: 0.25, strokeLinecap: "round" }),
          /* @__PURE__ */ l("path", { d: y, fill: "none", stroke: d.color, strokeWidth: 3, strokeDasharray: d.type === "merge" ? "6,4" : "none", opacity: 0.9, strokeLinecap: "round" })
        ] }, p);
      }),
      n.map((d) => {
        const p = e(d), f = o.findIndex((g) => g.name === d.branch), m = a.dragging === d.id;
        return /* @__PURE__ */ S("g", { style: { cursor: m ? "grabbing" : "grab", touchAction: "none" }, onMouseDown: (g) => {
          g.stopPropagation(), a.handleNodeMouseDown(g, d.id, p.x, p.y);
        }, onTouchStart: (g) => {
          g.stopPropagation(), a.handleNodeTouchStart(g, d.id, p.x, p.y);
        }, children: [
          /* @__PURE__ */ l("circle", { cx: p.x, cy: p.y, r: d.isMerge ? 14 : 12, fill: de[f % de.length], stroke: m ? "#fff" : t.canvasBg, strokeWidth: m ? 4 : 3 }),
          d.isMerge && /* @__PURE__ */ l("circle", { cx: p.x, cy: p.y, r: 6, fill: t.canvasBg }),
          /* @__PURE__ */ l("text", { x: p.x, y: p.y - 22, textAnchor: "middle", fill: t.textPrimary, fontSize: 12, fontWeight: 600, children: d.label })
        ] }, d.id);
      })
    ] }) }) }),
    /* @__PURE__ */ l(De, { onZoomIn: () => a.setZoom((d) => Math.min(d * 1.2, 2)), onZoomOut: () => a.setZoom((d) => Math.max(d * 0.8, 0.3)), onFit: () => a.fitToView(c), onReset: a.resetView, zoom: a.zoom })
  ] });
}
function J2({ tasks: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const n = Math.max(...i.map((o) => o.start + o.duration), 14);
  return /* @__PURE__ */ S("div", { style: { width: "100%", height: "100%", overflow: "auto", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, padding: 20 }, children: [
    /* @__PURE__ */ l("div", { style: { display: "flex", marginLeft: 160, marginBottom: 12 }, children: Array.from({ length: n + 1 }, (o, a) => /* @__PURE__ */ l("div", { style: { width: 40, textAlign: "center", fontSize: "0.75rem", color: t.textSecondary }, children: a }, a)) }),
    i.map((o, a) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", height: 44, borderBottom: `1px solid ${t.border}` }, children: [
      /* @__PURE__ */ l("div", { style: { width: 160, paddingRight: 16, fontSize: "0.85rem", color: t.textPrimary, fontWeight: 500 }, children: o.name }),
      /* @__PURE__ */ S("div", { style: { flex: 1, position: "relative", height: "100%" }, children: [
        Array.from({ length: n + 1 }, (e, c) => /* @__PURE__ */ l("div", { style: { position: "absolute", left: c * 40, top: 0, bottom: 0, width: 1, background: t.border } }, c)),
        /* @__PURE__ */ l("div", { style: { position: "absolute", left: o.start * 40 + 2, top: 10, width: o.duration * 40 - 4, height: 24, background: `linear-gradient(135deg, ${de[a % de.length]}, ${de[a % de.length]}cc)`, borderRadius: 6, boxShadow: `0 2px 8px ${de[a % de.length]}40` } })
      ] })
    ] }, o.id))
  ] });
}
function ew({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const n = i.reduce((e, c) => e + c.value, 0);
  let o = -90;
  const a = i.map((e, c) => {
    const h = e.value / n * 100, d = e.value / n * 360, p = o;
    o += d;
    const f = 200 + 120 * Math.cos(p * Math.PI / 180), m = 200 + 120 * Math.sin(p * Math.PI / 180), g = 200 + 120 * Math.cos((p + d) * Math.PI / 180), y = 200 + 120 * Math.sin((p + d) * Math.PI / 180), s = 200 + 150 * Math.cos((p + d / 2) * Math.PI / 180), u = 200 + 150 * Math.sin((p + d / 2) * Math.PI / 180);
    return { ...e, pct: h, path: `M 200 200 L ${f} ${m} A 120 120 0 ${d > 180 ? 1 : 0} 1 ${g} ${y} Z`, color: de[c % de.length], lx: s, ly: u };
  });
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center" }, children: [
    /* @__PURE__ */ l("svg", { width: "450", height: "400", viewBox: "0 0 450 400", children: a.map((e, c) => /* @__PURE__ */ S("g", { children: [
      /* @__PURE__ */ l("path", { d: e.path, fill: e.color, stroke: t.canvasBg, strokeWidth: 2 }),
      /* @__PURE__ */ l("text", { x: e.lx, y: e.ly, textAnchor: "middle", fill: t.textPrimary, fontSize: 11, fontWeight: 500, children: e.label }),
      /* @__PURE__ */ S("text", { x: e.lx, y: e.ly + 14, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: [
        e.pct.toFixed(1),
        "%"
      ] })
    ] }, c)) }),
    /* @__PURE__ */ l("div", { style: { position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)" }, children: a.map((e, c) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: [
      /* @__PURE__ */ l("div", { style: { width: 14, height: 14, borderRadius: 3, background: e.color } }),
      /* @__PURE__ */ l("span", { style: { fontSize: "0.8rem", color: t.textPrimary }, children: e.label })
    ] }, c)) })
  ] });
}
function tw({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const { config: n, points: o } = i, a = Pe({ x: 50, y: 20 }), e = 400, c = 60, h = e - c * 2, d = (p) => a.getNodePosition(p.id, c + p.x / 100 * h + 50, c + h - p.y / 100 * h);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ l("div", { ref: a.canvasRef, className: "canvas-bg", onMouseDown: a.handleCanvasMouseDown, onMouseMove: a.handleMouseMove, onMouseUp: a.handleMouseUp, onMouseLeave: a.handleMouseUp, onWheel: a.handleWheel, style: { width: "100%", height: "100%", cursor: a.isPanning || a.dragging ? "grabbing" : "grab", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ S("svg", { width: e + 100, height: e, viewBox: `0 0 ${e + 100} ${e}`, style: { transform: `translate(${a.pan.x - 50}px, ${a.pan.y - 20}px) scale(${a.zoom})`, transformOrigin: "center" }, children: [
      n.title && /* @__PURE__ */ l("text", { x: e / 2 + 50, y: 30, textAnchor: "middle", fill: t.textPrimary, fontSize: 16, fontWeight: 700, children: n.title }),
      /* @__PURE__ */ l("rect", { x: c + 50, y: c, width: h / 2, height: h / 2, fill: v.green + "15" }),
      /* @__PURE__ */ l("rect", { x: c + h / 2 + 50, y: c, width: h / 2, height: h / 2, fill: v.blue + "15" }),
      /* @__PURE__ */ l("rect", { x: c + 50, y: c + h / 2, width: h / 2, height: h / 2, fill: v.orange + "15" }),
      /* @__PURE__ */ l("rect", { x: c + h / 2 + 50, y: c + h / 2, width: h / 2, height: h / 2, fill: v.red + "15" }),
      /* @__PURE__ */ l("line", { x1: c + 50, y1: c + h / 2, x2: c + h + 50, y2: c + h / 2, stroke: t.border, strokeWidth: 2 }),
      /* @__PURE__ */ l("line", { x1: c + h / 2 + 50, y1: c, x2: c + h / 2 + 50, y2: c + h, stroke: t.border, strokeWidth: 2 }),
      n.quadrants.map((p, f) => {
        const m = [{ x: c + h / 4 + 50, y: c + h / 4 }, { x: c + h * 3 / 4 + 50, y: c + h / 4 }, { x: c + h / 4 + 50, y: c + h * 3 / 4 }, { x: c + h * 3 / 4 + 50, y: c + h * 3 / 4 }];
        return p && /* @__PURE__ */ l("text", { x: m[f].x, y: m[f].y, textAnchor: "middle", fill: t.textSecondary, fontSize: 11, children: p }, f);
      }),
      n.xLabel && /* @__PURE__ */ l("text", { x: e / 2 + 50, y: e - 10, textAnchor: "middle", fill: t.textSecondary, fontSize: 12, children: n.xLabel }),
      n.yLabel && /* @__PURE__ */ l("text", { x: 20, y: e / 2, textAnchor: "middle", fill: t.textSecondary, fontSize: 12, transform: `rotate(-90, 20, ${e / 2})`, children: n.yLabel }),
      o.map((p, f) => {
        const m = d(p), g = a.dragging === p.id;
        return /* @__PURE__ */ S("g", { style: { cursor: g ? "grabbing" : "grab" }, onMouseDown: (y) => {
          y.stopPropagation(), a.handleNodeMouseDown(y, p.id, m.x, m.y);
        }, children: [
          /* @__PURE__ */ l("circle", { cx: m.x, cy: m.y, r: 12, fill: de[f % de.length], stroke: g ? "#fff" : "none", strokeWidth: 3 }),
          /* @__PURE__ */ l("text", { x: m.x, y: m.y - 18, textAnchor: "middle", fill: t.textPrimary, fontSize: 11, children: p.label })
        ] }, f);
      })
    ] }) }),
    /* @__PURE__ */ l(De, { onZoomIn: () => a.setZoom((p) => Math.min(p * 1.2, 2)), onZoomOut: () => a.setZoom((p) => Math.max(p * 0.8, 0.3)), onFit: () => {
    }, onReset: a.resetView, zoom: a.zoom })
  ] });
}
function rw({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 30, y: 30 }), c = { cloud: { color: v.sky, icon: "☁️" }, cluster: { color: v.teal, icon: "🌐" }, container: { color: v.cyan, icon: "📦" }, database: { color: v.green, icon: "🗄️" }, storage: { color: v.emerald, icon: "💾" }, device: { color: v.pink, icon: "📱" }, server: { color: v.violet, icon: "🖧" }, component: { color: v.purple, icon: "⚙️" } }, h = ge(() => {
    const g = i.nodes, y = [], s = (w) => g.filter((C) => C.parentId === w), u = (w) => {
      const C = s(w);
      return C.length === 0 ? 70 : 60 + C.reduce(($, E) => $ + u(E.id) + 15, 0);
    }, x = (w, C, $, E) => {
      const M = c[w.type] || c.component, _ = s(w.id), P = u(w.id);
      y.push({ ...w, defaultX: C, defaultY: $, width: 220, height: P, level: E, ...M, hasChildren: _.length > 0 });
      let A = $ + 55;
      _.forEach((W) => {
        x(W, C + 20, A, E + 1), A += u(W.id) + 15;
      });
    }, b = g.filter((w) => !w.parentId);
    let k = 40;
    return b.forEach((w) => {
      x(w, k, 40, 0), k += 280;
    }), { nodes: y.sort((w, C) => w.level - C.level) };
  }, [i]), d = (g) => e.getNodePosition(g.id, g.defaultX, g.defaultY), p = H(() => {
    const g = e.finishEditing();
    if (g.nodeId && g.newValue !== void 0 && n) {
      const y = h.nodes.find((s) => s.id === g.nodeId);
      y && y.label !== g.newValue && n(g.nodeId, y.label, g.newValue);
    }
  }, [e, h.nodes, n]);
  se(() => {
    const g = (y) => {
      const u = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? y.metaKey : y.ctrlKey;
      if (!e.editingNode) {
        if ((y.key === "Delete" || y.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          y.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (u && y.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          y.preventDefault(), e.copySelectedNodes(h.nodes);
          return;
        }
        if (u && y.key.toLowerCase() === "v" && e.clipboard && a) {
          y.preventDefault();
          const x = e.pasteNodes();
          x && a(x);
          return;
        }
      }
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [e, h.nodes, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const g = e.getNodesInSelectionBox(h.nodes.map((y) => ({ ...y, x: y.defaultX, y: y.defaultY })), e.selectionBox);
      g.length > 0 && e.setSelectedNodes(new Set(g));
    }
  }, [e.isSelecting, e.selectionBox, h.nodes, e]);
  const f = H((g) => {
    (g.target === e.canvasRef.current || g.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), m = ge(() => {
    if (!h.nodes || h.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const g = h.nodes.map((u) => u.defaultX), y = h.nodes.map((u) => u.defaultY), s = h.nodes.map((u) => u.height || 70);
    return { x: Math.min(...g) - 60, y: Math.min(...y) - 60, width: Math.max(...g) - Math.min(...g) + 300, height: Math.max(...y.map((u, x) => u + s[x])) - Math.min(...y) + 120 };
  }, [h]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: f, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ l("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" }) }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: h.nodes.map((g) => {
        const y = d(g), s = e.dragging === g.id, u = e.selectedNodes.has(g.id);
        return /* @__PURE__ */ l("div", { onClick: (x) => e.handleNodeClick(x, g.id), onDoubleClick: (x) => e.handleNodeDoubleClick(x, g.id, g.label), onContextMenu: (x) => e.handleNodeContextMenu(x, g.id), onMouseDown: (x) => e.handleNodeMouseDown(x, g.id, y.x, y.y), onTouchStart: (x) => e.handleNodeTouchStart(x, g.id, y.x, y.y), style: { position: "absolute", left: y.x, top: y.y, width: g.width, height: g.height, background: `${g.color}10`, border: `2px ${g.level === 0 ? "solid" : "dashed"} ${u ? v.blue : g.color}`, borderRadius: 12, boxSizing: "border-box", cursor: s ? "grabbing" : "grab", boxShadow: u ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : s ? `0 0 30px ${g.color}40` : "none", transition: s ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: g.hasChildren ? `1px solid ${g.color}30` : "none" }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.3rem" }, children: g.icon }),
          e.editingNode === g.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (x) => e.setEditingValue(x), onFinish: p, style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary }, children: g.label }),
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
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((g) => Math.min(g * 1.2, 2)), onZoomOut: () => e.setZoom((g) => Math.max(g * 0.8, 0.3)), onFit: () => e.fitToView(m), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(tt, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function nw({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const { elements: n, totalHeight: o } = i, a = (s, u = {}) => !s || !s.includes("**") && !s.includes("~~") && !s.includes("{badge:") && !s.includes("{tag:") ? s : s.split(/(\*\*[^*]+\*\*|~~[^~]+~~|\{(?:badge|tag):[^}]+\})/gi).map((b, k) => {
    if (b.startsWith("**") && b.endsWith("**"))
      return /* @__PURE__ */ l("strong", { style: { fontWeight: 700, ...u }, children: b.slice(2, -2) }, k);
    if (b.startsWith("~~") && b.endsWith("~~"))
      return /* @__PURE__ */ l("span", { style: { textDecoration: "line-through", opacity: 0.6 }, children: b.slice(2, -2) }, k);
    const w = b.match(/^\{(?:badge|tag):([^}]+)\}$/i);
    if (w) {
      const C = w[1], $ = C.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i), E = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber }, M = $ ? $[1].toLowerCase() : null, _ = $ ? $[2] : C, P = E[M] || v.red;
      return /* @__PURE__ */ l("span", { style: { display: "inline-flex", padding: "2px 8px", background: `${P}25`, border: `1px solid ${P}`, borderRadius: 10, color: P, fontSize: "0.7rem", fontWeight: 600, marginRight: 6 }, children: _ }, k);
    }
    return b;
  }), e = t.name === "light", c = e ? {
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
    glow: (s) => `0 4px 20px ${s}30, 0 0 40px ${s}15`,
    inset: "inset 0 1px 0 rgba(255,255,255,0.5)"
  } : {
    sm: "0 2px 8px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)",
    md: "0 4px 20px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)",
    lg: "0 8px 40px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)",
    xl: "0 20px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25)",
    glow: (s) => `0 4px 20px ${s}40, 0 0 40px ${s}20`,
    inset: "inset 0 1px 0 rgba(255,255,255,0.1)"
  }, d = e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)", p = e ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)", f = e ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)", m = e ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.3)", g = {
    low: e ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)",
    medium: e ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
    high: e ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
    elevated: e ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
    prominent: e ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)",
    overlay: e ? "rgba(255,255,255,0.95)" : "rgba(30,30,40,0.95)",
    code: e ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.4)"
  }, y = (s) => {
    var x, b;
    const u = { position: "absolute", left: s.x, top: s.y, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
    switch (s.type) {
      case "window":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: e ? "linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)" : "linear-gradient(180deg, #2d3748 0%, #1a202c 100%)", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", padding: "0 16px", boxShadow: h.lg, border: `1px solid ${d}` }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 8, marginRight: 16 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #ff6b6b, #ee5a5a)", boxShadow: "0 2px 4px rgba(238,90,90,0.4)" } }),
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #ffd93d, #f0c419)", boxShadow: "0 2px 4px rgba(240,196,25,0.4)" } }),
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #6bcf63, #4ade80)", boxShadow: "0 2px 4px rgba(74,222,128,0.4)" } })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }, children: a(s.label) })
        ] }, s.id);
      case "card":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, ...c.light, border: `1px solid ${d}`, borderRadius: 16, boxShadow: `${h.md}, ${h.inset}` }, children: s.label && /* @__PURE__ */ l("div", { style: { padding: "14px 18px", borderBottom: `1px solid ${p}`, background: e ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)" : "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)", borderRadius: "16px 16px 0 0", fontWeight: 600, color: t.textPrimary, fontSize: "0.9rem", letterSpacing: "-0.01em" }, children: a(s.label) }) }, s.id);
      case "modal":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, ...c.medium, border: `1px solid ${d}`, borderRadius: 20, boxShadow: h.xl }, children: [
          /* @__PURE__ */ S("div", { style: { padding: "18px 24px", borderBottom: `1px solid ${p}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: e ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)" : "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)", borderRadius: "20px 20px 0 0" }, children: [
            /* @__PURE__ */ l("span", { style: { fontWeight: 700, color: t.textPrimary, fontSize: "1rem", letterSpacing: "-0.02em" }, children: a(s.label) }),
            /* @__PURE__ */ l("div", { style: { width: 28, height: 28, borderRadius: 8, background: e ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "1rem", lineHeight: 1 }, children: "×" }) })
          ] }),
          /* @__PURE__ */ l("div", { style: { padding: 24, color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.6 }, children: "Modal content area..." })
        ] }, s.id);
      case "navbar":
        const k = s.items[0] && /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(s.items[0]);
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, ...c.dark, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 20px", gap: 24, boxShadow: h.md, border: `1px solid ${p}` }, children: [
          !k && /* @__PURE__ */ l("span", { style: { fontWeight: 800, color: t.textPrimary, fontSize: "1.1rem", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "◆" }),
          s.items.map((U, I) => {
            const O = U.match(/^\[(.+)\]$/), R = U.match(/^\((@?\w+)\)$/);
            return O ? /* @__PURE__ */ l("button", { style: { padding: "8px 18px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, color: "#fff", border: "none", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: h.glow(v.purple), transition: "transform 0.2s, box-shadow 0.2s" }, children: O[1] }, I) : R ? /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}40, ${v.blue}40)`, border: `2px solid ${v.purple}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 600, color: v.purple }, children: R[1].slice(0, 2).toUpperCase() }, I) : /* @__PURE__ */ l("span", { style: { color: I === 0 ? v.purple : t.textSecondary, fontSize: "0.9rem", fontWeight: I === 0 ? 600 : 500, transition: "color 0.2s" }, children: U }, I);
          })
        ] }, s.id);
      case "tabs":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, display: "flex", gap: 4, background: g.medium, padding: 4, borderRadius: 12, border: `1px solid ${p}` }, children: s.items.map((U, I) => /* @__PURE__ */ l("div", { style: { padding: "10px 20px", color: I === s.activeIndex ? "#fff" : t.textSecondary, background: I === s.activeIndex ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : "transparent", borderRadius: 8, fontSize: "0.85rem", fontWeight: I === s.activeIndex ? 600 : 500, boxShadow: I === s.activeIndex ? h.glow(v.purple) : "none", transition: "all 0.2s" }, children: U }, I)) }, s.id);
      case "breadcrumbs":
        return /* @__PURE__ */ l("div", { style: { ...u, display: "flex", alignItems: "center", gap: 10 }, children: s.items.map((U, I) => /* @__PURE__ */ S(Oc.Fragment, { children: [
          /* @__PURE__ */ l("span", { style: { color: I === s.items.length - 1 ? t.textPrimary : v.purple, fontSize: "0.85rem", fontWeight: I === s.items.length - 1 ? 600 : 400 }, children: U }),
          I < s.items.length - 1 && /* @__PURE__ */ l("span", { style: { color: t.textMuted, opacity: 0.5 }, children: "›" })
        ] }, I)) }, s.id);
      case "search":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, ...c.light, border: `1px solid ${d}`, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 18px", gap: 12, boxShadow: h.sm }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1rem", opacity: 0.7 }, children: "🔍" }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: s.label })
        ] }, s.id);
      case "toolbar":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }, children: s.items.map((U, I) => {
          if (U.type === "search")
            return /* @__PURE__ */ S("div", { style: { flex: 1, minWidth: 150, height: 38, ...c.light, border: `1px solid ${d}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 14px", gap: 10, boxShadow: h.sm }, children: [
              /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem", opacity: 0.7 }, children: "🔍" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: U.label })
            ] }, I);
          if (U.type === "dropdown")
            return /* @__PURE__ */ S("div", { style: { height: 38, ...c.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 14px", gap: 8, boxShadow: h.sm }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem", fontWeight: 500 }, children: U.label }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.65rem" }, children: "▼" })
            ] }, I);
          const O = U.variant === "primary";
          return /* @__PURE__ */ l("button", { style: { height: 38, padding: "0 16px", background: O ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : "transparent", color: O ? "#fff" : t.textPrimary, border: O ? "none" : `1px solid ${f}`, borderRadius: 10, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: O ? h.glow(v.purple) : h.sm, display: "flex", alignItems: "center", gap: 6 }, children: U.label }, I);
        }) }, s.id);
      case "dropdown":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, ...c.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", boxShadow: h.sm }, children: [
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: s.label }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "▼" })
        ] }, s.id);
      case "toggle":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex", alignItems: "center", gap: 14 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 52, height: 28, borderRadius: 14, background: s.enabled ? `linear-gradient(135deg, ${v.green}, #22c55e)` : g.prominent, position: "relative", boxShadow: s.enabled ? h.glow(v.green) : h.sm, transition: "all 0.3s" }, children: /* @__PURE__ */ l("div", { style: { position: "absolute", top: 3, left: s.enabled ? 27 : 3, width: 22, height: 22, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)" } }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: s.label })
        ] }, s.id);
      case "radio":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2px solid ${s.selected ? v.purple : m}`, display: "flex", alignItems: "center", justifyContent: "center", background: s.selected ? `${v.purple}15` : "transparent", boxShadow: s.selected ? h.glow(v.purple) : "none", transition: "all 0.2s" }, children: s.selected && /* @__PURE__ */ l("div", { style: { width: 10, height: 10, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})` } }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: s.label })
        ] }, s.id);
      case "slider":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width }, children: [
          /* @__PURE__ */ S("div", { style: { height: 8, background: g.prominent, borderRadius: 4, position: "relative", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)" }, children: [
            /* @__PURE__ */ l("div", { style: { position: "absolute", left: 0, top: 0, height: "100%", width: `${s.value}%`, background: `linear-gradient(90deg, ${v.purple}, ${v.blue})`, borderRadius: 4, boxShadow: h.glow(v.purple) } }),
            /* @__PURE__ */ l("div", { style: { position: "absolute", top: -8, left: `${s.value}%`, transform: "translateX(-50%)", width: 24, height: 24, borderRadius: "50%", background: "#fff", border: `3px solid ${v.purple}`, boxShadow: "0 2px 10px rgba(0,0,0,0.3)" } })
          ] }),
          /* @__PURE__ */ S("div", { style: { textAlign: "right", fontSize: "0.8rem", color: v.purple, marginTop: 10, fontWeight: 600 }, children: [
            s.value,
            "%"
          ] })
        ] }, s.id);
      case "progress":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width }, children: /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 10, background: g.prominent, borderRadius: 5, overflow: "hidden", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)" }, children: /* @__PURE__ */ l("div", { style: { height: "100%", width: `${s.value}%`, background: `linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.cyan})`, borderRadius: 5, boxShadow: h.glow(v.purple) } }) }),
          /* @__PURE__ */ l("span", { style: { fontSize: "0.8rem", color: t.textSecondary, fontWeight: 600, whiteSpace: "nowrap" }, children: s.label || `${s.value}%` })
        ] }) }, s.id);
      case "avatar":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex", alignItems: "center", gap: 14 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.2rem", boxShadow: h.glow(v.purple), border: "3px solid rgba(255,255,255,0.2)" }, children: s.label ? s.label.charAt(0).toUpperCase() : "👤" }),
          s.label && /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 600 }, children: s.label })
        ] }, s.id);
      case "avatar-group":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex" }, children: [
          Array.from({ length: Math.min(s.count, 5) }).map((U, I) => /* @__PURE__ */ l("div", { style: { width: 36, height: 36, borderRadius: "50%", background: de[I % de.length], border: `2px solid ${e ? "#fff" : "#1a1a2e"}`, marginLeft: I > 0 ? -12 : 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 600 }, children: String.fromCharCode(65 + I) }, I)),
          s.count > 5 && /* @__PURE__ */ S("div", { style: { width: 36, height: 36, borderRadius: "50%", background: g.prominent, border: `2px solid ${e ? "#fff" : "#1a1a2e"}`, marginLeft: -12, display: "flex", alignItems: "center", justifyContent: "center", color: t.textSecondary, fontSize: "0.7rem" }, children: [
            "+",
            s.count - 5
          ] })
        ] }, s.id);
      case "image":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.high, border: `2px dashed ${f}`, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "2rem" }, children: "🖼️" }),
          s.label && /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.label })
        ] }, s.id);
      case "video":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: e ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.3)", border: `2px dashed ${f}`, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 60, height: 60, borderRadius: "50%", background: g.prominent, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ l("span", { style: { fontSize: "1.5rem", marginLeft: 4, color: t.textPrimary }, children: "▶" }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.label || "Video" })
        ] }, s.id);
      case "map":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: "rgba(20,184,166,0.1)", border: "2px dashed rgba(20,184,166,0.3)", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "2.5rem" }, children: "📍" }),
          /* @__PURE__ */ l("span", { style: { color: v.teal, fontSize: "0.8rem" }, children: s.label || "Map" })
        ] }, s.id);
      case "chart":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 8, padding: 16 }, children: /* @__PURE__ */ l("div", { style: { height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-around", gap: 8 }, children: [60, 85, 45, 90, 55, 70].map((U, I) => /* @__PURE__ */ l("div", { style: { width: "12%", height: `${U}%`, background: `linear-gradient(180deg, ${de[I % de.length]}, ${de[I % de.length]}88)`, borderRadius: "4px 4px 0 0" } }, I)) }) }, s.id);
      case "calendar":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 8, padding: 12 }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted }, children: "‹" }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.85rem" }, children: "December 2024" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted }, children: "›" })
          ] }),
          /* @__PURE__ */ S("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, textAlign: "center" }, children: [
            ["S", "M", "T", "W", "T", "F", "S"].map((U, I) => /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.7rem", padding: 4 }, children: U }, I)),
            Array.from({ length: 35 }).map((U, I) => {
              const O = I - 5, R = O === 15;
              return /* @__PURE__ */ l("div", { style: { padding: 6, fontSize: "0.75rem", color: O < 1 || O > 31 ? "transparent" : R ? "#fff" : t.textSecondary, background: R ? v.purple : "transparent", borderRadius: "50%" }, children: O < 1 || O > 31 ? "" : O }, I);
            })
          ] })
        ] }, s.id);
      case "table-row":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, display: "flex", borderBottom: `1px solid ${p}`, background: s.isHeader ? g.high : "transparent" }, children: s.cells.map((U, I) => /* @__PURE__ */ l("div", { style: { flex: 1, padding: "8px 12px", color: s.isHeader ? t.textPrimary : t.textSecondary, fontSize: "0.8rem", fontWeight: s.isHeader ? 600 : 400, borderRight: I < s.cells.length - 1 ? `1px solid ${p}` : "none" }, children: U }, I)) }, s.id);
      case "list-item":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { color: v.purple }, children: "•" }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "list-item-numbered":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ S("span", { style: { color: v.purple, fontWeight: 600, minWidth: 20 }, children: [
            s.number,
            "."
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "badge":
        const C = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber }[s.variant] || v.purple;
        return /* @__PURE__ */ l("div", { style: { ...u, display: "inline-flex", padding: "5px 12px", background: `linear-gradient(135deg, ${C}30, ${C}15)`, border: `1px solid ${C}50`, borderRadius: 20, color: C, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", boxShadow: `0 2px 8px ${C}25` }, children: s.label }, s.id);
      case "badge-group":
        const $ = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber };
        return /* @__PURE__ */ l("div", { style: { ...u, display: "flex", flexWrap: "wrap", gap: 8 }, children: s.badges.map((U, I) => {
          const O = $[U.variant] || v.purple;
          return /* @__PURE__ */ l("span", { style: { display: "inline-flex", padding: "5px 12px", background: `linear-gradient(135deg, ${O}30, ${O}15)`, border: `1px solid ${O}50`, borderRadius: 20, color: O, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", boxShadow: `0 2px 8px ${O}25` }, children: U.label }, I);
        }) }, s.id);
      case "alert":
        const E = { info: { color: v.blue, icon: "ℹ️" }, success: { color: v.green, icon: "✓" }, warning: { color: v.orange, icon: "⚠️" }, error: { color: v.red, icon: "✗" } }, M = E[s.variant] || E.info;
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, padding: "12px 16px", background: `${M.color}15`, border: `1px solid ${M.color}40`, borderRadius: 8, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.1rem" }, children: M.icon }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "stepper":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }, children: Array.from({ length: s.total }).map((U, I) => /* @__PURE__ */ S(Oc.Fragment, { children: [
          /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: I < s.current ? v.green : I === s.current - 1 ? v.purple : g.prominent, display: "flex", alignItems: "center", justifyContent: "center", color: I < s.current ? "#fff" : t.textSecondary, fontSize: "0.8rem", fontWeight: 600 }, children: I < s.current - 1 ? "✓" : I + 1 }),
          I < s.total - 1 && /* @__PURE__ */ l("div", { style: { width: 40, height: 2, background: I < s.current - 1 ? v.green : g.prominent } })
        ] }, I)) }, s.id);
      case "pagination":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex", alignItems: "center", gap: 4 }, children: [
          /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer" }, children: "‹" }),
          Array.from({ length: Math.min(s.total, 5) }).map((U, I) => {
            const O = I + 1;
            return /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: O === s.current ? v.purple : g.prominent, border: "none", borderRadius: 6, color: O === s.current ? "#fff" : t.textSecondary, cursor: "pointer", fontSize: "0.8rem" }, children: O }, I);
          }),
          s.total > 5 && /* @__PURE__ */ l("span", { style: { color: t.textMuted, padding: "0 8px" }, children: "..." }),
          s.total > 5 && /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer", fontSize: "0.8rem" }, children: s.total }),
          /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer" }, children: "›" })
        ] }, s.id);
      case "skeleton":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, background: e ? "linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 75%)" : "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)", backgroundSize: "200% 100%", borderRadius: 4, animation: "shimmer 1.5s infinite" } }, s.id);
      case "textarea":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, background: g.elevated, border: `1px solid ${f}`, borderRadius: 8, padding: 12 }, children: /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: s.label || "Enter text..." }) }, s.id);
      case "chat-message":
        const _ = s.isUser ? v.blue : g.prominent, P = s.isUser ? "flex-end" : "flex-start", A = s.isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px";
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, display: "flex", flexDirection: "column", alignItems: P }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "0.7rem", color: t.textMuted, marginBottom: 4 }, children: s.sender }),
          /* @__PURE__ */ l("div", { style: { maxWidth: "75%", background: _, padding: "10px 14px", borderRadius: A }, children: /* @__PURE__ */ l("span", { style: { color: s.isUser ? "#fff" : t.textPrimary, fontSize: "0.85rem", lineHeight: 1.4 }, children: s.message }) })
        ] }, s.id);
      case "button":
        const W = {
          primary: { bg: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "transparent", color: "#fff", shadow: h.glow(v.purple) },
          secondary: { bg: g.elevated, border: f, color: t.textPrimary, shadow: h.sm },
          ghost: { bg: "transparent", border: "transparent", color: v.purple, shadow: "none" },
          danger: { bg: `linear-gradient(135deg, ${v.red}, #dc2626)`, border: "transparent", color: "#fff", shadow: h.glow(v.red) },
          success: { bg: `linear-gradient(135deg, ${v.green}, #22c55e)`, border: "transparent", color: "#fff", shadow: h.glow(v.green) }
        }, B = W[s.variant] || W.primary;
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, background: B.bg, border: `2px solid ${B.border}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: B.shadow, transition: "all 0.2s" }, children: /* @__PURE__ */ l("span", { style: { color: B.color, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }, children: s.label }) }, s.id);
      case "icon-button":
        const L = { menu: "☰", close: "✕", settings: "⚙", user: "👤", search: "🔍", home: "🏠", edit: "✏️", delete: "🗑️", add: "+", more: "⋯" };
        return /* @__PURE__ */ l("div", { style: { ...u, width: 40, height: 40, background: g.prominent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: L[s.icon] || s.icon }) }, s.id);
      case "divider-label":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 1, background: d } }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: s.label }),
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 1, background: d } })
        ] }, s.id);
      case "rating":
        return /* @__PURE__ */ l("div", { style: { ...u, display: "flex", gap: 4 }, children: Array.from({ length: s.total }).map((U, I) => /* @__PURE__ */ l("span", { style: { color: I < s.filled ? v.amber : f, fontSize: "1.2rem" }, children: "★" }, I)) }, s.id);
      case "chip-group":
        return /* @__PURE__ */ l("div", { style: { ...u, display: "flex", gap: 8, flexWrap: "wrap" }, children: s.tags.map((U, I) => /* @__PURE__ */ l("span", { style: { padding: "6px 12px", background: `${de[I % de.length]}20`, border: `1px solid ${de[I % de.length]}`, borderRadius: 16, color: de[I % de.length], fontSize: "0.8rem" }, children: U }, I)) }, s.id);
      case "tooltip":
        return /* @__PURE__ */ l("div", { style: { ...u, width: 20, height: 20, borderRadius: "50%", background: g.prominent, display: "flex", alignItems: "center", justifyContent: "center", color: t.textSecondary, fontSize: "0.75rem", fontWeight: 600 }, children: "?" }, s.id);
      case "button-row":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, display: "flex", gap: 10, flexWrap: "wrap" }, children: s.buttons.map((U, I) => /* @__PURE__ */ l("div", { style: { padding: "10px 16px", background: de[I % de.length], borderRadius: 8, color: "#fff", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }, children: U }, I)) }, s.id);
      case "feed-item":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.75rem", fontWeight: 700 }, children: s.username.charAt(0).toUpperCase() }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ S("span", { style: { color: v.purple, fontWeight: 600, fontSize: "0.85rem" }, children: [
              "@",
              s.username
            ] }),
            /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "0.85rem", marginLeft: 6 }, children: s.text })
          ] })
        ] }, s.id);
      case "win-notification":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.5rem" }, children: s.emoji }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ S("span", { style: { color: v.green, fontWeight: 700, fontSize: "0.9rem" }, children: [
              "@",
              s.username
            ] }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", marginLeft: 6 }, children: s.text })
          ] })
        ] }, s.id);
      case "social-stats":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, display: "flex", alignItems: "center", gap: 20, padding: "8px 0" }, children: s.text.split(/\s{2,}/).map((U, I) => /* @__PURE__ */ l("span", { style: { color: I === 0 ? v.pink : t.textSecondary, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: 4 }, children: U }, I)) }, s.id);
      case "input":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, ...c.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 16px", boxShadow: `${h.sm}, inset 0 1px 2px rgba(0,0,0,0.1)`, transition: "border-color 0.2s, box-shadow 0.2s" }, children: /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem", fontWeight: 400 }, children: s.label || "Enter text..." }) }, s.id);
      case "checkbox":
        return /* @__PURE__ */ S("div", { style: { ...u, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 20, height: 20, border: `2px solid ${s.checked ? v.blue : m}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", background: s.checked ? v.blue : "transparent" }, children: s.checked && /* @__PURE__ */ l("span", { style: { color: "#fff", fontSize: "0.75rem" }, children: "✓" }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "separator":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, background: d } }, s.id);
      case "text":
        const j = {
          h1: { fontSize: "1.5rem", fontWeight: 800, color: t.textPrimary },
          h2: { fontSize: "1.2rem", fontWeight: 700, color: t.textPrimary },
          h3: { fontSize: "1rem", fontWeight: 600, color: t.textPrimary },
          bold: { fontSize: "0.9rem", fontWeight: 600, color: t.textPrimary },
          body: { fontSize: "0.9rem", fontWeight: 400, color: t.textSecondary }
        }, q = j[s.textType] || j.body;
        return /* @__PURE__ */ l("div", { style: { ...u, ...q }, children: a(s.label, { color: t.textPrimary }) }, s.id);
      case "hero":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: `linear-gradient(135deg, ${v.purple}20, ${v.blue}15, ${v.cyan}10)`, borderRadius: 16, padding: "48px 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", border: `1px solid ${v.purple}30`, boxShadow: `0 8px 32px ${v.purple}15` }, children: [
          /* @__PURE__ */ l("h1", { style: { color: t.textPrimary, fontSize: "2.2rem", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em", background: `linear-gradient(135deg, ${t.textPrimary}, ${v.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: s.title || "Welcome to Our Platform" }),
          s.subtitle && /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.6, marginBottom: 28 }, children: s.subtitle }),
          s.cta && /* @__PURE__ */ l("button", { style: { padding: "14px 32px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 20px ${v.purple}50`, transform: "translateY(0)", transition: "all 0.2s" }, children: s.cta })
        ] }, s.id);
      case "pricing-card":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: s.featured ? `linear-gradient(135deg, ${v.purple}15, ${v.blue}10)` : g.low, border: `${s.featured ? 2 : 1}px solid ${s.featured ? v.purple : d}`, borderRadius: 16, padding: "28px 24px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }, children: [
          s.featured && /* @__PURE__ */ l("div", { style: { position: "absolute", top: 12, right: -32, background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "4px 40px", transform: "rotate(45deg)" }, children: "POPULAR" }),
          /* @__PURE__ */ S("div", { style: { marginBottom: 20 }, children: [
            /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }, children: s.plan || "Pro Plan" }),
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "baseline", gap: 4 }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "2.5rem", fontWeight: 800 }, children: s.price || "$29" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: "/month" })
            ] })
          ] }),
          /* @__PURE__ */ l("div", { style: { flex: 1, borderTop: `1px solid ${p}`, paddingTop: 20 }, children: (s.features || ["Feature 1", "Feature 2", "Feature 3"]).map((U, I) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: t.textSecondary, fontSize: "0.9rem" }, children: [
            /* @__PURE__ */ l("span", { style: { color: v.green, fontSize: "1rem" }, children: "✓" }),
            U
          ] }, I)) }),
          /* @__PURE__ */ l("button", { style: { marginTop: 20, padding: "12px 20px", background: s.featured ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : g.prominent, border: s.featured ? "none" : `1px solid ${f}`, borderRadius: 10, color: s.featured ? "#fff" : t.textPrimary, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: s.cta || "Get Started" })
        ] }, s.id);
      case "feature-card":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column", gap: 16, transition: "all 0.2s", boxShadow: h.md }, children: [
          /* @__PURE__ */ l("div", { style: { width: 56, height: 56, borderRadius: 14, background: `${v.purple}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }, children: s.icon || "🚀" }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.1rem", fontWeight: 700 }, children: s.title || "Feature Title" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.6 }, children: s.description || "Feature description goes here with more details about this amazing capability." })
        ] }, s.id);
      case "stat-widget":
        const X = (x = s.trend) != null && x.startsWith("+") ? v.green : (b = s.trend) != null && b.startsWith("-") ? v.red : t.textMuted;
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 14, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem", fontWeight: 500 }, children: s.label || "Metric" }),
            s.trend && /* @__PURE__ */ l("span", { style: { color: X, fontSize: "0.8rem", fontWeight: 600, padding: "3px 8px", background: `${X}15`, borderRadius: 6 }, children: s.trend })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }, children: s.value || "1,234" }),
          /* @__PURE__ */ l("div", { style: { height: 32, display: "flex", alignItems: "flex-end", gap: 3, marginTop: 8 }, children: [40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((U, I) => /* @__PURE__ */ l("div", { style: { flex: 1, height: `${U}%`, background: `linear-gradient(180deg, ${v.purple}80, ${v.purple}40)`, borderRadius: 2 } }, I)) })
        ] }, s.id);
      case "login-form":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "36px 32px", display: "flex", flexDirection: "column", boxShadow: h.xl }, children: [
          /* @__PURE__ */ S("div", { style: { textAlign: "center", marginBottom: 28 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 56, height: 56, margin: "0 auto 16px", borderRadius: 14, background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }, children: "🔐" }),
            /* @__PURE__ */ l("h2", { style: { color: t.textPrimary, fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }, children: s.title || "Welcome Back" }),
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
        ] }, s.id);
      case "signup-form":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "36px 32px", display: "flex", flexDirection: "column", boxShadow: h.xl }, children: [
          /* @__PURE__ */ S("div", { style: { textAlign: "center", marginBottom: 24 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 56, height: 56, margin: "0 auto 16px", borderRadius: 14, background: `linear-gradient(135deg, ${v.green}, ${v.teal})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }, children: "✨" }),
            /* @__PURE__ */ l("h2", { style: { color: t.textPrimary, fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }, children: s.title || "Create Account" }),
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
        ] }, s.id);
      case "dashboard-widget":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 14, padding: "18px 20px", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "0.85rem", fontWeight: 500 }, children: s.title || "Widget" }),
            /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: s.icon || "📊" })
          ] }),
          /* @__PURE__ */ l("div", { style: { flex: 1, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "1.8rem", fontWeight: 800 }, children: s.value || "0" }) })
        ] }, s.id);
      case "bottom-nav":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, height: s.height, background: g.overlay, borderRadius: "20px 20px 0 0", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 16px", boxShadow: e ? "0 -4px 20px rgba(0,0,0,0.1)" : "0 -4px 20px rgba(0,0,0,0.3)", backdropFilter: "blur(10px)" }, children: (s.items || ["🏠 Home", "🔍 Search", "➕", "❤️ Likes", "👤 Profile"]).map((U, I) => {
          const O = I === 0, [R, D] = U.includes(" ") ? U.split(" ", 2) : [U, ""];
          return /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 12px", cursor: "pointer" }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: R === "➕" ? "1.8rem" : "1.3rem", opacity: O ? 1 : 0.6 }, children: R }),
            D && /* @__PURE__ */ l("span", { style: { fontSize: "0.65rem", color: O ? v.purple : t.textMuted, fontWeight: O ? 600 : 400 }, children: D })
          ] }, I);
        }) }, s.id);
      case "app-bar":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.overlay, borderRadius: "0 0 16px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", boxShadow: h.md, backdropFilter: "blur(10px)" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: "1.3rem", cursor: "pointer", color: t.textPrimary }, children: "←" }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "1.1rem", fontWeight: 600 }, children: s.title || "Screen Title" })
          ] }),
          /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: (s.actions || ["🔔", "👤"]).map((U, I) => /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem", cursor: "pointer" }, children: U }, I)) })
        ] }, s.id);
      case "fab":
        return /* @__PURE__ */ l("div", { style: { ...u, width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: `0 6px 24px ${v.purple}50`, fontSize: "1.5rem", color: "#fff", fontWeight: 300 }, children: s.icon || "+" }, s.id);
      case "toast":
        const re = { success: v.green, error: v.red, warning: v.orange, info: v.blue }, oe = { success: "✓", error: "✗", warning: "⚠", info: "ℹ" }, te = re[s.variant] || v.blue;
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, minHeight: 52, background: g.overlay, border: `1px solid ${te}40`, borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: `${h.lg}, 0 0 0 1px ${te}20`, backdropFilter: "blur(10px)" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 28, height: 28, borderRadius: "50%", background: `${te}20`, display: "flex", alignItems: "center", justifyContent: "center", color: te, fontSize: "0.9rem", fontWeight: 700 }, children: oe[s.variant] || "ℹ" }),
          /* @__PURE__ */ l("span", { style: { flex: 1, color: t.textPrimary, fontSize: "0.9rem" }, children: s.message || "Notification message" }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "1rem", cursor: "pointer" }, children: "×" })
        ] }, s.id);
      case "empty-state":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `2px dashed ${d}`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: 20, background: g.high, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: "2.5rem" }, children: "📭" }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }, children: s.title || "No items yet" }),
          /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.9rem", maxWidth: 280, lineHeight: 1.5, marginBottom: 20 }, children: s.description || "Get started by creating your first item" }),
          s.cta && /* @__PURE__ */ l("button", { style: { padding: "10px 24px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 8, color: "#fff", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: s.cta })
        ] }, s.id);
      case "error-state":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: `${v.red}08`, border: `1px solid ${v.red}30`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: 20, background: `${v.red}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: "2.5rem" }, children: "⚠️" }),
          /* @__PURE__ */ l("h3", { style: { color: v.red, fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }, children: s.title || "Something went wrong" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", maxWidth: 300, lineHeight: 1.5, marginBottom: 20 }, children: s.description || "We encountered an error. Please try again." }),
          s.cta && /* @__PURE__ */ l("button", { style: { padding: "10px 24px", background: v.red, border: "none", borderRadius: 8, color: "#fff", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: s.cta })
        ] }, s.id);
      case "loading-state":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 48, height: 48, border: `3px solid ${v.purple}30`, borderTopColor: v.purple, borderRadius: "50%", animation: "spin 1s linear infinite" } }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: s.text || "Loading..." }),
          /* @__PURE__ */ l("style", { children: "@keyframes spin { to { transform: rotate(360deg); } }" })
        ] }, s.id);
      case "testimonial":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "2.5rem", color: v.purple, opacity: 0.6, lineHeight: 1 }, children: '"' }),
          /* @__PURE__ */ l("p", { style: { flex: 1, color: t.textPrimary, fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic", marginTop: 8 }, children: s.quote || "This product has completely transformed how we work." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginTop: 20, paddingTop: 16, borderTop: `1px solid ${p}` }, children: [
            /* @__PURE__ */ l("div", { style: { width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }, children: (s.name || "J").charAt(0) }),
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.95rem" }, children: s.name || "Jane Doe" }),
              /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.title || "CEO, Company" })
            ] })
          ] })
        ] }, s.id);
      case "footer":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: e ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.3)", borderRadius: "16px 16px 0 0", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 24 }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }, children: (s.sections || [["Product", "Features", "Pricing"], ["Company", "About", "Blog"], ["Support", "Help", "Contact"]]).map((U, I) => /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.9rem" }, children: U[0] }),
            U.slice(1).map((O, R) => /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem", cursor: "pointer" }, children: O }, R))
          ] }, I)) }),
          /* @__PURE__ */ S("div", { style: { borderTop: `1px solid ${p}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.copyright || "© 2024 Company. All rights reserved." }),
            /* @__PURE__ */ l("div", { style: { display: "flex", gap: 16 }, children: ["twitter", "github", "linkedin"].map((U, I) => /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: 8, background: g.elevated, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "0.9rem", color: t.textSecondary }, children: U === "twitter" ? "𝕏" : U === "github" ? "⌗" : "in" }, I)) })
          ] })
        ] }, s.id);
      case "social-links":
        const ae = { twitter: "𝕏", github: "⌗", linkedin: "in", facebook: "f", instagram: "📷", youtube: "▶" };
        return /* @__PURE__ */ l("div", { style: { ...u, display: "flex", gap: 12 }, children: (s.links || ["twitter", "github", "linkedin"]).map((U, I) => /* @__PURE__ */ l("div", { style: { width: 40, height: 40, borderRadius: 10, background: g.elevated, border: `1px solid ${d}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1rem", color: t.textSecondary }, children: ae[U.toLowerCase()] || U.charAt(0).toUpperCase() }, I)) }, s.id);
      case "cta-section":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: `linear-gradient(135deg, ${v.purple}20, ${v.blue}15)`, border: `1px solid ${v.purple}30`, borderRadius: 20, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }, children: [
          /* @__PURE__ */ l("h2", { style: { color: t.textPrimary, fontSize: "1.8rem", fontWeight: 800, marginBottom: 12 }, children: s.title || "Ready to get started?" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "1rem", maxWidth: 480, marginBottom: 24 }, children: s.description || "Join thousands of satisfied customers today." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 12 }, children: [
            /* @__PURE__ */ l("button", { style: { padding: "14px 28px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }, children: s.cta || "Get Started" }),
            /* @__PURE__ */ l("button", { style: { padding: "14px 28px", background: "transparent", border: `1px solid ${m}`, borderRadius: 10, color: t.textPrimary, fontSize: "1rem", fontWeight: 600, cursor: "pointer" }, children: "Learn More" })
          ] })
        ] }, s.id);
      case "profile-card":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: "2rem", color: "#fff", fontWeight: 700 }, children: (s.name || "U").charAt(0) }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 700, marginBottom: 4 }, children: s.name || "User Name" }),
          /* @__PURE__ */ l("span", { style: { color: v.purple, fontSize: "0.85rem", marginBottom: 12 }, children: s.username || "@username" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5 }, children: s.bio || "Software developer and design enthusiast." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 24, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${p}`, width: "100%", justifyContent: "center" }, children: [
            /* @__PURE__ */ S("div", { style: { textAlign: "center" }, children: [
              /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 700, fontSize: "1.1rem" }, children: "1.2K" }),
              /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "Followers" })
            ] }),
            /* @__PURE__ */ S("div", { style: { textAlign: "center" }, children: [
              /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 700, fontSize: "1.1rem" }, children: "348" }),
              /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "Following" })
            ] })
          ] })
        ] }, s.id);
      case "activity-item":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${de[Math.floor(Math.random() * 5)]}, ${de[Math.floor(Math.random() * 5) + 1]})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 600, flexShrink: 0 }, children: "U" }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ l("p", { style: { color: t.textPrimary, fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }, children: s.text || "User performed an action" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: s.time || "2 hours ago" })
          ] })
        ] }, s.id);
      case "comment":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, display: "flex", alignItems: "flex-start", gap: 12, padding: "16px", background: g.low, borderRadius: 12, border: `1px solid ${p}` }, children: [
          /* @__PURE__ */ l("div", { style: { width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.9rem", fontWeight: 600, flexShrink: 0 }, children: (s.username || "U").charAt(0) }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.9rem" }, children: s.username || "Username" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: s.time || "1 hour ago" })
            ] }),
            /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }, children: s.text || "This is a comment..." }),
            /* @__PURE__ */ S("div", { style: { display: "flex", gap: 16, marginTop: 10 }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem", cursor: "pointer" }, children: "❤️ Like" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem", cursor: "pointer" }, children: "💬 Reply" })
            ] })
          ] })
        ] }, s.id);
      case "code-block":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.code, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden", fontFamily: "SF Mono, Monaco, Consolas, monospace" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: g.low, borderBottom: `1px solid ${p}` }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: s.language || "javascript" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem", cursor: "pointer" }, children: "📋 Copy" })
          ] }),
          /* @__PURE__ */ l("pre", { style: { margin: 0, padding: "16px", color: t.textSecondary, fontSize: "0.85rem", lineHeight: 1.6, overflow: "auto" }, children: /* @__PURE__ */ l("code", { children: s.code || `const greeting = "Hello, World!";
console.log(greeting);` }) })
        ] }, s.id);
      case "upload":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, height: s.height, background: g.low, border: `2px dashed ${f}`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, cursor: "pointer", transition: "all 0.2s" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 56, height: 56, borderRadius: 14, background: `${v.purple}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }, children: "📤" }),
          /* @__PURE__ */ S("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ l("p", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 600, marginBottom: 4 }, children: s.label || "Drag files here" }),
            /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: "or click to browse" })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "Max 10MB • PNG, JPG, PDF" })
        ] }, s.id);
      case "accordion":
        return /* @__PURE__ */ l("div", { style: { ...u, width: s.width, background: g.low, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden" }, children: (s.items || ["Section 1", "Section 2", "Section 3"]).map((U, I) => {
          var O;
          return /* @__PURE__ */ S("div", { style: { borderBottom: I < (((O = s.items) == null ? void 0 : O.length) || 3) - 1 ? `1px solid ${p}` : "none" }, children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", cursor: "pointer" }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 500 }, children: U }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, transform: I === 0 ? "rotate(180deg)" : "none", transition: "transform 0.2s" }, children: "▾" })
            ] }),
            I === 0 && /* @__PURE__ */ l("div", { style: { padding: "0 18px 14px", color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5 }, children: "Expanded content for this section with more details..." })
          ] }, I);
        }) }, s.id);
      case "data-table":
        return /* @__PURE__ */ S("div", { style: { ...u, width: s.width, background: g.low, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden" }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", background: g.high, borderBottom: `1px solid ${d}` }, children: ["Name", "Status", "Date", "Actions"].map((U, I) => /* @__PURE__ */ l("div", { style: { flex: I === 0 ? 2 : 1, padding: "12px 16px", color: t.textSecondary, fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }, children: U }, I)) }),
          Array.from({ length: s.rows || 3 }).map((U, I) => /* @__PURE__ */ S("div", { style: { display: "flex", borderBottom: I < (s.rows || 3) - 1 ? `1px solid ${p}` : "none" }, children: [
            /* @__PURE__ */ S("div", { style: { flex: 2, padding: "14px 16px", color: t.textPrimary, fontSize: "0.9rem" }, children: [
              "Item ",
              I + 1
            ] }),
            /* @__PURE__ */ l("div", { style: { flex: 1, padding: "14px 16px" }, children: /* @__PURE__ */ l("span", { style: { padding: "4px 10px", background: I === 0 ? `${v.green}20` : `${v.orange}20`, color: I === 0 ? v.green : v.orange, borderRadius: 6, fontSize: "0.75rem", fontWeight: 500 }, children: I === 0 ? "Active" : "Pending" }) }),
            /* @__PURE__ */ S("div", { style: { flex: 1, padding: "14px 16px", color: t.textMuted, fontSize: "0.85rem" }, children: [
              "Dec ",
              10 + I,
              ", 2024"
            ] }),
            /* @__PURE__ */ S("div", { style: { flex: 1, padding: "14px 16px", display: "flex", gap: 8 }, children: [
              /* @__PURE__ */ l("span", { style: { cursor: "pointer" }, children: "✏️" }),
              /* @__PURE__ */ l("span", { style: { cursor: "pointer" }, children: "🗑️" })
            ] })
          ] }, I))
        ] }, s.id);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "auto", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }" }),
    /* @__PURE__ */ l("div", { style: { position: "relative", minHeight: o, padding: 20 }, children: n.map(y) })
  ] });
}
function iw({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 50, y: 50 }), { components: c = [], connections: h = [] } = i, d = {
    service: { color: v.blue, icon: "⚙️" },
    database: { color: v.green, icon: "🗄️" },
    cache: { color: v.red, icon: "⚡" },
    queue: { color: v.orange, icon: "📬" },
    api: { color: v.purple, icon: "🔌" },
    component: { color: v.purple, icon: "📦" },
    default: { color: v.purple, icon: "📦" }
  }, p = ge(() => {
    const s = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(c.length))));
    return c.map((u, x) => ({
      ...u,
      id: u.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
      defaultX: 120 + x % s * 220,
      defaultY: 100 + Math.floor(x / s) * 160,
      style: d[u.type] || d.default
    }));
  }, [c]), f = (s) => e.getNodePosition(s.id, s.defaultX, s.defaultY), m = H(() => {
    const s = e.finishEditing();
    if (s.nodeId && s.newValue !== void 0 && n) {
      const u = p.find((x) => x.id === s.nodeId);
      u && u.label !== s.newValue && n(s.nodeId, u.label, s.newValue);
    }
  }, [e, p, n]);
  se(() => {
    const s = (u) => {
      const b = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? u.metaKey : u.ctrlKey;
      if (!e.editingNode) {
        if ((u.key === "Delete" || u.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          u.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (b && u.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          u.preventDefault(), e.copySelectedNodes(p);
          return;
        }
        if (b && u.key.toLowerCase() === "v" && e.clipboard && a) {
          u.preventDefault();
          const k = e.pasteNodes();
          k && a(k);
          return;
        }
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e, p, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const s = e.getNodesInSelectionBox(p.map((u) => ({ ...u, x: u.defaultX, y: u.defaultY })), e.selectionBox);
      s.length > 0 && e.setSelectedNodes(new Set(s));
    }
  }, [e.isSelecting, e.selectionBox, p, e]);
  const g = H((s) => {
    (s.target === e.canvasRef.current || s.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), y = ge(() => {
    if (!p.length) return { x: 0, y: 0, width: 400, height: 300 };
    const s = p.map((x) => x.defaultX), u = p.map((x) => x.defaultY);
    return { x: Math.min(...s) - 80, y: Math.min(...u) - 60, width: Math.max(...s) - Math.min(...s) + 280, height: Math.max(...u) - Math.min(...u) + 220 };
  }, [p]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "comp-arrow", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: v.purple }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((s, u) => {
            const x = p.find((B) => B.id === s.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), b = p.find((B) => B.id === s.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
            if (!x || !b) return null;
            const k = f(x), w = f(b), C = w.x - k.x, $ = w.y - k.y, E = Math.sqrt(C * C + $ * $) || 1, M = (k.x + w.x) / 2, _ = (k.y + w.y) / 2, P = -$ / E * 30, A = C / E * 30, W = `M ${k.x + C / E * 75} ${k.y + $ / E * 50} Q ${M + P} ${_ + A} ${w.x - C / E * 75} ${w.y - $ / E * 50}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: W, fill: "none", stroke: v.purple, strokeWidth: 2, strokeDasharray: "8,4", markerEnd: "url(#comp-arrow)", opacity: 0.8, style: { animation: "flowDash 1s linear infinite" } }),
              s.label && /* @__PURE__ */ l("text", { x: M + P, y: _ + A - 8, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: s.label })
            ] }, u);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: p.map((s) => {
        const u = f(s), x = e.dragging === s.id, b = e.selectedNodes.has(s.id);
        return /* @__PURE__ */ S("div", { onClick: (k) => e.handleNodeClick(k, s.id), onDoubleClick: (k) => e.handleNodeDoubleClick(k, s.id, s.label), onContextMenu: (k) => e.handleNodeContextMenu(k, s.id), onMouseDown: (k) => e.handleNodeMouseDown(k, s.id, u.x, u.y), onTouchStart: (k) => e.handleNodeTouchStart(k, s.id, u.x, u.y), style: { position: "absolute", left: u.x - 75, top: u.y - 50, width: 150, height: 100, background: `${s.style.color}15`, border: `2px solid ${b ? v.blue : s.style.color}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: x ? "grabbing" : "grab", boxShadow: b ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : x ? `0 0 30px ${s.style.color}50` : `0 4px 20px ${s.style.color}20`, transition: x ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "1.8rem", marginBottom: 6 }, children: s.style.icon }),
          e.editingNode === s.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (k) => e.setEditingValue(k), onFinish: m, style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center", padding: "0 8px" }, children: s.label })
        ] }, s.id);
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
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((s) => Math.min(s * 1.2, 2.5)), onZoomOut: () => e.setZoom((s) => Math.max(s * 0.8, 0.3)), onFit: () => e.fitToView(y), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(tt, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function ow({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 50, y: 50 }), { elements: c = [], relationships: h = [], boundaries: d = [] } = i, p = {
    person: { color: v.blue, icon: "👤", shape: "person" },
    system: { color: v.cyan, icon: "🏢", shape: "rect" },
    container: { color: v.green, icon: "📦", shape: "rect" },
    component: { color: v.purple, icon: "⚙️", shape: "rect" },
    database: { color: v.emerald, icon: "🗄️", shape: "cylinder" },
    external: { color: v.slate, icon: "🌐", shape: "rect" },
    default: { color: v.cyan, icon: "🏗️", shape: "rect" }
  }, f = [v.purple, v.blue, v.cyan, v.emerald, v.amber, v.pink], m = ge(() => {
    const b = /* @__PURE__ */ new Map(), k = [];
    c.forEach((_, P) => {
      _.boundary ? (b.has(_.boundary) || b.set(_.boundary, []), b.get(_.boundary).push({ ..._, origIndex: P })) : k.push({ ..._, origIndex: P });
    });
    const w = [];
    let C = 120;
    const $ = 40, E = 220, M = 160;
    if (k.length > 0) {
      const _ = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(k.length))));
      k.forEach((A, W) => {
        w.push({
          ...A,
          id: A.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
          defaultX: 150 + W % _ * E,
          defaultY: C + Math.floor(W / _) * M,
          style: p[A.type] || p.default
        });
      });
      const P = Math.ceil(k.length / Math.min(4, Math.max(2, Math.ceil(Math.sqrt(k.length)))));
      C += P * M + $;
    }
    return d.forEach((_, P) => {
      const A = b.get(_.id) || [];
      if (A.length === 0) return;
      const W = Math.min(3, Math.max(1, Math.ceil(Math.sqrt(A.length))));
      A.forEach((L, j) => {
        w.push({
          ...L,
          id: L.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
          defaultX: 150 + $ + j % W * E,
          defaultY: C + $ + 30 + Math.floor(j / W) * M,
          style: p[L.type] || p.default,
          boundaryId: _.id
        });
      });
      const B = Math.ceil(A.length / W);
      C += B * M + $ * 2 + 40;
    }), w;
  }, [c, d]), g = ge(() => d.map((b, k) => {
    const w = m.filter((M) => M.boundaryId === b.id);
    if (w.length === 0) return null;
    const C = w.map((M) => M.defaultX), $ = w.map((M) => M.defaultY), E = 30;
    return {
      id: b.id,
      name: b.name,
      x: Math.min(...C) - 85 - E,
      y: Math.min(...$) - 60 - E - 25,
      width: Math.max(...C) - Math.min(...C) + 170 + E * 2,
      height: Math.max(...$) - Math.min(...$) + 120 + E * 2 + 25,
      color: f[k % f.length]
    };
  }).filter(Boolean), [d, m]), y = (b) => e.getNodePosition(b.id, b.defaultX, b.defaultY), s = H(() => {
    const b = e.finishEditing();
    if (b.nodeId && b.newValue !== void 0 && n) {
      const k = m.find((w) => w.id === b.nodeId);
      k && k.label !== b.newValue && n(b.nodeId, k.label, b.newValue);
    }
  }, [e, m, n]);
  se(() => {
    const b = (k) => {
      const C = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? k.metaKey : k.ctrlKey;
      if (!e.editingNode) {
        if ((k.key === "Delete" || k.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          k.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (C && k.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          k.preventDefault(), e.copySelectedNodes(m);
          return;
        }
        if (C && k.key.toLowerCase() === "v" && e.clipboard && a) {
          k.preventDefault();
          const $ = e.pasteNodes();
          $ && a($);
          return;
        }
      }
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [e, m, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const b = e.getNodesInSelectionBox(m.map((k) => ({ ...k, x: k.defaultX, y: k.defaultY })), e.selectionBox);
      b.length > 0 && e.setSelectedNodes(new Set(b));
    }
  }, [e.isSelecting, e.selectionBox, m, e]);
  const u = H((b) => {
    (b.target === e.canvasRef.current || b.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), x = ge(() => {
    if (!m.length) return { x: 0, y: 0, width: 400, height: 300 };
    const b = m.map((w) => w.defaultX), k = m.map((w) => w.defaultY);
    return { x: Math.min(...b) - 100, y: Math.min(...k) - 80, width: Math.max(...b) - Math.min(...b) + 320, height: Math.max(...k) - Math.min(...k) + 260 };
  }, [m]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: u, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "c4-arrow", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: v.cyan }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((b, k) => {
            const w = m.find((q) => q.id === b.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), C = m.find((q) => q.id === b.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
            if (!w || !C) return null;
            const $ = y(w), E = y(C), M = E.x - $.x, _ = E.y - $.y, P = Math.sqrt(M * M + _ * _) || 1, A = ($.x + E.x) / 2, W = ($.y + E.y) / 2, B = -_ / P * 25, L = M / P * 25, j = `M ${$.x + M / P * 85} ${$.y + _ / P * 60} Q ${A + B} ${W + L} ${E.x - M / P * 85} ${E.y - _ / P * 60}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: j, fill: "none", stroke: v.cyan, strokeWidth: 2, strokeDasharray: "8,4", markerEnd: "url(#c4-arrow)", opacity: 0.8, style: { animation: "flowDash 1s linear infinite" } }),
              b.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: A + B - b.label.length * 3.5 - 6, y: W + L - 18, width: b.label.length * 7 + 12, height: 16, rx: 4, fill: "rgba(0,0,0,0.8)" }),
                /* @__PURE__ */ l("text", { x: A + B, y: W + L - 7, textAnchor: "middle", fill: v.cyan, fontSize: 10, children: b.label })
              ] })
            ] }, k);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: [
        g.map((b) => /* @__PURE__ */ l("div", { style: { position: "absolute", left: b.x, top: b.y, width: b.width, height: b.height, background: `${b.color}08`, border: `2px dashed ${b.color}50`, borderRadius: 16, pointerEvents: "none" }, children: /* @__PURE__ */ l("div", { style: { position: "absolute", top: 8, left: 12, fontSize: "0.75rem", fontWeight: 600, color: b.color, textTransform: "uppercase", letterSpacing: "0.5px", opacity: 0.8 }, children: b.name }) }, b.id)),
        m.map((b) => {
          const k = y(b), w = e.dragging === b.id, C = e.selectedNodes.has(b.id), $ = b.style.shape === "person";
          return /* @__PURE__ */ S("div", { onClick: (E) => e.handleNodeClick(E, b.id), onDoubleClick: (E) => e.handleNodeDoubleClick(E, b.id, b.label), onContextMenu: (E) => e.handleNodeContextMenu(E, b.id), onMouseDown: (E) => e.handleNodeMouseDown(E, b.id, k.x, k.y), onTouchStart: (E) => e.handleNodeTouchStart(E, b.id, k.x, k.y), style: { position: "absolute", left: k.x - 85, top: k.y - 60, width: 170, height: 120, background: `${b.style.color}15`, border: `2px solid ${C ? v.blue : b.style.color}`, borderRadius: $ ? "50% 50% 12px 12px" : b.style.shape === "cylinder" ? "50% / 15%" : 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: w ? "grabbing" : "grab", boxShadow: C ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : w ? `0 0 30px ${b.style.color}50` : `0 4px 20px ${b.style.color}20`, transition: w ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
            /* @__PURE__ */ l("div", { style: { fontSize: "2rem", marginBottom: 6 }, children: b.style.icon }),
            e.editingNode === b.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (E) => e.setEditingValue(E), onFinish: s, style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" }, children: b.label }),
            b.description && /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: t.textSecondary, textAlign: "center", padding: "0 8px", marginTop: 4 }, children: b.description })
          ] }, b.id);
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
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((b) => Math.min(b * 1.2, 2.5)), onZoomOut: () => e.setZoom((b) => Math.max(b * 0.8, 0.3)), onFit: () => e.fitToView(x), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(tt, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function aw({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const n = Pe({ x: 50, y: 50 }), { requirements: o = [], traces: a = [] } = i, e = {
    critical: v.red,
    high: v.orange,
    medium: v.amber,
    low: v.green
  }, c = ge(() => {
    const p = Math.min(3, Math.max(2, Math.ceil(Math.sqrt(o.length))));
    return o.map((f, m) => {
      var g;
      return {
        ...f,
        id: f.name.toLowerCase().replace(/[^a-z0-9]/g, "_"),
        defaultX: 150 + m % p * 280,
        defaultY: 100 + Math.floor(m / p) * 160,
        color: e[(g = f.priority) == null ? void 0 : g.toLowerCase()] || v.orange
      };
    });
  }, [o]), h = (p) => n.getNodePosition(p.id, p.defaultX, p.defaultY), d = ge(() => {
    if (!c.length) return { x: 0, y: 0, width: 400, height: 300 };
    const p = c.map((m) => m.defaultX), f = c.map((m) => m.defaultY);
    return { x: Math.min(...p) - 100, y: Math.min(...f) - 60, width: Math.max(...p) - Math.min(...p) + 360, height: Math.max(...f) - Math.min(...f) + 220 };
  }, [c]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: n.canvasRef, className: "canvas-bg", onMouseDown: n.handleCanvasMouseDown, onMouseMove: n.handleMouseMove, onMouseUp: n.handleMouseUp, onMouseLeave: n.handleMouseUp, onTouchStart: n.handleTouchStart, onTouchMove: n.handleTouchMove, onTouchEnd: n.handleTouchEnd, onWheel: n.handleWheel, style: { width: "100%", height: "100%", cursor: n.isPanning || n.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * n.zoom}px ${25 * n.zoom}px`, backgroundPosition: `${n.pan.x}px ${n.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "req-arrow", markerWidth: "10", markerHeight: "8", refX: "9", refY: "4", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 4, 0 8", fill: v.orange }) }) }),
        /* @__PURE__ */ l("g", { transform: `translate(${n.pan.x}, ${n.pan.y}) scale(${n.zoom})`, children: a.map((p, f) => {
          const m = c.find((k) => k.id === p.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), g = c.find((k) => k.id === p.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
          if (!m || !g) return null;
          const y = h(m), s = h(g), u = s.x - y.x, x = s.y - y.y, b = Math.sqrt(u * u + x * x) || 1;
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("line", { x1: y.x + u / b * 120, y1: y.y + x / b * 65, x2: s.x - u / b * 120, y2: s.y - x / b * 65, stroke: v.orange, strokeWidth: 2, strokeDasharray: "8,4", markerEnd: "url(#req-arrow)", opacity: 0.8, style: { animation: "flowDash 1s linear infinite" } }),
            p.label && /* @__PURE__ */ l("text", { x: (y.x + s.x) / 2, y: (y.y + s.y) / 2 - 8, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: p.label })
          ] }, f);
        }) })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`, transformOrigin: "0 0" }, children: c.map((p) => {
        const f = h(p), m = n.dragging === p.id;
        return /* @__PURE__ */ S("div", { onMouseDown: (g) => n.handleNodeMouseDown(g, p.id, f.x, f.y), onTouchStart: (g) => n.handleNodeTouchStart(g, p.id, f.x, f.y), style: { position: "absolute", left: f.x - 110, top: f.y - 55, width: 220, height: 110, background: `${p.color}15`, border: `2px solid ${p.color}`, borderRadius: 12, padding: 12, cursor: m ? "grabbing" : "grab", boxShadow: m ? `0 0 30px ${p.color}50` : `0 4px 20px ${p.color}20`, transition: m ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: "📋" }),
            /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem", fontWeight: 600, color: t.textPrimary }, children: p.name })
          ] }),
          p.text && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textSecondary, marginBottom: 6, lineHeight: 1.3 }, children: p.text }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: [
            p.priority && /* @__PURE__ */ l("span", { style: { fontSize: "0.65rem", padding: "2px 6px", background: `${p.color}30`, color: p.color, borderRadius: 4 }, children: p.priority }),
            p.risk && /* @__PURE__ */ S("span", { style: { fontSize: "0.65rem", padding: "2px 6px", background: "rgba(255,255,255,0.1)", color: t.textSecondary, borderRadius: 4 }, children: [
              "Risk: ",
              p.risk
            ] })
          ] })
        ] }, p.id);
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => n.setZoom((p) => Math.min(p * 1.2, 2.5)), onZoomOut: () => n.setZoom((p) => Math.max(p * 0.8, 0.3)), onFit: () => n.fitToView(d), onReset: n.resetView, zoom: n.zoom })
  ] });
}
function sw({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const n = Pe({ x: 50, y: 50 }), { nodes: o = [], links: a = [] } = i, e = 20, c = [v.purple, v.blue, v.cyan, v.emerald, v.green, v.amber, v.orange], h = ge(() => {
    if (!o.length) return { x: 0, y: 0, width: 800, height: 500 };
    const f = o.map((y) => y.x), m = o.map((y) => y.y), g = o.map((y) => y.height || 30);
    return {
      x: Math.min(...f) - 40,
      y: Math.min(...m) - 40,
      width: Math.max(...f) - Math.min(...f) + e + 80,
      height: Math.max(...m.map((y, s) => y + g[s])) - Math.min(...m) + 80
    };
  }, [o]), d = (f) => n.getNodePosition(f.id, f.x, f.y), p = (f) => {
    const m = o.find((C) => C.id === f.source), g = o.find((C) => C.id === f.target);
    if (!m || !g) return "";
    const y = d(m), s = d(g), u = y.x + e, x = y.y + (m.height || 30) / 2, b = s.x, k = s.y + (g.height || 30) / 2, w = (u + b) / 2;
    return `M ${u} ${x} C ${w} ${x}, ${w} ${k}, ${b} ${k}`;
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
                  const g = o.find((x) => x.id === f.source), y = o.find((x) => x.id === f.target), s = c[((g == null ? void 0 : g.layer) || 0) % c.length], u = c[((y == null ? void 0 : y.layer) || 0) % c.length];
                  return /* @__PURE__ */ S("linearGradient", { id: `sankey-gradient-${m}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ l("stop", { offset: "0%", stopColor: s, stopOpacity: "0.6" }),
                    /* @__PURE__ */ l("stop", { offset: "100%", stopColor: u, stopOpacity: "0.6" })
                  ] }, `grad-${m}`);
                }) }),
                /* @__PURE__ */ l("g", { transform: `translate(${n.pan.x}, ${n.pan.y}) scale(${n.zoom})`, children: a.map((f, m) => {
                  const g = p(f), y = f.thickness || 8;
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
          }, children: o.map((f, m) => {
            const g = d(f), y = n.dragging === f.id, s = c[(f.layer || 0) % c.length], u = f.height || 30;
            return /* @__PURE__ */ S(
              "div",
              {
                onMouseDown: (x) => n.handleNodeMouseDown(x, f.id, g.x, g.y),
                onTouchStart: (x) => n.handleNodeTouchStart(x, f.id, g.x, g.y),
                style: {
                  position: "absolute",
                  left: g.x,
                  top: g.y,
                  width: e,
                  height: u,
                  background: r ? ye.stroke : s,
                  borderRadius: 3,
                  cursor: y ? "grabbing" : "grab",
                  boxShadow: y ? `0 0 20px ${s}80` : `0 2px 10px ${s}40`,
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
                    color: r ? ye.stroke : t.textPrimary
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
      De,
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
function cw({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 50, y: 50 }), { lanes: c = [], nodes: h = [], edges: d = [] } = i, p = [v.purple, v.blue, v.cyan, v.emerald, v.green, v.amber], f = ge(() => {
    if (!h.length) return { x: 0, y: 0, width: 800, height: 400 };
    const s = h.map((k) => k.x), u = h.map((k) => k.y), x = h.map((k) => k.width || 140), b = h.map((k) => k.height || 50);
    return {
      x: Math.min(...s) - 200,
      y: Math.min(...u) - 40,
      width: Math.max(...s.map((k, w) => k + x[w])) - Math.min(...s) + 280,
      height: Math.max(...u.map((k, w) => k + b[w])) - Math.min(...u) + 80
    };
  }, [h]), m = (s) => e.getNodePosition(s.id, s.x, s.y), g = (s) => {
    const u = h.find((te) => te.id === s.source), x = h.find((te) => te.id === s.target);
    if (!u || !x) return "";
    const b = m(u), k = m(x), w = u.width || 140, C = u.height || 50, $ = x.width || 140, E = x.height || 50, M = b.x + w / 2, _ = b.y + C / 2, P = k.x + $ / 2, A = k.y + E / 2;
    let W, B, L, j;
    const q = P - M, X = A - _;
    Math.abs(q) > Math.abs(X) ? (W = q > 0 ? b.x + w : b.x, B = _, L = q > 0 ? k.x : k.x + $, j = A) : (W = M, B = X > 0 ? b.y + C : b.y, L = P, j = X > 0 ? k.y : k.y + E);
    const re = (W + L) / 2, oe = (B + j) / 2;
    return Math.abs(q) > Math.abs(X) ? `M ${W} ${B} L ${re} ${B} L ${re} ${j} L ${L} ${j}` : `M ${W} ${B} L ${W} ${oe} L ${L} ${oe} L ${L} ${j}`;
  }, y = (s) => {
    switch (s) {
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
                /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "swimlane-arrow", markerWidth: "10", markerHeight: "7", refX: "9", refY: "3.5", orient: "auto", children: /* @__PURE__ */ l("polygon", { points: "0 0, 10 3.5, 0 7", fill: t.textSecondary }) }) }),
                /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
                  c.map((s, u) => {
                    const b = p[u % p.length];
                    return /* @__PURE__ */ S("g", { children: [
                      /* @__PURE__ */ l(
                        "rect",
                        {
                          x: 0,
                          y: s.y,
                          width: 1200,
                          height: s.height,
                          fill: b,
                          fillOpacity: 0.05,
                          stroke: b,
                          strokeOpacity: 0.3,
                          strokeWidth: 1,
                          rx: 4
                        }
                      ),
                      u < c.length - 1 && /* @__PURE__ */ l(
                        "line",
                        {
                          x1: 0,
                          y1: s.y + s.height,
                          x2: 1200,
                          y2: s.y + s.height,
                          stroke: t.border,
                          strokeWidth: 1,
                          strokeDasharray: "5,5"
                        }
                      )
                    ] }, s.id);
                  }),
                  d.map((s) => {
                    const u = g(s);
                    return /* @__PURE__ */ S("g", { children: [
                      /* @__PURE__ */ l(
                        "path",
                        {
                          d: u,
                          fill: "none",
                          stroke: r ? ye.stroke : t.textSecondary,
                          strokeWidth: 2,
                          markerEnd: "url(#swimlane-arrow)",
                          opacity: 0.7
                        }
                      ),
                      s.label && /* @__PURE__ */ l(
                        "text",
                        {
                          x: 0,
                          y: 0,
                          fill: t.textSecondary,
                          fontSize: "0.7rem",
                          fontFamily: r ? "'Caveat', cursive" : "inherit",
                          textAnchor: "middle",
                          children: /* @__PURE__ */ l("textPath", { href: `#edge-path-${s.id}`, startOffset: "50%", children: s.label })
                        }
                      )
                    ] }, s.id);
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
            c.map((s, u) => {
              const x = p[u % p.length];
              return /* @__PURE__ */ l(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: 0,
                    top: s.y,
                    width: 160,
                    height: s.height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 16px",
                    background: `${x}15`,
                    borderRight: `2px solid ${x}50`,
                    borderRadius: "4px 0 0 4px"
                  },
                  children: /* @__PURE__ */ l("span", { style: {
                    color: r ? ye.stroke : x,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    fontFamily: r ? "'Caveat', cursive" : "inherit",
                    textAlign: "center",
                    wordBreak: "break-word"
                  }, children: s.name })
                },
                `lane-header-${s.id}`
              );
            }),
            h.map((s) => {
              const u = m(s), x = e.dragging === s.id, b = c.find((E) => E.id === s.lane), k = c.indexOf(b), w = p[k % p.length] || v.purple, C = y(s.type), $ = ["start", "end", "diamond"].includes(s.type);
              return /* @__PURE__ */ l(
                "div",
                {
                  onMouseDown: (E) => e.handleNodeMouseDown(E, s.id, u.x, u.y),
                  onTouchStart: (E) => e.handleNodeTouchStart(E, s.id, u.x, u.y),
                  style: {
                    position: "absolute",
                    left: u.x,
                    top: u.y,
                    width: $ ? C.width : s.width || 140,
                    height: $ ? C.height : s.height || 50,
                    background: C.background || (r ? ye.bg : `${w}20`),
                    border: `2px solid ${r ? ye.stroke : w}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: x ? "grabbing" : "grab",
                    boxShadow: x ? `0 0 20px ${w}50` : "0 2px 8px rgba(0,0,0,0.2)",
                    transition: x ? "none" : "box-shadow 0.2s",
                    touchAction: "none",
                    ...C
                  },
                  children: !$ && /* @__PURE__ */ l("span", { style: {
                    color: r ? ye.stroke : t.textPrimary,
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    fontFamily: r ? "'Caveat', cursive" : "inherit",
                    textAlign: "center",
                    padding: "4px 8px",
                    wordBreak: "break-word",
                    transform: s.type === "diamond" ? "rotate(-45deg)" : "none"
                  }, children: s.label })
                },
                s.id
              );
            })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l(
      De,
      {
        onZoomIn: () => e.setZoom((s) => Math.min(s * 1.2, 2.5)),
        onZoomOut: () => e.setZoom((s) => Math.max(s * 0.8, 0.3)),
        onFit: () => e.fitToView(f),
        onReset: e.resetView,
        zoom: e.zoom
      }
    )
  ] });
}
function lw({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 50, y: 50 }), { actors: c = [], useCases: h = [], relationships: d = [] } = i, { actorPositions: p, useCasePositions: f } = ge(() => {
    const w = /* @__PURE__ */ new Map();
    c.forEach((A) => w.set(A.label.toLowerCase(), [])), d.forEach((A) => {
      const W = A.from.toLowerCase(), B = A.to.toLowerCase();
      w.has(W) && w.get(W).push(B);
    });
    const C = [], $ = /* @__PURE__ */ new Set();
    let E = 120;
    const M = 110, _ = 450;
    return c.forEach((A, W) => {
      (w.get(A.label.toLowerCase()) || []).forEach((L) => {
        const j = h.find((q) => q.label.toLowerCase() === L);
        j && !$.has(j.id) && (C.push({ ...j, x: _, y: E, actorIndex: W }), $.add(j.id), E += M);
      });
    }), h.forEach((A) => {
      $.has(A.id) || (C.push({ ...A, x: _, y: E, actorIndex: -1 }), E += M);
    }), { actorPositions: c.map((A, W) => {
      const B = C.filter((j) => j.actorIndex === W);
      let L;
      if (B.length > 0) {
        const j = Math.min(...B.map((X) => X.y)), q = Math.max(...B.map((X) => X.y));
        L = (j + q) / 2;
      } else
        L = 150 + W * 180;
      return { ...A, x: 120, y: L };
    }), useCasePositions: C };
  }, [c, h, d]), m = (w) => e.getNodePosition(w.id, w.x, w.y), g = (w) => e.getNodePosition(w.id, w.x, w.y), y = ge(() => d.map((w, C) => {
    const $ = p.find((M) => M.label.toLowerCase() === w.from.toLowerCase()), E = f.find((M) => M.label.toLowerCase() === w.to.toLowerCase());
    return $ && E ? { id: `conn-${C}`, from: $, to: E } : null;
  }).filter(Boolean), [d, p, f]), s = ge(() => {
    if (f.length === 0) return { x: 280, y: 40, width: 400, height: 300 };
    const w = f.map((E) => E.x), C = f.map((E) => E.y), $ = 100;
    return {
      x: Math.min(...w) - $,
      y: Math.min(...C) - $ - 20,
      width: Math.max(...w) - Math.min(...w) + $ * 2 + 140,
      height: Math.max(...C) - Math.min(...C) + $ * 2 + 80
    };
  }, [f]), u = ge(() => {
    const w = [...p.map((P) => P.x), ...f.map((P) => P.x)], C = [...p.map((P) => P.y), ...f.map((P) => P.y)];
    if (w.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const $ = Math.min(...w) - 100, E = Math.max(...w) + 100, M = Math.min(...C) - 80, _ = Math.max(...C) + 80;
    return { x: $, y: M, width: E - $, height: _ - M };
  }, [p, f]), x = ge(() => [...p, ...f], [p, f]), b = H(() => {
    const w = e.finishEditing();
    if (w.nodeId && w.newValue !== void 0 && n) {
      const C = x.find(($) => $.id === w.nodeId);
      C && C.label !== w.newValue && n(w.nodeId, C.label, w.newValue);
    }
  }, [e, x, n]);
  se(() => {
    const w = (C) => {
      const E = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? C.metaKey : C.ctrlKey;
      if (!e.editingNode) {
        if ((C.key === "Delete" || C.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          C.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (E && C.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          C.preventDefault(), e.copySelectedNodes(x);
          return;
        }
        if (E && C.key.toLowerCase() === "v" && e.clipboard && a) {
          C.preventDefault();
          const M = e.pasteNodes();
          M && a(M);
          return;
        }
      }
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [e, x, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const w = e.getNodesInSelectionBox(x, e.selectionBox);
      w.length > 0 && e.setSelectedNodes(new Set(w));
    }
  }, [e.isSelecting, e.selectionBox, x, e]);
  const k = H((w) => {
    (w.target === e.canvasRef.current || w.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: `
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes flow { from { stroke-dashoffset: 20; } to { stroke-dashoffset: 0; } }
      ` }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: k, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
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
          /* @__PURE__ */ l("rect", { x: s.x, y: s.y, width: s.width, height: s.height, fill: "rgba(124, 58, 237, 0.03)", rx: 24 }),
          /* @__PURE__ */ l("rect", { x: s.x, y: s.y, width: s.width, height: s.height, fill: "none", stroke: "url(#uc-gradient)", strokeWidth: 2, rx: 24, opacity: "0.4" }),
          /* @__PURE__ */ l("text", { x: s.x + s.width / 2, y: s.y + 30, textAnchor: "middle", fill: v.purple, fontSize: 13, fontWeight: "600", fontFamily: "system-ui, sans-serif", opacity: "0.8", children: "System Boundary" }),
          y.map((w, C) => {
            const $ = m(w.from), E = g(w.to), M = $.x + 45, _ = $.y, P = E.x - 85, A = E.y, W = `M ${M} ${_} L ${P} ${A}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: W, fill: "none", stroke: v.purple, strokeWidth: 4, strokeLinecap: "round", opacity: "0.15" }),
              /* @__PURE__ */ l("path", { d: W, fill: "none", stroke: "url(#uc-gradient)", strokeWidth: 1.5, strokeLinecap: "round", opacity: "0.6" }),
              /* @__PURE__ */ l("path", { d: W, fill: "none", stroke: "rgba(255,255,255,0.8)", strokeWidth: 1.5, strokeLinecap: "round", strokeDasharray: "2,10", style: { animation: "flow 0.6s linear infinite", animationDelay: `${C * 0.15}s` } })
            ] }, w.id);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: [
        p.map((w) => {
          const C = m(w), $ = e.dragging === w.id, E = e.selectedNodes.has(w.id);
          return /* @__PURE__ */ S("div", { onClick: (M) => e.handleNodeClick(M, w.id), onDoubleClick: (M) => e.handleNodeDoubleClick(M, w.id, w.label), onContextMenu: (M) => e.handleNodeContextMenu(M, w.id), onMouseDown: (M) => e.handleNodeMouseDown(M, w.id, C.x, C.y), onTouchStart: (M) => e.handleNodeTouchStart(M, w.id, C.x, C.y), style: { position: "absolute", left: C.x - 45, top: C.y - 55, width: 90, display: "flex", flexDirection: "column", alignItems: "center", cursor: $ ? "grabbing" : "grab", transition: $ ? "none" : "transform 0.2s", transform: $ ? "scale(1.05)" : "scale(1)", touchAction: "none" }, children: [
            /* @__PURE__ */ l("div", { style: { width: 70, height: 70, borderRadius: "50%", background: `linear-gradient(135deg, ${v.pink}35, ${v.purple}15)`, border: `2px solid ${E ? v.blue : v.pink}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: Ze(v.pink, $, E), transition: "box-shadow 0.2s" }, children: /* @__PURE__ */ S("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none", children: [
              /* @__PURE__ */ l("circle", { cx: "12", cy: "8", r: "4", stroke: v.pink, strokeWidth: "1.5", fill: `${v.pink}20` }),
              /* @__PURE__ */ l("path", { d: "M4 20c0-4 4-6 8-6s8 2 8 6", stroke: v.pink, strokeWidth: "1.5", strokeLinecap: "round", fill: "none" })
            ] }) }),
            /* @__PURE__ */ l("div", { style: { marginTop: 10, padding: "4px 12px", background: "rgba(0,0,0,0.4)", borderRadius: 12, backdropFilter: "blur(8px)" }, children: e.editingNode === w.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (M) => e.setEditingValue(M), onFinish: b, style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary }, children: w.label }) })
          ] }, w.id);
        }),
        f.map((w) => {
          const C = g(w), $ = e.dragging === w.id, E = e.selectedNodes.has(w.id);
          return /* @__PURE__ */ l("div", { onClick: (M) => e.handleNodeClick(M, w.id), onDoubleClick: (M) => e.handleNodeDoubleClick(M, w.id, w.label), onContextMenu: (M) => e.handleNodeContextMenu(M, w.id), onMouseDown: (M) => e.handleNodeMouseDown(M, w.id, C.x, C.y), onTouchStart: (M) => e.handleNodeTouchStart(M, w.id, C.x, C.y), style: { position: "absolute", left: C.x - 80, top: C.y - 35, width: 160, height: 70, background: `linear-gradient(135deg, ${v.blue}25, ${v.purple}15)`, border: `1.5px solid ${E ? v.blue : "rgba(14, 165, 233, 0.5)"}`, borderRadius: 35, display: "flex", alignItems: "center", justifyContent: "center", cursor: $ ? "grabbing" : "grab", boxShadow: Ze(v.blue, $, E), backdropFilter: "blur(8px)", transition: $ ? "none" : "box-shadow 0.2s, transform 0.2s", transform: $ ? "scale(1.03)" : "scale(1)", touchAction: "none" }, children: e.editingNode === w.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (M) => e.setEditingValue(M), onFinish: b, style: { fontSize: r ? 14 : 12, fontWeight: 500, color: r ? ye.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 500, color: r ? ye.stroke : t.textPrimary, textAlign: "center", padding: "0 12px", lineHeight: 1.3 }, children: w.label }) }, w.id);
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
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((w) => Math.min(w * 1.15, 3)), onZoomOut: () => e.setZoom((w) => Math.max(w * 0.85, 0.2)), onFit: () => e.fitToView(u), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(tt, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function dw({ type: i, data: t, source: r, theme: n = "dark", sketchMode: o = !1, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d, onLinkedTemplateClick: p }) {
  var g;
  const f = we[n] || we.dark, m = ge(() => {
    if (t) return t;
    if (!r) return null;
    const y = O2;
    switch (i) {
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
  }, [i, t, r]);
  if (!m) return /* @__PURE__ */ l("div", { style: { padding: 20, color: "#888" }, children: "No data" });
  switch (i) {
    case "mindmap":
    case "wbs":
      return /* @__PURE__ */ l(F2, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "erd":
      return /* @__PURE__ */ l(Y2, { tables: Array.isArray(m) ? m : [], theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "architecture":
      return /* @__PURE__ */ l(U2, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "flowchart":
      return /* @__PURE__ */ l(pc, { nodes: m.nodes || [], edges: m.edges || [], theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d });
    case "state":
      return /* @__PURE__ */ l(pc, { nodes: m.states || [], edges: ((g = m.transitions) == null ? void 0 : g.map((y, s) => ({ id: `t-${s}`, source: y.from, target: y.to, label: y.event }))) || [], theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d });
    case "activity":
      return /* @__PURE__ */ l(pc, { nodes: m.nodes || [], edges: m.edges || [], theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d });
    case "journey":
      return /* @__PURE__ */ l(j2, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onLinkedTemplateClick: p });
    case "timeline":
      return /* @__PURE__ */ l(Q2, { events: m, theme: f, sketchMode: o });
    case "sequence":
      return /* @__PURE__ */ l(K2, { data: m, theme: f, sketchMode: o });
    case "orgchart":
      return /* @__PURE__ */ l(X2, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "network":
      return /* @__PURE__ */ l(H2, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "gantt":
      return /* @__PURE__ */ l(J2, { tasks: m, theme: f, sketchMode: o });
    case "deployment":
      return /* @__PURE__ */ l(rw, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "pie":
      return /* @__PURE__ */ l(ew, { data: m, theme: f, sketchMode: o });
    case "quadrant":
      return /* @__PURE__ */ l(tw, { data: m, theme: f, sketchMode: o });
    case "git":
      return /* @__PURE__ */ l(Z2, { data: m, theme: f, sketchMode: o });
    case "wireframe":
      return /* @__PURE__ */ l(nw, { data: m, theme: f, sketchMode: o });
    case "class":
      return /* @__PURE__ */ l(V2, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "usecase":
      return /* @__PURE__ */ l(lw, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "component":
      return /* @__PURE__ */ l(iw, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "c4":
      return /* @__PURE__ */ l(ow, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    case "requirement":
      return /* @__PURE__ */ l(aw, { data: m, theme: f, sketchMode: o });
    case "sankey":
      return /* @__PURE__ */ l(sw, { data: m, theme: f, sketchMode: o });
    case "swimlane":
      return /* @__PURE__ */ l(cw, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c });
    default:
      return /* @__PURE__ */ S("div", { style: { padding: 20, color: "#888" }, children: [
        "Unknown: ",
        i
      ] });
  }
}
function uw({ isOpen: i, onClose: t }) {
  if (!i) return null;
  const r = Vv(), n = typeof navigator < "u" && /Mac|iPhone|iPad|iPod/.test(navigator.platform);
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
          onClick: (o) => o.stopPropagation(),
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
            Object.entries(r).map(([o, a]) => /* @__PURE__ */ S("div", { style: { marginBottom: 20 }, children: [
              /* @__PURE__ */ l("h3", { style: {
                margin: "0 0 8px 0",
                fontSize: "0.7rem",
                color: v.purple,
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }, children: o }),
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
            ] }, o)),
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
function pw({ isOpen: i, onClose: t, onSelect: r, onRemove: n }) {
  const [o, a] = Y([]);
  return se(() => {
    i && a(qc());
  }, [i]), i ? /* @__PURE__ */ l(
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
            o.length === 0 ? /* @__PURE__ */ S("div", { style: { padding: 40, textAlign: "center", color: "#666" }, children: [
              /* @__PURE__ */ l("div", { style: { fontSize: 48, marginBottom: 16 }, children: "📭" }),
              /* @__PURE__ */ l("p", { style: { margin: 0 }, children: "No recent diagrams" }),
              /* @__PURE__ */ l("p", { style: { margin: "8px 0 0 0", fontSize: "0.75rem" }, children: "Save a diagram to see it here" })
            ] }) : /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, children: o.map((e, c) => {
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
                  onMouseEnter: (p) => p.currentTarget.style.background = "rgba(124,58,237,0.1)",
                  onMouseLeave: (p) => p.currentTarget.style.background = "rgba(255,255,255,0.03)",
                  children: [
                    /* @__PURE__ */ l("div", { style: { fontSize: 24 }, children: ((d = (h = tr[e.type]) == null ? void 0 : h.title) == null ? void 0 : d.split(" ")[0]) || "📄" }),
                    /* @__PURE__ */ S("div", { style: { flex: 1, minWidth: 0 }, children: [
                      /* @__PURE__ */ l("div", { style: { color: "#e0e0e0", fontWeight: 600, fontSize: "0.9rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: e.name }),
                      /* @__PURE__ */ S("div", { style: { color: "#666", fontSize: "0.7rem", display: "flex", gap: 8 }, children: [
                        /* @__PURE__ */ l("span", { children: e.type }),
                        /* @__PURE__ */ l("span", { children: "•" }),
                        /* @__PURE__ */ l("span", { children: cv(e.savedAt) })
                      ] })
                    ] }),
                    /* @__PURE__ */ l(
                      "button",
                      {
                        onClick: (p) => {
                          p.stopPropagation(), n(e.name), a((f) => f.filter((m) => m.name !== e.name));
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
                `${e.name}-${c}`
              );
            }) }),
            /* @__PURE__ */ l("div", { style: { marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: 8 }, children: /* @__PURE__ */ l(
              "button",
              {
                onClick: async () => {
                  try {
                    const e = await ov();
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
function hw({ isOpen: i, onClose: t, onImport: r }) {
  const [n, o] = Y(""), [a, e] = Y(""), [c, h] = Y(null);
  se(() => {
    i || (o(""), e(""), h(null));
  }, [i]);
  const d = () => {
    try {
      e("");
      const f = f2(n);
      h(f);
    } catch (f) {
      e(f.message), h(null);
    }
  }, p = () => {
    c && (r(c.type, c.source), t());
  };
  return i ? /* @__PURE__ */ l(
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
                  o(f.target.value), e(""), h(null);
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
            c && /* @__PURE__ */ S("div", { style: { marginTop: 16 }, children: [
              /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }, children: /* @__PURE__ */ S("span", { style: { color: v.green, fontSize: "0.85rem" }, children: [
                "✅ Detected: ",
                /* @__PURE__ */ l("strong", { children: c.type })
              ] }) }),
              /* @__PURE__ */ l("div", { style: {
                background: "rgba(0,0,0,0.3)",
                borderRadius: 8,
                padding: 12,
                border: "1px solid rgba(16,185,129,0.3)",
                maxHeight: 150,
                overflow: "auto"
              }, children: /* @__PURE__ */ l("pre", { style: { margin: 0, color: "#a78bfa", fontSize: "0.7rem", fontFamily: "Monaco, monospace", whiteSpace: "pre-wrap" }, children: c.source }) })
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
                  onClick: p,
                  disabled: !c,
                  style: {
                    flex: 1,
                    padding: "10px 16px",
                    background: c ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${c ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.1)"}`,
                    borderRadius: 8,
                    color: c ? v.green : "#666",
                    cursor: c ? "pointer" : "not-allowed",
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
function fw({ isOpen: i, onClose: t, diagramType: r, diagramSource: n }) {
  const [o, a] = Y(""), [e, c] = Y(""), [h, d] = Y(!1);
  se(() => {
    if (i && r && n)
      try {
        const m = $2(r, n);
        a(m), c("");
      } catch (m) {
        a(""), c(m.message);
      }
  }, [i, r, n]), se(() => {
    i || d(!1);
  }, [i]);
  const p = async () => {
    try {
      await M2(o), d(!0), setTimeout(() => d(!1), 2e3);
    } catch (m) {
      c("Failed to copy: " + m.message);
    }
  }, f = () => {
    E2(o, `ddflow-${r}`);
  };
  return i ? /* @__PURE__ */ l(
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
            ] }) }) : /* @__PURE__ */ S(ut, { children: [
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
              }, children: /* @__PURE__ */ l("pre", { style: { margin: 0, color: "#a78bfa", fontSize: "0.75rem", fontFamily: "Monaco, monospace", whiteSpace: "pre-wrap" }, children: o }) }),
              /* @__PURE__ */ S("div", { style: { marginTop: 16, display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: p,
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
  architecture: { title: "🏗️ Architecture", source: `# Modern Cloud Architecture
[users] Web App, Mobile App
[cdn] CloudFront CDN
[lb] Load Balancer
[gateway] API Gateway

boundary "Backend Services" {
[microservices] Auth Service, User Service, Order Service
[worker] Background Worker
}

boundary "Data Layer" {
[database] PostgreSQL: Primary DB
[cache] Redis: Session cache
[queue] Kafka: Event stream
}

[monitoring] Prometheus, Grafana

# Connections
Web App -> CloudFront CDN
Mobile App -> Load Balancer
CloudFront CDN -> Load Balancer
Load Balancer -> API Gateway
API Gateway -> Auth Service
API Gateway -> User Service
API Gateway -> Order Service
Auth Service --> Redis: sessions
User Service -> PostgreSQL
Order Service -> PostgreSQL
Order Service ->> Kafka: events
Background Worker -> Kafka
Prometheus --> Auth Service: metrics
Prometheus --> User Service: metrics` },
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
  c4: { title: "🏛️ C4", source: `[person] User: App customer
[system] WebApp: Main application
[container] API: REST Backend
[database] DB: PostgreSQL
[external] Email: SendGrid

User -> WebApp: Uses
WebApp -> API: Calls
API -> DB: Reads/Writes
API -> Email: Sends` },
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
function yw() {
  var hr, fr, gr, mr, yr, br, Ht, xr, vr, wr, Sr, kr, Cr;
  const [i, t] = Y("journey"), [r, n] = Y(""), [o, a] = Y(!1), [e, c] = Y(!1), [h, d] = Y(!1), [p, f] = Y(!1), [m, g] = Y(!1), [y, s] = Y(!1), [u, x] = Y(!1), [b, k] = Y(!1), [w, C] = Y(!1), [$, E] = Y(null), [M, _] = Y(!1), [P, A] = Y(!1), [W, B] = Y(!1), [L, j] = Y(!1), [q, X] = Y(!1), [re, oe] = Y(!1), [te, ae] = Y(() => yg()), [U, I] = Y("Untitled Diagram"), [O, R] = Y(() => av()), [D, z] = Y({ loading: !1, message: "" }), [V, Q] = Y(() => I2()), [Z, ke] = Y(() => T2()), Ce = we[V] || we.dark, J = ge(() => ({
    ...Ce,
    // Override accent-related styles with custom colors
    buttonActiveBg: `${te.accentPrimary}30`,
    gridColor: `${te.accentPrimary}08`,
    logoGradient: `linear-gradient(135deg, ${Ce.name === "dark" ? "#fff" : "#1e293b"}, ${te.accentPrimary})`
  }), [Ce, te]), xe = _e(null), le = _e(null), Le = _e(!1), ce = tr[i], pe = o && r ? r : ce.source, {
    state: Ne,
    canUndo: Ke,
    canRedo: qe,
    undo: Be,
    redo: Ie,
    pushState: Me,
    isApplying: rt
  } = R2({
    type: i,
    source: r || ce.source,
    diagramName: U
  }), st = _e(null);
  se(() => (st.current = _2((F, ie, he) => {
    !Le.current && !rt() && Me({ type: ie, source: F, diagramName: he }, "source");
  }, 1e3), () => {
    var F;
    return (F = st.current) == null ? void 0 : F.cancel();
  }), [Me, rt]);
  const St = H((F) => {
    var ie;
    n(F), (ie = st.current) == null || ie.call(st, F, i, U);
  }, [i, U]), ct = H((F) => {
    var ie;
    (ie = st.current) == null || ie.cancel(), t(F), n(""), Me({ type: F, source: "", diagramName: U }, "type");
  }, [Me, U]);
  H((F) => {
    I(F);
  }, []);
  const qt = H((F, ie, he) => {
    if (!pe || !ie || !he) return;
    const Ue = ie.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), Pt = new RegExp(`\\b${Ue}\\b`, "g"), nt = pe.replace(Pt, he);
    nt !== pe && (n(nt), Me({ type: i, source: nt, diagramName: U }, "label-edit"));
  }, [pe, i, U, Me]), kt = H((F) => {
    if (!pe || !F || F.length === 0) return;
    let ie = pe;
    F.forEach((he) => {
      ie = ie.split(`
`).filter((nt) => {
        const He = nt.trim();
        return !(He.startsWith(he + ":") || He.startsWith(he + " ") || He.match(new RegExp(`^\\[${he}\\]`)) || He.match(new RegExp(`^${he}\\s*->`)) || He.match(new RegExp(`->\\s*${he}\\s*$`)));
      }).join(`
`);
    }), ie !== pe && (n(ie), Me({ type: i, source: ie, diagramName: U }, "delete-nodes"));
  }, [pe, i, U, Me]), Ct = H((F) => {
    if (!F || F.length === 0) return;
    const ie = F.map((Ue) => {
      const Pt = Ue.type ? `[${Ue.type}] ` : "";
      return `${Ue.id}: ${Pt}${Ue.label}`;
    }), he = pe + `
` + ie.join(`
`);
    n(he), Me({ type: i, source: he, diagramName: U }, "paste-nodes");
  }, [pe, i, U, Me]), ft = H((F, ie, he) => {
    if (!pe) return;
    const nt = pe.split(`
`).map((He) => {
      if (He.includes("->")) {
        if (ie && He.includes(ie))
          return He.replace(ie, he);
        if (!ie && he) {
          const $r = He.trim();
          if (!$r.includes(":") && !$r.includes("|"))
            return He + " : " + he;
        }
      }
      return He;
    }).join(`
`);
    nt !== pe && (n(nt), Me({ type: i, source: nt, diagramName: U }, "edge-label"));
  }, [pe, i, U, Me]), Ge = H((F, ie) => {
    if (!F || !ie) return;
    const he = `${F} -> ${ie}`, Ue = pe + `
` + he;
    n(Ue), Me({ type: i, source: Ue, diagramName: U }, "create-connection");
  }, [pe, i, U, Me]), Fe = H((F, ie) => {
    const he = O1(F);
    he ? (t(he.type), n(he.source), I(he.name), a(!0), Me({ type: he.type, source: he.source, diagramName: he.name }, "linked-template")) : console.warn(`Template not found: ${F}`);
  }, [Me]);
  se(() => {
    rt() && (Le.current = !0, Ne.type !== i && t(Ne.type), Ne.source !== r && n(Ne.source), Ne.diagramName !== U && I(Ne.diagramName), setTimeout(() => {
      Le.current = !1;
    }, 0));
  }, [Ne, rt]), se(() => {
    const F = (ie) => {
      (/Mac|iPhone|iPad|iPod/.test(navigator.platform) ? ie.metaKey : ie.ctrlKey) && ie.key.toLowerCase() === "z" && (ie.preventDefault(), ie.shiftKey ? Ie() : Be());
    };
    return window.addEventListener("keydown", F), () => window.removeEventListener("keydown", F);
  }, [Be, Ie]);
  const $t = ge(() => ({
    HELP: () => d(!0),
    HELP_ALT: () => d(!0),
    TOGGLE_EDITOR: () => a((F) => !F),
    TOGGLE_AI_CHAT: () => c((F) => !F),
    EXPORT_PNG: () => cr(),
    EXPORT_SVG: () => lr(),
    COPY_CLIPBOARD: () => dr()
  }), []);
  Kv($t, !h), se(() => {
    const F = rv();
    F && tr[F.type] && (t(F.type), n(F.source), F.name && I(F.name), a(!0));
  }, []), se(() => {
    if (O)
      return le.current && clearTimeout(le.current), le.current = setTimeout(() => {
        const F = r || ce.source;
        Xh(i, F, U);
      }, 1e3), () => {
        le.current && clearTimeout(le.current);
      };
  }, [i, r, U, O, ce.source]);
  const Ye = () => {
    const F = r || ce.source;
    Xh(i, F, U), z({ loading: !1, message: "Saved!" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
  }, nn = () => {
    const F = r || ce.source, ie = U.replace(/[^a-z0-9]/gi, "_").toLowerCase() || "diagram";
    iv(i, F, ie), z({ loading: !1, message: "File exported!" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
  }, on = (F) => {
    tr[F.type] && (t(F.type), n(F.source), I(F.name || "Recent Diagram"), a(!0));
  }, an = () => {
    const F = !O;
    R(F), sv(F), z({ loading: !1, message: F ? "Auto-save enabled" : "Auto-save disabled" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
  }, sn = () => {
    const F = V === "dark" ? "light" : "dark";
    Q(F), A2(F), z({ loading: !1, message: `${F === "dark" ? "Dark" : "Light"} mode` }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
  }, cn = () => {
    const F = !Z;
    ke(F), P2(F), z({ loading: !1, message: F ? "Sketch mode" : "Clean mode" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
  }, ln = (F) => {
    const he = {
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
    }[F.template];
    he && tr[he] ? (t(he), n(F.dsl), a(!0)) : (n(F.dsl), a(!0)), oe(!1), z({ loading: !1, message: `Loaded ${F.label} template` }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
  }, cr = async () => {
    if (xe.current) {
      z({ loading: !0, message: "Exporting PNG..." });
      try {
        await Uv(xe.current, `ddflow-${i}`), z({ loading: !1, message: "PNG exported!" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
      } catch (F) {
        z({ loading: !1, message: `Error: ${F.message}` }), setTimeout(() => z({ loading: !1, message: "" }), 3e3);
      }
    }
  }, lr = () => {
    if (xe.current) {
      z({ loading: !0, message: "Exporting SVG..." });
      try {
        jv(xe.current, `ddflow-${i}`), z({ loading: !1, message: "SVG exported!" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
      } catch (F) {
        z({ loading: !1, message: `Error: ${F.message}` }), setTimeout(() => z({ loading: !1, message: "" }), 3e3);
      }
    }
  }, dr = async () => {
    if (xe.current) {
      z({ loading: !0, message: "Copying to clipboard..." });
      try {
        await Gv(xe.current), z({ loading: !1, message: "Copied to clipboard!" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
      } catch (F) {
        z({ loading: !1, message: `Error: ${F.message}` }), setTimeout(() => z({ loading: !1, message: "" }), 3e3);
      }
    }
  }, dn = () => {
    if (xe.current) {
      z({ loading: !0, message: "Opening print dialog..." });
      try {
        Yv(xe.current), z({ loading: !1, message: "" });
      } catch (F) {
        z({ loading: !1, message: `Error: ${F.message}` }), setTimeout(() => z({ loading: !1, message: "" }), 3e3);
      }
    }
  }, ur = (F, ie) => {
    t(F), n(ie), a(!0);
  }, pr = H((F) => {
    const he = (r || ce.source).trim() + `
` + F;
    St(he), a(!0);
  }, [r, ce.source, St]), un = H(async () => {
    if (!Ot()) {
      z({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => z({ loading: !1, message: "" }), 3e3);
      return;
    }
    _(!0), E({ type: "explain", content: null, loading: !0 });
    try {
      const F = await P1(pe, i);
      E({ type: "explain", content: F, loading: !1 });
    } catch (F) {
      E({ type: "explain", content: `Error: ${F.message}`, loading: !1 });
    } finally {
      _(!1);
    }
  }, [pe, i]), pn = H(async () => {
    if (!Ot()) {
      z({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => z({ loading: !1, message: "" }), 3e3);
      return;
    }
    _(!0), E({ type: "improve", content: null, loading: !0 });
    try {
      const F = await D1(pe, i);
      E({ type: "improve", content: F, loading: !1 });
    } catch (F) {
      E({ type: "improve", content: { explanation: `Error: ${F.message}` }, loading: !1 });
    } finally {
      _(!1);
    }
  }, [pe, i]), hn = H(async () => {
    if (!Ot()) {
      z({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => z({ loading: !1, message: "" }), 3e3);
      return;
    }
    _(!0), E({ type: "validate", content: null, loading: !0 });
    try {
      const F = await L1(pe, i);
      E({ type: "validate", content: F, loading: !1 });
    } catch (F) {
      E({ type: "validate", content: { isValid: !1, errors: [F.message], warnings: [], suggestions: [] }, loading: !1 });
    } finally {
      _(!1);
    }
  }, [pe, i]), fn = H(() => {
    var F;
    ($ == null ? void 0 : $.type) === "improve" && ((F = $.content) != null && F.dsl) && (t($.content.type), n($.content.dsl), a(!0), E(null));
  }, [$]), gn = (F, ie) => {
    t(F), n(ie), a(!0), z({ loading: !1, message: "Mermaid imported!" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
  };
  return /* @__PURE__ */ S("div", { style: { minHeight: "100vh", background: J.background, fontFamily: "system-ui", color: J.textPrimary, transition: "background 0.3s ease, color 0.3s ease" }, children: [
    /* @__PURE__ */ S("div", { style: { padding: "10px 20px", borderBottom: `1px solid ${J.border}`, background: J.headerBg, display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
        /* @__PURE__ */ l("div", { children: /* @__PURE__ */ S("h1", { style: { fontSize: "1.2rem", fontWeight: 800, background: J.logoGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.4rem" }, children: "◈" }),
          " DDFlow"
        ] }) }),
        /* @__PURE__ */ l("div", { style: { height: 24, width: 1, background: J.border } }),
        /* @__PURE__ */ l("span", { style: { color: J.textMuted, fontSize: "0.85rem" }, children: "Diagram Engine" })
      ] }),
      /* @__PURE__ */ S("div", { style: { display: "flex", gap: "6px", alignItems: "center" }, children: [
        /* @__PURE__ */ l("button", { onClick: sn, style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: `Switch to ${V === "dark" ? "light" : "dark"} mode`, children: V === "dark" ? "☀️" : "🌙" }),
        /* @__PURE__ */ l("button", { onClick: cn, style: { padding: "6px 10px", background: Z ? `${te.accentPrimary}20` : "transparent", border: `1px solid ${Z ? te.accentPrimary : J.border}`, borderRadius: 6, color: Z ? te.accentPrimary : J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: Z ? "Switch to clean mode" : "Switch to sketch mode", children: Z ? "✏️" : "✨" }),
        /* @__PURE__ */ l("button", { onClick: () => oe(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Shape Library", children: /* @__PURE__ */ S("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ l("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
        ] }) }),
        /* @__PURE__ */ l("button", { onClick: () => d(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Keyboard Shortcuts (?)", children: "⌨️" }),
        /* @__PURE__ */ l("button", { onClick: () => A(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Color Settings", children: "🎨" }),
        /* @__PURE__ */ l("a", { href: "/guide.html", target: "_blank", rel: "noopener noreferrer", style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }, children: "📖" }),
        /* @__PURE__ */ l("div", { style: { height: 20, width: 1, background: J.border, margin: "0 4px" } }),
        /* @__PURE__ */ l("button", { onClick: () => c(!e), style: { padding: "6px 14px", background: e ? `linear-gradient(135deg, ${te.accentPrimary}, ${te.accentSecondary})` : `${te.accentPrimary}20`, border: `1px solid ${e ? "transparent" : te.accentPrimary}`, borderRadius: 6, color: e ? "#fff" : te.accentPrimary, fontSize: "0.85rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontWeight: 600 }, children: "🤖 AI Chat" })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: { display: "flex", gap: 10, padding: "10px 20px", borderBottom: `1px solid ${J.border}`, background: J.toolbarBg, alignItems: "center" }, children: [
      /* @__PURE__ */ l(
        Q1,
        {
          activeType: i,
          onTypeChange: ct,
          theme: J
        }
      ),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: J.border } }),
      /* @__PURE__ */ l(
        _r,
        {
          label: "File",
          icon: "📁",
          color: v.blue,
          theme: J,
          items: [
            { type: "section", label: "Create" },
            { icon: "📋", label: "Browse Templates", description: "Start from a template", onClick: () => x(!0) },
            { icon: "⭐", label: "Save as Template", description: "Save current as template", onClick: () => k(!0) },
            { type: "divider" },
            { type: "section", label: "Save & Open" },
            { icon: "💾", label: "Save", description: "Save to browser", shortcut: "⌘S", onClick: Ye },
            { icon: "📥", label: "Export File", description: "Download .ddflow", onClick: nn },
            { icon: "📂", label: "Open Recent", description: "Open saved diagrams", onClick: () => f(!0) },
            { type: "divider" },
            { icon: O ? "✓" : "○", label: "Auto-save", description: O ? "Enabled" : "Disabled", onClick: an, active: O }
          ]
        }
      ),
      /* @__PURE__ */ l(
        _r,
        {
          label: "Export",
          icon: "📤",
          color: v.pink,
          theme: J,
          items: [
            { type: "section", label: "Image" },
            { icon: "📋", label: "Copy to Clipboard", shortcut: "⌘⇧C", onClick: dr, disabled: D.loading },
            { icon: "🖼️", label: "Export as PNG", shortcut: "⌘⇧P", onClick: cr, disabled: D.loading },
            { icon: "📐", label: "Export as SVG", shortcut: "⌘⇧S", onClick: lr, disabled: D.loading },
            { icon: "📄", label: "Export as PDF", onClick: dn, disabled: D.loading },
            { type: "divider" },
            { type: "section", label: "Code" },
            { icon: "🧜‍♀️", label: "Export as Mermaid", description: "Convert to Mermaid syntax", onClick: () => s(!0) },
            { icon: "🌱", label: "Export as PlantUML", description: "Convert to PlantUML syntax", onClick: () => X(!0) }
          ]
        }
      ),
      /* @__PURE__ */ l(
        _r,
        {
          label: "Import",
          icon: "📥",
          color: v.cyan,
          theme: J,
          items: [
            { icon: "🖼️", label: "Import from Image", description: "AI extracts diagram from image", onClick: () => B(!0) },
            { icon: "🧜‍♀️", label: "Import Mermaid", description: "Convert from Mermaid syntax", onClick: () => g(!0) },
            { icon: "🌱", label: "Import PlantUML", description: "Convert from PlantUML syntax", onClick: () => j(!0) },
            { icon: "📂", label: "Open .ddflow File", description: "Load saved diagram", onClick: () => f(!0) }
          ]
        }
      ),
      /* @__PURE__ */ l(
        _r,
        {
          label: M ? "AI..." : "AI Tools",
          icon: "✨",
          color: v.purple,
          theme: J,
          items: [
            { type: "section", label: "Analysis" },
            { icon: "📖", label: "Explain Diagram", description: "Get AI explanation of diagram", onClick: un, disabled: M },
            { icon: "✅", label: "Validate Diagram", description: "Check for errors and issues", onClick: hn, disabled: M },
            { type: "divider" },
            { type: "section", label: "Enhancement" },
            { icon: "💡", label: "Suggest Improvements", description: "Get AI optimization tips", onClick: pn, disabled: M }
          ]
        }
      ),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: J.border } }),
      /* @__PURE__ */ S("div", { style: { display: "flex", gap: 4 }, children: [
        /* @__PURE__ */ l("button", { onClick: Be, disabled: !Ke, style: { padding: "6px 10px", background: Ke ? "rgba(100,116,139,0.2)" : "rgba(255,255,255,0.02)", border: `1px solid ${Ke ? "rgba(100,116,139,0.3)" : "rgba(255,255,255,0.05)"}`, borderRadius: 6, color: Ke ? v.slate : "#444", fontSize: "0.7rem", cursor: Ke ? "pointer" : "not-allowed", opacity: Ke ? 1 : 0.5, display: "flex", alignItems: "center", gap: 4 }, title: "Undo (Cmd+Z)", children: /* @__PURE__ */ l("span", { children: "↩" }) }),
        /* @__PURE__ */ l("button", { onClick: Ie, disabled: !qe, style: { padding: "6px 10px", background: qe ? "rgba(100,116,139,0.2)" : "rgba(255,255,255,0.02)", border: `1px solid ${qe ? "rgba(100,116,139,0.3)" : "rgba(255,255,255,0.05)"}`, borderRadius: 6, color: qe ? v.slate : "#444", fontSize: "0.7rem", cursor: qe ? "pointer" : "not-allowed", opacity: qe ? 1 : 0.5, display: "flex", alignItems: "center", gap: 4 }, title: "Redo (Cmd+Shift+Z)", children: /* @__PURE__ */ l("span", { children: "↪" }) })
      ] }),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: J.border } }),
      /* @__PURE__ */ S("button", { onClick: () => C(!w), style: { padding: "6px 12px", background: w ? `${v.orange}30` : "rgba(255,255,255,0.05)", border: `1px solid ${w ? v.orange : "rgba(255,255,255,0.1)"}`, borderRadius: 6, color: w ? v.orange : V === "dark" ? "#888" : "#64748b", fontSize: "0.8rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }, title: "Toggle Node Library", children: [
        w ? "📚" : "📦",
        " Nodes"
      ] }),
      /* @__PURE__ */ l("div", { style: { flex: 1 } }),
      D.message && /* @__PURE__ */ S("span", { style: { padding: "5px 10px", background: D.message.startsWith("Error") ? "rgba(239,68,68,0.2)" : "rgba(16,185,129,0.2)", borderRadius: 6, color: D.message.startsWith("Error") ? v.red : v.green, fontSize: "0.7rem", display: "flex", alignItems: "center", gap: 4 }, children: [
        D.loading && "⏳",
        D.message
      ] }),
      /* @__PURE__ */ S("button", { onClick: () => a(!o), style: { padding: "6px 12px", background: o ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${o ? v.green : "rgba(255,255,255,0.1)"}`, borderRadius: 6, color: o ? v.green : V === "dark" ? "#888" : "#64748b", fontSize: "0.7rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }, children: [
        o ? "✓" : "◇",
        " Editor"
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: { display: "flex", height: "calc(100vh - 105px)" }, children: [
      o && /* @__PURE__ */ l("div", { style: { width: 300, borderRight: `1px solid ${J.border}` }, children: /* @__PURE__ */ l("textarea", { value: r || ce.source, onChange: (F) => St(F.target.value), style: { width: "100%", height: "100%", background: J.editorBg, border: "none", padding: 12, color: J.editorText, fontFamily: "Monaco, monospace", fontSize: "0.65rem", lineHeight: 1.5, resize: "none", outline: "none", boxSizing: "border-box", transition: "background 0.3s ease, color 0.3s ease" } }) }),
      /* @__PURE__ */ l(
        "div",
        {
          ref: xe,
          style: { flex: 1, padding: 10, marginRight: e ? "380px" : 0, marginLeft: w ? "260px" : 0, transition: "margin 0.3s ease" },
          onDragOver: (F) => {
            F.preventDefault(), F.dataTransfer.dropEffect = "copy";
          },
          onDrop: (F) => {
            F.preventDefault();
            const ie = F.dataTransfer.getData("text/plain");
            ie && pr(ie);
          },
          children: /* @__PURE__ */ l(dw, { type: i, source: pe, theme: V, sketchMode: Z, onLabelChange: qt, onDeleteNodes: kt, onPasteNodes: Ct, onEdgeLabelChange: ft, onCreateConnection: Ge, onLinkedTemplateClick: Fe }, `${i}-${pe}-${V}-${Z}`)
        }
      )
    ] }),
    /* @__PURE__ */ l(
      ev,
      {
        isOpen: w,
        diagramType: i,
        theme: J,
        onAddNode: pr
      }
    ),
    /* @__PURE__ */ l(q1, { isOpen: e, onClose: () => c(!1), onApplyDiagram: ur }),
    /* @__PURE__ */ l(uw, { isOpen: h, onClose: () => d(!1) }),
    /* @__PURE__ */ l(
      pw,
      {
        isOpen: p,
        onClose: () => f(!1),
        onSelect: on,
        onRemove: nv
      }
    ),
    /* @__PURE__ */ l(
      hw,
      {
        isOpen: m,
        onClose: () => g(!1),
        onImport: gn
      }
    ),
    /* @__PURE__ */ l(
      fw,
      {
        isOpen: y,
        onClose: () => s(!1),
        diagramType: i,
        diagramSource: pe
      }
    ),
    /* @__PURE__ */ l(
      V1,
      {
        isOpen: u,
        onClose: () => x(!1),
        onApplyTemplate: ur,
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      X1,
      {
        isOpen: b,
        onClose: () => k(!1),
        diagramType: i,
        diagramSource: pe,
        theme: J
      }
    ),
    $ && /* @__PURE__ */ l("div", { style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
      padding: 20
    }, onClick: () => !$.loading && E(null), children: /* @__PURE__ */ S("div", { style: {
      background: J.modalBg,
      borderRadius: 16,
      border: `1px solid ${J.border}`,
      width: "100%",
      maxWidth: 600,
      maxHeight: "80vh",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
    }, onClick: (F) => F.stopPropagation(), children: [
      /* @__PURE__ */ S("div", { style: {
        padding: "16px 20px",
        borderBottom: `1px solid ${J.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: `${v.purple}15`
      }, children: [
        /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: $.type === "explain" ? "📖" : $.type === "validate" ? "✅" : "💡" }),
          /* @__PURE__ */ l("span", { style: { fontWeight: 600, color: J.textPrimary }, children: $.type === "explain" ? "Diagram Explanation" : $.type === "validate" ? "Validation Results" : "Improvement Suggestions" })
        ] }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => E(null),
            disabled: $.loading,
            style: {
              background: "transparent",
              border: "none",
              color: J.textSecondary,
              fontSize: "1.2rem",
              cursor: $.loading ? "not-allowed" : "pointer",
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
      }, children: $.loading ? /* @__PURE__ */ S("div", { style: { textAlign: "center", padding: 40, color: J.textSecondary }, children: [
        /* @__PURE__ */ l("div", { style: { fontSize: "2rem", marginBottom: 12 }, children: "⏳" }),
        /* @__PURE__ */ l("div", { children: "Analyzing diagram with AI..." })
      ] }) : $.type === "explain" ? /* @__PURE__ */ l("div", { style: { color: J.textPrimary, lineHeight: 1.6, fontSize: "0.9rem", whiteSpace: "pre-wrap" }, children: $.content }) : $.type === "validate" ? /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ S("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          background: (hr = $.content) != null && hr.isValid ? `${v.green}15` : `${v.red}15`,
          borderRadius: 8,
          marginBottom: 16
        }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: (fr = $.content) != null && fr.isValid ? "✓" : "✗" }),
          /* @__PURE__ */ l("span", { style: { color: (gr = $.content) != null && gr.isValid ? v.green : v.red, fontWeight: 600 }, children: (mr = $.content) != null && mr.isValid ? "Diagram is valid" : "Issues found" })
        ] }),
        ((br = (yr = $.content) == null ? void 0 : yr.errors) == null ? void 0 : br.length) > 0 && /* @__PURE__ */ S("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { color: v.red, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Errors:" }),
          $.content.errors.map((F, ie) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.red}10`, borderRadius: 6, marginBottom: 4, color: J.textPrimary, fontSize: "0.85rem" }, children: F }, ie))
        ] }),
        ((xr = (Ht = $.content) == null ? void 0 : Ht.warnings) == null ? void 0 : xr.length) > 0 && /* @__PURE__ */ S("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { color: v.orange, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Warnings:" }),
          $.content.warnings.map((F, ie) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.orange}10`, borderRadius: 6, marginBottom: 4, color: J.textPrimary, fontSize: "0.85rem" }, children: F }, ie))
        ] }),
        ((wr = (vr = $.content) == null ? void 0 : vr.suggestions) == null ? void 0 : wr.length) > 0 && /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: { color: v.blue, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Suggestions:" }),
          $.content.suggestions.map((F, ie) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.blue}10`, borderRadius: 6, marginBottom: 4, color: J.textPrimary, fontSize: "0.85rem" }, children: F }, ie))
        ] })
      ] }) : $.type === "improve" ? /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("div", { style: { color: J.textPrimary, lineHeight: 1.6, fontSize: "0.9rem", marginBottom: 20, whiteSpace: "pre-wrap" }, children: ((Sr = $.content) == null ? void 0 : Sr.explanation) || "No explanation provided." }),
        ((kr = $.content) == null ? void 0 : kr.dsl) && /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: { color: v.purple, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Improved DSL:" }),
          /* @__PURE__ */ l("pre", { style: {
            background: J.inputBg,
            padding: 12,
            borderRadius: 8,
            fontSize: "0.75rem",
            overflow: "auto",
            maxHeight: 200,
            color: J.editorText
          }, children: $.content.dsl })
        ] })
      ] }) : null }),
      !$.loading && /* @__PURE__ */ S("div", { style: {
        padding: "12px 20px",
        borderTop: `1px solid ${J.border}`,
        display: "flex",
        justifyContent: "flex-end",
        gap: 10
      }, children: [
        $.type === "improve" && ((Cr = $.content) == null ? void 0 : Cr.dsl) && /* @__PURE__ */ l(
          "button",
          {
            onClick: fn,
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
            onClick: () => E(null),
            style: {
              padding: "8px 16px",
              background: "rgba(255,255,255,0.1)",
              border: `1px solid ${J.border}`,
              borderRadius: 6,
              color: J.textSecondary,
              fontSize: "0.8rem",
              cursor: "pointer"
            },
            children: "Close"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ l(
      uv,
      {
        isOpen: P,
        onClose: () => A(!1),
        onApply: ae,
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      hv,
      {
        isOpen: W,
        onClose: () => B(!1),
        onImport: (F, ie, he) => {
          t(F), n(ie), he && I(he), a(!0), B(!1), z({ loading: !1, message: `Diagram "${he || "Imported"}" imported from image!` }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
        },
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      Wv,
      {
        isOpen: L,
        onClose: () => j(!1),
        onImport: (F, ie) => {
          t(F), n(ie), a(!0), j(!1), z({ loading: !1, message: "PlantUML diagram imported!" }), setTimeout(() => z({ loading: !1, message: "" }), 2e3);
        },
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      Nv,
      {
        isOpen: q,
        onClose: () => X(!1),
        diagramType: i,
        diagramSource: pe,
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      qv,
      {
        isOpen: re,
        onClose: () => oe(!1),
        onSelectShape: ln,
        theme: J
      }
    )
  ] });
}
export {
  U2 as ArchitectureDiagram,
  v as COLORS,
  V2 as ClassDiagram,
  rw as DeploymentDiagram,
  Y2 as ERDDiagram,
  pc as FlowDiagram,
  J2 as GanttDiagram,
  Z2 as GitGraphDiagram,
  F2 as MindMapDiagram,
  H2 as NetworkDiagram,
  X2 as OrgChartDiagram,
  O2 as Parsers,
  ew as PieChartDiagram,
  tw as QuadrantDiagram,
  K2 as SequenceDiagram,
  we as THEMES,
  Q2 as TimelineDiagram,
  dw as UniversalDiagram,
  lw as UseCaseDiagram,
  j2 as UserJourneyDiagram,
  nw as WireframeDiagram,
  yw as default
};
