---
title: 配置 V2Ray 核心
---

# 配置 V2Ray 核心

在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 v2ray 核心完成一些必要的配置。

## 下载 V2Ray 核心文件

由于一些原因，Qv2ray 本身并**不包含** V2ray 的核心可执行文件，这些核心文件来自一个叫做 V2Ray core 的项目，需要用户手动下载安装到指定位置。

如果你正在使用的 Linux 发行版拥有一个可以自动安装 V2Ray 核心文件的包管理系统，那通过包管理安装 Qv2ray 是最好的选择，因为系统可以自动处理 v2ray 核心的更新。对于 Arch Linux 用户而言，你需要安装 `v2ray`、`v2ray-geoip` 和 `v2ray-domain-list-community` 这三个软件就足够了。对于其他的发行版，请接着阅读下面的说明。

请前往 [v2ray/v2ray-core 官方 Release 页面](https://github.com/v2ray/v2ray-core/releases)，并下载最新的符合当前系统版本的稳定版软件包。比如，64 位 Windows 用户可以下载 `v2ray-windows-64.zip` ；MacOS 用户可以下载 `v2ray-macos.zip` ；大多数 Linux 用户可以下载 `v2ray-linux-64.zip`。

::: danger 警告

如果你在 `x86_64`（`amd64`）平台上运行 Qv2ray，请不要下载 `v2ray-linux-arm64.zip`。明确地说，`arm64` 和 `amd64` 完全不同。请确保你不会这样做。

:::

## 放置你的 V2Ray 核心

将 v2ray 核心文件提取到一个固定的位置。 默认情况下，建议将文件提取到 `$QV2RAY_CONFIG_PATH/vcore` 中，其中 `$QV2RAY_CONFIG_PATH` 是 Qv2ray 存储其数据的目录。

目录 `vcore` 可能位于以下位置之一：

- `./` （在 Qv2ray 可执行文件旁边，建议 Windows 用户使用）

- `~/.qv2ray/`（在 home 文件夹的独立目录中）

- `~/.config/qv2ray` （标准 XDG 配置路径）

确保这些文件直接存在于 `vcore` 目录中:

```
geoip.dat geosite.dat v2ctl v2ray
```

:::warning 对于 Linux / macOS 用户的温馨提示

您应该始终为 `v2ray` 和 `v2ctl` 授予**可执行权限**。这通常通过在这些文件上执行 `chmod + x` 来完成。

:::

## 配置 Qv2ray 去使用核心

打开 Qv2ray 并进入**首选项**窗口。在 **一般设置 - V2Ray 设置** 中，配置如下：

- **核心可执行文件路径**：将此设置为您的 V2Ray 可执行文件所在的位置。 这可以是 Windows 上的 `v2ray.exe` 的完整路径，也可以是 Linux / macOS 上的 `v2ray` 可执行文件的完整路径。

- **V2ray 资源目录**：将其设置为 `geoip.dat` 和 `geosite.dat` 所在的位置。

配置完成后，你可以点击 **检查 V2Ray 核心设置** 按钮来验证你的 V2Ray 核心设置。 重复尝试，直到你通过了检查。

::: tip 给 Arch Linux 用户的提示
若您使用 `v2ray` 软件包组，推荐的路径配置如下：
* **核心可执行文件路径**: `/usr/bin/v2ray`
* **V2ray 资源目录**: `/usr/lib/v2ray`
:::