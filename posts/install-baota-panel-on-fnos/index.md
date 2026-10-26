---
title: "在飞牛NAS中安装宝塔面板"
date: 2026-07-05T06:00:00Z
author: 喊不醒的睡神
---

众所周知，在面板界有两大天它们分别是宝塔面板和 1Panel 面板在以前我在飞牛 NAS 中安装了 1Panel 面板，但是因为 1Panel 面板占用率有一点高所以我来教大家如何卸载 1Panel 面板 + 安装宝塔面板

# 卸载1Panel面板

用 SSH 连接飞牛 NAS

## 提权

执行

```
sudo -i
#提权
```

![屏幕截图 2026-07-03 164626.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 164626.png)输入登录用户名的密码

## 查看是否卸载

执行

```
1pctl
#检查1Panel面板是否卸载
```

若返回像这样的命令说明，说明 1Panel 未卸载![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 165326.png)若返回这样的说明已卸载![屏幕截图 2026-07-03 165845.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 165845.png)

## 正式卸载1Panel

执行

```
1pctl uninstall
```

输入 y，并回车![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 165748.png)再次输入 y，并回车![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 165815.png)看到像这样的提示时说明 1Panel 面板已经卸载完成了![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 165845.png)此次教程参考 1Panel 官方文档
链接：[命令行工具 - 1Panel 文档](https://1panel.cn/docs/v2/installation/cli/)

# 安装宝塔面板

## 获取安装命令

打开宝塔面板官网链接：[宝塔面板 (bt.cn) 简单好用的 Linux/Windows 服务器运维管理面板](https://www.bt.cn/new/index.html)点击下载安装![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 170830.png)点击复制命令![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 173328.png)TIP：如果你没有卸载 1Panel 面板执行前先执行

```
sudo -i
#提权
```

然后输入登陆用户的密码

## 安装

在 SSH 终端中粘贴命令回车执行![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 173439.png)输入 y，并回车![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 173507.png)输入 yes，并回车后续会修复经过了漫长的等待以后，提示这个。我们来尝试访问![屏幕截图 2026-07-03 180848.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 180848.png)

# 修复飞牛管理后台无法访问

一条一条执行下面的命令

## 切换root

```
# 切换root
sudo -i
```

## 放行飞牛5666 + 宝塔35887（防火墙+iptables双保险）

面板端口可能有变化把 35887 改成你的宝塔面板端口就行

```
# 1. 放行飞牛5666 + 宝塔35887（防火墙+iptables双保险）
ufw allow 5666/tcp
ufw allow 35887/tcp
iptables -I INPUT -p tcp --dport 5666 -j ACCEPT
iptables -I INPUT -p tcp --dport 35887 -j ACCEPT
```

## 杀宝塔Nginx（抢80/443导致飞牛挂）

```
# 2. 杀宝塔Nginx（抢80/443导致飞牛挂）
pkill -9 nginx
```

## 重启飞牛核心服务

```
# 3. 重启飞牛核心服务
systemctl restart trim_nginx
systemctl restart fnweb
```

## 宝塔监听改为0.0.0.0（外网可访问）

```
# 4. 宝塔监听改为0.0.0.0（外网可访问）
sed -i 's/bind = 127.0.0.1/bind = 0.0.0.0/' /www/server/panel/data/panelConfig.conf
# 重启宝塔
/etc/init.d/bt restart
```

## 验证飞牛是否正常

```
# 5. 验证飞牛是否正常
curl -I http://localhost:5666
```

# 登录宝塔面板

账户信息在安装最后用浏览器打开 IP将用户协议划到最下面![屏幕截图 2026-07-03 185129.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 185129.png)点击我已阅读并同意“《用户协议》”然后点击进入面板![屏幕截图 2026-07-03 185150.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 185150.png)

## 绑定宝塔账号

![屏幕截图 2026-07-03 185416.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/睡神博客/文章照片/06_在飞牛NAS中安装宝塔面板/屏幕截图 2026-07-03 185416.png)
