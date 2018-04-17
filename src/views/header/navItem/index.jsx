import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
  const route = props.route
  return <li><NavLink to={route.url}>{route.name}</NavLink></li>
}

export default NavItem
