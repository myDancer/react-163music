import React from 'react'
import { Link } from 'react-router-dom'

const Toolbar = () => (
  <div>
    <ul>
      {this.props.url.map(item => (
        <li>
          <Link to={item.url}>{item.name}</Link>
        </li>))}
    </ul>
  </div>
)
export default Toolbar
