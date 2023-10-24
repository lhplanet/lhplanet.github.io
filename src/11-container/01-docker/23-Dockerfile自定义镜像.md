---
title: 23-Dockerfile自定义镜像
date: 2023-08-20 01:10:15
---

常见的镜像在DockerHub就能找到，但是我们自己写的项目就必须自己构建镜像了。

而要自定义镜像，就必须先了解镜像的结构才行。

## 一、镜像结构

镜像是将应用程序及其需要的系统函数库、环境、配置、依赖打包而成。

我们以MySQL为例，来看看镜像的组成结构：

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308200142569.png)

简单来说，镜像就是在系统函数库、运行环境基础上，添加应用程序文件、配置文件、依赖文件等组合，然后编写好启动脚本打包在一起形成的文件。

我们要构建镜像，其实就是实现上述打包的过程。

## 二、Dockerfile语法

构建自定义的镜像时，并不需要一个个文件去拷贝，打包。

我们只需要告诉Docker，我们的镜像的组成，需要哪些BaseImage、需要拷贝什么文件、需要安装什么依赖、启动脚本是什么，将来Docker会帮助我们构建镜像。

而描述上述信息的文件就是Dockerfile文件。

**Dockerfile**就是一个文本文件，其中包含一个个的**指令(Instruction)**，用指令来说明要执行什么操作来构建镜像。每一个指令都会形成一层Layer。

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308200142025.png)

更新详细语法说明，请参考官网文档： https://docs.docker.com/engine/reference/builder

## 三、构建Java项目

### 1.基于Ubuntu构建Java项目

需求：基于Ubuntu镜像构建一个新镜像，运行一个java项目

- 步骤1：新建一个空文件夹docker-demo

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308200143887.png)

- 步骤2：拷贝课前资料中的docker-demo.jar文件到docker-demo这个目录

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308200143923.png)

- 步骤3：拷贝课前资料中的jdk8.tar.gz文件到docker-demo这个目录

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308200144741.png)

- 步骤4：拷贝课前资料提供的Dockerfile到docker-demo这个目录

![](https://lhplanet-1316168555.cos.ap-beijing.myqcloud.com/obsidian/202308200144247.png)

  其中的内容如下：

```dockerfile
# 指定基础镜像
FROM ubuntu:16.04
# 配置环境变量，JDK的安装目录
ENV JAVA_DIR=/usr/local

# 拷贝jdk和java项目的包
COPY ./jdk8.tar.gz $JAVA_DIR/
COPY ./docker-demo.jar /tmp/app.jar

# 安装JDK
RUN cd $JAVA_DIR \
 && tar -xf ./jdk8.tar.gz \
 && mv ./jdk1.8.0_144 ./java8

# 配置环境变量
ENV JAVA_HOME=$JAVA_DIR/java8
ENV PATH=$PATH:$JAVA_HOME/bin

# 暴露端口
EXPOSE 8090
# 入口，java项目的启动命令
ENTRYPOINT java -jar /tmp/app.jar
```

- 步骤5：进入docker-demo

  将准备好的docker-demo上传到虚拟机任意目录，然后进入docker-demo目录下

- 步骤6：运行命令：

```sh
docker build -t javaweb:1.0 .
```

最后访问 http://192.168.150.101:8090/hello/count，其中的ip改成你的虚拟机ip

### 2.基于java8构建Java项目

虽然我们可以基于Ubuntu基础镜像，添加任意自己需要的安装包，构建镜像，但是却比较麻烦。所以大多数情况下，我们都可以在一些安装了部分软件的基础镜像上做改造。

例如，构建java项目的镜像，可以在已经准备了JDK的基础镜像基础上构建。

需求：基于java:8-alpine镜像，将一个Java项目构建为镜像

实现思路如下：

（1）新建一个空的目录，然后在目录中新建一个文件，命名为Dockerfile

（2）拷贝课前资料提供的docker-demo.jar到这个目录中

（3）编写Dockerfile文件：

    • 基于java:8-alpine作为基础镜像
    • 将app.jar拷贝到镜像中
    • 暴露端口
    • 编写入口ENTRYPOINT

内容如下：

```dockerfile
FROM java:8-alpine
COPY ./app.jar /tmp/app.jar
EXPOSE 8090
ENTRYPOINT java -jar /tmp/app.jar
```

（4）使用docker build命令构建镜像

（5）使用docker run创建容器并运行

## 四、小结

1. Dockerfile的本质是一个文件，通过指令描述镜像的构建过程
2. Dockerfile的第一行必须是FROM，从一个基础镜像来构建
3. 基础镜像可以是基本操作系统，如Ubuntu。也可以是其他人制作好的镜像，例如：java:8-alpine
