---
title: 配置 V2Ray 核心
---

# 配置 V2Ray 核心

在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 v2ray 核心完成一些必要的配置。

## 1 下载 V2Ray 核心文件

由于一些原因，Qv2ray 本身并**不包含** V2ray 的核心可执行文件，这些核心文件来自一个叫做 V2Ray Core 的项目，需要用户手动下载安装到指定位置。

### 1.1 Linux 发行版

#### 1.1.1 从 Linux 发行版的软件包管理器安装

如果你正在使用的 Linux 发行版拥有一个可以自动安装 V2Ray 核心文件的包管理系统，那通过包管理安装 Qv2ray 是最好的选择，因为系统可以自动处理 v2ray 核心的更新。

**Arch Linux 及其衍生版**

```sh
sudo pacman -S v2ray
```
>**TIP:给 Arch Linux 及其衍生版用户的提示**
>若您使用 `v2ray` 软件包组，推荐的路径配置如下：
>**核心可执行文件路径**: `/usr/bin/v2ray`
>**V2ray 资源目录**: `/usr/lib/v2ray`

#### 1.1.2 V2Ray 官方安装脚本

V2Ray 官方提供了一个安装脚本，可以方便地在 Linux 操作系统上安装 V2Ray Core。使用脚本之前请确认你的系统安装了`curl`。

```sh
curl https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh |bash
```

由于官方安装脚本会把 V2Ray 设置为服务端且自动开启后台服务，我们需要关闭`v2ray`服务。

```sh
sudo systemctl stop v2ray && sudo systemctl disable v2ray
```

该脚本会安装一下文件：

```conf
installed: /usr/local/bin/v2ray -> ../lib/v2ray/v2ray
installed: /usr/local/bin/v2ctl -> ../lib/v2ray/v2ctl
installed: /usr/local/lib/v2ray/v2ray
installed: /usr/local/lib/v2ray/v2ctl
installed: /usr/local/lib/v2ray/geoip.dat
installed: /usr/local/lib/v2ray/geosite.dat
installed: /usr/local/etc/v2ray/config.json
installed: /var/log/v2ray/
installed: /etc/systemd/system/v2ray.service
installed: /etc/systemd/system/v2ray@.service
```
#### 1.1.3 手动从 GitHub 下载

请前往 [v2ray/v2ray-core 官方 Release 页面](https://github.com/v2ray/v2ray-core/releases)，并下载最新的符合当前系统版本的稳定版软件包。大多数 Linux 用户可以下载 `v2ray-linux-64.zip`。

::: danger 警告

如果你在 `x86_64`（`amd64`）平台上运行 Qv2ray，请不要下载 `v2ray-linux-arm64.zip`。明确地说，`arm64` 和 `amd64` 完全不同。请确保你不会这样做。

:::

### 1.2 Microsoft Windows

**注意**： Windows XP、Windows Vista、Windows RT 8、Windows RT 8.1 以及 Windows 10 ARM32 系统不被 V2Ray 项目所支持，也不被 Qv2ray 所支持。

#### 1.2.1 从 Scoop 安装

Scoop 是一个在 Windows 平台的软件管理脚本，它提供了 V2Ray 内核的安装。

打开 PowerShell 以安装 Scoop（如果当前未安装）：

```pwsh
iwr -useb get.scoop.sh | iex
```

安装 V2Ray Core：
```pwsh
scoop install v2ray
```

V2Ray Core 会放在你用户目录下的 `~\scoop\apps\v2ray\current`文件夹内。

#### 1.2.2 手动从 GitHub 下载

请前往 [v2ray/v2ray-core 官方 Release 页面](https://github.com/v2ray/v2ray-core/releases)，并下载最新的符合当前系统版本的稳定版软件包。Windows x86_64 （即通常所说的 64 位系统）用户请下载`v2ray-windows-64.zip`，其它版本的 Windows 系统请下载`v2ray-windows-32.zip`。

### 1.3 macOS

#### 1.3.1 从 Homebrew 安装

```bash
brew install v2ray
```

查看安装位置：

```bash
brew list v2ray
```

关于 Homebrew：[https://brew.sh/](https://brew.sh/)

#### 1.3.2 手动从 GitHub 下载

请前往 [v2ray/v2ray-core 官方 Release 页面](https://github.com/v2ray/v2ray-core/releases)，并下载最新的符合当前系统版本的稳定版软件包。macOS系统下载有`macOS`或`Darwin`字样的 zip 包即可。

## 2 放置你的 V2Ray 核心

如果你是从 GitHub 手动下载的 V2Ray 核心，那么你需要将 v2ray 核心文件提取到一个固定的位置。 默认情况下，建议将文件提取到 `$QV2RAY_CONFIG_PATH/vcore` 中，其中 `$QV2RAY_CONFIG_PATH` 是 Qv2ray 存储其数据的目录。

目录 `vcore` 可能位于以下位置之一：

- `./` （在 Qv2ray 可执行文件旁边，建议 Windows 用户使用）

- `~/.qv2ray/`（在 home 文件夹的独立目录中）

- `~/.config/qv2ray` （标准 XDG 配置路径）

确保这些文件直接存在于 `vcore` 目录中:

```
geoip.dat geosite.dat v2ctl v2ray
```

:::warning 对于 Linux / macOS 用户的温馨提示

您应该始终为 `v2ray` 和 `v2ctl` 授予**可执行权限**。这通常通过在这些文件上执行 `chmod + x` 来完成。

:::

## 3 配置 Qv2ray 去使用核心

打开 Qv2ray 并进入**首选项**窗口。在 **一般设置 - V2Ray 设置** 中，配置如下：

- **核心可执行文件路径**：将此设置为您的 V2Ray 可执行文件所在的位置。 这可以是 Windows 上的 `v2ray.exe` 的完整路径，也可以是 Linux / macOS 上的 `v2ray` 可执行文件的完整路径。

- **V2ray 资源目录**：将其设置为 `geoip.dat` 和 `geosite.dat` 所在的位置。

配置完成后，你可以点击 **检查 V2Ray 核心设置** 按钮来验证你的 V2Ray 核心设置。 重复尝试，直到你通过了检查。
