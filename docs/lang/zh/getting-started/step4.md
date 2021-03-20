---
title: 配置软件以使用 Qv2ray
sidebarDepth: 3
---

# 第 4 步：配置浏览器/软件以使用 Qv2ray

恭喜！ 只剩下一个步骤就可以访问真正的互联网了！

## 一般方法

### 使用系统代理

For **Windows** and **macOS** users, almost all of the applications will follow the system proxy settings. For **Linux** users, some applications such as Firefox and Chromium, but not all, will read and obey the proxy configurations in GNOME/KDE Settings.

Currently, automatic setting of system proxy is supported by Qv2ray, including **Windows**, **macOS** and **Linux** (GNOME/KDE). You may find System Proxy options of Qv2ray in the following positions:

- **Qv2ray Tray Menu**.
  1.  Right click on the tray icon.
  2.  In the popup menu, choose **System Proxy** -> **Enable/Disable System Proxy**.
- **Qv2ray Preference Window**.
  1.  Click **Preferences** button in the main window.
  2.  In **Preference Window**, choose the tab **[Inbound Settings](qv2ray://open/preference/inbound)**.
  3.  Check the option **Set System Proxy**.
  4.  Click **OK** to apply the settings.

:::tip Linux Users: KDE/GNOME Proxy Settings

If you are using GNOME as your main desktop environment, you may find it quite useful to set a system proxy. That's because GNOME Proxy Settings is almost universally acknowledged.

However, KDE users may have a difficult time, since KDE Proxy Settings is more like a toy. Even KDE Applications themselves won't read and obey that configuration. In that case, you may seek for an alternative solution to configure your applications.

:::

:::warning Windows Users: UWP Loopback Problem

By default, UWP applications are prohibited from using a proxy with a loopback address (127.0.0.1), so the system proxy settings will probably cause your UWP applications cease to work normally.

According to [an article by Microsoft](https://docs.microsoft.com/en-us/windows/iot-core/develop-your-app/loopback), you can resolve the problem by running the following command in a Command Prompt with admin privileges:

```shell
FOR /F "tokens=11 delims=\" %p IN ('REG QUERY "HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%p
```

Or, You can just simply use some third-party tools. We here present you [this program](/EnableLoopback.zip) from [Fiddler](https://www.telerik.com/fiddler) project.

:::

### Configure Manually in Applications

#### Telegram

You can configure Telegram to use proxies in the app. Go to **Settings** -> **Advanced** -> **Network and proxy** and click **Connection type**, where **Proxy Settings** dialog will be opened.

In **Proxy Settings**, click **Add Proxy** button on the bottom. Choose SOCKS5/HTTP according to your own flavor and fill in the blanks with the information from Qv2ray Inbound Settings.

Finally, click on the proxy entry that you've just configured. You are done.

#### Web Browsers

Almost all web browsers support manual configuration of proxies. Taking Firefox as example, you can find this settings in **Preferences -> General -> Network -> Manual Proxy Configuration**. Fill these fields with the information from Qv2ray Inbound Settings to use Qv2ray.

:::tip 使用代理插件。

为了避免在代理配置之间重新切换，您可能想要使用第三方插件(例如，SwitchyOmega) 来增强您的浏览器。 这些插件可以帮助实现更复杂的配置，包括多个配置文件和更多的流量转移。

:::

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

:::danger 有问题的 Minecraft

Minecraft的较新版本(`>=1.5.2`) 不会使用JVM 代理设置。 这不是Qv2ray的问题。 如果你真的想要通过代理玩Minecraft， 考虑为该服务器设置一个 Dokodemo-door 入站，并直接连接到 `localhost`。

:::

## 依赖平台的方法

### 使用环境变量

许多CLI 程序 (例如，`curl` 和 `wget`) 将使用由`<PROTOCOL><PROTOCOL>_PROXY` 环境变量。

下面是一个配置示例：

```shell
# 更改主机和端口，基于 Qv2ray 入站配置
export HTTP_PROXY="http://127.0.0.1:8000"
export HTTPS_PROXY="http://127.0.0.1:8000"
```

如果在 Qv2ray 中启用了身份验证，请使用以下设置：

```shell
# 更改用户名和密码，基于 Qv2ray 入站配置
export HTTP_PROXY="http://user:pass@127.0.0.1:8000"
export HTTPS_PROXY="http://user:pass@127.0.0.1:8000"
```

请注意，如果您的用户名或密码有特殊字符，您需要对其进行编码。 下面是一个快速方法：

| `!`   | `#`   | `$`   | `&` | `'`   | `(`   | `)`   | `*`   | `+`   | `,`   | `/`   | `:`   | `;`   | `=`   | `?`   | `@`   | `[`   | `]`   |
| ----- | ----- | ----- | ------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `%21` | `%23` | `%24` | `%26`   | `%27` | `%28` | `%29` | `%2A` | `%2B` | `%2C` | `%2F` | `%3A` | `%3B` | `%3D` | `%3F` | `%40` | `%5B` | `%5D` |

或者输入您想要编码的文本： <input v-model="input" />

<template v-if="input">
  编码文本： <code>{{ escaped }}</code>
</template>

对于在 `sudo` 中运行的程序，, 如果您不在 shell 中运行`sudo`则需要配置 `sudo` 来保存这些变量。 用 root 调用`visudo`并添加以下行：

```shell
Defaults env_keep += "HTTP_PROXY HTTPS_PROXY"
```

但还有一些程序正在使用自己的变量。 例如，`rsync`使用`RSYNC_PROXY`用于 HTTP 代理：

```shell
export RSYNC_PROXY=user:pass@127.0.0.1:8000
```

强烈建议阅读您想要配置代理的程序手册。

### 使用 `proxychains`

如果上述任何方法都不起作用，您可以尝试使用 `proxychains`， 它劫持了程序的功能/库来将网络连接重定向到您的代理服务器.

首先，您应该安装`proxychains-ng`。 每个操作系统的安装方法各不相同。

- [Linux/macOS](https://github.com/rofl0r/proxychains-ng)
- [Windows](https://github.com/shunf4/proxychains-windows)

编辑`/etc/proxychains.conf`(用于全局代理链) 或`$HOME/.proxychains/proxychains.conf`(用户)，编辑`[ProxyList]`部分，并在 Qv2ray 中将代理更改为 SOCKS5 代理：

```ini
[ProxyList]
socks5  127.0.0.1  1088
```

配置`代理链`之后,, 您可以在终端中使用`代理链 <program>`来制作`代理链`劫持程序来使用指定的代理程序。 如果你觉得输出很多很烦，你可以在`proxychains` 之后追加`-q`选项。

要注意的一件事是，`代理链`不能与静态链接的程序兼容，例如Golang程序。

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
