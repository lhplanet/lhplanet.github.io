import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as i,a as s}from"./app-9a860c23.js";const a={},n=s(`<h2 id="docker-安装-mysql" tabindex="-1"><a class="header-anchor" href="#docker-安装-mysql" aria-hidden="true">#</a> Docker 安装 Mysql</h2><p>以安装 Mysql 5.7为例：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker pull mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mysql-单机" tabindex="-1"><a class="header-anchor" href="#mysql-单机" aria-hidden="true">#</a> Mysql 单机</h2><h3 id="简单版-mysql-5-7-安装" tabindex="-1"><a class="header-anchor" href="#简单版-mysql-5-7-安装" aria-hidden="true">#</a> 简单版 Mysql 5.7 安装</h3><p>简单的启动Mysql容器：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 需要使用 -e 配置环境变量 MYSQL_ROOT_PASSWORD（mysql root用户的密码）
docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简单版的Mysql会存在以下问题：</p><ul><li>中文乱码</li><li>没有容器卷映射</li></ul><p>启动docker容器后，可以正常的连接、创建数据库，创建表，插入数据。但是插入中文则会报错。</p><p>例如：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>-- 创建db01数据库
create database db01;
-- 切换到db01;
use db01;
-- 创建表
create table t1(id int, name varchar(20));

-- 插入英文可以正常插入
insert into t1 values(1, &#39;abc&#39;);

-- 插入中文报错
insert into t1 values(2, &#39;张三&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为docker默认的字符集的问题，可以在mysql中使用以下命令查看数据库字符集：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>show variables like &#39;character%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回的字符集中，character_set_database、character_set_server等都为latin1字符集，所以会报错。</p><p>而且因为启动容器时没有配置容器卷映射，当容器意外被删时，数据无法找回。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> xxx /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实际应用版-mysql-5-7安装" tabindex="-1"><a class="header-anchor" href="#实际应用版-mysql-5-7安装" aria-hidden="true">#</a> 实际应用版 Mysql 5.7安装</h3><p>启动 Mysql 容器，并配置容器卷映射：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker run -d -p 3306:3306 \\
           --privileged=true \\
           -v /app/mysql/log:/var/log/mysql \\
           -v /app/mysql/data:/var/lib/mysql \\
           -v /app/mysql/conf:/etc/mysql/conf.d \\
           -e MYSQL_ROOT_PASSWORD=root \\
           --name mysql \\
           mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在/app/mysql/conf下新建 my.cnf，通过容器卷同步给mysql实例，解决中文乱码问题：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>[client]
default_character_set=utf8
[mysqld]
collation_server = utf8_general_ci
character_set_server = utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启mysql容器，使得容器重新加载配置文件：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时便解决了中文乱码（中文插入报错）问题。</p><p>而且因为启动时将容器做了容器卷映射，将mysql的配置（映射到/app/mysql/conf）、数据（映射到/app/mysql/data）、日志（映射到/app/mysql/log）都映射到了宿主机实际目录，所以即使删除了容器，也不会产生太大影响。只需要再执行一下启动Mysql容器命令，容器卷还按相同位置进行映射，所有的数据便都可以正常恢复。</p><h2 id="mysql-主从复制安装" tabindex="-1"><a class="header-anchor" href="#mysql-主从复制安装" aria-hidden="true">#</a> Mysql 主从复制安装</h2><p>安装主服务器容器实例（端口号3307）：</p><ol><li>启动容器实例</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker run -p 3307:3306 \\
           --name mysql-master \\
           --privileged=true \\
           -v /app/mysql-master/log:/var/log/mysql \\
           -v /app/mysql-master/data:/var/lib/mysql \\
           -v /app/mysql-master/conf:/etc/mysql \\
           -e MYSQL_ROOT_PASSWORD=root \\
           -d mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>进入/app/mysql-master/conf，新建my.cnf配置文件：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>[mysqld]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>重启容器实例</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker restart mysql-master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>进入容器实例内</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it mysql-master /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>登录mysql，创建数据同步用户</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>-- 首先使用 mysql -uroot -p 登录mysql
-- 创建数据同步用户
create user &#39;slave&#39;@&#39;%&#39; identified by &#39;123456&#39;;
-- 授权
grant replication slave, replication client on *.* to &#39;slave&#39;@&#39;%&#39;;
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装从服务器容器实例（端口号3308）：</p><ol><li>启动容器服务：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker run -p 3308:3306 \\
           --name mysql-slave \\
           --privileged=true \\
           -v /app/mysql-slave/log:/var/log/mysql \\
           -v /app/mysql-slave/data:/var/lib/mysql \\
           -v /app/mysql-slave/conf:/etc/mysql \\
           -e MYSQL_ROOT_PASSWORD=root \\
           -d mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>进入/app/mysql-slave/conf目录，创建my.cnf配置文件：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>[mysqld]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改完配置需要重启slave容器实例</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker restart mysql-slave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在主数据库中查看主从同步状态：</p><ol><li>进入主数据库容器：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it mysql-master /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>进入Mysql</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>查看主从同步状态</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>show master status;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主要查看返回结果的文件名File、当前位置Position</p><p>进入从数据库容器，配置主从复制：</p><ol><li>进入从数据库容器：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it mysql-slave /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>进入数据库</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>配置从数据库所属的主数据库：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>-- 格式：
-- change master to master_host=&#39;宿主机ip&#39;,master_user=&#39;主数据库配置的主从复制用户名&#39;,master_password=&#39;主数据库配置的主从复制用户密码&#39;,master_port=宿主机主数据库端口,master_log_file=&#39;主数据库主从同步状态的文件名File&#39;,master_log_pos=主数据库主从同步状态的Position,master_connect_retry=连接失败重试时间间隔（秒）;

change master to master_host=&#39;192.168.xxx.xxx&#39;,master_user=&#39;slave&#39;,master_password=&#39;123456&#39;,master_port=3307,master_log_file=&#39;mall-mysql-bin.000001&#39;,master_log_pos=769,master_connect_retry=30;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>查看主从同步状态：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># \\G 可以将横向的结果集表格转换成纵向展示。
# slave status的字段比较多，纵向展示比友好
show slave status \\G;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了展示刚刚配置的主数据库信息外，主要关注 Slave_IO_Running、Slave_SQL_Running。目前两个值应该都为 No，表示还没有开始。</p><ol start="5"><li>开启主从同步：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>start slave;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>再次查看主从同步状态，Slave_IO_Running、Slave_SQL_Running都变为Yes。</li></ol><p>主从复制测试：</p><ol><li>在主数据库上新建库、使用库、新建表、插入数据</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>create database db01;
use db01;
create table t1 (id int, name varchar(20));
insert into t1 values (1, &#39;abc&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在从数据库上使用库、查看记录</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>show databases;
use db01;
select * from t1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71),d=[n];function r(v,c){return l(),i("div",null,d)}const t=e(a,[["render",r],["__file","09_Docker安装MySQL.html.vue"]]);export{t as default};
