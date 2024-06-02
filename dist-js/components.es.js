var Dr = Object.defineProperty;
var Hr = (e, t, r) => t in e ? Dr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var S = (e, t, r) => (Hr(e, typeof t != "symbol" ? t + "" : t, r), r), Le = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var E = (e, t, r) => (Le(e, t, "read from private field"), r ? r.call(e) : t.get(e)), jt = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, qt = (e, t, r, o) => (Le(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r);
const Fr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Fr);
const jr = 2, te = "[", qr = "]", ee = {}, X = Symbol(), Te = ["touchstart", "touchmove", "touchend"];
function Wr(e) {
  console.warn("hydration_mismatch");
}
let yt = !1;
function Ct(e) {
  yt = e;
}
let he = (
  /** @type {any} */
  null
), Pt;
function Yr(e) {
  he = e, Pt = e && e[0];
}
function sr(e) {
  if (e.nodeType !== 8)
    return e;
  var t = (
    /** @type {Node | null} */
    e
  );
  if (
    /** @type {Comment} */
    t.data !== te
  )
    return e;
  for (var r = [], o = 0; (t = /** @type {Node} */
  t.nextSibling) !== null; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === te)
        o += 1;
      else if (n[0] === qr) {
        if (o === 0)
          return he = /** @type {import('#client').TemplateNode[]} */
          r, Pt = /** @type {import('#client').TemplateNode} */
          r[0], t;
        o -= 1;
      }
    }
    r.push(t);
  }
  throw Wr(), ee;
}
var nt = Array.isArray, Kr = Array.from, Mt = Object.keys, Zr = Object.isFrozen, W = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, Jr = Object.getOwnPropertyDescriptors, Gr = Object.prototype, Xr = Array.prototype, Qr = Object.getPrototypeOf;
const wt = 2, ir = 4, fe = 8, to = 16, I = 32, pe = 64, J = 128, Nt = 256, L = 512, M = 1024, Y = 2048, lr = 4096, lt = 8192, eo = 16384, y = Symbol("$state"), ro = Symbol("$state.frozen");
function oo(e) {
  return e === this.v;
}
function no(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function so(e) {
  return !no(e, this.v);
}
function io() {
  throw new Error("effect_in_unowned_derived");
}
function lo() {
  throw new Error("effect_update_depth_exceeded");
}
function ao() {
  throw new Error("hydration_failed");
}
function uo() {
  throw new Error("state_unsafe_mutation");
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    reactions: null,
    equals: oo,
    v: e,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  var r;
  const t = /* @__PURE__ */ st(e);
  return t.equals = so, w !== null && w.l !== null && ((r = w.l).s ?? (r.s = [])).push(t), t;
}
function z(e, t) {
  var r = e.v !== X;
  return !O && r && C !== null && ne() && C.f & wt && uo(), e.equals(t) || (e.v = t, e.version++, ne() && r && m !== null && m.f & L && !(m.f & I) && ($ !== null && $.includes(e) ? (k(m, M), It(m)) : B === null ? go([e]) : B.push(e)), ge(e, M, !0)), t;
}
function ft(e, t = !0, r = null, o) {
  if (typeof e == "object" && e != null) {
    let n = e;
    if ((Zr(n) || ro in n) && (n = co(n)), y in n) {
      const i = (
        /** @type {import('#client').ProxyMetadata<T>} */
        n[y]
      );
      if (i.t === n || i.p === n)
        return i.p;
    }
    const s = Qr(n);
    if (s === Gr || s === Xr) {
      const i = new Proxy(n, ho);
      return W(n, y, {
        value: (
          /** @type {import('#client').ProxyMetadata} */
          {
            s: /* @__PURE__ */ new Map(),
            v: /* @__PURE__ */ st(0),
            a: nt(n),
            i: t,
            p: i,
            t: n
          }
        ),
        writable: !0,
        enumerable: !1
      }), i;
    }
  }
  return e;
}
function re(e, t) {
  if (typeof e == "object" && e != null && y in e) {
    const r = t.get(e);
    if (r !== void 0)
      return r;
    if (nt(e)) {
      const o = [];
      t.set(e, o);
      for (const n of e)
        o.push(re(n, t));
      return o;
    } else {
      const o = {}, n = Reflect.ownKeys(e), s = Jr(e);
      t.set(e, o);
      for (const i of n)
        if (i !== y)
          if (s[i].get)
            W(o, i, s[i]);
          else {
            const a = e[i];
            o[i] = re(a, t);
          }
      return o;
    }
  }
  return e;
}
function co(e) {
  return (
    /** @type {T} */
    re(
      /** @type {import('#client').ProxyStateObject} */
      e,
      /* @__PURE__ */ new Map()
    )
  );
}
function Ne(e, t = 1) {
  z(e, e.v + t);
}
const ho = {
  defineProperty(e, t, r) {
    if (r.value) {
      const o = e[y], n = o.s.get(t);
      n !== void 0 && z(n, ft(r.value, o.i, o));
    }
    return Reflect.defineProperty(e, t, r);
  },
  deleteProperty(e, t) {
    const r = e[y], o = r.s.get(t), n = r.a, s = delete e[t];
    if (n && s) {
      const i = r.s.get("length"), a = e.length - 1;
      i !== void 0 && i.v !== a && z(i, a);
    }
    return o !== void 0 && z(o, X), s && Ne(r.v), s;
  },
  get(e, t, r) {
    var s;
    if (t === y)
      return Reflect.get(e, y);
    const o = e[y];
    let n = o.s.get(t);
    if (n === void 0 && (!(t in e) || (s = Pe(e, t)) != null && s.writable) && (n = (o.i ? st : Me)(ft(e[t], o.i, o)), o.s.set(t, n)), n !== void 0) {
      const i = j(n);
      return i === X ? void 0 : i;
    }
    return Reflect.get(e, t, r);
  },
  getOwnPropertyDescriptor(e, t) {
    const r = Reflect.getOwnPropertyDescriptor(e, t);
    if (r && "value" in r) {
      const n = e[y].s.get(t);
      n && (r.value = j(n));
    }
    return r;
  },
  has(e, t) {
    var s;
    if (t === y)
      return !0;
    const r = e[y], o = Reflect.has(e, t);
    let n = r.s.get(t);
    return (n !== void 0 || m !== null && (!o || (s = Pe(e, t)) != null && s.writable)) && (n === void 0 && (n = (r.i ? st : Me)(
      o ? ft(e[t], r.i, r) : X
    ), r.s.set(t, n)), j(n) === X) ? !1 : o;
  },
  set(e, t, r, o) {
    const n = e[y];
    let s = n.s.get(t);
    s === void 0 && (yo(() => o[t]), s = n.s.get(t)), s !== void 0 && z(s, ft(r, n.i, n));
    const i = n.a, a = !(t in e);
    if (i && t === "length")
      for (let l = r; l < e.length; l += 1) {
        const u = n.s.get(l + "");
        u !== void 0 && z(u, X);
      }
    if (e[t] = r, a) {
      if (i) {
        const l = n.s.get("length"), u = e.length;
        l !== void 0 && l.v !== u && z(l, u);
      }
      Ne(n.v);
    }
    return !0;
  },
  ownKeys(e) {
    const t = e[y];
    return j(t.v), Reflect.ownKeys(e);
  }
};
function fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let Rt = !1, oe = [];
function ar() {
  Rt = !1;
  const e = oe.slice();
  oe = [], fo(e);
}
function po(e) {
  Rt || (Rt = !0, queueMicrotask(ar)), oe.push(e);
}
function bo() {
  Rt && ar();
}
function ur(e) {
  be(e);
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      vo(t[r]);
  }
}
function cr(e, t) {
  ur(e);
  var r = hr(e), o = (tt || e.f & J) && e.deps !== null ? Y : L;
  k(e, o);
  var n = e.equals(r);
  return n || (e.v = r, ge(e, M, t)), n;
}
function vo(e) {
  ur(e), Vt(e, 0), k(e, lt), e.first = e.last = e.deps = e.reactions = // @ts-expect-error `signal.fn` cannot be `null` while the signal is alive
  e.fn = null;
}
const dr = 0, mo = 1;
let Ot = dr, mt = !1, rt = !1;
function Re(e) {
  rt = e;
}
function ze(e) {
  O = e;
}
let F = [], ot = 0, C = null, m = null, $ = null, _ = 0, B = null;
function go(e) {
  B = e;
}
let O = !1, tt = !1, w = null;
function ne() {
  return w !== null && w.l === null;
}
function Bt(e) {
  var b;
  var t = e.f, r = (t & M) !== 0, o = (t & J) !== 0;
  if (r && !o)
    return !0;
  var n = (t & Nt) !== 0;
  if (t & Y || r && o) {
    var s = e.deps;
    if (s !== null)
      for (var i = s.length, a, l, u = 0; u < i; u++) {
        var d = s[u];
        !r && Bt(
          /** @type {import('#client').Derived} */
          d
        ) && (a = cr(
          /** @type {import('#client').Derived} **/
          d,
          !0
        ));
        var c = d.version;
        if (o) {
          if (c > /** @type {import('#client').Derived} */
          e.version)
            return e.version = c, !a;
          !tt && !((b = d == null ? void 0 : d.reactions) != null && b.includes(e)) && (l = d.reactions, l === null ? d.reactions = [e] : l.push(e));
        } else {
          if (e.f & M)
            return !0;
          n && (c > /** @type {import('#client').Derived} */
          e.version && (e.version = c, r = !0), l = d.reactions, l === null ? d.reactions = [e] : l.includes(e) || l.push(e));
        }
      }
    o || k(e, L), n && (e.f ^= Nt);
  }
  return r;
}
function _o(e, t, r) {
  throw e;
}
function hr(e) {
  const t = $, r = _, o = B, n = C, s = tt, i = O;
  $ = /** @type {null | import('#client').Value[]} */
  null, _ = 0, B = null, C = e, tt = !rt && (e.f & J) !== 0, O = !1;
  try {
    let a = (0, e.fn)(), l = (
      /** @type {import('#client').Value<unknown>[]} **/
      e.deps
    );
    if ($ !== null) {
      let u;
      if (l !== null) {
        const d = l.length, c = _ === 0 ? $ : l.slice(0, _).concat($), v = c.length > 16 && d - _ > 1 ? new Set(c) : null;
        for (u = _; u < d; u++) {
          const A = l[u];
          (v !== null ? !v.has(A) : !c.includes(A)) && fr(e, A);
        }
      }
      if (l !== null && _ > 0)
        for (l.length = _ + $.length, u = 0; u < $.length; u++)
          l[_ + u] = $[u];
      else
        e.deps = /** @type {import('#client').Value<V>[]} **/
        l = $;
      if (!tt)
        for (u = _; u < l.length; u++) {
          const d = l[u], c = d.reactions;
          c === null ? d.reactions = [e] : c[c.length - 1] !== e && c.push(e);
        }
    } else
      l !== null && _ < l.length && (Vt(e, _), l.length = _);
    return a;
  } finally {
    $ = t, _ = r, B = o, C = n, tt = s, O = i;
  }
}
function fr(e, t) {
  const r = t.reactions;
  let o = 0;
  if (r !== null) {
    o = r.length - 1;
    const n = r.indexOf(e);
    n !== -1 && (o === 0 ? t.reactions = null : (r[n] = r[o], r.pop()));
  }
  o === 0 && t.f & wt && (k(t, Y), t.f & (J | Nt) || (t.f ^= Nt), Vt(
    /** @type {import('#client').Derived} **/
    t,
    0
  ));
}
function Vt(e, t) {
  const r = e.deps;
  if (r !== null) {
    const o = t === 0 ? null : r.slice(0, t);
    let n;
    for (n = t; n < r.length; n++) {
      const s = r[n];
      (o === null || !o.includes(s)) && fr(e, s);
    }
  }
}
function be(e, t = !0) {
  let r = e.first;
  e.first = null, e.last = null;
  for (var o; r !== null; )
    o = r.next, $e(r, t), r = o;
}
function ve(e) {
  var t = e.f;
  if (!(t & lt)) {
    k(e, L);
    var r = e.ctx, o = m, n = w;
    m = e, w = r;
    try {
      t & to || be(e), mr(e);
      var s = hr(e);
      e.teardown = typeof s == "function" ? s : null;
    } catch (i) {
      _o(
        /** @type {Error} */
        i
      );
    } finally {
      m = o, w = n;
    }
  }
}
function pr() {
  ot > 1e3 && (ot = 0, lo()), ot++;
}
function br(e) {
  const t = e.length;
  if (t !== 0) {
    pr();
    var r = rt;
    rt = !0;
    try {
      for (var o = 0; o < t; o++) {
        var n = e[o];
        if (n.first === null && !(n.f & I))
          Ue([n]);
        else {
          var s = [];
          vr(n, s), Ue(s);
        }
      }
    } finally {
      rt = r;
    }
  }
}
function Ue(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      !(o.f & (lt | lr)) && Bt(o) && ve(o);
    }
}
function $o() {
  if (mt = !1, ot > 1001)
    return;
  const e = F;
  F = [], br(e), mt || (ot = 0);
}
function It(e) {
  Ot === dr && (mt || (mt = !0, queueMicrotask($o)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & I) {
      if (!(r & L))
        return;
      k(t, Y);
    }
  }
  F.push(t);
}
function vr(e, t) {
  var r = e.first, o = [];
  t:
    for (; r !== null; ) {
      var n = r.f, s = (n & (lt | lr)) === 0, i = n & I, a = (n & L) !== 0, l = r.first;
      if (s && (!i || !a)) {
        if (i && k(r, L), n & fe) {
          if (!i && Bt(r) && (ve(r), l = r.first), l !== null) {
            r = l;
            continue;
          }
        } else if (n & ir)
          if (i || a) {
            if (l !== null) {
              r = l;
              continue;
            }
          } else
            o.push(r);
      }
      var u = r.next;
      if (u === null) {
        let b = r.parent;
        for (; b !== null; ) {
          if (e === b)
            break t;
          var d = b.next;
          if (d !== null) {
            r = d;
            continue t;
          }
          b = b.parent;
        }
      }
      r = u;
    }
  for (var c = 0; c < o.length; c++)
    l = o[c], t.push(l), vr(l, t);
}
function me(e, t = !0) {
  var r = Ot, o = F;
  try {
    pr();
    const s = [];
    Ot = mo, F = s, mt = !1, t && br(o);
    var n = e == null ? void 0 : e();
    return bo(), (F.length > 0 || s.length > 0) && me(), ot = 0, n;
  } finally {
    Ot = r, F = o;
  }
}
function j(e) {
  const t = e.f;
  if (t & lt)
    return e.v;
  if (C !== null && !(C.f & (I | pe)) && !O) {
    const r = (C.f & J) !== 0, o = C.deps;
    $ === null && o !== null && o[_] === e && !(r && m !== null) ? _++ : (o === null || _ === 0 || o[_ - 1] !== e) && ($ === null ? $ = [e] : $[$.length - 1] !== e && $.push(e)), B !== null && m !== null && m.f & L && !(m.f & I) && B.includes(e) && (k(m, M), It(m));
  }
  return t & wt && Bt(
    /** @type {import('#client').Derived} */
    e
  ) && cr(
    /** @type {import('#client').Derived} **/
    e,
    !1
  ), e.v;
}
function ge(e, t, r) {
  var o = e.reactions;
  if (o !== null)
    for (var n = ne(), s = o.length, i = 0; i < s; i++) {
      var a = o[i], l = a.f;
      if (!(l & M || (!r || !n) && a === m)) {
        k(a, t);
        var u = (l & Y) !== 0, d = (l & J) !== 0;
        (l & L || u && d) && (a.f & wt ? ge(
          /** @type {import('#client').Derived} */
          a,
          Y,
          r
        ) : It(
          /** @type {import('#client').Effect} */
          a
        ));
      }
    }
}
function yo(e) {
  const t = O;
  try {
    return O = !0, e();
  } finally {
    O = t;
  }
}
const wo = ~(M | Y | L);
function k(e, t) {
  e.f = e.f & wo | t;
}
function Ao(e, t = !1, r) {
  w = {
    p: w,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, t || (w.l = {
    s: null,
    u: null,
    r1: [],
    r2: /* @__PURE__ */ st(!1)
  });
}
function Eo(e) {
  const t = w;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      t.e = null;
      for (var r = 0; r < o.length; r++)
        ko(o[r]);
    }
    w = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function xo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Co(e) {
  if (nt(e))
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      r.isConnected && r.remove();
    }
  else
    e.isConnected && e.remove();
}
function Be(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Dt(e, t, r) {
  var o = (e & pe) !== 0, n = {
    ctx: w,
    deps: null,
    dom: null,
    f: e | M,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : m,
    prev: null,
    teardown: null,
    transitions: null
  };
  if (C !== null && !o) {
    var s = C.f;
    s & wt && (s & J && io(), m !== null && Be(n, m)), Be(n, C);
  }
  if (r) {
    var i = rt;
    try {
      Re(!0), ve(n), n.f |= eo;
    } finally {
      Re(i);
    }
  } else
    It(n);
  return n;
}
function So(e) {
  const t = Dt(pe, e, !0);
  return () => {
    $e(t);
  };
}
function ko(e) {
  return Dt(ir, e, !1);
}
function _e(e) {
  return Dt(fe, e, !0);
}
function Oo(e) {
  return _e(e);
}
function Lo(e) {
  return Dt(fe | I, e, !0);
}
function mr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = O;
    ze(!0);
    try {
      t.call(null);
    } finally {
      ze(r);
    }
  }
}
function $e(e, t = !0) {
  var r = e.dom;
  if (r !== null && t && Co(r), be(e, t), Vt(e, 0), k(e, lt), e.transitions)
    for (const i of e.transitions)
      i.stop();
  mr(e);
  var o = e.parent;
  if (o !== null && e.f & I && o.first !== null) {
    var n = e.prev, s = e.next;
    n !== null ? s !== null ? (n.next = s, s.prev = n) : (n.next = null, o.last = n) : s !== null ? (s.prev = null, o.first = s) : (o.first = null, o.last = null);
  }
  e.next = e.prev = e.teardown = e.ctx = e.dom = e.deps = e.parent = // @ts-expect-error
  e.fn = null;
}
var Ve;
function gr() {
  if (Ve === void 0) {
    Ve = window;
    var e = Element.prototype;
    e.__click = void 0, e.__className = "", e.__attributes = null, e.__e = void 0, Text.prototype.__nodeValue = " ";
  }
}
function _r() {
  return document.createTextNode("");
}
// @__NO_SIDE_EFFECTS__
function To(e) {
  const t = e.firstChild;
  return yt ? t === null ? e.appendChild(_r()) : sr(t) : t;
}
function Po(e) {
  e.textContent = "";
}
function Mo(e, t, r, o) {
  function n(s) {
    if (o.capture || se(t, s), !s.cancelBubble)
      return r.call(this, s);
  }
  return e.startsWith("pointer") || e === "wheel" ? po(() => {
    t.addEventListener(e, n, o);
  }) : t.addEventListener(e, n, o), n;
}
function No(e, t, r, o, n) {
  var s = { capture: o, passive: n }, i = Mo(e, t, r, s);
  (t === document.body || t === window || t === document) && _e(() => () => {
    t.removeEventListener(e, i, s);
  });
}
function Ro(e) {
  for (var t = 0; t < e.length; t++)
    $r.add(e[t]);
  for (var r of ie)
    r(e);
}
function se(e, t) {
  var Oe;
  var r = e.ownerDocument, o = t.type, n = ((Oe = t.composedPath) == null ? void 0 : Oe.call(t)) || [], s = (
    /** @type {null | Element} */
    n[0] || t.target
  );
  t.target !== s && W(t, "target", {
    configurable: !0,
    value: s
  });
  var i = 0, a = t.__root;
  if (a) {
    var l = n.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = n.indexOf(e);
    if (u === -1)
      return;
    l <= u && (i = l + 1);
  }
  s = /** @type {Element} */
  n[i] || t.target, W(t, "currentTarget", {
    configurable: !0,
    get() {
      return s || r;
    }
  });
  try {
    for (var d, c = []; s !== null; ) {
      var b = s.parentNode || /** @type {any} */
      s.host || null;
      try {
        var v = s["__" + o];
        if (v !== void 0 && !/** @type {any} */
        s.disabled)
          if (nt(v)) {
            var [A, ...R] = v;
            A.apply(s, [t, ...R]);
          } else
            v.call(s, t);
      } catch (xt) {
        d ? c.push(xt) : d = xt;
      }
      if (t.cancelBubble || b === e || b === null || s === e)
        break;
      s = b;
    }
    if (d) {
      for (let xt of c)
        queueMicrotask(() => {
          throw xt;
        });
      throw d;
    }
  } finally {
    t.__root = e, s = e;
  }
}
const $r = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set();
function zo(e, t) {
  const r = e.__nodeValue, o = le(t);
  yt && e.nodeValue === o ? e.__nodeValue = o : r !== o && (e.nodeValue = o, e.__nodeValue = o);
}
function le(e) {
  return typeof e == "string" ? e : e == null ? "" : e + "";
}
function yr(e, t) {
  const r = t.anchor ?? t.target.appendChild(_r());
  return me(() => wr(e, { ...t, anchor: r }), !1);
}
function Uo(e, t) {
  const r = t.target, o = he;
  try {
    return me(() => {
      Ct(!0);
      for (var n = r.firstChild; n && (n.nodeType !== 8 || /** @type {Comment} */
      n.data !== te); )
        n = n.nextSibling;
      if (!n)
        throw ee;
      const s = sr(n), i = wr(e, { ...t, anchor: s });
      return Ct(!1), i;
    }, !1);
  } catch (n) {
    if (n === ee)
      return t.recover === !1 && ao(), gr(), Po(r), Ct(!1), yr(e, t);
    throw n;
  } finally {
    Ct(!!o), Yr(o);
  }
}
function wr(e, { target: t, anchor: r, props: o = {}, events: n, context: s, intro: i = !1 }) {
  gr();
  const a = /* @__PURE__ */ new Set(), l = se.bind(null, t), u = se.bind(null, document), d = (v) => {
    for (let A = 0; A < v.length; A++) {
      const R = v[A];
      a.has(R) || (a.add(R), t.addEventListener(
        R,
        l,
        Te.includes(R) ? {
          passive: !0
        } : void 0
      ), document.addEventListener(
        R,
        u,
        Te.includes(R) ? {
          passive: !0
        } : void 0
      ));
    }
  };
  d(Kr($r)), ie.add(d);
  let c;
  const b = So(() => (Lo(() => {
    if (s) {
      Ao({});
      var v = (
        /** @type {import('#client').ComponentContext} */
        w
      );
      v.c = s;
    }
    n && (o.$$events = n), c = e(r, o) || {}, s && Eo();
  }), () => {
    for (const v of a)
      t.removeEventListener(v, l);
    ie.delete(d), ae.delete(c);
  }));
  return ae.set(c, b), c;
}
let ae = /* @__PURE__ */ new WeakMap();
function Bo(e) {
  const t = ae.get(e);
  t == null || t();
}
function Ie(e, t = (
  /** @type {import('#client').Effect} */
  m
)) {
  var r = t.dom;
  return r === null ? t.dom = e : (nt(r) || (r = t.dom = [r]), nt(e) ? r.push(...e) : r.push(e)), e;
}
// @__NO_SIDE_EFFECTS__
function Vo(e, t) {
  var r = (t & jr) !== 0, o;
  return () => {
    if (yt)
      return Ie(Pt), Pt;
    o || (o = xo(e), o = /** @type {Node} */
    o.firstChild);
    var n = r ? document.importNode(o, !0) : o.cloneNode(!0);
    return Ie(
      /** @type {import('#client').TemplateNode} */
      n
    ), n;
  };
}
function Ar(e, t) {
  yt || e.before(
    /** @type {Node} */
    t
  );
}
function Io(e) {
  return new Do(e);
}
var P, x;
class Do {
  /**
   * @param {import('svelte').ComponentConstructorOptions & {
   *  component: any;
   * 	immutable?: boolean;
   * 	hydrate?: boolean;
   * 	recover?: false;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    jt(this, P, void 0);
    /** @type {Record<string, any>} */
    jt(this, x, void 0);
    const r = ft({ ...t.props || {}, $$events: {} }, !1);
    qt(this, x, (t.hydrate ? Uo : yr)(t.component, {
      target: t.target,
      props: r,
      context: t.context,
      intro: t.intro,
      recover: t.recover
    })), qt(this, P, r.$$events);
    for (const o of Object.keys(E(this, x)))
      o === "$set" || o === "$destroy" || o === "$on" || W(this, o, {
        get() {
          return E(this, x)[o];
        },
        /** @param {any} value */
        set(n) {
          E(this, x)[o] = n;
        },
        enumerable: !0
      });
    E(this, x).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(r, o);
    }, E(this, x).$destroy = () => {
      Bo(E(this, x));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    E(this, x).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    E(this, P)[t] = E(this, P)[t] || [];
    const o = (...n) => r.call(this, ...n);
    return E(this, P)[t].push(o), () => {
      E(this, P)[t] = E(this, P)[t].filter(
        /** @param {any} fn */
        (n) => n !== o
      );
    };
  }
  $destroy() {
    E(this, x).$destroy();
  }
}
P = new WeakMap(), x = new WeakMap();
let Er;
typeof HTMLElement == "function" && (Er = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, o) {
    super();
    /** The Svelte component constructor */
    S(this, "$$ctor");
    /** Slots */
    S(this, "$$s");
    /** @type {any} The Svelte component instance */
    S(this, "$$c");
    /** Whether or not the custom element is connected */
    S(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    S(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    S(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    S(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    S(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    S(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    S(this, "$$me");
    this.$$ctor = t, this.$$s = r, o && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const n = this.$$c.$on(t, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(t, r, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, o) {
    if (super.removeEventListener(t, r, o), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return (s) => {
          const i = document.createElement("slot");
          n !== "default" && (i.name = n), Ar(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, o = Ho(this);
      for (const n of this.$$s)
        n in o && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), r.default = !0) : r[n] = t(n));
      for (const n of this.attributes) {
        const s = this.$$g_p(n.name);
        s in this.$$d || (this.$$d[s] = Lt(s, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Io({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = _e(() => {
        var n;
        this.$$r = !0;
        for (const s of Mt(this.$$c)) {
          if (!((n = this.$$p_d[s]) != null && n.reflect))
            continue;
          this.$$d[s] = this.$$c[s];
          const i = Lt(
            s,
            this.$$d[s],
            this.$$p_d,
            "toAttribute"
          );
          i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
        }
        this.$$r = !1;
      });
      for (const n in this.$$l)
        for (const s of this.$$l[n]) {
          const i = this.$$c.$on(n, s);
          this.$$l_u.set(s, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, o) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Lt(t, o, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), $e(this.$$me), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Mt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Lt(e, t, r, o) {
  var s;
  const n = (s = r[e]) == null ? void 0 : s.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !r[e])
    return t;
  if (o === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Ho(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Fo(e, t, r, o, n, s) {
  let i = class extends Er {
    constructor() {
      super(e, r, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Mt(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return Mt(t).forEach((a) => {
    W(i.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var u;
        l = Lt(a, l, t), this.$$d[a] = l, (u = this.$$c) == null || u.$set({ [a]: l });
      }
    });
  }), o.forEach((a) => {
    W(i.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tt = globalThis, ye = Tt.ShadowRoot && (Tt.ShadyCSS === void 0 || Tt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, we = Symbol(), De = /* @__PURE__ */ new WeakMap();
let xr = class {
  constructor(t, r, o) {
    if (this._$cssResult$ = !0, o !== we)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (ye && t === void 0) {
      const o = r !== void 0 && r.length === 1;
      o && (t = De.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && De.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const jo = (e) => new xr(typeof e == "string" ? e : e + "", void 0, we), Ht = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((o, n, s) => o + ((i) => {
    if (i._$cssResult$ === !0)
      return i.cssText;
    if (typeof i == "number")
      return i;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + i + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + e[s + 1], e[0]);
  return new xr(r, e, we);
}, qo = (e, t) => {
  if (ye)
    e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else
    for (const r of t) {
      const o = document.createElement("style"), n = Tt.litNonce;
      n !== void 0 && o.setAttribute("nonce", n), o.textContent = r.cssText, e.appendChild(o);
    }
}, He = ye ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const o of t.cssRules)
    r += o.cssText;
  return jo(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Wo, defineProperty: Yo, getOwnPropertyDescriptor: Ko, getOwnPropertyNames: Zo, getOwnPropertySymbols: Jo, getPrototypeOf: Go } = Object, V = globalThis, Fe = V.trustedTypes, Xo = Fe ? Fe.emptyScript : "", Wt = V.reactiveElementPolyfillSupport, pt = (e, t) => e, zt = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Xo : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, Ae = (e, t) => !Wo(e, t), je = { attribute: !0, type: String, converter: zt, reflect: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), V.litPropertyMetadata ?? (V.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Q extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = je) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(t, r), !r.noAccessor) {
      const o = Symbol(), n = this.getPropertyDescriptor(t, o, r);
      n !== void 0 && Yo(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, r, o) {
    const { get: n, set: s } = Ko(this.prototype, t) ?? { get() {
      return this[r];
    }, set(i) {
      this[r] = i;
    } };
    return { get() {
      return n == null ? void 0 : n.call(this);
    }, set(i) {
      const a = n == null ? void 0 : n.call(this);
      s.call(this, i), this.requestUpdate(t, a, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? je;
  }
  static _$Ei() {
    if (this.hasOwnProperty(pt("elementProperties")))
      return;
    const t = Go(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(pt("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(pt("properties"))) {
      const r = this.properties, o = [...Zo(r), ...Jo(r)];
      for (const n of o)
        this.createProperty(n, r[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0)
        for (const [o, n] of r)
          this.elementProperties.set(o, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, o] of this.elementProperties) {
      const n = this._$Eu(r, o);
      n !== void 0 && this._$Eh.set(n, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const n of o)
        r.unshift(He(n));
    } else
      t !== void 0 && r.push(He(t));
    return r;
  }
  static _$Eu(t, r) {
    const o = r.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const o of r.keys())
      this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qo(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostConnected) == null ? void 0 : o.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostDisconnected) == null ? void 0 : o.call(r);
    });
  }
  attributeChangedCallback(t, r, o) {
    this._$AK(t, o);
  }
  _$EC(t, r) {
    var s;
    const o = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, o);
    if (n !== void 0 && o.reflect === !0) {
      const i = (((s = o.converter) == null ? void 0 : s.toAttribute) !== void 0 ? o.converter : zt).toAttribute(r, o.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var s;
    const o = this.constructor, n = o._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = o.getPropertyOptions(n), a = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((s = i.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? i.converter : zt;
      this._$Em = n, this[n] = a.fromAttribute(r, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, r, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? Ae)(this[t], r))
        return;
      this.P(t, r, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, r, o) {
    this._$AL.has(t) || this._$AL.set(t, r), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, i] of this._$Ep)
          this[s] = i;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0)
        for (const [s, i] of n)
          i.wrapped !== !0 || this._$AL.has(s) || this[s] === void 0 || this.P(s, this[s], i);
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (o = this._$EO) == null || o.forEach((n) => {
        var s;
        return (s = n.hostUpdate) == null ? void 0 : s.call(n);
      }), this.update(r)) : this._$EU();
    } catch (n) {
      throw t = !1, this._$EU(), n;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((o) => {
      var n;
      return (n = o.hostUpdated) == null ? void 0 : n.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((r) => this._$EC(r, this[r]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
Q.elementStyles = [], Q.shadowRootOptions = { mode: "open" }, Q[pt("elementProperties")] = /* @__PURE__ */ new Map(), Q[pt("finalized")] = /* @__PURE__ */ new Map(), Wt == null || Wt({ ReactiveElement: Q }), (V.reactiveElementVersions ?? (V.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt = globalThis, Ut = bt.trustedTypes, qe = Ut ? Ut.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Cr = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, Sr = "?" + U, Qo = `<${Sr}>`, K = document, gt = () => K.createComment(""), _t = (e) => e === null || typeof e != "object" && typeof e != "function", kr = Array.isArray, tn = (e) => kr(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Yt = `[ 	
\f\r]`, at = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, We = /-->/g, Ye = />/g, D = RegExp(`>|${Yt}(?:([^\\s"'>=/]+)(${Yt}*=${Yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ke = /'/g, Ze = /"/g, Or = /^(?:script|style|textarea|title)$/i, en = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), Ee = en(1), Z = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), Je = /* @__PURE__ */ new WeakMap(), q = K.createTreeWalker(K, 129);
function Lr(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return qe !== void 0 ? qe.createHTML(t) : t;
}
const rn = (e, t) => {
  const r = e.length - 1, o = [];
  let n, s = t === 2 ? "<svg>" : "", i = at;
  for (let a = 0; a < r; a++) {
    const l = e[a];
    let u, d, c = -1, b = 0;
    for (; b < l.length && (i.lastIndex = b, d = i.exec(l), d !== null); )
      b = i.lastIndex, i === at ? d[1] === "!--" ? i = We : d[1] !== void 0 ? i = Ye : d[2] !== void 0 ? (Or.test(d[2]) && (n = RegExp("</" + d[2], "g")), i = D) : d[3] !== void 0 && (i = D) : i === D ? d[0] === ">" ? (i = n ?? at, c = -1) : d[1] === void 0 ? c = -2 : (c = i.lastIndex - d[2].length, u = d[1], i = d[3] === void 0 ? D : d[3] === '"' ? Ze : Ke) : i === Ze || i === Ke ? i = D : i === We || i === Ye ? i = at : (i = D, n = void 0);
    const v = i === D && e[a + 1].startsWith("/>") ? " " : "";
    s += i === at ? l + Qo : c >= 0 ? (o.push(u), l.slice(0, c) + Cr + l.slice(c) + U + v) : l + U + (c === -2 ? a : v);
  }
  return [Lr(e, s + (e[r] || "<?>") + (t === 2 ? "</svg>" : "")), o];
};
class $t {
  constructor({ strings: t, _$litType$: r }, o) {
    let n;
    this.parts = [];
    let s = 0, i = 0;
    const a = t.length - 1, l = this.parts, [u, d] = rn(t, r);
    if (this.el = $t.createElement(u, o), q.currentNode = this.el.content, r === 2) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (n = q.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes())
          for (const c of n.getAttributeNames())
            if (c.endsWith(Cr)) {
              const b = d[i++], v = n.getAttribute(c).split(U), A = /([.?@])?(.*)/.exec(b);
              l.push({ type: 1, index: s, name: A[2], strings: v, ctor: A[1] === "." ? nn : A[1] === "?" ? sn : A[1] === "@" ? ln : Ft }), n.removeAttribute(c);
            } else
              c.startsWith(U) && (l.push({ type: 6, index: s }), n.removeAttribute(c));
        if (Or.test(n.tagName)) {
          const c = n.textContent.split(U), b = c.length - 1;
          if (b > 0) {
            n.textContent = Ut ? Ut.emptyScript : "";
            for (let v = 0; v < b; v++)
              n.append(c[v], gt()), q.nextNode(), l.push({ type: 2, index: ++s });
            n.append(c[b], gt());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Sr)
          l.push({ type: 2, index: s });
        else {
          let c = -1;
          for (; (c = n.data.indexOf(U, c + 1)) !== -1; )
            l.push({ type: 7, index: s }), c += U.length - 1;
        }
      s++;
    }
  }
  static createElement(t, r) {
    const o = K.createElement("template");
    return o.innerHTML = t, o;
  }
}
function it(e, t, r = e, o) {
  var i, a;
  if (t === Z)
    return t;
  let n = o !== void 0 ? (i = r._$Co) == null ? void 0 : i[o] : r._$Cl;
  const s = _t(t) ? void 0 : t._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== s && ((a = n == null ? void 0 : n._$AO) == null || a.call(n, !1), s === void 0 ? n = void 0 : (n = new s(e), n._$AT(e, r, o)), o !== void 0 ? (r._$Co ?? (r._$Co = []))[o] = n : r._$Cl = n), n !== void 0 && (t = it(e, n._$AS(e, t.values), n, o)), t;
}
class on {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: o } = this._$AD, n = ((t == null ? void 0 : t.creationScope) ?? K).importNode(r, !0);
    q.currentNode = n;
    let s = q.nextNode(), i = 0, a = 0, l = o[0];
    for (; l !== void 0; ) {
      if (i === l.index) {
        let u;
        l.type === 2 ? u = new At(s, s.nextSibling, this, t) : l.type === 1 ? u = new l.ctor(s, l.name, l.strings, this, t) : l.type === 6 && (u = new an(s, this, t)), this._$AV.push(u), l = o[++a];
      }
      i !== (l == null ? void 0 : l.index) && (s = q.nextNode(), i++);
    }
    return q.currentNode = K, n;
  }
  p(t) {
    let r = 0;
    for (const o of this._$AV)
      o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, r), r += o.strings.length - 2) : o._$AI(t[r])), r++;
  }
}
class At {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, o, n) {
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = o, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = it(this, t, r), _t(t) ? t === g || t == null || t === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tn(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== g && _t(this._$AH) ? this._$AA.nextSibling.data = t : this.T(K.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var s;
    const { values: r, _$litType$: o } = t, n = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = $t.createElement(Lr(o.h, o.h[0]), this.options)), o);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === n)
      this._$AH.p(r);
    else {
      const i = new on(n, this), a = i.u(this.options);
      i.p(r), this.T(a), this._$AH = i;
    }
  }
  _$AC(t) {
    let r = Je.get(t.strings);
    return r === void 0 && Je.set(t.strings, r = new $t(t)), r;
  }
  k(t) {
    kr(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let o, n = 0;
    for (const s of t)
      n === r.length ? r.push(o = new At(this.S(gt()), this.S(gt()), this, this.options)) : o = r[n], o._$AI(s), n++;
    n < r.length && (this._$AR(o && o._$AB.nextSibling, n), r.length = n);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, r); t && t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}
class Ft {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, o, n, s) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = t, this.name = r, this._$AM = n, this.options = s, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = g;
  }
  _$AI(t, r = this, o, n) {
    const s = this.strings;
    let i = !1;
    if (s === void 0)
      t = it(this, t, r, 0), i = !_t(t) || t !== this._$AH && t !== Z, i && (this._$AH = t);
    else {
      const a = t;
      let l, u;
      for (t = s[0], l = 0; l < s.length - 1; l++)
        u = it(this, a[o + l], r, l), u === Z && (u = this._$AH[l]), i || (i = !_t(u) || u !== this._$AH[l]), u === g ? t = g : t !== g && (t += (u ?? "") + s[l + 1]), this._$AH[l] = u;
    }
    i && !n && this.j(t);
  }
  j(t) {
    t === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class nn extends Ft {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === g ? void 0 : t;
  }
}
class sn extends Ft {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== g);
  }
}
class ln extends Ft {
  constructor(t, r, o, n, s) {
    super(t, r, o, n, s), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = it(this, t, r, 0) ?? g) === Z)
      return;
    const o = this._$AH, n = t === g && o !== g || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, s = t !== g && (o === g || n);
    n && this.element.removeEventListener(this.name, this, o), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class an {
  constructor(t, r, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    it(this, t);
  }
}
const Kt = bt.litHtmlPolyfillSupport;
Kt == null || Kt($t, At), (bt.litHtmlVersions ?? (bt.litHtmlVersions = [])).push("3.1.3");
const un = (e, t, r) => {
  const o = (r == null ? void 0 : r.renderBefore) ?? t;
  let n = o._$litPart$;
  if (n === void 0) {
    const s = (r == null ? void 0 : r.renderBefore) ?? null;
    o._$litPart$ = n = new At(t.insertBefore(gt(), s), s, void 0, r ?? {});
  }
  return n._$AI(e), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let vt = class extends Q {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = un(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Z;
  }
};
var nr;
vt._$litElement$ = !0, vt.finalized = !0, (nr = globalThis.litElementHydrateSupport) == null || nr.call(globalThis, { LitElement: vt });
const Zt = globalThis.litElementPolyfillSupport;
Zt == null || Zt({ LitElement: vt });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.5");
var cn = Ht`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;
const ue = /* @__PURE__ */ new Set(), dn = new MutationObserver(Nr), et = /* @__PURE__ */ new Map();
let Tr = document.documentElement.dir || "ltr", Pr = document.documentElement.lang || navigator.language, H;
dn.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir", "lang"]
});
function Mr(...e) {
  e.map((t) => {
    const r = t.$code.toLowerCase();
    et.has(r) ? et.set(r, Object.assign(Object.assign({}, et.get(r)), t)) : et.set(r, t), H || (H = t);
  }), Nr();
}
function Nr() {
  Tr = document.documentElement.dir || "ltr", Pr = document.documentElement.lang || navigator.language, [...ue.keys()].map((e) => {
    typeof e.requestUpdate == "function" && e.requestUpdate();
  });
}
let hn = class {
  constructor(t) {
    this.host = t, this.host.addController(this);
  }
  hostConnected() {
    ue.add(this.host);
  }
  hostDisconnected() {
    ue.delete(this.host);
  }
  dir() {
    return `${this.host.dir || Tr}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || Pr}`.toLowerCase();
  }
  getTranslationData(t) {
    var r, o;
    const n = new Intl.Locale(t.replace(/_/g, "-")), s = n == null ? void 0 : n.language.toLowerCase(), i = (o = (r = n == null ? void 0 : n.region) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && o !== void 0 ? o : "", a = et.get(`${s}-${i}`), l = et.get(s);
    return { locale: n, language: s, region: i, primary: a, secondary: l };
  }
  exists(t, r) {
    var o;
    const { primary: n, secondary: s } = this.getTranslationData((o = r.lang) !== null && o !== void 0 ? o : this.lang());
    return r = Object.assign({ includeFallback: !1 }, r), !!(n && n[t] || s && s[t] || r.includeFallback && H && H[t]);
  }
  term(t, ...r) {
    const { primary: o, secondary: n } = this.getTranslationData(this.lang());
    let s;
    if (o && o[t])
      s = o[t];
    else if (n && n[t])
      s = n[t];
    else if (H && H[t])
      s = H[t];
    else
      return console.error(`No translation found for: ${String(t)}`), String(t);
    return typeof s == "function" ? s(...r) : s;
  }
  date(t, r) {
    return t = new Date(t), new Intl.DateTimeFormat(this.lang(), r).format(t);
  }
  number(t, r) {
    return t = Number(t), isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), r).format(t);
  }
  relativeTime(t, r, o) {
    return new Intl.RelativeTimeFormat(this.lang(), o).format(t, r);
  }
};
var Rr = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (e, t) => `Go to slide ${e} of ${t}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (e) => e === 0 ? "No options selected" : e === 1 ? "1 option selected" : `${e} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (e) => `Slide ${e}`,
  toggleColorFormat: "Toggle color format"
};
Mr(Rr);
var fn = Rr, zr = class extends hn {
};
Mr(fn);
var xe = Ht`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`, Ur = Object.defineProperty, pn = Object.defineProperties, bn = Object.getOwnPropertyDescriptor, vn = Object.getOwnPropertyDescriptors, Ge = Object.getOwnPropertySymbols, mn = Object.prototype.hasOwnProperty, gn = Object.prototype.propertyIsEnumerable, Xe = (e, t, r) => t in e ? Ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Et = (e, t) => {
  for (var r in t || (t = {}))
    mn.call(t, r) && Xe(e, r, t[r]);
  if (Ge)
    for (var r of Ge(t))
      gn.call(t, r) && Xe(e, r, t[r]);
  return e;
}, Br = (e, t) => pn(e, vn(t)), h = (e, t, r, o) => {
  for (var n = o > 1 ? void 0 : o ? bn(t, r) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (n = (o ? i(t, r, n) : i(n)) || n);
  return o && n && Ur(t, r, n), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _n = { attribute: !0, type: String, converter: zt, reflect: !1, hasChanged: Ae }, $n = (e = _n, t, r) => {
  const { kind: o, metadata: n } = r;
  let s = globalThis.litPropertyMetadata.get(n);
  if (s === void 0 && globalThis.litPropertyMetadata.set(n, s = /* @__PURE__ */ new Map()), s.set(r.name, e), o === "accessor") {
    const { name: i } = r;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(i, l, e);
    }, init(a) {
      return a !== void 0 && this.P(i, void 0, e), a;
    } };
  }
  if (o === "setter") {
    const { name: i } = r;
    return function(a) {
      const l = this[i];
      t.call(this, a), this.requestUpdate(i, l, e);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function f(e) {
  return (t, r) => typeof r == "object" ? $n(e, t, r) : ((o, n, s) => {
    const i = n.hasOwnProperty(s);
    return n.constructor.createProperty(s, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(n, s) : void 0;
  })(e, t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Ce(e) {
  return f({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yn = (e, t, r) => (r.configurable = !0, r.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, r), r);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function wn(e, t) {
  return (r, o, n) => {
    const s = (i) => {
      var a;
      return ((a = i.renderRoot) == null ? void 0 : a.querySelector(e)) ?? null;
    };
    return yn(r, o, { get() {
      return s(this);
    } });
  };
}
var G = class extends vt {
  constructor() {
    super(), Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
      this.constructor.define(e, t);
    });
  }
  emit(e, t) {
    const r = new CustomEvent(e, Et({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, t));
    return this.dispatchEvent(r), r;
  }
  /* eslint-enable */
  static define(e, t = this, r = {}) {
    const o = customElements.get(e);
    if (!o) {
      customElements.define(e, class extends t {
      }, r);
      return;
    }
    let n = " (unknown version)", s = n;
    "version" in t && t.version && (n = " v" + t.version), "version" in o && o.version && (s = " v" + o.version), !(n && s && n === s) && console.warn(
      `Attempted to register <${e}>${n}, but <${e}>${s} has already been registered.`
    );
  }
};
G.version = "2.15.1";
G.dependencies = {};
h([
  f()
], G.prototype, "dir", 2);
h([
  f()
], G.prototype, "lang", 2);
var Vr = class extends G {
  constructor() {
    super(...arguments), this.localize = new zr(this);
  }
  render() {
    return Ee`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
Vr.styles = [xe, cn];
var ut = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakSet(), St = /* @__PURE__ */ new WeakMap(), An = class {
  constructor(e, t) {
    this.handleFormData = (r) => {
      const o = this.options.disabled(this.host), n = this.options.name(this.host), s = this.options.value(this.host), i = this.host.tagName.toLowerCase() === "sl-button";
      this.host.isConnected && !o && !i && typeof n == "string" && n.length > 0 && typeof s < "u" && (Array.isArray(s) ? s.forEach((a) => {
        r.formData.append(n, a.toString());
      }) : r.formData.append(n, s.toString()));
    }, this.handleFormSubmit = (r) => {
      var o;
      const n = this.options.disabled(this.host), s = this.options.reportValidity;
      this.form && !this.form.noValidate && ((o = ut.get(this.form)) == null || o.forEach((i) => {
        this.setUserInteracted(i, !0);
      })), this.form && !this.form.noValidate && !n && !s(this.host) && (r.preventDefault(), r.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), St.set(this.host, []);
    }, this.handleInteraction = (r) => {
      const o = St.get(this.host);
      o.includes(r.type) || o.push(r.type), o.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const r = this.form.querySelectorAll("*");
        for (const o of r)
          if (typeof o.checkValidity == "function" && !o.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const r = this.form.querySelectorAll("*");
        for (const o of r)
          if (typeof o.reportValidity == "function" && !o.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = e).addController(this), this.options = Et({
      form: (r) => {
        const o = r.form;
        if (o) {
          const s = r.getRootNode().querySelector(`#${o}`);
          if (s)
            return s;
        }
        return r.closest("form");
      },
      name: (r) => r.name,
      value: (r) => r.value,
      defaultValue: (r) => r.defaultValue,
      disabled: (r) => {
        var o;
        return (o = r.disabled) != null ? o : !1;
      },
      reportValidity: (r) => typeof r.reportValidity == "function" ? r.reportValidity() : !0,
      checkValidity: (r) => typeof r.checkValidity == "function" ? r.checkValidity() : !0,
      setValue: (r, o) => r.value = o,
      assumeInteractionOn: ["sl-input"]
    }, t);
  }
  hostConnected() {
    const e = this.options.form(this.host);
    e && this.attachForm(e), St.set(this.host, []), this.options.assumeInteractionOn.forEach((t) => {
      this.host.addEventListener(t, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), St.delete(this.host), this.options.assumeInteractionOn.forEach((e) => {
      this.host.removeEventListener(e, this.handleInteraction);
    });
  }
  hostUpdated() {
    const e = this.options.form(this.host);
    e || this.detachForm(), e && this.form !== e && (this.detachForm(), this.attachForm(e)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(e) {
    e ? (this.form = e, ut.has(this.form) ? ut.get(this.form).add(this.host) : ut.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), ct.has(this.form) || (ct.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), dt.has(this.form) || (dt.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form)
      return;
    const e = ut.get(this.form);
    e && (e.delete(this.host), e.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), ct.has(this.form) && (this.form.reportValidity = ct.get(this.form), ct.delete(this.form)), dt.has(this.form) && (this.form.checkValidity = dt.get(this.form), dt.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(e, t) {
    t ? Jt.add(e) : Jt.delete(e), e.requestUpdate();
  }
  doAction(e, t) {
    if (this.form) {
      const r = document.createElement("button");
      r.type = e, r.style.position = "absolute", r.style.width = "0", r.style.height = "0", r.style.clipPath = "inset(50%)", r.style.overflow = "hidden", r.style.whiteSpace = "nowrap", t && (r.name = t.name, r.value = t.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((o) => {
        t.hasAttribute(o) && r.setAttribute(o, t.getAttribute(o));
      })), this.form.append(r), r.click(), r.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var e;
    return (e = this.form) != null ? e : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(e) {
    this.doAction("reset", e);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(e) {
    this.doAction("submit", e);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(e) {
    const t = this.host, r = !!Jt.has(t), o = !!t.required;
    t.toggleAttribute("data-required", o), t.toggleAttribute("data-optional", !o), t.toggleAttribute("data-invalid", !e), t.toggleAttribute("data-valid", e), t.toggleAttribute("data-user-invalid", !e && r), t.toggleAttribute("data-user-valid", e && r);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const e = this.host;
    this.setValidity(e.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(e) {
    const t = new CustomEvent("sl-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    e || t.preventDefault(), this.host.dispatchEvent(t) || e == null || e.preventDefault();
  }
}, Se = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
});
Object.freeze(Br(Et({}, Se), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(Br(Et({}, Se), {
  valid: !1,
  customError: !0
}));
var En = Ht`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`, xn = Ht`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`, ce = "";
function Qe(e) {
  ce = e;
}
function Cn(e = "") {
  if (!ce) {
    const t = [...document.getElementsByTagName("script")], r = t.find((o) => o.hasAttribute("data-shoelace"));
    if (r)
      Qe(r.getAttribute("data-shoelace"));
    else {
      const o = t.find((s) => /shoelace(\.min)?\.js($|\?)/.test(s.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));
      let n = "";
      o && (n = o.getAttribute("src")), Qe(n.split("/").slice(0, -1).join("/"));
    }
  }
  return ce.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
var Sn = {
  name: "default",
  resolver: (e) => Cn(`assets/icons/${e}.svg`)
}, kn = Sn, tr = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, On = {
  name: "system",
  resolver: (e) => e in tr ? `data:image/svg+xml,${encodeURIComponent(tr[e])}` : ""
}, Ln = On, Tn = [kn, Ln], de = [];
function Pn(e) {
  de.push(e);
}
function Mn(e) {
  de = de.filter((t) => t !== e);
}
function er(e) {
  return Tn.find((t) => t.name === e);
}
function ke(e, t) {
  const r = Et({
    waitUntilFirstUpdate: !1
  }, t);
  return (o, n) => {
    const { update: s } = o, i = Array.isArray(e) ? e : [e];
    o.update = function(a) {
      i.forEach((l) => {
        const u = l;
        if (a.has(u)) {
          const d = a.get(u), c = this[u];
          d !== c && (!r.waitUntilFirstUpdate || this.hasUpdated) && this[n](d, c);
        }
      }), s.call(this, a);
    };
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nn = (e, t) => (e == null ? void 0 : e._$litType$) !== void 0;
var ht = Symbol(), kt = Symbol(), Gt, Xt = /* @__PURE__ */ new Map(), N = class extends G {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(e, t) {
    var r;
    let o;
    if (t != null && t.spriteSheet) {
      this.svg = Ee`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`, await this.updateComplete;
      const n = this.shadowRoot.querySelector("[part='svg']");
      return typeof t.mutator == "function" && t.mutator(n), this.svg;
    }
    try {
      if (o = await fetch(e, { mode: "cors" }), !o.ok)
        return o.status === 410 ? ht : kt;
    } catch {
      return kt;
    }
    try {
      const n = document.createElement("div");
      n.innerHTML = await o.text();
      const s = n.firstElementChild;
      if (((r = s == null ? void 0 : s.tagName) == null ? void 0 : r.toLowerCase()) !== "svg")
        return ht;
      Gt || (Gt = new DOMParser());
      const a = Gt.parseFromString(s.outerHTML, "text/html").body.querySelector("svg");
      return a ? (a.part.add("svg"), document.adoptNode(a)) : ht;
    } catch {
      return ht;
    }
  }
  connectedCallback() {
    super.connectedCallback(), Pn(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Mn(this);
  }
  getIconSource() {
    const e = er(this.library);
    return this.name && e ? {
      url: e.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var e;
    const { url: t, fromLibrary: r } = this.getIconSource(), o = r ? er(this.library) : void 0;
    if (!t) {
      this.svg = null;
      return;
    }
    let n = Xt.get(t);
    if (n || (n = this.resolveIcon(t, o), Xt.set(t, n)), !this.initialRender)
      return;
    const s = await n;
    if (s === kt && Xt.delete(t), t === this.getIconSource().url) {
      if (Nn(s)) {
        this.svg = s;
        return;
      }
      switch (s) {
        case kt:
        case ht:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = s.cloneNode(!0), (e = o == null ? void 0 : o.mutator) == null || e.call(o, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
N.styles = [xe, xn];
h([
  Ce()
], N.prototype, "svg", 2);
h([
  f({ reflect: !0 })
], N.prototype, "name", 2);
h([
  f()
], N.prototype, "src", 2);
h([
  f()
], N.prototype, "label", 2);
h([
  f({ reflect: !0 })
], N.prototype, "library", 2);
h([
  ke("label")
], N.prototype, "handleLabelChange", 1);
h([
  ke(["name", "src", "library"])
], N.prototype, "setIcon", 1);
var Rn = class {
  constructor(e, ...t) {
    this.slotNames = [], this.handleSlotChange = (r) => {
      const o = r.target;
      (this.slotNames.includes("[default]") && !o.name || o.name && this.slotNames.includes(o.name)) && this.host.requestUpdate();
    }, (this.host = e).addController(this), this.slotNames = t;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((e) => {
      if (e.nodeType === e.TEXT_NODE && e.textContent.trim() !== "")
        return !0;
      if (e.nodeType === e.ELEMENT_NODE) {
        const t = e;
        if (t.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!t.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(e) {
    return this.host.querySelector(`:scope > [slot="${e}"]`) !== null;
  }
  test(e) {
    return e === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(e);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zn = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Un = (e) => (...t) => ({ _$litDirective$: e, values: t });
class Bn {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, o) {
    this._$Ct = t, this._$AM = r, this._$Ci = o;
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vn = Un(class extends Bn {
  constructor(e) {
    var t;
    if (super(e), e.type !== zn.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var o, n;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((s) => s !== "")));
      for (const s in t)
        t[s] && !((o = this.nt) != null && o.has(s)) && this.st.add(s);
      return this.render(t);
    }
    const r = e.element.classList;
    for (const s of this.st)
      s in t || (r.remove(s), this.st.delete(s));
    for (const s in t) {
      const i = !!t[s];
      i === this.st.has(s) || (n = this.nt) != null && n.has(s) || (i ? (r.add(s), this.st.add(s)) : (r.remove(s), this.st.delete(s)));
    }
    return Z;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ir = Symbol.for(""), In = (e) => {
  if ((e == null ? void 0 : e.r) === Ir)
    return e == null ? void 0 : e._$litStatic$;
}, rr = (e, ...t) => ({ _$litStatic$: t.reduce((r, o, n) => r + ((s) => {
  if (s._$litStatic$ !== void 0)
    return s._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(o) + e[n + 1], e[0]), r: Ir }), or = /* @__PURE__ */ new Map(), Dn = (e) => (t, ...r) => {
  const o = r.length;
  let n, s;
  const i = [], a = [];
  let l, u = 0, d = !1;
  for (; u < o; ) {
    for (l = t[u]; u < o && (s = r[u], (n = In(s)) !== void 0); )
      l += n + t[++u], d = !0;
    u !== o && a.push(s), i.push(l), u++;
  }
  if (u === o && i.push(t[o]), d) {
    const c = i.join("$$lit$$");
    (t = or.get(c)) === void 0 && (i.raw = i, or.set(c, t = i)), r = a;
  }
  return e(t, ...r);
}, Qt = Dn(Ee);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = (e) => e ?? g;
var p = class extends G {
  constructor() {
    super(...arguments), this.formControlController = new An(this, {
      assumeInteractionOn: ["click"]
    }), this.hasSlotController = new Rn(this, "[default]", "prefix", "suffix"), this.localize = new zr(this), this.hasFocus = !1, this.invalid = !1, this.title = "", this.variant = "default", this.size = "medium", this.caret = !1, this.disabled = !1, this.loading = !1, this.outline = !1, this.pill = !1, this.circle = !1, this.type = "button", this.name = "", this.value = "", this.href = "", this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    return this.isButton() ? this.button.validity : Se;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.isButton() ? this.button.validationMessage : "";
  }
  firstUpdated() {
    this.isButton() && this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick() {
    this.type === "submit" && this.formControlController.submit(this), this.type === "reset" && this.formControlController.reset(this);
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  isButton() {
    return !this.href;
  }
  isLink() {
    return !!this.href;
  }
  handleDisabledChange() {
    this.isButton() && this.formControlController.setValidity(this.disabled);
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(e) {
    this.button.focus(e);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.isButton() ? this.button.checkValidity() : !0;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.isButton() ? this.button.reportValidity() : !0;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.isButton() && (this.button.setCustomValidity(e), this.formControlController.updateValidity());
  }
  render() {
    const e = this.isLink(), t = e ? rr`a` : rr`button`;
    return Qt`
      <${t}
        part="base"
        class=${Vn({
      button: !0,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${T(e ? void 0 : this.disabled)}
        type=${T(e ? void 0 : this.type)}
        title=${this.title}
        name=${T(e ? void 0 : this.name)}
        value=${T(e ? void 0 : this.value)}
        href=${T(e ? this.href : void 0)}
        target=${T(e ? this.target : void 0)}
        download=${T(e ? this.download : void 0)}
        rel=${T(e ? this.rel : void 0)}
        role=${T(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? Qt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? Qt`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${t}>
    `;
  }
};
p.styles = [xe, En];
p.dependencies = {
  "sl-icon": N,
  "sl-spinner": Vr
};
h([
  wn(".button")
], p.prototype, "button", 2);
h([
  Ce()
], p.prototype, "hasFocus", 2);
h([
  Ce()
], p.prototype, "invalid", 2);
h([
  f()
], p.prototype, "title", 2);
h([
  f({ reflect: !0 })
], p.prototype, "variant", 2);
h([
  f({ reflect: !0 })
], p.prototype, "size", 2);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "caret", 2);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "disabled", 2);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "loading", 2);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "outline", 2);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "pill", 2);
h([
  f({ type: Boolean, reflect: !0 })
], p.prototype, "circle", 2);
h([
  f()
], p.prototype, "type", 2);
h([
  f()
], p.prototype, "name", 2);
h([
  f()
], p.prototype, "value", 2);
h([
  f()
], p.prototype, "href", 2);
h([
  f()
], p.prototype, "target", 2);
h([
  f()
], p.prototype, "rel", 2);
h([
  f()
], p.prototype, "download", 2);
h([
  f()
], p.prototype, "form", 2);
h([
  f({ attribute: "formaction" })
], p.prototype, "formAction", 2);
h([
  f({ attribute: "formenctype" })
], p.prototype, "formEnctype", 2);
h([
  f({ attribute: "formmethod" })
], p.prototype, "formMethod", 2);
h([
  f({ attribute: "formnovalidate", type: Boolean })
], p.prototype, "formNoValidate", 2);
h([
  f({ attribute: "formtarget" })
], p.prototype, "formTarget", 2);
h([
  ke("disabled", { waitUntilFirstUpdate: !0 })
], p.prototype, "handleDisabledChange", 1);
p.define("sl-button");
var Hn = /* @__PURE__ */ Vo('<sl-button variant="primary" role="button" tabindex="0"> </sl-button>', 2);
function Fn(e) {
  let t = /* @__PURE__ */ st(0);
  function r() {
    z(t, j(t) + 1);
  }
  var o = Hn();
  o.__click = r;
  var n = /* @__PURE__ */ To(o);
  Oo(() => zo(n, `Clicked ${le(j(t))} ${le(j(t) === 1 ? "time" : "times")}`)), No("keypress", o, r, !1), Ar(e, o);
}
Ro(["click"]);
customElements.define("my-counter", Fo(Fn, {}, [], [], !0));
export {
  Fn as Counter
};
