---
title: Configuring V2Ray Core
---

# Step 2: Configuring V2Ray Core

After a correct and successful installation of Qv2ray onto your system, it is necessary to configure Qv2ray on V2Ray core files before actually using it.

## Download V2Ray Core Files

Due to political reasons, Qv2ray itself **does not** include a distribution of V2Ray executable files, namely the V2Ray core, and most of the time it it required for user themselves to download them.

::: tip Core Management: Manual vs Automatic
If you are using a distribution with V2Ray core and assets packages, it’ll be the best to install through package manager since the system will handle the automatic upgrade of v2ray core. For Arch Linux users, installing only one package `v2ray` is enough. For other distributions, please read below.
:::

Go to [the official GitHub Release page of v2fly/v2ray-core](https://github.com/v2fly/v2ray-core/releases) and check the recent stable builds. Choose according to your platform in the asset files. For example, Windows 64-bit users may download `v2ray-windows-64.zip`, Mac OS users may download `v2ray-macos.zip`, and for most of the Linux users, `v2ray-linux-64.zip`.

::: tip For Windows 10 ARM64 users
If you have an ARM64-based Windows 10 device such as Surface Pro X, Matebook E 2019, you should use `v2ray-windows-arm.zip` for better performance. You can download it and unzip the `.dat` files, `v2ray_armv7.exe` and `v2ctl_armv7.exe` from the zip. And then you should rename `v2ctl_armv7.exe` to `v2ctl.exe`, rename `v2ray_armv7.exe` to `v2ray.exe`, and it will work well with Qv2ray. If your Windows has hidden filename extensions, you should not add `.exe` to the filename once again.
:::

::: danger Sharpen Your Eyes
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

::: warning Special Hint for Linux / macOS Users
You should always grant **executable permission** to `v2ray` and `v2ctl`.
This is usually done by executing `chmod +x` on these files.
:::

## Configure Qv2ray to Use the Core

Open Qv2ray and go to Preference Window. In **[Core Settings](qv2ray://open/preference/kernel)**, configure the following options:
 - **Core Executable Path**: Set this to where your V2Ray executable exists. This can be the full path of your `v2ray.exe` on Windows, or that `v2ray` executable file on Linux / macOS.
 - **V2Ray Assets Directory**: Set this to where `geoip.dat` and `geosite.dat` are located.

After configuring, you can click on **Check V2Ray Core Settings** button to validate your V2Ray core settings. Repeat trying until you get the check passed.

::: warning No Matryoshka!
Never ever point **Core Executable Path** to **Qv2ray Executable**!
This will not cause a fork bomb since Qv2ray is single-instanced.
Do note that V2Ray Core Executable is like `v2ray` or `v2ray.exe`, instead of `qv2ray` or `qv2ray.exe`!
:::

::: tip Hint for Arch Linux Users
If you use `v2ray` package, the suggested configuration is as follows:
* **Core Executable Path**: `/usr/bin/v2ray`
* **V2Ray Assets Directory**: `/usr/lib/v2ray`
:::
