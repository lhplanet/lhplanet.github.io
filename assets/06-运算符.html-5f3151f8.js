import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as o,a as n,b as s,e as l,d as a}from"./app-80c0fd9a.js";const i={},u=a(`<h2 id="一、算数运算符" tabindex="-1"><a class="header-anchor" href="#一、算数运算符" aria-hidden="true">#</a> 一、算数运算符</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    关于java编程中的运算符之：算术运算符
       +   求和
       -   相减
       *   乘积
       /   商
       %   求余数【取模】

       ++  自加1
       --  自减1

    注意：一个表达式当中有多个运算符，运算符有优先级，不确定的加小括号，优先级得到提升。
         没必要专门记忆运算符的优先级。

     10 / 4 = 2
     10.0 / 4 = 2.5
     10 / 4.0 = 2.5
     10.0 / 4.0 = 2.5

 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperatorTest01</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> i <span class="token operator">+</span> j <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//13</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> i <span class="token operator">-</span> j <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//7</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> i <span class="token operator">*</span> j <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//30</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> i <span class="token operator">/</span> j <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> i <span class="token operator">%</span> j <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>

        <span class="token comment">//以下以++为例，--同理</span>
        <span class="token comment">//关于++第一章.运算符【自加1】</span>

        <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//++运算符可以出现在变量后面【单目运算符】</span>
        k <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//11</span>

        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//++运算符可以出现在变量前面【单目运算符】</span>
        <span class="token operator">++</span> y<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//11</span>

        <span class="token comment">//小结：</span>
        <span class="token comment">//++运算符可以出现在变量前，也可以出现在变量后，无论是变量前还是变量后</span>
        <span class="token comment">//只要++运算符结束，该变量中的值一定会自加1</span>

        <span class="token comment">//++出现在变量后</span>
        <span class="token comment">//先做赋值运算，再对变量中保存的值进行自加1</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> a <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//101</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//100</span>

        <span class="token comment">//++出现在变量前</span>
        <span class="token comment">//规则：先进行自加1运算，然后再赋值操作</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token operator">++</span> m<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//21</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//21</span>

        <span class="token keyword">int</span> xx <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>xx<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
          底层代码
            public void println(int x = e ++) {    //先赋值，后自加1
                 synchronized (this) {
                      print(x);
                      newLine();
                 }
             }
         */</span>
        <span class="token keyword">int</span> e <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//100</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//101</span>

        <span class="token comment">//public void println(int x = ++ s) {    //先自加1,后赋值</span>
        <span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">++</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//101</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//101</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、关系运算符" tabindex="-1"><a class="header-anchor" href="#二、关系运算符" aria-hidden="true">#</a> 二、关系运算符</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    关系运算符：
       &gt;    大于
       &gt;=   大于等于
       &lt;    小于
       &lt;=   小于等于
       ==   等于
       !=   不等于

     = 是赋值运算符
     == 是关系运算符

     关系运算符的运算结果一定是布尔型：true/false
       int a = 10;
       int b = 10;
       a &gt; b 比较的是a中保存的10这个值和b中保存的10这个值
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperatorTest02</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&gt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">!=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//false</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、逻辑运算符" tabindex="-1"><a class="header-anchor" href="#三、逻辑运算符" aria-hidden="true">#</a> 三、逻辑运算符</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   逻辑运算符：
      &amp;    逻辑与   【两边的算子都是true，结果才是true】
      |    逻辑或   【两边的算子只要有一个是true，结果就是true】
      !    逻辑非   【取反，!false就是true，!true就是false，!!true就是true，这是一个单目运算符】
      ^    逻辑异或 【两边的算子只要不一样，结果就是true】

      &amp;&amp;   短路与   【第一个表达式执行结果是false，会发生短路与】
      ||   短路或   【第一个表达式执行结果是true，会发生短路或】

    1、逻辑运算符要求两边的算子都是布尔类型，并且逻辑运算符最终的运算结果也是一个布尔类型。
    2、短路与和逻辑与最终的运算结果是相同的，只不过短路与存在短路现象。
    3、短路或和逻辑或最终的运算结果是相同的，只不过短路或存在短路现象。
    4、什么情况下发生短路现象？
    5、什么时候选择使用逻辑与运算符？什么时候选择使用短路与运算符？

    注意：&amp;&amp;比||优先
        布尔表达式1 || 布尔表达式2 &amp;&amp; 布尔表达式3 ====&gt; 布尔表达式1 || (布尔表达式2 &amp;&amp; 布尔表达式3)
        ====&gt; 只要1为真，则将后面整体短路

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperatorTest03</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//如果运算符优先级不确定，加小括号</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&amp;</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">&amp;</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">5</span> <span class="token operator">&gt;</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">&amp;</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">&amp;</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">&amp;</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">&amp;</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">^</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">^</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">^</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

        <span class="token comment">//逻辑与和短路与</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
        <span class="token comment">//逻辑与</span>
        <span class="token comment">//x &lt; y 结果是false，整个表达式结果已经确定是false，但后面表达式依然执行</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y <span class="token operator">&amp;</span> <span class="token operator">++</span>x <span class="token operator">&lt;</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//11</span>
        <span class="token comment">//短路与</span>
        <span class="token comment">//x &lt; y 结果是false，整个表达式结果已经确定是false，后面表达式没有再执行</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y <span class="token operator">&amp;&amp;</span> <span class="token operator">++</span>x <span class="token operator">&lt;</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
        <span class="token comment">//从某个角度来看，短路与更智能。由于后面的表达式可能不执行，所以执行效率较高。</span>
        <span class="token comment">//这种方式在实际的开发中使用较多。短路与比逻辑与使用的多。短路与更常用。</span>
        <span class="token comment">//但是在某些特殊的业务逻辑当中，要求运算符两边的算子必须全部执行，此时必须使用逻辑与，</span>
        <span class="token comment">//不能使用短路与，使用短路与可能会导致右边的表达式不执行。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、赋值运算符" tabindex="-1"><a class="header-anchor" href="#四、赋值运算符" aria-hidden="true">#</a> 四、赋值运算符</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   关于Java中的赋值类运算符：

      *基本的赋值运算符
          =
      *扩展的赋值运算符
          +=  【可以翻译为“追加/累加”】
          -=  【可以翻译为“追减/累减”】
          *=
          /=

      1、赋值类运算符的优先级：先执行等号右边的表达式，将执行结果赋值给左边的变量。

      2、注意以下代码：

         byte i = 10;
         i += 5; //等同于：i = (byte)(i + 5);

         int k = 10;
         k += 5; //等同于： k = (int)(k + 5);  即：k = k + 5;

         long x = 10L;
         int y = 20;
         y += x; //等同于：y = (int)(y + x);
         x += y; //等同于：x = (long)(x + y);

      3、重要结论：
         扩展类的赋值运算符不改变运算结果类型，假设最初这个变量的类型是byte类型，
         无论怎么进行追加或追减，最终该变量的数据类型还是byte类型。

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperatorTest04</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//基本的赋值运算符</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>

        <span class="token comment">//扩展的赋值运算符【隐含了强制类型转换】</span>
        i <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//等同于：i = i + 5;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//20</span>

        i <span class="token operator">-=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//等同于：i = i - 5;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//15</span>

        i <span class="token operator">*=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//等同于：i = i * 5;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//30</span>

        i <span class="token operator">/=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">//等同于：i = i / 4;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//7</span>

        i <span class="token operator">%=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//等同于：i = i % 2;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>

        <span class="token comment">//10没有超出byte取值范围，可以直接赋值</span>
        <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//b = 15； //可以，编译通过，15没有超过byte取值范围</span>
        <span class="token comment">//编译报错，编译器只检查语法，不运行程序，编译器发现b + 5的类型是int类型，b变量的数据类型是byte</span>
        <span class="token comment">//大容量向小容量转换需要加强制类型转换符，所以以下程序编译报错</span>
        <span class="token comment">//b = b + 5;</span>

        <span class="token comment">//纠正错误</span>
        b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>b <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//15</span>

        <span class="token keyword">byte</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        x <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//等同于：x = (byte)(x + 5); 其实并不等同于：x = x + 5;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">byte</span> z <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        z <span class="token operator">+=</span> <span class="token number">128</span><span class="token punctuation">;</span> <span class="token comment">//等同于：z = (byte)(z + 128);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//-128【损失精度】</span>
        z <span class="token operator">+=</span> <span class="token number">10000</span><span class="token punctuation">;</span> <span class="token comment">//等同于：z = (byte)(z + 10000);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//-112【损失精度】</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、三元运算符" tabindex="-1"><a class="header-anchor" href="#五、三元运算符" aria-hidden="true">#</a> 五、三元运算符</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
    三元运算符/三目运算符/条件运算符
       1、语法规则：
          布尔表达式 ？ 表达式1 ：表达式2

       2、三元运算符的执行原理？
          当布尔表达式的结果是true，选表达式1作为整个表达式的执行结果
          当布尔表达式的结果是false，选表达式2作为整个表达式的执行结果
 */</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperatorTest06</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//编译错误，因为不是一个完整的Java语句</span>
        <span class="token comment">//10;</span>
        <span class="token comment">//&#39;男&#39;;</span>

        <span class="token keyword">boolean</span> sex <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token comment">//编译报错，因为不是一个完整的Java语句</span>
        <span class="token comment">//sex ? &#39;男&#39; : &#39;女&#39;;</span>

        <span class="token keyword">char</span> c <span class="token operator">=</span> sex <span class="token operator">?</span> <span class="token char">&#39;男&#39;</span> <span class="token operator">:</span> <span class="token char">&#39;女&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

        sex <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        c <span class="token operator">=</span> <span class="token punctuation">(</span>sex <span class="token operator">?</span> <span class="token char">&#39;男&#39;</span> <span class="token operator">:</span> <span class="token char">&#39;女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//语法错误，编译报错，结果可能是String，也可能是char，但是前边不能用char来接收数据</span>
        <span class="token comment">//类型不兼容</span>
        <span class="token comment">//char c1 = sex ? &quot;男&quot; : &#39;女&#39;;</span>

        <span class="token comment">//编译报错，类型不兼容</span>
        <span class="token comment">//sex = false;</span>
        <span class="token comment">//char c1 = sex ? &quot;男&quot; : &#39;女&#39;;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//可以</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sex <span class="token operator">?</span> <span class="token string">&quot;男&quot;</span> <span class="token operator">:</span> <span class="token char">&#39;女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> s <span class="token operator">=</span> sex <span class="token operator">?</span> <span class="token string">&quot;男的&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;女的&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取较大值：</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token comment">//获取两个数据中的较大值</span>
        <span class="token keyword">int</span> max <span class="token operator">=</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;max:&quot;</span> <span class="token operator">+</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、加号的作用" tabindex="-1"><a class="header-anchor" href="#六、加号的作用" aria-hidden="true">#</a> 六、加号的作用</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   1、当我们要输出一个长于一行的字符串时，需要用字符串拼接操作将一个字符串拼接在另一个字符串后面。
      字符串拼接运算符为“+”。

   2、数值 + 数值 输出为 数值
      字符串 +数值 输出时 后面的数值拼接在字符串后面

 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CharacterStringTest01</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//We present the following facts for your extracurricular edification.</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;We present the following facts for your &quot;</span>
                           <span class="token operator">+</span> <span class="token string">&quot;extracurricular edification.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//24 and 45 concatenated:2445</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;24 and 45 concatenated:&quot;</span> <span class="token operator">+</span> <span class="token number">24</span> <span class="token operator">+</span> <span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//24 and 45 added:69</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;24 and 45 added:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">+</span> <span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//69</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">+</span> <span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2445</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;24&quot;</span> <span class="token operator">+</span> <span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
   关于Java中的“+”第一章.运算符：
      1、两个作用：
          *加法运算，求和
          *字符串的连接运算

      2、当“+”运算符两边的数据都是数字的话，一定是进行加法运算

      3、当“+”运算符两边的数据只要有一个数据是字符串，一定会进行字符串连接运算
         并且，连接运算之后的结果还是一个字符串类型

            数字 + 数字 --&gt; 数字 【求和】
            数字 + “第一章.字符串” --&gt; “第一章.字符串” 【字符串连接】

      4、在一个表达式当中可以出现多个“+”，在没有添加小括号的前提之下，遵循自左向右的顺序依次计算
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperatorTest05</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//求和</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">+</span> <span class="token number">20</span> <span class="token operator">+</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//60</span>
        <span class="token comment">//自左向右的顺序依次运算，第一个加号是求和，第二个加号是字符串连接</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">+</span> <span class="token number">20</span> <span class="token operator">+</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3030</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">20</span> <span class="token operator">+</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//102030</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>

        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

        <span class="token comment">//要求在控制台上输出 “10 + 20 = 30”</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10 + 20 = 30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//注意：要求以动态的方式输出</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10 + 20 = &quot;</span> <span class="token operator">+</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10 + 20 = 1020</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;10 + 20 = &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10 + 20 = 30</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; + &quot;</span> <span class="token operator">+</span> b <span class="token operator">+</span><span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10 + 20 = 30 【且是动态】</span>

        a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        b <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token string">&quot; + &quot;</span> <span class="token operator">+</span> b <span class="token operator">+</span><span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//100 + 200 = 300</span>

        <span class="token comment">//引用类型String</span>
        <span class="token comment">//String是SUN在JavaSE当中提供的字符串类型</span>
        <span class="token comment">//String.class字节码文件</span>

        <span class="token comment">//int是基本数据类型，i是变量名，10是int类型的字面值</span>
        <span class="token comment">//int i = 10;</span>

        <span class="token comment">//String是引用数据类型，s是变量名，“abc”是String类型的字面值</span>
        <span class="token comment">//String s = &quot;abc&quot;;</span>

        <span class="token comment">//编译错误，类型不兼容</span>
        <span class="token comment">//String ss = 10;</span>

        <span class="token comment">//定义一个String类型的变量，起名username，赋值&quot;zhangsan&quot;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登陆成功，欢迎&quot;</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token string">&quot;回来&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//登陆成功，欢迎zhangsan回来</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、其他" tabindex="-1"><a class="header-anchor" href="#七、其他" aria-hidden="true">#</a> 七、其他</h2>`,14),k=n("li",null,[n("p",null,"length()返回字符串长度时，空格也占一个长度")],-1),r={href:"https://blog.csdn.net/weixin_30622181/article/details/97046282?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_paycolumn_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_paycolumn_v2&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"},d=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;127&quot;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;127&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;128&quot;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;128&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;128&quot;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;128&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
输出：
true
false
true
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(v,b){const t=e("ExternalLinkIcon");return c(),o("div",null,[u,n("ol",null,[k,n("li",null,[n("p",null,[s("关于"),n("a",r,[s("Integer.valueOf(String) 方法"),l(t)])])])]),d])}const g=p(i,[["render",m],["__file","06-运算符.html.vue"]]);export{g as default};
