---
title: CMake 参数参考
---

# CMake 参数参考

## `USE_MINGW`

- 默认： `OFF`
- 说明：使用MinGW或gcc进行编译

## `QV2RAY_AUTO_DEPLOY`

- 默认： `ON`
- 说明：在编译成功后自动运行 `windeplaudqt` 和 `macdeplaudqt`

## `BUILD_TESTING`

- 默认： `OFF`
- 描述：当设置为 `ON` 时，将会构建单元测试。

## `QV2RAY_DEFAULT_VASSETS_PATH` and `QV2RAY_DEFAULT_VCORE_PATH`

- 默认： `unset`，设置后将在首次启动时检测指定路径。
- 在通过环境变量分发 Qv2ray 且 V2Ray Core 路径不变时，这很有用。

## `QV2RAY_DISABLE_AUTO_UPDATE`

- 默认： `OFF`
- 说明：禁用自带的更新检查器。在通过软件包管理器控制源分发Qv2ray 时，这很有用。

## `QV2RAY_BUILD_INFO` / `QV2RAY_BUILD_EXTRA_INFO`

- 默认： `Qv2ray from manual build` 和 ***版本号***
- 说明：这些字符串将在 Qv2ray的“关于”对话框中显示。
- 注意：您可能也想使用具有相同名称的环境变量。

## `QV2RAY_HAS_BUILTIN_THEMES`

- 默认： `ON`
- 说明：启用内置主题（例如 `psblock` 和 `flatwhile`）。

## `QV2RAY_HAS_BUILTIN_PLUGINS`

- 默认： `ON`
- 描述：与 Qv2ray 一起构建内置插件
    - `QvPlugin-BuiltinSubscriptionSupport`
    - `QvPlugin-BuiltinPluginSupport`
    - `QvPlugin-BuiltinUtils`

## `QV2RAY_EMBED_TRANSLATIONS`

- 默认： `OFF`
- 说明：将翻译资源（`*.qm`）嵌入到 Qv2ray 二进制文件，而不是像 `/usr/share/qv2ray/translations/` 一样。

## `QV2RAY_HAS_SINGLEAPPLICATION`

- 高级
- 默认： `ON`
- 说明：使用单个应用程序处理单个应用程序实例。

## `QV2RAY_SINGLEAPPLICATION_PROVIDER` / `QV2RAY_QNODEEDITOR_PROVIDER`

- 高级
- 默认： `module`
- 说明：如果您是组件提供者，而且这应该作为一个包被找到，请设置为 `package`

## `QV2RAY_UI_TYPE`

- 高级
- 默认： `QWidget`
- 说明：Qv2ray GUI 类型，可能的值是 `QWidget`、`QML` 和 `CLI`
- 将被废弃：在 Qv2ray v3.0，GUI组件将被拆分为插件。

## `QV2RAY_QT6`

- 默认： `OFF`
- 说明：构建 Qv2ray时显式声明不使用Qt6
- 将被弃用：在Qv2ray v3.0，只有 Qt6 受到支持

## `QV2RAY_QML_LIVE_UPDATE`

- 高级
- 实验性
- 默认： `OFF`
- 说明：集成 QMLLive 以进行实时QML重载。

## `QV2RAY_TRANSLATION_PATH`

- 默认： `unset`
- 说明：设置后将会在指定路径搜索翻译文件

## `USE_SYSTEM_LIBUV`

- 默认： `OFF`
- 说明：当设置为 `ON` 时，`libuv` 系统包将被动态连接。如果您想要开启这个选项，请特别注意 `libuv` 版本。
