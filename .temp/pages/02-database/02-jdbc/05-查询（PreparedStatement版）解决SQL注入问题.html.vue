<template><div><h2 id="一、解决-sql-注入问题" tabindex="-1"><a class="header-anchor" href="#一、解决-sql-注入问题" aria-hidden="true">#</a> 一、解决 SQL 注入问题</h2>
<p>只要用户提供的信息不参与 SQL 语句的编译过程，问题就解决了。即使用户提供的信息中含有 SQL 语句的关键字，但是没有参与编译，不起作用。要想用户信息不参与 SQL 语句的编译，必须使用 java.sql.preparedStatement。</p>
<p>PreparedStatement 接口继承了 java.sql.Statement，PreparedStatement 是属于预编译的数据库操作对象。</p>
<p>PreparedStatement 的原理是预先对 SQL 语句的框架进行编译，然后再给 SQL 语句串”值“。</p>
<h2 id="二、代码" tabindex="-1"><a class="header-anchor" href="#二、代码" aria-hidden="true">#</a> 二、代码</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCTest07</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化一个界面</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userLoginInfo <span class="token operator">=</span> <span class="token function">initUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 验证用户名和密码</span>
        <span class="token keyword">boolean</span> loginSuccess <span class="token operator">=</span> <span class="token function">login</span><span class="token punctuation">(</span>userLoginInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 最后输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>loginSuccess <span class="token operator">?</span> <span class="token string">"登录成功"</span> <span class="token operator">:</span> <span class="token string">"登录失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 用户登录
     * <span class="token keyword">@param</span> <span class="token parameter">userLoginInfo</span> 用户登录信息
     * <span class="token keyword">@return</span> false表示失败，true表示成功
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> userLoginInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 打标记的意识</span>
        <span class="token keyword">boolean</span> loginSuccess <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 单独定义变量</span>
        <span class="token class-name">String</span> loginName <span class="token operator">=</span> userLoginInfo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"loginName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> loginPwd <span class="token operator">=</span> userLoginInfo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"loginPwd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// JDBC代码</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 这里使用PreparedStatement（预编译的数据库操作对象）</span>
        <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1.注册驱动</span>
            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 2.获取连接</span>
            conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">"jdbc:mysql://127.0.0.1:3306/bjpowernode"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 3.获取预编译的数据库操作对象</span>
            <span class="token comment">// SQL语句的框架，其中一个?表示一个占位符，一个?将来接收一个”值“，注意：占位符不能使用单引号''括起来</span>
            <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from t_user where loginName = ? and loginPwd = ?"</span><span class="token punctuation">;</span>
            <span class="token comment">// 程序执行到此处，会发送sql语句框架给DBMS，然后DBMS进行sql语句的预先编译</span>
            ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 给占位符?传值（第一个?下标是1，第二个?下标是2，JDBC中所有下标从1开始) ）</span>
            ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>loginName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>loginPwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 4.执行sql</span>
            rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 5.处理结果集</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 登录成功</span>
                loginSuccess <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 6.释放资源</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>rs <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>ps <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    ps<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>conn <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> loginSuccess<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化用户界面
     * <span class="token keyword">@return</span> 用户输入的用户名和密码等登录信息
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">initUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"用户名："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> loginName <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"密码："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> loginPwd <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> userLoginInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userLoginInfo<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"loginName"</span><span class="token punctuation">,</span>loginName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        userLoginInfo<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"loginPwd"</span><span class="token punctuation">,</span>loginPwd<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> userLoginInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、对比-statement-和-preparedstatement" tabindex="-1"><a class="header-anchor" href="#三、对比-statement-和-preparedstatement" aria-hidden="true">#</a> 三、对比 Statement 和 PreparedStatement</h2>
<ul>
<li>Statement 存在 sql 注入问题，PreparedStatement 解决了 SQL 注入问题。</li>
<li>Statement 是编译一次执行一次。PreparedStatement 是编译一次，可执行 N 次。PreparedStatement 效率较高一些。</li>
<li>PreparedStatement 会在编译阶段做类型的安全检查。</li>
</ul>
<p>综上所述: PreparedStatement 使用较多。只有极少数的情况下需要使用 Statement。</p>
<h2 id="四、什么情况必须使用-statement" tabindex="-1"><a class="header-anchor" href="#四、什么情况必须使用-statement" aria-hidden="true">#</a> 四、什么情况必须使用 Statement</h2>
<p>Statement 支持 SQL 注入，凡是业务方面要求是需要进行 SQL 语句拼接的，必须支持 SQL 注入，必须使用 Statement。</p>
<p>需求：用户输入 desc 或 asc，来决定查询员工信息的时候，按照工资降序或者升序排列。</p>
<p>这种情况下，使用 PreparedStatement 就无法满足需求了，会报错，必须使用 Statement。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// PreparedStatement 报错</span>
<span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">//3.获取预编译的数据库操作对象</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select ename from emp order by ename ?"</span><span class="token punctuation">;</span>
ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//给占位符?传值（第一个?下标是1，第二个?下标是2，JDBC中所有下标从1开始）</span>
ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>keyWords<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4.执行sql</span>
rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// Statement</span>
<span class="token class-name">Statement</span> stmt <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">//3.获取数据库操作对象</span>
stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//4.执行sql</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select ename from emp order by ename "</span><span class="token operator">+</span>keyWords<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


