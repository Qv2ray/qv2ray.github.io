---
title: 使用插件
---

# 使用插件

- 本页主要说明 Qv2ray 插件系统的使用方法
- 要使用插件，Qv2ray 的版本至少应为 **`Qv2ray v2.5.0-pre1 BuildVersion: 5264`**

## 何为插件

一个 Qv2ray 插件，技术上地说，是一个实现了 `QvPlugin` 接口、从而能扩展 Qv2ray 功能的共享库文件。

实际上，Qv2ray 插件是 Qv2ray 的扩展，能让你使用更多特性。

当前，Qv2ray 项目组共发布如下 5 个我们维护的插件：

- [**QvSSRPlugin**](https://github.com/Qv2ray/QvPlugin-SSR) - 让你能在 Qv2ray 中使用 ShadowsocksR
- [**QvTrojanPlugin**](https://github.com/Qv2ray/QvPlugin-Trojan) - 让你能在 Qv2ray 中使用 Trojan
- [**QvNaiveProxyPlugin**](https://github.com/Qv2ray/QvPlugin-NaiveProxy) - 让你能在 Qv2ray 中使用 NaiveProxy
- [**QvCommandPlugin**](https://github.com/Qv2ray/QvPlugin-Command) - 当特殊事件发生时，运行任意指定的命令
- [**QvTrojan-GoPlugin**](https://github.com/Qv2ray/QvPlugin-Trojan-Go) - 让你能在 Qv2ray 中使用 Trojan-Go

## 插件的获取与使用

你可以下载并启用任意数量的插件。

要安装一个插件，你需要进行下面的操作：

### 1. 获取插件

- 部分插件可能会通过包管理系统（如 [Scoop](../getting-started/step1.md#scoop-针对-windows-用户)）分发，若合意可直接使用。
  - *若你已通过此方法安装了插件，接下来请转至 **第三步**。*
- 根据实际的操作系统，从插件的 Release 页面下载。

### 2. 放置插件

- 点击 **[插件管理器](qv2ray://open/plugin/metadata)** 窗口中的 **[打开本地插件文件夹](qv2ray://open/plugin/plugindir)** 按钮，此时应自动打开一个名为 `plugins` 的文件夹。
- 将您所下载的插件文件（`.dll` / `.dylib` / `.so`）放入此目录。
- 关闭 Qv2ray 并重新打开。这将让 Qv2ray 重新扫描插件目录。

### 3. 启用插件

- 打开[插件管理器](qv2ray://open/plugin/metadata)，你将看到所找到的插件。
- 在插件列表中勾选所希望使用的插件即可。
- 某些插件，尤其是核心插件（如 Trojan、ShadowsocksR 等），**需要重新启动 Qv2ray 后才会生效**。

### 4. 享受！

- 插件已经可以用了！

## 常见问题

### Qv2ray 没有检测到插件

- 请确认插件位于 Qv2ray 的插件目录（`config\plugins`）下。
- 请确认插件版本与 Qv2ray 版本匹配。目前，`2.0.0` 及之后版本的插件需要使用 Qv2ray `v2.6.0-rc2` 版本。
- 如果问题仍然存在，建议直接向插件提供者进行反映。请包含下面的信息，以助开发者定位您的问题：
  - Qv2ray 的[详细版本](qv2ray://open/preference/about)，包括在哪里下载的、具体的版本号和构建号。
  - 对应插件的详细版本，有条件的请带上插件文件的 `sha256` 和 `md5`。
  - Qv2ray 的日志，可以使用 `qv2ray(.exe) --debug > log.txt` 命令进行收集。

### 插件没有适合我操作系统的文件

- 通常是插件作者懒得支持你的操作系统，或者：
- 这个插件不适用于你的操作系统：
  - 例如：一个针对 Linux 系统的 `iptables` 设置插件可能就不适合 macOS 和 Windows。

### 插件导致 Qv2ray 崩溃

- 可以试试用 `qv2ray(.exe) --noPlugin` 禁用所有插件的加载.
- 如果 Qv2ray 成功启动了（证明的确是插件的问题），请同上述方法报告问题。
