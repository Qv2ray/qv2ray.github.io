---
title: 手动构建 Qv2ray 项目
---

# 手动构建 Qv2ray 项目

在我们当前的release(还)不支持的平台上,你可以手动构建Qv2ray.

## 0. 构建依赖

请确保你已经满足所有依赖需求.

- Qt version `>= 5.11`

- 推荐Qt 5.13, 5.14 

- gRPC & protobuf
  
  - 在Windows下构建Qv2ray时,`gRPC`和`protobuf`两者都需要.
  
  - 在Linux和macOS下构建Qv2ray时,只有`protobuf`是必须的,而`gRPC`可以替换成一个自制的库`libqvb`.
  
    **打包者注意: 别用`gRPC 1.26`, 他有一个阻碍Qv2ray启动的bug.**

- `OpenSSL`

- 如果你没有`OpenSSL`,构建可能 **不**会失败 因为它是一个 **<u>运行时依赖</u>**.

- 编译器要使用 `std-c++17`选项,需要包括 嵌套命名空间(nested namespace), 结构化绑定(tuple expansion )以及内联变量( inline variable)的支持.
  
  - Linux已知`gcc7`支持,是不错的选择 .
  - Windows需要最少MSVC 14.2版本.

## 1. 获取源码

有各种方式获取Qv2ray的源码,你可以通过下方式:

- Git: `git clone https://github.com/Qv2ray/Qv2ray`
- 直接下载github仓库上某个分支的源码 (**不建议这样做,因为它缺少git子模块(即git submodule)的元数据.**)

## 2. 构建步骤

假设你安装了Qt并且当前配置了`$PATH`环境变量,从而在Terminal/Shell/Command Prompt中至少能成功执行`qmake --version`,而且你也正确获取了源码和子模块 (submodule),使其位于某个目录下的一个叫做`Qv2ray`的目录:

### 2.0 构建之前

- Arch Linux: 使用pacman安装这两个包: `pacman -S grpc protobuf` .

- macOS: 通过homebrew安装两个包: `brew install grpc protobuf`

- 对于 Windows:
  
  - 从 [Qv2ray-deps](https://github.com/Qv2ray/Qv2ray-deps) 这个仓库release中下载 [gRPC dependency package - x64](https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x64-windows.7z) 或者 [gRPC dependency package - x86](https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x86-windows.7z)  然后解压到 `libs/x**-windows/` 目录, 其中 `**` 是 `86` 或 `64`.
  - 其他方式: 使用`vcpkg install grpc`在Windows上通过MSVC手动构建 `gRPC` , 这通常会花点时间,所以不鼓励这样.

:::warning
确保你安装了 `grpc_cpp_plugin` and `protoc`, 它们在下一步骤由cmake使用.
:::

### 2.1构建脚本

```shell
cd Qv2raygit submodule update --init # 拉取然后检出所有子模块到对应的目录,可能是git仓库目录下的3rdparty/
mkdir build && cd build

# 调用cmake
# 有不少选项可用, 如果需要,建议使用cmake-gui.
cmake .. 
# Or "cmake .. -DCMAKE_INSTALL_PREFIX=" + 想要的安装目录.
# Or "cmake .. -DCMAKE_BUILD_TYPE=Release" 如果你想发布一个release构建

cmake --build . # 可以再附加 `--parallel N`选项加速构建.
```

- **在Windows和macOS上经过这些步骤后,你还不能运行 `qv2ray.exe` 或者打开 `qv2ray.app` 包 ,你还需要参考下面的部署.**

## 3. 部署

在打包Qv2ray或使用它之前,还有一点事要做,即运行下面命令:

```shell
cmake --install . # 注意 "--install "选项后面的点
```

这会自动复制 (在Windows/macOS上) 所有依赖到一个目录,这个目录是你之前使用`CMAKE_INSTALL_PREFIX`命令行参数或cmake gui工具指定的.如果要想改变那个目录,你需要重新生产cmake缓存文件.
