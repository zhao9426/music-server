# 歌单Schema
| 字段 | 类型 | 说明 | 
|:----:|:---:|:----:|
| id | int | 歌单id |
| name | string | 歌单名称 |
| author | string | 歌单作者 |
| count | number | 听者数量 |
| favorite | number | 收藏数 |

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
