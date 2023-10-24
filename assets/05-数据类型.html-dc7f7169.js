import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as l,a as n,b as a,e as c,d as s}from"./app-80c0fd9a.js";const o={},u=s('<h2 id="一、数据类型" tabindex="-1"><a class="header-anchor" href="#一、数据类型" aria-hidden="true">#</a> 一、数据类型</h2><h3 id="_1-数据类型的作用是什么" tabindex="-1"><a class="header-anchor" href="#_1-数据类型的作用是什么" aria-hidden="true">#</a> 1.数据类型的作用是什么？</h3><p>程序当中有很多数据，每一个数据都是有相关类型的，不同数据类型的数据占用空间大小不同<br> 数据类型的作用是指导JVM在运行程序的时候给该数据分配多大的内存空间</p><h3 id="_2-java中的数据类型包括两种" tabindex="-1"><a class="header-anchor" href="#_2-java中的数据类型包括两种" aria-hidden="true">#</a> 2.Java中的数据类型包括两种：</h3><p>*基本数据类型<br> *引用数据类型</p><h3 id="_3-关于基本数据类型【原始数据类型】" tabindex="-1"><a class="header-anchor" href="#_3-关于基本数据类型【原始数据类型】" aria-hidden="true">#</a> 3.关于基本数据类型【原始数据类型】</h3><ul><li>基本数据类型包括四大类八小种： <ul><li>第一类：整数型 byte,short,int,long</li><li>第二类：浮点型 float,double</li><li>第三类：布尔型 boolean</li><li>第四类：字符型 char</li></ul></li><li>java有两种基本数值型：整型和浮点型，其中包括四种整形和两种浮点型</li></ul><h3 id="_4-字符串和字符" tabindex="-1"><a class="header-anchor" href="#_4-字符串和字符" aria-hidden="true">#</a> 4.字符串和字符</h3><p>字符串&quot;abc&quot;不属于基本数据类型，属于”引用数据类型“，字符&#39;a&#39;属于基本数据类型</p><h3 id="_5-八种基本数据类型各自占用空间大小是多少" tabindex="-1"><a class="header-anchor" href="#_5-八种基本数据类型各自占用空间大小是多少" aria-hidden="true">#</a> 5.八种基本数据类型各自占用空间大小是多少？</h3><table><thead><tr><th>基本数据类型</th><th>占用空间大小【单位：字节】</th></tr></thead><tbody><tr><td>byte</td><td>1</td></tr><tr><td>short</td><td>2</td></tr><tr><td>int</td><td>4</td></tr><tr><td>long</td><td>8</td></tr><tr><td>float</td><td>4</td></tr><tr><td>double</td><td>8</td></tr><tr><td>boolean</td><td>1</td></tr><tr><td>char</td><td>2</td></tr></tbody></table><h3 id="_6-计算机在任何情况下都只能识别二进制。例如-只认识101010101010101" tabindex="-1"><a class="header-anchor" href="#_6-计算机在任何情况下都只能识别二进制。例如-只认识101010101010101" aria-hidden="true">#</a> 6.计算机在任何情况下都只能识别二进制。例如：只认识101010101010101...</h3><p>现代的计算机底层采用交流电的方式，接通和断开就两种状态，计算机只识别1或0，其他不认识</p><h3 id="_7-什么是二进制" tabindex="-1"><a class="header-anchor" href="#_7-什么是二进制" aria-hidden="true">#</a> 7.什么是二进制？</h3><p>数据的一种表示方式，十进制表示满十进一原则，二进制表示满二进一原则</p><p>十进制 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20</p><p>二进制 0 1 10 11 100 101 110 111 1000 1001...</p><h3 id="_8-字节-byte" tabindex="-1"><a class="header-anchor" href="#_8-字节-byte" aria-hidden="true">#</a> 8.字节(byte):</h3><p>1 byte = 8 bit 【1个字节 = 8个比特位】1个比特位表示一个二进制位：1/0<br> 1 KB = 1024 Byte<br> 1 MB = 1024 KB<br> 1 GB = 1024 MB<br> 1 TB = 1024 GB</p><p>1 TB = 1024 * 1024 * 1024 * 1024 * 8</p><h3 id="_9-整数型当中的byte类型-占用1个字节-所以byte类型的数据占用8个比特位-那么byte类型的取值范围是什么" tabindex="-1"><a class="header-anchor" href="#_9-整数型当中的byte类型-占用1个字节-所以byte类型的数据占用8个比特位-那么byte类型的取值范围是什么" aria-hidden="true">#</a> 9.整数型当中的byte类型，占用1个字节，所以byte类型的数据占用8个比特位，那么byte类型的取值范围是什么？</h3><ul><li>关于Java中的数字类型，数字都是有正负之分的，所以在数字的二进制当中有一个二进制位被称为符号位。</li><li>并且这个符号位在所有二进制的最左边，0表示正数，1表示负数</li><li>byte类型最大值：01111111</li><li>byte类型最大值：2^7-1 = 127</li><li>byte类型最小值：-128 【与原码、反码、补码有关】</li><li>byte类型取值范围：【 -128 ~ 127 】</li><li>byte可以表示256个不同的数字【256个不同的二进制】</li></ul><h3 id="_10-十进制和二进制之间的转换规则" tabindex="-1"><a class="header-anchor" href="#_10-十进制和二进制之间的转换规则" aria-hidden="true">#</a> 10.十进制和二进制之间的转换规则：</h3><ul><li>二进制转十进制</li><li>十进制转二进制</li></ul><h3 id="_11-计算机只认识二进制-那么计算机是怎么表示现实世界当中的文字的呢" tabindex="-1"><a class="header-anchor" href="#_11-计算机只认识二进制-那么计算机是怎么表示现实世界当中的文字的呢" aria-hidden="true">#</a> 11.计算机只认识二进制，那么计算机是怎么表示现实世界当中的文字的呢？</h3>',25),d=n("li",null,"八种基本数据类型当中，byte、short、int、long、float、double、boolean这7种数据类型计算机在表示的时候比较容易，因为底层都是数字，十进制的数字和二进制之间存在一种固定的转换规则",-1),r=n("li",null,"但是八种基本数据类型当中的char类型表示的是现实世界当中的文字，文字和计算机二进制之间默认情况下是不存在任何转换关系的",-1),v=n("li",null,"为了让计算机可以表示现实世界中的文字，我们需要人为的干涉，需要人负责提前制定好“文字”和“二进制”之间的对照关系，这种对照关系被称为：字符编码",-1),m={href:"https://tool.oschina.net/commons?type=4",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"'a' --（按照ASCII编码）--> 01100001 --（按照ASCII解码）--> 'a'",-1),b=n("li",null,"编码和解码的时候采用同一套字典/对照表，不会出现乱码，反之则会",-1),h=s("<li>随着计算机的发展，后来出现了一种编码方式，是国际化标准组织ISO制定的，这种编码方式支持西欧语言，向上兼容ASCII码，仍然不支持中文，这种编码方式是：ISO-8859-1，又被称为latin-1</li><li>随着计算机向亚洲发展，计算机开始支持中文、日文、韩文等国家文字，其中支持简体中文的编码方式：GB2312 &lt; GBK &lt; GB18030</li><li>支持繁体中文：大五码 【big5】</li><li>后来出现了一种编码方式统一了全球所有的文字，容量较大，这种编码方式叫做：unicode编码。unicode编码方式有很多具体的实现： <ul><li>UTF-8</li><li>UTF-16</li><li>UTF-32</li><li>...</li></ul></li><li>Java语言采用的是哪一种编码方式呢？ <ul><li>Java语言源代码采用的是unicode编码方式，所以标识符可以用中文</li></ul></li><li>现在在实际开发中，一般使用UTF-8编码方式较多【统一编码方式】</li>",6),y=s(`<h3 id="_12-八种基本类型的取值范围" tabindex="-1"><a class="header-anchor" href="#_12-八种基本类型的取值范围" aria-hidden="true">#</a> 12.八种基本类型的取值范围：</h3><table><thead><tr><th>类型</th><th>取值范围</th></tr></thead><tbody><tr><td>byte</td><td>[-128 ~ 127]</td></tr><tr><td>short</td><td>[-32768 ~ 32767]</td></tr><tr><td>int</td><td>[-2147483648 ~ 2147483647]</td></tr><tr><td>long</td><td></td></tr><tr><td>float</td><td></td></tr><tr><td>double</td><td></td></tr><tr><td>boolean</td><td>[true,false]</td></tr><tr><td>char</td><td>[0 ~ 65535]</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>short和char所表示的种类总数是一样的，只不过char可以表示更大的整数，因为char没有负数</p></div><h3 id="_13-八种基本数据的默认值" tabindex="-1"><a class="header-anchor" href="#_13-八种基本数据的默认值" aria-hidden="true">#</a> 13.八种基本数据的默认值</h3><table><thead><tr><th>第一章.数据类型</th><th>默认值</th></tr></thead><tbody><tr><td>byte,short,int,long</td><td>0</td></tr><tr><td>float,double</td><td>0.0</td></tr><tr><td>boolean</td><td>false 【在c语言中，true是1，false是0】</td></tr><tr><td>char</td><td>\\u0000</td></tr></tbody></table><p>八种基本数据类型的默认值是一切向0看齐</p><h2 id="二、字符型" tabindex="-1"><a class="header-anchor" href="#二、字符型" aria-hidden="true">#</a> 二、字符型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataTypeTest02</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// 定义一个char类型的变量，起名c，同时赋值字符&#39;a&#39;</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 一个中文占用2个字节，char类型正好是两个字节</span>
        <span class="token comment">// 所以Java中的char类型变量可以储存一个中文字符</span>
        <span class="token keyword">char</span> x <span class="token operator">=</span> <span class="token char">&#39;国&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 编译报错</span>
        <span class="token comment">// ab是字符串不能使用单引号括起来</span>
        <span class="token comment">// char y = &#39;ab&#39;;</span>
        
        <span class="token comment">// &quot;a&quot;是字符串类型</span>
        <span class="token comment">// k变量是char类型</span>
        <span class="token comment">// 类型不兼容，编译报错</span>
        <span class="token comment">// char k = &quot;a&quot;;</span>

        <span class="token comment">// 声明</span>
        <span class="token keyword">char</span> e<span class="token punctuation">;</span>

        <span class="token comment">// 赋值</span>
        e <span class="token operator">=</span> <span class="token char">&#39;e&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 再次赋值</span>
        e <span class="token operator">=</span> <span class="token char">&#39;f&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   关于Java语言当中的char类型：
      转义字符 \\

      转义字符出现在特殊字符之前，会将特殊字符转换成普通字符

      \\n 换行符
      \\t 制表符
      \\b 退回符
      \\&#39; 普通的单引号
      \\\\ 普通的反斜杠
      \\&quot; 普通的双引号

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataTypeTest03</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">// 普通的n字符</span>
        <span class="token keyword">char</span> c1 <span class="token operator">=</span> <span class="token char">&#39;n&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 这是一个”转换符“，属于char类型的数据</span>
        <span class="token comment">// 反斜杠在Java语言当中具有转义功能</span>
        <span class="token keyword">char</span> c2 <span class="token operator">=</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        System.out.println(&quot;Hello&quot;);
        System.out.println(&quot;World&quot;);
         */</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        System.out.print()和System.out.println()区别：
        println输出之后换行，print表示输出但不换行

        【println方法是在输出发送给它的信息后才将光标移动到下一行】

         */</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 普通的t字符</span>
        <span class="token keyword">char</span> x <span class="token operator">=</span> <span class="token char">&#39;t&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 制表符tab</span>
        <span class="token comment">// 强调：制表符和空格不一样，他们的ASCII码不一样，体现在键盘上两个不同的按键</span>
        <span class="token keyword">char</span> y <span class="token operator">=</span> <span class="token char">&#39;\\t&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// We present the following facts for youedification.</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;We present the following facts for your\\bedification.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 要求在控制台输出”反斜杠字符“</span>

        <span class="token comment">// 反斜杠将后面的单引号转义成不具备特殊含义的普通单引号字符</span>
        <span class="token comment">// 左边的单引号缺少了结束的单引号字符，编译报错</span>
        <span class="token comment">/*
        char k = &#39;\\&#39;;
        System.out.println(k);
         */</span>

        <span class="token comment">/*
            \\\\
            解释：第一个反斜杠具有转义功能，将后面的反斜杠转义为普通的反斜杠字符
            结论：在Java当中两个反斜杠代表一个普通的反斜杠字符
         */</span>

        <span class="token keyword">char</span> k <span class="token operator">=</span> <span class="token char">&#39;\\\\&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//在控制台输出单引号字符</span>
        <span class="token keyword">char</span> a <span class="token operator">=</span> <span class="token char">&#39;\\&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">char</span> f <span class="token operator">=</span> <span class="token char">&#39;&quot;&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;“Hello”&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 编译报错</span>
        <span class="token comment">// System.out.println(&quot;&quot;Hello&quot;&quot;);</span>
        <span class="token comment">// 纠正</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\&quot;Hello\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">char</span> m <span class="token operator">=</span> <span class="token char">&#39;中&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// JDK中自带的native2ascii.exe命令，可以将文字转换成unicode编码形式</span>
        <span class="token comment">// 怎么使用这个命令：</span>
        <span class="token comment">// 在命令行输入native2ascii，回车，然后输入文字之后回车即可得到unicode编码</span>
        <span class="token keyword">char</span> n <span class="token operator">=</span> <span class="token char">&#39;\\u4e2d&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 中</span>

        <span class="token comment">// 编译报错</span>
        <span class="token comment">// char g = &#39;4e2d&#39;;</span>
        <span class="token comment">// 编译报错</span>
        <span class="token comment">// char g = &#39;u4e2d&#39;;</span>
        <span class="token comment">// 通过：反斜杠和u联合起来后面的一串数字是某个文字的unicode编码</span>
        <span class="token keyword">char</span> g <span class="token operator">=</span> <span class="token char">&#39;\\u4e2d&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>

        g <span class="token operator">=</span> <span class="token char">&#39;\\u456a&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不要随便试，没有意义</span>

        <span class="token comment">// char类型的默认值</span>
        <span class="token keyword">char</span> c10 <span class="token operator">=</span> <span class="token char">&#39;\\u0000&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c10<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
     十进制：0 1 2 3 4 5 6 7 8 9 10 11 12...
     二进制：0 1 10 11 100 101...
     十六进制：0 1 2 3 4 5 6 7 8 9 a b c d e f 10 11 12 13 14 15 16 17 18 19 1a 1b 1c 1d 1f 20
     八进制：0 1 2 3 4 5 6 7 10 12 13 14 15 16 17 20
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、整数型" tabindex="-1"><a class="header-anchor" href="#三、整数型" aria-hidden="true">#</a> 三、整数型</h2><p>关于Java语言当中的整数型：</p><table><thead><tr><th>数据类型</th><th>占用空间大小</th><th>默认值</th><th>取值范围</th></tr></thead><tbody><tr><td>byte</td><td>1</td><td>0</td><td>[-128 ~ 127]</td></tr><tr><td>short</td><td>2</td><td>0</td><td>[-32768 ~ 32767]</td></tr><tr><td>int</td><td>4</td><td>0</td><td>[-2147483648 ~ 2147483647]</td></tr><tr><td>long</td><td>8</td><td>0L</td><td></td></tr></tbody></table><p>Java语言当中的整数型字面值被默认当作int类型来处理。要让这个整数型字面值被当作long类型来处理的话，需要在整数型字面值后面添加l/L，建议用大写的L</p><p>Java语言中的整数型字面值有三种表示方式：</p><ul><li>第一种：十进制【是一种缺省默认的方式】</li><li>第二种：八进制【需要以0开始】</li><li>第三种：十六进制【需要以0x开始】</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataTypeTest04</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">010</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">0x10</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//8</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//16</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//34</span>

        <span class="token comment">//123这个整数型字面值是int类型</span>
        <span class="token comment">//i变量声明的时候也是int类型</span>
        <span class="token comment">//int类型的123赋值给int类型的变量i，不存在类型转换</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//456整数型字面值被当作int类型，占用4个字节</span>
        <span class="token comment">//x变量在声明的时候是long类型，占用8个字节</span>
        <span class="token comment">//int类型的字面值456赋值给long类型的变量x，存在类型转换</span>
        <span class="token comment">//int类型转换成long类型</span>
        <span class="token comment">//int类型是小容量，long类型是大容量</span>
        <span class="token comment">//小容量可以自动转换成大容量，称为自动类型转换机制</span>
        <span class="token keyword">long</span> x <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2147483647字面值是int类型，占用4个字节</span>
        <span class="token comment">//y是long类型，占用8个字节，自动类型转换</span>
        <span class="token keyword">long</span> y <span class="token operator">=</span> <span class="token number">2147483647</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//编译错误：过大的整数：2147483648</span>
        <span class="token comment">//2147483648被当作int类型4个字节处理，但是这个字面值超出int类型范围</span>
        <span class="token comment">//long z = 2147483648;</span>

        <span class="token comment">//解决错误</span>
        <span class="token comment">//2147483648字面值一上来就当作long类型来处理，在字面值后面添加L</span>
        <span class="token comment">//2147483648L是8个字节的long类型</span>
        <span class="token comment">//z是long类型变量，以下程序不存在类型转换</span>
        <span class="token keyword">long</span> z <span class="token operator">=</span> <span class="token number">2147483648L</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataTypeTest05</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//100L是long类型字面值</span>
        <span class="token comment">//x是long类型变量</span>
        <span class="token comment">//不存在类型转换，直接赋值</span>
        <span class="token keyword">long</span> x <span class="token operator">=</span> <span class="token number">100L</span><span class="token punctuation">;</span>

        <span class="token comment">//x变量是long类型，8个字节</span>
        <span class="token comment">//y变量是int类型，4个字节</span>
        <span class="token comment">//编译报错，大容量不能直接赋值给小容量</span>
        <span class="token comment">//int y = x;</span>

        <span class="token comment">//大容量转换成小容量，需要进行强制类型转换</span>
        <span class="token comment">//强制类型转换需要加强制类型转换符</span>
        <span class="token comment">//加上强制类型转换符之后编译通过了，但是运行阶段可能损失精度</span>
        <span class="token comment">//所以强制类型转换谨慎使用，因为精度损失之后可能损失很严重</span>

        <span class="token comment">//强转原理：</span>
        <span class="token comment">//原始数据：00000000 00000000 00000000 00000000 00000000 00000000 00000000 01100100</span>
        <span class="token comment">//强转之后数据：00000000 00000000 00000000 01100100</span>
        <span class="token comment">//将左边的二进制砍掉【所有的数据强转的时候都是这样完成的】</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>x<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//原始数据：00000000 00000000 00000000 00000000 10000000 00000000 00000000 00000000</span>
        <span class="token comment">//强转之后数据：10000000 00000000 00000000 00000000</span>
        <span class="token comment">//10000000 00000000 00000000 00000000目前存储在计算机内部，计算机存储数据都是采用补码的形式储存</span>
        <span class="token comment">//所以10000000 00000000 00000000 00000000现在是一个补码形式</span>
        <span class="token comment">//将以上的补码转换到原码就是最终的结果</span>
        <span class="token keyword">long</span> k <span class="token operator">=</span> <span class="token number">2147483648L</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>k<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//精度损失严重，结果是一个负数【-2147483648】</span>

        <span class="token comment">//分析以下程序是否可以编译通过</span>
        <span class="token comment">//依据目前所学内容，以下程序无法编译通过</span>
        <span class="token comment">//理由：50是int类型的字面值，b是byte类型的变量，显然是大容量int转换成小容量byte</span>
        <span class="token comment">//大容量转换成小容量是需要添加强制类型转换符的，以下没有添加强转符号，所以编译报错</span>
        <span class="token comment">//但实际编译时，以下代码编译通过了</span>
        <span class="token comment">//这说明：在Java语言当中，当一个整数型字面值没有超出byte类型取值范围的话，该字面值可以直接赋值给byte类型的变量</span>
        <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token comment">//可以</span>
        <span class="token keyword">byte</span> c <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span> <span class="token comment">//可以</span>

        <span class="token comment">//编译报错，128这个int类型的字面值已经超出了byte类型的取值范围，不能直接赋值给byte类型的变量</span>
        <span class="token comment">//byte b1 = 128;</span>

        <span class="token comment">//纠正错误，需要使用强制类型转换符</span>
        <span class="token comment">//但是一定会损失精度</span>
        <span class="token comment">//原始数据：00000000 00000000 00000000 10000000</span>
        <span class="token comment">//强转之后：10000000【这是存储在计算机内部的，这是一个补码，它的原码是什么】</span>
        <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token number">128</span><span class="token punctuation">;</span> <span class="token comment">//-128</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//short s = 32767; //通过</span>
        <span class="token comment">//short s1 = 32768; //编译报错</span>

        <span class="token comment">//65535是int类型，4个字节</span>
        <span class="token comment">//cc是char类型，两个字节</span>
        <span class="token comment">//char cc = 65535; //通过</span>
        <span class="token comment">//cc = 65536; //编译报错</span>

        <span class="token comment">/*
           当一个整数型字面值没有超出byte、short、char的取值范围，这个字面值可以直接赋值给
           byte、short、char类型的变量，这种机制SUN允许了，目的是为了方便程序员的编程
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
     计算机二进制有三种表示形式：
        原码
        反码
        补码
     计算机在任何情况下底层表示和存储数据的时候采用了补码形式
     正数的补码：和原码相同
     负数的补码：将其对应正数二进制所有位取反后加1

     //补码：10000000
     //减1：01111111
     //反码：10000000   128
     //原码：-128

     例：
     //原始数据：00000000 00000000 00000000 11000110
     //强转之后：11000110
     //11000110现在在计算机中存储，他是一个补码，将补码转换成原码就是该数字
     //11000110 - 1 --&gt; 11000101
     //00111010【2+8+16+32】--&gt;58
     //-58
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、浮点型" tabindex="-1"><a class="header-anchor" href="#四、浮点型" aria-hidden="true">#</a> 四、浮点型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   关于浮点型数据类型
     float 单精度【4个字节】
     double 双精度【8个字节，精度较高】

   double的精度太低【相对来说】，不适合做财务软件
   财务涉及到钱的问题，要求精度较高，所以SUN公司在基础SE类库当中为程序员准备了精度更高的类型
   只不过这种类型是一种引用数据类型，不属于基本数据类型，它是：java.math.BigDecimal

   其实java程序中SUN提供了一套庞大的类库，java程序员是基于这套基础的类库进行开发的
   * SE类库字节码：C:\\Program Files\\Java\\jdk1.8.0_301\\jre\\lib\\rt.jar
   * SE类库源码：C:\\Program Files\\Java\\jdk1.8.0_301\\src.zip

   例如：String.java和String.class
   我们的(String[] args)中的String使用的就是String.class字节码文件

   在java语言当中，所有的浮点型字面值【3.0】默认被当作double类型来处理，
   想要该字面值当作float类型处理，需要在字面值后面加F/f

   注意：double和float在计算机内部二进制存储的都是近似值
   在现实世界里，有一些数字是无限循环的，例如：3.33333333333...
   计算机的资源是有限的，用有限的资源存储无限的数据只能存储近似值
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataTypeTest06</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//3.0是double类型的字面值</span>
        <span class="token comment">//d是double类型的变量</span>
        <span class="token comment">//不存在类型转换</span>
        <span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">3.0</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//5.1是double类型的字面值</span>
        <span class="token comment">//f是float类型的变量</span>
        <span class="token comment">//大容量转换成小容量需要加强制类型转换符，所以以下程序编译错误</span>
        <span class="token comment">//float f = 5.1;</span>

        <span class="token comment">//解决方案：</span>
        <span class="token comment">//第一种方式：</span>
        <span class="token comment">//float f = (float)5.1;</span>

        <span class="token comment">//第二种方式：没有类型转换</span>
        <span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">5.1f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、布尔型" tabindex="-1"><a class="header-anchor" href="#五、布尔型" aria-hidden="true">#</a> 五、布尔型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   关于布尔型数据类型：
      boolean

   在Java语言当中boolean类型只有两个值：true、false【不像c语言当中，1、0表示真假】
   在底层存储的时候boolean类型占用1个字节，因为实际存储的时候false底层是0，true底层是1
   布尔类型在实际开发中非常重要，经常使用在逻辑运算和条件控制语句当中
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataTypeTest07</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//编译错误：不兼容的类型</span>
        <span class="token comment">//boolean flag = 1;</span>

        <span class="token keyword">boolean</span> loginSuccess <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>loginSuccess<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;恭喜你，登录成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;对不起，用户名不存在或密码错误！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、基本数据类型相互转换" tabindex="-1"><a class="header-anchor" href="#六、基本数据类型相互转换" aria-hidden="true">#</a> 六、基本数据类型相互转换</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   关于基本数据类型之间的相互转换：

      1.八种基本数据类型当中除布尔类型之外剩下的7种类型之间都可以相互转换

      2.小容量向大容量转换，称为自动类型转换，容量从小到大排序：
        byte &lt; short &lt; int &lt; long &lt; float &lt; double
                char
        注：任何浮点类型不管占用多少个字节，都比整数型容量大。
            char和short可表示的种类数量相同，但是char可以取更大的正整数。

      3、大容量转换成小容量，叫做强制类型转换，需要加强制类型转换符，程序才能编译通过，
         但是在运行阶段可能会损失精度，所以谨慎使用。

      4、当整数字面值没有超出byte,short,char的取值范围，可以直接赋值给byte,short,char类型的变量

      5、byte,short,char混合运算的时候，各自先转换成int类型再做运算。

      6、多种数据类型混合运算，先转换成容量大的那种类型再做运算。

      7、强制类型转换，double类型转成int类型时，直接舍弃小数部分取整，不遵循四舍五入

      8、将double型的money强转赋值给int类型的dollars，赋值完成后money值不变，仍是double型

      注意： byte b = 3; 可以编译通过，3没有超过byte类型的取值范围

            int i = 10;
            byte b = i / 3; 编译报错，编译器只检查语法，不会“运算” i / 3

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataTypeTest08</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//出现错误，1000超出了byte的范围</span>
        <span class="token comment">//byte a = 1000;</span>
        <span class="token comment">//正确，因为20没有超过byte的取值范围</span>
        <span class="token comment">//所以赋值正确</span>
        <span class="token keyword">byte</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token comment">//变量名不能重名</span>
        <span class="token comment">//short a = 1000;</span>
        <span class="token comment">//正确，因为数值1000没有超出short类型的范围</span>
        <span class="token comment">//所以赋值正确</span>
        <span class="token keyword">short</span> b <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token comment">//正确，因为默认就是int，并且没有超出int范围</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token comment">//正确，可以自动类型转换</span>
        <span class="token keyword">long</span> d <span class="token operator">=</span> c<span class="token punctuation">;</span>
        <span class="token comment">//错误，出现精度丢失问题，大类型到小类型</span>
        <span class="token comment">//int e = d;</span>
        <span class="token comment">//将long强制转换成int类型</span>
        <span class="token comment">//因为值1000，没有超出int范围，所以转换是正确的</span>
        <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>d<span class="token punctuation">;</span>
        <span class="token comment">//因为java中的运算会转换成最大类型</span>
        <span class="token comment">//而10和3默认为int，所以运算后的最大类型也是int</span>
        <span class="token comment">//所以正确</span>
        <span class="token keyword">int</span> f <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token comment">//声明10为long类型</span>
        <span class="token keyword">long</span> g <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//出现错误，多个数值在运算过程中，会转换成容量最大类型</span>
        <span class="token comment">//以下示例最大的类型为long，而h为int，所以就会出现大类型(long)到小类型(int)的转换</span>
        <span class="token comment">//将会出现精度丢失问题</span>
        <span class="token comment">//int h = g/3;</span>
        <span class="token comment">//可以强制转换，因为运算结果没有超出int范围</span>
        <span class="token comment">//int h = (int)g/3;</span>
        <span class="token comment">//可以采用long类型来接收运算结果</span>
        <span class="token comment">//long h = g/3;</span>
        <span class="token comment">//出现精度损失问题，以下问题主要是优先级的问题</span>
        <span class="token comment">//将g转换成int类型，然后又将int类型的g转换成byte，最后byte类型的g和3运算，那么</span>
        <span class="token comment">//它的运算结果类型就是int，所以int赋值给byte就出现了精度损失问题</span>
        <span class="token comment">//byte h = (byte)(int)g/3;</span>
        <span class="token comment">//正确</span>
        <span class="token comment">//byte h = (byte)(int)(g/3);</span>
        <span class="token comment">//不能转换，因为还有优先级的问题</span>
        <span class="token comment">//byte h = (byte)g/3;</span>
        <span class="token comment">//可以转换，因为运算结果没有超出byte范围</span>
        <span class="token comment">//byte h = (byte)(g/3);</span>
        <span class="token comment">//可以转换，因为运算结果没有超出short范围</span>
        <span class="token comment">//short h = (short)(g/3);</span>
        <span class="token keyword">short</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span> j <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token comment">//错误，short和byte运算，首先会转换成int再运算</span>
        <span class="token comment">//所以运算结果为int，int赋值给short就会出现精度丢失问题</span>
        <span class="token comment">//short k = i + j;</span>
        <span class="token comment">//可以将运算结果强制转换成short</span>
        <span class="token comment">//short k = (short)(i + j);</span>
        <span class="token comment">//因为运算结果为int，所以可以采用int类型接收</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
        <span class="token keyword">char</span> l <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//a</span>
        <span class="token comment">//输出结果为97，也就是a的ascii值</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//97</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token comment">//输出结果为197，取得a的ascii码值，然后与100进行相加运算</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//197</span>

        <span class="token keyword">double</span> dd <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3.0</span>

        dd <span class="token operator">=</span> <span class="token number">10.0</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dd<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3.3333333333333335</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sh <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">2.6</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sh2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">2.4</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sh<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//-2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sh2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//-2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function f(g,w){const e=p("ExternalLinkIcon");return i(),l("div",null,[u,n("ul",null,[d,r,v,n("li",null,[a("计算机最初只支持英文，最先出现的字符编码是：ASCII码【采用一个字节编码】 "),n("ul",null,[n("li",null,[n("a",m,[a("ASCII码对照表"),c(e)])]),k,b])]),h]),y])}const x=t(o,[["render",f],["__file","05-数据类型.html.vue"]]);export{x as default};
