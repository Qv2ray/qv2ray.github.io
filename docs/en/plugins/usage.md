---
title: Using Plugins
---

# Using Plugins

- This page explains about the usage of Qv2ray plugin system
- **To use a plugin, you need at least `Qv2ray v2.5.0-pre1 BuildVersion: 5264`**

## What is a plugin

A Qv2ray Plugin is, technically, a shared library that implements `QvPlugin` interface, which in order to extent the functionality of Qv2ray.

Actually, a Qv2ray Plugin is an extension of Qv2ray, which allows you use more features.

Qv2ray workgroup has published 3 officially maintained plugins:

- [**QvSSRPlugin**](https://github.com/Qv2ray/QvPlugin-SSR) - Allows you to use ShadowSocksR in Qv2ray.
- [**QvTrojanPlugin**](https://github.com/Qv2ray/QvPlugin-Trojan) - Allows you to use Trojan in Qv2ray
- [**QvCommandPlugin**](https://github.com/Qv2ray/QvPlugin-Command) - Run any command when a specific event has been triggered.

## How to download and use a plugin

You can download and enable as many plugins as you want.

To install a plugin, you need to do these:

### 1. Download / Install the plugin

- Some plugins may be shipped via package manager (such as [Scoop](../getting-started/step1.md#scoop-for-windows-users)), you can use them if you want.
  - *Please go to **step 3** if you have installed the plugin using this method.*
- From a plugin’s release page, download the file according to your OS.

### 2. Put your plugin inside `plugins` directory

- Click “*Open Local Plugin Folder*” in the “*Plugin Manager*” window, which a folder named `plugins` will be opened.
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
  - The exact information of Qv2ray, with **where you have downloaded it**, **the version**, and the **build version**.
  - The exact version of the Plugin, with the **sha256** or **md5** of the plugin file.
  - Qv2ray log, can be collected by executing `qv2ray(.exe) --debug > log.txt`

### I cannot find a plugin file for my OS:

- This can happen if the plugin writer is lazy to support your OS, or
- The plugin is not suitable for your OS:
  - e.g. A Linux-specific `iptables` setting plugin is not suitable on macOS and Windows

### Qv2ray crashed after loading a plugin:

- Please try `qv2ray(.exe) --noPlugin` to skip loading all plugins.
- If the Qv2ray started successfully, please report the error using methods mentioned above.
