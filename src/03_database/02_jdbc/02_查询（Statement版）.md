---
title: 02_查询（Statement版）
date: 2023-08-16 23:00:17
---

## 代码

```java
import java.sql.*;
import java.util.ResourceBundle;

public class JDBCTest05 {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            // 1.驱动注册
            Class.forName("com.mysql.cj.jdbc.Driver");
            // 2.获取连接
            conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/bjpowernode", "root", "123456");
            // 3.获取数据库操作对象(Statement专门执行sql语句的)
            stmt = conn.createStatement();
            // 4.执行spl
            String sql = "select empno as a,ename,sal from emp";
            // int executeUpdate(insert/delete/update)
            // ResultSet executeQuery(select)
			rs = stmt.executeQuery(sql); // 专门执行DQL语句的方法
            // 5.处理查询结果集
            while(rs.next()){
                // 光标指向的行有数据
                // 取数据

                // getString()方法的特点:不管数据库中的数据类型是什么，都以String的形式取出
                /*
                String empno = rs.getString(1); // JDBC中所有下标从1开始，不是从0开始
                String ename = rs.getString(2);
				String sal = rs.getString(3);
				*/

                /*
                String empno = rs.getString("a"); // 重点注意:列名称不是表中的列名称，是查询结果集的列名称
                String ename = rs.getString("ename");
				String sal = rs.getString("sal");
				System.out.println(empno+","+ename+","+sal);
                */

                // 除了可以以String类型取出之外，还可以以特定的类型取出
                int empno = rs.getInt("a");
                String ename = rs.getString("ename");
                double sal = rs.getDouble("sal");
                System.out.println(empno+","+ename+","+(sal+100));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            // 6.释放资源
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```
