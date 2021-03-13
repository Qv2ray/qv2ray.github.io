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

This nag will be removed whenever something like "Manjaro CN" is founded and officially **takes the workload of packaging Qv2ray** for its users. :::

**Download from AUR, using an AUR Helper**

You may acquire officially maintained `PKGBUILD` file from AUR (Arch User Repository, [AUR (en) - Home](https://aur.archlinux.org/)), which will instruct the build process of Qv2ray.

All Qv2ray plugins are currently in AUR.

### Linux: openSUSE / Fedora / CentOS

> Qv2ray is made available for openSUSE / Fedora / CentOS users from [openSUSE Build Service](https://build.opensuse.org) by [@zzndb](https://github.com/zzndb).

:::warning 适用版本 因为Qt 版本的限制， 我们可能无法支持上面所有终生的磁盘，支持的磁盘详情请检查下面的 OBS 链接。 :::

Similar to AUR, there are two versions of Qv2ray available. You can choose according to your own flavor:

- Stable OBS: [Qv2ray](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray)
- Preview OBS: [Qv2ray-preview](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview)

Or you can get more detailed installation guide directly from the links below:

- Download Stable: [Qv2ray](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray)
- Download Preview: [Qv2ray-preview](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview)

::::warning CentOS 用户 在您安装OBS 项目上方的 Qv2ray 之前。 您需要添加 **EPEL** 仓库，这是Fedora为额外需要的依赖提供的。 For more info please check the [Fedora EPEL Wiki](https://fedoraproject.org/wiki/EPEL). :::

:::tip Plugins The above [OBS project](https://build.opensuse.org/project/show/home:zzndb:Qv2ray) also provide the plugins of Qv2ray family. After installing Qv2ray through project's repository (not download & install by hand), you can directly install plugins (with the same name of the plugin's project name, also provide the preview version plugin with `-preview` postfix) using your package manager. :::

### Linux / macOS: Homebrew

You can use Homebrew to install Qv2ray on macOS (and Linux, maybe). If you haven't installed Homebrew yet, you can check the Homebrew website for more details about how to install it. Once Homebrew is installed, you can install Qv2ray using the following command:

```bash
$ brew cask install qv2ray
```

**Or with the new command**

```bash
$ brew install --cask qv2ray
```

Upgrading is also easy, just replace `install` with `upgrade` in the commands.

If you want to install plugins and Qv2ary beta, please add the `malt` tap:

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
