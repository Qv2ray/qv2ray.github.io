---
title: 获取 Qv2ray 分布
sidebarDepth: 3
---

# 第 1 步：获取 Qv2ray 分布

要开始使用 Qv2ray，您应该先获得一个 Qv2ray的释放。 我们提供了许多发行方式，您可以根据您的喜好选择。

## GitHub 发布二进制文件

正在从[Qv2ray GitHub Release](https://github.com/Qv2ray/Qv2ray/releases)下载稳定的发行二进制软件。**Windows**和**macOS**用户。 这也适合Linux用户，因为他们可以使用我们的 **AppImage** release.

按以下方式执行：

1. 在 web 浏览器中打开[Qv2ray GitHub 发布页面](https://github.com/Qv2ray/Qv2ray/releases)。
2. 从发布中选择一个版本。 或者，您可以选择使用[最新的 **Stable** 发布](https://github.com/Qv2ray/Qv2ray/releases/latest)。
3. 根据您的平台在资产中选择并下载！ 例如：
   - 适用于Windows用户：
     - Windows 10/8.1/7: `Qv2ray.VERSION.Windows-x64/x86.7z` (档案) 或 `Qv2ray.VERSION.win32/64.exe` (安装程序).
     - Windows 2003/XP/2000/ME/98/...不支持(因为Qt 不支持)
   - 用于 Linux 64bit 用户：`Qv2ray.VERSION.linux-x64.AppImage`。
   - 对于macOS 用户：
     - macOS 10.14 and later: `Qv2ray.VERSION.macOS-x64.dmg`;
     - macOS 10.13: `qv2ray-legacy.dmg` (如果有)；
     - macOS 10.12及之前：不支持
   - 对于Ubuntu 19.04 / Debian 10 (或更多): ~~`qv2ray_VERSION_amd64.deb`~~ (移动到 [Qv2ray Debian 仓库](https://qv2ray.github.io/debian/) 自v2.6.1起)
   - 适用于 Arch Linux 用户：`qv2ray-VERSION-1-x86_64.pkg.tar.xz`

`版本`是该版本发布的。

::::tip Notes 用于 Linux AppImage 用户 虽然我们已将 `glibc` 和一些基本的 C++ 库绑定到 **AppImage** 软件包以支持一些旧但支持的磁盘， 强烈建议您自己移动到最新版本的Disstro/OS :::

:::警告注解在 ARM 上的 Windows ARM64 用户 Windows 10 可以使用 `Qv2ray.VERSION.Windows-x86.7z` (存档) 或 `Qv2ray. ERSION.win32.exe` (Installer) directly ，因为操作系统有 x86 架构的内置兼容层。 :::

## GitHub 操作艺人

如果您已经加入稳定版本的功能并愿意尝试开发中的新功能， 您可以从 GitHub 操作下载伪影：

1. 在您的浏览器中打开[Qv2ray GitHub 操作页面](https://github.com/Qv2ray/Qv2ray/actions)。
2. 选择最近成功(显示为 ✔️) 构建并点击它。 你应该被带到GitHub Build的详细页面。 这里是[个示例](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225)。
3. 点击**伪影**下拉菜单来展开它，然后根据您的平台选择二进制文件。

:::tip 您必须先登录 GitHub 才能访问 GitHub 操作。 :::

## 从软件包管理器下载

### Debian, Ubuntu 及其衍生物

安装相关工具。

```bash
sudo apt install gnupg ca-cat证书curl
```

#### Debian Stable 安装稳定版本的 Qv2ray

添加密钥(您可以选择使用 FastGit 来加速添加密钥)
```bash
curl -sSL https://qv2ray.net/debian/pubkey.gpg | sudo apt-key 添加 -
# curl -SSL https://raw.fastgit.org/Qv2ray/debian/master/pubkey.gpg | sudo apt-key 添加 -
```

添加软件仓库(可以根据要求启用FastGit 加速仓库)
```bash
echo "deb https://qv2ray.net/debian/ start main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
# echo "deb [arch=amd64] https://raw.fastgit.org/Qv2ray/debian/master/ stable main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
```

安装 Qv2ray
```bash
sudo apt 更新；sudo apt install qv2ray
```

#### Debian Stable 安装 Qv2ray 开发版本

Debian 开发版本支持AMD64、ARM64和MIPS64EL建筑，可用于装甲。

添加密钥(可选使用 FastGit 加速添加密钥)
```bash
curl -SSL https://qv2ray.net/debian-dev/pubkey.gpg | sudo apt-key added -
# curl -SSL https://raw.fastgit.org/Qv2ray/debian-dev/master/pubkey.gpg | sudo apt-key added -
```

添加软件仓库(可以根据要求启用FastGit 加速仓库)
```bash
echo "deb https://qv2ray.net/debian-dev/sustainable main" | sudo tee /etc/apt/sources.list.d/qv2ray-dev.list
# echo "deb https://raw.fastgit.org/Qv2ray/debian-dev/master/sustainmain" | sudo tee /etc/apt/sources.list.d/qv2ray-dev.list
```

安装 Qv2ray
```bash
sudo apt 更新；sudo apt install qv2ray
```

#### Debian 不稳定的

作为不稳定分支的使用者， 我们相信你有能力通过引用稳定版本信息来添加相应的存储库。 不稳定的分支仓库被编译为 `不稳定`。

#### Ubuntu及其官方衍生工具安装稳定版本的 Qv2ray

* 以下命令是在 `bash`中运行的，或者如果你正在使用另一枚炮弹， 请先运行 `bash` 在终端中。 *

添加密钥(您可以选择使用 FastGit 来加速添加密钥)
```bash
curl -sSL https://qv2ray.net/debian/pubkey.gpg | sudo apt-key 添加 -
# curl -SSL https://raw.fastgit.org/Qv2ray/debian/master/pubkey.gpg | sudo apt-key 添加 -
```

添加软件仓库(可以根据要求启用FastGit 加速仓库)
```bash
echo "deb https://qv2ray.net/debian/ `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
# echo "deb https://raw.fastgit.org/Qv2ray/debian/master/ `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray.list
```

安装 Qv2ray
```bash
sudo apt 更新；sudo apt install qv2ray
```

#### Ubuntu及其官方衍生工具安装了 Qv2ray 的开发版本

* 以下命令在 `bash`中运行，或者如果您正在使用另一个shell，请先运行 `bash` 终端。 *

添加密钥(您可以选择使用 FastGit 来加速添加密钥)
```bash
curl -SSL https://qv2ray.net/debian-dev/pubkey.gpg | sudo apt-key added -
# curl -SSL https://raw.fastgit.org/Qv2ray/debian-dev/master/pubkey.gpg | sudo apt-key added -
```

添加软件仓库(可以根据要求启用FastGit 加速仓库)
```bash
echo "deb https://qv2ray.net/debian-dev/`lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray-dev.list
# echo "deb https://raw.fastgit.org/Qv2ray/debian-dev/master/ `lsb_release -cs` main" | sudo tee /etc/apt/sources.list.d/qv2ray-dev.list
```

安装 Qv2ray
```bash
sudo apt 更新；sudo apt install qv2ray
```

### 基于 Linux 的Arch 盘片

#### 直接从 `arclinuxcn 安装`

我们已经进入 `arclinuxcn` 仓库。 如果您已经在使用它，只需在您的终端中输入：

```shell
sudo pacman -Syy qv2ray # 或 qv2ray-dev-git，见下文。
```

应该这样做。

:::tip 你也可能想要安装 `v2ray` 包来使用系统 V2Ray 核心。 :::

::::警告注意Arch Linux CN 中的Manjaro Hitchhikers

Manjaro 将 **延迟Arch Linux 的软件包更改**。 当断开ABI在上游改变时， **_Arch Linux_ CN** 将 **优先级Arch 用户** 而不是Manjaro。 **Manjaro users of Arch Linux CN** should always **be aware of and bear all consequences caused by the delayed update of its official source**, including issues like `symbol lookup error` and etc. 如果您坚持要使用它， 请 **不要以任何方式提交到 Qv2ray 或 Arch Linux CN 作为错误**。 对于那些不想遇到麻烦的人，请使用 AppImage / Snapcraft 版本代替。

每当像“Manjaro CN”这样的东西被创建时，这个命名将被删除，并且官方 **为其用户增加了 Qv2ray** 的封装工作量。 :::

#### 使用 AUR 助手从 AUR 下载

您可以从 AUR (Arch 用户仓库) 获取官方维护的`PKGBUILD`文件。[AUR (en) - Home](https://aur.archlinux.org/), 它将指导Qv2ray的构建过程。

您可以使用 AUR 助手，例如 `yay`, `yaourt`, `pikaur` 等于自动处理 AUR 软件包的构建过程。

:::tip note 以下示例正在使用 `yay`. 对于其他 AUR 助手，请在相关文档中检查使用情况。 :::

首先，您可以尝试在 AUR中搜索 `qv2ray`

```shell
$ yay -Ss qv2ray
aur/qv2ray-dev-git 1.99.4.r47514d2-1 (+2 0). 8%
     Qt cross平台 v2ray GUI 客户端 (Dev分支版本发布)
Aur/qv2ray 1。 .8.0-1 (+4 1.23%)
     Qt cross平台 v2ray GUI 客户端
```

然后选择 Qv2ray 的适当版本来安装。 有两个版本可用：

- **稳定版本**, 包名`qv2ray`. 这个软件包是由 Git 仓库的主分支构建的，并应足够稳定，以适合谨慎的用户。
- **开发版本**, 包名`qv2ray-dev-git`. 此软件包是从 Git 仓库的 dev 分支构建的。 除了最新的特点和改进之外，还存在使用不稳定分布的潜在风险。

根据您的实际情况选择。 这里我们选择安装 `qv2ray-dev-git`：

```bash
元-S qv2ray-dev-git
```

Qv2ray 将在完成命令后准备使用。

#### 从 AUR 下载，硬路

您可能不想使用 AUR 助手从 AUR安装 Qv2ray 然后看看下面的例子。

```bash
# 1. 克隆AUR仓库 (`qv2ray-dev-git` 作为例子)：
$git clone https://aur.archlinux.org/qv2ray-dev-git.git

# 2。 输入 `PKGBUILD` 文件夹：
$ cd qv2ray-dev-git

# 3。 生成 Qv2ray:
$make-sf

# 4。 构建后安装生成的软件包：
$ sudo pacman -U qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst
```

你已经完成了。

:::tip 软件包文件名(`qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst`) 取决于实际版本的 Qv2ray。 它可能在你的机器上有所不同，但这不是一个问题。 :::

### openSUSE / Fedora / CentOS

> Qv2ray 提供给 [openSUSE / Fedora / CentOS 用户](https://build.opensuse.org) [@zzndb](https://github.com/zzndb)

:::警告适用版本 因为Qt 版本的限制， 我们可能无法支持上面所有终生的磁盘，支持的磁盘详情请检查下面的 OBS 链接。 :::

类似AUR, 有两个版本的 Qv2ray 可供使用。 您可以根据自己的签名选择：

- 稳定操作： [Qv2ray](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray)
- 预览OBS： [Qv2射线预览](https://build.opensuse.org/package/show/home:zzndb:Qv2ray/Qv2ray-preview)

或者您可以直接从下面的链接获取更详细的安装指南：

- 下载Stagle: [Qv2ray](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray)
- 下载预览： [Qv2ray-预览](https://software.opensuse.org/download.html?project=home%3Azzndb%3AQv2ray&package=Qv2ray-preview)

::::警告CentOS 用户 在您安装OBS 项目上方的 Qv2ray 之前。 您需要添加 **EPEL** 仓库，这是Fedora为额外需要的依赖提供的。 欲了解更多信息，请检查 [Fedora EPELWiki](https://fedoraproject.org/wiki/EPEL)。 :::

:::tip Plugins 以上 [OBS 项目](https://build.opensuse.org/project/show/home:zzndb:Qv2ray) 也提供Qv2ray 族的插件。 在通过项目仓库安装 Qv2ray 之后(不通过手动下载 & 安装)， 您可以直接安装插件(使用此插件的项目名称相同的名称) 还提供预览版本插件使用 `-预览` postfix，使用您的软件包管理器。 :::

### Homebrew (macOS/Linux)

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

### 分数 (Windows)

> [分数](https://scoop.sh) 是一个 **Windows 的基于命令行的软件包管理器**

在 **Powershell** 中运行以下命令：

1. [安装分数](https://scoop.sh/#installs-in-seconds):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Current User # allows script execution
   iwr -useb get.scoop.sh | iex
   ```
2. 添加 `额外的` 桶：
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

### 巧克力(Windows)

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

## 从 Linux 应用商店下载

### 斯纳普尔卡

按照我们的 [Snapcraft 页面](https://snapcraft.io/qv2ray) 上的说明操作。

```shell
# 要安装软件包：
$ sudo snap install qv2ray
# sudo snap install qv2ray --edge (dev branch)
# 要更新软件包：
$ sudo snap refresh qv2ray
```

### Flathub (过时)

:::警告已废弃(2020/09/18) 从Flahub 安装Qv2ray 是官方 **已废弃**，因为维护者不再积极维护该软件包。 如果您有兴趣通过这个问题，请打开一个问题并告诉我们。 :::

1. 根据 [官方文档](https://flatpak.org/setup/) 设置Flatpak环境。
2. 安装 Qv2ray：
   ```shell
   # 要安装软件包：
   $ flatpak install com.github.Qv2ray
   # 要更新软件包：
   $ flatpak更新
   ```

## 从源代码创建

请参阅[手动构建Qv2ray](../hacking/manuallybuild.md)页面。
