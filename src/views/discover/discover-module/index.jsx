import React from 'react'
import Toolbar from '../toolbar'
import SongList from '../songlist'
import Login from '../login'
import SingerList from '../singerlist'
import './style.styl'

const DiscoverModule = () => {
  const toolbar = [
    { url: '1', name: '华语' },
    { url: '2', name: '流行' },
    { url: '3', name: '摇滚' },
    { url: '4', name: '民谣' },
    { url: '5', name: '电子' },
  ]
  return (
    <div>
      <div className="g-wrap">
        <Toolbar toolbar={toolbar} />
        <SongList />
      </div>
      <Login />
      <SingerList />
    </div>
  )
}
export default DiscoverModule
