import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.styl'

class NavItem extends React.Component {
  constructor(props) {
    super(props)
    this.route = props.route
  }
  render() {
    const route = this.route
    let showTrangle = null
    showTrangle = <div className="nav-trangle" />

    return <li><NavLink to={route.url} activeClassName="selected">{route.name}</NavLink>{showTrangle}</li>
  }
}
export default NavItem
