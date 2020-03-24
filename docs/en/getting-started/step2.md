---
title: Configuring v2ray Core
---

# Step 2: Configuring v2ray Core

After a correct and successful installation of Qv2ray onto your system, it is necessary to configure Qv2ray on v2ray core files before actually using it.

## Download & Install the v2ray core files

Due to political reasons, Qv2ray itself **does not** include a distribution of v2ray executable files, namely the v2ray core, and most of the time it it required for user themselves to download them.

If you are using a distribution with v2ray core and assets package(s), it’ll be the best to install through package manager since the system will handle the automatic upgrade of v2ray core. For Arch Linux users, you may install v2ray, v2ray-geoip and v2ray-domain-list-community packages, and that's enough. For other distributions, please read below:

Go to [the official GitHub Release page of v2ray/v2ray-core](https://github.com/v2ray/v2ray-core/releases) and check the most recent stable build. Choose according to your platform in the asset files. For example, Windows 64-bit users may download v2ray-windows-64.zip, Mac OS users may download v2ray-macos.zip, and for most of the Linux users, v2ray-linux-64.zip.

Extract the v2ray core files into a fixed position. As a default, it is suggested to extract the files into `$QV2RAY_CONFIG_PATH/vcore`, where `QV2RAY_CONFIG_PATH` is the directory where Qv2ray store it’s data.

The directory could be in one of those locations:

- Qv2ray application path (default location in Windows) - ~/.qv2ray that is, a directory in your home folder - ~/.config/qv2ray

Make sure that these files exists directly in your directory:

geoip.dat geosite.dat v2ctl v2ray

## Configure Qv2ray to use the installed core

Go to Preference Window, set the vCore path to the v2ray core binary (not the folder called v2ray. but the binary executable file), and set the assets path to the directory where geoip.dat and geosite.dat is contained in.


