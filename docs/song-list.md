# 歌单Schema
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

# 曲目Schema
| 字段 | 类型 | 说明 |
|:----:|:----:|:-----:|
| id | number | 曲目id |
| name | string | 曲目名 |
| time | number | 曲目时长 |
| singer | array \| string | 歌手 |

# 歌手Schema
| 字段 | 类型 | 说明 |
|:----:|:----:|:----:|
| id | string | 歌手id |
| name | string | 姓名 | 
| avatar | string | 歌手头像 |
