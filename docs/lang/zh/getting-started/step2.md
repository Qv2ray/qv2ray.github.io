---
title: 配置 V2Ray Core
---

# 步骤 2: 配置 V2Ray Core

After a correct and successful installation of Qv2ray onto your system, it *is* necessary to configure V2Ray Core before actually using it.

## 下载 V2Ray 核心文件

Qv2ray itself **does not** include a distribution of V2Ray executable files, namely the `v2ray-core`, and most of the time required for users is to download them.

**查看 [V2Fly 安装指南](https://www.v2fly.org/guide/install.html) 了解更多详情。**

:::tip 核心管理：手动对自动 如果您正在使用 V2Ray 核心和资产包进行配置。 它将是最好通过软件包管理器安装，因为系统将处理V2ray 核心的自动升级。 对于Arch Linux用户，仅安装一个 `v2ray` 就足够了。 关于其他分发，请改为： :::

:::tip 适用于 Windows 10 ARM64 用户 从 V2Ray Core 4.27, V2Ray 项目团队为 Windows 10 提供了一个基于ARM32 (armv7)的内核。 建议Windows 10 ARM64 用户使用此版本的内核获取更好的性能。 :::

:::danger sharpen your Eyes 请不要下载 `v2ray-Linux-arm64 IP` 如果您在 `x86_64` (`amd64`) 平台上运行 Qv2ray 要清楚， `arm64` 完全不同于 `amd64`。 :::

### 手动下载

**Official Download Link：** <https://github.com/v2fly/v2ray-core/releases>

Extract the v2ray core files into a fixed path. It is suggested to extract the files into `$QV2RAY_CONFIG_PATH/vcore`, where `$QV2RAY_CONFIG_PATH` is the directory where Qv2ray store it’s data.

目录 `vcore` 可能在这些位置之一：

- `./config/` (`config` subdirectory aside Qv2ray executable, recommended for Windows Users)
- `~/.qv2ray/` (在你的主文件夹的专用目录中)
- `~/.config/qv2ray/` (标准 XDG 配置路径)

Please make sure that these files exists directly in your `vcore` directory:

1. `v2ray` / `v2ray.exe`: 核心可执行文件
2. `v2ctl` / `v2ctl.exe`: 核心控制程序
3. `geoip.dat`: IP 规则数据库
4. `geosite.dat`: 域规则数据库

:::警告用于 Linux / macOS 用户的特殊提示 你应该始终给予 **可执行权限** `v2ray` 和 `v2ctl` 这通常是通过在这些文件上执行 `chmod +x` 来完成的。

在 macOS上，如果您使用 Homebrew 安装 v2ray-core，您可以忽略此提示。 :::

## 在 Qv2ray 中配置 V2Ray Core

打开 Qv2ray 并转到首选项窗口。 In **[Kernel Settings](qv2ray://open/preference/kernel)**, configure the following options:

- **核心可执行文件路径**: 将此设置为你的 V2Ray 可执行文件存在的地方。 这可能是您在 Windows 上的 `v2ray.exe` 的完整路径，或者 `v2ray` 在 Linux / macOS 上的可执行文件。
- **V2Ray Assets Directory**: 将此设定为 `geoip.dat` 和 `geosite.dat` 所在位置。

配置后，您可以点击 **检查 V2Ray 核心设置** 按钮来验证您的 V2Ray 核心设置。 重复尝试，直到检查通过。

:::警告没有 Matryoshka! 永远不要点 **核心可执行路径** 到 **Qv2ray 可执行性**！ 这不会造成叉式炸弹，因为Qv2ray 是一次性的。 注意V2Ray Core 可执行文件就像 `v2ray` , `v2ray.exe` 或 `wv2ray。 xe`, 而不是 `qv2ray` 或 `qv2ray.exe`, `v2rayN.exe`！ :::
