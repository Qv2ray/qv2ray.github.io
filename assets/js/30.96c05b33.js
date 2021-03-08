(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{399:function(a,t,e){"use strict";e.r(t);var r=e(16),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"ステップ-2-v2rayコアの設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ステップ-2-v2rayコアの設定"}},[a._v("#")]),a._v(" ステップ 2: V2Rayコアの設定")]),a._v(" "),e("p",[a._v("Qv2rayをシステムに正しくインストールすると、実際に使用する前にV2RayコアファイルにQv2rayを設定する必要があります。")]),a._v(" "),e("h2",{attrs:{id:"v2rayコアファイルをダウンロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v2rayコアファイルをダウンロード"}},[a._v("#")]),a._v(" V2Rayコアファイルをダウンロード")]),a._v(" "),e("p",[a._v("Due to political reasons, Qv2ray itself "),e("strong",[a._v("does not")]),a._v(" include a distribution of V2Ray executable files, namely the "),e("code",[a._v("v2ray-core")]),a._v(", and most of the time required for users is to download them.")]),a._v(" "),e("p",[e("strong",[a._v("詳細については、 "),e("a",{attrs:{href:"https://www.v2fly.org/guide/install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("V2Fly インストールガイド"),e("OutboundLink")],1),a._v(" を参照してください。")])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Core Management: Manual vs 自動 V2Ray コアとアセットパッケージの配布を使用している場合。 v2rayコアの自動アップグレードはシステムが処理するので、パッケージマネージャを介してインストールするのが最善です。 Arch Linuxユーザーの場合、1つのパッケージ `v2ray` のみをインストールするだけで十分です。 他のディストリビューションについては、以下をご覧ください。 :::")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Windows 10 ARM64 ユーザの場合 V2Ray Core 4.27から、V2Ray プロジェクトチームは Windows 10 用の ARM32 (armv7) ベースのカーネルを提供しました。 Windows 10 ARM64 ユーザは、より良いパフォーマンスを得るためにこのバージョンのカーネルを使用することをお勧めします。 :::")]),a._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[a._v("Sharpen Your Eyes Do not download `v2ray-linux-arm64.zip` if you are running Qv2ray on `x86_64` (`amd64`) platform. 明確にするために、 `arm64` は `amd64` とは全く異なります。 このようにしないでください。 :::")]),a._v(" "),e("h3",{attrs:{id:"パッケージマネージャ経由でv2rayコアをダウンロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#パッケージマネージャ経由でv2rayコアをダウンロード"}},[a._v("#")]),a._v(" パッケージマネージャ経由でV2RAyコアをダウンロード")]),a._v(" "),e("h4",{attrs:{id:"homebrew-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-macos"}},[a._v("#")]),a._v(" Homebrew(macOS)")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" v2ray\n")])])]),e("p",[a._v("Homebrewでインストールする場合、V2Rayの実行可能な場所は "),e("code",[a._v("/usr/local/bin/v2ray")]),a._v("です。アセットの場所は "),e("code",[a._v("/usr/local/share/v2ray")]),a._v(" です。")]),a._v(" "),e("h4",{attrs:{id:"スクープ-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#スクープ-windows"}},[a._v("#")]),a._v(" スクープ（Windows）")]),a._v(" "),e("div",{staticClass:"language-pwsh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Scoop install v2ray\n")])])]),e("p",[a._v("Scoopでインストールする場合、V2Rayの実行ファイルの場所は "),e("code",[a._v("<User Directory>\\scoop\\apps\\v2ray\\v2ray.exe")]),a._v("、アセットの場所は "),e("code",[a._v("<User Directory>\\scoop\\apps\\v2ray\\current")]),a._v(" です。")]),a._v(" "),e("h4",{attrs:{id:"chocolatey-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chocolatey-windows"}},[a._v("#")]),a._v(" Chocolatey (Windows)")]),a._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("choco install v2ray\n")])])]),e("p",[e("code",[a._v("X:\\tools\\v2ray")]),a._v(" ("),e("strong",[e("em",[a._v("X")])]),a._v(" はシステムディスクドライブ) にソフトウェアがインストールされます。")]),a._v(" "),e("h4",{attrs:{id:"debian、ubuntu、その他のdebianベースの派生物。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debian、ubuntu、その他のdebianベースの派生物。"}},[a._v("#")]),a._v(" Debian、Ubuntu、その他のDebianベースの派生物。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://apt.v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://apt.v2fly.org"),e("OutboundLink")],1),a._v(" を参照してください。")]),a._v(" "),e("h4",{attrs:{id:"arch-linuxとその派生物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arch-linuxとその派生物"}},[a._v("#")]),a._v(" Arch Linuxとその派生物")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S v2ray\n")])])]),e("p",[a._v("バイナリは "),e("code",[a._v("/usr/bin/v2ray")]),a._v("にインストールされ、リソースファイルは "),e("code",[a._v("/usr/share/v2ray/")]),a._v(" に置かれます。")]),a._v(" "),e("h4",{attrs:{id:"v2ray-公式インストールスクリプト-systemdのlinuxディストリビューションを使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-公式インストールスクリプト-systemdのlinuxディストリビューションを使用"}},[a._v("#")]),a._v(" V2Ray 公式インストールスクリプト (SystemdのLinuxディストリビューションを使用)")]),a._v(" "),e("p",[a._v("See "),e("a",{attrs:{href:"https://github.com/v2fly/fhs-install-v2ray",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/v2fly/fhs-install-v2ray"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("このスクリプトは V2Ray をサーバーとしてインストールするように設計されていますが、問題なくクライアントとして使用できます。 Qv2rayで使用する場合は、サーバーサービスをオフにすることをお勧めします。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("systemctl disable v2ray --now\n")])])]),e("h3",{attrs:{id:"手動ダウンロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手動ダウンロード"}},[a._v("#")]),a._v(" 手動ダウンロード")]),a._v(" "),e("p",[e("strong",[a._v("公式ダウンロード リンク：")]),a._v(" "),e("a",{attrs:{href:"https://github.com/v2fly/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/v2fly/v2ray-core/releases"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("v2rayコアファイルを固定位置に抽出します。 As a default, it is suggested to extract the files into "),e("code",[a._v("$QV2RAY_CONFIG_PATH/vcore")]),a._v(", where "),e("code",[a._v("$QV2RAY_CONFIG_PATH")]),a._v(" is the directory where Qv2ray store it’s data.")]),a._v(" "),e("p",[a._v("ディレクトリ "),e("code",[a._v("vcore")]),a._v(" は以下の場所のいずれかにあります。")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("./config/")]),a._v(" ("),e("code",[a._v("config")]),a._v(" サブディレクトリ Qv2ray 実行可能ファイルはさておき、Windows ユーザーに推奨されます)")]),a._v(" "),e("li",[e("code",[a._v("~/.qv2ray/")]),a._v(" (ホームフォルダの専用ディレクトリ)")]),a._v(" "),e("li",[e("code",[a._v("~/.config/qv2ray/")]),a._v(" (標準のXDG設定パス)")])]),a._v(" "),e("p",[a._v("その後、これらのファイルが "),e("code",[a._v("vcore")]),a._v(" ディレクトリに直接存在することを確認してください:")]),a._v(" "),e("ol",[e("li",[e("code",[a._v("v2ray")]),a._v(" / "),e("code",[a._v("v2ray.exe")]),a._v(": コア実行可能ファイル")]),a._v(" "),e("li",[e("code",[a._v("v2ctl")]),a._v(" / "),e("code",[a._v("v2ctl.exe")]),a._v(": コア制御プログラム")]),a._v(" "),e("li",[e("code",[a._v("geoip.dat")]),a._v(": IPルールデータベース")]),a._v(" "),e("li",[e("code",[a._v("geosite.dat")]),a._v(": ドメインルールデータベース")])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Linux / macOS ユーザ向けの特別なヒント **実行可能権限を** `v2ray` と `v2ctl` に付与する必要があります。 これは通常、これらのファイルで `chmod +x` を実行することによって行われます。")]),a._v(" "),e("p",[a._v("macOS では、Homebrew で v2ray-core をインストールする場合、このヒントは無視できます。 :::")]),a._v(" "),e("h2",{attrs:{id:"qv2rayでv2rayコアを設定する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qv2rayでv2rayコアを設定する"}},[a._v("#")]),a._v(" Qv2rayでV2Rayコアを設定する")]),a._v(" "),e("p",[a._v("Qv2rayを開き、Preferenceウィンドウに移動します。 **"),e("a",{attrs:{href:"qv2ray://open/preference/kernel"}},[a._v("Core Settings")]),a._v("**では、次のオプションを構成します。")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("Core Executable Path")]),a._v(": V2Ray 実行可能ファイルが存在する場所に設定する。 これは、Windows 上の "),e("code",[a._v("v2ray.exe")]),a._v(" のフルパス、または Linux / macOS 上の "),e("code",[a._v("v2ray")]),a._v(" の実行ファイルになります。")]),a._v(" "),e("li",[e("strong",[a._v("V2Ray Assets Directory")]),a._v(": "),e("code",[a._v("geoip.dat")]),a._v(" と "),e("code",[a._v("geosite.dat")]),a._v(" がある場所に設定してください。")])]),a._v(" "),e("p",[a._v("設定後、 "),e("strong",[a._v("Check V2Ray Core Settings")]),a._v(" ボタンをクリックして、V2Ray コア設定を検証できます。 チェックが完了するまで、試行を繰り返します。")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("No Matryoshka! 決して決して **コア実行パス** を **Qv2ray Executable**に指してください! Qv2rayはシングルインスタンスであるため、フォーク爆弾は発生しません。 Do note that V2Ray Core Executable is like `v2ray` , `v2ray.exe` or `wv2ray.exe`, instead of `qv2ray` or `qv2ray.exe`, `v2rayN.exe`! :::")])])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);