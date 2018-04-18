import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.styl'
import Header from '../header'
import { Routes } from '../../router'

const App = () =>
  (
    <div className="dashboard">
      <Header />
      <div className="views">
        <Routes />
      </div>
    </div>
  )

export default withRouter(App)

