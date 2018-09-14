create table if not exists `chat`( `chat_id` INT UNSIGNED AUTO_INCREMENT, `chat_title` VARCHAR(100) NOT NULL, `chat_author` VARCHAR(40) NOT NULL, `submission_date` DATE, PRIMARY KEY (`chat_id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into chat (chat_title,chat_author,submission_date) values ('蓝猫不吃鱼昨天洗澡前抽烟了','蓝猫不吃鱼',NOW());

select count(*) from chat;

select * from chat;

desc chat;

select chat_title,chat_author from chat;

# MySQL 的 WHERE 子句的字符串比较是不区分大小写的。 你可以使用 BINARY 关键字来设定 WHERE 子句的字符串比较是区分大小写的。

select chat_title from chat where chat_author='比亚迪车主' limit 100;