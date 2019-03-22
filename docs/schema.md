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
| avatar | string | 歌手头像 |

# 评论comment Schema
| 字段 | 类型 | 说明 |
|:----:|:----:|:----:|
| id | string | 评论id |
| type | string | 评论类型 |
| name | string | 姓名 | 
| nick | string | 昵称 |
| avatar | string | 头像 |
| content | string | 评论内容 |
带的回复评论如何设计？
