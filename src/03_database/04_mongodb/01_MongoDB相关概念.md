---
title: 01_MongoDB相关概念
date: 2023-09-19 15:41:43
---

## 一、业务场景

传统的关系型数据库 (比如 MySQL), 在数据操作的"三高"需求以及对应的 Web 2.0 网站需求面前, 会有"力不从心"的感觉

所谓的三高需求:

**高并发, 高性能, 高可用**, 简称三高

- High Performance: 对<u>数据库的高并发读写</u>的要求
- High Storage: 对<u>海量数据的高效率存储和访问</u>的需求
- High Scalability && High Available: 对数据的<u>高扩展性和高可用性</u>的需求

**而 MongoDB 可以应对三高需求**

具体的应用场景:

- 社交场景, 使用 MongoDB 存储存储用户信息, 以及用户发表的朋友圈信息, 通过地理位置索引实现附近的人, 地点等功能.
- 游戏场景, 使用 MongoDB 存储游戏用户信息, 用户的装备, 积分等直接以内嵌文档的形式存储, 方便查询, 高效率存储和访问.
- 物流场景, 使用 MongoDB 存储订单信息, 订单状态在运送过程中会不断更新, 以 MongoDB 内嵌数组的形式来存储, 一次查询就能将订单所有的变更读取出来.
- 物联网场景, 使用 MongoDB 存储所有接入的智能设备信息, 以及设备汇报的日志信息, 并对这些信息进行多维度的分析.
- 视频直播, 使用 MongoDB 存储用户信息, 点赞互动信息等.

这些应用场景中, 数据操作方面的共同点有:

1. 数据量大
2. 写入操作频繁
3. 价值较低的数据, 对**事务性**要求不高

对于这样的数据, 更适合用 MongoDB 来实现数据存储

那么我们**什么时候选择 MongoDB 呢?**

除了架构选型上, 除了上述三个特点之外, 还要考虑下面这些问题:

- 应用不需要事务及复杂 JOIN 支持
- 新应用, 需求会变, 数据模型无法确定, 想快速迭代开发
- 应用需要 2000 - 3000 以上的读写QPS（更高也可以）
- 应用需要 TB 甚至 PB 级别数据存储
- 应用发展迅速, 需要能快速水平扩展
- 应用要求存储的数据不丢失
- 应用需要 `99.999%` 高可用
- 应用需要大量的地理位置查询, 文本查询

如果上述有1个符合, 可以考虑 MongoDB, 2个及以上的符合, 选择 MongoDB 绝不会后悔.

> 如果用MySQL呢?
> 相对MySQL, 可以以更低的成本解决问题（包括学习, 开发, 运维等成本）

## 二、MongoDB 简介

MongoDB是一个开源, 高性能, 无模式的文档型数据库, 当初的设计就是用于简化开发和方便扩展, 是NoSQL数据库产品中的一种.是最 像关系型数据库（MySQL）的非关系型数据库.

它支持的数据结构非常松散, 是一种类似于 JSON 的 格式叫BSON, 所以它既可以存储比较复杂的数据类型, 又相当的灵活.

MongoDB中的记录是一个文档, 它是一个由字段和值对（ﬁeld:value）组成的数据结构.MongoDB文档类似于JSON对象, 即一个文档认 为就是一个对象.字段的数据类型是字符型, 它的值除了使用基本的一些类型外, 还可以包括其他文档, 普通数组和文档数组.

**"最像关系型数据库的 NoSQL 数据库"**. MongoDB 中的记录是一个文档, 是一个 key-value pair. 字段的数据类型是字符型, 值除了使用基本的一些类型以外, 还包括其它文档, 普通数组以及文档数组

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200835701.jpg)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200836431.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200836513.png)

MongoDB 数据模型是面向<u>文档</u>的, 所谓文档就是一种类似于 JSON 的结构, 简单理解 MongoDB 这个数据库中存在的是各种各样的 JSON（BSON）

- 数据库 (database)
    - 数据库是一个仓库, 存储集合 (collection)
- 集合 (collection)
    - 类似于数组, 在集合中存放文档
- 文档 (document)
    - 文档型数据库的最小单位, 通常情况, 我们存储和操作的内容都是文档

在 MongoDB 中, 数据库和集合都不需要手动创建, 当我们创建文档时, 如果文档所在的集合或者数据库不存在, **则会自动创建数据库或者集合**

### 数据库 (databases) 管理语法

| 操作                                            | 语法                             |
| ----------------------------------------------- | -------------------------------- |
| 查看所有数据库                                  | `show dbs;` 或 `show databases;` |
| 查看当前数据库                                  | `db;`                            |
| 切换到某数据库 (**若数据库不存在则创建数据库**) | `use <db_name>;`                 |
| 删除当前数据库                                  | `db.dropDatabase();`             |

### 集合 (collection) 管理语法

| 操作         | 语法                                        |
| ------------ | ------------------------------------------- |
| 查看所有集合 | `show collections;`                         |
| 创建集合     | `db.createCollection("<collection_name>");` |
| 删除集合     | `db.<collection_name>.drop()`               |

## 三、数据模型

MongoDB的最小存储单位就是文档(document)对象。文档(document)对象对应于关系型数据库的行。数据在MongoDB中以 BSON（Binary-JSON）文档的格式存储在磁盘上。

BSON（Binary Serialized Document Format）是一种类json的一种二进制形式的存储格式，简称Binary JSON。BSON和JSON一样，支持 内嵌的文档对象和数组对象，但是BSON有JSON没有的一些数据类型，如Date和BinData类型。

BSON采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可 以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。

Bson中，除了基本的JSON类型：string,integer,boolean,double,null,array和object，mongo还使用了特殊的数据类型。这些类型包括 date,object id,binary data,regular expression 和code。每一个驱动都以特定语言的方式实现了这些类型，查看你的驱动的文档来获取详 细信息。

BSON数据类型参考列表：

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200836388.png)

::: tip 提示
shell默认使用64位浮点型数值。{“x”：3.14}或{“x”：3}。对于整型值，可以使用NumberInt（4字节符号整数）或NumberLong（8字节符 号整数），{“x”:NumberInt(“3”)}{“x”:NumberLong(“3”)}
:::

## 四、MongoDB 的特点

### 1.高性能

MongoDB 提供高性能的数据持久化

- 嵌入式数据模型的支持<u>减少了数据库系统上的 I/O 活动</u>
- 索引支持更快的查询, 并且可以包含来自嵌入式文档和数组的键 (文本索引解决搜索的需求, TTL 索引解决历史数据自动过期的需求, 地理位置索引可以用于构件各种 O2O 应用)
- mmapv1, wiredtiger, mongorocks (rocksdb) in-memory 等多引擎支持满足各种场景需求
- Gridfs 解决文件存储需求

### 2.高可用

MongoDB 的复制工具称作**副本集** (replica set) 可以提供自动<u>故障转移和数据冗余</u>

### 3.高扩展

水平扩展是其核心功能一部分

分片将数据分布在一组集群的机器上 (海量数据存储, 服务能力水平扩展)

MongoDB 支持基于**片键**创建数据区域, 在一个平衡的集群当中, MongoDB 将一个区域所覆盖的读写**只定向**到该区域的那些片

### 4.其他

MongoDB支持丰富的查询语言, 支持读和写操作(CRUD), 比如数据聚合, 文本搜索和地理空间查询等. 无模式（动态模式）, 灵活的文档模型
