---
title: V2Ray Core Related
---

# V2Ray Core Related FAQs

## Cannot Listen on Address

Usually it's because there's already another process using the port required to start V2Ray core. The logs can be like:

* Windows: `failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: Only one usage of each socket address (protocol/network address/port) is normally permitted.`
* Linux / macOS: `failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: bind: address already in use`

### Existing V2Ray Core Instance

You should always first check if there's an existing V2Ray process. A remaining V2Ray process can be there if Qv2ray happened to crash before it could terminate its V2Ray core. 

#### Windows

For Windows users, you can open your **Task Manager** to check if there's `v2ray.exe` (or `wv2ray.exe`, if you chose to run `wv2ray.exe` as core, the same applies below) running.

If you find one, you may want to terminate that process manually. Windows users can hit <kbd>Win</kbd> + <kbd>R</kbd> to invoke the **Run** window, then type the following command and run:
```batch
taskkill /f /im v2ray.exe
```

#### Linux / macOS

For Linux / macOS users, you may first use this command to find PID of V2Ray core:
```bash
ps aux | grep v2ray
```

and then kill the process with:
```bash
sudo kill -9 <PID>
```

### Taken by Other Programs 

If you don't see a running V2Ray instance, you may want to dive deeper to investigate that who is using your ports. 

#### Windows

For Windows users, you may open **Command Prompt** and run the following command:
```batch
netstat -aon | findstr "8888"
```

Change the port (`8888` in the above) according to your real situation. You will get an output if there is some program using your port, which may usually look like this:
```
  TCP    127.0.0.1:8888            0.0.0.0            LISTENING       114514
  TCP    [::1]:8888                [::]:0             LISTENING       114514
```

Notice the last column of the output (in this case, `114514`). That is the very PID of the process that is using your port. Run the following command to terminate the program:
```batch
taskkill /f /pid 114514
```

After the program is terminated, the port should be released and usable.

#### Linux / macOS

For Linux / macOS users, you can use the folowing command to do the similar thing:
```bash
sudo netstat -nlp | grep 8888
```

If there's a process that is using the port, the output will be like:
```
tcp6       0      0 :::8888        :::*          LISTEN      42742/evil
```

Notice the last column, which shows the PID and program name of the very process. Feel free to terminate and regain the port.

### Windows: Reserved by System

This happens only on Windows, whose error log usually looks like this: `failed to listen on address: 127.0.0.1:1088 > listen tcp 127.0.0.1:1088: bind: An attempt was made to access a socket in a way forbidden by its access permissions.`

Microsoft launched [KB4074588](https://support.microsoft.com/eu-es/help/4074588/windows-10-update-kb4074588) patch on February 13th in 2018, which will modify the *reserved port range* on Windows operating system, so you may be affected. 

As is stated, you can use `netsh interface ipv4 show excludedportrange protocol=tcp` command to show the reserved ports. If a port is reserved, you should avoid that port and just change the listening port to another one.

### If No Way Out

Just change the listening port and avoid the clash. That's a pretty straightforward way.


## Failed to Execute

This happens when V2Ray core cannot be executed. The typical error message can be: 

* `v2ray core failed with errcode: 255`

### Linux / macOS: No Executable Attribute

You may have forgotten to set the exectuable attribute for `v2ray` and `v2ctl`. Go to the corresponding directory and execute:

```bash
chmod +x v2ray
chmod +x v2ctl
```

You're done.

### Rare: Not a Valid Executable

You may have downloaded a binary that is not executable on your platform. For example, you are running Windows 64bit (`amd64`) and then downloaded an `arm64` V2Ray core; Or, the file you downloaded is corrupted.

To have a quick check, you can run the `v2ray` (or `v2ray.exe` if you are using Windows) directly by clicking on it. If there's an error, just delete and redownload the correct file.

:::tip QvKernelABIChecker
Since Qv2ray 2.4.0, [@DuckSoft](https://github.com/DuckSoft) introduced a novel checking mechanism called "ABI Checker", that will prevent you from using incorrect binaries. Therefore, this case have become rather rare afterwards. 
:::