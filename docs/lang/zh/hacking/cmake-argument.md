---
title: CMake 参数参考
---

# CMake 参数参考

## `USE_MINGW`
- 默认： `OFF`
- 说明：使用MinGW或gcc进行编译

## `QV2RAY_AUTO_DEPLOY`
- 默认： `OFF`
- 说明：在编译成功后自动运行 `windeplaudqt` 和 `macdeplaudqt`

## `BUILD_TESTING`
- 默认： `OFF`
- 描述：当设置为 `ON`时，将会构建单元测试。

## `QV2RAY_DEFAULT_VASSETS_PATH` and `QV2RAY_DEFAULT_VCORE_PATH`
- 默认： `unset`，当设置为 set 时，将在首次启动时检测指定路径。
- 在通过环境变量分发 Qv2ray 且 V2Ray Core 路径不变时，这很有用。

## `QV2RAY_DISABLE_AUTO_UPDATE`
- 默认： `OFF`
- 说明：禁用自带的更新检查器。 在通过软件包管理器控制源分发Qv2ray 时，这很有用。

## `QV2RAY_BUILD_INFO` / `QV2RAY_BUILD_EXTRA_INFO`
- 默认： `Qv2ray from manual build` 和 ***版本号***
- 说明：这些字符串将在 Qv2ray的“关于”对话框中显示。
- 注意：您可能也想使用具有相同名称的环境变量。

## `QV2RAY_HAS_BUILTIN_THEMES`
- 默认： `ON`
- 说明：启用内置主题(例如 `psblock` 和 `flatwhile`)。

## `QV2RAY_HAS_BUILTIN_PROTOCOL_PLUGIN`
- 默认： `ON`
- 说明： 在编译 Qv2ray 时也一同编译 `内置协议支持` 插件。

## `QV2RAY_HAS_BUILTIN_SUBSCRIPTION_PLUGIN`
- 默认： `ON`
- 说明： 在编译 Qv2ray 时也一同编译 `内置订阅支持` 插件。

## `QV2RAY_EMBED_TRANSLATIONS`
- 默认： `ON`
- 说明：将翻译资源 (`*.qm`) 嵌入到 Qv2ray 二进制文件，而不是像 `/usr/share/qv2ray/translations/` 一样。

## `QV2RAY_HAS_SINGLEAPPLICATION`
- 高级
- 默认： `ON`
- Description: Use SingleApplication for handling single application instance.

## `QV2RAY_SINGLEAPPLICATION_PROVIDER` / `QV2RAY_QNODEEDITOR_PROVIDER`
- 高级
- 默认： `module`
- Description: Component providers, set to `package` if those could be found as a package.

## `QV2RAY_UI_TYPE`
- 高级
- 默认： `QWidget`
- Description: Qv2ray GUI Type, possible values are `QWidget`, `QML` and `CLI`
- Deprecated: For Qv2ray v3.0, GUI components will be splitted into plugins.

## `QV2RAY_QT6`
- Default: `OFF`
- Description: Make Qv2ray explicitly compile against Qt6
- 已弃用：对于Qv2ray v3.0 ，只支持 Qt6

## `QV2RAY_QML_LIVE_UPDATE`
- 高级
- Experimental
- Default: `OFF`
- Description: Integrate QMLLive for live QML reload.

## `QV2RAY_TRANSLATION_PATH`
- 默认： `unset`
- Description: When set, the specified path will be used for searching translations files.

## `USE_SYSTEM_LIBUV`
- 默认： `OFF`
- Description: When set to `ON`, `libuv` from system package will be dynamically linked. Pay extreme attention to version of `libuv` if you want to turn this on.
