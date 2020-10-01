---
title: Manual
---

# Manual

:::tip
This part is translated by a non-native speaker of Chinese. Corrections welcome!
:::
General settings
General settings are for Qv2ray itself, including appearance, behavior and network settings.

Emphasize

The general settings are for Qv2ray itself, which means that these settings will only change the behavior of Qv2ray itself, but will not affect the behavior of the V2Ray core agent.

#Exterior
Set the appearance attributes of Qv2ray.

Recent list: Set the number of recently used connections displayed in the notification icon right-click menu-recent connections list.
Maximum number of log lines: set the upper limit of the number of log records in the Log pane on the right side of the Qv2ray main interface. After the set value is exceeded, the older logs will be deleted automatically.
Others: Set up as you like~🤐
#behavior
Set the behavior of Qv2ray.

Quiet mode: When enabled, Qv2ray will not actively pop up any notifications.
Others: It's already very simple, why should I talk about it? 😶
#Network Settings
Set the way Qv2ray accesses the network.

Delay test plan: Set the test method for node delay.
TCPing: Qv2ray's default delay test method. The test result is closer to the actual user experience, but the node based on the mKCP protocol cannot be tested.
ICMPing: The delay test method based on ICMP / UDP protocol is currently recognized and mainstream delay test method on the market, and it is also the test principle of ping command in Windows and Unix systems. The test result is much lower than TCPing and far better than the actual experience. It can be used to test nodes based on mKCP protocol.
User Agent: The client information declared by Qv2ray when making network requests. If you do not understand what UA is, please do not change this setting.
Qv2ray proxy: The proxy settings used by Qv2ray when making network requests, not the proxy settings used by V2Ray core export traffic.
What is the meaning of Qv2ray proxy?

If you want Qv2ray to update subscriptions or detect version updates through a proxy, please configure this.

If you want the traffic proxied by V2Ray to pass through another proxy, or your network needs to pass through a layer of proxy to connect to the Internet, then please use the front proxy function and do not configure this option.

#Advanced Behavior
Set the advanced behavior of Qv2ray. Please note that abuse of these settings may have negative effects!

Default setting AllowInsecure: All new connections imported via subscription / QR code / VMess protocol link will be enabled by default to allow insecure certificates. Enabling this setting will cause the relevant nodes to lose TLS protection, and there is a risk of man in the middle attacks. Nodes added by manually filling in connection properties or editing JSON are not affected by this option. If you do not understand the actual use of this option, please do not open it!

The default setting AllowInsecureCiphers: All new connections imported through subscription / QR code / VMess protocol link will be enabled by default to allow insecure TLS algorithm option. Enabling this setting will cause related nodes to lose TLS protection, and there is a risk of man-in-the-middle attacks. Nodes added by manually filling in connection properties or editing JSON are not affected by this option. If you do not understand the actual use of this option, please do not open it!

Timed test delay: After enabling this option, Qv2ray will periodically test the delay of the currently connected node. Enabling this option may make it easier for GFW to recognize your connection.

Another Re-emphasis:

Misuse of the above settings may cause negative effects and even lead to security issues! If you do not understand the actual use of these options, please do not open them!

For versions below V2ray-Core 4.23.1

Update 2020-05-30: Due to implementation flaws, V2ray-Core will use a hard-coded TLS cipher suite list when the AllowInsecureCiphers option is not turned on. This will cause V2ray-Core's TLS traffic to have obvious characteristics. Enabling AllowInsecureCiphers in Qv2ray will Temporarily alleviate this problem, you need to re-import all affected connections after turning on this option

===
Part Two:

#Advanced routing settings
Advanced routing settings and the routing editor are distinctive features of Qv2ray. With their functionality, you can achieve precise control of traffic, such as on-demand proxy, domestic and foreign distribution, etc., and even do Matryoshkas 🤣~

Let’s discuss routing. This concerns the PAC and GFWList.

If you don't know what the routing function of V2Ray is, then you can understand it as a new generation PAC implementation with simpler configuration, more efficient use, and better rules.

The routing function is far more powerful than PAC, so please don't ask whether Qv2ray supports PAC! The data used by the routing function is more complete than GFWList, so GFWList is no longer needed.

#Global routing rules
The global routing rule configuration function is in the Advanced Routing Settings tab of Preferences.

#Domain strategy
Contains three types: AsIs, IPIfNonMatch, and IPOnDemand.

According to V2Ray's official documents, the meaning of the three domain name strategies are as follows:

AsIs: Use only the domain name for routing. Defaults.
IPIfNonMatch: When the domain name does not match any rules, the domain name is resolved into IP (A record or AAAA record) for matching again:
When a domain name has multiple A records, it will try to match all A records until one of them matches a certain rule;
The resolved IP only works during routing, and the original domain name is still used in the forwarded data packets.
IPOnDemand: When any IP-based rules are encountered during matching, the domain name will be immediately resolved to IP for matching.
In short, based on a developer’s statement:

AsIs: fast analysis, imprecise diversion;
IPIfNonMatch: parsing is slightly slower, and shunt is accurate
IPOnDemand: Useless.
Author's Note: IPOnDemand should be the slowest but most accurate, but in most cases, IPIfNonMatch is sufficient, so the actual effect of IPOnDemand is not obvious.

You can choose the corresponding domain name strategy according to your actual needs. Generally speaking, IPIfNonMatch is the ideal choice in most situations.

#Route plan
The routing plan consists of a 3x2 matrix, from top left to bottom right: IP direct connection, IP proxy, IP blocking, domain name direct connection, domain name proxy, domain name blocking, one per line, no comma separation.

These 6 rules in Qv2ray are matched according to the priority of domain name blocking -> domain name proxy -> domain name direct connection -> IP blocking -> IP proxy -> IP direct connection. If the match fails, the private address and the mainland China domestic address are directly connected, otherwise the agent will be used.

I just want a global agent~~~ 🤗

It's very simple. Just clear these rules, go to the Connection tab of Preferences, and uncheck the Bypass China check box. 🙄

According to the official V2Ray documentation:

The IP rules are written as follows (in order of common usage):

GeoIP: The form is geoip:cn, which must start with geoip: (all lowercase) followed by a two-character country code. For example, geoip:cn represents an IP address in China, and geoip:us represents an IP address in the United States.
Special value: geoip:private, including all private addresses, such as 127.0.0.1 (this rule only supports V2Ray 3.5 and above).
IP: The format is 127.0.0.1.
CIDR: The format is 10.0.0.0/8.
Load IP rules from external files: the form is ext:file:tag, which must start with ext: (all lowercase), followed by the file name (without extension) file and tag, the file must be stored in the V2Ray core resource directory. The file format is the same as geoip.dat, and the specified tag must exist in the file.

The domain name rules are written as follows (in order of common use):

A list of predefined domain names: 

Starts with geosite:, and the rest is a name, such as geosite:google or geosite:cn. For the name and domain name list, please refer to the predefined domain name list.

Subdomain: Starts with domain:, and the rest is a domain name. This rule takes effect when the domain name is the target domain name or its subdomain name. For example, domain:v2ray.com matches www.v2ray.com and v2ray.com, but not xv2ray.com.

Complete match: Starts with full:, and the rest is a domain name. When this domain name completely matches the target domain name, the rule takes effect. For example, full:v2ray.com matches v2ray.com but not www.v2ray.com.

Pure string: When this string matches any part of the target domain name, the rule takes effect. For example, sina.com can match sina.com, sina.com.cn and www.sina.com, but not sina.cn.

Regular expression: Starts with regexp:, and the rest is a regular expression. When this regular expression matches the target domain name, the rule takes effect. For example, regexp:\\.goo.*\\.com$ matches www.google.com, fonts.googleapis.com, but not google.com.

Rules for loading domain names from external files: the format is ext:file:tag, which must start with ext: (all lowercase), followed by the file name (without extension) file and tag, and the file must be stored in the V2Ray core resource directory. The file format is the same as geosite.dat, and the specified tag must exist in the file.

If you want to implement a global proxy, that is, regardless of the destination address, all traffic will go through the proxy, then refer to the other tips above. 😅
If you want to achieve precise diversion, that is, all outbound traffic should go through the proxy, then just click the preset plan button in the interface, select the blank plan or the ad blocking plan, and set the domain name strategy to IPIfNonMatch. .😋

Suppose you need more precise diversion rules! 🤔

Then the author recommends the enhanced version of the V2Ray rules file project. The warehouse address is Loyalsoldier/v2ray-rules-dat. 🤗

Suppose you need highly customizable diversion rules! 🤪

Please refer to the next section Routing Editor. 😄

#Routing editor
In the main interface of Qv2ray, right-click the agent node and select Edit as a complex configuration to open the Route Editor interface.

In this interface, you can arbitrarily combine matching conditions such as user, source IP, target IP, domain name, target domain name, protocol, and port to create sufficiently accurate inbound/outbound rules, and you can also adjust the priority of the rules arbitrarily Level, even achieve load balancing.

What needs reiterating is that the matching conditions in each routing rule are and / and / && relationships, that is, if a routing rule contains multiple matching conditions, the actual matching conditions finally obtained are the intersection of these conditions. For example, if a routing rule contains both the port condition 443 and the target domain name condition qv2ray.github.io, then only the target qv2ray.github.io:443 that meets both conditions will match this item rule.

If you don't know much about V2Ray's routing rules mechanism, please refer to V2Ray's official documentation.

END
