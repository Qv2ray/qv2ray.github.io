---
title: 手动生成 Qv2ray
---

# 手动生成 Qv2ray

如果黑客想手动编译 Qv2ray

## 0. 需求和依赖关系

请确保您已经达到了所有要求。

- `x64`只适用于桌面平台。
- `arm`, `arm64`, `x86`, `x86_64` for Android 平台。

- 桌面平台需要Qt 版本`>= 5.11` `>= 6.0` Android。
  - ~~~从不想要将 Qv2ray 移植到更早或更晚版本的 Qt.~~
  - 在这种情况下，您可能想要修改 `QV_QT_MAJOR_VERSION` 和 `QV_QT_MINOR_VERSION` 在 `CMakeLists.txt`
- 总是支持和推荐最新版本的 Qt
- 支持`std=c+17` 编译器：
  - `gcc7`已知很好。
  - 至少需要14.2版MSVC。

- 第三方图书馆：(gRPC、原始、曲线、开放)

    | 目标平台            | 安装方法                                                 |
    | --------------- | ---------------------------------------------------- |
    | Linux           | 安装相应的软件包                                             |
    | 窗口 (MSVC)       | 使用 `vcpkg` 或使用 [**预构建的二进制文件**](#a-prebuilt-binaries) |
    | Windows (MinGW) | See [Below](#mingw-packages)                         |
    | macOS           | 通过 `homebrew`安装软件包, (注意：curl 已经预先安装)                 |
    | Android         | 支持Linux 主机。使用 [**预构建二进制**](#a-prebuilt-binaries),    |

    ::::tip Extra Git Submoule for Android [android-openssl](https://github.com/KDAB/android_openssl) provides OpenSSL binaries: use `git clone https://github.com/KDAB/android_openssl 3rdparty/android-openssl` ::: :

### a. 预建的二进制文件
- [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps/) repo 是我们构建并提供针对Windows 和 Android 的预建库依赖关系的地方。
- For Android version, we have used a [patched](https://github.com/Qv2ray/Qv2ray-deps/blob/master/0001_vcpkg_fix_curl_android_build.patch) vcpkg.

#### a.1 下载/提取脚本
**额外依赖关系: bash, jq, curl, 7zip** (专门适用于 Windows 用户)

我们提供了 `./libs/setup-lib.sh` 以便于安装预构建的二进制文件，用法：
- `cd` to `libs` 目录
- `./setup-libs <PLATFORM> <ARCH>`
  - 例如： `./setup-libs.sh windows x64` or `./setup-libs.sh android arm`
  - 可能的 `<PLATFORM>` 值： `winds`, `linux`, `android`
  - 可能的 `<ARCH>` 值： `x86`, `x64`, `arm`, `arm64`
  - Set `<ARCH>` to `tools` to install Protobuf generator binaries when cross-compiling to Android on Linux

脚本从 [这个版本](https://github.com/Qv2ray/Qv2ray-deps/releases/tag/release) 下载和提取的软件包，移动内容到 corrensponding `./libs/ARCH-PLATFORM /` 目录。

#### a.2 手动获取预构建的二进制文件

- 下载7z 文件
- 解压并移动 `{7Z_ROOT}/PLATFORM-ARCH/已安装/ARCH-PLATFORM` 到 `./libs/` 目录。
- 必须有 `包含`, `lib` 或 `共享` 子目录在 `./libs/ARCH-PLATFORM`
  - 例如： `./libs/x86-android/include` 或 `.libs/x64-windows/incluse/` 存在

### MinGW 软件包：
建议使用MSYS2，软件包：
- `mingw-w64-x86_64-grpc`
- `mingw-w64-x86_64-curl`
- `mingw-w64-x86_64-protobuf`
- `mingw-w64-x86_64-protobuf-c`
- `mingw-w64-x86_64-pkg-config`
- `mingw-w64-x86_64-re2`

## 1. 获取源树

获取Qv2ray源代码有各种方法。 你可以从：
- Git:`https://github.com/Qv2ray/Qv2ray.git`
- 直接下载分支的源代码(**因为缺少git子模块元数据而永远不会这样做。**) ::::tip 你可以在 `git 克隆` `--brant <branch/tag>` 在克隆创建后结帐指定分支/标签。 :::

:::警告 Qv2ray 包含嵌套子模块，在克隆时总是使用 `--递归` :::

## 2. 进入编译目录

以下步骤需要一个适当的 `PATH`, 也就是说， `qmake` 可以在 `PATH` 中找到。

运行: `mkdir build; cd build;`
- 只是为了防止源树中的污染。

## 3. 生成编译脚本

您 **需要** 查看 [CMake 参数](cmake-argument) 并添加您自己的参数。

运行: `cmake ...`

***对于Android，建议使用 `qt-cke...` 替代 `cmake ...`。***

- `一直建议CMAKE_INSTALL_PREFIX` 来打包和收集所有必需的文件。
- `CMAKE_BUILD_TYPE` 总是被推荐的，请参阅 [CMake 文档](https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html)
  - `调试` and `Release` building will have different name for Qv2ray config 目录， 防止开发工程损坏配置的工作副本。
- `-GNinja` 被推荐。iff您有 `Ninja` 或 `ninja build` 已安装。
- `Android可能需要 ANDROID_SDK_ROOT` 或 `ANDROID_NDK_ROOT`

## 4. 开始编译

开始编译！

运行： `cmake --build。`
- `--partial <NUMBER>` 如果您有足够的计算功率并想要执行并行编译，则是糖果。

## 5. 完成编译

复制已编译的伪影和资源到目标目录。

运行： `cmake --install 。` 或 `sudo`

- 这将自动将所有依赖项复制到 `CMAKE_INSTALL_PREFIX`。

:::warning There's a bug in `macdeployqt` where `libabsl_debugging_internal` is recognized as a debug library. 阻止QPlatform插件(例如) 正在部署的 QCocoaPlugin。 这会导致运行时异常，告诉“找不到平台插件”。

使用 [Qv2ray-补丁 `macdeplaudqt`](https://github.com/Qv2ray/macdeployqt-patched) 代替。 同时支持 Qt5 和 Qt6 :::

## 6. 完成
您已编译和部署您的 Qv2ray ！

开始黑客并欢迎贡献Qv2光！
