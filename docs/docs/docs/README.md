---
title: 欢迎
---

<p align="center">
<img width="10%" src="https://summer-publiced.oss-cn-hangzhou.aliyuncs.com/logos/logo_framework_tr.png"/>
</p>
<h1 align="center">Aestate —— 多样化数据库查询</h1>
<p align="center">
  <img src="https://img.shields.io/badge/python-%3E%3D%203.6-blue.svg" />
  <a href="http://doc.cacode.ren">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://gitee.com/cacode_cctvadmin/summer-python/blob/main/LICENSE">
    <img alt="License: Apache-2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" target="_blank" />
  </a>
</p>

# 介绍

> 当前仅 MySql8.0 以上测试通过

`Aestate Framework` 是一款基于`Python`语言开发的`ORM`框架,你可以使用多种方式去实现基于对象方式的查询.

比如使用类似`django`的模式去使用：modelClass.orm.filter(\*args, \*\*kwargs)

或者 sqlalchemy 的方式：find().where(\**kwargs).group_by(*args)

或者像`java`的`hibernate`一样：

```python
@SelectAbst()
def find_all_F_where_id_in_and_name_like_order_by_id(self, **kwargs) -> list: ...


@Select("SELECT * FROM demo WHERE id=${id} AND name=${name}")
def find_all_where_id(self, id, name): ...
```

或者像`java`的`mybatis`使用 xml

```xml
<?xml version="1.0"?>
<aestate
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="aestate  https://gitee.com/cacode_cctvadmin/aestate-xml/blob/main/v1/tags.xsd"
        xmlns="aestate">
    <namespace id="demo_table" from="example.tables.demoModels.DemoTable"/>
    <import file="./db.xml" id="database" target="demoDatabase"/>
    <template id="templateField">
        id,name,password,create_time,update_time
        <description>测试模板</description>
    </template>

    <item id="findAllById">
        <select>
            <include from="templateField"/>
        </select>
    </item>

    <description>测试描述</description>
</aestate>
```
