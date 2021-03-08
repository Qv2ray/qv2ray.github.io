---
title: FAQ
---

# FAQ

## V2Ray コアの開始に失敗しました

:::tip いくつかのメッセージは、 `カーネル設定` の **ログレベル** が `情報` または `デバッグ` に設定されている場合にのみ表示できます。 :::

### 1. プロンプト `通常、各ソケットアドレス(プロトコル/ネットワークアドレス/ポート)の使用は 1 回だけ許可されます。`

- **ルート原因**: ポートの競合が発生しました。

- **原因 1**: 以前の V2Ray プロセスは正常に終了せず、関連するポートを占有しました。

- **Solution (on Windows)**: Kill `v2ray.exe` or `wv2ray.exe` process via Task Manager or `taskkill /f /im <process name>`.

  - **Approach 1**: Open Task Manager and go to `Detail` Tab, find `v2ray.exe` or `wv2ray.exe` process, right click on the process name, then `End Process`, `End Process`. ~~詳細に説明する XD~~

  - **アプローチ 2**: `cmd` または `powershell` を実行し、以下のコマンドを実行する。

```cmd
taskkill /f /im v2ray.exe
taskkill /f /im wv2ray.exe
```

または

```pwsh
Stop-Process -Name "v2ray"; Stop-Process -Name "wv2ray"
```

- **ソリューション (Linuxの場合)**: ~~~Linuxを使うこともできます...プロセスを殺す方法がわかりませんか?~~

  - **アプローチ 1**: System Monitor アプリケーションで `v2ray` プロセスを終了する。 Linuxではサーバのデスクトップ環境が存在するため、各デスクトップ環境に付属するシステムモニタが同じソフトウェアではない場合があります。 殺害プロセスの手順は自分で調べるべきです

  - **アプローチ 2**: ターミナルコマンドソフトウェア `htop` をインストールし、それを使って `v2ray` プロセスを終了させます。

  - **Approach 3**:Get the process ID via `ps aux | grep v2ray`, then kill the process via `kill -9 <process ID>`.

- **解決策 (macOS上)**:

  - **アプローチ 1**: アクティビティモニターを開き、 `v2ray` プロセスを見つけて終了する。

  - **アプローチ 2**: Linux の **アプローチ 2** ソリューションを参照してください。

- **原因 2**: Qv2ray で設定された関連するポートが他のソフトウェアによって占有されています。

- **解決策**: Qv2ray または他のソフトウェアのポート設定を変更します。

### 2. Prompt `アクセス権限によって禁止されている方法でソケットにアクセスするための試みが行われました。`

- **原因**: Windows を使用している場合、特権ポート/予約ポートとして `1000-2000` の間のポートを設定する可能性があります。

- **ソリューション**: `2000` 以上のポートを使用します。

### 3. V2Ray Core TProxy を有効にした後の起動に失敗しました

- **詳細**:`TProxy を有効にするとセグメンテーション障害`が発生します。

- **原因**: 一部の Linux OS の`SUID`機能の制限によって引き起こされます。 詳細なエラー分析をご覧ください:[#59](https://github.com/Qv2ray/Qv2ray/issues/59)

- **Solution**: `sudo sysctl fs.suid_dumpable=1`  
  The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.

### 4. コアエラー `255`

- **原因**: POSIX システム (Linux, macOS) で発生する ****を実行する権限がV2Ray コアにありません。

- **解決策**：実行 `chmod +x v2ray && chmod +x v2ctl` V2Ray core ディレクトリで またはファイルマネージャーから許可を与えることで、macOS上のプログラムをダブルクリックすることができます。 UNIXプログラムを実行するかどうかを尋ねられ、「run」を選択すると許可が与えられます。

## 致命的エラー

### 1. AppImageを実行できません: 権限がありません

- **原因**: 実行する前に許可を与える必要があります。
- **ソリューション**:`chmod +x Qv2ray.AppImage`

## 接続の問題

### 1. 設定は確認されましたが、リモートに接続できません

- **原因と考えられる**: システム時間が同期していません。 VMess がプロキシプロトコルの場合、クライアントとサーバーのシステム時間差が90秒未満でなければ接続を拒否します。
- **解決策 (Windows)**:
  - **アプローチ 1**: 設定を開き、「時間 & 言語」を選択し、「日付と時刻を自動的に設定」を有効にします。 オプションが既に有効になっている場合は、「今すぐ同期」ボタンをクリックしてください。
  - **アプローチ 2**：コントロールパネルを開き、「カテゴリ」ビューに切り替え、「時間とゾーン」を選択し、「日付と時刻」をクリックしてください。 開いたダイアログで「インターネット時間」を選択し、「設定を変更」ボタンをクリックし、「インターネット時間サーバと同期」にチェックを入れてください。
- **ソリューション (Linux)**:
  - **アプローチ 1**: `systemd-timesyncd`を使用する `sudo systemctl enable systemd-timesyncd --now`.
  - **アプローチ 2**: 時刻を同期するには [Chrony](https://www.chrony.tuxfamily.org) を使用してください。
- **解決策 (macOS)**: システム設定を開き、「日付 & 時刻」をクリックし、「日付と時刻を自動的に設定」を有効にします。

### 2. 中国本土へのトラフィックをプロキシしたい

- [**解決策**](../getting-started/step5.md#tweaking-routing-schemes)

### 3. Linuxを使用しているときにトランスペアレントプロキシが動作しません（ログがエラーを示唆する可能性があります。 `IP_TRANSPARENT > 操作が許可されていません`）

- **原因:** V2Rayにソケットオプションを設定する権限がありません。
- **解決策:**

  - すべてのLinuxディストリビューションでは、以下のコマンドを使用してください (root/sudo アクセス付き):

    ```shell
    /usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray
    ```

    これはほとんどのV2Rayパッケージにインストールされているパスですが、そうでない場合 (例: V2Ray をスクリプトでインストールします。 `/usr/bin/v2ray` を以前のコマンドでV2Ray コアの絶対パスに置き換える必要があります。

  - For Arch users:  
    You can also install the AUR package [aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/) created by `@DuckSoft` to automate this step.

  - For Fedora 32+ / RHEL 8+ users:  
    If you are installed V2Ray by dnf / yum, and the V2Ray binary path is `/usr/bin/v2ray` , you can also install RPM package [v2ray-cap](https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/) packaged by `@sixg0000d` to automate this step.

### 4. Windowsでダイヤルアップ接続/VPN接続のプロキシを設定する方法は?

- すでにバージョン2.7.0-pre2でサポートされています。
- しかし、 [Microsoft](https://support.microsoft.com/en-us/topic/cannot-configure-proxy-settings-if-a-vpn-connection-name-contains-non-ascii-characters-2c648407-bb72-5600-3126-8c721bc91b70) からの問題 ( [この理由](https://github.com/shadowsocks/shadowsocks-windows/issues/1116#issuecomment-294075565)に似ている場合もあります) 接続名に非 ASCII 文字が含まれている場合、プロキシ設定は機能しません。 回避策は、接続の名前を変更し、新しい名前に ASCII 文字しか含まれていないことを確認することです。

### 5. macOS上でシステムプロキシを自動的に設定できません（エラー：コマンドは管理者権限が必要です）
- **原因:** macOS での権限の問題。
- **解決策:**

    ```shell
    $ sudo security authorizationdb write system.services.systemconfiguration.network allow
    YES (0)
    ```

## パフォーマンス問題

### 1. Qv2rayを使用しているときにWebページを開く/スイッチング接続の応答速度は、他のプロキシソフトウェアを使用するよりもはるかに遅いようです。

- **Cause**: Qv2ray enables `V2Ray Integration` by default, which forces all traffics from plugin-introduced protocols (such as SSR, Trojan) to be routed through [V2Ray Route](../plugins/v2ray-integration.md) in order to implement advanced routing function, but might cause significant latency ~~on low end devices~~.

- **Solution**: Go to `Core Settings` and turn off `V2Ray Integration` could improve latency for plugin-introduced protocols while lose support of `Advanced Routing`, `Bypass China Mainland`, `Bypass Local Address` and `Custom DNS` functions as a side effect, which means routing / bypass function of the relevant protocols will be completely invalid, that is, global proxy only. このオプションは、(VMessなどの)V2Rayカーネルでサポートされているプロトコルには影響しないことに注意してください。 つまり、V2Ray カーネルでサポートされているプロトコルのみを使用する場合、この機能のオンとオフを切り替えると、まったく効果はありません。
- また、~~特にMicrosoft Defender~~でウイルス対策ソフトウェアのホワイトリストV2Rayコアも応答速度を向上させることができます。 ~~検証されない形而上学~~

## 動作 & 表示問題

### 1. Qv2ray トレイアイコンはありません & Qv2ray トレイアイコンがGNOME で消えることがあります

- **原因**: これは上流のバグとして確認されています。

- **解決策**: Gnome は tray アイコンを公式にサポートしていません。 Gnomeにトレイアイコンが表示される理由は、サードパーティの開発者やLinuxディストリビューションからGnome用の拡張機能があるためです。 一時的な解決策として以下の仮のコマンドを使用できます:

```shell
nohup gnome-shell --replace &
```

または、Qv2rayを再起動して再試行することもできます。

:::tip Gnome ユーザーのためのヒント ネイティブの Gnome デスクトップには tray アイコンが表示されません。 そして、Qv2rayアイコンも表示されません。 If you want to display the tray icons, you can install a Gnome extension called [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (also called `ubuntu-appindicator`) , After installing the extension you should log out, log in again, and then enable it in the `Tweaks` app (ie `gnome-tweaks`), and then you will see the tray icons. :::

- ~~ちなみにKDE Plamsaはawesome.~~

### 2. Ubuntuは超醜いUIを与えます

- **解決策**: コマンドライン引数に`--style fusion`を追加すると、この問題が解決する可能性がある。

### 3. Qv2ray UIはいくつかのWindowsデバイスで非常に大きく見えます

- **原因**: 低解像度デバイスで非整数スケーリングが有効になっているため、QTの二次スケーリング後にインターフェース歪みが生じます。
- **Solution**: コマンドライン引数に `--noScaleFactor` を追加する。

### 4. macOS は Qv2ray / Qv2ray プラグインを "ゴミ箱に移動" させようとしています

- **原因**: 開発者のプライバシーを保護するため、Apple Developer アカウントではアプリに署名しません。 また、Appleによって「公証」されたアプリケーションはありません。 macOSを使用しないQv2ray開発者に尋ねるのは不公平です。 Apple Developer Accountのお金を支払うため、アプリにサインインした際に発生するリスクがあります。 さらに、いわゆるアップル ["公証"](https://krita.org/en/item/first-notarized-macos-build-of-krita/)を待つ時間を無駄にします。
- **ソリューション**: コマンドをバイパスするように `sudo xattr -rd com.apple.quarantine /Applications/qv2ray.app` を使用してください。

## その他

### 1. Qv2rayプラグインとV2Rayコアがダウンロード機能を提供しないのはなぜですか?

私たちは、私たちのユーザーがプログラムがどのように動作するかを知ることができ、潜在的な問題やニーズを自分で解決するために喜んで得ることを願っています. Qv2rayがあなたに合わない場合は、他のソフトウェアを自由に選択できます。

### 2. Qv2rayはモバイルプラットフォーム(Android、iOS)に対応していますか?

今のところ計画はない。 Depending on developers will, there **may** be mobile platform support when the program migrate to QML.
