import React from 'react'
import './style.styl'

class PreplayList extends React.Component {
  constructor(props) {
    super(props)
    this.prePlayVisible = this.prePlayVisible.bind(this)
    this.state = { preplayVisible: false }
    this.props.onRef(this)
  }
  prePlayVisible() {
    this.setState({ preplayVisible: !this.state.preplayVisible })
  }
  render() {
    return (
      <div className="preplay" style={{ display: this.state.preplayVisible ? 'block' : 'none' }}>
        <div className="preplay-hd">
          <h4>播放列表</h4>
          <button className="adddall">收藏全部</button>
          <span className="line" />
          <button className="clear">清除</button>
          <p>我与你</p>
          <button className="close" onClick={this.prePlayVisible} >X</button>
        </div>
        <div className="preplay-bd">
          <img className="imgbg" src="//music.163.com/api/img/blur/2537672838499047" alt="背景" />
          <div className="msk" />
          <div className="song-list">
            <ul>
              <li>
                <div className="col col1"><i className="playicn" /></div>
                <div className="col col2">我与你</div>
                <div className="col col3"><div className="icns"><i className="icn icn1" /><i className="icn icn2" /><i className="icn icn3" /><i className="icn icn4" /></div></div>
                <div className="col col4">张学友</div>
                <div className="col col5">06:02</div>
                <div className="col col6"><button className="icn-src" /></div>
              </li>
            </ul>
          </div>
          <div className="bline" />
          <div className="lyric">
            <p>当我这天回忆</p>
            <p>当我这天回忆</p>
            <p>当我这天回忆</p>
            <p>当我这天回忆</p>
            <p>当我这天回忆</p>
            <p>当我这天回忆</p>
            <p>当我这天回忆</p>
          </div>
        </div>
      </div>
    )
  }
}
export default PreplayList
