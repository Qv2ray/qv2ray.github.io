---
title: 向 Qv2ray 中导入节点
---

# 向 Qv2ray 中导入节点

> TODO: Expand the stub

------

## 1. 通过 Vmess 链接导入

使用如下：

```
vmess://eyJ2IjoiMiIsxxxxqcC5xbm9kZS5uZXQiLCJwb3J0Ijo4MDgwLCJpZCI6ImUxYjMwYTJmLTE3NWYtNGYzYi05MTQzLWM2Nzc4MssssiJ3cyIsInR5cGUiOiJub25lIiwiaG9zdCI6ImEuanAuYXdzLnF1aWMuZW5saXYuY24iLCJwYXRoIjoiXC8iLCJ0bHMiOiIifQ==
```

以 `vmess://` 开头的 base64 编码的链接

- 在主界面点击 add （添加）打开 import file 导入文件
- 选择 Vmess/QRCode (Vmess/二维码) 在 Share Link （分享链接） 中填入地址，然后import (导入) 即可

![imporet vmess link](@img/gs/3/1.gif)

## 2. 通过订阅地址导入

- 点击 Subscriptions （订阅） 进入 SubscribeEditor （订阅编辑器）

- 点击左下角的添加图标

- 输入 Subscrption Name（订阅名称）、 Subscription Address （订阅地址）然后点击 Update Subscription Data (更新订阅）

- 更新完成后退出订阅管理界面，在主界面直接双击服务器即可连接

![import subscriptions](@img/gs/3/2.gif)
