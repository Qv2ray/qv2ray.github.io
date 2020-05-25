---
title: FAQ
sidebarDepth: 3
---

# FAQ

## 严重故障

### 1. 不能执行 AppImage: 权限不够（Cannot execute AppImage: Permission denied）

- **原因**：……在执行一个程序之前，必须给予它可执行权限。

- **解决方案**：`chmod +x Qv2ray.AppImage`

### 2. V2Ray 核心无法启动，提示 `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **本质**：发生了端口冲突。

- **原因 1**：先前的 V2Ray 进程未正常退出，占用了相关端口。

- **解决方案（Windows 系统）**：结束 `v2ray.exe` 或 `wv2ray.exe` 进程。

  - **方法 1**：在任务管理器的 `详细信息` 选项卡中，找到 `v2ray.exe` 或 `wv2ray.exe` 进程，右键点击进程名称，`结束任务`、`结束任务` 即可。~~科学严谨 XD~~

  - **方法 2**：打开 `cmd` 或 `powershell`，执行如下命令：

```powershell
taskkill /f /im v2ray.exe
taskkill /f /im wv2ray.exe
```

- **解决方案（Linux 系统）**：你都用Linux了……~~杀进程还不会吗？~~

- **原因 2**：Qv2ray 中设定的相关端口已被其他软件占用。

- **解决方案**：变更 Qv2ray 或其他软件的端口设置。

### 3. 开启 tProxy 之后，V2ray Core 会启动失败

- **细节**：开启 tProxy 后，会提示 `Segmentation Fault（段错误）`。

- **原因**：这个问题是一些 Linux 系统的 `SUID` 特性受限制所导致的。详细的错误分析请参阅 [#59](https://github.com/lhy0403/Qv2ray/issues/59)。

- **解决方案**：`sudo sysctl fs.suid_dumpable=1`<br/>
这个解决方案会在重启后失效。如果你希望保持这个选项，请参阅 [这里](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html)。

### 3. V2Ray 核心无法启动，提示 `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **原因 1**：如果你是 Windows 系统，那么应该是某个 Windows 补丁将端口号在 `1000-2000` 之间的某段端口设了为特权/保留端口。

- **解决方案**：更换端口号，使其 `>2000` 即可。

## 性能问题

### 1. 感觉 Qv2ray 打开网页/切换连接的速度比其他代理软件慢得多

- **原因**：Qv2ray 默认开启的 `V2Ray 集成` 会让由插件提供支持的协议（如SSR、Trojan）的流量完整地通过一遍 [V2Ray 路由](/plugins/v2ray-integration)，以实现高级路由功能，但~~在低配设备上~~会导致延迟明显增大。

- **解决方案**：在 `首选项` 的 `内核设置` 选项卡中关闭 `V2Ray 集成` 可以提升由插件提供支持的协议的响应速度，但相关协议将会失去 `高级路由`、`绕过中国大陆`、`本地地址直连` 和 `自定义DNS` 功能，这意味着相关协议的路由/分流功能将完全失效，即只能全局代理，无法分流。请注意，该选项不影响由 V2Ray 内核提供支持的协议（如VMess）。也就是说，如果你仅使用由 V2Ray 内核提供支持的协议，开关该功能不会有任何影响。
- 此外，在杀毒软件~~尤其是 Microsoft Defender~~中将 V2Ray 核心设置为白名单程序，也可能会提升响应速度。~~未经科学验证的玄学~~

##  软件行为 / 外观问题

### 1. Qv2ray 在 GNOME 上的托盘图标会偶尔消失

- **原因**：这一点已经确认了是上游的 bug。

- **解决方案**：作为权宜之计，你可以运行这条命令：

```shell
nohup gnome-shell --replace &
```

- 最后插一嘴，KDE真香。（译者：请自行斟酌）

### 2. Ubuntu 启动 Qv2ray 后会显示一个非常难看的界面

- **解决方案**：启动 Qv2ray 时添加 `--style fusion` 参数可能会解决这个问题。
