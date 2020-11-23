---
title: Getting Qv2ray Distribution
sidebarDepth: 3
---

# Step 1: Getting Qv2ray Distribution

To get started with Qv2ray, you should first obtain a release of Qv2ray. We offer many distribution methods, you can choose according to your preference.

## GitHub Releases Binary

Downloading stable release binary from [Qv2ray GitHub Release](https://github.com/Qv2ray/Qv2ray/releases) is favored for **Windows** and **macOS** users. This is also suitable for Linux users where Qv2ray is not officially packaged in their distros, since they can use our **AppImage** releases.

Do as the follows:

1. Open [Qv2ray GitHub Release Page](https://github.com/Qv2ray/Qv2ray/releases) in a web browser.
2. Choose a version from the releases. Or, optionally, you may use the [Latest Release](https://github.com/Qv2ray/Qv2ray/releases/latest).
3. Choose in Assets according to your platform and download it! For example:
   - For Windows 64/32bit Users: `Qv2ray.VERSION.Windows-x64/x86.7z` (archive) or `Qv2ray.VERSION.win32/64.exe` (Installer)
   - For Linux 64bit Users: `Qv2ray.VERSION.linux-x64.AppImage`
   - For macOS Users:
      - macOS 10.14 and later: `Qv2ray.VERSION.macOS-x64.dmg`;
      - macOS 10.13: `qv2ray-legacy.dmg` (if any);
      - macOS 10.12 and before: NOT SUPPORTED.
   - For Ubuntu 19.04 / Debian 10 (or greater): ~~`qv2ray_VERSION_amd64.deb`~~ (Moved to [Qv2ray Debian Repository](https://qv2ray.github.io/debian/) since v2.6.1)
   - For Arch Linux Users：`qv2ray-VERSION-1-x86_64.pkg.tar.xz`

Where `VERSION` is the version of that release.

:::tip Notes for Linux AppImage users
Although we have bundled `glibc` and some basic C++ libraries into the **AppImage** package to support some old but supported distros, moving yourself to a newer version of Distro/OS is strongly recommended.
:::

:::warning Notes for Windows ARM64 users
Windows 10 on ARM users can use `Qv2ray.VERSION.Windows-x86.7z` (archive) or `Qv2ray.VERSION.win32.exe` (Installer) directly, since the operating system has a built-in compatibility layer for x86 architecture.
:::

## GitHub Actions Artifact

If you are fed up with the functionalities of stable versions and willing to try out new features in development, you may download artifacts from GitHub Actions:

1. Open [Qv2ray GitHub Actions Page](https://github.com/Qv2ray/Qv2ray/actions) in your web browser.
2. Choose a recent and successful (displayed as ✔️) build and click on it. You should be taken to the detail page of that GitHub Build. Here's [an example](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225).
3. Click on **Artifacts** drop-down menu to expand it, and then choose binaries according to your platform.

:::tip
You must login GitHub first to access GitHub Actions.
:::

## Download From a package manager

### Arch Linux-based distros

#### Install directly from `archlinuxcn`

We have made ourselves into `archlinuxcn` repository. If you are already using it, simply type in your terminal:

```shell
sudo pacman -Syy qv2ray # or qv2ray-dev-git, see below.
```

And that shall be done.

:::tip
You may also want to install `v2ray` package to use system V2Ray core.
:::

:::warning Attention to Manjaro Hitchhikers on Arch Linux CN

Manjaro will **delay Arch Linux's package changes**. When there is a breaking ABI change in upstream, ***Arch Linux* CN** will **prioritize Arch users** instead of those of Manjaro. **Manjaro users of Arch Linux CN** should always **be aware of and bear all consequences caused by the delayed update of its official source**, including issues like `symbol lookup error` and etc. If you insist on using it, please **do not submit it to either Qv2ray or Arch Linux CN as a bug** in any way. For those who don't want trouble, please use AppImage / Snapcraft versions instead.

This nag will be removed whenever something like "Manjaro CN" is founded and officially **take the workload of packaging Qv2ray** for its users.
:::

#### Download from AUR, using an AUR Helper

You may acquire officially maintained `PKGBUILD` file from AUR (Arch User Repository, [AUR (en) - Home](https://aur.archlinux.org/)), which will instruct the build process of Qv2ray.

You may use an AUR helper such as `yay`, `yaourt`, `pikaur` and so on to automatically handle the build process of AUR packages.

:::tip NOTE
The following example is utilizing `yay`. For other AUR helpers, check the usage in respective documentations.
:::

First, you may try searching `qv2ray` in AUR:

```shell
$ yay -Ss qv2ray
aur/qv2ray-dev-git 1.99.4.r47514d2-1 (+2 0.98%)
     Qt cross platform v2ray GUI client (Dev branch build release)
aur/qv2ray 1.3.8.0-1 (+4 1.23%)
     Qt cross platform v2ray GUI client
```

Then, choose the adequate version of Qv2ray to install. There are two versions available:

- **Stable version**, with package name `qv2ray`. This package is built from the master branch of Git repository, and shall be stable enough for cautious users.
- **Development version**, with package name `qv2ray-dev-git`. This package is built from the dev branch of Git repository. Along with the newest features and improvements, there are potential risks for using an unstable distribution.

Choose according to your actual situation. Here, we choose to install `qv2ray-dev-git`:

```bash
$ yay -S qv2ray-dev-git
```

Qv2ray will be ready to use after finishing the command.

#### Download from AUR, the hard way

You may not want to use an AUR helper to install Qv2ray from AUR. Then take a look at the following example.

```bash
# 1. Clone the AUR repository (`qv2ray-dev-git` as an example):
$ git clone https://aur.archlinux.org/qv2ray-dev-git.git

# 2. Enter `PKGBUILD` folder:
$ cd qv2ray-dev-git

# 3. Build Qv2ray:
$ makepkg -sf

# 4. Install the generated package after building:
$ sudo pacman -U qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst
```

You are done.

:::tip
The package filename (`qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst`) depends on the actual version of Qv2ray. It may differ on your machine, but that's not a problem.
:::

### openSUSE / Fedora / CentOS

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

### Homebrew (macOS/Linux)

You can use Homebrew to install Qv2ray on macOS (and Linux, maybe). If you haven't installed Homebrew yet, you can check the Homebrew website for more details about how to install it. Once Homebrew is installed, you can install Qv2ray using the following command:

```bash
$ brew cask install qv2ray
```

Upgrading is also easy, just replace `install` with `upgrade` in the commands:

```bash
$ brew cask upgrade qv2ray
```

If you want to install plugins and Qv2ary beta, please add the `malt` tap:

```
brew tap kidonng/malt
brew install qv2ray-beta
# Or directly run
brew install kidonng/malt/qv2ray-beta
```

### Scoop (Windows)

> [Scoop](https://scoop.sh) is a command-line-based software packages manager for **Windows**.

Run the following commands in **Powershell**:

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
4. To update, just replace `install` with `update` in the  commands:

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

### Chocolatey (Windows)

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

## Download from an Linux app store

### Snapcraft

Follow the instructions on our [Snapcraft page](https://snapcraft.io/qv2ray).

```shell
# To install the package:
$ sudo snap install qv2ray
# sudo snap install qv2ray --edge (dev branch)
# To update the package:
$ sudo snap refresh qv2ray
```

### Flathub (Deprecated)

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

## Building From Source

Please refer to [Manually Build Qv2ray](../hacking/manuallybuild.md) Page.
