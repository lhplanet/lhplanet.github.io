---
title: 08_JDBC工具类封装
date: 2023-08-17 00:55:46
---

## 一、工具类

```java
package com.lihaopeng.utils;

import java.sql.*;

/*
JDBC工具类，简化JDBC编程
 */
public class DBUtil {

    /**
     * 工具类中的构造方法都是私有的
     * 因为工具类当中的方法都是静态的不需要new对象，直接采用类名调用
     */
    private DBUtil(){}

    // 静态代码块在类加载时执行，并且只执行一次
    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取数据库连接对象
     * @return 连接对象
     * @throws SQLException
     */
    public static Connection getConnection() throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/bjpowernode", "root", "123456");
        return conn;
    }

    /**
     * 关闭资源
     * @param conn 连接对象
     * @param ps 数据库操作对象
     * @param rs 结果集
     */
    public static void close(Connection conn, Statement ps, ResultSet rs){
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
}
```

## 二、代码

```java
import com.lihaopeng.utils.DBUtil;

import java.sql.*;

public class JDBCTest12 {
    public static void main(String[] args) {
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            //获取连接
            conn = DBUtil.getConnection();
            //获取预编译的数据库操作对象
            String sql = "select ename from emp where ename like ?";
            ps = conn.prepareStatement(sql);
            ps.setString(1,"_A%");
            rs = ps.executeQuery();
            while(rs.next()){
                System.out.println(rs.getString("ename"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            //释放资源
            DBUtil.close(conn,ps,rs);
        }
    }
}
```
