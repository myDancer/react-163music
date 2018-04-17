import React from 'react'
import './style.styl'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', labelShow: true }
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleFocus() {
    this.setState({ labelShow: false })
  }
  handleBlur() {
    this.setState({ labelShow: true })
  }
  render() {
    return (
      <div className="header-input-wrapper">
        <input id="header-input" className="header-input" type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
        <label htmlFor="header-input" style={{ visibility: this.state.labelShow ? 'visible' : 'hidden' }} className="header-label">音乐/视频/电台/用户</label>
      </div>
    )
  }
}
