---
title: Getting Qv2ray Distribution
---

# Step 1: Getting Qv2ray Distribution

To get started with Qv2ray, you should first obtain a release of Qv2ray.

## GitHub Release Binary File

Downloading stable release binary from [Qv2ray GitHub Release](https://github.com/Qv2ray/Qv2ray/releases) is favored for **Windows** and **macOS** users. This is also suitable for users of Linux distributions where Qv2ray is not officially packaged, in **AppImage** format.

Note: Although we bundled glibc and some C++ base libraries into the AppImage package to support some old, but still supported by upstream distros, we still suggest you using a newer version of OS/distro.

Do as the follows:

1. Open [Qv2ray GitHub Release Page](https://github.com/Qv2ray/Qv2ray/releases) in a web browser.
2. Choose a version from the releases. Or, optionally, you may use the [Latest Release](https://github.com/Qv2ray/Qv2ray/releases/latest).
3. Choose in Assets according to your platform and download it! For example:
   - For Windows 64/32bit Users: `Qv2ray.VERSION.win-x64/x86.zip`
   - For Linux 64bit Users: `Qv2ray.VERSION.linux-x64.AppImage`
   - For macOS Users: `Qv2ray.VERSION.macOS-x64.tar.gz`

Where `VERSION` is the version of that release.

## GitHub Actions Artifact

If you are fed up with the functionalities of stable versions and willing to try out new features in development, you may download artifacts from GitHub Actions:

1. Open [Qv2ray GitHub Actions Page](https://github.com/Qv2ray/Qv2ray/actions) in your web browser. 2. Choose a recent and successful (displayed as ✔️) build and click on it. You should be taken to the detail page of that GitHub Build. Here's [an example](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225). 3. Click on **Artifacts** drop-down menu to expand it, and then choose binaries according to your platform.

## Getting From Package Control

### Arch Linux (or Arch-based distros)

#### Install directly from archlinuxcn (recommended)

We have made ourselves into archlinuxcn repository. If you are already using it, simply type in your terminal:

```shell
sudo pacman -Syy qv2ray # or qv2ray-dev-git, see below.
```

And that shall be done. You may also want to install `v2ray` package group afterwards.

#### Getting from AUR, using an AUR Helper

You may acquire officially maintained `PKGBUILD` file from AUR (Arch User Repository, [AUR (en) - Home](https://aur.archlinux.org/)), which will instruct the build process of Qv2ray.

You may use an AUR helper such as `yay`, `yaourt`, `pikaur` and so on to automatically handle the build process of AUR packages.

:::tip NOTE

The following example is utilizing `yay`. For other AUR helpers, check the usage in respective documentations.

:::

First, you may try searching `qv2ray` in AUR:

```shell
$ yay -Ss qv2rayaur/qv2ray-dev-git 1.99.4.r47514d2-1 (+2 0.98%)     Qt cross platform v2ray GUI client (Dev branch build release)aur/qv2ray 1.3.8.0-1 (+4 1.23%)     Qt cross platform v2ray GUI client
```

Then, choose the adequate version of Qv2ray to install. There are two versions available:

- **Stable version**, with package name **qv2ray**. This package is built from the master branch of Git repository, and shall be stable enough for cautious users.
- **Development version**, with package name **qv2ray-dev-git**. This package is built from the dev branch of Git repository. Along with the newest features and improvements, there are potential risks for using an unstable distribution.

Choose according to your actual situation. Here, we choose to install qv2ray-dev-git:

```shell
$ yay -S qv2ray-dev-git
```

Qv2ray will be ready to use after finishing the command.

#### Getting from AUR, the hard way

```shell
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

## Getting from App Stores

### Flathub

1. Download and set up flatpak by following their (https://flatpak.org/setup/).
2. Install Qv2ray:

```shell
$ flatpak install com.github.Qv2ray![:warning:](https://camo.githubusercontent.com/25c4c2e34ef6f549d21daa333a53fb20546622fd/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f69636f6e732f656d6f6a692f756e69636f64652f323661302e706e67 ":warning:")**You shouldn't change the default vcore path because of the sandbox permission.**
```

:::warning 

**You shouldn't change the default vcore path because of the sandbox permission.**

:::

### Building From Source

Please refer to [Manually-Build-Qv2ray](/en/hacking/manuallybuild) Page.
