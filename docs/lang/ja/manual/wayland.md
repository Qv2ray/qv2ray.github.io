---
title: ウェイランドについてのいくつかのノート
---

# ウェイランドについてのいくつかのノート

**注意: このセクションは GNU/Linux システム** にのみ適用されます。

## 実行

Qv2rayは、Waylandディスプレイプロトコルを完全にサポートするネイティブQt5/C++プログラムです。 ただし、Qv2rayがWaylandプロトコルで実行されるには、Waylandセッション(Gnomeセッション、KDEのWaylandセッション、Swayなど)が必要です。 また、Qt5 の Wayland サポート (通常はパッケージ名 `qt5-wayland` または `(qtwayland5` ) をインストールする必要があります。

すべてが整っている場合は、Wayland ディスプレイプロトコルで Qv2ray を実行しようとすることができます。

### Gnome 環境

Gnome環境でのQt5プログラムは、Xorgプロトコル(WaylandのXorgのフォールバックモード)を使用してデフォルトでXwaylandで実行されます。 したがって、Qv2rayをWaylandディスプレイプロトコルで実行させるには、次のコマンドを実行する必要があります。

```bash
env QT_QPA_PLATFORM=wayland qv2ray
```

次のように動作します。

[![Qv2ray on Wayland in Gnome Session](https://s1.ax1x.com/2020/11/07/BIuwb4.png)](https://imgchr.com/i/BIuwb4)

Qv2rayが起動時にWaylandディスプレイプロトコルを使用できるように、 `QT_QPA_PLATFORM=wayland` をQv2rayのデスクトップファイルに追加できます。

### KDE プラズマ・ウェイランドセッション

理論的には、ウェイランド表示プロトコルがデフォルトですが、これは検証されていません。 Qv2rayは、上記と同じ方法でWaylandディスプレイプロトコルに従うように指定されています。

### スウェイ

テストされておらず、使用経験のある方からの寄付は歓迎します。 ウェイランド表示プロトコルに従うようにQv2rayを指定することは上記と同じです。

## トラブルシューティング

### ウェイランドでは実行できません

Xorg ベースのデスクトップ セッションを使用しているか、Qt5 の Wayland コンポーネントがインストールされていない可能性があります。 または、静的に Qv2ray をコンパイルしていますが、Qt5 の Wayland コンポーネントは含まれていません。

### ウェイランド表示プロトコルの下で実行されている壁の登り速度は上がっていますか?

いいえ結構です。

### KDE Wayland セッションでの問題

KDE Wayland セッションでは、ログアウトして再度ログインすると、Qv2ray は終了しません。 通知トレイアイコンが表示されず、CPUを大量に使用します。

**解決策は (3 つの選択肢のいずれかを使用する):** 1、Gnome Wayland sessionを使用する 2、KDE プラズマまたは他のデスクトップの Xorg session 3. Qv2rayプロセスを自分で殺してから、もう一度開きます。

> 関連する問題: <https://github.com/Qv2ray/Qv2ray/issues/830>

翻訳済み www.DeepL.com/Translator (無料版)

### Gnomeの下にトレイアイコンがありません

Gnomeデスクトップはトレイアイコンをサポートしていません。 Ubuntu は DBus 通信に基づいて Gnome トレイ拡張をサポートする [拡張](https://extensions.gnome.org/extension/1301/ubuntu-appindicators/) をしました。 これまでのテストの結果、拡張モジュールはArch Linuxの下でWaylandで実行されているQv2rayからトレイを表示することができます。 しかし、Ubuntu Waylandのカスタムセッションの下にそれらを表示しない場合があります。 これは上流の問題であり、このプロジェクトでは対処できません。

### アプリケーションウィンドウはどこですか。

上記のように、GNOME は tray アイコンをサポートしていないので、Wayland の参照コンポジター `weston` も同様です。 With current version, the application main window will be hidden after launch if **_Auto Connect_** is enabled.(see [#1080](https://github.com/Qv2ray/Qv2ray/issues/1080) [#1097](https://github.com/Qv2ray/Qv2ray/issues/1080)). 現在の回避策は、Qv2rayを再度起動することです。その後、メインウィンドウがアクティブになり、表示されます。

## Clipboard

Waylandはクリップボードのインターフェースを持っていないので、 ウェイランドで実行されているアプリケーション間のコピーとペーストに右クリックメニューを使用することはできないかもしれません。 回避策として、 `Ctrl + C/V` を使用してコピーして貼り付けることができます。 コピーと貼り付けの際は、コピーソースウィンドウと貼り付けターゲットウィンドウの両方を同時に開きます。

翻訳済み www.DeepL.com/Translator (無料版)
