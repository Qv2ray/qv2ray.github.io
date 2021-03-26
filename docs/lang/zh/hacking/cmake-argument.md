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
- Default: `ON`
- Description: Enable built-in themes (such as `psblack` and `flatwhite`).

## `QV2RAY_HAS_BUILTIN_PROTOCOL_PLUGIN`
- Default: `ON`
- Description: Build `QvPlugin-BuiltinProtocolSupport` plugin together with Qv2ray.

## `QV2RAY_HAS_BUILTIN_SUBSCRIPTION_PLUGIN`
- Default: `ON`
- Description: Build `QvPlugin-BuiltinSubscriptionSupport` plugin together with Qv2ray.

## `QV2RAY_EMBED_TRANSLATIONS`
- Default: `ON`
- Description: Embed translation resources (`*.qm`) into Qv2ray binary, instead of shared assets like `/usr/share/qv2ray/translations/`.

## `QV2RAY_HAS_SINGLEAPPLICATION`
- 高级
- Default: `ON`
- Description: Use SingleApplication for handling single application instance.

## `QV2RAY_SINGLEAPPLICATION_PROVIDER` / `QV2RAY_QNODEEDITOR_PROVIDER`
- 高级
- Default: `module`
- Description: Component providers, set to `package` if those could be found as a package.

## `QV2RAY_UI_TYPE`
- 高级
- Default: `QWidget`
- Description: Qv2ray GUI Type, possible values are `QWidget`, `QML` and `CLI`
- Deprecated: For Qv2ray v3.0, GUI components will be splitted into plugins.

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
