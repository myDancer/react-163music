import React from 'react'
import './style.styl'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.subMenu = [
      { name: '推荐', id: '1' },
      { name: '排行榜', id: '2' },
      { name: '歌单', id: '3' },
      { name: '主播电台', id: '4' },
      { name: '歌手', id: '5' },
      { name: '新碟上架', id: '6' },
    ]
  }
  render() {
    const subMenu = this.subMenu
    return (
      <div className="subnav">
        <div className="subnav-wrapper">
          <ul>
            {subMenu.map(item => <li key={item.id} className="subnav-item"><span>{item.name}</span></li>)}
          </ul>
        </div>
      </div>
    )
  }
}
