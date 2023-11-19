---
title: 09_Docker安装MySQL
date: 2023-10-24 08:54:56
---

## Docker 安装 Mysql

以安装 Mysql 5.7为例：

```Shell
docker pull mysql:5.7
```

## Mysql 单机

### 简单版 Mysql 5.7 安装

简单的启动Mysql容器：

```Shell
# 需要使用 -e 配置环境变量 MYSQL_ROOT_PASSWORD（mysql root用户的密码）
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```

简单版的Mysql会存在以下问题：

- 中文乱码
- 没有容器卷映射

启动docker容器后，可以正常的连接、创建数据库，创建表，插入数据。但是插入中文则会报错。

例如：

```Shell
-- 创建db01数据库
create database db01;
-- 切换到db01;
use db01;
-- 创建表
create table t1(id int, name varchar(20));

-- 插入英文可以正常插入
insert into t1 values(1, 'abc');

-- 插入中文报错
insert into t1 values(2, '张三');
```

这是因为docker默认的字符集的问题，可以在mysql中使用以下命令查看数据库字符集：

```Shell
show variables like 'character%';
```

返回的字符集中，character_set_database、character_set_server等都为latin1字符集，所以会报错。

而且因为启动容器时没有配置容器卷映射，当容器意外被删时，数据无法找回。

```shell
docker ps
docker exec -it xxx /bin/bash
mysql -uroot -p
```

### 实际应用版 Mysql 5.7安装

启动 Mysql 容器，并配置容器卷映射：

```Shell
docker run -d -p 3306:3306 \
           --privileged=true \
           -v /app/mysql/log:/var/log/mysql \
           -v /app/mysql/data:/var/lib/mysql \
           -v /app/mysql/conf:/etc/mysql/conf.d \
           -e MYSQL_ROOT_PASSWORD=root \
           --name mysql \
           mysql:5.7
```

在/app/mysql/conf下新建 my.cnf，通过容器卷同步给mysql实例，解决中文乱码问题：

```Shell
[client]
default_character_set=utf8
[mysqld]
collation_server = utf8_general_ci
character_set_server = utf8
```

重启mysql容器，使得容器重新加载配置文件：

```Shell
docker restart mysql
```

此时便解决了中文乱码（中文插入报错）问题。

而且因为启动时将容器做了容器卷映射，将mysql的配置（映射到/app/mysql/conf）、数据（映射到/app/mysql/data）、日志（映射到/app/mysql/log）都映射到了宿主机实际目录，所以即使删除了容器，也不会产生太大影响。只需要再执行一下启动Mysql容器命令，容器卷还按相同位置进行映射，所有的数据便都可以正常恢复。

## Mysql 主从复制安装

安装主服务器容器实例（端口号3307）：

1. 启动容器实例

```Shell
docker run -p 3307:3306 \
           --name mysql-master \
           --privileged=true \
           -v /app/mysql-master/log:/var/log/mysql \
           -v /app/mysql-master/data:/var/lib/mysql \
           -v /app/mysql-master/conf:/etc/mysql \
           -e MYSQL_ROOT_PASSWORD=root \
           -d mysql:5.7
```

2. 进入/app/mysql-master/conf，新建my.cnf配置文件：

```Shell
[mysqld]
## 设置server_id, 同一个局域网中需要唯一
server_id=101
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql
## 开启二进制日志功能
log-bin=mall-mysql-bin
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed
## 二进制日志过期清理时间。默认值为0，表示不自动清理
expire_logs_days=7
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断
## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
slave_skip_errors=1062
```

3. 重启容器实例

```Shell
docker restart mysql-master
```

4. 进入容器实例内

```Shell
docker exec -it mysql-master /bin/bash
```

5. 登录mysql，创建数据同步用户

```Shell
-- 首先使用 mysql -uroot -p 登录mysql
-- 创建数据同步用户
create user 'slave'@'%' identified by '123456';
-- 授权
grant replication slave, replication client on *.* to 'slave'@'%';
flush privileges;
```

安装从服务器容器实例（端口号3308）：

1. 启动容器服务：

```Shell
docker run -p 3308:3306 \
           --name mysql-slave \
           --privileged=true \
           -v /app/mysql-slave/log:/var/log/mysql \
           -v /app/mysql-slave/data:/var/lib/mysql \
           -v /app/mysql-slave/conf:/etc/mysql \
           -e MYSQL_ROOT_PASSWORD=root \
           -d mysql:5.7
```

2. 进入/app/mysql-slave/conf目录，创建my.cnf配置文件：

```Shell
[mysqld]
## 设置server_id, 同一个局域网内需要唯一
server_id=102
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql
## 开启二进制日志功能，以备slave作为其它数据库实例的Master时使用
log-bin=mall-mysql-slave1-bin
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed
## 二进制日志过期清理时间。默认值为0，表示不自动清理
expire_logs_days=7
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断
## 如：1062错误是指一些主键重复，1032是因为主从数据库数据不一致
slave_skip_errors=1062
## relay_log配置中继日志
relay_log=mall-mysql-relay-bin
## log_slave_updates表示slave将复制事件写进自己的二进制日志
log_slave_updates=1
## slave设置只读（具有super权限的用户除外）
read_only=1
```

3. 修改完配置需要重启slave容器实例

```Shell
docker restart mysql-slave
```

在主数据库中查看主从同步状态：

1. 进入主数据库容器：

```Shell
docker exec -it mysql-master /bin/bash
```

2. 进入Mysql

```Shell
mysql -uroot -p
```

3. 查看主从同步状态

```Shell
show master status;
```

主要查看返回结果的文件名File、当前位置Position

进入从数据库容器，配置主从复制：

1. 进入从数据库容器：

```Shell
docker exec -it mysql-slave /bin/bash
```

2. 进入数据库

```Shell
mysql -uroot -p
```

3. 配置从数据库所属的主数据库：

```Shell
-- 格式：
-- change master to master_host='宿主机ip',master_user='主数据库配置的主从复制用户名',master_password='主数据库配置的主从复制用户密码',master_port=宿主机主数据库端口,master_log_file='主数据库主从同步状态的文件名File',master_log_pos=主数据库主从同步状态的Position,master_connect_retry=连接失败重试时间间隔（秒）;

change master to master_host='192.168.xxx.xxx',master_user='slave',master_password='123456',master_port=3307,master_log_file='mall-mysql-bin.000001',master_log_pos=769,master_connect_retry=30;
```

4.  查看主从同步状态：

```Shell
# \G 可以将横向的结果集表格转换成纵向展示。
# slave status的字段比较多，纵向展示比友好
show slave status \G;
```

除了展示刚刚配置的主数据库信息外，主要关注 Slave_IO_Running、Slave_SQL_Running。目前两个值应该都为 No，表示还没有开始。

5.  开启主从同步：

```Shell
start slave;
```

6.  再次查看主从同步状态，Slave_IO_Running、Slave_SQL_Running都变为Yes。

主从复制测试：

1. 在主数据库上新建库、使用库、新建表、插入数据

```Shell
create database db01;
use db01;
create table t1 (id int, name varchar(20));
insert into t1 values (1, 'abc');
```

2. 在从数据库上使用库、查看记录

```Shell
show databases;
use db01;
select * from t1;
```
