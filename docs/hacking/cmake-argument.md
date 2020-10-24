---
title: CMake 相关选项说明
---

# CMake 相关选项说明

:::tip WIP
本部分正在施工中，英文文档部分完工之后即将开写。

敬请期待
:::

## Qv2ray
* `QV2RAY_DISABLE_AUTO_UPDATE`: 设为 `ON` 时将禁用内置的新版本检查。通过包管理器控制的渠道分发 Qv2ray 时，此项很有用。
* `QV2RAY_BUILD_INFO` 及 `QV2RAY_BUILD_EXTRA_INFO`: 设定之后，这些文本将显示于 Qv2ray 的“关于”对话框中。
* `QV2RAY_DEFAULT_VASSETS_PATH` 及 `QV2RAY_DEFAULT_VCORE_PATH`: 默认为 `"unset"`。设定之后，初次启动时将会优先检查这些位置的 V2Ray 核心。将 Qv2ray 分发到核心路径固定的平台上时，此项很有用。
* `QV2RAY_HAS_BUILT_IN_THEMES`: 设为 `ON` 后，Qv2ray 会将内置主题 (例如 `psblack` 和 `flatwhite`) 一并带上。
* `QV2RAY_AUTO_DEPLOY`: 设为 `ON` 后，构建完成之后会自动运行 Qt 的部署（deployment）命令。
* `QV2RAY_TRANSLATION_PATH`: 默认为 `"unset"`。设定之后，会从所指定的路径搜索翻译文件。

* `EMBED_TRANSLATIONS`: 设为 `ON` 后，翻译资源文件 (`*.qm`) 将被直接嵌入二进制中，而不是被安装到 `/usr/share/qv2ray/translations/` 之类的路径里。
* `BUILD_TESTING`: 设为 `ON` 后，构建时会包含单元测试。

* `QVPLUGIN_INTERFACE_INCLUDE_DIR`: 插件接口源码的路径。
* `QV2RAY_QNODEEDITOR_PROVIDER`, `QV2RAY_ZXING_PROVIDER` 及 `QV2RAY_SINGLEAPPLICATION_PROVIDER`: 默认为 `"module"`。当设为 `"package"` 时，构建时将从系统查找并动态链接到这些依赖，而非从 Git 子模块的源码构建并静态链接。
* `USE_SYSTEM_LIBUV`: 默认为 `OFF`。设为 `ON` 后，将使用并动态链接到系统的 `libuv`。要开启此选项，需格外注意系统的 `libuv` 版本。
