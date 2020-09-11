---
title: V2Ray 核心相关
sidebarDepth: 3
---

# V2Ray 核心相关 FAQs

## 无法监听地址

通常是因为已经有另一个进程使用了启动 V2Ray 核心所需的端口。可能出现如下日志：

* Windows: 
`failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: Only one usage of each socket address (protocol/network address/port) is normally permitted.`
* Linux / macOS: 
`failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: bind: address already in use`

### 已存在 V2Ray 核心实例

您应该首先检查系统里是否已存在一个 V2Ray 核心进程。如果 Qv2ray 在终止其操作的 V2Ray 核心前发生了崩溃，那么就有可能存在一个遗留的 V2Ray 核心进程。

#### Windows

对于 Windows 用户，您可以打开您的 **任务管理器** 来检查是否有  `v2ray.exe` （或是 `wv2ray.exe`，如果您选择选择了将 `wv2ray.exe` 作为核心运行，以下同理）正在运行。

如果您找到了冲突的 V2Ray 核心进程，您可能需要手动终止其运行。可以按 <kbd>Win</kbd> + <kbd>R</kbd> 来打开 **运行** 窗口，然后输入以下命令并点击确定：

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

### 被其他程序占用

如果您没有找到运行中的 V2Ray 实例，您可能还需要再进一步排查是什么/谁占用了这个端口。

#### Windows

对于 Windows 用户，打开 **命令提示符（cmd）** 运行以下命令：

```batch
netstat -aon | findstr "8888"
```

> 根据实际情况更改端口（以上为 `8888` ）。

如果有某些程序占用了端口，将获得可能像这样的输出：

```
  TCP    127.0.0.1:8888            0.0.0.0            LISTENING       114514
  TCP    [::1]:8888                [::]:0             LISTENING       114514
```

注意输出的最后一列（在本例中为`114514`）。那就是占用了该端口的进程的 PID，运行以下命令以终止程序：

```batch
taskkill /f /pid 114514
```

程序终止后，该端口应被释放并可用。

#### Linux / macOS

对于 Linux / macOS 用户，您可以使用以下命令执行类似的操作：

```bash
# Linux
sudo netstat -nlp | grep 8888

# Linux / macOS
sudo lsof -i:8888
```

如果有正在使用该端口的进程，则输出将类似于：

```
# netstat
tcp6       0      0 :::8888        :::*          LISTEN      42742/evil

# lsof
evil   42742 username   11u  IPv6  29087      0t0  TCP *:8888 (LISTEN)
```

请注意输出示例中的 `42742` 及 `evil` 对应的位置，它显示了该进程的 PID 和程序名称。可以终止它以重新获得端口。

### Windows: 系统保留端口

该情况仅会出现在 Windows 平台上，其错误日志通常如下：

* `failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: bind: An attempt was made to access a socket in a way forbidden by its access permissions.`

Microsoft 于 2018 年 2 月 13 日发布了 [KB4074588](https://support.microsoft.com/eu-es/help/4074588/windows-10-update-kb4074588) 补丁，它将修改 Windows 操作系统上的*保留端口范围*，因此您可能会受到影响。

如前所述，您可以使用 `netsh interface ipv4 show excludedportrange protocol=tcp` 命令显示所有保留端口。您不应该使用这些端口，而是将侦听端口更改为其他端口号。

### 还是没搞定

只需更改监听端口就可以避免冲突，这是一种非常简单的方法。
（译者注：在一般情况下不会遇到1~65535所有端口均被占用的情况，如遇到，请善用互联网搜索引擎或进群交流）

## 运行失败

当 V2Ray 核心无法运行时，会发生这种情况。典型的错误信息可以是：

* `v2ray core failed with errcode: 255`

### Linux / macOS: 没有可执行属性

您可能忘记了为 `v2ray` 和 `v2ctl` 设置可执行属性。转到相应的目录下并执行：

```bash
sudo chmod +x v2ray
sudo chmod +x v2ctl
```

完事。

### 罕见情况: 不是有效的可执行文件

您可能下载了不能在您的平台上执行的二进制文件。例如，您正在运行64位 Windows （`amd64`），然后下载了 `arm64` V2Ray 核心。或者，您下载的文件已损坏。

可以通过双击直接运行 `v2ray`（如果您使用的是 Windows ，则为`v2ray.exe`）快速检查。如果有错误，请删除并重新下载正确的 V2Ray 核心。

:::tip QvKernelABIChecker
自 Qv2ray 2.4.0 起， [@DuckSoft](https://github.com/DuckSoft) 引入了一种全新的检查机制，称为 **ABI Checker** ，它将防止您使用不正确的二进制文件。因此，这种情况以后将会变得非常少见。
:::
