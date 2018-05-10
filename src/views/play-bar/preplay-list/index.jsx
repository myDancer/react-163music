import React from 'react'
import { connect } from 'react-redux'
import { formatDuration } from '../../../common/js/util'
import { changeCurrent } from '../../../redux/preparelist.redux'
import { fetchCurLyric } from '../../../redux/currentlyric.redux'
import './style.styl'

const parseLyric = (lyricStr) => {
  // 将文本分隔成一行一行，存入数组
  let lines = lyricStr.split('\n')
  // 用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
  const pattern = /\[\d{2}:\d{2}.\d{1,3}\]/g
  // 保存最终结果的数组
  const result = []
  // 去掉不含时间的行
  while (!pattern.test(lines[0])) {
    lines = lines.slice(1)
  }
  // 上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
  if (!lines[lines.length - 1].length) { lines.pop() }
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const value = line.replace(pattern, '') // 提取歌词 将时间清空 返回一个新的字符串
    // 返回数组 [时间]，对该数组做处理，将时间转为秒数，同时注意此类情况:多个时间点共享同一句歌词，[时间1，时间2...]
    const times = line.match(pattern) || []
    times.forEach((time) => {
      // 去掉时间里的中括号得到xx:xx.xx并用:分割得到[xx,xx.xx]的数组
      const t = time.slice(1, -1).split(':')
      // 将结果压入最终数组
      result.push([(parseInt(t[0], 10) * 60) + parseFloat(t[1]), value, time + i]) // 组合成 [时间,歌词]
      // 此处可能多个时间对应同一句歌词，而result.push显然会打乱顺序的，例如第一个时间点和最后一个时间点共享同一句歌词，而此时Push进去他们是相邻的，应按照时间顺序进行排序
    })
  }
  // 加上下标 是为了取出时间 result[0][0]与result[1][0]做比较而不是result[0]与result[1]做比较
  result.sort((a, b) => a[0] - b[0])
  return result
}
@connect( // 将store和组件联系在一起
  state => ({ // mapStateToProps
    prepareObj: state.prepareListReducer,
    curlyricObj: state.currentlyricReducer,
  }),
  { // mapDispatchToProps
    changeCurrent, fetchCurLyric,
  },
)
class PreplayList extends React.Component {
  constructor(props) {
    super(props)
    this.prePlayVisible = this.prePlayVisible.bind(this)
    this.state = { preplayVisible: false }
    this.props.onRef(this)
    if (this.props.prepareObj.current.id) {
      this.props.fetchCurLyric(this.props.prepareObj.current.id)
    }
  }
  prePlayVisible() {
    this.setState({ preplayVisible: !this.state.preplayVisible })
  }
  render() {
    const { current, preparelist } = this.props.prepareObj
    const { lrc } = this.props.curlyricObj
    let result = []
    if (lrc && lrc.lyric) {
      result = parseLyric(lrc.lyric)
    }
    return (
      <div className="preplay" style={{ display: this.state.preplayVisible ? 'block' : 'none' }}>
        <div className="preplay-hd">
          <h4>播放列表</h4>
          <button className="adddall">收藏全部</button>
          <span className="line" />
          <button className="clear">清除</button>
          <p>{current && current.name}</p>
          <button className="close" onClick={this.prePlayVisible} >X</button>
        </div>
        <div className="preplay-bd">
          <img className="imgbg" src="//music.163.com/api/img/blur/2537672838499047" alt="背景" />
          <div className="msk" />
          <div className="song-list">
            <ul>
              {preparelist && preparelist.map(item => (
                <li key={item.id}>
                  <div className="col col1"><i className="playicn" style={{ display: current.id === item.id ? 'block' : 'none' }} /></div>
                  <div className="col col2">{item.name}</div>
                  <div className="col col3"><div className="icns"><i className="icn icn1" /><i className="icn icn2" /><i className="icn icn3" /><i className="icn icn4" /></div></div>
                  <div className="col col4">{item.ar[0].name}</div>
                  <div className="col col5">{formatDuration(item.dt)}</div>
                  <div className="col col6"><button className="icn-src" /></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bline" />
          <div className="lyric">
            {result.map(item => (
              <p key={item[2]}>{item[1]}</p>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default PreplayList
