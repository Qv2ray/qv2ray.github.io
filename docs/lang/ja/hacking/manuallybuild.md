---
title: Qv2ray を手動でビルド
---

# Qv2ray を手動でビルド

ハッカーがQv2rayを手動でコンパイルしたい場合。

## 0. 要件と依存関係

すべての要件を満たしていることを確認してください。

- `x64`デスクトッププラットフォームのみ。
- `arm`, `arm64`, `x86`, `x86_64` Androidプラットフォーム用.

- Qt version`>= 5.11` is required for desktop platforms, `>= 6.0` required for Android
  - ~~Qv2rayを以前またはそれ以降のQt.~に移植する場合は気にしないでください。
  - その場合は、 `CMakeLists.txt` で `QV_QT_MAJOR_VERSION` と `QV_QT_MINOR_VERSION` を変更することができます。
- 最新バージョンのQtは常にサポートされ、推奨されています
- `std=c++17` をサポートするコンパイラ:
  - `gcc7`はうまくいくことが知られている。
  - 少なくともMSVCのバージョン14.2が必要です。

- サードパーティ製ライブラリ: (gRPC, protobuf, curl, openssl)

    | ターゲットプラットフォーム   | インストール方法                                                              |
    | --------------- | --------------------------------------------------------------------- |
    | Linux           | 対応するパッケージをインストール                                                      |
    | Windows (MSVC)  | `vcpkg` を使用するか、 [**のビルド済みバイナリ**を使用してください](#a-prebuilt-binaries)       |
    | Windows (MinGW) | [の下を見る](#mingw-packages)                                              |
    | macOS           | `homebrew`を使ってパッケージをインストールします（注意: curl がプリインストールされています）               |
    | Android         | Linux ホストがサポートされています。 [**事前ビルドバイナリ**](#a-prebuilt-binaries) を使用してください |

    :::tip Extra Git Submoule for Android [android-openssl](https://github.com/KDAB/android_openssl) は OpenSSL バイナリを提供します: use `git clone https://github.com/KDAB/android_openssl 3rdparty/android-openssl` :::

### a 構築済みのバイナリ
- [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps/) リポジトリは、WindowsとAndroidをターゲットとするライブラリの依存関係を構築し提供する場所です。
- Android版では、 [パッチを当てた](https://github.com/Qv2ray/Qv2ray-deps/blob/master/0001_vcpkg_fix_curl_android_build.patch) vcpkgを使用しています。

#### a.1 ダウンロード / 抽出スクリプト
**余分な依存関係: bash, jq, curl, 7zip** (特に Windows ユーザ向け)

`./libs/setup-lib.sh` を用意し、ビルド済みのバイナリを簡単にインストールできるようにしました。
- `cd` to `libs` ディレクトリ
- `./setup-libs <PLATFORM> <ARCH>`
  - 例: `./setup-libs.sh windows x64` または `./setup-libs.sh android arm`
  - 可能な `<PLATFORM>` 値: `windows`, `linux`, `android`
  - possible `<ARCH>` values: `x86`, `x64`, `arm`, `arm64`
  - LinuxでAndroidにクロスコンパイルするときにProtobufジェネレータバイナリをインストールするには、 `<ARCH>` を `tools` に設定してください。

スクリプトは [このリリース](https://github.com/Qv2ray/Qv2ray-deps/releases/tag/release) からパッケージをダウンロードし、内容をcorrensponding `./libs/ARCH-PLATFORM/` ディレクトリに移動します。

#### a.2 手動でビルド済みのバイナリを取得

- 7zファイルをダウンロード
- `{7Z_ROOT}/PLATFORM-ARCH/installed/ARCH-PLATFORM` を `./libs/` ディレクトリに展開して移動します。
- `include`, `lib` または `` サブディレクトリを `./libs/ARCH-PLATFORM` で共有する必要があります。
  - 例: `./libs/x86-android/include` または `./libs/x64-windows/include/` が存在します

### MinGWパッケージ:
MSYS2が提案されているパッケージ:
- `mingw-w64-x86_64-grpc`
- `mingw-w64-x86_64-curl`
- `mingw-w64-x86_64-protobuf`
- `mingw-w64-x86_64-protobuf-c`
- `mingw-w64-x86_64-pkg-config`
- `mingw-w64-x86_64-re2`

## 1. ソースツリーの取得

Qv2rayのソースコードを取得するには様々なアプローチがあります。 以下から入手できます:
- Git:`https://github.com/Qv2ray/Qv2ray.git`
- ブランチのソースコードを直接ダウンロードする (**git submodule metadata がないため、これを行うことはありません。 ** )**) :::tip `git clone` `--branch <branch/tag>` クローン作成後に特定のブランチ/タグをチェックアウトすることができます。 :::</li> </ul>

:::warning Qv2ray にはネストされたサブモジュールが含まれており、クローンするときは常に `--recursive` を使用します。 :::

## 2. コンパイルディレクトリに入る

次のステップでは、適切な `PATH`を必要とします。つまり、 `qmake` は `PATH` にあります。

実行: `mkdir build; cd build;`
- 単にソースツリーの汚染を防ぐために。

## 3. コンパイルスクリプトの生成

**は** [CMake Argument References](cmake-argument) をチェックし、独自のものを追加する必要があります。

実行: `cmake ..`

***Androidでは、 `qt-cmake ..` を使用することをお勧めします。 `cmake ..` の代わりに。***

- `CMAKE_INSTALL_PREFIX` は、必要なすべてのファイルを一度にパッケージ化して収集するために常に提案されています。
- `CMAKE_BUILD_TYPE` は常に提案されています。 [CMake Documentation](https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html) を参照してください。
  - `Debug` と `Release` ビルドは、Qv2ray 設定ディレクトリの名前が異なります。 開発ビルドが構成のコピーを損なうのを防ぐために
- `-GNinja` が提案されている, iff you have `Ninja` or `ninja-build` がインストールされている.
- `ANDROID_SDK_ROOT` または `ANDROID_NDK_ROOT` は、Android では必須である。

## 4. コンパイルを開始

コンパイルを開始します！

実行: `cmake --build .`
- `--parallel <NUMBER>` は十分な計算能力があり、並列コンパイルを実行したい場合は sugguest です。

## 5. コンパイルを完了

コンパイルされたアーティファクトとリソースを宛先ディレクトリにコピーします。

実行: `cmake --install .` または `sudo`

- 全ての依存関係を `CMAKE_INSTALL_PREFIX` に自動的にコピーします。

:::warning `macdeployqt` に `libabsl_debugging_internal` がデバッグライブラリとして認識されるバグがあります。 QPlatformPlugin を防ぎます (例: QCocoaPlugin)がデプロイされていません。 これにより、「プラットフォームプラグインが見つかりません」という実行時例外が発生します。

代わりに [Qv2ray-patched `macdeployqt`](https://github.com/Qv2ray/macdeployqt-patched) を使用してください。 Qt5とQt6の両方をサポートする :::

## 6. 完了
Qv2rayをコンパイルして配備しました！

ハッキングを開始し、Qv2rayに貢献することを歓迎!
