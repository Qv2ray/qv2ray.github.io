---
title: 编写插件
---

# 编写插件

- Qv2ray 插件文档

## 何为插件

插件，意即实现某一特定接口的共享库。在这里，这一特定接口指的是 `Qv2rayPlugin::QvPluginInterface` 接口。正因实现了这个接口，Qv2ray 的插件才能被正确加载与识别。

## 编写插件的前置条件

### 编译器版本 / 选项

- 对于 Linux 和 macOS，并无特殊限制。
- 对于 Windows，你需要使用 MSVC 来编译插件。
- 编译插件时应记得使用 `-fno-sized-deallocation` 选项，尤其是在使用 **GitHub Actions** 编译插件时。

### Qt 版本号限制

- Qt 本身有这样的限制：编译插件所使用的 Qt 版本不能高于编译主程序所使用的 Qt 版本。
- 建议使用 Qt `5.11.3` 版本编译插件，因为这是 Qv2ray 本体所能支持的最低 Qt 版本。

### 第三方的链接时、运行时依赖

- 这些依赖应当显式地 **静态链接** 进插件里，否则：
  - 应当通知用户从哪里能下载到对应的库文件。
- 例外情况：OpenSSL 不应进行静态链接。
  - Qv2ray 本体有其自身的 OpenSSL 依赖检查，会保证安装了合适版本的 OpenSSL。

## 创建插件

*你有两条路可选：*

1. 使用提供的模板工程以开始：
   Qv2ray 有个叫 [QvPlugin-Template](https://github.com/Qv2ray/QvPlugin-Template) 的项目仓库，你可以基于这个来开始你的插件编写。
2. 从头来。

### 1. 使用模板工程

1. 在 GitHub 仓库页面点击 “使用这个模板” 按钮，然后遵循说明操作。
2. 克隆你刚刚创建的仓库。
3. 执行下列命令，因为 GitHub 不会保留模板仓库的子模块（submodule）信息。
   ```bash
   git submodule add --force https://github.com/Qv2ray/QvPlugin-Interface/ ./interface
   ```
4. 配置你的构建生成器（`Build Generator`）:
   - 删掉不需要的文件：例如 `QvSimplePlugin.pro` 或者 `CMakeLists.txt`；
   - 删掉不需要的持续集成配置文件，在 `./.github/workflows/`。
5. 在 Qt Creator 里打开你选择留下的 `.pro` 或者 `CMakeLists.txt` 文件。
6. 修改 `QvSimplePlugin.hpp`，尤其是修改其中的 **插件元信息**（plugin metadata）。
7. 本地编写并测试，同时可以推送到远程以测试能否通过编译。

### 2. 从头来

1. 建立一个 Git 仓库。
2. 将 `https://github.com/Qv2ray/QvPlugin-Interface/` 添加为子模块。
3. 将 `QvPluginInterface.cmake` 或 `QvPluginInterface.pri` 文件加入你的工程。
4. 编写一个继承 `Qv2rayPlugin::Qv2rayInterface` 的类，并实现所有的虚方法。
5. 添加下列函数的 slot 实现：
   ```cpp
   void PluginLog(const QString &) const;
   void PluginErrorMessageBox(const QString &);
   ```
6. 若插件在其元数据中没有 `SPECIAL_TYPE_KERNEL`，你可在 `GetPluginKernel` 函数中返回 `nullptr`。
   对于 `GetSerializer` 函数也是一样, 但千万不要对 `GetEventHandler()` 也这么做。
