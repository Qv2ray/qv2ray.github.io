---
title: 常规设置
---

# 常规设置

**[常规设置](qv2ray://open/preference/general)** 是 Qv2ray 本身，包括 **外观**, **行为** 和 **网络设置**。

::: tip Tips

常规设置只能改变Qv2ray 本身的行为，但不会影响V2Ray 核心的代理行为。

:::

## 外观

设置 Qv2ray 的外观和样式。

- <strong x-id=“1”>最近的跳转列表</strong>：设置通知图标<strong x-id=“1”>右键单击菜单</strong>-<strong x-id=“1”>最近的连接列表中显示的最近使用的连接。
- <strong x-id=“1”>最大日志行数</strong>：在Qv2ray主界面右侧的<strong x-id=“1”>日志</strong>窗格中设置日志记录数的上限。 After the set value is exceeded, the older logs will be purged automatically.
- **其他**: 按照你喜欢的方式设置~🤐

## 行为

设置Qv2ray的行为。

- **安静模式**: 启用时，Qv2ray 不会主动弹出任何通知。
- **其他**: 它已经非常简单，我为什么要谈它？ 😶

## 网络设置

设置Qv2ray 访问网络的方式。

- **延迟测试方法**: 设置节点延迟的测试方法。
  - **TCPing**: Qv2ray 的默认延迟测试方法。 测试结果更接近实际用户体验。 但是基于mKCP 协议的节点无法测试，因为它基于UDP而不是TCP。
  - **ICMPing**: 基于ICMP/ UDP 协议的延迟测试方法目前已被承认，并且在市场上主流化的延迟测试方法。 并且它也是在 Windows 和 Unix 系统中的 `ping` 命令的测试原则。 试验结果明显低于TCPing，远优于实际经验。 It can be used to test nodes based on mKCP protocol.
- **User Agent**: The client information declared by Qv2ray when making network requests. If you do not understand what UA is, please do not change this setting.
- <strong x-id=“1”>Qv2ray代理</strong>：Qv2ray在发出网络请求时使用的代理设置，而不是V2Ray核心用于网络流量的代理设置。

:::tip What is Qv2ray proxy?

If you want Qv2ray to update subscriptions or detect version updates through a proxy, please configure this.

If you want the traffic proxied by V2Ray to pass through another proxy, or your network needs to pass through a layer of proxy to connect to the Internet, then please use the Forward Proxy function and do not configure this option.

:::

## 高级行为

设置 Qv2ray的高级行为。 Please do note that abuse of these settings may have negative effects!

- **Set `AllowInsecure` by Default**: All new connections imported via **subscription** / **QR code** / **VMess protocol link** will be enabled by default to allow insecure certificates. Enabling this setting will cause the relevant nodes to lose TLS protection, and there is a risk of man in the middle attacks. 通过手动填写连接属性或编辑 JSON 添加的节点不受此选项的影响。 If you do not understand the actual use of this option, please do not open it!
- **Enable `SessionResumption` by Default**: New in Qv2ray v2.6.0. When enabled, new connections imported with TLS will enable **Session Resumption** to reduce RTT during handshake. You will also need to enable related functions on the server side, such as `0-RTT Connection Resumption` on Cloudflare and `ssl_early_data` on nginx. However, this will largely increase the risk of traffic being recognised.
- **Test Latency on Connect**: When enabled, Qv2ray will test the latency of nodes on connect. Enabling this may make it easier for GFW to recognize your connection.
- **Test Latency Periodically**: When enabled, Qv2ray will periodically test the latency of the currently connected node. Enabling this may make it easier for GFW to recognize your connection.
- **Disable System Root Certificates**: When enabled, V2Ray core will only use built-in root certificates, which helps to circumvent root certificate hijacking attack. However, this can cause V2Ray core fail to recognise your valid TLS certificates, resulting in connectivity problem with your nodes.
- (Removed) **Set `AllowInsecureCiphers` by Default**: All new connections imported through **subscription** / **QR code** / **VMess protocol link** will be enabled by default to `allow insecure TLS algorithm` option. Enabling this setting will cause related nodes to lose TLS protection, and there is a risk of man-in-the-middle attacks. 通过手动填写连接属性或编辑 JSON 添加的节点不受此选项的影响。 If you do not understand the actual use of this option, please do not open it!

:::warning Re-emphasis:

Misuse of the above settings may cause negative effects and even lead to security issues! If you do not understand the actual use of these options, please do not open them!

:::

:::tip (Outdated) Notes on V2ray Core versions before 4.23.1

**Updated at 2021-01-25:** We believe that no one will use that old V2Ray core version. This notice is no longer effective and is only kept for historical reasons.

**Updated at 2020-05-30:** Due to implementation issues，V2Ray core will use hard-coded TLS cipher suites when `AllowInsecureCiphers` is disabled, which makes its TLS traffic highly distinguishable. Enabling `AllowInsecureCiphers` will ease the issue temporarily, but it will require **all influenced connections to be re-imported**.

:::
