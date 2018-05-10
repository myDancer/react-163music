// constant
const ADD_PREPARE = 'ADD_PREPARE'
const CHANGE_CURRENT = 'CHANGE_CURRENT'

// initial State
const initState = {
  current: {
    name: '我与你',
    id: 29715187,
    dt: 235572,
    ar: [
      {
        id: 9548,
        name: '张学友',
        tns: [],
        alias: [],
      },
    ],
    alia: [
      '电影《我的少女时代》主题曲',
    ],
    al: {
      id: 3190030,
      name: '小幸运',
      picUrl: 'http://p1.music.126.net/HnFqFLQAJ-w9h4aKympCeA==/2537672838499047.jpg',
      tns: [],
      pic_str: '109951163281534779',
      pic: 109951163281534780,
    },
  },
  preparelist: [{
    name: '我与你',
    id: 29715187,
    dt: 235572,
    ar: [
      {
        id: 9548,
        name: '张学友',
        tns: [],
        alias: [],
      },
    ],
    alia: [
      '电影《我的少女时代》主题曲',
    ],
    al: {
      id: 3190030,
      name: '小幸运',
      picUrl: 'http://p1.music.126.net/HnFqFLQAJ-w9h4aKympCeA==/2537672838499047.jpg',
      tns: [],
      pic_str: '109951163281534779',
      pic: 109951163281534780,
    },
  }],
  autoPlay: false,
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
        autoPlay: true,
        current: action.payload,
        preparelist: [...state.preparelist, action.payload],
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
