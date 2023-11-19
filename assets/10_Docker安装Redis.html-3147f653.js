import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,a as d}from"./app-9a860c23.js";const s={},a=d(`<h2 id="docker安装redis" tabindex="-1"><a class="header-anchor" href="#docker安装redis" aria-hidden="true">#</a> Docker安装Redis</h2><p>以 Redis 6.0.8 为例：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker pull redis:6.0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="单机版安装" tabindex="-1"><a class="header-anchor" href="#单机版安装" aria-hidden="true">#</a> 单机版安装</h2><h3 id="简单版-redis" tabindex="-1"><a class="header-anchor" href="#简单版-redis" aria-hidden="true">#</a> 简单版 Redis</h3><p>简单的启动Redis容器：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker run -p 6379:6379 -d redis:6.0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简单版没有配置容器卷映射，当容器被删除时数据无法恢复。</p><h3 id="实际应用版redis" tabindex="-1"><a class="header-anchor" href="#实际应用版redis" aria-hidden="true">#</a> 实际应用版Redis</h3><p>配置文件、数据文件都和容器卷进行映射。</p><p>步骤：</p><ol><li>宿主机创建目录/app/redis</li><li>在/app/redis下创建文件redis.conf，主要修改以下几项配置</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 开启密码验证（可选）
requirepass 123

# 允许redis外地连接，需要注释掉绑定的IP
# bind 127.0.0.1

# 关闭保护模式（可选）
protected-mode no

# 注释掉daemonize yes，或者配置成 daemonize no。因为该配置和 docker run中的 -d 参数冲突，会导致容器一直启动失败
daemonize no

# 开启redis数据持久化， （可选）
appendonly yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即最后的配置文件为：<br> 3. 启动docker容器：（因为要使用自定义的配置文件，所以需要指定容器运行的命令为redis-server 容器内配置文件路径）</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker run -d -p 6379:6379 --name redis --privileged=true \\
           -v /app/redis/redis.conf:/etc/redis/redis.conf \\
           -v /app/redis/data:/data \\
           redis:6.0.8 \\
           redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集群存储算法" tabindex="-1"><a class="header-anchor" href="#集群存储算法" aria-hidden="true">#</a> 集群存储算法</h2><h3 id="分布式存储算法" tabindex="-1"><a class="header-anchor" href="#分布式存储算法" aria-hidden="true">#</a> 分布式存储算法</h3><p>分布式存储的常见算法：</p><ul><li>哈希取余算法分区</li><li>一致性哈希算法分区</li><li>哈希槽算法分区</li></ul><h3 id="哈希取余算法" tabindex="-1"><a class="header-anchor" href="#哈希取余算法" aria-hidden="true">#</a> 哈希取余算法</h3><p>算法描述：hash(key) % N（其中，key是要存入Redis的键名，N是Redis集群的机器台数）。用户每次读写操作，都是根据传入的键名经过哈希运算，对机器台数取余决定该键存储在哪台服务器上。</p><p>优点：简单直接有效，只需要预估好数据规划好节点，就能保证一段时间的数据支撑。使用Hash算法让固定的一部分请求落到同一台服务器上，这样每台服务器固定处理一部分请求（并维护这些请求的信息），起到负载均衡+分而治之的作用。</p><p>缺点：原来规划好的节点，如果进行了扩容或者缩容，导致节点有变动，映射关系需要重新进行计算。在服务器个数固定不变时没问题，如果需要弹性扩容或者故障停机的情况下，原来取模公式中的 N就会发生变化，此时经过取模运算的结果就会发生很大变化，导致根据公式获取的服务器变得不可控。</p><h3 id="一致性哈希算法" tabindex="-1"><a class="header-anchor" href="#一致性哈希算法" aria-hidden="true">#</a> 一致性哈希算法</h3><p>算法背景：一致性哈希算法是为了解决哈希取余算法中的分布式缓存数据变动和映射问题。当服务器个数发生变化时，尽量减少影响到客户端与服务器的映射关系。</p><p>算法描述：<br> 一致性哈希算法必然有个hash函数并按照算法产生Hash值，这个算法的所有可能哈希值会构成一个全量集，这个集合可以成为一个Hash区间[0, 2^32 - 1]，这是一个线性空间。但是在这个算法中，我们通过适当的逻辑控制将它首尾相连（0 = 2^32），这样让它逻辑上形成了一个环形空间。</p><p>它也是按照使用取模的方式。前面的哈希取余算法是对节点个数进行取模，而一致性哈希算法是对 2^32取模。</p><p>简单来说，一致性Hash算法将整个哈希值空间组成一个虚拟的圆环。如假设某个哈希函数H的值空间为 0到2^32 - 1（即哈希值是一个32位无符号整形），整个哈希环如下图：整个空间按顺时针方向组织，圆环的正上方的点代表0，0点右侧的第一个点代表1，以此类推，2、3、4.......直到2^32 - 1，也就是说0点左侧的第一个点代表 2^32 - 1。0 和 2^32 - 1在零点钟方向重合，我们把这个由 2^32个点组成的圆环称为Hash环。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024111844.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有了哈希环之后，还需要进行节点映射，将集群中各个IP节点映射到环上的某一个位置。</p><p>将各个服务器使用Hash进行一个哈希，具体可以选择服务器的IP或主机名作为关键字进行哈希。这样每台机器就能确定其在哈希环上的位置。</p><p>假如4个节点NodeA、B、C、D，经过IP地址的哈希函数计算（hash(ip)），使用IP地址哈希值后在环空间的位置如下：</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024111900.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>key落到服务器的落键规则。当我们需要存储一个key键值对时，首先计算key的hash值（hash(key)），将这个key使用相同的函数hash，计算出哈希值并确定此数据在环上的位置，从此位置沿环顺时针“行走”，第一台遇到的服务器就是其应该定位到的服务器，并将该键值对存储字该节点上。</p><p>假如我们有ObjectA、B、C、D四个数据对象，经过哈希计算后，在环空间上的位置如下：根据一致性hash算法，数据A会被定位到NodeA上，B被定位到NodeB上，C被定位到NodeC上，D被定位到NodeD上。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024111924.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>假设NodeC宕机，可以看到此时对象A、B、D不会受到影响，只有C对象被重新定位到NodeD。</p><p>一般的，在一致性Hash算法中，如果一台服务器不可用，则受影响的数据仅仅是此服务器到其环空间中前一台服务器（即沿着逆时针方向行走遇到的第一台服务器）之间的数据，其他不会受到影响。</p><p>即：假设NodeC宕机，只会影响到Hash定位到NodeB到NodeC之间的数据，并且这些数据会被转移到NodeD进行存储。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024111934.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>假如需要扩容增加一台节点NodeX，NodeX的hash(ip)位于NodeB和NodeC之间，那受到影响的就是NodeB 到 NodeX 之间的数据。重新将B到X的数据录入到X节点上即可，不会导致Hash取余全部数据重新洗牌的后果。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024111946.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是Hash环会存在数据倾斜问题。</p><p>一致性Hash算法在服务节点太少时，容易因为节点分布不均匀而造成数据倾斜（被缓存的对象都集中到某一台或某几台服务器）。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024112010.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>为了解决数据倾斜问题，一致性哈希算法引入了虚拟节点机制。</p><p>对每一个服务节点计算多个哈希，每个计算结果位置都放置一个此服务节点，称为虚拟节点。具体做法可以先确定每个物理节点关联的虚拟节点数量，然后在IP或主机名后面加上编号。</p><p>例如，可以对NodeA节点虚拟出 NodeA#1、NodeA#2、NodeA#3，对NodeB虚拟出NodeB#1、NodeB#2、NodeB#3的节点，形成六个虚拟节点。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024112020.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>优点：加入和删除节点时，只会影响哈希环中顺时针方向相邻节点，对其他节点无影响。</p><p>缺点：数据的分布和节点的位置有关，因为这些节点不是均匀分布在哈希环上的，所以在数据进行存储时达不到均匀部分的效果。</p><h3 id="哈希槽分区" tabindex="-1"><a class="header-anchor" href="#哈希槽分区" aria-hidden="true">#</a> 哈希槽分区</h3><p>哈希槽分区是为了解决一致性哈希算法的数据倾斜问题。</p><p>哈希槽实质上就是一个数组，数组 [0, 2^14 - 1]形成的 hash slot空间。</p><p>目的是为了解决均匀分配的问题。在数据和节点之间又加入了一层，把这层称之为槽（slot），用于管理数据和节点之间的关系。就相当于节点上放的是槽，槽里面放的是数据。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024112036.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>槽解决的是粒度问题，相当于把粒度变大了，这样便于数据移动。</p><p>哈希解决的是映射问题，使用key的哈希值来计算所在的槽，便于数据分配。</p><p>一个集群只能有 16394个槽，编号 0 - 16383（2^14 - 1）。这些槽会分配给集群中所有的主节点，分配策略没有要求。可以指定哪些编号的槽分配给哪个主节点，集群会记录节点和槽的对应关系。</p><p>解决了节点和槽的关系后，接下来就需要对key求哈希值，然后对16384取余，根据余数决定key落到哪个槽里。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>slot = CRC16(key) % 16384
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以槽为单位移动数据，因为槽的数目是固定的，处理起来比较容易，这样数据移动问题就解决了。</p><h3 id="redis集群存储策略" tabindex="-1"><a class="header-anchor" href="#redis集群存储策略" aria-hidden="true">#</a> Redis集群存储策略</h3><p>Redis集群使用的就是哈希槽。Redis集群有16384个哈希槽，每个key通过CRC16校验后对16384取模来决定放置在哪个槽，集群的每个节点负责一部分hash槽。</p><p>哈希槽数量16384（2^14）的决定原因：<br> CRC16算法产生的hash值有 16bit，该算法可以产生 2^16 = 65536个值。但是为了心跳方便和数据传输最大化，槽的数量只能有 2^14个。</p><ol><li>如果槽位数量为65535个，那么发送心跳信息的消息头将达到 8k，发送的心跳包过于庞大。在消息头中最占空间的是 myslots[CLUSTER_SLOTS/8]。当槽位为65536时，这块的大小是 ：</li></ol><p><code>65536 ÷ 8 ÷ 1024 = 8Kb</code></p><p>每秒中redis节点需要发送一定数量的ping消息作为心跳，如果槽位为65536，那么这个ping消息头就会太大浪费带宽。</p><ol start="2"><li><p>redis集群的主节点数量基本不可能超过1000个。集群节点越多，心跳包的消息体内携带的数据越多。如果节点超过1000个，也会导致网络拥堵。因此redis作者不建议redis cluster节点超过1000个。对于节点数在1000以内的redis cluster集群，16384个槽位足够了，没有必要扩展到65536个。</p></li><li></li><li><p>槽位越小，节点少的情况下压缩比越高，容易传输。Redis主节点的配置信息中它锁负责的哈希槽是通过一张bitmap的形式来保存的，在传输过程中会对bitmap进行压缩，但是如果bitmap的填充率 slots / N（N为节点数）很高的话，bitmap的压缩率就很低。如果节点数很少，而哈希槽数很多的话，bitmap的压缩率就很低。</p><p>原文：<br> 正常的心跳数据包带有节点的完整配置，使得可以用幂等方式用旧的节点替换旧节点，以便更新旧的配置。这意味着它们包含原始节点的插槽配置，该节点使用 2k 的空间和 16k 的插槽，而不是使用 8k 的空间（使用65k的插槽）。<br> 同时，因为其他设计折衷，Redis集群的主节点不太可能扩展到1000个以上</p></li></ol><p>Redis集群中内置了16384个哈希槽，redis会根据节点数量大致均等的将哈希槽映射到不同的节点。当需要在Redis集群中放置一个Key-Value时，redis先对key使用 CRC16 算法算出一个结果，然后把结果对 16384 取余，这样每个key都会对应一个编号在0-16383之间的哈希槽，也就是映射到某个节点上。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/20231024112053.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>@Test<br> public void test() {<br> // import io.lettuce.core.cluster.SlotHash;<br> System.out.println(SlotHash.getSlot(&#39;A&#39;)); // 计算结果6373，存入上图的Node2<br> System.out.println(SlotHash.getSlot(&#39;B&#39;)); // 计算结果10374，存入上图的Node2<br> System.out.println(SlotHash.getSlot(&#39;C&#39;)); // 计算结果14503，存入上图的Node3<br> System.out.println(SlotHash.getSlot(&#39;Hello&#39;)); // 计算结果866，存入上图的Node1<br> }</p><h2 id="_3主3从redis集群" tabindex="-1"><a class="header-anchor" href="#_3主3从redis集群" aria-hidden="true">#</a> 3主3从Redis集群</h2><h3 id="搭建" tabindex="-1"><a class="header-anchor" href="#搭建" aria-hidden="true">#</a> 搭建</h3><p>使用docker搭建3主3从的Redis集群，每台主机都对应一台从机。<br> 启动6台redis容器</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 启动第1台节点
# --net host 使用宿主机的IP和端口，默认
# --cluster-enabled yes 开启redis集群
# --appendonly yes 开启redis持久化
# --port 6381 配置redis端口号
docker run -d --name redis-node-1 --net host --privileged=true -v /app/redis-cluster/share/redis-node-1:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6381

# 启动第2台节点
docker run -d --name redis-node-2 --net host --privileged=true -v /app/redis-cluster/share/redis-node-2:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6382

# 启动第3台节点
docker run -d --name redis-node-3 --net host --privileged=true -v /app/redis-cluster/share/redis-node-3:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6383

# 启动第4台节点
docker run -d --name redis-node-4 --net host --privileged=true -v /app/redis-cluster/share/redis-node-4:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6384

# 启动第5台节点
docker run -d --name redis-node-5 --net host --privileged=true -v /app/redis-cluster/share/redis-node-5:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6385

# 启动第6台节点
docker run -d --name redis-node-6 --net host --privileged=true -v /app/redis-cluster/share/redis-node-6:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6386
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建主从关系：</p><ol><li>进入节点1（或其中任意一个节点）:</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it redis-node-1 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>构建主从关系：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 宿主机IP:端口
redis-cli --cluster create 192.168.xxx.xxx:6381 192.168.xxx.xxx:6382 192.168.xxx.xxx:6383 192.168.xxx.xxx:6384 192.168.xxx.xxx:6385 192.168.xxx.xxx:6386 --cluster-replicas 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>redis尝试自动进行主从节点分配</p></li><li><p>因为我们的docker容器IP相同，所以会出现警告，可以直接忽略该警告</p></li></ol><p><code>[WARNING] Some slaves are in the same host as their master</code></p><ol start="5"><li>redis自动分配结果完成后，需要输入 Yes 确认配置信息：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>M: f451eb48bbc0a7c31c7da022ffe80cc1696e0f37 192.168.xxx.xxx:6381
   slots:[0-5460] (5461 slots) master
M: 05984211b8c38222a73abeff1d4e459c0fe1efbc 192.168.xxx.xxx:6382
   slots:[5461-10922] (5462 slots) master
M: 1fc935c12b1d34a7df50aed643c195eb29bb3435 192.168.xxx.xxx:6383
   slots:[10923-16383] (5461 slots) master
S: f8d0de47114bf33438747acd713cce4e412ae721 192.168.xxx.xxx:6384
   replicates 1fc935c12b1d34a7df50aed643c195eb29bb3435
S: de0b393c17e452d856f6de2b348e9ca4e5aa4002 192.168.xxx.xxx:6385
   replicates f451eb48bbc0a7c31c7da022ffe80cc1696e0f37
S: 0c0767e13a09ee48541738d4163592cd9842c143 192.168.xxx.xxx:6386
   replicates 05984211b8c38222a73abeff1d4e459c0fe1efbc
Can I set the above configuration? (type &#39;yes&#39; to accept):
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>输入Yes确认后，redis会向其他节点发送信息加入集群，并分配哈希槽：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>&gt;&gt;&gt; Nodes configuration updated
&gt;&gt;&gt; Assign a different config epoch to each node
&gt;&gt;&gt; Sending CLUSTER MEET messages to join the cluster
Waiting for the cluster to join
.....
&gt;&gt;&gt; Performing Cluster Check (using node 192.168.xxx.xxx:6381)
M: f451eb48bbc0a7c31c7da022ffe80cc1696e0f37 192.168.xxx.xxx:6381
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
M: 1fc935c12b1d34a7df50aed643c195eb29bb3435 192.168.xxx.xxx:6383
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
M: 05984211b8c38222a73abeff1d4e459c0fe1efbc 192.168.xxx.xxx:6382
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
S: 0c0767e13a09ee48541738d4163592cd9842c143 192.168.xxx.xxx:6386
   slots: (0 slots) slave
   replicates 05984211b8c38222a73abeff1d4e459c0fe1efbc
S: f8d0de47114bf33438747acd713cce4e412ae721 192.168.xxx.xxx:6384
   slots: (0 slots) slave
   replicates 1fc935c12b1d34a7df50aed643c195eb29bb3435
S: de0b393c17e452d856f6de2b348e9ca4e5aa4002 192.168.xxx.xxx:6385
   slots: (0 slots) slave
   replicates f451eb48bbc0a7c31c7da022ffe80cc1696e0f37
[OK] All nodes agree about slots configuration.
&gt;&gt;&gt; Check for open slots...
&gt;&gt;&gt; Check slots coverage...
[OK] All 16384 slots covered.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看集群状态：</p><ol><li>进入容器节点1（或集群中其他节点）：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it redis-node-1 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用redis-cli连接到6381节点：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli -p 6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>使用redis的相关命令查看集群状态：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>cluster info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，分配的哈希槽数量 cluster_slots_assigned为16384，集群节点数量cluster_known_nodes为6</p><ol start="4"><li>查看集群节点信息</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>cluster nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="redis集群读写出错" tabindex="-1"><a class="header-anchor" href="#redis集群读写出错" aria-hidden="true">#</a> Redis集群读写出错</h3><p>当使用 redis-cli连接redis集群时，需要添加 -c参数，否则可能会出现读写出错。</p><p>示例：</p><ol><li>进入容器节点1</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it redis-node-1 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用redis-cli连接，不加-c参数时</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli -p 6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>此时向redis中添加键值对，可能会成功，也可能会失败</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>set k1 v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>报错：k1经过计算得到的哈希槽为12706，但是当前连接的redis-server为6381（即节点1），它的哈希槽为：[0,5460]（在创建构建主从关系时redis有提示，也可以通过 cluster nodes查看），所以会因为存不进去而报错。<br> 执行 set k2 v2可以成功，因为k2计算出的哈希槽在[0-5460]区间中。</p><ol start="4"><li>使用-c参数的redis-cli命令连接即可</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli -p 6381 -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>此时可以正常的插入所有数据</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>set k1 v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会有提示信息，哈希槽为12706，重定向到6383（即节点3，哈希槽[10923, 16383]）：</p><h3 id="集群信息检查" tabindex="-1"><a class="header-anchor" href="#集群信息检查" aria-hidden="true">#</a> 集群信息检查</h3><p>检查查看集群信息：</p><ol><li>进入容器节点1</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it redis-node-1 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>进行集群信息检查</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 输入任意一台主节点地址都可以进行集群检查
redis-cli --cluster check 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回的检查结果：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>当前集群中各个节点存储的key的数量
192.168.xxx.xxx:6381 (f451eb48...) -&gt; 0 keys | 5461 slots | 1 slaves.
192.168.xxx.xxx:6383 (1fc935c1...) -&gt; 1 keys | 5461 slots | 1 slaves.
192.168.xxx.xxx:6382 (05984211...) -&gt; 0 keys | 5462 slots | 1 slaves.
[OK] 1 keys in 3 masters.  
0.00 keys per slot on average.

主从机器信息
&gt;&gt;&gt; Performing Cluster Check (using node 192.168.xxx.xxx:6381)
M: f451eb48bbc0a7c31c7da022ffe80cc1696e0f37 192.168.xxx.xxx:6381
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
M: 1fc935c12b1d34a7df50aed643c195eb29bb3435 192.168.xxx.xxx:6383
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
M: 05984211b8c38222a73abeff1d4e459c0fe1efbc 192.168.xxx.xxx:6382
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
S: 0c0767e13a09ee48541738d4163592cd9842c143 192.168.xxx.xxx:6386
   slots: (0 slots) slave
   replicates 05984211b8c38222a73abeff1d4e459c0fe1efbc
S: f8d0de47114bf33438747acd713cce4e412ae721 192.168.xxx.xxx:6384
   slots: (0 slots) slave
   replicates 1fc935c12b1d34a7df50aed643c195eb29bb3435
S: de0b393c17e452d856f6de2b348e9ca4e5aa4002 192.168.xxx.xxx:6385
   slots: (0 slots) slave
   replicates f451eb48bbc0a7c31c7da022ffe80cc1696e0f37
[OK] All nodes agree about slots configuration.
&gt;&gt;&gt; Check for open slots...
&gt;&gt;&gt; Check slots coverage...
[OK] All 16384 slots covered.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主从扩容缩容" tabindex="-1"><a class="header-anchor" href="#主从扩容缩容" aria-hidden="true">#</a> 主从扩容缩容</h2><h3 id="主从扩容" tabindex="-1"><a class="header-anchor" href="#主从扩容" aria-hidden="true">#</a> 主从扩容</h3><p>假如因为业务量激增，需要向当前3主3从的集群中再加入1主1从两个节点。</p><p>步骤：</p><ol><li>启动2台新的容器节点</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 启动第7台节点
docker run -d --name redis-node-7 --net host --privileged=true -v /app/redis-cluster/share/redis-node-7:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6387

# 启动第8台节点
docker run -d --name redis-node-8 --net host --privileged=true -v /app/redis-cluster/share/redis-node-8:/data redis:6.0.8 --cluster-enabled yes --appendonly yes --port 6388
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>进入6387（节点7）容器内部</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it redis-node-7 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>将6387作为master加入集群</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># redis-cli --cluster add-node 本节点地址 要加入的集群中的其中一个节点地址
redis-cli --cluster add-node 192.168.xxx.xxx:6387 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>检查当前集群状态</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster check 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以发现，6371节点已经作为master加入了集群，但是该节点没有被分配槽位。</p><ol start="5"><li>重新分配集群的槽位</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster reshard 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>redis经过槽位检查后，会提示需要分配的槽位数量：<br> 例如，我们现在是4台master，我们想要给node7分配4096个槽位，这样每个节点都是4096个槽位。<br> 输入4096后，会让输入要接收这些哈希槽的节点ID，填入node7的节点ID即可。（就是节点信息中很长的一串十六进制串）。<br> 然后会提示，询问要从哪些节点中拨出一部分槽位凑足4096个分给Node7。一般选择 all，即将之前的3个主节点的槽位都均一些给Node7，这样可以使得每个节点的槽位数相等均衡。<br> 输入all之后，redis会列出一个计划，内容是自动从前面的3台master中拨出一部分槽位分给Node7的槽位，需要确认一下分配的计划。<br> 输入yes确认后，redis便会自动重新洗牌，给Node7分配槽位。</p><p>重新分配完成后，可以进行集群信息检查，查看分配结果：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster check 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以发现重新洗牌后的槽位分配为：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>节点1：[1365-5460]（供4096个槽位），，，分配前为[0-5460]（共5461个槽位）
节点2：[6827-10922]（共4096个槽位），，，分配前为[5461-10922]（共5461个槽位）
节点3：[12288-16383]（共4096个槽位），，，分配前为[10923-16383]（共5462个槽位）

节点7：[0-1364],[5461-6826],[10923-12287]（共4096个槽位），从每个节点中匀出来了一部分给了节点7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为可能有些槽位中已经存储了key，完全的重新洗牌重新分配的成本过高，所以redis选择从前3个节点中匀出来一部分给节点7</p><p>为主节点6387分配从节点6388：</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster add-node 192.168.xxx.xxx:6388 192.168.xxx.xxx:6381 --cluster-slave --cluster-master-id node7节点的十六进制编号字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>redis便会向6388发送消息，使其加入集群并成为6387的从节点。</p><p>检查集群当前状态</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster check 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="主从缩容" tabindex="-1"><a class="header-anchor" href="#主从缩容" aria-hidden="true">#</a> 主从缩容</h3><p>假如业务高峰期过去，需要将4主4从重新缩容到3主3从。即从集群中移除node8和node7.</p><p>首先删除从节点6388：</p><ol><li>进入容器节点1</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>docker exec -it redis-node-1 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>检查容器状态，获取6388的节点编号</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster check 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>将6388从集群中移除</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster del-node 192.168.xxx.xxx:6388 6388节点编号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对node7重新分配哈希槽：</p><ol><li>对集群重新分配哈希槽</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster reshard 192.168.xxx.xxx:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>redis经过槽位检查后，会提示需要分配的槽位数量：</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>How many slots do you want to move (from 1 to 16384)?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们想直接把node7的4096个哈希槽全部分给某个节点，可以直接输入4096。<br> 输入4096后，会让输入要接收这些哈希槽的节点ID。假如我们想把这4096个槽都分给Node1，直接输入node1节点的编号即可。<br> 然后会提示，询问要从哪些节点中拨出一部分槽位凑足4096个分给Node1。这里我们输入node7的节点编号，回车后输入done。</p><p>node7上面没有了哈希槽，此时便可以将node7从集群中移除。（如果node7上面有哈希槽，直接从集群中移除会报错）</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>redis-cli --cluster del-node 192.168.xxx.xxx:6387 node7节点编号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,163),n=[a];function r(c,t){return i(),l("div",null,n)}const u=e(s,[["render",r],["__file","10_Docker安装Redis.html.vue"]]);export{u as default};
