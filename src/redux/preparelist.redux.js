// constant
const ADD_PREPARE = 'ADD_PREPARE'
const CHANGE_CURRENT = 'CHANGE_CURRENT'
const CHANGE_CURINDEX = 'CHANGE_CURINDEX'

// initial State
const initState = {
  currentIndex: 0,
  autoPlay: false,
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
}

// reducer
export const prepareListReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PREPARE:
      return {
        ...state,
        preparelist: [...state.preparelist, action.payload],
      }
    case CHANGE_CURRENT:
      return {
        ...state,
        autoPlay: true,
        current: action.payload,
      }
    case CHANGE_CURINDEX:
      return {
        ...state,
        currentIndex: action.payload,
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
// 改变当前播放index
const changeCurIndexAct = index => ({
  type: CHANGE_CURINDEX,
  payload: index,
})

export const addPrepareList = prepareList => (dispatch) => {
  dispatch(addPrepareAct(prepareList))
}

export const changeCurrent = current => (dispatch) => {
  dispatch(changeCurentAct(current))
}

export const changeCurIndex = index => (dispatch) => {
  dispatch(changeCurIndexAct(index))
}
