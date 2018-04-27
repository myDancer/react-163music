// 使用 Mock
// const Mock = require('mockjs')
import Mock from 'mockjs'

Mock.mock('/getSwiper', [
  {
    img: 'http://p1.music.126.net/JA2LcQowSlbJElENVmp1Mg==/109951163268330573.jpg',
  },
  {
    img: 'http://p1.music.126.net/QUcZrt6GKqnQPgJYygOmlw==/109951163269933890.jpg',
  },
  {
    img: 'http://p1.music.126.net/2I7h3dsuX0N7WE8T9StJZg==/109951163269800340.jpg',
  },
  {
    img: 'http://p1.music.126.net/1vyVDTwTiY8DHS3qbpji2w==/109951163269788840.jpg',
  },
  {
    img: 'http://p1.music.126.net/s1SkiaEmgxLFGocXeKmKAg==/109951163269796620.jpg',
  },
  {
    img: 'http://p1.music.126.net/rsf8Gr2NOG-Cd7j9fvlvRw==/109951163269785446.jpg',
  },
  {
    img: 'http://p1.music.126.net/OwR0usd1D_E5RlSYQWmSnA==/109951163270154675.jpg',
  },
  {
    img: 'http://p1.music.126.net/9nbTqC7RrErcJ78X6w2HGw==/109951163269984965.jpg',
  },
])
Mock.mock('/getSwiper1', { data: { first: '1' } })
