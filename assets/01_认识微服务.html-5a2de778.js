import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as t,b as n,d as i,e as r,a}from"./app-9a860c23.js";const s={},g=a('<h2 id="一、单体架构" tabindex="-1"><a class="header-anchor" href="#一、单体架构" aria-hidden="true">#</a> 一、单体架构</h2><p><strong>单体架构</strong>：将业务的所有功能集中在一个项目中开发，打成一个包部署。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308192205264.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>单体架构的优缺点如下：</p><p><strong>优点：</strong></p><ul><li>架构简单</li><li>部署成本低</li></ul><p><strong>缺点：</strong></p><ul><li>耦合度高（维护困难、升级困难）</li></ul><h2 id="二、分布式架构" tabindex="-1"><a class="header-anchor" href="#二、分布式架构" aria-hidden="true">#</a> 二、分布式架构</h2><p><strong>分布式架构</strong>：根据业务功能对系统做拆分，每个业务功能模块作为独立项目开发，称为一个服务。</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308192302587.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>分布式架构的优缺点：</p><p><strong>优点：</strong></p><ul><li>降低服务耦合</li><li>有利于服务升级和拓展</li></ul><p><strong>缺点：</strong></p><ul><li>服务调用关系错综复杂</li></ul><p>分布式架构虽然降低了服务耦合，但是服务拆分时也有很多问题需要思考：</p><ul><li>服务拆分的粒度如何界定？</li><li>服务之间如何调用？</li><li>服务的调用关系如何管理？</li></ul><p>人们需要制定一套行之有效的标准来约束分布式架构。</p><h2 id="三、微服务" tabindex="-1"><a class="header-anchor" href="#三、微服务" aria-hidden="true">#</a> 三、微服务</h2><p>微服务的架构特征：</p><ul><li>单一职责：微服务拆分粒度更小，每一个服务都对应唯一的业务能力，做到单一职责</li><li>自治：团队独立、技术独立、数据独立，独立部署和交付</li><li>面向服务：服务提供统一标准的接口，与语言和技术无关</li><li>隔离性强：服务调用做好隔离、容错、降级，避免出现级联问题</li></ul><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308192303401.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>微服务的上述特性其实是在给分布式架构制定一个标准，进一步降低服务之间的耦合度，提供服务的独立性和灵活性。做到高内聚，低耦合。</p><p>因此，可以认为<strong>微服务</strong>是一种经过良好架构设计的<strong>分布式架构方案</strong> 。</p><p>但方案该怎么落地？选用什么样的技术栈？全球的互联网公司都在积极尝试自己的微服务落地方案。</p><p>其中在Java领域最引人注目的就是SpringCloud提供的方案了。</p><h2 id="四、springcloud" tabindex="-1"><a class="header-anchor" href="#四、springcloud" aria-hidden="true">#</a> 四、SpringCloud</h2>',28),c={href:"https://spring.io/projects/spring-cloud",target:"_blank",rel:"noopener noreferrer"},d=a('<p>SpringCloud集成了各种微服务功能组件，并基于SpringBoot实现了这些组件的自动装配，从而提供了良好的开箱即用体验。</p><p>其中常见的组件包括：</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308192305025.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>另外，SpringCloud底层是依赖于SpringBoot的，并且有版本的兼容关系，如下：</p><figure><img src="https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308192307835.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我学习的版本是 Hoxton.SR10，因此对应的SpringBoot版本是2.3.x版本。</p><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2><ul><li><p>单体架构：简单方便，高度耦合，扩展性差，适合小型项目。例如：学生管理系统</p></li><li><p>分布式架构：松耦合，扩展性好，但架构复杂，难度大。适合大型互联网项目，例如：京东、淘宝</p></li><li><p>微服务：一种良好的分布式架构方案</p><p>①优点：拆分粒度更小、服务更独立、耦合度更低</p><p>②缺点：架构非常复杂，运维、监控、部署难度提高</p></li><li><p>SpringCloud是微服务架构的一站式解决方案，集成了各种优秀微服务功能组件</p></li></ul>',8);function u(h,f){const o=p("ExternalLinkIcon");return e(),t("div",null,[g,n("p",null,[i("SpringCloud是目前国内使用最广泛的微服务框架。官网地址："),n("a",c,[i("https://spring.io/projects/spring-cloud"),r(o)]),i(" 。")]),d])}const b=l(s,[["render",u],["__file","01_认识微服务.html.vue"]]);export{b as default};
