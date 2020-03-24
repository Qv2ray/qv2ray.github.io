---
title: 下载 Qv2ray
---

# 下载 Qv2ray

你需要先下载Qv2ray的某个版本的Release文件才能开始使用Qv2ray。

## 1. GitHub Release 二进制文件

从 [Qv2ray GitHub Release](https://github.com/Qv2ray/Qv2ray/releases) 页面下载 Qv2ray 编译好的二进制版本。 推荐 **Windows** 和 **macOS** 用户采取这种方法。 这种方法同样适用于没有合适的 Qv2ray 软件包的 Linux 发行版来安装。

遵循如下步骤:

1. 在浏览器中打开 [Qv2ray GitHub Release 页面](https://github.com/Qv2ray/Qv2ray/releases) 。
2. 选择一个 Release 版本。 或者直接下载[最新版](https://github.com/Qv2ray/Qv2ray/releases/latest)。
3. 选择一个能在你的系统平台上运行的软件版本，然后下载。 例如:
   - 对于 64 位 Windows 系统的用户: `Qv2ray-refs.tags.*******-win64.zip`
   - 对于 64 位基于 Linux 发行版系统的用户: `Qv2ray-refs.tags.*******-linux.AppImage`
   - 对于 MacOS系统的用户: `Qv2ray-refs.tags.*******-macOS.tar.gz`

:::tip 提示

`*******` 是当前 Release 的版本。

:::

## 2. GitHub Actions 编译版

不喜欢稳定版的功能，想要尝试不断开发中的新功能？你可以下载 Github Actions 中的编译版本：

1. 在浏览器中打开 [Qv2ray GitHub Actions 页面](https://github.com/Qv2ray/Qv2ray/actions) 。
2. 选择一个最近的成功编译的版本（会显示为✔️）然后点击。 你会进入这个版本的详细页面。比如 [这里](https://github.com/Qv2ray/Qv2ray/commit/de88bfc69e50bf7c4ce034756720bf06df42612a/checks?check_suite_id=377218225).
3. 点击 **Artifacts** 展开下拉菜单, 然后根据你的平台选择一个二进制包并下载。

## 3. 在包管理系统中安装此软件

### i. Arch Linux

你可以在 AUR (Arch User Repository, [AUR (en) - Home](https://aur.archlinux.org/) ) 中得到官方维护的 `PKGBUILD` 文件， 它会指导 Qv2ray 从源码编译的过程。

#### a. 使用在 AUR Helper 在 AUR 中安装

你可以使用某个 AUR helper（比如 `yay`, `yaourt`, `pikaur` 等）来自动处理 AUR 包的过程。

:::warning 注意

 接下来的例子使用的是 `yay`工具。 对于其他的 AUR helper, 请查阅相关文档。

:::

首先，你需要在 AUR 中搜索 `qv2ray`

```shell
$ yay -Ss qv2rayaur/qv2ray-dev-git 1.99.4.r47514d2-1 (+2 0.98%)     Qt cross platform v2ray GUI client (Dev branch build release)aur/qv2ray 1.3.8.0-1 (+4 1.23%)     Qt cross platform v2ray GUI client
```

然后，选择合适的 Qv2ray 版本进行安装。有两个可供选择的版本：

1. **稳定版**, 稳定版的软件包名叫做 `qv2ray`。 这个软件包是根据 GitHub 仓库的 `master` 分支构建的, 这个版本对于正常使用而言是足够稳定的了。
2. **开发版**, 开发版的软件包名叫做 `qv2ray-dev-git`。这个软件包是根据 GitHub 仓库的 `dev` 分支构建的，拥有最新的特性和完善的功能，使用不稳定的软件版本将可能会导致潜在的风险。

:::warning "STABLE" 第一版注意事项

随着 Qv2ray `v1.99.5` (`v2 RC 2`)版本的问世, “稳定”的 `v1.3.8.0` 版软件将不会长期维护下去了。我们建议用户使用 `qv2ray-dev-git` 版以跟上我们的开发进度。然而我们还是会把对重大 bug 的修复向后移植到 `v1.3.8.0` 版本，~~如果开发团队的时间允许的话~~。

根据个人情况选择合适的版本进行安装。这里我们选择安装 `qv2ray-dev-git`:

```shell
$ yay -S qv2ray-dev-git
```

当这个命令运行结束并成功退出时，Qv2ray 应该就可以使用了。

#### b. 比较复杂的从 AUR 中下载的方法

```shell
# 1. 克隆AUR仓库 (以`qv2ray-dev-git`为例):
$ git clone https://aur.archlinux.org/qv2ray-dev-git.git

# 2. 进入 `PKGBUILD` 文件夹:
$ cd qv2ray-dev-git

# 3. 构建 Qv2ray 安装包:
$ makepkg -sf

# 4. 安装构建完毕的软件包:
$ sudo pacman -U qv2ray-dev-git-v1.99.4.2550-1-x86_64.pkg.tar.zst
```

OK，安装结束。

## 源码编译

- 请参考 [手动构建 Qv2ray](https://github.com/Qv2ray/Qv2ray/wiki/Manually-Build-Qv2ray_zh) 页面。
