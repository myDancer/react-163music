import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const hotDJ = props => (
  <div className="dj-wrap">
    <h3 className="hd-3">热门主播</h3>
    <ul className="dj-ul">
      {props.djList.map(item => (
        <li key={item.link}>
          <div className="left-wrap"><img alt="avater" src={item.imgUrl} /></div>
          <div className="right-wrap">
            <p><Link className="r-name" to={item.link}>{item.name}</Link></p>
            <p className="r-title">{item.title}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default hotDJ
