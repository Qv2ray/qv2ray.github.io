---
title: Configuring V2Ray Core
---

# Step 2: Configuring V2Ray Core

After a correct and successful installation of Qv2ray onto your system, it is necessary to configure Qv2ray on V2Ray core files before actually using it.

## Download V2Ray Core Files

Due to political reasons, Qv2ray itself **does not** include a distribution of V2Ray executable files, namely the `v2ray-core`, and most of the time required for users is to download them.
You may check [V2Fly Installation Guide](https://www.v2fly.org/guide/install.html) for the official instructions.

:::tip Core Management: Manual vs Automatic
If you are using a distribution with V2Ray core and assets packages, it’ll be the best to install through package manager since the system will handle the automatic upgrade of v2ray core. For Arch Linux users, installing only one package `v2ray` is enough. For other distributions, please read below.
:::

Go to [the official GitHub Release page of v2fly/v2ray-core](https://github.com/v2fly/v2ray-core/releases) and check the recent stable builds. Choose according to your platform in the asset files. For example, Windows 64-bit users may download `v2ray-windows-64.zip`, Mac OS users may download `v2ray-macos-64.zip`, and for most of the Linux users, `v2ray-linux-64.zip`.

:::tip For Windows 10 ARM64 users
From V2Ray Core 4.27, the V2Ray project team has provided an ARM32 (armv7)-based kernel for Windows 10. It is recommended that Windows 10 ARM64 users use this version of the kernel to obtain better performance.
:::

:::danger Sharpen Your Eyes
Do not download `v2ray-linux-arm64.zip` if you are running Qv2ray on `x86_64` (`amd64`) platform.
To make it clear, `arm64` is completely different from `amd64`. Make sure you don't do like this.
:::

## Place Your V2Ray Core

Extract the v2ray core files into a fixed position. As a default, it is suggested to extract the files into `$QV2RAY_CONFIG_PATH/vcore`, where `$QV2RAY_CONFIG_PATH` is the directory where Qv2ray store it’s data.

The directory `vcore` could be in one of these locations:

 - `./config/` (`config` subdirectory aside Qv2ray executable, which is recommended for Windows Users)
 - `~/.qv2ray/` (in a dedicated directory of your home folder)
 - `~/.config/qv2ray/` (standard XDG configuration path)

Afterwards, please make sure that these files exists directly in your `vcore` directory:

1. `v2ray` / `v2ray.exe`: core executable file
2. `v2ctl` / `v2ctl.exe`: core controlling program
3. `geoip.dat`: IP rules database
4. `geosite.dat`: domain rules database

:::warning Special Hint for Linux / macOS Users
You should always grant **executable permission** to `v2ray` and `v2ctl`.
This is usually done by executing `chmod +x` on these files.

On macOS, if you use Homebrew to install v2ray-core, you can ignore this tip.
:::

## Configure Qv2ray to Use the Core

Open Qv2ray and go to Preference Window. In **[Core Settings](qv2ray://open/preference/kernel)**, configure the following options:

 - **Core Executable Path**: Set this to where your V2Ray executable exists. This can be the full path of your `v2ray.exe` on Windows, or that `v2ray` executable file on Linux / macOS.
 - **V2Ray Assets Directory**: Set this to where `geoip.dat` and `geosite.dat` are located.

After configuring, you can click on **Check V2Ray Core Settings** button to validate your V2Ray core settings. Repeat trying until you get the check passed.

:::warning No Matryoshka!
Never ever point **Core Executable Path** to **Qv2ray Executable**!
This will not cause a fork bomb since Qv2ray is single-instanced.
Do note that V2Ray Core Executable is like `v2ray` or `v2ray.exe`, instead of `qv2ray` or `qv2ray.exe`!
:::

:::tip Hint for Arch Linux Users
If you use `v2ray` package, the suggested configuration is as follows:

* **Core Executable Path**: `/usr/bin/v2ray`
* **V2Ray Assets Directory**: `/usr/share/v2ray`
:::

:::tip Hint for macOS Users
If you are using Homebrew to install v2ray-core then you can simply copy the path and directory below:

* **Core Executable Path**: `/usr/local/bin/v2ray`
* **V2Ray Assets Directory**: `/usr/local/bin/`
:::
