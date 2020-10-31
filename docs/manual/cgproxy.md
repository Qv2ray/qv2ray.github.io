<center>透明代理工具cgproxy安装及配置</center>

[原项目链接](https://github.com/springzfx/cgproxy)本文档参考了原项目的介绍，由原介绍翻译而来并做了部分修改。

cgproxy是一个Linux客户端的基于cgroupv2的透明代理工具。

> ## 介绍
>
> cgproxy能够按照你设置的[cgroup](https://en.wikipedia.org/wiki/Cgroups)代理几乎所有应用的流量，包括不理会“全局代理”设置的那些终端命令行工具（如curl，wget，git等）。支持IPv4/6，支持tcp和udp，支持作为网关共享代理给其他设备。
>
> ## 要求
>
> 系统支持cgroupv2，支持systemd，iptables版本大于等于1.6.0（可以通过命令 iptables --version来确认）如Ubuntu16.04，Debian9，fedora27以上
>
> ## 安装
>
> 如果系统是archLinux并且添加了[archlinunxcn](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)则可以使用
>
> > pacman -S cgproxy
>
>  命令来安装，而其他发行版（如Ubuntu）可以使用wget命令来安装然后使用
>
> >dpkg -i cgproxy_0.19_amd64.deb
>
> 命令打开.deb包（版本号可能有变化）
>
> 教程使用已有二进制文件，至于手动构建由于笔者水平有限，还请高级用户/折腾爱好者自行阅读原项目文档（链接上文已给出）
>
> ## 配置使用
>
> > ### cgproxy配置
> >
> > cgproxy的配置文件位于/etc/cgproxy，使用文件编辑器打开/etc/cgproxy/config.json，根据需要修改cgroup_proxy，以实现代理你想要走代理的应用，如全局则修改为"cgroup_proxy": ["/"],**注意双引号为英文**，配置错误则会导致服务无法启动。
> >
> > 修改program_noproxy来避免产生回环导致网络连接问题。
> >
> > 关于设置program_noproxy，根据qv2ray开发者说法，整合了内核功能的插件（如trojan，ssr插件）其进程属于qv2ray，无须加入program_noproxy，而naiveproxy，trojan-go等独立内核的应用需要加入program_noproxy。
> >
> > 其他预先配置好的项目请不要更改，除非你知道自己在做什么。
> >
> > > ```
> > > {
> > >     "port": 12345,
> > >     "program_noproxy": ["v2ray", "qv2ray"],
> > >     "program_proxy": [],
> > >     "cgroup_noproxy": ["/system.slice/v2ray.service"],
> > >     "cgroup_proxy": [],
> > >     "enable_gateway": false,
> > >     "enable_dns": true,
> > >     "enable_udp": true,
> > >     "enable_tcp": true,
> > >     "enable_ipv4": true,
> > >     "enable_ipv6": true,
> > >     "table": 10007,
> > >     "fwmark": 39283
> > > }                                            
> > > ```
> >
> > 其他关于配置优先级，根据项目文档有如下关系。
>
> > > ```
> > > program_noproxy > program_proxy > cgroup_noproxy > cgroup_proxy
> > > enable_ipv6 = enable_ipv4 > enable_dns > enable_tcp = enable_udp
> > > ```
> >
> > ### qv2ray配置 
> >
> > 按照示例图设置即可。如需开启IPv6支持则在IPv6监听地址栏填写"::1"
> >
> > ![Qv2ray config example](https://camo.githubusercontent.com/7a218e70c254588b5df1ea52e9109b1b530f9b5d/68747470733a2f2f692e6c6f6c692e6e65742f323032302f30382f31372f5036793553664c6f5577476a61784d2e706e67)
>
> ### 启动cgproxy
>
> > + 启动cgrproxy需要setcap命令，如果显示找不到该命令则你可能需要安装"libcap"然后运行以下命令（其中v2ray路径根据你的情况自行修改）
> >
> >   ```
> >   sudo setcap "cap_net_admin,cap_net_bind_service=ep" /usr/bin/v2ray
> >   ```
> >
> > + 在安装时应该cgproxy.service会被自动加载，当然如果没有加载，你也可以手动使用systemctl enable cgproxy命令加载。然后使用systemctl start cgproxy来启动服务，使用systemctl status cgproxy来查看服务运行状态
> >
> >   如果如下图所示，则说明cgproxy可以正常运行，若出现错误则可以根据sysytemd提供的错误信息自行检查。
> >
> >   ![cgproxy status](/Users/nicht/Documents/tutors%20%E7%BF%BB%E5%A2%99%20pictures/cgproxy%20pictures/%E6%88%AA%E5%B1%8F2020-10-30%20%E4%B8%8B%E5%8D%888.26.30.png)
> >
> >   
>
> > ### 检查全局的方式
> >
> > 在qv2ray的链接设置中不勾选“绕过大陆地址”，然后使用命令
> >
> > > curl cip.cc
> >
> > 若输出的是你翻墙服务器的IP，则说明设置成功。🎉🎉🎉
> >
> > 或着使用 curl -v https://www.google.com 若能输出正常信息则说明成功。
> >
> > 

​       



