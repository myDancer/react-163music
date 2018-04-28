import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const PlayBar = () => (
  <div className="playbar-wrap">
    <div className="playbar">
      <div className="bg" />
      <div className="wrap">
        <div className="btns">
          <button className="play-btn btn-p" title="上一首">上一首</button>
          <button className="play-btn btn-s" title="播放/暂停">播放/暂停</button>
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
            <div className="barbg">
              <div className="cur">
                <div className="cur-btn">
                  <i />
                </div>
              </div>
            </div>
          </div>
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
export default PlayBar
