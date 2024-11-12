(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[18], {
    4228: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/ti84calc", function() {
            return n(317)
        }
        ])
    },
    317: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Page: function() {
                return c
            },
            __toc: function() {
                return u
            }
        });
        var a = n(2676)
          , i = n(6318)
          , r = n(2182)
          , o = n(4215);
        n(4214);
        var s = n(4603)
          , l = n(5867)
          , d = n.n(l);
        function c() {
            let e = Object.assign({
                main: "main",
                div: "div"
            }, (0,
            s.a)());
            return (0,
            a.jsxs)(e.main, {
                className: "flex flex-col items-center",
                children: [(0,
                a.jsx)(d(), {
                    src: "/calc/jquery-3.6.3.min.js",
                    strategy: "beforeInteractive"
                }), (0,
                a.jsx)(d(), {
                    src: "/calc/jquery-ui.min.js",
                    strategy: "beforeInteractive"
                }), (0,
                a.jsx)(d(), {
                    src: "/calc/bundle-obfuscated.js",
                    strategy: "beforeInteractive"
                }), (0,
                a.jsx)(d(), {
                    src: "/calc/main.js",
                    strategy: "beforeInteractive"
                }), (0,
                a.jsx)(e.div, {
                    id: "calculatorContainer",
                    className: "fixed",
                    children: (0,
                    a.jsx)(e.div, {
                        id: "calculatorDiv",
                        className: "calculatorDiv fixed top-0 z-[1040]"
                    })
                }), (0,
                a.jsx)(d(), {
                    children: "startTI84()"
                })]
            })
        }
        let u = [];
        function g(e) {
            return (0,
            a.jsx)(c, {})
        }
        let p = {
            MDXContent: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , {wrapper: t} = Object.assign({}, (0,
                s.a)(), e.components);
                return t ? (0,
                a.jsx)(t, {
                    ...e,
                    children: (0,
                    a.jsx)(g, {
                        ...e
                    })
                }) : g(e)
            },
            pageOpts: {
                filePath: "src/pages/ti84calc.mdx",
                route: "/ti84calc",
                frontMatter: {
                    title: "TI 84 Calculator Online - Free Graphing Calculator Simulator",
                    description: "Use the TI 84 Calculator Online for free graphing and scientific calculations. Perfect for students and professionals. Supports TI-84 Plus & CE models."
                },
                timestamp: 1729072264e3,
                pageMap: [{
                    kind: "Meta",
                    data: {
                        index: {
                            type: "page",
                            title: "vuvu.js",
                            display: "hidden",
                            theme: {}
                        },
                        ti84calc: {
                            type: "page",
                            title: "TI-84 Calculator",
                            display: "hidden",
                            theme: {}
                        },
                        ti30calc: {
                            type: "page",
                            title: "TI-30xs Calculator",
                            display: "hidden",
                            theme: {}
                        },
                        ti30: {
                            type: "page",
                            title: "TI-30XS Calculator",
                            theme: {}
                        },
                        docs: {
                            title: "manual",
                            type: "page"
                        }
                    }
                }, {
                    kind: "Folder",
                    name: "docs",
                    route: "/docs",
                    children: [{
                        kind: "Folder",
                        name: "TI-84-Plus-CE-Getting-Started-Guide",
                        route: "/docs/TI-84-Plus-CE-Getting-Started-Guide",
                        children: [{
                            kind: "MdxPage",
                            name: "Error-Conditions",
                            route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Error-Conditions",
                            frontMatter: {
                                title: "Diagnosing and Correcting Error Conditions",
                                description: "Learn to diagnose and correct error conditions on the TI-84 Plus CE calculator with helpful tips and step-by-step guidance."
                            }
                        }, {
                            kind: "Folder",
                            name: "Setting-Up-the-Calculator-Modes",
                            route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Setting-Up-the-Calculator-Modes",
                            children: [{
                                kind: "MdxPage",
                                name: "Changing-Mode-Settings",
                                route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Setting-Up-the-Calculator-Modes/Changing-Mode-Settings",
                                frontMatter: {
                                    title: "Changing Mode Settings",
                                    description: "Learn how to change mode settings on the TI-84 calculator for optimal performance and display options. Follow our easy step-by-step guide."
                                }
                            }, {
                                kind: "MdxPage",
                                name: "Setting-Modes",
                                route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Setting-Up-the-Calculator-Modes/Setting-Modes",
                                frontMatter: {
                                    title: "Setting Modes",
                                    description: "Learn how to set modes on the TI-84 calculator, including switching between MathPrint™ and Classic modes for optimal use."
                                }
                            }, {
                                kind: "Meta",
                                data: {
                                    "Setting-Modes": "Setting Modes",
                                    "Changing-Mode-Settings": "Changing Mode Settings"
                                }
                            }]
                        }, {
                            kind: "MdxPage",
                            name: "Setting-Up-the-Calculator-Modes",
                            route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Setting-Up-the-Calculator-Modes",
                            frontMatter: {
                                title: "Setting Up the Calculator Modes",
                                description: "Learn how to set up calculator modes on the TI-84 for optimal display and interpretation of answers, graphs, and more."
                            }
                        }, {
                            kind: "MdxPage",
                            name: "Using-Your-TI-84-Plus-CE",
                            route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Using-Your-TI-84-Plus-CE",
                            frontMatter: {
                                title: "Using Your TI-84 Plus CE Graphing Calculator",
                                description: "Discover the TI-84 Plus CE graphing calculator's features, including a color display, rechargeable battery, and pre-loaded apps for math and science."
                            }
                        }, {
                            kind: "Folder",
                            name: "Using-the-Keyboard",
                            route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Using-the-Keyboard",
                            children: [{
                                kind: "MdxPage",
                                name: "Setting-the-Display-Brightness",
                                route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Using-the-Keyboard/Setting-the-Display-Brightness",
                                frontMatter: {
                                    title: "TI 84 Calculator Online Manual",
                                    description: "Learn how to adjust the display brightness on your TI-84 calculator and understand its automatic dimming feature for optimal viewing."
                                }
                            }, {
                                kind: "MdxPage",
                                name: "Turning-the-TI-84-Plus-CE-On-and-Off",
                                route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Using-the-Keyboard/Turning-the-TI-84-Plus-CE-On-and-Off",
                                frontMatter: {
                                    title: "Turning the TI-84 Plus CE On and Off",
                                    description: "Learn how to turn your TI-84 Plus CE calculator on and off, including features like Automatic Power Down and Constant Memory."
                                }
                            }, {
                                kind: "MdxPage",
                                name: "Using-the-TI-84-Plus-CE-Keyboard",
                                route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Using-the-Keyboard/Using-the-TI-84-Plus-CE-Keyboard",
                                frontMatter: {
                                    title: "Using the TI-84 Plus CE Keyboard",
                                    description: "Learn how to effectively use the TI-84 Plus CE keyboard, including function keys and shortcuts for enhanced calculator performance."
                                }
                            }, {
                                kind: "Meta",
                                data: {
                                    "Turning-the-TI-84-Plus-CE-On-and-Off": "Turning the TI-84 Plus CE On and Off",
                                    "Using-the-TI-84-Plus-CE-Keyboard": "Using the TI-84\xa0Plus CE Keyboard",
                                    "Setting-the-Display-Brightness": "Setting the Display Brightness"
                                }
                            }]
                        }, {
                            kind: "MdxPage",
                            name: "Using-the-Keyboard",
                            route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/Using-the-Keyboard"
                        }, {
                            kind: "MdxPage",
                            name: "What's-New",
                            route: "/docs/TI-84-Plus-CE-Getting-Started-Guide/What's-New",
                            frontMatter: {
                                title: "What's New in TI-84 Plus CE",
                                description: "Discover the latest updates for the TI-84 Plus CE, including new apps, features, and enhancements to improve your calculator experience."
                            }
                        }, {
                            kind: "Meta",
                            data: {
                                "What's-New": "What's New",
                                "Using-Your-TI-84-Plus-CE": "Using Your TI-84 Plus CE",
                                "Using-the-Keyboard": "Using the Keyboard",
                                "Setting-Up-the-Calculator-Modes": "Setting Up the Calculator Modes",
                                "Error-Conditions": "Error Conditions"
                            }
                        }]
                    }, {
                        kind: "MdxPage",
                        name: "TI-84-Plus-CE-Getting-Started-Guide",
                        route: "/docs/TI-84-Plus-CE-Getting-Started-Guide",
                        frontMatter: {
                            title: "TI-84 Plus CE Getting Started Guide",
                            description: null
                        }
                    }, {
                        kind: "Meta",
                        data: {
                            index: "index",
                            "TI-84-Plus-CE-Getting-Started-Guide": "TI-84 Plus CE Getting Started Guide"
                        }
                    }, {
                        kind: "MdxPage",
                        name: "index",
                        route: "/docs",
                        frontMatter: {
                            title: "TI 84 Calculator Online Manual",
                            description: null
                        }
                    }]
                }, {
                    kind: "MdxPage",
                    name: "index",
                    route: "/",
                    frontMatter: {
                        title: "TI 84 Calculator Online - Free Graphing Calculator Simulator",
                        description: "Use the TI 84 Calculator Online for free graphing and scientific calculations. Perfect for students and professionals. Supports TI-84 Plus & CE models."
                    }
                }, {
                    kind: "MdxPage",
                    name: "ti30",
                    route: "/ti30",
                    frontMatter: {
                        title: "TI-30XS Calculator Online - Free TI-30X, TI30 Calculator Simulator",
                        description: "Use our free TI-30XS calculator online simulator to solve math and science problems with ease. Supports TI-30X, TI30 models, perfect for students and professionals."
                    }
                }, {
                    kind: "MdxPage",
                    name: "ti30calc",
                    route: "/ti30calc",
                    frontMatter: {
                        title: "TI-30XS Calculator Online - Free TI-30X, TI30 Calculator Simulator",
                        description: "Use our free TI-30XS calculator online simulator to solve math and science problems with ease. Supports TI-30X, TI30 models, perfect for students and professionals."
                    }
                }, {
                    kind: "MdxPage",
                    name: "ti84calc",
                    route: "/ti84calc",
                    frontMatter: {
                        title: "TI 84 Calculator Online - Free Graphing Calculator Simulator",
                        description: "Use the TI 84 Calculator Online for free graphing and scientific calculations. Perfect for students and professionals. Supports TI-84 Plus & CE models."
                    }
                }],
                flexsearch: {
                    codeblocks: !0
                },
                title: "TI 84 Calculator Online - Free Graphing Calculator Simulator",
                headings: u
            },
            pageNextRoute: "/ti84calc",
            nextraLayout: r.ZP,
            themeConfig: o.Z
        };
        t.default = (0,
        i.j)(p)
    },
    4215: function(e, t, n) {
        "use strict";
        var a = n(2676)
          , i = n(7954);
        t.Z = {
            logo: (0,
            a.jsx)("span", {
                children: "TI 84 Calculator Online"
            }),
            project: {
                link: "mailto: support@ti84calc.com",
                icon: (0,
                a.jsxs)("svg", {
                    class: "w-6 h-6 text-gray-800 dark:text-white",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: [(0,
                    a.jsx)("path", {
                        d: "M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"
                    }), (0,
                    a.jsx)("path", {
                        d: "M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"
                    })]
                })
            },
            editLink: {
                component: null
            },
            feedback: {
                content: null
            },
            gitTimestamp: null,
            useNextSeoProps() {
                let {asPath: e} = (0,
                i.useRouter)()
                  , t = {
                    canonical: "https://ti84calc.com".concat(e),
                    titleTemplate: "%s"
                };
                return "/" !== e && (t.titleTemplate = "%s | TI 84 Calculator Online"),
                t
            },
            head: (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "76x76",
                    href: "/static/favicons/apple-touch-icon.png"
                }), (0,
                a.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/static/favicons/favicon-32x32.png"
                }), (0,
                a.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/static/favicons/favicon-16x16.png"
                }), (0,
                a.jsx)("link", {
                    rel: "manifest",
                    href: "/static/favicons/site.webmanifest"
                }), (0,
                a.jsx)("link", {
                    rel: "mask-icon",
                    href: "/static/favicons/safari-pinned-tab.svg",
                    color: "#5bbad5"
                })]
            }),
            footer: {
                text: (0,
                a.jsxs)("span", {
                    children: [new Date().getFullYear(), " \xa9", " ", (0,
                    a.jsx)("a", {
                        href: "/",
                        target: "_blank",
                        children: "TI 84 Calculator Online - Free Graphing Calculator Simulator"
                    }), "."]
                })
            }
        }
    },
    5184: function() {}
}, function(e) {
    e.O(0, [511, 888, 774, 179], function() {
        return e(e.s = 4228)
    }),
    _N_E = e.O()
}
]);
