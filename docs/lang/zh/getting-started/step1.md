---
title: 第一步：获取 Qv2ray 分发
sidebarDepth: 3
---

# Step 1: Obtaining Qv2ray

To get started with Qv2ray, you should first obtain it (Why not?).

- 我们提供了许多种方式，您可以根据您的喜好选择。

## From a Package Manager

### Linux: Debian, Ubuntu and their derivatives

1. 安装相关工具。

    ```bash
    # apt install gnupg ca-certificates curl
    ```

2. Follow the steps at [our debian repo](https://qv2ray.net/debian)


3. 安装 Qv2ray

    ```bash
    # apt update; sudo apt install qv2ray
    ```

### Linux: Arch Linux-based distros

**直接从 `arclinuxcn 安装`**

我们已经进入 `arclinuxcn` 仓库。 如果您已经在使用它，只需在您的终端中输入：

```shell
sudo pacman -Syy qv2ray # 或 qv2ray-dev-git，见下文。
```

应该这样做。

:::warning Arch Linux CN 中的 Manjaro Hitchhikers

Manjaro 将 **延迟Arch Linux 的软件包更改**。 当断开ABI在上游改变时， **_Arch Linux_ CN** 将 **优先级Arch 用户** 而不是Manjaro。 **Manjaro users of Arch Linux CN** should always **be aware of and bear all consequences caused by the delayed update of its official source**, including issues like `symbol lookup error` and etc. 如果您坚持要使用它， 请 **不要以任何方式提交到 Qv2ray 或 Arch Linux CN 作为错误**。 For those who don't want trouble, please use other versions instead.

This nag will be removed whenever something like "Manjaro CN" is founded and officially **takes the workload of packaging Qv2ray** for its users. :::

**使用 AUR 助手从 AUR 下载**

您可以从 AUR (Arch 用户仓库) 获取官方维护的`PKGBUILD`文件。[AUR (en) - Home](https://aur.archlinux.org/), 它将指导Qv2ray的构建过程。

All Qv2ray plugins are currently in AUR.

### Linux: openSUSE / Fedora / CentOS

> Qv2ray 提供给 [openSUSE / Fedora / CentOS 用户](https://build.opensuse.org) [@zzndb](https://github.com/zzndb)

:::warning 适用版本 因为Qt 版本的限制， 我们可能无法支持上面所有终生的磁盘，支持的磁盘详情请检查下面的 OBS 链接。 :::

类似AUR, 有两个版本的 Qv2ray 可供使用。 您可以根据自己的签名选择：

- 稳定操作： [Qv2ray](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray)
- 预览OBS： [Qv2射线预览](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview)

或者您可以直接从下面的链接获取更详细的安装指南：

- 下载Stagle: [Qv2ray](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray)
- 下载预览： [Qv2ray-预览](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview)

::::warning CentOS 用户 在您安装OBS 项目上方的 Qv2ray 之前。 您需要添加 **EPEL** 仓库，这是Fedora为额外需要的依赖提供的。 欲了解更多信息，请检查 [Fedora EPELWiki](https://fedoraproject.org/wiki/EPEL)。 :::

:::tip Plugins 以上 [OBS 项目](https://build.opensuse.org/project/show/home:zzndb:Qv2ray) 也提供Qv2ray 族的插件。 在通过项目仓库安装 Qv2ray 之后(不通过手动下载 & 安装)， 您可以直接安装插件(使用此插件的项目名称相同的名称) 还提供预览版本插件使用 `-预览` postfix，使用您的软件包管理器。 :::

### Linux / macOS: Homebrew

您可以使用 Homebrew 在 macOS 上 (和 Linux, 也许) 安装 Qv2ray 如果您尚未安装 Homebrew ，您可以查看 Homebrew 网站了解如何安装它的更多详情。 Homebrew 安装后，您可以使用以下命令安装 Qv2ray

```bash
$ brew cask install qv2ray
```

**或者使用新命令**

```bash
$ brew install --cask qv2ray
```

Upgrading is also easy, just replace `install` with `upgrade` in the commands.

如果您想要安装插件和 Qv2ary Beta, 请添加 `恶意` 点击：

```
酿造点击肾脏/malt
酿造安装qv2ray-beta
# 或直接运行
酿造船安装肾脏/malt/qv2ray-beta
```

### Windows: Scoop

> [分数](https://scoop.sh) 是一个 **Windows 的基于命令行的软件包管理器**

Run the following commands in **PowerShell**:

1. [安装分数](https://scoop.sh/#installs-in-seconds):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Current User # allows script execution
   iwr -useb get.scoop.sh | iex
   ```
2. 添加 `extras` 桶：
   ```powershell
   抓取桶添加扩展名
   ```
3. 安装 Qv2ray：
   ```powershell
   scoop install qv2ray
   ```
4. To update, just replace `install` with `update` in the commands:

   ```powershell
   抓取更新 qv2ray
   ```

5. **(可选)** 如果您想要安装插件和 Qv2ray Beta, 添加 `sushi` bucket：
   ```powershell
   scoop bucket 添加 sushi https://github.com/kidonng/sushi
   # 所有应用都见 https://github.com/kidonng/sushi#qv2ray
   scoop install qv2ray-beta
   ```

:::tip 你可能也需要安装 [最新的 Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) :::

### Windows: Chocolatey

> [Chocolatey](https://chocolatey.org/) 是另一个 **Windows** 的软件包管理器。

**请在管理员权限下打开 Powershell** 并运行以下命令：

1. [安装巧克力](https://chocolatey.org/install)：
   ```powershell
   Set-ExecutionPolicy Bypass-Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]:SecurityProtocol -bor 3072; iex (New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```
2. 安装 Qv2ray：
   ```powershell
   choco install qv2ray
   ```

## From AppStore

### Linux: Snapcraft

按照我们的 [Snapcraft 页面](https://snapcraft.io/qv2ray) 上的说明操作。

```shell
# 要安装软件包：
$ sudo snap install qv2ray
# sudo snap install qv2ray --edge (dev branch)
# 要更新软件包：
$ sudo snap refresh qv2ray
```

### Linux: Flathub (Deprecated)

:::警告已废弃(2020/09/18) 从Flahub 安装Qv2ray 是官方 **已废弃**，因为维护者不再积极维护该软件包。 如果您有兴趣通过这个问题，请打开一个问题并告诉我们。 :::

1. 根据 [官方文档](https://flatpak.org/setup/) 设置Flatpak环境。
2. 安装 Qv2ray：
   ```shell
   # 要安装软件包：
   $ flatpak install com.github.Qv2ray
   # 要更新软件包：
   $ flatpak更新
   ```




## GitHub Release 二进制文件

Downloading the release from [Qv2ray Release Page](https://github.com/Qv2ray/Qv2ray/releases) is favored for someone who ***does not want to use Package Managers***.

This is also suitable for Linux users where Qv2ray is not officially packaged in their distros.

按以下方式执行：

1. Navigate to [Qv2ray GitHub Release Page](https://github.com/Qv2ray/Qv2ray/releases) in a **web** browser.
2. 从 Release 中选择一个版本。 或者，您可以选择使用 [最新的**稳定版**发布](https://github.com/Qv2ray/Qv2ray/releases/latest)。
3. 根据你的的平台，在 Release Assets 中选择并下载。 例如：
   - 对于 Windows 用户：
     - Windows 7/8/8.1/10: `Qv2ray.VERSION.Windows-x64.7z` (Archive) or `Qv2ray.VERSION.win64.exe` (Installer).
     - Windows 2003/XP/2000/ME/98/...: ***Are you kidding me bro?***
   - 对于 Linux 64bit 用户：`Qv2ray.VERSION.linux-x64.AppImage`。
   - 对于 macOS 用户：
     - macOS 10.14 及之后的用户：`Qv2ray.VERSION.macOS-x64.dmg`；
     - macOS 10.13：`qv2ray-legacy.dmg`（如果有的话）；
     - macOS 10.12 and before: ***Try Upgrading Your macOS***.

::::tip Notes 用于 Linux AppImage 用户 虽然我们已将 `glibc` 和一些基本的 C++ 库绑定到 **AppImage** 软件包以支持一些旧但支持的磁盘， 强烈建议您自己移动到最新版本的Disstro/OS :::

:::warning Notes for Windows ARM64 users Windows 10 on ARM added an emulation layer for x86_64 apps in *build 21277*, users can use the x64 version with the latest Windows Insider Preview. :::

## GitHub Actions

如果您已经加入稳定版本的功能并愿意尝试开发中的新功能， 您可以从 GitHub 操作下载伪影：

1. 在您的浏览器中打开[Qv2ray GitHub 操作页面](https://github.com/Qv2ray/Qv2ray/actions)。
2. 选择最近成功(显示为 ✔️) 构建并点击它。 你应该被带到GitHub Build的详细页面。 这里是[个示例](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225)。
3. 点击**伪影**下拉菜单来展开它，然后根据您的平台选择二进制文件。

TODO: Branch Selection Tips

:::tip 您必须先登录 GitHub 才能访问 GitHub 操作。 :::

## 从源代码创建

请参阅[手动构建Qv2ray](../hacking/manuallybuild.md)页面。
