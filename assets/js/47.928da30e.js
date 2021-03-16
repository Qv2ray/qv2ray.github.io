(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{414:function(a,e,t){"use strict";t.r(e);var n=t(16),o=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"a-few-notes-about-wayland"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-few-notes-about-wayland"}},[a._v("#")]),a._v(" A few notes about Wayland")]),a._v(" "),t("p",[t("strong",[a._v("Note: This section is only relevant for GNU/Linux systems")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" Run")]),a._v(" "),t("p",[a._v("Qv2ray is a native Qt5/C++ program, which fully supports the Wayland display protocol. However, for Qv2ray to run under the Wayland protocol, you need a Wayland session (e.g., Gnome session, KDE Wayland session, Sway, etc.), and you also need to install Wayland support for Qt5 (usually the package name "),t("code",[a._v("qt5-wayland")]),a._v(" or "),t("code",[a._v("(qtwayland5")]),a._v(").")]),a._v(" "),t("p",[a._v("If everything is in place, you can now try to run Qv2ray with the Wayland display protocol.")]),a._v(" "),t("h3",{attrs:{id:"gnome-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnome-environment"}},[a._v("#")]),a._v(" Gnome environment")]),a._v(" "),t("p",[a._v("Qt5 programs in a Gnome environment run on Xwayland by default using the Xorg protocol (Xorg's fallback mode under Wayland). Therefore, to get Qv2ray to run under the Wayland display protocol you need to run the following command.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("QT_QPA_PLATFORM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("wayland qv2ray\n")])])]),t("p",[a._v("It works as follows:")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/BIuwb4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s1.ax1x.com/2020/11/07/BIuwb4.png",alt:"Qv2ray On Wayland in Gnome Session"}}),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("You can add "),t("code",[a._v("QT_QPA_PLATFORM=wayland")]),a._v(" to Qv2ray's desktop file so that Qv2ray can use the Wayland display protocol at boot time.")]),a._v(" "),t("h3",{attrs:{id:"kde-plasma-wayland-sessions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kde-plasma-wayland-sessions"}},[a._v("#")]),a._v(" KDE Plasma Wayland Sessions")]),a._v(" "),t("p",[a._v("Theoretically, it defaults to the Wayland display protocol, but this has not been verified. Qv2ray is specified to follow the Wayland display protocol in the same way as above.")]),a._v(" "),t("h3",{attrs:{id:"sway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sway"}},[a._v("#")]),a._v(" Sway")]),a._v(" "),t("p",[a._v("Not tested, contributions from those with experience in using it are welcome. Specifying Qv2ray to follow the Wayland display protocol is the same as above.")]),a._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),t("h3",{attrs:{id:"cannot-run-on-wayland"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cannot-run-on-wayland"}},[a._v("#")]),a._v(" Cannot run on Wayland")]),a._v(" "),t("p",[a._v("You may be using an Xorg-based desktop session, or you don't have the Wayland component for Qt installed. Or, you have statically compiled Qv2ray, but have not included the Wayland component for Qt.")]),a._v(" "),t("h3",{attrs:{id:"does-running-under-the-wayland-display-protocol-speed-up-wall-climbing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-running-under-the-wayland-display-protocol-speed-up-wall-climbing"}},[a._v("#")]),a._v(" Does running under the Wayland display protocol speed up wall-climbing?")]),a._v(" "),t("p",[a._v("No, thanks.")]),a._v(" "),t("h3",{attrs:{id:"issue-under-kde-wayland-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issue-under-kde-wayland-session"}},[a._v("#")]),a._v(" Issue under KDE Wayland session")]),a._v(" "),t("p",[a._v("Under a KDE Wayland session, if you log out and log back in, Qv2ray will not exit, will not show the notification tray icon and will use a lot of CPU.")]),a._v(" "),t("p",[t("strong",[a._v("The solution is (use one of three choices):")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Use Gnome Wayland session")])]),a._v(" "),t("li",[t("p",[a._v("Use KDE Plasma or other desktop‘s Xorg sessions")])]),a._v(" "),t("li",[t("p",[a._v("Kill the Qv2ray process by yourself and then open it again.")])])]),a._v(" "),t("blockquote",[t("p",[a._v("Related issues:\n"),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/830",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/Qv2ray/Qv2ray/issues/830"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"no-tray-icon-under-gnome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-tray-icon-under-gnome"}},[a._v("#")]),a._v(" No tray icon under Gnome")]),a._v(" "),t("p",[a._v("The Gnome desktop does not support tray icons by nature. Ubuntu has made an "),t("a",{attrs:{href:"https://extensions.gnome.org/extension/1301/ubuntu-appindicators/",target:"_blank",rel:"noopener noreferrer"}},[a._v("extension"),t("OutboundLink")],1),a._v(" to support a Gnome tray extension based on DBus communication. The result of testing so far is that the extension will display trays from Qv2ray running on Wayland under Arch Linux, but may not display them under the custom Ubuntu Wayland session. This is an upstream issue and cannot be addressed by this project.")]),a._v(" "),t("h3",{attrs:{id:"where-is-the-application-window"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-is-the-application-window"}},[a._v("#")]),a._v(" Where is the application window?")]),a._v(" "),t("p",[a._v("As described above, GNOME does not support tray icons, so does Wayland's reference compositor "),t("code",[a._v("weston")]),a._v(". With current version, the application main window will be hidden after launch if "),t("strong",[t("em",[a._v("Auto Connect")])]),a._v(" is enabled.(see "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/1080",target:"_blank",rel:"noopener noreferrer"}},[a._v("#1080"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray/issues/1080",target:"_blank",rel:"noopener noreferrer"}},[a._v("#1097"),t("OutboundLink")],1),a._v("). A current workaround is to launch Qv2ray again, then the main window will be activated and become visible.")]),a._v(" "),t("h2",{attrs:{id:"clipboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clipboard"}},[a._v("#")]),a._v(" Clipboard")]),a._v(" "),t("p",[a._v("Since Wayland does not have a unified clipboard interface, it may not be possible to use the right-click menu to copy and paste between applications running in Wayland. As a workaround, you can use "),t("code",[a._v("Ctrl + C/V")]),a._v(" to copy and paste. Also note that when copying and pasting, open both the copy source window and the paste target window at the same time.")]),a._v(" "),t("p",[a._v("Translated with www.DeepL.com/Translator (free version)")])])}),[],!1,null,null,null);e.default=o.exports}}]);