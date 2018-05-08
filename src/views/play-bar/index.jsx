import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatCurrentTime } from '../../common/js/util'
import { changeCurrent } from '../../redux/preparelist.redux'
import { fetchSong } from '../../redux/song.redux'
import './style.styl'

@connect( // 将store和组件联系在一起
  state => ({ // mapStateToProps
    songObj: state.song,
    prepareObj: state.prepareListReducer,
  }),
  { // mapDispatchToProps
    fetchSong, changeCurrent,
  },
)
class PlayBar extends React.Component {
  constructor(props) {
    super(props)
    this.VOLLONG = 82
    this.state = {
      playing: false,
      currentTime: '00:00',
      audioDuration: '00:00',
      currWidth: '0%',
      audioLoading: false,
      bufferPercent: '0%',
      sliderOption: {
        isDrag: false,
        scale: 0,
      },
      cycleMode: 0,
      volHeight: 65.6,
      showVol: false,
    }
    this.refCB = this.refCB.bind(this)
    this.playOrPause = this.playOrPause.bind(this)
    this.handelDurationChange = this.handelDurationChange.bind(this)
    this.loadingAudio = this.loadingAudio.bind(this)
    this.handleCanPlay = this.handleCanPlay.bind(this)
    this.handleProgress = this.handleProgress.bind(this)
    this.changeCurTime = this.changeCurTime.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.switchCycleMode = this.switchCycleMode.bind(this)
    this.changeVol = this.changeVol.bind(this)
    this.tranVol = this.tranVol.bind(this)
    this.showVolPanel = this.showVolPanel.bind(this)
  }
  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
    // 初始化音量
    this.tranVol(this.state.volHeight)
    const { data } = this.props.songObj
    if (!data.length) {
      this.props.fetchSong()
    }
  }
  refCB(ref) {
    this.audio = ref
  }
  showVolPanel() {
    this.setState({ showVol: !this.state.showVol })
  }
  // 改变音量条高度
  changeVol(e) {
    let volHeight = document.documentElement.clientHeight - 62 - e.clientY
    if (volHeight > this.VOLLONG) {
      volHeight = this.VOLLONG
    } else if (volHeight < 0) {
      volHeight = 0
    }
    this.setState({ volHeight })
    this.tranVol(volHeight)
  }
  // 高度转换成音量
  tranVol(volHeight) {
    this.audio.volume = ((100 / this.VOLLONG) * volHeight) / 100
  }
  // 切换循环模式
  switchCycleMode() {
    // 0 随机，1为单曲， 2为循环
    if (this.state.cycleMode < 2) {
      this.setState({ cycleMode: this.state.cycleMode + 1 })
    } else {
      this.setState({ cycleMode: 0 })
    }
  }
  // 鼠标松开
  handleMouseUp(e) {
    e.stopPropagation()
    if (this.state.sliderOption.isDrag) {
      this.setState({ sliderOption: { isDrag: false } })
    }
  }
  // 鼠标在进度条上划过
  handleMouseMove(e) {
    e.stopPropagation()
    if (this.state.sliderOption.isDrag) {
      const offsetLeft = document.getElementById('g_player').offsetLeft + 185
      let distance = e.clientX - offsetLeft
      distance = distance > 0 ? distance : 0
      let scale = distance / 493
      if (scale < 0) {
        scale = 0
      } else if (scale > 1) {
        scale = 1
      }
      this.audio.currentTime = this.audio.duration * scale
      this.setState({
        sliderOption: { scale, isDrag: true },
        currWidth: `${scale * 100}%`,
        currentTime: formatCurrentTime(this.audio.currentTime),
      })
    }
  }
  // 鼠标在进度点处按下
  handleMouseDown(e) {
    e.stopPropagation()
    this.setState({ sliderOption: { isDrag: true } })
  }
  // 点击播放进度条事件
  changeCurTime(e) {
    const offsetLeft = document.getElementById('g_player').offsetLeft + 185
    let distance = e.clientX - offsetLeft
    distance = distance > 0 ? distance : 0
    const scale = distance / 493
    this.audio.currentTime = this.audio.duration * scale
    this.setState({
      currWidth: `${scale * 100}%`,
      currentTime: formatCurrentTime(this.audio.currentTime),
    })
  }
  // 播放暂停按钮
  playOrPause() {
    if (!this.state.playing) {
      this.setState({
        playing: true,
      })
      this.audio.play()
      this.curTimeInterval = setInterval(() => {
        const per = parseFloat(this.audio.currentTime / this.audio.duration) * 100
        this.setState({ currentTime: formatCurrentTime(this.audio.currentTime), currWidth: `${per}%` })
      }, 400)
    } else {
      this.setState({
        playing: false,
      })
      this.audio.pause()
      clearInterval(this.curTimeInterval)
    }
  }
  // 音频可以播放
  handleCanPlay() {
    this.setState({ audioLoading: false })
  }
  // 音频加载
  handleProgress() {
    const timeRanges = this.audio.buffered
    // console.log(timeRanges)
    if (timeRanges.length >= 1) {
      const timeBuffered = timeRanges.end(timeRanges.length - 1)
      const bufferPercent = (timeBuffered / this.audio.duration) * 100
      this.setState({ bufferPercent: `${bufferPercent}%` })
    }
  }
  // 显示音频总时长
  handelDurationChange() {
    this.setState({ audioDuration: formatCurrentTime(this.audio.duration) })
  }
  // 开始加载音频，显示loading
  loadingAudio() {
    this.setState({ audioLoading: true })
  }
  render() {
    const { data } = this.props.songObj
    const { current } = this.props.prepareObj
    return (
      <div className="playbar-wrap" onMouseMove={this.handleMouseMove} style={{ userSelect: this.state.sliderOption.isDrag ? 'none' : 'text' }}>
        <audio controls="controls" src={data.length && data[0].url} ref={this.refCB} style={{ display: 'none' }} onProgress={this.handleProgress} onLoadedData={this.loadingAudio} onCanPlay={this.handleCanPlay} onLoadStart={this.loadingAudio} onDurationChange={this.handelDurationChange} />
        <div className="playbar">
          <div className="bg" />
          <div className="wrap" id="g_player">
            <div className="btns">
              <button className="play-btn btn-p" title="上一首">上一首</button>
              <button onClick={this.playOrPause} className={this.state.playing ? 'play-btn btn-paused' : 'play-btn btn-play'} title="播放/暂停">播放/暂停</button>
              <button className="play-btn btn-n" title="下一首">下一首</button>
            </div>
            <div className="headimg"><img alt="歌手头像" src={`${current.al && current.al.picUrl}?param=34y34`} /></div>
            <div className="play">
              <div className="wrods">
                <Link className="wrods-img1" to={`/song/${current.id}`}>{current && current.name}</Link>
                <span>{current.ar && current.ar[0].name}</span>
                <Link className="wrods-img2" to="./123" />
              </div>
              <div className="pbar">
                <div className="barbg" id="barbg" onClick={this.changeCurTime}>
                  <div className="rdy" style={{ width: this.state.bufferPercent }} />
                  <div className="cur" style={{ width: this.state.currWidth }}>
                    <div className="cur-btn" onMouseDown={this.handleMouseDown}>
                      <i style={{ visibility: this.state.audioLoading ? 'visible' : 'hidden' }} />
                    </div>
                  </div>
                </div>
                <span className="time">
                  {this.state.currentTime} / {this.state.audioDuration}
                </span>
              </div>
            </div>
            <div className="oper">
              <button className="oper-btn icn-add" />
              <button className="oper-btn icn-share" />
            </div>
            <div className="flag">
              <div className="vol" style={{ visibility: this.state.showVol ? 'visible' : 'hidden' }}>
                <div className="vol-bg" />
                <div className="vol-bar" onClick={this.changeVol}>
                  <div className="cur-vol" style={{ height: `${this.state.volHeight}px` }} />
                  <span className="cur-btn" style={{ top: `${this.VOLLONG - this.state.volHeight}px` }} />
                </div>
              </div>
              <button className="oper-btn icn-vol" onClick={this.showVolPanel} />
              <button onClick={this.switchCycleMode} className={`oper-btn icn-cycleMode${this.state.cycleMode}`} />
              <span className="add">
                <button className="oper-btn icn-list">0</button>
              </span>
            </div>
          </div>
          <div className="updown">
            <div className="updown-left">
              <button className="u-l-btn" />
            </div>
            <div className="updown-right" />
          </div>
        </div>
      </div>
    )
  }
}
export default PlayBar
