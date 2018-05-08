import axios from 'axios'
import { recommendList } from '../config/api'
// constant
const RECOMMEND_FETCH_START = 'RECOMMEND_FETCH_START'
const RECOMMEND_FETCH_END = 'RECOMMEND_FETCH_END'

// initial State
const initState = {
  isFetching: false,
  recommend: {
    recommend: [], singerList: [], diskList: [], billList: [], djList: [],
  },
}

// reducer
export const recommendReducer = (state = initState, action) => {
  switch (action.type) {
    case RECOMMEND_FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case RECOMMEND_FETCH_END:
      return {
        ...state,
        isFetching: false,
        recommend: { ...action.payload },
      }
    default:
      return {
        ...state,
      }
  }
}

// action creator
const fetchStartAct = () => ({
  type: RECOMMEND_FETCH_START,
})

const fetchEndAct = recommend => ({
  type: RECOMMEND_FETCH_END,
  payload: recommend,
})

// login operation
export const fetchRecommend = () => (dispatch) => {
  dispatch(fetchStartAct())
  axios
    .get(recommendList, { dataType: 'json' })
    .then((res) => {
      dispatch(fetchEndAct(res.data))
    })
    .catch((err) => {
      console.log('====================================')
      console.log(err)
      console.log('====================================')
    })
}
