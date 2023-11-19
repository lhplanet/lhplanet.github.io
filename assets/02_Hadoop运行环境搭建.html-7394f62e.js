import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as t,b as s,d as a,e as l,a as n}from"./app-9a860c23.js";const c={},d=n(`<h2 id="_2-1-模板虚拟机环境准备" tabindex="-1"><a class="header-anchor" href="#_2-1-模板虚拟机环境准备" aria-hidden="true">#</a> 2.1 模板虚拟机环境准备</h2><p>0）安装模板虚拟机，IP地址192.168.10.100、主机名称hadoop100、内存4G、硬盘50G</p><p>1）hadoop100虚拟机配置要求如下（本文Linux系统全部以CentOS-7.5-x86-1804为例）</p><p>（1）使用yum安装需要虚拟机可以正常上网，yum安装前可以先测试下虚拟机联网情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># ping www.baidu.com</span>
PING www.baidu.com <span class="token punctuation">(</span><span class="token number">14.215</span>.177.39<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">14.215</span>.177.39 <span class="token punctuation">(</span><span class="token number">14.215</span>.177.39<span class="token punctuation">)</span>: icmp<span class="token punctuation">\\</span>_seq<span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">8.60</span> ms
<span class="token number">64</span> bytes from <span class="token number">14.215</span>.177.39 <span class="token punctuation">(</span><span class="token number">14.215</span>.177.39<span class="token punctuation">)</span>: icmp<span class="token punctuation">\\</span>_seq<span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">7.72</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）安装epel-release</p><p>注：Extra Packages for Enterprise Linux是为“红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Scientific Linux。相当于是一个软件仓库，大多数rpm包在官方 repository 中是找不到的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># yum install -y epel-release</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）注意：如果Linux安装的是最小系统版，还需要安装如下工具；如果安装的是Linux桌面标准版，不需要执行如下操作</p><ul><li>net-tool：工具包集合，包含ifconfig等命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># yum install -y net-tools </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>vim：编辑器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># yum install -y vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）关闭防火墙，关闭防火墙开机自启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># systemctl stop firewalld</span>
<span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># systemctl disable firewalld.service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：在企业开发时，通常单个服务器的防火墙时关闭的。公司整体对外会设置非常安全的防火墙</p></blockquote><p>3）创建atguigu用户，并修改atguigu用户的密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># useradd atguigu</span>
<span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># passwd atguigu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4）配置atguigu用户具有root权限，方便后期加sudo执行root权限的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sudoers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改/etc/sudoers文件，在%wheel这行下面添加一行，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## Allow root to run any commands anywhere</span>
root    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>     ALL

<span class="token comment">## Allows people in group wheel to run all commands</span>
%wheel  <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>       ALL
atguigu   <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>     NOPASSWD:ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：atguigu这一行不要直接放到root行下面，因为所有用户都属于wheel组，你先配置了atguigu具有免密功能，但是程序执行到%wheel行时，该功能又被覆盖回需要密码。所以atguigu要放到%wheel这行下面。</p></blockquote><p>5）在/opt目录下创建文件夹，并修改所属主和所属组</p><p>（1）在/opt目录下创建module、software文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># mkdir /opt/module</span>
<span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># mkdir /opt/software</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）修改module、software文件夹的所有者和所属组均为atguigu用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># chown atguigu:atguigu /opt/module </span>
<span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># chown atguigu:atguigu /opt/software</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）查看module、software文件夹的所有者和所属组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># cd /opt/</span>
<span class="token punctuation">[</span>root@hadoop100 opt<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">12</span>
drwxr-xr-x. <span class="token number">2</span> atguigu atguigu <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">28</span> <span class="token number">17</span>:18 module
drwxr-xr-x. <span class="token number">2</span> root    root    <span class="token number">4096</span> <span class="token number">9</span>月   <span class="token number">7</span> <span class="token number">2017</span> rh
drwxr-xr-x. <span class="token number">2</span> atguigu atguigu <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">28</span> <span class="token number">17</span>:18 software
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6）卸载虚拟机自带的JDK</p><blockquote><p>注意：如果你的虚拟机是最小化安装不需要执行这一步。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep -i java | xargs -n1 rpm -e --nodeps </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>rpm -qa：查询所安装的所有rpm软件包</li><li>grep -i：忽略大小写</li><li>xargs -n1：表示每次只传递一个参数</li><li>rpm -e –nodeps：强制卸载软件</li></ul><p>7）重启虚拟机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2-克隆虚拟机" tabindex="-1"><a class="header-anchor" href="#_2-2-克隆虚拟机" aria-hidden="true">#</a> 2.2 克隆虚拟机</h2><p>1）利用模板机hadoop100，克隆三台虚拟机：hadoop102 hadoop103 hadoop104</p><blockquote><p>注意：克隆时，要先关闭hadoop100</p></blockquote><p>2）修改克隆机IP，以下以hadoop102举例说明</p><p>（1）修改克隆虚拟机的静态IP</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sysconfig/network-scripts/ifcfg-ens33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33
<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;ens33&quot;</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.10.102
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.10.2
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">192.168</span>.10.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）查看Linux虚拟机的虚拟网络编辑器，编辑-&gt;虚拟网络编辑器-&gt;VMnet8</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119011101.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119011124.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（3）查看Windows系统适配器VMware Network Adapter VMnet8的IP地址</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119011153.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（4）保证Linux系统ifcfg-ens33文件中IP地址、虚拟网络编辑器地址和Windows系统VM8网络IP地址相同。</p><p>3）修改克隆机主机名，以下以hadoop102举例说明</p><p>（1）修改主机名称</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/hostname</span>
hadoop102
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）配置Linux克隆机主机名称映射hosts文件，打开/etc/hosts</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/hosts</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.10.100 hadoop100
<span class="token number">192.168</span>.10.101 hadoop101
<span class="token number">192.168</span>.10.102 hadoop102
<span class="token number">192.168</span>.10.103 hadoop103
<span class="token number">192.168</span>.10.104 hadoop104
<span class="token number">192.168</span>.10.105 hadoop105
<span class="token number">192.168</span>.10.106 hadoop106
<span class="token number">192.168</span>.10.107 hadoop107
<span class="token number">192.168</span>.10.108 hadoop108
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）重启克隆机hadoop102</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop100 ~<span class="token punctuation">]</span><span class="token comment"># reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5）修改windows的主机映射文件（hosts文件）</p><p>（1）如果操作系统是window7，可以直接修改</p><p>（a）进入C:\\Windows\\System32\\drivers\\etc路径</p><p>b）打开hosts文件并添加如下内容，然后保存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.10.100 hadoop100
<span class="token number">192.168</span>.10.101 hadoop101
<span class="token number">192.168</span>.10.102 hadoop102
<span class="token number">192.168</span>.10.103 hadoop103
<span class="token number">192.168</span>.10.104 hadoop104
<span class="token number">192.168</span>.10.105 hadoop105
<span class="token number">192.168</span>.10.106 hadoop106
<span class="token number">192.168</span>.10.107 hadoop107
<span class="token number">192.168</span>.10.108 hadoop108
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）如果操作系统是window10，先拷贝出来，修改保存以后，再覆盖即可</p><p>（a）进入C:\\Windows\\System32\\drivers\\etc路径</p><p>（b）拷贝hosts文件到桌面</p><p>（c）打开桌面hosts文件并添加如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.10.100 hadoop100
<span class="token number">192.168</span>.10.101 hadoop101
<span class="token number">192.168</span>.10.102 hadoop102
<span class="token number">192.168</span>.10.103 hadoop103
<span class="token number">192.168</span>.10.104 hadoop104
<span class="token number">192.168</span>.10.105 hadoop105
<span class="token number">192.168</span>.10.106 hadoop106
<span class="token number">192.168</span>.10.107 hadoop107
<span class="token number">192.168</span>.10.108 hadoop108
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（d）将桌面hosts文件覆盖C:\\Windows\\System32\\drivers\\etc路径hosts文件</p><h2 id="_2-3-在hadoop102安装jdk" tabindex="-1"><a class="header-anchor" href="#_2-3-在hadoop102安装jdk" aria-hidden="true">#</a> 2.3 在hadoop102安装JDK</h2><p>1）卸载现有JDK</p><p>注意：安装JDK前，一定确保提前删除了虚拟机自带的JDK。详细步骤见问文档3.1节中卸载JDK步骤。</p><p>2）用XShell传输工具将JDK导入到opt目录下面的software文件夹下面</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119015758.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3）在Linux系统下的opt目录中查看软件包是否导入成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> /opt/software/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看到如下结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jdk-8u212-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4）解压JDK到/opt/module目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 software<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u212-linux-x64.tar.gz <span class="token parameter variable">-C</span> /opt/module/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5）配置JDK环境变量</p><p>（1）新建/etc/profile.d/my_env.sh文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile.d/my<span class="token punctuation">\\</span>_env.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#JAVA\\_HOME</span>
<span class="token builtin class-name">export</span> JAVA<span class="token punctuation">\\</span>_HOME<span class="token operator">=</span>/opt/module/jdk1.8.0<span class="token punctuation">\\</span>_212
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA</span><span class="token punctuation">\\</span>_HOME/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）保存后退出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>:wq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）source一下/etc/profile文件，让新的环境变量PATH生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6）测试JDK是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 ~<span class="token punctuation">]</span>$ <span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果能看到以下结果，则代表Java安装成功。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> version <span class="token string">&quot;1.8.0\\_212&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：重启（如果java -version可以用就不用重启）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-4-在hadoop102安装hadoop" tabindex="-1"><a class="header-anchor" href="#_2-4-在hadoop102安装hadoop" aria-hidden="true">#</a> 2.4 在hadoop102安装Hadoop</h2>`,97),u={href:"https://archive.apache.org/dist/hadoop/common/hadoop-2.7.2/",target:"_blank",rel:"noopener noreferrer"},r=n(`<p>1）用XShell文件传输工具将hadoop-3.1.3.tar.gz导入到opt目录下面的software文件夹下面</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231119015819.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2）进入到Hadoop安装包路径下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /opt/software/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）解压安装文件到/opt/module下面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 software<span class="token punctuation">]</span>$ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> hadoop-3.1.3.tar.gz <span class="token parameter variable">-C</span> /opt/module/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4）查看是否解压成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 software<span class="token punctuation">]</span>$ <span class="token function">ls</span> /opt/module/
hadoop-3.1.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5）将Hadoop添加到环境变量</p><p>（1）获取Hadoop安装路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 hadoop-3.1.3<span class="token punctuation">]</span>$ <span class="token builtin class-name">pwd</span>
/opt/module/hadoop-3.1.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）打开/etc/profile.d/my_env.sh文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 hadoop-3.1.3<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile.d/my<span class="token punctuation">\\</span>_env.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在my_env.sh文件末尾添加如下内容：（shift+g）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#HADOOP\\_HOME</span>
<span class="token builtin class-name">export</span> HADOOP<span class="token punctuation">\\</span>_HOME<span class="token operator">=</span>/opt/module/hadoop-3.1.3
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP</span><span class="token punctuation">\\</span>_HOME/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP</span><span class="token punctuation">\\</span>_HOME/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>保存并退出： <code>:wq</code></li></ul><p>（3）让修改后的文件生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 hadoop-3.1.3<span class="token punctuation">]</span>$ <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6）测试是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 hadoop-3.1.3<span class="token punctuation">]</span>$ hadoop version
Hadoop <span class="token number">3.1</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>7）重启（如果Hadoop命令不能用再重启虚拟机）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 hadoop-3.1.3<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-5-hadoop目录结构" tabindex="-1"><a class="header-anchor" href="#_2-5-hadoop目录结构" aria-hidden="true">#</a> 2.5 Hadoop目录结构</h2><p>1）查看Hadoop目录结构</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>atguigu@hadoop102 hadoop-3.1.3<span class="token punctuation">]</span>$ ll
总用量 <span class="token number">52</span>
drwxr-xr-x. <span class="token number">2</span> atguigu atguigu  <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> bin
drwxr-xr-x. <span class="token number">3</span> atguigu atguigu  <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> etc
drwxr-xr-x. <span class="token number">2</span> atguigu atguigu  <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> include
drwxr-xr-x. <span class="token number">3</span> atguigu atguigu  <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> lib
drwxr-xr-x. <span class="token number">2</span> atguigu atguigu  <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> libexec
-rw-r--r--. <span class="token number">1</span> atguigu atguigu <span class="token number">15429</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> LICENSE.txt
-rw-r--r--. <span class="token number">1</span> atguigu atguigu   <span class="token number">101</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> NOTICE.txt
-rw-r--r--. <span class="token number">1</span> atguigu atguigu  <span class="token number">1366</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> README.txt
drwxr-xr-x. <span class="token number">2</span> atguigu atguigu  <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> sbin
drwxr-xr-x. <span class="token number">4</span> atguigu atguigu  <span class="token number">4096</span> <span class="token number">5</span>月  <span class="token number">22</span> <span class="token number">2017</span> share
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）重要目录</p><p>（1）bin目录：存放对Hadoop相关服务（hdfs，yarn，mapred）进行操作的脚本</p><p>（2）etc目录：Hadoop的配置文件目录，存放Hadoop的配置文件</p><p>（3）lib目录：存放Hadoop的本地库（对数据进行压缩解压缩功能）</p><p>（4）sbin目录：存放启动或停止Hadoop相关服务的脚本</p><p>（5）share目录：存放Hadoop的依赖jar包、文档、和官方案例</p>`,31);function m(b,v){const e=o("ExternalLinkIcon");return i(),t("div",null,[d,s("p",null,[a("Hadoop下载地址："),s("a",u,[a("https://archive.apache.org/dist/hadoop/common/hadoop-3.1.3/"),l(e)])]),r])}const k=p(c,[["render",m],["__file","02_Hadoop运行环境搭建.html.vue"]]);export{k as default};
