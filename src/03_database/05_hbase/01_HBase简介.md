---
title: 01_HBase简介
date: 2023-11-19 23:54:33
---

## 1.1	HBase 定义

Apache HBase™ 是以 hdfs 为数据存储的，一种分布式、可扩展的NoSQL 数据库。

## 1.2	HBase 数据模型

HBase 的设计理念依据Google 的 BigTable 论文，论文中对于数据模型的首句介绍。

Bigtable 是一个稀疏的、分布式的、持久的多维排序 map。

之后对于映射的解释如下：

该映射由行键、列键和时间戳索引；映射中的每个值都是一个未解释的字节数组。

最终HBase 关于数据模型和 BigTable 的对应关系如下：

HBase 使用与 Bigtable 非常相似的数据模型。用户将数据行存储在带标签的表中。数
据行具有可排序的键和任意数量的列。该表存储稀疏，因此如果用户喜欢，同一表中的行可
以具有疯狂变化的列。

最终理解HBase 数据模型的关键在于稀疏、分布式、多维、排序的映射。其中映射 map指代非关系型数据库的key-Value 结构。

### 1.2.1	HBase 逻辑结构

HBase 可以用于存储多种结构的数据，以 JSON 为例，存储的数据原貌为：

```json
{
	"row_key1":{
		"personal_info":{
			"name":"zhangsan",
			"city":"北京",
			"phone":"131********"
		},
		"office_info":{
			"tel":"010-1111111",
			"address":"atguigu"
		}
	},
	"row_key11":{
		"personal_info":{
			"city":"上海",
			"phone":"132********"
		},
		"office_info":{
			"tel":"010-1111111"
		}
	},
	"row_key2":{
	......
}
```

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119212407.png)

### 1.2.2	HBase 物理存储结构

物理存储结构即为数据映射关系，而在概念视图的空单元格，底层实际根本不存储。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119212709.png)

### 1.2.3	数据模型

1）Name Space

命名空间，类似于关系型数据库的 database 概念，每个命名空间下有多个表。HBase 两个自带的命名空间，分别是 hbase 和 default，hbase 中存放的是 HBase 内置的表，default表是用户默认使用的命名空间。

2）Table

类似于关系型数据库的表概念。不同的是，HBase 定义表时只需要声明列族即可，不需要声明具体的列。因为数据存储时稀疏的，所有往 HBase 写入数据时，字段可以动态、按需指定。因此，和关系型数据库相比，HBase 能够轻松应对字段变更的场景。

3）Row

HBase 表中的每行数据都由一个RowKey 和多个Column（列）组成，数据是按照 RowKey 的字典顺序存储的，并且查询数据时只能根据 RowKey 进行检索，所以 RowKey 的设计十分重要。

4）Column

HBase 中的每个列都由 Column Family(列族)和 Column Qualifier（列限定符）进行限定，例如 info：name，info：age。建表时，只需指明列族，而列限定符无需预先定义。

5）Time Stamp

用于标识数据的不同版本（version），每条数据写入时，系统会自动为其加上该字段， 其值为写入 HBase 的时间。

6）Cell

由{rowkey, column Family：column Qualifier, timestamp} 唯一确定的单元。cell 中的数据全部是字节码形式存贮。

## 1.3	HBase 基本架构

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119213030.png)

### Master

实现类为 HMaster，负责监控集群中所有的 RegionServer 实例。主要作用如下：

（1）管理元数据表格 hbase:meta，接收用户对表格创建修改删除的命令并执行

（2）监控 region 是否需要进行负载均衡，故障转移和 region 的拆分。通过启动多个后台线程监控实现上述功能：

①LoadBalancer 负载均衡器

周期性监控 region 分布在 regionServer 上面是否均衡，由参数 hbase.balancer.period 控制周期时间，默认 5 分钟。

②CatalogJanitor 元数据管理器

定期检查和清理 hbase:meta 中的数据。meta 表内容在进阶中介绍。

③MasterProcWAL master 预写日志处理器

把 master 需要执行的任务记录到预写日志 WAL 中，如果 master 宕机，让 backupMaster

读取日志继续干。

### Region Server

Region Server 实现类为 HRegionServer，主要作用如下:

（1）负责数据 cell 的处理，例如写入数据 put，查询数据 get 等

（2）拆分合并 region 的实际执行者，有master 监控，有regionServer 执行。

### Zookeeper

HBase 通过 Zookeeper 来做 master 的高可用、记录 RegionServer 的部署信息、并且存储有 meta 表的位置信息。

HBase 对于数据的读写操作时直接访问 Zookeeper 的，在 2.3 版本推出 Master Registry 模式，客户端可以直接访问 master。使用此功能，会加大对 master 的压力，减轻对 Zookeeper 的压力。

### HDFS

HDFS 为Hbase 提供最终的底层数据存储服务，同时为HBase 提供高容错的支持。

