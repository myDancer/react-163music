// constant
const ADD_PREPARE = 'ADD_PREPARE'
const CHANGE_CURRENT = 'CHANGE_CURRENT'

// initial State
const initState = {
  current: {},
  preparelist: [],
}

// reducer
export const prepareListReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PREPARE:
      return {
        ...state,
        preparelist: state.preparelist.concat(action.payload),
      }
    case CHANGE_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

// 增加预播放歌曲列表
const addPrepareAct = prepareList => ({
  type: ADD_PREPARE,
  payload: prepareList,
})
// 改变当前播放
const changeCurentAct = current => ({
  type: CHANGE_CURRENT,
  payload: current,
})

export const addPrepareList = prepareList => (dispatch) => {
  dispatch(addPrepareAct(prepareList))
}

export const changeCurrent = current => (dispatch) => {
  dispatch(changeCurentAct(current))
}
