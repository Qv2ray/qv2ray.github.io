---
title: Using Plugins
---

# Plugins

- This page explains about the usage of Qv2ray plugin system
- **To use a plugin, you need at least `Qv2ray v2.5.0-pre1 BuildVersion: 5264`**

## What is a plugin

A Qv2ray Plugin is, technically, a shared library that implements a specific interface, which in order to extent the functionality of Qv2ray.

To make it simple, a Qv2ray Plugin is an extension of Qv2ray, which allows you enjoy more features, Qv2ray workgroup has published 3 plugins:

- QvPACPlugin - Allows you to use advanced PAC feature.
- QvSSRPlugin - Allows you to use ShadowSocksR in Qv2ray.
- QvTrojanPlugin - Allows you to use Trojan in Qv2ray

## How to download and load a plugin

You can download and enable as many plugins as you want.

To install a plugin, you need to do these:

### 1. Download the plugin

   - Some plugins may be shipped via package manager, you can use them if you want.
     - *After installed the plugin package, please go to **step 3**.*
   - From a plugin’s release page, download the file according to your OS.
### 2. Put your plugin inside `plugins` directory

- Click “Open Local Plugin Folder” in the “Plugin Manager”, which a folder named `plugins` will be opened.
- Place your downloaded plugin `dll`/`dylib`/`so` file into this directory. 

### 3. Restart Qv2ray & Enable Plugins

   - Open the “Plugin Manager”, you’ll see the plugin being found.
   - Check the “enabled” checkbox on the left hand side.

### 4. Benefit!

- Your plugin is ready to use!

## Plugin FAQ

### I cannot find a plugin file for my OS:

- This can happen if the plugin writer is lazy to support your OS, or
- The plugin is not suitable for your OS: 
  - e.g. A Linux-specific `iptables` setting plugin is not suitable on macOS and Windows

### I have put the plugin files with correct OS/architecture into the `plugins` folder, but Qv2ray didn’t  show it up.

- This is more difficult to debug.
- It’s suggested to report this issue directly to the plugin provider, please include:
  - The exact information of Qv2ray, with **where you have downloaded it**, **the version**, and the **build version**.
  - The exact version of the Plugin, with the **sha256** or **md5** of the plugin file.
  - Qv2ray log, can be collected by executing `qv2ray(.exe) --debug > log.txt`

### Qv2ray crashed after loading a plugin:

- Please try `qv2ray(.exe) --noPlugin` to skip loading all plugins.
- If the Qv2ray started successfully, please report the error as above.

