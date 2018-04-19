import React from 'react'
import { withRouter } from 'react-router-dom'
import SubMenuItem from './subNavItem'
import './style.styl'


class Login extends React.Component {
  constructor() {
    super()
    this.subMenu = [
      { name: '推荐', id: 'recommend' },
      { name: '排行榜', id: 'toplist' },
      { name: '歌单', id: 'playlist' },
      { name: '主播电台', id: 'djradio' },
      { name: '歌手', id: 'artist' },
      { name: '新碟上架', id: 'album' },
    ]
  }
  render() {
    const subMenu = this.subMenu
    let subNav
    if (this.props.location.pathname.indexOf('/discover') !== -1) {
      subNav = (
        <div className="subnav">
          <div className="subnav-wrapper">
            <ul className="subnav-ul">
              {subMenu.map(item => <SubMenuItem subMenu={item} key={item.id} />)}
            </ul>
          </div>
        </div>
      )
    } else {
      subNav = <div className="subLine" />
    }
    return (
      <div>
        {subNav}
      </div>
    )
  }
}
export default withRouter(Login)
