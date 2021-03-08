---
title: 使用插件
---

# 使用插件

- 此页面解释了Qv2ray 插件系统的使用情况
- **要使用插件，您至少需要 `Qv2ray v2.5.0-pre1 版本：5264`**

## 什么是插件

> 从技术上讲，Qv2ray 插件是一个实现 `QvPlug插件` 接口的共享库，为了达到Qv2ray的功能。

Qv2ray 插件扩展 Qv2ray 的功能，允许您使用更多功能。 **通过调用插件，Qv2ray 甚至可以在不使用 V2Ray 核心的情况下运行**



:::tip Builtin Shadowsocks Support vs QvPlugin-SS 这是人们认为Qv2ray 需要 QvPlugin-SS 来支持Shadowsocks的常见gotcha。 Qv2ray 已经从 V2Ray Core 有 [内置Shadowsocks 支持](https://www.v2fly.org/config/protocols/shadowsocks.html#outboundconfigurationobject) ，这将足以满足一般使用的情况。 因此，您不一定需要使用 QvPlugin-SS

然而，尽管强烈不推荐，如果您坚持使用过时/过时的密码(例如， `rc4-md5`)，您可能需要QvPlugin-S才能使其正常工作。 SIP003插件的服务器 (例如， [`simple-obfs`](https://github.com/shadowsocks/simple-obfs), [`kctun`](https://github.com/xtaci/kcptun) 和 [`v2ray-插件`](https://github.com/shadowsocks/v2ray-plugin)也需要 QvPlugin-SS 才能工作。 :::

## 如何下载和使用插件

您可以下载并启用尽可能多的插件。

要安装插件，您需要这样做：

### 1. 下载 / 安装插件

- 一些插件可能会通过软件包管理器(例如 [分数](../getting-started/step1.md#scoop-for-windows-users))，如果你想要，你可以使用它们。
  - _如果您已经使用此方法安装了插件，请前往 **步骤3**。_
- 从插件发布页面下载您的 OS。

### 2. 将你的插件放入 `插件` 目录

- Click **[Open Local Plugin Folder](qv2ray://open/plugin/metadata)** in the **[Plugin Manager](qv2ray://open/plugin/plugindir)** window, which a folder named `plugins` will be opened.
- 将您已下载的插件 `dll`/`dylib`/`因此` 文件放入此目录。

### 3. 重启Qv2ray & 启用插件

- 打开“插件管理器”，你会看到找到插件。
- 选中左侧的“启用”复选框。
- Some plugins, **especially** kernel plugins, will **only** be loaded after Qv2ray restarts.

### 4. 得益！

- 您的插件已准备好使用！

## 插件常见问题

### Qv2ray 不会将插件用于：

- 请确认插件放置到 Qv2ray 的插件目录(`config\plugins`)。
- 请确认插件版本匹配Qv2ray 版本。 目前，只有Qv2ray `v2.6.0-rc2` 和其后支持插件版本 `2.0.0` 及更高版本。
- 如果问题仍然存在，欢迎您直接向插件提供商报告此问题，请包括：
  - Qv2ray的确切信息，其中 **是程序的来源**， **[Qv2ray 版本](qv2ray://open/preference/about)**, 和 **版本版本**.
  - 插件的确切版本，包括插件文件的 **sha256** 或 **md5**
  - Qv2ray 日志可以通过执行 `qv2ray(.exe) --debug > log.txt` 来收集。

### 我找不到我的操作系统的插件文件：

- 如果插件写入器迟迟不支持您的 OS，可能会发生这种情况，或
- 插件不适合您的操作系统：
  - 例如：一个 Linuxspecific `iptables` 设置插件在 macOS 和 Windows 上不合适。

### 加载插件后Qv2ray 崩溃：

- 请尝试 `qv2ray(.exe) --noPlugin` 跳过所有插件。
- 如果Qv2ray 已成功启动，请使用上述方法报告错误。
