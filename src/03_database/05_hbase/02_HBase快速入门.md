---
title: 02_HBase快速入门
date: 2023-11-19 23:55:23
---

## 2.1	HBase 安装部署

### 2.1.1	Zookeeper 正常部署

首先保证 Zookeeper 集群的正常部署，并启动之。

```shell
[atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh start
[atguigu@hadoop103 zookeeper-3.5.7]$ bin/zkServer.sh start
[atguigu@hadoop104 zookeeper-3.5.7]$ bin/zkServer.sh start
```

### 2.1.2	Hadoop 正常部署

Hadoop 集群的正常部署并启动。

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ sbin/start-dfs.sh
[atguigu@hadoop103 hadoop-3.1.3]$ sbin/start-yarn.sh
```

### 2.1.3	HBase 的解压

1）解压 Hbase 到指定目录

```shell
[atguigu@hadoop102 software]$ tar -zxvf hbase-2.4.11-bin.tar.gz -C /opt/module/
[atguigu@hadoop102 software]$ mv /opt/module/hbase-2.4.11 /opt/module/hbase
```

2）配置环境变量

```shell
[atguigu@hadoop102 ~]$ sudo vim /etc/profile.d/my_env.sh
```

添加

```shell
#HBASE_HOME
export HBASE_HOME=/opt/module/hbase
export PATH=$PATH:$HBASE_HOME/bin
```

3）使用 source 让配置的环境变量生效

### 2.1.4	HBase 的配置文件

1）hbase-env.sh 修改内容，可以添加到最后：

```shell
export HBASE_MANAGES_ZK=false
```

2）hbase-site.xml 修改内容：

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

<configuration>

	<property>
		<name>hbase.zookeeper.quorum</name>
		<value>hadoop102,hadoop103,hadoop104</value>
		<description>The directory shared by RegionServers.</description>
	</property>

<!--	<property>-->
<!--		<name>hbase.zookeeper.property.dataDir</name>-->
<!--		<value>/export/zookeeper</value>-->
<!--		<description> 记得修改 ZK 的配置文件，ZK 的信息不能保存到临时文件夹</description> -->
<!--	</property>-->


	<property>
		<name>hbase.rootdir</name>
		<value>hdfs://hadoop102:8020/hbase</value>
		<description>The directory shared by RegionServers.</description>
	</property>
	
	
	<property>
		<name>hbase.cluster.distributed</name>
		<value>true</value>
	</property>

</configuration>
```

3）regionservers

```shell
hadoop102
hadoop103
hadoop104
```

4）解决 HBase 和 Hadoop 的 log4j 兼容性问题，修改 HBase 的 jar 包，使用 Hadoop 的 jar 包

```shell
[atguigu@hadoop102 hbase]$ mv /opt/module/hbase/lib/client-facingthirdparty/slf4j-reload4j-1.7.33.jar /opt/module/hbase/lib/clientfacing-thirdparty/slf4j-reload4j-1.7.33.jar.bak
```

### 2.1.5	HBase 远程发送到其他集群

```shell
[atguigu@hadoop102 module]$ xsync hbase/
```

### 2.1.6	HBase 服务的启动

1）单点启动

```shell
[atguigu@hadoop102 hbase]$ bin/hbase-daemon.sh start master
[atguigu@hadoop102 hbase]$ bin/hbase-daemon.sh start regionserver
```

2）群启

```shell
[atguigu@hadoop102 hbase]$ bin/start-hbase.sh
```

3）对应的停止服务

```shell
[atguigu@hadoop102 hbase]$ bin/stop-hbase.sh	
```

### 2.1.7	查看 HBase 页面

启动成功后，可以通过“host:port”的方式来访问 HBase 管理页面，例如：

http://hadoop102:16010

### 2.1.8	高可用（可选）

在 HBase 中 HMaster 负责监控 HRegionServer 的生命周期，均衡 RegionServer 的负载， 如果HMaster 挂掉了，那么整个 HBase 集群将陷入不健康的状态，并且此时的工作状态并不会维持太久。所以HBase 支持对 HMaster 的高可用配置。


1）关闭 HBase 集群（如果没有开启则跳过此步）

```shell
[atguigu@hadoop102 hbase]$ bin/stop-hbase.sh	
```

2）在 conf 目录下创建 backup-masters 文件

```shell
[atguigu@hadoop102 hbase]$ touch conf/backup-masters	
```

3）在 backup-masters 文件中配置高可用 HMaster 节点

```shell
[atguigu@hadoop102 hbase]$ echo hadoop103 > conf/backup-masters	
```

4）将整个 conf 目录 scp 到其他节点

```shell
[atguigu@hadoop102 hbase]$ xsync conf	
```

5）重启 hbase,打开页面测试查看

http://hadooo102:16010

## 2.2	HBase Shell 操作

### 2.2.1	基本操作

1）进入 HBase 客户端命令行

```shell
[atguigu@hadoop102 hbase]$ bin/hbase shell
```

2）查看帮助命令

能够展示 HBase 中所有能使用的命令，主要使用的命令有 namespace 命令空间相关，DDL 创建修改表格，DML 写入读取数据。

### 2.2.2	namespace

1）创建命名空间

使用特定的 help 语法能够查看命令如何使用。

```shell
hbase:002:0> help 'create_namespace'
```

2）创建命名空间 bigdata

```shell
hbase:003:0> create_namespace 'bigdata'
```

3）查看所有的命名空间

```shell
hbase:004:0> list_namespace
```

### 2.2.3	DDL

1）创建表

在 bigdata 命名空间中创建表格student，两个列族。info 列族数据维护的版本数为 5 个，如果不写默认版本数为 1。

```shell
hbase:005:0> create 'bigdata:student', {NAME => 'info', VERSIONS =>
5}, {NAME => 'msg'}
```

如果创建表格只有一个列族，没有列族属性，可以简写。

如果不写命名空间，使用默认的命名空间 default。

```shell
hbase:009:0> create 'student1','info'
```

2）查看表

查看表有两个命令：list 和 describe list：查看所有的表名

```shell
hbase:013:0> list
```

describe：查看一个表的详情

```shell
hbase:014:0> describe 'student1'
```

3）修改表

表名创建时写的所有和列族相关的信息，都可以后续通过 alter 修改，包括增加删除列族。

（1）增加列族和修改信息都使用覆盖的方法

```shell
hbase:015:0> alter 'student1', {NAME => 'f1', VERSIONS => 3}
```

（2）删除信息使用特殊的语法

```shell
hbase:015:0> alter 'student1', NAME => 'f1', METHOD => 'delete'
hbase:016:0> alter 'student1', 'delete' => 'f1'
```

4）删除表

shell 中删除表格,需要先将表格状态设置为不可用。

```shell
hbase:017:0> disable 'student1'
hbase:018:0> drop 'student1'
```

### 2.2.4	DML

1）写入数据

在 HBase 中如果想要写入数据，只能添加结构中最底层的 cell。可以手动写入时间戳指定 cell 的版本，推荐不写默认使用当前的系统时间。

```shell
hbase:019:0> put 'bigdata:student','1001','info:name','zhangsan'
hbase:020:0> put 'bigdata:student','1001','info:name','lisi'
hbase:021:0> put 'bigdata:student','1001','info:age','18'
```

如果重复写入相同rowKey，相同列的数据，会写入多个版本进行覆盖。

2）读取数据

读取数据的方法有两个：get 和 scan。

get 最大范围是一行数据，也可以进行列的过滤，读取数据的结果为多行 cell。

```shell
hbase:022:0> get 'bigdata:student','1001'
hbase:023:0> get 'bigdata:student','1001' , {COLUMN => 'info:name'}
```

也可以修改读取cell 的版本数，默认读取一个。最多能够读取当前列族设置的维护版本数。

```shell
hbase:024:0>get 'bigdata:student','1001' , {COLUMN => 'info:name',
VERSIONS => 6}
```

scan 是扫描数据，能够读取多行数据，不建议扫描过多的数据，推荐使用 startRow 和stopRow 来控制读取的数据，默认范围左闭右开。

```shell
hbase:025:0> scan 'bigdata:student',{STARTROW => '1001',STOPROW =>
'1002'}
```

实际开发中使用shell 的机会不多，所有丰富的使用方法到API 中介绍。

3）删除数据

删除数据的方法有两个：delete 和 deleteall。

delete 表示删除一个版本的数据，即为 1 个 cell，不填写版本默认删除最新的一个版本。

```shell
hbase:026:0> delete 'bigdata:student','1001','info:name'
```

deleteall 表示删除所有版本的数据，即为当前行当前列的多个 cell。（执行命令会标记数据为要删除，不会直接将数据彻底删除，删除数据只在特定时期清理磁盘时进行）

```shell
hbase:027:0> deleteall 'bigdata:student','1001','info:name'	
```
