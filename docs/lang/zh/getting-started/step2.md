---
title: 配置 V2Ray Core
---

# 第二步：配置 V2Ray 核心

成功将 Qv2ay 安装到系统后，进行 V2Ray Core 的配置*是*有必要的。

## 下载 V2Ray 核心文件

Qv2ray 本身 **不** 包含V2Ray 可执行文件的， `v2ray-core`，多数时候是要自己下载。

**查看 [V2Fly 安装指南](https://www.v2fly.org/guide/install.html) 了解更多详情。**

:::tip 核心管理：手动 / 自动 如果您正在使用 V2Ray core 和 assets。最好通过软件包管理器安装，因为系统将处理 V2ray 核心的自动升级。 对于 Arch Linux 用户，仅安装一个 `v2ray` 就足够了。 关于其他发行版，请阅读如下： :::

:::tip For Windows 10 ARM64 users From V2Ray Core 4.27, the V2Ray project team has provided an ARM32 (armv7)-based kernel for Windows 10. It is recommended that Windows 10 ARM64 users use this version of the kernel to obtain better performance. :::

:::danger Sharpen Your Eyes Do not download `v2ray-linux-arm64.zip` if you are running Qv2ray on `x86_64` (`amd64`) platform. To make it clear, `arm64` is completely different from `amd64`. :::

### Manual Download

**Official Download Link：** <https://github.com/v2fly/v2ray-core/releases>

Extract the v2ray core files into a fixed path. It is suggested to extract the files into `$QV2RAY_CONFIG_PATH/vcore`, where `$QV2RAY_CONFIG_PATH` is the directory where Qv2ray store it’s data.

The directory `vcore` could be in one of these locations:

- `./config/` (`config` subdirectory aside Qv2ray executable, recommended for Windows Users)
- `~/.qv2ray/` (in a dedicated directory of your home folder)
- `~/.config/qv2ray/` (standard XDG configuration path)

Please make sure that these files exists directly in your `vcore` directory:

1. `v2ray` / `v2ray.exe`: core executable file
2. `v2ctl` / `v2ctl.exe`: core controlling program
3. `geoip.dat`: IP rules database
4. `geosite.dat`: domain rules database

:::warning Special Hint for Linux / macOS Users You should always grant **executable permission** to `v2ray` and `v2ctl`. This is usually done by executing `chmod +x` on these files.

On macOS, if you use Homebrew to install v2ray-core, you can ignore this tip. :::

## Configure V2Ray Core in Qv2ray

Open Qv2ray and go to Preference Window. In **[Kernel Settings](qv2ray://open/preference/kernel)**, configure the following options:

- **Core Executable Path**: Set this to where your V2Ray executable exists. This can be the full path of your `v2ray.exe` on Windows, or that `v2ray` executable file on Linux / macOS.
- **V2Ray Assets Directory**: Set this to where `geoip.dat` and `geosite.dat` are located.

After configuring, you can click on **Check V2Ray Core Settings** button to validate your V2Ray core settings. Repeat trying until you get the check passed.

:::warning No Matryoshka! Never ever point **Core Executable Path** to **Qv2ray Executable**! This will not cause a fork bomb since Qv2ray is single-instanced. Do note that V2Ray Core Executable is like `v2ray` , `v2ray.exe` or `wv2ray.exe`, instead of `qv2ray` or `qv2ray.exe`, `v2rayN.exe`! :::
