---
title: V2ray 集成
---

# V2ray 集成

- V2ray 如何与 Trojan / SSR / 等集成

## V2ray 集成

Qv2ray 有其特殊功能来整合插件内核(SSR / Trojan) 和 V2ray 核心。

许多内核没有内置路由引擎(例如SSR)，它们依赖PAC 功能。 Qv2ray 正在打破这种依赖，用户不需要PAC 文件，而是需要V2ray-Core 来替换PAC。

## 为什么不PAC呢？

PAC 功能已被Qv2ray 开发集团标记为废弃。 我们不建议我们的用户使用以下原因：

- PAC 依赖于一个现有的规则，这个规则可以由 `GFWList` 或其他域列表。
- 在本地编辑PAC 文件是困难的，错误的打印，单个typpo/syntax 错误会使整个PAC 文件发生故障。
- V2ray 有自己的路由表实现和 `geoip`， `geosite` 数据是由官方提供者生成的，他们经常更新列表
- 使用 V2ray 集成比设置 PAC。

## V2ray 集成工作方式

有几个步骤：

1. Qv2ray 检测到/某些出站配置是/是一个/某些插件内核。
2. Qv2ray 将分配每个内核的 HTTP 入站和SOCKS 入站端口(如果启用则是任何)。
3. Qv2ray 将替换内核插件出站到 HTTP/SOCKS 出站，每个外围都对应一个特定的插件与适当的入站协议。
4. 新的路由表条目将被添加到V2ray config 文件中，路由HTTP入站到插件HTTP入站，与SOCKS相同的路由表
5. Qv2ray 将启动此连接配置中使用的所有内核插件。 然后启动 V2ray。
6. Qv2ray 将从 V2ray 收集数据，而不是从单独插件中获取数据。

## 受益于V2ray 集成

- 旁路CN 域名和IP地址。
- 绕过局域网地址。
- Qv2ray 的高级路由矩阵设置。
- 自定义 DNS 设置。
