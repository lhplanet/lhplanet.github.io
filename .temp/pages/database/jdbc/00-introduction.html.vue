<template><div><h2 id="一、jdbc-定义" tabindex="-1"><a class="header-anchor" href="#一、jdbc-定义" aria-hidden="true">#</a> 一、JDBC 定义</h2>
<p>Java DataBase Connectivity（Java 语言连接数据库），是 SUN 公司制定的<strong>一套接口</strong>（interface）</p>
<p>因为每一个数据库的底层实现原理都不一样，Oracle、MySQL、SqlServer 等数据库有自己的原理，每一个数据库产品都有自己独特的实现原理。</p>
<figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308162216031.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="二、准备工作" tabindex="-1"><a class="header-anchor" href="#二、准备工作" aria-hidden="true">#</a> 二、准备工作</h2>
<p>先从<a href="https://dev.mysql.com/downloads/connector/j/" target="_blank" rel="noopener noreferrer">官网下载<ExternalLinkIcon/></a>对应的驱动 jar 包（MySQL）。</p>
<figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308162223002.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>然后将其配置到环境变量 classpath 当中</p>
<figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308162230243.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>以上的配置是针对于文本编辑器的方式开发，使用 IDEA 工具的时候，不需要配置以上的环境变量。IDEA 有自己的配置方式。</p>
</div>
<p>使用 IDEA 开发 JDBC 代码配置驱动：</p>
<p>【File】-【Project Structure】-【Libraries】-【+】-【找到之前下载的 jar 包】-【选择 Modules】-【OK】</p>
<h2 id="三、jdbc-编程六步-重要" tabindex="-1"><a class="header-anchor" href="#三、jdbc-编程六步-重要" aria-hidden="true">#</a> 三、JDBC 编程六步（重要）</h2>
<h3 id="第一步-注册驱动" tabindex="-1"><a class="header-anchor" href="#第一步-注册驱动" aria-hidden="true">#</a> 第一步：注册驱动</h3>
<p>告诉 Java 程序，即将要连接的是哪个品牌的数据库</p>
<h3 id="第二步-获取连接" tabindex="-1"><a class="header-anchor" href="#第二步-获取连接" aria-hidden="true">#</a> 第二步：获取连接</h3>
<p>表示 JVM 的进程和数据库进程之间的通道打开了，这属于进程之间的通信，重量级的，使用完之后一定要关闭通道。</p>
<h3 id="第三步-获取数据库操作对象" tabindex="-1"><a class="header-anchor" href="#第三步-获取数据库操作对象" aria-hidden="true">#</a> 第三步：获取数据库操作对象</h3>
<p>专门执行 sql 语句的对象</p>
<h3 id="第四步-执行-sql-语句" tabindex="-1"><a class="header-anchor" href="#第四步-执行-sql-语句" aria-hidden="true">#</a> 第四步：执行 SQL 语句</h3>
<p>DQL、DML……</p>
<h3 id="第五步-处理查询结果集" tabindex="-1"><a class="header-anchor" href="#第五步-处理查询结果集" aria-hidden="true">#</a> 第五步：处理查询结果集</h3>
<p>只有当第四步执行的是 select 语句的时候，才有这第五步处理查询结果集。</p>
<h3 id="第六步-释放资源" tabindex="-1"><a class="header-anchor" href="#第六步-释放资源" aria-hidden="true">#</a> 第六步：释放资源</h3>
<p>使用完资源之后一定要关闭资源。Java 和数据库属于进程间的通信，开启之后一定要关闭。</p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>学习教程：<a href="https://www.bilibili.com/video/BV1Bt41137iB/" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1Bt41137iB/<ExternalLinkIcon/></a></p>
</div>
</div></template>


