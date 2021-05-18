---
title: Adding Hosts into Qv2ray
---

# Step 3: Adding Hosts into Qv2ray

Qv2ray supports many ways of importing your configuration. To get you started, we have just picked these most common use cases.

## Share Links

> Share links generally looks like these:
>
> - `vmess://`...
> - `ss://`...

Follow these steps to import them:

1. Click **Import** button in the main window, or import via [link](qv2ray://open/import/link).
2. In the **Import File** dialog, choose import source **Share Link**,
3. Paste your share links into **Share Link** text box.
4. Click on **Import** button to finish.

:::tip Batched Import

You can import multiple share links at a time. Make sure each link takes its single line.

:::

:::warning Broken Links

Some broken share links may fail to import, but it doesn't matter. The detailed error will be shown on the right side. Also, it won't stop other entries in a batched import.

:::

## Subscription

> A subscription link usually looks like this: `https://some-airport.domain/links/YjYyODk?sub=3`

To import a subscription, follow these steps:

1. Open **GroupEditor** by clicking **Group** button in main window.
2. Click the **Add Group** icon button at the left-bottom corner in **[GroupEditor](qv2ray://open/group/connection)** window.
3. Select the created item in **Group List**, whose details will be shown on the right side.
4. Switch to **Subscription Settings** panel and finalize the configuration:
   1. Name the group by editing **Group Name**.
   2. Check **This group is a subscription**.
   3. Specify these fields:
      - **Subscription Address**: Use your **subscription link** mentioned above.
      - **Subscription Type**: If the default value won't work, change this to another.
   4. Change these fields optionally:
      - **Update Interval**: Qv2ray will notify you when the subscription needs to be updated upon launching. Change this according to your own demands.
      - **Importing Filters**: Qv2ray can filter the nodes imported from your subscription when configured. You can figure this out by yourself.
5. Click **Update Subscription** button and wait for completion.
6. Click **OK** to apply the settings and close the dialog.

:::tip Update through System Proxy

If you encounter connectivity problem with your subscription upstream (eg: DNS Record Pollution, IP Address Blocking, etc.), you may try to run with **Update Subscription with System Proxy** option on. However, it's better to inform the upstream as soon as possible, to fix the issue permanently.

:::

## Manual Configuration

1. Click **New** in the lower left corner of the main window
2. Fill in the **Name/Prefix** or leave it blank, or you can rename it after complete the configuration.
3. Click **Input Manually** -> **Open Connection Editor**.
4. Fill in the **Tag**. This tag will appear in the log. You can also leave it blank.
5. Fill in **Host** and choose your proxy type.
6. Config **Misc Settings** Optionally.
7. Fill in **Outbound settings** and **Stream Settings**.
8. Click **OK** to save your config.

## Import an existing configuration

If you are using v2ray-core, you can import an existing configuration file. **Advanced** -> **Select**, or **Open JSON Editor** and paste it.

:::warning About Preferences Failure

If you using complex config, Qv2ray will ignore settings in Preferences (such as routing).

:::
