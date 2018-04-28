import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const Toolbar = (props) => {
  let urlList
  if (props.toolbar.urlList) {
    urlList = (
      <ul className="tab">
        {props.toolbar.urlList.map(item => (
          <li key={item.url}>
            <Link className="tab-a" to={item.url}>{item.name}</Link>
          </li>))}
      </ul>
    )
  }
  return (
    <div className="toolbar">
      <Link className="title" to="/recomend">{props.toolbar.title}</Link>
      {urlList}
      <span className="more">
        <Link to="/discover/playlist/">更多</Link>
        <i className="icn-more" />
      </span>
    </div>
  )
}
export default Toolbar
