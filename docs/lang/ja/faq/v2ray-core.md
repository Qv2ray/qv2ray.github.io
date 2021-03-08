---
title: V2Rayコア関連
---

# V2Rayコア関連のよくある質問

## アドレスで聴くことができません

通常は、V2Rayコアを開始するために必要なポートを使用する別のプロセスが既にあるためです。 ログは以下のようになります:

- Windows: `アドレスのリッスンに失敗しました: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: 各ソケットアドレス(protocol/network address/port)の 1 回のみが許可されます。`
- Linux / macOS: `アドレスのリッスンに失敗しました: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: bind: address already in use`

### 既存のV2Rayコアインスタンス

V2Rayプロセスが存在するかどうかを常に確認する必要があります。 Qv2rayがV2Rayコアを終了する前にクラッシュした場合、残りのV2Rayプロセスが存在する可能性があります。

#### Windows

For Windows users, you can open your **Task Manager** to check if there's `v2ray.exe` (or `wv2ray.exe`, if you chose to run `wv2ray.exe` as core, the same applies below) running.

見つかった場合は、そのプロセスを手動で終了させることができます。 Windows ユーザーは <kbd>Win</kbd> + <kbd>R</kbd> を押すと、 **Run** ウィンドウが呼び出され、次のコマンドを入力して実行できます。

```batch
taskkill /f /im v2ray.exe
```

#### Linux / macOS

Linux / macOS ユーザーの場合、このコマンドを使用して V2Ray コアのPIDを検索できます。

```bash
ps aux | grep v2ray
```

そして次のようなプロセスを終わらせます

```bash
sudo kill -9 <PID>
```

### 他のプログラムで撮影されました

実行中のV2Rayインスタンスが表示されない場合は、ポートを使用している人を調査するために、より深く潜り込むことができます。

#### Windows

Windowsユーザーの場合は、 **コマンドプロンプト** を開き、次のコマンドを実行できます。

```batch
netstat -aon | findstr "8888"
```

ポート(上記の`8888` )を実際の状況に合わせて変更してください。 ポートを使用するプログラムがある場合、出力が得られます。これは通常、次のようになります。

```
  TCP 127.0.0.0.1:8888 0.0.0.0 LISTENING 114514
  TCP [::1]:8888 [::]:0 LISTENING 114514
```

出力の最後の列(この場合、 `114514`)に注目してください。 これは、あなたのポートを使用しているプロセスのまさにPIDです。 プログラムを終了するには、次のコマンドを実行します。

```batch
taskkill /f /pid 114514
```

プログラムが終了したら、ポートを解放して使用可能にする必要があります。

#### Linux / macOS

Linux / macOS ユーザーの場合、folowing コマンドを使用して同様のことを行うことができます。

```bash
# Linux
sudo netstat -nlp | grep 8888

# Linux / macOS
sudo lsof -i:8888
```

ポートを使用しているプロセスがある場合、出力は次のようになります。

```
# netstat
tcp6 0 0 :::8888 :::* LISTEN 42742/evil

# lsof
evil 42742 username 11u IPv6 29087 0t0 TCP *:8888 (LISTEN)
```

フィールド `42742` と `邪悪な`に注意してください。これはプロセスのPIDとプログラム名を示しています。 終了し、ポートを取り戻すこと自由に感じなさい。

### Windows: システムで予約

This happens only on Windows, whose error log usually looks like this: `failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: bind: An attempt was made to access a socket in a way forbidden by its access permissions.`

Microsoft launched [KB4074588](https://support.microsoft.com/eu-es/help/4074588/windows-10-update-kb4074588) patch on February 13th in 2018, which will modify the _reserved port range_ on Windows operating system, so you may be affected.

前述のように、 `netsh インターフェイス ipv4 を使用することができます。 excludedperge protocol=tcp` コマンドを使用して、予約済みのポートを表示します。 ポートが予約されている場合は、そのポートを避け、リスニングポートを別のポートに変更する必要があります。

### 出口がない場合

リスニングポートを変更し、衝突を避けるだけです。 それはかなり単純な方法です。

## 実行に失敗しました

これは、V2Ray コアを実行できない場合に発生します。 一般的なエラーメッセージは次のようになります。

- `エラーコード: 255 でv2ray core が失敗しました`

### Linux / macOS: 実行可能な属性がありません

`v2ray` と `v2ctl` に exectuable 属性を設定するのを忘れている可能性があります。 対応するディレクトリに移動し、以下を実行します。

```bash
chmod +x v2ray
chmod +x v2ctl
```

終わりました。

### レア: 有効な実行可能ではありません

プラットフォーム上で実行可能ではないバイナリをダウンロードした可能性があります。 たとえば、Windows 64bit (`amd64`) を実行して、 `arm64` V2Ray コアをダウンロードしているとします。 または、ダウンロードしたファイルが破損しています。

To have a quick check, you can run the `v2ray` (or `v2ray.exe` if you are using Windows) directly by clicking on it. エラーが発生した場合は、正しいファイルを削除して再ダウンロードしてください。

:::tip QvKernelABIChecker Qv2ray 2.4.0, [@DuckSoft](https://github.com/DuckSoft) は ABI チェッカーと呼ばれる新しいチェックメカニズムを導入し、間違ったバイナリを使用できなくなりました。 そのため、この事件はその後にかなり珍しくなっている。 :::
