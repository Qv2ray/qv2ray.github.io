---
title: Features
---

# Features

## Availability

| Windows                                                                                             | Linux                                                                                                                                                                        | macOS                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Portable Version](https://github.com/Qv2ray/Qv2ray/releases/latest)                                | AppImage [Stable](https://github.com/Qv2ray/Qv2ray/releases/latest) / [Testing](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+matrix+-+cmake%22) | DMG Installer [Stable](https://github.com/Qv2ray/Qv2ray/releases/latest) / [Testing](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+matrix+-+cmake%22) |
| [Installer Version](https://github.com/Qv2ray/Qv2ray/releases/latest)                               | ArchLinuxCN [Stable](https://build.archlinuxcn.org/packages/#/qv2ray) / [Testing](https://build.archlinuxcn.org/packages/#/qv2ray-dev-git)                                   | Homebrew Cask [Stable](https://formulae.brew.sh/cask/qv2ray)                                                                                                                      |
| [Scoop Package Manager](https://github.com/lukesampson/scoop-extras/blob/master/bucket/qv2ray.json) | AUR [Stable](https://aur.archlinux.org/packages/qv2ray) / [Testing](https://aur.archlinux.org/packages/qv2ray-dev-git)                                                       |                                                                                                                                                                                   |
|                                                                                                     | Debian [Stable](https://github.com/Qv2ray/Qv2ray/releases/latest) / [Testing](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+debian+package%22)   |                                                                                                                                                                                   |
|                                                                                                     | Fedora [Stable](https://build.opensuse.org/package/show/home:zzndb/Qv2ray) / [Testing](https://build.opensuse.org/package/show/home:zzndb/Qv2ray-preview)                    |                                                                                                                                                                                   |
|                                                                                                     | openSUSE [Stable](https://build.opensuse.org/package/show/home:zzndb/Qv2ray) / [Testing](https://build.opensuse.org/package/show/home:zzndb/Qv2ray-preview)                  |                                                                                                                                                                                   |
|                                                                                                     | Flathub [Stable](https://flathub.org/apps/details/com.github.Qv2ray)                                                                                                         |                                                                                                                                                                                   |
|                                                                                                     | Snapcraft [Stable / RC / Testing](https://snapcraft.io/qv2ray)                                                                                                               |                                                                                                                                                                                   |

## Special Features

### Plugin Support

With our plugin system, you can use Trojan/SSR together within Qv2ray.

And [benefit from the robost routing engine](plugins/v2ray-integration.md) provided by V2ray.

**No More Buggy PAC Configurations**

**Imagine SSR / Trojan (and many more in the future) connections within ONE GUI?**

### Routing Matrix

Qv2ray’s built-in routing matrix will allow you configure your custom routing scheme, especially when you want to access some websites, which is not in the default routing rule, with proxy.

**Following V2ray’s Routing Syntax, but with Auto-Completing (Typo-free)**

### Full-featured V2ray Configuration GUI

Our full-featured complex editor allows you create, edit your own connection configuration. Including Routing Table, Multiple inbounds / outbounds.

**Just The Same As Writing V2ray’s JSON Configuration File Directly, But With Powerful GUI**

### V2ray Log highlighter

The log of V2ray is the most difficult thing to understand if things goes wrong.

Qv2ray provides syntax highlighting for V2ray’s log output.

**Saving your time when debugging the connection issue.**

## General Features

### Connection Importing

- Versatile Host Importing
  - Batched Vmess Importing with Error Tolerance
  - Direct Importing from JSON Files
  - Screen QR Code / QR Code File Importing
  - Advanced / Manual Configuration
- Subscriptions

  - Manual Updating
  - Automated Updating

### Connection Editing

- Built-in Host Editors

  - Simple Outbound Editor
  - Custom JSON Editor

- Full Functionality Support

  - Automatic Connecting
  - Multiplexing
  - Start with System Login
  - System Proxy Integration (Windows / macOS / Linux GNOME and KDE)

### Connection Exporting

- Export as QR Code
- Export **Single** Connection Share Link
- Export **Group** Connection Share Link

### Connection Management

- Real-time Speed & Data Usage Monitoring

  - Inbound / Outbound Statistics in Status Bar
  - **Dedicated Speed Graph**

- Latency Testing (TCP)

  - Single Host Testing
  - Batched Testing
