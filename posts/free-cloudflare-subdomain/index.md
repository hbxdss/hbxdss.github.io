---
title: "如何白嫖一个二级域名并托管到Cloudflare"
date: 2026-10-01T06:08:20Z
createTime: 2026/10/01 14:08:20
author: 喊不醒的睡神
permalink: /posts/free-cloudflare-subdomain/
---

# 注册账号

首先你需要注册并登录以下平台的账号

| | |
|---|---|
| Cloudflare | https://dash.cloudflare.com/login |
| DNSHE | https://my.dnshe.com/clientarea.php |
| GitHub | https://github.com/signup |

我已经注册完了，注册完大概这样：![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/ddecebab-image.png)![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/84d7a648-image.png)![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/865d4a2f-image.png)

# 注册域名

打开[DNSHE](https://my.dnshe.com/clientarea.php)的用户中心注册完 DNSHE 以后会让你加入 \*\*\*\*\*\*\*\* 群或者绑定 GitHub 账号众所周知在国内网络环境里使用 \*\*\*\*\*\*\*\* 是非常困难的所以我们直接绑定 GitHub 账号根据流程进行绑定 GitHub 账号，如果大家有实力的话直接加入 \*\*\*\*\*\*\*\* 群点击注册新域名![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/243e354e-image.png)点击注册新域名![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/c18fab0b-image.png)选择你想要的根域名![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/b6d3c441-image.png)注意：只有 ccwu.cc 这个二级域名才可以 10 续期一次我这里以 ddns.ge 这个域名为例，其他的大同小异输入域名前缀![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/63199d9f-image.png)看到下面的**此域名可注册。**说明这个域名没有被注册，可以注册。如果是**此域名已被注册。**说明这个域名被注册，不可以注册。点击确认注册![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/1dc2e3d8-image.png)

# 托管到Cloudflare

点击管理域名![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/0e519926-image.png)点击 DNS 服务器![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/9c4da6b1-image.png)来到这里![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/78f7f87c-image.png)打开[Cloudflare](https://dash.cloudflare.com/)并登录你的 Cloudflare 账号点击域名![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/f4b3b608-image.png)点击概览![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/f8e117e5-image.png)点击添加域名![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/d7275a29-image.png)点击转移域名![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/e1ee70ec-image.png)根据图片填写内容![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/c53420d9-image.png)点击继续![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/9cba0cc8-image.png)根据自己的需求选择套餐，普通用户直接选择免费的就行了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/128176d3-16bdc72b-image.png)划到最下面选择，选择继续前往激活![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/a97710fe-525f7e31-image.png)把我框出来的名称服务器复制出来![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/d667142e-image.png)替换我框出来的名称服务器![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/478b0d75-image.png)把**强制替换冲突记录**前面的勾勾选上![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/8af475c1-image.png)点击保存设置![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/a0c01985-image.png)看到这样说明已经托管到 Cloudflare 上了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/3fa46fbe-image.png)回到 Cloudflare，点击我已更行名称服务器![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/01_如何白嫖一个二级域名并托管到Cloudflare/86ffa3e2-image.png)看到您的域现在受 Cloudflare 保护

# 视频

哔哩哔哩程星资源站🎬 视频: https://1840132105.cdn.123clouddisk.com/1840132105/程星资源/如何白嫖一个二级域名并托管到Cloudflare.mp4
