import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as o,a as n,b as i,d as p,e as c}from"./app-5d9be98b.js";const d={},l=c(`<h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述" aria-hidden="true">#</a> 一、概述</h2><p>索引支持在 MongoDB 中高效地执行查询.如果没有索引, MongoDB 必须执行全集合扫描, 即扫描集合中的每个文档, 以选择与查询语句 匹配的文档.这种扫描全集合的查询效率是非常低的, 特别在处理大量的数据时, 查询可以要花费几十秒甚至几分钟, 这对网站的性能是非常致命的.</p><p>如果查询存在适当的索引, MongoDB 可以使用该索引限制必须检查的文档数.</p><p>索引是特殊的数据结构, 它以易于遍历的形式存储集合数据集的一小部分.索引存储特定字段或一组字段的值, 按字段值排序.索引项的排 序支持有效的相等匹配和基于范围的查询操作.此外, MongoDB 还可以使用索引中的排序返回排序结果.</p><p>MongoDB 使用的是 B Tree, MySQL 使用的是 B+ Tree</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// create index</span>
db<span class="token punctuation">.</span><span class="token operator">&lt;</span>collection_name<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">userid</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// retrieve indexes</span>
db<span class="token punctuation">.</span><span class="token operator">&lt;</span>collection_name<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">getIndexes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// remove indexes</span>
db<span class="token punctuation">.</span><span class="token operator">&lt;</span>collection_name<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">dropIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

<span class="token comment">// there are 2 ways to remove indexes:</span>
<span class="token comment">// 1. removed based on the index name</span>
<span class="token comment">// 2. removed based on the fields</span>

db<span class="token punctuation">.</span><span class="token operator">&lt;</span>collection_name<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">dropIndex</span><span class="token punctuation">(</span> <span class="token string">&quot;userid_1_username_-1&quot;</span> <span class="token punctuation">)</span>
db<span class="token punctuation">.</span><span class="token operator">&lt;</span>collection_name<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">dropIndex</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">userid</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// remove all the indexes, will only remove non_id indexes</span>
db<span class="token punctuation">.</span><span class="token operator">&lt;</span>collection_name<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">dropIndexes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、索引的类型" tabindex="-1"><a class="header-anchor" href="#二、索引的类型" aria-hidden="true">#</a> 二、索引的类型</h2><h3 id="_1-单字段索引" tabindex="-1"><a class="header-anchor" href="#_1-单字段索引" aria-hidden="true">#</a> 1.单字段索引</h3><p>MongoDB 支持在文档的单个字段上创建用户定义的<strong>升序/降序索引</strong>, 称为<strong>单字段索引</strong> Single Field Index</p><p>对于单个字段索引和排序操作, 索引键的排序顺序（即升序或降序）并不重要, 因为 MongoDB 可以在任何方向上遍历索引.</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200957514.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-复合索引" tabindex="-1"><a class="header-anchor" href="#_2-复合索引" aria-hidden="true">#</a> 2.复合索引</h3><p>MongoDB 还支持多个字段的用户定义索引, 即复合索引 Compound Index</p><p>复合索引中列出的字段顺序具有重要意义.例如, 如果复合索引由 <code>{ userid: 1, score: -1 }</code> 组成, 则索引首先按 <code>userid</code> 正序排序, 然后 在每个 <code>userid</code> 的值内, 再在按 <code>score</code> 倒序排序.</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200957503.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-其他索引" tabindex="-1"><a class="header-anchor" href="#_3-其他索引" aria-hidden="true">#</a> 3.其他索引</h3><ul><li>地理空间索引 Geospatial Index</li><li>文本索引 Text Indexes</li><li>哈希索引 Hashed Indexes</li></ul><h4 id="地理空间索引-geospatial-index" tabindex="-1"><a class="header-anchor" href="#地理空间索引-geospatial-index" aria-hidden="true">#</a> 地理空间索引（Geospatial Index）</h4><p>为了支持对地理空间坐标数据的有效查询, MongoDB 提供了两种特殊的索引: 返回结果时使用平面几何的二维索引和返回结果时使用球面几何的二维球面索引.</p><h4 id="文本索引-text-indexes" tabindex="-1"><a class="header-anchor" href="#文本索引-text-indexes" aria-hidden="true">#</a> 文本索引（Text Indexes）</h4><p>MongoDB 提供了一种文本索引类型, 支持在集合中搜索字符串内容.这些文本索引不存储特定于语言的停止词（例如 &quot;the&quot;, &quot;a&quot;, &quot;or&quot;）, 而将集合中的词作为词干, 只存储根词.</p><h4 id="哈希索引-hashed-indexes" tabindex="-1"><a class="header-anchor" href="#哈希索引-hashed-indexes" aria-hidden="true">#</a> 哈希索引（Hashed Indexes）</h4><p>为了支持基于散列的分片, MongoDB 提供了散列索引类型, 它对字段值的散列进行索引.这些索引在其范围内的值分布更加随机, 但只支持相等匹配, 不支持基于范围的查询.</p><h2 id="三、索引的管理操作" tabindex="-1"><a class="header-anchor" href="#三、索引的管理操作" aria-hidden="true">#</a> 三、索引的管理操作</h2><h3 id="_1-索引的查看" tabindex="-1"><a class="header-anchor" href="#_1-索引的查看" aria-hidden="true">#</a> 1.索引的查看</h3><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.getIndexes()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认 <code>_id</code> 索引： MongoDB 在创建集合的过程中, 在 <code>_id</code> 字段上创建一个唯一的索引, 默认名字为 <code>_id</code> , 该索引可防止客户端插入两个具有相同值的文 档, 不能在 <code>_id</code> 字段上删除此索引.</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该索引是<strong>唯一索引</strong>, 因此值不能重复, 即 <code>_id</code> 值不能重复的.</p></div><p>在分片集群中, 通常使用 <code>_id</code> 作为<strong>片键</strong>.</p><h3 id="_2-索引的创建" tabindex="-1"><a class="header-anchor" href="#_2-索引的创建" aria-hidden="true">#</a> 2.索引的创建</h3><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.createIndex(keys, options)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200958687.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>options（更多选项）列表</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200958447.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注意在 3.0.0 版本前创建索引方法为 <code>db.collection.ensureIndex()</code> , 之后的版本使用了 <code>db.collection.createIndex()</code> 方法, <code>ensureIndex()</code> 还能用, 但只是 <code>createIndex()</code> 的别名.</p><p>举个例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$  db.comment.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>userid:1<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;createdCollectionAutomatically&quot;</span> <span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;numIndexesBefore&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>,
  <span class="token string">&quot;numIndexesAfter&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>,
  <span class="token string">&quot;ok&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

$ db.comment.createIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>userid:1,nickname:-1<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">..</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-索引的删除" tabindex="-1"><a class="header-anchor" href="#_3-索引的删除" aria-hidden="true">#</a> 3.索引的删除</h3><p>语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除某一个索引</span>
$ db.collection.dropIndex<span class="token punctuation">(</span>index<span class="token punctuation">)</span>

<span class="token comment"># 删除全部索引</span>
$ db.collection.dropIndexes<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>_id</code> 的字段的索引是无法删除的, 只能删除非 <code>_id</code> 字段的索引</p></div><p>示例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除 comment 集合中 userid 字段上的升序索引</span>
$ db.comment.dropIndex<span class="token punctuation">(</span><span class="token punctuation">{</span>userid:1<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、索引使用" tabindex="-1"><a class="header-anchor" href="#四、索引使用" aria-hidden="true">#</a> 四、索引使用</h2><h3 id="_1-执行计划" tabindex="-1"><a class="header-anchor" href="#_1-执行计划" aria-hidden="true">#</a> 1.执行计划</h3><p>分析查询性能 (Analyze Query Performance) 通常使用执行计划 (解释计划 - Explain Plan) 来查看查询的情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ db.<span class="token operator">&lt;</span>collection_name<span class="token operator">&gt;</span>.find<span class="token punctuation">(</span> query, options <span class="token punctuation">)</span>.explain<span class="token punctuation">(</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如: 查看根据 <code>user_id</code> 查询数据的情况</p><p><strong>未添加索引之前</strong></p><p><code>&quot;stage&quot; : &quot;COLLSCAN&quot;</code>, 表示全集合扫描</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309200958208.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>添加索引之后</strong></p><p><code>&quot;stage&quot; : &quot;IXSCAN&quot;</code>, 基于索引的扫描</p><h3 id="_2-涵盖的查询" tabindex="-1"><a class="header-anchor" href="#_2-涵盖的查询" aria-hidden="true">#</a> 2.涵盖的查询</h3><p>当查询条件和查询的投影仅包含索引字段是, MongoDB 直接从索引返回结果, 而不扫描任何文档或将文档带入内存, 这些覆盖的查询十分有效</p>`,58),r={href:"https://docs.mongodb.com/manual/core/query-optimization/#covered-query",target:"_blank",rel:"noopener noreferrer"};function u(m,h){const a=e("ExternalLinkIcon");return t(),o("div",null,[l,n("blockquote",null,[n("p",null,[n("a",r,[i("https://docs.mongodb.com/manual/core/query-optimization/#covered-query"),p(a)])])])])}const g=s(d,[["render",u],["__file","05-MongoDB索引.html.vue"]]);export{g as default};
