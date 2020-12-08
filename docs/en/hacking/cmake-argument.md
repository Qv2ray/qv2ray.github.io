---
title: CMake Argument Reference
---

# CMake Argument Reference

:::tip Work In Progress
This part is being written. Contribution welcomed!
:::

## Qv2ray
* `QV2RAY_DISABLE_AUTO_UPDATE`: when set to `ON`, the built-in new version checker will be disabled. This is useful when distributing Qv2ray through package-manager controlled sources.
* `QV2RAY_BUILD_INFO` and `QV2RAY_BUILD_EXTRA_INFO`: when set, these strings will be displayed in "About" dialog of Qv2ray.
* `QV2RAY_DEFAULT_VASSETS_PATH` and `QV2RAY_DEFAULT_VCORE_PATH`: default values are `"unset"`. When set, the specified paths will be detected upon first-time launch. Useful when Qv2ray is distributed through environments where V2Ray Core paths are fixed.
* `QV2RAY_HAS_BUILT_IN_THEMES`: when set to `ON`, Qv2ray will be built with built-in themes (such as `psblack` and `flatwhite`) attached.
* `QV2RAY_AUTO_DEPLOY`: when set to `ON`, command for deploying Qt applications will be automatically run after a successful build.
* `QV2RAY_TRANSLATION_PATH`: default value is `"unset"`. When set, the specified path will be searched for translations files.

* `EMBED_TRANSLATIONS`: when set to `ON`, the translation resources (`*.qm`) will be embedded into target binary, instead of installing into shared assets like `/usr/share/qv2ray/translations/`.
* `BUILD_TESTING`: when set to `ON`, the unit tests will be built.

* `QVPLUGIN_INTERFACE_INCLUDE_DIR`: plugin interface source directory.
* `QV2RAY_QNODEEDITOR_PROVIDER`, `QV2RAY_ZXING_PROVIDER` and `QV2RAY_SINGLEAPPLICATION_PROVIDER`: default values are `"module"`. When set to `"package"`, these dependencies will be sought and dynamically linked, instead of built from and statically linked to submodule sources. 
* `USE_SYSTEM_LIBUV`: default value is `OFF`. When set to `ON`, `libuv` from system package will be dynamically linked. Pay extreme attention to version of `libuv` if you want to turn this on.

## QvPlugin-SS

## QvPlugin-SSR

## QvPlugin-Trojan

## QvPlugin-Trojan-Go

## QvPlugin-NaiveProxy
