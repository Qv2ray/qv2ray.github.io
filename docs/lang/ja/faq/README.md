---
title: FAQ
---

# FAQ

:::tip Some message can only be seen when the `loglevel` in **Kernel Settings** set to `info` or `debug`. :::

## Startup Issues

### `Only one usage of each socket address (protocol/network address/port) is normally permitted.`

- **The Root Cause**: A port conflict occurred.
- **原因 1**: 以前の V2Ray プロセスは正常に終了せず、関連するポートを占有しました。
- **Solution**: Terminate the current process which takes up that port.
- **原因 2**: Qv2ray で設定された関連するポートが他のソフトウェアによって占有されています。
- **解決策**: Qv2ray または他のソフトウェアのポート設定を変更します。

### `An attempt was made to access a socket in a way forbidden by its access permissions.`

- **原因**: Windows を使用している場合、特権ポート/予約ポートとして `1000-2000` の間のポートを設定する可能性があります。

- **ソリューション**: `2000` 以上のポートを使用します。

### V2Ray Core TProxy を有効にした後の起動に失敗しました

- **詳細**:`TProxy を有効にするとセグメンテーション障害`が発生します。

- **原因**: 一部の Linux OS の`SUID`機能の制限によって引き起こされます。 詳細なエラー分析をご覧ください:[#59](https://github.com/Qv2ray/Qv2ray/issues/59)
  - **Solution**: `sudo sysctl fs.suid_dumpable=1`  
    The solution will be lost on reboot, please refer to [this blog](http://ssdxiao.github.io/linux/2017/03/20/Sysctl-not-applay-on-boot.html) if you want to keep it.

## Connectivity Issues

### Connection configuration is confirmed to be correct but seen runtime warnings.

- **原因と考えられる**: システム時間が同期していません。 VMess がプロキシプロトコルの場合、クライアントとサーバーのシステム時間差が90秒未満でなければ接続を拒否します。
- **Solutions (Windows)**:
  - **アプローチ 1**: 設定を開き、「時間 & 言語」を選択し、「日付と時刻を自動的に設定」を有効にします。 オプションが既に有効になっている場合は、「今すぐ同期」ボタンをクリックしてください。
  - **アプローチ 2**：コントロールパネルを開き、「カテゴリ」ビューに切り替え、「時間とゾーン」を選択し、「日付と時刻」をクリックしてください。 開いたダイアログで「インターネット時間」を選択し、「設定を変更」ボタンをクリックし、「インターネット時間サーバと同期」にチェックを入れてください。
- **Solutions (Linux)**:
  - **アプローチ 1**: `systemd-timesyncd`を使用する `sudo systemctl enable systemd-timesyncd --now`.
  - **アプローチ 2**: 時刻を同期するには [Chrony](https://www.chrony.tuxfamily.org) を使用してください。
- **解決策 (macOS)**: システム設定を開き、「日付 & 時刻」をクリックし、「日付と時刻を自動的に設定」を有効にします。

### I want to access China mainland websites using the proxy.

- [**解決策**](../getting-started/step5.md#tweaking-routing-schemes)

### Transparent Proxy (tProxy) not working when under Linux

- In this case, the log may suggest the error `failed to set IP_TRANSPARENT > operation not permitted`

- **原因:** V2Rayにソケットオプションを設定する権限がありません。

- **Solutions:**

  - すべてのLinuxディストリビューションでは、以下のコマンドを使用してください (root/sudo アクセス付き):

    ```
    # /usr/bin/setcap "cap_net_bind_service=+ep cap_net_admin=+ep" /usr/bin/v2ray
    ```

    Where `/usr/bin/v2ray` is where V2Ray is installed for most of the Linux distros, if is not (e.g. you have installed V2Ray using the installation script), replace `/usr/bin/v2ray` with the path to your V2Ray core binary.

  - For ArchLinux users:  
    Try the AUR package [aur/v2ray-cap-git](https://aur.archlinux.org/packages/v2ray-cap-git/) created by `@DuckSoft` which automates this step.

  - For Fedora 32+ / RHEL 8+ users:  
    If you are installed V2Ray by dnf / yum, and the V2Ray binary path is `/usr/bin/v2ray` , you can also install RPM package [v2ray-cap](https://copr.fedorainfracloud.org/coprs/sixg0000d/v2ray/) packaged by `@sixg0000d` to automate this step.

### Configure proxy for dial-up connections / VPN connections on Windows

*Already supported on version 2.7.0-pre2*

- However, because of [an issue from Microsoft](https://support.microsoft.com/en-us/topic/cannot-configure-proxy-settings-if-a-vpn-connection-name-contains-non-ascii-characters-2c648407-bb72-5600-3126-8c721bc91b70) (may also be similar to [this reason](https://github.com/shadowsocks/shadowsocks-windows/issues/1116#issuecomment-294075565)), if a connection name contains non-ASCII characters, proxy settings won't work..
  - 回避策は、接続の名前を変更し、新しい名前に ASCII 文字しか含まれていないことを確認することです。

### macOS上でシステムプロキシを自動的に設定できません（エラー：コマンドは管理者権限が必要です）
- **原因:** macOS での権限の問題。
- **解決策:**

    ```shell
    > # security authorizationdb write system.services.systemconfiguration.network allow
    YES (0)
    ```



## Behavior & Appearance Issues

### No tray icon / The tray icon occasionally disappears in GNOME

- **原因**: これは上流のバグとして確認されています。
- **解決策**: Gnome は tray アイコンを公式にサポートしていません。 Gnomeにトレイアイコンが表示される理由は、サードパーティの開発者やLinuxディストリビューションからGnome用の拡張機能があるためです。 一時的な解決策として以下の仮のコマンドを使用できます:

    ```shell
    $ nohup gnome-shell --replace &
    ```

または、Qv2rayを再起動して再試行することもできます。

:::tip Gnome ユーザーのためのヒント ネイティブの Gnome デスクトップには tray アイコンが表示されません。 そして、Qv2rayアイコンも表示されません。 If you want to display the tray icons, you can install a Gnome extension called [`gnome-shell-extension-appindicator`](https://github.com/ubuntu/gnome-shell-extension-appindicator) (also called `ubuntu-appindicator`) , After installing the extension you should log out, log in again, and then enable it in the `Tweaks` app (ie `gnome-tweaks`), and then you will see the tray icons. :::

### macOS wants Qv2ray and/or its plugins to be "moved to trash"

- **原因**: 開発者のプライバシーを保護するため、Apple Developer アカウントではアプリに署名しません。 また、Appleによって「公証」されたアプリケーションはありません。 macOSを使用しないQv2ray開発者に尋ねるのは不公平です。 Apple Developer Accountのお金を支払うため、アプリにサインインした際に発生するリスクがあります。 さらに、いわゆるアップル ["公証"](https://krita.org/en/item/first-notarized-macos-build-of-krita/)を待つ時間を無駄にします。
- **ソリューション**: コマンドをバイパスするように `sudo xattr -rd com.apple.quarantine /Applications/qv2ray.app` を使用してください。



## その他

### Qv2rayプラグインとV2Rayコアがダウンロード機能を提供しないのはなぜですか?

We hope our users can get to know how the it works, and willing to solve potential problems and needs by themselves.

Qv2rayがあなたに合わない場合は、他のソフトウェアを自由に選択できます。

- ~~Try Package Managers!~~

### Qv2rayはモバイルプラットフォーム(Android、iOS)に対応していますか?

今のところ計画はない。 Depending on developers will, there **may** be mobile platform support when the program migrate to QML.
