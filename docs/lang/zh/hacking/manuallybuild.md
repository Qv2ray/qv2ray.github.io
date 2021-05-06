---
title: 手动构建 Qv2ray 项目
---

# 手动构建 Qv2ray 项目

本文针对喜欢折腾并想手动构建 Qv2ray 项目的爱好者们。

## 0. 构建依赖

请确保你的环境满足以下依赖的要求。

- 对于桌面平台：仅支持 `x64` 架构

- 对于 Android 平台：`arm`、 `arm64`、 `x86` 或 `x86_64` 架构

- 桌面平台需要 Qt 版本 `>= 5.11` ，Android 平台需要 Qt 版本 `>= 6.0`

    - ~~将 Qv2ray 移植到更低或更高版本的 Qt 时请无视该条件~~
    - 在这种情况下，您可能需要修改 `CMakeLists.txt` 中的 `QV_QT_MAJOR_VERSION` 和 `QV_QT_MINOR_VERSION`

- 总是支持最新版本的 Qt ，推荐使用

- 支持 `std=c+17` 的编译器：

    - `gcc7` 即可支持
    - 最低 14.2 版本的 MSVC

- 第三方库：(gRPC、protobuf、curl、openssl)

    目标平台 | 安装方式
    --- | ---
    Linux | 安装相应的软件包
    Windows (MSVC) | 使用 `vcpkg` 或使用 [**预构建的二进制文件**](#a-%E9%A2%84%E6%9E%84%E5%BB%BA%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6)
    Windows (MinGW) | 见 [下文](#mingw-packages)
    macOS | 通过 `homebrew` 安装软件包（注意：curl 已经被预先安装）
    Android | 支持从 Linux 交叉编译，请使用[**预构建的二进制文件**](#a-prebuilt-binaries)，

    :::tip Android 平台下的额外 Git 子模块

    [android-openssl](https://github.com/KDAB/android_openssl) 提供了 OpenSSL 二进制文件：使用命令 `git clone https://github.com/KDAB/android_openssl 3rdparty/android-openssl` 下载

    :::

### a. 预构建的二进制文件

- [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps/) 是我们提供针对 Windows 和 Android 平台构建的预编译二进制依赖的仓库。
- 对于安卓版本，我们使用了一个 [修改过的](https://github.com/Qv2ray/Qv2ray-deps/blob/master/0001_vcpkg_fix_curl_android_build.patch) vcpkg。

#### a.1 下载 / 解压脚本

**额外依赖：bash 、 jq 、curl 、7zip** （对于 Windows 用户）

我们提供了`./libs/setup-lib.sh` ，可以很容易地安装预构建的二进制文件，用法：

- `cd`到`libs`目录
- `./setup-libs <PLATFORM> <ARCH>`
    - 例如`./setup-libs.sh windows x64`或`./setup-libs.sh android arm`
    - 可能的`<PLATFORM>`值： `windows` ， `linux` ， `android`
    - 可能的`<ARCH>`值： `x86` ， `x64` ， `arm` ， `arm64`
    - 在 Linux 上为 Android 交叉编译时将`<ARCH>`设置为 `tools` 以安装 Protobuf 生成器

该脚本从 [此 release](https://github.com/Qv2ray/Qv2ray-deps/releases/tag/release) 下载压缩包，解压并移动到相应的 `./libs/ARCH-PLATFORM/` 目录。

#### a.2 手动获取预构建的二进制文件

- 下载对应的 7z 压缩文件
- 解压并移动 `{7Z_ROOT}/PLATFORM-ARCH/installed/ARCH-PLATFORM` 到 `./libs/` 目录。
- `./libs/ARCH-PLATFORM` 下必须包含 `include` ， `lib`或`share`子目录。
    - 例如`./libs/x86-android/include` 或 `./libs/x64-windows/include/`

### MinGW 软件包：

建议使用 MSYS2 ，对应的软件包：

- `mingw-w64-x86_64-grpc`
- `mingw-w64-x86_64-curl`
- `mingw-w64-x86_64-protobuf`
- `mingw-w64-x86_64-protobuf-c`
- `mingw-w64-x86_64-pkg-config`
- `mingw-w64-x86_64-re2`

## 1. 获取源码树

有多种方式获取 Qv2ray 的源码，你可以使用以下任意方式：

- Git: `https://github.com/Qv2ray/Qv2ray.git`
- Directly download the source code of a branch (**never do this due to the lack of git submodule metadata.**)

:::tip You can append options after `git clone`

`--branch <branch/tag>` To checkout the specific branch/tag after clone is created.

:::

:::warning

Qv2ray contains nested submodules, always use `--recursive` when cloning.

:::

## 2. 进入编译目录

以下步骤需要正确的 `PATH` ，即可以在 `PATH` 下找到 `qmake` 。

执行： `mkdir build; cd build;`

- 只是为了防止污染源码树。

## 3. 生成编译脚本

您**需要**查看 [CMake 参数参考](cmake-argument) 并添加自己的参数。

执行： `cmake ..`

***构建 Android 时，使用 `qt-cmake ..` 而不是 `cmake ..`***

- 始终建议使用 `CMAKE_INSTALL_PREFIX` ，以便一次性打包和收集所有必需的文件。
- 始终建议使用 `CMAKE_BUILD_TYPE` ，请参阅 [CMake文档](https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html)
    - `Debug` 版本的 Qv2ray 配置目录名称将不同于 `Release` 版本，以防止开发版构建污染正式版构建的配置文件。
- 如果您已安装`Ninja` 或 `ninja-build` ，建议使用 `-GNinja`
- 构建 Android 时可能需要`ANDROID_SDK_ROOT` 或 `ANDROID_NDK_ROOT`

## 4. 开始编译

开始编译！

执行： `cmake --build .`

- 如果您拥有足够的算力并且想要执行并行编译，则推荐使用参数 `--parallel <并行数>`

## 5. 完成编译

将编译的成品和资源复制到目标目录中。

执行： `cmake --install .` 或 `sudo cmake --install .`

- 这将自动复制所有依赖到 `CMAKE_INSTALL_PREFIX` 。

:::warning

`macdeployqt` 中存在一个 bug ， `libabsl_debugging_internal` 被识别为调试库，这将阻止部署 QPlatformPlugin（即 QCocoaPlugin ），最终将导致运行时异常，提示“ No Platform Plugin is Found ”。

请改用 [Qv2ray 修改过的 `macdeployqt`](https://github.com/Qv2ray/macdeployqt-patched) 。同时支持 Qt5 和 Qt6

:::

## 6. 完成

你已经编译并部署了你自己的 Qv2ray！

开始折腾， Qv2ray 欢迎您的贡献！
