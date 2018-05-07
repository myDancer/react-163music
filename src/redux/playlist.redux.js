import axios from 'axios'
import { playList } from '../config/api'
import '../config/mock'
// constant
const PLAYLIST_FETCH_START = 'PLAYLIST_FETCH_START'
const PLAYLIST_FETCH_END = 'PLAYLIST_FETCH_END'
const PLAYLIST_CLEAR = 'PLAYLIST_CLEAR'

// initial State
const initState = {
  isFetching: false,
  playlist: {},
}

// reducer
export const playListReducer = (state = initState, action) => {
  switch (action.type) {
    case PLAYLIST_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case PLAYLIST_FETCH_END:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      }
    case PLAYLIST_CLEAR:
      return {
        isFetching: false,
        playlist: {},
      }
    default:
      return {
        ...state,
      }
  }
}

// action creator
const fetchStartAct = () => ({
  type: PLAYLIST_FETCH_START,
})

const fetchEndAct = PLAYLIST => ({
  type: PLAYLIST_FETCH_END,
  payload: PLAYLIST,
})

const clearAct = () => ({
  type: PLAYLIST_CLEAR,
})

// login operation
export const fetchPlayList = id => (dispatch) => {
  dispatch(fetchStartAct())
  axios
    .get(playList(id), { dataType: 'json' })
    .then((res) => {
      dispatch(fetchEndAct(res.data))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}

export const clearPlayList = () => (dispatch) => {
  dispatch(clearAct())
}
