---
title: 获得demo数据库
date: 2023-05-09 16:03:46
permalink: /pages/6253cc/
categories:
  - 配置
tags:
  - 配置
---

## 获得 demo 数据库

首先使用 mysql8.0 以上版本执行以下 sql 语句,创建我们的 demo 表

```sql
create table demo
(
    id          int auto_increment        primary key,
    name        varchar(20)                        null,
    password    varchar(20)                        null,
    create_time datetime default CURRENT_TIMESTAMP null,
    update_time datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP
);
```
