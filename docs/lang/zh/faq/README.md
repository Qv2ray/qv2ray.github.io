---
title: "true"
---

# 常见问题

::tip 有些错误内容可能需要将 **核心设置** 中的 `日志等级` 调整成 `info` 或者 `debug` 后才会出现。 :::

## 启动问题

### `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **根本原因**: 出现了端口冲突
- **原因 1**: 上一个 V2Ray 进程没有正常退出，占用了相关的端口。
- **解决办法**: 终止当前占用该端口的进程。
- **原因2**: 在 Qv2ray 中设置的相关端口已被其他软件占用。
- **解决方案**: 更改 Qv2ray 或其他软件的端口设置。

### `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **原因**: 如果您正在使用 Windows, 一个补丁可能会在 `1000-2000` 之间设置端口作为特权/保留端口。

- **解决方案**: 使用超过 `2000` 的端口。

### 启用 TProxy 后启动 V2Ray 核心失败

- **详情**: 开启 TProxy 后出现了 `Segmentation Fault`

- **原因**: 它是由某些 Linux 上的 `SUID` 限制所引起的。 详细的错误分析请查看：[#59](https://github.com/Qv2ray/Qv2ray/issues/59)
  - **解决方案**: `sudo sysctl fs.suid_dumpable=1`  
    这种方法将会在重启后失效，请查看 [这篇文章](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html)

## 网络连接问题

### 连接配置是正确的，但运行时可以看到警告。

- **可能的原因**: 系统时间不匹配。 如果VMess是您的代理协议，它需要客户端和服务器的系统时间差小于90秒，否则它将拒绝连接。
- **解决方案 (Windows)**:
  - **方法 1**: 打开设置, 选择 “时间 & 语言”, 启用 “自动设定日期和时间”。 如果该选项已经启用，请点击"立即同步"按钮
  - **方案 2**：打开控制面板，切换到“类别”视图，选择“时间和区域”，然后点击“日期和时间”， 在打开的对话框中选择"Internet time"，然后点击“更改设置”按钮并检查“与Internet time server同步”。
- **解决方案 (Linux)**:
  - **方法 1**: 使用 `system-timeyncd`, 运行 `sudo systemctl enable system-timesyncd --now`
  - **方法2**: 使用 [Chrony](https://www.chrony.tuxfamily.org) 来同步时间。
- **Solution (macOS)**: Open system preference, click “Date & Time”, and enable “Automatically set date and time”.

### I want to access China mainland websites using the proxy.

- [**Solution**](../getting-started/step5.md#tweaking-routing-schemes)

### Transparent Proxy (tProxy) not working when under Linux

- In this case, the log may suggest the error `failed to set IP_TRANSPARENT > operation not permitted`

- **Cause:** V2Ray does not have the permission to set socket options.

- **Solutions:**

  - For all Linux distros, Use the command below in terminal (with root/sudo access):

    ```
    # /usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray
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
- **Cause:** Permission issue on macOS.
- **Solution:**

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

请参阅 [软件特色](features.md)。

:::tip A tip for Gnome users The native Gnome desktop will not display the tray icons, and the Qv2ray icon will also not be displayed. If you want to display the tray icons, you can install a Gnome extension called [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (also called `ubuntu-appindicator`) , After installing the extension you should log out, log in again, and then enable it in the `Tweaks` app (ie `gnome-tweaks`), and then you will see the tray icons. :::

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
