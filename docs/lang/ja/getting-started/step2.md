---
title: V2Rayコアの設定
---

# ステップ 2: V2Rayコアの設定

After a correct and successful installation of Qv2ray onto your system, it *is* necessary to configure V2Ray Core before actually using it.

## V2Rayコアファイルをダウンロード

Qv2ray itself **does not** include a distribution of V2Ray executable files, namely the `v2ray-core`, and most of the time required for users is to download them.

**詳細については、 [V2Fly インストールガイド](https://www.v2fly.org/guide/install.html) を参照してください。**

:::tip Core Management: Manual vs 自動 V2Ray コアとアセットパッケージの配布を使用している場合。 v2rayコアの自動アップグレードはシステムが処理するので、パッケージマネージャを介してインストールするのが最善です。 Arch Linuxユーザーの場合、1つのパッケージ `v2ray` のみをインストールするだけで十分です。 他のディストリビューションについては、以下をご覧ください。 :::

:::tip Windows 10 ARM64 ユーザの場合 V2Ray Core 4.27から、V2Ray プロジェクトチームは Windows 10 用の ARM32 (armv7) ベースのカーネルを提供しました。 Windows 10 ARM64 ユーザは、より良いパフォーマンスを得るためにこのバージョンのカーネルを使用することをお勧めします。 :::

:::danger Sharpen Your Eyes Do not download `v2ray-linux-arm64.zip` if you are running Qv2ray on `x86_64` (`amd64`) platform. 明確にするために、 `arm64` は `amd64` とは全く異なります。 :::

### 手動ダウンロード

**Official Download Link：** <https://github.com/v2fly/v2ray-core/releases>

Extract the v2ray core files into a fixed path. It is suggested to extract the files into `$QV2RAY_CONFIG_PATH/vcore`, where `$QV2RAY_CONFIG_PATH` is the directory where Qv2ray store it’s data.

ディレクトリ `vcore` は以下の場所のいずれかにあります。

- `./config/` (`config` subdirectory aside Qv2ray executable, recommended for Windows Users)
- `~/.qv2ray/` (ホームフォルダの専用ディレクトリ)
- `~/.config/qv2ray/` (標準のXDG設定パス)

Please make sure that these files exists directly in your `vcore` directory:

1. `v2ray` / `v2ray.exe`: コア実行可能ファイル
2. `v2ctl` / `v2ctl.exe`: コア制御プログラム
3. `geoip.dat`: IPルールデータベース
4. `geosite.dat`: ドメインルールデータベース

:::warning Linux / macOS ユーザ向けの特別なヒント **実行可能権限を** `v2ray` と `v2ctl` に付与する必要があります。 これは通常、これらのファイルで `chmod +x` を実行することによって行われます。

macOS では、Homebrew で v2ray-core をインストールする場合、このヒントは無視できます。 :::

## Qv2rayでV2Rayコアを設定する

Qv2rayを開き、Preferenceウィンドウに移動します。 In **[Kernel Settings](qv2ray://open/preference/kernel)**, configure the following options:

- **Core Executable Path**: V2Ray 実行可能ファイルが存在する場所に設定する。 これは、Windows 上の `v2ray.exe` のフルパス、または Linux / macOS 上の `v2ray` の実行ファイルになります。
- **V2Ray Assets Directory**: `geoip.dat` と `geosite.dat` がある場所に設定してください。

設定後、 **Check V2Ray Core Settings** ボタンをクリックして、V2Ray コア設定を検証できます。 チェックが完了するまで、試行を繰り返します。

:::warning No Matryoshka! 決して決して **コア実行パス** を **Qv2ray Executable**に指してください! Qv2rayはシングルインスタンスであるため、フォーク爆弾は発生しません。 Do note that V2Ray Core Executable is like `v2ray` , `v2ray.exe` or `wv2ray.exe`, instead of `qv2ray` or `qv2ray.exe`, `v2rayN.exe`! :::
