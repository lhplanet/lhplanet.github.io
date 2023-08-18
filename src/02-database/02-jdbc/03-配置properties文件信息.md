---
title: 03-配置properties文件信息
date: 2023-08-16 23:15:02
---

## 一、properties 文件编写

```properties
# jdbc.properties
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://127.0.0.1:3306/bjpowernode
user=root
password=123456
```

## 二、代码

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ResourceBundle;

/*
将连接数据库的所有信息配置到配置文件中
实际开发中不建议把连接数据库的信息写死到java程序中
 */
public class JDBCTest04 {
    public static void main(String[] args) {
        // 使用资源绑定器绑定属性配置文件
        ResourceBundle bundle = ResourceBundle.getBundle("jdbc");
        String driver = bundle.getString("driver");
        String url = bundle.getString("url");
        String user = bundle.getString("user");
        String password = bundle.getString("password");

        Connection conn = null;
        Statement stmt = null;
        try {
            //1.驱动注册
            Class.forName(driver);
            //2.获取连接
            conn = DriverManager.getConnection(url, user, password);
            //3.获取数据库操作对象(Statement专门执行sql语句的)
            stmt = conn.createStatement();
            //4.执行spl
            String sql = "update dept set dname = 'renshibu', loc = 'shanghai' where deptno = 51";
            int count = stmt.executeUpdate(sql);
            System.out.println(count == 1 ? "修改成功" : "修改失败");

            //5.处理查询结果集

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            //6.释放资源
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
