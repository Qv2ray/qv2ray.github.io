---
title: Configuring Browsers / Software to Use Qv2ray
---

# Step 4: Configuring Browsers / Software to Use Qv2ray

Configurations differs from platform to platform.

## Linux

### Configure through Environment Variables

Many a program in Linux, for example, `curl` and `wget`, will use the proxies given by `<PROTOCOL>_PROXY` environment variable.

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

```
Defaults env_keep += "HTTP_PROXY HTTPS_PROXY"
```

Still, there are some programs who are using their own variables. For example, `rsync` uses `RSYNC_PROXY` for HTTP proxies:

```shell
export RSYNC_PROXY=user:pass@127.0.0.1:8000
```

It is strongly recommended to read the manual of programs that you want to configure proxy with.

### Configure Manually in Applications

Some applications support manually configuration of proxies. Taking Firefox as example, you may fill HTTP/SOCKS5 Inbound from Qv2ray into Preferences -> General -> Network -> Manual Proxy Configuration.

Besides, you may use a third-party plugin (for example, SwitchyOmega) to implement a more sophisticated configuration, which may includes further traffic diversion or direct pass.

For Java applications, you may use configure proxies through `java`. Here's an example:

```shell
# For HTTP Proxies
java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8000 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8000 <your java command>

# For SOCKS5 Proxies
java -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=1088 <your java command>
```

For `ssh` or `scp`, you may configure proxies through `socat`:

```shell
ssh -o "ProxyCommand=socat - PROXY:localhost:%h:%p,proxyport=8000" user@remotehost
```

### Configure through GNOME Settings

Currently, automated configuration of proxies for GNOME applications is already supported by Qv2ray. For some applications such as Firefox and Chromium, they will read and obey the proxy configurations in GNOME Settings. Simply restart these applications for the settings to take effect.

### Configure through `proxychains`

For those applications that does not work with the methods above, you may have a try with `proxychains`, which hijacks functions in `glibc` to redirect network connections into your proxies.

First, you should install `proxychains-ng`. Installation methods varies with each operating system, but the [official repository](https://github.com/rofl0r/proxychains-ng) shall give you an instruction.

Edit `/etc/proxychains.conf` (for global proxychains) or `$HOME/.proxychains/proxychains.conf` (for user), edit `[ProxyList]` section and change the proxy to SOCKS5 Proxy in Qv2ray:

```ini
[ProxyList]
socks5  127.0.0.1  1088
```

After configuring `proxychains`, you may use `proxychains <program>` in terminal to make `proxychains` hijack the program to use the given proxy. If you are fed up with the noisy output, you may append `-q` option after `proxychains `.

One thing to note is that `proxychains` does not work with statically-linked programs, for example, Golang programs.
