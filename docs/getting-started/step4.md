---
title: 让你的软件或浏览器走 Qv2ray 提供的代理
---

# 让你的软件或浏览器走 Qv2ray 提供的代理

不同平台的代理配置方式不同。

## 1. Linux

### 让本机应用使用代理

#### 方法一：环境变量

在 Linux 下，有（相当一部分）应用程序（如 curl, wget 等）会遵循形如“协议_proxy”的环境变量所设置的代理。例如：

```shell
export http_proxy="http://127.0.0.1:8000" #将地址和端口换成Qv2ray中配置的http入站对应的地址和端口
export https_proxy="http://127.0.0.1:8000"
```

即可让这些程序使用 Qv2ray 的 http 入站代理。

如果 Qv2ray 的 http 入站代理启用了身份验证，则相应的环境变量应设为：

```shell
export http_proxy="http://user:pass@127.0.0.1:8000"
export https_proxy="http://user:pass@127.0.0.1:8000"
```

如果身份验证的用户和密码中有特殊字符，则需要对其进行转义，可参考下表：

| `!`   | `#`   | `$`   | `&`   | `'`   | `(`   | `)`   | `*`   | `+`   | `,`   | `/`   | `:`   | `;`   | `=`   | `?`   | `@`   | `[`   | `]`   |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `%21` | `%23` | `%24` | `%26` | `%27` | `%28` | `%29` | `%2A` | `%2B` | `%2C` | `%2F` | `%3A` | `%3B` | `%3D` | `%3F` | `%40` | `%5B` | `%5D` |

注：如果需要通过 `sudo` 执行的程序也使用这些环境变量，需要让 `sudo` 保留这些环境变量，在`sudoers`配置文件中加上这一行即可：

```
Defaults env_keep += "http_proxy https_proxy ftp_proxy"
```

有些程序使用的是自己定义的环境变量，如 `rsync` 需通过 `RSYNC_PROXY` 环境变量来使用 http 代理：

```
export RSYNC_PROXY=user:pass@127.0.0.1:8000
```

#### 方法二：手动设置

有些应用支持手动设置代理。以 Firefox 为例：

首选项-常规-网络设置（在最底下）-手动代理配置-把 Qv2ray 的 http 入站代理填到 HTTP/HTTPS/FTP 代理栏里，或把 Qv2ray 的 socks 入站代理填到 SOCKS 代理栏里。

对于浏览器而言，还可以通过插件（如 SwitchyOmega）实现更复杂的代理配置，如进一步分流，临时直连等。

凡是选项里有提供 http 代理设置的应用，如无意外都可以类似配置以使用 Qv2ray 的 http 入站代理。

对 `java` 应用，可以通过 java 配置项设置代理，如：

```
java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8000 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8000 javacommand
#or
java -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=1088 javacommand
```

对 `ssh` 或 `scp`，可通过 `socat` 设置代理，如：

```
ssh -o "ProxyCommand=socat - PROXY:localhost:%h:%p,proxyport=8000" user@remotehost
```

对 `electron` 系应用(如 Chrome, Simplenote, Notion 等)，可通过`--args` 设置代理，如：

```
simplenote --args --proxy-server=127.0.0.1:1081
```

对 `git`，可通过 `config http.proxy` 设置代理，如：

```
git config --global http.proxy http://127.0.0.1:1081
git config --global https.proxy http://127.0.0.1:1081
```

对 `snap`，可通过 `set system proxy.http` 设置代理，如：

```
sudo snap set system proxy.http="http://127.0.0.1:1081" 
sudo snap set system proxy.https="http://127.0.0.1:1081" 
```

#### 方法三：GNOME系统设置

目前 Qv2ray 已经支持自动设置 GNOME 系统设置里的系统代理。有些应用（如 Firefox 和 Chromium）会读取并遵循 GNOME 系统设置里的代理配置，对这些应用而言，只需要在 Qv2ray 里启用系统代理即可。

#### 方法四：proxychains

对于前三种方式无法生效的应用，可尝试使用 proxychains 进行代理，它通过劫持动态链接库 `libc` 中的 `connect` 等函数实现重定向网络链接到代理中。

首先安装 `proxychains-ng`：https://github.com/rofl0r/proxychains-ng

随后，编辑 `/etc/proxychains.conf`（全局）或`$HOME/.proxychains/proxychains.conf`（用户），将 `[ProxyList]` 里的代理改成 Qv2ray 的 socks 或 http 入站代理，如：

```
[ProxyList]
socks5  127.0.0.1 1088
#or
#http  127.0.0.1 8000
```

在终端里使用 `proxychains <program>` 即可让 `proxychains` 劫持该应用，以试图让该应用使用代理。

由于 proxychains 的原理是劫持动态链接库 `libc`，因此它对静态链接的应用（如 `golang` 编译的应用）是无效的。

### 让网络上的其他设备使用代理

默认情况下，Qv2ray 的代理配置是只监听 `127.0.0.1` 的地址，即其代理只有本机能够使用，如需让网络上的其他设备使用代理，需要修改这一配置：

- 若希望局域网（内网 ip 环境）或互联网（公网ip环境）中的所有设备都能够使用本机的Qv2ray提供的代理，则在“首选项-入站设置-监听地址”里，把默认的 `127.0.0.1` 改成 `0.0.0.0` 即可。
- 若希望几个具有特定 ip 的设备能够使用本机的 Qv2ray 提供的代理，由于 v2ray 的限制，同一个入站不支持监听多个指定的 ip，可以有两种方式解决这个问题：
  - 通过复杂配置，建立多个不同的入站来实现，每个入站分别监听其中的一个 ip。
  - Qv2ray 的入站监听所有 ip（`0.0.0.0`），在本机设置防火墙，只允许特定 ip 访问Qv2ray 的代理的端口。

例子：若 ip 为 `192.168.0.100` 的设备希望使用代理，本机的 ip 为 `192.168.0.50`。若本机的 Qv2ray 配置了一个端口为 `12345` 的 http 入站，监听 ip`0.0.0.0` 或 `192.168.0.100`，则在 `192.168.0.100` 的设备上，可通过

```
export http_proxy="http://192.168.0.50:12345"
export https_proxy="http://192.168.0.50:12345"
```

使用此 http 代理（其他使用方式也类似）。

注意事项：

- 为让其他设备使用本机的 Qv2ray 提供的代理，除了本机的 Qv2ray 的代理需要监听目标设备的ip之外，还需要让目标设备能通过本机ip及代理端口访问到本机。因此，若本机设置了防火墙，则需要让防火墙放行对应端口；局域网环境里，可能需要关闭“内网隔离”“AP 隔离”之类的设置，否则内网 ip 之间也无法互相访问。
- 如果本机没有设置防火墙，将 Qv2ray 的代理监听的 ip 设为 `0.0.0.0`，且局域网没有设置“内网隔离”，则意味着局域网里所有的设备都能通过本机的ip及代理端口使用本机的 Qv2ray 提供的代理；如果本机是处于公网ip环境里，则意味着整个互联网中所有设备都能通过本机的 ip 及代理端口使用本机的 Qv2ray 提供的代理。因此，如确需在非可信任的局域网环境或公网 ip 环境中开启此种配置，最好配合防火墙，或配合代理身份验证，以防止本机的代理被滥用。
