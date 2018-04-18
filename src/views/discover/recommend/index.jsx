import React from 'react'
// import { fetchSwiperImg } from '../../../redux/swiper.redux'
import Swiper from '../../../component/Swiper'
import './style.styl'

// @connect(
//   state => ({
//     swiperObj: state.swiper,
//   }),
//   {
//     fetchSwiperImg,
//   },
// )
const Recommend = () =>
  (
    <div>
      <Swiper />
      <div>.</div>
    </div>
  )
export default Recommend
