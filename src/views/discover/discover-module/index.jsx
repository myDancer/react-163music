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
  const songList = [
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './123', title: '时光里，我们都是赶路人', playNum: '24w',
    },
  ]
  return (
    <div className="discover-module">
      <div className="g-wrap">
        <Toolbar toolbar={toolbar} />
        <SongList songList={songList} />
      </div>
      <Login />
      <SingerList />
    </div>
  )
}
export default DiscoverModule
