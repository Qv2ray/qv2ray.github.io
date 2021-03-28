---
title: 常规设置
---

# 常规设置

**[常规设置](qv2ray://open/preference/general)** 是 Qv2ray 本身的设置，包括 **外观**，**行为** 和 **网络设置**。

::: tip 提示

常规设置只会更改 Qv2ray 自身的行为，并不会影响 V2Ray 核心的代理行为。

:::

## 外观

调整 Qv2ray 的界面和使用体验。

- **最近列表**：设置在通知图标 **右键菜单** - **最近连接** 列表中，展示的最近使用过的连接数量。
- **日志最大行数**：设置在 Qv2ray 主界面右侧的 **日志** 面板中日志记录数量的上限。 超过设定值后，较旧的日志将被自动清除。
- **其他**：按照你喜欢的方式设置~🤐

## 行为

设置 Qv2ray 的行为。

- **安静模式**：启用后，Qv2ray 将不会主动弹出任何通知提醒。
- **其他**：已经很浅显了，这还用我说嘛？ 😶

## 网络设置

设置 Qv2ray 本身访问网络的方式。

- **延迟测试方案**：设置测试节点延迟的方法。
  - **TCPing**： Qv2ray 默认的延迟测试方法。 The test result is closer to the actual user experience, but the node based on the mKCP protocol cannot be tested, since it's based on UDP instead of TCP.
  - **ICMPing**: The delay test method based on ICMP / UDP protocol is currently recognized and mainstream delay test method on the market, and it is also the test principle of `ping` command in Windows and Unix systems. The test result is much lower than TCPing and far better than the actual experience. It can be used to test nodes based on mKCP protocol.
- **User Agent**: The client information declared by Qv2ray when making network requests. If you do not understand what UA is, please do not change this setting.
- **Qv2ray Proxy**: The proxy settings used by Qv2ray when making network requests, not the proxy settings used by V2Ray Core for network traffic.

:::tip What is Qv2ray proxy?

If you want Qv2ray to update subscriptions or detect version updates through a proxy, please configure this.

If you want the traffic proxied by V2Ray to pass through another proxy, or your network needs to pass through a layer of proxy to connect to the Internet, then please use the Forward Proxy function and do not configure this option.

:::

## Advanced Behavior

Set the advanced behavior of Qv2ray. Please do note that abuse of these settings may have negative effects!

- **Set `AllowInsecure` by Default**: All new connections imported via **subscription** / **QR code** / **VMess protocol link** will be enabled by default to allow insecure certificates. Enabling this setting will cause the relevant nodes to lose TLS protection, and there is a risk of man in the middle attacks. Nodes added by manually filling in connection properties or editing JSON are not affected by this option. If you do not understand the actual use of this option, please do not open it!
- **Enable `SessionResumption` by Default**: New in Qv2ray v2.6.0. When enabled, new connections imported with TLS will enable **Session Resumption** to reduce RTT during handshake. You will also need to enable related functions on the server side, such as `0-RTT Connection Resumption` on Cloudflare and `ssl_early_data` on nginx. However, this will largely increase the risk of traffic being recognised.
- **Test Latency on Connect**: When enabled, Qv2ray will test the latency of nodes on connect. Enabling this may make it easier for GFW to recognize your connection.
- **Test Latency Periodically**: When enabled, Qv2ray will periodically test the latency of the currently connected node. Enabling this may make it easier for GFW to recognize your connection.
- **Disable System Root Certificates**: When enabled, V2Ray core will only use built-in root certificates, which helps to circumvent root certificate hijacking attack. However, this can cause V2Ray core fail to recognise your valid TLS certificates, resulting in connectivity problem with your nodes.
- (Removed) **Set `AllowInsecureCiphers` by Default**: All new connections imported through **subscription** / **QR code** / **VMess protocol link** will be enabled by default to `allow insecure TLS algorithm` option. Enabling this setting will cause related nodes to lose TLS protection, and there is a risk of man-in-the-middle attacks. Nodes added by manually filling in connection properties or editing JSON are not affected by this option. If you do not understand the actual use of this option, please do not open it!

:::warning Re-emphasis:

Misuse of the above settings may cause negative effects and even lead to security issues! If you do not understand the actual use of these options, please do not open them!

:::

:::tip (Outdated) Notes on V2ray Core versions before 4.23.1

**Updated at 2021-01-25:** We believe that no one will use that old V2Ray core version. This notice is no longer effective and is only kept for historical reasons.

**Updated at 2020-05-30:** Due to implementation issues，V2Ray core will use hard-coded TLS cipher suites when `AllowInsecureCiphers` is disabled, which makes its TLS traffic highly distinguishable. Enabling `AllowInsecureCiphers` will ease the issue temporarily, but it will require **all influenced connections to be re-imported**.

:::
