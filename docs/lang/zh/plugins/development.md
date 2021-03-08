---
title: 写入插件
---

# 写入插件

- Qv2ray 插件文档

## 什么是插件

从技术上讲，一个插件是实现特定接口的共享库。 `Qv2rayPlugin::QvPluginInterface`。 因此可以通过 Qv2ray加载。

## 写入插件时的必填项

### 编译器版本 / 选项

- 对于Linux和macOS，没有编译器限制。
- 编译插件需要MSVC
- `-fno-sized-deploadation` 应该用于编译插件，尤其是在“**使用 Github Action 构建插件**”

### Qt 版本限制

- 这是一个 Qt 限制，一个插件所针对的版本不应大于加载器应用程序的版本(在这种情况下的 Qv2ray )
- 我们建议使用 `Qt 5.11.3` 来构建插件，因为这是最古老的 Qv2ray 支持。

### 第三方连接时间和/或运行时间依赖关系

- These dependencies **should** be statically linked into the plugin library, otherwise:
  - 告诉用户从任何地方下载/安装所有依赖关系库。
- **异常：OpenSSL _未被静态连接_。**
  - Qv2ray 有自己的 OpenSSL 依赖关系检查，将确保兼容的 OpenSSL 已安装。

## 创建插件

您在启动插件时有两个选项。

1. 正在使用提供的 `模板` 项目创建插件：

   有一个名为 [QvPlugin模板](https://github.com/Qv2ray/QvPlugin-Template)的仓库，它可以用来创建你自己的插件。

2. 从零开始创建插件。

### 1. 使用模板项目

1. 点击Github 仓库页面中的“使用此插件”并按照说明操作。
2. 复制您的仓库刚刚创建。
3. 执行命令，因为Github 不会在模板仓库中持久子模块数据。

   ```bash
   git 子模块添加 --force https://github.com/Qv2ray/QvPlugin-Interface/./接口
   ```

4. 选择您的 `构建生成器`，方法是： 删除不需要的项目文件，例如 `QvSimplePlugin。 ro` 或 `CMakeLists.txt` 将不需要的 CI 配置从 `删除。/.github/workflows/`

5. 打开 `.pr` 文件或 `CMakeLists.txt` 在 QtCreator。
6. 在 `QvSimplePlugin.hpp` 中进行任何修改 **特别是插件元数据**
7. 在本地测试构建，然后推到 Github 查看Github 操作是否可以通过。

### 2. 从零开始创建插件

1. 创建一个git仓库...
2. 在 `https://github.com/Qv2ray/QvPlugin-Interface/` 中添加插件接口作为子模块
3. 将 `QvPluginInterface.cmake` or `QvPluginInterface.pri` 纳入您的项目文件。
4. 编写一个类继承 `Qv2rayPlugin::Qv2rayInterface` 并实现每个虚拟函数。
5. 添加这些函数的栏位申报：

   ```cpp
   无效PluginLog(const QString &) const;
   无效PluginErrorMessageBox(const QString &);
   ```

6. 如果你的插件在元数据中没有 `SPECIAL_TYPE_KERNEL` 你可以返回一个 `nullptr` in `GetPluginKernel` 函数。 与 `GetSerializer`相同，但 **不返回 `nullptr` 在 `GetEventHandler()`** 中。
