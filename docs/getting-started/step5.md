---
title: Further Steps
---

# Further Steps

If you are lucky enough, you may now be able to surf the Internet freely. Here are some optional steps that you can follow, to make your experience with Qv2ray better.

## Join Qv2ray User Group

We suggest you join our [Qv2ray User Group](https://t.me/qv2ray) at [Telegram](https://telegram.org/). Here you can chat directly with Qv2ray developers, and also the great Qv2ray users. For usage problems, it is always more efficient to discuss them in the group, than opening up one issue on GitHub.

Also, optionally, you may subscribe [Qv2ray Outpost](https://t.me/qv2ray_outpost) channel at Telegram, if you don't like to talk too much or even show up. We will push news updates of Qv2ray, and even send polls that maybe decides Qv2ray's fate! Make sure you don't miss it.

## Tweaking UI & Languages

### UI & Tray Icons

Despite Qv2ray's best efforts to detect the UI style of your platform, you may still see offending UI details on Qv2ray. For example, the tray icon color is too light to see, the icon color on the button is incongruous, etc.

In this case, please turn to **Preference Window**. In **[General Settings](qv2ray://open/preference/general)** Tab, please adjust the following items according to your real situation:

- **Adapt Dark Theme**: when enabled, the icons on buttons turn light-colored. if you are using a light-colored window theme, please turn this off.
- **Adapt Dark Tray Theme**: when enabled, the tray icon turns light-colored to adjust to darkmode themes. if the region of your tray is light-colored, disabling this is recommended.

:::tip A tip for Gnome users
The native Gnome desktop will not display the tray icons, and the Qv2ray icon will also not be displayed. If you want to display the tray icons, you can install a Gnome extension called [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (also called `ubuntu-appindicator`) , After installing the extension you should log out, log in again, and then enable it in the `Tweaks` app (ie `gnome-tweaks`), and then you will see the tray icons.
:::

### Multi-languages

Similarly, Qv2ray will do its best to detect the display language of your system and set it to Qv2ray's interface language when it first starts. If the results of automatic detection are not satisfactory, or if you just want to try Qv2ray in another language, you can adjust that in **Preference Window** -> **General Settings** -> **Language**.

Choose according to ISO-639/ISO-3166 codes. For example, `zh_CN` for **Chinese Simplified**, `ja_JP` for **Japanese**, `en_US` for **American English**, etc. Most of the user interface can be retranslated immediately after a change, but a complete restart of Qv2ray is recommended to make the changes take effect.

:::tip Restart After Change
If changes don't seems to apply, you could try restarting Qv2ray.
:::

## Tweaking Routing Schemes

By default, Qv2ray will be set to **bypass the traffic of China mainland**, according to `geosite.dat` and `geoip.dat` from V2Ray core, thus it is not necessary to configure some awkward PAC rules. You can override this default setting in the **Preference Window**, by simply turning off this function in tab **[Connection Settings](qv2ray://open/preference/connection)**.

However, sometimes, these rules won't always apply. For example, you have a special proxy for [bilibili](https://bilibili.com/) that unlocks the Hong Kong/Macau/Taiwan episodes. Since it is a China mainland website, by default, the traffic won't go through the proxy, thus not satisfying your need. The solution is using our **[Advanced Route Settings](qv2ray://open/preference/route)** in the **Preference Window**.

A valid route setting scheme is basically a 2x3 routing rule matrix. Syntax for the rules can be found in [RuleObject Documentation](https://www.v2fly.org/config/routing.html#routingobject) from V2Ray Official Website. Here, if we want to force bilibili go through proxy, we just write a rule `geosite:bilibili` at `(Domain, Proxy)` position.

There are other advanced usages of routing schemes. If you are interested, try explore more into it.

## Sharing Proxy over Local Network (LAN)

For the sake of safety, by default, Qv2ray will only listen on `127.0.0.1`, that is to say, only the device which Qv2ray is running on can use the proxy. If you want to share your proxy over your local network (LAN), there are changes to be made.

The most simple and overkill method is to change the listen address from `127.0.0.1` to `0.0.0.0`, which will allow all incoming connections to your little proxy.

However, this is **not as safe**, since your proxy can be easily abused and attacked by others. To prevent this, you have to either shield yourself under NAT (for example, using a trusted router and don't expose your proxy ports), or setup a firewall to block the unwanted addresses (iptables, and etc).

You may encounter connectivity problems when sharing proxy. Here are some troubleshooting tips:

- allow V2Ray core to listen on `0.0.0.0` in Windows Firewall
- disable Intranet Isolation / AP Isolation on your router
