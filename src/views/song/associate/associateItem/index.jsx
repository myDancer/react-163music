import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const AssociateItem = () => (
  <li className="ass-item">
    <div className="img-wrap">
      <Link to="/songlist">
        <img src="http://p4.music.126.net/4L--5jGuNNCdRxL10n_0-g==/19057835044326350.jpg?param=50y50" alt="头像" />
      </Link>
    </div>
    <div className="title-wrap">
      <p>
        <Link className="tit-link" to="/songlist">华语百首 | 回忆伤人无声，唱不尽世间遗憾</Link>
      </p>
      <p>
        <span>by</span>
        <Link className="des-link" to="/songlist">不会开挖掘机好丢...</Link>
      </p>
    </div>
  </li>
)
export default AssociateItem
