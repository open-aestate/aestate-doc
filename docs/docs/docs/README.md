---
title: 欢迎
---

<p align="center">
<img width="40%" src="https://summer-publiced.oss-cn-hangzhou.aliyuncs.com/logos/logo_transparent.png"/>
</p>
<h1 align="center">Aestate —— 创建仅属于你的sql语法</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0b2-blue" />
  <img src="https://img.shields.io/badge/python-%3E%3D%203.6-blue.svg" />
  <a href="http://doc.cacode.ren">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://gitee.com/cacode_cctvadmin/aestate/blob/main/LICENSE">
    <img alt="License: Apache-2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" target="_blank" />
  </a>
</p>

# 介绍

<p style="white-space:pre-wrap;">
        Aestate Framework 是一款允许你自定义sql操作语法的orm (Object Relational Mapping)框架, 可以尽情发挥你的想象力，创造出属于你自己的sql操作方式。通过内置`DBUtils`来达到数据库操作和缓存，内置`simplejson`用于序列化和反序列化。
        修改后的`simplejson`非常强大,通过`aestate.cacode.Serialize.JsonUtil`获得json工具类, 可达到将`object`类型的数据解析成json字符串或者反序列化为字典格式。
        将最大限制的保留原始操作方式，允许工程师自定义一些特殊语法模板。支持分库分表多线程多进程执行，支持所有遵守DB-API2的数据库创建者
</p>
