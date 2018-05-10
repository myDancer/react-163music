import axios from 'axios'
import { getLyric } from '../config/api'
// constant
const CURLYRIC_FETCH_START = 'CURLYRIC_FETCH_START'
const CURLYRIC_FETCH_END = 'CURLYRIC_FETCH_END'

// initial State
const initState = {
  isFetching: false,
  curLyric: {},
}

// reducer
export const currentlyricReducer = (state = initState, action) => {
  switch (action.type) {
    case CURLYRIC_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case CURLYRIC_FETCH_END:
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
  type: CURLYRIC_FETCH_START,
})

const fetchEndAct = lyric => ({
  type: CURLYRIC_FETCH_END,
  payload: lyric,
})

// login operation
export const fetchCurLyric = id => (dispatch) => {
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

