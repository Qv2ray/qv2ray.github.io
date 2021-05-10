(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{375:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{input:""}},computed:{escaped:function(){return encodeURIComponent(this.input)}}},r=a(16),v=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第-4-步-配置浏览器-软件以使用-qv2ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-4-步-配置浏览器-软件以使用-qv2ray"}},[t._v("#")]),t._v(" 第 4 步：配置浏览器/软件以使用 Qv2ray")]),t._v(" "),a("p",[t._v("恭喜！只剩下一个步骤就可以访问真正的互联网了！")]),t._v(" "),a("h2",{attrs:{id:"一般方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般方法"}},[t._v("#")]),t._v(" 一般方法")]),t._v(" "),a("h3",{attrs:{id:"使用系统代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用系统代理"}},[t._v("#")]),t._v(" 使用系统代理")]),t._v(" "),a("p",[t._v("对于 "),a("strong",[t._v("Windows")]),t._v(" 和 "),a("strong",[t._v("macOS")]),t._v(" 用户，几乎所有应用程序都遵循系统代理设置。对于 "),a("strong",[t._v("Linux")]),t._v(" 用户，一部分应用程序如 Firefox 和 Chromium 将会读取并使用 GNOME/KDE 设置的代理配置，但另一部分应用程序并不会这样。")]),t._v(" "),a("p",[t._v("目前，Qv2ray 的自动设置系统代理功能支持 "),a("strong",[t._v("Windows")]),t._v("、"),a("strong",[t._v("macOS")]),t._v(" 和 "),a("strong",[t._v("Linux")]),t._v("（GNOME/KDE）用户。您可以在以下位置找到 Qv2ray 的设置系统代理选项：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Qv2ray 托盘菜单")]),t._v("。\n"),a("ol",[a("li",[t._v("右键点击托盘图标。")]),t._v(" "),a("li",[t._v("在的弹出菜单中，依次选择 "),a("strong",[t._v("系统代理")]),t._v(" -> "),a("strong",[t._v("启用/禁用系统代理")]),t._v("。")])])]),t._v(" "),a("li",[a("strong",[t._v("Qv2ray 首选项")]),t._v("。\n"),a("ol",[a("li",[t._v("点击 Qv2ray 主窗口中的 "),a("strong",[t._v("首选项")]),t._v(" 按钮。")]),t._v(" "),a("li",[t._v("在 "),a("strong",[t._v("首选项")]),t._v(" 中，选择 "),a("strong",[a("a",{attrs:{href:"qv2ray://open/preference/inbound"}},[t._v("入站设置")])]),t._v(" 标签。")]),t._v(" "),a("li",[t._v("勾选 "),a("strong",[t._v("设置系统代理")]),t._v(" 选项。")]),t._v(" "),a("li",[t._v("点击 "),a("strong",[t._v("确定")]),t._v(" 保存您的设置。")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Linux用户：KDE/GNOME 代理设置")]),t._v(" "),a("p",[t._v("如果您使用 GNOME 作为您的主要桌面环境，您可能会发现 GNOME 的系统代理设置非常有效。这是因为 GNOME 的系统代理设置得到了普遍的适配。")]),t._v(" "),a("p",[t._v("然而，KDE 用户可能会遭遇困境，因为 KDE 的系统代理设置更像是一个玩具。甚至 KDE 系列应用程序本身也不会读取和使用那个配置。在这种情况下，您可能需要寻求替代方案来配置您的应用程序。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Windows用户：UWP 应用回环问题")]),t._v(" "),a("p",[t._v("默认情况下，UWP 应用程序被禁止访问本地回环地址(127.0.0.1)，所以系统代理设置可能会导致您的 UWP 应用程序停止正常工作。")]),t._v(" "),a("p",[t._v("根据 "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/iot-core/develop-your-app/loopback",target:"_blank",rel:"noopener noreferrer"}},[t._v("微软的一篇文章"),a("OutboundLink")],1),t._v(" ，您可以在具有管理员权限的命令提示符（或者 PowerShell）中运行以下命令来解决回环问题：")]),t._v(" "),a("p",[t._v("for CMD:")]),t._v(" "),a("div",{staticClass:"language-batch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-batch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("/F")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tokens=11 delims=\\"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("%p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("REG QUERY "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HKCU\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DO")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CheckNetIsolation")]),t._v(".exe LoopbackExempt "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("-a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[t._v("-p")]),t._v("="),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("%p")])]),t._v("\n")])])]),a("p",[t._v("for PowerShell:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Path Registry::"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HKCU\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings\\"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForEach-Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CheckNetIsolation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe LoopbackExempt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("或者，您只需轻松地使用一些第三方工具。例如来自 "),a("a",{attrs:{href:"https://www.telerik.com/fiddler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fiddler 项目"),a("OutboundLink")],1),t._v(" 的这个 "),a("a",{attrs:{href:"/EnableLoopback.zip"}},[t._v("程序")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"手动配置应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动配置应用程序"}},[t._v("#")]),t._v(" 手动配置应用程序")]),t._v(" "),a("h4",{attrs:{id:"telegram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telegram"}},[t._v("#")]),t._v(" Telegram")]),t._v(" "),a("p",[t._v("您可以在 Telegram 应用中设置其使用代理。前往 "),a("strong",[t._v("设置/Settings")]),t._v(" -> "),a("strong",[t._v("高级/Advanced")]),t._v(" -> "),a("strong",[t._v("网络和代理/Network and proxy")]),t._v(" 然后点击 "),a("strong",[t._v("连接类型/Connection")]),t._v("，"),a("strong",[t._v("代理设置/Proxy Settings")]),t._v(" 对话框将被打开。（译者注：不同的 Telegram 客户端和不同的翻译会导致选项略有不同。）")]),t._v(" "),a("p",[t._v("在 "),a("strong",[t._v("代理设置/Proxy Settings")]),t._v(" 中点击底部的 "),a("strong",[t._v("添加代理/Add Proxy")]),t._v(" 按钮。根据您自己的口味选择 SOCKS5/HTTP ，然后用 Qv2ray 入站设置中的信息填写剩下的选项。")]),t._v(" "),a("p",[t._v("最后，单击您刚刚配置的代理。Telegram 就设置好了。")]),t._v(" "),a("h4",{attrs:{id:"网络浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络浏览器"}},[t._v("#")]),t._v(" 网络浏览器")]),t._v(" "),a("p",[t._v("几乎所有的网络浏览器都支持手动配置代理服务器。将 Firefox 为例子，您可以在 "),a("strong",[t._v("首选项 -> 常规-> 网络 -> 手动代理配置")]),t._v(" 中找到代理设置。用 Qv2ray 入站设置中的信息填写这些字段以使用 Qv2ray 代理。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("使用代理插件。")]),t._v(" "),a("p",[t._v("为了避免在代理配置之间重新切换，您可能想要使用第三方插件(例如，SwitchyOmega) 来增强您的浏览器。这些插件可以帮助实现更复杂的配置，包括多个配置文件和更多的流量转移。")])]),t._v(" "),a("h4",{attrs:{id:"java-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-应用程序"}},[t._v("#")]),t._v(" Java 应用程序")]),t._v(" "),a("p",[t._v("对于Java 应用程序，您可以使用 JVM 参数配置代理程序。")]),t._v(" "),a("p",[t._v("以下是一些例子：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 SOCKS5：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("java -DsocksProxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -DsocksProxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1088")]),t._v(" -jar some-application.jar\n")])])])]),t._v(" "),a("li",[a("p",[t._v("使用 HTTP(S)：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("java -Dhttp.proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -Dhttp.proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(" -Dhttps.proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -Dhttps.proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(" -jar some-application.jar\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("有问题的 Minecraft")]),t._v(" "),a("p",[t._v("Minecraft的较新版本（"),a("code",[t._v(">=1.5.2")]),t._v("）不会使用 JVM 代理设置。这不是 Qv2ray 的问题。如果你真的想要通过代理玩 Minecraft，请考虑为该服务器设置一个 Dokodemo-door 入站，并直接连接到 "),a("code",[t._v("localhost")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"依赖平台的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖平台的方法"}},[t._v("#")]),t._v(" 依赖平台的方法")]),t._v(" "),a("h3",{attrs:{id:"使用环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用环境变量"}},[t._v("#")]),t._v(" 使用环境变量")]),t._v(" "),a("p",[t._v("许多CLI 程序（例如，"),a("code",[t._v("curl")]),t._v(" 和 "),a("code",[t._v("wget")]),t._v("）将使用由 "),a("code",[t._v("<PROTOCOL><PROTOCOL>_PROXY")]),t._v(" 环境变量。")]),t._v(" "),a("p",[t._v("下面是一个配置示例：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更改主机和端口，基于 Qv2ray 入站配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8000"')]),t._v("\n")])])]),a("p",[t._v("如果在 Qv2ray 中启用了身份验证，请使用以下设置：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更改用户名和密码，基于 Qv2ray 入站配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://user:pass@127.0.0.1:8000"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://user:pass@127.0.0.1:8000"')]),t._v("\n")])])]),a("p",[t._v("请注意，如果您的用户名或密码有特殊字符，您需要对其进行编码。下面是一个快速方法：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("!")])]),t._v(" "),a("th",[a("code",[t._v("#")])]),t._v(" "),a("th",[a("code",[t._v("$")])]),t._v(" "),a("th",[a("code",[t._v("&")])]),t._v(" "),a("th",[a("code",[t._v("'")])]),t._v(" "),a("th",[a("code",[t._v("(")])]),t._v(" "),a("th",[a("code",[t._v(")")])]),t._v(" "),a("th",[a("code",[t._v("*")])]),t._v(" "),a("th",[a("code",[t._v("+")])]),t._v(" "),a("th",[a("code",[t._v(",")])]),t._v(" "),a("th",[a("code",[t._v("/")])]),t._v(" "),a("th",[a("code",[t._v(":")])]),t._v(" "),a("th",[a("code",[t._v(";")])]),t._v(" "),a("th",[a("code",[t._v("=")])]),t._v(" "),a("th",[a("code",[t._v("?")])]),t._v(" "),a("th",[a("code",[t._v("@")])]),t._v(" "),a("th",[a("code",[t._v("[")])]),t._v(" "),a("th",[a("code",[t._v("]")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("%21")])]),t._v(" "),a("td",[a("code",[t._v("%23")])]),t._v(" "),a("td",[a("code",[t._v("%24")])]),t._v(" "),a("td",[a("code",[t._v("%26")])]),t._v(" "),a("td",[a("code",[t._v("%27")])]),t._v(" "),a("td",[a("code",[t._v("%28")])]),t._v(" "),a("td",[a("code",[t._v("%29")])]),t._v(" "),a("td",[a("code",[t._v("%2A")])]),t._v(" "),a("td",[a("code",[t._v("%2B")])]),t._v(" "),a("td",[a("code",[t._v("%2C")])]),t._v(" "),a("td",[a("code",[t._v("%2F")])]),t._v(" "),a("td",[a("code",[t._v("%3A")])]),t._v(" "),a("td",[a("code",[t._v("%3B")])]),t._v(" "),a("td",[a("code",[t._v("%3D")])]),t._v(" "),a("td",[a("code",[t._v("%3F")])]),t._v(" "),a("td",[a("code",[t._v("%40")])]),t._v(" "),a("td",[a("code",[t._v("%5B")])]),t._v(" "),a("td",[a("code",[t._v("%5D")])])])])]),t._v(" "),a("p",[t._v("或者输入您想要编码的文本： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],domProps:{value:t.input},on:{input:function(s){s.target.composing||(t.input=s.target.value)}}})]),t._v(" "),t.input?[t._v("\n  编码文本： "),a("code",[t._v(t._s(t.escaped))])]:t._e(),t._v(" "),a("p",[t._v("对于在 "),a("code",[t._v("sudo")]),t._v(" 中运行的程序，如果您不在 shell 中运行"),a("code",[t._v("sudo")]),t._v("则需要配置 "),a("code",[t._v("sudo")]),t._v(" 来保存这些变量。用 root 调用"),a("code",[t._v("visudo")]),t._v("并添加以下行：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Defaults env_keep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP_PROXY HTTPS_PROXY"')]),t._v("\n")])])]),a("p",[t._v("但还有一些程序正在使用自己的变量。例如，"),a("code",[t._v("rsync")]),t._v(" 使用 "),a("code",[t._v("RSYNC_PROXY")]),t._v(" 用于 HTTP 代理：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RSYNC_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user:pass@127.0.0.1:8000\n")])])]),a("p",[t._v("强烈建议阅读您想要配置代理的程序手册。")]),t._v(" "),a("h3",{attrs:{id:"使用-proxychains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-proxychains"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("proxychains")])]),t._v(" "),a("p",[t._v("如果上述任何方法都不起作用，您可以尝试使用 "),a("code",[t._v("proxychains")]),t._v("，它劫持了程序的功能/库来将网络连接重定向到您的代理服务器。")]),t._v(" "),a("p",[t._v("首先，您应该安装"),a("code",[t._v("proxychains-ng")]),t._v("。每个操作系统的安装方法各不相同。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux/macOS"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/shunf4/proxychains-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("编辑"),a("code",[t._v("/etc/proxychains.conf")]),t._v("(用于全局代理链) 或"),a("code",[t._v("$HOME/.proxychains/proxychains.conf")]),t._v("(用户)，编辑"),a("code",[t._v("[ProxyList]")]),t._v("部分，并在 Qv2ray 中将代理更改为 SOCKS5 代理：")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[ProxyList]")]),t._v("\nsocks5  127.0.0.1  1088\n")])])]),a("p",[t._v("配置 "),a("code",[t._v("代理链")]),t._v(" 之后，您可以在终端中使用 "),a("code",[t._v("代理链 <program>")]),t._v(" 来制作 "),a("code",[t._v("代理链")]),t._v(" 劫持程序来使用指定的代理程序。如果你觉得输出很多很烦，你可以在 "),a("code",[t._v("proxychains")]),t._v(" 之后追加"),a("code",[t._v("-q")]),t._v("选项。")]),t._v(" "),a("p",[t._v("要注意的一件事是，"),a("code",[t._v("代理链")]),t._v(" 不能与静态链接的程序兼容，例如 Golang 程序。")])],2)}),[],!1,null,null,null);s.default=v.exports}}]);