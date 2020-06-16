---
title: 向 Qv2ray 中导入节点
---

# 向 Qv2ray 中导入节点

Qv2ray 支持多种导入配置的方式。 为了让您开始，我们选择了这些最常见的用例。

## 通过 Vmess 链接导入

> Vmess 链接通常是这样的：`vmess://eyJ2IjoiMiIsxxxxqcC5x`...

按照以下步骤导入它们：

1. 单击主窗口中的 **Add「添加」** 按钮，或者 [一键打开链接导入](qv2ray://open/import/link) [一键打开 QR 扫描](qv2ray://open/import/qr)
2. 在 **Import File「导入文件」** 对话框中，选择导入 **VMess / QRCode**
3. 粘贴你的 `vmess://` 链接到 **Share Link「分享链接」** 文本框
4. 点击 **Import「导入」** 按钮完成

:::tip 批量导入

您可以一次导入多个 `vmess://` 链接。确保每条 VMess 链接都有单独的行。

:::

:::warning 损坏的链接

一些损坏的 `vmess://` 链接可能无法导入，但是没关系。详细的错误将显示在右边。此外，它不会停止批量导入中的其他条目。

:::

## 通过订阅地址导入

> 订阅链接通常是这样的：`https://some-airport.com/links/yjyyodk?sub=3`

1. 点击 **Subscriptions「订阅」** 进入 **SubscribeEditor「订阅编辑器」**，或者 [一键打开组编辑器](qv2ray://open/group/connection)
2. 在 **SubscribeEditor「订阅编辑器」** 对话框中，单击左下角的 **Add subscription 「添加订阅」** 图标按钮
3. 单击此处可在 **Subscription List「订阅列表」** 中选择新生成的项
4. 在右侧输入您的订阅信息
   - **Subscrption Name「订阅名称」**：随意填写
   - **Subscription Address「订阅地址」** ：使用上面提到的订阅链接
   - **Update Interval「更新间隔」**：根据自己的需求更改
5. 点击 **Update Subscription Data「更新订阅」** 更新订阅，然后等待进程结束
6. 更新完成后退出订阅管理界面。

:::tip 提醒
通过系统代理更新的时候，如果你的订阅上游遇到连接问题（例如: DNS 记录污染，IP 封锁 / 服务器等），你可以尝试运行 **Update Subscription with System Proxy「使用系统代理设置更新订阅」** 选项。 然而，最好尽快通知上游，以永久解决这个问题。
:::
