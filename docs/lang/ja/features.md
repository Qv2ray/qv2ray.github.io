---
title: 特徴
---

# 特徴

## 在庫状況

| Windows                                                                                       | Linux                                                                                                                                                                | macOS                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ポータブルバージョン](https://github.com/Qv2ray/Qv2ray/releases/latest)                                | AppImage [安定](https://github.com/Qv2ray/Qv2ray/releases/latest) / [テスト](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+matrix+-+cmake%22) | DMGインストーラ [安定版](https://github.com/Qv2ray/Qv2ray/releases/latest) / [テスト](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+matrix+-+cmake%22) |
| [インストーラのバージョン](https://github.com/Qv2ray/Qv2ray/releases/latest)                              | ArchLinuxCN [安定性](https://build.archlinuxcn.org/packages/#/qv2ray) / [テスト](https://build.archlinuxcn.org/packages/#/qv2ray-dev-git)                                  | Homebrew Cask [安定](https://formulae.brew.sh/cask/qv2ray)                                                                                                               |
| [スクープパッケージマネージャー](https://github.com/lukesampson/scoop-extras/blob/master/bucket/qv2ray.json) | AUR [安定性](https://aur.archlinux.org/packages/qv2ray) / [テスト](https://aur.archlinux.org/packages/qv2ray-dev-git)                                                      |                                                                                                                                                                        |
|                                                                                               | Debian [安定版](https://github.com/Qv2ray/Qv2ray/releases/latest) / [テスト](https://github.com/Qv2ray/Qv2ray/actions?query=workflow%3A%22Qv2ray+build+debian+package%22)  |                                                                                                                                                                        |
|                                                                                               | Fedora [安定版](https://build.opensuse.org/package/show/home:zzndb/Qv2ray) / [テスト](https://build.opensuse.org/package/show/home:zzndb/Qv2ray-preview)                   |                                                                                                                                                                        |
|                                                                                               | openSUSE [安定](https://build.opensuse.org/package/show/home:zzndb/Qv2ray) / [テスト](https://build.opensuse.org/package/show/home:zzndb/Qv2ray-preview)                  |                                                                                                                                                                        |
|                                                                                               | Flathub [安定](https://flathub.org/apps/details/com.github.Qv2ray)                                                                                                     |                                                                                                                                                                        |
|                                                                                               | Snapcraft [安定版 / RC / テスト](https://snapcraft.io/qv2ray)                                                                                                              |                                                                                                                                                                        |

## 特別な機能

### プラグインのサポート

当社のプラグインシステムでは、Qv2ray内でTrojan/SSRを一緒に使用できます。

[は、V2ray が提供する robost ルーティング エンジン](plugins/v2ray-integration.md) の恩恵を受けます。

**これ以上のバギーPAC設定はありません**

**ワンGUI内のSSR / Trojan(そして将来的にはさらに多くの)接続を想像してみてください。**

### ルーティングマトリクス

Qv2rayの内蔵ルーティングマトリクスにより、カスタムルーティングスキームを設定できます。 特にウェブサイトにアクセスしたい場合は特にデフォルトのルーティングルールではないプロキシがあります

**V2ray のルーティング構文に従っていますが、自動補完機能付き（タイポフリー）**

### フル機能の V2ray 設定 GUI

フル機能の複雑なエディタを使用すると、独自の接続設定を作成、編集できます。 ルーティングテーブル、複数のインバウンド/アウトバウンドを含みます。

**V2rayのJSON設定ファイルを直接書くのと同じですが、強力なGUIを使用すると、**

### V2ray Log Highlighter

事態がうまくいかなかった場合、V2線のログは最も理解が難しいことです。

Qv2rayはV2rayのログ出力用のシンタックスハイライトを提供します。

**接続の問題をデバッグするときに時間を節約します。**

## 一般的な機能

### 接続のインポート

- 多彩なホストインポート
  - エラー許容誤差でバッチ処理されたVmistのインポート
  - JSON ファイルから直接インポート
  - QRコード/QRコードファイルのインポート
  - 詳細/手動設定
- サブスクリプション

  - 手動アップデート
  - 自動アップデート

### 接続編集

- 内蔵のホストエディター

  - シンプルなアウトバウンドエディター
  - カスタムJSONエディター

- 全機能サポート

  - 自動接続
  - 多重化
  - システムログインで開始
  - システムプロキシ統合 (Windows/macOS/Linux GNOMEとKDE)

### 接続のエクスポート

- QRコードとしてエクスポート
- **シングル** の接続共有リンクをエクスポート
- **グループ** の接続共有リンクをエクスポート

### 項目管理

- リアルタイム速度 & データ使用量監視

  - ステータスバーのインバウンド/アウトバウンド統計情報
  - **専用速度グラフ**

- レイテンシテスト (TCP)

  - シングルホストテスト
  - バッチテスト
