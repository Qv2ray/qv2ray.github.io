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
  - **方法 1**: 使用 `system-timeyncd`, 运行 `sudo systemctl enable systemd-timesyncd --now`
  - **方法2**: 使用 [Chrony](https://www.chrony.tuxfamily.org) 来同步时间。
- **解决方案 (macOS)**: 打开系统首选项，单击“日期 & 时间”，并开启“自动设置日期和时间”。

### 我想要使用代理访问中国大陆网站。

- [**解决办法**](../getting-started/step5.md#tweaking-routing-schemes)

### 当在 Linux 下运行时，透明代理 (tProxy) 不工作

- 在这种情况下，日志可能显示错误 `failed to set IP_TRANSPARENT > operation not permitted`

- **原因:** V2Ray 没有设置套接字选项的权限。

- **解决方案:**

  - 对于所有 Linux 发行版，在终端中使用下面的命令 (使用 root/sudo)：

    ```
    # /usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray
    ```

    `/usr/bin/v2ray` 是大部分Linux 发行版安装V2Ray 的地方，如果不是，(例如) 您已经使用安装脚本安装了V2Ray，请替换 `/usr/bin/v2ray` 并使用您的 V2Ray 核心二进制路径。

  - 对于ArchLinux用户：  
    尝试 AUR 包 [Aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/) （由 `@DuckSoft 创建）的自动化步骤`

  - 适用于 Fedora 32+ / RHEL 8+ 用户：  
    如果您通过 dnf / yum 安装 V2Ray，那么 V2Ray 二进制路径应该是 `/usr/bin/v2ray` , 您也可以安装RPM包 [v2ray-cap](https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/) （由 `@sixg0000d` 打包）。

### 配置 Windows 上拨号连接 / VPN 连接的代理

*已经在 2.7.0-pre2 版本上支持*

- 然而，由于 [微软出现了一个问题](https://support.microsoft.com/en-us/topic/cannot-configure-proxy-settings-if-a-vpn-connection-name-contains-non-ascii-characters-2c648407-bb72-5600-3126-8c721bc91b70) (可能也类似于 [这个原因](https://github.com/shadowsocks/shadowsocks-windows/issues/1116#issuecomment-294075565))， 如果连接名称包含非 ASCII 字符，代理设置将无法工作...
  - 一个方法是重命名连接，并确保新名称只包含 ASCII 字符。

### 无法在 macOS 上自动配置系统代理 (错误: 命令需要管理员权限)
- **原因：** macOS 上的权限问题。
- **解决办法:**

    ```shell
    > # security authorizationdb write system.services.systemconfiguration.network allow
    YES (0)
    ```



## 行为和外观问题

### 没有托盘图标 / 托盘图标偶尔在GNOME中消失。

- **原因**: 这是个上游 Bug
- **解决办法**: Gnome 不支持托盘图标。 托盘图标是第三方开发者或部分 Linux 发行版的拓展组件 您可以使用以下命令作为临时解决方案：

    ```shell
    $ nohup gnome-shell --replace &
    ```

或者您也可以重启 Qv2ray 然后重试。

:::tip Gnome 用户 本机Gnome 桌面不会显示托盘图标。并且 Qv2ray 图标也会不显示。 如果您想要显示托盘图标， 您可以安装一个叫做 [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (也叫 `ubuntu-appindicator`) 安装扩展后，您应该注销，再次登录 然后在 `Tweaks` 中启用拓展 (ie `gnome-modins`), 然后你会看到托盘图标。 :::

### macOS 想要将 Qv2ray 和/或其插件移动到回收站中

- **原因**: 为了保护开发者的隐私，我们不会使用个人苹果开发者帐户签署 Qv2ray。 此外，我们还没有让苹果的 “公证” 过我们的应用程序。 在这种情况下询问 Qv2ray 开发者是不公平的，我们从未使用过 macOS，或为苹果开发者账户交钱，或在应用程序上签名， 此外，等待苹果公司的所谓 [“公证”](https://krita.org/en/item/first-notarized-macos-build-of-krita/)简直太浪费时间了。
- **解决方案**: 使用 `sudo xattr -rd com.apple.quarantine /Applications/qv2ray.app` 跳过阴间验证。



## 其他问题

### 为什么 Qv2ray 不自带插件和 V2Ray 核心，或者提供内置下载功能？

我们希望我们的用户能够知道 Qv2ray / V2Ray 如何工作，并愿意自己解决潜在的问题和需求。

如果 Qv2ray 不适合您，您可以自由选择其他软件。

- ~~试试包管理？~~

### Qv2ray 是否会支持移动平台 (Android，iOS)？

目前尚无计划。 取决于开发者的个人需求，在将来**可能**会有对于移动平台的支持（在项目迁移到 QML 之后）
