---
title: 配置 V2Ray Core
---

# 第二步：配置 V2Ray 核心

成功将 Qv2ay 安装到系统后，进行 V2Ray Core 的配置*是*有必要的。

## 下载 V2Ray 核心文件

Qv2ray 本身并 **不包含** 名为 `v2ray-core` 的 V2Ray 可执行文件 ，多数时候您需要自己下载。

**查看 [V2Fly 安装指南](https://www.v2fly.org/guide/install.html) 了解更多详情。**

:::tip 核心管理：手动还是自动？

如果您正在使用 V2Ray core 和 assets。最好通过软件包管理器安装，因为系统将处理 V2ray 核心的自动升级。对于 Arch Linux 用户，仅安装一个 `v2ray` 就足够了。关于其他发行版，请阅读如下：

:::

:::tip 给 Windows 10 ARM64 用户的提示

自 V2Ray Core 4.27 以来，Project V2Ray 团队开始提供 Windows 10 ARM32 (armv7) 架构。因此我们推荐 Windows 10 ARM64 用户使用该版本的内核以获得更好的性能。

:::

:::danger 注意！

当你想在 `x86_64`（即 `amd64`）平台上使用 Qv2ray 时，请不要下载 `v2ray-linux-arm64.zip` 安装包。明确的说，`arm64` 和 `amd64` 是完全不同的两个概念。

:::

### 手动下载

**官方下载链接：** <https://github.com/v2fly/v2ray-core/releases>

将 v2ray 核心文件提取到一个固定路径。建议将文件提取到 `$QV2RAY_CONFIG_PATH/vcore`，其中 `$QV2RAY_CONFIG_PATH` 是 Qv2ray 存储数据的目录。

`vcore` 可能提取到的位置示例：

- `./config/` （这里的 `config` 指在 Qv2ray 可执行文件旁边的 `config` 子目录，Windows 用户推荐）
- `~/.qv2ray/` （在您的 `home` 文件夹的专用子目录中）
- `~/.config/qv2ray/` (标准 XDG 配置路径)

请确保这些文件存在于您的 `vcore` 目录中：

1. `v2ray` / `v2ray.exe`: 核心可执行文件
2. `v2ctl` / `v2ctl.exe`: 核心控制程序
3. `geoip.dat`: IP 规则数据库
4. `geosite.dat`: 域规则数据库

:::warning 给 Linux / macOS 用户的特殊提示

你应该始终给予 `v2ray` 和 `v2ctl` **可执行权限**。这通常是需要对这些文件执行一次 `chmod +x` 。

在 macOS 上，如果您使用 Homebrew 安装 v2ray-core，您可以忽略此提示。

:::

## 在 Qv2ray 中配置 V2Ray Core

打开 Qv2ray 并转到首选项窗口。在 **[内核设置](qv2ray://open/preference/kernel)** 中，配置以下选项：

- **核心可执行文件路径**: 将此设置为您的 V2Ray 可执行文件存在的地方。这可能是您在 Windows 上的 `v2ray.exe` 的完整路径，或者 `v2ray` 在 Linux / macOS 上的可执行文件。
- **V2Ray 资源目录**: 将此设定为 `geoip.dat` 和 `geosite.dat` 所在位置。

配置后，您可以点击 **检查 V2Ray 核心设置** 按钮来验证您的 V2Ray 核心设置。重复尝试，直到检查通过。

:::warning 严禁套娃！

永远不要设置 **核心可执行路径** 到 **Qv2ray 的可执行程序路径** ！这不会造成进程爆炸，因为 Qv2ray 是一个单实例程序。注意可用的 V2Ray Core 可执行文件看起来就像 `v2ray`、`v2ray.exe` 或 `wv2ray.exe`，而不是 `qv2ray`、`qv2ray.exe` 或 `v2rayN.exe`！

:::
