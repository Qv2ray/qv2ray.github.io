---
title: 配置软件以使用 Qv2ray
sidebarDepth: 3
---

# 第 4 步：配置软件以使用 Qv2ray

恭喜！ 只剩下一个步骤来访问已解锁的互联网！

## 一般方法

### 使用系统代理

对于 **Windows** 和 **macOS** 用户，几乎所有应用程序都将遵循系统代理设置。 将 **Linux** 用户，一些应用程序，如Firefox 和 Chromium，但不是所有用户，将读取并服从在 GNOME/KDE 设置中的代理配置。

目前，系统代理的自动设置支持 Qv2ray，包括 **Windows**, **macOS** 和 **Linux** (GNOME/KDE)。 您可以在以下位置找到Qv2ray 的系统代理选项：

- **Qv2ray 托盘菜单**。
  1.  右键点击托盘图标。
  2.  在弹出菜单中，选择 **系统代理** -> **启用/禁用系统代理**。
- **Qv2ray 首选项窗口**。
  1.  点击 **设置主窗口中的** 按钮。
  2.  在 **首选窗口**, 选择标签 **[入站设置](qv2ray://open/preference/inbound)**.
  3.  检查选项 **设置系统代理**。
  4.  点击 **确定** 来应用设置。

:::tip Linux 用户: KDE/GNOME 代理设置 如果您使用GNOME 作为桌面的主要环境， 您可能发现设置一个系统代理非常有用。 这是因为GNOME 代理设置几乎得到普遍承认。

然而，KDE 用户可能会有一个困难的时间，因为KDE 代理服务器设置更像是一个玩具。 甚至KDE 应用程序本身也不会读取和服从那个配置。 在这种情况下，您可以寻找替代方案来配置您的应用程序。 :::

:::警告Windows 用户: UWP 循环返回问题 默认情况下，UWP 应用程序被禁止使用循环地址的代理(127)。 因此，系统代理设置可能会导致您的 UWP 应用程序正常停止工作。

根据 [微软](https://docs.microsoft.com/en-us/windows/iot-core/develop-your-app/loopback)的一篇文章 您可以通过在命令提示中运行具有管理员权限的以下命令来解决问题：

```shell
FOR /F "tokens=11 delims=\" %p IN ('REG QUERY "HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"') DO checkNetIsolation.exe LoopbackExempt -a -p=%p
```

或者，您只需使用一些第三方工具。 我们在这里给你 [来自 [Fiddler](https://www.telerik.com/fiddler) 项目的这个程序](/EnableLoopback.zip)。 :::

### 手动配置应用程序

#### Telegram

您可以配置 Telegram 在應用程式中使用代理人。 前往 **设置** -> **高级** -> **网络和代理** 然后点击 **连接类型**, **代理设置** 对话框将被打开。

在 **代理设置**, 点击 **在底部添加代理** 按钮。 根据您自己的flavor选择SOCKS5/HTTP，然后用Qv2ray Inclaining Setings的信息填充空格。

最后，点击您刚刚配置的代理条目。 你已经完成了。

#### Web Browsers

几乎所有浏览器都支持手动配置代理服务器. 将 Firefox 作为示例，您可以在 **首选项 -> 常规-> 网络 -> 手动代理配置** 中找到此设置。 用Qv2ray 接收设置中的信息填充这些字段以使用 Qv2ray。

:::tip 使用 Proxy Plugins 以避免在代理配置中重新切换, 您可能想要使用第三方插件 (e.g: SwitchyOmega) 来增强您的浏览器。 这些插件可以帮助实现更复杂的配置，包括多个配置文件和更多的流量转移。 :::

#### Java 应用程序

对于Java 应用程序，您可以使用 JVM 参数配置代理程序。

以下是一些例子：

- 使用 SOCKS5：
  ```shell
  java -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=1088 -jar some-application.jar
  ```
- 使用 HTTP(S)：
  ```shell
  java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8000 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8000 -jar some-application.jar
  ```

:::dangering Bug Minecraft 较新版本的Minecraft (`>=1.5.2`) 将不遵循JVM 代理设置。 这不是Qv2ray的问题。 如果你真的想要通过代理玩Minecraft， 考虑为该服务器设置一个 Dokodemo-door 入站，并直接连接到 `localhost`。 :::

## 平台依赖方法

### 使用环境变量

许多CLI 程序 (例如，`curl`and`wget`) 将使用由`<PROTOCOL>_PROXY`环境变量。

下面是一个配置示例：

```shell
# 更改主机和端口，基于 Qv2ray 入站配置
导出 HTTP_PROXY="http://127.0.0.1:8000"
导出 HTTPS_PROXY="http://127.0.0.1:8000"
```

如果在 Qv2ray 中启用了身份验证，请使用以下设置：

```shell
# 根据您的配置
更改 HTTP_PROXY="http://user:pass@127.0.0.1:8000"
导出 HTTP_PROXY="http://user:pass@127.0.0.1:8000"
```

请注意，如果您的用户名或密码有特殊字符，您需要对其进行编码。 下面是一个快速引用：

| `!`   | `#`   | `$`   | `&` | `'`   | `(`   | `)`   | `*`   | `+`   | `,`   | `/`   | `:`   | `;`   | `=`   | `?`   | `@`   | `[`   | `]`   |
| ----- | ----- | ----- | ------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `%21` | `%23` | `%24` | `%26`   | `%27` | `%28` | `%29` | `%2A` | `%2B` | `%2C` | `%2F` | `%3A` | `%3B` | `%3D` | `%3F` | `%40` | `%5B` | `%5D` |

或者输入您想要编码的文本： <input v-model="input" />

<template v-if="input">
  编码文本： <code>{{ escaped }}</code>
</template>

对于在`sudo`中运行的程序，, 如果您不在 shell 中运行`sudo`则需要配置`sudo`来保存这些变量。 用 root 调用`visudo`并添加以下行：

```shell
默认值 env_map += "HTTP_PROXY HTTPS_PROXY"
```

但仍有一些程序正在使用自己的变量。 例如，`rsync`使用`RSYNC_PROXY`用于 HTTP 代理：

```shell
导出 RSYNC_PROXY=user:pass@127.0.0.1:8000
```

强烈建议阅读您想要配置代理的程序手册。

### 使用`代理链`

如果上述任何方法都不起作用，您可以尝试使用 `代理链`， 它劫持了程序的功能/库来将网络连接重定向到您的代理服务器.

首先，您应该安装`proxychains-ng`。 每个操作系统的安装方法各不相同。

- [Linux/macOS](https://github.com/rofl0r/proxychains-ng)
- [窗口](https://github.com/shunf4/proxychains-windows)

编辑`/etc/proxychains.conf`(用于全局代理链) 或`$HOME/.proxychains/proxychains。 onf`(用户)，编辑`[ProxyList]`部分，并在 Qv2ray中将代理更改为 SOCKS5 代理：

```ini
[ProxyList]
socks5  127.0.0.1  1088
```

配置`代理链`之后, , 您可以在终端中使用`代理链 <program>`来制作`代理链`劫持程序来使用指定的代理程序。 如果您用噪音输出填充，您可以在`代理链` 之后追加`-q`选项。

要注意的一件事是，`代理链`不能与静态关联的程序兼容，例如Golang程序。

<script>
export default {
  data: () => ({
    input: ''
  }),
  computed: {
    escaped() {
      return encodeURIComponent(this.input)
    }
  }
}
</script>
