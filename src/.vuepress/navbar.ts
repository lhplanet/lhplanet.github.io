import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",

  {
    text: "必备技能",
    prefix: "/01_skills/",
    children: [
      {
        text: "Linux",
        link: "01_linux/"
      },
      {
        text: "Maven基础",
        link: "02_maven_base/"
      },
      {
        text: "Git",
        link: "03_git/"
      },
    ],
  },

  {
    text: "前端",
    prefix: "/02_front_end/",
    children: [
      {
        text: "HTML",
        link: "01_html/"
      },
      {
        text: "CSS",
        link: "02_css/"
      },
      {
        text: "JavaScript",
        link: "03_javascript/"
      },
      {
        text: "Vue",
        link: "04_vue/"
      },
    ],
  },

  {
    text: "数据库",
    prefix: "/03_database/",
    children: [
      {
        text: "关系型数据库",
        children: [
          {
            text: "MySQL",
            link: "01_mysql/"
          },
          {
            text: "JDBC",
            link: "02_jdbc/"
          },
        ],
      },
      {
        text: "非关系型数据库",
        children: [
          {
            text: "Redis",
            link: "03_redis/"
          },
          {
            text: "MongoDB",
            link: "04_mongodb/"
          },
          {
            text: "HBase",
            link: "05_hbase/"
          },
          {
            text: "Neo4j",
            link: "06_neo4j/"
          },
        ],
      },
    ],
  },

  {
    text: "Java",
    prefix: "/04_java/",
    children: [
      {
        text: "JavaSE",
        link: "01_javase/"
      },
      {
        text: "Java 8",
        link: "02_java8/"
      },
    ],
  },

  {
    text: "JavaWeb",
    prefix: "/05_javaweb/",
    children: [
      {
        text: "jQuery",
        link: "01_jquery/"
      },
      {
        text: "XML",
        link: "02_xml/"
      },
      {
        text: "Tomcat",
        link: "03_tomcat/"
      },
      {
        text: "Servlet",
        link: "04_servlet/"
      },
      {
        text: "JSP",
        link: "05_jsp/"
      },
      {
        text: "EL",
        link: "06_el/"
      },
      {
        text: "JSTL",
        link: "07_jstl/"
      },
      {
        text: "文件上传与下载",
        link: "08_file_upload_and_download/"
      },
      {
        text: "Cookies",
        link: "09_cookies/"
      },
      {
        text: "Session",
        link: "10_session/"
      },
      {
        text: "Filter",
        link: "11_filter/"
      },
      {
        text: "JSON",
        link: "12_json/"
      },
      {
        text: "AJAX",
        link: "13_ajax/"
      },
      {
        text: "i18n",
        link: "14_i18n/"
      },
    ],
  },

  {
    text: "Spring框架",
    prefix: "/06_spring_framework/",
    children: [
      {
        text: "SSM",
        children: [
          {
            text: "MyBatis",
            link: "01_mybatis/"
          },
          {
            text: "Spring",
            link: "02_spring/"
          },
          {
            text: "SpringMVC",
            link: "03_springmvc/"
          },
        ],
      },
      {
        text: "进阶",
        children: [
          {
            text: "Maven进阶",
            link: "04_maven_advance/"
          },
          {
            text: "SpringBoot",
            link: "05_springboot/"
          },
          {
            text: "MyBatisPlus",
            link: "06_mybatis_plus/"
          },
          {
            text: "SpringSecurity",
            link: "07_spring_security/"
          },
        ],
      },
    ],
  },

  {
    text: "服务器",
    prefix: "/07_server/",
    children: [
      {
        text: "容器",
        children: [
          {
            text: "Docker",
            link: "01_docker/"
          },
          {
            text: "K8S",
            link: "02_k8s/"
          },
        ],
      },
      {
        text: "运维",
        children: [
          {
            text: "Nginx",
            link: "03_nginx/"
          },
          {
            text: "Netty网络编程",
            link: "04_netty/"
          },
        ],
      },
    ],
  },

  {
    text: "微服务",
    prefix: "/08_microservices/",
    children: [
      {
        text: "Dubbo",
        link: "01_dubbo/"
      },
      {
        text: "SpringCloud",
        link: "02_springcloud/"
      },
      {
        text: "SpringCloudAlibaba",
        link: "03_springcloudalibaba/"
      },
    ],
  },

  {
    text: "中间件",
    prefix: "/09_middleware/",
    children: [
      {
        text: "消息队列中间件",
        children: [
          {
            text: "RabbitMQ",
            link: "01_rabbitmq/"
          },
          {
            text: "RocketMQ",
            link: "02_rocketmq/"
          },
        ],
      },
      // {
      //   text: "其它中间件",
      //   children: [
      //     {
      //       text: "RabbitMQ",
      //       link: "03_rabbitmq/"
      //     },
      //     {
      //       text: "RocketMQ",
      //       link: "02_rocketmq/"
      //     },
      //   ],
      // },
    ],
  },

  {
    text: "大数据",
    prefix: "/10_big_data/",
    children: [
      {
        text: "爬虫",
        link: "01_spider/"
      },
      {
        text: "Hadoop",
        link: "02_hadoop/"
      },
      {
        text: "Zookeeper",
        link: "03_zookeeper/"
      },
    ],
  },

  {
    text: "Python",
    prefix: "/11_python/",
    children: [
      {
        text: "Python基础",
        link: "01_python_base/"
      },
      {
        text: "Python进阶",
        link: "02_python_advance/"
      },
    ],
  },

  {
    text: "C++",
    prefix: "/12_cpp/",
    children: [
      {
        text: "C++基础",
        link: "01_cpp_base/"
      },
      {
        text: "C++进阶",
        link: "02_cpp_advance/"
      },
    ],
  },

  {
    text: "Rust",
    prefix: "/13_rust/",
    children: [
      {
        text: "Rust基础",
        link: "01_rust_base/"
      },
      {
        text: "Rust进阶",
        link: "02_rust_advance/"
      },
    ],
  },

]);
