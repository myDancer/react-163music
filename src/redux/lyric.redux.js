import axios from 'axios'
import { getLyric } from '../config/api'
// constant
const LYRIC_FETCH_START = 'LYRIC_FETCH_START'
const LYRIC_FETCH_END = 'LYRIC_FETCH_END'

// initial State
const initState = {
  isFetching: false,
  lyc: {},
}

// reducer
export const lyricReducer = (state = initState, action) => {
  switch (action.type) {
    case LYRIC_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case LYRIC_FETCH_END:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

// action creator
const fetchStartAct = () => ({
  type: LYRIC_FETCH_START,
})

const fetchEndAct = lyric => ({
  type: LYRIC_FETCH_END,
  payload: lyric,
})

// login operation
export const fetchLyric = id => (dispatch) => {
  dispatch(fetchStartAct())
  axios
    .get(getLyric(id), { dataType: 'json' })
    .then((res) => {
      dispatch(fetchEndAct(res.data))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}

