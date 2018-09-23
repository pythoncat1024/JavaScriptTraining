create table if not exists `chat`( `chat_id` INT UNSIGNED AUTO_INCREMENT, `chat_title` VARCHAR(100) NOT NULL, `chat_author` VARCHAR(40) NOT NULL, `submission_date` DATE, PRIMARY KEY (`chat_id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into chat (chat_title,chat_author,submission_date) values ('蓝猫不吃鱼昨天洗澡前抽烟了','蓝猫不吃鱼',NOW());

select count(*) from chat;

select * from chat;

desc chat;

select chat_title,chat_author from chat;

-- MySQL 的 WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的。

select chat_title from chat where chat_author='比亚迪车主' limit 100;

-- sql 语句分类：todo:
-- sql 语句分类：todo:

-- DDL : data definition language ==> 用于对 database table column 的增删改查操作。
-- DML: data manipulation language ===> 用于对 table 中的数据进行 增删改操作。
-- DQL: data query language ===> 用于对 table 中的数据进行 查询操作。

show databases; -- 查看全部的 数据库文件

show create database dbName; -- 查看的某个数据库

create database dbName; -- 创建数据库

create database dbName character set utf8;

drop database dbName; -- 删除某个数据库

select database(); -- 查看正在使用的数据库

use dbName; -- 使用指定数据库

create table user(
    -> uid int(32) primary key auto_increment,
    -> uname varchar(32) not null,
    -> upassword varchar(32) not null
    -> ); -- 创建表

show create table tbName; -- 查看表结构

desc tbName; -- 查看表结构

show tables; -- 查看当前数据库中全部的 表

drop table tbName; -- 删除表

alter table tbName add _info varchar(512) not null; -- alter 添加表字段

alter table tbName modify uid int(18) unique; -- alter 修改表中某个字段的属性，约束

alter table tbName change _uid _uid int(32) auto_increment; -- alter 修改表的某个字段的名字及其属性

alter table tbName change _info _info varchar(32) not null default ''; -- 设置字段默认值

alter table tbName drop fieldName; -- 删除表中某个字段名

rename table tbName to tbName2; -- 重命名表名

alter table tbUser character set utf8; -- 修改表的字符集编码

insert into tbName(_name,_password,_info) values('汤姆丁','for_freedom','I am tom.Ding'); -- 插入一行数据

update tbName set _info = 'I am tom.Ding, I would like to live in america. I like freedom.' where _name='汤姆丁'; -- 按条件更新数据

delete from tbName where _name = '布鲁斯李'; -- 按条件删除

delete from tbName; -- 删除表中全部数据

truncate tbName; -- 删除表，然后重新创建该表。

--- delete from 与 truncate 的一个区别：delete from 删除的数据可以配合事物找回，而 truncate 不能。

start TRANSACTION;
delete from tbName;
ROLLBACK; -- 回滚事物，（让删除的数据找回）


start TRANSACTION;
truncate tbName;
ROLLBACK; -- 回滚事物，(对 truncate 无效)

-- 本质上是因为 truncate 是 DDL , 而 delete 是 DML .

select distinct * from user as u; -- 使用表别名 查询表

select _name as name from tbName as tb; -- 使用字段别名查询

select distinct(_name) as name from tbName as u; -- 去除重复数据的查询

select _uid+10,_name,_password,_info from tbName; -- uid+10 ,然后显示

update user set _password = 'KONGFU' where _password = 'kongfu';

select * from tbName where _info like '%tom%'; -- like 模糊查询

select * from user where _uid in (2,3); -- 指定范围

select * from user where _uid in (2,3) and _password like '%KO%';

select * from user where _password like '%KO%' or _password like '%free%';

select * from user where _uid > 100 or 1=1; -- 通过 or 1=1 ，取出全部的数据

select * from user order by _uid desc; -- 降序

select * from user order by _uid asc; -- 升序

select sum(_uid) from tbName; -- 求和

select avg(_uid) from tbName where _uid > 10; -- 求平均

select count(_uid) from tbName; -- 求记录总数

select _name,_password,count(*) from user group by _group desc having _password like "%KO%"; -- group by 后面的条件通过 having ，而不是 where

-- todo: 完整的查询语句，对应的关键字先后出现的顺序
select * from user group by _group desc having _group in(2,1,5,3,4) order by _uid asc limit 0,9; -- 完整的条件查询的关键字位置
-- 这里的 group by _group desc --> 这里的 desc 会被最后的 order by _uid asc 覆盖。









