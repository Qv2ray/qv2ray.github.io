---
title: FAQ
---

# FAQ

:::tip

Some message can only be seen when the `loglevel` in **Kernel Settings** set to `info` or `debug`.

:::

## Startup Issues

### `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **The Root Cause**: A port conflict occurred.
- **Cause 1**: Previous V2Ray process did not exit normally and occupied the relevant port.
- **Solution**: Terminate the current process which takes up that port.
- **Cause 2**: The relevant ports set in Qv2ray have been occupied by other software.
- **Solution**: Change the port settings of Qv2ray or other software.

### `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **Cause**: If you are using Windows, a patch might set ports between `1000-2000` as privileged / reserved ports.

- **Solution**: Use a port above than `2000`.

### V2Ray Core Failed to start after enabling TProxy

- **Detail**: `Segmentation Fault` occurd after enabling TProxy

- **Cause**: It's caused by a limit in the `SUID` feature on some Linux OSes. Detailed error analysis please see: [#59](https://github.com/Qv2ray/Qv2ray/issues/59)
  - **Solution**: `sudo sysctl fs.suid_dumpable=1`  
    The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.

## Connectivity Issues

### Connection configuration is confirmed to be correct but seen runtime warnings.

- **Possible cause**: System time is out of sync. If VMess is your proxy protocol, it requires client and server's system time difference less than 90 seconds, or it will refuse to connect.
- **Solutions (Windows)**:
  - **Approach 1**: Open Settings, select "Time & Language", enable "Set time automatically". If the option is already enabled, please click the "Sync now" button.
  - **Approach 2**：Open control panel, switch to "Category" view, choose "Clock and Region", then click "Date and Time", select "Internet Time" in the open dialog, then click "Change settings" button and check "Synchronize with an Internet time server".
- **Solutions (Linux)**:
  - **Approach 1**: Use `systemd-timesyncd`, run `sudo systemctl enable systemd-timesyncd --now`.
  - **Approach 2**: Use [Chrony](https://www.chrony.tuxfamily.org) to sync time.
- **Solution (macOS)**: Open system preference, click "Date & Time", and enable "Automatically set date and time".
<!-- TODO: need to check for button and option names in macOS -->

### I want to access China mainland websites using the proxy.

- [**Solution**](../getting-started/step5.md#tweaking-routing-schemes)

### Transparent Proxy (tProxy) not working when under Linux

- In this case, the log may suggest the error `failed to set IP_TRANSPARENT > operation not permitted`

- **Cause**: V2Ray does not have the permission to set socket options.

- **Solutions**:

  - For all Linux distros, Use the command below in terminal (with root/sudo access):

    ```bash
    setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray
    ```

    Where `/usr/bin/v2ray` is where V2Ray is installed for most of the Linux distros, if is not (e.g. you have installed V2Ray using the installation script), replace `/usr/bin/v2ray` with the path to your V2Ray core binary.

  - For ArchLinux users:  
    Try the AUR package [aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/) created by `@DuckSoft` which automates this step.

  - For Fedora 32+ / RHEL 8+ users:  
    If you are installed V2Ray by dnf / yum, and the V2Ray binary path is `/usr/bin/v2ray` , you can also install RPM package [v2ray-cap](https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/) packaged by `@sixg0000d` to automate this step.

### Configure proxy for dial-up connections / VPN connections on Windows

*Already supported on version 2.7.0-pre2*

- However, because of [an issue from Microsoft](https://support.microsoft.com/en-us/topic/cannot-configure-proxy-settings-if-a-vpn-connection-name-contains-non-ascii-characters-2c648407-bb72-5600-3126-8c721bc91b70) (may also be similar to [this reason](https://github.com/shadowsocks/shadowsocks-windows/issues/1116#issuecomment-294075565)), if a connection name contains non-ASCII characters, proxy settings won't work..
  - A workaround is to rename the connection and make sure the new name only contains ASCII characters.

### Unable to configure system proxy automatically on macOS (Error: Command requires admin privileges)

- **Cause**: Permission issue on macOS.
- **Solution**:

    ```shell
    > # security authorizationdb write system.services.systemconfiguration.network allow
    YES (0)
    ```

## Behavior & Appearance Issues

### No tray icon / The tray icon occasionally disappears in GNOME

- **Cause**: This is confirmed as an upstream bug.
- **Solution**: Gnome does not officially support tray icons. The reason tray icons would show on Gnome is that there are some extensions for Gnome from third-party developers or Linux distributions to display it. You may use the following makeshift command as a temporary solution:

	```shell
	$ nohup gnome-shell --replace &
	```

Or you can also restart Qv2ray and try again.

:::tip A tip for Gnome users

The native Gnome desktop will not display the tray icons, and the Qv2ray icon will also not be displayed. If you want to display the tray icons, you can install a Gnome extension called [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (also called `ubuntu-appindicator`) , After installing the extension you should log out, log in again, and then enable it in the `Tweaks` app (ie `gnome-tweaks`), and then you will see the tray icons.

:::

### macOS wants Qv2ray and/or its plugins to be "moved to trash"

- **Cause**: To protect developers' privacy, we don't sign the app with their Apple Developer Account. Also, we haven't had our applications "notarized" by Apple. It's unfair to ask Qv2ray developers, who never use macOS, to pay the money for an Apple Developer Account and risk being caught signing the app, plus wasting their time to wait for the so-called Apple ["notarization"](https://krita.org/en/item/first-notarized-macos-build-of-krita/).
- **Solution**: Use `sudo xattr -rd com.apple.quarantine /Applications/qv2ray.app` like command to bypass.



## Miscellaneous

### Why doesn't Qv2ray pack plugins and V2Ray core, or provide download function?

We hope our users can get to know how the it works, and willing to solve potential problems and needs by themselves.

If Qv2ray doesn't suit you, you are free to choose other software.

- ~~Try Package Managers!~~

### Will Qv2ray support mobile platform (Android、iOS)?

There is no plan at the moment. Depending on developers will, there **may** be mobile platform support when the program migrate to QML.
