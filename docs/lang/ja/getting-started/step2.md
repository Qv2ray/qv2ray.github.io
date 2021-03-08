---
title: V2Rayコアの設定
---

# ステップ 2: V2Rayコアの設定

Qv2rayをシステムに正しくインストールすると、実際に使用する前にV2RayコアファイルにQv2rayを設定する必要があります。

## V2Rayコアファイルをダウンロード

Due to political reasons, Qv2ray itself **does not** include a distribution of V2Ray executable files, namely the `v2ray-core`, and most of the time required for users is to download them.

**詳細については、 [V2Fly インストールガイド](https://www.v2fly.org/guide/install.html) を参照してください。**

:::tip Core Management: Manual vs 自動 V2Ray コアとアセットパッケージの配布を使用している場合。 v2rayコアの自動アップグレードはシステムが処理するので、パッケージマネージャを介してインストールするのが最善です。 Arch Linuxユーザーの場合、1つのパッケージ `v2ray` のみをインストールするだけで十分です。 他のディストリビューションについては、以下をご覧ください。 :::

:::tip Windows 10 ARM64 ユーザの場合 V2Ray Core 4.27から、V2Ray プロジェクトチームは Windows 10 用の ARM32 (armv7) ベースのカーネルを提供しました。 Windows 10 ARM64 ユーザは、より良いパフォーマンスを得るためにこのバージョンのカーネルを使用することをお勧めします。 :::

:::danger Sharpen Your Eyes Do not download `v2ray-linux-arm64.zip` if you are running Qv2ray on `x86_64` (`amd64`) platform. 明確にするために、 `arm64` は `amd64` とは全く異なります。 このようにしないでください。 :::

### パッケージマネージャ経由でV2RAyコアをダウンロード

#### Homebrew(macOS)

```bash
brew install v2ray
```

Homebrewでインストールする場合、V2Rayの実行可能な場所は `/usr/local/bin/v2ray`です。アセットの場所は `/usr/local/share/v2ray` です。

#### スクープ（Windows）

```pwsh
Scoop install v2ray
```

Scoopでインストールする場合、V2Rayの実行ファイルの場所は `<User Directory>\scoop\apps\v2ray\v2ray.exe`、アセットの場所は `<User Directory>\scoop\apps\v2ray\current` です。

#### Chocolatey (Windows)

```cmd
choco install v2ray
```

`X:\tools\v2ray` (**_X_** はシステムディスクドライブ) にソフトウェアがインストールされます。

#### Debian、Ubuntu、その他のDebianベースの派生物。

<https://apt.v2fly.org> を参照してください。

#### Arch Linuxとその派生物

```bash
sudo pacman -S v2ray
```

バイナリは `/usr/bin/v2ray`にインストールされ、リソースファイルは `/usr/share/v2ray/` に置かれます。

#### V2Ray 公式インストールスクリプト (SystemdのLinuxディストリビューションを使用)

See <https://github.com/v2fly/fhs-install-v2ray>

このスクリプトは V2Ray をサーバーとしてインストールするように設計されていますが、問題なくクライアントとして使用できます。 Qv2rayで使用する場合は、サーバーサービスをオフにすることをお勧めします。

```bash
systemctl disable v2ray --now
```

### 手動ダウンロード

**公式ダウンロード リンク：** <https://github.com/v2fly/v2ray-core/releases>

v2rayコアファイルを固定位置に抽出します。 As a default, it is suggested to extract the files into `$QV2RAY_CONFIG_PATH/vcore`, where `$QV2RAY_CONFIG_PATH` is the directory where Qv2ray store it’s data.

ディレクトリ `vcore` は以下の場所のいずれかにあります。

- `./config/` (`config` サブディレクトリ Qv2ray 実行可能ファイルはさておき、Windows ユーザーに推奨されます)
- `~/.qv2ray/` (ホームフォルダの専用ディレクトリ)
- `~/.config/qv2ray/` (標準のXDG設定パス)

その後、これらのファイルが `vcore` ディレクトリに直接存在することを確認してください:

1. `v2ray` / `v2ray.exe`: コア実行可能ファイル
2. `v2ctl` / `v2ctl.exe`: コア制御プログラム
3. `geoip.dat`: IPルールデータベース
4. `geosite.dat`: ドメインルールデータベース

:::warning Linux / macOS ユーザ向けの特別なヒント **実行可能権限を** `v2ray` と `v2ctl` に付与する必要があります。 これは通常、これらのファイルで `chmod +x` を実行することによって行われます。

macOS では、Homebrew で v2ray-core をインストールする場合、このヒントは無視できます。 :::

## Qv2rayでV2Rayコアを設定する

Qv2rayを開き、Preferenceウィンドウに移動します。 **[Core Settings](qv2ray://open/preference/kernel)**では、次のオプションを構成します。

- **Core Executable Path**: V2Ray 実行可能ファイルが存在する場所に設定する。 これは、Windows 上の `v2ray.exe` のフルパス、または Linux / macOS 上の `v2ray` の実行ファイルになります。
- **V2Ray Assets Directory**: `geoip.dat` と `geosite.dat` がある場所に設定してください。

設定後、 **Check V2Ray Core Settings** ボタンをクリックして、V2Ray コア設定を検証できます。 チェックが完了するまで、試行を繰り返します。

:::warning No Matryoshka! 決して決して **コア実行パス** を **Qv2ray Executable**に指してください! Qv2rayはシングルインスタンスであるため、フォーク爆弾は発生しません。 Do note that V2Ray Core Executable is like `v2ray` , `v2ray.exe` or `wv2ray.exe`, instead of `qv2ray` or `qv2ray.exe`, `v2rayN.exe`! :::
