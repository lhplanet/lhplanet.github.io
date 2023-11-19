---
title: 01_Hadoop概述
date: 2023-11-19 23:59:26
---

##  1.1 Hadoop是什么

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004124.png)

##  1.2 Hadoop发展历史（了解）

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004152.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004330.png)


##  1.3 Hadoop三大发行版本（了解）

Hadoop三大发行版本：Apache、Cloudera、Hortonworks。

Apache版本最原始（最基础）的版本，对于入门学习最好。2006

Cloudera内部集成了很多大数据框架，对应产品CDH。2008

Hortonworks文档较好，对应产品HDP。2011

Hortonworks现在已经被Cloudera公司收购，推出新的品牌CDP。

1）Apache Hadoop

官网地址：http://hadoop.apache.org

下载地址：https://hadoop.apache.org/releases.html

2）Cloudera Hadoop

官网地址：https://www.cloudera.com/downloads/cdh

下载地址：https://docs.cloudera.com/documentation/enterprise/6/release-notes/topics/rg\_cdh\_6\_download.html

（1）2008年成立的Cloudera是最早将Hadoop商用的公司，为合作伙伴提供Hadoop的商用解决方案，主要是包括支持、咨询服务、培训。

（2）2009年Hadoop的创始人Doug Cutting也加盟Cloudera公司。Cloudera产品主要为CDH，Cloudera Manager，Cloudera Support

（3）CDH是Cloudera的Hadoop发行版，完全开源，比Apache Hadoop在兼容性，安全性，稳定性上有所增强。Cloudera的标价为每年每个节点10000美元。

（4）Cloudera Manager是集群的软件分发及管理监控平台，可以在几个小时内部署好一个Hadoop集群，并对集群的节点及服务进行实时监控。

3）Hortonworks Hadoop

官网地址：https://hortonworks.com/products/data-center/hdp/

下载地址：https://hortonworks.com/downloads/#data-platform

（1）2011年成立的Hortonworks是雅虎与硅谷风投公司Benchmark Capital合资组建。

（2）公司成立之初就吸纳了大约25名至30名专门研究Hadoop的雅虎工程师，上述工程师均在2005年开始协助雅虎开发Hadoop，贡献了Hadoop80%的代码。

（3）Hortonworks的主打产品是Hortonworks Data Platform（HDP），也同样是100%开源的产品，HDP除常见的项目外还包括了Ambari，一款开源的安装和管理系统。

（4）2018年Hortonworks目前已经被Cloudera公司收购。

##  1.4 Hadoop优势（4高）

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004438.png)

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004503.png)

##  1.5 Hadoop组成（面试重点）

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004554.png)

###  1.5.1 HDFS架构概述

Hadoop Distributed File System，简称HDFS，是一个分布式文件系统。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004648.png)

###  1.5.2 YARN架构概述

Yet Another Resource Negotiator简称YARN ，另一种资源协调者，是Hadoop的资源管理器。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004719.png)

###  1.5.3 MapReduce架构概述

MapReduce将计算过程分为两个阶段：Map和Reduce

1）Map阶段并行处理输入数据

2）Reduce阶段对Map结果进行汇总

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004758.png)

###  1.5.4 HDFS、YARN、MapReduce三者关系

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004830.png)

##  1.6 大数据技术生态体系

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004907.png)

图中涉及的技术名词解释如下：

1）Sqoop：Sqoop是一款开源的工具，主要用于在Hadoop、Hive与传统的数据库（MySQL）间进行数据的传递，可以将一个关系型数据库（例如 ：MySQL，Oracle 等）中的数据导进到Hadoop的HDFS中，也可以将HDFS的数据导进到关系型数据库中。

2）Flume：Flume是一个高可用的，高可靠的，分布式的海量日志采集、聚合和传输的系统，Flume支持在日志系统中定制各类数据发送方，用于收集数据；

3）Kafka：Kafka是一种高吞吐量的分布式发布订阅消息系统；

4）Spark：Spark是当前最流行的开源大数据内存计算框架。可以基于Hadoop上存储的大数据进行计算。

5）Flink：Flink是当前最流行的开源大数据内存计算框架。用于实时计算的场景较多。

6）Oozie：Oozie是一个管理Hadoop作业（job）的工作流程调度管理系统。

7）Hbase：HBase是一个分布式的、面向列的开源数据库。HBase不同于一般的关系数据库，它是一个适合于非结构化数据存储的数据库。

8）Hive：Hive是基于Hadoop的一个数据仓库工具，可以将结构化的数据文件映射为一张数据库表，并提供简单的SQL查询功能，可以将SQL语句转换为MapReduce任务进行运行。其优点是学习成本低，可以通过类SQL语句快速实现简单的MapReduce统计，不必开发专门的MapReduce应用，十分适合数据仓库的统计分析。

9）ZooKeeper：它是一个针对大型分布式系统的可靠协调系统，提供的功能包括：配置维护、名字服务、分布式同步、组服务等。

##  1.7 推荐系统框架图

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119004944.png)
