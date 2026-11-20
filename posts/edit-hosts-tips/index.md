---
title: "小小hosts拿下-修改hosts"
date: 2026-04-18T11:47:00Z
createTime: 2026/04/18 19:47:00
author: 喊不醒的睡神
permalink: /posts/edit-hosts-tips/
---

# 前情提要

在安卓设备上修改难度非常高

首先要开 bl 锁用 MT 管理器在更目录的 etc 文件夹下的 hosts 文件

# 开bl难度

听着简单，但实际开 bl 锁很难

开 bl 难度表（不再更新）：

| 品牌 | 难度 |
| --- | --- |
| 魅族 | 有手就行 |
| 华为 | 你放 p（要靠漏洞） |
| 1+ | 略难 |
| 粗粮 | 新机（除有漏洞的 17）：不用想

中年机型（没澎湃 OS，MIUI12 以上）：有手就行

老机（系统 MIUI12 以下）：出有漏洞的以外，其他的不用想 |
| oppo | 新机器：不用想

老机：看型号 |

其他品牌自己看着办

# 电脑修改

当然你也可以用电脑访问

windows 路径：

C:\Windows\System32\drivers\etc

Mac、Linux 路径：

/etc

# 大道理

其实 Mac 是基于 Unix 的

# IP地址获取

安卓教程开始：

1. 打开这个网站 https://www.itdog.cn/ping/
2. 在图示位置输入网址

![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_144538_edit_359351189174845-jzvL.webp)

3. 先选择你所在地区的运营商（快输入的网址下面选择），然后选择连续测试，等待测试完成
4. 现在我已经测试完成了，结果如下（测试结果仅代表我个人，不建议引用我的 IP）

![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_150356.webp)

5. 首先你需要看测试的地点需要看离你最近的市或者你所在城市（这里是江苏电信）
6. 然后你要看你 IP 响应的位置如果在国内尽，量选择香港，除非香港 IP 延时特别高
7. 接下来就是看丢包率，平均响应时间。收包率尽量为零，平均响应时间越低越好

接下来的步骤针对中文网址

# 中文域名转换

1. 打开这个网站 https://tool.ip138.com/punycode/
2. 依然需要打开一个网站，将中文域名转化成规范域的名

![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_155625_com.lemurbrowser.exts_edit_361404829875053.webp)

现在所有的准备已经做完我们现在开始干正事

# 正篇开始

1. 你需要安装一个软件（下载这个软件需要用到大约 1.65MB 流量）。链接放在最后
2. 你需要在内部存储（各个厂商叫法不一样）创建一个 hosts 文件夹

![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_163230_bin.mt.plus.canary-UGIG.webp)

提示：接下来的内容以 MT 管理器为例（重新排序了）

1. 来创建一个文件，至于文件名你只需要自己分得清就行（注意：不需要后缀名）。我这里就以 chengxing top

![Screenshot_20260418_163327_bin.mt.plus.canary.jpg](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_163327_bin.mt.plus.canary.webp)

2. 打开刚刚创建的文件

![Screenshot_20260418_163840_bin.mt.plus.canary.jpg](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_163840_bin.mt.plus.canary.webp)

3. 选择编辑文本

![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_164124_bin.mt.plus.canary.webp)

4. 所以我江苏徐州的 IP 最快

![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_170058.webp)

5. 需要按格式进行输入 hosts 文件

hosts 文件格式：

IP （注意空格）域名

例如我这是徐州的 IP。IP 是 103.245.25.4，最终的网址是：程星.top（xn--kiv765b.top）

那应该写成：

103.254.25.4 xn--kiv765b.top

输完后是这样的

![Screenshot_20260418_174316_bin.mt.plus.canary.jpg](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_174316_bin.mt.plus.canary.webp)

点击保存

一定要保存，保存，保存。重要的事情说三遍

（换序号了）

1. 将下载的软件安装
2. 打开，十有八九会看到这样的界面（如果看不到，那就说明软件版本升级了）

![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/19_%E5%B0%8F%E5%B0%8Fhosts%E6%8B%BF%E4%B8%8B-%E4%BF%AE%E6%94%B9hosts/Screenshot_20260418_180540_com.github.xfalcon.vhosts.webp)

接下来你只需要跟着箭头点就行（有一个图片集）
（此处 6 张原图在原站已失效，无法显示）

最后的最后：

# 地沟油上的操作视频

我发现这位作者在 github 上有一个地沟油视频的链接

我相信五成的人都访问不了

∴（数学符号的所以）…
视频：地沟油上的视频.mp4（原文件已失效）

再次最后的最后

# 下载链接

优先：https://github.com/x-falcon/Virtual-Hosts/releases

如果上个链接不行的话用这个：host.apk（原文件已失效）

# 哔哩哔哩视频

<iframe src="//player.bilibili.com/player.html?isOutside=true&amp;aid=116425708537369&amp;bvid=BV16YdHBvEAr&amp;cid=37612817650&amp;p=1" width="100%" height="450px" frameborder="1" allowfullscreen="true" framespacing="0" style="display: inline-block"></iframe>
