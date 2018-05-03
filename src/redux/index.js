import { combineReducers } from 'redux'
import { swiper } from './swiper.redux'
import { recommendReducer } from './recommend.redux'
import { song } from './song.redux'


export default combineReducers({
  swiper, recommendReducer, song,
})
