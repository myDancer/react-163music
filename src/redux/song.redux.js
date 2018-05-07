import axios from 'axios'
import { songDetail } from '../config/api'
import '../config/mock'
// constant
const SONG_FETCH_START = 'SONG_FETCH_START'
const SONG_FETCH_END = 'SONG_FETCH_END'

// initial State
const initState = {
  isFetching: false,
  data: [],
}

// reducer
export const song = (state = initState, action) => {
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
export const fetchSong = id => (dispatch) => {
  console.log('fetchSong')
  dispatch(fetchStartAct())
  axios
    .get(songDetail(id), { dataType: 'json' })
    .then((res) => {
      dispatch(fetchEndAct(res.data))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}
