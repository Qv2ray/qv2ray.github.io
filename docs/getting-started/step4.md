---
title: 配置软件使用 Qv2ray
sidebarDepth: 3
---

# 配置软件使用 Qv2ray

祝贺你! 只剩下一个步骤就可以访问解锁的互联网了！

## 一般方法

### 使用系统代理

对于 **Windows** 和 **macOS** 用户，几乎所有的应用程序都将遵循系统代理设置。 对于 **Linux** 用户，一些应用程序，如 Firefox 和 Chromium，但不是全部，将在 GNOME/KDE 设置中读取和遵守代理配置。

目前 Qv2ray 支持自动设置系统代理，包括 **Windows**、**macOS** 和 **Linux**（GNOME/KDE）。 你可以在以下位置找到 Qv2ray 的 **系统代理** 选项：

- Qv2ray 托盘菜单
  1. 右键点击托盘图标
  2. 在弹出的菜单中选择 **系统代理 -> 开启/关闭 系统代理**。
- Qv2ray **首选项** 窗口
  1. 单击主窗口中的 **首选项** 按钮
  2. 在 **首选项** 窗口里选择 **[入站设置](qv2ray://open/preference/inbound)**
  3. 选择 **设置系统代理** 选项
  4. 点击 **OK** 按钮应用设置

:::tip Linux 用户：KDE/GNOME 代理设置

如果您使用 GNOME 作为您的主要桌面环境，您可能会发现设置系统代理非常有用。 这是因为 GNOME 代理设置几乎是全世界公认的。

但是，KDE 用户可能会遇到一些困难，因为 KDE 代理设置更像是一个玩具。 即使是 KDE 应用程序本身也不会读取和遵守这种配置。 在这种情况下，您可以寻找其他解决方案来配置您的应用程序。

:::

:::tip Windows 用户：UWP 应用回环问题

默认情况下，UWP 程序禁止使用带有回环地址（如 127.0.0.1）的代理，所以设置系统代理可能会导致你的 UWP 程序无法连接网络。

你可以使用一些第三方工具来 **启用 UWP 回环**，使 UWP 程序可被正常代理。
这里提供一个来自 [Fiddler](https://www.telerik.com/fiddler) 项目的 [EnableLoopback @ Fiddler](/EnableLoopback.zip)。

:::

### 在应用程序中手动设置

#### Telegram

你可以在应用中配置 Telegram 使用代理。进入到 **Settings「设置」** -> **Advanced「高级」** -> **Network and proxy「网络和代理」**，点击 **Connection type「连接类型」** ，打开 **Proxy Settings「代理设置」** 对话框。

在 **代理设置** 中，点击底部的 **Add Proxy「添加代理」** 按钮，根据自己的喜好选择 SOCKS5/HTTP，并在空白处填写 Qv2ray 入站设置中的信息。

最后，点击刚刚配置好的代理条目，就大功告成了。

#### 网页浏览器

几乎所有的 Web 浏览器都支持代理的手动配置。 以 Firefox 为例，你可以在 **Preferences「首选项」 -> General 「常规」 -> Network「网络」 -> Manual Proxy Configuration「手动代理设置」** 中找到这个设置。 用 Qv2ray **Inbound Settings「入站设置」** 中的信息填充这些字段以使用 Qv2ray。

:::tip 使用代理插件
为了避免在代理服务器配置之间来回切换，您可能需要使用第三方插件（例如：SwitchyOmega）来增强您的浏览器。 这些插件可以帮助实现更复杂的配置，包括多个配置文件和进一步的流量转移。
:::

#### Java 应用程序

对于 Java 应用程序，您可以通过 JVM 参数使用代理配置。

以下是一些例子：

- 使用 SOCKS5:
  ```bash
  java -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=1088 -jar some-application.jar
  ```
- 使用 HTTP(S)：
  ```bash
  java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8000 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8000 -jar some-application.jar
  ```

:::danger 神奇的 Minecraft

新版本的 **Minecraft 我的世界**（>=1.5.2） 不会遵循 JVM 代理设置。这不是 Qv2ray 的问题。 如果你真的想通过代理来玩 Minecraft，可以考虑为那个服务器设置一个 Dokodemo-door 任意门入站，并直接连接到 `localhost`。

:::

## 依赖平台的方法

### 使用环境变量

Linux / macOS 中的许多程序，例如 `curl` 和 `wget`，都会使用 `<PROTOCOL>_PROXY` 环境变量提供的代理。

这是一个配置示例：

```bash
# Change the host and port according to Qv2ray inbound configuration
export HTTP_PROXY="http://127.0.0.1:8000"
export HTTPS_PROXY="http://127.0.0.1:8000"
```

如果 Qv2ray 中启用了身份验证，请使用以下设置：

```bash
# Change user/pass according to your configuration
export HTTP_PROXY="http://user:pass@127.0.0.1:8000"
export HTTPS_PROXY="http://user:pass@127.0.0.1:8000"
```

请注意，如果您的用户名或密码中有一个特殊字符，则需要对其进行编码。 这里有一个简短的参考：

| `!`   | `#`   | `$`   | `&`   | `'`   | `(`   | `)`   | `*`   | `+`   | `,`   | `/`   | `:`   | `;`   | `=`   | `?`   | `@`   | `[`   | `]`   |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `%21` | `%23` | `%24` | `%26` | `%27` | `%28` | `%29` | `%2A` | `%2B` | `%2C` | `%2F` | `%3A` | `%3B` | `%3D` | `%3F` | `%40` | `%5B` | `%5D` |

对于在 `sudo` 中运行的程序，如果不在 shell 中运行 `sudo`，则需要配置 `sudo` 来保留这些变量。 使用 root 调用 `visudo` 并添加以下行：

```bash
Defaults env_keep += "HTTP_PROXY HTTPS_PROXY"
```

尽管如此，仍然有一些程序使用自己的变量，例如，`rsync` 对 HTTP 代理使用 `RSYNC_PROXY`：

```bash
export RSYNC_PROXY=user:pass@127.0.0.1:8000
```

强烈建议您阅读要用来配置代理的程序手册。

### 使用 `proxychains`

对于那些不能使用上述方法的应用程序，Linux/ macOS 用户可以尝试使用 `proxychains`，它劫持 `glibc` 中的函数，将网络连接重定向到代理。

首先，应该安装 `proxychains-ng`。 安装方法因操作系统的不同而不同，但是[官方项目](https://github.com/rofl0r/proxychains-ng)应该给你一个说明。

编辑 `/etc/proxychains.conf`（用于全局 proxychains）或 `$HOME/.proxychains/proxychains.conf`（对于用户），编辑 `[ProxyList]` 选项并更改为 Qv2ray 中的 SOCKS5 代理：

```
[ProxyList]
socks5  127.0.0.1  1088
```

在配置 `proxychains` 之后，您可以在终端使用 `proxychains` 程序使 `proxychains` 劫持程序使用给定的代理。 如果您厌倦了嘈杂的输出，您可能会在 `proxychains` 之后附加 `-q` 选项。

需要注意的一点是，`proxychains` 不能用于静态链接的程序，例如 Golang 程序。
