!function (e) { "use strict"; function t(e) { var t = ["O", "Moz", "ms", "Ms", "Webkit"], n = t.length; if (void 0 !== l.style[e]) return !0; for (e = e.charAt(0).toUpperCase() + e.substr(1); --n > -1 && void 0 === l.style[t[n] + e];); return n >= 0 } function n() { a = e.innerWidth || document.documentElement.clientWidth, r = e.innerHeight || document.documentElement.clientHeight } function o(e, t, n) { e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function () { n.call(e) }) } function i(e) { v(function () { "scroll" !== e.type && n(); for (var t = 0, o = y.length; o > t; t++)"scroll" !== e.type && (y[t].coverImage(), y[t].clipContainer()), y[t].onScroll() }) } var a, r, l = document.createElement("div"), s = t("transform"), c = t("perspective"), p = navigator.userAgent, m = p.toLowerCase().indexOf("android") > -1, u = /iPad|iPhone|iPod/.test(p) && !e.MSStream, d = p.toLowerCase().indexOf("firefox") > -1, g = p.indexOf("MSIE ") > -1 || p.indexOf("Trident/") > -1 || p.indexOf("Edge/") > -1, f = document.all && !e.atob; n(); var y = [], h = function () { function e(e, n) { var o, i = this; if (i.instanceID = t++ , i.$item = e, i.defaults = { type: "scroll", speed: .5, imgSrc: null, imgElement: ".jarallax-img", elementInViewport: null, zIndex: -100, noAndroid: !1, noIos: !0, onScroll: null, onInit: null, onDestroy: null, onCoverImage: null }, o = JSON.parse(i.$item.getAttribute("data-jarallax") || "{}"), i.options = i.extend({}, i.defaults, o, n), !(!s || m && i.options.noAndroid || u && i.options.noIos)) { i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))); var a = i.options.elementInViewport; a && "object" == typeof a && "undefined" != typeof a.length && (a = a[0]), !a instanceof Element && (a = null), i.options.elementInViewport = a; var r = i.options.imgElement; r && "string" == typeof r && (r = i.$item.querySelector(r)), !r instanceof Element && (r = null), i.image = { src: i.options.imgSrc || null, $container: null, $item: r, useImgTag: !!r || u || m || g, position: !c || d ? "absolute" : "fixed" }, i.initImg() && i.init() } } var t = 0; return e }(); h.prototype.css = function (t, n) { if ("string" == typeof n) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(n) : t.style[n]; n.transform && (c && (n.transform += " translateZ(0)"), n.WebkitTransform = n.MozTransform = n.msTransform = n.OTransform = n.transform); for (var o in n) t.style[o] = n[o]; return t }, h.prototype.extend = function (e) { e = e || {}; for (var t = 1; t < arguments.length; t++)if (arguments[t]) for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]); return e }, h.prototype.initImg = function () { var e = this; return e.image.$item ? !0 : (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)) }, h.prototype.init = function () { var e = this, t = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" }, n = {}; e.$item.setAttribute("data-jarallax-original-styles", e.$item.getAttribute("style")), "static" === e.css(e.$item, "position") && e.css(e.$item, { position: "relative" }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, { zIndex: 0 }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, { "z-index": e.options.zIndex }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? (e.image.$item || (e.image.$item = document.createElement("img"), e.image.$item.setAttribute("src", e.image.src)), n = e.extend({ "object-fit": "cover", "font-family": "object-fit: cover;", "max-width": "none" }, t, n)) : (e.image.$item = document.createElement("div"), n = e.extend({ "background-position": "50% 50%", "background-size": "cover", "background-repeat": "no-repeat no-repeat", "background-image": 'url("' + e.image.src + '")' }, t, n)); for (var o = 0, i = e.$item; null !== i && i !== document && 0 === o;) { var a = e.css(i, "-webkit-transform") || e.css(i, "-moz-transform") || e.css(i, "transform"); a && "none" !== a && (o = 1, e.css(e.image.$container, { transform: "translateX(0) translateY(0)" })), i = i.parentNode } (o || "opacity" === e.options.type || "scale" === e.options.type || "scale-opacity" === e.options.type) && (e.image.position = "absolute"), n.position = e.image.position, e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), setTimeout(function () { e.$item && e.css(e.$item, { "background-image": "none", "background-attachment": "scroll", "background-size": "auto" }) }, 0), y.push(e) }, h.prototype.destroy = function () { for (var e = this, t = 0, n = y.length; n > t; t++)if (y[t].instanceID === e.instanceID) { y.splice(t, 1); break } var o = e.$item.getAttribute("data-jarallax-original-styles"); e.$item.removeAttribute("data-jarallax-original-styles"), "null" === o ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", o), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax; for (var i in e) delete e[i] }, h.prototype.getImageSize = function (e, t) { if (e && t) { var n = new Image; n.onload = function () { t(n.width, n.height) }, n.src = e } }, h.prototype.clipContainer = function () { if (!f) { var e = this, t = e.image.$container.getBoundingClientRect(), n = t.width, o = t.height; if (!e.$clipStyles) { e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID); var i = document.head || document.getElementsByTagName("head")[0]; i.appendChild(e.$clipStyles) } var a = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + n + "px " + o + "px 0);", "   clip: rect(0, " + n + "px, " + o + "px, 0);", "}"].join("\n"); e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a } }, h.prototype.coverImage = function () { var e = this, t = e.image.$container.getBoundingClientRect(), n = t.height, o = e.options.speed, i = "scroll" === e.options.type || "scroll-opacity" === e.options.type, a = 0, l = n, s = 0; return i && (a = 0 > o ? o * Math.max(n, r) : o * (n + r), o > 1 ? l = Math.abs(a - r) : 0 > o ? l = a / o + Math.abs(a) : l += Math.abs(r - n) * (1 - o), a /= 2), e.parallaxScrollDistance = a, s = i ? (r - l) / 2 : (n - l) / 2, e.css(e.image.$item, { height: l + "px", marginTop: s + "px" }), e.options.onCoverImage && e.options.onCoverImage.call(e), { image: { height: l, marginTop: s }, container: t } }, h.prototype.isVisible = function () { return this.isElementInViewport || !1 }, h.prototype.onScroll = function (e) { var t = this, n = t.$item.getBoundingClientRect(), o = n.top, i = n.height, l = {}, s = n; if (t.options.elementInViewport && (s = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = s.bottom >= 0 && s.right >= 0 && s.top <= r && s.left <= a, e ? 1 : t.isElementInViewport) { var c = Math.max(0, o), p = Math.max(0, i + o), m = Math.max(0, -o), u = Math.max(0, o + i - r), d = Math.max(0, i - (o + i - r)), g = Math.max(0, -o + r - i), f = 1 - 2 * (r - o) / (r + i), y = 1; if (r > i ? y = 1 - (m || u) / i : r >= p ? y = p / r : r >= d && (y = d / r), ("opacity" === t.options.type || "scale-opacity" === t.options.type || "scroll-opacity" === t.options.type) && (l.transform = "", l.opacity = y), "scale" === t.options.type || "scale-opacity" === t.options.type) { var h = 1; t.options.speed < 0 ? h -= t.options.speed * y : h += t.options.speed * (1 - y), l.transform = "scale(" + h + ")" } if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) { var v = t.parallaxScrollDistance * f; "absolute" === t.image.position && (v -= o), l.transform = "translateY(" + v + "px)" } t.css(t.image.$item, l), t.options.onScroll && t.options.onScroll.call(t, { section: n, beforeTop: c, beforeTopEnd: p, afterTop: m, beforeBottom: u, beforeBottomEnd: d, afterBottom: g, visiblePercent: y, fromViewportCenter: f }) } }; var v = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) }; o(e, "scroll", i), o(e, "resize", i), o(e, "orientationchange", i), o(e, "load", i); var x = function (e) { ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]); var t, n = arguments[1], o = Array.prototype.slice.call(arguments, 2), i = e.length, a = 0; for (a; i > a; a++)if ("object" == typeof n || "undefined" == typeof n ? e[a].jarallax || (e[a].jarallax = new h(e[a], n)) : e[a].jarallax && (t = e[a].jarallax[n].apply(e[a].jarallax, o)), "undefined" != typeof t) return t; return e }; x.constructor = h; var $ = e.jarallax; if (e.jarallax = x, e.jarallax.noConflict = function () { return e.jarallax = $, this }, "undefined" != typeof jQuery) { var b = function () { var t = arguments || []; Array.prototype.unshift.call(t, this); var n = x.apply(e, t); return "object" != typeof n ? n : this }; b.constructor = h; var j = jQuery.fn.jarallax; jQuery.fn.jarallax = b, jQuery.fn.jarallax.noConflict = function () { return jQuery.fn.jarallax = j, this } } o(e, "DOMContentLoaded", function () { x(document.querySelectorAll("[data-jarallax], [data-jarallax-video]")) }) }(window);