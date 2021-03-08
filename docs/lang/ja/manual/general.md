---
title: 一般設定
---

# 一般設定

**[一般設定](qv2ray://open/preference/general)** は Qv2ray 自体用で、 **外観**、 **動作** 、 **ネットワーク設定** を含みます。

::: tip Tips 一般的な設定は、Qv2ray 自体の動作のみを変更します。 ただし、V2Ray Core のプロキシ動作には影響しません。 :::

## 外観

Qv2rayがどのように見えるかを設定します。

- **最近使用した接続数**: 通知アイコンに表示される最近使用した接続数を設定します。 **右クリックメニュー** - **最近使用した接続** リスト。
- **Maximum Log Lines**: Qv2ray メインインターフェイスの右側の **Log** ペインでログレコード数の上限を設定します。 設定値を超えると、古いログは自動的に消去されます。
- **その他**: 好きなように設定してください~🤐

## 動作

Qv2ray の動作を設定します。

- **Quiet Mode**: 有効な場合、Qv2rayは通知をポップアップしません。
- **その他**: すでに非常に単純なことですが、なぜ私がそれについて話すべきなのでしょうか? 😶

## ネットワーク設定

Qv2ray がネットワークにアクセスする方法を設定します。

- **Latency Testing Method**: ノード遅延のテスト方法を設定する。
  - **TCPing**: Qv2ray のデフォルト遅延テスト方法. テスト結果は、実際のユーザーエクスペリエンスに近いです。 しかし、mKCP プロトコルに基づくノードは、TCPではなくUDPに基づいているため、テストできません。
  - **ICMPing**: The delay test method based on ICMP / UDP protocol is currently recognized and mainstream delay test method on the market, and it is also the test principle of `ping` command in Windows and Unix systems. テスト結果はTCPingよりもはるかに低く、実際の経験よりもはるかに優れています。 mKCP プロトコルに基づいてノードをテストするために使用できます。
- **User Agent**: ネットワーク要求時にQv2rayが宣言したクライアント情報。 UAが何であるか分からない場合は、この設定を変更しないでください。
- **Qv2ray Proxy**: ネットワーク要求時にQv2ray が使用するプロキシ設定 V2Ray Coreでネットワークトラフィックに使用されるプロキシ設定ではありません。

:::tip Qv2ray プロキシとは何ですか? Qv2rayにサブスクリプションを更新するか、プロキシ経由でバージョンアップデートを検出する場合は、以下の設定を行ってください。

V2Ray によってプロキシされたトラフィックを別のプロキシを通過させたい場合。 インターネットに接続するためには、ネットワークがプロキシ層を通過する必要があります。 次に、フォワードプロキシ機能を使用して、このオプションを設定しないでください。 :::

## 高度な動作

Qv2ray の高度な動作を設定します。 これらの設定の乱用が悪影響を及ぼす可能性があることに注意してください!

- **Set `AllowInsecure` by Default**: **subscription** / **QR code** / **VMess プロトコル link** は、安全でない証明書を許可するためにデフォルトで有効になります。 この設定を有効にすると、関連するノードが TLS 保護を失い、中間攻撃の危険性があります。 接続プロパティを手動で入力したり、JSON を編集したりして追加されたノードは、このオプションの影響を受けません。 このオプションの実際の使用がわからない場合は、開かないでください!
- ** `SessionResumption` をデフォルト**で有効にする : Qv2ray v2.6.0 の新規。 有効にすると、TLSでインポートされた新しい接続は **セッション再開** を有効にし、ハンドシェイク中のRTTを減らします。 サーバー側でも関連機能を有効にする必要があります。 Cloudflareで `-RTT接続再開` 、nginxで `ssl_early_data` など。 しかし、これはトラフィックが認識されるリスクを大幅に増加させます。
- **接続時のレイテンシーテスト**: 有効にすると、Qv2rayは接続時のノードのレイテンシーをテストします。 これを有効にすると、GFWが接続を認識しやすくなる可能性があります。
- **Test Latency Periodically**: 有効にすると、Qv2rayは定期的に現在接続されているノードのレイテンシーをテストします。 これを有効にすると、GFWが接続を認識しやすくなる可能性があります。
- **システムルート証明書を無効にする**: 有効にすると、V2Ray コアはルート証明書のハイジャック攻撃を回避するのに役立つ、組み込みの root 証明書のみを使用します。 しかし、これにより、V2Rayコアが有効なTLS証明書を認識できず、ノードとの接続に問題が生じる可能性があります。
- (Removed) **Set `AllowInsecureCiphers` by Default**: All new connections imported through **subscription** / **QR code** / **VMess protocol link** will be enabled by default to `allow insecure TLS algorithm` option. この設定を有効にすると、関連するノードが TLS 保護を失い、中間者攻撃のリスクがあります。 接続プロパティを手動で入力したり、JSON を編集したりして追加されたノードは、このオプションの影響を受けません。 このオプションの実際の使用がわからない場合は、開かないでください!

:::warning 再強調: 上記の設定を誤用すると、悪影響が発生し、セキュリティ上の問題が発生する可能性があります。 これらのオプションの実際の使用を理解していない場合は、それらを開かないでください! :::

:::tip (期限切れ) V2ray Core 4.23 以前のバージョンについての注意事項。 **2021-01-25に更新:** 古いV2Rayコアバージョンは誰も使用しないと考えています。 この通知はもはや有効ではなく、歴史的な理由のためにのみ保存されています。

**Updated at 2020-05-30:** Due to implementation issues，V2Ray core will use hard-coded TLS cipher suites when `AllowInsecureCiphers` is disabled, which makes its TLS traffic highly distinguishable. `AllowInsecureCiphers` を有効にすると、問題が一時的に緩和されますが、 **影響を受けたすべての接続が再インポートされる** が必要になります。 :::
