import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './navItem'
import Search from './search'
import Login from './login'
import SubNav from './subNav'
import './style.styl'

export default class Header extends React.Component {
  constructor() {
    super()
    this.routes = [
      { url: '/discover', name: '发现音乐' },
      { url: '/myMusic', name: '我的音乐' },
      { url: '/friend', name: '朋友' },
      { url: '/shop', name: '商场' },
      { url: '/musicpepole', name: '音乐人' },
      { url: '/download', name: '下载客户端' },
    ]
  }
  render() {
    const routes = this.routes
    return (
      <div className="header">
        <div className="header-wrapper">
          <Link className="logo" to={{ pathname: '/' }}>
            MYSINGER
          </Link>
          <ul className="nav">
            {routes.map(route =>
              (<NavItem key={route.name} route={route} />))}
          </ul>
          <Login />
          <a className="header-link" href="http://music.163.com/login?targetUrl=%2Fuservideo">视频投稿</a>
          <Search />
        </div>
        <SubNav />
      </div>
    )
  }
}
