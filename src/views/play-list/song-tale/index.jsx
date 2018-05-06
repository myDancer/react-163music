import React from 'react'
import { Link } from 'react-router-dom'
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
    return (
      <div className="songtb">
        <div className="title">
          <h3>歌曲列表</h3>
          <span className="track-count">19首歌</span>
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
              <tr className="song-tr" onMouseOver={this.handleMouseOver}>
                <td className="left"><button className="icn-play" /><span className="num">1</span></td>
                <td><div><Link className="init-link" to="song/123">一样的月光</Link></div></td>
                <td><span className="song-dur">03:55</span></td>
                <td><span><Link className="init-link" to="song/123">徐佳莹</Link></span></td>
                <td><Link className="init-link" to="song/123">LaLa首张创作</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
