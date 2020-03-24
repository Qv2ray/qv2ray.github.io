---
title: 配置 v2ray 核心
---

# 配置 `v2ray` 核心

在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 v2ray 核心完成一些必要的配置。

## 1. 下载安装 `v2ray` 核心文件

由于一些原因，Qv2ray 本身并不包含 V2ray 的核心可执行文件，这些核心文件来自一个叫做 `v2ray core` 的项目，需要用户手动下载安装到指定位置。

如果你正在使用的 Linux 发行版拥有一个可以自动安装 `v2ray` 核心文件的包管理系统，那通过包管理安装 Qv2ray 是最好的选择，因为系统可以自动处理 v2ray 核心的更新。对于 Arch Linux 用户而言，你需要安装 `v2ray`、`v2ray-geoip` 和 `v2ray-domain-list-community` 这三个软件就足够了；对于其他的发行版，请接着阅读下面的说明。

请前往[`v2ray/v2ray-core` 官方 Release 页面](https://github.com/v2ray/v2ray-core/releases)，并下载最新的符合当前系统版本的稳定版软件包。比如，64 位 Windows 用户可以下载 `v2ray-windows-64.zip` ；MacOS 用户可以下载 `v2ray-macos.zip` ；大多数 Linux 用户可以下载 `v2ray-linux-64.zip`。

解压下载的压缩包到一个特定的位置。这个位置可以是任意的，但默认应该放在 `~/.qv2ray/vcore` 下。其中的 `~` 的意思是你用户名的“家目录”。你要确保在你解压到的文件夹下，这些文件是直接存在的。

```
geoip.dat   geosite.dat   v2ctl   v2ray
```

## 2. 让 Qv2ray 使用安装好的 V2ray 核心工作

点击“首选项”，在弹出窗口中设置 vCore 的路径为你 V2ray 二进制可执行程序的安装路径（并不是叫做 v2ray 的文件夹，而是叫做 `v2ray` 的二进制可执行程序），然后把 assets 路径设置为包含 `geoip.dat` 和 `geosite.dat` 这两个文件的文件夹目录。


