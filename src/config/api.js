// 轮播图
export const swiperUrl = '/getSwiper'

// 轮播图
export const recommendList = '/getRecommendList'


// 查找歌单
export function searchPlaylist(keyword) {
  return `https://api.imjad.cn/cloudmusic/?type=search&search_type=1000&s=${keyword}`
}

// 获取歌
export const songDetail = 'https://api.mtnhao.com/music/url?id=29715187'

// 根据歌单id查找歌单
export function playList(id) {
  return `http://music.163.com/api/playlist/detail?id=${id}`
}
