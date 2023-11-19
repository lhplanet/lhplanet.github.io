---
title: 03_Zookeeper集群操作
date: 2023-11-20 00:03:48
---

## 集群操作

### 集群安装

1. 集群规划

在 hadoop102、hadoop103 和 hadoop104 三个节点上都部署 Zookeeper。

思考：如果是 *10 *台服务器，需要部署多少台*Zookeeper*？

2. 解压安装

- 在 hadoop102 解压Zookeeper 安装包到/opt/module/目录下

```shell
[atguigu@hadoop102 software]$ tar -zxvf apache-zookeeper-3.5.7- bin.tar.gz -C /opt/module/
```

- 修改 apache\-zookeeper\-3\.5\.7\-bin 名称为 zookeeper\-3\.5\.7

```shell
[atguigu@hadoop102 zookeeper-3.5.7module]$mv apache-zookeeper-3.5.7-bin/
```

3. 配置服务器编号

- 在/opt/module/zookeeper\-3\.5\.7/这个目录下创建 zkData

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ mkdir zkData
```

- 在/opt/module/zookeeper\-3\.5\.7/zkData 目录下创建一个 myid 的文件

```shell
[atguigu@hadoop102 zkData]$ vi myid
```

在文件中添加与 server 对应的编号（注意：上下不要有空行，左右不要有空格）

```shell
2
```

注意：添加 myid 文件，一定要在 Linux 里面创建，在 notepad\+\+里面很可能乱码

- 拷贝配置好的 zookeeper 到其他机器上

```shell
[atguigu@hadoop102 module]$ xsync zookeeper-3.5.7
```

并分别在 hadoop103、hadoop104 上修改 myid 文件中内容为 3、4

4. 配置zoo\.cfg文件

- 重命名/opt/module/zookeeper\-3\.5\.7/conf 这个目录下的 zoo\_sample\.cfg 为 zoo\.cfg

```shell
[atguigu@hadoop102 conf]$ mv zoo_sample.cfg zoo.cfg
```

- 打开zoo\.cfg 文件

```shell
[atguigu@hadoop102 conf]$ vim zoo.cfg
```

修改数据存储路径配置

```shell
dataDir=/opt/module/zookeeper\-3\.5\.7/zkData
```

增加如下配置

```shell
#######################cluster##########################
server.2=hadoop102:2888:3888
server.3=hadoop103:2888:3888
server.4=hadoop104:2888:3888
```

- 配置参数解读`server.A=B:C:D`

    - A是一个数字，表示这个是第几号服务器；集群模式下配置一个文件myid，这个文件在 dataDir 目录下，这个文件里面有一个数据就是 A 的值，Zookeeper 启动时读取此文件，拿到里面的数据与 zoo\.cfg 里面的配置信息比较从而判断到底是哪个 server。

    - B是这个服务器的地址；

    - C是这个服务器Follower 与集群中的 Leader 服务器交换信息的端口；

    - D是万一集群中的 Leader 服务器挂了，需要一个端口来重新进行选举，选出一个新的Leader，而这个端口就是用来执行选举时服务器相互通信的端口。

- 同步zoo\.cfg 配置文件

```shell
[atguigu@hadoop102 conf]$ xsync zoo.cfg
```

5. 集群操作

- 分别启动Zookeeper

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh start
[atguigu@hadoop103 zookeeper-3.5.7]$ bin/zkServer.sh start
[atguigu@hadoop104 zookeeper-3.5.7]$ bin/zkServer.sh start
```

- 查看状态

```shell
[atguigu@hadoop102 zookeeper-3.5.7]# bin/zkServer.sh status JMX enabled by default
Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg Mode: follower
[atguigu@hadoop103 zookeeper-3.5.7]# bin/zkServer.sh status JMX enabled by default
Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg Mode: leader
[atguigu@hadoop104 zookeeper-3.4.5]# bin/zkServer.sh status JMX enabled by default
Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg Mode: follower
```

### 选举机制（面试重点）

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119162500.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119162523.png)

### ZK集群启动停止脚本

- 在hadoop102 的/home/atguigu/bin 目录下创建脚本

```shell
[atguigu@hadoop102 bin]$ vim zk.sh	
```

在脚本中编写如下内容

```shell
#!/bin/bash
case $1 in
"start"){
    for i in hadoop102 hadoop103 hadoop104
    do
        echo ---------- zookeeper $i 启动 ------------
        ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh start"
    done
};;
"stop"){
    for i in hadoop102 hadoop103 hadoop104
    do
        echo ---------- zookeeper $i 停止 ------------
        ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh stop"
    done
};;
"status"){
    for i in hadoop102 hadoop103 hadoop104
    do
        echo ---------- zookeeper $i 状态 ------------
        ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh status"
    done
};;
esac
```

- 增加脚本执行权限

```shell
[atguigu@hadoop102 bin]$ chmod u+x zk.sh	
```

- Zookeeper 集群启动脚本

```shell
[atguigu@hadoop102 module]$ zk.sh start	
```

- Zookeeper 集群停止脚本

```shell
[atguigu@hadoop102 module]$ zk.sh stop	
```

::: warning
未完待续...
:::
