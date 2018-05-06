import { combineReducers } from 'redux'
import { swiper } from './swiper.redux'
import { recommendReducer } from './recommend.redux'
import { song } from './song.redux'
import { playListReducer } from './playlist.redux'


export default combineReducers({
  swiper, recommendReducer, song, playListReducer,
})
