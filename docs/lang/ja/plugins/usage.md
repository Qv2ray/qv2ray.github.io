---
title: プラグインの使用
---

# プラグインの使用

- このページではQv2rayプラグインシステムの使用方法について説明します
- **プラグインを使用するには、 `Qv2ray v2.5.0-pre1 BuildVersion: 5264`**

## プラグインとは

> 技術的に言えば、Qv2rayプラグインは、Qv2rayの機能を拡張するために、 `QvPlugin` インターフェイスを実装する共有ライブラリです。

Qv2rayプラグインはQv2rayの機能を拡張し、より多くの機能を使用できます。 **プラグインを活用することで、V2Rayコアをまったく使用せずにQv2rayを実行することもできます。**



:::tip Builtin Shadowsocks vs QvPlugin-SS ShadowsocksをサポートするためにQv2rayがQvPlugin-SSを必要とすると思われる一般的なgotchaです。 Qv2rayにはすでに [内蔵のShadowsocks](https://www.v2fly.org/config/protocols/shadowsocks.html#outboundconfigurationobject) がV2Ray Coreからサポートされており、一般的なユースケースで十分です。 そのため、QvPlugin-SSを使用する必要はありません。

ただし、古い/非推奨の暗号を使用することを主張する場合(例えば、 `rc4-md5`など)、それらを動作させるためには、QvPlugin-SS が必要になる場合があります。 Servers with SIP003 plugins (for example, [`simple-obfs`](https://github.com/shadowsocks/simple-obfs), [`kcptun`](https://github.com/xtaci/kcptun) and [`v2ray-plugin`](https://github.com/shadowsocks/v2ray-plugin)) will also require QvPlugin-SS to work. :::

## プラグインのダウンロードと使用方法

必要な数のプラグインをダウンロードして有効にできます。

プラグインをインストールするには、以下を行う必要があります。

### 1. プラグインのダウンロード/インストール

- いくつかのプラグインはパッケージマネージャ( [Scoop](../getting-started/step1.md#scoop-for-windows-users)など)経由で出荷される可能性があります。
  - _この方法でプラグインをインストールした場合は、 **ステップ 3** に進んでください。_
- プラグインのリリースページから、お使いのOSに従ってファイルをダウンロードしてください。

### 2. プラグインを `プラグイン` ディレクトリ内に配置する

- Click **[Open Local Plugin Folder](qv2ray://open/plugin/metadata)** in the **[Plugin Manager](qv2ray://open/plugin/plugindir)** window, which a folder named `plugins` will be opened.
- ダウンロードしたプラグイン `dll`/`dylib`/`ので、` ファイルをこのディレクトリに置きます。

### 3. Qv2ray & プラグインを有効にする

- 「プラグインマネージャー」を開くと、プラグインが見つかります。
- 左側の「有効化」チェックボックスをオンにします。
- いくつかのプラグイン、 **特に** カーネルプラグインは、 Qv2ray の再起動後に **のみ** がロードされます。

### 4. メリット！

- プラグインを使用する準備ができました！

## プラグインFAQ

### Qv2ray はプラグインを再コーゴニズされません:

- Qv2ray のプラグインディレクトリ (`config\plugins`) に配置されたプラグインを確認してください。
- プラグインのバージョンがQv2rayバージョンと一致していることを確認してください。 現在、Qv2ray `v2.6.0-rc2` 以降ではプラグインバージョン `2.0.0` 以降をサポートしています。
- 問題が解決しない場合は、プラグインプロバイダに直接この問題を報告してください:
  - The exact information of Qv2ray, with **the source of the program**, **[Qv2ray version](qv2ray://open/preference/about)**, and the **build version**.
  - プラグインの正確なバージョンで、プラグインファイルの **sha256** または **md5** を使用します。
  - Qv2ray log, can be collected by execute `qv2ray(.exe) --debug > log.txt`

### OS用のプラグインファイルが見つかりません:

- これは、プラグインライターがお使いのOSをサポートするのに遅延している場合、または発生する可能性があります。
- このプラグインはお使いのOSに適していません:
  - 例: Linux 固有の `iptables` 設定プラグインは、macOSおよびWindowsでは適切ではありません

### Qv2ray がプラグインを読み込んだ後にクラッシュしました:

- すべてのプラグインの読み込みをスキップするには、 `qv2ray(.exe) --noPlugin` を試してください。
- Qv2rayが正常に開始された場合は、上記の方法でエラーを報告してください。
