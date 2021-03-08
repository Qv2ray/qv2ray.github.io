---
title: その他のステップ
---

# その他のステップ

あなたが幸運であれば、あなたは今自由にインターネットをサーフィンすることができるかもしれません。 Qv2rayでの体験をより良くするために、いくつかのオプションのステップを紹介します。

## Qv2rayユーザーグループに参加

[Telegram](https://t.me/qv2ray) で私たちの [Qv2ray User Group](https://telegram.org/) に参加することをお勧めします。 ここでは、Qv2ray開発者、そして素晴らしいQv2rayユーザーと直接チャットすることができます。 利用上の問題については、GitHubで課題を開くよりも、グループ内で議論する方が常に効率的です。

また、必要に応じて、Telegramで [Qv2ray Outpost](https://t.me/qv2ray_outpost) チャンネルを購読することもできます。 Qv2rayの最新情報をプッシュし、Qv2rayの運命を決定するアンケートも送信します! それを見逃さないようにしてください。

## UI & 言語を微調整中

### UI & トレイアイコン

Qv2ray がプラットフォームの UI スタイルを検出するための最善の努力をしているにもかかわらず、Qv2ray に不快な UI の詳細が表示されることがあります。 例えば、トレイアイコンの色が明るすぎる、ボタンのアイコンの色が不一致などです。

この場合は、 **環境設定ウィンドウ** をご覧ください。 **[一般設定](qv2ray://open/preference/general)** タブで、実際の状況に応じて以下の項目を調整してください。

- **暗いテーマを適応する**: 有効にすると、ボタンのアイコンが明るい色に変わります。 薄い色のウインドウのテーマを使っているのならこれを消してください
- **暗いトレイテーマの調整**: 有効にすると、トレイアイコンが明るくなり、ダークモードのテーマに調整します。 トレイの領域が薄い色の場合は、無効にすることをお勧めします。

:::tip Gnome ユーザーのためのヒント ネイティブの Gnome デスクトップには tray アイコンが表示されません。 そして、Qv2rayアイコンも表示されません。 If you want to display the tray icons, you can install a Gnome extension called [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (also called `ubuntu-appindicator`) , After installing the extension you should log out, log in again, and then enable it in the `Tweaks` app (ie `gnome-tweaks`), and then you will see the tray icons. :::

### 多言語対応

同様に、Qv2rayはシステムの表示言語を検出し、最初に起動した時にQv2rayのインターフェース言語に設定するように最善を尽くします。 自動検出の結果が不十分な場合、または別の言語で Qv2ray を試してみたい場合。 **Preference Window** -> **General Settings** -> **Language** で調整できます。

ISO-639/ISO-3166 コードに従って選択してください。 For example, `zh_CN` for **Chinese Simplified**, `ja_JP` for **Japanese**, `en_US` for **American English**, etc. ほとんどのユーザーインターフェイスは、変更後すぐに再翻訳できます。 しかし、Qv2rayの完全な再起動は、変更を有効にすることをお勧めします。

変更後に再起動する 変更が適用されない場合は、Qv2ray を再起動してみてください。 :::

## ルーティングスキームを微調整

By default, Qv2ray will be set to **bypass the traffic of China mainland**, according to `geosite.dat` and `geoip.dat` from V2Ray core, thus it is not necessary to configure some awkward PAC rules. You can override this default setting in the **Preference Window**, by simply turning off this function in tab **[Connection Settings](qv2ray://open/preference/connection)**.

ただし、これらの規則は必ずしも適用されない場合があります。 例えば、香港/マカオ/台湾エピソードのロックを解除する [ビリビリビリ](https://bilibili.com/) の特別なプロキシがあります。 それは中国本土のウェブサイトであるため、デフォルトでは、トラフィックはプロキシを通過しませんので、あなたの必要性を満たしていません。 解決策は、 **[](qv2ray://open/preference/route)** 環境設定ウィンドウの **** を使用することです。

有効なルート設定スキームは基本的に2x3ルーティングルール行列です。 ルールの構文は、V2Ray Official Website の [RuleObject ドキュメント](https://www.v2fly.org/config/routing.html#routingobject) にあります。 ここでは、bilibiliをプロキシを通過させたい場合は、 `geosite:bilibili` `(Domain, Proxy)` の位置にルールを書きます。

ルーティングスキームの他の高度な使用法があります。 興味があれば、もっと探索してみてください。

## ローカルネットワーク経由でプロキシを共有 (LAN)

For the sake of safety, by default, Qv2ray will only listen on `127.0.0.1`, that is to say, only the device which Qv2ray is running on can use the proxy. ローカルネットワーク(LAN)上でプロキシを共有したい場合は、変更があります。

The most simple and overkill method is to change the listen address from `127.0.0.1` to `0.0.0.0`, which will allow all incoming connections to your little proxy.

しかし、これは **ほど安全ではありません**, あなたのプロキシは他の人によって容易に悪用され、攻撃される可能性があるので. これを防ぐには、NATの下で自分自身をシールドする必要があります（例えば、 信頼できるルータを使用して、プロキシポートを公開しないでください)、または不要なアドレス(iptablesなど)をブロックするためにファイアウォールを設定します。

プロキシを共有するときに接続に問題が発生する可能性があります。 トラブルシューティングのヒントは次のとおりです。

- V2Ray コアを Windows ファイアウォールで `0.0.0.0` でリッスンできるようにする
- ルーターのイントラネット分離/AP分離を無効にする
