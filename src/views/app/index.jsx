import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.styl'
import Header from '../header'

const App = () =>
  (
    <div className="dashboard">
      <Header />
    </div>
  )

export default withRouter(App)

