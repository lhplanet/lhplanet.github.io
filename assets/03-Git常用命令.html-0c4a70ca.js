import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as l,a as n,b as a,e as o,d as c}from"./app-4cbdd69f.js";const p={},r=n("hr",null,null,-1),d=n("thead",null,[n("tr",null,[n("th",null,"命令名称"),n("th",null,"作用")])],-1),u={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},h=n("td",null,"设置用户签名",-1),m=n("tr",null,[n("td",null,"git config --global user.email 邮箱"),n("td",null,"设置用户签名")],-1),v=n("tr",null,[n("td",null,"git init"),n("td",null,"初始化本地库")],-1),g=n("tr",null,[n("td",null,"git status"),n("td",null,"查看本地库状态")],-1),b=n("tr",null,[n("td",null,"git add 文件名"),n("td",null,"添加到暂存区")],-1),k=n("tr",null,[n("td",null,'git commit -m "日志信息" 文件名'),n("td",null,"提交到本地库")],-1),f=n("tr",null,[n("td",null,"git reflog"),n("td",null,"查看历史记录")],-1),x=n("tr",null,[n("td",null,"git reset --hard 版本号"),n("td",null,"版本穿梭")],-1),y=c(`<h2 id="一、设置用户签名" tabindex="-1"><a class="header-anchor" href="#一、设置用户签名" aria-hidden="true">#</a> 一、设置用户签名</h2><h3 id="_1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-基本语法" aria-hidden="true">#</a> 1.基本语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token comment"># 用户名</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token comment"># 邮箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-案例实操" tabindex="-1"><a class="header-anchor" href="#_2-案例实操" aria-hidden="true">#</a> 2.案例实操</h3><p>全局范围的签名设置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name Layne
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email Layne@atguigu.com
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">cat</span> ~/.gitconfig
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
    name <span class="token operator">=</span> Layne
    email <span class="token operator">=</span> Layne@atguigu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">说明</p><p>签名的作用是区分不同操作者身份。用户的签名信息在每一个版本的提交信息中能够看到，以此确认本次提交是谁做的。<strong>Git 首次安装必须设置一下用户签名，否则无法提交代码</strong>。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里设置用户签名和将来登录 GitHub（或其他代码托管中心）的账号没有任何关系。</p></div><h2 id="二、初始化本地库" tabindex="-1"><a class="header-anchor" href="#二、初始化本地库" aria-hidden="true">#</a> 二、初始化本地库</h2><h3 id="_1-基本语法-1" tabindex="-1"><a class="header-anchor" href="#_1-基本语法-1" aria-hidden="true">#</a> 1.基本语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-案例实操-1" tabindex="-1"><a class="header-anchor" href="#_2-案例实操-1" aria-hidden="true">#</a> 2.案例实操</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720
$ <span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> D:/Git-Space/SH0720/.git/

Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ ll <span class="token parameter variable">-a</span>
total <span class="token number">4</span>
drwxr-xr-x <span class="token number">1</span> Layne <span class="token number">197609</span> <span class="token number">0</span> <span class="token number">11</span> 月 <span class="token number">25</span> <span class="token number">14</span>:07 ./
drwxr-xr-x <span class="token number">1</span> Layne <span class="token number">197609</span> <span class="token number">0</span> <span class="token number">11</span> 月 <span class="token number">25</span> <span class="token number">14</span>:07 <span class="token punctuation">..</span>/
drwxr-xr-x <span class="token number">1</span> Layne <span class="token number">197609</span> <span class="token number">0</span> <span class="token number">11</span> 月 <span class="token number">25</span> <span class="token number">14</span>:07 .git/ <span class="token comment"># .git 初始化的效果，生成 git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-结果查看" tabindex="-1"><a class="header-anchor" href="#_3-结果查看" aria-hidden="true">#</a> 3.结果查看</h3><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309190856302.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、查看本地库状态" tabindex="-1"><a class="header-anchor" href="#三、查看本地库状态" aria-hidden="true">#</a> 三、查看本地库状态</h2><h3 id="_1-基本语法-2" tabindex="-1"><a class="header-anchor" href="#_1-基本语法-2" aria-hidden="true">#</a> 1.基本语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-案例实操-2" tabindex="-1"><a class="header-anchor" href="#_2-案例实操-2" aria-hidden="true">#</a> 2.案例实操</h3><h4 id="首次查看-工作区没有任何文件" tabindex="-1"><a class="header-anchor" href="#首次查看-工作区没有任何文件" aria-hidden="true">#</a> 首次查看（工作区没有任何文件）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

nothing to commit <span class="token punctuation">(</span>create/copy files and use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新增文件-hello-txt" tabindex="-1"><a class="header-anchor" href="#新增文件-hello-txt" aria-hidden="true">#</a> 新增文件（hello.txt）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt
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
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="再次查看-检测到未追踪的文件" tabindex="-1"><a class="header-anchor" href="#再次查看-检测到未追踪的文件" aria-hidden="true">#</a> 再次查看（检测到未追踪的文件）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
No commits yet
Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
  
      hello.txt
      
nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、添加暂存区" tabindex="-1"><a class="header-anchor" href="#四、添加暂存区" aria-hidden="true">#</a> 四、添加暂存区</h2><h3 id="_1-基本语法-3" tabindex="-1"><a class="header-anchor" href="#_1-基本语法-3" aria-hidden="true">#</a> 1.基本语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-案例实操-3" tabindex="-1"><a class="header-anchor" href="#_2-案例实操-3" aria-hidden="true">#</a> 2.案例实操</h3><h4 id="将工作区的文件添加到暂存区" tabindex="-1"><a class="header-anchor" href="#将工作区的文件添加到暂存区" aria-hidden="true">#</a> 将工作区的文件添加到暂存区</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> hello.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看状态-检测到暂存区有新文件" tabindex="-1"><a class="header-anchor" href="#查看状态-检测到暂存区有新文件" aria-hidden="true">#</a> 查看状态（检测到暂存区有新文件）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master

No commits yet

Changes to be committed:
    <span class="token punctuation">(</span>use <span class="token string">&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

        new file: hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、提交本地库" tabindex="-1"><a class="header-anchor" href="#五、提交本地库" aria-hidden="true">#</a> 五、提交本地库</h2><h3 id="_1-基本语法-4" tabindex="-1"><a class="header-anchor" href="#_1-基本语法-4" aria-hidden="true">#</a> 1.基本语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;日志信息&quot;</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-案例实操-4" tabindex="-1"><a class="header-anchor" href="#_2-案例实操-4" aria-hidden="true">#</a> 2.案例实操</h3><h4 id="将暂存区的文件提交到本地库" tabindex="-1"><a class="header-anchor" href="#将暂存区的文件提交到本地库" aria-hidden="true">#</a> 将暂存区的文件提交到本地库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;my first commit&quot;</span> hello.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> hello.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory.
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 86366fa<span class="token punctuation">]</span> my first commit
<span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">16</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
create mode <span class="token number">100644</span> hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看状态-没有文件需要提交" tabindex="-1"><a class="header-anchor" href="#查看状态-没有文件需要提交" aria-hidden="true">#</a> 查看状态（没有文件需要提交）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、修改文件-hello-txt" tabindex="-1"><a class="header-anchor" href="#六、修改文件-hello-txt" aria-hidden="true">#</a> 六、修改文件（hello.txt）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">vim</span> hello.txt
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span> <span class="token number">2222222222222</span>
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
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-查看状态-检测到工作区有文件被修改" tabindex="-1"><a class="header-anchor" href="#_1-查看状态-检测到工作区有文件被修改" aria-hidden="true">#</a> 1.查看状态（检测到工作区有文件被修改）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>
  
    modified: hello.txt

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-将修改的文件再次添加暂存区" tabindex="-1"><a class="header-anchor" href="#_2-将修改的文件再次添加暂存区" aria-hidden="true">#</a> 2.将修改的文件再次添加暂存区</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> <span class="token function">add</span> hello.txt
warning: LF will be replaced by CRLF <span class="token keyword">in</span> hello.txt.
The <span class="token function">file</span> will have its original line endings <span class="token keyword">in</span> your working directory.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-查看状态-工作区的修改添加到了暂存区" tabindex="-1"><a class="header-anchor" href="#_3-查看状态-工作区的修改添加到了暂存区" aria-hidden="true">#</a> 3.查看状态（工作区的修改添加到了暂存区）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>
  
    modified: hello.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、历史版本" tabindex="-1"><a class="header-anchor" href="#七、历史版本" aria-hidden="true">#</a> 七、历史版本</h2><h3 id="_1-查看历史版本" tabindex="-1"><a class="header-anchor" href="#_1-查看历史版本" aria-hidden="true">#</a> 1.查看历史版本</h3><h4 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog <span class="token comment"># 查看版本信息</span>
<span class="token function">git</span> log <span class="token comment"># 查看版本详细信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例实操" tabindex="-1"><a class="header-anchor" href="#案例实操" aria-hidden="true">#</a> 案例实操</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
087a1a7 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: commit: my third commit
ca8ded6 HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit: my second commit
86366fa HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: my first commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-版本穿梭" tabindex="-1"><a class="header-anchor" href="#_2-版本穿梭" aria-hidden="true">#</a> 2.版本穿梭</h3><h4 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1" aria-hidden="true">#</a> 基本语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="案例实操-1" tabindex="-1"><a class="header-anchor" href="#案例实操-1" aria-hidden="true">#</a> 案例实操</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 首先查看当前的历史记录，可以看到当前是在 087a1a7 这个版本</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
087a1a7 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: commit: my third commit
ca8ded6 HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit: my second commit
86366fa HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: my first commit

<span class="token comment"># 切换到 86366fa 版本，也就是我们第一次提交的版本</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 86366fa
HEAD is now at 86366fa my first commit

<span class="token comment"># 切换完毕之后再查看历史记录，当前成功切换到了 86366fa 版本</span>
Layne@LAPTOP-Layne MINGW64 /d/Git-Space/SH0720 <span class="token punctuation">(</span>master<span class="token punctuation">)</span>
$ <span class="token function">git</span> reflog
86366fa <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: reset: moving to 86366fa
087a1a7 HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: commit: my third commit
ca8ded6 HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit: my second commit
86366fa <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: my first commit

<span class="token comment"># 然后查看文件 hello.txt，发现文件内容已经变化</span>
$ <span class="token function">cat</span> hello.txt
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
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
hello git<span class="token operator">!</span> hello atguigu<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 切换版本，底层其实是移动的 HEAD 指针，具体原理如下图所示：</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202309190919760.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,62);function _(L,G){const s=i("ExternalLinkIcon");return t(),l("div",null,[r,n("table",null,[d,n("tbody",null,[n("tr",null,[n("td",null,[a("git config --global "),n("a",u,[a("user.name"),o(s)]),a(" 用户名")]),h]),m,v,g,b,k,f,x])]),y])}const H=e(p,[["render",_],["__file","03-Git常用命令.html.vue"]]);export{H as default};
