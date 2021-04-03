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

人们普遍认为 Qv2ray 需要 QvPlugin-SS 来支持 Shadowsocks，这是一个常见的误区。 Qv2ray 已经通过 V2Ray 核心获得了[ Shadowsocks 协议支持 ](https://www.v2fly.org/config/protocols/shadowsocks.html#outboundconfigurationobject)，这将满足大部分的 Shadowsocks 使用需求。 Therefore, you don't necessarily need to use QvPlugin-SS.

Though strongly unrecommended, however, if you insist on using outdated/deprecated ciphers (for example, `rc4-md5`), you may need QvPlugin-SS to make them work. Servers with SIP003 plugins (for example, [`simple-obfs`](https://github.com/shadowsocks/simple-obfs), [`kcptun`](https://github.com/xtaci/kcptun) and [`v2ray-plugin`](https://github.com/shadowsocks/v2ray-plugin)) will also require QvPlugin-SS to work.

:::

## How to download and use a plugin

You can download and enable as many plugins as you want.

To install a plugin, you need to do these:

### 1. Download / Install the plugin

- Some plugins may be shipped via package manager (such as [Scoop](../getting-started/step1.md#scoop-for-windows-users)), you can use them if you want.
  - _Please go to **step 3** if you have installed the plugin using this method._
- From a plugin’s release page, download the file according to your OS.

### 2. Put your plugin inside `plugins` directory

- Click **[Open Local Plugin Folder](qv2ray://open/plugin/metadata)** in the **[Plugin Manager](qv2ray://open/plugin/plugindir)** window, which a folder named `plugins` will be opened.
- Place your downloaded plugin `dll`/`dylib`/`so` file into this directory.

### 3. Restart Qv2ray & Enable Plugins

- Open the “Plugin Manager”, you’ll see the plugin being found.
- Check the “enabled” checkbox on the left hand side.
- 有些插件，**尤其是**核心插件，需要在 Qv2ray 重启之后**才能**加载。

### 4. Benefit!

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
