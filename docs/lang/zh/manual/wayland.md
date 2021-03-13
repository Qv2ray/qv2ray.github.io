---
title: 关于Wayland的一些笔记
---

# 关于Wayland的一些笔记

**注意：本节仅适用于 GNU/Linux 系统**。

## 运行

Qv2ray 是一个本地的 Qt5/C++ 程序，它完全支持Wayland 显示协议。 然而，要在 Wayland 协议下运行 Qv2ray ，您需要一个 Wayland 会议(例如Gnome 会议、KDE Wayland 会议、Sway 等)。 ，您也需要安装 Wayland 支持 Qt5 (通常是包名 `qt5-wayland` or `(qtwayland5`)。

如果一切都已就绪，您现在可以尝试使用 Wayland 显示协议运行 Qv2ray

### Gnome 环境

Gnome环境中的Qt5程序默认使用 Xorg 协议 (Xorg) Wayland下的后退模式在Xwayland运行)。 因此，若要在 Wayland 显示协议下运行 Qv2ray ，您需要运行以下命令。

```bash
env QT_QPA_PLATFORM=wayland qv2ray
```

它的运作方式如下：

[![Gnome 会话中Wayland上的 Qv2ray](https://s1.ax1x.com/2020/11/07/BIuwb4.png)](https://imgchr.com/i/BIuwb4)

您可以将 `QT_QPA_PLATFORM=wayland` 添加到 Qv2ray 的桌面文件，以便Qv2ray 可以在启动时使用Wayland 显示协议。

### KDE Plasma Wayland 会话

从理论上讲，它默认了Wayland显示协议，但这还没有被验证。 指定Qv2ray 以与上面相同的方式遵循Wayland显示协议。

### 外边框

欢迎那些在使用这一工具方面有经验的国家所作的贡献。 指定要遵循Wayland显示协议的 Qv2ray 与上面相同。

## 故障排除

### 无法在Wayland上运行

You may be using an Xorg-based desktop session, or you don't have the Wayland component for Qt installed. Or, you have statically compiled Qv2ray, but have not included the Wayland component for Qt.

### 在Wayland显示协议下运行是否加速了爬行？

不，谢谢。

### KDE Wayland会议下的问题

在 KDE Wayland 会话下，如果您注销并重新登录，Qv2ray 将不会退出， 不会显示通知托盘图标，将使用大量的 CPU 。

**The solution is (use one of three choices):**

1. Use Gnome Wayland session

2. Use KDE Plasma or other desktop‘s Xorg sessions

3. 杀死你自己的 Qv2ray 进程，然后重新打开它。

> 相关问题： <https://github.com/Qv2ray/Qv2ray/issues/830>

### Gnome 下没有托盘图标

Gnome 桌面不支持自然的托盘图标。 Ubuntu 制作了一个 [扩展](https://extensions.gnome.org/extension/1301/ubuntu-appindicators/) 来支持基于 DBus 通信的 Gnome 托盘扩展。 到目前为止测试的结果是，扩展将显示在Arch Linux下的Wayland运行的 Qv2ray 托盘。 但可能无法在自定义的 Ubuntu Wayland 会话下显示它们。 这是一个上游问题，本项目无法解决。

### 应用程序窗口在哪里？

如上所述，GNOME 不支持托盘图标，Wayland的参考合成器 `Weston`。 在当前版本下，如果启用 **_自动连接_** 后，应用程序主窗口将被隐藏。 见 [#1080](https://github.com/Qv2ray/Qv2ray/issues/1080) [#1097](https://github.com/Qv2ray/Qv2ray/issues/1080)。 当前的工作是再次启动 Qv2ray ，然后主窗口将被激活并变得可见。

## 剪切板

因为Wayland没有一个统一的剪贴板接口。 它可能无法使用右键单击菜单复制和粘贴在Wayland中运行的应用程序之间。 作为一个工作区，您可以使用 `Ctrl + C/V` 复制和粘贴。 还请注意，复制和粘贴时，同时打开复制源窗口和粘贴目标窗口。

翻译为 www.deepL.com/translator(免费版本)
