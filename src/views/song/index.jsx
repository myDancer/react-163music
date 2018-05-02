import React from 'react'
import SongInfo from './song-info'
import Comment from './comment'
import Associate from './associate'
import './style.styl'

const Song = () => (
  <div className="song-bg">
    <div className="song-warp">
      <div className="song-info">
        <SongInfo />
        <Comment />
      </div>
    </div>
    <div className="right-warp">
      <Associate />
    </div>
  </div>
)
export default Song
