// 轮播图
export const swiperUrl = '/getSwiper'

// 轮播图
export const recommendList = '/getRecommendList'

// 获取歌
export const songDetail = 'https://api.mtnhao.com/music/url?id=29715187'

// 根据歌单id查找歌单
export function playList(id) {
  return `http://api.mtnhao.com/toplist/detail/mm?id=${id}`
}
