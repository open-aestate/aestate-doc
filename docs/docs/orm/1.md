---
title: 进阶ORM操作
---

## 查询操作

[代码位置](https://gitee.com/aecode/aestate/blob/main/example/operas/mysql/ormOpera/find.py)

```python
from example.tables.demoModels import Demo

demo = Demo()
lj_demo = Demo()

r1 = demo.orm.find().end()
r2 = demo.orm.find().where(id=1).end()
r3 = demo.orm.find().order_by('id').end()
r4 = demo.orm.find('*', h_func=True).alias('d1').left_join(lj_demo, 'd2').on('d1.id', 'd2.id').end()
r5 = demo.orm.find().group_by('id').end()
r6 = demo.orm.find().order_by('id').desc().end()
r7 = demo.orm.find().limit(1).end()
r8 = demo.orm.filter(id__in=[1, 2, 3, 4])
r9 = demo.orm.top().end()
print('r1', type(r1), r1)
print('r2', type(r2), r2)
print('r3', type(r3), r3)
print('r4', type(r4), r4)
print('r5', type(r5), r5)
print('r6', type(r6), r6)
print('r7', type(r7), r7)
print('r8', type(r8), r8)
print('r9', type(r9), r9)

```

## 解释

| 方法名    | 描述                   |
| --------- | ---------------------- |
| top       | 查找第一条数据         |
| first     | 标记为只需要第一条数据 |
| find      | 查找                   |
| order_by  | order by               |
| group_by  | 根据什么分组           |
| filter    | 过滤数据,不需要 end() |
| where     | 当....的时候           |
| on        | 在....的时候           |
| limit     | 分页                   |
| desc      | 倒叙                   |
| set       | 设置                   |
| ander     | 并且                   |
| alias     | 设置别名               |
| left_join | 左连接                 |
| append    | 追加原生 sql           |

## 使用装示器

[代码位置](https://gitee.com/aecode/aestate/blob/main/example/operas/mysql/ormOpera/anno.py)

```python
from example.tables.demoModels import Demo, ReadXmlClass

demo = Demo()

r1 = demo.find_all_where_id(id=1, name="asdasd")
r2 = demo.find_all_F_where_id_eq_and_name_eq(id=1, name="asdasd")
r3 = demo.find_all_F_where_id_in_and_name_like_order_by_id(id=[1, 2, 3, 4], name="%a%")
r4 = demo.find_all_F()
print('r1', type(r1), r1)
print('r2', type(r2), r2)
print('r3', type(r3), r3)
print('r4', type(r4), r4)
c = ReadXmlClass()
c1 = c.findAllById()
print('c1', type(c1), c1)

```
