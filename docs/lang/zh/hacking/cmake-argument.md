---
title: CMake 参数引用
---

# CMake 参数引用

## `使用教程`
- 默认： `关闭`
- 说明：用于编译MinGW 和 gcc。

## `自动部署`
- 默认： `开启`
- 说明：在编译成功后自动运行 `win部署qt` 和 `mac部署qt`

## `构建测试`
- 默认： `关闭`
- 描述：当设置为 `开启`时，将会构建单元测试。

## `QV2RAY默认设置路径` 和 `QV2RAY默认核心路径`
- 默认： `取消设置`，当设置时，将在首次启动时检测到指定的路径。
- 当Qv2ray分布在V2Ray核心路径固定的环境中时非常有用。

## `QV2RAY禁用自动更新`
- 默认： `关闭`
- 说明：内置的新版本检查器将被禁用。 当通过软件包管理器控制源分发Qv2ray 时，这很有用。

## `QV2RAY构建信息` / `QV2RAY构建附加信息`
- 默认： `Qv2ray来自手动构建` 以及 ***版本号***
- 说明：这些字符串将在 Qv2ray的“关于”对话框中显示。
- 注意：您也可能想要使用具有相同名称的环境变量。

## `QV2RAY内置主题`
- 默认： `开启`
- 描述：启用内置主题(例如 `psblock` 和`flatwhile`)。

## `QV2RAY内置的协议插件`
- 默认： `开启`
- 描述：使用 `QvPlugin内置协议支持` 插件与 Qv2ray

## `QV2RAY内置的订阅插件`
- 默认： `开启`
- 描述：启用 `QvPlugin-内置订阅支持` 插件与 Qv2ray。

## `QV2Ray嵌入式翻译`
- 默认： `开启`
- 描述：嵌入翻译资源 (`*.qm`) 到 Qv2ray 二进制，而不是共享资源，例如 `/usr/share/qv2ray/translations/`。

## `QV2RAY只有一个应用程序`
- 高级
- 默认： `开启`
- 描述：使用单个应用程序处理单个应用程序实例。

## `QV2RAY应用程序提供程序` / `QV2RAY Q节点编辑器提供程序`
- 高级
- 默认： `模块`
- 描述：组件提供程序，设置为`package`（如果可以作为包找到）。

## `QV2RAY UI类型`
- 高级
- 默认： `编辑小部件`
- 说明：Qv2ray GUI 类型，可能的值是 `QWidget`, `QML` 和 `CLI`
- 废弃：对于Qv2ray v3.0，GUI组件将被拆分成插件。

## `QV2RAY_QT6`
- Default: `OFF`
- Description: Make Qv2ray explicitly compile against Qt6
- Deprecated: For Qv2ray v3.0, only Qt6 is supported

## `QV2RAY_QML_LIVE_UPDATE`
- 高级
- Experimental
- Default: `OFF`
- Description: Integrate QMLLive for live QML reload.

## `QV2RAY_TRANSLATION_PATH`
- Default: `unset`
- Description: When set, the specified path will be used for searching translations files.

## `USE_SYSTEM_LIBUV`
- Default: `OFF`
- Description: When set to `ON`, `libuv` from system package will be dynamically linked. Pay extreme attention to version of `libuv` if you want to turn this on.
