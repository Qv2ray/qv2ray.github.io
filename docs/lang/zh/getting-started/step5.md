---
title: 进一步步骤
---

# 进一步步骤

如果你能够幸运，你现在也许能够自由地冲过因特网。 以下是您可以遵循的一些可选步骤，以使您在 Qv2ray 中的体验更好。

## 加入 Qv2ray 用户组

我们建议您加入我们的 [Qv2ray 用户组](https://t.me/qv2ray) 到 [Telegram](https://telegram.org/)。 这里您可以直接与 Qv2ray 开发者和伟大的 Qv2ray 用户聊天。 对于使用问题，在组中讨论它们总是比在GitHub 上打开一个问题更有效率。

另外，如果您不想说得太多，甚至不愿意在 Telegram 上订阅 [Qv2ray Outpost](https://t.me/qv2ray_outpost) 频道。 我们将推送Qv2ray的新闻更新，甚至发送可能决定Qv2ray命运的民意测验！ 请确保您不要错过它。

## 翻转界面 & 语言

### 界面 & 托盘图标

尽管Qv2ray尽最大努力检测您的平台的 UI 风格，但您仍然可以看到在 Qv2ray上触发的 UI 细节。 例如，托盘图标颜色太亮，无法查看，按钮上的图标颜色不一致，等等。

在这种情况下，请转至 **首选窗口**。 在 **[常规设置](qv2ray://open/preference/general)** 标签中，请根据您的实际状况调整以下项目：

- **Adapt Dark 主题**: 启用后，按钮上的图标会转为浅色颜色。 如果您正在使用浅色窗口主题，请关闭此选项。
- **Adapt Dark 托盘主题**: 启用后，托盘图标会转向亮色以适应黑暗模式主题。 如果您托盘的区域是浅色的，建议禁用这个区域。

:::tip Gnome 用户 本机Gnome 桌面不会显示托盘图标。 和 Qv2ray 图标也将不显示。 如果您想要显示托盘图标， 您可以安装一个叫做 [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (也叫 `ubuntu-appindicat`) 安装扩展后，您应该注销，再次登录 然后在 `调试中启用` 应用程序 (ie `gnome-modins`), 然后你会看到托盘图标。 :::

### 多语言

同样，Qv2ray 将尽力检测系统的显示语言，并在首次启动时将其设置为 Qv2ray 的界面语言。 如果自动检测结果不能令人满意，或者您只想尝试另一种语言的 Qv2ray 您可以在 **首选窗口** -> **常规设置** -> **语言** 中调整该设置。

根据ISO-639/ISO-3166代码选择。 例如： `zh_CN` for **简体中文**, `ja_JP` for **日语**, `en_US` for **American English**, 等等。 大多数用户界面都可以在更改后立即重新翻译。 但建议重新启动Qv2ray 以使更改生效。

:::tip 在更改后重启 如果更改似乎没有应用，你可以重启Qv2ray。 :::

## 推翻路由方案

默认情况下，Qv2ray 将被设置为 **绕过中国本土**的流量，根据 `地理位置。 在` 和 `geoip.dat` 来自V2Ray 核心，因此没有必要配置一些困难的 PAC 规则。 您可以在 **首选窗口**中覆盖此默认设置 只需在标签中关闭此功能 **[连接设置](qv2ray://open/preference/connection)**。

然而，这些规则有时并不总是适用。 例如，您有一个解锁香港/澳门/台湾剧情的 [bilibili](https://bilibili.com/) 的特殊代理。 由于这是中国大陆的网站，默认情况下，流量不会经过代理，因此无法满足您的需要。 解决方案正在使用 **[高级路由设置](qv2ray://open/preference/route)** 在 **首选项窗口** 中。

有效的路由设置方案基本上是一个 2x3 路由规则矩阵。 规则的语法可在 [RuleObject 文档](https://www.v2fly.org/config/routing.html#routingobject) 中找到 V2Ray 官方网站。 在这里，如果我们想要强制使用 bilibili 通过代理，我们只是写一条规则 `geosite:bilibili` 在 `(Domain, Proxy)` 位置。

还有其他先进的路由方法。 如果您有兴趣，请尝试更多地探索它。

## 共享本地网络代理 (LAN)

为了安全，默认情况下，Qv2ray 将只监听 `127.0.0。`, 也就是说，只有Qv2ray 正在运行的设备才能使用代理服务器. 如果您想要在您的本地网络(LAN)上分享您的代理，需要做一些修改。

最简单和过度杀死的方法是将监听地址从 `127.0.0。` 到 `0.0.0.0`, 这将允许所有传入的连接到您的小代理人。

However, this is **not as safe**, since your proxy can be easily abused and attacked by others. 为了防止这种情况，您必须在NAT下保护自己(例如) 使用受信任的路由器，不暴露您的代理端口，或设置防火墙来阻止不想要的地址 (iptables et etc. )。

分享代理时可能遇到连接问题。 以下是一些故障排除提示：

- 允许 V2Ray 核心在 Windows 防火墙中监听 `0.0.0.0`
- 在您的路由器上禁用内联网隔离/AP 隔离功能
