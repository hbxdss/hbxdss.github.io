---
title: "如何白嫖一个二级域名并托管到Cloudflare"
date: 2026-10-01T06:08:20Z
createTime: 2026/10/01 14:08:20
author: 喊不醒的睡神
permalink: /posts/free-cloudflare-subdomain/
---

# 注册账号

首先你需要注册并登录以下平台的账号

|  |  |
| --- | --- |
| Cloudflare | [https://dash.cloudflare.com/login](https://dash.cloudflare.com/login) |
| DNSHE | [https://my.dnshe.com/clientarea.php](https://my.dnshe.com/clientarea.php) |
| GitHub | [https://github.com/signup](https://github.com/signup) |

我已经注册完了，注册完大概这样：
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/ddecebab-image.png)![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/84d7a648-image.png)![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/865d4a2f-image.png)

# 注册域名

打开[DNSHE](https://my.dnshe.com/clientarea.php)的用户中心

注册完 DNSHE 以后会让你加入 ******** 群或者绑定 GitHub 账号

众所周知在国内网络环境里使用 ******** 是非常困难的所以我们直接绑定 GitHub 账号

根据流程进行绑定 GitHub 账号，如果大家有实力的话直接加入 ******** 群

点击注册新域名
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/243e354e-image.png)

点击注册新域名
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/c18fab0b-image.png)

选择你想要的根域名
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/b6d3c441-image.png)

注意：只有 ccwu.cc 这个二级域名才可以 10 续期一次

我这里以 ddns.ge 这个域名为例，其他的大同小异

输入域名前缀
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/63199d9f-image.png)

看到下面的此域名可注册。说明这个域名没有被注册，可以注册。如果是此域名已被注册。说明这个域名被注册，不可以注册。

点击确认注册
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/1dc2e3d8-image.png)

# 托管到Cloudflare

点击管理域名
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/0e519926-image.png)

点击 DNS 服务器
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/9c4da6b1-image.png)

来到这里
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/78f7f87c-image.png)

打开[Cloudflare](https://dash.cloudflare.com/)并登录你的 Cloudflare 账号

点击域名
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/f4b3b608-image.png)

点击概览
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/f8e117e5-image.png)

点击添加域名
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/d7275a29-image.png)

点击转移域名
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/e1ee70ec-image.png)

根据图片填写内容
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/c53420d9-image.png)

点击继续
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/9cba0cc8-image.png)

根据自己的需求选择套餐，普通用户直接选择免费的就行了
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/128176d3-16bdc72b-image.png)

划到最下面选择，选择继续前往激活
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/a97710fe-525f7e31-image.png)

把我框出来的名称服务器复制出来
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/d667142e-image.png)

替换我框出来的名称服务器
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/478b0d75-image.png)

把强制替换冲突记录前面的勾勾选上
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/8af475c1-image.png)

点击保存设置
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/a0c01985-image.png)

看到这样说明已经托管到 Cloudflare 上了
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/3fa46fbe-image.png)

回到 Cloudflare，点击我已更行名称服务器
![](https://raw.giteeusercontent.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/01_%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare/86ffa3e2-image.png)

看到您的域现在受 Cloudflare 保护

# 视频

哔哩哔哩

程星资源站
<video controls src="https://1840132105.cdn.123clouddisk.com/1840132105/%E7%A8%8B%E6%98%9F%E8%B5%84%E6%BA%90/%E5%A6%82%E4%BD%95%E7%99%BD%E5%AB%96%E4%B8%80%E4%B8%AA%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D%E5%B9%B6%E6%89%98%E7%AE%A1%E5%88%B0Cloudflare.mp4" style="width:100%"></video>