---
title: Manually Build Qv2ray
---

# Manually Build Qv2ray

You *can* build Qv2ray manually, on the platform which our release is not currently supported (yet).

## 0. Requirements and Dependencies

Please make sure you have already met all the requirements.

- Qt version `>= 5.11` is required for compilation without patching.
  - Never mind when you are porting Qv2ray to a earlier or later version of Qt.
  - In that case, you may want to modify `QV_QT_MAJOR_VERSION` and `QV_QT_MINOR_VERSION` in `CMakeLists.txt` 
- The latest version of Qt is always supported and recommended
- A compiler with `std=c++17` supported:
  - `gcc7` is known to be good to go.
  - At least version 14.2 of MSVC is required.

- Third-party libraries: (gRPC, protobuf, curl, openssl)

    | Target Platform | Installation Method                                                                 |
    | --------------- | ----------------------------------------------------------------------------------- |
    | Linux           | Install corresponding packages                                                      |
    | Windows (MSVC)  | Use `vcpkg` or use [**prebuilt binaries**](#a-prebuilt-binaries)                    |
    | Windows (MinGW) | See [Below](#mingw-packages)                                                        |
    | macOS           | Install corrensponding packages via `homebrew`, (note: macOS already provides curl) |
    | Android         | Linux host is supported, use [**prebuilt binaries**](#a-prebuilt-binaries),         |

    :::tip Extra Git Submoule for Android 
    [android-openssl](https://github.com/KDAB/android_openssl) provides OpenSSL binaries: use `git clone https://github.com/KDAB/android_openssl 3rdparty/android-openssl`
    :::

### a. Prebuilt Binaries
- The [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps/) repo is where we build and provide pre-built library dependencies for targeting Windows and Android.
- For Android version, we have used a [patched](https://github.com/Qv2ray/Qv2ray-deps/blob/master/0001_vcpkg_fix_curl_android_build.patch) vcpkg.

#### a.1 Download / Extraction Script
**Extra Dependencies: bash, jq, curl, 7zip** (Especially for Windows Users)

We have provided `libs/setup-lib.sh` to make it easy to install prebuilt binaries, usage:
- `cd` to `libs` directory
- `./setup-libs <PLATFORM> <ARCH`, (e.g. `./setup-libs.sh windows x64` or `./setup-libs.sh android arm`)
- Possible `<PLATFORM>` values: `windows`, `linux`, `android`
- Possible `<ARCH>` values: `x86`, `x64`, `arm`, `arm64` 
  - `tools` to install Protobuf generator binaries when cross-compiling to Android on Linux

The script downloads packages from [this release](https://github.com/Qv2ray/Qv2ray-deps/releases/tag/release) and extract, move contents to corrensponding `./libs/<ARCH>-<PLATFORM>/` directory.

#### a.2 Manually Obtaining Prebuilt Binaries

- Download the 7z files
- Extract and move the `{7Z_ROOT}/<PLATFORM>-<ARCH>/installed/<ARCH>-<PLATFORM>` to (not into) the `./libs/<ARCH>-<PLATFORM>` directory. 
- There must be `include`, `lib` or `share` subdirectories under `./libs/<ARCH>-<PLATFORM>`.
  - e.g. `./libs/x86-android/include` or `./libs/x64-windows/include/` exists 

### MinGW Packages:
MSYS2 is suggested, packages: 
- `mingw-w64-x86_64-grpc`
- `mingw-w64-x86_64-curl`
- `mingw-w64-x86_64-protobuf`
- `mingw-w64-x86_64-protobuf-c`
- `mingw-w64-x86_64-pkg-config`
- `mingw-w64-x86_64-re2`

## 1. Obtaining Source Tree

There are various approaches to obtain the source code of Qv2ray. You can get it from:
- Git: `https://github.com/Qv2ray/Qv2ray.git`
- Directly download the source code of a branch (**never do this due to the lack of git submodule metadata.**)
:::tip You can append options after `git clone`
`--branch <branch/tag>` To checkout the specific branch/tag after clone is created.
:::

:::warning
Qv2ray contains nested submodules, always use `--recursive` when cloning.
:::

## 2. Entering Compilation Directory

The following steps requires a proper `PATH`, that is, `qmake` could be found in the `PATH`.
`mkdir build; cd build;` to prevent pollution in the source tree.

## 3. Generate Compilation Scripts

You **need** to check for [CMake Argument References](cmake-argument) and add your own ones.

Run: `cmake ..`

- `CMAKE_INSTALL_PREFIX` is always suggested, for packaging and collect all required files in one go.
- `CMAKE_BUILD_TYPE` is always suggested, see [CMake Documentation](https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html)
  - The `Debug` and `Release` build will have different names for Qv2ray config directories, to prevent a development build from damaging the working copy of configurations. 
- `-GNinja` is suggested, iff you have `Ninja` or `ninja-build` installed.

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
You have your Qv2ray compiled and deployed! Start hacking!