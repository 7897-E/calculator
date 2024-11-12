(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    8359: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let r = n(2676)
          , a = n(5271);
        t.default = function({html: e, height: t=null, width: n=null, children: o, dataNtpc: i=""}) {
            return (0,
            a.useEffect)( () => {
                i && performance.mark("mark_feature_usage", {
                    detail: {
                        feature: `next-third-parties-${i}`
                    }
                })
            }
            , [i]),
            (0,
            r.jsxs)(r.Fragment, {
                children: [o, e ? (0,
                r.jsx)("div", {
                    style: {
                        height: null != t ? `${t}px` : "auto",
                        width: null != n ? `${n}px` : "auto"
                    },
                    "data-ntpc": i,
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }) : null]
            })
        }
    },
    2850: function(e, t, n) {
        "use strict";
        let r;
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.sendGAEvent = t.GoogleAnalytics = void 0;
        let o = n(2676)
          , i = n(5271)
          , s = a(n(5867));
        t.GoogleAnalytics = function(e) {
            let {gaId: t, dataLayerName: n="dataLayer"} = e;
            return void 0 === r && (r = n),
            (0,
            i.useEffect)( () => {
                performance.mark("mark_feature_usage", {
                    detail: {
                        feature: "next-third-parties-ga"
                    }
                })
            }
            , []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(s.default, {
                    id: "_next-ga-init",
                    dangerouslySetInnerHTML: {
                        __html: `
          window['${n}'] = window['${n}'] || [];
          function gtag(){window['${n}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`
                    }
                }), (0,
                o.jsx)(s.default, {
                    id: "_next-ga",
                    src: `https://www.googletagmanager.com/gtag/js?id=${t}`
                })]
            })
        }
        ,
        t.sendGAEvent = function(...e) {
            if (void 0 === r) {
                console.warn("@next/third-parties: GA has not been initialized");
                return
            }
            window[r] ? window[r].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)
        }
    },
    3576: function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let a = n(2676)
          , o = n(9661)
          , i = r(n(8359));
        t.default = function(e) {
            let {apiKey: t, ...n} = e
              , r = {
                ...n,
                key: t
            }
              , {html: s} = (0,
            o.GoogleMapsEmbed)(r);
            return (0,
            a.jsx)(i.default, {
                height: r.height || null,
                width: r.width || null,
                html: s,
                dataNtpc: "GoogleMapsEmbed"
            })
        }
    },
    8689: function(e, t, n) {
        "use strict";
        let r;
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.sendGTMEvent = t.GoogleTagManager = void 0;
        let o = n(2676)
          , i = n(5271)
          , s = a(n(5867));
        t.GoogleTagManager = function(e) {
            let {gtmId: t, dataLayerName: n="dataLayer", auth: a, preview: l, dataLayer: u} = e;
            void 0 === r && (r = n);
            let c = "dataLayer" !== n ? `&l=${n}` : ""
              , d = a ? `&gtm_auth=${a}` : ""
              , f = l ? `&gtm_preview=${l}&gtm_cookies_win=x` : "";
            return (0,
            i.useEffect)( () => {
                performance.mark("mark_feature_usage", {
                    detail: {
                        feature: "next-third-parties-gtm"
                    }
                })
            }
            , []),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(s.default, {
                    id: "_next-gtm-init",
                    dangerouslySetInnerHTML: {
                        __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${u ? `w[l].push(${JSON.stringify(u)})` : ""}
      })(window,'${n}');`
                    }
                }), (0,
                o.jsx)(s.default, {
                    id: "_next-gtm",
                    "data-ntpc": "GTM",
                    src: `https://www.googletagmanager.com/gtm.js?id=${t}${c}${d}${f}`
                })]
            })
        }
        ,
        t.sendGTMEvent = e => {
            if (void 0 === r) {
                console.warn("@next/third-parties: GTM has not been initialized");
                return
            }
            window[r] ? window[r].push(e) : console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)
        }
    },
    5224: function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.sendGAEvent = t.GoogleAnalytics = t.sendGTMEvent = t.GoogleTagManager = t.YouTubeEmbed = t.GoogleMapsEmbed = void 0;
        var a = n(3576);
        Object.defineProperty(t, "GoogleMapsEmbed", {
            enumerable: !0,
            get: function() {
                return r(a).default
            }
        });
        var o = n(4806);
        Object.defineProperty(t, "YouTubeEmbed", {
            enumerable: !0,
            get: function() {
                return r(o).default
            }
        });
        var i = n(8689);
        Object.defineProperty(t, "GoogleTagManager", {
            enumerable: !0,
            get: function() {
                return i.GoogleTagManager
            }
        }),
        Object.defineProperty(t, "sendGTMEvent", {
            enumerable: !0,
            get: function() {
                return i.sendGTMEvent
            }
        });
        var s = n(2850);
        Object.defineProperty(t, "GoogleAnalytics", {
            enumerable: !0,
            get: function() {
                return s.GoogleAnalytics
            }
        }),
        Object.defineProperty(t, "sendGAEvent", {
            enumerable: !0,
            get: function() {
                return s.sendGAEvent
            }
        })
    },
    4806: function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let a = n(2676)
          , o = r(n(5867))
          , i = n(9661)
          , s = r(n(8359))
          , l = {
            server: "beforeInteractive",
            client: "afterInteractive",
            idle: "lazyOnload",
            worker: "worker"
        };
        t.default = function(e) {
            let {html: t, scripts: n, stylesheets: r} = (0,
            i.YouTubeEmbed)(e);
            return (0,
            a.jsx)(s.default, {
                height: e.height || null,
                width: e.width || null,
                html: t,
                dataNtpc: "YouTubeEmbed",
                children: null == n ? void 0 : n.map(e => (0,
                a.jsx)(o.default, {
                    src: e.url,
                    strategy: l[e.strategy],
                    stylesheets: r
                }, e.url))
            })
        }
    },
    9498: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(1493)
        }
        ])
    },
    1493: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return u
            }
        });
        var r = n(2676)
          , a = n(4673)
          , o = n.n(a);
        n(5814),
        n(8582);
        var i = n(5224)
          , s = n(5867)
          , l = n.n(s);
        function u(e) {
            let {Component: t, pageProps: n} = e;
            return (0,
            r.jsxs)("main", {
                className: o().className,
                children: [(0,
                r.jsx)(i.GoogleAnalytics, {
                    gaId: "G-4XFW4S3TF4"
                }), (0,
                r.jsx)(l(), {
                    async: !0,
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8557104612296417",
                    crossOrigin: "anonymous",
                    strategy: "afterInteractive"
                }), (0,
                r.jsx)("meta", {
                    name: "google-adsense-account",
                    content: "ca-pub-8557104612296417"
                }), (0,
                r.jsx)(t, {
                    ...n
                })]
            })
        }
    },
    5814: function() {},
    8582: function() {},
    4673: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__Space_Grotesk_3168b5', '__Space_Grotesk_Fallback_3168b5'",
                fontWeight: 400,
                fontStyle: "normal"
            },
            className: "__className_3168b5"
        }
    },
    5867: function(e, t, n) {
        e.exports = n(8658)
    },
    9661: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0;
        var r = n(8993);
        Object.defineProperty(t, "GoogleAnalytics", {
            enumerable: !0,
            get: function() {
                return r.GoogleAnalytics
            }
        });
        var a = n(1309);
        Object.defineProperty(t, "GoogleMapsEmbed", {
            enumerable: !0,
            get: function() {
                return a.GoogleMapsEmbed
            }
        });
        var o = n(7091);
        Object.defineProperty(t, "YouTubeEmbed", {
            enumerable: !0,
            get: function() {
                return o.YouTubeEmbed
            }
        })
    },
    8993: function(e, t, n) {
        "use strict";
        var r = this && this.__rest || function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
            return n
        }
          , a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.GoogleAnalytics = void 0;
        let o = a(n(1283))
          , i = n(6343);
        t.GoogleAnalytics = e => {
            var t = r(e, []);
            return (0,
            i.formatData)(o.default, t)
        }
    },
    1309: function(e, t, n) {
        "use strict";
        var r = this && this.__rest || function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
            return n
        }
          , a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.GoogleMapsEmbed = void 0;
        let o = a(n(3079))
          , i = n(6343);
        t.GoogleMapsEmbed = e => {
            var t = r(e, []);
            return (0,
            i.formatData)(o.default, t)
        }
    },
    7091: function(e, t, n) {
        "use strict";
        var r = this && this.__rest || function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    0 > t.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
            return n
        }
          , a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.YouTubeEmbed = void 0;
        let o = a(n(5536))
          , i = n(6343);
        t.YouTubeEmbed = e => {
            var t = r(e, []);
            return (0,
            i.formatData)(o.default, t)
        }
    },
    6343: function(e, t) {
        "use strict";
        function n(e, t, n=!1) {
            return t ? Object.keys(e).filter(e => n ? !t.includes(e) : t.includes(e)).reduce( (t, n) => (t[n] = e[n],
            t), {}) : {}
        }
        function r(e, t, n, r) {
            let a = r && Object.keys(r).length > 0 ? new URL(Object.values(r)[0],e) : new URL(e);
            return t && n && t.forEach(e => {
                n[e] && a.searchParams.set(e, n[e])
            }
            ),
            a.toString()
        }
        function a(e, t, n, a, o) {
            var i;
            if (!t)
                return `<${e}></${e}>`;
            let s = (null === (i = t.src) || void 0 === i ? void 0 : i.url) ? Object.assign(Object.assign({}, t), {
                src: r(t.src.url, t.src.params, a, o)
            }) : t
              , l = Object.keys(Object.assign(Object.assign({}, s), n)).reduce( (e, t) => {
                let r = null == n ? void 0 : n[t]
                  , a = s[t]
                  , o = null != r ? r : a
                  , i = !0 === o ? t : `${t}="${o}"`;
                return o ? e + ` ${i}` : e
            }
            , "");
            return `<${e}${l}></${e}>`
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.formatData = t.createHtml = t.formatUrl = void 0,
        t.formatUrl = r,
        t.createHtml = a,
        t.formatData = function(e, t) {
            var o, i, s, l, u;
            let c = n(t, null === (o = e.scripts) || void 0 === o ? void 0 : o.reduce( (e, t) => [...e, ...Array.isArray(t.params) ? t.params : []], []))
              , d = n(t, null === (s = null === (i = e.html) || void 0 === i ? void 0 : i.attributes.src) || void 0 === s ? void 0 : s.params)
              , f = n(t, [null === (u = null === (l = e.html) || void 0 === l ? void 0 : l.attributes.src) || void 0 === u ? void 0 : u.slugParam])
              , g = n(t, [...Object.keys(c), ...Object.keys(d), ...Object.keys(f)], !0);
            return Object.assign(Object.assign({}, e), {
                html: e.html ? a(e.html.element, e.html.attributes, g, d, f) : null,
                scripts: e.scripts ? e.scripts.map(e => Object.assign(Object.assign({}, e), {
                    url: r(e.url, e.params, c)
                })) : null
            })
        }
    },
    1283: function(e) {
        "use strict";
        e.exports = JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')
    },
    3079: function(e) {
        "use strict";
        e.exports = JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')
    },
    5536: function(e) {
        "use strict";
        e.exports = JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(9498),
        t(178)
    }),
    _N_E = e.O()
}
]);
