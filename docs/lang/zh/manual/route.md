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
- **`IPIfNonMatch`**: 当域名没有匹配任何规则时，将域名解析成 IP（A 记录或 AAAA 记录）再次进行匹配；
  - 当一个域名有多个 A 记录时，会尝试匹配所有的 A 记录，直到其中一个与某个规则匹配为止；
  - 解析后的 IP 仅在路由选择时起作用，转发的数据包中依然使用原始域名;
- **`IPOnDemand`**: 匹配时碰到任何基于 IP 的规则，立即将域名解析为 IP 后进行匹配;

用某位开发者的话说, 就是:

- **`AsIs`**: 分流速度快, 但分流不够精确;
- **`IPIfNonMatch`**: 在牺牲部分速度的同时能带来足够精确的分流;
- **`IPOndemand`**: 别用;

> Note: `IPOnDemand` should be the slowest but most accurate, but in most cases, `IPIfNonMatch` is sufficient, so the actual effect of `IPOnDemand` is not obvious.

You can choose the corresponding domain name strategy according to your actual needs. Generally speaking, IPIfNonMatch is the ideal choice in most situations.

### Routing Methods

The routing plan consists of a `3x2` matrix, from top left to bottom right: `IP direct connection`, `IP proxy`, `IP blocking`, `domain name direct connection`, `domain name proxy`, `domain name blocking`, one per line, no comma separation.

These 6 rules in Qv2ray are matched according to the priority of `domain name blocking` -> `domain name proxy` -> `domain name direct connection` -> `IP blocking` -> `IP proxy` -> `IP direct connection`. If the match fails, the private address and the mainland China domestic address are directly connected, otherwise the agent will be used.

:::tip I just want a global proxy~~~ 🤗

It's very simple. Just clear these rules, go to the Connection tab of Preferences, and uncheck the Bypass China check box. 🙄

:::

According to the official V2Ray documentation:

The IP rules are written as follows (in order of common usage):

- **GeoIP**: The form is `geoip:cn`, which must start with `geoip:` (all lowercase) followed by a two-character country code. For example, `geoip:cn` represents an IP address in China, and `geoip:us` represents an IP address in the United States.
- **Special value**: `geoip:private`, including all private addresses, such as `127.0.0.1` (this rule only supports V2Ray 3.5 and above).
- **IP**: The format is `127.0.0.1`.
- **CIDR**: The format is `10.0.0.0/8`.
- **Load IP rules from external files**: the form is `ext:file:tag`, which must start with `ext:` (all lowercase), followed by the file name (without extension) `file` and `tag`, the file must be stored in the V2Ray core resource directory. The file format is the same as `geoip.dat`, and the specified `tag` must exist in the file.

The domain name rules are written as follows (in order of common use):

- **Pre-defined domain list**: Starts with `geosite:`, and the rest is a name, such as `geosite:google` or `geosite:cn`. For the name and domain name list, please refer to the _predefined domain name list_ section of V2Ray document.
- **Subdomain**: Starts with `domain:`, and the rest is a domain name. This rule takes effect when the domain name is the target domain name or its subdomain name. For example, `domain:v2ray.com` matches `www.v2ray.com` and `v2ray.com`, but not `xv2ray.com`.
- **Complete match**: Starts with `full:`, and the rest is a domain name. When this domain name completely matches the target domain name, the rule takes effect. For example, `full:v2ray.com` matches `v2ray.com` but not `www.v2ray.com`.
- **String-only**: When this string matches any part of the target domain name, the rule takes effect. For example, `sina.com` can match `sina.com`, `sina.com.cn` and `www.sina.com`, but not `sina.cn`.
- **Regular expression**: Starts with `regexp:`, and the rest is a regular expression. When this regular expression matches the target domain name, the rule takes effect. For example, `regexp:\\.goo.*\\.com$` matches `www.google.com`, `fonts.googleapis.com`, but not `google.com`.
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
