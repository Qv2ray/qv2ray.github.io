---
title: A few notes about Wayland
---

# A few notes about Wayland

**Note: This section is only relevant for GNU/Linux systems**.

## Run

Qv2ray is a native Qt5/C++ program, which fully supports the Wayland display protocol. However, for Qv2ray to run under the Wayland protocol, you need a Wayland session (e.g., Gnome session, KDE Wayland session, Sway, etc.), and you also need to install Wayland support for Qt5 (usually the package name `qt5-wayland` or ` (qtwayland5`).

If everything is in place, you can now try to run Qv2ray with the Wayland display protocol.

### Gnome environment

Qt5 programs in a Gnome environment run on Xwayland by default using the Xorg protocol (Xorg's fallback mode under Wayland). Therefore, to get Qv2ray to run under the Wayland display protocol you need to run the following command.

```bash
env QT_QPA_PLATFORM=wayland qv2ray
```

It works as follows:

[![Qv2ray On Wayland in Gnome Session](https://s1.ax1x.com/2020/11/07/BIuwb4.png)](https://imgchr.com/i/BIuwb4)

You can add `QT_QPA_PLATFORM=wayland` to Qv2ray's desktop file so that Qv2ray can use the Wayland display protocol at boot time.

### KDE Plasma Wayland Sessions

Theoretically, it defaults to the Wayland display protocol, but this has not been verified. Qv2ray is specified to follow the Wayland display protocol in the same way as above.

### Sway

Not tested, contributions from those with experience in using it are welcome. Specifying Qv2ray to follow the Wayland display protocol is the same as above.

## Troubleshooting

### Cannot run on Wayland

You may be using an Xorg-based desktop session, or you don't have the Wayland component for Qt5 installed. Or, you have statically compiled Qv2ray, but have not included the Wayland component for Qt5.

### Does running under the Wayland display protocol speed up wall-climbing?

No, thanks.

### Issue under KDE Wayland session

Under a KDE Wayland session, if you log out and log back in, Qv2ray will not exit, will not show the notification tray icon and will use a lot of CPU.

**The solution is (use one of three choices):***
1、Use Gnome Wayland session
2、Use KDE Plasma or other desktop‘s Xorg sessions
3. Kill the Qv2ray process by yourself and then open it again.

>Related issues:
><https://github.com/Qv2ray/Qv2ray/issues/830>

Translated with www.DeepL.com/Translator (free version)

### No tray icon under Gnome

The Gnome desktop does not support tray icons by nature. Ubuntu has made an [extension](https://extensions.gnome.org/extension/1301/ubuntu-appindicators/) to support a Gnome tray extension based on DBus communication. The result of testing so far is that the extension will display trays from Qv2ray running on Wayland under Arch Linux, but may not display them under the custom Ubuntu Wayland session. This is an upstream issue and cannot be addressed by this project.

### Where is the application window?

As described above, GNOME does not support tray icons, so does Wayland's reference compositor `weston`. With current version, the application main window will be hidden after launch if ___Auto Connect___ is enabled.(see [#1080](https://github.com/Qv2ray/Qv2ray/issues/1080) [#1097](https://github.com/Qv2ray/Qv2ray/issues/1080)). A current workaround is to launch Qv2ray again, then the main window will be activated and become visible.

## Clipboard

Since Wayland does not have a unified clipboard interface, it may not be possible to use the right-click menu to copy and paste between applications running in Wayland. As a workaround, you can use `Ctrl + C/V` to copy and paste. Also note that when copying and pasting, open both the copy source window and the paste target window at the same time.


Translated with www.DeepL.com/Translator (free version)
