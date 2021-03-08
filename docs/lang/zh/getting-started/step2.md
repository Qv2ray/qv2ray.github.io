---
title: 配置 V2Ray Core
---

# 步骤 2: 配置 V2Ray Core

在正确和成功安装Qv2ray 到您的系统后，需要在V2Ray 核心文件上配置Qv2ray 才能实际使用。

## 下载 V2Ray 核心文件

出于政治原因，Qv2ray 本身 **不** 包括发行V2Ray 可执行文件， 即 `v2ray-core`，用户所需的大部分时间是下载。

**查看 [V2Fly 安装指南](https://www.v2fly.org/guide/install.html) 了解更多详情。**

:::tip 核心管理：手动对自动 如果您正在使用 V2Ray 核心和资产包进行配置。 它将是最好通过软件包管理器安装，因为系统将处理V2ray 核心的自动升级。 对于Arch Linux用户，仅安装一个 `v2ray` 就足够了。 关于其他分发，请改为： :::

:::tip 适用于 Windows 10 ARM64 用户 从 V2Ray Core 4.27, V2Ray 项目团队为 Windows 10 提供了一个基于ARM32 (armv7)的内核。 建议Windows 10 ARM64 用户使用此版本的内核获取更好的性能。 :::

:::danger sharpen your Eyes 请不要下载 `v2ray-Linux-arm64 IP` 如果您在 `x86_64` (`amd64`) 平台上运行 Qv2ray 要清楚， `arm64` 完全不同于 `amd64`。 请确保您不喜欢这么做。 :::

### 通过软件包管理器下载 V2RAy Core

#### Homebrew(macOS)

```bash
酿造安装 v2ray
```

当使用 Homebrew时，V2Ray的可执行文件位置是 `/usr/local/bin/v2ray`, 资产位置是 `/usr/local/shar/v2ray`。

#### 分数 (Windows)

```pwsh
抓取安装 v2ray
```

当使用Scop安装时，V2Ray的可执行文件位置是 `<User Directory>\scoop\apps\v2ray\current\v2ray.exe`, 资产位置是 `<User Directory>\scoop\apps\v2ray\current`。

#### 巧克力(Windows)

```cmd
choco install v2ray
```

软件将安装在 `X:\tools\v2ray` (**_X_** 是您的系统磁盘驱动器)。

#### Debian, Ubuntu and other Debian基础衍生物。

查看 <https://apt.v2fly.org>

#### Arch Linux及其衍生工具

```bash
sudo pacman -S v2ray
```

二进制文件将安装到 `/usr/bin/v2ray`，资源文件位于 `/usr/shar/v2ray/`。

#### V2Ray 官方安装脚本(使用 Linux 发行版系统)。

查看 <https://github.com/v2fly/fhs-install-v2ray>

虽然此脚本旨在安装 V2Ray 作为服务器，但它可以用作客户端而不存在任何问题。 用于Qv2ray，建议关闭服务器服务。

```bash
systemctl 禁用 v2ray --now
```

### 手动下载

**官方下载链接：** <https://github.com/v2fly/v2ray-core/releases>

将 v2ray 核心文件提取为固定位置。 默认情况下，建议将文件提取到`$QV2RAY_CONFIG_PATH/vcore`，`$QV2RAY_CONFIG_PATH`是Qv2ray 存储数据的目录。

目录 `vcore` 可能在这些位置之一：

- `./config/` (`config` 子目录留空Qv2ray 可执行文件，推荐给 Windows 用户)
- `~/.qv2ray/` (在你的主文件夹的专用目录中)
- `~/.config/qv2ray/` (标准 XDG 配置路径)

然后请确保这些文件直接存在于您的 `vcore` 目录中：

1. `v2ray` / `v2ray.exe`: 核心可执行文件
2. `v2ctl` / `v2ctl.exe`: 核心控制程序
3. `geoip.dat`: IP 规则数据库
4. `geosite.dat`: 域规则数据库

:::警告用于 Linux / macOS 用户的特殊提示 你应该始终给予 **可执行权限** `v2ray` 和 `v2ctl` 这通常是通过在这些文件上执行 `chmod +x` 来完成的。

在 macOS上，如果您使用 Homebrew 安装 v2ray-core，您可以忽略此提示。 :::

## 在 Qv2ray 中配置 V2Ray Core

打开 Qv2ray 并转到首选项窗口。 在 **[核心设置](qv2ray://open/preference/kernel)**中，配置以下选项：

- **核心可执行文件路径**: 将此设置为你的 V2Ray 可执行文件存在的地方。 这可能是您在 Windows 上的 `v2ray.exe` 的完整路径，或者 `v2ray` 在 Linux / macOS 上的可执行文件。
- **V2Ray Assets Directory**: 将此设定为 `geoip.dat` 和 `geosite.dat` 所在位置。

配置后，您可以点击 **检查 V2Ray 核心设置** 按钮来验证您的 V2Ray 核心设置。 重复尝试，直到检查通过。

:::警告没有 Matryoshka! 永远不要点 **核心可执行路径** 到 **Qv2ray 可执行性**！ 这不会造成叉式炸弹，因为Qv2ray 是一次性的。 注意V2Ray Core 可执行文件就像 `v2ray` , `v2ray.exe` 或 `wv2ray。 xe`, 而不是 `qv2ray` 或 `qv2ray.exe`, `v2rayN.exe`！ :::
