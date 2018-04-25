import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

export default function SingerList(props) {
  return (
    <div className="singer-list">
      <h3 className="header-h3">
        <span className="header-fl">入驻歌手</span>
        <Link className="header-fr" to="/singer">查看全部 &gt; </Link>
      </h3>
      <ul className="singer">
        {props.singerList.map(item => (
          <li className="singer-item" key={item.link}>
            <Link to={item.link}>
              <div className="item-l"><img alt="头像" src={item.avatar} /></div>
              <div className="item-r">
                <h4>{item.name}</h4>
                <p>{item.label}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
