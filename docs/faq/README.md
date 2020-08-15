---
title: FAQ
---

# FAQ

## V2Ray 核心无法启动

:::tip
有些提示信息需要在**内核设置**中将**日志等级**设为**信息**或**调试**才能看到。
:::

### 1. 提示 `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **本质**：发生了端口冲突。

- **原因 1**：先前的 V2Ray 进程未正常退出，占用了相关端口。

- **解决方案（Windows 系统）**：通过任务管理器或 `taskkill /f /im <进程名>` 结束 `v2ray.exe` 或 `wv2ray.exe` 进程。

  - **方法 1**：在任务管理器的 `详细信息` 选项卡中，找到 `v2ray.exe` 或 `wv2ray.exe` 进程，右键点击进程名称，`结束任务`、`结束任务` 即可。~~科学严谨 XD~~

  - **方法 2**：打开 `cmd` 或 `powershell`，执行如下命令：

```powershell
taskkill /f /im v2ray.exe
taskkill /f /im wv2ray.exe
```

- **解决方案（Linux 系统）**：~~你都用Linux了……杀进程还不会吗？~~ 通过 `ps aux | grep v2ray` 找到进程号，再用 `kill -9 <进程号>` 结束进程。

- **原因 2**：Qv2ray 中设定的相关端口已被其他软件占用。

- **解决方案**：变更 Qv2ray 或其他软件的端口设置。

### 2. 提示 `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **原因**：如果你使用的是 Windows 系统，那么应该是某个 Windows 补丁将端口号在 `1000-2000` 之间的某段端口设了为特权/保留端口。

- **解决方案**：更换为大于 `2000` 的端口号即可。

### 3. 开启 tProxy 之后，V2ray Core 会启动失败

- **细节**：开启 tProxy 后，会提示 `Segmentation Fault（段错误）`。

- **原因**：这个问题是一些 Linux 系统的 `SUID` 特性受限制所导致的。详细的错误分析请参阅 [#59](https://github.com/lhy0403/Qv2ray/issues/59)。

- **解决方案**：`sudo sysctl fs.suid_dumpable=1`<br/>
这个解决方案会在重启后失效。如果你希望保持这个选项，请参阅 [这里](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html)。

### 4. 内核报错 `255`

- **原因**：V2Ray 核心没有**运行**权限，这一问题发生在 POSIX 系统（Linux、macOS）上。

- **解决方案**：在 V2Ray 核心目录中 执行 `chmod +x v2ray && chmod +x v2ctl`，或通过文件管理器给予运行权限。在 macOS 下可以直接双击这两个程序，系统会自动提示是否运行 UNIX 程序，选择“运行”即可给予其运行权限。

## 严重故障

### 1. 不能执行 AppImage: 权限不够（Cannot execute AppImage: Permission denied）

- **原因**：……在执行一个程序之前，必须给予它可执行权限。

- **解决方案**：`chmod +x Qv2ray.AppImage`

## 连接问题

### 1. 已确认设置正确但无法连接

- **可能原因**：系统时间不同步。如果你使用了 VMess 协议，通信双方的系统时间要求相差在 90 秒以内，否则会拒绝连接。
- **解决方案（Windows）**：
  - **方法一**：打开设置，选择“时间和语言”，然后启用“自动设置时间”选项即可。如果选项已启用，请点击”立即同步“按钮。
  - **方法二**：打开控制面板，切换查看方式为“类别”，选择“时钟和区域”，点击  “日期和时间”，在弹出的对话框中选择“Internet 时间”，点击“更改设置”按钮，再勾选“与 Internet 时间服务器同步”，最后点击“确认”。
- **解决方案（Linux）**：
  - **方法一**：使用 `systemd-timesyncd`，执行 `sudo systemctl enable systemd-timesyncd --now`。
  - **方法二**：使用 [Chrony](https://www.chrony.tuxfamily.org) 同步时间。
- **解决方案（macOS）**：打开系统偏好设置，点击“日期与时间”，在“日期与时间”标签页下启用“自动设置日期与时间”。


### 2. 为什么我在百度查询到的 IP 仍然在国内？

- **原因** Qv2ray 默认设置为不代理国内流量。
- **解决方案**：使用国外网站查询 IP（如在 Google 搜索 `What is my IP` 或访问 [ip.sb](https://ip.sb/)），或带有多个测试点的网站查询 IP（如访问 [ip111.cn](https://www.ip111.cn/) 或 [ip.skk.moe](https://ip.skk.moe/)。）

### 3. 我想要代理国内流量（全局代理）

- [**解决方案**](../getting-started/step5.md#调整路由方案)

### 4. Linux 设置了透明代理 (Redirect, tProxy)，为什么不能使用 (提示 failed to set IP_TRANSPARENT > operation not permitted)？

- **原因：** 由 V2Ray 脚本安装的服务会在启动时添加 `cap_net_admin` 权限，但 Qv2ray 默认调用的 V2Ray 程序本身并未设定包含该权限。
- **解决方案：** Arch 用户，请以管理员 (root / sudo) 权限执行 `/usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/lib/v2ray/v2ray` 或 使用 `@DuckSoft` 构建的 [aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/) ; 其他 Linux 用户请自行查找 V2Ray 真实绝对路径并替换上文命令中的 `/usr/lib/v2ray/v2ray`。

## 性能问题

### 1. 感觉 Qv2ray 打开网页/切换连接的速度比其他代理软件慢得多

- **原因**：Qv2ray 默认开启的 `V2Ray 集成` 会让由插件提供支持的协议（如SSR、Trojan）的流量完整地通过一遍 [V2Ray 路由](../plugins/v2ray-integration.md)，以实现高级路由功能，但~~在低配设备上~~会导致延迟明显增大。

- **解决方案**：在 `首选项` 的 `内核设置` 选项卡中关闭 `V2Ray 集成` 可以提升由插件提供支持的协议的响应速度，但相关协议将会失去 `高级路由`、`绕过中国大陆`、`本地地址直连` 和 `自定义DNS` 功能，这意味着相关协议的路由/分流功能将完全失效，即只能全局代理，无法分流。请注意，该选项不影响由 V2Ray 内核提供支持的协议（如VMess）。也就是说，如果你仅使用由 V2Ray 内核提供支持的协议，开关该功能不会有任何影响。
- 此外，在杀毒软件~~尤其是 Microsoft Defender~~中将 V2Ray 核心设置为白名单程序，也可能会提升响应速度。~~未经科学验证的玄学~~


##  软件行为 / 外观问题

### 1. Qv2ray 在 GNOME 上没有托盘图标或者托盘图标会偶尔消失

- **原因**：这一点已经确认了是上游的 bug。

- **解决方案**：Gnome 官方不支持托盘图标，所有的托盘图标现实都来自下游发行版或者第三方开发者的扩展。作为权宜之计，你可以运行这条命令：

```shell
nohup gnome-shell --replace &
```
::: tip 给 Gnome 用户的建议
原生的 Gnome 桌面不会显示通知区托盘图标，Qv2ray 的图标也会无法显示。如果要显示通知区图标，您可以安装 [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator)（ 也叫做`ubuntu-appindicator` ）这个 Gnome 扩展，然后注销、重新登录，接着在 `优化` 应用（即 `gnome-tweaks` ）启用它，之后就可以看到通知区托盘图标了。
:::

- ~~最后插一嘴，KDE 真香。~~

### 2. Ubuntu 启动 Qv2ray 后会显示一个非常难看的界面

- **解决方案**：启动 Qv2ray 时添加 `--style fusion` 参数可能会解决这个问题。

## 其他问题

### 1. 为什么 Qv2ray 不打包插件和 V2Ray 核心或是内置下载功能?

我们希望我们的用户能够了解软件的工作原理，同时拥有优秀的动手能力来解决可能存在的问题和需求。如果 Qv2ray 不适合您，您可以使用其他软件。

### 2. Qv2ray 会推出移动平台（Android、iOS）版本吗？

目前没有计划。根据开发者的意愿，当程序迁移到 QML 的时候**也许**会有。
