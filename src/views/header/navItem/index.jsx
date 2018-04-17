import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.styl'

const NavItem = (props) => {
  const route = props.route
  return <li><NavLink to={route.url} activeClassName="selected">{route.name}</NavLink></li>
}

export default NavItem
