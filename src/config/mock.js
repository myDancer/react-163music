// 使用 Mock
// const Mock = require('mockjs')
import Mock from 'mockjs'

Mock.mock('/getSwiper', [
  {
    img: 'http://p1.music.126.net/JA2LcQowSlbJElENVmp1Mg==/109951163268330573.jpg', bgc: 'http://p1.music.126.net/0kBKmm7ahN36uecuYVARaA==/109951163268330574.jpg',
  },
  {
    img: 'http://p1.music.126.net/QUcZrt6GKqnQPgJYygOmlw==/109951163269933890.jpg', bgc: 'http://p1.music.126.net/qxDRNfUIzuQHOCKCA2yDHg==/109951163269936691.jpg',
  },
  {
    img: 'http://p1.music.126.net/2I7h3dsuX0N7WE8T9StJZg==/109951163269800340.jpg', bgc: 'http://p1.music.126.net/MQ0iGGqGP8jy60VxEeCL4w==/109951163269800342.jpg',
  },
  {
    img: 'http://p1.music.126.net/1vyVDTwTiY8DHS3qbpji2w==/109951163269788840.jpg', bgc: 'http://p1.music.126.net/EGTuZtmQ037mWfGUpGWKcg==/109951163269792145.jpg',
  },
  {
    img: 'http://p1.music.126.net/s1SkiaEmgxLFGocXeKmKAg==/109951163269796620.jpg', bgc: 'http://p1.music.126.net/pt0sTMacfRMnpea_0YI30Q==/109951163269794181.jpg',
  },
  {
    img: 'http://p1.music.126.net/rsf8Gr2NOG-Cd7j9fvlvRw==/109951163269785446.jpg', bgc: 'http://p1.music.126.net/uvV93KVGldGK3Ed62Iup1g==/109951163269789748.jpg',
  },
  {
    img: 'http://p1.music.126.net/OwR0usd1D_E5RlSYQWmSnA==/109951163270154675.jpg', bgc: 'http://p1.music.126.net/52Tn3r-Z615R6erTK9YPXA==/109951163270148930.jpg',
  },
  {
    img: 'http://p1.music.126.net/9nbTqC7RrErcJ78X6w2HGw==/109951163269984965.jpg', bgc: 'http://p1.music.126.net/5DACU9fWZznN4OfetPPUwA==/109951163269794789.jpg',
  },
])
Mock.mock('/getRecommendList', {
  recommend: [
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: '/song/1', title: '时光里，我们都是赶路人', playNum: '24万',
    },
    {
      imgUrl: 'http://p1.music.126.net/WjDAZ9C8whAB6yfE_sfIFw==/109951163244980773.jpg?param=140y140', link: '/song/2', title: '致回不去的校园，致那美好的曾经', playNum: '288万',
    },
    {
      imgUrl: 'http://p1.music.126.net/0E9MVcPEjk-DNEqWG0e51w==/109951163268677829.jpg?param=140y140', link: '/song/3', title: '人生无法重启 但你有这些歌曲', playNum: '8万',
    },
    {
      imgUrl: 'http://p1.music.126.net/PGVb8dJCMxzK7ZNnEqWgFA==/18515775813897107.jpg?param=140y140', link: '/song/4', title: '韩语| 一把吉他 ＋ 一段声音 = 超好听', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/yEy06d47Bjj8mk5fWyRiKg==/109951163262763876.jpg?param=140y140', link: '/song/5', title: '马伯庸：我怀念的，是那张传说中的三寸软盘。', playNum: '21733',
    },
    {
      imgUrl: 'http://p1.music.126.net/HFHrwKG3JQi3UJK6bmBpkA==/18875316114609391.jpg?param=140y140', link: '/song/6', title: '♛游戏必用电音♚', playNum: '24万',
    },
    {
      imgUrl: 'http://p1.music.126.net/3lmM36s1lXaE37wvX6XTWg==/109951163267780973.jpg?param=140y140', link: '/song/7', title: '戒烟 抖音完整版', playNum: '29万',
    },
    {
      imgUrl: 'http://p1.music.126.net/jpzUtYuvdB0Hd4BsmyPWZw==/109951163143073933.jpg?param=140y140', link: '/song/8', title: '音室Vol.4丨细 数 一 些 旧 时 光', playNum: '34万',
    },
  ],
  singerList: [
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './1', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './2', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './3', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './4', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './5', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
  ],
  diskList: [
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: '/song/1',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: '/song/2',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: '/song/3',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: '/song/4',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: '/song/5',
    },
  ],
  billList: [
    {
      imgUrl: 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
      billTitle: '云音乐飙升榜',
      name: '陈立',
      link: './1',
      singList: [
        { songName: '你打不过我吧', link: '/123' },
        { songName: '你打不过我吧', link: '/1231' },
        { songName: '你打不过我吧', link: '/1232' },
        { songName: '你打不过我吧', link: '/1233' },
        { songName: '你打不过我吧', link: '/1234' },
        { songName: '你打不过我吧', link: '/1235' },
        { songName: '你打不过我吧', link: '/1236' },
        { songName: '你打不过我吧', link: '/1237' },
        { songName: '你打不过我吧', link: '/1238' },
        { songName: '你打不过我吧', link: '/1239' },
      ],
    },
    {
      imgUrl: 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
      billTitle: '云音乐飙升榜',
      name: '陈立',
      link: './2',
      singList: [
        { songName: '你打不过我吧', link: '/123' },
        { songName: '你打不过我吧', link: '/1231' },
        { songName: '你打不过我吧', link: '/1232' },
        { songName: '你打不过我吧', link: '/1233' },
        { songName: '你打不过我吧', link: '/1234' },
        { songName: '你打不过我吧', link: '/1235' },
        { songName: '你打不过我吧', link: '/1236' },
        { songName: '你打不过我吧', link: '/1237' },
        { songName: '你打不过我吧', link: '/1238' },
        { songName: '你打不过我吧', link: '/1239' },
      ],
    },
    {
      imgUrl: 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
      billTitle: '云音乐飙升榜',
      name: '陈立',
      link: './3',
      singList: [
        { songName: '你打不过我吧', link: '/123' },
        { songName: '你打不过我吧', link: '/1231' },
        { songName: '你打不过我吧', link: '/1232' },
        { songName: '你打不过我吧', link: '/1233' },
        { songName: '你打不过我吧', link: '/1234' },
        { songName: '你打不过我吧', link: '/1235' },
        { songName: '你打不过我吧', link: '/1236' },
        { songName: '你打不过我吧', link: '/1237' },
        { songName: '你打不过我吧', link: '/1238' },
        { songName: '你打不过我吧', link: '/1239' },
      ],
    },
  ],
  djList: [
    {
      imgUrl: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', title: '心理学家、美食家陈立教授', name: '陈立', link: './5',
    },
  ],
})
