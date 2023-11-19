---
title: 02_Zookeeper本地安装
date: 2023-11-20 00:03:25
---

## 本地模式安装

1. 安装前准备

- 安装 JDK
- 拷贝 apache\-zookeeper\-3\.5\.7\-bin\.tar\.gz 安装包到 Linux 系统下
- 解压到指定目录

```shell
[atguigu@hadoop102 software]$ tar -zxvf apache-zookeeper-3.5.7- bin.tar.gz -C /opt/module/
```

- 修改名称

```shell
[atguigu@hadoop102 module]$ mv apache-zookeeper-3.5.7 -bin/zookeeper-3.5.7
```

2. 配置修改

- 将/opt/module/zookeeper\-3\.5\.7/conf 这个路径下的 zoo\_sample\.cfg 修改为 zoo\.cfg；

```shell
[atguigu@hadoop102 conf]$ mv zoo_sample.cfg zoo.cfg
```

- 打开zoo\.cfg 文件，修改 dataDir 路径：

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ vim zoo.cfg
```

修改如下内容：

```shell
dataDir=/opt/module/zookeeper-3.5.7/zkData
```

- 在/opt/module/zookeeper\-3\.5\.7/这个目录上创建 zkData 文件夹

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ mkdir zkData
```

3. 操作Zookeeper

- 启动Zookeeper

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh start
```

- 查看进程是否启动
-
```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ jps 4020 Jps
4001 QuorumPeerMain
```

- 查看状态

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh status ZooKeeper JMX enabled by default
Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg Mode: standalone
```

- 启动客户端

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkCli.sh
```

- 退出客户端：

```shell
[zk: localhost:2181(CONNECTED) 0] quit
```

- 停止Zookeeper

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh stop
```

## 配置参数解读

Zookeeper中的配置文件zoo\.cfg中参数含义解读如下：

- tickTime = 2000：通信心跳时间，Zookeeper服务器与客户端心跳时间，单位毫秒

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119160515.png)

- initLimit = 10：LF初始通信时限

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119160622.png)

Leader和Follower初始连接时能容忍的最多心跳数（tickTime的数量）

- syncLimit = 5：LF同步通信时限

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119160622.png)

Leader和Follower之间通信时间如果超过syncLimit \* tickTime，Leader认为Follwer死掉，从服务器列表中删除Follwer。

- dataDir：保存Zookeeper中的数据

注意：默认的tmp目录，容易被Linux系统定期删除，所以一般不用默认的tmp目录。

- clientPort = 2181：客户端连接端口，通常不做修改。
