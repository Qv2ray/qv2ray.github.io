(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{404:function(v,_,t){"use strict";t.r(_);var s=t(16),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"常规设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常规设置"}},[v._v("#")]),v._v(" 常规设置")]),v._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"qv2ray://open/preference/general"}},[v._v("常规设置")])]),v._v(" 是 Qv2ray 本身的设置，包括 "),t("strong",[v._v("外观")]),v._v("，"),t("strong",[v._v("行为")]),v._v(" 和 "),t("strong",[v._v("网络设置")]),v._v("。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("常规设置只会更改 Qv2ray 自身的行为，并不会影响 V2Ray 核心的代理行为。")])]),v._v(" "),t("h2",{attrs:{id:"外观"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外观"}},[v._v("#")]),v._v(" 外观")]),v._v(" "),t("p",[v._v("调整 Qv2ray 的界面和使用体验。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("最近列表")]),v._v("：设置在通知图标 "),t("strong",[v._v("右键菜单")]),v._v(" - "),t("strong",[v._v("最近连接")]),v._v(" 列表中，展示的最近使用过的连接数量。")]),v._v(" "),t("li",[t("strong",[v._v("日志最大行数")]),v._v("：设置在 Qv2ray 主界面右侧的 "),t("strong",[v._v("日志")]),v._v(" 面板中日志记录数量的上限。 超过设定值后，较旧的日志将被自动清除。")]),v._v(" "),t("li",[t("strong",[v._v("其他")]),v._v("：按照你喜欢的方式设置~🤐")])]),v._v(" "),t("h2",{attrs:{id:"行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行为"}},[v._v("#")]),v._v(" 行为")]),v._v(" "),t("p",[v._v("设置 Qv2ray 的行为。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("安静模式")]),v._v("：启用后，Qv2ray 将不会主动弹出任何通知提醒。")]),v._v(" "),t("li",[t("strong",[v._v("其他")]),v._v("：已经很浅显了，这还用我说嘛？ 😶")])]),v._v(" "),t("h2",{attrs:{id:"网络设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络设置"}},[v._v("#")]),v._v(" 网络设置")]),v._v(" "),t("p",[v._v("设置 Qv2ray 本身访问网络的方式。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("延迟测试方案")]),v._v("：设置测试节点延迟的方法。\n"),t("ul",[t("li",[t("strong",[v._v("TCPing")]),v._v("： Qv2ray 默认的延迟测试方法。 测试结果更接近于实际使用体验，但无法测试基于 mKCP 协议的节点，因为 mKCP 协议基于 UDP 而非 TCP 。")]),v._v(" "),t("li",[t("strong",[v._v("ICMPing")]),v._v("：基于 ICMP / UDP 协议的延迟测试方法，是目前市面上公认的、主流的延迟测试方法，也是 Windows 和 Unix 系统中 "),t("code",[v._v("ping")]),v._v(" 命令的测试原理。 测试结果远低于 TCPing，远优于实际使用体验。 可以用于测试基于 mKCP 协议的节点。")])])]),v._v(" "),t("li",[t("strong",[v._v("User Agent")]),v._v("：Qv2ray 在进行网络请求时声明的客户端信息。 如果你不了解何为 UA，请不要变更本项设置。")]),v._v(" "),t("li",[t("strong",[v._v("Qv2ray 代理")]),v._v("：Qv2ray 在进行网络请求时使用的代理设置，而非 V2Ray 核心的出口流量所使用的代理设置。")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("Qv2ray 代理有什么意义？")]),v._v(" "),t("p",[v._v("如果你想让 Qv2ray 通过代理来更新订阅或检测版本更新，请配置此项。")]),v._v(" "),t("p",[v._v("如果你想让被 V2Ray 代理的流量通过另一个代理，或者你的网络需要通过一层代理才能连接到互联网，那么请使用前置代理功能，不要配置此项。")])]),v._v(" "),t("h2",{attrs:{id:"高级行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级行为"}},[v._v("#")]),v._v(" 高级行为")]),v._v(" "),t("p",[v._v("设置 Qv2ray 的高级行为。请注意，滥用这些设置可能会造成负面影响！")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("默认设置 "),t("code",[v._v("AllowInsecure")])]),v._v("：所有通过 "),t("strong",[v._v("订阅")]),v._v(" / "),t("strong",[v._v("二维码")]),v._v(" / "),t("strong",[v._v("VMess 协议链接")]),v._v(" 导入的新连接将默认开启允许不安全的证书选项。开启此项设置将会使相关节点失去 TLS 的保护，存在遭受中间人攻击的风险。通过手动填写连接属性或编辑 JSON 添加的节点不受此选项影响。如果你不了解该选项的实际用途，请切勿开启！")]),v._v(" "),t("li",[t("strong",[v._v("默认启用 "),t("code",[v._v("SessionResumption")])]),v._v("：Qv2ray v2.6.0 新增。开启时，新导入的 TLS 链接会默认开启 "),t("strong",[v._v("启用会话恢复")]),v._v(" 以减少握手时的 RTT。但需要服务端各个环节开启相关功能的支持，例如 CloudFlare 需要开启 "),t("code",[v._v("0-RTT Connection Resumption")]),v._v(" 、nginx 需要开启 "),t("code",[v._v("ssl_early_data")]),v._v("等。注意这会加大遭到重放攻击的可能性，会极大程度上提高流量被识别的风险。")]),v._v(" "),t("li",[t("strong",[v._v("连接时测试延迟")]),v._v("：开启此选项后，Qv2ray 将在连接节点时测试当前所连接节点的延迟。开启该选项可能会使 GFW 更容易识别出你的连接。")]),v._v(" "),t("li",[t("strong",[v._v("定时测试延迟")]),v._v("：开启此选项后，Qv2ray 将会定期测试当前已连接节点的延迟。开启该选项可能会使 GFW 更容易识别出你的连接。")]),v._v(" "),t("li",[t("strong",[v._v("禁用系统根证书")]),v._v("：开启此选项后，V2Ray 核心将仅使用内置的根证书进行 TLS 证书校验，可用于防止根证书劫持攻击，但有可能会让核心认不出你的 TLS 证书，导致节点连接失败。")]),v._v(" "),t("li",[t("strong",[v._v("默认设置 "),t("code",[v._v("AllowInsecure")])]),v._v("：所有通过 "),t("strong",[v._v("订阅")]),v._v(" / "),t("strong",[v._v("二维码")]),v._v(" / "),t("strong",[v._v("VMess 协议链接")]),v._v(" 导入的新连接将默认开启允许不安全的证书选项。开启此项设置将会使相关节点失去 TLS 的保护，存在遭受中间人攻击的风险。通过手动填写连接属性或编辑 JSON 添加的节点不受此选项影响。如果你不了解该选项的实际用途，请切勿开启！")])]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("再度强调：")]),v._v(" "),t("p",[v._v("滥用上述设置可能会造成负面影响，甚至导致安全问题！如果你不了解这些选项的实际用途，请切勿开启！")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("（已过时）有关 V2ray-Core 4.23.1 以下版本")]),v._v(" "),t("p",[v._v("**2021-01-25 更新：**我们相信已经没人会用这么老的核心了。本提示已过时，仅作历史保留。")]),v._v(" "),t("p",[v._v("**2020-05-30 更新：**由于实现缺陷，V2ray-Core 在禁用 "),t("code",[v._v("AllowInsecureCiphers")]),v._v(" 选项时，会使用硬编码的 TLS 加密套件列表，这将导致 V2ray-Core 的 TLS 流量出现明显特征。在 Qv2ray 中启用 "),t("code",[v._v("AllowInsecureCiphers")]),v._v(" 会暂时缓解此问题，开启此选项后需要 "),t("strong",[v._v("重新导入所有受影响的连接")]),v._v("。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);