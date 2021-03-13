---
title: "true"
---

# 订阅

:::tip Some message can only be seen when the `loglevel` in **Kernel Settings** set to `info` or `debug`. :::

## Startup Issues

### `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **The Root Cause**: A port conflict occurred.
- **原因 1**: 上一个 V2Ray 进程没有正常退出，占用了相关的端口。
- **Solution**: Terminate the current process which takes up that port.
- **原因 2**: 在 Qv2ray 中设置的相关端口已被其他软件占用。
- **解**: 更改 Qv2ray 或其他软件的端口设置。

### `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **原因**: 如果您正在使用 Windows, 一个补丁可能会在 `1000-2000` 之间设置端口作为特权/保留端口。

- **解**: 使用超过 `2000` 的端口。

### 启用 TProxy 后启动 V2Ray Core 失败

- **详情**:`开启TProxy 后发生断开错误`

- **原因**: 它是由`SUID`某些Linux OSes 的功能中的限制引起的。 详细错误分析请查看：[#59](https://github.com/Qv2ray/Qv2ray/issues/59)
  - **Solution**: `sudo sysctl fs.suid_dumpable=1`  
    The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.

## Connectivity Issues

### Connection configuration is confirmed to be correct but seen runtime warnings.

- **可能的原因**: 系统时间不匹配。 如果VMess是您的代理协议，它需要客户端和服务器的系统时间差小于90秒，否则它将拒绝连接。
- **Solutions (Windows)**:
  - **方法 1**: 打开设置, 选择 “时间 & 语言”, 启用 “自动设置日期和时间”。 如果选项已经启用，请点击“立即同步”按钮。
  - **接近2**：打开控制面板，切换到“类别”视图，选择“时间和区域”，然后单击“日期和时间”， 在打开的对话框中选择"Internet time"，然后点击“更改设置”按钮并检查“与互联网时间服务器同步”。
- **Solutions (Linux)**:
  - **方法 1**: 使用 `system-timeyncd`, 运行 `sudo systemctl 启用 system-timesyncd --now`.
  - **方法 2**: 使用 [Chrony](https://www.chrony.tuxfamily.org) 来同步时间。
- **解 (macOS)**: 打开系统首选，单击“日期 & 时间”，并开启“自动设置日期和时间”。

### I want to access China mainland websites using the proxy.

- [**解答**](../getting-started/step5.md#tweaking-routing-schemes)

### Transparent Proxy (tProxy) not working when under Linux

- In this case, the log may suggest the error `failed to set IP_TRANSPARENT > operation not permitted`

- **原因：** V2Ray 没有设置套接字选项的权限。

- **Solutions:**

  - 对于所有 Linux 磁盘，在终端中使用下面的命令(使用 root/sudo 访问)：

    ```
    # /usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray
    ```

    Where `/usr/bin/v2ray` is where V2Ray is installed for most of the Linux distros, if is not (e.g. you have installed V2Ray using the installation script), replace `/usr/bin/v2ray` with the path to your V2Ray core binary.

  - For ArchLinux users:  
    Try the AUR package [aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/) created by `@DuckSoft` which automates this step.

  - 适用于 Fedora 32+ / RHEL 8+ 用户：  
    如果您通过 dnf / yum 安装 V2Ray 和 V2Ray 二进制路径是 `/usr/bin/v2ray` , 您也可以安装RPM包 [v2ray-cap](https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/) 打包由 `@sixg0000d` 自动化此步骤。

### Configure proxy for dial-up connections / VPN connections on Windows

*Already supported on version 2.7.0-pre2*

- However, because of [an issue from Microsoft](https://support.microsoft.com/en-us/topic/cannot-configure-proxy-settings-if-a-vpn-connection-name-contains-non-ascii-characters-2c648407-bb72-5600-3126-8c721bc91b70) (may also be similar to [this reason](https://github.com/shadowsocks/shadowsocks-windows/issues/1116#issuecomment-294075565)), if a connection name contains non-ASCII characters, proxy settings won't work..
  - 工作是重命名连接并确保新名称只包含 ASCII 字符。

### 无法在 macOS 上自动配置系统代理(Error: 命令需要管理员权限)
- **原因：** macOS上的权限问题。
- **解决方案:**

    ```shell
    > # security authorizationdb write system.services.systemconfiguration.network allow
    YES (0)
    ```



## Behavior & Appearance Issues

### No tray icon / The tray icon occasionally disappears in GNOME

- **原因**: 这已被确认为上游错误.
- **解**: Gnome 不支持托盘图标。 托盘图标在Gnome上显示的原因是第三方开发者或Linux发行版的一些扩展可以显示它。 您可以使用以下临时命令作为临时解决方案：

    ```shell
    $ nohup gnome-shell --replace &
    ```

请参阅 [软件特色](features.md)。

:::tip Gnome 用户 本机Gnome 桌面不会显示托盘图标。 和 Qv2ray 图标也将不显示。 如果您想要显示托盘图标， 您可以安装一个叫做 [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (也叫 `ubuntu-appindicat`) 安装扩展后，您应该注销，再次登录 然后在 `调试中启用` 应用程序 (ie `gnome-modins`), 然后你会看到托盘图标。 :::

### macOS wants Qv2ray and/or its plugins to be "moved to trash"

- **原因**: 为了保护开发者的隐私，我们不会使用他们的苹果开发者帐户签署该应用程序。 此外，我们还没有苹果的“公证”我们的应用程序。 询问Qv2ray 开发者是不公平的，他们从未使用macOS。 为苹果开发者账户支付资金，并且有可能在应用程序上签名， 此外，他们浪费时间等待所谓苹果 [“公证”](https://krita.org/en/item/first-notarized-macos-build-of-krita/)。
- **解决方案**: 使用 `sudo xattr -rd com.apple.quantine /Applications/qv2ray.app` 像命令绕道。



## 其他事项

### 为什么没有 Qv2ray 包插件和 V2Ray 核心，或提供下载功能？

We hope our users can get to know how the it works, and willing to solve potential problems and needs by themselves.

如果Qv2ray 不适合您，您可以自由选择其他软件。

- ~~Try Package Managers!~~

### Qv2ray 是否支持移动平台 (Androidaciless, iOS)？

目前还没有计划。 Depending on developers will, there **may** be mobile platform support when the program migrate to QML.
