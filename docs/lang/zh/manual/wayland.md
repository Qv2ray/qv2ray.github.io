---
title: 关于Wayland的一些注释
---

# 关于Wayland的一些注释

**注意：本节仅适用于 GNU/Linux 系统**。

## 运行

Qv2ray 是一个原生的 Qt5/C++ 程序，它完全支持 Wayland 显示协议。然而，要在 Wayland 协议下运行 Qv2ray ，您需要一个 Wayland 会话（例如Gnome 会话、KDE Wayland 会话、Sway 等），您也需要安装 Qt5 的 Wayland 支持 (通常是包名 `qt5-wayland` 或 `qtwayland5`）。

如果一切都已就绪，您现在可以尝试在 Wayland 显示协议下运行 Qv2ray。

### Gnome 环境

Gnome 环境下的 Qt5 程序默认使用 Xorg 协议，运行在Xwayland上 (Xorg 于Wayland下的后退模式）。因此，若要在 Wayland 显示协议下运行 Qv2ray ，您需要运行以下命令。

```bash
env QT_QPA_PLATFORM=wayland qv2ray
```

它的工作如下：

[![Qv2ray On Wayland in Gnome Session](https://s1.ax1x.com/2020/11/07/BIuwb4.png)](https://imgchr.com/i/BIuwb4)

你可以把 `QT_QPA_PLATFORM=wayland` 添加到 Qv2ray 的 desktop 文件，这样 Qv2ray 启动的时候就能使用 Wayland 显示协议了。

### KDE Plasma Wayland 会话

从理论上讲，它默认了 Wayland 显示协议，但这尚未被验证。指定 Qv2ray 以与上面相同的方式遵循 Wayland 显示协议。

### Sway

未经测试，欢迎有使用经验的人员提供帮助。如何指定Qv2ray使用Wayland显示协议的方法与上面相同。

## 故障排除

### 无法在 Wayland 上运行

您可能正在使用基于 Xorg 的桌面会话，或者没有安装 Qt 的 Wayland 组件。或者，您已经静态编译了 Qv2ray，但是没有包括 Qt 的 Wayland 组件。

### 在 Wayland 显示协议下运行是否会加快翻墙速度？

当然不可能啦，亲爱的约翰同志。

### KDE Wayland会议下的问题

在 KDE Wayland 会话下，如果您注销并重新登录，Qv2ray 将不会退出，不会显示通知托盘图标，将使用大量的 CPU 。

**解决方案是(以下三个选项任选一个)：**

1. 使用 Gnome Wayland 会话

2. 使用 KDE Plasma 或其他桌面的 Xorg 会话

3. 杀死你自己的 Qv2ray 进程，然后再打开它。

> 相关问题： [https://github.com/Qv2ray/Qv2ray/issues/830](https://github.com/Qv2ray/Qv2ray/issues/830)

### Gnome 下没有托盘图标

Gnome 桌面本身不支持任务栏图标。Ubuntu 制作了一个[扩展，](https://extensions.gnome.org/extension/1301/ubuntu-appindicators/)用来支持基于 DBus 通讯的 Gnome 托盘扩展。到目前为止的测试结果是，该扩展程序能在 Arch Linux 上的 Wayland 会话下显示 Qv2ray 的托盘，但在 Ubuntu Wayland 会话下可能不会显示它们。这是一个上游问题，该问题无法解决。

### 应用程序窗口在哪里？

如上所述，GNOME 不支持任务栏图标，Wayland 的参考合成器`weston`也不支持。***对于当前版本，如果启用了“自动连接”*** ，则应用程序主窗口在启动后将被隐藏。（请参阅[＃1080](https://github.com/Qv2ray/Qv2ray/issues/1080) [＃1097](https://github.com/Qv2ray/Qv2ray/issues/1080) ）。当前的解决方法是再次启动 Qv2ray，然后将激活主窗口并使其可见。

## Clipboard

由于 Wayland 没有统一的剪贴板接口，因此在Wayland下可能无法使用右键菜单在应用程序之间进行复制和粘贴。解决方法是，可以使用`Ctrl + C/V`进行复制和粘贴。另请注意，在复制和粘贴时，请同时打开复制源窗口和粘贴目标窗口。

恭喜这段文字从中文翻译到英文又翻译回中文~~
