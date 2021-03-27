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
- Useful when Qv2ray is distributed through environments where V2Ray Core paths are fixed.

## `QV2RAY_DISABLE_AUTO_UPDATE`
- 默认： `OFF`
- 说明：禁用自带的更新检查器。 当通过软件包管理器控制源分发Qv2ray 时，这很有用。

## `QV2RAY_BUILD_INFO` / `QV2RAY_BUILD_EXTRA_INFO`
- Default: `Qv2ray from manual build` and the ***Version Number***
- Description: These strings will be displayed in "About" dialog of Qv2ray.
- Note: You may also want to use the environment variables with the same names.

## `QV2RAY_HAS_BUILTIN_THEMES`
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
- 已弃用：对于Qv2ray v3.0 ，只支持 Qt6

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
