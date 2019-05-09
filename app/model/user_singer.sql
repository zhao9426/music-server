CREATE TABLE `UserSingers`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `singer_id` int(11) NOT NULL COMMENT '歌手id',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  unique(`singer_id`, `user_id`),
  foreign key(`singer_id`) references `Singers`(`id`)
  on delete cascade
  on update cascade,
  foreign key(`user_id`) references `Users`(`id`)
  on delete cascade
  on update cascade,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户与歌手关系表';