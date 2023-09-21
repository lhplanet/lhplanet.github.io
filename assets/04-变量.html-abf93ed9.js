import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as e}from"./app-010f293d.js";const t={},p=e(`<h2 id="_1-什么是变量" tabindex="-1"><a class="header-anchor" href="#_1-什么是变量" aria-hidden="true">#</a> 1.什么是变量？</h2><ul><li>变量本质上来说是内存中的一块空间，这块空间有数据类型、有名字、有字面值</li><li>变量包含三部分：数据类型、名称、字面值【数据】</li><li>变量是内存中储存数据的最基本的单元</li></ul><h2 id="_2-数据类型的作用" tabindex="-1"><a class="header-anchor" href="#_2-数据类型的作用" aria-hidden="true">#</a> 2.数据类型的作用？</h2><ul><li>不同的数据有不同的类型，不同的数据类型底层会分配不同大小的空间</li><li>数据类型是指导程序在运行阶段应该分配多大的内存空间</li></ul><h2 id="_3-变量要求" tabindex="-1"><a class="header-anchor" href="#_3-变量要求" aria-hidden="true">#</a> 3.变量要求</h2><p>变量中存储的具体的”数据“必须和变量的”数据类型“一致，当不一致时编译报错</p><h2 id="_4-声明-定义变量的语法格式" tabindex="-1"><a class="header-anchor" href="#_4-声明-定义变量的语法格式" aria-hidden="true">#</a> 4.声明/定义变量的语法格式：</h2><p>只要是合法的标识符就行。规范中要求：首字母小写，后面每个首字母大写</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> i<span class="token punctuation">;</span>
<span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token keyword">int</span> length<span class="token punctuation">;</span>
<span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token keyword">int</span> num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中int是数据类型，其余是变量</p><h2 id="_5-变量声明之后怎么赋值" tabindex="-1"><a class="header-anchor" href="#_5-变量声明之后怎么赋值" aria-hidden="true">#</a> 5.变量声明之后怎么赋值？</h2><p>语法格式：变量名 = 第一章.字面值</p><p>要求：</p><ul><li>字面值的数据类型必须和变量的数据类型一致</li><li>= 等号是一个运算符，叫做赋值运算符，赋值运算符先运算等号右边的表达式</li></ul><p>表达式执行结束之后的结果赋值给左边的变量</p><h2 id="_6-声明和赋值可以放到一起完成" tabindex="-1"><a class="header-anchor" href="#_6-声明和赋值可以放到一起完成" aria-hidden="true">#</a> 6.声明和赋值可以放到一起完成</h2><p>int i = 10;</p><h2 id="_7-变量赋值之后-可以重新赋值-变量的值可以变化" tabindex="-1"><a class="header-anchor" href="#_7-变量赋值之后-可以重新赋值-变量的值可以变化" aria-hidden="true">#</a> 7.变量赋值之后，可以重新赋值，变量的值可以变化:</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
i <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-有了变量的概念之后-内存空间得到了重复的使用" tabindex="-1"><a class="header-anchor" href="#_8-有了变量的概念之后-内存空间得到了重复的使用" aria-hidden="true">#</a> 8.有了变量的概念之后，内存空间得到了重复的使用：</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-通常访问一个变量包括两种访问形式" tabindex="-1"><a class="header-anchor" href="#_9-通常访问一个变量包括两种访问形式" aria-hidden="true">#</a> 9.通常访问一个变量包括两种访问形式</h2><p>第一种：读取变量中保存的具体数据 get/获取</p><p>第二种：修改变量中保存的具体数据 set/设置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>i <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// set</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// get</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-变量在一行上可以声明多个" tabindex="-1"><a class="header-anchor" href="#_10-变量在一行上可以声明多个" aria-hidden="true">#</a> 10.变量在一行上可以声明多个</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-java中的变量必须先声明再赋值-才能访问" tabindex="-1"><a class="header-anchor" href="#_11-java中的变量必须先声明再赋值-才能访问" aria-hidden="true">#</a> 11.Java中的变量必须先声明再赋值，才能访问</h2><p>int i; 程序执行到这里，内存空间并没有开辟出来，变量i并没有初始化</p><p>所以没有初始化之前是无法访问的</p><h2 id="_12-在方法体中的java代码-是遵守自上而下的顺序依次执行的-逐行执行" tabindex="-1"><a class="header-anchor" href="#_12-在方法体中的java代码-是遵守自上而下的顺序依次执行的-逐行执行" aria-hidden="true">#</a> 12.在方法体中的Java代码，是遵守自上而下的顺序依次执行的，逐行执行</h2><p>第一行;</p><p>第二行;</p><p>第三行;</p><p>特点：第二行的代码必须完整的结束之后，第三行程序才能执行</p><h2 id="_13-在同一个-作用域-当中-变量名不能重名-但是变量可以重新赋值" tabindex="-1"><a class="header-anchor" href="#_13-在同一个-作用域-当中-变量名不能重名-但是变量可以重新赋值" aria-hidden="true">#</a> 13.在同一个“作用域”当中，变量名不能重名，但是变量可以重新赋值</h2><h2 id="_14-变量的作用域" tabindex="-1"><a class="header-anchor" href="#_14-变量的作用域" aria-hidden="true">#</a> 14.变量的作用域</h2><p>变量的作用域，其实描述的就是变量的有效范围</p><p>在什么范围内是可以被访问的，只要出了这个范围该变量就无法访问了</p><p>变量的作用域只记住一句话：</p><p>出了大括号就不认识了</p><h2 id="_15-关于变量的分类" tabindex="-1"><a class="header-anchor" href="#_15-关于变量的分类" aria-hidden="true">#</a> 15.关于变量的分类：</h2><p>根据变量声明的位置来分类：</p><ul><li>局部变量 <ul><li>在方法体中声明的变量叫做局部变量</li></ul></li><li>成员变量 <ul><li>在方法体外【类体之内】声明的变量叫做成员变量</li></ul></li></ul><p>在不同的作用域当中，变量名是可以相同的</p><p>在同一个作用域当中，变量名不能重名</p>`,46),i=[p];function c(l,o){return n(),s("div",null,i)}const r=a(t,[["render",c],["__file","04-变量.html.vue"]]);export{r as default};
