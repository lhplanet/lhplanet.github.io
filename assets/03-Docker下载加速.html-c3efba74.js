import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c,a as n,b as e,e as d,d as s}from"./app-42cc0bba.js";const o={},t=n("h2",{id:"docker下载加速",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker下载加速","aria-hidden":"true"},"#"),e(" docker下载加速")],-1),u=n("p",null,"方式1：使用 网易数帆、阿里云等容器镜像仓库进行下载。",-1),m={href:"http://hub.c.163.com",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker pull hub.c.163.com/library/mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方式2：配置阿里云加速。</p><p>登录阿里云，进入 <code>工作台</code> -&gt; <code>容器镜像服务</code> -&gt; <code>镜像工具</code> -&gt; <code>镜像加速器</code>。</p>`,3),h={href:"https://xxxxx.mirror.aliyuncs.com",target:"_blank",rel:"noopener noreferrer"},p=s(`<div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>cd /etc/docker

# 初次进来时没有/etc/docker/daemon.json文件，直接创建该文件即可
vi /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在daemon.json中写入以下内容：（即加速器地址）</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>{
  &quot;registry-mirrors&quot;: [&quot;https://xxxxx.mirror.aliyuncs.com&quot;]  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后刷新配置、重启docker即可：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># centos6 的命令
sudo chkconfig daemon-reload
sudo service docker restart

# centos7 的命令
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式2可以直接下载官方的镜像，且镜像tag为官方tag，不需要加上云服务商的地址。</p><p>例如：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker pull mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8);function b(_,g){const l=a("ExternalLinkIcon");return i(),c("div",null,[t,u,n("p",null,[e("例如，下载网易数帆镜像中的mysql。（网易数帆的地址为 "),n("a",m,[e("hub.c.163.com"),d(l)]),e("，网易数帆对dockerhub官方的镜像命名空间为 library）。")]),v,n("p",null,[e("里面提供了一个加速器地址："),n("a",h,[e("https://xxxxx.mirror.aliyuncs.com"),d(l)]),e("，将该地址配置到docker中：")]),p])}const S=r(o,[["render",b],["__file","03-Docker下载加速.html.vue"]]);export{S as default};
