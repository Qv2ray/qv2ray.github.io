---
title: 高级路由设置
---

# 高级路由设置

**高级路由设置** 和 **路由编辑器** 是Qv2ray的特有功能。 这两项功能可以帮助您精确地控制流量，如 **按需代理**， **分流国内/国外网站**等。 你甚至可以 **设置代理链(多层套娃)**🤣~

:::  路由功能是什么？ 为什么不用 PAC 和 GFW List?

如果你不了解 V2ray 的路由功能具体是什么, 那么你可以把它理解为一个更加简便, 高效且精准的新一代 PAC 实现。

路由功能 比 PAC 强大太多, 以后请别再问为什么 Qv2ray 不支持 PAC 了。 路由功能所采用的分流表也比 GFW List 更加完善，完全没有必要再使用GFW List。

:::

## 全局路由规则

配置全局路由规则 请打开**首选项** ---> **高级路由设置** 。

### 域名策略

Qv2ray 有三种域名匹配策略可选： `AsIs`, `IPIfNonMatch`, 和 ` IPOnDemand`.

根据V2Ray的官方文档，这三种域名策略的定义如下：

- **`AsIs`**: 只使用域名进行路由选择， 默认值;
- **`IPIfNonMatch`**: 当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）后再次进行匹配；
  - 当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；
  - 解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名;
- **`IPOnDemand`**: 匹配时碰到任何基于 IP 的规则，立即将域名解析为 IP 后进行匹配;

用某位开发者的话说, 就是:

- **`AsIs`**: 分流速度快, 但分流不够精确;
- **`IPIfNonMatch`**: 在牺牲部分速度的同时能带来足够精确的分流;
- **`IPOndemand`**: 别用;

> 请注意: `IPOnDemand` 理论上是最慢而结果最准确的，然而在大多数情况下 `IPIfNonMatch` 已经足够准确了，所以 `IPOndemand` 的实际应用效果并不明显。

您可以根据您的实际需求选择最适合你的域名匹配策略。 但就结果来说，一般情况下，`IPIfNonMatch` 是最佳选择。

### 路由策略

路由策略由 `3x2`  个区块组成，他们分别是（左上到右下）： `IP 直连` ,`IP 代理`, `IP 阻断`，`域名直连`, `域名代理`, `域名阻断`, 填入规则时请保持 **每行一个，中间没有逗号分隔**。

Qv2ray 对于这些策略组的优先级排序是: `域名阻断` -> `域名代理` -> `域名直连` -> `IP 阻断` -> `IP 代理` -> `IP 直连`。 如果最后没有成功匹配, 私有地址 和 中国大陆地址 会默认直连, 其他地址则会使用代理。

:::tip 我就想要全局代理~~~ 🤗

很简单， 清空所有的路由规则 然后打开 **首选项** ---> ** 链接设置** 取消勾选 ** 绕过私有地址 **和 ** 绕过中国大陆** 即可 🙄

:::

根据 V2Ray 官方文档：

IP规则有以下几种写法(按照是否常用排序):

- **GeoIP**: 形如 "geoip:cn"，必须以 geoip:（小写）开头，后面跟双字符国家代码。 例如 ：`geoip:cn`  包含了常见的中国IP地址，`geoip:us` 包含了常见的美国IP地址；
- 特殊值："geoip:private"（仅支持V2Ray 3.5+），包含所有私有地址，如 127.0.0.1。
- IP：直接填写，形如 "127.0.0.1"。
- **CIDR**：形如 "10.0.0.0/8"。
- **从文件中加载 IP**：形如 `"ext:file:tag"`，必须以` ext:`（小写）开头，后面跟文件名（不带扩展名），文件存放在 `资源目录（默认和 v2ray 核心文件同路径）` 中，文件格式与 geoip.dat 相同。 文件格式与 `geoip.dat` 相同， `tag` 必须在文件中声明。

域名规则有以下几种写法(按照是否常用排序):

- **预定义域名列表**: 以 `geosite:`开头, 后面跟一个名称，例如 `geosite:google` 或 `geosite:cn` 名称 及 域名列表 请参考 _预定义域名列表_
- **子域名**：由 `"domain:" `开始，后面跟一个域名。 当此域名是目标域名或其子域名时，该规则生效。 例如` "domain:v2ray.com"` 匹配` "www.v2ray.com"`、`"v2ray.com"`，但不匹配 `"xv2ray.com"`。
- **完全匹配**： 由</strong> "full:" </code>开始，后面跟一个域名。 当此域名完整匹配目标域名时，该规则生效。 例如` "full:v2ray.com" `匹配`"v2ray.com" `但不匹配` "www.v2ray.com"。`
- **纯字符串**：当此字符串匹配目标域名中任意部分，该规则生效。 比如`"sina.com" `可以匹配 `"sina.com"`、`"sina.com.cn" `和 `"www.sina.com"`，但不匹配 `"sina.cn"`。
- **正则表达式**：由 `"regexp:"` 开始，余下部分是一个正则表达式。 当此正则表达式匹配目标域名时，该规则生效。 例如` "regexp:\\.goo.*\\.com$"` 匹配 `"www.google.com"`、`"fonts.googleapis.com"`，但不匹配` "google.com"`。
- **Loading domain list from external files**: the format is `ext:file:tag`, which must start with `ext:` (all lowercase), followed by the file name (without extension) `file` and `tag`, and the file must be stored in the V2Ray core resource directory. The file format is the same as `geosite.dat`, and the specified `tag` must exist in the file.

:::tip I'm a newbie, can you be more straightforward?

- If you want to implement a global proxy, that is, regardless of the destination address, all traffic will go through the proxy, then refer to the other tips above. 😅
- If you want to achieve precise traffict splitting, that is, all outbound traffic should go through the proxy, then just click the `preset plans` button in the interface, select the `blank plan` or the `ad blocking plan`, and set the domain name strategy to `IPIfNonMatch`. 😋

:::

:::tip I'm a advanced user! I want more precise traffic splitting! 🤔

We recommends using an enhanced version of the V2Ray rules file project. The project is at [Loyalsoldier/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat). 🤗

:::

:::tip I want a highly customizable traffic splitting rules! 🤪

Please refer to the next section **Routing Editor**. 😄

:::

## Routing Editor

In the main interface of Qv2ray, **right-click** the agent node and select **Edit as a complex configuration** to open the **Route Editor** interface.

In this interface, you can arbitrarily combine matching conditions such as **user**, **source IP**, **target IP**, **domain name**, **target domain name**, **protocol**, and **port** to create sufficiently accurate inbound/outbound rules, and you can also adjust the **priority** of the rules arbitrarily Level, even achieving **load balancing**.

What needs reiterating is that the matching conditions in each routing rule are `and` / `&&` relationships, that is, if a routing rule contains multiple matching conditions, the actual matching conditions finally obtained are the intersection of these conditions. For example, if a routing rule contains both the port condition `443` and the target domain name condition `qv2ray.github.io`, then only the target `qv2ray.github.io:443` that meets both conditions will match this item rule.

If you don't know much about V2Ray's routing rules mechanism, please refer to V2Ray's official documentation.
