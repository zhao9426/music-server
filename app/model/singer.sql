CREATE TABLE `Singer`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(30) DEFAULT NULL COMMENT '名字',
  `avatarUrl`  varchar(100) DEFAULT NULL COMMENT '头像地址',
  `follower` int(12) DEFAULT 0 COMMENT '粉丝数',
  `description` VARCHAR(100) DEFAULT '' COMMENT '歌手介绍',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='歌手';