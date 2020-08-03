---
title: V2Ray 核心相关
sidebarDepth: 3
---

# V2Ray 核心相关 FAQs

## 无法监听地址

通常是因为已经有另一个进程使用了启动 V2Ray 核心所需的端口。可能出现如下日志：

* Windows: `failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: Only one usage of each socket address (protocol/network address/port) is normally permitted.`
* Linux / macOS: `failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: bind: address already in use`

### 已存在 V2Ray 核心实例

您应该首先检查系统里是否已存在一个 V2Ray 核心进程。如果 Qv2ray 在终止其操作的 V2Ray 核心前发生了崩溃，那么就有可能存在一个遗留的 V2Ray 核心进程。

#### Windows

对于 Windows 用户，您可以打开您的 **任务管理器** 来检查是否有  `v2ray.exe` （或是 `wv2ray.exe`，如果您选择选择了将 `wv2ray.exe` 作为核心运行，以下同理）正在运行。

如果您找到了冲突的 V2Ray 核心进程，您可能需要手动终止其运行。Windows 用户可以按 <kbd>Win</kbd> + <kbd>R</kbd> 来打开 **运行** 窗口，然后输入以下命令并点击确定：
```batch
taskkill /f /im v2ray.exe
```

#### Linux / macOS

对于 Linux / macOS 用户，您可以使用以下命令查找到 V2Ray 核心的 PID ：
```bash
ps aux | grep v2ray
```

然后使用以下命令杀死进程（用查找到的 PID 替换下面的 `<PID>` 部分）：
```bash
sudo kill -9 <PID>
```
