import {
  popup_styles_default
} from "./chunk.Z7MHAEL3.js";
import {
  o
} from "./chunk.ORW72H2K.js";
import {
  ShoelaceElement,
  e,
  e2,
  i
} from "./chunk.Z5VD5WTS.js";
import {
  y
} from "./chunk.DUT32TWM.js";
import {
  __decorateClass,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk.LKA3TPUC.js";

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t2) {
  return t2.split("-")[1];
}
function e3(t2) {
  return "y" === t2 ? "height" : "width";
}
function n(t2) {
  return t2.split("-")[0];
}
function o2(t2) {
  return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
}
function i2(i4, r3, a3) {
  let { reference: l3, floating: s3 } = i4;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, u3 = o2(r3), m3 = e3(u3), g3 = l3[m3] / 2 - s3[m3] / 2, d3 = "x" === u3;
  let p3;
  switch (n(r3)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (t(r3)) {
    case "start":
      p3[u3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[u3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var r = async (t2, e4, n3) => {
  const { placement: o4 = "bottom", strategy: r3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e4));
  let f3 = await l3.getElementRects({ reference: t2, floating: e4, strategy: r3 }), { x: u3, y: m3 } = i2(f3, o4, c3), g3 = o4, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y4, y: x3, data: w3, reset: v3 } = await h3({ x: u3, y: m3, initialPlacement: o4, placement: g3, strategy: r3, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e4 } });
    u3 = null != y4 ? y4 : u3, m3 = null != x3 ? x3 : m3, d3 = __spreadProps(__spreadValues({}, d3), { [a4]: __spreadValues(__spreadValues({}, d3[a4]), w3) }), v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e4, strategy: r3 }) : v3.rects), { x: u3, y: m3 } = i2(f3, g3, c3)), n4 = -1);
  }
  return { x: u3, y: m3, placement: g3, strategy: r3, middlewareData: d3 };
};
function a(t2) {
  return "number" != typeof t2 ? function(t3) {
    return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, t3);
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l(t2) {
  return __spreadProps(__spreadValues({}, t2), { top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height });
}
async function s(t2, e4) {
  var n3;
  void 0 === e4 && (e4 = {});
  const { x: o4, y: i4, platform: r3, rects: s3, elements: c3, strategy: f3 } = t2, { boundary: u3 = "clippingAncestors", rootBoundary: m3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e4, h3 = a(p3), y4 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l(await r3.getClippingRect({ element: null == (n3 = await (null == r3.isElement ? void 0 : r3.isElement(y4))) || n3 ? y4 : y4.contextElement || await (null == r3.getDocumentElement ? void 0 : r3.getDocumentElement(c3.floating)), boundary: u3, rootBoundary: m3, strategy: f3 })), w3 = "floating" === g3 ? __spreadProps(__spreadValues({}, s3.floating), { x: o4, y: i4 }) : s3.reference, v3 = await (null == r3.getOffsetParent ? void 0 : r3.getOffsetParent(c3.floating)), b3 = await (null == r3.isElement ? void 0 : r3.isElement(v3)) && await (null == r3.getScale ? void 0 : r3.getScale(v3)) || { x: 1, y: 1 }, R2 = l(r3.convertOffsetParentRelativeRectToViewportRelativeRect ? await r3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
  return { top: (x3.top - R2.top + h3.top) / b3.y, bottom: (R2.bottom - x3.bottom + h3.bottom) / b3.y, left: (x3.left - R2.left + h3.left) / b3.x, right: (R2.right - x3.right + h3.right) / b3.x };
}
var c = Math.min;
var f = Math.max;
function u(t2, e4, n3) {
  return f(t2, c(e4, n3));
}
var m = (n3) => ({ name: "arrow", options: n3, async fn(i4) {
  const { element: r3, padding: l3 = 0 } = n3 || {}, { x: s3, y: c3, placement: f3, rects: m3, platform: g3 } = i4;
  if (null == r3)
    return {};
  const d3 = a(l3), p3 = { x: s3, y: c3 }, h3 = o2(f3), y4 = e3(h3), x3 = await g3.getDimensions(r3), w3 = "y" === h3 ? "top" : "left", v3 = "y" === h3 ? "bottom" : "right", b3 = m3.reference[y4] + m3.reference[h3] - p3[h3] - m3.floating[y4], R2 = p3[h3] - m3.reference[h3], A2 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(r3));
  let P3 = A2 ? "y" === h3 ? A2.clientHeight || 0 : A2.clientWidth || 0 : 0;
  0 === P3 && (P3 = m3.floating[y4]);
  const T3 = b3 / 2 - R2 / 2, O3 = d3[w3], D3 = P3 - x3[y4] - d3[v3], E3 = P3 / 2 - x3[y4] / 2 + T3, L3 = u(O3, E3, D3), k2 = null != t(f3) && E3 != L3 && m3.reference[y4] / 2 - (E3 < O3 ? d3[w3] : d3[v3]) - x3[y4] / 2 < 0;
  return { [h3]: p3[h3] - (k2 ? E3 < O3 ? O3 - E3 : D3 - E3 : 0), data: { [h3]: L3, centerOffset: E3 - L3 } };
} });
var g = ["top", "right", "bottom", "left"];
var d = g.reduce((t2, e4) => t2.concat(e4, e4 + "-start", e4 + "-end"), []);
var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
function h(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => p[t3]);
}
function y2(n3, i4, r3) {
  void 0 === r3 && (r3 = false);
  const a3 = t(n3), l3 = o2(n3), s3 = e3(l3);
  let c3 = "x" === l3 ? a3 === (r3 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return i4.reference[s3] > i4.floating[s3] && (c3 = h(c3)), { main: c3, cross: h(c3) };
}
var x = { start: "end", end: "start" };
function w(t2) {
  return t2.replace(/start|end/g, (t3) => x[t3]);
}
var b = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "flip", options: e4, async fn(o4) {
    var i4;
    const { placement: r3, middlewareData: a3, rects: l3, initialPlacement: c3, platform: f3, elements: u3 } = o4, _a = e4, { mainAxis: m3 = true, crossAxis: g3 = true, fallbackPlacements: d3, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x3 = "none", flipAlignment: v3 = true } = _a, b3 = __objRest(_a, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), R2 = n(r3), A2 = n(c3) === c3, P3 = await (null == f3.isRTL ? void 0 : f3.isRTL(u3.floating)), T3 = d3 || (A2 || !v3 ? [h(c3)] : function(t2) {
      const e5 = h(t2);
      return [w(t2), e5, w(e5)];
    }(c3));
    d3 || "none" === x3 || T3.push(...function(e5, o5, i5, r4) {
      const a4 = t(e5);
      let l4 = function(t2, e6, n3) {
        const o6 = ["left", "right"], i6 = ["right", "left"], r5 = ["top", "bottom"], a5 = ["bottom", "top"];
        switch (t2) {
          case "top":
          case "bottom":
            return n3 ? e6 ? i6 : o6 : e6 ? o6 : i6;
          case "left":
          case "right":
            return e6 ? r5 : a5;
          default:
            return [];
        }
      }(n(e5), "start" === i5, r4);
      return a4 && (l4 = l4.map((t2) => t2 + "-" + a4), o5 && (l4 = l4.concat(l4.map(w)))), l4;
    }(c3, v3, x3, P3));
    const O3 = [c3, ...T3], D3 = await s(o4, b3), E3 = [];
    let L3 = (null == (i4 = a3.flip) ? void 0 : i4.overflows) || [];
    if (m3 && E3.push(D3[R2]), g3) {
      const { main: t2, cross: e5 } = y2(r3, l3, P3);
      E3.push(D3[t2], D3[e5]);
    }
    if (L3 = [...L3, { placement: r3, overflows: E3 }], !E3.every((t2) => t2 <= 0)) {
      var k2;
      const t2 = ((null == (k2 = a3.flip) ? void 0 : k2.index) || 0) + 1, e5 = O3[t2];
      if (e5)
        return { data: { index: t2, overflows: L3 }, reset: { placement: e5 } };
      let n3 = "bottom";
      switch (p3) {
        case "bestFit": {
          var B;
          const t3 = null == (B = L3.map((t4) => [t4, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e6) => t5 + e6, 0)]).sort((t4, e6) => t4[1] - e6[1])[0]) ? void 0 : B[0].placement;
          t3 && (n3 = t3);
          break;
        }
        case "initialPlacement":
          n3 = c3;
      }
      if (r3 !== n3)
        return { reset: { placement: n3 } };
    }
    return {};
  } };
};
var O = function(e4) {
  return void 0 === e4 && (e4 = 0), { name: "offset", options: e4, async fn(i4) {
    const { x: r3, y: a3 } = i4, l3 = await async function(e5, i5) {
      const { placement: r4, platform: a4, elements: l4 } = e5, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(r4), f3 = t(r4), u3 = "x" === o2(r4), m3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && u3 ? -1 : 1, d3 = "function" == typeof i5 ? i5(e5) : i5;
      let { mainAxis: p3, crossAxis: h3, alignmentAxis: y4 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : __spreadValues({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, d3);
      return f3 && "number" == typeof y4 && (h3 = "end" === f3 ? -1 * y4 : y4), u3 ? { x: h3 * g3, y: p3 * m3 } : { x: p3 * m3, y: h3 * g3 };
    }(i4, e4);
    return { x: r3 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};
function D(t2) {
  return "x" === t2 ? "y" : "x";
}
var E = function(t2) {
  return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e4) {
    const { x: i4, y: r3, placement: a3 } = e4, _a = t2, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t3) => {
      let { x: e5, y: n3 } = t3;
      return { x: e5, y: n3 };
    } } } = _a, m3 = __objRest(_a, ["mainAxis", "crossAxis", "limiter"]), g3 = { x: i4, y: r3 }, d3 = await s(e4, m3), p3 = o2(n(a3)), h3 = D(p3);
    let y4 = g3[p3], x3 = g3[h3];
    if (l3) {
      const t3 = "y" === p3 ? "bottom" : "right";
      y4 = u(y4 + d3["y" === p3 ? "top" : "left"], y4, y4 - d3[t3]);
    }
    if (c3) {
      const t3 = "y" === h3 ? "bottom" : "right";
      x3 = u(x3 + d3["y" === h3 ? "top" : "left"], x3, x3 - d3[t3]);
    }
    const w3 = f3.fn(__spreadProps(__spreadValues({}, e4), { [p3]: y4, [h3]: x3 }));
    return __spreadProps(__spreadValues({}, w3), { data: { x: w3.x - i4, y: w3.y - r3 } });
  } };
};
var k = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "size", options: e4, async fn(o4) {
    const { placement: i4, rects: r3, platform: a3, elements: l3 } = o4, _a = e4, { apply: c3 = () => {
    } } = _a, u3 = __objRest(_a, ["apply"]), m3 = await s(o4, u3), g3 = n(i4), d3 = t(i4);
    let p3, h3;
    "top" === g3 || "bottom" === g3 ? (p3 = g3, h3 = d3 === (await (null == a3.isRTL ? void 0 : a3.isRTL(l3.floating)) ? "start" : "end") ? "left" : "right") : (h3 = g3, p3 = "end" === d3 ? "top" : "bottom");
    const y4 = f(m3.left, 0), x3 = f(m3.right, 0), w3 = f(m3.top, 0), v3 = f(m3.bottom, 0), b3 = { availableHeight: r3.floating.height - (["left", "right"].includes(i4) ? 2 * (0 !== w3 || 0 !== v3 ? w3 + v3 : f(m3.top, m3.bottom)) : m3[p3]), availableWidth: r3.floating.width - (["top", "bottom"].includes(i4) ? 2 * (0 !== y4 || 0 !== x3 ? y4 + x3 : f(m3.left, m3.right)) : m3[h3]) };
    await c3(__spreadValues(__spreadValues({}, o4), b3));
    const R2 = await a3.getDimensions(l3.floating);
    return r3.floating.width !== R2.width || r3.floating.height !== R2.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t2) {
  var e4;
  return (null == (e4 = t2.ownerDocument) ? void 0 : e4.defaultView) || window;
}
function o3(t2) {
  return n2(t2).getComputedStyle(t2);
}
function i3(t2) {
  return f2(t2) ? (t2.nodeName || "").toLowerCase() : "";
}
var r2;
function l2() {
  if (r2)
    return r2;
  const t2 = navigator.userAgentData;
  return t2 && Array.isArray(t2.brands) ? (r2 = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), r2) : navigator.userAgent;
}
function c2(t2) {
  return t2 instanceof n2(t2).HTMLElement;
}
function s2(t2) {
  return t2 instanceof n2(t2).Element;
}
function f2(t2) {
  return t2 instanceof n2(t2).Node;
}
function u2(t2) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function a2(t2) {
  const { overflow: e4, overflowX: n3, overflowY: i4, display: r3 } = o3(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e4 + i4 + n3) && !["inline", "contents"].includes(r3);
}
function d2(t2) {
  return ["table", "td", "th"].includes(i3(t2));
}
function h2(t2) {
  const e4 = /firefox/i.test(l2()), n3 = o3(t2), i4 = n3.backdropFilter || n3.WebkitBackdropFilter;
  return "none" !== n3.transform || "none" !== n3.perspective || !!i4 && "none" !== i4 || e4 && "filter" === n3.willChange || e4 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t3) => n3.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
    const e5 = n3.contain;
    return null != e5 && e5.includes(t3);
  });
}
function p2() {
  return !/^((?!chrome|android).)*safari/i.test(l2());
}
function g2(t2) {
  return ["html", "body", "#document"].includes(i3(t2));
}
var m2 = Math.min;
var y3 = Math.max;
var x2 = Math.round;
function w2(t2) {
  const e4 = o3(t2);
  let n3 = parseFloat(e4.width), i4 = parseFloat(e4.height);
  const r3 = t2.offsetWidth, l3 = t2.offsetHeight, c3 = x2(n3) !== r3 || x2(i4) !== l3;
  return c3 && (n3 = r3, i4 = l3), { width: n3, height: i4, fallback: c3 };
}
function v2(t2) {
  return s2(t2) ? t2 : t2.contextElement;
}
var b2 = { x: 1, y: 1 };
function L2(t2) {
  const e4 = v2(t2);
  if (!c2(e4))
    return b2;
  const n3 = e4.getBoundingClientRect(), { width: o4, height: i4, fallback: r3 } = w2(e4);
  let l3 = (r3 ? x2(n3.width) : n3.width) / o4, s3 = (r3 ? x2(n3.height) : n3.height) / i4;
  return l3 && Number.isFinite(l3) || (l3 = 1), s3 && Number.isFinite(s3) || (s3 = 1), { x: l3, y: s3 };
}
function E2(t2, e4, o4, i4) {
  var r3, l3;
  void 0 === e4 && (e4 = false), void 0 === o4 && (o4 = false);
  const c3 = t2.getBoundingClientRect(), f3 = v2(t2);
  let u3 = b2;
  e4 && (i4 ? s2(i4) && (u3 = L2(i4)) : u3 = L2(t2));
  const a3 = f3 ? n2(f3) : window, d3 = !p2() && o4;
  let h3 = (c3.left + (d3 && (null == (r3 = a3.visualViewport) ? void 0 : r3.offsetLeft) || 0)) / u3.x, g3 = (c3.top + (d3 && (null == (l3 = a3.visualViewport) ? void 0 : l3.offsetTop) || 0)) / u3.y, m3 = c3.width / u3.x, y4 = c3.height / u3.y;
  if (f3) {
    const t3 = n2(f3), e5 = i4 && s2(i4) ? n2(i4) : i4;
    let o5 = t3.frameElement;
    for (; o5 && i4 && e5 !== t3; ) {
      const t4 = L2(o5), e6 = o5.getBoundingClientRect(), i5 = getComputedStyle(o5);
      e6.x += (o5.clientLeft + parseFloat(i5.paddingLeft)) * t4.x, e6.y += (o5.clientTop + parseFloat(i5.paddingTop)) * t4.y, h3 *= t4.x, g3 *= t4.y, m3 *= t4.x, y4 *= t4.y, h3 += e6.x, g3 += e6.y, o5 = n2(o5).frameElement;
    }
  }
  return { width: m3, height: y4, top: g3, right: h3 + m3, bottom: g3 + y4, left: h3, x: h3, y: g3 };
}
function R(t2) {
  return ((f2(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function T2(t2) {
  return s2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function C(t2) {
  return E2(R(t2)).left + T2(t2).scrollLeft;
}
function F(t2, e4, n3) {
  const o4 = c2(e4), r3 = R(e4), l3 = E2(t2, true, "fixed" === n3, e4);
  let s3 = { scrollLeft: 0, scrollTop: 0 };
  const f3 = { x: 0, y: 0 };
  if (o4 || !o4 && "fixed" !== n3)
    if (("body" !== i3(e4) || a2(r3)) && (s3 = T2(e4)), c2(e4)) {
      const t3 = E2(e4, true);
      f3.x = t3.x + e4.clientLeft, f3.y = t3.y + e4.clientTop;
    } else
      r3 && (f3.x = C(r3));
  return { x: l3.left + s3.scrollLeft - f3.x, y: l3.top + s3.scrollTop - f3.y, width: l3.width, height: l3.height };
}
function W(t2) {
  if ("html" === i3(t2))
    return t2;
  const e4 = t2.assignedSlot || t2.parentNode || (u2(t2) ? t2.host : null) || R(t2);
  return u2(e4) ? e4.host : e4;
}
function D2(t2) {
  return c2(t2) && "fixed" !== o3(t2).position ? t2.offsetParent : null;
}
function S(t2) {
  const e4 = n2(t2);
  let r3 = D2(t2);
  for (; r3 && d2(r3) && "static" === o3(r3).position; )
    r3 = D2(r3);
  return r3 && ("html" === i3(r3) || "body" === i3(r3) && "static" === o3(r3).position && !h2(r3)) ? e4 : r3 || function(t3) {
    let e5 = W(t3);
    for (; c2(e5) && !g2(e5); ) {
      if (h2(e5))
        return e5;
      e5 = W(e5);
    }
    return null;
  }(t2) || e4;
}
function A(t2) {
  const e4 = W(t2);
  return g2(e4) ? t2.ownerDocument.body : c2(e4) && a2(e4) ? e4 : A(e4);
}
function H(t2, e4) {
  var o4;
  void 0 === e4 && (e4 = []);
  const i4 = A(t2), r3 = i4 === (null == (o4 = t2.ownerDocument) ? void 0 : o4.body), l3 = n2(i4);
  return r3 ? e4.concat(l3, l3.visualViewport || [], a2(i4) ? i4 : []) : e4.concat(i4, H(i4));
}
function O2(e4, i4, r3) {
  return "viewport" === i4 ? l(function(t2, e5) {
    const o4 = n2(t2), i5 = R(t2), r4 = o4.visualViewport;
    let l3 = i5.clientWidth, c3 = i5.clientHeight, s3 = 0, f3 = 0;
    if (r4) {
      l3 = r4.width, c3 = r4.height;
      const t3 = p2();
      (t3 || !t3 && "fixed" === e5) && (s3 = r4.offsetLeft, f3 = r4.offsetTop);
    }
    return { width: l3, height: c3, x: s3, y: f3 };
  }(e4, r3)) : s2(i4) ? function(t2, e5) {
    const n3 = E2(t2, true, "fixed" === e5), o4 = n3.top + t2.clientTop, i5 = n3.left + t2.clientLeft, r4 = c2(t2) ? L2(t2) : { x: 1, y: 1 }, l3 = t2.clientWidth * r4.x, s3 = t2.clientHeight * r4.y, f3 = i5 * r4.x, u3 = o4 * r4.y;
    return { top: u3, left: f3, right: f3 + l3, bottom: u3 + s3, x: f3, y: u3, width: l3, height: s3 };
  }(i4, r3) : l(function(t2) {
    var e5;
    const n3 = R(t2), i5 = T2(t2), r4 = null == (e5 = t2.ownerDocument) ? void 0 : e5.body, l3 = y3(n3.scrollWidth, n3.clientWidth, r4 ? r4.scrollWidth : 0, r4 ? r4.clientWidth : 0), c3 = y3(n3.scrollHeight, n3.clientHeight, r4 ? r4.scrollHeight : 0, r4 ? r4.clientHeight : 0);
    let s3 = -i5.scrollLeft + C(t2);
    const f3 = -i5.scrollTop;
    return "rtl" === o3(r4 || n3).direction && (s3 += y3(n3.clientWidth, r4 ? r4.clientWidth : 0) - l3), { width: l3, height: c3, x: s3, y: f3 };
  }(R(e4)));
}
var P2 = { getClippingRect: function(t2) {
  let { element: e4, boundary: n3, rootBoundary: r3, strategy: l3 } = t2;
  const c3 = "clippingAncestors" === n3 ? function(t3, e5) {
    const n4 = e5.get(t3);
    if (n4)
      return n4;
    let r4 = H(t3).filter((t4) => s2(t4) && "body" !== i3(t4)), l4 = null;
    const c4 = "fixed" === o3(t3).position;
    let f4 = c4 ? W(t3) : t3;
    for (; s2(f4) && !g2(f4); ) {
      const t4 = o3(f4), e6 = h2(f4);
      (c4 ? e6 || l4 : e6 || "static" !== t4.position || !l4 || !["absolute", "fixed"].includes(l4.position)) ? l4 = t4 : r4 = r4.filter((t5) => t5 !== f4), f4 = W(f4);
    }
    return e5.set(t3, r4), r4;
  }(e4, this._c) : [].concat(n3), f3 = [...c3, r3], u3 = f3[0], a3 = f3.reduce((t3, n4) => {
    const o4 = O2(e4, n4, l3);
    return t3.top = y3(o4.top, t3.top), t3.right = m2(o4.right, t3.right), t3.bottom = m2(o4.bottom, t3.bottom), t3.left = y3(o4.left, t3.left), t3;
  }, O2(e4, u3, l3));
  return { width: a3.right - a3.left, height: a3.bottom - a3.top, x: a3.left, y: a3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e4, offsetParent: n3, strategy: o4 } = t2;
  const r3 = c2(n3), l3 = R(n3);
  if (n3 === l3)
    return e4;
  let s3 = { scrollLeft: 0, scrollTop: 0 }, f3 = { x: 1, y: 1 };
  const u3 = { x: 0, y: 0 };
  if ((r3 || !r3 && "fixed" !== o4) && (("body" !== i3(n3) || a2(l3)) && (s3 = T2(n3)), c2(n3))) {
    const t3 = E2(n3);
    f3 = L2(n3), u3.x = t3.x + n3.clientLeft, u3.y = t3.y + n3.clientTop;
  }
  return { width: e4.width * f3.x, height: e4.height * f3.y, x: e4.x * f3.x - s3.scrollLeft * f3.x + u3.x, y: e4.y * f3.y - s3.scrollTop * f3.y + u3.y };
}, isElement: s2, getDimensions: function(t2) {
  return w2(t2);
}, getOffsetParent: S, getDocumentElement: R, getScale: L2, async getElementRects(t2) {
  let { reference: e4, floating: n3, strategy: o4 } = t2;
  const i4 = this.getOffsetParent || S, r3 = this.getDimensions;
  return { reference: F(e4, await i4(n3), o4), floating: __spreadValues({ x: 0, y: 0 }, await r3(n3)) };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o3(t2).direction };
function z(t2, e4, n3, o4) {
  void 0 === o4 && (o4 = {});
  const { ancestorScroll: i4 = true, ancestorResize: r3 = true, elementResize: l3 = true, animationFrame: c3 = false } = o4, f3 = i4 && !c3, u3 = f3 || r3 ? [...s2(t2) ? H(t2) : t2.contextElement ? H(t2.contextElement) : [], ...H(e4)] : [];
  u3.forEach((t3) => {
    f3 && t3.addEventListener("scroll", n3, { passive: true }), r3 && t3.addEventListener("resize", n3);
  });
  let a3, d3 = null;
  if (l3) {
    let o5 = true;
    d3 = new ResizeObserver(() => {
      o5 || n3(), o5 = false;
    }), s2(t2) && !c3 && d3.observe(t2), s2(t2) || !t2.contextElement || c3 || d3.observe(t2.contextElement), d3.observe(e4);
  }
  let h3 = c3 ? E2(t2) : null;
  return c3 && function e5() {
    const o5 = E2(t2);
    !h3 || o5.x === h3.x && o5.y === h3.y && o5.width === h3.width && o5.height === h3.height || n3();
    h3 = o5, a3 = requestAnimationFrame(e5);
  }(), n3(), () => {
    var t3;
    u3.forEach((t4) => {
      f3 && t4.removeEventListener("scroll", n3), r3 && t4.removeEventListener("resize", n3);
    }), null == (t3 = d3) || t3.disconnect(), d3 = null, c3 && cancelAnimationFrame(a3);
  };
}
var V = (t2, n3, o4) => {
  const i4 = /* @__PURE__ */ new Map(), r3 = __spreadValues({ platform: P2 }, o4), l3 = __spreadProps(__spreadValues({}, r3.platform), { _c: i4 });
  return r(t2, n3, __spreadProps(__spreadValues({}, r3), { platform: l3 }));
};

// src/components/popup/popup.ts
var SlPopup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.placement = "top";
    this.strategy = "absolute";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    this.stop();
  }
  async updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProps.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root = this.getRootNode();
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof HTMLElement) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (!this.anchorEl) {
      throw new Error(
        "Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute."
      );
    }
    this.start();
  }
  start() {
    if (!this.anchorEl) {
      return;
    }
    this.cleanup = z(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      // The offset middleware goes first
      O({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        k({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    if (this.flip) {
      middleware.push(
        b({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        E({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        k({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        m({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    V(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy
    }).then(({ x: x3, y: y4, middlewareData, placement }) => {
      const isRtl = getComputedStyle(this).direction === "rtl";
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x3}px`,
        top: `${y4}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    this.emit("sl-reposition");
  }
  render() {
    return y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${o({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? y`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
SlPopup.styles = popup_styles_default;
__decorateClass([
  i(".popup")
], SlPopup.prototype, "popup", 2);
__decorateClass([
  i(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "anchor", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlPopup.prototype, "active", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "placement", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "strategy", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "distance", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "skidding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "arrow", 2);
__decorateClass([
  e2({ attribute: "arrow-placement" })
], SlPopup.prototype, "arrowPlacement", 2);
__decorateClass([
  e2({ attribute: "arrow-padding", type: Number })
], SlPopup.prototype, "arrowPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "flip", 2);
__decorateClass([
  e2({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], SlPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  e2({ attribute: "flip-fallback-strategy" })
], SlPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "flipBoundary", 2);
__decorateClass([
  e2({ attribute: "flip-padding", type: Number })
], SlPopup.prototype, "flipPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "shift", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "shiftBoundary", 2);
__decorateClass([
  e2({ attribute: "shift-padding", type: Number })
], SlPopup.prototype, "shiftPadding", 2);
__decorateClass([
  e2({ attribute: "auto-size" })
], SlPopup.prototype, "autoSize", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "sync", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  e2({ attribute: "auto-size-padding", type: Number })
], SlPopup.prototype, "autoSizePadding", 2);
SlPopup = __decorateClass([
  e("sl-popup")
], SlPopup);

export {
  SlPopup
};
