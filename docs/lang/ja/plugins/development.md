---
title: プラグインの書き込み
---

# プラグインの書き込み

- Qv2ray プラグイン文書

## プラグインとは

プラグインは、技術的には、特定のインターフェイスを実装する共有ライブラリです。 `Qv2rayPlugin::QvPluginInterface` この場合。 Qv2rayでロードすることができます。

## プラグインを作成する際の前提条件

### コンパイラのバージョン / オプション

- Linux と macOS の場合、コンパイラーの制限はありません。
- プラグインのコンパイルにはMSVCが必要です。
- `-fno-sized-deallocation` プラグインのコンパイル時、特に「**Github Action** を使用してプラグインを構築する場合に使用する必要があります。

### Qtバージョンの制限

- プラグインがビルドされたバージョンがローダーアプリケーションのバージョンよりも大きいべきではないことはQtの制限です。(この場合はQv2ray)
- `Qt 5.11.3` を使用してプラグインを構築することをお勧めします。

### サードパーティーのリンク時間および/またはランタイム依存関係

- これらの依存関係 **** はプラグインライブラリに静的にリンクされる必要があります。そうでなければ：
  - 依存関係ライブラリをどこからでもダウンロード/インストールするようにユーザーに伝えます。
- **例外: OpenSSL __ は静的にリンクされるべきではありません。**
  - Qv2ray には独自の OpenSSL 依存性チェックがあり、互換性のある OpenSSL がインストールされていることを確認します。

## プラグインの作成

プラグインを開始するときに選択肢は2つあります。

1. 指定された `テンプレート` プロジェクトを使用してプラグインを作成します:

   [QvPlugin-Template](https://github.com/Qv2ray/QvPlugin-Template)と呼ばれるリポジトリがあり、独自のプラグインを作成するために使用できます。

2. 最初からプラグインを作成します。

### 1. テンプレート プロジェクトの使用

1. Github Repositoryページの「このプラグインを使用」をクリックし、指示に従ってください。
2. 作成したリポジトリをクローンします。
3. Github はテンプレートリポジトリ内でサブモジュールデータを保持していないため、コマンドを実行します。

   ```bash
   git submodule add --force https://github.com/Qv2ray/QvPlugin-Interface/ ./interface
   ```

4. Select your `Build Generator`, by doing: Remove unwanted project files e.g. `QvSimplePlugin.pro` or `CMakeLists.txt` Remove unwanted CI configurations by removing it from `./.github/workflows/`

5. QtCreatorで `.pro` ファイルまたは `CMakeLists.txt` を開きます。
6. Do any modifications **especially plugin metadata** in the `QvSimplePlugin.hpp`
7. ローカルでビルドをテストし、Github Actionが通過できるかどうかを確認するためにGithubにプッシュします。

### 2. 最初からプラグインを作成する

1. git リポジトリを作成
2. プラグインインターフェイスをサブモジュールとして `https://github.com/Qv2ray/QvPlugin-Interface/` に追加する
3. `QvPluginInterface.cmake` または `QvPluginInterface.pri` をプロジェクト ファイルに含めます。
4. `Qv2rayPlugin::Qv2rayInterface` を継承し、すべての仮想関数を実装するクラスを作成します。
5. これらの関数のスロット宣言を追加:

   ```cpp
   void PluginLog(const QString &) const;
   void PluginErrorMessageBox(const QString &);
   ```

6. プラグインがメタデータに `SPECIAL_TYPE_KERNEL` を持たない場合は、 `GetPluginKernel` 関数で `nullptr` を返すことができます。 `GetSerializer`と同じですが、 ** `nullptr` を `GetEventHandler()`** では返しません。
