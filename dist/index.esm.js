import { jsxs as S, jsx as l, Fragment as ut } from "react/jsx-runtime";
import Fc, { useState as H, useRef as _e, useEffect as se, useMemo as ge, useCallback as V } from "react";
var Mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ig(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function bc(i) {
  throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var yn, Uc;
function Ag() {
  if (Uc) return yn;
  Uc = 1;
  function i() {
    this.__data__ = [], this.size = 0;
  }
  return yn = i, yn;
}
var bn, jc;
function Ft() {
  if (jc) return bn;
  jc = 1;
  function i(t, r) {
    return t === r || t !== t && r !== r;
  }
  return bn = i, bn;
}
var xn, Gc;
function Wr() {
  if (Gc) return xn;
  Gc = 1;
  var i = Ft();
  function t(r, n) {
    for (var o = r.length; o--; )
      if (i(r[o][0], n))
        return o;
    return -1;
  }
  return xn = t, xn;
}
var vn, Yc;
function Tg() {
  if (Yc) return vn;
  Yc = 1;
  var i = Wr(), t = Array.prototype, r = t.splice;
  function n(o) {
    var a = this.__data__, e = i(a, o);
    if (e < 0)
      return !1;
    var c = a.length - 1;
    return e == c ? a.pop() : r.call(a, e, 1), --this.size, !0;
  }
  return vn = n, vn;
}
var wn, Hc;
function Pg() {
  if (Hc) return wn;
  Hc = 1;
  var i = Wr();
  function t(r) {
    var n = this.__data__, o = i(n, r);
    return o < 0 ? void 0 : n[o][1];
  }
  return wn = t, wn;
}
var Sn, Vc;
function Dg() {
  if (Vc) return Sn;
  Vc = 1;
  var i = Wr();
  function t(r) {
    return i(this.__data__, r) > -1;
  }
  return Sn = t, Sn;
}
var kn, Xc;
function Lg() {
  if (Xc) return kn;
  Xc = 1;
  var i = Wr();
  function t(r, n) {
    var o = this.__data__, a = i(o, r);
    return a < 0 ? (++this.size, o.push([r, n])) : o[a][1] = n, this;
  }
  return kn = t, kn;
}
var Cn, Kc;
function Nr() {
  if (Kc) return Cn;
  Kc = 1;
  var i = Ag(), t = Tg(), r = Pg(), n = Dg(), o = Lg();
  function a(e) {
    var c = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++c < h; ) {
      var d = e[c];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = i, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Cn = a, Cn;
}
var $n, Zc;
function zg() {
  if (Zc) return $n;
  Zc = 1;
  var i = Nr();
  function t() {
    this.__data__ = new i(), this.size = 0;
  }
  return $n = t, $n;
}
var Mn, Qc;
function Bg() {
  if (Qc) return Mn;
  Qc = 1;
  function i(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Mn = i, Mn;
}
var En, Jc;
function Wg() {
  if (Jc) return En;
  Jc = 1;
  function i(t) {
    return this.__data__.get(t);
  }
  return En = i, En;
}
var Rn, el;
function Ng() {
  if (el) return Rn;
  el = 1;
  function i(t) {
    return this.__data__.has(t);
  }
  return Rn = i, Rn;
}
var _n, tl;
function ef() {
  if (tl) return _n;
  tl = 1;
  var i = typeof Mr == "object" && Mr && Mr.Object === Object && Mr;
  return _n = i, _n;
}
var In, rl;
function it() {
  if (rl) return In;
  rl = 1;
  var i = ef(), t = typeof self == "object" && self && self.Object === Object && self, r = i || t || Function("return this")();
  return In = r, In;
}
var An, nl;
function Ut() {
  if (nl) return An;
  nl = 1;
  var i = it(), t = i.Symbol;
  return An = t, An;
}
var Tn, il;
function qg() {
  if (il) return Tn;
  il = 1;
  var i = Ut(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, o = i ? i.toStringTag : void 0;
  function a(e) {
    var c = r.call(e, o), h = e[o];
    try {
      e[o] = void 0;
      var d = !0;
    } catch {
    }
    var u = n.call(e);
    return d && (c ? e[o] = h : delete e[o]), u;
  }
  return Tn = a, Tn;
}
var Pn, ol;
function Og() {
  if (ol) return Pn;
  ol = 1;
  var i = Object.prototype, t = i.toString;
  function r(n) {
    return t.call(n);
  }
  return Pn = r, Pn;
}
var Dn, al;
function Lt() {
  if (al) return Dn;
  al = 1;
  var i = Ut(), t = qg(), r = Og(), n = "[object Null]", o = "[object Undefined]", a = i ? i.toStringTag : void 0;
  function e(c) {
    return c == null ? c === void 0 ? o : n : a && a in Object(c) ? t(c) : r(c);
  }
  return Dn = e, Dn;
}
var Ln, sl;
function Je() {
  if (sl) return Ln;
  sl = 1;
  function i(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ln = i, Ln;
}
var zn, cl;
function rr() {
  if (cl) return zn;
  cl = 1;
  var i = Lt(), t = Je(), r = "[object AsyncFunction]", n = "[object Function]", o = "[object GeneratorFunction]", a = "[object Proxy]";
  function e(c) {
    if (!t(c))
      return !1;
    var h = i(c);
    return h == n || h == o || h == r || h == a;
  }
  return zn = e, zn;
}
var Bn, ll;
function Fg() {
  if (ll) return Bn;
  ll = 1;
  var i = it(), t = i["__core-js_shared__"];
  return Bn = t, Bn;
}
var Wn, dl;
function Ug() {
  if (dl) return Wn;
  dl = 1;
  var i = Fg(), t = function() {
    var n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Wn = r, Wn;
}
var Nn, ul;
function tf() {
  if (ul) return Nn;
  ul = 1;
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
  return Nn = r, Nn;
}
var qn, pl;
function jg() {
  if (pl) return qn;
  pl = 1;
  var i = rr(), t = Ug(), r = Je(), n = tf(), o = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, e = Function.prototype, c = Object.prototype, h = e.toString, d = c.hasOwnProperty, u = RegExp(
    "^" + h.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(m) {
    if (!r(m) || t(m))
      return !1;
    var g = i(m) ? u : a;
    return g.test(n(m));
  }
  return qn = f, qn;
}
var On, hl;
function Gg() {
  if (hl) return On;
  hl = 1;
  function i(t, r) {
    return t == null ? void 0 : t[r];
  }
  return On = i, On;
}
var Fn, fl;
function zt() {
  if (fl) return Fn;
  fl = 1;
  var i = jg(), t = Gg();
  function r(n, o) {
    var a = t(n, o);
    return i(a) ? a : void 0;
  }
  return Fn = r, Fn;
}
var Un, gl;
function xc() {
  if (gl) return Un;
  gl = 1;
  var i = zt(), t = it(), r = i(t, "Map");
  return Un = r, Un;
}
var jn, ml;
function qr() {
  if (ml) return jn;
  ml = 1;
  var i = zt(), t = i(Object, "create");
  return jn = t, jn;
}
var Gn, yl;
function Yg() {
  if (yl) return Gn;
  yl = 1;
  var i = qr();
  function t() {
    this.__data__ = i ? i(null) : {}, this.size = 0;
  }
  return Gn = t, Gn;
}
var Yn, bl;
function Hg() {
  if (bl) return Yn;
  bl = 1;
  function i(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Yn = i, Yn;
}
var Hn, xl;
function Vg() {
  if (xl) return Hn;
  xl = 1;
  var i = qr(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function o(a) {
    var e = this.__data__;
    if (i) {
      var c = e[a];
      return c === t ? void 0 : c;
    }
    return n.call(e, a) ? e[a] : void 0;
  }
  return Hn = o, Hn;
}
var Vn, vl;
function Xg() {
  if (vl) return Vn;
  vl = 1;
  var i = qr(), t = Object.prototype, r = t.hasOwnProperty;
  function n(o) {
    var a = this.__data__;
    return i ? a[o] !== void 0 : r.call(a, o);
  }
  return Vn = n, Vn;
}
var Xn, wl;
function Kg() {
  if (wl) return Xn;
  wl = 1;
  var i = qr(), t = "__lodash_hash_undefined__";
  function r(n, o) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = i && o === void 0 ? t : o, this;
  }
  return Xn = r, Xn;
}
var Kn, Sl;
function Zg() {
  if (Sl) return Kn;
  Sl = 1;
  var i = Yg(), t = Hg(), r = Vg(), n = Xg(), o = Kg();
  function a(e) {
    var c = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++c < h; ) {
      var d = e[c];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = i, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, Kn = a, Kn;
}
var Zn, kl;
function Qg() {
  if (kl) return Zn;
  kl = 1;
  var i = Zg(), t = Nr(), r = xc();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new i(),
      map: new (r || t)(),
      string: new i()
    };
  }
  return Zn = n, Zn;
}
var Qn, Cl;
function Jg() {
  if (Cl) return Qn;
  Cl = 1;
  function i(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Qn = i, Qn;
}
var Jn, $l;
function Or() {
  if ($l) return Jn;
  $l = 1;
  var i = Jg();
  function t(r, n) {
    var o = r.__data__;
    return i(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
  }
  return Jn = t, Jn;
}
var ei, Ml;
function e0() {
  if (Ml) return ei;
  Ml = 1;
  var i = Or();
  function t(r) {
    var n = i(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return ei = t, ei;
}
var ti, El;
function t0() {
  if (El) return ti;
  El = 1;
  var i = Or();
  function t(r) {
    return i(this, r).get(r);
  }
  return ti = t, ti;
}
var ri, Rl;
function r0() {
  if (Rl) return ri;
  Rl = 1;
  var i = Or();
  function t(r) {
    return i(this, r).has(r);
  }
  return ri = t, ri;
}
var ni, _l;
function n0() {
  if (_l) return ni;
  _l = 1;
  var i = Or();
  function t(r, n) {
    var o = i(this, r), a = o.size;
    return o.set(r, n), this.size += o.size == a ? 0 : 1, this;
  }
  return ni = t, ni;
}
var ii, Il;
function vc() {
  if (Il) return ii;
  Il = 1;
  var i = Qg(), t = e0(), r = t0(), n = r0(), o = n0();
  function a(e) {
    var c = -1, h = e == null ? 0 : e.length;
    for (this.clear(); ++c < h; ) {
      var d = e[c];
      this.set(d[0], d[1]);
    }
  }
  return a.prototype.clear = i, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = o, ii = a, ii;
}
var oi, Al;
function i0() {
  if (Al) return oi;
  Al = 1;
  var i = Nr(), t = xc(), r = vc(), n = 200;
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
  return oi = o, oi;
}
var ai, Tl;
function Fr() {
  if (Tl) return ai;
  Tl = 1;
  var i = Nr(), t = zg(), r = Bg(), n = Wg(), o = Ng(), a = i0();
  function e(c) {
    var h = this.__data__ = new i(c);
    this.size = h.size;
  }
  return e.prototype.clear = t, e.prototype.delete = r, e.prototype.get = n, e.prototype.has = o, e.prototype.set = a, ai = e, ai;
}
var si, Pl;
function wc() {
  if (Pl) return si;
  Pl = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o && r(t[n], n, t) !== !1; )
      ;
    return t;
  }
  return si = i, si;
}
var ci, Dl;
function rf() {
  if (Dl) return ci;
  Dl = 1;
  var i = zt(), t = function() {
    try {
      var r = i(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return ci = t, ci;
}
var li, Ll;
function Ur() {
  if (Ll) return li;
  Ll = 1;
  var i = rf();
  function t(r, n, o) {
    n == "__proto__" && i ? i(r, n, {
      configurable: !0,
      enumerable: !0,
      value: o,
      writable: !0
    }) : r[n] = o;
  }
  return li = t, li;
}
var di, zl;
function jr() {
  if (zl) return di;
  zl = 1;
  var i = Ur(), t = Ft(), r = Object.prototype, n = r.hasOwnProperty;
  function o(a, e, c) {
    var h = a[e];
    (!(n.call(a, e) && t(h, c)) || c === void 0 && !(e in a)) && i(a, e, c);
  }
  return di = o, di;
}
var ui, Bl;
function nr() {
  if (Bl) return ui;
  Bl = 1;
  var i = jr(), t = Ur();
  function r(n, o, a, e) {
    var c = !a;
    a || (a = {});
    for (var h = -1, d = o.length; ++h < d; ) {
      var u = o[h], f = e ? e(a[u], n[u], u, a, n) : void 0;
      f === void 0 && (f = n[u]), c ? t(a, u, f) : i(a, u, f);
    }
    return a;
  }
  return ui = r, ui;
}
var pi, Wl;
function o0() {
  if (Wl) return pi;
  Wl = 1;
  function i(t, r) {
    for (var n = -1, o = Array(t); ++n < t; )
      o[n] = r(n);
    return o;
  }
  return pi = i, pi;
}
var hi, Nl;
function pt() {
  if (Nl) return hi;
  Nl = 1;
  function i(t) {
    return t != null && typeof t == "object";
  }
  return hi = i, hi;
}
var fi, ql;
function a0() {
  if (ql) return fi;
  ql = 1;
  var i = Lt(), t = pt(), r = "[object Arguments]";
  function n(o) {
    return t(o) && i(o) == r;
  }
  return fi = n, fi;
}
var gi, Ol;
function ir() {
  if (Ol) return gi;
  Ol = 1;
  var i = a0(), t = pt(), r = Object.prototype, n = r.hasOwnProperty, o = r.propertyIsEnumerable, a = i(/* @__PURE__ */ function() {
    return arguments;
  }()) ? i : function(e) {
    return t(e) && n.call(e, "callee") && !o.call(e, "callee");
  };
  return gi = a, gi;
}
var mi, Fl;
function Ae() {
  if (Fl) return mi;
  Fl = 1;
  var i = Array.isArray;
  return mi = i, mi;
}
var Xt = { exports: {} }, yi, Ul;
function s0() {
  if (Ul) return yi;
  Ul = 1;
  function i() {
    return !1;
  }
  return yi = i, yi;
}
Xt.exports;
var jl;
function jt() {
  return jl || (jl = 1, function(i, t) {
    var r = it(), n = s0(), o = t && !t.nodeType && t, a = o && !0 && i && !i.nodeType && i, e = a && a.exports === o, c = e ? r.Buffer : void 0, h = c ? c.isBuffer : void 0, d = h || n;
    i.exports = d;
  }(Xt, Xt.exports)), Xt.exports;
}
var bi, Gl;
function Gr() {
  if (Gl) return bi;
  Gl = 1;
  var i = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, o) {
    var a = typeof n;
    return o = o ?? i, !!o && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < o;
  }
  return bi = r, bi;
}
var xi, Yl;
function Sc() {
  if (Yl) return xi;
  Yl = 1;
  var i = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= i;
  }
  return xi = t, xi;
}
var vi, Hl;
function c0() {
  if (Hl) return vi;
  Hl = 1;
  var i = Lt(), t = Sc(), r = pt(), n = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", e = "[object Date]", c = "[object Error]", h = "[object Function]", d = "[object Map]", u = "[object Number]", f = "[object Object]", m = "[object RegExp]", g = "[object Set]", y = "[object String]", s = "[object WeakMap]", p = "[object ArrayBuffer]", x = "[object DataView]", b = "[object Float32Array]", C = "[object Float64Array]", w = "[object Int8Array]", $ = "[object Int16Array]", k = "[object Int32Array]", M = "[object Uint8Array]", E = "[object Uint8ClampedArray]", R = "[object Uint16Array]", T = "[object Uint32Array]", I = {};
  I[b] = I[C] = I[w] = I[$] = I[k] = I[M] = I[E] = I[R] = I[T] = !0, I[n] = I[o] = I[p] = I[a] = I[x] = I[e] = I[c] = I[h] = I[d] = I[u] = I[f] = I[m] = I[g] = I[y] = I[s] = !1;
  function B(P) {
    return r(P) && t(P.length) && !!I[i(P)];
  }
  return vi = B, vi;
}
var wi, Vl;
function Yr() {
  if (Vl) return wi;
  Vl = 1;
  function i(t) {
    return function(r) {
      return t(r);
    };
  }
  return wi = i, wi;
}
var Kt = { exports: {} };
Kt.exports;
var Xl;
function kc() {
  return Xl || (Xl = 1, function(i, t) {
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
var Si, Kl;
function or() {
  if (Kl) return Si;
  Kl = 1;
  var i = c0(), t = Yr(), r = kc(), n = r && r.isTypedArray, o = n ? t(n) : i;
  return Si = o, Si;
}
var ki, Zl;
function nf() {
  if (Zl) return ki;
  Zl = 1;
  var i = o0(), t = ir(), r = Ae(), n = jt(), o = Gr(), a = or(), e = Object.prototype, c = e.hasOwnProperty;
  function h(d, u) {
    var f = r(d), m = !f && t(d), g = !f && !m && n(d), y = !f && !m && !g && a(d), s = f || m || g || y, p = s ? i(d.length, String) : [], x = p.length;
    for (var b in d)
      (u || c.call(d, b)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      o(b, x))) && p.push(b);
    return p;
  }
  return ki = h, ki;
}
var Ci, Ql;
function Hr() {
  if (Ql) return Ci;
  Ql = 1;
  var i = Object.prototype;
  function t(r) {
    var n = r && r.constructor, o = typeof n == "function" && n.prototype || i;
    return r === o;
  }
  return Ci = t, Ci;
}
var $i, Jl;
function of() {
  if (Jl) return $i;
  Jl = 1;
  function i(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return $i = i, $i;
}
var Mi, ed;
function l0() {
  if (ed) return Mi;
  ed = 1;
  var i = of(), t = i(Object.keys, Object);
  return Mi = t, Mi;
}
var Ei, td;
function Cc() {
  if (td) return Ei;
  td = 1;
  var i = Hr(), t = l0(), r = Object.prototype, n = r.hasOwnProperty;
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
var Ri, rd;
function vt() {
  if (rd) return Ri;
  rd = 1;
  var i = rr(), t = Sc();
  function r(n) {
    return n != null && t(n.length) && !i(n);
  }
  return Ri = r, Ri;
}
var _i, nd;
function Tt() {
  if (nd) return _i;
  nd = 1;
  var i = nf(), t = Cc(), r = vt();
  function n(o) {
    return r(o) ? i(o) : t(o);
  }
  return _i = n, _i;
}
var Ii, id;
function d0() {
  if (id) return Ii;
  id = 1;
  var i = nr(), t = Tt();
  function r(n, o) {
    return n && i(o, t(o), n);
  }
  return Ii = r, Ii;
}
var Ai, od;
function u0() {
  if (od) return Ai;
  od = 1;
  function i(t) {
    var r = [];
    if (t != null)
      for (var n in Object(t))
        r.push(n);
    return r;
  }
  return Ai = i, Ai;
}
var Ti, ad;
function p0() {
  if (ad) return Ti;
  ad = 1;
  var i = Je(), t = Hr(), r = u0(), n = Object.prototype, o = n.hasOwnProperty;
  function a(e) {
    if (!i(e))
      return r(e);
    var c = t(e), h = [];
    for (var d in e)
      d == "constructor" && (c || !o.call(e, d)) || h.push(d);
    return h;
  }
  return Ti = a, Ti;
}
var Pi, sd;
function Bt() {
  if (sd) return Pi;
  sd = 1;
  var i = nf(), t = p0(), r = vt();
  function n(o) {
    return r(o) ? i(o, !0) : t(o);
  }
  return Pi = n, Pi;
}
var Di, cd;
function h0() {
  if (cd) return Di;
  cd = 1;
  var i = nr(), t = Bt();
  function r(n, o) {
    return n && i(o, t(o), n);
  }
  return Di = r, Di;
}
var Zt = { exports: {} };
Zt.exports;
var ld;
function af() {
  return ld || (ld = 1, function(i, t) {
    var r = it(), n = t && !t.nodeType && t, o = n && !0 && i && !i.nodeType && i, a = o && o.exports === n, e = a ? r.Buffer : void 0, c = e ? e.allocUnsafe : void 0;
    function h(d, u) {
      if (u)
        return d.slice();
      var f = d.length, m = c ? c(f) : new d.constructor(f);
      return d.copy(m), m;
    }
    i.exports = h;
  }(Zt, Zt.exports)), Zt.exports;
}
var Li, dd;
function sf() {
  if (dd) return Li;
  dd = 1;
  function i(t, r) {
    var n = -1, o = t.length;
    for (r || (r = Array(o)); ++n < o; )
      r[n] = t[n];
    return r;
  }
  return Li = i, Li;
}
var zi, ud;
function cf() {
  if (ud) return zi;
  ud = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = 0, e = []; ++n < o; ) {
      var c = t[n];
      r(c, n, t) && (e[a++] = c);
    }
    return e;
  }
  return zi = i, zi;
}
var Bi, pd;
function lf() {
  if (pd) return Bi;
  pd = 1;
  function i() {
    return [];
  }
  return Bi = i, Bi;
}
var Wi, hd;
function $c() {
  if (hd) return Wi;
  hd = 1;
  var i = cf(), t = lf(), r = Object.prototype, n = r.propertyIsEnumerable, o = Object.getOwnPropertySymbols, a = o ? function(e) {
    return e == null ? [] : (e = Object(e), i(o(e), function(c) {
      return n.call(e, c);
    }));
  } : t;
  return Wi = a, Wi;
}
var Ni, fd;
function f0() {
  if (fd) return Ni;
  fd = 1;
  var i = nr(), t = $c();
  function r(n, o) {
    return i(n, t(n), o);
  }
  return Ni = r, Ni;
}
var qi, gd;
function Mc() {
  if (gd) return qi;
  gd = 1;
  function i(t, r) {
    for (var n = -1, o = r.length, a = t.length; ++n < o; )
      t[a + n] = r[n];
    return t;
  }
  return qi = i, qi;
}
var Oi, md;
function Vr() {
  if (md) return Oi;
  md = 1;
  var i = of(), t = i(Object.getPrototypeOf, Object);
  return Oi = t, Oi;
}
var Fi, yd;
function df() {
  if (yd) return Fi;
  yd = 1;
  var i = Mc(), t = Vr(), r = $c(), n = lf(), o = Object.getOwnPropertySymbols, a = o ? function(e) {
    for (var c = []; e; )
      i(c, r(e)), e = t(e);
    return c;
  } : n;
  return Fi = a, Fi;
}
var Ui, bd;
function g0() {
  if (bd) return Ui;
  bd = 1;
  var i = nr(), t = df();
  function r(n, o) {
    return i(n, t(n), o);
  }
  return Ui = r, Ui;
}
var ji, xd;
function uf() {
  if (xd) return ji;
  xd = 1;
  var i = Mc(), t = Ae();
  function r(n, o, a) {
    var e = o(n);
    return t(n) ? e : i(e, a(n));
  }
  return ji = r, ji;
}
var Gi, vd;
function pf() {
  if (vd) return Gi;
  vd = 1;
  var i = uf(), t = $c(), r = Tt();
  function n(o) {
    return i(o, r, t);
  }
  return Gi = n, Gi;
}
var Yi, wd;
function m0() {
  if (wd) return Yi;
  wd = 1;
  var i = uf(), t = df(), r = Bt();
  function n(o) {
    return i(o, r, t);
  }
  return Yi = n, Yi;
}
var Hi, Sd;
function y0() {
  if (Sd) return Hi;
  Sd = 1;
  var i = zt(), t = it(), r = i(t, "DataView");
  return Hi = r, Hi;
}
var Vi, kd;
function b0() {
  if (kd) return Vi;
  kd = 1;
  var i = zt(), t = it(), r = i(t, "Promise");
  return Vi = r, Vi;
}
var Xi, Cd;
function hf() {
  if (Cd) return Xi;
  Cd = 1;
  var i = zt(), t = it(), r = i(t, "Set");
  return Xi = r, Xi;
}
var Ki, $d;
function x0() {
  if ($d) return Ki;
  $d = 1;
  var i = zt(), t = it(), r = i(t, "WeakMap");
  return Ki = r, Ki;
}
var Zi, Md;
function Gt() {
  if (Md) return Zi;
  Md = 1;
  var i = y0(), t = xc(), r = b0(), n = hf(), o = x0(), a = Lt(), e = tf(), c = "[object Map]", h = "[object Object]", d = "[object Promise]", u = "[object Set]", f = "[object WeakMap]", m = "[object DataView]", g = e(i), y = e(t), s = e(r), p = e(n), x = e(o), b = a;
  return (i && b(new i(new ArrayBuffer(1))) != m || t && b(new t()) != c || r && b(r.resolve()) != d || n && b(new n()) != u || o && b(new o()) != f) && (b = function(C) {
    var w = a(C), $ = w == h ? C.constructor : void 0, k = $ ? e($) : "";
    if (k)
      switch (k) {
        case g:
          return m;
        case y:
          return c;
        case s:
          return d;
        case p:
          return u;
        case x:
          return f;
      }
    return w;
  }), Zi = b, Zi;
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
var Ji, Rd;
function ff() {
  if (Rd) return Ji;
  Rd = 1;
  var i = it(), t = i.Uint8Array;
  return Ji = t, Ji;
}
var eo, _d;
function Ec() {
  if (_d) return eo;
  _d = 1;
  var i = ff();
  function t(r) {
    var n = new r.constructor(r.byteLength);
    return new i(n).set(new i(r)), n;
  }
  return eo = t, eo;
}
var to, Id;
function w0() {
  if (Id) return to;
  Id = 1;
  var i = Ec();
  function t(r, n) {
    var o = n ? i(r.buffer) : r.buffer;
    return new r.constructor(o, r.byteOffset, r.byteLength);
  }
  return to = t, to;
}
var ro, Ad;
function S0() {
  if (Ad) return ro;
  Ad = 1;
  var i = /\w*$/;
  function t(r) {
    var n = new r.constructor(r.source, i.exec(r));
    return n.lastIndex = r.lastIndex, n;
  }
  return ro = t, ro;
}
var no, Td;
function k0() {
  if (Td) return no;
  Td = 1;
  var i = Ut(), t = i ? i.prototype : void 0, r = t ? t.valueOf : void 0;
  function n(o) {
    return r ? Object(r.call(o)) : {};
  }
  return no = n, no;
}
var io, Pd;
function gf() {
  if (Pd) return io;
  Pd = 1;
  var i = Ec();
  function t(r, n) {
    var o = n ? i(r.buffer) : r.buffer;
    return new r.constructor(o, r.byteOffset, r.length);
  }
  return io = t, io;
}
var oo, Dd;
function C0() {
  if (Dd) return oo;
  Dd = 1;
  var i = Ec(), t = w0(), r = S0(), n = k0(), o = gf(), a = "[object Boolean]", e = "[object Date]", c = "[object Map]", h = "[object Number]", d = "[object RegExp]", u = "[object Set]", f = "[object String]", m = "[object Symbol]", g = "[object ArrayBuffer]", y = "[object DataView]", s = "[object Float32Array]", p = "[object Float64Array]", x = "[object Int8Array]", b = "[object Int16Array]", C = "[object Int32Array]", w = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", k = "[object Uint16Array]", M = "[object Uint32Array]";
  function E(R, T, I) {
    var B = R.constructor;
    switch (T) {
      case g:
        return i(R);
      case a:
      case e:
        return new B(+R);
      case y:
        return t(R, I);
      case s:
      case p:
      case x:
      case b:
      case C:
      case w:
      case $:
      case k:
      case M:
        return o(R, I);
      case c:
        return new B();
      case h:
      case f:
        return new B(R);
      case d:
        return r(R);
      case u:
        return new B();
      case m:
        return n(R);
    }
  }
  return oo = E, oo;
}
var ao, Ld;
function mf() {
  if (Ld) return ao;
  Ld = 1;
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
  return ao = r, ao;
}
var so, zd;
function yf() {
  if (zd) return so;
  zd = 1;
  var i = mf(), t = Vr(), r = Hr();
  function n(o) {
    return typeof o.constructor == "function" && !r(o) ? i(t(o)) : {};
  }
  return so = n, so;
}
var co, Bd;
function $0() {
  if (Bd) return co;
  Bd = 1;
  var i = Gt(), t = pt(), r = "[object Map]";
  function n(o) {
    return t(o) && i(o) == r;
  }
  return co = n, co;
}
var lo, Wd;
function M0() {
  if (Wd) return lo;
  Wd = 1;
  var i = $0(), t = Yr(), r = kc(), n = r && r.isMap, o = n ? t(n) : i;
  return lo = o, lo;
}
var uo, Nd;
function E0() {
  if (Nd) return uo;
  Nd = 1;
  var i = Gt(), t = pt(), r = "[object Set]";
  function n(o) {
    return t(o) && i(o) == r;
  }
  return uo = n, uo;
}
var po, qd;
function R0() {
  if (qd) return po;
  qd = 1;
  var i = E0(), t = Yr(), r = kc(), n = r && r.isSet, o = n ? t(n) : i;
  return po = o, po;
}
var ho, Od;
function bf() {
  if (Od) return ho;
  Od = 1;
  var i = Fr(), t = wc(), r = jr(), n = d0(), o = h0(), a = af(), e = sf(), c = f0(), h = g0(), d = pf(), u = m0(), f = Gt(), m = v0(), g = C0(), y = yf(), s = Ae(), p = jt(), x = M0(), b = Je(), C = R0(), w = Tt(), $ = Bt(), k = 1, M = 2, E = 4, R = "[object Arguments]", T = "[object Array]", I = "[object Boolean]", B = "[object Date]", P = "[object Error]", L = "[object Function]", F = "[object GeneratorFunction]", q = "[object Map]", Y = "[object Number]", re = "[object Object]", ne = "[object RegExp]", te = "[object Set]", oe = "[object String]", j = "[object Symbol]", A = "[object WeakMap]", O = "[object ArrayBuffer]", _ = "[object DataView]", z = "[object Float32Array]", W = "[object Float64Array]", X = "[object Int8Array]", Z = "[object Int16Array]", Q = "[object Int32Array]", ke = "[object Uint8Array]", Ce = "[object Uint8ClampedArray]", J = "[object Uint16Array]", xe = "[object Uint32Array]", le = {};
  le[R] = le[T] = le[O] = le[_] = le[I] = le[B] = le[z] = le[W] = le[X] = le[Z] = le[Q] = le[q] = le[Y] = le[re] = le[ne] = le[te] = le[oe] = le[j] = le[ke] = le[Ce] = le[J] = le[xe] = !0, le[P] = le[L] = le[A] = !1;
  function Le(ce, pe, Ne, Ke, qe, Be) {
    var Ie, Ee = pe & k, rt = pe & M, st = pe & E;
    if (Ne && (Ie = qe ? Ne(ce, Ke, qe, Be) : Ne(ce)), Ie !== void 0)
      return Ie;
    if (!b(ce))
      return ce;
    var St = s(ce);
    if (St) {
      if (Ie = m(ce), !Ee)
        return e(ce, Ie);
    } else {
      var ct = f(ce), qt = ct == L || ct == F;
      if (p(ce))
        return a(ce, Ee);
      if (ct == re || ct == R || qt && !qe) {
        if (Ie = rt || qt ? {} : y(ce), !Ee)
          return rt ? h(ce, o(Ie, ce)) : c(ce, n(Ie, ce));
      } else {
        if (!le[ct])
          return qe ? ce : {};
        Ie = g(ce, ct, Ee);
      }
    }
    Be || (Be = new i());
    var kt = Be.get(ce);
    if (kt)
      return kt;
    Be.set(ce, Ie), C(ce) ? ce.forEach(function(Ge) {
      Ie.add(Le(Ge, pe, Ne, Ge, ce, Be));
    }) : x(ce) && ce.forEach(function(Ge, Fe) {
      Ie.set(Fe, Le(Ge, pe, Ne, Fe, ce, Be));
    });
    var Ct = st ? rt ? u : d : rt ? $ : w, ft = St ? void 0 : Ct(ce);
    return t(ft || ce, function(Ge, Fe) {
      ft && (Fe = Ge, Ge = ce[Fe]), r(Ie, Fe, Le(Ge, pe, Ne, Fe, ce, Be));
    }), Ie;
  }
  return ho = Le, ho;
}
var fo, Fd;
function _0() {
  if (Fd) return fo;
  Fd = 1;
  var i = bf(), t = 4;
  function r(n) {
    return i(n, t);
  }
  return fo = r, fo;
}
var go, Ud;
function Rc() {
  if (Ud) return go;
  Ud = 1;
  function i(t) {
    return function() {
      return t;
    };
  }
  return go = i, go;
}
var mo, jd;
function I0() {
  if (jd) return mo;
  jd = 1;
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
  return mo = i, mo;
}
var yo, Gd;
function _c() {
  if (Gd) return yo;
  Gd = 1;
  var i = I0(), t = i();
  return yo = t, yo;
}
var bo, Yd;
function Ic() {
  if (Yd) return bo;
  Yd = 1;
  var i = _c(), t = Tt();
  function r(n, o) {
    return n && i(n, o, t);
  }
  return bo = r, bo;
}
var xo, Hd;
function A0() {
  if (Hd) return xo;
  Hd = 1;
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
  return xo = t, xo;
}
var vo, Vd;
function Xr() {
  if (Vd) return vo;
  Vd = 1;
  var i = Ic(), t = A0(), r = t(i);
  return vo = r, vo;
}
var wo, Xd;
function Wt() {
  if (Xd) return wo;
  Xd = 1;
  function i(t) {
    return t;
  }
  return wo = i, wo;
}
var So, Kd;
function xf() {
  if (Kd) return So;
  Kd = 1;
  var i = Wt();
  function t(r) {
    return typeof r == "function" ? r : i;
  }
  return So = t, So;
}
var ko, Zd;
function vf() {
  if (Zd) return ko;
  Zd = 1;
  var i = wc(), t = Xr(), r = xf(), n = Ae();
  function o(a, e) {
    var c = n(a) ? i : t;
    return c(a, r(e));
  }
  return ko = o, ko;
}
var Co, Qd;
function wf() {
  return Qd || (Qd = 1, Co = vf()), Co;
}
var $o, Jd;
function T0() {
  if (Jd) return $o;
  Jd = 1;
  var i = Xr();
  function t(r, n) {
    var o = [];
    return i(r, function(a, e, c) {
      n(a, e, c) && o.push(a);
    }), o;
  }
  return $o = t, $o;
}
var Mo, eu;
function P0() {
  if (eu) return Mo;
  eu = 1;
  var i = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, i), this;
  }
  return Mo = t, Mo;
}
var Eo, tu;
function D0() {
  if (tu) return Eo;
  tu = 1;
  function i(t) {
    return this.__data__.has(t);
  }
  return Eo = i, Eo;
}
var Ro, ru;
function Sf() {
  if (ru) return Ro;
  ru = 1;
  var i = vc(), t = P0(), r = D0();
  function n(o) {
    var a = -1, e = o == null ? 0 : o.length;
    for (this.__data__ = new i(); ++a < e; )
      this.add(o[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Ro = n, Ro;
}
var _o, nu;
function L0() {
  if (nu) return _o;
  nu = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return _o = i, _o;
}
var Io, iu;
function kf() {
  if (iu) return Io;
  iu = 1;
  function i(t, r) {
    return t.has(r);
  }
  return Io = i, Io;
}
var Ao, ou;
function Cf() {
  if (ou) return Ao;
  ou = 1;
  var i = Sf(), t = L0(), r = kf(), n = 1, o = 2;
  function a(e, c, h, d, u, f) {
    var m = h & n, g = e.length, y = c.length;
    if (g != y && !(m && y > g))
      return !1;
    var s = f.get(e), p = f.get(c);
    if (s && p)
      return s == c && p == e;
    var x = -1, b = !0, C = h & o ? new i() : void 0;
    for (f.set(e, c), f.set(c, e); ++x < g; ) {
      var w = e[x], $ = c[x];
      if (d)
        var k = m ? d($, w, x, c, e, f) : d(w, $, x, e, c, f);
      if (k !== void 0) {
        if (k)
          continue;
        b = !1;
        break;
      }
      if (C) {
        if (!t(c, function(M, E) {
          if (!r(C, E) && (w === M || u(w, M, h, d, f)))
            return C.push(E);
        })) {
          b = !1;
          break;
        }
      } else if (!(w === $ || u(w, $, h, d, f))) {
        b = !1;
        break;
      }
    }
    return f.delete(e), f.delete(c), b;
  }
  return Ao = a, Ao;
}
var To, au;
function z0() {
  if (au) return To;
  au = 1;
  function i(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  return To = i, To;
}
var Po, su;
function Ac() {
  if (su) return Po;
  su = 1;
  function i(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  return Po = i, Po;
}
var Do, cu;
function B0() {
  if (cu) return Do;
  cu = 1;
  var i = Ut(), t = ff(), r = Ft(), n = Cf(), o = z0(), a = Ac(), e = 1, c = 2, h = "[object Boolean]", d = "[object Date]", u = "[object Error]", f = "[object Map]", m = "[object Number]", g = "[object RegExp]", y = "[object Set]", s = "[object String]", p = "[object Symbol]", x = "[object ArrayBuffer]", b = "[object DataView]", C = i ? i.prototype : void 0, w = C ? C.valueOf : void 0;
  function $(k, M, E, R, T, I, B) {
    switch (E) {
      case b:
        if (k.byteLength != M.byteLength || k.byteOffset != M.byteOffset)
          return !1;
        k = k.buffer, M = M.buffer;
      case x:
        return !(k.byteLength != M.byteLength || !I(new t(k), new t(M)));
      case h:
      case d:
      case m:
        return r(+k, +M);
      case u:
        return k.name == M.name && k.message == M.message;
      case g:
      case s:
        return k == M + "";
      case f:
        var P = o;
      case y:
        var L = R & e;
        if (P || (P = a), k.size != M.size && !L)
          return !1;
        var F = B.get(k);
        if (F)
          return F == M;
        R |= c, B.set(k, M);
        var q = n(P(k), P(M), R, T, I, B);
        return B.delete(k), q;
      case p:
        if (w)
          return w.call(k) == w.call(M);
    }
    return !1;
  }
  return Do = $, Do;
}
var Lo, lu;
function W0() {
  if (lu) return Lo;
  lu = 1;
  var i = pf(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function o(a, e, c, h, d, u) {
    var f = c & t, m = i(a), g = m.length, y = i(e), s = y.length;
    if (g != s && !f)
      return !1;
    for (var p = g; p--; ) {
      var x = m[p];
      if (!(f ? x in e : n.call(e, x)))
        return !1;
    }
    var b = u.get(a), C = u.get(e);
    if (b && C)
      return b == e && C == a;
    var w = !0;
    u.set(a, e), u.set(e, a);
    for (var $ = f; ++p < g; ) {
      x = m[p];
      var k = a[x], M = e[x];
      if (h)
        var E = f ? h(M, k, x, e, a, u) : h(k, M, x, a, e, u);
      if (!(E === void 0 ? k === M || d(k, M, c, h, u) : E)) {
        w = !1;
        break;
      }
      $ || ($ = x == "constructor");
    }
    if (w && !$) {
      var R = a.constructor, T = e.constructor;
      R != T && "constructor" in a && "constructor" in e && !(typeof R == "function" && R instanceof R && typeof T == "function" && T instanceof T) && (w = !1);
    }
    return u.delete(a), u.delete(e), w;
  }
  return Lo = o, Lo;
}
var zo, du;
function N0() {
  if (du) return zo;
  du = 1;
  var i = Fr(), t = Cf(), r = B0(), n = W0(), o = Gt(), a = Ae(), e = jt(), c = or(), h = 1, d = "[object Arguments]", u = "[object Array]", f = "[object Object]", m = Object.prototype, g = m.hasOwnProperty;
  function y(s, p, x, b, C, w) {
    var $ = a(s), k = a(p), M = $ ? u : o(s), E = k ? u : o(p);
    M = M == d ? f : M, E = E == d ? f : E;
    var R = M == f, T = E == f, I = M == E;
    if (I && e(s)) {
      if (!e(p))
        return !1;
      $ = !0, R = !1;
    }
    if (I && !R)
      return w || (w = new i()), $ || c(s) ? t(s, p, x, b, C, w) : r(s, p, M, x, b, C, w);
    if (!(x & h)) {
      var B = R && g.call(s, "__wrapped__"), P = T && g.call(p, "__wrapped__");
      if (B || P) {
        var L = B ? s.value() : s, F = P ? p.value() : p;
        return w || (w = new i()), C(L, F, x, b, w);
      }
    }
    return I ? (w || (w = new i()), n(s, p, x, b, C, w)) : !1;
  }
  return zo = y, zo;
}
var Bo, uu;
function $f() {
  if (uu) return Bo;
  uu = 1;
  var i = N0(), t = pt();
  function r(n, o, a, e, c) {
    return n === o ? !0 : n == null || o == null || !t(n) && !t(o) ? n !== n && o !== o : i(n, o, a, e, r, c);
  }
  return Bo = r, Bo;
}
var Wo, pu;
function q0() {
  if (pu) return Wo;
  pu = 1;
  var i = Fr(), t = $f(), r = 1, n = 2;
  function o(a, e, c, h) {
    var d = c.length, u = d, f = !h;
    if (a == null)
      return !u;
    for (a = Object(a); d--; ) {
      var m = c[d];
      if (f && m[2] ? m[1] !== a[m[0]] : !(m[0] in a))
        return !1;
    }
    for (; ++d < u; ) {
      m = c[d];
      var g = m[0], y = a[g], s = m[1];
      if (f && m[2]) {
        if (y === void 0 && !(g in a))
          return !1;
      } else {
        var p = new i();
        if (h)
          var x = h(y, s, g, a, e, p);
        if (!(x === void 0 ? t(s, y, r | n, h, p) : x))
          return !1;
      }
    }
    return !0;
  }
  return Wo = o, Wo;
}
var No, hu;
function Mf() {
  if (hu) return No;
  hu = 1;
  var i = Je();
  function t(r) {
    return r === r && !i(r);
  }
  return No = t, No;
}
var qo, fu;
function O0() {
  if (fu) return qo;
  fu = 1;
  var i = Mf(), t = Tt();
  function r(n) {
    for (var o = t(n), a = o.length; a--; ) {
      var e = o[a], c = n[e];
      o[a] = [e, c, i(c)];
    }
    return o;
  }
  return qo = r, qo;
}
var Oo, gu;
function Ef() {
  if (gu) return Oo;
  gu = 1;
  function i(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Oo = i, Oo;
}
var Fo, mu;
function F0() {
  if (mu) return Fo;
  mu = 1;
  var i = q0(), t = O0(), r = Ef();
  function n(o) {
    var a = t(o);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(e) {
      return e === o || i(e, o, a);
    };
  }
  return Fo = n, Fo;
}
var Uo, yu;
function Yt() {
  if (yu) return Uo;
  yu = 1;
  var i = Lt(), t = pt(), r = "[object Symbol]";
  function n(o) {
    return typeof o == "symbol" || t(o) && i(o) == r;
  }
  return Uo = n, Uo;
}
var jo, bu;
function Tc() {
  if (bu) return jo;
  bu = 1;
  var i = Ae(), t = Yt(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function o(a, e) {
    if (i(a))
      return !1;
    var c = typeof a;
    return c == "number" || c == "symbol" || c == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || e != null && a in Object(e);
  }
  return jo = o, jo;
}
var Go, xu;
function U0() {
  if (xu) return Go;
  xu = 1;
  var i = vc(), t = "Expected a function";
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
  return r.Cache = i, Go = r, Go;
}
var Yo, vu;
function j0() {
  if (vu) return Yo;
  vu = 1;
  var i = U0(), t = 500;
  function r(n) {
    var o = i(n, function(e) {
      return a.size === t && a.clear(), e;
    }), a = o.cache;
    return o;
  }
  return Yo = r, Yo;
}
var Ho, wu;
function G0() {
  if (wu) return Ho;
  wu = 1;
  var i = j0(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = i(function(o) {
    var a = [];
    return o.charCodeAt(0) === 46 && a.push(""), o.replace(t, function(e, c, h, d) {
      a.push(h ? d.replace(r, "$1") : c || e);
    }), a;
  });
  return Ho = n, Ho;
}
var Vo, Su;
function Kr() {
  if (Su) return Vo;
  Su = 1;
  function i(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, a = Array(o); ++n < o; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Vo = i, Vo;
}
var Xo, ku;
function Y0() {
  if (ku) return Xo;
  ku = 1;
  var i = Ut(), t = Kr(), r = Ae(), n = Yt(), o = i ? i.prototype : void 0, a = o ? o.toString : void 0;
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
  return Xo = e, Xo;
}
var Ko, Cu;
function Rf() {
  if (Cu) return Ko;
  Cu = 1;
  var i = Y0();
  function t(r) {
    return r == null ? "" : i(r);
  }
  return Ko = t, Ko;
}
var Zo, $u;
function Zr() {
  if ($u) return Zo;
  $u = 1;
  var i = Ae(), t = Tc(), r = G0(), n = Rf();
  function o(a, e) {
    return i(a) ? a : t(a, e) ? [a] : r(n(a));
  }
  return Zo = o, Zo;
}
var Qo, Mu;
function ar() {
  if (Mu) return Qo;
  Mu = 1;
  var i = Yt();
  function t(r) {
    if (typeof r == "string" || i(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Qo = t, Qo;
}
var Jo, Eu;
function Qr() {
  if (Eu) return Jo;
  Eu = 1;
  var i = Zr(), t = ar();
  function r(n, o) {
    o = i(o, n);
    for (var a = 0, e = o.length; n != null && a < e; )
      n = n[t(o[a++])];
    return a && a == e ? n : void 0;
  }
  return Jo = r, Jo;
}
var ea, Ru;
function H0() {
  if (Ru) return ea;
  Ru = 1;
  var i = Qr();
  function t(r, n, o) {
    var a = r == null ? void 0 : i(r, n);
    return a === void 0 ? o : a;
  }
  return ea = t, ea;
}
var ta, _u;
function V0() {
  if (_u) return ta;
  _u = 1;
  function i(t, r) {
    return t != null && r in Object(t);
  }
  return ta = i, ta;
}
var ra, Iu;
function _f() {
  if (Iu) return ra;
  Iu = 1;
  var i = Zr(), t = ir(), r = Ae(), n = Gr(), o = Sc(), a = ar();
  function e(c, h, d) {
    h = i(h, c);
    for (var u = -1, f = h.length, m = !1; ++u < f; ) {
      var g = a(h[u]);
      if (!(m = c != null && d(c, g)))
        break;
      c = c[g];
    }
    return m || ++u != f ? m : (f = c == null ? 0 : c.length, !!f && o(f) && n(g, f) && (r(c) || t(c)));
  }
  return ra = e, ra;
}
var na, Au;
function If() {
  if (Au) return na;
  Au = 1;
  var i = V0(), t = _f();
  function r(n, o) {
    return n != null && t(n, o, i);
  }
  return na = r, na;
}
var ia, Tu;
function X0() {
  if (Tu) return ia;
  Tu = 1;
  var i = $f(), t = H0(), r = If(), n = Tc(), o = Mf(), a = Ef(), e = ar(), c = 1, h = 2;
  function d(u, f) {
    return n(u) && o(f) ? a(e(u), f) : function(m) {
      var g = t(m, u);
      return g === void 0 && g === f ? r(m, u) : i(f, g, c | h);
    };
  }
  return ia = d, ia;
}
var oa, Pu;
function Af() {
  if (Pu) return oa;
  Pu = 1;
  function i(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return oa = i, oa;
}
var aa, Du;
function K0() {
  if (Du) return aa;
  Du = 1;
  var i = Qr();
  function t(r) {
    return function(n) {
      return i(n, r);
    };
  }
  return aa = t, aa;
}
var sa, Lu;
function Z0() {
  if (Lu) return sa;
  Lu = 1;
  var i = Af(), t = K0(), r = Tc(), n = ar();
  function o(a) {
    return r(a) ? i(n(a)) : t(a);
  }
  return sa = o, sa;
}
var ca, zu;
function wt() {
  if (zu) return ca;
  zu = 1;
  var i = F0(), t = X0(), r = Wt(), n = Ae(), o = Z0();
  function a(e) {
    return typeof e == "function" ? e : e == null ? r : typeof e == "object" ? n(e) ? t(e[0], e[1]) : i(e) : o(e);
  }
  return ca = a, ca;
}
var la, Bu;
function Tf() {
  if (Bu) return la;
  Bu = 1;
  var i = cf(), t = T0(), r = wt(), n = Ae();
  function o(a, e) {
    var c = n(a) ? i : t;
    return c(a, r(e, 3));
  }
  return la = o, la;
}
var da, Wu;
function Q0() {
  if (Wu) return da;
  Wu = 1;
  var i = Object.prototype, t = i.hasOwnProperty;
  function r(n, o) {
    return n != null && t.call(n, o);
  }
  return da = r, da;
}
var ua, Nu;
function Pf() {
  if (Nu) return ua;
  Nu = 1;
  var i = Q0(), t = _f();
  function r(n, o) {
    return n != null && t(n, o, i);
  }
  return ua = r, ua;
}
var pa, qu;
function J0() {
  if (qu) return pa;
  qu = 1;
  var i = Cc(), t = Gt(), r = ir(), n = Ae(), o = vt(), a = jt(), e = Hr(), c = or(), h = "[object Map]", d = "[object Set]", u = Object.prototype, f = u.hasOwnProperty;
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
  return pa = m, pa;
}
var ha, Ou;
function Df() {
  if (Ou) return ha;
  Ou = 1;
  function i(t) {
    return t === void 0;
  }
  return ha = i, ha;
}
var fa, Fu;
function Lf() {
  if (Fu) return fa;
  Fu = 1;
  var i = Xr(), t = vt();
  function r(n, o) {
    var a = -1, e = t(n) ? Array(n.length) : [];
    return i(n, function(c, h, d) {
      e[++a] = o(c, h, d);
    }), e;
  }
  return fa = r, fa;
}
var ga, Uu;
function zf() {
  if (Uu) return ga;
  Uu = 1;
  var i = Kr(), t = wt(), r = Lf(), n = Ae();
  function o(a, e) {
    var c = n(a) ? i : r;
    return c(a, t(e, 3));
  }
  return ga = o, ga;
}
var ma, ju;
function em() {
  if (ju) return ma;
  ju = 1;
  function i(t, r, n, o) {
    var a = -1, e = t == null ? 0 : t.length;
    for (o && e && (n = t[++a]); ++a < e; )
      n = r(n, t[a], a, t);
    return n;
  }
  return ma = i, ma;
}
var ya, Gu;
function tm() {
  if (Gu) return ya;
  Gu = 1;
  function i(t, r, n, o, a) {
    return a(t, function(e, c, h) {
      n = o ? (o = !1, e) : r(n, e, c, h);
    }), n;
  }
  return ya = i, ya;
}
var ba, Yu;
function Bf() {
  if (Yu) return ba;
  Yu = 1;
  var i = em(), t = Xr(), r = wt(), n = tm(), o = Ae();
  function a(e, c, h) {
    var d = o(e) ? i : n, u = arguments.length < 3;
    return d(e, r(c, 4), h, u, t);
  }
  return ba = a, ba;
}
var xa, Hu;
function rm() {
  if (Hu) return xa;
  Hu = 1;
  var i = Lt(), t = Ae(), r = pt(), n = "[object String]";
  function o(a) {
    return typeof a == "string" || !t(a) && r(a) && i(a) == n;
  }
  return xa = o, xa;
}
var va, Vu;
function nm() {
  if (Vu) return va;
  Vu = 1;
  var i = Af(), t = i("length");
  return va = t, va;
}
var wa, Xu;
function im() {
  if (Xu) return wa;
  Xu = 1;
  var i = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", e = "\\u200d", c = RegExp("[" + e + i + o + a + "]");
  function h(d) {
    return c.test(d);
  }
  return wa = h, wa;
}
var Sa, Ku;
function om() {
  if (Ku) return Sa;
  Ku = 1;
  var i = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", o = t + r + n, a = "\\ufe0e\\ufe0f", e = "[" + i + "]", c = "[" + o + "]", h = "\\ud83c[\\udffb-\\udfff]", d = "(?:" + c + "|" + h + ")", u = "[^" + i + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", m = "[\\ud800-\\udbff][\\udc00-\\udfff]", g = "\\u200d", y = d + "?", s = "[" + a + "]?", p = "(?:" + g + "(?:" + [u, f, m].join("|") + ")" + s + y + ")*", x = s + y + p, b = "(?:" + [u + c + "?", c, f, m, e].join("|") + ")", C = RegExp(h + "(?=" + h + ")|" + b + x, "g");
  function w($) {
    for (var k = C.lastIndex = 0; C.test($); )
      ++k;
    return k;
  }
  return Sa = w, Sa;
}
var ka, Zu;
function am() {
  if (Zu) return ka;
  Zu = 1;
  var i = nm(), t = im(), r = om();
  function n(o) {
    return t(o) ? r(o) : i(o);
  }
  return ka = n, ka;
}
var Ca, Qu;
function sm() {
  if (Qu) return Ca;
  Qu = 1;
  var i = Cc(), t = Gt(), r = vt(), n = rm(), o = am(), a = "[object Map]", e = "[object Set]";
  function c(h) {
    if (h == null)
      return 0;
    if (r(h))
      return n(h) ? o(h) : h.length;
    var d = t(h);
    return d == a || d == e ? h.size : i(h).length;
  }
  return Ca = c, Ca;
}
var $a, Ju;
function cm() {
  if (Ju) return $a;
  Ju = 1;
  var i = wc(), t = mf(), r = Ic(), n = wt(), o = Vr(), a = Ae(), e = jt(), c = rr(), h = Je(), d = or();
  function u(f, m, g) {
    var y = a(f), s = y || e(f) || d(f);
    if (m = n(m, 4), g == null) {
      var p = f && f.constructor;
      s ? g = y ? new p() : [] : h(f) ? g = c(p) ? t(o(f)) : {} : g = {};
    }
    return (s ? i : r)(f, function(x, b, C) {
      return m(g, x, b, C);
    }), g;
  }
  return $a = u, $a;
}
var Ma, ep;
function lm() {
  if (ep) return Ma;
  ep = 1;
  var i = Ut(), t = ir(), r = Ae(), n = i ? i.isConcatSpreadable : void 0;
  function o(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Ma = o, Ma;
}
var Ea, tp;
function Pc() {
  if (tp) return Ea;
  tp = 1;
  var i = Mc(), t = lm();
  function r(n, o, a, e, c) {
    var h = -1, d = n.length;
    for (a || (a = t), c || (c = []); ++h < d; ) {
      var u = n[h];
      o > 0 && a(u) ? o > 1 ? r(u, o - 1, a, e, c) : i(c, u) : e || (c[c.length] = u);
    }
    return c;
  }
  return Ea = r, Ea;
}
var Ra, rp;
function dm() {
  if (rp) return Ra;
  rp = 1;
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
  return Ra = i, Ra;
}
var _a, np;
function Wf() {
  if (np) return _a;
  np = 1;
  var i = dm(), t = Math.max;
  function r(n, o, a) {
    return o = t(o === void 0 ? n.length - 1 : o, 0), function() {
      for (var e = arguments, c = -1, h = t(e.length - o, 0), d = Array(h); ++c < h; )
        d[c] = e[o + c];
      c = -1;
      for (var u = Array(o + 1); ++c < o; )
        u[c] = e[c];
      return u[o] = a(d), i(n, this, u);
    };
  }
  return _a = r, _a;
}
var Ia, ip;
function um() {
  if (ip) return Ia;
  ip = 1;
  var i = Rc(), t = rf(), r = Wt(), n = t ? function(o, a) {
    return t(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: i(a),
      writable: !0
    });
  } : r;
  return Ia = n, Ia;
}
var Aa, op;
function pm() {
  if (op) return Aa;
  op = 1;
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
  return Aa = n, Aa;
}
var Ta, ap;
function Nf() {
  if (ap) return Ta;
  ap = 1;
  var i = um(), t = pm(), r = t(i);
  return Ta = r, Ta;
}
var Pa, sp;
function Jr() {
  if (sp) return Pa;
  sp = 1;
  var i = Wt(), t = Wf(), r = Nf();
  function n(o, a) {
    return r(t(o, a, i), o + "");
  }
  return Pa = n, Pa;
}
var Da, cp;
function qf() {
  if (cp) return Da;
  cp = 1;
  function i(t, r, n, o) {
    for (var a = t.length, e = n + (o ? 1 : -1); o ? e-- : ++e < a; )
      if (r(t[e], e, t))
        return e;
    return -1;
  }
  return Da = i, Da;
}
var La, lp;
function hm() {
  if (lp) return La;
  lp = 1;
  function i(t) {
    return t !== t;
  }
  return La = i, La;
}
var za, dp;
function fm() {
  if (dp) return za;
  dp = 1;
  function i(t, r, n) {
    for (var o = n - 1, a = t.length; ++o < a; )
      if (t[o] === r)
        return o;
    return -1;
  }
  return za = i, za;
}
var Ba, up;
function gm() {
  if (up) return Ba;
  up = 1;
  var i = qf(), t = hm(), r = fm();
  function n(o, a, e) {
    return a === a ? r(o, a, e) : i(o, t, e);
  }
  return Ba = n, Ba;
}
var Wa, pp;
function mm() {
  if (pp) return Wa;
  pp = 1;
  var i = gm();
  function t(r, n) {
    var o = r == null ? 0 : r.length;
    return !!o && i(r, n, 0) > -1;
  }
  return Wa = t, Wa;
}
var Na, hp;
function ym() {
  if (hp) return Na;
  hp = 1;
  function i(t, r, n) {
    for (var o = -1, a = t == null ? 0 : t.length; ++o < a; )
      if (n(r, t[o]))
        return !0;
    return !1;
  }
  return Na = i, Na;
}
var qa, fp;
function bm() {
  if (fp) return qa;
  fp = 1;
  function i() {
  }
  return qa = i, qa;
}
var Oa, gp;
function xm() {
  if (gp) return Oa;
  gp = 1;
  var i = hf(), t = bm(), r = Ac(), n = 1 / 0, o = i && 1 / r(new i([, -0]))[1] == n ? function(a) {
    return new i(a);
  } : t;
  return Oa = o, Oa;
}
var Fa, mp;
function vm() {
  if (mp) return Fa;
  mp = 1;
  var i = Sf(), t = mm(), r = ym(), n = kf(), o = xm(), a = Ac(), e = 200;
  function c(h, d, u) {
    var f = -1, m = t, g = h.length, y = !0, s = [], p = s;
    if (u)
      y = !1, m = r;
    else if (g >= e) {
      var x = d ? null : o(h);
      if (x)
        return a(x);
      y = !1, m = n, p = new i();
    } else
      p = d ? [] : s;
    e:
      for (; ++f < g; ) {
        var b = h[f], C = d ? d(b) : b;
        if (b = u || b !== 0 ? b : 0, y && C === C) {
          for (var w = p.length; w--; )
            if (p[w] === C)
              continue e;
          d && p.push(C), s.push(b);
        } else m(p, C, u) || (p !== s && p.push(C), s.push(b));
      }
    return s;
  }
  return Fa = c, Fa;
}
var Ua, yp;
function Of() {
  if (yp) return Ua;
  yp = 1;
  var i = vt(), t = pt();
  function r(n) {
    return t(n) && i(n);
  }
  return Ua = r, Ua;
}
var ja, bp;
function wm() {
  if (bp) return ja;
  bp = 1;
  var i = Pc(), t = Jr(), r = vm(), n = Of(), o = t(function(a) {
    return r(i(a, 1, n, !0));
  });
  return ja = o, ja;
}
var Ga, xp;
function Sm() {
  if (xp) return Ga;
  xp = 1;
  var i = Kr();
  function t(r, n) {
    return i(n, function(o) {
      return r[o];
    });
  }
  return Ga = t, Ga;
}
var Ya, vp;
function Ff() {
  if (vp) return Ya;
  vp = 1;
  var i = Sm(), t = Tt();
  function r(n) {
    return n == null ? [] : i(n, t(n));
  }
  return Ya = r, Ya;
}
var Ha, wp;
function et() {
  if (wp) return Ha;
  wp = 1;
  var i;
  if (typeof bc == "function")
    try {
      i = {
        clone: _0(),
        constant: Rc(),
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
  return i || (i = window._), Ha = i, Ha;
}
var Va, Sp;
function Dc() {
  if (Sp) return Va;
  Sp = 1;
  var i = et();
  Va = o;
  var t = "\0", r = "\0", n = "";
  function o(u) {
    this._isDirected = i.has(u, "directed") ? u.directed : !0, this._isMultigraph = i.has(u, "multigraph") ? u.multigraph : !1, this._isCompound = i.has(u, "compound") ? u.compound : !1, this._label = void 0, this._defaultNodeLabelFn = i.constant(void 0), this._defaultEdgeLabelFn = i.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[r] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  o.prototype._nodeCount = 0, o.prototype._edgeCount = 0, o.prototype.isDirected = function() {
    return this._isDirected;
  }, o.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, o.prototype.isCompound = function() {
    return this._isCompound;
  }, o.prototype.setGraph = function(u) {
    return this._label = u, this;
  }, o.prototype.graph = function() {
    return this._label;
  }, o.prototype.setDefaultNodeLabel = function(u) {
    return i.isFunction(u) || (u = i.constant(u)), this._defaultNodeLabelFn = u, this;
  }, o.prototype.nodeCount = function() {
    return this._nodeCount;
  }, o.prototype.nodes = function() {
    return i.keys(this._nodes);
  }, o.prototype.sources = function() {
    var u = this;
    return i.filter(this.nodes(), function(f) {
      return i.isEmpty(u._in[f]);
    });
  }, o.prototype.sinks = function() {
    var u = this;
    return i.filter(this.nodes(), function(f) {
      return i.isEmpty(u._out[f]);
    });
  }, o.prototype.setNodes = function(u, f) {
    var m = arguments, g = this;
    return i.each(u, function(y) {
      m.length > 1 ? g.setNode(y, f) : g.setNode(y);
    }), this;
  }, o.prototype.setNode = function(u, f) {
    return i.has(this._nodes, u) ? (arguments.length > 1 && (this._nodes[u] = f), this) : (this._nodes[u] = arguments.length > 1 ? f : this._defaultNodeLabelFn(u), this._isCompound && (this._parent[u] = r, this._children[u] = {}, this._children[r][u] = !0), this._in[u] = {}, this._preds[u] = {}, this._out[u] = {}, this._sucs[u] = {}, ++this._nodeCount, this);
  }, o.prototype.node = function(u) {
    return this._nodes[u];
  }, o.prototype.hasNode = function(u) {
    return i.has(this._nodes, u);
  }, o.prototype.removeNode = function(u) {
    var f = this;
    if (i.has(this._nodes, u)) {
      var m = function(g) {
        f.removeEdge(f._edgeObjs[g]);
      };
      delete this._nodes[u], this._isCompound && (this._removeFromParentsChildList(u), delete this._parent[u], i.each(this.children(u), function(g) {
        f.setParent(g);
      }), delete this._children[u]), i.each(i.keys(this._in[u]), m), delete this._in[u], delete this._preds[u], i.each(i.keys(this._out[u]), m), delete this._out[u], delete this._sucs[u], --this._nodeCount;
    }
    return this;
  }, o.prototype.setParent = function(u, f) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (i.isUndefined(f))
      f = r;
    else {
      f += "";
      for (var m = f; !i.isUndefined(m); m = this.parent(m))
        if (m === u)
          throw new Error("Setting " + f + " as parent of " + u + " would create a cycle");
      this.setNode(f);
    }
    return this.setNode(u), this._removeFromParentsChildList(u), this._parent[u] = f, this._children[f][u] = !0, this;
  }, o.prototype._removeFromParentsChildList = function(u) {
    delete this._children[this._parent[u]][u];
  }, o.prototype.parent = function(u) {
    if (this._isCompound) {
      var f = this._parent[u];
      if (f !== r)
        return f;
    }
  }, o.prototype.children = function(u) {
    if (i.isUndefined(u) && (u = r), this._isCompound) {
      var f = this._children[u];
      if (f)
        return i.keys(f);
    } else {
      if (u === r)
        return this.nodes();
      if (this.hasNode(u))
        return [];
    }
  }, o.prototype.predecessors = function(u) {
    var f = this._preds[u];
    if (f)
      return i.keys(f);
  }, o.prototype.successors = function(u) {
    var f = this._sucs[u];
    if (f)
      return i.keys(f);
  }, o.prototype.neighbors = function(u) {
    var f = this.predecessors(u);
    if (f)
      return i.union(f, this.successors(u));
  }, o.prototype.isLeaf = function(u) {
    var f;
    return this.isDirected() ? f = this.successors(u) : f = this.neighbors(u), f.length === 0;
  }, o.prototype.filterNodes = function(u) {
    var f = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    f.setGraph(this.graph());
    var m = this;
    i.each(this._nodes, function(s, p) {
      u(p) && f.setNode(p, s);
    }), i.each(this._edgeObjs, function(s) {
      f.hasNode(s.v) && f.hasNode(s.w) && f.setEdge(s, m.edge(s));
    });
    var g = {};
    function y(s) {
      var p = m.parent(s);
      return p === void 0 || f.hasNode(p) ? (g[s] = p, p) : p in g ? g[p] : y(p);
    }
    return this._isCompound && i.each(f.nodes(), function(s) {
      f.setParent(s, y(s));
    }), f;
  }, o.prototype.setDefaultEdgeLabel = function(u) {
    return i.isFunction(u) || (u = i.constant(u)), this._defaultEdgeLabelFn = u, this;
  }, o.prototype.edgeCount = function() {
    return this._edgeCount;
  }, o.prototype.edges = function() {
    return i.values(this._edgeObjs);
  }, o.prototype.setPath = function(u, f) {
    var m = this, g = arguments;
    return i.reduce(u, function(y, s) {
      return g.length > 1 ? m.setEdge(y, s, f) : m.setEdge(y, s), s;
    }), this;
  }, o.prototype.setEdge = function() {
    var u, f, m, g, y = !1, s = arguments[0];
    typeof s == "object" && s !== null && "v" in s ? (u = s.v, f = s.w, m = s.name, arguments.length === 2 && (g = arguments[1], y = !0)) : (u = s, f = arguments[1], m = arguments[3], arguments.length > 2 && (g = arguments[2], y = !0)), u = "" + u, f = "" + f, i.isUndefined(m) || (m = "" + m);
    var p = c(this._isDirected, u, f, m);
    if (i.has(this._edgeLabels, p))
      return y && (this._edgeLabels[p] = g), this;
    if (!i.isUndefined(m) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(u), this.setNode(f), this._edgeLabels[p] = y ? g : this._defaultEdgeLabelFn(u, f, m);
    var x = h(this._isDirected, u, f, m);
    return u = x.v, f = x.w, Object.freeze(x), this._edgeObjs[p] = x, a(this._preds[f], u), a(this._sucs[u], f), this._in[f][p] = x, this._out[u][p] = x, this._edgeCount++, this;
  }, o.prototype.edge = function(u, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : c(this._isDirected, u, f, m);
    return this._edgeLabels[g];
  }, o.prototype.hasEdge = function(u, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : c(this._isDirected, u, f, m);
    return i.has(this._edgeLabels, g);
  }, o.prototype.removeEdge = function(u, f, m) {
    var g = arguments.length === 1 ? d(this._isDirected, arguments[0]) : c(this._isDirected, u, f, m), y = this._edgeObjs[g];
    return y && (u = y.v, f = y.w, delete this._edgeLabels[g], delete this._edgeObjs[g], e(this._preds[f], u), e(this._sucs[u], f), delete this._in[f][g], delete this._out[u][g], this._edgeCount--), this;
  }, o.prototype.inEdges = function(u, f) {
    var m = this._in[u];
    if (m) {
      var g = i.values(m);
      return f ? i.filter(g, function(y) {
        return y.v === f;
      }) : g;
    }
  }, o.prototype.outEdges = function(u, f) {
    var m = this._out[u];
    if (m) {
      var g = i.values(m);
      return f ? i.filter(g, function(y) {
        return y.w === f;
      }) : g;
    }
  }, o.prototype.nodeEdges = function(u, f) {
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
  function c(u, f, m, g) {
    var y = "" + f, s = "" + m;
    if (!u && y > s) {
      var p = y;
      y = s, s = p;
    }
    return y + n + s + n + (i.isUndefined(g) ? t : g);
  }
  function h(u, f, m, g) {
    var y = "" + f, s = "" + m;
    if (!u && y > s) {
      var p = y;
      y = s, s = p;
    }
    var x = { v: y, w: s };
    return g && (x.name = g), x;
  }
  function d(u, f) {
    return c(u, f.v, f.w, f.name);
  }
  return Va;
}
var Xa, kp;
function km() {
  return kp || (kp = 1, Xa = "2.1.8"), Xa;
}
var Ka, Cp;
function Cm() {
  return Cp || (Cp = 1, Ka = {
    Graph: Dc(),
    version: km()
  }), Ka;
}
var Za, $p;
function $m() {
  if ($p) return Za;
  $p = 1;
  var i = et(), t = Dc();
  Za = {
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
      var h = e.node(c), d = e.parent(c), u = { v: c };
      return i.isUndefined(h) || (u.value = h), i.isUndefined(d) || (u.parent = d), u;
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
  return Za;
}
var Qa, Mp;
function Mm() {
  if (Mp) return Qa;
  Mp = 1;
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
var Ja, Ep;
function Uf() {
  if (Ep) return Ja;
  Ep = 1;
  var i = et();
  Ja = t;
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
  }, Ja;
}
var es, Rp;
function jf() {
  if (Rp) return es;
  Rp = 1;
  var i = et(), t = Uf();
  es = n;
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
    var d = {}, u = new t(), f, m, g = function(y) {
      var s = y.v !== f ? y.v : y.w, p = d[s], x = c(y), b = m.distance + x;
      if (x < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + y + " Weight: " + x);
      b < p.distance && (p.distance = b, p.predecessor = f, u.decrease(s, b));
    };
    for (a.nodes().forEach(function(y) {
      var s = y === e ? 0 : Number.POSITIVE_INFINITY;
      d[y] = { distance: s }, u.add(y, s);
    }); u.size() > 0 && (f = u.removeMin(), m = d[f], m.distance !== Number.POSITIVE_INFINITY); )
      h(f).forEach(g);
    return d;
  }
  return es;
}
var ts, _p;
function Em() {
  if (_p) return ts;
  _p = 1;
  var i = jf(), t = et();
  ts = r;
  function r(n, o, a) {
    return t.transform(n.nodes(), function(e, c) {
      e[c] = i(n, c, o, a);
    }, {});
  }
  return ts;
}
var rs, Ip;
function Gf() {
  if (Ip) return rs;
  Ip = 1;
  var i = et();
  rs = t;
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
        var u = [], f;
        do
          f = o.pop(), a[f].onStack = !1, u.push(f);
        while (h !== f);
        e.push(u);
      }
    }
    return r.nodes().forEach(function(h) {
      i.has(a, h) || c(h);
    }), e;
  }
  return rs;
}
var ns, Ap;
function Rm() {
  if (Ap) return ns;
  Ap = 1;
  var i = et(), t = Gf();
  ns = r;
  function r(n) {
    return i.filter(t(n), function(o) {
      return o.length > 1 || o.length === 1 && n.hasEdge(o[0], o[0]);
    });
  }
  return ns;
}
var is, Tp;
function _m() {
  if (Tp) return is;
  Tp = 1;
  var i = et();
  is = r;
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
      c[d] = {}, c[d][d] = { distance: 0 }, h.forEach(function(u) {
        d !== u && (c[d][u] = { distance: Number.POSITIVE_INFINITY });
      }), e(d).forEach(function(u) {
        var f = u.v === d ? u.w : u.v, m = a(u);
        c[d][f] = { distance: m, predecessor: d };
      });
    }), h.forEach(function(d) {
      var u = c[d];
      h.forEach(function(f) {
        var m = c[f];
        h.forEach(function(g) {
          var y = m[d], s = u[g], p = m[g], x = y.distance + s.distance;
          x < p.distance && (p.distance = x, p.predecessor = s.predecessor);
        });
      });
    }), c;
  }
  return is;
}
var os, Pp;
function Yf() {
  if (Pp) return os;
  Pp = 1;
  var i = et();
  os = t, t.CycleException = r;
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
  return r.prototype = new Error(), os;
}
var as, Dp;
function Im() {
  if (Dp) return as;
  Dp = 1;
  var i = Yf();
  as = t;
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
  return as;
}
var ss, Lp;
function Hf() {
  if (Lp) return ss;
  Lp = 1;
  var i = et();
  ss = t;
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
  return ss;
}
var cs, zp;
function Am() {
  if (zp) return cs;
  zp = 1;
  var i = Hf();
  cs = t;
  function t(r, n) {
    return i(r, n, "post");
  }
  return cs;
}
var ls, Bp;
function Tm() {
  if (Bp) return ls;
  Bp = 1;
  var i = Hf();
  ls = t;
  function t(r, n) {
    return i(r, n, "pre");
  }
  return ls;
}
var ds, Wp;
function Pm() {
  if (Wp) return ds;
  Wp = 1;
  var i = et(), t = Dc(), r = Uf();
  ds = n;
  function n(o, a) {
    var e = new t(), c = {}, h = new r(), d;
    function u(m) {
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
      o.nodeEdges(d).forEach(u);
    }
    return e;
  }
  return ds;
}
var us, Np;
function Dm() {
  return Np || (Np = 1, us = {
    components: Mm(),
    dijkstra: jf(),
    dijkstraAll: Em(),
    findCycles: Rm(),
    floydWarshall: _m(),
    isAcyclic: Im(),
    postorder: Am(),
    preorder: Tm(),
    prim: Pm(),
    tarjan: Gf(),
    topsort: Yf()
  }), us;
}
var ps, qp;
function Lm() {
  if (qp) return ps;
  qp = 1;
  var i = Cm();
  return ps = {
    Graph: i.Graph,
    json: $m(),
    alg: Dm(),
    version: i.version
  }, ps;
}
var Ir;
if (typeof bc == "function")
  try {
    Ir = Lm();
  } catch {
  }
Ir || (Ir = window.graphlib);
var ot = Ir, hs, Op;
function zm() {
  if (Op) return hs;
  Op = 1;
  var i = bf(), t = 1, r = 4;
  function n(o) {
    return i(o, t | r);
  }
  return hs = n, hs;
}
var fs, Fp;
function en() {
  if (Fp) return fs;
  Fp = 1;
  var i = Ft(), t = vt(), r = Gr(), n = Je();
  function o(a, e, c) {
    if (!n(c))
      return !1;
    var h = typeof e;
    return (h == "number" ? t(c) && r(e, c.length) : h == "string" && e in c) ? i(c[e], a) : !1;
  }
  return fs = o, fs;
}
var gs, Up;
function Bm() {
  if (Up) return gs;
  Up = 1;
  var i = Jr(), t = Ft(), r = en(), n = Bt(), o = Object.prototype, a = o.hasOwnProperty, e = i(function(c, h) {
    c = Object(c);
    var d = -1, u = h.length, f = u > 2 ? h[2] : void 0;
    for (f && r(h[0], h[1], f) && (u = 1); ++d < u; )
      for (var m = h[d], g = n(m), y = -1, s = g.length; ++y < s; ) {
        var p = g[y], x = c[p];
        (x === void 0 || t(x, o[p]) && !a.call(c, p)) && (c[p] = m[p]);
      }
    return c;
  });
  return gs = e, gs;
}
var ms, jp;
function Wm() {
  if (jp) return ms;
  jp = 1;
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
      var u = o(a, e, c);
      return u > -1 ? h[d ? a[u] : u] : void 0;
    };
  }
  return ms = n, ms;
}
var ys, Gp;
function Nm() {
  if (Gp) return ys;
  Gp = 1;
  var i = /\s/;
  function t(r) {
    for (var n = r.length; n-- && i.test(r.charAt(n)); )
      ;
    return n;
  }
  return ys = t, ys;
}
var bs, Yp;
function qm() {
  if (Yp) return bs;
  Yp = 1;
  var i = Nm(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, i(n) + 1).replace(t, "");
  }
  return bs = r, bs;
}
var xs, Hp;
function Om() {
  if (Hp) return xs;
  Hp = 1;
  var i = qm(), t = Je(), r = Yt(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, e = /^0o[0-7]+$/i, c = parseInt;
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
    d = i(d);
    var f = a.test(d);
    return f || e.test(d) ? c(d.slice(2), f ? 2 : 8) : o.test(d) ? n : +d;
  }
  return xs = h, xs;
}
var vs, Vp;
function Vf() {
  if (Vp) return vs;
  Vp = 1;
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
  return vs = n, vs;
}
var ws, Xp;
function Fm() {
  if (Xp) return ws;
  Xp = 1;
  var i = Vf();
  function t(r) {
    var n = i(r), o = n % 1;
    return n === n ? o ? n - o : n : 0;
  }
  return ws = t, ws;
}
var Ss, Kp;
function Um() {
  if (Kp) return Ss;
  Kp = 1;
  var i = qf(), t = wt(), r = Fm(), n = Math.max;
  function o(a, e, c) {
    var h = a == null ? 0 : a.length;
    if (!h)
      return -1;
    var d = c == null ? 0 : r(c);
    return d < 0 && (d = n(h + d, 0)), i(a, t(e, 3), d);
  }
  return Ss = o, Ss;
}
var ks, Zp;
function jm() {
  if (Zp) return ks;
  Zp = 1;
  var i = Wm(), t = Um(), r = i(t);
  return ks = r, ks;
}
var Cs, Qp;
function Xf() {
  if (Qp) return Cs;
  Qp = 1;
  var i = Pc();
  function t(r) {
    var n = r == null ? 0 : r.length;
    return n ? i(r, 1) : [];
  }
  return Cs = t, Cs;
}
var $s, Jp;
function Gm() {
  if (Jp) return $s;
  Jp = 1;
  var i = _c(), t = xf(), r = Bt();
  function n(o, a) {
    return o == null ? o : i(o, t(a), r);
  }
  return $s = n, $s;
}
var Ms, eh;
function Ym() {
  if (eh) return Ms;
  eh = 1;
  function i(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Ms = i, Ms;
}
var Es, th;
function Hm() {
  if (th) return Es;
  th = 1;
  var i = Ur(), t = Ic(), r = wt();
  function n(o, a) {
    var e = {};
    return a = r(a, 3), t(o, function(c, h, d) {
      i(e, h, a(c, h, d));
    }), e;
  }
  return Es = n, Es;
}
var Rs, rh;
function Lc() {
  if (rh) return Rs;
  rh = 1;
  var i = Yt();
  function t(r, n, o) {
    for (var a = -1, e = r.length; ++a < e; ) {
      var c = r[a], h = n(c);
      if (h != null && (d === void 0 ? h === h && !i(h) : o(h, d)))
        var d = h, u = c;
    }
    return u;
  }
  return Rs = t, Rs;
}
var _s, nh;
function Vm() {
  if (nh) return _s;
  nh = 1;
  function i(t, r) {
    return t > r;
  }
  return _s = i, _s;
}
var Is, ih;
function Xm() {
  if (ih) return Is;
  ih = 1;
  var i = Lc(), t = Vm(), r = Wt();
  function n(o) {
    return o && o.length ? i(o, r, t) : void 0;
  }
  return Is = n, Is;
}
var As, oh;
function Kf() {
  if (oh) return As;
  oh = 1;
  var i = Ur(), t = Ft();
  function r(n, o, a) {
    (a !== void 0 && !t(n[o], a) || a === void 0 && !(o in n)) && i(n, o, a);
  }
  return As = r, As;
}
var Ts, ah;
function Km() {
  if (ah) return Ts;
  ah = 1;
  var i = Lt(), t = Vr(), r = pt(), n = "[object Object]", o = Function.prototype, a = Object.prototype, e = o.toString, c = a.hasOwnProperty, h = e.call(Object);
  function d(u) {
    if (!r(u) || i(u) != n)
      return !1;
    var f = t(u);
    if (f === null)
      return !0;
    var m = c.call(f, "constructor") && f.constructor;
    return typeof m == "function" && m instanceof m && e.call(m) == h;
  }
  return Ts = d, Ts;
}
var Ps, sh;
function Zf() {
  if (sh) return Ps;
  sh = 1;
  function i(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return Ps = i, Ps;
}
var Ds, ch;
function Zm() {
  if (ch) return Ds;
  ch = 1;
  var i = nr(), t = Bt();
  function r(n) {
    return i(n, t(n));
  }
  return Ds = r, Ds;
}
var Ls, lh;
function Qm() {
  if (lh) return Ls;
  lh = 1;
  var i = Kf(), t = af(), r = gf(), n = sf(), o = yf(), a = ir(), e = Ae(), c = Of(), h = jt(), d = rr(), u = Je(), f = Km(), m = or(), g = Zf(), y = Zm();
  function s(p, x, b, C, w, $, k) {
    var M = g(p, b), E = g(x, b), R = k.get(E);
    if (R) {
      i(p, b, R);
      return;
    }
    var T = $ ? $(M, E, b + "", p, x, k) : void 0, I = T === void 0;
    if (I) {
      var B = e(E), P = !B && h(E), L = !B && !P && m(E);
      T = E, B || P || L ? e(M) ? T = M : c(M) ? T = n(M) : P ? (I = !1, T = t(E, !0)) : L ? (I = !1, T = r(E, !0)) : T = [] : f(E) || a(E) ? (T = M, a(M) ? T = y(M) : (!u(M) || d(M)) && (T = o(E))) : I = !1;
    }
    I && (k.set(E, T), w(T, E, C, $, k), k.delete(E)), i(p, b, T);
  }
  return Ls = s, Ls;
}
var zs, dh;
function Jm() {
  if (dh) return zs;
  dh = 1;
  var i = Fr(), t = Kf(), r = _c(), n = Qm(), o = Je(), a = Bt(), e = Zf();
  function c(h, d, u, f, m) {
    h !== d && r(d, function(g, y) {
      if (m || (m = new i()), o(g))
        n(h, d, y, u, c, f, m);
      else {
        var s = f ? f(e(h, y), g, y + "", h, d, m) : void 0;
        s === void 0 && (s = g), t(h, y, s);
      }
    }, a);
  }
  return zs = c, zs;
}
var Bs, uh;
function ey() {
  if (uh) return Bs;
  uh = 1;
  var i = Jr(), t = en();
  function r(n) {
    return i(function(o, a) {
      var e = -1, c = a.length, h = c > 1 ? a[c - 1] : void 0, d = c > 2 ? a[2] : void 0;
      for (h = n.length > 3 && typeof h == "function" ? (c--, h) : void 0, d && t(a[0], a[1], d) && (h = c < 3 ? void 0 : h, c = 1), o = Object(o); ++e < c; ) {
        var u = a[e];
        u && n(o, u, e, h);
      }
      return o;
    });
  }
  return Bs = r, Bs;
}
var Ws, ph;
function ty() {
  if (ph) return Ws;
  ph = 1;
  var i = Jm(), t = ey(), r = t(function(n, o, a) {
    i(n, o, a);
  });
  return Ws = r, Ws;
}
var Ns, hh;
function Qf() {
  if (hh) return Ns;
  hh = 1;
  function i(t, r) {
    return t < r;
  }
  return Ns = i, Ns;
}
var qs, fh;
function ry() {
  if (fh) return qs;
  fh = 1;
  var i = Lc(), t = Qf(), r = Wt();
  function n(o) {
    return o && o.length ? i(o, r, t) : void 0;
  }
  return qs = n, qs;
}
var Os, gh;
function ny() {
  if (gh) return Os;
  gh = 1;
  var i = Lc(), t = wt(), r = Qf();
  function n(o, a) {
    return o && o.length ? i(o, t(a, 2), r) : void 0;
  }
  return Os = n, Os;
}
var Fs, mh;
function iy() {
  if (mh) return Fs;
  mh = 1;
  var i = it(), t = function() {
    return i.Date.now();
  };
  return Fs = t, Fs;
}
var Us, yh;
function oy() {
  if (yh) return Us;
  yh = 1;
  var i = jr(), t = Zr(), r = Gr(), n = Je(), o = ar();
  function a(e, c, h, d) {
    if (!n(e))
      return e;
    c = t(c, e);
    for (var u = -1, f = c.length, m = f - 1, g = e; g != null && ++u < f; ) {
      var y = o(c[u]), s = h;
      if (y === "__proto__" || y === "constructor" || y === "prototype")
        return e;
      if (u != m) {
        var p = g[y];
        s = d ? d(p, y, g) : void 0, s === void 0 && (s = n(p) ? p : r(c[u + 1]) ? [] : {});
      }
      i(g, y, s), g = g[y];
    }
    return e;
  }
  return Us = a, Us;
}
var js, bh;
function ay() {
  if (bh) return js;
  bh = 1;
  var i = Qr(), t = oy(), r = Zr();
  function n(o, a, e) {
    for (var c = -1, h = a.length, d = {}; ++c < h; ) {
      var u = a[c], f = i(o, u);
      e(f, u) && t(d, r(u, o), f);
    }
    return d;
  }
  return js = n, js;
}
var Gs, xh;
function sy() {
  if (xh) return Gs;
  xh = 1;
  var i = ay(), t = If();
  function r(n, o) {
    return i(n, o, function(a, e) {
      return t(n, e);
    });
  }
  return Gs = r, Gs;
}
var Ys, vh;
function cy() {
  if (vh) return Ys;
  vh = 1;
  var i = Xf(), t = Wf(), r = Nf();
  function n(o) {
    return r(t(o, void 0, i), o + "");
  }
  return Ys = n, Ys;
}
var Hs, wh;
function ly() {
  if (wh) return Hs;
  wh = 1;
  var i = sy(), t = cy(), r = t(function(n, o) {
    return n == null ? {} : i(n, o);
  });
  return Hs = r, Hs;
}
var Vs, Sh;
function dy() {
  if (Sh) return Vs;
  Sh = 1;
  var i = Math.ceil, t = Math.max;
  function r(n, o, a, e) {
    for (var c = -1, h = t(i((o - n) / (a || 1)), 0), d = Array(h); h--; )
      d[e ? h : ++c] = n, n += a;
    return d;
  }
  return Vs = r, Vs;
}
var Xs, kh;
function uy() {
  if (kh) return Xs;
  kh = 1;
  var i = dy(), t = en(), r = Vf();
  function n(o) {
    return function(a, e, c) {
      return c && typeof c != "number" && t(a, e, c) && (e = c = void 0), a = r(a), e === void 0 ? (e = a, a = 0) : e = r(e), c = c === void 0 ? a < e ? 1 : -1 : r(c), i(a, e, c, o);
    };
  }
  return Xs = n, Xs;
}
var Ks, Ch;
function py() {
  if (Ch) return Ks;
  Ch = 1;
  var i = uy(), t = i();
  return Ks = t, Ks;
}
var Zs, $h;
function hy() {
  if ($h) return Zs;
  $h = 1;
  function i(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Zs = i, Zs;
}
var Qs, Mh;
function fy() {
  if (Mh) return Qs;
  Mh = 1;
  var i = Yt();
  function t(r, n) {
    if (r !== n) {
      var o = r !== void 0, a = r === null, e = r === r, c = i(r), h = n !== void 0, d = n === null, u = n === n, f = i(n);
      if (!d && !f && !c && r > n || c && h && u && !d && !f || a && h && u || !o && u || !e)
        return 1;
      if (!a && !c && !f && r < n || f && o && e && !a && !c || d && o && e || !h && e || !u)
        return -1;
    }
    return 0;
  }
  return Qs = t, Qs;
}
var Js, Eh;
function gy() {
  if (Eh) return Js;
  Eh = 1;
  var i = fy();
  function t(r, n, o) {
    for (var a = -1, e = r.criteria, c = n.criteria, h = e.length, d = o.length; ++a < h; ) {
      var u = i(e[a], c[a]);
      if (u) {
        if (a >= d)
          return u;
        var f = o[a];
        return u * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Js = t, Js;
}
var ec, Rh;
function my() {
  if (Rh) return ec;
  Rh = 1;
  var i = Kr(), t = Qr(), r = wt(), n = Lf(), o = hy(), a = Yr(), e = gy(), c = Wt(), h = Ae();
  function d(u, f, m) {
    f.length ? f = i(f, function(s) {
      return h(s) ? function(p) {
        return t(p, s.length === 1 ? s[0] : s);
      } : s;
    }) : f = [c];
    var g = -1;
    f = i(f, a(r));
    var y = n(u, function(s, p, x) {
      var b = i(f, function(C) {
        return C(s);
      });
      return { criteria: b, index: ++g, value: s };
    });
    return o(y, function(s, p) {
      return e(s, p, m);
    });
  }
  return ec = d, ec;
}
var tc, _h;
function yy() {
  if (_h) return tc;
  _h = 1;
  var i = Pc(), t = my(), r = Jr(), n = en(), o = r(function(a, e) {
    if (a == null)
      return [];
    var c = e.length;
    return c > 1 && n(a, e[0], e[1]) ? e = [] : c > 2 && n(e[0], e[1], e[2]) && (e = [e[0]]), t(a, i(e, 1), []);
  });
  return tc = o, tc;
}
var rc, Ih;
function by() {
  if (Ih) return rc;
  Ih = 1;
  var i = Rf(), t = 0;
  function r(n) {
    var o = ++t;
    return i(n) + o;
  }
  return rc = r, rc;
}
var nc, Ah;
function xy() {
  if (Ah) return nc;
  Ah = 1;
  function i(t, r, n) {
    for (var o = -1, a = t.length, e = r.length, c = {}; ++o < a; ) {
      var h = o < e ? r[o] : void 0;
      n(c, t[o], h);
    }
    return c;
  }
  return nc = i, nc;
}
var ic, Th;
function vy() {
  if (Th) return ic;
  Th = 1;
  var i = jr(), t = xy();
  function r(n, o) {
    return t(n || [], o || [], i);
  }
  return ic = r, ic;
}
var Ar;
if (typeof bc == "function")
  try {
    Ar = {
      cloneDeep: zm(),
      constant: Rc(),
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
var Me = Ar, wy = tn;
function tn() {
  var i = {};
  i._next = i._prev = i, this._sentinel = i;
}
tn.prototype.dequeue = function() {
  var i = this._sentinel, t = i._prev;
  if (t !== i)
    return Jf(t), t;
};
tn.prototype.enqueue = function(i) {
  var t = this._sentinel;
  i._prev && i._next && Jf(i), i._next = t._next, t._next._prev = i, t._next = i, i._prev = t;
};
tn.prototype.toString = function() {
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
var yt = Me, ky = ot.Graph, Cy = wy, $y = Ey, My = yt.constant(1);
function Ey(i, t) {
  if (i.nodeCount() <= 1)
    return [];
  var r = _y(i, t || My), n = Ry(r.graph, r.buckets, r.zeroIdx);
  return yt.flatten(yt.map(n, function(o) {
    return i.outEdges(o.v, o.w);
  }), !0);
}
function Ry(i, t, r) {
  for (var n = [], o = t[t.length - 1], a = t[0], e; i.nodeCount(); ) {
    for (; e = a.dequeue(); )
      oc(i, t, r, e);
    for (; e = o.dequeue(); )
      oc(i, t, r, e);
    if (i.nodeCount()) {
      for (var c = t.length - 2; c > 0; --c)
        if (e = t[c].dequeue(), e) {
          n = n.concat(oc(i, t, r, e, !0));
          break;
        }
    }
  }
  return n;
}
function oc(i, t, r, n, o) {
  var a = o ? [] : void 0;
  return yt.forEach(i.inEdges(n.v), function(e) {
    var c = i.edge(e), h = i.node(e.v);
    o && a.push({ v: e.v, w: e.w }), h.out -= c, fc(t, r, h);
  }), yt.forEach(i.outEdges(n.v), function(e) {
    var c = i.edge(e), h = e.w, d = i.node(h);
    d.in -= c, fc(t, r, d);
  }), i.removeNode(n.v), a;
}
function _y(i, t) {
  var r = new ky(), n = 0, o = 0;
  yt.forEach(i.nodes(), function(c) {
    r.setNode(c, { v: c, in: 0, out: 0 });
  }), yt.forEach(i.edges(), function(c) {
    var h = r.edge(c.v, c.w) || 0, d = t(c), u = h + d;
    r.setEdge(c.v, c.w, u), o = Math.max(o, r.node(c.v).out += d), n = Math.max(n, r.node(c.w).in += d);
  });
  var a = yt.range(o + n + 3).map(function() {
    return new Cy();
  }), e = n + 1;
  return yt.forEach(r.nodes(), function(c) {
    fc(a, e, r.node(c));
  }), { graph: r, buckets: a, zeroIdx: e };
}
function fc(i, t, r) {
  r.out ? r.in ? i[r.out - r.in + t].enqueue(r) : i[i.length - 1].enqueue(r) : i[0].enqueue(r);
}
var Dt = Me, Iy = $y, Ay = {
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
var be = Me, eg = ot.Graph, Ve = {
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
var ng = Me, Hy = Ve, Vy = {
  run: Xy,
  undo: Zy
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
    var d, u, f;
    for (f = 0, ++n; n < a; ++f, ++n)
      c.points = [], u = {
        width: 0,
        height: 0,
        edgeLabel: c,
        edgeObj: t,
        rank: n
      }, d = Hy.addDummyNode(i, "edge", u, "_d"), n === h && (u.width = c.width, u.height = c.height, u.dummy = "edge-label", u.labelpos = c.labelpos), i.setEdge(r, d, { weight: c.weight }, e), f === 0 && i.graph().dummyChains.push(d), r = d;
    i.setEdge(r, o, { weight: c.weight }, e);
  }
}
function Zy(i) {
  ng.forEach(i.graph().dummyChains, function(t) {
    var r = i.node(t), n = r.edgeLabel, o;
    for (i.setEdge(r.edgeObj, n); r.dummy; )
      o = i.successors(t)[0], i.removeNode(t), n.points.push({ x: r.x, y: r.y }), r.dummy === "edge-label" && (n.x = r.x, n.y = r.y, n.width = r.width, n.height = r.height), t = o, r = i.node(t);
  });
}
var Er = Me, rn = {
  longestPath: Qy,
  slack: Jy
};
function Qy(i) {
  var t = {};
  function r(n) {
    var o = i.node(n);
    if (Er.has(t, n))
      return o.rank;
    t[n] = !0;
    var a = Er.min(Er.map(i.outEdges(n), function(e) {
      return r(e.w) - i.edge(e).minlen;
    }));
    return (a === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    a === void 0 || // return value of _.map([]) for Lodash 4
    a === null) && (a = 0), o.rank = a;
  }
  Er.forEach(i.sources(), r);
}
function Jy(i, t) {
  return i.node(t.w).rank - i.node(t.v).rank - i.edge(t).minlen;
}
var Tr = Me, eb = ot.Graph, Pr = rn.slack, ig = tb;
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
var xt = Me, ob = ig, ab = rn.slack, sb = rn.longestPath, cb = ot.alg.preorder, lb = ot.alg.postorder, db = Ve.simplify, ub = Nt;
Nt.initLowLimValues = Bc;
Nt.initCutValues = zc;
Nt.calcCutValue = og;
Nt.leaveEdge = sg;
Nt.enterEdge = cg;
Nt.exchangeEdges = lg;
function Nt(i) {
  i = db(i), sb(i);
  var t = ob(i);
  Bc(t), zc(t, i);
  for (var r, n; r = sg(t); )
    n = cg(t, i, r), lg(t, i, r, n);
}
function zc(i, t) {
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
    var d = h.v === r, u = d ? h.w : h.v;
    if (u !== o) {
      var f = d === a, m = t.edge(h).weight;
      if (c += f ? m : -m, fb(i, r, u)) {
        var g = i.edge(r, u).cutvalue;
        c += f ? -g : g;
      }
    }
  }), c;
}
function Bc(i, t) {
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
  var d = xt.filter(t.edges(), function(u) {
    return h === Ph(i, i.node(u.v), c) && h !== Ph(i, i.node(u.w), c);
  });
  return xt.minBy(d, function(u) {
    return ab(t, u);
  });
}
function lg(i, t, r, n) {
  var o = r.v, a = r.w;
  i.removeEdge(o, a), i.setEdge(n.v, n.w, {}), Bc(i), zc(i, t), hb(i, t);
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
function Ph(i, t, r) {
  return r.low <= t.lim && t.lim <= r.lim;
}
var gb = rn, dg = gb.longestPath, mb = ig, yb = ub, bb = xb;
function xb(i) {
  switch (i.graph().ranker) {
    case "network-simplex":
      Dh(i);
      break;
    case "tight-tree":
      wb(i);
      break;
    case "longest-path":
      vb(i);
      break;
    default:
      Dh(i);
  }
}
var vb = dg;
function wb(i) {
  dg(i), mb(i);
}
function Dh(i) {
  yb(i);
}
var gc = Me, Sb = kb;
function kb(i) {
  var t = $b(i);
  gc.forEach(i.graph().dummyChains, function(r) {
    for (var n = i.node(r), o = n.edgeObj, a = Cb(i, t, o.v, o.w), e = a.path, c = a.lca, h = 0, d = e[h], u = !0; r !== o.w; ) {
      if (n = i.node(r), u) {
        for (; (d = e[h]) !== c && i.node(d).maxRank < n.rank; )
          h++;
        d === c && (u = !1);
      }
      if (!u) {
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
    gc.forEach(i.children(o), n), t[o] = { low: a, lim: r++ };
  }
  return gc.forEach(i.children(), n), t;
}
var bt = Me, mc = Ve, Mb = {
  run: Eb,
  cleanup: Ib
};
function Eb(i) {
  var t = mc.addDummyNode(i, "root", {}, "_root"), r = Rb(i), n = bt.max(bt.values(r)) - 1, o = 2 * n + 1;
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
  var h = mc.addBorderNode(i, "_bt"), d = mc.addBorderNode(i, "_bb"), u = i.node(e);
  i.setParent(h, e), u.borderTop = h, i.setParent(d, e), u.borderBottom = d, bt.forEach(c, function(f) {
    ug(i, t, r, n, o, a, f);
    var m = i.node(f), g = m.borderTop ? m.borderTop : f, y = m.borderBottom ? m.borderBottom : f, s = m.borderTop ? n : 2 * n, p = g !== y ? 1 : o - a[e] + 1;
    i.setEdge(h, g, {
      weight: s,
      minlen: p,
      nestingEdge: !0
    }), i.setEdge(y, d, {
      weight: s,
      minlen: p,
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
var ac = Me, Ab = Ve, Tb = Pb;
function Pb(i) {
  function t(r) {
    var n = i.children(r), o = i.node(r);
    if (n.length && ac.forEach(n, t), ac.has(o, "minRank")) {
      o.borderLeft = [], o.borderRight = [];
      for (var a = o.minRank, e = o.maxRank + 1; a < e; ++a)
        Lh(i, "borderLeft", "_bl", r, o, a), Lh(i, "borderRight", "_br", r, o, a);
    }
  }
  ac.forEach(i.children(), t);
}
function Lh(i, t, r, n, o, a) {
  var e = { width: 0, height: 0, rank: a, borderType: t }, c = o[t][a - 1], h = Ab.addDummyNode(i, "border", e, r);
  o[t][a] = h, i.setParent(h, n), c && i.setEdge(c, h, { weight: 1 });
}
var dt = Me, Db = {
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
    zh(i.node(t));
  }), dt.forEach(i.edges(), function(t) {
    zh(i.edge(t));
  });
}
function zh(i) {
  var t = i.width;
  i.width = i.height, i.height = t;
}
function Bb(i) {
  dt.forEach(i.nodes(), function(t) {
    sc(i.node(t));
  }), dt.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    dt.forEach(r.points, sc), dt.has(r, "y") && sc(r);
  });
}
function sc(i) {
  i.y = -i.y;
}
function Wb(i) {
  dt.forEach(i.nodes(), function(t) {
    cc(i.node(t));
  }), dt.forEach(i.edges(), function(t) {
    var r = i.edge(t);
    dt.forEach(r.points, cc), dt.has(r, "x") && cc(r);
  });
}
function cc(i) {
  var t = i.x;
  i.x = i.y, i.y = t;
}
var gt = Me, Nb = qb;
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
var Mt = Me, Ob = Fb;
function Fb(i, t) {
  for (var r = 0, n = 1; n < t.length; ++n)
    r += Ub(i, t[n - 1], t[n]);
  return r;
}
function Ub(i, t, r) {
  for (var n = Mt.zipObject(
    r,
    Mt.map(r, function(d, u) {
      return u;
    })
  ), o = Mt.flatten(Mt.map(t, function(d) {
    return Mt.sortBy(Mt.map(i.outEdges(d), function(u) {
      return { pos: n[u.w], weight: i.edge(u).weight };
    }), "pos");
  }), !0), a = 1; a < r.length; ) a <<= 1;
  var e = 2 * a - 1;
  a -= 1;
  var c = Mt.map(new Array(e), function() {
    return 0;
  }), h = 0;
  return Mt.forEach(o.forEach(function(d) {
    var u = d.pos + a;
    c[u] += d.weight;
    for (var f = 0; u > 0; )
      u % 2 && (f += c[u + 1]), u = u - 1 >> 1, c[u] += d.weight;
    h += d.weight * f;
  })), h;
}
var Bh = Me, jb = Gb;
function Gb(i, t) {
  return Bh.map(t, function(r) {
    var n = i.inEdges(r);
    if (n.length) {
      var o = Bh.reduce(n, function(a, e) {
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
var Ze = Me, Yb = Hb;
function Hb(i, t) {
  var r = {};
  Ze.forEach(i, function(o, a) {
    var e = r[o.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [o.v],
      i: a
    };
    Ze.isUndefined(o.barycenter) || (e.barycenter = o.barycenter, e.weight = o.weight);
  }), Ze.forEach(t.edges(), function(o) {
    var a = r[o.v], e = r[o.w];
    !Ze.isUndefined(a) && !Ze.isUndefined(e) && (e.indegree++, a.out.push(r[o.w]));
  });
  var n = Ze.filter(r, function(o) {
    return !o.indegree;
  });
  return Vb(n);
}
function Vb(i) {
  var t = [];
  function r(a) {
    return function(e) {
      e.merged || (Ze.isUndefined(e.barycenter) || Ze.isUndefined(a.barycenter) || e.barycenter >= a.barycenter) && Xb(a, e);
    };
  }
  function n(a) {
    return function(e) {
      e.in.push(a), --e.indegree === 0 && i.push(e);
    };
  }
  for (; i.length; ) {
    var o = i.pop();
    t.push(o), Ze.forEach(o.in.reverse(), r(o)), Ze.forEach(o.out, n(o));
  }
  return Ze.map(
    Ze.filter(t, function(a) {
      return !a.merged;
    }),
    function(a) {
      return Ze.pick(a, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function Xb(i, t) {
  var r = 0, n = 0;
  i.weight && (r += i.barycenter * i.weight, n += i.weight), t.weight && (r += t.barycenter * t.weight, n += t.weight), i.vs = t.vs.concat(i.vs), i.barycenter = r / n, i.weight = n, i.i = Math.min(t.i, i.i), t.merged = !0;
}
var Qt = Me, Kb = Ve, Zb = Qb;
function Qb(i, t) {
  var r = Kb.partition(i, function(u) {
    return Qt.has(u, "barycenter");
  }), n = r.lhs, o = Qt.sortBy(r.rhs, function(u) {
    return -u.i;
  }), a = [], e = 0, c = 0, h = 0;
  n.sort(Jb(!!t)), h = Wh(a, o, h), Qt.forEach(n, function(u) {
    h += u.vs.length, a.push(u.vs), e += u.barycenter * u.weight, c += u.weight, h = Wh(a, o, h);
  });
  var d = { vs: Qt.flatten(a, !0) };
  return c && (d.barycenter = e / c, d.weight = c), d;
}
function Wh(i, t, r) {
  for (var n; t.length && (n = Qt.last(t)).i <= r; )
    t.pop(), i.push(n.vs), r++;
  return r;
}
function Jb(i) {
  return function(t, r) {
    return t.barycenter < r.barycenter ? -1 : t.barycenter > r.barycenter ? 1 : i ? r.i - t.i : t.i - r.i;
  };
}
var Et = Me, ex = jb, tx = Yb, rx = Zb, nx = hg;
function hg(i, t, r, n) {
  var o = i.children(t), a = i.node(t), e = a ? a.borderLeft : void 0, c = a ? a.borderRight : void 0, h = {};
  e && (o = Et.filter(o, function(y) {
    return y !== e && y !== c;
  }));
  var d = ex(i, o);
  Et.forEach(d, function(y) {
    if (i.children(y.v).length) {
      var s = hg(i, y.v, r, n);
      h[y.v] = s, Et.has(s, "barycenter") && ox(y, s);
    }
  });
  var u = tx(d, r);
  ix(u, h);
  var f = rx(u, n);
  if (e && (f.vs = Et.flatten([e, f.vs, c], !0), i.predecessors(e).length)) {
    var m = i.node(i.predecessors(e)[0]), g = i.node(i.predecessors(c)[0]);
    Et.has(f, "barycenter") || (f.barycenter = 0, f.weight = 0), f.barycenter = (f.barycenter * f.weight + m.order + g.order) / (f.weight + 2), f.weight += 2;
  }
  return f;
}
function ix(i, t) {
  Et.forEach(i, function(r) {
    r.vs = Et.flatten(r.vs.map(function(n) {
      return t[n] ? t[n].vs : n;
    }), !0);
  });
}
function ox(i, t) {
  Et.isUndefined(i.barycenter) ? (i.barycenter = t.barycenter, i.weight = t.weight) : (i.barycenter = (i.barycenter * i.weight + t.barycenter * t.weight) / (i.weight + t.weight), i.weight += t.weight);
}
var Jt = Me, ax = ot.Graph, sx = cx;
function cx(i, t, r) {
  var n = lx(i), o = new ax({ compound: !0 }).setGraph({ root: n }).setDefaultNodeLabel(function(a) {
    return i.node(a);
  });
  return Jt.forEach(i.nodes(), function(a) {
    var e = i.node(a), c = i.parent(a);
    (e.rank === t || e.minRank <= t && t <= e.maxRank) && (o.setNode(a), o.setParent(a, c || n), Jt.forEach(i[r](a), function(h) {
      var d = h.v === a ? h.w : h.v, u = o.edge(d, a), f = Jt.isUndefined(u) ? 0 : u.weight;
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
var dx = Me, ux = px;
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
var _t = Me, hx = Nb, fx = Ob, gx = nx, mx = sx, yx = ux, bx = ot.Graph, Nh = Ve, xx = vx;
function vx(i) {
  var t = Nh.maxRank(i), r = qh(i, _t.range(1, t + 1), "inEdges"), n = qh(i, _t.range(t - 1, -1, -1), "outEdges"), o = hx(i);
  Oh(i, o);
  for (var a = Number.POSITIVE_INFINITY, e, c = 0, h = 0; h < 4; ++c, ++h) {
    wx(c % 2 ? r : n, c % 4 >= 2), o = Nh.buildLayerMatrix(i);
    var d = fx(i, o);
    d < a && (h = 0, e = _t.cloneDeep(o), a = d);
  }
  Oh(i, e);
}
function qh(i, t, r) {
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
function Oh(i, t) {
  _t.forEach(t, function(r) {
    _t.forEach(r, function(n, o) {
      i.node(n).order = o;
    });
  });
}
var ue = Me, Sx = ot.Graph, kx = Ve, Cx = {
  positionX: Lx
};
function $x(i, t) {
  var r = {};
  function n(o, a) {
    var e = 0, c = 0, h = o.length, d = ue.last(a);
    return ue.forEach(a, function(u, f) {
      var m = Ex(i, u), g = m ? i.node(m).order : h;
      (m || u === d) && (ue.forEach(a.slice(c, f + 1), function(y) {
        ue.forEach(i.predecessors(y), function(s) {
          var p = i.node(s), x = p.order;
          (x < e || g < x) && !(p.dummy && i.node(y).dummy) && fg(r, s, y);
        });
      }), c = f + 1, e = g);
    }), a;
  }
  return ue.reduce(t, n), r;
}
function Mx(i, t) {
  var r = {};
  function n(a, e, c, h, d) {
    var u;
    ue.forEach(ue.range(e, c), function(f) {
      u = a[f], i.node(u).dummy && ue.forEach(i.predecessors(u), function(m) {
        var g = i.node(m);
        g.dummy && (g.order < h || g.order > d) && fg(r, m, u);
      });
    });
  }
  function o(a, e) {
    var c = -1, h, d = 0;
    return ue.forEach(e, function(u, f) {
      if (i.node(u).dummy === "border") {
        var m = i.predecessors(u);
        m.length && (h = i.node(m[0]).order, n(e, d, f, c, h), d = f, c = h);
      }
      n(e, d, e.length, h, a.length);
    }), e;
  }
  return ue.reduce(t, o), r;
}
function Ex(i, t) {
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
      var u = n(d);
      if (u.length) {
        u = ue.sortBy(u, function(s) {
          return e[s];
        });
        for (var f = (u.length - 1) / 2, m = Math.floor(f), g = Math.ceil(f); m <= g; ++m) {
          var y = u[m];
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
  function u(f) {
    var m = e.outEdges(f).reduce(function(y, s) {
      return Math.min(y, a[s.w] - e.edge(s));
    }, Number.POSITIVE_INFINITY), g = i.node(f);
    m !== Number.POSITIVE_INFINITY && g.borderType !== c && (a[f] = Math.max(a[f], m));
  }
  return h(d, e.predecessors.bind(e)), h(u, e.successors.bind(e)), ue.forEach(n, function(f) {
    a[f] = a[r[f]];
  }), a;
}
function Ax(i, t, r, n) {
  var o = new Sx(), a = i.graph(), e = zx(a.nodesep, a.edgesep, n);
  return ue.forEach(t, function(c) {
    var h;
    ue.forEach(c, function(d) {
      var u = r[d];
      if (o.setNode(u), h) {
        var f = r[h], m = o.edge(f, u);
        o.setEdge(f, u, Math.max(e(i, d, h), m || 0));
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
        var u = ue.values(h);
        d = e === "l" ? n - ue.min(u) : o - ue.max(u), d && (i[c] = ue.mapValues(h, function(f) {
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
    Mx(i, t)
  ), n = {}, o;
  ue.forEach(["u", "d"], function(e) {
    o = e === "u" ? t : ue.values(t).reverse(), ue.forEach(["l", "r"], function(c) {
      c === "r" && (o = ue.map(o, function(f) {
        return ue.values(f).reverse();
      }));
      var h = (e === "u" ? i.predecessors : i.successors).bind(i), d = _x(i, o, r, h), u = Ix(
        i,
        o,
        d.root,
        d.align,
        c === "r"
      );
      c === "r" && (u = ue.mapValues(u, function(f) {
        return -f;
      })), n[e + c] = u;
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
var er = Me, gg = Ve, Wx = Cx.positionX, Nx = qx;
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
var me = Me, Fh = Ay, Uh = Vy, Fx = bb, Ux = Ve.normalizeRanks, jx = Sb, Gx = Ve.removeEmptyRanks, jh = Mb, Yx = Tb, Gh = Db, Hx = xx, Vx = Nx, It = Ve, Xx = ot.Graph, Kx = Zx;
function Zx(i, t) {
  var r = t && t.debugTiming ? It.time : It.notime;
  r("layout", function() {
    var n = r("  buildLayoutGraph", function() {
      return c1(i);
    });
    r("  runLayout", function() {
      Qx(n, r);
    }), r("  updateInputGraph", function() {
      Jx(i, n);
    });
  });
}
function Qx(i, t) {
  t("    makeSpaceForEdgeLabels", function() {
    l1(i);
  }), t("    removeSelfEdges", function() {
    b1(i);
  }), t("    acyclic", function() {
    Fh.run(i);
  }), t("    nestingGraph.run", function() {
    jh.run(i);
  }), t("    rank", function() {
    Fx(It.asNonCompoundGraph(i));
  }), t("    injectEdgeLabelProxies", function() {
    d1(i);
  }), t("    removeEmptyRanks", function() {
    Gx(i);
  }), t("    nestingGraph.cleanup", function() {
    jh.cleanup(i);
  }), t("    normalizeRanks", function() {
    Ux(i);
  }), t("    assignRankMinMax", function() {
    u1(i);
  }), t("    removeEdgeLabelProxies", function() {
    p1(i);
  }), t("    normalize.run", function() {
    Uh.run(i);
  }), t("    parentDummyChains", function() {
    jx(i);
  }), t("    addBorderSegments", function() {
    Yx(i);
  }), t("    order", function() {
    Hx(i);
  }), t("    insertSelfEdges", function() {
    x1(i);
  }), t("    adjustCoordinateSystem", function() {
    Gh.adjust(i);
  }), t("    position", function() {
    Vx(i);
  }), t("    positionSelfEdges", function() {
    v1(i);
  }), t("    removeBorderNodes", function() {
    y1(i);
  }), t("    normalize.undo", function() {
    Uh.undo(i);
  }), t("    fixupEdgeLabelCoords", function() {
    g1(i);
  }), t("    undoCoordinateSystem", function() {
    Gh.undo(i);
  }), t("    translateGraph", function() {
    h1(i);
  }), t("    assignNodeIntersects", function() {
    f1(i);
  }), t("    reversePoints", function() {
    m1(i);
  }), t("    acyclic.undo", function() {
    Fh.undo(i);
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
  var t = new Xx({ multigraph: !0, compound: !0 }), r = dc(i.graph());
  return t.setGraph(me.merge(
    {},
    t1,
    lc(r, e1),
    me.pick(r, r1)
  )), me.forEach(i.nodes(), function(n) {
    var o = dc(i.node(n));
    t.setNode(n, me.defaults(lc(o, n1), i1)), t.setParent(n, i.parent(n));
  }), me.forEach(i.edges(), function(n) {
    var o = dc(i.edge(n));
    t.setEdge(n, me.merge(
      {},
      a1,
      lc(o, o1),
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
    var u = d.x, f = d.y, m = d.width, g = d.height;
    t = Math.min(t, u - m / 2), r = Math.max(r, u + m / 2), n = Math.min(n, f - g / 2), o = Math.max(o, f + g / 2);
  }
  me.forEach(i.nodes(), function(d) {
    h(i.node(d));
  }), me.forEach(i.edges(), function(d) {
    var u = i.edge(d);
    me.has(u, "x") && h(u);
  }), t -= e, n -= c, me.forEach(i.nodes(), function(d) {
    var u = i.node(d);
    u.x -= t, u.y -= n;
  }), me.forEach(i.edges(), function(d) {
    var u = i.edge(d);
    me.forEach(u.points, function(f) {
      f.x -= t, f.y -= n;
    }), me.has(u, "x") && (u.x -= t), me.has(u, "y") && (u.y -= n);
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
function lc(i, t) {
  return me.mapValues(me.pick(i, t), Number);
}
function dc(i) {
  var t = {};
  return me.forEach(i, function(r, n) {
    t[n.toLowerCase()] = r;
  }), t;
}
var Rr = Me, w1 = Ve, S1 = ot.Graph, k1 = {
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
var $1 = "0.8.5", M1 = {
  graphlib: ot,
  layout: Kx,
  debug: k1,
  util: {
    time: Ve.time,
    notime: Ve.notime
  },
  version: $1
};
const Dr = /* @__PURE__ */ Ig(M1);
async function E1(i, t = []) {
  throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
}
function Lr(i) {
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
function zr(i) {
  return i.replace(/<!--\s*type:\s*\w+\s*-->\n?/g, "").replace(/<!--\s*name:\s*.+?\s*-->\n?/g, "").replace(/<!--\s*alternatives:\s*.+?\s*-->\n?/g, "").trim();
}
async function I1(i, t = []) {
  let r;
  r = await E1(i, t);
  const n = Lr(r), o = zr(r);
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
async function Wc(i, t) {
  return T1();
}
async function T1(i, t) {
  throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");
}
async function P1(i, t) {
  return await Wc();
}
async function D1(i, t) {
  const r = await Wc(), n = r.split("---EXPLANATION---");
  if (n.length === 2) {
    const a = n[0].trim(), e = n[1].trim(), c = Lr(a) || t;
    return {
      dsl: zr(a),
      type: c,
      explanation: e,
      raw: r
    };
  }
  return r.match(/<!--\s*type:\s*(\w+)\s*-->/) ? {
    dsl: zr(r),
    type: Lr(r),
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
  const r = await Wc();
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
`).filter((u) => u.trim()), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  r.forEach((u) => {
    const f = u.match(/^(.+?)\s*->\s*(.+)$/);
    if (f) {
      const m = f[1].trim(), y = f[2].trim().split(",").map((s) => s.trim()).filter((s) => s);
      o.add(m), y.forEach((s) => {
        o.add(s), a.add(s);
      }), n.has(m) || n.set(m, []), n.get(m).push(...y);
    } else u.trim() && !u.includes("->") && o.add(u.trim());
  });
  const e = [...o].filter((u) => !a.has(u));
  if (e.length === 0)
    return i;
  const c = [], h = /* @__PURE__ */ new Set();
  function d(u, f) {
    if (h.has(u)) return;
    h.add(u), c.push("  ".repeat(f) + u), (n.get(u) || []).forEach((g) => d(g, f + 1));
  }
  return e.forEach((u) => d(u, 0)), c.join(`
`);
}
function W1(i) {
  if (!/^\s*\(([^)]+)\)\s+\1\s*$/m.test(i))
    return { dsl: i, convertToMindmap: !1 };
  const r = i.split(`
`).filter((u) => u.trim()), n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  r.forEach((u) => {
    const f = u.match(/^\s*\(([^)]+)\)\s+\1\s*->\s*\(([^)]+)\)\s+\2\s*$/);
    if (f) {
      const m = f[1].trim(), g = f[2].trim();
      o.add(m), o.add(g), a.add(g), n.has(m) || n.set(m, []), n.get(m).push(g);
    } else {
      const m = u.match(/^\s*\(([^)]+)\)\s+\1\s*$/);
      m && o.add(m[1].trim());
    }
  });
  const e = [...o].filter((u) => !a.has(u));
  if (e.length === 0) return { dsl: i, convertToMindmap: !1 };
  const c = [], h = /* @__PURE__ */ new Set();
  function d(u, f) {
    if (h.has(u)) return;
    h.add(u), c.push("  ".repeat(f) + u), (n.get(u) || []).forEach((g) => d(g, f + 1));
  }
  return e.forEach((u) => d(u, 0)), { dsl: c.join(`
`), convertToMindmap: !0 };
}
async function N1(i, t = "image/png") {
  let r;
  r = await z1();
  let n = Lr(r), o = zr(r);
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
  const [n, o] = H([]), [a, e] = H(""), [c, h] = H(!1), [d, u] = H(null), f = _e(null), m = _e(null), g = () => {
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
    const $ = a.trim();
    e(""), u(null), o((k) => [...k, { role: "user", content: $ }]), h(!0);
    try {
      const k = n.map((E) => ({
        role: E.role,
        content: E.content
      })), M = await I1($, k);
      o((E) => [...E, {
        role: "assistant",
        content: M.raw,
        type: M.type,
        dsl: M.dsl
      }]);
    } catch (k) {
      u(k.message), o((M) => [...M, {
        role: "error",
        content: k.message
      }]);
    } finally {
      h(!1);
    }
  }, s = (w) => {
    w.dsl && w.type && i(w.type, w.dsl);
  }, p = async (w) => {
    try {
      await navigator.clipboard.writeText(w);
    } catch ($) {
      console.error("Failed to copy:", $);
    }
  }, x = () => {
    o([]), u(null);
  };
  if (!t) return null;
  const b = Ot(), C = A1();
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
      n.map((w, $) => /* @__PURE__ */ l("div", { style: {
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
      ] }) }, $)),
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
const Nc = {
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
}, qc = [
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
  return qc;
}
function O1(i) {
  return qc.find((t) => t.id === i) || Rt().find((t) => t.id === i) || null;
}
function Rt() {
  try {
    const i = localStorage.getItem(Nc.CUSTOM_TEMPLATES);
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
    return t.unshift(r), localStorage.setItem(Nc.CUSTOM_TEMPLATES, JSON.stringify(t)), r;
  } catch (t) {
    throw console.error("Failed to save custom template:", t), t;
  }
}
function U1(i) {
  try {
    const r = Rt().filter((n) => n.id !== i);
    return localStorage.setItem(Nc.CUSTOM_TEMPLATES, JSON.stringify(r)), !0;
  } catch (t) {
    return console.error("Failed to delete custom template:", t), !1;
  }
}
function j1() {
  return [...Rt(), ...qc];
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
  const [o, a] = H(""), [e, c] = H("All"), [h, d] = H(null), [u, f] = H(null), m = _e(null), g = (n == null ? void 0 : n.name) === "dark";
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
      const $ = Yh();
      w = [...Rt(), ...$];
    }
    return e === "All" ? w : e === "My Templates" ? w.filter(($) => $.isCustom) : w.filter(($) => $.category === e);
  }, [o, e]), s = ge(() => {
    const w = Rt(), $ = ["All", ...Object.values(ee)];
    return w.length > 0 && $.splice(1, 0, "My Templates"), $;
  }, []), p = (w) => {
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
    categoryItem: (w, $) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 20px",
      cursor: "pointer",
      background: w ? g ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)" : "transparent",
      borderLeft: w ? `3px solid ${$ || Re.purple}` : "3px solid transparent",
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
    card: (w, $) => ({
      background: g ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.8)",
      borderRadius: "12px",
      border: `1px solid ${w ? $ || Re.purple : g ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.2s",
      transform: w ? "translateY(-2px)" : "none",
      boxShadow: w ? `0 8px 20px ${$}20` : "none"
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
  }, C = (w) => {
    const $ = [...Rt(), ...Yh()];
    return w === "All" ? $.length : w === "My Templates" ? Rt().length : $.filter((k) => k.category === w).length;
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
          onMouseEnter: ($) => {
            e !== w && ($.currentTarget.style.background = g ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)");
          },
          onMouseLeave: ($) => {
            e !== w && ($.currentTarget.style.background = "transparent");
          },
          children: [
            /* @__PURE__ */ l("span", { style: b.categoryIcon, children: H1[w] || "📁" }),
            /* @__PURE__ */ l("span", { children: w }),
            /* @__PURE__ */ l("span", { style: b.categoryCount, children: C(w) })
          ]
        },
        w
      )) }),
      /* @__PURE__ */ l("div", { style: b.grid, children: y.length === 0 ? /* @__PURE__ */ S("div", { style: b.emptyState, children: [
        /* @__PURE__ */ l("div", { style: b.emptyIcon, children: "🔍" }),
        /* @__PURE__ */ l("div", { style: b.emptyTitle, children: "No templates found" }),
        /* @__PURE__ */ l("div", { style: b.emptyText, children: "Try a different search term or category" })
      ] }) : y.map((w) => {
        var E;
        const $ = Hh[w.category] || Re.purple, k = h === w.id, M = u === w.id;
        return /* @__PURE__ */ S(
          "div",
          {
            style: { ...b.card(k, $), position: "relative" },
            onMouseEnter: () => d(w.id),
            onMouseLeave: () => d(null),
            onClick: () => !M && p(w),
            children: [
              /* @__PURE__ */ l("div", { style: b.cardThumbnail($), children: Y1[w.type] || "📄" }),
              /* @__PURE__ */ S("div", { style: b.cardContent, children: [
                /* @__PURE__ */ l("div", { style: b.cardTitle, children: w.name || "Untitled" }),
                /* @__PURE__ */ l("div", { style: b.cardDescription, children: w.description || "No description" }),
                /* @__PURE__ */ S("div", { style: b.cardMeta, children: [
                  /* @__PURE__ */ l("span", { style: b.typeBadge($), children: (E = w.type) == null ? void 0 : E.toUpperCase() }),
                  w.bundle && /* @__PURE__ */ l("span", { style: b.bundleBadge, children: w.bundle }),
                  w.isCustom && /* @__PURE__ */ S(ut, { children: [
                    /* @__PURE__ */ l("span", { style: b.customBadge, children: "Custom" }),
                    /* @__PURE__ */ l(
                      "button",
                      {
                        style: b.deleteButton,
                        onClick: (R) => {
                          R.stopPropagation(), f(w.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ] })
              ] }),
              M && /* @__PURE__ */ l("div", { style: b.confirmOverlay, onClick: (R) => R.stopPropagation(), children: /* @__PURE__ */ S("div", { style: b.confirmBox, children: [
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
  const [a, e] = H(""), [c, h] = H(""), [d, u] = H(ee.FLOWCHARTS), [f, m] = H(""), [g, y] = H(!1), s = _e(null), p = (o == null ? void 0 : o.name) === "dark";
  se(() => {
    i && (e(""), h(""), u(ee.FLOWCHARTS), m(""), y(!1), setTimeout(() => {
      var C;
      return (C = s.current) == null ? void 0 : C.focus();
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
    } catch (C) {
      m("Failed to save template: " + C.message);
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
      borderTop: `1px solid ${p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px"
    },
    button: (C) => ({
      padding: "10px 20px",
      background: C ? mt.purple : p ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      color: C || p ? "#fff" : "#1e293b",
      border: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.2s"
    })
  };
  return /* @__PURE__ */ l("div", { style: b.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: b.modal, onClick: (C) => C.stopPropagation(), children: [
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
            onChange: (C) => e(C.target.value),
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
            onChange: (C) => h(C.target.value),
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
            onChange: (C) => u(C.target.value),
            style: b.select,
            disabled: g,
            children: Object.values(ee).map((C) => /* @__PURE__ */ l("option", { value: C, children: C }, C))
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
const uc = {
  purple: "#7C3AED",
  green: "#10B981"
};
function _r({
  label: i,
  icon: t,
  items: r,
  theme: n,
  color: o = uc.purple,
  disabled: a = !1,
  showCaret: e = !0
}) {
  const [c, h] = H(!1), d = _e(null), u = (n == null ? void 0 : n.name) === "dark";
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
    item: (x, b) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 12px",
      fontSize: "0.85rem",
      color: x.disabled ? u ? "#555" : "#cbd5e1" : u ? "#e2e8f0" : "#334155",
      cursor: x.disabled ? "not-allowed" : "pointer",
      background: b && !x.disabled ? u ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)" : "transparent",
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
      background: u ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      margin: "4px 0"
    }
  }, g = [];
  let y = { label: null, items: [] };
  r.forEach((x, b) => {
    x.type === "divider" ? y.items.length > 0 && (g.push(y), y = { label: null, items: [] }) : x.type === "section" ? (y.items.length > 0 && g.push(y), y = { label: x.label, items: [] }) : y.items.push(x);
  }), y.items.length > 0 && g.push(y);
  const [s, p] = H(null);
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
          x.items.map((C, w) => /* @__PURE__ */ S(
            "div",
            {
              style: m.item(C, s === `${b}-${w}`),
              onClick: () => f(C),
              onMouseEnter: () => p(`${b}-${w}`),
              onMouseLeave: () => p(null),
              children: [
                C.icon && /* @__PURE__ */ l("span", { style: m.itemIcon, children: C.icon }),
                /* @__PURE__ */ S("div", { style: m.itemContent, children: [
                  /* @__PURE__ */ l("span", { style: m.itemLabel, children: C.label }),
                  C.description && /* @__PURE__ */ l("span", { style: m.itemDescription, children: C.description })
                ] }),
                C.shortcut && /* @__PURE__ */ l("span", { style: m.itemShortcut, children: C.shortcut }),
                C.badge && /* @__PURE__ */ l("span", { style: m.itemBadge(C.badgeColor || uc.purple), children: C.badge }),
                C.active && /* @__PURE__ */ l("span", { style: { color: uc.green }, children: "✓" })
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
function Z1({ activeType: i, onTypeChange: t, theme: r }) {
  const [n, o] = H(!1), [a, e] = H(null), c = _e(null), h = (r == null ? void 0 : r.name) === "dark";
  se(() => {
    function m(g) {
      c.current && !c.current.contains(g.target) && o(!1);
    }
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const d = Vh[i] || { icon: "📄", name: i }, u = {
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
  return /* @__PURE__ */ S("div", { ref: c, style: u.container, children: [
    /* @__PURE__ */ S(
      "div",
      {
        style: u.trigger,
        onClick: () => o(!n),
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
          /* @__PURE__ */ l("div", { style: u.typeGrid, children: g.types.map((s) => {
            const p = Vh[s], x = s === i, b = a === s;
            return /* @__PURE__ */ S(
              "div",
              {
                style: u.typeItem(x, b),
                onClick: () => {
                  t(s), o(!1);
                },
                onMouseEnter: () => e(s),
                onMouseLeave: () => e(null),
                children: [
                  /* @__PURE__ */ l("span", { style: u.typeIcon, children: p.icon }),
                  /* @__PURE__ */ S("div", { style: u.typeContent, children: [
                    /* @__PURE__ */ l("div", { style: u.typeName(x), children: p.name }),
                    /* @__PURE__ */ l("div", { style: u.typeDesc, children: p.desc })
                  ] }),
                  x && /* @__PURE__ */ l("span", { style: u.checkmark, children: "✓" })
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
}, Q1 = {
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
  const [e, c] = H(""), [h, d] = H({}), u = (a == null ? void 0 : a.name) === "dark", f = Q1[t] || J1, m = ge(() => {
    if (!e.trim()) return f.categories;
    const x = e.toLowerCase();
    return f.categories.map((b) => ({
      ...b,
      nodes: b.nodes.filter(
        (C) => C.label.toLowerCase().includes(x) || C.type.toLowerCase().includes(x)
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
        onChange: (x) => c(x.target.value),
        style: p.searchInput
      }
    ) }),
    /* @__PURE__ */ l("div", { style: p.content, children: m.length === 0 ? /* @__PURE__ */ l("div", { style: p.emptyState, children: "No nodes match your search" }) : m.map((x) => {
      const b = h[x.name] !== !1;
      return /* @__PURE__ */ S("div", { style: p.category, children: [
        /* @__PURE__ */ S(
          "div",
          {
            style: p.categoryHeader,
            onClick: () => g(x.name),
            children: [
              /* @__PURE__ */ l("span", { style: p.categoryArrow(b), children: "▶" }),
              /* @__PURE__ */ l("span", { children: x.name }),
              /* @__PURE__ */ l("span", { style: { marginLeft: "auto", opacity: 0.6 }, children: x.nodes.length })
            ]
          }
        ),
        b && /* @__PURE__ */ l("div", { style: p.nodesGrid, children: x.nodes.map((C) => /* @__PURE__ */ S(
          "div",
          {
            style: p.nodeItem(C.color),
            draggable: !0,
            onClick: () => s(C),
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
      ] }, x.name);
    }) }),
    /* @__PURE__ */ l("div", { style: p.tip, children: /* @__PURE__ */ l("div", { style: p.tipText, children: "Click or drag nodes to add them to your diagram" }) })
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
function Oc() {
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
    let t = Oc();
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
    let t = Oc();
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
const Br = {
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
}, pc = {
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
      return { ...Br, ...JSON.parse(i) };
  } catch (i) {
    console.error("Failed to load color settings:", i);
  }
  return { ...Br };
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
  const [o, a] = H(() => yg()), [e, c] = H(null), h = (n == null ? void 0 : n.name) === "dark";
  se(() => {
    const s = Object.entries(pc).find(
      ([p, x]) => x.accentPrimary === o.accentPrimary && x.accentSecondary === o.accentSecondary
    );
    c(s ? s[0] : null);
  }, [o]);
  const d = (s) => {
    const p = pc[s], x = {
      ...o,
      accentPrimary: p.accentPrimary,
      accentSecondary: p.accentSecondary
    };
    a(x);
  }, u = (s, p) => {
    a((x) => ({ ...x, [s]: p }));
  }, f = () => {
    lv(o), r && r(o), t();
  }, m = () => {
    dv(), a({ ...Br }), r && r(Br);
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
    presetItem: (s, p) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "12px 8px",
      background: s ? `${p}20` : h ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
      border: `2px solid ${s ? p : "transparent"}`,
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
        /* @__PURE__ */ l("div", { style: g.presetsGrid, children: Object.entries(pc).map(([s, p]) => /* @__PURE__ */ S(
          "div",
          {
            style: g.presetItem(e === s, p.accentPrimary),
            onClick: () => d(s),
            onMouseEnter: (x) => {
              e !== s && (x.currentTarget.style.borderColor = p.accentPrimary + "50");
            },
            onMouseLeave: (x) => {
              e !== s && (x.currentTarget.style.borderColor = "transparent");
            },
            children: [
              /* @__PURE__ */ l("span", { style: g.presetIcon, children: p.icon }),
              /* @__PURE__ */ l("span", { style: g.presetName, children: p.name.split(" ")[0] })
            ]
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ S("div", { style: g.section, children: [
        /* @__PURE__ */ l("div", { style: g.sectionTitle, children: "Custom Colors" }),
        y.map(({ key: s, name: p, desc: x }) => /* @__PURE__ */ S("div", { style: g.colorRow, children: [
          /* @__PURE__ */ S("div", { style: g.colorLabel, children: [
            /* @__PURE__ */ l("span", { style: g.colorName, children: p }),
            /* @__PURE__ */ l("span", { style: g.colorDesc, children: x })
          ] }),
          /* @__PURE__ */ S("div", { style: g.colorInput, children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "color",
                value: o[s],
                onChange: (b) => u(s, b.target.value),
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
  const [o, a] = H(null), [e, c] = H(!1), [h, d] = H(!1), [u, f] = H(null), [m, g] = H(null), y = _e(null), s = _e(null), p = (n == null ? void 0 : n.name) === "dark";
  se(() => {
    i || (a(null), f(null), g(null), d(!1));
  }, [i]), se(() => {
    if (!i) return;
    const L = async (F) => {
      var Y;
      const q = (Y = F.clipboardData) == null ? void 0 : Y.items;
      if (q) {
        for (const re of q)
          if (re.type.startsWith("image/")) {
            F.preventDefault();
            const ne = re.getAsFile();
            ne && await x(ne);
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
    const F = new FileReader();
    F.onload = (q) => {
      const Y = q.target.result, re = Y.split(",")[1];
      a({
        base64: re,
        mimeType: L.type,
        name: L.name,
        size: L.size,
        preview: Y
      });
    }, F.onerror = () => {
      g("Failed to read file. Please try again.");
    }, F.readAsDataURL(L);
  }, b = V((L) => {
    L.preventDefault(), L.stopPropagation(), c(!0);
  }, []), C = V((L) => {
    L.preventDefault(), L.stopPropagation(), c(!1);
  }, []), w = V(async (L) => {
    var q;
    L.preventDefault(), L.stopPropagation(), c(!1);
    const F = (q = L.dataTransfer) == null ? void 0 : q.files;
    F && F.length > 0 && await x(F[0]);
  }, []), $ = async (L) => {
    var q;
    const F = (q = L.target.files) == null ? void 0 : q[0];
    F && await x(F);
  }, [k, M] = H(null), E = async () => {
    if (!(!o || !Ot())) {
      d(!0), g(null), f(null), M(null);
      try {
        const L = await N1(o.base64, o.mimeType);
        f(L), M(L.type);
      } catch (L) {
        g(L.message || "Failed to analyze image. Please try again.");
      } finally {
        d(!1);
      }
    }
  }, R = () => {
    u && r && r(k || u.type, u.dsl, u.name);
  }, T = (L) => {
    M(L);
  }, I = () => {
    a(null), f(null), g(null), y.current && (y.current.value = "");
  };
  if (!i) return null;
  const B = (L) => L < 1024 ? `${L} B` : L < 1024 * 1024 ? `${(L / 1024).toFixed(1)} KB` : `${(L / 1024 / 1024).toFixed(1)} MB`, P = {
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
      border: `2px dashed ${e ? $e.purple : p ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
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
      color: $e.green
    },
    dslPreview: {
      background: (n == null ? void 0 : n.inputBg) || (p ? "rgba(0,0,0,0.4)" : "#fff"),
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
  return /* @__PURE__ */ l("div", { style: P.overlay, onClick: t, children: /* @__PURE__ */ S("div", { style: P.modal, onClick: (L) => L.stopPropagation(), children: [
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
    /* @__PURE__ */ l("div", { style: P.content, children: Ot() ? /* @__PURE__ */ S(ut, { children: [
      !o && /* @__PURE__ */ S(
        "div",
        {
          ref: s,
          style: P.dropZone,
          onDragOver: b,
          onDragLeave: C,
          onDrop: w,
          onClick: () => {
            var L;
            return (L = y.current) == null ? void 0 : L.click();
          },
          children: [
            /* @__PURE__ */ l("div", { style: P.dropIcon, children: "📸" }),
            /* @__PURE__ */ l("div", { style: P.dropText, children: e ? "Drop image here" : "Drag & drop an image" }),
            /* @__PURE__ */ l("div", { style: P.dropSubtext, children: "or click to browse files" }),
            /* @__PURE__ */ l("button", { style: P.browseBtn, onClick: (L) => {
              var F;
              L.stopPropagation(), (F = y.current) == null || F.click();
            }, children: "Browse Files" }),
            /* @__PURE__ */ l("div", { style: P.pasteHint, children: "💡 Tip: You can also paste an image from clipboard (Ctrl+V / Cmd+V)" }),
            /* @__PURE__ */ l(
              "input",
              {
                ref: y,
                type: "file",
                accept: Kh.join(","),
                onChange: $,
                style: { display: "none" }
              }
            )
          ]
        }
      ),
      o && /* @__PURE__ */ S("div", { style: P.imagePreview, children: [
        /* @__PURE__ */ S("div", { style: P.previewHeader, children: [
          /* @__PURE__ */ S("div", { style: P.previewInfo, children: [
            /* @__PURE__ */ l("span", { style: P.previewName, children: o.name }),
            /* @__PURE__ */ S("span", { style: P.previewSize, children: [
              "(",
              B(o.size),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ l("button", { style: P.clearBtn, onClick: I, children: "Clear" })
        ] }),
        /* @__PURE__ */ l("img", { src: o.preview, alt: "Preview", style: P.previewImage }),
        !u && /* @__PURE__ */ l(
          "button",
          {
            style: h ? P.analyzingBtn : P.analyzeBtn,
            onClick: E,
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
      m && /* @__PURE__ */ S("div", { style: P.error, children: [
        "❌ ",
        m
      ] }),
      u && /* @__PURE__ */ S("div", { style: P.result, children: [
        /* @__PURE__ */ S("div", { style: P.resultHeader, children: [
          /* @__PURE__ */ l("span", { style: P.resultIcon, children: "✅" }),
          /* @__PURE__ */ l("span", { style: P.resultTitle, children: "Diagram Extracted Successfully" })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginBottom: 12, padding: "8px 12px", background: `${$e.purple}15`, borderRadius: 8, border: `1px solid ${$e.purple}30` }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 4 }, children: "DIAGRAM NAME" }),
          /* @__PURE__ */ l("div", { style: { fontSize: "1rem", fontWeight: 600, color: (n == null ? void 0 : n.textPrimary) || "#fff" }, children: u.name })
        ] }),
        /* @__PURE__ */ S("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "0.7rem", color: (n == null ? void 0 : n.textSecondary) || "#888", marginBottom: 8 }, children: "DIAGRAM TYPE" }),
          /* @__PURE__ */ S("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: [
            /* @__PURE__ */ S(
              "button",
              {
                onClick: () => T(u.type),
                style: {
                  padding: "6px 14px",
                  background: k === u.type ? `${$e.green}20` : "transparent",
                  border: `2px solid ${k === u.type ? $e.green : p ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`,
                  borderRadius: 8,
                  color: k === u.type ? $e.green : (n == null ? void 0 : n.textPrimary) || "#fff",
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
            u.alternatives && u.alternatives.length > 0 && u.alternatives.map((L) => /* @__PURE__ */ S(
              "button",
              {
                onClick: () => T(L),
                style: {
                  padding: "6px 14px",
                  background: k === L ? `${$e.blue}20` : "transparent",
                  border: `2px solid ${k === L ? $e.blue : p ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}`,
                  borderRadius: 8,
                  color: k === L ? $e.blue : (n == null ? void 0 : n.textSecondary) || "#888",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                },
                children: [
                  k === L && /* @__PURE__ */ l("span", { children: "✓" }),
                  L
                ]
              },
              L
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
      u ? /* @__PURE__ */ l("button", { style: P.applyBtn, onClick: R, children: "Apply Diagram" }) : /* @__PURE__ */ l("button", { style: P.disabledBtn, disabled: !0, children: "Apply Diagram" })
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
    const u = h.match(/^object\s+"?([^"]+)"?/i);
    if (u) {
      o && n.push(""), o = u[1].replace(/\s+/g, "_"), n.push(`class ${o}`), h.includes("{") && (a = !0, e = 1);
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
        const [, y = "+", s, p, x] = f, b = x ? `: ${x}` : "";
        n.push(`  ${y} ${s}(${p})${b}`);
        return;
      }
      const m = h.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)/);
      if (m) {
        const [, y = "+", s, p] = m;
        n.push(`  ${y} ${s}: ${p}`);
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
      const [, , u] = c;
      o.add(u);
      return;
    }
    const h = e.match(/^state\s+(\w+)$/i);
    if (h) {
      o.add(h[1]);
      return;
    }
    const d = e.match(/^(\[\*\]|\w+)\s*(-->|->)\s*(\[\*\]|\w+)(\s*:\s*(.+))?$/);
    if (d) {
      let [, u, , f, , m] = d, g = u, y = f;
      if (u === "[*]" && !o.has("__initial__") && (n.unshift(`(initial) ${f}`), o.add("__initial__"), g = f, !m))
        return;
      if (f === "[*]" && (o.has("__final__") || (n.push("(final) End"), o.add("__final__")), y = "End"), u !== "[*]") {
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
`).filter((u) => u.trim()), n = [], o = [];
  let a = 0, e = null;
  const c = [], h = (u, f) => {
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
      const s = h("end", "End");
      e && o.push({ from: e, to: s }), e = s;
      return;
    }
    const m = f.match(/^:([^;]+);?$/);
    if (m) {
      const s = m[1].trim(), p = h("process", s);
      e && o.push({ from: e, to: p }), e = p;
      return;
    }
    const g = f.match(/^if\s*\(([^)]+)\)\s*then\s*\(([^)]+)\)/i);
    if (g) {
      const s = g[1].trim(), p = g[2].trim(), x = h("decision", s);
      e && o.push({ from: e, to: x }), c.push({ type: "if", decisionId: x, yesLabel: p, noLabel: null, mergePoint: null }), e = x;
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
  return n.forEach((u) => {
    d.push(`(${u.type}) ${u.label}`);
  }), d.push(""), o.forEach((u) => {
    const f = n.find((g) => g.id === u.from), m = n.find((g) => g.id === u.to);
    if (f && m) {
      const g = u.label ? `: ${u.label}` : "";
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
    const u = c.match(/^(\[?[^\]]+\]?)\s*(-->|->|--)\s*(\[?[^\]]+\]?)(\s*:\s*(.+))?$/);
    if (u) {
      let [, f, , m] = u;
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
      const [, u, f] = c;
      n.push(`${u}, ${o}, ${f}`), o += parseInt(f);
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
        const [, u, f, m] = d, g = u === "*" ? " PRIMARY KEY" : "", y = m.trim().toUpperCase();
        n.push(`  ${f} ${y}${g},`);
      }
    }
  }), a && n.push(");"), n.join(`
`).replace(/,\n\);/g, `
);`);
}
function Cv(i) {
  const r = at(i).split(`
`).filter((u) => u.trim()), n = /* @__PURE__ */ new Map(), o = [], a = [], e = /* @__PURE__ */ new Map();
  r.forEach((u) => {
    const f = u.trim();
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
      let C = "services";
      /ContainerDb/i.test(f) ? C = "data" : /ContainerQueue/i.test(f) ? C = "queue" : /_Ext/i.test(f) && (C = "external"), n.set(s[1], {
        type: C,
        label: s[2],
        technology: s[3] || "",
        description: s[4] || "",
        boundary: b
      });
      return;
    }
    const p = f.match(/^Component(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);
    if (p) {
      const b = a.length > 0 ? a[a.length - 1] : null;
      let C = "services";
      /ComponentDb/i.test(f) && (C = "data"), /_Ext/i.test(f) && (C = "external"), n.set(p[1], {
        type: C,
        label: p[2],
        technology: p[3] || "",
        description: p[4] || "",
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
  n.forEach((u, f) => {
    const m = u.type || "services";
    h[m] || (h[m] = []), h[m].push(u.label);
  }), Object.entries(h).forEach(([u, f]) => {
    f.length > 0 && c.push(`[${u}] ${f.join(", ")}`);
  });
  const d = (u, f = "") => {
    const m = e.get(u);
    m && (c.push(`${f}group "${m.label}" {`), n.forEach((g, y) => {
      g.boundary === u && c.push(`${f}  ${g.label}`);
    }), e.forEach((g, y) => {
      g.parent === u && d(y, f + "  ");
    }), c.push(`${f}}`));
  };
  return e.forEach((u, f) => {
    u.parent || d(f);
  }), c.push(""), o.forEach((u) => {
    const f = n.get(u.from), m = n.get(u.to);
    f && m && c.push(`${f.label} -> ${m.label}`);
  }), c.join(`
`);
}
function $v(i) {
  const r = at(i).split(`
`).filter((h) => h.trim()), n = [], o = /* @__PURE__ */ new Map(), a = [];
  let e = null, c = !1;
  return r.forEach((h) => {
    const d = h.trim(), u = d.match(/^(node|device|artifact|file|folder|frame|rectangle|card)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?(?:\s*\{)?/i);
    if (u) {
      const m = u[1].toLowerCase(), g = u[2].trim(), y = u[3] || g.replace(/\s+/g, "_");
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
      let u = `(${h.type}) ${h.label}`;
      n.push(u), h.children.length > 0 && h.children.forEach((f) => {
        const m = o.get(f);
        m && n.push(`  (${m.type}) ${m.label}`);
      });
    }
  }), n.push(""), a.forEach((h) => {
    const d = o.get(h.from), u = o.get(h.to);
    if (d && u) {
      const f = h.label ? `: ${h.label}` : "";
      n.push(`${d.label} -> ${u.label}${f}`);
    }
  }), n.join(`
`);
}
function Mv(i, t) {
  switch (i) {
    case "sequence":
      return Ev(t);
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
function Ev(i) {
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
      const [, d, u, , f] = h, m = f ? ` : ${f}` : "";
      u.toLowerCase() === "end" || u.toLowerCase() === "final" ? r.push(`${d} --> [*]${m}`) : r.push(`${d} --> ${u}${m}`);
      return;
    }
  }), r.push("@enduml"), r.join(`
`);
}
function Iv(i) {
  const t = i.split(`
`).filter((e) => e.trim()), r = ["@startuml"], n = /* @__PURE__ */ new Map(), o = [];
  t.forEach((e) => {
    var u;
    const c = e.trim(), h = c.match(/^\((\w+)\)\s+(.+)$/);
    h && n.set(h[2], h[1]);
    const d = c.match(/^(.+?)\s*->\s*(.+?)(\s*:\s*(.+))?$/);
    d && !c.startsWith("(") && o.push({
      from: d[1].trim(),
      to: d[2].trim(),
      label: (u = d[4]) == null ? void 0 : u.trim()
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
      const [, c, h] = a, d = h.split(",").map((u) => u.trim());
      r.push(`package "${c}" {`), d.forEach((u) => {
        c === "data" || c === "databases" ? r.push(`  database "${u}"`) : c === "clients" ? r.push(`  node "${u}"`) : r.push(`  component "${u}"`);
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
      const [, h, d, u] = c, m = /PRIMARY\s+KEY/i.test(u) ? "*" : "";
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
  const [o, a] = H(""), [e, c] = H(null), [h, d] = H(""), [u, f] = H(null), m = _e(null), g = (n == null ? void 0 : n.name) === "dark";
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
    var $;
    const C = ($ = b.target.files) == null ? void 0 : $[0];
    if (!C) return;
    const w = new FileReader();
    w.onload = (k) => {
      a(k.target.result), c(null), d("");
    }, w.onerror = () => {
      d("Failed to read file");
    }, w.readAsText(C);
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
  }, p = () => {
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
        u && /* @__PURE__ */ S("div", { style: x.typeIndicator, children: [
          /* @__PURE__ */ l("span", { children: "Detected type:" }),
          /* @__PURE__ */ l("strong", { children: u })
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
          onClick: p,
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
}, Zh = [
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
  const [a, e] = H(""), [c, h] = H(""), [d, u] = H(!1), f = (o == null ? void 0 : o.name) === "dark";
  se(() => {
    if (i && r && n) {
      if (h(""), u(!1), !Zh.includes(r)) {
        h(`Export to PlantUML is not supported for "${r}" diagrams.

Supported types: ${Zh.join(", ")}`), e("");
        return;
      }
      try {
        const s = Mv(r, n);
        e(s);
      } catch (s) {
        h(s.message || "Failed to convert to PlantUML"), e("");
      }
    }
  }, [i, r, n]), se(() => {
    i || (e(""), h(""), u(!1));
  }, [i]);
  const m = async () => {
    await Bv(a) && (u(!0), setTimeout(() => u(!1), 2e3));
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
const D = {
  purple: "#7C3AED",
  blue: "#0EA5E9",
  green: "#10B981",
  orange: "#F59E0B",
  red: "#EF4444",
  pink: "#EC4899",
  teal: "#14B8A6"
}, Qh = {
  process: {
    label: "Process",
    shapes: [
      {
        id: "flowchart",
        label: "Flowchart",
        icon: /* @__PURE__ */ S("svg", { viewBox: "0 0 64 48", fill: "none", children: [
          /* @__PURE__ */ l("rect", { x: "4", y: "8", width: "16", height: "10", rx: "2", fill: `${D.orange}40`, stroke: D.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "24", y: "8", width: "16", height: "10", rx: "2", fill: `${D.red}40`, stroke: D.red, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "44", y: "8", width: "16", height: "10", rx: "2", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "28", width: "16", height: "10", rx: "2", fill: `${D.pink}40`, stroke: D.pink, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "28", width: "16", height: "10", rx: "2", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("rect", { x: "22", y: "4", width: "20", height: "10", rx: "2", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "34", width: "16", height: "10", rx: "2", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "24", y: "34", width: "16", height: "10", rx: "2", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "44", y: "34", width: "16", height: "10", rx: "2", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "8", r: "6", fill: `${D.orange}40`, stroke: D.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "46", cy: "24", r: "6", fill: `${D.red}40`, stroke: D.red, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "40", r: "6", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "18", cy: "24", r: "6", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "12", height: "8", rx: "2", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "26", y: "4", width: "12", height: "8", rx: "2", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "48", y: "4", width: "12", height: "8", rx: "2", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "10", y1: "12", x2: "10", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("line", { x1: "32", y1: "12", x2: "32", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("line", { x1: "54", y1: "12", x2: "54", y2: "44", stroke: "#666", strokeWidth: "1", strokeDasharray: "2,2" }),
          /* @__PURE__ */ l("path", { d: "M10 20 L32 20", stroke: D.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M32 28 L54 28", stroke: D.pink, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("path", { d: "M54 36 L32 36", stroke: D.teal, strokeWidth: "1.5", strokeDasharray: "3,2" })
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "8", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "12", r: "6", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "12", r: "6", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "36", r: "6", fill: `${D.orange}40`, stroke: D.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "36", r: "6", fill: `${D.red}40`, stroke: D.red, strokeWidth: "1.5" }),
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
          /* @__PURE__ */ l("rect", { x: "6", y: "12", width: "12", height: "6", rx: "1", fill: `${D.orange}60` }),
          /* @__PURE__ */ l("rect", { x: "6", y: "20", width: "12", height: "6", rx: "1", fill: `${D.orange}60` }),
          /* @__PURE__ */ l("rect", { x: "26", y: "12", width: "12", height: "6", rx: "1", fill: `${D.blue}60` }),
          /* @__PURE__ */ l("rect", { x: "46", y: "12", width: "12", height: "6", rx: "1", fill: `${D.green}60` }),
          /* @__PURE__ */ l("rect", { x: "46", y: "20", width: "12", height: "6", rx: "1", fill: `${D.green}60` })
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
          /* @__PURE__ */ l("rect", { x: "8", y: "28", width: "10", height: "16", rx: "1", fill: `${D.blue}60` }),
          /* @__PURE__ */ l("rect", { x: "22", y: "18", width: "10", height: "26", rx: "1", fill: `${D.purple}60` }),
          /* @__PURE__ */ l("rect", { x: "36", y: "8", width: "10", height: "36", rx: "1", fill: `${D.green}60` }),
          /* @__PURE__ */ l("rect", { x: "50", y: "22", width: "10", height: "22", rx: "1", fill: `${D.orange}60` }),
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "18", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("path", { d: "M32 24 L32 6 A18 18 0 0 1 48 16 Z", fill: `${D.purple}60` }),
          /* @__PURE__ */ l("path", { d: "M32 24 L48 16 A18 18 0 0 1 44 40 Z", fill: `${D.green}60` }),
          /* @__PURE__ */ l("path", { d: "M32 24 L44 40 A18 18 0 0 1 20 40 Z", fill: `${D.orange}60` })
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "24", height: "18", rx: "2", fill: "#f8f8f8", stroke: D.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "24", height: "6", rx: "2", fill: `${D.blue}30` }),
          /* @__PURE__ */ l("rect", { x: "36", y: "26", width: "24", height: "18", rx: "2", fill: "#f8f8f8", stroke: D.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "36", y: "26", width: "24", height: "6", rx: "2", fill: `${D.green}30` }),
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
          /* @__PURE__ */ l("rect", { x: "8", y: "4", width: "22", height: "20", rx: "2", fill: "#f8f8f8", stroke: D.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "10", x2: "30", y2: "10", stroke: D.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "8", y1: "16", x2: "30", y2: "16", stroke: D.purple, strokeWidth: "0.5" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "24", width: "22", height: "20", rx: "2", fill: "#f8f8f8", stroke: D.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("line", { x1: "34", y1: "30", x2: "56", y2: "30", stroke: D.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("line", { x1: "34", y1: "36", x2: "56", y2: "36", stroke: D.orange, strokeWidth: "0.5" }),
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
          /* @__PURE__ */ l("path", { d: "M12 32 L22 24 L32 28 L42 16 L52 20", stroke: D.blue, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ l("path", { d: "M12 36 L22 30 L32 34 L42 26 L52 30", stroke: D.green, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ l("circle", { cx: "12", cy: "32", r: "2", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "28", r: "2", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "20", r: "2", fill: D.blue })
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
          /* @__PURE__ */ l("polygon", { points: "32,12 48,21 44,38 20,38 16,21", fill: `${D.blue}30`, stroke: D.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "12", r: "2", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "21", r: "2", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "44", cy: "38", r: "2", fill: D.blue })
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
          /* @__PURE__ */ l("ellipse", { cx: "32", cy: "24", rx: "12", ry: "8", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("ellipse", { cx: "10", cy: "12", rx: "8", ry: "5", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "54", cy: "12", rx: "8", ry: "5", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "10", cy: "36", rx: "8", ry: "5", fill: `${D.orange}40`, stroke: D.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "54", cy: "36", rx: "8", ry: "5", fill: `${D.red}40`, stroke: D.red, strokeWidth: "1" }),
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "56", height: "10", rx: "2", fill: `${D.blue}20`, stroke: D.blue, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "6", width: "14", height: "6", rx: "1", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "25", y: "6", width: "14", height: "6", rx: "1", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "42", y: "6", width: "14", height: "6", rx: "1", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "18", width: "56", height: "10", rx: "2", fill: `${D.green}20`, stroke: D.green, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "20", width: "22", height: "6", rx: "1", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "20", width: "22", height: "6", rx: "1", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "4", y: "32", width: "56", height: "10", rx: "2", fill: `${D.purple}20`, stroke: D.purple, strokeWidth: "1", strokeDasharray: "3,2" }),
          /* @__PURE__ */ l("rect", { x: "18", y: "34", width: "28", height: "6", rx: "1", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1" })
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
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "14", rx: "12", ry: "6", fill: `${D.blue}30`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "28", rx: "12", ry: "6", fill: `${D.green}30`, stroke: D.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("ellipse", { cx: "38", cy: "42", rx: "12", ry: "6", fill: `${D.orange}30`, stroke: D.orange, strokeWidth: "1" }),
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
          /* @__PURE__ */ l("circle", { cx: "16", cy: "24", r: "4", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "24", r: "4", fill: D.green }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "24", r: "4", fill: D.purple }),
          /* @__PURE__ */ l("rect", { x: "10", y: "8", width: "12", height: "8", rx: "2", fill: `${D.blue}30`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "26", y: "32", width: "12", height: "8", rx: "2", fill: `${D.green}30`, stroke: D.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "42", y: "8", width: "12", height: "8", rx: "2", fill: `${D.purple}30`, stroke: D.purple, strokeWidth: "1" })
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
          /* @__PURE__ */ l("circle", { cx: "8", cy: "24", r: "4", fill: D.green }),
          /* @__PURE__ */ l("circle", { cx: "22", cy: "16", r: "4", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "36", cy: "28", r: "4", fill: D.orange }),
          /* @__PURE__ */ l("circle", { cx: "50", cy: "20", r: "4", fill: D.purple }),
          /* @__PURE__ */ l("path", { d: "M12 24 Q17 16, 18 16", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M26 16 Q31 16, 32 28", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M40 28 Q45 28, 46 20", stroke: "#666", strokeWidth: "1", fill: "none" }),
          /* @__PURE__ */ l("path", { d: "M8 34 Q22 42, 36 38 Q50 34, 56 36", stroke: D.green, strokeWidth: "2", fill: "none", strokeDasharray: "4,2" })
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
          /* @__PURE__ */ l("line", { x1: "16", y1: "8", x2: "16", y2: "40", stroke: D.blue, strokeWidth: "2" }),
          /* @__PURE__ */ l("line", { x1: "32", y1: "16", x2: "32", y2: "40", stroke: D.green, strokeWidth: "2" }),
          /* @__PURE__ */ l("line", { x1: "48", y1: "24", x2: "48", y2: "40", stroke: D.purple, strokeWidth: "2" }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "12", r: "3", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "24", r: "3", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "16", cy: "36", r: "3", fill: D.blue }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "20", r: "3", fill: D.green }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "32", r: "3", fill: D.green }),
          /* @__PURE__ */ l("circle", { cx: "48", cy: "28", r: "3", fill: D.purple }),
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
          /* @__PURE__ */ l("rect", { x: "4", y: "4", width: "26", height: "18", rx: "3", fill: `${D.blue}20`, stroke: D.blue, strokeWidth: "1.5", strokeDasharray: "4,2" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "8", width: "8", height: "6", rx: "1", fill: `${D.blue}50` }),
          /* @__PURE__ */ l("rect", { x: "18", y: "8", width: "8", height: "6", rx: "1", fill: `${D.blue}50` }),
          /* @__PURE__ */ l("rect", { x: "34", y: "26", width: "26", height: "18", rx: "3", fill: `${D.green}20`, stroke: D.green, strokeWidth: "1.5", strokeDasharray: "4,2" }),
          /* @__PURE__ */ l("rect", { x: "38", y: "30", width: "8", height: "6", rx: "1", fill: `${D.green}50` }),
          /* @__PURE__ */ l("rect", { x: "48", y: "30", width: "8", height: "6", rx: "1", fill: `${D.green}50` }),
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
          /* @__PURE__ */ l("rect", { x: "16", y: "8", width: "32", height: "32", rx: "4", fill: `${D.purple}20`, stroke: D.purple, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("rect", { x: "10", y: "14", width: "8", height: "6", rx: "1", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "10", y: "28", width: "8", height: "6", rx: "1", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "46", y: "14", width: "8", height: "6", rx: "1", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "46", y: "28", width: "8", height: "6", rx: "1", fill: `${D.purple}40`, stroke: D.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("text", { x: "32", y: "28", textAnchor: "middle", fontSize: "8", fill: D.purple, children: "API" })
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
          /* @__PURE__ */ l("rect", { x: "8", y: "8", width: "18", height: "14", rx: "2", fill: `${D.blue}30`, stroke: D.blue, strokeWidth: "1" }),
          /* @__PURE__ */ l("circle", { cx: "38", cy: "8", r: "6", fill: "none", stroke: D.orange, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "38", cy: "4", r: "2", fill: `${D.orange}40`, stroke: D.orange, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "48", y: "8", width: "10", height: "14", rx: "2", fill: `${D.green}30`, stroke: D.green, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "8", y: "28", width: "22", height: "14", rx: "2", fill: `${D.purple}30`, stroke: D.purple, strokeWidth: "1" }),
          /* @__PURE__ */ l("rect", { x: "34", y: "28", width: "22", height: "14", rx: "2", fill: `${D.pink}30`, stroke: D.pink, strokeWidth: "1" })
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
          /* @__PURE__ */ l("circle", { cx: "32", cy: "12", r: "6", fill: `${D.blue}40`, stroke: D.blue, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "52", cy: "24", r: "6", fill: `${D.green}40`, stroke: D.green, strokeWidth: "1.5" }),
          /* @__PURE__ */ l("circle", { cx: "32", cy: "36", r: "6", fill: `${D.orange}40`, stroke: D.orange, strokeWidth: "1.5" }),
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
  const [o, a] = H(
    Object.keys(Qh).reduce((d, u) => ({ ...d, [u]: !0 }), {})
  ), e = (n == null ? void 0 : n.name) === "dark", c = (d) => {
    a((u) => ({ ...u, [d]: !u[d] }));
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
    /* @__PURE__ */ l("div", { style: h.content, children: Object.entries(Qh).map(([d, u]) => /* @__PURE__ */ S("div", { style: h.category, children: [
      /* @__PURE__ */ S(
        "div",
        {
          style: h.categoryHeader,
          onClick: () => c(d),
          onMouseEnter: (f) => f.currentTarget.style.background = e ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
          onMouseLeave: (f) => f.currentTarget.style.background = e ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
          children: [
            /* @__PURE__ */ l("span", { style: h.categoryLabel, children: u.label }),
            /* @__PURE__ */ l("span", { style: { ...h.categoryArrow, transform: o[d] ? "rotate(180deg)" : "rotate(0deg)" }, children: "▼" })
          ]
        }
      ),
      o[d] && /* @__PURE__ */ l("div", { style: h.shapesGrid, children: u.shapes.map((f) => /* @__PURE__ */ S(
        "div",
        {
          style: h.shapeItem,
          onClick: () => r(f),
          onMouseEnter: (m) => {
            m.currentTarget.style.background = e ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.1)", m.currentTarget.style.borderColor = D.purple, m.currentTarget.style.transform = "scale(1.05)";
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
        ["fill", "stroke", "stroke-width", "stroke-dasharray", "opacity", "font-size", "font-family"].forEach((p) => {
          const x = s.getPropertyValue(p);
          x && x !== "none" && y.setAttribute(p, x);
        }), y.style.animation = "none";
      } catch {
      }
  }), c.setAttribute("width", n.width), c.setAttribute("height", n.height), c.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const u = new XMLSerializer().serializeToString(c), f = new Blob([u], { type: "image/svg+xml;charset=utf-8" });
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
    const d = c.left - r.left, u = c.top - r.top;
    if (d < -50 || u < -50 || d > r.width + 50 || u > r.height + 50) continue;
    const f = h.backgroundColor, m = h.borderColor, g = f && f !== "rgba(0, 0, 0, 0)" && f !== "transparent", y = m && m !== "rgba(0, 0, 0, 0)" && parseInt(h.borderWidth) > 0, s = `${Math.round(d)},${Math.round(u)},${Math.round(c.width)},${Math.round(c.height)}`;
    if ((g || y) && !o.has(s)) {
      o.add(s);
      const p = parseInt(h.borderRadius) || 0;
      g && (t.fillStyle = f, p > 0 ? (Jh(t, d, u, c.width, c.height, p), t.fill()) : t.fillRect(d, u, c.width, c.height)), y && (t.strokeStyle = m, t.lineWidth = parseInt(h.borderWidth) || 1, p > 0 ? (Jh(t, d, u, c.width, c.height, p), t.stroke()) : t.strokeRect(d, u, c.width, c.height));
    }
  }
  const a = /* @__PURE__ */ new Set();
  for (const e of n) {
    if (e.closest("svg") || e.classList.contains("canvas-bg")) continue;
    const c = window.getComputedStyle(e);
    if (c.display === "none" || c.visibility === "hidden") continue;
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
    const s = c.fontSize || "14px", p = c.fontWeight || "400", x = c.fontFamily || "system-ui, -apple-system, sans-serif", b = c.color || "#ffffff";
    t.fillStyle = b, t.font = `${p} ${s} ${x}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(h, m, g);
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
  const r = V((n) => {
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
function Zv(i) {
  const t = i.trim().toLowerCase();
  return t.startsWith("flowchart") || t.startsWith("graph") ? "flowchart" : t.startsWith("sequencediagram") ? "sequence" : t.startsWith("classdiagram") ? "class" : t.startsWith("statediagram") ? "state" : t.startsWith("erdiagram") ? "erd" : t.startsWith("gantt") ? "gantt" : t.startsWith("pie") ? "pie" : t.startsWith("gitgraph") ? "git" : t.startsWith("journey") ? "journey" : t.startsWith("mindmap") ? "mindmap" : t.startsWith("c4context") || t.startsWith("c4container") || t.startsWith("c4component") || t.startsWith("c4dynamic") || t.startsWith("c4deployment") ? "c4" : t.startsWith("timeline") ? "timeline" : t.startsWith("quadrantchart") ? "quadrant" : t.startsWith("sankey") ? "sankey" : t.startsWith("requirementdiagram") ? "requirement" : null;
}
function Oe(i) {
  return i.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}
function Qv(i) {
  const t = i.split(`
`), r = t[0].trim().toLowerCase(), n = t.slice(1);
  let o = "TB";
  const a = r.match(/(?:flowchart|graph)\s+(td|tb|lr|rl|bt)/i);
  a && (o = a[1].toUpperCase(), o === "TD" && (o = "TB"));
  const e = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = [];
  let f = !1, m = null;
  const g = (M) => {
    M = M.trim();
    let E = M.match(/^(\w+)\(\(\((.+)\)\)\)$/);
    return E ? { id: E[1], label: Oe(E[2]), type: "start" } : (E = M.match(/^(\w+)\{\{(.+)\}\}$/), E ? { id: E[1], label: Oe(E[2]), type: "hexagon" } : (E = M.match(/^(\w+)\[\[(.+)\]\]$/), E ? { id: E[1], label: Oe(E[2]), type: "subroutine" } : (E = M.match(/^(\w+)\[\/(.+)\/\]$/), E ? { id: E[1], label: Oe(E[2]), type: "io" } : (E = M.match(/^(\w+)\[\\(.+)\\\]$/), E ? { id: E[1], label: Oe(E[2]), type: "io" } : (E = M.match(/^(\w+)\[\/(.+)\\\]$/), E ? { id: E[1], label: Oe(E[2]), type: "trapezoid" } : (E = M.match(/^(\w+)\[\\(.+)\/\]$/), E ? { id: E[1], label: Oe(E[2]), type: "trapezoid" } : (E = M.match(/^(\w+)>(.+)\]$/), E ? { id: E[1], label: Oe(E[2]), type: "flag" } : (E = M.match(/^(\w+)\(\(([^)]+)\)\)$/), E ? { id: E[1], label: Oe(E[2]), type: "start" } : (E = M.match(/^(\w+)\(\[([^\]]+)\]\)$/), E ? { id: E[1], label: Oe(E[2]), type: "process" } : (E = M.match(/^(\w+)\[\(([^)]+)\)\]$/), E ? { id: E[1], label: Oe(E[2]), type: "database" } : (E = M.match(/^(\w+)\{([^}]+)\}$/), E ? { id: E[1], label: Oe(E[2]), type: "decision" } : (E = M.match(/^(\w+)\[([^\]]+)\]$/), E ? { id: E[1], label: Oe(E[2]), type: "process" } : (E = M.match(/^(\w+)\(([^)]+)\)$/), E ? { id: E[1], label: Oe(E[2]), type: "process" } : (E = M.match(/^(\w+)$/), E ? { id: E[1], label: E[1], type: "process" } : null))))))))))))));
  }, y = (M) => M.replace(/fa:fa-[\w-]+\s*/g, "").trim() || M;
  n.forEach((M) => {
    if (M = M.trim(), !M || M.startsWith("%%")) return;
    const E = M.match(/^subgraph\s+(.+)/i);
    if (E) {
      m = Oe(E[1]), d.has(m) || d.set(m, []);
      return;
    }
    if (M === "end") {
      m = null;
      return;
    }
    const R = /^(.+?)\s*(--+>|==+>|-\.+->?|--+o|--+x|~~~|--+)\s*(?:\|([^|]*)\|)?\s*(.+)$/;
    let T = M.match(R);
    if (!T) {
      const B = /^(.+?)\s*--\s+([^-]+?)\s+-->\s*(.+)$/, P = M.match(B);
      P && (T = [M, P[1], "-->", P[2].trim(), P[3]]);
    }
    if (T) {
      const [, B, P, L, F] = T, q = g(B.trim());
      if (q) {
        const re = y(q.label), ne = q.label !== q.id;
        (ne || !e.has(q.id)) && e.set(q.id, re), (ne || !c.has(q.id)) && c.set(q.id, q.type), q.type === "decision" && (f = !0), m && (h.set(q.id, m), d.get(m).includes(q.id) || d.get(m).push(q.id));
      }
      const Y = g(F.trim());
      if (Y) {
        const re = y(Y.label), ne = Y.label !== Y.id;
        (ne || !e.has(Y.id)) && e.set(Y.id, re), (ne || !c.has(Y.id)) && c.set(Y.id, Y.type), Y.type === "decision" && (f = !0), m && (h.set(Y.id, m), d.get(m).includes(Y.id) || d.get(m).push(Y.id));
      }
      q && Y && u.push({
        from: q.id,
        to: Y.id,
        label: L ? Oe(L) : ""
      });
      return;
    }
    const I = g(M);
    if (I) {
      const B = y(I.label), P = I.label !== I.id;
      (P || !e.has(I.id)) && e.set(I.id, B), (P || !c.has(I.id)) && c.set(I.id, I.type), I.type === "decision" && (f = !0), m && (h.set(I.id, m), d.get(m).includes(I.id) || d.get(m).push(I.id));
    }
  });
  const s = [];
  u.forEach(({ from: M, to: E }) => {
    s.includes(M) || s.push(M), s.includes(E) || s.push(E);
  }), e.forEach((M, E) => {
    s.includes(E) || s.push(E);
  });
  const p = /* @__PURE__ */ new Map();
  let x = !1;
  u.forEach(({ from: M, label: E }) => {
    p.set(M, (p.get(M) || 0) + 1), E && /interact|fetch|cache|call|send|use|connect|query|read|write|get|post|create|update|webhook|event/i.test(E) && (x = !0);
  });
  const b = [...p.values()].some((M) => M > 1), C = d.size > 0;
  if (!f && (C || b && x || x || e.size >= 8 && b))
    return {
      type: "architecture",
      source: Jv(e, u, s, h, d, c)
    };
  const $ = [], k = /* @__PURE__ */ new Set();
  if (o !== "TB" && $.push(`direction: ${o}`), s.length > 0) {
    const M = s[0], E = e.get(M) || M, R = c.get(M) || "process";
    $.push(`(${R}) ${E}`), k.add(M);
  }
  return u.forEach(({ from: M, to: E, label: R }) => {
    const T = e.get(M) || M, I = e.get(E) || E, B = c.get(E) || "process";
    R ? $.push(`${T} -> (${B}) ${I}: ${R}`) : $.push(`${T} -> (${B}) ${I}`), k.add(E);
  }), {
    type: "flowchart",
    source: $.join(`
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
  }, h = (b, C) => {
    const w = `${b} ${C}`.toLowerCase();
    return c.clients.test(w) ? "clients" : c.gateway.test(w) ? "gateway" : c.database.test(w) ? "database" : c.external.test(w) ? "external" : (c.service.test(w), "service");
  }, d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  r.forEach((b) => {
    d.set(b, []), u.set(b, []);
  }), t.forEach(({ from: b, to: C }) => {
    d.has(b) && d.get(b).push(C), u.has(C) && u.get(C).push(b);
  });
  const f = /* @__PURE__ */ new Set();
  r.forEach((b) => {
    const C = i.get(b) || b;
    ((u.get(b) || []).length === 0 || c.clients.test(C) || c.clients.test(b)) && f.add(b);
  }), f.size === 0 && r.length > 0 && f.add(r[0]);
  const m = /* @__PURE__ */ new Set();
  t.forEach(({ from: b, to: C }, w) => {
    f.has(C) && !f.has(b) && m.add(w);
  });
  const g = /* @__PURE__ */ new Map();
  f.forEach((b) => g.set(b, 0));
  const y = [...f];
  for (; y.length > 0; ) {
    const b = y.shift(), C = g.get(b);
    (d.get(b) || []).forEach(($) => {
      const k = t.findIndex((R) => R.from === b && R.to === $);
      if (m.has(k)) return;
      const M = g.get($), E = C + 1;
      (M === void 0 || M < E) && (g.set($, E), y.includes($) || y.push($));
    });
  }
  o.size > 0 && o.forEach((b, C) => {
    if (b.filter(($) => (u.get($) || []).filter((M) => !b.includes(M)).length === 0).length === b.length) {
      Math.max(0, ...g.values()), b.forEach((k, M) => {
        g.has(k) || g.set(k, 0);
      });
      const $ = b.filter((k) => g.has(k));
      for (; $.length > 0; ) {
        const k = $.shift(), M = g.get(k);
        (d.get(k) || []).filter((R) => b.includes(R) || !g.has(R)).forEach((R) => {
          const T = M + 1;
          (!g.has(R) || g.get(R) < T) && (g.set(R, T), $.includes(R) || $.push(R));
        });
      }
    }
  });
  const s = g.size > 0 ? Math.floor([...g.values()].reduce((b, C) => b + C, 0) / g.size) : 0;
  r.forEach((b) => {
    g.has(b) || g.set(b, s);
  });
  const p = /* @__PURE__ */ new Map();
  return r.forEach((b) => {
    const C = g.get(b);
    p.has(C) || p.set(C, []), p.get(C).push(b);
  }), [...p.keys()].sort((b, C) => b - C).forEach((b) => {
    const C = p.get(b), w = /* @__PURE__ */ new Map();
    C.forEach(($) => {
      const k = i.get($) || $, M = n.get($);
      let E;
      if (M) {
        const R = M.toLowerCase();
        /ingestion|ingest|import|input/i.test(R) ? E = "service" : /gateway|api/i.test(R) ? E = "gateway" : /data|storage|database/i.test(R) ? E = "database" : /external|third/i.test(R) ? E = "external" : E = h(k, $);
      } else
        E = h(k, $);
      w.has(E) || w.set(E, []), w.get(E).push($);
    }), w.forEach(($, k) => {
      const M = $.map((E) => i.get(E) || E);
      e.push(`[${k}] ${M.join(", ")}`);
    });
  }), e.push(""), t.forEach(({ from: b, to: C, label: w }) => {
    const $ = i.get(b) || b, k = i.get(C) || C;
    w ? e.push(`${$} -> ${k}: ${w}`) : e.push(`${$} -> ${k}`);
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
      const M = c[1], E = c[2] || c[1];
      o.set(M, E), r.add(E);
      return;
    }
    const h = e.match(/^actor\s+(\w+)(?:\s+as\s+(.+))?/i);
    if (h) {
      const M = h[1], E = h[2] || h[1];
      o.set(M, E), r.add(E);
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
    const s = e.match(/^critical\s+(.+)/i);
    if (s) {
      n.push(`critical ${s[1]}`);
      return;
    }
    const p = e.match(/^option\s+(.+)/i);
    if (p) {
      n.push(`option ${p[1]}`);
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
    const C = e.match(/^(activate|deactivate)\s+(\w+)/i);
    if (C) {
      const M = C[2], E = o.get(M) || M;
      n.push(`${C[1].toLowerCase()} ${E}`);
      return;
    }
    if (e.toLowerCase() === "end") {
      n.push("end");
      return;
    }
    const w = e.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);
    if (w) {
      const M = w[1].toLowerCase(), E = w[2], R = o.get(E) || E, T = w[3];
      n.push(`note ${M} of ${R}: ${T}`);
      return;
    }
    const $ = e.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);
    if ($) {
      const M = $[1].split(",").map((E) => {
        const R = E.trim();
        return o.get(R) || R;
      });
      n.push(`note over ${M.join(", ")}: ${$[2]}`);
      return;
    }
    const k = e.match(/(\w+)\s*(-?->>?|-->>?|-x|--x|-\)|--\))([+-])?\s*(\w+)\s*:\s*(.+)/);
    if (k) {
      const [, M, E, R, T, I] = k, B = o.get(M) || M, P = o.get(T) || T, L = E.startsWith("--"), F = E.includes("x"), q = E.includes(")");
      r.add(B), r.add(P);
      let Y = L ? "-->" : "->";
      F ? Y = L ? "--x" : "-x" : q && (Y = L ? "--)" : "-)"), n.push(`${B} ${Y} ${P}: ${I}`), R === "+" ? n.push(`activate ${P}`) : R === "-" && n.push(`deactivate ${P}`);
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
  return r.forEach(({ name: e, members: c }) => {
    a.push(`class ${e}`), c.forEach((h) => a.push(h)), a.push("");
  }), n.forEach(({ from: e, to: c, arrow: h, label: d }) => {
    const u = d ? `${e} ${h} ${c} : ${d}` : `${e} ${h} ${c}`;
    a.push(u);
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
      const [, s, p] = h;
      a.set(p, s), r.has(p) || r.set(p, { id: p });
      return;
    }
    const d = c.match(/^(\w+)\s*:\s*([^{]+)$/);
    if (d && !c.includes("-->")) {
      const [, s, p] = d;
      a.set(s, p.trim()), r.has(s) || r.set(s, { id: s });
      return;
    }
    const u = c.match(/^state\s+(\w+)\s*\{?\s*$/i);
    if (u) {
      const s = u[1];
      if (!r.has(s))
        r.set(s, { id: s, isComposite: !0, children: [] });
      else {
        const p = r.get(s);
        p.isComposite = !0, p.children = p.children || [];
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
      const [, s, p] = f;
      r.set(s, { id: s, specialType: p.toLowerCase() });
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
      const s = c.match(/\[\*\]\s*-->\s*(\w+)/), p = c.match(/(\w+)\s*-->\s*\[\*\]/);
      if (s) {
        const x = s[1];
        if (r.has(x) ? r.get(x).isInitial = !0 : r.set(x, { id: x, isInitial: !0 }), o.length > 0) {
          const b = r.get(o[o.length - 1]);
          b && b.children && !b.children.includes(x) && b.children.push(x);
        }
      }
      if (p) {
        const x = p[1];
        r.has(x) ? r.get(x).isFinal = !0 : r.set(x, { id: x, isFinal: !0 });
      }
      return;
    }
    const y = c.match(/(\w+)\s*-->\s*(\w+)(?:\s*:\s*(.+))?/);
    if (y) {
      const [, s, p, x] = y;
      if (r.has(s) || r.set(s, { id: s }), r.has(p) || r.set(p, { id: p }), n.push({ from: s, to: p, event: x || "" }), o.length > 0) {
        const b = r.get(o[o.length - 1]);
        b && b.children && (b.children.includes(s) || b.children.push(s), b.children.includes(p) || b.children.push(p));
      }
    }
  });
  const e = [];
  return r.forEach((c) => {
    const h = a.get(c.id), d = h ? `${c.id}: ${h}` : c.id;
    c.isInitial ? e.push(`(initial) ${d}`) : c.isFinal ? e.push(`(final) ${d}`) : c.specialType === "fork" ? e.push(`(fork) ${d}`) : c.specialType === "join" ? e.push(`(join) ${d}`) : c.specialType === "choice" ? e.push(`(choice) ${d}`) : c.isComposite && e.push(`(composite) ${d}`);
  }), e.length > 0 && e.push(""), n.forEach(({ from: c, to: h, event: d }) => {
    const u = d ? `${c} -> ${h}: ${d}` : `${c} -> ${h}`;
    e.push(u);
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
      const [, c, h, d] = e, u = Array.from(r.values()).pop();
      u && u.fields.push({
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
      const u = d[1].trim(), m = d[2].trim().split(",").map((w) => w.trim()), g = [];
      let y = null, s = null, p = null, x = null;
      m.forEach((w) => {
        /^(done|active|crit|milestone)$/i.test(w) ? g.push(w.toLowerCase()) : /^after\s+/i.test(w) ? s = w.replace(/^after\s+/i, "").trim() : /^\d+d?$/.test(w) ? x = parseInt(w) : /^\d{4}-\d{2}-\d{2}$/.test(w) || /^\d+$/.test(w) ? p ? x || (x = parseInt(w)) : p = w : /^\w+$/.test(w) && !y && (y = w);
      }), x || (x = 1);
      let b = a;
      if (s && n.has(s)) {
        const w = n.get(s);
        b = w.start + w.duration;
      } else p && /^\d+$/.test(p) && (b = parseInt(p));
      y && n.set(y, { start: b, duration: x });
      let C = `${u}, ${b}, ${x}`;
      g.length > 0 && (C += ` [${g.join(", ")}]`), s && (C += ` after:${s}`), r.push(C), a = b + x;
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
    const u = c.match(/^(.+?):\s*(\d+)(?:\s*:\s*(.+))?$/);
    if (u && o) {
      const f = u[1].trim(), m = parseInt(u[2]), g = u[3] || "", y = g ? g.split(",").map((s) => s.trim()).filter((s) => s) : [];
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
    const p = s.match(/^(\w+)\s*\((.+)\)\s*$/);
    if (!p) return null;
    const x = p[1], b = p[2], C = [];
    let w = "", $ = !1, k = "";
    for (let M = 0; M < b.length; M++) {
      const E = b[M];
      (E === '"' || E === "'") && !$ ? ($ = !0, k = E) : E === k && $ ? ($ = !1, k = "") : E === "," && !$ ? (C.push(w.trim().replace(/^["']|["']$/g, "")), w = "") : w += E;
    }
    return w.trim() && C.push(w.trim().replace(/^["']|["']$/g, "")), { funcName: x, args: C };
  };
  t.slice(1).forEach((s) => {
    if (s = s.trim(), !s || s.startsWith("%%") || s.startsWith("title")) return;
    const p = s.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(([^,]+),\s*["']([^"']+)["'](?:,\s*["']([^"']+)["'])?\s*\)/i);
    if (p) {
      const k = p[2].trim(), M = p[3], E = p[4] || p[1].replace("_Boundary", "").toLowerCase(), R = a.length > 0 ? a[a.length - 1].alias : null;
      e.set(k, {
        label: M,
        type: E,
        parentBoundary: R
      }), a.push({
        type: p[1],
        alias: k,
        label: M
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
    const { funcName: b, args: C } = x, w = b.toLowerCase(), $ = a.length > 0 ? a[a.length - 1].alias : null;
    if (w.startsWith("person")) {
      const k = w.includes("_ext");
      n.set(C[0], {
        type: k ? "external" : "clients",
        label: C[1] || C[0],
        description: C[2] || "",
        boundary: $
      });
      return;
    }
    if (w.startsWith("system")) {
      const k = w.includes("_ext"), M = w.includes("db"), E = w.includes("queue");
      let R = "service";
      k ? R = "external" : M ? R = "database" : E && (R = "service"), n.set(C[0], {
        type: R,
        label: C[1] || C[0],
        description: C[2] || "",
        technology: "",
        boundary: $
      });
      return;
    }
    if (w.startsWith("container")) {
      const k = w.includes("_ext"), M = w.includes("db"), E = w.includes("queue");
      let R = "service";
      k ? R = "external" : M ? R = "database" : E && (R = "service"), n.set(C[0], {
        type: R,
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: $
      });
      return;
    }
    if (w.startsWith("component")) {
      const k = w.includes("_ext"), M = w.includes("db");
      let E = "service";
      k ? E = "external" : M && (E = "database"), n.set(C[0], {
        type: E,
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: $
      });
      return;
    }
    if (w === "node" || w === "node_l" || w === "node_r") {
      n.set(C[0], {
        type: "service",
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: $
      });
      return;
    }
    if (w.startsWith("deployment_node")) {
      n.set(C[0], {
        type: "service",
        label: C[1] || C[0],
        technology: C[2] || "",
        description: C[3] || "",
        boundary: $
      });
      return;
    }
    if (w.startsWith("rel") || w === "birel") {
      const k = w === "birel";
      let M, E, R, T;
      w === "relindex" ? (M = C[1], E = C[2], R = C[3] || "", T = C[4] || "") : (M = C[0], E = C[1], R = C[2] || "", T = C[3] || ""), o.push({
        from: M,
        to: E,
        label: T ? `${R} [${T}]` : R,
        bidirectional: k
      });
      return;
    }
  });
  const h = [], d = /* @__PURE__ */ new Map(), u = [];
  n.forEach((s, p) => {
    s.boundary ? (d.has(s.boundary) || d.set(s.boundary, []), d.get(s.boundary).push({ alias: p, ...s })) : u.push({ alias: p, ...s });
  });
  const f = (s) => {
    const p = /* @__PURE__ */ new Map();
    s.forEach((b) => {
      p.has(b.type) || p.set(b.type, []), p.get(b.type).push(b);
    });
    const x = ["clients", "external", "gateway", "service", "database"];
    x.forEach((b) => {
      const C = p.get(b);
      if (C && C.length > 0) {
        const w = C.map(($) => $.label);
        h.push(`[${b}] ${w.join(", ")}`);
      }
    }), p.forEach((b, C) => {
      if (!x.includes(C) && b.length > 0) {
        const w = b.map(($) => $.label);
        h.push(`[${C}] ${w.join(", ")}`);
      }
    });
  };
  u.length > 0 && (f(u), h.push(""));
  const m = [], g = /* @__PURE__ */ new Map();
  e.forEach((s, p) => {
    s.parentBoundary ? (g.has(s.parentBoundary) || g.set(s.parentBoundary, []), g.get(s.parentBoundary).push(p)) : m.push(p);
  });
  const y = (s, p = "") => {
    const x = e.get(s);
    if (!x) return;
    const b = d.get(s) || [], C = g.get(s) || [];
    if (!(b.length === 0 && C.length === 0)) {
      if (h.push(`${p}group "${x.label}" {`), b.length > 0) {
        const w = /* @__PURE__ */ new Map();
        b.forEach((k) => {
          w.has(k.type) || w.set(k.type, []), w.get(k.type).push(k);
        });
        const $ = ["clients", "external", "gateway", "service", "database"];
        $.forEach((k) => {
          const M = w.get(k);
          if (M && M.length > 0) {
            const E = M.map((R) => R.label);
            h.push(`${p}  [${k}] ${E.join(", ")}`);
          }
        }), w.forEach((k, M) => {
          if (!$.includes(M) && k.length > 0) {
            const E = k.map((R) => R.label);
            h.push(`${p}  [${M}] ${E.join(", ")}`);
          }
        });
      }
      C.length > 0 && (b.length > 0 && h.push(""), C.forEach((w) => {
        y(w, p + "  ");
      })), h.push(`${p}}`), h.push("");
    }
  };
  return m.forEach((s) => {
    y(s);
  }), o.forEach((s) => {
    const p = n.get(s.from), x = n.get(s.to), b = (p == null ? void 0 : p.label) || s.from, C = (x == null ? void 0 : x.label) || s.to;
    s.bidirectional ? h.push(`${b} <-> ${C}: ${s.label}`) : s.label ? h.push(`${b} -> ${C}: ${s.label}`) : h.push(`${b} -> ${C}`);
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
    const u = c.match(/^y-axis\s+(.+?)(?:\s*-->\s*(.+))?$/i);
    if (u) {
      o.y.bottom = u[1].trim(), o.y.top = ((y = u[2]) == null ? void 0 : y.trim()) || "";
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
      const [h, d, u] = a;
      n.push({ source: h, target: d, value: parseFloat(u) });
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
  const t = Zv(i);
  if (!t)
    throw new Error("Could not detect Mermaid diagram type. Supported types: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap, c4, timeline, quadrant, sankey, requirement");
  let r = "", n = t;
  switch (t) {
    case "flowchart": {
      const o = Qv(i);
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
        const h = e[c].match(/^\((\w+)\)\s*(.+)/) || [null, "process", e[c]], d = e[c + 1].match(/^\((\w+)\)\s*(.+)/) || [null, "process", e[c + 1]], u = h[1], f = h[2].trim(), m = d[1];
        let g = d[2].trim(), y = "";
        const s = g.match(/^(.+?):\s*(.+)$/);
        s && (g = s[1].trim(), y = s[2].trim());
        const p = o(f), x = o(g), b = ($, k, M) => {
          switch ($) {
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
        }, C = b(u, f, p), w = b(m, g, x);
        y ? t.push(`    ${C} -->|${y}| ${w}`) : t.push(`    ${C} --> ${w}`);
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
      const u = h ? `${a} ${d} ${c} : ${h}` : `${a} ${d} ${c}`;
      t.push(`    ${u}`), r = null;
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
      const [, c, h, d] = e, u = d ? `${c} --> ${h} : ${d}` : `${c} --> ${h}`;
      t.push(`    ${u}`);
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
        const [, d, u] = h, f = /PRIMARY\s+KEY/i.test(c), m = /REFERENCES/i.test(c);
        let g = u.toLowerCase();
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
function M2(i, t = "diagram") {
  const r = new Blob([i], { type: "text/plain" }), n = URL.createObjectURL(r), o = document.createElement("a");
  o.href = n, o.download = `${t}.mmd`, o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o), setTimeout(() => URL.revokeObjectURL(n), 100);
}
async function E2(i) {
  await navigator.clipboard.writeText(i);
}
function R2(i) {
  const [t, r] = H({
    past: [],
    present: { ...i, timestamp: Date.now(), changeType: "initial" },
    future: []
  }), n = _e(!1), o = V((u, f = "unknown") => {
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
  }, []), a = V(() => {
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
  }, []), e = V(() => {
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
  }, []), c = V(() => {
    r((u) => ({
      past: [],
      present: u.present,
      future: []
    }));
  }, []), h = V((u) => {
    r({
      past: [],
      present: { ...u, timestamp: Date.now(), changeType: "reset" },
      future: []
    });
  }, []), d = V(() => n.current, []);
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
}, de = [v.purple, v.blue, v.green, v.orange, v.pink, v.cyan, v.violet, v.teal], At = (i, t = !1) => t ? ye.fill : `linear-gradient(135deg, ${i}38, ${i}15)`, Qe = (i, t, r, n = !1) => n ? "none" : t ? `0 0 0 2px ${i}, 0 12px 28px ${i}50, 0 20px 40px rgba(0,0,0,0.25)` : r ? `0 0 0 3px rgba(124,58,237,0.7), 0 8px 24px rgba(124,58,237,0.35), 0 16px 32px ${i}25` : `0 2px 4px rgba(0,0,0,0.08), 0 8px 20px ${i}25, 0 16px 40px ${i}12`, nn = (i = !1) => i ? "'Caveat', cursive" : "system-ui, -apple-system, sans-serif", D2 = (i, t = !1) => {
  if (t) {
    if (typeof i == "string") {
      const r = parseFloat(i), n = i.replace(/[\d.]/g, "") || "px";
      return `${r * 1.25}${n}`;
    }
    return i * 1.25;
  }
  return i;
}, sr = (i, t, r, n) => {
  const o = r - i, a = n - t, e = Math.sqrt(o * o + a * a), c = Math.min(Math.max(e * 0.3, 20), 80);
  if (e < 30)
    return `M ${i} ${t} L ${r} ${n}`;
  if (Math.abs(o) > Math.abs(a) * 1.2) {
    const f = o > 0 ? 1 : -1, m = a * 0.1;
    return `M ${i} ${t} C ${i + c * f} ${t + m}, ${r - c * f} ${n - m}, ${r} ${n}`;
  }
  if (Math.abs(a) > Math.abs(o) * 1.2) {
    const f = a > 0 ? 1 : -1, m = o * 0.1;
    return `M ${i} ${t} C ${i + m} ${t + c * f}, ${r - m} ${n - c * f}, ${r} ${n}`;
  }
  const h = o > 0 ? 1 : -1, d = a > 0 ? 1 : -1, u = c * 0.7;
  return `M ${i} ${t} C ${i + u * h} ${t + u * d * 0.3}, ${r - u * h} ${n - u * d * 0.3}, ${r} ${n}`;
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
  let u = `M ${d[0].x} ${d[0].y}`;
  for (let f = 1; f < d.length; f++) {
    const m = d[f - 1], g = d[f], y = (m.x + g.x) / 2, s = (m.y + g.y) / 2;
    u += ` Q ${m.x} ${m.y} ${y} ${s}`;
  }
  return u += ` L ${d[d.length - 1].x} ${d[d.length - 1].y}`, u;
};
function Pe(i = { x: 50, y: 50 }) {
  const t = _e(null), [r, n] = H(i), [o, a] = H(1), [e, c] = H(!1), [h, d] = H({ x: 0, y: 0 }), [u, f] = H({}), [m, g] = H(null), [y, s] = H({ x: 0, y: 0 }), [p, x] = H(!0), b = 25, C = V((N) => p ? Math.round(N / b) * b : N, [p, b]), [w, $] = H(/* @__PURE__ */ new Set()), [k, M] = H(null), [E, R] = H(""), [T, I] = H({}), [B, P] = H({}), [L, F] = H({}), [q, Y] = H({}), re = { width: 130, height: 60 }, ne = { width: 80, height: 40 }, te = { width: 300, height: 200 }, [oe, j] = H(null), [A, O] = H(null), [_, z] = H(null), [W, X] = H(null), [Z, Q] = H(!1), [ke, Ce] = H(null), [J, xe] = H(""), [le, Le] = H(!1), [ce, pe] = H(null), [Ne, Ke] = H(null), [qe, Be] = H(null), [Ie, Ee] = H({}), [rt, st] = H({}), [St, ct] = H({}), [qt, kt] = H(null), [Ct, ft] = H({ horizontal: [], vertical: [] }), Ge = 5, Fe = _e(null), $t = _e(null), Ye = V((N, G) => {
    if (!t.current) return { x: 0, y: 0 };
    const ie = t.current.getBoundingClientRect();
    return {
      x: (N - ie.left - r.x) / o,
      y: (G - ie.top - r.y) / o
    };
  }, [r, o]), on = V((N) => {
    if (N.target === t.current || N.target.classList.contains("canvas-bg"))
      if (N.shiftKey) {
        const G = Ye(N.clientX, N.clientY);
        Q(!0), X({ startX: G.x, startY: G.y, endX: G.x, endY: G.y });
      } else
        c(!0), d({ x: N.clientX - r.x, y: N.clientY - r.y });
  }, [r, Ye]), an = V((N, G, ie, fe) => {
    if (N.stopPropagation(), O(null), N.shiftKey) {
      $((Se) => {
        const We = new Set(Se);
        return We.has(G) ? We.delete(G) : We.add(G), We;
      });
      return;
    }
    $(/* @__PURE__ */ new Set([G])), g(G);
    const ve = Ye(N.clientX, N.clientY);
    s({ x: ve.x - ie, y: ve.y - fe });
  }, [Ye]), sn = V((N, G, ie) => {
    N.stopPropagation(), M(G), R(ie || ""), $(/* @__PURE__ */ new Set([G]));
  }, []), cn = V(() => {
    const N = { nodeId: k, newValue: E };
    return M(null), R(""), N;
  }, [k, E]), ln = V(() => {
    M(null), R("");
  }, []), dn = V((N, G) => {
    N.preventDefault(), N.stopPropagation(), O({
      nodeId: G,
      x: N.clientX,
      y: N.clientY
    }), w.has(G) || $(/* @__PURE__ */ new Set([G]));
  }, [w]), cr = V(() => {
    O(null);
  }, []), lr = V((N, G) => {
    I((ie) => ({
      ...ie,
      [N]: G
    })), O(null);
  }, []), dr = V((N, G) => {
    P((ie) => ({
      ...ie,
      [N]: G
    }));
  }, []), un = V((N, G) => {
    F((ie) => ({
      ...ie,
      [N]: G
    }));
  }, []), ur = V(() => {
    $(/* @__PURE__ */ new Set());
  }, []), pr = V((N) => {
    if (w.size === 0 || !N) return;
    const G = N.filter((fe) => w.has(fe.id));
    if (G.length === 0) return;
    const ie = G.map((fe) => {
      var ve, Se;
      return {
        ...fe,
        copiedX: ((ve = u[fe.id]) == null ? void 0 : ve.x) ?? fe.x,
        copiedY: ((Se = u[fe.id]) == null ? void 0 : Se.y) ?? fe.y
      };
    });
    return z(ie), ie;
  }, [w, u]), pn = V(() => {
    if (!_ || _.length === 0) return null;
    const N = 30;
    return _.map((G) => ({
      ...G,
      id: `${G.id}_copy_${Date.now()}`,
      x: G.copiedX + N,
      y: G.copiedY + N,
      label: G.label
    }));
  }, [_]), hn = V((N, G, ie) => {
    N.stopPropagation(), Ce(G), xe(ie || "");
  }, []), fn = V(() => {
    const N = { edgeId: ke, newValue: J };
    return Ce(null), xe(""), N;
  }, [ke, J]), gn = V(() => {
    Ce(null), xe("");
  }, []), mn = V((N, G) => {
    N.preventDefault(), N.stopPropagation(), kt({
      edgeId: G,
      x: N.clientX,
      y: N.clientY
    });
  }, []), hr = V(() => {
    kt(null);
  }, []), fr = V((N, G) => {
    Ee((ie) => ({
      ...ie,
      [N]: G
    }));
  }, []), gr = V((N, G) => {
    st((ie) => ({
      ...ie,
      [N]: G
    })), kt(null);
  }, []), mr = V((N, G) => {
    ct((ie) => ({
      ...ie,
      [N]: G
    }));
  }, []), yr = V((N) => q[N] || re, [q]), br = V((N, G, ie) => {
    N.stopPropagation(), N.preventDefault();
    const fe = q[G] || re;
    j({
      nodeId: G,
      handle: ie,
      // 'se' (southeast), 'e' (east), 's' (south)
      startX: N.clientX,
      startY: N.clientY,
      startWidth: fe.width,
      startHeight: fe.height
    });
  }, [q]), Ht = V((N, G) => {
    if (!oe) return;
    const ie = (N - oe.startX) / o, fe = (G - oe.startY) / o;
    let ve = oe.startWidth, Se = oe.startHeight;
    oe.handle.includes("e") && (ve = Math.max(ne.width, Math.min(te.width, oe.startWidth + ie))), oe.handle.includes("s") && (Se = Math.max(ne.height, Math.min(te.height, oe.startHeight + fe))), p && (ve = Math.round(ve / b) * b, Se = Math.round(Se / b) * b, ve = Math.max(ne.width, ve), Se = Math.max(ne.height, Se)), Y((We) => ({
      ...We,
      [oe.nodeId]: { width: ve, height: Se }
    }));
  }, [oe, o, p, b]);
  V(() => {
    j(null);
  }, []);
  const xr = V((N, G, ie, fe) => {
    N.stopPropagation(), N.preventDefault(), Le(!0), pe({ nodeId: G, x: ie, y: fe }), Ke({ x: ie, y: fe });
  }, []), vr = V(() => {
    Le(!1), pe(null), Ke(null), Be(null);
  }, []), wr = V((N) => {
    le && ce && ce.nodeId !== N && Be(N);
  }, [le, ce]), Sr = V(() => {
    Be(null);
  }, []), kr = V((N, G) => {
    if (!G || !N) return [];
    const ie = Math.min(G.startX, G.endX), fe = Math.max(G.startX, G.endX), ve = Math.min(G.startY, G.endY), Se = Math.max(G.startY, G.endY);
    return N.filter((We) => {
      const je = u[We.id] || { x: We.x, y: We.y };
      return je.x >= ie && je.x <= fe && je.y >= ve && je.y <= Se;
    }).map((We) => We.id);
  }, [u]), Cr = V((N) => {
    if (e)
      n({ x: N.clientX - h.x, y: N.clientY - h.y });
    else if (oe)
      Ht(N.clientX, N.clientY);
    else if (le) {
      const G = Ye(N.clientX, N.clientY);
      Ke({ x: G.x, y: G.y });
    } else if (Z && W) {
      const G = Ye(N.clientX, N.clientY);
      X((ie) => ({ ...ie, endX: G.x, endY: G.y }));
    } else if (m) {
      const G = Ye(N.clientX, N.clientY);
      let ie = G.x - y.x, fe = G.y - y.y;
      ie = C(ie), fe = C(fe), f((ve) => ({
        ...ve,
        [m]: { x: ie, y: fe }
      }));
    } else
      (Ct.horizontal.length > 0 || Ct.vertical.length > 0) && ft({ horizontal: [], vertical: [] });
  }, [e, h, oe, Ht, le, Z, W, m, y, Ye, C, Ct]), U = V((N, G, ie, fe) => {
    if (!N || !G) {
      ft({ horizontal: [], vertical: [] });
      return;
    }
    const ve = [], Se = [];
    ie.forEach((We) => {
      if (We.id === N) return;
      const je = fe(We);
      Math.abs(je.y - G.y) < Ge && ve.push({ y: je.y, fromX: Math.min(je.x, G.x) - 50, toX: Math.max(je.x, G.x) + 200 }), Math.abs(je.x - G.x) < Ge && Se.push({ x: je.x, fromY: Math.min(je.y, G.y) - 50, toY: Math.max(je.y, G.y) + 100 });
    }), ft({ horizontal: ve, vertical: Se });
  }, [Ge]), ae = V(() => {
    ft({ horizontal: [], vertical: [] });
    let N = null;
    return le && ce && qe && (N = {
      source: ce.nodeId,
      target: qe
    }), c(!1), g(null), j(null), Q(!1), X(null), Le(!1), pe(null), Ke(null), Be(null), N;
  }, [le, ce, qe]), he = (N) => {
    if (N.length < 2) return null;
    const G = N[0].clientX - N[1].clientX, ie = N[0].clientY - N[1].clientY;
    return Math.sqrt(G * G + ie * ie);
  }, Ue = (N) => N.length < 2 ? { x: N[0].clientX, y: N[0].clientY } : {
    x: (N[0].clientX + N[1].clientX) / 2,
    y: (N[0].clientY + N[1].clientY) / 2
  }, Pt = V((N) => {
    if (N.touches.length === 2)
      N.preventDefault(), Fe.current = he(N.touches), $t.current = Ue(N.touches);
    else if (N.touches.length === 1) {
      const G = N.touches[0];
      (N.target === t.current || N.target.classList.contains("canvas-bg")) && (c(!0), d({ x: G.clientX - r.x, y: G.clientY - r.y }));
    }
  }, [r]), nt = V((N, G, ie, fe) => {
    if (N.stopPropagation(), N.touches.length === 1) {
      const ve = N.touches[0];
      g(G);
      const Se = Ye(ve.clientX, ve.clientY);
      s({ x: Se.x - ie, y: Se.y - fe });
    }
  }, [Ye]), He = V((N) => {
    if (N.touches.length === 2) {
      N.preventDefault();
      const G = he(N.touches), ie = Ue(N.touches);
      if (Fe.current && G) {
        const fe = G / Fe.current;
        a((ve) => Math.min(Math.max(ve * fe, 0.2), 3));
      }
      if ($t.current) {
        const fe = ie.x - $t.current.x, ve = ie.y - $t.current.y;
        n((Se) => ({ x: Se.x + fe, y: Se.y + ve }));
      }
      Fe.current = G, $t.current = ie;
    } else if (N.touches.length === 1) {
      const G = N.touches[0];
      if (e)
        n({ x: G.clientX - h.x, y: G.clientY - h.y });
      else if (m) {
        N.preventDefault();
        const ie = Ye(G.clientX, G.clientY);
        f((fe) => ({
          ...fe,
          [m]: { x: ie.x - y.x, y: ie.y - y.y }
        }));
      }
    }
  }, [e, h, m, y, Ye]), $r = V(() => {
    c(!1), g(null), Fe.current = null, $t.current = null;
  }, []), Mg = V((N) => {
    N.preventDefault();
    const ie = 1 - N.deltaY * 2e-3;
    a((fe) => Math.min(Math.max(fe * ie, 0.2), 3));
  }, []), Eg = V(() => {
    n(i), a(1), f({});
  }, [i]), Rg = V((N) => {
    if (!t.current || !N) return;
    const G = t.current.getBoundingClientRect(), ie = 60, fe = (G.width - ie * 2) / N.width, ve = (G.height - ie * 2) / N.height, Se = Math.min(Math.max(Math.min(fe, ve), 0.3), 1.5), We = N.x + N.width / 2, je = N.y + N.height / 2;
    n({
      x: G.width / 2 - We * Se,
      y: G.height / 2 - je * Se
    }), a(Se);
  }, []), _g = V((N, G, ie) => {
    const fe = u[N];
    return fe ? { x: fe.x, y: fe.y } : { x: G, y: ie };
  }, [u]);
  return {
    canvasRef: t,
    pan: r,
    setPan: n,
    zoom: o,
    setZoom: a,
    isPanning: e,
    dragging: m,
    positions: u,
    // Multi-select
    selectedNodes: w,
    setSelectedNodes: $,
    clearSelection: ur,
    // Inline editing
    editingNode: k,
    editValue: E,
    setEditValue: R,
    handleNodeDoubleClick: sn,
    finishEditing: cn,
    cancelEditing: ln,
    // Node colors
    nodeColors: T,
    setNodeColor: lr,
    nodeIcons: B,
    setNodeIcon: dr,
    nodeShapes: L,
    setNodeShape: un,
    // Node sizes (resize)
    nodeSizes: q,
    getNodeSize: yr,
    resizing: oe,
    handleResizeStart: br,
    // Context menu
    contextMenu: A,
    handleNodeContextMenu: dn,
    closeContextMenu: cr,
    // Clipboard (copy/paste)
    clipboard: _,
    copySelectedNodes: pr,
    pasteNodes: pn,
    // Selection box (drag to select)
    selectionBox: W,
    isSelecting: Z,
    getNodesInSelectionBox: kr,
    // Edge editing
    editingEdge: ke,
    edgeEditValue: J,
    setEdgeEditValue: xe,
    handleEdgeDoubleClick: hn,
    finishEdgeEditing: fn,
    cancelEdgeEditing: gn,
    // Edge styles and context menu
    edgeStyles: Ie,
    setEdgeStyle: fr,
    edgeArrowTypes: rt,
    setEdgeArrowType: gr,
    edgePathTypes: St,
    setEdgePathType: mr,
    edgeContextMenu: qt,
    handleEdgeContextMenu: mn,
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
    snapToGrid: p,
    setSnapToGrid: x,
    // Alignment guides
    alignmentGuides: Ct,
    updateAlignmentGuides: U,
    // Existing handlers
    handleCanvasMouseDown: on,
    handleNodeMouseDown: an,
    handleMouseMove: Cr,
    handleMouseUp: ae,
    handleTouchStart: Pt,
    handleNodeTouchStart: nt,
    handleTouchMove: He,
    handleTouchEnd: $r,
    handleWheel: Mg,
    resetView: Eg,
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
  const u = _e(null);
  return se(() => {
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
const yc = [
  { name: "Solid", style: "solid", icon: "━", dasharray: null, animated: !1 },
  { name: "Animated", style: "animated", icon: "〰️", dasharray: null, animated: !0 },
  { name: "Dashed", style: "dashed", icon: "┅", dasharray: "10,6", animated: !1 },
  { name: "Dotted", style: "dotted", icon: "···", dasharray: "2,4", animated: !1 }
], W2 = [
  { name: "Triangle", type: "triangle", icon: "▶" },
  { name: "Open", type: "open", icon: "▷" },
  { name: "Diamond", type: "diamond", icon: "◆" },
  { name: "Circle", type: "circle", icon: "●" },
  { name: "None", type: "none", icon: "—" }
];
function N2({ x: i, y: t, edgeId: r, currentStyle: n, currentArrowType: o, currentPathType: a, onSelectStyle: e, onSelectArrowType: c, onSelectPathType: h, onClose: d, theme: u }) {
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
        /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: yc.map((m) => {
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
      t.actors = c[1].split(",").map((u) => {
        const f = u.trim(), m = o[f.toLowerCase()] || o.default;
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
    const h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = [];
    let m = 0;
    const g = i.split(`
`);
    for (let A = 0; A < g.length; A++) {
      let O = g[A].trim();
      if (!O || O.startsWith("#")) continue;
      const _ = O.match(/^(?:group|boundary)\s+["']([^"']+)["']\s*\{?\s*$/i);
      if (_) {
        const X = _[1], Z = f.length > 0 ? f[f.length - 1] : null;
        u.set(X, {
          name: X,
          nodes: [],
          colorIndex: m++,
          parent: Z,
          children: []
        }), Z && u.has(Z) && u.get(Z).children.push(X), f.push(X);
        continue;
      }
      if (O === "}" && f.length > 0) {
        f.pop();
        continue;
      }
      const z = O.match(/^\[(\w+)\]\s*(.+)/);
      if (z) {
        const X = z[1].toLowerCase(), Z = n[X] || { color: v.slate, icon: "📦", shape: "rect" }, Q = z[2].split(",").map((Ce) => Ce.trim()).filter((Ce) => Ce), ke = f.length > 0 ? f[f.length - 1] : null;
        Q.forEach((Ce) => {
          const J = Ce.match(/^([^:]+):\s*(.+)$/), xe = J ? J[1].trim() : Ce, le = J ? J[2].trim() : "", Le = xe.toLowerCase().replace(/[^a-z0-9]/g, "_"), ce = {
            id: Le,
            label: xe,
            description: le,
            ...Z,
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
            u.has(pe) && u.get(pe).nodes.push(Le);
          }));
        }), c++;
        continue;
      }
      const W = [
        { regex: /^(.+?)\s*<->\s*(.+?)(?::\s*(.+))?$/, style: "bidirectional" },
        { regex: /^(.+?)\s*-->\s*(.+?)(?::\s*(.+))?$/, style: "dotted" },
        { regex: /^(.+?)\s*==>\s*(.+?)(?::\s*(.+))?$/, style: "thick" },
        { regex: /^(.+?)\s*->>\s*(.+?)(?::\s*(.+))?$/, style: "async" },
        { regex: /^(.+?)\s*-\.->\s*(.+?)(?::\s*(.+))?$/, style: "dashed" },
        { regex: /^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/, style: "normal" }
      ];
      for (const { regex: X, style: Z } of W) {
        const Q = O.match(X);
        if (Q) {
          const [, ke, Ce, J] = Q, xe = ke.trim().toLowerCase().replace(/[^a-z0-9]/g, "_"), le = Ce.trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
          r.push({
            id: `e-${r.length}`,
            source: xe,
            target: le,
            label: (J == null ? void 0 : J.trim()) || "",
            style: Z
          }), Z === "bidirectional" && r.push({
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
    const y = t.size, s = r.length, p = y > 8 || s > 10, x = /* @__PURE__ */ new Set();
    if (t.forEach((A) => x.add(A.layerIndex)), x.size <= 2 && y > 4) {
      const A = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
      t.forEach((X, Z) => {
        A.set(Z, 0), O.set(Z, []);
      }), r.forEach((X) => {
        t.has(X.source) && t.has(X.target) && (O.get(X.source).push(X.target), A.set(X.target, (A.get(X.target) || 0) + 1));
      });
      const _ = /* @__PURE__ */ new Map(), z = [];
      for (t.forEach((X, Z) => {
        A.get(Z) === 0 && (_.set(Z, 0), z.push(Z));
      }); z.length > 0; ) {
        const X = z.shift(), Z = _.get(X);
        O.get(X).forEach((Q) => {
          const ke = Z + 1;
          (!_.has(Q) || _.get(Q) < ke) && _.set(Q, ke), A.set(Q, A.get(Q) - 1), A.get(Q) === 0 && z.push(Q);
        });
      }
      const W = _.size > 0 ? Math.floor([..._.values()].reduce((X, Z) => X + Z, 0) / _.size) : 0;
      t.forEach((X, Z) => {
        _.has(Z) || _.set(Z, W), X.layerIndex = _.get(Z);
      });
    }
    const C = new Dr.graphlib.Graph();
    C.setGraph({
      rankdir: "TB",
      // Top to bottom
      nodesep: p ? 80 : 60,
      // Tighter horizontal spacing
      ranksep: p ? 80 : 60,
      // Tighter vertical spacing between layers
      marginx: 60,
      marginy: 50,
      ranker: "network-simplex"
      // Best for complex multi-path graphs
    }), C.setDefaultEdgeLabel(() => ({}));
    const w = /* @__PURE__ */ new Map();
    t.forEach((A, O) => w.set(O, 0)), r.forEach((A) => {
      w.has(A.target) && w.set(A.target, w.get(A.target) + 1);
    });
    const $ = [];
    t.forEach((A, O) => {
      w.get(O) === 0 && $.push(O);
    }), t.forEach((A) => {
      C.setNode(A.id, {
        label: A.label,
        width: A.width || o,
        // Use actual node width
        height: a,
        // Use layer index for rank constraint
        rank: A.layerIndex
      });
    });
    const k = /* @__PURE__ */ new Set();
    r.forEach((A) => {
      const O = t.get(A.source), _ = t.get(A.target);
      if (O && _) {
        const z = $.includes(A.target) && !$.includes(A.source), W = O.layerIndex > _.layerIndex;
        (z || W) && k.add(A.id);
      }
    });
    const M = /* @__PURE__ */ new Set();
    r.forEach((A) => {
      const O = `${A.source}-${A.target}`, _ = `${A.target}-${A.source}`;
      if (!M.has(O) && !M.has(_) && t.has(A.source) && t.has(A.target)) {
        const z = k.has(A.id);
        C.setEdge(A.source, A.target, {
          weight: z ? 0.5 : 3,
          minlen: z ? 1 : 2
        }), M.add(O);
      }
    }), Dr.layout(C), C.nodes().forEach((A) => {
      const O = t.get(A), _ = C.node(A);
      O && _ && (O.x = _.x, O.y = _.y);
    });
    const E = /* @__PURE__ */ new Set();
    r.forEach((A) => {
      E.add(A.source), E.add(A.target);
    });
    let R = 0, T = 0;
    t.forEach((A) => {
      E.has(A.id) && (R = Math.max(R, A.y + a / 2), T = Math.max(T, A.x + (A.width || o) / 2));
    });
    const I = /* @__PURE__ */ new Map(), B = [];
    if (t.forEach((A) => {
      E.has(A.id) || (A.group ? (I.has(A.group) || I.set(A.group, []), I.get(A.group).push(A)) : B.push(A));
    }), B.length > 0) {
      const A = /* @__PURE__ */ new Map();
      B.forEach((z) => {
        const W = z.layerIndex || 0;
        A.has(W) || A.set(W, []), A.get(W).push(z);
      });
      const O = /* @__PURE__ */ new Map();
      t.forEach((z) => {
        if (E.has(z.id) && !z.group) {
          const W = z.layerIndex || 0;
          O.has(W) || O.set(W, z.y);
        }
      });
      let _ = T + 100;
      A.forEach((z, W) => {
        const X = O.get(W) || 100 + W * 150;
        z.forEach((Z, Q) => {
          Z.x = _ + Q * ((Z.width || o) + 60), Z.y = X;
        });
      });
    }
    let P = R + 100;
    const L = 50;
    [...u.keys()].forEach((A) => {
      const O = I.get(A);
      if (!O || O.length === 0) return;
      const _ = [], z = [];
      if (u.get(A).nodes.forEach((W) => {
        const X = t.get(W);
        X && (E.has(W) ? _.push(X) : z.push(X));
      }), _.length > 0) {
        let W = 0, X = 0;
        _.forEach((Z) => {
          W = Math.max(W, Z.x + (Z.width || o) / 2), X += Z.y;
        }), X /= _.length, z.forEach((Z, Q) => {
          Z.x = W + 80 + Q * ((Z.width || o) + 60), Z.y = X;
        });
      } else {
        const X = a + 40, Z = 200;
        z.forEach((ke, Ce) => {
          const J = Math.floor(Ce / 3), xe = Ce % 3;
          ke.x = 150 + xe * Z, ke.y = P + J * X;
        });
        const Q = Math.ceil(z.length / 3);
        P += Q * X + L + 40;
      }
    });
    const q = [], Y = /* @__PURE__ */ new Map(), re = 30, ne = 15, te = (A) => {
      let O = 0, _ = A;
      for (; _; ) {
        const z = u.get(_);
        if (z && z.parent)
          O++, _ = z.parent;
        else
          break;
      }
      return O;
    };
    [...u.keys()].sort((A, O) => te(O) - te(A)).forEach((A) => {
      const O = u.get(A);
      if (!O || O.nodes.length === 0) return;
      let _ = 1 / 0, z = 1 / 0, W = -1 / 0, X = -1 / 0;
      if (O.nodes.forEach((Z) => {
        const Q = t.get(Z);
        if (Q) {
          if ((d.get(Z) || []).some((le) => le !== A && O.children.includes(le))) return;
          const J = Q.width || o, xe = a;
          _ = Math.min(_, Q.x - J / 2), z = Math.min(z, Q.y - xe / 2), W = Math.max(W, Q.x + J / 2), X = Math.max(X, Q.y + xe / 2);
        }
      }), O.children.forEach((Z) => {
        const Q = Y.get(Z);
        Q && (_ = Math.min(_, Q.minX - ne), z = Math.min(z, Q.minY - ne), W = Math.max(W, Q.maxX + ne), X = Math.max(X, Q.maxY + ne));
      }), _ !== 1 / 0) {
        Y.set(A, {
          minX: _ - re,
          minY: z - re - 20,
          maxX: W + re,
          maxY: X + re
        });
        const Z = Y.get(A);
        q.push({
          id: `group-${A.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
          name: A,
          x: Z.minX,
          y: Z.minY,
          width: Z.maxX - Z.minX,
          height: Z.maxY - Z.minY,
          color: e[O.colorIndex % e.length],
          depth: te(A),
          parent: O.parent
        });
      }
    }), q.sort((A, O) => A.depth - O.depth);
    const j = /* @__PURE__ */ new Map();
    return q.forEach((A) => {
      const O = A.parent || "__root__";
      j.has(O) || j.set(O, []), j.get(O).push(A);
    }), j.forEach((A) => {
      A.sort((O, _) => O.y - _.y);
      for (let O = 1; O < A.length; O++) {
        const _ = A[O - 1], z = A[O], W = _.y + _.height;
        if (z.y < W + 20) {
          const X = W + 20 - z.y;
          z.y += X;
          const Z = u.get(z.name);
          Z && Z.nodes.forEach((Q) => {
            const ke = t.get(Q);
            ke && (ke.y += X);
          });
        }
      }
    }), { nodes: Array.from(t.values()), edges: r, groups: q };
  },
  flowchart: (i) => {
    const t = /* @__PURE__ */ new Map(), r = [], n = [], o = (p) => {
      p = p.trim();
      let x = "", b = p;
      const C = p.match(/^(.+?):\s+([^:]+)$/);
      C && (b = C[1].trim(), x = C[2].trim());
      const w = b.match(/^\(([^)]+)\)\s*(.*)$/);
      if (w) {
        const $ = w[1].trim(), k = w[2].trim();
        return k && $.toLowerCase() === k.toLowerCase() ? { type: "process", label: k, edgeLabel: x } : ["start", "end", "process", "decision", "io", "data", "database", "document"].includes($.toLowerCase()) ? { type: $.toLowerCase(), label: k || $, edgeLabel: x } : { type: "process", label: k || $, edgeLabel: x };
      }
      return { type: "process", label: b, edgeLabel: x };
    };
    let a = "TB";
    const e = i.match(/^direction:\s*(TB|LR|RL|BT)/im);
    e && (a = e[1].toUpperCase());
    const c = a === "LR" || a === "RL";
    i.split(`
`).forEach((p) => {
      if (p = p.trim(), !p || p.startsWith("#") || p.match(/^direction:/i)) return;
      const x = p.split(/\s*->\s*/);
      x.forEach((b, C) => {
        const { type: w, label: $, edgeLabel: k } = o(b), M = $.toLowerCase().replace(/[^a-z0-9]/g, "_");
        if (t.has(M) || (t.set(M, { id: M, type: w, label: $, x: 0, y: 0 }), n.push(M)), C > 0) {
          const { label: E } = o(x[C - 1]), R = E.toLowerCase().replace(/[^a-z0-9]/g, "_");
          r.push({ id: `e-${r.length}`, source: R, target: M, label: k });
        }
      });
    });
    const h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    r.forEach((p) => {
      h.has(p.source) || h.set(p.source, []), h.get(p.source).push(p.target), d.has(p.target) || d.set(p.target, []), d.get(p.target).push(p.source);
    });
    const u = (p) => {
      const $ = Math.min(180, Math.max(100, ((p == null ? void 0 : p.length) || 5) * 8 + 40)), k = Math.floor(($ - 20) / 8), M = Math.ceil(((p == null ? void 0 : p.length) || 5) / k), E = Math.max(60, 30 + M * 18);
      return { width: $, height: E };
    };
    t.forEach((p, x) => {
      const b = u(p.label);
      p.width = b.width, p.height = b.height;
    });
    const f = n.filter((p) => !d.has(p) || d.get(p).length === 0), m = /* @__PURE__ */ new Set(), g = [v.purple, v.blue, v.emerald, v.orange, v.pink, v.cyan], y = (p, x, b, C = 0, w = 0) => {
      if (m.has(p)) return;
      const $ = t.get(p);
      if (!$) return;
      c ? ($.x = x, $.y = b + C) : ($.x = b + C, $.y = x), $.depth = w, $.color = g[w % g.length], m.add(p);
      const k = h.get(p) || [], M = $.width || 130, E = $.height || 60, R = c ? M + 60 : E + 40, T = c ? 100 : 200;
      if (k.length === 1)
        y(k[0], x + R, b, C, w + 1);
      else if (k.length >= 2) {
        const I = (k.length - 1) * T;
        k.forEach((B, P) => {
          const L = -I / 2 + P * T;
          y(B, x + R, b, L, w + 1);
        });
      }
    };
    if (c) {
      let p = 200;
      f.forEach((x, b) => {
        y(x, 100, p + b * 150, 0, 0);
      });
    } else {
      let p = 400;
      f.forEach((x, b) => {
        y(x, 100, p + b * 250, 0, 0);
      });
    }
    let s = 100;
    return n.forEach((p) => {
      if (!m.has(p)) {
        const x = t.get(p);
        x.x = 700, x.y = s, x.depth = 0, x.color = v.gray, s += c ? 100 : (x.height || 60) + 40, m.add(p);
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
        const h = a[1].toLowerCase(), d = a[2], u = ((c = a[3]) == null ? void 0 : c.trim()) || "";
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
      var b, C;
      if (s = s.trim(), !s || s.startsWith("#") || s.toLowerCase().startsWith("title")) return;
      const p = s.match(/^[\[(](\w+)(?::([a-z0-9-]+))?[\])]\s*(.+?)(?:\s*:\s*(.+))?$/i);
      if (p && !s.includes("->")) {
        const w = p[1].toLowerCase(), $ = p[2] || null, k = p[3].trim(), M = ((b = p[4]) == null ? void 0 : b.trim()) || "", E = k.toLowerCase().replace(/[^a-z0-9]/g, "_"), R = n[w] || n.default;
        r.has(E) || r.set(E, { id: E, label: k, description: M, type: w, linkedTemplate: $, clickable: !!$, ...R, x: 0, y: 0 });
        return;
      }
      const x = s.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+?)$/);
      if (x) {
        const w = x[1].trim(), $ = ((C = x[2]) == null ? void 0 : C.trim()) || "", k = x[3].trim(), M = w.toLowerCase().replace(/[^a-z0-9]/g, "_"), E = k.toLowerCase().replace(/[^a-z0-9]/g, "_");
        r.has(M) || r.set(M, { id: M, label: w, type: "default", ...n.default, x: 0, y: 0 }), r.has(E) || r.set(E, { id: E, label: k, type: "default", ...n.default, x: 0, y: 0 }), t.push({ id: `edge-${t.length}`, source: M, target: E, label: $ });
      }
    });
    const o = Array.from(r.values()), a = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), c = new Set(t.map((s) => s.target)), h = o.filter((s) => !c.has(s.id)), d = (s, p) => {
      e.has(s) || (e.add(s), a.set(s, Math.max(a.get(s) || 0, p)), t.filter((x) => x.source === s).forEach((x) => d(x.target, p + 1)));
    };
    (h.length ? h : o.slice(0, 1)).forEach((s) => d(s.id, 0)), o.forEach((s) => {
      a.has(s.id) || a.set(s.id, 0);
    });
    const u = /* @__PURE__ */ new Map();
    o.forEach((s) => {
      const p = a.get(s.id) || 0;
      u.has(p) || u.set(p, []), u.get(p).push(s);
    });
    const f = Math.max(...Array.from(u.values()).map((s) => s.length), 1), m = Math.max(...Array.from(a.values()), 0) + 1, g = 220, y = 160;
    for (let s = 0; s <= m - 1; s++) {
      const p = u.get(s) || [], x = p.length * y, b = 150 + (f * y - x) / 2;
      p.forEach((C, w) => {
        C.x = 180 + s * g, C.y = b + w * y;
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
          const C = b.trim(), w = C.toLowerCase().replace(/\s/g, "_");
          t.find(($) => $.id === w) || (t.push({ id: w, label: C, x: a }), a += 160);
        });
        return;
      }
      const u = h.match(/^(loop|alt|opt|par|critical|break|rect)\s+(.+)/i);
      if (u) {
        e.push({
          type: u[1].toLowerCase(),
          label: u[2],
          startIndex: c,
          sections: [{ label: u[2], startIndex: c }]
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
        const b = y[1].toLowerCase(), C = y[2].toLowerCase().replace(/\s/g, "_");
        r.push({
          type: b,
          participant: C,
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
        const b = s[1].toLowerCase(), C = s[2], w = C.toLowerCase().replace(/\s/g, "_");
        t.find(($) => $.id === w) || (t.push({ id: w, label: C, x: a }), a += 160), o.push({
          position: b,
          participantId: w,
          text: s[3],
          atMessageIndex: c
        });
        return;
      }
      const p = h.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);
      if (p) {
        const C = p[1].split(",").map((w) => w.trim()).map((w) => {
          const $ = w.toLowerCase().replace(/\s/g, "_");
          return t.find((k) => k.id === $) || (t.push({ id: $, label: w, x: a }), a += 160), $;
        });
        o.push({
          position: "over",
          participantIds: C,
          text: p[2],
          atMessageIndex: c
        });
        return;
      }
      const x = h.match(/^(\w+)\s*(->|-->|-x|--x|-\)|--\))\s*(\w+)(?::\s*(.+))?/);
      if (x) {
        const b = x[1].toLowerCase().replace(/\s/g, "_"), C = x[3].toLowerCase().replace(/\s/g, "_");
        t.find((w) => w.id === b) || (t.push({ id: b, label: x[1], x: a }), a += 160), t.find((w) => w.id === C) || (t.push({ id: C, label: x[3], x: a }), a += 160), r.push({
          from: b,
          to: C,
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
      var u;
      if (!o.trim()) return;
      const e = o.trimStart(), c = o.length - e.length, h = e.match(/^(.+?)(?:\s*\[(.+?)\])?$/);
      for (; n.length > 1 && n[n.length - 1].indent >= c; ) n.pop();
      const d = { id: `org-${a}`, label: h[1].trim(), title: ((u = h[2]) == null ? void 0 : u.trim()) || "", children: [], parent: n[n.length - 1].id };
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
            const u = a.match(/merge\s+(\w+)/i);
            u && (d = u[1]);
          }
          t.push({ id: `commit-${o}`, label: h ? h[1] : `C${o}`, branch: n, x: 120 + o * 100, y: ((e = r.get(n)) == null ? void 0 : e.y) || 100, isMerge: c, mergeFrom: d, index: o }), o++;
        }
      }
    }), { commits: t, branches: Array.from(r.values()) };
  },
  wireframe: (i) => {
    const t = [];
    let r = 20, n = 20, o = [], a = !1, e = 0, c = 0;
    const h = /sidebar|aside|slip|cart|panel|summary/i.test(i) && /<\s*(sidebar|aside|slip|cart|panel|summary)/i.test(i), d = h ? 480 : 620, u = 200, f = h ? d + u + 30 : d + 40, m = () => a ? d + 30 : o.length > 0 ? o[o.length - 1].x + 15 : n, g = () => a ? u : o.length > 0 ? o[o.length - 1].width - 30 : d;
    for (i.split(`
`).forEach((y, s) => {
      var k, M, E, R, T, I, B, P, L, F, q, Y, re, ne, te, oe, j, A, O;
      const p = y.trim();
      if (!p || p.startsWith("//") || p.startsWith("#") && !p.startsWith("# ") && !p.startsWith("## ") && !p.startsWith("### ")) return;
      const x = m(), b = g();
      if (p.match(/^\{(.+)\}$/) && !p.match(/\{(badge|tag):/i)) {
        t.push({ id: `wf-${s}`, type: "window", label: p.slice(1, -1), x, y: r, width: f, height: 36 }), r += 46;
        return;
      }
      if (p.match(/^<(.+)>$/) && !p.includes("/")) {
        const _ = p.slice(1, -1), z = /sidebar|aside|slip|cart|panel|summary/i.test(_);
        z && !a && (a = !0, c = r, e = 145, r = e);
        const W = _ === "card" || /^(sidebar|aside|panel|slip|summary|cart)$/i.test(_), X = { id: `wf-${s}`, type: "card", label: W ? "" : _, x, y: r, width: b, startY: r, children: [], isSidebar: z };
        t.push(X), o.push(X), r += W ? 15 : 45;
        return;
      }
      if (p.match(/^<\/(.*)>$/) || p === "</>") {
        if (o.length > 0) {
          const _ = o.pop();
          _.height = r - _.startY + 20, _.isSidebar && (a = !1, r = Math.max(r, c));
        }
        r += 25;
        return;
      }
      if (p.match(/^\{\{(.+)\}\}$/)) {
        t.push({ id: `wf-${s}`, type: "modal", label: p.slice(2, -2), x: x + 20, y: r, width: b - 40, height: 200 }), r += 220;
        return;
      }
      if (p.match(/^\[\[(.+)\]\]$/)) {
        const _ = p.slice(2, -2).split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "navbar", items: _, x, y: r, width: f, height: 44 }), r += 54;
        return;
      }
      if (p.match(/^\(\((.+)\)\)$/)) {
        const _ = p.slice(2, -2).split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "tabs", items: _, activeIndex: 0, x, y: r, width: b, height: 40 }), r += 50;
        return;
      }
      if (p.startsWith(">>")) {
        const _ = p.slice(2).split(">").map((z) => z.trim()).filter((z) => z);
        t.push({ id: `wf-${s}`, type: "breadcrumbs", items: _, x, y: r, width: b }), r += 35;
        return;
      }
      const C = p.match(/\[[^\]]+\]/g);
      if (C && C.length > 1) {
        const _ = C.map((z) => {
          const W = z.slice(1, -1).trim();
          return W.startsWith("🔍") || W.toLowerCase().startsWith("search") ? { type: "search", label: W.replace(/^🔍\s*/, "").replace(/^search:?\s*/i, "").replace(/_/g, " ").trim() || "Search..." } : W.startsWith("v ") || W.toLowerCase().startsWith("select:") ? { type: "dropdown", label: W.replace(/^v\s+/, "").replace(/^select:\s*/i, "") } : W.startsWith("+") || W.startsWith("+ ") ? { type: "button", label: W, variant: "primary" } : { type: "button", label: W, variant: "secondary" };
        });
        t.push({ id: `wf-${s}`, type: "toolbar", items: _, x, y: r, width: b, height: 44 }), r += 54;
        return;
      }
      if (p.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/) || p.match(/^\[search:?\s*(.*)\]$/i)) {
        let _ = ((k = p.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/)) == null ? void 0 : k[1]) || ((M = p.match(/^\[search:?\s*(.*)\]$/i)) == null ? void 0 : M[1]) || "Search...";
        _ = _.replace(/^_+|_+$/g, "").replace(/_+/g, " ").trim() || "Search...", t.push({ id: `wf-${s}`, type: "search", label: _, x, y: r, width: b, height: 40 }), r += 50;
        return;
      }
      if (p.match(/^\[v\s+(.+)\]$/) || p.match(/^\[select:\s*(.+)\]$/i)) {
        const _ = ((E = p.match(/^\[v\s+(.+)\]$/)) == null ? void 0 : E[1]) || ((R = p.match(/^\[select:\s*(.+)\]$/i)) == null ? void 0 : R[1]);
        t.push({ id: `wf-${s}`, type: "dropdown", label: _, x, y: r, width: Math.min(200, b), height: 36 }), r += 46;
        return;
      }
      if (p.match(/^\[([oO])\]\s*(.+)$/)) {
        const _ = p.match(/^\[([oO])\]\s*(.+)$/);
        t.push({ id: `wf-${s}`, type: "toggle", enabled: _[1] === "O", label: _[2], x, y: r }), r += 40;
        return;
      }
      if (p.match(/^\(([oO\*\s])\)\s*(.+)$/)) {
        const _ = p.match(/^\(([oO\*\s])\)\s*(.+)$/);
        t.push({ id: `wf-${s}`, type: "radio", selected: _[1] === "O" || _[1] === "*", label: _[2], x, y: r }), r += 35;
        return;
      }
      if (p.match(/^\[=+o-+\]$/) || p.match(/^\[slider:\s*(\d+)%?\]$/i)) {
        let _ = 50;
        const z = p.match(/^\[slider:\s*(\d+)%?\]$/i);
        if (z) _ = parseInt(z[1]);
        else {
          const W = p.match(/^\[(=*)o(-*)\]$/);
          W && (_ = Math.round(W[1].length / (W[1].length + W[2].length) * 100));
        }
        t.push({ id: `wf-${s}`, type: "slider", value: _, x, y: r, width: Math.min(200, b) }), r += 45;
        return;
      }
      if (p.match(/^\[\|+\.+\]/) || p.match(/^\[=+-+\]/) || p.match(/^\[progress:\s*(\d+)%?\]/i)) {
        let _ = 50, z = "";
        const W = p.match(/^\[progress:\s*(\d+)%?\](.*)$/i);
        if (W)
          _ = parseInt(W[1]), z = ((T = W[2]) == null ? void 0 : T.trim()) || "";
        else {
          const X = p.match(/^\[(\|+)(\.+)\]\s*(.*)$/);
          X && (_ = Math.round(X[1].length / (X[1].length + X[2].length) * 100), z = X[3] || "");
          const Z = p.match(/^\[(=+)(-+)\]\s*(.*)$/);
          Z && (_ = Math.round(Z[1].length / (Z[1].length + Z[2].length) * 100), z = Z[3] || "");
        }
        t.push({ id: `wf-${s}`, type: "progress", value: _, label: z, x, y: r, width: b - 20 }), r += 35;
        return;
      }
      if (p.match(/^\(@+\)$/) || p.match(/^\(@(.+)\)$/)) {
        if (p.match(/^\(@+\)$/)) {
          const z = p.length - 2;
          t.push({ id: `wf-${s}`, type: "avatar-group", count: z, x, y: r });
        } else {
          const z = ((I = p.match(/^\(@(.+)\)$/)) == null ? void 0 : I[1]) || "";
          t.push({ id: `wf-${s}`, type: "avatar", label: z, x, y: r });
        }
        r += 55;
        return;
      }
      if (p.match(/^\[img[^\]]*\](\s+\[img[^\]]*\])+$/i)) {
        const _ = p.match(/\[img[^\]]*\]/gi) || [], z = _.length, W = Math.floor((b - (z - 1) * 8) / z);
        _.forEach((X, Z) => {
          const Q = X.match(/(\d+):(\d+)/), ke = Q ? parseInt(Q[1]) / parseInt(Q[2]) : 1, Ce = Math.min(Math.round(W / ke), 100);
          t.push({ id: `wf-${s}-${Z}`, type: "image", label: "", x: x + Z * (W + 8), y: r, width: W, height: Ce });
        }), r += 115;
        return;
      }
      const w = p.match(/\{(badge|tag):([^}]+)\}/gi);
      if (w && w.length > 0) {
        const _ = w.map((z) => {
          const X = z.match(/\{(badge|tag):([^}]+)\}/i)[2].trim(), Z = X.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i), Q = Z ? Z[1].toLowerCase() : null, ke = Z ? Z[2] : X;
          return { variant: Q, label: ke };
        });
        t.push({ id: `wf-${s}`, type: "badge-group", badges: _, x, y: r }), r += 35;
        return;
      }
      if (p.match(/^\[img[:\s]?.*\]$/i)) {
        const _ = ((B = p.match(/^\[img:\s*(.+)\]$/i)) == null ? void 0 : B[1]) || "", z = p.match(/(\d+):(\d+)/), W = z ? parseInt(z[1]) / parseInt(z[2]) : 16 / 9, X = Math.round(b / W);
        t.push({ id: `wf-${s}`, type: "image", label: _, x, y: r, width: b, height: Math.min(X, 200) }), r += Math.min(X, 200) + 15;
        return;
      }
      if (p.match(/^\[video[:\s]?.*\]$/i)) {
        const _ = ((P = p.match(/^\[video:\s*(.+)\]$/i)) == null ? void 0 : P[1]) || "";
        t.push({ id: `wf-${s}`, type: "video", label: _, x, y: r, width: b, height: 180 }), r += 195;
        return;
      }
      if (p.match(/^\[map[:\s]?.*\]$/i)) {
        const _ = ((L = p.match(/^\[map:\s*(.+)\]$/i)) == null ? void 0 : L[1]) || "";
        t.push({ id: `wf-${s}`, type: "map", label: _, x, y: r, width: b, height: 160 }), r += 175;
        return;
      }
      if (p.match(/^\[chart[:\s]?.*\]$/i)) {
        const _ = ((F = p.match(/^\[chart:\s*(.+)\]$/i)) == null ? void 0 : F[1]) || "bar";
        t.push({ id: `wf-${s}`, type: "chart", chartType: _, x, y: r, width: b, height: 150 }), r += 165;
        return;
      }
      if (p.match(/^\[calendar\]$/i)) {
        t.push({ id: `wf-${s}`, type: "calendar", x, y: r, width: Math.min(280, b), height: 220 }), r += 235;
        return;
      }
      if (p.match(/^\|.+\|$/)) {
        const _ = p.slice(1, -1).split("|").map((W) => W.trim()), z = !t.some((W) => W.type === "table-row" && W.y === r - 36);
        t.push({ id: `wf-${s}`, type: "table-row", cells: _, isHeader: z, x, y: r, width: b, height: 36 }), r += 36;
        return;
      }
      if (p.match(/^[-\*•]\s+(.+)$/)) {
        const _ = p.match(/^[-\*•]\s+(.+)$/)[1];
        t.push({ id: `wf-${s}`, type: "list-item", label: _, x, y: r }), r += 32;
        return;
      }
      if (p.match(/^(\d+)[.)]\s+(.+)$/)) {
        const _ = p.match(/^(\d+)[.)]\s+(.+)$/);
        t.push({ id: `wf-${s}`, type: "list-item-numbered", number: _[1], label: _[2], x, y: r }), r += 32;
        return;
      }
      if (p.match(/^\{(\w+):?(.*)?\}$/) && !p.match(/^\{.{15,}\}$/)) {
        const _ = p.match(/^\{(\w+):?(.*)?\}$/), z = _[1].toLowerCase(), W = _[2] || _[1];
        if (["badge", "tag", "success", "warning", "error", "info", "new", "beta", "pro"].includes(z) || _[2]) {
          t.push({ id: `wf-${s}`, type: "badge", variant: z, label: W, x, y: r }), r += 35;
          return;
        }
      }
      if (p.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/)) {
        const _ = p.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/), z = { "!": "error", i: "info", I: "info", "✓": "success", "✗": "error", "⚠": "warning" }[_[1]] || "info";
        t.push({ id: `wf-${s}`, type: "alert", variant: z, label: _[2], x, y: r, width: b }), r += 55;
        return;
      }
      if (p.match(/^\(\d+\)(---\(\d+\))+$/) || p.match(/^\[step:\s*(\d+)\/(\d+)\]$/i)) {
        let _ = 1, z = 3;
        const W = p.match(/^\[step:\s*(\d+)\/(\d+)\]$/i);
        W ? (_ = parseInt(W[1]), z = parseInt(W[2])) : (z = p.match(/\((\d+)\)/g).length, _ = 1), t.push({ id: `wf-${s}`, type: "stepper", current: _, total: z, x, y: r, width: b }), r += 50;
        return;
      }
      if (p.match(/^\[<.*>\]$/) || p.match(/^\[page:\s*(\d+)\/(\d+)\]$/i)) {
        let _ = 1, z = 5;
        const W = p.match(/^\[page:\s*(\d+)\/(\d+)\]$/i);
        W && (_ = parseInt(W[1]), z = parseInt(W[2])), t.push({ id: `wf-${s}`, type: "pagination", current: _, total: z, x, y: r, width: b }), r += 45;
        return;
      }
      if (p === "[~~~]" || p.toLowerCase() === "[skeleton]") {
        t.push({ id: `wf-${s}`, type: "skeleton", x, y: r, width: b, height: 20 }), r += 30;
        return;
      }
      if (p.match(/^\["""\s*(.*)\]$/) || p.toLowerCase() === "[textarea]") {
        const _ = ((q = p.match(/^\["""\s*(.*)\]$/)) == null ? void 0 : q[1]) || "";
        t.push({ id: `wf-${s}`, type: "textarea", label: _, x, y: r, width: b, height: 80 }), r += 95;
        return;
      }
      if (p.match(/^\[~(.+)~\]$/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "secondary", label: p.match(/^\[~(.+)~\]$/)[1], x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[--(.+)--\]$/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "ghost", label: p.match(/^\[--(.+)--\]$/)[1], x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[!!(.+)!!\]$/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "danger", label: p.match(/^\[!!(.+)!!\]$/)[1], x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[icon:(\w+)\]$/i)) {
        const _ = p.match(/^\[icon:(\w+)\]$/i)[1];
        t.push({ id: `wf-${s}`, type: "icon-button", icon: _, x, y: r }), r += 45;
        return;
      }
      if (p.match(/^---\s*(.+)\s*---$/) || p.match(/^===\s*(.+)\s*===$/)) {
        const _ = p.match(/^[-=]{3}\s*(.+)\s*[-=]{3}$/)[1];
        t.push({ id: `wf-${s}`, type: "divider-label", label: _, x, y: r, width: b }), r += 30;
        return;
      }
      if (p.match(/^\[[\*★☆]+\]$/)) {
        const _ = p.slice(1, -1), z = (_.match(/[\*★]/g) || []).length, W = _.length;
        t.push({ id: `wf-${s}`, type: "rating", filled: z, total: W, x, y: r }), r += 35;
        return;
      }
      if (p.match(/^(<\w+>\s*)+$/)) {
        const _ = p.match(/<(\w+)>/g).map((z) => z.slice(1, -1));
        t.push({ id: `wf-${s}`, type: "chip-group", tags: _, x, y: r }), r += 40;
        return;
      }
      if (p === "[?]" || p === "(?)") {
        t.push({ id: `wf-${s}`, type: "tooltip", x, y: r }), r += 30;
        return;
      }
      if (p.match(/^\[.+\](\s+\[.+\])+$/) && !p.includes("|")) {
        const _ = p.match(/\[([^\]]+)\]/g).map((z) => z.slice(1, -1));
        t.push({ id: `wf-${s}`, type: "button-row", buttons: _, x, y: r, width: b }), r += 50;
        return;
      }
      if (p.match(/^@\w+\s+.+/) || p.match(/^@\w+:\s*.+/)) {
        const _ = p.match(/^@(\w+):?\s*(.+)$/);
        if (_) {
          t.push({ id: `wf-${s}`, type: "feed-item", username: _[1], text: _[2], x, y: r, width: b }), r += 38;
          return;
        }
      }
      if (p.match(/^[🏆💰🎉🔥⭐]\s*@\w+/)) {
        const _ = p.match(/^([🏆💰🎉🔥⭐])\s*@(\w+)\s*(.+)$/);
        if (_) {
          t.push({ id: `wf-${s}`, type: "win-notification", emoji: _[1], username: _[2], text: _[3], x, y: r, width: b }), r += 44;
          return;
        }
      }
      if (p.match(/^[❤️💬🔄💾🎯👍👎].+[❤️💬🔄💾🎯👍👎]/)) {
        t.push({ id: `wf-${s}`, type: "social-stats", text: p, x, y: r, width: b }), r += 40;
        return;
      }
      if (p.match(/^_{3,}$/)) {
        r += 20;
        return;
      }
      if (p.match(/^\[hero:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[hero:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "hero", title: _[0], subtitle: _[1] || "", cta: _[2] || "Get Started", x, y: r, width: b, height: 280 }), r += 300;
        return;
      }
      if (p.match(/^\[pricing:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[pricing:\s*(.+)\]$/i)[1].split("|").map((W) => W.trim()), z = _[2] ? _[2].split(",").map((W) => W.trim()) : [];
        t.push({ id: `wf-${s}`, type: "pricing-card", plan: _[0], price: _[1] || "$0", features: z, cta: _[3] || "Choose Plan", x, y: r, width: Math.min(280, b), height: 320 }), r += 340;
        return;
      }
      if (p.match(/^\[feature:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[feature:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "feature-card", icon: _[0] || "✨", title: _[1] || "Feature", description: _[2] || "", x, y: r, width: Math.min(300, b), height: 160 }), r += 180;
        return;
      }
      if (p.match(/^\[stat:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[stat:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "stat-widget", value: _[0], label: _[1] || "", trend: _[2] || "", x, y: r, width: Math.min(200, b), height: 140 }), r += 160;
        return;
      }
      if (p.match(/^\[login-form[:\s]*(.*)?\]$/i)) {
        const _ = ((Y = p.match(/^\[login-form:\s*(.+)\]$/i)) == null ? void 0 : Y[1]) || "Sign In";
        t.push({ id: `wf-${s}`, type: "login-form", title: _, x, y: r, width: Math.min(360, b), height: 420 }), r += 440;
        return;
      }
      if (p.match(/^\[signup-form[:\s]*(.*)?\]$/i)) {
        const _ = ((re = p.match(/^\[signup-form:\s*(.+)\]$/i)) == null ? void 0 : re[1]) || "Create Account";
        t.push({ id: `wf-${s}`, type: "signup-form", title: _, x, y: r, width: Math.min(360, b), height: 480 }), r += 500;
        return;
      }
      if (p.match(/^\[widget:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[widget:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "dashboard-widget", title: _[0], value: _[1] || "", icon: _[2] || "📊", x, y: r, width: Math.min(200, b), height: 120 }), r += 140;
        return;
      }
      if (p.match(/^\[bottom-nav:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[bottom-nav:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "bottom-nav", items: _, x, y: r, width: b, height: 64 }), r += 80;
        return;
      }
      if (p.match(/^\[app-bar:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[app-bar:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "app-bar", title: _[0], actions: _.slice(1), x, y: r, width: b, height: 56 }), r += 70;
        return;
      }
      if (p.match(/^\[fab:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[fab:\s*(.+)\]$/i)[1];
        t.push({ id: `wf-${s}`, type: "fab", icon: _, x: x + b - 70, y: r, width: 56, height: 56 }), r += 70;
        return;
      }
      if (p.match(/^\[toast:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[toast:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "toast", message: _[0], variant: _[1] || "info", x, y: r, width: Math.min(400, b), height: 56 }), r += 70;
        return;
      }
      if (p.match(/^\[empty:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[empty:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "empty-state", title: _[0], description: _[1] || "", cta: _[2] || "", x, y: r, width: b, height: 240 }), r += 260;
        return;
      }
      if (p.match(/^\[error:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[error:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "error-state", title: _[0], description: _[1] || "", cta: _[2] || "Retry", x, y: r, width: b, height: 240 }), r += 260;
        return;
      }
      if (p.match(/^\[loading[:\s]*(.*)?\]$/i)) {
        const _ = ((ne = p.match(/^\[loading:\s*(.+)\]$/i)) == null ? void 0 : ne[1]) || "Loading...";
        t.push({ id: `wf-${s}`, type: "loading-state", text: _, x, y: r, width: b, height: 120 }), r += 140;
        return;
      }
      if (p.match(/^\[testimonial:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[testimonial:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "testimonial", quote: (te = _[0]) == null ? void 0 : te.replace(/^["']|["']$/g, ""), name: _[1] || "John Doe", title: _[2] || "", x, y: r, width: Math.min(400, b), height: 200 }), r += 220;
        return;
      }
      if (p.match(/^\[footer:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[footer:\s*(.+)\]$/i)[1], z = _.includes("::") ? _.split("::").map((W) => W.split("|").map((X) => X.trim())) : [_.split("|").map((W) => W.trim())];
        t.push({ id: `wf-${s}`, type: "footer", sections: z, copyright: "", x, y: r, width: b, height: 140 }), r += 160;
        return;
      }
      if (p.match(/^\[social:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[social:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "social-links", links: _, x, y: r, width: b, height: 48 }), r += 60;
        return;
      }
      if (p.match(/^\[cta:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[cta:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "cta-section", title: _[0], description: _[1] || "", cta: _[2] || "Get Started", x, y: r, width: b, height: 180 }), r += 200;
        return;
      }
      if (p.match(/^\[profile:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[profile:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "profile-card", name: _[0], username: _[1] || "", bio: _[2] || "", x, y: r, width: Math.min(300, b), height: 280 }), r += 300;
        return;
      }
      if (p.match(/^\[activity:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[activity:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "activity-item", text: _[0], time: _[1] || "Just now", x, y: r, width: b, height: 60 }), r += 70;
        return;
      }
      if (p.match(/^\[comment:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[comment:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "comment", username: _[0], text: _[1] || "", time: _[2] || "", x, y: r, width: b, height: 100 }), r += 115;
        return;
      }
      if (p.match(/^\[code[:\s]*(.*)?\]$/i)) {
        const _ = ((oe = p.match(/^\[code:\s*(.+)\]$/i)) == null ? void 0 : oe[1]) || "javascript";
        t.push({ id: `wf-${s}`, type: "code-block", language: _, x, y: r, width: b, height: 160 }), r += 180;
        return;
      }
      if (p.match(/^\[upload[:\s]*(.*)?\]$/i)) {
        const _ = ((j = p.match(/^\[upload:\s*(.+)\]$/i)) == null ? void 0 : j[1]) || "Drag and drop files here";
        t.push({ id: `wf-${s}`, type: "upload", label: _, x, y: r, width: b, height: 160 }), r += 180;
        return;
      }
      if (p.match(/^\[accordion:\s*(.+)\]$/i)) {
        const _ = p.match(/^\[accordion:\s*(.+)\]$/i)[1].split("|").map((z) => z.trim());
        t.push({ id: `wf-${s}`, type: "accordion", items: _, x, y: r, width: b, height: 60 + _.length * 50 }), r += 80 + _.length * 50;
        return;
      }
      if (p.match(/^\[data-table:\s*(\d+)?\s*rows?\]$/i)) {
        const _ = parseInt(((A = p.match(/^\[data-table:\s*(\d+)/i)) == null ? void 0 : A[1]) || "3");
        t.push({ id: `wf-${s}`, type: "data-table", rows: _, x, y: r, width: b, height: 52 + _ * 52 }), r += 72 + _ * 52;
        return;
      }
      if (p.match(/^\[(user|bot|assistant|chatgpt|ai|me|you|system):\s*(.+)\]$/i)) {
        const _ = p.match(/^\[(\w+):\s*(.+)\]$/i), z = _[1], W = _[2], X = /user|me|you/i.test(z);
        t.push({ id: `wf-${s}`, type: "chat-message", sender: z, message: W, isUser: X, x, y: r, width: b }), r += 60;
        return;
      }
      if (p.match(/^\[([^\]:]+)\]$/) && !p.match(/^\[_{2,}\]$/) && !p.match(/^\[(x| )\]/i) && !p.match(/^\[v\s/)) {
        t.push({ id: `wf-${s}`, type: "button", variant: "primary", label: p.slice(1, -1), x, y: r, width: 120, height: 36 }), r += 48;
        return;
      }
      if (p.match(/^\[_{2,}\]$/) || p.match(/^"(.+)"$/)) {
        t.push({ id: `wf-${s}`, type: "input", label: ((O = p.match(/^"(.+)"$/)) == null ? void 0 : O[1]) || "", x, y: r, width: b, height: 36 }), r += 48;
        return;
      }
      const $ = p.match(/^\[(x| )\]\s*(.+)$/i);
      if ($) {
        t.push({ id: `wf-${s}`, type: "checkbox", checked: $[1].toLowerCase() === "x", label: $[2], x, y: r }), r += 35;
        return;
      }
      if (p === "---" || p === "===") {
        t.push({ id: `wf-${s}`, type: "separator", x, y: r, width: b, height: 2 }), r += 15;
        return;
      }
      if (p) {
        const _ = p.startsWith("# "), z = p.startsWith("## "), W = p.startsWith("### "), X = p.startsWith("**") && p.endsWith("**");
        let Z = p, Q = "body";
        _ ? (Z = p.slice(2), Q = "h1") : z ? (Z = p.slice(3), Q = "h2") : W ? (Z = p.slice(4), Q = "h3") : X && (Z = p.slice(2, -2), Q = "bold"), t.push({ id: `wf-${s}`, type: "text", label: Z, textType: Q, x, y: r }), r += Q === "h1" ? 45 : Q === "h2" ? 38 : Q === "h3" ? 32 : Q === "bold" ? 30 : 26;
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
        const u = e[2] === "--|>" ? "extends" : e[2] === "--*" ? "composition" : "association";
        r.push({ from: e[1], to: e[3], type: u, label: ((d = e[4]) == null ? void 0 : d.trim()) || "" });
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
        const y = m[1].replace(/^[<:\[]|[>;>\]]$/g, "").trim(), s = m[2].replace(/^[<:\[]|[>;>\]]$/g, "").trim(), p = ((g = m[3]) == null ? void 0 : g.trim()) || "", x = y.toLowerCase().replace(/[^a-z0-9]/g, "_"), b = s.toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.has(x) && t.has(b) && r.push({ id: `ae-${r.length}`, source: x, target: b, label: p });
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
        const C = b === 0 ? -100 : b === 1 ? 100 : (b - 0.5) * 200;
        h(x, m + C, g + 120);
      });
    }, d = n.find((f) => {
      var m;
      return ((m = t.get(f)) == null ? void 0 : m.type) === "start";
    }) || n[0];
    d && h(d, 400, 80);
    let u = 80;
    return n.forEach((f) => {
      if (!c.has(f)) {
        const m = t.get(f);
        m.x = 650, m.y = u, u += 120, c.add(f);
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
      const u = e.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);
      u && r.push({ from: u[1].trim(), to: u[2].trim(), label: ((m = u[3]) == null ? void 0 : m.trim()) || "" });
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
      const p = y.match(/^(.+?)\s*->\s*(.+?)(?::\s*(\d+(?:\.\d+)?))?$/);
      if (p) {
        const x = p[1].trim(), b = p[2].trim(), C = parseFloat(p[3]) || 10, w = x.toLowerCase().replace(/[^a-z0-9]/g, "_"), $ = b.toLowerCase().replace(/[^a-z0-9]/g, "_");
        t.has(w) || t.set(w, { id: w, label: x }), t.has($) || t.set($, { id: $, label: b }), r.push({ id: `link-${s}`, source: w, target: $, value: C });
      }
    });
    const n = Array.from(t.values()), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
    r.forEach((y) => {
      o.has(y.source) || o.set(y.source, []), o.get(y.source).push(y.target), a.has(y.target) || a.set(y.target, []), a.get(y.target).push(y.source);
    });
    const e = /* @__PURE__ */ new Map(), c = (y, s) => {
      const p = e.get(y);
      p !== void 0 && p >= s || (e.set(y, s), (o.get(y) || []).forEach((x) => c(x, s + 1)));
    };
    n.filter((y) => !a.has(y.id) || a.get(y.id).length === 0).forEach((y) => c(y.id, 0)), n.forEach((y) => {
      e.has(y.id) || e.set(y.id, 0);
    });
    const h = Math.max(...e.values(), 0), d = /* @__PURE__ */ new Map();
    n.forEach((y) => {
      const s = e.get(y.id) || 0;
      d.has(s) || d.set(s, []), d.get(s).push(y);
    }), n.forEach((y) => {
      const s = r.filter((x) => x.source === y.id).reduce((x, b) => x + b.value, 0), p = r.filter((x) => x.target === y.id).reduce((x, b) => x + b.value, 0);
      y.value = Math.max(s, p, 10);
    });
    const u = 800, f = 500, m = 60, g = (u - m * 2) / (h + 1 || 1);
    for (let y = 0; y <= h; y++) {
      const s = d.get(y) || [], p = s.reduce((b, C) => b + Math.max(30, C.value * 2), 0) + (s.length - 1) * 20;
      let x = (f - p) / 2;
      s.forEach((b) => {
        b.x = m + y * g, b.y = x, b.height = Math.max(30, b.value * 2), b.layer = y, x += b.height + 20;
      });
    }
    return r.forEach((y) => {
      const s = t.get(y.source), p = t.get(y.target);
      s && p && (y.sourceY = s.y + s.height / 2, y.targetY = p.y + p.height / 2, y.thickness = Math.max(4, y.value * 1.5));
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
        let y, s, p;
        g[1] && g[2] && f.startsWith("(") ? (y = g[1].toLowerCase(), s = g[2].trim(), p = g[3]) : (y = "process", s = g[1].trim(), p = g[2]);
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
        }, b = `n${a++}`, C = {
          id: b,
          label: s,
          type: x[y] || "rect",
          lane: (o == null ? void 0 : o.id) || null
        };
        r.push(C), o && o.nodes.push(b), p && p.split(",").map(($) => $.trim()).forEach(($) => {
          const k = $.match(/^(.+?):\s*(.+)$/), M = k ? k[1].trim() : $, E = k ? k[2].trim() : "";
          n.push({
            id: `e${n.length}`,
            source: b,
            targetLabel: M,
            label: E
          });
        });
      } else if (o && f) {
        const y = f.match(/^\((\w+)\)\s*(.+)$/) || [null, "process", f], s = y[1] || "process", p = y[2] || f, x = {
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
          label: p,
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
    const u = r.filter((f) => !f.lane);
    if (u.length > 0) {
      const f = { id: "default", name: "General", nodes: [], y: t.length * c, height: c };
      t.push(f), u.forEach((m, g) => {
        m.lane = "default", m.x = 180 + g * (h + 60), m.y = f.y + (c - d) / 2, m.width = h, m.height = d;
      });
    }
    return { lanes: t, nodes: r, edges: e };
  }
};
function F2({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 100, y: 0 }), [c, h] = H(/* @__PURE__ */ new Set()), d = ge(() => {
    const s = [], p = [], x = /* @__PURE__ */ new Map(), b = 50, C = (E) => Math.max(120, ((E == null ? void 0 : E.length) || 5) * 9 + 50), w = (E, R) => {
      var I;
      const T = C(E.label);
      x.set(R, Math.max(x.get(R) || 0, T)), (I = E.children) != null && I.length && !c.has(E.id) && E.children.forEach((B) => w(B, R + 1));
    }, $ = (E) => {
      let R = 0;
      for (let T = 0; T < E; T++)
        R += (x.get(T) || 120) + b;
      return R;
    }, k = (E) => {
      var R;
      return !((R = E.children) != null && R.length) || c.has(E.id) ? 38 : E.children.reduce((T, I) => T + k(I) + 16, -16);
    }, M = (E, R, T, I, B) => {
      var re, ne, te;
      const P = k(E), L = T + P / 2, F = C(E.label), q = R === 0 ? v.purple : B, Y = $(R);
      if (s.push({ id: E.id, label: E.label || "", defaultX: Y, defaultY: L, width: F, level: R, color: q, hasChildren: ((re = E.children) == null ? void 0 : re.length) > 0, isCollapsed: c.has(E.id), childCount: ((ne = E.children) == null ? void 0 : ne.length) || 0 }), I && p.push({ id: `e-${I}-${E.id}`, source: I, target: E.id, color: q }), (te = E.children) != null && te.length && !c.has(E.id)) {
        let oe = T;
        E.children.forEach((j, A) => {
          M(j, R + 1, oe, E.id, R === 0 ? de[A % de.length] : B), oe += k(j) + 16;
        });
      }
    };
    if (i != null && i.label && (w(i, 0), M(i, 0, 0, null, de[0]), s.length)) {
      const E = Math.min(...s.map((T) => T.defaultY)), R = Math.max(...s.map((T) => T.defaultY));
      s.forEach((T) => {
        T.defaultY += -(E + R) / 2 + 300;
      });
    }
    return { nodes: s, edges: p };
  }, [i, c]), u = (s) => e.getNodePosition(s.id, s.defaultX, s.defaultY), f = (s, p) => {
    const x = u(s), b = u(p), C = x.x + s.width + 5, w = x.y, $ = b.x - 5, k = b.y, M = $ - C, E = Math.min(Math.abs(M) * 0.4, 80);
    return `M ${C} ${w} C ${C + E} ${w}, ${$ - E} ${k}, ${$} ${k}`;
  }, m = V(() => {
    const s = e.finishEditing();
    if (s.nodeId && s.newValue && n) {
      const p = d.nodes.find((x) => x.id === s.nodeId);
      p && p.label !== s.newValue && n(s.nodeId, p.label, s.newValue);
    }
  }, [e, d.nodes, n]);
  se(() => {
    const s = (p) => {
      const b = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? p.metaKey : p.ctrlKey;
      if (!e.editingNode) {
        if ((p.key === "Delete" || p.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          p.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (b && p.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          p.preventDefault(), e.copySelectedNodes(d.nodes);
          return;
        }
        if (b && p.key.toLowerCase() === "v" && e.clipboard && a) {
          p.preventDefault();
          const C = e.pasteNodes();
          C && a(C);
          return;
        }
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e, d.nodes, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const s = e.getNodesInSelectionBox(d.nodes.map((p) => ({ ...p, x: p.defaultX, y: p.defaultY })), e.selectionBox);
      s.length > 0 && e.setSelectedNodes(new Set(s));
    }
  }, [e.isSelecting, e.selectionBox, d.nodes, e]);
  const g = V((s) => {
    (s.target === e.canvasRef.current || s.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), y = V((s) => {
    h((p) => {
      const x = new Set(p);
      return x.has(s) ? x.delete(s) : x.add(s), x;
    });
  }, []);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${30 * e.zoom}px ${30 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        d.edges.map((s) => {
          const p = d.nodes.find((w) => w.id === s.source), x = d.nodes.find((w) => w.id === s.target);
          if (!p || !x) return null;
          const b = f(p, x), C = r ? ye.stroke : s.color;
          return /* @__PURE__ */ S("g", { children: [
            !r && /* @__PURE__ */ l("path", { d: b, fill: "none", stroke: C, strokeWidth: 6, strokeOpacity: 0.1, strokeLinecap: "round" }),
            !r && /* @__PURE__ */ l("path", { d: b, fill: "none", stroke: C, strokeWidth: 3, strokeOpacity: 0.25, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: b, fill: "none", stroke: C, strokeWidth: r ? 2.5 : 2, strokeOpacity: r ? 1 : 0.8, strokeLinecap: "round" })
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
        const p = u(s), x = e.nodeColors[s.id] || s.color, b = e.dragging === s.id, C = e.selectedNodes.has(s.id), w = e.editingNode === s.id;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: ($) => e.handleNodeMouseDown($, s.id, p.x, p.y),
            onDoubleClick: ($) => e.handleNodeDoubleClick($, s.id, s.label),
            onContextMenu: ($) => e.handleNodeContextMenu($, s.id),
            style: {
              position: "absolute",
              left: p.x,
              top: p.y - 19,
              width: s.width,
              height: 38,
              background: r ? ye.fill : s.level === 0 ? `linear-gradient(135deg, ${x}, ${x}dd)` : At(x),
              border: r ? `2px solid ${ye.stroke}` : `2px solid ${x}`,
              borderRadius: s.level === 0 ? 19 : 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: b ? "grabbing" : "grab",
              boxShadow: Qe(x, b, C, r),
              transition: b ? "none" : "box-shadow 0.2s, background 0.2s",
              fontFamily: nn(r)
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
                  onClick: ($) => {
                    $.stopPropagation(), y(s.id);
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
  const e = Pe({ x: 0, y: 30 }), { nodes: c = [], edges: h = [], groups: d = [] } = i, u = (k) => e.getNodePosition(k.id, k.x, k.y), [f, m] = H({}), g = 150, y = 90, s = (k) => k.shape === "cylinder" || ["database", "cache", "storage", "db", "redis", "s3", "blob"].includes(k.type) ? "cylinder" : k.shape === "hexagon" || ["gateway", "loadbalancer", "lb", "api", "proxy", "cdn", "firewall"].includes(k.type) ? "hexagon" : "rect", p = ge(() => {
    if (!c || c.length === 0) return { x: 0, y: 0, width: 800, height: 600 };
    const k = c.map((P) => {
      var F;
      return ((F = e.nodePositions) == null ? void 0 : F[P.id]) || { x: P.x || 0, y: P.y || 0 };
    });
    if (k.length === 0) return { x: 0, y: 0, width: 800, height: 600 };
    const M = k.map((P) => P.x), E = k.map((P) => P.y), R = Math.min(...M) - g, T = Math.max(...M) + g, I = Math.min(...E) - y, B = Math.max(...E) + y;
    return { x: R, y: I, width: T - R, height: B - I };
  }, [c, e.nodePositions]), x = (k) => {
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
  }, b = (k, M, E, R) => {
    const T = M.x - k.x, I = M.y - k.y, B = E / 2, P = R / 2;
    if (T === 0 && I === 0) return { x: k.x, y: k.y };
    const L = Math.abs(T), F = Math.abs(I);
    if (L * P > F * B) {
      const q = T > 0 ? 1 : -1;
      return { x: k.x + q * B, y: k.y + I / L * B };
    } else {
      const q = I > 0 ? 1 : -1;
      return { x: k.x + T / F * P, y: k.y + q * P };
    }
  }, C = V(() => {
    const k = e.finishEditing();
    if (k.nodeId && k.newValue && n) {
      const M = c.find((E) => E.id === k.nodeId);
      M && M.label !== k.newValue && n(k.nodeId, M.label, k.newValue);
    }
  }, [e, c, n]), w = V(() => {
    if (!c || c.length === 0) return;
    const k = new Dr.graphlib.Graph({ compound: !0 });
    k.setGraph({
      rankdir: "TB",
      nodesep: 60,
      ranksep: 60,
      marginx: 60,
      marginy: 50,
      ranker: "network-simplex"
    }), k.setDefaultEdgeLabel(() => ({})), d.forEach((R) => {
      k.setNode(R.id, {
        label: R.name,
        clusterLabelPos: "top",
        style: "fill: transparent"
      });
    }), c.forEach((R) => {
      if (k.setNode(R.id, {
        label: R.label,
        width: R.width || g,
        height: y
      }), R.group) {
        const T = `group-${R.group.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
        d.find((I) => I.id === T) && k.setParent(R.id, T);
      }
    }), h.forEach((R) => {
      c.find((T) => T.id === R.source) && c.find((T) => T.id === R.target) && k.setEdge(R.source, R.target);
    }), Dr.layout(k);
    const M = {};
    k.nodes().forEach((R) => {
      const T = k.node(R);
      T && c.find((I) => I.id === R) && (M[R] = { x: T.x, y: T.y });
    });
    const E = {};
    d.forEach((R) => {
      const T = c.filter((I) => (I.group ? `group-${I.group.toLowerCase().replace(/[^a-z0-9]/g, "_")}` : null) === R.id);
      if (T.length > 0) {
        const I = T.map((Y) => M[Y.id] || { x: Y.x, y: Y.y }), B = 40, P = Math.min(...I.map((Y) => Y.x)) - g / 2 - B, L = Math.max(...I.map((Y) => Y.x)) + g / 2 + B, F = Math.min(...I.map((Y) => Y.y)) - y / 2 - B - 20, q = Math.max(...I.map((Y) => Y.y)) + y / 2 + B;
        E[R.id] = {
          x: P,
          y: F,
          width: L - P,
          height: q - F
        };
      }
    }), e.setPositions(M), m(E);
  }, [c, h, d, e]);
  se(() => {
    const k = (M) => {
      const R = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? M.metaKey : M.ctrlKey;
      if (!e.editingNode) {
        if ((M.key === "Delete" || M.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          M.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (R && M.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          M.preventDefault(), e.copySelectedNodes(c);
          return;
        }
        if (R && M.key.toLowerCase() === "v" && e.clipboard && a) {
          M.preventDefault();
          const T = e.pasteNodes();
          T && a(T);
          return;
        }
      }
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [e, c, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const k = e.getNodesInSelectionBox(c, e.selectionBox);
      k.length > 0 && e.setSelectedNodes(new Set(k));
    }
  }, [e.isSelecting, e.selectionBox, c, e]);
  const $ = V((k) => {
    (k.target === e.canvasRef.current || k.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes archFlowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: $, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab" }, children: [
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
            const M = c.find((z) => z.id === k.source), E = c.find((z) => z.id === k.target);
            if (!M || !E) return null;
            const R = u(M), T = u(E), I = M.width || g, B = M.height || y, P = E.width || g, L = E.height || y, F = b(R, T, I, B), q = b(T, R, P, L), Y = F.x, re = F.y, ne = q.x, te = q.y, oe = (Y + ne) / 2, j = (re + te) / 2, A = r ? $g(Y, re, ne, te, !0) : sr(Y, re, ne, te), O = r ? ye.stroke : v.purple, _ = x(k);
            return /* @__PURE__ */ S("g", { children: [
              !r && /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: O, strokeWidth: _.strokeWidth * 4, strokeOpacity: 0.08, strokeLinecap: "round" }),
              !r && /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: O, strokeWidth: _.strokeWidth * 2, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: O, strokeWidth: r ? 2.5 : _.strokeWidth, strokeDasharray: _.strokeDasharray, markerEnd: r ? "" : k.style === "thick" ? "url(#arch-arr-thick)" : "url(#arch-arr)", opacity: r ? 1 : 0.95, strokeLinecap: "round" }),
              !r && _.animated && /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: "rgba(255,255,255,0.6)", strokeWidth: _.strokeWidth, strokeDasharray: "4,12", strokeLinecap: "round", style: { animation: "archFlowDash 0.8s linear infinite" } }),
              k.label && /* @__PURE__ */ S(ut, { children: [
                /* @__PURE__ */ l("rect", { x: oe - Math.max(k.label.length * 4, 40), y: j - 10, width: Math.max(k.label.length * 8, 80), height: 20, rx: 4, fill: "rgba(15,23,42,0.9)", stroke: v.purple, strokeWidth: 1, opacity: 0.9 }),
                /* @__PURE__ */ l("text", { x: oe, y: j + 4, textAnchor: "middle", fill: t.textPrimary, fontSize: "10", fontFamily: "system-ui", fontWeight: "500", children: k.label })
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: c.map((k) => {
        const M = u(k), E = s(k), R = e.nodeColors[k.id] || k.color, T = e.dragging === k.id, I = e.selectedNodes.has(k.id), B = e.editingNode === k.id, P = k.description && k.description.length > 0;
        let L = { position: "absolute", left: M.x - 65, top: M.y - 37, width: 130, height: P ? 90 : 75, background: At(R, r), border: r ? `2px solid ${ye.stroke}` : `2px solid ${R}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: T ? "grabbing" : "grab", boxShadow: Qe(R, T, I, r), transition: T ? "none" : "box-shadow 0.2s", fontFamily: nn(r) };
        return E === "cylinder" && (L.borderRadius = "50% / 15%", L.height = P ? 100 : 85), E === "hexagon" && (L.clipPath = "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)", L.width = 145), /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (F) => e.handleNodeMouseDown(F, k.id, M.x, M.y),
            onDoubleClick: (F) => e.handleNodeDoubleClick(F, k.id, k.label),
            onContextMenu: (F) => e.handleNodeContextMenu(F, k.id),
            style: L,
            title: k.description || "",
            children: [
              /* @__PURE__ */ l("div", { style: { fontSize: "1.5rem", marginBottom: 2 }, children: e.nodeIcons[k.id] || k.icon }),
              /* @__PURE__ */ l(
                Xe,
                {
                  isEditing: B,
                  value: B ? e.editValue : k.label,
                  onChange: e.setEditValue,
                  onFinish: C,
                  onCancel: e.cancelEditing,
                  style: { fontSize: r ? "1rem" : "0.8rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" }
                }
              ),
              P && /* @__PURE__ */ l("div", { style: { fontSize: "0.65rem", color: t.textSecondary, textAlign: "center", padding: "0 8px", marginTop: 2, maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: k.description })
            ]
          },
          k.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((k) => Math.min(k * 1.2, 2.5)), onZoomOut: () => e.setZoom((k) => Math.max(k * 0.8, 0.3)), onFit: () => e.fitToView(p), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((k) => !k), onAutoLayout: w }),
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
  const c = Pe({ x: 50, y: 50 }), { nodes: h, edges: d } = i, u = (y) => c.getNodePosition(y.id, y.x, y.y), f = ge(() => {
    if (!h || h.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const y = h.map((w) => w.x), s = h.map((w) => w.y), p = Math.min(...y) - 100, x = Math.max(...y) + 100, b = Math.min(...s) - 80, C = Math.max(...s) + 80;
    return { x: p, y: b, width: x - p, height: C - b };
  }, [h]), m = V(() => {
    const y = c.finishEditing();
    if (y.nodeId && y.newValue !== void 0 && n) {
      const s = h.find((p) => p.id === y.nodeId);
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
  const g = V((y) => {
    (y.target === c.canvasRef.current || y.target.classList.contains("canvas-bg")) && (c.clearSelection(), c.closeContextMenu());
  }, [c]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: c.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: c.handleCanvasMouseDown, onMouseMove: c.handleMouseMove, onMouseUp: c.handleMouseUp, onMouseLeave: c.handleMouseUp, onTouchStart: c.handleTouchStart, onTouchMove: c.handleTouchMove, onTouchEnd: c.handleTouchEnd, onWheel: c.handleWheel, style: { width: "100%", height: "100%", cursor: c.isPanning || c.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * c.zoom}px ${25 * c.zoom}px`, backgroundPosition: `${c.pan.x}px ${c.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "journey-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.purple }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${c.pan.x}, ${c.pan.y}) scale(${c.zoom})`, children: [
          d.map((y) => {
            const s = h.find((oe) => oe.id === y.source), p = h.find((oe) => oe.id === y.target);
            if (!s || !p) return null;
            const x = u(s), b = u(p), C = b.x - x.x, w = b.y - x.y, $ = s.shape === "circle" ? 50 : 70, k = s.shape === "circle" ? 50 : 45, M = p.shape === "circle" ? 50 : 70, E = p.shape === "circle" ? 50 : 45, R = Math.atan2(w, C), T = x.x + Math.cos(R) * $, I = x.y + Math.sin(R) * k, B = b.x - Math.cos(R) * M, P = b.y - Math.sin(R) * E, L = (T + B) / 2, F = (I + P) / 2, q = Math.min(Math.abs(w) * 0.3, 30), Y = L, re = F - q, ne = `M ${T} ${I} Q ${Y} ${re} ${B} ${P}`, te = y.label ? Math.max(y.label.length * 7 + 16, 50) : 0;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: ne, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: ne, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: ne, fill: "none", stroke: v.purple, strokeWidth: 2, markerEnd: "url(#journey-arrow)", strokeLinecap: "round", opacity: "0.8" }),
              /* @__PURE__ */ l("path", { d: ne, fill: "none", stroke: "rgba(255,255,255,0.6)", strokeWidth: 2, strokeLinecap: "round", strokeDasharray: "4,12", children: /* @__PURE__ */ l("animate", { attributeName: "stroke-dashoffset", from: "16", to: "0", dur: "0.8s", repeatCount: "indefinite" }) }),
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
        const s = u(y), p = c.dragging === y.id, x = c.selectedNodes.has(y.id);
        return y.shape === "circle" ? /* @__PURE__ */ S("div", { onClick: (C) => c.handleNodeClick(C, y.id), onDoubleClick: (C) => c.handleNodeDoubleClick(C, y.id, y.label), onContextMenu: (C) => c.handleNodeContextMenu(C, y.id), onMouseDown: (C) => c.handleNodeMouseDown(C, y.id, s.x, s.y), onTouchStart: (C) => c.handleNodeTouchStart(C, y.id, s.x, s.y), style: { position: "absolute", left: s.x - 50, top: s.y - 50, width: 100, height: 100, borderRadius: "50%", background: At(y.color), border: `2px solid ${x ? v.blue : y.color}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: p ? "grabbing" : "grab", boxShadow: Qe(y.color, p, x), transition: p ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: 24 }, children: y.icon }),
          c.editingNode === y.id ? /* @__PURE__ */ l(Xe, { value: c.editingValue, onChange: (C) => c.setEditingValue(C), onFinish: m, style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 }, children: y.label })
        ] }, y.id) : /* @__PURE__ */ S("div", { onClick: (C) => {
          y.linkedTemplate && e ? (C.stopPropagation(), e(y.linkedTemplate, y.label)) : c.handleNodeClick(C, y.id);
        }, onDoubleClick: (C) => y.linkedTemplate && e ? e(y.linkedTemplate, y.label) : c.handleNodeDoubleClick(C, y.id, y.label), onContextMenu: (C) => c.handleNodeContextMenu(C, y.id), onMouseDown: (C) => c.handleNodeMouseDown(C, y.id, s.x, s.y), onTouchStart: (C) => c.handleNodeTouchStart(C, y.id, s.x, s.y), style: { position: "absolute", left: s.x - 70, top: s.y - 45, width: 140, height: 90, background: At(y.color), border: `2px solid ${x ? v.blue : y.linkedTemplate ? v.cyan : y.color}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: y.linkedTemplate ? "pointer" : p ? "grabbing" : "grab", boxShadow: y.linkedTemplate ? `${Qe(y.color, p, x)}, 0 0 0 3px ${v.cyan}30` : Qe(y.color, p, x), transition: p ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          y.badge && /* @__PURE__ */ l("div", { style: { position: "absolute", top: -10, right: -10, background: v.red, color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 10 }, children: y.badge }),
          y.linkedTemplate && /* @__PURE__ */ l("div", { style: { position: "absolute", top: -8, left: -8, background: v.cyan, color: "#fff", fontSize: 10, fontWeight: 600, padding: "2px 6px", borderRadius: 6, display: "flex", alignItems: "center", gap: 3 }, children: "🔗 Click to open" }),
          /* @__PURE__ */ l("span", { style: { fontSize: 22 }, children: y.icon }),
          c.editingNode === y.id ? /* @__PURE__ */ l(Xe, { value: c.editingValue, onChange: (C) => c.setEditingValue(C), onFinish: m, style: { fontSize: r ? 14 : 11, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 11, fontWeight: 600, color: r ? ye.stroke : t.textPrimary, marginTop: 4 }, children: y.label })
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
  const { title: r, actors: n, sections: o } = i, a = _e(null), [e, c] = H({ width: 1200, height: 600 }), h = ge(() => {
    const p = [];
    return o.forEach((x, b) => {
      x.tasks.forEach((C, w) => {
        p.push({ ...C, section: x.name, sectionIndex: b, sectionColor: x.color });
      });
    }), p;
  }, [o]);
  se(() => {
    if (a.current) {
      const p = a.current.getBoundingClientRect();
      c({ width: Math.max(p.width, 800), height: Math.max(p.height - 80, 400) });
    }
  }, []);
  const d = ge(() => {
    const p = { top: 120, bottom: 100, left: 80, right: 80 }, x = Math.max(e.width - p.left - p.right, h.length * 150), b = e.height - p.top - p.bottom, C = x / Math.max(h.length - 1, 1), w = h.map((I, B) => {
      const P = p.left + B * C, L = b * 0.2, F = Math.sin(B * 0.8) * L, Y = p.top + b / 2 + F;
      return { ...I, x: P, y: Y, index: B };
    });
    let $ = "";
    if (w.length > 0) {
      $ = `M ${w[0].x} ${w[0].y}`;
      for (let I = 1; I < w.length; I++) {
        const B = w[I - 1], P = w[I], L = B.x + (P.x - B.x) * 0.5, F = B.x + (P.x - B.x) * 0.5;
        $ += ` C ${L} ${B.y}, ${F} ${P.y}, ${P.x} ${P.y}`;
      }
    }
    const k = w.map((I, B) => {
      const P = p.top + 50 - (I.score - 1) * 12;
      return { x: I.x, y: P, score: I.score };
    });
    let M = "";
    if (k.length > 0) {
      M = `M ${k[0].x} ${k[0].y}`;
      for (let I = 1; I < k.length; I++) {
        const B = k[I - 1], P = k[I], L = B.x + (P.x - B.x) * 0.5;
        M += ` C ${L} ${B.y}, ${L} ${P.y}, ${P.x} ${P.y}`;
      }
    }
    const E = [];
    let R = -1, T = 0;
    return w.forEach((I, B) => {
      I.sectionIndex !== R && (R >= 0 && E.push({
        index: R,
        start: T,
        end: I.x - C / 2,
        color: o[R].color,
        name: o[R].name
      }), R = I.sectionIndex, T = B === 0 ? p.left - 40 : I.x - C / 2);
    }), R >= 0 && E.push({
      index: R,
      start: T,
      end: p.left + x + 40,
      color: o[R].color,
      name: o[R].name
    }), { nodes: w, pathString: $, emotionPathString: M, emotionPath: k, sectionBounds: E, padding: p, availableWidth: x };
  }, [h, e, o]), u = (p) => ({ 1: "#ef4444", 2: "#f97316", 3: "#eab308", 4: "#22c55e", 5: "#10b981" })[p] || "#64748b", f = (p) => {
    const x = p.toLowerCase();
    return x.includes("user") ? v.pink : x.includes("system") ? v.blue : x.includes("admin") ? v.purple : v.cyan;
  }, m = (p) => {
    const x = p.toLowerCase();
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
        }, children: n.map((p, x) => /* @__PURE__ */ S("div", { style: {
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
                d.sectionBounds.map((p, x) => /* @__PURE__ */ S("linearGradient", { id: `sectionGrad${x}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                  /* @__PURE__ */ l("stop", { offset: "0%", stopColor: p.color, stopOpacity: "0.08" }),
                  /* @__PURE__ */ l("stop", { offset: "100%", stopColor: p.color, stopOpacity: "0.02" })
                ] }, x)),
                /* @__PURE__ */ S("linearGradient", { id: "emotionGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                  /* @__PURE__ */ l("stop", { offset: "0%", stopColor: "#10b981" }),
                  /* @__PURE__ */ l("stop", { offset: "50%", stopColor: "#eab308" }),
                  /* @__PURE__ */ l("stop", { offset: "100%", stopColor: "#10b981" })
                ] })
              ] }),
              d.sectionBounds.map((p, x) => /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l(
                  "rect",
                  {
                    x: p.start,
                    y: 60,
                    width: p.end - p.start,
                    height: e.height - 120,
                    rx: 16,
                    fill: `url(#sectionGrad${x})`
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
                d.emotionPath.map((p, x) => /* @__PURE__ */ l(
                  "circle",
                  {
                    cx: p.x,
                    cy: p.y,
                    r: 4,
                    fill: u(p.score),
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
              d.nodes.map((p, x) => {
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
                      children: x + 1
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
function hc({ nodes: i, edges: t, theme: r = we.dark, sketchMode: n = !1, onLabelChange: o, onDeleteNodes: a, onPasteNodes: e, onEdgeLabelChange: c, onCreateConnection: h }) {
  const d = Pe({ x: 50, y: 50 }), u = { start: { color: v.green, icon: "▶" }, end: { color: v.red, icon: "■" }, process: { color: v.blue, icon: "⚙️" }, decision: { color: v.orange, icon: "◇" }, action: { color: v.blue, icon: "▹" }, io: { color: v.purple, icon: "📦" }, default: { color: v.purple, icon: "📦" } }, f = ($) => d.getNodePosition($.id, $.x, $.y), m = ge(() => {
    if (!i || i.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const $ = i.map((M) => M.x), k = i.map((M) => M.y);
    return { x: Math.min(...$) - 100, y: Math.min(...k) - 80, width: Math.max(...$) - Math.min(...$) + 300, height: Math.max(...k) - Math.min(...k) + 200 };
  }, [i]), g = V(() => {
    const $ = d.finishEditing();
    if ($.nodeId && $.newValue && o) {
      const k = i.find((M) => M.id === $.nodeId);
      k && k.label !== $.newValue && o($.nodeId, k.label, $.newValue);
    }
  }, [d, i, o]), y = V(() => {
    const $ = d.finishEdgeEditing();
    if ($.edgeId && c) {
      const k = t.find((M) => M.id === $.edgeId);
      c($.edgeId, (k == null ? void 0 : k.label) || "", $.newValue);
    }
  }, [d, t, c]), s = V(() => {
    if (!i || i.length === 0) return;
    const $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
    i.forEach((q) => {
      $.set(q.id, []), k.set(q.id, 0);
    }), t.forEach((q) => {
      $.has(q.source) && $.get(q.source).push(q.target), k.has(q.target) && k.set(q.target, k.get(q.target) + 1);
    });
    const M = i.filter((q) => k.get(q.id) === 0);
    M.length === 0 && M.push(i[0]);
    const E = /* @__PURE__ */ new Map(), R = M.map((q) => ({ id: q.id, level: 0 })), T = /* @__PURE__ */ new Set();
    for (; R.length > 0; ) {
      const { id: q, level: Y } = R.shift();
      if (T.has(q)) continue;
      T.add(q), E.set(q, Y), ($.get(q) || []).forEach((ne) => {
        T.has(ne) || R.push({ id: ne, level: Y + 1 });
      });
    }
    i.forEach((q) => {
      T.has(q.id) || E.set(q.id, 0);
    });
    const I = /* @__PURE__ */ new Map();
    E.forEach((q, Y) => {
      I.has(q) || I.set(q, []), I.get(q).push(Y);
    });
    const B = 120, P = 180, L = 100, F = {};
    I.forEach((q, Y) => {
      const re = L + Y * B, te = 300 - (q.length - 1) * P / 2;
      q.forEach((oe, j) => {
        F[oe] = {
          x: te + j * P,
          y: re
        };
      });
    }), d.setPositions(F), d.fitToView(m);
  }, [i, t, d, m]), p = V(() => {
    const $ = Array.from(d.selectedNodes);
    if ($.length < 3) return;
    const k = $.map((I) => {
      var B, P;
      return {
        id: I,
        x: ((B = d.positions[I]) == null ? void 0 : B.x) ?? ((P = i.find((L) => L.id === I)) == null ? void 0 : P.x) ?? 0
      };
    });
    k.sort((I, B) => I.x - B.x);
    const M = k[0].x, R = (k[k.length - 1].x - M) / (k.length - 1), T = { ...d.positions };
    k.forEach((I, B) => {
      var L, F;
      const P = ((L = T[I.id]) == null ? void 0 : L.y) ?? ((F = i.find((q) => q.id === I.id)) == null ? void 0 : F.y) ?? 0;
      T[I.id] = { x: M + B * R, y: P };
    }), d.setPositions(T);
  }, [d, i]), x = V(() => {
    const $ = Array.from(d.selectedNodes);
    if ($.length < 3) return;
    const k = $.map((I) => {
      var B, P;
      return {
        id: I,
        y: ((B = d.positions[I]) == null ? void 0 : B.y) ?? ((P = i.find((L) => L.id === I)) == null ? void 0 : P.y) ?? 0
      };
    });
    k.sort((I, B) => I.y - B.y);
    const M = k[0].y, R = (k[k.length - 1].y - M) / (k.length - 1), T = { ...d.positions };
    k.forEach((I, B) => {
      var L, F;
      const P = ((L = T[I.id]) == null ? void 0 : L.x) ?? ((F = i.find((q) => q.id === I.id)) == null ? void 0 : F.x) ?? 0;
      T[I.id] = { x: P, y: M + B * R };
    }), d.setPositions(T);
  }, [d, i]);
  se(() => {
    if (d.dragging) {
      const $ = f({ id: d.dragging });
      d.updateAlignmentGuides(d.dragging, $, i, f);
    }
  }, [d.dragging, d.positions, i, f, d.updateAlignmentGuides]), se(() => {
    const $ = (k) => {
      const E = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? k.metaKey : k.ctrlKey;
      if (!(d.editingNode || d.editingEdge)) {
        if ((k.key === "Delete" || k.key === "Backspace") && d.selectedNodes.size > 0 && a) {
          k.preventDefault(), a(Array.from(d.selectedNodes)), d.clearSelection();
          return;
        }
        if (E && k.key.toLowerCase() === "c" && d.selectedNodes.size > 0) {
          k.preventDefault(), d.copySelectedNodes(i);
          return;
        }
        if (E && k.key.toLowerCase() === "v" && d.clipboard && e) {
          k.preventDefault();
          const R = d.pasteNodes();
          R && e(R);
          return;
        }
      }
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [d, i, a, e]), se(() => {
    if (!d.isSelecting && d.selectionBox) {
      const $ = d.getNodesInSelectionBox(i, d.selectionBox);
      $.length > 0 && d.setSelectedNodes(new Set($));
    }
  }, [d.isSelecting, d.selectionBox, i, d]);
  const b = V(($) => {
    ($.target === d.canvasRef.current || $.target.classList.contains("canvas-bg")) && (d.clearSelection(), d.closeContextMenu(), d.closeEdgeContextMenu(), d.cancelEdgeEditing());
  }, [d]), C = V(($) => {
    const k = d.edgeStyles[$] || "solid", M = d.edgeArrowTypes[$] || "triangle", E = yc.find((T) => T.style === k) || yc[0];
    let R = "url(#flow-arr-triangle)";
    return M === "none" ? R = "" : M === "open" ? R = "url(#flow-arr-open)" : M === "diamond" ? R = "url(#flow-arr-diamond)" : M === "circle" && (R = "url(#flow-arr-circle)"), {
      strokeDasharray: E.dasharray,
      animation: E.animated ? "flowDash 1s linear infinite" : "none",
      markerEnd: R
    };
  }, [d.edgeStyles, d.edgeArrowTypes]), w = V(($) => {
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
    /* @__PURE__ */ S("div", { ref: d.canvasRef, className: "canvas-bg", onClick: b, onMouseDown: d.handleCanvasMouseDown, onMouseMove: d.handleMouseMove, onMouseUp: w, onMouseLeave: w, onTouchStart: d.handleTouchStart, onTouchMove: d.handleTouchMove, onTouchEnd: d.handleTouchEnd, onWheel: d.handleWheel, style: { width: "100%", height: "100%", cursor: d.isPanning || d.dragging ? "grabbing" : d.isConnecting ? "crosshair" : "grab", touchAction: "none" }, children: [
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
          t.map(($) => {
            const k = i.find((W) => W.id === $.source), M = i.find((W) => W.id === $.target);
            if (!k || !M) return null;
            const E = f(k), R = f(M), T = R.x - E.x, I = R.y - E.y, B = Math.sqrt(T * T + I * I) || 1, P = k.type === "decision" ? 45 : 40, L = M.type === "decision" ? 45 : 40, F = E.x + T / B * P, q = E.y + I / B * 35, Y = R.x - T / B * L, re = R.y - I / B * 35, ne = d.edgePathTypes[$.id] || "curved", te = (F + Y) / 2, oe = (q + re) / 2, j = ne === "straight" ? 0 : Math.abs(T) > 50 ? Math.sign(I || 1) * 20 : 0;
            let A;
            if (ne === "straight")
              A = `M ${F} ${q} L ${Y} ${re}`;
            else if (ne === "step")
              Math.abs(T) > Math.abs(I) ? A = `M ${F} ${q} L ${te} ${q} L ${te} ${re} L ${Y} ${re}` : A = `M ${F} ${q} L ${F} ${oe} L ${Y} ${oe} L ${Y} ${re}`;
            else if (ne === "rounded")
              if (Math.abs(T) > Math.abs(I)) {
                const X = re > q ? 1 : -1;
                A = `M ${F} ${q} L ${te - 12} ${q} Q ${te} ${q} ${te} ${q + X * 12} L ${te} ${re - X * 12} Q ${te} ${re} ${te + 12 * Math.sign(T)} ${re} L ${Y} ${re}`;
              } else {
                const X = Y > F ? 1 : -1;
                A = `M ${F} ${q} L ${F} ${oe - Math.sign(I) * 12} Q ${F} ${oe} ${F + X * 12} ${oe} L ${Y - X * 12} ${oe} Q ${Y} ${oe} ${Y} ${oe + Math.sign(I) * 12} L ${Y} ${re}`;
              }
            else
              A = n ? $g(F, q, Y, re, !0) : sr(F, q, Y, re);
            const O = d.editingEdge === $.id, _ = O ? d.edgeEditValue : $.label || "", z = C($.id);
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: "transparent", strokeWidth: 20, style: { cursor: "pointer", pointerEvents: "stroke" }, onDoubleClick: (W) => {
                W.stopPropagation(), d.handleEdgeDoubleClick(W, $.id, $.label || "");
              }, onContextMenu: (W) => {
                W.preventDefault(), W.stopPropagation(), d.handleEdgeContextMenu(W, $.id);
              } }),
              !n && /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round", style: { pointerEvents: "none" } }),
              !n && /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round", style: { pointerEvents: "none" } }),
              /* @__PURE__ */ l("path", { d: A, fill: "none", stroke: n ? ye.stroke : v.purple, strokeWidth: n ? 2.5 : 2, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: z.strokeDasharray, markerEnd: n ? "" : z.markerEnd, opacity: 0.9, style: { animation: n ? "none" : z.animation, pointerEvents: "none" } }),
              (_ || O) && /* @__PURE__ */ S("g", { style: { cursor: "pointer" }, onDoubleClick: (W) => {
                W.stopPropagation(), d.handleEdgeDoubleClick(W, $.id, $.label || "");
              }, children: [
                /* @__PURE__ */ l("rect", { x: te - Math.max(_.length, 3) * 3.5 - 8, y: oe + j - 12, width: Math.max(_.length, 3) * 7 + 16, height: 22, rx: 11, fill: O ? "rgba(124,58,237,0.3)" : "rgba(15,23,42,0.9)", stroke: O ? v.purple : "rgba(124,58,237,0.4)", strokeWidth: O ? 2 : 1 }),
                !O && /* @__PURE__ */ l("text", { x: te, y: oe + j + 4, textAnchor: "middle", fill: "#e0e0e0", fontSize: 10, fontWeight: 500, children: _ })
              ] }),
              !_ && !O && /* @__PURE__ */ S("g", { style: { cursor: "pointer", opacity: 0 }, className: "edge-add-label", onDoubleClick: (W) => {
                W.stopPropagation(), d.handleEdgeDoubleClick(W, $.id, "");
              }, children: [
                /* @__PURE__ */ l("rect", { x: te - 20, y: oe + j - 10, width: 40, height: 20, rx: 10, fill: "rgba(124,58,237,0.2)" }),
                /* @__PURE__ */ l("text", { x: te, y: oe + j + 4, textAnchor: "middle", fill: "#888", fontSize: 9, children: "+ label" })
              ] })
            ] }, $.id);
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
          d.alignmentGuides.horizontal.map(($, k) => /* @__PURE__ */ l(
            "line",
            {
              x1: $.fromX,
              y1: $.y,
              x2: $.toX,
              y2: $.y,
              stroke: v.cyan,
              strokeWidth: 1,
              strokeDasharray: "4,4",
              opacity: 0.8,
              style: { pointerEvents: "none" }
            },
            `h-${k}`
          )),
          d.alignmentGuides.vertical.map(($, k) => /* @__PURE__ */ l(
            "line",
            {
              x1: $.x,
              y1: $.fromY,
              x2: $.x,
              y2: $.toY,
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
        const $ = t.find((L) => L.id === d.editingEdge);
        if (!$) return null;
        const k = i.find((L) => L.id === $.source), M = i.find((L) => L.id === $.target);
        if (!k || !M) return null;
        const E = f(k), R = f(M), T = (E.x + R.x) / 2, I = (E.y + R.y) / 2, B = T * d.zoom + d.pan.x, P = I * d.zoom + d.pan.y;
        return /* @__PURE__ */ l("div", { style: { position: "absolute", left: B - 50, top: P - 12, zIndex: 200 }, children: /* @__PURE__ */ l(
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${d.pan.x}px, ${d.pan.y}px) scale(${d.zoom})`, transformOrigin: "0 0" }, children: i.map(($) => {
        var X, Z;
        const k = f($), M = u[$.type] || u.default, E = d.nodeColors[$.id] || $.color || M.color, R = d.dragging === $.id, T = d.selectedNodes.has($.id), I = d.editingNode === $.id, B = ((X = d.resizing) == null ? void 0 : X.nodeId) === $.id, L = d.nodeShapes[$.id] || ($.type === "decision" ? "diamond" : ["start", "end"].includes($.type) ? "pill" : "rounded"), F = L === "diamond", q = d.getNodeSize($.id), Y = d.nodeSizes[$.id] ? q : {
          width: $.width || q.width,
          height: $.height || q.height
        }, re = L === "circle", ne = Math.max(Y.width, Y.height), te = F ? 70 : re ? ne : Y.width, oe = F ? 70 : re ? ne : Y.height;
        let j = 12, A;
        L === "rectangle" ? j = 0 : L === "rounded" ? j = 12 : L === "circle" ? j = "50%" : L === "pill" ? j = oe / 2 : L === "hexagon" && (A = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)");
        let O = {
          position: "absolute",
          left: k.x - te / 2,
          top: k.y - oe / 2,
          width: te,
          height: oe,
          background: At(E, n),
          border: n ? `2px solid ${ye.stroke}` : `2px solid ${E}`,
          borderRadius: j,
          clipPath: A,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: R ? "grabbing" : B ? "nwse-resize" : "grab",
          boxShadow: Qe(E, R, T, n),
          transition: R || B ? "none" : "box-shadow 0.2s, background 0.2s",
          touchAction: "none",
          fontFamily: nn(n)
        };
        F && (O.left = k.x - 35, O.top = k.y - 35, O.transform = "rotate(45deg)", O.borderRadius = 8, O.clipPath = void 0);
        const _ = d.isConnecting && d.connectionTarget === $.id, z = d.isConnecting && ((Z = d.connectionStart) == null ? void 0 : Z.nodeId) !== $.id, W = F ? 35 : te / 2;
        return /* @__PURE__ */ S(
          "div",
          {
            className: "flow-node",
            onMouseDown: (Q) => d.handleNodeMouseDown(Q, $.id, k.x, k.y),
            onDoubleClick: (Q) => d.handleNodeDoubleClick(Q, $.id, $.label),
            onContextMenu: (Q) => d.handleNodeContextMenu(Q, $.id),
            onTouchStart: (Q) => d.handleNodeTouchStart(Q, $.id, k.x, k.y),
            onMouseEnter: () => z && d.setConnectionTargetNode($.id),
            onMouseLeave: () => d.clearConnectionTarget(),
            style: {
              ...O,
              boxShadow: _ ? `0 0 0 4px ${v.green}, 0 0 30px ${v.green}50` : O.boxShadow
            },
            children: [
              /* @__PURE__ */ S("div", { style: { transform: F ? "rotate(-45deg)" : "none", textAlign: "center", width: "100%", padding: "0 8px" }, children: [
                (d.nodeIcons[$.id] || M.icon) && /* @__PURE__ */ l("div", { style: { fontSize: "1.2rem" }, children: d.nodeIcons[$.id] || M.icon }),
                /* @__PURE__ */ l(
                  Xe,
                  {
                    isEditing: I,
                    value: I ? d.editValue : $.label,
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
                  onMouseDown: (Q) => d.handlePortMouseDown(Q, $.id, k.x + W, k.y),
                  style: {
                    position: "absolute",
                    right: -8,
                    top: "50%",
                    transform: F ? "rotate(-45deg) translateY(-50%)" : "translateY(-50%)",
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
                    transform: F ? "rotate(-45deg) translateY(-50%)" : "translateY(-50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: z ? v.green : v.blue,
                    border: "3px solid rgba(255,255,255,0.9)",
                    cursor: "pointer",
                    opacity: z ? 1 : 0,
                    transition: "opacity 0.15s, transform 0.15s",
                    zIndex: 10,
                    pointerEvents: z ? "auto" : "none"
                  }
                }
              ),
              T && !F && /* @__PURE__ */ S(ut, { children: [
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "resize-handle resize-handle-se",
                    onMouseDown: (Q) => d.handleResizeStart(Q, $.id, "se"),
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
                    onMouseDown: (Q) => d.handleResizeStart(Q, $.id, "e"),
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
                    onMouseDown: (Q) => d.handleResizeStart(Q, $.id, "s"),
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
          $.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l(De, { onZoomIn: () => d.setZoom(($) => Math.min($ * 1.2, 2.5)), onZoomOut: () => d.setZoom(($) => Math.max($ * 0.8, 0.3)), onFit: () => d.fitToView(m), onReset: d.resetView, zoom: d.zoom, snapToGrid: d.snapToGrid, onToggleSnap: () => d.setSnapToGrid(($) => !$), onAutoLayout: s }),
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
  }, [c]), u = V(() => {
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
          const p = e.pasteNodes();
          p && a(p);
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
  const f = V((m) => {
    (m.target === e.canvasRef.current || m.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: f, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "erd-crow", markerWidth: "12", markerHeight: "10", refX: "10", refY: "5", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 5 L 8 0 M 0 5 L 8 5 M 0 5 L 8 10", stroke: v.blue, strokeWidth: "2", strokeLinecap: "round", fill: "none" }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          c.flatMap((m) => {
            var g;
            return ((g = m.fields) == null ? void 0 : g.filter((y) => y.fk && y.references).map((y, s) => {
              const p = c.find((E) => E.name === y.references);
              if (!p) return null;
              const x = h(m), b = h(p), C = x.y + 44 + s * 30 + 15, w = x.x + m.width, $ = b.x, k = b.y + 22, M = `M ${w} ${C} C ${(w + $) / 2} ${C}, ${(w + $) / 2} ${k}, ${$} ${k}`;
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: c.map((m) => {
        var b;
        const g = h(m), y = e.dragging === m.name, s = e.selectedNodes.has(m.name), p = e.editingNode === m.name, x = e.nodeColors[m.name] || v.orange;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (C) => e.handleNodeMouseDown(C, m.name, g.x, g.y),
            onDoubleClick: (C) => e.handleNodeDoubleClick(C, m.name, m.name),
            onContextMenu: (C) => e.handleNodeContextMenu(C, m.name),
            onTouchStart: (C) => e.handleNodeTouchStart(C, m.name, g.x, g.y),
            style: { position: "absolute", left: g.x, top: g.y, width: m.width, background: `linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${x}`, borderRadius: 12, overflow: "hidden", cursor: y ? "grabbing" : "grab", boxShadow: Qe(x, y, s), transition: y ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { padding: "12px 16px", background: `linear-gradient(135deg, ${x}, ${x}dd)` }, children: /* @__PURE__ */ S("span", { style: { color: "#fff", fontWeight: 700, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: 6 }, children: [
                "📊",
                /* @__PURE__ */ l(
                  Xe,
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
              /* @__PURE__ */ l("div", { style: { padding: "8px 0" }, children: (b = m.fields) == null ? void 0 : b.map((C, w) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", padding: "7px 16px", borderBottom: w < m.fields.length - 1 ? `1px solid ${t.border}` : "none", gap: 10 }, children: [
                /* @__PURE__ */ l("span", { style: { width: 20, fontSize: "0.8rem" }, children: C.key ? "🔑" : C.fk ? "🔗" : "" }),
                /* @__PURE__ */ l("span", { style: { flex: 1, color: C.key ? x : C.fk ? v.blue : t.textPrimary, fontSize: "0.85rem", fontWeight: C.key ? 600 : 400 }, children: C.name }),
                /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem", fontFamily: "monospace" }, children: C.type })
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
  }, [i]), d = (g) => e.getNodePosition(g.id, g.defaultX, g.defaultY), u = ge(() => {
    if (!h.devices || h.devices.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const g = h.devices.map((s) => s.defaultX), y = h.devices.map((s) => s.defaultY);
    return { x: Math.min(...g) - 60, y: Math.min(...y) - 60, width: Math.max(...g) - Math.min(...g) + 200, height: Math.max(...y) - Math.min(...y) + 200 };
  }, [h]), f = V(() => {
    const g = e.finishEditing();
    if (g.nodeId && g.newValue && n) {
      const y = h.devices.find((s) => s.id === g.nodeId);
      y && y.label !== g.newValue && n(g.nodeId, y.label, g.newValue);
    }
  }, [e, h.devices, n]);
  se(() => {
    const g = (y) => {
      const p = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? y.metaKey : y.ctrlKey;
      if (!e.editingNode) {
        if ((y.key === "Delete" || y.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          y.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (p && y.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          y.preventDefault(), e.copySelectedNodes(h.devices);
          return;
        }
        if (p && y.key.toLowerCase() === "v" && e.clipboard && a) {
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
  const m = V((g) => {
    (g.target === e.canvasRef.current || g.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: m, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        h.connections.map((g) => {
          const y = h.devices.find((R) => R.id === g.source), s = h.devices.find((R) => R.id === g.target);
          if (!y || !s) return null;
          const p = d(y), x = d(s), b = p.x + 65, C = p.y + 55, w = x.x + 65, $ = x.y + 55, k = sr(b, C, w, $), M = (b + w) / 2, E = (C + $) / 2;
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.blue, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.blue, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.blue, strokeWidth: 2.5, opacity: 0.95, strokeLinecap: "round" }),
            g.protocol && /* @__PURE__ */ S(ut, { children: [
              /* @__PURE__ */ l("rect", { x: M - 28, y: E - 10, width: 56, height: 18, rx: 4, fill: "rgba(0,0,0,0.8)" }),
              /* @__PURE__ */ l("text", { x: M, y: E + 3, textAnchor: "middle", fill: v.blue, fontSize: 10, children: g.protocol })
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
        const y = d(g), s = e.dragging === g.id, p = e.selectedNodes.has(g.id), x = e.editingNode === g.id, b = e.nodeColors[g.id] || v.blue;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: (C) => e.handleNodeMouseDown(C, g.id, y.x, y.y),
            onDoubleClick: (C) => e.handleNodeDoubleClick(C, g.id, g.label),
            onContextMenu: (C) => e.handleNodeContextMenu(C, g.id),
            onTouchStart: (C) => e.handleNodeTouchStart(C, g.id, y.x, y.y),
            style: { position: "absolute", left: y.x, top: y.y, width: 130, background: At(b), border: `2px solid ${b}`, borderRadius: 12, padding: 12, textAlign: "center", cursor: s ? "grabbing" : "grab", boxShadow: Qe(b, s, p), transition: s ? "none" : "box-shadow 0.2s", touchAction: "none" },
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
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((g) => Math.min(g * 1.2, 2)), onZoomOut: () => e.setZoom((g) => Math.max(g * 0.8, 0.3)), onFit: () => e.fitToView(u), onReset: e.resetView, zoom: e.zoom, snapToGrid: e.snapToGrid, onToggleSnap: () => e.setSnapToGrid((g) => !g) }),
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
    return c.map((p, x) => ({ ...p, label: p.name, defaultX: 80 + x % s * 300, defaultY: 80 + Math.floor(x / s) * 220, width: 230 }));
  }, [c]), u = (s) => e.getNodePosition(s.id, s.defaultX, s.defaultY), f = ge(() => {
    if (!d || d.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const s = d.map((x) => x.defaultX), p = d.map((x) => x.defaultY);
    return { x: Math.min(...s) - 60, y: Math.min(...p) - 60, width: Math.max(...s) - Math.min(...s) + 320, height: Math.max(...p) - Math.min(...p) + 280 };
  }, [d]), m = (s) => {
    const x = s.properties.length > 0 ? s.properties.length * 22 + 16 : 30, b = s.methods.length > 0 ? s.methods.length * 22 + 16 : 30;
    return 38 + x + b;
  }, g = V(() => {
    const s = e.finishEditing();
    if (s.nodeId && s.newValue && n) {
      const p = d.find((x) => x.id === s.nodeId);
      p && p.name !== s.newValue && n(s.nodeId, p.name, s.newValue);
    }
  }, [e, d, n]);
  se(() => {
    const s = (p) => {
      const b = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? p.metaKey : p.ctrlKey;
      if (!e.editingNode) {
        if ((p.key === "Delete" || p.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          p.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (b && p.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          p.preventDefault(), e.copySelectedNodes(d);
          return;
        }
        if (b && p.key.toLowerCase() === "v" && e.clipboard && a) {
          p.preventDefault();
          const C = e.pasteNodes();
          C && a(C);
          return;
        }
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e, d, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const s = e.getNodesInSelectionBox(d.map((p) => ({ ...p, x: p.defaultX, y: p.defaultY })), e.selectionBox);
      s.length > 0 && e.setSelectedNodes(new Set(s));
    }
  }, [e.isSelecting, e.selectionBox, d, e]);
  const y = V((s) => {
    (s.target === e.canvasRef.current || s.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
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
          h.map((s, p) => {
            const x = d.find((A) => A.id === s.from || A.name === s.from), b = d.find((A) => A.id === s.to || A.name === s.to);
            if (!x || !b) return null;
            const C = u(x), w = u(b), $ = m(x), k = m(b), M = C.x + x.width / 2, E = C.y + $ / 2, R = w.x + b.width / 2, T = w.y + k / 2, I = R - M, B = T - E, P = Math.sqrt(I * I + B * B) || 1, L = M + I / P * (x.width / 2 + 5), F = E + B / P * ($ / 2 + 5), q = R - I / P * (b.width / 2 + 15), Y = T - B / P * (k / 2 + 5), re = (L + q) / 2, ne = (F + Y) / 2, te = s.type === "extends" ? "url(#class-inherit)" : s.type === "composition" ? "url(#class-diamond)" : "url(#class-assoc)", oe = s.type === "extends" ? v.purple : s.type === "composition" ? v.orange : v.blue, j = sr(L, F, q, Y);
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: j, fill: "none", stroke: oe, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: j, fill: "none", stroke: oe, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
              /* @__PURE__ */ l("path", { d: j, fill: "none", stroke: oe, strokeWidth: 2.5, markerEnd: te, opacity: 0.95, strokeLinecap: "round" }),
              s.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: re - s.label.length * 3.5 - 6, y: ne - 10, width: s.label.length * 7 + 12, height: 18, rx: 4, fill: "rgba(0,0,0,0.8)" }),
                /* @__PURE__ */ l("text", { x: re, y: ne + 4, textAnchor: "middle", fill: oe, fontSize: 10, children: s.label })
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
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: d.map((s) => {
        const p = u(s), x = e.dragging === s.id, b = e.selectedNodes.has(s.id), C = e.editingNode === s.id, w = e.nodeColors[s.id] || v.purple;
        return /* @__PURE__ */ S(
          "div",
          {
            onMouseDown: ($) => e.handleNodeMouseDown($, s.id, p.x, p.y),
            onDoubleClick: ($) => e.handleNodeDoubleClick($, s.id, s.name),
            onContextMenu: ($) => e.handleNodeContextMenu($, s.id),
            onTouchStart: ($) => e.handleNodeTouchStart($, s.id, p.x, p.y),
            style: { position: "absolute", left: p.x, top: p.y, width: s.width, background: `linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`, border: `2px solid ${w}`, borderRadius: 8, overflow: "hidden", cursor: x ? "grabbing" : "grab", boxShadow: Qe(w, x, b), transition: x ? "none" : "box-shadow 0.2s", touchAction: "none" },
            children: [
              /* @__PURE__ */ l("div", { style: { padding: "10px 14px", background: `linear-gradient(135deg, ${w}40, ${w}20)`, borderBottom: `1px solid ${w}` }, children: /* @__PURE__ */ l(
                Xe,
                {
                  isEditing: C,
                  value: C ? e.editValue : s.name,
                  onChange: e.setEditValue,
                  onFinish: g,
                  onCancel: e.cancelEditing,
                  style: { color: r ? ye.stroke : t.textPrimary, fontWeight: 700, fontSize: r ? "1rem" : "inherit" }
                }
              ) }),
              /* @__PURE__ */ S("div", { style: { padding: "8px 14px", borderBottom: `1px solid ${t.border}` }, children: [
                s.properties.map(($, k) => /* @__PURE__ */ S("div", { style: { fontSize: "0.8rem", color: t.textSecondary }, children: [
                  /* @__PURE__ */ l("span", { style: { color: v.orange }, children: $.visibility }),
                  " ",
                  $.name,
                  ": ",
                  $.type
                ] }, k)),
                s.properties.length === 0 && /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", color: t.textMuted }, children: "No properties" })
              ] }),
              /* @__PURE__ */ S("div", { style: { padding: "8px 14px" }, children: [
                s.methods.map(($, k) => /* @__PURE__ */ S("div", { style: { fontSize: "0.8rem", color: t.textSecondary }, children: [
                  /* @__PURE__ */ l("span", { style: { color: v.green }, children: $.visibility }),
                  " ",
                  $.name,
                  "(): ",
                  $.returns
                ] }, k)),
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
    const s = new Set(g.map((w) => w.target)), p = m.find((w) => !s.has(w.id));
    if (!p) return { nodes: m, edges: g };
    const x = (w) => {
      const $ = y[w] || [];
      return $.length === 0 ? 180 : Math.max(180, $.map(x).reduce((k, M) => k + M + 40, -40));
    }, b = [], C = (w, $, k, M) => {
      const E = m.find((I) => I.id === w);
      if (!E) return;
      const R = y[w] || [], T = x(w);
      if (b.push({ ...E, defaultX: $, defaultY: k, level: M, color: [v.purple, v.blue, v.green, v.orange][Math.min(M, 3)] }), R.length) {
        let I = $ - T / 2;
        R.forEach((B) => {
          const P = x(B);
          C(B, I + P / 2, k + 120, M + 1), I += P + 40;
        });
      }
    };
    return C(p.id, x(p.id) / 2 + 100, 80, 0), { nodes: b, edges: g };
  }, [i]), h = (m) => e.getNodePosition(m.id, m.defaultX, m.defaultY), d = V(() => {
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
          const p = e.pasteNodes();
          p && a(p);
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
  const u = V((m) => {
    (m.target === e.canvasRef.current || m.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), f = ge(() => {
    if (!c.nodes || c.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const m = c.nodes.map((y) => y.defaultX), g = c.nodes.map((y) => y.defaultY);
    return { x: Math.min(...m) - 60, y: Math.min(...g) - 60, width: Math.max(...m) - Math.min(...m) + 250, height: Math.max(...g) - Math.min(...g) + 180 };
  }, [c]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: u, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
        c.edges.map((m) => {
          const g = c.nodes.find((M) => M.id === m.source), y = c.nodes.find((M) => M.id === m.target);
          if (!g || !y) return null;
          const s = h(g), p = h(y), x = s.x + 90, b = s.y + 60, C = p.x + 90, w = p.y, $ = (b + w) / 2, k = `M ${x} ${b} L ${x} ${$} L ${C} ${$} L ${C} ${w}`;
          return /* @__PURE__ */ S("g", { children: [
            !r && /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.purple, strokeWidth: 8, strokeOpacity: 0.08, strokeLinecap: "round", strokeLinejoin: "round" }),
            !r && /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: v.purple, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ l("path", { d: k, fill: "none", stroke: r ? ye.stroke : v.purple, strokeWidth: r ? 2.5 : 2, strokeDasharray: "6,4", opacity: r ? 1 : 0.7, strokeLinecap: "round", strokeLinejoin: "round" })
          ] }, m.id);
        }),
        e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
      ] }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: c.nodes.map((m) => {
        const g = h(m), y = e.dragging === m.id, s = e.selectedNodes.has(m.id);
        return /* @__PURE__ */ S("div", { onClick: (p) => e.handleNodeClick(p, m.id), onDoubleClick: (p) => e.handleNodeDoubleClick(p, m.id, m.label), onContextMenu: (p) => e.handleNodeContextMenu(p, m.id), onMouseDown: (p) => e.handleNodeMouseDown(p, m.id, g.x, g.y), onTouchStart: (p) => e.handleNodeTouchStart(p, m.id, g.x, g.y), style: { position: "absolute", left: g.x, top: g.y, width: 180, background: At(m.color, r), border: r ? `2px solid ${ye.stroke}` : `2px solid ${s ? v.blue : m.color}`, borderRadius: 12, padding: "10px 8px", textAlign: "center", cursor: y ? "grabbing" : "grab", boxShadow: Qe(m.color, y, s, r), transition: y ? "none" : "box-shadow 0.2s", touchAction: "none", overflow: "hidden", fontFamily: nn(r) }, children: [
          e.editingNode === m.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (p) => e.setEditingValue(p), onFinish: d, style: { fontSize: r ? "1.1rem" : "0.95rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1.1rem" : "0.95rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary }, children: m.label }),
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
  const { participants: n, messages: o, fragments: a = [], notes: e = [] } = i, c = Pe({ x: 30, y: 20 }), h = (y) => c.getNodePosition(y.id, y.x, 0), d = 60, u = 110, f = ge(() => {
    if (!n || n.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const y = n.map((s) => s.x);
    return { x: Math.min(...y) - 60, y: 0, width: Math.max(...y) - Math.min(...y) + 200, height: 85 + o.length * d + 80 };
  }, [n, o]), m = (y) => u + y * d, g = {
    loop: v.blue,
    alt: v.orange,
    opt: v.green
  };
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: c.canvasRef, className: "canvas-bg", onMouseDown: c.handleCanvasMouseDown, onMouseMove: c.handleMouseMove, onMouseUp: c.handleMouseUp, onMouseLeave: c.handleMouseUp, onTouchStart: c.handleTouchStart, onTouchMove: c.handleTouchMove, onTouchEnd: c.handleTouchEnd, onWheel: c.handleWheel, style: { width: "100%", height: "100%", cursor: c.isPanning || c.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute" }, children: /* @__PURE__ */ S("g", { transform: `translate(${c.pan.x}, ${c.pan.y}) scale(${c.zoom})`, children: [
      a.map((y, s) => {
        if (!y || y.startIndex === void 0) return null;
        const p = g[y.type] || v.purple, x = o.filter(
          (I) => I.index >= y.startIndex && I.index < (y.endIndex || y.startIndex + 1)
        );
        if (x.length === 0) return null;
        const b = /* @__PURE__ */ new Set();
        x.forEach((I) => {
          b.add(I.from), b.add(I.to);
        });
        const C = n.filter((I) => b.has(I.id));
        if (C.length === 0) return null;
        const w = C.map((I) => h(I).x), $ = Math.min(...w) - 10, k = Math.max(...w) + 130, M = Math.min(...x.map((I) => I.index)), E = Math.max(...x.map((I) => I.index)), R = m(M) - 35, T = (E - M + 1) * d + 25;
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l(
            "rect",
            {
              x: $,
              y: R,
              width: k - $,
              height: T,
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
              x: $,
              y: R,
              width: 50,
              height: 18,
              fill: p,
              rx: 4
            }
          ),
          /* @__PURE__ */ l(
            "text",
            {
              x: $ + 25,
              y: R + 13,
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
              x: $ + 55,
              y: R + 13,
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
        ] }, `frag-${s}`);
      }),
      n.map((y, s) => {
        const p = h(y);
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("line", { x1: p.x + 60, y1: 85, x2: p.x + 60, y2: 85 + o.length * d + 40, stroke: v.purple, strokeWidth: 2, strokeDasharray: "4,4", opacity: 0.4 }),
          /* @__PURE__ */ S("defs", { children: [
            /* @__PURE__ */ S("linearGradient", { id: `seq-grad-${s}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ l("stop", { offset: "0%", stopColor: de[s % de.length], stopOpacity: "0.35" }),
              /* @__PURE__ */ l("stop", { offset: "100%", stopColor: de[s % de.length], stopOpacity: "0.12" })
            ] }),
            /* @__PURE__ */ l("filter", { id: `seq-shadow-${s}`, x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ l("feDropShadow", { dx: "0", dy: "4", stdDeviation: "8", floodColor: de[s % de.length], floodOpacity: "0.3" }) })
          ] }),
          /* @__PURE__ */ l("rect", { x: p.x, y: 30, width: 120, height: 45, rx: 8, fill: `url(#seq-grad-${s})`, stroke: de[s % de.length], strokeWidth: 2, filter: `url(#seq-shadow-${s})`, style: { cursor: c.dragging === y.id ? "grabbing" : "grab", touchAction: "none" }, onMouseDown: (x) => {
            x.stopPropagation(), c.handleNodeMouseDown(x, y.id, p.x, 0);
          }, onTouchStart: (x) => {
            x.stopPropagation(), c.handleNodeTouchStart(x, y.id, p.x, 0);
          } }),
          /* @__PURE__ */ l("text", { x: p.x + 60, y: 58, textAnchor: "middle", fill: t.textPrimary, fontSize: 13, fontWeight: 600, style: { pointerEvents: "none" }, children: y.label })
        ] }, y.id);
      }),
      o.map((y, s) => {
        const p = n.find((R) => R.id === y.from), x = n.find((R) => R.id === y.to);
        if (!p || !x) return null;
        const b = h(p), C = h(x), w = m(s), $ = b.x + 60, k = C.x + 60, M = y.isReturn ? t.textSecondary : v.purple;
        return y.from === y.to ? /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: `seq-arr-${s}`, markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: M }) }) }),
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${$} ${w} L ${$ + 40} ${w} L ${$ + 40} ${w + 30} L ${$ + 8} ${w + 30}`,
              stroke: M,
              strokeWidth: 2,
              fill: "none",
              markerEnd: `url(#seq-arr-${s})`
            }
          ),
          /* @__PURE__ */ l("rect", { x: $ + 40 + 5, y: w - 10, width: Math.max(80, y.label.length * 6), height: 18, rx: 4, fill: "rgba(0,0,0,0.85)" }),
          /* @__PURE__ */ l("text", { x: $ + 40 + 10, y: w + 3, fill: M, fontSize: 11, children: y.label })
        ] }, `msg-${s}`) : /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: `seq-arr-${s}`, markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: M }) }) }),
          /* @__PURE__ */ l("line", { x1: $, y1: w, x2: k - ($ < k ? 8 : -8), y2: w, stroke: M, strokeWidth: 6, strokeOpacity: 0.1, strokeLinecap: "round" }),
          /* @__PURE__ */ l("line", { x1: $, y1: w, x2: k - ($ < k ? 8 : -8), y2: w, stroke: M, strokeWidth: 4, strokeOpacity: 0.2, strokeLinecap: "round" }),
          /* @__PURE__ */ l("line", { x1: $, y1: w, x2: k - ($ < k ? 8 : -8), y2: w, stroke: M, strokeWidth: 2.5, strokeDasharray: y.isReturn ? "6,4" : null, markerEnd: `url(#seq-arr-${s})` }),
          /* @__PURE__ */ l("rect", { x: Math.min($, k) + Math.abs(k - $) / 2 - 50, y: w - 20, width: 100, height: 18, rx: 4, fill: "rgba(0,0,0,0.85)" }),
          /* @__PURE__ */ l("text", { x: Math.min($, k) + Math.abs(k - $) / 2, y: w - 7, textAnchor: "middle", fill: M, fontSize: 11, children: y.label })
        ] }, `msg-${s}`);
      }),
      e.map((y, s) => {
        const p = n.find(($) => $.id === y.participantId);
        if (!p) return null;
        const x = h(p), b = m(y.atMessageIndex) - 15, C = y.position === "right" ? x.x + 130 : x.x - 110, w = Math.max(100, y.text.length * 6 + 20);
        return /* @__PURE__ */ S("g", { children: [
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${C} ${b} L ${C + w - 10} ${b} L ${C + w} ${b + 10} L ${C + w} ${b + 40} L ${C} ${b + 40} Z`,
              fill: "#fef3c7",
              stroke: "#f59e0b",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ l(
            "path",
            {
              d: `M ${C + w - 10} ${b} L ${C + w - 10} ${b + 10} L ${C + w} ${b + 10}`,
              fill: "#fde68a",
              stroke: "#f59e0b",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ l(
            "text",
            {
              x: C + 8,
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
function Z2({ events: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const n = Pe({ x: 30, y: 0 }), o = (e) => n.getNodePosition(e.id, e.x, e.y), a = ge(() => {
    if (!i || i.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const e = i.map((c) => c.x);
    return { x: Math.min(...e) - 60, y: 0, width: Math.max(...e) - Math.min(...e) + 280, height: 350 };
  }, [i]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: n.canvasRef, className: "canvas-bg", onMouseDown: n.handleCanvasMouseDown, onMouseMove: n.handleMouseMove, onMouseUp: n.handleMouseUp, onMouseLeave: n.handleMouseUp, onTouchStart: n.handleTouchStart, onTouchMove: n.handleTouchMove, onTouchEnd: n.handleTouchEnd, onWheel: n.handleWheel, style: { width: "100%", height: "100%", cursor: n.isPanning || n.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`, transformOrigin: "0 0", padding: "80px 50px" }, children: [
      /* @__PURE__ */ l("div", { style: { position: "absolute", top: 265, left: 50, width: i.length * 220, height: 4, background: `linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.green})`, borderRadius: 2 } }),
      i.map((e, c) => {
        const h = o(e), d = e.isMilestone ? v.orange : v.purple, u = n.dragging === e.id;
        return /* @__PURE__ */ S("div", { onMouseDown: (f) => n.handleNodeMouseDown(f, e.id, h.x, h.y), onTouchStart: (f) => n.handleNodeTouchStart(f, e.id, h.x, h.y), style: { position: "absolute", left: h.x, top: 80, width: 190, cursor: u ? "grabbing" : "grab", touchAction: "none" }, children: [
          /* @__PURE__ */ S("div", { style: { background: e.isMilestone ? `linear-gradient(135deg, ${v.orange}35, ${v.orange}12)` : At(d), border: `2px solid ${d}`, borderRadius: 12, padding: 16, textAlign: "center", minHeight: 110, boxShadow: Qe(d, u, !1), transition: u ? "none" : "box-shadow 0.2s" }, children: [
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
function Q2({ data: i, theme: t = we.dark, sketchMode: r = !1 }) {
  const { commits: n, branches: o } = i, a = Pe({ x: 20, y: 20 }), e = (d) => a.getNodePosition(d.id, d.x, d.y), c = ge(() => {
    if (!n || n.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const d = n.map((f) => f.x), u = n.map((f) => f.y);
    return { x: Math.min(...d) - 100, y: Math.min(...u) - 60, width: Math.max(...d) - Math.min(...d) + 200, height: Math.max(...u) - Math.min(...u) + 120 };
  }, [n]), h = ge(() => {
    const d = [];
    return o.forEach((u, f) => {
      const m = n.filter((g) => g.branch === u.name).sort((g, y) => g.index - y.index);
      for (let g = 0; g < m.length - 1; g++) d.push({ type: "seq", from: m[g], to: m[g + 1], color: de[f % de.length] });
      if (u.parentBranch) {
        o.findIndex((p) => p.name === u.parentBranch);
        const g = n.filter((p) => p.branch === u.parentBranch), y = g.find((p) => p.index === u.branchPoint - 1) || g[g.length - 1], s = m[0];
        y && s && d.push({ type: "branch", from: y, to: s, color: de[f % de.length] });
      }
    }), n.filter((u) => u.isMerge && u.mergeFrom).forEach((u) => {
      const f = o.findIndex((g) => g.name === u.mergeFrom), m = n.filter((g) => g.branch === u.mergeFrom).sort((g, y) => y.index - g.index)[0];
      m && d.push({ type: "merge", from: m, to: u, color: de[f % de.length] });
    }), d;
  }, [n, o]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("div", { ref: a.canvasRef, className: "canvas-bg", onMouseDown: a.handleCanvasMouseDown, onMouseMove: a.handleMouseMove, onMouseUp: a.handleMouseUp, onMouseLeave: a.handleMouseUp, onTouchStart: a.handleTouchStart, onTouchMove: a.handleTouchMove, onTouchEnd: a.handleTouchEnd, onWheel: a.handleWheel, style: { width: "100%", height: "100%", cursor: a.isPanning || a.dragging ? "grabbing" : "grab", touchAction: "none" }, children: /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute" }, children: /* @__PURE__ */ S("g", { transform: `translate(${a.pan.x}, ${a.pan.y}) scale(${a.zoom})`, children: [
      o.map((d, u) => /* @__PURE__ */ l("text", { x: 30, y: d.y + 5, fill: de[u % de.length], fontSize: 14, fontWeight: 700, children: d.name }, d.name)),
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
        const u = e(d), f = o.findIndex((g) => g.name === d.branch), m = a.dragging === d.id;
        return /* @__PURE__ */ S("g", { style: { cursor: m ? "grabbing" : "grab", touchAction: "none" }, onMouseDown: (g) => {
          g.stopPropagation(), a.handleNodeMouseDown(g, d.id, u.x, u.y);
        }, onTouchStart: (g) => {
          g.stopPropagation(), a.handleNodeTouchStart(g, d.id, u.x, u.y);
        }, children: [
          /* @__PURE__ */ l("circle", { cx: u.x, cy: u.y, r: d.isMerge ? 14 : 12, fill: de[f % de.length], stroke: m ? "#fff" : t.canvasBg, strokeWidth: m ? 4 : 3 }),
          d.isMerge && /* @__PURE__ */ l("circle", { cx: u.x, cy: u.y, r: 6, fill: t.canvasBg }),
          /* @__PURE__ */ l("text", { x: u.x, y: u.y - 22, textAnchor: "middle", fill: t.textPrimary, fontSize: 12, fontWeight: 600, children: d.label })
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
    const h = e.value / n * 100, d = e.value / n * 360, u = o;
    o += d;
    const f = 200 + 120 * Math.cos(u * Math.PI / 180), m = 200 + 120 * Math.sin(u * Math.PI / 180), g = 200 + 120 * Math.cos((u + d) * Math.PI / 180), y = 200 + 120 * Math.sin((u + d) * Math.PI / 180), s = 200 + 150 * Math.cos((u + d / 2) * Math.PI / 180), p = 200 + 150 * Math.sin((u + d / 2) * Math.PI / 180);
    return { ...e, pct: h, path: `M 200 200 L ${f} ${m} A 120 120 0 ${d > 180 ? 1 : 0} 1 ${g} ${y} Z`, color: de[c % de.length], lx: s, ly: p };
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
  const { config: n, points: o } = i, a = Pe({ x: 50, y: 20 }), e = 400, c = 60, h = e - c * 2, d = (u) => a.getNodePosition(u.id, c + u.x / 100 * h + 50, c + h - u.y / 100 * h);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}` }, children: [
    /* @__PURE__ */ l("div", { ref: a.canvasRef, className: "canvas-bg", onMouseDown: a.handleCanvasMouseDown, onMouseMove: a.handleMouseMove, onMouseUp: a.handleMouseUp, onMouseLeave: a.handleMouseUp, onWheel: a.handleWheel, style: { width: "100%", height: "100%", cursor: a.isPanning || a.dragging ? "grabbing" : "grab", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ S("svg", { width: e + 100, height: e, viewBox: `0 0 ${e + 100} ${e}`, style: { transform: `translate(${a.pan.x - 50}px, ${a.pan.y - 20}px) scale(${a.zoom})`, transformOrigin: "center" }, children: [
      n.title && /* @__PURE__ */ l("text", { x: e / 2 + 50, y: 30, textAnchor: "middle", fill: t.textPrimary, fontSize: 16, fontWeight: 700, children: n.title }),
      /* @__PURE__ */ l("rect", { x: c + 50, y: c, width: h / 2, height: h / 2, fill: v.green + "15" }),
      /* @__PURE__ */ l("rect", { x: c + h / 2 + 50, y: c, width: h / 2, height: h / 2, fill: v.blue + "15" }),
      /* @__PURE__ */ l("rect", { x: c + 50, y: c + h / 2, width: h / 2, height: h / 2, fill: v.orange + "15" }),
      /* @__PURE__ */ l("rect", { x: c + h / 2 + 50, y: c + h / 2, width: h / 2, height: h / 2, fill: v.red + "15" }),
      /* @__PURE__ */ l("line", { x1: c + 50, y1: c + h / 2, x2: c + h + 50, y2: c + h / 2, stroke: t.border, strokeWidth: 2 }),
      /* @__PURE__ */ l("line", { x1: c + h / 2 + 50, y1: c, x2: c + h / 2 + 50, y2: c + h, stroke: t.border, strokeWidth: 2 }),
      n.quadrants.map((u, f) => {
        const m = [{ x: c + h / 4 + 50, y: c + h / 4 }, { x: c + h * 3 / 4 + 50, y: c + h / 4 }, { x: c + h / 4 + 50, y: c + h * 3 / 4 }, { x: c + h * 3 / 4 + 50, y: c + h * 3 / 4 }];
        return u && /* @__PURE__ */ l("text", { x: m[f].x, y: m[f].y, textAnchor: "middle", fill: t.textSecondary, fontSize: 11, children: u }, f);
      }),
      n.xLabel && /* @__PURE__ */ l("text", { x: e / 2 + 50, y: e - 10, textAnchor: "middle", fill: t.textSecondary, fontSize: 12, children: n.xLabel }),
      n.yLabel && /* @__PURE__ */ l("text", { x: 20, y: e / 2, textAnchor: "middle", fill: t.textSecondary, fontSize: 12, transform: `rotate(-90, 20, ${e / 2})`, children: n.yLabel }),
      o.map((u, f) => {
        const m = d(u), g = a.dragging === u.id;
        return /* @__PURE__ */ S("g", { style: { cursor: g ? "grabbing" : "grab" }, onMouseDown: (y) => {
          y.stopPropagation(), a.handleNodeMouseDown(y, u.id, m.x, m.y);
        }, children: [
          /* @__PURE__ */ l("circle", { cx: m.x, cy: m.y, r: 12, fill: de[f % de.length], stroke: g ? "#fff" : "none", strokeWidth: 3 }),
          /* @__PURE__ */ l("text", { x: m.x, y: m.y - 18, textAnchor: "middle", fill: t.textPrimary, fontSize: 11, children: u.label })
        ] }, f);
      })
    ] }) }),
    /* @__PURE__ */ l(De, { onZoomIn: () => a.setZoom((u) => Math.min(u * 1.2, 2)), onZoomOut: () => a.setZoom((u) => Math.max(u * 0.8, 0.3)), onFit: () => {
    }, onReset: a.resetView, zoom: a.zoom })
  ] });
}
function rw({ data: i, theme: t = we.dark, sketchMode: r = !1, onLabelChange: n, onDeleteNodes: o, onPasteNodes: a }) {
  const e = Pe({ x: 30, y: 30 }), c = { cloud: { color: v.sky, icon: "☁️" }, cluster: { color: v.teal, icon: "🌐" }, container: { color: v.cyan, icon: "📦" }, database: { color: v.green, icon: "🗄️" }, storage: { color: v.emerald, icon: "💾" }, device: { color: v.pink, icon: "📱" }, server: { color: v.violet, icon: "🖧" }, component: { color: v.purple, icon: "⚙️" } }, h = ge(() => {
    const g = i.nodes, y = [], s = (w) => g.filter(($) => $.parentId === w), p = (w) => {
      const $ = s(w);
      return $.length === 0 ? 70 : 60 + $.reduce((k, M) => k + p(M.id) + 15, 0);
    }, x = (w, $, k, M) => {
      const E = c[w.type] || c.component, R = s(w.id), T = p(w.id);
      y.push({ ...w, defaultX: $, defaultY: k, width: 220, height: T, level: M, ...E, hasChildren: R.length > 0 });
      let I = k + 55;
      R.forEach((B) => {
        x(B, $ + 20, I, M + 1), I += p(B.id) + 15;
      });
    }, b = g.filter((w) => !w.parentId);
    let C = 40;
    return b.forEach((w) => {
      x(w, C, 40, 0), C += 280;
    }), { nodes: y.sort((w, $) => w.level - $.level) };
  }, [i]), d = (g) => e.getNodePosition(g.id, g.defaultX, g.defaultY), u = V(() => {
    const g = e.finishEditing();
    if (g.nodeId && g.newValue !== void 0 && n) {
      const y = h.nodes.find((s) => s.id === g.nodeId);
      y && y.label !== g.newValue && n(g.nodeId, y.label, g.newValue);
    }
  }, [e, h.nodes, n]);
  se(() => {
    const g = (y) => {
      const p = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? y.metaKey : y.ctrlKey;
      if (!e.editingNode) {
        if ((y.key === "Delete" || y.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          y.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (p && y.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          y.preventDefault(), e.copySelectedNodes(h.nodes);
          return;
        }
        if (p && y.key.toLowerCase() === "v" && e.clipboard && a) {
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
  const f = V((g) => {
    (g.target === e.canvasRef.current || g.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), m = ge(() => {
    if (!h.nodes || h.nodes.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const g = h.nodes.map((p) => p.defaultX), y = h.nodes.map((p) => p.defaultY), s = h.nodes.map((p) => p.height || 70);
    return { x: Math.min(...g) - 60, y: Math.min(...y) - 60, width: Math.max(...g) - Math.min(...g) + 300, height: Math.max(...y.map((p, x) => p + s[x])) - Math.min(...y) + 120 };
  }, [h]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: f, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ l("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: /* @__PURE__ */ l("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" }) }) }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: h.nodes.map((g) => {
        const y = d(g), s = e.dragging === g.id, p = e.selectedNodes.has(g.id);
        return /* @__PURE__ */ l("div", { onClick: (x) => e.handleNodeClick(x, g.id), onDoubleClick: (x) => e.handleNodeDoubleClick(x, g.id, g.label), onContextMenu: (x) => e.handleNodeContextMenu(x, g.id), onMouseDown: (x) => e.handleNodeMouseDown(x, g.id, y.x, y.y), onTouchStart: (x) => e.handleNodeTouchStart(x, g.id, y.x, y.y), style: { position: "absolute", left: y.x, top: y.y, width: g.width, height: g.height, background: `${g.color}10`, border: `2px ${g.level === 0 ? "solid" : "dashed"} ${p ? v.blue : g.color}`, borderRadius: 12, boxSizing: "border-box", cursor: s ? "grabbing" : "grab", boxShadow: p ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : s ? `0 0 30px ${g.color}40` : "none", transition: s ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderBottom: g.hasChildren ? `1px solid ${g.color}30` : "none" }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.3rem" }, children: g.icon }),
          e.editingNode === g.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (x) => e.setEditingValue(x), onFinish: u, style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary }, children: g.label }),
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
  const { elements: n, totalHeight: o } = i, a = (s, p = {}) => !s || !s.includes("**") && !s.includes("~~") && !s.includes("{badge:") && !s.includes("{tag:") ? s : s.split(/(\*\*[^*]+\*\*|~~[^~]+~~|\{(?:badge|tag):[^}]+\})/gi).map((b, C) => {
    if (b.startsWith("**") && b.endsWith("**"))
      return /* @__PURE__ */ l("strong", { style: { fontWeight: 700, ...p }, children: b.slice(2, -2) }, C);
    if (b.startsWith("~~") && b.endsWith("~~"))
      return /* @__PURE__ */ l("span", { style: { textDecoration: "line-through", opacity: 0.6 }, children: b.slice(2, -2) }, C);
    const w = b.match(/^\{(?:badge|tag):([^}]+)\}$/i);
    if (w) {
      const $ = w[1], k = $.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i), M = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber }, E = k ? k[1].toLowerCase() : null, R = k ? k[2] : $, T = M[E] || v.red;
      return /* @__PURE__ */ l("span", { style: { display: "inline-flex", padding: "2px 8px", background: `${T}25`, border: `1px solid ${T}`, borderRadius: 10, color: T, fontSize: "0.7rem", fontWeight: 600, marginRight: 6 }, children: R }, C);
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
  }, d = e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)", u = e ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)", f = e ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.2)", m = e ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.3)", g = {
    low: e ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)",
    medium: e ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
    high: e ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
    elevated: e ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
    prominent: e ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)",
    overlay: e ? "rgba(255,255,255,0.95)" : "rgba(30,30,40,0.95)",
    code: e ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.4)"
  }, y = (s) => {
    var x, b;
    const p = { position: "absolute", left: s.x, top: s.y, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
    switch (s.type) {
      case "window":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: e ? "linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)" : "linear-gradient(180deg, #2d3748 0%, #1a202c 100%)", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", padding: "0 16px", boxShadow: h.lg, border: `1px solid ${d}` }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 8, marginRight: 16 }, children: [
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #ff6b6b, #ee5a5a)", boxShadow: "0 2px 4px rgba(238,90,90,0.4)" } }),
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #ffd93d, #f0c419)", boxShadow: "0 2px 4px rgba(240,196,25,0.4)" } }),
            /* @__PURE__ */ l("div", { style: { width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #6bcf63, #4ade80)", boxShadow: "0 2px 4px rgba(74,222,128,0.4)" } })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }, children: a(s.label) })
        ] }, s.id);
      case "card":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, ...c.light, border: `1px solid ${d}`, borderRadius: 16, boxShadow: `${h.md}, ${h.inset}` }, children: s.label && /* @__PURE__ */ l("div", { style: { padding: "14px 18px", borderBottom: `1px solid ${u}`, background: e ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)" : "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)", borderRadius: "16px 16px 0 0", fontWeight: 600, color: t.textPrimary, fontSize: "0.9rem", letterSpacing: "-0.01em" }, children: a(s.label) }) }, s.id);
      case "modal":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, ...c.medium, border: `1px solid ${d}`, borderRadius: 20, boxShadow: h.xl }, children: [
          /* @__PURE__ */ S("div", { style: { padding: "18px 24px", borderBottom: `1px solid ${u}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: e ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)" : "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)", borderRadius: "20px 20px 0 0" }, children: [
            /* @__PURE__ */ l("span", { style: { fontWeight: 700, color: t.textPrimary, fontSize: "1rem", letterSpacing: "-0.02em" }, children: a(s.label) }),
            /* @__PURE__ */ l("div", { style: { width: 28, height: 28, borderRadius: 8, background: e ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "1rem", lineHeight: 1 }, children: "×" }) })
          ] }),
          /* @__PURE__ */ l("div", { style: { padding: 24, color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.6 }, children: "Modal content area..." })
        ] }, s.id);
      case "navbar":
        const C = s.items[0] && /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(s.items[0]);
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, ...c.dark, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 20px", gap: 24, boxShadow: h.md, border: `1px solid ${u}` }, children: [
          !C && /* @__PURE__ */ l("span", { style: { fontWeight: 800, color: t.textPrimary, fontSize: "1.1rem", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: "◆" }),
          s.items.map((j, A) => {
            const O = j.match(/^\[(.+)\]$/), _ = j.match(/^\((@?\w+)\)$/);
            return O ? /* @__PURE__ */ l("button", { style: { padding: "8px 18px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, color: "#fff", border: "none", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: h.glow(v.purple), transition: "transform 0.2s, box-shadow 0.2s" }, children: O[1] }, A) : _ ? /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}40, ${v.blue}40)`, border: `2px solid ${v.purple}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 600, color: v.purple }, children: _[1].slice(0, 2).toUpperCase() }, A) : /* @__PURE__ */ l("span", { style: { color: A === 0 ? v.purple : t.textSecondary, fontSize: "0.9rem", fontWeight: A === 0 ? 600 : 500, transition: "color 0.2s" }, children: j }, A);
          })
        ] }, s.id);
      case "tabs":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, display: "flex", gap: 4, background: g.medium, padding: 4, borderRadius: 12, border: `1px solid ${u}` }, children: s.items.map((j, A) => /* @__PURE__ */ l("div", { style: { padding: "10px 20px", color: A === s.activeIndex ? "#fff" : t.textSecondary, background: A === s.activeIndex ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : "transparent", borderRadius: 8, fontSize: "0.85rem", fontWeight: A === s.activeIndex ? 600 : 500, boxShadow: A === s.activeIndex ? h.glow(v.purple) : "none", transition: "all 0.2s" }, children: j }, A)) }, s.id);
      case "breadcrumbs":
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: s.items.map((j, A) => /* @__PURE__ */ S(Fc.Fragment, { children: [
          /* @__PURE__ */ l("span", { style: { color: A === s.items.length - 1 ? t.textPrimary : v.purple, fontSize: "0.85rem", fontWeight: A === s.items.length - 1 ? 600 : 400 }, children: j }),
          A < s.items.length - 1 && /* @__PURE__ */ l("span", { style: { color: t.textMuted, opacity: 0.5 }, children: "›" })
        ] }, A)) }, s.id);
      case "search":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, ...c.light, border: `1px solid ${d}`, borderRadius: 12, display: "flex", alignItems: "center", padding: "0 18px", gap: 12, boxShadow: h.sm }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1rem", opacity: 0.7 }, children: "🔍" }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: s.label })
        ] }, s.id);
      case "toolbar":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }, children: s.items.map((j, A) => {
          if (j.type === "search")
            return /* @__PURE__ */ S("div", { style: { flex: 1, minWidth: 150, height: 38, ...c.light, border: `1px solid ${d}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 14px", gap: 10, boxShadow: h.sm }, children: [
              /* @__PURE__ */ l("span", { style: { fontSize: "0.9rem", opacity: 0.7 }, children: "🔍" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: j.label })
            ] }, A);
          if (j.type === "dropdown")
            return /* @__PURE__ */ S("div", { style: { height: 38, ...c.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 14px", gap: 8, boxShadow: h.sm }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem", fontWeight: 500 }, children: j.label }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.65rem" }, children: "▼" })
            ] }, A);
          const O = j.variant === "primary";
          return /* @__PURE__ */ l("button", { style: { height: 38, padding: "0 16px", background: O ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : "transparent", color: O ? "#fff" : t.textPrimary, border: O ? "none" : `1px solid ${f}`, borderRadius: 10, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: O ? h.glow(v.purple) : h.sm, display: "flex", alignItems: "center", gap: 6 }, children: j.label }, A);
        }) }, s.id);
      case "dropdown":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, ...c.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", boxShadow: h.sm }, children: [
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: s.label }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "▼" })
        ] }, s.id);
      case "toggle":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 14 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 52, height: 28, borderRadius: 14, background: s.enabled ? `linear-gradient(135deg, ${v.green}, #22c55e)` : g.prominent, position: "relative", boxShadow: s.enabled ? h.glow(v.green) : h.sm, transition: "all 0.3s" }, children: /* @__PURE__ */ l("div", { style: { position: "absolute", top: 3, left: s.enabled ? 27 : 3, width: 22, height: 22, borderRadius: "50%", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)" } }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: s.label })
        ] }, s.id);
      case "radio":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 22, height: 22, borderRadius: "50%", border: `2px solid ${s.selected ? v.purple : m}`, display: "flex", alignItems: "center", justifyContent: "center", background: s.selected ? `${v.purple}15` : "transparent", boxShadow: s.selected ? h.glow(v.purple) : "none", transition: "all 0.2s" }, children: s.selected && /* @__PURE__ */ l("div", { style: { width: 10, height: 10, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})` } }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.9rem", fontWeight: 500 }, children: s.label })
        ] }, s.id);
      case "slider":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width }, children: [
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
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width }, children: /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 10, background: g.prominent, borderRadius: 5, overflow: "hidden", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)" }, children: /* @__PURE__ */ l("div", { style: { height: "100%", width: `${s.value}%`, background: `linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.cyan})`, borderRadius: 5, boxShadow: h.glow(v.purple) } }) }),
          /* @__PURE__ */ l("span", { style: { fontSize: "0.8rem", color: t.textSecondary, fontWeight: 600, whiteSpace: "nowrap" }, children: s.label || `${s.value}%` })
        ] }) }, s.id);
      case "avatar":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 14 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.2rem", boxShadow: h.glow(v.purple), border: "3px solid rgba(255,255,255,0.2)" }, children: s.label ? s.label.charAt(0).toUpperCase() : "👤" }),
          s.label && /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 600 }, children: s.label })
        ] }, s.id);
      case "avatar-group":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex" }, children: [
          Array.from({ length: Math.min(s.count, 5) }).map((j, A) => /* @__PURE__ */ l("div", { style: { width: 36, height: 36, borderRadius: "50%", background: de[A % de.length], border: `2px solid ${e ? "#fff" : "#1a1a2e"}`, marginLeft: A > 0 ? -12 : 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 600 }, children: String.fromCharCode(65 + A) }, A)),
          s.count > 5 && /* @__PURE__ */ S("div", { style: { width: 36, height: 36, borderRadius: "50%", background: g.prominent, border: `2px solid ${e ? "#fff" : "#1a1a2e"}`, marginLeft: -12, display: "flex", alignItems: "center", justifyContent: "center", color: t.textSecondary, fontSize: "0.7rem" }, children: [
            "+",
            s.count - 5
          ] })
        ] }, s.id);
      case "image":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.high, border: `2px dashed ${f}`, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "2rem" }, children: "🖼️" }),
          s.label && /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.label })
        ] }, s.id);
      case "video":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: e ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.3)", border: `2px dashed ${f}`, borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 60, height: 60, borderRadius: "50%", background: g.prominent, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ l("span", { style: { fontSize: "1.5rem", marginLeft: 4, color: t.textPrimary }, children: "▶" }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.label || "Video" })
        ] }, s.id);
      case "map":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: "rgba(20,184,166,0.1)", border: "2px dashed rgba(20,184,166,0.3)", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "2.5rem" }, children: "📍" }),
          /* @__PURE__ */ l("span", { style: { color: v.teal, fontSize: "0.8rem" }, children: s.label || "Map" })
        ] }, s.id);
      case "chart":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 8, padding: 16 }, children: /* @__PURE__ */ l("div", { style: { height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-around", gap: 8 }, children: [60, 85, 45, 90, 55, 70].map((j, A) => /* @__PURE__ */ l("div", { style: { width: "12%", height: `${j}%`, background: `linear-gradient(180deg, ${de[A % de.length]}, ${de[A % de.length]}88)`, borderRadius: "4px 4px 0 0" } }, A)) }) }, s.id);
      case "calendar":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 8, padding: 12 }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted }, children: "‹" }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.85rem" }, children: "December 2024" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted }, children: "›" })
          ] }),
          /* @__PURE__ */ S("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, textAlign: "center" }, children: [
            ["S", "M", "T", "W", "T", "F", "S"].map((j, A) => /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.7rem", padding: 4 }, children: j }, A)),
            Array.from({ length: 35 }).map((j, A) => {
              const O = A - 5, _ = O === 15;
              return /* @__PURE__ */ l("div", { style: { padding: 6, fontSize: "0.75rem", color: O < 1 || O > 31 ? "transparent" : _ ? "#fff" : t.textSecondary, background: _ ? v.purple : "transparent", borderRadius: "50%" }, children: O < 1 || O > 31 ? "" : O }, A);
            })
          ] })
        ] }, s.id);
      case "table-row":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, display: "flex", borderBottom: `1px solid ${u}`, background: s.isHeader ? g.high : "transparent" }, children: s.cells.map((j, A) => /* @__PURE__ */ l("div", { style: { flex: 1, padding: "8px 12px", color: s.isHeader ? t.textPrimary : t.textSecondary, fontSize: "0.8rem", fontWeight: s.isHeader ? 600 : 400, borderRight: A < s.cells.length - 1 ? `1px solid ${u}` : "none" }, children: j }, A)) }, s.id);
      case "list-item":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { color: v.purple }, children: "•" }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "list-item-numbered":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ S("span", { style: { color: v.purple, fontWeight: 600, minWidth: 20 }, children: [
            s.number,
            "."
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "badge":
        const $ = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber }[s.variant] || v.purple;
        return /* @__PURE__ */ l("div", { style: { ...p, display: "inline-flex", padding: "5px 12px", background: `linear-gradient(135deg, ${$}30, ${$}15)`, border: `1px solid ${$}50`, borderRadius: 20, color: $, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", boxShadow: `0 2px 8px ${$}25` }, children: s.label }, s.id);
      case "badge-group":
        const k = { success: v.green, warning: v.orange, error: v.red, info: v.blue, new: v.pink, beta: v.purple, pro: v.amber };
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", flexWrap: "wrap", gap: 8 }, children: s.badges.map((j, A) => {
          const O = k[j.variant] || v.purple;
          return /* @__PURE__ */ l("span", { style: { display: "inline-flex", padding: "5px 12px", background: `linear-gradient(135deg, ${O}30, ${O}15)`, border: `1px solid ${O}50`, borderRadius: 20, color: O, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", boxShadow: `0 2px 8px ${O}25` }, children: j.label }, A);
        }) }, s.id);
      case "alert":
        const M = { info: { color: v.blue, icon: "ℹ️" }, success: { color: v.green, icon: "✓" }, warning: { color: v.orange, icon: "⚠️" }, error: { color: v.red, icon: "✗" } }, E = M[s.variant] || M.info;
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, padding: "12px 16px", background: `${E.color}15`, border: `1px solid ${E.color}40`, borderRadius: 8, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.1rem" }, children: E.icon }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "stepper":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }, children: Array.from({ length: s.total }).map((j, A) => /* @__PURE__ */ S(Fc.Fragment, { children: [
          /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: "50%", background: A < s.current ? v.green : A === s.current - 1 ? v.purple : g.prominent, display: "flex", alignItems: "center", justifyContent: "center", color: A < s.current ? "#fff" : t.textSecondary, fontSize: "0.8rem", fontWeight: 600 }, children: A < s.current - 1 ? "✓" : A + 1 }),
          A < s.total - 1 && /* @__PURE__ */ l("div", { style: { width: 40, height: 2, background: A < s.current - 1 ? v.green : g.prominent } })
        ] }, A)) }, s.id);
      case "pagination":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 4 }, children: [
          /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer" }, children: "‹" }),
          Array.from({ length: Math.min(s.total, 5) }).map((j, A) => {
            const O = A + 1;
            return /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: O === s.current ? v.purple : g.prominent, border: "none", borderRadius: 6, color: O === s.current ? "#fff" : t.textSecondary, cursor: "pointer", fontSize: "0.8rem" }, children: O }, A);
          }),
          s.total > 5 && /* @__PURE__ */ l("span", { style: { color: t.textMuted, padding: "0 8px" }, children: "..." }),
          s.total > 5 && /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer", fontSize: "0.8rem" }, children: s.total }),
          /* @__PURE__ */ l("button", { style: { width: 32, height: 32, background: g.prominent, border: "none", borderRadius: 6, color: t.textSecondary, cursor: "pointer" }, children: "›" })
        ] }, s.id);
      case "skeleton":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, background: e ? "linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 75%)" : "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)", backgroundSize: "200% 100%", borderRadius: 4, animation: "shimmer 1.5s infinite" } }, s.id);
      case "textarea":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, background: g.elevated, border: `1px solid ${f}`, borderRadius: 8, padding: 12 }, children: /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem" }, children: s.label || "Enter text..." }) }, s.id);
      case "chat-message":
        const R = s.isUser ? v.blue : g.prominent, T = s.isUser ? "flex-end" : "flex-start", I = s.isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px";
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, display: "flex", flexDirection: "column", alignItems: T }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "0.7rem", color: t.textMuted, marginBottom: 4 }, children: s.sender }),
          /* @__PURE__ */ l("div", { style: { maxWidth: "75%", background: R, padding: "10px 14px", borderRadius: I }, children: /* @__PURE__ */ l("span", { style: { color: s.isUser ? "#fff" : t.textPrimary, fontSize: "0.85rem", lineHeight: 1.4 }, children: s.message }) })
        ] }, s.id);
      case "button":
        const B = {
          primary: { bg: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "transparent", color: "#fff", shadow: h.glow(v.purple) },
          secondary: { bg: g.elevated, border: f, color: t.textPrimary, shadow: h.sm },
          ghost: { bg: "transparent", border: "transparent", color: v.purple, shadow: "none" },
          danger: { bg: `linear-gradient(135deg, ${v.red}, #dc2626)`, border: "transparent", color: "#fff", shadow: h.glow(v.red) },
          success: { bg: `linear-gradient(135deg, ${v.green}, #22c55e)`, border: "transparent", color: "#fff", shadow: h.glow(v.green) }
        }, P = B[s.variant] || B.primary;
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, background: P.bg, border: `2px solid ${P.border}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: P.shadow, transition: "all 0.2s" }, children: /* @__PURE__ */ l("span", { style: { color: P.color, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "-0.01em" }, children: s.label }) }, s.id);
      case "icon-button":
        const L = { menu: "☰", close: "✕", settings: "⚙", user: "👤", search: "🔍", home: "🏠", edit: "✏️", delete: "🗑️", add: "+", more: "⋯" };
        return /* @__PURE__ */ l("div", { style: { ...p, width: 40, height: 40, background: g.prominent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }, children: /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: L[s.icon] || s.icon }) }, s.id);
      case "divider-label":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 1, background: d } }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: s.label }),
          /* @__PURE__ */ l("div", { style: { flex: 1, height: 1, background: d } })
        ] }, s.id);
      case "rating":
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", gap: 4 }, children: Array.from({ length: s.total }).map((j, A) => /* @__PURE__ */ l("span", { style: { color: A < s.filled ? v.amber : f, fontSize: "1.2rem" }, children: "★" }, A)) }, s.id);
      case "chip-group":
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", gap: 8, flexWrap: "wrap" }, children: s.tags.map((j, A) => /* @__PURE__ */ l("span", { style: { padding: "6px 12px", background: `${de[A % de.length]}20`, border: `1px solid ${de[A % de.length]}`, borderRadius: 16, color: de[A % de.length], fontSize: "0.8rem" }, children: j }, A)) }, s.id);
      case "tooltip":
        return /* @__PURE__ */ l("div", { style: { ...p, width: 20, height: 20, borderRadius: "50%", background: g.prominent, display: "flex", alignItems: "center", justifyContent: "center", color: t.textSecondary, fontSize: "0.75rem", fontWeight: 600 }, children: "?" }, s.id);
      case "button-row":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, display: "flex", gap: 10, flexWrap: "wrap" }, children: s.buttons.map((j, A) => /* @__PURE__ */ l("div", { style: { padding: "10px 16px", background: de[A % de.length], borderRadius: 8, color: "#fff", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }, children: j }, A)) }, s.id);
      case "feed-item":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }, children: [
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
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 10 }, children: [
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
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, display: "flex", alignItems: "center", gap: 20, padding: "8px 0" }, children: s.text.split(/\s{2,}/).map((j, A) => /* @__PURE__ */ l("span", { style: { color: A === 0 ? v.pink : t.textSecondary, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: 4 }, children: j }, A)) }, s.id);
      case "input":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, ...c.light, border: `1px solid ${f}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 16px", boxShadow: `${h.sm}, inset 0 1px 2px rgba(0,0,0,0.1)`, transition: "border-color 0.2s, box-shadow 0.2s" }, children: /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem", fontWeight: 400 }, children: s.label || "Enter text..." }) }, s.id);
      case "checkbox":
        return /* @__PURE__ */ S("div", { style: { ...p, display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 20, height: 20, border: `2px solid ${s.checked ? v.blue : m}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", background: s.checked ? v.blue : "transparent" }, children: s.checked && /* @__PURE__ */ l("span", { style: { color: "#fff", fontSize: "0.75rem" }, children: "✓" }) }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.85rem" }, children: s.label })
        ] }, s.id);
      case "separator":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, background: d } }, s.id);
      case "text":
        const F = {
          h1: { fontSize: "1.5rem", fontWeight: 800, color: t.textPrimary },
          h2: { fontSize: "1.2rem", fontWeight: 700, color: t.textPrimary },
          h3: { fontSize: "1rem", fontWeight: 600, color: t.textPrimary },
          bold: { fontSize: "0.9rem", fontWeight: 600, color: t.textPrimary },
          body: { fontSize: "0.9rem", fontWeight: 400, color: t.textSecondary }
        }, q = F[s.textType] || F.body;
        return /* @__PURE__ */ l("div", { style: { ...p, ...q }, children: a(s.label, { color: t.textPrimary }) }, s.id);
      case "hero":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: `linear-gradient(135deg, ${v.purple}20, ${v.blue}15, ${v.cyan}10)`, borderRadius: 16, padding: "48px 40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", border: `1px solid ${v.purple}30`, boxShadow: `0 8px 32px ${v.purple}15` }, children: [
          /* @__PURE__ */ l("h1", { style: { color: t.textPrimary, fontSize: "2.2rem", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.02em", background: `linear-gradient(135deg, ${t.textPrimary}, ${v.purple})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }, children: s.title || "Welcome to Our Platform" }),
          s.subtitle && /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.6, marginBottom: 28 }, children: s.subtitle }),
          s.cta && /* @__PURE__ */ l("button", { style: { padding: "14px 32px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 20px ${v.purple}50`, transform: "translateY(0)", transition: "all 0.2s" }, children: s.cta })
        ] }, s.id);
      case "pricing-card":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: s.featured ? `linear-gradient(135deg, ${v.purple}15, ${v.blue}10)` : g.low, border: `${s.featured ? 2 : 1}px solid ${s.featured ? v.purple : d}`, borderRadius: 16, padding: "28px 24px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }, children: [
          s.featured && /* @__PURE__ */ l("div", { style: { position: "absolute", top: 12, right: -32, background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "4px 40px", transform: "rotate(45deg)" }, children: "POPULAR" }),
          /* @__PURE__ */ S("div", { style: { marginBottom: 20 }, children: [
            /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }, children: s.plan || "Pro Plan" }),
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "baseline", gap: 4 }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "2.5rem", fontWeight: 800 }, children: s.price || "$29" }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: "/month" })
            ] })
          ] }),
          /* @__PURE__ */ l("div", { style: { flex: 1, borderTop: `1px solid ${u}`, paddingTop: 20 }, children: (s.features || ["Feature 1", "Feature 2", "Feature 3"]).map((j, A) => /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: t.textSecondary, fontSize: "0.9rem" }, children: [
            /* @__PURE__ */ l("span", { style: { color: v.green, fontSize: "1rem" }, children: "✓" }),
            j
          ] }, A)) }),
          /* @__PURE__ */ l("button", { style: { marginTop: 20, padding: "12px 20px", background: s.featured ? `linear-gradient(135deg, ${v.purple}, ${v.blue})` : g.prominent, border: s.featured ? "none" : `1px solid ${f}`, borderRadius: 10, color: s.featured ? "#fff" : t.textPrimary, fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: s.cta || "Get Started" })
        ] }, s.id);
      case "feature-card":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column", gap: 16, transition: "all 0.2s", boxShadow: h.md }, children: [
          /* @__PURE__ */ l("div", { style: { width: 56, height: 56, borderRadius: 14, background: `${v.purple}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }, children: s.icon || "🚀" }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.1rem", fontWeight: 700 }, children: s.title || "Feature Title" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.6 }, children: s.description || "Feature description goes here with more details about this amazing capability." })
        ] }, s.id);
      case "stat-widget":
        const Y = (x = s.trend) != null && x.startsWith("+") ? v.green : (b = s.trend) != null && b.startsWith("-") ? v.red : t.textMuted;
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 14, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem", fontWeight: 500 }, children: s.label || "Metric" }),
            s.trend && /* @__PURE__ */ l("span", { style: { color: Y, fontSize: "0.8rem", fontWeight: 600, padding: "3px 8px", background: `${Y}15`, borderRadius: 6 }, children: s.trend })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }, children: s.value || "1,234" }),
          /* @__PURE__ */ l("div", { style: { height: 32, display: "flex", alignItems: "flex-end", gap: 3, marginTop: 8 }, children: [40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((j, A) => /* @__PURE__ */ l("div", { style: { flex: 1, height: `${j}%`, background: `linear-gradient(180deg, ${v.purple}80, ${v.purple}40)`, borderRadius: 2 } }, A)) })
        ] }, s.id);
      case "login-form":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "36px 32px", display: "flex", flexDirection: "column", boxShadow: h.xl }, children: [
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
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "36px 32px", display: "flex", flexDirection: "column", boxShadow: h.xl }, children: [
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
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 14, padding: "18px 20px", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textSecondary, fontSize: "0.85rem", fontWeight: 500 }, children: s.title || "Widget" }),
            /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: s.icon || "📊" })
          ] }),
          /* @__PURE__ */ l("div", { style: { flex: 1, display: "flex", alignItems: "center" }, children: /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "1.8rem", fontWeight: 800 }, children: s.value || "0" }) })
        ] }, s.id);
      case "bottom-nav":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, height: s.height, background: g.overlay, borderRadius: "20px 20px 0 0", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 16px", boxShadow: e ? "0 -4px 20px rgba(0,0,0,0.1)" : "0 -4px 20px rgba(0,0,0,0.3)", backdropFilter: "blur(10px)" }, children: (s.items || ["🏠 Home", "🔍 Search", "➕", "❤️ Likes", "👤 Profile"]).map((j, A) => {
          const O = A === 0, [_, z] = j.includes(" ") ? j.split(" ", 2) : [j, ""];
          return /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 12px", cursor: "pointer" }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: _ === "➕" ? "1.8rem" : "1.3rem", opacity: O ? 1 : 0.6 }, children: _ }),
            z && /* @__PURE__ */ l("span", { style: { fontSize: "0.65rem", color: O ? v.purple : t.textMuted, fontWeight: O ? 600 : 400 }, children: z })
          ] }, A);
        }) }, s.id);
      case "app-bar":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.overlay, borderRadius: "0 0 16px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", boxShadow: h.md, backdropFilter: "blur(10px)" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12 }, children: [
            /* @__PURE__ */ l("span", { style: { fontSize: "1.3rem", cursor: "pointer", color: t.textPrimary }, children: "←" }),
            /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "1.1rem", fontWeight: 600 }, children: s.title || "Screen Title" })
          ] }),
          /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: (s.actions || ["🔔", "👤"]).map((j, A) => /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem", cursor: "pointer" }, children: j }, A)) })
        ] }, s.id);
      case "fab":
        return /* @__PURE__ */ l("div", { style: { ...p, width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: `0 6px 24px ${v.purple}50`, fontSize: "1.5rem", color: "#fff", fontWeight: 300 }, children: s.icon || "+" }, s.id);
      case "toast":
        const re = { success: v.green, error: v.red, warning: v.orange, info: v.blue }, ne = { success: "✓", error: "✗", warning: "⚠", info: "ℹ" }, te = re[s.variant] || v.blue;
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, minHeight: 52, background: g.overlay, border: `1px solid ${te}40`, borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: `${h.lg}, 0 0 0 1px ${te}20`, backdropFilter: "blur(10px)" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 28, height: 28, borderRadius: "50%", background: `${te}20`, display: "flex", alignItems: "center", justifyContent: "center", color: te, fontSize: "0.9rem", fontWeight: 700 }, children: ne[s.variant] || "ℹ" }),
          /* @__PURE__ */ l("span", { style: { flex: 1, color: t.textPrimary, fontSize: "0.9rem" }, children: s.message || "Notification message" }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "1rem", cursor: "pointer" }, children: "×" })
        ] }, s.id);
      case "empty-state":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `2px dashed ${d}`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: 20, background: g.high, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: "2.5rem" }, children: "📭" }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }, children: s.title || "No items yet" }),
          /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.9rem", maxWidth: 280, lineHeight: 1.5, marginBottom: 20 }, children: s.description || "Get started by creating your first item" }),
          s.cta && /* @__PURE__ */ l("button", { style: { padding: "10px 24px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 8, color: "#fff", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: s.cta })
        ] }, s.id);
      case "error-state":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: `${v.red}08`, border: `1px solid ${v.red}30`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: 20, background: `${v.red}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: "2.5rem" }, children: "⚠️" }),
          /* @__PURE__ */ l("h3", { style: { color: v.red, fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }, children: s.title || "Something went wrong" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", maxWidth: 300, lineHeight: 1.5, marginBottom: 20 }, children: s.description || "We encountered an error. Please try again." }),
          s.cta && /* @__PURE__ */ l("button", { style: { padding: "10px 24px", background: v.red, border: "none", borderRadius: 8, color: "#fff", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }, children: s.cta })
        ] }, s.id);
      case "loading-state":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { width: 48, height: 48, border: `3px solid ${v.purple}30`, borderTopColor: v.purple, borderRadius: "50%", animation: "spin 1s linear infinite" } }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.9rem" }, children: s.text || "Loading..." }),
          /* @__PURE__ */ l("style", { children: "@keyframes spin { to { transform: rotate(360deg); } }" })
        ] }, s.id);
      case "testimonial":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 16, padding: "28px", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "2.5rem", color: v.purple, opacity: 0.6, lineHeight: 1 }, children: '"' }),
          /* @__PURE__ */ l("p", { style: { flex: 1, color: t.textPrimary, fontSize: "1rem", lineHeight: 1.6, fontStyle: "italic", marginTop: 8 }, children: s.quote || "This product has completely transformed how we work." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 12, marginTop: 20, paddingTop: 16, borderTop: `1px solid ${u}` }, children: [
            /* @__PURE__ */ l("div", { style: { width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }, children: (s.name || "J").charAt(0) }),
            /* @__PURE__ */ S("div", { children: [
              /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.95rem" }, children: s.name || "Jane Doe" }),
              /* @__PURE__ */ l("div", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.title || "CEO, Company" })
            ] })
          ] })
        ] }, s.id);
      case "footer":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: e ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.3)", borderRadius: "16px 16px 0 0", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 24 }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }, children: (s.sections || [["Product", "Features", "Pricing"], ["Company", "About", "Blog"], ["Support", "Help", "Contact"]]).map((j, A) => /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
            /* @__PURE__ */ l("div", { style: { color: t.textPrimary, fontWeight: 600, fontSize: "0.9rem" }, children: j[0] }),
            j.slice(1).map((O, _) => /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.85rem", cursor: "pointer" }, children: O }, _))
          ] }, A)) }),
          /* @__PURE__ */ S("div", { style: { borderTop: `1px solid ${u}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: s.copyright || "© 2024 Company. All rights reserved." }),
            /* @__PURE__ */ l("div", { style: { display: "flex", gap: 16 }, children: ["twitter", "github", "linkedin"].map((j, A) => /* @__PURE__ */ l("div", { style: { width: 32, height: 32, borderRadius: 8, background: g.elevated, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "0.9rem", color: t.textSecondary }, children: j === "twitter" ? "𝕏" : j === "github" ? "⌗" : "in" }, A)) })
          ] })
        ] }, s.id);
      case "social-links":
        const oe = { twitter: "𝕏", github: "⌗", linkedin: "in", facebook: "f", instagram: "📷", youtube: "▶" };
        return /* @__PURE__ */ l("div", { style: { ...p, display: "flex", gap: 12 }, children: (s.links || ["twitter", "github", "linkedin"]).map((j, A) => /* @__PURE__ */ l("div", { style: { width: 40, height: 40, borderRadius: 10, background: g.elevated, border: `1px solid ${d}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1rem", color: t.textSecondary }, children: oe[j.toLowerCase()] || j.charAt(0).toUpperCase() }, A)) }, s.id);
      case "cta-section":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: `linear-gradient(135deg, ${v.purple}20, ${v.blue}15)`, border: `1px solid ${v.purple}30`, borderRadius: 20, padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }, children: [
          /* @__PURE__ */ l("h2", { style: { color: t.textPrimary, fontSize: "1.8rem", fontWeight: 800, marginBottom: 12 }, children: s.title || "Ready to get started?" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "1rem", maxWidth: 480, marginBottom: 24 }, children: s.description || "Join thousands of satisfied customers today." }),
          /* @__PURE__ */ S("div", { style: { display: "flex", gap: 12 }, children: [
            /* @__PURE__ */ l("button", { style: { padding: "14px 28px", background: `linear-gradient(135deg, ${v.purple}, ${v.blue})`, border: "none", borderRadius: 10, color: "#fff", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }, children: s.cta || "Get Started" }),
            /* @__PURE__ */ l("button", { style: { padding: "14px 28px", background: "transparent", border: `1px solid ${m}`, borderRadius: 10, color: t.textPrimary, fontSize: "1rem", fontWeight: 600, cursor: "pointer" }, children: "Learn More" })
          ] })
        ] }, s.id);
      case "profile-card":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `1px solid ${d}`, borderRadius: 20, padding: "28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${v.purple}, ${v.pink})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: "2rem", color: "#fff", fontWeight: 700 }, children: (s.name || "U").charAt(0) }),
          /* @__PURE__ */ l("h3", { style: { color: t.textPrimary, fontSize: "1.2rem", fontWeight: 700, marginBottom: 4 }, children: s.name || "User Name" }),
          /* @__PURE__ */ l("span", { style: { color: v.purple, fontSize: "0.85rem", marginBottom: 12 }, children: s.username || "@username" }),
          /* @__PURE__ */ l("p", { style: { color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5 }, children: s.bio || "Software developer and design enthusiast." }),
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
        ] }, s.id);
      case "activity-item":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${de[Math.floor(Math.random() * 5)]}, ${de[Math.floor(Math.random() * 5) + 1]})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 600, flexShrink: 0 }, children: "U" }),
          /* @__PURE__ */ S("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ l("p", { style: { color: t.textPrimary, fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }, children: s.text || "User performed an action" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: s.time || "2 hours ago" })
          ] })
        ] }, s.id);
      case "comment":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, display: "flex", alignItems: "flex-start", gap: 12, padding: "16px", background: g.low, borderRadius: 12, border: `1px solid ${u}` }, children: [
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
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.code, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden", fontFamily: "SF Mono, Monaco, Consolas, monospace" }, children: [
          /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: g.low, borderBottom: `1px solid ${u}` }, children: [
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: s.language || "javascript" }),
            /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem", cursor: "pointer" }, children: "📋 Copy" })
          ] }),
          /* @__PURE__ */ l("pre", { style: { margin: 0, padding: "16px", color: t.textSecondary, fontSize: "0.85rem", lineHeight: 1.6, overflow: "auto" }, children: /* @__PURE__ */ l("code", { children: s.code || `const greeting = "Hello, World!";
console.log(greeting);` }) })
        ] }, s.id);
      case "upload":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, height: s.height, background: g.low, border: `2px dashed ${f}`, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, cursor: "pointer", transition: "all 0.2s" }, children: [
          /* @__PURE__ */ l("div", { style: { width: 56, height: 56, borderRadius: 14, background: `${v.purple}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }, children: "📤" }),
          /* @__PURE__ */ S("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ l("p", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 600, marginBottom: 4 }, children: s.label || "Drag files here" }),
            /* @__PURE__ */ l("p", { style: { color: t.textMuted, fontSize: "0.8rem" }, children: "or click to browse" })
          ] }),
          /* @__PURE__ */ l("span", { style: { color: t.textMuted, fontSize: "0.75rem" }, children: "Max 10MB • PNG, JPG, PDF" })
        ] }, s.id);
      case "accordion":
        return /* @__PURE__ */ l("div", { style: { ...p, width: s.width, background: g.low, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden" }, children: (s.items || ["Section 1", "Section 2", "Section 3"]).map((j, A) => {
          var O;
          return /* @__PURE__ */ S("div", { style: { borderBottom: A < (((O = s.items) == null ? void 0 : O.length) || 3) - 1 ? `1px solid ${u}` : "none" }, children: [
            /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", cursor: "pointer" }, children: [
              /* @__PURE__ */ l("span", { style: { color: t.textPrimary, fontSize: "0.95rem", fontWeight: 500 }, children: j }),
              /* @__PURE__ */ l("span", { style: { color: t.textMuted, transform: A === 0 ? "rotate(180deg)" : "none", transition: "transform 0.2s" }, children: "▾" })
            ] }),
            A === 0 && /* @__PURE__ */ l("div", { style: { padding: "0 18px 14px", color: t.textSecondary, fontSize: "0.9rem", lineHeight: 1.5 }, children: "Expanded content for this section with more details..." })
          ] }, A);
        }) }, s.id);
      case "data-table":
        return /* @__PURE__ */ S("div", { style: { ...p, width: s.width, background: g.low, border: `1px solid ${d}`, borderRadius: 12, overflow: "hidden" }, children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", background: g.high, borderBottom: `1px solid ${d}` }, children: ["Name", "Status", "Date", "Actions"].map((j, A) => /* @__PURE__ */ l("div", { style: { flex: A === 0 ? 2 : 1, padding: "12px 16px", color: t.textSecondary, fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }, children: j }, A)) }),
          Array.from({ length: s.rows || 3 }).map((j, A) => /* @__PURE__ */ S("div", { style: { display: "flex", borderBottom: A < (s.rows || 3) - 1 ? `1px solid ${u}` : "none" }, children: [
            /* @__PURE__ */ S("div", { style: { flex: 2, padding: "14px 16px", color: t.textPrimary, fontSize: "0.9rem" }, children: [
              "Item ",
              A + 1
            ] }),
            /* @__PURE__ */ l("div", { style: { flex: 1, padding: "14px 16px" }, children: /* @__PURE__ */ l("span", { style: { padding: "4px 10px", background: A === 0 ? `${v.green}20` : `${v.orange}20`, color: A === 0 ? v.green : v.orange, borderRadius: 6, fontSize: "0.75rem", fontWeight: 500 }, children: A === 0 ? "Active" : "Pending" }) }),
            /* @__PURE__ */ S("div", { style: { flex: 1, padding: "14px 16px", color: t.textMuted, fontSize: "0.85rem" }, children: [
              "Dec ",
              10 + A,
              ", 2024"
            ] }),
            /* @__PURE__ */ S("div", { style: { flex: 1, padding: "14px 16px", display: "flex", gap: 8 }, children: [
              /* @__PURE__ */ l("span", { style: { cursor: "pointer" }, children: "✏️" }),
              /* @__PURE__ */ l("span", { style: { cursor: "pointer" }, children: "🗑️" })
            ] })
          ] }, A))
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
  }, u = ge(() => {
    const s = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(c.length))));
    return c.map((p, x) => ({
      ...p,
      id: p.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
      defaultX: 120 + x % s * 220,
      defaultY: 100 + Math.floor(x / s) * 160,
      style: d[p.type] || d.default
    }));
  }, [c]), f = (s) => e.getNodePosition(s.id, s.defaultX, s.defaultY), m = V(() => {
    const s = e.finishEditing();
    if (s.nodeId && s.newValue !== void 0 && n) {
      const p = u.find((x) => x.id === s.nodeId);
      p && p.label !== s.newValue && n(s.nodeId, p.label, s.newValue);
    }
  }, [e, u, n]);
  se(() => {
    const s = (p) => {
      const b = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? p.metaKey : p.ctrlKey;
      if (!e.editingNode) {
        if ((p.key === "Delete" || p.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          p.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (b && p.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          p.preventDefault(), e.copySelectedNodes(u);
          return;
        }
        if (b && p.key.toLowerCase() === "v" && e.clipboard && a) {
          p.preventDefault();
          const C = e.pasteNodes();
          C && a(C);
          return;
        }
      }
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e, u, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const s = e.getNodesInSelectionBox(u.map((p) => ({ ...p, x: p.defaultX, y: p.defaultY })), e.selectionBox);
      s.length > 0 && e.setSelectedNodes(new Set(s));
    }
  }, [e.isSelecting, e.selectionBox, u, e]);
  const g = V((s) => {
    (s.target === e.canvasRef.current || s.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), y = ge(() => {
    if (!u.length) return { x: 0, y: 0, width: 400, height: 300 };
    const s = u.map((x) => x.defaultX), p = u.map((x) => x.defaultY);
    return { x: Math.min(...s) - 80, y: Math.min(...p) - 60, width: Math.max(...s) - Math.min(...s) + 280, height: Math.max(...p) - Math.min(...p) + 220 };
  }, [u]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: g, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "comp-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.purple }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((s, p) => {
            const x = u.find((P) => P.id === s.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), b = u.find((P) => P.id === s.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
            if (!x || !b) return null;
            const C = f(x), w = f(b), $ = w.x - C.x, k = w.y - C.y, M = Math.sqrt($ * $ + k * k) || 1, E = (C.x + w.x) / 2, R = (C.y + w.y) / 2, T = -k / M * 30, I = $ / M * 30, B = `M ${C.x + $ / M * 75} ${C.y + k / M * 50} Q ${E + T} ${R + I} ${w.x - $ / M * 75} ${w.y - k / M * 50}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: B, fill: "none", stroke: v.purple, strokeWidth: 2.5, markerEnd: "url(#comp-arrow)", opacity: 0.95 }),
              s.label && /* @__PURE__ */ l("text", { x: E + T, y: R + I - 8, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: s.label })
            ] }, p);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: u.map((s) => {
        const p = f(s), x = e.dragging === s.id, b = e.selectedNodes.has(s.id);
        return /* @__PURE__ */ S("div", { onClick: (C) => e.handleNodeClick(C, s.id), onDoubleClick: (C) => e.handleNodeDoubleClick(C, s.id, s.label), onContextMenu: (C) => e.handleNodeContextMenu(C, s.id), onMouseDown: (C) => e.handleNodeMouseDown(C, s.id, p.x, p.y), onTouchStart: (C) => e.handleNodeTouchStart(C, s.id, p.x, p.y), style: { position: "absolute", left: p.x - 75, top: p.y - 50, width: 150, height: 100, background: `${s.style.color}15`, border: `2px solid ${b ? v.blue : s.style.color}`, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: x ? "grabbing" : "grab", boxShadow: b ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : x ? `0 0 30px ${s.style.color}50` : `0 4px 20px ${s.style.color}20`, transition: x ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
          /* @__PURE__ */ l("div", { style: { fontSize: "1.8rem", marginBottom: 6 }, children: s.style.icon }),
          e.editingNode === s.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (C) => e.setEditingValue(C), onFinish: m, style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1rem" : "0.85rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center", padding: "0 8px" }, children: s.label })
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
  const e = Pe({ x: 50, y: 50 }), { elements: c = [], relationships: h = [], boundaries: d = [] } = i, u = {
    person: { color: v.blue, icon: "👤", shape: "person" },
    system: { color: v.cyan, icon: "🏢", shape: "rect" },
    container: { color: v.green, icon: "📦", shape: "rect" },
    component: { color: v.purple, icon: "⚙️", shape: "rect" },
    database: { color: v.emerald, icon: "🗄️", shape: "cylinder" },
    external: { color: v.slate, icon: "🌐", shape: "rect" },
    default: { color: v.cyan, icon: "🏗️", shape: "rect" }
  }, f = [v.purple, v.blue, v.cyan, v.emerald, v.amber, v.pink], m = ge(() => {
    const b = /* @__PURE__ */ new Map(), C = [];
    c.forEach((R, T) => {
      R.boundary ? (b.has(R.boundary) || b.set(R.boundary, []), b.get(R.boundary).push({ ...R, origIndex: T })) : C.push({ ...R, origIndex: T });
    });
    const w = [];
    let $ = 120;
    const k = 40, M = 220, E = 160;
    if (C.length > 0) {
      const R = Math.min(4, Math.max(2, Math.ceil(Math.sqrt(C.length))));
      C.forEach((I, B) => {
        w.push({
          ...I,
          id: I.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
          defaultX: 150 + B % R * M,
          defaultY: $ + Math.floor(B / R) * E,
          style: u[I.type] || u.default
        });
      });
      const T = Math.ceil(C.length / Math.min(4, Math.max(2, Math.ceil(Math.sqrt(C.length)))));
      $ += T * E + k;
    }
    return d.forEach((R, T) => {
      const I = b.get(R.id) || [];
      if (I.length === 0) return;
      const B = Math.min(3, Math.max(1, Math.ceil(Math.sqrt(I.length))));
      I.forEach((L, F) => {
        w.push({
          ...L,
          id: L.label.toLowerCase().replace(/[^a-z0-9]/g, "_"),
          defaultX: 150 + k + F % B * M,
          defaultY: $ + k + 30 + Math.floor(F / B) * E,
          style: u[L.type] || u.default,
          boundaryId: R.id
        });
      });
      const P = Math.ceil(I.length / B);
      $ += P * E + k * 2 + 40;
    }), w;
  }, [c, d]), g = ge(() => d.map((b, C) => {
    const w = m.filter((E) => E.boundaryId === b.id);
    if (w.length === 0) return null;
    const $ = w.map((E) => E.defaultX), k = w.map((E) => E.defaultY), M = 30;
    return {
      id: b.id,
      name: b.name,
      x: Math.min(...$) - 85 - M,
      y: Math.min(...k) - 60 - M - 25,
      width: Math.max(...$) - Math.min(...$) + 170 + M * 2,
      height: Math.max(...k) - Math.min(...k) + 120 + M * 2 + 25,
      color: f[C % f.length]
    };
  }).filter(Boolean), [d, m]), y = (b) => e.getNodePosition(b.id, b.defaultX, b.defaultY), s = V(() => {
    const b = e.finishEditing();
    if (b.nodeId && b.newValue !== void 0 && n) {
      const C = m.find((w) => w.id === b.nodeId);
      C && C.label !== b.newValue && n(b.nodeId, C.label, b.newValue);
    }
  }, [e, m, n]);
  se(() => {
    const b = (C) => {
      const $ = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? C.metaKey : C.ctrlKey;
      if (!e.editingNode) {
        if ((C.key === "Delete" || C.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          C.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if ($ && C.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          C.preventDefault(), e.copySelectedNodes(m);
          return;
        }
        if ($ && C.key.toLowerCase() === "v" && e.clipboard && a) {
          C.preventDefault();
          const k = e.pasteNodes();
          k && a(k);
          return;
        }
      }
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [e, m, o, a]), se(() => {
    if (!e.isSelecting && e.selectionBox) {
      const b = e.getNodesInSelectionBox(m.map((C) => ({ ...C, x: C.defaultX, y: C.defaultY })), e.selectionBox);
      b.length > 0 && e.setSelectedNodes(new Set(b));
    }
  }, [e.isSelecting, e.selectionBox, m, e]);
  const p = V((b) => {
    (b.target === e.canvasRef.current || b.target.classList.contains("canvas-bg")) && (e.clearSelection(), e.closeContextMenu());
  }, [e]), x = ge(() => {
    if (!m.length) return { x: 0, y: 0, width: 400, height: 300 };
    const b = m.map((w) => w.defaultX), C = m.map((w) => w.defaultY);
    return { x: Math.min(...b) - 100, y: Math.min(...C) - 80, width: Math.max(...b) - Math.min(...b) + 320, height: Math.max(...C) - Math.min(...C) + 260 };
  }, [m]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: e.canvasRef, className: "canvas-bg", onClick: p, onMouseDown: e.handleCanvasMouseDown, onMouseMove: e.handleMouseMove, onMouseUp: e.handleMouseUp, onMouseLeave: e.handleMouseUp, onTouchStart: e.handleTouchStart, onTouchMove: e.handleTouchMove, onTouchEnd: e.handleTouchEnd, onWheel: e.handleWheel, style: { width: "100%", height: "100%", cursor: e.isPanning || e.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * e.zoom}px ${25 * e.zoom}px`, backgroundPosition: `${e.pan.x}px ${e.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "c4-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.cyan }) }) }),
        /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
          h.map((b, C) => {
            const w = m.find((q) => q.id === b.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), $ = m.find((q) => q.id === b.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
            if (!w || !$) return null;
            const k = y(w), M = y($), E = M.x - k.x, R = M.y - k.y, T = Math.sqrt(E * E + R * R) || 1, I = (k.x + M.x) / 2, B = (k.y + M.y) / 2, P = -R / T * 25, L = E / T * 25, F = `M ${k.x + E / T * 85} ${k.y + R / T * 60} Q ${I + P} ${B + L} ${M.x - E / T * 85} ${M.y - R / T * 60}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: F, fill: "none", stroke: v.cyan, strokeWidth: 2.5, markerEnd: "url(#c4-arrow)", opacity: 0.95 }),
              b.label && /* @__PURE__ */ S("g", { children: [
                /* @__PURE__ */ l("rect", { x: I + P - b.label.length * 3.5 - 6, y: B + L - 18, width: b.label.length * 7 + 12, height: 16, rx: 4, fill: "rgba(0,0,0,0.8)" }),
                /* @__PURE__ */ l("text", { x: I + P, y: B + L - 7, textAnchor: "middle", fill: v.cyan, fontSize: 10, children: b.label })
              ] })
            ] }, C);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: [
        g.map((b) => /* @__PURE__ */ l("div", { style: { position: "absolute", left: b.x, top: b.y, width: b.width, height: b.height, background: `${b.color}08`, border: `2px dashed ${b.color}50`, borderRadius: 16, pointerEvents: "none" }, children: /* @__PURE__ */ l("div", { style: { position: "absolute", top: 8, left: 12, fontSize: "0.75rem", fontWeight: 600, color: b.color, textTransform: "uppercase", letterSpacing: "0.5px", opacity: 0.8 }, children: b.name }) }, b.id)),
        m.map((b) => {
          const C = y(b), w = e.dragging === b.id, $ = e.selectedNodes.has(b.id), k = b.style.shape === "person";
          return /* @__PURE__ */ S("div", { onClick: (M) => e.handleNodeClick(M, b.id), onDoubleClick: (M) => e.handleNodeDoubleClick(M, b.id, b.label), onContextMenu: (M) => e.handleNodeContextMenu(M, b.id), onMouseDown: (M) => e.handleNodeMouseDown(M, b.id, C.x, C.y), onTouchStart: (M) => e.handleNodeTouchStart(M, b.id, C.x, C.y), style: { position: "absolute", left: C.x - 85, top: C.y - 60, width: 170, height: 120, background: `${b.style.color}15`, border: `2px solid ${$ ? v.blue : b.style.color}`, borderRadius: k ? "50% 50% 12px 12px" : b.style.shape === "cylinder" ? "50% / 15%" : 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: w ? "grabbing" : "grab", boxShadow: $ ? `0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40` : w ? `0 0 30px ${b.style.color}50` : `0 4px 20px ${b.style.color}20`, transition: w ? "none" : "box-shadow 0.2s", touchAction: "none" }, children: [
            /* @__PURE__ */ l("div", { style: { fontSize: "2rem", marginBottom: 6 }, children: b.style.icon }),
            e.editingNode === b.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (M) => e.setEditingValue(M), onFinish: s, style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("div", { style: { fontSize: r ? "1rem" : "0.9rem", fontWeight: 600, color: r ? ye.stroke : t.textPrimary, textAlign: "center" }, children: b.label }),
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
    const u = Math.min(3, Math.max(2, Math.ceil(Math.sqrt(o.length))));
    return o.map((f, m) => {
      var g;
      return {
        ...f,
        id: f.name.toLowerCase().replace(/[^a-z0-9]/g, "_"),
        defaultX: 150 + m % u * 280,
        defaultY: 100 + Math.floor(m / u) * 160,
        color: e[(g = f.priority) == null ? void 0 : g.toLowerCase()] || v.orange
      };
    });
  }, [o]), h = (u) => n.getNodePosition(u.id, u.defaultX, u.defaultY), d = ge(() => {
    if (!c.length) return { x: 0, y: 0, width: 400, height: 300 };
    const u = c.map((m) => m.defaultX), f = c.map((m) => m.defaultY);
    return { x: Math.min(...u) - 100, y: Math.min(...f) - 60, width: Math.max(...u) - Math.min(...u) + 360, height: Math.max(...f) - Math.min(...f) + 220 };
  }, [c]);
  return /* @__PURE__ */ S("div", { style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", background: t.canvasBg, borderRadius: 12, border: `1px solid ${t.border}`, touchAction: "none" }, children: [
    /* @__PURE__ */ l("style", { children: "@keyframes flowDash { to { stroke-dashoffset: -20; } }" }),
    /* @__PURE__ */ S("div", { ref: n.canvasRef, className: "canvas-bg", onMouseDown: n.handleCanvasMouseDown, onMouseMove: n.handleMouseMove, onMouseUp: n.handleMouseUp, onMouseLeave: n.handleMouseUp, onTouchStart: n.handleTouchStart, onTouchMove: n.handleTouchMove, onTouchEnd: n.handleTouchEnd, onWheel: n.handleWheel, style: { width: "100%", height: "100%", cursor: n.isPanning || n.dragging ? "grabbing" : "grab", touchAction: "none" }, children: [
      /* @__PURE__ */ l("div", { className: "canvas-bg", style: { position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`, backgroundSize: `${25 * n.zoom}px ${25 * n.zoom}px`, backgroundPosition: `${n.pan.x}px ${n.pan.y}px`, pointerEvents: "none" } }),
      /* @__PURE__ */ S("svg", { width: "100%", height: "100%", style: { position: "absolute", overflow: "visible", pointerEvents: "none" }, children: [
        /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "req-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: v.orange }) }) }),
        /* @__PURE__ */ l("g", { transform: `translate(${n.pan.x}, ${n.pan.y}) scale(${n.zoom})`, children: a.map((u, f) => {
          const m = c.find((C) => C.id === u.from.toLowerCase().replace(/[^a-z0-9]/g, "_")), g = c.find((C) => C.id === u.to.toLowerCase().replace(/[^a-z0-9]/g, "_"));
          if (!m || !g) return null;
          const y = h(m), s = h(g), p = s.x - y.x, x = s.y - y.y, b = Math.sqrt(p * p + x * x) || 1;
          return /* @__PURE__ */ S("g", { children: [
            /* @__PURE__ */ l("line", { x1: y.x + p / b * 120, y1: y.y + x / b * 65, x2: s.x - p / b * 120, y2: s.y - x / b * 65, stroke: v.orange, strokeWidth: 2.5, markerEnd: "url(#req-arrow)", opacity: 0.95 }),
            u.label && /* @__PURE__ */ l("text", { x: (y.x + s.x) / 2, y: (y.y + s.y) / 2 - 8, textAnchor: "middle", fill: t.textSecondary, fontSize: 10, children: u.label })
          ] }, f);
        }) })
      ] }),
      /* @__PURE__ */ l("div", { style: { position: "absolute", transform: `translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`, transformOrigin: "0 0" }, children: c.map((u) => {
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
    /* @__PURE__ */ l(De, { onZoomIn: () => n.setZoom((u) => Math.min(u * 1.2, 2.5)), onZoomOut: () => n.setZoom((u) => Math.max(u * 0.8, 0.3)), onFit: () => n.fitToView(d), onReset: n.resetView, zoom: n.zoom })
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
  }, [o]), d = (f) => n.getNodePosition(f.id, f.x, f.y), u = (f) => {
    const m = o.find(($) => $.id === f.source), g = o.find(($) => $.id === f.target);
    if (!m || !g) return "";
    const y = d(m), s = d(g), p = y.x + e, x = y.y + (m.height || 30) / 2, b = s.x, C = s.y + (g.height || 30) / 2, w = (p + b) / 2;
    return `M ${p} ${x} C ${w} ${x}, ${w} ${C}, ${b} ${C}`;
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
                  const g = o.find((x) => x.id === f.source), y = o.find((x) => x.id === f.target), s = c[((g == null ? void 0 : g.layer) || 0) % c.length], p = c[((y == null ? void 0 : y.layer) || 0) % c.length];
                  return /* @__PURE__ */ S("linearGradient", { id: `sankey-gradient-${m}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ l("stop", { offset: "0%", stopColor: s, stopOpacity: "0.6" }),
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
          }, children: o.map((f, m) => {
            const g = d(f), y = n.dragging === f.id, s = c[(f.layer || 0) % c.length], p = f.height || 30;
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
                  height: p,
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
  const e = Pe({ x: 50, y: 50 }), { lanes: c = [], nodes: h = [], edges: d = [] } = i, u = [v.purple, v.blue, v.cyan, v.emerald, v.green, v.amber], f = ge(() => {
    if (!h.length) return { x: 0, y: 0, width: 800, height: 400 };
    const s = h.map((C) => C.x), p = h.map((C) => C.y), x = h.map((C) => C.width || 140), b = h.map((C) => C.height || 50);
    return {
      x: Math.min(...s) - 200,
      y: Math.min(...p) - 40,
      width: Math.max(...s.map((C, w) => C + x[w])) - Math.min(...s) + 280,
      height: Math.max(...p.map((C, w) => C + b[w])) - Math.min(...p) + 80
    };
  }, [h]), m = (s) => e.getNodePosition(s.id, s.x, s.y), g = (s) => {
    const p = h.find((te) => te.id === s.source), x = h.find((te) => te.id === s.target);
    if (!p || !x) return "";
    const b = m(p), C = m(x), w = p.width || 140, $ = p.height || 50, k = x.width || 140, M = x.height || 50, E = b.x + w / 2, R = b.y + $ / 2, T = C.x + k / 2, I = C.y + M / 2;
    let B, P, L, F;
    const q = T - E, Y = I - R;
    Math.abs(q) > Math.abs(Y) ? (B = q > 0 ? b.x + w : b.x, P = R, L = q > 0 ? C.x : C.x + k, F = I) : (B = E, P = Y > 0 ? b.y + $ : b.y, L = T, F = Y > 0 ? C.y : C.y + M);
    const re = (B + L) / 2, ne = (P + F) / 2;
    return Math.abs(q) > Math.abs(Y) ? `M ${B} ${P} L ${re} ${P} L ${re} ${F} L ${L} ${F}` : `M ${B} ${P} L ${B} ${ne} L ${L} ${ne} L ${L} ${F}`;
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
                /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("marker", { id: "swimlane-arrow", markerWidth: "8", markerHeight: "6", refX: "7", refY: "3", orient: "auto", children: /* @__PURE__ */ l("path", { d: "M 0 0 L 8 3 L 0 6 L 2 3 Z", fill: t.textSecondary }) }) }),
                /* @__PURE__ */ S("g", { transform: `translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`, children: [
                  c.map((s, p) => {
                    const b = u[p % u.length];
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
                      p < c.length - 1 && /* @__PURE__ */ l(
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
                    const p = g(s);
                    return /* @__PURE__ */ S("g", { children: [
                      /* @__PURE__ */ l(
                        "path",
                        {
                          d: p,
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
            c.map((s, p) => {
              const x = u[p % u.length];
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
              const p = m(s), x = e.dragging === s.id, b = c.find((M) => M.id === s.lane), C = c.indexOf(b), w = u[C % u.length] || v.purple, $ = y(s.type), k = ["start", "end", "diamond"].includes(s.type);
              return /* @__PURE__ */ l(
                "div",
                {
                  onMouseDown: (M) => e.handleNodeMouseDown(M, s.id, p.x, p.y),
                  onTouchStart: (M) => e.handleNodeTouchStart(M, s.id, p.x, p.y),
                  style: {
                    position: "absolute",
                    left: p.x,
                    top: p.y,
                    width: k ? $.width : s.width || 140,
                    height: k ? $.height : s.height || 50,
                    background: $.background || (r ? ye.bg : `${w}20`),
                    border: `2px solid ${r ? ye.stroke : w}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: x ? "grabbing" : "grab",
                    boxShadow: x ? `0 0 20px ${w}50` : "0 2px 8px rgba(0,0,0,0.2)",
                    transition: x ? "none" : "box-shadow 0.2s",
                    touchAction: "none",
                    ...$
                  },
                  children: !k && /* @__PURE__ */ l("span", { style: {
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
  const e = Pe({ x: 50, y: 50 }), { actors: c = [], useCases: h = [], relationships: d = [] } = i, { actorPositions: u, useCasePositions: f } = ge(() => {
    const w = /* @__PURE__ */ new Map();
    c.forEach((I) => w.set(I.label.toLowerCase(), [])), d.forEach((I) => {
      const B = I.from.toLowerCase(), P = I.to.toLowerCase();
      w.has(B) && w.get(B).push(P);
    });
    const $ = [], k = /* @__PURE__ */ new Set();
    let M = 120;
    const E = 110, R = 450;
    return c.forEach((I, B) => {
      (w.get(I.label.toLowerCase()) || []).forEach((L) => {
        const F = h.find((q) => q.label.toLowerCase() === L);
        F && !k.has(F.id) && ($.push({ ...F, x: R, y: M, actorIndex: B }), k.add(F.id), M += E);
      });
    }), h.forEach((I) => {
      k.has(I.id) || ($.push({ ...I, x: R, y: M, actorIndex: -1 }), M += E);
    }), { actorPositions: c.map((I, B) => {
      const P = $.filter((F) => F.actorIndex === B);
      let L;
      if (P.length > 0) {
        const F = Math.min(...P.map((Y) => Y.y)), q = Math.max(...P.map((Y) => Y.y));
        L = (F + q) / 2;
      } else
        L = 150 + B * 180;
      return { ...I, x: 120, y: L };
    }), useCasePositions: $ };
  }, [c, h, d]), m = (w) => e.getNodePosition(w.id, w.x, w.y), g = (w) => e.getNodePosition(w.id, w.x, w.y), y = ge(() => d.map((w, $) => {
    const k = u.find((E) => E.label.toLowerCase() === w.from.toLowerCase()), M = f.find((E) => E.label.toLowerCase() === w.to.toLowerCase());
    return k && M ? { id: `conn-${$}`, from: k, to: M } : null;
  }).filter(Boolean), [d, u, f]), s = ge(() => {
    if (f.length === 0) return { x: 280, y: 40, width: 400, height: 300 };
    const w = f.map((M) => M.x), $ = f.map((M) => M.y), k = 100;
    return {
      x: Math.min(...w) - k,
      y: Math.min(...$) - k - 20,
      width: Math.max(...w) - Math.min(...w) + k * 2 + 140,
      height: Math.max(...$) - Math.min(...$) + k * 2 + 80
    };
  }, [f]), p = ge(() => {
    const w = [...u.map((T) => T.x), ...f.map((T) => T.x)], $ = [...u.map((T) => T.y), ...f.map((T) => T.y)];
    if (w.length === 0) return { x: 0, y: 0, width: 400, height: 300 };
    const k = Math.min(...w) - 100, M = Math.max(...w) + 100, E = Math.min(...$) - 80, R = Math.max(...$) + 80;
    return { x: k, y: E, width: M - k, height: R - E };
  }, [u, f]), x = ge(() => [...u, ...f], [u, f]), b = V(() => {
    const w = e.finishEditing();
    if (w.nodeId && w.newValue !== void 0 && n) {
      const $ = x.find((k) => k.id === w.nodeId);
      $ && $.label !== w.newValue && n(w.nodeId, $.label, w.newValue);
    }
  }, [e, x, n]);
  se(() => {
    const w = ($) => {
      const M = /Mac|iPhone|iPad|iPod/.test(navigator.platform) ? $.metaKey : $.ctrlKey;
      if (!e.editingNode) {
        if (($.key === "Delete" || $.key === "Backspace") && e.selectedNodes.size > 0 && o) {
          $.preventDefault(), o(Array.from(e.selectedNodes)), e.clearSelection();
          return;
        }
        if (M && $.key.toLowerCase() === "c" && e.selectedNodes.size > 0) {
          $.preventDefault(), e.copySelectedNodes(x);
          return;
        }
        if (M && $.key.toLowerCase() === "v" && e.clipboard && a) {
          $.preventDefault();
          const E = e.pasteNodes();
          E && a(E);
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
  const C = V((w) => {
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
          /* @__PURE__ */ l("rect", { x: s.x, y: s.y, width: s.width, height: s.height, fill: "rgba(124, 58, 237, 0.03)", rx: 24 }),
          /* @__PURE__ */ l("rect", { x: s.x, y: s.y, width: s.width, height: s.height, fill: "none", stroke: "url(#uc-gradient)", strokeWidth: 2, rx: 24, opacity: "0.4" }),
          /* @__PURE__ */ l("text", { x: s.x + s.width / 2, y: s.y + 30, textAnchor: "middle", fill: v.purple, fontSize: 13, fontWeight: "600", fontFamily: "system-ui, sans-serif", opacity: "0.8", children: "System Boundary" }),
          y.map((w, $) => {
            const k = m(w.from), M = g(w.to), E = k.x + 45, R = k.y, T = M.x - 85, I = M.y, B = `M ${E} ${R} L ${T} ${I}`;
            return /* @__PURE__ */ S("g", { children: [
              /* @__PURE__ */ l("path", { d: B, fill: "none", stroke: v.purple, strokeWidth: 4, strokeLinecap: "round", opacity: "0.15" }),
              /* @__PURE__ */ l("path", { d: B, fill: "none", stroke: "url(#uc-gradient)", strokeWidth: 1.5, strokeLinecap: "round", opacity: "0.6" }),
              /* @__PURE__ */ l("path", { d: B, fill: "none", stroke: "rgba(255,255,255,0.8)", strokeWidth: 1.5, strokeLinecap: "round", strokeDasharray: "2,10", style: { animation: "flow 0.6s linear infinite", animationDelay: `${$ * 0.15}s` } })
            ] }, w.id);
          }),
          e.isSelecting && e.selectionBox && /* @__PURE__ */ l("rect", { x: Math.min(e.selectionBox.startX, e.selectionBox.endX), y: Math.min(e.selectionBox.startY, e.selectionBox.endY), width: Math.abs(e.selectionBox.endX - e.selectionBox.startX), height: Math.abs(e.selectionBox.endY - e.selectionBox.startY), fill: `${v.blue}20`, stroke: v.blue, strokeWidth: 1, strokeDasharray: "4,4" })
        ] })
      ] }),
      /* @__PURE__ */ S("div", { style: { position: "absolute", transform: `translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`, transformOrigin: "0 0" }, children: [
        u.map((w) => {
          const $ = m(w), k = e.dragging === w.id, M = e.selectedNodes.has(w.id);
          return /* @__PURE__ */ S("div", { onClick: (E) => e.handleNodeClick(E, w.id), onDoubleClick: (E) => e.handleNodeDoubleClick(E, w.id, w.label), onContextMenu: (E) => e.handleNodeContextMenu(E, w.id), onMouseDown: (E) => e.handleNodeMouseDown(E, w.id, $.x, $.y), onTouchStart: (E) => e.handleNodeTouchStart(E, w.id, $.x, $.y), style: { position: "absolute", left: $.x - 45, top: $.y - 55, width: 90, display: "flex", flexDirection: "column", alignItems: "center", cursor: k ? "grabbing" : "grab", transition: k ? "none" : "transform 0.2s", transform: k ? "scale(1.05)" : "scale(1)", touchAction: "none" }, children: [
            /* @__PURE__ */ l("div", { style: { width: 70, height: 70, borderRadius: "50%", background: `linear-gradient(135deg, ${v.pink}35, ${v.purple}15)`, border: `2px solid ${M ? v.blue : v.pink}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: Qe(v.pink, k, M), transition: "box-shadow 0.2s" }, children: /* @__PURE__ */ S("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none", children: [
              /* @__PURE__ */ l("circle", { cx: "12", cy: "8", r: "4", stroke: v.pink, strokeWidth: "1.5", fill: `${v.pink}20` }),
              /* @__PURE__ */ l("path", { d: "M4 20c0-4 4-6 8-6s8 2 8 6", stroke: v.pink, strokeWidth: "1.5", strokeLinecap: "round", fill: "none" })
            ] }) }),
            /* @__PURE__ */ l("div", { style: { marginTop: 10, padding: "4px 12px", background: "rgba(0,0,0,0.4)", borderRadius: 12, backdropFilter: "blur(8px)" }, children: e.editingNode === w.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (E) => e.setEditingValue(E), onFinish: b, style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 600, color: r ? ye.stroke : t.textPrimary }, children: w.label }) })
          ] }, w.id);
        }),
        f.map((w) => {
          const $ = g(w), k = e.dragging === w.id, M = e.selectedNodes.has(w.id);
          return /* @__PURE__ */ l("div", { onClick: (E) => e.handleNodeClick(E, w.id), onDoubleClick: (E) => e.handleNodeDoubleClick(E, w.id, w.label), onContextMenu: (E) => e.handleNodeContextMenu(E, w.id), onMouseDown: (E) => e.handleNodeMouseDown(E, w.id, $.x, $.y), onTouchStart: (E) => e.handleNodeTouchStart(E, w.id, $.x, $.y), style: { position: "absolute", left: $.x - 80, top: $.y - 35, width: 160, height: 70, background: `linear-gradient(135deg, ${v.blue}25, ${v.purple}15)`, border: `1.5px solid ${M ? v.blue : "rgba(14, 165, 233, 0.5)"}`, borderRadius: 35, display: "flex", alignItems: "center", justifyContent: "center", cursor: k ? "grabbing" : "grab", boxShadow: Qe(v.blue, k, M), backdropFilter: "blur(8px)", transition: k ? "none" : "box-shadow 0.2s, transform 0.2s", transform: k ? "scale(1.03)" : "scale(1)", touchAction: "none" }, children: e.editingNode === w.id ? /* @__PURE__ */ l(Xe, { value: e.editingValue, onChange: (E) => e.setEditingValue(E), onFinish: b, style: { fontSize: r ? 14 : 12, fontWeight: 500, color: r ? ye.stroke : t.textPrimary, textAlign: "center" } }) : /* @__PURE__ */ l("span", { style: { fontSize: r ? 14 : 12, fontWeight: 500, color: r ? ye.stroke : t.textPrimary, textAlign: "center", padding: "0 12px", lineHeight: 1.3 }, children: w.label }) }, w.id);
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
    /* @__PURE__ */ l(De, { onZoomIn: () => e.setZoom((w) => Math.min(w * 1.15, 3)), onZoomOut: () => e.setZoom((w) => Math.max(w * 0.85, 0.2)), onFit: () => e.fitToView(p), onReset: e.resetView, zoom: e.zoom }),
    e.contextMenu && /* @__PURE__ */ l(tt, { position: e.contextMenu, onClose: () => e.closeContextMenu(), nodeId: e.contextMenu.nodeId })
  ] });
}
function dw({ type: i, data: t, source: r, theme: n = "dark", sketchMode: o = !1, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d, onLinkedTemplateClick: u }) {
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
      return /* @__PURE__ */ l(hc, { nodes: m.nodes || [], edges: m.edges || [], theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d });
    case "state":
      return /* @__PURE__ */ l(hc, { nodes: m.states || [], edges: ((g = m.transitions) == null ? void 0 : g.map((y, s) => ({ id: `t-${s}`, source: y.from, target: y.to, label: y.event }))) || [], theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d });
    case "activity":
      return /* @__PURE__ */ l(hc, { nodes: m.nodes || [], edges: m.edges || [], theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onEdgeLabelChange: h, onCreateConnection: d });
    case "journey":
      return /* @__PURE__ */ l(j2, { data: m, theme: f, sketchMode: o, onLabelChange: a, onDeleteNodes: e, onPasteNodes: c, onLinkedTemplateClick: u });
    case "timeline":
      return /* @__PURE__ */ l(Z2, { events: m, theme: f, sketchMode: o });
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
      return /* @__PURE__ */ l(Q2, { data: m, theme: f, sketchMode: o });
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
  const [o, a] = H([]);
  return se(() => {
    i && a(Oc());
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
                  onMouseEnter: (u) => u.currentTarget.style.background = "rgba(124,58,237,0.1)",
                  onMouseLeave: (u) => u.currentTarget.style.background = "rgba(255,255,255,0.03)",
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
  const [n, o] = H(""), [a, e] = H(""), [c, h] = H(null);
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
  }, u = () => {
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
                  onClick: u,
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
  const [o, a] = H(""), [e, c] = H(""), [h, d] = H(!1);
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
  const u = async () => {
    try {
      await E2(o), d(!0), setTimeout(() => d(!1), 2e3);
    } catch (m) {
      c("Failed to copy: " + m.message);
    }
  }, f = () => {
    M2(o, `ddflow-${r}`);
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
  const [i, t] = H("journey"), [r, n] = H(""), [o, a] = H(!1), [e, c] = H(!1), [h, d] = H(!1), [u, f] = H(!1), [m, g] = H(!1), [y, s] = H(!1), [p, x] = H(!1), [b, C] = H(!1), [w, $] = H(!1), [k, M] = H(null), [E, R] = H(!1), [T, I] = H(!1), [B, P] = H(!1), [L, F] = H(!1), [q, Y] = H(!1), [re, ne] = H(!1), [te, oe] = H(() => yg()), [j, A] = H("Untitled Diagram"), [O, _] = H(() => av()), [z, W] = H({ loading: !1, message: "" }), [X, Z] = H(() => I2()), [Q, ke] = H(() => T2()), Ce = we[X] || we.dark, J = ge(() => ({
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
    pushState: Ee,
    isApplying: rt
  } = R2({
    type: i,
    source: r || ce.source,
    diagramName: j
  }), st = _e(null);
  se(() => (st.current = _2((U, ae, he) => {
    !Le.current && !rt() && Ee({ type: ae, source: U, diagramName: he }, "source");
  }, 1e3), () => {
    var U;
    return (U = st.current) == null ? void 0 : U.cancel();
  }), [Ee, rt]);
  const St = V((U) => {
    var ae;
    n(U), (ae = st.current) == null || ae.call(st, U, i, j);
  }, [i, j]), ct = V((U) => {
    var ae;
    (ae = st.current) == null || ae.cancel(), t(U), n(""), Ee({ type: U, source: "", diagramName: j }, "type");
  }, [Ee, j]);
  V((U) => {
    A(U);
  }, []);
  const qt = V((U, ae, he) => {
    if (!pe || !ae || !he) return;
    const Ue = ae.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), Pt = new RegExp(`\\b${Ue}\\b`, "g"), nt = pe.replace(Pt, he);
    nt !== pe && (n(nt), Ee({ type: i, source: nt, diagramName: j }, "label-edit"));
  }, [pe, i, j, Ee]), kt = V((U) => {
    if (!pe || !U || U.length === 0) return;
    let ae = pe;
    U.forEach((he) => {
      ae = ae.split(`
`).filter((nt) => {
        const He = nt.trim();
        return !(He.startsWith(he + ":") || He.startsWith(he + " ") || He.match(new RegExp(`^\\[${he}\\]`)) || He.match(new RegExp(`^${he}\\s*->`)) || He.match(new RegExp(`->\\s*${he}\\s*$`)));
      }).join(`
`);
    }), ae !== pe && (n(ae), Ee({ type: i, source: ae, diagramName: j }, "delete-nodes"));
  }, [pe, i, j, Ee]), Ct = V((U) => {
    if (!U || U.length === 0) return;
    const ae = U.map((Ue) => {
      const Pt = Ue.type ? `[${Ue.type}] ` : "";
      return `${Ue.id}: ${Pt}${Ue.label}`;
    }), he = pe + `
` + ae.join(`
`);
    n(he), Ee({ type: i, source: he, diagramName: j }, "paste-nodes");
  }, [pe, i, j, Ee]), ft = V((U, ae, he) => {
    if (!pe) return;
    const nt = pe.split(`
`).map((He) => {
      if (He.includes("->")) {
        if (ae && He.includes(ae))
          return He.replace(ae, he);
        if (!ae && he) {
          const $r = He.trim();
          if (!$r.includes(":") && !$r.includes("|"))
            return He + " : " + he;
        }
      }
      return He;
    }).join(`
`);
    nt !== pe && (n(nt), Ee({ type: i, source: nt, diagramName: j }, "edge-label"));
  }, [pe, i, j, Ee]), Ge = V((U, ae) => {
    if (!U || !ae) return;
    const he = `${U} -> ${ae}`, Ue = pe + `
` + he;
    n(Ue), Ee({ type: i, source: Ue, diagramName: j }, "create-connection");
  }, [pe, i, j, Ee]), Fe = V((U, ae) => {
    const he = O1(U);
    he ? (t(he.type), n(he.source), A(he.name), a(!0), Ee({ type: he.type, source: he.source, diagramName: he.name }, "linked-template")) : console.warn(`Template not found: ${U}`);
  }, [Ee]);
  se(() => {
    rt() && (Le.current = !0, Ne.type !== i && t(Ne.type), Ne.source !== r && n(Ne.source), Ne.diagramName !== j && A(Ne.diagramName), setTimeout(() => {
      Le.current = !1;
    }, 0));
  }, [Ne, rt]), se(() => {
    const U = (ae) => {
      (/Mac|iPhone|iPad|iPod/.test(navigator.platform) ? ae.metaKey : ae.ctrlKey) && ae.key.toLowerCase() === "z" && (ae.preventDefault(), ae.shiftKey ? Ie() : Be());
    };
    return window.addEventListener("keydown", U), () => window.removeEventListener("keydown", U);
  }, [Be, Ie]);
  const $t = ge(() => ({
    HELP: () => d(!0),
    HELP_ALT: () => d(!0),
    TOGGLE_EDITOR: () => a((U) => !U),
    TOGGLE_AI_CHAT: () => c((U) => !U),
    EXPORT_PNG: () => cr(),
    EXPORT_SVG: () => lr(),
    COPY_CLIPBOARD: () => dr()
  }), []);
  Kv($t, !h), se(() => {
    const U = rv();
    U && tr[U.type] && (t(U.type), n(U.source), U.name && A(U.name), a(!0));
  }, []), se(() => {
    if (O)
      return le.current && clearTimeout(le.current), le.current = setTimeout(() => {
        const U = r || ce.source;
        Xh(i, U, j);
      }, 1e3), () => {
        le.current && clearTimeout(le.current);
      };
  }, [i, r, j, O, ce.source]);
  const Ye = () => {
    const U = r || ce.source;
    Xh(i, U, j), W({ loading: !1, message: "Saved!" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
  }, on = () => {
    const U = r || ce.source, ae = j.replace(/[^a-z0-9]/gi, "_").toLowerCase() || "diagram";
    iv(i, U, ae), W({ loading: !1, message: "File exported!" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
  }, an = (U) => {
    tr[U.type] && (t(U.type), n(U.source), A(U.name || "Recent Diagram"), a(!0));
  }, sn = () => {
    const U = !O;
    _(U), sv(U), W({ loading: !1, message: U ? "Auto-save enabled" : "Auto-save disabled" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
  }, cn = () => {
    const U = X === "dark" ? "light" : "dark";
    Z(U), A2(U), W({ loading: !1, message: `${U === "dark" ? "Dark" : "Light"} mode` }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
  }, ln = () => {
    const U = !Q;
    ke(U), P2(U), W({ loading: !1, message: U ? "Sketch mode" : "Clean mode" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
  }, dn = (U) => {
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
    }[U.template];
    he && tr[he] ? (t(he), n(U.dsl), a(!0)) : (n(U.dsl), a(!0)), ne(!1), W({ loading: !1, message: `Loaded ${U.label} template` }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
  }, cr = async () => {
    if (xe.current) {
      W({ loading: !0, message: "Exporting PNG..." });
      try {
        await Uv(xe.current, `ddflow-${i}`), W({ loading: !1, message: "PNG exported!" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
      } catch (U) {
        W({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => W({ loading: !1, message: "" }), 3e3);
      }
    }
  }, lr = () => {
    if (xe.current) {
      W({ loading: !0, message: "Exporting SVG..." });
      try {
        jv(xe.current, `ddflow-${i}`), W({ loading: !1, message: "SVG exported!" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
      } catch (U) {
        W({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => W({ loading: !1, message: "" }), 3e3);
      }
    }
  }, dr = async () => {
    if (xe.current) {
      W({ loading: !0, message: "Copying to clipboard..." });
      try {
        await Gv(xe.current), W({ loading: !1, message: "Copied to clipboard!" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
      } catch (U) {
        W({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => W({ loading: !1, message: "" }), 3e3);
      }
    }
  }, un = () => {
    if (xe.current) {
      W({ loading: !0, message: "Opening print dialog..." });
      try {
        Yv(xe.current), W({ loading: !1, message: "" });
      } catch (U) {
        W({ loading: !1, message: `Error: ${U.message}` }), setTimeout(() => W({ loading: !1, message: "" }), 3e3);
      }
    }
  }, ur = (U, ae) => {
    t(U), n(ae), a(!0);
  }, pr = V((U) => {
    const he = (r || ce.source).trim() + `
` + U;
    St(he), a(!0);
  }, [r, ce.source, St]), pn = V(async () => {
    if (!Ot()) {
      W({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => W({ loading: !1, message: "" }), 3e3);
      return;
    }
    R(!0), M({ type: "explain", content: null, loading: !0 });
    try {
      const U = await P1(pe, i);
      M({ type: "explain", content: U, loading: !1 });
    } catch (U) {
      M({ type: "explain", content: `Error: ${U.message}`, loading: !1 });
    } finally {
      R(!1);
    }
  }, [pe, i]), hn = V(async () => {
    if (!Ot()) {
      W({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => W({ loading: !1, message: "" }), 3e3);
      return;
    }
    R(!0), M({ type: "improve", content: null, loading: !0 });
    try {
      const U = await D1(pe, i);
      M({ type: "improve", content: U, loading: !1 });
    } catch (U) {
      M({ type: "improve", content: { explanation: `Error: ${U.message}` }, loading: !1 });
    } finally {
      R(!1);
    }
  }, [pe, i]), fn = V(async () => {
    if (!Ot()) {
      W({ loading: !1, message: "AI not configured. Check .env" }), setTimeout(() => W({ loading: !1, message: "" }), 3e3);
      return;
    }
    R(!0), M({ type: "validate", content: null, loading: !0 });
    try {
      const U = await L1(pe, i);
      M({ type: "validate", content: U, loading: !1 });
    } catch (U) {
      M({ type: "validate", content: { isValid: !1, errors: [U.message], warnings: [], suggestions: [] }, loading: !1 });
    } finally {
      R(!1);
    }
  }, [pe, i]), gn = V(() => {
    var U;
    (k == null ? void 0 : k.type) === "improve" && ((U = k.content) != null && U.dsl) && (t(k.content.type), n(k.content.dsl), a(!0), M(null));
  }, [k]), mn = (U, ae) => {
    t(U), n(ae), a(!0), W({ loading: !1, message: "Mermaid imported!" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
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
        /* @__PURE__ */ l("button", { onClick: cn, style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: `Switch to ${X === "dark" ? "light" : "dark"} mode`, children: X === "dark" ? "☀️" : "🌙" }),
        /* @__PURE__ */ l("button", { onClick: ln, style: { padding: "6px 10px", background: Q ? `${te.accentPrimary}20` : "transparent", border: `1px solid ${Q ? te.accentPrimary : J.border}`, borderRadius: 6, color: Q ? te.accentPrimary : J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: Q ? "Switch to clean mode" : "Switch to sketch mode", children: Q ? "✏️" : "✨" }),
        /* @__PURE__ */ l("button", { onClick: () => ne(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Shape Library", children: /* @__PURE__ */ S("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ l("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
          /* @__PURE__ */ l("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })
        ] }) }),
        /* @__PURE__ */ l("button", { onClick: () => d(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Keyboard Shortcuts (?)", children: "⌨️" }),
        /* @__PURE__ */ l("button", { onClick: () => I(!0), style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }, title: "Color Settings", children: "🎨" }),
        /* @__PURE__ */ l("a", { href: "/guide.html", target: "_blank", rel: "noopener noreferrer", style: { padding: "6px 10px", background: "transparent", border: `1px solid ${J.border}`, borderRadius: 6, color: J.textSecondary, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none" }, children: "📖" }),
        /* @__PURE__ */ l("div", { style: { height: 20, width: 1, background: J.border, margin: "0 4px" } }),
        /* @__PURE__ */ l("button", { onClick: () => c(!e), style: { padding: "6px 14px", background: e ? `linear-gradient(135deg, ${te.accentPrimary}, ${te.accentSecondary})` : `${te.accentPrimary}20`, border: `1px solid ${e ? "transparent" : te.accentPrimary}`, borderRadius: 6, color: e ? "#fff" : te.accentPrimary, fontSize: "0.85rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontWeight: 600 }, children: "🤖 AI Chat" })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: { display: "flex", gap: 10, padding: "10px 20px", borderBottom: `1px solid ${J.border}`, background: J.toolbarBg, alignItems: "center" }, children: [
      /* @__PURE__ */ l(
        Z1,
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
            { icon: "⭐", label: "Save as Template", description: "Save current as template", onClick: () => C(!0) },
            { type: "divider" },
            { type: "section", label: "Save & Open" },
            { icon: "💾", label: "Save", description: "Save to browser", shortcut: "⌘S", onClick: Ye },
            { icon: "📥", label: "Export File", description: "Download .ddflow", onClick: on },
            { icon: "📂", label: "Open Recent", description: "Open saved diagrams", onClick: () => f(!0) },
            { type: "divider" },
            { icon: O ? "✓" : "○", label: "Auto-save", description: O ? "Enabled" : "Disabled", onClick: sn, active: O }
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
            { icon: "📋", label: "Copy to Clipboard", shortcut: "⌘⇧C", onClick: dr, disabled: z.loading },
            { icon: "🖼️", label: "Export as PNG", shortcut: "⌘⇧P", onClick: cr, disabled: z.loading },
            { icon: "📐", label: "Export as SVG", shortcut: "⌘⇧S", onClick: lr, disabled: z.loading },
            { icon: "📄", label: "Export as PDF", onClick: un, disabled: z.loading },
            { type: "divider" },
            { type: "section", label: "Code" },
            { icon: "🧜‍♀️", label: "Export as Mermaid", description: "Convert to Mermaid syntax", onClick: () => s(!0) },
            { icon: "🌱", label: "Export as PlantUML", description: "Convert to PlantUML syntax", onClick: () => Y(!0) }
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
            { icon: "🖼️", label: "Import from Image", description: "AI extracts diagram from image", onClick: () => P(!0) },
            { icon: "🧜‍♀️", label: "Import Mermaid", description: "Convert from Mermaid syntax", onClick: () => g(!0) },
            { icon: "🌱", label: "Import PlantUML", description: "Convert from PlantUML syntax", onClick: () => F(!0) },
            { icon: "📂", label: "Open .ddflow File", description: "Load saved diagram", onClick: () => f(!0) }
          ]
        }
      ),
      /* @__PURE__ */ l(
        _r,
        {
          label: E ? "AI..." : "AI Tools",
          icon: "✨",
          color: v.purple,
          theme: J,
          items: [
            { type: "section", label: "Analysis" },
            { icon: "📖", label: "Explain Diagram", description: "Get AI explanation of diagram", onClick: pn, disabled: E },
            { icon: "✅", label: "Validate Diagram", description: "Check for errors and issues", onClick: fn, disabled: E },
            { type: "divider" },
            { type: "section", label: "Enhancement" },
            { icon: "💡", label: "Suggest Improvements", description: "Get AI optimization tips", onClick: hn, disabled: E }
          ]
        }
      ),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: J.border } }),
      /* @__PURE__ */ S("div", { style: { display: "flex", gap: 4 }, children: [
        /* @__PURE__ */ l("button", { onClick: Be, disabled: !Ke, style: { padding: "6px 10px", background: Ke ? "rgba(100,116,139,0.2)" : "rgba(255,255,255,0.02)", border: `1px solid ${Ke ? "rgba(100,116,139,0.3)" : "rgba(255,255,255,0.05)"}`, borderRadius: 6, color: Ke ? v.slate : "#444", fontSize: "0.7rem", cursor: Ke ? "pointer" : "not-allowed", opacity: Ke ? 1 : 0.5, display: "flex", alignItems: "center", gap: 4 }, title: "Undo (Cmd+Z)", children: /* @__PURE__ */ l("span", { children: "↩" }) }),
        /* @__PURE__ */ l("button", { onClick: Ie, disabled: !qe, style: { padding: "6px 10px", background: qe ? "rgba(100,116,139,0.2)" : "rgba(255,255,255,0.02)", border: `1px solid ${qe ? "rgba(100,116,139,0.3)" : "rgba(255,255,255,0.05)"}`, borderRadius: 6, color: qe ? v.slate : "#444", fontSize: "0.7rem", cursor: qe ? "pointer" : "not-allowed", opacity: qe ? 1 : 0.5, display: "flex", alignItems: "center", gap: 4 }, title: "Redo (Cmd+Shift+Z)", children: /* @__PURE__ */ l("span", { children: "↪" }) })
      ] }),
      /* @__PURE__ */ l("div", { style: { width: 1, height: 28, background: J.border } }),
      /* @__PURE__ */ S("button", { onClick: () => $(!w), style: { padding: "6px 12px", background: w ? `${v.orange}30` : "rgba(255,255,255,0.05)", border: `1px solid ${w ? v.orange : "rgba(255,255,255,0.1)"}`, borderRadius: 6, color: w ? v.orange : X === "dark" ? "#888" : "#64748b", fontSize: "0.8rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }, title: "Toggle Node Library", children: [
        w ? "📚" : "📦",
        " Nodes"
      ] }),
      /* @__PURE__ */ l("div", { style: { flex: 1 } }),
      z.message && /* @__PURE__ */ S("span", { style: { padding: "5px 10px", background: z.message.startsWith("Error") ? "rgba(239,68,68,0.2)" : "rgba(16,185,129,0.2)", borderRadius: 6, color: z.message.startsWith("Error") ? v.red : v.green, fontSize: "0.7rem", display: "flex", alignItems: "center", gap: 4 }, children: [
        z.loading && "⏳",
        z.message
      ] }),
      /* @__PURE__ */ S("button", { onClick: () => a(!o), style: { padding: "6px 12px", background: o ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${o ? v.green : "rgba(255,255,255,0.1)"}`, borderRadius: 6, color: o ? v.green : X === "dark" ? "#888" : "#64748b", fontSize: "0.7rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }, children: [
        o ? "✓" : "◇",
        " Editor"
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: { display: "flex", height: "calc(100vh - 105px)" }, children: [
      o && /* @__PURE__ */ l("div", { style: { width: 300, borderRight: `1px solid ${J.border}` }, children: /* @__PURE__ */ l("textarea", { value: r || ce.source, onChange: (U) => St(U.target.value), style: { width: "100%", height: "100%", background: J.editorBg, border: "none", padding: 12, color: J.editorText, fontFamily: "Monaco, monospace", fontSize: "0.65rem", lineHeight: 1.5, resize: "none", outline: "none", boxSizing: "border-box", transition: "background 0.3s ease, color 0.3s ease" } }) }),
      /* @__PURE__ */ l(
        "div",
        {
          ref: xe,
          style: { flex: 1, padding: 10, marginRight: e ? "380px" : 0, marginLeft: w ? "260px" : 0, transition: "margin 0.3s ease" },
          onDragOver: (U) => {
            U.preventDefault(), U.dataTransfer.dropEffect = "copy";
          },
          onDrop: (U) => {
            U.preventDefault();
            const ae = U.dataTransfer.getData("text/plain");
            ae && pr(ae);
          },
          children: /* @__PURE__ */ l(dw, { type: i, source: pe, theme: X, sketchMode: Q, onLabelChange: qt, onDeleteNodes: kt, onPasteNodes: Ct, onEdgeLabelChange: ft, onCreateConnection: Ge, onLinkedTemplateClick: Fe }, `${i}-${pe}-${X}-${Q}`)
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
        isOpen: u,
        onClose: () => f(!1),
        onSelect: an,
        onRemove: nv
      }
    ),
    /* @__PURE__ */ l(
      hw,
      {
        isOpen: m,
        onClose: () => g(!1),
        onImport: mn
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
        isOpen: p,
        onClose: () => x(!1),
        onApplyTemplate: ur,
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      X1,
      {
        isOpen: b,
        onClose: () => C(!1),
        diagramType: i,
        diagramSource: pe,
        theme: J
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
      background: J.modalBg,
      borderRadius: 16,
      border: `1px solid ${J.border}`,
      width: "100%",
      maxWidth: 600,
      maxHeight: "80vh",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
    }, onClick: (U) => U.stopPropagation(), children: [
      /* @__PURE__ */ S("div", { style: {
        padding: "16px 20px",
        borderBottom: `1px solid ${J.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: `${v.purple}15`
      }, children: [
        /* @__PURE__ */ S("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: k.type === "explain" ? "📖" : k.type === "validate" ? "✅" : "💡" }),
          /* @__PURE__ */ l("span", { style: { fontWeight: 600, color: J.textPrimary }, children: k.type === "explain" ? "Diagram Explanation" : k.type === "validate" ? "Validation Results" : "Improvement Suggestions" })
        ] }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => M(null),
            disabled: k.loading,
            style: {
              background: "transparent",
              border: "none",
              color: J.textSecondary,
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
      }, children: k.loading ? /* @__PURE__ */ S("div", { style: { textAlign: "center", padding: 40, color: J.textSecondary }, children: [
        /* @__PURE__ */ l("div", { style: { fontSize: "2rem", marginBottom: 12 }, children: "⏳" }),
        /* @__PURE__ */ l("div", { children: "Analyzing diagram with AI..." })
      ] }) : k.type === "explain" ? /* @__PURE__ */ l("div", { style: { color: J.textPrimary, lineHeight: 1.6, fontSize: "0.9rem", whiteSpace: "pre-wrap" }, children: k.content }) : k.type === "validate" ? /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ S("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          background: (hr = k.content) != null && hr.isValid ? `${v.green}15` : `${v.red}15`,
          borderRadius: 8,
          marginBottom: 16
        }, children: [
          /* @__PURE__ */ l("span", { style: { fontSize: "1.2rem" }, children: (fr = k.content) != null && fr.isValid ? "✓" : "✗" }),
          /* @__PURE__ */ l("span", { style: { color: (gr = k.content) != null && gr.isValid ? v.green : v.red, fontWeight: 600 }, children: (mr = k.content) != null && mr.isValid ? "Diagram is valid" : "Issues found" })
        ] }),
        ((br = (yr = k.content) == null ? void 0 : yr.errors) == null ? void 0 : br.length) > 0 && /* @__PURE__ */ S("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { color: v.red, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Errors:" }),
          k.content.errors.map((U, ae) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.red}10`, borderRadius: 6, marginBottom: 4, color: J.textPrimary, fontSize: "0.85rem" }, children: U }, ae))
        ] }),
        ((xr = (Ht = k.content) == null ? void 0 : Ht.warnings) == null ? void 0 : xr.length) > 0 && /* @__PURE__ */ S("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ l("div", { style: { color: v.orange, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Warnings:" }),
          k.content.warnings.map((U, ae) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.orange}10`, borderRadius: 6, marginBottom: 4, color: J.textPrimary, fontSize: "0.85rem" }, children: U }, ae))
        ] }),
        ((wr = (vr = k.content) == null ? void 0 : vr.suggestions) == null ? void 0 : wr.length) > 0 && /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: { color: v.blue, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Suggestions:" }),
          k.content.suggestions.map((U, ae) => /* @__PURE__ */ l("div", { style: { padding: "8px 12px", background: `${v.blue}10`, borderRadius: 6, marginBottom: 4, color: J.textPrimary, fontSize: "0.85rem" }, children: U }, ae))
        ] })
      ] }) : k.type === "improve" ? /* @__PURE__ */ S("div", { children: [
        /* @__PURE__ */ l("div", { style: { color: J.textPrimary, lineHeight: 1.6, fontSize: "0.9rem", marginBottom: 20, whiteSpace: "pre-wrap" }, children: ((Sr = k.content) == null ? void 0 : Sr.explanation) || "No explanation provided." }),
        ((kr = k.content) == null ? void 0 : kr.dsl) && /* @__PURE__ */ S("div", { children: [
          /* @__PURE__ */ l("div", { style: { color: v.purple, fontWeight: 600, marginBottom: 8, fontSize: "0.85rem" }, children: "Improved DSL:" }),
          /* @__PURE__ */ l("pre", { style: {
            background: J.inputBg,
            padding: 12,
            borderRadius: 8,
            fontSize: "0.75rem",
            overflow: "auto",
            maxHeight: 200,
            color: J.editorText
          }, children: k.content.dsl })
        ] })
      ] }) : null }),
      !k.loading && /* @__PURE__ */ S("div", { style: {
        padding: "12px 20px",
        borderTop: `1px solid ${J.border}`,
        display: "flex",
        justifyContent: "flex-end",
        gap: 10
      }, children: [
        k.type === "improve" && ((Cr = k.content) == null ? void 0 : Cr.dsl) && /* @__PURE__ */ l(
          "button",
          {
            onClick: gn,
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
        isOpen: T,
        onClose: () => I(!1),
        onApply: oe,
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      hv,
      {
        isOpen: B,
        onClose: () => P(!1),
        onImport: (U, ae, he) => {
          t(U), n(ae), he && A(he), a(!0), P(!1), W({ loading: !1, message: `Diagram "${he || "Imported"}" imported from image!` }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
        },
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      Wv,
      {
        isOpen: L,
        onClose: () => F(!1),
        onImport: (U, ae) => {
          t(U), n(ae), a(!0), F(!1), W({ loading: !1, message: "PlantUML diagram imported!" }), setTimeout(() => W({ loading: !1, message: "" }), 2e3);
        },
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      Nv,
      {
        isOpen: q,
        onClose: () => Y(!1),
        diagramType: i,
        diagramSource: pe,
        theme: J
      }
    ),
    /* @__PURE__ */ l(
      qv,
      {
        isOpen: re,
        onClose: () => ne(!1),
        onSelectShape: dn,
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
  hc as FlowDiagram,
  J2 as GanttDiagram,
  Q2 as GitGraphDiagram,
  F2 as MindMapDiagram,
  H2 as NetworkDiagram,
  X2 as OrgChartDiagram,
  O2 as Parsers,
  ew as PieChartDiagram,
  tw as QuadrantDiagram,
  K2 as SequenceDiagram,
  we as THEMES,
  Z2 as TimelineDiagram,
  dw as UniversalDiagram,
  lw as UseCaseDiagram,
  j2 as UserJourneyDiagram,
  nw as WireframeDiagram,
  yw as default
};
//# sourceMappingURL=index.esm.js.map
