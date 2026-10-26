---
title: "在飞牛NAS中部署1Panel面板"
date: 2026-05-31T05:45:00Z
createTime: 2026/05/31 13:45:00
author: 喊不醒的睡神
---

# 1.飞牛应用商店

登陆飞牛 NAS 管理后台![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 144502.webp)打开应用商店![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 144537.webp)选择开发工具区![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 144608.webp)点击玩 1Panel![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 144833.webp)进入后点击安装设置管理入口、帐号、密码![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 144855.webp)选择确定，然后就是漫长的等待向我这样的人（极客），懒人安装方法不适用只能 SSH 安装

# 2.SSH安装

## 获取安装命令

打开 1Panel 官网官网：[1Panel - 现代化、开源的 Linux 服务器运维管理面板](https://1panel.cn/)（点击蓝链跳转）![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 145606.webp)点击免费安装![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 150033.webp)复制命令**注意：把命令前的 $ 去掉****把命令前的 $ 去掉****把命令前的 $ 去掉**重要的事情说三遍

## 连接飞牛NAS

连接飞牛 NAS不会连接的看我这篇文章<https://xn--kiv765b.top/archives/019e53a2-6415-7413-a686-8a1cf6e24d8a>

## 提权

输入

```
sudo -i
```

然后输入密码![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 152259.webp)看到有“#”表示已经是 ROOT 权限![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 155226.webp)

## 安装1Panel

### 选择语言

粘贴命令回车执行（我这里已经有安装包了，没有下载。所以会提示：“检测到本地安装包且校验通过，跳过下载。”）![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 155308-Jfat.webp)输入 2，并回车![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 155328.webp)

### 各种设置

这里选择安装目录，直接回车这里如果是在国内需要的是配置镜像加速，国外就不需要![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 171454-qixe.webp)这里是在国内直接回车这里有 Docker 的配置文件，要替换![](https://www.xiaorin.cn/upload/屏幕截图 2026-05-24 171712-DODc.png)输入 y 回车![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/10_在飞牛NAS中部署1Panel面板/屏幕截图 2026-05-24 172135.webp)现在来到了端口设置，这里的话端口就设置成 16384。可以自己去设置，但是需要注意小于 65535![](https://www.xiaorin.cn/upload/屏幕截图 2026-05-24 172237-vecW.webp)现在来到设置安全入口，我这里的话就写 xcjm![](https://www.xiaorin.cn/upload/屏幕截图 2026-05-24 172305-cQbW.webp)现在来到了设置用户名，这里就设置成 HBXDSS![](https://www.xiaorin.cn/upload/屏幕截图 2026-05-24 172356-FGIP.webp)现在来到了设置用户名的密码，这里就自己定![](https://www.xiaorin.cn/upload/屏幕截图 2026-05-24 172650-qbmx.webp)看到这个见面说明面板已经装好了

## 尝试登录

打开终端中提示的地址![](https://www.xiaorin.cn/upload/屏幕截图 2026-05-24 172811.webp)输入刚刚创建了一个登录账号密码![](https://www.xiaorin.cn/upload/屏幕截图 2026-05-24 173050-yxUB.webp)到这里就部署完成了

# 哔哩哔哩视频

🔗 嵌入式内容: https://player.bilibili.com/player.html?isOutside=true&aid=116667602438669&bvid=BV1iNVH6xEzd&cid=38740101074&p=1
