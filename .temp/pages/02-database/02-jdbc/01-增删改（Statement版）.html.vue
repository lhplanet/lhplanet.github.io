<template><div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">Driver</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Statement</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCTest01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1.驱动注册</span>
            <span class="token comment">// 第一种方法：多态，父类型引用指向子类型对象</span>
            <span class="token comment">// DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());</span>
            <span class="token comment">// 第二种方法：此方式常用，因为参数是一个字符串，字符串可以直接写到xxx.properties文件中</span>
			<span class="token comment">// 以下方法不需要接收返回值，因为我们只想用它的类加载动作</span>
			<span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 2.获取连接</span>
            <span class="token doc-comment comment">/**
             * url:统一资源定位符(网络中某个资源的绝对路径)
             * https://www.baidu.com/  这就是URL(包括协议、IP、PORT、资源名)
             * http://182.61.200.7:80/index.html
             * http:// 通信协议(通信之前就定好的数据传送格式，数据包怎样传数据，格式提前定好的)
             * 182.61.200.7 服务器IP地址
             * 80 服务器上软件的端口
             * index.html 服务器上的某个资源名
             *
             * jdbc:mysql://10.27.237.234:3306/bjpowernode
             * jdbc:mysql:// 通信协议
             * 10.27.237.234 服务器IP地址 //也可写localhost
             * 3306 数据库端口号
             * bjpowernode 具体的数据库实例名
             */</span>
            <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://127.0.0.1:3306/bjpowernode"</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> user <span class="token operator">=</span> <span class="token string">"root"</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"123456"</span><span class="token punctuation">;</span>
            conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> user<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数据库连接对象："</span> <span class="token operator">+</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// com.mysql.jdbc.JDBC4Connection@4ec6a292</span>

            <span class="token comment">// 3.获取数据库操作对象（Statement专门执行sql语句的）</span>
            stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 4.执行sql</span>
            <span class="token comment">// 增：</span>
            <span class="token comment">// JDBC中的sql语句不需要提供分号结尾</span>
            <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"insert into dept(deptno,dname,loc) values(52,'renshibu','beijing')"</span><span class="token punctuation">;</span>
            <span class="token comment">// 专门执行DML语句的（insert delete update）</span>
            <span class="token comment">// 返回值是“影响数据库中的记录条数”</span>
            <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">"保存成功"</span> <span class="token operator">:</span> <span class="token string">"保存失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	        <span class="token comment">// 删：</span>
	        <span class="token comment">// String sql = "delete from dept where deptno = 40";</span>
			<span class="token comment">// int count = stmt.executeUpdate(sql);</span>
			<span class="token comment">// System.out.println(count == 1 ? "删除成功" : "删除失败");</span>

			<span class="token comment">// 改：</span>
            <span class="token comment">// String sql = "update dept set dname = 'xiaoshoubu', loc = 'tianjin' where deptno = 51";</span>
			<span class="token comment">// int count = stmt.executeUpdate(sql);</span>
			<span class="token comment">// System.out.println(count == 1 ? "修改成功" : "修改失败");</span>

            <span class="token comment">// 5.处理查询结果集</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 6.释放资源</span>
            <span class="token comment">// 为了保证资源一定被释放，在 finally 语句块中关闭资源</span>
            <span class="token comment">// 并且要遵循从小到大依次关闭</span>
            <span class="token comment">// 分别对其 try...catch</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>stmt <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>conn <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


