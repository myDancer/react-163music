import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './style.styl'

class NavItem extends React.Component {
  constructor(props) {
    super(props)
    this.route = props.route
  }
  render() {
    const route = this.route
    let showTrangle = null
    if (this.props.location.pathname.indexOf(route.url) !== -1) {
      showTrangle = <div className="nav-trangle" />
    }
    return <li><NavLink to={route.url} activeClassName="selected">{route.name}</NavLink>{showTrangle}</li>
  }
}
export default withRouter(NavItem)
