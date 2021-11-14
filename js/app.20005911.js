(function(e) {
    function t(t) {
        for (
            var a, s, o = t[0], l = t[1], c = t[2], d = 0, p = []; d < o.length; d++
        )
            (s = o[d]),
            Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
            (i[s] = 0);
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        u && u(t);
        while (p.length) p.shift()();
        return r.push.apply(r, c || []), n();
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== i[l] && (a = !1);
            }
            a && (r.splice(t--, 1), (e = s((s.s = n[0]))));
        }
        return e;
    }
    var a = {},
        i = { app: 0 },
        r = [];

    function s(t) {
        if (a[t]) return a[t].exports;
        var n = (a[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
    }
    (s.m = e),
    (s.c = a),
    (s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function(e) {
        "undefined" !== typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(e, t) {
        if ((1 & t && (e = s(e)), 8 & t)) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
            (s.r(n),
                Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                2 & t && "string" != typeof e)
        )
            for (var a in e)
                s.d(
                    n,
                    a,
                    function(t) {
                        return e[t];
                    }.bind(null, a)
                );
        return n;
    }),
    (s.n = function(e) {
        var t =
            e && e.__esModule ?

            function() {
                return e["default"];
            } :
            function() {
                return e;
            };
        return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "");
    var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = o.push.bind(o);
    (o.push = t), (o = o.slice());
    for (var c = 0; c < o.length; c++) t(o[c]);
    var u = l;
    r.push([0, "chunk-vendors"]), n();
})({
    0: function(e, t, n) {
        e.exports = n("56d7");
    },
    "0845": function(e, t, n) {
        "use strict";
        n("6131");
    },
    1: function(e, t) {},
    2: function(e, t) {},
    4061: function(e, t, n) {},
    4942: function(e, t) {
        (function() {
            var e = 32;

            function t() {
                var t = document.documentElement.clientWidth / 750;
                document.documentElement.style.fontSize = e * Math.min(t, 2) + "px";
            }
            window.onresize = function() {
                t();
            };
        })();
    },
    "4fdf": function(e, t, n) {
        "use strict";
        n("4061");
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("2b0e"),
            i = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { attrs: { id: "app" } }, [n("router-view")], 1);
            },
            r = [],
            s = { name: "App" },
            o = s,
            l = (n("5c0b"), n("2877")),
            c = Object(l["a"])(o, i, r, !1, null, null, null),
            u = c.exports,
            d = (n("4942"), n("8c4f")),
            p = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [
                    n(
                        "div", { staticClass: "header flex_h_center_center" }, [
                            n("van-icon", {
                                staticStyle: { "margin-right": "10px" },
                                attrs: { name: "apps-o" },
                            }),
                            e._v(" RCT (RCT)"),
                        ],
                        1
                    ),
                    n("div", { staticClass: "padd_40" }, [
                        e._m(0),
                        n("div", { staticClass: "flex_h_between" }),
                        n(
                            "div", { staticClass: "recomment_list" },
                            e._l(e.recomments, function(t, a) {
                                return n(
                                    "div", {
                                        key: a,
                                        staticClass: "recomment_list_item flex_h",
                                        on: {
                                            click: function(n) {
                                                return e.goto(t.routeName);
                                            },
                                        },
                                    }, [
                                        n("van-icon", { attrs: { name: t.icon, size: "35" } }),
                                        n(
                                            "div", {
                                                staticClass: "flex1 flex_v ellipsis",
                                                staticStyle: { "margin-left": "8px" },
                                            }, [
                                                n(
                                                    "div", { staticClass: "smallerGrey2Txt ellipsis alignLeft" }, [e._v(e._s(t.title))]
                                                ),
                                                n(
                                                    "div", { staticClass: "minestGrey1Txt ellipsis alignLeft" }, [e._v(e._s(t.desc))]
                                                ),
                                            ]
                                        ),
                                    ],
                                    1
                                );
                            }),
                            0
                        ),
                        n("br"),
                        n("p", [
                            e._v(
                                "It is recommended to use TP wallet Imtoken MetaMask and other BNB wallets to access."
                            ),
                        ]),
                    ]),
                ]);
            },
            m = [
                function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "" }, [
                        n("div", { staticClass: "" }, [e._v("")]),
                        n(
                            "div", { staticClass: "", staticStyle: { "white-space": "normal" } }, [
                                e._v(""),
                                e._v(""),
                                e._v(""),
                                e._v(""),
                                e._v(""),
                                e._v(""),
                                e._v(""),
                            ]
                        ),
                    ]);
                },
            ],
            f = n("ad06");
        a["a"].use(f["a"]);
        var v = {
                name: "home",
                data: function() {
                    return { banners: [], recomments: [] };
                },
                created: function() {
                    this.getRecomments();
                },
                methods: {
                    getRecomments: function() {
                        this.recomments = [{
                            icon: "exchange",
                            title: "RCT sales",
                            desc: "Automatic operation by smart contract (in progress)",
                            routeName: "DappHome",
                        }, ];
                    },
                    goto: function(e) {
                        this.$router.push(e);
                    },
                    goHref: function(e) {
                        window.location.href = e;
                    },
                },
            },
            _ = v,
            b = (n("585a"), Object(l["a"])(_, p, m, !1, null, null, null)),
            y = b.exports,
            g = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [
                    a("div", { staticClass: "header flex_h_center_center" }, [
                        a("div", {
                            staticClass: "bg-img back_bg",
                            on: { click: e.goBack },
                        }),
                        a("div", { staticClass: "bigTxt flex1" }, [a("img", { attrs: { src: n("cf1c"), alt: "", height: "100px" } })]),
                        a("div", { staticClass: "back_bg_placeholder" }),
                    ]),
                    e.loading ?
                    a("div", { staticClass: "loading_section" }, [
                        a("img", { attrs: { src: n(""), alt: "" } }),
                    ]) :
                    e._e(),
                    a("div", { staticClass: "padd_40" }, [
                        a("div", { staticClass: "asset_section flex_h" }, [
                            a("div", { staticClass: "flex1 flex_v" }, [
                                a("div", { staticClass: "smallestBlueTxt alignLeft mb_5" }, [
                                    e._v("Your BNB Balance"),
                                ]),
                                a(
                                    "div", { staticClass: "normalInverseTxt ellipsis alignLeft" }, [e._v(e._s(e.balance))]
                                ),
                            ]),
                            a("div", { staticClass: "flex1 flex_v" }, [
                                a("div", { staticClass: "smallestBlueTxt alignLeft" }, [
                                    e._v("Your RCT Balance"),
                                ]),
                                a(
                                    "div", { staticClass: "normalInverseTxt ellipsis alignLeft" }, [e._v(e._s(e.parisBalance))]
                                ),
                            ]),
                        ]),
                        a("div", { staticClass: "padd_40" }, [
                            a("div", { staticClass: "from_item flex_v" }, [
                                a("div", { staticClass: "smallerGrey2Txt alignLeft mb_10" }, [
                                    e._v("BNB"),
                                ]),
                                a("div", { staticClass: "input_wrap flex_h_center" }, [
                                    a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.fromAmount,
                                            expression: "fromAmount",
                                        }, ],
                                        staticClass: "bigTxt flex1",
                                        attrs: { type: "text", placeholder: "Enter Ether amount" },
                                        domProps: { value: e.fromAmount },
                                        on: {
                                            input: [
                                                function(t) {
                                                    t.target.composing || (e.fromAmount = t.target.value);
                                                },
                                                function(t) {
                                                    e.toAmount = e.accMul(e.fromAmount, 3500000000);
                                                },
                                            ],
                                        },
                                    }),
                                    a("div", { staticClass: "hr" }),
                                    a("div", { staticClass: "smallestGrey1Txt" }, [e._v("BNB")]),
                                ]),
                            ]),
                            a("div", { staticClass: "from_item flex_v" }, [
                                a("div", { staticClass: "smallerGrey2Txt alignLeft mb_10" }, [
                                    e._v("RCT"),
                                ]),
                                a("div", { staticClass: "input_wrap flex_h_center" }, [
                                    a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.toAmount,
                                            expression: "toAmount",
                                        }, ],
                                        staticClass: "bigTxt flex1",
                                        attrs: { type: "text", placeholder: "RCT", disabled: "" },
                                        domProps: { value: e.toAmount },
                                        on: {
                                            input: function(t) {
                                                t.target.composing || (e.toAmount = t.target.value);
                                            },
                                        },
                                    }),
                                    a("div", { staticClass: "hr" }),
                                    a("div", { staticClass: "smallestGrey1Txt" }, [e._v("RCT")]),
                                ]),
                            ]),
                            a(
                                "div", {
                                    staticClass: "submit_btn flex_h_center_center normalInverseTxt",
                                    on: { click: e.submit },
                                }, [e._v("BUY RCT")]
                            ),
                            a(
                                "div", {

                                    staticClass: "button1",

                                    on: { click: e.clickme },
                                }, [e._v("Add RCT to BNB wallets(after buy)")]
                            ),
                        ]),
                        e._m(0),
                        a(
                            "div", {
                                staticClass: "a_link2"
                            }, [e._v("End-in:")]
                        ),
                        a(
                            "p", [
                                a("van-count-down", {
                                    attrs: {
                                        millisecond: "",
                                        time: e.time,
                                        format: "DD HH:mm:ss:SS",
                                    },
                                }),
                            ],
                            1
                        ),

                    ]),
                ]);
            },
            h = [
                function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticStyle: { "text-align": "left" } }, [
                        n("h5", [e._v("Rule")]),
                        n("ul", [
                            n("li", [
                                e._v(
                                    "1. It is recommended to use TP wallet Imtoken MetaMask and other BNB wallets."
                                ),
                            ]),
                            n("li", [e._v("")]),
                            n("li", [e._v("2. This is the only sale of RCT.")]),
                            n("li", [
                                e._v(
                                    "3. The sales ratio is 1 BNB = 3,500,000,000 RCT, and it will end when the sales are completed or any conditions are reached."
                                ),
                            ]),
                            n("li", [e._v("")]),
                            n("li", [e._v("Circulating Supply at Listing: 21,000,000,000,000 RCT")]),
                            n("li", [
                                e._v("Tokens Available in  Public Sale: 7,000,000,000,000 RCT (30% )"),
                            ]),
                            n("li", [
                                e._v(
                                    "TOKEN contract address: 0x19dE9A7085B17Ca582E2D27a5eF20CD46113F416"
                                ),
                            ]),

                            n("li", [e._v("")]),
                        ]),
                        n("br"),
                    ]);
                },
            ],
            x =
            (n("a9e3"),
                n("d3b7"),
                n("ac1f"),
                n("25f0"),
                n("5319"),
                n("1276"),
                n("96cf"),
                n("1da1")),
            w = n("7a82"),
            T = (n("4c53"), n("3835")),
            k = n("c030"),
            C = n("d399"),
            O = n("9dcd"),
            I = n.n(O),
            F = {
                data: function() {
                    return { provider: {}, signer: {}, chainId: 0, myAddress: "" };
                },
                created: function() {
                    var e = this;
                    return Object(x["a"])(
                        regeneratorRuntime.mark(function t() {
                            var n, a;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            if ("undefined" !== typeof window.getPrivateKey) {
                                                t.next = 16;
                                                break;
                                            }
                                            if ("undefined" != typeof ethereum) {
                                                t.next = 7;
                                                break;
                                            }
                                            return (
                                                Object(C["a"])(
                                                    "Recommend to use TP wallet, imToken, MetaMask."
                                                ),
                                                (t.next = 5),
                                                e.waitInject()
                                            );
                                        case 5:
                                            t.next = 14;
                                            break;
                                        case 7:
                                            window.ethereum.enable(),
                                                (n = new k["a"].providers.Web3Provider(
                                                    window.ethereum
                                                )),
                                                window.ethereum.isMetaMask &&
                                                window.ethereum
                                                .request({ method: "net_version" })
                                                .then(function(t) {
                                                    e.chainId = t;
                                                })
                                                .catch(function(e) {
                                                    console.log(e);
                                                }),
                                                window.ethereum.on("accountsChanged", function(e) {
                                                    window.location.reload();
                                                }),
                                                window.ethereum.on("chainChanged", function(e) {
                                                    window.location.reload();
                                                }),
                                                (e.provider = n),
                                                (e.signer = n.getSigner());
                                        case 14:
                                            t.next = 19;
                                            break;
                                        case 16:
                                            (a = window.getPrivateKey()),
                                            (e.provider = new k["a"].providers.JsonRpcProvider({
                                                url: "http://127.0.0.1:7545",
                                            })),
                                            (e.signer = new k["a"].Wallet(a, e.provider));
                                        case 19:
                                            return (t.next = 21), e.getAddress();
                                        case 21:
                                        case "end":
                                            return t.stop();
                                    }
                            }, t);
                        })
                    )();
                },
                methods: {
                    waitInject: function() {
                        var e = this;
                        return Object(x["a"])(
                            regeneratorRuntime.mark(function t() {
                                var n;
                                return regeneratorRuntime.wrap(function(t) {
                                    while (1)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (
                                                    (clearInterval(e.waitInjectTimer),
                                                        "undefined" !== typeof window.getPrivateKey)
                                                ) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                (e.waitInjectTimer = setTimeout(function() {
                                                    e.waitInject();
                                                }, 1e3)),
                                                (t.next = 11);
                                                break;
                                            case 5:
                                                return (
                                                    clearInterval(e.waitInjectTimer),
                                                    (n = window.getPrivateKey()),
                                                    (e.provider = new k["a"].providers.JsonRpcProvider({
                                                        url: "http://127.0.0.1:7545",
                                                    })),
                                                    (e.signer = new k["a"].Wallet(n, e.provider)),
                                                    (t.next = 11),
                                                    e.getAddress()
                                                );
                                            case 11:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )();
                    },
                    isQKI: function() {
                        var e = this;
                        return Object(x["a"])(
                            regeneratorRuntime.mark(function t() {
                                var n;
                                return regeneratorRuntime.wrap(function(t) {
                                    while (1)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (t.next = 2), e.provider.getNetwork();
                                            case 2:
                                                return (n = t.sent), n.chainId, t.abrupt("return", !0);
                                            case 6:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )();
                    },
                    to: function(e) {
                        return e
                            .then(function(e) {
                                return [null, e];
                            })
                            .catch(function(e) {
                                return [e];
                            });
                    },
                    getAddress: function() {
                        var e = this;
                        return Object(x["a"])(
                            regeneratorRuntime.mark(function t() {
                                var n, a, i, r;
                                return regeneratorRuntime.wrap(function(t) {
                                    while (1)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (t.next = 2), e.to(e.signer.getAddress());
                                            case 2:
                                                (n = t.sent),
                                                (a = Object(T["a"])(n, 2)),
                                                (i = a[0]),
                                                (r = a[1]),
                                                null == i && (e.myAddress = r);
                                            case 7:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )();
                    },
                    queryTransation: function(e, t) {
                        var n = this;
                        return Object(x["a"])(
                            regeneratorRuntime.mark(function a() {
                                return regeneratorRuntime.wrap(function(a) {
                                    while (1)
                                        switch ((a.prev = a.next)) {
                                            case 0:
                                                return (
                                                    (a.next = 2),
                                                    n.provider.waitForTransaction(e).then(
                                                        (function() {
                                                            var e = Object(x["a"])(
                                                                regeneratorRuntime.mark(function e(n) {
                                                                    return regeneratorRuntime.wrap(function(e) {
                                                                        while (1)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    0 === n.status ?
                                                                                        Object(C["a"])(
                                                                                            "Contract call failed..",
                                                                                            n
                                                                                        ) :
                                                                                        Object(C["a"])(
                                                                                            "The contract is successfully called..",
                                                                                            n
                                                                                        ),
                                                                                        t && t();
                                                                                case 2:
                                                                                case "end":
                                                                                    return e.stop();
                                                                            }
                                                                    }, e);
                                                                })
                                                            );
                                                            return function(t) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        })()
                                                    )
                                                );
                                            case 2:
                                            case "end":
                                                return a.stop();
                                        }
                                }, a);
                            })
                        )();
                    },
                    getlocalStorageEth: function() {
                        return localStorage.eth;
                    },
                },
            };
        (I.a.DP = 18), (I.a.NE = -19), (window.Big = I.a);
        var L = [{
                    inputs: [{
                        internalType: "uint256",
                        name: "_initialSupply",
                        type: "uint256",
                    }, ],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor",
                },
                {
                    anonymous: !1,
                    inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "_owner",
                            type: "address",
                        },
                        {
                            indexed: !0,
                            internalType: "address",
                            name: "_spender",
                            type: "address",
                        },
                        {
                            indexed: !1,
                            internalType: "uint256",
                            name: "_value",
                            type: "uint256",
                        },
                    ],
                    name: "Approval",
                    type: "event",
                },
                {
                    anonymous: !1,
                    inputs: [{
                            indexed: !0,
                            internalType: "address",
                            name: "_from",
                            type: "address",
                        },
                        {
                            indexed: !0,
                            internalType: "address",
                            name: "_to",
                            type: "address",
                        },
                        {
                            indexed: !1,
                            internalType: "uint256",
                            name: "_value",
                            type: "uint256",
                        },
                    ],
                    name: "Transfer",
                    type: "event",
                },
                {
                    constant: !0,
                    inputs: [
                        { internalType: "address", name: "", type: "address" },
                        { internalType: "address", name: "", type: "address" },
                    ],
                    name: "allowance",
                    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                },
                {
                    constant: !1,
                    inputs: [
                        { internalType: "address", name: "_spender", type: "address" },
                        { internalType: "uint256", name: "_value", type: "uint256" },
                    ],
                    name: "approve",
                    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    constant: !0,
                    inputs: [{ internalType: "address", name: "", type: "address" }],
                    name: "balanceOf",
                    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                },
                {
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{ internalType: "string", name: "", type: "string" }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                },
                {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{ internalType: "string", name: "", type: "string" }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                },
                {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                },
                {
                    constant: !1,
                    inputs: [
                        { internalType: "address", name: "_to", type: "address" },
                        { internalType: "uint256", name: "_value", type: "uint256" },
                    ],
                    name: "transfer",
                    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    constant: !1,
                    inputs: [
                        { internalType: "address", name: "_from", type: "address" },
                        { internalType: "address", name: "_to", type: "address" },
                        { internalType: "uint256", name: "_value", type: "uint256" },
                    ],
                    name: "transferFrom",
                    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                },
            ],
            j = [{
                    inputs: [{
                        internalType: "contract RCTToken",
                        name: "_tokenContract",
                        type: "address",
                    }, ],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor",
                },
                {
                    constant: !1,
                    inputs: [{
                        internalType: "uint256",
                        name: "_numberOfTokens",
                        type: "uint256",
                    }, ],
                    name: "buyTokens",
                    outputs: [],
                    payable: !0,
                    stateMutability: "payable",
                    type: "function",
                },
                {
                    constant: !1,
                    inputs: [],
                    name: "endSale",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    constant: !0,
                    inputs: [],
                    name: "tokenContract",
                    outputs: [
                        { internalType: "contract RCTToken", name: "", type: "address" },
                    ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                },
            ];
        a["a"].use(w["a"]);
        var S = {
                name: "dappHome",
                data: function() {
                    return {
                        balance: "",
                        parisBalance: "",
                        parisCoinName: "BNB",
                        coinName: "BNB",
                        tokencontractAddress: "0x19dE9A7085B17Ca582E2D27a5eF20CD46113F416",
                        salecontractAddress: "0x2D79fe043dD4F4de9B2Ec0EDB6C2D0A18a1391f6",
                        loading: !1,
                        fromAmount: "1",
                        toAmount: "3500000000",
                        time: 16239546e5 - Date.now(),
                    };
                },
                mixins: [F],
                mounted: function() {
                    this.getDetail();
                },
                methods: {
                    accMul: function(e, t) {
                        if (0 == e || 0 == t) return 0;
                        var n = 0,
                            a = e.toString(),
                            i = t.toString();
                        (n += a.split(".")[1] ? a.split(".")[1].length : 0),
                        (n += i.split(".")[1] ? i.split(".")[1].length : 0);
                        var r = Number(a.replace(".", "")),
                            s = Number(i.replace(".", ""));
                        return (r * s) / Math.pow(10, n);
                    },
                    goBack: function() {
                        this.$router.go(-1);
                    },
                    getDetail: function() {
                        var e = this;
                        return Object(x["a"])(
                            regeneratorRuntime.mark(function t() {
                                var n;
                                return regeneratorRuntime.wrap(function(t) {
                                    while (1)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (e.loading = !0), (t.next = 3), e.isQKI();
                                            case 3:
                                                if (t.sent) {
                                                    t.next = 6;
                                                    break;
                                                }
                                                return (e.loading = !1), t.abrupt("return");
                                            case 6:
                                                (e.loading = !1),
                                                (n = new k["a"].Contract(
                                                    e.tokencontractAddress,
                                                    L,
                                                    e.signer
                                                )),
                                                e.signer.getAddress().then(function(t) {
                                                    e.provider.getBalance(t).then(function(t) {
                                                            var n = k["a"].utils.formatEther(t);
                                                            e.balance = parseFloat(n);
                                                        }),
                                                        n.balanceOf(t).then(
                                                            function(t) {
                                                                var n = t;
                                                                e.parisBalance = parseFloat(n);
                                                            },
                                                            function(e) {
                                                                "INSUFFICIENT_FUNDS" == e.code ?
                                                                    Object(C["a"])(
                                                                        "Insufficient miner fees.."
                                                                    ) :
                                                                    4001 == e.code ?
                                                                    Object(C["a"])("User canceled") :
                                                                    Object(C["a"])("Not enough BNB balance.");
                                                            }
                                                        );
                                                });
                                            case 9:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )();
                    },

                    clickme: function() {
                        window.location.href = "https://metamask.zendesk.com/hc/en-us/articles/360015489031";
                    },
                    submit: function() {
                        function e(e) {
                            var t = /^[+-]?[]?[]*\.[]*$/;
                            return t.test(e);
                        }
                        this.loading ?
                            Object(C["a"])("Please connect with wallet..") :
                            e(this.toAmount) ?
                            Object(C["a"])("Please make sure RCT is an integer..") :
                            this.wqkiExchangeQki();
                    },
                    wqkiExchangeQki: function() {
                        var e = this,
                            t = new k["a"].Contract(this.salecontractAddress, j, this.signer);
                        t.buyTokens(this.toAmount, {
                            value: k["a"].utils.parseUnits(this.fromAmount),
                            gasLimit: 461602,
                        }).then(
                            function(t) {
                                var n = t.hash;
                                Object(C["a"])(
                                        "Submit successfully, wait for the block to be confirmed, please wait a moment.."
                                    ),
                                    e.provider.waitForTransaction(n).then(function(t) {
                                        (e.loading = !1),
                                        1 == t.status ?
                                            (Object(C["a"])(
                                                    "The transaction is now confirmed and the exchange is successful...",
                                                    t
                                                ),
                                                window.location.reload()) :
                                            Object(C["a"])(
                                                "The transaction is confirmed , but the exchange failed, please confirm whether the quantity is correct..",
                                                t
                                            );
                                    });
                            },
                            function(t) {
                                (e.loading = !1),
                                "INSUFFICIENT_FUNDS" == t.code ?
                                    Object(C["a"])("Insufficient miner fees..") :
                                    4001 == t.code ?
                                    Object(C["a"])("User canceled") :
                                    Object(C["a"])("Not enough BNB balance.");
                            }
                        );
                    },
                },
            },
            E = S,
            A = (n("4fdf"), Object(l["a"])(E, g, h, !1, null, null, null)),
            M = A.exports,
            X = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [
                    a("div", { staticClass: "header flex_h_center_center" }, [
                        a("div", {
                            staticClass: "bg-img back_bg",
                            on: { click: e.goBack },
                        }),
                        a("div", { staticClass: "bigTxt flex1" }, [e._v("RCT 空投")]),
                        a("div", { staticClass: "back_bg_placeholder" }),
                    ]),
                    e.loading ?
                    a("div", { staticClass: "loading_section" }, [
                        a("img", { attrs: { src: n("cf1c"), alt: "" } }),
                    ]) :
                    e._e(),
                    a("div", { staticClass: "padd_40" }, [
                        e.getlocalStorageEth() ?
                        a("div", [
                            a("div", { staticClass: "from_item grey_bg flex_v" }, [
                                a(
                                    "div", {
                                        staticClass: "smallerGrey2Txt alignLeft mb_10",
                                        staticStyle: { color: "red" },
                                    }, [e._v("分享您的邀请地址，每邀请一人奖励3枚 RCT")]
                                ),
                                a("div", { staticClass: "input_wrap flex_h_between" }, [
                                    a(
                                        "div", {
                                            staticClass: "bigTxt flex1 ellipsis",
                                            attrs: { id: "addre" },
                                        }, [e._v(e._s(e.iaddr()))]
                                    ),
                                    a(
                                        "div", {
                                            staticClass: "copy_btn smallestBlueTxt",
                                            on: { click: e.copy },
                                        }, [e._v("复制")]
                                    ),
                                ]),
                            ]),
                            e._m(0),
                        ]) :
                        e._e(),
                        e.getlocalStorageEth() ?
                        e._e() :
                        a("div", [
                            a("div", { staticClass: "from_item flex_v" }, [
                                a(
                                    "div", { staticClass: "smallerGrey2Txt alignLeft mb_10" }, [e._v("BNB 地址")]
                                ),
                                a("div", { staticClass: "input_wrap flex_h_center" }, [
                                    a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.myAddress,
                                            expression: "myAddress",
                                        }, ],
                                        staticClass: "bigTxt flex1",
                                        attrs: {
                                            type: "text",
                                            placeholder: "BNB 地址",
                                            name: "eth",
                                        },
                                        domProps: { value: e.myAddress },
                                        on: {
                                            input: function(t) {
                                                t.target.composing ||
                                                    (e.myAddress = t.target.value);
                                            },
                                        },
                                    }),
                                ]),
                            ]),
                            a(
                                "div", {
                                    staticClass: "submit_btn flex_h_center_center normalInverseTxt",
                                    on: { click: e.submit },
                                }, [e._v("Receive airdrop")]
                            ),
                        ]),
                        e._m(1),
                    ]),
                ]);
            },
            N = [
                function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "asset_section flex_h" }, [
                        n("div", { staticClass: "flex1 flex_v" }, [
                            n("div", { staticClass: "smallestBlueTxt alignLeft mb_5" }, [
                                e._v("基础奖励"),
                            ]),
                            n("div", { staticClass: "normalInverseTxt ellipsis alignLeft" }, [
                                e._v("5 RCT"),
                            ]),
                        ]),
                        n("div", { staticClass: "flex1 flex_v" }, [
                            n("div", { staticClass: "smallestBlueTxt alignLeft" }, [
                                e._v("邀请奖励"),
                            ]),
                            n("div", { staticClass: "normalInverseTxt ellipsis alignLeft" }, [
                                e._v("3 RCT / 每人"),
                            ]),
                        ]),
                    ]);
                },
                function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticStyle: { "text-align": "left" } }, [
                        n("h5", [e._v("规则")]),
                        n("ul", [
                            n("li", [e._v("·作弊邀请将列入黑名单，停止发放 RCT")]),
                            n("li", [e._v("·空投超过限额，将比例分配发放")]),
                            n("li", [e._v("·RCT 将于活动结束后结算发放")]),
                            n("li", [e._v("·RCT 测试网将于近期启动，请关注官方动态")]),
                            n("li", [
                                e._v(
                                    "·TOKEN合约地址 : 0x19dE9A7085B17Ca582E2D27a5eF20CD46113F416"
                                ),
                            ]),
                            n("li", [
                                e._v(
                                    "·拍卖销毁合约 : 0x2D79fe043dD4F4de9B2Ec0EDB6C2D0A18a1391f6"
                                ),
                            ]),
                        ]),
                        n("br"),
                    ]);
                },
            ],
            P = {
                name: "token",
                data: function() {
                    return {
                        precision: "",
                        name: "",
                        totalAmount: "",
                        shortName: "",
                        address: "",
                        loading: !1,
                    };
                },
                mixins: [F],
                created: function() {},
                methods: {
                    goBack: function() {
                        this.$router.go(-1);
                    },
                    iaddr: function() {
                        return (
                            "https://RCTcoin.com/" + this.getlocalStorageEth().substr(3, 7)
                        );
                    },
                    submit: function() {
                        this.loading ||
                            ("" != this.eth ?
                                (localStorage.setItem("eth", this.myAddress),
                                    window.location.reload()) :
                                Object(C["a"])("请输入BNB 地址"));
                    },
                    copy: function() {
                        document.queryCommandSupported("copy") || Object(C["a"])("不支持");
                        var e = document.createElement("input");
                        (e.value = this.iaddr()),
                        document.body.appendChild(e),
                            e.select(),
                            document.execCommand("Copy"),
                            e.remove(),
                            Object(C["a"])("已复制");
                    },
                },
            },
            H = P,
            R = (n("c054"), Object(l["a"])(H, X, N, !1, null, null, null)),
            B = R.exports,
            $ = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [
                    n("div", { staticClass: "header flex_h_center_center" }, [
                        n("div", {
                            staticClass: "bg-img back_bg",
                            on: { click: e.goBack },
                        }),
                        n("div", { staticClass: "bigTxt flex1" }, [e._v("RCT 空投")]),
                        n("div", { staticClass: "back_bg_placeholder" }),
                    ]),
                    e._m(0),
                ]);
            },
            q = [
                function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "padd_40" }, [
                        n("div", { staticStyle: { "text-align": "left" } }, [
                            n("h5", [e._v("")]),
                            n("pre", [e._v()]),
                        ]),
                    ]);
                },
            ],
            G = {
                name: "Sol",
                data: function() {
                    return {};
                },
                methods: {
                    goBack: function() {
                        this.$router.go(-1);
                    },
                },
            },
            D = G,
            K = (n("0845"), Object(l["a"])(D, $, q, !1, null, null, null)),
            U = K.exports;
        a["a"].use(d["a"]);
        var J = new d["a"]({
                routes: [
                    { path: "/", redirect: "/dappHome" },
                    { path: "/home", name: "home", component: y },
                    { path: "/dappHome", name: "dappHome", component: M },
                    { path: "/token", name: "token", component: B },
                    { path: "/sol", name: "sol", component: U },
                ],
            }),
            Q = n("5596"),
            W = n("2bb1"),
            z = n("e41f");
        n("ae17"), n("4149"), n("598e"), n("c2d8"), n("160b");
        a["a"].use(Q["a"]),
            a["a"].use(W["a"]),
            a["a"].use(C["a"]),
            a["a"].use(z["a"]),
            (a["a"].config.productionTip = !1),
            new a["a"]({
                router: J,
                render: function(e) {
                    return e(u);
                },
            }).$mount("#app");
    },
    "585a": function(e, t, n) {
        "use strict";
        n("bffb");
    },
    "5c0b": function(e, t, n) {
        "use strict";
        n("9c0c");
    },
    6131: function(e, t, n) {},
    "9c0c": function(e, t, n) {},
    "9ff0": function(e, t, n) {},
    ae17: function(e, t, n) {},
    bffb: function(e, t, n) {},
    c054: function(e, t, n) {
        "use strict";
        n("9ff0");
    },
    cf1c: function(e, t, n) {
        e.exports = n.p + "img/logo.png";
    },
});