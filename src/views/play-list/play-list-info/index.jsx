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
          <div className="user">
            <Link className="face" to="user/123"><img alt="头像" src="http://p1.music.126.net/ytKbmuYKF7Kq4yAiOUZiOA==/1419469519303066.jpg?param=40y40" /></Link>
            <Link className="name" to="user/123" > Ian_Icebear</Link>
            <sup className="icn-star" />
            <span className="time">2018-04-11 创建</span>
          </div>
          <div className="btn-group">
            <a className="info-btn icn-blue" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}><i className="btn-i icn-play"><em className={this.state.showbg} />播放</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-collect">收藏</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-share">分享</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-download">下载</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-comment">(4704)</i></a>
          </div>
          <div className="tags">
            <span>标签：  </span>
            <a className="tag"><i>华语</i></a>
            <a className="tag"><i>民谣</i></a>
            <a className="tag"><i>吉他</i></a>
          </div>
          <p className="intro">
            <b>介绍：</b>
              不怕会撩妹的汉子有文化，只怕他们有吉他，当民谣歌手拿起吉他撩妹，你还能把持得住吗？<br />
              封面，赵雷
            <br />
          </p>
        </div>
      </div>
    )
  }
}

export default SongInfo
