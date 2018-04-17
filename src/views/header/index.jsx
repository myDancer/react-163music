import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './navItem'
import './style.styl'

export default class Header extends React.Component {
  constructor() {
    super()
    this.routes = [
      { url: '/find', name: '发现音乐' },
      { url: '/mymusic', name: '我的音乐' },
      { url: '/friends', name: '朋友' },
      { url: '/shop', name: '商场' },
      { url: '/musicpepole', name: '音乐人' },
      { url: '/download', name: '下载客户端' },
    ]
  }
  render() {
    const routes = this.routes
    console.log(routes)
    return (
      <div>
        <div className="header">
          <Link className="logo" to={{ pathname: '/' }}>
            MYSINGER
          </Link>
          <ul className="nav">
            {routes.map(route =>
              (<NavItem key={route.name} route={route} />))}
          </ul>
        </div>
      </div>
    )
  }
}

