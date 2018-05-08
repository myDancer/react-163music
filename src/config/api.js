// 轮播图
export const swiperUrl = '/getSwiper'

// 轮播图
export const recommendList = '/getRecommendList'

// 获取mp3地址
export function getSongUrl(id = '29715187') {
  return `https://api.mtnhao.com/music/url?id=${id}`
}

// 获取歌取详情
export function getSongDetail(id = '29715187') {
  return `http://api.mtnhao.com/song/detail?ids=${id}`
}

// 根据id获取歌词
export function getLyric(id = '29715187') {
  return `http://api.mtnhao.com/lyric?id=${id}`
}

// 根据歌单id查找歌单
export function playList(id) {
  return `http://api.mtnhao.com/toplist/detail/mm?id=${id}`
}
