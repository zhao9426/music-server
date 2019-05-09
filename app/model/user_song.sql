CREATE TABLE `UserSongs`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `song_id` int(11) NOT NULL COMMENT '曲目id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  unique(`song_id`, `user_id`),
  foreign key(`song_id`) references `Songs`(`id`)
  on delete cascade
  on update cascade,
  foreign key(`user_id`) references `Users`(`id`)
  on delete cascade
  on update cascade,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户与曲目关系表';