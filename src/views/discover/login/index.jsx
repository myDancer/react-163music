import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

export default function Login() {
  return (
    <div className="login-wrap">
      <p className="login-note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <Link className="login-btn" to="">登陆</Link>
    </div>
  )
}
