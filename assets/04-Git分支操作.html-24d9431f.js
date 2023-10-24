import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as e}from"./app-6f631a46.js";const t={},l=e(`<figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309190925239.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、什么是分支" tabindex="-1"><a class="header-anchor" href="#一、什么是分支" aria-hidden="true">#</a> 一、什么是分支</h2><p>在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时候，不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实也是指针的引用）</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309190926387.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、分支的好处" tabindex="-1"><a class="header-anchor" href="#二、分支的好处" aria-hidden="true">#</a> 二、分支的好处</h2><p>同时并行推进多个功能开发，提高开发效率。</p><p>各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。</p><h2 id="三、分支的操作" tabindex="-1"><a class="header-anchor" href="#三、分支的操作" aria-hidden="true">#</a> 三、分支的操作</h2><table><thead><tr><th>命令名称</th><th>作用</th></tr></thead><tbody><tr><td>git branch 分支名</td><td>创建分支</td></tr><tr><td>git branch -v</td><td>查看分支</td></tr><tr><td>git checkout 分支名</td><td>切换分支</td></tr><tr><td>git merge 分支名</td><td>把指定的分支合并到当前分支上</td></tr></tbody></table><h3 id="_1-查看分支" tabindex="-1"><a class="header-anchor" href="#_1-查看分支" aria-hidden="true">#</a> 1.查看分支</h3><h4 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="案例实操" tabindex="-1"><a class="header-anchor" href="#案例实操" aria-hidden="true">#</a> 案例实操</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
* master 087a1a7 my third commit <span class="token comment"># *代表当前所在的分区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建分支" tabindex="-1"><a class="header-anchor" href="#_2-创建分支" aria-hidden="true">#</a> 2.创建分支</h3><h4 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1" aria-hidden="true">#</a> 基本语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="案例实操-1" tabindex="-1"><a class="header-anchor" href="#案例实操-1" aria-hidden="true">#</a> 案例实操</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch hot-fix
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  hot-fix 087a1a7 my third commit <span class="token comment"># 刚创建的新的分支，并将主分支 master 的内容复制了一份</span>
* master 087a1a7 my third commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-修改分支" tabindex="-1"><a class="header-anchor" href="#_3-修改分支" aria-hidden="true">#</a> 3.修改分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 master 分支上做修改</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt
<span class="token comment"># 添加暂存区</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
<span class="token comment"># 提交本地库</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;my forth commit&quot;</span> hello.txt
<span class="token punctuation">[</span>master f363b4c<span class="token punctuation">]</span> my forth commit
<span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
<span class="token comment"># 查看分支</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-v</span>
  hot-fix 087a1a7 my third commit <span class="token comment"># hot-fix 分支并未做任何改变</span>
* master f363b4c my forth commit <span class="token comment"># 当前 master 分支已更新为最新一次提交的版本</span>
<span class="token comment"># 查看 master 分支上的文件内容</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">2222222222222</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">3333333333333</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> master <span class="token builtin class-name">test</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-切换分支" tabindex="-1"><a class="header-anchor" href="#_4-切换分支" aria-hidden="true">#</a> 4.切换分支</h3><h4 id="基本语法-2" tabindex="-1"><a class="header-anchor" href="#基本语法-2" aria-hidden="true">#</a> 基本语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="案例实操-2" tabindex="-1"><a class="header-anchor" href="#案例实操-2" aria-hidden="true">#</a> 案例实操</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> checkout hot-fix
Switched to branch <span class="token string">&#39;hot-fix&#39;</span>
<span class="token comment"># 发现当先分支已由 master 改为 hot-fix</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
<span class="token comment"># 查看 hot-fix 分支上的文件内容发现与 master 分支上的内容不同</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">2222222222222</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">3333333333333</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
<span class="token comment"># 在 hot-fix 分支上做修改</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">2222222222222</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">3333333333333</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> hot-fix <span class="token builtin class-name">test</span>
<span class="token comment"># 添加暂存区</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
<span class="token comment"># 提交本地库</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>hot-fix<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;hot-fix commit&quot;</span> hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-合并分支" tabindex="-1"><a class="header-anchor" href="#_5-合并分支" aria-hidden="true">#</a> 5.合并分支</h3><h4 id="基本语法-3" tabindex="-1"><a class="header-anchor" href="#基本语法-3" aria-hidden="true">#</a> 基本语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="案例实操-在-master-分支上合并-hot-fix-分支" tabindex="-1"><a class="header-anchor" href="#案例实操-在-master-分支上合并-hot-fix-分支" aria-hidden="true">#</a> 案例实操 在 master 分支上合并 hot-fix 分支</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> merge hot-fix
Auto-merging hello.txt
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> hello.txt
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-产生冲突" tabindex="-1"><a class="header-anchor" href="#_6-产生冲突" aria-hidden="true">#</a> 6.产生冲突</h3><p>冲突产生的表现：后面状态为 MERGING</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">cat</span> hello.txt
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">2222222222222</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">3333333333333</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> master <span class="token builtin class-name">test</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> hot-fix <span class="token builtin class-name">test</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hot-fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>冲突产生的原因：</p><p>合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改。Git 无法替我们决定使用哪一个。必须人为决定新代码内容。</p><p>查看状态（检测到有文件有两处修改）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
You have unmerged paths.
  <span class="token punctuation">(</span>fix conflicts and run <span class="token string">&quot;git commit&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git merge --abort&quot;</span> to abort the merge<span class="token punctuation">)</span>
Unmerged paths:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to mark resolution<span class="token punctuation">)</span>

    both modified: hello.txt
    
no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-解决冲突" tabindex="-1"><a class="header-anchor" href="#_7-解决冲突" aria-hidden="true">#</a> 7.解决冲突</h3><h4 id="编辑有冲突的文件-删除特殊符号-决定要使用的内容" tabindex="-1"><a class="header-anchor" href="#编辑有冲突的文件-删除特殊符号-决定要使用的内容" aria-hidden="true">#</a> 编辑有冲突的文件，删除特殊符号，决定要使用的内容</h4><p>特殊符号：&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD 当前分支的代码 ======= 合并过来的代码 &gt;&gt;&gt;&gt;&gt;&gt;&gt; hot-fix</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">2222222222222</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">3333333333333</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> master <span class="token builtin class-name">test</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> hot-fix <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加到暂存区" tabindex="-1"><a class="header-anchor" href="#添加到暂存区" aria-hidden="true">#</a> 添加到暂存区</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="执行提交-注意-此时使用-git-commit-命令时不能带文件名" tabindex="-1"><a class="header-anchor" href="#执行提交-注意-此时使用-git-commit-命令时不能带文件名" aria-hidden="true">#</a> 执行提交（注意：此时使用 git commit 命令时不能带文件名）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token operator">|</span>MERGING<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;merge hot-fix&quot;</span>
<span class="token punctuation">[</span>master 69ff88d<span class="token punctuation">]</span> merge hot-fix
<span class="token comment"># 发现后面 MERGING 消失，变为正常</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、创建分支和切换分支图解" tabindex="-1"><a class="header-anchor" href="#四、创建分支和切换分支图解" aria-hidden="true">#</a> 四、创建分支和切换分支图解</h2><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309190945544.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>master、hot-fix 其实都是指向具体版本记录的指针。当前所在的分支，其实是由 HEAD 决定的。所以创建分支的本质就是多创建一个指针。</p><p>HEAD 如果指向 master，那么我们现在就在 master 分支上。</p><p>HEAD 如果执行 hotfix，那么我们现在就在 hotfix 分支上。</p><p>所以切换分支的本质就是移动 HEAD 指针。</p>`,52),o=[l];function i(p,r){return n(),s("div",null,o)}const u=a(t,[["render",i],["__file","04-Git分支操作.html.vue"]]);export{u as default};
