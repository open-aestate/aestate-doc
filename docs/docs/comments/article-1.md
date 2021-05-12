---
title: 入门教程
---

## 写在开头的话

---

> 本章所有示例使用的关系型数据库为：`MySql`

> 非关系型数据库为： `Redis`

> python==3.7.1  
> pymysql==lastest  
> redis==lastest

::: warning 规范
为了保证后期可维护性，你的包类型需要像：

Django:

```
├─apps # apps目录
│ ├─article # 子app
│ └─fontEndResource # 子app
├─blogcacode # 全局配置
├─databaseConfigs # 数据库配置
├─tables # 数据表存放位置
│ └─mysql_tables # 不同类型数据库固定表存放位置，以数据库类型+_+你喜欢的名字命名
└─utils
```

:::

## 安装

> 使用 pip 命令安装：pip install CACodeFramework  
> 使用 anaconda 安装：conda install CACodeFramework

## 创建一个数据库配置

在 `databaseConfigs` 包下创建一个配置文件，名为`BaseDatabaseConfig.py`，并编写以下代码：

```python{1,5,8,10,17}
import pymysql
from CACodeFramework.util import Config


class BaseDataBase(Config.config):
    def __init__(self):
        # 打印sql语句
        self.set_field('print_sql', True)
        # 返回最后一行的id
        self.set_field('last_id', True)
        super(BaseDataBase, self).__init__(
            host='localhost',
            port=3306,
            database='blog_cacode_ccfk',
            user='root',
            password='123456',
            creator=pymysql
        )

```

### 答疑解惑

在这段代码中，高亮部分是容易忘记的部分，接下来我们分别讲一下这段代码的作用

> 首先我们创建一个名为`BaseDataBase`的类，并继承`Config.config`使得我们的配置项生效

> 通过 def **init**(self) 方法初始化所有配置项
> 由于我们继承了`config`类，所以我们的`BaseDataBase`具备`config`类的可用方法  
> set_field()方法是为配置项动态设置参数，参数参考以下：

```json
{
  "host": "数据库的路由 必填",
  "port": "数据库端口 必填",
  "database": "数据库名 必填",
  "user": "登录使用的用户 必填",
  "password": "用户的密码 必填",
  "charset": "编码格式 默认utf8",
  "creator": "数据库的创建者，如果你使用的是mysql，那么这里就需要import pymysql，然后将pymysql放入这个参数中 必填",
  "print_sql": "是否在执行之前打印sql语句 默认False",
  "last_id": "是否需要在insert插入操作结束后返回最后一行的行号，默认只返回受影响行数 默认False",
  "adapter": "适配器，用于自定义语法和解决sql语句不同方言的问题，你可以自定义处理流程和自定义关键字，例如默认使用`__like`模糊查询，你可以将`__like`改为`__fuck`只要你愿意 默认None"
}
```
