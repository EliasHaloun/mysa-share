import re from "react";
var v = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function te() {
  if (I) return R;
  I = 1;
  var a = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function f(m, s, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      u = {};
      for (var E in s)
        E !== "key" && (u[E] = s[E]);
    } else u = s;
    return s = u.ref, {
      $$typeof: a,
      type: m,
      key: d,
      ref: s !== void 0 ? s : null,
      props: u
    };
  }
  return R.Fragment = _, R.jsx = f, R.jsxs = f, R;
}
var b = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function ne() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case q:
          return "Profiler";
        case z:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case w:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function f(e) {
      try {
        _(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), _(e);
      }
    }
    function m(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = a(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, c, l, O, S) {
      return t = l.ref, e = {
        $$typeof: h,
        type: e,
        key: r,
        props: l,
        _owner: c
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, c, l, O, S) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (K(o)) {
            for (n = 0; n < o.length; n++)
              j(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(o);
      if (g.call(r, "key")) {
        o = a(e);
        var i = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", F[o + n] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          i,
          o
        ), F[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), d(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var x in r)
          x !== "key" && (t[x] = r[x]);
      } else t = r;
      return o && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        l,
        c,
        s(),
        t,
        O,
        S
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === h && e._store && (e._store.validated = 1);
    }
    var T = re, h = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), k = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, K = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var y, N = {}, C = T["react-stack-bottom-frame"].bind(
      T,
      u
    )(), Y = A(m(u)), F = {};
    b.Fragment = p, b.jsx = function(e, r, t, n, c) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n,
        c,
        l ? Error("react-stack-top-frame") : C,
        l ? A(m(e)) : Y
      );
    }, b.jsxs = function(e, r, t, n, c) {
      var l = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n,
        c,
        l ? Error("react-stack-top-frame") : C,
        l ? A(m(e)) : Y
      );
    };
  }()), b;
}
var D;
function oe() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? v.exports = te() : v.exports = ne()), v.exports;
}
var L = oe();
const se = ({ text: a }) => /* @__PURE__ */ L.jsx("h1", { style: { fontFamily: "Font_A", color: "purple", fontSize: "3rem", textAlign: "center" }, children: a }), ue = ({ text: a }) => /* @__PURE__ */ L.jsx("h1", { style: { fontFamily: "Font_A", color: "purple", fontSize: "2rem", textAlign: "center" }, children: a });
export {
  ue as SubTitle,
  se as Title
};
