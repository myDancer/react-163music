import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.styl'

export default class SubMenuItem extends React.Component {
  constructor() {
    super()
    this.state = { isActive: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ isActive: true })
  }
  render() {
    const subMenu = this.props.subMenu
    return (
      <li className="subnav-item">
        <NavLink to={{ pathname: `/discover/${subMenu.id}` }} onClick={this.handleClick}><span style={{ backgroundColor: this.state.isActive ? '#9B0909' : null }} >{subMenu.name}</span></NavLink>
      </li>
    )
  }
}
