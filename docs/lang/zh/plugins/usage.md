---
title: 使用插件
---

# 使用插件

- 此页面解释了Qv2ray 插件系统的使用情况
- **要使用插件，您至少需要 `Qv2ray v2.5.0-pre1 版本：5264`**

## 什么是插件

> 从技术上讲，Qv2ray 插件是一个为了扩展Qv2ray的功能而实现了 `QvPlugn` 接口的共享库。

Qv2ray 插件扩展了 Qv2ray 的功能，允许您使用更多功能特性。 **通过调用插件，Qv2ray 甚至可以在不依赖 V2Ray 核心的情况下运行。**



:::tip 内置 Shadowsocks 支持与 QvPlugin-SS 插件的对比

人们普遍认为 Qv2ray 需要 QvPlugin-SS 来支持 Shadowsocks，这是一个常见的误区。 Qv2ray 已经通过 V2Ray 核心获得了[ Shadowsocks 协议支持 ](https://www.v2fly.org/config/protocols/shadowsocks.html#outboundconfigurationobject)，这将满足大部分的 Shadowsocks 使用需求。 因此，您不一定需要 QvPlugin-SS 插件。

尽管强烈不推荐，如果您坚持使用过时/弃用的加密方式(例如， `rc4-md5`)，您可能需要QvPlugin-SS 插件才能正常使用。 如果服务器使用了 SIP003 规范的插件（例如，[`simple-obfs`](https://github.com/shadowsocks/simple-obfs)，[`kcptun`](https://github.com/xtaci/kcptun) 和 [`v2ray-plugin`](https://github.com/shadowsocks/v2ray-plugin)）也需要 QvPlugin 才能工作。

:::

## 如何下载和使用插件

你可以下载和启用您想要的尽可能多的插件。

要安装插件，您需要这样做：

### 1. 下载 / 安装插件

- 一些插件可能会通过软件包管理器（例如 [Scoop](../getting-started/step1.md#scoop-for-windows-users)）提供，您可以直接使用它们。
  - _如果您已经使用此方法安装了插件，请前往 **步骤3**。_
- 根据您的系统从插件发布页面下载插件。

### 2. 将你的插件放入 `plugins` 目录

- 在 **[插件管理器](qv2ray://open/plugin/plugindir)** 窗口点击 **[打开本地插件目录](qv2ray://open/plugin/metadata)** 按钮，将会打开一个名为 `plugins` 的文件夹。
- 将您上一步中已下载的插件文件（后缀名为 `dll`/`dylib`/`so`）放入此目录。

### 3. 重启 Qv2ray & 启用插件

- 打开 **[插件管理器](qv2ray://open/plugin/plugindir)**，您会发现安装好的插件。
- 勾选左侧的“启用”复选框。
- 有些插件，**尤其是**核心插件，需要在 Qv2ray 重启之后**才能**加载。

### 4. 噫，好！

- Your plugin is ready to use!

## Plugin FAQ

### Qv2ray doesn't recogonize the plugin:

- Please confirm the plugin in placed into Qv2ray's plugin directory (`config\plugins`).
- Please confirm the plugin version matches Qv2ray version. Currently, only Qv2ray `v2.6.0-rc2` and later supports plugin version `2.0.0` and later.
- If the problem persists, you are welcome to report this issue directly to the plugin provider, please include:
  - The exact information of Qv2ray, with **the source of the program**, **[Qv2ray version](qv2ray://open/preference/about)**, and the **build version**.
  - The exact version of the Plugin, with the **sha256** or **md5** of the plugin file.
  - Qv2ray log, can be collected by executing `qv2ray(.exe) --debug > log.txt`

### I cannot find a plugin file for my OS:

- This can happen if the plugin writer is lazy to support your OS, or
- The plugin is not suitable for your OS:
  - e.g. A Linux-specific `iptables` setting plugin is not suitable on macOS and Windows

### Qv2ray crashed after loading a plugin:

- Please try `qv2ray(.exe) --noPlugin` to skip loading all plugins.
- If the Qv2ray started successfully, please report the error using methods mentioned above.
