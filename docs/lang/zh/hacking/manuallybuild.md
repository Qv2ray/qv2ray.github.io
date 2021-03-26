---
title: 手动构建Qv2ray
---

# 手动创建 Qv2ray

以防黑客想要手动编译Qv2ray。

## 0. Requirements and Dependencies

Please make sure you have already met all the requirements.

- `x64`-only for desktop platforms.
- `arm`, `arm64`, `x86`, `x86_64` for Android platform.

- Qt version `>= 5.11` is required for desktop platforms, `>= 6.0` required for Android.
  - ~~Never mind when you are porting Qv2ray to a earlier or later version of Qt.~~
  - In that case, you may want to modify `QV_QT_MAJOR_VERSION` and `QV_QT_MINOR_VERSION` in `CMakeLists.txt`
- The latest version of Qt is always supported and recommended
- A compiler with `std=c++17` supported:
  - `gcc7` is known to be good to go.
  - At least version 14.2 of MSVC is required.

- Third-party libraries: (gRPC, protobuf, curl, openssl)

    | Target Platform | Installation Method                                                         |
    | --------------- | --------------------------------------------------------------------------- |
    | Linux           | Install corresponding packages                                              |
    | Windows (MSVC)  | Use `vcpkg` or use [**prebuilt binaries**](#a-prebuilt-binaries)            |
    | Windows (MinGW) | See [Below](#mingw-packages)                                                |
    | macOS           | Install packages via `homebrew`, (note: curl is pre-installed)              |
    | Android         | Linux host is supported, use [**prebuilt binaries**](#a-prebuilt-binaries), |

    :::tip Extra Git Submoule for Android

    [android-openssl](https://github.com/KDAB/android_openssl) provides OpenSSL binaries: use `git clone https://github.com/KDAB/android_openssl 3rdparty/android-openssl`

    :::

### a. Prebuilt Binaries
- The [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps/) repo is where we build and provide pre-built library dependencies for targeting Windows and Android.
- 对于安卓版本，我们使用了一个[修补过的](https://github.com/Qv2ray/Qv2ray-deps/blob/master/0001_vcpkg_fix_curl_android_build.patch)vcpkg。

#### a.1 Download / Extraction Script
**额外依赖关系: bash, jq, curl, 7zip** (专门适用于 Windows 用户)

我们提供了 `./libs/setup-lib.sh` 以便于安装预构建的二进制文件，用法：
- `cd` 到 `libs` 目录
- `./setup-libs <PLATFORM> <ARCH>`
  - 例如： `./setup-libs.sh windows x64` or `./setup-libs.sh android arm`
  - 可能的 `<PLATFORM>` 值： `winds`, `linux`, `android`
  - 可能的 `<ARCH>` 值： `x86`, `x64`, `arm`, `arm64`
  - 在Linux上交叉编译到安卓时将 `<ARCH>` 设为 `tools` 以安装 Protobuf 生成器的二进制文件

脚本从 [这个版本](https://github.com/Qv2ray/Qv2ray-deps/releases/tag/release) 下载和提取的软件包，移动内容到 相应的 `./libs/ARCH-PLATFORM /` 目录。

#### a.2 手动获取预构建的二进制文件

- 下载7z 文件
- 解压并移动 `{7Z_ROOT}/PLATFORM-ARCH/已安装/ARCH-PLATFORM` 到 `./libs/` 目录。
- 必须有 `包含`, `lib` 或 `share` 下的子目录`./libs/ARCH-PLATFORM`
  - 例如： `./libs/x86-android/include` 或 `.libs/x64-windows/incluse/` 存在

### MinGW 软件包：
建议使用 MSYS2 软件包：
- `mingw-w64-x86_64-grpc`
- `mingw-w64-x86_64-curl`
- `mingw-w64-x86_64-protobuf`
- `mingw-w64-x86_64-protobuf-c`
- `mingw-w64-x86_64-pkg-config`
- `mingw-w64-x86_64-re2`

## 1. 获取源树

获取Qv2ray的源代码有多种方法。 你可以从：
- Git: `https://github.com/Qv2ray/Qv2ray.git`
- 直接下载分支的源代码（<strong x-id=“1”>由于缺少git子模块元数据，因此永远不要这样做。</strong>） ：：提示 您可以在`git clone`

`--brant <branch/tag>` 在克隆创建后检查指定的分支/标签。

:::

:::警告

Qv2ray 包含嵌套子模块，克隆时总是使用 `--recursive`。

:::

## 2. 进入编译目录

以下步骤需要一个适当的`PATH`，即，`qmake`可以在`PATH`中找到。

运行: `mkdir build; cd build;`
- 只是为了防止污染源。

## 3. 生成编译脚本

You **need** to check for [CMake Argument References](cmake-argument) and add your own ones.

Run: `cmake ..`

***For Android, using `qt-cmake ..` is suggested instead of `cmake ..`.***

- `CMAKE_INSTALL_PREFIX` is always suggested, for packaging and collect all required files in one go.
- `CMAKE_BUILD_TYPE` is always suggested, see [CMake Documentation](https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html)
  - The `Debug` and `Release` build will have different names for Qv2ray config directories, to prevent a development build from damaging the working copy of configurations.
- `-GNinja` is suggested, iff you have `Ninja` or `ninja-build` installed.
- `ANDROID_SDK_ROOT` or `ANDROID_NDK_ROOT` may be required for Android.

## 4. Start Compilation

Start compilation!

Run: `cmake --build .`
- `--parallel <NUMBER>` is sugguest if you have enough computation power and want to perform parallel compilations.

## 5. Finalize Compilation

Copy compiled artifacts and resources, into the destination directory.

Run: `cmake --install .` or with `sudo`

- This will automatically copy all dependencies into `CMAKE_INSTALL_PREFIX`.

:::warning

There's a bug in `macdeployqt` where `libabsl_debugging_internal` is recognized as a debug library. Which prevents QPlatformPlugin (i.e. QCocoaPlugin) from being deployed. This causes a runtime exception telling that "No Platform Plugin is Found".

Use [Qv2ray-patched `macdeployqt`](https://github.com/Qv2ray/macdeployqt-patched) instead. Which supports both Qt5 and Qt6

:::

## 6. Done
You have your Qv2ray compiled and deployed!

Start hacking and welcome to contribute Qv2ray!
