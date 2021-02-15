---
title: Manually Build Qv2ray
---

# Manually Build Qv2ray

You *can* build Qv2ray manually, on the platform which our release is not currently supported (yet).

## 0. Dependencies

Please make sure you have already met all the dependency requirements.

- Qt version `>= 5.11`

- Qt 5.13, 5.14 is recommended

- gRPC & protobuf

  - To build Qv2ray under Windows, both `gRPC` and `protobuf` are required.

  - To build Qv2ray under Linux or macOS, only `protobuf` is necessary where `gRPC` can be replaced by a self-made library called `libqvb`

    **Packagers’ Note: Do NOT use `gRPC 1.26`, it has a bug preventing Qv2ray to start.**

- OpenSSL

- The build may **not** fail if you don't have it since it's a **<u>runtime dependency</u>**.

- A compiler with `std-c++17` *nested namespace*, _tuple expansion_ and _inline variable_ support.

  - `gcc7` is known to be supported and good to go.
  - At least version 14.2 of MSVC is required.

## 1. Obtaining Source Code

There are various approaches to obtain the source code of Qv2ray. You can get it from:

- Git: `git clone https://github.com/Qv2ray/Qv2ray.git`
- Directly download the source code of a branch (**it’s not suggested for the lack of git submodule metadata.**)

> Tips:
>
> You can append options after `git clone` to do somethings after clone is created: append `--branch <branch/tag>` to checkout the specific branch/tag, append `--recursive/--recurse-submodules` to recursively initialize and clone all submodules.

## 2. Build instructions

Assume you have Qt installed and currently configured the `$PATH` which can execute at least `qmake --version` within the Terminal/Shell/Command Prompt and you have used the SCM to download the source code, the directory is called `Qv2ray`

If not, you need to set up a development environment:

- Debian/Ubuntu/RaspberryPiOS: Install packages using apt:

  `apt install qtbase5-dev qttools5-dev build-essential cmake git pkg-config libssl-dev`

### 2.0 Before Build

- Arch Linux: Install packages using pacman: `pacman -S grpc protobuf`

- Debian/Ubuntu/RaspberryPiOS: Install packages using apt: `apt install libprotobuf-dev libgrpc++-dev`

- macOS: Install packages through homebrew: `brew install grpc protobuf`

- For Windows:

  - Download [gRPC dependency package - x64](https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x64-windows.7z) or [gRPC dependency package - x86](https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x86-windows.7z) from the [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps) repo release and extract to the `libs/x**-windows/` directory, where `**` can be `86` or `64`.
  - Alternative method: Use `vcpkg install grpc` to manually build `gRPC` on Windows using **MSVC**, this usually takes long so it’s not encouraged.

:::warning
Make sure you have `grpc_cpp_plugin` and `protoc`, which will be used by cmake in the next step
:::

### 2.1 Build Scripts

```shell
cd Qv2ray
# If you were append option "--recursive" to the git clone command, you can skip the below one.
git submodule update --init --recursive # To fetch and checkout all submodules
mkdir build && cd build

# Call cmake
# There are many options available, for details, you may want the cmake-gui tool.
cmake .. -DCMAKE_BUILD_TYPE=Release
# Or "cmake .. -DCMAKE_INSTALL_PREFIX=" + your installation path.
# Or "cmake .. -DCMAKE_BUILD_TYPE=Release" if you want to ship a release build.

cmake --build . # You may want to append `--parallel N` to speed up the build.
```

- **You are not able to run `qv2ray.exe` or open the `qv2ray.app` package on Windows and macOS after these steps, if you want to do so. See below.**

## 3. Deployments

There are a few more works to do before packaging Qv2ray or start using it, please run following command.

```shell
cmake --install . # Note there's a dot after "--install "
```

This will automatically (Windows/macOS) copy all dependencies to the directory which you have specified using `CMAKE_INSTALL_PREFIX` in the previous step. You need to regenerate cmake cache file if you want to change that directory.
