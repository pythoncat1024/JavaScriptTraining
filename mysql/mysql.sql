create table if not exists `chat`( `chat_id` INT UNSIGNED AUTO_INCREMENT, `chat_title` VARCHAR(100) NOT NULL, `chat_author` VARCHAR(40) NOT NULL, `submission_date` DATE, PRIMARY KEY (`chat_id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into chat (chat_title,chat_author,submission_date) values ('蓝猫不吃鱼昨天洗澡前抽烟了','蓝猫不吃鱼',NOW());

select count(*) from chat;

select * from chat;

desc chat;

select chat_title,chat_author from chat;

-- MySQL 的 WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的。

select chat_title from chat where chat_author='比亚迪车主' limit 100;

-- sql 语句分类：

-- DDL : data definition language ==> 用于对 database table column 的增删改查操作。
-- DML: data manipulation language ===> 用于对 table 中的数据进行 增删改操作。
-- DQL: data query language ===> 用于对 table 中的数据进行 查询操作。