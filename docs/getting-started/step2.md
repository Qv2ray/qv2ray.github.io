---
title: 配置 V2Ray 核心
---

# 配置 V2Ray 核心

在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 V2Ray 核心完成一些必要的配置。

## 下载 V2Ray 核心文件

由于社区政策等原因，Qv2ray 本身并 **不包含** V2Ray 核心可执行文件。这些核心文件来自一个叫做 `v2ray-core` 的项目，需要用户手动下载安装到指定位置。

**阅读 [V2Fly 官方指南](https://www.v2fly.org/guide/install.html)获取详细信息。**

:::tip 手动管理 vs 自动管理
如果你正在使用的发行版拥有一个可以自动安装 V2Ray 核心文件的包管理系统，那通过包管理安装是最好的选择，因为系统可以自动处理 V2Ray 核心的更新。例如，对于 Arch Linux 用户而言，安装 `v2ray` 软件包就足够了。对于其他情形，请接着阅读下面的说明。
:::

:::tip 给 Windows 10 ARM64 用户的建议
从 V2Ray Core 4.27 起，V2Ray 项目组为 Windows 10 提供了基于 ARM32（ armv7 ）的内核，建议 Windows 10 ARM64 用户使用该版本的内核以获取更好的性能表现。
:::

:::danger 擦亮眼睛
如果你在 `x86_64`（`amd64`）平台上运行 Qv2ray，请不要下载 `v2ray-linux-arm64.zip`。明确地说，`arm64` 和 `amd64` 是完全不同的 CPU 架构。请确保你不会这样做。
:::

### 通过软件包管理器下载核心

#### Homebrew（macOS）

```bash
brew install v2ray
```

使用 Homebrew 安装 V2Ray 的可执行文件位于 `/usr/local/bin/v2ray`，资源文件位于 `/usr/local/share/v2ray`。

#### Scoop (Windows)

:::tip 非中国大陆网络用户注意
本节使用了 [FastGit](https://doc.fastgit.org/zh-cn/) 加速 GitHub 访问，以为中国大陆用户提供更好的访问体验。

若您并非中国大陆网络用户，或不需要对 GitHub 加速访问，请参考英文版的此部分操作。
:::

```pwsh
# 如果尚未添加 mochi bucket
scoop bucket add mochi https://hub.fastgit.org/Qv2ray/mochi
scoop install mochi/v2ray
```

使用 Scoop 安装 V2Ray 的可执行文件位于 `<用户目录>\scoop\apps\v2ray\current\v2ray.exe`，资源文件位于 `<用户目录>\scoop\apps\v2ray\current`.

#### Chocolatey（Windows）

```cmd
choco install v2ray
```

该软件将安装到 `X:\tools\v2ray\`（**X**为你的系统盘盘符）。

#### Debian、Ubuntu 与其它基于 Debian 的衍生版

请参阅 <https://apt.v2fly.org>

使用 FastGit加速：

添加密钥：
```bash
curl -sSL https://raw.fastgit.org/v2fly/debian/main/pubkey.gpg | sudo apt-key add -
```

添加软件源：
```bash
echo "deb [arch=amd64] https://raw.fastgit.org/v2fly/debian/main stable main" | sudo tee /etc/apt/sources.list.d/v2ray.list
```
#### Arch 及其衍生版

```bash
sudo pacman -S v2ray
```

其二进制将被安装到 `/usr/bin/v2ray`，资源文件位于 `/usr/share/v2ray/`。

#### V2Ray 官方安装脚本（使用了 Systemd 的 Linux 发行版）

请参阅 <https://github.com/v2fly/fhs-install-v2ray>

虽然此脚本主要是把 V2Ray 安装为服务端，但是作为客户端使用也是没问题的。在 Qv2ray 中使用则建议关掉它的服务端服务：

```bash
systemctl disable v2ray --now
```

### 手动下载

**下载链接：**
<https://hub.fastgit.org/v2fly/v2ray-core/releases>

将下载到的核心文件解压缩到一个固定的位置。默认情况下，我们建议将文件提取到 `$QV2RAY_CONFIG_PATH/vcore` 中，其中 `$QV2RAY_CONFIG_PATH` 是 Qv2ray 存储其数据的目录。

目录 `vcore` 可以在下面的任一位置：

- `./config/` （在 Qv2ray 可执行文件旁边的 `config` 子文件夹内，建议 Windows 用户使用）
- `~/.qv2ray/`（在 home 文件夹的独立目录中）
- `~/.config/qv2ray/` （标准 XDG 配置路径）

之后，请确保这些文件直接存在于 `vcore` 目录中：

1. `v2ray` 或 `v2ray.exe`：核心可执行文件
2. `v2ctl` 或 `v2ctl.exe`：核心控制程序
3. `geoip.dat`：IP 规则数据库
4. `geosite.dat`：域名规则数据库

:::warning 对于 Linux / macOS 用户的温馨提示
您应该始终为 `v2ray` 和 `v2ctl` 授予**可执行权限**。这通常通过对这些文件执行 `chmod +x ` 来完成。
:::

## 配置 Qv2ray 使用核心

打开 Qv2ray 并进入**首选项**窗口。在 **[内核设置](qv2ray://open/preference/kernel)** 中，进行如下配置：

- **核心可执行文件路径**：将此设置为您的 V2Ray 可执行文件所在的位置。 这可以是 Windows 上的 `v2ray.exe` 的完整路径，也可以是 Linux / macOS 上的 `v2ray` 可执行文件的完整路径。

- **V2Ray 资源目录**：将其设置为 `geoip.dat` 和 `geosite.dat` 所在的位置。

配置完成后，你可以点击 **检查 V2Ray 核心设置** 按钮来验证你的 V2Ray 核心设置。 重复尝试，直到你通过了检查。

:::warning 严禁套娃！
永远不要把 **核心可执行文件路径** 指向 **Qv2ray 程序本体**！
好在 Qv2ray 本身是单例模式运行的，你不会因此而引发 fork 炸弹。
一定要注意，V2Ray 核心可执行文件是 `v2ray` 、 `v2ray.exe` 或者 `wv2ray.exe`，而不是 `qv2ray` 或 `qv2ray.exe`、`v2rayN.exe` 等名称！
:::
