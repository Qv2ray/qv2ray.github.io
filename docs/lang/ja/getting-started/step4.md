---
title: Qv2ray を使用するソフトウェアの設定
sidebarDepth: 3
---

# ステップ 4: Qv2ray を使用するソフトウェアの設定

おめでとうございます ロックされていないインターネットにアクセスするには、あと一歩しか残っていません！

## 一般的なメソッド

### システムプロキシの使用

**Windows** および **macOS** ユーザーの場合、ほとんどすべてのアプリケーションがシステムプロキシ設定に従います。 **Linux** ユーザの場合、Firefox や Chromium などの一部のアプリケーションは、すべてではありませんが、 GNOME/KDE 設定でプロキシ設定を読み取り、従うことになります。

現在、システム プロキシの自動設定は、 **Windows**、 **macOS** および **Linux** (GNOME/KDE) を含む Qv2ray でサポートされています。 Qv2rayのシステムプロキシオプションは以下の場所にあります。

- **Qv2ray トレイメニュー**.
  1.  トレイアイコンを右クリックします。
  2.  ポップアップメニューで **System Proxy** -> **Enable/Disable System Proxy** を選択します。
- **Qv2ray 環境設定ウィンドウ**.
  1.  メインウィンドウの **環境設定** ボタンをクリックします。
  2.  **環境設定ウィンドウ**で、 **[](qv2ray://open/preference/inbound)** タブを選択します。
  3.  **System Proxy** を設定します。
  4.  **OK** をクリックして設定を適用します。

:::tip Linux ユーザー: KDE/GNOME プロキシ設定 GNOME をメインデスクトップ環境として使用している場合。 システムプロキシを設定するのに非常に有用かもしれません GNOME プロキシ設定はほぼ普遍的に認められているからです。

しかし、KDE プロキシ設定はおもちゃのようなものなので、KDE ユーザは困難な時期を迎えるかもしれません。 KDE アプリケーション自体でさえ、その設定を読んで従いません。 その場合、アプリケーションを構成するための代替ソリューションを求めることができます。 :::

:::warning Windows ユーザー: UWP Loopback プラグインの問題 デフォルトでは、UWP アプリケーションは、ループバックアドレスを持つプロキシを使用することを禁止されています(127)。 .0.1)、システムプロキシ設定はおそらくあなたのUWPアプリケーションが正常に動作しなくなります。

[マイクロソフト](https://docs.microsoft.com/en-us/windows/iot-core/develop-your-app/loopback)の記事によると 以下のコマンドを管理者権限を持つコマンドプロンプトで実行することで、問題を解決できます。

```shell
FOR /F "tokens=11 delims=\" %p IN ('REG QUERY HKCU\Software\Classes\Local Settings\Software\Software\Software\CurrentVersion\AppContainer\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%p
```

または、単にいくつかのサードパーティ製のツールを使用することができます。 [Fiddler](/EnableLoopback.zip) プロジェクトの [このプログラム](https://www.telerik.com/fiddler) をここで紹介します。 :::

### アプリケーションで手動で設定

#### Telegram

Telegramがプロキシを使用するように設定できます。 Go to **Settings** -> **Advanced** -> **Network and proxy** and click **Connection type**, where **Proxy Settings** dialog will be opened.

**プロキシ設定**の下部にある **プロキシ追加** ボタンをクリックします。 独自のフレーバーに従ってSOCKS5/HTTPを選択し、Qv2ray Inbound設定からの情報を空白に記入します。

最後に、設定したプロキシエントリをクリックします。 完了しました。

#### Web Browsers

ほとんどすべてのWebブラウザはプロキシの手動設定をサポートしています。 Firefox を例に挙げると、この設定は **環境設定 -> General -> Network -> Manual Proxy Configuration** で確認できます。 これらのフィールドにQv2ray Inbound Settingsの情報を入力して、Qv2ray を使用します。

:::tip プロキシプラグインの使用 プロキシ設定の切り替えを避けるために。 ブラウザを強化するためにサードパーティのプラグイン(例えば SwitchyOmega)を使用したいと思うかもしれません。 これらのプラグインは、複数のプロファイルやさらなるトラフィック転換を含む、より洗練された構成を実装するのに役立ちます。 :::

#### Java アプリケーション

Java アプリケーションの場合は、JVM 引数を使用して configure プロキシを使用できます。

以下にいくつかの例を示します。

- SOCKS5の使用:
  ```shell
  Java -DsocksProxyHost=127.0.0.1 -DsocksProxyPort=1088 -jar some-application.jar
  ```
- HTTP(S):
  ```shell
  Java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8000 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8000 -jar some-application.jar
  ```

:::danger Buggy Minecraft 新しいバージョンの Minecraft (`>=1.5.2`) は JVM プロキシ設定に従いません。 それはQv2rayの問題ではありません。 プロキシ経由で Minecraft をプレイしたい場合 Dokodemo-door incoming for that server and connect directly `localhost`. :::

## プラットフォーム依存のメソッド

### 環境変数の使用

多くの CLI プログラム (例えば`curl`や`wget`) は、`<PROTOCOL>_PROXY`環境変数によって与えられたプロキシを使用します。

設定例を以下に示します:

```shell
# Qv2ray の入力設定に従ってホストとポートを変更する
export HTTP_PROXY="http://127.0.0.1:8000"
export HTTPS_PROXY="http://127.0.0.1:8000"
```

Qv2ray で認証が有効になっている場合は、以下の設定を使用してください。

```shell
# 設定に従ってユーザー/パスを変更する
export HTTP_PROXY="http://user:pass@127.0.0.1:8000"
export HTTPS_PROXY="http://user:pass@127.0.0.1:8000"
```

ユーザー名またはパスワードに特殊文字がある場合は、それをエンコードする必要があります。 ここに簡単な参照があります。

| `!`   | `#`   | `$`   | `&` | `'`   | `(`   | `)`   | `*`   | `+`   | `,`   | `/`   | `:`   | `;`   | `=`   | `?`   | `@`   | `[`   | `]`   |
| ----- | ----- | ----- | ------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| `%21` | `%23` | `%24` | `%26`   | `%27` | `%28` | `%29` | `%2A` | `%2B` | `%2C` | `%2F` | `%3A` | `%3B` | `%3D` | `%3F` | `%40` | `%5B` | `%5D` |

または、エンコードしたいテキストを入力します。 <input v-model="input" />

<template v-if="input">
  エンコードされたテキスト: <code>{{ escaped }}</code>
</template>

For programs running in `sudo`, it is required to configure `sudo` to preserve these variables if you do not run `sudo` in a shell. root で`visudo`を呼び出し、次の行を追加します。

```shell
デフォルトは env_keep += "HTTP_PROXY HTTPS_PROXY"
```

それでも、それら自身の変数を使っているいくつかのプログラムがある。 例えば、`rsync`は HTTP プロキシに`RSYNC_PROXY`を使用します。

```shell
export RSYNC_PROXY=user:pass@127.0.0.1:8000
```

プロキシを設定したいプログラムのマニュアルを読むことを強くお勧めします。

### `プロキシチェーンを使用する`

上記のいずれのメソッドも動作しない場合は、 `proxychains`を使ってみてください。 これは、プロキシにネットワーク接続をリダイレクトするプログラムの機能/ライブラリをハイジャックします。

まず、`proxychains-ng` をインストールする必要があります。 インストール方法はオペレーティングシステムによって異なります。

- [Linux/macOS](https://github.com/rofl0r/proxychains-ng)
- [Windows](https://github.com/shunf4/proxychains-windows)

Edit `/etc/proxychains.conf` (for global proxychains) or `$HOME/.proxychains/proxychains.conf` (for user), edit `[ProxyList]` section and change the proxy to SOCKS5 Proxy in Qv2ray:

```ini
[ProxyList]
socks5  127.0.0.1  1088
```

`プロキシチェーン`を設定した後 ` proxychains ` を端末で`proxychains <program>`を使って、`proxychains`を指定したプロキシを使用するようにプログラムをハイジャックすることができます。 ノイズの多い出力に飽き飽きしている場合は、`proxychains`の後に`-q` オプションを追加してください。

注意すべきことの1つは、`proxychains`が静的にリンクされたプログラム(例えば、Golangプログラム)では動作しないことです。

<script>
export default {
  data: () => ({
    input: ''
  }),
  computed: {
    escaped() {
      return encodeURIComponent(this.input)
    }
  }
}
</script>
