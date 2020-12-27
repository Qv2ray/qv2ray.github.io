---
title: 下载 Qv2ray
sidebarDepth: 3
---

# 下载 Qv2ray

你需要先下载 Qv2ray 的某个版本的 Release 文件才能开始使用 Qv2ray。我们提供多种分发方式，您可以根据喜好自由选择。

## GitHub Release 二进制文件

从 [Qv2ray GitHub Release](https://github.com/Qv2ray/Qv2ray/releases) 页面下载 Qv2ray 编译好的二进制版本。 推荐 **Windows** 和 **macOS** 用户采取这种方法。 这种方法同样适用于没有合适的 Qv2ray 软件包的 Linux 发行版来安装，因为他们可以使用我们的 AppImage 发行版。

遵循如下步骤:

1. 在浏览器中打开 [Qv2ray GitHub Release 页面](https://github.com/Qv2ray/Qv2ray/releases) 。
2. 选择一个 Release 版本。 或者直接下载[最新版](https://github.com/Qv2ray/Qv2ray/releases/latest)。
3. 选择一个能在你的系统平台上运行的软件版本，然后下载。 例如:
   - 对于 Windows 64/32bit 用户： `Qv2ray.VERSION.Windows-x64/x86.7z` (压缩包) 或 `Qv2ray.VERSION.win32/64.exe` (安装包)
   - 对于 Linux 64bit 用户：`Qv2ray.VERSION.linux-x64.AppImage`
   - 对于 macOS 用户：
      - macOS 10.14 及以后：`Qv2ray.VERSION.macOS-x64.dmg`；
      - macOS 10.13：`qv2ray-legacy.dmg`（如果有）；
      - macOS 10.12 及之前：不支持。
   - 对于 Ubuntu 19.04 / Debian 10 (或更高)： ~~`qv2ray_VERSION_amd64.deb`~~ (自 v2.6.1 开始， deb 包将迁移至 [官方仓库](https://qv2ray.github.io/debian/) 进行发布)
   - 对于 Arch Linux 系用户：`qv2ray-VERSION-1-x86_64.pkg.tar.xz`

其中 `VERSION` 是当前 Release 的版本。

:::tip Linux AppImage 用户注意事项
虽然我们已将 `glibc` 和 C++ 基本库捆绑到 **AppImage** 中以支持一些旧的、受支持的发行版，但是我们强烈建议您使用更新版本的发行版或操作系统。
:::

:::warning Windows ARM64 用户注意
因为操作系统内置 x86 的兼容层，Windows 10 on ARM 用户可以直接使用 `Qv2ray.VERSION.Windows-x86.7z` (压缩包) 或 `Qv2ray.VERSION.win32.exe` (安装包)。
:::

## GitHub Actions 编译版

不喜欢稳定版的功能，想要尝试不断开发中的新功能？你可以下载 GitHub Actions 中的编译版本：

1. 在浏览器中打开 [Qv2ray GitHub Actions 页面](https://github.com/Qv2ray/Qv2ray/actions) 。
2. 选择一个最近的成功编译的版本（会显示为✔️）然后点击。 你会进入这个版本的详细页面。比如 [这里](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225).
3. 点击 **Artifacts** 展开下拉菜单, 然后根据你的平台选择一个二进制包并下载。

:::tip 提示
你必须先登录 GitHub 账号才能白嫖 GitHub Actions 中的 Artifacts。如您持有 Telegram 账户，也可使用 [Qv2ray 店小二机器人](https://t.me/Qvreleasebot) 以下载最新版本的 Actions Artifact。
:::

## 在包管理系统中安装此软件

### 基于 Arch Linux 的发行版

#### 直接从 `archlinuxcn` 安装

我们已登陆 `archlinuxcn` 仓库。若您已在使用，只需在你的终端输入：

```bash
sudo pacman -Syy qv2ray # 或者 qv2ray-dev-git, 见下
```

然后就 OK 啦！

:::tip 提示
你可能还需要安装 `v2ray` 包来使用系统 V2Ray 核心。
:::

:::danger 想蹭 Arch Linux CN 仓库的 Manjaro 用户注意

Manjaro 的官方源更新 **滞后** 于 Arch Linux 的官方源，当上游出现 ABI 破坏性更新时，*Arch* Linux CN 会 **优先保证 *Arch* Linux 用户的体验**，Manjaro 用户应 **知晓并自行承担一切因其官方源更新滞后所造成的后果**，主要涉及各种库的符号丢失（如 `symbol lookup error`）等问题。如您执意使用，**因此产生的一切问题，请勿当作 Bug 以任何形式提交给 Qv2ray 项目或 CN 源**。不想遇到类似问题的用户，请从 AUR 获取并自行构建，或取用 Qv2ray 的 AppImage / snap 版本。

本提示将在 “Manjaro CN” 仓库（或其他任何同类替代品）成立并正式**承担 Qv2ray 的打包和分发压力**之后移除。
:::

#### 使用 AUR Helper 从 AUR 获取

您可以从 AUR (Arch User Repository, [AUR (en)-Home](https://aur.archlinux.org/)) 获得官方维护的 `PKGBUILD` 文件，这将指导 Qv2ray 的构建过程。

您可以使用 AUR Helper（如 `yay`、`yaourt`、`pikaur` 等）来自动处理 AUR 包的构建过程。

:::tip 提醒
下面的例子将会使用 `yay`。对于其他 AUR Helper，请参阅各自的文档。
:::

首先在 AUR 中搜索 `qv2ray`：

```bash
$ yay -Ss qv2ray
aur/qv2ray-dev-git 1.99.4.r47514d2-1 (+2 0.98%)
     Qt cross platform v2ray GUI client (Dev branch build release)
aur/qv2ray 1.3.8.0-1 (+4 1.23%)
     Qt cross platform v2ray GUI client
```

然后，选择合适的版本来安装 Qv2ray：

- **稳定版本**，使用名为 `qv2ray` 的包。这个软件包是基于 Git 仓库的 `master` 分支构建的，对于谨慎的用户来说应该足够稳定。

- **开发版本**，使用名为 `qv2ray-dev-git` 的包。这个包是从 Git 仓库的 `dev` 分支构建的。除了最新的特性和改进之外，使用不稳定的发行版还存在潜在的风险。

根据您的实际情况选择。在这里，我们选择安装 `qv2ray-dev-git`：

```bash
$ yay -S qv2ray-dev-git
```

Qv2ray 在完成命令后就可以使用了。

#### 从 AUR 获取（硬核方法）

您可能不希望使用 AUR Helper 从 AUR 安装 Qv2ray。请见下面的例子：

```bash
# 1. Clone AUR 仓库 (例如 `qv2ray-dev-git`)：
$ git clone https://aur.archlinux.org/qv2ray-dev-git.git

# 2. 进入 `PKGBUILD` 文件夹：
$ cd qv2ray-dev-git

# 3. 构建 Qv2ray：
$ makepkg -sf

# 4. 安装构建得到的软件包：
$ sudo pacman -U qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst
```

这样就可以了。

:::tip 提示
包文件名（`qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst`）取决于 Qv2ray 的实际版本，在你的机器上可能有所不同。
:::

### openSUSE / Fedora / CentOS

> openSUSE / Fedora / CentOS 上的 Qv2ray 由 [@zzndb](https://github.com/zzndb) 于 [openSUSE Build Service](https://build.opensuse.org/) 提供。

:::warning 适用版本
由于 Qt 版本的限制，我们可能不能支持所有尚在支持期的上述发行版，具体支持情况请参见下面 OBS 项目链接。
:::

与 AUR 类似，Qv2ray 也有两个版本，你可以根据自己的口味来选择：

- 稳定版 OBS： [Qv2ray](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray)
- 预览版 OBS： [Qv2ray-preview](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview)

或者你可以直接从下面的链接获取更详细的安装指导：

- 获取稳定版: [Qv2ray](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray)
- 获取预览版: [Qv2ray-preview](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview)

:::warning 对于 CentOS 用户
在开始从 OBS 安装之前，你需要添加由 Fedora 提供的 **EPEL** 源，以获取所需额外依赖，具体请参见 [Fedora EPEL Wiki](https://fedoraproject.org/wiki/EPEL)。
:::

:::tip 插件
在上述 [OBS 项目](https://build.opensuse.org/project/show/home:zzndb:Qv2ray)中同样有提供 Qv2ray 相关插件，通过添加软件源方式完成了 Qv2ray 的安装之后，你可直接通过包管理器完成插件（包名同插件项目名，也同时提供带 `-preview` 后缀的预览版）的安装。
:::

### Homebrew (macOS/Linux)

:::tip 非中国大陆用户注意
以下命令使用了[中国科学技术大学镜像站](https://mirrors.ustc.edu.cn/help/brew.git.html) 加速访问 GitHub，为中国大陆用户提供更好的体验。

若您并非中国大陆用户，或无需要加速访问 GitHub，可参考英文文档操作。
:::

[Homebrew](https://brew.sh/) 是 macOS 和 Linux 的一个包管理器。

**使用此方法安装需要您对命令行有一定的基本了解**。请在终端中执行以下命令：

1. 安装 Homebrew（已安装可跳过此步）：

   ```sh
   HOMEBREW_CORE_GIT_REMOTE=https://mirrors.ustc.edu.cn/homebrew-core.git bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/kidonng/homebrew-install@ustc/install.sh)"
   ```

2. 安装 Qv2ray：

**旧版命令**
```bash
$ brew cask install qv2ray
```

**新版命令**
```bash
$ brew install --cask qv2ray
```

3. 升级也很简单，只需要将上述命令的 `install` 换成 `upgrade` 即可。

:::tip 提示

如需安装插件及 Qv2ary 测试版，请添加 `malt` tap：

```
brew tap kidonng/malt
brew install qv2ray-beta
# 或者直接执行
brew install kidonng/malt/qv2ray-beta
```

Qv2ray 额外提供一个经 [FastGit](https://doc.fastgit.org/zh-cn/) 加速的 Homebrew tap，**但其目前不受支持**。

```
brew tap qv2ray/rye
brew install qv2ray/rye/qv2ray qv2ray/rye/v2ray
```

:::

### Scoop (Windows)

:::tip 非中国大陆用户注意
以下命令使用了 [FastGit](https://doc.fastgit.org/zh-cn/) 加速访问 GitHub，为中国大陆用户提供更好的体验。

若您并非中国大陆用户，或无需要加速访问 GitHub，可参考英文文档操作。
:::

[Scoop](https://scoop.sh) 是 **Windows** 的一个包管理器。

**使用此方法安装需要您对命令行有一定的基本了解**。请在 **Powershell** 中执行以下命令：

1. 安装 Scoop（已安装可跳过此步）：
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser # 允许执行脚本
   iwr -useb 'https://cdn.jsdelivr.net/gh/kidonng/scoop-install@fastgit/install.ps1' | iex
   ```
2. 添加 `mochi` bucket：
   ```powershell
   scoop bucket add mochi https://hub.fastgit.org/Qv2ray/mochi
   ```
3. 安装 Qv2ray (所有应用和插件参见 https://github.com/Qv2ray/mochi/tree/master/bucket)：
   ```powershell
   scoop install mochi/qv2ray
   ```
4. 若要升级，只需将命令中的 `install` 替换为 `update`:

   ```powershell
   scoop update mochi/qv2ray
   ```

:::tip 提示
你可能需要安装[最新的 Visual C++ 可再发行软件包](https://support.microsoft.com/zh-cn/help/2977003/the-latest-supported-visual-c-downloads).
:::

### Chocolatey (Windows)

> [Chocolatey](https://chocolatey.org/) 是 **Windows** 的另一个包管理器。

**请使用管理员权限运行 Powershell** 并执行以下命令：

1. [安装 Chocolatey 包管理器](https://chocolatey.org/install)：
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```
2. 安装 Qv2ray：
   ```powershell
   choco install qv2ray
   ```

## 从 Linux 应用商店中获取

### Snapcraft

请参照我们的 [Snapcraft](https://snapcraft.io/qv2ray) 页面上的说明。

```bash
# 安装 Qv2ray:
$ sudo snap install qv2ray
# （或者用 sudo snap install qv2ray --edge 来使用开发版）

# 升级 Qv2ray：
$ sudo snap refresh qv2ray
```

### Flathub (不推荐)

:::warning 不推荐 (2020/09/18)
由于维护者咕咕咕已不再更新，强烈不推荐从 Flathub 安装 Qv2ray。
:::

1. 设置 Flatpak 环境：[官方文档](https://flatpak.org/setup/)。
2. 安装 Qv2ray：

   ```bash
   # 安装 Qv2ray：
   $ flatpak install com.github.Qv2ray

   # 升级 Qv2ray：
   $ flatpak update
   ```

## 从源码编译

- 请参考 [手动构建 Qv2ray](../hacking/manuallybuild.md) 一节。
