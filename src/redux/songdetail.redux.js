import axios from 'axios'
import { getSongDetail } from '../config/api'
// constant
const SONG_DETAIL_FETCH_START = 'SONG_DETAIL_FETCH_START'
const SONG_DETAIL_FETCH_END = 'SONG_DETAIL_FETCH_END'

// initial State
const initState = {
  isFetching: false,
  songs: [],
}

// reducer
export const songdetail = (state = initState, action) => {
  switch (action.type) {
    case SONG_DETAIL_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case SONG_DETAIL_FETCH_END:
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
  type: SONG_DETAIL_FETCH_START,
})

const fetchEndAct = datas => ({
  type: SONG_DETAIL_FETCH_END,
  payload: datas,
})

// login operation
export const fetchSongDetail = id => (dispatch) => {
  dispatch(fetchStartAct())
  axios
    .get(getSongDetail(id), { dataType: 'json' })
    .then((res) => {
      dispatch(fetchEndAct(res.data))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}
