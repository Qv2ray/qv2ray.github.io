---
title: 手动构建 Qv2ray 项目
---

# 手动构建 Qv2ray 项目

你可手动构建 Qv2ray，以支持我们尚未支持的平台。

## 构建依赖

首先，请确保你的环境满足以下依赖的要求：

- Qt 版本 `>= 5.11` （推荐 `5.13` 或 `5.14`）
- gRPC 与 protobuf
  - 在 Windows 下构建 Qv2ray 时，`gRPC` 和 `protobuf` 两者都需要。
  - 在 Linux 和 macOS 下构建 Qv2ray 时，只有 `protobuf` 是必须的，而 `gRPC` 可以替换成一个自制的库 `libqvb` 。
- `OpenSSL`
  - 如果你没有 `OpenSSL`，构建可能 **不会失败**，因为它是一个 **运行时依赖**。

其次，编译器要支持并使用 C++17，需要包括嵌套命名空间（nested namespace）、结构化绑定（tuple expansion）以及内联变量（inline variable）等特性的支持：

- Linux 下的 `gcc7` 即可支持。
- Windows 下的 MSVC 需要 `>=14.2`。

:::danger 别用 gRPC 1.26.0
注意: 这个版本的 gRPC 有一个已知问题，会导致 Qv2ray 运行后无法退出，并使得 CPU 空转，严重增加系统负担。
切勿使用 gRPC 1.26.0。
:::

## 获取源码

有多种方式获取 Qv2ray 的源码。你可以通过下面的任意方式获取:

- Git 客户端: `git clone https://github.com/Qv2ray/Qv2ray`
- 通过 GitHub 直接下载仓库上某个分支的源码（不建议这样做，因为它缺少 Git submodule 的元数据）

## 构建步骤

假设你：

1. 安装了 Qt 并且配置了相应的环境变量，从而在 Terminal/Shell/Command Prompt 中至少能成功执行 `qmake --version`；
2. 正确获取了源码和所有的子模块 (submodule)。

### 构建之前

- Arch Linux：使用 pacman 安装这两个包: `pacman -S grpc protobuf`
- macOS：通过 Homebrew 安装两个包: `brew install grpc protobuf`
- Windows:
  - 你可以从 [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps) 这个仓库 Release 中下载 [gRPC dependency package - x64](https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x64-windows.7z) 或者 [gRPC dependency package - x86](https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x86-windows.7z)，然后解压到 `libs/x**-windows/` 目录, 其中 `**` 是 `86` 或 `64`；或者：
  - 你可以使用 `vcpkg install grpc` 在 Windows 上通过 MSVC 手动构建 `gRPC`, 不过这通常会花点时间，且需要稳定的网络环境（没梯子就算了）。

:::danger Windows: Qv2ray-deps -> MSVC2019+
若你选择直接使用 Qv2ray-deps 项目中的预编译包，你至少需要使用 MSVC2019 来进行 Linking，否则可能会遇到各种谜之问题。
这是因为 GitHub Actions 上用于编译 Qv2ray-deps 项目的编译器是 MSVC2019。
若你不想安装 MSVC2019+，你可以选择使用 vcpkg 手动编译安装，祝君好运。
:::

:::warning
确保你安装了 `grpc_cpp_plugin` 和 `protoc`, 它们在下一步中由 `cmake` 使用.
:::

### 构建脚本

```shell
cd Qv2ray
git submodule update --init # 拉取然后检出所有子模块到对应的目录。例如，Git 仓库目录下的 3rdparty/ 目录。
mkdir build && cd build

# 调用cmake
# 有不少选项可用, 如果需要,建议使用cmake-gui.
cmake ..
# 例如： "cmake .. -DCMAKE_INSTALL_PREFIX=" + 想要的安装目录。
# 又如： "cmake .. -DCMAKE_BUILD_TYPE=Release" 如果你想编译一个 Release 构建。

cmake --build . # 可以再附加 `--parallel N` 选项加速构建.
```

:::tip 莫急！
在 Windows 和 macOS 上经过这些步骤后，你可能还不能直接运行 `qv2ray.exe` 或者打开 `qv2ray.app` 包。
你还需要参考下面的部署步骤以为 Qv2ray 补全所需的运行时依赖。
:::

## 部署

在打包 Qv2ray 或使用它之前，还有一点事要做，即运行下面命令：

```shell
cmake --install . # 注意 "--install" 选项后面的点
```

在 Windows/macOS 上，这会自动复制所有依赖到一个目录。这个目录是你之前使用 `CMAKE_INSTALL_PREFIX` 命令行参数或 CMake GUI 工具指定的。如果要想改变那个目录，你需要重新生产 CMake 缓存文件。
