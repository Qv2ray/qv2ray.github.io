---
title: CMake Argument Reference
---

# CMake Argument Reference

## `USE_MINGW`
- Default: `OFF`
- Description: For compiling use MinGW and gcc.

## `QV2RAY_AUTO_DEPLOY`
- Default: `ON`
- Description: Automatically run `windeployqt` and `macdeployqt` after a successful compilation.

## `BUILD_TESTING`
- Default: `OFF`
- Description: When set to `ON`, the unit tests will be built.

## `QV2RAY_DEFAULT_VASSETS_PATH` and `QV2RAY_DEFAULT_VCORE_PATH`
- Default: `unset`, when set, the specified paths will be detected upon first-time launch. 
- Useful when Qv2ray is distributed through environments where V2Ray Core paths are fixed.

## `QV2RAY_DISABLE_AUTO_UPDATE`
- Default: `OFF`
- Description: The built-in new version checker will be disabled. This is useful when distributing Qv2ray through package-manager controlled sources.

## `QV2RAY_BUILD_INFO` / `QV2RAY_BUILD_EXTRA_INFO`
- Default: `Qv2ray from manual build` and the ***Version Number***
- Description: These strings will be displayed in "About" dialog of Qv2ray.
- Note: You may also want to use the environment variables `_QV2RAY_BUILD_INFO_` and `_QV2RAY_BUILD_EXTRA_INFO_`.

## `QV2RAY_HAS_BUILTIN_THEMES`
- Default: `ON`
- Description: Enable built-in themes (such as `psblack` and `flatwhite`).

## `QV2RAY_HAS_BUILTIN_PLUGINS` 
- Default: `ON`
- Description: Build builtin plugins together with Qv2ray, for now, there are 
  - `QvPlugin-BuiltinSubscriptionSupport`
  - `QvPlugin-BuiltinPluginSupport`
  - `QvPlugin-BuiltinUtils`

## `QV2RAY_EMBED_TRANSLATIONS`
- Default: `OFF`
- Description: Embed translation resources (`*.qm`) into Qv2ray binary, instead of shared assets like `/usr/share/qv2ray/translations/`.

## `QV2RAY_HAS_SINGLEAPPLICATION`
- Advanced
- Default: `ON`
- Description: Use SingleApplication for handling single application instance.

## `QV2RAY_SINGLEAPPLICATION_PROVIDER` / `QV2RAY_QNODEEDITOR_PROVIDER`
- Advanced
- Default: `module`
- Description: Component providers, set to `package` if those could be found as a package.

## `QV2RAY_UI_TYPE`
- Advanced
- Default: `QWidget`
- Description: Qv2ray GUI Type, possible values are `QWidget`, `QML` and `CLI`
- Deprecated: For Qv2ray v3.0, GUI components will be splitted into plugins.

## `QV2RAY_QT6`
- Default: `OFF`
- Description: Make Qv2ray explicitly compile against Qt6
- Deprecated: For Qv2ray v3.0, only Qt6 is supported

## `QV2RAY_QML_LIVE_UPDATE`
- Advanced
- Experimental
- Default: `OFF`
- Description: Integrate QMLLive for live QML reload.

## `QV2RAY_TRANSLATION_PATH`
- Default: `unset`
- Description: When set, the specified path will be used for searching translations files.

## `USE_SYSTEM_LIBUV`
- Default: `OFF`
- Description: When set to `ON`, `libuv` from system package will be dynamically linked. Pay extreme attention to version of `libuv` if you want to turn this on.
