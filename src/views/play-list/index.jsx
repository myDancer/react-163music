import React from 'react'
import PlyaListInfo from './play-list-info'
import SongTable from './song-tale'
import Comment from '../song/comment'
import Associate from '../song/associate'
import './style.styl'

const PlyaList = () => (
  <div className="song-bg">
    <div className="song-warp">
      <div className="song-info">
        <PlyaListInfo />
        <SongTable />
        <Comment />
      </div>
    </div>
    <div className="right-warp">
      <Associate />
    </div>
  </div>
)
export default PlyaList
