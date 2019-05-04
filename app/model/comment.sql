CREATE TABLE `Comment`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `from_uid` int(11) NOT NULL COMMENT '评论者id',
  `from_uname` varchar(30) NOT NULL COMMENT '评论者名字',
  `topic_id`  int(11) NOT NULL COMMENT '评论对象id',
  `topic_type` int(1) NOT NULL COMMENT '评论对象类型',
  `content` VARCHAR(255) NOT NULL  COMMENT '评论内容',
  `to_uid` int(11) DEFAULT NULL COMMENT "评论目标用户id",
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论';