---
title: 03_Hadoop运行模式
date: 2023-11-20 00:00:20
---

1）Hadoop官方网站：<http://hadoop.apache.org/>

2）Hadoop运行模式包括：本地模式、伪分布式模式以及完全分布式模式。

- 本地模式：单机运行，只是用来演示一下官方案例。生产环境不用。
- 伪分布式模式：也是单机运行，但是具备Hadoop集群的所有功能，一台服务器模拟一个分布式的环境。个别缺钱的公司用来测试，生产环境不用。
- 完全分布式模式：多台服务器组成分布式环境。生产环境使用。

##  3.1 本地运行模式（官方WordCount）

1）创建在hadoop-3.1.3文件下面创建一个wcinput文件夹

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ mkdir wcinput
```

2）在wcinput文件下创建一个word.txt文件

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ cd wcinput
```

3）编辑word.txt文件

```shell
[atguigu@hadoop102 wcinput]$ vim word.txt
```

- 在文件中输入如下内容

```shell
hadoop yarn
hadoop mapreduce
atguigu
atguigu
```

- 保存退出：`:wq`

4）回到Hadoop目录/opt/module/hadoop-3.1.3

5）执行程序

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount wcinput wcoutput
```

6）查看结果

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ cat wcoutput/part-r-00000
```

看到如下结果：

```shell
atguigu 2
hadoop  2
mapreduce       1
yarn    1
```

##  3.2 完全分布式运行模式（开发重点）

分析：

1）准备3台客户机（关闭防火墙、静态IP、主机名称）

2）安装JDK

3）配置环境变量

4）安装Hadoop

5）配置环境变量

6）配置集群

7）单点启动

8）配置ssh

9）群起并测试集群

###  3.2.1 虚拟机准备

详见2.1、2.2两节。

###  3.2.2 编写集群分发脚本xsync

1）scp（secure copy）安全拷贝

（1）scp定义

scp可以实现服务器与服务器之间的数据拷贝。（from server1 to server2）

（2）基本语法

```shell
scp -r $pdir/$fname $user@$host:$pdir/$fname
```

命令   递归     要拷贝的文件路径/名称   目的地用户@主机:目的地路径/名称

（3）案例实操

- 前提：在hadoop102、hadoop103、hadoop104都已经创建好的/opt/module、           /opt/software两个目录，并且已经把这两个目录修改为atguigu:atguigu

```shell
[atguigu@hadoop102 ~]$ sudo chown atguigu:atguigu -R /opt/module
```

（a）在hadoop102上，将hadoop102中/opt/module/jdk1.8.0\_212目录拷贝到hadoop103上。

```shell
[atguigu@hadoop102 ~]$ scp -r /opt/module/jdk1.8.0\_212  atguigu@hadoop103:/opt/module
```

（b）在hadoop103上，将hadoop102中/opt/module/hadoop-3.1.3目录拷贝到hadoop103上。

```shell
[atguigu@hadoop103 ~]$ scp -r atguigu@hadoop102:/opt/module/hadoop-3.1.3 /opt/module/
```

（c）在hadoop103上操作，将hadoop102中/opt/module目录下所有目录拷贝到hadoop104上。

```shell
[atguigu@hadoop103 opt]$ scp -r atguigu@hadoop102:/opt/module/\* atguigu@hadoop104:/opt/module
```

2）rsync远程同步工具

rsync主要用于备份和镜像。具有速度快、避免复制相同内容和支持符号链接的优点。

rsync和scp区别：用rsync做文件的复制要比scp的速度快，rsync只对差异文件做更新。scp是把所有文件都复制过去。

（1）基本语法

```shell
rsync -av $pdir/$fname $user@$host:$pdir/$fname
```

命令   选项参数   要拷贝的文件路径/名称   目的地用户@主机:目的地路径/名称

选项参数说明

|选项|功能|
| - | - |
|-a|归档拷贝|
|-v|显示复制过程|

（2）案例实操

（a）删除hadoop103中/opt/module/hadoop-3.1.3/wcinput

```shell
[atguigu@hadoop103 hadoop-3.1.3]$ rm -rf wcinput/
```

（b）同步hadoop102中的/opt/module/hadoop-3.1.3到hadoop103

```shell
[atguigu@hadoop102 module]$ rsync -av hadoop-3.1.3/ atguigu@hadoop103:/opt/module/hadoop-3.1.3/
```

3）xsync集群分发脚本

（1）需求：循环复制文件到所有节点的相同目录下

（2）需求分析：

（a）rsync命令原始拷贝：

```shell
rsync  -av     /opt/module  		 atguigu@hadoop103:/opt/
```

（b）期望脚本：

xsync要同步的文件名称

（c）期望脚本在任何路径都能使用（脚本放在声明了全局环境变量的路径）

```shell
[atguigu@hadoop102 ~]$ echo $PATH
/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/home/atguigu/.local/bin:/home/atguigu/bin:/opt/module/jdk1.8.0\_212/bin
```

（3）脚本实现

（a）在/home/atguigu/bin目录下创建xsync文件

```shell
[atguigu@hadoop102 opt]$ cd /home/atguigu
[atguigu@hadoop102 ~]$ mkdir bin
[atguigu@hadoop102 ~]$ cd bin
[atguigu@hadoop102 bin]$ vim xsync
```

在该文件中编写如下代码

```shell
#!/bin/bash
#1. 判断参数个数
if [ $# -lt 1 ]
then
    echo Not Enough Arguement!
    exit;
fi

#2. 遍历集群所有机器
for host in hadoop102 hadoop103 hadoop104
do
    echo ====================  $host  ====================
    #3. 遍历所有目录，挨个发送
    for file in $@
    do
        #4. 判断文件是否存在
        if [ -e $file ]
            then
                #5. 获取父目录
                pdir=$(cd -P $(dirname $file); pwd)
                
                #6. 获取当前文件的名称
                fname=$(basename $file)
                ssh $host "mkdir -p $pdir"
                rsync -av $pdir/$fname $host:$pdir
            else
                echo $file does not exists!
        fi
    done
done
```

（b）修改脚本 xsync 具有执行权限

```shell
[atguigu@hadoop102 bin]$ chmod +x xsync
// 例如：
[atguigu@hadoop102 bin]$ chmod 777 xsync
```

（c）测试脚本

```shell
[atguigu@hadoop102 ~]$ xsync /home/atguigu/bin
```

（d）将脚本复制到/bin中，以便全局调用

```shell
[atguigu@hadoop102 bin]$ sudo cp xsync /bin/
```

（e）同步环境变量配置（root所有者）

```shell
[atguigu@hadoop102 ~]$ sudo ./bin/xsync /etc/profile.d/my\_env.sh
```

注意：如果用了sudo，那么xsync一定要给它的路径补全。

让环境变量生效

```shell
[atguigu@hadoop103 bin]$ source /etc/profile
[atguigu@hadoop104 opt]$ source /etc/profile
```

###  3.2.3 SSH无密登录配置

1）配置ssh

（1）基本语法

ssh另一台电脑的IP地址

（2）ssh连接时出现Host key verification failed的解决方法

[atguigu@hadoop102 ~]$ ssh hadoop103

- 如果出现如下内容

```shell
Are you sure you want to continue connecting (yes/no)? 
```

- 输入yes，并回车

（3）退回到hadoop102

```shell
[atguigu@hadoop103 ~]$ exit
```

2）无密钥配置

（1）免密登录原理

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119015900.png)

（2）生成公钥和私钥

```shell
[atguigu@hadoop102 .ssh]$ pwd
/home/atguigu/.ssh
[atguigu@hadoop102 .ssh]$ ssh-keygen -t rsa
```

然后敲（三个回车），就会生成两个文件id\_rsa（私钥）、id\_rsa.pub（公钥）

（3）将公钥拷贝到要免密登录的目标机器上

```shell
[atguigu@hadoop102 .ssh]$ ssh-copy-id hadoop102
[atguigu@hadoop102 .ssh]$ ssh-copy-id hadoop103
[atguigu@hadoop102 .ssh]$ ssh-copy-id hadoop104
```

注意：

还需要在hadoop103上采用atguigu账号配置一下无密登录到hadoop102、hadoop103、hadoop104服务器上。

还需要在hadoop104上采用atguigu账号配置一下无密登录到hadoop102、hadoop103、hadoop104服务器上。

还需要在hadoop102上采用root账号，配置一下无密登录到hadoop102、hadoop103、hadoop104；

3）.ssh文件夹下（~/.ssh）的文件功能解释

|known\_hosts|记录ssh访问过计算机的公钥（public key）|
| - | - |
|id\_rsa|生成的私钥|
|id\_rsa.pub|生成的公钥|
|authorized\_keys|存放授权过的无密登录服务器公钥|

###  3.2.4 集群配置

1）集群部署规划

注意：

- NameNode和SecondaryNameNode不要安装在同一台服务器
- ResourceManager也很消耗内存，不要和NameNode、SecondaryNameNode配置在同一台机器上。

||hadoop102 |hadoop103|hadoop104|
| - | - | - | - |
|HDFS|NameNode<br />DataNode|DataNode|SecondaryNameNode<br />DataNode|
|YARN|NodeManager|ResourceManager<br />NodeManager|NodeManager|

2）配置文件说明

Hadoop配置文件分两类：默认配置文件和自定义配置文件，只有用户想修改某一默认配置值时，才需要修改自定义配置文件，更改相应属性值。

（1）默认配置文件：

|要获取的默认文件|文件存放在Hadoop的jar包中的位置|
| - | - |
|[core-default.xml]|hadoop-common-3.1.3.jar/core-default.xml|
|[hdfs-default.xml]|hadoop-hdfs-3.1.3.jar/hdfs-default.xml|
|[yarn-default.xml]|hadoop-yarn-common-3.1.3.jar/yarn-default.xml|
|[mapred-default.xml]|hadoop-mapreduce-client-core-3.1.3.jar/mapred-default.xml|

（2）自定义配置文件：

core-site.xml、hdfs-site.xml、yarn-site.xml、mapred-site.xml四个配置文件存放在$HADOOP\_HOME/etc/hadoop这个路径上，用户可以根据项目需求重新进行修改配置。

3）配置集群

（1）核心配置文件

配置core-site.xml

```shell
[atguigu@hadoop102 ~]$ cd $HADOOP\_HOME/etc/hadoop
[atguigu@hadoop102 hadoop]$ vim core-site.xml
```shell

文件内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <!-- 指定NameNode的地址 -->
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://hadoop102:8020</value>
    </property>
    <!-- 指定hadoop数据的存储目录 -->
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/opt/module/hadoop-3.1.3/data</value>
    </property>
    <!-- 配置HDFS网页登录使用的静态用户为atguigu -->
    <property>
        <name>hadoop.http.staticuser.user</name>
        <value>atguigu</value>
    </property>
</configuration>
```

（2）HDFS配置文件

配置hdfs-site.xml

```shell
[atguigu@hadoop102 hadoop]$ vim hdfs-site.xml
```

文件内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <!-- nn web端访问地址-->
    <property>
        <name>dfs.namenode.http-address</name>
        <value>hadoop102:9870</value>
    </property>
    <!-- 2nn web端访问地址-->
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>hadoop104:9868</value>
    </property>
</configuration>
```

（3）YARN配置文件

配置yarn-site.xml

```shell
[atguigu@hadoop102 hadoop]$ vim yarn-site.xml
```

文件内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <!-- 指定MR走shuffle -->
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce\_shuffle</value>
    </property>
    <!-- 指定ResourceManager的地址-->
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>hadoop103</value>
    </property>
    <!-- 环境变量的继承 -->
    <property>
        <name>yarn.nodemanager.env-whitelist</name>
        <value>JAVA\_HOME,HADOOP\_COMMON\_HOME,HADOOP\_HDFS\_HOME,HADOOP\_CONF\_DIR,CLASSPATH\_PREPEND\_DISTCACHE,HADOOP\_YARN\_HOME,HADOOP\_MAPRED\_HOME</value>
    </property>
</configuration>
```

（4）MapReduce配置文件

配置mapred-site.xml

```shell
[atguigu@hadoop102 hadoop]$ vim mapred-site.xml
```

文件内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <!-- 指定MapReduce程序运行在Yarn上 -->
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>
```

4）在集群上分发配置好的Hadoop配置文件

```shell
[atguigu@hadoop102 hadoop]$ xsync /opt/module/hadoop-3.1.3/etc/hadoop/
```

5）去103和104上查看文件分发情况

```shell
[atguigu@hadoop103 ~]$ cat /opt/module/hadoop-3.1.3/etc/hadoop/core-site.xml
[atguigu@hadoop104 ~]$ cat /opt/module/hadoop-3.1.3/etc/hadoop/core-site.xml
```

###  3.2.5 群起集群

1）配置workers

```shell
[atguigu@hadoop102 hadoop]$ vim /opt/module/hadoop-3.1.3/etc/hadoop/workers
```

在该文件中增加如下内容：

```shell
hadoop102
hadoop103
hadoop104
```

注意：该文件中添加的内容结尾不允许有空格，文件中不允许有空行。

同步所有节点配置文件

```shell
[atguigu@hadoop102 hadoop]$ xsync /opt/module/hadoop-3.1.3/etc
```

2）启动集群

（1）如果集群是第一次启动，需要在hadoop102节点格式化NameNode（注意：格式化NameNode，会产生新的集群id，导致NameNode和DataNode的集群id不一致，集群找不到已往数据。如果集群在运行过程中报错，需要重新格式化NameNode的话，一定要先停止namenode和datanode进程，并且要删除所有机器的data和logs目录，然后再进行格式化。）

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ hdfs namenode -format
```

（2）启动HDFS

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ sbin/start-dfs.sh
```

（3）在配置了ResourceManager的节点（hadoop103）启动YARN

```shell
[atguigu@hadoop103 hadoop-3.1.3]$ sbin/start-yarn.sh
```

（4）Web端查看HDFS的NameNode

（a）浏览器中输入：[http://hadoop102:9870]()

（b）查看HDFS上存储的数据信息

（5）Web端查看YARN的ResourceManager

（a）浏览器中输入：<http://hadoop103:8088>

（b）查看YARN上运行的Job信息

3）集群基本测试

（1）上传文件到集群

- 上传小文件

```shell
[atguigu@hadoop102 ~]$ hadoop fs -mkdir /input
[atguigu@hadoop102 ~]$ hadoop fs -put $HADOOP\_HOME/wcinput/word.txt /input
```

- 上传大文件

```shell
[atguigu@hadoop102 ~]$ hadoop fs -put  /opt/software/jdk-8u212-linux-x64.tar.gz  /
```

（2）上传文件后查看文件存放在什么位置

- 查看HDFS文件存储路径

```shell
[atguigu@hadoop102 subdir0]$ pwd
/opt/module/hadoop-3.1.3/data/dfs/data/current/BP-1436128598-192.168.10.102-1610603650062/current/finalized/subdir0/subdir0
```

- 查看HDFS在磁盘存储文件内容

```shell
[atguigu@hadoop102 subdir0]$ cat blk\_1073741825
hadoop yarn
hadoop mapreduce 
atguigu
atguigu
```

（3）拼接

```shell
-rw-rw-r--. 1 atguigu atguigu 134217728 5月  23 16:01 blk\_1073741836
-rw-rw-r--. 1 atguigu atguigu   1048583 5月  23 16:01 blk\_1073741836\_1012.meta
-rw-rw-r--. 1 atguigu atguigu  63439959 5月  23 16:01 blk\_1073741837
-rw-rw-r--. 1 atguigu atguigu    495635 5月  23 16:01 blk\_1073741837\_1013.meta
[atguigu@hadoop102 subdir0]$ cat blk\_1073741836>>tmp.tar.gz
[atguigu@hadoop102 subdir0]$ cat blk\_1073741837>>tmp.tar.gz
[atguigu@hadoop102 subdir0]$ tar -zxvf tmp.tar.gz
```

（4）下载

```shell
[atguigu@hadoop104 software]$ hadoop fs -get /jdk-8u212-linux-x64.tar.gz ./
```

（5）执行wordcount程序

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount /input /output
```

###  3.2.6 配置历史服务器

为了查看程序的历史运行情况，需要配置一下历史服务器。具体配置步骤如下：

1）配置mapred-site.xml

```shell
[atguigu@hadoop102 hadoop]$ vim mapred-site.xml
```

在该文件里面增加如下配置。

```xml
<!-- 历史服务器端地址 -->
<property>
    <name>mapreduce.jobhistory.address</name>
    <value>hadoop102:10020</value>
</property>
<!-- 历史服务器web端地址 -->
<property>
    <name>mapreduce.jobhistory.webapp.address</name>
    <value>hadoop102:19888</value>
</property>
```

2）分发配置

```shell
[atguigu@hadoop102 hadoop]$ xsync $HADOOP\_HOME/etc/hadoop/mapred-site.xml
```

3）在hadoop102启动历史服务器

```shell
[atguigu@hadoop102 hadoop]$ mapred --daemon start historyserver
```

4）查看历史服务器是否启动

```shell
[atguigu@hadoop102 hadoop]$ jps
```

5）查看JobHistory

[http://hadoop102:19888/jobhistory]()

###  3.2.7 配置日志的聚集

日志聚集概念：应用运行完成以后，将程序运行日志信息上传到HDFS系统上。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119015931.png)

日志聚集功能好处：可以方便的查看到程序运行详情，方便开发调试。

注意：开启日志聚集功能，需要重新启动NodeManager 、ResourceManager和HistoryServer。

开启日志聚集功能具体步骤如下：

1）配置yarn-site.xml

```shell
[atguigu@hadoop102 hadoop]$ vim yarn-site.xml
```
在该文件里面增加如下配置。

```xml
<!-- 开启日志聚集功能 -->
<property>
    <name>yarn.log-aggregation-enable</name>
    <value>true</value>
</property>
<!-- 设置日志聚集服务器地址 -->
<property>  
    <name>yarn.log.server.url</name>  
    <value>http://hadoop102:19888/jobhistory/logs</value>
</property>
<!-- 设置日志保留时间为7天 -->
<property>
    <name>yarn.log-aggregation.retain-seconds</name>
    <value>604800</value>
</property>
```

2）分发配置

```shell
[atguigu@hadoop102 hadoop]$ xsync $HADOOP\_HOME/etc/hadoop/yarn-site.xml
```

3）关闭NodeManager 、ResourceManager和HistoryServer

```shell
[atguigu@hadoop103 hadoop-3.1.3]$ sbin/stop-yarn.sh
[atguigu@hadoop103 hadoop-3.1.3]$ mapred --daemon stop historyserver
```

4）启动NodeManager 、ResourceManage和HistoryServer

```shell
[atguigu@hadoop103 ~]$ start-yarn.sh
[atguigu@hadoop102 ~]$ mapred --daemon start historyserver
```

5）删除HDFS上已经存在的输出文件

```shell
[atguigu@hadoop102 ~]$ hadoop fs -rm -r /output
```

6）执行WordCount程序

```shell
[atguigu@hadoop102 hadoop-3.1.3]$ hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount /input /output
```

7）查看日志

（1）历史服务器地址

<http://hadoop102:19888/jobhistory>

（2）历史任务列表

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119020002.png)

（3）查看任务运行日志

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119020014.png)

（4）运行日志详情

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119020035.png)

###  3.2.8 集群启动/停止方式总结

1）各个模块分开启动/停止（配置ssh是前提）常用

（1）整体启动/停止HDFS

```shell
start-dfs.sh/stop-dfs.sh
```

（2）整体启动/停止YARN

```shell
start-yarn.sh/stop-yarn.sh
```

2）各个服务组件逐一启动/停止

（1）分别启动/停止HDFS组件

```shell
hdfs --daemon start/stop namenode/datanode/secondarynamenode
```

（2）启动/停止YARN

```shell
yarn --daemon start/stop  resourcemanager/nodemanager
```

###  3.2.9 编写Hadoop集群常用脚本

1）Hadoop集群启停脚本（包含HDFS，Yarn，Historyserver）：myhadoop.sh

```shell
[atguigu@hadoop102 ~]$ cd /home/atguigu/bin
[atguigu@hadoop102 bin]$ vim myhadoop.sh
```

- 输入如下内容

```shell
#!/bin/bash
if [ $# -lt 1 ]
then
    echo "No Args Input..."
    exit ;
fi
case $1 in
"start")
    echo "=================== 启动 hadoop集群 ==================="
    echo "--------------- 启动 hdfs ---------------"
    ssh hadoop102 "/opt/module/hadoop-3.1.3/sbin/start-dfs.sh"
    echo "--------------- 启动 yarn ---------------"
    ssh hadoop103 "/opt/module/hadoop-3.1.3/sbin/start-yarn.sh"
    echo "--------------- 启动 historyserver ---------------"
    ssh hadoop102 "/opt/module/hadoop-3.1.3/bin/mapred --daemon start historyserver"
;;
"stop")
    echo "=================== 关闭 hadoop集群 ==================="
    echo "--------------- 关闭 historyserver ---------------"
    ssh hadoop102 "/opt/module/hadoop-3.1.3/bin/mapred --daemon stop historyserver"
    echo "--------------- 关闭 yarn ---------------"
    ssh hadoop103 "/opt/module/hadoop-3.1.3/sbin/stop-yarn.sh"
    echo "--------------- 关闭 hdfs ---------------"
    ssh hadoop102 "/opt/module/hadoop-3.1.3/sbin/stop-dfs.sh"
;;
\*)
    echo "Input Args Error..."
;;
esac
```

- 保存后退出，然后赋予脚本执行权限

```shell
[atguigu@hadoop102 bin]$ chmod +x myhadoop.sh
```

2）查看三台服务器Java进程脚本：jpsall

```shell
[atguigu@hadoop102 ~]$ cd /home/atguigu/bin
[atguigu@hadoop102 bin]$ vim jpsall
```

- 输入如下内容

```shell
#!/bin/bash
for host in hadoop102 hadoop103 hadoop104
do
    echo =============== $host ===============
    ssh $host jps 
done
```

- 保存后退出，然后赋予脚本执行权限

```shell
[atguigu@hadoop102 bin]$ chmod +x jpsall
```

3）分发/home/atguigu/bin目录，保证自定义脚本在三台机器上都可以使用

```shell
[atguigu@hadoop102 ~]$ xsync /home/atguigu/bin/
```

###  3.2.10 常用端口号说明

|端口名称|Hadoop2.x|Hadoop3.x|
| - | - | - |
|NameNode内部通信端口|8020 / 9000|8020 / 9000/9820|
|NameNode HTTP UI|50070|9870|
|MapReduce查看执行任务端口|8088|8088|
|历史服务器通信端口|19888|19888|

###  3.2.11 集群时间同步

如果服务器在公网环境（能连接外网），可以不采用集群时间同步，因为服务器会定期和公网时间进行校准；

如果服务器在内网环境，必须要配置集群时间同步，否则时间久了，会产生时间偏差，导致集群执行任务时间不同步。

1）需求

找一个机器，作为时间服务器，所有的机器与这台集群时间进行定时的同步，生产环境根据任务对时间的准确程度要求周期同步。测试环境为了尽快看到效果，采用1分钟同步一次。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119020126.png)

2）时间服务器配置（必须root用户）

（1）查看所有节点ntpd服务状态和开机自启动状态

```shell
[atguigu@hadoop102 ~]$ sudo systemctl status ntpd
[atguigu@hadoop102 ~]$ sudo systemctl start ntpd
[atguigu@hadoop102 ~]$ sudo systemctl is-enabled ntpd
```

（2）修改hadoop102的ntp.conf配置文件

```shell
[atguigu@hadoop102 ~]$ sudo vim /etc/ntp.conf
```

修改内容如下

（a）修改1（授权192.168.10.0-192.168.10.255网段上的所有机器可以从这台机器上查询和同步时间）

```shell
#restrict 192.168.10.0 mask 255.255.255.0 nomodify notrap
```

为

```shell
restrict 192.168.10.0 mask 255.255.255.0 nomodify notrap
```

（b）修改2（集群在局域网中，不使用其他互联网上的时间）

```shell
server 0.centos.pool.ntp.org iburst
server 1.centos.pool.ntp.org iburst
server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst
```

为

```shell
#server 0.centos.pool.ntp.org iburst
#server 1.centos.pool.ntp.org iburst
#server 2.centos.pool.ntp.org iburst
#server 3.centos.pool.ntp.org iburst
```

（c）添加3（当该节点丢失网络连接，依然可以采用本地时间作为时间服务器为集群中的其他节点提供时间同步）

```shell
server 127.127.1.0
fudge 127.127.1.0 stratum 10
```

（3）修改hadoop102的/etc/sysconfig/ntpd 文件

```shell
[atguigu@hadoop102 ~]$ sudo vim /etc/sysconfig/ntpd
```

增加内容如下（让硬件时间与系统时间一起同步）

```shell
SYNC\_HWCLOCK=yes
```

（4）重新启动ntpd服务

```shell
[atguigu@hadoop102 ~]$ sudo systemctl start ntpd
```

（5）设置ntpd服务开机启动

```shell
[atguigu@hadoop102 ~]$ sudo systemctl enable ntpd
```

3）其他机器配置（必须root用户）

（1）关闭所有节点上ntp服务和自启动

```shell
[atguigu@hadoop103 ~]$ sudo systemctl stop ntpd
[atguigu@hadoop103 ~]$ sudo systemctl disable ntpd
[atguigu@hadoop104 ~]$ sudo systemctl stop ntpd
[atguigu@hadoop104 ~]$ sudo systemctl disable ntpd
```

（2）在其他机器配置1分钟与时间服务器同步一次

```shell
[atguigu@hadoop103 ~]$ sudo crontab -e
```

编写定时任务如下：

```shell
*/1 * * * * /usr/sbin/ntpdate hadoop102
```

（3）修改任意机器时间

```shell
[atguigu@hadoop103 ~]$ sudo date -s "2021-9-11 11:11:11"
```

（4）1分钟后查看机器是否与时间服务器同步

```shell
[atguigu@hadoop103 ~]$ sudo date
```
