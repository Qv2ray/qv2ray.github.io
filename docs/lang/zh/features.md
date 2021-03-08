---
title: 功能与特性
---

# 特色功能

## 插件支持

| 窗口                                                                                       | Linux                                                                                                                                                               | macOS                                                                                                                                                              |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [便携式版本](https://github.com/Qv2ray/Qv2ray/releases/latest)                                | AppImage [稳定](https://github.com/Qv2ray/Qv2ray/releases/latest) / [测试](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+matrix+-+cmake%22) | DMG 安装器 [稳定](https://github.com/Qv2ray/Qv2ray/releases/latest) / [测试](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+matrix+-+cmake%22) |
| [安装程序版本](https://github.com/Qv2ray/Qv2ray/releases/latest)                               | ArchLinuxCN [稳定](https://build.archlinuxcn.org/packages/#/qv2ray) / [测试](https://build.archlinuxcn.org/packages/#/qv2ray-dev-git)                                   | Homebrew Cask [稳定](https://formulae.brew.sh/cask/qv2ray)                                                                                                           |
| [Scop软件包管理器](https://github.com/lukesampson/scoop-extras/blob/master/bucket/qv2ray.json) | AUR [稳定](https://aur.archlinux.org/packages/qv2ray) / [测试](https://aur.archlinux.org/packages/qv2ray-dev-git)                                                       |                                                                                                                                                                    |
|                                                                                          | Debian [稳定](https://github.com/Qv2ray/Qv2ray/releases/latest) / [测试](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+debian+package%22)   |                                                                                                                                                                    |
|                                                                                          | Fedora [稳定](https://build.opensuse.org/package/show/home:zzndb/Qv2ray) / [测试](https://build.opensuse.org/package/show/home:zzndb/Qv2ray-preview)                    |                                                                                                                                                                    |
|                                                                                          | openSUSE [稳定](https://build.opensuse.org/package/show/home:zzndb/Qv2ray) / [测试](https://build.opensuse.org/package/show/home:zzndb/Qv2ray-preview)                  |                                                                                                                                                                    |
|                                                                                          | Flahub [稳定](https://flathub.org/apps/details/com.github.Qv2ray)                                                                                                     |                                                                                                                                                                    |
|                                                                                          | 快乐器 [稳定的 /RC / 测试](https://snapcraft.io/qv2ray)                                                                                                                     |                                                                                                                                                                    |

## 路由矩阵设置

### 多种服务器导入方式

通过我们的插件系统，你可以使用 Qv2ray 的同时使用 SSR/Trojan，以及获得 V2ray 路由引擎带来的强大体验。

并且 [受益于V2ray提供的抢劫路由引擎](plugins/v2ray-integration.md)。

**根本不需要额外设置 PAC**

**一个 GUI 即可配置 V2ray / SSR / Trojan 等服务（_更多敬请期待_）**

### 订阅

Qv2ray 内置的路由矩阵允许你配置自己的，个性化的路由方案。 特别是当你想要（直连/使用代理）访问那些不在默认路由规则里的网站。

**路由矩阵语法跟随 V2ray 的路由设置，并带有自动补全（_避免发生打错字的尴尬情况_）**

### TCP 延迟测试

我们的全功能复杂编辑器允许您创建，编辑您自己的连接配置。 包括路由表格，多个内界/外界。

**就像手动写 V2ray 的 JSON 配置一样，但是你将拥有强大流程图式路由编辑。**

### V2ray 日志高亮

当出问题的时候，V2ray 的日志是最难搞懂的

Qv2ray 提供 V2ray 日志的语法高亮，节省你调试连接的时间

**调试连接问题时节省您的时间。**

## 全功能 V2ray GUI

### 导入连接

- Versatile 主机导入
  - 高容错的 VMESS 链接批量导入
  - 直接从 JSON 文件导入
  - 屏幕二维码/二维码文件导入
  - 高级/手动配置
- 手动更新订阅

  - 自动更新订阅
  - 自动连接到

### 连接编辑

- 内置服务器编辑器

  - 简单的出站编辑
  - 自定义 JSON 编辑器

- 一般功能支持

  - 连接管理
  - 复合中
  - 开机启动
  - 系统代理集成 (Windows / macOS / Linux GNOME 和 KDE)

### 导出连接

- 导出为二维码
- 导出单个连接分享链接
- 导出组分享链接

### 连接管理

- 实时速度流量监控

  - 状态栏出站入站统计
  - **独立的速度图表**

- 延迟测试 (TCP)

  - 单个服务器测试
  - 批量服务器测试
