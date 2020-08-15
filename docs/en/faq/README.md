---
title: FAQ
---

# FAQ

## V2Ray core failed to start

:::tip
Some message can only be seen when the `loglevel` in **Kernel Settings** is set to `info` or `debug`.
:::

### 1. Prompt `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **Root Cause**: Port conflict occurred.

- **Cause 1**: Previous V2Ray process did not exit normally and occupied the relevant port.

- **Solution (on Windows)**: Kill `v2ray.exe` or `wv2ray.exe` process via Task Manager or `taskkill /f /im <process name>`.

  - **Approach 1**: Open Task Manager and go to `Detail` Tab, find `v2ray.exe` or `wv2ray.exe` process, right click on the process name, then `End Process`, `End Process`. ~~Explain in detail XD~~

  - **Approach 2**: Run `cmd` or `powershell` and execute the following commands:

```cmd
taskkill /f /im v2ray.exe
taskkill /f /im wv2ray.exe
```
Or

```pwsh
Stop-Process -Name "v2ray"; Stop-Process -Name "wv2ray"
```

- **Solution (on Linux)**: ~~You can even use Linux...Don't you know how to kill a process?~~ 
  - **Approach 1**: Terminate the `v2ray` process through the System Monitor application. Since there are serveral desktop environments under Linux, the system monitor that comes with each desktop environment may not be the same software, so the operations of killing process should explore by yourself.
  - **Approach 2**:Get the process ID via `ps aux | grep v2ray`, then kill the process via `kill -9 <process ID>`.

-**Solution (on macOS)**:

   -**Approach 1**: Open Activity Monitor, find the `v2ray` process, and then terminate.
  
   -**Approach 2**: Refer to the **Approach 2** solution of the Linux.

- **Cause 2**: The relevant ports set in Qv2ray have been occupied by other software.

- **Solution**: Change the port settings of Qv2ray or other software.

### 2. Prompt `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **Cause**: If you are using Windows, a patch might set ports between `1000-2000` as privileged / reserved ports.

- **Solution**: Use a port above than `2000`.

### 3. V2Ray Core Failed to start after enabling tProxy

- **Detail**: `Segmentation Fault` occurd after enabling tProxy

- **Cause**: It's caused by a limit in the `SUID` feature on some Linux OSes. Detailed error analysis please see: [#59](https://github.com/Qv2ray/Qv2ray/issues/59)

- **Solution**: `sudo sysctl fs.suid_dumpable=1`<br/>
The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.

### 4. Core error `255`

- **Cause**: V2Ray core doesn't have permission to **execute**, which happens on POSIX system (Linux、macOS).

- **Solution**：Run `chmod +x v2ray && chmod +x v2ctl` in V2Ray core directory, or give them execute permission via file manager,You can double click the programs on macOS, the system will ask you whether to run UNIX program, choose "run" will give them permission.

## Fatal Error

### 1. Cannot execute AppImage: Permission denied

- **Cause**: You should grant permission before executing it.
- **Solution**: `chmod +x Qv2ray.AppImage`

## Connection problems

### 1. Config is confirmed but cannot connect to the remote

- **Possible cause**: System time is out of sync. If VMess is your proxy protocol, it requires client and server's system time difference less than 90 seconds, or it will refuse to connect.
- **Solution (Windows)**:
  - **Approach 1**: Open Settings, select “Time & Language”, enable “Automatically set date and time”. If the option is already enabled, please click the "Sync now" button.
  - **Approach 2**：Open control panel, switch to “Categories” view，choose “Time and Zone”，then click “Date and Time”, select "Internet time" in the open dialog, then click "change settings" button and check “Sync with Internet time server”.
- **Solution (Linux)**:
  - **Approach 1**: Use `systemd-timesyncd`, run `sudo systemctl enable systemd-timesyncd --now`。
  - **Approach 2**: Use [Chrony](https://www.chrony.tuxfamily.org) to sync time.
- **Solution (macOS)**: Open system preference, click “Date & Time”, and enable “Automatically set date and time”.

### 2. I want to proxy traffic to China Mainland

- [**Solution**](../getting-started/step5.md#tweaking-routing-schemes)

### 3. Transparent proxy not working when using Linux (Log may suggest the error `failed to set IP_TRANSPARENT > operation not permitted`)
- **Cause:** V2Ray does not have the permission to set socket options.
- **Solution:** For Arch users, install the AUR package `[aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/)` created by `@DuckSoft`, or use the command below in terminal (with root/sudo access): `/usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/lib/v2ray/v2ray`. For other Linux distros, just replace `/usr/lib/v2ray/v2ray` with the absolute path of V2Ray core in the previous command.

## Performance Issue

### 1. The response speed of opening web pages / switching connections while using Qv2ray seems to be much slower than using other proxy softwares

- **Cause**: Qv2ray enables `V2Ray Integration` by default, which forces all traffics from plugin-introduced protocols (such as SSR, Trojan) to be routed through [V2Ray Route](../plugins/v2ray-integration.md) in order to implement advanced routing function, but might cause significant latency ~~on low end devices~~.

- **Solution**: Go to `Core Settings` and turn off `V2Ray Integration` could improve latency for plugin-introduced protocols while lose support of `Advanced Routing`, `Bypass China Mainland`, `Bypass Local Address` and `Custom DNS` functions as a side effect, which means routing / bypass function of the relevant protocols will be completely invalid, that is, global proxy only. Note that this option does not affect protocols supported by V2Ray kernel (such as VMess). That is, if you only use protocols supported by the V2Ray kernel, switching on and off this function will cause no effect at all.
- Besides, whitelist V2Ray core in antivirus software ~~especially in Microsoft Defender~~ may also improve the response speed. ~~Unverified metaphysics~~

## Behavior & Appearance Issue

### 1. There is no Qv2ray tray icon & Qv2ray tray icon occasionally disappears in GNOME

- **Cause**: This is confirmed as an upstream bug.

- **Solution**: Gnome does not officially support tray icons. The reason tray icons would show on Gnome is that there are some extensions for Gnome from third-party developers or Linux distributions to display it. You may use the following makeshift command as a temporary solution:

```shell
nohup gnome-shell --replace &
```

Or you can also restart Qv2ray and try again.

::: tip A tip for Gnome users
The native Gnome desktop will not display the tray icons, and the Qv2ray icon will also not be displayed. If you want to display the tray icons, you can install a Gnome extension called [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (also called `ubuntu-appindicator`) , After installing the extension you should log out, log in again, and then enable it in the `Tweaks` app (ie `gnome-tweaks`), and then you will see the tray icons.
:::

- ~~By the way, KDE Plamsa is awesome.~~

### 2. Ubuntu gives a super ugly UI

- **Solution**: Append `--style fusion` to the command line arg may solve this problem.

## Miscellaneous

### 1. Why doesn't Qv2ray pack plugins and V2Ray core, or provide download function?

We hope our users can get to know how the program works, and willing to solve potential problems and needs by themselves. If Qv2ray doesn't suit you, you are free to choose other software.

### 2. Will Qv2ray support mobile platform (Android、iOS)?

There is no plan at the moment. Depending on developers will, there **may** be mobile platform support when the program migrate to QML.
