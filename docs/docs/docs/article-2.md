---
title: 基本操作(原生操作)
---

## 查找操作 (find)

### 必备

在你的逻辑文件下使用，例如我这边的在`example.operas.basis`下  
无论你在哪个文件下开始，都需要先使用刚才写的工厂来创建一个 Pojo 对象

```python
from example.db_base import MyFactory

Demo = MyFactory.createInstance('demo.Demo')
```

或者也可以直接实例化这个类，看个人喜好，以后版本可能会移除这两个其中一个

```python
from example.tables.demoModels import Demo

demo = Demo()
```

用法:

### find_all

查找所有 返回的是集合形式的键值对

```python
result_all = Demo.find_all()
print('result_all', result_all)
```

```json
//这些是数据库的数据
[
  {
    "name": "a",
    "password": "13",
    "id": 1,
    "create_time": "因为我们之前设置了模板类的auto_time，当没有的时候自动填充 2021-05-25 21:35:51",
    "update_time": "同上 2021-05-25 21:35:51"
  }
  ...(表示更多数据)
]
```

### find_many

搜索多个 返回的是集合形式的键值对

```python
result_many = Demo.find_many(sql='SELECT * FROM `demo`')
print('result_many', result_many)
```

```json
//同上
[
  {
    "name": "a",
    "password": "13",
    "id": 1,
    "create_time": "2021-05-25 21:35:51",
    "update_time": "2021-05-25 21:35:51"
  }
  ...
]
```

### find_one

搜索一个返回的是表对象

```python
result_one = Demo.find_one(sql='SELECT * FROM `demo` WHERE `id`=1')
print('result_one', result_one.to_json())
```

```json
//使用to_json()方法将对象转换为json字符串，也可以使用to_dict()转字典,默认就是这个表对象object
{
  "name": "a",
  "password": "13",
  "id": 1,
  "create_time": "2021-05-25 21:35:51",
  "update_time": "2021-05-25 21:35:51"
}
```

### find_field

根据字段查找多个 返回的是集合形式的键值对

```python
result_field = Demo.find_field('id', 'name', 'password')
print('result_field', result_field)
```

```json
//同find_many()
[
  {
    "name": "a",
    "password": "13",
    "id": 1,
    "create_time": "2021-05-25 23:31:55",
    "update_time": "2021-05-25 23:31:55"
  }
  ...
]
```

### find_sql

根据 sql 查找 返回的是集合形式的键值对

```python
result_sql = Demo.find_sql(sql='SELECT * FROM demo')
print('result_sql', result_sql)
```

```json
//find_field()
[
  {
    "name": "a",
    "password": "13",
    "id": 1,
    "create_time": "2021-05-25 23:31:55",
    "update_time": "2021-05-25 23:31:55"
  }
  ...
]
```

## 插入操作

用法:

### 必备

还是一样先创建一个表对象

```python
from example.db_base import MyFactory

Demo = MyFactory.createInstance('demo.Demo')
```

或者也可以直接实例化这个类，看个人喜好，以后版本可能会移除这两个其中一个

```python
from example.tables.demoModels import Demo

demo = Demo()
```

### create()

```python


def create():
    # 因为我们的模板表设置了`create_time`和`update_time`自动录入时间的`auto_time`和`update_auto_time`
    # 所以这里不需要设置这两个的时间
    # abs参数设置为True时，表示这个对象仅作为数据使用，不参与数据操作过程
    data = MyFactory.createInstance('demo.Demo', name='test_name', password='123456', abs=True)
    # 因为我们在全局配置，也就是db_base.py中的全局配置已经设置了允许返回最后一行的id
    # 所以这里就可以拿到插入后最后一行的id
    # 返回的结果是:受影响行数,最后一行id
    line, last_id = Demo.create(data)
    return line, last_id


if __name__ == '__main__':
    create()
```

返回结果

```text
受影响行数,最后一行id
1,3
```

### save()

```python
def save():
    # 为了全局变量的干净，我们得在内部重新创建一个
    Demo = MyFactory.createInstance('demo.Demo')
    # 为对象设置值
    Demo.name = 'test_name'
    Demo.password = '123456'
    # 返回结果,具体参考上一个方法insert()
    line, last_id = Demo.save()
    print(line, last_id)


if __name__ == '__main__':
    save()
```

返回结果

```text
受影响行数,最后一行id
1,4
```

### insert_sql()

这个可以说是最鸡肋的方法也无妨

> 1.0.0b3 版本已废弃
