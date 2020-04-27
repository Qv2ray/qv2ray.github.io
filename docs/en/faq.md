---
title: FAQ
---

# FAQ

## 1. Qv2ray tray icon occasionally disappears in GNOME

This is confirmed as an upstream bug. You may use the following makeshift command:

```shell
nohup gnome-shell --replace &
```

Finally, KDE is awesome.

## 2. V2ray Core Failed to start after enabling tProxy

Detail: `Segmentation Fault` occurd after enabling tProxy

It's caused by a limit in the `SUID` feature on some Linux OSes. Detailed error analysis please see: [#59](https://github.com/Qv2ray/Qv2ray/issues/59)

- Solution:`sudo sysctl fs.suid_dumpable=1`
- The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.

## 3. Ubuntu gives a super ugly UI

- Solution: Append `--style fusion` to the command line arg may solve this problem.

## 4. Cannot execute AppImage: Permission denied

- You should grant permission before executing it.
- Solution: `chmod +x Qv2ray.AppImage`
