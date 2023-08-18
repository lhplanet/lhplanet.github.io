import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",

  {
    text: "Java",
    prefix: "/01-java/",
    children: [
      {
        text: "JavaSE",
        link: "01-javase/"
      },
      {
        text: "Java 8",
        link: "02-java8/"
      },
    ],
  },

  {
    text: "数据库",
    prefix: "/02-database/",
    children: [
      {
        text: "关系型数据库",
        children: [
          {
            text: "MySQL",
            link: "01-mysql/"
          },
          {
            text: "JDBC",
            link: "02-jdbc/"
          },
        ],
      },
      {
        text: "非关系型数据库",
        children: [
          {
            text: "Redis",
            link: "03-redis/"
          },
          {
            text: "MongoDB",
            link: "04-mongodb/"
          },
        ],
      },
    ],
  },

  {
    text: "前端",
    prefix: "/03-front-end/",
    children: [
      {
        text: "HTML",
        link: "01-html/"
      },
      {
        text: "CSS",
        link: "02-css/"
      },
      {
        text: "JavaScript",
        link: "03-javascript/"
      },
      {
        text: "Vue",
        link: "04-vue/"
      },
    ],
  },

  {
    text: "JavaWeb",
    prefix: "/04-javaweb/",
    children: [
      {
        text: "jQuery",
        link: "01-jquery/"
      },
      {
        text: "XML",
        link: "02-xml/"
      },
      {
        text: "Tomcat",
        link: "03-tomcat/"
      },
      {
        text: "Servlet",
        link: "04-servlet/"
      },
      {
        text: "JSP",
        link: "05-jsp/"
      },
      {
        text: "EL",
        link: "06-el/"
      },
      {
        text: "JSTL",
        link: "07-jstl/"
      },
      {
        text: "文件上传与下载",
        link: "08-file-upload-and-download/"
      },
      {
        text: "Cookies",
        link: "09-cookies/"
      },
      {
        text: "Session",
        link: "10-session/"
      },
      {
        text: "Filter",
        link: "11-filter/"
      },
      {
        text: "JSON",
        link: "12-json/"
      },
      {
        text: "AJAX",
        link: "13-ajax/"
      },
      {
        text: "i18n",
        link: "14-i18n/"
      },
    ],
  },

  {
    text: "必备技能",
    prefix: "/05-skills/",
    children: [
      {
        text: "Linux",
        link: "01-linux/"
      },
      {
        text: "Maven基础",
        link: "02-maven-base/"
      },
      {
        text: "Git",
        link: "03-git/"
      },
    ],
  },

  {
    text: "Spring框架",
    prefix: "/06-spring-framework/",
    children: [
      {
        text: "SSM",
        children: [
          {
            text: "MyBatis",
            link: "01-mybatis/"
          },
          {
            text: "Spring",
            link: "02-spring/"
          },
          {
            text: "SpringMVC",
            link: "03-springmvc/"
          },
        ],
      },
      {
        text: "进阶",
        children: [
          {
            text: "Maven进阶",
            link: "04-maven-advance/"
          },
          {
            text: "SpringBoot",
            link: "05-springboot/"
          },
          {
            text: "MyBatisPlus",
            link: "06-mybatis-plus/"
          },
          {
            text: "SpringSecurity",
            link: "07-spring-security/"
          },
        ],
      },
    ],
  },

  {
    text: "消息队列",
    prefix: "/07-message-queue/",
    children: [
      {
        text: "RabbitMQ",
        link: "01-rabbitmq/"
      },
      {
        text: "RocketMQ",
        link: "02-rocketmq/"
      },
    ],
  },

  { text: "Nginx", link: "/08-nginx/" },

  { text: "Netty网络编程", link: "/09-netty-network-programming/" },

  {
    text: "微服务",
    prefix: "/10-microservices/",
    children: [
      {
        text: "Dubbo",
        link: "01-dubbo/"
      },
      {
        text: "SpringCloud",
        link: "02-springcloud/"
      },
      {
        text: "SpringCloudAlibaba",
        link: "03-springcloudalibaba/"
      },
    ],
  },

  {
    text: "容器",
    prefix: "/11-container/",
    children: [
      {
        text: "Docker",
        link: "01-docker/"
      },
      {
        text: "K8S",
        link: "02-k8s/"
      },
    ],
  },

  { text: "CI/CD", link: "/12-ci-cd/" },

]);
