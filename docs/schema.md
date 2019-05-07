# 歌单SongList Schema
| 字段 | 类型 | 说明 | 
|:----:|:---:|:----:|
| id | int | 歌单id |
| poster | string | 歌单封面 |
| name | string | 歌单名称 |
| songs | array | 曲目id列表 |
| author | string | 歌单作者 |
| count | number | 播放数量 |
| favorite | number | 收藏数 |
| description | string | 简介 |
| updated_At | Date | 更新时间 |
| created_At | Date | 创建时间 |

# 曲目Song Schema
| 字段 | 类型 | 说明 |
|:----:|:----:|:-----:|
| id | number | 曲目id |
| name | string | 曲目名 |
| time | number | 曲目时长 |
| singer | array \| string | 歌手 |
| album | string | 专辑 |
| favorite | number | 收藏数 |
| download | number | 下载数 |
| url      | string | 文件地址 |
| description | string | 描述信息 | 

# 歌手Schema
| 字段 | 类型 | 说明 |
|:----:|:----:|:----:|
| id | string | 歌手id |
| name | string | 姓名 | 
| avatarUrl | string | 歌手头像 |
| follower | number | 粉丝数 |

# 评论comment Schema
| 字段 | 类型 | 说明 |
|:----:|:----:|:----:|
| id | string | 评论id |
| topic_id | int | 评论主题id |
| topic_type | int | 评论类型 歌单or歌曲 |
| from_uid | int | 评论用户id |
| from_uname | string | 评论用户名 | 
| content | string | 评论内容 |
| to_uid | int | 评论目标用户id |

# 歌单与用户关系表
| 字段 | 类型 | 说明 |
|:----:|:----:|:----:|
| id | string | id |
| song_list_id | int | 歌单id |
| user_id | int | 用户id |
| is_self_cread | bool | 是用户自己创建的或收藏的 |

# 歌手与用户关系表(我关注的歌手)
| 字段 | 类型 | 说明 |
|:----:|:----:|:----:|
| id | string | id |
| singer_id | int | 歌手id |
| user_id | int | 用户id |

# 歌曲与用户关系表(我喜欢的歌曲)
| 字段 | 类型 | 说明 |
|:----:|:----:|:----:|
| id | string | id |
| song_id | int | 曲目id |
| user_id | int | 用户id |



