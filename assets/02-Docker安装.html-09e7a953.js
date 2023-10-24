import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as s,a as d,b as e,e as n,d as r}from"./app-6f631a46.js";const o={},t=d("h2",{id:"centos安装docker",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#centos安装docker","aria-hidden":"true"},"#"),e(" CentOS安装Docker")],-1),u={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本" aria-hidden="true">#</a> 卸载旧版本</h2><p>如果之前安装过Docker，需要先卸载旧版本：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sudo yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>旧版本的Docker引擎包可能叫做：<code>docker</code>、<code>docker-engine</code>。</p><p>新版本的Docker引擎包叫做：<code>docker-ce</code></p><h2 id="配置yum资源库" tabindex="-1"><a class="header-anchor" href="#配置yum资源库" aria-hidden="true">#</a> 配置yum资源库</h2><p>安装<code>yum-config-manager</code>：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># yum-util提供yum-config-manager功能 
sudo yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置docker的资源库地址：</p><p>官方地址：（比较慢，不推荐）</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 在yum资源库中添加docker资源库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>阿里云镜像地址：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),v={href:"https://mirrors.aliyun.com",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>创建缓存（可选）：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装docker引擎" tabindex="-1"><a class="header-anchor" href="#安装docker引擎" aria-hidden="true">#</a> 安装Docker引擎</h2><p>安装最新版本的Docker引擎、Docker客户端：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># docker-ce是Docker引擎，docker-ce-cli是客户端
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，默认安装的docker引擎、客户端都是最新版本。</p><p>如果要安装指定版本：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 查询版本列表
yum list docker-ce --showduplicates | sort -r

# 指定版本安装17.09.0.ce版
# sudo yum install docker-ce-&lt;VERSION_STRING&gt; docker-ce-cli-&lt;VERSION_STRING&gt; containerd.io docker-compose-plugin
sudo yum install docker-ce-17.09.0.ce docker-ce-cli-17.09.0.ce containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动docker引擎" tabindex="-1"><a class="header-anchor" href="#启动docker引擎" aria-hidden="true">#</a> 启动docker引擎</h2><p>如果没有启动Docker引擎，那么执行 docker version查看版本号时，只能看到 Client: Docker Engine（Docker引擎客户端）的版本号。</p><p>启动Docker引擎：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 新版本的Docker就是一个系统服务，可以直接使用启动系统服务方式启动
systemctl start docker

# 此时查看docker版本，可以看到Server: Docker Engine（Docker引擎）版本号
docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载docker" tabindex="-1"><a class="header-anchor" href="#卸载docker" aria-hidden="true">#</a> 卸载Docker</h2><p>卸载Docker步骤：</p><ol><li>关闭服务</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用yum删除docker引擎</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>sudo yum remove docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>删除镜像、容器、卷、自定义配置等文件</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code> sudo rm -rf /var/lib/docker
 sudo rm -rf /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行helloworld测试" tabindex="-1"><a class="header-anchor" href="#运行helloworld测试" aria-hidden="true">#</a> 运行HelloWorld测试</h2><p>运行HelloWorld：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23);function p(k,g){const l=a("ExternalLinkIcon");return c(),s("div",null,[t,d("p",null,[e("参考官网："),d("a",u,[e("https://docs.docker.com/engine/install/centos/"),n(l)])]),m,d("p",null,[e("阿里云官网提供了很多资源镜像，镜像地址："),d("a",v,[e("https://mirrors.aliyun.com"),n(l)]),e(", 进入之后可以选择自己需要的资源进行配置")]),h])}const _=i(o,[["render",p],["__file","02-Docker安装.html.vue"]]);export{_ as default};
