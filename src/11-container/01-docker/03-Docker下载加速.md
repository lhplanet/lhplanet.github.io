---
title: 03-Docker下载加速
date: 2023-10-24 08:49:02
---

## docker下载加速

方式1：使用 网易数帆、阿里云等容器镜像仓库进行下载。

例如，下载网易数帆镜像中的mysql。（网易数帆的地址为 hub.c.163.com，网易数帆对dockerhub官方的镜像命名空间为 library）。

```Shell
docker pull hub.c.163.com/library/mysql:latest
```

方式2：配置阿里云加速。

登录阿里云，进入 `工作台` -> `容器镜像服务` -> `镜像工具` -> `镜像加速器`。

里面提供了一个加速器地址：https://xxxxx.mirror.aliyuncs.com，将该地址配置到docker中：

```Shell
cd /etc/docker

# 初次进来时没有/etc/docker/daemon.json文件，直接创建该文件即可
vi /etc/docker/daemon.json
```

在daemon.json中写入以下内容：（即加速器地址）

```Shell
{
  "registry-mirrors": ["https://xxxxx.mirror.aliyuncs.com"]  
}
```

然后刷新配置、重启docker即可：

```Shell
# centos6 的命令
sudo chkconfig daemon-reload
sudo service docker restart

# centos7 的命令
sudo systemctl daemon-reload
sudo systemctl restart docker
```

使用方式2可以直接下载官方的镜像，且镜像tag为官方tag，不需要加上云服务商的地址。

例如：

```Shell
docker pull mysql:latest
```
