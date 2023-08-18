---
title: 01-增删改（Statement版）
date: 2023-08-16 22:42:38
---

## 代码

```java
import com.mysql.jdbc.Driver;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCTest01 {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;

        try {
            // 1.驱动注册
            // 第一种方法：多态，父类型引用指向子类型对象
            // DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            // 第二种方法：此方式常用，因为参数是一个字符串，字符串可以直接写到xxx.properties文件中
			// 以下方法不需要接收返回值，因为我们只想用它的类加载动作
			Class.forName("com.mysql.cj.jdbc.Driver");

            // 2.获取连接
            /**
             * url:统一资源定位符(网络中某个资源的绝对路径)
             * https://www.baidu.com/  这就是URL(包括协议、IP、PORT、资源名)
             * http://182.61.200.7:80/index.html
             * http:// 通信协议(通信之前就定好的数据传送格式，数据包怎样传数据，格式提前定好的)
             * 182.61.200.7 服务器IP地址
             * 80 服务器上软件的端口
             * index.html 服务器上的某个资源名
             *
             * jdbc:mysql://10.27.237.234:3306/bjpowernode
             * jdbc:mysql:// 通信协议
             * 10.27.237.234 服务器IP地址 //也可写localhost
             * 3306 数据库端口号
             * bjpowernode 具体的数据库实例名
             */
            String url = "jdbc:mysql://127.0.0.1:3306/bjpowernode";
            String user = "root";
            String password = "123456";
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("数据库连接对象：" + conn); // com.mysql.jdbc.JDBC4Connection@4ec6a292

            // 3.获取数据库操作对象（Statement专门执行sql语句的）
            stmt = conn.createStatement();

            // 4.执行sql
            // 增：
            // JDBC中的sql语句不需要提供分号结尾
            String sql = "insert into dept(deptno,dname,loc) values(52,'renshibu','beijing')";
            // 专门执行DML语句的（insert delete update）
            // 返回值是“影响数据库中的记录条数”
            int count = stmt.executeUpdate(sql);
            System.out.println(count == 1 ? "保存成功" : "保存失败");

	        // 删：
	        // String sql = "delete from dept where deptno = 40";
			// int count = stmt.executeUpdate(sql);
			// System.out.println(count == 1 ? "删除成功" : "删除失败");

			// 改：
            // String sql = "update dept set dname = 'xiaoshoubu', loc = 'tianjin' where deptno = 51";
			// int count = stmt.executeUpdate(sql);
			// System.out.println(count == 1 ? "修改成功" : "修改失败");

            // 5.处理查询结果集

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 6.释放资源
            // 为了保证资源一定被释放，在 finally 语句块中关闭资源
            // 并且要遵循从小到大依次关闭
            // 分别对其 try...catch
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }

            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```
