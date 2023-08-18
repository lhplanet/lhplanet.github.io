---
title: 05-查询（PreparedStatement版）解决SQL注入问题
date: 2023-08-16 23:41:08
---

## 一、解决 SQL 注入问题

只要用户提供的信息不参与 SQL 语句的编译过程，问题就解决了。即使用户提供的信息中含有 SQL 语句的关键字，但是没有参与编译，不起作用。要想用户信息不参与 SQL 语句的编译，必须使用 java.sql.preparedStatement。

PreparedStatement 接口继承了 java.sql.Statement，PreparedStatement 是属于预编译的数据库操作对象。

PreparedStatement 的原理是预先对 SQL 语句的框架进行编译，然后再给 SQL 语句串”值“。

## 二、代码

```java
import java.sql.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class JDBCTest07 {
    public static void main(String[] args) {
        // 初始化一个界面
        Map<String,String> userLoginInfo = initUI();
        // 验证用户名和密码
        boolean loginSuccess = login(userLoginInfo);
        // 最后输出结果
        System.out.println(loginSuccess ? "登录成功" : "登录失败");

    }

    /**
     * 用户登录
     * @param userLoginInfo 用户登录信息
     * @return false表示失败，true表示成功
     */
    private static boolean login(Map<String, String> userLoginInfo) {
        // 打标记的意识
        boolean loginSuccess = false;
        // 单独定义变量
        String loginName = userLoginInfo.get("loginName");
        String loginPwd = userLoginInfo.get("loginPwd");
        // JDBC代码
        Connection conn = null;
        PreparedStatement ps = null; // 这里使用PreparedStatement（预编译的数据库操作对象）
        ResultSet rs = null;
        try {
            // 1.注册驱动
            Class.forName("com.mysql.cj.jdbc.Driver");
            // 2.获取连接
            conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/bjpowernode", "root", "123456");
            // 3.获取预编译的数据库操作对象
            // SQL语句的框架，其中一个?表示一个占位符，一个?将来接收一个”值“，注意：占位符不能使用单引号''括起来
            String sql = "select * from t_user where loginName = ? and loginPwd = ?";
            // 程序执行到此处，会发送sql语句框架给DBMS，然后DBMS进行sql语句的预先编译
            ps = conn.prepareStatement(sql);
            // 给占位符?传值（第一个?下标是1，第二个?下标是2，JDBC中所有下标从1开始) ）
            ps.setString(1,loginName);
            ps.setString(2,loginPwd);
            // 4.执行sql
            rs = ps.executeQuery();
            // 5.处理结果集
            if(rs.next()){
                // 登录成功
                loginSuccess = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 6.释放资源
            if(rs != null){
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(ps != null){
                try {
                    ps.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(conn != null){
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return loginSuccess;
    }

    /**
     * 初始化用户界面
     * @return 用户输入的用户名和密码等登录信息
     */
    private static Map<String, String> initUI() {
        Scanner s = new Scanner(System.in);

        System.out.print("用户名：");
        String loginName = s.nextLine();

        System.out.print("密码：");
        String loginPwd = s.nextLine();

        Map<String,String> userLoginInfo = new HashMap<>();
        userLoginInfo.put("loginName",loginName);
        userLoginInfo.put("loginPwd",loginPwd);

        return userLoginInfo;
    }
}
```

## 三、对比 Statement 和 PreparedStatement

- Statement 存在 sql 注入问题，PreparedStatement 解决了 SQL 注入问题。
- Statement 是编译一次执行一次。PreparedStatement 是编译一次，可执行 N 次。PreparedStatement 效率较高一些。
- PreparedStatement 会在编译阶段做类型的安全检查。

综上所述: PreparedStatement 使用较多。只有极少数的情况下需要使用 Statement。

## 四、什么情况必须使用 Statement

Statement 支持 SQL 注入，凡是业务方面要求是需要进行 SQL 语句拼接的，必须支持 SQL 注入，必须使用 Statement。

需求：用户输入 desc 或 asc，来决定查询员工信息的时候，按照工资降序或者升序排列。

这种情况下，使用 PreparedStatement 就无法满足需求了，会报错，必须使用 Statement。

```java
// PreparedStatement 报错
PreparedStatement ps = null;
ResultSet rs = null;
//3.获取预编译的数据库操作对象
String sql = "select ename from emp order by ename ?";
ps = conn.prepareStatement(sql);
//给占位符?传值（第一个?下标是1，第二个?下标是2，JDBC中所有下标从1开始）
ps.setString(1,keyWords);
//4.执行sql
rs = ps.executeQuery();
```

```java
// Statement
Statement stmt = null;
ResultSet rs = null;
//3.获取数据库操作对象
stmt = conn.createStatement();
//4.执行sql
String sql = "select ename from emp order by ename "+keyWords;
```
