CREATE TABLE `UserSongList`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `song_list_id` int(11) NOT NULL COMMENT '歌单id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `is_self_cread` boolean NOT NULL COMMENT "是否是用户创建的"
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  unique(`song_list_id`, `user_id`),
  foreign key(`song_list_id`) references `SongLists`(`id`)
  on delete cascade
  on update cascade,
  foreign key(`user_id`) references `Users`(`id`)
  on delete cascade
  on update cascade,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='歌单与用户关系表';