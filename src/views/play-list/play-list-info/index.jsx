import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

class SongInfo extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.state = { showbg: 'ply' }
  }
  handleMouseOver() {
    this.setState({ showbg: 'plyhover' })
  }
  handleMouseOut() {
    this.setState({ showbg: 'ply' })
  }
  render() {
    return (
      <div className="song-wrap">
        <div className="img-wrap">
          <div className="img-cover">
            <img src="http://p1.music.126.net/ImOQNmJZTzogPdt0-AsyDA==/19045740416582430.jpg?param=130y130" alt="图片" />
            <span className="img-msk" />
          </div>
        </div>
        <div className="content">
          <div className="head">
            <i className="playlist-lab" />
            <div className="title">
              <em>电台情歌</em>
            </div>
          </div>
          <p className="des">
            歌手：<span><Link to="singer/123">莫文蔚</Link></span>
          </p>
          <p className="des">
            所属专辑：<span><Link to="album/123">做自己 to be</Link></span>
          </p>
          <div className="btn-group">
            <a className="info-btn icn-blue" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}><i className="btn-i icn-play"><em className={this.state.showbg} />播放</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-collect">收藏</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-share">分享</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-download">下载</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-comment">(4704)</i></a>
          </div>
          <div className="lyric-content">
            作曲 : 王治平<br />
            作词 : 姚谦<br />
            谁能够将天上月亮电源关掉<br />
            它把你我沉默照得太明了<br />
            关於爱情我们了解的太少<br />
            爱了以后又不觉可靠<br />
            你和我看着霓虹<br />
            穿过了爱情的街道<br />
            有种不真实味道<br />
            我们一直忘了要搭一座挢<br />
            到对方的心底瞧一瞧<br />
            体会彼此什麽才最需要<br />
            别再寂寞的拥抱<br />
          </div>
        </div>
      </div>
    )
  }
}

export default SongInfo
