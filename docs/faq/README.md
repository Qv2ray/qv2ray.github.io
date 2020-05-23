---
title: FAQ
sidebarDepth: 3
---

# FAQ

## 严重故障

### 1. 不能执行 AppImage: 权限不够（Cannot execute AppImage: Permission denied）

- ……在执行一个程序之前，必须给予它可执行权限。
- 解决方案：`chmod +x Qv2ray.AppImage`

### 2. 开启tProxy之后，V2ray Core会启动失败

细节：开启 tProxy 后，会提示“Segmentation Fault（段错误）”

这个问题是一些 Linux 系统的 `SUID` 特性受限制所导致的。详细的错误分析请参阅 [#59](https://github.com/lhy0403/Qv2ray/issues/59)。

- 解决方案：`sudo sysctl fs.suid_dumpable=1`
- 这个解决方案会在重启后失效。如果你希望保持这个选项，请参阅 [这里](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html)。

## 性能问题

### 1. 感觉 Qv2ray 打开网页/切换连接的速度比其他代理软件慢得多
Qv2ray 默认开启的 v2ray 集成会让流量完整地通过一遍 v2ray 路由，从而导致低配设备的延迟明显增大。

- 解决方案：在 `首选项` 的 `内核设置` 选项卡中关闭 `v2ray 集成` 可以提升响应速度，但将会失去 `高级路由`、`绕过中国大陆`、`本地地址直连` 和 `自定义DNS` 功能的支持，这意味着 Qv2ray 的路由/分流功能将完全失效。
- 此外，在杀毒软件中将 v2ray 核心设置为白名单程序，也可能会提升响应速度。~~这是玄学！！！~~

##  软件行为 / 外观问题

### 1. Qv2ray在GNOME上的托盘图标会偶尔消失

这一点已经确认了是上游的 bug。

- 解决方案：作为权宜之计，你可以运行这条命令。

```shell
nohup gnome-shell --replace &
```

最后插一嘴，KDE真香。（译者：请自行斟酌）

### 2. Ubuntu 启动 Qv2ray 后会显示一个非常难看的界面

- 解决方案：启动 Qv2ray 时添加 `--style fusion` 参数可能会解决这个问题。
