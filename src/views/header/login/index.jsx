import React from 'react'
import './style.styl'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.menuList = [
      { name: '手机号登陆', id: 'phone' },
      { name: '微信登陆', id: 'wx' },
      { name: 'qq登陆', id: 'qq' },
      { name: '新浪微博登陆', id: 'sina' },
      { name: '网易邮箱账号登陆', id: 'wy' },
    ]
  }
  render() {
    const menuList = this.menuList
    return (
      <div className="login">
        <a className="login-link">登陆</a>
        <div className="menu-dialog">
          <i className="icn icn-trangle" />
          <ul>
            {menuList.map(item =>
              (<li key={item.id}><div className="menu-item"><i className={`icn icn-${item.id}`} /><span>{item.name}</span></div></li>))}
          </ul>
        </div>
      </div>
    )
  }
}
