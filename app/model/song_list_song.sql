CREATE TABLE `SongList2Songs`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `song_list_id` int(11) NOT NULL COMMENT '歌单id',
  `song_id` int(11) NOT NULL COMMENT '曲目id',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  unique(`song_list_id`, `song_id`),
  foreign key(`song_list_id`) references `SongLists`(`id`)
  on delete cascade
  on update cascade,
  foreign key(`song_id`) references `Songs`(`id`)
  on delete cascade
  on update cascade,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='歌单与曲目关系表';