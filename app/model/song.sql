CREATE TABLE `Song`(
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(30) DEFAULT NULL COMMENT '歌曲名称',
  `category` text(100) DEFAULT NULL COMMENT '歌曲类别',
  `time` int(20) DEFAULT 0 COMMENT '曲目时长',
  `url`  varchar(100) DEFAULT NULL COMMENT '歌曲文件地址',
  `singer` varchar(20) DEFAULT NULL COMMENT '歌手',
  `album` varchar(20) DEFAULT '' COMMENT '专辑',
  `download` int(12) DEFAULT 0  COMMENT '下载数',
  `favorite` int(12) DEFAULT 0 COMMENT '收藏数',
  `description` VARCHAR(100) DEFAULT '' COMMENT '曲目描述',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='曲目';