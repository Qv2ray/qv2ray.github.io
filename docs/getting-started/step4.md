---
title: 让你的软件走 Qv2ray 提供的代理
---

# 让你的软件走 Qv2ray 提供的代理

## 1 系统代理模式

### 1.1 Linux

#### 1.1.1 操作系统环境变量设置代理

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

注：如果需要通过 `sudo` 执行的程序也使用这些环境变量，需要让 `sudo` 保留这些环境变量，在 `sudoers` 配置文件中加上这一行即可：

```
Defaults env_keep += "http_proxy https_proxy ftp_proxy"
```

有些程序使用的是自己定义的环境变量，如 `rsync` 需通过 `RSYNC_PROXY` 环境变量来使用 http 代理：

```
export RSYNC_PROXY=user:pass@127.0.0.1:8000
```

#### 1.1.2 桌面的系统设置

目前 Qv2ray 已经支持自动设置 GNOME 系统设置与 KDE 系统设置里的系统代理。有些应用（如 Firefox 和 Chromium）会读取并遵循系统设置里的代理配置。对这些应用而言，只需要在 Qv2ray 里启用系统代理即可。

未能被 Qv2ray 支持的桌面可以在对应桌面的代理设置里面手动指定代理服务器到 Qv2ray 的 HTTP 入站与 Socks5 入站。

#### 1.1.3 ProxyChains

对于前三种方式无法生效的应用，可尝试使用 proxychains 进行代理，它通过劫持动态链接库 `libc` 中的 `connect` 等函数实现重定向网络链接到代理中。

首先安装 `proxychains-ng`：https://github.com/rofl0r/proxychains-ng

随后，编辑 `/etc/proxychains.conf`（全局）或`$HOME/.proxychains/proxychains.conf`（用户），将 `[ProxyList]` 里的代理改成 Qv2ray 的 socks 或 http 入站代理，如：

```conf
[ProxyList]
socks5  127.0.0.1 1088
#or
#http  127.0.0.1 8000
```

在终端里使用 `proxychains <program>` 即可让 `proxychains` 劫持该应用，以试图让该应用使用代理。

由于 proxychains 的原理是劫持动态链接库 `libc`，因此它对静态链接的应用（如 `golang` 编译的应用）是无效的。

#### 1.1.4 透明代理

这个方法能使得系统上全部应用都走代理，但是具有一定的危险性。具体请参阅 V2Ray 的[白话文教程 - 透明代理](https://guide.v2fly.org/app/transparent_proxy.html)。

### 1.2 Microsoft Windows

一般情况下，Qv2ray 能够自己完成 Windows 下的代理设置，即在连接一个节点后，右击通知区的 Qv2ray 图标，选择`系统代理`即可设置。如果这样设置无效，那么也可以手动指定代理：

**方法一**：打开`控制面板\网络和 Internet`，点击 `Internet 选项`，在`连接`标签下选择`局域网设置`，勾选`为 LAN 使用代理服务器(这些设置不适用于拨号或 VPN 连接)`，然后填写 Qv2ray 的 HTTP 入站信息即可。

**方法二**：打开`设置`，转到`网络和 Internet`,再转到`代理`，然后填写 Qv2ray 的 HTTP 入站信息即可。

### 1.3 macOS

一般情况下，Qv2ray 能够自己完成 macOS 下的代理设置，即在连接一个节点后，右击顶栏上的 Qv2ray 图标，选择`系统代理`即可设置。如果这样设置无效，那么也可以在系统设置连手动指定代理。

**注意**：在 macOS 下，代理设置完成之后需要重启你的浏览器或者其它应用，你的浏览器或者应用才会使用新的系统代理设置。你需要右击程序坞上的程序图标，选择`退出`来彻底关闭一个程序。

## 2 手动指定应用代理

### 2.1 Linux、Windows 与 macOS 下的命令行程序

有些应用支持手动设置代理，凡是软件设置里有提供 http 代理设置的应用，如无意外都可以配置使用 Qv2ray 的 http 入站代理。

对 `java` 应用，可以通过 java 配置项设置代理，如：

```bash
java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8000 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8000 javacommand
#or
java -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=1088 javacommand
```

对 `ssh` 或 `scp`，可通过 `socat` 设置代理，如：

```bash
ssh -o "ProxyCommand=socat - PROXY:localhost:%h:%p,proxyport=8000" user@remotehost
```

对 `electron` 系应用(如 Chrome, Simplenote, Notion 等)，可通过`--args` 设置代理，如：

```bash
simplenote --args --proxy-server=127.0.0.1:1081
```

对 `git`，可通过 `config http.proxy` 设置代理，如：

```bash
git config --global http.proxy http://127.0.0.1:1081
git config --global https.proxy http://127.0.0.1:1081
```

（Linux Only）对 `snap`，可通过 `set system proxy.http` 设置代理，如：

```bash
sudo snap set system proxy.http="http://127.0.0.1:1081" 
sudo snap set system proxy.https="http://127.0.0.1:1081" 
```

### 2.2 浏览器自身的代理设置

#### 2.2.1 Firefox 及其衍生浏览器

Firefox 自身提供了代理设置。在 Firefox 的`选项`或者`首选项`里面打开`网络设置`，选择`手动代理配置(M)`，然后设置 Socks5 代理到 Qv2ray 的入站即可。同时，我们建议勾选`使用 SOCKS v5 时代理 DNS 查询`，这会解决一些 DNS 查询故障。

#### 2.2.2 Google Chrome、新 Microsoft Edge、Brave 与其它基于 Chromium 的浏览器

1. 开启系统代理，从 Chrome 扩展商店或者 [GitHub 项目 Releases](https://github.com/FelisCatus/SwitchyOmega/releases)下载 SwitchyOmega 然后安装。
2. 在 SwitchyOmega 的设置页里面添加新的情景模式，情景模式的类型为代理服务器，名称可以是 Qv2ray，然后设置 Socks5 代理到 Qv2ray 的入站即可。
3. 点击浏览器上的 SwitchyOmega 按钮，选择 Qv2ray 即可。

## 3 更多玩法：让网络上的其他设备使用代理

默认情况下，Qv2ray 的代理配置是只监听 `127.0.0.1` 的地址，即其代理只有本机能够使用，如需让网络上的其他设备使用代理，需要修改这一配置：

- 若希望局域网（内网 ip 环境）或互联网（公网 ip 环境）中的所有设备都能够使用本机的 Qv2ray 提供的代理，则在“首选项-入站设置-监听地址”里，把默认的 `127.0.0.1` 改成 `0.0.0.0` 即可。
- 若希望几个具有特定 ip 的设备能够使用本机的 Qv2ray 提供的代理，由于 V2Ray 的限制，同一个入站不支持监听多个指定的 ip，可以有两种方式解决这个问题：
  - 通过复杂配置，建立多个不同的入站来实现，每个入站分别监听其中的一个 ip。
  - Qv2ray 的入站监听所有 ip（`0.0.0.0`），在本机设置防火墙，只允许特定 ip 访问 Qv2ray 的代理的端口。

例子：若 ip 为 `192.168.0.100` 的设备希望使用代理，本机的 ip 为 `192.168.0.50`。若本机的 Qv2ray 配置了一个端口为 `12345` 的 http 入站，监听  ip`0.0.0.0` 或 `192.168.0.100`，则在 `192.168.0.100` 的设备上，可通过

```
export http_proxy="http://192.168.0.50:12345"
export https_proxy="http://192.168.0.50:12345"
```

使用此 http 代理（其他使用方式也类似）。

操作系统与应用程序亦可使用这样的代理，设置好正确的 IP 、端口与协议即可。

**注意事项**：

- 为让其他设备使用本机的 Qv2ray 提供的代理，除了本机的 Qv2ray 的代理需要监听目标设备的 ip 之外，还需要让目标设备能通过本机 ip 及代理端口访问到本机。因此，若本机设置了防火墙，则需要让防火墙放行对应端口；局域网环境里，可能需要关闭「内网隔离」、「AP 隔离」之类的设置，否则内网 ip 之间也无法互相访问。
- 如果本机没有设置防火墙，将 Qv2ray 的代理监听的 ip 设为 `0.0.0.0`，且局域网没有设置“内网隔离”，则意味着局域网里所有的设备都能通过本机的 ip 及代理端口使用本机的 Qv2ray 提供的代理；如果本机是处于公网 ip 环境里，则意味着整个互联网中所有设备都能通过本机的 ip 及代理端口使用本机的 Qv2ray 提供的代理。因此，如确需在非可信任的局域网环境或公网 ip 环境中开启此种配置，最好配合防火墙，或配合代理身份验证，以防止本机的代理被滥用。
