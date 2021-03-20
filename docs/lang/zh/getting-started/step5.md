---
title: 进一步的步骤
---

# 更多步骤

如果运气足够好，现在您可以自由上网了。 以下是一些可选步骤，以使您获得更好的 Qv2ray 体验。

## 加入 Qv2ray 用户群组

我们建议您加入我们在[ Telegram ](https://telegram.org/)的[ Qv2ray 用户组](https://t.me/qv2ray)。 在这里，您可以直接和 Qv2ray 开发者和 Qv2ray 的优秀用户聊天。 在群组中讨论使用问题总是比在 GitHub 上打开一个 issue 更有效。

另外，如果您不想说太多话，也可以在 Telegram 上订阅 [Qv2ray Outpost](https://t.me/qv2ray_outpost) 频道。 我们会推送 Qv2ray 的更新消息，甚至发送可能决定 Qv2ray 命运的投票！ 请确保您不要错过它。

## 调整界面 & 语言

### 界面 & 托盘图标

尽管 Qv2ray 已经尽最大努力适配您的平台的 UI 风格，但您仍然可以在 Qv2ray 上看到违和的 UI 细节。 例如无法看清太亮的托盘图标，按钮上的图标颜色不一致等等。

在这种情况下，请打开 **首选项**。 在 **[常规设置](qv2ray://open/preference/general)** 标签中，请根据您的实际状况调整以下项目：

- **使用浅色界面图标**: 启用后，按钮上的图标会变成浅色。 如果您正在使用一个浅色窗口主题，请关闭此选项。
- **使用浅色托盘图标**: 启用后，托盘图标会变成浅色以适应深色背景主题。 如果您的托盘区域背景颜色是浅色的，请关闭此选项。

:::tip 给 Gnome 用户的提示： 原生的 Gnome 桌面不会显示托盘图标。所以 Qv2ray 托盘图标也不会显示。 如果您想要显示托盘图标， 您可以安装一个叫做 [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (也叫 `ubuntu-appindicator`) 的扩展。安装扩展后，您应该注销并重新登录，在 `Tweaks` (或者说 `gnome-tweaks`) 中启用拓展，然后您会在 Gnome 中看到应用的托盘图标。 :::

### 多语言

与图标风格一样，Qv2ray 将尽力检测您的系统的显示语言，并在首次启动时将其设置为 Qv2ray 的界面语言。 如果自动检测结果不能令人满意，或者您只想尝试以另一种语言使用 Qv2ray。您可以在 **首选项** -> **常规设置** -> **语言** 中调整该设置。

选项根据 ISO-639/ISO-3166 规范列出。 举个例子： `zh_CN` 对应 **简体中文**，`ja_JP` 对应 **日语**，`en_US` 对应 **英文（美国）**，等等。 大多数界面的显示语言都可以在更改选项后立即变更。 但建议重新启动 Qv2ray 以使更改得到完全生效。

:::tip 修改选项后重启 如果更改选项似乎没有生效，您可以尝试重启 Qv2ray。 :::

## 调整路由设置

By default, Qv2ray will be set to **bypass the traffic of China mainland**, according to `geosite.dat` and `geoip.dat` from V2Ray core, thus it is not necessary to configure some awkward PAC rules. You can override this default setting in the **Preference Window**, by simply turning off this function in tab **[Connection Settings](qv2ray://open/preference/connection)**.

However, sometimes, these rules won't always apply. For example, you have a special proxy for [bilibili](https://bilibili.com/) that unlocks the Hong Kong/Macau/Taiwan episodes. Since it is a China mainland website, by default, the traffic won't go through the proxy, thus not satisfying your need. The solution is using our **[Advanced Route Settings](qv2ray://open/preference/route)** in the **Preference Window**.

A valid route setting scheme is basically a 2x3 routing rule matrix. Syntax for the rules can be found in [RuleObject Documentation](https://www.v2fly.org/config/routing.html#routingobject) from V2Ray Official Website. Here, if we want to force bilibili go through proxy, we just write a rule `geosite:bilibili` at `(Domain, Proxy)` position.

There are other advanced usages of routing schemes. If you are interested, try explore more into it.

## Sharing Proxy over Local Network (LAN)

For the sake of safety, by default, Qv2ray will only listen on `127.0.0.1`, that is to say, only the device which Qv2ray is running on can use the proxy. If you want to share your proxy over your local network (LAN), there are changes to be made.

The most simple and overkill method is to change the listen address from `127.0.0.1` to `0.0.0.0`, which will allow all incoming connections to your little proxy.

However, this is **not as safe**, since your proxy can be easily abused and attacked by others. To prevent this, you have to either shield yourself under NAT (for example, using a trusted router and don't expose your proxy ports), or setup a firewall to block the unwanted addresses (iptables, and etc).

You may encounter connectivity problems when sharing proxy. Here are some troubleshooting tips:

- allow V2Ray core to listen on `0.0.0.0` in Windows Firewall
- disable Intranet Isolation / AP Isolation on your router
