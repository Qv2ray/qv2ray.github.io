---
title: 配置 V2Ray 核心
---

# 配置 V2Ray 核心

在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 V2Ray 核心完成一些必要的配置。

## 下载 V2Ray 核心文件

由于某些众所周知的政策原因，Qv2ray 本身并 **不包含** V2Ray 核心可执行文件。这些核心文件来自一个叫做 `v2ray-core` 的项目，需要用户手动下载安装到指定位置。
你可参照 [V2Fly 官方指南](https://www.v2fly.org/guide/install.html) 处的指示进行操作。

:::tip 手动管理 vs 自动管理
如果你正在使用的发行版拥有一个可以自动安装 V2Ray 核心文件的包管理系统，那通过包管理安装 Qv2ray 是最好的选择，因为系统可以自动处理 V2Ray 核心的更新。例如，对于 Arch Linux 用户而言，安装 `v2ray` 软件包就足够了。对于其他情形，请接着阅读下面的说明。
:::

请前往 [v2fly/v2ray-core 官方 Release 页面](https://github.com/v2fly/v2ray-core/releases)，并下载最新的符合当前系统版本的稳定版软件包。比如，64 位 Windows 用户可以下载 `v2ray-windows-64.zip` ；macOS 用户可以下载 `v2ray-macos-64.zip` ；大多数 Linux 用户可以下载 `v2ray-linux-64.zip`。

:::tip 给 Windows 10 ARM64 用户的建议
从 V2Ray Core 4.27 起，V2Ray 项目组为 Windows 10 提供了基于 ARM32（ armv7 ）的内核，建议 Windows 10 ARM64 用户使用该版本的内核以获取更好的性能表现。
:::

:::danger 擦亮眼睛
如果你在 `x86_64`（`amd64`）平台上运行 Qv2ray，请不要下载 `v2ray-linux-arm64.zip`。明确地说，`arm64` 和 `amd64` 完全不同。请确保你不会这样做。
:::

## 放置你的 V2Ray 核心

将下载到的核心文件解压缩到一个固定的位置。默认情况下，我们建议将文件提取到 `$QV2RAY_CONFIG_PATH/vcore` 中，其中 `$QV2RAY_CONFIG_PATH` 是 Qv2ray 存储其数据的目录。

目录 `vcore` 可以在下面的任一位置：

- `./config/` （在 Qv2ray 可执行文件旁边的 `config` 子文件夹内，建议 Windows 用户使用）
- `~/.qv2ray/`（在 home 文件夹的独立目录中）
- `~/.config/qv2ray/` （标准 XDG 配置路径）

之后，请确保这些文件直接存在于 `vcore` 目录中：

1. `v2ray` 或 `v2ray.exe`：核心可执行文件
2. `v2ctl` 或 `v2ctl.exe`：核心控制程序
3. `geoip.dat`：IP 规则数据库
4. `geosite.dat`：域名规则数据库

:::warning 对于 Linux / macOS 用户的温馨提示
您应该始终为 `v2ray` 和 `v2ctl` 授予**可执行权限**。这通常通过对这些文件执行 `chmod +x ` 来完成。
:::

## 配置 Qv2ray 去使用核心

打开 Qv2ray 并进入**首选项**窗口。在 **[内核设置](qv2ray://open/preference/kernel)** 中，进行如下配置：

- **核心可执行文件路径**：将此设置为您的 V2Ray 可执行文件所在的位置。 这可以是 Windows 上的 `v2ray.exe` 的完整路径，也可以是 Linux / macOS 上的 `v2ray` 可执行文件的完整路径。

- **V2ray 资源目录**：将其设置为 `geoip.dat` 和 `geosite.dat` 所在的位置。

配置完成后，你可以点击 **检查 V2Ray 核心设置** 按钮来验证你的 V2Ray 核心设置。 重复尝试，直到你通过了检查。

:::warning 严禁套娃！
永远不要把 **核心可执行文件路径** 指向 **Qv2ray 程序本体**！
好在 Qv2ray 本身是单例模式运行的，你不会因此而引发 fork 炸弹。
一定要注意，V2Ray 核心可执行文件是 `v2ray` 或者 `v2ray.exe`，而不是 `qv2ray` 或 `qv2ray.exe`！
:::

:::tip 给 Arch Linux 用户的提示
若您使用 `v2ray` 软件包，推荐的路径配置如下：

* **核心可执行文件路径**: `/usr/bin/v2ray`
* **V2ray 资源目录**: `/usr/share/v2ray`
:::
