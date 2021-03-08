---
title: ルート詳細設定
---

# ルート詳細設定

**高度なルーティング設定** と **ルーティングエディター** は、Qv2ray の特徴的な機能です。 With their functionality, you can achieve precise control of traffic, such as **on-demand proxy**, **split traffic to domestic and foreign websites**, etc., and even do **Matryoshkas** 🤣~

:::tip ルーティングとは何ですか? PACとGFWListはどうでしょう？ V2Ray のルーティング機能が何であるかわからない場合。 そして、より簡単な構成、より効率的な使用、より良いルールを備えた新世代のPAC実装としてそれを理解することができます。

ルーティング機能はPACよりもはるかに強力ですので、Qv2rayがPACをサポートしているかどうかは聞かないでください! ルーティング機能で使用されるデータはGFWListよりも完全なので、GFWListは必要ありません。 :::

## グローバルルーティング ルール

グローバルルーティングルール設定機能は、 **Preferences** の **Advanced Routing Settings** タブにあります。

### ドメイン戦略

次の3つのタイプが含まれています: `AIS`, `IPIfNonMatch`, and `IPOnDemand`.

V2Rayの公式文書によると、3つのドメイン名戦略の意味は以下のとおりです。

- **`AsIs`**: ルーティングにドメイン名のみを使用する。 デフォルト。
- **`IPIfNonMatch`**: ドメイン名がどのルールとも一致しない場合。 ドメイン名は再度一致するためにIP（レコードまたはAAAAレコード）に解決されます：
  - ドメイン名に複数の A レコードがある場合、そのいずれかが特定のルールに一致するまで、すべての A レコードに一致しようとします。
  - 解決された IP はルーティング中にのみ機能し、転送されたデータ パケットでは元のドメイン名が使用されます。
- **`IPOnDemand`**: マッチング中に任意のIPベースのルールが発生すると、マッチングのためにドメイン名は直ちにIPに解決されます。

要するに、開発者の声明に基づいて:

- **`AsIs`**: 高速解析、不精度転換;
- **`IPIfNonMatch`**: 解析がわずかに遅く、シャントは正確です
- **`IPOnDemand`**: 無用.

> Note: `IPOnDemand` should be the slowest but most accurate, but in most cases, `IPIfNonMatch` is sufficient, so the actual effect of `IPOnDemand` is not obvious.

実際のニーズに応じて対応するドメイン名戦略を選択できます。 一般的に言えば、IPIfNonMatch はほとんどの状況で理想的な選択です。

### ルーティング方法

The routing plan consists of a `3x2` matrix, from top left to bottom right: `IP direct connection`, `IP proxy`, `IP blocking`, `domain name direct connection`, `domain name proxy`, `domain name blocking`, one per line, no comma separation.

These 6 rules in Qv2ray are matched according to the priority of `domain name blocking` -> `domain name proxy` -> `domain name direct connection` -> `IP blocking` -> `IP proxy` -> `IP direct connection`. 一致しない場合, プライベートアドレスと中国本土の国内のアドレスが直接接続されています, そうでなければ、エージェントが使用されます.

:::tip グローバルプロキシが欲しいです~~~ 🤗

とても単純なことです これらのルールをクリアし、format@@0 タブに移動し、format@@1 チェック ボックスをオフにします。 🙄 :::

公式のV2Rayドキュメントによると:

IPルールは以下のように記述されています（一般的な使用順）

- **GeoIP**: The form is `geoip:cn`, which must start with `geoip:` (all lowercase) followed by a two-character country code. 例えば、 `geoip:cn` は中国の IP アドレスを表し、 `geoip:us` は米国の IP アドレスを表します。
- **Special value**: `geoip:private`, including all private addresses, such as `127.0.0.1` (this rule only supports V2Ray 3.5 and above).
- **IP**: フォーマットは `127.0.0.1` です。
- **CIDR**: フォーマットは `10.0.0.0/8` です。
- **Load IP rules from external files**: the form is `ext:file:tag`, which must start with `ext:` (all lowercase), followed by the file name (without extension) `file` and `tag`, the file must be stored in the V2Ray core resource directory. ファイル形式は `geoip.dat`と同じで、指定された `タグ` がファイル内に存在する必要があります。

ドメイン名のルールは以下のように記述されています(一般的な使用順)。

- **Pre-defined domain list**: Starts with `geosite:`, and the rest is a name, such as `geosite:google` or `geosite:cn`. 名前とドメイン名リストについては、V2Ray ドキュメントの _定義済みのドメイン名リスト_ セクションを参照してください。
- **Subdomain**: `domain:`で始まり、残りはドメイン名です。 このルールは、ドメイン名がターゲットドメイン名またはサブドメイン名である場合に有効になります。 例えば、 `domain:v2ray.com` は `www.v2ray.com` と `v2ray.com`と一致しますが、 `xv2ray.com` と一致しません。
- **完全一致**: `完全:`で開始し、残りはドメイン名です。 このドメイン名がターゲットドメイン名と完全に一致すると、ルールが有効になります。 例えば、 `full:v2ray.com` は `v2ray.com` と一致しますが、 `www.v2ray.com`.
- **文字列専用**: この文字列がターゲットドメイン名の任意の部分に一致する場合、ルールが有効になります。 例えば、 `sina.com` `sina.com`, `sina.com.cn` と `www.sina.com`, `sina.cn` に一致することができます。
- **正規表現**: `regexp:`で始まり、残りは正規表現です。 この正規表現がターゲットドメイン名に一致すると、ルールが有効になります。 例えば、 `regexp:\\.goo.*\\.com$` は `www.google.com`, `fonts.googleapis.com`, でも `google.com` に一致します。
- **Loading domain list from external files**: the format is `ext:file:tag`, which must start with `ext:` (all lowercase), followed by the file name (without extension) `file` and `tag`, and the file must be stored in the V2Ray core resource directory. ファイル形式は `geosite.dat`と同じで、指定された `タグ` がファイル内に存在する必要があります。

:::tip 私は初心者ですが、もっと簡単にできますか?

- グローバルプロキシを実装したい場合、つまり宛先アドレスに関係なく すべてのトラフィックはプロキシを通過し、上記の他のヒントを参照してください。 😅
- If you want to achieve precise traffict splitting, that is, all outbound traffic should go through the proxy, then just click the `preset plans` button in the interface, select the `blank plan` or the `ad blocking plan`, and set the domain name strategy to `IPIfNonMatch`. 😋 :::

:::tip 私は上級者です! 私はより正確な交通分割が欲しい! 🤔 V2Rayルールファイルプロジェクトの拡張版を使用することをお勧めします。 プロジェクトは [Loyalsoluter/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat) にあります。 🤗 :::

:::tip 高度にカスタマイズ可能なトラフィック分割ルールが欲しいです。 🤪 次のセクションを参照してください **ルーティングエディター**. 😄 :::

## ルーティングエディター

Qv2rayのメインインターフェイスで **エージェントノードを右クリックし、** **複雑な構成として編集** を選択して **ルート エディター** インターフェイスを開きます。

In this interface, you can arbitrarily combine matching conditions such as **user**, **source IP**, **target IP**, **domain name**, **target domain name**, **protocol**, and **port** to create sufficiently accurate inbound/outbound rules, and you can also adjust the **priority** of the rules arbitrarily Level, even achieving **load balancing**.

繰り返し表示する必要があるのは、各ルーティングルールのマッチング条件は `と` / `&&` の関係であることです。 ルーティングルールに複数の一致条件が含まれている場合、最終的に実際に得られる一致条件は、これらの条件の交差点です。 For example, if a routing rule contains both the port condition `443` and the target domain name condition `qv2ray.github.io`, then only the target `qv2ray.github.io:443` that meets both conditions will match this item rule.

V2Rayのルーティングルールメカニズムについて詳しくない場合は、V2Rayの公式ドキュメントを参照してください。
