---
title: "FRP内网穿透教程"
date: 2026-08-22T12:00:00Z
author: 喊不醒的睡神
---

# 购买服务器

在这里购买 FRP 内网穿透服务器我比较推荐[二五云](https://cloud.25y.cn/)，我也及其不推荐[雨云](https://www.rainyun.com/)如果建 FRP购买的过程我就不演示，一定要选择有公网 IP 的

# SSH连接服务器

先下载 Mobaxterm

## 官网

[https://mobatek.net](http://210.16.166.26:8090/plugins/plugin-safe-redirect/go?url=https%3A%2F%2Fmobatek.net)

### 官网下载链接

[https://mobaxterm.mobatek.net/download-home-edition.html](http://210.16.166.26:8090/plugins/plugin-safe-redirect/go?url=https%3A%2F%2Fmobaxterm.mobatek.net%2Fdownload-home-edition.html)

## **汉化版下载**

### **程星博客下载**

[MobaXterm\_Portable\_v24.3\_chs.zip](https://gitee.com/hbxdss/temporary-warehouse/releases/download/halo-attachments-v1/MobaXterm_Portable_v24.3_chs.tar.gz)

### 123云盘下载

『来自 123 云盘 VIP 会员程星. 的分享』MobaXterm\_Portable\_v24.3\_chs\_3.zip链接：<https://1840132105.share.123pan.cn/123pan/HYTWTd-FO7AH?pwd=T7OH#>提取码：T7OH

### 蓝奏云下载

<https://hbxdss.lanzouw.com/irgyN43co5pe>

## Mobaxterm使用参考视频

[](https://1840132105.cdn.123clouddisk.com/1840132105/31191210)

## Mobaxterm使用参考图文

打开 Mobaxterm点击会话![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E6%95%99%E7%A8%8B/ab749c7f-image.png)选择 SSH![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E6%95%99%E7%A8%8B/ff67dba2-image.png)按照图片上的信息来填写![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%�透%E6%95%99%E7%A8%87/ab92fbff-image.png)填完后点击 OK点击你刚创建 SSH 会话![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%95%99%E7%A8%87/a00c7235-image.png)输入你服务器的密码注意：输入密码的时候不显示![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%95%99%E7%A8%87/bf32af9f-image.png)看到最左侧的文件栏有东西了后就说明连接成功了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%95%99%E7%A8%87/ef0b4ee7-image.png)注意：IP 要填写服务器的公网 IP也可以使用 Windows PowerShell 连接连接命令：

```
ssh -p 服务器端口（默认22端口，如果是默认端口的话不要加-p） 服务器用户名@服务器IP
```

# 安装宝塔面板

打开[宝塔面板](https://www.bt.cn/)的官网点击立即免费安装宝塔面板![image.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%95%99%E7%A8%87/913ebc23-image.png)我们选择 12.0.0 的比较稳定时候生产环境点击复制命令![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/cae0a035-image.png)现在需要看你终端输出信息如果和我框出的一样执行[下面](http://210.16.166.26:8090/preview/posts/01a00ad7-d677-76f8-9cb1-5da739b53b8c#%E6%8F%90%E6%9D%83)的命令![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%86%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/ae9afe08-image.png)

## 提权

在 Mobaxterm 里输入

```
sudo -i
```

然后输入密码注意：输入密码的时候不显示如果是 #则不需要执行

## 正式安装宝塔面板

将安装命令粘贴进终端里然后回车执行![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/7f00a543-image.png)输入 y 并回车![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/dc62d031-image.png)接下来就是无尽的等待宝塔会自动安装 wget、curl、gcc、make、zip、unzip、tar、openssl、lsb‑release、lsof、net‑tools、cron、git、xz‑utils、build‑essential、swig、libcurl4‑openssl‑dev、libssl‑dev、libxml2、libxml2‑dev、zlib1g、zlib1g‑dev、libjpeg‑dev、libpng‑dev、libpcre3、libpcre3‑dev、libffi‑dev、libbz2‑dev、libncurses‑dev、libsqlite3‑dev、libreadline‑dev、flask、psutil、requests、paramiko、pyopenssl、pycryptodome、Pillow、pyinotify、gevent‑websocket、supervisor、pymysql、pymongo、qrcode、oss2、upyun、qiniu、PyYAML、six、pycurl、docxtpl、Cython 等看到像这样的页面时宝塔面板就安装完成了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/c678ff3a-image.png)安装完了后不要关闭终端

# 登录宝塔面板

首先到云服务器的防火墙 / 安全组里放行显示的端口，就是我框出来的数字![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/9a95c497-image.png)用你的浏览器打开外网 ipv4 面板的地址如果弹出这个![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/95e408a1-image.png)原因讲起来有点复杂涉及到一些专业知识可以去问 AI点击高级![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%85%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/81443507-image.png)点击继续访问![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/ffc10e85-image.png)来到这里![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/7f6d812b-image.png)输入账号和密码![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/ed3f546d-image.png)点击登录![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/1e21f1af-image.png)将用户协议阅读完![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/6e15d4b1-image.png)来到面板首页![image.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/04ada73f-image.png)

# 安装Docker

点击 Docker![image.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/d8406c2f-image.png)点击立即安装![Image_1787129545947_919_edit_880513438313560.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/fa4632f9-Image_1787129545947_919_edit_880513438313560.png)点击确定![44d5a911-image_edit_880542947033347.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/e4a0c980-44d5a911-image_edit_880542947033347.png)等待安装完成看到这样就安装完成了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/bb8fd8bf-image.png)现在刷新一下面板看到这么多软件就安装完成了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/23ab364d-image.png)

# 关闭宝塔的防火墙

关闭防火墙会影响设备的安全性，容易被黑客入侵。如果你的服务商有自在的防火墙 / 安全组的话你可以直接把宝塔的防火墙关闭，如果没有的话建议还是开着打开安全选项卡![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/fe892073-image.png)点击防火墙开关经行关闭![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/79612c1b-image.png)点击确定![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/65dffb80-image.png)这样宝塔的防火墙就关闭了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/4828c5dc-image.png)

# 安装FRP服务端

打开 Docker![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/42749d3d-image.png)选择应用商店![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/c8d0b86e-image.png)搜索 FRP![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/068da870-image.png)点击安装，安装 FRP 服务端![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/7c9d83f5-image.png)更改你的用户名和密码![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/7658555c-image.png)点击确定![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/70fada15-image.png)看到运行中就说明 FRP 服务端就安装完成了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/f64acb77-image.png)

# 放行FRP端口

安装完后服务商的防火墙 / 安全组里放行一下 7500、7000、40800、40443

# 登录FRP服务端

点击访问 FRP 服务端管理![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/c413e5f3-image.png)输入你自己设置的用户名和密码![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/db2b461f-image.png)登录完后就可以看到服务端的信息了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/634520ec-image.png)

# 修改认证token

点击 Docker![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/56f34e87-image.png)点击应用商店![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/7efe5837-image.png)点击已安装![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%�%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/f110346a-image.png)点击 FRP 服务端的文件夹图标![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/f6950e5c-image.png)点击 data 文件夹![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/e3f286d4-image.png)点击 frps.toml，把我框出来到改成你想要的![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/34014b2a-image.png)点击保存![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/b64b3b45-image.png)

# 重启FRP容器

点击 Docker![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/41b7c2d4-image.png)选择 FRP 的容器后点击重启![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/5a62e9e5-image.png)点击确定![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/3a73cece-image.png)到此服务器端就已经配置完了

# NAS配置

这里 NAS 我以飞牛 NAS 为例打开飞牛 NAS 的管理后台（需要管理员权限）

## 安装FRP客户端

点击应用商店![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/762510c4-image.png)搜索 FRP![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/9fd2e887-image.png)点击 FRP 客户端![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/52c65e74-image.png)点击安装![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/b320222e-image.png)点击下一步![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/eb768319-image.png)

## 修改配置信息

打开桌面上的 Frpc![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/71de3ae1-image.png)把我框出来的改成你自己的服务器公网 IP 地址![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/0e45dc65-image.png)把我框出来的改成你自己的改的 token![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/3fc9e177-image.png)点击保存并重启![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%8�/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/b04a6c8e-image.png)当连接状态变成绿色的已连接是就说明成功了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/6b45a39c-image.png)

## 添加穿透端口

点击添加代理![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/1503b32b-image.png)选择 TCP![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%87/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/bfe9065d-image.png)添加代理名称、本机端口和远程端口（就是服务器端口）点击添加并应用![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%�%8�/03_FRP%E5%6%85%5C%E7%BD%91%E7%A9%BF%E9%0%透%E6%�%99%E7%A8%87/ecd73a5c-image.png)这样就完成了

# 视频

[](https://1840132105.cdn.123clouddisk.com/1840132105/31575724)

# 最后一段

在最后有什么疑问我可以帮大家解答我的联系方式：

## 邮箱

主用：hbxdss@126.com备用：hbxdss@qq.comQQ：3851582821群聊：[623230744](https://qm.qq.com/q/JJYlqjcFK)
