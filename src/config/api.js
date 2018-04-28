// 轮播图
export const swiperUrl = '/getSwiper'

// 轮播图
export const recommendList = '/getRecommendList'


// 查找歌单
export function searchPlaylist(keyword) {
  return `https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s=${keyword}`
}
