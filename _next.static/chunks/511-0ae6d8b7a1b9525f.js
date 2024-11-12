(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[511], {
    6807: function() {
        !function() {
            "use strict";
            function e(e) {
                var t = !0
                  , n = !1
                  , r = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function i(e) {
                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList"in e && "contains"in e.classList
                }
                function o(e) {
                    e.classList.contains("focus-visible") || (e.classList.add("focus-visible"),
                    e.setAttribute("data-focus-visible-added", ""))
                }
                function s(e) {
                    t = !1
                }
                function l() {
                    document.addEventListener("mousemove", u),
                    document.addEventListener("mousedown", u),
                    document.addEventListener("mouseup", u),
                    document.addEventListener("pointermove", u),
                    document.addEventListener("pointerdown", u),
                    document.addEventListener("pointerup", u),
                    document.addEventListener("touchmove", u),
                    document.addEventListener("touchstart", u),
                    document.addEventListener("touchend", u)
                }
                function u(e) {
                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1,
                    document.removeEventListener("mousemove", u),
                    document.removeEventListener("mousedown", u),
                    document.removeEventListener("mouseup", u),
                    document.removeEventListener("pointermove", u),
                    document.removeEventListener("pointerdown", u),
                    document.removeEventListener("pointerup", u),
                    document.removeEventListener("touchmove", u),
                    document.removeEventListener("touchstart", u),
                    document.removeEventListener("touchend", u))
                }
                document.addEventListener("keydown", function(n) {
                    n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && o(e.activeElement),
                    t = !0)
                }, !0),
                document.addEventListener("mousedown", s, !0),
                document.addEventListener("pointerdown", s, !0),
                document.addEventListener("touchstart", s, !0),
                document.addEventListener("visibilitychange", function(e) {
                    "hidden" === document.visibilityState && (n && (t = !0),
                    l())
                }, !0),
                l(),
                e.addEventListener("focus", function(e) {
                    var n, r, s;
                    i(e.target) && (t || (r = (n = e.target).type,
                    "INPUT" === (s = n.tagName) && a[r] && !n.readOnly || "TEXTAREA" === s && !n.readOnly || n.isContentEditable)) && o(e.target)
                }, !0),
                e.addEventListener("blur", function(e) {
                    if (i(e.target)) {
                        var t;
                        (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0,
                        window.clearTimeout(r),
                        r = window.setTimeout(function() {
                            n = !1
                        }, 100),
                        (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"),
                        t.removeAttribute("data-focus-visible-added")))
                    }
                }, !0),
                e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute("data-js-focus-visible", ""))
            }
            if ("undefined" != typeof window && "undefined" != typeof document) {
                var t;
                window.applyFocusVisiblePolyfill = e;
                try {
                    t = new CustomEvent("focus-visible-polyfill-ready")
                } catch (e) {
                    (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(t)
            }
            "undefined" != typeof document && e(document)
        }()
    },
    6407: function(e, t, n) {
        "use strict";
        var r = n(8593)
          , a = n(2895);
        e.exports = function(e) {
            var t = r(e);
            return t.token = "",
            "x-oauth-basic" === t.password ? t.token = t.user : "x-token-auth" === t.user && (t.token = t.password),
            a(t.protocols) || 0 === t.protocols.length && a(e) ? t.protocol = "ssh" : t.protocols.length ? t.protocol = t.protocols[0] : (t.protocol = "file",
            t.protocols = ["file"]),
            t.href = t.href.replace(/\/$/, ""),
            t
        }
    },
    227: function(e, t, n) {
        "use strict";
        var r = n(6407);
        function a(e) {
            if ("string" != typeof e)
                throw Error("The url must be a string.");
            /^([a-z\d-]{1,39})\/([-\.\w]{1,100})$/i.test(e) && (e = "https://github.com/" + e);
            var t = r(e)
              , n = t.resource.split(".")
              , i = null;
            switch (t.toString = function(e) {
                return a.stringify(this, e)
            }
            ,
            t.source = n.length > 2 ? n.slice(1 - n.length).join(".") : t.source = t.resource,
            t.git_suffix = /\.git$/.test(t.pathname),
            t.name = decodeURIComponent((t.pathname || t.href).replace(/(^\/)|(\/$)/g, "").replace(/\.git$/, "")),
            t.owner = decodeURIComponent(t.user),
            t.source) {
            case "git.cloudforge.com":
                t.owner = t.user,
                t.organization = n[0],
                t.source = "cloudforge.com";
                break;
            case "visualstudio.com":
                if ("vs-ssh.visualstudio.com" === t.resource) {
                    4 === (i = t.name.split("/")).length && (t.organization = i[1],
                    t.owner = i[2],
                    t.name = i[3],
                    t.full_name = i[2] + "/" + i[3]);
                    break
                }
                2 === (i = t.name.split("/")).length ? (t.owner = i[1],
                t.name = i[1],
                t.full_name = "_git/" + t.name) : 3 === i.length ? (t.name = i[2],
                "DefaultCollection" === i[0] ? (t.owner = i[2],
                t.organization = i[0],
                t.full_name = t.organization + "/_git/" + t.name) : (t.owner = i[0],
                t.full_name = t.owner + "/_git/" + t.name)) : 4 === i.length && (t.organization = i[0],
                t.owner = i[1],
                t.name = i[3],
                t.full_name = t.organization + "/" + t.owner + "/_git/" + t.name);
                break;
            case "dev.azure.com":
            case "azure.com":
                if ("ssh.dev.azure.com" === t.resource) {
                    4 === (i = t.name.split("/")).length && (t.organization = i[1],
                    t.owner = i[2],
                    t.name = i[3]);
                    break
                }
                5 === (i = t.name.split("/")).length ? (t.organization = i[0],
                t.owner = i[1],
                t.name = i[4],
                t.full_name = "_git/" + t.name) : 3 === i.length ? (t.name = i[2],
                "DefaultCollection" === i[0] ? (t.owner = i[2],
                t.organization = i[0],
                t.full_name = t.organization + "/_git/" + t.name) : (t.owner = i[0],
                t.full_name = t.owner + "/_git/" + t.name)) : 4 === i.length && (t.organization = i[0],
                t.owner = i[1],
                t.name = i[3],
                t.full_name = t.organization + "/" + t.owner + "/_git/" + t.name),
                t.query && t.query.path && (t.filepath = t.query.path.replace(/^\/+/g, "")),
                t.query && t.query.version && (t.ref = t.query.version.replace(/^GB/, ""));
                break;
            default:
                var o = (i = t.name.split("/")).length - 1;
                if (i.length >= 2) {
                    var s = i.indexOf("-", 2)
                      , l = i.indexOf("blob", 2)
                      , u = i.indexOf("tree", 2)
                      , c = i.indexOf("commit", 2)
                      , d = i.indexOf("src", 2)
                      , f = i.indexOf("raw", 2)
                      , h = i.indexOf("edit", 2);
                    o = s > 0 ? s - 1 : l > 0 ? l - 1 : u > 0 ? u - 1 : c > 0 ? c - 1 : d > 0 ? d - 1 : f > 0 ? f - 1 : h > 0 ? h - 1 : o,
                    t.owner = i.slice(0, o).join("/"),
                    t.name = i[o],
                    c && (t.commit = i[o + 2])
                }
                t.ref = "",
                t.filepathtype = "",
                t.filepath = "";
                var p = i.length > o && "-" === i[o + 1] ? o + 1 : o;
                i.length > p + 2 && ["raw", "src", "blob", "tree", "edit"].indexOf(i[p + 1]) >= 0 && (t.filepathtype = i[p + 1],
                t.ref = i[p + 2],
                i.length > p + 3 && (t.filepath = i.slice(p + 3).join("/"))),
                t.organization = t.owner
            }
            !t.full_name && (t.full_name = t.owner,
            t.name && (t.full_name && (t.full_name += "/"),
            t.full_name += t.name)),
            t.owner.startsWith("scm/") && (t.source = "bitbucket-server",
            t.owner = t.owner.replace("scm/", ""),
            t.organization = t.owner,
            t.full_name = t.owner + "/" + t.name);
            var m = /(projects|users)\/(.*?)\/repos\/(.*?)((\/.*$)|$)/.exec(t.pathname);
            return null != m && (t.source = "bitbucket-server",
            "users" === m[1] ? t.owner = "~" + m[2] : t.owner = m[2],
            t.organization = t.owner,
            t.name = m[3],
            (i = m[4].split("/")).length > 1 && (["raw", "browse"].indexOf(i[1]) >= 0 ? (t.filepathtype = i[1],
            i.length > 2 && (t.filepath = i.slice(2).join("/"))) : "commits" === i[1] && i.length > 2 && (t.commit = i[2])),
            t.full_name = t.owner + "/" + t.name,
            t.query.at ? t.ref = t.query.at : t.ref = ""),
            t
        }
        a.stringify = function(e, t) {
            t = t || (e.protocols && e.protocols.length ? e.protocols.join("+") : e.protocol);
            var n = e.port ? ":" + e.port : ""
              , r = e.user || "git"
              , a = e.git_suffix ? ".git" : "";
            switch (t) {
            case "ssh":
                if (n)
                    return "ssh://" + r + "@" + e.resource + n + "/" + e.full_name + a;
                return r + "@" + e.resource + ":" + e.full_name + a;
            case "git+ssh":
            case "ssh+git":
            case "ftp":
            case "ftps":
                return t + "://" + r + "@" + e.resource + n + "/" + e.full_name + a;
            case "http":
            case "https":
                return t + "://" + (e.token ? "bitbucket.org" === e.source ? "x-token-auth:" + e.token + "@" : e.token + "@" : e.user && (e.protocols.includes("http") || e.protocols.includes("https")) ? e.user + "@" : "") + e.resource + n + "/" + ("bitbucket-server" === e.source ? "scm/" + e.full_name : "" + e.full_name) + a;
            default:
                return e.href
            }
        }
        ,
        e.exports = a
    },
    5983: function() {
        !function() {
            "use strict";
            if ("object" == typeof window) {
                if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype) {
                    "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    });
                    return
                }
                var e = function(e) {
                    for (var t = e, n = a(t); n; )
                        n = a(t = n.ownerDocument);
                    return t
                }(window.document)
                  , t = []
                  , n = null
                  , r = null;
                o.prototype.THROTTLE_TIMEOUT = 100,
                o.prototype.POLL_INTERVAL = null,
                o.prototype.USE_MUTATION_OBSERVER = !0,
                o._setupCrossOriginUpdater = function() {
                    return n || (n = function(e, n) {
                        r = e && n ? f(e, n) : c(),
                        t.forEach(function(e) {
                            e._checkForIntersections()
                        })
                    }
                    ),
                    n
                }
                ,
                o._resetCrossOriginUpdater = function() {
                    n = null,
                    r = null
                }
                ,
                o.prototype.observe = function(e) {
                    if (!this._observationTargets.some(function(t) {
                        return t.element == e
                    })) {
                        if (!(e && 1 == e.nodeType))
                            throw Error("target must be an Element");
                        this._registerInstance(),
                        this._observationTargets.push({
                            element: e,
                            entry: null
                        }),
                        this._monitorIntersections(e.ownerDocument),
                        this._checkForIntersections()
                    }
                }
                ,
                o.prototype.unobserve = function(e) {
                    this._observationTargets = this._observationTargets.filter(function(t) {
                        return t.element != e
                    }),
                    this._unmonitorIntersections(e.ownerDocument),
                    0 == this._observationTargets.length && this._unregisterInstance()
                }
                ,
                o.prototype.disconnect = function() {
                    this._observationTargets = [],
                    this._unmonitorAllIntersections(),
                    this._unregisterInstance()
                }
                ,
                o.prototype.takeRecords = function() {
                    var e = this._queuedEntries.slice();
                    return this._queuedEntries = [],
                    e
                }
                ,
                o.prototype._initThresholds = function(e) {
                    var t = e || [0];
                    return Array.isArray(t) || (t = [t]),
                    t.sort().filter(function(e, t, n) {
                        if ("number" != typeof e || isNaN(e) || e < 0 || e > 1)
                            throw Error("threshold must be a number between 0 and 1 inclusively");
                        return e !== n[t - 1]
                    })
                }
                ,
                o.prototype._parseRootMargin = function(e) {
                    var t = (e || "0px").split(/\s+/).map(function(e) {
                        var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                        if (!t)
                            throw Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(t[1]),
                            unit: t[2]
                        }
                    });
                    return t[1] = t[1] || t[0],
                    t[2] = t[2] || t[0],
                    t[3] = t[3] || t[1],
                    t
                }
                ,
                o.prototype._monitorIntersections = function(t) {
                    var n = t.defaultView;
                    if (n && -1 == this._monitoringDocuments.indexOf(t)) {
                        var r = this._checkForIntersections
                          , i = null
                          , o = null;
                        if (this.POLL_INTERVAL ? i = n.setInterval(r, this.POLL_INTERVAL) : (s(n, "resize", r, !0),
                        s(t, "scroll", r, !0),
                        this.USE_MUTATION_OBSERVER && "MutationObserver"in n && (o = new n.MutationObserver(r)).observe(t, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })),
                        this._monitoringDocuments.push(t),
                        this._monitoringUnsubscribes.push(function() {
                            var e = t.defaultView;
                            e && (i && e.clearInterval(i),
                            l(e, "resize", r, !0)),
                            l(t, "scroll", r, !0),
                            o && o.disconnect()
                        }),
                        t != (this.root && (this.root.ownerDocument || this.root) || e)) {
                            var u = a(t);
                            u && this._monitorIntersections(u.ownerDocument)
                        }
                    }
                }
                ,
                o.prototype._unmonitorIntersections = function(t) {
                    var n = this._monitoringDocuments.indexOf(t);
                    if (-1 != n) {
                        var r = this.root && (this.root.ownerDocument || this.root) || e;
                        if (!this._observationTargets.some(function(e) {
                            var n = e.element.ownerDocument;
                            if (n == t)
                                return !0;
                            for (; n && n != r; ) {
                                var i = a(n);
                                if ((n = i && i.ownerDocument) == t)
                                    return !0
                            }
                            return !1
                        })) {
                            var i = this._monitoringUnsubscribes[n];
                            if (this._monitoringDocuments.splice(n, 1),
                            this._monitoringUnsubscribes.splice(n, 1),
                            i(),
                            t != r) {
                                var o = a(t);
                                o && this._unmonitorIntersections(o.ownerDocument)
                            }
                        }
                    }
                }
                ,
                o.prototype._unmonitorAllIntersections = function() {
                    var e = this._monitoringUnsubscribes.slice(0);
                    this._monitoringDocuments.length = 0,
                    this._monitoringUnsubscribes.length = 0;
                    for (var t = 0; t < e.length; t++)
                        e[t]()
                }
                ,
                o.prototype._checkForIntersections = function() {
                    if (this.root || !n || r) {
                        var e = this._rootIsInDom()
                          , t = e ? this._getRootRect() : c();
                        this._observationTargets.forEach(function(r) {
                            var a = r.element
                              , o = u(a)
                              , s = this._rootContainsTarget(a)
                              , l = r.entry
                              , d = e && s && this._computeTargetAndRootIntersection(a, o, t)
                              , f = null;
                            this._rootContainsTarget(a) ? (!n || this.root) && (f = t) : f = c();
                            var h = r.entry = new i({
                                time: window.performance && performance.now && performance.now(),
                                target: a,
                                boundingClientRect: o,
                                rootBounds: f,
                                intersectionRect: d
                            });
                            l ? e && s ? this._hasCrossedThreshold(l, h) && this._queuedEntries.push(h) : l && l.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                        }, this),
                        this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }
                }
                ,
                o.prototype._computeTargetAndRootIntersection = function(t, a, i) {
                    if ("none" != window.getComputedStyle(t).display) {
                        for (var o = a, s = p(t), l = !1; !l && s; ) {
                            var c = null
                              , d = 1 == s.nodeType ? window.getComputedStyle(s) : {};
                            if ("none" == d.display)
                                return null;
                            if (s == this.root || 9 == s.nodeType) {
                                if (l = !0,
                                s == this.root || s == e)
                                    n && !this.root ? r && (0 != r.width || 0 != r.height) ? c = r : (s = null,
                                    c = null,
                                    o = null) : c = i;
                                else {
                                    var h = p(s)
                                      , m = h && u(h)
                                      , x = h && this._computeTargetAndRootIntersection(h, m, i);
                                    m && x ? (s = h,
                                    c = f(m, x)) : (s = null,
                                    o = null)
                                }
                            } else {
                                var g = s.ownerDocument;
                                s != g.body && s != g.documentElement && "visible" != d.overflow && (c = u(s))
                            }
                            if (c && (o = function(e, t) {
                                var n = Math.max(e.top, t.top)
                                  , r = Math.min(e.bottom, t.bottom)
                                  , a = Math.max(e.left, t.left)
                                  , i = Math.min(e.right, t.right)
                                  , o = i - a
                                  , s = r - n;
                                return o >= 0 && s >= 0 && {
                                    top: n,
                                    bottom: r,
                                    left: a,
                                    right: i,
                                    width: o,
                                    height: s
                                } || null
                            }(c, o)),
                            !o)
                                break;
                            s = s && p(s)
                        }
                        return o
                    }
                }
                ,
                o.prototype._getRootRect = function() {
                    var t;
                    if (this.root && !m(this.root))
                        t = u(this.root);
                    else {
                        var n = m(this.root) ? this.root : e
                          , r = n.documentElement
                          , a = n.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: r.clientWidth || a.clientWidth,
                            width: r.clientWidth || a.clientWidth,
                            bottom: r.clientHeight || a.clientHeight,
                            height: r.clientHeight || a.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }
                ,
                o.prototype._expandRectByRootMargin = function(e) {
                    var t = this._rootMarginValues.map(function(t, n) {
                        return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                    })
                      , n = {
                        top: e.top - t[0],
                        right: e.right + t[1],
                        bottom: e.bottom + t[2],
                        left: e.left - t[3]
                    };
                    return n.width = n.right - n.left,
                    n.height = n.bottom - n.top,
                    n
                }
                ,
                o.prototype._hasCrossedThreshold = function(e, t) {
                    var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1
                      , r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                    if (n !== r)
                        for (var a = 0; a < this.thresholds.length; a++) {
                            var i = this.thresholds[a];
                            if (i == n || i == r || i < n != i < r)
                                return !0
                        }
                }
                ,
                o.prototype._rootIsInDom = function() {
                    return !this.root || h(e, this.root)
                }
                ,
                o.prototype._rootContainsTarget = function(t) {
                    var n = this.root && (this.root.ownerDocument || this.root) || e;
                    return h(n, t) && (!this.root || n == t.ownerDocument)
                }
                ,
                o.prototype._registerInstance = function() {
                    0 > t.indexOf(this) && t.push(this)
                }
                ,
                o.prototype._unregisterInstance = function() {
                    var e = t.indexOf(this);
                    -1 != e && t.splice(e, 1)
                }
                ,
                window.IntersectionObserver = o,
                window.IntersectionObserverEntry = i
            }
            function a(e) {
                try {
                    return e.defaultView && e.defaultView.frameElement || null
                } catch (e) {
                    return null
                }
            }
            function i(e) {
                this.time = e.time,
                this.target = e.target,
                this.rootBounds = d(e.rootBounds),
                this.boundingClientRect = d(e.boundingClientRect),
                this.intersectionRect = d(e.intersectionRect || c()),
                this.isIntersecting = !!e.intersectionRect;
                var t = this.boundingClientRect
                  , n = t.width * t.height
                  , r = this.intersectionRect
                  , a = r.width * r.height;
                n ? this.intersectionRatio = Number((a / n).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0
            }
            function o(e, t) {
                var n, r, a, i = t || {};
                if ("function" != typeof e)
                    throw Error("callback must be a function");
                if (i.root && 1 != i.root.nodeType && 9 != i.root.nodeType)
                    throw Error("root must be a Document or Element");
                this._checkForIntersections = (n = this._checkForIntersections.bind(this),
                r = this.THROTTLE_TIMEOUT,
                a = null,
                function() {
                    a || (a = setTimeout(function() {
                        n(),
                        a = null
                    }, r))
                }
                ),
                this._callback = e,
                this._observationTargets = [],
                this._queuedEntries = [],
                this._rootMarginValues = this._parseRootMargin(i.rootMargin),
                this.thresholds = this._initThresholds(i.threshold),
                this.root = i.root || null,
                this.rootMargin = this._rootMarginValues.map(function(e) {
                    return e.value + e.unit
                }).join(" "),
                this._monitoringDocuments = [],
                this._monitoringUnsubscribes = []
            }
            function s(e, t, n, r) {
                "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
            }
            function l(e, t, n, r) {
                "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detachEvent && e.detachEvent("on" + t, n)
            }
            function u(e) {
                var t;
                try {
                    t = e.getBoundingClientRect()
                } catch (e) {}
                return t ? (t.width && t.height || (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }),
                t) : c()
            }
            function c() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }
            function d(e) {
                return !e || "x"in e ? e : {
                    top: e.top,
                    y: e.top,
                    bottom: e.bottom,
                    left: e.left,
                    x: e.left,
                    right: e.right,
                    width: e.width,
                    height: e.height
                }
            }
            function f(e, t) {
                var n = t.top - e.top
                  , r = t.left - e.left;
                return {
                    top: n,
                    left: r,
                    height: t.height,
                    width: t.width,
                    bottom: n + t.height,
                    right: r + t.width
                }
            }
            function h(e, t) {
                for (var n = t; n; ) {
                    if (n == e)
                        return !0;
                    n = p(n)
                }
                return !1
            }
            function p(t) {
                var n = t.parentNode;
                return 9 == t.nodeType && t != e ? a(t) : (n && n.assignedSlot && (n = n.assignedSlot.parentNode),
                n && 11 == n.nodeType && n.host) ? n.host : n
            }
            function m(e) {
                return e && 9 === e.nodeType
            }
        }()
    },
    2895: function(e, t, n) {
        "use strict";
        var r = n(6097);
        e.exports = function e(t) {
            if (Array.isArray(t))
                return -1 !== t.indexOf("ssh") || -1 !== t.indexOf("rsync");
            if ("string" != typeof t)
                return !1;
            var n = r(t);
            if (t = t.substring(t.indexOf("://") + 3),
            e(n))
                return !0;
            var a = RegExp(".([a-zA-Z\\d]+):(\\d+)/");
            return !t.match(a) && t.indexOf("@") < t.indexOf(":")
        }
    },
    5554: function(e, t, n) {
        var r, a = "__lodash_hash_undefined__", i = 1 / 0, o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, s = /^\w*$/, l = /^\./, u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, c = /\\(\\)?/g, d = /^\[object .+?Constructor\]$/, f = "object" == typeof n.g && n.g && n.g.Object === Object && n.g, h = "object" == typeof self && self && self.Object === Object && self, p = f || h || Function("return this")(), m = Array.prototype, x = Function.prototype, g = Object.prototype, v = p["__core-js_shared__"], y = (r = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "", b = x.toString, w = g.hasOwnProperty, k = g.toString, _ = RegExp("^" + b.call(w).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), j = p.Symbol, E = m.splice, O = L(p, "Map"), C = L(Object, "create"), T = j ? j.prototype : void 0, S = T ? T.toString : void 0;
        function N(e) {
            var t = -1
              , n = e ? e.length : 0;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function I(e) {
            var t = -1
              , n = e ? e.length : 0;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function R(e) {
            var t = -1
              , n = e ? e.length : 0;
            for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function A(e, t) {
            for (var n, r = e.length; r--; )
                if ((n = e[r][0]) === t || n != n && t != t)
                    return r;
            return -1
        }
        function P(e, t) {
            var n, r = e.__data__;
            return ("string" == (n = typeof t) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? r["string" == typeof t ? "string" : "hash"] : r.map
        }
        function L(e, t) {
            var n, r = null == e ? void 0 : e[t];
            return !(!$(r) || y && y in r) && ("[object Function]" == (n = $(r) ? k.call(r) : "") || "[object GeneratorFunction]" == n || function(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                    try {
                        t = !!(e + "")
                    } catch (e) {}
                return t
            }(r) ? _ : d).test(function(e) {
                if (null != e) {
                    try {
                        return b.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }(r)) ? r : void 0
        }
        N.prototype.clear = function() {
            this.__data__ = C ? C(null) : {}
        }
        ,
        N.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e]
        }
        ,
        N.prototype.get = function(e) {
            var t = this.__data__;
            if (C) {
                var n = t[e];
                return n === a ? void 0 : n
            }
            return w.call(t, e) ? t[e] : void 0
        }
        ,
        N.prototype.has = function(e) {
            var t = this.__data__;
            return C ? void 0 !== t[e] : w.call(t, e)
        }
        ,
        N.prototype.set = function(e, t) {
            return this.__data__[e] = C && void 0 === t ? a : t,
            this
        }
        ,
        I.prototype.clear = function() {
            this.__data__ = []
        }
        ,
        I.prototype.delete = function(e) {
            var t = this.__data__
              , n = A(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : E.call(t, n, 1),
            !0)
        }
        ,
        I.prototype.get = function(e) {
            var t = this.__data__
              , n = A(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
        ,
        I.prototype.has = function(e) {
            return A(this.__data__, e) > -1
        }
        ,
        I.prototype.set = function(e, t) {
            var n = this.__data__
              , r = A(n, e);
            return r < 0 ? n.push([e, t]) : n[r][1] = t,
            this
        }
        ,
        R.prototype.clear = function() {
            this.__data__ = {
                hash: new N,
                map: new (O || I),
                string: new N
            }
        }
        ,
        R.prototype.delete = function(e) {
            return P(this, e).delete(e)
        }
        ,
        R.prototype.get = function(e) {
            return P(this, e).get(e)
        }
        ,
        R.prototype.has = function(e) {
            return P(this, e).has(e)
        }
        ,
        R.prototype.set = function(e, t) {
            return P(this, e).set(e, t),
            this
        }
        ;
        var M = D(function(e) {
            e = null == (t = e) ? "" : function(e) {
                if ("string" == typeof e)
                    return e;
                if (Z(e))
                    return S ? S.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -i ? "-0" : t
            }(t);
            var t, n = [];
            return l.test(e) && n.push(""),
            e.replace(u, function(e, t, r, a) {
                n.push(r ? a.replace(c, "$1") : t || e)
            }),
            n
        });
        function D(e, t) {
            if ("function" != typeof e || t && "function" != typeof t)
                throw TypeError("Expected a function");
            var n = function() {
                var r = arguments
                  , a = t ? t.apply(this, r) : r[0]
                  , i = n.cache;
                if (i.has(a))
                    return i.get(a);
                var o = e.apply(this, r);
                return n.cache = i.set(a, o),
                o
            };
            return n.cache = new (D.Cache || R),
            n
        }
        D.Cache = R;
        var F = Array.isArray;
        function $(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        function Z(e) {
            return "symbol" == typeof e || !!e && "object" == typeof e && "[object Symbol]" == k.call(e)
        }
        e.exports = function(e, t, n) {
            var r = null == e ? void 0 : function(e, t) {
                var n;
                t = !function(e, t) {
                    if (F(e))
                        return !1;
                    var n = typeof e;
                    return !!("number" == n || "symbol" == n || "boolean" == n || null == e || Z(e)) || s.test(e) || !o.test(e) || null != t && e in Object(t)
                }(t, e) ? F(n = t) ? n : M(n) : [t];
                for (var r = 0, a = t.length; null != e && r < a; )
                    e = e[function(e) {
                        if ("string" == typeof e || Z(e))
                            return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -i ? "-0" : t
                    }(t[r++])];
                return r && r == a ? e : void 0
            }(e, t);
            return void 0 === r ? n : r
        }
    },
    5946: function(e, t, n) {
        "use strict";
        var r, a;
        e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (a = n.g.process) ? void 0 : a.env) ? n.g.process : n(6394)
    },
    4351: function(e, t) {
        "use strict";
        var n, r, a, i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            ACTION_FAST_REFRESH: function() {
                return d
            },
            ACTION_NAVIGATE: function() {
                return s
            },
            ACTION_PREFETCH: function() {
                return c
            },
            ACTION_REFRESH: function() {
                return o
            },
            ACTION_RESTORE: function() {
                return l
            },
            ACTION_SERVER_ACTION: function() {
                return f
            },
            ACTION_SERVER_PATCH: function() {
                return u
            },
            PrefetchCacheEntryStatus: function() {
                return r
            },
            PrefetchKind: function() {
                return n
            },
            isThenable: function() {
                return h
            }
        });
        let o = "refresh"
          , s = "navigate"
          , l = "restore"
          , u = "server-patch"
          , c = "prefetch"
          , d = "fast-refresh"
          , f = "server-action";
        function h(e) {
            return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }
        (a = n || (n = {})).AUTO = "auto",
        a.FULL = "full",
        a.TEMPORARY = "temporary",
        (i = r || (r = {})).fresh = "fresh",
        i.reusable = "reusable",
        i.expired = "expired",
        i.stale = "stale",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    7306: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(7472),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8767: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return y
            }
        });
        let r = n(2430)
          , a = n(1778)
          , i = n(2676)
          , o = a._(n(5271))
          , s = r._(n(967))
          , l = r._(n(4803))
          , u = n(5531)
          , c = n(9797)
          , d = n(2381);
        n(8053);
        let f = n(5624)
          , h = r._(n(9130))
          , p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, n, r, a, i, o) {
            let s = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && a(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , a = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => a,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                a = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }
            ))
        }
        function x(e) {
            return o.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        let g = (0,
        o.forwardRef)( (e, t) => {
            let {src: n, srcSet: r, sizes: a, height: s, width: l, decoding: u, className: c, style: d, fetchPriority: f, placeholder: h, loading: p, unoptimized: g, fill: v, onLoadRef: y, onLoadingCompleteRef: b, setBlurComplete: w, setShowAltText: k, sizesInput: _, onLoad: j, onError: E, ...O} = e;
            return (0,
            i.jsx)("img", {
                ...O,
                ...x(f),
                loading: p,
                width: l,
                height: s,
                decoding: u,
                "data-nimg": v ? "fill" : "1",
                className: c,
                style: d,
                sizes: a,
                srcSet: r,
                src: n,
                ref: (0,
                o.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (E && (e.src = e.src),
                    e.complete && m(e, h, y, b, w, g, _))
                }
                , [n, h, y, b, w, E, g, _, t]),
                onLoad: e => {
                    m(e.currentTarget, h, y, b, w, g, _)
                }
                ,
                onError: e => {
                    k(!0),
                    "empty" !== h && w(!0),
                    E && E(e)
                }
            })
        }
        );
        function v(e) {
            let {isAppRouter: t, imgAttributes: n} = e
              , r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy,
                ...x(n.fetchPriority)
            };
            return t && s.default.preload ? (s.default.preload(n.src, r),
            null) : (0,
            i.jsx)(l.default, {
                children: (0,
                i.jsx)("link", {
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }, "__nimg-" + n.src + n.srcSet + n.sizes)
            })
        }
        let y = (0,
        o.forwardRef)( (e, t) => {
            let n = (0,
            o.useContext)(f.RouterContext)
              , r = (0,
            o.useContext)(d.ImageConfigContext)
              , a = (0,
            o.useMemo)( () => {
                let e = p || r || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , n = e.deviceSizes.sort( (e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: n
                }
            }
            , [r])
              , {onLoad: s, onLoadingComplete: l} = e
              , m = (0,
            o.useRef)(s);
            (0,
            o.useEffect)( () => {
                m.current = s
            }
            , [s]);
            let x = (0,
            o.useRef)(l);
            (0,
            o.useEffect)( () => {
                x.current = l
            }
            , [l]);
            let[y,b] = (0,
            o.useState)(!1)
              , [w,k] = (0,
            o.useState)(!1)
              , {props: _, meta: j} = (0,
            u.getImgProps)(e, {
                defaultLoader: h.default,
                imgConf: a,
                blurComplete: y,
                showAltText: w
            });
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(g, {
                    ..._,
                    unoptimized: j.unoptimized,
                    placeholder: j.placeholder,
                    fill: j.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: x,
                    setBlurComplete: b,
                    setShowAltText: k,
                    sizesInput: e.sizes,
                    ref: t
                }), j.priority ? (0,
                i.jsx)(v, {
                    isAppRouter: !n,
                    imgAttributes: _
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    3704: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let r = n(2430)
          , a = n(2676)
          , i = r._(n(5271))
          , o = n(7049)
          , s = n(7093)
          , l = n(5328)
          , u = n(5085)
          , c = n(6236)
          , d = n(5624)
          , f = n(1177)
          , h = n(5111)
          , p = n(7306)
          , m = n(4851)
          , x = n(4351)
          , g = new Set;
        function v(e, t, n, r, a, i) {
            if (i || (0,
            s.isLocalURL)(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let a = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0);
                    if (g.has(a))
                        return;
                    g.add(a)
                }
                (async () => i ? e.prefetch(t, a) : e.prefetch(t, n, r))().catch(e => {}
                )
            }
        }
        function y(e) {
            return "string" == typeof e ? e : (0,
            l.formatUrl)(e)
        }
        let b = i.default.forwardRef(function(e, t) {
            let n, r;
            let {href: l, as: g, children: b, prefetch: w=null, passHref: k, replace: _, shallow: j, scroll: E, locale: O, onClick: C, onMouseEnter: T, onTouchStart: S, legacyBehavior: N=!1, ...I} = e;
            n = b,
            N && ("string" == typeof n || "number" == typeof n) && (n = (0,
            a.jsx)("a", {
                children: n
            }));
            let R = i.default.useContext(d.RouterContext)
              , A = i.default.useContext(f.AppRouterContext)
              , P = null != R ? R : A
              , L = !R
              , M = !1 !== w
              , D = null === w ? x.PrefetchKind.AUTO : x.PrefetchKind.FULL
              , {href: F, as: $} = i.default.useMemo( () => {
                if (!R) {
                    let e = y(l);
                    return {
                        href: e,
                        as: g ? y(g) : e
                    }
                }
                let[e,t] = (0,
                o.resolveHref)(R, l, !0);
                return {
                    href: e,
                    as: g ? (0,
                    o.resolveHref)(R, g) : t || e
                }
            }
            , [R, l, g])
              , Z = i.default.useRef(F)
              , U = i.default.useRef($);
            N && (r = i.default.Children.only(n));
            let W = N ? r && "object" == typeof r && r.ref : t
              , [z,H,G] = (0,
            h.useIntersection)({
                rootMargin: "200px"
            })
              , B = i.default.useCallback(e => {
                (U.current !== $ || Z.current !== F) && (G(),
                U.current = $,
                Z.current = F),
                z(e),
                W && ("function" == typeof W ? W(e) : "object" == typeof W && (W.current = e))
            }
            , [$, W, F, G, z]);
            i.default.useEffect( () => {
                P && H && M && v(P, F, $, {
                    locale: O
                }, {
                    kind: D
                }, L)
            }
            , [$, F, H, O, M, null == R ? void 0 : R.locale, P, L, D]);
            let V = {
                ref: B,
                onClick(e) {
                    N || "function" != typeof C || C(e),
                    N && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    P && !e.defaultPrevented && function(e, t, n, r, a, o, l, u, c) {
                        let {nodeName: d} = e.currentTarget;
                        if ("A" === d.toUpperCase() && (function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        s.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let f = () => {
                            let e = null == l || l;
                            "beforePopState"in t ? t[a ? "replace" : "push"](n, r, {
                                shallow: o,
                                locale: u,
                                scroll: e
                            }) : t[a ? "replace" : "push"](r || n, {
                                scroll: e
                            })
                        }
                        ;
                        c ? i.default.startTransition(f) : f()
                    }(e, P, F, $, _, j, E, O, L)
                },
                onMouseEnter(e) {
                    N || "function" != typeof T || T(e),
                    N && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    P && (M || !L) && v(P, F, $, {
                        locale: O,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: D
                    }, L)
                },
                onTouchStart: function(e) {
                    N || "function" != typeof S || S(e),
                    N && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    P && (M || !L) && v(P, F, $, {
                        locale: O,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: D
                    }, L)
                }
            };
            if ((0,
            u.isAbsoluteUrl)($))
                V.href = $;
            else if (!N || k || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== O ? O : null == R ? void 0 : R.locale
                  , t = (null == R ? void 0 : R.isLocaleDomain) && (0,
                p.getDomainLocale)($, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                V.href = t || (0,
                m.addBasePath)((0,
                c.addLocale)($, e, null == R ? void 0 : R.defaultLocale))
            }
            return N ? i.default.cloneElement(r, V) : (0,
            a.jsx)("a", {
                ...I,
                ...V,
                children: n
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5111: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(5271)
          , a = n(2239)
          , i = "function" == typeof IntersectionObserver
          , o = new Map
          , s = [];
        function l(e) {
            let {rootRef: t, rootMargin: n, disabled: l} = e
              , u = l || !i
              , [c,d] = (0,
            r.useState)(!1)
              , f = (0,
            r.useRef)(null)
              , h = (0,
            r.useCallback)(e => {
                f.current = e
            }
            , []);
            return (0,
            r.useEffect)( () => {
                if (i) {
                    if (u || c)
                        return;
                    let e = f.current;
                    if (e && e.tagName)
                        return function(e, t, n) {
                            let {id: r, observer: a, elements: i} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = s.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = o.get(r)))
                                    return t;
                                let a = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = a.get(e.target)
                                              , n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: a
                                },
                                s.push(n),
                                o.set(n, t),
                                t
                            }(n);
                            return i.set(e, t),
                            a.observe(e),
                            function() {
                                if (i.delete(e),
                                a.unobserve(e),
                                0 === i.size) {
                                    a.disconnect(),
                                    o.delete(r);
                                    let e = s.findIndex(e => e.root === r.root && e.margin === r.margin);
                                    e > -1 && s.splice(e, 1)
                                }
                            }
                        }(e, e => e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                } else if (!c) {
                    let e = (0,
                    a.requestIdleCallback)( () => d(!0));
                    return () => (0,
                    a.cancelIdleCallback)(e)
                }
            }
            , [u, n, t, c, f.current]),
            [h, c, (0,
            r.useCallback)( () => {
                d(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5531: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return s
            }
        }),
        n(8053);
        let r = n(7770)
          , a = n(9797);
        function i(e) {
            return void 0 !== e.default
        }
        function o(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function s(e, t) {
            var n;
            let s, l, u, {src: c, sizes: d, unoptimized: f=!1, priority: h=!1, loading: p, className: m, quality: x, width: g, height: v, fill: y=!1, style: b, overrideSrc: w, onLoad: k, onLoadingComplete: _, placeholder: j="empty", blurDataURL: E, fetchPriority: O, layout: C, objectFit: T, objectPosition: S, lazyBoundary: N, lazyRoot: I, ...R} = e, {imgConf: A, showAltText: P, blurComplete: L, defaultLoader: M} = t, D = A || a.imageConfigDefault;
            if ("allSizes"in D)
                s = D;
            else {
                let e = [...D.deviceSizes, ...D.imageSizes].sort( (e, t) => e - t)
                  , t = D.deviceSizes.sort( (e, t) => e - t);
                s = {
                    ...D,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            if (void 0 === M)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let F = R.loader || M;
            delete R.loader,
            delete R.srcSet;
            let $ = "__next_img_default"in F;
            if ($) {
                if ("custom" === s.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = F;
                F = t => {
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (C) {
                "fill" === C && (y = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                e && (b = {
                    ...b,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                t && !d && (d = t)
            }
            let Z = ""
              , U = o(g)
              , W = o(v);
            if ("object" == typeof (n = c) && (i(n) || void 0 !== n.src)) {
                let e = i(c) ? c.default : c;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth,
                u = e.blurHeight,
                E = E || e.blurDataURL,
                Z = e.src,
                !y) {
                    if (U || W) {
                        if (U && !W) {
                            let t = U / e.width;
                            W = Math.round(e.height * t)
                        } else if (!U && W) {
                            let t = W / e.height;
                            U = Math.round(e.width * t)
                        }
                    } else
                        U = e.width,
                        W = e.height
                }
            }
            let z = !h && ("lazy" === p || void 0 === p);
            (!(c = "string" == typeof c ? c : Z) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0,
            z = !1),
            s.unoptimized && (f = !0),
            $ && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (f = !0),
            h && (O = "high");
            let H = o(x)
              , G = Object.assign(y ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: T,
                objectPosition: S
            } : {}, P ? {} : {
                color: "transparent"
            }, b)
              , B = L || "empty" === j ? null : "blur" === j ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: U,
                heightInt: W,
                blurWidth: l,
                blurHeight: u,
                blurDataURL: E || "",
                objectFit: G.objectFit
            }) + '")' : 'url("' + j + '")'
              , V = B ? {
                backgroundSize: G.objectFit || "cover",
                backgroundPosition: G.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: B
            } : {}
              , q = function(e) {
                let {config: t, src: n, unoptimized: r, width: a, quality: i, sizes: o, loader: s} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: a} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: a.filter(t => t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: a,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => a.find(t => t >= e) || a[a.length - 1]))],
                        kind: "x"
                    }
                }(t, a, o)
                  , c = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map( (e, r) => s({
                        config: t,
                        src: n,
                        quality: i,
                        width: e
                    }) + " " + ("w" === u ? e : r + 1) + u).join(", "),
                    src: s({
                        config: t,
                        src: n,
                        quality: i,
                        width: l[c]
                    })
                }
            }({
                config: s,
                src: c,
                unoptimized: f,
                width: U,
                quality: H,
                sizes: d,
                loader: F
            });
            return {
                props: {
                    ...R,
                    loading: z ? "lazy" : p,
                    fetchPriority: O,
                    width: U,
                    height: W,
                    decoding: "async",
                    className: m,
                    style: {
                        ...G,
                        ...V
                    },
                    sizes: q.sizes,
                    srcSet: q.srcSet,
                    src: w || q.src
                },
                meta: {
                    unoptimized: f,
                    priority: h,
                    placeholder: j,
                    fill: y
                }
            }
        }
    },
    7770: function(e, t) {
        "use strict";
        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: a, blurDataURL: i, objectFit: o} = e
              , s = r ? 40 * r : t
              , l = a ? 40 * a : n
              , u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    638: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return s
            }
        });
        let r = n(2430)
          , a = n(5531)
          , i = n(8767)
          , o = r._(n(9130));
        function s(e) {
            let {props: t} = (0,
            a.getImgProps)(e, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
        let l = i.Image
    },
    9130: function(e, t) {
        "use strict";
        function n(e) {
            let {config: t, src: n, width: r, quality: a} = e;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (a || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        let r = n
    },
    4214: function() {},
    6768: function(e) {
        !function() {
            "use strict";
            var t = {
                114: function(e) {
                    function t(e) {
                        if ("string" != typeof e)
                            throw TypeError("Path must be a string. Received " + JSON.stringify(e))
                    }
                    function n(e, t) {
                        for (var n, r = "", a = 0, i = -1, o = 0, s = 0; s <= e.length; ++s) {
                            if (s < e.length)
                                n = e.charCodeAt(s);
                            else if (47 === n)
                                break;
                            else
                                n = 47;
                            if (47 === n) {
                                if (i === s - 1 || 1 === o)
                                    ;
                                else if (i !== s - 1 && 2 === o) {
                                    if (r.length < 2 || 2 !== a || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) {
                                        if (r.length > 2) {
                                            var l = r.lastIndexOf("/");
                                            if (l !== r.length - 1) {
                                                -1 === l ? (r = "",
                                                a = 0) : a = (r = r.slice(0, l)).length - 1 - r.lastIndexOf("/"),
                                                i = s,
                                                o = 0;
                                                continue
                                            }
                                        } else if (2 === r.length || 1 === r.length) {
                                            r = "",
                                            a = 0,
                                            i = s,
                                            o = 0;
                                            continue
                                        }
                                    }
                                    t && (r.length > 0 ? r += "/.." : r = "..",
                                    a = 2)
                                } else
                                    r.length > 0 ? r += "/" + e.slice(i + 1, s) : r = e.slice(i + 1, s),
                                    a = s - i - 1;
                                i = s,
                                o = 0
                            } else
                                46 === n && -1 !== o ? ++o : o = -1
                        }
                        return r
                    }
                    var r = {
                        resolve: function() {
                            for (var e, r, a = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--)
                                o >= 0 ? r = arguments[o] : (void 0 === e && (e = ""),
                                r = e),
                                t(r),
                                0 !== r.length && (a = r + "/" + a,
                                i = 47 === r.charCodeAt(0));
                            return (a = n(a, !i),
                            i) ? a.length > 0 ? "/" + a : "/" : a.length > 0 ? a : "."
                        },
                        normalize: function(e) {
                            if (t(e),
                            0 === e.length)
                                return ".";
                            var r = 47 === e.charCodeAt(0)
                              , a = 47 === e.charCodeAt(e.length - 1);
                            return (0 !== (e = n(e, !r)).length || r || (e = "."),
                            e.length > 0 && a && (e += "/"),
                            r) ? "/" + e : e
                        },
                        isAbsolute: function(e) {
                            return t(e),
                            e.length > 0 && 47 === e.charCodeAt(0)
                        },
                        join: function() {
                            if (0 == arguments.length)
                                return ".";
                            for (var e, n = 0; n < arguments.length; ++n) {
                                var a = arguments[n];
                                t(a),
                                a.length > 0 && (void 0 === e ? e = a : e += "/" + a)
                            }
                            return void 0 === e ? "." : r.normalize(e)
                        },
                        relative: function(e, n) {
                            if (t(e),
                            t(n),
                            e === n || (e = r.resolve(e)) === (n = r.resolve(n)))
                                return "";
                            for (var a = 1; a < e.length && 47 === e.charCodeAt(a); ++a)
                                ;
                            for (var i = e.length, o = i - a, s = 1; s < n.length && 47 === n.charCodeAt(s); ++s)
                                ;
                            for (var l = n.length - s, u = o < l ? o : l, c = -1, d = 0; d <= u; ++d) {
                                if (d === u) {
                                    if (l > u) {
                                        if (47 === n.charCodeAt(s + d))
                                            return n.slice(s + d + 1);
                                        if (0 === d)
                                            return n.slice(s + d)
                                    } else
                                        o > u && (47 === e.charCodeAt(a + d) ? c = d : 0 === d && (c = 0));
                                    break
                                }
                                var f = e.charCodeAt(a + d);
                                if (f !== n.charCodeAt(s + d))
                                    break;
                                47 === f && (c = d)
                            }
                            var h = "";
                            for (d = a + c + 1; d <= i; ++d)
                                (d === i || 47 === e.charCodeAt(d)) && (0 === h.length ? h += ".." : h += "/..");
                            return h.length > 0 ? h + n.slice(s + c) : (s += c,
                            47 === n.charCodeAt(s) && ++s,
                            n.slice(s))
                        },
                        _makeLong: function(e) {
                            return e
                        },
                        dirname: function(e) {
                            if (t(e),
                            0 === e.length)
                                return ".";
                            for (var n = e.charCodeAt(0), r = 47 === n, a = -1, i = !0, o = e.length - 1; o >= 1; --o)
                                if (47 === (n = e.charCodeAt(o))) {
                                    if (!i) {
                                        a = o;
                                        break
                                    }
                                } else
                                    i = !1;
                            return -1 === a ? r ? "/" : "." : r && 1 === a ? "//" : e.slice(0, a)
                        },
                        basename: function(e, n) {
                            if (void 0 !== n && "string" != typeof n)
                                throw TypeError('"ext" argument must be a string');
                            t(e);
                            var r, a = 0, i = -1, o = !0;
                            if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                                if (n.length === e.length && n === e)
                                    return "";
                                var s = n.length - 1
                                  , l = -1;
                                for (r = e.length - 1; r >= 0; --r) {
                                    var u = e.charCodeAt(r);
                                    if (47 === u) {
                                        if (!o) {
                                            a = r + 1;
                                            break
                                        }
                                    } else
                                        -1 === l && (o = !1,
                                        l = r + 1),
                                        s >= 0 && (u === n.charCodeAt(s) ? -1 == --s && (i = r) : (s = -1,
                                        i = l))
                                }
                                return a === i ? i = l : -1 === i && (i = e.length),
                                e.slice(a, i)
                            }
                            for (r = e.length - 1; r >= 0; --r)
                                if (47 === e.charCodeAt(r)) {
                                    if (!o) {
                                        a = r + 1;
                                        break
                                    }
                                } else
                                    -1 === i && (o = !1,
                                    i = r + 1);
                            return -1 === i ? "" : e.slice(a, i)
                        },
                        extname: function(e) {
                            t(e);
                            for (var n = -1, r = 0, a = -1, i = !0, o = 0, s = e.length - 1; s >= 0; --s) {
                                var l = e.charCodeAt(s);
                                if (47 === l) {
                                    if (!i) {
                                        r = s + 1;
                                        break
                                    }
                                    continue
                                }
                                -1 === a && (i = !1,
                                a = s + 1),
                                46 === l ? -1 === n ? n = s : 1 !== o && (o = 1) : -1 !== n && (o = -1)
                            }
                            return -1 === n || -1 === a || 0 === o || 1 === o && n === a - 1 && n === r + 1 ? "" : e.slice(n, a)
                        },
                        format: function(e) {
                            var t, n;
                            if (null === e || "object" != typeof e)
                                throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                            return t = e.dir || e.root,
                            n = e.base || (e.name || "") + (e.ext || ""),
                            t ? t === e.root ? t + n : t + "/" + n : n
                        },
                        parse: function(e) {
                            t(e);
                            var n, r = {
                                root: "",
                                dir: "",
                                base: "",
                                ext: "",
                                name: ""
                            };
                            if (0 === e.length)
                                return r;
                            var a = e.charCodeAt(0)
                              , i = 47 === a;
                            i ? (r.root = "/",
                            n = 1) : n = 0;
                            for (var o = -1, s = 0, l = -1, u = !0, c = e.length - 1, d = 0; c >= n; --c) {
                                if (47 === (a = e.charCodeAt(c))) {
                                    if (!u) {
                                        s = c + 1;
                                        break
                                    }
                                    continue
                                }
                                -1 === l && (u = !1,
                                l = c + 1),
                                46 === a ? -1 === o ? o = c : 1 !== d && (d = 1) : -1 !== o && (d = -1)
                            }
                            return -1 === o || -1 === l || 0 === d || 1 === d && o === l - 1 && o === s + 1 ? -1 !== l && (0 === s && i ? r.base = r.name = e.slice(1, l) : r.base = r.name = e.slice(s, l)) : (0 === s && i ? (r.name = e.slice(1, o),
                            r.base = e.slice(1, l)) : (r.name = e.slice(s, o),
                            r.base = e.slice(s, l)),
                            r.ext = e.slice(o, l)),
                            s > 0 ? r.dir = e.slice(0, s - 1) : i && (r.dir = "/"),
                            r
                        },
                        sep: "/",
                        delimiter: ":",
                        win32: null,
                        posix: null
                    };
                    r.posix = r,
                    e.exports = r
                }
            }
              , n = {};
            function r(e) {
                var a = n[e];
                if (void 0 !== a)
                    return a.exports;
                var i = n[e] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    t[e](i, i.exports, r),
                    o = !1
                } finally {
                    o && delete n[e]
                }
                return i.exports
            }
            r.ab = "//";
            var a = r(114);
            e.exports = a
        }()
    },
    6394: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, n, r, a = e.exports = {};
                    function i() {
                        throw Error("setTimeout has not been defined")
                    }
                    function o() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function s(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === i || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (n) {
                            try {
                                return t.call(null, e, 0)
                            } catch (n) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : i
                        } catch (e) {
                            t = i
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : o
                        } catch (e) {
                            n = o
                        }
                    }();
                    var l = []
                      , u = !1
                      , c = -1;
                    function d() {
                        u && r && (u = !1,
                        r.length ? l = r.concat(l) : c = -1,
                        l.length && f())
                    }
                    function f() {
                        if (!u) {
                            var e = s(d);
                            u = !0;
                            for (var t = l.length; t; ) {
                                for (r = l,
                                l = []; ++c < t; )
                                    r && r[c].run();
                                c = -1,
                                t = l.length
                            }
                            r = null,
                            u = !1,
                            function(e) {
                                if (n === clearTimeout)
                                    return clearTimeout(e);
                                if ((n === o || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function h(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function p() {}
                    a.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                        l.push(new h(e,t)),
                        1 !== l.length || u || s(f)
                    }
                    ,
                    h.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    a.title = "browser",
                    a.browser = !0,
                    a.env = {},
                    a.argv = [],
                    a.version = "",
                    a.versions = {},
                    a.on = p,
                    a.addListener = p,
                    a.once = p,
                    a.off = p,
                    a.removeListener = p,
                    a.removeAllListeners = p,
                    a.emit = p,
                    a.prependListener = p,
                    a.prependOnceListener = p,
                    a.listeners = function(e) {
                        return []
                    }
                    ,
                    a.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    a.cwd = function() {
                        return "/"
                    }
                    ,
                    a.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    a.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(e) {
                var a = n[e];
                if (void 0 !== a)
                    return a.exports;
                var i = n[e] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    t[e](i, i.exports, r),
                    o = !1
                } finally {
                    o && delete n[e]
                }
                return i.exports
            }
            r.ab = "//";
            var a = r(229);
            e.exports = a
        }()
    },
    3008: function(e, t, n) {
        e.exports = n(4803)
    },
    9542: function(e, t, n) {
        e.exports = n(638)
    },
    9352: function(e, t, n) {
        e.exports = n(3704)
    },
    7954: function(e, t, n) {
        e.exports = n(178)
    },
    2182: function(e, t, n) {
        "use strict";
        let r, a, i, o, s, l, u, c, d, f, h, p, m, x, g, v, y, b, w, k, _, j, E;
        n.d(t, {
            ZP: function() {
                return s8
            }
        });
        var O, C, T, S, N, I, R, A, P, L, M, D, F, $, Z, U, W, z = n(7954), H = n(5271), G = n.t(H, 2);
        n(6807);
        var B = function() {
            for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
                (e = arguments[n]) && (t = function e(t) {
                    var n, r, a = "";
                    if ("string" == typeof t || "number" == typeof t)
                        a += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (n = 0; n < i; n++)
                                t[n] && (r = e(t[n])) && (a && (a += " "),
                                a += r)
                        } else
                            for (r in t)
                                t[r] && (a && (a += " "),
                                a += r)
                    }
                    return a
                }(e)) && (r && (r += " "),
                r += t);
            return r
        };
        function V() {
            let[e,t] = (0,
            H.useState)(!1);
            return (0,
            H.useEffect)( () => {
                t(!0)
            }
            , []),
            e
        }
        var q = n(543)
          , K = () => {
            let {locale: e=q.ZW, asPath: t, route: n} = (0,
            z.useRouter)();
            return (0,
            H.useMemo)( () => {
                let {pathname: r} = new URL(q.hV.has(n) ? n : t,"https://nextra.vercel.app");
                return (e ? r.replace(RegExp(`\\.${e}(\\/|$)`), "$1") : r).replace(/\.html$/, "").replace(/\/index(\/|$)/, "$1").replace(/\/$/, "") || "/"
            }
            , [t, e, n])
        }
          , Q = n(4603)
          , J = n(2676);
        function Y({pathClassName: e, ...t}) {
            return (0,
            J.jsx)("svg", {
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                ...t,
                children: (0,
                J.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7",
                    className: e
                })
            })
        }
        function X(e) {
            return (0,
            J.jsx)("svg", {
                viewBox: "0 0 20 20",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                ...e,
                children: (0,
                J.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    clipRule: "evenodd"
                })
            })
        }
        function ee(e) {
            return (0,
            J.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                stroke: "currentColor",
                ...e,
                children: [(0,
                J.jsx)("rect", {
                    x: "9",
                    y: "9",
                    width: "13",
                    height: "13",
                    rx: "2",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                J.jsx)("path", {
                    d: "M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
        function et({isOpen: e, ...t}) {
            return (0,
            J.jsxs)("svg", {
                height: "12",
                width: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                ...t,
                children: [(0,
                J.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M4.177 7.823l2.396-2.396A.25.25 0 017 5.604v4.792a.25.25 0 01-.427.177L4.177 8.177a.25.25 0 010-.354z",
                    className: e ? "" : "nx-origin-[35%] nx-rotate-180"
                }), (0,
                J.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25H9.5v-13H1.75zm12.5 13H11v-13h3.25a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25z"
                })]
            })
        }
        function en(e) {
            return (0,
            J.jsx)("svg", {
                viewBox: "2 2 16 16",
                width: "12",
                height: "12",
                fill: "currentColor",
                ...e,
                children: (0,
                J.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
                    clipRule: "evenodd"
                })
            })
        }
        function er(e) {
            return (0,
            J.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                width: "20",
                height: "20",
                ...e,
                children: (0,
                J.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                })
            })
        }
        function ea(e) {
            return (0,
            J.jsxs)("svg", {
                fill: "none",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                ...e,
                children: [(0,
                J.jsx)("g", {
                    children: (0,
                    J.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 6h16"
                    })
                }), (0,
                J.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 12h16"
                }), (0,
                J.jsx)("g", {
                    children: (0,
                    J.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 18h16"
                    })
                })]
            })
        }
        function ei(e) {
            return (0,
            J.jsx)("svg", {
                fill: "none",
                viewBox: "2 2 20 20",
                width: "12",
                height: "12",
                stroke: "currentColor",
                ...e,
                children: (0,
                J.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    fill: "currentColor",
                    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                })
            })
        }
        function eo(e) {
            return (0,
            J.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                ...e,
                children: [(0,
                J.jsx)("circle", {
                    className: "nx-opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }), (0,
                J.jsx)("path", {
                    className: "nx-opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })]
            })
        }
        function es(e) {
            return (0,
            J.jsx)("svg", {
                fill: "none",
                viewBox: "3 3 18 18",
                width: "12",
                height: "12",
                stroke: "currentColor",
                ...e,
                children: (0,
                J.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    fill: "currentColor",
                    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                })
            })
        }
        function el(e) {
            return (0,
            J.jsx)("svg", {
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                ...e,
                children: (0,
                J.jsx)("path", {
                    fill: "currentColor",
                    d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
                })
            })
        }
        function eu(e) {
            return (0,
            J.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                ...e,
                children: (0,
                J.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                })
            })
        }
        (O = P || (P = {})).assertEqual = e => e,
        O.assertIs = function(e) {}
        ,
        O.assertNever = function(e) {
            throw Error()
        }
        ,
        O.arrayToEnum = e => {
            let t = {};
            for (let n of e)
                t[n] = n;
            return t
        }
        ,
        O.getValidEnumValues = e => {
            let t = O.objectKeys(e).filter(t => "number" != typeof e[e[t]])
              , n = {};
            for (let r of t)
                n[r] = e[r];
            return O.objectValues(n)
        }
        ,
        O.objectValues = e => O.objectKeys(e).map(function(t) {
            return e[t]
        }),
        O.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
            let t = [];
            for (let n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
        ,
        O.find = (e, t) => {
            for (let n of e)
                if (t(n))
                    return n
        }
        ,
        O.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e,
        O.joinValues = function(e, t=" | ") {
            return e.map(e => "string" == typeof e ? `'${e}'` : e).join(t)
        }
        ,
        O.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t,
        (L || (L = {})).mergeShapes = (e, t) => ({
            ...e,
            ...t
        });
        let ec = P.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
          , ed = e => {
            switch (typeof e) {
            case "undefined":
                return ec.undefined;
            case "string":
                return ec.string;
            case "number":
                return isNaN(e) ? ec.nan : ec.number;
            case "boolean":
                return ec.boolean;
            case "function":
                return ec.function;
            case "bigint":
                return ec.bigint;
            case "symbol":
                return ec.symbol;
            case "object":
                if (Array.isArray(e))
                    return ec.array;
                if (null === e)
                    return ec.null;
                if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch)
                    return ec.promise;
                if ("undefined" != typeof Map && e instanceof Map)
                    return ec.map;
                if ("undefined" != typeof Set && e instanceof Set)
                    return ec.set;
                if ("undefined" != typeof Date && e instanceof Date)
                    return ec.date;
                return ec.object;
            default:
                return ec.unknown
            }
        }
          , ef = P.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
        class eh extends Error {
            constructor(e) {
                super(),
                this.issues = [],
                this.addIssue = e => {
                    this.issues = [...this.issues, e]
                }
                ,
                this.addIssues = (e=[]) => {
                    this.issues = [...this.issues, ...e]
                }
                ;
                let t = new.target.prototype;
                Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t,
                this.name = "ZodError",
                this.issues = e
            }
            get errors() {
                return this.issues
            }
            format(e) {
                let t = e || function(e) {
                    return e.message
                }
                  , n = {
                    _errors: []
                }
                  , r = e => {
                    for (let a of e.issues)
                        if ("invalid_union" === a.code)
                            a.unionErrors.map(r);
                        else if ("invalid_return_type" === a.code)
                            r(a.returnTypeError);
                        else if ("invalid_arguments" === a.code)
                            r(a.argumentsError);
                        else if (0 === a.path.length)
                            n._errors.push(t(a));
                        else {
                            let e = n
                              , r = 0;
                            for (; r < a.path.length; ) {
                                let n = a.path[r];
                                r === a.path.length - 1 ? (e[n] = e[n] || {
                                    _errors: []
                                },
                                e[n]._errors.push(t(a))) : e[n] = e[n] || {
                                    _errors: []
                                },
                                e = e[n],
                                r++
                            }
                        }
                }
                ;
                return r(this),
                n
            }
            static assert(e) {
                if (!(e instanceof eh))
                    throw Error(`Not a ZodError: ${e}`)
            }
            toString() {
                return this.message
            }
            get message() {
                return JSON.stringify(this.issues, P.jsonStringifyReplacer, 2)
            }
            get isEmpty() {
                return 0 === this.issues.length
            }
            flatten(e=e => e.message) {
                let t = {}
                  , n = [];
                for (let r of this.issues)
                    r.path.length > 0 ? (t[r.path[0]] = t[r.path[0]] || [],
                    t[r.path[0]].push(e(r))) : n.push(e(r));
                return {
                    formErrors: n,
                    fieldErrors: t
                }
            }
            get formErrors() {
                return this.flatten()
            }
        }
        eh.create = e => new eh(e);
        let ep = (e, t) => {
            let n;
            switch (e.code) {
            case ef.invalid_type:
                n = e.received === ec.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
                break;
            case ef.invalid_literal:
                n = `Invalid literal value, expected ${JSON.stringify(e.expected, P.jsonStringifyReplacer)}`;
                break;
            case ef.unrecognized_keys:
                n = `Unrecognized key(s) in object: ${P.joinValues(e.keys, ", ")}`;
                break;
            case ef.invalid_union:
                n = "Invalid input";
                break;
            case ef.invalid_union_discriminator:
                n = `Invalid discriminator value. Expected ${P.joinValues(e.options)}`;
                break;
            case ef.invalid_enum_value:
                n = `Invalid enum value. Expected ${P.joinValues(e.options)}, received '${e.received}'`;
                break;
            case ef.invalid_arguments:
                n = "Invalid function arguments";
                break;
            case ef.invalid_return_type:
                n = "Invalid function return type";
                break;
            case ef.invalid_date:
                n = "Invalid date";
                break;
            case ef.invalid_string:
                "object" == typeof e.validation ? "includes"in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`,
                "number" == typeof e.validation.position && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith"in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith"in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : P.assertNever(e.validation) : n = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
                break;
            case ef.too_small:
                n = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : "number" === e.type ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
                break;
            case ef.too_big:
                n = "array" === e.type ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
                break;
            case ef.custom:
                n = "Invalid input";
                break;
            case ef.invalid_intersection_types:
                n = "Intersection results could not be merged";
                break;
            case ef.not_multiple_of:
                n = `Number must be a multiple of ${e.multipleOf}`;
                break;
            case ef.not_finite:
                n = "Number must be finite";
                break;
            default:
                n = t.defaultError,
                P.assertNever(e)
            }
            return {
                message: n
            }
        }
          , em = ep;
        function ex() {
            return em
        }
        let eg = e => {
            let {data: t, path: n, errorMaps: r, issueData: a} = e
              , i = [...n, ...a.path || []]
              , o = {
                ...a,
                path: i
            };
            if (void 0 !== a.message)
                return {
                    ...a,
                    path: i,
                    message: a.message
                };
            let s = "";
            for (let e of r.filter(e => !!e).slice().reverse())
                s = e(o, {
                    data: t,
                    defaultError: s
                }).message;
            return {
                ...a,
                path: i,
                message: s
            }
        }
        ;
        function ev(e, t) {
            let n = ex()
              , r = eg({
                issueData: t,
                data: e.data,
                path: e.path,
                errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === ep ? void 0 : ep].filter(e => !!e)
            });
            e.common.issues.push(r)
        }
        class ey {
            constructor() {
                this.value = "valid"
            }
            dirty() {
                "valid" === this.value && (this.value = "dirty")
            }
            abort() {
                "aborted" !== this.value && (this.value = "aborted")
            }
            static mergeArray(e, t) {
                let n = [];
                for (let r of t) {
                    if ("aborted" === r.status)
                        return eb;
                    "dirty" === r.status && e.dirty(),
                    n.push(r.value)
                }
                return {
                    status: e.value,
                    value: n
                }
            }
            static async mergeObjectAsync(e, t) {
                let n = [];
                for (let e of t) {
                    let t = await e.key
                      , r = await e.value;
                    n.push({
                        key: t,
                        value: r
                    })
                }
                return ey.mergeObjectSync(e, n)
            }
            static mergeObjectSync(e, t) {
                let n = {};
                for (let r of t) {
                    let {key: t, value: a} = r;
                    if ("aborted" === t.status || "aborted" === a.status)
                        return eb;
                    "dirty" === t.status && e.dirty(),
                    "dirty" === a.status && e.dirty(),
                    "__proto__" !== t.value && (void 0 !== a.value || r.alwaysSet) && (n[t.value] = a.value)
                }
                return {
                    status: e.value,
                    value: n
                }
            }
        }
        let eb = Object.freeze({
            status: "aborted"
        })
          , ew = e => ({
            status: "dirty",
            value: e
        })
          , ek = e => ({
            status: "valid",
            value: e
        })
          , e_ = e => "aborted" === e.status
          , ej = e => "dirty" === e.status
          , eE = e => "valid" === e.status
          , eO = e => "undefined" != typeof Promise && e instanceof Promise;
        function eC(e, t, n, r) {
            if ("a" === n && !r)
                throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        }
        function eT(e, t, n, r, a) {
            if ("m" === r)
                throw TypeError("Private method is not writable");
            if ("a" === r && !a)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !a : !t.has(e))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? a.call(e, n) : a ? a.value = n : t.set(e, n),
            n
        }
        "function" == typeof SuppressedError && SuppressedError,
        (C = M || (M = {})).errToObj = e => "string" == typeof e ? {
            message: e
        } : e || {},
        C.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;
        class eS {
            constructor(e, t, n, r) {
                this._cachedPath = [],
                this.parent = e,
                this.data = t,
                this._path = n,
                this._key = r
            }
            get path() {
                return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
                this._cachedPath
            }
        }
        let eN = (e, t) => {
            if (eE(t))
                return {
                    success: !0,
                    data: t.value
                };
            if (!e.common.issues.length)
                throw Error("Validation failed but no issues detected.");
            return {
                success: !1,
                get error() {
                    if (this._error)
                        return this._error;
                    let t = new eh(e.common.issues);
                    return this._error = t,
                    this._error
                }
            }
        }
        ;
        function eI(e) {
            if (!e)
                return {};
            let {errorMap: t, invalid_type_error: n, required_error: r, description: a} = e;
            if (t && (n || r))
                throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
            return t ? {
                errorMap: t,
                description: a
            } : {
                errorMap: (t, a) => {
                    var i, o;
                    let {message: s} = e;
                    return "invalid_enum_value" === t.code ? {
                        message: null != s ? s : a.defaultError
                    } : void 0 === a.data ? {
                        message: null !== (i = null != s ? s : r) && void 0 !== i ? i : a.defaultError
                    } : "invalid_type" !== t.code ? {
                        message: a.defaultError
                    } : {
                        message: null !== (o = null != s ? s : n) && void 0 !== o ? o : a.defaultError
                    }
                }
                ,
                description: a
            }
        }
        class eR {
            constructor(e) {
                this.spa = this.safeParseAsync,
                this._def = e,
                this.parse = this.parse.bind(this),
                this.safeParse = this.safeParse.bind(this),
                this.parseAsync = this.parseAsync.bind(this),
                this.safeParseAsync = this.safeParseAsync.bind(this),
                this.spa = this.spa.bind(this),
                this.refine = this.refine.bind(this),
                this.refinement = this.refinement.bind(this),
                this.superRefine = this.superRefine.bind(this),
                this.optional = this.optional.bind(this),
                this.nullable = this.nullable.bind(this),
                this.nullish = this.nullish.bind(this),
                this.array = this.array.bind(this),
                this.promise = this.promise.bind(this),
                this.or = this.or.bind(this),
                this.and = this.and.bind(this),
                this.transform = this.transform.bind(this),
                this.brand = this.brand.bind(this),
                this.default = this.default.bind(this),
                this.catch = this.catch.bind(this),
                this.describe = this.describe.bind(this),
                this.pipe = this.pipe.bind(this),
                this.readonly = this.readonly.bind(this),
                this.isNullable = this.isNullable.bind(this),
                this.isOptional = this.isOptional.bind(this)
            }
            get description() {
                return this._def.description
            }
            _getType(e) {
                return ed(e.data)
            }
            _getOrReturnCtx(e, t) {
                return t || {
                    common: e.parent.common,
                    data: e.data,
                    parsedType: ed(e.data),
                    schemaErrorMap: this._def.errorMap,
                    path: e.path,
                    parent: e.parent
                }
            }
            _processInputParams(e) {
                return {
                    status: new ey,
                    ctx: {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: ed(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    }
                }
            }
            _parseSync(e) {
                let t = this._parse(e);
                if (eO(t))
                    throw Error("Synchronous parse encountered promise.");
                return t
            }
            _parseAsync(e) {
                return Promise.resolve(this._parse(e))
            }
            parse(e, t) {
                let n = this.safeParse(e, t);
                if (n.success)
                    return n.data;
                throw n.error
            }
            safeParse(e, t) {
                var n;
                let r = {
                    common: {
                        issues: [],
                        async: null !== (n = null == t ? void 0 : t.async) && void 0 !== n && n,
                        contextualErrorMap: null == t ? void 0 : t.errorMap
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: ed(e)
                }
                  , a = this._parseSync({
                    data: e,
                    path: r.path,
                    parent: r
                });
                return eN(r, a)
            }
            async parseAsync(e, t) {
                let n = await this.safeParseAsync(e, t);
                if (n.success)
                    return n.data;
                throw n.error
            }
            async safeParseAsync(e, t) {
                let n = {
                    common: {
                        issues: [],
                        contextualErrorMap: null == t ? void 0 : t.errorMap,
                        async: !0
                    },
                    path: (null == t ? void 0 : t.path) || [],
                    schemaErrorMap: this._def.errorMap,
                    parent: null,
                    data: e,
                    parsedType: ed(e)
                }
                  , r = this._parse({
                    data: e,
                    path: n.path,
                    parent: n
                });
                return eN(n, await (eO(r) ? r : Promise.resolve(r)))
            }
            refine(e, t) {
                let n = e => "string" == typeof t || void 0 === t ? {
                    message: t
                } : "function" == typeof t ? t(e) : t;
                return this._refinement( (t, r) => {
                    let a = e(t)
                      , i = () => r.addIssue({
                        code: ef.custom,
                        ...n(t)
                    });
                    return "undefined" != typeof Promise && a instanceof Promise ? a.then(e => !!e || (i(),
                    !1)) : !!a || (i(),
                    !1)
                }
                )
            }
            refinement(e, t) {
                return this._refinement( (n, r) => !!e(n) || (r.addIssue("function" == typeof t ? t(n, r) : t),
                !1))
            }
            _refinement(e) {
                return new tf({
                    schema: this,
                    typeName: $.ZodEffects,
                    effect: {
                        type: "refinement",
                        refinement: e
                    }
                })
            }
            superRefine(e) {
                return this._refinement(e)
            }
            optional() {
                return th.create(this, this._def)
            }
            nullable() {
                return tp.create(this, this._def)
            }
            nullish() {
                return this.nullable().optional()
            }
            array() {
                return e3.create(this, this._def)
            }
            promise() {
                return td.create(this, this._def)
            }
            or(e) {
                return e6.create([this, e], this._def)
            }
            and(e) {
                return te.create(this, e, this._def)
            }
            transform(e) {
                return new tf({
                    ...eI(this._def),
                    schema: this,
                    typeName: $.ZodEffects,
                    effect: {
                        type: "transform",
                        transform: e
                    }
                })
            }
            default(e) {
                return new tm({
                    ...eI(this._def),
                    innerType: this,
                    defaultValue: "function" == typeof e ? e : () => e,
                    typeName: $.ZodDefault
                })
            }
            brand() {
                return new ty({
                    typeName: $.ZodBranded,
                    type: this,
                    ...eI(this._def)
                })
            }
            catch(e) {
                return new tx({
                    ...eI(this._def),
                    innerType: this,
                    catchValue: "function" == typeof e ? e : () => e,
                    typeName: $.ZodCatch
                })
            }
            describe(e) {
                return new this.constructor({
                    ...this._def,
                    description: e
                })
            }
            pipe(e) {
                return tb.create(this, e)
            }
            readonly() {
                return tw.create(this)
            }
            isOptional() {
                return this.safeParse(void 0).success
            }
            isNullable() {
                return this.safeParse(null).success
            }
        }
        let eA = /^c[^\s-]{8,}$/i
          , eP = /^[0-9a-z]+$/
          , eL = /^[0-9A-HJKMNP-TV-Z]{26}$/
          , eM = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
          , eD = /^[a-z0-9_-]{21}$/i
          , eF = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
          , e$ = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
          , eZ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
          , eU = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
          , eW = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
          , ez = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
          , eH = RegExp(`^${ez}$`);
        function eG(e) {
            let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
            return e.precision ? t = `${t}\\.\\d{${e.precision}}` : null == e.precision && (t = `${t}(\\.\\d+)?`),
            t
        }
        function eB(e) {
            let t = `${ez}T${eG(e)}`
              , n = [];
            return n.push(e.local ? "Z?" : "Z"),
            e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
            t = `${t}(${n.join("|")})`,
            RegExp(`^${t}$`)
        }
        class eV extends eR {
            _parse(e) {
                var t, n;
                let a;
                if (this._def.coerce && (e.data = String(e.data)),
                this._getType(e) !== ec.string) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.string,
                        received: t.parsedType
                    }),
                    eb
                }
                let i = new ey;
                for (let o of this._def.checks)
                    if ("min" === o.kind)
                        e.data.length < o.value && (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.too_small,
                            minimum: o.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("max" === o.kind)
                        e.data.length > o.value && (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.too_big,
                            maximum: o.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("length" === o.kind) {
                        let t = e.data.length > o.value
                          , n = e.data.length < o.value;
                        (t || n) && (a = this._getOrReturnCtx(e, a),
                        t ? ev(a, {
                            code: ef.too_big,
                            maximum: o.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: o.message
                        }) : n && ev(a, {
                            code: ef.too_small,
                            minimum: o.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: o.message
                        }),
                        i.dirty())
                    } else if ("email" === o.kind)
                        e$.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "email",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("emoji" === o.kind)
                        r || (r = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")),
                        r.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "emoji",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("uuid" === o.kind)
                        eM.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "uuid",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("nanoid" === o.kind)
                        eD.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "nanoid",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("cuid" === o.kind)
                        eA.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "cuid",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("cuid2" === o.kind)
                        eP.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "cuid2",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("ulid" === o.kind)
                        eL.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "ulid",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty());
                    else if ("url" === o.kind)
                        try {
                            new URL(e.data)
                        } catch (t) {
                            ev(a = this._getOrReturnCtx(e, a), {
                                validation: "url",
                                code: ef.invalid_string,
                                message: o.message
                            }),
                            i.dirty()
                        }
                    else
                        "regex" === o.kind ? (o.regex.lastIndex = 0,
                        o.regex.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "regex",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty())) : "trim" === o.kind ? e.data = e.data.trim() : "includes" === o.kind ? e.data.includes(o.value, o.position) || (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.invalid_string,
                            validation: {
                                includes: o.value,
                                position: o.position
                            },
                            message: o.message
                        }),
                        i.dirty()) : "toLowerCase" === o.kind ? e.data = e.data.toLowerCase() : "toUpperCase" === o.kind ? e.data = e.data.toUpperCase() : "startsWith" === o.kind ? e.data.startsWith(o.value) || (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.invalid_string,
                            validation: {
                                startsWith: o.value
                            },
                            message: o.message
                        }),
                        i.dirty()) : "endsWith" === o.kind ? e.data.endsWith(o.value) || (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.invalid_string,
                            validation: {
                                endsWith: o.value
                            },
                            message: o.message
                        }),
                        i.dirty()) : "datetime" === o.kind ? eB(o).test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.invalid_string,
                            validation: "datetime",
                            message: o.message
                        }),
                        i.dirty()) : "date" === o.kind ? eH.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.invalid_string,
                            validation: "date",
                            message: o.message
                        }),
                        i.dirty()) : "time" === o.kind ? RegExp(`^${eG(o)}$`).test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            code: ef.invalid_string,
                            validation: "time",
                            message: o.message
                        }),
                        i.dirty()) : "duration" === o.kind ? eF.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "duration",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty()) : "ip" === o.kind ? (t = e.data,
                        ("v4" === (n = o.version) || !n) && eZ.test(t) || ("v6" === n || !n) && eU.test(t) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "ip",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty())) : "base64" === o.kind ? eW.test(e.data) || (ev(a = this._getOrReturnCtx(e, a), {
                            validation: "base64",
                            code: ef.invalid_string,
                            message: o.message
                        }),
                        i.dirty()) : P.assertNever(o);
                return {
                    status: i.value,
                    value: e.data
                }
            }
            _regex(e, t, n) {
                return this.refinement(t => e.test(t), {
                    validation: t,
                    code: ef.invalid_string,
                    ...M.errToObj(n)
                })
            }
            _addCheck(e) {
                return new eV({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            email(e) {
                return this._addCheck({
                    kind: "email",
                    ...M.errToObj(e)
                })
            }
            url(e) {
                return this._addCheck({
                    kind: "url",
                    ...M.errToObj(e)
                })
            }
            emoji(e) {
                return this._addCheck({
                    kind: "emoji",
                    ...M.errToObj(e)
                })
            }
            uuid(e) {
                return this._addCheck({
                    kind: "uuid",
                    ...M.errToObj(e)
                })
            }
            nanoid(e) {
                return this._addCheck({
                    kind: "nanoid",
                    ...M.errToObj(e)
                })
            }
            cuid(e) {
                return this._addCheck({
                    kind: "cuid",
                    ...M.errToObj(e)
                })
            }
            cuid2(e) {
                return this._addCheck({
                    kind: "cuid2",
                    ...M.errToObj(e)
                })
            }
            ulid(e) {
                return this._addCheck({
                    kind: "ulid",
                    ...M.errToObj(e)
                })
            }
            base64(e) {
                return this._addCheck({
                    kind: "base64",
                    ...M.errToObj(e)
                })
            }
            ip(e) {
                return this._addCheck({
                    kind: "ip",
                    ...M.errToObj(e)
                })
            }
            datetime(e) {
                var t, n;
                return "string" == typeof e ? this._addCheck({
                    kind: "datetime",
                    precision: null,
                    offset: !1,
                    local: !1,
                    message: e
                }) : this._addCheck({
                    kind: "datetime",
                    precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                    offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                    local: null !== (n = null == e ? void 0 : e.local) && void 0 !== n && n,
                    ...M.errToObj(null == e ? void 0 : e.message)
                })
            }
            date(e) {
                return this._addCheck({
                    kind: "date",
                    message: e
                })
            }
            time(e) {
                return "string" == typeof e ? this._addCheck({
                    kind: "time",
                    precision: null,
                    message: e
                }) : this._addCheck({
                    kind: "time",
                    precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                    ...M.errToObj(null == e ? void 0 : e.message)
                })
            }
            duration(e) {
                return this._addCheck({
                    kind: "duration",
                    ...M.errToObj(e)
                })
            }
            regex(e, t) {
                return this._addCheck({
                    kind: "regex",
                    regex: e,
                    ...M.errToObj(t)
                })
            }
            includes(e, t) {
                return this._addCheck({
                    kind: "includes",
                    value: e,
                    position: null == t ? void 0 : t.position,
                    ...M.errToObj(null == t ? void 0 : t.message)
                })
            }
            startsWith(e, t) {
                return this._addCheck({
                    kind: "startsWith",
                    value: e,
                    ...M.errToObj(t)
                })
            }
            endsWith(e, t) {
                return this._addCheck({
                    kind: "endsWith",
                    value: e,
                    ...M.errToObj(t)
                })
            }
            min(e, t) {
                return this._addCheck({
                    kind: "min",
                    value: e,
                    ...M.errToObj(t)
                })
            }
            max(e, t) {
                return this._addCheck({
                    kind: "max",
                    value: e,
                    ...M.errToObj(t)
                })
            }
            length(e, t) {
                return this._addCheck({
                    kind: "length",
                    value: e,
                    ...M.errToObj(t)
                })
            }
            nonempty(e) {
                return this.min(1, M.errToObj(e))
            }
            trim() {
                return new eV({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "trim"
                    }]
                })
            }
            toLowerCase() {
                return new eV({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "toLowerCase"
                    }]
                })
            }
            toUpperCase() {
                return new eV({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: "toUpperCase"
                    }]
                })
            }
            get isDatetime() {
                return !!this._def.checks.find(e => "datetime" === e.kind)
            }
            get isDate() {
                return !!this._def.checks.find(e => "date" === e.kind)
            }
            get isTime() {
                return !!this._def.checks.find(e => "time" === e.kind)
            }
            get isDuration() {
                return !!this._def.checks.find(e => "duration" === e.kind)
            }
            get isEmail() {
                return !!this._def.checks.find(e => "email" === e.kind)
            }
            get isURL() {
                return !!this._def.checks.find(e => "url" === e.kind)
            }
            get isEmoji() {
                return !!this._def.checks.find(e => "emoji" === e.kind)
            }
            get isUUID() {
                return !!this._def.checks.find(e => "uuid" === e.kind)
            }
            get isNANOID() {
                return !!this._def.checks.find(e => "nanoid" === e.kind)
            }
            get isCUID() {
                return !!this._def.checks.find(e => "cuid" === e.kind)
            }
            get isCUID2() {
                return !!this._def.checks.find(e => "cuid2" === e.kind)
            }
            get isULID() {
                return !!this._def.checks.find(e => "ulid" === e.kind)
            }
            get isIP() {
                return !!this._def.checks.find(e => "ip" === e.kind)
            }
            get isBase64() {
                return !!this._def.checks.find(e => "base64" === e.kind)
            }
            get minLength() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxLength() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
        }
        eV.create = e => {
            var t;
            return new eV({
                checks: [],
                typeName: $.ZodString,
                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                ...eI(e)
            })
        }
        ;
        class eq extends eR {
            constructor() {
                super(...arguments),
                this.min = this.gte,
                this.max = this.lte,
                this.step = this.multipleOf
            }
            _parse(e) {
                let t;
                if (this._def.coerce && (e.data = Number(e.data)),
                this._getType(e) !== ec.number) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.number,
                        received: t.parsedType
                    }),
                    eb
                }
                let n = new ey;
                for (let r of this._def.checks)
                    "int" === r.kind ? P.isInteger(e.data) || (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: r.message
                    }),
                    n.dirty()) : "min" === r.kind ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.too_small,
                        minimum: r.value,
                        type: "number",
                        inclusive: r.inclusive,
                        exact: !1,
                        message: r.message
                    }),
                    n.dirty()) : "max" === r.kind ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.too_big,
                        maximum: r.value,
                        type: "number",
                        inclusive: r.inclusive,
                        exact: !1,
                        message: r.message
                    }),
                    n.dirty()) : "multipleOf" === r.kind ? 0 !== function(e, t) {
                        let n = (e.toString().split(".")[1] || "").length
                          , r = (t.toString().split(".")[1] || "").length
                          , a = n > r ? n : r;
                        return parseInt(e.toFixed(a).replace(".", "")) % parseInt(t.toFixed(a).replace(".", "")) / Math.pow(10, a)
                    }(e.data, r.value) && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.not_multiple_of,
                        multipleOf: r.value,
                        message: r.message
                    }),
                    n.dirty()) : "finite" === r.kind ? Number.isFinite(e.data) || (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.not_finite,
                        message: r.message
                    }),
                    n.dirty()) : P.assertNever(r);
                return {
                    status: n.value,
                    value: e.data
                }
            }
            gte(e, t) {
                return this.setLimit("min", e, !0, M.toString(t))
            }
            gt(e, t) {
                return this.setLimit("min", e, !1, M.toString(t))
            }
            lte(e, t) {
                return this.setLimit("max", e, !0, M.toString(t))
            }
            lt(e, t) {
                return this.setLimit("max", e, !1, M.toString(t))
            }
            setLimit(e, t, n, r) {
                return new eq({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: e,
                        value: t,
                        inclusive: n,
                        message: M.toString(r)
                    }]
                })
            }
            _addCheck(e) {
                return new eq({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            int(e) {
                return this._addCheck({
                    kind: "int",
                    message: M.toString(e)
                })
            }
            positive(e) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !1,
                    message: M.toString(e)
                })
            }
            negative(e) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !1,
                    message: M.toString(e)
                })
            }
            nonpositive(e) {
                return this._addCheck({
                    kind: "max",
                    value: 0,
                    inclusive: !0,
                    message: M.toString(e)
                })
            }
            nonnegative(e) {
                return this._addCheck({
                    kind: "min",
                    value: 0,
                    inclusive: !0,
                    message: M.toString(e)
                })
            }
            multipleOf(e, t) {
                return this._addCheck({
                    kind: "multipleOf",
                    value: e,
                    message: M.toString(t)
                })
            }
            finite(e) {
                return this._addCheck({
                    kind: "finite",
                    message: M.toString(e)
                })
            }
            safe(e) {
                return this._addCheck({
                    kind: "min",
                    inclusive: !0,
                    value: Number.MIN_SAFE_INTEGER,
                    message: M.toString(e)
                })._addCheck({
                    kind: "max",
                    inclusive: !0,
                    value: Number.MAX_SAFE_INTEGER,
                    message: M.toString(e)
                })
            }
            get minValue() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxValue() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
            get isInt() {
                return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && P.isInteger(e.value))
            }
            get isFinite() {
                let e = null
                  , t = null;
                for (let n of this._def.checks) {
                    if ("finite" === n.kind || "int" === n.kind || "multipleOf" === n.kind)
                        return !0;
                    "min" === n.kind ? (null === t || n.value > t) && (t = n.value) : "max" === n.kind && (null === e || n.value < e) && (e = n.value)
                }
                return Number.isFinite(t) && Number.isFinite(e)
            }
        }
        eq.create = e => new eq({
            checks: [],
            typeName: $.ZodNumber,
            coerce: (null == e ? void 0 : e.coerce) || !1,
            ...eI(e)
        });
        class eK extends eR {
            constructor() {
                super(...arguments),
                this.min = this.gte,
                this.max = this.lte
            }
            _parse(e) {
                let t;
                if (this._def.coerce && (e.data = BigInt(e.data)),
                this._getType(e) !== ec.bigint) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.bigint,
                        received: t.parsedType
                    }),
                    eb
                }
                let n = new ey;
                for (let r of this._def.checks)
                    "min" === r.kind ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.too_small,
                        type: "bigint",
                        minimum: r.value,
                        inclusive: r.inclusive,
                        message: r.message
                    }),
                    n.dirty()) : "max" === r.kind ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.too_big,
                        type: "bigint",
                        maximum: r.value,
                        inclusive: r.inclusive,
                        message: r.message
                    }),
                    n.dirty()) : "multipleOf" === r.kind ? e.data % r.value !== BigInt(0) && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.not_multiple_of,
                        multipleOf: r.value,
                        message: r.message
                    }),
                    n.dirty()) : P.assertNever(r);
                return {
                    status: n.value,
                    value: e.data
                }
            }
            gte(e, t) {
                return this.setLimit("min", e, !0, M.toString(t))
            }
            gt(e, t) {
                return this.setLimit("min", e, !1, M.toString(t))
            }
            lte(e, t) {
                return this.setLimit("max", e, !0, M.toString(t))
            }
            lt(e, t) {
                return this.setLimit("max", e, !1, M.toString(t))
            }
            setLimit(e, t, n, r) {
                return new eK({
                    ...this._def,
                    checks: [...this._def.checks, {
                        kind: e,
                        value: t,
                        inclusive: n,
                        message: M.toString(r)
                    }]
                })
            }
            _addCheck(e) {
                return new eK({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            positive(e) {
                return this._addCheck({
                    kind: "min",
                    value: BigInt(0),
                    inclusive: !1,
                    message: M.toString(e)
                })
            }
            negative(e) {
                return this._addCheck({
                    kind: "max",
                    value: BigInt(0),
                    inclusive: !1,
                    message: M.toString(e)
                })
            }
            nonpositive(e) {
                return this._addCheck({
                    kind: "max",
                    value: BigInt(0),
                    inclusive: !0,
                    message: M.toString(e)
                })
            }
            nonnegative(e) {
                return this._addCheck({
                    kind: "min",
                    value: BigInt(0),
                    inclusive: !0,
                    message: M.toString(e)
                })
            }
            multipleOf(e, t) {
                return this._addCheck({
                    kind: "multipleOf",
                    value: e,
                    message: M.toString(t)
                })
            }
            get minValue() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return e
            }
            get maxValue() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return e
            }
        }
        eK.create = e => {
            var t;
            return new eK({
                checks: [],
                typeName: $.ZodBigInt,
                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                ...eI(e)
            })
        }
        ;
        class eQ extends eR {
            _parse(e) {
                if (this._def.coerce && (e.data = !!e.data),
                this._getType(e) !== ec.boolean) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.boolean,
                        received: t.parsedType
                    }),
                    eb
                }
                return ek(e.data)
            }
        }
        eQ.create = e => new eQ({
            typeName: $.ZodBoolean,
            coerce: (null == e ? void 0 : e.coerce) || !1,
            ...eI(e)
        });
        class eJ extends eR {
            _parse(e) {
                let t;
                if (this._def.coerce && (e.data = new Date(e.data)),
                this._getType(e) !== ec.date) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.date,
                        received: t.parsedType
                    }),
                    eb
                }
                if (isNaN(e.data.getTime()))
                    return ev(this._getOrReturnCtx(e), {
                        code: ef.invalid_date
                    }),
                    eb;
                let n = new ey;
                for (let r of this._def.checks)
                    "min" === r.kind ? e.data.getTime() < r.value && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.too_small,
                        message: r.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: r.value,
                        type: "date"
                    }),
                    n.dirty()) : "max" === r.kind ? e.data.getTime() > r.value && (ev(t = this._getOrReturnCtx(e, t), {
                        code: ef.too_big,
                        message: r.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: r.value,
                        type: "date"
                    }),
                    n.dirty()) : P.assertNever(r);
                return {
                    status: n.value,
                    value: new Date(e.data.getTime())
                }
            }
            _addCheck(e) {
                return new eJ({
                    ...this._def,
                    checks: [...this._def.checks, e]
                })
            }
            min(e, t) {
                return this._addCheck({
                    kind: "min",
                    value: e.getTime(),
                    message: M.toString(t)
                })
            }
            max(e, t) {
                return this._addCheck({
                    kind: "max",
                    value: e.getTime(),
                    message: M.toString(t)
                })
            }
            get minDate() {
                let e = null;
                for (let t of this._def.checks)
                    "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                return null != e ? new Date(e) : null
            }
            get maxDate() {
                let e = null;
                for (let t of this._def.checks)
                    "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                return null != e ? new Date(e) : null
            }
        }
        eJ.create = e => new eJ({
            checks: [],
            coerce: (null == e ? void 0 : e.coerce) || !1,
            typeName: $.ZodDate,
            ...eI(e)
        });
        class eY extends eR {
            _parse(e) {
                if (this._getType(e) !== ec.symbol) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.symbol,
                        received: t.parsedType
                    }),
                    eb
                }
                return ek(e.data)
            }
        }
        eY.create = e => new eY({
            typeName: $.ZodSymbol,
            ...eI(e)
        });
        class eX extends eR {
            _parse(e) {
                if (this._getType(e) !== ec.undefined) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.undefined,
                        received: t.parsedType
                    }),
                    eb
                }
                return ek(e.data)
            }
        }
        eX.create = e => new eX({
            typeName: $.ZodUndefined,
            ...eI(e)
        });
        class e0 extends eR {
            _parse(e) {
                if (this._getType(e) !== ec.null) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.null,
                        received: t.parsedType
                    }),
                    eb
                }
                return ek(e.data)
            }
        }
        e0.create = e => new e0({
            typeName: $.ZodNull,
            ...eI(e)
        });
        class e1 extends eR {
            constructor() {
                super(...arguments),
                this._any = !0
            }
            _parse(e) {
                return ek(e.data)
            }
        }
        e1.create = e => new e1({
            typeName: $.ZodAny,
            ...eI(e)
        });
        class e2 extends eR {
            constructor() {
                super(...arguments),
                this._unknown = !0
            }
            _parse(e) {
                return ek(e.data)
            }
        }
        e2.create = e => new e2({
            typeName: $.ZodUnknown,
            ...eI(e)
        });
        class e4 extends eR {
            _parse(e) {
                let t = this._getOrReturnCtx(e);
                return ev(t, {
                    code: ef.invalid_type,
                    expected: ec.never,
                    received: t.parsedType
                }),
                eb
            }
        }
        e4.create = e => new e4({
            typeName: $.ZodNever,
            ...eI(e)
        });
        class e5 extends eR {
            _parse(e) {
                if (this._getType(e) !== ec.undefined) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.void,
                        received: t.parsedType
                    }),
                    eb
                }
                return ek(e.data)
            }
        }
        e5.create = e => new e5({
            typeName: $.ZodVoid,
            ...eI(e)
        });
        class e3 extends eR {
            _parse(e) {
                let {ctx: t, status: n} = this._processInputParams(e)
                  , r = this._def;
                if (t.parsedType !== ec.array)
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.array,
                        received: t.parsedType
                    }),
                    eb;
                if (null !== r.exactLength) {
                    let e = t.data.length > r.exactLength.value
                      , a = t.data.length < r.exactLength.value;
                    (e || a) && (ev(t, {
                        code: e ? ef.too_big : ef.too_small,
                        minimum: a ? r.exactLength.value : void 0,
                        maximum: e ? r.exactLength.value : void 0,
                        type: "array",
                        inclusive: !0,
                        exact: !0,
                        message: r.exactLength.message
                    }),
                    n.dirty())
                }
                if (null !== r.minLength && t.data.length < r.minLength.value && (ev(t, {
                    code: ef.too_small,
                    minimum: r.minLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: r.minLength.message
                }),
                n.dirty()),
                null !== r.maxLength && t.data.length > r.maxLength.value && (ev(t, {
                    code: ef.too_big,
                    maximum: r.maxLength.value,
                    type: "array",
                    inclusive: !0,
                    exact: !1,
                    message: r.maxLength.message
                }),
                n.dirty()),
                t.common.async)
                    return Promise.all([...t.data].map( (e, n) => r.type._parseAsync(new eS(t,e,t.path,n)))).then(e => ey.mergeArray(n, e));
                let a = [...t.data].map( (e, n) => r.type._parseSync(new eS(t,e,t.path,n)));
                return ey.mergeArray(n, a)
            }
            get element() {
                return this._def.type
            }
            min(e, t) {
                return new e3({
                    ...this._def,
                    minLength: {
                        value: e,
                        message: M.toString(t)
                    }
                })
            }
            max(e, t) {
                return new e3({
                    ...this._def,
                    maxLength: {
                        value: e,
                        message: M.toString(t)
                    }
                })
            }
            length(e, t) {
                return new e3({
                    ...this._def,
                    exactLength: {
                        value: e,
                        message: M.toString(t)
                    }
                })
            }
            nonempty(e) {
                return this.min(1, e)
            }
        }
        e3.create = (e, t) => new e3({
            type: e,
            minLength: null,
            maxLength: null,
            exactLength: null,
            typeName: $.ZodArray,
            ...eI(t)
        });
        class e7 extends eR {
            constructor() {
                super(...arguments),
                this._cached = null,
                this.nonstrict = this.passthrough,
                this.augment = this.extend
            }
            _getCached() {
                if (null !== this._cached)
                    return this._cached;
                let e = this._def.shape()
                  , t = P.objectKeys(e);
                return this._cached = {
                    shape: e,
                    keys: t
                }
            }
            _parse(e) {
                if (this._getType(e) !== ec.object) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.object,
                        received: t.parsedType
                    }),
                    eb
                }
                let {status: t, ctx: n} = this._processInputParams(e)
                  , {shape: r, keys: a} = this._getCached()
                  , i = [];
                if (!(this._def.catchall instanceof e4 && "strip" === this._def.unknownKeys))
                    for (let e in n.data)
                        a.includes(e) || i.push(e);
                let o = [];
                for (let e of a) {
                    let t = r[e]
                      , a = n.data[e];
                    o.push({
                        key: {
                            status: "valid",
                            value: e
                        },
                        value: t._parse(new eS(n,a,n.path,e)),
                        alwaysSet: e in n.data
                    })
                }
                if (this._def.catchall instanceof e4) {
                    let e = this._def.unknownKeys;
                    if ("passthrough" === e)
                        for (let e of i)
                            o.push({
                                key: {
                                    status: "valid",
                                    value: e
                                },
                                value: {
                                    status: "valid",
                                    value: n.data[e]
                                }
                            });
                    else if ("strict" === e)
                        i.length > 0 && (ev(n, {
                            code: ef.unrecognized_keys,
                            keys: i
                        }),
                        t.dirty());
                    else if ("strip" === e)
                        ;
                    else
                        throw Error("Internal ZodObject error: invalid unknownKeys value.")
                } else {
                    let e = this._def.catchall;
                    for (let t of i) {
                        let r = n.data[t];
                        o.push({
                            key: {
                                status: "valid",
                                value: t
                            },
                            value: e._parse(new eS(n,r,n.path,t)),
                            alwaysSet: t in n.data
                        })
                    }
                }
                return n.common.async ? Promise.resolve().then(async () => {
                    let e = [];
                    for (let t of o) {
                        let n = await t.key
                          , r = await t.value;
                        e.push({
                            key: n,
                            value: r,
                            alwaysSet: t.alwaysSet
                        })
                    }
                    return e
                }
                ).then(e => ey.mergeObjectSync(t, e)) : ey.mergeObjectSync(t, o)
            }
            get shape() {
                return this._def.shape()
            }
            strict(e) {
                return M.errToObj,
                new e7({
                    ...this._def,
                    unknownKeys: "strict",
                    ...void 0 !== e ? {
                        errorMap: (t, n) => {
                            var r, a, i, o;
                            let s = null !== (i = null === (a = (r = this._def).errorMap) || void 0 === a ? void 0 : a.call(r, t, n).message) && void 0 !== i ? i : n.defaultError;
                            return "unrecognized_keys" === t.code ? {
                                message: null !== (o = M.errToObj(e).message) && void 0 !== o ? o : s
                            } : {
                                message: s
                            }
                        }
                    } : {}
                })
            }
            strip() {
                return new e7({
                    ...this._def,
                    unknownKeys: "strip"
                })
            }
            passthrough() {
                return new e7({
                    ...this._def,
                    unknownKeys: "passthrough"
                })
            }
            extend(e) {
                return new e7({
                    ...this._def,
                    shape: () => ({
                        ...this._def.shape(),
                        ...e
                    })
                })
            }
            merge(e) {
                return new e7({
                    unknownKeys: e._def.unknownKeys,
                    catchall: e._def.catchall,
                    shape: () => ({
                        ...this._def.shape(),
                        ...e._def.shape()
                    }),
                    typeName: $.ZodObject
                })
            }
            setKey(e, t) {
                return this.augment({
                    [e]: t
                })
            }
            catchall(e) {
                return new e7({
                    ...this._def,
                    catchall: e
                })
            }
            pick(e) {
                let t = {};
                return P.objectKeys(e).forEach(n => {
                    e[n] && this.shape[n] && (t[n] = this.shape[n])
                }
                ),
                new e7({
                    ...this._def,
                    shape: () => t
                })
            }
            omit(e) {
                let t = {};
                return P.objectKeys(this.shape).forEach(n => {
                    e[n] || (t[n] = this.shape[n])
                }
                ),
                new e7({
                    ...this._def,
                    shape: () => t
                })
            }
            deepPartial() {
                return function e(t) {
                    if (t instanceof e7) {
                        let n = {};
                        for (let r in t.shape) {
                            let a = t.shape[r];
                            n[r] = th.create(e(a))
                        }
                        return new e7({
                            ...t._def,
                            shape: () => n
                        })
                    }
                    return t instanceof e3 ? new e3({
                        ...t._def,
                        type: e(t.element)
                    }) : t instanceof th ? th.create(e(t.unwrap())) : t instanceof tp ? tp.create(e(t.unwrap())) : t instanceof tt ? tt.create(t.items.map(t => e(t))) : t
                }(this)
            }
            partial(e) {
                let t = {};
                return P.objectKeys(this.shape).forEach(n => {
                    let r = this.shape[n];
                    e && !e[n] ? t[n] = r : t[n] = r.optional()
                }
                ),
                new e7({
                    ...this._def,
                    shape: () => t
                })
            }
            required(e) {
                let t = {};
                return P.objectKeys(this.shape).forEach(n => {
                    if (e && !e[n])
                        t[n] = this.shape[n];
                    else {
                        let e = this.shape[n];
                        for (; e instanceof th; )
                            e = e._def.innerType;
                        t[n] = e
                    }
                }
                ),
                new e7({
                    ...this._def,
                    shape: () => t
                })
            }
            keyof() {
                return tl(P.objectKeys(this.shape))
            }
        }
        e7.create = (e, t) => new e7({
            shape: () => e,
            unknownKeys: "strip",
            catchall: e4.create(),
            typeName: $.ZodObject,
            ...eI(t)
        }),
        e7.strictCreate = (e, t) => new e7({
            shape: () => e,
            unknownKeys: "strict",
            catchall: e4.create(),
            typeName: $.ZodObject,
            ...eI(t)
        }),
        e7.lazycreate = (e, t) => new e7({
            shape: e,
            unknownKeys: "strip",
            catchall: e4.create(),
            typeName: $.ZodObject,
            ...eI(t)
        });
        class e6 extends eR {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = this._def.options;
                if (t.common.async)
                    return Promise.all(n.map(async e => {
                        let n = {
                            ...t,
                            common: {
                                ...t.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await e._parseAsync({
                                data: t.data,
                                path: t.path,
                                parent: n
                            }),
                            ctx: n
                        }
                    }
                    )).then(function(e) {
                        for (let t of e)
                            if ("valid" === t.result.status)
                                return t.result;
                        for (let n of e)
                            if ("dirty" === n.result.status)
                                return t.common.issues.push(...n.ctx.common.issues),
                                n.result;
                        let n = e.map(e => new eh(e.ctx.common.issues));
                        return ev(t, {
                            code: ef.invalid_union,
                            unionErrors: n
                        }),
                        eb
                    });
                {
                    let e;
                    let r = [];
                    for (let a of n) {
                        let n = {
                            ...t,
                            common: {
                                ...t.common,
                                issues: []
                            },
                            parent: null
                        }
                          , i = a._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: n
                        });
                        if ("valid" === i.status)
                            return i;
                        "dirty" !== i.status || e || (e = {
                            result: i,
                            ctx: n
                        }),
                        n.common.issues.length && r.push(n.common.issues)
                    }
                    if (e)
                        return t.common.issues.push(...e.ctx.common.issues),
                        e.result;
                    let a = r.map(e => new eh(e));
                    return ev(t, {
                        code: ef.invalid_union,
                        unionErrors: a
                    }),
                    eb
                }
            }
            get options() {
                return this._def.options
            }
        }
        e6.create = (e, t) => new e6({
            options: e,
            typeName: $.ZodUnion,
            ...eI(t)
        });
        let e9 = e => {
            if (e instanceof to)
                return e9(e.schema);
            if (e instanceof tf)
                return e9(e.innerType());
            if (e instanceof ts)
                return [e.value];
            if (e instanceof tu)
                return e.options;
            if (e instanceof tc)
                return P.objectValues(e.enum);
            if (e instanceof tm)
                return e9(e._def.innerType);
            if (e instanceof eX)
                return [void 0];
            else if (e instanceof e0)
                return [null];
            else if (e instanceof th)
                return [void 0, ...e9(e.unwrap())];
            else if (e instanceof tp)
                return [null, ...e9(e.unwrap())];
            else if (e instanceof ty)
                return e9(e.unwrap());
            else if (e instanceof tw)
                return e9(e.unwrap());
            else if (e instanceof tx)
                return e9(e._def.innerType);
            else
                return []
        }
        ;
        class e8 extends eR {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                if (t.parsedType !== ec.object)
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.object,
                        received: t.parsedType
                    }),
                    eb;
                let n = this.discriminator
                  , r = t.data[n]
                  , a = this.optionsMap.get(r);
                return a ? t.common.async ? a._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: t
                }) : a._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: t
                }) : (ev(t, {
                    code: ef.invalid_union_discriminator,
                    options: Array.from(this.optionsMap.keys()),
                    path: [n]
                }),
                eb)
            }
            get discriminator() {
                return this._def.discriminator
            }
            get options() {
                return this._def.options
            }
            get optionsMap() {
                return this._def.optionsMap
            }
            static create(e, t, n) {
                let r = new Map;
                for (let n of t) {
                    let t = e9(n.shape[e]);
                    if (!t.length)
                        throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                    for (let a of t) {
                        if (r.has(a))
                            throw Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                        r.set(a, n)
                    }
                }
                return new e8({
                    typeName: $.ZodDiscriminatedUnion,
                    discriminator: e,
                    options: t,
                    optionsMap: r,
                    ...eI(n)
                })
            }
        }
        class te extends eR {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e)
                  , r = (e, r) => {
                    if (e_(e) || e_(r))
                        return eb;
                    let a = function e(t, n) {
                        let r = ed(t)
                          , a = ed(n);
                        if (t === n)
                            return {
                                valid: !0,
                                data: t
                            };
                        if (r === ec.object && a === ec.object) {
                            let r = P.objectKeys(n)
                              , a = P.objectKeys(t).filter(e => -1 !== r.indexOf(e))
                              , i = {
                                ...t,
                                ...n
                            };
                            for (let r of a) {
                                let a = e(t[r], n[r]);
                                if (!a.valid)
                                    return {
                                        valid: !1
                                    };
                                i[r] = a.data
                            }
                            return {
                                valid: !0,
                                data: i
                            }
                        }
                        if (r === ec.array && a === ec.array) {
                            if (t.length !== n.length)
                                return {
                                    valid: !1
                                };
                            let r = [];
                            for (let a = 0; a < t.length; a++) {
                                let i = e(t[a], n[a]);
                                if (!i.valid)
                                    return {
                                        valid: !1
                                    };
                                r.push(i.data)
                            }
                            return {
                                valid: !0,
                                data: r
                            }
                        }
                        return r === ec.date && a === ec.date && +t == +n ? {
                            valid: !0,
                            data: t
                        } : {
                            valid: !1
                        }
                    }(e.value, r.value);
                    return a.valid ? ((ej(e) || ej(r)) && t.dirty(),
                    {
                        status: t.value,
                        value: a.data
                    }) : (ev(n, {
                        code: ef.invalid_intersection_types
                    }),
                    eb)
                }
                ;
                return n.common.async ? Promise.all([this._def.left._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }), this._def.right._parseAsync({
                    data: n.data,
                    path: n.path,
                    parent: n
                })]).then( ([e,t]) => r(e, t)) : r(this._def.left._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }), this._def.right._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: n
                }))
            }
        }
        te.create = (e, t, n) => new te({
            left: e,
            right: t,
            typeName: $.ZodIntersection,
            ...eI(n)
        });
        class tt extends eR {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== ec.array)
                    return ev(n, {
                        code: ef.invalid_type,
                        expected: ec.array,
                        received: n.parsedType
                    }),
                    eb;
                if (n.data.length < this._def.items.length)
                    return ev(n, {
                        code: ef.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }),
                    eb;
                !this._def.rest && n.data.length > this._def.items.length && (ev(n, {
                    code: ef.too_big,
                    maximum: this._def.items.length,
                    inclusive: !0,
                    exact: !1,
                    type: "array"
                }),
                t.dirty());
                let r = [...n.data].map( (e, t) => {
                    let r = this._def.items[t] || this._def.rest;
                    return r ? r._parse(new eS(n,e,n.path,t)) : null
                }
                ).filter(e => !!e);
                return n.common.async ? Promise.all(r).then(e => ey.mergeArray(t, e)) : ey.mergeArray(t, r)
            }
            get items() {
                return this._def.items
            }
            rest(e) {
                return new tt({
                    ...this._def,
                    rest: e
                })
            }
        }
        tt.create = (e, t) => {
            if (!Array.isArray(e))
                throw Error("You must pass an array of schemas to z.tuple([ ... ])");
            return new tt({
                items: e,
                typeName: $.ZodTuple,
                rest: null,
                ...eI(t)
            })
        }
        ;
        class tn extends eR {
            get keySchema() {
                return this._def.keyType
            }
            get valueSchema() {
                return this._def.valueType
            }
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== ec.object)
                    return ev(n, {
                        code: ef.invalid_type,
                        expected: ec.object,
                        received: n.parsedType
                    }),
                    eb;
                let r = []
                  , a = this._def.keyType
                  , i = this._def.valueType;
                for (let e in n.data)
                    r.push({
                        key: a._parse(new eS(n,e,n.path,e)),
                        value: i._parse(new eS(n,n.data[e],n.path,e)),
                        alwaysSet: e in n.data
                    });
                return n.common.async ? ey.mergeObjectAsync(t, r) : ey.mergeObjectSync(t, r)
            }
            get element() {
                return this._def.valueType
            }
            static create(e, t, n) {
                return new tn(t instanceof eR ? {
                    keyType: e,
                    valueType: t,
                    typeName: $.ZodRecord,
                    ...eI(n)
                } : {
                    keyType: eV.create(),
                    valueType: e,
                    typeName: $.ZodRecord,
                    ...eI(t)
                })
            }
        }
        class tr extends eR {
            get keySchema() {
                return this._def.keyType
            }
            get valueSchema() {
                return this._def.valueType
            }
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== ec.map)
                    return ev(n, {
                        code: ef.invalid_type,
                        expected: ec.map,
                        received: n.parsedType
                    }),
                    eb;
                let r = this._def.keyType
                  , a = this._def.valueType
                  , i = [...n.data.entries()].map( ([e,t], i) => ({
                    key: r._parse(new eS(n,e,n.path,[i, "key"])),
                    value: a._parse(new eS(n,t,n.path,[i, "value"]))
                }));
                if (n.common.async) {
                    let e = new Map;
                    return Promise.resolve().then(async () => {
                        for (let n of i) {
                            let r = await n.key
                              , a = await n.value;
                            if ("aborted" === r.status || "aborted" === a.status)
                                return eb;
                            ("dirty" === r.status || "dirty" === a.status) && t.dirty(),
                            e.set(r.value, a.value)
                        }
                        return {
                            status: t.value,
                            value: e
                        }
                    }
                    )
                }
                {
                    let e = new Map;
                    for (let n of i) {
                        let r = n.key
                          , a = n.value;
                        if ("aborted" === r.status || "aborted" === a.status)
                            return eb;
                        ("dirty" === r.status || "dirty" === a.status) && t.dirty(),
                        e.set(r.value, a.value)
                    }
                    return {
                        status: t.value,
                        value: e
                    }
                }
            }
        }
        tr.create = (e, t, n) => new tr({
            valueType: t,
            keyType: e,
            typeName: $.ZodMap,
            ...eI(n)
        });
        class ta extends eR {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.parsedType !== ec.set)
                    return ev(n, {
                        code: ef.invalid_type,
                        expected: ec.set,
                        received: n.parsedType
                    }),
                    eb;
                let r = this._def;
                null !== r.minSize && n.data.size < r.minSize.value && (ev(n, {
                    code: ef.too_small,
                    minimum: r.minSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: r.minSize.message
                }),
                t.dirty()),
                null !== r.maxSize && n.data.size > r.maxSize.value && (ev(n, {
                    code: ef.too_big,
                    maximum: r.maxSize.value,
                    type: "set",
                    inclusive: !0,
                    exact: !1,
                    message: r.maxSize.message
                }),
                t.dirty());
                let a = this._def.valueType;
                function i(e) {
                    let n = new Set;
                    for (let r of e) {
                        if ("aborted" === r.status)
                            return eb;
                        "dirty" === r.status && t.dirty(),
                        n.add(r.value)
                    }
                    return {
                        status: t.value,
                        value: n
                    }
                }
                let o = [...n.data.values()].map( (e, t) => a._parse(new eS(n,e,n.path,t)));
                return n.common.async ? Promise.all(o).then(e => i(e)) : i(o)
            }
            min(e, t) {
                return new ta({
                    ...this._def,
                    minSize: {
                        value: e,
                        message: M.toString(t)
                    }
                })
            }
            max(e, t) {
                return new ta({
                    ...this._def,
                    maxSize: {
                        value: e,
                        message: M.toString(t)
                    }
                })
            }
            size(e, t) {
                return this.min(e, t).max(e, t)
            }
            nonempty(e) {
                return this.min(1, e)
            }
        }
        ta.create = (e, t) => new ta({
            valueType: e,
            minSize: null,
            maxSize: null,
            typeName: $.ZodSet,
            ...eI(t)
        });
        class ti extends eR {
            constructor() {
                super(...arguments),
                this.validate = this.implement
            }
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                if (t.parsedType !== ec.function)
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.function,
                        received: t.parsedType
                    }),
                    eb;
                function n(e, n) {
                    return eg({
                        data: e,
                        path: t.path,
                        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ex(), ep].filter(e => !!e),
                        issueData: {
                            code: ef.invalid_arguments,
                            argumentsError: n
                        }
                    })
                }
                function r(e, n) {
                    return eg({
                        data: e,
                        path: t.path,
                        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ex(), ep].filter(e => !!e),
                        issueData: {
                            code: ef.invalid_return_type,
                            returnTypeError: n
                        }
                    })
                }
                let a = {
                    errorMap: t.common.contextualErrorMap
                }
                  , i = t.data;
                if (this._def.returns instanceof td) {
                    let e = this;
                    return ek(async function(...t) {
                        let o = new eh([])
                          , s = await e._def.args.parseAsync(t, a).catch(e => {
                            throw o.addIssue(n(t, e)),
                            o
                        }
                        )
                          , l = await Reflect.apply(i, this, s);
                        return await e._def.returns._def.type.parseAsync(l, a).catch(e => {
                            throw o.addIssue(r(l, e)),
                            o
                        }
                        )
                    })
                }
                {
                    let e = this;
                    return ek(function(...t) {
                        let o = e._def.args.safeParse(t, a);
                        if (!o.success)
                            throw new eh([n(t, o.error)]);
                        let s = Reflect.apply(i, this, o.data)
                          , l = e._def.returns.safeParse(s, a);
                        if (!l.success)
                            throw new eh([r(s, l.error)]);
                        return l.data
                    })
                }
            }
            parameters() {
                return this._def.args
            }
            returnType() {
                return this._def.returns
            }
            args(...e) {
                return new ti({
                    ...this._def,
                    args: tt.create(e).rest(e2.create())
                })
            }
            returns(e) {
                return new ti({
                    ...this._def,
                    returns: e
                })
            }
            implement(e) {
                return this.parse(e)
            }
            strictImplement(e) {
                return this.parse(e)
            }
            static create(e, t, n) {
                return new ti({
                    args: e || tt.create([]).rest(e2.create()),
                    returns: t || e2.create(),
                    typeName: $.ZodFunction,
                    ...eI(n)
                })
            }
        }
        class to extends eR {
            get schema() {
                return this._def.getter()
            }
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                return this._def.getter()._parse({
                    data: t.data,
                    path: t.path,
                    parent: t
                })
            }
        }
        to.create = (e, t) => new to({
            getter: e,
            typeName: $.ZodLazy,
            ...eI(t)
        });
        class ts extends eR {
            _parse(e) {
                if (e.data !== this._def.value) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        received: t.data,
                        code: ef.invalid_literal,
                        expected: this._def.value
                    }),
                    eb
                }
                return {
                    status: "valid",
                    value: e.data
                }
            }
            get value() {
                return this._def.value
            }
        }
        function tl(e, t) {
            return new tu({
                values: e,
                typeName: $.ZodEnum,
                ...eI(t)
            })
        }
        ts.create = (e, t) => new ts({
            value: e,
            typeName: $.ZodLiteral,
            ...eI(t)
        });
        class tu extends eR {
            constructor() {
                super(...arguments),
                D.set(this, void 0)
            }
            _parse(e) {
                if ("string" != typeof e.data) {
                    let t = this._getOrReturnCtx(e)
                      , n = this._def.values;
                    return ev(t, {
                        expected: P.joinValues(n),
                        received: t.parsedType,
                        code: ef.invalid_type
                    }),
                    eb
                }
                if (eC(this, D, "f") || eT(this, D, new Set(this._def.values), "f"),
                !eC(this, D, "f").has(e.data)) {
                    let t = this._getOrReturnCtx(e)
                      , n = this._def.values;
                    return ev(t, {
                        received: t.data,
                        code: ef.invalid_enum_value,
                        options: n
                    }),
                    eb
                }
                return ek(e.data)
            }
            get options() {
                return this._def.values
            }
            get enum() {
                let e = {};
                for (let t of this._def.values)
                    e[t] = t;
                return e
            }
            get Values() {
                let e = {};
                for (let t of this._def.values)
                    e[t] = t;
                return e
            }
            get Enum() {
                let e = {};
                for (let t of this._def.values)
                    e[t] = t;
                return e
            }
            extract(e, t=this._def) {
                return tu.create(e, {
                    ...this._def,
                    ...t
                })
            }
            exclude(e, t=this._def) {
                return tu.create(this.options.filter(t => !e.includes(t)), {
                    ...this._def,
                    ...t
                })
            }
        }
        D = new WeakMap,
        tu.create = tl;
        class tc extends eR {
            constructor() {
                super(...arguments),
                F.set(this, void 0)
            }
            _parse(e) {
                let t = P.getValidEnumValues(this._def.values)
                  , n = this._getOrReturnCtx(e);
                if (n.parsedType !== ec.string && n.parsedType !== ec.number) {
                    let e = P.objectValues(t);
                    return ev(n, {
                        expected: P.joinValues(e),
                        received: n.parsedType,
                        code: ef.invalid_type
                    }),
                    eb
                }
                if (eC(this, F, "f") || eT(this, F, new Set(P.getValidEnumValues(this._def.values)), "f"),
                !eC(this, F, "f").has(e.data)) {
                    let e = P.objectValues(t);
                    return ev(n, {
                        received: n.data,
                        code: ef.invalid_enum_value,
                        options: e
                    }),
                    eb
                }
                return ek(e.data)
            }
            get enum() {
                return this._def.values
            }
        }
        F = new WeakMap,
        tc.create = (e, t) => new tc({
            values: e,
            typeName: $.ZodNativeEnum,
            ...eI(t)
        });
        class td extends eR {
            unwrap() {
                return this._def.type
            }
            _parse(e) {
                let {ctx: t} = this._processInputParams(e);
                return t.parsedType !== ec.promise && !1 === t.common.async ? (ev(t, {
                    code: ef.invalid_type,
                    expected: ec.promise,
                    received: t.parsedType
                }),
                eb) : ek((t.parsedType === ec.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap
                })))
            }
        }
        td.create = (e, t) => new td({
            type: e,
            typeName: $.ZodPromise,
            ...eI(t)
        });
        class tf extends eR {
            innerType() {
                return this._def.schema
            }
            sourceType() {
                return this._def.schema._def.typeName === $.ZodEffects ? this._def.schema.sourceType() : this._def.schema
            }
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e)
                  , r = this._def.effect || null
                  , a = {
                    addIssue: e => {
                        ev(n, e),
                        e.fatal ? t.abort() : t.dirty()
                    }
                    ,
                    get path() {
                        return n.path
                    }
                };
                if (a.addIssue = a.addIssue.bind(a),
                "preprocess" === r.type) {
                    let e = r.transform(n.data, a);
                    if (n.common.async)
                        return Promise.resolve(e).then(async e => {
                            if ("aborted" === t.value)
                                return eb;
                            let r = await this._def.schema._parseAsync({
                                data: e,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === r.status ? eb : "dirty" === r.status || "dirty" === t.value ? ew(r.value) : r
                        }
                        );
                    {
                        if ("aborted" === t.value)
                            return eb;
                        let r = this._def.schema._parseSync({
                            data: e,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === r.status ? eb : "dirty" === r.status || "dirty" === t.value ? ew(r.value) : r
                    }
                }
                if ("refinement" === r.type) {
                    let e = e => {
                        let t = r.refinement(e, a);
                        if (n.common.async)
                            return Promise.resolve(t);
                        if (t instanceof Promise)
                            throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                        return e
                    }
                    ;
                    if (!1 !== n.common.async)
                        return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(n => "aborted" === n.status ? eb : ("dirty" === n.status && t.dirty(),
                        e(n.value).then( () => ({
                            status: t.value,
                            value: n.value
                        }))));
                    {
                        let r = this._def.schema._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === r.status ? eb : ("dirty" === r.status && t.dirty(),
                        e(r.value),
                        {
                            status: t.value,
                            value: r.value
                        })
                    }
                }
                if ("transform" === r.type) {
                    if (!1 !== n.common.async)
                        return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(e => eE(e) ? Promise.resolve(r.transform(e.value, a)).then(e => ({
                            status: t.value,
                            value: e
                        })) : e);
                    {
                        let e = this._def.schema._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        if (!eE(e))
                            return e;
                        let i = r.transform(e.value, a);
                        if (i instanceof Promise)
                            throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                        return {
                            status: t.value,
                            value: i
                        }
                    }
                }
                P.assertNever(r)
            }
        }
        tf.create = (e, t, n) => new tf({
            schema: e,
            typeName: $.ZodEffects,
            effect: t,
            ...eI(n)
        }),
        tf.createWithPreprocess = (e, t, n) => new tf({
            schema: t,
            effect: {
                type: "preprocess",
                transform: e
            },
            typeName: $.ZodEffects,
            ...eI(n)
        });
        class th extends eR {
            _parse(e) {
                return this._getType(e) === ec.undefined ? ek(void 0) : this._def.innerType._parse(e)
            }
            unwrap() {
                return this._def.innerType
            }
        }
        th.create = (e, t) => new th({
            innerType: e,
            typeName: $.ZodOptional,
            ...eI(t)
        });
        class tp extends eR {
            _parse(e) {
                return this._getType(e) === ec.null ? ek(null) : this._def.innerType._parse(e)
            }
            unwrap() {
                return this._def.innerType
            }
        }
        tp.create = (e, t) => new tp({
            innerType: e,
            typeName: $.ZodNullable,
            ...eI(t)
        });
        class tm extends eR {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = t.data;
                return t.parsedType === ec.undefined && (n = this._def.defaultValue()),
                this._def.innerType._parse({
                    data: n,
                    path: t.path,
                    parent: t
                })
            }
            removeDefault() {
                return this._def.innerType
            }
        }
        tm.create = (e, t) => new tm({
            innerType: e,
            typeName: $.ZodDefault,
            defaultValue: "function" == typeof t.default ? t.default : () => t.default,
            ...eI(t)
        });
        class tx extends eR {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    }
                }
                  , r = this._def.innerType._parse({
                    data: n.data,
                    path: n.path,
                    parent: {
                        ...n
                    }
                });
                return eO(r) ? r.then(e => ({
                    status: "valid",
                    value: "valid" === e.status ? e.value : this._def.catchValue({
                        get error() {
                            return new eh(n.common.issues)
                        },
                        input: n.data
                    })
                })) : {
                    status: "valid",
                    value: "valid" === r.status ? r.value : this._def.catchValue({
                        get error() {
                            return new eh(n.common.issues)
                        },
                        input: n.data
                    })
                }
            }
            removeCatch() {
                return this._def.innerType
            }
        }
        tx.create = (e, t) => new tx({
            innerType: e,
            typeName: $.ZodCatch,
            catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
            ...eI(t)
        });
        class tg extends eR {
            _parse(e) {
                if (this._getType(e) !== ec.nan) {
                    let t = this._getOrReturnCtx(e);
                    return ev(t, {
                        code: ef.invalid_type,
                        expected: ec.nan,
                        received: t.parsedType
                    }),
                    eb
                }
                return {
                    status: "valid",
                    value: e.data
                }
            }
        }
        tg.create = e => new tg({
            typeName: $.ZodNaN,
            ...eI(e)
        });
        let tv = Symbol("zod_brand");
        class ty extends eR {
            _parse(e) {
                let {ctx: t} = this._processInputParams(e)
                  , n = t.data;
                return this._def.type._parse({
                    data: n,
                    path: t.path,
                    parent: t
                })
            }
            unwrap() {
                return this._def.type
            }
        }
        class tb extends eR {
            _parse(e) {
                let {status: t, ctx: n} = this._processInputParams(e);
                if (n.common.async)
                    return (async () => {
                        let e = await this._def.in._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === e.status ? eb : "dirty" === e.status ? (t.dirty(),
                        ew(e.value)) : this._def.out._parseAsync({
                            data: e.value,
                            path: n.path,
                            parent: n
                        })
                    }
                    )();
                {
                    let e = this._def.in._parseSync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    });
                    return "aborted" === e.status ? eb : "dirty" === e.status ? (t.dirty(),
                    {
                        status: "dirty",
                        value: e.value
                    }) : this._def.out._parseSync({
                        data: e.value,
                        path: n.path,
                        parent: n
                    })
                }
            }
            static create(e, t) {
                return new tb({
                    in: e,
                    out: t,
                    typeName: $.ZodPipeline
                })
            }
        }
        class tw extends eR {
            _parse(e) {
                let t = this._def.innerType._parse(e)
                  , n = e => (eE(e) && (e.value = Object.freeze(e.value)),
                e);
                return eO(t) ? t.then(e => n(e)) : n(t)
            }
            unwrap() {
                return this._def.innerType
            }
        }
        function tk(e, t={}, n) {
            return e ? e1.create().superRefine( (r, a) => {
                var i, o;
                if (!e(r)) {
                    let e = "function" == typeof t ? t(r) : "string" == typeof t ? {
                        message: t
                    } : t
                      , s = null === (o = null !== (i = e.fatal) && void 0 !== i ? i : n) || void 0 === o || o;
                    a.addIssue({
                        code: "custom",
                        ..."string" == typeof e ? {
                            message: e
                        } : e,
                        fatal: s
                    })
                }
            }
            ) : e1.create()
        }
        tw.create = (e, t) => new tw({
            innerType: e,
            typeName: $.ZodReadonly,
            ...eI(t)
        });
        let t_ = {
            object: e7.lazycreate
        };
        (T = $ || ($ = {})).ZodString = "ZodString",
        T.ZodNumber = "ZodNumber",
        T.ZodNaN = "ZodNaN",
        T.ZodBigInt = "ZodBigInt",
        T.ZodBoolean = "ZodBoolean",
        T.ZodDate = "ZodDate",
        T.ZodSymbol = "ZodSymbol",
        T.ZodUndefined = "ZodUndefined",
        T.ZodNull = "ZodNull",
        T.ZodAny = "ZodAny",
        T.ZodUnknown = "ZodUnknown",
        T.ZodNever = "ZodNever",
        T.ZodVoid = "ZodVoid",
        T.ZodArray = "ZodArray",
        T.ZodObject = "ZodObject",
        T.ZodUnion = "ZodUnion",
        T.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
        T.ZodIntersection = "ZodIntersection",
        T.ZodTuple = "ZodTuple",
        T.ZodRecord = "ZodRecord",
        T.ZodMap = "ZodMap",
        T.ZodSet = "ZodSet",
        T.ZodFunction = "ZodFunction",
        T.ZodLazy = "ZodLazy",
        T.ZodLiteral = "ZodLiteral",
        T.ZodEnum = "ZodEnum",
        T.ZodEffects = "ZodEffects",
        T.ZodNativeEnum = "ZodNativeEnum",
        T.ZodOptional = "ZodOptional",
        T.ZodNullable = "ZodNullable",
        T.ZodDefault = "ZodDefault",
        T.ZodCatch = "ZodCatch",
        T.ZodPromise = "ZodPromise",
        T.ZodBranded = "ZodBranded",
        T.ZodPipeline = "ZodPipeline",
        T.ZodReadonly = "ZodReadonly";
        let tj = eV.create
          , tE = eq.create
          , tO = tg.create
          , tC = eK.create
          , tT = eQ.create
          , tS = eJ.create
          , tN = eY.create
          , tI = eX.create
          , tR = e0.create
          , tA = e1.create
          , tP = e2.create
          , tL = e4.create
          , tM = e5.create
          , tD = e3.create
          , tF = e7.create
          , t$ = e7.strictCreate
          , tZ = e6.create
          , tU = e8.create
          , tW = te.create
          , tz = tt.create
          , tH = tn.create
          , tG = tr.create
          , tB = ta.create
          , tV = ti.create
          , tq = to.create
          , tK = ts.create
          , tQ = tu.create
          , tJ = tc.create
          , tY = td.create
          , tX = tf.create
          , t0 = th.create
          , t1 = tp.create
          , t2 = tf.createWithPreprocess
          , t4 = tb.create;
        var t5 = Object.freeze({
            __proto__: null,
            defaultErrorMap: ep,
            setErrorMap: function(e) {
                em = e
            },
            getErrorMap: ex,
            makeIssue: eg,
            EMPTY_PATH: [],
            addIssueToContext: ev,
            ParseStatus: ey,
            INVALID: eb,
            DIRTY: ew,
            OK: ek,
            isAborted: e_,
            isDirty: ej,
            isValid: eE,
            isAsync: eO,
            get util() {
                return P
            },
            get objectUtil() {
                return L
            },
            ZodParsedType: ec,
            getParsedType: ed,
            ZodType: eR,
            datetimeRegex: eB,
            ZodString: eV,
            ZodNumber: eq,
            ZodBigInt: eK,
            ZodBoolean: eQ,
            ZodDate: eJ,
            ZodSymbol: eY,
            ZodUndefined: eX,
            ZodNull: e0,
            ZodAny: e1,
            ZodUnknown: e2,
            ZodNever: e4,
            ZodVoid: e5,
            ZodArray: e3,
            ZodObject: e7,
            ZodUnion: e6,
            ZodDiscriminatedUnion: e8,
            ZodIntersection: te,
            ZodTuple: tt,
            ZodRecord: tn,
            ZodMap: tr,
            ZodSet: ta,
            ZodFunction: ti,
            ZodLazy: to,
            ZodLiteral: ts,
            ZodEnum: tu,
            ZodNativeEnum: tc,
            ZodPromise: td,
            ZodEffects: tf,
            ZodTransformer: tf,
            ZodOptional: th,
            ZodNullable: tp,
            ZodDefault: tm,
            ZodCatch: tx,
            ZodNaN: tg,
            BRAND: tv,
            ZodBranded: ty,
            ZodPipeline: tb,
            ZodReadonly: tw,
            custom: tk,
            Schema: eR,
            ZodSchema: eR,
            late: t_,
            get ZodFirstPartyTypeKind() {
                return $
            },
            coerce: {
                string: e => eV.create({
                    ...e,
                    coerce: !0
                }),
                number: e => eq.create({
                    ...e,
                    coerce: !0
                }),
                boolean: e => eQ.create({
                    ...e,
                    coerce: !0
                }),
                bigint: e => eK.create({
                    ...e,
                    coerce: !0
                }),
                date: e => eJ.create({
                    ...e,
                    coerce: !0
                })
            },
            any: tA,
            array: tD,
            bigint: tC,
            boolean: tT,
            date: tS,
            discriminatedUnion: tU,
            effect: tX,
            enum: tQ,
            function: tV,
            instanceof: (e, t={
                message: `Input not instance of ${e.name}`
            }) => tk(t => t instanceof e, t),
            intersection: tW,
            lazy: tq,
            literal: tK,
            map: tG,
            nan: tO,
            nativeEnum: tJ,
            never: tL,
            null: tR,
            nullable: t1,
            number: tE,
            object: tF,
            oboolean: () => tT().optional(),
            onumber: () => tE().optional(),
            optional: t0,
            ostring: () => tj().optional(),
            pipeline: t4,
            preprocess: t2,
            promise: tY,
            record: tH,
            set: tB,
            strictObject: t$,
            string: tj,
            symbol: tN,
            transformer: tX,
            tuple: tz,
            undefined: tI,
            union: tZ,
            unknown: tP,
            void: tM,
            NEVER: eb,
            ZodIssueCode: ef,
            quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
            ZodError: eh
        })
          , t3 = n(9352)
          , t7 = n.n(t3);
        n(5983);
        let t6 = ["light", "dark"]
          , t9 = "(prefers-color-scheme: dark)"
          , t8 = "undefined" == typeof window
          , ne = (0,
        H.createContext)(void 0)
          , nt = {
            setTheme: e => {}
            ,
            themes: []
        }
          , nn = () => {
            var e;
            return null !== (e = (0,
            H.useContext)(ne)) && void 0 !== e ? e : nt
        }
          , nr = e => (0,
        H.useContext)(ne) ? H.createElement(H.Fragment, null, e.children) : H.createElement(ni, e)
          , na = ["light", "dark"]
          , ni = ({forcedTheme: e, disableTransitionOnChange: t=!1, enableSystem: n=!0, enableColorScheme: r=!0, storageKey: a="theme", themes: i=na, defaultTheme: o=n ? "system" : "light", attribute: s="data-theme", value: l, children: u, nonce: c}) => {
            let[d,f] = (0,
            H.useState)( () => ns(a, o))
              , [h,p] = (0,
            H.useState)( () => ns(a))
              , m = l ? Object.values(l) : i
              , x = (0,
            H.useCallback)(e => {
                let a = e;
                if (!a)
                    return;
                "system" === e && n && (a = nu());
                let i = l ? l[a] : a
                  , u = t ? nl() : null
                  , c = document.documentElement;
                if ("class" === s ? (c.classList.remove(...m),
                i && c.classList.add(i)) : i ? c.setAttribute(s, i) : c.removeAttribute(s),
                r) {
                    let e = t6.includes(o) ? o : null
                      , t = t6.includes(a) ? a : e;
                    c.style.colorScheme = t
                }
                null == u || u()
            }
            , [])
              , g = (0,
            H.useCallback)(e => {
                f(e);
                try {
                    localStorage.setItem(a, e)
                } catch (e) {}
            }
            , [e])
              , v = (0,
            H.useCallback)(t => {
                p(nu(t)),
                "system" === d && n && !e && x("system")
            }
            , [d, e]);
            (0,
            H.useEffect)( () => {
                let e = window.matchMedia(t9);
                return e.addListener(v),
                v(e),
                () => e.removeListener(v)
            }
            , [v]),
            (0,
            H.useEffect)( () => {
                let e = e => {
                    e.key === a && g(e.newValue || o)
                }
                ;
                return window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
            }
            , [g]),
            (0,
            H.useEffect)( () => {
                x(null != e ? e : d)
            }
            , [e, d]);
            let y = (0,
            H.useMemo)( () => ({
                theme: d,
                setTheme: g,
                forcedTheme: e,
                resolvedTheme: "system" === d ? h : d,
                themes: n ? [...i, "system"] : i,
                systemTheme: n ? h : void 0
            }), [d, g, e, h, n, i]);
            return H.createElement(ne.Provider, {
                value: y
            }, H.createElement(no, {
                forcedTheme: e,
                disableTransitionOnChange: t,
                enableSystem: n,
                enableColorScheme: r,
                storageKey: a,
                themes: i,
                defaultTheme: o,
                attribute: s,
                value: l,
                children: u,
                attrs: m,
                nonce: c
            }), u)
        }
          , no = (0,
        H.memo)( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: a, defaultTheme: i, value: o, attrs: s, nonce: l}) => {
            let u = "system" === i
              , c = "class" === n ? `var d=document.documentElement,c=d.classList;c.remove(${s.map(e => `'${e}'`).join(",")});` : `var d=document.documentElement,n='${n}',s='setAttribute';`
              , d = a ? t6.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
              , f = (e, t=!1, r=!0) => {
                let i = o ? o[e] : e
                  , s = t ? e + "|| ''" : `'${i}'`
                  , l = "";
                return a && r && !t && t6.includes(e) && (l += `d.style.colorScheme = '${e}';`),
                "class" === n ? l += t || i ? `c.add(${s})` : "null" : i && (l += `d[s](n,${s})`),
                l
            }
              , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${t9}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
            return H.createElement("script", {
                nonce: l,
                dangerouslySetInnerHTML: {
                    __html: h
                }
            })
        }
        , () => !0)
          , ns = (e, t) => {
            let n;
            if (!t8) {
                try {
                    n = localStorage.getItem(e) || void 0
                } catch (e) {}
                return n || t
            }
        }
          , nl = () => {
            let e = document.createElement("style");
            return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
            document.head.appendChild(e),
            () => {
                window.getComputedStyle(document.body),
                setTimeout( () => {
                    document.head.removeChild(e)
                }
                , 1)
            }
        }
          , nu = e => (e || (e = window.matchMedia(t9)),
        e.matches ? "dark" : "light");
        var nc = {
            breadcrumb: !0,
            collapsed: !1,
            footer: !0,
            layout: "default",
            navbar: !0,
            pagination: !0,
            sidebar: !0,
            timestamp: !0,
            toc: !0,
            typesetting: "default"
        }
          , nd = t5.strictObject({
            breadcrumb: t5.boolean(),
            collapsed: t5.boolean(),
            footer: t5.boolean(),
            layout: t5.enum(["default", "full", "raw"]),
            navbar: t5.boolean(),
            pagination: t5.boolean(),
            sidebar: t5.boolean(),
            timestamp: t5.boolean(),
            toc: t5.boolean(),
            typesetting: t5.enum(["default", "article"])
        })
          , nf = t5.enum(["normal", "hidden", "children"])
          , nh = t5.string()
          , np = t5.strictObject({
            href: t5.string(),
            newWindow: t5.boolean(),
            title: nh
        })
          , nm = t5.strictObject({
            display: nf.optional(),
            items: t5.record(np.partial({
                href: !0,
                newWindow: !0
            })),
            title: nh,
            type: t5.literal("menu")
        })
          , nx = t5.strictObject({
            title: nh.optional(),
            type: t5.literal("separator")
        })
          , ng = np.extend({
            display: nf,
            theme: nd,
            title: nh,
            type: t5.enum(["page", "doc"])
        }).deepPartial();
        t5.string().or(nm).or(nx).or(ng);
        var nv = n(227)
          , ny = n.n(nv);
        function nb(e) {
            if (null == e)
                return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }
        function nw(e) {
            var t = nb(e).Element;
            return e instanceof t || e instanceof Element
        }
        function nk(e) {
            var t = nb(e).HTMLElement;
            return e instanceof t || e instanceof HTMLElement
        }
        function n_(e) {
            if ("undefined" == typeof ShadowRoot)
                return !1;
            var t = nb(e).ShadowRoot;
            return e instanceof t || e instanceof ShadowRoot
        }
        var nj = Math.max
          , nE = Math.min
          , nO = Math.round;
        function nC() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
                return e.brand + "/" + e.version
            }).join(" ") : navigator.userAgent
        }
        function nT() {
            return !/^((?!chrome|android).)*safari/i.test(nC())
        }
        function nS(e, t, n) {
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            var r = e.getBoundingClientRect()
              , a = 1
              , i = 1;
            t && nk(e) && (a = e.offsetWidth > 0 && nO(r.width) / e.offsetWidth || 1,
            i = e.offsetHeight > 0 && nO(r.height) / e.offsetHeight || 1);
            var o = (nw(e) ? nb(e) : window).visualViewport
              , s = !nT() && n
              , l = (r.left + (s && o ? o.offsetLeft : 0)) / a
              , u = (r.top + (s && o ? o.offsetTop : 0)) / i
              , c = r.width / a
              , d = r.height / i;
            return {
                width: c,
                height: d,
                top: u,
                right: l + c,
                bottom: u + d,
                left: l,
                x: l,
                y: u
            }
        }
        function nN(e) {
            var t = nb(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }
        function nI(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }
        function nR(e) {
            return ((nw(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }
        function nA(e) {
            return nS(nR(e)).left + nN(e).scrollLeft
        }
        function nP(e) {
            return nb(e).getComputedStyle(e)
        }
        function nL(e) {
            var t = nP(e)
              , n = t.overflow
              , r = t.overflowX
              , a = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + a + r)
        }
        function nM(e) {
            var t = nS(e)
              , n = e.offsetWidth
              , r = e.offsetHeight;
            return 1 >= Math.abs(t.width - n) && (n = t.width),
            1 >= Math.abs(t.height - r) && (r = t.height),
            {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: r
            }
        }
        function nD(e) {
            return "html" === nI(e) ? e : e.assignedSlot || e.parentNode || (n_(e) ? e.host : null) || nR(e)
        }
        function nF(e, t) {
            void 0 === t && (t = []);
            var n, r = function e(t) {
                return ["html", "body", "#document"].indexOf(nI(t)) >= 0 ? t.ownerDocument.body : nk(t) && nL(t) ? t : e(nD(t))
            }(e), a = r === (null == (n = e.ownerDocument) ? void 0 : n.body), i = nb(r), o = a ? [i].concat(i.visualViewport || [], nL(r) ? r : []) : r, s = t.concat(o);
            return a ? s : s.concat(nF(nD(o)))
        }
        function n$(e) {
            return nk(e) && "fixed" !== nP(e).position ? e.offsetParent : null
        }
        function nZ(e) {
            for (var t = nb(e), n = n$(e); n && ["table", "td", "th"].indexOf(nI(n)) >= 0 && "static" === nP(n).position; )
                n = n$(n);
            return n && ("html" === nI(n) || "body" === nI(n) && "static" === nP(n).position) ? t : n || function(e) {
                var t = /firefox/i.test(nC());
                if (/Trident/i.test(nC()) && nk(e) && "fixed" === nP(e).position)
                    return null;
                var n = nD(e);
                for (n_(n) && (n = n.host); nk(n) && 0 > ["html", "body"].indexOf(nI(n)); ) {
                    var r = nP(n);
                    if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                        return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }
        var nU = "bottom"
          , nW = "right"
          , nz = "left"
          , nH = "auto"
          , nG = ["top", nU, nW, nz]
          , nB = "start"
          , nV = "viewport"
          , nq = "popper"
          , nK = nG.reduce(function(e, t) {
            return e.concat([t + "-" + nB, t + "-end"])
        }, [])
          , nQ = [].concat(nG, [nH]).reduce(function(e, t) {
            return e.concat([t, t + "-" + nB, t + "-end"])
        }, [])
          , nJ = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]
          , nY = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function nX() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some(function(e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            })
        }
        var n0 = {
            passive: !0
        };
        function n1(e) {
            return e.split("-")[0]
        }
        function n2(e) {
            return e.split("-")[1]
        }
        function n4(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }
        function n5(e) {
            var t, n = e.reference, r = e.element, a = e.placement, i = a ? n1(a) : null, o = a ? n2(a) : null, s = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2;
            switch (i) {
            case "top":
                t = {
                    x: s,
                    y: n.y - r.height
                };
                break;
            case nU:
                t = {
                    x: s,
                    y: n.y + n.height
                };
                break;
            case nW:
                t = {
                    x: n.x + n.width,
                    y: l
                };
                break;
            case nz:
                t = {
                    x: n.x - r.width,
                    y: l
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
            }
            var u = i ? n4(i) : null;
            if (null != u) {
                var c = "y" === u ? "height" : "width";
                switch (o) {
                case nB:
                    t[u] = t[u] - (n[c] / 2 - r[c] / 2);
                    break;
                case "end":
                    t[u] = t[u] + (n[c] / 2 - r[c] / 2)
                }
            }
            return t
        }
        var n3 = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function n7(e) {
            var t, n, r, a, i, o, s, l = e.popper, u = e.popperRect, c = e.placement, d = e.variation, f = e.offsets, h = e.position, p = e.gpuAcceleration, m = e.adaptive, x = e.roundOffsets, g = e.isFixed, v = f.x, y = void 0 === v ? 0 : v, b = f.y, w = void 0 === b ? 0 : b, k = "function" == typeof x ? x({
                x: y,
                y: w
            }) : {
                x: y,
                y: w
            };
            y = k.x,
            w = k.y;
            var _ = f.hasOwnProperty("x")
              , j = f.hasOwnProperty("y")
              , E = nz
              , O = "top"
              , C = window;
            if (m) {
                var T = nZ(l)
                  , S = "clientHeight"
                  , N = "clientWidth";
                T === nb(l) && "static" !== nP(T = nR(l)).position && "absolute" === h && (S = "scrollHeight",
                N = "scrollWidth"),
                ("top" === c || (c === nz || c === nW) && "end" === d) && (O = nU,
                w -= (g && T === C && C.visualViewport ? C.visualViewport.height : T[S]) - u.height,
                w *= p ? 1 : -1),
                (c === nz || ("top" === c || c === nU) && "end" === d) && (E = nW,
                y -= (g && T === C && C.visualViewport ? C.visualViewport.width : T[N]) - u.width,
                y *= p ? 1 : -1)
            }
            var I = Object.assign({
                position: h
            }, m && n3)
              , R = !0 === x ? (t = {
                x: y,
                y: w
            },
            n = nb(l),
            r = t.x,
            a = t.y,
            {
                x: nO(r * (i = n.devicePixelRatio || 1)) / i || 0,
                y: nO(a * i) / i || 0
            }) : {
                x: y,
                y: w
            };
            return (y = R.x,
            w = R.y,
            p) ? Object.assign({}, I, ((s = {})[O] = j ? "0" : "",
            s[E] = _ ? "0" : "",
            s.transform = 1 >= (C.devicePixelRatio || 1) ? "translate(" + y + "px, " + w + "px)" : "translate3d(" + y + "px, " + w + "px, 0)",
            s)) : Object.assign({}, I, ((o = {})[O] = j ? w + "px" : "",
            o[E] = _ ? y + "px" : "",
            o.transform = "",
            o))
        }
        var n6 = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function n9(e) {
            return e.replace(/left|right|bottom|top/g, function(e) {
                return n6[e]
            })
        }
        var n8 = {
            start: "end",
            end: "start"
        };
        function re(e) {
            return e.replace(/start|end/g, function(e) {
                return n8[e]
            })
        }
        function rt(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t))
                return !0;
            if (n && n_(n)) {
                var r = t;
                do {
                    if (r && e.isSameNode(r))
                        return !0;
                    r = r.parentNode || r.host
                } while (r)
            }
            return !1
        }
        function rn(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }
        function rr(e, t, n) {
            var r, a, i, o, s, l, u, c, d, f;
            return t === nV ? rn(function(e, t) {
                var n = nb(e)
                  , r = nR(e)
                  , a = n.visualViewport
                  , i = r.clientWidth
                  , o = r.clientHeight
                  , s = 0
                  , l = 0;
                if (a) {
                    i = a.width,
                    o = a.height;
                    var u = nT();
                    (u || !u && "fixed" === t) && (s = a.offsetLeft,
                    l = a.offsetTop)
                }
                return {
                    width: i,
                    height: o,
                    x: s + nA(e),
                    y: l
                }
            }(e, n)) : nw(t) ? ((r = nS(t, !1, "fixed" === n)).top = r.top + t.clientTop,
            r.left = r.left + t.clientLeft,
            r.bottom = r.top + t.clientHeight,
            r.right = r.left + t.clientWidth,
            r.width = t.clientWidth,
            r.height = t.clientHeight,
            r.x = r.left,
            r.y = r.top,
            r) : rn((a = nR(e),
            o = nR(a),
            s = nN(a),
            l = null == (i = a.ownerDocument) ? void 0 : i.body,
            u = nj(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0),
            c = nj(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0),
            d = -s.scrollLeft + nA(a),
            f = -s.scrollTop,
            "rtl" === nP(l || o).direction && (d += nj(o.clientWidth, l ? l.clientWidth : 0) - u),
            {
                width: u,
                height: c,
                x: d,
                y: f
            }))
        }
        function ra() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
        function ri(e) {
            return Object.assign({}, ra(), e)
        }
        function ro(e, t) {
            return t.reduce(function(t, n) {
                return t[n] = e,
                t
            }, {})
        }
        function rs(e, t) {
            void 0 === t && (t = {});
            var n, r, a, i, o, s, l, u, c = t, d = c.placement, f = void 0 === d ? e.placement : d, h = c.strategy, p = void 0 === h ? e.strategy : h, m = c.boundary, x = c.rootBoundary, g = c.elementContext, v = void 0 === g ? nq : g, y = c.altBoundary, b = c.padding, w = void 0 === b ? 0 : b, k = ri("number" != typeof w ? w : ro(w, nG)), _ = e.rects.popper, j = e.elements[void 0 !== y && y ? v === nq ? "reference" : nq : v], E = (n = nw(j) ? j : j.contextElement || nR(e.elements.popper),
            r = void 0 === m ? "clippingParents" : m,
            a = void 0 === x ? nV : x,
            l = (s = [].concat("clippingParents" === r ? (i = nF(nD(n)),
            nw(o = ["absolute", "fixed"].indexOf(nP(n).position) >= 0 && nk(n) ? nZ(n) : n) ? i.filter(function(e) {
                return nw(e) && rt(e, o) && "body" !== nI(e)
            }) : []) : [].concat(r), [a]))[0],
            (u = s.reduce(function(e, t) {
                var r = rr(n, t, p);
                return e.top = nj(r.top, e.top),
                e.right = nE(r.right, e.right),
                e.bottom = nE(r.bottom, e.bottom),
                e.left = nj(r.left, e.left),
                e
            }, rr(n, l, p))).width = u.right - u.left,
            u.height = u.bottom - u.top,
            u.x = u.left,
            u.y = u.top,
            u), O = nS(e.elements.reference), C = n5({
                reference: O,
                element: _,
                strategy: "absolute",
                placement: f
            }), T = rn(Object.assign({}, _, C)), S = v === nq ? T : O, N = {
                top: E.top - S.top + k.top,
                bottom: S.bottom - E.bottom + k.bottom,
                left: E.left - S.left + k.left,
                right: S.right - E.right + k.right
            }, I = e.modifiersData.offset;
            if (v === nq && I) {
                var R = I[f];
                Object.keys(N).forEach(function(e) {
                    var t = [nW, nU].indexOf(e) >= 0 ? 1 : -1
                      , n = ["top", nU].indexOf(e) >= 0 ? "y" : "x";
                    N[e] += R[n] * t
                })
            }
            return N
        }
        function rl(e, t, n) {
            return nj(e, nE(t, n))
        }
        function ru(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }),
            {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }
        function rc(e) {
            return ["top", nW, nU, nz].some(function(t) {
                return e[t] >= 0
            })
        }
        var rd = (I = void 0 === (N = (S = {
            defaultModifiers: [{
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state
                      , n = e.instance
                      , r = e.options
                      , a = r.scroll
                      , i = void 0 === a || a
                      , o = r.resize
                      , s = void 0 === o || o
                      , l = nb(t.elements.popper)
                      , u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return i && u.forEach(function(e) {
                        e.addEventListener("scroll", n.update, n0)
                    }),
                    s && l.addEventListener("resize", n.update, n0),
                    function() {
                        i && u.forEach(function(e) {
                            e.removeEventListener("scroll", n.update, n0)
                        }),
                        s && l.removeEventListener("resize", n.update, n0)
                    }
                },
                data: {}
            }, {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state
                      , n = e.name;
                    t.modifiersData[n] = n5({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            }, {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = n.gpuAcceleration
                      , a = n.adaptive
                      , i = n.roundOffsets
                      , o = void 0 === i || i
                      , s = {
                        placement: n1(t.placement),
                        variation: n2(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: void 0 === r || r,
                        isFixed: "fixed" === t.options.strategy
                    };
                    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, n7(Object.assign({}, s, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: void 0 === a || a,
                        roundOffsets: o
                    })))),
                    null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, n7(Object.assign({}, s, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: o
                    })))),
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement
                    })
                },
                data: {}
            }, {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function(e) {
                        var n = t.styles[e] || {}
                          , r = t.attributes[e] || {}
                          , a = t.elements[e];
                        nk(a) && nI(a) && (Object.assign(a.style, n),
                        Object.keys(r).forEach(function(e) {
                            var t = r[e];
                            !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t)
                        }))
                    })
                },
                effect: function(e) {
                    var t = e.state
                      , n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                    return Object.assign(t.elements.popper.style, n.popper),
                    t.styles = n,
                    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function() {
                        Object.keys(t.elements).forEach(function(e) {
                            var r = t.elements[e]
                              , a = t.attributes[e] || {}
                              , i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                return e[t] = "",
                                e
                            }, {});
                            nk(r) && nI(r) && (Object.assign(r.style, i),
                            Object.keys(a).forEach(function(e) {
                                r.removeAttribute(e)
                            }))
                        })
                    }
                },
                requires: ["computeStyles"]
            }, {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name
                      , a = n.offset
                      , i = void 0 === a ? [0, 0] : a
                      , o = nQ.reduce(function(e, n) {
                        var r, a, o, s, l, u;
                        return e[n] = (r = t.rects,
                        o = [nz, "top"].indexOf(a = n1(n)) >= 0 ? -1 : 1,
                        l = (s = "function" == typeof i ? i(Object.assign({}, r, {
                            placement: n
                        })) : i)[0],
                        u = s[1],
                        l = l || 0,
                        u = (u || 0) * o,
                        [nz, nW].indexOf(a) >= 0 ? {
                            x: u,
                            y: l
                        } : {
                            x: l,
                            y: u
                        }),
                        e
                    }, {})
                      , s = o[t.placement]
                      , l = s.x
                      , u = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l,
                    t.modifiersData.popperOffsets.y += u),
                    t.modifiersData[r] = o
                }
            }, {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name;
                    if (!t.modifiersData[r]._skip) {
                        for (var a = n.mainAxis, i = void 0 === a || a, o = n.altAxis, s = void 0 === o || o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, m = n.allowedAutoPlacements, x = t.options.placement, g = n1(x) === x, v = l || (g || !p ? [n9(x)] : function(e) {
                            if (n1(e) === nH)
                                return [];
                            var t = n9(e);
                            return [re(e), t, re(t)]
                        }(x)), y = [x].concat(v).reduce(function(e, n) {
                            var r, a, i, o, s, l, f, h, x, g, v, y;
                            return e.concat(n1(n) === nH ? (a = (r = {
                                placement: n,
                                boundary: c,
                                rootBoundary: d,
                                padding: u,
                                flipVariations: p,
                                allowedAutoPlacements: m
                            }).placement,
                            i = r.boundary,
                            o = r.rootBoundary,
                            s = r.padding,
                            l = r.flipVariations,
                            h = void 0 === (f = r.allowedAutoPlacements) ? nQ : f,
                            0 === (v = (g = (x = n2(a)) ? l ? nK : nK.filter(function(e) {
                                return n2(e) === x
                            }) : nG).filter(function(e) {
                                return h.indexOf(e) >= 0
                            })).length && (v = g),
                            Object.keys(y = v.reduce(function(e, n) {
                                return e[n] = rs(t, {
                                    placement: n,
                                    boundary: i,
                                    rootBoundary: o,
                                    padding: s
                                })[n1(n)],
                                e
                            }, {})).sort(function(e, t) {
                                return y[e] - y[t]
                            })) : n)
                        }, []), b = t.rects.reference, w = t.rects.popper, k = new Map, _ = !0, j = y[0], E = 0; E < y.length; E++) {
                            var O = y[E]
                              , C = n1(O)
                              , T = n2(O) === nB
                              , S = ["top", nU].indexOf(C) >= 0
                              , N = S ? "width" : "height"
                              , I = rs(t, {
                                placement: O,
                                boundary: c,
                                rootBoundary: d,
                                altBoundary: f,
                                padding: u
                            })
                              , R = S ? T ? nW : nz : T ? nU : "top";
                            b[N] > w[N] && (R = n9(R));
                            var A = n9(R)
                              , P = [];
                            if (i && P.push(I[C] <= 0),
                            s && P.push(I[R] <= 0, I[A] <= 0),
                            P.every(function(e) {
                                return e
                            })) {
                                j = O,
                                _ = !1;
                                break
                            }
                            k.set(O, P)
                        }
                        if (_)
                            for (var L = p ? 3 : 1, M = function(e) {
                                var t = y.find(function(t) {
                                    var n = k.get(t);
                                    if (n)
                                        return n.slice(0, e).every(function(e) {
                                            return e
                                        })
                                });
                                if (t)
                                    return j = t,
                                    "break"
                            }, D = L; D > 0 && "break" !== M(D); D--)
                                ;
                        t.placement !== j && (t.modifiersData[r]._skip = !0,
                        t.placement = j,
                        t.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            }, {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state
                      , n = e.options
                      , r = e.name
                      , a = n.mainAxis
                      , i = n.altAxis
                      , o = n.boundary
                      , s = n.rootBoundary
                      , l = n.altBoundary
                      , u = n.padding
                      , c = n.tether
                      , d = void 0 === c || c
                      , f = n.tetherOffset
                      , h = void 0 === f ? 0 : f
                      , p = rs(t, {
                        boundary: o,
                        rootBoundary: s,
                        padding: u,
                        altBoundary: l
                    })
                      , m = n1(t.placement)
                      , x = n2(t.placement)
                      , g = !x
                      , v = n4(m)
                      , y = "x" === v ? "y" : "x"
                      , b = t.modifiersData.popperOffsets
                      , w = t.rects.reference
                      , k = t.rects.popper
                      , _ = "function" == typeof h ? h(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : h
                      , j = "number" == typeof _ ? {
                        mainAxis: _,
                        altAxis: _
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, _)
                      , E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
                      , O = {
                        x: 0,
                        y: 0
                    };
                    if (b) {
                        if (void 0 === a || a) {
                            var C, T = "y" === v ? "top" : nz, S = "y" === v ? nU : nW, N = "y" === v ? "height" : "width", I = b[v], R = I + p[T], A = I - p[S], P = d ? -k[N] / 2 : 0, L = x === nB ? w[N] : k[N], M = x === nB ? -k[N] : -w[N], D = t.elements.arrow, F = d && D ? nM(D) : {
                                width: 0,
                                height: 0
                            }, $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ra(), Z = $[T], U = $[S], W = rl(0, w[N], F[N]), z = g ? w[N] / 2 - P - W - Z - j.mainAxis : L - W - Z - j.mainAxis, H = g ? -w[N] / 2 + P + W + U + j.mainAxis : M + W + U + j.mainAxis, G = t.elements.arrow && nZ(t.elements.arrow), B = G ? "y" === v ? G.clientTop || 0 : G.clientLeft || 0 : 0, V = null != (C = null == E ? void 0 : E[v]) ? C : 0, q = rl(d ? nE(R, I + z - V - B) : R, I, d ? nj(A, I + H - V) : A);
                            b[v] = q,
                            O[v] = q - I
                        }
                        if (void 0 !== i && i) {
                            var K, Q, J = "x" === v ? "top" : nz, Y = "x" === v ? nU : nW, X = b[y], ee = "y" === y ? "height" : "width", et = X + p[J], en = X - p[Y], er = -1 !== ["top", nz].indexOf(m), ea = null != (Q = null == E ? void 0 : E[y]) ? Q : 0, ei = er ? et : X - w[ee] - k[ee] - ea + j.altAxis, eo = er ? X + w[ee] + k[ee] - ea - j.altAxis : en, es = d && er ? (K = rl(ei, X, eo)) > eo ? eo : K : rl(d ? ei : et, X, d ? eo : en);
                            b[y] = es,
                            O[y] = es - X
                        }
                        t.modifiersData[r] = O
                    }
                },
                requiresIfExists: ["offset"]
            }, {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n, r = e.state, a = e.name, i = e.options, o = r.elements.arrow, s = r.modifiersData.popperOffsets, l = n1(r.placement), u = n4(l), c = [nz, nW].indexOf(l) >= 0 ? "height" : "width";
                    if (o && s) {
                        var d = ri("number" != typeof (t = "function" == typeof (t = i.padding) ? t(Object.assign({}, r.rects, {
                            placement: r.placement
                        })) : t) ? t : ro(t, nG))
                          , f = nM(o)
                          , h = "y" === u ? "top" : nz
                          , p = "y" === u ? nU : nW
                          , m = r.rects.reference[c] + r.rects.reference[u] - s[u] - r.rects.popper[c]
                          , x = s[u] - r.rects.reference[u]
                          , g = nZ(o)
                          , v = g ? "y" === u ? g.clientHeight || 0 : g.clientWidth || 0 : 0
                          , y = d[h]
                          , b = v - f[c] - d[p]
                          , w = v / 2 - f[c] / 2 + (m / 2 - x / 2)
                          , k = rl(y, w, b);
                        r.modifiersData[a] = ((n = {})[u] = k,
                        n.centerOffset = k - w,
                        n)
                    }
                },
                effect: function(e) {
                    var t = e.state
                      , n = e.options.element
                      , r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && rt(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            }, {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(e) {
                    var t = e.state
                      , n = e.name
                      , r = t.rects.reference
                      , a = t.rects.popper
                      , i = t.modifiersData.preventOverflow
                      , o = rs(t, {
                        elementContext: "reference"
                    })
                      , s = rs(t, {
                        altBoundary: !0
                    })
                      , l = ru(o, r)
                      , u = ru(s, a, i)
                      , c = rc(l)
                      , d = rc(u);
                    t.modifiersData[n] = {
                        referenceClippingOffsets: l,
                        popperEscapeOffsets: u,
                        isReferenceHidden: c,
                        hasPopperEscaped: d
                    },
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-reference-hidden": c,
                        "data-popper-escaped": d
                    })
                }
            }]
        }).defaultModifiers) ? [] : N,
        A = void 0 === (R = S.defaultOptions) ? nY : R,
        function(e, t, n) {
            void 0 === n && (n = A);
            var r, a, i = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, nY, A),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            }, o = [], s = !1, l = {
                state: i,
                setOptions: function(n) {
                    var r, a, s, c, d, f = "function" == typeof n ? n(i.options) : n;
                    u(),
                    i.options = Object.assign({}, A, i.options, f),
                    i.scrollParents = {
                        reference: nw(e) ? nF(e) : e.contextElement ? nF(e.contextElement) : [],
                        popper: nF(t)
                    };
                    var h = (a = Object.keys(r = [].concat(I, i.options.modifiers).reduce(function(e, t) {
                        var n = e[t.name];
                        return e[t.name] = n ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data)
                        }) : t,
                        e
                    }, {})).map(function(e) {
                        return r[e]
                    }),
                    s = new Map,
                    c = new Set,
                    d = [],
                    a.forEach(function(e) {
                        s.set(e.name, e)
                    }),
                    a.forEach(function(e) {
                        c.has(e.name) || function e(t) {
                            c.add(t.name),
                            [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                if (!c.has(t)) {
                                    var n = s.get(t);
                                    n && e(n)
                                }
                            }),
                            d.push(t)
                        }(e)
                    }),
                    nJ.reduce(function(e, t) {
                        return e.concat(d.filter(function(e) {
                            return e.phase === t
                        }))
                    }, []));
                    return i.orderedModifiers = h.filter(function(e) {
                        return e.enabled
                    }),
                    i.orderedModifiers.forEach(function(e) {
                        var t = e.name
                          , n = e.options
                          , r = e.effect;
                        if ("function" == typeof r) {
                            var a = r({
                                state: i,
                                name: t,
                                instance: l,
                                options: void 0 === n ? {} : n
                            });
                            o.push(a || function() {}
                            )
                        }
                    }),
                    l.update()
                },
                forceUpdate: function() {
                    if (!s) {
                        var e, t, n, r, a, o, u, c, d, f, h, p, m = i.elements, x = m.reference, g = m.popper;
                        if (nX(x, g)) {
                            i.rects = {
                                reference: (t = nZ(g),
                                n = "fixed" === i.options.strategy,
                                r = nk(t),
                                c = nk(t) && (o = nO((a = t.getBoundingClientRect()).width) / t.offsetWidth || 1,
                                u = nO(a.height) / t.offsetHeight || 1,
                                1 !== o || 1 !== u),
                                d = nR(t),
                                f = nS(x, c, n),
                                h = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                p = {
                                    x: 0,
                                    y: 0
                                },
                                (r || !r && !n) && (("body" !== nI(t) || nL(d)) && (h = (e = t) !== nb(e) && nk(e) ? {
                                    scrollLeft: e.scrollLeft,
                                    scrollTop: e.scrollTop
                                } : nN(e)),
                                nk(t) ? (p = nS(t, !0),
                                p.x += t.clientLeft,
                                p.y += t.clientTop) : d && (p.x = nA(d))),
                                {
                                    x: f.left + h.scrollLeft - p.x,
                                    y: f.top + h.scrollTop - p.y,
                                    width: f.width,
                                    height: f.height
                                }),
                                popper: nM(g)
                            },
                            i.reset = !1,
                            i.placement = i.options.placement,
                            i.orderedModifiers.forEach(function(e) {
                                return i.modifiersData[e.name] = Object.assign({}, e.data)
                            });
                            for (var v = 0; v < i.orderedModifiers.length; v++) {
                                if (!0 === i.reset) {
                                    i.reset = !1,
                                    v = -1;
                                    continue
                                }
                                var y = i.orderedModifiers[v]
                                  , b = y.fn
                                  , w = y.options
                                  , k = void 0 === w ? {} : w
                                  , _ = y.name;
                                "function" == typeof b && (i = b({
                                    state: i,
                                    options: k,
                                    name: _,
                                    instance: l
                                }) || i)
                            }
                        }
                    }
                },
                update: (r = function() {
                    return new Promise(function(e) {
                        l.forceUpdate(),
                        e(i)
                    }
                    )
                }
                ,
                function() {
                    return a || (a = new Promise(function(e) {
                        Promise.resolve().then(function() {
                            a = void 0,
                            e(r())
                        })
                    }
                    )),
                    a
                }
                ),
                destroy: function() {
                    u(),
                    s = !0
                }
            };
            if (!nX(e, t))
                return l;
            function u() {
                o.forEach(function(e) {
                    return e()
                }),
                o = []
            }
            return l.setOptions(n).then(function(e) {
                !s && n.onFirstUpdate && n.onFirstUpdate(e)
            }),
            l
        }
        );
        function rf(e) {
            return void 0 === e || e
        }
        function rh(e) {
            let t = Array(e);
            for (let n = 0; n < e; n++)
                t[n] = rp();
            return t
        }
        function rp() {
            return Object.create(null)
        }
        function rm(e, t) {
            return t.length - e.length
        }
        function rx(e) {
            return "string" == typeof e
        }
        function rg(e) {
            return "object" == typeof e
        }
        function rv(e) {
            return "function" == typeof e
        }
        function ry(e, t) {
            var n = rb;
            if (e && (t && (e = r_(e, t)),
            this.H && (e = r_(e, this.H)),
            this.J && 1 < e.length && (e = r_(e, this.J)),
            n || "" === n)) {
                if (t = e.split(n),
                this.filter) {
                    e = this.filter,
                    n = t.length;
                    let r = [];
                    for (let a = 0, i = 0; a < n; a++) {
                        let n = t[a];
                        n && !e[n] && (r[i++] = n)
                    }
                    e = r
                } else
                    e = t
            }
            return e
        }
        let rb = /[\p{Z}\p{S}\p{P}\p{C}]+/u
          , rw = /[\u0300-\u036f]/g;
        function rk(e, t) {
            let n = Object.keys(e)
              , r = n.length
              , a = []
              , i = ""
              , o = 0;
            for (let s = 0, l, u; s < r; s++)
                (u = e[l = n[s]]) ? (a[o++] = rj(t ? "(?!\\b)" + l + "(\\b|_)" : l),
                a[o++] = u) : i += (i ? "|" : "") + l;
            return i && (a[o++] = rj(t ? "(?!\\b)(" + i + ")(\\b|_)" : "(" + i + ")"),
            a[o] = ""),
            a
        }
        function r_(e, t) {
            for (let n = 0, r = t.length; n < r && (e = e.replace(t[n], t[n + 1])); n += 2)
                ;
            return e
        }
        function rj(e) {
            return RegExp(e, "g")
        }
        function rE(e) {
            let t = ""
              , n = "";
            for (let r = 0, a = e.length, i; r < a; r++)
                (i = e[r]) !== n && (t += n = i);
            return t
        }
        function rO(e) {
            return ry.call(this, ("" + e).toLowerCase(), !1)
        }
        let rC = {}
          , rT = {};
        function rS(e) {
            rN(e, "add"),
            rN(e, "append"),
            rN(e, "search"),
            rN(e, "update"),
            rN(e, "remove")
        }
        function rN(e, t) {
            e[t + "Async"] = function() {
                let e;
                let n = this
                  , r = arguments;
                var a = r[r.length - 1];
                return rv(a) && (e = a,
                delete r[r.length - 1]),
                a = new Promise(function(e) {
                    setTimeout(function() {
                        n.async = !0;
                        let a = n[t].apply(n, r);
                        n.async = !1,
                        e(a)
                    })
                }
                ),
                e ? (a.then(e),
                this) : a
            }
        }
        function rI(e, t, n, r) {
            let a = e.length, i = [], o, s, l = 0;
            r && (r = []);
            for (let u = a - 1; 0 <= u; u--) {
                let c = e[u]
                  , d = c.length
                  , f = rp()
                  , h = !o;
                for (let e = 0; e < d; e++) {
                    let d = c[e]
                      , p = d.length;
                    if (p)
                        for (let e = 0, c, m; e < p; e++)
                            if (m = d[e],
                            o) {
                                if (o[m]) {
                                    if (!u) {
                                        if (n)
                                            n--;
                                        else if (i[l++] = m,
                                        l === t)
                                            return i
                                    }
                                    (u || r) && (f[m] = 1),
                                    h = !0
                                }
                                if (r && (c = (s[m] || 0) + 1,
                                s[m] = c,
                                c < a)) {
                                    let e = r[c - 2] || (r[c - 2] = []);
                                    e[e.length] = m
                                }
                            } else
                                f[m] = 1
                }
                if (r)
                    o || (s = f);
                else if (!h)
                    return [];
                o = f
            }
            if (r)
                for (let e = r.length - 1, a, s; 0 <= e; e--) {
                    s = (a = r[e]).length;
                    for (let e = 0, r; e < s; e++)
                        if (!o[r = a[e]]) {
                            if (n)
                                n--;
                            else if (i[l++] = r,
                            l === t)
                                return i;
                            o[r] = 1
                        }
                }
            return i
        }
        function rR(e) {
            this.l = !0 !== e && e,
            this.cache = rp(),
            this.h = []
        }
        function rA(e, t, n) {
            rg(e) && (e = e.query);
            let r = this.cache.get(e);
            return r || (r = this.search(e, t, n),
            this.cache.set(e, r)),
            r
        }
        rR.prototype.set = function(e, t) {
            if (!this.cache[e]) {
                var n = this.h.length;
                for (n === this.l ? delete this.cache[this.h[n - 1]] : n++,
                --n; 0 < n; n--)
                    this.h[n] = this.h[n - 1];
                this.h[0] = e
            }
            this.cache[e] = t
        }
        ,
        rR.prototype.get = function(e) {
            let t = this.cache[e];
            if (this.l && t && (e = this.h.indexOf(e))) {
                let t = this.h[e - 1];
                this.h[e - 1] = this.h[e],
                this.h[e] = t
            }
            return t
        }
        ;
        let rP = {
            memory: {
                charset: "latin:extra",
                D: 3,
                B: 4,
                m: !1
            },
            performance: {
                D: 3,
                B: 3,
                s: !1,
                context: {
                    depth: 2,
                    D: 1
                }
            },
            match: {
                charset: "latin:extra",
                G: "reverse"
            },
            score: {
                charset: "latin:advanced",
                D: 20,
                B: 3,
                context: {
                    depth: 3,
                    D: 9
                }
            },
            default: {}
        };
        function rL(e, t, n, r, a, i, o, s) {
            setTimeout(function() {
                let l = e(n ? n + "." + r : r, JSON.stringify(o));
                l && l.then ? l.then(function() {
                    t.export(e, t, n, a, i + 1, s)
                }) : t.export(e, t, n, a, i + 1, s)
            })
        }
        function rM(e, t) {
            if (!(this instanceof rM))
                return new rM(e);
            if (e) {
                rx(e) ? e = rP[e] : (n = e.preset) && (e = Object.assign({}, n[n], e)),
                n = e.charset;
                var n, r = e.lang;
                rx(n) && (-1 === n.indexOf(":") && (n += ":default"),
                n = rT[n]),
                rx(r) && (r = rC[r])
            } else
                e = {};
            let a, i, o = e.context || {};
            if (this.encode = e.encode || n && n.encode || rO,
            this.register = t || rp(),
            this.D = a = e.resolution || 9,
            this.G = t = n && n.G || e.tokenize || "strict",
            this.depth = "strict" === t && o.depth,
            this.l = rf(o.bidirectional),
            this.s = i = rf(e.optimize),
            this.m = rf(e.fastupdate),
            this.B = e.minlength || 1,
            this.C = e.boost,
            this.map = i ? rh(a) : rp(),
            this.A = a = o.resolution || 1,
            this.h = i ? rh(a) : rp(),
            this.F = n && n.F || e.rtl,
            this.H = (t = e.matcher || r && r.H) && rk(t, !1),
            this.J = (t = e.stemmer || r && r.J) && rk(t, !0),
            n = t = e.filter || r && r.filter) {
                n = t,
                r = rp();
                for (let e = 0, t = n.length; e < t; e++)
                    r[n[e]] = 1;
                n = r
            }
            this.filter = n,
            this.cache = (t = e.cache) && new rR(t)
        }
        function rD(e, t, n, r, a) {
            return n && 1 < e ? t + (r || 0) <= e ? n + (a || 0) : (e - 1) / (t + (r || 0)) * (n + (a || 0)) + 1 | 0 : 0
        }
        function rF(e, t, n, r, a, i, o) {
            let s = o ? e.h : e.map;
            (!t[n] || o && !t[n][o]) && (e.s && (s = s[r]),
            o ? ((t = t[n] || (t[n] = rp()))[o] = 1,
            s = s[o] || (s[o] = rp())) : t[n] = 1,
            s = s[n] || (s[n] = []),
            e.s || (s = s[r] || (s[r] = [])),
            i && s.includes(a) || (s[s.length] = a,
            e.m && ((e = e.register[a] || (e.register[a] = []))[e.length] = s)))
        }
        function r$(e, t, n, r, a, i, o, s) {
            let l = []
              , u = s ? e.h : e.map;
            if (e.s || (u = rU(u, o, s, e.l)),
            u) {
                let n = 0
                  , c = Math.min(u.length, s ? e.A : e.D);
                for (let t = 0, d = 0, f, h; t < c && (!(f = u[t]) || (e.s && (f = rU(f, o, s, e.l)),
                a && f && i && ((h = f.length) <= a ? (a -= h,
                f = null) : (f = f.slice(a),
                a = 0)),
                !f || (l[n++] = f,
                !i || !((d += f.length) >= r)))); t++)
                    ;
                if (n)
                    return i ? rZ(l, r, 0) : void (t[t.length] = l)
            }
            return !n && l
        }
        function rZ(e, t, n) {
            return e = 1 === e.length ? e[0] : [].concat.apply([], e),
            n || e.length > t ? e.slice(n, n + t) : e
        }
        function rU(e, t, n, r) {
            return e = n ? (e = e[(r = r && t > n) ? t : n]) && e[r ? n : t] : e[t]
        }
        function rW(e, t, n, r, a) {
            let i = 0;
            if (e.constructor === Array) {
                if (a)
                    -1 !== (t = e.indexOf(t)) ? 1 < e.length && (e.splice(t, 1),
                    i++) : i++;
                else {
                    a = Math.min(e.length, n);
                    for (let o = 0, s; o < a; o++)
                        (s = e[o]) && (i = rW(s, t, n, r, a),
                        r || i || delete e[o])
                }
            } else
                for (let o in e)
                    (i = rW(e[o], t, n, r, a)) || delete e[o];
            return i
        }
        function rz(e) {
            e = e.data;
            var t = self._index;
            let n = e.args;
            var r = e.task;
            "init" === r ? (r = e.options || {},
            e = e.factory,
            t = r.encode,
            r.cache = !1,
            t && 0 === t.indexOf("function") && (r.encode = Function("return " + t)()),
            e ? (Function("return " + e)()(self),
            self._index = new self.FlexSearch.Index(r),
            delete self.FlexSearch) : self._index = new rM(r)) : (e = e.id,
            t = t[r].apply(t, n),
            postMessage("search" === r ? {
                id: e,
                msg: t
            } : {
                id: e
            }))
        }
        (Z = rM.prototype).append = function(e, t) {
            return this.add(e, t, !0)
        }
        ,
        Z.add = function(e, t, n, r) {
            if (t && (e || 0 === e)) {
                if (!r && !n && this.register[e])
                    return this.update(e, t);
                if (r = (t = this.encode(t)).length) {
                    let u = rp()
                      , c = rp()
                      , d = this.depth
                      , f = this.D;
                    for (let h = 0; h < r; h++) {
                        let p = t[this.F ? r - 1 - h : h];
                        var a = p.length;
                        if (p && a >= this.B && (d || !c[p])) {
                            var i = rD(f, r, h)
                              , o = "";
                            switch (this.G) {
                            case "full":
                                if (2 < a) {
                                    for (i = 0; i < a; i++)
                                        for (var s = a; s > i; s--)
                                            if (s - i >= this.B) {
                                                var l = rD(f, r, h, a, i);
                                                rF(this, c, o = p.substring(i, s), l, e, n)
                                            }
                                    break
                                }
                            case "reverse":
                                if (1 < a) {
                                    for (s = a - 1; 0 < s; s--)
                                        (o = p[s] + o).length >= this.B && rF(this, c, o, rD(f, r, h, a, s), e, n);
                                    o = ""
                                }
                            case "forward":
                                if (1 < a) {
                                    for (s = 0; s < a; s++)
                                        (o += p[s]).length >= this.B && rF(this, c, o, i, e, n);
                                    break
                                }
                            default:
                                if (this.C && (i = Math.min(i / this.C(t, p, h) | 0, f - 1)),
                                rF(this, c, p, i, e, n),
                                d && 1 < r && h < r - 1) {
                                    for (a = rp(),
                                    o = this.A,
                                    i = p,
                                    s = Math.min(d + 1, r - h),
                                    a[i] = 1,
                                    l = 1; l < s; l++)
                                        if ((p = t[this.F ? r - 1 - h - l : h + l]) && p.length >= this.B && !a[p]) {
                                            a[p] = 1;
                                            let t = this.l && p > i;
                                            rF(this, u, t ? i : p, rD(o + (r / 2 > o ? 0 : 1), r, h, s - 1, l - 1), e, n, t ? p : i)
                                        }
                                }
                            }
                        }
                    }
                    this.m || (this.register[e] = 1)
                }
            }
            return this
        }
        ,
        Z.search = function(e, t, n) {
            let r, a, i;
            n || (!t && rg(e) ? e = (n = e).query : rg(t) && (n = t));
            let o = [], s, l, u = 0;
            if (n) {
                e = n.query || e,
                t = n.limit,
                u = n.offset || 0;
                var c = n.context;
                l = n.suggest
            }
            if (e && 1 < (s = (e = this.encode("" + e)).length)) {
                n = rp();
                var d = [];
                for (let t = 0, r = 0, a; t < s; t++)
                    if ((a = e[t]) && a.length >= this.B && !n[a]) {
                        if (!this.s && !l && !this.map[a])
                            return o;
                        d[r++] = a,
                        n[a] = 1
                    }
                s = (e = d).length
            }
            if (!s)
                return o;
            for (t || (t = 100),
            c = this.depth && 1 < s && !1 !== c,
            n = 0,
            c ? (r = e[0],
            n = 1) : 1 < s && e.sort(rm); n < s; n++) {
                if (i = e[n],
                c ? (a = r$(this, o, l, t, u, 2 === s, i, r),
                l && !1 === a && o.length || (r = i)) : a = r$(this, o, l, t, u, 1 === s, i),
                a)
                    return a;
                if (l && n === s - 1) {
                    if (!(d = o.length)) {
                        if (c) {
                            c = 0,
                            n = -1;
                            continue
                        }
                        return o
                    }
                    if (1 === d)
                        return rZ(o[0], t, u)
                }
            }
            return rI(o, t, u, l)
        }
        ,
        Z.contain = function(e) {
            return !!this.register[e]
        }
        ,
        Z.update = function(e, t) {
            return this.remove(e).add(e, t)
        }
        ,
        Z.remove = function(e, t) {
            let n = this.register[e];
            if (n) {
                if (this.m)
                    for (let t = 0, r; t < n.length; t++)
                        (r = n[t]).splice(r.indexOf(e), 1);
                else
                    rW(this.map, e, this.D, this.s),
                    this.depth && rW(this.h, e, this.A, this.s);
                if (t || delete this.register[e],
                this.cache) {
                    t = this.cache;
                    for (let n = 0, r; n < t.h.length; n++)
                        r = t.h[n],
                        t.cache[r].includes(e) && (t.h.splice(n--, 1),
                        delete t.cache[r])
                }
            }
            return this
        }
        ,
        Z.searchCache = rA,
        Z.export = function(e, t, n, r, a, i) {
            let o, s, l = !0;
            switch (void 0 === i && (l = new Promise(e => {
                i = e
            }
            )),
            a || (a = 0)) {
            case 0:
                if (o = "reg",
                this.m)
                    for (let e in s = rp(),
                    this.register)
                        s[e] = 1;
                else
                    s = this.register;
                break;
            case 1:
                o = "cfg",
                s = {
                    doc: 0,
                    opt: this.s ? 1 : 0
                };
                break;
            case 2:
                o = "map",
                s = this.map;
                break;
            case 3:
                o = "ctx",
                s = this.h;
                break;
            default:
                void 0 === n && i && i();
                return
            }
            return rL(e, t || this, n, o, r, a, s, i),
            l
        }
        ,
        Z.import = function(e, t) {
            if (t)
                switch (rx(t) && (t = JSON.parse(t)),
                e) {
                case "cfg":
                    this.s = !!t.opt;
                    break;
                case "reg":
                    this.m = !1,
                    this.register = t;
                    break;
                case "map":
                    this.map = t;
                    break;
                case "ctx":
                    this.h = t
                }
        }
        ,
        rS(rM.prototype);
        let rH = 0;
        function rG(e) {
            var t;
            if (!(this instanceof rG))
                return new rG(e);
            e ? rv(t = e.encode) && (e.encode = t.toString()) : e = {},
            (t = (self || window)._factory) && (t = t.toString());
            let r = "undefined" == typeof window && self.exports
              , a = this;
            this.o = function(e, t, r) {
                let a;
                try {
                    a = t ? new (n(5184)).Worker("//node/node.js") : e ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + rz.toString()],{
                        type: "text/javascript"
                    }))) : new Worker(rx(r) ? r : "worker/worker.js",{
                        type: "module"
                    })
                } catch (e) {}
                return a
            }(t, r, e.worker),
            this.h = rp(),
            this.o && (r ? this.o.on("message", function(e) {
                a.h[e.id](e.msg),
                delete a.h[e.id]
            }) : this.o.onmessage = function(e) {
                e = e.data,
                a.h[e.id](e.msg),
                delete a.h[e.id]
            }
            ,
            this.o.postMessage({
                task: "init",
                factory: t,
                options: e
            }))
        }
        function rB(e) {
            rG.prototype[e] = rG.prototype[e + "Async"] = function() {
                let t;
                let n = this
                  , r = [].slice.call(arguments);
                var a = r[r.length - 1];
                return rv(a) && (t = a,
                r.splice(r.length - 1, 1)),
                a = new Promise(function(t) {
                    setTimeout(function() {
                        n.h[++rH] = t,
                        n.o.postMessage({
                            task: e,
                            id: rH,
                            args: r
                        })
                    })
                }
                ),
                t ? (a.then(t),
                this) : a
            }
        }
        function rV(e) {
            if (!(this instanceof rV))
                return new rV(e);
            var t, n = e.document || e.doc || e;
            this.K = [],
            this.h = [],
            this.A = [],
            this.register = rp(),
            this.key = (t = n.key || n.id) && rq(t, this.A) || "id",
            this.m = rf(e.fastupdate),
            this.C = (t = n.store) && !0 !== t && [],
            this.store = t && rp(),
            this.I = (t = n.tag) && rq(t, this.A),
            this.l = t && rp(),
            this.cache = (t = e.cache) && new rR(t),
            e.cache = !1,
            this.o = e.worker,
            this.async = !1,
            t = rp();
            let r = n.index || n.field || n;
            rx(r) && (r = [r]);
            for (let n = 0, a, i; n < r.length; n++)
                rx(a = r[n]) || (i = a,
                a = a.field),
                i = rg(i) ? Object.assign({}, e, i) : e,
                this.o && (t[a] = new rG(i),
                t[a].o || (this.o = !1)),
                this.o || (t[a] = new rM(i,this.register)),
                this.K[n] = rq(a, this.A),
                this.h[n] = a;
            if (this.C)
                for (rx(e = n.store) && (e = [e]),
                n = 0; n < e.length; n++)
                    this.C[n] = rq(e[n], this.A);
            this.index = t
        }
        function rq(e, t) {
            let n = e.split(":")
              , r = 0;
            for (let a = 0; a < n.length; a++)
                0 <= (e = n[a]).indexOf("[]") && (e = e.substring(0, e.length - 2)) && (t[r] = !0),
                e && (n[r++] = e);
            return r < n.length && (n.length = r),
            1 < r ? n : n[0]
        }
        function rK(e, t) {
            if (rx(t))
                e = e[t];
            else
                for (let n = 0; e && n < t.length; n++)
                    e = e[t[n]];
            return e
        }
        function rQ(e, t, n, r) {
            let a = this.l[e]
              , i = a && a.length - n;
            if (i && 0 < i)
                return (i > t || n) && (a = a.slice(n, n + t)),
                r && (a = rJ.call(this, a)),
                {
                    tag: e,
                    result: a
                }
        }
        function rJ(e) {
            let t = Array(e.length);
            for (let n = 0, r; n < e.length; n++)
                r = e[n],
                t[n] = {
                    id: r,
                    doc: this.store[r]
                };
            return t
        }
        rB("add"),
        rB("append"),
        rB("search"),
        rB("update"),
        rB("remove"),
        (Z = rV.prototype).add = function(e, t, n) {
            if (rg(e) && (e = rK(t = e, this.key)),
            t && (e || 0 === e)) {
                if (!n && this.register[e])
                    return this.update(e, t);
                for (let r = 0, a, i; r < this.h.length; r++)
                    i = this.h[r],
                    rx(a = this.K[r]) && (a = [a]),
                    function e(t, n, r, a, i, o, s, l) {
                        if (t = t[s]) {
                            if (a === n.length - 1) {
                                if (t.constructor === Array) {
                                    if (r[a]) {
                                        for (n = 0; n < t.length; n++)
                                            i.add(o, t[n], !0, !0);
                                        return
                                    }
                                    t = t.join(" ")
                                }
                                i.add(o, t, l, !0)
                            } else if (t.constructor === Array)
                                for (s = 0; s < t.length; s++)
                                    e(t, n, r, a, i, o, s, l);
                            else
                                s = n[++a],
                                e(t, n, r, a, i, o, s, l)
                        }
                    }(t, a, this.A, 0, this.index[i], e, a[0], n);
                if (this.I) {
                    let r = rK(t, this.I)
                      , a = rp();
                    rx(r) && (r = [r]);
                    for (let t = 0, i, o; t < r.length; t++)
                        if (!a[i = r[t]] && (a[i] = 1,
                        o = this.l[i] || (this.l[i] = []),
                        !n || !o.includes(e)) && (o[o.length] = e,
                        this.m)) {
                            let t = this.register[e] || (this.register[e] = []);
                            t[t.length] = o
                        }
                }
                if (this.store && (!n || !this.store[e])) {
                    let n;
                    if (this.C) {
                        n = rp();
                        for (let e = 0, r; e < this.C.length; e++)
                            rx(r = this.C[e]) ? n[r] = t[r] : function e(t, n, r, a, i) {
                                if (t = t[i],
                                a === r.length - 1)
                                    n[i] = t;
                                else if (t) {
                                    if (t.constructor === Array)
                                        for (n = n[i] = Array(t.length),
                                        i = 0; i < t.length; i++)
                                            e(t, n, r, a, i);
                                    else
                                        n = n[i] || (n[i] = rp()),
                                        i = r[++a],
                                        e(t, n, r, a, i)
                                }
                            }(t, n, r, 0, r[0])
                    }
                    this.store[e] = n || t
                }
            }
            return this
        }
        ,
        Z.append = function(e, t) {
            return this.add(e, t, !0)
        }
        ,
        Z.update = function(e, t) {
            return this.remove(e).add(e, t)
        }
        ,
        Z.remove = function(e) {
            if (rg(e) && (e = rK(e, this.key)),
            this.register[e]) {
                for (var t = 0; t < this.h.length && (this.index[this.h[t]].remove(e, !this.o),
                !this.m); t++)
                    ;
                if (this.I && !this.m)
                    for (let n in this.l) {
                        let r = (t = this.l[n]).indexOf(e);
                        -1 !== r && (1 < t.length ? t.splice(r, 1) : delete this.l[n])
                    }
                this.store && delete this.store[e],
                delete this.register[e]
            }
            return this
        }
        ,
        Z.search = function(e, t, n, r) {
            n || (!t && rg(e) ? (n = e,
            e = "") : rg(t) && (n = t,
            t = 0));
            let a = [], i = [], o, s, l, u, c, d, f = 0;
            if (n) {
                if (n.constructor === Array)
                    l = n,
                    n = null;
                else {
                    if (e = n.query || e,
                    l = (o = n.pluck) || n.index || n.field,
                    u = n.tag,
                    s = this.store && n.enrich,
                    c = "and" === n.bool,
                    t = n.limit || t || 100,
                    d = n.offset || 0,
                    u && (rx(u) && (u = [u]),
                    !e)) {
                        for (let e = 0, n; e < u.length; e++)
                            (n = rQ.call(this, u[e], t, d, s)) && (a[a.length] = n,
                            f++);
                        return f ? a : []
                    }
                    rx(l) && (l = [l])
                }
            }
            l || (l = this.h),
            c = c && (1 < l.length || u && 1 < u.length);
            let h = !r && (this.o || this.async) && [];
            for (let o = 0, p, m, x; o < l.length; o++) {
                let g;
                if (rx(m = l[o]) || (m = (g = m).field,
                e = g.query || e,
                t = g.limit || t,
                s = g.enrich || s),
                h)
                    h[o] = this.index[m].searchAsync(e, t, g || n);
                else {
                    if (x = (p = r ? r[o] : this.index[m].search(e, t, g || n)) && p.length,
                    u && x) {
                        let e = []
                          , n = 0;
                        c && (e[0] = [p]);
                        for (let t = 0, r, a; t < u.length; t++)
                            r = u[t],
                            (x = (a = this.l[r]) && a.length) && (n++,
                            e[e.length] = c ? [a] : a);
                        n && (x = (p = c ? rI(e, t || 100, d || 0) : function(e, t) {
                            let n = rp()
                              , r = rp()
                              , a = [];
                            for (let t = 0; t < e.length; t++)
                                n[e[t]] = 1;
                            for (let e = 0, i; e < t.length; e++) {
                                i = t[e];
                                for (let e = 0, t; e < i.length; e++)
                                    n[t = i[e]] && !r[t] && (r[t] = 1,
                                    a[a.length] = t)
                            }
                            return a
                        }(p, e)).length)
                    }
                    if (x)
                        i[f] = m,
                        a[f++] = p;
                    else if (c)
                        return []
                }
            }
            if (h) {
                let r = this;
                return new Promise(function(a) {
                    Promise.all(h).then(function(i) {
                        a(r.search(e, t, n, i))
                    })
                }
                )
            }
            if (!f)
                return [];
            if (o && (!s || !this.store))
                return a[0];
            for (let e = 0, t; e < i.length; e++) {
                if ((t = a[e]).length && s && (t = rJ.call(this, t)),
                o)
                    return t;
                a[e] = {
                    field: i[e],
                    result: t
                }
            }
            return a
        }
        ,
        Z.contain = function(e) {
            return !!this.register[e]
        }
        ,
        Z.get = function(e) {
            return this.store[e]
        }
        ,
        Z.set = function(e, t) {
            return this.store[e] = t,
            this
        }
        ,
        Z.searchCache = rA,
        Z.export = function(e, t, n, r, a, i) {
            let o;
            if (void 0 === i && (o = new Promise(e => {
                i = e
            }
            )),
            a || (a = 0),
            r || (r = 0),
            r < this.h.length) {
                let n = this.h[r]
                  , o = this.index[n];
                t = this,
                setTimeout(function() {
                    o.export(e, t, a ? n : "", r, a++, i) || (r++,
                    a = 1,
                    t.export(e, t, n, r, a, i))
                })
            } else {
                let t, o;
                switch (a) {
                case 1:
                    t = "tag",
                    o = this.l,
                    n = null;
                    break;
                case 2:
                    t = "store",
                    o = this.store,
                    n = null;
                    break;
                default:
                    i();
                    return
                }
                rL(e, this, n, t, r, a, o, i)
            }
            return o
        }
        ,
        Z.import = function(e, t) {
            if (t)
                switch (rx(t) && (t = JSON.parse(t)),
                e) {
                case "tag":
                    this.l = t;
                    break;
                case "reg":
                    this.m = !1,
                    this.register = t;
                    for (let e = 0, n; e < this.h.length; e++)
                        (n = this.index[this.h[e]]).register = t,
                        n.m = !1;
                    break;
                case "store":
                    this.store = t;
                    break;
                default:
                    let n = (e = e.split("."))[0];
                    e = e[1],
                    n && e && this.index[n].import(e, t)
                }
        }
        ,
        rS(rV.prototype);
        let rY = [rj("[\xe0\xe1\xe2\xe3\xe4\xe5]"), "a", rj("[\xe8\xe9\xea\xeb]"), "e", rj("[\xec\xed\xee\xef]"), "i", rj("[\xf2\xf3\xf4\xf5\xf6ő]"), "o", rj("[\xf9\xfa\xfb\xfcű]"), "u", rj("[\xfdŷ\xff]"), "y", rj("\xf1"), "n", rj("[\xe7c]"), "k", rj("\xdf"), "s", rj(" & "), " and "];
        function rX(e) {
            var t = e = "" + e;
            return t.normalize && (t = t.normalize("NFD").replace(rw, "")),
            ry.call(this, t.toLowerCase(), !e.normalize && rY)
        }
        let r0 = /[^a-z0-9]+/
          , r1 = {
            b: "p",
            v: "f",
            w: "f",
            z: "s",
            x: "s",
            ß: "s",
            d: "t",
            n: "m",
            c: "k",
            g: "k",
            j: "k",
            q: "k",
            i: "e",
            y: "e",
            u: "o"
        };
        function r2(e) {
            e = rX.call(this, e).join(" ");
            let t = [];
            if (e) {
                let n = e.split(r0)
                  , r = n.length;
                for (let a = 0, i, o = 0; a < r; a++)
                    if ((e = n[a]) && (!this.filter || !this.filter[e])) {
                        let n = r1[i = e[0]] || i
                          , r = n;
                        for (let t = 1; t < e.length; t++) {
                            let a = r1[i = e[t]] || i;
                            a && a !== r && (n += a,
                            r = a)
                        }
                        t[o++] = n
                    }
            }
            return t
        }
        let r4 = [rj("ae"), "a", rj("oe"), "o", rj("sh"), "s", rj("th"), "t", rj("ph"), "f", rj("pf"), "f", rj("(?![aeo])h(?![aeo])"), "", rj("(?!^[aeo])h(?!^[aeo])"), ""];
        function r5(e, t) {
            return e && (2 < (e = r2.call(this, e).join(" ")).length && (e = r_(e, r4)),
            t || (1 < e.length && (e = rE(e)),
            e && (e = e.split(" ")))),
            e || []
        }
        let r3 = rj("(?!\\b)[aeo]");
        function r7(e) {
            "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout( () => {
                throw e
            }
            ))
        }
        function r6() {
            let e = []
              , t = {
                addEventListener: (e, n, r, a) => (e.addEventListener(n, r, a),
                t.add( () => e.removeEventListener(n, r, a))),
                requestAnimationFrame() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    let a = requestAnimationFrame(...n);
                    return t.add( () => cancelAnimationFrame(a))
                },
                nextFrame() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    return t.requestAnimationFrame( () => t.requestAnimationFrame(...n))
                },
                setTimeout() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    let a = setTimeout(...n);
                    return t.add( () => clearTimeout(a))
                },
                microTask() {
                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    let a = {
                        current: !0
                    };
                    return r7( () => {
                        a.current && n[0]()
                    }
                    ),
                    t.add( () => {
                        a.current = !1
                    }
                    )
                },
                style(e, t, n) {
                    let r = e.style.getPropertyValue(t);
                    return Object.assign(e.style, {
                        [t]: n
                    }),
                    this.add( () => {
                        Object.assign(e.style, {
                            [t]: r
                        })
                    }
                    )
                },
                group(e) {
                    let t = r6();
                    return e(t),
                    this.add( () => t.dispose())
                },
                add: t => (e.push(t),
                () => {
                    let n = e.indexOf(t);
                    if (n >= 0)
                        for (let t of e.splice(n, 1))
                            t()
                }
                ),
                dispose() {
                    for (let t of e.splice(0))
                        t()
                }
            };
            return t
        }
        function r9() {
            let[e] = (0,
            H.useState)(r6);
            return (0,
            H.useEffect)( () => () => e.dispose(), [e]),
            e
        }
        rT["latin:default"] = {
            encode: rO,
            F: !1,
            G: ""
        },
        rT["latin:simple"] = {
            encode: rX,
            F: !1,
            G: ""
        },
        rT["latin:balance"] = {
            encode: r2,
            F: !1,
            G: "strict"
        },
        rT["latin:advanced"] = {
            encode: r5,
            F: !1,
            G: ""
        },
        rT["latin:extra"] = {
            encode: function(e) {
                return e && (1 < (e = r5.call(this, e, !0)).length && (e = e.replace(r3, "")),
                1 < e.length && (e = rE(e)),
                e && (e = e.split(" "))),
                e || []
            },
            F: !1,
            G: ""
        };
        var r8 = Object.defineProperty
          , ae = (e, t, n) => t in e ? r8(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , at = (e, t, n) => (ae(e, "symbol" != typeof t ? t + "" : t, n),
        n);
        class an {
            set(e) {
                this.current !== e && (this.handoffState = "pending",
                this.currentId = 0,
                this.current = e)
            }
            reset() {
                this.set(this.detect())
            }
            nextId() {
                return ++this.currentId
            }
            get isServer() {
                return "server" === this.current
            }
            get isClient() {
                return "client" === this.current
            }
            detect() {
                return "undefined" == typeof document ? "server" : "client"
            }
            handoff() {
                "pending" === this.handoffState && (this.handoffState = "complete")
            }
            get isHandoffComplete() {
                return "complete" === this.handoffState
            }
            constructor() {
                at(this, "current", this.detect()),
                at(this, "handoffState", "pending"),
                at(this, "currentId", 0)
            }
        }
        let ar = new an
          , aa = (e, t) => {
            ar.isServer ? (0,
            H.useEffect)(e, t) : (0,
            H.useLayoutEffect)(e, t)
        }
        ;
        function ai(e) {
            let t = (0,
            H.useRef)(e);
            return aa( () => {
                t.current = e
            }
            , [e]),
            t
        }
        let ao = function(e) {
            let t = ai(e);
            return H.useCallback(function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return t.current(...n)
            }, [t])
        };
        function as() {
            let e = (0,
            H.useRef)(!1);
            return aa( () => (e.current = !0,
            () => {
                e.current = !1
            }
            ), []),
            e
        }
        function al() {
            let e;
            let t = (e = "undefined" == typeof document,
            (0,
            G.useSyncExternalStore)( () => () => {}
            , () => !1, () => !e))
              , [n,r] = H.useState(ar.isHandoffComplete);
            return n && !1 === ar.isHandoffComplete && r(!1),
            H.useEffect( () => {
                !0 !== n && r(!0)
            }
            , [n]),
            H.useEffect( () => ar.handoff(), []),
            !t && n
        }
        let au = Symbol();
        function ac() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            let r = (0,
            H.useRef)(t);
            (0,
            H.useEffect)( () => {
                r.current = t
            }
            , [t]);
            let a = ao(e => {
                for (let t of r.current)
                    null != t && ("function" == typeof t ? t(e) : t.current = e)
            }
            );
            return t.every(e => null == e || (null == e ? void 0 : e[au])) ? void 0 : a
        }
        function ad(e, t) {
            for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
                r[a - 2] = arguments[a];
            if (e in t) {
                let n = t[e];
                return "function" == typeof n ? n(...r) : n
            }
            let i = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
            throw Error.captureStackTrace && Error.captureStackTrace(i, ad),
            i
        }
        function af(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            e && n.length > 0 && e.classList.add(...n)
        }
        function ah(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            e && n.length > 0 && e.classList.remove(...n)
        }
        let ap = (0,
        H.createContext)(null);
        ap.displayName = "OpenClosedContext";
        var am = ((a = am || {})[a.Open = 1] = "Open",
        a[a.Closed = 2] = "Closed",
        a[a.Closing = 4] = "Closing",
        a[a.Opening = 8] = "Opening",
        a);
        function ax() {
            return (0,
            H.useContext)(ap)
        }
        function ag(e) {
            let {value: t, children: n} = e;
            return H.createElement(ap.Provider, {
                value: t
            }, n)
        }
        function av() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
        }
        var ay = ((i = ay || {})[i.None = 0] = "None",
        i[i.RenderStrategy = 1] = "RenderStrategy",
        i[i.Static = 2] = "Static",
        i)
          , ab = ((o = ab || {})[o.Unmount = 0] = "Unmount",
        o[o.Hidden = 1] = "Hidden",
        o);
        function aw(e) {
            let {ourProps: t, theirProps: n, slot: r, defaultTag: a, features: i, visible: o=!0, name: s, mergeRefs: l} = e;
            l = null != l ? l : a_;
            let u = aj(n, t);
            if (o)
                return ak(u, r, a, s, l);
            let c = null != i ? i : 0;
            if (2 & c) {
                let {static: e=!1, ...t} = u;
                if (e)
                    return ak(t, r, a, s, l)
            }
            if (1 & c) {
                let {unmount: e=!0, ...t} = u;
                return ad(e ? 0 : 1, {
                    0: () => null,
                    1: () => ak({
                        ...t,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, r, a, s, l)
                })
            }
            return ak(u, r, a, s, l)
        }
        function ak(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0
              , a = arguments.length > 4 ? arguments[4] : void 0
              , {as: i=n, children: o, refName: s="ref", ...l} = aC(e, ["unmount", "static"])
              , u = void 0 !== e.ref ? {
                [s]: e.ref
            } : {}
              , c = "function" == typeof o ? o(t) : o;
            "className"in l && l.className && "function" == typeof l.className && (l.className = l.className(t));
            let d = {};
            if (t) {
                let e = !1
                  , n = [];
                for (let[r,a] of Object.entries(t))
                    "boolean" == typeof a && (e = !0),
                    !0 === a && n.push(r);
                e && (d["data-headlessui-state"] = n.join(" "))
            }
            if (i === H.Fragment && Object.keys(aO(l)).length > 0) {
                if (!(0,
                H.isValidElement)(c) || Array.isArray(c) && c.length > 1)
                    throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(r, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(l).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"));
                let e = c.props
                  , t = "function" == typeof (null == e ? void 0 : e.className) ? function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return av(null == e ? void 0 : e.className(...n), l.className)
                }
                : av(null == e ? void 0 : e.className, l.className);
                return (0,
                H.cloneElement)(c, Object.assign({}, aj(c.props, aO(aC(l, ["ref"]))), d, u, {
                    ref: a(c.ref, u.ref)
                }, t ? {
                    className: t
                } : {}))
            }
            return (0,
            H.createElement)(i, Object.assign({}, aC(l, ["ref"]), i !== H.Fragment && u, i !== H.Fragment && d), c)
        }
        function a_() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.every(e => null == e) ? void 0 : e => {
                for (let n of t)
                    null != n && ("function" == typeof n ? n(e) : n.current = e)
            }
        }
        function aj() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (0 === t.length)
                return {};
            if (1 === t.length)
                return t[0];
            let r = {}
              , a = {};
            for (let e of t)
                for (let t in e)
                    t.startsWith("on") && "function" == typeof e[t] ? (null != a[t] || (a[t] = []),
                    a[t].push(e[t])) : r[t] = e[t];
            if (r.disabled || r["aria-disabled"])
                return Object.assign(r, Object.fromEntries(Object.keys(a).map(e => [e, void 0])));
            for (let e in a)
                Object.assign(r, {
                    [e](t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                            r[i - 1] = arguments[i];
                        for (let n of a[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent)instanceof Event) && t.defaultPrevented)
                                return;
                            n(t, ...r)
                        }
                    }
                });
            return r
        }
        function aE(e) {
            var t;
            return Object.assign((0,
            H.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function aO(e) {
            let t = Object.assign({}, e);
            for (let e in t)
                void 0 === t[e] && delete t[e];
            return t
        }
        function aC(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = Object.assign({}, e);
            for (let e of t)
                e in n && delete n[e];
            return n
        }
        function aT() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.split(/\s+/).filter(e => e.length > 1)
        }
        let aS = (0,
        H.createContext)(null);
        aS.displayName = "TransitionContext";
        var aN = ((s = aN || {}).Visible = "visible",
        s.Hidden = "hidden",
        s);
        let aI = (0,
        H.createContext)(null);
        function aR(e) {
            return "children"in e ? aR(e.children) : e.current.filter(e => {
                let {el: t} = e;
                return null !== t.current
            }
            ).filter(e => {
                let {state: t} = e;
                return "visible" === t
            }
            ).length > 0
        }
        function aA(e, t) {
            let n = ai(e)
              , r = (0,
            H.useRef)([])
              , a = as()
              , i = r9()
              , o = ao(function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ab.Hidden
                  , o = r.current.findIndex(t => {
                    let {el: n} = t;
                    return n === e
                }
                );
                -1 !== o && (ad(t, {
                    [ab.Unmount]() {
                        r.current.splice(o, 1)
                    },
                    [ab.Hidden]() {
                        r.current[o].state = "hidden"
                    }
                }),
                i.microTask( () => {
                    var e;
                    !aR(r) && a.current && (null == (e = n.current) || e.call(n))
                }
                ))
            })
              , s = ao(e => {
                let t = r.current.find(t => {
                    let {el: n} = t;
                    return n === e
                }
                );
                return t ? "visible" !== t.state && (t.state = "visible") : r.current.push({
                    el: e,
                    state: "visible"
                }),
                () => o(e, ab.Unmount)
            }
            )
              , l = (0,
            H.useRef)([])
              , u = (0,
            H.useRef)(Promise.resolve())
              , c = (0,
            H.useRef)({
                enter: [],
                leave: [],
                idle: []
            })
              , d = ao( (e, n, r) => {
                l.current.splice(0),
                t && (t.chains.current[n] = t.chains.current[n].filter(t => {
                    let[n] = t;
                    return n !== e
                }
                )),
                null == t || t.chains.current[n].push([e, new Promise(e => {
                    l.current.push(e)
                }
                )]),
                null == t || t.chains.current[n].push([e, new Promise(e => {
                    Promise.all(c.current[n].map(e => {
                        let[t,n] = e;
                        return n
                    }
                    )).then( () => e())
                }
                )]),
                "enter" === n ? u.current = u.current.then( () => null == t ? void 0 : t.wait.current).then( () => r(n)) : r(n)
            }
            )
              , f = ao( (e, t, n) => {
                Promise.all(c.current[t].splice(0).map(e => {
                    let[t,n] = e;
                    return n
                }
                )).then( () => {
                    var e;
                    null == (e = l.current.shift()) || e()
                }
                ).then( () => n(t))
            }
            );
            return (0,
            H.useMemo)( () => ({
                children: r,
                register: s,
                unregister: o,
                onStart: d,
                onStop: f,
                wait: u,
                chains: c
            }), [s, o, r, d, f, c, u])
        }
        function aP() {}
        aI.displayName = "NestingContext";
        let aL = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
        function aM(e) {
            var t;
            let n = {};
            for (let r of aL)
                n[r] = null != (t = e[r]) ? t : aP;
            return n
        }
        let aD = ay.RenderStrategy
          , aF = aE(function(e, t) {
            let {show: n, appear: r=!1, unmount: a=!0, ...i} = e
              , o = (0,
            H.useRef)(null)
              , s = ac(o, t);
            al();
            let l = ax();
            if (void 0 === n && null !== l && (n = (l & am.Open) === am.Open),
            ![!0, !1].includes(n))
                throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            let[u,c] = (0,
            H.useState)(n ? "visible" : "hidden")
              , d = aA( () => {
                c("hidden")
            }
            )
              , [f,h] = (0,
            H.useState)(!0)
              , p = (0,
            H.useRef)([n]);
            aa( () => {
                !1 !== f && p.current[p.current.length - 1] !== n && (p.current.push(n),
                h(!1))
            }
            , [p, n]);
            let m = (0,
            H.useMemo)( () => ({
                show: n,
                appear: r,
                initial: f
            }), [n, r, f]);
            (0,
            H.useEffect)( () => {
                if (n)
                    c("visible");
                else if (aR(d)) {
                    let e = o.current;
                    if (!e)
                        return;
                    let t = e.getBoundingClientRect();
                    0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && c("hidden")
                } else
                    c("hidden")
            }
            , [n, d]);
            let x = {
                unmount: a
            }
              , g = ao( () => {
                var t;
                f && h(!1),
                null == (t = e.beforeEnter) || t.call(e)
            }
            )
              , v = ao( () => {
                var t;
                f && h(!1),
                null == (t = e.beforeLeave) || t.call(e)
            }
            );
            return H.createElement(aI.Provider, {
                value: d
            }, H.createElement(aS.Provider, {
                value: m
            }, aw({
                ourProps: {
                    ...x,
                    as: H.Fragment,
                    children: H.createElement(a$, {
                        ref: s,
                        ...x,
                        ...i,
                        beforeEnter: g,
                        beforeLeave: v
                    })
                },
                theirProps: {},
                defaultTag: H.Fragment,
                features: aD,
                visible: "visible" === u,
                name: "Transition"
            })))
        })
          , a$ = aE(function(e, t) {
            var n, r, a;
            let i;
            let {beforeEnter: o, afterEnter: s, beforeLeave: l, afterLeave: u, enter: c, enterFrom: d, enterTo: f, entered: h, leave: p, leaveFrom: m, leaveTo: x, ...g} = e
              , v = (0,
            H.useRef)(null)
              , y = ac(v, t)
              , b = null == (n = g.unmount) || n ? ab.Unmount : ab.Hidden
              , {show: w, appear: k, initial: _} = function() {
                let e = (0,
                H.useContext)(aS);
                if (null === e)
                    throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }()
              , [j,E] = (0,
            H.useState)(w ? "visible" : "hidden")
              , O = function() {
                let e = (0,
                H.useContext)(aI);
                if (null === e)
                    throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }()
              , {register: C, unregister: T} = O;
            (0,
            H.useEffect)( () => C(v), [C, v]),
            (0,
            H.useEffect)( () => {
                if (b === ab.Hidden && v.current) {
                    if (w && "visible" !== j) {
                        E("visible");
                        return
                    }
                    return ad(j, {
                        hidden: () => T(v),
                        visible: () => C(v)
                    })
                }
            }
            , [j, v, C, T, w, b]);
            let S = ai({
                base: aT(g.className),
                enter: aT(c),
                enterFrom: aT(d),
                enterTo: aT(f),
                entered: aT(h),
                leave: aT(p),
                leaveFrom: aT(m),
                leaveTo: aT(x)
            })
              , N = (a = {
                beforeEnter: o,
                afterEnter: s,
                beforeLeave: l,
                afterLeave: u
            },
            i = (0,
            H.useRef)(aM(a)),
            (0,
            H.useEffect)( () => {
                i.current = aM(a)
            }
            , [a]),
            i)
              , I = al();
            (0,
            H.useEffect)( () => {
                if (I && "visible" === j && null === v.current)
                    throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
            }
            , [v, j, I]);
            let R = k && w && _
              , A = I && (!_ || k) ? w ? "enter" : "leave" : "idle"
              , P = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , [t,n] = (0,
                H.useState)(e)
                  , r = as()
                  , a = (0,
                H.useCallback)(e => {
                    r.current && n(t => t | e)
                }
                , [t, r])
                  , i = (0,
                H.useCallback)(e => !!(t & e), [t]);
                return {
                    flags: t,
                    addFlag: a,
                    hasFlag: i,
                    removeFlag: (0,
                    H.useCallback)(e => {
                        r.current && n(t => t & ~e)
                    }
                    , [n, r]),
                    toggleFlag: (0,
                    H.useCallback)(e => {
                        r.current && n(t => t ^ e)
                    }
                    , [n])
                }
            }(0)
              , L = ao(e => ad(e, {
                enter: () => {
                    P.addFlag(am.Opening),
                    N.current.beforeEnter()
                }
                ,
                leave: () => {
                    P.addFlag(am.Closing),
                    N.current.beforeLeave()
                }
                ,
                idle: () => {}
            }))
              , M = ao(e => ad(e, {
                enter: () => {
                    P.removeFlag(am.Opening),
                    N.current.afterEnter()
                }
                ,
                leave: () => {
                    P.removeFlag(am.Closing),
                    N.current.afterLeave()
                }
                ,
                idle: () => {}
            }))
              , D = aA( () => {
                E("hidden"),
                T(v)
            }
            , O)
              , F = (0,
            H.useRef)(!1);
            !function(e) {
                let {immediate: t, container: n, direction: r, classes: a, onStart: i, onStop: o} = e
                  , s = as()
                  , l = r9()
                  , u = ai(r);
                aa( () => {
                    t && (u.current = "enter")
                }
                , [t]),
                aa( () => {
                    let e = r6();
                    l.add(e.dispose);
                    let t = n.current;
                    if (t && "idle" !== u.current && s.current) {
                        var r, c, d;
                        let n, s, l, f, h, p, m;
                        return e.dispose(),
                        i.current(u.current),
                        e.add((r = a.current,
                        c = "enter" === u.current,
                        d = () => {
                            e.dispose(),
                            o.current(u.current)
                        }
                        ,
                        s = c ? "enter" : "leave",
                        l = r6(),
                        f = void 0 !== d ? (n = {
                            called: !1
                        },
                        function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            if (!n.called)
                                return n.called = !0,
                                d(...t)
                        }
                        ) : () => {}
                        ,
                        "enter" === s && (t.removeAttribute("hidden"),
                        t.style.display = ""),
                        h = ad(s, {
                            enter: () => r.enter,
                            leave: () => r.leave
                        }),
                        p = ad(s, {
                            enter: () => r.enterTo,
                            leave: () => r.leaveTo
                        }),
                        m = ad(s, {
                            enter: () => r.enterFrom,
                            leave: () => r.leaveFrom
                        }),
                        ah(t, ...r.base, ...r.enter, ...r.enterTo, ...r.enterFrom, ...r.leave, ...r.leaveFrom, ...r.leaveTo, ...r.entered),
                        af(t, ...r.base, ...h, ...m),
                        l.nextFrame( () => {
                            ah(t, ...r.base, ...h, ...m),
                            af(t, ...r.base, ...h, ...p),
                            function(e, t) {
                                let n = r6();
                                if (!e)
                                    return n.dispose;
                                let {transitionDuration: r, transitionDelay: a} = getComputedStyle(e)
                                  , [i,o] = [r, a].map(e => {
                                    let[t=0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort( (e, t) => t - e);
                                    return t
                                }
                                )
                                  , s = i + o;
                                if (0 !== s) {
                                    n.group(n => {
                                        n.setTimeout( () => {
                                            t(),
                                            n.dispose()
                                        }
                                        , s),
                                        n.addEventListener(e, "transitionrun", e => {
                                            e.target === e.currentTarget && n.dispose()
                                        }
                                        )
                                    }
                                    );
                                    let r = n.addEventListener(e, "transitionend", e => {
                                        e.target === e.currentTarget && (t(),
                                        r())
                                    }
                                    )
                                } else
                                    t();
                                n.add( () => t()),
                                n.dispose
                            }(t, () => (ah(t, ...r.base, ...h),
                            af(t, ...r.base, ...r.entered),
                            f()))
                        }
                        ),
                        l.dispose)),
                        e.dispose
                    }
                }
                , [r])
            }({
                immediate: R,
                container: v,
                classes: S,
                direction: A,
                onStart: ai(e => {
                    F.current = !0,
                    D.onStart(v, e, L)
                }
                ),
                onStop: ai(e => {
                    F.current = !1,
                    D.onStop(v, e, M),
                    "leave" !== e || aR(D) || (E("hidden"),
                    T(v))
                }
                )
            });
            let $ = g;
            return R ? $ = {
                ...$,
                className: av(g.className, ...S.current.enter, ...S.current.enterFrom)
            } : F.current && ($.className = av(g.className, null == (r = v.current) ? void 0 : r.className),
            "" === $.className && delete $.className),
            H.createElement(aI.Provider, {
                value: D
            }, H.createElement(ag, {
                value: ad(j, {
                    visible: am.Open,
                    hidden: am.Closed
                }) | P.flags
            }, aw({
                ourProps: {
                    ref: y
                },
                theirProps: $,
                defaultTag: "div",
                features: aD,
                visible: "visible" === j,
                name: "Transition.Child"
            })))
        })
          , aZ = aE(function(e, t) {
            let n = null !== (0,
            H.useContext)(aS)
              , r = null !== ax();
            return H.createElement(H.Fragment, null, !n && r ? H.createElement(aF, {
                ref: t,
                ...e
            }) : H.createElement(a$, {
                ref: t,
                ...e
            }))
        })
          , aU = Object.assign(aF, {
            Child: aZ,
            Root: aF
        });
        var aW = n(4851);
        function az(e, t) {
            let[n,r] = (0,
            H.useState)(e)
              , a = ai(e);
            return aa( () => r(a.current), [a, r, ...t]),
            n
        }
        let aH = null != (U = H.useId) ? U : function() {
            let e = al()
              , [t,n] = H.useState(e ? () => ar.nextId() : null);
            return aa( () => {
                null === t && n(ar.nextId())
            }
            , [t]),
            null != t ? "" + t : void 0
        }
        ;
        function aG(e) {
            return ar.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
        }
        let aB = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(",");
        var aV = ((l = aV || {})[l.First = 1] = "First",
        l[l.Previous = 2] = "Previous",
        l[l.Next = 4] = "Next",
        l[l.Last = 8] = "Last",
        l[l.WrapAround = 16] = "WrapAround",
        l[l.NoScroll = 32] = "NoScroll",
        l)
          , aq = ((u = aq || {})[u.Error = 0] = "Error",
        u[u.Overflow = 1] = "Overflow",
        u[u.Success = 2] = "Success",
        u[u.Underflow = 3] = "Underflow",
        u)
          , aK = ((c = aK || {})[c.Previous = -1] = "Previous",
        c[c.Next = 1] = "Next",
        c);
        function aQ() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
            return null == e ? [] : Array.from(e.querySelectorAll(aB)).sort( (e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
        }
        var aJ = ((d = aJ || {})[d.Strict = 0] = "Strict",
        d[d.Loose = 1] = "Loose",
        d);
        function aY(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return e !== (null == (t = aG(e)) ? void 0 : t.body) && ad(n, {
                0: () => e.matches(aB),
                1() {
                    let t = e;
                    for (; null !== t; ) {
                        if (t.matches(aB))
                            return !0;
                        t = t.parentElement
                    }
                    return !1
                }
            })
        }
        function aX(e) {
            let t = aG(e);
            r6().nextFrame( () => {
                t && !aY(t.activeElement, 0) && (null == e || e.focus({
                    preventScroll: !0
                }))
            }
            )
        }
        var a0 = ((f = a0 || {})[f.Keyboard = 0] = "Keyboard",
        f[f.Mouse = 1] = "Mouse",
        f);
        function a1(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e;
            return e.slice().sort( (e, n) => {
                let r = t(e)
                  , a = t(n);
                if (null === r || null === a)
                    return 0;
                let i = r.compareDocumentPosition(a);
                return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
            }
            )
        }
        function a2(e, t) {
            var n, r, a;
            let {sorted: i=!0, relativeTo: o=null, skipElements: s=[]} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
              , u = Array.isArray(e) ? i ? a1(e) : e : aQ(e);
            s.length > 0 && u.length > 1 && (u = u.filter(e => !s.includes(e))),
            o = null != o ? o : l.activeElement;
            let c = ( () => {
                if (5 & t)
                    return 1;
                if (10 & t)
                    return -1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), d = ( () => {
                if (1 & t)
                    return 0;
                if (2 & t)
                    return Math.max(0, u.indexOf(o)) - 1;
                if (4 & t)
                    return Math.max(0, u.indexOf(o)) + 1;
                if (8 & t)
                    return u.length - 1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), f = 32 & t ? {
                preventScroll: !0
            } : {}, h = 0, p = u.length, m;
            do {
                if (h >= p || h + p <= 0)
                    return 0;
                let e = d + h;
                if (16 & t)
                    e = (e + p) % p;
                else {
                    if (e < 0)
                        return 3;
                    if (e >= p)
                        return 1
                }
                null == (m = u[e]) || m.focus(f),
                h += c
            } while (m !== l.activeElement);
            return 6 & t && null != (a = null == (r = null == (n = m) ? void 0 : n.matches) ? void 0 : r.call(n, "textarea,input")) && a && m.select(),
            2
        }
        function a4(e, t, n) {
            let r = ai(t);
            (0,
            H.useEffect)( () => {
                function t(e) {
                    r.current(e)
                }
                return document.addEventListener(e, t, n),
                () => document.removeEventListener(e, t, n)
            }
            , [e, n])
        }
        function a5(e, t) {
            var n;
            let r, a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], i = (0,
            H.useRef)(!1);
            function o(n, r) {
                if (!i.current || n.defaultPrevented)
                    return;
                let a = r(n);
                if (null !== a && a.getRootNode().contains(a) && a.isConnected) {
                    for (let t of function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e)) {
                        if (null === t)
                            continue;
                        let e = t instanceof HTMLElement ? t : t.current;
                        if (null != e && e.contains(a) || n.composed && n.composedPath().includes(e))
                            return
                    }
                    return aY(a, aJ.Loose) || -1 === a.tabIndex || n.preventDefault(),
                    t(n, a)
                }
            }
            (0,
            H.useEffect)( () => {
                requestAnimationFrame( () => {
                    i.current = a
                }
                )
            }
            , [a]);
            let s = (0,
            H.useRef)(null);
            a4("pointerdown", e => {
                var t, n;
                i.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
            }
            , !0),
            a4("mousedown", e => {
                var t, n;
                i.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
            }
            , !0),
            a4("click", e => {
                /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0 || /Android/gi.test(window.navigator.userAgent) || s.current && (o(e, () => s.current),
                s.current = null)
            }
            , !0),
            a4("touchend", e => o(e, () => e.target instanceof HTMLElement ? e.target : null), !0),
            n = "blur",
            r = ai(e => o(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null)),
            (0,
            H.useEffect)( () => {
                function e(e) {
                    r.current(e)
                }
                return window.addEventListener(n, e, !0),
                () => window.removeEventListener(n, e, !0)
            }
            , [n, !0])
        }
        function a3(e) {
            var t;
            if (e.type)
                return e.type;
            let n = null != (t = e.as) ? t : "button";
            if ("string" == typeof n && "button" === n.toLowerCase())
                return "button"
        }
        function a7(e, t) {
            let[n,r] = (0,
            H.useState)( () => a3(e));
            return aa( () => {
                r(a3(e))
            }
            , [e.type, e.as]),
            aa( () => {
                n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
            }
            , [n, t]),
            n
        }
        "undefined" != typeof document && (document.addEventListener("keydown", e => {
            e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0),
        document.addEventListener("click", e => {
            1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0));
        let a6 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
        function a9(e) {
            var t, n;
            let r = null != (t = e.innerText) ? t : ""
              , a = e.cloneNode(!0);
            if (!(a instanceof HTMLElement))
                return r;
            let i = !1;
            for (let e of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
                e.remove(),
                i = !0;
            let o = i ? null != (n = a.innerText) ? n : "" : r;
            return a6.test(o) && (o = o.replace(a6, "")),
            o
        }
        function a8(e) {
            let t = (0,
            H.useRef)("")
              , n = (0,
            H.useRef)("");
            return ao( () => {
                let r = e.current;
                if (!r)
                    return "";
                let a = r.innerText;
                if (t.current === a)
                    return n.current;
                let i = (function(e) {
                    let t = e.getAttribute("aria-label");
                    if ("string" == typeof t)
                        return t.trim();
                    let n = e.getAttribute("aria-labelledby");
                    if (n) {
                        let e = n.split(" ").map(e => {
                            let t = document.getElementById(e);
                            if (t) {
                                let e = t.getAttribute("aria-label");
                                return "string" == typeof e ? e.trim() : a9(t).trim()
                            }
                            return null
                        }
                        ).filter(Boolean);
                        if (e.length > 0)
                            return e.join(", ")
                    }
                    return a9(e).trim()
                }
                )(r).trim().toLowerCase();
                return t.current = a,
                n.current = i,
                i
            }
            )
        }
        function ie(e) {
            return [e.screenX, e.screenY]
        }
        function it() {
            let e = (0,
            H.useRef)([-1, -1]);
            return {
                wasMoved(t) {
                    let n = ie(t);
                    return (e.current[0] !== n[0] || e.current[1] !== n[1]) && (e.current = n,
                    !0)
                },
                update(t) {
                    e.current = ie(t)
                }
            }
        }
        var ir = ((h = ir || {})[h.None = 1] = "None",
        h[h.Focusable = 2] = "Focusable",
        h[h.Hidden = 4] = "Hidden",
        h);
        let ia = aE(function(e, t) {
            var n;
            let {features: r=1, ...a} = e;
            return aw({
                ourProps: {
                    ref: t,
                    "aria-hidden": (2 & r) == 2 || (null != (n = a["aria-hidden"]) ? n : void 0),
                    hidden: (4 & r) == 4 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & r) == 4 && (2 & r) != 2 && {
                            display: "none"
                        }
                    }
                },
                theirProps: a,
                slot: {},
                defaultTag: "div",
                name: "Hidden"
            })
        });
        function ii(e) {
            let t = e.parentElement
              , n = null;
            for (; t && !(t instanceof HTMLFieldSetElement); )
                t instanceof HTMLLegendElement && (n = t),
                t = t.parentElement;
            let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
            return !(r && function(e) {
                if (!e)
                    return !1;
                let t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(n)) && r
        }
        var io = ((p = io || {})[p.First = 0] = "First",
        p[p.Previous = 1] = "Previous",
        p[p.Next = 2] = "Next",
        p[p.Last = 3] = "Last",
        p[p.Specific = 4] = "Specific",
        p[p.Nothing = 5] = "Nothing",
        p);
        function is(e, t) {
            let n = t.resolveItems();
            if (n.length <= 0)
                return null;
            let r = t.resolveActiveIndex()
              , a = null != r ? r : -1;
            switch (e.focus) {
            case 0:
                for (let e = 0; e < n.length; ++e)
                    if (!t.resolveDisabled(n[e], e, n))
                        return e;
                return r;
            case 1:
                for (let e = a - 1; e >= 0; --e)
                    if (!t.resolveDisabled(n[e], e, n))
                        return e;
                return r;
            case 2:
                for (let e = a + 1; e < n.length; ++e)
                    if (!t.resolveDisabled(n[e], e, n))
                        return e;
                return r;
            case 3:
                for (let e = n.length - 1; e >= 0; --e)
                    if (!t.resolveDisabled(n[e], e, n))
                        return e;
                return r;
            case 4:
                for (let r = 0; r < n.length; ++r)
                    if (t.resolveId(n[r], r, n) === e.id)
                        return r;
                return r;
            case 5:
                return null;
            default:
                !function(e) {
                    throw Error("Unexpected object: " + e)
                }(e)
            }
        }
        function il(e, t) {
            return e ? e + "[" + t + "]" : t
        }
        var iu = ((m = iu || {}).Space = " ",
        m.Enter = "Enter",
        m.Escape = "Escape",
        m.Backspace = "Backspace",
        m.Delete = "Delete",
        m.ArrowLeft = "ArrowLeft",
        m.ArrowUp = "ArrowUp",
        m.ArrowRight = "ArrowRight",
        m.ArrowDown = "ArrowDown",
        m.Home = "Home",
        m.End = "End",
        m.PageUp = "PageUp",
        m.PageDown = "PageDown",
        m.Tab = "Tab",
        m)
          , ic = ((x = ic || {})[x.Open = 0] = "Open",
        x[x.Closed = 1] = "Closed",
        x)
          , id = ((g = id || {})[g.Single = 0] = "Single",
        g[g.Multi = 1] = "Multi",
        g)
          , ih = ((v = ih || {})[v.Pointer = 0] = "Pointer",
        v[v.Other = 1] = "Other",
        v)
          , ip = ((y = ip || {})[y.OpenListbox = 0] = "OpenListbox",
        y[y.CloseListbox = 1] = "CloseListbox",
        y[y.GoToOption = 2] = "GoToOption",
        y[y.Search = 3] = "Search",
        y[y.ClearSearch = 4] = "ClearSearch",
        y[y.RegisterOption = 5] = "RegisterOption",
        y[y.UnregisterOption = 6] = "UnregisterOption",
        y[y.RegisterLabel = 7] = "RegisterLabel",
        y);
        function im(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e
              , n = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null
              , r = a1(t(e.options.slice()), e => e.dataRef.current.domRef.current)
              , a = n ? r.indexOf(n) : null;
            return -1 === a && (a = null),
            {
                options: r,
                activeOptionIndex: a
            }
        }
        let ix = {
            1: e => e.dataRef.current.disabled || 1 === e.listboxState ? e : {
                ...e,
                activeOptionIndex: null,
                listboxState: 1
            },
            0(e) {
                if (e.dataRef.current.disabled || 0 === e.listboxState)
                    return e;
                let t = e.activeOptionIndex
                  , {isSelected: n} = e.dataRef.current
                  , r = e.options.findIndex(e => n(e.dataRef.current.value));
                return -1 !== r && (t = r),
                {
                    ...e,
                    listboxState: 0,
                    activeOptionIndex: t
                }
            },
            2(e, t) {
                var n;
                if (e.dataRef.current.disabled || 1 === e.listboxState)
                    return e;
                let r = im(e)
                  , a = is(t, {
                    resolveItems: () => r.options,
                    resolveActiveIndex: () => r.activeOptionIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                });
                return {
                    ...e,
                    ...r,
                    searchQuery: "",
                    activeOptionIndex: a,
                    activationTrigger: null != (n = t.trigger) ? n : 1
                }
            },
            3: (e, t) => {
                if (e.dataRef.current.disabled || 1 === e.listboxState)
                    return e;
                let n = "" !== e.searchQuery ? 0 : 1
                  , r = e.searchQuery + t.value.toLowerCase()
                  , a = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find(e => {
                    var t;
                    return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r))
                }
                )
                  , i = a ? e.options.indexOf(a) : -1;
                return -1 === i || i === e.activeOptionIndex ? {
                    ...e,
                    searchQuery: r
                } : {
                    ...e,
                    searchQuery: r,
                    activeOptionIndex: i,
                    activationTrigger: 1
                }
            }
            ,
            4: e => e.dataRef.current.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : {
                ...e,
                searchQuery: ""
            },
            5: (e, t) => {
                let n = {
                    id: t.id,
                    dataRef: t.dataRef
                }
                  , r = im(e, e => [...e, n]);
                return null === e.activeOptionIndex && e.dataRef.current.isSelected(t.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(n)),
                {
                    ...e,
                    ...r
                }
            }
            ,
            6: (e, t) => {
                let n = im(e, e => {
                    let n = e.findIndex(e => e.id === t.id);
                    return -1 !== n && e.splice(n, 1),
                    e
                }
                );
                return {
                    ...e,
                    ...n,
                    activationTrigger: 1
                }
            }
            ,
            7: (e, t) => ({
                ...e,
                labelId: t.id
            })
        }
          , ig = (0,
        H.createContext)(null);
        function iv(e) {
            let t = (0,
            H.useContext)(ig);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Listbox /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, iv),
                t
            }
            return t
        }
        ig.displayName = "ListboxActionsContext";
        let iy = (0,
        H.createContext)(null);
        function ib(e) {
            let t = (0,
            H.useContext)(iy);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Listbox /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, ib),
                t
            }
            return t
        }
        function iw(e, t) {
            return ad(t.type, ix, e, t)
        }
        iy.displayName = "ListboxDataContext";
        let ik = H.Fragment
          , i_ = ay.RenderStrategy | ay.Static
          , ij = Object.assign(aE(function(e, t) {
            let {value: n, defaultValue: r, form: a, name: i, onChange: o, by: s= (e, t) => e === t, disabled: l=!1, horizontal: u=!1, multiple: c=!1, ...d} = e
              , f = u ? "horizontal" : "vertical"
              , h = ac(t)
              , [p=c ? [] : void 0,m] = function(e, t, n) {
                let[r,a] = (0,
                H.useState)(n)
                  , i = void 0 !== e
                  , o = (0,
                H.useRef)(i)
                  , s = (0,
                H.useRef)(!1)
                  , l = (0,
                H.useRef)(!1);
                return !i || o.current || s.current ? i || !o.current || l.current || (l.current = !0,
                o.current = i,
                console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (s.current = !0,
                o.current = i,
                console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),
                [i ? e : r, ao(e => (i || a(e),
                null == t ? void 0 : t(e)))]
            }(n, o, r)
              , [x,g] = (0,
            H.useReducer)(iw, {
                dataRef: (0,
                H.createRef)(),
                listboxState: 1,
                options: [],
                searchQuery: "",
                labelId: null,
                activeOptionIndex: null,
                activationTrigger: 1
            })
              , v = (0,
            H.useRef)({
                static: !1,
                hold: !1
            })
              , y = (0,
            H.useRef)(null)
              , b = (0,
            H.useRef)(null)
              , w = (0,
            H.useRef)(null)
              , k = ao("string" == typeof s ? (e, t) => (null == e ? void 0 : e[s]) === (null == t ? void 0 : t[s]) : s)
              , _ = (0,
            H.useCallback)(e => ad(j.mode, {
                1: () => p.some(t => k(t, e)),
                0: () => k(p, e)
            }), [p])
              , j = (0,
            H.useMemo)( () => ({
                ...x,
                value: p,
                disabled: l,
                mode: c ? 1 : 0,
                orientation: f,
                compare: k,
                isSelected: _,
                optionsPropsRef: v,
                labelRef: y,
                buttonRef: b,
                optionsRef: w
            }), [p, l, c, x]);
            aa( () => {
                x.dataRef.current = j
            }
            , [j]),
            a5([j.buttonRef, j.optionsRef], (e, t) => {
                var n;
                g({
                    type: 1
                }),
                aY(t, aJ.Loose) || (e.preventDefault(),
                null == (n = j.buttonRef.current) || n.focus())
            }
            , 0 === j.listboxState);
            let E = (0,
            H.useMemo)( () => ({
                open: 0 === j.listboxState,
                disabled: l,
                value: p
            }), [j, l, p])
              , O = ao(e => {
                let t = j.options.find(t => t.id === e);
                t && A(t.dataRef.current.value)
            }
            )
              , C = ao( () => {
                if (null !== j.activeOptionIndex) {
                    let {dataRef: e, id: t} = j.options[j.activeOptionIndex];
                    A(e.current.value),
                    g({
                        type: 2,
                        focus: io.Specific,
                        id: t
                    })
                }
            }
            )
              , T = ao( () => g({
                type: 0
            }))
              , S = ao( () => g({
                type: 1
            }))
              , N = ao( (e, t, n) => e === io.Specific ? g({
                type: 2,
                focus: io.Specific,
                id: t,
                trigger: n
            }) : g({
                type: 2,
                focus: e,
                trigger: n
            }))
              , I = ao( (e, t) => (g({
                type: 5,
                id: e,
                dataRef: t
            }),
            () => g({
                type: 6,
                id: e
            })))
              , R = ao(e => (g({
                type: 7,
                id: e
            }),
            () => g({
                type: 7,
                id: null
            })))
              , A = ao(e => ad(j.mode, {
                0: () => null == m ? void 0 : m(e),
                1() {
                    let t = j.value.slice()
                      , n = t.findIndex(t => k(t, e));
                    return -1 === n ? t.push(e) : t.splice(n, 1),
                    null == m ? void 0 : m(t)
                }
            }))
              , P = ao(e => g({
                type: 3,
                value: e
            }))
              , L = ao( () => g({
                type: 4
            }))
              , M = (0,
            H.useMemo)( () => ({
                onChange: A,
                registerOption: I,
                registerLabel: R,
                goToOption: N,
                closeListbox: S,
                openListbox: T,
                selectActiveOption: C,
                selectOption: O,
                search: P,
                clearSearch: L
            }), [])
              , D = (0,
            H.useRef)(null)
              , F = r9();
            return (0,
            H.useEffect)( () => {
                D.current && void 0 !== r && F.addEventListener(D.current, "reset", () => {
                    null == m || m(r)
                }
                )
            }
            , [D, m]),
            H.createElement(ig.Provider, {
                value: M
            }, H.createElement(iy.Provider, {
                value: j
            }, H.createElement(ag, {
                value: ad(j.listboxState, {
                    0: am.Open,
                    1: am.Closed
                })
            }, null != i && null != p && (function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                for (let[a,i] of Object.entries(t))
                    !function t(n, r, a) {
                        if (Array.isArray(a))
                            for (let[e,i] of a.entries())
                                t(n, il(r, e.toString()), i);
                        else
                            a instanceof Date ? n.push([r, a.toISOString()]) : "boolean" == typeof a ? n.push([r, a ? "1" : "0"]) : "string" == typeof a ? n.push([r, a]) : "number" == typeof a ? n.push([r, "".concat(a)]) : null == a ? n.push([r, ""]) : e(a, r, n)
                    }(r, il(n, a), i);
                return r
            }
            )({
                [i]: p
            }).map( (e, t) => {
                let[n,r] = e;
                return H.createElement(ia, {
                    features: ir.Hidden,
                    ref: 0 === t ? e => {
                        var t;
                        D.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
                    }
                    : void 0,
                    ...aO({
                        key: n,
                        as: "input",
                        type: "hidden",
                        hidden: !0,
                        readOnly: !0,
                        form: a,
                        disabled: l,
                        name: n,
                        value: r
                    })
                })
            }
            ), aw({
                ourProps: {
                    ref: h
                },
                theirProps: d,
                slot: E,
                defaultTag: ik,
                name: "Listbox"
            }))))
        }), {
            Button: aE(function(e, t) {
                var n;
                let r = aH()
                  , {id: a="headlessui-listbox-button-".concat(r), ...i} = e
                  , o = ib("Listbox.Button")
                  , s = iv("Listbox.Button")
                  , l = ac(o.buttonRef, t)
                  , u = r9()
                  , c = ao(e => {
                    switch (e.key) {
                    case iu.Space:
                    case iu.Enter:
                    case iu.ArrowDown:
                        e.preventDefault(),
                        s.openListbox(),
                        u.nextFrame( () => {
                            o.value || s.goToOption(io.First)
                        }
                        );
                        break;
                    case iu.ArrowUp:
                        e.preventDefault(),
                        s.openListbox(),
                        u.nextFrame( () => {
                            o.value || s.goToOption(io.Last)
                        }
                        )
                    }
                }
                )
                  , d = ao(e => {
                    e.key === iu.Space && e.preventDefault()
                }
                )
                  , f = ao(e => {
                    if (ii(e.currentTarget))
                        return e.preventDefault();
                    0 === o.listboxState ? (s.closeListbox(),
                    u.nextFrame( () => {
                        var e;
                        return null == (e = o.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    )) : (e.preventDefault(),
                    s.openListbox())
                }
                )
                  , h = az( () => {
                    if (o.labelId)
                        return [o.labelId, a].join(" ")
                }
                , [o.labelId, a])
                  , p = (0,
                H.useMemo)( () => ({
                    open: 0 === o.listboxState,
                    disabled: o.disabled,
                    value: o.value
                }), [o]);
                return aw({
                    ourProps: {
                        ref: l,
                        id: a,
                        type: a7(e, o.buttonRef),
                        "aria-haspopup": "listbox",
                        "aria-controls": null == (n = o.optionsRef.current) ? void 0 : n.id,
                        "aria-expanded": 0 === o.listboxState,
                        "aria-labelledby": h,
                        disabled: o.disabled,
                        onKeyDown: c,
                        onKeyUp: d,
                        onClick: f
                    },
                    theirProps: i,
                    slot: p,
                    defaultTag: "button",
                    name: "Listbox.Button"
                })
            }),
            Label: aE(function(e, t) {
                let n = aH()
                  , {id: r="headlessui-listbox-label-".concat(n), ...a} = e
                  , i = ib("Listbox.Label")
                  , o = iv("Listbox.Label")
                  , s = ac(i.labelRef, t);
                return aa( () => o.registerLabel(r), [r]),
                aw({
                    ourProps: {
                        ref: s,
                        id: r,
                        onClick: ao( () => {
                            var e;
                            return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }
                        )
                    },
                    theirProps: a,
                    slot: (0,
                    H.useMemo)( () => ({
                        open: 0 === i.listboxState,
                        disabled: i.disabled
                    }), [i]),
                    defaultTag: "label",
                    name: "Listbox.Label"
                })
            }),
            Options: aE(function(e, t) {
                var n;
                let r = aH()
                  , {id: a="headlessui-listbox-options-".concat(r), ...i} = e
                  , o = ib("Listbox.Options")
                  , s = iv("Listbox.Options")
                  , l = ac(o.optionsRef, t)
                  , u = r9()
                  , c = r9()
                  , d = ax()
                  , f = null !== d ? (d & am.Open) === am.Open : 0 === o.listboxState;
                (0,
                H.useEffect)( () => {
                    var e;
                    let t = o.optionsRef.current;
                    t && 0 === o.listboxState && t !== (null == (e = aG(t)) ? void 0 : e.activeElement) && t.focus({
                        preventScroll: !0
                    })
                }
                , [o.listboxState, o.optionsRef]);
                let h = ao(e => {
                    switch (c.dispose(),
                    e.key) {
                    case iu.Space:
                        if ("" !== o.searchQuery)
                            return e.preventDefault(),
                            e.stopPropagation(),
                            s.search(e.key);
                    case iu.Enter:
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        null !== o.activeOptionIndex) {
                            let {dataRef: e} = o.options[o.activeOptionIndex];
                            s.onChange(e.current.value)
                        }
                        0 === o.mode && (s.closeListbox(),
                        r6().nextFrame( () => {
                            var e;
                            return null == (e = o.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }
                        ));
                        break;
                    case ad(o.orientation, {
                        vertical: iu.ArrowDown,
                        horizontal: iu.ArrowRight
                    }):
                        return e.preventDefault(),
                        e.stopPropagation(),
                        s.goToOption(io.Next);
                    case ad(o.orientation, {
                        vertical: iu.ArrowUp,
                        horizontal: iu.ArrowLeft
                    }):
                        return e.preventDefault(),
                        e.stopPropagation(),
                        s.goToOption(io.Previous);
                    case iu.Home:
                    case iu.PageUp:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        s.goToOption(io.First);
                    case iu.End:
                    case iu.PageDown:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        s.goToOption(io.Last);
                    case iu.Escape:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        s.closeListbox(),
                        u.nextFrame( () => {
                            var e;
                            return null == (e = o.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }
                        );
                    case iu.Tab:
                        e.preventDefault(),
                        e.stopPropagation();
                        break;
                    default:
                        1 === e.key.length && (s.search(e.key),
                        c.setTimeout( () => s.clearSearch(), 350))
                    }
                }
                )
                  , p = az( () => {
                    var e;
                    return null == (e = o.buttonRef.current) ? void 0 : e.id
                }
                , [o.buttonRef.current])
                  , m = (0,
                H.useMemo)( () => ({
                    open: 0 === o.listboxState
                }), [o]);
                return aw({
                    ourProps: {
                        "aria-activedescendant": null === o.activeOptionIndex || null == (n = o.options[o.activeOptionIndex]) ? void 0 : n.id,
                        "aria-multiselectable": 1 === o.mode || void 0,
                        "aria-labelledby": p,
                        "aria-orientation": o.orientation,
                        id: a,
                        onKeyDown: h,
                        role: "listbox",
                        tabIndex: 0,
                        ref: l
                    },
                    theirProps: i,
                    slot: m,
                    defaultTag: "ul",
                    features: i_,
                    visible: f,
                    name: "Listbox.Options"
                })
            }),
            Option: aE(function(e, t) {
                let n = aH()
                  , {id: r="headlessui-listbox-option-".concat(n), disabled: a=!1, value: i, ...o} = e
                  , s = ib("Listbox.Option")
                  , l = iv("Listbox.Option")
                  , u = null !== s.activeOptionIndex && s.options[s.activeOptionIndex].id === r
                  , c = s.isSelected(i)
                  , d = (0,
                H.useRef)(null)
                  , f = a8(d)
                  , h = ai({
                    disabled: a,
                    value: i,
                    domRef: d,
                    get textValue() {
                        return f()
                    }
                })
                  , p = ac(t, d);
                aa( () => {
                    if (0 !== s.listboxState || !u || 0 === s.activationTrigger)
                        return;
                    let e = r6();
                    return e.requestAnimationFrame( () => {
                        var e, t;
                        null == (t = null == (e = d.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                            block: "nearest"
                        })
                    }
                    ),
                    e.dispose
                }
                , [d, u, s.listboxState, s.activationTrigger, s.activeOptionIndex]),
                aa( () => l.registerOption(r, h), [h, r]);
                let m = ao(e => {
                    if (a)
                        return e.preventDefault();
                    l.onChange(i),
                    0 === s.mode && (l.closeListbox(),
                    r6().nextFrame( () => {
                        var e;
                        return null == (e = s.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ))
                }
                )
                  , x = ao( () => {
                    if (a)
                        return l.goToOption(io.Nothing);
                    l.goToOption(io.Specific, r)
                }
                )
                  , g = it()
                  , v = ao(e => g.update(e))
                  , y = ao(e => {
                    g.wasMoved(e) && (a || u || l.goToOption(io.Specific, r, 0))
                }
                )
                  , b = ao(e => {
                    g.wasMoved(e) && (a || u && l.goToOption(io.Nothing))
                }
                )
                  , w = (0,
                H.useMemo)( () => ({
                    active: u,
                    selected: c,
                    disabled: a
                }), [u, c, a]);
                return aw({
                    ourProps: {
                        id: r,
                        ref: p,
                        role: "option",
                        tabIndex: !0 === a ? void 0 : -1,
                        "aria-disabled": !0 === a || void 0,
                        "aria-selected": c,
                        disabled: void 0,
                        onClick: m,
                        onFocus: x,
                        onPointerEnter: v,
                        onMouseEnter: v,
                        onPointerMove: y,
                        onMouseMove: y,
                        onPointerLeave: b,
                        onMouseLeave: b
                    },
                    theirProps: o,
                    slot: w,
                    defaultTag: "li",
                    name: "Listbox.Option"
                })
            })
        });
        var iE = n(967)
          , iO = n(3008)
          , iC = n.n(iO);
        function iT() {
            return (iT = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function iS(e, t) {
            if (null == e)
                return {};
            var n, r, a = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        var iN = ["keyOverride"]
          , iI = ["crossOrigin"]
          , iR = {
            templateTitle: "",
            noindex: !1,
            nofollow: !1,
            norobots: !1,
            defaultOpenGraphImageWidth: 0,
            defaultOpenGraphImageHeight: 0,
            defaultOpenGraphVideoWidth: 0,
            defaultOpenGraphVideoHeight: 0
        }
          , iA = function(e, t, n) {
            void 0 === t && (t = []);
            var r = void 0 === n ? {} : n
              , a = r.defaultWidth
              , i = r.defaultHeight;
            return t.reduce(function(t, n, r) {
                return t.push(H.createElement("meta", {
                    key: "og:" + e + ":0" + r,
                    property: "og:" + e,
                    content: n.url
                })),
                n.alt && t.push(H.createElement("meta", {
                    key: "og:" + e + ":alt0" + r,
                    property: "og:" + e + ":alt",
                    content: n.alt
                })),
                n.secureUrl && t.push(H.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + r,
                    property: "og:" + e + ":secure_url",
                    content: n.secureUrl.toString()
                })),
                n.type && t.push(H.createElement("meta", {
                    key: "og:" + e + ":type0" + r,
                    property: "og:" + e + ":type",
                    content: n.type.toString()
                })),
                n.width ? t.push(H.createElement("meta", {
                    key: "og:" + e + ":width0" + r,
                    property: "og:" + e + ":width",
                    content: n.width.toString()
                })) : a && t.push(H.createElement("meta", {
                    key: "og:" + e + ":width0" + r,
                    property: "og:" + e + ":width",
                    content: a.toString()
                })),
                n.height ? t.push(H.createElement("meta", {
                    key: "og:" + e + ":height" + r,
                    property: "og:" + e + ":height",
                    content: n.height.toString()
                })) : i && t.push(H.createElement("meta", {
                    key: "og:" + e + ":height" + r,
                    property: "og:" + e + ":height",
                    content: i.toString()
                })),
                t
            }, [])
        }
          , iP = function(e) {
            var t, n, r, a, i, o = [];
            e.titleTemplate && (iR.templateTitle = e.titleTemplate);
            var s = "";
            e.title ? (s = e.title,
            iR.templateTitle && (s = iR.templateTitle.replace(/%s/g, function() {
                return s
            }))) : e.defaultTitle && (s = e.defaultTitle),
            s && o.push(H.createElement("title", {
                key: "title"
            }, s));
            var l = void 0 === e.noindex ? iR.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex
              , u = void 0 === e.nofollow ? iR.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow
              , c = e.norobots || iR.norobots
              , d = "";
            if (e.robotsProps) {
                var f = e.robotsProps
                  , h = f.nosnippet
                  , p = f.maxSnippet
                  , m = f.maxImagePreview
                  , x = f.maxVideoPreview
                  , g = f.noarchive
                  , v = f.noimageindex
                  , y = f.notranslate
                  , b = f.unavailableAfter;
                d = (h ? ",nosnippet" : "") + (p ? ",max-snippet:" + p : "") + (m ? ",max-image-preview:" + m : "") + (g ? ",noarchive" : "") + (b ? ",unavailable_after:" + b : "") + (v ? ",noimageindex" : "") + (x ? ",max-video-preview:" + x : "") + (y ? ",notranslate" : "")
            }
            if (e.norobots && (iR.norobots = !0),
            l || u ? (e.dangerouslySetAllPagesToNoIndex && (iR.noindex = !0),
            e.dangerouslySetAllPagesToNoFollow && (iR.nofollow = !0),
            o.push(H.createElement("meta", {
                key: "robots",
                name: "robots",
                content: (l ? "noindex" : "index") + "," + (u ? "nofollow" : "follow") + d
            }))) : (!c || d) && o.push(H.createElement("meta", {
                key: "robots",
                name: "robots",
                content: "index,follow" + d
            })),
            e.description && o.push(H.createElement("meta", {
                key: "description",
                name: "description",
                content: e.description
            })),
            e.themeColor && o.push(H.createElement("meta", {
                key: "theme-color",
                name: "theme-color",
                content: e.themeColor
            })),
            e.mobileAlternate && o.push(H.createElement("link", {
                rel: "alternate",
                key: "mobileAlternate",
                media: e.mobileAlternate.media,
                href: e.mobileAlternate.href
            })),
            e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                o.push(H.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href
                }))
            }),
            e.twitter && (e.twitter.cardType && o.push(H.createElement("meta", {
                key: "twitter:card",
                name: "twitter:card",
                content: e.twitter.cardType
            })),
            e.twitter.site && o.push(H.createElement("meta", {
                key: "twitter:site",
                name: "twitter:site",
                content: e.twitter.site
            })),
            e.twitter.handle && o.push(H.createElement("meta", {
                key: "twitter:creator",
                name: "twitter:creator",
                content: e.twitter.handle
            }))),
            e.facebook && e.facebook.appId && o.push(H.createElement("meta", {
                key: "fb:app_id",
                property: "fb:app_id",
                content: e.facebook.appId
            })),
            (null != (t = e.openGraph) && t.title || s) && o.push(H.createElement("meta", {
                key: "og:title",
                property: "og:title",
                content: (null == (a = e.openGraph) ? void 0 : a.title) || s
            })),
            (null != (n = e.openGraph) && n.description || e.description) && o.push(H.createElement("meta", {
                key: "og:description",
                property: "og:description",
                content: (null == (i = e.openGraph) ? void 0 : i.description) || e.description
            })),
            e.openGraph) {
                if ((e.openGraph.url || e.canonical) && o.push(H.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical
                })),
                e.openGraph.type) {
                    var w = e.openGraph.type.toLowerCase();
                    o.push(H.createElement("meta", {
                        key: "og:type",
                        property: "og:type",
                        content: w
                    })),
                    "profile" === w && e.openGraph.profile ? (e.openGraph.profile.firstName && o.push(H.createElement("meta", {
                        key: "profile:first_name",
                        property: "profile:first_name",
                        content: e.openGraph.profile.firstName
                    })),
                    e.openGraph.profile.lastName && o.push(H.createElement("meta", {
                        key: "profile:last_name",
                        property: "profile:last_name",
                        content: e.openGraph.profile.lastName
                    })),
                    e.openGraph.profile.username && o.push(H.createElement("meta", {
                        key: "profile:username",
                        property: "profile:username",
                        content: e.openGraph.profile.username
                    })),
                    e.openGraph.profile.gender && o.push(H.createElement("meta", {
                        key: "profile:gender",
                        property: "profile:gender",
                        content: e.openGraph.profile.gender
                    }))) : "book" === w && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                        o.push(H.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e
                        }))
                    }),
                    e.openGraph.book.isbn && o.push(H.createElement("meta", {
                        key: "book:isbn",
                        property: "book:isbn",
                        content: e.openGraph.book.isbn
                    })),
                    e.openGraph.book.releaseDate && o.push(H.createElement("meta", {
                        key: "book:release_date",
                        property: "book:release_date",
                        content: e.openGraph.book.releaseDate
                    })),
                    e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                        o.push(H.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e
                        }))
                    })) : "article" === w && e.openGraph.article ? (e.openGraph.article.publishedTime && o.push(H.createElement("meta", {
                        key: "article:published_time",
                        property: "article:published_time",
                        content: e.openGraph.article.publishedTime
                    })),
                    e.openGraph.article.modifiedTime && o.push(H.createElement("meta", {
                        key: "article:modified_time",
                        property: "article:modified_time",
                        content: e.openGraph.article.modifiedTime
                    })),
                    e.openGraph.article.expirationTime && o.push(H.createElement("meta", {
                        key: "article:expiration_time",
                        property: "article:expiration_time",
                        content: e.openGraph.article.expirationTime
                    })),
                    e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                        o.push(H.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e
                        }))
                    }),
                    e.openGraph.article.section && o.push(H.createElement("meta", {
                        key: "article:section",
                        property: "article:section",
                        content: e.openGraph.article.section
                    })),
                    e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                        o.push(H.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e
                        }))
                    })) : ("video.movie" === w || "video.episode" === w || "video.tv_show" === w || "video.other" === w) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                        e.profile && o.push(H.createElement("meta", {
                            key: "video:actor:0" + t,
                            property: "video:actor",
                            content: e.profile
                        })),
                        e.role && o.push(H.createElement("meta", {
                            key: "video:actor:role:0" + t,
                            property: "video:actor:role",
                            content: e.role
                        }))
                    }),
                    e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                        o.push(H.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e
                        }))
                    }),
                    e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                        o.push(H.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e
                        }))
                    }),
                    e.openGraph.video.duration && o.push(H.createElement("meta", {
                        key: "video:duration",
                        property: "video:duration",
                        content: e.openGraph.video.duration.toString()
                    })),
                    e.openGraph.video.releaseDate && o.push(H.createElement("meta", {
                        key: "video:release_date",
                        property: "video:release_date",
                        content: e.openGraph.video.releaseDate
                    })),
                    e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                        o.push(H.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e
                        }))
                    }),
                    e.openGraph.video.series && o.push(H.createElement("meta", {
                        key: "video:series",
                        property: "video:series",
                        content: e.openGraph.video.series
                    })))
                }
                e.defaultOpenGraphImageWidth && (iR.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
                e.defaultOpenGraphImageHeight && (iR.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
                e.openGraph.images && e.openGraph.images.length && o.push.apply(o, iA("image", e.openGraph.images, {
                    defaultWidth: iR.defaultOpenGraphImageWidth,
                    defaultHeight: iR.defaultOpenGraphImageHeight
                })),
                e.defaultOpenGraphVideoWidth && (iR.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
                e.defaultOpenGraphVideoHeight && (iR.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
                e.openGraph.videos && e.openGraph.videos.length && o.push.apply(o, iA("video", e.openGraph.videos, {
                    defaultWidth: iR.defaultOpenGraphVideoWidth,
                    defaultHeight: iR.defaultOpenGraphVideoHeight
                })),
                e.openGraph.audio && o.push.apply(o, iA("audio", e.openGraph.audio)),
                e.openGraph.locale && o.push(H.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale
                })),
                (e.openGraph.siteName || e.openGraph.site_name) && o.push(H.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name
                }))
            }
            return e.canonical && o.push(H.createElement("link", {
                rel: "canonical",
                href: e.canonical,
                key: "canonical"
            })),
            e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                var t, n, r = e.keyOverride, a = iS(e, iN);
                o.push(H.createElement("meta", iT({
                    key: "meta:" + (null != (t = null != (n = null != r ? r : a.name) ? n : a.property) ? t : a.httpEquiv)
                }, a)))
            }),
            null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach(function(e) {
                var t, n = e.crossOrigin, r = iS(e, iI);
                o.push(H.createElement("link", iT({
                    key: "link" + (null != (t = r.keyOverride) ? t : r.href) + r.rel
                }, r, {
                    crossOrigin: "anonymous" === n || "use-credentials" === n || "" === n ? n : void 0
                })))
            }),
            o
        }
          , iL = function(e) {
            return H.createElement(iC(), null, iP(e))
        }
          , iM = function(e) {
            var t = e.title
              , n = e.themeColor
              , r = e.noindex
              , a = e.nofollow
              , i = e.robotsProps
              , o = e.description
              , s = e.canonical
              , l = e.openGraph
              , u = e.facebook
              , c = e.twitter
              , d = e.additionalMetaTags
              , f = e.titleTemplate
              , h = e.defaultTitle
              , p = e.mobileAlternate
              , m = e.languageAlternates
              , x = e.additionalLinkTags;
            return H.createElement(H.Fragment, null, H.createElement(iL, {
                title: t,
                themeColor: n,
                noindex: r,
                nofollow: a,
                robotsProps: i,
                description: o,
                canonical: s,
                facebook: u,
                openGraph: l,
                additionalMetaTags: d,
                twitter: c,
                titleTemplate: f,
                defaultTitle: h,
                mobileAlternate: p,
                languageAlternates: m,
                additionalLinkTags: x
            }))
        };
        RegExp("[" + Object.keys(Object.freeze({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        })).join("") + "]", "g");
        var iD = ((b = iD || {})[b.Open = 0] = "Open",
        b[b.Closed = 1] = "Closed",
        b)
          , iF = ((w = iF || {})[w.Pointer = 0] = "Pointer",
        w[w.Other = 1] = "Other",
        w)
          , i$ = ((k = i$ || {})[k.OpenMenu = 0] = "OpenMenu",
        k[k.CloseMenu = 1] = "CloseMenu",
        k[k.GoToItem = 2] = "GoToItem",
        k[k.Search = 3] = "Search",
        k[k.ClearSearch = 4] = "ClearSearch",
        k[k.RegisterItem = 5] = "RegisterItem",
        k[k.UnregisterItem = 6] = "UnregisterItem",
        k);
        function iZ(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e
              , n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null
              , r = a1(t(e.items.slice()), e => e.dataRef.current.domRef.current)
              , a = n ? r.indexOf(n) : null;
            return -1 === a && (a = null),
            {
                items: r,
                activeItemIndex: a
            }
        }
        let iU = {
            1: e => 1 === e.menuState ? e : {
                ...e,
                activeItemIndex: null,
                menuState: 1
            },
            0: e => 0 === e.menuState ? e : {
                ...e,
                __demoMode: !1,
                menuState: 0
            },
            2: (e, t) => {
                var n;
                let r = iZ(e)
                  , a = is(t, {
                    resolveItems: () => r.items,
                    resolveActiveIndex: () => r.activeItemIndex,
                    resolveId: e => e.id,
                    resolveDisabled: e => e.dataRef.current.disabled
                });
                return {
                    ...e,
                    ...r,
                    searchQuery: "",
                    activeItemIndex: a,
                    activationTrigger: null != (n = t.trigger) ? n : 1
                }
            }
            ,
            3: (e, t) => {
                let n = "" !== e.searchQuery ? 0 : 1
                  , r = e.searchQuery + t.value.toLowerCase()
                  , a = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(e => {
                    var t;
                    return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                }
                )
                  , i = a ? e.items.indexOf(a) : -1;
                return -1 === i || i === e.activeItemIndex ? {
                    ...e,
                    searchQuery: r
                } : {
                    ...e,
                    searchQuery: r,
                    activeItemIndex: i,
                    activationTrigger: 1
                }
            }
            ,
            4: e => "" === e.searchQuery ? e : {
                ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            },
            5: (e, t) => {
                let n = iZ(e, e => [...e, {
                    id: t.id,
                    dataRef: t.dataRef
                }]);
                return {
                    ...e,
                    ...n
                }
            }
            ,
            6: (e, t) => {
                let n = iZ(e, e => {
                    let n = e.findIndex(e => e.id === t.id);
                    return -1 !== n && e.splice(n, 1),
                    e
                }
                );
                return {
                    ...e,
                    ...n,
                    activationTrigger: 1
                }
            }
        }
          , iW = (0,
        H.createContext)(null);
        function iz(e) {
            let t = (0,
            H.useContext)(iW);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Menu /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, iz),
                t
            }
            return t
        }
        function iH(e, t) {
            return ad(t.type, iU, e, t)
        }
        iW.displayName = "MenuContext";
        let iG = H.Fragment
          , iB = ay.RenderStrategy | ay.Static
          , iV = H.Fragment
          , iq = Object.assign(aE(function(e, t) {
            let {__demoMode: n=!1, ...r} = e
              , a = (0,
            H.useReducer)(iH, {
                __demoMode: n,
                menuState: n ? 0 : 1,
                buttonRef: (0,
                H.createRef)(),
                itemsRef: (0,
                H.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1
            })
              , [{menuState: i, itemsRef: o, buttonRef: s},l] = a
              , u = ac(t);
            a5([s, o], (e, t) => {
                var n;
                l({
                    type: 1
                }),
                aY(t, aJ.Loose) || (e.preventDefault(),
                null == (n = s.current) || n.focus())
            }
            , 0 === i);
            let c = ao( () => {
                l({
                    type: 1
                })
            }
            )
              , d = (0,
            H.useMemo)( () => ({
                open: 0 === i,
                close: c
            }), [i, c]);
            return H.createElement(iW.Provider, {
                value: a
            }, H.createElement(ag, {
                value: ad(i, {
                    0: am.Open,
                    1: am.Closed
                })
            }, aw({
                ourProps: {
                    ref: u
                },
                theirProps: r,
                slot: d,
                defaultTag: iG,
                name: "Menu"
            })))
        }), {
            Button: aE(function(e, t) {
                var n;
                let r = aH()
                  , {id: a="headlessui-menu-button-".concat(r), ...i} = e
                  , [o,s] = iz("Menu.Button")
                  , l = ac(o.buttonRef, t)
                  , u = r9()
                  , c = ao(e => {
                    switch (e.key) {
                    case iu.Space:
                    case iu.Enter:
                    case iu.ArrowDown:
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({
                            type: 0
                        }),
                        u.nextFrame( () => s({
                            type: 2,
                            focus: io.First
                        }));
                        break;
                    case iu.ArrowUp:
                        e.preventDefault(),
                        e.stopPropagation(),
                        s({
                            type: 0
                        }),
                        u.nextFrame( () => s({
                            type: 2,
                            focus: io.Last
                        }))
                    }
                }
                )
                  , d = ao(e => {
                    e.key === iu.Space && e.preventDefault()
                }
                )
                  , f = ao(t => {
                    if (ii(t.currentTarget))
                        return t.preventDefault();
                    e.disabled || (0 === o.menuState ? (s({
                        type: 1
                    }),
                    u.nextFrame( () => {
                        var e;
                        return null == (e = o.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    )) : (t.preventDefault(),
                    s({
                        type: 0
                    })))
                }
                )
                  , h = (0,
                H.useMemo)( () => ({
                    open: 0 === o.menuState
                }), [o]);
                return aw({
                    ourProps: {
                        ref: l,
                        id: a,
                        type: a7(e, o.buttonRef),
                        "aria-haspopup": "menu",
                        "aria-controls": null == (n = o.itemsRef.current) ? void 0 : n.id,
                        "aria-expanded": 0 === o.menuState,
                        onKeyDown: c,
                        onKeyUp: d,
                        onClick: f
                    },
                    theirProps: i,
                    slot: h,
                    defaultTag: "button",
                    name: "Menu.Button"
                })
            }),
            Items: aE(function(e, t) {
                var n, r;
                let a = aH()
                  , {id: i="headlessui-menu-items-".concat(a), ...o} = e
                  , [s,l] = iz("Menu.Items")
                  , u = ac(s.itemsRef, t)
                  , c = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return (0,
                    H.useMemo)( () => aG(...t), [...t])
                }(s.itemsRef)
                  , d = r9()
                  , f = ax()
                  , h = null !== f ? (f & am.Open) === am.Open : 0 === s.menuState;
                (0,
                H.useEffect)( () => {
                    let e = s.itemsRef.current;
                    e && 0 === s.menuState && e !== (null == c ? void 0 : c.activeElement) && e.focus({
                        preventScroll: !0
                    })
                }
                , [s.menuState, s.itemsRef, c]),
                function(e) {
                    let {container: t, accept: n, walk: r, enabled: a=!0} = e
                      , i = (0,
                    H.useRef)(n)
                      , o = (0,
                    H.useRef)(r);
                    (0,
                    H.useEffect)( () => {
                        i.current = n,
                        o.current = r
                    }
                    , [n, r]),
                    aa( () => {
                        if (!t || !a)
                            return;
                        let e = aG(t);
                        if (!e)
                            return;
                        let n = i.current
                          , r = o.current
                          , s = Object.assign(e => n(e), {
                            acceptNode: n
                        })
                          , l = e.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, s, !1);
                        for (; l.nextNode(); )
                            r(l.currentNode)
                    }
                    , [t, a, i, o])
                }({
                    container: s.itemsRef.current,
                    enabled: 0 === s.menuState,
                    accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                    walk(e) {
                        e.setAttribute("role", "none")
                    }
                });
                let p = ao(e => {
                    var t, n;
                    switch (d.dispose(),
                    e.key) {
                    case iu.Space:
                        if ("" !== s.searchQuery)
                            return e.preventDefault(),
                            e.stopPropagation(),
                            l({
                                type: 3,
                                value: e.key
                            });
                    case iu.Enter:
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 1
                        }),
                        null !== s.activeItemIndex) {
                            let {dataRef: e} = s.items[s.activeItemIndex];
                            null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                        }
                        aX(s.buttonRef.current);
                        break;
                    case iu.ArrowDown:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 2,
                            focus: io.Next
                        });
                    case iu.ArrowUp:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 2,
                            focus: io.Previous
                        });
                    case iu.Home:
                    case iu.PageUp:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 2,
                            focus: io.First
                        });
                    case iu.End:
                    case iu.PageDown:
                        return e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 2,
                            focus: io.Last
                        });
                    case iu.Escape:
                        e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 1
                        }),
                        r6().nextFrame( () => {
                            var e;
                            return null == (e = s.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        }
                        );
                        break;
                    case iu.Tab:
                        e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: 1
                        }),
                        r6().nextFrame( () => {
                            var t, n;
                            t = s.buttonRef.current,
                            n = e.shiftKey ? aV.Previous : aV.Next,
                            a2(aQ(), n, {
                                relativeTo: t
                            })
                        }
                        );
                        break;
                    default:
                        1 === e.key.length && (l({
                            type: 3,
                            value: e.key
                        }),
                        d.setTimeout( () => l({
                            type: 4
                        }), 350))
                    }
                }
                )
                  , m = ao(e => {
                    e.key === iu.Space && e.preventDefault()
                }
                )
                  , x = (0,
                H.useMemo)( () => ({
                    open: 0 === s.menuState
                }), [s]);
                return aw({
                    ourProps: {
                        "aria-activedescendant": null === s.activeItemIndex || null == (n = s.items[s.activeItemIndex]) ? void 0 : n.id,
                        "aria-labelledby": null == (r = s.buttonRef.current) ? void 0 : r.id,
                        id: i,
                        onKeyDown: p,
                        onKeyUp: m,
                        role: "menu",
                        tabIndex: 0,
                        ref: u
                    },
                    theirProps: o,
                    slot: x,
                    defaultTag: "div",
                    features: iB,
                    visible: h,
                    name: "Menu.Items"
                })
            }),
            Item: aE(function(e, t) {
                let n = aH()
                  , {id: r="headlessui-menu-item-".concat(n), disabled: a=!1, ...i} = e
                  , [o,s] = iz("Menu.Item")
                  , l = null !== o.activeItemIndex && o.items[o.activeItemIndex].id === r
                  , u = (0,
                H.useRef)(null)
                  , c = ac(t, u);
                aa( () => {
                    if (o.__demoMode || 0 !== o.menuState || !l || 0 === o.activationTrigger)
                        return;
                    let e = r6();
                    return e.requestAnimationFrame( () => {
                        var e, t;
                        null == (t = null == (e = u.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                            block: "nearest"
                        })
                    }
                    ),
                    e.dispose
                }
                , [o.__demoMode, u, l, o.menuState, o.activationTrigger, o.activeItemIndex]);
                let d = a8(u)
                  , f = (0,
                H.useRef)({
                    disabled: a,
                    domRef: u,
                    get textValue() {
                        return d()
                    }
                });
                aa( () => {
                    f.current.disabled = a
                }
                , [f, a]),
                aa( () => (s({
                    type: 5,
                    id: r,
                    dataRef: f
                }),
                () => s({
                    type: 6,
                    id: r
                })), [f, r]);
                let h = ao( () => {
                    s({
                        type: 1
                    })
                }
                )
                  , p = ao(e => {
                    if (a)
                        return e.preventDefault();
                    s({
                        type: 1
                    }),
                    aX(o.buttonRef.current)
                }
                )
                  , m = ao( () => {
                    if (a)
                        return s({
                            type: 2,
                            focus: io.Nothing
                        });
                    s({
                        type: 2,
                        focus: io.Specific,
                        id: r
                    })
                }
                )
                  , x = it()
                  , g = ao(e => x.update(e))
                  , v = ao(e => {
                    x.wasMoved(e) && (a || l || s({
                        type: 2,
                        focus: io.Specific,
                        id: r,
                        trigger: 0
                    }))
                }
                )
                  , y = ao(e => {
                    x.wasMoved(e) && (a || l && s({
                        type: 2,
                        focus: io.Nothing
                    }))
                }
                )
                  , b = (0,
                H.useMemo)( () => ({
                    active: l,
                    disabled: a,
                    close: h
                }), [l, a, h]);
                return aw({
                    ourProps: {
                        id: r,
                        ref: c,
                        role: "menuitem",
                        tabIndex: !0 === a ? void 0 : -1,
                        "aria-disabled": !0 === a || void 0,
                        disabled: void 0,
                        onClick: p,
                        onFocus: m,
                        onPointerEnter: g,
                        onMouseEnter: g,
                        onPointerMove: v,
                        onMouseMove: v,
                        onPointerLeave: y,
                        onMouseLeave: y
                    },
                    theirProps: i,
                    slot: b,
                    defaultTag: iV,
                    name: "Menu.Item"
                })
            })
        })
          , iK = e => "object" == typeof e && null != e && 1 === e.nodeType
          , iQ = (e, t) => (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
          , iJ = (e, t) => {
            if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                let n = getComputedStyle(e, null);
                return iQ(n.overflowY, t) || iQ(n.overflowX, t) || (e => {
                    let t = (e => {
                        if (!e.ownerDocument || !e.ownerDocument.defaultView)
                            return null;
                        try {
                            return e.ownerDocument.defaultView.frameElement
                        } catch (e) {
                            return null
                        }
                    }
                    )(e);
                    return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
                }
                )(e)
            }
            return !1
        }
          , iY = (e, t, n, r, a, i, o, s) => i < e && o > t || i > e && o < t ? 0 : i <= e && s <= n || o >= t && s >= n ? i - e - r : o > t && s < n || i < e && s > n ? o - t + a : 0
          , iX = e => {
            let t = e.parentElement;
            return null == t ? e.getRootNode().host || null : t
        }
          , i0 = (e, t) => {
            var n, r, a, i;
            if ("undefined" == typeof document)
                return [];
            let {scrollMode: o, block: s, inline: l, boundary: u, skipOverflowHiddenElements: c} = t
              , d = "function" == typeof u ? u : e => e !== u;
            if (!iK(e))
                throw TypeError("Invalid target");
            let f = document.scrollingElement || document.documentElement
              , h = []
              , p = e;
            for (; iK(p) && d(p); ) {
                if ((p = iX(p)) === f) {
                    h.push(p);
                    break
                }
                null != p && p === document.body && iJ(p) && !iJ(document.documentElement) || null != p && iJ(p, c) && h.push(p)
            }
            let m = null != (r = null == (n = window.visualViewport) ? void 0 : n.width) ? r : innerWidth
              , x = null != (i = null == (a = window.visualViewport) ? void 0 : a.height) ? i : innerHeight
              , {scrollX: g, scrollY: v} = window
              , {height: y, width: b, top: w, right: k, bottom: _, left: j} = e.getBoundingClientRect()
              , {top: E, right: O, bottom: C, left: T} = (e => {
                let t = window.getComputedStyle(e);
                return {
                    top: parseFloat(t.scrollMarginTop) || 0,
                    right: parseFloat(t.scrollMarginRight) || 0,
                    bottom: parseFloat(t.scrollMarginBottom) || 0,
                    left: parseFloat(t.scrollMarginLeft) || 0
                }
            }
            )(e)
              , S = "start" === s || "nearest" === s ? w - E : "end" === s ? _ + C : w + y / 2 - E + C
              , N = "center" === l ? j + b / 2 - T + O : "end" === l ? k + O : j - T
              , I = [];
            for (let e = 0; e < h.length; e++) {
                let t = h[e]
                  , {height: n, width: r, top: a, right: i, bottom: u, left: c} = t.getBoundingClientRect();
                if ("if-needed" === o && w >= 0 && j >= 0 && _ <= x && k <= m && w >= a && _ <= u && j >= c && k <= i)
                    break;
                let d = getComputedStyle(t)
                  , p = parseInt(d.borderLeftWidth, 10)
                  , E = parseInt(d.borderTopWidth, 10)
                  , O = parseInt(d.borderRightWidth, 10)
                  , C = parseInt(d.borderBottomWidth, 10)
                  , T = 0
                  , R = 0
                  , A = "offsetWidth"in t ? t.offsetWidth - t.clientWidth - p - O : 0
                  , P = "offsetHeight"in t ? t.offsetHeight - t.clientHeight - E - C : 0
                  , L = "offsetWidth"in t ? 0 === t.offsetWidth ? 0 : r / t.offsetWidth : 0
                  , M = "offsetHeight"in t ? 0 === t.offsetHeight ? 0 : n / t.offsetHeight : 0;
                if (f === t)
                    T = "start" === s ? S : "end" === s ? S - x : "nearest" === s ? iY(v, v + x, x, E, C, v + S, v + S + y, y) : S - x / 2,
                    R = "start" === l ? N : "center" === l ? N - m / 2 : "end" === l ? N - m : iY(g, g + m, m, p, O, g + N, g + N + b, b),
                    T = Math.max(0, T + v),
                    R = Math.max(0, R + g);
                else {
                    T = "start" === s ? S - a - E : "end" === s ? S - u + C + P : "nearest" === s ? iY(a, u, n, E, C + P, S, S + y, y) : S - (a + n / 2) + P / 2,
                    R = "start" === l ? N - c - p : "center" === l ? N - (c + r / 2) + A / 2 : "end" === l ? N - i + O + A : iY(c, i, r, p, O + A, N, N + b, b);
                    let {scrollLeft: e, scrollTop: o} = t;
                    T = 0 === M ? 0 : Math.max(0, Math.min(o + T / M, t.scrollHeight - n / M + P)),
                    R = 0 === L ? 0 : Math.max(0, Math.min(e + R / L, t.scrollWidth - r / L + A)),
                    S += o - T,
                    N += e - R
                }
                I.push({
                    el: t,
                    top: T,
                    left: R
                })
            }
            return I
        }
          , i1 = e => !1 === e ? {
            block: "end",
            inline: "nearest"
        } : e === Object(e) && 0 !== Object.keys(e).length ? e : {
            block: "start",
            inline: "nearest"
        };
        function i2(e, t) {
            if (!e.isConnected || !(e => {
                let t = e;
                for (; t && t.parentNode; ) {
                    if (t.parentNode === document)
                        return !0;
                    t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode
                }
                return !1
            }
            )(e))
                return;
            let n = (e => {
                let t = window.getComputedStyle(e);
                return {
                    top: parseFloat(t.scrollMarginTop) || 0,
                    right: parseFloat(t.scrollMarginRight) || 0,
                    bottom: parseFloat(t.scrollMarginBottom) || 0,
                    left: parseFloat(t.scrollMarginLeft) || 0
                }
            }
            )(e);
            if ("object" == typeof t && "function" == typeof t.behavior)
                return t.behavior(i0(e, t));
            let r = "boolean" == typeof t || null == t ? void 0 : t.behavior;
            for (let {el: a, top: i, left: o} of i0(e, i1(t))) {
                let e = i - n.top + n.bottom
                  , t = o - n.left + n.right;
                a.scroll({
                    top: e,
                    left: t,
                    behavior: r
                })
            }
        }
        var i4 = n(2601)
          , i5 = n.n(i4);
        let i3 = {
            CASE_SENSITIVE_EQUAL: 7,
            EQUAL: 6,
            STARTS_WITH: 5,
            WORD_STARTS_WITH: 4,
            CONTAINS: 3,
            ACRONYM: 2,
            MATCHES: 1,
            NO_MATCH: 0
        }
          , i7 = (e, t) => String(e.rankedValue).localeCompare(String(t.rankedValue));
        function i6(e, t, n) {
            void 0 === n && (n = {});
            let {keys: r, threshold: a=i3.MATCHES, baseSort: i=i7, sorter: o=e => e.sort( (e, t) => (function(e, t, n) {
                let {rank: r, keyIndex: a} = e
                  , {rank: i, keyIndex: o} = t;
                return r !== i ? r > i ? -1 : 1 : a === o ? n(e, t) : a < o ? -1 : 1
            }
            )(e, t, i))} = n;
            return o(e.reduce(function(e, i, o) {
                var s;
                let l = (s = n,
                r ? (function(e, t) {
                    let n = [];
                    for (let r = 0, a = t.length; r < a; r++) {
                        let a = t[r]
                          , i = "string" == typeof a ? oe : {
                            ...oe,
                            ...a
                        }
                          , o = function(e, t) {
                            let n;
                            if ("object" == typeof t && (t = t.key),
                            "function" == typeof t)
                                n = t(e);
                            else if (null == e)
                                n = null;
                            else if (Object.hasOwnProperty.call(e, t))
                                n = e[t];
                            else {
                                if (t.includes("."))
                                    return function(e, t) {
                                        let n = e.split(".")
                                          , r = [t];
                                        for (let e = 0, t = n.length; e < t; e++) {
                                            let t = n[e]
                                              , a = [];
                                            for (let e = 0, n = r.length; e < n; e++) {
                                                let n = r[e];
                                                if (null != n) {
                                                    if (Object.hasOwnProperty.call(n, t)) {
                                                        let e = n[t];
                                                        null != e && a.push(e)
                                                    } else
                                                        "*" === t && (a = a.concat(n))
                                                }
                                            }
                                            r = a
                                        }
                                        return Array.isArray(r[0]) ? [].concat(...r) : r
                                    }(t, e);
                                n = null
                            }
                            return null == n ? [] : Array.isArray(n) ? n : [String(n)]
                        }(e, a);
                        for (let e = 0, t = o.length; e < t; e++)
                            n.push({
                                itemValue: o[e],
                                attributes: i
                            })
                    }
                    return n
                }
                )(i, r).reduce( (e, n, r) => {
                    let {rank: a, rankedValue: i, keyIndex: o, keyThreshold: l} = e
                      , {itemValue: u, attributes: c} = n
                      , d = i9(u, t, s)
                      , f = i
                      , {minRanking: h, maxRanking: p, threshold: m} = c;
                    return d < h && d >= i3.MATCHES ? d = h : d > p && (d = p),
                    d > a && (a = d,
                    o = r,
                    l = m,
                    f = u),
                    {
                        rankedValue: f,
                        rank: a,
                        keyIndex: o,
                        keyThreshold: l
                    }
                }
                , {
                    rankedValue: i,
                    rank: i3.NO_MATCH,
                    keyIndex: -1,
                    keyThreshold: s.threshold
                }) : {
                    rankedValue: i,
                    rank: i9(i, t, s),
                    keyIndex: -1,
                    keyThreshold: s.threshold
                })
                  , {rank: u, keyThreshold: c=a} = l;
                return u >= c && e.push({
                    ...l,
                    item: i,
                    index: o
                }),
                e
            }, [])).map(e => {
                let {item: t} = e;
                return t
            }
            )
        }
        function i9(e, t, n) {
            let r;
            return (e = i8(e, n),
            (t = i8(t, n)).length > e.length) ? i3.NO_MATCH : e === t ? i3.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase()) === (t = t.toLowerCase()) ? i3.EQUAL : e.startsWith(t) ? i3.STARTS_WITH : e.includes(` ${t}`) ? i3.WORD_STARTS_WITH : e.includes(t) ? i3.CONTAINS : 1 === t.length ? i3.NO_MATCH : (r = "",
            e.split(" ").forEach(e => {
                e.split("-").forEach(e => {
                    r += e.substr(0, 1)
                }
                )
            }
            ),
            r).includes(t) ? i3.ACRONYM : function(e, t) {
                let n = 0
                  , r = 0;
                function a(e, t, r) {
                    for (let a = r, i = t.length; a < i; a++)
                        if (t[a] === e)
                            return n += 1,
                            a + 1;
                    return -1
                }
                let i = a(t[0], e, 0);
                if (i < 0)
                    return i3.NO_MATCH;
                r = i;
                for (let n = 1, i = t.length; n < i; n++)
                    if (!((r = a(t[n], e, r)) > -1))
                        return i3.NO_MATCH;
                return function(e) {
                    let r = n / t.length;
                    return i3.MATCHES + 1 / e * r
                }(r - i)
            }(e, t)
        }
        function i8(e, t) {
            let {keepDiacritics: n} = t;
            return e = `${e}`,
            n || (e = i5()(e)),
            e
        }
        i6.rankings = i3;
        let oe = {
            maxRanking: 1 / 0,
            minRanking: -1 / 0
        };
        var ot = ({children: e, className: t, ...n}) => (0,
        J.jsx)("button", {
            className: B("nextra-button nx-transition-all active:nx-opacity-50", "nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5", "dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50", t),
            ...n,
            children: e
        });
        B("nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300"),
        B("nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200"),
        B("nx-border-blue-200 nx-bg-blue-100 nx-text-blue-900 dark:nx-border-blue-200/30 dark:nx-bg-blue-900/30 dark:nx-text-blue-200"),
        B("nx-border-yellow-100 nx-bg-yellow-50 nx-text-yellow-900 dark:nx-border-yellow-200/30 dark:nx-bg-yellow-700/30 dark:nx-text-yellow-200");
        var on = ({getValue: e, ...t}) => {
            let[n,r] = (0,
            H.useState)(!1);
            (0,
            H.useEffect)( () => {
                if (!n)
                    return;
                let e = setTimeout( () => {
                    r(!1)
                }
                , 2e3);
                return () => {
                    clearTimeout(e)
                }
            }
            , [n]);
            let a = (0,
            H.useCallback)(async () => {
                r(!0),
                navigator?.clipboard || console.error("Access to clipboard rejected!");
                try {
                    await navigator.clipboard.writeText(e())
                } catch {
                    console.error("Failed to copy!")
                }
            }
            , [e]);
            return (0,
            J.jsx)(ot, {
                onClick: a,
                title: "Copy code",
                tabIndex: 0,
                ...t,
                children: (0,
                J.jsx)(n ? X : ee, {
                    className: "nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"
                })
            })
        }
          , or = ({children: e, className: t, ...n}) => (0,
        J.jsx)("code", {
            className: B("nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]", "dark:nx-border-white/10 dark:nx-bg-white/10", "data-line-numbers"in n && "[counter-reset:line]", t),
            dir: "ltr",
            ...n,
            children: e
        })
          , oa = ({children: e, className: t, hasCopyCode: n, filename: r, ...a}) => {
            let i = (0,
            H.useRef)(null)
              , o = (0,
            H.useCallback)( () => {
                let e = document.documentElement.dataset;
                "nextraWordWrap"in e ? delete e.nextraWordWrap : e.nextraWordWrap = ""
            }
            , []);
            return (0,
            J.jsxs)("div", {
                className: "nextra-code-block nx-relative nx-mt-6 first:nx-mt-0",
                children: [r && (0,
                J.jsx)("div", {
                    className: "nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl nx-bg-primary-700/5 nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:nx-bg-primary-300/10 dark:nx-text-gray-200",
                    children: r
                }), (0,
                J.jsx)("pre", {
                    className: B("nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em]", "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40", r ? "nx-pt-12 nx-pb-4" : "nx-py-4", t),
                    ref: i,
                    ...a,
                    children: e
                }), (0,
                J.jsxs)("div", {
                    className: B("nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100", "nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0", r ? "nx-top-8" : "nx-top-0"),
                    children: [(0,
                    J.jsx)(ot, {
                        onClick: o,
                        className: "md:nx-hidden",
                        title: "Toggle word wrap",
                        children: (0,
                        J.jsx)(el, {
                            className: "nx-pointer-events-none nx-h-4 nx-w-4"
                        })
                    }), n && (0,
                    J.jsx)(on, {
                        getValue: () => i.current?.querySelector("code")?.textContent || ""
                    })]
                })]
            })
        }
        ;
        function oi(e) {
            let {onFocus: t} = e
              , [n,r] = (0,
            H.useState)(!0)
              , a = as();
            return n ? H.createElement(ia, {
                as: "button",
                type: "button",
                features: ir.Focusable,
                onFocus: e => {
                    e.preventDefault();
                    let n, i = 50;
                    n = requestAnimationFrame(function e() {
                        if (i-- <= 0) {
                            n && cancelAnimationFrame(n);
                            return
                        }
                        if (t()) {
                            if (cancelAnimationFrame(n),
                            !a.current)
                                return;
                            r(!1);
                            return
                        }
                        n = requestAnimationFrame(e)
                    })
                }
            }) : null
        }
        let oo = H.createContext(null);
        function os(e) {
            let {children: t} = e
              , n = H.useRef({
                groups: new Map,
                get(e, t) {
                    var n;
                    let r = this.groups.get(e);
                    r || (r = new Map,
                    this.groups.set(e, r));
                    let a = null != (n = r.get(t)) ? n : 0;
                    return r.set(t, a + 1),
                    [Array.from(r.keys()).indexOf(t), function() {
                        let e = r.get(t);
                        e > 1 ? r.set(t, e - 1) : r.delete(t)
                    }
                    ]
                }
            });
            return H.createElement(oo.Provider, {
                value: n
            }, t)
        }
        function ol(e) {
            let t = H.useContext(oo);
            if (!t)
                throw Error("You must wrap your component in a <StableCollection>");
            let n = function() {
                var e, t, n;
                let r = null != (n = null == (t = null == (e = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ? void 0 : e.ReactCurrentOwner) ? void 0 : t.current) ? n : null;
                if (!r)
                    return Symbol();
                let a = []
                  , i = r;
                for (; i; )
                    a.push(i.index),
                    i = i.return;
                return "$." + a.join(".")
            }()
              , [r,a] = t.current.get(e, n);
            return H.useEffect( () => a, []),
            r
        }
        var ou = ((_ = ou || {})[_.Forwards = 0] = "Forwards",
        _[_.Backwards = 1] = "Backwards",
        _)
          , oc = ((j = oc || {})[j.Less = -1] = "Less",
        j[j.Equal = 0] = "Equal",
        j[j.Greater = 1] = "Greater",
        j)
          , od = ((E = od || {})[E.SetSelectedIndex = 0] = "SetSelectedIndex",
        E[E.RegisterTab = 1] = "RegisterTab",
        E[E.UnregisterTab = 2] = "UnregisterTab",
        E[E.RegisterPanel = 3] = "RegisterPanel",
        E[E.UnregisterPanel = 4] = "UnregisterPanel",
        E);
        let of = {
            0(e, t) {
                var n;
                let r = a1(e.tabs, e => e.current)
                  , a = a1(e.panels, e => e.current)
                  , i = r.filter(e => {
                    var t;
                    return !(null != (t = e.current) && t.hasAttribute("disabled"))
                }
                )
                  , o = {
                    ...e,
                    tabs: r,
                    panels: a
                };
                if (t.index < 0 || t.index > r.length - 1) {
                    let n = ad(Math.sign(t.index - e.selectedIndex), {
                        [-1]: () => 1,
                        0: () => ad(Math.sign(t.index), {
                            [-1]: () => 0,
                            0: () => 0,
                            1: () => 1
                        }),
                        1: () => 0
                    });
                    if (0 === i.length)
                        return o;
                    let a = ad(n, {
                        0: () => r.indexOf(i[0]),
                        1: () => r.indexOf(i[i.length - 1])
                    });
                    return {
                        ...o,
                        selectedIndex: -1 === a ? e.selectedIndex : a
                    }
                }
                let s = r.slice(0, t.index)
                  , l = [...r.slice(t.index), ...s].find(e => i.includes(e));
                if (!l)
                    return o;
                let u = null != (n = r.indexOf(l)) ? n : e.selectedIndex;
                return -1 === u && (u = e.selectedIndex),
                {
                    ...o,
                    selectedIndex: u
                }
            },
            1(e, t) {
                if (e.tabs.includes(t.tab))
                    return e;
                let n = e.tabs[e.selectedIndex]
                  , r = a1([...e.tabs, t.tab], e => e.current)
                  , a = e.selectedIndex;
                return e.info.current.isControlled || -1 === (a = r.indexOf(n)) && (a = e.selectedIndex),
                {
                    ...e,
                    tabs: r,
                    selectedIndex: a
                }
            },
            2: (e, t) => ({
                ...e,
                tabs: e.tabs.filter(e => e !== t.tab)
            }),
            3: (e, t) => e.panels.includes(t.panel) ? e : {
                ...e,
                panels: a1([...e.panels, t.panel], e => e.current)
            },
            4: (e, t) => ({
                ...e,
                panels: e.panels.filter(e => e !== t.panel)
            })
        }
          , oh = (0,
        H.createContext)(null);
        function op(e) {
            let t = (0,
            H.useContext)(oh);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Tab.Group /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, op),
                t
            }
            return t
        }
        oh.displayName = "TabsDataContext";
        let om = (0,
        H.createContext)(null);
        function ox(e) {
            let t = (0,
            H.useContext)(om);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Tab.Group /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, ox),
                t
            }
            return t
        }
        function og(e, t) {
            return ad(t.type, of, e, t)
        }
        om.displayName = "TabsActionsContext";
        let ov = H.Fragment
          , oy = ay.RenderStrategy | ay.Static
          , ob = Object.assign(aE(function(e, t) {
            var n, r;
            let a = aH()
              , {id: i="headlessui-tabs-tab-".concat(a), ...o} = e
              , {orientation: s, activation: l, selectedIndex: u, tabs: c, panels: d} = op("Tab")
              , f = ox("Tab")
              , h = op("Tab")
              , p = (0,
            H.useRef)(null)
              , m = ac(p, t);
            aa( () => f.registerTab(p), [f, p]);
            let x = ol("tabs")
              , g = c.indexOf(p);
            -1 === g && (g = x);
            let v = g === u
              , y = ao(e => {
                var t;
                let n = e();
                if (n === aq.Success && "auto" === l) {
                    let e = null == (t = aG(p)) ? void 0 : t.activeElement
                      , n = h.tabs.findIndex(t => t.current === e);
                    -1 !== n && f.change(n)
                }
                return n
            }
            )
              , b = ao(e => {
                let t = c.map(e => e.current).filter(Boolean);
                if (e.key === iu.Space || e.key === iu.Enter) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    f.change(g);
                    return
                }
                switch (e.key) {
                case iu.Home:
                case iu.PageUp:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    y( () => a2(t, aV.First));
                case iu.End:
                case iu.PageDown:
                    return e.preventDefault(),
                    e.stopPropagation(),
                    y( () => a2(t, aV.Last))
                }
                if (y( () => ad(s, {
                    vertical: () => e.key === iu.ArrowUp ? a2(t, aV.Previous | aV.WrapAround) : e.key === iu.ArrowDown ? a2(t, aV.Next | aV.WrapAround) : aq.Error,
                    horizontal: () => e.key === iu.ArrowLeft ? a2(t, aV.Previous | aV.WrapAround) : e.key === iu.ArrowRight ? a2(t, aV.Next | aV.WrapAround) : aq.Error
                })) === aq.Success)
                    return e.preventDefault()
            }
            )
              , w = (0,
            H.useRef)(!1)
              , k = ao( () => {
                var e;
                w.current || (w.current = !0,
                null == (e = p.current) || e.focus({
                    preventScroll: !0
                }),
                f.change(g),
                r7( () => {
                    w.current = !1
                }
                ))
            }
            )
              , _ = ao(e => {
                e.preventDefault()
            }
            )
              , j = (0,
            H.useMemo)( () => {
                var t;
                return {
                    selected: v,
                    disabled: null != (t = e.disabled) && t
                }
            }
            , [v, e.disabled]);
            return aw({
                ourProps: {
                    ref: m,
                    onKeyDown: b,
                    onMouseDown: _,
                    onClick: k,
                    id: i,
                    role: "tab",
                    type: a7(e, p),
                    "aria-controls": null == (r = null == (n = d[g]) ? void 0 : n.current) ? void 0 : r.id,
                    "aria-selected": v,
                    tabIndex: v ? 0 : -1
                },
                theirProps: o,
                slot: j,
                defaultTag: "button",
                name: "Tabs.Tab"
            })
        }), {
            Group: aE(function(e, t) {
                let {defaultIndex: n=0, vertical: r=!1, manual: a=!1, onChange: i, selectedIndex: o=null, ...s} = e
                  , l = r ? "vertical" : "horizontal"
                  , u = a ? "manual" : "auto"
                  , c = null !== o
                  , d = ai({
                    isControlled: c
                })
                  , f = ac(t)
                  , [h,p] = (0,
                H.useReducer)(og, {
                    info: d,
                    selectedIndex: null != o ? o : n,
                    tabs: [],
                    panels: []
                })
                  , m = (0,
                H.useMemo)( () => ({
                    selectedIndex: h.selectedIndex
                }), [h.selectedIndex])
                  , x = ai(i || ( () => {}
                ))
                  , g = ai(h.tabs)
                  , v = (0,
                H.useMemo)( () => ({
                    orientation: l,
                    activation: u,
                    ...h
                }), [l, u, h])
                  , y = ao(e => (p({
                    type: 1,
                    tab: e
                }),
                () => p({
                    type: 2,
                    tab: e
                })))
                  , b = ao(e => (p({
                    type: 3,
                    panel: e
                }),
                () => p({
                    type: 4,
                    panel: e
                })))
                  , w = ao(e => {
                    k.current !== e && x.current(e),
                    c || p({
                        type: 0,
                        index: e
                    })
                }
                )
                  , k = ai(c ? e.selectedIndex : h.selectedIndex)
                  , _ = (0,
                H.useMemo)( () => ({
                    registerTab: y,
                    registerPanel: b,
                    change: w
                }), []);
                return aa( () => {
                    p({
                        type: 0,
                        index: null != o ? o : n
                    })
                }
                , [o]),
                aa( () => {
                    if (void 0 === k.current || h.tabs.length <= 0)
                        return;
                    let e = a1(h.tabs, e => e.current);
                    e.some( (e, t) => h.tabs[t] !== e) && w(e.indexOf(h.tabs[k.current]))
                }
                ),
                H.createElement(os, null, H.createElement(om.Provider, {
                    value: _
                }, H.createElement(oh.Provider, {
                    value: v
                }, v.tabs.length <= 0 && H.createElement(oi, {
                    onFocus: () => {
                        var e, t;
                        for (let n of g.current)
                            if ((null == (e = n.current) ? void 0 : e.tabIndex) === 0)
                                return null == (t = n.current) || t.focus(),
                                !0;
                        return !1
                    }
                }), aw({
                    ourProps: {
                        ref: f
                    },
                    theirProps: s,
                    slot: m,
                    defaultTag: ov,
                    name: "Tabs"
                }))))
            }),
            List: aE(function(e, t) {
                let {orientation: n, selectedIndex: r} = op("Tab.List");
                return aw({
                    ourProps: {
                        ref: ac(t),
                        role: "tablist",
                        "aria-orientation": n
                    },
                    theirProps: e,
                    slot: {
                        selectedIndex: r
                    },
                    defaultTag: "div",
                    name: "Tabs.List"
                })
            }),
            Panels: aE(function(e, t) {
                let {selectedIndex: n} = op("Tab.Panels");
                return aw({
                    ourProps: {
                        ref: ac(t)
                    },
                    theirProps: e,
                    slot: (0,
                    H.useMemo)( () => ({
                        selectedIndex: n
                    }), [n]),
                    defaultTag: "div",
                    name: "Tabs.Panels"
                })
            }),
            Panel: aE(function(e, t) {
                var n, r, a, i;
                let o = aH()
                  , {id: s="headlessui-tabs-panel-".concat(o), tabIndex: l=0, ...u} = e
                  , {selectedIndex: c, tabs: d, panels: f} = op("Tab.Panel")
                  , h = ox("Tab.Panel")
                  , p = (0,
                H.useRef)(null)
                  , m = ac(p, t);
                aa( () => h.registerPanel(p), [h, p, s]);
                let x = ol("panels")
                  , g = f.indexOf(p);
                -1 === g && (g = x);
                let v = g === c
                  , y = (0,
                H.useMemo)( () => ({
                    selected: v
                }), [v])
                  , b = {
                    ref: m,
                    id: s,
                    role: "tabpanel",
                    "aria-labelledby": null == (r = null == (n = d[g]) ? void 0 : n.current) ? void 0 : r.id,
                    tabIndex: v ? l : -1
                };
                return v || null != (a = u.unmount) && !a || null != (i = u.static) && i ? aw({
                    ourProps: b,
                    theirProps: u,
                    slot: y,
                    defaultTag: "div",
                    features: oy,
                    visible: v,
                    name: "Tabs.Panel"
                }) : H.createElement(ia, {
                    as: "span",
                    "aria-hidden": "true",
                    ...b
                })
            })
        });
        function ow(e) {
            return !!e && "object" == typeof e && "label"in e
        }
        Object.assign(function({items: e, selectedIndex: t, defaultIndex: n=0, onChange: r, children: a, storageKey: i}) {
            let[o,s] = (0,
            H.useState)(n);
            (0,
            H.useEffect)( () => {
                void 0 !== t && s(t)
            }
            , [t]),
            (0,
            H.useEffect)( () => {
                if (!i)
                    return;
                function e(e) {
                    e.key === i && s(Number(e.newValue))
                }
                let t = Number(localStorage.getItem(i));
                return s(Number.isNaN(t) ? 0 : t),
                window.addEventListener("storage", e),
                () => {
                    window.removeEventListener("storage", e)
                }
            }
            , []);
            let l = (0,
            H.useCallback)(e => {
                if (i) {
                    let t = String(e);
                    localStorage.setItem(i, t),
                    window.dispatchEvent(new StorageEvent("storage",{
                        key: i,
                        newValue: t
                    }));
                    return
                }
                s(e),
                r?.(e)
            }
            , []);
            return (0,
            J.jsxs)(ob.Group, {
                selectedIndex: o,
                defaultIndex: n,
                onChange: l,
                children: [(0,
                J.jsx)("div", {
                    className: "nextra-scrollbar nx-overflow-x-auto nx-overflow-y-hidden nx-overscroll-x-contain",
                    children: (0,
                    J.jsx)(ob.List, {
                        className: "nx-mt-4 nx-flex nx-w-max nx-min-w-full nx-border-b nx-border-gray-200 nx-pb-px dark:nx-border-neutral-800",
                        children: e.map( (e, t) => {
                            let n = ow(e) && e.disabled;
                            return (0,
                            J.jsx)(ob, {
                                disabled: n,
                                className: ({selected: e}) => B("nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors", "-nx-mb-0.5 nx-select-none nx-border-b-2", e ? "nx-border-primary-500 nx-text-primary-600" : "nx-border-transparent nx-text-gray-600 hover:nx-border-gray-200 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-border-neutral-800 dark:hover:nx-text-white", n && "nx-pointer-events-none nx-text-gray-400 dark:nx-text-neutral-600"),
                                children: ow(e) ? e.label : e
                            }, t)
                        }
                        )
                    })
                }), (0,
                J.jsx)(ob.Panels, {
                    children: a
                })]
            })
        }, {
            displayName: "Tabs",
            Tab: function({children: e, ...t}) {
                return (0,
                J.jsx)(ob.Panel, {
                    ...t,
                    className: "nx-rounded nx-pt-6",
                    children: e
                })
            }
        });
        var ok = ({className: e="", ...t}) => (0,
        J.jsx)("td", {
            className: B("nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600", e),
            ...t
        })
          , o_ = ({className: e="", ...t}) => (0,
        J.jsx)("table", {
            className: B("nx-block nx-overflow-x-scroll", e),
            ...t
        })
          , oj = ({className: e="", ...t}) => (0,
        J.jsx)("th", {
            className: B("nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600", e),
            ...t
        })
          , oE = ({className: e="", ...t}) => (0,
        J.jsx)("tr", {
            className: B("nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600", "even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20", e),
            ...t
        })
          , oO = {
            cards: B("nextra-cards nx-mt-4 nx-gap-4 nx-grid", "nx-not-prose"),
            card: B("nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200", "nx-text-current nx-no-underline dark:nx-shadow-none", "hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100", "active:nx-shadow-sm active:nx-shadow-gray-200", "nx-transition-all nx-duration-200 hover:nx-border-gray-300"),
            title: B("nx-flex nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700 hover:nx-text-gray-900")
        }
          , oC = (0,
        J.jsx)("span", {
            className: "nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]",
            children: "→"
        });
        Object.assign(function({children: e, num: t=3, className: n, style: r, ...a}) {
            return (0,
            J.jsx)("div", {
                className: B(oO.cards, n),
                ...a,
                style: {
                    ...r,
                    "--rows": t
                },
                children: e
            })
        }, {
            displayName: "Cards",
            Card: function({children: e, title: t, icon: n, image: r, arrow: a, href: i, ...o}) {
                let s = a ? oC : null;
                return r ? (0,
                J.jsxs)(t7(), {
                    href: i,
                    className: B(oO.card, "nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 hover:nx-shadow-lg dark:hover:nx-border-neutral-500 dark:hover:nx-bg-neutral-700"),
                    ...o,
                    children: [e, (0,
                    J.jsxs)("span", {
                        className: B(oO.title, "dark:nx-text-gray-300 dark:hover:nx-text-gray-100"),
                        children: [n, (0,
                        J.jsxs)("span", {
                            className: "nx-flex nx-gap-1",
                            children: [t, s]
                        })]
                    })]
                }) : (0,
                J.jsx)(t7(), {
                    href: i,
                    className: B(oO.card, "nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900"),
                    ...o,
                    children: (0,
                    J.jsxs)("span", {
                        className: B(oO.title, "dark:nx-text-neutral-200 dark:hover:nx-text-neutral-50 nx-flex nx-items-center"),
                        children: [n, t, s]
                    })
                })
            }
        });
        var oT = (0,
        H.createContext)(0);
        function oS() {
            return (0,
            H.useContext)(oT)
        }
        function oN() {
            let e = oS();
            return (0,
            J.jsx)(J.Fragment, {
                children: Array.from({
                    length: e
                }, (e, t) => (0,
                J.jsx)("span", {
                    className: "nx-w-5"
                }, t))
            })
        }
        var oI = (0,
        H.memo)( ({label: e, name: t, open: n, children: r, defaultOpen: a=!1, onToggle: i}) => {
            let o = oS()
              , [s,l] = (0,
            H.useState)(a)
              , u = (0,
            H.useCallback)( () => {
                i?.(!s),
                l(!s)
            }
            , [s, i])
              , c = void 0 === n ? s : n;
            return (0,
            J.jsxs)("li", {
                className: "nx-flex nx-list-none nx-flex-col",
                children: [(0,
                J.jsxs)("button", {
                    onClick: u,
                    title: t,
                    className: "nx-inline-flex nx-cursor-pointer nx-items-center nx-py-1 hover:nx-opacity-60",
                    children: [(0,
                    J.jsx)(oN, {}), (0,
                    J.jsx)("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        children: (0,
                        J.jsx)("path", {
                            fill: "none",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: c ? "M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z" : "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"
                        })
                    }), (0,
                    J.jsx)("span", {
                        className: "nx-ml-1",
                        children: e ?? t
                    })]
                }), c && (0,
                J.jsx)("ul", {
                    children: (0,
                    J.jsx)(oT.Provider, {
                        value: o + 1,
                        children: r
                    })
                })]
            })
        }
        );
        oI.displayName = "Folder";
        var oR = (0,
        H.memo)( ({label: e, name: t, active: n}) => (0,
        J.jsx)("li", {
            className: B("nx-flex nx-list-none", n && "nx-text-primary-600 contrast-more:nx-underline"),
            children: (0,
            J.jsxs)("span", {
                className: "nx-inline-flex nx-cursor-default nx-items-center nx-py-1",
                children: [(0,
                J.jsx)(oN, {}), (0,
                J.jsx)("svg", {
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    children: (0,
                    J.jsx)("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
                    })
                }), (0,
                J.jsx)("span", {
                    className: "nx-ml-1",
                    children: e ?? t
                })]
            })
        }));
        oR.displayName = "File",
        Object.assign(function({children: e}) {
            return (0,
            J.jsx)("div", {
                className: B("nextra-filetree nx-mt-6 nx-select-none nx-text-sm nx-text-gray-800 dark:nx-text-gray-300", "nx-not-prose"),
                children: (0,
                J.jsx)("div", {
                    className: "nx-inline-block nx-rounded-lg nx-border nx-px-4 nx-py-2 dark:nx-border-neutral-800",
                    children: e
                })
            })
        }, {
            Folder: oI,
            File: oR
        });
        var oA = Object.defineProperty
          , oP = Object.defineProperties
          , oL = Object.getOwnPropertyDescriptors
          , oM = Object.getOwnPropertySymbols
          , oD = Object.prototype.hasOwnProperty
          , oF = Object.prototype.propertyIsEnumerable
          , o$ = (e, t, n) => t in e ? oA(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , oZ = (e, t) => {
            for (var n in t || (t = {}))
                oD.call(t, n) && o$(e, n, t[n]);
            if (oM)
                for (var n of oM(t))
                    oF.call(t, n) && o$(e, n, t[n]);
            return e
        }
          , oU = (e, t) => oP(e, oL(t))
          , oW = (e, t) => {
            var n = {};
            for (var r in e)
                oD.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && oM)
                for (var r of oM(e))
                    0 > t.indexOf(r) && oF.call(e, r) && (n[r] = e[r]);
            return n
        }
          , oz = (e, t, n) => new Promise( (r, a) => {
            var i = e => {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }
              , o = e => {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }
              , s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, o);
            s((n = n.apply(e, t)).next())
        }
        )
          , oH = (0,
        H.createContext)({})
          , oG = (0,
        H.createContext)(e => e)
          , oB = (0,
        H.createContext)(null)
          , oV = new WeakMap
          , oq = (0,
        H.createContext)(oV)
          , oK = () => (0,
        H.useContext)(oH)
          , oQ = () => (0,
        H.useContext)(oG)
          , oJ = () => (0,
        H.useContext)(oB)
          , oY = () => (0,
        H.useContext)(oq)
          , oX = ({children: e}) => {
            let[t,n] = (0,
            H.useState)({})
              , r = (0,
            H.useRef)(null);
            return sz && !r.current && (r.current = new IntersectionObserver(e => {
                n(t => {
                    let n = oZ({}, t);
                    for (let t of e)
                        if ((null == t ? void 0 : t.rootBounds) && oV.has(t.target)) {
                            let[e,r] = oV.get(t.target)
                              , a = t.boundingClientRect.y + t.boundingClientRect.height <= t.rootBounds.y + t.rootBounds.height
                              , i = t.intersectionRatio > 0;
                            n[e] = {
                                index: r,
                                aboveHalfViewport: a,
                                insideHalfViewport: i
                            }
                        }
                    let r = ""
                      , a = 1 / 0
                      , i = -1;
                    for (let e in n)
                        n[e].isActive = !1,
                        n[e].insideHalfViewport && n[e].index < a && (a = n[e].index,
                        r = e),
                        a === 1 / 0 && n[e].aboveHalfViewport && n[e].index > i && (i = n[e].index,
                        r = e);
                    return n[r] && (n[r].isActive = !0),
                    n
                }
                )
            }
            ,{
                rootMargin: "0px 0px -50%",
                threshold: [0, 1]
            })),
            (0,
            J.jsx)(oH.Provider, {
                value: t,
                children: (0,
                J.jsx)(oG.Provider, {
                    value: n,
                    children: (0,
                    J.jsx)(oq.Provider, {
                        value: oV,
                        children: (0,
                        J.jsx)(oB.Provider, {
                            value: r.current,
                            children: e
                        })
                    })
                })
            })
        }
          , o0 = (0,
        H.createContext)({
            menu: !1,
            setMenu: () => !1
        })
          , o1 = () => (0,
        H.useContext)(o0)
          , o2 = o0.Provider
          , o4 = (0,
        H.createContext)(oZ({
            title: "",
            frontMatter: {}
        }, sQ));
        function o5() {
            return (0,
            H.useContext)(o4)
        }
        var o3 = ({children: e, value: {themeConfig: t, pageOpts: n}}) => {
            let[r,a] = (0,
            H.useState)(!1);
            W || (W = oZ(oZ({}, sQ), Object.fromEntries(Object.entries(t).map( ([e,t]) => [e, t && "object" == typeof t && sJ.includes(e) ? oZ(oZ({}, sQ[e]), t) : t]))));
            let i = oU(oZ(oU(oZ({}, W), {
                flexsearch: n.flexsearch
            }), "boolean" == typeof n.newNextLinkBehavior && {
                newNextLinkBehavior: n.newNextLinkBehavior
            }), {
                title: n.title,
                frontMatter: n.frontMatter
            })
              , {nextThemes: o} = i;
            return (0,
            J.jsx)(nr, {
                attribute: "class",
                disableTransitionOnChange: !0,
                defaultTheme: o.defaultTheme,
                storageKey: o.storageKey,
                forcedTheme: o.forcedTheme,
                children: (0,
                J.jsx)(o4.Provider, {
                    value: i,
                    children: (0,
                    J.jsx)(o2, {
                        value: {
                            menu: r,
                            setMenu: a
                        },
                        children: e
                    })
                })
            })
        }
          , o7 = (0,
        H.createContext)(e => e)
          , o6 = () => (0,
        H.useContext)(o7)
          , o9 = o7.Provider
          , o8 = Number("14.2.12".split(".")[0])
          , se = (0,
        H.forwardRef)(function(e, t) {
            var {href: n="", children: r, newWindow: a} = e
              , i = oW(e, ["href", "children", "newWindow"]);
            let o = o5();
            return a ? (0,
            J.jsxs)("a", oU(oZ({
                ref: t,
                href: n,
                target: "_blank",
                rel: "noreferrer"
            }, i), {
                children: [r, (0,
                J.jsx)("span", {
                    className: "nx-sr-only nx-select-none",
                    children: " (opens in a new tab)"
                })]
            })) : n ? o8 > 12 || o.newNextLinkBehavior ? (0,
            J.jsx)(t7(), oU(oZ({
                ref: t,
                href: n
            }, i), {
                children: r
            })) : (0,
            J.jsx)(t7(), {
                href: n,
                passHref: !0,
                children: (0,
                J.jsx)("a", oU(oZ({
                    ref: t
                }, i), {
                    children: r
                }))
            }) : (0,
            J.jsx)("a", oU(oZ({
                ref: t
            }, i), {
                children: r
            }))
        });
        se.displayName = "Anchor";
        var st = ({repository: e="", title: t, labels: n}) => {
            let r = ny()(e);
            if (!r)
                throw Error("Invalid `docsRepositoryBase` URL!");
            return r.resource.includes("gitlab") ? `${r.protocol}://${r.resource}/${r.owner}/${r.name}/-/issues/new?issue[title]=${encodeURIComponent(t)}${n ? `&issue[description]=/label${encodeURIComponent(` ~${n}
`)}` : ""}` : r.resource.includes("github") ? `${r.protocol}://${r.resource}/${r.owner}/${r.name}/issues/new?title=${encodeURIComponent(t)}&labels=${n || ""}` : "#"
        }
        ;
        function sn(e, t) {
            return e ? "function" != typeof e ? e : (0,
            J.jsx)(e, oZ({}, t)) : null
        }
        function sr(e, t={}) {
            return ("function" == typeof e ? e(t) : e) || ""
        }
        function sa() {
            let {banner: e} = o5();
            if (!e.text)
                return null;
            let t = `try{if(localStorage.getItem(${JSON.stringify(e.key)})==='0'){document.body.classList.add('nextra-banner-hidden')}}catch(e){}`;
            return (0,
            J.jsxs)(J.Fragment, {
                children: [(0,
                J.jsx)("script", {
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                }), (0,
                J.jsxs)("div", {
                    className: B("nextra-banner-container nx-sticky nx-top-0 nx-z-20 nx-flex nx-items-center md:nx-relative", "nx-h-[var(--nextra-banner-height)] [body.nextra-banner-hidden_&]:nx-hidden", "nx-text-slate-50 dark:nx-text-white nx-bg-neutral-900 dark:nx-bg-[linear-gradient(1deg,#383838,#212121)]", "nx-px-2 ltr:nx-pl-10 rtl:nx-pr-10 print:nx-hidden"),
                    children: [(0,
                    J.jsx)("div", {
                        className: "nx-w-full nx-truncate nx-px-4 nx-text-center nx-font-medium nx-text-sm",
                        children: sn(e.text)
                    }), e.dismissible && (0,
                    J.jsx)("button", {
                        type: "button",
                        "aria-label": "Dismiss banner",
                        className: "nx-w-8 nx-h-8 nx-opacity-80 hover:nx-opacity-100",
                        onClick: () => {
                            try {
                                localStorage.setItem(e.key, "0")
                            } catch (e) {}
                            document.body.classList.add("nextra-banner-hidden")
                        }
                        ,
                        children: (0,
                        J.jsx)(eu, {
                            className: "nx-mx-auto nx-h-4 nx-w-4"
                        })
                    })]
                })]
            })
        }
        function si({activePath: e}) {
            return (0,
            J.jsx)("div", {
                className: "nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current",
                children: e.map( (t, n) => {
                    let r = !t.children || t.withIndexPage
                      , a = n === e.length - 1;
                    return (0,
                    J.jsxs)(H.Fragment, {
                        children: [n > 0 && (0,
                        J.jsx)(Y, {
                            className: "nx-w-3.5 nx-shrink-0"
                        }), (0,
                        J.jsx)("div", {
                            className: B("nx-whitespace-nowrap nx-transition-colors", a ? "nx-font-medium nx-text-gray-700 contrast-more:nx-font-bold contrast-more:nx-text-current dark:nx-text-gray-100 contrast-more:dark:nx-text-current" : ["nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis", r && "hover:nx-text-gray-900 dark:hover:nx-text-gray-100"]),
                            title: t.title,
                            children: r && !a ? (0,
                            J.jsx)(se, {
                                href: t.route,
                                children: t.title
                            }) : t.title
                        })]
                    }, t.route + t.name)
                }
                )
            })
        }
        function so({children: e, className: t, isOpen: n, horizontal: r=!1}) {
            let a = (0,
            H.useRef)(null)
              , i = (0,
            H.useRef)(null)
              , o = (0,
            H.useRef)(0)
              , s = (0,
            H.useRef)(n)
              , l = (0,
            H.useRef)(!0);
            return (0,
            H.useEffect)( () => {
                let e = a.current
                  , t = i.current
                  , s = o.current;
                s && clearTimeout(s),
                !l.current && e && t && (e.classList.toggle("nx-duration-500", !n),
                e.classList.toggle("nx-duration-300", n),
                r ? (t.style.width = `${t.clientWidth}px`,
                e.style.width = `${t.clientWidth}px`) : e.style.height = `${t.clientHeight}px`,
                n ? o.current = window.setTimeout( () => {
                    e.style.removeProperty("height")
                }
                , 300) : setTimeout( () => {
                    r ? e.style.width = "0px" : e.style.height = "0px"
                }
                , 0))
            }
            , [r, n]),
            (0,
            H.useEffect)( () => {
                l.current = !1
            }
            , []),
            (0,
            J.jsx)("div", {
                ref: a,
                className: "nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none",
                style: s.current || r ? void 0 : {
                    height: 0
                },
                children: (0,
                J.jsx)("div", {
                    ref: i,
                    className: B("nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none", n ? "nx-opacity-100" : "nx-opacity-0", t),
                    children: e
                })
            })
        }
        var ss = (0,
        H.memo)(function({value: e, match: t}) {
            let n;
            if (!e)
                return null;
            let r = e.split("")
              , a = RegExp((function(e) {
                if ("string" != typeof e)
                    throw TypeError("Expected a string");
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }
            )(t.trim()).replaceAll(/\s+/g, "|"), "ig")
              , i = 0
              , o = [];
            for (; n = a.exec(e); )
                if (n.index === a.lastIndex)
                    a.lastIndex++;
                else {
                    let e = r.splice(0, n.index - i).join("")
                      , t = r.splice(0, a.lastIndex - n.index).join("");
                    o.push(e, (0,
                    J.jsx)("span", {
                        className: "nx-text-primary-600",
                        children: t
                    }, n.index)),
                    i = a.lastIndex
                }
            return (0,
            J.jsxs)(J.Fragment, {
                children: [o, r.join("")]
            })
        })
          , sl = (0,
        H.forwardRef)( (e, t) => {
            var {className: n, suffix: r} = e
              , a = oW(e, ["className", "suffix"]);
            return (0,
            J.jsxs)("div", {
                className: "nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300",
                children: [(0,
                J.jsx)("input", oZ({
                    ref: t,
                    spellCheck: !1,
                    className: B(n, "nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors", "nx-text-base nx-leading-tight md:nx-text-sm", "nx-bg-black/[.05] dark:nx-bg-gray-50/10", "focus:nx-bg-white dark:focus:nx-bg-dark", "placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400", "contrast-more:nx-border contrast-more:nx-border-current")
                }, a)), r]
            })
        }
        );
        sl.displayName = "Input";
        var su = ["input", "select", "button", "textarea"];
        function sc({className: e, overlayClassName: t, value: n, onChange: r, onActive: a, loading: i, error: o, results: s}) {
            let[l,u] = (0,
            H.useState)(!1)
              , c = o5()
              , [d,f] = (0,
            H.useState)(0)
              , h = (0,
            z.useRouter)()
              , {setMenu: p} = o1()
              , m = (0,
            H.useRef)(null)
              , x = (0,
            H.useRef)(null)
              , [g,v] = (0,
            H.useState)(!1)
              , [y,b] = (0,
            H.useState)(!0);
            (0,
            H.useEffect)( () => {
                f(0)
            }
            , [n]),
            (0,
            H.useEffect)( () => {
                let e = e => {
                    let t = document.activeElement
                      , n = null == t ? void 0 : t.tagName.toLowerCase();
                    !m.current || !n || su.includes(n) || null != t && t.isContentEditable || ("/" === e.key || "k" === e.key && (e.metaKey || e.ctrlKey) ? (e.preventDefault(),
                    m.current.focus({
                        preventScroll: !0
                    })) : "Escape" === e.key && (u(!1),
                    m.current.blur()))
                }
                ;
                return window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            , []);
            let w = (0,
            H.useCallback)( () => {
                var e;
                null == (e = m.current) || e.blur(),
                r(""),
                u(!1),
                p(!1)
            }
            , [r, p])
              , k = (0,
            H.useCallback)(e => {
                let {index: t} = e.currentTarget.dataset;
                f(Number(t))
            }
            , [])
              , _ = (0,
            H.useCallback)(function(e) {
                var t, n, r;
                switch (e.key) {
                case "ArrowDown":
                    if (d + 1 < s.length) {
                        let n = null == (t = x.current) ? void 0 : t.querySelector(`li:nth-of-type(${d + 2}) > a`);
                        n && (e.preventDefault(),
                        k({
                            currentTarget: n
                        }),
                        n.focus())
                    }
                    break;
                case "ArrowUp":
                    if (d - 1 >= 0) {
                        let t = null == (n = x.current) ? void 0 : n.querySelector(`li:nth-of-type(${d}) > a`);
                        t && (e.preventDefault(),
                        k({
                            currentTarget: t
                        }),
                        t.focus())
                    }
                    break;
                case "Enter":
                    {
                        let e = s[d];
                        e && y && (h.push(e.route),
                        w());
                        break
                    }
                case "Escape":
                    u(!1),
                    null == (r = m.current) || r.blur()
                }
            }, [d, s, h, w, k, y])
              , j = V()
              , E = l && !!n
              , O = (0,
            J.jsx)(aU, {
                show: j && (!l || !!n),
                as: H.Fragment,
                enter: "nx-transition-opacity",
                enterFrom: "nx-opacity-0",
                enterTo: "nx-opacity-100",
                leave: "nx-transition-opacity",
                leaveFrom: "nx-opacity-100",
                leaveTo: "nx-opacity-0",
                children: (0,
                J.jsx)("kbd", {
                    className: B("nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5", "nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500", "nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50", "contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current", "nx-items-center nx-gap-1 nx-transition-opacity", n ? "nx-z-20 nx-flex nx-cursor-pointer hover:nx-opacity-70" : "nx-pointer-events-none nx-hidden sm:nx-flex"),
                    title: n ? "Clear" : void 0,
                    onClick: () => {
                        r("")
                    }
                    ,
                    children: n && g ? "ESC" : j && (navigator.userAgent.includes("Macintosh") ? (0,
                    J.jsxs)(J.Fragment, {
                        children: [(0,
                        J.jsx)("span", {
                            className: "nx-text-xs",
                            children: "⌘"
                        }), "K"]
                    }) : "CTRL K")
                })
            })
              , C = (0,
            H.useCallback)(e => {
                b("compositionend" === e.type)
            }
            , []);
            return (0,
            J.jsxs)("div", {
                className: B("nextra-search nx-relative md:nx-w-64", e),
                children: [E && (0,
                J.jsx)("div", {
                    className: "nx-fixed nx-inset-0 nx-z-10",
                    onClick: () => u(!1)
                }), (0,
                J.jsx)(sl, {
                    ref: m,
                    value: n,
                    onChange: e => {
                        let {value: t} = e.target;
                        r(t),
                        u(!!t)
                    }
                    ,
                    onFocus: () => {
                        null == a || a(!0),
                        v(!0)
                    }
                    ,
                    onBlur: () => {
                        v(!1)
                    }
                    ,
                    onCompositionStart: C,
                    onCompositionEnd: C,
                    type: "search",
                    placeholder: sr(c.search.placeholder),
                    onKeyDown: _,
                    suffix: O
                }), (0,
                J.jsx)(aU, {
                    show: E,
                    as: aU.Child,
                    leave: "nx-transition-opacity nx-duration-100",
                    leaveFrom: "nx-opacity-100",
                    leaveTo: "nx-opacity-0",
                    children: (0,
                    J.jsx)("ul", {
                        className: B("nextra-scrollbar", "nx-border nx-border-gray-200 nx-bg-white nx-text-gray-100 dark:nx-border-neutral-800 dark:nx-bg-neutral-900", "nx-absolute nx-top-full nx-z-20 nx-mt-2 nx-overflow-auto nx-overscroll-contain nx-rounded-xl nx-py-2.5 nx-shadow-xl", "nx-max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)]", "md:nx-max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)]", "nx-inset-x-0 ltr:md:nx-left-auto rtl:md:nx-right-auto", "contrast-more:nx-border contrast-more:nx-border-gray-900 contrast-more:dark:nx-border-gray-50", t),
                        ref: x,
                        style: {
                            transition: "max-height .2s ease"
                        },
                        children: o ? (0,
                        J.jsxs)("span", {
                            className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-red-500",
                            children: [(0,
                            J.jsx)(er, {
                                className: "nx-h-5 nx-w-5"
                            }), sr(c.search.error)]
                        }) : i ? (0,
                        J.jsxs)("span", {
                            className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-gray-400",
                            children: [(0,
                            J.jsx)(eo, {
                                className: "nx-h-5 nx-w-5 nx-animate-spin"
                            }), sn(c.search.loading)]
                        }) : s.length > 0 ? s.map( ({route: e, prefix: t, children: n, id: r}, a) => (0,
                        J.jsxs)(H.Fragment, {
                            children: [t, (0,
                            J.jsx)("li", {
                                className: B("nx-mx-2.5 nx-break-words nx-rounded-md", "contrast-more:nx-border", a === d ? "nx-bg-primary-500/10 nx-text-primary-600 contrast-more:nx-border-primary-500" : "nx-text-gray-800 contrast-more:nx-border-transparent dark:nx-text-gray-300"),
                                children: (0,
                                J.jsx)(se, {
                                    className: "nx-block nx-scroll-m-12 nx-px-2.5 nx-py-2",
                                    href: e,
                                    "data-index": a,
                                    onFocus: k,
                                    onMouseMove: k,
                                    onClick: w,
                                    onKeyDown: _,
                                    children: n
                                })
                            })]
                        }, r)) : sn(c.search.emptyResult)
                    })
                })]
            })
        }
        var sd = {}
          , sf = new Map
          , sh = (e, t) => {
            let n = e + "@" + t;
            if (sf.has(n))
                return sf.get(n);
            let r = sp(e, t);
            return sf.set(n, r),
            r
        }
          , sp = (e, t) => oz(void 0, null, function*() {
            let n = yield fetch(`${e}/_next/static/chunks/nextra-data-${t}.json`)
              , r = yield n.json()
              , a = new rV({
                cache: 100,
                tokenize: "full",
                document: {
                    id: "id",
                    index: "content",
                    store: ["title"]
                },
                context: {
                    resolution: 9,
                    depth: 2,
                    bidirectional: !0
                }
            })
              , i = new rV({
                cache: 100,
                tokenize: "full",
                document: {
                    id: "id",
                    index: "content",
                    tag: "pageId",
                    store: ["title", "content", "url", "display"]
                },
                context: {
                    resolution: 9,
                    depth: 2,
                    bidirectional: !0
                }
            })
              , o = 0;
            for (let[e,t] of Object.entries(r)) {
                let n = "";
                for (let[r,a] of (++o,
                Object.entries(t.data))) {
                    let[s,l] = r.split("#")
                      , u = e + (s ? "#" + s : "")
                      , c = l || t.title
                      , d = a.split("\n");
                    i.add(oZ({
                        id: u,
                        url: u,
                        title: c,
                        pageId: `page_${o}`,
                        content: c
                    }, d[0] && {
                        display: d[0]
                    }));
                    for (let e = 0; e < d.length; e++)
                        i.add({
                            id: `${u}_${e}`,
                            url: u,
                            title: c,
                            pageId: `page_${o}`,
                            content: d[e]
                        });
                    n += ` ${c} ${a}`
                }
                a.add({
                    id: o,
                    title: t.title,
                    content: n
                })
            }
            sd[t] = [a, i]
        });
        function sm({className: e}) {
            let {locale: t=sW, basePath: n} = (0,
            z.useRouter)()
              , [r,a] = (0,
            H.useState)(!1)
              , [i,o] = (0,
            H.useState)(!1)
              , [s,l] = (0,
            H.useState)([])
              , [u,c] = (0,
            H.useState)("")
              , d = e => {
                var n, r;
                if (!e)
                    return;
                let[a,i] = sd[t]
                  , o = (null == (n = a.search(e, 5, {
                    enrich: !0,
                    suggest: !0
                })[0]) ? void 0 : n.result) || []
                  , s = []
                  , u = {};
                for (let t = 0; t < o.length; t++) {
                    let n = o[t];
                    u[t] = 0;
                    let a = (null == (r = i.search(e, 5, {
                        enrich: !0,
                        suggest: !0,
                        tag: `page_${n.id}`
                    })[0]) ? void 0 : r.result) || []
                      , l = !0
                      , c = {};
                    for (let r = 0; r < a.length; r++) {
                        let {doc: i} = a[r];
                        void 0 !== i.display && u[t]++;
                        let {url: o, title: d} = i
                          , f = i.display || i.content;
                        c[o + "@" + f] || (c[o + "@" + f] = !0,
                        s.push({
                            _page_rk: t,
                            _section_rk: r,
                            route: o,
                            prefix: l && (0,
                            J.jsx)("div", {
                                className: B("nx-mx-2.5 nx-mb-2 nx-mt-6 nx-select-none nx-border-b nx-border-black/10 nx-px-2.5 nx-pb-1.5 nx-text-xs nx-font-semibold nx-uppercase nx-text-gray-500 first:nx-mt-0 dark:nx-border-white/20 dark:nx-text-gray-300", "contrast-more:nx-border-gray-600 contrast-more:nx-text-gray-900 contrast-more:dark:nx-border-gray-50 contrast-more:dark:nx-text-gray-50"),
                                children: n.doc.title
                            }),
                            children: (0,
                            J.jsxs)(J.Fragment, {
                                children: [(0,
                                J.jsx)("div", {
                                    className: "nx-text-base nx-font-semibold nx-leading-5",
                                    children: (0,
                                    J.jsx)(ss, {
                                        match: e,
                                        value: d
                                    })
                                }), f && (0,
                                J.jsx)("div", {
                                    className: "excerpt nx-mt-1 nx-text-sm nx-leading-[1.35rem] nx-text-gray-600 dark:nx-text-gray-400 contrast-more:dark:nx-text-gray-50",
                                    children: (0,
                                    J.jsx)(ss, {
                                        match: e,
                                        value: f
                                    })
                                })]
                            })
                        }),
                        l = !1)
                    }
                }
                l(s.sort( (e, t) => e._page_rk === t._page_rk ? e._section_rk - t._section_rk : u[e._page_rk] !== u[t._page_rk] ? u[t._page_rk] - u[e._page_rk] : e._page_rk - t._page_rk).map(e => ({
                    id: `${e._page_rk}_${e._section_rk}`,
                    route: e.route,
                    prefix: e.prefix,
                    children: e.children
                })))
            }
              , f = (0,
            H.useCallback)(e => oz(this, null, function*() {
                if (e && !sd[t]) {
                    a(!0);
                    try {
                        yield sh(n, t)
                    } catch (e) {
                        o(!0)
                    }
                    a(!1)
                }
            }), [t, n]);
            return (0,
            J.jsx)(sc, {
                loading: r,
                error: i,
                value: u,
                onChange: e => oz(this, null, function*() {
                    if (c(e),
                    !r) {
                        if (!sd[t]) {
                            a(!0);
                            try {
                                yield sh(n, t)
                            } catch (e) {
                                o(!0)
                            }
                            a(!1)
                        }
                        d(e)
                    }
                }),
                onActive: f,
                className: e,
                overlayClassName: "nx-w-screen nx-min-h-[100px] nx-max-w-[min(calc(100vw-2rem),calc(100%+20rem))]",
                results: s
            })
        }
        function sx({options: e, selected: t, onChange: n, title: r, className: a}) {
            let[i,o] = function(e) {
                let t = (0,
                H.useRef)(null)
                  , n = (0,
                H.useRef)(null)
                  , r = (0,
                H.useRef)()
                  , a = (0,
                H.useCallback)( () => {
                    var a;
                    t.current && n.current && (null == (a = r.current) || a.call(r),
                    r.current = rd(t.current, n.current, e).destroy)
                }
                , [t, n, r, e]);
                return (0,
                H.useMemo)( () => [e => {
                    t.current = e,
                    a()
                }
                , e => {
                    n.current = e,
                    a()
                }
                ], [t, n, a])
            }({
                strategy: "fixed",
                placement: "top-start",
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: [0, 10]
                    }
                }, {
                    name: "sameWidth",
                    enabled: !0,
                    fn({state: e}) {
                        e.styles.popper.minWidth = `${e.rects.reference.width}px`
                    },
                    phase: "beforeWrite",
                    requires: ["computeStyles"]
                }]
            });
            return (0,
            J.jsx)(ij, {
                value: t,
                onChange: n,
                children: ({open: n}) => (0,
                J.jsxs)(ij.Button, {
                    ref: i,
                    title: r,
                    className: B("nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400", n ? "nx-bg-gray-200 nx-text-gray-900 dark:nx-bg-primary-100/10 dark:nx-text-gray-50" : "hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50", a),
                    children: [t.name, (0,
                    J.jsx)(sg, {
                        children: (0,
                        J.jsx)(aU, {
                            ref: o,
                            show: n,
                            as: ij.Options,
                            className: "nx-z-20 nx-max-h-64 nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
                            leave: "nx-transition-opacity",
                            leaveFrom: "nx-opacity-100",
                            leaveTo: "nx-opacity-0",
                            children: e.map(e => (0,
                            J.jsxs)(ij.Option, {
                                value: e,
                                className: ({active: e}) => B(e ? "nx-bg-primary-50 nx-text-primary-600 dark:nx-bg-primary-500/10" : "nx-text-gray-800 dark:nx-text-gray-100", "nx-relative nx-cursor-pointer nx-whitespace-nowrap nx-py-1.5", "nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"),
                                children: [e.name, e.key === t.key && (0,
                                J.jsx)("span", {
                                    className: "nx-absolute nx-inset-y-0 nx-flex nx-items-center ltr:nx-right-3 rtl:nx-left-3",
                                    children: (0,
                                    J.jsx)(X, {})
                                })]
                            }, e.key))
                        })
                    })]
                })
            })
        }
        function sg(e) {
            return V() ? (0,
            iE.createPortal)(e.children, document.body) : null
        }
        function sv({lite: e, className: t}) {
            let n = o5()
              , {locale: r, asPath: a} = (0,
            z.useRouter)()
              , i = n.i18n;
            if (!i.length)
                return null;
            let o = i.find(e => r === e.locale);
            return (0,
            J.jsx)(sx, {
                title: "Change language",
                className: t,
                onChange: e => {
                    let t = new Date(Date.now() + 31536e6);
                    document.cookie = `NEXT_LOCALE=${e.key}; expires=${t.toUTCString()}; path=/`,
                    location.href = (0,
                    aW.addBasePath)(a)
                }
                ,
                selected: {
                    key: (null == o ? void 0 : o.locale) || "",
                    name: (0,
                    J.jsxs)("span", {
                        className: "nx-flex nx-items-center nx-gap-2",
                        children: [(0,
                        J.jsx)(en, {}), (0,
                        J.jsx)("span", {
                            className: e ? "nx-hidden" : "",
                            children: null == o ? void 0 : o.text
                        })]
                    })
                },
                options: i.map(e => ({
                    key: e.locale,
                    name: e.text
                }))
            })
        }
        function sy() {
            var e;
            let t = o5()
              , {resolvedTheme: n} = nn()
              , r = V()
              , a = "function" == typeof t.head ? t.head({}) : t.head
              , {primaryHue: i, primarySaturation: o} = t
              , {dark: s, light: l} = "number" == typeof i ? {
                dark: i,
                light: i
            } : i
              , {dark: u, light: c} = "number" == typeof o ? {
                dark: o,
                light: o
            } : o
              , d = t.frontMatter;
            return (0,
            J.jsxs)(J.Fragment, {
                children: [(0,
                J.jsx)(iM, oZ({
                    title: t.title,
                    description: d.description,
                    canonical: d.canonical,
                    openGraph: d.openGraph
                }, null == (e = t.useNextSeoProps) ? void 0 : e.call(t))), (0,
                J.jsxs)(iC(), {
                    children: [t.faviconGlyph ? (0,
                    J.jsx)("link", {
                        rel: "icon",
                        href: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${t.faviconGlyph}</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`
                    }) : null, r ? (0,
                    J.jsx)("meta", {
                        name: "theme-color",
                        content: "dark" === n ? "#111" : "#fff"
                    }) : (0,
                    J.jsxs)(J.Fragment, {
                        children: [(0,
                        J.jsx)("meta", {
                            name: "theme-color",
                            content: "#fff",
                            media: "(prefers-color-scheme: light)"
                        }), (0,
                        J.jsx)("meta", {
                            name: "theme-color",
                            content: "#111",
                            media: "(prefers-color-scheme: dark)"
                        })]
                    }), (0,
                    J.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
                    }), (0,
                    J.jsx)("style", {
                        children: `
        :root {
          --nextra-primary-hue: ${l}deg;
          --nextra-primary-saturation: ${c}%;
          --nextra-navbar-height: 4rem;
          --nextra-menu-height: 3.75rem;
          --nextra-banner-height: 2.5rem;
        }
        
        .dark {
          --nextra-primary-hue: ${s}deg;
          --nextra-primary-saturation: ${u}%;
        }
      `
                    }), a]
                })]
            })
        }
        var sb = {
            link: B("nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-text-gray-600 nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 dark:nx-text-gray-300 md:nx-text-lg"),
            icon: B("nx-inline nx-h-5 nx-shrink-0")
        }
          , sw = ({flatDirectories: e, currentIndex: t}) => {
            let n = o5().navigation
              , r = "boolean" == typeof n ? {
                prev: n,
                next: n
            } : n
              , a = r.prev && e[t - 1]
              , i = r.next && e[t + 1];
            return (a && !a.isUnderCurrentDocsTree && (a = !1),
            i && !i.isUnderCurrentDocsTree && (i = !1),
            a || i) ? (0,
            J.jsxs)("div", {
                className: B("nx-mb-8 nx-flex nx-items-center nx-border-t nx-pt-8 dark:nx-border-neutral-800", "contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400", "print:nx-hidden"),
                children: [a && (0,
                J.jsxs)(se, {
                    href: a.route,
                    title: a.title,
                    className: B(sb.link, "ltr:nx-pr-4 rtl:nx-pl-4"),
                    children: [(0,
                    J.jsx)(Y, {
                        className: B(sb.icon, "ltr:nx-rotate-180")
                    }), a.title]
                }), i && (0,
                J.jsxs)(se, {
                    href: i.route,
                    title: i.title,
                    className: B(sb.link, "ltr:nx-ml-auto ltr:nx-pl-4 ltr:nx-text-right rtl:nx-mr-auto rtl:nx-pr-4 rtl:nx-text-left"),
                    children: [i.title, (0,
                    J.jsx)(Y, {
                        className: B(sb.icon, "rtl:nx-rotate-180")
                    })]
                })]
            }) : null
        }
          , sk = {
            link: B("nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100"),
            active: B("nx-font-medium nx-subpixel-antialiased"),
            inactive: B("nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200")
        };
        function s_({className: e, menu: t, children: n}) {
            let {items: r} = t
              , a = Object.fromEntries((t.children || []).map(e => [e.name, e]));
            return (0,
            J.jsx)("div", {
                className: "nx-relative nx-inline-block",
                children: (0,
                J.jsxs)(iq, {
                    children: [(0,
                    J.jsx)(iq.Button, {
                        className: B(e, "-nx-ml-2 nx-hidden nx-items-center nx-whitespace-nowrap nx-rounded nx-p-2 md:nx-inline-flex", sk.inactive),
                        children: n
                    }), (0,
                    J.jsx)(aU, {
                        leave: "nx-transition-opacity",
                        leaveFrom: "nx-opacity-100",
                        leaveTo: "nx-opacity-0",
                        children: (0,
                        J.jsx)(iq.Items, {
                            className: "nx-absolute nx-right-0 nx-z-20 nx-mt-1 nx-max-h-64 nx-min-w-full nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
                            children: Object.entries(r || {}).map( ([e,n]) => {
                                var r;
                                return (0,
                                J.jsx)(iq.Item, {
                                    children: (0,
                                    J.jsx)(se, {
                                        href: n.href || (null == (r = a[e]) ? void 0 : r.route) || t.route + "/" + e,
                                        className: B("nx-relative nx-hidden nx-w-full nx-select-none nx-whitespace-nowrap nx-text-gray-600 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 md:nx-inline-block", "nx-py-1.5 nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"),
                                        newWindow: n.newWindow,
                                        children: n.title || e
                                    })
                                }, e)
                            }
                            )
                        })
                    })]
                })
            })
        }
        var sj = Object.create(null)
          , sE = (0,
        H.createContext)(null)
          , sO = (0,
        H.createContext)(null)
          , sC = (0,
        H.createContext)(0)
          , sT = (0,
        H.memo)(function(e) {
            let t = (0,
            H.useContext)(sC);
            return (0,
            J.jsx)(sC.Provider, {
                value: t + 1,
                children: (0,
                J.jsx)(sN, oZ({}, e))
            })
        })
          , sS = {
            link: B("nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word]", "nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border"),
            inactive: B("nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900", "dark:nx-text-neutral-400 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50", "contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50", "contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"),
            active: B("nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600", "contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"),
            list: B("nx-flex nx-flex-col nx-gap-1"),
            border: B("nx-relative before:nx-absolute before:nx-inset-y-1", 'before:nx-w-px before:nx-bg-gray-200 before:nx-content-[""] dark:before:nx-bg-neutral-800', "ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0")
        };
        function sN({item: e, anchors: t}) {
            let[n] = K().split("#")
              , r = [n, n + "/"].includes(e.route + "/")
              , a = r || n.startsWith(e.route + "/")
              , i = (0,
            H.useContext)(sE)
              , o = !!(null == i ? void 0 : i.startsWith(e.route + "/"))
              , s = (0,
            H.useContext)(sC)
              , {setMenu: l} = o1()
              , u = o5()
              , {theme: c} = e
              , d = void 0 === sj[e.route] ? r || a || o || (c && "collapsed"in c ? !c.collapsed : s < u.sidebar.defaultMenuCollapseLevel) : sj[e.route] || o
              , f = (0,
            H.useState)({})[1];
            if ((0,
            H.useEffect)( () => {
                u.sidebar.autoCollapse ? a && o ? sj[e.route] = !0 : delete sj[e.route] : (a || o) && (sj[e.route] = !0)
            }
            , [a, o, e.route, u.sidebar.autoCollapse]),
            "menu" === e.type) {
                let t = Object.fromEntries((e.children || []).map(e => [e.name, e]));
                e.children = Object.entries(e.items || {}).map( ([n,r]) => {
                    let a = t[n] || oU(oZ({
                        name: n
                    }, "locale"in e && {
                        locale: e.locale
                    }), {
                        route: e.route + "/" + n
                    });
                    return oZ(oZ({}, a), r)
                }
                )
            }
            let h = "withIndexPage"in e && e.withIndexPage
              , p = h ? se : "button";
            return (0,
            J.jsxs)("li", {
                className: B({
                    open: d,
                    active: r
                }),
                children: [(0,
                J.jsxs)(p, {
                    href: h ? e.route : void 0,
                    className: B("nx-items-center nx-justify-between nx-gap-2", !h && "nx-text-left nx-w-full", sS.link, r ? sS.active : sS.inactive),
                    onClick: t => {
                        let n = ["svg", "path"].includes(t.target.tagName.toLowerCase());
                        if (n && t.preventDefault(),
                        h) {
                            r || n ? sj[e.route] = !d : (sj[e.route] = !0,
                            l(!1)),
                            f({});
                            return
                        }
                        r || (sj[e.route] = !d,
                        f({}))
                    }
                    ,
                    children: [sn(u.sidebar.titleComponent, {
                        title: e.title,
                        type: e.type,
                        route: e.route
                    }), (0,
                    J.jsx)(Y, {
                        className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5",
                        pathClassName: B("nx-origin-center nx-transition-transform rtl:-nx-rotate-180", d && "ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]")
                    })]
                }), (0,
                J.jsx)(so, {
                    className: "ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1",
                    isOpen: d,
                    children: Array.isArray(e.children) ? (0,
                    J.jsx)(sA, {
                        className: B(sS.border, "ltr:nx-ml-3 rtl:nx-mr-3"),
                        directories: e.children,
                        base: e.route,
                        anchors: t
                    }) : null
                })]
            })
        }
        function sI({title: e}) {
            let t = o5();
            return (0,
            J.jsx)("li", {
                className: B("[word-break:break-word]", e ? "nx-mt-5 nx-mb-2 nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold nx-text-gray-900 first:nx-mt-0 dark:nx-text-gray-100" : "nx-my-4"),
                children: e ? sn(t.sidebar.titleComponent, {
                    title: e,
                    type: "separator",
                    route: ""
                }) : (0,
                J.jsx)("hr", {
                    className: "nx-mx-2 nx-border-t nx-border-gray-200 dark:nx-border-primary-100/10"
                })
            })
        }
        function sR({item: e, anchors: t}) {
            let n = K()
              , r = (0,
            H.useContext)(sO)
              , a = e.route && [n, n + "/"].includes(e.route + "/")
              , i = oK()
              , {setMenu: o} = o1()
              , s = o5();
            return "separator" === e.type ? (0,
            J.jsx)(sI, {
                title: e.title
            }) : (0,
            J.jsxs)("li", {
                className: B(sS.list, {
                    active: a
                }),
                children: [(0,
                J.jsx)(se, {
                    href: e.href || e.route,
                    newWindow: e.newWindow,
                    className: B(sS.link, a ? sS.active : sS.inactive),
                    onClick: () => {
                        o(!1)
                    }
                    ,
                    onFocus: () => {
                        null == r || r(e.route)
                    }
                    ,
                    onBlur: () => {
                        null == r || r(null)
                    }
                    ,
                    children: sn(s.sidebar.titleComponent, {
                        title: e.title,
                        type: e.type,
                        route: e.route
                    })
                }), a && t.length > 0 && (0,
                J.jsx)("ul", {
                    className: B(sS.list, sS.border, "ltr:nx-ml-3 rtl:nx-mr-3"),
                    children: t.map( ({id: e, value: t}) => {
                        var n;
                        return (0,
                        J.jsx)("li", {
                            children: (0,
                            J.jsx)("a", {
                                href: `#${e}`,
                                className: B(sS.link, 'nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-["#"]', (null == (n = i[e]) ? void 0 : n.isActive) ? sS.active : sS.inactive),
                                onClick: () => {
                                    o(!1)
                                }
                                ,
                                children: t
                            })
                        }, e)
                    }
                    )
                })]
            })
        }
        function sA({directories: e, anchors: t, className: n, onlyCurrentDocs: r}) {
            return (0,
            J.jsx)("ul", {
                className: B(sS.list, n),
                children: e.map(e => !r || e.isUnderCurrentDocsTree ? "menu" === e.type || e.children && (e.children.length || !e.withIndexPage) ? (0,
                J.jsx)(sT, {
                    item: e,
                    anchors: t
                }, e.name) : (0,
                J.jsx)(sR, {
                    item: e,
                    anchors: t
                }, e.name) : null)
            })
        }
        function sP({docsDirectories: e, flatDirectories: t, fullDirectories: n, asPopover: r=!1, headings: a, includePlaceholder: i}) {
            let o = o5()
              , {menu: s, setMenu: l} = o1()
              , u = (0,
            z.useRouter)()
              , [c,d] = (0,
            H.useState)(null)
              , [f,h] = (0,
            H.useState)(!0)
              , [p,m] = (0,
            H.useState)(!1)
              , x = (0,
            H.useMemo)( () => a.filter(e => 2 === e.depth), [a])
              , g = (0,
            H.useRef)(null)
              , v = (0,
            H.useRef)(null)
              , y = V();
            (0,
            H.useEffect)( () => {
                s ? document.body.classList.add("nx-overflow-hidden", "md:nx-overflow-auto") : document.body.classList.remove("nx-overflow-hidden", "md:nx-overflow-auto")
            }
            , [s]),
            (0,
            H.useEffect)( () => {
                var e;
                let t = null == (e = g.current) ? void 0 : e.querySelector("li.active");
                if (t && (window.innerWidth > 767 || s)) {
                    let e = () => {
                        i2(t, {
                            block: "center",
                            inline: "center",
                            scrollMode: "always",
                            boundary: v.current
                        })
                    }
                    ;
                    s ? setTimeout(e, 300) : e()
                }
            }
            , [s]),
            (0,
            H.useEffect)( () => {
                l(!1)
            }
            , [u.asPath, l]);
            let b = o.i18n.length > 0
              , w = o.darkMode || b || o.sidebar.toggleButton;
            return (0,
            J.jsxs)(J.Fragment, {
                children: [i && r ? (0,
                J.jsx)("div", {
                    className: "max-xl:nx-hidden nx-h-0 nx-w-64 nx-shrink-0"
                }) : null, (0,
                J.jsx)("div", {
                    className: B("motion-reduce:nx-transition-none [transition:background-color_1.5s_ease]", s ? "nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60" : "nx-bg-transparent"),
                    onClick: () => l(!1)
                }), (0,
                J.jsxs)("aside", {
                    className: B("nextra-sidebar-container nx-flex nx-flex-col", "md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none", "nx-transform-gpu nx-transition-all nx-ease-in-out", "print:nx-hidden", f ? "md:nx-w-64" : "md:nx-w-20", r ? "md:nx-hidden" : "md:nx-sticky md:nx-self-start", s ? "max-md:[transform:translate3d(0,0,0)]" : "max-md:[transform:translate3d(0,-100%,0)]"),
                    ref: v,
                    children: [(0,
                    J.jsx)("div", {
                        className: "nx-px-4 nx-pt-4 md:nx-hidden",
                        children: sn(o.search.component, {
                            directories: t
                        })
                    }), (0,
                    J.jsx)(sE.Provider, {
                        value: c,
                        children: (0,
                        J.jsx)(sO.Provider, {
                            value: e => {
                                d(e)
                            }
                            ,
                            children: (0,
                            J.jsxs)("div", {
                                className: B("nx-overflow-y-auto nx-overflow-x-hidden", "nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))]", f ? "nextra-scrollbar" : "no-scrollbar"),
                                ref: g,
                                children: [(!r || !f) && (0,
                                J.jsx)(so, {
                                    isOpen: f,
                                    horizontal: !0,
                                    children: (0,
                                    J.jsx)(sA, {
                                        className: "nextra-menu-desktop max-md:nx-hidden",
                                        directories: e,
                                        anchors: o.toc.float ? [] : x,
                                        onlyCurrentDocs: !0
                                    })
                                }), y && window.innerWidth < 768 && (0,
                                J.jsx)(sA, {
                                    className: "nextra-menu-mobile md:nx-hidden",
                                    directories: n,
                                    anchors: x
                                })]
                            })
                        })
                    }), w && (0,
                    J.jsxs)("div", {
                        className: B("nx-sticky nx-bottom-0", "nx-bg-white dark:nx-bg-dark", "nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff]", "nx-flex nx-items-center nx-gap-2", "dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111]", "contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none", f ? B(b && "nx-justify-end", "nx-border-t") : "nx-py-4 nx-flex-wrap nx-justify-center"),
                        "data-toggle-animation": p ? f ? "show" : "hide" : "off",
                        children: [(0,
                        J.jsx)(sv, {
                            lite: !f,
                            className: B(f ? "nx-grow" : "max-md:nx-grow")
                        }), o.darkMode && (0,
                        J.jsx)("div", {
                            className: f && !b ? "nx-grow nx-flex nx-flex-col" : "",
                            children: sn(o.themeSwitch.component, {
                                lite: !f || b
                            })
                        }), o.sidebar.toggleButton && (0,
                        J.jsx)("button", {
                            title: f ? "Hide sidebar" : "Show sidebar",
                            className: "max-md:nx-hidden nx-h-7 nx-rounded-md nx-transition-colors nx-text-gray-600 dark:nx-text-gray-400 nx-px-2 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
                            onClick: () => {
                                h(!f),
                                m(!0)
                            }
                            ,
                            children: (0,
                            J.jsx)(et, {
                                isOpen: f
                            })
                        })]
                    })]
                })]
            })
        }
        var sL = "reach-skip-nav";
        (0,
        H.forwardRef)(function(e, t) {
            var {className: n, id: r, label: a="Skip to content", styled: i} = e
              , o = oW(e, ["className", "id", "label", "styled"]);
            let s = void 0 === n ? i ? B("nx-sr-only", "focus:nx-not-sr-only focus:nx-fixed focus:nx-z-50 focus:nx-m-3 focus:nx-ml-4 focus:nx-h-[calc(var(--nextra-navbar-height)-1.5rem)] focus:nx-rounded-lg focus:nx-border focus:nx-px-3 focus:nx-py-2 focus:nx-align-middle focus:nx-text-sm focus:nx-font-bold", "focus:nx-text-gray-900 focus:dark:nx-text-gray-100", "focus:nx-bg-white focus:dark:nx-bg-neutral-900", "focus:nx-border-neutral-400 focus:dark:nx-border-neutral-800") : "" : n;
            return (0,
            J.jsx)("a", oU(oZ({}, o), {
                ref: t,
                href: `#${r || sL}`,
                className: s,
                "data-reach-skip-link": "",
                children: a
            }))
        }).displayName = "SkipNavLink";
        var sM = (0,
        H.forwardRef)(function(e, t) {
            var {id: n} = e
              , r = oW(e, ["id"]);
            return (0,
            J.jsx)("div", oU(oZ({}, r), {
                ref: t,
                id: n || sL
            }))
        });
        sM.displayName = "SkipNavContent";
        var sD = t5.strictObject({
            light: t5.string(),
            dark: t5.string(),
            system: t5.string()
        });
        function sF() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        function s$({className: e}) {
            let t = (0,
            H.useRef)(null);
            return (0,
            H.useEffect)( () => {
                function e() {
                    var e;
                    let {scrollTop: n} = document.documentElement;
                    null == (e = t.current) || e.classList.toggle("nx-opacity-0", n < 300)
                }
                return window.addEventListener("scroll", e),
                () => {
                    window.removeEventListener("scroll", e)
                }
            }
            , []),
            (0,
            J.jsxs)("button", {
                ref: t,
                "aria-hidden": "true",
                onClick: sF,
                className: B("nx-flex nx-items-center nx-gap-1.5 nx-transition nx-opacity-0", e),
                children: ["Scroll to top", (0,
                J.jsx)(Y, {
                    className: "-nx-rotate-90 nx-w-3.5 nx-h-3.5 nx-border nx-rounded-full nx-border-current"
                })]
            })
        }
        var sZ = B("nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100", "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50");
        function sU({className: e, directories: t}) {
            let[n,r] = (0,
            H.useState)("")
              , a = (0,
            H.useMemo)( () => n ? i6(t, n, {
                keys: ["title"]
            }).map( ({route: e, title: t}) => ({
                id: e + t,
                route: e,
                children: (0,
                J.jsx)(ss, {
                    value: t,
                    match: n
                })
            })) : [], [n, t]);
            return (0,
            J.jsx)(sc, {
                value: n,
                onChange: r,
                className: e,
                overlayClassName: "nx-w-full",
                results: a
            })
        }
        var sW = "en-US"
          , sz = "undefined" != typeof window;
        function sH(e) {
            return "function" == typeof e
        }
        var sG = t5.array(t5.strictObject({
            direction: t5.enum(["ltr", "rtl"]).optional(),
            locale: t5.string(),
            text: t5.string()
        }))
          , sB = [function(e) {
            return null == e || "string" == typeof e || sH(e) || (0,
            H.isValidElement)(e)
        }
        , {
            message: "Must be React.ReactNode or React.FC"
        }]
          , sV = [sH, {
            message: "Must be React.FC"
        }];
        t5.strictObject({
            banner: t5.strictObject({
                dismissible: t5.boolean(),
                key: t5.string(),
                text: t5.custom(...sB).optional()
            }),
            chat: t5.strictObject({
                icon: t5.custom(...sB),
                link: t5.string().startsWith("https://").optional()
            }),
            components: t5.record(t5.custom(...sV)).optional(),
            darkMode: t5.boolean(),
            direction: t5.enum(["ltr", "rtl"]),
            docsRepositoryBase: t5.string().startsWith("https://"),
            editLink: t5.strictObject({
                component: t5.custom(...sV).or(t5.null()),
                text: t5.custom(...sB)
            }),
            faviconGlyph: t5.string().optional(),
            feedback: t5.strictObject({
                content: t5.custom(...sB),
                labels: t5.string(),
                useLink: t5.function().returns(t5.string())
            }),
            footer: t5.strictObject({
                component: t5.custom(...sB),
                text: t5.custom(...sB)
            }),
            gitTimestamp: t5.custom(...sB),
            head: t5.custom(...sB),
            i18n: sG,
            logo: t5.custom(...sB),
            logoLink: t5.boolean().or(t5.string()),
            main: t5.custom(...sV).optional(),
            navbar: t5.strictObject({
                component: t5.custom(...sB),
                extraContent: t5.custom(...sB).optional()
            }),
            navigation: t5.boolean().or(t5.strictObject({
                next: t5.boolean(),
                prev: t5.boolean()
            })),
            nextThemes: t5.strictObject({
                defaultTheme: t5.string(),
                forcedTheme: t5.string().optional(),
                storageKey: t5.string()
            }),
            notFound: t5.strictObject({
                content: t5.custom(...sB),
                labels: t5.string()
            }),
            primaryHue: t5.number().or(t5.strictObject({
                dark: t5.number(),
                light: t5.number()
            })),
            primarySaturation: t5.number().or(t5.strictObject({
                dark: t5.number(),
                light: t5.number()
            })),
            project: t5.strictObject({
                icon: t5.custom(...sB),
                link: t5.string().startsWith("https://").optional()
            }),
            search: t5.strictObject({
                component: t5.custom(...sB),
                emptyResult: t5.custom(...sB),
                error: t5.string().or(t5.function().returns(t5.string())),
                loading: t5.custom(...sB),
                placeholder: t5.string().or(t5.function().returns(t5.string()))
            }),
            serverSideError: t5.strictObject({
                content: t5.custom(...sB),
                labels: t5.string()
            }),
            sidebar: t5.strictObject({
                autoCollapse: t5.boolean().optional(),
                defaultMenuCollapseLevel: t5.number().min(1).int(),
                titleComponent: t5.custom(...sB),
                toggleButton: t5.boolean()
            }),
            themeSwitch: t5.strictObject({
                component: t5.custom(...sB),
                useOptions: sD.or(t5.function().returns(sD))
            }),
            toc: t5.strictObject({
                backToTop: t5.boolean(),
                component: t5.custom(...sB),
                extraContent: t5.custom(...sB),
                float: t5.boolean(),
                headingComponent: t5.custom(...sV).optional(),
                title: t5.custom(...sB)
            }),
            useNextSeoProps: t5.custom(sH)
        }).deepPartial().extend({
            i18n: sG.optional()
        });
        var sq = {
            "en-US": "Loading",
            fr: "Сhargement",
            ru: "Загрузка",
            "zh-CN": "正在加载"
        }
          , sK = {
            "en-US": "Search documentation",
            fr: "Rechercher documents",
            ru: "Поиск документации",
            "zh-CN": "搜索文档"
        }
          , sQ = {
            banner: {
                dismissible: !0,
                key: "nextra-banner"
            },
            chat: {
                icon: (0,
                J.jsxs)(J.Fragment, {
                    children: [(0,
                    J.jsx)(function(e) {
                        return (0,
                        J.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 5 30.67 23.25",
                            ...e,
                            children: [(0,
                            J.jsx)("title", {
                                children: "Discord"
                            }), (0,
                            J.jsx)("path", {
                                d: "M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"
                            })]
                        })
                    }, {}), (0,
                    J.jsx)("span", {
                        className: "nx-sr-only",
                        children: "Discord"
                    })]
                })
            },
            darkMode: !0,
            direction: "ltr",
            docsRepositoryBase: "https://github.com/shuding/nextra",
            editLink: {
                component: function({className: e, filePath: t, children: n}) {
                    let r = function(e="") {
                        let t = o5()
                          , n = ny()(t.docsRepositoryBase || "");
                        if (!n)
                            throw Error("Invalid `docsRepositoryBase` URL!");
                        return `${n.href}/${e}`
                    }(t);
                    return r ? (0,
                    J.jsx)(se, {
                        className: e,
                        href: r,
                        children: n
                    }) : null
                },
                text: "Edit this page"
            },
            feedback: {
                content: "Question? Give us feedback →",
                labels: "feedback",
                useLink() {
                    let e = o5();
                    return st({
                        labels: e.feedback.labels,
                        repository: e.docsRepositoryBase,
                        title: `Feedback for \u201C${e.title}\u201D`
                    })
                }
            },
            footer: {
                component: function({menu: e}) {
                    let t = o5();
                    return (0,
                    J.jsxs)("footer", {
                        className: "nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent",
                        children: [(0,
                        J.jsxs)("div", {
                            className: B("nx-mx-auto nx-flex nx-max-w-[90rem] nx-gap-2 nx-py-2 nx-px-4", e && (t.i18n.length > 0 || t.darkMode) ? "nx-flex" : "nx-hidden"),
                            children: [(0,
                            J.jsx)(sv, {}), t.darkMode && sn(t.themeSwitch.component)]
                        }), (0,
                        J.jsx)("hr", {
                            className: "dark:nx-border-neutral-800"
                        }), (0,
                        J.jsx)("div", {
                            className: B("nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start", "nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"),
                            children: sn(t.footer.text)
                        })]
                    })
                },
                text: `MIT ${new Date().getFullYear()} \xa9 Nextra.`
            },
            gitTimestamp: function({timestamp: e}) {
                let {locale: t=sW} = (0,
                z.useRouter)();
                return (0,
                J.jsxs)(J.Fragment, {
                    children: ["Last updated on", " ", (0,
                    J.jsx)("time", {
                        dateTime: e.toISOString(),
                        children: e.toLocaleDateString(t, {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })
                    })]
                })
            },
            head: (0,
            J.jsxs)(J.Fragment, {
                children: [(0,
                J.jsx)("meta", {
                    name: "msapplication-TileColor",
                    content: "#fff"
                }), (0,
                J.jsx)("meta", {
                    httpEquiv: "Content-Language",
                    content: "en"
                }), (0,
                J.jsx)("meta", {
                    name: "description",
                    content: "Nextra: the next docs builder"
                }), (0,
                J.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), (0,
                J.jsx)("meta", {
                    name: "twitter:site",
                    content: "@shuding_"
                }), (0,
                J.jsx)("meta", {
                    property: "og:title",
                    content: "Nextra: the next docs builder"
                }), (0,
                J.jsx)("meta", {
                    property: "og:description",
                    content: "Nextra: the next docs builder"
                }), (0,
                J.jsx)("meta", {
                    name: "apple-mobile-web-app-title",
                    content: "Nextra"
                })]
            }),
            i18n: [],
            logo: (0,
            J.jsxs)(J.Fragment, {
                children: [(0,
                J.jsx)("span", {
                    className: "nx-font-extrabold",
                    children: "Nextra"
                }), (0,
                J.jsx)("span", {
                    className: "nx-ml-2 nx-hidden nx-font-normal nx-text-gray-600 md:nx-inline",
                    children: "The Next Docs Builder"
                })]
            }),
            logoLink: !0,
            navbar: {
                component: function({flatDirectories: e, items: t}) {
                    let n = o5()
                      , r = K()
                      , {menu: a, setMenu: i} = o1();
                    return (0,
                    J.jsxs)("div", {
                        className: "nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent print:nx-hidden",
                        children: [(0,
                        J.jsx)("div", {
                            className: B("nextra-nav-container-blur", "nx-pointer-events-none nx-absolute nx-z-[-1] nx-h-full nx-w-full nx-bg-white dark:nx-bg-dark", "nx-shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:nx-shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]", "contrast-more:nx-shadow-[0_0_0_1px_#000] contrast-more:dark:nx-shadow-[0_0_0_1px_#fff]")
                        }), (0,
                        J.jsxs)("nav", {
                            className: "nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]",
                            children: [n.logoLink ? (0,
                            J.jsx)(se, {
                                href: "string" == typeof n.logoLink ? n.logoLink : "/",
                                className: "nx-flex nx-items-center hover:nx-opacity-75 ltr:nx-mr-auto rtl:nx-ml-auto",
                                children: sn(n.logo)
                            }) : (0,
                            J.jsx)("div", {
                                className: "nx-flex nx-items-center ltr:nx-mr-auto rtl:nx-ml-auto",
                                children: sn(n.logo)
                            }), t.map(e => {
                                if ("hidden" === e.display)
                                    return null;
                                if ("menu" === e.type)
                                    return (0,
                                    J.jsxs)(s_, {
                                        className: B(sk.link, "nx-flex nx-gap-1", sk.inactive),
                                        menu: e,
                                        children: [e.title, (0,
                                        J.jsx)(Y, {
                                            className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5",
                                            pathClassName: "nx-origin-center nx-transition-transform nx-rotate-90"
                                        })]
                                    }, e.title);
                                let t = e.href || e.route || "#";
                                e.children && (t = (e.withIndexPage ? e.route : e.firstChildRoute) || t);
                                let n = e.route === r || r.startsWith(e.route + "/");
                                return (0,
                                J.jsxs)(se, {
                                    href: t,
                                    className: B(sk.link, "nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block", !n || e.newWindow ? sk.inactive : sk.active),
                                    newWindow: e.newWindow,
                                    "aria-current": !e.newWindow && n,
                                    children: [(0,
                                    J.jsx)("span", {
                                        className: "nx-absolute nx-inset-x-0 nx-text-center",
                                        children: e.title
                                    }), (0,
                                    J.jsx)("span", {
                                        className: "nx-invisible nx-font-medium",
                                        children: e.title
                                    })]
                                }, t)
                            }
                            ), sn(n.search.component, {
                                directories: e,
                                className: "nx-hidden md:nx-inline-block mx-min-w-[200px]"
                            }), n.project.link ? (0,
                            J.jsx)(se, {
                                className: "nx-p-2 nx-text-current",
                                href: n.project.link,
                                newWindow: !0,
                                children: sn(n.project.icon)
                            }) : null, n.chat.link ? (0,
                            J.jsx)(se, {
                                className: "nx-p-2 nx-text-current",
                                href: n.chat.link,
                                newWindow: !0,
                                children: sn(n.chat.icon)
                            }) : null, sn(n.navbar.extraContent), (0,
                            J.jsx)("button", {
                                type: "button",
                                "aria-label": "Menu",
                                className: "nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden",
                                onClick: () => i(!a),
                                children: (0,
                                J.jsx)(ea, {
                                    className: B({
                                        open: a
                                    })
                                })
                            })]
                        })]
                    })
                }
            },
            navigation: !0,
            nextThemes: {
                defaultTheme: "system",
                storageKey: "theme"
            },
            notFound: {
                content: "Submit an issue about broken link →",
                labels: "bug"
            },
            primaryHue: {
                dark: 204,
                light: 212
            },
            primarySaturation: {
                dark: 100,
                light: 100
            },
            project: {
                icon: (0,
                J.jsxs)(J.Fragment, {
                    children: [(0,
                    J.jsx)(function(e) {
                        return (0,
                        J.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            fill: "currentColor",
                            viewBox: "3 3 18 18",
                            ...e,
                            children: [(0,
                            J.jsx)("title", {
                                children: "GitHub"
                            }), (0,
                            J.jsx)("path", {
                                d: "M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
                            })]
                        })
                    }, {}), (0,
                    J.jsx)("span", {
                        className: "nx-sr-only",
                        children: "GitHub"
                    })]
                })
            },
            search: {
                component: function({className: e, directories: t}) {
                    return o5().flexsearch ? (0,
                    J.jsx)(sm, {
                        className: e
                    }) : (0,
                    J.jsx)(sU, {
                        className: e,
                        directories: t
                    })
                },
                emptyResult: (0,
                J.jsx)("span", {
                    className: "nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400",
                    children: "No results found."
                }),
                error: "Failed to load search index.",
                loading: function() {
                    let {locale: e, defaultLocale: t=sW} = (0,
                    z.useRouter)()
                      , n = e && sq[e] || sq[t];
                    return (0,
                    J.jsxs)(J.Fragment, {
                        children: [n, "…"]
                    })
                },
                placeholder: function() {
                    let {locale: e, defaultLocale: t=sW} = (0,
                    z.useRouter)()
                      , n = e && sK[e] || sK[t];
                    return `${n}\u2026`
                }
            },
            serverSideError: {
                content: "Submit an issue about error in url →",
                labels: "bug"
            },
            sidebar: {
                defaultMenuCollapseLevel: 2,
                titleComponent: ({title: e}) => (0,
                J.jsx)(J.Fragment, {
                    children: e
                }),
                toggleButton: !1
            },
            themeSwitch: {
                component: function({lite: e, className: t}) {
                    let {setTheme: n, resolvedTheme: r, theme: a=""} = nn()
                      , i = V()
                      , o = o5().themeSwitch
                      , s = "function" == typeof o.useOptions ? o.useOptions() : o.useOptions;
                    return (0,
                    J.jsx)(sx, {
                        className: t,
                        title: "Change theme",
                        options: [{
                            key: "light",
                            name: s.light
                        }, {
                            key: "dark",
                            name: s.dark
                        }, {
                            key: "system",
                            name: s.system
                        }],
                        onChange: e => {
                            n(e.key)
                        }
                        ,
                        selected: {
                            key: a,
                            name: (0,
                            J.jsxs)("div", {
                                className: "nx-flex nx-items-center nx-gap-2 nx-capitalize",
                                children: [(0,
                                J.jsx)(i && "dark" === r ? ei : es, {}), (0,
                                J.jsx)("span", {
                                    className: e ? "md:nx-hidden" : "",
                                    children: i ? s[a] : s.light
                                })]
                            })
                        }
                    })
                },
                useOptions() {
                    let {locale: e} = (0,
                    z.useRouter)();
                    return "zh-CN" === e ? {
                        dark: "深色主题",
                        light: "浅色主题",
                        system: "系统默认"
                    } : {
                        dark: "Dark",
                        light: "Light",
                        system: "System"
                    }
                }
            },
            toc: {
                backToTop: !1,
                component: function({headings: e, filePath: t}) {
                    var n;
                    let r = oK()
                      , a = o5()
                      , i = (0,
                    H.useRef)(null)
                      , o = (0,
                    H.useMemo)( () => e.filter(e => e.depth > 1), [e])
                      , s = o.length > 0
                      , l = !!(a.feedback.content || a.editLink.component || a.toc.extraContent)
                      , u = null == (n = Object.entries(r).find( ([,{isActive: e}]) => e)) ? void 0 : n[0];
                    return (0,
                    H.useEffect)( () => {
                        var e;
                        if (!u)
                            return;
                        let t = null == (e = i.current) ? void 0 : e.querySelector(`li > a[href="#${u}"]`);
                        t && i2(t, {
                            behavior: "smooth",
                            block: "center",
                            inline: "center",
                            scrollMode: "always",
                            boundary: i.current
                        })
                    }
                    , [u]),
                    (0,
                    J.jsxs)("div", {
                        ref: i,
                        className: B("nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto]", "nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-nx-mr-4 rtl:-nx-ml-4"),
                        children: [s && (0,
                        J.jsxs)(J.Fragment, {
                            children: [(0,
                            J.jsx)("p", {
                                className: "nx-mb-4 nx-font-semibold nx-tracking-tight",
                                children: sn(a.toc.title)
                            }), (0,
                            J.jsx)("ul", {
                                children: o.map( ({id: e, value: t, depth: n}) => {
                                    var i, o, s, l;
                                    return (0,
                                    J.jsx)("li", {
                                        className: "nx-my-2 nx-scroll-my-6 nx-scroll-py-6",
                                        children: (0,
                                        J.jsx)("a", {
                                            href: `#${e}`,
                                            className: B({
                                                2: "nx-font-semibold",
                                                3: "ltr:nx-pl-4 rtl:nx-pr-4",
                                                4: "ltr:nx-pl-8 rtl:nx-pr-8",
                                                5: "ltr:nx-pl-12 rtl:nx-pr-12",
                                                6: "ltr:nx-pl-16 rtl:nx-pr-16"
                                            }[n], "nx-inline-block", (null == (i = r[e]) ? void 0 : i.isActive) ? "nx-text-primary-600 nx-subpixel-antialiased contrast-more:!nx-text-primary-600" : "nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300", "contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words"),
                                            children: null != (l = null == (s = (o = a.toc).headingComponent) ? void 0 : s.call(o, {
                                                id: e,
                                                children: t
                                            })) ? l : t
                                        })
                                    }, e)
                                }
                                )
                            })]
                        }), l && (0,
                        J.jsxs)("div", {
                            className: B(s && "nx-mt-8 nx-border-t nx-bg-white nx-pt-8 nx-shadow-[0_-12px_16px_white] dark:nx-bg-dark dark:nx-shadow-[0_-12px_16px_#111]", "nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8 dark:nx-border-neutral-800", "contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400"),
                            children: [a.feedback.content ? (0,
                            J.jsx)(se, {
                                className: sZ,
                                href: a.feedback.useLink(),
                                newWindow: !0,
                                children: sn(a.feedback.content)
                            }) : null, sn(a.editLink.component, {
                                filePath: t,
                                className: sZ,
                                children: sn(a.editLink.text)
                            }), sn(a.toc.extraContent), a.toc.backToTop && (0,
                            J.jsx)(s$, {
                                className: sZ
                            })]
                        })]
                    })
                },
                float: !0,
                title: "On This Page"
            },
            useNextSeoProps: () => ({
                titleTemplate: "%s – Nextra"
            })
        }
          , sJ = Object.entries(sQ).map( ([e,t]) => {
            if (t && "object" == typeof t && !Array.isArray(t) && !(0,
            H.isValidElement)(t))
                return e
        }
        ).filter(Boolean);
        if (sz) {
            let e;
            window.addEventListener("resize", () => {
                document.body.classList.add("resizing"),
                clearTimeout(e),
                e = setTimeout( () => {
                    document.body.classList.remove("resizing")
                }
                , 200)
            }
            )
        }
        function sY(e) {
            var {tag: t, context: n, children: r, id: a, className: i} = e
              , o = oW(e, ["tag", "context", "children", "id", "className"]);
            let s = oQ()
              , l = oY()
              , u = oJ()
              , c = (0,
            H.useRef)(null);
            return (0,
            H.useEffect)( () => {
                if (!a)
                    return;
                let e = c.current;
                if (e)
                    return l.set(e, [a, n.index += 1]),
                    null == u || u.observe(e),
                    () => {
                        null == u || u.disconnect(),
                        l.delete(e),
                        s(e => {
                            let t = oZ({}, e);
                            return delete t[a],
                            t
                        }
                        )
                    }
            }
            , [a, n, l, u, s]),
            (0,
            J.jsxs)(t, oU(oZ({
                className: "sr-only" === i ? "nx-sr-only" : B("nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100", {
                    h2: "nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400",
                    h3: "nx-mt-8 nx-text-2xl",
                    h4: "nx-mt-8 nx-text-xl",
                    h5: "nx-mt-8 nx-text-lg",
                    h6: "nx-mt-8 nx-text-base"
                }[t])
            }, o), {
                children: [r, a && (0,
                J.jsx)("a", {
                    href: `#${a}`,
                    id: a,
                    className: "subheading-anchor",
                    "aria-label": "Permalink for this section",
                    ref: c
                })]
            }))
        }
        var sX = e => {
            let t = null
              , n = [];
            return H.Children.forEach(e, (e, r) => {
                var a;
                if (e && e.type === s1) {
                    t || (t = e);
                    return
                }
                let i = e;
                if (!t && e && "object" == typeof e && e.type !== s0 && "props"in e && e.props) {
                    let n = sX(e.props.children);
                    t = n[0],
                    i = (0,
                    H.cloneElement)(e, oU(oZ({}, e.props), {
                        children: (null == (a = n[1]) ? void 0 : a.length) ? n[1] : void 0,
                        key: r
                    }))
                }
                n.push(i)
            }
            ),
            [t, n]
        }
          , s0 = e => {
            var {children: t, open: n} = e
              , r = oW(e, ["children", "open"]);
            let[a,i] = (0,
            H.useState)(!!n)
              , [o,s] = sX(t)
              , [l,u] = (0,
            H.useState)(a);
            return (0,
            H.useEffect)( () => {
                if (a)
                    u(!0);
                else {
                    let e = setTimeout( () => u(a), 500);
                    return () => clearTimeout(e)
                }
            }
            , [a]),
            (0,
            J.jsxs)("details", oU(oZ(oU(oZ({
                className: "nx-my-4 nx-rounded nx-border nx-border-gray-200 nx-bg-white nx-p-2 nx-shadow-sm first:nx-mt-0 dark:nx-border-neutral-800 dark:nx-bg-neutral-900"
            }, r), {
                open: l
            }), a && {
                "data-expanded": !0
            }), {
                children: [(0,
                J.jsx)(o9, {
                    value: i,
                    children: o
                }), (0,
                J.jsx)(so, {
                    isOpen: a,
                    children: s
                })]
            }))
        }
          , s1 = e => {
            let t = o6();
            return (0,
            J.jsx)("summary", oU(oZ({
                className: B("nx-flex nx-items-center nx-cursor-pointer nx-list-none nx-p-1 nx-transition-colors hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800", "before:nx-mr-1 before:nx-inline-block before:nx-transition-transform before:nx-content-[''] dark:before:nx-invert before:nx-shrink-0", "rtl:before:nx-rotate-180 [[data-expanded]>&]:before:nx-rotate-90")
            }, e), {
                onClick: e => {
                    e.preventDefault(),
                    t(e => !e)
                }
            }))
        }
          , s2 = /https?:\/\//
          , s4 = e => {
            var {href: t="", className: n} = e
              , r = oW(e, ["href", "className"]);
            return (0,
            J.jsx)(se, oZ({
                href: t,
                newWindow: s2.test(t),
                className: B("nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]", n)
            }, r))
        }
          , s5 = e => {
            var {href: t=""} = e
              , n = oW(e, ["href"]);
            return (0,
            J.jsx)(se, oZ({
                href: t,
                newWindow: s2.test(t)
            }, n))
        }
          , s3 = ({isRawLayout: e, components: t}) => {
            if (e)
                return {
                    a: s5
                };
            let n = {
                index: 0
            };
            return oZ({
                h1: e => (0,
                J.jsx)("h1", oZ({
                    className: "nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100"
                }, e)),
                h2: e => (0,
                J.jsx)(sY, oZ({
                    tag: "h2",
                    context: n
                }, e)),
                h3: e => (0,
                J.jsx)(sY, oZ({
                    tag: "h3",
                    context: n
                }, e)),
                h4: e => (0,
                J.jsx)(sY, oZ({
                    tag: "h4",
                    context: n
                }, e)),
                h5: e => (0,
                J.jsx)(sY, oZ({
                    tag: "h5",
                    context: n
                }, e)),
                h6: e => (0,
                J.jsx)(sY, oZ({
                    tag: "h6",
                    context: n
                }, e)),
                ul: e => (0,
                J.jsx)("ul", oZ({
                    className: "nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
                }, e)),
                ol: e => (0,
                J.jsx)("ol", oZ({
                    className: "nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
                }, e)),
                li: e => (0,
                J.jsx)("li", oZ({
                    className: "nx-my-2"
                }, e)),
                blockquote: e => (0,
                J.jsx)("blockquote", oZ({
                    className: B("nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400", "first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6")
                }, e)),
                hr: e => (0,
                J.jsx)("hr", oZ({
                    className: "nx-my-8 nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400"
                }, e)),
                a: s4,
                table: e => (0,
                J.jsx)(o_, oZ({
                    className: "nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0"
                }, e)),
                p: e => (0,
                J.jsx)("p", oZ({
                    className: "nx-mt-6 nx-leading-7 first:nx-mt-0"
                }, e)),
                tr: oE,
                th: oj,
                td: ok,
                details: s0,
                summary: s1,
                pre: oa,
                code: or
            }, t)
        }
          , s7 = {
            toc: B("nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block print:nx-hidden"),
            main: B("nx-w-full nx-break-words")
        }
          , s6 = ({themeContext: e, breadcrumb: t, timestamp: n, navigation: r, children: a}) => {
            var i;
            let o = o5()
              , s = V();
            if ("raw" === e.layout)
                return (0,
                J.jsx)("div", {
                    className: s7.main,
                    children: a
                });
            let l = e.timestamp && o.gitTimestamp && n ? new Date(n) : null
              , u = s && l ? (0,
            J.jsx)("div", {
                className: "nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400",
                children: sn(o.gitTimestamp, {
                    timestamp: l
                })
            }) : (0,
            J.jsx)("div", {
                className: "nx-mt-16"
            })
              , c = (0,
            J.jsxs)(J.Fragment, {
                children: [a, u, r]
            })
              , d = (null == (i = o.main) ? void 0 : i.call(o, {
                children: c
            })) || c;
            return "full" === e.layout ? (0,
            J.jsx)("article", {
                className: B(s7.main, "nextra-content nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"),
                children: d
            }) : (0,
            J.jsx)("article", {
                className: B(s7.main, "nextra-content nx-flex nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-min-w-0 nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]", "article" === e.typesetting && "nextra-body-typesetting-article"),
                children: (0,
                J.jsxs)("main", {
                    className: "nx-w-full nx-min-w-0 nx-max-w-6xl nx-px-6 nx-pt-4 md:nx-px-12",
                    children: [t, d]
                })
            })
        }
          , s9 = ({filePath: e, pageMap: t, frontMatter: n, headings: r, timestamp: a, children: i}) => {
            let o = o5()
              , {locale: s=sW, defaultLocale: l} = (0,
            z.useRouter)()
              , u = K()
              , {activeType: c, activeIndex: d, activeThemeContext: f, activePath: h, topLevelNavbarItems: p, docsDirectories: m, flatDirectories: x, flatDocsDirectories: g, directories: v} = (0,
            H.useMemo)( () => (function e({list: t, locale: n, defaultLocale: r, route: a, docsRoot: i="", underCurrentDocsRoot: o=!1, pageThemeContext: s=nc}) {
                let l, u;
                for (let e of t)
                    if ("Meta" === e.kind) {
                        if (e.locale === n) {
                            l = e.data;
                            break
                        }
                        l || (l = e.data)
                    }
                let c = l || {}
                  , d = Object.keys(c);
                for (let e of d)
                    "string" == typeof c[e] && (c[e] = {
                        title: c[e]
                    });
                let f = []
                  , h = []
                  , p = []
                  , m = []
                  , x = []
                  , g = 0
                  , v = s
                  , y = []
                  , b = -1
                  , w = c["*"] || {};
                delete w.title,
                delete w.href;
                let k = t.filter(e => "Meta" !== e.kind && !e.name.startsWith("_") && (!("locale"in e) || !e.locale || [n, r].includes(e.locale))).sort( (e, t) => {
                    let n = d.indexOf(e.name)
                      , r = d.indexOf(t.name);
                    return -1 === n && -1 === r ? e.name < t.name ? -1 : 1 : -1 === n ? 1 : -1 === r ? -1 : n - r
                }
                ).flatMap(e => {
                    let t;
                    let n = []
                      , r = d.indexOf(e.name);
                    if (-1 !== r) {
                        for (let e = b + 1; e < r; e++) {
                            let t = d[e];
                            "*" !== t && n.push({
                                name: t,
                                route: "",
                                ...c[t]
                            })
                        }
                        b = r,
                        t = {
                            ...c[e.name],
                            ...e
                        }
                    }
                    return n.push(t || e),
                    n
                }
                );
                for (let e = b + 1; e < d.length; e++) {
                    let t = d[e];
                    "*" !== t && k.push({
                        name: t,
                        route: "#",
                        ...c[t]
                    })
                }
                for (let t = 0; t < k.length; t++) {
                    let l = k[t];
                    if (t + 1 < k.length && l.name === k[t + 1].name) {
                        k[t + 1] = {
                            ...k[t + 1],
                            withIndexPage: !0
                        },
                        l.children && !k[t + 1].children && (k[t + 1].children = l.children);
                        continue
                    }
                    let d = function(e={}, t) {
                        "string" == typeof e && (e = {
                            title: e
                        });
                        let n = Object.assign({}, t.theme, e.theme);
                        return Object.assign({}, t, e, {
                            theme: n
                        })
                    }(c[l.name], w)
                      , {display: b, type: _="doc"} = d
                      , j = {
                        ...s,
                        ...d.theme
                    }
                      , E = a.startsWith(i)
                      , O = l.children && e({
                        list: l.children,
                        locale: n,
                        defaultLocale: r,
                        route: a,
                        docsRoot: "page" === _ || "menu" === _ ? l.route : i,
                        underCurrentDocsRoot: o || E,
                        pageThemeContext: j
                    })
                      , C = d.title || "separator" !== _ && l.name
                      , T = () => ({
                        ...l,
                        type: _,
                        ...C && {
                            title: C
                        },
                        ...b && {
                            display: b
                        },
                        ...O && {
                            children: []
                        }
                    })
                      , S = T()
                      , N = T()
                      , I = T();
                    if (N.isUnderCurrentDocsTree = E,
                    "separator" === _ && (S.isUnderCurrentDocsTree = E),
                    l.route === a)
                        switch (y = [S],
                        u = _,
                        v = {
                            ...v,
                            ...j
                        },
                        _) {
                        case "page":
                        case "menu":
                            g = x.length;
                            break;
                        case "doc":
                            g = m.length
                        }
                    if (!("hidden" === b && "Folder" !== S.kind || q.hV.has(l.route))) {
                        if (O) {
                            if (void 0 !== O.activeIndex && void 0 !== O.activeType) {
                                switch (v = O.activeThemeContext,
                                u = O.activeType,
                                y = [S, ...O.activePath],
                                u) {
                                case "page":
                                case "menu":
                                    g = x.length + O.activeIndex;
                                    break;
                                case "doc":
                                    g = m.length + O.activeIndex
                                }
                                l.withIndexPage && "doc" === _ && g++
                            }
                            switch (_) {
                            case "page":
                            case "menu":
                                I.children.push(...O.directories),
                                p.push(...O.docsDirectories),
                                O.flatDirectories.length ? (I.firstChildRoute = function e(t) {
                                    for (let n of t) {
                                        if (n.route)
                                            return n.route;
                                        if (n.children) {
                                            let t = e(n.children);
                                            if (t)
                                                return t
                                        }
                                    }
                                }(O.flatDirectories),
                                x.push(I)) : I.withIndexPage && x.push(I);
                                break;
                            case "doc":
                                Array.isArray(N.children) && N.children.push(...O.docsDirectories),
                                S.withIndexPage && "children" !== b && m.push(N)
                            }
                            h.push(...O.flatDirectories),
                            m.push(...O.flatDocsDirectories),
                            Array.isArray(S.children) && S.children.push(...O.directories)
                        } else
                            switch (h.push(S),
                            _) {
                            case "page":
                            case "menu":
                                x.push(I);
                                break;
                            case "doc":
                                m.push(N)
                            }
                        switch ("doc" === _ && "children" === b ? N.children && (f.push(...N.children),
                        p.push(...N.children)) : f.push(S),
                        _) {
                        case "page":
                        case "menu":
                            p.push(I);
                            break;
                        case "doc":
                            "children" !== b && p.push(N);
                            break;
                        case "separator":
                            p.push(S)
                        }
                    }
                }
                return {
                    activeType: u,
                    activeIndex: g,
                    activeThemeContext: v,
                    activePath: y,
                    directories: f,
                    flatDirectories: h,
                    docsDirectories: p,
                    flatDocsDirectories: m,
                    topLevelNavbarItems: x
                }
            }
            )({
                list: t,
                locale: s,
                defaultLocale: l,
                route: u
            }), [t, s, l, u])
              , y = oZ(oZ({}, f), n)
              , b = !y.sidebar || "raw" === y.layout || "page" === c
              , w = "page" !== c && y.toc && "default" === y.layout ? (0,
            J.jsx)("nav", {
                className: B(s7.toc, "nx-px-4"),
                "aria-label": "table of contents",
                children: sn(o.toc.component, {
                    headings: o.toc.float ? r : [],
                    filePath: e
                })
            }) : "full" !== y.layout && "raw" !== y.layout && (0,
            J.jsx)("nav", {
                className: s7.toc,
                "aria-label": "table of contents"
            })
              , k = o.i18n.find(e => e.locale === s)
              , _ = (k ? "rtl" === k.direction : "rtl" === o.direction) ? "rtl" : "ltr";
            return (0,
            J.jsxs)("div", {
                dir: _,
                children: [(0,
                J.jsx)("script", {
                    dangerouslySetInnerHTML: {
                        __html: `document.documentElement.setAttribute('dir','${_}')`
                    }
                }), (0,
                J.jsx)(sy, {}), (0,
                J.jsx)(sa, {}), y.navbar && sn(o.navbar.component, {
                    flatDirectories: x,
                    items: p
                }), (0,
                J.jsx)("div", {
                    className: B("nx-mx-auto nx-flex", "raw" !== y.layout && "nx-max-w-[90rem]"),
                    children: (0,
                    J.jsxs)(oX, {
                        children: [(0,
                        J.jsx)(sP, {
                            docsDirectories: m,
                            flatDirectories: x,
                            fullDirectories: v,
                            headings: r,
                            asPopover: b,
                            includePlaceholder: "default" === y.layout
                        }), w, (0,
                        J.jsx)(sM, {}), (0,
                        J.jsx)(s6, {
                            themeContext: y,
                            breadcrumb: "page" !== c && y.breadcrumb ? (0,
                            J.jsx)(si, {
                                activePath: h
                            }) : null,
                            timestamp: a,
                            navigation: "page" !== c && y.pagination ? (0,
                            J.jsx)(sw, {
                                flatDirectories: g,
                                currentIndex: d
                            }) : null,
                            children: (0,
                            J.jsx)(Q.Z, {
                                components: s3({
                                    isRawLayout: "raw" === y.layout,
                                    components: o.components
                                }),
                                children: i
                            })
                        })]
                    })
                }), y.footer && sn(o.footer.component, {
                    menu: b
                })]
            })
        }
        ;
        function s8(e) {
            var {children: t} = e
              , n = oW(e, ["children"]);
            return (0,
            J.jsx)(o3, {
                value: n,
                children: (0,
                J.jsx)(s9, oU(oZ({}, n.pageOpts), {
                    children: t
                }))
            })
        }
    },
    4603: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return s
            },
            a: function() {
                return d
            }
        });
        var r = n(5271);
        let a = r.createContext({});
        function i(e) {
            let t = r.useContext(a);
            return r.useMemo( () => "function" == typeof e ? e(t) : {
                ...t,
                ...e
            }, [t, e])
        }
        let o = {};
        function s({components: e, children: t, disableParentContext: n}) {
            let s;
            return s = n ? "function" == typeof e ? e({}) : e || o : i(e),
            r.createElement(a.Provider, {
                value: s
            }, t)
        }
        var l = n(9542)
          , u = n.n(l)
          , c = {
            img: e => (0,
            r.createElement)("object" == typeof e.src ? u() : "img", e)
        }
          , d = e => i({
            ...c,
            ...e
        })
    },
    6318: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return v
            }
        });
        var r, a = n(5554), i = n.n(a), o = n(543), s = n(5271);
        n(5670),
        "undefined" != typeof window && (window.requestIdleCallback = window.requestIdleCallback || function(e) {
            var t = Date.now();
            return setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        }
        ,
        window.cancelIdleCallback = window.cancelIdleCallback || function(e) {
            clearTimeout(e)
        }
        ),
        n(4603);
        var l = n(2676)
          , u = (0,
        s.createContext)(!1)
          , c = n(7954);
        function d({__nextra_pageMap: e, __nextra_dynamic_opts: t, ...n}) {
            let {context: r, Layout: a} = function() {
                let e = globalThis[o.eZ]
                  , {route: t} = (0,
                c.useRouter)();
                (0,
                s.useState)({})[1];
                let n = e.context[t];
                if (!n)
                    throw Error("No content found for the current route. This is a Nextra bug.");
                return {
                    context: n,
                    Layout: e.Layout
                }
            }()
              , {Content: i, ...d} = r;
            if (e && (d.pageOpts = {
                ...d.pageOpts,
                pageMap: e
            }),
            t) {
                let {headings: e, title: n, frontMatter: r} = JSON.parse(t);
                d.pageOpts = {
                    ...d.pageOpts,
                    headings: e,
                    title: n,
                    frontMatter: r
                }
            }
            return (0,
            l.jsx)(a, {
                ...d,
                pageProps: n,
                children: (0,
                l.jsx)(u.Provider, {
                    value: n,
                    children: (0,
                    l.jsx)(i, {
                        ...n
                    })
                })
            })
        }
        var f = n(6768)
          , h = n(4473)
          , p = n(9378);
        function m(e) {
            return p(e.replaceAll(/[-_]/g, " "))
        }
        function x(e) {
            return !!e && "object" == typeof e && "folder" === e.type
        }
        function g(e) {
            return Object.fromEntries(Object.entries(e).map( ([e,t]) => {
                if (x(t)) {
                    let n = e.replace("/", "");
                    return [n, t.title || m(n)]
                }
                return [e, t || m(e)]
            }
            ))
        }
        function v({pageNextRoute: e, pageOpts: t, nextraLayout: n, themeConfig: a, MDXContent: s, hot: l, pageOptsChecksum: u, dynamicMetaModules: c=[]}) {
            var p;
            "undefined" == typeof window && (globalThis.__nextra_resolvePageMap = async () => {
                if (r)
                    return r;
                let e = JSON.parse(JSON.stringify(m.pageMap));
                return await Promise.all(c.map(async ([t,{metaObjectKeyPath: n, metaParentKeyPath: r}]) => {
                    let a = await t
                      , o = await a.default()
                      , s = i()(e, n);
                    s.data = o,
                    function e(t, n, r=!0) {
                        if (r) {
                            e(t, {
                                kind: "Meta",
                                data: n.data,
                                locale: n.locale
                            }, !1),
                            n.data = g(n.data);
                            return
                        }
                        for (let[r,i] of Object.entries(n.data)) {
                            if (!x(i)) {
                                var a;
                                if ("*" === r)
                                    continue;
                                t.children.push({
                                    kind: "MdxPage",
                                    ...n.locale && {
                                        locale: n.locale
                                    },
                                    name: r,
                                    route: (a = t.route,
                                    h(f.join(a, r.replace(/^index$/, ""))))
                                });
                                continue
                            }
                            let o = r.replace("/", "")
                              , s = {
                                kind: "Folder",
                                name: o,
                                route: `${t.route}/${o}`,
                                children: [{
                                    kind: "Meta",
                                    ...n.locale && {
                                        locale: n.locale
                                    },
                                    data: g(i.items)
                                }]
                            };
                            t.children.push(s),
                            e(s, {
                                kind: "Meta",
                                data: i.items,
                                locale: n.locale
                            }, !1)
                        }
                    }(i()(e, r), s)
                }
                )),
                r = e
            }
            );
            let m = globalThis[p = o.eZ] || (globalThis[p] = Object.create(null));
            return t.pageMap ? (m.pageMap = t.pageMap,
            m.Layout = n) : (t = {
                ...t,
                pageMap: m.pageMap,
                flexsearch: m.flexsearch
            },
            a = m.themeConfig),
            t = {
                frontMatter: {},
                ...t
            },
            m.route = t.route,
            m.context || (m.context = Object.create(null)),
            m.context[e] = {
                Content: s,
                pageOpts: t,
                themeConfig: a
            },
            d
        }
    },
    5182: function(e, t, n) {
        "use strict";
        var r = n(6097);
        e.exports = function(e) {
            var t = {
                protocols: [],
                protocol: null,
                port: null,
                resource: "",
                host: "",
                user: "",
                password: "",
                pathname: "",
                hash: "",
                search: "",
                href: e,
                query: {},
                parse_failed: !1
            };
            try {
                var n = new URL(e);
                t.protocols = r(n),
                t.protocol = t.protocols[0],
                t.port = n.port,
                t.resource = n.hostname,
                t.host = n.host,
                t.user = n.username || "",
                t.password = n.password || "",
                t.pathname = n.pathname,
                t.hash = n.hash.slice(1),
                t.search = n.search.slice(1),
                t.href = n.href,
                t.query = Object.fromEntries(n.searchParams)
            } catch (n) {
                t.protocols = ["file"],
                t.protocol = t.protocols[0],
                t.port = "",
                t.resource = "",
                t.user = "",
                t.pathname = "",
                t.hash = "",
                t.search = "",
                t.href = e,
                t.query = {},
                t.parse_failed = !0
            }
            return t
        }
    },
    8593: function(e, t, n) {
        "use strict";
        var r = n(5182)
          , a = r && "object" == typeof r && "default"in r ? r : {
            default: r
        };
        let i = (e, t) => t.some(t => t instanceof RegExp ? t.test(e) : t === e)
          , o = (e, {stripHash: t}) => {
            let n = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);
            if (!n)
                throw Error(`Invalid URL: ${e}`);
            let {type: r, data: a, hash: i} = n.groups
              , o = r.split(";");
            i = t ? "" : i;
            let s = !1;
            "base64" === o[o.length - 1] && (o.pop(),
            s = !0);
            let l = (o.shift() || "").toLowerCase()
              , u = [...o.map(e => {
                let[t,n=""] = e.split("=").map(e => e.trim());
                return "charset" === t && "us-ascii" === (n = n.toLowerCase()) ? "" : `${t}${n ? `=${n}` : ""}`
            }
            ).filter(Boolean)];
            return s && u.push("base64"),
            (u.length > 0 || l && "text/plain" !== l) && u.unshift(l),
            `data:${u.join(";")},${s ? a.trim() : a}${i ? `#${i}` : ""}`
        }
          , s = (e, t=!1) => {
            let n = t => {
                let n = Error(t);
                throw n.subject_url = e,
                n
            }
            ;
            "string" == typeof e && e.trim() || n("Invalid url."),
            e.length > s.MAX_INPUT_LENGTH && n("Input exceeds maximum length. If needed, change the value of parseUrl.MAX_INPUT_LENGTH."),
            t && ("object" != typeof t && (t = {
                stripHash: !1
            }),
            e = function(e, t) {
                if (t = {
                    defaultProtocol: "http:",
                    normalizeProtocol: !0,
                    forceHttp: !1,
                    forceHttps: !1,
                    stripAuthentication: !0,
                    stripHash: !1,
                    stripTextFragment: !0,
                    stripWWW: !0,
                    removeQueryParameters: [/^utm_\w+/i],
                    removeTrailingSlash: !0,
                    removeSingleSlash: !0,
                    removeDirectoryIndex: !1,
                    sortQueryParameters: !0,
                    ...t
                },
                e = e.trim(),
                /^data:/i.test(e))
                    return o(e, t);
                if (/^view-source:/i.test(e))
                    throw Error("`view-source:` is not supported as it is a non-standard protocol");
                let n = e.startsWith("//");
                !n && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
                let r = new URL(e);
                if (t.forceHttp && t.forceHttps)
                    throw Error("The `forceHttp` and `forceHttps` options cannot be used together");
                if (t.forceHttp && "https:" === r.protocol && (r.protocol = "http:"),
                t.forceHttps && "http:" === r.protocol && (r.protocol = "https:"),
                t.stripAuthentication && (r.username = "",
                r.password = ""),
                t.stripHash ? r.hash = "" : t.stripTextFragment && (r.hash = r.hash.replace(/#?:~:text.*?$/i, "")),
                r.pathname) {
                    let e = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g
                      , t = 0
                      , n = "";
                    for (; ; ) {
                        let a = e.exec(r.pathname);
                        if (!a)
                            break;
                        let i = a[0]
                          , o = a.index;
                        n += r.pathname.slice(t, o).replace(/\/{2,}/g, "/") + i,
                        t = o + i.length
                    }
                    n += r.pathname.slice(t, r.pathname.length).replace(/\/{2,}/g, "/"),
                    r.pathname = n
                }
                if (r.pathname)
                    try {
                        r.pathname = decodeURI(r.pathname)
                    } catch {}
                if (!0 === t.removeDirectoryIndex && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]),
                Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
                    let e = r.pathname.split("/");
                    i(e[e.length - 1], t.removeDirectoryIndex) && (e = e.slice(0, -1),
                    r.pathname = e.slice(1).join("/") + "/")
                }
                if (r.hostname && (r.hostname = r.hostname.replace(/\.$/, ""),
                t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(r.hostname) && (r.hostname = r.hostname.replace(/^www\./, ""))),
                Array.isArray(t.removeQueryParameters))
                    for (let e of [...r.searchParams.keys()])
                        i(e, t.removeQueryParameters) && r.searchParams.delete(e);
                if (!0 === t.removeQueryParameters && (r.search = ""),
                t.sortQueryParameters) {
                    r.searchParams.sort();
                    try {
                        r.search = decodeURIComponent(r.search)
                    } catch {}
                }
                t.removeTrailingSlash && (r.pathname = r.pathname.replace(/\/$/, ""));
                let a = e;
                return e = r.toString(),
                t.removeSingleSlash || "/" !== r.pathname || a.endsWith("/") || "" !== r.hash || (e = e.replace(/\/$/, "")),
                (t.removeTrailingSlash || "/" === r.pathname) && "" === r.hash && t.removeSingleSlash && (e = e.replace(/\/$/, "")),
                n && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, "//")),
                t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")),
                e
            }(e, t));
            let r = a.default(e);
            if (r.parse_failed) {
                let e = r.href.match(/^(?:([a-z_][a-z0-9_-]{0,31})@|https?:\/\/)([\w\.\-@]+)[\/:]([\~,\.\w,\-,\_,\/]+?(?:\.git|\/)?)$/);
                e ? (r.protocols = ["ssh"],
                r.protocol = "ssh",
                r.resource = e[2],
                r.host = e[2],
                r.user = e[1],
                r.pathname = `/${e[3]}`,
                r.parse_failed = !1) : n("URL parsing failed.")
            }
            return r
        }
        ;
        s.MAX_INPUT_LENGTH = 2048,
        e.exports = s
    },
    6097: function(e) {
        "use strict";
        e.exports = function(e, t) {
            !0 === t && (t = 0);
            var n = "";
            if ("string" == typeof e)
                try {
                    n = new URL(e).protocol
                } catch (e) {}
            else
                e && e.constructor === URL && (n = e.protocol);
            var r = n.split(/\:|\+/).filter(Boolean);
            return "number" == typeof t ? r[t] : r
        }
    },
    2601: function(e) {
        var t = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            Ấ: "A",
            Ắ: "A",
            Ẳ: "A",
            Ẵ: "A",
            Ặ: "A",
            Æ: "AE",
            Ầ: "A",
            Ằ: "A",
            Ȃ: "A",
            Ả: "A",
            Ạ: "A",
            Ẩ: "A",
            Ẫ: "A",
            Ậ: "A",
            Ç: "C",
            Ḉ: "C",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            Ế: "E",
            Ḗ: "E",
            Ề: "E",
            Ḕ: "E",
            Ḝ: "E",
            Ȇ: "E",
            Ẻ: "E",
            Ẽ: "E",
            Ẹ: "E",
            Ể: "E",
            Ễ: "E",
            Ệ: "E",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            Ḯ: "I",
            Ȋ: "I",
            Ỉ: "I",
            Ị: "I",
            Ð: "D",
            Ñ: "N",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            Ố: "O",
            Ṍ: "O",
            Ṓ: "O",
            Ȏ: "O",
            Ỏ: "O",
            Ọ: "O",
            Ổ: "O",
            Ỗ: "O",
            Ộ: "O",
            Ờ: "O",
            Ở: "O",
            Ỡ: "O",
            Ớ: "O",
            Ợ: "O",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            Ủ: "U",
            Ụ: "U",
            Ử: "U",
            Ữ: "U",
            Ự: "U",
            Ý: "Y",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            ấ: "a",
            ắ: "a",
            ẳ: "a",
            ẵ: "a",
            ặ: "a",
            æ: "ae",
            ầ: "a",
            ằ: "a",
            ȃ: "a",
            ả: "a",
            ạ: "a",
            ẩ: "a",
            ẫ: "a",
            ậ: "a",
            ç: "c",
            ḉ: "c",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            ế: "e",
            ḗ: "e",
            ề: "e",
            ḕ: "e",
            ḝ: "e",
            ȇ: "e",
            ẻ: "e",
            ẽ: "e",
            ẹ: "e",
            ể: "e",
            ễ: "e",
            ệ: "e",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            ḯ: "i",
            ȋ: "i",
            ỉ: "i",
            ị: "i",
            ð: "d",
            ñ: "n",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            ố: "o",
            ṍ: "o",
            ṓ: "o",
            ȏ: "o",
            ỏ: "o",
            ọ: "o",
            ổ: "o",
            ỗ: "o",
            ộ: "o",
            ờ: "o",
            ở: "o",
            ỡ: "o",
            ớ: "o",
            ợ: "o",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            ủ: "u",
            ụ: "u",
            ử: "u",
            ữ: "u",
            ự: "u",
            ý: "y",
            ÿ: "y",
            Ā: "A",
            ā: "a",
            Ă: "A",
            ă: "a",
            Ą: "A",
            ą: "a",
            Ć: "C",
            ć: "c",
            Ĉ: "C",
            ĉ: "c",
            Ċ: "C",
            ċ: "c",
            Č: "C",
            č: "c",
            C̆: "C",
            c̆: "c",
            Ď: "D",
            ď: "d",
            Đ: "D",
            đ: "d",
            Ē: "E",
            ē: "e",
            Ĕ: "E",
            ĕ: "e",
            Ė: "E",
            ė: "e",
            Ę: "E",
            ę: "e",
            Ě: "E",
            ě: "e",
            Ĝ: "G",
            Ǵ: "G",
            ĝ: "g",
            ǵ: "g",
            Ğ: "G",
            ğ: "g",
            Ġ: "G",
            ġ: "g",
            Ģ: "G",
            ģ: "g",
            Ĥ: "H",
            ĥ: "h",
            Ħ: "H",
            ħ: "h",
            Ḫ: "H",
            ḫ: "h",
            Ĩ: "I",
            ĩ: "i",
            Ī: "I",
            ī: "i",
            Ĭ: "I",
            ĭ: "i",
            Į: "I",
            į: "i",
            İ: "I",
            ı: "i",
            Ĳ: "IJ",
            ĳ: "ij",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            Ḱ: "K",
            ḱ: "k",
            K̆: "K",
            k̆: "k",
            Ĺ: "L",
            ĺ: "l",
            Ļ: "L",
            ļ: "l",
            Ľ: "L",
            ľ: "l",
            Ŀ: "L",
            ŀ: "l",
            Ł: "l",
            ł: "l",
            Ḿ: "M",
            ḿ: "m",
            M̆: "M",
            m̆: "m",
            Ń: "N",
            ń: "n",
            Ņ: "N",
            ņ: "n",
            Ň: "N",
            ň: "n",
            ŉ: "n",
            N̆: "N",
            n̆: "n",
            Ō: "O",
            ō: "o",
            Ŏ: "O",
            ŏ: "o",
            Ő: "O",
            ő: "o",
            Œ: "OE",
            œ: "oe",
            P̆: "P",
            p̆: "p",
            Ŕ: "R",
            ŕ: "r",
            Ŗ: "R",
            ŗ: "r",
            Ř: "R",
            ř: "r",
            R̆: "R",
            r̆: "r",
            Ȓ: "R",
            ȓ: "r",
            Ś: "S",
            ś: "s",
            Ŝ: "S",
            ŝ: "s",
            Ş: "S",
            Ș: "S",
            ș: "s",
            ş: "s",
            Š: "S",
            š: "s",
            Ţ: "T",
            ţ: "t",
            ț: "t",
            Ț: "T",
            Ť: "T",
            ť: "t",
            Ŧ: "T",
            ŧ: "t",
            T̆: "T",
            t̆: "t",
            Ũ: "U",
            ũ: "u",
            Ū: "U",
            ū: "u",
            Ŭ: "U",
            ŭ: "u",
            Ů: "U",
            ů: "u",
            Ű: "U",
            ű: "u",
            Ų: "U",
            ų: "u",
            Ȗ: "U",
            ȗ: "u",
            V̆: "V",
            v̆: "v",
            Ŵ: "W",
            ŵ: "w",
            Ẃ: "W",
            ẃ: "w",
            X̆: "X",
            x̆: "x",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Y̆: "Y",
            y̆: "y",
            Ź: "Z",
            ź: "z",
            Ż: "Z",
            ż: "z",
            Ž: "Z",
            ž: "z",
            ſ: "s",
            ƒ: "f",
            Ơ: "O",
            ơ: "o",
            Ư: "U",
            ư: "u",
            Ǎ: "A",
            ǎ: "a",
            Ǐ: "I",
            ǐ: "i",
            Ǒ: "O",
            ǒ: "o",
            Ǔ: "U",
            ǔ: "u",
            Ǖ: "U",
            ǖ: "u",
            Ǘ: "U",
            ǘ: "u",
            Ǚ: "U",
            ǚ: "u",
            Ǜ: "U",
            ǜ: "u",
            Ứ: "U",
            ứ: "u",
            Ṹ: "U",
            ṹ: "u",
            Ǻ: "A",
            ǻ: "a",
            Ǽ: "AE",
            ǽ: "ae",
            Ǿ: "O",
            ǿ: "o",
            Þ: "TH",
            þ: "th",
            Ṕ: "P",
            ṕ: "p",
            Ṥ: "S",
            ṥ: "s",
            X́: "X",
            x́: "x",
            Ѓ: "Г",
            ѓ: "г",
            Ќ: "К",
            ќ: "к",
            A̋: "A",
            a̋: "a",
            E̋: "E",
            e̋: "e",
            I̋: "I",
            i̋: "i",
            Ǹ: "N",
            ǹ: "n",
            Ồ: "O",
            ồ: "o",
            Ṑ: "O",
            ṑ: "o",
            Ừ: "U",
            ừ: "u",
            Ẁ: "W",
            ẁ: "w",
            Ỳ: "Y",
            ỳ: "y",
            Ȁ: "A",
            ȁ: "a",
            Ȅ: "E",
            ȅ: "e",
            Ȉ: "I",
            ȉ: "i",
            Ȍ: "O",
            ȍ: "o",
            Ȑ: "R",
            ȑ: "r",
            Ȕ: "U",
            ȕ: "u",
            B̌: "B",
            b̌: "b",
            Č̣: "C",
            č̣: "c",
            Ê̌: "E",
            ê̌: "e",
            F̌: "F",
            f̌: "f",
            Ǧ: "G",
            ǧ: "g",
            Ȟ: "H",
            ȟ: "h",
            J̌: "J",
            ǰ: "j",
            Ǩ: "K",
            ǩ: "k",
            M̌: "M",
            m̌: "m",
            P̌: "P",
            p̌: "p",
            Q̌: "Q",
            q̌: "q",
            Ř̩: "R",
            ř̩: "r",
            Ṧ: "S",
            ṧ: "s",
            V̌: "V",
            v̌: "v",
            W̌: "W",
            w̌: "w",
            X̌: "X",
            x̌: "x",
            Y̌: "Y",
            y̌: "y",
            A̧: "A",
            a̧: "a",
            B̧: "B",
            b̧: "b",
            Ḑ: "D",
            ḑ: "d",
            Ȩ: "E",
            ȩ: "e",
            Ɛ̧: "E",
            ɛ̧: "e",
            Ḩ: "H",
            ḩ: "h",
            I̧: "I",
            i̧: "i",
            Ɨ̧: "I",
            ɨ̧: "i",
            M̧: "M",
            m̧: "m",
            O̧: "O",
            o̧: "o",
            Q̧: "Q",
            q̧: "q",
            U̧: "U",
            u̧: "u",
            X̧: "X",
            x̧: "x",
            Z̧: "Z",
            z̧: "z",
            й: "и",
            Й: "И",
            ё: "е",
            Ё: "Е"
        }
          , n = Object.keys(t).join("|")
          , r = RegExp(n, "g")
          , a = RegExp(n, "");
        function i(e) {
            return t[e]
        }
        var o = function(e) {
            return e.replace(r, i)
        };
        e.exports = o,
        e.exports.has = function(e) {
            return !!e.match(a)
        }
        ,
        e.exports.remove = o
    },
    4473: function(e) {
        "use strict";
        e.exports = e => {
            let t = /^\\\\\?\\/.test(e)
              , n = /[^\u0000-\u0080]+/.test(e);
            return t || n ? e : e.replace(/\\/g, "/")
        }
    },
    9378: function(e, t, n) {
        let r = n(3587)
          , a = n(2168)
          , i = "[^\\s'’\\(\\)!?;:\"-]"
          , o = RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${i}))|(${i}))(${i}*[’']*${i}*)`, "g")
          , s = e => e.map(e => [RegExp(`\\b${e}\\b`, "gi"), e]);
        e.exports = (e, t={}) => (e = e.toLowerCase().replace(o, (e, t="", n, a, i, o, s) => {
            let l = e.length + o >= s.length
              , u = function(e) {
                let t = e[0];
                return /\s/.test(t) ? e.slice(1) : /[\(\)]/.test(t) ? null : e
            }(e);
            return u ? !n && r.has(a + i) && !l ? u : t + (a || n).toUpperCase() + i : e
        }
        ),
        s([...a, ...t.special || []]).forEach( ([t,n]) => {
            e = e.replace(t, n)
        }
        ),
        e)
    },
    3587: function(e) {
        e.exports = new Set(["for", "and", "nor", "but", "or", "yet", "so", "a", "an", "the", "aboard", "about", "above", "across", "after", "against", "along", "amid", "among", "anti", "around", "as", "at", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "concerning", "considering", "despite", "down", "during", "except", "excepting", "excluding", "following", "for", "from", "in", "inside", "into", "like", "minus", "near", "of", "off", "on", "onto", "opposite", "over", "past", "per", "plus", "regarding", "round", "save", "since", "than", "through", "to", "toward", "towards", "under", "underneath", "unlike", "until", "up", "upon", "versus", "via", "with", "within", "without"])
    },
    2168: function(e) {
        e.exports = ["ZEIT", "ZEIT Inc.", "Vercel", "Vercel Inc.", "CLI", "API", "HTTP", "HTTPS", "JSX", "DNS", "URL", "now.sh", "now.json", "vercel.app", "vercel.json", "CI", "CD", "CDN", "package.json", "package.lock", "yarn.lock", "GitHub", "GitLab", "CSS", "Sass", "JS", "JavaScript", "TypeScript", "HTML", "WordPress", "Next.js", "Node.js", "Webpack", "Docker", "Bash", "Kubernetes", "SWR", "TinaCMS", "UI", "UX", "TS", "TSX", "iPhone", "iPad", "watchOS", "iOS", "iPadOS", "macOS", "PHP", "composer.json", "composer.lock", "CMS", "SQL", "C", "C#", "GraphQL", "GraphiQL", "JWT", "JWTs"]
    },
    5670: function(e, t, n) {
        n(2676)
    },
    543: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZW: function() {
                return i
            },
            eZ: function() {
                return s
            },
            hV: function() {
                return l
            }
        });
        var r = n(6768)
          , a = n(5946)
          , i = "en-US"
          , o = a.cwd();
        r.join(o, "public");
        var s = Symbol.for("__nextra_internal__")
          , l = new Set(["/404", "/500"])
    }
}]);
