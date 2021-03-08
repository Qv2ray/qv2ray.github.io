---
title: Using Plugins
---

# Using Plugins

- This page explains about the usage of Qv2ray plugin system
- **To use a plugin, you need at least `Qv2ray v2.5.0-pre1 BuildVersion: 5264`**

## What is a plugin

> Technically said, a Qv2ray Plugin is a shared library that implements `QvPlugin` interface, which in order to extent the functionality of Qv2ray.

Qv2ray Plugin extends Qv2ray's functionality, which allows you use more features. **By leveraging plugins, Qv2ray can even run without using V2Ray core at all.**

 

:::tip Builtin Shadowsocks Support vs QvPlugin-SS
It is a common gotcha that people think Qv2ray needs QvPlugin-SS to support Shadowsocks. Qv2ray already has [built-in Shadowsocks support](https://www.v2fly.org/config/protocols/shadowsocks.html#outboundconfigurationobject) from V2Ray Core, which will suffice general use cases. Therefore, you don't necessarily need to use QvPlugin-SS.

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
- Some plugins, **especially** kernel plugins, will **only** be loaded after Qv2ray restarts.

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
