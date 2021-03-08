---
title: CMake Argument Reference
---

# CMake Argument Reference

## `最小値を使用します。`
- デフォルト: `OFF`
- 説明: コンパイルにはMinGWとgccを使用します。

## `QV2RAY`
- デフォルト: `ON`
- 説明: コンパイルが成功した後、自動的に `windeployqt` と `macdeployqt` を実行します。

## `テストをビルド`
- デフォルト: `OFF`
- 説明: `オン`に設定すると、単体テストが構築されます。

## `QV2RAY_DEFAULT_VASSETS_PATH` と `QV2RAY_DEFAULT_VCORE_PATH`
- デフォルト: `unset`, 設定されたとき, 指定されたパスは初回起動時に検出されます.
- V2Ray Coreパスが固定された環境でQv2rayが分散される場合に便利です。

## `QV2RAY_DISABLE_UPDATE`
- デフォルト: `OFF`
- 説明: ビルトインの新しいバージョンチェッカーが無効になります。 これは、パッケージマネージャが制御するソースを介して Qv2ray を配布する場合に便利です。

## `QV2RAY_BUILD_INFO` / `QV2RAY_BUILD_EXTRA_INFO`
- デフォルト: `手動ビルドから Qv2ray` と ***バージョン番号***
- 説明: これらの文字列は Qv2ray の "About" ダイアログに表示されます。
- 注意: 同じ名前の環境変数を使用することもできます。

## `QV2RAY_HAS_THEMES`
- デフォルト: `ON`
- 説明: 組み込みのテーマ ( `psblack` や `flatwhite` など) を有効にします。

## `QV2RAY_HAS_BUILTIN`
- デフォルト: `ON`
- 説明: Qv2ray と一緒に `QvPlugin-BuiltinProtocolSupport` プラグインをビルドします。

## `QV2RAY_HAS_BUILTIN_SUBSCRIPTION`
- デフォルト: `ON`
- 説明: Qv2ray と一緒に `QvPlugin-BuiltinSubscriptionSupport` プラグインをビルドします。

## `QV2RAY`
- デフォルト: `ON`
- 説明:`/usr/share/qv2ray/translations/`のような共有アセットではなく、翻訳リソース ( `*.qm` ) を Qv2ray バイナリに埋め込む。

## `QV2RAY_HAS_<unk>`
- その他
- デフォルト: `ON`
- 説明: SingleApplication を使用して単一のアプリケーション インスタンスを処理します。

## `QV2RAY_SINGLEAPPLICATION_PROVIDER` / `QV2RAY_QNODEDITOR_PROVIDER`
- その他
- デフォルト: `モジュール`
- 説明: コンポーネントプロバイダは、パッケージとして発見された場合、 `パッケージ` に設定します。

## `QV2RAY`
- その他
- デフォルト: `QWidget`
- 説明: Qv2ray GUI タイプ、可能な値は `QWidget`、 `QML` および `CLI` です。
- 非推奨: Qv2ray v3.0 では、GUI コンポーネントがプラグインに分割されます。

## `QV2RAY`
- デフォルト: `OFF`
- 説明: Qv2ray を Qt6 に対して明示的にコンパイルする
- 非推奨: Qv2ray v3.0 では、Qt6 のみサポートされています

## `QV2RAY_QML_LIVE_UPDATE`
- その他
- 実験
- デフォルト: `OFF`
- 説明: QMLLiveをライブQMLリロードに統合します。

## `QV2RAY_PATH`
- Default: `unset`
- 説明: 設定すると、指定されたパスが翻訳ファイルの検索に使用されます。

## `システムLIBUGを使用`
- デフォルト: `OFF`
- 説明: `オン`に設定すると、システム パッケージから `libuv` が動的にリンクされます。 これをオンにしたい場合は、 `libuv` のバージョンに極端に注意してください。
