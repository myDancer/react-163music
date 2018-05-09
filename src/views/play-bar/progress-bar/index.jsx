import React from 'react'
import { formatCurrentTime } from '../../../common/js/util'

// 未完成，将play-bar的进度条抽取出来
export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.changeCurTime = this.changeCurTime.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.state = {
      currentTime: '00:00',
      audioDuration: '00:00',
      currWidth: '0%',
      audioLoading: false,
      bufferPercent: '0%',
    }
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
  // 鼠标在进度点处按下
  handleMouseDown() {
    this.props.handleMouseDown({ sliderOption: { isDrag: true } })
  }
  render() {
    return (
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
    )
  }
}
