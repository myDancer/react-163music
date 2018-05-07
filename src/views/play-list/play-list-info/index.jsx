import React from 'react'
import { Link } from 'react-router-dom'
import { formatTimeStamp } from '../../../common/js/util'
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
    const { playlist } = this.props
    console.log(this.props)
    return (
      <div className="song-wrap">
        <div className="img-wrap">
          <div className="img-cover">
            <img src={playlist.coverImgUrl} alt="图片" />
            <span className="img-msk" />
          </div>
        </div>
        <div className="content">
          <div className="head">
            <i className="playlist-lab" />
            <div className="title">
              <em>{playlist.name}</em>
            </div>
          </div>
          <div className="user">
            <Link className="face" to="user/123"><img alt="头像" src={`${playlist.creator && playlist.creator.avatarUrl}?param=40y40`} /></Link>
            <Link className="name" to="user/123" >{playlist.creator && playlist.creator.nickname}</Link>
            <sup className="icn-star" />
            <span className="time">{formatTimeStamp(playlist.createTime)} 创建</span>
          </div>
          <div className="btn-group">
            <a className="info-btn icn-blue" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}><i className="btn-i icn-play"><em className={this.state.showbg} />播放</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-collect">({playlist.subscribedCount})</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-share">({playlist.shareCount})</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-download">下载</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-comment">({playlist.commentCount})</i></a>
          </div>
          <div className="tags">
            <span>标签：  </span>
            {
              playlist.tags && playlist.tags.map(item => (<a className="tag" key={item}><i>{item}</i></a>))
            }
          </div>
          <p className="intro">
            <b>介绍：</b>
            {playlist.description}
          </p>
        </div>
      </div>
    )
  }
}

export default SongInfo
