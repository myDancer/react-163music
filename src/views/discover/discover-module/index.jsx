import React from 'react'
import Toolbar from '../toolbar'
import SongList from '../songlist'
import Login from '../login'
import SingerList from '../singerlist'
import NewDisk from '../newDisk'
import HotDj from '../hotDJ'
import BillList from '../billlist'
import './style.styl'

const DiscoverModule = () => {
  const toolbar = {
    title: '热门推荐',
    urlList: [
      { url: '1', name: '华语' },
      { url: '2', name: '流行' },
      { url: '3', name: '摇滚' },
      { url: '4', name: '民谣' },
      { url: '5', name: '电子' },
    ],
  }
  const songList = [
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './1', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './2', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './3', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './4', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './5', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './6', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './7', title: '时光里，我们都是赶路人', playNum: '24w',
    },
    {
      imgUrl: 'http://p1.music.126.net/P5BW4BgCB92OTlNfnpN6LA==/19210667160665541.jpg?param=140y140', link: './8', title: '时光里，我们都是赶路人', playNum: '24w',
    },
  ]
  const singerList = [
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './1', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './2', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './3', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './4', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
    {
      avatar: 'http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62', link: './5', name: '张惠妹aMEI', label: '台湾歌手张惠妹',
    },
  ]
  const diskList = [
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: './1',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: './2',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: './3',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: './4',
    },
    {
      imgUrl: 'http://p4.music.126.net/cJ4BOjSwvoU3ai8zTe-q8Q==/109951163243389836.jpg?param=100y100', title: '爵士乐与不插电新编12首', name: '李志', link: './5',
    },
  ]
  const djList = [
    {
      imgUrl: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40', title: '心理学家、美食家陈立教授', name: '陈立', link: './5',
    },
  ]
  const billList = [
    {
      imgUrl: 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
      billTitle: '云音乐飙升榜',
      name: '陈立',
      link: './1',
      singList: [
        { songName: '你打不过我吧', link: '/123' },
        { songName: '你打不过我吧', link: '/1231' },
        { songName: '你打不过我吧', link: '/1232' },
        { songName: '你打不过我吧', link: '/1233' },
        { songName: '你打不过我吧', link: '/1234' },
        { songName: '你打不过我吧', link: '/1235' },
        { songName: '你打不过我吧', link: '/1236' },
        { songName: '你打不过我吧', link: '/1237' },
        { songName: '你打不过我吧', link: '/1238' },
        { songName: '你打不过我吧', link: '/1239' },
      ],
    },
    {
      imgUrl: 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
      billTitle: '云音乐飙升榜',
      name: '陈立',
      link: './2',
      singList: [
        { songName: '你打不过我吧', link: '/123' },
        { songName: '你打不过我吧', link: '/1231' },
        { songName: '你打不过我吧', link: '/1232' },
        { songName: '你打不过我吧', link: '/1233' },
        { songName: '你打不过我吧', link: '/1234' },
        { songName: '你打不过我吧', link: '/1235' },
        { songName: '你打不过我吧', link: '/1236' },
        { songName: '你打不过我吧', link: '/1237' },
        { songName: '你打不过我吧', link: '/1238' },
        { songName: '你打不过我吧', link: '/1239' },
      ],
    },
    {
      imgUrl: 'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
      billTitle: '云音乐飙升榜',
      name: '陈立',
      link: './3',
      singList: [
        { songName: '你打不过我吧', link: '/123' },
        { songName: '你打不过我吧', link: '/1231' },
        { songName: '你打不过我吧', link: '/1232' },
        { songName: '你打不过我吧', link: '/1233' },
        { songName: '你打不过我吧', link: '/1234' },
        { songName: '你打不过我吧', link: '/1235' },
        { songName: '你打不过我吧', link: '/1236' },
        { songName: '你打不过我吧', link: '/1237' },
        { songName: '你打不过我吧', link: '/1238' },
        { songName: '你打不过我吧', link: '/1239' },
      ],
    },
  ]
  return (
    <div className="discover-module">
      <div className="l-wrap">
        <div className="l-wrap1">
          <Toolbar toolbar={toolbar} />
          <SongList songList={songList} />
        </div>
        <div className="l-wrap1">
          <Toolbar toolbar={{ title: '新碟上架' }} />
          <NewDisk diskList={diskList} />
        </div>
        <div className="l-wrap1">
          <Toolbar toolbar={{ title: '榜单' }} />
          <BillList billList={billList} />
        </div>
      </div>
      <div className="r-wrap">
        <Login />
        <SingerList singerList={singerList} />
        <HotDj djList={djList} />
      </div>
    </div>
  )
}
export default DiscoverModule
