import axios from 'axios'
import { searchSong } from '../config/api'
// constant
const SONG_FETCH_START = 'SONG_FETCH_START'
const SONG_FETCH_END = 'SONG_FETCH_END'

// initial State
const initState = {
  isFetching: false,
  songs: [],
}

// reducer
export const searchSong = (state = initState, action) => {
  switch (action.type) {
    case SONG_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case SONG_FETCH_END:
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
  type: SONG_FETCH_START,
})

const fetchEndAct = datas => ({
  type: SONG_FETCH_END,
  payload: datas,
})

// login operation
export const fetchSong = (offset, limit, keywords) => (dispatch) => {
  dispatch(fetchStartAct())
  axios
    .get(searchSong(offset, limit, keywords), { dataType: 'json' })
    .then((res) => {
      dispatch(fetchEndAct(res.data.result))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}
