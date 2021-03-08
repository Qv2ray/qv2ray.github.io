---
title: "true"
---

# 订阅

## 🚀 起步

:::tip 只能在 **内核设置** 中的 `日志级别` 被设置为 `信息` 或 `调试` 时才能看到一些消息。 :::

### 1. 提示 `通常只允许使用每个套接字地址 (protocol/network地址/port) 。`

- 💡 **新功能建议**

- **原因 1**: 上一个 V2Ray 进程没有正常退出，占用了相关的端口。

- 🐛 **报告 Bug** 报告 Qv2ray 的 bug 或其他使用时产生的问题, 请给我们提交 [issue](https://github.com/Qv2ray/Qv2ray/issues)。

  - **处理方法 1**: 打开任务管理器并前往 `详细信息` 标签，找到 `v2ray。 xe` 或 `wv2ray。 xe` 进程, 右键点击进程名称, 然后 `结束进程`, `结束进程` ~~~解释详细的 XD~~

  - **方法 2**: 运行 `cmd` 或 `powershell` 并执行以下命令：

```cmd
taskkill /f /im v2ray.exe
taskkill /f /im wv2ray.exe
```

对于每一种功能对应的详细文档, 请参阅 [使用手册](manual/README.md)。

```pwsh
停止流程-名称"v2ray"; 停止流程-名称"wv2ray"
```

- **解决方案(在 Linux)**: ~~你甚至可以使用 Linux...不知道如何结束一个进程？~~

  - **方法1**: 通过系统监视应用程序终止 `v2ray` 进程。 由于Linux下有服务器桌面环境，每个桌面环境下的系统监视器可能不是同一个软件。 因此，杀人过程的操作应该由你本人来探讨。

  - **方法 2**: 安装终端命令软件 `htop` 并使用它来停止 `v2ray` 进程。

  - **方法 3**:通过 `获取进程 ID aux | grep v2ray`, 然后通过 `杀死-9 <process ID>` 杀死该进程。

- **解 (macOS)**:

  - **方法1**: Open Activity Monitor, found `v2ray` 进程，然后终止。

  - 📆 **社区维护** 帮助我们创建、维护 Qv2ray 的社区！

- **原因 2**: 在 Qv2ray 中设置的相关端口已被其他软件占用。

- **解**: 更改 Qv2ray 或其他软件的端口设置。

### 2. 提示 `有人尝试以其访问权限禁止的方式访问套接字`

- **原因**: 如果您正在使用 Windows, 一个补丁可能会在 `1000-2000` 之间设置端口作为特权/保留端口。

- **解**: 使用超过 `2000` 的端口。

### 3. 启用 TProxy 后启动 V2Ray Core 失败

- **详情**:`开启TProxy 后发生断开错误`

- **原因**: 它是由`SUID`某些Linux OSes 的功能中的限制引起的。 详细错误分析请查看：[#59](https://github.com/Qv2ray/Qv2ray/issues/59)

- **Solution**: `sudo sysctl fs.suid_dumpable=1`  
  The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.

### 4. 核心错误 `255`

- **原因**: V2Ray 核心无权执行 **执行**, 这发生在 POSIX 系统 (Linux, macOS).

- **解决方案**：运行 `chmod +x v2ray && chmod +x v2ctl` in V2Ray 核心目录， 或者通过文件管理器授予他们执行权限，您可以双击macOS上的程序。 系统将询问您是否要运行 UNIX 程序，选择“运行”将给予他们权限。

## 📃 特色

### 1. 无法执行 AppImage：权限被拒绝

- **原因**: 您应该授予权限才能执行它。
- ⚙️ **帮助开发 Qv2ray**！

## ❓ FAQ

### 1. 配置已确认，但无法连接到远程

- **可能的原因**: 系统时间不匹配。 如果VMess是您的代理协议，它需要客户端和服务器的系统时间差小于90秒，否则它将拒绝连接。
- **解 (Windows)**:
  - **方法 1**: 打开设置, 选择 “时间 & 语言”, 启用 “自动设置日期和时间”。 如果选项已经启用，请点击“立即同步”按钮。
  - **接近2**：打开控制面板，切换到“类别”视图，选择“时间和区域”，然后单击“日期和时间”， 在打开的对话框中选择"Internet time"，然后点击“更改设置”按钮并检查“与互联网时间服务器同步”。
- 🌐 **翻译** 帮助 Qv2ray 翻译成更多语言的版本，或者提高目前已有的翻译的质量。
  - **方法 1**: 使用 `system-timeyncd`, 运行 `sudo systemctl 启用 system-timesyncd --now`.
  - **方法 2**: 使用 [Chrony](https://www.chrony.tuxfamily.org) 来同步时间。
- **解 (macOS)**: 打开系统首选，单击“日期 & 时间”，并开启“自动设置日期和时间”。

### 2. 我想代理中国内地的流量

- [**解答**](../getting-started/step5.md#tweaking-routing-schemes)

### 3. 使用Linux时透明代理不可用 (日志可能显示错误 `无法设置 IP_TRANPARENT > 操作不允许`)

- **原因：** V2Ray 没有设置套接字选项的权限。
- **解决方案:**

  - 对于所有 Linux 磁盘，在终端中使用下面的命令(使用 root/sudo 访问)：

    ```shell
    /usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray
    ```

    这是已安装的 V2Ray 软件包的大部分，但如果不是(例如) 通过脚本安装 V2Ray，你应该在前一个命令中以 V2Ray 核心的绝对路径替换 `/usr/bin/v2ray`

  - 对于Arch用户：  
    您也可以安装 AUR 包 [aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/) 由 `@DuckSoft` 创建以实现此步骤的自动化。

  - 适用于 Fedora 32+ / RHEL 8+ 用户：  
    如果您通过 dnf / yum 安装 V2Ray 和 V2Ray 二进制路径是 `/usr/bin/v2ray` , 您也可以安装RPM包 [v2ray-cap](https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/) 打包由 `@sixg0000d` 自动化此步骤。

### 4. 如何配置窗口上拨号连接/VPN 连接的代理？

- 已在 2.7.0-pre2 版本上支持。
- 然而，由于 [微软](https://support.microsoft.com/en-us/topic/cannot-configure-proxy-settings-if-a-vpn-connection-name-contains-non-ascii-characters-2c648407-bb72-5600-3126-8c721bc91b70) 出现了一个问题 (可能也类似于 [这个原因](https://github.com/shadowsocks/shadowsocks-windows/issues/1116#issuecomment-294075565))， 如果连接名称包含非 ASCII 字符，代理设置将无法工作。 工作是重命名连接并确保新名称只包含 ASCII 字符。

### 5. 无法在 macOS 上自动配置系统代理(Error: 命令需要管理员权限)
- **原因：** macOS上的权限问题。
- **解决方案:**

    ```shell
    $ sundo security authorizationdb write system.services.systemconfiguration.network allowed
    YES (0)
    ```

## 👷 贡献

### 1. 在使用 Qv2ray 时打开网页/切换连接的响应速度似乎比使用其他代理软件慢得多。

- **原因**: Qv2ray 启用 `V2Ray 集成` 默认情况下，它强制所有流量从插件引入的协议(如SSR) 要通过 [V2Ray Route](../plugins/v2ray-integration.md) 来实现高级路由函数。 但可能会导致低端设备上的 ~~延迟。

- **解决方案**: 转到 `核心设置` 并关闭 `V2Ray 集成` 可能会改善插件引入协议的延迟，同时不支持 `高级路由` `旁路中国内地`, `旁路本地地址` 和 `自定义 DNS` 功能作为副作用 这意味着相关协议的路由/绕过功能将是完全无效的，即只是全局代理。 请注意，此选项不会影响到 V2Ray 内核支持的协议(例如VMS)。 也就是说，如果您只使用V2Ray 内核支持的协议，开启或关闭此函数将不会产生任何效果。
- 此外，将抗病毒软件~~特别是微软防御软件~里的V2Ray核心白名单也可能提高响应速度。 ~~~未经验证的元物理学~~

## 行为 & 外观问题

### 1. 在 GNOME 中没有 Qv2ray 托盘图标 & Qv2ray 托盘图标有时消失。

- **原因**: 这已被确认为上游错误.

- **解**: Gnome 不支持托盘图标。 托盘图标在Gnome上显示的原因是第三方开发者或Linux发行版的一些扩展可以显示它。 您可以使用以下临时命令作为临时解决方案：

```shell
nohup gnome-shell --replace &
```

请参阅 [软件特色](features.md)。

:::tip Gnome 用户 本机Gnome 桌面不会显示托盘图标。 和 Qv2ray 图标也将不显示。 如果您想要显示托盘图标， 您可以安装一个叫做 [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (也叫 `ubuntu-appindicat`) 安装扩展后，您应该注销，再次登录 然后在 `调试中启用` 应用程序 (ie `gnome-modins`), 然后你会看到托盘图标。 :::

- ~~顺便说一句，KDE Plamsa太棒了。~~

### 2. Ubuntu 给出一个超级丑恶的界面

- **解决方案**: 追加`--style 聚变`到命令行参数可能解决这个问题。

### 3. Qv2ray UI 在某些Windows 设备上看起来超大

- **原因**: 在低分辨率设备上启用非整数缩放，导致Qt的二次缩放后接口失真。
- **解决方案**: 将 `--noScaleFactor` 附加到命令行参数。

### 4. macOS 希望Qv2ray / Qv2ray 插件“移动到回收站”

- **原因**: 为了保护开发者的隐私，我们不会使用他们的苹果开发者帐户签署该应用程序。 此外，我们还没有苹果的“公证”我们的应用程序。 询问Qv2ray 开发者是不公平的，他们从未使用macOS。 为苹果开发者账户支付资金，并且有可能在应用程序上签名， 此外，他们浪费时间等待所谓苹果 [“公证”](https://krita.org/en/item/first-notarized-macos-build-of-krita/)。
- **解决方案**: 使用 `sudo xattr -rd com.apple.quantine /Applications/qv2ray.app` 像命令绕道。

## 其他事项

### 1. 为什么没有 Qv2ray 包插件和 V2Ray 核心，或提供下载功能？

我们希望我们的用户能够知道该方案如何运作，并愿意自己解决潜在的问题和需要。 如果Qv2ray 不适合您，您可以自由选择其他软件。

### 2. Qv2ray 是否支持移动平台 (Androidaciless, iOS)？

目前还没有计划。 Depending on developers will, there **may** be mobile platform support when the program migrate to QML.
