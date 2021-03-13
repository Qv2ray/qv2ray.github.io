---
title: 第一步：获取 Qv2ray 分发
sidebarDepth: 3
---

# 第 1 步：获取 Qv2ray

要开始使用 Qv2ray，那就得先以某种方式获取到它。

- 我们提供了许多种方式，您可以根据您的喜好选择。

## 来自软件包管理器

### Linux: Debian, Ubuntu 及其衍生发行版

1. 安装相关的工具

    ```bash
    # apt install gnupg ca-certificates curl
    ```

2. 请跟随 [我们的 debian 仓库](https://qv2ray.net/debian) 中的步骤进行操作


3. 安装 Qv2ray

    ```bash
    # apt update; sudo apt install qv2ray
    ```

### Linux: Arch Linux 或基于 Arch 的发行版

**直接从 `arclinuxcn 安装`**

我们已经进入 `archlinuxcn` 仓库。 如果您已在使用 archcn，只需在终端中输入：

```shell
sudo pacman -Syy qv2ray # 或者 qv2ray-dev-git
```

然后就完事了

:::warning Arch Linux CN 中的 Manjaro Hitchhikers

Manjaro 会 **延迟Arch Linux 的软件包更改**。 当 ABI 在上游出现意外变动时， **_Arch Linux_ CN** 将 **优先 Arch 用户** 而不是Manjaro。 **使用 Arch Linux CN 的 Manjaro** 用户应该清楚**这样偷包/延迟更新的严重后果** 包括处理 `symbol lookup error` 此类错误的能力。 如果您坚持要使用它， 请 **不要以任何方式提交 Issue 到 Qv2ray 或 Arch Linux CN**。 对于那些不想麻烦的人，请使用其他版本。

如果出现了 “Manjaro CN” 此类组织，并且官方 **为其用户提供了 Qv2ray** 后，这一章节将会被立即删除。 :::

**使用 AUR 助手从 AUR 下载**

您可以从 AUR (Arch 用户仓库) 获取官方维护的`PKGBUILD`文件。[AUR (en) - Home](https://aur.archlinux.org/), 它将指导 Qv2ray 的构建过程。

所有 Qv2ray 插件目前都在 AUR

### Linux: openSUSE / Fedora / CentOS

> 由 [@zzndb](https://github.com/zzndb) 提供的给 [openSUSE / Fedora / CentOS 用户](https://build.opensuse.org) 的 openSUSE 构建服务。

:::warning 适用版本 因为 Qt 版本的限制， 我们可能无法支持上面所有发行版本，有关支持的发行版详请，请检查下面的 OBS 链接。 :::

类似于AUR, 有两个版本的 Qv2ray 可供使用。 您可以根据自己的爱好选择：

- 稳定版 OBS: [Qv2ray](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray)
- 预览版 OBS： [Qv2ray-预览](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview)

或者您可以直接从下面的链接获取更详细的安装指南：

- 下载 Stable 版: [Qv2ray](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray)
- 下载 Preview 版: [Qv2ray-preview](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview)

::::warning CentOS 用户 在您安装OBS 项目上方的 Qv2ray 之前。 您需要添加 **EPEL** 仓库，这是 Fedora 为额外需要的依赖提供的。 有关更多信息，请看 [Fedora EPELWiki](https://fedoraproject.org/wiki/EPEL)。 :::

:::tip 插件呢？ 以上 [OBS 项目](https://build.opensuse.org/project/show/home:zzndb:Qv2ray) 也提供 Qv2ray 家族的插件。 这样安装 Qv2ray 之后 (不是手动下载 & 安装那种)， 您可以直接使用包管理器安装插件(插件名字与插件项目名字相同.此外，我们还提供带有 `-preview` 后缀的预览版本插件。 :::

### Linux / macOS: Homebrew

您可以使用 Homebrew 在 macOS 上安装 Qv2ray (可能 Linux 也行)。 如果您还没安装 Homebrew ，可以查看 Homebrew 网站了解更多信息。 Homebrew 安装完毕后，您可以使用以下命令安装 Qv2ray

```bash
$ brew cask install qv2ray
```

**或者使用新命令**

```bash
$ brew install --cask qv2ray
```

更新也很容易，仅需要将 `install` 替换成 `upgrade` 即可

如果您想要安装插件和 Qv2ary 的 Beta 版本, 请添加 `malt` Tap：

```
brew tap kidonng/malt
brew install qv2ray-beta
# Or directly run
brew install kidonng/malt/qv2ray-beta
```

### Windows: Scoop

> [Scoop](https://scoop.sh) is a command-line-based software packages manager for **Windows**.

Run the following commands in **PowerShell**:

1. [Install Scoop](https://scoop.sh/#installs-in-seconds):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser # Allow script execution
   iwr -useb get.scoop.sh | iex
   ```
2. 添加 `extras` 桶：
   ```powershell
   scoop bucket add extras
   ```
3. Install Qv2ray:
   ```powershell
   scoop install qv2ray
   ```
4. To update, just replace `install` with `update` in the commands:

   ```powershell
   scoop update qv2ray
   ```

5. **(Optional)** If you want to install plugins and Qv2ray beta, add `sushi` bucket:
   ```powershell
   scoop bucket add sushi https://github.com/kidonng/sushi
   # For all apps see https://github.com/kidonng/sushi#qv2ray
   scoop install qv2ray-beta
   ```

:::tip You may also need to install [the latest Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads). :::

### Windows: Chocolatey

> [Chocolatey](https://chocolatey.org/) is another software packages manager for **Windows**。

**Please open Powershell with administrator permission** and run the following commands:

1. [Install Chocolatey](https://chocolatey.org/install)：
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```
2. Install Qv2ray：
   ```powershell
   choco install qv2ray
   ```

## From AppStore

### Linux: Snapcraft

Follow the instructions on our [Snapcraft page](https://snapcraft.io/qv2ray).

```shell
# To install the package:
$ sudo snap install qv2ray
# sudo snap install qv2ray --edge (dev branch)
# To update the package:
$ sudo snap refresh qv2ray
```

### Linux: Flathub (Deprecated)

:::warning Deprecated (2020/09/18) Installation of Qv2ray from Flathub is officially **deprecated**, since the maintainer is no longer actively maintaining the package. If you are interested in adopting this, please open an issue and let us know. :::

1. Set up Flatpak environment according to the [official documentation](https://flatpak.org/setup/).
2. Install Qv2ray:
   ```shell
   # To install the package:
   $ flatpak install com.github.Qv2ray
   # To update the package:
   $ flatpak update
   ```




## GitHub Release 二进制文件

Downloading the release from [Qv2ray Release Page](https://github.com/Qv2ray/Qv2ray/releases) is favored for someone who ***does not want to use Package Managers***.

This is also suitable for Linux users where Qv2ray is not officially packaged in their distros.

Do as the follows:

1. Navigate to [Qv2ray GitHub Release Page](https://github.com/Qv2ray/Qv2ray/releases) in a **web** browser.
2. 从 Release 中选择一个版本。 或者，您可以选择使用 [最新的**稳定版**发布](https://github.com/Qv2ray/Qv2ray/releases/latest)。
3. 根据你的的平台，在 Release Assets 中选择并下载。 For example:
   - 对于 Windows 用户：
     - Windows 7/8/8.1/10: `Qv2ray.VERSION.Windows-x64.7z` (Archive) or `Qv2ray.VERSION.win64.exe` (Installer).
     - Windows 2003/XP/2000/ME/98/...: ***Are you kidding me bro?***
   - 对于 Linux 64bit 用户：`Qv2ray.VERSION.linux-x64.AppImage`。
   - 对于 macOS 用户：
     - macOS 10.14 及之后的用户：`Qv2ray.VERSION.macOS-x64.dmg`；
     - macOS 10.13：`qv2ray-legacy.dmg`（如果有的话）；
     - macOS 10.12 and before: ***Try Upgrading Your macOS***.

:::tip Notes for Linux AppImage users Although we have bundled `glibc` and some basic C++ libraries into the **AppImage** package to support some old but supported distros, moving yourself to a newer version of Distro/OS is strongly recommended. :::

:::warning Notes for Windows ARM64 users Windows 10 on ARM added an emulation layer for x86_64 apps in *build 21277*, users can use the x64 version with the latest Windows Insider Preview. :::

## GitHub Actions

If you are fed up with the functionalities of stable versions and willing to try out new features in development, you may download artifacts from GitHub Actions:

1. Open [Qv2ray GitHub Actions Page](https://github.com/Qv2ray/Qv2ray/actions) in your web browser.
2. Choose a recent and successful (displayed as ✔️) build and click on it. You should be taken to the detail page of that GitHub Build. Here's [an example](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225).
3. Click on **Artifacts** drop-down menu to expand it, and then choose binaries according to your platform.

TODO: Branch Selection Tips

:::tip You must login GitHub first to access GitHub Actions. :::

## Building From Source

Please refer to [Manually Build Qv2ray](../hacking/manuallybuild.md) Page.
