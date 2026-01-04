"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("react/jsx-runtime"),M=require("react");var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function em(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function hc(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var hn,Wc;function tm(){if(Wc)return hn;Wc=1;function a(){this.__data__=[],this.size=0}return hn=a,hn}var fn,zc;function Nt(){if(zc)return fn;zc=1;function a(t,r){return t===r||t!==t&&r!==r}return fn=a,fn}var gn,Oc;function _r(){if(Oc)return gn;Oc=1;var a=Nt();function t(r,n){for(var i=r.length;i--;)if(a(r[i][0],n))return i;return-1}return gn=t,gn}var mn,qc;function rm(){if(qc)return mn;qc=1;var a=_r(),t=Array.prototype,r=t.splice;function n(i){var s=this.__data__,e=a(s,i);if(e<0)return!1;var c=s.length-1;return e==c?s.pop():r.call(s,e,1),--this.size,!0}return mn=n,mn}var yn,Fc;function nm(){if(Fc)return yn;Fc=1;var a=_r();function t(r){var n=this.__data__,i=a(n,r);return i<0?void 0:n[i][1]}return yn=t,yn}var xn,Uc;function am(){if(Uc)return xn;Uc=1;var a=_r();function t(r){return a(this.__data__,r)>-1}return xn=t,xn}var bn,Gc;function om(){if(Gc)return bn;Gc=1;var a=_r();function t(r,n){var i=this.__data__,s=a(i,r);return s<0?(++this.size,i.push([r,n])):i[s][1]=n,this}return bn=t,bn}var vn,Hc;function Dr(){if(Hc)return vn;Hc=1;var a=tm(),t=rm(),r=nm(),n=am(),i=om();function s(e){var c=-1,h=e==null?0:e.length;for(this.clear();++c<h;){var d=e[c];this.set(d[0],d[1])}}return s.prototype.clear=a,s.prototype.delete=t,s.prototype.get=r,s.prototype.has=n,s.prototype.set=i,vn=s,vn}var wn,Yc;function im(){if(Yc)return wn;Yc=1;var a=Dr();function t(){this.__data__=new a,this.size=0}return wn=t,wn}var Sn,Vc;function sm(){if(Vc)return Sn;Vc=1;function a(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n}return Sn=a,Sn}var kn,Kc;function cm(){if(Kc)return kn;Kc=1;function a(t){return this.__data__.get(t)}return kn=a,kn}var Cn,Xc;function lm(){if(Xc)return Cn;Xc=1;function a(t){return this.__data__.has(t)}return Cn=a,Cn}var En,Qc;function ef(){if(Qc)return En;Qc=1;var a=typeof Sr=="object"&&Sr&&Sr.Object===Object&&Sr;return En=a,En}var jn,Zc;function st(){if(Zc)return jn;Zc=1;var a=ef(),t=typeof self=="object"&&self&&self.Object===Object&&self,r=a||t||Function("return this")();return jn=r,jn}var Mn,Jc;function Bt(){if(Jc)return Mn;Jc=1;var a=st(),t=a.Symbol;return Mn=t,Mn}var An,el;function dm(){if(el)return An;el=1;var a=Bt(),t=Object.prototype,r=t.hasOwnProperty,n=t.toString,i=a?a.toStringTag:void 0;function s(e){var c=r.call(e,i),h=e[i];try{e[i]=void 0;var d=!0}catch{}var u=n.call(e);return d&&(c?e[i]=h:delete e[i]),u}return An=s,An}var Rn,tl;function um(){if(tl)return Rn;tl=1;var a=Object.prototype,t=a.toString;function r(n){return t.call(n)}return Rn=r,Rn}var $n,rl;function $t(){if(rl)return $n;rl=1;var a=Bt(),t=dm(),r=um(),n="[object Null]",i="[object Undefined]",s=a?a.toStringTag:void 0;function e(c){return c==null?c===void 0?i:n:s&&s in Object(c)?t(c):r(c)}return $n=e,$n}var In,nl;function et(){if(nl)return In;nl=1;function a(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}return In=a,In}var Tn,al;function Zt(){if(al)return Tn;al=1;var a=$t(),t=et(),r="[object AsyncFunction]",n="[object Function]",i="[object GeneratorFunction]",s="[object Proxy]";function e(c){if(!t(c))return!1;var h=a(c);return h==n||h==i||h==r||h==s}return Tn=e,Tn}var Pn,ol;function pm(){if(ol)return Pn;ol=1;var a=st(),t=a["__core-js_shared__"];return Pn=t,Pn}var _n,il;function hm(){if(il)return _n;il=1;var a=pm(),t=function(){var n=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function r(n){return!!t&&t in n}return _n=r,_n}var Dn,sl;function tf(){if(sl)return Dn;sl=1;var a=Function.prototype,t=a.toString;function r(n){if(n!=null){try{return t.call(n)}catch{}try{return n+""}catch{}}return""}return Dn=r,Dn}var Ln,cl;function fm(){if(cl)return Ln;cl=1;var a=Zt(),t=hm(),r=et(),n=tf(),i=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,e=Function.prototype,c=Object.prototype,h=e.toString,d=c.hasOwnProperty,u=RegExp("^"+h.call(d).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function f(m){if(!r(m)||t(m))return!1;var g=a(m)?u:s;return g.test(n(m))}return Ln=f,Ln}var Nn,ll;function gm(){if(ll)return Nn;ll=1;function a(t,r){return t==null?void 0:t[r]}return Nn=a,Nn}var Bn,dl;function It(){if(dl)return Bn;dl=1;var a=fm(),t=gm();function r(n,i){var s=t(n,i);return a(s)?s:void 0}return Bn=r,Bn}var Wn,ul;function fc(){if(ul)return Wn;ul=1;var a=It(),t=st(),r=a(t,"Map");return Wn=r,Wn}var zn,pl;function Lr(){if(pl)return zn;pl=1;var a=It(),t=a(Object,"create");return zn=t,zn}var On,hl;function mm(){if(hl)return On;hl=1;var a=Lr();function t(){this.__data__=a?a(null):{},this.size=0}return On=t,On}var qn,fl;function ym(){if(fl)return qn;fl=1;function a(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}return qn=a,qn}var Fn,gl;function xm(){if(gl)return Fn;gl=1;var a=Lr(),t="__lodash_hash_undefined__",r=Object.prototype,n=r.hasOwnProperty;function i(s){var e=this.__data__;if(a){var c=e[s];return c===t?void 0:c}return n.call(e,s)?e[s]:void 0}return Fn=i,Fn}var Un,ml;function bm(){if(ml)return Un;ml=1;var a=Lr(),t=Object.prototype,r=t.hasOwnProperty;function n(i){var s=this.__data__;return a?s[i]!==void 0:r.call(s,i)}return Un=n,Un}var Gn,yl;function vm(){if(yl)return Gn;yl=1;var a=Lr(),t="__lodash_hash_undefined__";function r(n,i){var s=this.__data__;return this.size+=this.has(n)?0:1,s[n]=a&&i===void 0?t:i,this}return Gn=r,Gn}var Hn,xl;function wm(){if(xl)return Hn;xl=1;var a=mm(),t=ym(),r=xm(),n=bm(),i=vm();function s(e){var c=-1,h=e==null?0:e.length;for(this.clear();++c<h;){var d=e[c];this.set(d[0],d[1])}}return s.prototype.clear=a,s.prototype.delete=t,s.prototype.get=r,s.prototype.has=n,s.prototype.set=i,Hn=s,Hn}var Yn,bl;function Sm(){if(bl)return Yn;bl=1;var a=wm(),t=Dr(),r=fc();function n(){this.size=0,this.__data__={hash:new a,map:new(r||t),string:new a}}return Yn=n,Yn}var Vn,vl;function km(){if(vl)return Vn;vl=1;function a(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}return Vn=a,Vn}var Kn,wl;function Nr(){if(wl)return Kn;wl=1;var a=km();function t(r,n){var i=r.__data__;return a(n)?i[typeof n=="string"?"string":"hash"]:i.map}return Kn=t,Kn}var Xn,Sl;function Cm(){if(Sl)return Xn;Sl=1;var a=Nr();function t(r){var n=a(this,r).delete(r);return this.size-=n?1:0,n}return Xn=t,Xn}var Qn,kl;function Em(){if(kl)return Qn;kl=1;var a=Nr();function t(r){return a(this,r).get(r)}return Qn=t,Qn}var Zn,Cl;function jm(){if(Cl)return Zn;Cl=1;var a=Nr();function t(r){return a(this,r).has(r)}return Zn=t,Zn}var Jn,El;function Mm(){if(El)return Jn;El=1;var a=Nr();function t(r,n){var i=a(this,r),s=i.size;return i.set(r,n),this.size+=i.size==s?0:1,this}return Jn=t,Jn}var ea,jl;function gc(){if(jl)return ea;jl=1;var a=Sm(),t=Cm(),r=Em(),n=jm(),i=Mm();function s(e){var c=-1,h=e==null?0:e.length;for(this.clear();++c<h;){var d=e[c];this.set(d[0],d[1])}}return s.prototype.clear=a,s.prototype.delete=t,s.prototype.get=r,s.prototype.has=n,s.prototype.set=i,ea=s,ea}var ta,Ml;function Am(){if(Ml)return ta;Ml=1;var a=Dr(),t=fc(),r=gc(),n=200;function i(s,e){var c=this.__data__;if(c instanceof a){var h=c.__data__;if(!t||h.length<n-1)return h.push([s,e]),this.size=++c.size,this;c=this.__data__=new r(h)}return c.set(s,e),this.size=c.size,this}return ta=i,ta}var ra,Al;function Br(){if(Al)return ra;Al=1;var a=Dr(),t=im(),r=sm(),n=cm(),i=lm(),s=Am();function e(c){var h=this.__data__=new a(c);this.size=h.size}return e.prototype.clear=t,e.prototype.delete=r,e.prototype.get=n,e.prototype.has=i,e.prototype.set=s,ra=e,ra}var na,Rl;function mc(){if(Rl)return na;Rl=1;function a(t,r){for(var n=-1,i=t==null?0:t.length;++n<i&&r(t[n],n,t)!==!1;);return t}return na=a,na}var aa,$l;function rf(){if($l)return aa;$l=1;var a=It(),t=function(){try{var r=a(Object,"defineProperty");return r({},"",{}),r}catch{}}();return aa=t,aa}var oa,Il;function Wr(){if(Il)return oa;Il=1;var a=rf();function t(r,n,i){n=="__proto__"&&a?a(r,n,{configurable:!0,enumerable:!0,value:i,writable:!0}):r[n]=i}return oa=t,oa}var ia,Tl;function zr(){if(Tl)return ia;Tl=1;var a=Wr(),t=Nt(),r=Object.prototype,n=r.hasOwnProperty;function i(s,e,c){var h=s[e];(!(n.call(s,e)&&t(h,c))||c===void 0&&!(e in s))&&a(s,e,c)}return ia=i,ia}var sa,Pl;function Jt(){if(Pl)return sa;Pl=1;var a=zr(),t=Wr();function r(n,i,s,e){var c=!s;s||(s={});for(var h=-1,d=i.length;++h<d;){var u=i[h],f=e?e(s[u],n[u],u,s,n):void 0;f===void 0&&(f=n[u]),c?t(s,u,f):a(s,u,f)}return s}return sa=r,sa}var ca,_l;function Rm(){if(_l)return ca;_l=1;function a(t,r){for(var n=-1,i=Array(t);++n<t;)i[n]=r(n);return i}return ca=a,ca}var la,Dl;function pt(){if(Dl)return la;Dl=1;function a(t){return t!=null&&typeof t=="object"}return la=a,la}var da,Ll;function $m(){if(Ll)return da;Ll=1;var a=$t(),t=pt(),r="[object Arguments]";function n(i){return t(i)&&a(i)==r}return da=n,da}var ua,Nl;function er(){if(Nl)return ua;Nl=1;var a=$m(),t=pt(),r=Object.prototype,n=r.hasOwnProperty,i=r.propertyIsEnumerable,s=a(function(){return arguments}())?a:function(e){return t(e)&&n.call(e,"callee")&&!i.call(e,"callee")};return ua=s,ua}var pa,Bl;function Ie(){if(Bl)return pa;Bl=1;var a=Array.isArray;return pa=a,pa}var Gt={exports:{}},ha,Wl;function Im(){if(Wl)return ha;Wl=1;function a(){return!1}return ha=a,ha}Gt.exports;var zl;function Wt(){return zl||(zl=1,function(a,t){var r=st(),n=Im(),i=t&&!t.nodeType&&t,s=i&&!0&&a&&!a.nodeType&&a,e=s&&s.exports===i,c=e?r.Buffer:void 0,h=c?c.isBuffer:void 0,d=h||n;a.exports=d}(Gt,Gt.exports)),Gt.exports}var fa,Ol;function Or(){if(Ol)return fa;Ol=1;var a=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function r(n,i){var s=typeof n;return i=i??a,!!i&&(s=="number"||s!="symbol"&&t.test(n))&&n>-1&&n%1==0&&n<i}return fa=r,fa}var ga,ql;function yc(){if(ql)return ga;ql=1;var a=9007199254740991;function t(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=a}return ga=t,ga}var ma,Fl;function Tm(){if(Fl)return ma;Fl=1;var a=$t(),t=yc(),r=pt(),n="[object Arguments]",i="[object Array]",s="[object Boolean]",e="[object Date]",c="[object Error]",h="[object Function]",d="[object Map]",u="[object Number]",f="[object Object]",m="[object RegExp]",g="[object Set]",y="[object String]",l="[object WeakMap]",p="[object ArrayBuffer]",x="[object DataView]",b="[object Float32Array]",C="[object Float64Array]",w="[object Int8Array]",k="[object Int16Array]",S="[object Int32Array]",E="[object Uint8Array]",j="[object Uint8ClampedArray]",$="[object Uint16Array]",R="[object Uint32Array]",A={};A[b]=A[C]=A[w]=A[k]=A[S]=A[E]=A[j]=A[$]=A[R]=!0,A[n]=A[i]=A[p]=A[s]=A[x]=A[e]=A[c]=A[h]=A[d]=A[u]=A[f]=A[m]=A[g]=A[y]=A[l]=!1;function _(T){return r(T)&&t(T.length)&&!!A[a(T)]}return ma=_,ma}var ya,Ul;function qr(){if(Ul)return ya;Ul=1;function a(t){return function(r){return t(r)}}return ya=a,ya}var Ht={exports:{}};Ht.exports;var Gl;function xc(){return Gl||(Gl=1,function(a,t){var r=ef(),n=t&&!t.nodeType&&t,i=n&&!0&&a&&!a.nodeType&&a,s=i&&i.exports===n,e=s&&r.process,c=function(){try{var h=i&&i.require&&i.require("util").types;return h||e&&e.binding&&e.binding("util")}catch{}}();a.exports=c}(Ht,Ht.exports)),Ht.exports}var xa,Hl;function tr(){if(Hl)return xa;Hl=1;var a=Tm(),t=qr(),r=xc(),n=r&&r.isTypedArray,i=n?t(n):a;return xa=i,xa}var ba,Yl;function nf(){if(Yl)return ba;Yl=1;var a=Rm(),t=er(),r=Ie(),n=Wt(),i=Or(),s=tr(),e=Object.prototype,c=e.hasOwnProperty;function h(d,u){var f=r(d),m=!f&&t(d),g=!f&&!m&&n(d),y=!f&&!m&&!g&&s(d),l=f||m||g||y,p=l?a(d.length,String):[],x=p.length;for(var b in d)(u||c.call(d,b))&&!(l&&(b=="length"||g&&(b=="offset"||b=="parent")||y&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||i(b,x)))&&p.push(b);return p}return ba=h,ba}var va,Vl;function Fr(){if(Vl)return va;Vl=1;var a=Object.prototype;function t(r){var n=r&&r.constructor,i=typeof n=="function"&&n.prototype||a;return r===i}return va=t,va}var wa,Kl;function af(){if(Kl)return wa;Kl=1;function a(t,r){return function(n){return t(r(n))}}return wa=a,wa}var Sa,Xl;function Pm(){if(Xl)return Sa;Xl=1;var a=af(),t=a(Object.keys,Object);return Sa=t,Sa}var ka,Ql;function bc(){if(Ql)return ka;Ql=1;var a=Fr(),t=Pm(),r=Object.prototype,n=r.hasOwnProperty;function i(s){if(!a(s))return t(s);var e=[];for(var c in Object(s))n.call(s,c)&&c!="constructor"&&e.push(c);return e}return ka=i,ka}var Ca,Zl;function bt(){if(Zl)return Ca;Zl=1;var a=Zt(),t=yc();function r(n){return n!=null&&t(n.length)&&!a(n)}return Ca=r,Ca}var Ea,Jl;function Mt(){if(Jl)return Ea;Jl=1;var a=nf(),t=bc(),r=bt();function n(i){return r(i)?a(i):t(i)}return Ea=n,Ea}var ja,ed;function _m(){if(ed)return ja;ed=1;var a=Jt(),t=Mt();function r(n,i){return n&&a(i,t(i),n)}return ja=r,ja}var Ma,td;function Dm(){if(td)return Ma;td=1;function a(t){var r=[];if(t!=null)for(var n in Object(t))r.push(n);return r}return Ma=a,Ma}var Aa,rd;function Lm(){if(rd)return Aa;rd=1;var a=et(),t=Fr(),r=Dm(),n=Object.prototype,i=n.hasOwnProperty;function s(e){if(!a(e))return r(e);var c=t(e),h=[];for(var d in e)d=="constructor"&&(c||!i.call(e,d))||h.push(d);return h}return Aa=s,Aa}var Ra,nd;function Tt(){if(nd)return Ra;nd=1;var a=nf(),t=Lm(),r=bt();function n(i){return r(i)?a(i,!0):t(i)}return Ra=n,Ra}var $a,ad;function Nm(){if(ad)return $a;ad=1;var a=Jt(),t=Tt();function r(n,i){return n&&a(i,t(i),n)}return $a=r,$a}var Yt={exports:{}};Yt.exports;var od;function of(){return od||(od=1,function(a,t){var r=st(),n=t&&!t.nodeType&&t,i=n&&!0&&a&&!a.nodeType&&a,s=i&&i.exports===n,e=s?r.Buffer:void 0,c=e?e.allocUnsafe:void 0;function h(d,u){if(u)return d.slice();var f=d.length,m=c?c(f):new d.constructor(f);return d.copy(m),m}a.exports=h}(Yt,Yt.exports)),Yt.exports}var Ia,id;function sf(){if(id)return Ia;id=1;function a(t,r){var n=-1,i=t.length;for(r||(r=Array(i));++n<i;)r[n]=t[n];return r}return Ia=a,Ia}var Ta,sd;function cf(){if(sd)return Ta;sd=1;function a(t,r){for(var n=-1,i=t==null?0:t.length,s=0,e=[];++n<i;){var c=t[n];r(c,n,t)&&(e[s++]=c)}return e}return Ta=a,Ta}var Pa,cd;function lf(){if(cd)return Pa;cd=1;function a(){return[]}return Pa=a,Pa}var _a,ld;function vc(){if(ld)return _a;ld=1;var a=cf(),t=lf(),r=Object.prototype,n=r.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(e){return e==null?[]:(e=Object(e),a(i(e),function(c){return n.call(e,c)}))}:t;return _a=s,_a}var Da,dd;function Bm(){if(dd)return Da;dd=1;var a=Jt(),t=vc();function r(n,i){return a(n,t(n),i)}return Da=r,Da}var La,ud;function wc(){if(ud)return La;ud=1;function a(t,r){for(var n=-1,i=r.length,s=t.length;++n<i;)t[s+n]=r[n];return t}return La=a,La}var Na,pd;function Ur(){if(pd)return Na;pd=1;var a=af(),t=a(Object.getPrototypeOf,Object);return Na=t,Na}var Ba,hd;function df(){if(hd)return Ba;hd=1;var a=wc(),t=Ur(),r=vc(),n=lf(),i=Object.getOwnPropertySymbols,s=i?function(e){for(var c=[];e;)a(c,r(e)),e=t(e);return c}:n;return Ba=s,Ba}var Wa,fd;function Wm(){if(fd)return Wa;fd=1;var a=Jt(),t=df();function r(n,i){return a(n,t(n),i)}return Wa=r,Wa}var za,gd;function uf(){if(gd)return za;gd=1;var a=wc(),t=Ie();function r(n,i,s){var e=i(n);return t(n)?e:a(e,s(n))}return za=r,za}var Oa,md;function pf(){if(md)return Oa;md=1;var a=uf(),t=vc(),r=Mt();function n(i){return a(i,r,t)}return Oa=n,Oa}var qa,yd;function zm(){if(yd)return qa;yd=1;var a=uf(),t=df(),r=Tt();function n(i){return a(i,r,t)}return qa=n,qa}var Fa,xd;function Om(){if(xd)return Fa;xd=1;var a=It(),t=st(),r=a(t,"DataView");return Fa=r,Fa}var Ua,bd;function qm(){if(bd)return Ua;bd=1;var a=It(),t=st(),r=a(t,"Promise");return Ua=r,Ua}var Ga,vd;function hf(){if(vd)return Ga;vd=1;var a=It(),t=st(),r=a(t,"Set");return Ga=r,Ga}var Ha,wd;function Fm(){if(wd)return Ha;wd=1;var a=It(),t=st(),r=a(t,"WeakMap");return Ha=r,Ha}var Ya,Sd;function zt(){if(Sd)return Ya;Sd=1;var a=Om(),t=fc(),r=qm(),n=hf(),i=Fm(),s=$t(),e=tf(),c="[object Map]",h="[object Object]",d="[object Promise]",u="[object Set]",f="[object WeakMap]",m="[object DataView]",g=e(a),y=e(t),l=e(r),p=e(n),x=e(i),b=s;return(a&&b(new a(new ArrayBuffer(1)))!=m||t&&b(new t)!=c||r&&b(r.resolve())!=d||n&&b(new n)!=u||i&&b(new i)!=f)&&(b=function(C){var w=s(C),k=w==h?C.constructor:void 0,S=k?e(k):"";if(S)switch(S){case g:return m;case y:return c;case l:return d;case p:return u;case x:return f}return w}),Ya=b,Ya}var Va,kd;function Um(){if(kd)return Va;kd=1;var a=Object.prototype,t=a.hasOwnProperty;function r(n){var i=n.length,s=new n.constructor(i);return i&&typeof n[0]=="string"&&t.call(n,"index")&&(s.index=n.index,s.input=n.input),s}return Va=r,Va}var Ka,Cd;function ff(){if(Cd)return Ka;Cd=1;var a=st(),t=a.Uint8Array;return Ka=t,Ka}var Xa,Ed;function Sc(){if(Ed)return Xa;Ed=1;var a=ff();function t(r){var n=new r.constructor(r.byteLength);return new a(n).set(new a(r)),n}return Xa=t,Xa}var Qa,jd;function Gm(){if(jd)return Qa;jd=1;var a=Sc();function t(r,n){var i=n?a(r.buffer):r.buffer;return new r.constructor(i,r.byteOffset,r.byteLength)}return Qa=t,Qa}var Za,Md;function Hm(){if(Md)return Za;Md=1;var a=/\w*$/;function t(r){var n=new r.constructor(r.source,a.exec(r));return n.lastIndex=r.lastIndex,n}return Za=t,Za}var Ja,Ad;function Ym(){if(Ad)return Ja;Ad=1;var a=Bt(),t=a?a.prototype:void 0,r=t?t.valueOf:void 0;function n(i){return r?Object(r.call(i)):{}}return Ja=n,Ja}var eo,Rd;function gf(){if(Rd)return eo;Rd=1;var a=Sc();function t(r,n){var i=n?a(r.buffer):r.buffer;return new r.constructor(i,r.byteOffset,r.length)}return eo=t,eo}var to,$d;function Vm(){if($d)return to;$d=1;var a=Sc(),t=Gm(),r=Hm(),n=Ym(),i=gf(),s="[object Boolean]",e="[object Date]",c="[object Map]",h="[object Number]",d="[object RegExp]",u="[object Set]",f="[object String]",m="[object Symbol]",g="[object ArrayBuffer]",y="[object DataView]",l="[object Float32Array]",p="[object Float64Array]",x="[object Int8Array]",b="[object Int16Array]",C="[object Int32Array]",w="[object Uint8Array]",k="[object Uint8ClampedArray]",S="[object Uint16Array]",E="[object Uint32Array]";function j($,R,A){var _=$.constructor;switch(R){case g:return a($);case s:case e:return new _(+$);case y:return t($,A);case l:case p:case x:case b:case C:case w:case k:case S:case E:return i($,A);case c:return new _;case h:case f:return new _($);case d:return r($);case u:return new _;case m:return n($)}}return to=j,to}var ro,Id;function mf(){if(Id)return ro;Id=1;var a=et(),t=Object.create,r=function(){function n(){}return function(i){if(!a(i))return{};if(t)return t(i);n.prototype=i;var s=new n;return n.prototype=void 0,s}}();return ro=r,ro}var no,Td;function yf(){if(Td)return no;Td=1;var a=mf(),t=Ur(),r=Fr();function n(i){return typeof i.constructor=="function"&&!r(i)?a(t(i)):{}}return no=n,no}var ao,Pd;function Km(){if(Pd)return ao;Pd=1;var a=zt(),t=pt(),r="[object Map]";function n(i){return t(i)&&a(i)==r}return ao=n,ao}var oo,_d;function Xm(){if(_d)return oo;_d=1;var a=Km(),t=qr(),r=xc(),n=r&&r.isMap,i=n?t(n):a;return oo=i,oo}var io,Dd;function Qm(){if(Dd)return io;Dd=1;var a=zt(),t=pt(),r="[object Set]";function n(i){return t(i)&&a(i)==r}return io=n,io}var so,Ld;function Zm(){if(Ld)return so;Ld=1;var a=Qm(),t=qr(),r=xc(),n=r&&r.isSet,i=n?t(n):a;return so=i,so}var co,Nd;function xf(){if(Nd)return co;Nd=1;var a=Br(),t=mc(),r=zr(),n=_m(),i=Nm(),s=of(),e=sf(),c=Bm(),h=Wm(),d=pf(),u=zm(),f=zt(),m=Um(),g=Vm(),y=yf(),l=Ie(),p=Wt(),x=Xm(),b=et(),C=Zm(),w=Mt(),k=Tt(),S=1,E=2,j=4,$="[object Arguments]",R="[object Array]",A="[object Boolean]",_="[object Date]",T="[object Error]",P="[object Function]",W="[object GeneratorFunction]",N="[object Map]",G="[object Number]",V="[object Object]",J="[object RegExp]",Z="[object Set]",ae="[object String]",q="[object Symbol]",L="[object WeakMap]",X="[object ArrayBuffer]",I="[object DataView]",B="[object Float32Array]",z="[object Float64Array]",ce="[object Int8Array]",xe="[object Int16Array]",ue="[object Int32Array]",_e="[object Uint8Array]",Re="[object Uint8ClampedArray]",ne="[object Uint16Array]",U="[object Uint32Array]",Y={};Y[$]=Y[R]=Y[X]=Y[I]=Y[A]=Y[_]=Y[B]=Y[z]=Y[ce]=Y[xe]=Y[ue]=Y[N]=Y[G]=Y[V]=Y[J]=Y[Z]=Y[ae]=Y[q]=Y[_e]=Y[Re]=Y[ne]=Y[U]=!0,Y[T]=Y[P]=Y[L]=!1;function ie(K,te,ee,oe,de,be){var ke,ye=te&S,je=te&E,Le=te&j;if(ee&&(ke=de?ee(K,oe,de,be):ee(K)),ke!==void 0)return ke;if(!b(K))return K;var qe=l(K);if(qe){if(ke=m(K),!ye)return e(K,ke)}else{var Fe=f(K),nt=Fe==P||Fe==W;if(p(K))return s(K,ye);if(Fe==V||Fe==$||nt&&!de){if(ke=je||nt?{}:y(K),!ye)return je?h(K,i(ke,K)):c(K,n(ke,K))}else{if(!Y[Fe])return de?K:{};ke=g(K,Fe,ye)}}be||(be=new a);var at=be.get(K);if(at)return at;be.set(K,ke),C(K)?K.forEach(function(Be){ke.add(ie(Be,te,ee,Be,K,be))}):x(K)&&K.forEach(function(Be,We){ke.set(We,ie(Be,te,ee,We,K,be))});var Ue=Le?je?u:d:je?k:w,Qe=qe?void 0:Ue(K);return t(Qe||K,function(Be,We){Qe&&(We=Be,Be=K[We]),r(ke,We,ie(Be,te,ee,We,K,be))}),ke}return co=ie,co}var lo,Bd;function Jm(){if(Bd)return lo;Bd=1;var a=xf(),t=4;function r(n){return a(n,t)}return lo=r,lo}var uo,Wd;function kc(){if(Wd)return uo;Wd=1;function a(t){return function(){return t}}return uo=a,uo}var po,zd;function ey(){if(zd)return po;zd=1;function a(t){return function(r,n,i){for(var s=-1,e=Object(r),c=i(r),h=c.length;h--;){var d=c[t?h:++s];if(n(e[d],d,e)===!1)break}return r}}return po=a,po}var ho,Od;function Cc(){if(Od)return ho;Od=1;var a=ey(),t=a();return ho=t,ho}var fo,qd;function Ec(){if(qd)return fo;qd=1;var a=Cc(),t=Mt();function r(n,i){return n&&a(n,i,t)}return fo=r,fo}var go,Fd;function ty(){if(Fd)return go;Fd=1;var a=bt();function t(r,n){return function(i,s){if(i==null)return i;if(!a(i))return r(i,s);for(var e=i.length,c=n?e:-1,h=Object(i);(n?c--:++c<e)&&s(h[c],c,h)!==!1;);return i}}return go=t,go}var mo,Ud;function Gr(){if(Ud)return mo;Ud=1;var a=Ec(),t=ty(),r=t(a);return mo=r,mo}var yo,Gd;function Pt(){if(Gd)return yo;Gd=1;function a(t){return t}return yo=a,yo}var xo,Hd;function bf(){if(Hd)return xo;Hd=1;var a=Pt();function t(r){return typeof r=="function"?r:a}return xo=t,xo}var bo,Yd;function vf(){if(Yd)return bo;Yd=1;var a=mc(),t=Gr(),r=bf(),n=Ie();function i(s,e){var c=n(s)?a:t;return c(s,r(e))}return bo=i,bo}var vo,Vd;function wf(){return Vd||(Vd=1,vo=vf()),vo}var wo,Kd;function ry(){if(Kd)return wo;Kd=1;var a=Gr();function t(r,n){var i=[];return a(r,function(s,e,c){n(s,e,c)&&i.push(s)}),i}return wo=t,wo}var So,Xd;function ny(){if(Xd)return So;Xd=1;var a="__lodash_hash_undefined__";function t(r){return this.__data__.set(r,a),this}return So=t,So}var ko,Qd;function ay(){if(Qd)return ko;Qd=1;function a(t){return this.__data__.has(t)}return ko=a,ko}var Co,Zd;function Sf(){if(Zd)return Co;Zd=1;var a=gc(),t=ny(),r=ay();function n(i){var s=-1,e=i==null?0:i.length;for(this.__data__=new a;++s<e;)this.add(i[s])}return n.prototype.add=n.prototype.push=t,n.prototype.has=r,Co=n,Co}var Eo,Jd;function oy(){if(Jd)return Eo;Jd=1;function a(t,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(t[n],n,t))return!0;return!1}return Eo=a,Eo}var jo,eu;function kf(){if(eu)return jo;eu=1;function a(t,r){return t.has(r)}return jo=a,jo}var Mo,tu;function Cf(){if(tu)return Mo;tu=1;var a=Sf(),t=oy(),r=kf(),n=1,i=2;function s(e,c,h,d,u,f){var m=h&n,g=e.length,y=c.length;if(g!=y&&!(m&&y>g))return!1;var l=f.get(e),p=f.get(c);if(l&&p)return l==c&&p==e;var x=-1,b=!0,C=h&i?new a:void 0;for(f.set(e,c),f.set(c,e);++x<g;){var w=e[x],k=c[x];if(d)var S=m?d(k,w,x,c,e,f):d(w,k,x,e,c,f);if(S!==void 0){if(S)continue;b=!1;break}if(C){if(!t(c,function(E,j){if(!r(C,j)&&(w===E||u(w,E,h,d,f)))return C.push(j)})){b=!1;break}}else if(!(w===k||u(w,k,h,d,f))){b=!1;break}}return f.delete(e),f.delete(c),b}return Mo=s,Mo}var Ao,ru;function iy(){if(ru)return Ao;ru=1;function a(t){var r=-1,n=Array(t.size);return t.forEach(function(i,s){n[++r]=[s,i]}),n}return Ao=a,Ao}var Ro,nu;function jc(){if(nu)return Ro;nu=1;function a(t){var r=-1,n=Array(t.size);return t.forEach(function(i){n[++r]=i}),n}return Ro=a,Ro}var $o,au;function sy(){if(au)return $o;au=1;var a=Bt(),t=ff(),r=Nt(),n=Cf(),i=iy(),s=jc(),e=1,c=2,h="[object Boolean]",d="[object Date]",u="[object Error]",f="[object Map]",m="[object Number]",g="[object RegExp]",y="[object Set]",l="[object String]",p="[object Symbol]",x="[object ArrayBuffer]",b="[object DataView]",C=a?a.prototype:void 0,w=C?C.valueOf:void 0;function k(S,E,j,$,R,A,_){switch(j){case b:if(S.byteLength!=E.byteLength||S.byteOffset!=E.byteOffset)return!1;S=S.buffer,E=E.buffer;case x:return!(S.byteLength!=E.byteLength||!A(new t(S),new t(E)));case h:case d:case m:return r(+S,+E);case u:return S.name==E.name&&S.message==E.message;case g:case l:return S==E+"";case f:var T=i;case y:var P=$&e;if(T||(T=s),S.size!=E.size&&!P)return!1;var W=_.get(S);if(W)return W==E;$|=c,_.set(S,E);var N=n(T(S),T(E),$,R,A,_);return _.delete(S),N;case p:if(w)return w.call(S)==w.call(E)}return!1}return $o=k,$o}var Io,ou;function cy(){if(ou)return Io;ou=1;var a=pf(),t=1,r=Object.prototype,n=r.hasOwnProperty;function i(s,e,c,h,d,u){var f=c&t,m=a(s),g=m.length,y=a(e),l=y.length;if(g!=l&&!f)return!1;for(var p=g;p--;){var x=m[p];if(!(f?x in e:n.call(e,x)))return!1}var b=u.get(s),C=u.get(e);if(b&&C)return b==e&&C==s;var w=!0;u.set(s,e),u.set(e,s);for(var k=f;++p<g;){x=m[p];var S=s[x],E=e[x];if(h)var j=f?h(E,S,x,e,s,u):h(S,E,x,s,e,u);if(!(j===void 0?S===E||d(S,E,c,h,u):j)){w=!1;break}k||(k=x=="constructor")}if(w&&!k){var $=s.constructor,R=e.constructor;$!=R&&"constructor"in s&&"constructor"in e&&!(typeof $=="function"&&$ instanceof $&&typeof R=="function"&&R instanceof R)&&(w=!1)}return u.delete(s),u.delete(e),w}return Io=i,Io}var To,iu;function ly(){if(iu)return To;iu=1;var a=Br(),t=Cf(),r=sy(),n=cy(),i=zt(),s=Ie(),e=Wt(),c=tr(),h=1,d="[object Arguments]",u="[object Array]",f="[object Object]",m=Object.prototype,g=m.hasOwnProperty;function y(l,p,x,b,C,w){var k=s(l),S=s(p),E=k?u:i(l),j=S?u:i(p);E=E==d?f:E,j=j==d?f:j;var $=E==f,R=j==f,A=E==j;if(A&&e(l)){if(!e(p))return!1;k=!0,$=!1}if(A&&!$)return w||(w=new a),k||c(l)?t(l,p,x,b,C,w):r(l,p,E,x,b,C,w);if(!(x&h)){var _=$&&g.call(l,"__wrapped__"),T=R&&g.call(p,"__wrapped__");if(_||T){var P=_?l.value():l,W=T?p.value():p;return w||(w=new a),C(P,W,x,b,w)}}return A?(w||(w=new a),n(l,p,x,b,C,w)):!1}return To=y,To}var Po,su;function Ef(){if(su)return Po;su=1;var a=ly(),t=pt();function r(n,i,s,e,c){return n===i?!0:n==null||i==null||!t(n)&&!t(i)?n!==n&&i!==i:a(n,i,s,e,r,c)}return Po=r,Po}var _o,cu;function dy(){if(cu)return _o;cu=1;var a=Br(),t=Ef(),r=1,n=2;function i(s,e,c,h){var d=c.length,u=d,f=!h;if(s==null)return!u;for(s=Object(s);d--;){var m=c[d];if(f&&m[2]?m[1]!==s[m[0]]:!(m[0]in s))return!1}for(;++d<u;){m=c[d];var g=m[0],y=s[g],l=m[1];if(f&&m[2]){if(y===void 0&&!(g in s))return!1}else{var p=new a;if(h)var x=h(y,l,g,s,e,p);if(!(x===void 0?t(l,y,r|n,h,p):x))return!1}}return!0}return _o=i,_o}var Do,lu;function jf(){if(lu)return Do;lu=1;var a=et();function t(r){return r===r&&!a(r)}return Do=t,Do}var Lo,du;function uy(){if(du)return Lo;du=1;var a=jf(),t=Mt();function r(n){for(var i=t(n),s=i.length;s--;){var e=i[s],c=n[e];i[s]=[e,c,a(c)]}return i}return Lo=r,Lo}var No,uu;function Mf(){if(uu)return No;uu=1;function a(t,r){return function(n){return n==null?!1:n[t]===r&&(r!==void 0||t in Object(n))}}return No=a,No}var Bo,pu;function py(){if(pu)return Bo;pu=1;var a=dy(),t=uy(),r=Mf();function n(i){var s=t(i);return s.length==1&&s[0][2]?r(s[0][0],s[0][1]):function(e){return e===i||a(e,i,s)}}return Bo=n,Bo}var Wo,hu;function Ot(){if(hu)return Wo;hu=1;var a=$t(),t=pt(),r="[object Symbol]";function n(i){return typeof i=="symbol"||t(i)&&a(i)==r}return Wo=n,Wo}var zo,fu;function Mc(){if(fu)return zo;fu=1;var a=Ie(),t=Ot(),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function i(s,e){if(a(s))return!1;var c=typeof s;return c=="number"||c=="symbol"||c=="boolean"||s==null||t(s)?!0:n.test(s)||!r.test(s)||e!=null&&s in Object(e)}return zo=i,zo}var Oo,gu;function hy(){if(gu)return Oo;gu=1;var a=gc(),t="Expected a function";function r(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new TypeError(t);var s=function(){var e=arguments,c=i?i.apply(this,e):e[0],h=s.cache;if(h.has(c))return h.get(c);var d=n.apply(this,e);return s.cache=h.set(c,d)||h,d};return s.cache=new(r.Cache||a),s}return r.Cache=a,Oo=r,Oo}var qo,mu;function fy(){if(mu)return qo;mu=1;var a=hy(),t=500;function r(n){var i=a(n,function(e){return s.size===t&&s.clear(),e}),s=i.cache;return i}return qo=r,qo}var Fo,yu;function gy(){if(yu)return Fo;yu=1;var a=fy(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,n=a(function(i){var s=[];return i.charCodeAt(0)===46&&s.push(""),i.replace(t,function(e,c,h,d){s.push(h?d.replace(r,"$1"):c||e)}),s});return Fo=n,Fo}var Uo,xu;function Hr(){if(xu)return Uo;xu=1;function a(t,r){for(var n=-1,i=t==null?0:t.length,s=Array(i);++n<i;)s[n]=r(t[n],n,t);return s}return Uo=a,Uo}var Go,bu;function my(){if(bu)return Go;bu=1;var a=Bt(),t=Hr(),r=Ie(),n=Ot(),i=a?a.prototype:void 0,s=i?i.toString:void 0;function e(c){if(typeof c=="string")return c;if(r(c))return t(c,e)+"";if(n(c))return s?s.call(c):"";var h=c+"";return h=="0"&&1/c==-1/0?"-0":h}return Go=e,Go}var Ho,vu;function Af(){if(vu)return Ho;vu=1;var a=my();function t(r){return r==null?"":a(r)}return Ho=t,Ho}var Yo,wu;function Yr(){if(wu)return Yo;wu=1;var a=Ie(),t=Mc(),r=gy(),n=Af();function i(s,e){return a(s)?s:t(s,e)?[s]:r(n(s))}return Yo=i,Yo}var Vo,Su;function rr(){if(Su)return Vo;Su=1;var a=Ot();function t(r){if(typeof r=="string"||a(r))return r;var n=r+"";return n=="0"&&1/r==-1/0?"-0":n}return Vo=t,Vo}var Ko,ku;function Vr(){if(ku)return Ko;ku=1;var a=Yr(),t=rr();function r(n,i){i=a(i,n);for(var s=0,e=i.length;n!=null&&s<e;)n=n[t(i[s++])];return s&&s==e?n:void 0}return Ko=r,Ko}var Xo,Cu;function yy(){if(Cu)return Xo;Cu=1;var a=Vr();function t(r,n,i){var s=r==null?void 0:a(r,n);return s===void 0?i:s}return Xo=t,Xo}var Qo,Eu;function xy(){if(Eu)return Qo;Eu=1;function a(t,r){return t!=null&&r in Object(t)}return Qo=a,Qo}var Zo,ju;function Rf(){if(ju)return Zo;ju=1;var a=Yr(),t=er(),r=Ie(),n=Or(),i=yc(),s=rr();function e(c,h,d){h=a(h,c);for(var u=-1,f=h.length,m=!1;++u<f;){var g=s(h[u]);if(!(m=c!=null&&d(c,g)))break;c=c[g]}return m||++u!=f?m:(f=c==null?0:c.length,!!f&&i(f)&&n(g,f)&&(r(c)||t(c)))}return Zo=e,Zo}var Jo,Mu;function $f(){if(Mu)return Jo;Mu=1;var a=xy(),t=Rf();function r(n,i){return n!=null&&t(n,i,a)}return Jo=r,Jo}var ei,Au;function by(){if(Au)return ei;Au=1;var a=Ef(),t=yy(),r=$f(),n=Mc(),i=jf(),s=Mf(),e=rr(),c=1,h=2;function d(u,f){return n(u)&&i(f)?s(e(u),f):function(m){var g=t(m,u);return g===void 0&&g===f?r(m,u):a(f,g,c|h)}}return ei=d,ei}var ti,Ru;function If(){if(Ru)return ti;Ru=1;function a(t){return function(r){return r==null?void 0:r[t]}}return ti=a,ti}var ri,$u;function vy(){if($u)return ri;$u=1;var a=Vr();function t(r){return function(n){return a(n,r)}}return ri=t,ri}var ni,Iu;function wy(){if(Iu)return ni;Iu=1;var a=If(),t=vy(),r=Mc(),n=rr();function i(s){return r(s)?a(n(s)):t(s)}return ni=i,ni}var ai,Tu;function vt(){if(Tu)return ai;Tu=1;var a=py(),t=by(),r=Pt(),n=Ie(),i=wy();function s(e){return typeof e=="function"?e:e==null?r:typeof e=="object"?n(e)?t(e[0],e[1]):a(e):i(e)}return ai=s,ai}var oi,Pu;function Tf(){if(Pu)return oi;Pu=1;var a=cf(),t=ry(),r=vt(),n=Ie();function i(s,e){var c=n(s)?a:t;return c(s,r(e,3))}return oi=i,oi}var ii,_u;function Sy(){if(_u)return ii;_u=1;var a=Object.prototype,t=a.hasOwnProperty;function r(n,i){return n!=null&&t.call(n,i)}return ii=r,ii}var si,Du;function Pf(){if(Du)return si;Du=1;var a=Sy(),t=Rf();function r(n,i){return n!=null&&t(n,i,a)}return si=r,si}var ci,Lu;function ky(){if(Lu)return ci;Lu=1;var a=bc(),t=zt(),r=er(),n=Ie(),i=bt(),s=Wt(),e=Fr(),c=tr(),h="[object Map]",d="[object Set]",u=Object.prototype,f=u.hasOwnProperty;function m(g){if(g==null)return!0;if(i(g)&&(n(g)||typeof g=="string"||typeof g.splice=="function"||s(g)||c(g)||r(g)))return!g.length;var y=t(g);if(y==h||y==d)return!g.size;if(e(g))return!a(g).length;for(var l in g)if(f.call(g,l))return!1;return!0}return ci=m,ci}var li,Nu;function _f(){if(Nu)return li;Nu=1;function a(t){return t===void 0}return li=a,li}var di,Bu;function Df(){if(Bu)return di;Bu=1;var a=Gr(),t=bt();function r(n,i){var s=-1,e=t(n)?Array(n.length):[];return a(n,function(c,h,d){e[++s]=i(c,h,d)}),e}return di=r,di}var ui,Wu;function Lf(){if(Wu)return ui;Wu=1;var a=Hr(),t=vt(),r=Df(),n=Ie();function i(s,e){var c=n(s)?a:r;return c(s,t(e,3))}return ui=i,ui}var pi,zu;function Cy(){if(zu)return pi;zu=1;function a(t,r,n,i){var s=-1,e=t==null?0:t.length;for(i&&e&&(n=t[++s]);++s<e;)n=r(n,t[s],s,t);return n}return pi=a,pi}var hi,Ou;function Ey(){if(Ou)return hi;Ou=1;function a(t,r,n,i,s){return s(t,function(e,c,h){n=i?(i=!1,e):r(n,e,c,h)}),n}return hi=a,hi}var fi,qu;function Nf(){if(qu)return fi;qu=1;var a=Cy(),t=Gr(),r=vt(),n=Ey(),i=Ie();function s(e,c,h){var d=i(e)?a:n,u=arguments.length<3;return d(e,r(c,4),h,u,t)}return fi=s,fi}var gi,Fu;function jy(){if(Fu)return gi;Fu=1;var a=$t(),t=Ie(),r=pt(),n="[object String]";function i(s){return typeof s=="string"||!t(s)&&r(s)&&a(s)==n}return gi=i,gi}var mi,Uu;function My(){if(Uu)return mi;Uu=1;var a=If(),t=a("length");return mi=t,mi}var yi,Gu;function Ay(){if(Gu)return yi;Gu=1;var a="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",i=t+r+n,s="\\ufe0e\\ufe0f",e="\\u200d",c=RegExp("["+e+a+i+s+"]");function h(d){return c.test(d)}return yi=h,yi}var xi,Hu;function Ry(){if(Hu)return xi;Hu=1;var a="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",i=t+r+n,s="\\ufe0e\\ufe0f",e="["+a+"]",c="["+i+"]",h="\\ud83c[\\udffb-\\udfff]",d="(?:"+c+"|"+h+")",u="[^"+a+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",g="\\u200d",y=d+"?",l="["+s+"]?",p="(?:"+g+"(?:"+[u,f,m].join("|")+")"+l+y+")*",x=l+y+p,b="(?:"+[u+c+"?",c,f,m,e].join("|")+")",C=RegExp(h+"(?="+h+")|"+b+x,"g");function w(k){for(var S=C.lastIndex=0;C.test(k);)++S;return S}return xi=w,xi}var bi,Yu;function $y(){if(Yu)return bi;Yu=1;var a=My(),t=Ay(),r=Ry();function n(i){return t(i)?r(i):a(i)}return bi=n,bi}var vi,Vu;function Iy(){if(Vu)return vi;Vu=1;var a=bc(),t=zt(),r=bt(),n=jy(),i=$y(),s="[object Map]",e="[object Set]";function c(h){if(h==null)return 0;if(r(h))return n(h)?i(h):h.length;var d=t(h);return d==s||d==e?h.size:a(h).length}return vi=c,vi}var wi,Ku;function Ty(){if(Ku)return wi;Ku=1;var a=mc(),t=mf(),r=Ec(),n=vt(),i=Ur(),s=Ie(),e=Wt(),c=Zt(),h=et(),d=tr();function u(f,m,g){var y=s(f),l=y||e(f)||d(f);if(m=n(m,4),g==null){var p=f&&f.constructor;l?g=y?new p:[]:h(f)?g=c(p)?t(i(f)):{}:g={}}return(l?a:r)(f,function(x,b,C){return m(g,x,b,C)}),g}return wi=u,wi}var Si,Xu;function Py(){if(Xu)return Si;Xu=1;var a=Bt(),t=er(),r=Ie(),n=a?a.isConcatSpreadable:void 0;function i(s){return r(s)||t(s)||!!(n&&s&&s[n])}return Si=i,Si}var ki,Qu;function Ac(){if(Qu)return ki;Qu=1;var a=wc(),t=Py();function r(n,i,s,e,c){var h=-1,d=n.length;for(s||(s=t),c||(c=[]);++h<d;){var u=n[h];i>0&&s(u)?i>1?r(u,i-1,s,e,c):a(c,u):e||(c[c.length]=u)}return c}return ki=r,ki}var Ci,Zu;function _y(){if(Zu)return Ci;Zu=1;function a(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}return Ci=a,Ci}var Ei,Ju;function Bf(){if(Ju)return Ei;Ju=1;var a=_y(),t=Math.max;function r(n,i,s){return i=t(i===void 0?n.length-1:i,0),function(){for(var e=arguments,c=-1,h=t(e.length-i,0),d=Array(h);++c<h;)d[c]=e[i+c];c=-1;for(var u=Array(i+1);++c<i;)u[c]=e[c];return u[i]=s(d),a(n,this,u)}}return Ei=r,Ei}var ji,ep;function Dy(){if(ep)return ji;ep=1;var a=kc(),t=rf(),r=Pt(),n=t?function(i,s){return t(i,"toString",{configurable:!0,enumerable:!1,value:a(s),writable:!0})}:r;return ji=n,ji}var Mi,tp;function Ly(){if(tp)return Mi;tp=1;var a=800,t=16,r=Date.now;function n(i){var s=0,e=0;return function(){var c=r(),h=t-(c-e);if(e=c,h>0){if(++s>=a)return arguments[0]}else s=0;return i.apply(void 0,arguments)}}return Mi=n,Mi}var Ai,rp;function Wf(){if(rp)return Ai;rp=1;var a=Dy(),t=Ly(),r=t(a);return Ai=r,Ai}var Ri,np;function Kr(){if(np)return Ri;np=1;var a=Pt(),t=Bf(),r=Wf();function n(i,s){return r(t(i,s,a),i+"")}return Ri=n,Ri}var $i,ap;function zf(){if(ap)return $i;ap=1;function a(t,r,n,i){for(var s=t.length,e=n+(i?1:-1);i?e--:++e<s;)if(r(t[e],e,t))return e;return-1}return $i=a,$i}var Ii,op;function Ny(){if(op)return Ii;op=1;function a(t){return t!==t}return Ii=a,Ii}var Ti,ip;function By(){if(ip)return Ti;ip=1;function a(t,r,n){for(var i=n-1,s=t.length;++i<s;)if(t[i]===r)return i;return-1}return Ti=a,Ti}var Pi,sp;function Wy(){if(sp)return Pi;sp=1;var a=zf(),t=Ny(),r=By();function n(i,s,e){return s===s?r(i,s,e):a(i,t,e)}return Pi=n,Pi}var _i,cp;function zy(){if(cp)return _i;cp=1;var a=Wy();function t(r,n){var i=r==null?0:r.length;return!!i&&a(r,n,0)>-1}return _i=t,_i}var Di,lp;function Oy(){if(lp)return Di;lp=1;function a(t,r,n){for(var i=-1,s=t==null?0:t.length;++i<s;)if(n(r,t[i]))return!0;return!1}return Di=a,Di}var Li,dp;function qy(){if(dp)return Li;dp=1;function a(){}return Li=a,Li}var Ni,up;function Fy(){if(up)return Ni;up=1;var a=hf(),t=qy(),r=jc(),n=1/0,i=a&&1/r(new a([,-0]))[1]==n?function(s){return new a(s)}:t;return Ni=i,Ni}var Bi,pp;function Uy(){if(pp)return Bi;pp=1;var a=Sf(),t=zy(),r=Oy(),n=kf(),i=Fy(),s=jc(),e=200;function c(h,d,u){var f=-1,m=t,g=h.length,y=!0,l=[],p=l;if(u)y=!1,m=r;else if(g>=e){var x=d?null:i(h);if(x)return s(x);y=!1,m=n,p=new a}else p=d?[]:l;e:for(;++f<g;){var b=h[f],C=d?d(b):b;if(b=u||b!==0?b:0,y&&C===C){for(var w=p.length;w--;)if(p[w]===C)continue e;d&&p.push(C),l.push(b)}else m(p,C,u)||(p!==l&&p.push(C),l.push(b))}return l}return Bi=c,Bi}var Wi,hp;function Of(){if(hp)return Wi;hp=1;var a=bt(),t=pt();function r(n){return t(n)&&a(n)}return Wi=r,Wi}var zi,fp;function Gy(){if(fp)return zi;fp=1;var a=Ac(),t=Kr(),r=Uy(),n=Of(),i=t(function(s){return r(a(s,1,n,!0))});return zi=i,zi}var Oi,gp;function Hy(){if(gp)return Oi;gp=1;var a=Hr();function t(r,n){return a(n,function(i){return r[i]})}return Oi=t,Oi}var qi,mp;function qf(){if(mp)return qi;mp=1;var a=Hy(),t=Mt();function r(n){return n==null?[]:a(n,t(n))}return qi=r,qi}var Fi,yp;function tt(){if(yp)return Fi;yp=1;var a;if(typeof hc=="function")try{a={clone:Jm(),constant:kc(),each:wf(),filter:Tf(),has:Pf(),isArray:Ie(),isEmpty:ky(),isFunction:Zt(),isUndefined:_f(),keys:Mt(),map:Lf(),reduce:Nf(),size:Iy(),transform:Ty(),union:Gy(),values:qf()}}catch{}return a||(a=window._),Fi=a,Fi}var Ui,xp;function Rc(){if(xp)return Ui;xp=1;var a=tt();Ui=i;var t="\0",r="\0",n="";function i(u){this._isDirected=a.has(u,"directed")?u.directed:!0,this._isMultigraph=a.has(u,"multigraph")?u.multigraph:!1,this._isCompound=a.has(u,"compound")?u.compound:!1,this._label=void 0,this._defaultNodeLabelFn=a.constant(void 0),this._defaultEdgeLabelFn=a.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[r]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}i.prototype._nodeCount=0,i.prototype._edgeCount=0,i.prototype.isDirected=function(){return this._isDirected},i.prototype.isMultigraph=function(){return this._isMultigraph},i.prototype.isCompound=function(){return this._isCompound},i.prototype.setGraph=function(u){return this._label=u,this},i.prototype.graph=function(){return this._label},i.prototype.setDefaultNodeLabel=function(u){return a.isFunction(u)||(u=a.constant(u)),this._defaultNodeLabelFn=u,this},i.prototype.nodeCount=function(){return this._nodeCount},i.prototype.nodes=function(){return a.keys(this._nodes)},i.prototype.sources=function(){var u=this;return a.filter(this.nodes(),function(f){return a.isEmpty(u._in[f])})},i.prototype.sinks=function(){var u=this;return a.filter(this.nodes(),function(f){return a.isEmpty(u._out[f])})},i.prototype.setNodes=function(u,f){var m=arguments,g=this;return a.each(u,function(y){m.length>1?g.setNode(y,f):g.setNode(y)}),this},i.prototype.setNode=function(u,f){return a.has(this._nodes,u)?(arguments.length>1&&(this._nodes[u]=f),this):(this._nodes[u]=arguments.length>1?f:this._defaultNodeLabelFn(u),this._isCompound&&(this._parent[u]=r,this._children[u]={},this._children[r][u]=!0),this._in[u]={},this._preds[u]={},this._out[u]={},this._sucs[u]={},++this._nodeCount,this)},i.prototype.node=function(u){return this._nodes[u]},i.prototype.hasNode=function(u){return a.has(this._nodes,u)},i.prototype.removeNode=function(u){var f=this;if(a.has(this._nodes,u)){var m=function(g){f.removeEdge(f._edgeObjs[g])};delete this._nodes[u],this._isCompound&&(this._removeFromParentsChildList(u),delete this._parent[u],a.each(this.children(u),function(g){f.setParent(g)}),delete this._children[u]),a.each(a.keys(this._in[u]),m),delete this._in[u],delete this._preds[u],a.each(a.keys(this._out[u]),m),delete this._out[u],delete this._sucs[u],--this._nodeCount}return this},i.prototype.setParent=function(u,f){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(a.isUndefined(f))f=r;else{f+="";for(var m=f;!a.isUndefined(m);m=this.parent(m))if(m===u)throw new Error("Setting "+f+" as parent of "+u+" would create a cycle");this.setNode(f)}return this.setNode(u),this._removeFromParentsChildList(u),this._parent[u]=f,this._children[f][u]=!0,this},i.prototype._removeFromParentsChildList=function(u){delete this._children[this._parent[u]][u]},i.prototype.parent=function(u){if(this._isCompound){var f=this._parent[u];if(f!==r)return f}},i.prototype.children=function(u){if(a.isUndefined(u)&&(u=r),this._isCompound){var f=this._children[u];if(f)return a.keys(f)}else{if(u===r)return this.nodes();if(this.hasNode(u))return[]}},i.prototype.predecessors=function(u){var f=this._preds[u];if(f)return a.keys(f)},i.prototype.successors=function(u){var f=this._sucs[u];if(f)return a.keys(f)},i.prototype.neighbors=function(u){var f=this.predecessors(u);if(f)return a.union(f,this.successors(u))},i.prototype.isLeaf=function(u){var f;return this.isDirected()?f=this.successors(u):f=this.neighbors(u),f.length===0},i.prototype.filterNodes=function(u){var f=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});f.setGraph(this.graph());var m=this;a.each(this._nodes,function(l,p){u(p)&&f.setNode(p,l)}),a.each(this._edgeObjs,function(l){f.hasNode(l.v)&&f.hasNode(l.w)&&f.setEdge(l,m.edge(l))});var g={};function y(l){var p=m.parent(l);return p===void 0||f.hasNode(p)?(g[l]=p,p):p in g?g[p]:y(p)}return this._isCompound&&a.each(f.nodes(),function(l){f.setParent(l,y(l))}),f},i.prototype.setDefaultEdgeLabel=function(u){return a.isFunction(u)||(u=a.constant(u)),this._defaultEdgeLabelFn=u,this},i.prototype.edgeCount=function(){return this._edgeCount},i.prototype.edges=function(){return a.values(this._edgeObjs)},i.prototype.setPath=function(u,f){var m=this,g=arguments;return a.reduce(u,function(y,l){return g.length>1?m.setEdge(y,l,f):m.setEdge(y,l),l}),this},i.prototype.setEdge=function(){var u,f,m,g,y=!1,l=arguments[0];typeof l=="object"&&l!==null&&"v"in l?(u=l.v,f=l.w,m=l.name,arguments.length===2&&(g=arguments[1],y=!0)):(u=l,f=arguments[1],m=arguments[3],arguments.length>2&&(g=arguments[2],y=!0)),u=""+u,f=""+f,a.isUndefined(m)||(m=""+m);var p=c(this._isDirected,u,f,m);if(a.has(this._edgeLabels,p))return y&&(this._edgeLabels[p]=g),this;if(!a.isUndefined(m)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(u),this.setNode(f),this._edgeLabels[p]=y?g:this._defaultEdgeLabelFn(u,f,m);var x=h(this._isDirected,u,f,m);return u=x.v,f=x.w,Object.freeze(x),this._edgeObjs[p]=x,s(this._preds[f],u),s(this._sucs[u],f),this._in[f][p]=x,this._out[u][p]=x,this._edgeCount++,this},i.prototype.edge=function(u,f,m){var g=arguments.length===1?d(this._isDirected,arguments[0]):c(this._isDirected,u,f,m);return this._edgeLabels[g]},i.prototype.hasEdge=function(u,f,m){var g=arguments.length===1?d(this._isDirected,arguments[0]):c(this._isDirected,u,f,m);return a.has(this._edgeLabels,g)},i.prototype.removeEdge=function(u,f,m){var g=arguments.length===1?d(this._isDirected,arguments[0]):c(this._isDirected,u,f,m),y=this._edgeObjs[g];return y&&(u=y.v,f=y.w,delete this._edgeLabels[g],delete this._edgeObjs[g],e(this._preds[f],u),e(this._sucs[u],f),delete this._in[f][g],delete this._out[u][g],this._edgeCount--),this},i.prototype.inEdges=function(u,f){var m=this._in[u];if(m){var g=a.values(m);return f?a.filter(g,function(y){return y.v===f}):g}},i.prototype.outEdges=function(u,f){var m=this._out[u];if(m){var g=a.values(m);return f?a.filter(g,function(y){return y.w===f}):g}},i.prototype.nodeEdges=function(u,f){var m=this.inEdges(u,f);if(m)return m.concat(this.outEdges(u,f))};function s(u,f){u[f]?u[f]++:u[f]=1}function e(u,f){--u[f]||delete u[f]}function c(u,f,m,g){var y=""+f,l=""+m;if(!u&&y>l){var p=y;y=l,l=p}return y+n+l+n+(a.isUndefined(g)?t:g)}function h(u,f,m,g){var y=""+f,l=""+m;if(!u&&y>l){var p=y;y=l,l=p}var x={v:y,w:l};return g&&(x.name=g),x}function d(u,f){return c(u,f.v,f.w,f.name)}return Ui}var Gi,bp;function Yy(){return bp||(bp=1,Gi="2.1.8"),Gi}var Hi,vp;function Vy(){return vp||(vp=1,Hi={Graph:Rc(),version:Yy()}),Hi}var Yi,wp;function Ky(){if(wp)return Yi;wp=1;var a=tt(),t=Rc();Yi={write:r,read:s};function r(e){var c={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:n(e),edges:i(e)};return a.isUndefined(e.graph())||(c.value=a.clone(e.graph())),c}function n(e){return a.map(e.nodes(),function(c){var h=e.node(c),d=e.parent(c),u={v:c};return a.isUndefined(h)||(u.value=h),a.isUndefined(d)||(u.parent=d),u})}function i(e){return a.map(e.edges(),function(c){var h=e.edge(c),d={v:c.v,w:c.w};return a.isUndefined(c.name)||(d.name=c.name),a.isUndefined(h)||(d.value=h),d})}function s(e){var c=new t(e.options).setGraph(e.value);return a.each(e.nodes,function(h){c.setNode(h.v,h.value),h.parent&&c.setParent(h.v,h.parent)}),a.each(e.edges,function(h){c.setEdge({v:h.v,w:h.w,name:h.name},h.value)}),c}return Yi}var Vi,Sp;function Xy(){if(Sp)return Vi;Sp=1;var a=tt();Vi=t;function t(r){var n={},i=[],s;function e(c){a.has(n,c)||(n[c]=!0,s.push(c),a.each(r.successors(c),e),a.each(r.predecessors(c),e))}return a.each(r.nodes(),function(c){s=[],e(c),s.length&&i.push(s)}),i}return Vi}var Ki,kp;function Ff(){if(kp)return Ki;kp=1;var a=tt();Ki=t;function t(){this._arr=[],this._keyIndices={}}return t.prototype.size=function(){return this._arr.length},t.prototype.keys=function(){return this._arr.map(function(r){return r.key})},t.prototype.has=function(r){return a.has(this._keyIndices,r)},t.prototype.priority=function(r){var n=this._keyIndices[r];if(n!==void 0)return this._arr[n].priority},t.prototype.min=function(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key},t.prototype.add=function(r,n){var i=this._keyIndices;if(r=String(r),!a.has(i,r)){var s=this._arr,e=s.length;return i[r]=e,s.push({key:r,priority:n}),this._decrease(e),!0}return!1},t.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var r=this._arr.pop();return delete this._keyIndices[r.key],this._heapify(0),r.key},t.prototype.decrease=function(r,n){var i=this._keyIndices[r];if(n>this._arr[i].priority)throw new Error("New priority is greater than current priority. Key: "+r+" Old: "+this._arr[i].priority+" New: "+n);this._arr[i].priority=n,this._decrease(i)},t.prototype._heapify=function(r){var n=this._arr,i=2*r,s=i+1,e=r;i<n.length&&(e=n[i].priority<n[e].priority?i:e,s<n.length&&(e=n[s].priority<n[e].priority?s:e),e!==r&&(this._swap(r,e),this._heapify(e)))},t.prototype._decrease=function(r){for(var n=this._arr,i=n[r].priority,s;r!==0&&(s=r>>1,!(n[s].priority<i));)this._swap(r,s),r=s},t.prototype._swap=function(r,n){var i=this._arr,s=this._keyIndices,e=i[r],c=i[n];i[r]=c,i[n]=e,s[c.key]=r,s[e.key]=n},Ki}var Xi,Cp;function Uf(){if(Cp)return Xi;Cp=1;var a=tt(),t=Ff();Xi=n;var r=a.constant(1);function n(s,e,c,h){return i(s,String(e),c||r,h||function(d){return s.outEdges(d)})}function i(s,e,c,h){var d={},u=new t,f,m,g=function(y){var l=y.v!==f?y.v:y.w,p=d[l],x=c(y),b=m.distance+x;if(x<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+y+" Weight: "+x);b<p.distance&&(p.distance=b,p.predecessor=f,u.decrease(l,b))};for(s.nodes().forEach(function(y){var l=y===e?0:Number.POSITIVE_INFINITY;d[y]={distance:l},u.add(y,l)});u.size()>0&&(f=u.removeMin(),m=d[f],m.distance!==Number.POSITIVE_INFINITY);)h(f).forEach(g);return d}return Xi}var Qi,Ep;function Qy(){if(Ep)return Qi;Ep=1;var a=Uf(),t=tt();Qi=r;function r(n,i,s){return t.transform(n.nodes(),function(e,c){e[c]=a(n,c,i,s)},{})}return Qi}var Zi,jp;function Gf(){if(jp)return Zi;jp=1;var a=tt();Zi=t;function t(r){var n=0,i=[],s={},e=[];function c(h){var d=s[h]={onStack:!0,lowlink:n,index:n++};if(i.push(h),r.successors(h).forEach(function(m){a.has(s,m)?s[m].onStack&&(d.lowlink=Math.min(d.lowlink,s[m].index)):(c(m),d.lowlink=Math.min(d.lowlink,s[m].lowlink))}),d.lowlink===d.index){var u=[],f;do f=i.pop(),s[f].onStack=!1,u.push(f);while(h!==f);e.push(u)}}return r.nodes().forEach(function(h){a.has(s,h)||c(h)}),e}return Zi}var Ji,Mp;function Zy(){if(Mp)return Ji;Mp=1;var a=tt(),t=Gf();Ji=r;function r(n){return a.filter(t(n),function(i){return i.length>1||i.length===1&&n.hasEdge(i[0],i[0])})}return Ji}var es,Ap;function Jy(){if(Ap)return es;Ap=1;var a=tt();es=r;var t=a.constant(1);function r(i,s,e){return n(i,s||t,e||function(c){return i.outEdges(c)})}function n(i,s,e){var c={},h=i.nodes();return h.forEach(function(d){c[d]={},c[d][d]={distance:0},h.forEach(function(u){d!==u&&(c[d][u]={distance:Number.POSITIVE_INFINITY})}),e(d).forEach(function(u){var f=u.v===d?u.w:u.v,m=s(u);c[d][f]={distance:m,predecessor:d}})}),h.forEach(function(d){var u=c[d];h.forEach(function(f){var m=c[f];h.forEach(function(g){var y=m[d],l=u[g],p=m[g],x=y.distance+l.distance;x<p.distance&&(p.distance=x,p.predecessor=l.predecessor)})})}),c}return es}var ts,Rp;function Hf(){if(Rp)return ts;Rp=1;var a=tt();ts=t,t.CycleException=r;function t(n){var i={},s={},e=[];function c(h){if(a.has(s,h))throw new r;a.has(i,h)||(s[h]=!0,i[h]=!0,a.each(n.predecessors(h),c),delete s[h],e.push(h))}if(a.each(n.sinks(),c),a.size(i)!==n.nodeCount())throw new r;return e}function r(){}return r.prototype=new Error,ts}var rs,$p;function ex(){if($p)return rs;$p=1;var a=Hf();rs=t;function t(r){try{a(r)}catch(n){if(n instanceof a.CycleException)return!1;throw n}return!0}return rs}var ns,Ip;function Yf(){if(Ip)return ns;Ip=1;var a=tt();ns=t;function t(n,i,s){a.isArray(i)||(i=[i]);var e=(n.isDirected()?n.successors:n.neighbors).bind(n),c=[],h={};return a.each(i,function(d){if(!n.hasNode(d))throw new Error("Graph does not have node: "+d);r(n,d,s==="post",h,e,c)}),c}function r(n,i,s,e,c,h){a.has(e,i)||(e[i]=!0,s||h.push(i),a.each(c(i),function(d){r(n,d,s,e,c,h)}),s&&h.push(i))}return ns}var as,Tp;function tx(){if(Tp)return as;Tp=1;var a=Yf();as=t;function t(r,n){return a(r,n,"post")}return as}var os,Pp;function rx(){if(Pp)return os;Pp=1;var a=Yf();os=t;function t(r,n){return a(r,n,"pre")}return os}var is,_p;function nx(){if(_p)return is;_p=1;var a=tt(),t=Rc(),r=Ff();is=n;function n(i,s){var e=new t,c={},h=new r,d;function u(m){var g=m.v===d?m.w:m.v,y=h.priority(g);if(y!==void 0){var l=s(m);l<y&&(c[g]=d,h.decrease(g,l))}}if(i.nodeCount()===0)return e;a.each(i.nodes(),function(m){h.add(m,Number.POSITIVE_INFINITY),e.setNode(m)}),h.decrease(i.nodes()[0],0);for(var f=!1;h.size()>0;){if(d=h.removeMin(),a.has(c,d))e.setEdge(d,c[d]);else{if(f)throw new Error("Input graph is not connected: "+i);f=!0}i.nodeEdges(d).forEach(u)}return e}return is}var ss,Dp;function ax(){return Dp||(Dp=1,ss={components:Xy(),dijkstra:Uf(),dijkstraAll:Qy(),findCycles:Zy(),floydWarshall:Jy(),isAcyclic:ex(),postorder:tx(),preorder:rx(),prim:nx(),tarjan:Gf(),topsort:Hf()}),ss}var cs,Lp;function ox(){if(Lp)return cs;Lp=1;var a=Vy();return cs={Graph:a.Graph,json:Ky(),alg:ax(),version:a.version},cs}var Mr;if(typeof hc=="function")try{Mr=ox()}catch{}Mr||(Mr=window.graphlib);var ct=Mr,ls,Np;function ix(){if(Np)return ls;Np=1;var a=xf(),t=1,r=4;function n(i){return a(i,t|r)}return ls=n,ls}var ds,Bp;function Xr(){if(Bp)return ds;Bp=1;var a=Nt(),t=bt(),r=Or(),n=et();function i(s,e,c){if(!n(c))return!1;var h=typeof e;return(h=="number"?t(c)&&r(e,c.length):h=="string"&&e in c)?a(c[e],s):!1}return ds=i,ds}var us,Wp;function sx(){if(Wp)return us;Wp=1;var a=Kr(),t=Nt(),r=Xr(),n=Tt(),i=Object.prototype,s=i.hasOwnProperty,e=a(function(c,h){c=Object(c);var d=-1,u=h.length,f=u>2?h[2]:void 0;for(f&&r(h[0],h[1],f)&&(u=1);++d<u;)for(var m=h[d],g=n(m),y=-1,l=g.length;++y<l;){var p=g[y],x=c[p];(x===void 0||t(x,i[p])&&!s.call(c,p))&&(c[p]=m[p])}return c});return us=e,us}var ps,zp;function cx(){if(zp)return ps;zp=1;var a=vt(),t=bt(),r=Mt();function n(i){return function(s,e,c){var h=Object(s);if(!t(s)){var d=a(e,3);s=r(s),e=function(f){return d(h[f],f,h)}}var u=i(s,e,c);return u>-1?h[d?s[u]:u]:void 0}}return ps=n,ps}var hs,Op;function lx(){if(Op)return hs;Op=1;var a=/\s/;function t(r){for(var n=r.length;n--&&a.test(r.charAt(n)););return n}return hs=t,hs}var fs,qp;function dx(){if(qp)return fs;qp=1;var a=lx(),t=/^\s+/;function r(n){return n&&n.slice(0,a(n)+1).replace(t,"")}return fs=r,fs}var gs,Fp;function ux(){if(Fp)return gs;Fp=1;var a=dx(),t=et(),r=Ot(),n=NaN,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,e=/^0o[0-7]+$/i,c=parseInt;function h(d){if(typeof d=="number")return d;if(r(d))return n;if(t(d)){var u=typeof d.valueOf=="function"?d.valueOf():d;d=t(u)?u+"":u}if(typeof d!="string")return d===0?d:+d;d=a(d);var f=s.test(d);return f||e.test(d)?c(d.slice(2),f?2:8):i.test(d)?n:+d}return gs=h,gs}var ms,Up;function Vf(){if(Up)return ms;Up=1;var a=ux(),t=1/0,r=17976931348623157e292;function n(i){if(!i)return i===0?i:0;if(i=a(i),i===t||i===-t){var s=i<0?-1:1;return s*r}return i===i?i:0}return ms=n,ms}var ys,Gp;function px(){if(Gp)return ys;Gp=1;var a=Vf();function t(r){var n=a(r),i=n%1;return n===n?i?n-i:n:0}return ys=t,ys}var xs,Hp;function hx(){if(Hp)return xs;Hp=1;var a=zf(),t=vt(),r=px(),n=Math.max;function i(s,e,c){var h=s==null?0:s.length;if(!h)return-1;var d=c==null?0:r(c);return d<0&&(d=n(h+d,0)),a(s,t(e,3),d)}return xs=i,xs}var bs,Yp;function fx(){if(Yp)return bs;Yp=1;var a=cx(),t=hx(),r=a(t);return bs=r,bs}var vs,Vp;function Kf(){if(Vp)return vs;Vp=1;var a=Ac();function t(r){var n=r==null?0:r.length;return n?a(r,1):[]}return vs=t,vs}var ws,Kp;function gx(){if(Kp)return ws;Kp=1;var a=Cc(),t=bf(),r=Tt();function n(i,s){return i==null?i:a(i,t(s),r)}return ws=n,ws}var Ss,Xp;function mx(){if(Xp)return Ss;Xp=1;function a(t){var r=t==null?0:t.length;return r?t[r-1]:void 0}return Ss=a,Ss}var ks,Qp;function yx(){if(Qp)return ks;Qp=1;var a=Wr(),t=Ec(),r=vt();function n(i,s){var e={};return s=r(s,3),t(i,function(c,h,d){a(e,h,s(c,h,d))}),e}return ks=n,ks}var Cs,Zp;function $c(){if(Zp)return Cs;Zp=1;var a=Ot();function t(r,n,i){for(var s=-1,e=r.length;++s<e;){var c=r[s],h=n(c);if(h!=null&&(d===void 0?h===h&&!a(h):i(h,d)))var d=h,u=c}return u}return Cs=t,Cs}var Es,Jp;function xx(){if(Jp)return Es;Jp=1;function a(t,r){return t>r}return Es=a,Es}var js,eh;function bx(){if(eh)return js;eh=1;var a=$c(),t=xx(),r=Pt();function n(i){return i&&i.length?a(i,r,t):void 0}return js=n,js}var Ms,th;function Xf(){if(th)return Ms;th=1;var a=Wr(),t=Nt();function r(n,i,s){(s!==void 0&&!t(n[i],s)||s===void 0&&!(i in n))&&a(n,i,s)}return Ms=r,Ms}var As,rh;function vx(){if(rh)return As;rh=1;var a=$t(),t=Ur(),r=pt(),n="[object Object]",i=Function.prototype,s=Object.prototype,e=i.toString,c=s.hasOwnProperty,h=e.call(Object);function d(u){if(!r(u)||a(u)!=n)return!1;var f=t(u);if(f===null)return!0;var m=c.call(f,"constructor")&&f.constructor;return typeof m=="function"&&m instanceof m&&e.call(m)==h}return As=d,As}var Rs,nh;function Qf(){if(nh)return Rs;nh=1;function a(t,r){if(!(r==="constructor"&&typeof t[r]=="function")&&r!="__proto__")return t[r]}return Rs=a,Rs}var $s,ah;function wx(){if(ah)return $s;ah=1;var a=Jt(),t=Tt();function r(n){return a(n,t(n))}return $s=r,$s}var Is,oh;function Sx(){if(oh)return Is;oh=1;var a=Xf(),t=of(),r=gf(),n=sf(),i=yf(),s=er(),e=Ie(),c=Of(),h=Wt(),d=Zt(),u=et(),f=vx(),m=tr(),g=Qf(),y=wx();function l(p,x,b,C,w,k,S){var E=g(p,b),j=g(x,b),$=S.get(j);if($){a(p,b,$);return}var R=k?k(E,j,b+"",p,x,S):void 0,A=R===void 0;if(A){var _=e(j),T=!_&&h(j),P=!_&&!T&&m(j);R=j,_||T||P?e(E)?R=E:c(E)?R=n(E):T?(A=!1,R=t(j,!0)):P?(A=!1,R=r(j,!0)):R=[]:f(j)||s(j)?(R=E,s(E)?R=y(E):(!u(E)||d(E))&&(R=i(j))):A=!1}A&&(S.set(j,R),w(R,j,C,k,S),S.delete(j)),a(p,b,R)}return Is=l,Is}var Ts,ih;function kx(){if(ih)return Ts;ih=1;var a=Br(),t=Xf(),r=Cc(),n=Sx(),i=et(),s=Tt(),e=Qf();function c(h,d,u,f,m){h!==d&&r(d,function(g,y){if(m||(m=new a),i(g))n(h,d,y,u,c,f,m);else{var l=f?f(e(h,y),g,y+"",h,d,m):void 0;l===void 0&&(l=g),t(h,y,l)}},s)}return Ts=c,Ts}var Ps,sh;function Cx(){if(sh)return Ps;sh=1;var a=Kr(),t=Xr();function r(n){return a(function(i,s){var e=-1,c=s.length,h=c>1?s[c-1]:void 0,d=c>2?s[2]:void 0;for(h=n.length>3&&typeof h=="function"?(c--,h):void 0,d&&t(s[0],s[1],d)&&(h=c<3?void 0:h,c=1),i=Object(i);++e<c;){var u=s[e];u&&n(i,u,e,h)}return i})}return Ps=r,Ps}var _s,ch;function Ex(){if(ch)return _s;ch=1;var a=kx(),t=Cx(),r=t(function(n,i,s){a(n,i,s)});return _s=r,_s}var Ds,lh;function Zf(){if(lh)return Ds;lh=1;function a(t,r){return t<r}return Ds=a,Ds}var Ls,dh;function jx(){if(dh)return Ls;dh=1;var a=$c(),t=Zf(),r=Pt();function n(i){return i&&i.length?a(i,r,t):void 0}return Ls=n,Ls}var Ns,uh;function Mx(){if(uh)return Ns;uh=1;var a=$c(),t=vt(),r=Zf();function n(i,s){return i&&i.length?a(i,t(s,2),r):void 0}return Ns=n,Ns}var Bs,ph;function Ax(){if(ph)return Bs;ph=1;var a=st(),t=function(){return a.Date.now()};return Bs=t,Bs}var Ws,hh;function Rx(){if(hh)return Ws;hh=1;var a=zr(),t=Yr(),r=Or(),n=et(),i=rr();function s(e,c,h,d){if(!n(e))return e;c=t(c,e);for(var u=-1,f=c.length,m=f-1,g=e;g!=null&&++u<f;){var y=i(c[u]),l=h;if(y==="__proto__"||y==="constructor"||y==="prototype")return e;if(u!=m){var p=g[y];l=d?d(p,y,g):void 0,l===void 0&&(l=n(p)?p:r(c[u+1])?[]:{})}a(g,y,l),g=g[y]}return e}return Ws=s,Ws}var zs,fh;function $x(){if(fh)return zs;fh=1;var a=Vr(),t=Rx(),r=Yr();function n(i,s,e){for(var c=-1,h=s.length,d={};++c<h;){var u=s[c],f=a(i,u);e(f,u)&&t(d,r(u,i),f)}return d}return zs=n,zs}var Os,gh;function Ix(){if(gh)return Os;gh=1;var a=$x(),t=$f();function r(n,i){return a(n,i,function(s,e){return t(n,e)})}return Os=r,Os}var qs,mh;function Tx(){if(mh)return qs;mh=1;var a=Kf(),t=Bf(),r=Wf();function n(i){return r(t(i,void 0,a),i+"")}return qs=n,qs}var Fs,yh;function Px(){if(yh)return Fs;yh=1;var a=Ix(),t=Tx(),r=t(function(n,i){return n==null?{}:a(n,i)});return Fs=r,Fs}var Us,xh;function _x(){if(xh)return Us;xh=1;var a=Math.ceil,t=Math.max;function r(n,i,s,e){for(var c=-1,h=t(a((i-n)/(s||1)),0),d=Array(h);h--;)d[e?h:++c]=n,n+=s;return d}return Us=r,Us}var Gs,bh;function Dx(){if(bh)return Gs;bh=1;var a=_x(),t=Xr(),r=Vf();function n(i){return function(s,e,c){return c&&typeof c!="number"&&t(s,e,c)&&(e=c=void 0),s=r(s),e===void 0?(e=s,s=0):e=r(e),c=c===void 0?s<e?1:-1:r(c),a(s,e,c,i)}}return Gs=n,Gs}var Hs,vh;function Lx(){if(vh)return Hs;vh=1;var a=Dx(),t=a();return Hs=t,Hs}var Ys,wh;function Nx(){if(wh)return Ys;wh=1;function a(t,r){var n=t.length;for(t.sort(r);n--;)t[n]=t[n].value;return t}return Ys=a,Ys}var Vs,Sh;function Bx(){if(Sh)return Vs;Sh=1;var a=Ot();function t(r,n){if(r!==n){var i=r!==void 0,s=r===null,e=r===r,c=a(r),h=n!==void 0,d=n===null,u=n===n,f=a(n);if(!d&&!f&&!c&&r>n||c&&h&&u&&!d&&!f||s&&h&&u||!i&&u||!e)return 1;if(!s&&!c&&!f&&r<n||f&&i&&e&&!s&&!c||d&&i&&e||!h&&e||!u)return-1}return 0}return Vs=t,Vs}var Ks,kh;function Wx(){if(kh)return Ks;kh=1;var a=Bx();function t(r,n,i){for(var s=-1,e=r.criteria,c=n.criteria,h=e.length,d=i.length;++s<h;){var u=a(e[s],c[s]);if(u){if(s>=d)return u;var f=i[s];return u*(f=="desc"?-1:1)}}return r.index-n.index}return Ks=t,Ks}var Xs,Ch;function zx(){if(Ch)return Xs;Ch=1;var a=Hr(),t=Vr(),r=vt(),n=Df(),i=Nx(),s=qr(),e=Wx(),c=Pt(),h=Ie();function d(u,f,m){f.length?f=a(f,function(l){return h(l)?function(p){return t(p,l.length===1?l[0]:l)}:l}):f=[c];var g=-1;f=a(f,s(r));var y=n(u,function(l,p,x){var b=a(f,function(C){return C(l)});return{criteria:b,index:++g,value:l}});return i(y,function(l,p){return e(l,p,m)})}return Xs=d,Xs}var Qs,Eh;function Ox(){if(Eh)return Qs;Eh=1;var a=Ac(),t=zx(),r=Kr(),n=Xr(),i=r(function(s,e){if(s==null)return[];var c=e.length;return c>1&&n(s,e[0],e[1])?e=[]:c>2&&n(e[0],e[1],e[2])&&(e=[e[0]]),t(s,a(e,1),[])});return Qs=i,Qs}var Zs,jh;function qx(){if(jh)return Zs;jh=1;var a=Af(),t=0;function r(n){var i=++t;return a(n)+i}return Zs=r,Zs}var Js,Mh;function Fx(){if(Mh)return Js;Mh=1;function a(t,r,n){for(var i=-1,s=t.length,e=r.length,c={};++i<s;){var h=i<e?r[i]:void 0;n(c,t[i],h)}return c}return Js=a,Js}var ec,Ah;function Ux(){if(Ah)return ec;Ah=1;var a=zr(),t=Fx();function r(n,i){return t(n||[],i||[],a)}return ec=r,ec}var Ar;if(typeof hc=="function")try{Ar={cloneDeep:ix(),constant:kc(),defaults:sx(),each:wf(),filter:Tf(),find:fx(),flatten:Kf(),forEach:vf(),forIn:gx(),has:Pf(),isUndefined:_f(),last:mx(),map:Lf(),mapValues:yx(),max:bx(),merge:Ex(),min:jx(),minBy:Mx(),now:Ax(),pick:Px(),range:Lx(),reduce:Nf(),sortBy:Ox(),uniqueId:qx(),values:qf(),zipObject:Ux()}}catch{}Ar||(Ar=window._);var Ae=Ar,Gx=Qr;function Qr(){var a={};a._next=a._prev=a,this._sentinel=a}Qr.prototype.dequeue=function(){var a=this._sentinel,t=a._prev;if(t!==a)return Jf(t),t};Qr.prototype.enqueue=function(a){var t=this._sentinel;a._prev&&a._next&&Jf(a),a._next=t._next,t._next._prev=a,t._next=a,a._prev=t};Qr.prototype.toString=function(){for(var a=[],t=this._sentinel,r=t._prev;r!==t;)a.push(JSON.stringify(r,Hx)),r=r._prev;return"["+a.join(", ")+"]"};function Jf(a){a._prev._next=a._next,a._next._prev=a._prev,delete a._next,delete a._prev}function Hx(a,t){if(a!=="_next"&&a!=="_prev")return t}var mt=Ae,Yx=ct.Graph,Vx=Gx,Kx=Qx,Xx=mt.constant(1);function Qx(a,t){if(a.nodeCount()<=1)return[];var r=Jx(a,t||Xx),n=Zx(r.graph,r.buckets,r.zeroIdx);return mt.flatten(mt.map(n,function(i){return a.outEdges(i.v,i.w)}),!0)}function Zx(a,t,r){for(var n=[],i=t[t.length-1],s=t[0],e;a.nodeCount();){for(;e=s.dequeue();)tc(a,t,r,e);for(;e=i.dequeue();)tc(a,t,r,e);if(a.nodeCount()){for(var c=t.length-2;c>0;--c)if(e=t[c].dequeue(),e){n=n.concat(tc(a,t,r,e,!0));break}}}return n}function tc(a,t,r,n,i){var s=i?[]:void 0;return mt.forEach(a.inEdges(n.v),function(e){var c=a.edge(e),h=a.node(e.v);i&&s.push({v:e.v,w:e.w}),h.out-=c,lc(t,r,h)}),mt.forEach(a.outEdges(n.v),function(e){var c=a.edge(e),h=e.w,d=a.node(h);d.in-=c,lc(t,r,d)}),a.removeNode(n.v),s}function Jx(a,t){var r=new Yx,n=0,i=0;mt.forEach(a.nodes(),function(c){r.setNode(c,{v:c,in:0,out:0})}),mt.forEach(a.edges(),function(c){var h=r.edge(c.v,c.w)||0,d=t(c),u=h+d;r.setEdge(c.v,c.w,u),i=Math.max(i,r.node(c.v).out+=d),n=Math.max(n,r.node(c.w).in+=d)});var s=mt.range(i+n+3).map(function(){return new Vx}),e=n+1;return mt.forEach(r.nodes(),function(c){lc(s,e,r.node(c))}),{graph:r,buckets:s,zeroIdx:e}}function lc(a,t,r){r.out?r.in?a[r.out-r.in+t].enqueue(r):a[a.length-1].enqueue(r):a[0].enqueue(r)}var Rt=Ae,e0=Kx,t0={run:r0,undo:a0};function r0(a){var t=a.graph().acyclicer==="greedy"?e0(a,r(a)):n0(a);Rt.forEach(t,function(n){var i=a.edge(n);a.removeEdge(n),i.forwardName=n.name,i.reversed=!0,a.setEdge(n.w,n.v,i,Rt.uniqueId("rev"))});function r(n){return function(i){return n.edge(i).weight}}}function n0(a){var t=[],r={},n={};function i(s){Rt.has(n,s)||(n[s]=!0,r[s]=!0,Rt.forEach(a.outEdges(s),function(e){Rt.has(r,e.w)?t.push(e):i(e.w)}),delete r[s])}return Rt.forEach(a.nodes(),i),t}function a0(a){Rt.forEach(a.edges(),function(t){var r=a.edge(t);if(r.reversed){a.removeEdge(t);var n=r.forwardName;delete r.reversed,delete r.forwardName,a.setEdge(t.w,t.v,r,n)}})}var we=Ae,eg=ct.Graph,Ke={addDummyNode:tg,simplify:o0,asNonCompoundGraph:i0,successorWeights:s0,predecessorWeights:c0,intersectRect:l0,buildLayerMatrix:d0,normalizeRanks:u0,removeEmptyRanks:p0,addBorderNode:h0,maxRank:rg,partition:f0,time:g0,notime:m0};function tg(a,t,r,n){var i;do i=we.uniqueId(n);while(a.hasNode(i));return r.dummy=t,a.setNode(i,r),i}function o0(a){var t=new eg().setGraph(a.graph());return we.forEach(a.nodes(),function(r){t.setNode(r,a.node(r))}),we.forEach(a.edges(),function(r){var n=t.edge(r.v,r.w)||{weight:0,minlen:1},i=a.edge(r);t.setEdge(r.v,r.w,{weight:n.weight+i.weight,minlen:Math.max(n.minlen,i.minlen)})}),t}function i0(a){var t=new eg({multigraph:a.isMultigraph()}).setGraph(a.graph());return we.forEach(a.nodes(),function(r){a.children(r).length||t.setNode(r,a.node(r))}),we.forEach(a.edges(),function(r){t.setEdge(r,a.edge(r))}),t}function s0(a){var t=we.map(a.nodes(),function(r){var n={};return we.forEach(a.outEdges(r),function(i){n[i.w]=(n[i.w]||0)+a.edge(i).weight}),n});return we.zipObject(a.nodes(),t)}function c0(a){var t=we.map(a.nodes(),function(r){var n={};return we.forEach(a.inEdges(r),function(i){n[i.v]=(n[i.v]||0)+a.edge(i).weight}),n});return we.zipObject(a.nodes(),t)}function l0(a,t){var r=a.x,n=a.y,i=t.x-r,s=t.y-n,e=a.width/2,c=a.height/2;if(!i&&!s)throw new Error("Not possible to find intersection inside of the rectangle");var h,d;return Math.abs(s)*e>Math.abs(i)*c?(s<0&&(c=-c),h=c*i/s,d=c):(i<0&&(e=-e),h=e,d=e*s/i),{x:r+h,y:n+d}}function d0(a){var t=we.map(we.range(rg(a)+1),function(){return[]});return we.forEach(a.nodes(),function(r){var n=a.node(r),i=n.rank;we.isUndefined(i)||(t[i][n.order]=r)}),t}function u0(a){var t=we.min(we.map(a.nodes(),function(r){return a.node(r).rank}));we.forEach(a.nodes(),function(r){var n=a.node(r);we.has(n,"rank")&&(n.rank-=t)})}function p0(a){var t=we.min(we.map(a.nodes(),function(s){return a.node(s).rank})),r=[];we.forEach(a.nodes(),function(s){var e=a.node(s).rank-t;r[e]||(r[e]=[]),r[e].push(s)});var n=0,i=a.graph().nodeRankFactor;we.forEach(r,function(s,e){we.isUndefined(s)&&e%i!==0?--n:n&&we.forEach(s,function(c){a.node(c).rank+=n})})}function h0(a,t,r,n){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=n),tg(a,"border",i,t)}function rg(a){return we.max(we.map(a.nodes(),function(t){var r=a.node(t).rank;if(!we.isUndefined(r))return r}))}function f0(a,t){var r={lhs:[],rhs:[]};return we.forEach(a,function(n){t(n)?r.lhs.push(n):r.rhs.push(n)}),r}function g0(a,t){var r=we.now();try{return t()}finally{console.log(a+" time: "+(we.now()-r)+"ms")}}function m0(a,t){return t()}var ng=Ae,y0=Ke,x0={run:b0,undo:w0};function b0(a){a.graph().dummyChains=[],ng.forEach(a.edges(),function(t){v0(a,t)})}function v0(a,t){var r=t.v,n=a.node(r).rank,i=t.w,s=a.node(i).rank,e=t.name,c=a.edge(t),h=c.labelRank;if(s!==n+1){a.removeEdge(t);var d,u,f;for(f=0,++n;n<s;++f,++n)c.points=[],u={width:0,height:0,edgeLabel:c,edgeObj:t,rank:n},d=y0.addDummyNode(a,"edge",u,"_d"),n===h&&(u.width=c.width,u.height=c.height,u.dummy="edge-label",u.labelpos=c.labelpos),a.setEdge(r,d,{weight:c.weight},e),f===0&&a.graph().dummyChains.push(d),r=d;a.setEdge(r,i,{weight:c.weight},e)}}function w0(a){ng.forEach(a.graph().dummyChains,function(t){var r=a.node(t),n=r.edgeLabel,i;for(a.setEdge(r.edgeObj,n);r.dummy;)i=a.successors(t)[0],a.removeNode(t),n.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(n.x=r.x,n.y=r.y,n.width=r.width,n.height=r.height),t=i,r=a.node(t)})}var kr=Ae,Zr={longestPath:S0,slack:k0};function S0(a){var t={};function r(n){var i=a.node(n);if(kr.has(t,n))return i.rank;t[n]=!0;var s=kr.min(kr.map(a.outEdges(n),function(e){return r(e.w)-a.edge(e).minlen}));return(s===Number.POSITIVE_INFINITY||s===void 0||s===null)&&(s=0),i.rank=s}kr.forEach(a.sources(),r)}function k0(a,t){return a.node(t.w).rank-a.node(t.v).rank-a.edge(t).minlen}var Rr=Ae,C0=ct.Graph,$r=Zr.slack,ag=E0;function E0(a){var t=new C0({directed:!1}),r=a.nodes()[0],n=a.nodeCount();t.setNode(r,{});for(var i,s;j0(t,a)<n;)i=M0(t,a),s=t.hasNode(i.v)?$r(a,i):-$r(a,i),A0(t,a,s);return t}function j0(a,t){function r(n){Rr.forEach(t.nodeEdges(n),function(i){var s=i.v,e=n===s?i.w:s;!a.hasNode(e)&&!$r(t,i)&&(a.setNode(e,{}),a.setEdge(n,e,{}),r(e))})}return Rr.forEach(a.nodes(),r),a.nodeCount()}function M0(a,t){return Rr.minBy(t.edges(),function(r){if(a.hasNode(r.v)!==a.hasNode(r.w))return $r(t,r)})}function A0(a,t,r){Rr.forEach(a.nodes(),function(n){t.node(n).rank+=r})}var xt=Ae,R0=ag,$0=Zr.slack,I0=Zr.longestPath,T0=ct.alg.preorder,P0=ct.alg.postorder,_0=Ke.simplify,D0=_t;_t.initLowLimValues=Tc;_t.initCutValues=Ic;_t.calcCutValue=og;_t.leaveEdge=sg;_t.enterEdge=cg;_t.exchangeEdges=lg;function _t(a){a=_0(a),I0(a);var t=R0(a);Tc(t),Ic(t,a);for(var r,n;r=sg(t);)n=cg(t,a,r),lg(t,a,r,n)}function Ic(a,t){var r=P0(a,a.nodes());r=r.slice(0,r.length-1),xt.forEach(r,function(n){L0(a,t,n)})}function L0(a,t,r){var n=a.node(r),i=n.parent;a.edge(r,i).cutvalue=og(a,t,r)}function og(a,t,r){var n=a.node(r),i=n.parent,s=!0,e=t.edge(r,i),c=0;return e||(s=!1,e=t.edge(i,r)),c=e.weight,xt.forEach(t.nodeEdges(r),function(h){var d=h.v===r,u=d?h.w:h.v;if(u!==i){var f=d===s,m=t.edge(h).weight;if(c+=f?m:-m,B0(a,r,u)){var g=a.edge(r,u).cutvalue;c+=f?-g:g}}}),c}function Tc(a,t){arguments.length<2&&(t=a.nodes()[0]),ig(a,{},1,t)}function ig(a,t,r,n,i){var s=r,e=a.node(n);return t[n]=!0,xt.forEach(a.neighbors(n),function(c){xt.has(t,c)||(r=ig(a,t,r,c,n))}),e.low=s,e.lim=r++,i?e.parent=i:delete e.parent,r}function sg(a){return xt.find(a.edges(),function(t){return a.edge(t).cutvalue<0})}function cg(a,t,r){var n=r.v,i=r.w;t.hasEdge(n,i)||(n=r.w,i=r.v);var s=a.node(n),e=a.node(i),c=s,h=!1;s.lim>e.lim&&(c=e,h=!0);var d=xt.filter(t.edges(),function(u){return h===Rh(a,a.node(u.v),c)&&h!==Rh(a,a.node(u.w),c)});return xt.minBy(d,function(u){return $0(t,u)})}function lg(a,t,r,n){var i=r.v,s=r.w;a.removeEdge(i,s),a.setEdge(n.v,n.w,{}),Tc(a),Ic(a,t),N0(a,t)}function N0(a,t){var r=xt.find(a.nodes(),function(i){return!t.node(i).parent}),n=T0(a,r);n=n.slice(1),xt.forEach(n,function(i){var s=a.node(i).parent,e=t.edge(i,s),c=!1;e||(e=t.edge(s,i),c=!0),t.node(i).rank=t.node(s).rank+(c?e.minlen:-e.minlen)})}function B0(a,t,r){return a.hasEdge(t,r)}function Rh(a,t,r){return r.low<=t.lim&&t.lim<=r.lim}var W0=Zr,dg=W0.longestPath,z0=ag,O0=D0,q0=F0;function F0(a){switch(a.graph().ranker){case"network-simplex":$h(a);break;case"tight-tree":G0(a);break;case"longest-path":U0(a);break;default:$h(a)}}var U0=dg;function G0(a){dg(a),z0(a)}function $h(a){O0(a)}var dc=Ae,H0=Y0;function Y0(a){var t=K0(a);dc.forEach(a.graph().dummyChains,function(r){for(var n=a.node(r),i=n.edgeObj,s=V0(a,t,i.v,i.w),e=s.path,c=s.lca,h=0,d=e[h],u=!0;r!==i.w;){if(n=a.node(r),u){for(;(d=e[h])!==c&&a.node(d).maxRank<n.rank;)h++;d===c&&(u=!1)}if(!u){for(;h<e.length-1&&a.node(d=e[h+1]).minRank<=n.rank;)h++;d=e[h]}a.setParent(r,d),r=a.successors(r)[0]}})}function V0(a,t,r,n){var i=[],s=[],e=Math.min(t[r].low,t[n].low),c=Math.max(t[r].lim,t[n].lim),h,d;h=r;do h=a.parent(h),i.push(h);while(h&&(t[h].low>e||c>t[h].lim));for(d=h,h=n;(h=a.parent(h))!==d;)s.push(h);return{path:i.concat(s.reverse()),lca:d}}function K0(a){var t={},r=0;function n(i){var s=r;dc.forEach(a.children(i),n),t[i]={low:s,lim:r++}}return dc.forEach(a.children(),n),t}var yt=Ae,uc=Ke,X0={run:Q0,cleanup:eb};function Q0(a){var t=uc.addDummyNode(a,"root",{},"_root"),r=Z0(a),n=yt.max(yt.values(r))-1,i=2*n+1;a.graph().nestingRoot=t,yt.forEach(a.edges(),function(e){a.edge(e).minlen*=i});var s=J0(a)+1;yt.forEach(a.children(),function(e){ug(a,t,i,s,n,r,e)}),a.graph().nodeRankFactor=i}function ug(a,t,r,n,i,s,e){var c=a.children(e);if(!c.length){e!==t&&a.setEdge(t,e,{weight:0,minlen:r});return}var h=uc.addBorderNode(a,"_bt"),d=uc.addBorderNode(a,"_bb"),u=a.node(e);a.setParent(h,e),u.borderTop=h,a.setParent(d,e),u.borderBottom=d,yt.forEach(c,function(f){ug(a,t,r,n,i,s,f);var m=a.node(f),g=m.borderTop?m.borderTop:f,y=m.borderBottom?m.borderBottom:f,l=m.borderTop?n:2*n,p=g!==y?1:i-s[e]+1;a.setEdge(h,g,{weight:l,minlen:p,nestingEdge:!0}),a.setEdge(y,d,{weight:l,minlen:p,nestingEdge:!0})}),a.parent(e)||a.setEdge(t,h,{weight:0,minlen:i+s[e]})}function Z0(a){var t={};function r(n,i){var s=a.children(n);s&&s.length&&yt.forEach(s,function(e){r(e,i+1)}),t[n]=i}return yt.forEach(a.children(),function(n){r(n,1)}),t}function J0(a){return yt.reduce(a.edges(),function(t,r){return t+a.edge(r).weight},0)}function eb(a){var t=a.graph();a.removeNode(t.nestingRoot),delete t.nestingRoot,yt.forEach(a.edges(),function(r){var n=a.edge(r);n.nestingEdge&&a.removeEdge(r)})}var rc=Ae,tb=Ke,rb=nb;function nb(a){function t(r){var n=a.children(r),i=a.node(r);if(n.length&&rc.forEach(n,t),rc.has(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var s=i.minRank,e=i.maxRank+1;s<e;++s)Ih(a,"borderLeft","_bl",r,i,s),Ih(a,"borderRight","_br",r,i,s)}}rc.forEach(a.children(),t)}function Ih(a,t,r,n,i,s){var e={width:0,height:0,rank:s,borderType:t},c=i[t][s-1],h=tb.addDummyNode(a,"border",e,r);i[t][s]=h,a.setParent(h,n),c&&a.setEdge(c,h,{weight:1})}var ut=Ae,ab={adjust:ob,undo:ib};function ob(a){var t=a.graph().rankdir.toLowerCase();(t==="lr"||t==="rl")&&pg(a)}function ib(a){var t=a.graph().rankdir.toLowerCase();(t==="bt"||t==="rl")&&sb(a),(t==="lr"||t==="rl")&&(cb(a),pg(a))}function pg(a){ut.forEach(a.nodes(),function(t){Th(a.node(t))}),ut.forEach(a.edges(),function(t){Th(a.edge(t))})}function Th(a){var t=a.width;a.width=a.height,a.height=t}function sb(a){ut.forEach(a.nodes(),function(t){nc(a.node(t))}),ut.forEach(a.edges(),function(t){var r=a.edge(t);ut.forEach(r.points,nc),ut.has(r,"y")&&nc(r)})}function nc(a){a.y=-a.y}function cb(a){ut.forEach(a.nodes(),function(t){ac(a.node(t))}),ut.forEach(a.edges(),function(t){var r=a.edge(t);ut.forEach(r.points,ac),ut.has(r,"x")&&ac(r)})}function ac(a){var t=a.x;a.x=a.y,a.y=t}var ft=Ae,lb=db;function db(a){var t={},r=ft.filter(a.nodes(),function(c){return!a.children(c).length}),n=ft.max(ft.map(r,function(c){return a.node(c).rank})),i=ft.map(ft.range(n+1),function(){return[]});function s(c){if(!ft.has(t,c)){t[c]=!0;var h=a.node(c);i[h.rank].push(c),ft.forEach(a.successors(c),s)}}var e=ft.sortBy(r,function(c){return a.node(c).rank});return ft.forEach(e,s),i}var wt=Ae,ub=pb;function pb(a,t){for(var r=0,n=1;n<t.length;++n)r+=hb(a,t[n-1],t[n]);return r}function hb(a,t,r){for(var n=wt.zipObject(r,wt.map(r,function(d,u){return u})),i=wt.flatten(wt.map(t,function(d){return wt.sortBy(wt.map(a.outEdges(d),function(u){return{pos:n[u.w],weight:a.edge(u).weight}}),"pos")}),!0),s=1;s<r.length;)s<<=1;var e=2*s-1;s-=1;var c=wt.map(new Array(e),function(){return 0}),h=0;return wt.forEach(i.forEach(function(d){var u=d.pos+s;c[u]+=d.weight;for(var f=0;u>0;)u%2&&(f+=c[u+1]),u=u-1>>1,c[u]+=d.weight;h+=d.weight*f})),h}var Ph=Ae,fb=gb;function gb(a,t){return Ph.map(t,function(r){var n=a.inEdges(r);if(n.length){var i=Ph.reduce(n,function(s,e){var c=a.edge(e),h=a.node(e.v);return{sum:s.sum+c.weight*h.order,weight:s.weight+c.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}var Ze=Ae,mb=yb;function yb(a,t){var r={};Ze.forEach(a,function(i,s){var e=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:s};Ze.isUndefined(i.barycenter)||(e.barycenter=i.barycenter,e.weight=i.weight)}),Ze.forEach(t.edges(),function(i){var s=r[i.v],e=r[i.w];!Ze.isUndefined(s)&&!Ze.isUndefined(e)&&(e.indegree++,s.out.push(r[i.w]))});var n=Ze.filter(r,function(i){return!i.indegree});return xb(n)}function xb(a){var t=[];function r(s){return function(e){e.merged||(Ze.isUndefined(e.barycenter)||Ze.isUndefined(s.barycenter)||e.barycenter>=s.barycenter)&&bb(s,e)}}function n(s){return function(e){e.in.push(s),--e.indegree===0&&a.push(e)}}for(;a.length;){var i=a.pop();t.push(i),Ze.forEach(i.in.reverse(),r(i)),Ze.forEach(i.out,n(i))}return Ze.map(Ze.filter(t,function(s){return!s.merged}),function(s){return Ze.pick(s,["vs","i","barycenter","weight"])})}function bb(a,t){var r=0,n=0;a.weight&&(r+=a.barycenter*a.weight,n+=a.weight),t.weight&&(r+=t.barycenter*t.weight,n+=t.weight),a.vs=t.vs.concat(a.vs),a.barycenter=r/n,a.weight=n,a.i=Math.min(t.i,a.i),t.merged=!0}var Vt=Ae,vb=Ke,wb=Sb;function Sb(a,t){var r=vb.partition(a,function(u){return Vt.has(u,"barycenter")}),n=r.lhs,i=Vt.sortBy(r.rhs,function(u){return-u.i}),s=[],e=0,c=0,h=0;n.sort(kb(!!t)),h=_h(s,i,h),Vt.forEach(n,function(u){h+=u.vs.length,s.push(u.vs),e+=u.barycenter*u.weight,c+=u.weight,h=_h(s,i,h)});var d={vs:Vt.flatten(s,!0)};return c&&(d.barycenter=e/c,d.weight=c),d}function _h(a,t,r){for(var n;t.length&&(n=Vt.last(t)).i<=r;)t.pop(),a.push(n.vs),r++;return r}function kb(a){return function(t,r){return t.barycenter<r.barycenter?-1:t.barycenter>r.barycenter?1:a?r.i-t.i:t.i-r.i}}var St=Ae,Cb=fb,Eb=mb,jb=wb,Mb=hg;function hg(a,t,r,n){var i=a.children(t),s=a.node(t),e=s?s.borderLeft:void 0,c=s?s.borderRight:void 0,h={};e&&(i=St.filter(i,function(y){return y!==e&&y!==c}));var d=Cb(a,i);St.forEach(d,function(y){if(a.children(y.v).length){var l=hg(a,y.v,r,n);h[y.v]=l,St.has(l,"barycenter")&&Rb(y,l)}});var u=Eb(d,r);Ab(u,h);var f=jb(u,n);if(e&&(f.vs=St.flatten([e,f.vs,c],!0),a.predecessors(e).length)){var m=a.node(a.predecessors(e)[0]),g=a.node(a.predecessors(c)[0]);St.has(f,"barycenter")||(f.barycenter=0,f.weight=0),f.barycenter=(f.barycenter*f.weight+m.order+g.order)/(f.weight+2),f.weight+=2}return f}function Ab(a,t){St.forEach(a,function(r){r.vs=St.flatten(r.vs.map(function(n){return t[n]?t[n].vs:n}),!0)})}function Rb(a,t){St.isUndefined(a.barycenter)?(a.barycenter=t.barycenter,a.weight=t.weight):(a.barycenter=(a.barycenter*a.weight+t.barycenter*t.weight)/(a.weight+t.weight),a.weight+=t.weight)}var Kt=Ae,$b=ct.Graph,Ib=Tb;function Tb(a,t,r){var n=Pb(a),i=new $b({compound:!0}).setGraph({root:n}).setDefaultNodeLabel(function(s){return a.node(s)});return Kt.forEach(a.nodes(),function(s){var e=a.node(s),c=a.parent(s);(e.rank===t||e.minRank<=t&&t<=e.maxRank)&&(i.setNode(s),i.setParent(s,c||n),Kt.forEach(a[r](s),function(h){var d=h.v===s?h.w:h.v,u=i.edge(d,s),f=Kt.isUndefined(u)?0:u.weight;i.setEdge(d,s,{weight:a.edge(h).weight+f})}),Kt.has(e,"minRank")&&i.setNode(s,{borderLeft:e.borderLeft[t],borderRight:e.borderRight[t]}))}),i}function Pb(a){for(var t;a.hasNode(t=Kt.uniqueId("_root")););return t}var _b=Ae,Db=Lb;function Lb(a,t,r){var n={},i;_b.forEach(r,function(s){for(var e=a.parent(s),c,h;e;){if(c=a.parent(e),c?(h=n[c],n[c]=e):(h=i,i=e),h&&h!==e){t.setEdge(h,e);return}e=c}})}var Ct=Ae,Nb=lb,Bb=ub,Wb=Mb,zb=Ib,Ob=Db,qb=ct.Graph,Dh=Ke,Fb=Ub;function Ub(a){var t=Dh.maxRank(a),r=Lh(a,Ct.range(1,t+1),"inEdges"),n=Lh(a,Ct.range(t-1,-1,-1),"outEdges"),i=Nb(a);Nh(a,i);for(var s=Number.POSITIVE_INFINITY,e,c=0,h=0;h<4;++c,++h){Gb(c%2?r:n,c%4>=2),i=Dh.buildLayerMatrix(a);var d=Bb(a,i);d<s&&(h=0,e=Ct.cloneDeep(i),s=d)}Nh(a,e)}function Lh(a,t,r){return Ct.map(t,function(n){return zb(a,n,r)})}function Gb(a,t){var r=new qb;Ct.forEach(a,function(n){var i=n.graph().root,s=Wb(n,i,r,t);Ct.forEach(s.vs,function(e,c){n.node(e).order=c}),Ob(n,r,s.vs)})}function Nh(a,t){Ct.forEach(t,function(r){Ct.forEach(r,function(n,i){a.node(n).order=i})})}var he=Ae,Hb=ct.Graph,Yb=Ke,Vb={positionX:o1};function Kb(a,t){var r={};function n(i,s){var e=0,c=0,h=i.length,d=he.last(s);return he.forEach(s,function(u,f){var m=Qb(a,u),g=m?a.node(m).order:h;(m||u===d)&&(he.forEach(s.slice(c,f+1),function(y){he.forEach(a.predecessors(y),function(l){var p=a.node(l),x=p.order;(x<e||g<x)&&!(p.dummy&&a.node(y).dummy)&&fg(r,l,y)})}),c=f+1,e=g)}),s}return he.reduce(t,n),r}function Xb(a,t){var r={};function n(s,e,c,h,d){var u;he.forEach(he.range(e,c),function(f){u=s[f],a.node(u).dummy&&he.forEach(a.predecessors(u),function(m){var g=a.node(m);g.dummy&&(g.order<h||g.order>d)&&fg(r,m,u)})})}function i(s,e){var c=-1,h,d=0;return he.forEach(e,function(u,f){if(a.node(u).dummy==="border"){var m=a.predecessors(u);m.length&&(h=a.node(m[0]).order,n(e,d,f,c,h),d=f,c=h)}n(e,d,e.length,h,s.length)}),e}return he.reduce(t,i),r}function Qb(a,t){if(a.node(t).dummy)return he.find(a.predecessors(t),function(r){return a.node(r).dummy})}function fg(a,t,r){if(t>r){var n=t;t=r,r=n}var i=a[t];i||(a[t]=i={}),i[r]=!0}function Zb(a,t,r){if(t>r){var n=t;t=r,r=n}return he.has(a[t],r)}function Jb(a,t,r,n){var i={},s={},e={};return he.forEach(t,function(c){he.forEach(c,function(h,d){i[h]=h,s[h]=h,e[h]=d})}),he.forEach(t,function(c){var h=-1;he.forEach(c,function(d){var u=n(d);if(u.length){u=he.sortBy(u,function(l){return e[l]});for(var f=(u.length-1)/2,m=Math.floor(f),g=Math.ceil(f);m<=g;++m){var y=u[m];s[d]===d&&h<e[y]&&!Zb(r,d,y)&&(s[y]=d,s[d]=i[d]=i[y],h=e[y])}}})}),{root:i,align:s}}function e1(a,t,r,n,i){var s={},e=t1(a,t,r,i),c=i?"borderLeft":"borderRight";function h(f,m){for(var g=e.nodes(),y=g.pop(),l={};y;)l[y]?f(y):(l[y]=!0,g.push(y),g=g.concat(m(y))),y=g.pop()}function d(f){s[f]=e.inEdges(f).reduce(function(m,g){return Math.max(m,s[g.v]+e.edge(g))},0)}function u(f){var m=e.outEdges(f).reduce(function(y,l){return Math.min(y,s[l.w]-e.edge(l))},Number.POSITIVE_INFINITY),g=a.node(f);m!==Number.POSITIVE_INFINITY&&g.borderType!==c&&(s[f]=Math.max(s[f],m))}return h(d,e.predecessors.bind(e)),h(u,e.successors.bind(e)),he.forEach(n,function(f){s[f]=s[r[f]]}),s}function t1(a,t,r,n){var i=new Hb,s=a.graph(),e=i1(s.nodesep,s.edgesep,n);return he.forEach(t,function(c){var h;he.forEach(c,function(d){var u=r[d];if(i.setNode(u),h){var f=r[h],m=i.edge(f,u);i.setEdge(f,u,Math.max(e(a,d,h),m||0))}h=d})}),i}function r1(a,t){return he.minBy(he.values(t),function(r){var n=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return he.forIn(r,function(s,e){var c=s1(a,e)/2;n=Math.max(s+c,n),i=Math.min(s-c,i)}),n-i})}function n1(a,t){var r=he.values(t),n=he.min(r),i=he.max(r);he.forEach(["u","d"],function(s){he.forEach(["l","r"],function(e){var c=s+e,h=a[c],d;if(h!==t){var u=he.values(h);d=e==="l"?n-he.min(u):i-he.max(u),d&&(a[c]=he.mapValues(h,function(f){return f+d}))}})})}function a1(a,t){return he.mapValues(a.ul,function(r,n){if(t)return a[t.toLowerCase()][n];var i=he.sortBy(he.map(a,n));return(i[1]+i[2])/2})}function o1(a){var t=Yb.buildLayerMatrix(a),r=he.merge(Kb(a,t),Xb(a,t)),n={},i;he.forEach(["u","d"],function(e){i=e==="u"?t:he.values(t).reverse(),he.forEach(["l","r"],function(c){c==="r"&&(i=he.map(i,function(f){return he.values(f).reverse()}));var h=(e==="u"?a.predecessors:a.successors).bind(a),d=Jb(a,i,r,h),u=e1(a,i,d.root,d.align,c==="r");c==="r"&&(u=he.mapValues(u,function(f){return-f})),n[e+c]=u})});var s=r1(a,n);return n1(n,s),a1(n,a.graph().align)}function i1(a,t,r){return function(n,i,s){var e=n.node(i),c=n.node(s),h=0,d;if(h+=e.width/2,he.has(e,"labelpos"))switch(e.labelpos.toLowerCase()){case"l":d=-e.width/2;break;case"r":d=e.width/2;break}if(d&&(h+=r?d:-d),d=0,h+=(e.dummy?t:a)/2,h+=(c.dummy?t:a)/2,h+=c.width/2,he.has(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":d=c.width/2;break;case"r":d=-c.width/2;break}return d&&(h+=r?d:-d),d=0,h}}function s1(a,t){return a.node(t).width}var Xt=Ae,gg=Ke,c1=Vb.positionX,l1=d1;function d1(a){a=gg.asNonCompoundGraph(a),u1(a),Xt.forEach(c1(a),function(t,r){a.node(r).x=t})}function u1(a){var t=gg.buildLayerMatrix(a),r=a.graph().ranksep,n=0;Xt.forEach(t,function(i){var s=Xt.max(Xt.map(i,function(e){return a.node(e).height}));Xt.forEach(i,function(e){a.node(e).y=n+s/2}),n+=s+r})}var me=Ae,Bh=t0,Wh=x0,p1=q0,h1=Ke.normalizeRanks,f1=H0,g1=Ke.removeEmptyRanks,zh=X0,m1=rb,Oh=ab,y1=Fb,x1=l1,Et=Ke,b1=ct.Graph,v1=w1;function w1(a,t){var r=t&&t.debugTiming?Et.time:Et.notime;r("layout",function(){var n=r("  buildLayoutGraph",function(){return T1(a)});r("  runLayout",function(){S1(n,r)}),r("  updateInputGraph",function(){k1(a,n)})})}function S1(a,t){t("    makeSpaceForEdgeLabels",function(){P1(a)}),t("    removeSelfEdges",function(){q1(a)}),t("    acyclic",function(){Bh.run(a)}),t("    nestingGraph.run",function(){zh.run(a)}),t("    rank",function(){p1(Et.asNonCompoundGraph(a))}),t("    injectEdgeLabelProxies",function(){_1(a)}),t("    removeEmptyRanks",function(){g1(a)}),t("    nestingGraph.cleanup",function(){zh.cleanup(a)}),t("    normalizeRanks",function(){h1(a)}),t("    assignRankMinMax",function(){D1(a)}),t("    removeEdgeLabelProxies",function(){L1(a)}),t("    normalize.run",function(){Wh.run(a)}),t("    parentDummyChains",function(){f1(a)}),t("    addBorderSegments",function(){m1(a)}),t("    order",function(){y1(a)}),t("    insertSelfEdges",function(){F1(a)}),t("    adjustCoordinateSystem",function(){Oh.adjust(a)}),t("    position",function(){x1(a)}),t("    positionSelfEdges",function(){U1(a)}),t("    removeBorderNodes",function(){O1(a)}),t("    normalize.undo",function(){Wh.undo(a)}),t("    fixupEdgeLabelCoords",function(){W1(a)}),t("    undoCoordinateSystem",function(){Oh.undo(a)}),t("    translateGraph",function(){N1(a)}),t("    assignNodeIntersects",function(){B1(a)}),t("    reversePoints",function(){z1(a)}),t("    acyclic.undo",function(){Bh.undo(a)})}function k1(a,t){me.forEach(a.nodes(),function(r){var n=a.node(r),i=t.node(r);n&&(n.x=i.x,n.y=i.y,t.children(r).length&&(n.width=i.width,n.height=i.height))}),me.forEach(a.edges(),function(r){var n=a.edge(r),i=t.edge(r);n.points=i.points,me.has(i,"x")&&(n.x=i.x,n.y=i.y)}),a.graph().width=t.graph().width,a.graph().height=t.graph().height}var C1=["nodesep","edgesep","ranksep","marginx","marginy"],E1={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},j1=["acyclicer","ranker","rankdir","align"],M1=["width","height"],A1={width:0,height:0},R1=["minlen","weight","width","height","labeloffset"],$1={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},I1=["labelpos"];function T1(a){var t=new b1({multigraph:!0,compound:!0}),r=ic(a.graph());return t.setGraph(me.merge({},E1,oc(r,C1),me.pick(r,j1))),me.forEach(a.nodes(),function(n){var i=ic(a.node(n));t.setNode(n,me.defaults(oc(i,M1),A1)),t.setParent(n,a.parent(n))}),me.forEach(a.edges(),function(n){var i=ic(a.edge(n));t.setEdge(n,me.merge({},$1,oc(i,R1),me.pick(i,I1)))}),t}function P1(a){var t=a.graph();t.ranksep/=2,me.forEach(a.edges(),function(r){var n=a.edge(r);n.minlen*=2,n.labelpos.toLowerCase()!=="c"&&(t.rankdir==="TB"||t.rankdir==="BT"?n.width+=n.labeloffset:n.height+=n.labeloffset)})}function _1(a){me.forEach(a.edges(),function(t){var r=a.edge(t);if(r.width&&r.height){var n=a.node(t.v),i=a.node(t.w),s={rank:(i.rank-n.rank)/2+n.rank,e:t};Et.addDummyNode(a,"edge-proxy",s,"_ep")}})}function D1(a){var t=0;me.forEach(a.nodes(),function(r){var n=a.node(r);n.borderTop&&(n.minRank=a.node(n.borderTop).rank,n.maxRank=a.node(n.borderBottom).rank,t=me.max(t,n.maxRank))}),a.graph().maxRank=t}function L1(a){me.forEach(a.nodes(),function(t){var r=a.node(t);r.dummy==="edge-proxy"&&(a.edge(r.e).labelRank=r.rank,a.removeNode(t))})}function N1(a){var t=Number.POSITIVE_INFINITY,r=0,n=Number.POSITIVE_INFINITY,i=0,s=a.graph(),e=s.marginx||0,c=s.marginy||0;function h(d){var u=d.x,f=d.y,m=d.width,g=d.height;t=Math.min(t,u-m/2),r=Math.max(r,u+m/2),n=Math.min(n,f-g/2),i=Math.max(i,f+g/2)}me.forEach(a.nodes(),function(d){h(a.node(d))}),me.forEach(a.edges(),function(d){var u=a.edge(d);me.has(u,"x")&&h(u)}),t-=e,n-=c,me.forEach(a.nodes(),function(d){var u=a.node(d);u.x-=t,u.y-=n}),me.forEach(a.edges(),function(d){var u=a.edge(d);me.forEach(u.points,function(f){f.x-=t,f.y-=n}),me.has(u,"x")&&(u.x-=t),me.has(u,"y")&&(u.y-=n)}),s.width=r-t+e,s.height=i-n+c}function B1(a){me.forEach(a.edges(),function(t){var r=a.edge(t),n=a.node(t.v),i=a.node(t.w),s,e;r.points?(s=r.points[0],e=r.points[r.points.length-1]):(r.points=[],s=i,e=n),r.points.unshift(Et.intersectRect(n,s)),r.points.push(Et.intersectRect(i,e))})}function W1(a){me.forEach(a.edges(),function(t){var r=a.edge(t);if(me.has(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function z1(a){me.forEach(a.edges(),function(t){var r=a.edge(t);r.reversed&&r.points.reverse()})}function O1(a){me.forEach(a.nodes(),function(t){if(a.children(t).length){var r=a.node(t),n=a.node(r.borderTop),i=a.node(r.borderBottom),s=a.node(me.last(r.borderLeft)),e=a.node(me.last(r.borderRight));r.width=Math.abs(e.x-s.x),r.height=Math.abs(i.y-n.y),r.x=s.x+r.width/2,r.y=n.y+r.height/2}}),me.forEach(a.nodes(),function(t){a.node(t).dummy==="border"&&a.removeNode(t)})}function q1(a){me.forEach(a.edges(),function(t){if(t.v===t.w){var r=a.node(t.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:t,label:a.edge(t)}),a.removeEdge(t)}})}function F1(a){var t=Et.buildLayerMatrix(a);me.forEach(t,function(r){var n=0;me.forEach(r,function(i,s){var e=a.node(i);e.order=s+n,me.forEach(e.selfEdges,function(c){Et.addDummyNode(a,"selfedge",{width:c.label.width,height:c.label.height,rank:e.rank,order:s+ ++n,e:c.e,label:c.label},"_se")}),delete e.selfEdges})})}function U1(a){me.forEach(a.nodes(),function(t){var r=a.node(t);if(r.dummy==="selfedge"){var n=a.node(r.e.v),i=n.x+n.width/2,s=n.y,e=r.x-i,c=n.height/2;a.setEdge(r.e,r.label),a.removeNode(t),r.label.points=[{x:i+2*e/3,y:s-c},{x:i+5*e/6,y:s-c},{x:i+e,y:s},{x:i+5*e/6,y:s+c},{x:i+2*e/3,y:s+c}],r.label.x=r.x,r.label.y=r.y}})}function oc(a,t){return me.mapValues(me.pick(a,t),Number)}function ic(a){var t={};return me.forEach(a,function(r,n){t[n.toLowerCase()]=r}),t}var Cr=Ae,G1=Ke,H1=ct.Graph,Y1={debugOrdering:V1};function V1(a){var t=G1.buildLayerMatrix(a),r=new H1({compound:!0,multigraph:!0}).setGraph({});return Cr.forEach(a.nodes(),function(n){r.setNode(n,{label:n}),r.setParent(n,"layer"+a.node(n).rank)}),Cr.forEach(a.edges(),function(n){r.setEdge(n.v,n.w,{},n.name)}),Cr.forEach(t,function(n,i){var s="layer"+i;r.setNode(s,{rank:"same"}),Cr.reduce(n,function(e,c){return r.setEdge(e,c,{style:"invis"}),c})}),r}var K1="0.8.5",X1={graphlib:ct,layout:v1,debug:Y1,util:{time:Ke.time,notime:Ke.notime},version:K1};const qh=em(X1),mg=`You are DDFlow, an AI assistant that generates diagram DSL code. You convert natural language descriptions into valid DDFlow DSL syntax.

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

Remember: Output ONLY the DSL code starting with <!-- type: typename -->. No explanations or markdown formatting.`;async function Q1(a,t=[]){var c;const r=(void 0).VITE_OPENAI_API_KEY,n=(void 0).VITE_AI_MODEL||"gpt-4o";if(!r)throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");const i=[{role:"system",content:mg},...t,{role:"user",content:a}],s=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({model:n,messages:i,temperature:.7,max_tokens:2048})});if(!s.ok){const h=await s.json();throw new Error(((c=h.error)==null?void 0:c.message)||"OpenAI API request failed")}return(await s.json()).choices[0].message.content}async function Z1(a,t=[]){var c;const r=(void 0).VITE_ANTHROPIC_API_KEY,n=(void 0).VITE_AI_MODEL||"claude-sonnet-4-20250514";if(!r)throw new Error("Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env");const i=[...t.map(h=>({role:h.role==="assistant"?"assistant":"user",content:h.content})),{role:"user",content:a}],s=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":r,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:n,max_tokens:2048,system:mg,messages:i})});if(!s.ok){const h=await s.json();throw new Error(((c=h.error)==null?void 0:c.message)||"Anthropic API request failed")}return(await s.json()).content[0].text}function Ir(a){const t=a.match(/<!--\s*type:\s*(\w+)\s*-->/);return t?t[1]:"flowchart"}function J1(a){const t=a.match(/<!--\s*name:\s*(.+?)\s*-->/);return t?t[1].trim():null}function ev(a){const t=a.match(/<!--\s*alternatives:\s*(.+?)\s*-->/);if(!t)return[];const r=t[1].trim().toLowerCase();return r==="none"?[]:r.split(/[,\s]+/).map(n=>n.trim()).filter(n=>n&&n!=="none")}function Tr(a){return a.replace(/<!--\s*type:\s*\w+\s*-->\n?/g,"").replace(/<!--\s*name:\s*.+?\s*-->\n?/g,"").replace(/<!--\s*alternatives:\s*.+?\s*-->\n?/g,"").trim()}async function tv(a,t=[]){const r=(void 0).VITE_AI_PROVIDER||"openai";let n;r==="anthropic"?n=await Z1(a,t):n=await Q1(a,t);const i=Ir(n),s=Tr(n);return{type:i,dsl:s,raw:n}}function Dt(){return((void 0).VITE_AI_PROVIDER||"openai")==="anthropic"?!!(void 0).VITE_ANTHROPIC_API_KEY:!!(void 0).VITE_OPENAI_API_KEY}function rv(){return((void 0).VITE_AI_PROVIDER||"openai")==="anthropic"?"Claude":"GPT-4"}const nv=`You are DDFlow's diagram explainer. You analyze DDFlow DSL diagrams and explain them clearly.

Given a diagram's DSL code and type, explain:
1. What the diagram represents
2. The key components and their relationships
3. The flow or structure
4. Any patterns or notable aspects

Respond in clear, concise language with proper formatting. Use bullet points where appropriate.
Keep your explanation focused and helpful for someone trying to understand the diagram.`,av=`You are DDFlow's diagram optimizer. You analyze DDFlow DSL diagrams and suggest improvements.

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
...`,ov=`You are DDFlow's diagram validator. You analyze DDFlow DSL diagrams for issues.

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

IMPORTANT: Return ONLY the JSON object, no other text.`;async function Pc(a,t){return((void 0).VITE_AI_PROVIDER||"openai")==="anthropic"?sv(a,t):iv(a,t)}async function iv(a,t){var e;const r=(void 0).VITE_OPENAI_API_KEY,n=(void 0).VITE_AI_MODEL||"gpt-4o";if(!r)throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");const i=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({model:n,messages:[{role:"system",content:a},{role:"user",content:t}],temperature:.7,max_tokens:2048})});if(!i.ok){const c=await i.json();throw new Error(((e=c.error)==null?void 0:e.message)||"OpenAI API request failed")}return(await i.json()).choices[0].message.content}async function sv(a,t){var e;const r=(void 0).VITE_ANTHROPIC_API_KEY,n=(void 0).VITE_AI_MODEL||"claude-sonnet-4-20250514";if(!r)throw new Error("Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env");const i=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":r,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:n,max_tokens:2048,system:a,messages:[{role:"user",content:t}]})});if(!i.ok){const c=await i.json();throw new Error(((e=c.error)==null?void 0:e.message)||"Anthropic API request failed")}return(await i.json()).content[0].text}async function cv(a,t){const r=`Please explain this ${t} diagram:

\`\`\`
${a}
\`\`\`

Provide a clear explanation of what this diagram represents, its key components, and how they relate to each other.`;return await Pc(nv,r)}async function lv(a,t){const r=`Please analyze this ${t} diagram and suggest improvements:

\`\`\`
${a}
\`\`\`

Provide an improved version of the DSL code followed by an explanation of your changes.`,n=await Pc(av,r),i=n.split("---EXPLANATION---");if(i.length===2){const e=i[0].trim(),c=i[1].trim(),h=Ir(e)||t;return{dsl:Tr(e),type:h,explanation:c,raw:n}}return n.match(/<!--\s*type:\s*(\w+)\s*-->/)?{dsl:Tr(n),type:Ir(n),explanation:"Improvements applied.",raw:n}:{dsl:a,type:t,explanation:n,raw:n}}async function dv(a,t){const r=`Please validate this ${t} diagram for errors and issues:

\`\`\`
${a}
\`\`\`

Return a JSON object with isValid, errors, warnings, and suggestions arrays.`,n=await Pc(ov,r);try{const i=n.match(/\{[\s\S]*\}/);return i?JSON.parse(i[0]):{isValid:!0,errors:[],warnings:["Could not parse validation response"],suggestions:[n]}}catch{return{isValid:!0,errors:[],warnings:["Validation response was not in expected format"],suggestions:[n]}}}const yg=`You are DDFlow's image analyzer. Analyze this image and extract the diagram structure.

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

Output ONLY the DSL code starting with the type comment.`;async function uv(a,t){var e;const r=(void 0).VITE_OPENAI_API_KEY,n=(void 0).VITE_AI_MODEL||"gpt-4o";if(!r)throw new Error("OpenAI API key not configured. Please set VITE_OPENAI_API_KEY in .env");const i=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({model:n,messages:[{role:"user",content:[{type:"text",text:yg},{type:"image_url",image_url:{url:`data:${t};base64,${a}`,detail:"high"}}]}],max_tokens:4096})});if(!i.ok){const c=await i.json();throw new Error(((e=c.error)==null?void 0:e.message)||"OpenAI Vision API request failed")}return(await i.json()).choices[0].message.content}async function pv(a,t){var c;const r=(void 0).VITE_ANTHROPIC_API_KEY,n=(void 0).VITE_AI_MODEL||"claude-sonnet-4-20250514";if(!r)throw new Error("Anthropic API key not configured. Please set VITE_ANTHROPIC_API_KEY in .env");const s=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":r,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:n,max_tokens:4096,messages:[{role:"user",content:[{type:"image",source:{type:"base64",media_type:t==="image/jpg"?"image/jpeg":t,data:a}},{type:"text",text:yg}]}]})});if(!s.ok){const h=await s.json();throw new Error(((c=h.error)==null?void 0:c.message)||"Anthropic Vision API request failed")}return(await s.json()).content[0].text}function hv(a){if(!a.includes("->"))return a;let t=a.replace(/->\s*\n\s*/g,"-> ");t=t.replace(/,\s*\n\s*(?![A-Z])/g,", ");const r=t.split(`
`).filter(u=>u.trim()),n=new Map,i=new Set,s=new Set;r.forEach(u=>{const f=u.match(/^(.+?)\s*->\s*(.+)$/);if(f){const m=f[1].trim(),y=f[2].trim().split(",").map(l=>l.trim()).filter(l=>l);i.add(m),y.forEach(l=>{i.add(l),s.add(l)}),n.has(m)||n.set(m,[]),n.get(m).push(...y)}else u.trim()&&!u.includes("->")&&i.add(u.trim())});const e=[...i].filter(u=>!s.has(u));if(e.length===0)return a;const c=[],h=new Set;function d(u,f){if(h.has(u))return;h.add(u),c.push("  ".repeat(f)+u),(n.get(u)||[]).forEach(g=>d(g,f+1))}return e.forEach(u=>d(u,0)),c.join(`
`)}function fv(a){if(!/^\s*\(([^)]+)\)\s+\1\s*$/m.test(a))return{dsl:a,convertToMindmap:!1};const r=a.split(`
`).filter(u=>u.trim()),n=new Map,i=new Set,s=new Set;r.forEach(u=>{const f=u.match(/^\s*\(([^)]+)\)\s+\1\s*->\s*\(([^)]+)\)\s+\2\s*$/);if(f){const m=f[1].trim(),g=f[2].trim();i.add(m),i.add(g),s.add(g),n.has(m)||n.set(m,[]),n.get(m).push(g)}else{const m=u.match(/^\s*\(([^)]+)\)\s+\1\s*$/);m&&i.add(m[1].trim())}});const e=[...i].filter(u=>!s.has(u));if(e.length===0)return{dsl:a,convertToMindmap:!1};const c=[],h=new Set;function d(u,f){if(h.has(u))return;h.add(u),c.push("  ".repeat(f)+u),(n.get(u)||[]).forEach(g=>d(g,f+1))}return e.forEach(u=>d(u,0)),{dsl:c.join(`
`),convertToMindmap:!0}}async function gv(a,t="image/png"){const r=(void 0).VITE_AI_PROVIDER||"openai";let n;r==="anthropic"?n=await pv(a,t):n=await uv(a,t);let i=Ir(n),s=Tr(n);const e=J1(n);let c=ev(n);if((i==="mindmap"||i==="orgchart")&&s.includes("->")&&(s=hv(s)),i==="flowchart"){const h=fv(s);h.convertToMindmap&&(c.includes("flowchart")||(c=["flowchart",...c]),i="mindmap",s=h.dsl)}return c=c.filter(h=>h!==i),{type:i,name:e||"Imported Diagram",alternatives:c,dsl:s,raw:n}}const Ut={purple:"#7C3AED",green:"#10B981"};function mv({onApplyDiagram:a,isOpen:t,onClose:r}){const[n,i]=M.useState([]),[s,e]=M.useState(""),[c,h]=M.useState(!1),[d,u]=M.useState(null),f=M.useRef(null),m=M.useRef(null),g=()=>{var w;(w=f.current)==null||w.scrollIntoView({behavior:"smooth"})};M.useEffect(()=>{g()},[n]),M.useEffect(()=>{t&&m.current&&m.current.focus()},[t]);const y=async w=>{if(w.preventDefault(),!s.trim()||c)return;const k=s.trim();e(""),u(null),i(S=>[...S,{role:"user",content:k}]),h(!0);try{const S=n.map(j=>({role:j.role,content:j.content})),E=await tv(k,S);i(j=>[...j,{role:"assistant",content:E.raw,type:E.type,dsl:E.dsl}])}catch(S){u(S.message),i(E=>[...E,{role:"error",content:S.message}])}finally{h(!1)}},l=w=>{w.dsl&&w.type&&a(w.type,w.dsl)},p=async w=>{try{await navigator.clipboard.writeText(w)}catch(k){console.error("Failed to copy:",k)}},x=()=>{i([]),u(null)};if(!t)return null;const b=Dt(),C=rv();return o.jsxs("div",{style:{position:"fixed",right:0,top:0,bottom:0,width:"380px",background:"rgba(10, 10, 15, 0.98)",borderLeft:"1px solid rgba(124, 58, 237, 0.3)",display:"flex",flexDirection:"column",zIndex:1e3,backdropFilter:"blur(20px)"},children:[o.jsxs("div",{style:{padding:"16px 20px",borderBottom:"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(124, 58, 237, 0.1)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[o.jsx("span",{style:{fontSize:"20px"},children:"🤖"}),o.jsxs("div",{children:[o.jsx("div",{style:{color:"#fff",fontWeight:600,fontSize:"14px"},children:"AI Diagram Assistant"}),o.jsxs("div",{style:{color:"#888",fontSize:"11px"},children:["Powered by ",C]})]})]}),o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("button",{onClick:x,style:{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"6px",padding:"6px 10px",color:"#888",cursor:"pointer",fontSize:"12px"},title:"Clear chat",children:"Clear"}),o.jsx("button",{onClick:r,style:{background:"transparent",border:"none",color:"#888",cursor:"pointer",fontSize:"18px",padding:"4px 8px"},children:"✕"})]})]}),o.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:"12px"},children:[!b&&o.jsxs("div",{style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",borderRadius:"8px",padding:"12px",color:"#f87171",fontSize:"13px"},children:[o.jsx("strong",{children:"API Key Required"}),o.jsxs("p",{style:{margin:"8px 0 0 0",color:"#fca5a5"},children:["Please configure your API key in ",o.jsx("code",{style:{background:"rgba(0,0,0,0.3)",padding:"2px 6px",borderRadius:"4px"},children:".env"})," file. Copy ",o.jsx("code",{style:{background:"rgba(0,0,0,0.3)",padding:"2px 6px",borderRadius:"4px"},children:".env.example"})," to ",o.jsx("code",{style:{background:"rgba(0,0,0,0.3)",padding:"2px 6px",borderRadius:"4px"},children:".env"})," and add your key."]})]}),n.length===0&&b&&o.jsxs("div",{style:{textAlign:"center",color:"#666",padding:"40px 20px"},children:[o.jsx("div",{style:{fontSize:"40px",marginBottom:"16px"},children:"💬"}),o.jsx("div",{style:{fontSize:"14px",marginBottom:"8px"},children:"Describe the diagram you want to create"}),o.jsx("div",{style:{fontSize:"12px",color:"#555"},children:'Try: "Create a flowchart for user login with email verification"'})]}),n.map((w,k)=>o.jsx("div",{style:{alignSelf:w.role==="user"?"flex-end":"flex-start",maxWidth:"90%"},children:w.role==="user"?o.jsx("div",{style:{background:"linear-gradient(135deg, #7C3AED, #6366F1)",borderRadius:"12px 12px 4px 12px",padding:"10px 14px",color:"#fff",fontSize:"13px"},children:w.content}):w.role==="error"?o.jsxs("div",{style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",borderRadius:"12px 12px 12px 4px",padding:"10px 14px",color:"#f87171",fontSize:"13px"},children:["⚠️ ",w.content]}):o.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px 12px 12px 4px",padding:"12px",width:"100%"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("span",{style:{background:`${Ut.purple}30`,color:Ut.purple,padding:"3px 8px",borderRadius:"4px",fontSize:"11px",fontWeight:600,textTransform:"uppercase"},children:w.type}),o.jsxs("div",{style:{display:"flex",gap:"6px"},children:[o.jsx("button",{onClick:()=>p(w.dsl),style:{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#888",cursor:"pointer",fontSize:"11px"},children:"Copy"}),o.jsx("button",{onClick:()=>l(w),style:{background:Ut.green,border:"none",borderRadius:"4px",padding:"4px 10px",color:"#fff",cursor:"pointer",fontSize:"11px",fontWeight:600},children:"Apply"})]})]}),o.jsx("pre",{style:{background:"rgba(0,0,0,0.3)",borderRadius:"6px",padding:"10px",margin:0,fontSize:"11px",color:"#e0e0e0",whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:"200px",overflowY:"auto",fontFamily:"Monaco, Consolas, monospace"},children:w.dsl})]})},k)),c&&o.jsxs("div",{style:{alignSelf:"flex-start",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px 12px 12px 4px",padding:"12px 16px",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx("div",{style:{width:"8px",height:"8px",background:Ut.purple,borderRadius:"50%",animation:"pulse 1s infinite"}}),o.jsx("span",{style:{color:"#888",fontSize:"13px"},children:"Generating diagram..."}),o.jsx("style",{children:`
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
              }
            `})]}),o.jsx("div",{ref:f})]}),o.jsxs("form",{onSubmit:y,style:{padding:"16px",borderTop:"1px solid rgba(255,255,255,0.1)",background:"rgba(0,0,0,0.2)"},children:[o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("input",{ref:m,type:"text",value:s,onChange:w=>e(w.target.value),placeholder:b?"Describe your diagram...":"Configure API key first",disabled:!b||c,style:{flex:1,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",padding:"12px 14px",color:"#fff",fontSize:"13px",outline:"none"}}),o.jsx("button",{type:"submit",disabled:!b||c||!s.trim(),style:{background:b&&s.trim()?Ut.purple:"rgba(255,255,255,0.1)",border:"none",borderRadius:"8px",padding:"12px 16px",color:b&&s.trim()?"#fff":"#666",cursor:b&&s.trim()?"pointer":"not-allowed",fontSize:"14px"},children:c?"...":"→"})]}),o.jsx("div",{style:{marginTop:"8px",fontSize:"11px",color:"#555",textAlign:"center"},children:"Press Enter to send • Supports all 22 diagram types"})]})]})}const _c={CUSTOM_TEMPLATES:"ddflow_custom_templates"},re={FLOWCHARTS:"Flowcharts",ARCHITECTURE:"Architecture",DATA_MODELING:"Data Modeling",PROJECT_MANAGEMENT:"Project Management",SOFTWARE_DESIGN:"Software Design",BUSINESS:"Business",NETWORK:"Network",UI_DESIGN:"UI Design",APP_BUNDLES:"App Bundles"},Dc=[{id:"login-flow",name:"User Login Flow",description:"Authentication flow with validation and error handling",category:re.FLOWCHARTS,type:"flowchart",thumbnail:"flowchart",source:`(start) Start
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
Create Session -> (end) Dashboard`},{id:"order-process",name:"Order Processing",description:"E-commerce order flow from cart to delivery",category:re.FLOWCHARTS,type:"flowchart",thumbnail:"flowchart",source:`(start) Cart
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
Prepare Shipment -> (end) Delivered`},{id:"approval-workflow",name:"Approval Workflow",description:"Multi-level approval process with escalation",category:re.FLOWCHARTS,type:"flowchart",thumbnail:"flowchart",source:`(start) Submit Request
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
Approved -> (end) Complete`},{id:"bug-triage",name:"Bug Triage Process",description:"Software bug reporting and resolution workflow",category:re.FLOWCHARTS,type:"flowchart",thumbnail:"flowchart",source:`(start) Bug Reported
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
Verify Fix -> (end) Resolved`},{id:"microservices",name:"Microservices Architecture",description:"C4-style microservices with boundaries and layers",category:re.ARCHITECTURE,type:"architecture",thumbnail:"architecture",source:`title: Microservices Platform
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
Order Service -> RabbitMQ: Events`},{id:"serverless",name:"Serverless Architecture",description:"AWS serverless with Lambda, DynamoDB & C4 boundaries",category:re.ARCHITECTURE,type:"architecture",thumbnail:"architecture",source:`title: Serverless Platform
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
API Lambda -> Stripe: Payments`},{id:"event-driven",name:"Event-Driven Architecture",description:"Event sourcing with CQRS pattern",category:re.ARCHITECTURE,type:"architecture",thumbnail:"architecture",source:`[clients] Web UI, Admin Dashboard
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
Query Handler -> Read Database`},{id:"three-tier",name:"Three-Tier Application",description:"Traditional three-tier web application",category:re.ARCHITECTURE,type:"architecture",thumbnail:"architecture",source:`[clients] Browser, Mobile App
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
Background Jobs -> File Storage`},{id:"ecommerce-erd",name:"E-Commerce Database",description:"Complete e-commerce database schema",category:re.DATA_MODELING,type:"erd",thumbnail:"erd",source:`CREATE TABLE users (
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
);`},{id:"blog-erd",name:"Blog Platform Database",description:"Blog with posts, comments, and tags",category:re.DATA_MODELING,type:"erd",thumbnail:"erd",source:`CREATE TABLE authors (
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
);`},{id:"saas-erd",name:"SaaS Multi-Tenant Database",description:"Multi-tenant SaaS application schema",category:re.DATA_MODELING,type:"erd",thumbnail:"erd",source:`CREATE TABLE organizations (
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
);`},{id:"product-roadmap",name:"Product Roadmap",description:"Quarterly product development roadmap",category:re.PROJECT_MANAGEMENT,type:"timeline",thumbnail:"timeline",source:`[Q1 2025] *Kickoff | Project initiation and team assembly
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
[Q4 2025] *Scale | Infrastructure optimization`},{id:"sprint-gantt",name:"Sprint Planning",description:"2-week sprint with tasks and dependencies",category:re.PROJECT_MANAGEMENT,type:"gantt",thumbnail:"gantt",source:`Sprint Planning, 0, 0.5, 100
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
Retrospective, 10, 0.5, 0`},{id:"project-wbs",name:"Project Work Breakdown",description:"Work breakdown structure for project planning",category:re.PROJECT_MANAGEMENT,type:"wbs",thumbnail:"mindmap",source:`Project Launch
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
    Documentation`},{id:"team-org",name:"Development Team Structure",description:"Software development team organization",category:re.PROJECT_MANAGEMENT,type:"orgchart",thumbnail:"orgchart",source:`VP of Engineering [Executive]
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
    Technical Writer`},{id:"api-sequence",name:"REST API Flow",description:"API request/response with authentication",category:re.SOFTWARE_DESIGN,type:"sequence",thumbnail:"sequence",source:`participant Client, API Gateway, Auth Service, User Service, Database

Client -> API Gateway: POST /api/users
API Gateway -> Auth Service: Validate JWT
Auth Service --> API Gateway: Token Valid
API Gateway -> User Service: Create User Request
User Service -> Database: INSERT user
Database --> User Service: User Record
User Service -> Database: INSERT audit_log
Database --> User Service: OK
User Service --> API Gateway: User Created Response
API Gateway --> Client: 201 Created + User JSON`},{id:"oauth-sequence",name:"OAuth 2.0 Flow",description:"OAuth authorization code flow",category:re.SOFTWARE_DESIGN,type:"sequence",thumbnail:"sequence",source:`participant User, Client App, Auth Server, Resource Server

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
Client App --> User: Display Data`},{id:"order-state",name:"Order State Machine",description:"E-commerce order lifecycle states",category:re.SOFTWARE_DESIGN,type:"state",thumbnail:"state",source:`(initial) Draft
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
Confirmed -> Cancelled: CANCEL_ORDER`},{id:"user-classes",name:"User Management Classes",description:"OOP class diagram for user system",category:re.SOFTWARE_DESIGN,type:"class",thumbnail:"class",source:`class User
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
  - validatePassword(plain, hash): boolean`},{id:"shopping-usecase",name:"E-Commerce Use Cases",description:"Online shopping use case diagram",category:re.SOFTWARE_DESIGN,type:"usecase",thumbnail:"usecase",source:`actor Customer
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
Admin -> Generate Reports`},{id:"c4-system",name:"C4 System Context",description:"C4 model with boundaries and groupings",category:re.SOFTWARE_DESIGN,type:"c4",thumbnail:"c4",source:`title: E-Commerce Platform Architecture
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
Product Service -> AWS S3: Product Images`},{id:"customer-journey",name:"Customer Onboarding Journey",description:"New customer onboarding experience map",category:re.BUSINESS,type:"journey",thumbnail:"journey",source:`[actor] New Customer
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
Tips Notification -> Fully Onboarded`},{id:"priority-quadrant",name:"Priority Matrix",description:"Eisenhower matrix for task prioritization",category:re.BUSINESS,type:"quadrant",thumbnail:"quadrant",source:`title: Priority Matrix
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
Social Media: [15, 15]`},{id:"market-pie",name:"Market Share Analysis",description:"Pie chart for market distribution",category:re.BUSINESS,type:"pie",thumbnail:"pie",source:`"Our Product": 28
"Competitor A": 25
"Competitor B": 20
"Competitor C": 15
"Others": 12`},{id:"requirements",name:"System Requirements",description:"Requirement specification with traceability",category:re.BUSINESS,type:"requirement",thumbnail:"requirement",source:`requirement User Authentication {
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
Password Security -> Rate Limiting: traces`},{id:"corporate-network",name:"Corporate Network",description:"Enterprise network with DMZ and internal zones",category:re.NETWORK,type:"network",thumbnail:"network",source:`[cloud] Internet
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
Internal Switch -- Workstations`},{id:"cloud-vpc",name:"Cloud VPC Architecture",description:"AWS VPC with public and private subnets",category:re.NETWORK,type:"network",thumbnail:"network",source:`[cloud] AWS Region
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
Private Subnet B -- RDS Replica`},{id:"landing-page-wireframe",name:"Landing Page",description:"Complete landing page with hero, features, pricing, testimonials",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{SaaS Landing Page}
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

[social: twitter | github | linkedin | youtube]`},{id:"dashboard-wireframe",name:"Admin Dashboard",description:"Modern dashboard with stats, charts, and data tables",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{Admin Dashboard}
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

[fab: +]`},{id:"auth-wireframe",name:"Authentication Pages",description:"Login and signup forms with modern styling",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{Authentication}

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
</Card>`},{id:"mobile-app-wireframe",name:"Mobile App Screens",description:"Mobile UI with bottom nav, app bar, and FAB",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{Mobile App}

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

[loading: Syncing your data...]`},{id:"settings-wireframe",name:"Settings Page",description:"Comprehensive settings with accordions and toggles",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{Settings}
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

[toast: Settings saved successfully | success]`},{id:"product-wireframe",name:"E-Commerce Product Page",description:"Product listing with reviews and comments",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{Product Details}
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

[footer: Shop | Mac | iPad | iPhone | Watch :: Support | Contact | Returns :: © 2024 Store]`},{id:"blog-wireframe",name:"Blog Article",description:"Blog post with comments, social sharing, and related posts",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{Blog Article}
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

[footer: Blog | About | Contact | Privacy :: © 2024 TechBlog]`},{id:"saas-dashboard-wireframe",name:"SaaS Application",description:"Full SaaS app with sidebar, widgets, and notifications",category:re.UI_DESIGN,type:"wireframe",thumbnail:"wireframe",source:`{SaaS Dashboard}
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

[toast: Changes saved automatically | success]`},{id:"ecommerce-home",name:"🛒 E-commerce: Home Page",description:"E-commerce app home page with featured products and categories",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"E-commerce App",bundleOrder:1,source:`{ShopFlow - Home}
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

[footer: Shop | Categories | Deals :: Account | Orders | Wishlist :: Help | Contact | Returns :: © 2024 ShopFlow]`},{id:"ecommerce-product",name:"🛒 E-commerce: Product Page",description:"Product detail page with images, specs, and reviews",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"E-commerce App",bundleOrder:2,source:`{ShopFlow - Product}
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
|Carry Pouch|$19.99|`},{id:"ecommerce-cart",name:"🛒 E-commerce: Cart Page",description:"Shopping cart with items, quantities, and order summary",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"E-commerce App",bundleOrder:3,source:`{ShopFlow - Cart}
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

[toast: Item added to cart | success]`},{id:"ecommerce-checkout",name:"🛒 E-commerce: Checkout Page",description:"Checkout flow with shipping, payment, and confirmation",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"E-commerce App",bundleOrder:4,source:`{ShopFlow - Checkout}
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

[toast: Shipping address confirmed | success]`},{id:"ecommerce-confirmation",name:"🛒 E-commerce: Order Confirmation",description:"Order success page with details and tracking",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"E-commerce App",bundleOrder:5,source:`{ShopFlow - Order Confirmed}
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

[footer: Shop | My Orders | Help :: © 2024 ShopFlow]`},{id:"ecommerce-user-journey",name:"🛒 E-commerce: User Journey",description:"Complete shopping flow from browsing to purchase",category:re.APP_BUNDLES,type:"journey",thumbnail:"journey",bundle:"E-commerce App",bundleOrder:6,source:`[user] Customer

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
Checkout -back-> Cart`},{id:"saas-dashboard",name:"📊 SaaS App: Dashboard",description:"Main dashboard with metrics and activity",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"SaaS App",bundleOrder:1,source:`{TaskFlow - Dashboard}
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

[fab: +]`},{id:"saas-projects",name:"📊 SaaS App: Projects",description:"Projects list with filters and actions",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"SaaS App",bundleOrder:2,source:`{TaskFlow - Projects}
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

[fab: +]`},{id:"saas-settings",name:"📊 SaaS App: Settings",description:"Account and app settings page",category:re.APP_BUNDLES,type:"wireframe",thumbnail:"wireframe",bundle:"SaaS App",bundleOrder:3,source:`{TaskFlow - Settings}
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

[toast: Settings saved successfully | success]`},{id:"saas-user-journey",name:"📊 SaaS App: User Journey",description:"User flow through the SaaS application",category:re.APP_BUNDLES,type:"journey",thumbnail:"journey",bundle:"SaaS App",bundleOrder:4,source:`[user] Project Manager

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
Projects -complete task-> Task Complete`},{id:"git-feature-flow",name:"Git Feature Branch Flow",description:"Feature branch workflow with code review",category:re.SOFTWARE_DESIGN,type:"git",thumbnail:"git",source:`commit "Initial setup"
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
commit "Release v1.0.0"`},{id:"deployment-k8s",name:"Kubernetes Deployment",description:"K8s cluster with pods and services",category:re.ARCHITECTURE,type:"deployment",thumbnail:"deployment",source:`[cloud] AWS EKS
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
[device] CI/CD Pipeline`},{id:"checkout-activity",name:"Checkout Activity Flow",description:"E-commerce checkout process with decisions",category:re.FLOWCHARTS,type:"activity",thumbnail:"activity",source:`[start]
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
Send Confirmation -> end`},{id:"component-architecture",name:"Service Components",description:"Microservice component relationships",category:re.ARCHITECTURE,type:"component",thumbnail:"component",source:`[component] Web Frontend
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
Payment Service --> Message Queue`}];function Fh(){return Dc}function yv(a){return Dc.find(t=>t.id===a)||kt().find(t=>t.id===a)||null}function kt(){try{const a=localStorage.getItem(_c.CUSTOM_TEMPLATES);if(a)return JSON.parse(a)}catch(a){console.error("Failed to load custom templates:",a)}return[]}function xv(a){try{const t=kt(),r={...a,id:`custom-${Date.now()}`,isCustom:!0,createdAt:new Date().toISOString()};return t.unshift(r),localStorage.setItem(_c.CUSTOM_TEMPLATES,JSON.stringify(t)),r}catch(t){throw console.error("Failed to save custom template:",t),t}}function bv(a){try{const r=kt().filter(n=>n.id!==a);return localStorage.setItem(_c.CUSTOM_TEMPLATES,JSON.stringify(r)),!0}catch(t){return console.error("Failed to delete custom template:",t),!1}}function vv(){return[...kt(),...Dc]}function wv(a){const t=a.toLowerCase();return vv().filter(r=>r.name.toLowerCase().includes(t)||r.description.toLowerCase().includes(t)||r.category.toLowerCase().includes(t)||r.type.toLowerCase().includes(t))}const $e={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",orange:"#F59E0B",pink:"#EC4899",red:"#EF4444",cyan:"#06B6D4",violet:"#8B5CF6"},Sv={flowchart:"🔀",sequence:"↔️",mindmap:"🧠",wbs:"📊",erd:"🗃️",architecture:"🏗️",state:"🔄",timeline:"📅",orgchart:"👥",network:"🌐",gantt:"📈",class:"📦",usecase:"👤",pie:"🥧",quadrant:"📍",git:"🔱",deployment:"☁️",wireframe:"📱",activity:"⚡",component:"🧩",c4:"🏛️",requirement:"📋",journey:"🚶"},kv={[re.FLOWCHARTS]:"🔀",[re.ARCHITECTURE]:"🏗️",[re.DATA_MODELING]:"🗃️",[re.PROJECT_MANAGEMENT]:"📊",[re.SOFTWARE_DESIGN]:"💻",[re.BUSINESS]:"💼",[re.NETWORK]:"🌐",[re.UI_DESIGN]:"📱",[re.APP_BUNDLES]:"📦","My Templates":"⭐"},Uh={[re.FLOWCHARTS]:$e.blue,[re.ARCHITECTURE]:$e.purple,[re.DATA_MODELING]:$e.green,[re.PROJECT_MANAGEMENT]:$e.orange,[re.SOFTWARE_DESIGN]:$e.violet,[re.BUSINESS]:$e.pink,[re.NETWORK]:$e.cyan,[re.UI_DESIGN]:$e.red,[re.APP_BUNDLES]:$e.teal,"My Templates":$e.orange};function Cv({isOpen:a,onClose:t,onApplyTemplate:r,theme:n}){const[i,s]=M.useState(""),[e,c]=M.useState("All"),[h,d]=M.useState(null),[u,f]=M.useState(null),m=M.useRef(null),g=(n==null?void 0:n.name)==="dark";M.useEffect(()=>{a&&m.current&&setTimeout(()=>{var w;return(w=m.current)==null?void 0:w.focus()},100)},[a]);const y=M.useMemo(()=>{let w;if(i.trim())w=wv(i);else{const k=Fh();w=[...kt(),...k]}return e==="All"?w:e==="My Templates"?w.filter(k=>k.isCustom):w.filter(k=>k.category===e)},[i,e]),l=M.useMemo(()=>{const w=kt(),k=["All",...Object.values(re)];return w.length>0&&k.splice(1,0,"My Templates"),k},[]),p=w=>{r(w.type,w.source),t()},x=w=>{bv(w),f(null)};if(!a)return null;const b={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},modal:{width:"90vw",maxWidth:"1100px",height:"85vh",maxHeight:"800px",background:g?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))",borderRadius:"16px",border:`1px solid ${g?"rgba(124,58,237,0.3)":"rgba(124,58,237,0.2)"}`,display:"flex",flexDirection:"column",overflow:"hidden",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)"},header:{padding:"20px 24px",borderBottom:`1px solid ${g?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:g?"rgba(124, 58, 237, 0.1)":"rgba(124, 58, 237, 0.05)"},headerTitle:{display:"flex",alignItems:"center",gap:"12px"},headerIcon:{fontSize:"24px"},titleText:{color:g?"#fff":"#1e293b",fontWeight:600,fontSize:"18px"},subtitle:{color:g?"#888":"#64748b",fontSize:"12px"},closeButton:{background:"transparent",border:"none",color:g?"#888":"#64748b",cursor:"pointer",fontSize:"24px",padding:"4px 8px",borderRadius:"6px",transition:"all 0.2s"},searchBar:{padding:"16px 24px",borderBottom:`1px solid ${g?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}`},searchInput:{width:"100%",padding:"12px 16px",paddingLeft:"44px",background:g?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",border:`1px solid ${g?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,borderRadius:"10px",color:g?"#fff":"#1e293b",fontSize:"14px",outline:"none",transition:"all 0.2s"},searchWrapper:{position:"relative"},searchIcon:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:g?"#666":"#94a3b8",fontSize:"16px",pointerEvents:"none"},content:{display:"flex",flex:1,overflow:"hidden"},sidebar:{width:"200px",borderRight:`1px solid ${g?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,padding:"16px 0",overflowY:"auto"},categoryItem:(w,k)=>({display:"flex",alignItems:"center",gap:"10px",padding:"10px 20px",cursor:"pointer",background:w?g?"rgba(124,58,237,0.2)":"rgba(124,58,237,0.1)":"transparent",borderLeft:w?`3px solid ${k||$e.purple}`:"3px solid transparent",color:w?g?"#fff":"#1e293b":g?"#aaa":"#64748b",fontSize:"13px",fontWeight:w?600:400,transition:"all 0.2s"}),categoryIcon:{fontSize:"16px"},categoryCount:{marginLeft:"auto",fontSize:"11px",padding:"2px 6px",background:g?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",borderRadius:"10px",color:g?"#888":"#64748b"},grid:{flex:1,padding:"20px",overflowY:"auto",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px",alignContent:"start"},card:(w,k)=>({background:g?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.8)",borderRadius:"12px",border:`1px solid ${w?k||$e.purple:g?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,overflow:"hidden",cursor:"pointer",transition:"all 0.2s",transform:w?"translateY(-2px)":"none",boxShadow:w?`0 8px 20px ${k}20`:"none"}),cardThumbnail:w=>({height:"100px",background:`linear-gradient(135deg, ${w}15, ${w}05)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"40px",borderBottom:`1px solid ${g?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}`}),cardContent:{padding:"16px",minHeight:"100px"},cardTitle:{color:g?"#ffffff":"#1e293b",fontSize:"15px",fontWeight:700,marginBottom:"8px",lineHeight:1.3},cardDescription:{color:g?"#aaaaaa":"#64748b",fontSize:"13px",lineHeight:1.5,marginBottom:"12px",minHeight:"36px"},cardMeta:{display:"flex",alignItems:"center",gap:"8px",marginTop:"10px"},typeBadge:w=>({padding:"3px 8px",background:`${w}20`,color:w,borderRadius:"4px",fontSize:"10px",fontWeight:600,textTransform:"uppercase"}),customBadge:{padding:"3px 8px",background:`${$e.orange}20`,color:$e.orange,borderRadius:"4px",fontSize:"10px"},bundleBadge:{padding:"4px 10px",background:`${$e.teal}25`,color:$e.teal,borderRadius:"6px",fontSize:"10px",fontWeight:600,border:`1px solid ${$e.teal}40`},deleteButton:{marginLeft:"auto",padding:"4px 8px",background:`${$e.red}20`,color:$e.red,border:"none",borderRadius:"4px",fontSize:"11px",cursor:"pointer"},emptyState:{gridColumn:"1 / -1",textAlign:"center",padding:"60px 20px",color:g?"#666":"#94a3b8"},emptyIcon:{fontSize:"48px",marginBottom:"16px"},emptyTitle:{fontSize:"16px",color:g?"#888":"#64748b",marginBottom:"8px"},emptyText:{fontSize:"13px"},confirmOverlay:{position:"absolute",inset:0,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"12px"},confirmBox:{background:g?"#1e293b":"#fff",padding:"16px",borderRadius:"8px",textAlign:"center"},confirmText:{color:g?"#fff":"#1e293b",fontSize:"13px",marginBottom:"12px"},confirmButtons:{display:"flex",gap:"8px",justifyContent:"center"},confirmButton:w=>({padding:"6px 14px",background:w?$e.red:g?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",color:w||g?"#fff":"#1e293b",border:"none",borderRadius:"6px",fontSize:"12px",cursor:"pointer"})},C=w=>{const k=[...kt(),...Fh()];return w==="All"?k.length:w==="My Templates"?kt().length:k.filter(S=>S.category===w).length};return o.jsx("div",{style:b.overlay,onClick:t,children:o.jsxs("div",{style:b.modal,onClick:w=>w.stopPropagation(),children:[o.jsxs("div",{style:b.header,children:[o.jsxs("div",{style:b.headerTitle,children:[o.jsx("span",{style:b.headerIcon,children:"📋"}),o.jsxs("div",{children:[o.jsx("div",{style:b.titleText,children:"Template Gallery"}),o.jsx("div",{style:b.subtitle,children:"Choose a template to get started quickly"})]})]}),o.jsx("button",{style:b.closeButton,onClick:t,onMouseEnter:w=>w.target.style.color=g?"#fff":"#1e293b",onMouseLeave:w=>w.target.style.color=g?"#888":"#64748b",children:"×"})]}),o.jsx("div",{style:b.searchBar,children:o.jsxs("div",{style:b.searchWrapper,children:[o.jsx("span",{style:b.searchIcon,children:"🔍"}),o.jsx("input",{ref:m,type:"text",placeholder:"Search templates by name, type, or category...",value:i,onChange:w=>s(w.target.value),style:b.searchInput})]})}),o.jsxs("div",{style:b.content,children:[o.jsx("div",{style:b.sidebar,children:l.map(w=>o.jsxs("div",{style:b.categoryItem(e===w,Uh[w]),onClick:()=>c(w),onMouseEnter:k=>{e!==w&&(k.currentTarget.style.background=g?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)")},onMouseLeave:k=>{e!==w&&(k.currentTarget.style.background="transparent")},children:[o.jsx("span",{style:b.categoryIcon,children:kv[w]||"📁"}),o.jsx("span",{children:w}),o.jsx("span",{style:b.categoryCount,children:C(w)})]},w))}),o.jsx("div",{style:b.grid,children:y.length===0?o.jsxs("div",{style:b.emptyState,children:[o.jsx("div",{style:b.emptyIcon,children:"🔍"}),o.jsx("div",{style:b.emptyTitle,children:"No templates found"}),o.jsx("div",{style:b.emptyText,children:"Try a different search term or category"})]}):y.map(w=>{var j;const k=Uh[w.category]||$e.purple,S=h===w.id,E=u===w.id;return o.jsxs("div",{style:{...b.card(S,k),position:"relative"},onMouseEnter:()=>d(w.id),onMouseLeave:()=>d(null),onClick:()=>!E&&p(w),children:[o.jsx("div",{style:b.cardThumbnail(k),children:Sv[w.type]||"📄"}),o.jsxs("div",{style:b.cardContent,children:[o.jsx("div",{style:b.cardTitle,children:w.name||"Untitled"}),o.jsx("div",{style:b.cardDescription,children:w.description||"No description"}),o.jsxs("div",{style:b.cardMeta,children:[o.jsx("span",{style:b.typeBadge(k),children:(j=w.type)==null?void 0:j.toUpperCase()}),w.bundle&&o.jsx("span",{style:b.bundleBadge,children:w.bundle}),w.isCustom&&o.jsxs(o.Fragment,{children:[o.jsx("span",{style:b.customBadge,children:"Custom"}),o.jsx("button",{style:b.deleteButton,onClick:$=>{$.stopPropagation(),f(w.id)},children:"Delete"})]})]})]}),E&&o.jsx("div",{style:b.confirmOverlay,onClick:$=>$.stopPropagation(),children:o.jsxs("div",{style:b.confirmBox,children:[o.jsx("div",{style:b.confirmText,children:"Delete this template?"}),o.jsxs("div",{style:b.confirmButtons,children:[o.jsx("button",{style:b.confirmButton(!1),onClick:()=>f(null),children:"Cancel"}),o.jsx("button",{style:b.confirmButton(!0),onClick:()=>x(w.id),children:"Delete"})]})]})})]},w.id)})})]})]})})}const gt={purple:"#7C3AED",green:"#10B981",red:"#EF4444"};function Ev({isOpen:a,onClose:t,diagramType:r,diagramSource:n,theme:i}){const[s,e]=M.useState(""),[c,h]=M.useState(""),[d,u]=M.useState(re.FLOWCHARTS),[f,m]=M.useState(""),[g,y]=M.useState(!1),l=M.useRef(null),p=(i==null?void 0:i.name)==="dark";M.useEffect(()=>{a&&(e(""),h(""),u(re.FLOWCHARTS),m(""),y(!1),setTimeout(()=>{var C;return(C=l.current)==null?void 0:C.focus()},100))},[a]);const x=()=>{if(!s.trim()){m("Please enter a template name");return}if(!(n!=null&&n.trim())){m("No diagram content to save");return}try{xv({name:s.trim(),description:c.trim()||"Custom template",category:d,type:r,source:n}),y(!0),setTimeout(()=>{t()},1500)}catch(C){m("Failed to save template: "+C.message)}};if(!a)return null;const b={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",zIndex:1001,display:"flex",justifyContent:"center",alignItems:"center"},modal:{width:"90vw",maxWidth:"450px",background:p?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))",borderRadius:"16px",border:`1px solid ${p?"rgba(124,58,237,0.3)":"rgba(124,58,237,0.2)"}`,overflow:"hidden",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)"},header:{padding:"20px 24px",borderBottom:`1px solid ${p?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:p?"rgba(124, 58, 237, 0.1)":"rgba(124, 58, 237, 0.05)"},headerTitle:{display:"flex",alignItems:"center",gap:"12px"},headerIcon:{fontSize:"24px"},titleText:{color:p?"#fff":"#1e293b",fontWeight:600,fontSize:"18px"},closeButton:{background:"transparent",border:"none",color:p?"#888":"#64748b",cursor:"pointer",fontSize:"24px",padding:"4px 8px",borderRadius:"6px"},content:{padding:"24px"},formGroup:{marginBottom:"20px"},label:{display:"block",color:p?"#aaa":"#64748b",fontSize:"12px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px"},input:{width:"100%",padding:"12px 14px",background:p?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",border:`1px solid ${p?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,borderRadius:"8px",color:p?"#fff":"#1e293b",fontSize:"14px",outline:"none",boxSizing:"border-box"},textarea:{width:"100%",padding:"12px 14px",background:p?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",border:`1px solid ${p?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,borderRadius:"8px",color:p?"#fff":"#1e293b",fontSize:"14px",outline:"none",minHeight:"80px",resize:"vertical",fontFamily:"inherit",boxSizing:"border-box"},select:{width:"100%",padding:"12px 14px",background:p?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",border:`1px solid ${p?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,borderRadius:"8px",color:p?"#fff":"#1e293b",fontSize:"14px",outline:"none",cursor:"pointer",boxSizing:"border-box"},typeInfo:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 14px",background:p?"rgba(124,58,237,0.1)":"rgba(124,58,237,0.05)",borderRadius:"8px",border:`1px solid ${p?"rgba(124,58,237,0.2)":"rgba(124,58,237,0.1)"}`},typeLabel:{color:p?"#888":"#64748b",fontSize:"12px"},typeBadge:{padding:"4px 10px",background:`${gt.purple}20`,color:gt.purple,borderRadius:"4px",fontSize:"12px",fontWeight:600,textTransform:"uppercase"},error:{padding:"10px 14px",background:`${gt.red}15`,border:`1px solid ${gt.red}40`,borderRadius:"8px",color:gt.red,fontSize:"13px",marginBottom:"16px"},success:{padding:"10px 14px",background:`${gt.green}15`,border:`1px solid ${gt.green}40`,borderRadius:"8px",color:gt.green,fontSize:"13px",marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},footer:{padding:"16px 24px",borderTop:`1px solid ${p?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,display:"flex",justifyContent:"flex-end",gap:"12px"},button:C=>({padding:"10px 20px",background:C?gt.purple:p?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",color:C||p?"#fff":"#1e293b",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:500,cursor:"pointer",transition:"all 0.2s"})};return o.jsx("div",{style:b.overlay,onClick:t,children:o.jsxs("div",{style:b.modal,onClick:C=>C.stopPropagation(),children:[o.jsxs("div",{style:b.header,children:[o.jsxs("div",{style:b.headerTitle,children:[o.jsx("span",{style:b.headerIcon,children:"💾"}),o.jsx("span",{style:b.titleText,children:"Save as Template"})]}),o.jsx("button",{style:b.closeButton,onClick:t,children:"×"})]}),o.jsxs("div",{style:b.content,children:[f&&o.jsx("div",{style:b.error,children:f}),g&&o.jsxs("div",{style:b.success,children:[o.jsx("span",{children:"✓"}),"Template saved successfully!"]}),o.jsxs("div",{style:b.formGroup,children:[o.jsx("label",{style:b.label,children:"Template Name"}),o.jsx("input",{ref:l,type:"text",placeholder:"Enter template name...",value:s,onChange:C=>e(C.target.value),style:b.input,disabled:g})]}),o.jsxs("div",{style:b.formGroup,children:[o.jsx("label",{style:b.label,children:"Description"}),o.jsx("textarea",{placeholder:"Describe what this template is for...",value:c,onChange:C=>h(C.target.value),style:b.textarea,disabled:g})]}),o.jsxs("div",{style:b.formGroup,children:[o.jsx("label",{style:b.label,children:"Category"}),o.jsx("select",{value:d,onChange:C=>u(C.target.value),style:b.select,disabled:g,children:Object.values(re).map(C=>o.jsx("option",{value:C,children:C},C))})]}),o.jsxs("div",{style:b.formGroup,children:[o.jsx("label",{style:b.label,children:"Diagram Type"}),o.jsxs("div",{style:b.typeInfo,children:[o.jsx("span",{style:b.typeLabel,children:"This template will be saved as:"}),o.jsx("span",{style:b.typeBadge,children:r})]})]})]}),o.jsxs("div",{style:b.footer,children:[o.jsx("button",{style:b.button(!1),onClick:t,children:"Cancel"}),o.jsx("button",{style:b.button(!0),onClick:x,disabled:g,children:g?"Saved!":"Save Template"})]})]})})}const sc={purple:"#7C3AED",green:"#10B981"};function Er({label:a,icon:t,items:r,theme:n,color:i=sc.purple,disabled:s=!1,showCaret:e=!0}){const[c,h]=M.useState(!1),d=M.useRef(null),u=(n==null?void 0:n.name)==="dark";M.useEffect(()=>{function x(b){d.current&&!d.current.contains(b.target)&&h(!1)}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const f=x=>{x.onClick&&!x.disabled&&(x.onClick(),h(!1))},m={container:{position:"relative",display:"inline-block"},button:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",background:c?`${i}30`:`${i}20`,border:`1px solid ${c?i:`${i}50`}`,borderRadius:6,color:i,fontSize:"0.8rem",fontWeight:500,cursor:s?"not-allowed":"pointer",opacity:s?.5:1,transition:"all 0.15s ease",whiteSpace:"nowrap"},caret:{fontSize:"0.65rem",transition:"transform 0.15s ease",transform:c?"rotate(180deg)":"rotate(0deg)"},dropdown:{position:"absolute",top:"calc(100% + 4px)",left:0,minWidth:"180px",background:u?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",border:`1px solid ${u?"rgba(124,58,237,0.3)":"rgba(124,58,237,0.2)"}`,borderRadius:8,boxShadow:"0 10px 40px rgba(0,0,0,0.3)",zIndex:1e3,overflow:"hidden",backdropFilter:"blur(10px)"},section:{padding:"6px 0",borderBottom:`1px solid ${u?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`},sectionLast:{padding:"6px 0"},sectionLabel:{padding:"4px 12px",fontSize:"0.7rem",fontWeight:600,color:u?"#666":"#94a3b8",textTransform:"uppercase",letterSpacing:"0.5px"},item:(x,b)=>({display:"flex",alignItems:"center",gap:"10px",padding:"8px 12px",fontSize:"0.85rem",color:x.disabled?u?"#555":"#cbd5e1":u?"#e2e8f0":"#334155",cursor:x.disabled?"not-allowed":"pointer",background:b&&!x.disabled?u?"rgba(124,58,237,0.2)":"rgba(124,58,237,0.1)":"transparent",opacity:x.disabled?.5:1,transition:"background 0.1s ease"}),itemIcon:{fontSize:"0.9rem",width:"20px",textAlign:"center"},itemContent:{flex:1,display:"flex",flexDirection:"column"},itemLabel:{fontWeight:500},itemDescription:{fontSize:"0.75rem",color:u?"#666":"#94a3b8",marginTop:"2px"},itemShortcut:{fontSize:"0.7rem",color:u?"#555":"#94a3b8",fontFamily:"monospace",background:u?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",padding:"2px 5px",borderRadius:3},itemBadge:x=>({fontSize:"0.65rem",padding:"2px 6px",background:`${x}20`,color:x,borderRadius:4,fontWeight:600}),divider:{height:1,background:u?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",margin:"4px 0"}},g=[];let y={label:null,items:[]};r.forEach((x,b)=>{x.type==="divider"?y.items.length>0&&(g.push(y),y={label:null,items:[]}):x.type==="section"?(y.items.length>0&&g.push(y),y={label:x.label,items:[]}):y.items.push(x)}),y.items.length>0&&g.push(y);const[l,p]=M.useState(null);return o.jsxs("div",{ref:d,style:m.container,children:[o.jsxs("button",{style:m.button,onClick:()=>!s&&h(!c),onMouseEnter:x=>{s||(x.currentTarget.style.background=`${i}30`)},onMouseLeave:x=>{!s&&!c&&(x.currentTarget.style.background=`${i}20`)},children:[t&&o.jsx("span",{children:t}),o.jsx("span",{children:a}),e&&o.jsx("span",{style:m.caret,children:"▼"})]}),c&&o.jsx("div",{style:m.dropdown,children:g.map((x,b)=>o.jsxs("div",{style:b<g.length-1?m.section:m.sectionLast,children:[x.label&&o.jsx("div",{style:m.sectionLabel,children:x.label}),x.items.map((C,w)=>o.jsxs("div",{style:m.item(C,l===`${b}-${w}`),onClick:()=>f(C),onMouseEnter:()=>p(`${b}-${w}`),onMouseLeave:()=>p(null),children:[C.icon&&o.jsx("span",{style:m.itemIcon,children:C.icon}),o.jsxs("div",{style:m.itemContent,children:[o.jsx("span",{style:m.itemLabel,children:C.label}),C.description&&o.jsx("span",{style:m.itemDescription,children:C.description})]}),C.shortcut&&o.jsx("span",{style:m.itemShortcut,children:C.shortcut}),C.badge&&o.jsx("span",{style:m.itemBadge(C.badgeColor||sc.purple),children:C.badge}),C.active&&o.jsx("span",{style:{color:sc.green},children:"✓"})]},w))]},b))})]})}const dt={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",orange:"#F59E0B",pink:"#EC4899",cyan:"#06B6D4"},jv={"Flow & Process":{icon:"🔀",color:dt.blue,types:["flowchart","activity","state","journey","swimlane","sankey"]},Architecture:{icon:"🏗️",color:dt.purple,types:["architecture","deployment","component","c4","network"]},"Data & Structure":{icon:"📊",color:dt.green,types:["erd","class","mindmap","orgchart"]},Planning:{icon:"📅",color:dt.orange,types:["gantt","timeline","requirement"]},Interaction:{icon:"🔄",color:dt.cyan,types:["sequence","usecase"]},Visualization:{icon:"📈",color:dt.pink,types:["pie","quadrant","wireframe","git"]}},Gh={flowchart:{icon:"📈",name:"Flowchart",desc:"Process flows"},activity:{icon:"🔄",name:"Activity",desc:"UML activity"},state:{icon:"⚡",name:"State Machine",desc:"State transitions"},journey:{icon:"🚶",name:"User Journey",desc:"User experience"},architecture:{icon:"🏗️",name:"Architecture",desc:"System design"},deployment:{icon:"🚀",name:"Deployment",desc:"Infrastructure"},component:{icon:"📦",name:"Component",desc:"Components"},c4:{icon:"🏛️",name:"C4 Model",desc:"C4 architecture"},network:{icon:"🌐",name:"Network",desc:"Network topology"},erd:{icon:"📊",name:"ERD",desc:"Database schema"},class:{icon:"📐",name:"Class Diagram",desc:"OOP classes"},mindmap:{icon:"🧠",name:"Mind Map",desc:"Ideas hierarchy"},orgchart:{icon:"👥",name:"Org Chart",desc:"Organization"},gantt:{icon:"📊",name:"Gantt Chart",desc:"Project timeline"},timeline:{icon:"📅",name:"Timeline",desc:"Events timeline"},requirement:{icon:"📋",name:"Requirements",desc:"Specifications"},sequence:{icon:"🔄",name:"Sequence",desc:"Message flow"},usecase:{icon:"👤",name:"Use Case",desc:"Actor interactions"},pie:{icon:"🥧",name:"Pie Chart",desc:"Data distribution"},quadrant:{icon:"📊",name:"Quadrant",desc:"Priority matrix"},wireframe:{icon:"📱",name:"Wireframe",desc:"UI mockups"},git:{icon:"🌿",name:"Git Graph",desc:"Branch history"},swimlane:{icon:"🏊",name:"Swimlane",desc:"Process with roles"},sankey:{icon:"🌊",name:"Sankey",desc:"Flow visualization"}};function Mv({activeType:a,onTypeChange:t,theme:r}){const[n,i]=M.useState(!1),[s,e]=M.useState(null),c=M.useRef(null),h=(r==null?void 0:r.name)==="dark";M.useEffect(()=>{function m(g){c.current&&!c.current.contains(g.target)&&i(!1)}return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]);const d=Gh[a]||{icon:"📄",name:a},u={container:{position:"relative"},trigger:{display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",background:n?h?"rgba(124,58,237,0.3)":"rgba(124,58,237,0.2)":h?"rgba(124,58,237,0.15)":"rgba(124,58,237,0.1)",border:`1px solid ${n?dt.purple:"rgba(124,58,237,0.3)"}`,borderRadius:8,cursor:"pointer",transition:"all 0.15s ease"},triggerIcon:{fontSize:"1rem"},triggerText:{color:h?"#fff":"#1e293b",fontSize:"0.9rem",fontWeight:600},triggerDesc:{color:h?"#888":"#64748b",fontSize:"0.75rem"},caret:{color:h?"#888":"#64748b",fontSize:"0.65rem",marginLeft:"4px",transition:"transform 0.15s ease",transform:n?"rotate(180deg)":"rotate(0deg)"},dropdown:{position:"absolute",top:"calc(100% + 6px)",left:0,width:"320px",maxHeight:"70vh",overflowY:"auto",background:h?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",border:`1px solid ${h?"rgba(124,58,237,0.3)":"rgba(124,58,237,0.2)"}`,borderRadius:12,boxShadow:"0 15px 50px rgba(0,0,0,0.3)",zIndex:1e3,backdropFilter:"blur(10px)"},category:{padding:"8px 0",borderBottom:`1px solid ${h?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}`},categoryLast:{padding:"8px 0"},categoryHeader:m=>({display:"flex",alignItems:"center",gap:"8px",padding:"6px 14px",fontSize:"0.75rem",fontWeight:600,color:m,textTransform:"uppercase",letterSpacing:"0.5px"}),typeGrid:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4px",padding:"0 8px"},typeItem:(m,g)=>({display:"flex",alignItems:"center",gap:"8px",padding:"10px 12px",borderRadius:6,cursor:"pointer",background:m?h?"rgba(124,58,237,0.3)":"rgba(124,58,237,0.15)":g?h?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)":"transparent",border:m?`1px solid ${dt.purple}`:"1px solid transparent",transition:"all 0.1s ease"}),typeIcon:{fontSize:"1rem"},typeContent:{flex:1,minWidth:0},typeName:m=>({fontSize:"0.85rem",fontWeight:m?600:500,color:m?dt.purple:h?"#e2e8f0":"#334155",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}),typeDesc:{fontSize:"0.7rem",color:h?"#666":"#94a3b8"},checkmark:{color:dt.green,fontSize:"0.8rem"}},f=Object.entries(jv);return o.jsxs("div",{ref:c,style:u.container,children:[o.jsxs("div",{style:u.trigger,onClick:()=>i(!n),onMouseEnter:m=>{n||(m.currentTarget.style.background=h?"rgba(124,58,237,0.25)":"rgba(124,58,237,0.15)")},onMouseLeave:m=>{n||(m.currentTarget.style.background=h?"rgba(124,58,237,0.15)":"rgba(124,58,237,0.1)")},children:[o.jsx("span",{style:u.triggerIcon,children:d.icon}),o.jsxs("div",{children:[o.jsx("div",{style:u.triggerText,children:d.name}),o.jsx("div",{style:u.triggerDesc,children:d.desc})]}),o.jsx("span",{style:u.caret,children:"▼"})]}),n&&o.jsx("div",{style:u.dropdown,children:f.map(([m,g],y)=>o.jsxs("div",{style:y<f.length-1?u.category:u.categoryLast,children:[o.jsxs("div",{style:u.categoryHeader(g.color),children:[o.jsx("span",{children:g.icon}),o.jsx("span",{children:m})]}),o.jsx("div",{style:u.typeGrid,children:g.types.map(l=>{const p=Gh[l],x=l===a,b=s===l;return o.jsxs("div",{style:u.typeItem(x,b),onClick:()=>{t(l),i(!1)},onMouseEnter:()=>e(l),onMouseLeave:()=>e(null),children:[o.jsx("span",{style:u.typeIcon,children:p.icon}),o.jsxs("div",{style:u.typeContent,children:[o.jsx("div",{style:u.typeName(x),children:p.name}),o.jsx("div",{style:u.typeDesc,children:p.desc})]}),x&&o.jsx("span",{style:u.checkmark,children:"✓"})]},l)})})]},m))})]})}const Q={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",orange:"#F59E0B",pink:"#EC4899",red:"#EF4444",cyan:"#06B6D4",violet:"#8B5CF6",teal:"#14B8A6",amber:"#D97706",emerald:"#059669",sky:"#0284C7"},Av={flowchart:{name:"Flowchart",categories:[{name:"Flow Control",nodes:[{type:"start",icon:"▶️",label:"Start",color:Q.green,dsl:"(start) Start"},{type:"end",icon:"⏹️",label:"End",color:Q.red,dsl:"(end) End"},{type:"decision",icon:"◇",label:"Decision",color:Q.orange,dsl:"(decision) Decision?"}]},{name:"Actions",nodes:[{type:"process",icon:"⬜",label:"Process",color:Q.blue,dsl:"(process) Process"},{type:"action",icon:"⚡",label:"Action",color:Q.purple,dsl:"(action) Action"},{type:"io",icon:"▱",label:"Input/Output",color:Q.cyan,dsl:"(io) Input/Output"}]}]},architecture:{name:"Architecture",categories:[{name:"Frontend",nodes:[{type:"clients",icon:"👥",label:"Client",color:Q.pink,dsl:"[clients] Client"},{type:"gateway",icon:"🚪",label:"Gateway",color:Q.orange,dsl:"[gateway] API Gateway"}]},{name:"Backend",nodes:[{type:"services",icon:"⚙️",label:"Service",color:Q.blue,dsl:"[services] Service"},{type:"data",icon:"🗄️",label:"Database",color:Q.emerald,dsl:"[data] Database"},{type:"cache",icon:"⚡",label:"Cache",color:Q.red,dsl:"[cache] Redis"},{type:"queue",icon:"📨",label:"Queue",color:Q.amber,dsl:"[queue] Message Queue"},{type:"storage",icon:"📦",label:"Storage",color:Q.teal,dsl:"[storage] S3 Bucket"}]}]},journey:{name:"User Journey",categories:[{name:"People",nodes:[{type:"actor",icon:"👤",label:"Actor",color:Q.pink,dsl:"[actor] User"},{type:"user",icon:"🧑",label:"User",color:Q.pink,dsl:"[user] Customer"}]},{name:"Touchpoints",nodes:[{type:"page",icon:"📱",label:"Page",color:Q.cyan,dsl:"[page] Landing Page"},{type:"screen",icon:"🖥️",label:"Screen",color:Q.cyan,dsl:"[screen] Dashboard"},{type:"action",icon:"👆",label:"Action",color:Q.purple,dsl:"[action] Click Button"},{type:"form",icon:"📝",label:"Form",color:Q.orange,dsl:"[form] Sign Up Form"}]},{name:"Communication",nodes:[{type:"email",icon:"✉️",label:"Email",color:Q.amber,dsl:"[email] Welcome Email"},{type:"notification",icon:"🔔",label:"Notification",color:Q.red,dsl:"[notification] Alert"}]},{name:"Outcomes",nodes:[{type:"success",icon:"✅",label:"Success",color:Q.green,dsl:"[success] Completed"},{type:"error",icon:"❌",label:"Error",color:Q.red,dsl:"[error] Failed"},{type:"milestone",icon:"🎯",label:"Milestone",color:Q.green,dsl:"[milestone] Goal Reached"},{type:"decision",icon:"❓",label:"Decision",color:Q.orange,dsl:"[decision] Choose Path"}]}]},state:{name:"State Machine",categories:[{name:"States",nodes:[{type:"initial",icon:"▶️",label:"Initial",color:Q.green,dsl:"(initial) Initial"},{type:"state",icon:"⬜",label:"State",color:Q.blue,dsl:"State"},{type:"final",icon:"⏹️",label:"Final",color:Q.red,dsl:"(final) Final"}]}]},erd:{name:"ERD",categories:[{name:"Tables",nodes:[{type:"table",icon:"📋",label:"Table",color:Q.blue,dsl:`CREATE TABLE table_name (
  id UUID PRIMARY KEY,
  name VARCHAR(255)
);`},{type:"pk",icon:"🔑",label:"Primary Key",color:Q.amber,dsl:"  id UUID PRIMARY KEY,"},{type:"fk",icon:"🔗",label:"Foreign Key",color:Q.purple,dsl:"  ref_id UUID REFERENCES other_table(id),"},{type:"column",icon:"▪️",label:"Column",color:Q.cyan,dsl:"  column_name VARCHAR(255),"}]}]},sequence:{name:"Sequence",categories:[{name:"Participants",nodes:[{type:"participant",icon:"👤",label:"Participant",color:Q.blue,dsl:"participant Actor"}]},{name:"Messages",nodes:[{type:"request",icon:"➡️",label:"Request",color:Q.green,dsl:"A -> B: Request"},{type:"response",icon:"⬅️",label:"Response",color:Q.orange,dsl:"B --> A: Response"}]}]},mindmap:{name:"Mind Map",categories:[{name:"Nodes",nodes:[{type:"root",icon:"🌳",label:"Root",color:Q.purple,dsl:"Root Topic"},{type:"branch",icon:"🌿",label:"Branch",color:Q.blue,dsl:"  Branch"},{type:"leaf",icon:"🍃",label:"Leaf",color:Q.green,dsl:"    Leaf"}]}]},class:{name:"Class Diagram",categories:[{name:"Classes",nodes:[{type:"class",icon:"📦",label:"Class",color:Q.blue,dsl:`class ClassName
  + property: type
  + method(): void`},{type:"interface",icon:"📄",label:"Interface",color:Q.purple,dsl:`interface IName
  + method(): void`}]},{name:"Members",nodes:[{type:"public",icon:"➕",label:"Public",color:Q.green,dsl:"  + publicMember: type"},{type:"private",icon:"➖",label:"Private",color:Q.red,dsl:"  - privateMember: type"},{type:"protected",icon:"#️⃣",label:"Protected",color:Q.orange,dsl:"  # protectedMember: type"}]}]},deployment:{name:"Deployment",categories:[{name:"Infrastructure",nodes:[{type:"cloud",icon:"☁️",label:"Cloud",color:Q.sky,dsl:"[cloud] AWS"},{type:"cluster",icon:"🔷",label:"Cluster",color:Q.teal,dsl:"  [cluster] Kubernetes"},{type:"container",icon:"📦",label:"Container",color:Q.cyan,dsl:"    [container] Service"}]},{name:"Data",nodes:[{type:"database",icon:"🗄️",label:"Database",color:Q.green,dsl:"  [database] PostgreSQL"},{type:"storage",icon:"💾",label:"Storage",color:Q.emerald,dsl:"  [storage] S3"}]},{name:"Clients",nodes:[{type:"device",icon:"💻",label:"Device",color:Q.pink,dsl:"[device] Browser"},{type:"server",icon:"🖥️",label:"Server",color:Q.violet,dsl:"[server] Web Server"}]}]},network:{name:"Network",categories:[{name:"Devices",nodes:[{type:"cloud",icon:"☁️",label:"Cloud",color:Q.sky,dsl:"[cloud] Internet"},{type:"firewall",icon:"🛡️",label:"Firewall",color:Q.red,dsl:"[firewall] Firewall (10.0.0.1)"},{type:"router",icon:"📡",label:"Router",color:Q.orange,dsl:"[router] Router (10.0.0.2)"},{type:"switch",icon:"🔀",label:"Switch",color:Q.blue,dsl:"[switch] Switch (10.0.0.3)"},{type:"server",icon:"🖥️",label:"Server",color:Q.purple,dsl:"[server] Server (10.0.0.10)"},{type:"computer",icon:"💻",label:"Computer",color:Q.green,dsl:"[computer] Workstation"}]}]},usecase:{name:"Use Case",categories:[{name:"Elements",nodes:[{type:"actor",icon:"👤",label:"Actor",color:Q.blue,dsl:"actor User"},{type:"usecase",icon:"⭕",label:"Use Case",color:Q.purple,dsl:"(Use Case Name)"}]}]},component:{name:"Component",categories:[{name:"Components",nodes:[{type:"component",icon:"🧩",label:"Component",color:Q.purple,dsl:"[component] Component"},{type:"service",icon:"⚙️",label:"Service",color:Q.blue,dsl:"[service] Service"},{type:"api",icon:"🔌",label:"API",color:Q.orange,dsl:"[api] API Gateway"},{type:"database",icon:"🗄️",label:"Database",color:Q.green,dsl:"[database] Database"},{type:"cache",icon:"⚡",label:"Cache",color:Q.red,dsl:"[cache] Redis"}]}]},c4:{name:"C4 Model",categories:[{name:"Elements",nodes:[{type:"person",icon:"👤",label:"Person",color:Q.blue,dsl:"[person] User: Description"},{type:"system",icon:"🏢",label:"System",color:Q.purple,dsl:"[system] System: Description"},{type:"container",icon:"📦",label:"Container",color:Q.cyan,dsl:"[container] Container: Description"},{type:"component",icon:"🧩",label:"Component",color:Q.green,dsl:"[component] Component: Description"},{type:"external",icon:"🌐",label:"External",color:Q.orange,dsl:"[external] External: Description"}]}]},activity:{name:"Activity",categories:[{name:"Control",nodes:[{type:"start",icon:"▶️",label:"Start",color:Q.green,dsl:"[start]"},{type:"end",icon:"⏹️",label:"End",color:Q.red,dsl:"[end]"},{type:"decision",icon:"◇",label:"Decision",color:Q.orange,dsl:"<Decision?>"}]},{name:"Actions",nodes:[{type:"action",icon:"⬜",label:"Action",color:Q.blue,dsl:":Action;"}]}]},gantt:{name:"Gantt",categories:[{name:"Tasks",nodes:[{type:"task",icon:"📋",label:"Task",color:Q.blue,dsl:"Task Name, 0, 3"},{type:"milestone",icon:"🎯",label:"Milestone",color:Q.green,dsl:"Milestone, 5, 0"}]}]},timeline:{name:"Timeline",categories:[{name:"Events",nodes:[{type:"event",icon:"📅",label:"Event",color:Q.blue,dsl:"[Date] Event Title | Description"},{type:"milestone",icon:"⭐",label:"Milestone",color:Q.green,dsl:"[Date] *Milestone | Description"}]}]},wireframe:{name:"Wireframe",categories:[{name:"Layout",nodes:[{type:"window",icon:"🪟",label:"Window",color:Q.blue,dsl:"{Window Title}"},{type:"navbar",icon:"📊",label:"Navbar",color:Q.purple,dsl:"[[ Home | About | Contact ]]"},{type:"tabs",icon:"📑",label:"Tabs",color:Q.cyan,dsl:"(( Tab1 | Tab2 | Tab3 ))"},{type:"card",icon:"🃏",label:"Card",color:Q.orange,dsl:`<Card Title>
Content here
</Card>`}]},{name:"Elements",nodes:[{type:"button",icon:"🔘",label:"Button",color:Q.green,dsl:"[Button Text]"},{type:"input",icon:"📝",label:"Input",color:Q.blue,dsl:"[text: Placeholder...]"},{type:"search",icon:"🔍",label:"Search",color:Q.purple,dsl:"[search: Search...]"},{type:"dropdown",icon:"📋",label:"Dropdown",color:Q.orange,dsl:"[v Select Option]"}]},{name:"Content",nodes:[{type:"heading",icon:"📰",label:"Heading",color:Q.blue,dsl:"# Heading Text"},{type:"divider",icon:"➖",label:"Divider",color:Q.cyan,dsl:"---"},{type:"table",icon:"📊",label:"Table",color:Q.purple,dsl:`|Col1|Col2|Col3|
|Data|Data|Data|`},{type:"progress",icon:"📊",label:"Progress",color:Q.green,dsl:"[progress: 75%]"}]}]}},Rv={name:"Generic",categories:[{name:"Basic",nodes:[{type:"node",icon:"⬜",label:"Node",color:Q.blue,dsl:"Node"}]}]};function $v({isOpen:a,diagramType:t,onDragStart:r,onClose:n,onAddNode:i,theme:s}){const[e,c]=M.useState(""),[h,d]=M.useState({}),u=(s==null?void 0:s.name)==="dark",f=Av[t]||Rv,m=M.useMemo(()=>{if(!e.trim())return f.categories;const x=e.toLowerCase();return f.categories.map(b=>({...b,nodes:b.nodes.filter(C=>C.label.toLowerCase().includes(x)||C.type.toLowerCase().includes(x))})).filter(b=>b.nodes.length>0)},[f.categories,e]),g=x=>{d(b=>({...b,[x]:!b[x]}))},y=(x,b)=>{x.dataTransfer.setData("text/plain",b.dsl),x.dataTransfer.effectAllowed="copy",r&&r(b)},l=x=>{i&&i(x.dsl)};if(!a)return null;const p={sidebar:{position:"fixed",left:0,top:105,width:260,height:"calc(100vh - 105px)",background:u?"linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",borderRight:`1px solid ${u?"rgba(124,58,237,0.2)":"rgba(124,58,237,0.1)"}`,display:"flex",flexDirection:"column",overflow:"hidden",zIndex:100,boxShadow:"4px 0 20px rgba(0,0,0,0.2)"},header:{padding:"12px 14px",borderBottom:`1px solid ${u?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:u?"rgba(124,58,237,0.1)":"rgba(124,58,237,0.05)"},headerTitle:{display:"flex",alignItems:"center",gap:8},headerIcon:{fontSize:"1rem"},title:{fontSize:"0.8rem",fontWeight:600,color:u?"#fff":"#1e293b"},subtitle:{fontSize:"0.65rem",color:u?"#888":"#64748b"},closeBtn:{background:"transparent",border:"none",color:u?"#888":"#64748b",cursor:"pointer",fontSize:"1rem",padding:4,borderRadius:4},search:{padding:"10px 14px",borderBottom:`1px solid ${u?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}`},searchInput:{width:"100%",padding:"8px 12px",background:u?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",border:`1px solid ${u?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,borderRadius:6,color:u?"#fff":"#1e293b",fontSize:"0.75rem",outline:"none"},content:{flex:1,overflowY:"auto",padding:"8px 0"},category:{marginBottom:4},categoryHeader:{display:"flex",alignItems:"center",gap:8,padding:"8px 14px",cursor:"pointer",color:u?"#aaa":"#64748b",fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},categoryArrow:x=>({transition:"transform 0.2s",transform:x?"rotate(90deg)":"rotate(0deg)",fontSize:"0.6rem"}),nodesGrid:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:6,padding:"4px 10px 12px"},nodeItem:x=>({display:"flex",flexDirection:"column",alignItems:"center",padding:"10px 6px",background:u?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.03)",border:`1px solid ${u?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)"}`,borderRadius:8,cursor:"grab",transition:"all 0.15s"}),nodeIcon:{fontSize:"1.2rem",marginBottom:4},nodeLabel:{fontSize:"0.65rem",color:u?"#ccc":"#334155",textAlign:"center",fontWeight:500},emptyState:{padding:"20px 14px",textAlign:"center",color:u?"#666":"#94a3b8",fontSize:"0.75rem"},tip:{padding:"10px 14px",borderTop:`1px solid ${u?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}`,background:u?"rgba(124,58,237,0.05)":"rgba(124,58,237,0.03)"},tipText:{fontSize:"0.65rem",color:u?"#888":"#64748b",textAlign:"center"}};return o.jsxs("div",{style:p.sidebar,children:[o.jsxs("div",{style:p.header,children:[o.jsxs("div",{style:p.headerTitle,children:[o.jsx("span",{style:p.headerIcon,children:"🧩"}),o.jsxs("div",{children:[o.jsx("div",{style:p.title,children:"Node Library"}),o.jsx("div",{style:p.subtitle,children:f.name})]})]}),o.jsx("button",{style:p.closeBtn,onClick:n,title:"Close library",children:"✕"})]}),o.jsx("div",{style:p.search,children:o.jsx("input",{type:"text",placeholder:"Search nodes...",value:e,onChange:x=>c(x.target.value),style:p.searchInput})}),o.jsx("div",{style:p.content,children:m.length===0?o.jsx("div",{style:p.emptyState,children:"No nodes match your search"}):m.map(x=>{const b=h[x.name]!==!1;return o.jsxs("div",{style:p.category,children:[o.jsxs("div",{style:p.categoryHeader,onClick:()=>g(x.name),children:[o.jsx("span",{style:p.categoryArrow(b),children:"▶"}),o.jsx("span",{children:x.name}),o.jsx("span",{style:{marginLeft:"auto",opacity:.6},children:x.nodes.length})]}),b&&o.jsx("div",{style:p.nodesGrid,children:x.nodes.map(C=>o.jsxs("div",{style:p.nodeItem(C.color),draggable:!0,onClick:()=>l(C),onDragStart:w=>y(w,C),onMouseEnter:w=>{w.currentTarget.style.borderColor=C.color,w.currentTarget.style.transform="translateY(-2px)",w.currentTarget.style.boxShadow=`0 4px 12px ${C.color}30`},onMouseLeave:w=>{w.currentTarget.style.borderColor=u?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",w.currentTarget.style.transform="none",w.currentTarget.style.boxShadow="none"},title:`Click or drag to add ${C.label}`,children:[o.jsx("span",{style:p.nodeIcon,children:C.icon}),o.jsx("span",{style:p.nodeLabel,children:C.label})]},C.type))})]},x.name)})}),o.jsx("div",{style:p.tip,children:o.jsx("div",{style:p.tipText,children:"Click or drag nodes to add them to your diagram"})})]})}const ht={CURRENT_DIAGRAM:"ddflow_current_diagram",RECENT_FILES:"ddflow_recent_files",AUTO_SAVE_ENABLED:"ddflow_autosave_enabled",COLOR_SETTINGS:"ddflow_color_settings"},Iv=10;function Tv(){try{const a=localStorage.getItem(ht.CURRENT_DIAGRAM);if(a)return JSON.parse(a)}catch(a){console.error("Failed to load diagram from localStorage:",a)}return null}function Hh(a,t,r="Untitled Diagram"){try{const n={type:a,source:t,name:r,savedAt:new Date().toISOString(),version:"1.0"};return localStorage.setItem(ht.CURRENT_DIAGRAM,JSON.stringify(n)),!0}catch(n){return console.error("Failed to save diagram to localStorage:",n),!1}}function Lc(){try{const a=localStorage.getItem(ht.RECENT_FILES);if(a)return JSON.parse(a)}catch(a){console.error("Failed to load recent files:",a)}return[]}function xg(a){try{let t=Lc();t=t.filter(r=>r.name!==a.name),t.unshift({...a,savedAt:new Date().toISOString()}),t=t.slice(0,Iv),localStorage.setItem(ht.RECENT_FILES,JSON.stringify(t))}catch(t){console.error("Failed to add to recent files:",t)}}function Pv(a){try{let t=Lc();t=t.filter(r=>r.name!==a),localStorage.setItem(ht.RECENT_FILES,JSON.stringify(t))}catch(t){console.error("Failed to remove from recent files:",t)}}function _v(a,t,r="diagram"){const n={type:a,source:t,name:r,exportedAt:new Date().toISOString(),version:"1.0",format:"ddflow"},i=JSON.stringify(n,null,2),s=new Blob([i],{type:"application/json"}),e=URL.createObjectURL(s),c=document.createElement("a");c.href=e,c.download=`${r}.ddflow`,c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),setTimeout(()=>URL.revokeObjectURL(e),100),xg({name:r,type:a,source:t})}function Dv(){return new Promise((a,t)=>{const r=document.createElement("input");r.type="file",r.accept=".ddflow,.json",r.style.display="none",r.onchange=async n=>{var s;const i=(s=n.target.files)==null?void 0:s[0];if(!i){t(new Error("No file selected"));return}try{const e=await i.text(),c=JSON.parse(e);if(!c.type||!c.source)throw new Error("Invalid diagram file: missing type or source");c.name||(c.name=i.name.replace(/\.(ddflow|json)$/i,"")),xg({name:c.name,type:c.type,source:c.source}),a(c)}catch(e){t(new Error(`Failed to parse file: ${e.message}`))}},r.onerror=()=>{t(new Error("Failed to open file"))},document.body.appendChild(r),r.click(),document.body.removeChild(r)})}function Lv(){try{return localStorage.getItem(ht.AUTO_SAVE_ENABLED)!=="false"}catch{return!0}}function Nv(a){try{localStorage.setItem(ht.AUTO_SAVE_ENABLED,String(a))}catch(t){console.error("Failed to save auto-save setting:",t)}}function Bv(a){try{const t=new Date(a),n=new Date-t,i=Math.floor(n/6e4),s=Math.floor(n/36e5),e=Math.floor(n/864e5);return i<1?"Just now":i<60?`${i}m ago`:s<24?`${s}h ago`:e<7?`${e}d ago`:t.toLocaleDateString()}catch{return"Unknown"}}const Pr={accentPrimary:"#7C3AED",accentSecondary:"#6366F1",selection:"#0EA5E9",success:"#10B981",warning:"#F59E0B",error:"#EF4444"},cc={purple:{name:"Purple (Default)",icon:"💜",accentPrimary:"#7C3AED",accentSecondary:"#6366F1"},blue:{name:"Ocean Blue",icon:"💙",accentPrimary:"#0EA5E9",accentSecondary:"#3B82F6"},green:{name:"Forest Green",icon:"💚",accentPrimary:"#10B981",accentSecondary:"#059669"},orange:{name:"Sunset Orange",icon:"🧡",accentPrimary:"#F59E0B",accentSecondary:"#D97706"},pink:{name:"Rose Pink",icon:"💗",accentPrimary:"#EC4899",accentSecondary:"#DB2777"},cyan:{name:"Teal Cyan",icon:"💠",accentPrimary:"#06B6D4",accentSecondary:"#14B8A6"},red:{name:"Ruby Red",icon:"❤️",accentPrimary:"#EF4444",accentSecondary:"#DC2626"}};function bg(){try{const a=localStorage.getItem(ht.COLOR_SETTINGS);if(a)return{...Pr,...JSON.parse(a)}}catch(a){console.error("Failed to load color settings:",a)}return{...Pr}}function Wv(a){try{return localStorage.setItem(ht.COLOR_SETTINGS,JSON.stringify(a)),!0}catch(t){return console.error("Failed to save color settings:",t),!1}}function zv(){try{localStorage.removeItem(ht.COLOR_SETTINGS)}catch(a){console.error("Failed to reset color settings:",a)}}function Ov({isOpen:a,onClose:t,onApply:r,theme:n}){const[i,s]=M.useState(()=>bg()),[e,c]=M.useState(null),h=(n==null?void 0:n.name)==="dark";M.useEffect(()=>{const l=Object.entries(cc).find(([p,x])=>x.accentPrimary===i.accentPrimary&&x.accentSecondary===i.accentSecondary);c(l?l[0]:null)},[i]);const d=l=>{const p=cc[l],x={...i,accentPrimary:p.accentPrimary,accentSecondary:p.accentSecondary};s(x)},u=(l,p)=>{s(x=>({...x,[l]:p}))},f=()=>{Wv(i),r&&r(i),t()},m=()=>{zv(),s({...Pr}),r&&r(Pr)};if(!a)return null;const g={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:20},modal:{background:(n==null?void 0:n.modalBg)||(h?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),borderRadius:16,border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,width:"100%",maxWidth:480,overflow:"hidden",boxShadow:"0 25px 50px rgba(0,0,0,0.4)"},header:{padding:"16px 20px",borderBottom:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:`${i.accentPrimary}15`},headerTitle:{display:"flex",alignItems:"center",gap:10},headerIcon:{fontSize:"1.2rem"},title:{fontWeight:600,color:(n==null?void 0:n.textPrimary)||"#fff"},closeBtn:{background:"transparent",border:"none",color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"1.2rem",cursor:"pointer",padding:4},content:{padding:20,maxHeight:"calc(80vh - 140px)",overflowY:"auto"},section:{marginBottom:24},sectionTitle:{fontSize:"0.75rem",fontWeight:600,color:(n==null?void 0:n.textSecondary)||"#888",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:12},presetsGrid:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},presetItem:(l,p)=>({display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"12px 8px",background:l?`${p}20`:h?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",border:`2px solid ${l?p:"transparent"}`,borderRadius:10,cursor:"pointer",transition:"all 0.15s"}),presetIcon:{fontSize:"1.4rem"},presetName:{fontSize:"0.65rem",color:(n==null?void 0:n.textPrimary)||"#fff",textAlign:"center",fontWeight:500},colorRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${h?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)"}`},colorLabel:{display:"flex",flexDirection:"column",gap:2},colorName:{fontSize:"0.85rem",fontWeight:500,color:(n==null?void 0:n.textPrimary)||"#fff"},colorDesc:{fontSize:"0.7rem",color:(n==null?void 0:n.textSecondary)||"#888"},colorInput:{display:"flex",alignItems:"center",gap:8},colorPicker:{width:36,height:36,border:"none",borderRadius:8,cursor:"pointer",padding:0},colorHex:{fontSize:"0.75rem",fontFamily:"Monaco, monospace",color:(n==null?void 0:n.textSecondary)||"#888",background:h?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",padding:"4px 8px",borderRadius:4},preview:{padding:16,background:h?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",borderRadius:10,display:"flex",flexWrap:"wrap",gap:8},previewItem:l=>({padding:"6px 12px",background:`${l}20`,border:`1px solid ${l}`,borderRadius:6,color:l,fontSize:"0.75rem",fontWeight:500}),footer:{padding:"12px 20px",borderTop:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,display:"flex",justifyContent:"space-between",alignItems:"center"},resetBtn:{padding:"8px 16px",background:"transparent",border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"0.8rem",cursor:"pointer"},buttonGroup:{display:"flex",gap:10},cancelBtn:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"0.8rem",cursor:"pointer"},applyBtn:{padding:"8px 16px",background:`linear-gradient(135deg, ${i.accentPrimary}, ${i.accentSecondary})`,border:"none",borderRadius:6,color:"#fff",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"}},y=[{key:"accentPrimary",name:"Primary Accent",desc:"Main brand color for buttons, links"},{key:"accentSecondary",name:"Secondary Accent",desc:"Gradients and hover states"},{key:"selection",name:"Selection",desc:"Selected items highlight"},{key:"success",name:"Success",desc:"Success messages and states"},{key:"warning",name:"Warning",desc:"Warning messages and states"},{key:"error",name:"Error",desc:"Error messages and states"}];return o.jsx("div",{style:g.overlay,onClick:t,children:o.jsxs("div",{style:g.modal,onClick:l=>l.stopPropagation(),children:[o.jsxs("div",{style:g.header,children:[o.jsxs("div",{style:g.headerTitle,children:[o.jsx("span",{style:g.headerIcon,children:"🎨"}),o.jsx("span",{style:g.title,children:"Color Settings"})]}),o.jsx("button",{style:g.closeBtn,onClick:t,children:"✕"})]}),o.jsxs("div",{style:g.content,children:[o.jsxs("div",{style:g.section,children:[o.jsx("div",{style:g.sectionTitle,children:"Color Presets"}),o.jsx("div",{style:g.presetsGrid,children:Object.entries(cc).map(([l,p])=>o.jsxs("div",{style:g.presetItem(e===l,p.accentPrimary),onClick:()=>d(l),onMouseEnter:x=>{e!==l&&(x.currentTarget.style.borderColor=p.accentPrimary+"50")},onMouseLeave:x=>{e!==l&&(x.currentTarget.style.borderColor="transparent")},children:[o.jsx("span",{style:g.presetIcon,children:p.icon}),o.jsx("span",{style:g.presetName,children:p.name.split(" ")[0]})]},l))})]}),o.jsxs("div",{style:g.section,children:[o.jsx("div",{style:g.sectionTitle,children:"Custom Colors"}),y.map(({key:l,name:p,desc:x})=>o.jsxs("div",{style:g.colorRow,children:[o.jsxs("div",{style:g.colorLabel,children:[o.jsx("span",{style:g.colorName,children:p}),o.jsx("span",{style:g.colorDesc,children:x})]}),o.jsxs("div",{style:g.colorInput,children:[o.jsx("input",{type:"color",value:i[l],onChange:b=>u(l,b.target.value),style:g.colorPicker}),o.jsx("span",{style:g.colorHex,children:i[l]})]})]},l))]}),o.jsxs("div",{style:g.section,children:[o.jsx("div",{style:g.sectionTitle,children:"Preview"}),o.jsxs("div",{style:g.preview,children:[o.jsx("span",{style:g.previewItem(i.accentPrimary),children:"Primary"}),o.jsx("span",{style:g.previewItem(i.accentSecondary),children:"Secondary"}),o.jsx("span",{style:g.previewItem(i.selection),children:"Selected"}),o.jsx("span",{style:g.previewItem(i.success),children:"Success"}),o.jsx("span",{style:g.previewItem(i.warning),children:"Warning"}),o.jsx("span",{style:g.previewItem(i.error),children:"Error"})]})]})]}),o.jsxs("div",{style:g.footer,children:[o.jsx("button",{style:g.resetBtn,onClick:m,children:"Reset to Default"}),o.jsxs("div",{style:g.buttonGroup,children:[o.jsx("button",{style:g.cancelBtn,onClick:t,children:"Cancel"}),o.jsx("button",{style:g.applyBtn,onClick:f,children:"Apply Colors"})]})]})]})})}const Me={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",red:"#EF4444",indigo:"#6366F1"},qv=10*1024*1024,Yh=["image/png","image/jpeg","image/jpg","image/webp","image/gif"];function Fv({isOpen:a,onClose:t,onImport:r,theme:n}){const[i,s]=M.useState(null),[e,c]=M.useState(!1),[h,d]=M.useState(!1),[u,f]=M.useState(null),[m,g]=M.useState(null),y=M.useRef(null),l=M.useRef(null),p=(n==null?void 0:n.name)==="dark";M.useEffect(()=>{a||(s(null),f(null),g(null),d(!1))},[a]),M.useEffect(()=>{if(!a)return;const P=async W=>{var G;const N=(G=W.clipboardData)==null?void 0:G.items;if(N){for(const V of N)if(V.type.startsWith("image/")){W.preventDefault();const J=V.getAsFile();J&&await x(J);break}}};return document.addEventListener("paste",P),()=>document.removeEventListener("paste",P)},[a]);const x=async P=>{if(g(null),f(null),!Yh.includes(P.type)){g(`Unsupported file type: ${P.type}. Please use PNG, JPG, WEBP, or GIF.`);return}if(P.size>qv){g(`File too large (${(P.size/1024/1024).toFixed(1)}MB). Maximum size is 10MB.`);return}const W=new FileReader;W.onload=N=>{const G=N.target.result,V=G.split(",")[1];s({base64:V,mimeType:P.type,name:P.name,size:P.size,preview:G})},W.onerror=()=>{g("Failed to read file. Please try again.")},W.readAsDataURL(P)},b=M.useCallback(P=>{P.preventDefault(),P.stopPropagation(),c(!0)},[]),C=M.useCallback(P=>{P.preventDefault(),P.stopPropagation(),c(!1)},[]),w=M.useCallback(async P=>{var N;P.preventDefault(),P.stopPropagation(),c(!1);const W=(N=P.dataTransfer)==null?void 0:N.files;W&&W.length>0&&await x(W[0])},[]),k=async P=>{var N;const W=(N=P.target.files)==null?void 0:N[0];W&&await x(W)},[S,E]=M.useState(null),j=async()=>{if(!(!i||!Dt())){d(!0),g(null),f(null),E(null);try{const P=await gv(i.base64,i.mimeType);f(P),E(P.type)}catch(P){g(P.message||"Failed to analyze image. Please try again.")}finally{d(!1)}}},$=()=>{u&&r&&r(S||u.type,u.dsl,u.name)},R=P=>{E(P)},A=()=>{s(null),f(null),g(null),y.current&&(y.current.value="")};if(!a)return null;const _=P=>P<1024?`${P} B`:P<1024*1024?`${(P/1024).toFixed(1)} KB`:`${(P/1024/1024).toFixed(1)} MB`,T={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:20},modal:{background:(n==null?void 0:n.modalBg)||(p?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),borderRadius:16,border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,width:"100%",maxWidth:600,maxHeight:"90vh",overflow:"hidden",boxShadow:"0 25px 50px rgba(0,0,0,0.4)",display:"flex",flexDirection:"column"},header:{padding:"16px 20px",borderBottom:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:`${Me.purple}15`},headerTitle:{display:"flex",alignItems:"center",gap:10},headerIcon:{fontSize:"1.2rem"},title:{fontWeight:600,color:(n==null?void 0:n.textPrimary)||"#fff"},subtitle:{fontSize:"0.7rem",color:(n==null?void 0:n.textSecondary)||"#888"},closeBtn:{background:"transparent",border:"none",color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"1.2rem",cursor:"pointer",padding:4},content:{padding:20,flex:1,overflowY:"auto"},dropZone:{border:`2px dashed ${e?Me.purple:p?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"}`,borderRadius:12,padding:40,textAlign:"center",cursor:"pointer",transition:"all 0.2s",background:e?`${Me.purple}10`:"transparent"},dropIcon:{fontSize:"3rem",marginBottom:16,opacity:.7},dropText:{fontSize:"1rem",fontWeight:500,color:(n==null?void 0:n.textPrimary)||"#fff",marginBottom:8},dropSubtext:{fontSize:"0.8rem",color:(n==null?void 0:n.textSecondary)||"#888",marginBottom:16},browseBtn:{padding:"8px 20px",background:`${Me.purple}20`,border:`1px solid ${Me.purple}`,borderRadius:8,color:Me.purple,fontSize:"0.85rem",fontWeight:500,cursor:"pointer"},pasteHint:{fontSize:"0.7rem",color:(n==null?void 0:n.textMuted)||"#666",marginTop:16},imagePreview:{marginTop:20,padding:16,background:p?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",borderRadius:12},previewHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},previewInfo:{display:"flex",alignItems:"center",gap:8},previewName:{fontSize:"0.85rem",fontWeight:500,color:(n==null?void 0:n.textPrimary)||"#fff"},previewSize:{fontSize:"0.75rem",color:(n==null?void 0:n.textSecondary)||"#888"},clearBtn:{padding:"4px 10px",background:"transparent",border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"0.75rem",cursor:"pointer"},previewImage:{width:"100%",maxHeight:300,objectFit:"contain",borderRadius:8,background:p?"rgba(0,0,0,0.5)":"#fff"},analyzeBtn:{width:"100%",padding:"12px 20px",background:`linear-gradient(135deg, ${Me.purple}, ${Me.indigo})`,border:"none",borderRadius:8,color:"#fff",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",marginTop:16,display:"flex",alignItems:"center",justifyContent:"center",gap:8},analyzingBtn:{width:"100%",padding:"12px 20px",background:`${Me.purple}50`,border:"none",borderRadius:8,color:"#fff",fontSize:"0.9rem",fontWeight:600,cursor:"not-allowed",marginTop:16,display:"flex",alignItems:"center",justifyContent:"center",gap:8},error:{marginTop:16,padding:"12px 16px",background:`${Me.red}15`,border:`1px solid ${Me.red}40`,borderRadius:8,color:Me.red,fontSize:"0.85rem"},result:{marginTop:20,padding:16,background:p?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",borderRadius:12},resultHeader:{display:"flex",alignItems:"center",gap:8,marginBottom:12},resultIcon:{fontSize:"1rem"},resultTitle:{fontSize:"0.9rem",fontWeight:600,color:Me.green},dslPreview:{background:(n==null?void 0:n.inputBg)||(p?"rgba(0,0,0,0.4)":"#fff"),padding:12,borderRadius:8,maxHeight:200,overflow:"auto",fontFamily:"Monaco, monospace",fontSize:"0.75rem",color:(n==null?void 0:n.editorText)||Me.purple,whiteSpace:"pre-wrap",lineHeight:1.5},footer:{padding:"12px 20px",borderTop:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,display:"flex",justifyContent:"flex-end",gap:10},cancelBtn:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"0.8rem",cursor:"pointer"},applyBtn:{padding:"8px 20px",background:`linear-gradient(135deg, ${Me.green}, ${Me.blue})`,border:"none",borderRadius:6,color:"#fff",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},disabledBtn:{padding:"8px 20px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:6,color:"#666",fontSize:"0.8rem",cursor:"not-allowed"},notConfigured:{textAlign:"center",padding:40,color:(n==null?void 0:n.textSecondary)||"#888"}};return o.jsx("div",{style:T.overlay,onClick:t,children:o.jsxs("div",{style:T.modal,onClick:P=>P.stopPropagation(),children:[o.jsxs("div",{style:T.header,children:[o.jsxs("div",{style:T.headerTitle,children:[o.jsx("span",{style:T.headerIcon,children:"🖼️"}),o.jsxs("div",{children:[o.jsx("div",{style:T.title,children:"Import from Image"}),o.jsx("div",{style:T.subtitle,children:"AI-powered diagram extraction"})]})]}),o.jsx("button",{style:T.closeBtn,onClick:t,children:"✕"})]}),o.jsx("div",{style:T.content,children:Dt()?o.jsxs(o.Fragment,{children:[!i&&o.jsxs("div",{ref:l,style:T.dropZone,onDragOver:b,onDragLeave:C,onDrop:w,onClick:()=>{var P;return(P=y.current)==null?void 0:P.click()},children:[o.jsx("div",{style:T.dropIcon,children:"📸"}),o.jsx("div",{style:T.dropText,children:e?"Drop image here":"Drag & drop an image"}),o.jsx("div",{style:T.dropSubtext,children:"or click to browse files"}),o.jsx("button",{style:T.browseBtn,onClick:P=>{var W;P.stopPropagation(),(W=y.current)==null||W.click()},children:"Browse Files"}),o.jsx("div",{style:T.pasteHint,children:"💡 Tip: You can also paste an image from clipboard (Ctrl+V / Cmd+V)"}),o.jsx("input",{ref:y,type:"file",accept:Yh.join(","),onChange:k,style:{display:"none"}})]}),i&&o.jsxs("div",{style:T.imagePreview,children:[o.jsxs("div",{style:T.previewHeader,children:[o.jsxs("div",{style:T.previewInfo,children:[o.jsx("span",{style:T.previewName,children:i.name}),o.jsxs("span",{style:T.previewSize,children:["(",_(i.size),")"]})]}),o.jsx("button",{style:T.clearBtn,onClick:A,children:"Clear"})]}),o.jsx("img",{src:i.preview,alt:"Preview",style:T.previewImage}),!u&&o.jsx("button",{style:h?T.analyzingBtn:T.analyzeBtn,onClick:j,disabled:h,children:h?o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"⏳"})," Analyzing with AI..."]}):o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"✨"})," Extract Diagram with AI"]})})]}),m&&o.jsxs("div",{style:T.error,children:["❌ ",m]}),u&&o.jsxs("div",{style:T.result,children:[o.jsxs("div",{style:T.resultHeader,children:[o.jsx("span",{style:T.resultIcon,children:"✅"}),o.jsx("span",{style:T.resultTitle,children:"Diagram Extracted Successfully"})]}),o.jsxs("div",{style:{marginBottom:12,padding:"8px 12px",background:`${Me.purple}15`,borderRadius:8,border:`1px solid ${Me.purple}30`},children:[o.jsx("div",{style:{fontSize:"0.7rem",color:(n==null?void 0:n.textSecondary)||"#888",marginBottom:4},children:"DIAGRAM NAME"}),o.jsx("div",{style:{fontSize:"1rem",fontWeight:600,color:(n==null?void 0:n.textPrimary)||"#fff"},children:u.name})]}),o.jsxs("div",{style:{marginBottom:12},children:[o.jsx("div",{style:{fontSize:"0.7rem",color:(n==null?void 0:n.textSecondary)||"#888",marginBottom:8},children:"DIAGRAM TYPE"}),o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[o.jsxs("button",{onClick:()=>R(u.type),style:{padding:"6px 14px",background:S===u.type?`${Me.green}20`:"transparent",border:`2px solid ${S===u.type?Me.green:p?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)"}`,borderRadius:8,color:S===u.type?Me.green:(n==null?void 0:n.textPrimary)||"#fff",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:6},children:[S===u.type&&o.jsx("span",{children:"✓"}),u.type,o.jsx("span",{style:{fontSize:"0.65rem",opacity:.7},children:"(detected)"})]}),u.alternatives&&u.alternatives.length>0&&u.alternatives.map(P=>o.jsxs("button",{onClick:()=>R(P),style:{padding:"6px 14px",background:S===P?`${Me.blue}20`:"transparent",border:`2px solid ${S===P?Me.blue:p?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.15)"}`,borderRadius:8,color:S===P?Me.blue:(n==null?void 0:n.textSecondary)||"#888",fontSize:"0.85rem",fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:6},children:[S===P&&o.jsx("span",{children:"✓"}),P]},P))]}),u.alternatives&&u.alternatives.length>0&&o.jsx("div",{style:{fontSize:"0.7rem",color:(n==null?void 0:n.textMuted)||"#666",marginTop:6},children:"💡 Alternative types may render this data differently"})]}),o.jsx("div",{style:{fontSize:"0.7rem",color:(n==null?void 0:n.textSecondary)||"#888",marginBottom:6},children:"DSL PREVIEW"}),o.jsx("div",{style:T.dslPreview,children:u.dsl})]})]}):o.jsxs("div",{style:T.notConfigured,children:[o.jsx("div",{style:{fontSize:"3rem",marginBottom:16},children:"⚠️"}),o.jsx("div",{style:{fontSize:"1rem",fontWeight:500,marginBottom:8,color:n==null?void 0:n.textPrimary},children:"AI Not Configured"}),o.jsx("div",{style:{fontSize:"0.85rem"},children:"Please configure your AI provider in the .env file to use this feature."})]})}),o.jsxs("div",{style:T.footer,children:[o.jsx("button",{style:T.cancelBtn,onClick:t,children:"Cancel"}),u?o.jsx("button",{style:T.applyBtn,onClick:$,children:"Apply Diagram"}):o.jsx("button",{style:T.disabledBtn,disabled:!0,children:"Apply Diagram"})]})]})})}function vg(a){const t=a.toLowerCase();if(t.includes("@startmindmap")||t.includes("@startwbs"))return"mindmap";if(t.includes("@startgantt"))return"gantt";if(t.includes("@startjson")||t.includes("@startyaml"))return"unsupported";const r=a.replace(/@startuml.*|@enduml.*/gi,"").trim();return/\b(Person|System|Container|Component|System_Ext|Container_Ext|Boundary|Enterprise_Boundary|System_Boundary|Container_Boundary)\s*\(/i.test(r)||/\b(Rel|Rel_R|Rel_L|Rel_U|Rel_D)\s*\(/i.test(r)?"c4":/\b(node|device|artifact|file|folder|frame|rectangle|card)\s+"?[^"]*"?\s*(<<|as|\{|$)/im.test(r)&&/\b(node|device|artifact)\b/i.test(r)?"deployment":/\bactor\b/i.test(r)&&(/\busecase\b/i.test(r)||/\([^)]+\)/i.test(r))?"usecase":/\b(class|interface|abstract\s+class|enum)\s+\w+/i.test(r)?"class":/\[\*\]\s*(-->|->)/.test(r)||/(-->|->)\s*\[\*\]/.test(r)||/\bstate\s+\w+/i.test(r)&&!r.includes("component")?"state":(/\bparticipant\b/i.test(r)||/\bactor\b.*->/.test(r))&&/->>|-->>|->|-->/.test(r)&&/:/.test(r)?"sequence":/\bstart\b/i.test(r)&&/\bstop\b/i.test(r)||/:[^;]+;/.test(r)||/\bif\s*\(/.test(r)&&/\bthen\b/.test(r)?"flowchart":/\b(component|package|node|folder|frame|cloud|database)\b/i.test(r)?"architecture":/\bentity\b/i.test(r)?"erd":/\bobject\b/i.test(r)?"class":/->>|-->>|->|-->/.test(r)&&/:/.test(r)?"sequence":"flowchart"}function Uv(a){let t=vg(a),r;switch(t){case"sequence":r=Gv(a);break;case"class":r=Hv(a);break;case"state":r=Yv(a);break;case"flowchart":r=Vv(a);break;case"usecase":r=Kv(a);break;case"architecture":r=Xv(a);break;case"mindmap":r=Qv(a);break;case"gantt":r=Zv(a);break;case"erd":r=Jv(a);break;case"c4":r=ew(a),t="architecture";break;case"deployment":r=tw(a);break;default:throw new Error(`Unsupported PlantUML diagram type: ${t}`)}return{type:t,source:r}}function lt(a){return a.replace(/@startuml.*\n?/gi,"").replace(/@enduml.*\n?/gi,"").replace(/@startmindmap.*\n?/gi,"").replace(/@endmindmap.*\n?/gi,"").replace(/@startwbs.*\n?/gi,"").replace(/@endwbs.*\n?/gi,"").replace(/@startgantt.*\n?/gi,"").replace(/@endgantt.*\n?/gi,"").replace(/^\s*title\s+.+$/gim,"").replace(/^\s*skinparam\s+.+$/gim,"").replace(/^\s*hide\s+.+$/gim,"").replace(/^\s*'.*$/gim,"").trim()}function Gv(a){const r=lt(a).split(`
`).filter(e=>e.trim()),n=[],i=[];r.forEach(e=>{const c=e.trim(),h=c.match(/^(participant|actor)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);if(h){const f=h[4]||h[2];i.includes(f)||i.push(f);return}const d=c.match(/^(\w+)\s*(->>|-->>|->|-->)\s*(\w+)\s*:\s*(.+)$/);if(d){const[,f,m,g,y]=d;i.includes(f)||i.push(f),i.includes(g)||i.push(g);const l=m.replace(">>",">");n.push(`${f} ${l} ${g}: ${y}`);return}c.match(/^note\s+(left|right|over)\s*:?\s*(.+)$/i)});const s=[];return i.length>0&&(s.push(`participant ${i.join(", ")}`),s.push("")),s.push(...n),s.join(`
`)}function Hv(a){const r=lt(a).split(`
`),n=[];let i=null,s=!1,e=0;return r.forEach(c=>{const h=c.trim(),d=h.match(/^(class|interface|abstract\s+class|enum)\s+(\w+)(\s*\{)?/i);if(d){i&&n.push(""),i=d[2],n.push(`class ${i}`),h.includes("{")&&(s=!0,e=1);return}const u=h.match(/^object\s+"?([^"]+)"?/i);if(u){i&&n.push(""),i=u[1].replace(/\s+/g,"_"),n.push(`class ${i}`),h.includes("{")&&(s=!0,e=1);return}if(h==="{"&&i){s=!0,e=1;return}if(h==="}"&&s){e--,e<=0&&(s=!1,i=null);return}if(s&&i&&h&&h!=="{"&&h!=="}"){const f=h.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*:?\s*(\w+)?/);if(f){const[,y="+",l,p,x]=f,b=x?`: ${x}`:"";n.push(`  ${y} ${l}(${p})${b}`);return}const m=h.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)/);if(m){const[,y="+",l,p]=m;n.push(`  ${y} ${l}: ${p}`);return}const g=h.match(/^([+\-#~])?\s*(\w+)$/);if(g){const[,y="+",l]=g;n.push(`  ${y} ${l}`);return}}if(!s){const f=h.match(/^(\w+)\s*(<\|--|--\|>)\s*(\w+)/);if(f){const[,g,y,l]=f;y==="<|--"?n.push(`${l} extends ${g}`):n.push(`${g} extends ${l}`);return}if(h.match(/^(\w+)\s*(--|-->|<--)\s*(\w+)/))return}}),n.join(`
`)}function Yv(a){const r=lt(a).split(`
`).filter(s=>s.trim()),n=[],i=new Set;return r.forEach(s=>{const e=s.trim(),c=e.match(/^state\s+"([^"]+)"\s+as\s+(\w+)/i);if(c){const[,,u]=c;i.add(u);return}const h=e.match(/^state\s+(\w+)$/i);if(h){i.add(h[1]);return}const d=e.match(/^(\[\*\]|\w+)\s*(-->|->)\s*(\[\*\]|\w+)(\s*:\s*(.+))?$/);if(d){let[,u,,f,,m]=d,g=u,y=f;if(u==="[*]"&&!i.has("__initial__")&&(n.unshift(`(initial) ${f}`),i.add("__initial__"),g=f,!m))return;if(f==="[*]"&&(i.has("__final__")||(n.push("(final) End"),i.add("__final__")),y="End"),u!=="[*]"){const l=m?`: ${m.trim()}`:"";n.push(`${g} -> ${y}${l}`)}return}}),n.join(`
`)}function Vv(a){const r=lt(a).split(`
`).filter(u=>u.trim()),n=[],i=[];let s=0,e=null;const c=[],h=(u,f)=>{const m=`node${s++}`;return n.push({id:m,type:u,label:f}),m};r.forEach(u=>{const f=u.trim();if(/^start$/i.test(f)){e=h("start","Start");return}if(/^(stop|end)$/i.test(f)){const l=h("end","End");e&&i.push({from:e,to:l}),e=l;return}const m=f.match(/^:([^;]+);?$/);if(m){const l=m[1].trim(),p=h("process",l);e&&i.push({from:e,to:p}),e=p;return}const g=f.match(/^if\s*\(([^)]+)\)\s*then\s*\(([^)]+)\)/i);if(g){const l=g[1].trim(),p=g[2].trim(),x=h("decision",l);e&&i.push({from:e,to:x}),c.push({type:"if",decisionId:x,yesLabel:p,noLabel:null,mergePoint:null}),e=x;return}const y=f.match(/^else\s*\(([^)]+)\)/i);if(y&&c.length>0){const l=c[c.length-1];l.noLabel=y[1].trim(),l.lastYesNode=e,e=l.decisionId;return}if(/^endif$/i.test(f)&&c.length>0){const l=c.pop();l.lastNoNode=e;return}});const d=[];return n.forEach(u=>{d.push(`(${u.type}) ${u.label}`)}),d.push(""),i.forEach(u=>{const f=n.find(g=>g.id===u.from),m=n.find(g=>g.id===u.to);if(f&&m){const g=u.label?`: ${u.label}`:"";d.push(`${f.label} -> ${m.label}${g}`)}}),d.join(`
`)}function Kv(a){const r=lt(a).split(`
`).filter(c=>c.trim()),n=[],i=[],s=[],e=[];return r.forEach(c=>{const h=c.trim(),d=h.match(/^actor\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);if(d){const g=d[3]||d[1];i.includes(g)||(i.push(g),n.push(`actor ${g}`));return}const u=h.match(/^usecase\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);if(u){const g=u[3]||u[1];s.includes(g)||(s.push(g),n.push(`(${g})`));return}const f=h.match(/^\(([^)]+)\)$/);if(f){const g=f[1];s.includes(g)||(s.push(g),n.push(`(${g})`));return}const m=h.match(/^(\w+)\s*(-->|->|--)\s*\(?([^)]+)\)?$/);if(m){const[,g,,y]=m,l=y.replace(/[()]/g,"");e.push(`${g} -> ${l}`);return}}),n.push(""),n.push(...e),n.join(`
`)}function Xv(a){const r=lt(a).split(`
`).filter(e=>e.trim()),n={clients:[],gateway:[],services:[],data:[],storage:[],other:[]},i=[];r.forEach(e=>{const c=e.trim(),h=c.match(/^(component|node|package|folder|frame|cloud|database|storage|queue)\s+"?([^"]+)"?(\s+as\s+(\w+))?/i);if(h){const[,f,m,,g]=h,y=g||m,l=f.toLowerCase();l==="database"||l==="storage"?n.data.push(y):l==="cloud"?n.clients.push(y):n.services.push(y);return}const d=c.match(/^\[([^\]]+)\]$/);if(d){n.services.push(d[1]);return}const u=c.match(/^(\[?[^\]]+\]?)\s*(-->|->|--)\s*(\[?[^\]]+\]?)(\s*:\s*(.+))?$/);if(u){let[,f,,m]=u;f=f.replace(/[\[\]]/g,"").trim(),m=m.replace(/[\[\]]/g,"").trim(),i.push(`${f} -> ${m}`);return}});const s=[];return n.clients.length>0&&s.push(`[clients] ${n.clients.join(", ")}`),n.gateway.length>0&&s.push(`[gateway] ${n.gateway.join(", ")}`),n.services.length>0&&s.push(`[services] ${n.services.join(", ")}`),n.data.length>0&&s.push(`[data] ${n.data.join(", ")}`),n.storage.length>0&&s.push(`[storage] ${n.storage.join(", ")}`),n.other.length>0&&s.push(`[services] ${n.other.join(", ")}`),i.length>0&&(s.push(""),s.push(...i)),s.join(`
`)}function Qv(a){const r=lt(a).split(`
`).filter(i=>i.trim()),n=[];return r.forEach(i=>{const s=i.match(/^(\*+)\s*(.+)$/);if(s){const e=s[1].length-1,c=s[2].trim(),h="  ".repeat(e);n.push(`${h}${c}`)}}),n.join(`
`)}function Zv(a){const r=lt(a).split(`
`).filter(s=>s.trim()),n=[];let i=0;return r.forEach(s=>{const e=s.trim(),c=e.match(/^\[([^\]]+)\]\s+lasts\s+(\d+)\s+days?/i);if(c){const[,u,f]=c;n.push(`${u}, ${i}, ${f}`),i+=parseInt(f);return}const h=e.match(/^\[([^\]]+)\]\s+starts\s+at\s+day\s+(\d+)/i);if(h){i=parseInt(h[2]);return}e.match(/^project\s+starts\s+/i)}),n.join(`
`)}function Jv(a){const r=lt(a).split(`
`),n=[];let i=null,s=!1;return r.forEach(e=>{const c=e.trim(),h=c.match(/^entity\s+"?([^"{\s]+)"?\s*(\{)?/i);if(h){i&&(n.push(");"),n.push("")),i=h[1],n.push(`CREATE TABLE ${i} (`),s=c.includes("{");return}if(c==="{"&&i){s=!0;return}if(c==="}"&&s){n.push(");"),s=!1,i=null;return}if(s&&i&&c&&!c.startsWith("--")){const d=c.match(/^(\*?)?\s*(\w+)\s*:\s*(.+)$/);if(d){const[,u,f,m]=d,g=u==="*"?" PRIMARY KEY":"",y=m.trim().toUpperCase();n.push(`  ${f} ${y}${g},`)}}}),s&&n.push(");"),n.join(`
`).replace(/,\n\);/g,`
);`)}function ew(a){const r=lt(a).split(`
`).filter(u=>u.trim()),n=new Map,i=[],s=[],e=new Map;r.forEach(u=>{const f=u.trim();if(f.startsWith("!include")||f.startsWith("'"))return;const m=f.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(\s*(\w+)\s*,\s*["']([^"']+)["']/i);if(m){const b=s.length>0?s[s.length-1]:null;e.set(m[2],{label:m[3],type:m[1],parent:b}),s.push(m[2]);return}if(f==="}"&&s.length>0){s.pop();return}const g=f.match(/^Person(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);if(g){const b=s.length>0?s[s.length-1]:null;n.set(g[1],{type:"user",label:g[2],description:g[3]||"",boundary:b});return}const y=f.match(/^System(?:_Ext)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);if(y){const b=s.length>0?s[s.length-1]:null;n.set(y[1],{type:f.includes("_Ext")?"external":"services",label:y[2],description:y[3]||"",boundary:b});return}const l=f.match(/^Container(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);if(l){const b=s.length>0?s[s.length-1]:null;let C="services";/ContainerDb/i.test(f)?C="data":/ContainerQueue/i.test(f)?C="queue":/_Ext/i.test(f)&&(C="external"),n.set(l[1],{type:C,label:l[2],technology:l[3]||"",description:l[4]||"",boundary:b});return}const p=f.match(/^Component(?:_Ext|Db|Queue)?\s*\(\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?(?:\s*,\s*["']([^"']+)["'])?\)/i);if(p){const b=s.length>0?s[s.length-1]:null;let C="services";/ComponentDb/i.test(f)&&(C="data"),/_Ext/i.test(f)&&(C="external"),n.set(p[1],{type:C,label:p[2],technology:p[3]||"",description:p[4]||"",boundary:b});return}const x=f.match(/^(?:Bi)?Rel(?:_[RLUD])?\s*\(\s*(\w+)\s*,\s*(\w+)\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\)/i);x&&i.push({from:x[1],to:x[2],label:x[3],tech:x[4]||""})});const c=[],h={user:[],clients:[],services:[],data:[],external:[],queue:[]};n.forEach((u,f)=>{const m=u.type||"services";h[m]||(h[m]=[]),h[m].push(u.label)}),Object.entries(h).forEach(([u,f])=>{f.length>0&&c.push(`[${u}] ${f.join(", ")}`)});const d=(u,f="")=>{const m=e.get(u);m&&(c.push(`${f}group "${m.label}" {`),n.forEach((g,y)=>{g.boundary===u&&c.push(`${f}  ${g.label}`)}),e.forEach((g,y)=>{g.parent===u&&d(y,f+"  ")}),c.push(`${f}}`))};return e.forEach((u,f)=>{u.parent||d(f)}),c.push(""),i.forEach(u=>{const f=n.get(u.from),m=n.get(u.to);f&&m&&c.push(`${f.label} -> ${m.label}`)}),c.join(`
`)}function tw(a){const r=lt(a).split(`
`).filter(h=>h.trim()),n=[],i=new Map,s=[];let e=null,c=!1;return r.forEach(h=>{const d=h.trim(),u=d.match(/^(node|device|artifact|file|folder|frame|rectangle|card)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?(?:\s*\{)?/i);if(u){const m=u[1].toLowerCase(),g=u[2].trim(),y=u[3]||g.replace(/\s+/g,"_");i.set(y,{type:m,label:g,children:[]}),e=y,d.includes("{")&&(c=!0);return}if(c&&e){const m=d.match(/^(node|device|artifact|component|database)\s+"?([^"{]+)"?(?:\s+as\s+(\w+))?/i);if(m){const g=m[3]||m[2].replace(/\s+/g,"_");i.set(g,{type:m[1].toLowerCase(),label:m[2].trim(),parent:e});const y=i.get(e);y&&y.children.push(g);return}}if(d==="}"){c=!1,e=null;return}const f=d.match(/^(\w+)\s*(-->|->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);f&&s.push({from:f[1],to:f[3],label:f[4]||""})}),i.forEach((h,d)=>{if(!h.parent){let u=`(${h.type}) ${h.label}`;n.push(u),h.children.length>0&&h.children.forEach(f=>{const m=i.get(f);m&&n.push(`  (${m.type}) ${m.label}`)})}}),n.push(""),s.forEach(h=>{const d=i.get(h.from),u=i.get(h.to);if(d&&u){const f=h.label?`: ${h.label}`:"";n.push(`${d.label} -> ${u.label}${f}`)}}),n.join(`
`)}function rw(a,t){switch(a){case"sequence":return nw(t);case"class":return aw(t);case"state":return ow(t);case"flowchart":return iw(t);case"usecase":return sw(t);case"architecture":case"component":return cw(t);case"mindmap":case"wbs":return wg(t);case"gantt":return lw(t);case"erd":return dw(t);case"orgchart":return uw(t);default:throw new Error(`Export to PlantUML not supported for diagram type: ${a}`)}}function nw(a){const t=a.split(`
`).filter(n=>n.trim()),r=["@startuml"];return t.forEach(n=>{const i=n.trim();if(i.startsWith("participant ")){r.push(i);return}if(i.match(/^(\w+)\s*(->|-->)\s*(\w+)\s*:\s*(.+)$/)){r.push(i);return}}),r.push("@enduml"),r.join(`
`)}function aw(a){const t=a.split(`
`),r=["@startuml"];let n=null;return t.forEach(i=>{const s=i.trim();if(s.startsWith("class ")){n&&(r.push("}"),r.push("")),n=s.replace("class ",""),r.push(`class ${n} {`);return}if(s.match(/^([+\-#~])\s*(.+)$/)&&n){r.push(`  ${s}`);return}const c=s.match(/^(\w+)\s+extends\s+(\w+)$/);if(c){n&&(r.push("}"),n=null),r.push(`${c[2]} <|-- ${c[1]}`);return}}),n&&r.push("}"),r.push("@enduml"),r.join(`
`)}function ow(a){const t=a.split(`
`).filter(i=>i.trim()),r=["@startuml"];let n=!1;return t.forEach(i=>{const s=i.trim(),e=s.match(/^\(initial\)\s+(\w+)$/);if(e){n||(r.push(`[*] --> ${e[1]}`),n=!0);return}if(s.match(/^\(final\)\s+(\w+)$/))return;const h=s.match(/^(\w+)\s*->\s*(\w+)(\s*:\s*(.+))?$/);if(h){const[,d,u,,f]=h,m=f?` : ${f}`:"";u.toLowerCase()==="end"||u.toLowerCase()==="final"?r.push(`${d} --> [*]${m}`):r.push(`${d} --> ${u}${m}`);return}}),r.push("@enduml"),r.join(`
`)}function iw(a){const t=a.split(`
`).filter(e=>e.trim()),r=["@startuml"],n=new Map,i=[];t.forEach(e=>{var u;const c=e.trim(),h=c.match(/^\((\w+)\)\s+(.+)$/);h&&n.set(h[2],h[1]);const d=c.match(/^(.+?)\s*->\s*(.+?)(\s*:\s*(.+))?$/);d&&!c.startsWith("(")&&i.push({from:d[1].trim(),to:d[2].trim(),label:(u=d[4])==null?void 0:u.trim()})});const s=new Set;return i.forEach(e=>{const c=n.get(e.from)||"process",h=n.get(e.to)||"process";c==="start"&&!s.has("__start__")&&(r.push("start"),s.add("__start__")),c!=="start"&&c!=="end"&&!s.has(e.from)&&(c==="decision"?r.push(`if (${e.from}?) then (${e.label||"yes"})`):r.push(`:${e.from};`),s.add(e.from)),h==="end"&&!s.has("__end__")?(r.push("stop"),s.add("__end__")):h!=="start"&&!s.has(e.to)&&(h==="decision"?r.push(`if (${e.to}?) then (yes)`):h!=="end"&&r.push(`:${e.to};`),s.add(e.to))}),!s.has("__end__")&&n.has("End")&&r.push("stop"),r.push("@enduml"),r.join(`
`)}function sw(a){const t=a.split(`
`).filter(n=>n.trim()),r=["@startuml"];return t.forEach(n=>{const i=n.trim();if(i.startsWith("actor ")){r.push(i);return}const s=i.match(/^\(([^)]+)\)$/);if(s){r.push(`usecase "${s[1]}"`);return}const e=i.match(/^(\w+)\s*->\s*(\w+)$/);if(e){r.push(`${e[1]} --> (${e[2]})`);return}}),r.push("@enduml"),r.join(`
`)}function cw(a){const t=a.split(`
`).filter(n=>n.trim()),r=["@startuml"];return t.forEach(n=>{const i=n.trim(),s=i.match(/^\[(\w+)\]\s+(.+)$/);if(s){const[,c,h]=s,d=h.split(",").map(u=>u.trim());r.push(`package "${c}" {`),d.forEach(u=>{c==="data"||c==="databases"?r.push(`  database "${u}"`):c==="clients"?r.push(`  node "${u}"`):r.push(`  component "${u}"`)}),r.push("}"),r.push("");return}const e=i.match(/^(.+?)\s*->\s*(.+)$/);if(e&&!i.startsWith("[")){r.push(`[${e[1].trim()}] --> [${e[2].trim()}]`);return}}),r.push("@enduml"),r.join(`
`)}function wg(a){const t=a.split(`
`),r=["@startmindmap"];return t.forEach(n=>{if(!n.trim())return;const i=n.match(/^(\s*)/)[1].length,s=Math.floor(i/2)+1,e=n.trim();e&&r.push("*".repeat(s)+" "+e)}),r.push("@endmindmap"),r.join(`
`)}function lw(a){const t=a.split(`
`).filter(n=>n.trim()),r=["@startgantt"];return t.forEach(n=>{const s=n.trim().match(/^([^,]+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?$/);if(s){const[,e,c,h]=s;r.push(`[${e.trim()}] lasts ${h} days`),parseInt(c)>0&&r.push(`[${e.trim()}] starts at day ${c}`);return}}),r.push("@endgantt"),r.join(`
`)}function dw(a){const t=a.split(`
`),r=["@startuml"];let n=null;return t.forEach(i=>{const s=i.trim(),e=s.match(/^CREATE\s+TABLE\s+(\w+)/i);if(e){n&&(r.push("}"),r.push("")),n=e[1],r.push(`entity "${n}" {`);return}const c=s.match(/^(\w+)\s+(\w+)(.*)$/);if(c&&n&&!s.startsWith("CREATE")&&!s.startsWith(")")){const[,h,d,u]=c,m=/PRIMARY\s+KEY/i.test(u)?"*":"";r.push(`  ${m}${h} : ${d}`);return}if(s===");"&&n){r.push("}"),n=null;return}}),n&&r.push("}"),r.push("@enduml"),r.join(`
`)}function uw(a){return wg(a)}function pw(a,t="diagram"){const r=new Blob([a],{type:"text/plain"}),n=URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download=`${t}.puml`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}async function hw(a){try{return await navigator.clipboard.writeText(a),!0}catch(t){return console.error("Failed to copy to clipboard:",t),!1}}const De={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",red:"#EF4444",indigo:"#6366F1"};function fw({isOpen:a,onClose:t,onImport:r,theme:n}){const[i,s]=M.useState(""),[e,c]=M.useState(null),[h,d]=M.useState(""),[u,f]=M.useState(null),m=M.useRef(null),g=(n==null?void 0:n.name)==="dark";M.useEffect(()=>{a||(s(""),c(null),d(""),f(null))},[a]),M.useEffect(()=>{if(i.trim())try{const b=vg(i);f(b)}catch{f(null)}else f(null)},[i]);const y=b=>{var k;const C=(k=b.target.files)==null?void 0:k[0];if(!C)return;const w=new FileReader;w.onload=S=>{s(S.target.result),c(null),d("")},w.onerror=()=>{d("Failed to read file")},w.readAsText(C)},l=()=>{if(d(""),c(null),!i.trim()){d("Please enter PlantUML source code");return}try{const b=Uv(i);c(b)}catch(b){d(b.message||"Failed to convert PlantUML")}},p=()=>{e&&r(e.type,e.source)};if(!a)return null;const x={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:20},modal:{background:(n==null?void 0:n.modalBg)||(g?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),borderRadius:16,border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,width:"100%",maxWidth:700,maxHeight:"90vh",overflow:"hidden",boxShadow:"0 25px 50px rgba(0,0,0,0.4)",display:"flex",flexDirection:"column"},header:{padding:"16px 20px",borderBottom:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:`${De.green}15`},headerTitle:{display:"flex",alignItems:"center",gap:10},headerIcon:{fontSize:"1.2rem"},title:{fontWeight:600,color:(n==null?void 0:n.textPrimary)||"#fff"},subtitle:{fontSize:"0.7rem",color:(n==null?void 0:n.textSecondary)||"#888"},closeBtn:{background:"transparent",border:"none",color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"1.2rem",cursor:"pointer",padding:4},content:{padding:20,flex:1,overflowY:"auto"},inputSection:{marginBottom:16},label:{display:"block",fontSize:"0.8rem",fontWeight:500,color:(n==null?void 0:n.textSecondary)||"#888",marginBottom:8},textarea:{width:"100%",height:200,padding:12,background:(n==null?void 0:n.inputBg)||(g?"rgba(0,0,0,0.3)":"#fff"),border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,borderRadius:8,color:(n==null?void 0:n.textPrimary)||"#fff",fontFamily:"Monaco, Consolas, monospace",fontSize:"0.85rem",resize:"vertical",outline:"none"},fileRow:{display:"flex",alignItems:"center",gap:12,marginTop:12},uploadBtn:{padding:"8px 16px",background:`${De.blue}20`,border:`1px solid ${De.blue}`,borderRadius:6,color:De.blue,fontSize:"0.8rem",fontWeight:500,cursor:"pointer"},fileHint:{fontSize:"0.75rem",color:(n==null?void 0:n.textMuted)||"#666"},typeIndicator:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 10px",background:`${De.purple}20`,borderRadius:6,fontSize:"0.75rem",color:De.purple,marginTop:8},previewBtn:{width:"100%",padding:"12px 20px",background:`linear-gradient(135deg, ${De.purple}, ${De.indigo})`,border:"none",borderRadius:8,color:"#fff",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",marginTop:16},previewBtnDisabled:{width:"100%",padding:"12px 20px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:8,color:"#666",fontSize:"0.9rem",fontWeight:600,cursor:"not-allowed",marginTop:16},error:{marginTop:16,padding:"12px 16px",background:`${De.red}15`,border:`1px solid ${De.red}40`,borderRadius:8,color:De.red,fontSize:"0.85rem"},previewSection:{marginTop:20,padding:16,background:g?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",borderRadius:12},previewHeader:{display:"flex",alignItems:"center",gap:8,marginBottom:12},previewIcon:{fontSize:"1rem"},previewTitle:{fontSize:"0.9rem",fontWeight:600,color:De.green},previewType:{display:"inline-block",padding:"4px 10px",background:`${De.green}20`,borderRadius:6,color:De.green,fontSize:"0.8rem",fontWeight:500,marginBottom:12},dslPreview:{background:(n==null?void 0:n.inputBg)||(g?"rgba(0,0,0,0.4)":"#fff"),padding:12,borderRadius:8,maxHeight:200,overflow:"auto",fontFamily:"Monaco, Consolas, monospace",fontSize:"0.75rem",color:(n==null?void 0:n.editorText)||De.purple,whiteSpace:"pre-wrap",lineHeight:1.5},footer:{padding:"12px 20px",borderTop:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,display:"flex",justifyContent:"flex-end",gap:10},cancelBtn:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",border:`1px solid ${(n==null?void 0:n.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(n==null?void 0:n.textSecondary)||"#888",fontSize:"0.8rem",cursor:"pointer"},importBtn:{padding:"8px 20px",background:`linear-gradient(135deg, ${De.green}, ${De.blue})`,border:"none",borderRadius:6,color:"#fff",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},importBtnDisabled:{padding:"8px 20px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:6,color:"#666",fontSize:"0.8rem",cursor:"not-allowed"},exampleHint:{marginTop:12,padding:12,background:`${De.blue}10`,borderRadius:8,fontSize:"0.75rem",color:(n==null?void 0:n.textSecondary)||"#888"},exampleCode:{fontFamily:"Monaco, Consolas, monospace",fontSize:"0.7rem",color:De.blue,marginTop:8,whiteSpace:"pre"}};return o.jsx("div",{style:x.overlay,onClick:t,children:o.jsxs("div",{style:x.modal,onClick:b=>b.stopPropagation(),children:[o.jsxs("div",{style:x.header,children:[o.jsxs("div",{style:x.headerTitle,children:[o.jsx("span",{style:x.headerIcon,children:"🌱"}),o.jsxs("div",{children:[o.jsx("div",{style:x.title,children:"Import from PlantUML"}),o.jsx("div",{style:x.subtitle,children:"Convert PlantUML diagrams to DDFlow"})]})]}),o.jsx("button",{style:x.closeBtn,onClick:t,children:"✕"})]}),o.jsxs("div",{style:x.content,children:[o.jsxs("div",{style:x.inputSection,children:[o.jsx("label",{style:x.label,children:"PLANTUML SOURCE"}),o.jsx("textarea",{style:x.textarea,value:i,onChange:b=>{s(b.target.value),c(null),d("")},placeholder:`@startuml
participant Client
participant Server
Client -> Server: Request
Server --> Client: Response
@enduml`,spellCheck:!1}),o.jsxs("div",{style:x.fileRow,children:[o.jsx("button",{style:x.uploadBtn,onClick:()=>{var b;return(b=m.current)==null?void 0:b.click()},children:"Upload .puml File"}),o.jsx("span",{style:x.fileHint,children:"Supports .puml, .plantuml, .txt files"}),o.jsx("input",{ref:m,type:"file",accept:".puml,.plantuml,.txt",onChange:y,style:{display:"none"}})]}),u&&o.jsxs("div",{style:x.typeIndicator,children:[o.jsx("span",{children:"Detected type:"}),o.jsx("strong",{children:u})]})]}),!i&&o.jsxs("div",{style:x.exampleHint,children:[o.jsx("strong",{children:"Supported diagram types:"})," Sequence, Class, State, Activity (Flowchart), Use Case, Component (Architecture), Mind Map, Gantt, ERD",o.jsx("div",{style:x.exampleCode,children:`@startuml
class User {
  +id: string
  +login(): boolean
}
@enduml`})]}),o.jsx("button",{style:i.trim()?x.previewBtn:x.previewBtnDisabled,onClick:l,disabled:!i.trim(),children:"Preview Conversion"}),h&&o.jsxs("div",{style:x.error,children:["❌ ",h]}),e&&o.jsxs("div",{style:x.previewSection,children:[o.jsxs("div",{style:x.previewHeader,children:[o.jsx("span",{style:x.previewIcon,children:"✅"}),o.jsx("span",{style:x.previewTitle,children:"Conversion Successful"})]}),o.jsx("div",{style:x.previewType,children:e.type}),o.jsx("div",{style:x.dslPreview,children:e.source})]})]}),o.jsxs("div",{style:x.footer,children:[o.jsx("button",{style:x.cancelBtn,onClick:t,children:"Cancel"}),o.jsx("button",{style:e?x.importBtn:x.importBtnDisabled,onClick:p,disabled:!e,children:"Import Diagram"})]})]})})}const Ne={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",red:"#EF4444",indigo:"#6366F1"},Vh=["sequence","class","state","flowchart","usecase","architecture","component","mindmap","wbs","gantt","erd","orgchart"];function gw({isOpen:a,onClose:t,diagramType:r,diagramSource:n,theme:i}){const[s,e]=M.useState(""),[c,h]=M.useState(""),[d,u]=M.useState(!1),f=(i==null?void 0:i.name)==="dark";M.useEffect(()=>{if(a&&r&&n){if(h(""),u(!1),!Vh.includes(r)){h(`Export to PlantUML is not supported for "${r}" diagrams.

Supported types: ${Vh.join(", ")}`),e("");return}try{const l=rw(r,n);e(l)}catch(l){h(l.message||"Failed to convert to PlantUML"),e("")}}},[a,r,n]),M.useEffect(()=>{a||(e(""),h(""),u(!1))},[a]);const m=async()=>{await hw(s)&&(u(!0),setTimeout(()=>u(!1),2e3))},g=()=>{const l=`diagram-${r}`;pw(s,l)};if(!a)return null;const y={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:20},modal:{background:(i==null?void 0:i.modalBg)||(f?"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))"),borderRadius:16,border:`1px solid ${(i==null?void 0:i.border)||"rgba(255,255,255,0.1)"}`,width:"100%",maxWidth:700,maxHeight:"90vh",overflow:"hidden",boxShadow:"0 25px 50px rgba(0,0,0,0.4)",display:"flex",flexDirection:"column"},header:{padding:"16px 20px",borderBottom:`1px solid ${(i==null?void 0:i.border)||"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:`${Ne.green}15`},headerTitle:{display:"flex",alignItems:"center",gap:10},headerIcon:{fontSize:"1.2rem"},title:{fontWeight:600,color:(i==null?void 0:i.textPrimary)||"#fff"},subtitle:{fontSize:"0.7rem",color:(i==null?void 0:i.textSecondary)||"#888"},closeBtn:{background:"transparent",border:"none",color:(i==null?void 0:i.textSecondary)||"#888",fontSize:"1.2rem",cursor:"pointer",padding:4},content:{padding:20,flex:1,overflowY:"auto"},typeInfo:{display:"flex",alignItems:"center",gap:12,marginBottom:16},typeBadge:{display:"inline-block",padding:"6px 14px",background:`${Ne.purple}20`,borderRadius:8,color:Ne.purple,fontSize:"0.85rem",fontWeight:600},conversionArrow:{fontSize:"1.2rem",color:(i==null?void 0:i.textMuted)||"#666"},outputBadge:{display:"inline-block",padding:"6px 14px",background:`${Ne.green}20`,borderRadius:8,color:Ne.green,fontSize:"0.85rem",fontWeight:600},label:{display:"block",fontSize:"0.8rem",fontWeight:500,color:(i==null?void 0:i.textSecondary)||"#888",marginBottom:8},textarea:{width:"100%",height:300,padding:12,background:(i==null?void 0:i.inputBg)||(f?"rgba(0,0,0,0.3)":"#fff"),border:`1px solid ${(i==null?void 0:i.border)||"rgba(255,255,255,0.1)"}`,borderRadius:8,color:(i==null?void 0:i.textPrimary)||"#fff",fontFamily:"Monaco, Consolas, monospace",fontSize:"0.85rem",resize:"vertical",outline:"none"},actions:{display:"flex",gap:10,marginTop:16},copyBtn:{flex:1,padding:"12px 20px",background:d?`${Ne.green}20`:`${Ne.blue}20`,border:`1px solid ${d?Ne.green:Ne.blue}`,borderRadius:8,color:d?Ne.green:Ne.blue,fontSize:"0.85rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8},downloadBtn:{flex:1,padding:"12px 20px",background:`linear-gradient(135deg, ${Ne.purple}, ${Ne.indigo})`,border:"none",borderRadius:8,color:"#fff",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8},error:{padding:"20px",background:`${Ne.red}10`,border:`1px solid ${Ne.red}30`,borderRadius:12,textAlign:"center"},errorIcon:{fontSize:"2rem",marginBottom:12},errorText:{color:Ne.red,fontSize:"0.9rem",whiteSpace:"pre-wrap"},footer:{padding:"12px 20px",borderTop:`1px solid ${(i==null?void 0:i.border)||"rgba(255,255,255,0.1)"}`,display:"flex",justifyContent:"flex-end"},closeFooterBtn:{padding:"8px 20px",background:"rgba(255,255,255,0.1)",border:`1px solid ${(i==null?void 0:i.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(i==null?void 0:i.textSecondary)||"#888",fontSize:"0.8rem",cursor:"pointer"},hint:{marginTop:12,padding:12,background:`${Ne.blue}10`,borderRadius:8,fontSize:"0.75rem",color:(i==null?void 0:i.textSecondary)||"#888"}};return o.jsx("div",{style:y.overlay,onClick:t,children:o.jsxs("div",{style:y.modal,onClick:l=>l.stopPropagation(),children:[o.jsxs("div",{style:y.header,children:[o.jsxs("div",{style:y.headerTitle,children:[o.jsx("span",{style:y.headerIcon,children:"🌱"}),o.jsxs("div",{children:[o.jsx("div",{style:y.title,children:"Export to PlantUML"}),o.jsx("div",{style:y.subtitle,children:"Convert DDFlow diagram to PlantUML format"})]})]}),o.jsx("button",{style:y.closeBtn,onClick:t,children:"✕"})]}),o.jsxs("div",{style:y.content,children:[o.jsxs("div",{style:y.typeInfo,children:[o.jsx("span",{style:y.typeBadge,children:r}),o.jsx("span",{style:y.conversionArrow,children:"→"}),o.jsx("span",{style:y.outputBadge,children:"PlantUML"})]}),c?o.jsxs("div",{style:y.error,children:[o.jsx("div",{style:y.errorIcon,children:"⚠️"}),o.jsx("div",{style:y.errorText,children:c})]}):o.jsxs(o.Fragment,{children:[o.jsx("label",{style:y.label,children:"PLANTUML OUTPUT"}),o.jsx("textarea",{style:y.textarea,value:s,readOnly:!0,spellCheck:!1}),o.jsxs("div",{style:y.actions,children:[o.jsx("button",{style:y.copyBtn,onClick:m,children:d?"✓ Copied!":"📋 Copy to Clipboard"}),o.jsx("button",{style:y.downloadBtn,onClick:g,children:"⬇️ Download .puml"})]}),o.jsxs("div",{style:y.hint,children:[o.jsx("strong",{children:"Tip:"})," You can use this PlantUML code with online renderers like"," ",o.jsx("a",{href:"https://www.plantuml.com/plantuml/uml/",target:"_blank",rel:"noopener noreferrer",style:{color:Ne.blue},children:"plantuml.com"})," ","or in VS Code with the PlantUML extension."]})]})]}),o.jsx("div",{style:y.footer,children:o.jsx("button",{style:y.closeFooterBtn,onClick:t,children:"Close"})})]})})}const D={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",orange:"#F59E0B",red:"#EF4444",pink:"#EC4899",teal:"#14B8A6"},Kh={process:{label:"Process",shapes:[{id:"flowchart",label:"Flowchart",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"4",y:"8",width:"16",height:"10",rx:"2",fill:`${D.orange}40`,stroke:D.orange,strokeWidth:"1.5"}),o.jsx("rect",{x:"24",y:"8",width:"16",height:"10",rx:"2",fill:`${D.red}40`,stroke:D.red,strokeWidth:"1.5"}),o.jsx("rect",{x:"44",y:"8",width:"16",height:"10",rx:"2",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1.5"}),o.jsx("rect",{x:"14",y:"28",width:"16",height:"10",rx:"2",fill:`${D.pink}40`,stroke:D.pink,strokeWidth:"1.5"}),o.jsx("rect",{x:"34",y:"28",width:"16",height:"10",rx:"2",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1.5"}),o.jsx("path",{d:"M20 18 L22 28",stroke:"#666",strokeWidth:"1",strokeLinecap:"round"}),o.jsx("path",{d:"M32 18 L32 28",stroke:"#666",strokeWidth:"1",strokeLinecap:"round"}),o.jsx("path",{d:"M44 18 L42 28",stroke:"#666",strokeWidth:"1",strokeLinecap:"round"})]}),template:"flowchart",dsl:`(start) Start -> (process) Step 1 -> (decision) Check?
(decision) Check? -> |yes| (process) Step 2 -> (end) End
(decision) Check? -> |no| (process) Step 3 -> (end) End`},{id:"orgchart",label:"Org Chart",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"22",y:"4",width:"20",height:"10",rx:"2",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1.5"}),o.jsx("rect",{x:"4",y:"34",width:"16",height:"10",rx:"2",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1.5"}),o.jsx("rect",{x:"24",y:"34",width:"16",height:"10",rx:"2",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1.5"}),o.jsx("rect",{x:"44",y:"34",width:"16",height:"10",rx:"2",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1.5"}),o.jsx("path",{d:"M32 14 L32 24 M12 24 L52 24 M12 24 L12 34 M32 24 L32 34 M52 24 L52 34",stroke:"#666",strokeWidth:"1",strokeLinecap:"round"})]}),template:"orgchart",dsl:`CEO
  VP Engineering
    Team Lead
    Senior Dev
  VP Sales
    Sales Manager`},{id:"cycle",label:"Cycle",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("circle",{cx:"32",cy:"24",r:"16",fill:"none",stroke:"#ddd",strokeWidth:"1"}),o.jsx("circle",{cx:"32",cy:"8",r:"6",fill:`${D.orange}40`,stroke:D.orange,strokeWidth:"1.5"}),o.jsx("circle",{cx:"46",cy:"24",r:"6",fill:`${D.red}40`,stroke:D.red,strokeWidth:"1.5"}),o.jsx("circle",{cx:"32",cy:"40",r:"6",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1.5"}),o.jsx("circle",{cx:"18",cy:"24",r:"6",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1.5"}),o.jsx("path",{d:"M38 10 L44 18",stroke:"#666",strokeWidth:"1",strokeLinecap:"round",markerEnd:"url(#arrow)"}),o.jsx("path",{d:"M44 30 L38 38",stroke:"#666",strokeWidth:"1",strokeLinecap:"round"}),o.jsx("path",{d:"M26 38 L20 30",stroke:"#666",strokeWidth:"1",strokeLinecap:"round"}),o.jsx("path",{d:"M20 18 L26 10",stroke:"#666",strokeWidth:"1",strokeLinecap:"round"})]}),template:"state",dsl:`[*] -> Planning
Planning -> Development : start
Development -> Testing : complete
Testing -> Review : pass
Review -> Planning : iterate
Review -> [*] : done`},{id:"sequence",label:"Sequence",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"4",y:"4",width:"12",height:"8",rx:"2",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1.5"}),o.jsx("rect",{x:"26",y:"4",width:"12",height:"8",rx:"2",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1.5"}),o.jsx("rect",{x:"48",y:"4",width:"12",height:"8",rx:"2",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1.5"}),o.jsx("line",{x1:"10",y1:"12",x2:"10",y2:"44",stroke:"#666",strokeWidth:"1",strokeDasharray:"2,2"}),o.jsx("line",{x1:"32",y1:"12",x2:"32",y2:"44",stroke:"#666",strokeWidth:"1",strokeDasharray:"2,2"}),o.jsx("line",{x1:"54",y1:"12",x2:"54",y2:"44",stroke:"#666",strokeWidth:"1",strokeDasharray:"2,2"}),o.jsx("path",{d:"M10 20 L32 20",stroke:D.orange,strokeWidth:"1.5"}),o.jsx("path",{d:"M32 28 L54 28",stroke:D.pink,strokeWidth:"1.5"}),o.jsx("path",{d:"M54 36 L32 36",stroke:D.teal,strokeWidth:"1.5",strokeDasharray:"3,2"})]}),template:"sequence",dsl:`participant Client
participant Server
participant Database

Client -> Server: Request
Server -> Database: Query
Database --> Server: Result
Server --> Client: Response`},{id:"network",label:"Network",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("circle",{cx:"32",cy:"24",r:"8",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1.5"}),o.jsx("circle",{cx:"12",cy:"12",r:"6",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1.5"}),o.jsx("circle",{cx:"52",cy:"12",r:"6",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1.5"}),o.jsx("circle",{cx:"12",cy:"36",r:"6",fill:`${D.orange}40`,stroke:D.orange,strokeWidth:"1.5"}),o.jsx("circle",{cx:"52",cy:"36",r:"6",fill:`${D.red}40`,stroke:D.red,strokeWidth:"1.5"}),o.jsx("path",{d:"M24 20 L16 14",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M40 20 L48 14",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M24 28 L16 34",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M40 28 L48 34",stroke:"#666",strokeWidth:"1"})]}),template:"network",dsl:`router: Router [router]
server: Web Server [server] 192.168.1.10
db: Database [database] 192.168.1.20
client1: Client 1 [desktop]
client2: Client 2 [laptop]

router -- server
router -- db
router -- client1
router -- client2`},{id:"kanban",label:"Kanban",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"4",y:"4",width:"16",height:"40",rx:"2",fill:"#f5f5f5",stroke:"#ddd",strokeWidth:"1"}),o.jsx("rect",{x:"24",y:"4",width:"16",height:"40",rx:"2",fill:"#f5f5f5",stroke:"#ddd",strokeWidth:"1"}),o.jsx("rect",{x:"44",y:"4",width:"16",height:"40",rx:"2",fill:"#f5f5f5",stroke:"#ddd",strokeWidth:"1"}),o.jsx("rect",{x:"6",y:"12",width:"12",height:"6",rx:"1",fill:`${D.orange}60`}),o.jsx("rect",{x:"6",y:"20",width:"12",height:"6",rx:"1",fill:`${D.orange}60`}),o.jsx("rect",{x:"26",y:"12",width:"12",height:"6",rx:"1",fill:`${D.blue}60`}),o.jsx("rect",{x:"46",y:"12",width:"12",height:"6",rx:"1",fill:`${D.green}60`}),o.jsx("rect",{x:"46",y:"20",width:"12",height:"6",rx:"1",fill:`${D.green}60`})]}),template:"gantt",dsl:`Task 1: 2024-01-01, 5d
Task 2: 2024-01-03, 3d
Task 3: 2024-01-06, 4d
Task 4: 2024-01-08, 2d`}]},data:{label:"Data",shapes:[{id:"barchart",label:"Bar Chart",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"8",y:"28",width:"10",height:"16",rx:"1",fill:`${D.blue}60`}),o.jsx("rect",{x:"22",y:"18",width:"10",height:"26",rx:"1",fill:`${D.purple}60`}),o.jsx("rect",{x:"36",y:"8",width:"10",height:"36",rx:"1",fill:`${D.green}60`}),o.jsx("rect",{x:"50",y:"22",width:"10",height:"22",rx:"1",fill:`${D.orange}60`}),o.jsx("line",{x1:"4",y1:"44",x2:"60",y2:"44",stroke:"#666",strokeWidth:"1"})]}),template:"pie",dsl:`Sales: 45
Marketing: 30
Engineering: 50
Support: 25`},{id:"piechart",label:"Pie Chart",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("circle",{cx:"32",cy:"24",r:"18",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1"}),o.jsx("path",{d:"M32 24 L32 6 A18 18 0 0 1 48 16 Z",fill:`${D.purple}60`}),o.jsx("path",{d:"M32 24 L48 16 A18 18 0 0 1 44 40 Z",fill:`${D.green}60`}),o.jsx("path",{d:"M32 24 L44 40 A18 18 0 0 1 20 40 Z",fill:`${D.orange}60`})]}),template:"pie",dsl:`Revenue: 35
Costs: 25
Profit: 20
Other: 20`},{id:"erd",label:"ERD",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"4",y:"4",width:"24",height:"18",rx:"2",fill:"#f8f8f8",stroke:D.blue,strokeWidth:"1.5"}),o.jsx("rect",{x:"4",y:"4",width:"24",height:"6",rx:"2",fill:`${D.blue}30`}),o.jsx("rect",{x:"36",y:"26",width:"24",height:"18",rx:"2",fill:"#f8f8f8",stroke:D.green,strokeWidth:"1.5"}),o.jsx("rect",{x:"36",y:"26",width:"24",height:"6",rx:"2",fill:`${D.green}30`}),o.jsx("path",{d:"M28 13 L36 35",stroke:"#666",strokeWidth:"1"}),o.jsx("circle",{cx:"28",cy:"13",r:"2",fill:"#666"}),o.jsx("circle",{cx:"36",cy:"35",r:"2",fill:"none",stroke:"#666",strokeWidth:"1"})]}),template:"erd",dsl:`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  total DECIMAL
);`},{id:"class",label:"Class Diagram",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"8",y:"4",width:"22",height:"20",rx:"2",fill:"#f8f8f8",stroke:D.purple,strokeWidth:"1.5"}),o.jsx("line",{x1:"8",y1:"10",x2:"30",y2:"10",stroke:D.purple,strokeWidth:"1"}),o.jsx("line",{x1:"8",y1:"16",x2:"30",y2:"16",stroke:D.purple,strokeWidth:"0.5"}),o.jsx("rect",{x:"34",y:"24",width:"22",height:"20",rx:"2",fill:"#f8f8f8",stroke:D.orange,strokeWidth:"1.5"}),o.jsx("line",{x1:"34",y1:"30",x2:"56",y2:"30",stroke:D.orange,strokeWidth:"1"}),o.jsx("line",{x1:"34",y1:"36",x2:"56",y2:"36",stroke:D.orange,strokeWidth:"0.5"}),o.jsx("path",{d:"M19 24 L45 24",stroke:"#666",strokeWidth:"1"}),o.jsx("polygon",{points:"19,24 23,22 23,26",fill:"#666"})]}),template:"class",dsl:`class User {
  +id: int
  +name: string
  +login(): boolean
}

class Order {
  +id: int
  +total: decimal
  +process(): void
}

User "1" -- "*" Order`},{id:"linechart",label:"Line Chart",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("line",{x1:"8",y1:"40",x2:"56",y2:"40",stroke:"#666",strokeWidth:"1"}),o.jsx("line",{x1:"8",y1:"8",x2:"8",y2:"40",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M12 32 L22 24 L32 28 L42 16 L52 20",stroke:D.blue,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 36 L22 30 L32 34 L42 26 L52 30",stroke:D.green,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"32",r:"2",fill:D.blue}),o.jsx("circle",{cx:"32",cy:"28",r:"2",fill:D.blue}),o.jsx("circle",{cx:"52",cy:"20",r:"2",fill:D.blue})]}),template:"quadrant",dsl:`title: Performance Analysis
x-axis: Time
y-axis: Value

Q1: Low Risk, High Value
Q2: High Risk, High Value
Q3: High Risk, Low Value
Q4: Low Risk, Low Value`},{id:"radar",label:"Radar",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("polygon",{points:"32,8 52,20 48,40 16,40 12,20",fill:"none",stroke:"#ddd",strokeWidth:"1"}),o.jsx("polygon",{points:"32,14 46,22 43,36 21,36 18,22",fill:"none",stroke:"#ddd",strokeWidth:"1"}),o.jsx("polygon",{points:"32,20 40,25 38,32 26,32 24,25",fill:"none",stroke:"#ddd",strokeWidth:"1"}),o.jsx("polygon",{points:"32,12 48,21 44,38 20,38 16,21",fill:`${D.blue}30`,stroke:D.blue,strokeWidth:"1.5"}),o.jsx("circle",{cx:"32",cy:"12",r:"2",fill:D.blue}),o.jsx("circle",{cx:"48",cy:"21",r:"2",fill:D.blue}),o.jsx("circle",{cx:"44",cy:"38",r:"2",fill:D.blue})]}),template:"pie",dsl:`Performance: 85
Quality: 70
Speed: 90
Reliability: 75
Cost: 60`}]},diagrams:{label:"Diagrams",shapes:[{id:"mindmap",label:"Mind Map",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("ellipse",{cx:"32",cy:"24",rx:"12",ry:"8",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1.5"}),o.jsx("ellipse",{cx:"10",cy:"12",rx:"8",ry:"5",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1"}),o.jsx("ellipse",{cx:"54",cy:"12",rx:"8",ry:"5",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1"}),o.jsx("ellipse",{cx:"10",cy:"36",rx:"8",ry:"5",fill:`${D.orange}40`,stroke:D.orange,strokeWidth:"1"}),o.jsx("ellipse",{cx:"54",cy:"36",rx:"8",ry:"5",fill:`${D.red}40`,stroke:D.red,strokeWidth:"1"}),o.jsx("path",{d:"M20 20 L14 15",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M44 20 L50 15",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M20 28 L14 33",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M44 28 L50 33",stroke:"#666",strokeWidth:"1"})]}),template:"mindmap",dsl:`Central Topic
  Branch 1
    Sub-topic A
    Sub-topic B
  Branch 2
    Sub-topic C
  Branch 3
    Sub-topic D
    Sub-topic E`},{id:"architecture",label:"Architecture",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"4",y:"4",width:"56",height:"10",rx:"2",fill:`${D.blue}20`,stroke:D.blue,strokeWidth:"1",strokeDasharray:"3,2"}),o.jsx("rect",{x:"8",y:"6",width:"14",height:"6",rx:"1",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1"}),o.jsx("rect",{x:"25",y:"6",width:"14",height:"6",rx:"1",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1"}),o.jsx("rect",{x:"42",y:"6",width:"14",height:"6",rx:"1",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1"}),o.jsx("rect",{x:"4",y:"18",width:"56",height:"10",rx:"2",fill:`${D.green}20`,stroke:D.green,strokeWidth:"1",strokeDasharray:"3,2"}),o.jsx("rect",{x:"8",y:"20",width:"22",height:"6",rx:"1",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1"}),o.jsx("rect",{x:"34",y:"20",width:"22",height:"6",rx:"1",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1"}),o.jsx("rect",{x:"4",y:"32",width:"56",height:"10",rx:"2",fill:`${D.purple}20`,stroke:D.purple,strokeWidth:"1",strokeDasharray:"3,2"}),o.jsx("rect",{x:"18",y:"34",width:"28",height:"6",rx:"1",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1"})]}),template:"architecture",dsl:`[clients] Web App, Mobile App, CLI
[services] API Gateway, Auth Service, User Service
[data] PostgreSQL, Redis, S3

Web App -> API Gateway
Mobile App -> API Gateway
API Gateway -> Auth Service
API Gateway -> User Service
User Service -> PostgreSQL
Auth Service -> Redis`},{id:"usecase",label:"Use Case",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"18",y:"4",width:"40",height:"40",rx:"4",fill:"#f8f8f8",stroke:"#ddd",strokeWidth:"1"}),o.jsx("ellipse",{cx:"38",cy:"14",rx:"12",ry:"6",fill:`${D.blue}30`,stroke:D.blue,strokeWidth:"1"}),o.jsx("ellipse",{cx:"38",cy:"28",rx:"12",ry:"6",fill:`${D.green}30`,stroke:D.green,strokeWidth:"1"}),o.jsx("ellipse",{cx:"38",cy:"42",rx:"12",ry:"6",fill:`${D.orange}30`,stroke:D.orange,strokeWidth:"1"}),o.jsx("circle",{cx:"8",cy:"14",r:"4",fill:"none",stroke:"#666",strokeWidth:"1"}),o.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"28",stroke:"#666",strokeWidth:"1"}),o.jsx("line",{x1:"4",y1:"22",x2:"12",y2:"22",stroke:"#666",strokeWidth:"1"}),o.jsx("line",{x1:"8",y1:"28",x2:"4",y2:"36",stroke:"#666",strokeWidth:"1"}),o.jsx("line",{x1:"8",y1:"28",x2:"12",y2:"36",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M12 14 L26 14",stroke:"#666",strokeWidth:"1"})]}),template:"usecase",dsl:`actor User
actor Admin

User -> Login
User -> View Dashboard
User -> Update Profile

Admin -> Manage Users
Admin -> View Reports`},{id:"timeline",label:"Timeline",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("line",{x1:"8",y1:"24",x2:"56",y2:"24",stroke:"#666",strokeWidth:"2"}),o.jsx("circle",{cx:"16",cy:"24",r:"4",fill:D.blue}),o.jsx("circle",{cx:"32",cy:"24",r:"4",fill:D.green}),o.jsx("circle",{cx:"48",cy:"24",r:"4",fill:D.purple}),o.jsx("rect",{x:"10",y:"8",width:"12",height:"8",rx:"2",fill:`${D.blue}30`,stroke:D.blue,strokeWidth:"1"}),o.jsx("rect",{x:"26",y:"32",width:"12",height:"8",rx:"2",fill:`${D.green}30`,stroke:D.green,strokeWidth:"1"}),o.jsx("rect",{x:"42",y:"8",width:"12",height:"8",rx:"2",fill:`${D.purple}30`,stroke:D.purple,strokeWidth:"1"})]}),template:"timeline",dsl:`2024-01: Project Start
2024-03: Phase 1 Complete
2024-06: Beta Release
2024-09: v1.0 Launch
2024-12: Year Review`},{id:"journey",label:"User Journey",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("circle",{cx:"8",cy:"24",r:"4",fill:D.green}),o.jsx("circle",{cx:"22",cy:"16",r:"4",fill:D.blue}),o.jsx("circle",{cx:"36",cy:"28",r:"4",fill:D.orange}),o.jsx("circle",{cx:"50",cy:"20",r:"4",fill:D.purple}),o.jsx("path",{d:"M12 24 Q17 16, 18 16",stroke:"#666",strokeWidth:"1",fill:"none"}),o.jsx("path",{d:"M26 16 Q31 16, 32 28",stroke:"#666",strokeWidth:"1",fill:"none"}),o.jsx("path",{d:"M40 28 Q45 28, 46 20",stroke:"#666",strokeWidth:"1",fill:"none"}),o.jsx("path",{d:"M8 34 Q22 42, 36 38 Q50 34, 56 36",stroke:D.green,strokeWidth:"2",fill:"none",strokeDasharray:"4,2"})]}),template:"journey",dsl:`[start] Discover
[action] Sign Up
[action] Explore
[decision] Subscribe?
[success] Premium User
[end] Loyal Customer

Discover -> Sign Up -> Explore -> Subscribe?
Subscribe? -yes-> Premium User -> Loyal Customer
Subscribe? -no-> Explore`},{id:"git",label:"Git Graph",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("line",{x1:"16",y1:"8",x2:"16",y2:"40",stroke:D.blue,strokeWidth:"2"}),o.jsx("line",{x1:"32",y1:"16",x2:"32",y2:"40",stroke:D.green,strokeWidth:"2"}),o.jsx("line",{x1:"48",y1:"24",x2:"48",y2:"40",stroke:D.purple,strokeWidth:"2"}),o.jsx("circle",{cx:"16",cy:"12",r:"3",fill:D.blue}),o.jsx("circle",{cx:"16",cy:"24",r:"3",fill:D.blue}),o.jsx("circle",{cx:"16",cy:"36",r:"3",fill:D.blue}),o.jsx("circle",{cx:"32",cy:"20",r:"3",fill:D.green}),o.jsx("circle",{cx:"32",cy:"32",r:"3",fill:D.green}),o.jsx("circle",{cx:"48",cy:"28",r:"3",fill:D.purple}),o.jsx("path",{d:"M16 12 Q24 12, 32 20",stroke:"#666",strokeWidth:"1",fill:"none"}),o.jsx("path",{d:"M32 20 Q40 20, 48 28",stroke:"#666",strokeWidth:"1",fill:"none"}),o.jsx("path",{d:"M32 32 L16 36",stroke:"#666",strokeWidth:"1"})]}),template:"gitgraph",dsl:`commit: Initial commit
branch: feature
commit: Add feature
checkout: main
commit: Fix bug
merge: feature
commit: Release v1.0`}]},components:{label:"Components",shapes:[{id:"deployment",label:"Deployment",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"4",y:"4",width:"26",height:"18",rx:"3",fill:`${D.blue}20`,stroke:D.blue,strokeWidth:"1.5",strokeDasharray:"4,2"}),o.jsx("rect",{x:"8",y:"8",width:"8",height:"6",rx:"1",fill:`${D.blue}50`}),o.jsx("rect",{x:"18",y:"8",width:"8",height:"6",rx:"1",fill:`${D.blue}50`}),o.jsx("rect",{x:"34",y:"26",width:"26",height:"18",rx:"3",fill:`${D.green}20`,stroke:D.green,strokeWidth:"1.5",strokeDasharray:"4,2"}),o.jsx("rect",{x:"38",y:"30",width:"8",height:"6",rx:"1",fill:`${D.green}50`}),o.jsx("rect",{x:"48",y:"30",width:"8",height:"6",rx:"1",fill:`${D.green}50`}),o.jsx("path",{d:"M30 13 L34 35",stroke:"#666",strokeWidth:"1",strokeDasharray:"3,2"})]}),template:"deployment",dsl:`node: AWS Cloud {
  node: EC2 Instance {
    component: Web Server
    component: API Server
  }
  node: RDS {
    component: PostgreSQL
  }
}`},{id:"component",label:"Component",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"16",y:"8",width:"32",height:"32",rx:"4",fill:`${D.purple}20`,stroke:D.purple,strokeWidth:"1.5"}),o.jsx("rect",{x:"10",y:"14",width:"8",height:"6",rx:"1",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1"}),o.jsx("rect",{x:"10",y:"28",width:"8",height:"6",rx:"1",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1"}),o.jsx("rect",{x:"46",y:"14",width:"8",height:"6",rx:"1",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1"}),o.jsx("rect",{x:"46",y:"28",width:"8",height:"6",rx:"1",fill:`${D.purple}40`,stroke:D.purple,strokeWidth:"1"}),o.jsx("text",{x:"32",y:"28",textAnchor:"middle",fontSize:"8",fill:D.purple,children:"API"})]}),template:"component",dsl:`component: Auth Service [auth]
component: User Service [user]
component: Order Service [order]
component: Payment Gateway [payment]

Auth Service -> User Service
User Service -> Order Service
Order Service -> Payment Gateway`},{id:"c4",label:"C4 Model",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("rect",{x:"4",y:"4",width:"56",height:"40",rx:"4",fill:"#f5f5f5",stroke:"#ddd",strokeWidth:"1"}),o.jsx("rect",{x:"8",y:"8",width:"18",height:"14",rx:"2",fill:`${D.blue}30`,stroke:D.blue,strokeWidth:"1"}),o.jsx("circle",{cx:"38",cy:"8",r:"6",fill:"none",stroke:D.orange,strokeWidth:"1.5"}),o.jsx("circle",{cx:"38",cy:"4",r:"2",fill:`${D.orange}40`,stroke:D.orange,strokeWidth:"1"}),o.jsx("rect",{x:"48",y:"8",width:"10",height:"14",rx:"2",fill:`${D.green}30`,stroke:D.green,strokeWidth:"1"}),o.jsx("rect",{x:"8",y:"28",width:"22",height:"14",rx:"2",fill:`${D.purple}30`,stroke:D.purple,strokeWidth:"1"}),o.jsx("rect",{x:"34",y:"28",width:"22",height:"14",rx:"2",fill:`${D.pink}30`,stroke:D.pink,strokeWidth:"1"})]}),template:"c4",dsl:`person: User [User accesses the system]
system: Web Application [Main application]
container: API Backend [Handles requests]
container: Database [Stores data]

User -> Web Application: Uses
Web Application -> API Backend: Calls
API Backend -> Database: Reads/Writes`},{id:"state",label:"State Machine",icon:o.jsxs("svg",{viewBox:"0 0 64 48",fill:"none",children:[o.jsx("circle",{cx:"12",cy:"24",r:"6",fill:"none",stroke:"#666",strokeWidth:"2"}),o.jsx("circle",{cx:"12",cy:"24",r:"4",fill:"#666"}),o.jsx("circle",{cx:"32",cy:"12",r:"6",fill:`${D.blue}40`,stroke:D.blue,strokeWidth:"1.5"}),o.jsx("circle",{cx:"52",cy:"24",r:"6",fill:`${D.green}40`,stroke:D.green,strokeWidth:"1.5"}),o.jsx("circle",{cx:"32",cy:"36",r:"6",fill:`${D.orange}40`,stroke:D.orange,strokeWidth:"1.5"}),o.jsx("path",{d:"M18 22 L26 14",stroke:"#666",strokeWidth:"1",markerEnd:"url(#arrow)"}),o.jsx("path",{d:"M38 12 L46 20",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M52 30 L52 36 L38 36",stroke:"#666",strokeWidth:"1"}),o.jsx("path",{d:"M26 36 L18 28",stroke:"#666",strokeWidth:"1"})]}),template:"state",dsl:`[*] -> Idle
Idle -> Processing : start
Processing -> Complete : success
Processing -> Error : fail
Error -> Idle : retry
Complete -> [*]`}]}};function mw({isOpen:a,onClose:t,onSelectShape:r,theme:n}){const[i,s]=M.useState(Object.keys(Kh).reduce((d,u)=>({...d,[u]:!0}),{})),e=(n==null?void 0:n.name)==="dark",c=d=>{s(u=>({...u,[d]:!u[d]}))};if(!a)return null;const h={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",backdropFilter:"blur(4px)",display:"flex",justifyContent:"flex-end",zIndex:1e3},panel:{width:320,maxWidth:"90vw",height:"100vh",background:e?"linear-gradient(180deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))":"linear-gradient(180deg, #ffffff, #f8fafc)",borderLeft:`1px solid ${e?"rgba(255,255,255,0.1)":"#e2e8f0"}`,display:"flex",flexDirection:"column",boxShadow:"-10px 0 30px rgba(0,0,0,0.2)"},header:{padding:"16px 20px",borderBottom:`1px solid ${e?"rgba(255,255,255,0.1)":"#e2e8f0"}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:e?"rgba(0,0,0,0.2)":"#f1f5f9"},headerTitle:{display:"flex",alignItems:"center",gap:10},headerIcon:{width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center"},title:{fontWeight:600,fontSize:"1rem",color:e?"#fff":"#1e293b"},closeBtn:{background:"transparent",border:"none",color:e?"#94a3b8":"#64748b",fontSize:"1.2rem",cursor:"pointer",padding:4,borderRadius:4},content:{flex:1,overflowY:"auto",padding:"8px 0"},category:{marginBottom:4},categoryHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 20px",cursor:"pointer",background:e?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",borderBottom:`1px solid ${e?"rgba(255,255,255,0.05)":"#f1f5f9"}`,transition:"background 0.2s"},categoryLabel:{fontWeight:600,fontSize:"0.9rem",color:e?"#e2e8f0":"#334155"},categoryArrow:{fontSize:"0.8rem",color:e?"#64748b":"#94a3b8",transition:"transform 0.2s"},shapesGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12,padding:"16px 20px"},shapeItem:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:10,background:e?"rgba(255,255,255,0.05)":"#fff",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"#e2e8f0"}`,cursor:"pointer",transition:"all 0.2s"},shapeIcon:{width:64,height:48},shapeLabel:{fontSize:"0.7rem",color:e?"#94a3b8":"#64748b",textAlign:"center",fontWeight:500},footer:{padding:"12px 20px",borderTop:`1px solid ${e?"rgba(255,255,255,0.1)":"#e2e8f0"}`,background:e?"rgba(0,0,0,0.2)":"#f1f5f9"},hint:{fontSize:"0.75rem",color:e?"#64748b":"#94a3b8",textAlign:"center"}};return o.jsx("div",{style:h.overlay,onClick:t,children:o.jsxs("div",{style:h.panel,onClick:d=>d.stopPropagation(),children:[o.jsxs("div",{style:h.header,children:[o.jsxs("div",{style:h.headerTitle,children:[o.jsx("div",{style:h.headerIcon,children:o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})}),o.jsx("span",{style:h.title,children:"Categories"})]}),o.jsx("button",{style:h.closeBtn,onClick:t,children:"✕"})]}),o.jsx("div",{style:h.content,children:Object.entries(Kh).map(([d,u])=>o.jsxs("div",{style:h.category,children:[o.jsxs("div",{style:h.categoryHeader,onClick:()=>c(d),onMouseEnter:f=>f.currentTarget.style.background=e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)",onMouseLeave:f=>f.currentTarget.style.background=e?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.02)",children:[o.jsx("span",{style:h.categoryLabel,children:u.label}),o.jsx("span",{style:{...h.categoryArrow,transform:i[d]?"rotate(180deg)":"rotate(0deg)"},children:"▼"})]}),i[d]&&o.jsx("div",{style:h.shapesGrid,children:u.shapes.map(f=>o.jsxs("div",{style:h.shapeItem,onClick:()=>r(f),onMouseEnter:m=>{m.currentTarget.style.background=e?"rgba(124,58,237,0.2)":"rgba(124,58,237,0.1)",m.currentTarget.style.borderColor=D.purple,m.currentTarget.style.transform="scale(1.05)"},onMouseLeave:m=>{m.currentTarget.style.background=e?"rgba(255,255,255,0.05)":"#fff",m.currentTarget.style.borderColor=e?"rgba(255,255,255,0.1)":"#e2e8f0",m.currentTarget.style.transform="scale(1)"},children:[o.jsx("div",{style:h.shapeIcon,children:f.icon}),o.jsx("span",{style:h.shapeLabel,children:f.label})]},f.id))})]},d))}),o.jsx("div",{style:h.footer,children:o.jsx("p",{style:h.hint,children:"Click a shape to use it as a diagram template"})})]})})}async function Sg(a,t=2){const r=a.getBoundingClientRect(),n=Math.ceil(r.width),i=Math.ceil(r.height),s=document.createElement("canvas");s.width=n*t,s.height=i*t;const e=s.getContext("2d");e.scale(t,t),e.fillStyle="#1a1a2e",e.fillRect(0,0,n,i);const c=a.querySelectorAll("svg");for(const h of c)await yw(h,e,a);return await xw(a,e),s}async function yw(a,t,r){const n=a.getBoundingClientRect(),i=r.getBoundingClientRect(),s=n.left-i.left,e=n.top-i.top,c=a.cloneNode(!0),h=a.querySelectorAll("*"),d=c.querySelectorAll("*");h.forEach((m,g)=>{const y=d[g];if(y)try{const l=window.getComputedStyle(m);["fill","stroke","stroke-width","stroke-dasharray","opacity","font-size","font-family"].forEach(p=>{const x=l.getPropertyValue(p);x&&x!=="none"&&y.setAttribute(p,x)}),y.style.animation="none"}catch{}}),c.setAttribute("width",n.width),c.setAttribute("height",n.height),c.setAttribute("xmlns","http://www.w3.org/2000/svg");const u=new XMLSerializer().serializeToString(c),f=new Blob([u],{type:"image/svg+xml;charset=utf-8"});return new Promise(m=>{const g=new Image;g.onload=()=>{t.drawImage(g,s,e,n.width,n.height),URL.revokeObjectURL(g.src),m()},g.onerror=()=>{URL.revokeObjectURL(g.src),m()},g.src=URL.createObjectURL(f)})}async function xw(a,t){const r=a.getBoundingClientRect(),n=a.querySelectorAll("*"),i=new Set;for(const e of n){if(e.classList.contains("canvas-bg")||e.tagName==="SVG"||e.tagName==="svg"||e.closest("svg"))continue;const c=e.getBoundingClientRect();if(c.width<5||c.height<5)continue;const h=window.getComputedStyle(e);if(h.display==="none"||h.visibility==="hidden")continue;const d=c.left-r.left,u=c.top-r.top;if(d<-50||u<-50||d>r.width+50||u>r.height+50)continue;const f=h.backgroundColor,m=h.borderColor,g=f&&f!=="rgba(0, 0, 0, 0)"&&f!=="transparent",y=m&&m!=="rgba(0, 0, 0, 0)"&&parseInt(h.borderWidth)>0,l=`${Math.round(d)},${Math.round(u)},${Math.round(c.width)},${Math.round(c.height)}`;if((g||y)&&!i.has(l)){i.add(l);const p=parseInt(h.borderRadius)||0;g&&(t.fillStyle=f,p>0?(Xh(t,d,u,c.width,c.height,p),t.fill()):t.fillRect(d,u,c.width,c.height)),y&&(t.strokeStyle=m,t.lineWidth=parseInt(h.borderWidth)||1,p>0?(Xh(t,d,u,c.width,c.height,p),t.stroke()):t.strokeRect(d,u,c.width,c.height))}}const s=new Set;for(const e of n){if(e.closest("svg")||e.classList.contains("canvas-bg"))continue;const c=window.getComputedStyle(e);if(c.display==="none"||c.visibility==="hidden")continue;let h="";for(const C of e.childNodes)C.nodeType===Node.TEXT_NODE&&(h+=C.textContent);if(!h&&e.children.length===0&&(h=e.textContent||""),h=h.trim(),!h)continue;const d=e.getBoundingClientRect();let u=d.left-r.left,f=d.top-r.top,m,g;if(d.width>1&&d.height>1?(m=u+d.width/2,g=f+d.height/2):(m=u,g=f),m<-200||g<-200||m>r.width+200||g>r.height+200)continue;const y=`${h}@${Math.round(m)},${Math.round(g)}`;if(s.has(y))continue;s.add(y);const l=c.fontSize||"14px",p=c.fontWeight||"400",x=c.fontFamily||"system-ui, -apple-system, sans-serif",b=c.color||"#ffffff";t.fillStyle=b,t.font=`${p} ${l} ${x}`,t.textAlign="center",t.textBaseline="middle",t.fillText(h,m,g)}}function Xh(a,t,r,n,i,s){a.beginPath(),a.moveTo(t+s,r),a.lineTo(t+n-s,r),a.quadraticCurveTo(t+n,r,t+n,r+s),a.lineTo(t+n,r+i-s),a.quadraticCurveTo(t+n,r+i,t+n-s,r+i),a.lineTo(t+s,r+i),a.quadraticCurveTo(t,r+i,t,r+i-s),a.lineTo(t,r+s),a.quadraticCurveTo(t,r,t+s,r),a.closePath()}function kg(a,t){const r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(r),100)}async function bw(a,t="diagram",r=2){var i;if(!a)throw new Error("No container element provided");const n=((i=a.querySelector('[class*="canvas"]'))==null?void 0:i.parentElement)||a.firstElementChild||a;try{const s=await Sg(n,r);return new Promise((e,c)=>{s.toBlob(h=>{if(!h){c(new Error("Failed to create PNG"));return}kg(h,`${t}.png`),e()},"image/png",1)})}catch(s){throw console.error("Export failed:",s),new Error(`Export failed: ${s.message}`)}}function vw(a,t="diagram"){if(!a)throw new Error("No container element provided");const r=a.querySelector("svg");if(!r)throw new Error("No SVG element found in the diagram");const n=r.cloneNode(!0),i=r.getBoundingClientRect(),s=r.querySelectorAll("*"),e=n.querySelectorAll("*");s.forEach((d,u)=>{const f=e[u];if(f)try{const m=window.getComputedStyle(d);["fill","stroke","stroke-width","stroke-dasharray","opacity","font-size","font-family","font-weight"].forEach(g=>{const y=m.getPropertyValue(g);y&&y!=="none"&&y!=="normal"&&f.setAttribute(g,y)}),f.style.animation="none"}catch{}}),n.setAttribute("width",i.width),n.setAttribute("height",i.height),n.setAttribute("xmlns","http://www.w3.org/2000/svg");const c=`<?xml version="1.0" encoding="UTF-8"?>
`+new XMLSerializer().serializeToString(n),h=new Blob([c],{type:"image/svg+xml;charset=utf-8"});kg(h,`${t}.svg`)}async function ww(a,t=2){var n;if(!a)throw new Error("No container element provided");const r=((n=a.querySelector('[class*="canvas"]'))==null?void 0:n.parentElement)||a.firstElementChild||a;try{const i=await Sg(r,t);return new Promise((s,e)=>{i.toBlob(async c=>{if(!c){e(new Error("Failed to create image"));return}try{await navigator.clipboard.write([new ClipboardItem({"image/png":c})]),s()}catch(h){console.error("Clipboard error:",h),e(new Error("Clipboard access denied. Try using HTTPS."))}},"image/png",1)})}catch(i){throw new Error(`Copy failed: ${i.message}`)}}function Sw(a){if(!a)throw new Error("No container element provided");const t=a.cloneNode(!0),r=a.getBoundingClientRect(),n=r.width+100,i=r.height+100,s=window.open("","_blank",`width=${n},height=${i}`);if(!s)throw new Error("Pop-up blocked. Please allow pop-ups.");let e="";for(const c of document.styleSheets)try{for(const h of c.cssRules)e+=h.cssText+`
`}catch{}s.document.write(`
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
  `),s.document.close()}const Cg={UNDO:{key:"z",meta:!0,description:"Undo",category:"Edit"},REDO:{key:"z",meta:!0,shift:!0,description:"Redo",category:"Edit"},ZOOM_IN:{key:"=",keyAlt:"+",description:"Zoom in",category:"View"},ZOOM_OUT:{key:"-",description:"Zoom out",category:"View"},RESET_VIEW:{key:"r",description:"Reset view",category:"View"},RESET_VIEW_ALT:{key:"Home",description:"Reset view (alt)",category:"View"},PAN_UP:{key:"ArrowUp",description:"Pan up",category:"Navigation"},PAN_DOWN:{key:"ArrowDown",description:"Pan down",category:"Navigation"},PAN_LEFT:{key:"ArrowLeft",description:"Pan left",category:"Navigation"},PAN_RIGHT:{key:"ArrowRight",description:"Pan right",category:"Navigation"},TOGGLE_EDITOR:{key:"e",meta:!0,description:"Toggle editor",category:"Editor"},TOGGLE_AI_CHAT:{key:"k",meta:!0,description:"Toggle AI chat",category:"Editor"},HELP:{key:"?",description:"Show keyboard shortcuts",category:"Help"},HELP_ALT:{key:"/",shift:!0,description:"Show keyboard shortcuts (alt)",category:"Help"},EXPORT_PNG:{key:"p",meta:!0,shift:!0,description:"Export as PNG",category:"Export"},EXPORT_SVG:{key:"s",meta:!0,shift:!0,description:"Export as SVG",category:"Export"},COPY_CLIPBOARD:{key:"c",meta:!0,shift:!0,description:"Copy to clipboard",category:"Export"}};function kw(a){const t=[],r=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/.test(navigator.platform);a.meta&&t.push(r?"⌘":"Ctrl"),a.shift&&t.push(r?"⇧":"Shift"),a.alt&&t.push(r?"⌥":"Alt");let n=a.key;return n==="ArrowUp"?n="↑":n==="ArrowDown"?n="↓":n==="ArrowLeft"?n="←":n==="ArrowRight"?n="→":n==="Home"?n="Home":n==="="?n="+":n==="/"?n="/":n=n.toUpperCase(),t.push(n),t.join(r?"":"+")}function Cw(){const a={};return Object.entries(Cg).forEach(([t,r])=>{if(t.endsWith("_ALT"))return;const n=r.category||"Other";a[n]||(a[n]=[]),a[n].push({name:t,...r,formatted:kw(r)})}),a}function Ew(a,t){var c;const n=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?a.metaKey:a.ctrlKey;if(t.meta&&!n||!t.meta&&n||t.shift&&!a.shiftKey||!t.shift&&a.shiftKey&&t.key!=="?"||t.alt&&!a.altKey||!t.alt&&a.altKey)return!1;const i=a.key.toLowerCase(),s=t.key.toLowerCase(),e=(c=t.keyAlt)==null?void 0:c.toLowerCase();return i===s||e&&i===e}function jw(a,t=!0){const r=M.useCallback(n=>{if(!t)return;const i=n.target;if(!(i.tagName==="INPUT"||i.tagName==="TEXTAREA"||i.isContentEditable)){for(const[s,e]of Object.entries(Cg))if(Ew(n,e)){const c=a[s];if(c){n.preventDefault(),c(n);return}}}},[a,t]);M.useEffect(()=>(window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)),[r])}function Mw(a){const t=a.trim().toLowerCase();return t.startsWith("flowchart")||t.startsWith("graph")?"flowchart":t.startsWith("sequencediagram")?"sequence":t.startsWith("classdiagram")?"class":t.startsWith("statediagram")?"state":t.startsWith("erdiagram")?"erd":t.startsWith("gantt")?"gantt":t.startsWith("pie")?"pie":t.startsWith("gitgraph")?"git":t.startsWith("journey")?"journey":t.startsWith("mindmap")?"mindmap":t.startsWith("c4context")||t.startsWith("c4container")||t.startsWith("c4component")||t.startsWith("c4dynamic")||t.startsWith("c4deployment")?"c4":t.startsWith("timeline")?"timeline":t.startsWith("quadrantchart")?"quadrant":t.startsWith("sankey")?"sankey":t.startsWith("requirementdiagram")?"requirement":null}function Oe(a){return a.replace(/<br\s*\/?>/gi," ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()}function Aw(a){const t=a.split(`
`),r=t[0].trim().toLowerCase(),n=t.slice(1);let i="TB";const s=r.match(/(?:flowchart|graph)\s+(td|tb|lr|rl|bt)/i);s&&(i=s[1].toUpperCase(),i==="TD"&&(i="TB"));const e=new Map,c=new Map,h=new Map,d=new Map,u=[];let f=!1,m=null;const g=E=>{E=E.trim();let j=E.match(/^(\w+)\(\(\((.+)\)\)\)$/);return j?{id:j[1],label:Oe(j[2]),type:"start"}:(j=E.match(/^(\w+)\{\{(.+)\}\}$/),j?{id:j[1],label:Oe(j[2]),type:"hexagon"}:(j=E.match(/^(\w+)\[\[(.+)\]\]$/),j?{id:j[1],label:Oe(j[2]),type:"subroutine"}:(j=E.match(/^(\w+)\[\/(.+)\/\]$/),j?{id:j[1],label:Oe(j[2]),type:"io"}:(j=E.match(/^(\w+)\[\\(.+)\\\]$/),j?{id:j[1],label:Oe(j[2]),type:"io"}:(j=E.match(/^(\w+)\[\/(.+)\\\]$/),j?{id:j[1],label:Oe(j[2]),type:"trapezoid"}:(j=E.match(/^(\w+)\[\\(.+)\/\]$/),j?{id:j[1],label:Oe(j[2]),type:"trapezoid"}:(j=E.match(/^(\w+)>(.+)\]$/),j?{id:j[1],label:Oe(j[2]),type:"flag"}:(j=E.match(/^(\w+)\(\(([^)]+)\)\)$/),j?{id:j[1],label:Oe(j[2]),type:"start"}:(j=E.match(/^(\w+)\(\[([^\]]+)\]\)$/),j?{id:j[1],label:Oe(j[2]),type:"process"}:(j=E.match(/^(\w+)\[\(([^)]+)\)\]$/),j?{id:j[1],label:Oe(j[2]),type:"database"}:(j=E.match(/^(\w+)\{([^}]+)\}$/),j?{id:j[1],label:Oe(j[2]),type:"decision"}:(j=E.match(/^(\w+)\[([^\]]+)\]$/),j?{id:j[1],label:Oe(j[2]),type:"process"}:(j=E.match(/^(\w+)\(([^)]+)\)$/),j?{id:j[1],label:Oe(j[2]),type:"process"}:(j=E.match(/^(\w+)$/),j?{id:j[1],label:j[1],type:"process"}:null))))))))))))))},y=E=>E.replace(/fa:fa-[\w-]+\s*/g,"").trim()||E;n.forEach(E=>{if(E=E.trim(),!E||E.startsWith("%%"))return;const j=E.match(/^subgraph\s+(.+)/i);if(j){m=Oe(j[1]),d.has(m)||d.set(m,[]);return}if(E==="end"){m=null;return}const $=/^(.+?)\s*(--+>|==+>|-\.+->?|--+o|--+x|~~~|--+)\s*(?:\|([^|]*)\|)?\s*(.+)$/;let R=E.match($);if(!R){const _=/^(.+?)\s*--\s+([^-]+?)\s+-->\s*(.+)$/,T=E.match(_);T&&(R=[E,T[1],"-->",T[2].trim(),T[3]])}if(R){const[,_,T,P,W]=R,N=g(_.trim());if(N){const V=y(N.label),J=N.label!==N.id;(J||!e.has(N.id))&&e.set(N.id,V),(J||!c.has(N.id))&&c.set(N.id,N.type),N.type==="decision"&&(f=!0),m&&(h.set(N.id,m),d.get(m).includes(N.id)||d.get(m).push(N.id))}const G=g(W.trim());if(G){const V=y(G.label),J=G.label!==G.id;(J||!e.has(G.id))&&e.set(G.id,V),(J||!c.has(G.id))&&c.set(G.id,G.type),G.type==="decision"&&(f=!0),m&&(h.set(G.id,m),d.get(m).includes(G.id)||d.get(m).push(G.id))}N&&G&&u.push({from:N.id,to:G.id,label:P?Oe(P):""});return}const A=g(E);if(A){const _=y(A.label),T=A.label!==A.id;(T||!e.has(A.id))&&e.set(A.id,_),(T||!c.has(A.id))&&c.set(A.id,A.type),A.type==="decision"&&(f=!0),m&&(h.set(A.id,m),d.get(m).includes(A.id)||d.get(m).push(A.id))}});const l=[];u.forEach(({from:E,to:j})=>{l.includes(E)||l.push(E),l.includes(j)||l.push(j)}),e.forEach((E,j)=>{l.includes(j)||l.push(j)});const p=new Map;let x=!1;u.forEach(({from:E,label:j})=>{p.set(E,(p.get(E)||0)+1),j&&/interact|fetch|cache|call|send|use|connect|query|read|write|get|post|create|update|webhook|event/i.test(j)&&(x=!0)});const b=[...p.values()].some(E=>E>1),C=d.size>0;if(!f&&(C||b&&x||x||e.size>=8&&b))return{type:"architecture",source:Rw(e,u,l,h,d,c)};const k=[],S=new Set;if(i!=="TB"&&k.push(`direction: ${i}`),l.length>0){const E=l[0],j=e.get(E)||E,$=c.get(E)||"process";k.push(`(${$}) ${j}`),S.add(E)}return u.forEach(({from:E,to:j,label:$})=>{const R=e.get(E)||E,A=e.get(j)||j,_=c.get(j)||"process";$?k.push(`${R} -> (${_}) ${A}: ${$}`):k.push(`${R} -> (${_}) ${A}`),S.add(j)}),{type:"flowchart",source:k.join(`
`)}}function Rw(a,t,r,n=new Map,i=new Map,s=new Map){const e=[],c={clients:/^(fe|ui|frontend|user|client|browser|mobile|app)\b/i,gateway:/gateway|proxy|load.?balancer|nginx|router|ingress|kong|traefik|envoy/i,service:/(api|service|server|backend|engine|controller|handler|processor)\b/i,database:/database|db|mysql|postgres|mongo|redis|cache|storage|sql|queue|index|store|elastic|dynamo|s3|bucket/i,external:/external|third.?party|vendor|saas|stripe|twilio|sendgrid|aws|gcp|azure/i},h=(b,C)=>{const w=`${b} ${C}`.toLowerCase();return c.clients.test(w)?"clients":c.gateway.test(w)?"gateway":c.database.test(w)?"database":c.external.test(w)?"external":(c.service.test(w),"service")},d=new Map,u=new Map;r.forEach(b=>{d.set(b,[]),u.set(b,[])}),t.forEach(({from:b,to:C})=>{d.has(b)&&d.get(b).push(C),u.has(C)&&u.get(C).push(b)});const f=new Set;r.forEach(b=>{const C=a.get(b)||b;((u.get(b)||[]).length===0||c.clients.test(C)||c.clients.test(b))&&f.add(b)}),f.size===0&&r.length>0&&f.add(r[0]);const m=new Set;t.forEach(({from:b,to:C},w)=>{f.has(C)&&!f.has(b)&&m.add(w)});const g=new Map;f.forEach(b=>g.set(b,0));const y=[...f];for(;y.length>0;){const b=y.shift(),C=g.get(b);(d.get(b)||[]).forEach(k=>{const S=t.findIndex($=>$.from===b&&$.to===k);if(m.has(S))return;const E=g.get(k),j=C+1;(E===void 0||E<j)&&(g.set(k,j),y.includes(k)||y.push(k))})}i.size>0&&i.forEach((b,C)=>{if(b.filter(k=>(u.get(k)||[]).filter(E=>!b.includes(E)).length===0).length===b.length){Math.max(0,...g.values()),b.forEach((S,E)=>{g.has(S)||g.set(S,0)});const k=b.filter(S=>g.has(S));for(;k.length>0;){const S=k.shift(),E=g.get(S);(d.get(S)||[]).filter($=>b.includes($)||!g.has($)).forEach($=>{const R=E+1;(!g.has($)||g.get($)<R)&&(g.set($,R),k.includes($)||k.push($))})}}});const l=g.size>0?Math.floor([...g.values()].reduce((b,C)=>b+C,0)/g.size):0;r.forEach(b=>{g.has(b)||g.set(b,l)});const p=new Map;return r.forEach(b=>{const C=g.get(b);p.has(C)||p.set(C,[]),p.get(C).push(b)}),[...p.keys()].sort((b,C)=>b-C).forEach(b=>{const C=p.get(b),w=new Map;C.forEach(k=>{const S=a.get(k)||k,E=n.get(k);let j;if(E){const $=E.toLowerCase();/ingestion|ingest|import|input/i.test($)?j="service":/gateway|api/i.test($)?j="gateway":/data|storage|database/i.test($)?j="database":/external|third/i.test($)?j="external":j=h(S,k)}else j=h(S,k);w.has(j)||w.set(j,[]),w.get(j).push(k)}),w.forEach((k,S)=>{const E=k.map(j=>a.get(j)||j);e.push(`[${S}] ${E.join(", ")}`)})}),e.push(""),t.forEach(({from:b,to:C,label:w})=>{const k=a.get(b)||b,S=a.get(C)||C;w?e.push(`${k} -> ${S}: ${w}`):e.push(`${k} -> ${S}`)}),e.join(`
`)}function $w(a){const t=a.split(`
`).slice(1),r=new Set,n=[],i=new Map;t.forEach(e=>{if(e=e.trim(),!e||e.startsWith("%%"))return;const c=e.match(/^participant\s+(\w+)(?:\s+as\s+(.+))?/i);if(c){const E=c[1],j=c[2]||c[1];i.set(E,j),r.add(j);return}const h=e.match(/^actor\s+(\w+)(?:\s+as\s+(.+))?/i);if(h){const E=h[1],j=h[2]||h[1];i.set(E,j),r.add(j);return}const d=e.match(/^loop\s+(.+)/i);if(d){n.push(`loop ${d[1]}`);return}const u=e.match(/^alt\s+(.+)/i);if(u){n.push(`alt ${u[1]}`);return}const f=e.match(/^else\s*(.*)/i);if(f){n.push(`else ${f[1]||""}`);return}const m=e.match(/^opt\s+(.+)/i);if(m){n.push(`opt ${m[1]}`);return}const g=e.match(/^par\s+(.+)/i);if(g){n.push(`par ${g[1]}`);return}const y=e.match(/^and\s+(.+)/i);if(y){n.push(`and ${y[1]}`);return}const l=e.match(/^critical\s+(.+)/i);if(l){n.push(`critical ${l[1]}`);return}const p=e.match(/^option\s+(.+)/i);if(p){n.push(`option ${p[1]}`);return}const x=e.match(/^break\s+(.+)/i);if(x){n.push(`break ${x[1]}`);return}const b=e.match(/^rect\s+(.+)/i);if(b){n.push(`rect ${b[1]}`);return}const C=e.match(/^(activate|deactivate)\s+(\w+)/i);if(C){const E=C[2],j=i.get(E)||E;n.push(`${C[1].toLowerCase()} ${j}`);return}if(e.toLowerCase()==="end"){n.push("end");return}const w=e.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);if(w){const E=w[1].toLowerCase(),j=w[2],$=i.get(j)||j,R=w[3];n.push(`note ${E} of ${$}: ${R}`);return}const k=e.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);if(k){const E=k[1].split(",").map(j=>{const $=j.trim();return i.get($)||$});n.push(`note over ${E.join(", ")}: ${k[2]}`);return}const S=e.match(/(\w+)\s*(-?->>?|-->>?|-x|--x|-\)|--\))([+-])?\s*(\w+)\s*:\s*(.+)/);if(S){const[,E,j,$,R,A]=S,_=i.get(E)||E,T=i.get(R)||R,P=j.startsWith("--"),W=j.includes("x"),N=j.includes(")");r.add(_),r.add(T);let G=P?"-->":"->";W?G=P?"--x":"-x":N&&(G=P?"--)":"-)"),n.push(`${_} ${G} ${T}: ${A}`),$==="+"?n.push(`activate ${T}`):$==="-"&&n.push(`deactivate ${T}`)}});const s=[];return r.size>0&&(s.push(`participant ${[...r].join(", ")}`),s.push("")),s.push(...n),s.join(`
`)}function Iw(a){const t=a.split(`
`).slice(1),r=new Map,n=[];let i=null;t.forEach(e=>{if(e=e.trim(),!e||e.startsWith("%%"))return;const c=e.match(/^class\s+(\w+)/i);if(c){i=c[1],r.has(i)||r.set(i,{name:i,members:[]});return}if(i&&(e.startsWith("+")||e.startsWith("-")||e.startsWith("#")||e.startsWith("~"))){r.get(i).members.push(e);return}const h=e.match(/^(\w+)\s*:\s*(.+)/);if(h&&!e.includes("--")&&!e.includes("..")){const[,u,f]=h;r.has(u)||r.set(u,{name:u,members:[]}),r.get(u).members.push(f);return}const d=e.match(/(\w+)\s*(--|>|\.\.>|-->|--\*|--o|\.\.|--)\s*(\w+)(?:\s*:\s*(.+))?/);if(d){const[,u,f,m,g]=d;let y="-->";f==="--|>"?y="--|>":f==="--*"?y="--*":f==="--o"?y="--o":f.includes("..")&&(y="..>"),n.push({from:u,to:m,arrow:y,label:g||""})}});const s=[];return r.forEach(({name:e,members:c})=>{s.push(`class ${e}`),c.forEach(h=>s.push(h)),s.push("")}),n.forEach(({from:e,to:c,arrow:h,label:d})=>{const u=d?`${e} ${h} ${c} : ${d}`:`${e} ${h} ${c}`;s.push(u)}),s.join(`
`)}function Tw(a){const t=a.split(`
`).slice(1),r=new Map,n=[],i=[],s=new Map;t.forEach(c=>{if(c=c.trim(),!c||c.startsWith("%%"))return;const h=c.match(/^state\s+"([^"]+)"\s+as\s+(\w+)/i);if(h){const[,l,p]=h;s.set(p,l),r.has(p)||r.set(p,{id:p});return}const d=c.match(/^(\w+)\s*:\s*([^{]+)$/);if(d&&!c.includes("-->")){const[,l,p]=d;s.set(l,p.trim()),r.has(l)||r.set(l,{id:l});return}const u=c.match(/^state\s+(\w+)\s*\{?\s*$/i);if(u){const l=u[1];if(!r.has(l))r.set(l,{id:l,isComposite:!0,children:[]});else{const p=r.get(l);p.isComposite=!0,p.children=p.children||[]}i.push(l);return}if(c==="}"){i.pop();return}const f=c.match(/^state\s+(\w+)\s*<<(fork|join)>>/i);if(f){const[,l,p]=f;r.set(l,{id:l,specialType:p.toLowerCase()});return}const m=c.match(/^state\s+(\w+)\s*<<choice>>/i);if(m){const l=m[1];r.set(l,{id:l,specialType:"choice"});return}const g=c.match(/^state\s+(\w+)\s*<<note>>/i);if(g){const l=g[1];r.set(l,{id:l,specialType:"note"});return}if(c.includes("[*]")){const l=c.match(/\[\*\]\s*-->\s*(\w+)/),p=c.match(/(\w+)\s*-->\s*\[\*\]/);if(l){const x=l[1];if(r.has(x)?r.get(x).isInitial=!0:r.set(x,{id:x,isInitial:!0}),i.length>0){const b=r.get(i[i.length-1]);b&&b.children&&!b.children.includes(x)&&b.children.push(x)}}if(p){const x=p[1];r.has(x)?r.get(x).isFinal=!0:r.set(x,{id:x,isFinal:!0})}return}const y=c.match(/(\w+)\s*-->\s*(\w+)(?:\s*:\s*(.+))?/);if(y){const[,l,p,x]=y;if(r.has(l)||r.set(l,{id:l}),r.has(p)||r.set(p,{id:p}),n.push({from:l,to:p,event:x||""}),i.length>0){const b=r.get(i[i.length-1]);b&&b.children&&(b.children.includes(l)||b.children.push(l),b.children.includes(p)||b.children.push(p))}}});const e=[];return r.forEach(c=>{const h=s.get(c.id),d=h?`${c.id}: ${h}`:c.id;c.isInitial?e.push(`(initial) ${d}`):c.isFinal?e.push(`(final) ${d}`):c.specialType==="fork"?e.push(`(fork) ${d}`):c.specialType==="join"?e.push(`(join) ${d}`):c.specialType==="choice"?e.push(`(choice) ${d}`):c.isComposite&&e.push(`(composite) ${d}`)}),e.length>0&&e.push(""),n.forEach(({from:c,to:h,event:d})=>{const u=d?`${c} -> ${h}: ${d}`:`${c} -> ${h}`;e.push(u)}),e.join(`
`)}function Pw(a){const t=a.split(`
`).slice(1),r=new Map;t.forEach(i=>{if(i=i.trim(),!i||i.startsWith("%%"))return;const s=i.match(/^(\w+)\s*\{/);if(s){r.set(s[1],{name:s[1],fields:[]});return}const e=i.match(/^\s*(\w+)\s+(\w+)\s*(PK|FK)?/);if(e&&r.size>0){const[,c,h,d]=e,u=Array.from(r.values()).pop();u&&u.fields.push({name:h,type:c.toUpperCase(),isPK:d==="PK",isFK:d==="FK"})}});const n=[];return r.forEach(({name:i,fields:s})=>{const e=s.map(c=>{let h=`${c.name} ${c.type}`;return c.isPK&&(h+=" PRIMARY KEY"),h}).join(", ");n.push(`CREATE TABLE ${i} (${e});`)}),n.join(`
`)}function _w(a){const t=a.split(`
`).slice(1),r=[],n=new Map;let i="",s=0,e="";return t.forEach(c=>{if(c=c.trim(),!c||c.startsWith("%%"))return;const h=c.match(/^title\s+(.+)/i);if(h){e=h[1].trim();return}if(/^(dateFormat|axisFormat|excludes|todayMarker|tickInterval|weekday)/i.test(c))return;if(c.toLowerCase().startsWith("section")){i=c.replace(/^section\s*/i,"").trim(),r.push(`== ${i} ==`);return}const d=c.match(/^(.+?)\s*:\s*(.+)$/);if(d){const u=d[1].trim(),m=d[2].trim().split(",").map(w=>w.trim()),g=[];let y=null,l=null,p=null,x=null;m.forEach(w=>{/^(done|active|crit|milestone)$/i.test(w)?g.push(w.toLowerCase()):/^after\s+/i.test(w)?l=w.replace(/^after\s+/i,"").trim():/^\d+d?$/.test(w)?x=parseInt(w):/^\d{4}-\d{2}-\d{2}$/.test(w)||/^\d+$/.test(w)?p?x||(x=parseInt(w)):p=w:/^\w+$/.test(w)&&!y&&(y=w)}),x||(x=1);let b=s;if(l&&n.has(l)){const w=n.get(l);b=w.start+w.duration}else p&&/^\d+$/.test(p)&&(b=parseInt(p));y&&n.set(y,{start:b,duration:x});let C=`${u}, ${b}, ${x}`;g.length>0&&(C+=` [${g.join(", ")}]`),l&&(C+=` after:${l}`),r.push(C),s=b+x}}),e&&(r.unshift(`title: ${e}`),r.splice(1,0,"")),r.join(`
`)}function Dw(a){const t=a.split(`
`).slice(1),r=[];return t.forEach(n=>{if(n=n.trim(),!n||n.startsWith("%%")||n.startsWith("title"))return;const i=n.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);i&&r.push({label:i[1],value:parseFloat(i[2])})}),r.map(n=>`"${n.label}": ${n.value}`).join(`
`)}function Lw(a){const t=a.split(`
`).slice(1),r=[];return t.forEach(n=>{if(n=n.trim(),!n||n.startsWith("%%"))return;const i=n.match(/^commit(?:\s+id:\s*"([^"]+)")?(?:\s+msg:\s*"([^"]+)")?/i);if(i){const h=i[2]||i[1]||"Commit";r.push(`commit "${h}"`);return}const s=n.match(/^branch\s+(\w+)/i);if(s){r.push(`branch ${s[1]}`);return}const e=n.match(/^checkout\s+(\w+)/i);if(e){r.push(`checkout ${e[1]}`);return}const c=n.match(/^merge\s+(\w+)/i);if(c){r.push(`merge ${c[1]}`);return}}),r.join(`
`)}function Nw(a){const t=a.split(`
`),r=[];let n="",i=null;t.forEach(c=>{if(c=c.trim(),!c||c.startsWith("%%")||c.toLowerCase()==="journey")return;const h=c.match(/^title\s+(.+)/i);if(h){n=h[1].trim();return}const d=c.match(/^section\s+(.+)/i);if(d){i={name:d[1].trim(),tasks:[]},r.push(i);return}const u=c.match(/^(.+?):\s*(\d+)(?:\s*:\s*(.+))?$/);if(u&&i){const f=u[1].trim(),m=parseInt(u[2]),g=u[3]||"",y=g?g.split(",").map(l=>l.trim()).filter(l=>l):[];i.tasks.push({task:f,score:m,actors:y})}});const s=[];n&&(s.push(`title: ${n}`),s.push(""));const e=new Set;return r.forEach(c=>{c.tasks.forEach(h=>h.actors.forEach(d=>e.add(d)))}),e.size>0&&(s.push(`actors: ${[...e].join(", ")}`),s.push("")),r.forEach(c=>{s.push(`== ${c.name} ==`),c.tasks.forEach(h=>{const d=h.actors.length>0?` | ${h.actors.join(", ")}`:"";s.push(`- ${h.task} | ${h.score}${d}`)}),s.push("")}),s.join(`
`)}function Bw(a){const t=a.split(`
`).slice(1),r=[];return t.forEach(n=>{if(!n.trim()||n.trim().startsWith("%%"))return;const i=n.match(/^(\s*)/)[1].length,s=n.trim().replace(/^\(\((.+)\)\)$/,"$1").replace(/^\((.+)\)$/,"$1").replace(/^\[(.+)\]$/,"$1").replace(/^{{(.+)}}$/,"$1");s&&r.push("  ".repeat(Math.floor(i/2))+s)}),r.join(`
`)}function Ww(a){const t=a.split(`
`),r=t[0].trim().toLowerCase();r.includes("c4container")||r.includes("c4component")||r.includes("c4dynamic")||r.includes("c4deployment");const n=new Map,i=[],s=[],e=new Map,c=l=>{const p=l.match(/^(\w+)\s*\((.+)\)\s*$/);if(!p)return null;const x=p[1],b=p[2],C=[];let w="",k=!1,S="";for(let E=0;E<b.length;E++){const j=b[E];(j==='"'||j==="'")&&!k?(k=!0,S=j):j===S&&k?(k=!1,S=""):j===","&&!k?(C.push(w.trim().replace(/^["']|["']$/g,"")),w=""):w+=j}return w.trim()&&C.push(w.trim().replace(/^["']|["']$/g,"")),{funcName:x,args:C}};t.slice(1).forEach(l=>{if(l=l.trim(),!l||l.startsWith("%%")||l.startsWith("title"))return;const p=l.match(/^(Enterprise_Boundary|System_Boundary|Container_Boundary|Boundary)\s*\(([^,]+),\s*["']([^"']+)["'](?:,\s*["']([^"']+)["'])?\s*\)/i);if(p){const S=p[2].trim(),E=p[3],j=p[4]||p[1].replace("_Boundary","").toLowerCase(),$=s.length>0?s[s.length-1].alias:null;e.set(S,{label:E,type:j,parentBoundary:$}),s.push({type:p[1],alias:S,label:E});return}if(l==="}"||l==="{"){l==="}"&&s.length>0&&s.pop();return}if(l.startsWith("Update"))return;const x=c(l);if(!x)return;const{funcName:b,args:C}=x,w=b.toLowerCase(),k=s.length>0?s[s.length-1].alias:null;if(w.startsWith("person")){const S=w.includes("_ext");n.set(C[0],{type:S?"external":"clients",label:C[1]||C[0],description:C[2]||"",boundary:k});return}if(w.startsWith("system")){const S=w.includes("_ext"),E=w.includes("db"),j=w.includes("queue");let $="service";S?$="external":E?$="database":j&&($="service"),n.set(C[0],{type:$,label:C[1]||C[0],description:C[2]||"",technology:"",boundary:k});return}if(w.startsWith("container")){const S=w.includes("_ext"),E=w.includes("db"),j=w.includes("queue");let $="service";S?$="external":E?$="database":j&&($="service"),n.set(C[0],{type:$,label:C[1]||C[0],technology:C[2]||"",description:C[3]||"",boundary:k});return}if(w.startsWith("component")){const S=w.includes("_ext"),E=w.includes("db");let j="service";S?j="external":E&&(j="database"),n.set(C[0],{type:j,label:C[1]||C[0],technology:C[2]||"",description:C[3]||"",boundary:k});return}if(w==="node"||w==="node_l"||w==="node_r"){n.set(C[0],{type:"service",label:C[1]||C[0],technology:C[2]||"",description:C[3]||"",boundary:k});return}if(w.startsWith("deployment_node")){n.set(C[0],{type:"service",label:C[1]||C[0],technology:C[2]||"",description:C[3]||"",boundary:k});return}if(w.startsWith("rel")||w==="birel"){const S=w==="birel";let E,j,$,R;w==="relindex"?(E=C[1],j=C[2],$=C[3]||"",R=C[4]||""):(E=C[0],j=C[1],$=C[2]||"",R=C[3]||""),i.push({from:E,to:j,label:R?`${$} [${R}]`:$,bidirectional:S});return}});const h=[],d=new Map,u=[];n.forEach((l,p)=>{l.boundary?(d.has(l.boundary)||d.set(l.boundary,[]),d.get(l.boundary).push({alias:p,...l})):u.push({alias:p,...l})});const f=l=>{const p=new Map;l.forEach(b=>{p.has(b.type)||p.set(b.type,[]),p.get(b.type).push(b)});const x=["clients","external","gateway","service","database"];x.forEach(b=>{const C=p.get(b);if(C&&C.length>0){const w=C.map(k=>k.label);h.push(`[${b}] ${w.join(", ")}`)}}),p.forEach((b,C)=>{if(!x.includes(C)&&b.length>0){const w=b.map(k=>k.label);h.push(`[${C}] ${w.join(", ")}`)}})};u.length>0&&(f(u),h.push(""));const m=[],g=new Map;e.forEach((l,p)=>{l.parentBoundary?(g.has(l.parentBoundary)||g.set(l.parentBoundary,[]),g.get(l.parentBoundary).push(p)):m.push(p)});const y=(l,p="")=>{const x=e.get(l);if(!x)return;const b=d.get(l)||[],C=g.get(l)||[];if(!(b.length===0&&C.length===0)){if(h.push(`${p}group "${x.label}" {`),b.length>0){const w=new Map;b.forEach(S=>{w.has(S.type)||w.set(S.type,[]),w.get(S.type).push(S)});const k=["clients","external","gateway","service","database"];k.forEach(S=>{const E=w.get(S);if(E&&E.length>0){const j=E.map($=>$.label);h.push(`${p}  [${S}] ${j.join(", ")}`)}}),w.forEach((S,E)=>{if(!k.includes(E)&&S.length>0){const j=S.map($=>$.label);h.push(`${p}  [${E}] ${j.join(", ")}`)}})}C.length>0&&(b.length>0&&h.push(""),C.forEach(w=>{y(w,p+"  ")})),h.push(`${p}}`),h.push("")}};return m.forEach(l=>{y(l)}),i.forEach(l=>{const p=n.get(l.from),x=n.get(l.to),b=(p==null?void 0:p.label)||l.from,C=(x==null?void 0:x.label)||l.to;l.bidirectional?h.push(`${b} <-> ${C}: ${l.label}`):l.label?h.push(`${b} -> ${C}: ${l.label}`):h.push(`${b} -> ${C}`)}),h.join(`
`)}function zw(a){const t=a.split(`
`),r=[];let n="",i="";return t.forEach(s=>{if(s=s.trim(),!s||s.startsWith("%%")||s.toLowerCase()==="timeline")return;const e=s.match(/^title\s+(.+)/i);if(e){n=e[1].trim();return}const c=s.match(/^section\s+(.+)/i);if(c){i=c[1].trim(),r.push(`== ${i} ==`);return}const h=s.match(/^(.+?)\s*:\s*(.+)/);if(h){const d=h[1].trim();h[2].split(":").map(f=>f.trim()).filter(f=>f).forEach(f=>{r.push(`${d}: ${f}`)})}}),n&&(r.unshift(`title: ${n}`),r.splice(1,0,"")),r.join(`
`)}function Ow(a){const t=a.split(`
`),r=[];let n="";const i={x:{left:"",right:""},y:{bottom:"",top:""}},s={},e=[];return t.forEach(c=>{var g,y;if(c=c.trim(),!c||c.startsWith("%%")||c.toLowerCase()==="quadrantchart")return;const h=c.match(/^title\s+(.+)/i);if(h){n=h[1].trim();return}const d=c.match(/^x-axis\s+(.+?)(?:\s*-->\s*(.+))?$/i);if(d){i.x.left=d[1].trim(),i.x.right=((g=d[2])==null?void 0:g.trim())||"";return}const u=c.match(/^y-axis\s+(.+?)(?:\s*-->\s*(.+))?$/i);if(u){i.y.bottom=u[1].trim(),i.y.top=((y=u[2])==null?void 0:y.trim())||"";return}const f=c.match(/^quadrant-(\d)\s+(.+)/i);if(f){s[f[1]]=f[2].trim();return}const m=c.match(/^(.+?)(?::::\w+)?:\s*\[([0-9.]+),\s*([0-9.]+)\]/);m&&e.push({name:m[1].trim(),x:parseFloat(m[2]),y:parseFloat(m[3])})}),n&&r.push(`title: ${n}`),i.x.left&&r.push(`x-axis: ${i.x.left}${i.x.right?" -> "+i.x.right:""}`),i.y.bottom&&r.push(`y-axis: ${i.y.bottom}${i.y.top?" -> "+i.y.top:""}`),Object.entries(s).forEach(([c,h])=>{r.push(`quadrant-${c}: ${h}`)}),r.push(""),e.forEach(c=>{r.push(`"${c.name}": [${c.x}, ${c.y}]`)}),r.join(`
`)}function qw(a){const t=a.split(`
`),r=[],n=[];return t.forEach(i=>{if(i=i.trim(),!i||i.startsWith("%%")||i.toLowerCase().startsWith("sankey"))return;const s=[];let e="",c=!1;for(let h=0;h<i.length;h++){const d=i[h];d==='"'&&!c?c=!0:d==='"'&&c?c=!1:d===","&&!c?(s.push(e.trim()),e=""):e+=d}if(e.trim()&&s.push(e.trim()),s.length>=3){const[h,d,u]=s;n.push({source:h,target:d,value:parseFloat(u)})}}),n.forEach(i=>{r.push(`"${i.source}" -> "${i.target}": ${i.value}`)}),r.join(`
`)}function Fw(a){const t=a.split(`
`),r=[],n=[];let i=null;return t.forEach(s=>{if(s=s.trim(),!s||s.startsWith("%%")||s.toLowerCase()==="requirementdiagram")return;const e=s.match(/^(requirement|functionalRequirement|interfaceRequirement|performanceRequirement|physicalRequirement|designConstraint)\s+(\w+)\s*\{?/i);if(e){i={type:e[1],name:e[2],id:"",text:"",risk:"",verifyMethod:""};return}const c=s.match(/^element\s+(\w+)\s*\{?/i);if(c){i={type:"element",name:c[1]};return}if(s==="}"){i&&(n.push(i),i=null);return}if(i){const d=s.match(/^(\w+):\s*(.+)/);d&&(i[d[1]]=d[2])}const h=s.match(/^(\w+)\s*-\s*(satisfies|traces|contains|copies|derives|verifies|refines)\s*->\s*(\w+)/i);h&&r.push(`${h[1]} -${h[2]}-> ${h[3]}`)}),n.forEach(s=>{if(s.type==="element")r.unshift(`[element] ${s.name}: ${s.type||""}`);else{const e=[];s.id&&e.push(`id: ${s.id}`),s.text&&e.push(`"${s.text}"`),s.risk&&e.push(`risk: ${s.risk}`),r.unshift(`[${s.type}] ${s.name}: ${e.join(", ")}`)}}),r.join(`
`)}function Uw(a){const t=Mw(a);if(!t)throw new Error("Could not detect Mermaid diagram type. Supported types: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap, c4, timeline, quadrant, sankey, requirement");let r="",n=t;switch(t){case"flowchart":{const i=Aw(a);r=i.source,n=i.type;break}case"sequence":r=$w(a);break;case"class":r=Iw(a);break;case"state":r=Tw(a);break;case"erd":r=Pw(a);break;case"gantt":r=_w(a);break;case"pie":r=Dw(a);break;case"git":r=Lw(a);break;case"journey":r=Nw(a);break;case"mindmap":r=Bw(a);break;case"c4":r=Ww(a),n="architecture";break;case"timeline":r=zw(a);break;case"quadrant":r=Ow(a);break;case"sankey":r=qw(a);break;case"requirement":r=Fw(a);break;default:throw new Error(`Unsupported Mermaid diagram type: ${n}`)}return{type:n,source:r}}function Gw(a){const t=["flowchart TD"],r=new Map;let n=0;const i=s=>{const e=s.toLowerCase().replace(/[^a-z0-9]/g,"_");return r.has(e)||r.set(e,`N${n++}`),r.get(e)};return a.split(`
`).forEach(s=>{if(s=s.trim(),!s||s.startsWith("#"))return;const e=s.split(/\s*->\s*/);if(e.length>=2)for(let c=0;c<e.length-1;c++){const h=e[c].match(/^\((\w+)\)\s*(.+)/)||[null,"process",e[c]],d=e[c+1].match(/^\((\w+)\)\s*(.+)/)||[null,"process",e[c+1]],u=h[1],f=h[2].trim(),m=d[1];let g=d[2].trim(),y="";const l=g.match(/^(.+?):\s*(.+)$/);l&&(g=l[1].trim(),y=l[2].trim());const p=i(f),x=i(g),b=(k,S,E)=>{switch(k){case"decision":return`${E}{${S}}`;case"start":case"end":return`${E}((${S}))`;case"io":return`${E}[/${S}/]`;default:return`${E}[${S}]`}},C=b(u,f,p),w=b(m,g,x);y?t.push(`    ${C} -->|${y}| ${w}`):t.push(`    ${C} --> ${w}`)}}),t.join(`
`)}function Hw(a){const t=["sequenceDiagram"];return a.split(`
`).forEach(r=>{if(r=r.trim(),!r||r.startsWith("#"))return;if(r.toLowerCase().startsWith("participant")){r.replace(/^participant\s+/i,"").split(",").map(s=>s.trim()).forEach(s=>t.push(`    participant ${s}`));return}const n=r.match(/^(\w+)\s*(-->?)\s*(\w+)\s*:\s*(.+)/);if(n){const[,i,s,e,c]=n,h=s==="-->"?"-->>":"->>";t.push(`    ${i}${h}${e}: ${c}`)}}),t.join(`
`)}function Yw(a){const t=["classDiagram"];let r=null;return a.split(`
`).forEach(n=>{if(n=n.trim(),!n)return;if(n.startsWith("class ")){r=n.replace("class ","").trim(),t.push(`    class ${r}`);return}if(r&&/^[+\-#~]/.test(n)){t.push(`    ${r} : ${n}`);return}const i=n.match(/^(\w+)\s*(-->|--\*|--o|--|>|\.\.>)\s*(\w+)(?:\s*:\s*(.+))?/);if(i){const[,s,e,c,h]=i;let d="-->";e==="--|>"?d="--|>":e==="--*"?d="*--":e==="--o"?d="o--":e==="..>"&&(d="..>");const u=h?`${s} ${d} ${c} : ${h}`:`${s} ${d} ${c}`;t.push(`    ${u}`),r=null}}),t.join(`
`)}function Vw(a){const t=["stateDiagram-v2"],r=[],n=[];return a.split(`
`).forEach(i=>{if(i=i.trim(),!i||i.startsWith("#"))return;const s=i.match(/^\((\w+)\)\s*(\w+)/);if(s){s[1]==="initial"&&r.push(s[2]),s[1]==="final"&&n.push(s[2]);return}const e=i.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);if(e){const[,c,h,d]=e,u=d?`${c} --> ${h} : ${d}`:`${c} --> ${h}`;t.push(`    ${u}`)}}),r.forEach(i=>t.unshift(`    [*] --> ${i}`)),n.forEach(i=>t.push(`    ${i} --> [*]`)),t.join(`
`)}function Kw(a){const t=["erDiagram"],r=/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi,n=[];let i;for(;(i=r.exec(a))!==null;){const s=i[1],e=i[2];t.push(`    ${s} {`),e.split(",").forEach(c=>{if(c=c.trim(),!c||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)/i.test(c))return;const h=c.match(/^[`"']?(\w+)[`"']?\s+(\w+)/);if(h){const[,d,u]=h,f=/PRIMARY\s+KEY/i.test(c),m=/REFERENCES/i.test(c);let g=u.toLowerCase();f&&(g=`${g} PK`),m&&(g=`${g} FK`),t.push(`        ${g} ${d}`);const y=c.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);y&&n.push({from:s,to:y[1],field:d})}}),t.push("    }")}return n.forEach(s=>{t.push(`    ${s.to} ||--o{ ${s.from} : "has"`)}),t.join(`
`)}function Xw(a){const t=["gantt","    dateFormat X","    axisFormat %d"];return a.split(`
`).forEach(r=>{if(r=r.trim(),!r||r.startsWith("#"))return;const n=r.match(/^(.+?),\s*(\d+),\s*(\d+)/);if(n){const[,i,s,e]=n;t.push(`    ${i.trim()} :${s}, ${e}d`)}}),t.join(`
`)}function Qw(a){const t=["pie showData"];return a.split(`
`).forEach(r=>{if(r=r.trim(),!r||r.startsWith("#"))return;const n=r.match(/"([^"]+)"\s*:\s*(\d+(?:\.\d+)?)/);n&&t.push(`    "${n[1]}" : ${n[2]}`)}),t.join(`
`)}function Zw(a){const t=["gitGraph"];return a.split(`
`).forEach(r=>{if(r=r.trim(),!r||r.startsWith("#"))return;const n=r.match(/^commit\s+"([^"]+)"/i);if(n){t.push(`    commit id: "${n[1]}"`);return}const i=r.match(/^branch\s+(\w+)/i);if(i){t.push(`    branch ${i[1]}`);return}const s=r.match(/^checkout\s+(\w+)/i);if(s){t.push(`    checkout ${s[1]}`);return}const e=r.match(/^merge\s+(\w+)/i);if(e){t.push(`    merge ${e[1]}`);return}}),t.join(`
`)}function Jw(a){const t=["journey","    title User Journey"],r=[],n=[];return a.split(`
`).forEach(i=>{var e;if(i=i.trim(),!i||i.startsWith("#"))return;const s=i.match(/^\[(\w+)\]\s*(.+?)(?:\s*:\s*(.+))?$/);if(s&&!i.includes("->")){r.push({type:s[1],label:s[2],desc:s[3]});return}if(i.includes("->")){const c=i.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+)$/);c&&n.push({from:c[1].trim(),label:(e=c[2])==null?void 0:e.trim(),to:c[3].trim()})}}),t.push("    section Journey"),r.filter(i=>i.type!=="actor").forEach((i,s)=>{const e=5-Math.floor(s/2);t.push(`        ${i.label}: ${Math.max(1,Math.min(5,e))}`)}),t.join(`
`)}function e2(a){const t=["mindmap"];return a.split(`
`).forEach(r=>{if(!r.trim())return;const n=r.match(/^(\s*)/)[1].length,i=Math.floor(n/2),s=r.trim();s&&t.push("  ".repeat(i+1)+s)}),t.join(`
`)}function t2(a,t){switch(a){case"flowchart":return Gw(t);case"sequence":return Hw(t);case"class":return Yw(t);case"state":return Vw(t);case"erd":return Kw(t);case"gantt":return Xw(t);case"pie":return Qw(t);case"git":return Zw(t);case"journey":return Jw(t);case"mindmap":return e2(t);default:throw new Error(`Cannot export "${a}" to Mermaid. Supported types: flowchart, sequence, class, state, erd, gantt, pie, git, journey, mindmap`)}}function r2(a,t="diagram"){const r=new Blob([a],{type:"text/plain"}),n=URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download=`${t}.mmd`,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(n),100)}async function n2(a){await navigator.clipboard.writeText(a)}function a2(a){const[t,r]=M.useState({past:[],present:{...a,timestamp:Date.now(),changeType:"initial"},future:[]}),n=M.useRef(!1),i=M.useCallback((u,f="unknown")=>{n.current||r(m=>m.present.source===u.source&&m.present.type===u.type&&m.present.diagramName===u.diagramName&&JSON.stringify(m.present.positions)===JSON.stringify(u.positions)?m:{past:[...m.past.slice(-49),m.present],present:{...u,timestamp:Date.now(),changeType:f},future:[]})},[]),s=M.useCallback(()=>{r(u=>{if(u.past.length===0)return u;const f=u.past[u.past.length-1];return n.current=!0,setTimeout(()=>{n.current=!1},0),{past:u.past.slice(0,-1),present:f,future:[u.present,...u.future]}})},[]),e=M.useCallback(()=>{r(u=>{if(u.future.length===0)return u;const f=u.future[0];return n.current=!0,setTimeout(()=>{n.current=!1},0),{past:[...u.past,u.present],present:f,future:u.future.slice(1)}})},[]),c=M.useCallback(()=>{r(u=>({past:[],present:u.present,future:[]}))},[]),h=M.useCallback(u=>{r({past:[],present:{...u,timestamp:Date.now(),changeType:"reset"},future:[]})},[]),d=M.useCallback(()=>n.current,[]);return{state:t.present,canUndo:t.past.length>0,canRedo:t.future.length>0,historyLength:t.past.length,futureLength:t.future.length,undo:s,redo:e,pushState:i,clear:c,reset:h,isApplying:d}}const qt={flowchart:{name:"Flowchart",description:"Process flows with decisions and steps",aliases:["flow","process"]},sequence:{name:"Sequence Diagram",description:"Message passing between participants over time",aliases:["seq"]},mindmap:{name:"Mind Map",description:"Hierarchical tree structure for concepts and ideas",aliases:["tree","wbs"]},architecture:{name:"Architecture Diagram",description:"System architecture with layers, components, and connections",aliases:["arch","system"]},c4:{name:"C4 Diagram",description:"C4 model diagrams (Context, Container, Component, Code)",aliases:["c4model"]},erd:{name:"ERD",description:"Entity Relationship Diagram using SQL CREATE TABLE syntax",aliases:["database","db","sql"]},state:{name:"State Machine",description:"State transitions with events",aliases:["statemachine","fsm"]},journey:{name:"User Journey",description:"User flow through pages and actions",aliases:["userjourney","userflow"]},timeline:{name:"Timeline",description:"Chronological events with dates",aliases:["roadmap"]},orgchart:{name:"Organization Chart",description:"Hierarchical organization structure",aliases:["org","hierarchy"]},network:{name:"Network Diagram",description:"Network topology with devices and connections",aliases:["topology"]},gantt:{name:"Gantt Chart",description:"Project timeline with tasks and durations",aliases:["project"]},class:{name:"Class Diagram",description:"UML class diagram with properties and methods",aliases:["uml"]},usecase:{name:"Use Case Diagram",description:"Actors and their interactions with the system",aliases:["usecases"]},pie:{name:"Pie Chart",description:"Proportional data visualization",aliases:["piechart"]},quadrant:{name:"Quadrant Diagram",description:"2x2 matrix for prioritization and analysis",aliases:["matrix","priority"]},git:{name:"Git Graph",description:"Git branch and commit visualization",aliases:["gitgraph","branches"]},deployment:{name:"Deployment Diagram",description:"Infrastructure and deployment topology",aliases:["infra","infrastructure"]},wireframe:{name:"Wireframe",description:"UI mockup with components",aliases:["ui","mockup"]},activity:{name:"Activity Diagram",description:"UML activity diagram with actions and decisions",aliases:["workflow"]},component:{name:"Component Diagram",description:"System components and their dependencies",aliases:["components"]},requirement:{name:"Requirement Diagram",description:"Requirements with risk and priority levels",aliases:["requirements","specs"]}},Lt={flowchart:`
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
`,sequence:`
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
`,mindmap:`
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
`,architecture:`
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
`,c4:`
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
`,erd:`
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
`,state:`
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
`,journey:`
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
`,timeline:`
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
`,orgchart:`
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
`,network:`
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
`,gantt:`
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
`,class:`
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
`,usecase:`
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
`,pie:`
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
`,quadrant:`
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
`,git:`
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
`,deployment:`
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
`,wireframe:`
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
`,activity:`
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
`,component:`
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
`,requirement:`
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
`},Nc=`# DDFlow DSL Reference

This is the complete DSL syntax reference for DDFlow diagram generation.
Use this reference when prompting AI to generate diagram DSL.

## Supported Diagram Types

${Object.entries(qt).map(([a,t])=>`- **${a}** - ${t.description}`).join(`
`)}

---

${Object.entries(Lt).map(([a,t])=>t).join(`
---
`)}
`,Bc=`You are a diagram DSL generator for DDFlow. Generate ONLY valid DDFlow DSL code based on user descriptions.

CRITICAL RULES:
1. Output ONLY the DSL code - no explanations, no markdown code blocks
2. Start with: <!-- type: DIAGRAM_TYPE -->
3. Use EXACT syntax from the reference below
4. For hierarchical data (mind maps, org charts) use INDENTATION, not arrows

${Nc}

---

USER REQUEST:
{USER_INPUT}

Generate the DDFlow DSL:`;function Eg(a){var r;const t=a.toLowerCase();if(Lt[t])return Lt[t];for(const[n,i]of Object.entries(qt))if((r=i.aliases)!=null&&r.includes(t))return Lt[n];return null}function jg(){return Object.keys(qt)}function o2(a){return qt[a.toLowerCase()]||null}function Mg(a){return Bc.replace("{USER_INPUT}",a)}function Ag(){return`DDFlow DSL Quick Reference

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

Always start with: <!-- type: TYPENAME -->`}const i2={DIAGRAM_TYPES:qt,DSL_SYNTAX:Lt,DSL_REFERENCE:Nc,AI_PROMPT_TEMPLATE:Bc,getDSLForType:Eg,getAvailableTypes:jg,getTypeInfo:o2,createAIPrompt:Mg,getCompactReference:Ag};function s2(a,t){let r=null;const n=(...i)=>{r&&clearTimeout(r),r=setTimeout(()=>a(...i),t)};return n.cancel=()=>{r&&clearTimeout(r)},n}const Se={dark:{name:"dark",background:"linear-gradient(135deg, #0a0a0f, #1a1a2e, #0f0f1a)",canvasBg:"rgba(0,0,0,0.4)",gridColor:"rgba(124,58,237,0.04)",textPrimary:"#ffffff",textSecondary:"#888888",textMuted:"#555555",border:"rgba(255,255,255,0.1)",surface:"rgba(15, 23, 42, 0.95)",cardBg:"rgba(15, 23, 42, 0.95)",headerBg:"transparent",toolbarBg:"transparent",editorBg:"rgba(0,0,0,0.3)",editorText:"#a78bfa",buttonBg:"rgba(255,255,255,0.05)",buttonActiveBg:"rgba(124,58,237,0.3)",modalBg:"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",inputBg:"rgba(0,0,0,0.3)",logoGradient:"linear-gradient(135deg, #fff, #a78bfa)"},light:{name:"light",background:"linear-gradient(135deg, #f8fafc, #e2e8f0, #f1f5f9)",canvasBg:"rgba(255,255,255,0.7)",gridColor:"rgba(124,58,237,0.08)",textPrimary:"#1e293b",textSecondary:"#64748b",textMuted:"#94a3b8",border:"rgba(0,0,0,0.1)",surface:"rgba(255, 255, 255, 0.95)",cardBg:"rgba(255, 255, 255, 0.95)",headerBg:"rgba(255,255,255,0.8)",toolbarBg:"rgba(255,255,255,0.6)",editorBg:"rgba(255,255,255,0.95)",editorText:"#7c3aed",buttonBg:"rgba(0,0,0,0.05)",buttonActiveBg:"rgba(124,58,237,0.2)",modalBg:"linear-gradient(135deg, rgba(255,255,255,0.98), rgba(241,245,249,0.98))",inputBg:"rgba(255,255,255,0.9)",logoGradient:"linear-gradient(135deg, #1e293b, #7c3aed)"}},Rg="ddflow_theme";function c2(){try{return localStorage.getItem(Rg)||"dark"}catch{return"dark"}}function l2(a){try{localStorage.setItem(Rg,a)}catch{}}const $g="ddflow_sketch_mode";function d2(){try{return localStorage.getItem($g)==="true"}catch{return!1}}function u2(a){try{localStorage.setItem($g,a?"true":"false")}catch{}}const ve={stroke:"#333333",fill:"#faf9f6",accent:"#5c5c5c"},v={purple:"#7C3AED",blue:"#0EA5E9",green:"#10B981",orange:"#F59E0B",pink:"#EC4899",red:"#EF4444",cyan:"#06B6D4",violet:"#8B5CF6",teal:"#14B8A6",amber:"#D97706",indigo:"#6366F1",rose:"#F43F5E",emerald:"#059669",sky:"#0284C7",fuchsia:"#D946EF",lime:"#84CC16",slate:"#64748B",zinc:"#71717A",yellow:"#EAB308"},Qh={clients:"#dcfce7",client:"#dcfce7",frontend:"#dcfce7",web:"#dcfce7",mobile:"#dcfce7",users:"#dcfce7",user:"#dcfce7",gateway:"#fef9c3",gateways:"#fef9c3",api:"#fef9c3",lb:"#fef9c3",loadbalancer:"#fef9c3",proxy:"#fef9c3",cdn:"#fef9c3",services:"#dbeafe",service:"#dbeafe",backend:"#dbeafe",microservices:"#dbeafe",microservice:"#dbeafe",functions:"#dbeafe",data:"#f3e8ff",database:"#f3e8ff",databases:"#f3e8ff",storage:"#f3e8ff",db:"#f3e8ff",cache:"#fecaca",redis:"#fecaca",memcached:"#fecaca",queue:"#fef3c7",queues:"#fef3c7",kafka:"#fef3c7",messaging:"#fef3c7",eventbus:"#fef3c7",monitoring:"#fae8ff",metrics:"#fae8ff",logging:"#fae8ff",auth:"#e0e7ff",security:"#e0e7ff",identity:"#e0e7ff",external:"#f1f5f9",thirdparty:"#f1f5f9",saas:"#f1f5f9",default:"#f1f5f9"},Zh={clients:"#86efac",client:"#86efac",frontend:"#86efac",web:"#86efac",mobile:"#86efac",users:"#86efac",user:"#86efac",gateway:"#fde047",gateways:"#fde047",api:"#fde047",lb:"#fde047",loadbalancer:"#fde047",proxy:"#fde047",cdn:"#fde047",services:"#93c5fd",service:"#93c5fd",backend:"#93c5fd",microservices:"#93c5fd",microservice:"#93c5fd",functions:"#93c5fd",data:"#d8b4fe",database:"#d8b4fe",databases:"#d8b4fe",storage:"#d8b4fe",db:"#d8b4fe",cache:"#fca5a5",redis:"#fca5a5",memcached:"#fca5a5",queue:"#fcd34d",queues:"#fcd34d",kafka:"#fcd34d",messaging:"#fcd34d",eventbus:"#fcd34d",monitoring:"#f0abfc",metrics:"#f0abfc",logging:"#f0abfc",auth:"#a5b4fc",security:"#a5b4fc",identity:"#a5b4fc",external:"#cbd5e1",thirdparty:"#cbd5e1",saas:"#cbd5e1",default:"#cbd5e1"},pe=[v.purple,v.blue,v.green,v.orange,v.pink,v.cyan,v.violet,v.teal],jt=(a,t=!1)=>t?ve.fill:`linear-gradient(135deg, ${a}70, ${a}50)`,Je=(a,t,r,n=!1)=>n?"none":t?`0 0 0 2px ${a}, 0 12px 28px ${a}50, 0 20px 40px rgba(0,0,0,0.25)`:r?`0 0 0 3px rgba(124,58,237,0.7), 0 8px 24px rgba(124,58,237,0.35), 0 16px 32px ${a}25`:`0 2px 4px rgba(0,0,0,0.08), 0 8px 20px ${a}25, 0 16px 40px ${a}12`,Jr=(a=!1)=>a?"'Caveat', cursive":"system-ui, -apple-system, sans-serif",p2=(a,t=!1)=>{if(t){if(typeof a=="string"){const r=parseFloat(a),n=a.replace(/[\d.]/g,"")||"px";return`${r*1.25}${n}`}return a*1.25}return a},nr=(a,t,r,n)=>{const i=r-a,s=n-t,e=Math.sqrt(i*i+s*s),c=Math.min(Math.max(e*.3,20),80);if(e<30)return`M ${a} ${t} L ${r} ${n}`;if(Math.abs(i)>Math.abs(s)*1.2){const f=i>0?1:-1,m=s*.1;return`M ${a} ${t} C ${a+c*f} ${t+m}, ${r-c*f} ${n-m}, ${r} ${n}`}if(Math.abs(s)>Math.abs(i)*1.2){const f=s>0?1:-1,m=i*.1;return`M ${a} ${t} C ${a+m} ${t+c*f}, ${r-m} ${n-c*f}, ${r} ${n}`}const h=i>0?1:-1,d=s>0?1:-1,u=c*.7;return`M ${a} ${t} C ${a+u*h} ${t+u*d*.3}, ${r-u*h} ${n-u*d*.3}, ${r} ${n}`},Ig=(a,t,r,n,i=!1)=>{if(!i)return nr(a,t,r,n);const s=r-a,e=n-t,c=Math.sqrt(s*s+e*e),h=Math.max(3,Math.floor(c/40)),d=[];for(let f=0;f<=h;f++){const m=f/h;let g=a+s*m,y=t+e*m;f>0&&f<h&&(g+=(Math.random()-.5)*3*2,y+=(Math.random()-.5)*3*2),d.push({x:g,y})}if(d.length<2)return`M ${a} ${t} L ${r} ${n}`;let u=`M ${d[0].x} ${d[0].y}`;for(let f=1;f<d.length;f++){const m=d[f-1],g=d[f],y=(m.x+g.x)/2,l=(m.y+g.y)/2;u+=` Q ${m.x} ${m.y} ${y} ${l}`}return u+=` L ${d[d.length-1].x} ${d[d.length-1].y}`,u};function Te(a={x:50,y:50}){const t=M.useRef(null),[r,n]=M.useState(a),[i,s]=M.useState(1),[e,c]=M.useState(!1),[h,d]=M.useState({x:0,y:0}),[u,f]=M.useState({}),[m,g]=M.useState(null),[y,l]=M.useState({x:0,y:0}),[p,x]=M.useState(!0),b=25,C=M.useCallback(O=>p?Math.round(O/b)*b:O,[p,b]),[w,k]=M.useState(new Set),[S,E]=M.useState(null),[j,$]=M.useState(""),[R,A]=M.useState({}),[_,T]=M.useState({}),[P,W]=M.useState({}),[N,G]=M.useState({}),V={width:130,height:60},J={width:80,height:40},Z={width:300,height:200},[ae,q]=M.useState(null),[L,X]=M.useState(null),[I,B]=M.useState(null),[z,ce]=M.useState(null),[xe,ue]=M.useState(!1),[_e,Re]=M.useState(null),[ne,U]=M.useState(""),[Y,ie]=M.useState(!1),[K,te]=M.useState(null),[ee,oe]=M.useState(null),[de,be]=M.useState(null),[ke,ye]=M.useState({}),[je,Le]=M.useState({}),[qe,Fe]=M.useState({}),[nt,at]=M.useState(null),[Ue,Qe]=M.useState({horizontal:[],vertical:[]}),Be=5,We=M.useRef(null),ot=M.useRef(null),Ye=M.useCallback((O,H)=>{if(!t.current)return{x:0,y:0};const se=t.current.getBoundingClientRect();return{x:(O-se.left-r.x)/i,y:(H-se.top-r.y)/i}},[r,i]),en=M.useCallback(O=>{if(O.target===t.current||O.target.classList.contains("canvas-bg"))if(O.shiftKey){const H=Ye(O.clientX,O.clientY);ue(!0),ce({startX:H.x,startY:H.y,endX:H.x,endY:H.y})}else c(!0),d({x:O.clientX-r.x,y:O.clientY-r.y})},[r,Ye]),tn=M.useCallback((O,H,se,ge)=>{if(O.stopPropagation(),X(null),O.shiftKey){k(Ee=>{const ze=new Set(Ee);return ze.has(H)?ze.delete(H):ze.add(H),ze});return}k(new Set([H])),g(H);const Ce=Ye(O.clientX,O.clientY);l({x:Ce.x-se,y:Ce.y-ge})},[Ye]),rn=M.useCallback((O,H,se)=>{O.stopPropagation(),E(H),$(se||""),k(new Set([H]))},[]),nn=M.useCallback(()=>{const O={nodeId:S,newValue:j};return E(null),$(""),O},[S,j]),an=M.useCallback(()=>{E(null),$("")},[]),on=M.useCallback((O,H)=>{O.preventDefault(),O.stopPropagation(),X({nodeId:H,x:O.clientX,y:O.clientY}),w.has(H)||k(new Set([H]))},[w]),ar=M.useCallback(()=>{X(null)},[]),or=M.useCallback((O,H)=>{A(se=>({...se,[O]:H})),X(null)},[]),ir=M.useCallback((O,H)=>{T(se=>({...se,[O]:H}))},[]),sn=M.useCallback((O,H)=>{W(se=>({...se,[O]:H}))},[]),sr=M.useCallback(()=>{k(new Set)},[]),cr=M.useCallback(O=>{if(w.size===0||!O)return;const H=O.filter(ge=>w.has(ge.id));if(H.length===0)return;const se=H.map(ge=>{var Ce,Ee;return{...ge,copiedX:((Ce=u[ge.id])==null?void 0:Ce.x)??ge.x,copiedY:((Ee=u[ge.id])==null?void 0:Ee.y)??ge.y}});return B(se),se},[w,u]),cn=M.useCallback(()=>{if(!I||I.length===0)return null;const O=30;return I.map(H=>({...H,id:`${H.id}_copy_${Date.now()}`,x:H.copiedX+O,y:H.copiedY+O,label:H.label}))},[I]),ln=M.useCallback((O,H,se)=>{O.stopPropagation(),Re(H),U(se||"")},[]),dn=M.useCallback(()=>{const O={edgeId:_e,newValue:ne};return Re(null),U(""),O},[_e,ne]),un=M.useCallback(()=>{Re(null),U("")},[]),pn=M.useCallback((O,H)=>{O.preventDefault(),O.stopPropagation(),at({edgeId:H,x:O.clientX,y:O.clientY})},[]),lr=M.useCallback(()=>{at(null)},[]),dr=M.useCallback((O,H)=>{ye(se=>({...se,[O]:H}))},[]),ur=M.useCallback((O,H)=>{Le(se=>({...se,[O]:H})),at(null)},[]),pr=M.useCallback((O,H)=>{Fe(se=>({...se,[O]:H}))},[]),hr=M.useCallback(O=>N[O]||V,[N]),fr=M.useCallback((O,H,se)=>{O.stopPropagation(),O.preventDefault();const ge=N[H]||V;q({nodeId:H,handle:se,startX:O.clientX,startY:O.clientY,startWidth:ge.width,startHeight:ge.height})},[N]),Ft=M.useCallback((O,H)=>{if(!ae)return;const se=(O-ae.startX)/i,ge=(H-ae.startY)/i;let Ce=ae.startWidth,Ee=ae.startHeight;ae.handle.includes("e")&&(Ce=Math.max(J.width,Math.min(Z.width,ae.startWidth+se))),ae.handle.includes("s")&&(Ee=Math.max(J.height,Math.min(Z.height,ae.startHeight+ge))),p&&(Ce=Math.round(Ce/b)*b,Ee=Math.round(Ee/b)*b,Ce=Math.max(J.width,Ce),Ee=Math.max(J.height,Ee)),G(ze=>({...ze,[ae.nodeId]:{width:Ce,height:Ee}}))},[ae,i,p,b]);M.useCallback(()=>{q(null)},[]);const gr=M.useCallback((O,H,se,ge)=>{O.stopPropagation(),O.preventDefault(),ie(!0),te({nodeId:H,x:se,y:ge}),oe({x:se,y:ge})},[]),mr=M.useCallback(()=>{ie(!1),te(null),oe(null),be(null)},[]),yr=M.useCallback(O=>{Y&&K&&K.nodeId!==O&&be(O)},[Y,K]),xr=M.useCallback(()=>{be(null)},[]),br=M.useCallback((O,H)=>{if(!H||!O)return[];const se=Math.min(H.startX,H.endX),ge=Math.max(H.startX,H.endX),Ce=Math.min(H.startY,H.endY),Ee=Math.max(H.startY,H.endY);return O.filter(ze=>{const He=u[ze.id]||{x:ze.x,y:ze.y};return He.x>=se&&He.x<=ge&&He.y>=Ce&&He.y<=Ee}).map(ze=>ze.id)},[u]),vr=M.useCallback(O=>{if(e)n({x:O.clientX-h.x,y:O.clientY-h.y});else if(ae)Ft(O.clientX,O.clientY);else if(Y){const H=Ye(O.clientX,O.clientY);oe({x:H.x,y:H.y})}else if(xe&&z){const H=Ye(O.clientX,O.clientY);ce(se=>({...se,endX:H.x,endY:H.y}))}else if(m){const H=Ye(O.clientX,O.clientY);let se=H.x-y.x,ge=H.y-y.y;se=C(se),ge=C(ge),f(Ce=>({...Ce,[m]:{x:se,y:ge}}))}else(Ue.horizontal.length>0||Ue.vertical.length>0)&&Qe({horizontal:[],vertical:[]})},[e,h,ae,Ft,Y,xe,z,m,y,Ye,C,Ue]),F=M.useCallback((O,H,se,ge)=>{if(!O||!H){Qe({horizontal:[],vertical:[]});return}const Ce=[],Ee=[];se.forEach(ze=>{if(ze.id===O)return;const He=ge(ze);Math.abs(He.y-H.y)<Be&&Ce.push({y:He.y,fromX:Math.min(He.x,H.x)-50,toX:Math.max(He.x,H.x)+200}),Math.abs(He.x-H.x)<Be&&Ee.push({x:He.x,fromY:Math.min(He.y,H.y)-50,toY:Math.max(He.y,H.y)+100})}),Qe({horizontal:Ce,vertical:Ee})},[Be]),le=M.useCallback(()=>{Qe({horizontal:[],vertical:[]});let O=null;return Y&&K&&de&&(O={source:K.nodeId,target:de}),c(!1),g(null),q(null),ue(!1),ce(null),ie(!1),te(null),oe(null),be(null),O},[Y,K,de]),fe=O=>{if(O.length<2)return null;const H=O[0].clientX-O[1].clientX,se=O[0].clientY-O[1].clientY;return Math.sqrt(H*H+se*se)},Ge=O=>O.length<2?{x:O[0].clientX,y:O[0].clientY}:{x:(O[0].clientX+O[1].clientX)/2,y:(O[0].clientY+O[1].clientY)/2},At=M.useCallback(O=>{if(O.touches.length===2)O.preventDefault(),We.current=fe(O.touches),ot.current=Ge(O.touches);else if(O.touches.length===1){const H=O.touches[0];(O.target===t.current||O.target.classList.contains("canvas-bg"))&&(c(!0),d({x:H.clientX-r.x,y:H.clientY-r.y}))}},[r]),it=M.useCallback((O,H,se,ge)=>{if(O.stopPropagation(),O.touches.length===1){const Ce=O.touches[0];g(H);const Ee=Ye(Ce.clientX,Ce.clientY);l({x:Ee.x-se,y:Ee.y-ge})}},[Ye]),Ve=M.useCallback(O=>{if(O.touches.length===2){O.preventDefault();const H=fe(O.touches),se=Ge(O.touches);if(We.current&&H){const ge=H/We.current;s(Ce=>Math.min(Math.max(Ce*ge,.2),3))}if(ot.current){const ge=se.x-ot.current.x,Ce=se.y-ot.current.y;n(Ee=>({x:Ee.x+ge,y:Ee.y+Ce}))}We.current=H,ot.current=se}else if(O.touches.length===1){const H=O.touches[0];if(e)n({x:H.clientX-h.x,y:H.clientY-h.y});else if(m){O.preventDefault();const se=Ye(H.clientX,H.clientY);f(ge=>({...ge,[m]:{x:se.x-y.x,y:se.y-y.y}}))}}},[e,h,m,y,Ye]),wr=M.useCallback(()=>{c(!1),g(null),We.current=null,ot.current=null},[]),Xg=M.useCallback(O=>{O.preventDefault();const se=1-O.deltaY*.002;s(ge=>Math.min(Math.max(ge*se,.2),3))},[]),Qg=M.useCallback(()=>{n(a),s(1),f({})},[a]),Zg=M.useCallback(O=>{if(!t.current||!O)return;const H=t.current.getBoundingClientRect(),se=60,ge=(H.width-se*2)/O.width,Ce=(H.height-se*2)/O.height,Ee=Math.min(Math.max(Math.min(ge,Ce),.3),1.5),ze=O.x+O.width/2,He=O.y+O.height/2;n({x:H.width/2-ze*Ee,y:H.height/2-He*Ee}),s(Ee)},[]),Jg=M.useCallback((O,H,se)=>{const ge=u[O];return ge?{x:ge.x,y:ge.y}:{x:H,y:se}},[u]);return{canvasRef:t,pan:r,setPan:n,zoom:i,setZoom:s,isPanning:e,dragging:m,positions:u,selectedNodes:w,setSelectedNodes:k,clearSelection:sr,editingNode:S,editValue:j,setEditValue:$,handleNodeDoubleClick:rn,finishEditing:nn,cancelEditing:an,nodeColors:R,setNodeColor:or,nodeIcons:_,setNodeIcon:ir,nodeShapes:P,setNodeShape:sn,nodeSizes:N,getNodeSize:hr,resizing:ae,handleResizeStart:fr,contextMenu:L,handleNodeContextMenu:on,closeContextMenu:ar,clipboard:I,copySelectedNodes:cr,pasteNodes:cn,selectionBox:z,isSelecting:xe,getNodesInSelectionBox:br,editingEdge:_e,edgeEditValue:ne,setEdgeEditValue:U,handleEdgeDoubleClick:ln,finishEdgeEditing:dn,cancelEdgeEditing:un,edgeStyles:ke,setEdgeStyle:dr,edgeArrowTypes:je,setEdgeArrowType:ur,edgePathTypes:qe,setEdgePathType:pr,edgeContextMenu:nt,handleEdgeContextMenu:pn,closeEdgeContextMenu:lr,isConnecting:Y,connectionStart:K,connectionEnd:ee,connectionTarget:de,handlePortMouseDown:gr,cancelConnection:mr,setConnectionTargetNode:yr,clearConnectionTarget:xr,snapToGrid:p,setSnapToGrid:x,alignmentGuides:Ue,updateAlignmentGuides:F,handleCanvasMouseDown:en,handleNodeMouseDown:tn,handleMouseMove:vr,handleMouseUp:le,handleTouchStart:At,handleNodeTouchStart:it,handleTouchMove:Ve,handleTouchEnd:wr,handleWheel:Xg,resetView:Qg,fitToView:Zg,getNodePosition:Jg,setPositions:f}}function Pe({onZoomIn:a,onZoomOut:t,onFit:r,onReset:n,zoom:i,snapToGrid:s,onToggleSnap:e,onAutoLayout:c}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{position:"absolute",bottom:12,left:12,display:"flex",gap:6,zIndex:100},children:[[{l:"+",a},{l:"−",a:t},{l:"Fit",a:r},{l:"Reset",a:n}].map(h=>o.jsx("button",{onClick:h.a,style:{minWidth:h.l.length>1?"auto":36,height:36,padding:h.l.length>1?"0 12px":0,background:"rgba(0,0,0,0.7)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,color:"#fff",fontSize:h.l.length>1?"0.75rem":"1.2rem",cursor:"pointer"},children:h.l},h.l)),e&&o.jsxs("button",{onClick:e,title:s?"Snap to grid: ON":"Snap to grid: OFF",style:{minWidth:36,height:36,padding:"0 10px",background:s?"rgba(124,58,237,0.5)":"rgba(0,0,0,0.7)",border:`1px solid ${s?v.purple:"rgba(255,255,255,0.2)"}`,borderRadius:8,color:"#fff",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[o.jsx("span",{style:{fontSize:"1rem"},children:"⊞"}),o.jsx("span",{children:s?"ON":"OFF"})]}),c&&o.jsxs("button",{onClick:c,title:"Auto-layout: Arrange nodes automatically",style:{minWidth:36,height:36,padding:"0 10px",background:"rgba(0,0,0,0.7)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,color:"#fff",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[o.jsx("span",{style:{fontSize:"1rem"},children:"⚡"}),o.jsx("span",{children:"Layout"})]})]}),o.jsxs("div",{style:{position:"absolute",bottom:12,right:12,background:"rgba(0,0,0,0.7)",borderRadius:6,padding:"4px 10px",color:"#888",fontSize:"0.7rem",zIndex:100},children:[Math.round(i*100),"%"]}),o.jsx("div",{style:{position:"absolute",top:12,right:12,background:"rgba(0,0,0,0.6)",borderRadius:6,padding:"6px 10px",color:"#666",fontSize:"0.65rem",zIndex:100},children:"Drag nodes • Drag port to connect • Double-click to edit • Right-click for styles • Shift+drag to select"})]})}const h2=[{name:"Purple",color:v.purple},{name:"Blue",color:v.blue},{name:"Green",color:v.green},{name:"Orange",color:v.orange},{name:"Pink",color:v.pink},{name:"Red",color:v.red},{name:"Cyan",color:v.cyan},{name:"Teal",color:v.teal},{name:"Indigo",color:v.indigo},{name:"Rose",color:v.rose},{name:"Slate",color:v.slate},{name:"Default",color:null}],f2=[{name:"Rectangle",shape:"rectangle",icon:"▭"},{name:"Rounded",shape:"rounded",icon:"▢"},{name:"Circle",shape:"circle",icon:"●"},{name:"Diamond",shape:"diamond",icon:"◆"},{name:"Hexagon",shape:"hexagon",icon:"⬡"},{name:"Pill",shape:"pill",icon:"💊"}],g2=[{name:"None",icon:null},{name:"Server",icon:"🖥️"},{name:"Database",icon:"🗄️"},{name:"Cloud",icon:"☁️"},{name:"User",icon:"👤"},{name:"Settings",icon:"⚙️"},{name:"Lock",icon:"🔒"},{name:"Email",icon:"📧"},{name:"API",icon:"🔌"},{name:"File",icon:"📄"},{name:"Folder",icon:"📁"},{name:"Code",icon:"💻"},{name:"Chart",icon:"📊"},{name:"Bell",icon:"🔔"},{name:"Star",icon:"⭐"},{name:"Check",icon:"✅"},{name:"Warning",icon:"⚠️"},{name:"Error",icon:"❌"},{name:"Money",icon:"💰"},{name:"Clock",icon:"🕐"}];function rt({x:a,y:t,nodeId:r,currentIcon:n,currentShape:i,onSelectColor:s,onSelectIcon:e,onSelectShape:c,onClose:h,theme:d}){const u=M.useRef(null);return M.useEffect(()=>{const f=m=>{u.current&&!u.current.contains(m.target)&&h()};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[h]),o.jsxs("div",{ref:u,style:{position:"fixed",left:a,top:t,background:(d==null?void 0:d.modalBg)||"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",border:`1px solid ${(d==null?void 0:d.border)||"rgba(255,255,255,0.15)"}`,borderRadius:12,padding:12,zIndex:1e3,boxShadow:"0 8px 32px rgba(0,0,0,0.4)",minWidth:160},children:[o.jsx("div",{style:{color:(d==null?void 0:d.textSecondary)||"#888",fontSize:"0.75rem",marginBottom:8,fontWeight:600},children:"Node Color"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:6},children:h2.map(f=>o.jsx("button",{onClick:()=>s(r,f.color),title:f.name,style:{width:28,height:28,borderRadius:6,border:f.color?`2px solid ${f.color}`:`2px dashed ${(d==null?void 0:d.textMuted)||"#555"}`,background:f.color?`${f.color}40`:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:(d==null?void 0:d.textMuted)||"#666"},children:!f.color&&"×"},f.name))}),e&&o.jsxs("div",{style:{marginTop:12,paddingTop:10,borderTop:`1px solid ${(d==null?void 0:d.border)||"rgba(255,255,255,0.1)"}`},children:[o.jsx("div",{style:{color:(d==null?void 0:d.textSecondary)||"#888",fontSize:"0.75rem",marginBottom:8,fontWeight:600},children:"Node Icon"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:4,maxHeight:120,overflowY:"auto"},children:g2.map(f=>{const m=n===f.icon||!n&&!f.icon;return o.jsx("button",{onClick:()=>e(r,f.icon),title:f.name,style:{width:28,height:28,borderRadius:6,border:m?`2px solid ${v.purple}`:`1px solid ${(d==null?void 0:d.border)||"rgba(255,255,255,0.1)"}`,background:m?`${v.purple}20`:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:f.icon?"1rem":"0.7rem",color:(d==null?void 0:d.textMuted)||"#666"},children:f.icon||"×"},f.name)})})]}),c&&o.jsxs("div",{style:{marginTop:12,paddingTop:10,borderTop:`1px solid ${(d==null?void 0:d.border)||"rgba(255,255,255,0.1)"}`},children:[o.jsx("div",{style:{color:(d==null?void 0:d.textSecondary)||"#888",fontSize:"0.75rem",marginBottom:8,fontWeight:600},children:"Node Shape"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:4},children:f2.map(f=>{const m=i===f.shape||!i&&f.shape==="rounded";return o.jsx("button",{onClick:()=>c(r,f.shape),title:f.name,style:{padding:"6px 8px",borderRadius:6,border:m?`2px solid ${v.purple}`:`1px solid ${(d==null?void 0:d.border)||"rgba(255,255,255,0.1)"}`,background:m?`${v.purple}20`:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:4,fontSize:"0.7rem",color:(d==null?void 0:d.textPrimary)||"#fff"},children:o.jsx("span",{style:{fontSize:"0.9rem"},children:f.icon})},f.shape)})})]}),o.jsx("div",{style:{marginTop:10,paddingTop:8,borderTop:`1px solid ${(d==null?void 0:d.border)||"rgba(255,255,255,0.1)"}`},children:o.jsx("button",{onClick:h,style:{width:"100%",padding:"6px 12px",background:"transparent",border:`1px solid ${(d==null?void 0:d.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(d==null?void 0:d.textSecondary)||"#888",fontSize:"0.75rem",cursor:"pointer"},children:"Cancel"})})]})}const pc=[{name:"Solid",style:"solid",icon:"━",dasharray:null,animated:!1},{name:"Animated",style:"animated",icon:"〰️",dasharray:null,animated:!0},{name:"Dashed",style:"dashed",icon:"┅",dasharray:"10,6",animated:!1},{name:"Dotted",style:"dotted",icon:"···",dasharray:"2,4",animated:!1}],m2=[{name:"Triangle",type:"triangle",icon:"▶"},{name:"Open",type:"open",icon:"▷"},{name:"Diamond",type:"diamond",icon:"◆"},{name:"Circle",type:"circle",icon:"●"},{name:"None",type:"none",icon:"—"}];function y2({x:a,y:t,edgeId:r,currentStyle:n,currentArrowType:i,currentPathType:s,onSelectStyle:e,onSelectArrowType:c,onSelectPathType:h,onClose:d,theme:u}){const f=M.useRef(null);return M.useEffect(()=>{const m=g=>{f.current&&!f.current.contains(g.target)&&d()};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[d]),o.jsxs("div",{ref:f,style:{position:"fixed",left:a,top:t,background:(u==null?void 0:u.modalBg)||"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",border:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.15)"}`,borderRadius:12,padding:12,zIndex:1e3,boxShadow:"0 8px 32px rgba(0,0,0,0.4)",minWidth:160},children:[o.jsx("div",{style:{color:(u==null?void 0:u.textSecondary)||"#888",fontSize:"0.75rem",marginBottom:8,fontWeight:600},children:"Line Style"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:pc.map(m=>{const g=n===m.style||!n&&m.style==="animated";return o.jsxs("button",{onClick:()=>e(r,m.style),style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:8,border:g?`2px solid ${v.purple}`:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.1)"}`,background:g?`${v.purple}20`:"transparent",cursor:"pointer",color:(u==null?void 0:u.textPrimary)||"#fff",fontSize:"0.8rem"},children:[o.jsx("span",{style:{fontSize:"1rem",width:24},children:m.icon}),o.jsx("span",{children:m.name}),g&&o.jsx("span",{style:{marginLeft:"auto",color:v.purple},children:"✓"})]},m.style)})}),o.jsxs("div",{style:{marginTop:12,paddingTop:10,borderTop:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.1)"}`},children:[o.jsx("div",{style:{color:(u==null?void 0:u.textSecondary)||"#888",fontSize:"0.75rem",marginBottom:8,fontWeight:600},children:"Arrow Style"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:m2.map(m=>{const g=i===m.type||!i&&m.type==="triangle";return o.jsx("button",{onClick:()=>c(r,m.type),title:m.name,style:{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:8,border:g?`2px solid ${v.purple}`:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.1)"}`,background:g?`${v.purple}20`:"transparent",cursor:"pointer",color:(u==null?void 0:u.textPrimary)||"#fff",fontSize:"1rem"},children:m.icon},m.type)})})]}),o.jsxs("div",{style:{marginTop:12,paddingTop:10,borderTop:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.1)"}`},children:[o.jsx("div",{style:{color:(u==null?void 0:u.textSecondary)||"#888",fontSize:"0.75rem",marginBottom:8,fontWeight:600},children:"Path Style"}),o.jsx("div",{style:{display:"flex",gap:4},children:[{name:"Curved",type:"curved",icon:"⌒"},{name:"Straight",type:"straight",icon:"—"},{name:"Elbow",type:"step",icon:"⌐"},{name:"Rounded",type:"rounded",icon:"╭"}].map(m=>{const g=s===m.type||!s&&m.type==="curved";return o.jsxs("button",{onClick:()=>h(r,m.type),style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 12px",borderRadius:8,border:g?`2px solid ${v.purple}`:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.1)"}`,background:g?`${v.purple}20`:"transparent",cursor:"pointer",color:(u==null?void 0:u.textPrimary)||"#fff",fontSize:"0.8rem"},children:[o.jsx("span",{style:{fontSize:"1rem"},children:m.icon}),o.jsx("span",{children:m.name})]},m.type)})})]}),o.jsx("div",{style:{marginTop:10,paddingTop:8,borderTop:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.1)"}`},children:o.jsx("button",{onClick:d,style:{width:"100%",padding:"6px 12px",background:"transparent",border:`1px solid ${(u==null?void 0:u.border)||"rgba(255,255,255,0.1)"}`,borderRadius:6,color:(u==null?void 0:u.textSecondary)||"#888",fontSize:"0.75rem",cursor:"pointer"},children:"Cancel"})})]})}function Xe({isEditing:a,value:t,onChange:r,onFinish:n,onCancel:i,style:s={},inputStyle:e={}}){const c=M.useRef(null);M.useEffect(()=>{a&&c.current&&(c.current.focus(),c.current.select())},[a]);const h=d=>{d.key==="Enter"?(d.preventDefault(),n()):d.key==="Escape"&&(d.preventDefault(),i())};return a?o.jsx("input",{ref:c,type:"text",value:t,onChange:d=>r(d.target.value),onBlur:n,onKeyDown:h,style:{background:"rgba(0,0,0,0.5)",border:"1px solid rgba(124,58,237,0.5)",borderRadius:4,color:"#fff",fontSize:"inherit",fontWeight:"inherit",textAlign:"center",padding:"2px 6px",width:"100%",minWidth:60,outline:"none",...e},onClick:d=>d.stopPropagation(),onMouseDown:d=>d.stopPropagation()}):o.jsx("span",{style:s,children:t})}function x2(a){const t={format:"sections",title:"",actors:[],sections:[]};let r=null;const n=[v.cyan,v.purple,v.orange,v.pink,v.emerald,v.amber,v.blue,v.red],i={user:v.pink,system:v.blue,admin:v.purple,customer:v.cyan,default:v.slate};return a.split(`
`).forEach(s=>{if(s=s.trim(),!s)return;const e=s.match(/^title:\s*(.+)/i);if(e){t.title=e[1].trim();return}const c=s.match(/^actors:\s*(.+)/i);if(c){t.actors=c[1].split(",").map(u=>{const f=u.trim(),m=i[f.toLowerCase()]||i.default;return{name:f,color:m}});return}const h=s.match(/^==\s*(.+?)\s*==$/);if(h){const u=t.sections.length;r={name:h[1],color:n[u%n.length],tasks:[]},t.sections.push(r);return}const d=s.match(/^-\s*(.+?)\s*\|\s*(\d+)(?:\s*\|\s*(.+))?$/);if(d&&r){const u=d[1].trim(),f=parseInt(d[2]),m=d[3]||"",g=m?m.split(",").map(y=>y.trim()).filter(y=>y):[];r.tasks.push({id:`task-${t.sections.length-1}-${r.tasks.length}`,name:u,score:f,actors:g})}}),t}const Tg={markdown:a=>{const t=a.split(`
`).filter(i=>i.trim());if(!t.length)return{id:"root",label:"Empty",children:[]};const r={id:"root",label:t[0].trim(),children:[]},n=[{node:r,indent:-1}];for(let i=1;i<t.length;i++){const s=t[i],e=s.trimStart(),c=s.length-e.length,h=e.replace(/^[-*+]\s*/,"").trim();if(!h)continue;for(;n.length>1&&n[n.length-1].indent>=c;)n.pop();const d={id:`node-${i}`,label:h,children:[]};n[n.length-1].node.children.push(d),n.push({node:d,indent:c})}return r},sql:a=>{const t=[],r=/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?\s*\(([\s\S]*?)\);/gi;let n;for(;(n=r.exec(a))!==null;){const i=n[1],s=[];n[2].split(",").map(e=>e.trim()).filter(e=>e&&!/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT|INDEX|KEY)/i.test(e)).forEach(e=>{const c=e.match(/^[`"']?(\w+)[`"']?\s+(\w+(?:\([^)]+\))?)/i);if(c){const h={name:c[1],type:c[2].toUpperCase()};/PRIMARY\s+KEY/i.test(e)&&(h.key=!0);const d=e.match(/REFERENCES\s+[`"']?(\w+)[`"']?/i);d&&(h.fk=!0,h.references=d[1]),s.push(h)}}),t.push({name:i,fields:s})}return t},architecture:a=>{const t=new Map,r=[],n=new Map;let i=0,s=null,e=null;const c=a.match(/^title:\s*(.+)$/im),h=a.match(/^subtitle:\s*(.+)$/im);c&&(s=c[1].trim()),h&&(e=h[1].trim());const d={person:{color:"#08427B",icon:"👤",shape:"person",label:"Person"},actor:{color:"#08427B",icon:"👤",shape:"person",label:"Actor"},system:{color:"#1168BD",icon:"🏢",shape:"rect",label:"Software System"},software:{color:"#1168BD",icon:"🏢",shape:"rect",label:"Software System"},webapp:{color:"#438DD5",icon:"🌐",shape:"rect",label:"Web Application"},mobileapp:{color:"#438DD5",icon:"📱",shape:"rect",label:"Mobile App"},spa:{color:"#438DD5",icon:"⚛️",shape:"rect",label:"SPA"},desktop:{color:"#438DD5",icon:"🖥️",shape:"rect",label:"Desktop App"},component:{color:"#85BBF0",icon:"⚙️",shape:"rect",label:"Component"},controller:{color:"#85BBF0",icon:"🎮",shape:"rect",label:"Controller"},repository:{color:"#85BBF0",icon:"📚",shape:"rect",label:"Repository"},facade:{color:"#85BBF0",icon:"🎭",shape:"rect",label:"Facade"},class:{color:"#B8D4E8",icon:"📄",shape:"rect",label:"Class"},interface:{color:"#B8D4E8",icon:"📋",shape:"rect",label:"Interface"},module:{color:"#B8D4E8",icon:"📦",shape:"rect",label:"Module"},server:{color:"#999999",icon:"🖥️",shape:"rect",label:"Server"},vm:{color:"#999999",icon:"💻",shape:"rect",label:"Virtual Machine"},instance:{color:"#999999",icon:"🖥️",shape:"rect",label:"Instance"},deployment:{color:"#999999",icon:"🚀",shape:"rect",label:"Deployment Node"},infrastructure:{color:"#666666",icon:"🏗️",shape:"rect",label:"Infrastructure"},datacenter:{color:"#666666",icon:"🏢",shape:"rect",label:"Data Center"},external:{color:"#999999",icon:"🔗",shape:"rect",label:"External System"},thirdparty:{color:"#999999",icon:"🔗",shape:"rect",label:"Third Party"},clients:{color:v.pink,icon:"🖥️",shape:"rect",label:"Clients"},client:{color:v.pink,icon:"🖥️",shape:"rect",label:"Client"},web:{color:v.pink,icon:"🌐",shape:"rect",label:"Web"},mobile:{color:v.pink,icon:"📱",shape:"rect",label:"Mobile"},browser:{color:v.pink,icon:"🌐",shape:"rect",label:"Browser"},user:{color:v.pink,icon:"👤",shape:"rect",label:"User"},users:{color:v.pink,icon:"👥",shape:"rect",label:"Users"},gateway:{color:v.orange,icon:"🚪",shape:"hexagon",label:"Gateway"},gateways:{color:v.orange,icon:"🚪",shape:"hexagon",label:"Gateways"},api:{color:v.orange,icon:"🔌",shape:"hexagon",label:"API"},lb:{color:v.orange,icon:"⚖️",shape:"hexagon",label:"Load Balancer"},loadbalancer:{color:v.orange,icon:"⚖️",shape:"hexagon",label:"Load Balancer"},proxy:{color:v.orange,icon:"🔀",shape:"hexagon",label:"Proxy"},cdn:{color:v.orange,icon:"🌍",shape:"hexagon",label:"CDN"},dns:{color:v.orange,icon:"📍",shape:"rect",label:"DNS"},firewall:{color:v.red,icon:"🛡️",shape:"hexagon",label:"Firewall"},services:{color:v.blue,icon:"⚙️",shape:"rect",label:"Services"},service:{color:v.blue,icon:"⚙️",shape:"rect",label:"Service"},backend:{color:v.blue,icon:"⚙️",shape:"rect",label:"Backend"},microservice:{color:v.blue,icon:"🔷",shape:"rect",label:"Microservice"},microservices:{color:v.blue,icon:"🔷",shape:"rect",label:"Microservices"},function:{color:v.violet,icon:"λ",shape:"rect",label:"Function"},lambda:{color:v.violet,icon:"λ",shape:"rect",label:"Lambda"},serverless:{color:v.violet,icon:"☁️",shape:"rect",label:"Serverless"},worker:{color:v.blue,icon:"👷",shape:"rect",label:"Worker"},container:{color:v.cyan,icon:"📦",shape:"rect",label:"Container"},containers:{color:v.cyan,icon:"📦",shape:"rect",label:"Containers"},docker:{color:v.cyan,icon:"🐳",shape:"rect",label:"Docker"},k8s:{color:v.cyan,icon:"☸️",shape:"rect",label:"Kubernetes"},kubernetes:{color:v.cyan,icon:"☸️",shape:"rect",label:"Kubernetes"},pod:{color:v.cyan,icon:"🫛",shape:"rect",label:"Pod"},pods:{color:v.cyan,icon:"🫛",shape:"rect",label:"Pods"},cluster:{color:v.cyan,icon:"🔷",shape:"rect",label:"Cluster"},node:{color:v.cyan,icon:"🖥️",shape:"rect",label:"Node"},databases:{color:v.emerald,icon:"🗄️",shape:"cylinder",label:"Databases"},database:{color:v.emerald,icon:"🗄️",shape:"cylinder",label:"Database"},db:{color:v.emerald,icon:"🗄️",shape:"cylinder",label:"Database"},data:{color:v.emerald,icon:"🗄️",shape:"cylinder",label:"Data"},sql:{color:v.emerald,icon:"📊",shape:"cylinder",label:"SQL"},nosql:{color:v.emerald,icon:"📋",shape:"cylinder",label:"NoSQL"},storage:{color:v.emerald,icon:"💾",shape:"cylinder",label:"Storage"},s3:{color:v.emerald,icon:"🪣",shape:"cylinder",label:"S3"},blob:{color:v.emerald,icon:"📁",shape:"cylinder",label:"Blob"},cache:{color:v.red,icon:"⚡",shape:"cylinder",label:"Cache"},redis:{color:v.red,icon:"⚡",shape:"cylinder",label:"Redis"},memcached:{color:v.red,icon:"🧠",shape:"cylinder",label:"Memcached"},queue:{color:v.amber,icon:"📬",shape:"rect",label:"Queue"},queues:{color:v.amber,icon:"📬",shape:"rect",label:"Queues"},mq:{color:v.amber,icon:"📨",shape:"rect",label:"Message Queue"},kafka:{color:v.amber,icon:"📊",shape:"rect",label:"Kafka"},rabbitmq:{color:v.amber,icon:"🐰",shape:"rect",label:"RabbitMQ"},pubsub:{color:v.amber,icon:"📢",shape:"rect",label:"Pub/Sub"},eventbus:{color:v.amber,icon:"🚌",shape:"rect",label:"Event Bus"},stream:{color:v.amber,icon:"🌊",shape:"rect",label:"Stream"},monitoring:{color:v.fuchsia,icon:"📈",shape:"rect",label:"Monitoring"},metrics:{color:v.fuchsia,icon:"📊",shape:"rect",label:"Metrics"},logging:{color:v.fuchsia,icon:"📝",shape:"rect",label:"Logging"},logs:{color:v.fuchsia,icon:"📝",shape:"rect",label:"Logs"},tracing:{color:v.fuchsia,icon:"🔍",shape:"rect",label:"Tracing"},alerting:{color:v.fuchsia,icon:"🔔",shape:"rect",label:"Alerting"},auth:{color:v.indigo,icon:"🔐",shape:"rect",label:"Auth"},identity:{color:v.indigo,icon:"🆔",shape:"rect",label:"Identity"},vault:{color:v.indigo,icon:"🔒",shape:"rect",label:"Vault"},secrets:{color:v.indigo,icon:"🔑",shape:"rect",label:"Secrets"},cloud:{color:v.sky,icon:"☁️",shape:"rect",label:"Cloud"},aws:{color:v.orange,icon:"☁️",shape:"rect",label:"AWS"},gcp:{color:v.blue,icon:"☁️",shape:"rect",label:"GCP"},azure:{color:v.sky,icon:"☁️",shape:"rect",label:"Azure"},vpc:{color:v.slate,icon:"🔲",shape:"rect",label:"VPC"},subnet:{color:v.slate,icon:"📡",shape:"rect",label:"Subnet"},region:{color:v.slate,icon:"🌍",shape:"rect",label:"Region"},zone:{color:v.slate,icon:"📍",shape:"rect",label:"Zone"},saas:{color:v.slate,icon:"☁️",shape:"rect",label:"SaaS"},email:{color:v.slate,icon:"📧",shape:"rect",label:"Email"},payment:{color:v.slate,icon:"💳",shape:"rect",label:"Payment"},analytics:{color:v.slate,icon:"📊",shape:"rect",label:"Analytics"}},u=150,f=90,m=[{bg:"#1168BD",border:"#0D5BA8"},{bg:"#2D882D",border:"#236B23"},{bg:"#7B4B94",border:"#5E3A72"},{bg:"#D4652F",border:"#B85525"},{bg:"#C73E1D",border:"#A33318"},{bg:"#1A9988",border:"#157A6C"}];let g=0;const y=new Map,l=new Map,p=new Map,x=[];let b=0;const C=a.split(`
`);for(let U=0;U<C.length;U++){let Y=C[U].trim();if(!Y||Y.startsWith("#"))continue;const ie=Y.match(/^(?:group|boundary)\s+["']([^"']+)["']\s*\{?\s*$/i);if(ie){const ee=ie[1],oe=x.length>0?x[x.length-1]:null;p.set(ee,{name:ee,nodes:[],colorIndex:b++,parent:oe,children:[]}),oe&&p.has(oe)&&p.get(oe).children.push(ee),x.push(ee);continue}if(Y==="}"&&x.length>0){x.pop();continue}const K=Y.match(/^\[(\w+)(?:\s+"([^"]+)")?\]\s*(.+)/);if(K){const ee=K[1].toLowerCase(),oe=K[2]||null,de=K[3],be=d[ee]||{color:v.slate,icon:"📦",shape:"rect"},ke=de.split(",").map(qe=>qe.trim()).filter(qe=>qe),ye=x.length>0?x[x.length-1]:null,je=`layer-${ee}-${i}`,Le=oe||ee.charAt(0).toUpperCase()+ee.slice(1);n.has(je)||n.set(je,{id:je,type:ee,label:Le,nodes:[],color:Qh[ee]||Qh.default,borderColor:Zh[ee]||Zh.default,order:i}),ke.forEach(qe=>{const Fe=qe.match(/^([^:]+):\s*(.+)$/),nt=Fe?Fe[1].trim():qe,at=Fe?Fe[2].trim():"",Ue=nt.toLowerCase().replace(/[^a-z0-9]/g,"_"),Qe=ye&&p.has(ye)?p.get(ye).colorIndex:-1,Be=Qe>=0?m[Qe%m.length]:null,We={id:Ue,label:nt,description:at,type:ee,typeLabel:be.label||ee,...be,color:Be?Be.bg:be.color,x:0,y:0,width:Math.max(u,nt.length*9+40),layerIndex:g,layerId:je,group:ye,groupColorIndex:Qe};t.set(Ue,We),y.set(Ue,g),n.get(je).nodes.push({id:Ue,label:nt,description:at,icon:be.icon,shape:be.shape,color:be.color}),x.length>0&&(l.set(Ue,[...x]),x.forEach(ot=>{p.has(ot)&&p.get(ot).nodes.push(Ue)}))}),g++,i++;continue}const te=[{regex:/^(.+?)\s*<->\s*(.+?)(?::\s*(.+))?$/,style:"bidirectional"},{regex:/^(.+?)\s*-->\s*(.+?)(?::\s*(.+))?$/,style:"dotted"},{regex:/^(.+?)\s*==>\s*(.+?)(?::\s*(.+))?$/,style:"thick"},{regex:/^(.+?)\s*->>\s*(.+?)(?::\s*(.+))?$/,style:"async"},{regex:/^(.+?)\s*-\.->\s*(.+?)(?::\s*(.+))?$/,style:"dashed"},{regex:/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/,style:"normal"}];for(const{regex:ee,style:oe}of te){const de=Y.match(ee);if(de){const[,be,ke,ye]=de,je=be.trim().toLowerCase().replace(/[^a-z0-9]/g,"_"),Le=ke.trim().toLowerCase().replace(/[^a-z0-9]/g,"_");r.push({id:`e-${r.length}`,source:je,target:Le,label:(ye==null?void 0:ye.trim())||"",style:oe}),oe==="bidirectional"&&r.push({id:`e-${r.length}`,source:Le,target:je,label:"",style:"normal"});break}}}const w=t.size,k=r.length,S=w>8||k>10,E=new Set;if(t.forEach(U=>E.add(U.layerIndex)),E.size<=2&&w>4){const U=new Map,Y=new Map;t.forEach((ee,oe)=>{U.set(oe,0),Y.set(oe,[])}),r.forEach(ee=>{t.has(ee.source)&&t.has(ee.target)&&(Y.get(ee.source).push(ee.target),U.set(ee.target,(U.get(ee.target)||0)+1))});const ie=new Map,K=[];for(t.forEach((ee,oe)=>{U.get(oe)===0&&(ie.set(oe,0),K.push(oe))});K.length>0;){const ee=K.shift(),oe=ie.get(ee);Y.get(ee).forEach(de=>{const be=oe+1;(!ie.has(de)||ie.get(de)<be)&&ie.set(de,be),U.set(de,U.get(de)-1),U.get(de)===0&&K.push(de)})}const te=ie.size>0?Math.floor([...ie.values()].reduce((ee,oe)=>ee+oe,0)/ie.size):0;t.forEach((ee,oe)=>{ie.has(oe)||ie.set(oe,te),ee.layerIndex=ie.get(oe)})}const $=new qh.graphlib.Graph;$.setGraph({rankdir:"TB",nodesep:S?70:50,ranksep:S?50:40,marginx:40,marginy:30,ranker:"network-simplex"}),$.setDefaultEdgeLabel(()=>({}));const R=new Map;t.forEach((U,Y)=>R.set(Y,0)),r.forEach(U=>{R.has(U.target)&&R.set(U.target,R.get(U.target)+1)});const A=[];t.forEach((U,Y)=>{R.get(Y)===0&&A.push(Y)}),t.forEach(U=>{$.setNode(U.id,{label:U.label,width:U.width||u,height:f,rank:U.layerIndex})});const _=new Set;r.forEach(U=>{const Y=t.get(U.source),ie=t.get(U.target);if(Y&&ie){const K=A.includes(U.target)&&!A.includes(U.source),te=Y.layerIndex>ie.layerIndex;(K||te)&&_.add(U.id)}});const T=new Set;r.forEach(U=>{const Y=`${U.source}-${U.target}`,ie=`${U.target}-${U.source}`;if(!T.has(Y)&&!T.has(ie)&&t.has(U.source)&&t.has(U.target)){const K=_.has(U.id);$.setEdge(U.source,U.target,{weight:K?.5:3,minlen:K?1:2}),T.add(Y)}}),qh.layout($),$.nodes().forEach(U=>{const Y=t.get(U),ie=$.node(U);Y&&ie&&(Y.x=ie.x,Y.y=ie.y)});const P=new Set;r.forEach(U=>{P.add(U.source),P.add(U.target)});let W=0,N=0;t.forEach(U=>{P.has(U.id)&&(W=Math.max(W,U.y+f/2),N=Math.max(N,U.x+(U.width||u)/2))});const G=new Map,V=[];if(t.forEach(U=>{P.has(U.id)||(U.group?(G.has(U.group)||G.set(U.group,[]),G.get(U.group).push(U)):V.push(U))}),V.length>0){const U=new Map;V.forEach(K=>{const te=K.layerIndex||0;U.has(te)||U.set(te,[]),U.get(te).push(K)});const Y=new Map;t.forEach(K=>{if(P.has(K.id)&&!K.group){const te=K.layerIndex||0;Y.has(te)||Y.set(te,K.y)}});let ie=N+100;U.forEach((K,te)=>{const ee=Y.get(te)||100+te*150;K.forEach((oe,de)=>{oe.x=ie+de*((oe.width||u)+60),oe.y=ee})})}let J=W+100;const Z=50;[...p.keys()].forEach(U=>{const Y=G.get(U);if(!Y||Y.length===0)return;const ie=[],K=[];if(p.get(U).nodes.forEach(te=>{const ee=t.get(te);ee&&ee.group===U&&(P.has(te)?ie.push(ee):K.push(ee))}),ie.length>0){let te=0,ee=0;ie.forEach(oe=>{te=Math.max(te,oe.x+(oe.width||u)/2),ee+=oe.y}),ee/=ie.length,K.forEach((oe,de)=>{oe.x=te+80+de*((oe.width||u)+60),oe.y=ee})}else{const ee=f+40,oe=200;K.forEach((be,ke)=>{const ye=Math.floor(ke/3),je=ke%3;be.x=150+je*oe,be.y=J+ye*ee});const de=Math.ceil(K.length/3);J+=de*ee+Z+40}});const q=[],L=new Map,X=30,I=15,B=U=>{let Y=0,ie=U;for(;ie;){const K=p.get(ie);if(K&&K.parent)Y++,ie=K.parent;else break}return Y};[...p.keys()].sort((U,Y)=>B(Y)-B(U)).forEach(U=>{const Y=p.get(U);if(!Y||Y.nodes.length===0)return;let ie=1/0,K=1/0,te=-1/0,ee=-1/0;if(Y.nodes.forEach(oe=>{const de=t.get(oe);if(de){if(de.group!==U||(l.get(oe)||[]).some(Le=>Le!==U&&Y.children.includes(Le)))return;const ye=de.width||u,je=f;ie=Math.min(ie,de.x-ye/2),K=Math.min(K,de.y-je/2),te=Math.max(te,de.x+ye/2),ee=Math.max(ee,de.y+je/2)}}),Y.children.forEach(oe=>{const de=L.get(oe);de&&(ie=Math.min(ie,de.minX-I),K=Math.min(K,de.minY-I),te=Math.max(te,de.maxX+I),ee=Math.max(ee,de.maxY+I))}),ie!==1/0){L.set(U,{minX:ie-X,minY:K-X-20,maxX:te+X,maxY:ee+X});const oe=L.get(U),de=m[Y.colorIndex%m.length];q.push({id:`group-${U.toLowerCase().replace(/[^a-z0-9]/g,"_")}`,name:U,x:oe.minX,y:oe.minY,width:oe.maxX-oe.minX,height:oe.maxY-oe.minY,color:de.bg,borderColor:de.border,colorIndex:Y.colorIndex,depth:B(U),parent:Y.parent})}}),q.sort((U,Y)=>U.depth-Y.depth);const ce=new Map;q.forEach(U=>{const Y=U.parent||"__root__";ce.has(Y)||ce.set(Y,[]),ce.get(Y).push(U)}),ce.forEach(U=>{U.sort((Y,ie)=>Y.y-ie.y);for(let Y=1;Y<U.length;Y++){const ie=U[Y-1],K=U[Y],te=ie.y+ie.height;if(K.y<te+20){const ee=te+20-K.y;K.y+=ee;const oe=p.get(K.name);oe&&oe.nodes.forEach(de=>{const be=t.get(de);be&&(be.y+=ee)})}}});const xe=r.length>0,_e=n.size>0&&!xe?"layered":"classic",Re=Array.from(n.values()).sort((U,Y)=>U.order-Y.order),ne=[];for(let U=0;U<Re.length-1;U++)ne.push({fromLayer:Re[U].id,toLayer:Re[U+1].id,label:""});return{nodes:Array.from(t.values()),edges:r,groups:q,title:s,subtitle:e,layers:Re,interLayerConnections:ne,layoutMode:_e}},flowchart:a=>{const t=new Map,r=[],n=[],i=p=>{p=p.trim();let x="",b=p;const C=p.match(/^(.+?):\s+([^:]+)$/);C&&(b=C[1].trim(),x=C[2].trim());const w=b.match(/^\(([^)]+)\)\s*(.*)$/);if(w){const k=w[1].trim(),S=w[2].trim();return S&&k.toLowerCase()===S.toLowerCase()?{type:"process",label:S,edgeLabel:x}:["start","end","process","decision","io","data","database","document"].includes(k.toLowerCase())?{type:k.toLowerCase(),label:S||k,edgeLabel:x}:{type:"process",label:S||k,edgeLabel:x}}return{type:"process",label:b,edgeLabel:x}};let s="TB";const e=a.match(/^direction:\s*(TB|LR|RL|BT)/im);e&&(s=e[1].toUpperCase());const c=s==="LR"||s==="RL";a.split(`
`).forEach(p=>{if(p=p.trim(),!p||p.startsWith("#")||p.match(/^direction:/i))return;const x=p.split(/\s*->\s*/);x.forEach((b,C)=>{const{type:w,label:k,edgeLabel:S}=i(b),E=k.toLowerCase().replace(/[^a-z0-9]/g,"_");if(t.has(E)||(t.set(E,{id:E,type:w,label:k,x:0,y:0}),n.push(E)),C>0){const{label:j}=i(x[C-1]),$=j.toLowerCase().replace(/[^a-z0-9]/g,"_");r.push({id:`e-${r.length}`,source:$,target:E,label:S})}})});const h=new Map,d=new Map;r.forEach(p=>{h.has(p.source)||h.set(p.source,[]),h.get(p.source).push(p.target),d.has(p.target)||d.set(p.target,[]),d.get(p.target).push(p.source)});const u=p=>{const k=Math.min(180,Math.max(100,((p==null?void 0:p.length)||5)*8+40)),S=Math.floor((k-20)/8),E=Math.ceil(((p==null?void 0:p.length)||5)/S),j=Math.max(60,30+E*18);return{width:k,height:j}};t.forEach((p,x)=>{const b=u(p.label);p.width=b.width,p.height=b.height});const f=n.filter(p=>!d.has(p)||d.get(p).length===0),m=new Set,g=[v.purple,v.blue,v.emerald,v.orange,v.pink,v.cyan],y=(p,x,b,C=0,w=0)=>{if(m.has(p))return;const k=t.get(p);if(!k)return;c?(k.x=x,k.y=b+C):(k.x=b+C,k.y=x),k.depth=w,k.color=g[w%g.length],m.add(p);const S=h.get(p)||[],E=k.width||130,j=k.height||60,$=c?E+60:j+40,R=c?100:200;if(S.length===1)y(S[0],x+$,b,C,w+1);else if(S.length>=2){const A=(S.length-1)*R;S.forEach((_,T)=>{const P=-A/2+T*R;y(_,x+$,b,P,w+1)})}};if(c){let p=200;f.forEach((x,b)=>{y(x,100,p+b*150,0,0)})}else{let p=400;f.forEach((x,b)=>{y(x,100,p+b*250,0,0)})}let l=100;return n.forEach(p=>{if(!m.has(p)){const x=t.get(p);x.x=700,x.y=l,x.depth=0,x.color=v.gray,l+=c?100:(x.height||60)+40,m.add(p)}}),{nodes:Array.from(t.values()),edges:r,direction:s}},stateMachine:a=>{const t=new Map,r=[];a.split(`
`).forEach(i=>{var c;if(i=i.trim(),!i||i.startsWith("#"))return;const s=i.match(/^\((\w+)\)\s*(\w+)(?::\s*(.+))?/);if(s){const h=s[1].toLowerCase(),d=s[2],u=((c=s[3])==null?void 0:c.trim())||"";t.set(d,{id:d,label:u||d,isInitial:h==="initial",isFinal:h==="final",isFork:h==="fork",isJoin:h==="join",isChoice:h==="choice",isComposite:h==="composite",stateType:h});return}const e=i.match(/^(\w+)\s*->\s*(\w+)(?::\s*(.+))?/);e&&(t.has(e[1])||t.set(e[1],{id:e[1],label:e[1]}),t.has(e[2])||t.set(e[2],{id:e[2],label:e[2]}),r.push({from:e[1],to:e[2],event:e[3]||""}))});const n=Array.from(t.values());return n.forEach((i,s)=>{const e=2*Math.PI/n.length*s-Math.PI/2;i.x=300+Math.cos(e)*150,i.y=250+Math.sin(e)*150}),{states:n,transitions:r}},userJourney:a=>{if(a.includes("== ")||a.includes("title:")||a.includes("actors:"))return x2(a);const t=[],r=new Map,n={actor:{color:v.pink,icon:"👤",shape:"circle"},user:{color:v.pink,icon:"👤",shape:"circle"},page:{color:v.cyan,icon:"📱",shape:"rect"},screen:{color:v.cyan,icon:"📱",shape:"rect"},action:{color:v.purple,icon:"👆",shape:"rect"},form:{color:v.orange,icon:"📝",shape:"rect"},email:{color:v.amber,icon:"✉️",shape:"rect"},success:{color:v.green,icon:"✅",shape:"rect"},error:{color:v.red,icon:"❌",shape:"rect"},decision:{color:v.orange,icon:"❓",shape:"diamond"},notification:{color:v.red,icon:"🔔",shape:"rect",badge:"New"},milestone:{color:v.green,icon:"🎯",shape:"rect"},default:{color:v.blue,icon:"📄",shape:"rect"}};a.split(`
`).forEach(l=>{var b,C;if(l=l.trim(),!l||l.startsWith("#")||l.toLowerCase().startsWith("title"))return;const p=l.match(/^[\[(](\w+)(?::([a-z0-9-]+))?[\])]\s*(.+?)(?:\s*:\s*(.+))?$/i);if(p&&!l.includes("->")){const w=p[1].toLowerCase(),k=p[2]||null,S=p[3].trim(),E=((b=p[4])==null?void 0:b.trim())||"",j=S.toLowerCase().replace(/[^a-z0-9]/g,"_"),$=n[w]||n.default;r.has(j)||r.set(j,{id:j,label:S,description:E,type:w,linkedTemplate:k,clickable:!!k,...$,x:0,y:0});return}const x=l.match(/^(.+?)\s*-(?:([^>]+)->|->)\s*(.+?)$/);if(x){const w=x[1].trim(),k=((C=x[2])==null?void 0:C.trim())||"",S=x[3].trim(),E=w.toLowerCase().replace(/[^a-z0-9]/g,"_"),j=S.toLowerCase().replace(/[^a-z0-9]/g,"_");r.has(E)||r.set(E,{id:E,label:w,type:"default",...n.default,x:0,y:0}),r.has(j)||r.set(j,{id:j,label:S,type:"default",...n.default,x:0,y:0}),t.push({id:`edge-${t.length}`,source:E,target:j,label:k})}});const i=Array.from(r.values()),s=new Map,e=new Set,c=new Set(t.map(l=>l.target)),h=i.filter(l=>!c.has(l.id)),d=(l,p)=>{e.has(l)||(e.add(l),s.set(l,Math.max(s.get(l)||0,p)),t.filter(x=>x.source===l).forEach(x=>d(x.target,p+1)))};(h.length?h:i.slice(0,1)).forEach(l=>d(l.id,0)),i.forEach(l=>{s.has(l.id)||s.set(l.id,0)});const u=new Map;i.forEach(l=>{const p=s.get(l.id)||0;u.has(p)||u.set(p,[]),u.get(p).push(l)});const f=Math.max(...Array.from(u.values()).map(l=>l.length),1),m=Math.max(...Array.from(s.values()),0)+1,g=220,y=160;for(let l=0;l<=m-1;l++){const p=u.get(l)||[],x=p.length*y,b=150+(f*y-x)/2;p.forEach((C,w)=>{C.x=180+l*g,C.y=b+w*y})}return{nodes:i,edges:t}},timeline:a=>{const t=[];let r=100;return a.split(`
`).forEach((n,i)=>{var h,d;if(n=n.trim(),!n||n.startsWith("#"))return;const s=n.match(/^\[(.+?)\]\s*(.+?)(?:\|(.+))?$/)||[null,"",n,""];let e=s[2].trim();const c=e.startsWith("*");c&&(e=e.substring(1).trim()),t.push({id:`timeline-${i}`,date:((h=s[1])==null?void 0:h.trim())||"",label:e,description:((d=s[3])==null?void 0:d.trim())||"",x:r,y:200,isMilestone:c}),r+=220}),t},sequence:a=>{const t=[],r=[],n=[],i=[];let s=80,e=[],c=0;return a.split(`
`).forEach(h=>{if(h=h.trim(),!h||h.startsWith("#"))return;const d=h.match(/^participants?\s+(.+)/i);if(d){d[1].split(",").forEach(b=>{const C=b.trim(),w=C.toLowerCase().replace(/\s/g,"_");t.find(k=>k.id===w)||(t.push({id:w,label:C,x:s}),s+=160)});return}const u=h.match(/^(loop|alt|opt|par|critical|break|rect)\s+(.+)/i);if(u){e.push({type:u[1].toLowerCase(),label:u[2],startIndex:c,sections:[{label:u[2],startIndex:c}]});return}const f=h.match(/^else\s*(.*)/i);if(f&&e.length>0){const b=e[e.length-1];b.type==="alt"&&b.sections.push({label:f[1]||"else",startIndex:c});return}const m=h.match(/^and\s+(.+)/i);if(m&&e.length>0){const b=e[e.length-1];b.type==="par"&&b.sections.push({label:m[1],startIndex:c});return}const g=h.match(/^option\s+(.+)/i);if(g&&e.length>0){const b=e[e.length-1];b.type==="critical"&&b.sections.push({label:g[1],startIndex:c});return}const y=h.match(/^(activate|deactivate)\s+(\w+)/i);if(y){const b=y[1].toLowerCase(),C=y[2].toLowerCase().replace(/\s/g,"_");r.push({type:b,participant:C,index:c});return}if(h.toLowerCase()==="end"){if(e.length>0){const b=e.pop();b.endIndex=c,n.push(b)}return}const l=h.match(/^note\s+(left|right)\s+of\s+(\w+)\s*:\s*(.+)/i);if(l){const b=l[1].toLowerCase(),C=l[2],w=C.toLowerCase().replace(/\s/g,"_");t.find(k=>k.id===w)||(t.push({id:w,label:C,x:s}),s+=160),i.push({position:b,participantId:w,text:l[3],atMessageIndex:c});return}const p=h.match(/^note\s+over\s+(.+?)\s*:\s*(.+)/i);if(p){const C=p[1].split(",").map(w=>w.trim()).map(w=>{const k=w.toLowerCase().replace(/\s/g,"_");return t.find(S=>S.id===k)||(t.push({id:k,label:w,x:s}),s+=160),k});i.push({position:"over",participantIds:C,text:p[2],atMessageIndex:c});return}const x=h.match(/^(\w+)\s*(->|-->|-x|--x|-\)|--\))\s*(\w+)(?::\s*(.+))?/);if(x){const b=x[1].toLowerCase().replace(/\s/g,"_"),C=x[3].toLowerCase().replace(/\s/g,"_");t.find(w=>w.id===b)||(t.push({id:b,label:x[1],x:s}),s+=160),t.find(w=>w.id===C)||(t.push({id:C,label:x[3],x:s}),s+=160),r.push({from:b,to:C,label:x[4]||"",isReturn:x[2]==="-->",index:c}),c++}}),{participants:t,messages:r,fragments:n,notes:i}},orgChart:a=>{const t=[],r=[],n=[{id:null,indent:-1}];return a.split(`
`).forEach((i,s)=>{var u;if(!i.trim())return;const e=i.trimStart(),c=i.length-e.length,h=e.match(/^(.+?)(?:\s*\[(.+?)\])?$/);for(;n.length>1&&n[n.length-1].indent>=c;)n.pop();const d={id:`org-${s}`,label:h[1].trim(),title:((u=h[2])==null?void 0:u.trim())||"",children:[],parent:n[n.length-1].id};if(t.push(d),n[n.length-1].id){r.push({id:`oe-${s}`,source:n[n.length-1].id,target:d.id});const f=t.find(m=>m.id===n[n.length-1].id);f&&f.children.push(d.id)}n.push({id:d.id,indent:c})}),{nodes:t,edges:r}},network:a=>{const t=new Map,r=[];return a.split(`
`).forEach(n=>{var e;if(n=n.trim(),!n||n.startsWith("#"))return;const i=n.match(/^\[(\w+)\]\s*(.+?)(?:\s*\((.+?)\))?$/);if(i){const c=i[2].trim().toLowerCase().replace(/[^a-z0-9]/g,"_");t.set(c,{id:c,type:i[1].toLowerCase(),label:i[2].trim(),ip:((e=i[3])==null?void 0:e.trim())||""});return}const s=n.match(/^(.+?)\s*--\s*(.+?)(?:\s*:\s*(.+))?$/);s&&r.push({id:`conn-${r.length}`,source:s[1].trim().toLowerCase().replace(/[^a-z0-9]/g,"_"),target:s[2].trim().toLowerCase().replace(/[^a-z0-9]/g,"_"),protocol:s[3]||""})}),{devices:Array.from(t.values()),connections:r}},gantt:a=>{const t=[];return a.split(`
`).forEach((r,n)=>{if(r=r.trim(),!r||r.startsWith("#"))return;const i=r.split(",").map(s=>s.trim());i.length>=2&&t.push({id:`task-${n}`,name:i[0],start:parseInt(i[1])||n*2,duration:parseInt(i[2])||2,progress:parseInt(i[3])||0})}),t},deployment:a=>{const t=[],r=[{id:null,indent:-1}];let n=0;return a.split(`
`).forEach(i=>{if(!i.trim())return;const s=i.trimStart(),e=i.length-s.length,c=s.match(/^\[(\w+)\]\s*(.+)$/)||[null,"component",s];for(;r.length>1&&r[r.length-1].indent>=e;)r.pop();const h={id:`deploy-${n++}`,label:(c[2]||s).trim(),type:(c[1]||"component").toLowerCase(),parentId:r[r.length-1].id,indent:e};t.push(h),r.push({id:h.id,indent:e})}),{nodes:t}},pie:a=>{const t=[];return a.split(`
`).forEach(r=>{if(r=r.trim(),!r||r.startsWith("#")||r.toLowerCase().startsWith("title"))return;const n=r.match(/^"?([^":,]+)"?\s*[:,]\s*(\d+(?:\.\d+)?)/);n&&t.push({label:n[1].trim(),value:parseFloat(n[2])})}),t},quadrant:a=>{const t={title:"",xLabel:"",yLabel:"",quadrants:["","","",""]},r=[];return a.split(`
`).forEach(n=>{if(n=n.trim(),!n||n.startsWith("#"))return;if(n.startsWith("title:")){t.title=n.replace("title:","").trim();return}if(n.startsWith("x-axis:")){t.xLabel=n.replace("x-axis:","").trim();return}if(n.startsWith("y-axis:")){t.yLabel=n.replace("y-axis:","").trim();return}const i=n.match(/^quadrant-(\d):\s*(.+)$/);if(i){t.quadrants[parseInt(i[1])-1]=i[2];return}const s=n.match(/^(.+?):\s*\[(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)\]$/);s&&r.push({id:`point-${r.length}`,label:s[1].trim(),x:parseFloat(s[2]),y:parseFloat(s[3])})}),{config:t,points:r}},git:a=>{const t=[],r=new Map;let n="main",i=0;return r.set("main",{name:"main",y:100,parentBranch:null,branchPoint:0}),a.split(`
`).forEach(s=>{var e;if(s=s.trim(),!(!s||s.startsWith("#"))){if(s.startsWith("branch ")){const c=s.replace("branch ","").trim();r.has(c)||r.set(c,{name:c,y:100+r.size*80,parentBranch:n,branchPoint:i}),n=c;return}if(s.startsWith("checkout ")){n=s.replace("checkout ","").trim();return}if(s.startsWith("commit")||s.startsWith("merge")){const c=s.startsWith("merge"),h=s.match(/"([^"]+)"/);let d=null;if(c){const u=s.match(/merge\s+(\w+)/i);u&&(d=u[1])}t.push({id:`commit-${i}`,label:h?h[1]:`C${i}`,branch:n,x:120+i*100,y:((e=r.get(n))==null?void 0:e.y)||100,isMerge:c,mergeFrom:d,index:i}),i++}}}),{commits:t,branches:Array.from(r.values())}},wireframe:a=>{const t=[];let r=20,n=20,i=[],s=!1,e=0,c=0;const h=/sidebar|aside|slip|cart|panel|summary/i.test(a)&&/<\s*(sidebar|aside|slip|cart|panel|summary)/i.test(a),d=h?480:620,u=200,f=h?d+u+30:d+40,m=()=>s?d+30:i.length>0?i[i.length-1].x+15:n,g=()=>s?u:i.length>0?i[i.length-1].width-30:d;for(a.split(`
`).forEach((y,l)=>{var S,E,j,$,R,A,_,T,P,W,N,G,V,J,Z,ae,q,L,X;const p=y.trim();if(!p||p.startsWith("//")||p.startsWith("#")&&!p.startsWith("# ")&&!p.startsWith("## ")&&!p.startsWith("### "))return;const x=m(),b=g();if(p.match(/^\{(.+)\}$/)&&!p.match(/\{(badge|tag):/i)){t.push({id:`wf-${l}`,type:"window",label:p.slice(1,-1),x,y:r,width:f,height:36}),r+=46;return}if(p.match(/^<(.+)>$/)&&!p.includes("/")){const I=p.slice(1,-1),B=/sidebar|aside|slip|cart|panel|summary/i.test(I);B&&!s&&(s=!0,c=r,e=145,r=e);const z=I==="card"||/^(sidebar|aside|panel|slip|summary|cart)$/i.test(I),ce={id:`wf-${l}`,type:"card",label:z?"":I,x,y:r,width:b,startY:r,children:[],isSidebar:B};t.push(ce),i.push(ce),r+=z?15:45;return}if(p.match(/^<\/(.*)>$/)||p==="</>"){if(i.length>0){const I=i.pop();I.height=r-I.startY+20,I.isSidebar&&(s=!1,r=Math.max(r,c))}r+=25;return}if(p.match(/^\{\{(.+)\}\}$/)){t.push({id:`wf-${l}`,type:"modal",label:p.slice(2,-2),x:x+20,y:r,width:b-40,height:200}),r+=220;return}if(p.match(/^\[\[(.+)\]\]$/)){const I=p.slice(2,-2).split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"navbar",items:I,x,y:r,width:f,height:44}),r+=54;return}if(p.match(/^\(\((.+)\)\)$/)){const I=p.slice(2,-2).split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"tabs",items:I,activeIndex:0,x,y:r,width:b,height:40}),r+=50;return}if(p.startsWith(">>")){const I=p.slice(2).split(">").map(B=>B.trim()).filter(B=>B);t.push({id:`wf-${l}`,type:"breadcrumbs",items:I,x,y:r,width:b}),r+=35;return}const C=p.match(/\[[^\]]+\]/g);if(C&&C.length>1){const I=C.map(B=>{const z=B.slice(1,-1).trim();return z.startsWith("🔍")||z.toLowerCase().startsWith("search")?{type:"search",label:z.replace(/^🔍\s*/,"").replace(/^search:?\s*/i,"").replace(/_/g," ").trim()||"Search..."}:z.startsWith("v ")||z.toLowerCase().startsWith("select:")?{type:"dropdown",label:z.replace(/^v\s+/,"").replace(/^select:\s*/i,"")}:z.startsWith("+")||z.startsWith("+ ")?{type:"button",label:z,variant:"primary"}:{type:"button",label:z,variant:"secondary"}});t.push({id:`wf-${l}`,type:"toolbar",items:I,x,y:r,width:b,height:44}),r+=54;return}if(p.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/)||p.match(/^\[search:?\s*(.*)\]$/i)){let I=((S=p.match(/^\[🔍[\s_]*(.*)[\s_]*\]$/))==null?void 0:S[1])||((E=p.match(/^\[search:?\s*(.*)\]$/i))==null?void 0:E[1])||"Search...";I=I.replace(/^_+|_+$/g,"").replace(/_+/g," ").trim()||"Search...",t.push({id:`wf-${l}`,type:"search",label:I,x,y:r,width:b,height:40}),r+=50;return}if(p.match(/^\[v\s+(.+)\]$/)||p.match(/^\[select:\s*(.+)\]$/i)){const I=((j=p.match(/^\[v\s+(.+)\]$/))==null?void 0:j[1])||(($=p.match(/^\[select:\s*(.+)\]$/i))==null?void 0:$[1]);t.push({id:`wf-${l}`,type:"dropdown",label:I,x,y:r,width:Math.min(200,b),height:36}),r+=46;return}if(p.match(/^\[([oO])\]\s*(.+)$/)){const I=p.match(/^\[([oO])\]\s*(.+)$/);t.push({id:`wf-${l}`,type:"toggle",enabled:I[1]==="O",label:I[2],x,y:r}),r+=40;return}if(p.match(/^\(([oO\*\s])\)\s*(.+)$/)){const I=p.match(/^\(([oO\*\s])\)\s*(.+)$/);t.push({id:`wf-${l}`,type:"radio",selected:I[1]==="O"||I[1]==="*",label:I[2],x,y:r}),r+=35;return}if(p.match(/^\[=+o-+\]$/)||p.match(/^\[slider:\s*(\d+)%?\]$/i)){let I=50;const B=p.match(/^\[slider:\s*(\d+)%?\]$/i);if(B)I=parseInt(B[1]);else{const z=p.match(/^\[(=*)o(-*)\]$/);z&&(I=Math.round(z[1].length/(z[1].length+z[2].length)*100))}t.push({id:`wf-${l}`,type:"slider",value:I,x,y:r,width:Math.min(200,b)}),r+=45;return}if(p.match(/^\[\|+\.+\]/)||p.match(/^\[=+-+\]/)||p.match(/^\[progress:\s*(\d+)%?\]/i)){let I=50,B="";const z=p.match(/^\[progress:\s*(\d+)%?\](.*)$/i);if(z)I=parseInt(z[1]),B=((R=z[2])==null?void 0:R.trim())||"";else{const ce=p.match(/^\[(\|+)(\.+)\]\s*(.*)$/);ce&&(I=Math.round(ce[1].length/(ce[1].length+ce[2].length)*100),B=ce[3]||"");const xe=p.match(/^\[(=+)(-+)\]\s*(.*)$/);xe&&(I=Math.round(xe[1].length/(xe[1].length+xe[2].length)*100),B=xe[3]||"")}t.push({id:`wf-${l}`,type:"progress",value:I,label:B,x,y:r,width:b-20}),r+=35;return}if(p.match(/^\(@+\)$/)||p.match(/^\(@(.+)\)$/)){if(p.match(/^\(@+\)$/)){const B=p.length-2;t.push({id:`wf-${l}`,type:"avatar-group",count:B,x,y:r})}else{const B=((A=p.match(/^\(@(.+)\)$/))==null?void 0:A[1])||"";t.push({id:`wf-${l}`,type:"avatar",label:B,x,y:r})}r+=55;return}if(p.match(/^\[img[^\]]*\](\s+\[img[^\]]*\])+$/i)){const I=p.match(/\[img[^\]]*\]/gi)||[],B=I.length,z=Math.floor((b-(B-1)*8)/B);I.forEach((ce,xe)=>{const ue=ce.match(/(\d+):(\d+)/),_e=ue?parseInt(ue[1])/parseInt(ue[2]):1,Re=Math.min(Math.round(z/_e),100);t.push({id:`wf-${l}-${xe}`,type:"image",label:"",x:x+xe*(z+8),y:r,width:z,height:Re})}),r+=115;return}const w=p.match(/\{(badge|tag):([^}]+)\}/gi);if(w&&w.length>0){const I=w.map(B=>{const ce=B.match(/\{(badge|tag):([^}]+)\}/i)[2].trim(),xe=ce.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i),ue=xe?xe[1].toLowerCase():null,_e=xe?xe[2]:ce;return{variant:ue,label:_e}});t.push({id:`wf-${l}`,type:"badge-group",badges:I,x,y:r}),r+=35;return}if(p.match(/^\[img[:\s]?.*\]$/i)){const I=((_=p.match(/^\[img:\s*(.+)\]$/i))==null?void 0:_[1])||"",B=p.match(/(\d+):(\d+)/),z=B?parseInt(B[1])/parseInt(B[2]):16/9,ce=Math.round(b/z);t.push({id:`wf-${l}`,type:"image",label:I,x,y:r,width:b,height:Math.min(ce,200)}),r+=Math.min(ce,200)+15;return}if(p.match(/^\[video[:\s]?.*\]$/i)){const I=((T=p.match(/^\[video:\s*(.+)\]$/i))==null?void 0:T[1])||"";t.push({id:`wf-${l}`,type:"video",label:I,x,y:r,width:b,height:180}),r+=195;return}if(p.match(/^\[map[:\s]?.*\]$/i)){const I=((P=p.match(/^\[map:\s*(.+)\]$/i))==null?void 0:P[1])||"";t.push({id:`wf-${l}`,type:"map",label:I,x,y:r,width:b,height:160}),r+=175;return}if(p.match(/^\[chart[:\s]?.*\]$/i)){const I=((W=p.match(/^\[chart:\s*(.+)\]$/i))==null?void 0:W[1])||"bar";t.push({id:`wf-${l}`,type:"chart",chartType:I,x,y:r,width:b,height:150}),r+=165;return}if(p.match(/^\[calendar\]$/i)){t.push({id:`wf-${l}`,type:"calendar",x,y:r,width:Math.min(280,b),height:220}),r+=235;return}if(p.match(/^\|.+\|$/)){const I=p.slice(1,-1).split("|").map(z=>z.trim()),B=!t.some(z=>z.type==="table-row"&&z.y===r-36);t.push({id:`wf-${l}`,type:"table-row",cells:I,isHeader:B,x,y:r,width:b,height:36}),r+=36;return}if(p.match(/^[-\*•]\s+(.+)$/)){const I=p.match(/^[-\*•]\s+(.+)$/)[1];t.push({id:`wf-${l}`,type:"list-item",label:I,x,y:r}),r+=32;return}if(p.match(/^(\d+)[.)]\s+(.+)$/)){const I=p.match(/^(\d+)[.)]\s+(.+)$/);t.push({id:`wf-${l}`,type:"list-item-numbered",number:I[1],label:I[2],x,y:r}),r+=32;return}if(p.match(/^\{(\w+):?(.*)?\}$/)&&!p.match(/^\{.{15,}\}$/)){const I=p.match(/^\{(\w+):?(.*)?\}$/),B=I[1].toLowerCase(),z=I[2]||I[1];if(["badge","tag","success","warning","error","info","new","beta","pro"].includes(B)||I[2]){t.push({id:`wf-${l}`,type:"badge",variant:B,label:z,x,y:r}),r+=35;return}}if(p.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/)){const I=p.match(/^\[([!iI✓✗⚠])\]\s*(.+)$/),B={"!":"error",i:"info",I:"info","✓":"success","✗":"error","⚠":"warning"}[I[1]]||"info";t.push({id:`wf-${l}`,type:"alert",variant:B,label:I[2],x,y:r,width:b}),r+=55;return}if(p.match(/^\(\d+\)(---\(\d+\))+$/)||p.match(/^\[step:\s*(\d+)\/(\d+)\]$/i)){let I=1,B=3;const z=p.match(/^\[step:\s*(\d+)\/(\d+)\]$/i);z?(I=parseInt(z[1]),B=parseInt(z[2])):(B=p.match(/\((\d+)\)/g).length,I=1),t.push({id:`wf-${l}`,type:"stepper",current:I,total:B,x,y:r,width:b}),r+=50;return}if(p.match(/^\[<.*>\]$/)||p.match(/^\[page:\s*(\d+)\/(\d+)\]$/i)){let I=1,B=5;const z=p.match(/^\[page:\s*(\d+)\/(\d+)\]$/i);z&&(I=parseInt(z[1]),B=parseInt(z[2])),t.push({id:`wf-${l}`,type:"pagination",current:I,total:B,x,y:r,width:b}),r+=45;return}if(p==="[~~~]"||p.toLowerCase()==="[skeleton]"){t.push({id:`wf-${l}`,type:"skeleton",x,y:r,width:b,height:20}),r+=30;return}if(p.match(/^\["""\s*(.*)\]$/)||p.toLowerCase()==="[textarea]"){const I=((N=p.match(/^\["""\s*(.*)\]$/))==null?void 0:N[1])||"";t.push({id:`wf-${l}`,type:"textarea",label:I,x,y:r,width:b,height:80}),r+=95;return}if(p.match(/^\[~(.+)~\]$/)){t.push({id:`wf-${l}`,type:"button",variant:"secondary",label:p.match(/^\[~(.+)~\]$/)[1],x,y:r,width:120,height:36}),r+=48;return}if(p.match(/^\[--(.+)--\]$/)){t.push({id:`wf-${l}`,type:"button",variant:"ghost",label:p.match(/^\[--(.+)--\]$/)[1],x,y:r,width:120,height:36}),r+=48;return}if(p.match(/^\[!!(.+)!!\]$/)){t.push({id:`wf-${l}`,type:"button",variant:"danger",label:p.match(/^\[!!(.+)!!\]$/)[1],x,y:r,width:120,height:36}),r+=48;return}if(p.match(/^\[icon:(\w+)\]$/i)){const I=p.match(/^\[icon:(\w+)\]$/i)[1];t.push({id:`wf-${l}`,type:"icon-button",icon:I,x,y:r}),r+=45;return}if(p.match(/^---\s*(.+)\s*---$/)||p.match(/^===\s*(.+)\s*===$/)){const I=p.match(/^[-=]{3}\s*(.+)\s*[-=]{3}$/)[1];t.push({id:`wf-${l}`,type:"divider-label",label:I,x,y:r,width:b}),r+=30;return}if(p.match(/^\[[\*★☆]+\]$/)){const I=p.slice(1,-1),B=(I.match(/[\*★]/g)||[]).length,z=I.length;t.push({id:`wf-${l}`,type:"rating",filled:B,total:z,x,y:r}),r+=35;return}if(p.match(/^(<\w+>\s*)+$/)){const I=p.match(/<(\w+)>/g).map(B=>B.slice(1,-1));t.push({id:`wf-${l}`,type:"chip-group",tags:I,x,y:r}),r+=40;return}if(p==="[?]"||p==="(?)"){t.push({id:`wf-${l}`,type:"tooltip",x,y:r}),r+=30;return}if(p.match(/^\[.+\](\s+\[.+\])+$/)&&!p.includes("|")){const I=p.match(/\[([^\]]+)\]/g).map(B=>B.slice(1,-1));t.push({id:`wf-${l}`,type:"button-row",buttons:I,x,y:r,width:b}),r+=50;return}if(p.match(/^@\w+\s+.+/)||p.match(/^@\w+:\s*.+/)){const I=p.match(/^@(\w+):?\s*(.+)$/);if(I){t.push({id:`wf-${l}`,type:"feed-item",username:I[1],text:I[2],x,y:r,width:b}),r+=38;return}}if(p.match(/^[🏆💰🎉🔥⭐]\s*@\w+/)){const I=p.match(/^([🏆💰🎉🔥⭐])\s*@(\w+)\s*(.+)$/);if(I){t.push({id:`wf-${l}`,type:"win-notification",emoji:I[1],username:I[2],text:I[3],x,y:r,width:b}),r+=44;return}}if(p.match(/^[❤️💬🔄💾🎯👍👎].+[❤️💬🔄💾🎯👍👎]/)){t.push({id:`wf-${l}`,type:"social-stats",text:p,x,y:r,width:b}),r+=40;return}if(p.match(/^_{3,}$/)){r+=20;return}if(p.match(/^\[hero:\s*(.+)\]$/i)){const I=p.match(/^\[hero:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"hero",title:I[0],subtitle:I[1]||"",cta:I[2]||"Get Started",x,y:r,width:b,height:280}),r+=300;return}if(p.match(/^\[pricing:\s*(.+)\]$/i)){const I=p.match(/^\[pricing:\s*(.+)\]$/i)[1].split("|").map(z=>z.trim()),B=I[2]?I[2].split(",").map(z=>z.trim()):[];t.push({id:`wf-${l}`,type:"pricing-card",plan:I[0],price:I[1]||"$0",features:B,cta:I[3]||"Choose Plan",x,y:r,width:Math.min(280,b),height:320}),r+=340;return}if(p.match(/^\[feature:\s*(.+)\]$/i)){const I=p.match(/^\[feature:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"feature-card",icon:I[0]||"✨",title:I[1]||"Feature",description:I[2]||"",x,y:r,width:Math.min(300,b),height:160}),r+=180;return}if(p.match(/^\[stat:\s*(.+)\]$/i)){const I=p.match(/^\[stat:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"stat-widget",value:I[0],label:I[1]||"",trend:I[2]||"",x,y:r,width:Math.min(200,b),height:140}),r+=160;return}if(p.match(/^\[login-form[:\s]*(.*)?\]$/i)){const I=((G=p.match(/^\[login-form:\s*(.+)\]$/i))==null?void 0:G[1])||"Sign In";t.push({id:`wf-${l}`,type:"login-form",title:I,x,y:r,width:Math.min(360,b),height:420}),r+=440;return}if(p.match(/^\[signup-form[:\s]*(.*)?\]$/i)){const I=((V=p.match(/^\[signup-form:\s*(.+)\]$/i))==null?void 0:V[1])||"Create Account";t.push({id:`wf-${l}`,type:"signup-form",title:I,x,y:r,width:Math.min(360,b),height:480}),r+=500;return}if(p.match(/^\[widget:\s*(.+)\]$/i)){const I=p.match(/^\[widget:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"dashboard-widget",title:I[0],value:I[1]||"",icon:I[2]||"📊",x,y:r,width:Math.min(200,b),height:120}),r+=140;return}if(p.match(/^\[bottom-nav:\s*(.+)\]$/i)){const I=p.match(/^\[bottom-nav:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"bottom-nav",items:I,x,y:r,width:b,height:64}),r+=80;return}if(p.match(/^\[app-bar:\s*(.+)\]$/i)){const I=p.match(/^\[app-bar:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"app-bar",title:I[0],actions:I.slice(1),x,y:r,width:b,height:56}),r+=70;return}if(p.match(/^\[fab:\s*(.+)\]$/i)){const I=p.match(/^\[fab:\s*(.+)\]$/i)[1];t.push({id:`wf-${l}`,type:"fab",icon:I,x:x+b-70,y:r,width:56,height:56}),r+=70;return}if(p.match(/^\[toast:\s*(.+)\]$/i)){const I=p.match(/^\[toast:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"toast",message:I[0],variant:I[1]||"info",x,y:r,width:Math.min(400,b),height:56}),r+=70;return}if(p.match(/^\[empty:\s*(.+)\]$/i)){const I=p.match(/^\[empty:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"empty-state",title:I[0],description:I[1]||"",cta:I[2]||"",x,y:r,width:b,height:240}),r+=260;return}if(p.match(/^\[error:\s*(.+)\]$/i)){const I=p.match(/^\[error:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"error-state",title:I[0],description:I[1]||"",cta:I[2]||"Retry",x,y:r,width:b,height:240}),r+=260;return}if(p.match(/^\[loading[:\s]*(.*)?\]$/i)){const I=((J=p.match(/^\[loading:\s*(.+)\]$/i))==null?void 0:J[1])||"Loading...";t.push({id:`wf-${l}`,type:"loading-state",text:I,x,y:r,width:b,height:120}),r+=140;return}if(p.match(/^\[testimonial:\s*(.+)\]$/i)){const I=p.match(/^\[testimonial:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"testimonial",quote:(Z=I[0])==null?void 0:Z.replace(/^["']|["']$/g,""),name:I[1]||"John Doe",title:I[2]||"",x,y:r,width:Math.min(400,b),height:200}),r+=220;return}if(p.match(/^\[footer:\s*(.+)\]$/i)){const I=p.match(/^\[footer:\s*(.+)\]$/i)[1],B=I.includes("::")?I.split("::").map(z=>z.split("|").map(ce=>ce.trim())):[I.split("|").map(z=>z.trim())];t.push({id:`wf-${l}`,type:"footer",sections:B,copyright:"",x,y:r,width:b,height:140}),r+=160;return}if(p.match(/^\[social:\s*(.+)\]$/i)){const I=p.match(/^\[social:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"social-links",links:I,x,y:r,width:b,height:48}),r+=60;return}if(p.match(/^\[cta:\s*(.+)\]$/i)){const I=p.match(/^\[cta:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"cta-section",title:I[0],description:I[1]||"",cta:I[2]||"Get Started",x,y:r,width:b,height:180}),r+=200;return}if(p.match(/^\[profile:\s*(.+)\]$/i)){const I=p.match(/^\[profile:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"profile-card",name:I[0],username:I[1]||"",bio:I[2]||"",x,y:r,width:Math.min(300,b),height:280}),r+=300;return}if(p.match(/^\[activity:\s*(.+)\]$/i)){const I=p.match(/^\[activity:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"activity-item",text:I[0],time:I[1]||"Just now",x,y:r,width:b,height:60}),r+=70;return}if(p.match(/^\[comment:\s*(.+)\]$/i)){const I=p.match(/^\[comment:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"comment",username:I[0],text:I[1]||"",time:I[2]||"",x,y:r,width:b,height:100}),r+=115;return}if(p.match(/^\[code[:\s]*(.*)?\]$/i)){const I=((ae=p.match(/^\[code:\s*(.+)\]$/i))==null?void 0:ae[1])||"javascript";t.push({id:`wf-${l}`,type:"code-block",language:I,x,y:r,width:b,height:160}),r+=180;return}if(p.match(/^\[upload[:\s]*(.*)?\]$/i)){const I=((q=p.match(/^\[upload:\s*(.+)\]$/i))==null?void 0:q[1])||"Drag and drop files here";t.push({id:`wf-${l}`,type:"upload",label:I,x,y:r,width:b,height:160}),r+=180;return}if(p.match(/^\[accordion:\s*(.+)\]$/i)){const I=p.match(/^\[accordion:\s*(.+)\]$/i)[1].split("|").map(B=>B.trim());t.push({id:`wf-${l}`,type:"accordion",items:I,x,y:r,width:b,height:60+I.length*50}),r+=80+I.length*50;return}if(p.match(/^\[data-table:\s*(\d+)?\s*rows?\]$/i)){const I=parseInt(((L=p.match(/^\[data-table:\s*(\d+)/i))==null?void 0:L[1])||"3");t.push({id:`wf-${l}`,type:"data-table",rows:I,x,y:r,width:b,height:52+I*52}),r+=72+I*52;return}if(p.match(/^\[(user|bot|assistant|chatgpt|ai|me|you|system):\s*(.+)\]$/i)){const I=p.match(/^\[(\w+):\s*(.+)\]$/i),B=I[1],z=I[2],ce=/user|me|you/i.test(B);t.push({id:`wf-${l}`,type:"chat-message",sender:B,message:z,isUser:ce,x,y:r,width:b}),r+=60;return}if(p.match(/^\[([^\]:]+)\]$/)&&!p.match(/^\[_{2,}\]$/)&&!p.match(/^\[(x| )\]/i)&&!p.match(/^\[v\s/)){t.push({id:`wf-${l}`,type:"button",variant:"primary",label:p.slice(1,-1),x,y:r,width:120,height:36}),r+=48;return}if(p.match(/^\[_{2,}\]$/)||p.match(/^"(.+)"$/)){t.push({id:`wf-${l}`,type:"input",label:((X=p.match(/^"(.+)"$/))==null?void 0:X[1])||"",x,y:r,width:b,height:36}),r+=48;return}const k=p.match(/^\[(x| )\]\s*(.+)$/i);if(k){t.push({id:`wf-${l}`,type:"checkbox",checked:k[1].toLowerCase()==="x",label:k[2],x,y:r}),r+=35;return}if(p==="---"||p==="==="){t.push({id:`wf-${l}`,type:"separator",x,y:r,width:b,height:2}),r+=15;return}if(p){const I=p.startsWith("# "),B=p.startsWith("## "),z=p.startsWith("### "),ce=p.startsWith("**")&&p.endsWith("**");let xe=p,ue="body";I?(xe=p.slice(2),ue="h1"):B?(xe=p.slice(3),ue="h2"):z?(xe=p.slice(4),ue="h3"):ce&&(xe=p.slice(2,-2),ue="bold"),t.push({id:`wf-${l}`,type:"text",label:xe,textType:ue,x,y:r}),r+=ue==="h1"?45:ue==="h2"?38:ue==="h3"?32:ue==="bold"?30:26}});i.length>0;){const y=i.pop();y.height=r-y.startY+15}return{elements:t,totalHeight:r+40}},classDiagram:a=>{const t=[],r=[];let n=null;return a.split(`
`).forEach(i=>{var d;if(i=i.trim(),!i||i.startsWith("#"))return;const s=i.match(/^class\s+(\w+)/i);if(s){n&&t.push(n),n={id:s[1],name:s[1],properties:[],methods:[]};return}const e=i.match(/^(\w+)\s*(--|>|--\*|-->|--)\s*(\w+)(?:\s*:\s*(.+))?$/);if(e){const u=e[2]==="--|>"?"extends":e[2]==="--*"?"composition":"association";r.push({from:e[1],to:e[3],type:u,label:((d=e[4])==null?void 0:d.trim())||""});return}const c=i.match(/^([+\-#~])?\s*(\w+)\s*:\s*(.+)$/);if(c&&n){n.properties.push({visibility:c[1]||"+",name:c[2],type:c[3]});return}const h=i.match(/^([+\-#~])?\s*(\w+)\s*\(([^)]*)\)\s*(?::\s*(.+))?$/);h&&n&&n.methods.push({visibility:h[1]||"+",name:h[2],params:h[3],returns:h[4]||"void"})}),n&&t.push(n),{classes:t,relationships:r}},activity:a=>{const t=new Map,r=[],n=[],i=a.split(`
`).map(f=>f.trim()).filter(f=>f&&!f.startsWith("#"));if(i.forEach(f=>{if(f.match(/^[^<:\[].+?\s*->\s*.+$/))return;let m="action",g=f,y=f;f==="[start]"||f==="start"?(m="start",g="start",y=""):f==="[end]"||f==="end"?(m="end",g="end",y=""):f.match(/^<(.+)>$/)?(m="decision",g=f.match(/^<(.+)>$/)[1],y=g):f.match(/^:(.+);?$/)&&(g=f.match(/^:(.+);?$/)[1],y=g);const l=g.toLowerCase().replace(/[^a-z0-9]/g,"_");t.has(l)||(t.set(l,{id:l,type:m,label:y,x:0,y:0}),n.push(l))}),i.forEach(f=>{var g;const m=f.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);if(m){const y=m[1].replace(/^[<:\[]|[>;>\]]$/g,"").trim(),l=m[2].replace(/^[<:\[]|[>;>\]]$/g,"").trim(),p=((g=m[3])==null?void 0:g.trim())||"",x=y.toLowerCase().replace(/[^a-z0-9]/g,"_"),b=l.toLowerCase().replace(/[^a-z0-9]/g,"_");t.has(x)&&t.has(b)&&r.push({id:`ae-${r.length}`,source:x,target:b,label:p})}}),r.length===0&&n.length>1)for(let f=0;f<n.length-1;f++)r.push({id:`ae-${f}`,source:n[f],target:n[f+1]});const s=new Map,e=new Map;r.forEach(f=>{s.has(f.source)||s.set(f.source,[]),s.get(f.source).push(f.target),e.has(f.target)||e.set(f.target,[]),e.get(f.target).push(f.source)});const c=new Set,h=(f,m,g)=>{if(c.has(f)||!t.has(f))return;const y=t.get(f);y.x=m,y.y=g,c.add(f);const l=s.get(f)||[];l.length===1?h(l[0],m,g+120):l.length>=2&&l.forEach((x,b)=>{const C=b===0?-100:b===1?100:(b-.5)*200;h(x,m+C,g+120)})},d=n.find(f=>{var m;return((m=t.get(f))==null?void 0:m.type)==="start"})||n[0];d&&h(d,400,80);let u=80;return n.forEach(f=>{if(!c.has(f)){const m=t.get(f);m.x=650,m.y=u,u+=120,c.add(f)}}),{nodes:Array.from(t.values()),edges:r}},useCase:a=>{const t=[],r=[],n=[];return a.split(`
`).forEach(i=>{if(i=i.trim(),!i||i.startsWith("#"))return;if(i.match(/^actor\s+/i)){t.push({id:`actor-${t.length}`,label:i.replace(/^actor\s+/i,"").trim()});return}if(i.startsWith("(")||i.match(/^usecase\s+/i)){r.push({id:`uc-${r.length}`,label:i.replace(/^usecase\s+/i,"").replace(/[()]/g,"").trim()});return}const s=i.match(/^(.+?)\s*->\s*(.+)$/);s&&n.push({from:s[1].trim(),to:s[2].trim()})}),{actors:t,useCases:r,relationships:n}},component:a=>{const t=[],r=[];return a.split(`
`).forEach(n=>{if(n=n.trim(),!n||n.startsWith("#"))return;const i=n.match(/^\[(\w+)\]\s*(.+)$/);if(i){t.push({id:`comp-${t.length}`,label:i[2].trim(),type:i[1]});return}const s=n.match(/^(.+?)\s*(-->|--)\s*(.+)$/);s&&r.push({from:s[1].trim(),to:s[3].trim()})}),{components:t,connections:r}},c4:a=>{const t=[],r=[],n=[],i=[];let s=0;const e=new Map;let c=0,h=null,d=null;const u=a.match(/^title:\s*(.+)$/im),f=a.match(/^subtitle:\s*(.+)$/im);u&&(h=u[1].trim()),f&&(d=f[1].trim());const m={person:"#dbeafe",user:"#dbeafe",system:"#dcfce7",container:"#fef9c3",component:"#f3e8ff",database:"#f3e8ff",external:"#f1f5f9"},g={person:"#93c5fd",user:"#93c5fd",system:"#86efac",container:"#fde047",component:"#d8b4fe",database:"#d8b4fe",external:"#cbd5e1"};a.split(`
`).forEach((C,w)=>{var j;if(C=C.trim(),!C||C.startsWith("#")||C.toLowerCase().startsWith("title:")||C.toLowerCase().startsWith("subtitle:"))return;const k=C.match(/^(?:boundary|group)\s+["']([^"']+)["']\s*\{?\s*$/i);if(k){const $={id:`boundary-${s++}`,name:k[1].trim(),elements:[],parent:i.length>0?i[i.length-1].id:null};n.push($),i.push($);return}if(C==="}"&&i.length>0){i.pop();return}const S=C.match(/^\[(\w+)\]\s*(.+)$/);if(S){const $=S[1].toLowerCase(),R=S[2];if(R.includes(",")&&!R.includes(":")){const _=R.split(",").map(P=>P.trim()).filter(P=>P),T=`c4-layer-${$}-${c}`;e.has(T)||e.set(T,{id:T,type:$,label:$.charAt(0).toUpperCase()+$.slice(1),nodes:[],color:m[$]||m.external,borderColor:g[$]||g.external,order:c++}),_.forEach((P,W)=>{const N=P.match(/^([^:]+):\s*(.+)$/),G=N?N[1].trim():P,V=N?N[2].trim():"",J={id:`c4-${w}-${W}`,type:$,label:G,description:V,boundary:i.length>0?i[i.length-1].id:null,layerId:T};t.push(J),e.get(T).nodes.push({id:J.id,label:G,description:V,icon:$==="person"?"👤":$==="database"?"🗄️":"🏢",color:g[$]||g.external}),i.length>0&&i[i.length-1].elements.push(J.id)})}else{const _=R.match(/^(.+?):\s*(.+)$/),T=_?_[1].trim():R.trim(),P=_?_[2].trim():"",W={id:`c4-${w}`,type:$,label:T,description:P,boundary:i.length>0?i[i.length-1].id:null};t.push(W),i.length>0&&i[i.length-1].elements.push(W.id)}return}const E=C.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);E&&r.push({from:E[1].trim(),to:E[2].trim(),label:((j=E[3])==null?void 0:j.trim())||""})});const y=r.length>0,p=e.size>0&&!y?"layered":"classic",x=Array.from(e.values()).sort((C,w)=>C.order-w.order),b=[];for(let C=0;C<x.length-1;C++)b.push({fromLayer:x[C].id,toLayer:x[C+1].id,label:""});return{elements:t,relationships:r,boundaries:n,title:h,subtitle:d,layers:x,interLayerConnections:b,layoutMode:p}},requirement:a=>{const t=[],r=[];let n=null;return a.split(`
`).forEach((i,s)=>{var h;if(i=i.trim(),!i||i.startsWith("#"))return;const e=i.match(/^requirement\s+(.+?)(?:\s*{)?$/i);if(e){n&&t.push(n),n={id:`req-${s}`,name:e[1].trim(),text:"",risk:"",priority:""};return}const c=i.match(/^(.+?)\s*->\s*(.+?)(?::\s*(.+))?$/);if(c&&!n){r.push({from:c[1].trim(),to:c[2].trim(),label:((h=c[3])==null?void 0:h.trim())||""});return}n&&(i.startsWith("text:")?n.text=i.replace("text:","").trim():i.startsWith("risk:")?n.risk=i.replace("risk:","").trim():i.startsWith("priority:")?n.priority=i.replace("priority:","").trim():i==="}"&&(t.push(n),n=null))}),n&&t.push(n),{requirements:t,traces:r}},sankey:a=>{const t=new Map,r=[];a.split(`
`).forEach((y,l)=>{if(y=y.trim(),!y||y.startsWith("#"))return;const p=y.match(/^(.+?)\s*->\s*(.+?)(?::\s*(\d+(?:\.\d+)?))?$/);if(p){const x=p[1].trim(),b=p[2].trim(),C=parseFloat(p[3])||10,w=x.toLowerCase().replace(/[^a-z0-9]/g,"_"),k=b.toLowerCase().replace(/[^a-z0-9]/g,"_");t.has(w)||t.set(w,{id:w,label:x}),t.has(k)||t.set(k,{id:k,label:b}),r.push({id:`link-${l}`,source:w,target:k,value:C})}});const n=Array.from(t.values()),i=new Map,s=new Map;r.forEach(y=>{i.has(y.source)||i.set(y.source,[]),i.get(y.source).push(y.target),s.has(y.target)||s.set(y.target,[]),s.get(y.target).push(y.source)});const e=new Map,c=(y,l)=>{const p=e.get(y);p!==void 0&&p>=l||(e.set(y,l),(i.get(y)||[]).forEach(x=>c(x,l+1)))};n.filter(y=>!s.has(y.id)||s.get(y.id).length===0).forEach(y=>c(y.id,0)),n.forEach(y=>{e.has(y.id)||e.set(y.id,0)});const h=Math.max(...e.values(),0),d=new Map;n.forEach(y=>{const l=e.get(y.id)||0;d.has(l)||d.set(l,[]),d.get(l).push(y)}),n.forEach(y=>{const l=r.filter(x=>x.source===y.id).reduce((x,b)=>x+b.value,0),p=r.filter(x=>x.target===y.id).reduce((x,b)=>x+b.value,0);y.value=Math.max(l,p,10)});const u=800,f=500,m=60,g=(u-m*2)/(h+1||1);for(let y=0;y<=h;y++){const l=d.get(y)||[],p=l.reduce((b,C)=>b+Math.max(30,C.value*2),0)+(l.length-1)*20;let x=(f-p)/2;l.forEach(b=>{b.x=m+y*g,b.y=x,b.height=Math.max(30,b.value*2),b.layer=y,x+=b.height+20})}return r.forEach(y=>{const l=t.get(y.source),p=t.get(y.target);l&&p&&(y.sourceY=l.y+l.height/2,y.targetY=p.y+p.height/2,y.thickness=Math.max(4,y.value*1.5))}),{nodes:n,links:r}},swimlane:a=>{const t=[],r=[],n=[];let i=null,s=0;a.split(`
`).forEach(f=>{if(f=f.trim(),!f||f.startsWith("#"))return;const m=f.match(/^\[(.+?)\]$/)||f.match(/^lane:\s*(.+)$/i);if(m){i={id:`lane-${t.length}`,name:m[1].trim(),nodes:[]},t.push(i);return}const g=f.match(/^\((\w+)\)\s*(.+?)(?:\s*->\s*(.+))?$/)||f.match(/^(.+?)\s*->\s*(.+)$/);if(g){let y,l,p;g[1]&&g[2]&&f.startsWith("(")?(y=g[1].toLowerCase(),l=g[2].trim(),p=g[3]):(y="process",l=g[1].trim(),p=g[2]);const x={start:"start",end:"end",decision:"diamond",diamond:"diamond",process:"rect",task:"rect",rect:"rect",action:"rect",document:"document",doc:"document",data:"parallelogram",io:"parallelogram"},b=`n${s++}`,C={id:b,label:l,type:x[y]||"rect",lane:(i==null?void 0:i.id)||null};r.push(C),i&&i.nodes.push(b),p&&p.split(",").map(k=>k.trim()).forEach(k=>{const S=k.match(/^(.+?):\s*(.+)$/),E=S?S[1].trim():k,j=S?S[2].trim():"";n.push({id:`e${n.length}`,source:b,targetLabel:E,label:j})})}else if(i&&f){const y=f.match(/^\((\w+)\)\s*(.+)$/)||[null,"process",f],l=y[1]||"process",p=y[2]||f,x={start:"start",end:"end",decision:"diamond",diamond:"diamond",process:"rect",task:"rect",rect:"rect",action:"rect"},b=`n${s++}`;r.push({id:b,label:p,type:x[l.toLowerCase()]||"rect",lane:i.id}),i.nodes.push(b)}}),n.forEach(f=>{const m=r.find(g=>g.label.toLowerCase()===f.targetLabel.toLowerCase());m&&(f.target=m.id)});const e=n.filter(f=>f.target),c=120,h=140,d=50;t.forEach((f,m)=>{f.y=m*c,f.height=c,r.filter(y=>y.lane===f.id).forEach((y,l)=>{y.x=180+l*(h+60),y.y=f.y+(c-d)/2,y.width=h,y.height=d})});const u=r.filter(f=>!f.lane);if(u.length>0){const f={id:"default",name:"General",nodes:[],y:t.length*c,height:c};t.push(f),u.forEach((m,g)=>{m.lane="default",m.x=180+g*(h+60),m.y=f.y+(c-d)/2,m.width=h,m.height=d})}return{lanes:t,nodes:r,edges:e}}};function Pg({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:100,y:0}),[c,h]=M.useState(new Set),d=M.useMemo(()=>{const l=[],p=[],x=new Map,b=50,C=j=>Math.max(120,((j==null?void 0:j.length)||5)*9+50),w=(j,$)=>{var A;const R=C(j.label);x.set($,Math.max(x.get($)||0,R)),(A=j.children)!=null&&A.length&&!c.has(j.id)&&j.children.forEach(_=>w(_,$+1))},k=j=>{let $=0;for(let R=0;R<j;R++)$+=(x.get(R)||120)+b;return $},S=j=>{var $;return!(($=j.children)!=null&&$.length)||c.has(j.id)?38:j.children.reduce((R,A)=>R+S(A)+16,-16)},E=(j,$,R,A,_)=>{var V,J,Z;const T=S(j),P=R+T/2,W=C(j.label),N=$===0?v.purple:_,G=k($);if(l.push({id:j.id,label:j.label||"",defaultX:G,defaultY:P,width:W,level:$,color:N,hasChildren:((V=j.children)==null?void 0:V.length)>0,isCollapsed:c.has(j.id),childCount:((J=j.children)==null?void 0:J.length)||0}),A&&p.push({id:`e-${A}-${j.id}`,source:A,target:j.id,color:N}),(Z=j.children)!=null&&Z.length&&!c.has(j.id)){let ae=R;j.children.forEach((q,L)=>{E(q,$+1,ae,j.id,$===0?pe[L%pe.length]:_),ae+=S(q)+16})}};if(a!=null&&a.label&&(w(a,0),E(a,0,0,null,pe[0]),l.length)){const j=Math.min(...l.map(R=>R.defaultY)),$=Math.max(...l.map(R=>R.defaultY));l.forEach(R=>{R.defaultY+=-(j+$)/2+300})}return{nodes:l,edges:p}},[a,c]),u=l=>e.getNodePosition(l.id,l.defaultX,l.defaultY),f=(l,p)=>{const x=u(l),b=u(p),C=x.x+l.width+5,w=x.y,k=b.x-5,S=b.y,E=k-C,j=Math.min(Math.abs(E)*.4,80);return`M ${C} ${w} C ${C+j} ${w}, ${k-j} ${S}, ${k} ${S}`},m=M.useCallback(()=>{const l=e.finishEditing();if(l.nodeId&&l.newValue&&n){const p=d.nodes.find(x=>x.id===l.nodeId);p&&p.label!==l.newValue&&n(l.nodeId,p.label,l.newValue)}},[e,d.nodes,n]);M.useEffect(()=>{const l=p=>{const b=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?p.metaKey:p.ctrlKey;if(!e.editingNode){if((p.key==="Delete"||p.key==="Backspace")&&e.selectedNodes.size>0&&i){p.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(b&&p.key.toLowerCase()==="c"&&e.selectedNodes.size>0){p.preventDefault(),e.copySelectedNodes(d.nodes);return}if(b&&p.key.toLowerCase()==="v"&&e.clipboard&&s){p.preventDefault();const C=e.pasteNodes();C&&s(C);return}}};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e,d.nodes,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const l=e.getNodesInSelectionBox(d.nodes.map(p=>({...p,x:p.defaultX,y:p.defaultY})),e.selectionBox);l.length>0&&e.setSelectedNodes(new Set(l))}},[e.isSelecting,e.selectionBox,d.nodes,e]);const g=M.useCallback(l=>{(l.target===e.canvasRef.current||l.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]),y=M.useCallback(l=>{h(p=>{const x=new Set(p);return x.has(l)?x.delete(l):x.add(l),x})},[]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`},children:[o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:g,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${30*e.zoom}px ${30*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsx("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[d.edges.map(l=>{const p=d.nodes.find(w=>w.id===l.source),x=d.nodes.find(w=>w.id===l.target);if(!p||!x)return null;const b=f(p,x),C=r?ve.stroke:l.color;return o.jsxs("g",{children:[!r&&o.jsx("path",{d:b,fill:"none",stroke:C,strokeWidth:6,strokeOpacity:.1,strokeLinecap:"round"}),!r&&o.jsx("path",{d:b,fill:"none",stroke:C,strokeWidth:3,strokeOpacity:.25,strokeLinecap:"round"}),o.jsx("path",{d:b,fill:"none",stroke:C,strokeWidth:r?2.5:2,strokeOpacity:r?1:.8,strokeLinecap:"round"})]},l.id)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:"rgba(124,58,237,0.1)",stroke:v.purple,strokeWidth:2,strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:d.nodes.map(l=>{const p=u(l),x=e.nodeColors[l.id]||l.color,b=e.dragging===l.id,C=e.selectedNodes.has(l.id),w=e.editingNode===l.id;return o.jsxs("div",{onMouseDown:k=>e.handleNodeMouseDown(k,l.id,p.x,p.y),onDoubleClick:k=>e.handleNodeDoubleClick(k,l.id,l.label),onContextMenu:k=>e.handleNodeContextMenu(k,l.id),style:{position:"absolute",left:p.x,top:p.y-19,width:l.width,height:38,background:r?ve.fill:l.level===0?`linear-gradient(135deg, ${x}, ${x}dd)`:jt(x),border:r?`2px solid ${ve.stroke}`:`2px solid ${x}`,borderRadius:l.level===0?19:10,display:"flex",alignItems:"center",justifyContent:"center",cursor:b?"grabbing":"grab",boxShadow:Je(x,b,C,r),transition:b?"none":"box-shadow 0.2s, background 0.2s",fontFamily:Jr(r)},children:[o.jsx(Xe,{isEditing:w,value:w?e.editValue:l.label,onChange:e.setEditValue,onFinish:m,onCancel:e.cancelEditing,style:{color:r?ve.stroke:l.level===0?"#fff":t.textPrimary,fontSize:r?p2(l.level===0?14:13):l.level===0?14:13,fontWeight:l.level===0?700:500}}),l.hasChildren&&o.jsx("div",{onClick:k=>{k.stopPropagation(),y(l.id)},style:{position:"absolute",right:-28,width:24,height:24,borderRadius:"50%",background:x,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:16,fontWeight:700,cursor:"pointer"},children:l.isCollapsed?"+":"−"})]},l.id)})})]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(l=>Math.min(l*1.2,3)),onZoomOut:()=>e.setZoom(l=>Math.max(l*.8,.2)),onFit:()=>{},onReset:()=>{e.resetView(),h(new Set)},zoom:e.zoom,snapToGrid:e.snapToGrid,onToggleSnap:()=>e.setSnapToGrid(l=>!l)}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(124,58,237,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.selectedNodes.size," selected • ⌘C copy • ⌘V paste • Del remove"]}),e.clipboard&&e.clipboard.length>0&&e.selectedNodes.size===0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(16,185,129,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.clipboard.length," in clipboard • ⌘V to paste"]}),e.contextMenu&&o.jsx(rt,{x:e.contextMenu.x,y:e.contextMenu.y,nodeId:e.contextMenu.nodeId,currentIcon:e.nodeIcons[e.contextMenu.nodeId],currentShape:e.nodeShapes[e.contextMenu.nodeId],onSelectColor:e.setNodeColor,onSelectIcon:e.setNodeIcon,onSelectShape:e.setNodeShape,onClose:e.closeContextMenu,theme:t})]})}const b2=(a,t=1e3)=>{let u=80;const f=[];return a.forEach(m=>{const g=m.nodes.length,y=Math.min(g,5),l=Math.ceil(g/5),p=y*140+(y-1)*25,x=Math.max(p+40*2,350),C=l*70+(l-1)*15+40*2+35,w=(t-x)/2,k=u,S=m.nodes.map((E,j)=>{const $=Math.floor(j/5),R=j%5,A=Math.min(5,g-$*5),_=A*140+(A-1)*25,T=w+(x-_)/2;return{...E,x:T+R*165+140/2,y:k+35+40+$*85+70/2,width:140,height:70}});f.push({...m,x:w,y:k,width:x,height:C,nodes:S}),u+=C+30}),{layers:f,totalHeight:u+20,totalWidth:t}};function Jh({data:a,theme:t=Se.dark}){const r=Te({x:50,y:30}),{title:n,subtitle:i,layers:s=[],interLayerConnections:e=[]}=a,c=M.useMemo(()=>b2(s),[s]),h=M.useMemo(()=>{if(!c.layers.length)return{x:0,y:0,width:800,height:600};if(c.layers.flatMap(y=>y.nodes).length===0)return{x:0,y:0,width:800,height:600};const u=Math.min(...c.layers.map(y=>y.x))-50,f=Math.max(...c.layers.map(y=>y.x+y.width))+50,m=0,g=c.totalHeight+50;return{x:u,y:m,width:f-u,height:g-m}},[c]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`},children:[o.jsxs("div",{ref:r.canvasRef,className:"canvas-bg",onMouseDown:r.handleCanvasMouseDown,onMouseMove:r.handleMouseMove,onMouseUp:r.handleMouseUp,onMouseLeave:r.handleMouseUp,onWheel:r.handleWheel,style:{width:"100%",height:"100%",cursor:r.isPanning?"grabbing":"grab"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*r.zoom}px ${25*r.zoom}px`,backgroundPosition:`${r.pan.x}px ${r.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:o.jsx("marker",{id:"layered-arrow",markerWidth:"10",markerHeight:"8",refX:"9",refY:"4",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 10 4 L 0 8 L 2.5 4 Z",fill:t.textSecondary})})}),o.jsxs("g",{transform:`translate(${r.pan.x}, ${r.pan.y}) scale(${r.zoom})`,children:[c.layers.map(d=>o.jsxs("g",{children:[o.jsx("rect",{x:d.x,y:d.y,width:d.width,height:d.height,fill:d.color,stroke:d.borderColor,strokeWidth:2,strokeDasharray:"8,4",rx:16,opacity:.95}),o.jsx("text",{x:d.x+d.width/2,y:d.y+22,textAnchor:"middle",fill:t.textPrimary,fontSize:"13",fontWeight:"600",fontFamily:"system-ui, -apple-system, sans-serif",opacity:.85,children:d.label})]},d.id)),e.map((d,u)=>{const f=c.layers.find(x=>x.id===d.fromLayer),m=c.layers.find(x=>x.id===d.toLayer);if(!f||!m)return null;const g=f.x+f.width/2,y=f.y+f.height+2,l=m.y-2,p=(y+l)/2;return o.jsxs("g",{children:[o.jsx("path",{d:`M ${g} ${y} L ${g} ${l-8}`,fill:"none",stroke:t.textSecondary,strokeWidth:2,markerEnd:"url(#layered-arrow)",opacity:.5}),d.label&&o.jsx("text",{x:g+15,y:p,fill:t.textSecondary,fontSize:"10",fontFamily:"system-ui",children:d.label})]},`conn-${u}`)})]})]}),o.jsxs("div",{style:{position:"absolute",transform:`translate(${r.pan.x}px, ${r.pan.y}px) scale(${r.zoom})`,transformOrigin:"0 0",pointerEvents:"none"},children:[(n||i)&&o.jsxs("div",{style:{position:"absolute",top:15,left:0,right:0,textAlign:"center",width:c.totalWidth},children:[n&&o.jsx("h2",{style:{margin:0,fontSize:"1.3rem",fontWeight:700,color:t.textPrimary,fontFamily:"system-ui, -apple-system, sans-serif"},children:n}),i&&o.jsx("p",{style:{margin:"4px 0 0",fontSize:"0.85rem",color:t.textSecondary,fontFamily:"system-ui, -apple-system, sans-serif"},children:i})]}),c.layers.flatMap(d=>d.nodes.map(u=>o.jsxs("div",{style:{position:"absolute",left:u.x-u.width/2,top:u.y-u.height/2,width:u.width,height:u.height,background:"white",border:`2px solid ${u.color||"#e2e8f0"}`,borderRadius:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",pointerEvents:"auto",cursor:"default"},children:[o.jsx("span",{style:{fontSize:"0.8rem",fontWeight:600,color:"#1e293b",textAlign:"center",padding:"0 8px",fontFamily:"system-ui, -apple-system, sans-serif"},children:u.label}),u.description&&o.jsx("span",{style:{fontSize:"0.65rem",color:"#64748b",textAlign:"center",padding:"0 6px",marginTop:2,maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontFamily:"system-ui, -apple-system, sans-serif"},children:u.description})]},u.id)))]})]}),o.jsx(Pe,{onZoomIn:()=>r.setZoom(d=>Math.min(d*1.2,2.5)),onZoomOut:()=>r.setZoom(d=>Math.max(d*.8,.3)),onFit:()=>r.fitToView(h),onReset:r.resetView,zoom:r.zoom})]})}function _g({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:0,y:30}),{nodes:c=[],edges:h=[],groups:d=[]}=a,u=S=>e.getNodePosition(S.id,S.x,S.y),[f,m]=M.useState({}),g=150,y=90,l=S=>S.shape==="cylinder"||["database","cache","storage","db","redis","s3","blob"].includes(S.type)?"cylinder":S.shape==="hexagon"||["gateway","loadbalancer","lb","api","proxy","cdn","firewall"].includes(S.type)?"hexagon":"rect",p=M.useMemo(()=>{if(!c||c.length===0)return{x:0,y:0,width:800,height:600};const S=c.map(T=>{var W;return((W=e.nodePositions)==null?void 0:W[T.id])||{x:T.x||0,y:T.y||0}});if(S.length===0)return{x:0,y:0,width:800,height:600};const E=S.map(T=>T.x),j=S.map(T=>T.y),$=Math.min(...E)-g,R=Math.max(...E)+g,A=Math.min(...j)-y,_=Math.max(...j)+y;return{x:$,y:A,width:R-$,height:_-A}},[c,e.nodePositions]),x=S=>{switch(S.style||"solid"){case"dotted":return{strokeDasharray:"2,4",strokeWidth:2,animated:!1};case"dashed":return{strokeDasharray:"10,6",strokeWidth:2,animated:!1};case"thick":return{strokeDasharray:null,strokeWidth:3.5,animated:!1};case"async":return{strokeDasharray:"4,4",strokeWidth:2,animated:!0};case"animated":return{strokeDasharray:null,strokeWidth:2.5,animated:!0};default:return{strokeDasharray:null,strokeWidth:2.5,animated:!1}}},b=(S,E,j,$)=>{const R=E.x-S.x,A=E.y-S.y,_=j/2,T=$/2;if(R===0&&A===0)return{x:S.x,y:S.y};const P=Math.abs(R),W=Math.abs(A);if(P*T>W*_){const N=R>0?1:-1;return{x:S.x+N*_,y:S.y+A/P*_}}else{const N=A>0?1:-1;return{x:S.x+R/W*T,y:S.y+N*T}}},C=M.useCallback(()=>{const S=e.finishEditing();if(S.nodeId&&S.newValue&&n){const E=c.find(j=>j.id===S.nodeId);E&&E.label!==S.newValue&&n(S.nodeId,E.label,S.newValue)}},[e,c,n]),w=M.useCallback(()=>{if(!c||c.length===0)return;const S=150,E=100,j=40,$=30,R=40,A=60,_=100,T=100,P=4,W=new Map,N=[];c.forEach(Z=>{Z.group?(W.has(Z.group)||W.set(Z.group,[]),W.get(Z.group).push(Z)):N.push(Z)});const G={},V={};let J=T;if(N.length>0){const Z=Math.min(P,N.length),ae=Z*S+(Z-1)*j,q=_+200;N.forEach((X,I)=>{const B=I%Z,z=Math.floor(I/Z);G[X.id]={x:q+B*(S+j)+S/2-ae/2,y:J+z*(E+$)+E/2}});const L=Math.ceil(N.length/Z);J+=L*(E+$)+A}d.forEach((Z,ae)=>{const q=W.get(Z.name)||[];if(q.length===0)return;const L=Math.min(P,q.length),X=Math.ceil(q.length/L),I=L*S+(L-1)*j,B=X*E+(X-1)*$,z=_,ce=J;q.forEach((xe,ue)=>{const _e=ue%L,Re=Math.floor(ue/L);G[xe.id]={x:z+R+_e*(S+j)+S/2,y:ce+R+30+Re*(E+$)+E/2}}),V[Z.id]={x:z,y:ce,width:I+R*2,height:B+R*2+30,color:Z.color,borderColor:Z.borderColor},J+=B+R*2+30+A}),e.setPositions(G),m(V)},[c,h,d,e]);M.useEffect(()=>{const S=E=>{const $=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?E.metaKey:E.ctrlKey;if(!e.editingNode){if((E.key==="Delete"||E.key==="Backspace")&&e.selectedNodes.size>0&&i){E.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if($&&E.key.toLowerCase()==="c"&&e.selectedNodes.size>0){E.preventDefault(),e.copySelectedNodes(c);return}if($&&E.key.toLowerCase()==="v"&&e.clipboard&&s){E.preventDefault();const R=e.pasteNodes();R&&s(R);return}}};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[e,c,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const S=e.getNodesInSelectionBox(c,e.selectionBox);S.length>0&&e.setSelectedNodes(new Set(S))}},[e.isSelecting,e.selectionBox,c,e]);const k=M.useCallback(S=>{(S.target===e.canvasRef.current||S.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`},children:[o.jsx("style",{children:"@keyframes archFlowDash { to { stroke-dashoffset: -20; } }"}),o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:k,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsxs("defs",{children:[o.jsx("marker",{id:"arch-arr",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:v.purple})}),o.jsx("marker",{id:"arch-arr-thick",markerWidth:"10",markerHeight:"8",refX:"9",refY:"4",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 10 4 L 0 8 L 2.5 4 Z",fill:v.purple})})]}),o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[d.map(S=>{const E=f[S.id]||S;return o.jsxs("g",{children:[o.jsx("rect",{x:E.x,y:E.y,width:E.width,height:E.height,fill:`${S.color}08`,stroke:S.color,strokeWidth:2,strokeDasharray:"8,4",rx:12,opacity:.8}),o.jsx("text",{x:E.x+16,y:E.y+24,fill:S.color,fontSize:"14",fontWeight:"600",fontFamily:"system-ui",children:S.name})]},S.id)}),h.map(S=>{const E=c.find(B=>B.id===S.source),j=c.find(B=>B.id===S.target);if(!E||!j)return null;const $=u(E),R=u(j),A=E.width||g,_=E.height||y,T=j.width||g,P=j.height||y,W=b($,R,A,_),N=b(R,$,T,P),G=W.x,V=W.y,J=N.x,Z=N.y,ae=(G+J)/2,q=(V+Z)/2,L=r?Ig(G,V,J,Z,!0):nr(G,V,J,Z),X=r?ve.stroke:v.purple,I=x(S);return o.jsxs("g",{children:[!r&&o.jsx("path",{d:L,fill:"none",stroke:X,strokeWidth:I.strokeWidth*4,strokeOpacity:.08,strokeLinecap:"round"}),!r&&o.jsx("path",{d:L,fill:"none",stroke:X,strokeWidth:I.strokeWidth*2,strokeOpacity:.2,strokeLinecap:"round"}),o.jsx("path",{d:L,fill:"none",stroke:X,strokeWidth:r?2.5:I.strokeWidth,strokeDasharray:I.strokeDasharray,markerEnd:r?"":S.style==="thick"?"url(#arch-arr-thick)":"url(#arch-arr)",opacity:r?1:.95,strokeLinecap:"round"}),!r&&I.animated&&o.jsx("path",{d:L,fill:"none",stroke:"rgba(255,255,255,0.6)",strokeWidth:I.strokeWidth,strokeDasharray:"4,12",strokeLinecap:"round",style:{animation:"archFlowDash 0.8s linear infinite"}}),S.label&&o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:ae-Math.max(S.label.length*4,40),y:q-10,width:Math.max(S.label.length*8,80),height:20,rx:4,fill:t.cardBg,stroke:v.purple,strokeWidth:1,opacity:.95}),o.jsx("text",{x:ae,y:q+4,textAnchor:"middle",fill:t.textPrimary,fontSize:"10",fontFamily:"system-ui",fontWeight:"500",children:S.label})]})]},S.id)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:"rgba(124,58,237,0.1)",stroke:v.purple,strokeWidth:2,strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})]}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:c.map(S=>{const E=u(S),j=l(S),$=e.nodeColors[S.id]||S.color,R=e.dragging===S.id,A=e.selectedNodes.has(S.id),_=e.editingNode===S.id,T=S.description&&S.description.length>0,P=S.groupColorIndex>=0,W=P?$:jt($,r);let N={position:"absolute",left:E.x-75,top:E.y-45,width:150,height:T?100:90,background:W,border:A?`2px solid ${v.blue}`:P?"none":`2px solid ${$}`,borderRadius:j==="person"?"50% 50% 8px 8px":8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:R?"grabbing":"grab",boxShadow:A?`0 0 0 3px ${v.blue}40`:P?"0 2px 4px rgba(0,0,0,0.2)":Je($,R,A,r),transition:R?"none":"box-shadow 0.2s",fontFamily:Jr(r),padding:"8px 10px",boxSizing:"border-box"};j==="cylinder"&&(N.borderRadius="50% / 15%",N.height=T?105:95),j==="hexagon"&&(N.clipPath="polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",N.width=155);const G=P?"#fff":r?ve.stroke:t.textPrimary,V=P?"rgba(255,255,255,0.8)":t.textSecondary;return o.jsxs("div",{onMouseDown:J=>e.handleNodeMouseDown(J,S.id,E.x,E.y),onDoubleClick:J=>e.handleNodeDoubleClick(J,S.id,S.label),onContextMenu:J=>e.handleNodeContextMenu(J,S.id),style:N,title:S.description||"",children:[P&&S.typeLabel&&o.jsxs("div",{style:{fontSize:"0.6rem",fontWeight:500,color:"rgba(255,255,255,0.85)",marginBottom:4},children:["[",S.typeLabel,"]"]}),!P&&o.jsx("div",{style:{fontSize:"1.4rem",marginBottom:2},children:e.nodeIcons[S.id]||S.icon}),o.jsx(Xe,{isEditing:_,value:_?e.editValue:S.label,onChange:e.setEditValue,onFinish:C,onCancel:e.cancelEditing,style:{fontSize:P?"0.85rem":r?"1rem":"0.8rem",fontWeight:600,color:G,textAlign:"center"}}),T&&o.jsx("div",{style:{fontSize:"0.65rem",color:V,textAlign:"center",padding:"0 8px",marginTop:4,maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",lineHeight:1.2},children:S.description})]},S.id)})})]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(S=>Math.min(S*1.2,2.5)),onZoomOut:()=>e.setZoom(S=>Math.max(S*.8,.3)),onFit:()=>e.fitToView(p),onReset:e.resetView,zoom:e.zoom,snapToGrid:e.snapToGrid,onToggleSnap:()=>e.setSnapToGrid(S=>!S),onAutoLayout:w}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(124,58,237,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.selectedNodes.size," selected • ⌘C copy • ⌘V paste • Del remove"]}),e.clipboard&&e.clipboard.length>0&&e.selectedNodes.size===0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(16,185,129,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.clipboard.length," in clipboard • ⌘V to paste"]}),e.contextMenu&&o.jsx(rt,{x:e.contextMenu.x,y:e.contextMenu.y,nodeId:e.contextMenu.nodeId,currentIcon:e.nodeIcons[e.contextMenu.nodeId],currentShape:e.nodeShapes[e.contextMenu.nodeId],onSelectColor:e.setNodeColor,onSelectIcon:e.setNodeIcon,onSelectShape:e.setNodeShape,onClose:e.closeContextMenu,theme:t})]})}function Dg({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s,onLinkedTemplateClick:e}){if((a==null?void 0:a.format)==="sections")return o.jsx(v2,{data:a,theme:t});const c=Te({x:50,y:50}),{nodes:h,edges:d}=a,u=y=>c.getNodePosition(y.id,y.x,y.y),f=M.useMemo(()=>{if(!h||h.length===0)return{x:0,y:0,width:400,height:300};const y=h.map(w=>w.x),l=h.map(w=>w.y),p=Math.min(...y)-100,x=Math.max(...y)+100,b=Math.min(...l)-80,C=Math.max(...l)+80;return{x:p,y:b,width:x-p,height:C-b}},[h]),m=M.useCallback(()=>{const y=c.finishEditing();if(y.nodeId&&y.newValue!==void 0&&n){const l=h.find(p=>p.id===y.nodeId);l&&l.label!==y.newValue&&n(y.nodeId,l.label,y.newValue)}},[c,h,n]);M.useEffect(()=>{const y=l=>{const x=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?l.metaKey:l.ctrlKey;if(!c.editingNode){if((l.key==="Delete"||l.key==="Backspace")&&c.selectedNodes.size>0&&i){l.preventDefault(),i(Array.from(c.selectedNodes)),c.clearSelection();return}if(x&&l.key.toLowerCase()==="c"&&c.selectedNodes.size>0){l.preventDefault(),c.copySelectedNodes(h);return}if(x&&l.key.toLowerCase()==="v"&&c.clipboard&&s){l.preventDefault();const b=c.pasteNodes();b&&s(b);return}}};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[c,h,i,s]),M.useEffect(()=>{if(!c.isSelecting&&c.selectionBox){const y=c.getNodesInSelectionBox(h,c.selectionBox);y.length>0&&c.setSelectedNodes(new Set(y))}},[c.isSelecting,c.selectionBox,h,c]);const g=M.useCallback(y=>{(y.target===c.canvasRef.current||y.target.classList.contains("canvas-bg"))&&(c.clearSelection(),c.closeContextMenu())},[c]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsxs("div",{ref:c.canvasRef,className:"canvas-bg",onClick:g,onMouseDown:c.handleCanvasMouseDown,onMouseMove:c.handleMouseMove,onMouseUp:c.handleMouseUp,onMouseLeave:c.handleMouseUp,onTouchStart:c.handleTouchStart,onTouchMove:c.handleTouchMove,onTouchEnd:c.handleTouchEnd,onWheel:c.handleWheel,style:{width:"100%",height:"100%",cursor:c.isPanning||c.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*c.zoom}px ${25*c.zoom}px`,backgroundPosition:`${c.pan.x}px ${c.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:o.jsx("marker",{id:"journey-arrow",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:v.purple})})}),o.jsxs("g",{transform:`translate(${c.pan.x}, ${c.pan.y}) scale(${c.zoom})`,children:[d.map(y=>{const l=h.find(ae=>ae.id===y.source),p=h.find(ae=>ae.id===y.target);if(!l||!p)return null;const x=u(l),b=u(p),C=b.x-x.x,w=b.y-x.y,k=l.shape==="circle"?50:70,S=l.shape==="circle"?50:45,E=p.shape==="circle"?50:70,j=p.shape==="circle"?50:45,$=Math.atan2(w,C),R=x.x+Math.cos($)*k,A=x.y+Math.sin($)*S,_=b.x-Math.cos($)*E,T=b.y-Math.sin($)*j,P=(R+_)/2,W=(A+T)/2,N=Math.min(Math.abs(w)*.3,30),G=P,V=W-N,J=`M ${R} ${A} Q ${G} ${V} ${_} ${T}`,Z=y.label?Math.max(y.label.length*7+16,50):0;return o.jsxs("g",{children:[o.jsx("path",{d:J,fill:"none",stroke:v.purple,strokeWidth:8,strokeOpacity:.08,strokeLinecap:"round"}),o.jsx("path",{d:J,fill:"none",stroke:v.purple,strokeWidth:4,strokeOpacity:.2,strokeLinecap:"round"}),o.jsx("path",{d:J,fill:"none",stroke:v.purple,strokeWidth:2,markerEnd:"url(#journey-arrow)",strokeLinecap:"round",opacity:"0.8"}),o.jsx("path",{d:J,fill:"none",stroke:"rgba(255,255,255,0.6)",strokeWidth:2,strokeLinecap:"round",strokeDasharray:"4,12",children:o.jsx("animate",{attributeName:"stroke-dashoffset",from:"16",to:"0",dur:"0.8s",repeatCount:"indefinite"})}),y.label&&o.jsxs("g",{children:[o.jsx("rect",{x:P-Z/2,y:V-10,width:Z,height:20,rx:10,fill:t.cardBg,stroke:"rgba(124,58,237,0.5)",strokeWidth:1}),o.jsx("text",{x:P,y:V+4,textAnchor:"middle",fill:t.textPrimary,fontSize:10,fontWeight:"500",fontFamily:"system-ui, sans-serif",children:y.label})]})]},y.id)}),c.isSelecting&&c.selectionBox&&o.jsx("rect",{x:Math.min(c.selectionBox.startX,c.selectionBox.endX),y:Math.min(c.selectionBox.startY,c.selectionBox.endY),width:Math.abs(c.selectionBox.endX-c.selectionBox.startX),height:Math.abs(c.selectionBox.endY-c.selectionBox.startY),fill:`${v.blue}20`,stroke:v.blue,strokeWidth:1,strokeDasharray:"4,4"})]})]}),o.jsx("div",{style:{position:"absolute",transform:`translate(${c.pan.x}px, ${c.pan.y}px) scale(${c.zoom})`,transformOrigin:"0 0"},children:h.map(y=>{const l=u(y),p=c.dragging===y.id,x=c.selectedNodes.has(y.id);if(y.shape==="circle")return o.jsxs("div",{onClick:C=>c.handleNodeClick(C,y.id),onDoubleClick:C=>c.handleNodeDoubleClick(C,y.id,y.label),onContextMenu:C=>c.handleNodeContextMenu(C,y.id),onMouseDown:C=>c.handleNodeMouseDown(C,y.id,l.x,l.y),onTouchStart:C=>c.handleNodeTouchStart(C,y.id,l.x,l.y),style:{position:"absolute",left:l.x-50,top:l.y-50,width:100,height:100,borderRadius:"50%",background:jt(y.color),border:`2px solid ${x?v.blue:y.color}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:p?"grabbing":"grab",boxShadow:Je(y.color,p,x),transition:p?"none":"box-shadow 0.2s",touchAction:"none"},children:[o.jsx("span",{style:{fontSize:24},children:y.icon}),c.editingNode===y.id?o.jsx(Xe,{value:c.editingValue,onChange:C=>c.setEditingValue(C),onFinish:m,style:{fontSize:r?14:12,fontWeight:600,color:r?ve.stroke:t.textPrimary,marginTop:4}}):o.jsx("span",{style:{fontSize:r?14:12,fontWeight:600,color:r?ve.stroke:t.textPrimary,marginTop:4},children:y.label})]},y.id);const b=C=>{y.linkedTemplate&&e?(C.stopPropagation(),e(y.linkedTemplate,y.label)):c.handleNodeClick(C,y.id)};return o.jsxs("div",{onClick:b,onDoubleClick:C=>y.linkedTemplate&&e?e(y.linkedTemplate,y.label):c.handleNodeDoubleClick(C,y.id,y.label),onContextMenu:C=>c.handleNodeContextMenu(C,y.id),onMouseDown:C=>c.handleNodeMouseDown(C,y.id,l.x,l.y),onTouchStart:C=>c.handleNodeTouchStart(C,y.id,l.x,l.y),style:{position:"absolute",left:l.x-70,top:l.y-45,width:140,height:90,background:jt(y.color),border:`2px solid ${x?v.blue:y.linkedTemplate?v.cyan:y.color}`,borderRadius:12,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:y.linkedTemplate?"pointer":p?"grabbing":"grab",boxShadow:y.linkedTemplate?`${Je(y.color,p,x)}, 0 0 0 3px ${v.cyan}30`:Je(y.color,p,x),transition:p?"none":"box-shadow 0.2s",touchAction:"none"},children:[y.badge&&o.jsx("div",{style:{position:"absolute",top:-10,right:-10,background:v.red,color:"#fff",fontSize:10,fontWeight:600,padding:"3px 8px",borderRadius:10},children:y.badge}),y.linkedTemplate&&o.jsx("div",{style:{position:"absolute",top:-8,left:-8,background:v.cyan,color:"#fff",fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:6,display:"flex",alignItems:"center",gap:3},children:"🔗 Click to open"}),o.jsx("span",{style:{fontSize:22},children:y.icon}),c.editingNode===y.id?o.jsx(Xe,{value:c.editingValue,onChange:C=>c.setEditingValue(C),onFinish:m,style:{fontSize:r?14:11,fontWeight:600,color:r?ve.stroke:t.textPrimary,marginTop:4}}):o.jsx("span",{style:{fontSize:r?14:11,fontWeight:600,color:r?ve.stroke:t.textPrimary,marginTop:4},children:y.label})]},y.id)})})]}),c.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,0.8)",padding:"6px 12px",borderRadius:6,fontSize:"0.75rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{children:[c.selectedNodes.size," selected"]}),o.jsx("span",{style:{opacity:.6},children:"|"}),o.jsx("span",{style:{opacity:.7},children:"Del to delete • ⌘C copy • ⌘V paste"})]}),c.clipboard&&o.jsxs("div",{style:{position:"absolute",top:c.selectedNodes.size>0?48:12,left:12,background:`${v.green}20`,padding:"4px 10px",borderRadius:4,fontSize:"0.7rem",color:v.green,border:`1px solid ${v.green}40`},children:[c.clipboard.length," node",c.clipboard.length>1?"s":""," copied"]}),o.jsx(Pe,{onZoomIn:()=>c.setZoom(y=>Math.min(y*1.2,3)),onZoomOut:()=>c.setZoom(y=>Math.max(y*.8,.2)),onFit:()=>c.fitToView(f),onReset:c.resetView,zoom:c.zoom}),c.contextMenu&&o.jsx(rt,{position:c.contextMenu,onClose:()=>c.closeContextMenu(),nodeId:c.contextMenu.nodeId})]})}function v2({data:a,theme:t=Se.dark}){var y,l;const{title:r,actors:n,sections:i}=a,s=M.useRef(null),[e,c]=M.useState({width:1200,height:600}),h=M.useMemo(()=>{const p=[];return i.forEach((x,b)=>{x.tasks.forEach((C,w)=>{p.push({...C,section:x.name,sectionIndex:b,sectionColor:x.color})})}),p},[i]);M.useEffect(()=>{if(s.current){const p=s.current.getBoundingClientRect();c({width:Math.max(p.width,800),height:Math.max(p.height-80,400)})}},[]);const d=M.useMemo(()=>{const p={top:120,bottom:100,left:80,right:80},x=Math.max(e.width-p.left-p.right,h.length*150),b=e.height-p.top-p.bottom,C=x/Math.max(h.length-1,1),w=h.map((A,_)=>{const T=p.left+_*C,P=b*.2,W=Math.sin(_*.8)*P,G=p.top+b/2+W;return{...A,x:T,y:G,index:_}});let k="";if(w.length>0){k=`M ${w[0].x} ${w[0].y}`;for(let A=1;A<w.length;A++){const _=w[A-1],T=w[A],P=_.x+(T.x-_.x)*.5,W=_.x+(T.x-_.x)*.5;k+=` C ${P} ${_.y}, ${W} ${T.y}, ${T.x} ${T.y}`}}const S=w.map((A,_)=>{const T=p.top+50-(A.score-1)*12;return{x:A.x,y:T,score:A.score}});let E="";if(S.length>0){E=`M ${S[0].x} ${S[0].y}`;for(let A=1;A<S.length;A++){const _=S[A-1],T=S[A],P=_.x+(T.x-_.x)*.5;E+=` C ${P} ${_.y}, ${P} ${T.y}, ${T.x} ${T.y}`}}const j=[];let $=-1,R=0;return w.forEach((A,_)=>{A.sectionIndex!==$&&($>=0&&j.push({index:$,start:R,end:A.x-C/2,color:i[$].color,name:i[$].name}),$=A.sectionIndex,R=_===0?p.left-40:A.x-C/2)}),$>=0&&j.push({index:$,start:R,end:p.left+x+40,color:i[$].color,name:i[$].name}),{nodes:w,pathString:k,emotionPathString:E,emotionPath:S,sectionBounds:j,padding:p,availableWidth:x}},[h,e,i]),u=p=>({1:"#ef4444",2:"#f97316",3:"#eab308",4:"#22c55e",5:"#10b981"})[p]||"#64748b",f=p=>{const x=p.toLowerCase();return x.includes("user")?v.pink:x.includes("system")?v.blue:x.includes("admin")?v.purple:v.cyan},m=p=>{const x=p.toLowerCase();return x.includes("user")?"👤":x.includes("system")?"⚙️":x.includes("admin")?"👨‍💼":"🧑"},g=d.padding.left+d.availableWidth+d.padding.right;return o.jsxs("div",{ref:s,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:`linear-gradient(180deg, ${t.canvasBg} 0%, rgba(15,23,42,1) 100%)`,borderRadius:12,border:`1px solid ${t.border}`},children:[r&&o.jsxs("div",{style:{position:"absolute",top:16,left:24,zIndex:10,display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",boxShadow:"0 4px 20px rgba(139,92,246,0.4)"},children:"🚀"}),o.jsxs("div",{children:[o.jsx("h2",{style:{margin:0,fontSize:"1.1rem",fontWeight:700,color:t.textPrimary},children:r}),o.jsxs("p",{style:{margin:0,fontSize:"0.75rem",color:t.textSecondary},children:[h.length," steps across ",i.length," phases"]})]})]}),n.length>0&&o.jsx("div",{style:{position:"absolute",top:16,right:24,zIndex:10,display:"flex",gap:8},children:n.map((p,x)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:20,background:`${f(p.name)}15`,border:`1px solid ${f(p.name)}40`,backdropFilter:"blur(8px)"},children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:m(p.name)}),o.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,color:f(p.name)},children:p.name})]},x))}),o.jsx("div",{style:{width:"100%",height:"100%",overflowX:"auto",overflowY:"hidden"},children:o.jsxs("svg",{width:Math.max(g,e.width),height:e.height,style:{display:"block"},children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"pathGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:v.purple}),o.jsx("stop",{offset:"50%",stopColor:v.pink}),o.jsx("stop",{offset:"100%",stopColor:v.cyan})]}),o.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[o.jsx("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"coloredBlur"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),d.sectionBounds.map((p,x)=>o.jsxs("linearGradient",{id:`sectionGrad${x}`,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:p.color,stopOpacity:"0.08"}),o.jsx("stop",{offset:"100%",stopColor:p.color,stopOpacity:"0.02"})]},x)),o.jsxs("linearGradient",{id:"emotionGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:"#10b981"}),o.jsx("stop",{offset:"50%",stopColor:"#eab308"}),o.jsx("stop",{offset:"100%",stopColor:"#10b981"})]})]}),d.sectionBounds.map((p,x)=>o.jsxs("g",{children:[o.jsx("rect",{x:p.start,y:60,width:p.end-p.start,height:e.height-120,rx:16,fill:`url(#sectionGrad${x})`}),o.jsx("text",{x:p.start+(p.end-p.start)/2,y:85,textAnchor:"middle",fill:p.color,fontSize:"11",fontWeight:"600",fontFamily:"system-ui",opacity:"0.8",children:p.name.toUpperCase()}),o.jsx("circle",{cx:p.start+30,cy:85,r:12,fill:p.color,opacity:"0.9"}),o.jsx("text",{x:p.start+30,y:89,textAnchor:"middle",fill:"#fff",fontSize:"10",fontWeight:"700",fontFamily:"system-ui",children:x+1})]},`section-${x}`)),o.jsxs("g",{children:[o.jsx("path",{d:d.emotionPathString+` L ${((y=d.emotionPath[d.emotionPath.length-1])==null?void 0:y.x)||0} ${d.padding.top+60} L ${((l=d.emotionPath[0])==null?void 0:l.x)||0} ${d.padding.top+60} Z`,fill:"url(#emotionGrad)",opacity:"0.1"}),o.jsx("path",{d:d.emotionPathString,fill:"none",stroke:"url(#emotionGrad)",strokeWidth:"2",strokeDasharray:"4,4",opacity:"0.6"}),d.emotionPath.map((p,x)=>o.jsx("circle",{cx:p.x,cy:p.y,r:4,fill:u(p.score),opacity:"0.8"},`emotion-${x}`)),o.jsx("text",{x:d.padding.left-45,y:d.padding.top+10,fill:t.textSecondary,fontSize:"9",fontFamily:"system-ui",children:"😊 Great"}),o.jsx("text",{x:d.padding.left-45,y:d.padding.top+58,fill:t.textSecondary,fontSize:"9",fontFamily:"system-ui",children:"😞 Poor"})]}),o.jsx("path",{d:d.pathString,fill:"none",stroke:"url(#pathGradient)",strokeWidth:"6",strokeLinecap:"round",opacity:"0.2",filter:"url(#glow)"}),o.jsx("path",{d:d.pathString,fill:"none",stroke:"url(#pathGradient)",strokeWidth:"3",strokeLinecap:"round",opacity:"0.8"}),o.jsx("path",{d:d.pathString,fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"8,40",opacity:"0.6",children:o.jsx("animate",{attributeName:"stroke-dashoffset",from:"48",to:"0",dur:"2s",repeatCount:"indefinite"})}),d.nodes.map((p,x)=>{const C=p.actors.length>0?f(p.actors[0]):p.sectionColor;return o.jsxs("g",{style:{cursor:"pointer"},children:[o.jsx("circle",{cx:p.x,cy:p.y,r:48/2+8,fill:C,opacity:"0.15",filter:"url(#glow)"}),o.jsx("circle",{cx:p.x,cy:p.y,r:48/2+3,fill:"none",stroke:C,strokeWidth:"2",opacity:"0.5"}),o.jsx("circle",{cx:p.x,cy:p.y,r:48/2,fill:`${t.canvasBg}`,stroke:C,strokeWidth:"2"}),o.jsx("circle",{cx:p.x,cy:p.y,r:48/2-4,fill:"none",stroke:u(p.score),strokeWidth:"3",strokeDasharray:`${p.score/5*100} 100`,transform:`rotate(-90 ${p.x} ${p.y})`,opacity:"0.8"}),o.jsx("text",{x:p.x,y:p.y+4,textAnchor:"middle",fill:t.textPrimary,fontSize:"14",fontWeight:"700",fontFamily:"system-ui",children:x+1}),p.actors.length>0&&o.jsxs("g",{children:[o.jsx("circle",{cx:p.x+48/2-4,cy:p.y-48/2+4,r:10,fill:C}),o.jsx("text",{x:p.x+48/2-4,y:p.y-48/2+8,textAnchor:"middle",fontSize:"10",children:m(p.actors[0])})]}),o.jsx("foreignObject",{x:p.x-70,y:p.y+48/2+8,width:"140",height:"50",children:o.jsx("div",{style:{textAlign:"center",fontSize:"0.7rem",fontWeight:500,color:t.textPrimary,lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:p.name})})]},p.id)})]})}),o.jsxs("div",{style:{position:"absolute",bottom:12,left:"50%",transform:"translateX(-50%)",display:"flex",gap:24,padding:"8px 20px",background:"rgba(0,0,0,0.6)",borderRadius:20,backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.1)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("div",{style:{width:20,height:3,background:"linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)",borderRadius:2}}),o.jsx("span",{style:{fontSize:"0.7rem",color:t.textSecondary},children:"Journey Path"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("div",{style:{width:20,height:2,background:"#22c55e",borderRadius:2,opacity:.6}}),o.jsx("span",{style:{fontSize:"0.7rem",color:t.textSecondary},children:"Sentiment"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[[5,4,3,2,1].map(p=>o.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:u(p)}},p)),o.jsx("span",{style:{fontSize:"0.7rem",color:t.textSecondary,marginLeft:4},children:"Score"})]})]})]})}function jr({nodes:a,edges:t,theme:r=Se.dark,sketchMode:n=!1,onLabelChange:i,onDeleteNodes:s,onPasteNodes:e,onEdgeLabelChange:c,onCreateConnection:h}){const d=Te({x:50,y:50}),u={start:{color:v.green,icon:"▶"},end:{color:v.red,icon:"■"},process:{color:v.blue,icon:"⚙️"},decision:{color:v.orange,icon:"◇"},action:{color:v.blue,icon:"▹"},io:{color:v.purple,icon:"📦"},default:{color:v.purple,icon:"📦"}},f=k=>d.getNodePosition(k.id,k.x,k.y),m=M.useMemo(()=>{if(!a||a.length===0)return{x:0,y:0,width:400,height:300};const k=a.map(E=>E.x),S=a.map(E=>E.y);return{x:Math.min(...k)-100,y:Math.min(...S)-80,width:Math.max(...k)-Math.min(...k)+300,height:Math.max(...S)-Math.min(...S)+200}},[a]),g=M.useCallback(()=>{const k=d.finishEditing();if(k.nodeId&&k.newValue&&i){const S=a.find(E=>E.id===k.nodeId);S&&S.label!==k.newValue&&i(k.nodeId,S.label,k.newValue)}},[d,a,i]),y=M.useCallback(()=>{const k=d.finishEdgeEditing();if(k.edgeId&&c){const S=t.find(E=>E.id===k.edgeId);c(k.edgeId,(S==null?void 0:S.label)||"",k.newValue)}},[d,t,c]),l=M.useCallback(()=>{if(!a||a.length===0)return;const k=new Map,S=new Map;a.forEach(N=>{k.set(N.id,[]),S.set(N.id,0)}),t.forEach(N=>{k.has(N.source)&&k.get(N.source).push(N.target),S.has(N.target)&&S.set(N.target,S.get(N.target)+1)});const E=a.filter(N=>S.get(N.id)===0);E.length===0&&E.push(a[0]);const j=new Map,$=E.map(N=>({id:N.id,level:0})),R=new Set;for(;$.length>0;){const{id:N,level:G}=$.shift();if(R.has(N))continue;R.add(N),j.set(N,G),(k.get(N)||[]).forEach(J=>{R.has(J)||$.push({id:J,level:G+1})})}a.forEach(N=>{R.has(N.id)||j.set(N.id,0)});const A=new Map;j.forEach((N,G)=>{A.has(N)||A.set(N,[]),A.get(N).push(G)});const _=120,T=180,P=100,W={};A.forEach((N,G)=>{const V=P+G*_,Z=300-(N.length-1)*T/2;N.forEach((ae,q)=>{W[ae]={x:Z+q*T,y:V}})}),d.setPositions(W),d.fitToView(m)},[a,t,d,m]),p=M.useCallback(()=>{const k=Array.from(d.selectedNodes);if(k.length<3)return;const S=k.map(A=>{var _,T;return{id:A,x:((_=d.positions[A])==null?void 0:_.x)??((T=a.find(P=>P.id===A))==null?void 0:T.x)??0}});S.sort((A,_)=>A.x-_.x);const E=S[0].x,$=(S[S.length-1].x-E)/(S.length-1),R={...d.positions};S.forEach((A,_)=>{var P,W;const T=((P=R[A.id])==null?void 0:P.y)??((W=a.find(N=>N.id===A.id))==null?void 0:W.y)??0;R[A.id]={x:E+_*$,y:T}}),d.setPositions(R)},[d,a]),x=M.useCallback(()=>{const k=Array.from(d.selectedNodes);if(k.length<3)return;const S=k.map(A=>{var _,T;return{id:A,y:((_=d.positions[A])==null?void 0:_.y)??((T=a.find(P=>P.id===A))==null?void 0:T.y)??0}});S.sort((A,_)=>A.y-_.y);const E=S[0].y,$=(S[S.length-1].y-E)/(S.length-1),R={...d.positions};S.forEach((A,_)=>{var P,W;const T=((P=R[A.id])==null?void 0:P.x)??((W=a.find(N=>N.id===A.id))==null?void 0:W.x)??0;R[A.id]={x:T,y:E+_*$}}),d.setPositions(R)},[d,a]);M.useEffect(()=>{if(d.dragging){const k=f({id:d.dragging});d.updateAlignmentGuides(d.dragging,k,a,f)}},[d.dragging,d.positions,a,f,d.updateAlignmentGuides]),M.useEffect(()=>{const k=S=>{const j=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?S.metaKey:S.ctrlKey;if(!(d.editingNode||d.editingEdge)){if((S.key==="Delete"||S.key==="Backspace")&&d.selectedNodes.size>0&&s){S.preventDefault(),s(Array.from(d.selectedNodes)),d.clearSelection();return}if(j&&S.key.toLowerCase()==="c"&&d.selectedNodes.size>0){S.preventDefault(),d.copySelectedNodes(a);return}if(j&&S.key.toLowerCase()==="v"&&d.clipboard&&e){S.preventDefault();const $=d.pasteNodes();$&&e($);return}}};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[d,a,s,e]),M.useEffect(()=>{if(!d.isSelecting&&d.selectionBox){const k=d.getNodesInSelectionBox(a,d.selectionBox);k.length>0&&d.setSelectedNodes(new Set(k))}},[d.isSelecting,d.selectionBox,a,d]);const b=M.useCallback(k=>{(k.target===d.canvasRef.current||k.target.classList.contains("canvas-bg"))&&(d.clearSelection(),d.closeContextMenu(),d.closeEdgeContextMenu(),d.cancelEdgeEditing())},[d]),C=M.useCallback(k=>{const S=d.edgeStyles[k]||"solid",E=d.edgeArrowTypes[k]||"triangle",j=pc.find(R=>R.style===S)||pc[0];let $="url(#flow-arr-triangle)";return E==="none"?$="":E==="open"?$="url(#flow-arr-open)":E==="diamond"?$="url(#flow-arr-diamond)":E==="circle"&&($="url(#flow-arr-circle)"),{strokeDasharray:j.dasharray,animation:j.animated?"flowDash 1s linear infinite":"none",markerEnd:$}},[d.edgeStyles,d.edgeArrowTypes]),w=M.useCallback(k=>{const S=d.handleMouseUp();S&&h&&h(S.source,S.target)},[d,h]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:r.canvasBg,borderRadius:12,border:`1px solid ${r.border}`,touchAction:"none"},children:[o.jsx("style",{children:`
        @keyframes flowDash { to { stroke-dashoffset: -20; } }
        .flow-node:hover .connection-port-right { opacity: 1 !important; transform: translateY(-50%) scale(1.1) !important; }
        .flow-node:hover .connection-port-left { opacity: 0.3 !important; }
        .edge-add-label:hover { opacity: 1 !important; }
      `}),o.jsxs("div",{ref:d.canvasRef,className:"canvas-bg",onClick:b,onMouseDown:d.handleCanvasMouseDown,onMouseMove:d.handleMouseMove,onMouseUp:w,onMouseLeave:w,onTouchStart:d.handleTouchStart,onTouchMove:d.handleTouchMove,onTouchEnd:d.handleTouchEnd,onWheel:d.handleWheel,style:{width:"100%",height:"100%",cursor:d.isPanning||d.dragging?"grabbing":d.isConnecting?"crosshair":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${r.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${r.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*d.zoom}px ${25*d.zoom}px`,backgroundPosition:`${d.pan.x}px ${d.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible"},children:[o.jsxs("defs",{children:[o.jsx("marker",{id:"flow-arr-triangle",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:v.purple})}),o.jsx("marker",{id:"flow-arr-open",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 7 3 L 0 6",fill:"none",stroke:v.purple,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),o.jsx("marker",{id:"flow-arr-diamond",markerWidth:"10",markerHeight:"8",refX:"9",refY:"4",orient:"auto",children:o.jsx("path",{d:"M 0 4 L 5 0 L 10 4 L 5 8 Z",fill:v.purple})}),o.jsx("marker",{id:"flow-arr-circle",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",children:o.jsx("circle",{cx:"4",cy:"4",r:"3",fill:v.purple})}),o.jsx("marker",{id:"flow-arr",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:v.purple})})]}),o.jsxs("g",{transform:`translate(${d.pan.x}, ${d.pan.y}) scale(${d.zoom})`,children:[t.map(k=>{const S=a.find(z=>z.id===k.source),E=a.find(z=>z.id===k.target);if(!S||!E)return null;const j=f(S),$=f(E),R=$.x-j.x,A=$.y-j.y,_=Math.sqrt(R*R+A*A)||1,T=S.type==="decision"?45:40,P=E.type==="decision"?45:40,W=j.x+R/_*T,N=j.y+A/_*35,G=$.x-R/_*P,V=$.y-A/_*35,J=d.edgePathTypes[k.id]||"curved",Z=(W+G)/2,ae=(N+V)/2,q=J==="straight"?0:Math.abs(R)>50?Math.sign(A||1)*20:0;let L;if(J==="straight")L=`M ${W} ${N} L ${G} ${V}`;else if(J==="step")Math.abs(R)>Math.abs(A)?L=`M ${W} ${N} L ${Z} ${N} L ${Z} ${V} L ${G} ${V}`:L=`M ${W} ${N} L ${W} ${ae} L ${G} ${ae} L ${G} ${V}`;else if(J==="rounded")if(Math.abs(R)>Math.abs(A)){const ce=V>N?1:-1;L=`M ${W} ${N} L ${Z-12} ${N} Q ${Z} ${N} ${Z} ${N+ce*12} L ${Z} ${V-ce*12} Q ${Z} ${V} ${Z+12*Math.sign(R)} ${V} L ${G} ${V}`}else{const ce=G>W?1:-1;L=`M ${W} ${N} L ${W} ${ae-Math.sign(A)*12} Q ${W} ${ae} ${W+ce*12} ${ae} L ${G-ce*12} ${ae} Q ${G} ${ae} ${G} ${ae+Math.sign(A)*12} L ${G} ${V}`}else L=n?Ig(W,N,G,V,!0):nr(W,N,G,V);const X=d.editingEdge===k.id,I=X?d.edgeEditValue:k.label||"",B=C(k.id);return o.jsxs("g",{children:[o.jsx("path",{d:L,fill:"none",stroke:"transparent",strokeWidth:20,style:{cursor:"pointer",pointerEvents:"stroke"},onDoubleClick:z=>{z.stopPropagation(),d.handleEdgeDoubleClick(z,k.id,k.label||"")},onContextMenu:z=>{z.preventDefault(),z.stopPropagation(),d.handleEdgeContextMenu(z,k.id)}}),!n&&o.jsx("path",{d:L,fill:"none",stroke:v.purple,strokeWidth:8,strokeOpacity:.08,strokeLinecap:"round",style:{pointerEvents:"none"}}),!n&&o.jsx("path",{d:L,fill:"none",stroke:v.purple,strokeWidth:4,strokeOpacity:.2,strokeLinecap:"round",style:{pointerEvents:"none"}}),o.jsx("path",{d:L,fill:"none",stroke:n?ve.stroke:v.purple,strokeWidth:n?2.5:2,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:B.strokeDasharray,markerEnd:n?"":B.markerEnd,opacity:.9,style:{animation:n?"none":B.animation,pointerEvents:"none"}}),(I||X)&&o.jsxs("g",{style:{cursor:"pointer"},onDoubleClick:z=>{z.stopPropagation(),d.handleEdgeDoubleClick(z,k.id,k.label||"")},children:[o.jsx("rect",{x:Z-Math.max(I.length,3)*3.5-8,y:ae+q-12,width:Math.max(I.length,3)*7+16,height:22,rx:11,fill:X?"rgba(124,58,237,0.3)":"rgba(15,23,42,0.9)",stroke:X?v.purple:"rgba(124,58,237,0.4)",strokeWidth:X?2:1}),!X&&o.jsx("text",{x:Z,y:ae+q+4,textAnchor:"middle",fill:"#e0e0e0",fontSize:10,fontWeight:500,children:I})]}),!I&&!X&&o.jsxs("g",{style:{cursor:"pointer",opacity:0},className:"edge-add-label",onDoubleClick:z=>{z.stopPropagation(),d.handleEdgeDoubleClick(z,k.id,"")},children:[o.jsx("rect",{x:Z-20,y:ae+q-10,width:40,height:20,rx:10,fill:"rgba(124,58,237,0.2)"}),o.jsx("text",{x:Z,y:ae+q+4,textAnchor:"middle",fill:"#888",fontSize:9,children:"+ label"})]})]},k.id)}),d.isSelecting&&d.selectionBox&&o.jsx("rect",{x:Math.min(d.selectionBox.startX,d.selectionBox.endX),y:Math.min(d.selectionBox.startY,d.selectionBox.endY),width:Math.abs(d.selectionBox.endX-d.selectionBox.startX),height:Math.abs(d.selectionBox.endY-d.selectionBox.startY),fill:"rgba(124,58,237,0.1)",stroke:v.purple,strokeWidth:2,strokeDasharray:"5,5",style:{pointerEvents:"none"}}),d.isConnecting&&d.connectionStart&&d.connectionEnd&&o.jsxs("g",{style:{pointerEvents:"none"},children:[o.jsx("line",{x1:d.connectionStart.x,y1:d.connectionStart.y,x2:d.connectionEnd.x,y2:d.connectionEnd.y,stroke:d.connectionTarget?v.green:v.purple,strokeWidth:3,strokeDasharray:"8,4",opacity:.8}),o.jsx("circle",{cx:d.connectionEnd.x,cy:d.connectionEnd.y,r:8,fill:d.connectionTarget?v.green:v.purple,opacity:.6})]}),d.alignmentGuides.horizontal.map((k,S)=>o.jsx("line",{x1:k.fromX,y1:k.y,x2:k.toX,y2:k.y,stroke:v.cyan,strokeWidth:1,strokeDasharray:"4,4",opacity:.8,style:{pointerEvents:"none"}},`h-${S}`)),d.alignmentGuides.vertical.map((k,S)=>o.jsx("line",{x1:k.x,y1:k.fromY,x2:k.x,y2:k.toY,stroke:v.cyan,strokeWidth:1,strokeDasharray:"4,4",opacity:.8,style:{pointerEvents:"none"}},`v-${S}`))]})]}),d.editingEdge&&(()=>{const k=t.find(P=>P.id===d.editingEdge);if(!k)return null;const S=a.find(P=>P.id===k.source),E=a.find(P=>P.id===k.target);if(!S||!E)return null;const j=f(S),$=f(E),R=(j.x+$.x)/2,A=(j.y+$.y)/2,_=R*d.zoom+d.pan.x,T=A*d.zoom+d.pan.y;return o.jsx("div",{style:{position:"absolute",left:_-50,top:T-12,zIndex:200},children:o.jsx("input",{autoFocus:!0,type:"text",value:d.edgeEditValue,onChange:P=>d.setEdgeEditValue(P.target.value),onKeyDown:P=>{P.key==="Enter"?(P.preventDefault(),y()):P.key==="Escape"&&(P.preventDefault(),d.cancelEdgeEditing())},onBlur:y,placeholder:"Label",style:{width:100,padding:"4px 8px",background:"rgba(15,23,42,0.95)",border:`2px solid ${v.purple}`,borderRadius:8,color:"#fff",fontSize:"0.75rem",textAlign:"center",outline:"none"},onClick:P=>P.stopPropagation(),onMouseDown:P=>P.stopPropagation()})})})(),o.jsx("div",{style:{position:"absolute",transform:`translate(${d.pan.x}px, ${d.pan.y}px) scale(${d.zoom})`,transformOrigin:"0 0"},children:a.map(k=>{var ce,xe;const S=f(k),E=u[k.type]||u.default,j=d.nodeColors[k.id]||k.color||E.color,$=d.dragging===k.id,R=d.selectedNodes.has(k.id),A=d.editingNode===k.id,_=((ce=d.resizing)==null?void 0:ce.nodeId)===k.id,P=d.nodeShapes[k.id]||(k.type==="decision"?"diamond":["start","end"].includes(k.type)?"pill":"rounded"),W=P==="diamond",N=d.getNodeSize(k.id),G=d.nodeSizes[k.id]?N:{width:k.width||N.width,height:k.height||N.height},V=P==="circle",J=Math.max(G.width,G.height),Z=W?70:V?J:G.width,ae=W?70:V?J:G.height;let q=12,L;P==="rectangle"?q=0:P==="rounded"?q=12:P==="circle"?q="50%":P==="pill"?q=ae/2:P==="hexagon"&&(L="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)");let X={position:"absolute",left:S.x-Z/2,top:S.y-ae/2,width:Z,height:ae,background:jt(j,n),border:n?`2px solid ${ve.stroke}`:`2px solid ${j}`,borderRadius:q,clipPath:L,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:$?"grabbing":_?"nwse-resize":"grab",boxShadow:Je(j,$,R,n),transition:$||_?"none":"box-shadow 0.2s, background 0.2s",touchAction:"none",fontFamily:Jr(n)};W&&(X.left=S.x-35,X.top=S.y-35,X.transform="rotate(45deg)",X.borderRadius=8,X.clipPath=void 0);const I=d.isConnecting&&d.connectionTarget===k.id,B=d.isConnecting&&((xe=d.connectionStart)==null?void 0:xe.nodeId)!==k.id,z=W?35:Z/2;return o.jsxs("div",{className:"flow-node",onMouseDown:ue=>d.handleNodeMouseDown(ue,k.id,S.x,S.y),onDoubleClick:ue=>d.handleNodeDoubleClick(ue,k.id,k.label),onContextMenu:ue=>d.handleNodeContextMenu(ue,k.id),onTouchStart:ue=>d.handleNodeTouchStart(ue,k.id,S.x,S.y),onMouseEnter:()=>B&&d.setConnectionTargetNode(k.id),onMouseLeave:()=>d.clearConnectionTarget(),style:{...X,boxShadow:I?`0 0 0 4px ${v.green}, 0 0 30px ${v.green}50`:X.boxShadow},children:[o.jsxs("div",{style:{transform:W?"rotate(-45deg)":"none",textAlign:"center",width:"100%",padding:"0 8px"},children:[(d.nodeIcons[k.id]||E.icon)&&o.jsx("div",{style:{fontSize:"1.2rem"},children:d.nodeIcons[k.id]||E.icon}),o.jsx(Xe,{isEditing:A,value:A?d.editValue:k.label,onChange:d.setEditValue,onFinish:g,onCancel:d.cancelEditing,style:{fontSize:n?"1rem":"0.8rem",fontWeight:600,color:n?ve.stroke:r.textPrimary}})]}),o.jsx("div",{className:"connection-port connection-port-right",onMouseDown:ue=>d.handlePortMouseDown(ue,k.id,S.x+z,S.y),style:{position:"absolute",right:-8,top:"50%",transform:W?"rotate(-45deg) translateY(-50%)":"translateY(-50%)",width:16,height:16,borderRadius:"50%",background:v.purple,border:"3px solid rgba(255,255,255,0.9)",cursor:"crosshair",opacity:0,transition:"opacity 0.15s, transform 0.15s",zIndex:10},title:"Drag to connect"}),o.jsx("div",{className:"connection-port connection-port-left",style:{position:"absolute",left:-8,top:"50%",transform:W?"rotate(-45deg) translateY(-50%)":"translateY(-50%)",width:16,height:16,borderRadius:"50%",background:B?v.green:v.blue,border:"3px solid rgba(255,255,255,0.9)",cursor:"pointer",opacity:B?1:0,transition:"opacity 0.15s, transform 0.15s",zIndex:10,pointerEvents:B?"auto":"none"}}),R&&!W&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"resize-handle resize-handle-se",onMouseDown:ue=>d.handleResizeStart(ue,k.id,"se"),style:{position:"absolute",right:-6,bottom:-6,width:12,height:12,background:v.purple,border:"2px solid #fff",borderRadius:2,cursor:"nwse-resize",zIndex:20}}),o.jsx("div",{className:"resize-handle resize-handle-e",onMouseDown:ue=>d.handleResizeStart(ue,k.id,"e"),style:{position:"absolute",right:-5,top:"50%",transform:"translateY(-50%)",width:10,height:20,background:v.purple,border:"2px solid #fff",borderRadius:2,cursor:"ew-resize",zIndex:20,opacity:.7}}),o.jsx("div",{className:"resize-handle resize-handle-s",onMouseDown:ue=>d.handleResizeStart(ue,k.id,"s"),style:{position:"absolute",bottom:-5,left:"50%",transform:"translateX(-50%)",width:20,height:10,background:v.purple,border:"2px solid #fff",borderRadius:2,cursor:"ns-resize",zIndex:20,opacity:.7}})]})]},k.id)})})]}),o.jsx(Pe,{onZoomIn:()=>d.setZoom(k=>Math.min(k*1.2,2.5)),onZoomOut:()=>d.setZoom(k=>Math.max(k*.8,.3)),onFit:()=>d.fitToView(m),onReset:d.resetView,zoom:d.zoom,snapToGrid:d.snapToGrid,onToggleSnap:()=>d.setSnapToGrid(k=>!k),onAutoLayout:l}),d.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,display:"flex",alignItems:"center",gap:8,zIndex:100},children:[o.jsxs("div",{style:{background:"rgba(124,58,237,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem"},children:[d.selectedNodes.size," selected • ⌘C copy • ⌘V paste • Del remove"]}),d.selectedNodes.size>=3&&o.jsxs("div",{style:{display:"flex",gap:4},children:[o.jsxs("button",{onClick:p,title:"Distribute horizontally",style:{padding:"4px 8px",background:"rgba(0,0,0,0.8)",border:"1px solid rgba(124,58,237,0.5)",borderRadius:6,color:"#fff",fontSize:"0.7rem",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[o.jsx("span",{style:{transform:"rotate(90deg)",fontSize:"0.9rem"},children:"⋮"})," H"]}),o.jsxs("button",{onClick:x,title:"Distribute vertically",style:{padding:"4px 8px",background:"rgba(0,0,0,0.8)",border:"1px solid rgba(124,58,237,0.5)",borderRadius:6,color:"#fff",fontSize:"0.7rem",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[o.jsx("span",{style:{fontSize:"0.9rem"},children:"⋮"})," V"]})]})]}),d.clipboard&&d.clipboard.length>0&&d.selectedNodes.size===0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(16,185,129,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[d.clipboard.length," in clipboard • ⌘V to paste"]}),d.contextMenu&&o.jsx(rt,{x:d.contextMenu.x,y:d.contextMenu.y,nodeId:d.contextMenu.nodeId,currentIcon:d.nodeIcons[d.contextMenu.nodeId],currentShape:d.nodeShapes[d.contextMenu.nodeId],onSelectColor:d.setNodeColor,onSelectIcon:d.setNodeIcon,onSelectShape:d.setNodeShape,onClose:d.closeContextMenu,theme:r}),d.edgeContextMenu&&o.jsx(y2,{x:d.edgeContextMenu.x,y:d.edgeContextMenu.y,edgeId:d.edgeContextMenu.edgeId,currentStyle:d.edgeStyles[d.edgeContextMenu.edgeId],currentArrowType:d.edgeArrowTypes[d.edgeContextMenu.edgeId],currentPathType:d.edgePathTypes[d.edgeContextMenu.edgeId],onSelectStyle:d.setEdgeStyle,onSelectArrowType:d.setEdgeArrowType,onSelectPathType:d.setEdgePathType,onClose:d.closeEdgeContextMenu,theme:r})]})}function Lg({tables:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te(),c=M.useMemo(()=>{const m=Math.min(3,Math.ceil(Math.sqrt(a.length)));return a.map((g,y)=>({...g,id:g.name,label:g.name,defaultX:y%m*280+60,defaultY:Math.floor(y/m)*250+60,width:230}))},[a]),h=m=>e.getNodePosition(m.name,m.defaultX,m.defaultY),d=M.useMemo(()=>{if(!c||c.length===0)return{x:0,y:0,width:400,height:300};const m=c.map(y=>y.defaultX),g=c.map(y=>y.defaultY);return{x:Math.min(...m)-60,y:Math.min(...g)-60,width:Math.max(...m)-Math.min(...m)+300,height:Math.max(...g)-Math.min(...g)+300}},[c]),u=M.useCallback(()=>{const m=e.finishEditing();if(m.nodeId&&m.newValue&&n){const g=c.find(y=>y.name===m.nodeId);g&&g.name!==m.newValue&&n(m.nodeId,g.name,m.newValue)}},[e,c,n]);M.useEffect(()=>{const m=g=>{const l=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?g.metaKey:g.ctrlKey;if(!e.editingNode){if((g.key==="Delete"||g.key==="Backspace")&&e.selectedNodes.size>0&&i){g.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(l&&g.key.toLowerCase()==="c"&&e.selectedNodes.size>0){g.preventDefault(),e.copySelectedNodes(c);return}if(l&&g.key.toLowerCase()==="v"&&e.clipboard&&s){g.preventDefault();const p=e.pasteNodes();p&&s(p);return}}};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[e,c,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const m=e.getNodesInSelectionBox(c.map(g=>({...g,x:g.defaultX,y:g.defaultY})),e.selectionBox);m.length>0&&e.setSelectedNodes(new Set(m))}},[e.isSelecting,e.selectionBox,c,e]);const f=M.useCallback(m=>{(m.target===e.canvasRef.current||m.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:f,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:o.jsx("marker",{id:"erd-crow",markerWidth:"12",markerHeight:"10",refX:"10",refY:"5",orient:"auto",children:o.jsx("path",{d:"M 0 5 L 8 0 M 0 5 L 8 5 M 0 5 L 8 10",stroke:v.blue,strokeWidth:"2",strokeLinecap:"round",fill:"none"})})}),o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[c.flatMap(m=>{var g;return((g=m.fields)==null?void 0:g.filter(y=>y.fk&&y.references).map((y,l)=>{const p=c.find(j=>j.name===y.references);if(!p)return null;const x=h(m),b=h(p),C=x.y+44+l*30+15,w=x.x+m.width,k=b.x,S=b.y+22,E=`M ${w} ${C} C ${(w+k)/2} ${C}, ${(w+k)/2} ${S}, ${k} ${S}`;return o.jsxs("g",{children:[o.jsx("path",{d:E,fill:"none",stroke:v.blue,strokeWidth:8,strokeOpacity:.1,strokeLinecap:"round"}),o.jsx("path",{d:E,fill:"none",stroke:v.blue,strokeWidth:4,strokeOpacity:.25,strokeLinecap:"round"}),o.jsx("path",{d:E,fill:"none",stroke:v.blue,strokeWidth:2.5,markerEnd:"url(#erd-crow)",opacity:.95,strokeLinecap:"round"})]},`${m.name}-${y.name}`)}))||[]}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:"rgba(124,58,237,0.1)",stroke:v.purple,strokeWidth:2,strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})]}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:c.map(m=>{var b;const g=h(m),y=e.dragging===m.name,l=e.selectedNodes.has(m.name),p=e.editingNode===m.name,x=e.nodeColors[m.name]||v.orange;return o.jsxs("div",{onMouseDown:C=>e.handleNodeMouseDown(C,m.name,g.x,g.y),onDoubleClick:C=>e.handleNodeDoubleClick(C,m.name,m.name),onContextMenu:C=>e.handleNodeContextMenu(C,m.name),onTouchStart:C=>e.handleNodeTouchStart(C,m.name,g.x,g.y),style:{position:"absolute",left:g.x,top:g.y,width:m.width,background:`linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`,border:`2px solid ${x}`,borderRadius:12,overflow:"hidden",cursor:y?"grabbing":"grab",boxShadow:Je(x,y,l),transition:y?"none":"box-shadow 0.2s",touchAction:"none"},children:[o.jsx("div",{style:{padding:"12px 16px",background:`linear-gradient(135deg, ${x}, ${x}dd)`},children:o.jsxs("span",{style:{color:"#fff",fontWeight:700,fontSize:"0.95rem",display:"flex",alignItems:"center",gap:6},children:["📊",o.jsx(Xe,{isEditing:p,value:p?e.editValue:m.name,onChange:e.setEditValue,onFinish:u,onCancel:e.cancelEditing,style:{color:"#fff",fontWeight:700,fontSize:r?"1.1rem":"0.95rem"}})]})}),o.jsx("div",{style:{padding:"8px 0"},children:(b=m.fields)==null?void 0:b.map((C,w)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"7px 16px",borderBottom:w<m.fields.length-1?`1px solid ${t.border}`:"none",gap:10},children:[o.jsx("span",{style:{width:20,fontSize:"0.8rem"},children:C.key?"🔑":C.fk?"🔗":""}),o.jsx("span",{style:{flex:1,color:C.key?x:C.fk?v.blue:t.textPrimary,fontSize:"0.85rem",fontWeight:C.key?600:400},children:C.name}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem",fontFamily:"monospace"},children:C.type})]},w))})]},m.name)})})]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(m=>Math.min(m*1.2,2)),onZoomOut:()=>e.setZoom(m=>Math.max(m*.8,.3)),onFit:()=>e.fitToView(d),onReset:e.resetView,zoom:e.zoom,snapToGrid:e.snapToGrid,onToggleSnap:()=>e.setSnapToGrid(m=>!m)}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(124,58,237,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.selectedNodes.size," selected • ⌘C copy • ⌘V paste • Del remove"]}),e.clipboard&&e.clipboard.length>0&&e.selectedNodes.size===0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(16,185,129,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.clipboard.length," in clipboard • ⌘V to paste"]}),e.contextMenu&&o.jsx(rt,{x:e.contextMenu.x,y:e.contextMenu.y,nodeId:e.contextMenu.nodeId,currentIcon:e.nodeIcons[e.contextMenu.nodeId],currentShape:e.nodeShapes[e.contextMenu.nodeId],onSelectColor:e.setNodeColor,onSelectIcon:e.setNodeIcon,onSelectShape:e.setNodeShape,onClose:e.closeContextMenu,theme:t})]})}function Ng({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te(),c={router:"📡",switch:"🔀",firewall:"🛡️",server:"🖥️",computer:"💻",cloud:"☁️",hub:"🔌"},h=M.useMemo(()=>{const g=Math.ceil(Math.sqrt(a.devices.length));return{devices:a.devices.map((y,l)=>({...y,defaultX:100+l%g*200,defaultY:100+Math.floor(l/g)*170})),connections:a.connections}},[a]),d=g=>e.getNodePosition(g.id,g.defaultX,g.defaultY),u=M.useMemo(()=>{if(!h.devices||h.devices.length===0)return{x:0,y:0,width:400,height:300};const g=h.devices.map(l=>l.defaultX),y=h.devices.map(l=>l.defaultY);return{x:Math.min(...g)-60,y:Math.min(...y)-60,width:Math.max(...g)-Math.min(...g)+200,height:Math.max(...y)-Math.min(...y)+200}},[h]),f=M.useCallback(()=>{const g=e.finishEditing();if(g.nodeId&&g.newValue&&n){const y=h.devices.find(l=>l.id===g.nodeId);y&&y.label!==g.newValue&&n(g.nodeId,y.label,g.newValue)}},[e,h.devices,n]);M.useEffect(()=>{const g=y=>{const p=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?y.metaKey:y.ctrlKey;if(!e.editingNode){if((y.key==="Delete"||y.key==="Backspace")&&e.selectedNodes.size>0&&i){y.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(p&&y.key.toLowerCase()==="c"&&e.selectedNodes.size>0){y.preventDefault(),e.copySelectedNodes(h.devices);return}if(p&&y.key.toLowerCase()==="v"&&e.clipboard&&s){y.preventDefault();const x=e.pasteNodes();x&&s(x);return}}};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[e,h.devices,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const g=e.getNodesInSelectionBox(h.devices.map(y=>({...y,x:y.defaultX,y:y.defaultY})),e.selectionBox);g.length>0&&e.setSelectedNodes(new Set(g))}},[e.isSelecting,e.selectionBox,h.devices,e]);const m=M.useCallback(g=>{(g.target===e.canvasRef.current||g.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:m,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsx("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[h.connections.map(g=>{const y=h.devices.find($=>$.id===g.source),l=h.devices.find($=>$.id===g.target);if(!y||!l)return null;const p=d(y),x=d(l),b=p.x+65,C=p.y+55,w=x.x+65,k=x.y+55,S=nr(b,C,w,k),E=(b+w)/2,j=(C+k)/2;return o.jsxs("g",{children:[o.jsx("path",{d:S,fill:"none",stroke:v.blue,strokeWidth:8,strokeOpacity:.08,strokeLinecap:"round"}),o.jsx("path",{d:S,fill:"none",stroke:v.blue,strokeWidth:4,strokeOpacity:.2,strokeLinecap:"round"}),o.jsx("path",{d:S,fill:"none",stroke:v.blue,strokeWidth:2.5,opacity:.95,strokeLinecap:"round"}),g.protocol&&o.jsxs(o.Fragment,{children:[o.jsx("rect",{x:E-28,y:j-10,width:56,height:18,rx:4,fill:"rgba(0,0,0,0.8)"}),o.jsx("text",{x:E,y:j+3,textAnchor:"middle",fill:v.blue,fontSize:10,children:g.protocol})]})]},g.id)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:"rgba(124,58,237,0.1)",stroke:v.purple,strokeWidth:2,strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:h.devices.map(g=>{const y=d(g),l=e.dragging===g.id,p=e.selectedNodes.has(g.id),x=e.editingNode===g.id,b=e.nodeColors[g.id]||v.blue;return o.jsxs("div",{onMouseDown:C=>e.handleNodeMouseDown(C,g.id,y.x,y.y),onDoubleClick:C=>e.handleNodeDoubleClick(C,g.id,g.label),onContextMenu:C=>e.handleNodeContextMenu(C,g.id),onTouchStart:C=>e.handleNodeTouchStart(C,g.id,y.x,y.y),style:{position:"absolute",left:y.x,top:y.y,width:130,background:jt(b),border:`2px solid ${b}`,borderRadius:12,padding:12,textAlign:"center",cursor:l?"grabbing":"grab",boxShadow:Je(b,l,p),transition:l?"none":"box-shadow 0.2s",touchAction:"none"},children:[o.jsx("div",{style:{fontSize:"2.5rem",marginBottom:6},children:e.nodeIcons[g.id]||c[g.type]||"📦"}),o.jsx(Xe,{isEditing:x,value:x?e.editValue:g.label,onChange:e.setEditValue,onFinish:f,onCancel:e.cancelEditing,style:{fontSize:r?"1rem":"0.85rem",fontWeight:600,color:r?ve.stroke:t.textPrimary}}),g.ip&&o.jsx("div",{style:{fontSize:"0.7rem",color:t.textSecondary,fontFamily:"monospace",marginTop:4},children:g.ip})]},g.id)})})]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(g=>Math.min(g*1.2,2)),onZoomOut:()=>e.setZoom(g=>Math.max(g*.8,.3)),onFit:()=>e.fitToView(u),onReset:e.resetView,zoom:e.zoom,snapToGrid:e.snapToGrid,onToggleSnap:()=>e.setSnapToGrid(g=>!g)}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(124,58,237,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.selectedNodes.size," selected • ⌘C copy • ⌘V paste • Del remove"]}),e.clipboard&&e.clipboard.length>0&&e.selectedNodes.size===0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(16,185,129,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.clipboard.length," in clipboard • ⌘V to paste"]}),e.contextMenu&&o.jsx(rt,{x:e.contextMenu.x,y:e.contextMenu.y,nodeId:e.contextMenu.nodeId,currentIcon:e.nodeIcons[e.contextMenu.nodeId],currentShape:e.nodeShapes[e.contextMenu.nodeId],onSelectColor:e.setNodeColor,onSelectIcon:e.setNodeIcon,onSelectShape:e.setNodeShape,onClose:e.closeContextMenu,theme:t})]})}function Bg({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te(),{classes:c=[],relationships:h=[]}=a,d=M.useMemo(()=>{const l=Math.min(3,Math.ceil(Math.sqrt(c.length)));return c.map((p,x)=>({...p,label:p.name,defaultX:80+x%l*300,defaultY:80+Math.floor(x/l)*220,width:230}))},[c]),u=l=>e.getNodePosition(l.id,l.defaultX,l.defaultY),f=M.useMemo(()=>{if(!d||d.length===0)return{x:0,y:0,width:400,height:300};const l=d.map(x=>x.defaultX),p=d.map(x=>x.defaultY);return{x:Math.min(...l)-60,y:Math.min(...p)-60,width:Math.max(...l)-Math.min(...l)+320,height:Math.max(...p)-Math.min(...p)+280}},[d]),m=l=>{const x=l.properties.length>0?l.properties.length*22+16:30,b=l.methods.length>0?l.methods.length*22+16:30;return 38+x+b},g=M.useCallback(()=>{const l=e.finishEditing();if(l.nodeId&&l.newValue&&n){const p=d.find(x=>x.id===l.nodeId);p&&p.name!==l.newValue&&n(l.nodeId,p.name,l.newValue)}},[e,d,n]);M.useEffect(()=>{const l=p=>{const b=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?p.metaKey:p.ctrlKey;if(!e.editingNode){if((p.key==="Delete"||p.key==="Backspace")&&e.selectedNodes.size>0&&i){p.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(b&&p.key.toLowerCase()==="c"&&e.selectedNodes.size>0){p.preventDefault(),e.copySelectedNodes(d);return}if(b&&p.key.toLowerCase()==="v"&&e.clipboard&&s){p.preventDefault();const C=e.pasteNodes();C&&s(C);return}}};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e,d,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const l=e.getNodesInSelectionBox(d.map(p=>({...p,x:p.defaultX,y:p.defaultY})),e.selectionBox);l.length>0&&e.setSelectedNodes(new Set(l))}},[e.isSelecting,e.selectionBox,d,e]);const y=M.useCallback(l=>{(l.target===e.canvasRef.current||l.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("style",{children:"@keyframes flowDash { to { stroke-dashoffset: -20; } }"}),o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:y,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsxs("defs",{children:[o.jsx("marker",{id:"class-inherit",markerWidth:"10",markerHeight:"8",refX:"9",refY:"4",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 10 4 L 0 8 Z",fill:"none",stroke:v.purple,strokeWidth:"1.5",strokeLinejoin:"round"})}),o.jsx("marker",{id:"class-assoc",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:v.blue})}),o.jsx("marker",{id:"class-diamond",markerWidth:"10",markerHeight:"8",refX:"9",refY:"4",orient:"auto",children:o.jsx("path",{d:"M 0 4 L 5 0 L 10 4 L 5 8 Z",fill:v.orange})})]}),o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[h.map((l,p)=>{const x=d.find(L=>L.id===l.from||L.name===l.from),b=d.find(L=>L.id===l.to||L.name===l.to);if(!x||!b)return null;const C=u(x),w=u(b),k=m(x),S=m(b),E=C.x+x.width/2,j=C.y+k/2,$=w.x+b.width/2,R=w.y+S/2,A=$-E,_=R-j,T=Math.sqrt(A*A+_*_)||1,P=E+A/T*(x.width/2+5),W=j+_/T*(k/2+5),N=$-A/T*(b.width/2+15),G=R-_/T*(S/2+5),V=(P+N)/2,J=(W+G)/2,Z=l.type==="extends"?"url(#class-inherit)":l.type==="composition"?"url(#class-diamond)":"url(#class-assoc)",ae=l.type==="extends"?v.purple:l.type==="composition"?v.orange:v.blue,q=nr(P,W,N,G);return o.jsxs("g",{children:[o.jsx("path",{d:q,fill:"none",stroke:ae,strokeWidth:8,strokeOpacity:.08,strokeLinecap:"round"}),o.jsx("path",{d:q,fill:"none",stroke:ae,strokeWidth:4,strokeOpacity:.2,strokeLinecap:"round"}),o.jsx("path",{d:q,fill:"none",stroke:ae,strokeWidth:2.5,markerEnd:Z,opacity:.95,strokeLinecap:"round"}),l.label&&o.jsxs("g",{children:[o.jsx("rect",{x:V-l.label.length*3.5-6,y:J-10,width:l.label.length*7+12,height:18,rx:4,fill:"rgba(0,0,0,0.8)"}),o.jsx("text",{x:V,y:J+4,textAnchor:"middle",fill:ae,fontSize:10,children:l.label})]})]},p)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:"rgba(124,58,237,0.1)",stroke:v.purple,strokeWidth:2,strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})]}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:d.map(l=>{const p=u(l),x=e.dragging===l.id,b=e.selectedNodes.has(l.id),C=e.editingNode===l.id,w=e.nodeColors[l.id]||v.purple;return o.jsxs("div",{onMouseDown:k=>e.handleNodeMouseDown(k,l.id,p.x,p.y),onDoubleClick:k=>e.handleNodeDoubleClick(k,l.id,l.name),onContextMenu:k=>e.handleNodeContextMenu(k,l.id),onTouchStart:k=>e.handleNodeTouchStart(k,l.id,p.x,p.y),style:{position:"absolute",left:p.x,top:p.y,width:l.width,background:`linear-gradient(180deg, ${t.surface}, rgba(15,23,42,0.95))`,border:`2px solid ${w}`,borderRadius:8,overflow:"hidden",cursor:x?"grabbing":"grab",boxShadow:Je(w,x,b),transition:x?"none":"box-shadow 0.2s",touchAction:"none"},children:[o.jsx("div",{style:{padding:"10px 14px",background:`linear-gradient(135deg, ${w}40, ${w}20)`,borderBottom:`1px solid ${w}`},children:o.jsx(Xe,{isEditing:C,value:C?e.editValue:l.name,onChange:e.setEditValue,onFinish:g,onCancel:e.cancelEditing,style:{color:r?ve.stroke:t.textPrimary,fontWeight:700,fontSize:r?"1rem":"inherit"}})}),o.jsxs("div",{style:{padding:"8px 14px",borderBottom:`1px solid ${t.border}`},children:[l.properties.map((k,S)=>o.jsxs("div",{style:{fontSize:"0.8rem",color:t.textSecondary},children:[o.jsx("span",{style:{color:v.orange},children:k.visibility})," ",k.name,": ",k.type]},S)),l.properties.length===0&&o.jsx("div",{style:{fontSize:"0.75rem",color:t.textMuted},children:"No properties"})]}),o.jsxs("div",{style:{padding:"8px 14px"},children:[l.methods.map((k,S)=>o.jsxs("div",{style:{fontSize:"0.8rem",color:t.textSecondary},children:[o.jsx("span",{style:{color:v.green},children:k.visibility})," ",k.name,"(): ",k.returns]},S)),l.methods.length===0&&o.jsx("div",{style:{fontSize:"0.75rem",color:t.textMuted},children:"No methods"})]})]},l.id)})})]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(l=>Math.min(l*1.2,2)),onZoomOut:()=>e.setZoom(l=>Math.max(l*.8,.3)),onFit:()=>e.fitToView(f),onReset:e.resetView,zoom:e.zoom,snapToGrid:e.snapToGrid,onToggleSnap:()=>e.setSnapToGrid(l=>!l)}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(124,58,237,0.9)",borderRadius:6,padding:"4px 10px",color:"#fff",fontSize:"0.75rem",zIndex:100},children:[e.selectedNodes.size," selected • ⌘C copy • ⌘V paste • Del remove"]}),e.contextMenu&&o.jsx(rt,{x:e.contextMenu.x,y:e.contextMenu.y,nodeId:e.contextMenu.nodeId,currentIcon:e.nodeIcons[e.contextMenu.nodeId],currentShape:e.nodeShapes[e.contextMenu.nodeId],onSelectColor:e.setNodeColor,onSelectIcon:e.setNodeIcon,onSelectShape:e.setNodeShape,onClose:e.closeContextMenu,theme:t})]})}function Wg({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:0,y:50}),c=M.useMemo(()=>{const{nodes:m,edges:g}=a;if(!m.length)return{nodes:[],edges:g};const y={};m.forEach(w=>{y[w.id]=[]}),g.forEach(w=>{y[w.source]&&y[w.source].push(w.target)});const l=new Set(g.map(w=>w.target)),p=m.find(w=>!l.has(w.id));if(!p)return{nodes:m,edges:g};const x=w=>{const k=y[w]||[];return k.length===0?180:Math.max(180,k.map(x).reduce((S,E)=>S+E+40,-40))},b=[],C=(w,k,S,E)=>{const j=m.find(A=>A.id===w);if(!j)return;const $=y[w]||[],R=x(w);if(b.push({...j,defaultX:k,defaultY:S,level:E,color:[v.purple,v.blue,v.green,v.orange][Math.min(E,3)]}),$.length){let A=k-R/2;$.forEach(_=>{const T=x(_);C(_,A+T/2,S+120,E+1),A+=T+40})}};return C(p.id,x(p.id)/2+100,80,0),{nodes:b,edges:g}},[a]),h=m=>e.getNodePosition(m.id,m.defaultX,m.defaultY),d=M.useCallback(()=>{const m=e.finishEditing();if(m.nodeId&&m.newValue!==void 0&&n){const g=c.nodes.find(y=>y.id===m.nodeId);g&&g.label!==m.newValue&&n(m.nodeId,g.label,m.newValue)}},[e,c.nodes,n]);M.useEffect(()=>{const m=g=>{const l=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?g.metaKey:g.ctrlKey;if(!e.editingNode){if((g.key==="Delete"||g.key==="Backspace")&&e.selectedNodes.size>0&&i){g.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(l&&g.key.toLowerCase()==="c"&&e.selectedNodes.size>0){g.preventDefault(),e.copySelectedNodes(c.nodes);return}if(l&&g.key.toLowerCase()==="v"&&e.clipboard&&s){g.preventDefault();const p=e.pasteNodes();p&&s(p);return}}};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[e,c.nodes,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const m=e.getNodesInSelectionBox(c.nodes.map(g=>({...g,x:g.defaultX,y:g.defaultY})),e.selectionBox);m.length>0&&e.setSelectedNodes(new Set(m))}},[e.isSelecting,e.selectionBox,c.nodes,e]);const u=M.useCallback(m=>{(m.target===e.canvasRef.current||m.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]),f=M.useMemo(()=>{if(!c.nodes||c.nodes.length===0)return{x:0,y:0,width:400,height:300};const m=c.nodes.map(y=>y.defaultX),g=c.nodes.map(y=>y.defaultY);return{x:Math.min(...m)-60,y:Math.min(...g)-60,width:Math.max(...m)-Math.min(...m)+250,height:Math.max(...g)-Math.min(...g)+180}},[c]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:u,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsx("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[c.edges.map(m=>{const g=c.nodes.find(E=>E.id===m.source),y=c.nodes.find(E=>E.id===m.target);if(!g||!y)return null;const l=h(g),p=h(y),x=l.x+90,b=l.y+60,C=p.x+90,w=p.y,k=(b+w)/2,S=`M ${x} ${b} L ${x} ${k} L ${C} ${k} L ${C} ${w}`;return o.jsxs("g",{children:[!r&&o.jsx("path",{d:S,fill:"none",stroke:v.purple,strokeWidth:8,strokeOpacity:.08,strokeLinecap:"round",strokeLinejoin:"round"}),!r&&o.jsx("path",{d:S,fill:"none",stroke:v.purple,strokeWidth:4,strokeOpacity:.2,strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:S,fill:"none",stroke:r?ve.stroke:v.purple,strokeWidth:r?2.5:2,strokeDasharray:"6,4",opacity:r?1:.7,strokeLinecap:"round",strokeLinejoin:"round"})]},m.id)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:`${v.blue}20`,stroke:v.blue,strokeWidth:1,strokeDasharray:"4,4"})]})}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:c.nodes.map(m=>{const g=h(m),y=e.dragging===m.id,l=e.selectedNodes.has(m.id);return o.jsxs("div",{onClick:p=>e.handleNodeClick(p,m.id),onDoubleClick:p=>e.handleNodeDoubleClick(p,m.id,m.label),onContextMenu:p=>e.handleNodeContextMenu(p,m.id),onMouseDown:p=>e.handleNodeMouseDown(p,m.id,g.x,g.y),onTouchStart:p=>e.handleNodeTouchStart(p,m.id,g.x,g.y),style:{position:"absolute",left:g.x,top:g.y,width:180,background:jt(m.color,r),border:r?`2px solid ${ve.stroke}`:`2px solid ${l?v.blue:m.color}`,borderRadius:12,padding:"10px 8px",textAlign:"center",cursor:y?"grabbing":"grab",boxShadow:Je(m.color,y,l,r),transition:y?"none":"box-shadow 0.2s",touchAction:"none",overflow:"hidden",fontFamily:Jr(r)},children:[e.editingNode===m.id?o.jsx(Xe,{value:e.editingValue,onChange:p=>e.setEditingValue(p),onFinish:d,style:{fontSize:r?"1.1rem":"0.95rem",fontWeight:600,color:r?ve.stroke:t.textPrimary}}):o.jsx("div",{style:{fontSize:r?"1.1rem":"0.95rem",fontWeight:600,color:r?ve.stroke:t.textPrimary},children:m.label}),m.title&&o.jsx("div",{style:{fontSize:r?"0.9rem":"0.75rem",color:r?ve.accent:m.color,marginTop:4},children:m.title})]},m.id)})})]}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,0.8)",padding:"6px 12px",borderRadius:6,fontSize:"0.75rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{children:[e.selectedNodes.size," selected"]}),o.jsx("span",{style:{opacity:.6},children:"|"}),o.jsx("span",{style:{opacity:.7},children:"Del to delete • ⌘C copy • ⌘V paste"})]}),e.clipboard&&o.jsxs("div",{style:{position:"absolute",top:e.selectedNodes.size>0?48:12,left:12,background:`${v.green}20`,padding:"4px 10px",borderRadius:4,fontSize:"0.7rem",color:v.green,border:`1px solid ${v.green}40`},children:[e.clipboard.length," node",e.clipboard.length>1?"s":""," copied"]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(m=>Math.min(m*1.2,2)),onZoomOut:()=>e.setZoom(m=>Math.max(m*.8,.3)),onFit:()=>e.fitToView(f),onReset:e.resetView,zoom:e.zoom}),e.contextMenu&&o.jsx(rt,{position:e.contextMenu,onClose:()=>e.closeContextMenu(),nodeId:e.contextMenu.nodeId})]})}function zg({data:a,theme:t=Se.dark,sketchMode:r=!1}){const{participants:n,messages:i,fragments:s=[],notes:e=[]}=a,c=Te({x:30,y:20}),h=y=>c.getNodePosition(y.id,y.x,0),d=60,u=110,f=M.useMemo(()=>{if(!n||n.length===0)return{x:0,y:0,width:400,height:300};const y=n.map(l=>l.x);return{x:Math.min(...y)-60,y:0,width:Math.max(...y)-Math.min(...y)+200,height:85+i.length*d+80}},[n,i]),m=y=>u+y*d,g={loop:v.blue,alt:v.orange,opt:v.green};return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("div",{ref:c.canvasRef,className:"canvas-bg",onMouseDown:c.handleCanvasMouseDown,onMouseMove:c.handleMouseMove,onMouseUp:c.handleMouseUp,onMouseLeave:c.handleMouseUp,onTouchStart:c.handleTouchStart,onTouchMove:c.handleTouchMove,onTouchEnd:c.handleTouchEnd,onWheel:c.handleWheel,style:{width:"100%",height:"100%",cursor:c.isPanning||c.dragging?"grabbing":"grab",touchAction:"none"},children:o.jsx("svg",{width:"100%",height:"100%",style:{position:"absolute"},children:o.jsxs("g",{transform:`translate(${c.pan.x}, ${c.pan.y}) scale(${c.zoom})`,children:[s.map((y,l)=>{if(!y||y.startIndex===void 0)return null;const p=g[y.type]||v.purple,x=i.filter(A=>A.index>=y.startIndex&&A.index<(y.endIndex||y.startIndex+1));if(x.length===0)return null;const b=new Set;x.forEach(A=>{b.add(A.from),b.add(A.to)});const C=n.filter(A=>b.has(A.id));if(C.length===0)return null;const w=C.map(A=>h(A).x),k=Math.min(...w)-10,S=Math.max(...w)+130,E=Math.min(...x.map(A=>A.index)),j=Math.max(...x.map(A=>A.index)),$=m(E)-35,R=(j-E+1)*d+25;return o.jsxs("g",{children:[o.jsx("rect",{x:k,y:$,width:S-k,height:R,rx:6,fill:`${p}08`,stroke:p,strokeWidth:1.5,strokeDasharray:"6,3",opacity:.8}),o.jsx("rect",{x:k,y:$,width:50,height:18,fill:p,rx:4}),o.jsx("text",{x:k+25,y:$+13,textAnchor:"middle",fill:"#fff",fontSize:9,fontWeight:700,children:y.type}),o.jsxs("text",{x:k+55,y:$+13,fill:p,fontSize:9,fontWeight:600,children:["[",y.label,"]"]})]},`frag-${l}`)}),n.map((y,l)=>{const p=h(y);return o.jsxs("g",{children:[o.jsx("line",{x1:p.x+60,y1:85,x2:p.x+60,y2:85+i.length*d+40,stroke:v.purple,strokeWidth:2,strokeDasharray:"4,4",opacity:.4}),o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:`seq-grad-${l}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:pe[l%pe.length],stopOpacity:"0.35"}),o.jsx("stop",{offset:"100%",stopColor:pe[l%pe.length],stopOpacity:"0.12"})]}),o.jsx("filter",{id:`seq-shadow-${l}`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:o.jsx("feDropShadow",{dx:"0",dy:"4",stdDeviation:"8",floodColor:pe[l%pe.length],floodOpacity:"0.3"})})]}),o.jsx("rect",{x:p.x,y:30,width:120,height:45,rx:8,fill:`url(#seq-grad-${l})`,stroke:pe[l%pe.length],strokeWidth:2,filter:`url(#seq-shadow-${l})`,style:{cursor:c.dragging===y.id?"grabbing":"grab",touchAction:"none"},onMouseDown:x=>{x.stopPropagation(),c.handleNodeMouseDown(x,y.id,p.x,0)},onTouchStart:x=>{x.stopPropagation(),c.handleNodeTouchStart(x,y.id,p.x,0)}}),o.jsx("text",{x:p.x+60,y:58,textAnchor:"middle",fill:t.textPrimary,fontSize:13,fontWeight:600,style:{pointerEvents:"none"},children:y.label})]},y.id)}),i.map((y,l)=>{const p=n.find($=>$.id===y.from),x=n.find($=>$.id===y.to);if(!p||!x)return null;const b=h(p),C=h(x),w=m(l),k=b.x+60,S=C.x+60,E=y.isReturn?t.textSecondary:v.purple;return y.from===y.to?o.jsxs("g",{children:[o.jsx("defs",{children:o.jsx("marker",{id:`seq-arr-${l}`,markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:E})})}),o.jsx("path",{d:`M ${k} ${w} L ${k+40} ${w} L ${k+40} ${w+30} L ${k+8} ${w+30}`,stroke:E,strokeWidth:2,fill:"none",markerEnd:`url(#seq-arr-${l})`}),o.jsx("rect",{x:k+40+5,y:w-10,width:Math.max(80,y.label.length*6),height:18,rx:4,fill:"rgba(0,0,0,0.85)"}),o.jsx("text",{x:k+40+10,y:w+3,fill:E,fontSize:11,children:y.label})]},`msg-${l}`):o.jsxs("g",{children:[o.jsx("defs",{children:o.jsx("marker",{id:`seq-arr-${l}`,markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:E})})}),o.jsx("line",{x1:k,y1:w,x2:S-(k<S?8:-8),y2:w,stroke:E,strokeWidth:6,strokeOpacity:.1,strokeLinecap:"round"}),o.jsx("line",{x1:k,y1:w,x2:S-(k<S?8:-8),y2:w,stroke:E,strokeWidth:4,strokeOpacity:.2,strokeLinecap:"round"}),o.jsx("line",{x1:k,y1:w,x2:S-(k<S?8:-8),y2:w,stroke:E,strokeWidth:2.5,strokeDasharray:y.isReturn?"6,4":null,markerEnd:`url(#seq-arr-${l})`}),o.jsx("rect",{x:Math.min(k,S)+Math.abs(S-k)/2-50,y:w-20,width:100,height:18,rx:4,fill:"rgba(0,0,0,0.85)"}),o.jsx("text",{x:Math.min(k,S)+Math.abs(S-k)/2,y:w-7,textAnchor:"middle",fill:E,fontSize:11,children:y.label})]},`msg-${l}`)}),e.map((y,l)=>{const p=n.find(k=>k.id===y.participantId);if(!p)return null;const x=h(p),b=m(y.atMessageIndex)-15,C=y.position==="right"?x.x+130:x.x-110,w=Math.max(100,y.text.length*6+20);return o.jsxs("g",{children:[o.jsx("path",{d:`M ${C} ${b} L ${C+w-10} ${b} L ${C+w} ${b+10} L ${C+w} ${b+40} L ${C} ${b+40} Z`,fill:"#fef3c7",stroke:"#f59e0b",strokeWidth:1}),o.jsx("path",{d:`M ${C+w-10} ${b} L ${C+w-10} ${b+10} L ${C+w} ${b+10}`,fill:"#fde68a",stroke:"#f59e0b",strokeWidth:1}),o.jsx("text",{x:C+8,y:b+25,fill:"#92400e",fontSize:11,fontWeight:500,children:y.text})]},`note-${l}`)})]})})}),o.jsx(Pe,{onZoomIn:()=>c.setZoom(y=>Math.min(y*1.2,2)),onZoomOut:()=>c.setZoom(y=>Math.max(y*.8,.3)),onFit:()=>c.fitToView(f),onReset:c.resetView,zoom:c.zoom})]})}function Og({events:a,theme:t=Se.dark,sketchMode:r=!1}){const n=Te({x:30,y:0}),i=e=>n.getNodePosition(e.id,e.x,e.y),s=M.useMemo(()=>{if(!a||a.length===0)return{x:0,y:0,width:400,height:300};const e=a.map(c=>c.x);return{x:Math.min(...e)-60,y:0,width:Math.max(...e)-Math.min(...e)+280,height:350}},[a]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("div",{ref:n.canvasRef,className:"canvas-bg",onMouseDown:n.handleCanvasMouseDown,onMouseMove:n.handleMouseMove,onMouseUp:n.handleMouseUp,onMouseLeave:n.handleMouseUp,onTouchStart:n.handleTouchStart,onTouchMove:n.handleTouchMove,onTouchEnd:n.handleTouchEnd,onWheel:n.handleWheel,style:{width:"100%",height:"100%",cursor:n.isPanning||n.dragging?"grabbing":"grab",touchAction:"none"},children:o.jsxs("div",{style:{position:"absolute",transform:`translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`,transformOrigin:"0 0",padding:"80px 50px"},children:[o.jsx("div",{style:{position:"absolute",top:265,left:50,width:a.length*220,height:4,background:`linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.green})`,borderRadius:2}}),a.map((e,c)=>{const h=i(e),d=e.isMilestone?v.orange:v.purple,u=n.dragging===e.id;return o.jsxs("div",{onMouseDown:f=>n.handleNodeMouseDown(f,e.id,h.x,h.y),onTouchStart:f=>n.handleNodeTouchStart(f,e.id,h.x,h.y),style:{position:"absolute",left:h.x,top:80,width:190,cursor:u?"grabbing":"grab",touchAction:"none"},children:[o.jsxs("div",{style:{background:e.isMilestone?`linear-gradient(135deg, ${v.orange}35, ${v.orange}12)`:jt(d),border:`2px solid ${d}`,borderRadius:12,padding:16,textAlign:"center",minHeight:110,boxShadow:Je(d,u,!1),transition:u?"none":"box-shadow 0.2s"},children:[e.isMilestone&&o.jsx("div",{style:{fontSize:"1.3rem",marginBottom:6},children:"🎯"}),o.jsx("div",{style:{fontSize:"0.8rem",color:d,fontWeight:600,marginBottom:6},children:e.date}),o.jsx("div",{style:{fontSize:"0.95rem",fontWeight:700,color:t.textPrimary},children:e.label}),e.description&&o.jsx("div",{style:{fontSize:"0.75rem",color:t.textSecondary,marginTop:6},children:e.description})]}),o.jsx("div",{style:{position:"absolute",left:93,top:"100%",width:2,height:35,background:d}}),o.jsx("div",{style:{position:"absolute",left:88,top:"calc(100% + 30px)",width:14,height:14,borderRadius:"50%",background:d,border:"3px solid #0f0f1a"}})]},e.id)})]})}),o.jsx(Pe,{onZoomIn:()=>n.setZoom(e=>Math.min(e*1.2,2)),onZoomOut:()=>n.setZoom(e=>Math.max(e*.8,.3)),onFit:()=>n.fitToView(s),onReset:n.resetView,zoom:n.zoom})]})}function qg({data:a,theme:t=Se.dark,sketchMode:r=!1}){const{commits:n,branches:i}=a,s=Te({x:20,y:20}),e=d=>s.getNodePosition(d.id,d.x,d.y),c=M.useMemo(()=>{if(!n||n.length===0)return{x:0,y:0,width:400,height:300};const d=n.map(f=>f.x),u=n.map(f=>f.y);return{x:Math.min(...d)-100,y:Math.min(...u)-60,width:Math.max(...d)-Math.min(...d)+200,height:Math.max(...u)-Math.min(...u)+120}},[n]),h=M.useMemo(()=>{const d=[];return i.forEach((u,f)=>{const m=n.filter(g=>g.branch===u.name).sort((g,y)=>g.index-y.index);for(let g=0;g<m.length-1;g++)d.push({type:"seq",from:m[g],to:m[g+1],color:pe[f%pe.length]});if(u.parentBranch){i.findIndex(p=>p.name===u.parentBranch);const g=n.filter(p=>p.branch===u.parentBranch),y=g.find(p=>p.index===u.branchPoint-1)||g[g.length-1],l=m[0];y&&l&&d.push({type:"branch",from:y,to:l,color:pe[f%pe.length]})}}),n.filter(u=>u.isMerge&&u.mergeFrom).forEach(u=>{const f=i.findIndex(g=>g.name===u.mergeFrom),m=n.filter(g=>g.branch===u.mergeFrom).sort((g,y)=>y.index-g.index)[0];m&&d.push({type:"merge",from:m,to:u,color:pe[f%pe.length]})}),d},[n,i]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("div",{ref:s.canvasRef,className:"canvas-bg",onMouseDown:s.handleCanvasMouseDown,onMouseMove:s.handleMouseMove,onMouseUp:s.handleMouseUp,onMouseLeave:s.handleMouseUp,onTouchStart:s.handleTouchStart,onTouchMove:s.handleTouchMove,onTouchEnd:s.handleTouchEnd,onWheel:s.handleWheel,style:{width:"100%",height:"100%",cursor:s.isPanning||s.dragging?"grabbing":"grab",touchAction:"none"},children:o.jsx("svg",{width:"100%",height:"100%",style:{position:"absolute"},children:o.jsxs("g",{transform:`translate(${s.pan.x}, ${s.pan.y}) scale(${s.zoom})`,children:[i.map((d,u)=>o.jsx("text",{x:30,y:d.y+5,fill:pe[u%pe.length],fontSize:14,fontWeight:700,children:d.name},d.name)),h.map((d,u)=>{const f=e(d.from),m=e(d.to);if(d.type==="seq")return o.jsxs("g",{children:[o.jsx("line",{x1:f.x,y1:f.y,x2:m.x,y2:m.y,stroke:d.color,strokeWidth:10,strokeOpacity:.1,strokeLinecap:"round"}),o.jsx("line",{x1:f.x,y1:f.y,x2:m.x,y2:m.y,stroke:d.color,strokeWidth:6,strokeOpacity:.25,strokeLinecap:"round"}),o.jsx("line",{x1:f.x,y1:f.y,x2:m.x,y2:m.y,stroke:d.color,strokeWidth:4,strokeLinecap:"round"})]},u);const g=(f.x+m.x)/2,y=`M ${f.x} ${f.y} C ${g} ${f.y}, ${g} ${m.y}, ${m.x} ${m.y}`;return o.jsxs("g",{children:[o.jsx("path",{d:y,fill:"none",stroke:d.color,strokeWidth:8,strokeOpacity:.1,strokeLinecap:"round"}),o.jsx("path",{d:y,fill:"none",stroke:d.color,strokeWidth:5,strokeOpacity:.25,strokeLinecap:"round"}),o.jsx("path",{d:y,fill:"none",stroke:d.color,strokeWidth:3,strokeDasharray:d.type==="merge"?"6,4":"none",opacity:.9,strokeLinecap:"round"})]},u)}),n.map(d=>{const u=e(d),f=i.findIndex(g=>g.name===d.branch),m=s.dragging===d.id;return o.jsxs("g",{style:{cursor:m?"grabbing":"grab",touchAction:"none"},onMouseDown:g=>{g.stopPropagation(),s.handleNodeMouseDown(g,d.id,u.x,u.y)},onTouchStart:g=>{g.stopPropagation(),s.handleNodeTouchStart(g,d.id,u.x,u.y)},children:[o.jsx("circle",{cx:u.x,cy:u.y,r:d.isMerge?14:12,fill:pe[f%pe.length],stroke:m?"#fff":t.canvasBg,strokeWidth:m?4:3}),d.isMerge&&o.jsx("circle",{cx:u.x,cy:u.y,r:6,fill:t.canvasBg}),o.jsx("text",{x:u.x,y:u.y-22,textAnchor:"middle",fill:t.textPrimary,fontSize:12,fontWeight:600,children:d.label})]},d.id)})]})})}),o.jsx(Pe,{onZoomIn:()=>s.setZoom(d=>Math.min(d*1.2,2)),onZoomOut:()=>s.setZoom(d=>Math.max(d*.8,.3)),onFit:()=>s.fitToView(c),onReset:s.resetView,zoom:s.zoom})]})}function Fg({tasks:a,theme:t=Se.dark,sketchMode:r=!1}){const n=Math.max(...a.map(i=>i.start+i.duration),14);return o.jsxs("div",{style:{width:"100%",height:"100%",overflow:"auto",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,padding:20},children:[o.jsx("div",{style:{display:"flex",marginLeft:160,marginBottom:12},children:Array.from({length:n+1},(i,s)=>o.jsx("div",{style:{width:40,textAlign:"center",fontSize:"0.75rem",color:t.textSecondary},children:s},s))}),a.map((i,s)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",height:44,borderBottom:`1px solid ${t.border}`},children:[o.jsx("div",{style:{width:160,paddingRight:16,fontSize:"0.85rem",color:t.textPrimary,fontWeight:500},children:i.name}),o.jsxs("div",{style:{flex:1,position:"relative",height:"100%"},children:[Array.from({length:n+1},(e,c)=>o.jsx("div",{style:{position:"absolute",left:c*40,top:0,bottom:0,width:1,background:t.border}},c)),o.jsx("div",{style:{position:"absolute",left:i.start*40+2,top:10,width:i.duration*40-4,height:24,background:`linear-gradient(135deg, ${pe[s%pe.length]}, ${pe[s%pe.length]}cc)`,borderRadius:6,boxShadow:`0 2px 8px ${pe[s%pe.length]}40`}})]})]},i.id))]})}function Ug({data:a,theme:t=Se.dark,sketchMode:r=!1}){const n=a.reduce((e,c)=>e+c.value,0);let i=-90;const s=a.map((e,c)=>{const h=e.value/n*100,d=e.value/n*360,u=i;i+=d;const f=200+120*Math.cos(u*Math.PI/180),m=200+120*Math.sin(u*Math.PI/180),g=200+120*Math.cos((u+d)*Math.PI/180),y=200+120*Math.sin((u+d)*Math.PI/180),l=200+150*Math.cos((u+d/2)*Math.PI/180),p=200+150*Math.sin((u+d/2)*Math.PI/180);return{...e,pct:h,path:`M 200 200 L ${f} ${m} A 120 120 0 ${d>180?1:0} 1 ${g} ${y} Z`,color:pe[c%pe.length],lx:l,ly:p}});return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsx("svg",{width:"450",height:"400",viewBox:"0 0 450 400",children:s.map((e,c)=>o.jsxs("g",{children:[o.jsx("path",{d:e.path,fill:e.color,stroke:t.canvasBg,strokeWidth:2}),o.jsx("text",{x:e.lx,y:e.ly,textAnchor:"middle",fill:t.textPrimary,fontSize:11,fontWeight:500,children:e.label}),o.jsxs("text",{x:e.lx,y:e.ly+14,textAnchor:"middle",fill:t.textSecondary,fontSize:10,children:[e.pct.toFixed(1),"%"]})]},c))}),o.jsx("div",{style:{position:"absolute",right:20,top:"50%",transform:"translateY(-50%)"},children:s.map((e,c)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[o.jsx("div",{style:{width:14,height:14,borderRadius:3,background:e.color}}),o.jsx("span",{style:{fontSize:"0.8rem",color:t.textPrimary},children:e.label})]},c))})]})}function Gg({data:a,theme:t=Se.dark,sketchMode:r=!1}){const{config:n,points:i}=a,s=Te({x:50,y:20}),e=400,c=60,h=e-c*2,d=u=>s.getNodePosition(u.id,c+u.x/100*h+50,c+h-u.y/100*h);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`},children:[o.jsx("div",{ref:s.canvasRef,className:"canvas-bg",onMouseDown:s.handleCanvasMouseDown,onMouseMove:s.handleMouseMove,onMouseUp:s.handleMouseUp,onMouseLeave:s.handleMouseUp,onWheel:s.handleWheel,style:{width:"100%",height:"100%",cursor:s.isPanning||s.dragging?"grabbing":"grab",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsxs("svg",{width:e+100,height:e,viewBox:`0 0 ${e+100} ${e}`,style:{transform:`translate(${s.pan.x-50}px, ${s.pan.y-20}px) scale(${s.zoom})`,transformOrigin:"center"},children:[n.title&&o.jsx("text",{x:e/2+50,y:30,textAnchor:"middle",fill:t.textPrimary,fontSize:16,fontWeight:700,children:n.title}),o.jsx("rect",{x:c+50,y:c,width:h/2,height:h/2,fill:v.green+"15"}),o.jsx("rect",{x:c+h/2+50,y:c,width:h/2,height:h/2,fill:v.blue+"15"}),o.jsx("rect",{x:c+50,y:c+h/2,width:h/2,height:h/2,fill:v.orange+"15"}),o.jsx("rect",{x:c+h/2+50,y:c+h/2,width:h/2,height:h/2,fill:v.red+"15"}),o.jsx("line",{x1:c+50,y1:c+h/2,x2:c+h+50,y2:c+h/2,stroke:t.border,strokeWidth:2}),o.jsx("line",{x1:c+h/2+50,y1:c,x2:c+h/2+50,y2:c+h,stroke:t.border,strokeWidth:2}),n.quadrants.map((u,f)=>{const m=[{x:c+h/4+50,y:c+h/4},{x:c+h*3/4+50,y:c+h/4},{x:c+h/4+50,y:c+h*3/4},{x:c+h*3/4+50,y:c+h*3/4}];return u&&o.jsx("text",{x:m[f].x,y:m[f].y,textAnchor:"middle",fill:t.textSecondary,fontSize:11,children:u},f)}),n.xLabel&&o.jsx("text",{x:e/2+50,y:e-10,textAnchor:"middle",fill:t.textSecondary,fontSize:12,children:n.xLabel}),n.yLabel&&o.jsx("text",{x:20,y:e/2,textAnchor:"middle",fill:t.textSecondary,fontSize:12,transform:`rotate(-90, 20, ${e/2})`,children:n.yLabel}),i.map((u,f)=>{const m=d(u),g=s.dragging===u.id;return o.jsxs("g",{style:{cursor:g?"grabbing":"grab"},onMouseDown:y=>{y.stopPropagation(),s.handleNodeMouseDown(y,u.id,m.x,m.y)},children:[o.jsx("circle",{cx:m.x,cy:m.y,r:12,fill:pe[f%pe.length],stroke:g?"#fff":"none",strokeWidth:3}),o.jsx("text",{x:m.x,y:m.y-18,textAnchor:"middle",fill:t.textPrimary,fontSize:11,children:u.label})]},f)})]})}),o.jsx(Pe,{onZoomIn:()=>s.setZoom(u=>Math.min(u*1.2,2)),onZoomOut:()=>s.setZoom(u=>Math.max(u*.8,.3)),onFit:()=>{},onReset:s.resetView,zoom:s.zoom})]})}function Hg({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:30,y:30}),c={cloud:{color:v.sky,icon:"☁️"},cluster:{color:v.teal,icon:"🌐"},container:{color:v.cyan,icon:"📦"},database:{color:v.green,icon:"🗄️"},storage:{color:v.emerald,icon:"💾"},device:{color:v.pink,icon:"📱"},server:{color:v.violet,icon:"🖧"},component:{color:v.purple,icon:"⚙️"}},h=M.useMemo(()=>{const g=a.nodes,y=[],l=w=>g.filter(k=>k.parentId===w),p=w=>{const k=l(w);return k.length===0?70:60+k.reduce((S,E)=>S+p(E.id)+15,0)},x=(w,k,S,E)=>{const j=c[w.type]||c.component,$=l(w.id),R=p(w.id);y.push({...w,defaultX:k,defaultY:S,width:220,height:R,level:E,...j,hasChildren:$.length>0});let A=S+55;$.forEach(_=>{x(_,k+20,A,E+1),A+=p(_.id)+15})},b=g.filter(w=>!w.parentId);let C=40;return b.forEach(w=>{x(w,C,40,0),C+=280}),{nodes:y.sort((w,k)=>w.level-k.level)}},[a]),d=g=>e.getNodePosition(g.id,g.defaultX,g.defaultY),u=M.useCallback(()=>{const g=e.finishEditing();if(g.nodeId&&g.newValue!==void 0&&n){const y=h.nodes.find(l=>l.id===g.nodeId);y&&y.label!==g.newValue&&n(g.nodeId,y.label,g.newValue)}},[e,h.nodes,n]);M.useEffect(()=>{const g=y=>{const p=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?y.metaKey:y.ctrlKey;if(!e.editingNode){if((y.key==="Delete"||y.key==="Backspace")&&e.selectedNodes.size>0&&i){y.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(p&&y.key.toLowerCase()==="c"&&e.selectedNodes.size>0){y.preventDefault(),e.copySelectedNodes(h.nodes);return}if(p&&y.key.toLowerCase()==="v"&&e.clipboard&&s){y.preventDefault();const x=e.pasteNodes();x&&s(x);return}}};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[e,h.nodes,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const g=e.getNodesInSelectionBox(h.nodes.map(y=>({...y,x:y.defaultX,y:y.defaultY})),e.selectionBox);g.length>0&&e.setSelectedNodes(new Set(g))}},[e.isSelecting,e.selectionBox,h.nodes,e]);const f=M.useCallback(g=>{(g.target===e.canvasRef.current||g.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]),m=M.useMemo(()=>{if(!h.nodes||h.nodes.length===0)return{x:0,y:0,width:400,height:300};const g=h.nodes.map(p=>p.defaultX),y=h.nodes.map(p=>p.defaultY),l=h.nodes.map(p=>p.height||70);return{x:Math.min(...g)-60,y:Math.min(...y)-60,width:Math.max(...g)-Math.min(...g)+300,height:Math.max(...y.map((p,x)=>p+l[x]))-Math.min(...y)+120}},[h]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:f,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsx("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:o.jsx("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:`${v.blue}20`,stroke:v.blue,strokeWidth:1,strokeDasharray:"4,4"})})}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:h.nodes.map(g=>{const y=d(g),l=e.dragging===g.id,p=e.selectedNodes.has(g.id);return o.jsx("div",{onClick:x=>e.handleNodeClick(x,g.id),onDoubleClick:x=>e.handleNodeDoubleClick(x,g.id,g.label),onContextMenu:x=>e.handleNodeContextMenu(x,g.id),onMouseDown:x=>e.handleNodeMouseDown(x,g.id,y.x,y.y),onTouchStart:x=>e.handleNodeTouchStart(x,g.id,y.x,y.y),style:{position:"absolute",left:y.x,top:y.y,width:g.width,height:g.height,background:`${g.color}10`,border:`2px ${g.level===0?"solid":"dashed"} ${p?v.blue:g.color}`,borderRadius:12,boxSizing:"border-box",cursor:l?"grabbing":"grab",boxShadow:p?`0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40`:l?`0 0 30px ${g.color}40`:"none",transition:l?"none":"box-shadow 0.2s",touchAction:"none"},children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderBottom:g.hasChildren?`1px solid ${g.color}30`:"none"},children:[o.jsx("span",{style:{fontSize:"1.3rem"},children:g.icon}),e.editingNode===g.id?o.jsx(Xe,{value:e.editingValue,onChange:x=>e.setEditingValue(x),onFinish:u,style:{fontSize:r?"1rem":"0.9rem",fontWeight:600,color:r?ve.stroke:t.textPrimary}}):o.jsx("span",{style:{fontSize:r?"1rem":"0.9rem",fontWeight:600,color:r?ve.stroke:t.textPrimary},children:g.label}),o.jsxs("span",{style:{fontSize:"0.6rem",color:g.color,marginLeft:"auto",background:`${g.color}20`,padding:"3px 8px",borderRadius:4},children:["«",g.type,"»"]})]})},g.id)})})]}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,0.8)",padding:"6px 12px",borderRadius:6,fontSize:"0.75rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{children:[e.selectedNodes.size," selected"]}),o.jsx("span",{style:{opacity:.6},children:"|"}),o.jsx("span",{style:{opacity:.7},children:"Del to delete • ⌘C copy • ⌘V paste"})]}),e.clipboard&&o.jsxs("div",{style:{position:"absolute",top:e.selectedNodes.size>0?48:12,left:12,background:`${v.green}20`,padding:"4px 10px",borderRadius:4,fontSize:"0.7rem",color:v.green,border:`1px solid ${v.green}40`},children:[e.clipboard.length," node",e.clipboard.length>1?"s":""," copied"]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(g=>Math.min(g*1.2,2)),onZoomOut:()=>e.setZoom(g=>Math.max(g*.8,.3)),onFit:()=>e.fitToView(m),onReset:e.resetView,zoom:e.zoom}),e.contextMenu&&o.jsx(rt,{position:e.contextMenu,onClose:()=>e.closeContextMenu(),nodeId:e.contextMenu.nodeId})]})}function Yg({data:a,theme:t=Se.dark,sketchMode:r=!1}){const{elements:n,totalHeight:i}=a,s=(l,p={})=>!l||!l.includes("**")&&!l.includes("~~")&&!l.includes("{badge:")&&!l.includes("{tag:")?l:l.split(/(\*\*[^*]+\*\*|~~[^~]+~~|\{(?:badge|tag):[^}]+\})/gi).map((b,C)=>{if(b.startsWith("**")&&b.endsWith("**"))return o.jsx("strong",{style:{fontWeight:700,...p},children:b.slice(2,-2)},C);if(b.startsWith("~~")&&b.endsWith("~~"))return o.jsx("span",{style:{textDecoration:"line-through",opacity:.6},children:b.slice(2,-2)},C);const w=b.match(/^\{(?:badge|tag):([^}]+)\}$/i);if(w){const k=w[1],S=k.match(/^(success|warning|error|info|new|beta|pro):(.+)$/i),E={success:v.green,warning:v.orange,error:v.red,info:v.blue,new:v.pink,beta:v.purple,pro:v.amber},j=S?S[1].toLowerCase():null,$=S?S[2]:k,R=E[j]||v.red;return o.jsx("span",{style:{display:"inline-flex",padding:"2px 8px",background:`${R}25`,border:`1px solid ${R}`,borderRadius:10,color:R,fontSize:"0.7rem",fontWeight:600,marginRight:6},children:$},C)}return b}),e=t.name==="light",c=e?{light:{background:"rgba(255,255,255,0.7)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)"},medium:{background:"rgba(255,255,255,0.8)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"},dark:{background:"rgba(255,255,255,0.9)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)"}}:{light:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)"},medium:{background:"rgba(255,255,255,0.06)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"},dark:{background:"rgba(0,0,0,0.4)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)"}},h=e?{sm:"0 2px 8px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",md:"0 4px 20px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",lg:"0 8px 40px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",xl:"0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1)",glow:l=>`0 4px 20px ${l}30, 0 0 40px ${l}15`,inset:"inset 0 1px 0 rgba(255,255,255,0.5)"}:{sm:"0 2px 8px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)",md:"0 4px 20px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)",lg:"0 8px 40px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)",xl:"0 20px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25)",glow:l=>`0 4px 20px ${l}40, 0 0 40px ${l}20`,inset:"inset 0 1px 0 rgba(255,255,255,0.1)"},d=e?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.15)",u=e?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.08)",f=e?"rgba(0,0,0,0.15)":"rgba(255,255,255,0.2)",m=e?"rgba(0,0,0,0.25)":"rgba(255,255,255,0.3)",g={low:e?"rgba(0,0,0,0.02)":"rgba(255,255,255,0.02)",medium:e?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",high:e?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.06)",elevated:e?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",prominent:e?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.12)",overlay:e?"rgba(255,255,255,0.95)":"rgba(30,30,40,0.95)",code:e?"rgba(0,0,0,0.04)":"rgba(0,0,0,0.4)"},y=l=>{var x,b;const p={position:"absolute",left:l.x,top:l.y,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'};switch(l.type){case"window":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:e?"linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)":"linear-gradient(180deg, #2d3748 0%, #1a202c 100%)",borderRadius:"12px 12px 0 0",display:"flex",alignItems:"center",padding:"0 16px",boxShadow:h.lg,border:`1px solid ${d}`},children:[o.jsxs("div",{style:{display:"flex",gap:8,marginRight:16},children:[o.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:"linear-gradient(135deg, #ff6b6b, #ee5a5a)",boxShadow:"0 2px 4px rgba(238,90,90,0.4)"}}),o.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:"linear-gradient(135deg, #ffd93d, #f0c419)",boxShadow:"0 2px 4px rgba(240,196,25,0.4)"}}),o.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:"linear-gradient(135deg, #6bcf63, #4ade80)",boxShadow:"0 2px 4px rgba(74,222,128,0.4)"}})]}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.9rem",fontWeight:600,letterSpacing:"-0.01em"},children:s(l.label)})]},l.id);case"card":return o.jsx("div",{style:{...p,width:l.width,height:l.height,...c.light,border:`1px solid ${d}`,borderRadius:16,boxShadow:`${h.md}, ${h.inset}`},children:l.label&&o.jsx("div",{style:{padding:"14px 18px",borderBottom:`1px solid ${u}`,background:e?"linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",borderRadius:"16px 16px 0 0",fontWeight:600,color:t.textPrimary,fontSize:"0.9rem",letterSpacing:"-0.01em"},children:s(l.label)})},l.id);case"modal":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,...c.medium,border:`1px solid ${d}`,borderRadius:20,boxShadow:h.xl},children:[o.jsxs("div",{style:{padding:"18px 24px",borderBottom:`1px solid ${u}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:e?"linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",borderRadius:"20px 20px 0 0"},children:[o.jsx("span",{style:{fontWeight:700,color:t.textPrimary,fontSize:"1rem",letterSpacing:"-0.02em"},children:s(l.label)}),o.jsx("div",{style:{width:28,height:28,borderRadius:8,background:e?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:o.jsx("span",{style:{color:t.textSecondary,fontSize:"1rem",lineHeight:1},children:"×"})})]}),o.jsx("div",{style:{padding:24,color:t.textSecondary,fontSize:"0.9rem",lineHeight:1.6},children:"Modal content area..."})]},l.id);case"navbar":const C=l.items[0]&&/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(l.items[0]);return o.jsxs("div",{style:{...p,width:l.width,height:l.height,...c.dark,borderRadius:12,display:"flex",alignItems:"center",padding:"0 20px",gap:24,boxShadow:h.md,border:`1px solid ${u}`},children:[!C&&o.jsx("span",{style:{fontWeight:800,color:t.textPrimary,fontSize:"1.1rem",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"◆"}),l.items.map((q,L)=>{const X=q.match(/^\[(.+)\]$/),I=q.match(/^\((@?\w+)\)$/);return X?o.jsx("button",{style:{padding:"8px 18px",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,color:"#fff",border:"none",borderRadius:8,fontSize:"0.85rem",fontWeight:600,cursor:"pointer",boxShadow:h.glow(v.purple),transition:"transform 0.2s, box-shadow 0.2s"},children:X[1]},L):I?o.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}40, ${v.blue}40)`,border:`2px solid ${v.purple}60`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:600,color:v.purple},children:I[1].slice(0,2).toUpperCase()},L):o.jsx("span",{style:{color:L===0?v.purple:t.textSecondary,fontSize:"0.9rem",fontWeight:L===0?600:500,transition:"color 0.2s"},children:q},L)})]},l.id);case"tabs":return o.jsx("div",{style:{...p,width:l.width,height:l.height,display:"flex",gap:4,background:g.medium,padding:4,borderRadius:12,border:`1px solid ${u}`},children:l.items.map((q,L)=>o.jsx("div",{style:{padding:"10px 20px",color:L===l.activeIndex?"#fff":t.textSecondary,background:L===l.activeIndex?`linear-gradient(135deg, ${v.purple}, ${v.blue})`:"transparent",borderRadius:8,fontSize:"0.85rem",fontWeight:L===l.activeIndex?600:500,boxShadow:L===l.activeIndex?h.glow(v.purple):"none",transition:"all 0.2s"},children:q},L))},l.id);case"breadcrumbs":return o.jsx("div",{style:{...p,display:"flex",alignItems:"center",gap:10},children:l.items.map((q,L)=>o.jsxs(M.Fragment,{children:[o.jsx("span",{style:{color:L===l.items.length-1?t.textPrimary:v.purple,fontSize:"0.85rem",fontWeight:L===l.items.length-1?600:400},children:q}),L<l.items.length-1&&o.jsx("span",{style:{color:t.textMuted,opacity:.5},children:"›"})]},L))},l.id);case"search":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,...c.light,border:`1px solid ${d}`,borderRadius:12,display:"flex",alignItems:"center",padding:"0 18px",gap:12,boxShadow:h.sm},children:[o.jsx("span",{style:{fontSize:"1rem",opacity:.7},children:"🔍"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.9rem"},children:l.label})]},l.id);case"toolbar":return o.jsx("div",{style:{...p,width:l.width,height:l.height,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:l.items.map((q,L)=>{if(q.type==="search")return o.jsxs("div",{style:{flex:1,minWidth:150,height:38,...c.light,border:`1px solid ${d}`,borderRadius:10,display:"flex",alignItems:"center",padding:"0 14px",gap:10,boxShadow:h.sm},children:[o.jsx("span",{style:{fontSize:"0.9rem",opacity:.7},children:"🔍"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.85rem"},children:q.label})]},L);if(q.type==="dropdown")return o.jsxs("div",{style:{height:38,...c.light,border:`1px solid ${f}`,borderRadius:10,display:"flex",alignItems:"center",padding:"0 14px",gap:8,boxShadow:h.sm},children:[o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.85rem",fontWeight:500},children:q.label}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.65rem"},children:"▼"})]},L);const X=q.variant==="primary";return o.jsx("button",{style:{height:38,padding:"0 16px",background:X?`linear-gradient(135deg, ${v.purple}, ${v.blue})`:"transparent",color:X?"#fff":t.textPrimary,border:X?"none":`1px solid ${f}`,borderRadius:10,fontSize:"0.85rem",fontWeight:600,cursor:"pointer",boxShadow:X?h.glow(v.purple):h.sm,display:"flex",alignItems:"center",gap:6},children:q.label},L)})},l.id);case"dropdown":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,...c.light,border:`1px solid ${f}`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 14px",boxShadow:h.sm},children:[o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.9rem",fontWeight:500},children:l.label}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem"},children:"▼"})]},l.id);case"toggle":return o.jsxs("div",{style:{...p,display:"flex",alignItems:"center",gap:14},children:[o.jsx("div",{style:{width:52,height:28,borderRadius:14,background:l.enabled?`linear-gradient(135deg, ${v.green}, #22c55e)`:g.prominent,position:"relative",boxShadow:l.enabled?h.glow(v.green):h.sm,transition:"all 0.3s"},children:o.jsx("div",{style:{position:"absolute",top:3,left:l.enabled?27:3,width:22,height:22,borderRadius:"50%",background:"#fff",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",transition:"left 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}})}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.9rem",fontWeight:500},children:l.label})]},l.id);case"radio":return o.jsxs("div",{style:{...p,display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{width:22,height:22,borderRadius:"50%",border:`2px solid ${l.selected?v.purple:m}`,display:"flex",alignItems:"center",justifyContent:"center",background:l.selected?`${v.purple}15`:"transparent",boxShadow:l.selected?h.glow(v.purple):"none",transition:"all 0.2s"},children:l.selected&&o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`}})}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.9rem",fontWeight:500},children:l.label})]},l.id);case"slider":return o.jsxs("div",{style:{...p,width:l.width},children:[o.jsxs("div",{style:{height:8,background:g.prominent,borderRadius:4,position:"relative",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.2)"},children:[o.jsx("div",{style:{position:"absolute",left:0,top:0,height:"100%",width:`${l.value}%`,background:`linear-gradient(90deg, ${v.purple}, ${v.blue})`,borderRadius:4,boxShadow:h.glow(v.purple)}}),o.jsx("div",{style:{position:"absolute",top:-8,left:`${l.value}%`,transform:"translateX(-50%)",width:24,height:24,borderRadius:"50%",background:"#fff",border:`3px solid ${v.purple}`,boxShadow:"0 2px 10px rgba(0,0,0,0.3)"}})]}),o.jsxs("div",{style:{textAlign:"right",fontSize:"0.8rem",color:v.purple,marginTop:10,fontWeight:600},children:[l.value,"%"]})]},l.id);case"progress":return o.jsx("div",{style:{...p,width:l.width},children:o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{flex:1,height:10,background:g.prominent,borderRadius:5,overflow:"hidden",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.2)"},children:o.jsx("div",{style:{height:"100%",width:`${l.value}%`,background:`linear-gradient(90deg, ${v.purple}, ${v.blue}, ${v.cyan})`,borderRadius:5,boxShadow:h.glow(v.purple)}})}),o.jsx("span",{style:{fontSize:"0.8rem",color:t.textSecondary,fontWeight:600,whiteSpace:"nowrap"},children:l.label||`${l.value}%`})]})},l.id);case"avatar":return o.jsxs("div",{style:{...p,display:"flex",alignItems:"center",gap:14},children:[o.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}, ${v.pink})`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1.2rem",boxShadow:h.glow(v.purple),border:"3px solid rgba(255,255,255,0.2)"},children:l.label?l.label.charAt(0).toUpperCase():"👤"}),l.label&&o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.95rem",fontWeight:600},children:l.label})]},l.id);case"avatar-group":return o.jsxs("div",{style:{...p,display:"flex"},children:[Array.from({length:Math.min(l.count,5)}).map((q,L)=>o.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:pe[L%pe.length],border:`2px solid ${e?"#fff":"#1a1a2e"}`,marginLeft:L>0?-12:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.8rem",fontWeight:600},children:String.fromCharCode(65+L)},L)),l.count>5&&o.jsxs("div",{style:{width:36,height:36,borderRadius:"50%",background:g.prominent,border:`2px solid ${e?"#fff":"#1a1a2e"}`,marginLeft:-12,display:"flex",alignItems:"center",justifyContent:"center",color:t.textSecondary,fontSize:"0.7rem"},children:["+",l.count-5]})]},l.id);case"image":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.high,border:`2px dashed ${f}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8},children:[o.jsx("span",{style:{fontSize:"2rem"},children:"🖼️"}),l.label&&o.jsx("span",{style:{color:t.textMuted,fontSize:"0.8rem"},children:l.label})]},l.id);case"video":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:e?"rgba(0,0,0,0.05)":"rgba(0,0,0,0.3)",border:`2px dashed ${f}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8},children:[o.jsx("div",{style:{width:60,height:60,borderRadius:"50%",background:g.prominent,display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("span",{style:{fontSize:"1.5rem",marginLeft:4,color:t.textPrimary},children:"▶"})}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.8rem"},children:l.label||"Video"})]},l.id);case"map":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:"rgba(20,184,166,0.1)",border:"2px dashed rgba(20,184,166,0.3)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8},children:[o.jsx("span",{style:{fontSize:"2.5rem"},children:"📍"}),o.jsx("span",{style:{color:v.teal,fontSize:"0.8rem"},children:l.label||"Map"})]},l.id);case"chart":return o.jsx("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:8,padding:16},children:o.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",gap:8},children:[60,85,45,90,55,70].map((q,L)=>o.jsx("div",{style:{width:"12%",height:`${q}%`,background:`linear-gradient(180deg, ${pe[L%pe.length]}, ${pe[L%pe.length]}88)`,borderRadius:"4px 4px 0 0"}},L))})},l.id);case"calendar":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:8,padding:12},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[o.jsx("span",{style:{color:t.textMuted},children:"‹"}),o.jsx("span",{style:{color:t.textPrimary,fontWeight:600,fontSize:"0.85rem"},children:"December 2024"}),o.jsx("span",{style:{color:t.textMuted},children:"›"})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,textAlign:"center"},children:[["S","M","T","W","T","F","S"].map((q,L)=>o.jsx("div",{style:{color:t.textMuted,fontSize:"0.7rem",padding:4},children:q},L)),Array.from({length:35}).map((q,L)=>{const X=L-5,I=X===15;return o.jsx("div",{style:{padding:6,fontSize:"0.75rem",color:X<1||X>31?"transparent":I?"#fff":t.textSecondary,background:I?v.purple:"transparent",borderRadius:"50%"},children:X<1||X>31?"":X},L)})]})]},l.id);case"table-row":return o.jsx("div",{style:{...p,width:l.width,height:l.height,display:"flex",borderBottom:`1px solid ${u}`,background:l.isHeader?g.high:"transparent"},children:l.cells.map((q,L)=>o.jsx("div",{style:{flex:1,padding:"8px 12px",color:l.isHeader?t.textPrimary:t.textSecondary,fontSize:"0.8rem",fontWeight:l.isHeader?600:400,borderRight:L<l.cells.length-1?`1px solid ${u}`:"none"},children:q},L))},l.id);case"list-item":return o.jsxs("div",{style:{...p,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{color:v.purple},children:"•"}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.85rem"},children:l.label})]},l.id);case"list-item-numbered":return o.jsxs("div",{style:{...p,display:"flex",alignItems:"center",gap:10},children:[o.jsxs("span",{style:{color:v.purple,fontWeight:600,minWidth:20},children:[l.number,"."]}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.85rem"},children:l.label})]},l.id);case"badge":const k={success:v.green,warning:v.orange,error:v.red,info:v.blue,new:v.pink,beta:v.purple,pro:v.amber}[l.variant]||v.purple;return o.jsx("div",{style:{...p,display:"inline-flex",padding:"5px 12px",background:`linear-gradient(135deg, ${k}30, ${k}15)`,border:`1px solid ${k}50`,borderRadius:20,color:k,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.02em",textTransform:"uppercase",boxShadow:`0 2px 8px ${k}25`},children:l.label},l.id);case"badge-group":const S={success:v.green,warning:v.orange,error:v.red,info:v.blue,new:v.pink,beta:v.purple,pro:v.amber};return o.jsx("div",{style:{...p,display:"flex",flexWrap:"wrap",gap:8},children:l.badges.map((q,L)=>{const X=S[q.variant]||v.purple;return o.jsx("span",{style:{display:"inline-flex",padding:"5px 12px",background:`linear-gradient(135deg, ${X}30, ${X}15)`,border:`1px solid ${X}50`,borderRadius:20,color:X,fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.02em",textTransform:"uppercase",boxShadow:`0 2px 8px ${X}25`},children:q.label},L)})},l.id);case"alert":const E={info:{color:v.blue,icon:"ℹ️"},success:{color:v.green,icon:"✓"},warning:{color:v.orange,icon:"⚠️"},error:{color:v.red,icon:"✗"}},j=E[l.variant]||E.info;return o.jsxs("div",{style:{...p,width:l.width,padding:"12px 16px",background:`${j.color}15`,border:`1px solid ${j.color}40`,borderRadius:8,display:"flex",alignItems:"center",gap:12},children:[o.jsx("span",{style:{fontSize:"1.1rem"},children:j.icon}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.85rem"},children:l.label})]},l.id);case"stepper":return o.jsx("div",{style:{...p,width:l.width,display:"flex",alignItems:"center",justifyContent:"center",gap:0},children:Array.from({length:l.total}).map((q,L)=>o.jsxs(M.Fragment,{children:[o.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:L<l.current?v.green:L===l.current-1?v.purple:g.prominent,display:"flex",alignItems:"center",justifyContent:"center",color:L<l.current?"#fff":t.textSecondary,fontSize:"0.8rem",fontWeight:600},children:L<l.current-1?"✓":L+1}),L<l.total-1&&o.jsx("div",{style:{width:40,height:2,background:L<l.current-1?v.green:g.prominent}})]},L))},l.id);case"pagination":return o.jsxs("div",{style:{...p,display:"flex",alignItems:"center",gap:4},children:[o.jsx("button",{style:{width:32,height:32,background:g.prominent,border:"none",borderRadius:6,color:t.textSecondary,cursor:"pointer"},children:"‹"}),Array.from({length:Math.min(l.total,5)}).map((q,L)=>{const X=L+1;return o.jsx("button",{style:{width:32,height:32,background:X===l.current?v.purple:g.prominent,border:"none",borderRadius:6,color:X===l.current?"#fff":t.textSecondary,cursor:"pointer",fontSize:"0.8rem"},children:X},L)}),l.total>5&&o.jsx("span",{style:{color:t.textMuted,padding:"0 8px"},children:"..."}),l.total>5&&o.jsx("button",{style:{width:32,height:32,background:g.prominent,border:"none",borderRadius:6,color:t.textSecondary,cursor:"pointer",fontSize:"0.8rem"},children:l.total}),o.jsx("button",{style:{width:32,height:32,background:g.prominent,border:"none",borderRadius:6,color:t.textSecondary,cursor:"pointer"},children:"›"})]},l.id);case"skeleton":return o.jsx("div",{style:{...p,width:l.width,height:l.height,background:e?"linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 75%)":"linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)",backgroundSize:"200% 100%",borderRadius:4,animation:"shimmer 1.5s infinite"}},l.id);case"textarea":return o.jsx("div",{style:{...p,width:l.width,height:l.height,background:g.elevated,border:`1px solid ${f}`,borderRadius:8,padding:12},children:o.jsx("span",{style:{color:t.textMuted,fontSize:"0.85rem"},children:l.label||"Enter text..."})},l.id);case"chat-message":const $=l.isUser?v.blue:g.prominent,R=l.isUser?"flex-end":"flex-start",A=l.isUser?"16px 16px 4px 16px":"16px 16px 16px 4px";return o.jsxs("div",{style:{...p,width:l.width,display:"flex",flexDirection:"column",alignItems:R},children:[o.jsx("span",{style:{fontSize:"0.7rem",color:t.textMuted,marginBottom:4},children:l.sender}),o.jsx("div",{style:{maxWidth:"75%",background:$,padding:"10px 14px",borderRadius:A},children:o.jsx("span",{style:{color:l.isUser?"#fff":t.textPrimary,fontSize:"0.85rem",lineHeight:1.4},children:l.message})})]},l.id);case"button":const _={primary:{bg:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,border:"transparent",color:"#fff",shadow:h.glow(v.purple)},secondary:{bg:g.elevated,border:f,color:t.textPrimary,shadow:h.sm},ghost:{bg:"transparent",border:"transparent",color:v.purple,shadow:"none"},danger:{bg:`linear-gradient(135deg, ${v.red}, #dc2626)`,border:"transparent",color:"#fff",shadow:h.glow(v.red)},success:{bg:`linear-gradient(135deg, ${v.green}, #22c55e)`,border:"transparent",color:"#fff",shadow:h.glow(v.green)}},T=_[l.variant]||_.primary;return o.jsx("div",{style:{...p,width:l.width,height:l.height,background:T.bg,border:`2px solid ${T.border}`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:T.shadow,transition:"all 0.2s"},children:o.jsx("span",{style:{color:T.color,fontSize:"0.9rem",fontWeight:600,letterSpacing:"-0.01em"},children:l.label})},l.id);case"icon-button":const P={menu:"☰",close:"✕",settings:"⚙",user:"👤",search:"🔍",home:"🏠",edit:"✏️",delete:"🗑️",add:"+",more:"⋯"};return o.jsx("div",{style:{...p,width:40,height:40,background:g.prominent,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:o.jsx("span",{style:{fontSize:"1.2rem"},children:P[l.icon]||l.icon})},l.id);case"divider-label":return o.jsxs("div",{style:{...p,width:l.width,display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{flex:1,height:1,background:d}}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem"},children:l.label}),o.jsx("div",{style:{flex:1,height:1,background:d}})]},l.id);case"rating":return o.jsx("div",{style:{...p,display:"flex",gap:4},children:Array.from({length:l.total}).map((q,L)=>o.jsx("span",{style:{color:L<l.filled?v.amber:f,fontSize:"1.2rem"},children:"★"},L))},l.id);case"chip-group":return o.jsx("div",{style:{...p,display:"flex",gap:8,flexWrap:"wrap"},children:l.tags.map((q,L)=>o.jsx("span",{style:{padding:"6px 12px",background:`${pe[L%pe.length]}20`,border:`1px solid ${pe[L%pe.length]}`,borderRadius:16,color:pe[L%pe.length],fontSize:"0.8rem"},children:q},L))},l.id);case"tooltip":return o.jsx("div",{style:{...p,width:20,height:20,borderRadius:"50%",background:g.prominent,display:"flex",alignItems:"center",justifyContent:"center",color:t.textSecondary,fontSize:"0.75rem",fontWeight:600},children:"?"},l.id);case"button-row":return o.jsx("div",{style:{...p,width:l.width,display:"flex",gap:10,flexWrap:"wrap"},children:l.buttons.map((q,L)=>o.jsx("div",{style:{padding:"10px 16px",background:pe[L%pe.length],borderRadius:8,color:"#fff",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:6},children:q},L))},l.id);case"feed-item":return o.jsxs("div",{style:{...p,width:l.width,display:"flex",alignItems:"center",gap:10,padding:"8px 0"},children:[o.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}, ${v.pink})`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.75rem",fontWeight:700},children:l.username.charAt(0).toUpperCase()}),o.jsxs("div",{style:{flex:1},children:[o.jsxs("span",{style:{color:v.purple,fontWeight:600,fontSize:"0.85rem"},children:["@",l.username]}),o.jsx("span",{style:{color:t.textSecondary,fontSize:"0.85rem",marginLeft:6},children:l.text})]})]},l.id);case"win-notification":return o.jsxs("div",{style:{...p,width:l.width,display:"flex",alignItems:"center",gap:12,padding:"10px 14px",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:10},children:[o.jsx("span",{style:{fontSize:"1.5rem"},children:l.emoji}),o.jsxs("div",{style:{flex:1},children:[o.jsxs("span",{style:{color:v.green,fontWeight:700,fontSize:"0.9rem"},children:["@",l.username]}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.9rem",marginLeft:6},children:l.text})]})]},l.id);case"social-stats":return o.jsx("div",{style:{...p,width:l.width,display:"flex",alignItems:"center",gap:20,padding:"8px 0"},children:l.text.split(/\s{2,}/).map((q,L)=>o.jsx("span",{style:{color:L===0?v.pink:t.textSecondary,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:4},children:q},L))},l.id);case"input":return o.jsx("div",{style:{...p,width:l.width,height:l.height,...c.light,border:`1px solid ${f}`,borderRadius:10,display:"flex",alignItems:"center",padding:"0 16px",boxShadow:`${h.sm}, inset 0 1px 2px rgba(0,0,0,0.1)`,transition:"border-color 0.2s, box-shadow 0.2s"},children:o.jsx("span",{style:{color:t.textMuted,fontSize:"0.9rem",fontWeight:400},children:l.label||"Enter text..."})},l.id);case"checkbox":return o.jsxs("div",{style:{...p,display:"flex",alignItems:"center",gap:10},children:[o.jsx("div",{style:{width:20,height:20,border:`2px solid ${l.checked?v.blue:m}`,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",background:l.checked?v.blue:"transparent"},children:l.checked&&o.jsx("span",{style:{color:"#fff",fontSize:"0.75rem"},children:"✓"})}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.85rem"},children:l.label})]},l.id);case"separator":return o.jsx("div",{style:{...p,width:l.width,height:l.height,background:d}},l.id);case"text":const W={h1:{fontSize:"1.5rem",fontWeight:800,color:t.textPrimary},h2:{fontSize:"1.2rem",fontWeight:700,color:t.textPrimary},h3:{fontSize:"1rem",fontWeight:600,color:t.textPrimary},bold:{fontSize:"0.9rem",fontWeight:600,color:t.textPrimary},body:{fontSize:"0.9rem",fontWeight:400,color:t.textSecondary}},N=W[l.textType]||W.body;return o.jsx("div",{style:{...p,...N},children:s(l.label,{color:t.textPrimary})},l.id);case"hero":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:`linear-gradient(135deg, ${v.purple}20, ${v.blue}15, ${v.cyan}10)`,borderRadius:16,padding:"48px 40px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",border:`1px solid ${v.purple}30`,boxShadow:`0 8px 32px ${v.purple}15`},children:[o.jsx("h1",{style:{color:t.textPrimary,fontSize:"2.2rem",fontWeight:800,marginBottom:16,letterSpacing:"-0.02em",background:`linear-gradient(135deg, ${t.textPrimary}, ${v.purple})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:l.title||"Welcome to Our Platform"}),l.subtitle&&o.jsx("p",{style:{color:t.textSecondary,fontSize:"1.1rem",maxWidth:520,lineHeight:1.6,marginBottom:28},children:l.subtitle}),l.cta&&o.jsx("button",{style:{padding:"14px 32px",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,border:"none",borderRadius:10,color:"#fff",fontSize:"1rem",fontWeight:600,cursor:"pointer",boxShadow:`0 4px 20px ${v.purple}50`,transform:"translateY(0)",transition:"all 0.2s"},children:l.cta})]},l.id);case"pricing-card":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:l.featured?`linear-gradient(135deg, ${v.purple}15, ${v.blue}10)`:g.low,border:`${l.featured?2:1}px solid ${l.featured?v.purple:d}`,borderRadius:16,padding:"28px 24px",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[l.featured&&o.jsx("div",{style:{position:"absolute",top:12,right:-32,background:`linear-gradient(135deg, ${v.purple}, ${v.pink})`,color:"#fff",fontSize:"0.7rem",fontWeight:700,padding:"4px 40px",transform:"rotate(45deg)"},children:"POPULAR"}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("h3",{style:{color:t.textPrimary,fontSize:"1.2rem",fontWeight:700,marginBottom:8},children:l.plan||"Pro Plan"}),o.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4},children:[o.jsx("span",{style:{color:t.textPrimary,fontSize:"2.5rem",fontWeight:800},children:l.price||"$29"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.9rem"},children:"/month"})]})]}),o.jsx("div",{style:{flex:1,borderTop:`1px solid ${u}`,paddingTop:20},children:(l.features||["Feature 1","Feature 2","Feature 3"]).map((q,L)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12,color:t.textSecondary,fontSize:"0.9rem"},children:[o.jsx("span",{style:{color:v.green,fontSize:"1rem"},children:"✓"}),q]},L))}),o.jsx("button",{style:{marginTop:20,padding:"12px 20px",background:l.featured?`linear-gradient(135deg, ${v.purple}, ${v.blue})`:g.prominent,border:l.featured?"none":`1px solid ${f}`,borderRadius:10,color:l.featured?"#fff":t.textPrimary,fontSize:"0.9rem",fontWeight:600,cursor:"pointer"},children:l.cta||"Get Started"})]},l.id);case"feature-card":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:16,padding:"28px",display:"flex",flexDirection:"column",gap:16,transition:"all 0.2s",boxShadow:h.md},children:[o.jsx("div",{style:{width:56,height:56,borderRadius:14,background:`${v.purple}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem"},children:l.icon||"🚀"}),o.jsx("h3",{style:{color:t.textPrimary,fontSize:"1.1rem",fontWeight:700},children:l.title||"Feature Title"}),o.jsx("p",{style:{color:t.textSecondary,fontSize:"0.9rem",lineHeight:1.6},children:l.description||"Feature description goes here with more details about this amazing capability."})]},l.id);case"stat-widget":const G=(x=l.trend)!=null&&x.startsWith("+")?v.green:(b=l.trend)!=null&&b.startsWith("-")?v.red:t.textMuted;return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:14,padding:"20px 24px",display:"flex",flexDirection:"column",gap:8},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsx("span",{style:{color:t.textMuted,fontSize:"0.85rem",fontWeight:500},children:l.label||"Metric"}),l.trend&&o.jsx("span",{style:{color:G,fontSize:"0.8rem",fontWeight:600,padding:"3px 8px",background:`${G}15`,borderRadius:6},children:l.trend})]}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"2rem",fontWeight:800,letterSpacing:"-0.02em"},children:l.value||"1,234"}),o.jsx("div",{style:{height:32,display:"flex",alignItems:"flex-end",gap:3,marginTop:8},children:[40,65,45,80,55,70,90,60,75,85].map((q,L)=>o.jsx("div",{style:{flex:1,height:`${q}%`,background:`linear-gradient(180deg, ${v.purple}80, ${v.purple}40)`,borderRadius:2}},L))})]},l.id);case"login-form":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:20,padding:"36px 32px",display:"flex",flexDirection:"column",boxShadow:h.xl},children:[o.jsxs("div",{style:{textAlign:"center",marginBottom:28},children:[o.jsx("div",{style:{width:56,height:56,margin:"0 auto 16px",borderRadius:14,background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem"},children:"🔐"}),o.jsx("h2",{style:{color:t.textPrimary,fontSize:"1.4rem",fontWeight:700,marginBottom:4},children:l.title||"Welcome Back"}),o.jsx("p",{style:{color:t.textMuted,fontSize:"0.85rem"},children:"Sign in to your account"})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14,flex:1},children:[o.jsxs("div",{children:[o.jsx("label",{style:{color:t.textSecondary,fontSize:"0.8rem",fontWeight:500,marginBottom:6,display:"block"},children:"Email"}),o.jsx("div",{style:{background:g.high,border:`1px solid ${d}`,borderRadius:10,padding:"12px 14px",color:t.textMuted,fontSize:"0.9rem"},children:"you@example.com"})]}),o.jsxs("div",{children:[o.jsx("label",{style:{color:t.textSecondary,fontSize:"0.8rem",fontWeight:500,marginBottom:6,display:"block"},children:"Password"}),o.jsx("div",{style:{background:g.high,border:`1px solid ${d}`,borderRadius:10,padding:"12px 14px",color:t.textMuted,fontSize:"0.9rem"},children:"••••••••"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:4},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("div",{style:{width:16,height:16,borderRadius:4,border:`1.5px solid ${m}`}}),o.jsx("span",{style:{color:t.textSecondary,fontSize:"0.8rem"},children:"Remember me"})]}),o.jsx("span",{style:{color:v.purple,fontSize:"0.8rem",cursor:"pointer"},children:"Forgot password?"})]})]}),o.jsx("button",{style:{marginTop:20,padding:"14px",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,border:"none",borderRadius:10,color:"#fff",fontSize:"0.95rem",fontWeight:600,cursor:"pointer"},children:"Sign In"}),o.jsxs("p",{style:{textAlign:"center",marginTop:16,color:t.textMuted,fontSize:"0.85rem"},children:["Don't have an account? ",o.jsx("span",{style:{color:v.purple,cursor:"pointer"},children:"Sign up"})]})]},l.id);case"signup-form":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:20,padding:"36px 32px",display:"flex",flexDirection:"column",boxShadow:h.xl},children:[o.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[o.jsx("div",{style:{width:56,height:56,margin:"0 auto 16px",borderRadius:14,background:`linear-gradient(135deg, ${v.green}, ${v.teal})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem"},children:"✨"}),o.jsx("h2",{style:{color:t.textPrimary,fontSize:"1.4rem",fontWeight:700,marginBottom:4},children:l.title||"Create Account"}),o.jsx("p",{style:{color:t.textMuted,fontSize:"0.85rem"},children:"Start your journey today"})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,flex:1},children:[o.jsxs("div",{style:{display:"flex",gap:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{color:t.textSecondary,fontSize:"0.75rem",fontWeight:500,marginBottom:5,display:"block"},children:"First Name"}),o.jsx("div",{style:{background:g.high,border:`1px solid ${d}`,borderRadius:10,padding:"11px 12px",color:t.textMuted,fontSize:"0.85rem"},children:"John"})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{color:t.textSecondary,fontSize:"0.75rem",fontWeight:500,marginBottom:5,display:"block"},children:"Last Name"}),o.jsx("div",{style:{background:g.high,border:`1px solid ${d}`,borderRadius:10,padding:"11px 12px",color:t.textMuted,fontSize:"0.85rem"},children:"Doe"})]})]}),o.jsxs("div",{children:[o.jsx("label",{style:{color:t.textSecondary,fontSize:"0.75rem",fontWeight:500,marginBottom:5,display:"block"},children:"Email"}),o.jsx("div",{style:{background:g.high,border:`1px solid ${d}`,borderRadius:10,padding:"11px 12px",color:t.textMuted,fontSize:"0.85rem"},children:"john@example.com"})]}),o.jsxs("div",{children:[o.jsx("label",{style:{color:t.textSecondary,fontSize:"0.75rem",fontWeight:500,marginBottom:5,display:"block"},children:"Password"}),o.jsx("div",{style:{background:g.high,border:`1px solid ${d}`,borderRadius:10,padding:"11px 12px",color:t.textMuted,fontSize:"0.85rem"},children:"••••••••"})]})]}),o.jsx("button",{style:{marginTop:18,padding:"13px",background:`linear-gradient(135deg, ${v.green}, ${v.teal})`,border:"none",borderRadius:10,color:"#fff",fontSize:"0.95rem",fontWeight:600,cursor:"pointer"},children:"Create Account"}),o.jsxs("p",{style:{textAlign:"center",marginTop:14,color:t.textMuted,fontSize:"0.85rem"},children:["Already have an account? ",o.jsx("span",{style:{color:v.purple,cursor:"pointer"},children:"Sign in"})]})]},l.id);case"dashboard-widget":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:14,padding:"18px 20px",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[o.jsx("span",{style:{color:t.textSecondary,fontSize:"0.85rem",fontWeight:500},children:l.title||"Widget"}),o.jsx("span",{style:{fontSize:"1.2rem"},children:l.icon||"📊"})]}),o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center"},children:o.jsx("span",{style:{color:t.textPrimary,fontSize:"1.8rem",fontWeight:800},children:l.value||"0"})})]},l.id);case"bottom-nav":return o.jsx("div",{style:{...p,width:l.width,height:l.height,background:g.overlay,borderRadius:"20px 20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-around",padding:"0 16px",boxShadow:e?"0 -4px 20px rgba(0,0,0,0.1)":"0 -4px 20px rgba(0,0,0,0.3)",backdropFilter:"blur(10px)"},children:(l.items||["🏠 Home","🔍 Search","➕","❤️ Likes","👤 Profile"]).map((q,L)=>{const X=L===0,[I,B]=q.includes(" ")?q.split(" ",2):[q,""];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"8px 12px",cursor:"pointer"},children:[o.jsx("span",{style:{fontSize:I==="➕"?"1.8rem":"1.3rem",opacity:X?1:.6},children:I}),B&&o.jsx("span",{style:{fontSize:"0.65rem",color:X?v.purple:t.textMuted,fontWeight:X?600:400},children:B})]},L)})},l.id);case"app-bar":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.overlay,borderRadius:"0 0 16px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",boxShadow:h.md,backdropFilter:"blur(10px)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("span",{style:{fontSize:"1.3rem",cursor:"pointer",color:t.textPrimary},children:"←"}),o.jsx("span",{style:{color:t.textPrimary,fontSize:"1.1rem",fontWeight:600},children:l.title||"Screen Title"})]}),o.jsx("div",{style:{display:"flex",alignItems:"center",gap:16},children:(l.actions||["🔔","👤"]).map((q,L)=>o.jsx("span",{style:{fontSize:"1.2rem",cursor:"pointer"},children:q},L))})]},l.id);case"fab":return o.jsx("div",{style:{...p,width:56,height:56,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:`0 6px 24px ${v.purple}50`,fontSize:"1.5rem",color:"#fff",fontWeight:300},children:l.icon||"+"},l.id);case"toast":const V={success:v.green,error:v.red,warning:v.orange,info:v.blue},J={success:"✓",error:"✗",warning:"⚠",info:"ℹ"},Z=V[l.variant]||v.blue;return o.jsxs("div",{style:{...p,width:l.width,minHeight:52,background:g.overlay,border:`1px solid ${Z}40`,borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:12,boxShadow:`${h.lg}, 0 0 0 1px ${Z}20`,backdropFilter:"blur(10px)"},children:[o.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:`${Z}20`,display:"flex",alignItems:"center",justifyContent:"center",color:Z,fontSize:"0.9rem",fontWeight:700},children:J[l.variant]||"ℹ"}),o.jsx("span",{style:{flex:1,color:t.textPrimary,fontSize:"0.9rem"},children:l.message||"Notification message"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"1rem",cursor:"pointer"},children:"×"})]},l.id);case"empty-state":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`2px dashed ${d}`,borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:32,textAlign:"center"},children:[o.jsx("div",{style:{width:80,height:80,borderRadius:20,background:g.high,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,fontSize:"2.5rem"},children:"📭"}),o.jsx("h3",{style:{color:t.textPrimary,fontSize:"1.2rem",fontWeight:600,marginBottom:8},children:l.title||"No items yet"}),o.jsx("p",{style:{color:t.textMuted,fontSize:"0.9rem",maxWidth:280,lineHeight:1.5,marginBottom:20},children:l.description||"Get started by creating your first item"}),l.cta&&o.jsx("button",{style:{padding:"10px 24px",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,border:"none",borderRadius:8,color:"#fff",fontSize:"0.9rem",fontWeight:600,cursor:"pointer"},children:l.cta})]},l.id);case"error-state":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:`${v.red}08`,border:`1px solid ${v.red}30`,borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:32,textAlign:"center"},children:[o.jsx("div",{style:{width:80,height:80,borderRadius:20,background:`${v.red}15`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,fontSize:"2.5rem"},children:"⚠️"}),o.jsx("h3",{style:{color:v.red,fontSize:"1.2rem",fontWeight:600,marginBottom:8},children:l.title||"Something went wrong"}),o.jsx("p",{style:{color:t.textSecondary,fontSize:"0.9rem",maxWidth:300,lineHeight:1.5,marginBottom:20},children:l.description||"We encountered an error. Please try again."}),l.cta&&o.jsx("button",{style:{padding:"10px 24px",background:v.red,border:"none",borderRadius:8,color:"#fff",fontSize:"0.9rem",fontWeight:600,cursor:"pointer"},children:l.cta})]},l.id);case"loading-state":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16},children:[o.jsx("div",{style:{width:48,height:48,border:`3px solid ${v.purple}30`,borderTopColor:v.purple,borderRadius:"50%",animation:"spin 1s linear infinite"}}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.9rem"},children:l.text||"Loading..."}),o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]},l.id);case"testimonial":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:16,padding:"28px",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{fontSize:"2.5rem",color:v.purple,opacity:.6,lineHeight:1},children:'"'}),o.jsx("p",{style:{flex:1,color:t.textPrimary,fontSize:"1rem",lineHeight:1.6,fontStyle:"italic",marginTop:8},children:l.quote||"This product has completely transformed how we work."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:20,paddingTop:16,borderTop:`1px solid ${u}`},children:[o.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}, ${v.pink})`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:"1.1rem"},children:(l.name||"J").charAt(0)}),o.jsxs("div",{children:[o.jsx("div",{style:{color:t.textPrimary,fontWeight:600,fontSize:"0.95rem"},children:l.name||"Jane Doe"}),o.jsx("div",{style:{color:t.textMuted,fontSize:"0.8rem"},children:l.title||"CEO, Company"})]})]})]},l.id);case"footer":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:e?"rgba(0,0,0,0.04)":"rgba(0,0,0,0.3)",borderRadius:"16px 16px 0 0",padding:"32px 40px",display:"flex",flexDirection:"column",gap:24},children:[o.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:32},children:(l.sections||[["Product","Features","Pricing"],["Company","About","Blog"],["Support","Help","Contact"]]).map((q,L)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[o.jsx("div",{style:{color:t.textPrimary,fontWeight:600,fontSize:"0.9rem"},children:q[0]}),q.slice(1).map((X,I)=>o.jsx("span",{style:{color:t.textMuted,fontSize:"0.85rem",cursor:"pointer"},children:X},I))]},L))}),o.jsxs("div",{style:{borderTop:`1px solid ${u}`,paddingTop:20,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("span",{style:{color:t.textMuted,fontSize:"0.8rem"},children:l.copyright||"© 2024 Company. All rights reserved."}),o.jsx("div",{style:{display:"flex",gap:16},children:["twitter","github","linkedin"].map((q,L)=>o.jsx("div",{style:{width:32,height:32,borderRadius:8,background:g.elevated,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"0.9rem",color:t.textSecondary},children:q==="twitter"?"𝕏":q==="github"?"⌗":"in"},L))})]})]},l.id);case"social-links":const ae={twitter:"𝕏",github:"⌗",linkedin:"in",facebook:"f",instagram:"📷",youtube:"▶"};return o.jsx("div",{style:{...p,display:"flex",gap:12},children:(l.links||["twitter","github","linkedin"]).map((q,L)=>o.jsx("div",{style:{width:40,height:40,borderRadius:10,background:g.elevated,border:`1px solid ${d}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"1rem",color:t.textSecondary},children:ae[q.toLowerCase()]||q.charAt(0).toUpperCase()},L))},l.id);case"cta-section":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:`linear-gradient(135deg, ${v.purple}20, ${v.blue}15)`,border:`1px solid ${v.purple}30`,borderRadius:20,padding:"40px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[o.jsx("h2",{style:{color:t.textPrimary,fontSize:"1.8rem",fontWeight:800,marginBottom:12},children:l.title||"Ready to get started?"}),o.jsx("p",{style:{color:t.textSecondary,fontSize:"1rem",maxWidth:480,marginBottom:24},children:l.description||"Join thousands of satisfied customers today."}),o.jsxs("div",{style:{display:"flex",gap:12},children:[o.jsx("button",{style:{padding:"14px 28px",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,border:"none",borderRadius:10,color:"#fff",fontSize:"1rem",fontWeight:600,cursor:"pointer"},children:l.cta||"Get Started"}),o.jsx("button",{style:{padding:"14px 28px",background:"transparent",border:`1px solid ${m}`,borderRadius:10,color:t.textPrimary,fontSize:"1rem",fontWeight:600,cursor:"pointer"},children:"Learn More"})]})]},l.id);case"profile-card":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`1px solid ${d}`,borderRadius:20,padding:"28px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[o.jsx("div",{style:{width:80,height:80,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}, ${v.pink})`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,fontSize:"2rem",color:"#fff",fontWeight:700},children:(l.name||"U").charAt(0)}),o.jsx("h3",{style:{color:t.textPrimary,fontSize:"1.2rem",fontWeight:700,marginBottom:4},children:l.name||"User Name"}),o.jsx("span",{style:{color:v.purple,fontSize:"0.85rem",marginBottom:12},children:l.username||"@username"}),o.jsx("p",{style:{color:t.textSecondary,fontSize:"0.9rem",lineHeight:1.5},children:l.bio||"Software developer and design enthusiast."}),o.jsxs("div",{style:{display:"flex",gap:24,marginTop:20,paddingTop:20,borderTop:`1px solid ${u}`,width:"100%",justifyContent:"center"},children:[o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("div",{style:{color:t.textPrimary,fontWeight:700,fontSize:"1.1rem"},children:"1.2K"}),o.jsx("div",{style:{color:t.textMuted,fontSize:"0.75rem"},children:"Followers"})]}),o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("div",{style:{color:t.textPrimary,fontWeight:700,fontSize:"1.1rem"},children:"348"}),o.jsx("div",{style:{color:t.textMuted,fontSize:"0.75rem"},children:"Following"})]})]})]},l.id);case"activity-item":return o.jsxs("div",{style:{...p,width:l.width,display:"flex",alignItems:"flex-start",gap:12,padding:"12px 0"},children:[o.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg, ${pe[Math.floor(Math.random()*5)]}, ${pe[Math.floor(Math.random()*5)+1]})`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.8rem",fontWeight:600,flexShrink:0},children:"U"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("p",{style:{color:t.textPrimary,fontSize:"0.9rem",lineHeight:1.5,margin:0},children:l.text||"User performed an action"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem"},children:l.time||"2 hours ago"})]})]},l.id);case"comment":return o.jsxs("div",{style:{...p,width:l.width,display:"flex",alignItems:"flex-start",gap:12,padding:"16px",background:g.low,borderRadius:12,border:`1px solid ${u}`},children:[o.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:`linear-gradient(135deg, ${v.purple}, ${v.blue})`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"0.9rem",fontWeight:600,flexShrink:0},children:(l.username||"U").charAt(0)}),o.jsxs("div",{style:{flex:1},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[o.jsx("span",{style:{color:t.textPrimary,fontWeight:600,fontSize:"0.9rem"},children:l.username||"Username"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem"},children:l.time||"1 hour ago"})]}),o.jsx("p",{style:{color:t.textSecondary,fontSize:"0.9rem",lineHeight:1.5,margin:0},children:l.text||"This is a comment..."}),o.jsxs("div",{style:{display:"flex",gap:16,marginTop:10},children:[o.jsx("span",{style:{color:t.textMuted,fontSize:"0.8rem",cursor:"pointer"},children:"❤️ Like"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.8rem",cursor:"pointer"},children:"💬 Reply"})]})]})]},l.id);case"code-block":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.code,border:`1px solid ${d}`,borderRadius:12,overflow:"hidden",fontFamily:"SF Mono, Monaco, Consolas, monospace"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:g.low,borderBottom:`1px solid ${u}`},children:[o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem"},children:l.language||"javascript"}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem",cursor:"pointer"},children:"📋 Copy"})]}),o.jsx("pre",{style:{margin:0,padding:"16px",color:t.textSecondary,fontSize:"0.85rem",lineHeight:1.6,overflow:"auto"},children:o.jsx("code",{children:l.code||`const greeting = "Hello, World!";
console.log(greeting);`})})]},l.id);case"upload":return o.jsxs("div",{style:{...p,width:l.width,height:l.height,background:g.low,border:`2px dashed ${f}`,borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,cursor:"pointer",transition:"all 0.2s"},children:[o.jsx("div",{style:{width:56,height:56,borderRadius:14,background:`${v.purple}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem"},children:"📤"}),o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("p",{style:{color:t.textPrimary,fontSize:"0.95rem",fontWeight:600,marginBottom:4},children:l.label||"Drag files here"}),o.jsx("p",{style:{color:t.textMuted,fontSize:"0.8rem"},children:"or click to browse"})]}),o.jsx("span",{style:{color:t.textMuted,fontSize:"0.75rem"},children:"Max 10MB • PNG, JPG, PDF"})]},l.id);case"accordion":return o.jsx("div",{style:{...p,width:l.width,background:g.low,border:`1px solid ${d}`,borderRadius:12,overflow:"hidden"},children:(l.items||["Section 1","Section 2","Section 3"]).map((q,L)=>{var X;return o.jsxs("div",{style:{borderBottom:L<(((X=l.items)==null?void 0:X.length)||3)-1?`1px solid ${u}`:"none"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",cursor:"pointer"},children:[o.jsx("span",{style:{color:t.textPrimary,fontSize:"0.95rem",fontWeight:500},children:q}),o.jsx("span",{style:{color:t.textMuted,transform:L===0?"rotate(180deg)":"none",transition:"transform 0.2s"},children:"▾"})]}),L===0&&o.jsx("div",{style:{padding:"0 18px 14px",color:t.textSecondary,fontSize:"0.9rem",lineHeight:1.5},children:"Expanded content for this section with more details..."})]},L)})},l.id);case"data-table":return o.jsxs("div",{style:{...p,width:l.width,background:g.low,border:`1px solid ${d}`,borderRadius:12,overflow:"hidden"},children:[o.jsx("div",{style:{display:"flex",background:g.high,borderBottom:`1px solid ${d}`},children:["Name","Status","Date","Actions"].map((q,L)=>o.jsx("div",{style:{flex:L===0?2:1,padding:"12px 16px",color:t.textSecondary,fontSize:"0.8rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:q},L))}),Array.from({length:l.rows||3}).map((q,L)=>o.jsxs("div",{style:{display:"flex",borderBottom:L<(l.rows||3)-1?`1px solid ${u}`:"none"},children:[o.jsxs("div",{style:{flex:2,padding:"14px 16px",color:t.textPrimary,fontSize:"0.9rem"},children:["Item ",L+1]}),o.jsx("div",{style:{flex:1,padding:"14px 16px"},children:o.jsx("span",{style:{padding:"4px 10px",background:L===0?`${v.green}20`:`${v.orange}20`,color:L===0?v.green:v.orange,borderRadius:6,fontSize:"0.75rem",fontWeight:500},children:L===0?"Active":"Pending"})}),o.jsxs("div",{style:{flex:1,padding:"14px 16px",color:t.textMuted,fontSize:"0.85rem"},children:["Dec ",10+L,", 2024"]}),o.jsxs("div",{style:{flex:1,padding:"14px 16px",display:"flex",gap:8},children:[o.jsx("span",{style:{cursor:"pointer"},children:"✏️"}),o.jsx("span",{style:{cursor:"pointer"},children:"🗑️"})]})]},L))]},l.id);default:return null}};return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"auto",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`},children:[o.jsx("style",{children:"@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }"}),o.jsx("div",{style:{position:"relative",minHeight:i,padding:20},children:n.map(y)})]})}function w2({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:50,y:50}),{components:c=[],connections:h=[]}=a,d={service:{color:v.blue,icon:"⚙️"},database:{color:v.green,icon:"🗄️"},cache:{color:v.red,icon:"⚡"},queue:{color:v.orange,icon:"📬"},api:{color:v.purple,icon:"🔌"},component:{color:v.purple,icon:"📦"},default:{color:v.purple,icon:"📦"}},u=M.useMemo(()=>{const l=Math.min(4,Math.max(2,Math.ceil(Math.sqrt(c.length))));return c.map((p,x)=>({...p,id:p.label.toLowerCase().replace(/[^a-z0-9]/g,"_"),defaultX:120+x%l*220,defaultY:100+Math.floor(x/l)*160,style:d[p.type]||d.default}))},[c]),f=l=>e.getNodePosition(l.id,l.defaultX,l.defaultY),m=M.useCallback(()=>{const l=e.finishEditing();if(l.nodeId&&l.newValue!==void 0&&n){const p=u.find(x=>x.id===l.nodeId);p&&p.label!==l.newValue&&n(l.nodeId,p.label,l.newValue)}},[e,u,n]);M.useEffect(()=>{const l=p=>{const b=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?p.metaKey:p.ctrlKey;if(!e.editingNode){if((p.key==="Delete"||p.key==="Backspace")&&e.selectedNodes.size>0&&i){p.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(b&&p.key.toLowerCase()==="c"&&e.selectedNodes.size>0){p.preventDefault(),e.copySelectedNodes(u);return}if(b&&p.key.toLowerCase()==="v"&&e.clipboard&&s){p.preventDefault();const C=e.pasteNodes();C&&s(C);return}}};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e,u,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const l=e.getNodesInSelectionBox(u.map(p=>({...p,x:p.defaultX,y:p.defaultY})),e.selectionBox);l.length>0&&e.setSelectedNodes(new Set(l))}},[e.isSelecting,e.selectionBox,u,e]);const g=M.useCallback(l=>{(l.target===e.canvasRef.current||l.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]),y=M.useMemo(()=>{if(!u.length)return{x:0,y:0,width:400,height:300};const l=u.map(x=>x.defaultX),p=u.map(x=>x.defaultY);return{x:Math.min(...l)-80,y:Math.min(...p)-60,width:Math.max(...l)-Math.min(...l)+280,height:Math.max(...p)-Math.min(...p)+220}},[u]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("style",{children:"@keyframes flowDash { to { stroke-dashoffset: -20; } }"}),o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:g,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:o.jsx("marker",{id:"comp-arrow",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:v.purple})})}),o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[h.map((l,p)=>{const x=u.find(T=>T.id===l.from.toLowerCase().replace(/[^a-z0-9]/g,"_")),b=u.find(T=>T.id===l.to.toLowerCase().replace(/[^a-z0-9]/g,"_"));if(!x||!b)return null;const C=f(x),w=f(b),k=w.x-C.x,S=w.y-C.y,E=Math.sqrt(k*k+S*S)||1,j=(C.x+w.x)/2,$=(C.y+w.y)/2,R=-S/E*30,A=k/E*30,_=`M ${C.x+k/E*75} ${C.y+S/E*50} Q ${j+R} ${$+A} ${w.x-k/E*75} ${w.y-S/E*50}`;return o.jsxs("g",{children:[o.jsx("path",{d:_,fill:"none",stroke:v.purple,strokeWidth:2.5,markerEnd:"url(#comp-arrow)",opacity:.95}),l.label&&o.jsx("text",{x:j+R,y:$+A-8,textAnchor:"middle",fill:t.textSecondary,fontSize:10,children:l.label})]},p)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:`${v.blue}20`,stroke:v.blue,strokeWidth:1,strokeDasharray:"4,4"})]})]}),o.jsx("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:u.map(l=>{const p=f(l),x=e.dragging===l.id,b=e.selectedNodes.has(l.id);return o.jsxs("div",{onClick:C=>e.handleNodeClick(C,l.id),onDoubleClick:C=>e.handleNodeDoubleClick(C,l.id,l.label),onContextMenu:C=>e.handleNodeContextMenu(C,l.id),onMouseDown:C=>e.handleNodeMouseDown(C,l.id,p.x,p.y),onTouchStart:C=>e.handleNodeTouchStart(C,l.id,p.x,p.y),style:{position:"absolute",left:p.x-75,top:p.y-50,width:150,height:100,background:`${l.style.color}15`,border:`2px solid ${b?v.blue:l.style.color}`,borderRadius:12,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:x?"grabbing":"grab",boxShadow:b?`0 0 0 2px ${v.blue}, 0 0 20px ${v.blue}40`:x?`0 0 30px ${l.style.color}50`:`0 4px 20px ${l.style.color}20`,transition:x?"none":"box-shadow 0.2s",touchAction:"none"},children:[o.jsx("div",{style:{fontSize:"1.8rem",marginBottom:6},children:l.style.icon}),e.editingNode===l.id?o.jsx(Xe,{value:e.editingValue,onChange:C=>e.setEditingValue(C),onFinish:m,style:{fontSize:r?"1rem":"0.85rem",fontWeight:600,color:r?ve.stroke:t.textPrimary,textAlign:"center"}}):o.jsx("div",{style:{fontSize:r?"1rem":"0.85rem",fontWeight:600,color:r?ve.stroke:t.textPrimary,textAlign:"center",padding:"0 8px"},children:l.label})]},l.id)})})]}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,0.8)",padding:"6px 12px",borderRadius:6,fontSize:"0.75rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{children:[e.selectedNodes.size," selected"]}),o.jsx("span",{style:{opacity:.6},children:"|"}),o.jsx("span",{style:{opacity:.7},children:"Del to delete • ⌘C copy • ⌘V paste"})]}),e.clipboard&&o.jsxs("div",{style:{position:"absolute",top:e.selectedNodes.size>0?48:12,left:12,background:`${v.green}20`,padding:"4px 10px",borderRadius:4,fontSize:"0.7rem",color:v.green,border:`1px solid ${v.green}40`},children:[e.clipboard.length," node",e.clipboard.length>1?"s":""," copied"]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(l=>Math.min(l*1.2,2.5)),onZoomOut:()=>e.setZoom(l=>Math.max(l*.8,.3)),onFit:()=>e.fitToView(y),onReset:e.resetView,zoom:e.zoom}),e.contextMenu&&o.jsx(rt,{position:e.contextMenu,onClose:()=>e.closeContextMenu(),nodeId:e.contextMenu.nodeId})]})}function S2({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:50,y:50}),{elements:c=[],relationships:h=[],boundaries:d=[],title:u=null,subtitle:f=null}=a,m=[{bg:"#1168BD",border:"#0D5BA8"},{bg:"#2D882D",border:"#236B23"},{bg:"#7B4B94",border:"#5E3A72"},{bg:"#D4652F",border:"#B85525"},{bg:"#C73E1D",border:"#A33318"},{bg:"#1A9988",border:"#157A6C"}],g={person:{color:"#08427B",label:"Person",shape:"person"},external:{color:"#999999",label:"External System",shape:"rect"}},y=(R,A=-1)=>{if(A<0&&g[R])return g[R];if(A>=0){const _=m[A%m.length],T=R.charAt(0).toUpperCase()+R.slice(1);return{color:_.bg,label:T,shape:R==="database"?"cylinder":"rect"}}return{color:"#1168BD",label:R.charAt(0).toUpperCase()+R.slice(1),shape:"rect"}},l=m.map(R=>R.border),[p,x]=M.useState({}),b=M.useMemo(()=>{const R=new Map,A=[];c.forEach((L,X)=>{L.boundary?(R.has(L.boundary)||R.set(L.boundary,[]),R.get(L.boundary).push({...L,origIndex:X})):A.push({...L,origIndex:X})});const _=[],T=u||f?80:0,P=160,W=100,N=40,G=40,V=30,J=50,Z=3,ae=100;let q=100+T;if(A.length>0){const L=A.length*P+(A.length-1)*N,I=ae+300-L/2+P/2;A.forEach((B,z)=>{_.push({...B,id:B.label.toLowerCase().replace(/[^a-z0-9]/g,"_"),defaultX:I+z*(P+N),defaultY:q+W/2,style:y(B.type,-1)})}),q+=W+J}return d.forEach((L,X)=>{const I=R.get(L.id)||[];if(I.length===0)return;const B=Math.min(Z,I.length),z=Math.ceil(I.length/B),ce=q+V+35,xe=ae+V+20;I.forEach((_e,Re)=>{const ne=Re%B,U=Math.floor(Re/B);_.push({..._e,id:_e.label.toLowerCase().replace(/[^a-z0-9]/g,"_"),defaultX:xe+ne*(P+N)+P/2,defaultY:ce+U*(W+G)+W/2,style:y(_e.type,X),boundaryId:L.id,boundaryIndex:X})});const ue=z*W+(z-1)*G;q+=ue+V*2+40+J}),_},[c,d,u,f]),C=M.useMemo(()=>d.map((T,P)=>{const W=b.filter(V=>V.boundaryId===T.id);if(W.length===0)return null;const N=W.map(V=>V.defaultX),G=W.map(V=>V.defaultY);return{id:T.id,name:T.name,x:Math.min(...N)-160/2-25,y:Math.min(...G)-100/2-25-25,width:Math.max(...N)-Math.min(...N)+160+25*2,height:Math.max(...G)-Math.min(...G)+100+25*2+25,color:l[P%l.length]}}).filter(Boolean),[d,b]),w=R=>e.getNodePosition(R.id,R.defaultX,R.defaultY),k=M.useCallback(()=>{const R=e.finishEditing();if(R.nodeId&&R.newValue!==void 0&&n){const A=b.find(_=>_.id===R.nodeId);A&&A.label!==R.newValue&&n(R.nodeId,A.label,R.newValue)}},[e,b,n]),S=M.useCallback(()=>{if(!b||b.length===0)return;const R={};b.forEach(A=>{R[A.id]={x:A.defaultX,y:A.defaultY}}),x({}),e.setPositions(R)},[b,e]),E=M.useRef(!1);M.useEffect(()=>{if(!E.current&&b&&b.length>0){E.current=!0;const R=setTimeout(()=>{S()},100);return()=>clearTimeout(R)}},[b,S]),M.useEffect(()=>{const R=A=>{const T=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?A.metaKey:A.ctrlKey;if(!e.editingNode){if((A.key==="Delete"||A.key==="Backspace")&&e.selectedNodes.size>0&&i){A.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(T&&A.key.toLowerCase()==="c"&&e.selectedNodes.size>0){A.preventDefault(),e.copySelectedNodes(b);return}if(T&&A.key.toLowerCase()==="v"&&e.clipboard&&s){A.preventDefault();const P=e.pasteNodes();P&&s(P);return}}};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[e,b,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const R=e.getNodesInSelectionBox(b.map(A=>({...A,x:A.defaultX,y:A.defaultY})),e.selectionBox);R.length>0&&e.setSelectedNodes(new Set(R))}},[e.isSelecting,e.selectionBox,b,e]);const j=M.useCallback(R=>{(R.target===e.canvasRef.current||R.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]),$=M.useMemo(()=>{if(!b.length)return{x:0,y:0,width:400,height:300};const R=b.map(_=>_.defaultX),A=b.map(_=>_.defaultY);return{x:Math.min(...R)-100,y:Math.min(...A)-80,width:Math.max(...R)-Math.min(...R)+320,height:Math.max(...A)-Math.min(...A)+260}},[b]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("style",{children:"@keyframes flowDash { to { stroke-dashoffset: -20; } }"}),o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:j,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:o.jsx("marker",{id:"c4-arrow",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:"#707070"})})}),o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[h.map((R,A)=>{const _=b.find(z=>z.id===R.from.toLowerCase().replace(/[^a-z0-9]/g,"_")),T=b.find(z=>z.id===R.to.toLowerCase().replace(/[^a-z0-9]/g,"_"));if(!_||!T)return null;const P=w(_),W=w(T),N=W.x-P.x,G=W.y-P.y,V=Math.sqrt(N*N+G*G)||1,J=80,Z=50,ae=P.x+N/V*J,q=P.y+G/V*Z,L=W.x-N/V*J,X=W.y-G/V*Z,I=(ae+L)/2,B=(q+X)/2;return o.jsxs("g",{children:[o.jsx("line",{x1:ae,y1:q,x2:L,y2:X,stroke:"#707070",strokeWidth:1.5,markerEnd:"url(#c4-arrow)"}),R.label&&o.jsxs("g",{children:[o.jsx("rect",{x:I-R.label.length*3-6,y:B-10,width:R.label.length*6+12,height:16,rx:2,fill:"white",stroke:"#707070",strokeWidth:1}),o.jsx("text",{x:I,y:B+2,textAnchor:"middle",fill:"#333",fontSize:9,fontWeight:"500",children:R.label})]})]},A)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:`${v.blue}20`,stroke:v.blue,strokeWidth:1,strokeDasharray:"4,4"})]})]}),o.jsxs("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:[(u||f)&&o.jsxs("div",{style:{position:"absolute",left:100,top:20,textAlign:"left"},children:[u&&o.jsx("div",{style:{fontSize:"1.3rem",fontWeight:700,color:t.textPrimary,marginBottom:4},children:u}),f&&o.jsx("div",{style:{fontSize:"0.85rem",fontWeight:400,color:t.textSecondary},children:f})]}),d.map((R,A)=>{const _=p[R.id]||C.find(P=>P.id===R.id);if(!_)return null;const T=m[A%m.length];return o.jsx("div",{style:{position:"absolute",left:_.x,top:_.y,width:_.width,height:_.height,background:`${T.bg}10`,border:`2px dashed ${T.bg}`,borderRadius:8,pointerEvents:"none"},children:o.jsx("div",{style:{position:"absolute",top:8,left:12,fontSize:"0.8rem",fontWeight:600,color:T.bg,letterSpacing:"0.2px"},children:R.name})},R.id)}),b.map(R=>{const A=w(R),_=e.dragging===R.id,T=e.selectedNodes.has(R.id),P=R.style.shape==="person",W=160,N=100,G=R.style.color;return o.jsxs("div",{onClick:V=>e.handleNodeClick(V,R.id),onDoubleClick:V=>e.handleNodeDoubleClick(V,R.id,R.label),onContextMenu:V=>e.handleNodeContextMenu(V,R.id),onMouseDown:V=>e.handleNodeMouseDown(V,R.id,A.x,A.y),onTouchStart:V=>e.handleNodeTouchStart(V,R.id,A.x,A.y),style:{position:"absolute",left:A.x-W/2,top:A.y-N/2,width:W,height:N,background:G,border:T?`2px solid ${v.blue}`:"none",borderRadius:P?"50% 50% 8px 8px":8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:_?"grabbing":"grab",boxShadow:T?`0 0 0 3px ${v.blue}40`:"0 2px 4px rgba(0,0,0,0.2)",transition:_?"none":"box-shadow 0.15s",touchAction:"none",padding:"8px 12px",boxSizing:"border-box"},children:[o.jsxs("div",{style:{fontSize:"0.6rem",fontWeight:500,color:"rgba(255,255,255,0.85)",textAlign:"center",marginBottom:4},children:["[",R.style.label,"]"]}),e.editingNode===R.id?o.jsx(Xe,{value:e.editingValue,onChange:V=>e.setEditingValue(V),onFinish:k,style:{fontSize:"0.85rem",fontWeight:700,color:"#fff",textAlign:"center"}}):o.jsx("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"#fff",textAlign:"center",lineHeight:1.2},children:R.label}),R.description&&o.jsx("div",{style:{fontSize:"0.65rem",color:"rgba(255,255,255,0.8)",textAlign:"center",marginTop:4,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:R.description})]},R.id)})]})]}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,0.8)",padding:"6px 12px",borderRadius:6,fontSize:"0.75rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{children:[e.selectedNodes.size," selected"]}),o.jsx("span",{style:{opacity:.6},children:"|"}),o.jsx("span",{style:{opacity:.7},children:"Del to delete • ⌘C copy • ⌘V paste"})]}),e.clipboard&&o.jsxs("div",{style:{position:"absolute",top:e.selectedNodes.size>0?48:12,left:12,background:`${v.green}20`,padding:"4px 10px",borderRadius:4,fontSize:"0.7rem",color:v.green,border:`1px solid ${v.green}40`},children:[e.clipboard.length," node",e.clipboard.length>1?"s":""," copied"]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(R=>Math.min(R*1.2,2.5)),onZoomOut:()=>e.setZoom(R=>Math.max(R*.8,.3)),onFit:()=>e.fitToView($),onReset:e.resetView,onLayout:S,zoom:e.zoom}),e.contextMenu&&o.jsx(rt,{position:e.contextMenu,onClose:()=>e.closeContextMenu(),nodeId:e.contextMenu.nodeId})]})}function k2({data:a,theme:t=Se.dark,sketchMode:r=!1}){const n=Te({x:50,y:50}),{requirements:i=[],traces:s=[]}=a,e={critical:v.red,high:v.orange,medium:v.amber,low:v.green},c=M.useMemo(()=>{const u=Math.min(3,Math.max(2,Math.ceil(Math.sqrt(i.length))));return i.map((f,m)=>{var g;return{...f,id:f.name.toLowerCase().replace(/[^a-z0-9]/g,"_"),defaultX:150+m%u*280,defaultY:100+Math.floor(m/u)*160,color:e[(g=f.priority)==null?void 0:g.toLowerCase()]||v.orange}})},[i]),h=u=>n.getNodePosition(u.id,u.defaultX,u.defaultY),d=M.useMemo(()=>{if(!c.length)return{x:0,y:0,width:400,height:300};const u=c.map(m=>m.defaultX),f=c.map(m=>m.defaultY);return{x:Math.min(...u)-100,y:Math.min(...f)-60,width:Math.max(...u)-Math.min(...u)+360,height:Math.max(...f)-Math.min(...f)+220}},[c]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("style",{children:"@keyframes flowDash { to { stroke-dashoffset: -20; } }"}),o.jsxs("div",{ref:n.canvasRef,className:"canvas-bg",onMouseDown:n.handleCanvasMouseDown,onMouseMove:n.handleMouseMove,onMouseUp:n.handleMouseUp,onMouseLeave:n.handleMouseUp,onTouchStart:n.handleTouchStart,onTouchMove:n.handleTouchMove,onTouchEnd:n.handleTouchEnd,onWheel:n.handleWheel,style:{width:"100%",height:"100%",cursor:n.isPanning||n.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*n.zoom}px ${25*n.zoom}px`,backgroundPosition:`${n.pan.x}px ${n.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:o.jsx("marker",{id:"req-arrow",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:v.orange})})}),o.jsx("g",{transform:`translate(${n.pan.x}, ${n.pan.y}) scale(${n.zoom})`,children:s.map((u,f)=>{const m=c.find(C=>C.id===u.from.toLowerCase().replace(/[^a-z0-9]/g,"_")),g=c.find(C=>C.id===u.to.toLowerCase().replace(/[^a-z0-9]/g,"_"));if(!m||!g)return null;const y=h(m),l=h(g),p=l.x-y.x,x=l.y-y.y,b=Math.sqrt(p*p+x*x)||1;return o.jsxs("g",{children:[o.jsx("line",{x1:y.x+p/b*120,y1:y.y+x/b*65,x2:l.x-p/b*120,y2:l.y-x/b*65,stroke:v.orange,strokeWidth:2.5,markerEnd:"url(#req-arrow)",opacity:.95}),u.label&&o.jsx("text",{x:(y.x+l.x)/2,y:(y.y+l.y)/2-8,textAnchor:"middle",fill:t.textSecondary,fontSize:10,children:u.label})]},f)})})]}),o.jsx("div",{style:{position:"absolute",transform:`translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`,transformOrigin:"0 0"},children:c.map(u=>{const f=h(u),m=n.dragging===u.id;return o.jsxs("div",{onMouseDown:g=>n.handleNodeMouseDown(g,u.id,f.x,f.y),onTouchStart:g=>n.handleNodeTouchStart(g,u.id,f.x,f.y),style:{position:"absolute",left:f.x-110,top:f.y-55,width:220,height:110,background:`${u.color}15`,border:`2px solid ${u.color}`,borderRadius:12,padding:12,cursor:m?"grabbing":"grab",boxShadow:m?`0 0 30px ${u.color}50`:`0 4px 20px ${u.color}20`,transition:m?"none":"box-shadow 0.2s",touchAction:"none"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[o.jsx("span",{style:{fontSize:"1.2rem"},children:"📋"}),o.jsx("span",{style:{fontSize:"0.9rem",fontWeight:600,color:t.textPrimary},children:u.name})]}),u.text&&o.jsx("div",{style:{fontSize:"0.75rem",color:t.textSecondary,marginBottom:6,lineHeight:1.3},children:u.text}),o.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[u.priority&&o.jsx("span",{style:{fontSize:"0.65rem",padding:"2px 6px",background:`${u.color}30`,color:u.color,borderRadius:4},children:u.priority}),u.risk&&o.jsxs("span",{style:{fontSize:"0.65rem",padding:"2px 6px",background:"rgba(255,255,255,0.1)",color:t.textSecondary,borderRadius:4},children:["Risk: ",u.risk]})]})]},u.id)})})]}),o.jsx(Pe,{onZoomIn:()=>n.setZoom(u=>Math.min(u*1.2,2.5)),onZoomOut:()=>n.setZoom(u=>Math.max(u*.8,.3)),onFit:()=>n.fitToView(d),onReset:n.resetView,zoom:n.zoom})]})}function C2({data:a,theme:t=Se.dark,sketchMode:r=!1}){const n=Te({x:50,y:50}),{nodes:i=[],links:s=[]}=a,e=20,c=[v.purple,v.blue,v.cyan,v.emerald,v.green,v.amber,v.orange],h=M.useMemo(()=>{if(!i.length)return{x:0,y:0,width:800,height:500};const f=i.map(y=>y.x),m=i.map(y=>y.y),g=i.map(y=>y.height||30);return{x:Math.min(...f)-40,y:Math.min(...m)-40,width:Math.max(...f)-Math.min(...f)+e+80,height:Math.max(...m.map((y,l)=>y+g[l]))-Math.min(...m)+80}},[i]),d=f=>n.getNodePosition(f.id,f.x,f.y),u=f=>{const m=i.find(k=>k.id===f.source),g=i.find(k=>k.id===f.target);if(!m||!g)return"";const y=d(m),l=d(g),p=y.x+e,x=y.y+(m.height||30)/2,b=l.x,C=l.y+(g.height||30)/2,w=(p+b)/2;return`M ${p} ${x} C ${w} ${x}, ${w} ${C}, ${b} ${C}`};return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsxs("div",{ref:n.canvasRef,className:"canvas-bg",onMouseDown:n.handleCanvasMouseDown,onMouseMove:n.handleMouseMove,onMouseUp:n.handleMouseUp,onMouseLeave:n.handleMouseUp,onTouchStart:n.handleTouchStart,onTouchMove:n.handleTouchMove,onTouchEnd:n.handleTouchEnd,onWheel:n.handleWheel,style:{width:"100%",height:"100%",cursor:n.isPanning||n.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*n.zoom}px ${25*n.zoom}px`,backgroundPosition:`${n.pan.x}px ${n.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:s.map((f,m)=>{const g=i.find(x=>x.id===f.source),y=i.find(x=>x.id===f.target),l=c[((g==null?void 0:g.layer)||0)%c.length],p=c[((y==null?void 0:y.layer)||0)%c.length];return o.jsxs("linearGradient",{id:`sankey-gradient-${m}`,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:l,stopOpacity:"0.6"}),o.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.6"})]},`grad-${m}`)})}),o.jsx("g",{transform:`translate(${n.pan.x}, ${n.pan.y}) scale(${n.zoom})`,children:s.map((f,m)=>{const g=u(f),y=f.thickness||8;return o.jsxs("g",{children:[o.jsx("path",{d:g,fill:"none",stroke:`url(#sankey-gradient-${m})`,strokeWidth:y,strokeLinecap:"round",opacity:.7}),o.jsx("title",{children:`${f.value}`})]},f.id)})})]}),o.jsx("div",{style:{position:"absolute",transform:`translate(${n.pan.x}px, ${n.pan.y}px) scale(${n.zoom})`,transformOrigin:"0 0"},children:i.map((f,m)=>{const g=d(f),y=n.dragging===f.id,l=c[(f.layer||0)%c.length],p=f.height||30;return o.jsxs("div",{onMouseDown:x=>n.handleNodeMouseDown(x,f.id,g.x,g.y),onTouchStart:x=>n.handleNodeTouchStart(x,f.id,g.x,g.y),style:{position:"absolute",left:g.x,top:g.y,width:e,height:p,background:r?ve.stroke:l,borderRadius:3,cursor:y?"grabbing":"grab",boxShadow:y?`0 0 20px ${l}80`:`0 2px 10px ${l}40`,transition:y?"none":"box-shadow 0.2s",touchAction:"none"},children:[o.jsx("div",{style:{position:"absolute",left:e+8,top:"50%",transform:"translateY(-50%)",whiteSpace:"nowrap",fontSize:"0.8rem",fontWeight:500,fontFamily:r?"'Caveat', cursive":"inherit",color:r?ve.stroke:t.textPrimary},children:f.label}),o.jsx("div",{style:{position:"absolute",left:e+8,top:"50%",transform:"translateY(50%)",fontSize:"0.65rem",color:t.textSecondary},children:f.value})]},f.id)})})]}),o.jsx(Pe,{onZoomIn:()=>n.setZoom(f=>Math.min(f*1.2,2.5)),onZoomOut:()=>n.setZoom(f=>Math.max(f*.8,.3)),onFit:()=>n.fitToView(h),onReset:n.resetView,zoom:n.zoom})]})}function E2({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:50,y:50}),{lanes:c=[],nodes:h=[],edges:d=[]}=a,u=[v.purple,v.blue,v.cyan,v.emerald,v.green,v.amber],f=M.useMemo(()=>{if(!h.length)return{x:0,y:0,width:800,height:400};const l=h.map(C=>C.x),p=h.map(C=>C.y),x=h.map(C=>C.width||140),b=h.map(C=>C.height||50);return{x:Math.min(...l)-200,y:Math.min(...p)-40,width:Math.max(...l.map((C,w)=>C+x[w]))-Math.min(...l)+280,height:Math.max(...p.map((C,w)=>C+b[w]))-Math.min(...p)+80}},[h]),m=l=>e.getNodePosition(l.id,l.x,l.y),g=l=>{const p=h.find(Z=>Z.id===l.source),x=h.find(Z=>Z.id===l.target);if(!p||!x)return"";const b=m(p),C=m(x),w=p.width||140,k=p.height||50,S=x.width||140,E=x.height||50,j=b.x+w/2,$=b.y+k/2,R=C.x+S/2,A=C.y+E/2;let _,T,P,W;const N=R-j,G=A-$;Math.abs(N)>Math.abs(G)?(_=N>0?b.x+w:b.x,T=$,P=N>0?C.x:C.x+S,W=A):(_=j,T=G>0?b.y+k:b.y,P=R,W=G>0?C.y:C.y+E);const V=(_+P)/2,J=(T+W)/2;return Math.abs(N)>Math.abs(G)?`M ${_} ${T} L ${V} ${T} L ${V} ${W} L ${P} ${W}`:`M ${_} ${T} L ${_} ${J} L ${P} ${J} L ${P} ${W}`},y=l=>{switch(l){case"start":return{borderRadius:"50%",width:30,height:30,background:v.green};case"end":return{borderRadius:"50%",width:30,height:30,background:v.red,border:"3px solid"};case"diamond":return{borderRadius:4,transform:"rotate(45deg)",width:40,height:40};case"document":return{borderRadius:"0 0 8px 8px",clipPath:"polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"};case"parallelogram":return{transform:"skewX(-10deg)"};default:return{borderRadius:8}}};return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,backgroundSize:`${25*e.zoom}px ${25*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsx("defs",{children:o.jsx("marker",{id:"swimlane-arrow",markerWidth:"8",markerHeight:"6",refX:"7",refY:"3",orient:"auto",children:o.jsx("path",{d:"M 0 0 L 8 3 L 0 6 L 2 3 Z",fill:t.textSecondary})})}),o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[c.map((l,p)=>{const b=u[p%u.length];return o.jsxs("g",{children:[o.jsx("rect",{x:0,y:l.y,width:1200,height:l.height,fill:b,fillOpacity:.05,stroke:b,strokeOpacity:.3,strokeWidth:1,rx:4}),p<c.length-1&&o.jsx("line",{x1:0,y1:l.y+l.height,x2:1200,y2:l.y+l.height,stroke:t.border,strokeWidth:1,strokeDasharray:"5,5"})]},l.id)}),d.map(l=>{const p=g(l);return o.jsxs("g",{children:[o.jsx("path",{d:p,fill:"none",stroke:r?ve.stroke:t.textSecondary,strokeWidth:2,markerEnd:"url(#swimlane-arrow)",opacity:.7}),l.label&&o.jsx("text",{x:0,y:0,fill:t.textSecondary,fontSize:"0.7rem",fontFamily:r?"'Caveat', cursive":"inherit",textAnchor:"middle",children:o.jsx("textPath",{href:`#edge-path-${l.id}`,startOffset:"50%",children:l.label})})]},l.id)})]})]}),o.jsxs("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:[c.map((l,p)=>{const x=u[p%u.length];return o.jsx("div",{style:{position:"absolute",left:0,top:l.y,width:160,height:l.height,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 16px",background:`${x}15`,borderRight:`2px solid ${x}50`,borderRadius:"4px 0 0 4px"},children:o.jsx("span",{style:{color:r?ve.stroke:x,fontWeight:600,fontSize:"0.85rem",fontFamily:r?"'Caveat', cursive":"inherit",textAlign:"center",wordBreak:"break-word"},children:l.name})},`lane-header-${l.id}`)}),h.map(l=>{const p=m(l),x=e.dragging===l.id,b=c.find(E=>E.id===l.lane),C=c.indexOf(b),w=u[C%u.length]||v.purple,k=y(l.type),S=["start","end","diamond"].includes(l.type);return o.jsx("div",{onMouseDown:E=>e.handleNodeMouseDown(E,l.id,p.x,p.y),onTouchStart:E=>e.handleNodeTouchStart(E,l.id,p.x,p.y),style:{position:"absolute",left:p.x,top:p.y,width:S?k.width:l.width||140,height:S?k.height:l.height||50,background:k.background||(r?ve.bg:`${w}20`),border:`2px solid ${r?ve.stroke:w}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:x?"grabbing":"grab",boxShadow:x?`0 0 20px ${w}50`:"0 2px 8px rgba(0,0,0,0.2)",transition:x?"none":"box-shadow 0.2s",touchAction:"none",...k},children:!S&&o.jsx("span",{style:{color:r?ve.stroke:t.textPrimary,fontSize:"0.8rem",fontWeight:500,fontFamily:r?"'Caveat', cursive":"inherit",textAlign:"center",padding:"4px 8px",wordBreak:"break-word",transform:l.type==="diamond"?"rotate(-45deg)":"none"},children:l.label})},l.id)})]})]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(l=>Math.min(l*1.2,2.5)),onZoomOut:()=>e.setZoom(l=>Math.max(l*.8,.3)),onFit:()=>e.fitToView(f),onReset:e.resetView,zoom:e.zoom})]})}function Vg({data:a,theme:t=Se.dark,sketchMode:r=!1,onLabelChange:n,onDeleteNodes:i,onPasteNodes:s}){const e=Te({x:50,y:50}),{actors:c=[],useCases:h=[],relationships:d=[]}=a,{actorPositions:u,useCasePositions:f}=M.useMemo(()=>{const w=new Map;c.forEach(A=>w.set(A.label.toLowerCase(),[])),d.forEach(A=>{const _=A.from.toLowerCase(),T=A.to.toLowerCase();w.has(_)&&w.get(_).push(T)});const k=[],S=new Set;let E=120;const j=110,$=450;return c.forEach((A,_)=>{(w.get(A.label.toLowerCase())||[]).forEach(P=>{const W=h.find(N=>N.label.toLowerCase()===P);W&&!S.has(W.id)&&(k.push({...W,x:$,y:E,actorIndex:_}),S.add(W.id),E+=j)})}),h.forEach(A=>{S.has(A.id)||(k.push({...A,x:$,y:E,actorIndex:-1}),E+=j)}),{actorPositions:c.map((A,_)=>{const T=k.filter(W=>W.actorIndex===_);let P;if(T.length>0){const W=Math.min(...T.map(G=>G.y)),N=Math.max(...T.map(G=>G.y));P=(W+N)/2}else P=150+_*180;return{...A,x:120,y:P}}),useCasePositions:k}},[c,h,d]),m=w=>e.getNodePosition(w.id,w.x,w.y),g=w=>e.getNodePosition(w.id,w.x,w.y),y=M.useMemo(()=>d.map((w,k)=>{const S=u.find(j=>j.label.toLowerCase()===w.from.toLowerCase()),E=f.find(j=>j.label.toLowerCase()===w.to.toLowerCase());return S&&E?{id:`conn-${k}`,from:S,to:E}:null}).filter(Boolean),[d,u,f]),l=M.useMemo(()=>{if(f.length===0)return{x:280,y:40,width:400,height:300};const w=f.map(E=>E.x),k=f.map(E=>E.y),S=100;return{x:Math.min(...w)-S,y:Math.min(...k)-S-20,width:Math.max(...w)-Math.min(...w)+S*2+140,height:Math.max(...k)-Math.min(...k)+S*2+80}},[f]),p=M.useMemo(()=>{const w=[...u.map(R=>R.x),...f.map(R=>R.x)],k=[...u.map(R=>R.y),...f.map(R=>R.y)];if(w.length===0)return{x:0,y:0,width:400,height:300};const S=Math.min(...w)-100,E=Math.max(...w)+100,j=Math.min(...k)-80,$=Math.max(...k)+80;return{x:S,y:j,width:E-S,height:$-j}},[u,f]),x=M.useMemo(()=>[...u,...f],[u,f]),b=M.useCallback(()=>{const w=e.finishEditing();if(w.nodeId&&w.newValue!==void 0&&n){const k=x.find(S=>S.id===w.nodeId);k&&k.label!==w.newValue&&n(w.nodeId,k.label,w.newValue)}},[e,x,n]);M.useEffect(()=>{const w=k=>{const E=/Mac|iPhone|iPad|iPod/.test(navigator.platform)?k.metaKey:k.ctrlKey;if(!e.editingNode){if((k.key==="Delete"||k.key==="Backspace")&&e.selectedNodes.size>0&&i){k.preventDefault(),i(Array.from(e.selectedNodes)),e.clearSelection();return}if(E&&k.key.toLowerCase()==="c"&&e.selectedNodes.size>0){k.preventDefault(),e.copySelectedNodes(x);return}if(E&&k.key.toLowerCase()==="v"&&e.clipboard&&s){k.preventDefault();const j=e.pasteNodes();j&&s(j);return}}};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[e,x,i,s]),M.useEffect(()=>{if(!e.isSelecting&&e.selectionBox){const w=e.getNodesInSelectionBox(x,e.selectionBox);w.length>0&&e.setSelectedNodes(new Set(w))}},[e.isSelecting,e.selectionBox,x,e]);const C=M.useCallback(w=>{(w.target===e.canvasRef.current||w.target.classList.contains("canvas-bg"))&&(e.clearSelection(),e.closeContextMenu())},[e]);return o.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:t.canvasBg,borderRadius:12,border:`1px solid ${t.border}`,touchAction:"none"},children:[o.jsx("style",{children:`
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes flow { from { stroke-dashoffset: 20; } to { stroke-dashoffset: 0; } }
      `}),o.jsxs("div",{ref:e.canvasRef,className:"canvas-bg",onClick:C,onMouseDown:e.handleCanvasMouseDown,onMouseMove:e.handleMouseMove,onMouseUp:e.handleMouseUp,onMouseLeave:e.handleMouseUp,onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onWheel:e.handleWheel,style:{width:"100%",height:"100%",cursor:e.isPanning||e.dragging?"grabbing":"grab",touchAction:"none"},children:[o.jsx("div",{className:"canvas-bg",style:{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle at 1px 1px, ${t.gridColor} 1px, transparent 0)`,backgroundSize:`${30*e.zoom}px ${30*e.zoom}px`,backgroundPosition:`${e.pan.x}px ${e.pan.y}px`,pointerEvents:"none"}}),o.jsxs("svg",{width:"100%",height:"100%",style:{position:"absolute",overflow:"visible",pointerEvents:"none"},children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"uc-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:v.purple}),o.jsx("stop",{offset:"100%",stopColor:v.blue})]}),o.jsxs("filter",{id:"uc-glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[o.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"blur"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsxs("g",{transform:`translate(${e.pan.x}, ${e.pan.y}) scale(${e.zoom})`,children:[o.jsx("rect",{x:l.x,y:l.y,width:l.width,height:l.height,fill:"rgba(124, 58, 237, 0.03)",rx:24}),o.jsx("rect",{x:l.x,y:l.y,width:l.width,height:l.height,fill:"none",stroke:"url(#uc-gradient)",strokeWidth:2,rx:24,opacity:"0.4"}),o.jsx("text",{x:l.x+l.width/2,y:l.y+30,textAnchor:"middle",fill:v.purple,fontSize:13,fontWeight:"600",fontFamily:"system-ui, sans-serif",opacity:"0.8",children:"System Boundary"}),y.map((w,k)=>{const S=m(w.from),E=g(w.to),j=S.x+45,$=S.y,R=E.x-85,A=E.y,_=`M ${j} ${$} L ${R} ${A}`;return o.jsxs("g",{children:[o.jsx("path",{d:_,fill:"none",stroke:v.purple,strokeWidth:4,strokeLinecap:"round",opacity:"0.15"}),o.jsx("path",{d:_,fill:"none",stroke:"url(#uc-gradient)",strokeWidth:1.5,strokeLinecap:"round",opacity:"0.6"}),o.jsx("path",{d:_,fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:1.5,strokeLinecap:"round",strokeDasharray:"2,10",style:{animation:"flow 0.6s linear infinite",animationDelay:`${k*.15}s`}})]},w.id)}),e.isSelecting&&e.selectionBox&&o.jsx("rect",{x:Math.min(e.selectionBox.startX,e.selectionBox.endX),y:Math.min(e.selectionBox.startY,e.selectionBox.endY),width:Math.abs(e.selectionBox.endX-e.selectionBox.startX),height:Math.abs(e.selectionBox.endY-e.selectionBox.startY),fill:`${v.blue}20`,stroke:v.blue,strokeWidth:1,strokeDasharray:"4,4"})]})]}),o.jsxs("div",{style:{position:"absolute",transform:`translate(${e.pan.x}px, ${e.pan.y}px) scale(${e.zoom})`,transformOrigin:"0 0"},children:[u.map(w=>{const k=m(w),S=e.dragging===w.id,E=e.selectedNodes.has(w.id);return o.jsxs("div",{onClick:j=>e.handleNodeClick(j,w.id),onDoubleClick:j=>e.handleNodeDoubleClick(j,w.id,w.label),onContextMenu:j=>e.handleNodeContextMenu(j,w.id),onMouseDown:j=>e.handleNodeMouseDown(j,w.id,k.x,k.y),onTouchStart:j=>e.handleNodeTouchStart(j,w.id,k.x,k.y),style:{position:"absolute",left:k.x-45,top:k.y-55,width:90,display:"flex",flexDirection:"column",alignItems:"center",cursor:S?"grabbing":"grab",transition:S?"none":"transform 0.2s",transform:S?"scale(1.05)":"scale(1)",touchAction:"none"},children:[o.jsx("div",{style:{width:70,height:70,borderRadius:"50%",background:`linear-gradient(135deg, ${v.pink}35, ${v.purple}15)`,border:`2px solid ${E?v.blue:v.pink}`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:Je(v.pink,S,E),transition:"box-shadow 0.2s"},children:o.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("circle",{cx:"12",cy:"8",r:"4",stroke:v.pink,strokeWidth:"1.5",fill:`${v.pink}20`}),o.jsx("path",{d:"M4 20c0-4 4-6 8-6s8 2 8 6",stroke:v.pink,strokeWidth:"1.5",strokeLinecap:"round",fill:"none"})]})}),o.jsx("div",{style:{marginTop:10,padding:"4px 12px",background:"rgba(0,0,0,0.4)",borderRadius:12,backdropFilter:"blur(8px)"},children:e.editingNode===w.id?o.jsx(Xe,{value:e.editingValue,onChange:j=>e.setEditingValue(j),onFinish:b,style:{fontSize:r?14:12,fontWeight:600,color:r?ve.stroke:t.textPrimary}}):o.jsx("span",{style:{fontSize:r?14:12,fontWeight:600,color:r?ve.stroke:t.textPrimary},children:w.label})})]},w.id)}),f.map(w=>{const k=g(w),S=e.dragging===w.id,E=e.selectedNodes.has(w.id);return o.jsx("div",{onClick:j=>e.handleNodeClick(j,w.id),onDoubleClick:j=>e.handleNodeDoubleClick(j,w.id,w.label),onContextMenu:j=>e.handleNodeContextMenu(j,w.id),onMouseDown:j=>e.handleNodeMouseDown(j,w.id,k.x,k.y),onTouchStart:j=>e.handleNodeTouchStart(j,w.id,k.x,k.y),style:{position:"absolute",left:k.x-80,top:k.y-35,width:160,height:70,background:`linear-gradient(135deg, ${v.blue}25, ${v.purple}15)`,border:`1.5px solid ${E?v.blue:"rgba(14, 165, 233, 0.5)"}`,borderRadius:35,display:"flex",alignItems:"center",justifyContent:"center",cursor:S?"grabbing":"grab",boxShadow:Je(v.blue,S,E),backdropFilter:"blur(8px)",transition:S?"none":"box-shadow 0.2s, transform 0.2s",transform:S?"scale(1.03)":"scale(1)",touchAction:"none"},children:e.editingNode===w.id?o.jsx(Xe,{value:e.editingValue,onChange:j=>e.setEditingValue(j),onFinish:b,style:{fontSize:r?14:12,fontWeight:500,color:r?ve.stroke:t.textPrimary,textAlign:"center"}}):o.jsx("span",{style:{fontSize:r?14:12,fontWeight:500,color:r?ve.stroke:t.textPrimary,textAlign:"center",padding:"0 12px",lineHeight:1.3},children:w.label})},w.id)})]})]}),e.selectedNodes.size>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:"rgba(0,0,0,0.8)",padding:"6px 12px",borderRadius:6,fontSize:"0.75rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{children:[e.selectedNodes.size," selected"]}),o.jsx("span",{style:{opacity:.6},children:"|"}),o.jsx("span",{style:{opacity:.7},children:"Del to delete • ⌘C copy • ⌘V paste"})]}),e.clipboard&&o.jsxs("div",{style:{position:"absolute",top:e.selectedNodes.size>0?48:12,left:12,background:`${v.green}20`,padding:"4px 10px",borderRadius:4,fontSize:"0.7rem",color:v.green,border:`1px solid ${v.green}40`},children:[e.clipboard.length," node",e.clipboard.length>1?"s":""," copied"]}),o.jsx(Pe,{onZoomIn:()=>e.setZoom(w=>Math.min(w*1.15,3)),onZoomOut:()=>e.setZoom(w=>Math.max(w*.85,.2)),onFit:()=>e.fitToView(p),onReset:e.resetView,zoom:e.zoom}),e.contextMenu&&o.jsx(rt,{position:e.contextMenu,onClose:()=>e.closeContextMenu(),nodeId:e.contextMenu.nodeId})]})}function Kg({type:a,data:t,source:r,theme:n="dark",sketchMode:i=!1,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c,onEdgeLabelChange:h,onCreateConnection:d,onLinkedTemplateClick:u}){var g;const f=Se[n]||Se.dark,m=M.useMemo(()=>{if(t)return t;if(!r)return null;const y=Tg;switch(a){case"mindmap":case"wbs":return y.markdown(r);case"erd":return y.sql(r);case"flowchart":return y.flowchart(r);case"architecture":return y.architecture(r);case"state":return y.stateMachine(r);case"journey":return y.userJourney(r);case"timeline":return y.timeline(r);case"sequence":return y.sequence(r);case"orgchart":return y.orgChart(r);case"network":return y.network(r);case"gantt":return y.gantt(r);case"deployment":return y.deployment(r);case"pie":return y.pie(r);case"quadrant":return y.quadrant(r);case"git":return y.git(r);case"wireframe":return y.wireframe(r);case"class":return y.classDiagram(r);case"activity":return y.activity(r);case"usecase":return y.useCase(r);case"component":return y.component(r);case"c4":return y.c4(r);case"requirement":return y.requirement(r);case"sankey":return y.sankey(r);case"swimlane":return y.swimlane(r);default:return null}},[a,t,r]);if(!m)return o.jsx("div",{style:{padding:20,color:"#888"},children:"No data"});switch(a){case"mindmap":case"wbs":return o.jsx(Pg,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"erd":return o.jsx(Lg,{tables:Array.isArray(m)?m:[],theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"architecture":return m.layoutMode==="layered"?o.jsx(Jh,{data:m,theme:f}):o.jsx(_g,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"flowchart":return o.jsx(jr,{nodes:m.nodes||[],edges:m.edges||[],theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c,onEdgeLabelChange:h,onCreateConnection:d});case"state":return o.jsx(jr,{nodes:m.states||[],edges:((g=m.transitions)==null?void 0:g.map((y,l)=>({id:`t-${l}`,source:y.from,target:y.to,label:y.event})))||[],theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c,onEdgeLabelChange:h,onCreateConnection:d});case"activity":return o.jsx(jr,{nodes:m.nodes||[],edges:m.edges||[],theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c,onEdgeLabelChange:h,onCreateConnection:d});case"journey":return o.jsx(Dg,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c,onLinkedTemplateClick:u});case"timeline":return o.jsx(Og,{events:m,theme:f,sketchMode:i});case"sequence":return o.jsx(zg,{data:m,theme:f,sketchMode:i});case"orgchart":return o.jsx(Wg,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"network":return o.jsx(Ng,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"gantt":return o.jsx(Fg,{tasks:m,theme:f,sketchMode:i});case"deployment":return o.jsx(Hg,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"pie":return o.jsx(Ug,{data:m,theme:f,sketchMode:i});case"quadrant":return o.jsx(Gg,{data:m,theme:f,sketchMode:i});case"git":return o.jsx(qg,{data:m,theme:f,sketchMode:i});case"wireframe":return o.jsx(Yg,{data:m,theme:f,sketchMode:i});case"class":return o.jsx(Bg,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"usecase":return o.jsx(Vg,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"component":return o.jsx(w2,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"c4":return m.layoutMode==="layered"?o.jsx(Jh,{data:m,theme:f}):o.jsx(S2,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});case"requirement":return o.jsx(k2,{data:m,theme:f,sketchMode:i});case"sankey":return o.jsx(C2,{data:m,theme:f,sketchMode:i});case"swimlane":return o.jsx(E2,{data:m,theme:f,sketchMode:i,onLabelChange:s,onDeleteNodes:e,onPasteNodes:c});default:return o.jsxs("div",{style:{padding:20,color:"#888"},children:["Unknown: ",a]})}}function j2({isOpen:a,onClose:t}){if(!a)return null;const r=Cw(),n=typeof navigator<"u"&&/Mac|iPhone|iPad|iPod/.test(navigator.platform);return o.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e4,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(4px)"},onClick:t,children:o.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",borderRadius:16,padding:24,maxWidth:600,width:"90%",maxHeight:"80vh",overflow:"auto",border:"1px solid rgba(124,58,237,0.3)",boxShadow:"0 25px 50px -12px rgba(0,0,0,0.5)"},onClick:i=>i.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[o.jsx("h2",{style:{margin:0,fontSize:"1.25rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:"⌨️ Keyboard Shortcuts"}),o.jsx("button",{onClick:t,style:{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:8,padding:"6px 12px",color:"#888",cursor:"pointer",fontSize:"0.875rem"},children:"ESC"})]}),o.jsx("p",{style:{color:"#888",fontSize:"0.75rem",marginBottom:16},children:n?"Using ⌘ (Command) for keyboard shortcuts":"Using Ctrl for keyboard shortcuts"}),Object.entries(r).map(([i,s])=>o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"0.7rem",color:v.purple,textTransform:"uppercase",letterSpacing:"0.1em"},children:i}),o.jsx("div",{style:{display:"grid",gap:6},children:s.map(e=>o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"rgba(255,255,255,0.03)",borderRadius:8,border:"1px solid rgba(255,255,255,0.05)"},children:[o.jsx("span",{style:{color:"#e0e0e0",fontSize:"0.8rem"},children:e.description}),o.jsx("kbd",{style:{background:"rgba(124,58,237,0.2)",padding:"4px 8px",borderRadius:4,fontSize:"0.7rem",color:"#a78bfa",fontFamily:"monospace",border:"1px solid rgba(124,58,237,0.3)"},children:e.formatted})]},e.name))})]},i)),o.jsx("div",{style:{marginTop:20,padding:12,background:"rgba(16,185,129,0.1)",borderRadius:8,border:"1px solid rgba(16,185,129,0.2)"},children:o.jsxs("p",{style:{margin:0,color:v.green,fontSize:"0.75rem"},children:["💡 Tip: Press ",o.jsx("kbd",{style:{background:"rgba(255,255,255,0.1)",padding:"2px 6px",borderRadius:4,margin:"0 4px"},children:"?"})," anytime to show this help"]})})]})})}function M2({isOpen:a,onClose:t,onSelect:r,onRemove:n}){const[i,s]=M.useState([]);return M.useEffect(()=>{a&&s(Lc())},[a]),a?o.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(4px)"},onClick:t,children:o.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",borderRadius:16,padding:24,maxWidth:500,width:"90%",maxHeight:"70vh",overflow:"auto",border:"1px solid rgba(124,58,237,0.3)",boxShadow:"0 25px 50px -12px rgba(0,0,0,0.5)"},onClick:e=>e.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[o.jsx("h2",{style:{margin:0,fontSize:"1.25rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:"📂 Recent Diagrams"}),o.jsx("button",{onClick:t,style:{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:8,padding:"6px 12px",color:"#888",cursor:"pointer",fontSize:"0.875rem"},children:"ESC"})]}),i.length===0?o.jsxs("div",{style:{padding:40,textAlign:"center",color:"#666"},children:[o.jsx("div",{style:{fontSize:48,marginBottom:16},children:"📭"}),o.jsx("p",{style:{margin:0},children:"No recent diagrams"}),o.jsx("p",{style:{margin:"8px 0 0 0",fontSize:"0.75rem"},children:"Save a diagram to see it here"})]}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:i.map((e,c)=>{var h,d;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",background:"rgba(255,255,255,0.03)",borderRadius:10,border:"1px solid rgba(255,255,255,0.05)",cursor:"pointer",transition:"all 0.2s"},onClick:()=>{r(e),t()},onMouseEnter:u=>u.currentTarget.style.background="rgba(124,58,237,0.1)",onMouseLeave:u=>u.currentTarget.style.background="rgba(255,255,255,0.03)",children:[o.jsx("div",{style:{fontSize:24},children:((d=(h=Qt[e.type])==null?void 0:h.title)==null?void 0:d.split(" ")[0])||"📄"}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:{color:"#e0e0e0",fontWeight:600,fontSize:"0.9rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.name}),o.jsxs("div",{style:{color:"#666",fontSize:"0.7rem",display:"flex",gap:8},children:[o.jsx("span",{children:e.type}),o.jsx("span",{children:"•"}),o.jsx("span",{children:Bv(e.savedAt)})]})]}),o.jsx("button",{onClick:u=>{u.stopPropagation(),n(e.name),s(f=>f.filter(m=>m.name!==e.name))},style:{background:"rgba(239,68,68,0.1)",border:"none",borderRadius:6,padding:"4px 8px",color:v.red,cursor:"pointer",fontSize:"0.7rem"},title:"Remove from recent",children:"✕"})]},`${e.name}-${c}`)})}),o.jsx("div",{style:{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.1)",display:"flex",gap:8},children:o.jsx("button",{onClick:async()=>{try{const e=await Dv();r(e),t()}catch(e){alert(e.message)}},style:{flex:1,padding:"10px 16px",background:"rgba(16,185,129,0.2)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:8,color:v.green,cursor:"pointer",fontWeight:600,fontSize:"0.85rem"},children:"📁 Import .ddflow File"})})]})}):null}function A2({isOpen:a,onClose:t,onImport:r}){const[n,i]=M.useState(""),[s,e]=M.useState(""),[c,h]=M.useState(null);M.useEffect(()=>{a||(i(""),e(""),h(null))},[a]);const d=()=>{try{e("");const f=Uw(n);h(f)}catch(f){e(f.message),h(null)}},u=()=>{c&&(r(c.type,c.source),t())};return a?o.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(4px)"},onClick:t,children:o.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",borderRadius:16,padding:24,maxWidth:700,width:"90%",maxHeight:"85vh",overflow:"auto",border:"1px solid rgba(124,58,237,0.3)",boxShadow:"0 25px 50px -12px rgba(0,0,0,0.5)"},onClick:f=>f.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[o.jsx("h2",{style:{margin:0,fontSize:"1.25rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:"🧜‍♀️ Import from Mermaid"}),o.jsx("button",{onClick:t,style:{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:8,padding:"6px 12px",color:"#888",cursor:"pointer",fontSize:"0.875rem"},children:"ESC"})]}),o.jsx("p",{style:{color:"#888",fontSize:"0.8rem",marginBottom:16},children:"Paste your Mermaid diagram code below. Supported: flowchart, sequence, class, state, erDiagram, gantt, pie, gitGraph, journey, mindmap"}),o.jsx("textarea",{value:n,onChange:f=>{i(f.target.value),e(""),h(null)},placeholder:`flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[OK]
    B -->|No| D[Cancel]`,style:{width:"100%",height:200,background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:12,color:"#a78bfa",fontFamily:"Monaco, monospace",fontSize:"0.75rem",lineHeight:1.5,resize:"vertical",outline:"none",boxSizing:"border-box"}}),s&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(239,68,68,0.1)",borderRadius:8,border:"1px solid rgba(239,68,68,0.3)"},children:o.jsxs("div",{style:{color:v.red,fontSize:"0.8rem"},children:["❌ ",s]})}),c&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:o.jsxs("span",{style:{color:v.green,fontSize:"0.85rem"},children:["✅ Detected: ",o.jsx("strong",{children:c.type})]})}),o.jsx("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:8,padding:12,border:"1px solid rgba(16,185,129,0.3)",maxHeight:150,overflow:"auto"},children:o.jsx("pre",{style:{margin:0,color:"#a78bfa",fontSize:"0.7rem",fontFamily:"Monaco, monospace",whiteSpace:"pre-wrap"},children:c.source})})]}),o.jsxs("div",{style:{marginTop:20,display:"flex",gap:8},children:[o.jsx("button",{onClick:d,disabled:!n.trim(),style:{flex:1,padding:"10px 16px",background:"rgba(124,58,237,0.2)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:8,color:v.purple,cursor:n.trim()?"pointer":"not-allowed",fontWeight:600,fontSize:"0.85rem",opacity:n.trim()?1:.5},children:"🔍 Preview Conversion"}),o.jsx("button",{onClick:u,disabled:!c,style:{flex:1,padding:"10px 16px",background:c?"rgba(16,185,129,0.2)":"rgba(255,255,255,0.05)",border:`1px solid ${c?"rgba(16,185,129,0.3)":"rgba(255,255,255,0.1)"}`,borderRadius:8,color:c?v.green:"#666",cursor:c?"pointer":"not-allowed",fontWeight:600,fontSize:"0.85rem"},children:"✨ Import to Editor"})]})]})}):null}function R2({isOpen:a,onClose:t,diagramType:r,diagramSource:n}){const[i,s]=M.useState(""),[e,c]=M.useState(""),[h,d]=M.useState(!1);M.useEffect(()=>{if(a&&r&&n)try{const m=t2(r,n);s(m),c("")}catch(m){s(""),c(m.message)}},[a,r,n]),M.useEffect(()=>{a||d(!1)},[a]);const u=async()=>{try{await n2(i),d(!0),setTimeout(()=>d(!1),2e3)}catch(m){c("Failed to copy: "+m.message)}},f=()=>{r2(i,`ddflow-${r}`)};return a?o.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.7)",backdropFilter:"blur(4px)"},onClick:t,children:o.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(15,23,42,0.98), rgba(30,41,59,0.98))",borderRadius:16,padding:24,maxWidth:600,width:"90%",maxHeight:"80vh",overflow:"auto",border:"1px solid rgba(124,58,237,0.3)",boxShadow:"0 25px 50px -12px rgba(0,0,0,0.5)"},onClick:m=>m.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[o.jsx("h2",{style:{margin:0,fontSize:"1.25rem",color:"#fff",display:"flex",alignItems:"center",gap:8},children:"🧜‍♀️ Export as Mermaid"}),o.jsx("button",{onClick:t,style:{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:8,padding:"6px 12px",color:"#888",cursor:"pointer",fontSize:"0.875rem"},children:"ESC"})]}),e?o.jsx("div",{style:{padding:20,background:"rgba(239,68,68,0.1)",borderRadius:8,border:"1px solid rgba(239,68,68,0.3)"},children:o.jsxs("div",{style:{color:v.red,fontSize:"0.85rem"},children:["❌ ",e]})}):o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:o.jsxs("span",{style:{color:v.green,fontSize:"0.85rem"},children:["✅ Converted from: ",o.jsx("strong",{children:r})]})}),o.jsx("div",{style:{background:"rgba(0,0,0,0.3)",borderRadius:8,padding:16,border:"1px solid rgba(124,58,237,0.2)",maxHeight:300,overflow:"auto"},children:o.jsx("pre",{style:{margin:0,color:"#a78bfa",fontSize:"0.75rem",fontFamily:"Monaco, monospace",whiteSpace:"pre-wrap"},children:i})}),o.jsxs("div",{style:{marginTop:16,display:"flex",gap:8},children:[o.jsx("button",{onClick:u,style:{flex:1,padding:"10px 16px",background:h?"rgba(16,185,129,0.3)":"rgba(14,165,233,0.2)",border:`1px solid ${h?"rgba(16,185,129,0.3)":"rgba(14,165,233,0.3)"}`,borderRadius:8,color:h?v.green:v.blue,cursor:"pointer",fontWeight:600,fontSize:"0.85rem"},children:h?"✅ Copied!":"📋 Copy to Clipboard"}),o.jsx("button",{onClick:f,style:{flex:1,padding:"10px 16px",background:"rgba(124,58,237,0.2)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:8,color:v.purple,cursor:"pointer",fontWeight:600,fontSize:"0.85rem"},children:"📥 Download .mmd"})]})]})]})}):null}const Qt={journey:{title:"🚶 Journey",source:`[actor] User
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
Dashboard -> Welcome!`},mindmap:{title:"🧠 Mind Map",source:`Project
  Goals
    Revenue
    Growth
  Features
    Auth
    Dashboard
  Stack
    React
    Node`},architecture:{title:"🏗️ Architecture",source:`title: E-Commerce Platform
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
Notification Service -> RabbitMQ: Listens`},erd:{title:"📊 ERD",source:`CREATE TABLE users (id UUID PRIMARY KEY, email VARCHAR(255), name VARCHAR(100));
CREATE TABLE posts (id UUID PRIMARY KEY, title VARCHAR(200), user_id UUID REFERENCES users(id));`},sequence:{title:"🔄 Sequence",source:`participant Client, API, DB

Client -> API: Request
API -> DB: Query
DB --> API: Result
API --> Client: Response`},flowchart:{title:"📈 Flowchart",source:`(start) Start
Start -> (process) Process
Process -> (decision) Valid?
Valid? -> (end) Done
Valid? -> (io) Error`},state:{title:"⚡ State",source:`(initial) Idle
(final) Done

Idle -> Loading: FETCH
Loading -> Done: SUCCESS
Loading -> Idle: FAIL`},timeline:{title:"📅 Timeline",source:`[Jan] *Kickoff | Started
[Mar] Design | UI done
[Jun] *MVP | Core ready
[Sep] Launch | Public`},orgchart:{title:"👥 Org Chart",source:`CEO [Chief Executive]
  CTO [Technology]
    Dev Lead
    QA Lead
  CFO [Finance]`},network:{title:"🌐 Network",source:`[cloud] Internet
[firewall] Firewall (10.0.0.1)
[router] Router (10.0.0.2)
[server] Server (10.0.0.10)

Internet -- Firewall
Firewall -- Router
Router -- Server`},gantt:{title:"📊 Gantt",source:`Research, 0, 2
Design, 2, 3
Develop, 5, 4
Test, 9, 2
Launch, 11, 1`},deployment:{title:"🚀 Deployment",source:`[cloud] AWS
  [cluster] K8s
    [container] API
    [container] Worker
  [database] RDS
[device] Browser`},pie:{title:"🥧 Pie",source:`"JavaScript": 40
"Python": 25
"TypeScript": 20
"Go": 15`},quadrant:{title:"📊 Quadrant",source:`title: Tech Matrix
x-axis: Effort →
y-axis: Impact →
quadrant-1: Quick Wins
quadrant-2: Big Projects
quadrant-3: Fill-ins
quadrant-4: Thankless

React: [30, 90]
Refactor: [80, 70]
Docs: [20, 40]`},git:{title:"🌿 Git",source:`commit "Initial"
commit "Feature A"
branch develop
commit "Dev work"
checkout main
commit "Hotfix"
merge develop`},wireframe:{title:"📱 Wireframe",source:`{Dashboard App}
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

[footer: Product | Pricing | Support :: Company | About | Careers :: © 2024 App Inc.]`},class:{title:"📐 Class",source:`class User
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
User --* Post : owns`},activity:{title:"🔄 Activity",source:`[start]
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
Error -> Login`},usecase:{title:"👤 Use Case",source:`actor Customer
actor Admin
(Browse Products)
(Checkout)
(Manage Inventory)
(View Reports)

Customer -> Browse Products
Customer -> Checkout
Admin -> Manage Inventory
Admin -> View Reports`},component:{title:"📦 Component",source:`[service] Frontend
[api] API Gateway
[service] Auth Service
[database] Database
[cache] Redis Cache

Frontend --> API Gateway
API Gateway --> Auth Service
API Gateway --> Database
Auth Service --> Redis Cache`},c4:{title:"🏛️ C4",source:`title: Banking System
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
API -> Database: Reads/Writes`},requirement:{title:"📋 Requirement",source:`requirement Login {
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
Security -> Performance: traces`},sankey:{title:"🌊 Sankey",source:`# Energy Flow
Coal -> Electricity: 40
Gas -> Electricity: 30
Nuclear -> Electricity: 20
Solar -> Electricity: 10
Electricity -> Residential: 35
Electricity -> Commercial: 25
Electricity -> Industrial: 30
Electricity -> Transport: 10`},swimlane:{title:"🏊 Swimlane",source:`[Customer]
(start) Submit Order -> Review Order

[Sales]
Review Order -> (decision) Approve?
Approve? -> Process Payment
Approve? -> Reject Order

[Warehouse]
Process Payment -> Ship Order
Ship Order -> (end) Complete`}};function $2(){var lr,dr,ur,pr,hr,fr,Ft,gr,mr,yr,xr,br,vr;const[a,t]=M.useState("journey"),[r,n]=M.useState(""),[i,s]=M.useState(!1),[e,c]=M.useState(!1),[h,d]=M.useState(!1),[u,f]=M.useState(!1),[m,g]=M.useState(!1),[y,l]=M.useState(!1),[p,x]=M.useState(!1),[b,C]=M.useState(!1),[w,k]=M.useState(!1),[S,E]=M.useState(null),[j,$]=M.useState(!1),[R,A]=M.useState(!1),[_,T]=M.useState(!1),[P,W]=M.useState(!1),[N,G]=M.useState(!1),[V,J]=M.useState(!1),[Z,ae]=M.useState(()=>bg()),[q,L]=M.useState("Untitled Diagram"),[X,I]=M.useState(()=>Lv()),[B,z]=M.useState({loading:!1,message:""}),[ce,xe]=M.useState(()=>c2()),[ue,_e]=M.useState(()=>d2()),Re=Se[ce]||Se.dark,ne=M.useMemo(()=>({...Re,buttonActiveBg:`${Z.accentPrimary}30`,gridColor:`${Z.accentPrimary}08`,logoGradient:`linear-gradient(135deg, ${Re.name==="dark"?"#fff":"#1e293b"}, ${Z.accentPrimary})`}),[Re,Z]),U=M.useRef(null),Y=M.useRef(null),ie=M.useRef(!1),K=Qt[a],te=i&&r?r:K.source,{state:ee,canUndo:oe,canRedo:de,undo:be,redo:ke,pushState:ye,isApplying:je}=a2({type:a,source:r||K.source,diagramName:q}),Le=M.useRef(null);M.useEffect(()=>(Le.current=s2((F,le,fe)=>{!ie.current&&!je()&&ye({type:le,source:F,diagramName:fe},"source")},1e3),()=>{var F;return(F=Le.current)==null?void 0:F.cancel()}),[ye,je]);const qe=M.useCallback(F=>{var le;n(F),(le=Le.current)==null||le.call(Le,F,a,q)},[a,q]),Fe=M.useCallback(F=>{var le;(le=Le.current)==null||le.cancel(),t(F),n(""),ye({type:F,source:"",diagramName:q},"type")},[ye,q]);M.useCallback(F=>{L(F)},[]);const nt=M.useCallback((F,le,fe)=>{if(!te||!le||!fe)return;const Ge=le.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),At=new RegExp(`\\b${Ge}\\b`,"g"),it=te.replace(At,fe);it!==te&&(n(it),ye({type:a,source:it,diagramName:q},"label-edit"))},[te,a,q,ye]),at=M.useCallback(F=>{if(!te||!F||F.length===0)return;let le=te;F.forEach(fe=>{le=le.split(`
`).filter(it=>{const Ve=it.trim();return!(Ve.startsWith(fe+":")||Ve.startsWith(fe+" ")||Ve.match(new RegExp(`^\\[${fe}\\]`))||Ve.match(new RegExp(`^${fe}\\s*->`))||Ve.match(new RegExp(`->\\s*${fe}\\s*$`)))}).join(`
`)}),le!==te&&(n(le),ye({type:a,source:le,diagramName:q},"delete-nodes"))},[te,a,q,ye]),Ue=M.useCallback(F=>{if(!F||F.length===0)return;const le=F.map(Ge=>{const At=Ge.type?`[${Ge.type}] `:"";return`${Ge.id}: ${At}${Ge.label}`}),fe=te+`
`+le.join(`
`);n(fe),ye({type:a,source:fe,diagramName:q},"paste-nodes")},[te,a,q,ye]),Qe=M.useCallback((F,le,fe)=>{if(!te)return;const it=te.split(`
`).map(Ve=>{if(Ve.includes("->")){if(le&&Ve.includes(le))return Ve.replace(le,fe);if(!le&&fe){const wr=Ve.trim();if(!wr.includes(":")&&!wr.includes("|"))return Ve+" : "+fe}}return Ve}).join(`
`);it!==te&&(n(it),ye({type:a,source:it,diagramName:q},"edge-label"))},[te,a,q,ye]),Be=M.useCallback((F,le)=>{if(!F||!le)return;const fe=`${F} -> ${le}`,Ge=te+`
`+fe;n(Ge),ye({type:a,source:Ge,diagramName:q},"create-connection")},[te,a,q,ye]),We=M.useCallback((F,le)=>{const fe=yv(F);fe?(t(fe.type),n(fe.source),L(fe.name),s(!0),ye({type:fe.type,source:fe.source,diagramName:fe.name},"linked-template")):console.warn(`Template not found: ${F}`)},[ye]);M.useEffect(()=>{je()&&(ie.current=!0,ee.type!==a&&t(ee.type),ee.source!==r&&n(ee.source),ee.diagramName!==q&&L(ee.diagramName),setTimeout(()=>{ie.current=!1},0))},[ee,je]),M.useEffect(()=>{const F=le=>{(/Mac|iPhone|iPad|iPod/.test(navigator.platform)?le.metaKey:le.ctrlKey)&&le.key.toLowerCase()==="z"&&(le.preventDefault(),le.shiftKey?ke():be())};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[be,ke]);const ot=M.useMemo(()=>({HELP:()=>d(!0),HELP_ALT:()=>d(!0),TOGGLE_EDITOR:()=>s(F=>!F),TOGGLE_AI_CHAT:()=>c(F=>!F),EXPORT_PNG:()=>ar(),EXPORT_SVG:()=>or(),COPY_CLIPBOARD:()=>ir()}),[]);jw(ot,!h),M.useEffect(()=>{const F=Tv();F&&Qt[F.type]&&(t(F.type),n(F.source),F.name&&L(F.name),s(!0))},[]),M.useEffect(()=>{if(X)return Y.current&&clearTimeout(Y.current),Y.current=setTimeout(()=>{const F=r||K.source;Hh(a,F,q)},1e3),()=>{Y.current&&clearTimeout(Y.current)}},[a,r,q,X,K.source]);const Ye=()=>{const F=r||K.source;Hh(a,F,q),z({loading:!1,message:"Saved!"}),setTimeout(()=>z({loading:!1,message:""}),2e3)},en=()=>{const F=r||K.source,le=q.replace(/[^a-z0-9]/gi,"_").toLowerCase()||"diagram";_v(a,F,le),z({loading:!1,message:"File exported!"}),setTimeout(()=>z({loading:!1,message:""}),2e3)},tn=F=>{Qt[F.type]&&(t(F.type),n(F.source),L(F.name||"Recent Diagram"),s(!0))},rn=()=>{const F=!X;I(F),Nv(F),z({loading:!1,message:F?"Auto-save enabled":"Auto-save disabled"}),setTimeout(()=>z({loading:!1,message:""}),2e3)},nn=()=>{const F=ce==="dark"?"light":"dark";xe(F),l2(F),z({loading:!1,message:`${F==="dark"?"Dark":"Light"} mode`}),setTimeout(()=>z({loading:!1,message:""}),2e3)},an=()=>{const F=!ue;_e(F),u2(F),z({loading:!1,message:F?"Sketch mode":"Clean mode"}),setTimeout(()=>z({loading:!1,message:""}),2e3)},on=F=>{const fe={flowchart:"flowchart",orgchart:"orgchart",state:"state",sequence:"sequence",network:"network",gantt:"gantt",pie:"pie",erd:"erd",class:"class",quadrant:"quadrant",mindmap:"mindmap",architecture:"architecture",usecase:"usecase",timeline:"timeline",journey:"journey",gitgraph:"git",git:"git",deployment:"deployment",component:"component",c4:"c4",activity:"activity",requirement:"requirement",wireframe:"wireframe"}[F.template];fe&&Qt[fe]?(t(fe),n(F.dsl),s(!0)):(n(F.dsl),s(!0)),J(!1),z({loading:!1,message:`Loaded ${F.label} template`}),setTimeout(()=>z({loading:!1,message:""}),2e3)},ar=async()=>{if(U.current){z({loading:!0,message:"Exporting PNG..."});try{await bw(U.current,`ddflow-${a}`),z({loading:!1,message:"PNG exported!"}),setTimeout(()=>z({loading:!1,message:""}),2e3)}catch(F){z({loading:!1,message:`Error: ${F.message}`}),setTimeout(()=>z({loading:!1,message:""}),3e3)}}},or=()=>{if(U.current){z({loading:!0,message:"Exporting SVG..."});try{vw(U.current,`ddflow-${a}`),z({loading:!1,message:"SVG exported!"}),setTimeout(()=>z({loading:!1,message:""}),2e3)}catch(F){z({loading:!1,message:`Error: ${F.message}`}),setTimeout(()=>z({loading:!1,message:""}),3e3)}}},ir=async()=>{if(U.current){z({loading:!0,message:"Copying to clipboard..."});try{await ww(U.current),z({loading:!1,message:"Copied to clipboard!"}),setTimeout(()=>z({loading:!1,message:""}),2e3)}catch(F){z({loading:!1,message:`Error: ${F.message}`}),setTimeout(()=>z({loading:!1,message:""}),3e3)}}},sn=()=>{if(U.current){z({loading:!0,message:"Opening print dialog..."});try{Sw(U.current),z({loading:!1,message:""})}catch(F){z({loading:!1,message:`Error: ${F.message}`}),setTimeout(()=>z({loading:!1,message:""}),3e3)}}},sr=(F,le)=>{t(F),n(le),s(!0)},cr=M.useCallback(F=>{const fe=(r||K.source).trim()+`
`+F;qe(fe),s(!0)},[r,K.source,qe]),cn=M.useCallback(async()=>{if(!Dt()){z({loading:!1,message:"AI not configured. Check .env"}),setTimeout(()=>z({loading:!1,message:""}),3e3);return}$(!0),E({type:"explain",content:null,loading:!0});try{const F=await cv(te,a);E({type:"explain",content:F,loading:!1})}catch(F){E({type:"explain",content:`Error: ${F.message}`,loading:!1})}finally{$(!1)}},[te,a]),ln=M.useCallback(async()=>{if(!Dt()){z({loading:!1,message:"AI not configured. Check .env"}),setTimeout(()=>z({loading:!1,message:""}),3e3);return}$(!0),E({type:"improve",content:null,loading:!0});try{const F=await lv(te,a);E({type:"improve",content:F,loading:!1})}catch(F){E({type:"improve",content:{explanation:`Error: ${F.message}`},loading:!1})}finally{$(!1)}},[te,a]),dn=M.useCallback(async()=>{if(!Dt()){z({loading:!1,message:"AI not configured. Check .env"}),setTimeout(()=>z({loading:!1,message:""}),3e3);return}$(!0),E({type:"validate",content:null,loading:!0});try{const F=await dv(te,a);E({type:"validate",content:F,loading:!1})}catch(F){E({type:"validate",content:{isValid:!1,errors:[F.message],warnings:[],suggestions:[]},loading:!1})}finally{$(!1)}},[te,a]),un=M.useCallback(()=>{var F;(S==null?void 0:S.type)==="improve"&&((F=S.content)!=null&&F.dsl)&&(t(S.content.type),n(S.content.dsl),s(!0),E(null))},[S]),pn=(F,le)=>{t(F),n(le),s(!0),z({loading:!1,message:"Mermaid imported!"}),setTimeout(()=>z({loading:!1,message:""}),2e3)};return o.jsxs("div",{style:{minHeight:"100vh",background:ne.background,fontFamily:"system-ui",color:ne.textPrimary,transition:"background 0.3s ease, color 0.3s ease"},children:[o.jsxs("div",{style:{padding:"10px 20px",borderBottom:`1px solid ${ne.border}`,background:ne.headerBg,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[o.jsx("div",{children:o.jsxs("h1",{style:{fontSize:"1.2rem",fontWeight:800,background:ne.logoGradient,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",margin:0,display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:{fontSize:"1.4rem"},children:"◈"})," DDFlow"]})}),o.jsx("div",{style:{height:24,width:1,background:ne.border}}),o.jsx("span",{style:{color:ne.textMuted,fontSize:"0.85rem"},children:"Diagram Engine"})]}),o.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[o.jsx("button",{onClick:nn,style:{padding:"6px 10px",background:"transparent",border:`1px solid ${ne.border}`,borderRadius:6,color:ne.textSecondary,fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},title:`Switch to ${ce==="dark"?"light":"dark"} mode`,children:ce==="dark"?"☀️":"🌙"}),o.jsx("button",{onClick:an,style:{padding:"6px 10px",background:ue?`${Z.accentPrimary}20`:"transparent",border:`1px solid ${ue?Z.accentPrimary:ne.border}`,borderRadius:6,color:ue?Z.accentPrimary:ne.textSecondary,fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},title:ue?"Switch to clean mode":"Switch to sketch mode",children:ue?"✏️":"✨"}),o.jsx("button",{onClick:()=>J(!0),style:{padding:"6px 10px",background:"transparent",border:`1px solid ${ne.border}`,borderRadius:6,color:ne.textSecondary,fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},title:"Shape Library",children:o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),o.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]})}),o.jsx("button",{onClick:()=>d(!0),style:{padding:"6px 10px",background:"transparent",border:`1px solid ${ne.border}`,borderRadius:6,color:ne.textSecondary,fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},title:"Keyboard Shortcuts (?)",children:"⌨️"}),o.jsx("button",{onClick:()=>A(!0),style:{padding:"6px 10px",background:"transparent",border:`1px solid ${ne.border}`,borderRadius:6,color:ne.textSecondary,fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},title:"Color Settings",children:"🎨"}),o.jsx("a",{href:"/guide.html",target:"_blank",rel:"noopener noreferrer",style:{padding:"6px 10px",background:"transparent",border:`1px solid ${ne.border}`,borderRadius:6,color:ne.textSecondary,fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",textDecoration:"none"},children:"📖"}),o.jsx("div",{style:{height:20,width:1,background:ne.border,margin:"0 4px"}}),o.jsx("button",{onClick:()=>c(!e),style:{padding:"6px 14px",background:e?`linear-gradient(135deg, ${Z.accentPrimary}, ${Z.accentSecondary})`:`${Z.accentPrimary}20`,border:`1px solid ${e?"transparent":Z.accentPrimary}`,borderRadius:6,color:e?"#fff":Z.accentPrimary,fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},children:"🤖 AI Chat"})]})]}),o.jsxs("div",{style:{display:"flex",gap:10,padding:"10px 20px",borderBottom:`1px solid ${ne.border}`,background:ne.toolbarBg,alignItems:"center"},children:[o.jsx(Mv,{activeType:a,onTypeChange:Fe,theme:ne}),o.jsx("div",{style:{width:1,height:28,background:ne.border}}),o.jsx(Er,{label:"File",icon:"📁",color:v.blue,theme:ne,items:[{type:"section",label:"Create"},{icon:"📋",label:"Browse Templates",description:"Start from a template",onClick:()=>x(!0)},{icon:"⭐",label:"Save as Template",description:"Save current as template",onClick:()=>C(!0)},{type:"divider"},{type:"section",label:"Save & Open"},{icon:"💾",label:"Save",description:"Save to browser",shortcut:"⌘S",onClick:Ye},{icon:"📥",label:"Export File",description:"Download .ddflow",onClick:en},{icon:"📂",label:"Open Recent",description:"Open saved diagrams",onClick:()=>f(!0)},{type:"divider"},{icon:X?"✓":"○",label:"Auto-save",description:X?"Enabled":"Disabled",onClick:rn,active:X}]}),o.jsx(Er,{label:"Export",icon:"📤",color:v.pink,theme:ne,items:[{type:"section",label:"Image"},{icon:"📋",label:"Copy to Clipboard",shortcut:"⌘⇧C",onClick:ir,disabled:B.loading},{icon:"🖼️",label:"Export as PNG",shortcut:"⌘⇧P",onClick:ar,disabled:B.loading},{icon:"📐",label:"Export as SVG",shortcut:"⌘⇧S",onClick:or,disabled:B.loading},{icon:"📄",label:"Export as PDF",onClick:sn,disabled:B.loading},{type:"divider"},{type:"section",label:"Code"},{icon:"🧜‍♀️",label:"Export as Mermaid",description:"Convert to Mermaid syntax",onClick:()=>l(!0)},{icon:"🌱",label:"Export as PlantUML",description:"Convert to PlantUML syntax",onClick:()=>G(!0)}]}),o.jsx(Er,{label:"Import",icon:"📥",color:v.cyan,theme:ne,items:[{icon:"🖼️",label:"Import from Image",description:"AI extracts diagram from image",onClick:()=>T(!0)},{icon:"🧜‍♀️",label:"Import Mermaid",description:"Convert from Mermaid syntax",onClick:()=>g(!0)},{icon:"🌱",label:"Import PlantUML",description:"Convert from PlantUML syntax",onClick:()=>W(!0)},{icon:"📂",label:"Open .ddflow File",description:"Load saved diagram",onClick:()=>f(!0)}]}),o.jsx(Er,{label:j?"AI...":"AI Tools",icon:"✨",color:v.purple,theme:ne,items:[{type:"section",label:"Analysis"},{icon:"📖",label:"Explain Diagram",description:"Get AI explanation of diagram",onClick:cn,disabled:j},{icon:"✅",label:"Validate Diagram",description:"Check for errors and issues",onClick:dn,disabled:j},{type:"divider"},{type:"section",label:"Enhancement"},{icon:"💡",label:"Suggest Improvements",description:"Get AI optimization tips",onClick:ln,disabled:j}]}),o.jsx("div",{style:{width:1,height:28,background:ne.border}}),o.jsxs("div",{style:{display:"flex",gap:4},children:[o.jsx("button",{onClick:be,disabled:!oe,style:{padding:"6px 10px",background:oe?"rgba(100,116,139,0.2)":"rgba(255,255,255,0.02)",border:`1px solid ${oe?"rgba(100,116,139,0.3)":"rgba(255,255,255,0.05)"}`,borderRadius:6,color:oe?v.slate:"#444",fontSize:"0.7rem",cursor:oe?"pointer":"not-allowed",opacity:oe?1:.5,display:"flex",alignItems:"center",gap:4},title:"Undo (Cmd+Z)",children:o.jsx("span",{children:"↩"})}),o.jsx("button",{onClick:ke,disabled:!de,style:{padding:"6px 10px",background:de?"rgba(100,116,139,0.2)":"rgba(255,255,255,0.02)",border:`1px solid ${de?"rgba(100,116,139,0.3)":"rgba(255,255,255,0.05)"}`,borderRadius:6,color:de?v.slate:"#444",fontSize:"0.7rem",cursor:de?"pointer":"not-allowed",opacity:de?1:.5,display:"flex",alignItems:"center",gap:4},title:"Redo (Cmd+Shift+Z)",children:o.jsx("span",{children:"↪"})})]}),o.jsx("div",{style:{width:1,height:28,background:ne.border}}),o.jsxs("button",{onClick:()=>k(!w),style:{padding:"6px 12px",background:w?`${v.orange}30`:"rgba(255,255,255,0.05)",border:`1px solid ${w?v.orange:"rgba(255,255,255,0.1)"}`,borderRadius:6,color:w?v.orange:ce==="dark"?"#888":"#64748b",fontSize:"0.8rem",cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontWeight:500},title:"Toggle Node Library",children:[w?"📚":"📦"," Nodes"]}),o.jsx("div",{style:{flex:1}}),B.message&&o.jsxs("span",{style:{padding:"5px 10px",background:B.message.startsWith("Error")?"rgba(239,68,68,0.2)":"rgba(16,185,129,0.2)",borderRadius:6,color:B.message.startsWith("Error")?v.red:v.green,fontSize:"0.7rem",display:"flex",alignItems:"center",gap:4},children:[B.loading&&"⏳",B.message]}),o.jsxs("button",{onClick:()=>s(!i),style:{padding:"6px 12px",background:i?"rgba(16,185,129,0.2)":"rgba(255,255,255,0.05)",border:`1px solid ${i?v.green:"rgba(255,255,255,0.1)"}`,borderRadius:6,color:i?v.green:ce==="dark"?"#888":"#64748b",fontSize:"0.7rem",cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontWeight:500},children:[i?"✓":"◇"," Editor"]})]}),o.jsxs("div",{style:{display:"flex",height:"calc(100vh - 105px)"},children:[i&&o.jsx("div",{style:{width:300,borderRight:`1px solid ${ne.border}`},children:o.jsx("textarea",{value:r||K.source,onChange:F=>qe(F.target.value),style:{width:"100%",height:"100%",background:ne.editorBg,border:"none",padding:12,color:ne.editorText,fontFamily:"Monaco, monospace",fontSize:"0.65rem",lineHeight:1.5,resize:"none",outline:"none",boxSizing:"border-box",transition:"background 0.3s ease, color 0.3s ease"}})}),o.jsx("div",{ref:U,style:{flex:1,padding:10,marginRight:e?"380px":0,marginLeft:w?"260px":0,transition:"margin 0.3s ease"},onDragOver:F=>{F.preventDefault(),F.dataTransfer.dropEffect="copy"},onDrop:F=>{F.preventDefault();const le=F.dataTransfer.getData("text/plain");le&&cr(le)},children:o.jsx(Kg,{type:a,source:te,theme:ce,sketchMode:ue,onLabelChange:nt,onDeleteNodes:at,onPasteNodes:Ue,onEdgeLabelChange:Qe,onCreateConnection:Be,onLinkedTemplateClick:We},`${a}-${te}-${ce}-${ue}`)})]}),o.jsx($v,{isOpen:w,diagramType:a,theme:ne,onAddNode:cr}),o.jsx(mv,{isOpen:e,onClose:()=>c(!1),onApplyDiagram:sr}),o.jsx(j2,{isOpen:h,onClose:()=>d(!1)}),o.jsx(M2,{isOpen:u,onClose:()=>f(!1),onSelect:tn,onRemove:Pv}),o.jsx(A2,{isOpen:m,onClose:()=>g(!1),onImport:pn}),o.jsx(R2,{isOpen:y,onClose:()=>l(!1),diagramType:a,diagramSource:te}),o.jsx(Cv,{isOpen:p,onClose:()=>x(!1),onApplyTemplate:sr,theme:ne}),o.jsx(Ev,{isOpen:b,onClose:()=>C(!1),diagramType:a,diagramSource:te,theme:ne}),S&&o.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:20},onClick:()=>!S.loading&&E(null),children:o.jsxs("div",{style:{background:ne.modalBg,borderRadius:16,border:`1px solid ${ne.border}`,width:"100%",maxWidth:600,maxHeight:"80vh",overflow:"hidden",boxShadow:"0 25px 50px rgba(0,0,0,0.4)"},onClick:F=>F.stopPropagation(),children:[o.jsxs("div",{style:{padding:"16px 20px",borderBottom:`1px solid ${ne.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",background:`${v.purple}15`},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:"1.2rem"},children:S.type==="explain"?"📖":S.type==="validate"?"✅":"💡"}),o.jsx("span",{style:{fontWeight:600,color:ne.textPrimary},children:S.type==="explain"?"Diagram Explanation":S.type==="validate"?"Validation Results":"Improvement Suggestions"})]}),o.jsx("button",{onClick:()=>E(null),disabled:S.loading,style:{background:"transparent",border:"none",color:ne.textSecondary,fontSize:"1.2rem",cursor:S.loading?"not-allowed":"pointer",padding:4},children:"✕"})]}),o.jsx("div",{style:{padding:20,maxHeight:"calc(80vh - 120px)",overflowY:"auto"},children:S.loading?o.jsxs("div",{style:{textAlign:"center",padding:40,color:ne.textSecondary},children:[o.jsx("div",{style:{fontSize:"2rem",marginBottom:12},children:"⏳"}),o.jsx("div",{children:"Analyzing diagram with AI..."})]}):S.type==="explain"?o.jsx("div",{style:{color:ne.textPrimary,lineHeight:1.6,fontSize:"0.9rem",whiteSpace:"pre-wrap"},children:S.content}):S.type==="validate"?o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",background:(lr=S.content)!=null&&lr.isValid?`${v.green}15`:`${v.red}15`,borderRadius:8,marginBottom:16},children:[o.jsx("span",{style:{fontSize:"1.2rem"},children:(dr=S.content)!=null&&dr.isValid?"✓":"✗"}),o.jsx("span",{style:{color:(ur=S.content)!=null&&ur.isValid?v.green:v.red,fontWeight:600},children:(pr=S.content)!=null&&pr.isValid?"Diagram is valid":"Issues found"})]}),((fr=(hr=S.content)==null?void 0:hr.errors)==null?void 0:fr.length)>0&&o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("div",{style:{color:v.red,fontWeight:600,marginBottom:8,fontSize:"0.85rem"},children:"Errors:"}),S.content.errors.map((F,le)=>o.jsx("div",{style:{padding:"8px 12px",background:`${v.red}10`,borderRadius:6,marginBottom:4,color:ne.textPrimary,fontSize:"0.85rem"},children:F},le))]}),((gr=(Ft=S.content)==null?void 0:Ft.warnings)==null?void 0:gr.length)>0&&o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("div",{style:{color:v.orange,fontWeight:600,marginBottom:8,fontSize:"0.85rem"},children:"Warnings:"}),S.content.warnings.map((F,le)=>o.jsx("div",{style:{padding:"8px 12px",background:`${v.orange}10`,borderRadius:6,marginBottom:4,color:ne.textPrimary,fontSize:"0.85rem"},children:F},le))]}),((yr=(mr=S.content)==null?void 0:mr.suggestions)==null?void 0:yr.length)>0&&o.jsxs("div",{children:[o.jsx("div",{style:{color:v.blue,fontWeight:600,marginBottom:8,fontSize:"0.85rem"},children:"Suggestions:"}),S.content.suggestions.map((F,le)=>o.jsx("div",{style:{padding:"8px 12px",background:`${v.blue}10`,borderRadius:6,marginBottom:4,color:ne.textPrimary,fontSize:"0.85rem"},children:F},le))]})]}):S.type==="improve"?o.jsxs("div",{children:[o.jsx("div",{style:{color:ne.textPrimary,lineHeight:1.6,fontSize:"0.9rem",marginBottom:20,whiteSpace:"pre-wrap"},children:((xr=S.content)==null?void 0:xr.explanation)||"No explanation provided."}),((br=S.content)==null?void 0:br.dsl)&&o.jsxs("div",{children:[o.jsx("div",{style:{color:v.purple,fontWeight:600,marginBottom:8,fontSize:"0.85rem"},children:"Improved DSL:"}),o.jsx("pre",{style:{background:ne.inputBg,padding:12,borderRadius:8,fontSize:"0.75rem",overflow:"auto",maxHeight:200,color:ne.editorText},children:S.content.dsl})]})]}):null}),!S.loading&&o.jsxs("div",{style:{padding:"12px 20px",borderTop:`1px solid ${ne.border}`,display:"flex",justifyContent:"flex-end",gap:10},children:[S.type==="improve"&&((vr=S.content)==null?void 0:vr.dsl)&&o.jsx("button",{onClick:un,style:{padding:"8px 16px",background:`linear-gradient(135deg, ${v.purple}, ${v.indigo})`,border:"none",borderRadius:6,color:"#fff",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},children:"Apply Improvements"}),o.jsx("button",{onClick:()=>E(null),style:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",border:`1px solid ${ne.border}`,borderRadius:6,color:ne.textSecondary,fontSize:"0.8rem",cursor:"pointer"},children:"Close"})]})]})}),o.jsx(Ov,{isOpen:R,onClose:()=>A(!1),onApply:ae,theme:ne}),o.jsx(Fv,{isOpen:_,onClose:()=>T(!1),onImport:(F,le,fe)=>{t(F),n(le),fe&&L(fe),s(!0),T(!1),z({loading:!1,message:`Diagram "${fe||"Imported"}" imported from image!`}),setTimeout(()=>z({loading:!1,message:""}),2e3)},theme:ne}),o.jsx(fw,{isOpen:P,onClose:()=>W(!1),onImport:(F,le)=>{t(F),n(le),s(!0),W(!1),z({loading:!1,message:"PlantUML diagram imported!"}),setTimeout(()=>z({loading:!1,message:""}),2e3)},theme:ne}),o.jsx(gw,{isOpen:N,onClose:()=>G(!1),diagramType:a,diagramSource:te,theme:ne}),o.jsx(mw,{isOpen:V,onClose:()=>J(!1),onSelectShape:on,theme:ne})]})}exports.AI_PROMPT_TEMPLATE=Bc;exports.ArchitectureDiagram=_g;exports.COLORS=v;exports.ClassDiagram=Bg;exports.DIAGRAM_TYPES=qt;exports.DSLReference=i2;exports.DSL_REFERENCE=Nc;exports.DSL_SYNTAX=Lt;exports.DeploymentDiagram=Hg;exports.ERDDiagram=Lg;exports.FlowDiagram=jr;exports.GanttDiagram=Fg;exports.GitGraphDiagram=qg;exports.MindMapDiagram=Pg;exports.NetworkDiagram=Ng;exports.OrgChartDiagram=Wg;exports.Parsers=Tg;exports.PieChartDiagram=Ug;exports.QuadrantDiagram=Gg;exports.SequenceDiagram=zg;exports.THEMES=Se;exports.TimelineDiagram=Og;exports.UniversalDiagram=Kg;exports.UseCaseDiagram=Vg;exports.UserJourneyDiagram=Dg;exports.WireframeDiagram=Yg;exports.createAIPrompt=Mg;exports.default=$2;exports.getAvailableTypes=jg;exports.getCompactReference=Ag;exports.getDSLForType=Eg;
//# sourceMappingURL=index.cjs.js.map
