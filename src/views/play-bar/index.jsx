import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrentTime } from '../../common/js/util'
import './style.styl'

class PlayBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      currentTime: '00:00',
      audioDuration: '00:00',
      currWidth: '0%',
      audioLoading: false,
      bufferPercent: '0%',
    }
    this.refCB = this.refCB.bind(this)
    this.playOrPause = this.playOrPause.bind(this)
    this.handelDurationChange = this.handelDurationChange.bind(this)
    this.loadingAudio = this.loadingAudio.bind(this)
    this.handleCanPlay = this.handleCanPlay.bind(this)
    this.handleProgress = this.handleProgress.bind(this)
    this.changeCurTime = this.changeCurTime.bind(this)
  }
  componentDidMount() {
    // this.audio.src = 'http://m10.music.126.net/20180502160453/191bff2f187b1eea2eb3e992334b3396/ymusic/430d/5cda/073e/9dbd05f5faa9496202ec35bad477273c.mp3'
    this.audio.src = 'http://m10.music.126.net/20180503094931/bbc3140685fd5f6726c6ce83d717bfb0/ymusic/ea22/e332/e0b1/dcda6a860b0d24b635351b7a33f22edb.mp3'
  }
  refCB(ref) {
    this.audio = ref
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
    return (
      <div className="playbar-wrap">
        <audio controls="controls" ref={this.refCB} style={{ display: 'none' }} onProgress={this.handleProgress} onLoadedData={this.loadingAudio} onCanPlay={this.handleCanPlay} onLoadStart={this.loadingAudio} onDurationChange={this.handelDurationChange} />
        <div className="playbar">
          <div className="bg" />
          <div className="wrap" id="g_player">
            <div className="btns">
              <button className="play-btn btn-p" title="上一首">上一首</button>
              <button onClick={this.playOrPause} className={this.state.playing ? 'play-btn btn-paused' : 'play-btn btn-play'} title="播放/暂停">播放/暂停</button>
              <button className="play-btn btn-n" title="下一首">下一首</button>
            </div>
            <div className="headimg"><img alt="歌手头像" src="http://p1.music.126.net/YNP-XzDaRxWFUeN9B-fv3Q==/18659811836904204.jpg?param=34y34" /></div>
            <div className="play">
              <div className="wrods">
                <Link className="wrods-img1" to="./123">我与你 - Album Version</Link>
                <span>张学友</span>
                <Link className="wrods-img2" to="./123" />
              </div>
              <div className="pbar">
                <div className="barbg" id="barbg" onClick={this.changeCurTime}>
                  <div className="rdy" style={{ width: this.state.bufferPercent }} />
                  <div className="cur" style={{ width: this.state.currWidth }}>
                    <div className="cur-btn">
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
              <button className="oper-btn icn-vol" />
              <button className="oper-btn icn-loop" />
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
