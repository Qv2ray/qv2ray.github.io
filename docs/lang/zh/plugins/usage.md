---
title: 使用插件
---

# 使用插件

- 此页面解释了Qv2ray 插件系统的使用情况
- **要使用插件，您至少需要 `Qv2ray v2.5.0-pre1 版本：5264`**

## 什么是插件

> 从技术上讲，Qv2ray 插件是一个为了扩展 Qv2ray 的功能而实现了 `QvPlugin` 接口的共享库。

Qv2ray 插件扩展了 Qv2ray 的功能，允许您使用更多功能特性。**通过调用插件，Qv2ray 甚至可以在不依赖 V2Ray 核心的情况下运行。**

:::tip 内置 Shadowsocks 支持与 QvPlugin-SS 插件的对比

人们普遍认为 Qv2ray 需要 QvPlugin-SS 来支持 Shadowsocks，这是一个常见的误区。Qv2ray 已经通过 V2Ray 核心获得了 [Shadowsocks 协议支持](https://www.v2fly.org/config/protocols/shadowsocks.html#outboundconfigurationobject)，这将满足大部分的 Shadowsocks 使用需求。因此，您不一定需要 QvPlugin-SS 插件。

尽管强烈不推荐，如果您坚持使用过时/弃用的加密方式(例如，`rc4-md5`)，您可能需要 QvPlugin-SS 插件才能正常使用。如果服务器使用了 SIP003 规范的插件（例如，[`simple-obfs`](https://github.com/shadowsocks/simple-obfs)，[`kcptun`](https://github.com/xtaci/kcptun) 和 [`v2ray-plugin`](https://github.com/shadowsocks/v2ray-plugin)）也需要 QvPlugin 才能工作。

:::

## 如何下载和使用插件

你可以下载和启用您想要的尽可能多的插件。

要安装插件，您需要这样做：

### 1. 下载 / 安装插件

- 一些插件可能会通过软件包管理器（例如 [Scoop](../getting-started/step1.md#scoop-for-windows-users)）提供，您可以直接使用它们。
    - *如果您已经使用此方法安装了插件，请前往 **步骤3**。*
- 根据您的系统从插件发布页面下载插件。

### 2. 将你的插件放入 `plugins` 目录

- 在 **[插件管理器](qv2ray://open/plugin/plugindir)** 窗口点击 **[打开本地插件目录](qv2ray://open/plugin/metadata)** 按钮，将会打开一个名为 `plugins` 的文件夹。
- 将您上一步中已下载的插件文件（后缀名为 `dll`/`dylib`/`so`）放入此目录。

### 3. 重启 Qv2ray &amp; 启用插件

- 打开 **[插件管理器](qv2ray://open/plugin/plugindir)**，您会发现安装好的插件。
- 勾选左侧的“启用”复选框。
- 有些插件，**尤其是**核心插件，需要在 Qv2ray 重启之后**才能**加载。

### 4. 好耶！

- 您的插件已经可以使用了！

## 插件常见问题

### Qv2ray 无法识别插件。

- 请确认插件已经放置到 Qv2ray 的插件目录(`config\plugins`)。
- 请确认插件版本和 Qv2ray 版本相互匹配。目前，Qv2ray 只有 `v2.6.0-rc2` 和其后版本支持 `2.0.0` 版本及更高版本的插件。
- 如果问题仍然存在，欢迎您直接向插件者报告此问题，请附上以下内容：
    - Qv2ray的确切信息，包括 **程序的来源**、**[Qv2ray 版本](qv2ray://open/preference/about)** 和 **构建版本**。
    - 插件的确切版本，包括插件文件的 **sha256** 或 **md5** 校验码。
    - Qv2ray 日志。您可以通过在命令行中执行 `qv2ray(.exe) --debug > log.txt` 来收集 Qv2ray 的日志。

### 我找不到适合我的操作系统的插件文件：

- 如果插件作者（鸽了或者因为懒）迟迟不支持您的系统，可能会发生这种情况。
- 另一种情况是插件不适合您的操作系统：
    - 例如，Linux 系统特有的 `iptables` 设置插件无法在 macOS 和 Windows 上使用。

### Qv2ray加载插件后崩溃。

- 请尝试用 `qv2ray(.exe) --noPlugin` 命令来跳过所有插件的加载。
- 如果 Qv2ray 启动成功，请用前述方法报告错误。
