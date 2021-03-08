---
title: Qv2ray 配信を取得しています
sidebarDepth: 3
---

# ステップ 1: Qv2ray ディストリビューションを取得する

Qv2rayを始めるには、まずQv2rayのリリースを取得する必要があります。 私たちは、多くの分布方法を提供し、あなたはあなたの好みに応じて選択することができます。

## GitHub がバイナリをリリース

[Qv2ray GitHub Release](https://github.com/Qv2ray/Qv2ray/releases)から安定したリリースバイナリをダウンロードする**Windows**と**macOS**ユーザーに好まれています。 これは、Qv2rayが公式にdistrosでパッケージされていないLinuxユーザーにも適しています。なぜなら、彼らは私たちの **AppImage** リリースを使用できるからです。

次のようにします。

1. Webブラウザで[Qv2ray GitHub Release Page](https://github.com/Qv2ray/Qv2ray/releases)を開きます。
2. リリースからバージョンを選択してください。 または、必要に応じて、[最新の **安定した** リリース](https://github.com/Qv2ray/Qv2ray/releases/latest)を使用することもできます。
3. プラットフォームに合わせてアセットを選択し、ダウンロードしてください！ 例:
   - Windowsユーザーの場合:
     - Windows 10/8.1/7: `Qv2ray.VERSION.Windows-x64/x86.7z` (アーカイブ) または `Qv2ray.VERSION.win32/64.exe` (インストーラ).
     - Windows 2003/XP/2000/ME/98/...: サポートされていません (Qt がサポートしていないため);
   - Linux 64bit ユーザの場合:`Qv2ray.linux-x64.AppImage`.
   - macOS ユーザ向け：
     - macOS 10.14 以降: `Qv2ray.VERSION.macOS-x64.dmg`;
     - macOS 10.13: `qv2ray-legacy.dmg` (もしあれば);
     - macOS 10.12 以前: サポートされていません。
   - Ubuntu 19.04 / Debian 10 (またはそれ以上): ~~`qv2ray_VERSION_amd64.deb`~~ (v2.6.1以降の [Qv2ray Debian リポジトリ](https://qv2ray.github.io/debian/) に移動)
   - Arch Linux Users：`qv2ray-VERSION-1-x86_64.pkg.tar.xz`

`バージョン`はそのリリースのバージョンです。

:::tip Notes for Linux AppImage users 私たちは `glibc` といくつかの基本的な C++ ライブラリを **AppImage** パッケージにバンドルしていますが、いくつかの古いがサポートされている distros をサポートしています。 Distro/OS の新しいバージョンに移動することを強くお勧めします。 :::

:::warning Notes for Windows ARM64 users Windows 10 on ARM users can use `Qv2ray.VERSION.Windows-x86.7z` (archive) or `Qv2ray.VERSION.win32.exe` (Installer) directly, since the operating system has a built-in compatibility layer for x86 architecture. :::

## GitHub アクションアーティファクト

安定したバージョンの機能にうんざりしていて、開発中の新機能を試してみる気がある場合。 GitHub Actionsからアーティファクトをダウンロードできます：

1. Webブラウザで[Qv2ray GitHub Actions Page](https://github.com/Qv2ray/Qv2ray/actions)を開きます。
2. 最近成功したビルド(✔️) として表示されるビルドを選択し、クリックします。 GitHub Buildの詳細ページに移動してください。 [の例](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225) があります。
3. **アーティファクト**ドロップダウンメニューをクリックして展開し、ご使用のプラットフォームに合わせてバイナリを選択します。

:::tip GitHub Actions にアクセスするには、まず GitHub にログインする必要があります。 :::

## パッケージマネージャーからダウンロード

### Debian、Ubuntu、およびその派生物

関連するツールをインストールします。

```bash
sudo apt install gnupg ca-certificates curl
```

#### Debian 安定版 Qv2ray の安定版

キーを追加する (オプションで FastGit を使用してキーを追加することができます)
```bash
curl -sSL https://qv2ray.net/debian/pubkey.gpg | sudo apt-key add -
# curl -sSL https://raw.fastgit.org/Qv2ray/debian/master/pubkey.gpg | sudo apt-key add -
```

ソフトウェア・リポジトリの追加(高速Git加速リポジトリはオンデマンドで有効にできます)
```bash
echo "deb https://qv2ray.net/debian/ stable main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
# echo "deb [arch=amd64] https://raw.fastgit.org/Qv2ray/debian/master/ stable main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
```

Qv2rayをインストール
```bash
sudo apt update; sudo apt install qv2ray
```

#### Debian 安定版Qv2ray の開発版をインストール

Debian の開発版は AMD64, ARM64 と MIPS64EL アーキテクチャをサポートしており、armbian でも使用できます。

キーを追加する (オプションで FastGit を使用してキーを追加する)
```bash
curl -sSL https://qv2ray.net/debian-dev/pubkey.gpg | sudo apt-key add -
# curl -sSL https://raw.fastgit.org/Qv2ray/debian-dev/master/pubkey.gpg | sudo apt-key add -
```

ソフトウェア・リポジトリの追加(高速Git加速リポジトリはオンデマンドで有効にできます)
```bash
echo "deb https://qv2ray.net/debian-dev/ stable main" | sudo tee /etc/apt/sources.list.d/qv2ray-dev.list
# echo "deb https://raw.fastgit.org/Qv2ray/debian-dev/master/ stable main" | sudo tee /etc/apt/sources.list.d/qv2ray-dev.list
```

Qv2rayをインストール
```bash
sudo apt update; sudo apt install qv2ray
```

#### Debian Unstable

unstable ブランチのユーザーとして 安定版の情報を参照することで、リポジトリを追加する能力があると信じています。 Unstable ブランチリポジトリは `unstable` とコードネームされます。

#### Ubuntuとその公式デリバティブはQv2rayの安定版をインストールします

* The following commands are run in `bash`, or if you are using another shell, please run `bash` in the terminal first. *

キーを追加する (オプションで FastGit を使用してキーを追加することができます)
```bash
curl -sSL https://qv2ray.net/debian/pubkey.gpg | sudo apt-key add -
# curl -sSL https://raw.fastgit.org/Qv2ray/debian/master/pubkey.gpg | sudo apt-key add -
```

ソフトウェア・リポジトリの追加(高速Git加速リポジトリはオンデマンドで有効にできます)
```bash
echo "deb https://qv2ray.net/debian/ `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
# echo "deb https://raw.fastgit.org/Qv2ray/debian/master/ `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
```

Qv2rayをインストール
```bash
sudo apt update; sudo apt install qv2ray
```

#### Ubuntuとその公式派生商品はQv2rayの開発バージョンをインストールします

* 次のコマンドは `bash`で実行されるか、別のシェルを使用している場合は、最初に端末で `bash` を実行します。 *

キーを追加する (オプションで FastGit を使用してキーを追加することができます)
```bash
curl -sSL https://qv2ray.net/debian-dev/pubkey.gpg | sudo apt-key add -
# curl -sSL https://raw.fastgit.org/Qv2ray/debian-dev/master/pubkey.gpg | sudo apt-key add -
```

ソフトウェア・リポジトリの追加(高速Git加速リポジトリはオンデマンドで有効にできます)
```bash
echo "deb https://qv2ray.net/debian-dev/ `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray-dev.list
# echo "deb https://raw.fastgit.org/Qv2ray/debian-dev/master/ `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray- dev.list
```

Qv2rayをインストール
```bash
sudo apt update; sudo apt install qv2ray
```

### Arch Linuxベースのdistros

#### `archlinuxcn` から直接インストール

私たちは `archlinuxcn` リポジトリを作成しました。 すでに使用している場合は、端末に入力してください：

```shell
sudo pacman -Syy qv2ray # または qv2ray-dev-git は以下を参照してください。
```

そして、それは行われます。

:::tip システムの V2Ray コアを使用するために `v2ray` パッケージをインストールすることもできます。 :::

:::warning Manjaro Hitchhikers on Arch Linux CN への注意

Manjaro は **Arch Linux のパッケージ変更** を遅らせます。 When there is a breaking ABI change in upstream, **_Arch Linux_ CN** will **prioritize Arch users** instead of those of Manjaro. **Manjaro users of Arch Linux CN** should always **be aware of and bear all consequences caused by the delayed update of its official source**, including issues like `symbol lookup error` and etc. あなたがそれを使用することを主張するなら **Qv2ray または Arch Linux CN にバグとして** しないでください。 トラブルを望まない方は、代わりにAppImage / Snapcraftのバージョンを使用してください。

"Manjaro CN"のようなものが設立され、公式に **そのユーザーのためにQv2ray** パッケージの作業量を取ると、このナグは削除されます。 :::

#### AUR ヘルパーを使用して、AURからダウンロード

You may acquire officially maintained `PKGBUILD` file from AUR (Arch User Repository, [AUR (en) - Home](https://aur.archlinux.org/)), which will instruct the build process of Qv2ray.

You may use an AUR helper such as `yay`, `yaourt`, `pikaur` and so on to automatically handle the build process of AUR packages.

:::tip NoteE 以下の例は `yay` を利用しています。 その他の AUR ヘルパーについては、それぞれのドキュメントで使用方法を確認してください。 :::

まず、AURで `qv2ray` を検索してみてください。

```shell
$ yay -Ss qv2ray
aur/qv2ray-dev-git 1.99.4.r47514d2-1 (+2 0.98%)
     Qt cross platform v2ray GUI client (Dev branch build release)
aur/qv2ray 1.3.8.0-1 (+4 1.23%)
     Qt cross platform v2ray GUI client
```

次に、インストールするQv2rayの適切なバージョンを選択します。 利用可能なバージョンは 2 つあります。

- **安定版**, パッケージ名`qv2ray`. このパッケージはGitリポジトリのmasterブランチから構築されており、慎重なユーザーには十分に安定しています。
- **開発バージョン**, パッケージ名`qv2ray-dev-git`. このパッケージは Git リポジトリの dev ブランチからビルドされます。 最新の機能や改善とともに、不安定な分布を使用する可能性があります。

あなたの実際の状況に応じて選択してください。 ここでは、 `qv2ray-dev-git` をインストールすることを選択します。

```bash
$ yay -S qv2ray-dev-git
```

Qv2rayはコマンドを終了した後に使用する準備ができます。

#### AUR、ハードウェイからダウンロード

AURからQv2rayをインストールするためにAURヘルパーを使用したくない場合があります。 次に、次の例を見てみましょう。

```bash
# 1. AUR リポジトリをクローンする (`qv2ray-dev-git` を例として):
$ git clone https://aur.archlinux.org/qv2ray-dev-git.git

# 2. Enter `PKGBUILD` folder:
$ cd qv2ray-dev-git

# 3. Qv2rayをビルド:
$ makepkg -sf

# 4. ビルド後に生成されたパッケージをインストールします:
$ sudo pacman -U qv2ray-dev-git-v1.99.4.4.2550-1-x86_64.pkg.tar.zst
```

完了しました。

:::tip パッケージファイル名 (`qv2ray-dev-git-v1.99.4.-2550-1-x86_64.pkg.tar.zst`) は実際の Qv2ray のバージョンによって異なります。 それはあなたのマシンで異なるかもしれませんが、それは問題ではありません。 :::

### openSUSE / Fedora / CentOS

> Qv2ray は [@zzndb](https://build.opensuse.org) による [openSUSE Build Service](https://github.com/zzndb) から openSUSE / Fedora / CentOS ユーザー向けに利用できるようになりました。

:::warning 適用されるバージョン Qtバージョンの制限のため。 上記の全ての生涯にわたる気晴らしをサポートすることができないかもしれません。サポートされている気晴らしの詳細は、以下のOBSリンクをご確認ください。 :::

AURと同様に、Qv2rayには2つのバージョンがあります。 あなた自身の味に応じて選択することができます:

- 安定したOBS: [Qv2ray](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray)
- プレビューOBS: [Qv2ray-preview](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview)

または、以下のリンクから直接、より詳細なインストールガイドを入手できます。

- ダウンロード安定版: [Qv2ray](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray)
- プレビューのダウンロード: [Qv2ray-preview](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview)

:::warning For CentOS user Before you install Qv2ray from above OBS project, you need to add the **EPEL** repository which provided by Fedora for extra needed dependencies. 詳細については、 [Fedora EPEL Wiki](https://fedoraproject.org/wiki/EPEL) を参照してください。 :::

:::tip プラグイン 上記の [OBS プロジェクト](https://build.opensuse.org/project/show/home:zzndb:Qv2ray) は Qv2ray ファミリーのプラグインも提供します。 After installing Qv2ray through project's repository (not download & install by hand), you can directly install plugins (with the same name of the plugin's project name, also provide the preview version plugin with `-preview` postfix) using your package manager. :::

### Homebrew (macOS/Linux)

Homebrew を使ってmacOS(およびLinux)に Qv2ray をインストールできます。 まだHomebrewをインストールしていない場合は、Homebrewのウェブサイトでインストール方法の詳細を確認できます。 Homebrewがインストールされたら、以下のコマンドでQv2rayをインストールできます。

```bash
$ brew cask install qv2ray
```

**または、新しいコマンドで**

```bash
$ brew install --cask qv2ray
```

アップグレードも簡単です。コマンドの `` を `アップグレード` に置き換えてください。

プラグインと Qv2ary ベータ版をインストールしたい場合は、 `malt` をタップしてください。

```
brew tap kidonng/malt
brew install qv2ray-beta
# or directly run
brew install kidonng/malt/qv2ray-beta
```

### スクープ（Windows）

> [Scoop](https://scoop.sh) は、 **Windows** 用のコマンドラインベースのソフトウェアパッケージマネージャです。

**Powershell** で以下のコマンドを実行します:

1. [Scoop をインストール](https://scoop.sh/#installs-in-seconds):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser # スクリプトの実行を許可する
   iwr -usb get.scoop.sh | iex
   ```
2. Add `extras` bucket:
   ```powershell
   スクープバケットに追加機能を追加
   ```
3. Qv2rayをインストール:
   ```powershell
   スクープインストール qv2ray
   ```
4. 更新するには、コマンドの `install` を `update` に置き換えてください。

   ```powershell
   スクープアップデート qv2ray
   ```

5. **(任意)** プラグインと Qv2ray ベータをインストールしたい場合は、 `sushi` バケットを追加します。
   ```powershell
   scoop bucket add sushi https://github.com/kidonng/sushi
   # すべてのアプリについては https://github.com/kidonng/sushi#qv2ray
   scoop install qv2ray-beta
   ```

:::tip You may also need to install [the latest Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). :::

### Chocolatey (Windows)

> [Chocolatey](https://chocolatey.org/) は、 **Windows** 用の別のソフトウェアパッケージマネージャーです。

**管理者権限で Powershell を開いて** 以下のコマンドを実行してください:

1. [Chocolatey をインストール](https://chocolatey.org/install)：
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex (New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```
2. Qv2ray をインストール：
   ```powershell
   choco install qv2ray
   ```

## Linuxアプリストアからダウンロード

### Snapcraft

[Snapcraft ページ](https://snapcraft.io/qv2ray) の指示に従ってください。

```shell
# パッケージをインストールするには:
$ sudo snap install qv2ray --edge (dev branch)
# sudo snap install qv2ray -edge (dev branch)
# パッケージを更新するには:
$ sudo snap refresh qv2ray
```

### Flathub (非推奨)

:::warning 非推奨(2020/09/18) メンテナがパッケージを積極的にメンテナンスしていないため、FlathubからQv2rayをインストールすることは公式に **非推奨**です。 これを採用することに興味がある場合は、問題を開き、お知らせください。 :::

1. [公式ドキュメント](https://flatpak.org/setup/) に従ってFlatpak環境を設定します。
2. Qv2rayをインストール:
   ```shell
   # パッケージをインストールするには:
   $ flatpak install com.github.Qv2ray
   # パッケージを更新するには:
   $ flatpak update
   ```

## ソースからビルド

[手動でQv2ray をビルドする](../hacking/manuallybuild.md)ページを参照してください。
