---
title: 高级路由设置
---

# 高级路由设置

**高级路由设置** 和 **路由编辑器** 是Qv2ray的独特功能。 通过他们的功能，您可以精确地控制流量，如 **按需代理**， **分割流量到国内外网站**等。 甚至点击 **Matryoshkas**🤣~

:::tip 什么路由？ PAC 和 GFWWList是什么？ 如果你不知道V2Ray的路由功能是 然后你就可以理解它是一个新一代的 PAC，配置更简单，使用更高效，规则更完善。

路由函数比PAC更强大，因此请不要问Qv2ray 是否支持PAC！ 路由函数使用的数据比GFWList更完整，因此不再需要GFWList。 :::

## 全局路由规则

全局路由规则配置功能在 **高级路由设置** **首选项标签** 中。

### 领域战略

包含三种类型： `AsIs`, `IPIfNonMatch`, 和 `IPOnDemand`.

根据V2Ray的正式文件，三个域名战略的含义如下：

- **`AsIs`**: 只使用域名进行路由。 默认。
- **`IPIfNonMatch`**: 当域名不符合任何规则时 域名已解析为IP(记录或 AAAAAA 记录)重新匹配：
  - 当一个域名有多个A记录时，它将尝试匹配所有A记录，直到其中一个记录匹配某个规则；
  - 解析过的IP只能在路由过程中运行，原域名仍然在转发数据包中使用。
- **`IPOnDemand`**: 当匹配过程中遇到任何基于 IP的规则时，域名将立即解析为IP匹配。

简而言之，基于开发者的声明：

- **`AsIs`**: 快速分析, 不精确的转移;
- **`IPIfNonMatch`**: 解析速度稍慢，粉碎是准确的
- **`IPOndemand`**: 没用.

> 注意： `IPOnDemand` 应该是最慢但最准确的，但在大多数情况下都是如此。 `IPIfNonMatch` 已经足够了，所以 `IPOndemand` 的实际效果并不明显。

您可以根据您的实际需要选择相应的域名策略。 一般来说，IPIfNonMatch是大多数情况下的理想选择。

### 路由方法

路由计划由 `3x2` 矩阵组成，从左上到右下： `IP 直接连接` `IP 代理`, `IP 屏蔽`, `域名直接连接`, `域名代理`, `域名屏蔽`, 每行一行，没有逗号分隔。

Qv2ray 中的这些6条规则符合 `域名封禁` -> `域名代理` -> `域名直接连接` -> `IP 封禁` -> `IP 代理` -> `IP 直接连接`。 如果比赛失败，私人地址和中国本土地址直接连接，否则将使用代理人。

:::tip 我只是想要一个全局代理~~~ :hugging_face：

非常简单。 只需清除这些规则，转到“连接首选项”选项卡，然后取消勾选旁路中国复选框。 :fac_with_rolling_eyes: :: :

根据V2Ray官方文件：

IP规则的写法如下(按常用顺序排列)：

- **GeoIP**: 表单是 `geoip:cn`, 必须以 `geoip开始：` (所有小写) 然后是两个字符的国家代码。 例如， `geoip:cn` 代表了在中国的IP地址， `geoip:us` 代表了在美国的IP地址。
- **特殊值**: `geoip:private`, 包括所有私密地址, 例如 `127。 0.0.1` (这项规则只支持V2Ray 3.5及以上。)
- **IP**: 格式是 `127.0.0.1`.
- **CIDR**: 格式是 `10.0.0.0.0/8`.
- **从外部文件加载IP规则**: 表单 `ext:file:tag`必须以 `起首：` (所有小写) 随后是文件名(无扩展名) `文件` 和 `标签`该文件必须保存在V2Ray核心资源目录中。 文件格式与 `geoip.dat`相同，指定的 `标签` 必须存在于文件中。

域名规则的写法如下(按常用顺序)：

- **预先定义的域名列表**: 开始于 `地理位置:`, 其余是一个名称，例如 `geosite:google` 或 `geosite:cn` 关于名称和域名列表，请参阅 _预定义的域名列表_ V2Ray 文档部分。
- **子域**: 以 `域开始：`, 其余是一个域名。 当域名是目标域名或其子域名时，此规则生效。 例如， `domain:v2ray.com` 匹配 `www.v2ray.com` 和 `v2ray.com`, 但不 `xv2ray.com`。
- **完成匹配**: 以 `开始:`, 其余是一个域名。 当此域名完全匹配目标域名时，规则生效。 例如， `full:v2ray.com` 匹配 `v2ray.com` 但不 `www.v2ray.com`。
- **只字符串**: 当这个字符串匹配目标域名的任何部分时，规则就会生效。 例如， `sina.com` 可以匹配 `sina.com`, `sina.com.cn` 和 `www.sina.com`, 但不 `sina.cn`.
- **正则表达式**: 以 `正则表达式开始：`, 其余是正则表达式。 当这个正则表达式匹配目标域名时，规则生效。 例如， `regexp:\\.goo.*\\.com$` 匹配 `www.google.com`, `fonts.googleapis.com`, 但不 `google.com`
- **从外部文件中加载域名列表**: 格式是 `ext:file:tag`, 必须以 `起首：` (所有小写) 随后是文件名(无扩展名) `文件` 和 `标签`文件必须存储在 V2Ray 核心资源目录中。 文件格式与 `geosite.dat`相同，指定的 `标签` 必须存在于文件中。

:::tip 我是一个新人，你能更直截了当吗？

- 如果您想要实现一个全局代理，即不论目的地址， 所有流量都将通过代理，然后参考上面的其他提示。 😅
- 如果您想要实现精确的流量分割，即所有出站流量都应该经过代理， 然后点击接口中的 `预设计划` 按钮。 选择 `空白计划` 或 `广告屏蔽计划`, 并将域名策略设置为 `IPIfNonMatch` 😋 :::

:::tip 我是一个高级用户! 我想要更准确地分割流量！ 🤔 我们建议使用增强版本的 V2Ray 规则文件项目。 项目在 [Loyalsoler/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)。 🤗 :::

:::tip 我想要一个高度自定义的分享流量规则！ 🤪 请参阅下一节 **路由编辑器** :grinning_fac_with_smiling_eyes： :::

## 路由编辑器

在 Qv2ray的主要接口， **右键点击** 代理节点，然后选择 **编辑为一个复杂的配置** 打开 **路由编辑器** 接口。

In this interface, you can arbitrarily combine matching conditions such as **user**, **source IP**, **target IP**, **domain name**, **target domain name**, **protocol**, and **port** to create sufficiently accurate inbound/outbound rules, and you can also adjust the **priority** of the rules arbitrarily Level, even achieving **load balancing**.

需要重申的是，每条路由规则中的匹配条件是 `和` / `&&` 关系 也就是说，如果路由规则包含多个匹配条件，最终获得的实际匹配条件就是这些条件的交点。 例如，如果路由规则包含端口条件 `443` 和目标域名条件 `qv2ray。 ithub.io`, 然后只有目标 `qv2ray.github.io:443` 符合这两项条件的目标将与此项规则相匹配。

如果您对V2Ray的路由规则机制不了解，请参阅V2Ray的官方文档。
