---
title: Configuring Softwares to Use Qv2ray
sidebarDepth: 3
---

# Step 4: Configuring Softwares to Use Qv2ray

Congratulations! There's only one step left in order to access the unlocked Internet!

## General Methods

### Using System Proxy
For **Windows** and **macOS** users, almost all of the applications will follow the system proxy settings. For **Linux** users, some applications such as Firefox and Chromium, but not all, will read and obey the proxy configurations in GNOME/KDE Settings.

Currently, automatic setting of system proxy is supported by Qv2ray, including **Windows**, **macOS** and **Linux** (GNOME/KDE). You may find System Proxy options of Qv2ray in the following positions:

- **Qv2ray Tray Menu**.
   1. Right click on the tray icon.
   2. In the popup menu, choose **System Proxy** -> **Enable/Disable System Proxy**.
- **Qv2ray Preference Window**.
   1. Click **Preferences** button in the main window.
   2. In **Preference Window**, choose the tab **[Inbound Setting](qv2ray://open/preference/inbound)s**.
   3. Check the option **Set System Proxy**.
   4. Click **OK** to apply the settings.

:::tip Linux Users: KDE/GNOME Proxy Settings
If you are using GNOME as your main desktop environment, you may find it quite useful to set a system proxy. That's because GNOME Proxy Settings is almost universally acknowledged.

However, KDE users may have a difficult time, since KDE Proxy Settings is more like a toy. Even KDE Applications themselves won't read and obey that configuration. In that case, you may seek for an alternative solution to configure your applications.
:::

:::warning Windows Users: UWP Loopback Problem
By default, UWP applications are prohibited from using a proxy with a loopback address (127.0.0.1), so the system proxy settings will probably cause your UWP applications cease to work normally.

You can use some third-party tool to **enable UWP loopback** for your program to be proxied. We here present you [this program](/EnableLoopback.zip) from [Fiddler](https://www.telerik.com/fiddler) project.
:::

### Configure Manually in Applications

#### Telegram
You can configure Telegram to use proxies in the app. Go to **Settings** -> **Advanced** -> **Network and proxy** and click **Connection type**, where **Proxy Settings** dialog will be opened.

In **Proxy Settings**, click **Add Proxy** button on the bottom. Choose SOCKS5/HTTP according to your own flavor and fill in the blanks with the information from Qv2ray Inbound Settings.

Finally, click on the proxy entry that you've just configured. You are done.

#### Web Browsers
Almost all web browsers support manual configuration of proxies. Taking Firefox as example, you can find this settings in **Preferences -> General -> Network -> Manual Proxy Configuration**. Fill these fields with the information from Qv2ray Inbound Settings to use Qv2ray.

:::tip Using Proxy Plugins
To avoid switching back and forth among proxy configurations, you may want to use a third-party plugin (eg: SwitchyOmega) to enhance your browser. These plugins can help to implement a more sophisticated configuration, including multiple profiles and further traffic diversion.
:::

#### Java Applications
For Java applications, you may use configure proxies through JVM arguments.

Here are some examples:
 - Using SOCKS5:
   ```shell
   java -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=1088 -jar some-application.jar
   ```
 - Using HTTP(S):
   ```shell
   java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8000 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8000 -jar some-application.jar
   ```

:::danger Buggy Minecraft
Newer versions of Minecraft (`>=1.5.2`) won't follow JVM proxy settings. That is not Qv2ray's problem. If you really want to play Minecraft through proxy, consider setting up a Dokodemo-door inbound for that server and connect directly to `localhost`.
:::

## Platform-dependent Methods

### Using Environment Variables

Many a program in Linux/macOS, for example, `curl` and `wget`, will use the proxies given by `<PROTOCOL>_PROXY` environment variable.

Here is a configuration example:

```shell
# Change the host and port according to Qv2ray inbound configuration
export HTTP_PROXY="http://127.0.0.1:8000"
export HTTPS_PROXY="http://127.0.0.1:8000"
```

If authentication is enabled in Qv2ray, use the following settings:

```shell
# Change user/pass according to your configuration
export HTTP_PROXY="http://user:pass@127.0.0.1:8000"
export HTTPS_PROXY="http://user:pass@127.0.0.1:8000"
```

Note that if there is a special character in your username or password, you need to encode it. Here's a quick reference:

| `!`   | `#`   | `$`   | `&`   | `'`   | `(`   | `)`   | `*`   | `+`   | `,`   | `/`   | `:`   | `;`   | `=`   | `?`   | `@`   | `[`   | `]`   |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `%21` | `%23` | `%24` | `%26` | `%27` | `%28` | `%29` | `%2A` | `%2B` | `%2C` | `%2F` | `%3A` | `%3B` | `%3D` | `%3F` | `%40` | `%5B` | `%5D` |

For programs running in `sudo`, it is required to configure `sudo` to preserve these variables if you do not run `sudo` in a shell. Call `visudo` with root and add the following line:

```shell
Defaults env_keep += "HTTP_PROXY HTTPS_PROXY"
```

Still, there are some programs who are using their own variables. For example, `rsync` uses `RSYNC_PROXY` for HTTP proxies:

```shell
export RSYNC_PROXY=user:pass@127.0.0.1:8000
```

It is strongly recommended to read the manual of programs that you want to configure proxy with.

### Using `proxychains`

For those applications that does not work with the methods above, Linux/macOS users may have a try with `proxychains`, which hijacks functions in `glibc` to redirect network connections into your proxies.

First, you should install `proxychains-ng`. Installation methods varies with each operating system, but the [official repository](https://github.com/rofl0r/proxychains-ng) shall give you an instruction.

Edit `/etc/proxychains.conf` (for global proxychains) or `$HOME/.proxychains/proxychains.conf` (for user), edit `[ProxyList]` section and change the proxy to SOCKS5 Proxy in Qv2ray:

```ini
[ProxyList]
socks5  127.0.0.1  1088
```

After configuring `proxychains`, you may use `proxychains <program>` in terminal to make `proxychains` hijack the program to use the given proxy. If you are fed up with the noisy output, you may append `-q` option after `proxychains`.

One thing to note is that `proxychains` does not work with statically-linked programs, for example, Golang programs.
