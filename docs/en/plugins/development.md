---
title: Writing Plugins
---

# Writing Plugins

- Qv2ray Plugin Documentations

## What is a plugin

A plugin is, technically, a shared library that implements a specific interface, `Qv2rayPlugin::QvPluginInterface` in this case. So that can be loaded by Qv2ray.

### Prerequisites when writing a plugin

#### Compiler Version / Options

- For Linux and macOS, there’s no compiler limitations.
- MSVC is required when compiling a plugin.
- `-fno-sized-deallocation` Should be used when compiling the plugin, especially when “**Building plugins using Github Action**”

#### Qt Version Limitations

- It’s a Qt limit that the version which a plugin was built against should not be greater than that of the loader application (Qv2ray in this case)
- We suggest building plugins using `Qt 5.11.3` since it’s the oldest version Qv2ray supports.

#### Third-party link-time and/or run-time dependencies

- These dependencies **should** be statically linked into the plugin library, otherwise:
  - Tell the users to download/install all dependencies’ library from wherever they can.
- **Exception: OpenSSL *SHOULD NOT* be statically linked.**
  - Qv2ray has its own OpenSSL dependency check and will make sure a compatible OpenSSL has been installed.

### Creating a plugin

*You have 2 choices when initiating a plugin.*

1. Creating plugin using provided `Template` project:

   There’s a repository called [QvPlugin-Template](https://github.com/Qv2ray/QvPlugin-Template), which can be used to create your own plugin.

2. Creating plugin from from scratch.

#### 1. Using the template project

1. Click the “Use This Plugin” in the Github Repository page and follow the instructions.

2. Clone your repository just created.

3. Execute the command, since Github didn’t persist submodule data within the template repo.

   ```bash
   git submodule add --force https://github.com/Qv2ray/QvPlugin-Interface/ ./interface
   ```

4. Select your `Build Generator`, by doing:

   Remove unwanted project files e.g. `QvSimplePlugin.pro` or `CMakeLists.txt`

   Remove unwanted CI configurations by removing it from `./.github/workflows/`

5. Open the `.pro` file or `CMakeLists.txt` in QtCreator.

6. Do any modifications **especially plugin metadata** in the `QvSimplePlugin.hpp`

7. Test build locally, then push to the Github to see if the Github Action can pass.

#### 2. Creating a plugin from scratch

1. Create a git repoaitory

2. Add plugin interface in `https://github.com/Qv2ray/QvPlugin-Interface/` as a submodule

3. Include `QvPluginInterface.cmake ` or `QvPluginInterface.pri`into your project file.

4. Write a class, which inherits `Qv2rayPlugin::Qv2rayInterface` and implement every virtual functions.

5. Add slot declaration of those functions:

   ```c++
   void PluginLog(const QString &) const;
   void PluginErrorMessageBox(const QString &);
   ```

6. You may return a `nullptr` in `GetPluginKernel` function if your plugin does not have `SPECIAL_TYPE_KERNEL` in the metadata.

   The same as `GetSerializer`, but **do not return `nullptr` in the `GetEventHandler()`**.