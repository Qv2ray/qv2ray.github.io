---
title: Qv2ray 配信を取得しています
sidebarDepth: 3
---

# Step 1: Obtaining Qv2ray

To get started with Qv2ray, you should first obtain it (Why not?).

- 私たちは、多くの分布方法を提供し、あなたはあなたの好みに応じて選択することができます。

## From a Package Manager

### Linux: Debian, Ubuntu and their derivatives

1. 関連するツールをインストールします。

    ```bash
    # apt install gnupg ca-certificates curl
    ```

2. Follow the steps at [our debian repo](https://qv2ray.net/debian)


3. Qv2rayをインストール

    ```bash
    # apt update; sudo apt install qv2ray
    ```

### Linux: Arch Linux-based distros

**`archlinuxcn` から直接インストール**

私たちは `archlinuxcn` リポジトリを作成しました。 すでに使用している場合は、端末に入力してください：

```shell
sudo pacman -Syy qv2ray # または qv2ray-dev-git は以下を参照してください。
```

そして、それは行われます。

:::warning Manjaro Hitchhikers on Arch Linux CN への注意

Manjaro は **Arch Linux のパッケージ変更** を遅らせます。 When there is a breaking ABI change in upstream, **_Arch Linux_ CN** will **prioritize Arch users** instead of those of Manjaro. **Manjaro users of Arch Linux CN** should always **be aware of and bear all consequences caused by the delayed update of its official source**, including issues like `symbol lookup error` and etc. あなたがそれを使用することを主張するなら **Qv2ray または Arch Linux CN にバグとして** しないでください。 For those who don't want trouble, please use other versions instead.

This nag will be removed whenever something like "Manjaro CN" is founded and officially **takes the workload of packaging Qv2ray** for its users. :::

**AUR ヘルパーを使用して、AURからダウンロード**

You may acquire officially maintained `PKGBUILD` file from AUR (Arch User Repository, [AUR (en) - Home](https://aur.archlinux.org/)), which will instruct the build process of Qv2ray.

All Qv2ray plugins are currently in AUR.

### Linux: openSUSE / Fedora / CentOS

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

### Linux / macOS: Homebrew

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

### Windows: Scoop

> [Scoop](https://scoop.sh) は、 **Windows** 用のコマンドラインベースのソフトウェアパッケージマネージャです。

Run the following commands in **PowerShell**:

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

### Windows: Chocolatey

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

## From AppStore

### Linux: Snapcraft

[Snapcraft ページ](https://snapcraft.io/qv2ray) の指示に従ってください。

```shell
# パッケージをインストールするには:
$ sudo snap install qv2ray --edge (dev branch)
# sudo snap install qv2ray -edge (dev branch)
# パッケージを更新するには:
$ sudo snap refresh qv2ray
```

### Linux: Flathub (Deprecated)

:::warning 非推奨(2020/09/18) メンテナがパッケージを積極的にメンテナンスしていないため、FlathubからQv2rayをインストールすることは公式に **非推奨**です。 これを採用することに興味がある場合は、問題を開き、お知らせください。 :::

1. [公式ドキュメント](https://flatpak.org/setup/) に従ってFlatpak環境を設定します。
2. Qv2rayをインストール:
   ```shell
   # パッケージをインストールするには:
   $ flatpak install com.github.Qv2ray
   # パッケージを更新するには:
   $ flatpak update
   ```




## GitHub がバイナリをリリース

Downloading the release from [Qv2ray Release Page](https://github.com/Qv2ray/Qv2ray/releases) is favored for someone who ***does not want to use Package Managers***.

This is also suitable for Linux users where Qv2ray is not officially packaged in their distros.

次のようにします。

1. Navigate to [Qv2ray GitHub Release Page](https://github.com/Qv2ray/Qv2ray/releases) in a **web** browser.
2. リリースからバージョンを選択してください。 または、必要に応じて、[最新の **安定した** リリース](https://github.com/Qv2ray/Qv2ray/releases/latest)を使用することもできます。
3. プラットフォームに合わせてアセットを選択し、ダウンロードしてください！ 例:
   - Windowsユーザーの場合:
     - Windows 7/8/8.1/10: `Qv2ray.VERSION.Windows-x64.7z` (Archive) or `Qv2ray.VERSION.win64.exe` (Installer).
     - Windows 2003/XP/2000/ME/98/...: ***Are you kidding me bro?***
   - Linux 64bit ユーザの場合:`Qv2ray.linux-x64.AppImage`.
   - macOS ユーザ向け：
     - macOS 10.14 以降: `Qv2ray.VERSION.macOS-x64.dmg`;
     - macOS 10.13: `qv2ray-legacy.dmg` (もしあれば);
     - macOS 10.12 and before: ***Try Upgrading Your macOS***.

:::tip Notes for Linux AppImage users 私たちは `glibc` といくつかの基本的な C++ ライブラリを **AppImage** パッケージにバンドルしていますが、いくつかの古いがサポートされている distros をサポートしています。 Distro/OS の新しいバージョンに移動することを強くお勧めします。 :::

:::warning Notes for Windows ARM64 users Windows 10 on ARM added an emulation layer for x86_64 apps in *build 21277*, users can use the x64 version with the latest Windows Insider Preview. :::

## GitHub Actions

安定したバージョンの機能にうんざりしていて、開発中の新機能を試してみる気がある場合。 GitHub Actionsからアーティファクトをダウンロードできます：

1. Webブラウザで[Qv2ray GitHub Actions Page](https://github.com/Qv2ray/Qv2ray/actions)を開きます。
2. 最近成功したビルド(✔️) として表示されるビルドを選択し、クリックします。 GitHub Buildの詳細ページに移動してください。 [の例](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225) があります。
3. **アーティファクト**ドロップダウンメニューをクリックして展開し、ご使用のプラットフォームに合わせてバイナリを選択します。

TODO: Branch Selection Tips

:::tip GitHub Actions にアクセスするには、まず GitHub にログインする必要があります。 :::

## ソースからビルド

[手動でQv2ray をビルドする](../hacking/manuallybuild.md)ページを参照してください。
