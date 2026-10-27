---
title: "再有公网IP的情况下，光猫不桥接情况下进行公网访问"
date: 2026-08-16T04:00:00Z
createTime: 2026/08/16 12:00:00
author: 喊不醒的睡神
permalink: /posts/public-access-without-router-bridge/
---

首先把 NAS 接入光猫，连接完后顺便把光猫背面的贴纸拍张照打开光猫管理后台一般是这个👇192.168.1.1接下来以我的电信光猫为例

# 登录光猫

打开管理后台后把你拍的照片拿出来，找到默认终端配置密码（有些光猫需要配置账号，最好记下来）![](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/04_%E5%86%8D%E6%9C%89%E5%85%AC%E7%BD%91IP%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E5%85%89%E7%8C%AB%E4%B8%8D%E6%A1%A5%E6%8E%A5%E6%83%85%E5%86%B5%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%85%AC%E7%BD%91%E8%AE%BF%E9%97%AE/8d89fc31-image.png)点击登录![image.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/04_%E5%86%8D%E6%9C%89%E5%85%AC%E7%BD%91IP%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E5%85%89%E7%8C%AB%E4%B8%8D%E6%A1%A5%E6%8E%A5%E6%83%85%E5%86%B5%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%85%AC%E7%BD%91%E8%AE%BF%E9%97%AE/2a04ed10-image.png)点击高级设置![image-SAzL.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/04_%E5%86%8D%E6%9C%89%E5%85%AC%E7%BD%91IP%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E5%85%89%E7%8C%AB%E4%B8%8D%E6%A1%A5%E6%8E%A5%E6%83%85%E5%86%B5%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%85%AC%E7%BD%91%E8%AE%BF%E9%97%AE/4781956f-image-SAzL.png)

# 端口映射

点击端口映射![image-gKUC.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/04_%E5%86%8D%E6%9C%89%E5%85%AC%E7%BD%91IP%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E5%85%89%E7%8C%AB%E4%B8%8D%E6%A1%A5%E6%8E%A5%E6%83%85%E5%86%B5%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%85%AC%E7%BD%91%E8%AE%BF%E9%97%AE/c1aec1f0-image-gKUC.png)按照我截图中的信息经行填写![image-zwdM.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/04_%E5%86%8D%E6%9C%89%E5%85%AC%E7%BD%91IP%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E5%85%89%E7%8C%AB%E4%B8%8D%E6%A1%A5%E6%8E%A5%E6%83%85%E5%86%B5%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%85%AC%E7%BD%91%E8%AE%BF%E9%97%AE/d5d9f8b3-image-zwdM.png)点击添加映射

# 查看公网IP

点击网关信息![image-zEMu.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/04_%E5%86%8D%E6%9C%89%E5%85%AC%E7%BD%91IP%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E5%85%89%E7%8C%AB%E4%B8%8D%E6%A1%A5%E6%8E%A5%E6%83%85%E5%86%B5%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%85%AC%E7%BD%91%E8%AE%BF%E9%97%AE/87b4a05f-image-zEMu.png)现在我已经是大内网了（只要 WAN IP 是 100 或者 10 开头的就是大内网，其实有些运营商不安规矩来打开[iP138](https://www.ip138.com/)查看 ip 和光猫 WAN IP 是否一致）![image-duxa.png](https://gitee.com/hbxdss/temporary-warehouse/raw/master/%E7%9D%A1%E7%A5%9E%E5%8D%9A%E5%AE%A2/%E6%96%87%E7%AB%A0%E7%85%A7%E7%89%87/04_%E5%86%8D%E6%9C%89%E5%85%AC%E7%BD%91IP%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E5%85%89%E7%8C%AB%E4%B8%8D%E6%A1%A5%E6%8E%A5%E6%83%85%E5%86%B5%E4%B8%8B%E8%BF%9B%E8%A1%8C%E5%85%AC%E7%BD%91%E8%AE%BF%E9%97%AE/4dd8cc29-image-duxa.png)PS：其实现在很多地区的运营商都是大内网了，过几周我处一个内网穿透的教程

# 尝试访问

如果不是大内网的话用光猫的 WAN IP 加: 公网端口尝试访问现在所有的运营商都会封一些端口比如**21、23、25、80、135、136、137、138、139、443、445、3389、8080**

# 视频

[](https://1840132105.cdn.123clouddisk.com/1840132105/31245256)

# 最后一段

在最后有什么疑问我可以帮大家解答我的联系方式：邮箱：主用：hbxdss@126.com备用：hbxdss@qq.comQQ：3851582821群聊：[623230744](https://qm.qq.com/q/JJYlqjcFK)