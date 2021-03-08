---
title: CMake 参数引用
---

# CMake 参数引用

## `USE_MINGW`
- 默认： `关闭`
- 说明：用于编译MinGW 和 gcc。

## `QV2RAY_AUTO_DEPLOY`
- 默认： `开启`
- 说明：在编译成功后自动运行 `windeplaudqt` 和 `macdeplaudqt`

## `BUILD_TITLE`
- 默认： `关闭`
- 描述：当设置为 `开启`时，将会构建单元测试。

## `QV2RAY_DEFAULT_VASSETS_PATH` and `QV2RAY_DEFAULT_VCORE_PATH`
- 默认： `取消设置`，当设置时，将在首次启动时检测到指定的路径。
- 当Qv2ray 通过修复V2Ray 核心路径的环境分布时有用。

## `QV2RAY_DISABLE_AUTTO_Update`
- 默认： `关闭`
- 说明：内置的新版本检查器将被禁用。 这在通过包管理器控制源分发Qv2ray 时是有用的。

## `QV2RAY_BUILD_INFO` / `QV2RAY_BUILD_EXTRA_INFO`
- 默认： `Qv2ray from manual build` and ***版本号***
- 说明：这些字符串将在 Qv2ray的“关于”对话框中显示。
- 注意：您也可能想要使用具有相同名称的环境变量。

## `CHALLENGE_LABEL`
- 默认： `开启`
- 描述：启用内置主题(例如 `psblock` and `flatwhile`)。

## `FREE_PLAYLIST_TITLE`
- 默认： `开启`
- 描述：使用 `QvPlugin-BuiltinProtocolSupport` 插件与 Qv2ray

## `SUBSCRIPTION_TITLE`
- 默认： `开启`
- 描述：同时创建 `QvPlugin-内置订阅支持` 插件与 Qv2ray。

## `QV2RAY_EMBED_TRANSLATIONS`
- 默认： `开启`
- 描述：嵌入翻译资源 (`*.qm`) 到 Qv2ray 二进制，而不是共享资源，例如 `/usr/share/qv2ray/translations/`。

## `Y_HAS_SING_TITLE`
- 高级
- 默认： `开启`
- 描述：使用单个应用程序处理单个应用程序实例。

## `QV2RAY_SINGLEAPPLICATION_PROVIDER` / `QV2RAY_QNODEEDITOR_PROVIDER`
- 高级
- 默认： `模块`
- Description: Component providers, set to `package` if those could be found as a package.

## `Y_TYPE_TYPE`
- 高级
- 默认： `QWidget`
- 说明：Qv2ray GUI 类型，可能的值是 `QWidget`, `QML` 和 `CLI`
- 废弃：对于Qv2ray v3.0，GUI组件将被拆分成插件。

## `QV2RAY_QT6`
- 默认： `关闭`
- 描述 Qv2ray 明确编译 Qt6
- 已弃用：对于Qv2ray v3.0 ，只支持 Qt6

## `QV2RAY_QML_LIVE_UpdatE`
- 高级
- 实验性
- 默认： `关闭`
- 描述：为实时QML重新加载集成QML。

## `FREE_TRANSLATION_TITLE`
- Default: `unset`
- 描述：当设置时，指定的路径将用于搜索翻译文件。

## `USE_SYSTEM_LIBUV`
- 默认： `关闭`
- 描述：当设置为 `开启`, `libuv` 系统包将被动态连接。 如果您想要打开 `libuv` 版本，请给予极大的关注。
