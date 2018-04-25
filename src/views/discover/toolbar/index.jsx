import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const Toolbar = (props) => {
  console.log(props)
  return (
    <div className="toolbar">
      <Link className="title" to="/recomend">热门推荐</Link>
      <ul className="tab">
        {props.toolbar.map(item => (
          <li key={item.url}>
            <Link to={item.url}>{item.name}</Link>
          </li>))}
      </ul>
      <span className="more">
        <Link to="/discover/playlist/">更多</Link>
        <i className="icn-more" />
      </span>
    </div>
  )
}
export default Toolbar
