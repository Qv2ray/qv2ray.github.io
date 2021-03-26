---
title: A few notes about Wayland
---

# 关于Wayland 的一些笔记

**注意：本节仅适用于 GNU/Linux 系统**。

## 运行

Qv2ray 是一个本地的 Qt5/C++ 程序，它完全支持Wayland 显示协议。 然而，要在 Wayland 协议下运行 Qv2ray ，您需要一个 Wayland 会议(例如Gnome 会议、KDE Wayland 会议、Sway 等)。 ，您也需要安装 Wayland 支持 Qt5 (通常是包名 `qt5-wayland` or `(qtwayland5`)。

如果一切都已就绪，您现在可以尝试使用 Wayland 显示协议运行 Qv2ray

### Gnome 环境

Gnome环境中的Qt5程序默认使用Xorg协议（Wayland下的Xorg回退模式）在Xwayland上运行。 因此，若要在 Wayland 显示协议下运行 Qv2ray ，您需要运行以下命令。

```bash
env QT_QPA_PLATFORM=wayland qv2ray
```

它的运作方式如下：

[![Wayland上的 Qv2ray在Gnome 会话中](https://s1.ax1x.com/2020/11/07/BIuwb4.png)](https://imgchr.com/i/BIuwb4)

您可以将 `QT_QPA_PLATFORM=wayland` 添加到 Qv2ray 的桌面文件，以便Qv2ray 可以在启动时使用Wayland 显示协议。

### KDE Plasma Wayland 会话

从理论上讲，它默认了Wayland显示协议，但这还没有被验证。 Qv2ray按照与上述相同的方式指定为遵循Wayland显示协议。

### Sway

未经测试，欢迎有经验的用户提供帮助。 指定Qv2ray与上述相同，以遵循Wayland显示协议。

## 故障排除

### 无法在Wayland上运行

您可能正在使用基于Xorg的桌面会话，或者没有安装Qt的Wayland组件。 或者，您已经静态编译了Qv2ray，但是还没有包括Qt的Wayland组件。

### 在Wayland显示协议下运行会加速爬墙吗？

不，谢谢。

### Issue under KDE Wayland session

Under a KDE Wayland session, if you log out and log back in, Qv2ray will not exit, will not show the notification tray icon and will use a lot of CPU.

**The solution is (use one of three choices):**

1. Use Gnome Wayland session

2. Use KDE Plasma or other desktop‘s Xorg sessions

3. Kill the Qv2ray process by yourself and then open it again.

> Related issues: <https://github.com/Qv2ray/Qv2ray/issues/830>

### No tray icon under Gnome

The Gnome desktop does not support tray icons by nature. Ubuntu has made an [extension](https://extensions.gnome.org/extension/1301/ubuntu-appindicators/) to support a Gnome tray extension based on DBus communication. The result of testing so far is that the extension will display trays from Qv2ray running on Wayland under Arch Linux, but may not display them under the custom Ubuntu Wayland session. This is an upstream issue and cannot be addressed by this project.

### Where is the application window?

As described above, GNOME does not support tray icons, so does Wayland's reference compositor `weston`. With current version, the application main window will be hidden after launch if **_Auto Connect_** is enabled.(see [#1080](https://github.com/Qv2ray/Qv2ray/issues/1080) [#1097](https://github.com/Qv2ray/Qv2ray/issues/1080)). A current workaround is to launch Qv2ray again, then the main window will be activated and become visible.

## Clipboard

Since Wayland does not have a unified clipboard interface, it may not be possible to use the right-click menu to copy and paste between applications running in Wayland. As a workaround, you can use `Ctrl + C/V` to copy and paste. Also note that when copying and pasting, open both the copy source window and the paste target window at the same time.

Translated with www.DeepL.com/Translator (free version)
