---
title: "如何ssh连接到飞牛NAS"
date: 2026-05-24T05:22:02Z
createTime: 2026/05/24 13:22:02
author: 喊不醒的睡神
permalink: /posts/ssh-into-fnos/
---

首先在路由器后台或者飞牛 NAS 屏幕上找到飞牛 NAS 的 IP

我这里以 192.168.2.161 为例

# 开启ssh

先用管理员账号登录的登录后台

TIP：要验证是不是管理员账号，只要看有没有系统设置就行

打开系统设置
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20161742.webp)

选择 ssh
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20161742.png)

打开 ssh
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20161955.png)

将你的管理员的 ssh 启用
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20162052.png)

现在飞牛端的所有工作都做完了，回到你的电脑

# 下载

先下载 Mobaxterm

## 官网

[https://mobatek.net](https://mobatek.net)

## 官网下载链接

[https://mobaxterm.mobatek.net/download-home-edition.html](https://mobaxterm.mobatek.net/download-home-edition.html)

## 汉化版下载

### 程星博客下载

[MobaXterm_Portable_v24.3_chs.zip](https://gitee.com/hbxdss/temporary-warehouse/releases/download/halo-attachments-v1/MobaXterm_Portable_v24.3_chs.tar.gz)

### 飞牛下载（极慢）
[https://share.fnnas.net/s/ce14db2902b0413993](https://share.fnnas.net/s/ce14db2902b0413993)

点黑框下载
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/Screenshot_20260523_152232.webp)

我这里以汉化版为例

我的汉化版是便携版，解压即可食用

# 食用

先打开

如有这个界面，请选择运行
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20152731.png)

打开后你可以看到这样的界面
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20153644.png)

选择箭头指的“会话”，点击打开
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20153511.png)

可以看到这样的界面
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20160817.png)

选择箭头指的 ssh 会话
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20153823.png)

填写 ssh 主机 IP 地址信息，一定要勾选使用指定账户登录
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20153915.png)

然后点击 OK

这里输入开启 ssh 管理员的密码
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20162759.png)

TIP：输入密码时不显示，输入密码时不显示，输入密码时不显示！

重要的事情说三遍

输完密码，你直接按回车就行
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/11_%E5%A6%82%E4%BD%95ssh%E8%BF%9E%E6%8E%A5%E5%88%B0%E9%A3%9E%E7%89%9BNAS/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-05-23%20163401.png)

这个界面时你就登录成功了

# 哔哩哔哩视频

<iframe src="//player.bilibili.com/player.html?isOutside=true&amp;aid=116627790106391&amp;bvid=BV1PjGE6tEcg&amp;cid=38572462062&amp;p=1" width="100%" height="300px" frameborder="0" allowfullscreen="true" framespacing="0" style="display: inline-block"></iframe>
