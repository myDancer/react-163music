// 轮播图
export const swiperUrl = '/getSwiper'

// 轮播图
export const recommendList = '/getRecommendList'

// 获取歌
export function songDetail(id = '29715187') {
  return `https://api.mtnhao.com/music/url?id=${id}`
}

// 根据歌单id查找歌单
export function playList(id) {
  return `http://api.mtnhao.com/toplist/detail/mm?id=${id}`
}
