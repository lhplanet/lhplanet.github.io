---
title: 00-关于IDEA
date: 2023-09-21 20:27:41
---

## 快捷输入模板：

| 快捷键                 | 模板                                                              |
|---------------------|-----------------------------------------------------------------|
| psvm/main           | public static void main(String[] args) {}                       |
| sout                | System.out.println();                                           |
| soutp               | System.out.println("args = " + Arrays.deepToString(args)); //形参 |
| soutm               | System.out.println("Template.main"); //方法名                      |
| soutv               | System.out.println("args = " + args); //变量值                     |
| i.sout              | System.out.println(i);                                          |
| fori                | for (int j = 0; j < arr.length; j++) {                          |
| iter                | for (String s : arr) {}                                         |
| itar                | for (int j = 0; j < arr.length; j++) { String s = arr[j]; }     |
| list.for            | for (Object o : list) {}                                        |
| list.fori           | for (int i1 = 0; i1 < list.size(); i1++) {}                     |
| list.forr           | for (int i1 = list.size() - 1; i1 >= 0; i1--) {}                |
| ifn                 | if (list == null) {}                                            |
| inn/xxx.nn/xxx.null | if (list != null) {}                                            |
| prsf                | private static final                                            |
| psf                 | public static final                                             |
| psfi                | public static final int                                         |
| psfs                | public static final String                                      |

## IDEA工具的使用

- 第一次打开的时候会弹出一个窗口(Import idea settings)
  - 这个表示导入IDEA的设置，但是第一次使用，没有设置过IDEA，Do not import settings不导入设置
- 第二步 接受条款
- 第三步 don‘t send
- 第四步 一直下一步(最终选择免费试用30天)
- 第五步 不填写email等信息 不填写
- 第六步 弹出welcome窗口
  - 点击 create new project
  - 在IDEA当中，一个project相当于eclipse中的workspace
- 第七步，新建一个Empty Project
  - 新建一个空的工程，选择创建工程窗口下面“最后的那一项“。Empty Project
- 第八步：给空的工程起名字 存储到...
  - 点击finish
- 第九步：每日提示可以取消 会自动弹一个project structure 这个窗口先取消掉
- 第十步：在空的工程下新建Module(模块)
  - 怎么创建Module
    - file -> new -> Module
- 第十一步： 在New Module窗口上点击左上角的java，然后next
- 第十二步：给Module起一个名字
- 第十三步：编写代码

## 关于IDEA工具的快捷键以及一些简单的设置

- 4.1 字体设置
  - file -> settings -> 输入font -> 设置字体样式以及字号大小
- 4.2 快速生成main方法
  - psvm
- 4.3 快速生成System.out.println()
  - sout
- 4.4 注意：IDEA是自动保存的
- 4.5 删除一行
  - ctrl + Y
- 4.6 怎么运行
  - 代码上右键run
  - 或点左侧右侧运行箭头
  - ctrl + shift + F10
- 4.7 左侧窗口中的列表怎么展开？怎么关闭
  - 左箭头关闭，右箭头展开
  - 上下箭头移动
- 4.8 IDEA中退出任何窗口，都可以使用esc键
- 4.9 任何新增 新建 添加 用 alt + insert
- 4.10 窗口变大变小
  - ctrl + shift + F12
- 4.11 切换Java程序 alt + 左右箭头
- 4.12 alt + 标号 可以切换窗口
- 4.13 ctrl + p 提示方法的参数
- 4.14 注释：
  - 单行注释 ： ctrl + /
  - 多行注释 ： ctrl + shift + /
- 4.15 idea中怎么定位方法/属性/变量？
  - 光标停在某个单词的下面，这个单词可能是：
  - 方法名、变量名、
  - 停到单词下面之后，按ctrl键，出现下划线，点击，跳转
- 4.16 idea当中复制一行是ctrl + d
- 4.17 后退一步 ctrl + z
  - 恢复撤回代码 ctrl + shift + z
