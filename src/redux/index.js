import { combineReducers } from 'redux'
import { swiper } from './swiper.redux'
import { recommendReducer } from './recommend.redux'


export default combineReducers({
  swiper, recommendReducer,
})
