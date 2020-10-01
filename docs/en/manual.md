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
