---
title: 04_实战与SQL注入
date: 2023-08-16 23:34:36
---

## 一、需求

模拟用户登录功能的实现。

## 二、业务描述

程序运行的时候，提供一个输入的入口，可以让用户输入用户名和密码。用户输入用户名和密码之后，提交信息，java 程序收集到用户信息 。Java 程序连接数据库验证用户名和密码是否合法 ，合法：显示登录成功，不合法：显示登录失败。

## 三、数据的准备

在实际开发过程中，表的设计会使用专业的建模工具，如 PowerDesigner 工具。

## 四、SQL 注入

```
用户名：fdsa
密码：fdsa' or '1'='1
```

登录成功，这种现象被称为 SQL 注入（安全隐患）（黑客经常使用）。

## 五、SQL 注入根本原因

用户输入的信息中含有 sql 语句的关键字，并且这些关键字参与 sql 语句的编译过程，导致 sql 语句的原意被扭曲，进而达到 sql 注入。

## 六、代码

```java
import java.sql.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class JDBCTest06 {
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
        // JDBC 代码
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/bjpowernode", "root", "123456");
            stmt = conn.createStatement();
            String sql = "select * from t_user where loginName = '"+loginName+"' and loginPwd = '"+loginPwd+"'";
            // 以上正好完成了sql语句的拼接，以下代码的含义是，发送sql语句给DBMS，DBMS进行sql编译
            // 正好将用户提供的”非法信息“编译进去，导致了原sql语句的含义被扭曲
            rs = stmt.executeQuery(sql);
            if(rs.next()){
                // 登录成功
                loginSuccess = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if(rs != null){
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(stmt != null){
                try {
                    stmt.close();
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
