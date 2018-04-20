import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './style.styl'
import Header from '../header'
import { Routes } from '../../router'

const App = (props) => {
  const { pathname } = props.location
  return (
    <div className="dashboard">
      {pathname === '/' ? <Redirect to="/discover/recommend" /> : null}
      <Header />
      <div className="views">
        <Routes />
      </div>
    </div>
  )
}

export default withRouter(App)

