import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './style.styl'

class SubMenuItem extends React.Component {
  constructor() {
    super()
    this.isActive = false
  }
  render() {
    const subMenu = this.props.subMenu
    if (this.props.location.pathname.indexOf(subMenu.id) !== -1) {
      this.isActive = true
    } else {
      this.isActive = false
    }
    return (
      <li className="subnav-item">
        <NavLink to={{ pathname: `/discover/${subMenu.id}` }}><span style={{ backgroundColor: this.isActive ? '#9B0909' : null }} >{subMenu.name}</span></NavLink>
      </li>
    )
  }
}
export default withRouter(SubMenuItem)
