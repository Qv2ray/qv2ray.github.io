(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{418:function(e,t,a){"use strict";a.r(t);var r=a(16),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"v2ray-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-integration"}},[e._v("#")]),e._v(" V2ray Integration")]),e._v(" "),a("ul",[a("li",[e._v("How does V2ray integrate with Trojan / SSR / etc.")])]),e._v(" "),a("h2",{attrs:{id:"what-is-v2ray-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-v2ray-integration"}},[e._v("#")]),e._v(" What is V2ray Integration")]),e._v(" "),a("p",[e._v("Qv2ray has its special feature, to integrate plugin kernels (SSR / Trojan) with V2ray Core.")]),e._v(" "),a("p",[e._v("Many kernels do not have built-in routing engine, (e.g SSR), they depend on the PAC feature. Qv2ray is now breaking this dependency, where users do not need a PAC file, but V2ray-Core to replace the PAC.")]),e._v(" "),a("h2",{attrs:{id:"why-not-pac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-not-pac"}},[e._v("#")]),e._v(" Why not PAC?")]),e._v(" "),a("p",[e._v("PAC feature has been marked as deprecated by Qv2ray development group. We do not suggest our users to use, below are the reasons:")]),e._v(" "),a("ul",[a("li",[e._v("PAC relies on an existing rule, which can be generated by "),a("code",[e._v("GFWList")]),e._v(" or some other domain lists.")]),e._v(" "),a("li",[e._v("Editing an PAC file locally is difficult, and error-prone, a single typo/syntax error will make the whole PAC file in trouble.")]),e._v(" "),a("li",[e._v("V2ray has its own routing table implementations and "),a("code",[e._v("geoip")]),e._v(", "),a("code",[e._v("geosite")]),e._v(" data is generated from the official providers, they update the list frequently")]),e._v(" "),a("li",[e._v("Using of V2ray Integration is easier than setting up PAC.")])]),e._v(" "),a("h2",{attrs:{id:"how-v2ray-integration-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-v2ray-integration-works"}},[e._v("#")]),e._v(" How V2ray Integration works")]),e._v(" "),a("p",[e._v("There are several steps:")]),e._v(" "),a("ol",[a("li",[e._v("Qv2ray detected an/some outbound config(s) is/are for one/some plugin kernels.")]),e._v(" "),a("li",[e._v("Qv2ray will allocate port, for HTTP inbound and SOCKS inbound (any if enabled) for each kernel.")]),e._v(" "),a("li",[e._v("Qv2ray will replace the kernel plugin outbound to HTTP/SOCKS outbound(s), each corresponded to a specific plugin with appropriate inbound protocol.")]),e._v(" "),a("li",[e._v("New routing table entries will be added to V2ray config file, to route HTTP inbound to the plugin HTTP inbound, and the same with SOCKS")]),e._v(" "),a("li",[e._v("Qv2ray will start all kernel plugins used in this connection config. Then start V2ray.")]),e._v(" "),a("li",[e._v("Qv2ray will collect stats data from V2ray, instead of getting them from individual plugins.")])]),e._v(" "),a("h2",{attrs:{id:"benefit-from-v2ray-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefit-from-v2ray-integration"}},[e._v("#")]),e._v(" Benefit from V2ray Integration")]),e._v(" "),a("ul",[a("li",[e._v("Bypass CN domains and IP addresses.")]),e._v(" "),a("li",[e._v("Bypass Local Area Network Addresses.")]),e._v(" "),a("li",[e._v("Qv2ray’s advanced routing matrix settings.")]),e._v(" "),a("li",[e._v("Custom DNS settings.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);