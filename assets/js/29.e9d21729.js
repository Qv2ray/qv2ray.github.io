(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{397:function(t,o,i){"use strict";i.r(o);var n=i(16),e=Object(n.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"step-3-adding-hosts-into-qv2ray"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#step-3-adding-hosts-into-qv2ray"}},[t._v("#")]),t._v(" Step 3: Adding Hosts into Qv2ray")]),t._v(" "),i("p",[t._v("Qv2ray supports many ways of importing your configuration. To get you started, we have just picked these most common use cases.")]),t._v(" "),i("h2",{attrs:{id:"share-links"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#share-links"}},[t._v("#")]),t._v(" Share Links")]),t._v(" "),i("blockquote",[i("p",[t._v("Share links generally looks like these:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("vmess://")]),t._v("...")]),t._v(" "),i("li",[i("code",[t._v("ss://")]),t._v("...")])])]),t._v(" "),i("p",[t._v("Follow these steps to import them:")]),t._v(" "),i("ol",[i("li",[t._v("Click "),i("strong",[t._v("Import")]),t._v(" button in the main window, or import via "),i("a",{attrs:{href:"qv2ray://open/import/link"}},[t._v("link")]),t._v(".")]),t._v(" "),i("li",[t._v("In the "),i("strong",[t._v("Import File")]),t._v(" dialog, choose import source "),i("strong",[t._v("Share Link")]),t._v(",")]),t._v(" "),i("li",[t._v("Paste your share links into "),i("strong",[t._v("Share Link")]),t._v(" text box.")]),t._v(" "),i("li",[t._v("Click on "),i("strong",[t._v("Import")]),t._v(" button to finish.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("Batched Import You can import multiple share links at a time. Make sure each link takes its single line. :::")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("Broken Links Some broken share links may fail to import, but it doesn't matter. The detailed error will be shown on the right side. Also, it won't stop other entries in a batched import. :::")]),t._v(" "),i("h2",{attrs:{id:"subscription"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#subscription"}},[t._v("#")]),t._v(" Subscription")]),t._v(" "),i("blockquote",[i("p",[t._v("A subscription link usually looks like this: "),i("code",[t._v("https://some-airport.domain/links/YjYyODk?sub=3")])])]),t._v(" "),i("p",[t._v("To import a subscription, follow these steps:")]),t._v(" "),i("ol",[i("li",[t._v("Open "),i("strong",[t._v("GroupEditor")]),t._v(" by clicking "),i("strong",[t._v("Group")]),t._v(" button in main window.")]),t._v(" "),i("li",[t._v("Click the "),i("strong",[t._v("Add Group")]),t._v(" icon button at the left-bottom corner in "),i("strong",[i("a",{attrs:{href:"qv2ray://open/group/connection"}},[t._v("GroupEditor")])]),t._v(" window.")]),t._v(" "),i("li",[t._v("Select the created item in "),i("strong",[t._v("Group List")]),t._v(", whose details will be shown on the right side.")]),t._v(" "),i("li",[t._v("Switch to "),i("strong",[t._v("Subscription Settings")]),t._v(" panel and finalize the configuration:\n"),i("ol",[i("li",[t._v("Name the group by editing "),i("strong",[t._v("Group Name")]),t._v(".")]),t._v(" "),i("li",[t._v("Check "),i("strong",[t._v("This group is a subscription")]),t._v(".")]),t._v(" "),i("li",[t._v("Specify these fields:\n"),i("ul",[i("li",[i("strong",[t._v("Subscription Address")]),t._v(": Use your "),i("strong",[t._v("subscription link")]),t._v(" mentioned above.")]),t._v(" "),i("li",[i("strong",[t._v("Subscription Type")]),t._v(": If the default value won't work, change this to another.")])])]),t._v(" "),i("li",[t._v("Change these fields optionally:\n"),i("ul",[i("li",[i("strong",[t._v("Update Interval")]),t._v(": Qv2ray will notify you when the subscription needs to be updated upon launching. Change this according to your own demands.")]),t._v(" "),i("li",[i("strong",[t._v("Importing Filters")]),t._v(": Qv2ray can filter the nodes imported from your subscription when configured. You can figure this out by yourself.")])])])])]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("Update Subscription")]),t._v(" button and wait for completion.")]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("OK")]),t._v(" to apply the settings and close the dialog.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("Update through System Proxy If you encounter connectivity problem with your subscription upstream (eg: DNS Record Pollution, IP Address Blocking, etc.), you may try to run with **Update Subscription with System Proxy** option on. However, it's better to inform the upstream as soon as possible, to fix the issue permanently. :::")]),t._v(" "),i("h2",{attrs:{id:"manual-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#manual-configuration"}},[t._v("#")]),t._v(" Manual Configuration")]),t._v(" "),i("ol",[i("li",[t._v("Click "),i("strong",[t._v("New")]),t._v(" in the lower left corner of the main window")]),t._v(" "),i("li",[t._v("Fill in the "),i("strong",[t._v("Name/Prefix")]),t._v(" or leave it blank, or you can rename it after complete the configuration.")]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("Input Manually")]),t._v(" -> "),i("strong",[t._v("Open Connection Editor")]),t._v(".")]),t._v(" "),i("li",[t._v("Fill in the "),i("strong",[t._v("Tag")]),t._v(". This tag will appear in the log. You can also leave it blank.")]),t._v(" "),i("li",[t._v("Fill in "),i("strong",[t._v("Host")]),t._v(" and choose your proxy type.")]),t._v(" "),i("li",[t._v("Config "),i("strong",[t._v("Misc Settings")]),t._v(" Optionally.")]),t._v(" "),i("li",[t._v("Fill in "),i("strong",[t._v("Outbound settings")]),t._v(" and "),i("strong",[t._v("Stream Settings")]),t._v(".")]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("OK")]),t._v(" to save your config.")])]),t._v(" "),i("h2",{attrs:{id:"import-an-existing-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-an-existing-configuration"}},[t._v("#")]),t._v(" Import an existing configuration")]),t._v(" "),i("p",[t._v("If you are using v2ray-core, you can import an existing configuration file. "),i("strong",[t._v("Advanced")]),t._v(" -> "),i("strong",[t._v("Select")]),t._v(", or "),i("strong",[t._v("Open JSON Editor")]),t._v(" and paste it.")])])])])])}),[],!1,null,null,null);o.default=e.exports}}]);