---
title: FAQ
---

# FAQ

## 1.Qv2ray在GNOME上的托盘图标会偶尔消失

这一点已经确认了是上游的 bug。作为权宜之计，你可以运行这条命令。

```shell
nohup gnome-shell --replace &
```

最后插一嘴，KDE真香。（译者：请自行斟酌）

## 2.开启tProxy之后，V2ray Core会启动失败

细节：开启 tProxy 后，会提示“Segmentation Fault（段错误）”

这个问题是一些 Linux 系统的 `SUID` 特性受限制所导致的。详细的错误分析请参阅 [#59](https://github.com/lhy0403/Qv2ray/issues/59)。

- 解决方案:`sudo sysctl fs.suid_dumpable=1`
- 这个解决方案会在重启后失效。如果你希望保持这个选项，请参阅 [这里](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html)。

## 3.Ubuntu 启动 Qv2ray 后会显示一个非常难看的界面

- 启动 Qv2ray 时添加 `--style fusion` 参数可能会解决这个问题。

## 4：Cannot execute AppImage: Permission denied（不能执行 AppImage:权限不够）

- ……在执行一个程序之前，必须给予它可执行权限。
- 解决方法: `chmod +x Qv2ray.AppImage`
