const e=JSON.parse('{"key":"v-6da19869","path":"/10_big_data/02_hadoop/03_Hadoop%E8%BF%90%E8%A1%8C%E6%A8%A1%E5%BC%8F.html","title":"03_Hadoop运行模式","lang":"zh-CN","frontmatter":{"title":"03_Hadoop运行模式","date":"2023-11-20T00:00:20.000Z","description":"1）Hadoop官方网站： 2）Hadoop运行模式包括：本地模式、伪分布式模式以及完全分布式模式。 本地模式：单机运行，只是用来演示一下官方案例。生产环境不用。; 伪分布式模式：也是单机运行，但是具备Hadoop集群的所有功能，一台服务器模拟一个分布式的环境。个别缺钱的公司用来测试，生产环境不用。; 完全分布式模式：多台服务器组成分布式环境。生产环境...","head":[["meta",{"property":"og:url","content":"https://lhplanet.github.io/10_big_data/02_hadoop/03_Hadoop%E8%BF%90%E8%A1%8C%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"零号星球图书馆"}],["meta",{"property":"og:title","content":"03_Hadoop运行模式"}],["meta",{"property":"og:description","content":"1）Hadoop官方网站： 2）Hadoop运行模式包括：本地模式、伪分布式模式以及完全分布式模式。 本地模式：单机运行，只是用来演示一下官方案例。生产环境不用。; 伪分布式模式：也是单机运行，但是具备Hadoop集群的所有功能，一台服务器模拟一个分布式的环境。个别缺钱的公司用来测试，生产环境不用。; 完全分布式模式：多台服务器组成分布式环境。生产环境..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T16:09:53.000Z"}],["meta",{"property":"article:author","content":"LHP"}],["meta",{"property":"article:published_time","content":"2023-11-20T00:00:20.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T16:09:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03_Hadoop运行模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-20T00:00:20.000Z\\",\\"dateModified\\":\\"2023-11-19T16:09:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LHP\\",\\"url\\":\\"http://152.136.173.53:8090/\\"}]}"]]},"headers":[{"level":2,"title":"3.1 本地运行模式（官方WordCount）","slug":"_3-1-本地运行模式-官方wordcount","link":"#_3-1-本地运行模式-官方wordcount","children":[]},{"level":2,"title":"3.2 完全分布式运行模式（开发重点）","slug":"_3-2-完全分布式运行模式-开发重点","link":"#_3-2-完全分布式运行模式-开发重点","children":[{"level":3,"title":"3.2.1 虚拟机准备","slug":"_3-2-1-虚拟机准备","link":"#_3-2-1-虚拟机准备","children":[]},{"level":3,"title":"3.2.2 编写集群分发脚本xsync","slug":"_3-2-2-编写集群分发脚本xsync","link":"#_3-2-2-编写集群分发脚本xsync","children":[]},{"level":3,"title":"3.2.3 SSH无密登录配置","slug":"_3-2-3-ssh无密登录配置","link":"#_3-2-3-ssh无密登录配置","children":[]},{"level":3,"title":"3.2.4 集群配置","slug":"_3-2-4-集群配置","link":"#_3-2-4-集群配置","children":[]},{"level":3,"title":"3.2.5 群起集群","slug":"_3-2-5-群起集群","link":"#_3-2-5-群起集群","children":[]},{"level":3,"title":"3.2.6 配置历史服务器","slug":"_3-2-6-配置历史服务器","link":"#_3-2-6-配置历史服务器","children":[]},{"level":3,"title":"3.2.7 配置日志的聚集","slug":"_3-2-7-配置日志的聚集","link":"#_3-2-7-配置日志的聚集","children":[]},{"level":3,"title":"3.2.8 集群启动/停止方式总结","slug":"_3-2-8-集群启动-停止方式总结","link":"#_3-2-8-集群启动-停止方式总结","children":[]},{"level":3,"title":"3.2.9 编写Hadoop集群常用脚本","slug":"_3-2-9-编写hadoop集群常用脚本","link":"#_3-2-9-编写hadoop集群常用脚本","children":[]},{"level":3,"title":"3.2.10 常用端口号说明","slug":"_3-2-10-常用端口号说明","link":"#_3-2-10-常用端口号说明","children":[]},{"level":3,"title":"3.2.11 集群时间同步","slug":"_3-2-11-集群时间同步","link":"#_3-2-11-集群时间同步","children":[]}]}],"git":{"createdTime":1700410193000,"updatedTime":1700410193000,"contributors":[{"name":"lihaopeng","email":"752869332@qq.com","commits":1}]},"readingTime":{"minutes":13.57,"words":4072},"filePathRelative":"10_big_data/02_hadoop/03_Hadoop运行模式.md","localizedDate":"2023年11月20日","autoDesc":true}');export{e as data};
