import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { changeCurrent, addPrepareList, changeCurIndex } from '../../../redux/preparelist.redux'
import { fetchSong } from '../../../redux/song.redux'
import './style.styl'

const parseLyric = (lyricStr) => {
  let lyricArry = []
  const lyric = lyricStr.replace(/\[\d{2}[:.]\d{2}.\d{1,3}\]/g, '')
  lyricArry = lyric.split('\n')
  return lyricArry
}
@connect( // 将store和组件联系在一起
  state => ({ // mapStateToProps
    prepareObj: state.prepareListReducer,
  }),
  { // mapDispatchToProps
    changeCurrent, fetchSong, addPrepareList, changeCurIndex,
  },
)
class SongInfo extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.playMusic = this.playMusic.bind(this)
    this.extendsLyr = this.extendsLyr.bind(this)
    this.state = { showbg: 'ply', moreLyr: false }
  }
  extendsLyr() {
    if (this.state.moreLyr) {
      this.setState({ moreLyr: false })
    } else {
      this.setState({ moreLyr: true })
    }
  }
  playMusic() {
    this.props.changeCurrent(this.props.songs[0])
    this.props.addPrepareList(this.props.songs[0])
    this.props.changeCurIndex(this.props.prepareObj.preparelist.length)
    this.props.fetchSong(this.props.match.params.id)
  }
  handleMouseOver() {
    this.setState({ showbg: 'plyhover' })
  }
  handleMouseOut() {
    this.setState({ showbg: 'ply' })
  }
  render() {
    const { songs } = this.props
    const { lrc } = this.props
    let lyricArry = []
    let shortLyric = ''
    let moreLyric = ''
    if (lrc) {
      lyricArry = parseLyric(lrc.lyric)
      shortLyric = lyricArry.slice(0, 13).join('\n')
      moreLyric = lyricArry.slice(13).join('\n')
    }
    return (
      <div className="song-info-wrap">
        <div className="img-wrap">
          <div className="img-cover">
            <img src={`${songs.length && songs[0].al.picUrl}?param=130y130`} alt="图片" />
            <span className="img-msk" />
          </div>
          <div className="out">
            <i className="icn-music" />
            <Link className="out-link" to="./3">生成外链播放器</Link>
          </div>
        </div>
        <div className="content">
          <div className="head">
            <i className="lab" />
            <div className="title">
              <em>{songs.length && songs[0].name}</em>
            </div>
          </div>
          <p className="des">
            歌手：<span><Link to="singer/123">{songs.length && songs[0].ar[0].name}</Link></span>
          </p>
          <p className="des">
            所属专辑：<span><Link to="album/123">{songs.length && songs[0].al.name}</Link></span>
          </p>
          <div className="btn-group">
            <a className="info-btn icn-blue" onClick={this.playMusic} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}><i className="btn-i icn-play"><em className={this.state.showbg} />播放</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-collect">收藏</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-share">分享</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-download">下载</i></a>
            <a className="info-btn icn-white"><i className="btn-i icn-comment">(4704)</i></a>
          </div>
          <div className="lyric-content">
            {shortLyric}
            <div style={{ display: this.state.moreLyr ? 'block' : 'none' }}>{moreLyric}</div>
            <button onClick={this.extendsLyr} className="more">{this.state.moreLyr ? '收起' : '展开'}<i className={`down ${this.state.moreLyr ? 'up' : ''}`} /></button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SongInfo)
