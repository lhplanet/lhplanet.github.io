---
title: 01_Zookeeper入门
date: 2023-11-20 00:02:53
---

## 概述

Zookeeper 是一个开源的分布式的，为分布式框架提供协调服务的 Apache 项目。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119154607.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119154749.png)

## 特点

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119154823.png)

1. Zookeeper：一个领导者（Leader），多个跟随者（Follower）组成的集群。
2. 集群中只要有半数以上节点存活，Zookeeper集群就能正常服务。所以Zookeeper适合安装奇数台服务器。
3. 全局数据一致：每个Server保存一份相同的数据副本，Client无论连接到哪个Server，数据都是一致的。
4. 更新请求顺序执行，来自同一个Client的更新请求按其发送顺序依次执行。
5. 数据更新原子性，一次数据更新要么成功，要么失败。
6. 实时性，在一定时间范围内，Client能读到最新数据。

## 数据结构

ZooKeeper 数据模型的结构与 Unix 文件系统很类似，整体上可以看作是一棵树，每个节点称做一个 ZNode。每一个 ZNode 默认能够存储 1MB 的数据，每个 ZNode 都可以通过其路径唯一标识。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119154959.png)

## 应用场景

提供的服务包括：统一命名服务、统一配置管理、统一集群管理、服务器节点动态上下线、软负载均衡等。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155145.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155201.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155218.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155234.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155255.png)

## 下载地址

1. 官网首页：

https://zookeeper\.apache\.org/

2. 下载截图

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155615.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155648.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155724.png)

3. 下载 __Linux __环境安装的 __tar __包

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119155741.png)
