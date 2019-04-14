CREATE TABLE `Category`(
    `name` varchar(20) not null COMMENT '类别名称',
    `type` int(6) COMMENT 'primary key',
    `created_at` datetime DEFAULT NULL COMMENT 'created time',
    `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
    PRIMARY KEY(`type`)
)