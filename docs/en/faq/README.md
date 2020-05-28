---
title: FAQ
sidebarDepth: 3
---

# FAQ

## V2Ray core failed to start

### 1. Prompt `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **Root Cause**: Port conflict occurred.

- **Cause 1**: Previous V2Ray process did not exit normally and occupied the relevant port.

- **Solution (on Windows)**: Kill `v2ray.exe` or `wv2ray.exe` process.

  - **Approach 1**: Open Task Manager and go to `Detail` Tab, find `v2ray.exe` or `wv2ray.exe` process, right click on the process name, then `End Process`, `End Process`. ~~Explain in detail XD~~

  - **Approach 2**: Run `cmd` or `powershell` and execute the following commands: 

```powershell
taskkill /f /im v2ray.exe
taskkill /f /im wv2ray.exe
```

- **Solution (on Linux)**: You are using Linux...~~Dont you know how to kill a process?~~

- **Cause 2**: The relevant ports set in Qv2ray have been occupied by other software.

- **Solution**: Change the port settings of Qv2ray or other software.

### 2. Prompt `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **Cause**: If you are using Windows, a patch might set ports between `1000-2000` as privileged / reserved ports.

- **Solution**: Use ports `>2000`.

### 3. V2Ray Core Failed to start after enabling tProxy

- **Detail**: `Segmentation Fault` occurd after enabling tProxy

- **Cause**: It's caused by a limit in the `SUID` feature on some Linux OSes. Detailed error analysis please see: [#59](https://github.com/Qv2ray/Qv2ray/issues/59)

- **Solution**: `sudo sysctl fs.suid_dumpable=1`<br/>
The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.


## Fatal Error

### 1. Cannot execute AppImage: Permission denied

- **Cause**: You should grant permission before executing it.
- **Solution**: `chmod +x Qv2ray.AppImage`


## Performance Issue

### 1. The response speed of opening web pages / switching connections while using Qv2ray seems to be much slower than using other proxy softwares

- **Cause**: Qv2ray enables `V2Ray Integration` by default, which forces all traffics from plugin-introduced protocols (such as SSR, Trojan) to be routed through [V2Ray Route](/plugins/v2ray-integration) in order to implement advanced routing function, but might cause significant latency ~~on low end devices~~.

- **Solution**: Go to `Core Settings` and turn off `V2Ray Integration` could improve latency for plugin-introduced protocols while lose support of `Advanced Routing`, `Bypass China Mainland`, `Bypass Local Address` and `Custom DNS` functions as a side effect, which means routing / bypass function of the relevant protocols will be completely invalid, that is, global proxy only. Note that this option does not affect protocols supported by V2Ray kernel (such as VMess). That is, if you only use protocols supported by the V2Ray kernel, switching on and off this function will cause no effect at all.
- Besides, whitelist V2Ray core in antivirus software ~~especially in Microsoft Defender~~ may also improve the response speed. ~~Unverified metaphysics~~

## Behavior & Appearance Issue

### 1. Qv2ray tray icon occasionally disappears in GNOME

- **Cause**: This is confirmed as an upstream bug.

- **Solution**: You may use the following makeshift command:

```shell
nohup gnome-shell --replace &
```

- Finally, KDE is awesome.

### 2. Ubuntu gives a super ugly UI

- **Solution**: Append `--style fusion` to the command line arg may solve this problem.
