---
title: A few notes about Wayland
---

# 关于Wayland的一些注释

**注意：本节仅适用于 GNU/Linux 系统**。

## 运行

Qv2ray 是一个本地的 Qt5/C++ 程序，它完全支持Wayland 显示协议。 然而，要在 Wayland 协议下运行 Qv2ray ，您需要一个 Wayland 会议(例如Gnome 会议、KDE Wayland 会议、Sway 等)。 ，您也需要安装 Wayland 支持 Qt5 (通常是包名 `qt5-wayland` or `(qtwayland5`)。

如果一切都已就绪，您现在可以尝试使用 Wayland 显示协议运行 Qv2ray

### Gnome 环境

Gnome环境中的Qt5程序默认使用 Xorg 协议 (Xorg) Wayland下的后退模式在Xwayland上运行。 因此，若要在 Wayland 显示协议下运行 Qv2ray ，您需要运行以下命令。

```bash
env QT_QPA_PLATFORM=wayland qv2ray
```

它的工作如下：

[![Qv2ray On Wayland in Gnome Session](https://s1.ax1x.com/2020/11/07/BIuwb4.png)](https://imgchr.com/i/BIuwb4)

You can add `QT_QPA_PLATFORM=wayland` to Qv2ray's desktop file so that Qv2ray can use the Wayland display protocol at boot time.

### KDE Plasma Wayland 会话

从理论上讲，它默认了Wayland显示协议，但这尚未被验证。 指定Qv2ray 以与上面相同的方式遵循Wayland显示协议。

### Sway

Not tested, contributions from those with experience in using it are welcome. Specifying Qv2ray to follow the Wayland display protocol is the same as above.

## Troubleshooting

### Cannot run on Wayland

You may be using an Xorg-based desktop session, or you don't have the Wayland component for Qt installed. Or, you have statically compiled Qv2ray, but have not included the Wayland component for Qt.

### Does running under the Wayland display protocol speed up wall-climbing?

No, thanks.

### KDE Wayland会议下的问题

在 KDE Wayland 会话下，如果您注销并重新登录，Qv2ray 将不会退出， 不会显示通知托盘图标，将使用大量的 CPU 。

**解决方案是(以下三个选项任选一个)：**

1. 使用 Gnome Wayland 会话

2. 使用 KDE Plasma 或其他桌面“s Xorg 会话

3. 杀死你自己的 Qv2ray 进程，然后再打开它。

> 相关问题： <https://github.com/Qv2ray/Qv2ray/issues/830>

### No tray icon under Gnome

The Gnome desktop does not support tray icons by nature. Ubuntu has made an [extension](https://extensions.gnome.org/extension/1301/ubuntu-appindicators/) to support a Gnome tray extension based on DBus communication. The result of testing so far is that the extension will display trays from Qv2ray running on Wayland under Arch Linux, but may not display them under the custom Ubuntu Wayland session. This is an upstream issue and cannot be addressed by this project.

### Where is the application window?

As described above, GNOME does not support tray icons, so does Wayland's reference compositor `weston`. With current version, the application main window will be hidden after launch if **_Auto Connect_** is enabled.(see [#1080](https://github.com/Qv2ray/Qv2ray/issues/1080) [#1097](https://github.com/Qv2ray/Qv2ray/issues/1080)). A current workaround is to launch Qv2ray again, then the main window will be activated and become visible.

## Clipboard

Since Wayland does not have a unified clipboard interface, it may not be possible to use the right-click menu to copy and paste between applications running in Wayland. As a workaround, you can use `Ctrl + C/V` to copy and paste. Also note that when copying and pasting, open both the copy source window and the paste target window at the same time.

Translated with www.DeepL.com/Translator (free version)
