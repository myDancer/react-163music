import React from 'react'
import { Link } from 'react-router-dom'
import { formatDuration } from '../../../common/js/util'
import './style.styl'

export default class SongInfo extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }
  handleMouseOver() {
    console.log(this)
  }
  render() {
    const { playlist } = this.props
    return (
      <div className="songtb">
        <div className="title">
          <h3>歌曲列表</h3>
          <span className="track-count">{playlist.trackCount}首歌</span>
          <div className="more">播放:<strong className="play-count">1924332</strong>次</div>
          <div className="out">
            <i className="icn-music" />
            <Link className="out-link" to="./3">生成外链播放器</Link>
          </div>
        </div>
        <div className="song-list">
          <table className="m-table">
            <thead>
              <tr>
                <th className="first"><div /></th>
                <th><div className="thbg th2" /></th>
                <th><div className="thbg th3" /></th>
                <th><div className="thbg th4" /></th>
                <th><div className="thbg th5" /></th>
              </tr>
            </thead>
            <tbody>
              {
                playlist.tracks && playlist.tracks.map((item, index) => (
                  <tr key={item.id} className="song-tr" onMouseOver={this.handleMouseOver}>
                    <td><div className="left"><button className="icn-play" /><span className="num">{index + 1}</span></div></td>
                    <td><div className="txt"><Link className="init-link" to="song/123">{item.name}</Link></div></td>
                    <td><span className="song-dur">{formatDuration(item.dt)}</span></td>
                    <td><div className="text"><Link className="init-link" to="song/123">{item.ar[0].name}</Link></div></td>
                    <td><div className="text"><Link className="init-link" to="song/123">{item.al.name}</Link></div></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
