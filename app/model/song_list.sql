CREATE TABLE `SongList`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(30) DEFAULT NULL COMMENT '歌单名称',
  `author` varchar(20) DEFAULT NULL COMMENT '歌单作者',
  `count` int(12) DEFAULT 0  COMMENT '播放量',
  `favorite` int(12) DEFAULT 0 COMMENT '歌单收藏量',
  `description` VARCHAR(100) DEFAULT '' COMMENT '歌单描述',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='歌单';
