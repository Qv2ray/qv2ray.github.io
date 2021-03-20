---
title: Getting Qv2ray Distribution
sidebarDepth: 3
---

# Step 1: Obtaining Qv2ray

To get started with Qv2ray, you should first obtain it (Why not?).

- We offer many distribution methods, you can choose according to your preference.

## From a Package Manager

### Linux: Debian, Ubuntu and their derivatives

1. Install the relevant tools.

	```bash
	# apt install gnupg ca-certificates curl
	```

2. Follow the steps at [our debian repo](https://qv2ray.net/debian)


3. Install Qv2ray

	```bash
	# apt update; sudo apt install qv2ray
	```

### Linux: Arch Linux-based distros

**Install directly from `archlinuxcn`**

We have made ourselves into `archlinuxcn` repository. If you are already using it, simply type in your terminal:

```shell
sudo pacman -Syy qv2ray # or qv2ray-dev-git, see below.
```

And that shall be done.

:::warning Attention to Manjaro Hitchhikers on Arch Linux CN

Manjaro will **delay Arch Linux's package changes**. When there is a breaking ABI change in upstream, **_Arch Linux_ CN** will **prioritize Arch users** instead of those of Manjaro. **Manjaro users of Arch Linux CN** should always **be aware of and bear all consequences caused by the delayed update of its official source**, including issues like `symbol lookup error` and etc. If you insist on using it, please **do not submit it to either Qv2ray or Arch Linux CN as a bug** in any way. For those who don't want trouble, please use other versions instead.

This nag will be removed whenever something like "Manjaro CN" is founded and officially **takes the workload of packaging Qv2ray** for its users.

:::

**Download from AUR, using an AUR Helper**

You may acquire officially maintained `PKGBUILD` file from AUR (Arch User Repository, [AUR (en) - Home](https://aur.archlinux.org/)), which will instruct the build process of Qv2ray.

All Qv2ray plugins are currently in AUR.

### Linux: openSUSE / Fedora / CentOS

> Qv2ray is made available for openSUSE / Fedora / CentOS users from [openSUSE Build Service](https://build.opensuse.org) by [@zzndb](https://github.com/zzndb).

:::warning Applicable Versions

Because of the limit of Qt version, we may not be able to support all on-lifetime distro above, the detail of supported distro please check the OBS link below.

:::

Similar to AUR, there are two versions of Qv2ray available. You can choose according to your own flavor:

- Stable OBS: [Qv2ray](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray)
- Preview OBS: [Qv2ray-preview](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview)

Or you can get more detailed installation guide directly from the links below:

- Download Stable: [Qv2ray](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray)
- Download Preview: [Qv2ray-preview](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview)

:::warning For CentOS user

Before you install Qv2ray from above OBS project, you need to add the **EPEL** repository which provided by Fedora for extra needed dependencies. For more info please check the [Fedora EPEL Wiki](https://fedoraproject.org/wiki/EPEL).

:::

:::tip Plugins

The above [OBS project](https://build.opensuse.org/project/show/home:zzndb:Qv2ray) also provide the plugins of Qv2ray family. After installing Qv2ray through project's repository (not download & install by hand), you can directly install plugins (with the same name of the plugin's project name, also provide the preview version plugin with `-preview` postfix) using your package manager.

:::

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
2. Add `extras` bucket:
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

:::tip

You may also need to install [the latest Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads).

:::

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

:::warning Deprecated (2020/09/18)

Installation of Qv2ray from Flathub is officially **deprecated**, since the maintainer is no longer actively maintaining the package. If you are interested in adopting this, please open an issue and let us know.

:::

1. Set up Flatpak environment according to the [official documentation](https://flatpak.org/setup/).
2. Install Qv2ray:
   ```shell
   # To install the package:
   $ flatpak install com.github.Qv2ray
   # To update the package:
   $ flatpak update
   ```
   



## GitHub Releases Binary

Downloading the release from [Qv2ray Release Page](https://github.com/Qv2ray/Qv2ray/releases) is favored for someone who ***does not want to use Package Managers***.

This is also suitable for Linux users where Qv2ray is not officially packaged in their distros.

Do as the follows:

1. Navigate to [Qv2ray GitHub Release Page](https://github.com/Qv2ray/Qv2ray/releases) in a **web** browser.
2. Choose a version from the releases. Or, optionally, you may use the [Latest **Stable** Release](https://github.com/Qv2ray/Qv2ray/releases/latest).
3. Choose in Assets according to your platform and download it! For example:
   - For Windows Users:
     - Windows 7/8/8.1/10: `Qv2ray.VERSION.Windows-x64.7z` (Archive) or `Qv2ray.VERSION.win64.exe` (Installer).
     - Windows 2003/XP/2000/ME/98/...: ***Are you kidding me bro?***
   - For Linux 64bit Users: `Qv2ray.VERSION.linux-x64.AppImage`.
   - For macOS Users:
     - macOS 10.14 and later: `Qv2ray.VERSION.macOS-x64.dmg`;
     - macOS 10.13: `qv2ray-legacy.dmg` (if any);
     - macOS 10.12 and before: ***Try Upgrading Your macOS***.

:::tip Notes for Linux AppImage users

Although we have bundled `glibc` and some basic C++ libraries into the **AppImage** package to support some old but supported distros, moving yourself to a newer version of Distro/OS is strongly recommended.

:::

:::warning Notes for Windows ARM64 users

Windows 10 on ARM added an emulation layer for x86_64 apps in *build 21277*, users can use the x64 version with the latest Windows Insider Preview.

:::

## GitHub Actions

If you are fed up with the functionalities of stable versions and willing to try out new features in development, you may download artifacts from GitHub Actions:

1. Open [Qv2ray GitHub Actions Page](https://github.com/Qv2ray/Qv2ray/actions) in your web browser.
2. Choose a recent and successful (displayed as ✔️) build and click on it. You should be taken to the detail page of that GitHub Build. Here's [an example](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225).
3. Click on **Artifacts** drop-down menu to expand it, and then choose binaries according to your platform.

TODO: Branch Selection Tips

:::tip

You must login GitHub first to access GitHub Actions.

:::

## Building From Source

Please refer to [Manually Build Qv2ray](../hacking/manuallybuild.md) Page.
